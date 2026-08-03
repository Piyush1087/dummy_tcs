export type TaskState = "PENDING"|"READY"|"RUNNING"|"SUCCEEDED"|"FAILED_PRECHECK"|"FAILED_PROVIDER"|"FAILED_VALIDATION"|"FAILED_PERSISTENCE"|"SKIPPED_DEPENDENCY";
export type ExecutionState = "PENDING"|"RUNNING"|"SUCCEEDED"|"PARTIAL"|"FAILED";

export type ExecutionTask = {
  id: string;
  processorId: string;
  processorScope?: string;
  kind: "AI"|"DETERMINISTIC";
  activeOutputs: string[];
  dependsOn?: string[];
  required?: boolean;
};

export type ExecutionProfile = {
  id: string;
  tasks: ExecutionTask[];
  persistResultsDefault: boolean;
};

export type CompilerRequest = {
  entityType: string;
  entityId: string;
  websiteUrl: string;
  persistResults?: boolean;
};

export type TaskResult = {
  taskId: string;
  state: TaskState;
  values?: Record<string, unknown>;
  error?: { code: string; message: string };
  metadata?: Record<string, unknown>;
};

export interface CompilerRuntime {
  runAiTask(args: {
    task: ExecutionTask;
    request: CompilerRequest;
    canonicalDependencies: Record<string, unknown>;
    persistResults: boolean;
  }): Promise<TaskResult>;
  runDeterministicTask(args: {
    task: ExecutionTask;
    request: CompilerRequest;
    canonicalDependencies: Record<string, unknown>;
    persistResults: boolean;
  }): Promise<TaskResult>;
}

export type CompilerResult = {
  profileId: string;
  state: ExecutionState;
  tasks: TaskResult[];
  validatedOutputs: Record<string, unknown>;
};

/**
 * Minimal DAG executor. Independent READY tasks run concurrently. Only values
 * from SUCCEEDED tasks are published as canonical dependencies.
 */
export async function executeProfile(
  profile: ExecutionProfile,
  request: CompilerRequest,
  runtime: CompilerRuntime
): Promise<CompilerResult> {
  const pending = new Map(profile.tasks.map(task => [task.id, task]));
  const results = new Map<string, TaskResult>();
  const canonical: Record<string, unknown> = {};
  const persistResults = request.persistResults ?? profile.persistResultsDefault;

  while (pending.size) {
    // Skip tasks whose required upstream task has definitively failed.
    for (const [id, task] of [...pending]) {
      const failedDependency = (task.dependsOn ?? []).find(dep => {
        const state = results.get(dep)?.state;
        return state && state !== "SUCCEEDED";
      });
      if (failedDependency && results.has(failedDependency)) {
        results.set(id, {
          taskId: id,
          state: "SKIPPED_DEPENDENCY",
          error: { code: "REQUIRED_DEPENDENCY_FAILED", message: `Dependency '${failedDependency}' did not succeed` }
        });
        pending.delete(id);
      }
    }

    const ready = [...pending.values()].filter(task =>
      (task.dependsOn ?? []).every(dep => results.get(dep)?.state === "SUCCEEDED")
    );

    if (!ready.length) {
      // Remaining graph is invalid/cyclic or references missing tasks.
      for (const [id] of pending) {
        results.set(id, { taskId: id, state: "FAILED_PRECHECK", error: { code: "EXECUTION_DAG_UNRESOLVED", message: "Task graph contains an unresolved or cyclic dependency" } });
      }
      pending.clear();
      break;
    }

    const batch = await Promise.all(ready.map(async task => {
      try {
        return task.kind === "AI"
          ? await runtime.runAiTask({ task, request, canonicalDependencies: { ...canonical }, persistResults })
          : await runtime.runDeterministicTask({ task, request, canonicalDependencies: { ...canonical }, persistResults });
      } catch (error) {
        return {
          taskId: task.id,
          state: "FAILED_PRECHECK" as const,
          error: { code: "UNHANDLED_TASK_ERROR", message: error instanceof Error ? error.message : "Unknown task error" }
        };
      }
    }));

    for (const result of batch) {
      results.set(result.taskId, result);
      pending.delete(result.taskId);
      if (result.state === "SUCCEEDED" && result.values) Object.assign(canonical, result.values);
    }
  }

  const ordered = profile.tasks.map(task => results.get(task.id)!).filter(Boolean);
  const requiredFailures = profile.tasks.some(task => task.required !== false && results.get(task.id)?.state !== "SUCCEEDED");
  const anySuccess = ordered.some(result => result.state === "SUCCEEDED");
  const allSuccess = ordered.length === profile.tasks.length && ordered.every(result => result.state === "SUCCEEDED");

  const state: ExecutionState = allSuccess ? "SUCCEEDED" : requiredFailures ? "FAILED" : anySuccess ? "PARTIAL" : "FAILED";
  return { profileId: profile.id, state, tasks: ordered, validatedOutputs: canonical };
}
