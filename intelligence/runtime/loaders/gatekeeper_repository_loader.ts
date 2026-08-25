import { AllowlistedDefinitionLoader } from "./allowlisted_definition_loader";
import { RuntimeConfigError, type SafeYamlLoader } from "./yaml_loader";

const GATEKEEPER_PROFILES = Object.freeze({
  gatekeeper_scan: {
    path: "intelligence/runtime/execution_profiles/gatekeeper_scan.yaml",
    expectedId: "gatekeeper_scan",
    expectedVersion: "1.1-frozen",
  },
});

const GATEKEEPER_PROCESSORS = Object.freeze({
  gatekeeper_site_assessment: {
    path: "intelligence/runtime/admission/gatekeeper_site_assessment/processor.yaml",
    expectedId: "gatekeeper_site_assessment",
    expectedVersion: "1.0-frozen",
  },
});

const GATEKEEPER_ARTIFACTS = Object.freeze({
  reasoning: {
    path: "intelligence/runtime/admission/gatekeeper_site_assessment/reasoning.yaml",
    expectedId: "gatekeeper_site_assessment_reasoning",
    expectedVersion: "1.0-frozen",
  },
  rules: {
    path: "intelligence/runtime/admission/gatekeeper_site_assessment/rules.yaml",
    expectedId: "gatekeeper_site_assessment_rules",
    expectedVersion: "1.0-frozen",
  },
  output_contract: {
    path: "intelligence/runtime/admission/gatekeeper_site_assessment/output_contract.yaml",
    expectedId: "gatekeeper_site_assessment_output_contract",
    expectedVersion: "1.0-frozen",
  },
  taxonomy: {
    path: "intelligence/runtime/admission/taxonomy_contract.yaml",
    expectedId: "admission_industry_taxonomy",
    expectedVersion: "1.1-frozen",
  },
  admission_contract: {
    path: "intelligence/runtime/admission/gatekeeper_admission_contract.yaml",
    expectedId: "gatekeeper_admission_contract",
    expectedVersion: "1.1-frozen",
  },
});

export type GatekeeperArtifactId = keyof typeof GATEKEEPER_ARTIFACTS;

export class GatekeeperRepositoryLoader {
  private readonly profiles: AllowlistedDefinitionLoader;
  private readonly processors: AllowlistedDefinitionLoader;
  private readonly artifacts: AllowlistedDefinitionLoader;

  constructor(yaml: SafeYamlLoader) {
    this.profiles = new AllowlistedDefinitionLoader(
      yaml,
      GATEKEEPER_PROFILES,
      "PROFILE_NOT_ALLOWED",
    );
    this.processors = new AllowlistedDefinitionLoader(
      yaml,
      GATEKEEPER_PROCESSORS,
      "PROCESSOR_NOT_CONFIGURED",
    );
    this.artifacts = new AllowlistedDefinitionLoader(
      yaml,
      GATEKEEPER_ARTIFACTS,
      "ARTIFACT_NOT_CONFIGURED",
    );
  }

  loadExecutionProfile(profileId: string) {
    return this.profiles.load(profileId);
  }

  loadProcessor(processorId: string) {
    return this.processors.load(processorId);
  }

  loadArtifact(artifactId: string) {
    return this.artifacts.load(artifactId);
  }

  async loadValidationBundle() {
    const [processor, outputContract, rules, taxonomy] = await Promise.all([
      this.loadProcessor("gatekeeper_site_assessment"),
      this.loadArtifact("output_contract"),
      this.loadArtifact("rules"),
      this.loadArtifact("taxonomy"),
    ]);

    if (outputContract.processor !== processor.id) {
      throw new RuntimeConfigError(
        "OUTPUT_CONTRACT_PROCESSOR_MISMATCH",
        `Output contract '${outputContract.id}' does not belong to '${processor.id}'`,
      );
    }
    if (rules.processor !== processor.id) {
      throw new RuntimeConfigError(
        "RULES_PROCESSOR_MISMATCH",
        `Rules '${rules.id}' do not belong to '${processor.id}'`,
      );
    }

    return { processor, outputContract, rules, taxonomy };
  }
}
