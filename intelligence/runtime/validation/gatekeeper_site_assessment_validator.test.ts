import { describe, expect, it } from "vitest";

import {
  GATEKEEPER_SITE_ASSESSMENT_OUTPUTS,
} from "./gatekeeper_site_assessment_validator";
import { validateProcessorOutput } from "./validator";

const validAssessment = {
  provisional_industry: "D2C",
  provisional_sub_industry: "Grounded free-form creator tools specialty",
  entity_category: "BRAND",
  english_evidence_status: "SUFFICIENT",
  creator_marketing_applicability: "APPLICABLE",
  commercial_destination_types: ["WEBSITE"],
  assessment_confidence: "HIGH",
};

function validate(raw_output: unknown, overrides: Record<string, unknown> = {}) {
  return validateProcessorOutput({
    processor_id: "gatekeeper_site_assessment",
    active_outputs: [...GATEKEEPER_SITE_ASSESSMENT_OUTPUTS],
    raw_output,
    output_contract_id: "gatekeeper_site_assessment_output_contract",
    output_contract_version: "1.0-frozen",
    ...overrides,
  });
}

describe("standalone Gatekeeper site-assessment validation", () => {
  it("accepts a supported assessment with a free-form provisional Sub-industry", () => {
    expect(validate(validAssessment)).toMatchObject({ ok: true });
  });

  it("accepts a null provisional Sub-industry", () => {
    expect(
      validate({ ...validAssessment, provisional_sub_industry: null }),
    ).toMatchObject({ ok: true });
  });

  it("accepts unresolved and unsupported assessment signals without inventing an outcome", () => {
    expect(
      validate({
        ...validAssessment,
        provisional_industry: null,
        provisional_sub_industry: null,
        entity_category: "UNKNOWN",
        english_evidence_status: "UNCERTAIN",
        creator_marketing_applicability: "UNCERTAIN",
        commercial_destination_types: [],
        assessment_confidence: "LOW",
      }),
    ).toMatchObject({ ok: true });
    expect(
      validate({ ...validAssessment, provisional_industry: "MEDIA" }),
    ).toMatchObject({ ok: true });
  });

  it("rejects fields owned by admission decision or runtime telemetry", () => {
    expect(
      validate({
        ...validAssessment,
        reason_code: "UNSUPPORTED_INDUSTRY",
        manual_review_eligible: true,
      }),
    ).toMatchObject({ ok: false, validation_stage: "STRUCTURAL" });
  });

  it("rejects missing fields, duplicate destinations, and legacy Industry aliases", () => {
    const { assessment_confidence: _missing, ...missing } = validAssessment;
    expect(validate(missing)).toMatchObject({
      ok: false,
      validation_stage: "STRUCTURAL",
    });
    expect(
      validate({
        ...validAssessment,
        commercial_destination_types: ["WEBSITE", "WEBSITE"],
      }),
    ).toMatchObject({ ok: false, validation_stage: "STRUCTURAL" });
    expect(
      validate({ ...validAssessment, provisional_industry: "AI_SAAS" }),
    ).toMatchObject({ ok: false, validation_stage: "STRUCTURAL" });
  });

  it("requires the complete frozen output set", () => {
    expect(
      validate(validAssessment, { active_outputs: ["provisional_industry"] }),
    ).toMatchObject({
      ok: false,
      validation_stage: "CONFIGURATION",
      issues: [{ code: "PARTIAL_OUTPUT_NOT_ALLOWED" }],
    });
  });

  it("fails closed for unknown output-contract IDs and versions", () => {
    expect(
      validate(validAssessment, { output_contract_id: "unknown_contract" }),
    ).toMatchObject({
      ok: false,
      validation_stage: "CONFIGURATION",
      issues: [{ code: "OUTPUT_CONTRACT_ID_MISMATCH" }],
    });
    expect(
      validate(validAssessment, { output_contract_version: "9.9-unknown" }),
    ).toMatchObject({
      ok: false,
      validation_stage: "CONFIGURATION",
      issues: [{ code: "OUTPUT_CONTRACT_VERSION_MISMATCH" }],
    });
  });
});
