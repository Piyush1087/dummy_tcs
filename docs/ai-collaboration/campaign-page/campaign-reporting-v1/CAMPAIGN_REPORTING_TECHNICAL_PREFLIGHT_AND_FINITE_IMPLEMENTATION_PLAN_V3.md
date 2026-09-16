# CAMPAIGN REPORTING — TECHNICAL PREFLIGHT + FINITE IMPLEMENTATION PLAN V3

`CAMPAIGN_REPORTING_TECHNICAL_PREFLIGHT_AND_FINITE_IMPLEMENTATION_PLAN_V3`

## 0. Result

```text
RESULT = READY_FOR_P0_EXECUTION

CAMPAIGN_REPORTING_PRODUCT =
PARENT_ACCEPTED_FOR_P0_PREFLIGHT

CAMPAIGN_REPORTING_PERFORMANCE_CLARIFICATION_V1 =
PARENT_ACCEPTED_FOR_P0_PREFLIGHT

ASSETS_MULTI_COLLABORATION_DENOMINATOR =
PARENT_ACCEPTED_FOR_P0_PREFLIGHT

ADDITIONAL_CAMPAIGN_SA_QUESTIONS = NONE

TECHNICAL_SA_IMPLEMENTATION_CAPABILITY = RELIABLE

IMPLEMENTATION_PLAN = FINITE

TECHNICAL_PREFLIGHT =
AUTHORIZED

IMPLEMENTATION = NOT STARTED
```

The earlier Campaign Intelligence Integration SA activity is discarded as implementation authority.

Read-only repository facts from that work may be reused only after independent verification against the exact implementation bases selected in P0. No prior plan, branch, interpretation, provider assumption or authority conclusion is inherited automatically.

Campaign Reporting is now driven through the Creator/Brand Instagram Intelligence Technical SA operating discipline:

```text
PARENT
= final Product/program authority

CAMPAIGN PAGE SA
= Campaign Product, Campaign Page and Campaign consumer authority

THIS TECHNICAL SA
= Campaign Reporting Intelligence architecture,
   implementation orchestration and technical acceptance

EXTERNAL LOCAL CODEX
= bounded implementation runner
```

---

## 1. Product authority

The P0 implementation-preflight authority consists of:

1. `CAMPAIGN_REPORTING_PRODUCT_AND_CONSUMER_CONTRACT_V1`; and
2. `CAMPAIGN_REPORTING_PERFORMANCE_CLARIFICATION_V1` captured below; and
3. the multi-Collaboration ASSETS denominator correction captured below.

The Parent has accepted these inputs for the bounded P0 authority/current-state/capability preflight. This does not yet authorize P1–P4 source implementation; that boundary follows P0 Technical-SA review and materiality governance closure.

### 1.1 Adopted clarification

```text
CAMPAIGN_REPORTING_PERFORMANCE_CLARIFICATION_V1

RPT_ELIGIBILITY_AWARENESS =
PUBLISHED_CAMPAIGN_MEDIA
+ USABLE_PROVIDER_PERFORMANCE_EVIDENCE

RPT_ELIGIBILITY_TRUST =
PUBLISHED_CAMPAIGN_MEDIA
+ SUFFICIENT_PROVIDER_EVIDENCE_FOR_AT_LEAST_ONE_TRUST_RESULT

RPT_ELIGIBILITY_ASSETS =
CANONICAL_CAMPAIGN_LINKED_C04_DELIVERABLE_OBLIGATIONS
+ CANONICAL_C04_DELIVERABLE_EXECUTION_STATE

ASSETS_PROVIDER_PERFORMANCE_REQUIRED = NO

DELIVERABLE_EXECUTION_COMPLETION_RATE =
APPROVED_OR_COMPLETED_CANONICAL_C04_DELIVERABLE_OBLIGATIONS
/
ALL_CANONICAL_C04_DELIVERABLE_OBLIGATIONS
FOR_CAMPAIGN_LINKED_COLLABORATIONS_IN_SCOPE

CAMPAIGN_OR_BRIEF_DELIVERABLES =
TEMPLATE_OR_DEFINITION_SOURCE
NOT THE MULTI_COLLABORATION_REPORTING_DENOMINATOR

LEGACY_ASSET_COMPLETION_RATE_ID =
COMPATIBILITY_ALIAS_ONLY_IF_AN_EXISTING_PUBLIC_CALLER_REQUIRES_IT
NEVER_THE_CANONICAL_NEW_METRIC_ID

RPT_ELIGIBILITY_ACTION =
CANONICAL_PUBLISHED_CAMPAIGN_DELIVERABLE_OR_MEDIA

ACTION_ATTRIBUTION_REQUIRED_FOR_REPORT_EXISTENCE = NO

ACTION_PRIMARY_OUTCOME_WITHOUT_ATTRIBUTION = UNAVAILABLE

CAMPAIGN_TO_DATE = SUPPORTED_ALL_OBJECTIVES

LAST_7D_CONTENT = MEDIA_SCOPED_ONLY
LAST_30D_CONTENT = MEDIA_SCOPED_ONLY

DELIVERABLE_EXECUTION_COMPLETION_RATE_WINDOW = CAMPAIGN_TO_DATE_ONLY_V1

ATTENTION_LAYER_DEFAULT_WINDOW = CAMPAIGN_TO_DATE
FULL_REPORT_DEFAULT_WINDOW = CAMPAIGN_TO_DATE

REPORT_WINDOW_SELECTION =
REQUEST_OR_URL_STATE
NOT_CAMPAIGN_SETTING

FULL_REPORT =
DIRECTLY_ADDRESSABLE_NESTED_CAMPAIGN_PAGE

REPORTING_IS_WORKSPACE = NO

BRAND_OWNER_REPORT_READ = YES
BRAND_OWNER_REPORT_REFRESH = YES

CAMPAIGN_MANAGER_REPORT_READ = YES
CAMPAIGN_MANAGER_REPORT_REFRESH = YES

FINANCE_ADMIN_REPORT_READ = YES
FINANCE_ADMIN_REPORT_REFRESH = NO

CAMPAIGN_PAGE_READ_TRIGGERS_REPORT_EXECUTION = NO

MANUAL_REFRESH =
SERVER_CAPABILITY_AUTHORIZED
IDEMPOTENT
BOUNDED_COOLDOWN

ARCHIVED_REPORT_READ = YES
ARCHIVED_MANUAL_REFRESH = NO
ARCHIVED_AUTOMATIC_LATE_EVIDENCE_RECALCULATION_V1 = NO
ARCHIVED_LATE_EVIDENCE_POLICY = DEFERRED

REPORT_FINALITY_ARCHIVED_CURRENT = DO_NOT_ADD

CAMPAIGN_LIFECYCLE_AND_REPORT_FINALITY = SEPARATE
```

### 1.2 Product boundary

Campaign Reporting is:

```text
post-execution Campaign performance calculation
+ objective-aware deterministic interpretation
+ immutable history/current projection
+ Campaign Attention summary
+ nested full Reporting page
```

It is not:

- Marketplace Recommendation;
- Applicant AI Match;
- Brand-wide or Creator-account Intelligence;
- Collaboration/C04 execution truth;
- provider/Meta ownership;
- payout or ROI accounting;
- causal attribution without an authoritative attribution source;
- a fourth Campaign workspace.

---

## 2. Authority boundaries

| Domain | Authority | Reporting relationship |
|---|---|---|
| Campaign | Campaign identity/version, objective, lifecycle, `liveAt`, Brief/deliverable template definitions, Reporting trigger/request, accepted current/history references, consumer projection | Reporting consumes exact immutable Campaign context and publishes bounded accepted references/projections; Campaign template quantities are not the multi-Collaboration completion denominator |
| C04 Collaboration | Collaboration, provisioned canonical Deliverable obligations, Production, Publishing, completion and publishing Evidence truth | Read-only source adapter; canonical Campaign-linked C04 obligations provide the ASSETS denominator and their accepted states provide its numerator; no lifecycle reinterpretation or mutation |
| Settings — Brand / provider integration | Brand-side Instagram connection, provider account, permissions/capabilities, authorization generation, token lifecycle, reconnect/deauthorization/delete-data | Reporting consumes bounded non-secret capability/fence state; never reads tokens or owns OAuth |
| Creator C01/C05/provider path | Creator admission/account/source lifecycle where relevant | Consumed only through accepted bounded source owner contracts; no token or lifecycle ownership transfer |
| DE/Evidence | Resource/Capture/Evidence, observation times, availability, provenance and source fences | Mandatory reuse; no second Evidence store |
| Shared Intelligence | definition/processor registry, executions, manifests, generations/current/CAS, replay, failure-current preservation | Mandatory reuse or bounded subject adaptation; no parallel runtime |
| Campaign Reporting | objective eligibility, metric contracts, deterministic calculations, bounded Signals/Patterns/Learnings, Reporting history/current | New feature ownership |
| Campaign Page | strict server DTO rendering, Attention summary, full page, roles/actions presentation | No frontend calculation or inference |

Mandatory invariants:

```text
DE ACQUISITION != REPORTING SEMANTICS

PROVIDER PAYLOAD != CAMPAIGN PRODUCT TRUTH

C04 EXECUTION TRUTH != REPORTING CALCULATION

CAMPAIGN LIFECYCLE != REPORT FINALITY/CURRENT STATE

FRONTEND PROJECTION != CALCULATION AUTHORITY
```

Explicit V1 non-dependencies:

```text
CREATOR_PORTFOLIO = NOT_A_REPORTING_DEPENDENCY
MEDIA_KIT = NOT_A_REPORTING_DEPENDENCY
CREATOR_AUDIENCE = NOT_A_REPORTING_DEPENDENCY
CREATOR_BRAND = NOT_A_REPORTING_DEPENDENCY
RATE_CARD = NOT_A_REPORTING_DEPENDENCY
WORK_PREFERENCES = NOT_A_REPORTING_DEPENDENCY
```

A later Product metric requires separate authority before any of these may enter Reporting inputs.

---

## 3. Technical authority decisions

These decisions complete the executable architecture without changing Product semantics.

### 3.1 Deterministic-first V1

Campaign Reporting V1 requires no model call.

```text
metrics = deterministic
Results = deterministic
Signals = deterministic comparator contracts
Patterns = deterministic recurrence contracts
Learnings = deterministic recurrence contracts
statements = bounded versioned templates
```

A model may be considered later only under a separate Product/technical contract. No free-form inference, prompt or chain-of-thought belongs in V1.

### 3.2 Consumer state envelope

The Product's conceptual output is normalized into an executable state envelope so no-current states do not fabricate a calculation identity.

```ts
type CampaignReportingConsumerResponseV1 = {
  contract: "CAMPAIGN_REPORTING_CONSUMER_V1";

  campaign: {
    campaignId: string;
    campaignVersionRef: string;
    objective: "AWARENESS" | "TRUST" | "ASSETS" | "ACTION";
    lifecycle: string;
  };

  requestedWindow:
    | "CAMPAIGN_TO_DATE"
    | "LAST_7D_CONTENT"
    | "LAST_30D_CONTENT";

  state:
    | "INSUFFICIENT_DATA"
    | "UNAVAILABLE"
    | "PROCESSING"
    | "CURRENT_COMPLETE"
    | "CURRENT_PARTIAL"
    | "STALE_CURRENT_PRESERVED"
    | "FAILED_CURRENT_PRESERVED"
    | "FAILED_NO_CURRENT"
    | "COMPLETED_CURRENT";

  availableActions: string[];

  current: CampaignReportingCalculationV1 | null;

  latestAttempt: {
    executionId: string;
    state: "RUNNING" | "SUCCEEDED" | "FAILED";
    requestedAt: string;
    completedAt: string | null;
    failureCode: string | null;
  } | null;

  statusLimitations: ReportingLimitationV1[];
};
```

Rules:

- `FAILED_NO_CURRENT`, `INSUFFICIENT_DATA`, `UNAVAILABLE` and initial `PROCESSING` may have `current = null`;
- `PROCESSING` means no accepted current exists and an attempt is running;
- when an accepted current exists and refresh is running, `state` remains the truthful state of that current, `current` remains visible and `latestAttempt.state = RUNNING`;
- `FAILED_CURRENT_PRESERVED` retains the exact previous accepted calculation under `current` and exposes the failed attempt separately;
- Campaign lifecycle is projected separately from Report finality;
- `ARCHIVED_CURRENT` is not added;
- raw internal/provider errors never enter consumer copy.

P0 must align `availableActions` with the existing Campaign capability convention:

```text
if existing Campaign projections include read capabilities
→ reuse the exact canonical read action

otherwise
→ availableActions contains command-capable actions only,
  including the canonical REPORT_REFRESH equivalent
```

Do not create a one-off Reporting action taxonomy. Route authorization remains authoritative for read access.

### 3.3 Accepted calculation

`CampaignReportingCalculationV1` contains the Product-defined calculation fields only when an immutable accepted calculation exists:

- calculation and execution identity;
- immutable Campaign/version/objective/window/as-of context;
- Report finality and freshness;
- primary/supporting metrics;
- coverage;
- Results/Signals/Patterns/Learnings;
- creator/content breakdowns;
- stable limitations;
- manifest/version/timestamp provenance.

For aggregate Results, use `observedThrough` as the maximum supporting observation time. Per-media source facts may retain exact `observedAt`. Do not assign a misleading singular event time to a multi-observation aggregate.

### 3.4 Coverage calculation

```text
eligibleItemCount = exact items eligible for that metric contract

includedItemCount = eligible items satisfying every required field

coveragePercent =
  includedItemCount / eligibleItemCount * 100
  when eligibleItemCount > 0

coveragePercent = null
  when eligibleItemCount = 0
```

The Report-level coverage summary is derived from an explicit versioned policy and cannot hide metric-specific lower coverage. Missing/suppressed/unavailable never becomes zero.

### 3.5 Window bundle strategy

Campaign Reporting uses one atomic accepted generation/current bundle:

```text
CampaignReportingGeneration
- campaign/context version
- objective
- immutable asOf
- inputManifestHash
- report definition version
- metric/materiality contract versions
- applicable window components
```

One Reporting execution calculates every Product-applicable window from the same immutable `asOf`, manifest and contract set:

```text
CAMPAIGN_TO_DATE = every objective

LAST_7D_CONTENT / LAST_30D_CONTENT =
media-scoped calculations only
```

This avoids read-triggered execution when the user switches URL/request state.

ASSETS emits only `CAMPAIGN_TO_DATE` for completion rate. ACTION attributed outcome remains Campaign-to-date until an attribution owner defines exact interval semantics.

Campaign has one accepted Reporting current pointer for the complete generation bundle. URL/request window selection projects one component from that exact generation. Independent window currents may not drift across `asOf`, manifest, source observation or definition version.

If the shared runtime represents windows as component generations, P0 must prove atomic transition/CAS of the complete applicable component set under one root generation/current. Partial component publication is prohibited.

If a requested applicable window is absent because an older accepted definition did not produce it, an explicit server command may request a new superseding bundle. A GET never triggers provider or Intelligence work.

### 3.6 Technical materiality authority

Materiality thresholds are versioned technical algorithm constants, not frontend values or permanent Product vocabulary.

P0 must publish an executable `CampaignReportingMaterialityRegistryV1` before any Signal-capable metric is enabled.

Rules:

- reuse an accepted existing deterministic threshold only where metric unit, subject and comparator semantics are identical;
- otherwise define a metric-specific relative and/or absolute floor with an explicit version;
- zero or invalid baseline fails closed unless that metric has a separately defined zero-baseline rule;
- no registry entry means Result-only behavior;
- Pattern/Learning cannot arise without a valid Signal;
- changes create a new contract version and never rewrite history.

The P0 artifact records every enabled metric threshold and its rationale for Technical-SA review. No Campaign SA question remains.

P0 produces a candidate registry; it does not self-authorize it. Before P2 may emit Signals:

```text
CampaignReportingMaterialityRegistryV1
= Technical SA accepted
  under explicit bounded Parent delegation
```

The Parent has explicitly delegated bounded materiality acceptance to the Technical SA for this program. Record that delegation in Git before P2. Until Technical-SA acceptance, only Results are authorized; Signals, Patterns and Learnings remain disabled.

---

## 4. Provider and source validation disposition

The three external validations remain mandatory but do not all block the same scope.

| Validation | Required owner | Effect if unavailable |
|---|---|---|
| `REPORTING-PV-01` creator-published media insights path | Settings/Meta/provider owner | AWARENESS/TRUST provider metrics remain unavailable; ASSETS still functions |
| `REPORTING-PV-02` exact metrics by media/configuration/age/path/window | Provider owner | Unsupported metric contracts fail closed per format/capability |
| `REPORTING-PV-03` C04 publishing Evidence → stable provider media identity → account/generation fence | C04 + provider/DE owners | No media performance Evidence may enter Reporting; no fuzzy fallback |

The implementation must support truthful capability gating:

```text
PROVIDER PATH ABSENT
!= REPORTING SYSTEM FAILURE

ASSETS
= may remain fully operational from Campaign + C04 truth

AWARENESS / TRUST
= INSUFFICIENT_DATA or UNAVAILABLE until exact evidence exists

ACTION
= Report may exist with primary outcome UNAVAILABLE
```

No live provider mutation, OAuth, permission request or token creation is authorized.

```text
LIVE_GRAPH_CALLS = NOT AUTHORIZED
```

P0 validates `REPORTING-PV-01/02/03` through repository, document and runtime-contract evidence only. A live read requires a separate same-run written Parent plus Settings/Meta-owner authorization specifying the exact app/path, credential source, read-only endpoint scope, secret handling and evidence handling. Absent that authority, zero live calls are permitted.

---

## 5. Architecture

### 5.1 Reporting subject and shared runtime

Preferred architecture:

```text
subject = CAMPAIGN
definition = campaign_reporting_v1
source classes = CAMPAIGN + C04 + provider/DE Evidence
execution = shared Intelligence execution/attempt machinery
generation/current = shared immutable generation + CAS current
consumer = Campaign-owned strict projection
```

P0 must inspect whether the current shared runtime already supports a Campaign subject.

Disposition:

- `REUSE` if subject ownership is generic;
- `REUSE_WITH_SUBJECT_ADAPTATION` if an additive `CAMPAIGN` owner/subject is required;
- circuit breaker if satisfying Reporting requires a parallel runtime/current store, synthetic Brand/Creator subject or weakened tenant isolation.

Campaign owns accepted Report references/query projection. It does not directly insert shared current rows.

### 5.2 Input manifest

Every execution uses one immutable canonical manifest containing:

```text
Campaign ID/version/objective/lifecycle/liveAt
Campaign/Brief Deliverable template structure/version
C04-provisioned Deliverable obligation identities/versions
window set and server-authored asOf
C04 Collaboration/Deliverable/publishing/completion refs + versions
stable media/provider identities
admitted Evidence refs + content hashes
source provider account + authorization generation
report definition version
metric/materiality contract versions
optional attribution-owner refs
```

The manifest is sorted, canonicalized and hashed. Cross-Brand/Campaign/Collaboration/media/account/generation substitution rejects atomically.

### 5.3 Source adapters

Required bounded read adapters:

1. Campaign context/version adapter;
2. C04 execution/publishing adapter;
3. DE/Evidence performance-observation adapter;
4. optional attribution adapter, fail-closed when absent;
5. bounded display identity adapter for creator/content labels only.

Adapters return canonical facts/references, not mutable ORM entities or provider payloads.

### 5.4 Evidence and provenance

Media metrics cite exact admitted provider Evidence.

ASSETS must cite exact immutable Campaign/C04 input references. P0 must determine whether accepted C04 publishing/deliverable Evidence already provides the required support. If canonical domain facts are not represented in shared Evidence, add only a truthful deterministic Reporting input/provenance bridge; do not mislabel C04 domain truth as provider truth and do not create a second Evidence system.

Every Result has exact supporting refs. Signal support is a strict subset/union of its Results. Pattern support is a strict set of Signals. Learning support is a strict set of Patterns/Results. No self-reference or unsupported statement.

### 5.5 Objective processors

Use one Reporting definition with objective-specific deterministic components rather than four unrelated systems.

```text
COMMON
- eligibility
- windows
- media membership
- coverage
- limitations
- provenance

AWARENESS
- authoritative Campaign unique reach when supplied
- otherwise aggregated media reach, explicitly non-unique
- supporting impressions/plays/views/counts

TRUST
- comments+saves+shares / reach
- strict same-media-set numerator/denominator
- likes supporting only

ASSETS
- approved/completed canonical C04 Deliverable obligations
  / all canonical C04 Deliverable obligations
  for Campaign-linked Collaborations in scope
- Campaign/Brief template is definition provenance, not denominator
- exact obligation cardinality across multiple Collaborations
- exact accepted C04 enum/state-to-numerator mapping owned by C04
- Campaign-to-date only

Reporting may not decide that generic words such as `approved`, `completed`, `published`, or terminal Collaboration status count. P0 must cite the exact accepted C04 state and transition authority for every included numerator state. If no accepted state can represent the intended numerator without reinterpretation, stop with:

```text
C04_STATE_MAPPING_AUTHORITY_GAP
```

ACTION
- attributed outcome only from an authoritative attribution adapter
- unavailable primary without attribution
- media/execution supporting facts remain allowed
```

### 5.6 Result → Signal → Pattern → Learning

Enforce the Product thresholds exactly:

- comparator median of other eligible comparable Campaign items;
- subject excluded from baseline;
- minimum three comparator peers, excluding the subject itself;
- same metric, subject dimension, compatible format cohort and contract version;
- Pattern: at least three distinct Deliverables, two Creators and 70% coverage;
- Learning A: at least five Deliverables, three Creators and 80% coverage;
- Learning B: same accepted Pattern in at least two genuinely non-overlapping cohorts/windows under the same contract version;
- no neutral recurring Signal;
- observational language only.

Use stable template/message keys plus bounded server-authored display text. No model is needed.

### 5.7 Trigger and execution orchestration

Triggers:

```text
eligibility first becomes true
new authoritative publishing/performance Evidence
relevant C04 completion/publishing change
Campaign completion/finality change
explicit REPORT_REFRESH
versioned Reporting definition change
explicit applicable-window calculation request when missing
```

Rules:

- Campaign page GET never triggers work;
- reuse existing worker/lease/retry/backoff/idempotency primitives;
- no second scheduler;
- manual refresh checks backend `availableActions`;
- Owner/Manager may refresh; Finance Admin may not;
- cooldown is technical/configurable and should reuse an accepted shared primitive/default where compatible;
- refresh requests provider/source work only through the owning integration port;
- source acquisition and Report calculation remain separate attempts;
- failure preserves previous current;
- ARCHIVED excludes refresh and automatic late-Evidence recalculation in V1.

---

## 6. Campaign consumer/API plan

Use existing Campaign route conventions after P0 audit. Semantic surfaces:

```text
GET Campaign Page projection
→ includes bounded Reporting Attention summary/current state

GET Campaign Reporting detail
→ strict consumer envelope for requested window

POST Campaign Reporting refresh
→ server-authorized idempotent command

GET calculation/history metadata
→ only if needed by frozen V1 UI; immutable internally regardless
```

Exact paths follow the mounted Campaign API family. Do not create a competing Campaign API namespace.

The server emits `availableActions`; frontend never derives refresh authority from role/lifecycle strings.

Attention summary:

- Campaign-to-date only;
- objective;
- primary metric/outcome;
- maximum 2–4 supporting metrics;
- coverage/freshness/material limitation;
- maximum 1–3 accepted insights/learnings;
- `View Full Report` link;
- truthful unavailable/processing/failure-current states.

Full report:

- directly addressable nested Campaign route;
- default Campaign-to-date;
- 7D/30D media-cohort URL/request selection where applicable;
- objective performance;
- metrics and coverage;
- Results/Signals/Patterns/Learnings;
- deterministic creator/content breakdowns;
- limitations/freshness/current context;
- clear return to parent Campaign;
- not a fourth workspace/tab.

---

## 7. Optimized finite execution plan

Use two bounded execution runs:

```text
GATE 0 = PARENT ACCEPTED
- Campaign Reporting Product + Performance clarification
- multi-Collaboration C04-obligation denominator
- Technical Plan V3
- bounded materiality acceptance delegated to Technical SA

RUN A
= P0 authority/current-state/capability preflight
+ candidate executable contracts
+ candidate materiality registry
+ no backend/frontend implementation
+ no migration

P0 REVIEW GATE
= Technical SA review
+ exact implementation bases / ancestry
+ reuse/gap architecture
+ strict contracts
+ migration/schema plan
+ candidate materiality registry under Parent's bounded delegation

RUN B
= autonomous P1 → P2 → P3 → P4 implementation
```

This is not a return to fragmented mechanical relay. P0 exists because the implementation runner cannot self-authorize exact multi-repository bases, C04 mappings or user-visible materiality semantics. Parent has delegated bounded materiality acceptance to the Technical SA, so no additional Parent relay is required after P0. After Technical-SA acceptance, P1→P4 proceeds as one autonomous implementation run and each packet remains independently reviewable and publishable.

### P0 — authority, current-state and capability preflight

Purpose:

```text
establish the exact executable base
+ prove donor/runtime/Campaign/C04/provider seams
+ freeze strict contracts before schema mutation
```

Required work:

1. Fetch/prune backend, frontend and authority repositories.
2. Identify exact current accepted Campaign, C04, Settings/provider, shared DE/Evidence/Intelligence and Campaign Page lineages; do not assume `development` alone.
3. Verify all relevant Product/technical artifacts and supersession.
4. Inventory Campaign routes, attention layer, roles/actions, objective/version/deliverable models and legacy Reporting/UCE code.
5. Inventory C04 deliverable/publishing/completion identities, exact C04→stable-provider-media linkage authority, accepted Instagram/provider DE/Evidence performance donor contracts, and the bounded creator/content display identity source where needed. Do not inspect or introduce Creator Portfolio as a Reporting donor.
6. Inventory provider capability, media insight schemas and account/generation fences.
7. Run `REPORTING-PV-01/02/03` as read-only technical validations using repository/document/runtime-contract truth only; live Graph calls are prohibited absent separate exact written authority.
8. Inventory shared Intelligence subject, manifest, execution, generation/current/CAS/failure-preservation and scheduler primitives.
9. Produce candidate strict contracts:
   - consumer envelope;
   - calculation/output schema;
   - metric registry;
   - limitation/reason codes;
   - objective eligibility/window policy;
   - C04 state mapping;
   - materiality registry with per-metric subject/comparator semantics, absolute floor, relative floor, zero-baseline rule, rationale and version;
   - role actions and refresh capability;
   - source/provider capability matrix.
10. Produce migration/schema plan and circuit-breaker decision.

P0 does not modify backend/frontend source, create migrations, or begin runtime implementation. It publishes only the bounded authority/preflight artifacts needed for review.

No implementation proceeds before the P0 review gate passes.

P0 may conclude that AWARENESS/TRUST provider metrics are unavailable. That is a capability outcome, not a program circuit breaker, provided ASSETS and truthful unavailable states can be implemented.

P0 circuit breakers:

- no exact Campaign/C04 identity link even for ASSETS;
- shared runtime cannot support Campaign without parallel architecture or weakened isolation;
- Campaign context and canonical Campaign-linked C04 Deliverable obligations cannot be obtained immutably;
- accepted authorities cannot be normally converged;
- material Product conflict.
- no exact accepted C04 Deliverable state can support the numerator without Reporting reinterpretation (`C04_STATE_MAPPING_AUTHORITY_GAP`).

Required P0 return:

```text
CAMPAIGN_REPORTING_P0_AUTHORITY_CURRENT_STATE_CAPABILITY_AND_MATERIALITY_PREFLIGHT_V1
```

After Technical-SA acceptance, issue one autonomous P1→P4 Local Codex implementation prompt pinned to the accepted exact bases and P0 contract digests without returning to Parent.

### P1 — ASSETS-first real vertical slice

Purpose:

```text
Campaign + C04
→ immutable input manifest
→ DELIVERABLE_EXECUTION_COMPLETION_RATE
→ Result
→ shared generation/current
→ Campaign strict API
```

This establishes a provider-independent production path before media metrics.

Required:

- additive Campaign subject/runtime adaptation if P0 authorizes it;
- Reporting definition/bundle registration;
- immutable calculation/history/current ownership;
- manifest and execution identity;
- exact denominator from all canonical C04 Deliverable obligations for Campaign-linked Collaborations in scope;
- exact approved/completed C04 obligation numerator mapping;
- proof that multiple Collaborations cannot produce a completion rate above 100%;
- supporting approved/published/remaining counts;
- Campaign-to-date only;
- idempotent replay;
- stale Campaign/C04 version rejection;
- failed-current preservation;
- tenant/Campaign/Collaboration/Deliverable isolation;
- Owner/Manager/Finance read projection;
- no frontend yet beyond contract tests.

PostgreSQL proof:

- clean migration application;
- populated predecessor upgrade;
- predecessor counts/digests preserved;
- exact manifest/current/history lineage;
- replay and failure preservation;
- cross-Brand/Campaign rejection;
- C04 truth unchanged.

### P2 — media metrics and deterministic interpretation

Purpose:

```text
canonical Campaign media
+ admitted provider Evidence
→ AWARENESS/TRUST/ACTION supporting metrics
→ Results
→ Signals
→ Patterns
→ Learnings
```

Required:

- exact C04→media→Evidence linkage;
- latest admitted observation at immutable `asOf`;
- Campaign-to-date + 7D/30D content cohorts;
- unique reach only from authoritative deduplicated source;
- aggregated reach explicitly non-unique;
- Trust same-media-set aggregation;
- observed-zero vs missing distinction;
- Action primary unavailable without attribution;
- metric capability/format gating;
- materiality registry enforcement;
- comparator/permutation/hash stability;
- Pattern/Learning recurrence and coverage;
- deterministic bounded statements;
- no causal language;
- exact Evidence subset/provenance;
- no model call.

If provider capability is absent, persist no fabricated metric Evidence. Produce truthful unavailable/partial outputs and keep ASSETS operational.

### P3 — orchestration, Campaign integration and frontend

Backend:

- automatic eligible-event integration through accepted shared primitives;
- manual `REPORT_REFRESH` with idempotency and cooldown;
- no GET-triggered execution;
- source refresh request through owning provider port only;
- one atomic Reporting bundle/current containing every applicable window component at the same `asOf`, manifest and contract versions;
- immutable history;
- stale/newer-manifest protection;
- archived read/no-refresh/no-auto-recalculation;
- Campaign Attention summary projection;
- full Reporting detail projection;
- strict reason/message codes;
- `availableActions` server authority.

Frontend:

- Attention Layer Campaign-to-date summary;
- directly addressable nested full Reporting page;
- URL/request window state;
- objective/metrics/coverage/freshness/limitations;
- Results/Signals/Patterns/Learnings;
- creator/content breakdowns only when supplied;
- all frozen states;
- Owner/Manager refresh only when action supplied;
- Finance Admin read-only;
- no metric calculation;
- responsive full page, not drawer/tab;
- existing Campaign Header and three operational workspaces preserved.

### P4 — integrated acceptance, publication and handoff

Required:

- fresh PostgreSQL clean migration and populated upgrade;
- production backend/frontend builds and boot/health;
- real authenticated API→database→UI lineage;
- all `RPT-01` through `RPT-16` fixtures;
- objective-specific eligibility matrix;
- all three window semantics;
- roles/availableActions/manual-refresh cooldown;
- GET does not trigger execution/provider calls;
- failure/stale/current preservation;
- late completed-Campaign evidence superseding calculation;
- archived no-refresh/no-auto-recalc;
- cross-tenant/Campaign/source isolation;
- provider-unavailable truthful degradation;
- C04/Campaign/Settings non-mutation;
- browser matrix at 390/767/768/desktop;
- keyboard/focus/overflow/Axe/console gates;
- Campaign Page/Applicants/Collaborations/Discovery regressions;
- C04, shared Intelligence, DE/Evidence and Settings/provider regressions;
- secret/raw-provider/locator/forbidden-artifact scans;
- normal non-force publication and independent fetch-back;
- execution ledger, evidence, developer handoff and Product-learning handoff;
- no development merge or deployment.

---

## 8. Required acceptance fixtures

Preserve the Product fixtures `RPT-01` through `RPT-16` and add:

```text
RPT-17 ASSETS with no provider connection/Evidence
→ valid Campaign-to-date ASSETS Report

RPT-18 ACTION published media without attribution
→ Report exists; primary unavailable; no inferred conversion

RPT-19 ASSETS requested with 7D/30D window
→ rejected/not applicable through stable reason code

RPT-20 GET Campaign Page/full Report
→ zero new provider/Intelligence executions

RPT-21 Owner refresh
→ allowed, idempotent, cooldown enforced

RPT-22 Campaign Manager refresh
→ allowed

RPT-23 Finance Admin refresh
→ absent action and backend denial

RPT-24 ARCHIVED Campaign
→ current/history readable; refresh absent; no automatic late-Evidence calculation

RPT-25 lifecycle/finality separation
→ Campaign ARCHIVED; Report retains legitimate finality; no ARCHIVED_CURRENT enum

RPT-26 request/URL window change
→ no Campaign mutation/version and no persisted preference

RPT-27 failed media-source refresh with valid ASSETS/current
→ valid current preserved; source limitation isolated

RPT-28 cross-Campaign/C04/media/Evidence substitution
→ atomic rejection

RPT-29 result permutation/replay
→ byte/canonical hash stable; no duplicate generations/current

RPT-30 materiality contract absent
→ Result allowed; Signal/Pattern/Learning prohibited

RPT-31 multi-Collaboration ASSETS cardinality
→ Brief template has 2 Deliverable definitions
→ 5 Campaign-linked Collaborations provision 10 canonical C04 obligations
→ 8 accepted completed/approved obligations
→ completion rate = 8 / 10 = 80%, never 8 / 2
```

---

## 9. Schema and migration expectation

Expected additive scope may include:

- Campaign subject/current ownership adaptation in shared Intelligence if absent;
- Reporting definition/processor bundle metadata;
- Campaign accepted Report/current references only if shared current cannot provide an adequate Campaign projection;
- immutable Reporting calculation/input-manifest/history/audit structures only where existing shared generation records are insufficient;
- trigger/request/cooldown records through an existing shared execution request primitive where possible.

Do not pre-authorize a parallel Reporting database model that duplicates shared generation/current/history.

P0 must first classify every proposed table/column as:

```text
REUSE
ADDITIVE_SHARED_ADAPTATION
CAMPAIGN_OWNED_REFERENCE
NOT_REQUIRED
PROHIBITED_DUPLICATION
```

No destructive backfill, guessed historical current, token field, provider payload column or raw Evidence copy.

---

## 10. Test execution model

Per packet:

```text
changed-surface unit/contract tests
+ focused PostgreSQL proof when persistence changes
+ affected shared regressions
+ production build
+ scoped lint/format/diff integrity
+ secret/forbidden-artifact scan
```

P4:

```text
cross-packet integration
+ populated migration compatibility
+ real auth/API/database/UI
+ responsive/accessibility/browser matrix
+ complete affected Campaign/C04/Intelligence/provider regressions
```

Do not run unrelated full suites at every packet. Do not weaken:

- Brand/Campaign/Collaboration/source isolation;
- credential containment;
- Capture/Evidence lifecycle;
- migration safety;
- failure-current preservation;
- missing-not-zero semantics;
- canonical Campaign/C04 non-mutation;
- provider truth boundaries.

---

## 11. Circuit breakers

Stop and return to Parent/Technical SA when:

1. exact current implementation bases or accepted ancestry cannot be established;
2. authority histories cannot be normally converged;
3. Campaign/C04 cannot provide immutable planned/executed Deliverable facts for ASSETS;
4. Campaign subject support would require a parallel Intelligence/current architecture or synthetic Brand/Creator identity;
5. exact C04→provider media linkage is unavailable but code attempts to infer it fuzzily;
6. provider support would require new OAuth/permissions/provider mutation outside this program;
7. implementation requires changing C04 lifecycle truth or Settings token/lifecycle ownership;
8. Product semantics conflict materially with executable Campaign authority;
9. frontend cannot preserve the existing three-workspace Campaign structure;
10. implementation requires causal/ROI/attribution claims without an accepted attribution owner.

Provider metric unavailability by itself is not a circuit breaker. It is an accepted capability-gated outcome.

---

## 12. Estimated execution quantum

Relative to the completed Commercial Setup + Rate Card autonomous run as `100`:

```text
Campaign Reporting complete run = approximately 90–120
```

Primary drivers:

- Campaign/C04/provider lineage audit;
- new Campaign Intelligence subject/definition integration;
- multi-window deterministic calculations;
- Signal/Pattern/Learning contracts;
- shared trigger/current/history integration;
- two Campaign consumer surfaces;
- provider-capability uncertainty and broader regression matrix.

ASSETS-first P1 materially reduces risk because it proves a complete Campaign Reporting path without relying on unresolved Meta performance access.

---

## 13. Required authority artifacts

Publish under one Campaign Reporting authority lineage:

```text
docs/ai-collaboration/campaign-page/campaign-reporting-v1/
  CAMPAIGN_REPORTING_PERFORMANCE_CLARIFICATION_V1.md
  CAMPAIGN_REPORTING_TECHNICAL_PREFLIGHT_AND_FINITE_IMPLEMENTATION_PLAN_V3.md
  EXECUTION_LEDGER.md
  P0_AUTHORITY_CURRENT_STATE_AND_CAPABILITY_PREFLIGHT.md
  P1_ASSETS_FIRST_VERTICAL_SLICE.md
  P2_MEDIA_METRICS_AND_DETERMINISTIC_INTERPRETATION.md
  P3_CAMPAIGN_ORCHESTRATION_CONSUMER_AND_FRONTEND.md
  P4_INTEGRATED_ACCEPTANCE_AND_CLOSEOUT.md
  CAMPAIGN_REPORTING_V1_DEVELOPER_HANDOFF.md
  CAMPAIGN_REPORTING_V1_FINAL_ACCEPTANCE_AND_PRODUCT_LEARNING_HANDOFF.md
  runner-prompts/
```

Use one execution ledger. Normal non-force pushes only. Independent fetch-back equality after every accepted checkpoint. No development merge or deployment.

---

## 14. Final disposition

```text
CAMPAIGN_REPORTING_PRODUCT =
PARENT_ACCEPTED_FOR_P0_PREFLIGHT

CAMPAIGN_REPORTING_PERFORMANCE_CLARIFICATION_V1 =
PARENT_ACCEPTED_FOR_P0_PREFLIGHT

ASSETS_MULTI_COLLABORATION_DENOMINATOR =
PARENT_ACCEPTED_FOR_P0_PREFLIGHT

CAMPAIGN_SA_FOLLOW_UP =
NOT_REQUIRED

TECHNICAL_PREFLIGHT =
AUTHORIZED

FINITE_IMPLEMENTATION_PLAN =
ACCEPTED_FOR_P0

RECOMMENDED_EXECUTION =
RUN A = P0 PREFLIGHT ONLY
→ TECHNICAL SA REVIEW GATE
→ RUN B = AUTONOMOUS P1 → P2 → P3 → P4

FIRST_REAL_SLICE =
ASSETS OBJECTIVE

PROVIDER_METRIC_UNAVAILABILITY =
CAPABILITY_GATED
NOT A WHOLE-PROGRAM BLOCKER

CAMPAIGN_FRONTEND =
INCLUDED AT P3

APPLICANT_AI_MATCH =
NOT STARTED

MARKETPLACE_RECOMMENDATION =
NOT STARTED

DEVELOPMENT_MERGE =
NOT AUTHORIZED

DEPLOYMENT =
NOT AUTHORIZED

NEXT_ACTION =
TECHNICAL SA ISSUES THE EXACT P0 PREFLIGHT LOCAL CODEX PROMPT
```
