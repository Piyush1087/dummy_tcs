import { useEffect, useState } from "react";
import { ApplicationShell } from "./ApplicationShell";
import { CampaignPage } from "../features/campaign/CampaignPage";
import { createExecutableCampaignReadAdapter, createScenarioCampaignReadAdapter } from "../features/campaign/readAdapter";
import type { CampaignPageView } from "../features/campaign/types";
import { scenarioIds, scenarioLabel, type ScenarioId } from "../features/campaign/scenarios";

export function App() {
  const [scenario, setScenario] = useState<ScenarioId | "normal">("normal");
  const [view, setView] = useState<CampaignPageView>();
  const adapter = scenario === "normal" ? createExecutableCampaignReadAdapter() : createScenarioCampaignReadAdapter(scenario);

  useEffect(() => {
    setView(undefined);
    void adapter.getCampaignPage("campaign-staging").then(setView);
  }, [scenario]);

  return (
    <ApplicationShell><label className="scenarioSelector">Staging scenario <select onChange={(event) => setScenario(event.target.value as ScenarioId | "normal")} value={scenario}><option value="normal">Normal executable read</option>{scenarioIds.map((id) => <option key={id} value={id}>{scenarioLabel[id]}</option>)}</select></label>
      {view ? <CampaignPage adapter={adapter} view={view} /> : <p className="loadingState">Loading Campaign content area…</p>}
    </ApplicationShell>
  );
}
