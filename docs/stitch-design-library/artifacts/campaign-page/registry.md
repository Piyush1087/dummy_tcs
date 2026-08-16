# Campaign Page Stitch screen registry

> **Historical registry — superseded for execution.** Existing Campaign Page artifacts, including CP-ST-01, are preserved but rejected as corrected-screen lineage authority. Use [`../campaign-page-reconciliation/registry.md`](../campaign-page-reconciliation/registry.md). No historical row or artifact is deleted or rewritten.

Project: `Creator Shop — Campaign`  
Project ID: `8396755977547935397`

| Contract | Status | Screen name | Screen ID | Parent ID | Prompt version | Model | Screenshot | HTML/code | Review | Notes |
|---|---|---|---|---|---|---|---|---|---|---|
| CP-ST-01 | NOT_STARTED | `Campaign — Workspace — Desktop 1440 — Operational Discovery Unavailable — v1` | | | 0.1 | | | | | |
| CP-ST-02 | NOT_STARTED | `Campaign — Workspace — Desktop 1440 — Setup Reconciliation — v1` | | CP-ST-01 | 0.1 | | | | | |
| CP-ST-03 | NOT_STARTED | `Campaign — Workspace — Desktop 1440 — Applicants Decision Queue — v1` | | CP-ST-01 | 0.1 | | | | | |
| CP-ST-04 | NOT_STARTED | `Campaign — Workspace — Desktop 1440 — Collaboration References — v1` | | CP-ST-01/03 | 0.1 | | | | | |
| CP-ST-05 | NOT_STARTED | `Campaign — Workspace — Desktop 1440 — Archived Read Only — v1` | | CP-ST-01 | 0.1 | | | | | |
| CP-ST-07 | NOT_STARTED | `Campaign — Workspace — Mobile 390 — Operational Applications — v1` | | accepted desktop family | 0.1 | | | | | |
| CP-ST-08 | NOT_STARTED | `Campaign — Details — Desktop 1440 — Read Only Drawer — v1` | | CP-ST-01 | 0.1 | | | | | |
| CP-ST-09 | NOT_STARTED | `Campaign — Link Asset — Desktop 1440 — Brand Selected Search — v1` | | CP-ST-02 | 0.1 | | | | | |
| CP-ST-10 | NOT_STARTED | `Campaign — Link Asset — Desktop 1440 — Offering Selected — v1` | | CP-ST-09 | 0.1 | | | | | |
| CP-ST-11 | NOT_STARTED | `Campaign — Asset Brief — Desktop 1440 — Detail Drawer — v1` | | CP-ST-02 | 0.1 | | | | | |
| CP-ST-12 | NOT_STARTED | `Campaign — Applicant — Desktop 1440 — Decision Drawer — v1` | | CP-ST-03 | 0.1 | | | | | |
| CP-ST-13 | NOT_STARTED | `Campaign — Workspace — Mobile 390 — Setup Reconciliation — v1` | | CP-ST-02/07 | 0.1 | | | | | |
| CP-ST-14 | NOT_STARTED | `Campaign — Link Asset — Mobile 390 — Offering Selected Sheet — v1` | | CP-ST-10/13 | 0.1 | | | | | |
| CP-ST-15 | NOT_STARTED | `Campaign — Applicant — Mobile 390 — Decision Sheet — v1` | | CP-ST-12/07 | 0.1 | | | | | |

Allowed generation statuses: `NOT_STARTED`, `STITCH_GENERATED`, `STITCH_CONTRACT_REVIEWED`, `DESIGN_ACCEPTED`, `REJECTED`.

Frontend reconciliation status belongs in a separate implementation ledger after design acceptance.

## Per-screen artifact folder

```text
artifacts/campaign-page/<screen-id>/
├── preview.png
├── reference.html
├── prompt.md
├── metadata.json
└── README.md
```

Generated HTML is untrusted reference-only evidence. Preserve it verbatim, never execute or import it into production.
