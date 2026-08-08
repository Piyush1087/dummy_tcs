import { describe, expect, it } from "vitest";
import { CampaignQueryService } from "./CampaignQueryService";
import { StagingCampaignReadRepository } from "./stagingRepository";
describe("CampaignQueryService",()=>{it("composes a live Campaign Page projection",async()=>{const page=await new CampaignQueryService(new StagingCampaignReadRepository()).getCampaignPage("campaign-1");expect(page.hydration.outcome).toBe("STATE_4_DISCOVERY_ACTIVE");expect(page.campaign.capabilities.share.available).toBe(true);});});
