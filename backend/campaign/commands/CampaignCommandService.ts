import { StagingCommandRepository, type ApplicationStatus, type CommandResult, type Lifecycle } from "./stagingCommandRepository";
import {
  ApplicationService,
  CampaignCreatorService,
  CampaignService,
  OutreachService,
  ShareService,
  type ApplicantDecisionInput,
  type CampaignLifecycleInput,
  type CampaignShareInput,
  type ComposeOutreachInput,
  type InitiateEmailOutreachInput,
  type ManualCreatorInput,
} from "./services";

/** Typed command façade. Focused services retain validation and domain/state ownership. */
export class CampaignCommandService {
  readonly campaign:CampaignService;
  readonly creators:CampaignCreatorService;
  readonly outreach:OutreachService;
  readonly applications:ApplicationService;
  readonly share:ShareService;

  constructor(repo=new StagingCommandRepository()){this.campaign=new CampaignService(repo);this.creators=new CampaignCreatorService(repo);this.outreach=new OutreachService(repo);this.applications=new ApplicationService(repo);this.share=new ShareService(repo);}

  pause(input:CampaignLifecycleInput):CommandResult<{status:Lifecycle}>{return this.campaign.pause(input);}
  resume(input:CampaignLifecycleInput):CommandResult<{status:Lifecycle}>{return this.campaign.resume(input);}
  complete(input:CampaignLifecycleInput):CommandResult<{status:Lifecycle}>{return this.campaign.complete(input);}
  archive(input:CampaignLifecycleInput):CommandResult<{status:Lifecycle}>{return this.campaign.archive(input);}
  addManualCreator(input:ManualCreatorInput):CommandResult{return this.creators.addManual(input);}
  composeOutreach(input:ComposeOutreachInput):CommandResult<{path:"EMAIL"|"PRIORITY_DM"}>{return this.outreach.compose(input);}
  initiateEmailOutreach(input:InitiateEmailOutreachInput):CommandResult<{status:"COMPOSE_INITIATED"}>{return this.outreach.initiate(input);}
  approveApplicant(input:ApplicantDecisionInput):CommandResult<{status:ApplicationStatus}>{return this.applications.approve(input);}
  rejectApplicant(input:ApplicantDecisionInput):CommandResult<{status:ApplicationStatus}>{return this.applications.reject(input);}
  executeShare(input:CampaignShareInput):CommandResult<{message:string;trackedLink:string}>{return this.share.execute(input);}
}
