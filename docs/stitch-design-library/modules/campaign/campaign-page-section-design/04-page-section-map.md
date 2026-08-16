# Campaign Page section map

## Composition

```text
Campaign Page Content Area
|-- Campaign Header
|   |-- identity, lifecycle, readiness
|   |-- supplied summary or truthful unavailable state
|   |-- core facts and capability-driven actions
|   `-- Campaign Asset -> Brief disclosure
|-- Campaign Attention Layer
|   |-- Campaign Performance
|   |-- Budget
|   `-- Actionables
`-- Operational Workspace
    |-- Discovery
    |-- Applicants
    `-- Collaborations
```

## Section boundaries

| Section directory | Owns in this package | Does not own |
|---|---|---|
| `campaign-header` | Campaign identity/context/actions and Asset/Brief summary disclosure | Attention data, workspace content, Brand Centre editing |
| `attention-layer` | Performance projection, Budget projection, prioritized Actionables | Reporting workspace, fabricated calculations, task aggregate |
| `assets-and-briefs` | Link Asset and Asset/Brief configuration/detail surfaces | Brand Centre entity editing, workspace identity |
| `discovery` | Provider capability states, approved discovery controls, Creator Cards and detail | fabricated creators/recommendations, Application decisions |
| `applicants` | Application decision queue and Application-owned detail/actions | generic creator status changes, Collaboration creation |
| `collaborations` | Campaign-linked independent Collaboration references/navigation | Collaboration lifecycle or execution mutations |

## Assembly rules

- Header precedes Attention Layer; Attention Layer precedes Operational Workspace.
- Desktop workspace selection is a compact vertical selector subordinate to the active workspace.
- The selector contains exactly Discovery, Applicants, and Collaborations.
- Reporting availability never changes workspace identity or count.
- Configuration/detail surfaces are disclosures, drawers, dialogs, or sheets, never a fourth workspace.
- Optional final assembled desktop/mobile QA references validate integration only; they do not replace section authority.
