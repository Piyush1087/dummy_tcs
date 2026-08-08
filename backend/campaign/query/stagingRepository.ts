import { stagingCampaignStore, type StagingCampaignStore } from "../staging/stagingCampaignStore";

export type CampaignRecord = { id:string; name:string; status:"DRAFT"|"PUBLISHED"|"LIVE"|"PAUSED"|"COMPLETED"|"ARCHIVED"; executionReady:boolean; products:Array<{id:string;name:string;briefs:Array<{id:string;name:string}>}>; discovery:"READY"|"EMPTY"|"UNAVAILABLE"|"ERROR"; applicants:"READY"|"EMPTY"|"UNAVAILABLE"|"ERROR" };

export interface CampaignReadRepository { findCampaign(id:string): Promise<CampaignRecord | undefined>; }

/** Staging-only read repository over the shared state owned by campaign/staging. */
export class StagingCampaignReadRepository implements CampaignReadRepository {
  constructor(private readonly store: StagingCampaignStore = stagingCampaignStore) {}

  async findCampaign(id:string): Promise<CampaignRecord> {
    const campaign=this.store.campaign;
    return { id, name:campaign.name, status:campaign.status, executionReady:campaign.executionReady, products:campaign.products, discovery:campaign.discovery, applicants:campaign.applicants };
  }
}
