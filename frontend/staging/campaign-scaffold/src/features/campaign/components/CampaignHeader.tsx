import type { CampaignPageView } from "../types";

export function CampaignHeader({ view, onAction }: { view: CampaignPageView; onAction: (action: string) => void }) {
  return <header className="campaignHeader"><div><p className="eyebrow">Campaign</p><div className="campaignTitle"><h1>{view.campaign.name}</h1><span className="lifecycleBadge">{view.campaign.lifecycleStatus}</span></div><p className="headerCounts">{view.campaign.productCount} Products · {view.campaign.briefCount} Briefs</p></div><div className="headerActions"><button className="textAction" onClick={() => onAction("Campaign Details")} type="button">View</button><button className="textAction" onClick={() => onAction("Edit Campaign")} type="button">Edit</button><button className="primaryAction" onClick={() => onAction("Share Campaign")} type="button">Share</button></div></header>;
}
