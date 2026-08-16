# Campaign Header state and capability matrix

## Required component states

| Concern | Authoritative input | Header treatment | Prohibited inference |
|---|---|---|---|
| Campaign identity | Supplied name | H1, max two balanced lines | Renaming or shortening to fit |
| Lifecycle | Supplied lifecycle | Text-labeled Badge | Readiness or capability inferred from lifecycle |
| Readiness | Supplied readiness | Separate text-labeled Badge/callout | Lifecycle demotion when readiness is lost |
| Summary available | Supplied authoritative summary | Maximum two lines with disclosure if approved | Client-generated pseudo-AI summary |
| Summary unavailable | Explicit unavailable/absent authority | Neutral unavailable treatment | Synthesized copy |
| Facts | Supplied objective/audience/schedule/platform | Four equal desktop columns | Replacing missing facts with guesses |
| Asset summary | Supplied counts/hierarchy | Compact collapsed row | Orphan Briefs or inferred Assets |
| View | View capability/route | `View Campaign` action | Editable wizard inside drawer |
| Edit | Edit capability/route | Show when supported | Show disabled as if future action is guaranteed |
| Share | Share capability/behavior | Show when supported | URLs, recipients, permissions, channels |
| Operational capability unavailable | Backend/read-projection truth | Header remains truthful; workspaces elsewhere non-usable | Lifecycle-based enablement |

## Lifecycle action variants

These are component variants in `CP-HDR-02`, not five separate page designs.

| Lifecycle | Required action when capability is supplied | When capability is absent |
|---|---|---|
| Published | `Go Live` | No lifecycle action; show no generic toggle |
| Live | `Pause Campaign` | No lifecycle action |
| Paused | `Resume Campaign` | No lifecycle action |
| Completed | `Archive` when supported | No lifecycle action |
| Archived | No action unless restoration capability exists | Read-only action area |

Busy, disabled, error, and success behavior must come from the command contract supplied during implementation/generation. Do not invent restoration, confirmation, or optimistic state changes.

## Readiness/capability examples

| Lifecycle | Readiness | Execution capability | Visual consequence |
|---|---|---|---|
| Published | Not ready | Unavailable | Keep lifecycle/readiness distinct; prioritize exact supported remediation outside/under Header; operational workspaces cannot appear usable |
| Published | Ready | Go-live permitted | `Go Live` may be primary |
| Live | Ready | Pause permitted | `Pause Campaign` may be primary |
| Live | Not ready after activation | Operational capability removed | Keep `Live`; show changed readiness; do not imply lifecycle demotion |
| Completed | N/A/unsupplied | Archive permitted | `Archive` only if supplied |
| Archived | N/A/unsupplied | No restore | No lifecycle action |

## Content resilience states

- Long Campaign name: wrap to two lines; do not shrink typography.
- Missing optional fact: use neutral unavailable/omitted treatment without changing four-fact hierarchy until Product approves another composition.
- Loading: skeleton preserves Header geometry.
- Primary read error: in-place retry only when recoverable; no cached authority invention.
- Terminal: read-oriented identity/details; no operational actions except explicit archive/restore capability.
- Focus-visible: all disclosure, action, close, and overflow controls visibly focused.
