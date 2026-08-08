export type SurfaceState = "READY" | "EMPTY" | "UNAVAILABLE" | "ERROR";
export type CapabilityPresentation = "ENABLED" | "DISABLED" | "HIDDEN";

export interface Capability {
  available: boolean;
  presentation: CapabilityPresentation;
  reasonCategory?: string;
  requiresConfirmation?: boolean;
}

export interface CampaignPageView {
  campaign: {
    id: string;
    name: string;
    lifecycleStatus: "DRAFT" | "PUBLISHED" | "LIVE" | "PAUSED" | "COMPLETED" | "ARCHIVED";
    creationSource: "MANUAL" | "AI_RECOMMENDED";
    productCount: number;
    briefCount: number;
    capabilities: Record<string, Capability>;
  };
  hydration: {
    outcome: string;
    executionReady: boolean;
    primaryFocus: string;
    postLiveReadinessBlocked: boolean;
  };
  productsBriefsSummary: SurfaceSummary;
  copilotSummary: SurfaceSummary;
  performanceSummary: SurfaceSummary;
  workspaces: WorkspaceSummary[];
  share: { capability: Capability; supportedChannels: string[] };
}

export interface SurfaceSummary {
  state: SurfaceState;
  label?: string;
  capability?: Capability;
}

export interface WorkspaceSummary extends SurfaceSummary {
  workspace: "DISCOVERY" | "APPLICANTS" | "COLLABORATIONS";
  instantiated: boolean;
  visible: boolean;
  count?: number;
  expand: Capability;
}

export interface CampaignDetailsView { campaignId: string; state: SurfaceState; }
export interface ProductDetailsView { campaignAssetId: string; state: SurfaceState; }
export interface BriefDetailsView { briefId: string; state: SurfaceState; }
export interface DiscoveryWorkspaceView { state: SurfaceState; creatorIds: string[]; nextCursor?: string; }
export interface CreatorProfileView { campaignCreatorId: string; state: SurfaceState; }
export interface OutreachComposerView { campaignCreatorId: string; state: SurfaceState; capability: Capability; }
export interface ApplicantsWorkspaceView { state: SurfaceState; applicationIds: string[]; nextCursor?: string; }
export interface ReportingDetailView { campaignId: string; state: SurfaceState; }
export interface CollaborationReferenceView { collaborationId: string; label: string; state: SurfaceState; open: Capability; }
