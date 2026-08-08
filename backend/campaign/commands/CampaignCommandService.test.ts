import { describe, expect, it } from "vitest";
import { CampaignCommandService } from "./CampaignCommandService";
import { StagingCommandRepository } from "./stagingCommandRepository";
import { createStagingCampaignStore } from "../staging/stagingCampaignStore";
import { CampaignQueryService } from "../query/CampaignQueryService";
import { StagingCampaignReadRepository } from "../query/stagingRepository";

const createCommands=()=>new CampaignCommandService(new StagingCommandRepository(createStagingCampaignStore()));
const creator={campaignId:"campaign-staging",platform:"INSTAGRAM" as const,socialHandle:"anya",email:"anya@example.com"};
const email={campaignCreatorId:"creator-anya",requestId:"email-1",finalSubject:"Hello",finalBody:"Campaign invitation"};

describe("CampaignCommandService",()=>{
  it("accepts typed lifecycle input and rejects an invalid lifecycle DTO",()=>{
    expect(createCommands().pause({campaignId:"campaign-staging"})).toEqual({ok:true,data:{status:"PAUSED"}});
    expect(createCommands().pause({campaignId:""})).toMatchObject({ok:false,category:"VALIDATION"});
    expect(createCommands().complete({campaignId:""})).toMatchObject({ok:false,category:"VALIDATION"});
    expect(createCommands().archive({campaignId:""})).toMatchObject({ok:false,category:"VALIDATION"});
  });

  it("validates manual creator input before duplicate detection",()=>{
    const commands=createCommands();
    expect(commands.addManualCreator({...creator,email:"not-an-email"})).toMatchObject({ok:false,category:"VALIDATION"});
    expect(commands.addManualCreator(creator)).toEqual({ok:true,data:{}});
    expect(commands.addManualCreator(creator)).toMatchObject({ok:false,category:"DUPLICATE"});
  });

  it("validates outreach input and preserves outreach replay behavior",()=>{
    const commands=createCommands();
    expect(commands.composeOutreach({campaignCreatorId:""})).toMatchObject({ok:false,category:"VALIDATION"});
    expect(commands.composeOutreach({campaignCreatorId:"creator-anya"})).toEqual({ok:true,data:{path:"EMAIL"}});
    expect(commands.initiateEmailOutreach({...email,finalBody:""})).toMatchObject({ok:false,category:"VALIDATION"});
    const first=commands.initiateEmailOutreach(email);
    expect(commands.initiateEmailOutreach(email)).toEqual(first);
  });

  it("validates applicant decisions and preserves terminal-state conflict",()=>{
    const commands=createCommands();
    expect(commands.approveApplicant({applicationId:""})).toMatchObject({ok:false,category:"VALIDATION"});
    expect(commands.rejectApplicant({applicationId:""})).toMatchObject({ok:false,category:"VALIDATION"});
    expect(commands.approveApplicant({applicationId:"application-anya"})).toEqual({ok:true,data:{status:"APPROVED"}});
    expect(commands.rejectApplicant({applicationId:"application-anya"})).toMatchObject({ok:false,category:"STATE_CONFLICT"});
  });

  it("validates Share input and scopes its replay separately from Outreach",()=>{
    const commands=createCommands();
    expect(commands.executeShare({campaignId:"campaign-staging",channel:"COPY_LINK",requestId:""})).toMatchObject({ok:false,category:"VALIDATION"});
    const input={campaignId:"campaign-staging",channel:"COPY_LINK" as const,requestId:"shared-request"};
    const share=commands.executeShare(input);
    expect(commands.executeShare(input)).toEqual(share);
    expect(commands.initiateEmailOutreach({...email,requestId:"shared-request"})).toEqual({ok:true,data:{status:"COMPOSE_INITIATED"}});
  });

  it("creates, edits and publishes a Brief through the shared read path",async()=>{
    const store=createStagingCampaignStore();
    store.campaign.status="PUBLISHED";store.campaign.executionReady=false;store.campaign.products=[];
    const commands=new CampaignCommandService(new StagingCommandRepository(store));
    const query=new CampaignQueryService(new StagingCampaignReadRepository(store));
    expect((await query.getCampaignPage("campaign-staging")).hydration.outcome).toBe("STATE_1_PRODUCT_SETUP");
    expect(commands.addProduct({campaignId:"campaign-staging",kind:"OFFERING",offeringId:"offering-new"})).toEqual({ok:true,data:{campaignAssetId:"asset-1"}});
    expect((await query.getCampaignPage("campaign-staging")).hydration.outcome).toBe("STATE_2_BRIEF_SETUP");
    expect(commands.addProduct({campaignId:"campaign-staging",kind:"OFFERING",offeringId:""})).toMatchObject({ok:false,category:"VALIDATION"});
    expect(commands.createBriefDraft({campaignAssetId:"asset-1",briefName:"Launch Reel"})).toEqual({ok:true,data:{briefId:"brief-1"}});
    expect(commands.editBriefDraft({briefId:"brief-1",creativeIntent:"Introduce the product"})).toEqual({ok:true,data:{briefId:"brief-1"}});
    expect(commands.publishBrief({briefId:"brief-1",briefName:"Launch Reel",creativeIntent:"Introduce the product",creatorBrief:"Create a reel",briefType:"CREATOR_LED",platform:"INSTAGRAM",deliverables:[{format:"REEL_VIDEO",displayOrder:0}]})).toEqual({ok:true,data:{briefId:"brief-1",status:"PUBLISHED"}});
    const page=await query.getCampaignPage("campaign-staging");
    expect(page.campaign.lifecycleStatus).toBe("LIVE");expect(page.hydration.outcome).toBe("STATE_4_DISCOVERY_ACTIVE");expect(page.campaign.capabilities.share.available).toBe(true);
  });

  it("deactivates products and pauses published Briefs with frozen state checks",()=>{
    const commands=createCommands();
    expect(commands.deactivateProduct({campaignId:"campaign-staging",campaignAssetId:"missing"})).toMatchObject({ok:false,category:"NOT_FOUND"});
    expect(commands.deactivateProduct({campaignId:"campaign-staging",campaignAssetId:"asset-serum"})).toEqual({ok:true,data:{campaignAssetId:"asset-serum",status:"PAUSED"}});
    expect(commands.pauseBrief({briefId:"brief-reel"})).toEqual({ok:true,data:{briefId:"brief-reel",status:"PAUSED"}});
    expect(commands.editPublishedBrief({briefId:"brief-reel",briefName:"Updated"})).toMatchObject({ok:false,category:"STATE_CONFLICT"});
  });
});
