import { describe, expect, it } from "vitest";
import { createMockCampaignReadAdapter } from "./readAdapter";

describe("mock Campaign read adapter", () => {
  it("returns a typed page projection rather than persistence data", async () => {
    const page = await createMockCampaignReadAdapter().getCampaignPage("campaign-1");

    expect(page.campaign.id).toBe("campaign-1");
    expect(page.hydration.outcome).toBe("STATE_1_PRODUCT_SETUP");
    expect(page.workspaces).toHaveLength(3);
  });
});
