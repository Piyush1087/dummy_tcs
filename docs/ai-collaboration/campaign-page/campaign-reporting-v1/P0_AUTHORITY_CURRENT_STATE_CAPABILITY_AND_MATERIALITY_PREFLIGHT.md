# CAMPAIGN REPORTING P0 — AUTHORITY / CURRENT-STATE / CAPABILITY / CONTRACT / MATERIALITY PREFLIGHT

`CAMPAIGN_REPORTING_P0_EXTERNAL_LOCAL_CODEX_REPORT_V1`

## Status

```text
RESULT = READY_FOR_CAMPAIGN_REPORTING_TECHNICAL_SA_REVIEW
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
```

## A. Exact transferred-input verification

| Input | Required raw SHA-256 | Observed raw SHA-256 | Result |
|---|---|---|---|
| Product/consumer contract | `897c8c1c81114c1fedec1da3dbeeffa5fa690461dd7905a5ab86905bebefdb65` | same | pass |
| Technical Plan V3 | `446a1ee55d243d80192c9c7581a9a283349972e5d532e6ff44edf67002b947b5` | same | pass |
| P0 runner prompt | archive requirement | `eab22a5ff2cfc2a298a02dde32d97561e7837576152a7796e702d16667a645b8` | pass |

The Product, Plan and prompt archives preserve the transferred raw bytes. Raw and normalized-content equality therefore both hold.

## B. Repository identities, fetch/prune and worktree proof

| Repository | Remote | Audited line |
|---|---|---|
| Authority | `https://github.com/Piyush1087/dummy_tcs.git` | `origin/main@3415a8b7ef155e115b77da3335795ff8ab05de3f` |
| Backend | `https://github.com/Piyush1087/creator-commerce-backend-v2-clone.git` | `origin/freeze/mvp-canonical-application-v1@129b291ecbca4a1e79451215a81726000cfb5bff` |
| Frontend | `https://github.com/Piyush1087/creator-commerce-frontend-v2-clone.git` | `origin/freeze/mvp-canonical-application-v1@6ea628b09817c4784a248658ddfc0202a13fbb00` |

`fetch --prune origin` completed for all three. Five pre-existing registered backend worktrees were inspected before fetch; each was clean. Audit checkouts were fresh detached task worktrees. No reset, stash, clean or overwrite was performed.

## C. Standards and authority reconciliation

Applicable `AGENTS.md`, universal engineering, backend, database, validation, AI-integration, frontend, Aurora/accessibility, Campaign, C03/C04, Settings/provider, shared Intelligence and Instagram Intelligence authorities were reconciled.

Precedence applied:

- `AWARENESS | TRUST | ASSETS | ACTION` supersedes executable legacy `PULSE | PROOF | PRODUCTION | PUSH` vocabulary.
- Legacy UCE Reporting and its zero-filled ROI payload are prohibited as calculation/Product authority.
- Reporting Stitch remains visual reference only.
- Reporting is an Attention summary plus nested page, never a fourth workspace.
- Product/Plan intentionally supersede conflicting legacy implementation; this is a bounded reconciliation requirement, not an equal-authority conflict.

## D. Candidate implementation bases, SHA/tree and ancestry

| Candidate | SHA | Tree | Disposition |
|---|---|---|---|
| Backend freeze | `129b291ecbca4a1e79451215a81726000cfb5bff` | `9fe6585addf8d8ccee9973b9b55cc0312c6e2b0b` | accepted broad starting base; contains C03, C04, Brand Settings and shared Intelligence ancestors |
| Backend Instagram | `fef32afb0fdef52f00c7c22b3d0a85967a68fded` | `7ef6bd705b55ef82836b3f57f06a2832a867e781` | required unmerged provider/DE/Instagram Intelligence lineage |
| Frontend freeze | `6ea628b09817c4784a248658ddfc0202a13fbb00` | `7de1702cda439c6f0d77000ee0c0c53f40a76c4d` | accepted Campaign/C04/Settings shell base |
| Frontend Instagram | `5866d0ac82f742957f53a8db2144a9a166628b75` | `7c095290ffdef4c84f37382bc594bef536c92a49` | required unmerged accepted Instagram workspace/provider UI lineage |
| Authority base | `3415a8b7ef155e115b77da3335795ff8ab05de3f` | `271ee57776f87970eebb1d014d3fac188ce01fac` | current Product/program base |

Ancestry proof: backend freeze contains `c04/shared-collaboration-backend-v1`, `integration/c03-campaign-participation`, `program/brand-settings-mvp` and `phase-g/brand-intelligence-v1-runtime-projection`. Frontend freeze contains accepted C04, C03 and Brand Settings tips. Neither freeze contains its later Instagram program tip. Authority Instagram contains authority freeze, but authority main and C04 are parallel accepted histories.

Run B convergence sequence:

1. Create Technical-SA-approved backend convergence branch from exact backend freeze.
2. Normal merge exact Instagram backend tip; resolve only `package.json`, `prisma/schema.prisma`, and `src/app.module.ts` by preserving both freeze/C04 and Instagram additions; never choose one side wholesale.
3. Require 98 distinct migration directories after union; validate ordering and populated upgrade before P1 changes.
4. Create frontend convergence branch from exact frontend freeze and normal merge exact Instagram frontend tip; merge-tree shows no textual conflict, with both-side edits limited to Campaign detail workspace and app routes.
5. Implement P1–P4 only after Technical-SA accepts resulting convergence SHAs/trees.

Moving `development`, `production`, newest Creator program branches and the discarded Campaign Intelligence Integration branch are not implementation bases.

## E. Authority convergence/publication decision

Authority branch `program/campaign-reporting-v1-authority` is based on exact `origin/main` and normally merges accepted C04 authority followed by accepted Instagram Intelligence authority. The discarded Integration-SA branch is excluded. Only the required Campaign Reporting documentation is added by P0.

## F. Campaign domain/current frontend audit

- Campaign identity is `UceCampaign.id`; C04 references it through a restricted `Collaboration.campaignId` relation.
- Executable lifecycle is `DRAFT | PUBLISHED | LIVE | PAUSED | COMPLETED | ARCHIVED`; `liveAt` is canonical and must not be inferred.
- Current executable objective sources remain legacy in parts of the freeze and require P1 reconciliation to the accepted four objectives.
- Campaign/Brief deliverables are template definitions (`CanonicalBriefDeliverable`), not Reporting obligations.
- Canonical read route is `GET /api/v1/brand-uce/campaigns/:campaignId/page`; Discovery and Applications are nested Campaign reads, and mutations are explicit POST commands.
- Page projection emits exactly `discovery`, `applicants`, `collaborations` workspaces and a truthful metric-free unavailable `performanceSummary`.
- Frontend canonical route is `/brand/uce/campaigns/:id`; the page has a feature header, Attention panel and three workspace tabs. Current unavailable Reporting is isolated in Attention plus a drawer and explicitly rejects legacy metrics.
- Existing capability presentations are server-authored (`ENABLED | DISABLED | HIDDEN`); C04 uses server-authored `availableActions`. Reporting must use command action `REPORT_REFRESH` only unless the Campaign projection later proves a canonical read action.
- Campaign Manager/Owner/Finance roles exist in Brand membership authority. Read authorization remains route/service-owned; refresh appears only for Owner/Manager and never for Finance or ARCHIVED.

## G. Legacy Reporting/UCE inventory and disposition

| Element | Disposition | Reason |
|---|---|---|
| `BrandUceReportingService.getDashboard` | `PROHIBITED_AS_AUTHORITY` | defaults objectives, emits fabricated zeros, ROI-like fields and legacy snapshots |
| `forceRefreshSync` and `/reporting/refresh-sync` | `RETIRE_IF_PROVEN_DEAD` | GET-adjacent legacy write path, no shared execution/current contract |
| UCE reporting snapshot/timeseries/gallery tables | `LEGACY_REFERENCE_ONLY` | unproven provenance and incompatible semantics |
| `ReportingTabPanel` / fourth pipeline tab | `PROHIBITED_AS_AUTHORITY` | violates three-workspace contract |
| legacy client response types and endpoint wrappers | `COMPATIBILITY_ONLY` | retain only for proven callers during bounded removal |
| canonical Campaign `performanceSummary` unavailable state | `REUSE_WITH_RECONCILIATION` | correct fail-closed placement and missing-not-zero behavior |
| `ReportingDrawer` composition | `LEGACY_REFERENCE_ONLY` | Product now freezes a nested full page; unavailable-state copy pattern remains informative |

## H–J. C04 obligation identity, numerator and 8/10 proof

Canonical chain:

```text
UceCampaign.id
→ Collaboration.campaignId
→ Collaboration.id
→ CollaborationDeliverableExecution.id
  unique(collaborationId, sourceBriefDeliverableId)
→ CanonicalBriefDeliverable.id (template provenance)
```

On approved Application handoff, C04 reads every `CanonicalBriefDeliverable` for the immutable ApplicationSnapshot Brief and creates one `CollaborationDeliverableExecution` per definition. Obligation definition is snapshotted. No later create/delete/upsert path exists; subsequent writes change state only. Enumeration is deterministic by Campaign, canonical authority version and Collaboration lineage.

Candidate numerator mapping:

```text
CollaborationDeliverableState.APPROVED
CollaborationDeliverableState.AUTO_APPROVED
```

Both are production-review completion truth. `CollaborationPublishingState.COMPLIANCE_VERIFIED` is separate publication compliance; `Collaboration.lifecycle=COMPLETED` is aggregate terminal truth. `REVISION_REQUESTED`, `HARD_STOP`, publishing states and Collaboration terminal state do not independently enter the numerator. Superseded submission versions remain history beneath the same obligation; C04 has no canceled/replaced obligation enum in the accepted model.

Fixture: two definitions provision two obligations in each of five Campaign-linked Collaborations, so denominator = `2 × 5 = 10`; eight obligations in `APPROVED | AUTO_APPROVED` yield `8 / 10 = 80%`, never `8 / 2`.

## K–M. Media identity chain and provider validations

Current C04 publication chain ends at append-only `CollaborationPublishingEvidence` fields: `id`, `publishingExecutionId`, `sequence`, free-text `evidenceRef`, optional `platform`, optional JSON `evidenceMetadata`, timestamps and compliance refs. It does not type or fence `providerMediaId`, provider account or authorization generation.

Accepted Instagram runtime has strong source fences (`brandId`, `providerAccountId`, `authorizationGeneration`, `providerMediaId`) and admitted Evidence, but it inventories first-party connected Brand account media. No accepted adapter joins a C04 active publishing evidence record to those exact fields.

- `REPORTING-PV-01 = NOT_PROVEN_FOR_CREATOR_PUBLISHED_COLLABORATION_MEDIA`.
- `REPORTING-PV-02 = PROVEN_ONLY_FOR_ACCEPTED_FIRST_PARTY_ACCOUNT_PATH`.
- `REPORTING-PV-03 = INCOMPLETE_FAIL_CLOSED`.

No caption, handle, timestamp, permalink or Creator-name fallback is authorized. A bounded additive C04/provider adapter may expose a typed immutable media identity record while ownership remains C04/provider; until then AWARENESS/TRUST media metrics are unavailable and ACTION primary is unavailable. ASSETS is unaffected.

Provider matrix from accepted v26 registry:

| Type | Accepted first-party allowlist | Campaign creator-media status |
|---|---|---|
| IMAGE | comments, likes, reach, saved, shares, total_interactions, views | unavailable until PV-01/PV-03 |
| CAROUSEL_ALBUM | same; bounded children separately | unavailable until PV-01/PV-03 |
| REEL/VIDEO | same; visual cover/frame analysis is not performance truth | unavailable until PV-01/PV-03 |
| STORY | reach, shares, total_interactions, views in donor registry | unsupported for Campaign V1 absent explicit creator-publication proof |
| impressions | not in accepted v26 media allowlist | unavailable |
| plays | not in accepted v26 media allowlist | unavailable |
| three-second views/retention | no accepted media metric contract | unavailable |
| Campaign unique reach | no deduplicated Campaign source | unavailable |

Provider fields distinguish `OBSERVED`, `OBSERVED_ZERO`, `UNAVAILABLE`, `UNSUPPORTED`, `PROVIDER_FAILURE` and explicit empty; missing/suppressed/unavailable never becomes zero. Provider observation time is explicitly unavailable and the donor records a 48-hour lag limit.

## N. Explicit non-dependencies

Repository branches for Creator Portfolio, Media Kit, Audience, Brand, Rate Card and Work Preferences were not selected as Reporting donors or bases. Only canonical creator/content identifiers may be projected for display. No Product output from those workspaces enters a metric.

## O–P. Shared runtime reuse map and Campaign placement

| Capability | Classification | P0 conclusion |
|---|---|---|
| `IntelligenceExecution`, processor execution/attempt/lease/retry/idempotency | `REUSE` | mature shared primitives |
| dependency/Evidence manifests and hashes | `REUSE` | immutable, hashed, brand-fenced |
| immutable object/component generations and Evidence refs | `REUSE` | adequate history/provenance foundation |
| `IntelligenceSubjectType` | `REUSE_WITH_CAMPAIGN_SUBJECT_ADAPTATION` | currently only `BRAND | OFFERING`; add real `CAMPAIGN` plus same-Brand FK, never synthetic subject |
| component current/CAS/candidates/transitions | `REUSE` | reuse within one Reporting root publication |
| Reporting root bundle/current atomicity | `ADDITIVE_SHARED_CHANGE` | existing processor siblings are explicitly independent; add one shared root-generation/current CAS boundary |
| Campaign accepted reference/query projection | `CAMPAIGN_OWNED_REFERENCE_ONLY` | Campaign does not insert shared current rows directly |
| second scheduler/Evidence/current store | `PROHIBITED_PARALLEL_RUNTIME` | not required or authorized |

Placement: subject `CAMPAIGN`, owning `brandId`, exact Campaign FK, definition `campaign_reporting_v1`, shared execution/history/current, strict Campaign consumer projection.

## Q. Atomic Reporting bundle/current design

One root `CampaignReportingGeneration` freezes Campaign version, objective, `asOf`, canonical input manifest/hash, report/metric/materiality versions, source observation set and every applicable window component. AWARENESS/TRUST include CTD+7D+30D; ASSETS includes CTD only; ACTION includes CTD primary and only semantically valid media cohorts. All children reference the same root generation. One serializable CAS transitions the complete root after validating child completeness and unchanged Campaign/C04/source fences. Partial children never become current; component current rows are projections of the accepted root, not independently advanced currents.

## R. Consumer/state/action contracts

Candidate strict contracts use Zod `.strict()` at all public object boundaries and equivalent DTO validation:

```ts
type CampaignReportingConsumerResponseV1 = {
  contract: "CAMPAIGN_REPORTING_CONSUMER_V1";
  campaign: { campaignId: string; campaignVersionRef: string; objective: Objective; lifecycle: string };
  requestedWindow: WindowType;
  state: ReportState;
  availableActions: ("REPORT_REFRESH")[];
  current: CampaignReportingCalculationV1 | null;
  latestAttempt: { executionId: string; state: "RUNNING"|"SUCCEEDED"|"FAILED"; requestedAt: string; completedAt: string|null; failureCode: string|null } | null;
  statusLimitations: ReportingLimitationV1[];
};
```

`CampaignReportingCalculationV1` carries immutable context/window/finality/freshness, primary/supporting metrics, metric-level and report coverage, Results/Signals/Patterns/Learnings, deterministic breakdowns, limitations and manifest/version/timestamp provenance. Refresh input is `{ expectedCampaignVersionRef, idempotencyKey }`; result is `{ executionId, disposition: "ACCEPTED"|"REPLAYED"|"COOLDOWN"|"ALREADY_RUNNING", retryAfterSeconds? }`.

Stable reason codes include `REPORT_NOT_ELIGIBLE`, `WINDOW_NOT_APPLICABLE`, `PROVIDER_PATH_UNAVAILABLE`, `MEDIA_LINEAGE_UNVERIFIED`, `METRIC_UNSUPPORTED`, `METRIC_NOT_OBSERVED`, `METRIC_SUPPRESSED`, `INSUFFICIENT_COVERAGE`, `MATERIALITY_CONTRACT_ABSENT`, `ATTRIBUTION_UNAVAILABLE`, `CURRENT_PRESERVED_AFTER_FAILURE`, `REFRESH_NOT_AUTHORIZED`, `REFRESH_COOLDOWN`, `REFRESH_ALREADY_RUNNING`, and `SOURCE_FENCE_MISMATCH`.

State rules are exact: initial running/no current = `PROCESSING`; running with current retains current truth plus running attempt; failed with current = `FAILED_CURRENT_PRESERVED`; failed without current = `FAILED_NO_CURRENT`. No `ARCHIVED_CURRENT`. GET triggers zero execution.

## S. Objective/window/metric registry

| Objective | Eligibility | Windows | Primary/fallback |
|---|---|---|---|
| AWARENESS | canonical published media + usable performance Evidence | CTD, 7D, 30D | unique Campaign reach only when deduplicated; else aggregated media reach explicitly non-unique |
| TRUST | published media with complete same-item reach/comments/saves/shares | CTD, 7D, 30D | `(comments+saves+shares)/reach`; likes excluded |
| ASSETS | canonical Campaign-linked C04 obligations and states | CTD only | `DELIVERABLE_EXECUTION_COMPLETION_RATE` |
| ACTION | canonical published Campaign deliverable/media | CTD primary; valid supporting cohorts only | authoritative attributed outcome or unavailable |

Canonical ASSETS supporting IDs are `APPROVED_DELIVERABLE_COUNT`, `PUBLISHED_DELIVERABLE_COUNT`, `REMAINING_DELIVERABLE_COUNT`. Legacy `ASSET_COMPLETION_RATE` and `DELIVERABLES_REMAINING` are compatibility aliases only for proven callers. Each metric records availability, value/unit, numerator/denominator, eligible/included counts, coverage, observed-through, contract version and limitations. Unavailable is always `null`, never zero.

## T. `CampaignReportingMaterialityRegistryV1` candidate

Status: `CANDIDATE_AWAITING_TECHNICAL_SA_ACCEPTANCE`. No donor threshold is reused because no accepted donor has identical Campaign subject/comparator semantics.

| Metric family | Subject/dimension | Comparator | Compatible cohort | Peers | Absolute floor | Relative floor | Zero baseline | Coverage gate | Version/rationale |
|---|---|---|---|---:|---:|---:|---|---:|---|
| reach/impressions/plays/views | CREATOR, MEDIA, DELIVERABLE | median of other items | same format/window/contract | 3 | 1 count | 20% | signal only when subject ≥1; direction above | 70% | `cr-mat-1.0`; count resolution + anti-noise relative gate |
| likes/comments/saves/shares | CREATOR, MEDIA, DELIVERABLE | same | same format/window/contract | 3 | 1 count | 20% | same | 70% | `cr-mat-1.0`; event-count resolution + anti-noise gate |
| TRUST_INTERACTION_RATE | CREATOR, MEDIA, DELIVERABLE | same | exact same-media-set format/window/contract | 3 | 1 percentage point | 20% | subject ≥1 percentage point for above; no below-zero signal | 70% | `cr-mat-1.0`; rate-specific floor |

Campaign-level unique/aggregated reach, completion rate, counts and attributed outcomes are Result-only in V1 because the Product defines no valid within-Campaign peer dimension for them. No registry entry means no Signal, hence no Pattern/Learning. Pattern/Learning recurrence thresholds remain the accepted 3 Deliverables/2 Creators/70% and 5 Deliverables/3 Creators/80% (or two non-overlapping cohorts) rules.

## U. Trigger/refresh/cooldown/archived plan

Triggers map to shared execution requests: first eligibility, admitted authoritative Evidence, C04 state/publication changes, Campaign completion, explicit `REPORT_REFRESH`, definition change and explicit missing-applicable-window command. Idempotency is the hash of Campaign/version/objective/root window set/asOf/manifest/report version. Reuse shared attempt/lease/retry/backoff. Candidate cooldown reuses accepted Instagram technical default of 15 minutes only if the Technical SA confirms command-semantics compatibility; otherwise configure a Reporting-owned value in the accepted shared request primitive. Acquisition remains an owning-provider request and a separate attempt. ARCHIVED is read/history only, no refresh and no automatic late-evidence calculation in V1.

## V. Schema/migration/upgrade/rollback plan

Expected delta: one ordered additive migration after the converged 98-migration base.

- `IntelligenceSubjectType.CAMPAIGN` plus nullable `campaignId` with same-Brand composite FK/check: `ADDITIVE_SHARED_CAMPAIGN_SUBJECT_ADAPTATION`.
- Reporting definition/contract registration: `REUSE` code registry, no table.
- Shared root generation/current CAS fields or tables: `ADDITIVE_SHARED_CAMPAIGN_SUBJECT_ADAPTATION`; only if component tables cannot atomically publish a root bundle.
- Campaign current reference: `CAMPAIGN_OWNED_REFERENCE`, optional only if shared root current cannot serve the strict projection.
- immutable metric/output payload: `REPORTING_OWNED_IMMUTABLE_STATE` inside shared generation payload/contracts.
- second Evidence/current/scheduler tables and provider payload/token/locator columns: `PROHIBITED_DUPLICATION`.

Proposed name: `20260916xxxxxx_campaign_reporting_shared_campaign_subject_root_current`. Clean apply and populated predecessor upgrade must preserve all 98 migration digests and counts, add no guessed history/current, and prove composite Brand/Campaign/C04/source fences. Rollback is forward repair: disable definition/triggers and leave immutable history; never destructive down-migrate accepted history. Campaign owns retention intent; shared Intelligence/DE owners execute purge by exact tenant/subject lineage.

## W. Frontend route/surface/current-file map

Proposed nested route: `/brand/uce/campaigns/:id/reporting` with `?window=CAMPAIGN_TO_DATE|LAST_7D_CONTENT|LAST_30D_CONTENT`. Default CTD. It is a responsive page with parent Campaign navigation, not a drawer or workspace. Likely P3 files: `src/routes/app-routes.tsx`, `features/auth/constants.ts`, `pages/brand/uce/BrandUceCampaignDetailPage.tsx`, `features/uce/campaign-page/{CanonicalCampaignPage,CampaignAttentionPanel,types}.tsx/ts`, API client, new Reporting feature/page/components/contracts/tests, and campaign-page responsive CSS. Existing `CampaignPipelineWorkspace`/`ReportingTabPanel` are legacy-only and must not be donors for structure. Header and three workspaces remain unchanged.

## X. P1–P4 sequence validation

Plan V3 is sound with one bounded correction: Run B must first create reviewed backend/frontend convergence commits for freeze + Instagram lineages and freeze their resulting SHA/tree/migration inventory before P1. Then P1 ASSETS, P2 media capability-gated interpretation, P3 orchestration/API/frontend, P4 integrated acceptance. Preserve RPT-01–31 exactly.

## Y–Z. Checks and identity

Focused tests actually run: backend 4 files/40 tests passed (`campaign-query.service`, C04 production, publishing and read-model mapping); frontend 3 files/22 tests passed (Campaign page model, canonical page and workspace/unavailable Reporting). The first backend attempt before local Prisma generation collected no tests because the generated client was absent; the exact rerun passed after task-local `prisma generate`. No database/container/browser/service was started. Backend freeze migration identity: count `94`, head `20260912100000_brand_payouts_wave_b_normal_path`, canonical sorted path+file-digest inventory SHA-256 `1730b340cfce9b06ce1bf2d4b65a2fc5a689147f1159efbc418034bc3ae51ba2`, migrations Git tree `ee30dccd79101be21d159d5554465fbe62870ccb`. Backend schema SHA-256 `f430ea4bee699435669186017895990eaba2b3080a29f7b0558b089d2338fea7`; lock SHA-256 `edcb20c22f2ddcf371a4aa93986bc28c58ae6b1a1b3ef5d636d89a70845922e9`. Instagram branch migration count is `91`; union with freeze is `98` with no same-path/different-blob collision.

## AA–AD. Security/live-call/unchanged proof

Transferred and new authority artifacts are scanned for credential/private-key/token values, signed locators, raw media and runtime artifacts; expected words in prohibitions are not findings. No `.env` was created or read. No Graph/model call, OAuth/provider mutation, database write, Campaign/C04/Settings mutation, migration, backend commit or frontend commit occurred. Backend and frontend audit worktrees remain at exact source SHAs with no tracked changes.

## AE–AH. Authority inventory/publication/archive/cleanup

P0 adds only the six required files beneath `docs/ai-collaboration/campaign-page/campaign-reporting-v1/`. Product and Plan are byte-identical; prompt raw and normalized content are identical to source. `git diff --check`, digest verification, forbidden-artifact scan, normal push, independent fetch/prune and local/fetched SHA/tree equality are recorded in the execution ledger and immutable external return after publication. Task-owned audit worktrees may be removed after proof; no user worktree is altered.

## AI. Blocker

```text
BLOCKER = NONE
```

Provider media reporting remains capability-gated unavailable, not a P0 circuit breaker. The Technical SA must accept the implementation bases/convergence SHA, C04 state mapping and candidate materiality registry before Run B.

```text
NEXT_ACTION =
PARENT RETURNS THIS IMMUTABLE REPORT
TO THE CAMPAIGN REPORTING TECHNICAL SA
FOR P0 REVIEW AND P1-P4 AUTHORIZATION
```
