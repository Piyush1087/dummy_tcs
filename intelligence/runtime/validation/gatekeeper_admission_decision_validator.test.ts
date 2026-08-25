import { describe, expect, it } from "vitest";

import { validateGatekeeperAdmissionDecision } from "./gatekeeper_admission_decision_validator";

describe("Gatekeeper admission decision contract validation", () => {
  it("accepts admitted and recoverable unsupported decisions", () => {
    expect(
      validateGatekeeperAdmissionDecision({
        outcome: "ADMITTED",
        reason_code: null,
        recovery_actions: ["CONTINUE"],
        manual_review_eligible: false,
      }),
    ).toMatchObject({ ok: true });
    expect(
      validateGatekeeperAdmissionDecision({
        outcome: "UNSUPPORTED",
        reason_code: "UNSUPPORTED_INDUSTRY",
        recovery_actions: ["JOIN_WAITLIST", "REQUEST_CLASSIFICATION_REVIEW"],
        manual_review_eligible: true,
      }),
    ).toMatchObject({ ok: true });
  });

  it("rejects invalid reason codes and manual-review combinations", () => {
    expect(
      validateGatekeeperAdmissionDecision({
        outcome: "UNSUPPORTED",
        reason_code: "INVENTED_REASON",
        recovery_actions: ["JOIN_WAITLIST"],
        manual_review_eligible: false,
      }),
    ).toMatchObject({ ok: false, validation_stage: "STRUCTURAL" });
    expect(
      validateGatekeeperAdmissionDecision({
        outcome: "HARD_BLOCKED",
        reason_code: "HARD_BLOCKED_INDUSTRY",
        recovery_actions: ["REQUEST_CLASSIFICATION_REVIEW"],
        manual_review_eligible: true,
      }),
    ).toMatchObject({ ok: false, validation_stage: "STRUCTURAL" });
  });
});
