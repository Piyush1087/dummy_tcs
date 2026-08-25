import {
  GATEKEEPER_SITE_ASSESSMENT_OUTPUT_CONTRACT_ID,
  GATEKEEPER_SITE_ASSESSMENT_OUTPUT_CONTRACT_VERSION,
  GATEKEEPER_SITE_ASSESSMENT_PROCESSOR_ID,
  validateGatekeeperSiteAssessment,
} from "./gatekeeper_site_assessment_validator";
import {
  validationFailure,
  type ValidationResult,
} from "./validation_result";

export type RegisteredValidationRequest = {
  processor_id: string;
  processor_scope?: string;
  active_outputs: string[];
  raw_output: unknown;
  output_contract_id?: string;
  output_contract_version?: string;
};

type Registration = {
  processorId: string;
  processorScope?: string;
  outputContractId: string;
  outputContractVersion: string;
  validate: (request: RegisteredValidationRequest) => ValidationResult;
};

const registrations: readonly Registration[] = Object.freeze([
  Object.freeze({
    processorId: GATEKEEPER_SITE_ASSESSMENT_PROCESSOR_ID,
    outputContractId: GATEKEEPER_SITE_ASSESSMENT_OUTPUT_CONTRACT_ID,
    outputContractVersion: GATEKEEPER_SITE_ASSESSMENT_OUTPUT_CONTRACT_VERSION,
    validate: validateGatekeeperSiteAssessment,
  }),
]);

function registrationKey(processorId: string, scope?: string) {
  return scope ? `${processorId}.${scope}` : processorId;
}

export function validateRegisteredProcessorOutput(
  request: RegisteredValidationRequest,
): ValidationResult {
  const registration = registrations.find(
    (candidate) =>
      candidate.processorId === request.processor_id &&
      candidate.processorScope === request.processor_scope,
  );
  const key = registrationKey(request.processor_id, request.processor_scope);

  if (!registration) {
    return validationFailure("CONFIGURATION", [
      {
        path: [],
        code: "VALIDATOR_NOT_CONFIGURED",
        message: `No server-owned validator registered for ${key}`,
      },
    ]);
  }
  if (request.output_contract_id !== registration.outputContractId) {
    return validationFailure("CONFIGURATION", [
      {
        path: ["output_contract_id"],
        code: "OUTPUT_CONTRACT_ID_MISMATCH",
        message: `Expected output contract '${registration.outputContractId}' for ${key}`,
      },
    ]);
  }
  if (request.output_contract_version !== registration.outputContractVersion) {
    return validationFailure("CONFIGURATION", [
      {
        path: ["output_contract_version"],
        code: "OUTPUT_CONTRACT_VERSION_MISMATCH",
        message: `Expected output contract version '${registration.outputContractVersion}' for ${key}`,
      },
    ]);
  }

  return registration.validate(request);
}
