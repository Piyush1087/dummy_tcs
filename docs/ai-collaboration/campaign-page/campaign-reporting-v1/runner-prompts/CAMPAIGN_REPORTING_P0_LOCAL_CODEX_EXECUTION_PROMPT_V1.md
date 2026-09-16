# CAMPAIGN REPORTING — P0 LOCAL CODEX EXECUTION PROMPT V1

`CAMPAIGN_REPORTING_P0_AUTHORITY_CURRENT_STATE_CAPABILITY_AND_MATERIALITY_PREFLIGHT_LOCAL_CODEX_EXECUTION_V1`

## 0. Assignment

You are the External Local Codex runner for Campaign Reporting V1 P0.

Execute only:

```text
P0 — AUTHORITY / CURRENT-STATE / CAPABILITY / CONTRACT / MATERIALITY PREFLIGHT
```

This is a read-only backend/frontend technical audit plus authority-document publication.

Do not begin P1. Do not modify backend/frontend source. Do not create a backend/frontend implementation branch or migration. Do not run live Meta/Graph/model calls. Do not merge to `development` or deploy.

Operating topology:

```text
PARENT
= final Product/program authority
+ has accepted the Product inputs, ASSETS denominator and Plan V3 for P0
+ has delegated bounded materiality-registry acceptance to the Technical SA

CAMPAIGN PAGE SA
= Campaign Product/Page/consumer authority

CAMPAIGN REPORTING TECHNICAL SA
= architecture, P0 acceptance, materiality acceptance,
   implementation orchestration and technical acceptance

EXTERNAL LOCAL CODEX
= P0 audit and evidence runner only
```

Return to the Technical SA after P0. Do not continue into P1–P4.

---

## 1. Exact transferred authority inputs

The Parent must provide this prompt together with these two files:

### 1.1 Product and consumer contract

Accepted input name:

```text
CAMPAIGN_REPORTING_PRODUCT_AND_CONSUMER_CONTRACT_V1.md
```

The transferred file may retain an upload suffix such as `(1)`.

Exact SHA-256:

```text
897c8c1c81114c1fedec1da3dbeeffa5fa690461dd7905a5ab86905bebefdb65
```

### 1.2 Technical Plan V3

```text
CAMPAIGN_REPORTING_TECHNICAL_PREFLIGHT_AND_FINITE_IMPLEMENTATION_PLAN_V3.md
```

Exact SHA-256:

```text
446a1ee55d243d80192c9c7581a9a283349972e5d532e6ff44edf67002b947b5
```

### 1.3 Prompt

Archive this exact prompt and prove source/archive normalized-content and SHA-256 equality.

Before repository work, independently locate the transferred files, hash their raw bytes and verify Sections 1.1–1.2 exactly. Do not normalize an input to make a failed digest pass.

If either input is missing or mismatched:

```text
RESULT = CAMPAIGN_REPORTING_P0_AUTHORITY_INPUT_MISMATCH
```

Stop without repository mutation.

### 1.4 Authority status

The Parent has accepted for P0:

```text
Campaign Reporting Product + Performance Clarification V1

DELIVERABLE_EXECUTION_COMPLETION_RATE =
approved/completed canonical C04 Deliverable obligations
/
all canonical C04 Deliverable obligations
for Campaign-linked Collaborations in scope

Campaign/Brief Deliverable definitions =
template/provenance only,
not the multi-Collaboration denominator

Technical Plan V3
```

P0 must determine the exact accepted C04 enum/state mapping. Reporting may not infer it from generic words.

---

## 2. Previous activity disposition

The earlier Campaign Intelligence Integration SA activity is discarded as authority.

You may use a factual repository observation from it only after independently reproducing that fact from current repository truth.

Do not inherit:

- its branches as implementation bases;
- Product interpretations;
- provider capability assumptions;
- dependency conclusions;
- execution plan;
- Marketplace or Applicant AI Match scope.

This P0 covers Campaign Reporting only.

---

## 3. Repositories and orientation references

Repositories:

```text
AUTHORITY = Piyush1087/dummy_tcs
BACKEND = Piyush1087/creator-commerce-backend-v2-clone
FRONTEND = Piyush1087/creator-commerce-frontend-v2-clone
```

Historical broad integration orientation references from 2026-09-15 UTC:

```text
dummy_tcs/main
= 3415a8b7ef155e115b77da3335795ff8ab05de3f

backend/freeze/mvp-canonical-application-v1
= 129b291ecbca4a1e79451215a81726000cfb5bff

frontend/freeze/mvp-canonical-application-v1
= 6ea628b09817c4784a248658ddfc0202a13fbb00
```

These are orientation references only. They are not preselected implementation bases.

Perform normal fetch/prune for all three repositories. Inspect current remote branches/tags/handoffs and establish exact accepted module lineages. Do not assume `main`, `development`, `production`, a freeze branch, or the newest commit is the correct unified base.

Do not reset, stash, discard, clean or overwrite any existing worktree. Inspect registered worktrees first. If relevant work is dirty or overlaps the audit, stop and report it. Prefer fresh task worktrees/detached read-only checkouts for inspection.

Expected relevant histories include, without assuming branch names:

- current Campaign Page and Campaign domain;
- current C04 Collaboration implementation and handoff;
- Settings — Brand / Instagram connection state;
- Creator-side provider/source ownership where actually relevant;
- accepted shared DE/Evidence runtime;
- accepted Brand/Creator Instagram Intelligence runtime;
- current frontend Campaign shell, Attention Layer and three workspaces;
- existing/legacy Reporting and UCE implementations;
- current role/capability conventions.

Prove repository identities, fetched refs, SHA/tree, ancestry/merge relationships and worktree state.

---

## 4. P0 mutation boundary

Allowed:

- fetch/prune;
- read-only Git/history/source/test/schema inspection;
- fresh temporary audit worktrees;
- dependency installation in task-owned ignored directories if truly needed;
- focused existing tests that do not mutate durable state;
- hashing/diffing;
- creation/publication of the P0 authority branch and documentation artifacts after all mandatory gates pass.

Prohibited:

- backend/frontend source edits;
- Prisma/schema/migration changes;
- backend/frontend implementation branches, commits or pushes;
- database writes or migration deployment;
- provider/Meta/OAuth/configuration mutation;
- live Graph calls;
- live model calls;
- token/credential access or output;
- Campaign/C04/Settings state mutation;
- P1–P4 implementation;
- merge to `development` or deployment.

The only publishable changes are authority documentation under the Campaign Reporting V1 authority lineage.

---

## 5. Required authority reconciliation

Read applicable repository instructions and standards completely, including:

- all relevant `AGENTS.md` files;
- engineering, backend, database, validation, AI-integration, frontend, design-system and accessibility standards;
- Campaign Page final handoffs and reconciliation evidence;
- current Campaign Product/objective/version/deliverable authority;
- C03/C04 final handoffs relevant to Campaign Applications/Collaborations;
- Settings — Brand Instagram/provider handoffs;
- accepted shared DE/Evidence/Intelligence handoffs;
- Brand and Creator Instagram Intelligence final developer handoffs;
- current role/capability policy;
- the two exact transferred P0 inputs.

Supersession rules:

```text
AWARENESS / TRUST / ASSETS / ACTION = current objectives

PULSE / PROOF / PRODUCTION / PUSH = legacy only

legacy UCE Reporting = not Product/calculation authority

Reporting Stitch = visual reference only

Reporting = Attention summary + nested full page
not a fourth Campaign workspace
```

If authoritative histories conflict materially and cannot be normally reconciled without Product reinterpretation:

```text
CAMPAIGN_REPORTING_P0_AUTHORITY_CONFLICT
```

Stop.

---

## 6. Exact current implementation base determination

Return a recommended exact implementation base for each repository:

```text
BACKEND_BRANCH / SHA / TREE
FRONTEND_BRANCH / SHA / TREE
AUTHORITY_BASE_BRANCH / SHA / TREE
MIGRATION_COUNT / HEAD / SHA-256
```

The base must preserve all required Campaign, C04, Settings/provider and shared Intelligence histories.

For every candidate base:

- show why it is or is not authoritative;
- prove accepted ancestors or exact tree equivalence through normal merges;
- identify unmerged module branches required for Reporting;
- identify incompatible parallel histories;
- state the exact normal convergence sequence proposed for Run B;
- never silently choose moving `production` or `development` because it is newer.

P0 does not perform backend/frontend convergence. It produces the exact plan and ancestry proof for Technical-SA acceptance.

---

## 7. Campaign domain and frontend audit

Inventory current executable truth for:

- Campaign identity, version and objective;
- lifecycle and authoritative `liveAt`;
- Campaign/Brief Deliverable template definitions;
- Campaign Page read routes and mutation commands;
- Campaign Header and Attention Layer;
- exactly three workspaces: Discovery, Applicants, Collaborations;
- nested route conventions and mobile shell behavior;
- current roles, route guards, policy actions and `availableActions` convention;
- current manual-command idempotency/cooldown patterns;
- legacy Reporting/UCE controllers/services/DTOs/routes/tables/frontend screens;
- current frontend behavior when Reporting is unavailable.

Classify every legacy Reporting element:

```text
REUSE
REUSE_WITH_RECONCILIATION
COMPATIBILITY_ONLY
LEGACY_REFERENCE_ONLY
RETIRE_IF_PROVEN_DEAD
PROHIBITED_AS_AUTHORITY
```

Prove that the planned nested Reporting page can be added without creating a fourth workspace/tab or changing the existing operational workspaces.

---

## 8. C04 obligation and numerator-state audit

This is a mandatory P0 gate.

Establish from accepted C04 code, schema, state machines, migrations, tests and handoffs:

1. exact Campaign→Collaboration identity;
2. exact provisioned canonical Deliverable-obligation identity;
3. whether all obligations for in-scope Campaign-linked Collaborations are enumerable deterministically;
4. exact C04 enum/state(s) that can enter the completion numerator;
5. exact distinction among approval, completion, publication and terminal Collaboration state;
6. treatment of canceled/rejected/replaced/superseded obligations, if they exist;
7. whether obligation counts can change after Collaboration creation and how versions are identified;
8. exact C04 publishing Evidence/media linkage fields;
9. exact stable work/media reference semantics for publishing and non-publishing work;
10. tenant/Brand/Campaign/Collaboration isolation fences.

Canonical Product metric ID:

```text
DELIVERABLE_EXECUTION_COMPLETION_RATE
```

Canonical formula:

```text
numerator =
accepted C04-state obligations classified by exact C04 authority

denominator =
all canonical C04 Deliverable obligations
for Campaign-linked Collaborations in scope
```

Campaign/Brief template quantities are provenance/definition only.

Required multi-Collaboration proof fixture:

```text
Brief template = 2 Deliverable definitions
5 Campaign-linked Collaborations = 10 canonical obligations
8 numerator-eligible obligations
completion rate = 8 / 10 = 80%
never 8 / 2
```

If no exact accepted C04 state supports the intended numerator without reinterpretation:

```text
C04_STATE_MAPPING_AUTHORITY_GAP
```

Stop P0 and do not propose an invented mapping.

If an existing public API uses `ASSET_COMPLETION_RATE`, report it as a compatibility concern. The new canonical Product/API metric ID remains `DELIVERABLE_EXECUTION_COMPLETION_RATE`; an alias may be proposed only for proven existing callers.

---

## 9. C04 → provider media linkage audit

Validate using current repository/document/runtime-contract evidence only:

```text
C04 publishing evidence
→ canonical Deliverable/Collaboration/Campaign
→ stable provider media identity
→ provider account
→ authorization generation
→ admitted performance Evidence
```

No fuzzy matching by caption, handle, timestamp, permalink text or Creator name is allowed as canonical linkage.

Return:

- exact fields and owner for every link;
- whether the chain is complete today;
- exact gaps and owning module;
- which objectives/metrics remain unavailable when gaps exist;
- whether a bounded additive adapter can solve the gap without changing C04/provider ownership.

`REPORTING-PV-03` fails closed for media metrics when this chain is incomplete. It does not block the provider-independent ASSETS slice if Section 8 passes.

---

## 10. Provider capability audit

Validate from current accepted contracts/code/docs only:

```text
REPORTING-PV-01
Can the accepted provider path retrieve authoritative insights
for creator-published Campaign Collaboration media?

REPORTING-PV-02
Which exact metrics are supported by media type,
media ownership/collaboration configuration,
publication age, permission/path and observation semantics?
```

Inspect Settings — Brand and Creator source ownership. Do not transfer token or lifecycle ownership to Reporting.

Return a matrix covering at minimum:

- IMAGE/post;
- CAROUSEL;
- REEL/video cover versus performance metrics;
- Story, explicitly unsupported unless current authority proves otherwise;
- reach, impressions, plays/views, likes, comments, saves, shares;
- deduplicated Campaign unique reach, expected unavailable unless an exact source exists;
- three-second views/retention, capability-gated;
- missing/suppressed/unavailable/observed-zero semantics;
- account/provider/authorization-generation fences.

Default:

```text
LIVE_GRAPH_CALLS = NOT AUTHORIZED
LIVE_MODEL_CALLS = NOT AUTHORIZED
META_PROVIDER_MUTATIONS = NOT AUTHORIZED
```

Repository/document/runtime-contract validation only. Do not read configured secrets.

Provider unavailability is not a whole-program blocker:

```text
ASSETS = may remain available
AWARENESS/TRUST = unavailable until exact Evidence exists
ACTION = Report may exist with primary outcome unavailable
```

---

## 11. Explicit non-dependencies

Do not treat any of these as a Campaign Reporting V1 dependency or donor:

```text
CREATOR_PORTFOLIO
MEDIA_KIT
CREATOR_AUDIENCE
CREATOR_BRAND
RATE_CARD
WORK_PREFERENCES
```

Reporting may use only a bounded canonical creator/content display identity source where the consumer needs a label. It does not consume those workspaces' Product outputs.

---

## 12. Shared DE/Evidence/Intelligence reuse audit

Establish exact current support for:

- Campaign or generic subject identity;
- owner/tenant scoping;
- definition/processor bundle registration;
- immutable input/Evidence manifests and hashes;
- execution identity, attempts, replay and idempotency;
- generation/component/current and atomic transition/CAS;
- failed-current and stale-current preservation;
- Evidence support/provenance;
- freshness/coverage/finality metadata;
- worker/lease/retry/backoff primitives;
- event/manual trigger orchestration;
- delete/purge ownership.

Preferred architecture:

```text
subject = CAMPAIGN
definition = campaign_reporting_v1
execution = shared Intelligence runtime
generation/current = shared immutable generation + CAS
consumer = Campaign-owned strict projection
```

Classify:

```text
REUSE
REUSE_WITH_CAMPAIGN_SUBJECT_ADAPTATION
ADDITIVE_SHARED_CHANGE
CAMPAIGN_OWNED_REFERENCE_ONLY
PROHIBITED_PARALLEL_RUNTIME
```

If Campaign support requires synthetic Brand/Creator identity, a second current store, a second Evidence store, a second scheduler or weakened isolation:

```text
CAMPAIGN_REPORTING_SHARED_RUNTIME_SCOPE_EXPANSION_REQUIRED
```

Stop.

---

## 13. Atomic Reporting bundle/current contract

Produce the candidate executable architecture for one accepted current pointer:

```text
CampaignReportingGeneration
- Campaign/context version
- objective
- immutable asOf
- inputManifestHash
- report definition version
- metric/materiality contract versions
- applicable window components
```

Applicable windows:

```text
AWARENESS / TRUST
→ CAMPAIGN_TO_DATE
+ LAST_7D_CONTENT
+ LAST_30D_CONTENT

ASSETS
→ CAMPAIGN_TO_DATE only

ACTION
→ CAMPAIGN_TO_DATE primary attributed outcome
+ media-cohort supporting components only where semantically valid
```

All applicable components must share the exact `asOf`, manifest, source-observation set and contract versions. URL/request selection projects a component from the same accepted bundle.

No independent window current drift.

If the shared runtime uses component generations, prove how one root generation and one atomic transition/CAS publish the complete applicable set. Partial component publication is prohibited.

---

## 14. Consumer state and API contract

Produce strict candidate TypeScript/Zod/DTO contracts for:

- role-neutral Intelligence calculation output;
- Campaign consumer envelope;
- Attention summary;
- full Reporting detail;
- refresh command/result;
- metrics, Results, Signals, Patterns, Learnings, coverage, limitations and provenance;
- stable reason/message codes;
- strict unknown-field rejection where repository convention requires it.

State semantics:

```text
PROCESSING
= no accepted current exists and an attempt is RUNNING

accepted current + refresh RUNNING
= retain truthful current state
+ retain prior current calculation
+ latestAttempt.state = RUNNING

refresh failure with current
= FAILED_CURRENT_PRESERVED
+ exact prior current retained
+ latestAttempt.state = FAILED

failure without current
= FAILED_NO_CURRENT
```

Campaign lifecycle remains separate from Report finality/current state. Do not add `ARCHIVED_CURRENT`.

`availableActions` must follow the existing Campaign capability convention:

```text
if canonical Campaign projections include read actions
→ reuse exact canonical read action

otherwise
→ expose command-capable actions only,
  including canonical REPORT_REFRESH equivalent
```

Do not invent a one-off action taxonomy.

Role policy to map through existing authorization:

```text
Brand Owner = read + refresh
Campaign Manager = read + refresh
Finance Admin = read only
ARCHIVED = read, no refresh
```

GET/page rendering must trigger zero provider/Intelligence executions.

---

## 15. Metric registry and objective contracts

Produce the exact candidate metric registry using the Product authority.

Canonical ASSETS primary metric:

```text
DELIVERABLE_EXECUTION_COMPLETION_RATE
```

Supporting ASSETS metric IDs:

```text
APPROVED_DELIVERABLE_COUNT
PUBLISHED_DELIVERABLE_COUNT
REMAINING_DELIVERABLE_COUNT
```

Freeze objective eligibility/window mapping, primary fallback, required fields, observed-zero rules, eligible/included item policy, coverage policy and version for every metric.

Preserve:

- Campaign unique reach only from authoritative deduplicated Campaign truth;
- aggregated media reach explicitly non-unique;
- TRUST same-media-set numerator and denominator;
- likes excluded from TRUST numerator;
- ASSETS Campaign-to-date only;
- ACTION Report existence without attribution and primary outcome unavailable;
- no inferred conversion, ROI or ROAS;
- missing/suppressed/unavailable never zero.

---

## 16. Candidate materiality registry

Produce, but do not self-accept:

```text
CampaignReportingMaterialityRegistryV1
```

For every Signal-capable metric include:

```text
metricId
subject type/dimension
comparator class
format/cohort compatibility
minimum comparator peers = 3 excluding subject
absolute floor
relative floor if any
zero-baseline rule
minimum evidence/coverage gate
rationale
version
accepted-donor constant reused, if any
```

Rules:

- reuse existing constants only where metric/unit/subject/comparator semantics are identical;
- no arbitrary model-defined threshold;
- no registry entry means Result-only behavior;
- no Signal means no Pattern/Learning;
- changes require a new version and never rewrite history;
- deterministic template wording may not exceed supporting graph semantics.

P0 status:

```text
MATERIALITY_REGISTRY = CANDIDATE_AWAITING_TECHNICAL_SA_ACCEPTANCE
```

The Parent has delegated bounded materiality acceptance to the Technical SA. Do not mark it accepted yourself.

---

## 17. Trigger/orchestration audit

Map candidate triggers onto existing primitives:

```text
eligibility first becomes true
new authoritative performance/publishing Evidence
relevant C04 state change
Campaign completion/finality change
explicit REPORT_REFRESH
definition-version change
explicit missing applicable-window calculation request
```

Prove/recommend:

- GET never triggers execution;
- manual refresh is server-capability authorized;
- Owner/Manager refresh; Finance read only;
- idempotency identity;
- technical/configurable cooldown using an accepted shared primitive where compatible;
- source refresh requested only through the owning provider port;
- acquisition and calculation remain separate attempts;
- one bundle/current atomicity;
- failure-current preservation;
- ARCHIVED read/no refresh/no automatic late-Evidence recalculation in V1;
- no second scheduler/worker platform.

---

## 18. Schema and migration plan

Do not edit schema or migrations. Produce a reviewed candidate plan.

For every proposed table/enum/column/index/constraint classify:

```text
REUSE
ADDITIVE_SHARED_CAMPAIGN_SUBJECT_ADAPTATION
CAMPAIGN_OWNED_REFERENCE
REPORTING_OWNED_IMMUTABLE_STATE
NOT_REQUIRED
PROHIBITED_DUPLICATION
```

Return:

- exact expected migration count delta;
- migration ordering/name proposal;
- clean-apply and populated-upgrade plan;
- backfill policy: no guessed current/history;
- rollback/forward-repair strategy;
- retention/purge ownership;
- exact Brand/Campaign/C04/source isolation constraints;
- whether shared generation tables alone suffice;
- why every new structure cannot be represented safely by accepted shared runtime.

No token/provider payload/raw Evidence copy/raw media/signed locator fields.

---

## 19. Frontend and consumer plan verification

Confirm executable placement:

```text
Campaign Header
→ Attention Layer
   → Campaign-to-date Reporting summary
   → View Full Report
→ exactly three operational workspaces unchanged
```

Full Report:

- nested directly addressable Campaign route;
- desktop responsive page;
- mobile responsive page;
- default Campaign-to-date;
- 7D/30D media cohort via URL/request state where applicable;
- no persisted Campaign preference/version change;
- no frontend metric/aggregation/insight calculation;
- no fourth tab/workspace;
- clear parent-Campaign navigation.

Inventory exact current frontend files/routes/components/tests likely affected in P3 and their donor classification. Do not edit them.

---

## 20. P1–P4 finite-plan validation

Validate Plan V3's later sequence against repository truth:

```text
P1 = ASSETS-first real vertical slice
P2 = provider media metrics + deterministic interpretation
P3 = orchestration + Campaign API/frontend
P4 = integrated acceptance/publication/handoff
```

Return any bounded sequencing correction required by actual repository architecture. Do not redesign Product or begin implementation.

Preserve acceptance fixtures `RPT-01` through `RPT-31`, especially:

- no published Deliverable;
- provider unavailable;
- unique vs aggregated reach;
- TRUST missing vs observed zero;
- Signal/Pattern/Learning thresholds;
- refresh/current preservation;
- cross-Campaign substitution;
- ACTION without attribution;
- ASSETS without provider;
- GET zero executions;
- roles and archived behavior;
- URL window state;
- atomic bundle replay;
- materiality absent → Result only;
- 2 Brief definitions × 5 Collaborations = 10 obligations; 8 complete = 80%.

---

## 21. Required P0 authority publication

After all mandatory P0 gates pass, create one authority branch:

```text
program/campaign-reporting-v1-authority
```

Determine and record its exact accepted base/convergence ancestry before creation. Do not base it on discarded Integration-SA authority merely because it exists.

Publish only:

```text
docs/ai-collaboration/campaign-page/campaign-reporting-v1/
  CAMPAIGN_REPORTING_PRODUCT_AND_CONSUMER_CONTRACT_V1.md
  CAMPAIGN_REPORTING_PERFORMANCE_CLARIFICATION_V1.md
  CAMPAIGN_REPORTING_TECHNICAL_PREFLIGHT_AND_FINITE_IMPLEMENTATION_PLAN_V3.md
  EXECUTION_LEDGER.md
  P0_AUTHORITY_CURRENT_STATE_CAPABILITY_AND_MATERIALITY_PREFLIGHT.md
  runner-prompts/
    CAMPAIGN_REPORTING_P0_LOCAL_CODEX_EXECUTION_PROMPT_V1.md
```

Requirements:

- Product contract is byte-identical to the transferred input;
- clarification is extracted faithfully from accepted Plan V3 authority;
- Plan V3 is byte-identical to transferred input;
- prompt archive normalized-content equality;
- one execution ledger only;
- no acceptance claim beyond P0 evidence-ready;
- no backend/frontend commit/push;
- normal non-force authority push;
- independent fetch/prune;
- local/fetched SHA and tree equality;
- required authority ancestry;
- clean authority worktree.

If exact Product/Plan byte preservation conflicts only with line-ending conventions, preserve raw source files and separately record normalized digest; do not silently rewrite semantic content.

---

## 22. Required validation and hygiene

At minimum:

- `git diff --check` for any authority change;
- exact source/archive digest verification;
- migration inventory hash/count from chosen backend candidate;
- focused existing read-only tests only where they materially verify audit conclusions;
- secret/private-key/token/signed-locator/raw-media/runtime-artifact scan of transferred and planned authority files;
- no `.env` creation;
- no database/container/browser/service unless strictly necessary for read-only source verification; none is expected;
- no unrelated container/process mutation;
- cleanup of exact task-owned temporary files/worktrees where safe;
- all source worktrees remain clean.

Do not claim a build/test/runtime gate that was not run. P0 is not implementation acceptance.

---

## 23. P0 circuit breakers

Stop without authority publication when any applies:

```text
CAMPAIGN_REPORTING_P0_AUTHORITY_INPUT_MISMATCH
CAMPAIGN_REPORTING_P0_AUTHORITY_CONFLICT
CAMPAIGN_REPORTING_STARTING_REPOSITORY_CONFLICT
C04_STATE_MAPPING_AUTHORITY_GAP
CAMPAIGN_REPORTING_SHARED_RUNTIME_SCOPE_EXPANSION_REQUIRED
CAMPAIGN_REPORTING_PRODUCT_CONFLICT
```

Provider metric unavailability, missing live credentials or absent live Graph authorization are not circuit breakers. Record capability-gated unavailable outcomes.

Do not create a fabricated Product answer or weaken isolation to avoid stopping.

---

## 24. Required immutable return contract

Return exactly:

```text
CAMPAIGN_REPORTING_P0_EXTERNAL_LOCAL_CODEX_REPORT_V1
```

Include:

```text
A. exact transferred-input SHA-256 verification
B. repository identities, fetch/prune and worktree proof
C. standards and authority reconciliation
D. candidate implementation bases with SHA/tree/ancestry
E. authority convergence/publication decision
F. Campaign domain/current frontend audit
G. legacy Reporting/UCE inventory and disposition
H. exact C04 obligation identity and cardinality
I. exact C04 numerator enum/state mapping
J. multi-Collaboration 8/10 semantic proof
K. C04→provider media identity chain
L. REPORTING-PV-01/02/03 results
M. provider metric/media capability matrix
N. explicit non-dependency proof
O. shared DE/Evidence/Intelligence reuse map
P. Campaign subject/runtime placement
Q. atomic Reporting bundle/current design
R. consumer envelope/state/availableActions contracts
S. objective eligibility/window/metric registry
T. candidate materiality registry
U. trigger/refresh/cooldown/archived plan
V. schema/migration/upgrade/rollback plan
W. frontend route/surface/current-file map
X. P1–P4 sequencing validation
Y. existing tests/static checks actually run
Z. schema/migration/dependency identity
AA. secret/forbidden-artifact scan
AB. live-call/provider-mutation proof
AC. backend unchanged proof
AD. frontend unchanged proof
AE. authority changed-file inventory and statistics
AF. authority publication/fetch-back SHA/tree equality
AG. prompt/Product/Plan archive digest equality
AH. cleanup and final worktree state
AI. exact blocker, if any
```

Success status block:

```text
RESULT =
READY_FOR_CAMPAIGN_REPORTING_TECHNICAL_SA_REVIEW

P0_EVIDENCE_READY = YES

P1 = NOT_STARTED
P2 = NOT_STARTED
P3 = NOT_STARTED
P4 = NOT_STARTED

PRODUCT_INPUT = VERIFIED
PLAN_V3_INPUT = VERIFIED

IMPLEMENTATION_BASES = PROPOSED_FOR_TECHNICAL_SA_ACCEPTANCE
C04_STATE_MAPPING = PROPOSED_FOR_TECHNICAL_SA_ACCEPTANCE
MATERIALITY_REGISTRY = CANDIDATE_AWAITING_TECHNICAL_SA_ACCEPTANCE

LIVE_GRAPH_CALLS = NONE
LIVE_MODEL_CALLS = NONE
META_PROVIDER_MUTATIONS = NONE

BACKEND_CHANGED = NO
FRONTEND_CHANGED = NO
NEW_MIGRATIONS = NONE

DEVELOPMENT_MERGE = NOT_PERFORMED
DEPLOYMENT = NOT_PERFORMED

NEXT_ACTION =
PARENT RETURNS THIS IMMUTABLE REPORT
TO THE CAMPAIGN REPORTING TECHNICAL SA
FOR P0 REVIEW AND P1-P4 AUTHORIZATION
```

If blocked, preserve exact completed states, name the circuit breaker and do not publish partial authority unless explicitly required to preserve an already committed evidence state.

---

## 25. Final instruction

Begin with the transferred-input digests and repository/worktree verification.

Perform the complete P0 audit. Do not stop after finding one nonblocking provider limitation. Do not implement backend/frontend code. Do not start P1.

The objective is a trustworthy, exact execution base and executable contract package for a later autonomous P1→P4 run.
