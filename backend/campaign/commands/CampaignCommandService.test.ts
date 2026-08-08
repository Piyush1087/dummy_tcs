import { describe, expect, it } from "vitest";
import { CampaignCommandService } from "./CampaignCommandService";
import { StagingCommandRepository } from "./stagingCommandRepository";
import { createStagingCampaignStore } from "../staging/stagingCampaignStore";

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
});
