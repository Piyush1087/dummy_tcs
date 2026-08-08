import { useEffect, useState } from "react";
import { ApplicationShell } from "./ApplicationShell";
import { CampaignPage } from "../features/campaign/CampaignPage";
import type { CampaignUiAction, CampaignUiActionResult } from "../features/campaign/actionModel";
import { createStagingCampaignCommandAdapter } from "../features/campaign/commandAdapter";
import { createExecutableCampaignReadAdapter, createScenarioCampaignReadAdapter } from "../features/campaign/readAdapter";
import type { CampaignPageView } from "../features/campaign/types";
import { CampaignCommandHarness } from "../staging/CampaignCommandHarness";
import { scenarioIds, scenarioLabel, type ScenarioId } from "../features/campaign/scenarios";

export function App() {
  const [scenario, setScenario] = useState<ScenarioId | "normal">("normal");
  const [view, setView] = useState<CampaignPageView>();
  const adapter = scenario === "normal" ? createExecutableCampaignReadAdapter() : createScenarioCampaignReadAdapter(scenario);
  const commands = createStagingCampaignCommandAdapter();

  const refresh = async () => { setView(await adapter.getCampaignPage("campaign-staging")); };
  useEffect(() => { setView(undefined); void refresh(); }, [scenario]);

  const handleAction = async (action: CampaignUiAction): Promise<CampaignUiActionResult> => {
    if (scenario !== "normal") return { ok: false, category: "STAGING_SCENARIO", message: "Commands are disabled while a visual scenario fixture is selected." };
    const result = action.type === "APPROVE_APPLICANT"
      ? await commands.approveApplicant({ applicationId: action.applicationId })
      : action.type === "REJECT_APPLICANT"
        ? await commands.rejectApplicant({ applicationId: action.applicationId })
        : { ok: false, category: "INPUT_REQUIRED", message: "This approved action needs its later detail surface or staging input." };
    if (result.ok) await refresh();
    return result;
  };

  return <ApplicationShell><label className="scenarioSelector">Staging scenario <select onChange={(event) => setScenario(event.target.value as ScenarioId | "normal")} value={scenario}><option value="normal">Normal executable read</option>{scenarioIds.map((id) => <option key={id} value={id}>{scenarioLabel[id]}</option>)}</select></label>
    {view ? <><CampaignPage adapter={adapter} onAction={handleAction} view={view} /><CampaignCommandHarness adapter={adapter} commands={commands} enabled={scenario === "normal"} onRefresh={refresh} view={view}/></> : <p className="loadingState">Loading Campaign content area…</p>}
  </ApplicationShell>;
}
