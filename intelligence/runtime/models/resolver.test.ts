import { describe, expect, it } from "vitest";

import { GatekeeperReferenceRuntime } from "../integration/gatekeeper_reference_runtime";
import { GatekeeperValidationAdapter } from "../integration/gatekeeper_validation_adapter";
import type { IdentityRuntimeDependencies } from "../integration/types";
import { createIntelligenceService } from "../integration/service";
import { GatekeeperRepositoryLoader } from "../loaders/gatekeeper_repository_loader";
import { SafeYamlLoader } from "../loaders/yaml_loader";
import { ModelRegistryResolver } from "./resolver";

const yaml = new SafeYamlLoader(process.cwd());

const assessment = {
  provisional_industry: "D2C",
  provisional_sub_industry: "Free-form specialty",
  entity_category: "BRAND",
  english_evidence_status: "SUFFICIENT",
  creator_marketing_applicability: "APPLICABLE",
  commercial_destination_types: ["WEBSITE"],
  assessment_confidence: "HIGH",
};

describe("M2 model/profile isolation", () => {
  it("resolves the standalone Gatekeeper model as a checked profile projection", async () => {
    const registry: any = await yaml.load("intelligence/runtime/models.yaml");
    const profile: any = await yaml.load(
      "intelligence/runtime/execution_profiles/gatekeeper_scan.yaml",
    );
    const primary = profile.stages.find(
      (stage: any) => stage.id === "primary_site_assessment",
    );
    const binding = registry.processor_model_bindings.gatekeeper_site_assessment.default;
    const modelProfile = registry.model_profiles[binding.model_profile];
    const alias = registry.model_aliases[modelProfile.model_alias];
    const provider = registry.providers[alias.provider];

    expect(modelProfile.authority_source).toBe(
      "intelligence/runtime/execution_profiles/gatekeeper_scan.yaml",
    );
    expect(modelProfile.authority_stage).toBe(primary.id);
    expect(modelProfile.requested_capability).toBe(primary.requested_capability);
    expect(alias.model_id).toBe(primary.model_profile.model);
    expect(provider.adapter.toUpperCase()).toBe(primary.model_profile.provider);

    await expect(
      new ModelRegistryResolver(yaml, "production").resolve(
        "gatekeeper_site_assessment",
      ),
    ).resolves.toMatchObject({
      model_profile: "gatekeeper_v1_primary",
      model_id: "gemini-2.5-flash",
      access_mode: "gatekeeper_profile_authority",
      runtime: {},
    });
  });

  it("rejects the legacy binding by default and always rejects it in production", async () => {
    const testResolver = new ModelRegistryResolver(yaml, "test");
    const productionResolver = new ModelRegistryResolver(yaml, "production");

    await expect(
      testResolver.resolve("industry_classification", "gatekeeper"),
    ).rejects.toMatchObject({
      code: "COMPATIBILITY_MODEL_BINDING_REQUIRES_EXPLICIT_CONTEXT",
    });
    await expect(
      productionResolver.resolve(
        "industry_classification",
        "gatekeeper",
        undefined,
        { compatibility_mode: true, execution_profile_id: "identity_test" },
      ),
    ).rejects.toMatchObject({
      code: "COMPATIBILITY_MODEL_BINDING_FORBIDDEN",
    });
  });

  it("allows legacy binding only in explicit Identity test compatibility context", async () => {
    const resolver = new ModelRegistryResolver(yaml, "test");

    await expect(
      resolver.resolve("industry_classification", "gatekeeper", undefined, {
        compatibility_mode: true,
        execution_profile_id: "identity_test",
      }),
    ).resolves.toMatchObject({ model_profile: "fast_classification" });
    await expect(
      resolver.resolve("industry_classification", "industry_niche"),
    ).resolves.toMatchObject({ model_profile: "grounded_extraction" });
  });

  it("prepares the default reference route with the standalone processor", async () => {
    const repository = new GatekeeperRepositoryLoader(yaml);
    const runtime = new GatekeeperReferenceRuntime(
      repository,
      new ModelRegistryResolver(yaml, "test"),
      new GatekeeperValidationAdapter(repository),
    );

    await expect(runtime.prepareDefaultAssessment(assessment)).resolves.toMatchObject({
      profileId: "gatekeeper_scan",
      processorId: "gatekeeper_site_assessment",
      validation: { ok: true },
    });
  });

  it("does not expose Identity test compatibility through production service", async () => {
    const service = createIntelligenceService({} as IdentityRuntimeDependencies, {
      environment: "production",
      enableIdentityTestCompatibility: true,
    });

    await expect(
      service.execute({
        executionProfileId: "identity_test",
        entityType: "brand",
        entityId: "test-brand",
        websiteUrl: "https://example.com",
      }),
    ).rejects.toThrow("IDENTITY_TEST_COMPATIBILITY_NOT_AVAILABLE");
  });
});
