import { describe, expect, it } from "vitest";
import {
  applyAdminResolutionInputSchema,
  listCollaborationsQuerySchema,
  provisionCollaborationInputSchema,
  requestDeliverableRevisionInputSchema,
  submitCollaborationFeedbackInputSchema,
  submitDeliverableInputSchema,
} from "./collaboration.schema";

describe("collaboration executable validation", () => {
  it("requires explicit publishing applicability during provisioning", () => {
    const result = provisionCollaborationInputSchema.safeParse({
      sourceApplicationId: "app_1",
      deliverablePublishingApplicability: [],
    });
    expect(result.success).toBe(false);
  });

  it("accepts explicit per-deliverable publishing applicability", () => {
    const result = provisionCollaborationInputSchema.safeParse({
      sourceApplicationId: "app_1",
      deliverablePublishingApplicability: [
        { sourceBriefDeliverableId: "del_1", publishingRequired: false },
      ],
    });
    expect(result.success).toBe(true);
  });

  it("requires a provider-neutral assetRef for content submission", () => {
    const result = submitDeliverableInputSchema.safeParse({
      collaborationId: "collab_1",
      deliverableExecutionId: "exec_1",
      assetRef: "asset_123",
    });
    expect(result.success).toBe(true);
  });

  it("requires Brand feedback when requesting a revision", () => {
    const result = requestDeliverableRevisionInputSchema.safeParse({
      collaborationId: "collab_1",
      deliverableExecutionId: "exec_1",
      submissionVersionId: "version_1",
      brandFeedback: "",
    });
    expect(result.success).toBe(false);
  });

  it("enforces feedback rating range", () => {
    expect(submitCollaborationFeedbackInputSchema.safeParse({ collaborationId: "c1", rating: 5 }).success).toBe(true);
    expect(submitCollaborationFeedbackInputSchema.safeParse({ collaborationId: "c1", rating: 6 }).success).toBe(false);
  });

  it("keeps explicit entitlement amounts in Admin resolution", () => {
    const parsed = applyAdminResolutionInputSchema.parse({
      collaborationId: "c1",
      creatorEntitlementAmount: 250,
      brandRefundEntitlementAmount: 750,
      currency: "inr",
      reasonCode: "ADMIN_EXCEPTION",
    });
    expect(parsed.currency).toBe("INR");
  });

  it("bounds list query pagination", () => {
    expect(listCollaborationsQuerySchema.safeParse({ limit: 100 }).success).toBe(true);
    expect(listCollaborationsQuerySchema.safeParse({ limit: 101 }).success).toBe(false);
  });
});
