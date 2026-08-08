export type CampaignRecord = { id:string; name:string; status:"DRAFT"|"PUBLISHED"|"LIVE"|"PAUSED"|"COMPLETED"|"ARCHIVED"; executionReady:boolean; products:Array<{id:string;name:string;briefs:Array<{id:string;name:string}>}>; discovery:"READY"|"EMPTY"|"UNAVAILABLE"|"ERROR"; applicants:"READY"|"EMPTY"|"UNAVAILABLE"|"ERROR" };

export interface CampaignReadRepository { findCampaign(id:string): Promise<CampaignRecord | undefined>; }

/** Staging-only persistence substitute. It supplies accepted result fixtures; it contains no domain mutation logic. */
export class StagingCampaignReadRepository implements CampaignReadRepository {
  async findCampaign(id:string): Promise<CampaignRecord> { return { id, name:"Summer Glow Launch", status:"LIVE", executionReady:true, products:[{id:"asset-serum",name:"Glow Face Serum",briefs:[{id:"brief-reel",name:"Instagram Reel"},{id:"brief-story",name:"Story + Link"}]},{id:"asset-cream",name:"Night Repair Cream",briefs:[{id:"brief-ugc",name:"UGC Video"}]}], discovery:"READY", applicants:"READY" }; }
}
