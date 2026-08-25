import {
  buildIdentityCoreSchema,
  GatekeeperSchema,
  IndustryNicheSchema,
  MarketGeographySchema,
  validateGatekeeperTaxonomy,
  type CanonicalIndustryTaxonomy,
  type IdentityCoreOutputId,
} from "./identity_schemas";
import { validateRegisteredProcessorOutput } from "./validator_registry";
import {
  issuesFromZod,
  parseWithSchema,
  validationFailure,
  type ValidationIssue,
  type ValidationResult,
} from "./validation_result";

export type ValidationRequest = {
  processor_id: string;
  processor_scope?: string;
  active_outputs: string[];
  raw_output: unknown;
  output_contract_id?: string;
  output_contract_version?: string;
  taxonomy?: CanonicalIndustryTaxonomy;
  legacy_industry_values?: string[];
};

export type { ValidationIssue, ValidationResult } from "./validation_result";

export function validateProcessorOutput(request: ValidationRequest): ValidationResult {
  if (request.processor_id === "gatekeeper_site_assessment") {
    return validateRegisteredProcessorOutput(request);
  }

  if (request.processor_id === "identity_core") {
    try {
      const schema = buildIdentityCoreSchema(request.active_outputs as IdentityCoreOutputId[]);
      return parseWithSchema(schema, request.raw_output);
    } catch (error) {
      return validationFailure("CONFIGURATION", [
        { path: [], code: "INVALID_ACTIVE_OUTPUT_CONFIGURATION", message: error instanceof Error ? error.message : "Invalid identity_core active output configuration" },
      ]);
    }
  }

  if (request.processor_id === "industry_classification" && request.processor_scope === "gatekeeper") {
    const structural = GatekeeperSchema.safeParse(request.raw_output);
    if (!structural.success) return validationFailure("STRUCTURAL", issuesFromZod(structural.error));
    if (!request.taxonomy) {
      return validationFailure("CONFIGURATION", [
        { path: [], code: "CANONICAL_TAXONOMY_REQUIRED", message: "Gatekeeper semantic validation requires canonical Industry/Sub-industry taxonomy" },
      ]);
    }
    const taxonomyIssues = validateGatekeeperTaxonomy(
      structural.data,
      request.taxonomy,
      request.legacy_industry_values ?? []
    );
    if (taxonomyIssues.length) {
      return validationFailure(
        "SEMANTIC",
        taxonomyIssues.map((message) => ({ path: ["industry", "sub_industry"], code: "TAXONOMY_MISMATCH", message }))
      );
    }
    return { ok: true, data: structural.data, issues: [] };
  }

  if (request.processor_id === "industry_classification" && request.processor_scope === "industry_niche") {
    return parseWithSchema(IndustryNicheSchema, request.raw_output);
  }

  if (request.processor_id === "market_geography") {
    return parseWithSchema(MarketGeographySchema, request.raw_output);
  }

  return validationFailure("CONFIGURATION", [
    { path: [], code: "VALIDATOR_NOT_CONFIGURED", message: `No validator configured for ${request.processor_id}${request.processor_scope ? `.${request.processor_scope}` : ""}` },
  ]);
}
