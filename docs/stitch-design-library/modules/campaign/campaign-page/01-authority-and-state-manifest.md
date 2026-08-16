# Campaign Page authority and state manifest

> **Superseded for execution.** Retained as historical evidence and rejected as corrected-screen lineage authority. Current authority is [`../campaign-page-reconciliation/01-source-authority-and-precedence-manifest.md`](../campaign-page-reconciliation/01-source-authority-and-precedence-manifest.md) and its eight-screen registry.

## Product model

The Brand journey is:

`Understand the Campaign → See what needs attention → Work in one relevant workspace`

The page is a stable Campaign shell, a conditional readiness/setup layer, and one active backend-ordered workspace.

## Authority boundaries

| Concern | Authority | UI consequence |
|---|---|---|
| Lifecycle and permitted transitions | Backend | One capability-driven lifecycle action; never infer from status |
| Readiness and missing requirements | Backend | Adjacent to lifecycle but visually and semantically separate |
| Workspace IDs/order/visibility/availability/counts | Backend | Use Brand-facing labels while preserving projection order and unavailable truth |
| Current workspace | Frontend URL state | Restore valid selection; deterministically fall back when invalid/unavailable |
| Campaign Asset | Explicit Brand Centre reference | Never infer or auto-select identity |
| Brief and Deliverables | Brief owned by exact Campaign Asset | Setup order is Asset → Brief → Deliverables |
| Applicants | Campaign Application aggregate | Decision queue; accept/decline only when allowed |
| Collaboration | Independent domain reference | Reference/navigation only; no lifecycle or commercial controls |
| Discovery | Deferred provider | Truthful unavailable state; not zero creators |
| Reporting | Deferred provider | Truthful unavailable state; no metrics, freshness or finality |
| Historical compatibility | Bounded read-only projection | No operational actions or technical migration language |

## Fourteen design-authority screens

| ID | Surface | Viewport | Priority | Governs |
|---|---|---:|---:|---|
| CP-ST-01 | Operational Campaign | Desktop 1440×900 | P0 | Master shell, lifecycle/readiness, workspaces, progressive disclosure and operational variants |
| CP-ST-02 | Setup and reconciliation | Desktop 1440×900 | P0 | Explicit Asset selection, Brief and Deliverable dependency flow |
| CP-ST-03 | Applicants decision queue | Desktop 1440×900 | P0 | Application evidence and decision grammar |
| CP-ST-04 | Collaboration references | Desktop 1440×900 | P1 | Independent-reference grammar, not workflow ownership |
| CP-ST-05 | Terminal/historical Campaign | Desktop 1440×900 | P0 | Persistent read-only hierarchy and removed operation |
| CP-ST-07 | Mobile operational Campaign | 390×844 | P0 | Responsive grammar for every family |
| CP-ST-08 | Campaign Details drawer | Desktop 1440×900 | P0 | Read-only Strategy, Creator Strategy and Commercial Strategy disclosure |
| CP-ST-09 | Link Asset search | Desktop 1440×900 | P0 | Asset type, Brand context and Brand Centre offering search |
| CP-ST-10 | Link Asset confirmation | Desktop 1440×900 | P0 | Selected offering, read-only preview and explicit link action |
| CP-ST-11 | Asset and Brief detail | Desktop 1440×900 | P0 | Brand Centre ownership and Asset → Brief → Deliverables hierarchy |
| CP-ST-12 | Applicant detail and decision | Desktop 1440×900 | P0 | Creator evidence, Application context and sticky decision actions |
| CP-ST-13 | Mobile setup and reconciliation | 390×844 | P0 | Readiness remediation and stacked Asset/Brief hierarchy |
| CP-ST-14 | Mobile Link Asset sheet | 390×844 | P0 | Full-screen search, preview and safe-area-aware link action |
| CP-ST-15 | Mobile Applicant decision sheet | 390×844 | P0 | Progressive creator evidence and Application-specific decision actions |

CP-ST-06 remains intentionally unused to preserve the frozen Phase G numbering.

## Non-Stitch variants

Derive from accepted screens and Aurora patterns:

- primary loading and primary read error;
- LIVE/PAUSED and lifecycle busy/error variants;
- ready/not-ready/post-live readiness loss;
- empty versus one/many Assets, Briefs, Applications or references;
- local loading, command progress and local errors;
- Share Campaign and lifecycle confirmation modals;
- Campaign names, counts and ordinary data variation.

Do not design populated Discovery or populated Reporting until their owners provide authoritative contracts.

## Cross-screen grammar

### Operational desktop

1. Campaign name and lifecycle.
2. Compact objective, timing and budget facts.
3. One backend-permitted lifecycle or highest-priority remediation action.
4. Readiness/exception, explicitly separate from lifecycle.
5. Backend-ordered Brand-facing workspace switcher.
6. One active task surface.
7. Detailed strategy/setup through disclosure or drawer.

### Mobile

1. Production AppShell remains authoritative.
2. Compact Campaign identity/status/action.
3. Readiness/exception.
4. Compact or scrollable workspace selector without page overflow.
5. One single-column workspace body.
6. Secondary utilities in menu/drawer.
7. No essential table, swipe-only action or horizontal page scrolling.

## Design-review classifications

- `VISUAL_IMPROVEMENT`
- `SAFE_IMPLEMENTATION_ADAPTATION`
- `CONTRACT_VIOLATION`
- `STITCH_HALLUCINATION`
- `PRODUCT_DECISION_REQUIRED`

Reject or revise any result that invents provider content, merges lifecycle with readiness, infers an Asset, creates Collaboration controls, exposes migration vocabulary, or redesigns AppShell.
