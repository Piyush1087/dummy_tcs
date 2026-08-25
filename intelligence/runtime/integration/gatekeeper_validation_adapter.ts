import type { GatekeeperRepositoryLoader } from "../loaders/gatekeeper_repository_loader";
import {
  GATEKEEPER_SITE_ASSESSMENT_OUTPUTS,
} from "../validation/gatekeeper_site_assessment_validator";
import { validateProcessorOutput } from "../validation/validator";

export class GatekeeperValidationAdapter {
  constructor(private readonly repository: GatekeeperRepositoryLoader) {}

  async validateAssessment(rawOutput: unknown) {
    const { processor, outputContract } =
      await this.repository.loadValidationBundle();

    return validateProcessorOutput({
      processor_id: processor.id,
      active_outputs: [...GATEKEEPER_SITE_ASSESSMENT_OUTPUTS],
      raw_output: rawOutput,
      output_contract_id: outputContract.id,
      output_contract_version: outputContract.version,
    });
  }
}
