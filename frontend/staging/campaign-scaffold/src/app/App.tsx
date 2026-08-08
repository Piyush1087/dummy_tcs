import { useEffect, useState } from "react";
import { ApplicationShell } from "./ApplicationShell";
import { CampaignPage } from "../features/campaign/CampaignPage";
import { createMockCampaignReadAdapter } from "../features/campaign/readAdapter";
import type { CampaignPageView } from "../features/campaign/types";

const adapter = createMockCampaignReadAdapter();

export function App() {
  const [view, setView] = useState<CampaignPageView>();

  useEffect(() => {
    void adapter.getCampaignPage("campaign-staging").then(setView);
  }, []);

  return (
    <ApplicationShell>
      {view ? <CampaignPage view={view} /> : <p className="loadingState">Loading Campaign content area…</p>}
    </ApplicationShell>
  );
}
