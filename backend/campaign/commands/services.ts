import type { z } from "zod";
import {
  approveApplicationInputSchema,
  archiveCampaignInputSchema,
  completeCampaignInputSchema,
  composeOutreachInputSchema,
  executeCampaignShareInputSchema,
  initiateEmailOutreachInputSchema,
  manualCreatorInputSchema,
  pauseCampaignInputSchema,
  rejectApplicationInputSchema,
  resumeCampaignInputSchema,
} from "../../validation";
import { StagingCommandRepository, type ApplicationStatus, type CommandFailure, type CommandResult, type Lifecycle } from "./stagingCommandRepository";

export type CampaignLifecycleInput = z.input<typeof pauseCampaignInputSchema>;
export type ManualCreatorInput = z.input<typeof manualCreatorInputSchema>;
export type ComposeOutreachInput = z.input<typeof composeOutreachInputSchema>;
export type InitiateEmailOutreachInput = z.input<typeof initiateEmailOutreachInputSchema>;
export type ApplicantDecisionInput = z.input<typeof approveApplicationInputSchema>;
export type CampaignShareInput = z.input<typeof executeCampaignShareInputSchema>;

const transition:Record<Lifecycle,Lifecycle[]>={DRAFT:["PUBLISHED"],PUBLISHED:["LIVE"],LIVE:["PAUSED","COMPLETED"],PAUSED:["LIVE","COMPLETED"],COMPLETED:["ARCHIVED"],ARCHIVED:[]};
const validationFailure=(error:{issues:Array<{message:string}>}):CommandFailure=>({ok:false,category:"VALIDATION",message:error.issues[0]?.message??"Command input is invalid."});

export class CampaignService {
  constructor(private repo:StagingCommandRepository){}

  pause(input:CampaignLifecycleInput):CommandResult<{status:Lifecycle}>{const parsed=pauseCampaignInputSchema.safeParse(input);if(!parsed.success)return validationFailure(parsed.error);return this.lifecycle("PAUSED");}
  resume(input:CampaignLifecycleInput):CommandResult<{status:Lifecycle}>{const parsed=resumeCampaignInputSchema.safeParse(input);if(!parsed.success)return validationFailure(parsed.error);return this.lifecycle("LIVE");}
  complete(input:CampaignLifecycleInput):CommandResult<{status:Lifecycle}>{const parsed=completeCampaignInputSchema.safeParse(input);if(!parsed.success)return validationFailure(parsed.error);return this.lifecycle("COMPLETED");}
  archive(input:CampaignLifecycleInput):CommandResult<{status:Lifecycle}>{const parsed=archiveCampaignInputSchema.safeParse(input);if(!parsed.success)return validationFailure(parsed.error);return this.lifecycle("ARCHIVED");}
  lifecycle(target:Lifecycle):CommandResult<{status:Lifecycle}>{const current=this.repo.campaign.status;if(!transition[current].includes(target))return{ok:false,category:"STATE_CONFLICT",message:"Campaign transition is not allowed."};if(target==="LIVE"&&!this.repo.campaign.executionReady)return{ok:false,category:"CAPABILITY_UNAVAILABLE",message:"Campaign is not execution ready."};this.repo.campaign.status=target;return{ok:true,data:{status:target}};}
  edit():CommandResult{return{ok:true,data:{}};}
}

export class CampaignCreatorService {
  constructor(private repo:StagingCommandRepository){}

  addManual(input:ManualCreatorInput):CommandResult{const parsed=manualCreatorInputSchema.safeParse(input);if(!parsed.success)return validationFailure(parsed.error);const key=parsed.data.socialHandle.toLowerCase();if(this.repo.campaign.creators.has(key))return{ok:false,category:"DUPLICATE",message:"Creator already exists for this Campaign."};this.repo.campaign.creators.add(key);return{ok:true,data:{}};}
  archive():CommandResult{return{ok:true,data:{}};}
  importCsv():CommandResult{return{ok:true,data:{}};}
}

export class OutreachService {
  constructor(private repo:StagingCommandRepository){}

  compose(input:ComposeOutreachInput):CommandResult<{path:"EMAIL"|"PRIORITY_DM"}>{const parsed=composeOutreachInputSchema.safeParse(input);if(!parsed.success)return validationFailure(parsed.error);return{ok:true,data:{path:"EMAIL"}};}
  initiate(input:InitiateEmailOutreachInput):CommandResult<{status:"COMPOSE_INITIATED"}>{const parsed=initiateEmailOutreachInputSchema.safeParse(input);if(!parsed.success)return validationFailure(parsed.error);const replay=this.repo.getOutreachReplay<CommandResult<{status:"COMPOSE_INITIATED"}>>(parsed.data.requestId);if(replay)return replay;const result:CommandResult<{status:"COMPOSE_INITIATED"}>={ok:true,data:{status:"COMPOSE_INITIATED"}};this.repo.saveOutreachReplay(parsed.data.requestId,result);return result;}
}

export class ApplicationService {
  constructor(private repo:StagingCommandRepository){}

  approve(input:ApplicantDecisionInput):CommandResult<{status:ApplicationStatus}>{const parsed=approveApplicationInputSchema.safeParse(input);if(!parsed.success)return validationFailure(parsed.error);return this.decide(parsed.data.applicationId,"APPROVED");}
  reject(input:ApplicantDecisionInput):CommandResult<{status:ApplicationStatus}>{const parsed=rejectApplicationInputSchema.safeParse(input);if(!parsed.success)return validationFailure(parsed.error);return this.decide(parsed.data.applicationId,"REJECTED");}
  decide(id:string,status:"APPROVED"|"REJECTED"):CommandResult<{status:ApplicationStatus}>{const current=this.repo.campaign.applications.get(id);if(!current)return{ok:false,category:"NOT_FOUND",message:"Application was not found."};if(current!=="PENDING")return{ok:false,category:"STATE_CONFLICT",message:"Application already has a terminal state."};this.repo.campaign.applications.set(id,status);return{ok:true,data:{status}};}
}

export class ShareService {
  constructor(private repo:StagingCommandRepository){}

  execute(input:CampaignShareInput):CommandResult<{message:string;trackedLink:string}>{const parsed=executeCampaignShareInputSchema.safeParse(input);if(!parsed.success)return validationFailure(parsed.error);const replay=this.repo.getShareReplay<CommandResult<{message:string;trackedLink:string}>>(parsed.data.requestId);if(replay)return replay;const result:CommandResult<{message:string;trackedLink:string}>={ok:true,data:{message:"Join Summer Glow Launch",trackedLink:`/campaign/t/${parsed.data.requestId}`}};this.repo.saveShareReplay(parsed.data.requestId,result);return result;}
}
