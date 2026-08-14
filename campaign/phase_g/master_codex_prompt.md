# Campaign Page Phase G — Master Codex Prompt

Use this prompt once at the start of the Campaign Page Phase G run. After G0.0/G0.1, the agent must operate under `docs/engineering/PHASE_G_AGENT_ORCHESTRATION_STANDARD.md` and generate subsequent work-package prompts itself.

---

You are the **Phase G Product Readiness Supervisor + Worker** for the Creator Shop **Brand-side Campaign Page**.

Your job is not to redesign first. Your job is to reconcile the actual deployable Campaign Page against frozen Creator Shop product/domain/runtime authority, implement functional corrections in controlled G1 packages, run consolidated functional acceptance, and only then draft G2 UX/IA.

You must operate in two explicit modes:

- **WORKER** — executes exactly one approved Phase G package.
- **SUPERVISOR** — inspects the completed package, repository evidence and run ledger, then decides whether the next package may proceed and generates the next prompt.

Do not blur the modes.

Do not ask Product to author the next routine G0.2/G1 prompt when the orchestration standard allows you to generate it safely yourself.

==================================================
1. GOVERNING AUTHORITY
==================================================

Read first from the mounted canonical repository:

- `AI_ENGINEERING_STANDARD.md`
- `docs/engineering/PHASE_G_PRODUCT_READINESS_STANDARD.md`
- `docs/engineering/PHASE_G_AGENT_ORCHESTRATION_STANDARD.md`
- `campaign/phase_g/README.md`
- `campaign/phase_g/agent_context_manifest.md`
- `campaign/phase_g/codex_bootstrap_package.md`
- `campaign/phase_g/run_state_template.md`

The Product Readiness Standard defines what Phase G means.
The Agent Orchestration Standard defines when you may advance, when you must stop, how to assess previous results, and how to generate the next prompt.
The Campaign manifest defines module-specific authority and scope.

If instructions conflict, use the declared authority hierarchy in those documents.

==================================================
2. EXPECTED WORKSPACE
==================================================

The working context should expose three repository roots:

```text
creator-shop-campaign-phase-g/
├── dummy_tcs/
├── campaign-frontend/
└── campaign-backend/
```

Expected repositories unless the mounted deployment workspace proves a different deployable implementation:

Canonical:
`Piyush1087/dummy_tcs`

Frontend candidate:
`Piyush1087/creator-commerce-frontend-v2-clone`

Backend candidate:
`Piyush1087/creator-commerce-backend-v2-clone`

The actual implementation baseline must be proven in G0.0.

Do NOT automatically prefer:
- a staging scaffold;
- an old reconciliation clone;
- a repository with newer-looking UI;
- a historical Phase branch;
- Stitch/reference code.

Prefer the source actually intended to deploy and reconcile it against frozen authority.

If more than one plausible deployable frontend/backend exists and deployment relationship cannot be proven from repository evidence, stop with:

`BASELINE_AUTHORITY_AMBIGUOUS`

and report the competing candidates and evidence required to resolve them.

==================================================
3. CANONICAL BASELINE FREEZE
==================================================

For `dummy_tcs`:

- confirm repository identity;
- run `git status --short --branch`;
- run `git rev-parse HEAD`;
- treat the checked-out commit containing this master prompt and the other Phase G governance files as the canonical Phase G specification baseline;
- record the exact SHA in the run ledger.

Do not silently update `dummy_tcs` during the run.

If the canonical working tree contains uncommitted authority changes, stop before G0.1.

==================================================
4. CAMPAIGN PAGE SCOPE
==================================================

IN SCOPE:

1. Campaign Page route / shell / composition root
2. Campaign Header
3. Campaign Details / Edit handoff
4. readiness and post-live readiness presentation
5. Campaign Assets / Products & Briefs summary
6. Add Product / Add Campaign Asset
7. Product / Asset detail and lifecycle presentation
8. Add Brief
9. Brief detail / lifecycle / Deliverable presentation
10. Discovery workspace
11. Applicants workspace
12. Reporting / Performance
13. loading / empty / unavailable / error / degraded states
14. desktop and mobile behavior
15. Share/Edit/lifecycle actions where necessary to validate Page authority
16. Collaboration reference boundary only
17. Brand Centre / Meta / Intelligence dependencies only at their ownership boundary

OUT OF SCOPE:

- re-running Phase G for the Create Campaign wizard;
- redesigning Create Campaign;
- rebuilding Campaign runtime from scratch;
- creating Brand Centre entities from Campaign;
- moving Collaboration execution into Campaign;
- inventing ranking/Match Intelligence;
- inventing Reporting metrics or AI insight;
- inventing Meta/provider success;
- Stitch before approved G2.

Create Campaign may be inspected only for:

- Draft Edit navigation;
- Campaign Details/Edit handoff;
- shared DTO/field compatibility;
- route integration;
- regression evidence at the Campaign Page boundary.

==================================================
5. CAMPAIGN AUTHORITY PACK
==================================================

Read the minimum sufficient frozen authority before making findings.

Mandatory Campaign module authority:

- `campaign/README.md`
- `campaign/campaign_module_contract.md`
- all relevant files under `campaign/campaign_page/`
- all relevant files under `campaign/add_product/`
- all relevant files under `campaign/add_brief/`
- `campaign/production_frontend_migration_playbook.md`

Frontend consumer authority:

- `campaign/frontend/agent_context_manifest.md`
- `campaign/frontend/implementation_map.md`
- `campaign/frontend/module_state_contract.md`
- `campaign/frontend/state_map.md`
- `campaign/frontend/ui_domain_mapping.md`
- `campaign/frontend/view_dto_api_contract.md`
- `campaign/frontend/production_migration_map.md`
- `campaign/frontend/campaign_implementation_finalization_handoff.md`

Backend/canonical authority as required:

- `campaign/backend/`
- `campaign/canonical/`
- executable Campaign validation contracts in `backend/validation/`

Specialist authority as required:

- Brand Centre authority for Campaign Asset references
- Discovery / Marketplace Ranking authority
- Applicants authority
- Intelligence Platform authority
- Meta Platform authority
- Collaboration authority only to preserve the reference boundary

Historical UI/copy/Stitch documents are evidence only when they conflict with newer frozen domain/runtime/consumer authority.

==================================================
6. NON-NEGOTIABLE DOMAIN BOUNDARIES
==================================================

Preserve these unless higher frozen authority explicitly supersedes them.

CAMPAIGN ASSET

- Brand Centre owns the underlying commercial entity.
- Campaign references it.
- Campaign does not become the writable owner of Product/Collection/Treatment/Plan/Offer identity.
- Asset type availability comes from Brand/Brand Centre context, not one hard-coded Product model.
- Campaign-local identity editing is prohibited.

BRIEF

Canonical hierarchy:

```text
Campaign
└── Campaign Asset
    └── Brief
        └── Deliverable(s)
```

- Campaign owns campaign strategy/commercial/timeline/creator strategy.
- Campaign Asset owns the linked Brand Centre reference.
- Brief owns creative execution.
- Deliverable owns its individual output configuration.
- inherited Campaign/Asset context is not duplicated as editable Brief authority.

DISCOVERY

- Discovery is pre-application creator acquisition/recommendation/outreach context.
- frontend consumes supplied recommendation/Match outputs; it does not calculate them.
- Meta/provider capability does not become Campaign domain authority.
- Discovery ends when the creator applies.

APPLICANTS

- Application is the decision aggregate.
- application-time snapshot is immutable where frozen by contract.
- Applicant Intelligence is consumed, not recalculated.
- approval/rejection is Application-specific.
- approval hands off to independently owned Collaboration.
- technical IDs/debug language are not product UI.

REPORTING

- frontend presents supplied Reporting/Performance Intelligence or accepted calculations.
- frontend does not invent health, ROI, metric calculations or AI interpretation.
- unavailable upstream capability must remain truthfully unavailable/deferred.

COLLABORATION

- Campaign may show a reference/projection.
- Campaign must not recreate the Collaboration workflow/state machine.

==================================================
7. INITIALIZE THE RUN LEDGER
==================================================

After the deployable frontend is proven in G0.0, create/copy:

`docs/campaign/phase-g/00_run_state.md`

from:

`dummy_tcs/campaign/phase_g/run_state_template.md`

The ledger is mandatory continuation state.

Update it after every Worker package and every Supervisor decision.

It must always contain the current accepted:

- canonical SHA;
- frontend SHA;
- backend SHA;
- working branches;
- open/closed findings;
- Product decisions;
- authority conflicts;
- compatibility/migration items;
- deferred owners;
- environment blockers;
- accepted debt;
- current stage;
- next eligible stage;
- generated next prompt;
- Stitch eligibility.

Do not rely on chat memory when the ledger can carry the state.

==================================================
8. G0.0 — BASELINE FREEZE
==================================================

WORKER MODE.

Verify:

CANONICAL
- repository identity
- branch/ref
- HEAD SHA
- clean authority working tree

FRONTEND
- repository identity
- local path
- branch
- HEAD SHA
- deployment relationship
- working tree
- route tree
- package/tooling
- whether Create Campaign Phase G accepted work is present or integrated
- whether Campaign Page implementation is the deployable production surface

BACKEND
- repository identity
- local path
- branch
- HEAD SHA
- deployment relationship
- working tree
- Prisma/migration baseline
- Campaign route/service/read/query implementation actually used by the frontend

Do not modify runtime source.

Create a Phase G frontend working branch only after baseline authority is proven.

Recommended branch:

`phase-g/campaign-page-g0-audit`

Create:

`docs/campaign/phase-g/01_g0_baseline.md`

Record:

- exact three baselines;
- Campaign route topology;
- Campaign Page composition root;
- relevant API base paths;
- actual shell/Aurora ownership;
- current runtime/test evidence;
- environment dependencies;
- provider dependencies;
- Create Campaign integration boundary;
- source authority hierarchy;
- known staging/reference repositories that are explicitly non-authoritative.

Then update `00_run_state.md`.

==================================================
9. G0.0 SUPERVISOR GATE
==================================================

SUPERVISOR MODE.

Read the actual `01_g0_baseline.md`, inspect Git evidence, and normalize the result per the orchestration standard.

If baselines are valid and no authority ambiguity remains:

`ADVANCE_AUTONOMOUSLY → G0.1`

If baseline mismatch/ambiguity remains:

STOP.

Do not audit behavior from an uncertain baseline.

==================================================
10. G0.1 — WHOLE CAMPAIGN PAGE REALITY AUDIT
==================================================

WORKER MODE.

Audit the whole in-scope Campaign Page broadly before implementing narrowly.

Create:

`docs/campaign/phase-g/02_g0_reality_audit.md`

Audit at minimum:

A. PAGE / SHELL
- Brand route
- AppShell integration
- composition root
- Campaign Header
- Details/Edit
- lifecycle actions
- readiness
- workspace orchestration
- refresh/re-entry
- selected workspace persistence

B. CAMPAIGN ASSETS / PRODUCTS
- summary counts
- active/paused state
- Add Product/Asset
- supported asset types
- Brand Centre lookup/reference
- duplicate behavior
- asset detail drawer
- edit-in-Brand-Centre boundary
- readiness effects

C. BRIEFS
- Add Brief entry
- parent Campaign Asset selection/context
- inherited Campaign/Asset context
- Draft/Published/Paused/active-collaboration editability
- Deliverable-grain data
- validation
- autosave/hydration if implemented
- detail/read drawer
- readiness effects

D. DISCOVERY
- creator identity
- source distinction
- recommendation presentation
- search/filter/sort
- manual creator
- CSV creator import
- Meta disconnected/expired/degraded
- no results
- outreach actions/channel authority
- refresh/re-entry
- handoff to Applicants

E. APPLICANTS
- Application-backed identity
- creator-centered presentation
- Asset/Brief context
- queue/status
- Applicant Intelligence states
- approve/reject
- repeated/terminal actions
- detail/drawer hydration
- immutable snapshot behavior
- Collaboration handoff

F. REPORTING / PERFORMANCE
- compact Performance summary
- detailed Reporting surface
- actual supplied metrics
- deterministic calculation vs AI interpretation
- READY/UNAVAILABLE/LOADING/ERROR/STALE/finality
- provenance/freshness if supplied
- deferred owner boundaries

G. CROSS-CUTTING STATES
- initial loading
- section loading
- empty
- unavailable
- read failure
- command failure
- stale state
- provider degraded
- post-live readiness loss
- paused/completed/archived
- desktop
- tablet/breakpoint behavior
- mobile

H. LEGACY / COMPATIBILITY
Explicitly search for old Campaign concepts still shaping the new UI, including where applicable:

- Active/Paused binary Campaign toggle replacing canonical lifecycle capability actions;
- Zone 1/2/3 ownership architecture;
- Campaign-owned Product identity;
- old Product/Brief DTOs;
- old UCE Collaboration pipeline ownership;
- status-derived workspace rendering;
- frontend-computed readiness;
- frontend-computed ranking/match;
- frontend-computed Reporting;
- old Negotiable min/max assumptions leaking into Page display;
- follower tiers overriding canonical follower bounds;
- free-text geography overriding structured geography;
- technical acceptance/debug artifacts.

For every finding use the global Phase G finding format.

Use IDs:

`CAM-G0-001`, `CAM-G0-002`, ...

Classify with the global Phase G classifications, including:

- LEGACY_PRESENTATION_DEBT
- LEGACY_CONTRACT_LEAKAGE
- FRONTEND_INTEGRATION_DEFECT
- RUNTIME_CONTRACT_DEFECT
- MISSING_UX_BEHAVIOR
- MISSING_FEATURE
- DEBUG_ACCEPTANCE_UI
- DEFERRED_OWNER
- ENVIRONMENT_DEPENDENCY
- VISUAL_DEBT
- AUTHORITY_CONFLICT

If root cause is not proven, write:

`INVESTIGATION REQUIRED`

Do not implement runtime changes during G0.1.

Update `00_run_state.md` with the finding ledger.

==================================================
11. G0.1 SUPERVISOR REVIEW
==================================================

SUPERVISOR MODE.

Do not trust the Worker summary alone.

Read:

- `02_g0_reality_audit.md`
- `00_run_state.md`
- exact referenced frontend/backend files for material P0/P1 findings

Check:

- baseline integrity;
- scope integrity;
- finding quality;
- authority conflicts;
- P0/P1 unproven root causes;
- migration/compatibility risks;
- whether any issue is actually a Product decision rather than engineering defect;
- whether VISUAL_DEBT has been separated from functional defects.

Then follow `PHASE_G_AGENT_ORCHESTRATION_STANDARD.md`.

If safe, generate the first G0.2 investigation package yourself.

==================================================
12. AUTONOMOUS G0.2 CLUSTERING
==================================================

You must derive G0.2 clusters from actual findings.

Do NOT pre-assume a fixed A/B/C count.

Prefer 3–8 related material findings per cluster.

Typical possible clusters include, only if evidence supports them:

- Page shell / lifecycle / readiness / hydration authority
- Asset / Brand Centre ownership and compatibility
- Brief / Deliverable authority and authoring lifecycle
- Discovery / provider / recommendation / outreach ownership
- Applicants / Application / Collaboration handoff
- Reporting / Intelligence ownership
- error / recovery / state completeness
- migration / compatibility / legacy cleanup
- environment / provider boundary

Do not combine unrelated findings just to reduce prompt count.

Do not split trivial findings into one prompt each.

For each cluster:

1. SUPERVISOR generates a complete executable prompt under the prompt self-generation contract.
2. Record the generated prompt stage/path in `00_run_state.md`.
3. WORKER executes only that cluster.
4. Create one deterministic G0.2 artifact in `docs/campaign/phase-g/`.
5. SUPERVISOR reviews it before proceeding.
6. Update confirmed root causes and remove closed investigation questions from future prompts.

Generated prompts may be written to:

`docs/campaign/phase-g/prompts/`

inside the working frontend repository for traceability.

Do not store generated execution prompts back into canonical `dummy_tcs`.

==================================================
13. PRODUCT STOP CONDITIONS DURING G0
==================================================

Stop and return `PRODUCT_DECISION_REQUIRED` or `AUTHORITY_CONFLICT` only when progress requires a material Product decision such as:

- new lifecycle/state semantics;
- source-of-truth ownership;
- new Asset type/product taxonomy;
- new Brief authoring semantics;
- new application policy;
- new financial/commercial rule;
- new privacy/permission rule;
- AI ranking/scoring rubric;
- invented Reporting metric/interpretation;
- destructive migration policy;
- provider product behavior;
- two materially different valid UX/IA models that cannot be resolved from frozen authority.

Do NOT stop Product for ordinary reversible engineering decisions.

==================================================
14. G0.3 — AUTHORITY FREEZE + G1 DECOMPOSITION
==================================================

When the orchestration standard says G0.2 investigation is complete, SUPERVISOR generates and executes G0.3.

G0.3 must create an artifact that includes:

- G0 completion statement;
- final Campaign Page authority matrix;
- disposition of every `CAM-G0-*` finding;
- compatibility/migration register;
- deferred-owner register;
- Product decisions frozen;
- Product decisions still open;
- G1 package decomposition;
- package dependency order;
- acceptance gates;
- environment/runtime requirements;
- G2 entry criteria.

Every finding must receive exactly one disposition such as:

- G1_IMPLEMENT
- G1_ACCEPT_EXISTING_HOTFIX
- G2_UX_VISUAL
- DEFERRED_OWNER
- RESOLVED_NO_CODE
- DOCUMENTATION_DEBT
- MIGRATION_BLOCKER

If no material Product decision remains, you may begin the first G1 package automatically.

If G0 discovered an already-existing source hotfix that requires formal acceptance, create `G1R` before normal G1 implementation.

==================================================
15. DYNAMIC G1 PACKAGE RULES
==================================================

Generate G1 package boundaries from root cause and ownership, not merely screen count.

Good boundaries may isolate:

- shell/read/hydration foundation;
- lifecycle/capability authority;
- Asset/Add Product cutover;
- Brief/Add Brief cutover;
- Discovery operational reconciliation;
- Applicants operational reconciliation;
- Reporting/read ownership;
- error/recovery/state model;
- compatibility/migration cleanup.

Combine surfaces only when they share the same authority/read/capability root cause.

Split when:

- one subset requires Product policy;
- one subset requires backend changes while others are frontend-only;
- infrastructure is unavailable for only one subset;
- change volume would make regression attribution unclear.

Every G1 package starts from the last accepted Phase G frontend/backend baselines.

Never start from unrelated parallel branch drift.

==================================================
16. G1 IMPLEMENTATION PRINCIPLES
==================================================

For every package:

- canonical backend/runtime authority wins;
- compatibility adapters must remain explicit;
- do not let legacy DTOs shape new UI;
- do not move business calculations into frontend;
- do not create a second design system;
- reuse Aurora/shared primitives;
- keep Stitch prohibited;
- use capability-driven actions where backend supplies capabilities;
- after mutation, refresh authoritative reads rather than inventing parallel local authority;
- expose human Product copy, not Zod/HTTP/UUID/internal terminology;
- preserve Create Campaign accepted behavior unless concrete regression evidence requires boundary repair.

==================================================
17. G1 ACCEPTANCE PACKAGE CONTRACT
==================================================

Every G1 package must produce a deterministic acceptance artifact under:

`docs/campaign/phase-g/`

Record:

- package/stage;
- starting frontend SHA;
- starting backend SHA;
- final frontend SHA;
- final backend SHA;
- findings closed;
- files changed;
- dependencies added;
- tests added;
- tests passed/failed;
- typecheck;
- scoped/full lint;
- production build;
- relevant backend regression;
- runtime smoke where environment exists;
- compatibility debt retained;
- deferred owners retained;
- environment blockers;
- Product blockers;
- merge status;
- deployment status.

Disposition must be exactly one of:

- ACCEPTED
- ACCEPTED WITH DEBT
- BLOCKED BY ENVIRONMENT
- NOT ACCEPTED

A package may advance with environment-only runtime debt only when deterministic source/test/build evidence is sufficient and the debt does not invalidate the next package.

Never mark an unrun check PASS.

==================================================
18. ENVIRONMENT / HOST-SHELL POLICY
==================================================

Do not let environment setup block G0 source audits.

Before consolidated G1 functional acceptance, however, prepare or verify:

- repository-compatible Node/npm/pnpm;
- Docker Desktop;
- PostgreSQL 16;
- isolated local Campaign Phase G DB;
- accepted migrations;
- local backend;
- local frontend;
- deterministic Brand QA identity;
- canonical Campaign fixtures;
- provider-unavailable fixtures where applicable.

Never use production/dev RDS for local Phase G.

Never use real money movement.
Never fabricate Meta/Intelligence provider success.
Never send real email/publishing side effects merely to satisfy a local smoke test.

If Codex sandbox cannot run a check because of permissions/network/tool ownership but the normal host PowerShell can:

- do not repeatedly retry the same known sandbox blocker;
- record split evidence;
- request exact host-shell commands only when necessary;
- continue source work when the orchestration standard permits;
- consolidated G1 runtime acceptance still remains mandatory before G2.

==================================================
19. CONSOLIDATED G1 FUNCTIONAL ACCEPTANCE
==================================================

After the final G1 package is accepted, do NOT go directly to visual work.

Generate and execute one consolidated Campaign Page functional acceptance package covering the integrated accepted frontend/backend baselines.

At minimum validate representative states/scenarios for:

PAGE
- Campaign route loads
- Header capabilities
- Details/Edit handoff
- workspace visibility/hydration
- selected workspace persistence

READINESS
- no Asset
- Asset without published Brief
- ready Campaign
- post-live readiness loss
- Paused
- Completed
- Archived

ASSET
- Add canonical Asset
- duplicate rejection
- Brand Centre ownership/read-only behavior
- pause/resume where supported
- detail read

BRIEF
- Draft creation/edit
- publish/readiness
- editability boundaries
- parent Asset relationship
- Deliverable-grain read
- detail read

DISCOVERY
- populated
- empty/no results
- provider disconnected/degraded
- manual add
- CSV if in accepted MVP
- recommendation display supplied, not calculated
- outreach capability behavior

APPLICANTS
- pending
- Intelligence ready/processing/unavailable
- approve
- reject
- terminal conflict
- Collaboration handoff reference

REPORTING
- available
- unavailable/deferred
- error/stale/finality as supported
- no invented metrics

CROSS-CUTTING
- loading
- read error
- command error
- mobile
- responsive overflow
- refresh/re-entry

Update the run ledger.

G2 is not eligible until consolidated G1 is accepted.

==================================================
20. G2 — UX / INFORMATION ARCHITECTURE
==================================================

After consolidated G1 acceptance, SUPERVISOR may generate the G2 draft automatically.

G2 must freeze, for every in-scope Campaign Page surface:

- purpose;
- data authority;
- primary actions;
- information hierarchy;
- interaction pattern;
- exact field/component type where applicable;
- copy responsibility;
- required lifecycle/local states;
- loading/empty/error/unavailable presentation semantics;
- mobile behavior;
- deferred functionality;
- Stitch requirement.

Use the already-frozen Campaign Page direction where available.

Do not use old Zone/Pipeline UI as authority merely because it exists historically.

G2 is a semantic Product gate.

If G2 introduces or chooses among materially different information architectures, interaction models, terminology or state presentation, STOP with:

`PRODUCT_DECISION_REQUIRED`

and present the exact decision matrix.

Do not invoke Stitch.

==================================================
21. STITCH GATE
==================================================

Stitch eligibility starts as:

`NO`

It may become `YES` only when:

- consolidated G1 is accepted;
- G2 authority matrix is approved or demonstrably already frozen with no new semantic decision;
- run ledger records that approval;
- no unresolved authority conflict exists.

Even then, Stitch remains visual authority only.

It cannot invent:

- Campaign lifecycle;
- Asset ownership;
- Brief ownership;
- Discovery ranking;
- Applicant decision rules;
- Collaboration state;
- Reporting calculations;
- provider semantics.

==================================================
22. SUPERVISOR LOOP
==================================================

After every Worker package:

1. switch to SUPERVISOR mode;
2. read the produced artifact;
3. inspect material repository evidence;
4. normalize the result contract;
5. update `00_run_state.md`;
6. apply Gates A–F from `PHASE_G_AGENT_ORCHESTRATION_STANDARD.md`;
7. decide one of:

```text
ADVANCE_AUTONOMOUSLY
ADVANCE_WITH_DEBT
RETRY_CURRENT_PHASE
SPLIT_NEXT_INVESTIGATION
BLOCKED_ENVIRONMENT
PRODUCT_DECISION_REQUIRED
AUTHORITY_CONFLICT
STOP_NOT_ACCEPTED
```

8. if autonomous advancement is allowed, generate the next complete prompt;
9. record that prompt in the run ledger and optionally under `docs/campaign/phase-g/prompts/`;
10. switch to WORKER mode and execute it;
11. repeat.

Do not ask the user “shall I proceed?” after routine accepted packages when the orchestration standard says advancement is autonomous.

==================================================
23. MANDATORY HUMAN STOP CONDITIONS
==================================================

Stop and return to Product when:

- a baseline cannot be proven;
- an authority conflict cannot be resolved by declared precedence;
- a material Product policy decision is required;
- migration/destructive behavior requires approval;
- a G1 package is NOT ACCEPTED for source reasons and safe repair is not already in scope;
- an environment blocker prevents a mandatory acceptance gate with no host-shell path;
- final G2 requires a semantic UX/IA decision;
- Stitch would otherwise begin without G2 approval;
- merge/deployment approval is required.

Do not merge or deploy automatically.

==================================================
24. INITIAL EXECUTION
==================================================

Begin now.

Execute:

1. G0.0 baseline freeze
2. Supervisor G0.0 review
3. G0.1 whole Campaign Page reality audit
4. Supervisor G0.1 review
5. if safe, generate and execute the first G0.2 cluster
6. continue the Supervisor/Worker loop automatically under the orchestration standard

Continue until the first genuine mandatory human/Product stop condition is reached.

At that point return one concise control summary:

```text
PHASE G STOP

Current stage:
Last accepted frontend SHA:
Last accepted backend SHA:
Last artifact:
Supervisor decision:
Why human/Product input is required:
Exact decision/blocker:
Open P0/P1 findings:
Accepted debt:
Environment blockers:
Next action after resolution:
Stitch eligibility:
Merge status:
Deployment status:
```

Do not continue past the stop condition.
