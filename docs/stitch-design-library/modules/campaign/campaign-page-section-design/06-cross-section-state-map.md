# Cross-section state map

## State meanings

| State | Meaning | Required treatment |
|---|---|---|
| Loading | Authoritative request in progress | Preserve expected geometry; do not display invented values |
| Empty | Authoritative source confirms no applicable records | Explain the valid zero condition and supported next action |
| Unavailable | Owner/provider/capability cannot supply the feature | Truthful unavailable treatment; never convert to empty or zero |
| Error | Authoritative request failed | Localize failure and show Retry only when recovery is supported |
| Capability-disabled | Domain capability disallows operation | Keep lifecycle/readiness truth visible; do not imply operability |
| Missing optional | Optional supplied field absent | Omit or show neutral unavailable copy without inference |

## Cross-section effects

| Governing condition | Header | Attention | Discovery | Applicants | Collaborations |
|---|---|---|---|---|---|
| Primary Campaign loading/error | Skeleton or in-place retry | Not presented as authoritative | Not operational | Not operational | Not operational |
| Not execution-ready | Readiness badge/callout and valid remediation | Only authoritative projections | Locked/unavailable | Locked/unavailable | Locked/unavailable |
| Ready with one provider unavailable | Normal capability-driven actions | Unaffected authoritative cards remain usable | Truthful provider unavailable | Independent availability | Independent availability |
| Live then readiness lost | Lifecycle remains Live; readiness changes | Preserve available truth | Operability removed | Operability removed | Operability removed |
| Terminal Campaign | Read-only identity/details; terminal action only if capable | Historical facts only when authoritative | No operational workspace | No operational workspace | No operational workspace |
| Summary unavailable | Neutral unavailable treatment, no pseudo-summary | No effect | No effect | No effect | No effect |
| Reporting unavailable | No effect | Performance unavailable; no zero metrics | No effect | No effect | No effect |
| Commitment authority unavailable | No effect | Total may show; committed/remaining unavailable | No effect | No effect | No inferred Collaboration state |

## Selection fallback

Only `discovery`, `applicants`, and `collaborations` are valid canonical workspace values. Missing, invalid, unavailable, `reporting`, or legacy `applications` values fall back deterministically according to authoritative priority/availability. URL presence never grants capability.
