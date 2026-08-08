import type { CampaignPageView } from "./types";

interface CampaignPageProps {
  view: CampaignPageView;
}

/** Campaign composition root. Feature surfaces are deliberately deferred to the next step. */
export function CampaignPage({ view }: CampaignPageProps) {
  return (
    <section className="campaignPage" aria-labelledby="campaign-page-title">
      <p className="eyebrow">Campaign content area</p>
      <h1 id="campaign-page-title">{view.campaign.name}</h1>
      <p className="bodyText">CampaignPage foundation is mounted inside the canonical Application Shell Content Area.</p>
      <dl className="proofGrid">
        <div><dt>Lifecycle</dt><dd>{view.campaign.lifecycleStatus}</dd></div>
        <div><dt>Hydration</dt><dd>{view.hydration.outcome}</dd></div>
        <div><dt>Primary focus</dt><dd>{view.hydration.primaryFocus}</dd></div>
      </dl>
    </section>
  );
}
