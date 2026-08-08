export type Lifecycle = "DRAFT"|"PUBLISHED"|"LIVE"|"PAUSED"|"COMPLETED"|"ARCHIVED";
export type ApplicationStatus = "PENDING"|"APPROVED"|"REJECTED";
export type CommandFailure = { ok:false; category:"VALIDATION"|"NOT_FOUND"|"STATE_CONFLICT"|"CAPABILITY_UNAVAILABLE"|"DUPLICATE"|"QUOTA"|"PACING"|"INTEGRATION_UNAVAILABLE"; message:string };
export type CommandSuccess<T={}> = { ok:true; data:T };
export type CommandResult<T={}> = CommandSuccess<T>|CommandFailure;

export class StagingCommandRepository {
  campaign={id:"campaign-staging",status:"LIVE" as Lifecycle,executionReady:true,creators:new Set<string>(),applications:new Map<string,ApplicationStatus>([["application-anya","PENDING"]]),replays:new Map<string,unknown>()};
  getReplay<T>(id:string):T|undefined{return this.campaign.replays.get(id) as T|undefined;} saveReplay(id:string,value:unknown){this.campaign.replays.set(id,value);}
}
