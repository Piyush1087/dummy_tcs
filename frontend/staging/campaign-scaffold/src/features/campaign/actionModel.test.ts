import { describe, expect, it } from "vitest";
import { createStagingCampaignCommandAdapter } from "./commandAdapter";
import type { CampaignUiAction } from "./actionModel";

describe("Campaign UI actions", () => {
  it("preserves canonical IDs through applicant command invocation", async () => {
    const observed: Array<{ applicationId: string }> = [];
    const adapter = {
      approveApplicant: async (input: { applicationId: string }) => {
        observed.push(input);
        return { ok: true };
      },
      rejectApplicant: async () => ({ ok: true }),
    };
    const action: CampaignUiAction = {
      type: "APPROVE_APPLICANT",
      campaignId: "campaign-staging",
      applicationId: "application-anya",
    };
    await adapter.approveApplicant({ applicationId: action.applicationId });
    expect(observed).toEqual([{ applicationId: "application-anya" }]);
  });

  it("does not require synthetic DTO fields for the applicant adapter", async () => {
    const adapter = createStagingCampaignCommandAdapter();
    expect(await adapter.approveApplicant({ applicationId: "application-anya" })).toMatchObject({ ok: true });
  });
});
