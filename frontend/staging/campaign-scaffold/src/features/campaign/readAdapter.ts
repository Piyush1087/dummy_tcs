import type {
  ApplicantsWorkspaceView,
  BriefDetailsView,
  CampaignDetailsView,
  CampaignPageView,
  CollaborationReferenceView,
  CreatorProfileView,
  DiscoveryWorkspaceView,
  OutreachComposerView,
  ProductDetailsView,
  ReportingDetailView,
} from "./types";

export interface CampaignReadAdapter {
  getCampaignPage(campaignId: string): Promise<CampaignPageView>;
  getCampaignDetails(campaignId: string): Promise<CampaignDetailsView>;
  getProductDetails(campaignAssetId: string): Promise<ProductDetailsView>;
  getBriefDetails(briefId: string): Promise<BriefDetailsView>;
  getDiscovery(campaignId: string): Promise<DiscoveryWorkspaceView>;
  getCreatorProfile(campaignCreatorId: string): Promise<CreatorProfileView>;
  getOutreachComposer(campaignCreatorId: string): Promise<OutreachComposerView>;
  getApplicants(campaignId: string): Promise<ApplicantsWorkspaceView>;
  getReporting(campaignId: string): Promise<ReportingDetailView>;
  getCollaborationReferences(campaignId: string): Promise<CollaborationReferenceView[]>;
}

const enabled = { available: true, presentation: "ENABLED" as const };

/** Typed staging-only adapter. Replace this boundary, not presentation components, during API wiring. */
export function createMockCampaignReadAdapter(): CampaignReadAdapter {
  return {
    async getCampaignPage(campaignId) {
      return {
        campaign: {
          id: campaignId,
          name: "Campaign staging",
          lifecycleStatus: "PUBLISHED",
          creationSource: "MANUAL",
          productCount: 0,
          briefCount: 0,
          capabilities: { view: enabled, edit: enabled, share: { available: false, presentation: "DISABLED", reasonCategory: "CAPABILITY_UNAVAILABLE" } },
        },
        hydration: { outcome: "STATE_1_PRODUCT_SETUP", executionReady: false, primaryFocus: "PRODUCT", postLiveReadinessBlocked: false },
        productsBriefsSummary: { state: "EMPTY", label: "Products & Briefs", capability: enabled },
        copilotSummary: { state: "UNAVAILABLE", label: "Campaign Copilot" },
        performanceSummary: { state: "UNAVAILABLE", label: "Performance" },
        workspaces: [
          { workspace: "DISCOVERY", state: "UNAVAILABLE", instantiated: false, visible: false, expand: { available: false, presentation: "HIDDEN" } },
          { workspace: "APPLICANTS", state: "UNAVAILABLE", instantiated: false, visible: false, expand: { available: false, presentation: "HIDDEN" } },
          { workspace: "COLLABORATIONS", state: "UNAVAILABLE", instantiated: false, visible: false, expand: { available: false, presentation: "HIDDEN" } },
        ],
        share: { capability: { available: false, presentation: "DISABLED", reasonCategory: "CAPABILITY_UNAVAILABLE" }, supportedChannels: [] },
      };
    },
    async getCampaignDetails(campaignId) { return { campaignId, state: "READY" }; },
    async getProductDetails(campaignAssetId) { return { campaignAssetId, state: "READY" }; },
    async getBriefDetails(briefId) { return { briefId, state: "READY" }; },
    async getDiscovery() { return { state: "EMPTY", creatorIds: [] }; },
    async getCreatorProfile(campaignCreatorId) { return { campaignCreatorId, state: "READY" }; },
    async getOutreachComposer(campaignCreatorId) { return { campaignCreatorId, state: "UNAVAILABLE", capability: { available: false, presentation: "DISABLED", reasonCategory: "CAPABILITY_UNAVAILABLE" } }; },
    async getApplicants() { return { state: "EMPTY", applicationIds: [] }; },
    async getReporting(campaignId) { return { campaignId, state: "UNAVAILABLE" }; },
    async getCollaborationReferences() { return []; },
  };
}
