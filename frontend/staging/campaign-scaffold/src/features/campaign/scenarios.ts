import type { CampaignPageView, SurfaceState } from "./types";

export const scenarioIds = ["live-discovery", "product-setup", "brief-setup", "creator-acquisition", "applications-active", "paused", "completed", "archived", "loading", "no-results", "unavailable"] as const;
export type ScenarioId = typeof scenarioIds[number];

export const scenarioLabel: Record<ScenarioId, string> = { "live-discovery":"Live — Discovery active", "product-setup":"Published — Product setup", "brief-setup":"Published — Brief setup", "creator-acquisition":"Live — Creator acquisition", "applications-active":"Live — Applications active", paused:"Paused", completed:"Completed", archived:"Archived", loading:"Local loading", "no-results":"Local no results", unavailable:"Local unavailable/error" };

export function applyScenario(base: CampaignPageView, scenario: ScenarioId): CampaignPageView {
  const disabled = { available:false, presentation:"DISABLED" as const, reasonCategory:"CAPABILITY_UNAVAILABLE" };
  if (scenario === "live-discovery") return base;
  if (scenario === "product-setup") return { ...base, campaign:{...base.campaign,lifecycleStatus:"PUBLISHED",productCount:0,briefCount:0,capabilities:{...base.campaign.capabilities,share:disabled}}, hydration:{outcome:"STATE_1_PRODUCT_SETUP",executionReady:false,primaryFocus:"PRODUCT",postLiveReadinessBlocked:false},productsBriefsSummary:{...base.productsBriefsSummary,state:"EMPTY",products:[]},copilotSummary:{...base.copilotSummary,state:"UNAVAILABLE",actions:[]},performanceSummary:{...base.performanceSummary,state:"UNAVAILABLE",metrics:[]},share:{...base.share,capability:disabled} };
  if (scenario === "brief-setup") return { ...base,campaign:{...base.campaign,lifecycleStatus:"PUBLISHED",briefCount:0,capabilities:{...base.campaign.capabilities,share:disabled}},hydration:{outcome:"STATE_2_BRIEF_SETUP",executionReady:false,primaryFocus:"BRIEF",postLiveReadinessBlocked:false},productsBriefsSummary:{...base.productsBriefsSummary,products:base.productsBriefsSummary.products.map(p=>({...p,briefs:[]}))},performanceSummary:{...base.performanceSummary,state:"UNAVAILABLE",metrics:[]},share:{...base.share,capability:disabled} };
  if (scenario === "creator-acquisition") return { ...base,hydration:{outcome:"STATE_3_CREATOR_ACQUISITION_SETUP",executionReady:true,primaryFocus:"DISCOVERY",postLiveReadinessBlocked:false} };
  if (scenario === "applications-active") return { ...base,hydration:{outcome:"STATE_5_APPLICATIONS_ACTIVE",executionReady:true,primaryFocus:"APPLICANTS",postLiveReadinessBlocked:false} };
  if (scenario === "paused") return { ...base,campaign:{...base.campaign,lifecycleStatus:"PAUSED",capabilities:{...base.campaign.capabilities,share:disabled}},hydration:{outcome:"STATE_8_PAUSED_CAMPAIGN",executionReady:true,primaryFocus:"RESUME_OR_EXISTING_EXECUTION",postLiveReadinessBlocked:false},share:{...base.share,capability:disabled} };
  if (scenario === "completed" || scenario === "archived") return { ...base,campaign:{...base.campaign,lifecycleStatus:scenario === "completed" ? "COMPLETED":"ARCHIVED",capabilities:{view:base.campaign.capabilities.view,edit:disabled,share:disabled}},hydration:{outcome:"STATE_9_HISTORICAL_CAMPAIGN",executionReady:true,primaryFocus:"REVIEW_AND_REPORTING",postLiveReadinessBlocked:false},share:{...base.share,capability:disabled} };
  if (scenario === "loading") return { ...base,copilotSummary:{...base.copilotSummary,state:"UNAVAILABLE",summary:"Loading Campaign Copilot…",actions:[]},performanceSummary:{...base.performanceSummary,state:"UNAVAILABLE",metrics:[]},productsBriefsSummary:{...base.productsBriefsSummary,state:"UNAVAILABLE",products:[]} };
  if (scenario === "no-results") return { ...base,hydration:{outcome:"STATE_3_CREATOR_ACQUISITION_SETUP",executionReady:true,primaryFocus:"DISCOVERY",postLiveReadinessBlocked:false} };
  return { ...base,copilotSummary:{...base.copilotSummary,state:"ERROR",summary:"Campaign Copilot is unavailable.",actions:[]},performanceSummary:{...base.performanceSummary,state:"UNAVAILABLE",metrics:[]},share:{...base.share,capability:disabled} };
}

export function isReady(state: SurfaceState) { return state === "READY"; }
