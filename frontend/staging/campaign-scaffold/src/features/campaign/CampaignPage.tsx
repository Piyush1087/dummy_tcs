import { useEffect, useState } from "react";
import type { CampaignReadAdapter } from "./readAdapter";
import type { CampaignPageView } from "./types";
import { ApplicantsWorkspace } from "./components/ApplicantsWorkspace";
import { CampaignCopilot } from "./components/CampaignCopilot";
import { CampaignHeader } from "./components/CampaignHeader";
import { DiscoveryWorkspace } from "./components/DiscoveryWorkspace";
import { ExpandableSection } from "./components/ExpandableSection";
import { PerformanceSummary } from "./components/PerformanceSummary";
import { ProductsBriefsSection } from "./components/ProductsBriefsSection";

export function CampaignPage({ view, adapter }: { view: CampaignPageView; adapter: CampaignReadAdapter }) {
  const [productsOpen, setProductsOpen] = useState(true);
  const [workspace, setWorkspace] = useState<"DISCOVERY" | "APPLICANTS" | "COLLABORATIONS">("DISCOVERY");
  const [notice, setNotice] = useState<string>();
  const act = (action: string) => { if (action === "DISCOVERY" || action === "APPLICANTS") setWorkspace(action); else setNotice(`${action} is a staged trigger; its detail surface belongs to a later step.`); };
  useEffect(() => { if (view.hydration.primaryFocus === "APPLICANTS") setWorkspace("APPLICANTS"); else if (view.hydration.primaryFocus === "DISCOVERY") setWorkspace("DISCOVERY"); }, [view.hydration.primaryFocus]);
  return <section className="campaignPage"><CampaignHeader onAction={act} view={view}/>{notice && <p className="stagingNotice" role="status">{notice}</p>}<div className="campaignLayout"><div className="campaignPrimary"><CampaignCopilot copilot={view.copilotSummary} onAction={act}/><PerformanceSummary performance={view.performanceSummary} onReport={() => act("Campaign Report")}/><ProductsBriefsSection expanded={productsOpen} onAction={act} onToggle={() => setProductsOpen((open) => !open)} summary={view.productsBriefsSummary}/></div><div className="campaignWorkspaces"><ExpandableSection expanded={workspace === "DISCOVERY"} onToggle={() => setWorkspace("DISCOVERY")} summary="8 New" title="Discovery"><DiscoveryWorkspace adapter={adapter} expanded={workspace === "DISCOVERY"} onAction={act}/></ExpandableSection><ExpandableSection expanded={workspace === "APPLICANTS"} onToggle={() => setWorkspace("APPLICANTS")} summary="2 Pending" title="Applicants"><ApplicantsWorkspace adapter={adapter} expanded={workspace === "APPLICANTS"} onAction={act}/></ExpandableSection><ExpandableSection expanded={workspace === "COLLABORATIONS"} onToggle={() => setWorkspace("COLLABORATIONS")} placeholder summary="Reference only" title="Collaborations"><p>Collaboration is independently owned. This Campaign surface has no workflow or domain behavior.</p></ExpandableSection></div></div></section>;
}
