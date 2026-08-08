import type { CreatorCardView } from "../types";

interface CreatorCardProps { creator: CreatorCardView; mode: "discovery" | "applicant"; intelligenceLabel?: string; onPrimary: () => void; onSecondary: () => void; }

export function CreatorCard({ creator, mode, intelligenceLabel, onPrimary, onSecondary }: CreatorCardProps) {
  return <article className="creatorCard"><div className="creatorAvatar" aria-hidden="true">{creator.avatarInitials}</div><div className="creatorContent"><div className="creatorTitle"><strong>{creator.name}</strong>{creator.contextLabel && <span className="statusChip">{creator.contextLabel}</span>}</div><span>{creator.category}</span><small>{creator.followers} followers · {creator.engagement} engagement</small>{intelligenceLabel && <small className="intelligenceLabel">{intelligenceLabel}</small>}</div><div className="creatorActions">{mode === "discovery" ? <><button className="textAction" onClick={onSecondary} type="button">Profile</button><button className="primaryAction" onClick={onPrimary} type="button">Outreach</button></> : <><button className="textAction dangerAction" onClick={onSecondary} type="button">Reject</button><button className="primaryAction" onClick={onPrimary} type="button">Approve</button></>}</div></article>;
}
