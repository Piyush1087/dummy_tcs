import { describe, expect, it } from "vitest";

import { IdentityRepositoryLoader } from "../loaders/identity_repository_loader";
import {
  RuntimeConfigError,
  SafeYamlLoader,
} from "../loaders/yaml_loader";
import { ModelRegistryResolver } from "../models/resolver";
import { validateProcessorOutput } from "../validation/validator";

const yaml = new SafeYamlLoader(process.cwd());
const identity = new IdentityRepositoryLoader(yaml);

const identityTaxonomy = {
  D2C: ["BEAUTY_PERSONAL_CARE", "OTHER_D2C"],
};

const supportedLegacyGatekeeperOutput = {
  status: "RESOLVED",
  eligibility: "SUPPORTED",
  industry: "D2C",
  sub_industry: "BEAUTY_PERSONAL_CARE",
  detected_business_type: null,
};

describe("M2.0 reference runtime baseline", () => {
  it("routes Identity Core through active-output validation", () => {
    const result = validateProcessorOutput({
      processor_id: "identity_core",
      active_outputs: ["brand_name"],
      raw_output: { brand_name: "Creator Shop" },
    });

    expect(result).toMatchObject({ ok: true });
  });

  it("validates the legacy Gatekeeper compatibility output", () => {
    const result = validateProcessorOutput({
      processor_id: "industry_classification",
      processor_scope: "gatekeeper",
      active_outputs: ["industry", "sub_industry"],
      raw_output: supportedLegacyGatekeeperOutput,
      taxonomy: identityTaxonomy,
    });

    expect(result).toMatchObject({ ok: true });
  });

  it("captures the known legacy defect requiring controlled Sub-industry membership", () => {
    const result = validateProcessorOutput({
      processor_id: "industry_classification",
      processor_scope: "gatekeeper",
      active_outputs: ["industry", "sub_industry"],
      raw_output: {
        ...supportedLegacyGatekeeperOutput,
        sub_industry: "Grounded free-form specialty",
      },
      taxonomy: identityTaxonomy,
    });

    expect(result).toMatchObject({
      ok: false,
      validation_stage: "SEMANTIC",
      issues: [{ code: "TAXONOMY_MISMATCH" }],
    });
  });

  it("preserves Industry Niche validation", () => {
    const present = validateProcessorOutput({
      processor_id: "industry_classification",
      processor_scope: "industry_niche",
      active_outputs: ["industry_niche"],
      raw_output: { industry_niche: "Creator analytics" },
    });
    const absent = validateProcessorOutput({
      processor_id: "industry_classification",
      processor_scope: "industry_niche",
      active_outputs: ["industry_niche"],
      raw_output: { industry_niche: null },
    });

    expect(present).toMatchObject({ ok: true });
    expect(absent).toMatchObject({ ok: true });
  });

  it("fails closed for an unknown validator processor", () => {
    const result = validateProcessorOutput({
      processor_id: "unknown_processor" as never,
      active_outputs: ["unknown"],
      raw_output: {},
    });

    expect(result).toMatchObject({
      ok: false,
      validation_stage: "CONFIGURATION",
      issues: [{ code: "VALIDATOR_NOT_CONFIGURED" }],
    });
  });

  it("loads only the allow-listed Identity test profile", async () => {
    const profile = await identity.loadExecutionProfile("identity_test");

    expect(profile.id).toBe("identity_test");
    expect(profile.tasks[0]).toMatchObject({
      id: "gatekeeper",
      processorId: "industry_classification",
      processorScope: "gatekeeper",
    });
    await expect(identity.loadExecutionProfile("gatekeeper_scan")).rejects.toMatchObject({
      code: "PROFILE_NOT_ALLOWED",
    });
  });

  it("fails closed for unknown Identity processors and unsafe paths", async () => {
    await expect(identity.loadProcessor("gatekeeper_site_assessment")).rejects.toMatchObject({
      code: "PROCESSOR_NOT_CONFIGURED",
    });
    await expect(yaml.load("../outside.yaml")).rejects.toBeInstanceOf(
      RuntimeConfigError,
    );
  });

  it("resolves legacy and Industry Niche model bindings in test", async () => {
    const resolver = new ModelRegistryResolver(yaml, "test");

    await expect(
      resolver.resolve("industry_classification", "gatekeeper", undefined, {
        compatibility_mode: true,
        execution_profile_id: "identity_test",
      }),
    ).resolves.toMatchObject({
      model_profile: "fast_classification",
      access_mode: "website_direct",
    });
    await expect(
      resolver.resolve("industry_classification", "industry_niche"),
    ).resolves.toMatchObject({
      model_profile: "grounded_extraction",
      access_mode: "normalized_evidence",
    });
    await expect(resolver.resolve("unknown_processor")).rejects.toMatchObject({
      code: "MODEL_PROFILE_NOT_CONFIGURED",
    });
  });
});
