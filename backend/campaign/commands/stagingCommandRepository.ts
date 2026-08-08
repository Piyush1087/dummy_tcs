import { stagingCampaignStore, type StagingCampaignStore, type StagingApplicationStatus, type StagingCampaignLifecycle } from "../staging/stagingCampaignStore";

export type Lifecycle = StagingCampaignLifecycle;
export type ApplicationStatus = StagingApplicationStatus;
export type CommandFailure = { ok:false; category:"VALIDATION"|"NOT_FOUND"|"STATE_CONFLICT"|"CAPABILITY_UNAVAILABLE"|"DUPLICATE"|"QUOTA"|"PACING"|"INTEGRATION_UNAVAILABLE"; message:string };
export type CommandSuccess<T={}> = { ok:true; data:T };
export type CommandResult<T={}> = CommandSuccess<T>|CommandFailure;

export class StagingCommandRepository {
  constructor(private readonly store: StagingCampaignStore = stagingCampaignStore) {}

  get campaign(){return this.store.campaign;}
  getReplay<T>(id:string):T|undefined{return this.campaign.replays.get(id) as T|undefined;} saveReplay(id:string,value:unknown){this.campaign.replays.set(id,value);}
}
