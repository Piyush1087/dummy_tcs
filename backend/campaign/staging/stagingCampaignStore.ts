export type StagingCampaignLifecycle = "DRAFT"|"PUBLISHED"|"LIVE"|"PAUSED"|"COMPLETED"|"ARCHIVED";
export type StagingApplicationStatus = "PENDING"|"APPROVED"|"REJECTED";
export type StagingSurfaceState = "READY"|"EMPTY"|"UNAVAILABLE"|"ERROR";

export type StagingCampaignProduct = {
  id: string;
  name: string;
  briefs: Array<{ id: string; name: string }>;
};

export type StagingCampaignState = {
  id: string;
  name: string;
  status: StagingCampaignLifecycle;
  executionReady: boolean;
  products: StagingCampaignProduct[];
  discovery: StagingSurfaceState;
  applicants: StagingSurfaceState;
  creators: Set<string>;
  applications: Map<string, StagingApplicationStatus>;
  outreachReplays: Map<string, unknown>;
  shareReplays: Map<string, unknown>;
  suppliedProjections: {
    intelligence: { discovery: StagingSurfaceState; applicants: StagingSurfaceState };
    performance: { reach: string; engagement: string };
  };
};

export type StagingCampaignStore = { campaign: StagingCampaignState };

/**
 * Staging-only shared state. It is intentionally a persistence substitute, not a domain service.
 * Create a store per test when isolation is needed; production staging uses the shared instance.
 */
export function createStagingCampaignStore(): StagingCampaignStore {
  return {
    campaign: {
      id: "campaign-staging",
      name: "Summer Glow Launch",
      status: "LIVE",
      executionReady: true,
      products: [
        { id: "asset-serum", name: "Glow Face Serum", briefs: [{ id: "brief-reel", name: "Instagram Reel" }, { id: "brief-story", name: "Story + Link" }] },
        { id: "asset-cream", name: "Night Repair Cream", briefs: [{ id: "brief-ugc", name: "UGC Video" }] },
      ],
      discovery: "READY",
      applicants: "READY",
      creators: new Set<string>(),
      applications: new Map<string, StagingApplicationStatus>([["application-anya", "PENDING"]]),
      outreachReplays: new Map<string, unknown>(),
      shareReplays: new Map<string, unknown>(),
      suppliedProjections: {
        intelligence: { discovery: "READY", applicants: "READY" },
        performance: { reach: "124K", engagement: "5.8%" },
      },
    },
  };
}

export const stagingCampaignStore = createStagingCampaignStore();
