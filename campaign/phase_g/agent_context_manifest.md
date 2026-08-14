# Campaign Page Phase G — Agent Context Manifest

**Module:** Campaign Page  
**Actor:** Brand  
**Execution environment:** Codex/local engineering workspace  
**Phase G mode:** Supervisor + Worker  
**Create Campaign wizard:** Previously reconciled; integration dependency only

## 1. Scope identity

This Phase G run applies to the operational **Campaign Page after Campaign creation**.

Primary surface hierarchy to audit:

```text
Campaign Page
├── Campaign shell / composition root
├── Campaign Header / Details / readiness
├── Campaign Assets & Briefs
│   ├── Add Product / Add Campaign Asset
│   ├── Asset detail
│   ├── Add Brief
│   └── Brief detail / lifecycle
└── Operational workspaces
    ├── Discovery
    ├── Applicants
    └── Reporting / Performance
```

Cross-cutting dependencies to audit without taking ownership:

- Share
- Edit/Create Campaign handoff
- Collaboration reference
- Brand Centre
- Meta/platform capability state
- Campaign/Creator Intelligence

## 2. Source authority hierarchy

Use this precedence unless a newer explicitly frozen contract says otherwise.

### Tier 1 — global engineering governance

- `AI_ENGINEERING_STANDARD.md`
- `docs/engineering/PHASE_G_PRODUCT_READINESS_STANDARD.md`
- `docs/engineering/PHASE_G_AGENT_ORCHESTRATION_STANDARD.md`
- `docs/engineering/frontend.md`
- `docs/engineering/backend.md`
- `docs/engineering/validation.md`
- `docs/design-system/AURORA_DESIGN_SYSTEM.md`

### Tier 2 — frozen Campaign module/domain authority

- `campaign/README.md`
- `campaign/campaign_module_contract.md`
- `campaign/campaign_page/*.yaml`
- `campaign/add_product/*`
- `campaign/add_brief/*`
- `campaign/backend/*`
- `campaign/canonical/*`

### Tier 3 — frozen frontend consumer authority

- `campaign/frontend/agent_context_manifest.md`
- `campaign/frontend/implementation_map.md`
- `campaign/frontend/module_state_contract.md`
- `campaign/frontend/state_map.md`
- `campaign/frontend/ui_domain_mapping.md`
- `campaign/frontend/view_dto_api_contract.md`
- `campaign/frontend/production_migration_map.md`
- `campaign/frontend/campaign_implementation_finalization_handoff.md`
- `campaign/production_frontend_migration_playbook.md`

### Tier 4 — accepted implementation/runtime reality

The authoritative frontend/backend repositories and SHAs must be frozen in G0.0.

Do not assume a repository is authoritative merely because it contains the newest-looking UI. Prefer the implementation that is actually intended for deployment and reconcile it against the frozen authority above.

### Tier 5 — historical UI/Stitch/reference material

Older Campaign Workspace, Prospects, Applicants, Add Product and Add Brief visual/copy references are evidence only.

When an older UI document conflicts with a newer frozen domain/runtime/consumer contract, the newer frozen authority wins.

Stitch never outranks runtime/domain authority.

## 3. Existing Campaign Page contract pack

The `campaign/campaign_page/` directory already freezes major Campaign Page behavior. Read all files before concluding that a UI state must be invented:

- `shell_domain_contract.yaml`
- `orchestration_contract.yaml`
- `lifecycle_readiness_contract.yaml`
- `hydration_state_machine.yaml`
- `intelligence_reporting_contract.yaml`
- `responsive_runtime_contract.yaml`
- `backend_schema_reconciliation.yaml`

The agent should trace current implementation against these contracts rather than recreating a new Page state model.

## 4. Campaign Asset / Add Product authority

Read all files under `campaign/add_product/`.

Frozen principles include:

- Brand Centre owns commercial entities;
- Campaign references them;
- Campaign Asset information is read-only from Campaign;
- supported asset types come from Brand Centre/brand context rather than one hard-coded Product model;
- one operation creates one Campaign Asset;
- duplicate linked assets are prohibited;
- Campaign-local identity editing is prohibited;
- lifecycle controls are bounded to supported Campaign Asset state/capabilities.

The UI may use contextual human vocabulary such as Product, Treatment, Plan, Collection, Offer or Brand, but must not turn that label into a separate persistence authority.

During G0, explicitly inspect whether the production UI still carries legacy product-creation semantics or mutable Campaign-owned product fields.

## 5. Add Brief authority

Read all files under `campaign/add_brief/`.

Frozen hierarchy:

```text
Campaign
└── Campaign Asset
    └── Brief
        └── Deliverable(s)
```

Campaign owns strategy/commercial/timeline/creator strategy.
Campaign Asset owns the linked Brand Centre entity reference.
Brief owns creative execution.
Deliverable owns its individual output configuration.

Briefs inherit parent context rather than duplicating it.

During G0, inspect:

- whether current Brief authoring consumes a canonical Campaign Asset;
- whether inherited Campaign/Asset context is read-only;
- draft/published/active-collaboration/paused editability;
- Deliverable-grain behavior;
- validation/copy/state hydration;
- whether an old industry-specific Brief workflow still shapes the new product incorrectly.

## 6. Discovery authority

Discovery is an operational Campaign workspace for creator acquisition/recommendation before application.

Read the Campaign Discovery/Marketplace Ranking authority available in the repository and any accepted backend/frontend contracts.

Frozen boundary principles to preserve:

- Campaign context feeds discovery;
- creator acquisition sources normalize into Campaign Creator identity;
- recommendation/match outputs are supplied by owning Intelligence/Ranking systems;
- frontend does not calculate Match Intelligence;
- Discovery owns acquisition/outreach context until application submission;
- Applicants owns application review;
- Collaboration owns collaboration execution;
- Meta/platform state is a provider/capability dependency, not product-domain authority.

Audit:

- list/card identity;
- source distinction;
- filters/search;
- manual/CSV creator addition;
- recommendation presentation;
- outreach actions/capabilities;
- Meta disconnected/expired/limited/degraded states;
- no-results/empty/loading/error;
- refresh/re-entry;
- mobile behavior;
- handoff into Applicants.

## 7. Applicants authority

Applicants is an Application-backed decision workspace, not a Collaboration table and not a Discovery queue.

Frozen principles to preserve:

- Application is the decision aggregate;
- application-time snapshot is immutable;
- Applicant Intelligence is consumed, not recalculated;
- AI/Intelligence must not block approve/reject unless the canonical command contract explicitly requires it;
- approval/rejection is Application-specific;
- approved Applications hand off to independently owned Collaboration;
- technical UUID/debug terminology must never become product UI.

Audit:

- queue identity/state;
- creator-centered presentation;
- Asset/Brief context;
- Intelligence READY/PROCESSING/UNAVAILABLE states;
- approve/reject authority;
- repeated/terminal action behavior;
- drawer/detail hydration;
- search/filter/sort where implemented;
- empty/loading/error/partial states;
- mobile presentation;
- Collaboration handoff boundary.

## 8. Reporting / Performance authority

Reporting must consume supplied Campaign/Performance Intelligence or accepted report calculations.

It must not invent metrics, ROI, health or AI interpretation in the frontend merely to fill a dashboard.

Audit separately:

- compact Performance summary in the Campaign Page;
- detailed Reporting workspace/detail surface;
- availability/unavailable/loading/error/stale/finality states;
- deterministic metrics vs AI interpretation;
- provenance/freshness where projected;
- deferred Campaign Actionables/Copilot dependencies;
- whether legacy reporting snapshots are incorrectly presented as canonical final reporting.

If the accepted contract does not yet supply a requested metric/interpretation, classify it as `DEFERRED_OWNER` or `AUTHORITY_CONFLICT` as appropriate. Do not fabricate it.

## 9. Campaign shell and workspace authority

The Campaign Page is an orchestration surface. It may present information owned by Campaign, Brand Centre, Applicants, Discovery/Intelligence, Reporting and Collaboration without taking over those domains.

Audit:

- route and composition root;
- AppShell integration;
- Header and Campaign details;
- lifecycle/capability-driven actions;
- readiness and post-live readiness loss;
- Asset/Brief summaries and counts;
- workspace visibility/hydration supplied by backend;
- user workspace-selection persistence;
- page refresh/re-entry;
- local loading/error states;
- desktop/mobile layout and overflow;
- Collaboration as reference-only boundary.

Frontend must not render a workspace merely because its component exists if authoritative workspace visibility says it is hidden/unavailable.

## 10. Create Campaign boundary

The Create Campaign wizard is out of scope for this Phase G run.

The agent may inspect it only to verify:

- Draft Edit navigation from Campaign Page;
- Campaign Details/Edit handoff;
- shared canonical Campaign fields/DTOs;
- route compatibility.

Do not reopen previously accepted Create Campaign UX/validation/hydration unless a current Campaign Page finding proves a regression or contract conflict.

## 11. Known legacy-risk surfaces

The production audit must specifically search for surviving assumptions such as:

- binary `Active/Paused` Campaign toggle where canonical lifecycle/capabilities are richer;
- old Zone 1/2/3 ownership becoming architecture;
- Campaign-owned Product records instead of canonical Campaign Assets;
- Brief editability inferred from applicant counts instead of canonical lifecycle/capability;
- Prospects pipeline terminology overriding Discovery authority;
- Applicants backed by legacy Collaboration rows;
- Campaign-owned Active Collaboration workflow;
- Reporting calculated or fabricated in frontend;
- legacy Campaign Shell DTOs driving canonical Page rendering;
- client-generated Share links rather than backend Share authority;
- fixed/hard-coded workspace visibility;
- status-derived actions rather than backend capabilities.

These are investigation targets, not assumptions that defects definitely remain.

## 12. Initial G0 coverage

G0.1 should audit the whole scope in one pass.

Minimum surface groups:

1. route/AppShell/Page composition
2. Campaign Header/Details/readiness
3. Asset/Brief repository summary
4. Add Campaign Asset/Product
5. Asset detail/pause/resume
6. Add Brief
7. Brief detail/edit/publish/pause state
8. Discovery
9. Applicants
10. Reporting/Performance
11. Share/Edit/lifecycle cross-cutting actions
12. loading/empty/error/degraded/compatibility states
13. desktop/mobile
14. Collaboration reference boundary

Do not pre-freeze the number or names of G0.2 investigations. The Supervisor derives them from the G0.1 findings.

## 13. Candidate implementation context — verify, do not blindly pin

Existing production migration evidence has identified Campaign routes and production components such as the Campaign detail composition root, Campaign Header/legacy shell areas, Product/Brief repository, pipeline workspaces, Add Asset drawer, Brief authoring drawer, Share modal and Campaign API/client boundaries.

G0.0 must verify the **actual current deployable checkout** and record exact frontend/backend SHAs before implementation work.

The later master prompt will supply the local workspace paths/repositories to Codex. If they differ from older migration documents, audit the deployable repository while retaining the frozen `dummy_tcs` contracts as semantic authority.

## 14. Environment expectations

### G0 minimum

- Git access to canonical + frontend + backend repositories;
- Codex repository read/search capability;
- exact baseline SHA verification.

No database/provider runtime is required to start G0.

### Before consolidated G1 functional acceptance

Prepare:

- repository-compatible Node/npm;
- Docker Desktop/WSL where used by the local setup;
- PostgreSQL 16 isolated Campaign Phase G database;
- backend local service;
- frontend local service;
- deterministic Brand QA identity;
- Campaign fixtures representing major lifecycle/readiness states;
- Browser/manual smoke capability.

Provider integrations such as Meta may remain unavailable locally. Their boundary/degraded states must be truthful; no fake provider success should be created.

## 15. Stitch eligibility

Initial value: `NO`.

Stitch may be used only after:

1. G0 authority audit completes;
2. G1 functional reconciliation and consolidated runtime acceptance complete;
3. G2 freezes the Campaign Page UX/IA authority matrix.

The agent should preserve existing Aurora primitives and production architecture; Stitch is a visual donor/reference only.
