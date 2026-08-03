import { executeProfile, type CompilerRequest, type CompilerRuntime, type ExecutionTask, type TaskResult } from "../compiler/compiler";
import type { IdentityRuntimeDependencies } from "./types";

export function createIdentityRuntime(deps: IdentityRuntimeDependencies) {
  const runtime: CompilerRuntime = {
    async runAiTask({ task, request, canonicalDependencies, persistResults }): Promise<TaskResult> {
      const processorExecutionId = await deps.telemetry.taskStarted("runtime_execution", task);
      try {
        const [processorDefinition, globalArtifacts, processorArtifacts, objects, modelRuntime, evidence] = await Promise.all([
          deps.definitions.loadProcessor(task.processorId, task.processorScope),
          deps.definitions.loadGlobalArtifacts(),
          deps.definitions.loadProcessorArtifacts(task.processorId, task.processorScope),
          deps.definitions.loadObjects(task.activeOutputs),
          deps.models.resolve(task.processorId, task.processorScope),
          deps.evidence.getEvidence({ task, websiteUrl: request.websiteUrl, entityId: request.entityId }),
        ]);

        const promptPackage = await deps.prompts.build({
          executionContext: {
            execution_id: "runtime_execution",
            processor_execution_id: processorExecutionId,
            entity_type: request.entityType,
            entity_id: request.entityId,
            processor_id: task.processorId,
            processor_scope: task.processorScope,
            active_outputs: task.activeOutputs,
          },
          processorDefinition,
          globalArtifacts,
          processorArtifacts,
          intelligenceObjects: objects,
          canonicalDependencies,
          evidence,
          resolvedModelRuntime: modelRuntime,
        });

        const provider = await deps.provider.execute({ promptPackage, resolvedModelRuntime: modelRuntime, websiteUrl: request.websiteUrl });
        const validated = await deps.validator.validate({ task, rawOutput: provider.output });
        if (!validated.ok || !validated.data) {
          const result: TaskResult = { taskId: task.id, state: "FAILED_VALIDATION", error: validated.error ?? { code: "OUTPUT_VALIDATION_FAILED", message: "Output failed validation" }, metadata: provider.metadata };
          await deps.telemetry.taskFinished(processorExecutionId, result);
          return result;
        }

        try {
          await deps.persistence.persist({ task, entityId: request.entityId, values: validated.data, persistResults });
        } catch (error) {
          const result: TaskResult = { taskId: task.id, state: "FAILED_PERSISTENCE", error: { code: "FAILED_PERSISTENCE", message: error instanceof Error ? error.message : "Persistence failed" } };
          await deps.telemetry.taskFinished(processorExecutionId, result);
          return result;
        }

        const result: TaskResult = { taskId: task.id, state: "SUCCEEDED", values: validated.data, metadata: provider.metadata };
        await deps.telemetry.taskFinished(processorExecutionId, result);
        return result;
      } catch (error) {
        const result: TaskResult = { taskId: task.id, state: "FAILED_PROVIDER", error: { code: "AI_TASK_FAILED", message: error instanceof Error ? error.message : "AI task failed" } };
        await deps.telemetry.taskFinished(processorExecutionId, result);
        return result;
      }
    },

    async runDeterministicTask({ task, request, canonicalDependencies, persistResults }): Promise<TaskResult> {
      const processorExecutionId = await deps.telemetry.taskStarted("runtime_execution", task);
      try {
        let values: Record<string, unknown>;
        if (task.processorId === "reporting_currency") {
          const country = canonicalDependencies.country;
          if (typeof country !== "string") throw new Error("country is required for reporting_currency");
          values = { reporting_currency: country === "IN" ? "INR" : "USD" };
        } else {
          throw new Error(`No deterministic resolver configured for ${task.processorId}`);
        }
        await deps.persistence.persist({ task, entityId: request.entityId, values, persistResults });
        const result: TaskResult = { taskId: task.id, state: "SUCCEEDED", values };
        await deps.telemetry.taskFinished(processorExecutionId, result);
        return result;
      } catch (error) {
        const result: TaskResult = { taskId: task.id, state: "FAILED_PRECHECK", error: { code: "DETERMINISTIC_TASK_FAILED", message: error instanceof Error ? error.message : "Deterministic task failed" } };
        await deps.telemetry.taskFinished(processorExecutionId, result);
        return result;
      }
    },
  };

  return {
    async executeIdentityTest(request: CompilerRequest) {
      const profile = await deps.profiles.load("identity_test");
      const executionId = await deps.telemetry.executionStarted({ profileId: profile.id, request });
      // Warm website evidence immediately; downstream processors may consume it after Gatekeeper.
      const evidenceWarmup = deps.evidence.prepareIdentityEvidence({ websiteUrl: request.websiteUrl, entityId: request.entityId }).catch(() => undefined);
      const result = await executeProfile(profile, request, runtime);
      await evidenceWarmup;
      await deps.telemetry.executionFinished(executionId, result);
      return { executionId, ...result };
    },
  };
}
