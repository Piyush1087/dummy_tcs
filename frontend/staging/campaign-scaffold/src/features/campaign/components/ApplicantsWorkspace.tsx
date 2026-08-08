import { useEffect, useState } from "react";
import type { CampaignReadAdapter } from "../readAdapter";
import type { ApplicantsWorkspaceView } from "../types";
import { CreatorCard } from "./CreatorCard";

export function ApplicantsWorkspace({ adapter, expanded, onAction }: { adapter: CampaignReadAdapter; expanded: boolean; onAction: (action: string) => void }) {
  const [view, setView] = useState<ApplicantsWorkspaceView>();
  const [filter, setFilter] = useState("Pending");
  useEffect(() => { if (expanded && !view) void adapter.getApplicants("campaign-staging").then(setView); }, [adapter, expanded, view]);
  if (!expanded) return null;
  return <>{<div className="workspaceTools"><div className="filterGroup">{["Pending", "All"].map((label) => <button className={filter === label ? "filter activeFilter" : "filter"} key={label} onClick={() => setFilter(label)} type="button">{label}</button>)}</div></div>}{!view ? <p className="loadingState">Loading applicants…</p> : <div className="workspaceScroll">{view.applicants.map((applicant) => <CreatorCard creator={applicant} intelligenceLabel={applicant.intelligenceLabel ?? applicant.intelligenceStatus} key={applicant.applicationId} mode="applicant" onPrimary={() => onAction("Approve applicant")} onSecondary={() => onAction("Reject applicant")} />)}</div>}</>;
}
