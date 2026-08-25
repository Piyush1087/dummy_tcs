import { z } from "zod";

import { parseWithSchema } from "./validation_result";

export const GatekeeperAdmissionDecisionSchema = z
  .object({
    outcome: z.enum([
      "ADMITTED",
      "RESUME_AVAILABLE",
      "EXISTING_BRAND",
      "ORG_CLAIMED",
      "VERIFICATION_REQUIRED",
      "UNSUPPORTED",
      "UNSUPPORTED_LANGUAGE",
      "CLASSIFICATION_UNCERTAIN",
      "HARD_BLOCKED",
      "DOMAIN_UNREACHABLE",
      "DOMAIN_INVALID",
      "TECHNICAL_FAILURE",
    ]),
    reason_code: z
      .enum([
        "INVALID_URL",
        "PRIVATE_OR_LOCAL_HOST",
        "PROHIBITED_URL",
        "BLOCKED_DOMAIN_OR_TLD",
        "EXISTING_VERIFIED_BRAND",
        "ORGANIZATION_ALREADY_CLAIMED",
        "RECENT_RESUMABLE_SCAN",
        "DOMAIN_VERIFICATION_REQUIRED",
        "DNS_OR_TIMEOUT",
        "REDIRECT_INTEGRITY_FAILED",
        "PARKED_OR_UNUSABLE_WEBSITE",
        "INSUFFICIENT_ENGLISH_EVIDENCE",
        "UNSUPPORTED_INDUSTRY",
        "CREATOR_MARKETING_NOT_APPLICABLE",
        "HARD_BLOCKED_INDUSTRY",
        "UNKNOWN_CLASSIFICATION",
        "AMBIGUOUS_ENTITY",
        "CONFLICTING_EVIDENCE",
        "INSUFFICIENT_EVIDENCE",
        "PROVIDER_CHAIN_EXHAUSTED",
      ])
      .nullable(),
    recovery_actions: z.array(
      z.enum([
        "CONTINUE",
        "RESUME",
        "SIGN_IN",
        "REQUEST_ORG_ACCESS",
        "VERIFY_DOMAIN",
        "JOIN_WAITLIST",
        "REQUEST_CLASSIFICATION_REVIEW",
        "RETRY",
        "CONTACT_SUPPORT",
      ]),
    ),
    manual_review_eligible: z.boolean(),
  })
  .strict()
  .superRefine((decision, ctx) => {
    if (
      decision.manual_review_eligible &&
      !["CLASSIFICATION_UNCERTAIN", "UNSUPPORTED"].includes(decision.outcome)
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["manual_review_eligible"],
        message: "Manual review is eligible only for frozen eligible outcomes",
      });
    }
    if (
      decision.manual_review_eligible &&
      !decision.recovery_actions.includes("REQUEST_CLASSIFICATION_REVIEW")
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["recovery_actions"],
        message:
          "Manual-review eligibility requires REQUEST_CLASSIFICATION_REVIEW",
      });
    }
    if (decision.outcome === "HARD_BLOCKED" && decision.manual_review_eligible) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["manual_review_eligible"],
        message: "Hard blocks are not eligible for classification review",
      });
    }
  });

export function validateGatekeeperAdmissionDecision(rawOutput: unknown) {
  return parseWithSchema(GatekeeperAdmissionDecisionSchema, rawOutput);
}
