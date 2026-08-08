import { useEffect, useState } from "react";
import type { CampaignReadAdapter } from "../readAdapter";
import type { DiscoveryWorkspaceView } from "../types";
import { CreatorCard } from "./CreatorCard";

export function DiscoveryWorkspace({ adapter, expanded, onAction }: { adapter: CampaignReadAdapter; expanded: boolean; onAction: (action: string) => void }) {
  const [view, setView] = useState<DiscoveryWorkspaceView>();
  const [filter, setFilter] = useState("All");
  useEffect(() => { if (expanded && !view) void adapter.getDiscovery("campaign-staging").then(setView); }, [adapter, expanded, view]);
  if (!expanded) return null;
  return <>{<div className="workspaceTools"><div className="filterGroup">{["All", "High match", "New"].map((label) => <button className={filter === label ? "filter activeFilter" : "filter"} key={label} onClick={() => setFilter(label)} type="button">{label}</button>)}</div></div>}{!view ? <p className="loadingState">Loading creators…</p> : <div className="workspaceScroll">{view.creators.filter((creator) => filter === "All" || creator.contextLabel === filter).map((creator) => <CreatorCard creator={creator} key={creator.campaignCreatorId} mode="discovery" onPrimary={() => onAction("Outreach")} onSecondary={() => onAction("Creator Profile")} />)}</div>}</>;
}
