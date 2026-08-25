import { GatekeeperSiteAssessmentSchema } from "./gatekeeper_site_assessment_schemas";
import { parseWithSchema, validationFailure } from "./validation_result";

export const GATEKEEPER_SITE_ASSESSMENT_PROCESSOR_ID =
  "gatekeeper_site_assessment";
export const GATEKEEPER_SITE_ASSESSMENT_OUTPUT_CONTRACT_ID =
  "gatekeeper_site_assessment_output_contract";
export const GATEKEEPER_SITE_ASSESSMENT_OUTPUT_CONTRACT_VERSION = "1.0-frozen";

export const GATEKEEPER_SITE_ASSESSMENT_OUTPUTS = [
  "provisional_industry",
  "provisional_sub_industry",
  "entity_category",
  "english_evidence_status",
  "creator_marketing_applicability",
  "commercial_destination_types",
  "assessment_confidence",
] as const;

export type GatekeeperSiteAssessmentValidationRequest = {
  active_outputs: readonly string[];
  raw_output: unknown;
};

export function validateGatekeeperSiteAssessment(
  request: GatekeeperSiteAssessmentValidationRequest,
) {
  const requested = new Set(request.active_outputs);
  const exactOutputSet =
    requested.size === GATEKEEPER_SITE_ASSESSMENT_OUTPUTS.length &&
    GATEKEEPER_SITE_ASSESSMENT_OUTPUTS.every((output) => requested.has(output));

  if (!exactOutputSet) {
    return validationFailure("CONFIGURATION", [
      {
        path: ["active_outputs"],
        code: "PARTIAL_OUTPUT_NOT_ALLOWED",
        message:
          "gatekeeper_site_assessment requires its complete frozen output set",
      },
    ]);
  }

  return parseWithSchema(GatekeeperSiteAssessmentSchema, request.raw_output);
}
