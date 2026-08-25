import { validateProcessorOutput, type ValidationIssue } from "../validation/validator";
import {
  GATEKEEPER_SITE_ASSESSMENT_OUTPUT_CONTRACT_ID,
  GATEKEEPER_SITE_ASSESSMENT_OUTPUT_CONTRACT_VERSION,
} from "../validation/gatekeeper_site_assessment_validator";
import { LegacyIdentityGatekeeperCompatibilityValidator } from "../validation/legacy_identity_gatekeeper_compatibility_validator";
import type { OutputValidatorPort } from "./types";
import type { SafeYamlLoader } from "../loaders/yaml_loader";

function issueSummary(stage: string, issues: ValidationIssue[]): string {
  const first = issues[0];
  if (!first) return `Output failed ${stage.toLowerCase()} validation`;
  const path = first.path.length ? ` at ${first.path.join(".")}` : "";
  return `${stage} validation failed${path}: ${first.message}`;
}

function adapterResult(result: ReturnType<typeof validateProcessorOutput>) {
  if (result.ok) {
    return { ok: true as const, data: result.data as Record<string, unknown> };
  }
  return {
    ok: false as const,
    error: {
      code: result.code,
      message: issueSummary(result.validation_stage, result.issues),
      validation_stage: result.validation_stage,
      issues: result.issues,
    },
  };
}

export class DefaultValidatorAdapter implements OutputValidatorPort {
  async validate({ task, rawOutput }: Parameters<OutputValidatorPort["validate"]>[0]) {
    const result = validateProcessorOutput({
      processor_id: task.processorId,
      processor_scope: task.processorScope,
      active_outputs: task.activeOutputs,
      raw_output: rawOutput,
      ...(task.processorId === "gatekeeper_site_assessment"
        ? {
            output_contract_id: GATEKEEPER_SITE_ASSESSMENT_OUTPUT_CONTRACT_ID,
            output_contract_version:
              GATEKEEPER_SITE_ASSESSMENT_OUTPUT_CONTRACT_VERSION,
          }
        : {}),
    });

    return adapterResult(result);
  }
}

export class IdentityCompatibilityValidatorAdapter implements OutputValidatorPort {
  private readonly defaultValidator = new DefaultValidatorAdapter();
  private readonly legacyGatekeeper: LegacyIdentityGatekeeperCompatibilityValidator;

  constructor(yaml: SafeYamlLoader) {
    this.legacyGatekeeper =
      new LegacyIdentityGatekeeperCompatibilityValidator(yaml);
  }

  async validate({ task, rawOutput }: Parameters<OutputValidatorPort["validate"]>[0]) {
    if (
      task.processorId === "industry_classification" &&
      task.processorScope === "gatekeeper"
    ) {
      return adapterResult(await this.legacyGatekeeper.validate(rawOutput));
    }

    return this.defaultValidator.validate({ task, rawOutput });
  }
}
