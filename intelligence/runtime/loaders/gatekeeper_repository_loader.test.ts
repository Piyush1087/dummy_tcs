import { describe, expect, it } from "vitest";

import { GatekeeperValidationAdapter } from "../integration/gatekeeper_validation_adapter";
import { AllowlistedDefinitionLoader } from "./allowlisted_definition_loader";
import { GatekeeperRepositoryLoader } from "./gatekeeper_repository_loader";
import { IdentityRepositoryLoader } from "./identity_repository_loader";
import { SafeYamlLoader } from "./yaml_loader";

const yaml = new SafeYamlLoader(process.cwd());
const gatekeeper = new GatekeeperRepositoryLoader(yaml);

const assessment = {
  provisional_industry: "D2C",
  provisional_sub_industry: "Free-form outside the Identity taxonomy",
  entity_category: "BRAND",
  english_evidence_status: "SUFFICIENT",
  creator_marketing_applicability: "APPLICABLE",
  commercial_destination_types: ["WEBSITE"],
  assessment_confidence: "HIGH",
};

describe("bounded allow-listed Gatekeeper loading", () => {
  it("loads the standalone profile, processor and frozen artifacts", async () => {
    await expect(
      gatekeeper.loadExecutionProfile("gatekeeper_scan"),
    ).resolves.toMatchObject({ id: "gatekeeper_scan", version: "1.1-frozen" });
    await expect(
      gatekeeper.loadProcessor("gatekeeper_site_assessment"),
    ).resolves.toMatchObject({
      id: "gatekeeper_site_assessment",
      version: "1.0-frozen",
    });
    await expect(gatekeeper.loadArtifact("output_contract")).resolves.toMatchObject({
      id: "gatekeeper_site_assessment_output_contract",
      version: "1.0-frozen",
    });
    await expect(gatekeeper.loadValidationBundle()).resolves.toMatchObject({
      rules: { id: "gatekeeper_site_assessment_rules" },
      taxonomy: { id: "admission_industry_taxonomy" },
    });
  });

  it("rejects unknown semantic IDs", async () => {
    await expect(gatekeeper.loadExecutionProfile("identity_test")).rejects.toMatchObject({
      code: "PROFILE_NOT_ALLOWED",
    });
    await expect(gatekeeper.loadProcessor("industry_classification")).rejects.toMatchObject({
      code: "PROCESSOR_NOT_CONFIGURED",
    });
    await expect(gatekeeper.loadArtifact("../taxonomy_contract.yaml")).rejects.toMatchObject({
      code: "ARTIFACT_NOT_CONFIGURED",
    });
  });

  it("rejects unsafe allow-listed paths and contract metadata drift", async () => {
    const unsafe = new AllowlistedDefinitionLoader(yaml, {
      unsafe: { path: "../outside.yaml", expectedId: "outside" },
    });
    const mismatched = new AllowlistedDefinitionLoader(yaml, {
      profile: {
        path: "intelligence/runtime/execution_profiles/gatekeeper_scan.yaml",
        expectedId: "gatekeeper_scan",
        expectedVersion: "9.9-unknown",
      },
    });

    await expect(unsafe.load("unsafe")).rejects.toMatchObject({
      code: "CONFIG_PATH_INVALID",
    });
    await expect(mismatched.load("profile")).rejects.toMatchObject({
      code: "DEFINITION_VERSION_MISMATCH",
    });
  });

  it("validates through standalone definitions without Identity taxonomy", async () => {
    const adapter = new GatekeeperValidationAdapter(gatekeeper);

    await expect(adapter.validateAssessment(assessment)).resolves.toMatchObject({
      ok: true,
    });
  });

  it("keeps the Identity loader operational as a compatibility wrapper", async () => {
    const identity = new IdentityRepositoryLoader(yaml);

    await expect(identity.loadExecutionProfile("identity_test")).resolves.toMatchObject({
      id: "identity_test",
    });
    await expect(
      identity.loadProcessor("industry_classification", "industry_niche"),
    ).resolves.toMatchObject({
      processor_id: "industry_classification",
      processor_scope: "industry_niche",
    });
    await expect(identity.loadGlobalArtifacts()).resolves.toMatchObject({
      runtime_context: { id: "global.runtime_context" },
    });
    await expect(
      identity.loadProcessorArtifacts("industry_classification", "industry_niche"),
    ).resolves.toMatchObject({
      reasoning: { id: "industry_classification.industry_niche.reasoning" },
      output_contract: { id: "industry_classification.output_contract" },
    });
  });
});
