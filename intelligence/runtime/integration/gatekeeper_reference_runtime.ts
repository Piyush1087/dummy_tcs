import type { GatekeeperRepositoryLoader } from "../loaders/gatekeeper_repository_loader";
import type { ModelRegistryResolver } from "../models/resolver";
import type { GatekeeperValidationAdapter } from "./gatekeeper_validation_adapter";

export class GatekeeperReferenceRuntime {
  constructor(
    private readonly repository: GatekeeperRepositoryLoader,
    private readonly models: ModelRegistryResolver,
    private readonly validator: GatekeeperValidationAdapter,
  ) {}

  async prepareDefaultAssessment(rawOutput: unknown) {
    const profile = await this.repository.loadExecutionProfile("gatekeeper_scan");
    const stages = Array.isArray(profile.stages) ? profile.stages : [];
    const primary = stages.find(
      (stage) =>
        typeof stage === "object" &&
        stage !== null &&
        (stage as Record<string, unknown>).id === "primary_site_assessment",
    ) as Record<string, unknown> | undefined;

    if (primary?.processor_id !== "gatekeeper_site_assessment") {
      throw new Error("GATEKEEPER_DEFAULT_PROCESSOR_MISMATCH");
    }

    const [processor, model, validation] = await Promise.all([
      this.repository.loadProcessor("gatekeeper_site_assessment"),
      this.models.resolve("gatekeeper_site_assessment"),
      this.validator.validateAssessment(rawOutput),
    ]);

    return {
      profileId: profile.id,
      processorId: processor.id,
      model,
      validation,
    };
  }
}
