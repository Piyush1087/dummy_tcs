# Cross-section interaction map

## Interaction-depth rule

A screen may contain up to three shallow interactions only when they operate on the same stable composition. Each interaction starts from the accepted default state; overlays are never stacked.

Use a separate screen when an interaction materially changes page composition, introduces another domain surface, creates more than three interaction layers, causes accepted states to drift, or must become an independent frontend reference.

## Interaction routes

| Origin | Trigger | Destination/state | Ownership rule |
|---|---|---|---|
| Header default | Expand Asset/Brief summary | Inline hierarchy | Brief remains under exact Campaign Asset |
| Header default | View Campaign | Campaign Details drawer/full-screen mobile sheet | Read-oriented mirror; no editable wizard duplication |
| Header default | Share | Supported Share modal | No invented URL, permission, recipient, or channel |
| Header default | Edit | Existing supported edit route | Capability-driven; separate from View |
| Header default | Lifecycle action | Supported lifecycle command | Explicit action; no generic toggle |
| Header hierarchy | View Product setup | Owning configuration surface | Brand Centre data remains read-only here |
| Header hierarchy | Link Campaign Asset | Link Asset drawer | Campaign-level ownership action |
| Attention Performance | View Full Report | Full report overlay/experience | Reporting is not a workspace |
| Attention Budget | Edit | Authorized budget flow | Do not infer committed or remaining amount |
| Actionable | Specific CTA | Exact owning surface/workspace | Actionables are projections, not tasks |
| Discovery | Creator card/detail | Creator detail drawer | Campaign Fit only when supplied |
| Applicants | Application card/detail | Applicant detail drawer | Decisions apply to Application |
| Collaborations | Reference card | Collaboration Workspace | Campaign Page does not mutate Collaboration lifecycle |

## Workspace headers

- **Discovery:** provider state, results count, search, approved fit filters, approved sorting, Find Creators, Add Creator Manually, and CSV only when explicitly Product-authorized.
- **Applicants:** count, search, Campaign Asset/Brief filter, Application status, supported match/recency sorting, and reset.
- **Collaborations:** count, search, Needs Attention/In Progress/Completed filter, and supported sorting.

On mobile, filter and sorting controls condense into an accessible sheet. Unsupported filters must never be invented.
