import type { CampaignPageView, SurfaceState } from "./types";

export const scenarioIds = ["live-discovery", "draft", "product-setup", "brief-setup", "creator-acquisition", "applications-active", "readiness-blocked", "paused", "completed", "archived", "loading", "no-results", "unavailable"] as const;
export type ScenarioId = typeof scenarioIds[number];

export const scenarioLabel: Record<ScenarioId, string> = { "live-discovery":"Live — Discovery active", draft:"Draft", "product-setup":"Published — Product setup", "brief-setup":"Published — Brief setup", "creator-acquisition":"Live — Creator acquisition", "applications-active":"Live — Applications active", "readiness-blocked":"Live — Readiness blocked", paused:"Paused", completed:"Completed", archived:"Archived", loading:"Local loading", "no-results":"Local no results", unavailable:"Local unavailable/error" };

export function applyScenario(base: CampaignPageView, scenario: ScenarioId): CampaignPageView {
  const disabled = { available:false, presentation:"DISABLED" as const, reasonCategory:"CAPABILITY_UNAVAILABLE" };
  if (scenario === "live-discovery") return base;
  if (scenario === "draft") return { ...base,campaign:{...base.campaign,lifecycleStatus:"DRAFT"},hydration:{outcome:"DRAFT",executionReady:false,primaryFocus:"CAMPAIGN",postLiveReadinessBlocked:false} };
  if (scenario === "product-setup") return { ...base, campaign:{...base.campaign,lifecycleStatus:"PUBLISHED",productCount:0,briefCount:0,capabilities:{...base.campaign.capabilities,share:disabled}}, hydration:{outcome:"STATE_1_PRODUCT_SETUP",executionReady:false,primaryFocus:"PRODUCT",postLiveReadinessBlocked:false},productsBriefsSummary:{...base.productsBriefsSummary,state:"EMPTY",products:[]},copilotSummary:{...base.copilotSummary,state:"UNAVAILABLE",actions:[]},performanceSummary:{...base.performanceSummary,state:"UNAVAILABLE",metrics:[]},share:{...base.share,capability:disabled} };
  if (scenario === "brief-setup") return { ...base,campaign:{...base.campaign,lifecycleStatus:"PUBLISHED",briefCount:0,capabilities:{...base.campaign.capabilities,share:disabled}},hydration:{outcome:"STATE_2_BRIEF_SETUP",executionReady:false,primaryFocus:"BRIEF",postLiveReadinessBlocked:false},productsBriefsSummary:{...base.productsBriefsSummary,products:base.productsBriefsSummary.products.map(p=>({...p,briefs:[]}))},performanceSummary:{...base.performanceSummary,state:"UNAVAILABLE",metrics:[]},share:{...base.share,capability:disabled} };
  if (scenario === "creator-acquisition") return { ...base,hydration:{outcome:"STATE_3_CREATOR_ACQUISITION_SETUP",execu…3404 tokens truncated…ean; }

export function ExpandableSection({ title, summary, expanded, onToggle, placeholder = false, children }: ExpandableSectionProps) {
  return <section className={`expandableSection ${expanded ? "expanded" : ""}`}><button aria-expanded={expanded} className="sectionToggle" onClick={onToggle} type="button"><span><strong>{title}</strong><small>{summary}</small></span><span aria-hidden="true">{expanded ? "−" : "+"}</span></button>{expanded && <div className={`sectionBody ${placeholder ? "placeholderBody" : ""}`}>{children}</div>}</section>;
}
