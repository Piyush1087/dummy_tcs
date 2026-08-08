import { describe, expect, it } from "vitest";
import { CampaignCommandService } from "../commands/CampaignCommandService";
import { StagingCommandRepository } from "../commands/stagingCommandRepository";
import { createStagingCampaignStore } from "../staging/stagingCampaignStore";
import { CampaignQueryService } from "./CampaignQueryService";
import { StagingCampaignReadRepository } from "./stagingRepository";
describe("CampaignQueryService",()=>{
  it("composes a live Campaign Page projection",async()=>{const page=await new CampaignQueryService(new StagingCampaignReadRepository()).getCampaignPage("campaign-1");expect(page.hydration.outcome).toBe("STATE_4_DISCOVERY_ACTIVE");expect(page.campaign.capabilities.share.available).toBe(true);});

  it("observes lifecycle mutations from the shared staging store",async()=>{
    const store=createStagingCampaignStore();
    const commands=new CampaignCommandService(new StagingCommandRepository(store));
    const query=new CampaignQueryService(new StagingCampaignReadRepository(store));

    expect(commands.command("PAUSE",{})).toEqual({ok:true,data:{status:"PAUSED"}});
    const paused=await query.getCampaignPage("campaign-staging");
    expect(paused.campaign.lifecycleStatus).toBe("PAUSED");
    expect(paused.hydration.outcome).toBe("STATE_8_PAUSED_CAMPAIGN");

    expect(commands.command("RESUME",{})).toEqual({ok:true,data:{status:"LIVE"}});
    expect((await query.getCampaignPage("campaign-staging")).campaign.lifecycleStatus).toBe("LIVE");
  });
});
