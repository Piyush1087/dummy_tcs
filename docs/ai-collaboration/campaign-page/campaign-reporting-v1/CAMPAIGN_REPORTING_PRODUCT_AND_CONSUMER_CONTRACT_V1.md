# CAMPAIGN REPORTING — PRODUCT DECISION REGISTER + CAMPAIGN CONSUMER OUTPUT CONTRACT V1

`CAMPAIGN_REPORTING_PRODUCT_AND_CONSUMER_CONTRACT_V1`

## Status

```text
PRODUCT_SCOPE = CAMPAIGN REPORTING ONLY
PRODUCT_DECISION_REGISTER = RECOVERED + BOUNDED CLARIFICATIONS INCORPORATED
PARENT_FREEZE = REQUIRED BEFORE IMPLEMENTATION
IMPLEMENTATION = NOT AUTHORIZED BY THIS DOCUMENT
INTELLIGENCE_ENGINE_BUILD = MAY USE THIS AS CAMPAIGN CONSUMER REQUIREMENT AFTER PARENT ACCEPTANCE
FRONTEND_CALCULATION = PROHIBITED
LEGACY_REPORTING_AS_AUTHORITY = PROHIBITED
```

This document deliberately isolates **Campaign Reporting** from the other two deferred Campaign intelligence layers:

```text
Marketplace Recommendation = pre-application sourcing/recommendation
Applicant AI Match = post-application ApplicationSnapshot decision support
Campaign Reporting = post-execution Campaign performance calculation + interpretation
```

The purpose of this register is to tell an Intelligence Engine / Campaign Intelligence SA exactly **what the Campaign module expects to receive**, while keeping Data Extraction, provider connectivity, Settings, C03, C04 and Creator-side modules with their existing owners.

---

# 1. Authority and recent-system corrections

## 1.1 Campaign Page authority preserved

The Campaign Page remains:

```text
Campaign Header
→ Campaign Attention Layer
→ exactly three operational workspaces:
   Discovery
   Applicants
   Collaborations
```

**Reporting is not a fourth Campaign workspace.**

Reporting appears as Campaign-level performance in the Attention Layer and may open a fuller Reporting experience through `View Full Report`.

Historical Reporting Stitch screens and legacy UCE reporting are not data/Product authority.

## 1.2 Current objectives

Only:

```text
AWARENESS
TRUST
ASSETS
ACTION
```

`PULSE / PROOF / PRODUCTION / PUSH` is legacy vocabulary and must not be revived.

## 1.3 Settings — Brand ownership

Recent Product development establishes **Settings — Brand** as the owner of Brand-side Instagram/provider connection lifecycle, including the current Instagram Graph/API connection and any future Creator Marketplace connection/capability path.

Campaign Reporting must therefore:

- never read/store access tokens;
- never create a parallel OAuth flow;
- never own provider account switching, authorization generation, reconnect, deauthorization or delete-data behavior;
- consume only bounded non-secret capability/source state from the owning integration layer where needed.

Exact provider ability to read performance for creator-published Campaign media remains an external validation item; Product formulas below do not imply that Meta currently grants the required read path.

## 1.4 Creator C01–C06 ownership

Creator-side modules remain authoritative for their own domains. Reporting must not duplicate them.

Relevant boundaries:

```text
C01 / Creator Entry + Instagram admission
= Creator entry/provider eligibility authority where applicable

C03
= Application truth + immutable ApplicationSnapshot
(not a Reporting calculation owner)

C04
= Collaboration + canonical Deliverable execution + Production + Publishing + completion truth
(primary execution donor for Reporting)

C05 / Creator Settings
= Creator-side account/settings/source lifecycle where applicable

C06
= Creator payout projection
(not Campaign performance authority)
```

Reporting may consume C04 facts. It does not become owner of Collaboration, publishing or payout truth.

## 1.5 Current broad integration baseline

The most recent cross-module context packet verified on 2026-09-15 UTC:

```text
dummy_tcs/main
= 3415a8b7ef155e115b77da3335795ff8ab05de3f

backend/freeze/mvp-canonical-application-v1
= 129b291ecbca4a1e79451215a81726000cfb5bff

frontend/freeze/mvp-canonical-application-v1
= 6ea628b09817c4784a248658ddfc0202a13fbb00
```

For future implementation, **cross-module freeze/accepted module lineages—not `development` alone—must be reconciled first**.

These SHAs are orientation references, not permission to implement from them without a fresh fetch/prune and ancestry check.

---

# 2. Product purpose

Campaign Reporting answers:

> **How did this Campaign perform, what authoritative evidence supports that answer, and what can the Brand learn from it?**

It is post-execution interpretation over canonical Campaign/Collaboration/publishing/performance truth.

Reporting is not:

- Campaign planning;
- Discovery funnel analytics;
- Applicant evaluation;
- general Creator account analytics;
- Brand-wide Instagram Intelligence;
- Meta/provider analytics copied directly into Campaign UI;
- payout/ledger accounting;
- creator recommendation before launch;
- a causal attribution engine unless an authoritative attribution source exists.

---

# 3. Ownership model

```text
Campaign domain
owns:
- Campaign identity/version
- objective
- liveAt/lifecycle
- selected report window request
- Reporting trigger/request
- accepted Report current/history references
- stale/invalidation acceptance rules
- Campaign query projection

C04 Collaboration
owns:
- Collaboration identity
- canonical Deliverable identity
- Production state
- Publishing state
- completion/terminal truth
- canonical publishing evidence / media linkage fields available in C04

Provider / DE / Evidence owner
owns:
- acquired media/performance observations
- resource/capture/Evidence identity
- capturedAt / observedAt
- source provenance
- account/provider/authorization-generation fencing
- provider-specific missing/suppressed/unavailable semantics

Shared Intelligence Engine
owns:
- versioned Reporting definition execution
- deterministic metric calculation
- bounded interpretation
- execution identity/attempts
- generation/component/current/CAS machinery where applicable
- Evidence references
- replay/idempotency
- failure-current preservation
- telemetry/provenance

Campaign Page frontend
owns:
- rendering strict Campaign server DTOs
- no metric calculation
- no aggregation
- no score/insight generation
```

Mandatory invariant:

```text
DE ACQUISITION != INTELLIGENCE SEMANTICS
PROVIDER PAYLOAD != CAMPAIGN PRODUCT TRUTH
FRONTEND PROJECTION != CALCULATION AUTHORITY
```

---

# 4. Reporting eligibility

## 4.1 V1 eligibility

A Campaign may produce a performance Report when at least:

```text
1 canonical C04 Deliverable is PUBLISHED
+
its Campaign/Collaboration lineage is authoritative
+
a stable provider/media identity is deterministically linked
+
at least 1 usable admitted performance observation exists
```

Until then:

```text
REPORTING = INSUFFICIENT_DATA / UNAVAILABLE
```

Do not manufacture zero metrics.

This Product eligibility is subject to final C04/media-linkage technical validation; if C04/provider authority cannot prove the lineage, the engine must not infer it.

## 4.2 Lifecycle behavior

```text
DRAFT
→ Reporting unavailable

PUBLISHED but not execution/reporting eligible
→ insufficient/unavailable

LIVE
→ Reporting may be current once eligibility is met

PAUSED
→ existing Reporting remains readable;
   refresh/recalculation may run over authoritative evidence

COMPLETED
→ Reporting remains available;
   later authoritative provider observations for already-canonical Campaign media
   may create a superseding Report Calculation

ARCHIVED
→ Campaign UI is read-only;
   system-owned post-archive late-evidence recalculation is NOT frozen here
```

Campaign completion freezes domain execution, **not provider observation arrival**.

---

# 5. Reporting windows

## 5.1 Calculation timezone

```text
REPORTING_CALCULATION_TIMEZONE = UTC
```

All membership/cutoff calculations use server-side UTC instants.

UI may later localize timestamps through a canonical Brand/Campaign timezone owner, but localization must not change calculation membership.

## 5.2 Campaign-to-date

```text
window.type = CAMPAIGN_TO_DATE
from = campaign.liveAt
to = report.asOf
```

`report.asOf` is a server-authored immutable cutoff.

If authoritative `liveAt` is missing, do not infer it from `createdAt`, `publishedAt`, first Application, first Collaboration or first media publication.

## 5.3 7D / 30D windows

V1 `7D` and `30D` are **content-published cohorts**, not implied interval-delta performance windows.

```text
LAST_7D_CONTENT
= media.publishedAt in (report.asOf - 7 days, report.asOf]

LAST_30D_CONTENT
= media.publishedAt in (report.asOf - 30 days, report.asOf]
```

For each included media item, use the latest authoritative metric observation admitted as of `report.asOf`.

User-facing wording must be equivalent to:

```text
Content published in last 7 days
Content published in last 30 days
```

Do not call this “performance in the last 7/30 days” unless the source actually provides interval/delta performance for that exact interval.

## 5.4 Campaign media inclusion

A media item belongs to a Report only when all are true:

```text
1. C04 / canonical publishing truth links it to a Deliverable
2. Deliverable belongs to this Campaign's Collaboration lineage
3. stable provider/media identity is deterministically linked to publishing evidence
4. media.publishedAt <= report.asOf
5. admitted source observation was captured/observed <= report.asOf
```

Campaign schedule end date alone does not exclude a late but canonical Campaign publication.

---

# 6. Objective KPI authority

The Intelligence Engine must not choose Campaign KPI authority dynamically.

The Product mapping is deterministic.

## 6.1 AWARENESS

Primary metric preference:

```text
1. CAMPAIGN_UNIQUE_REACH, only when an authoritative source supplies
   deduplicated unique Campaign reach for the exact media/window

2. otherwise AGGREGATED_MEDIA_REACH,
   explicitly labelled as an aggregate exposure total
```

Supporting metrics when authoritative/format-appropriate:

```text
IMPRESSIONS
PLAYS_OR_VIEWS
PUBLISHED_MEDIA_COUNT
PUBLISHED_CREATOR_COUNT
```

### Unique Campaign Reach

```text
CAMPAIGN_UNIQUE_REACH
= distinct accounts reached across the included Campaign media set
```

It must never be reconstructed by summing per-media reach.

If authoritative deduplicated truth is unavailable:

```text
CAMPAIGN_UNIQUE_REACH = UNAVAILABLE
```

### Aggregated Media Reach

```text
AGGREGATED_MEDIA_REACH
= Σ reach(media_i)
```

This may double-count the same account across media. The UI/contract must not label it as unique people.

## 6.2 TRUST

Primary V1 metric:

```text
TRUST_INTERACTION_RATE
=
Σ(comments + saves + shares)
/
Σ(media reach)
```

Strict same-media-set rule:

A media item enters the aggregate only when:

```text
reach is authoritative
AND comments is authoritative or observed zero
AND saves is authoritative or observed zero
AND shares is authoritative or observed zero
```

If any required metric is missing/suppressed/unavailable for an item, that item is excluded from both numerator and denominator.

Therefore:

```text
numerator media set = denominator media set
```

Required coverage disclosure:

```text
eligible media count
included media count
coverage percent
excluded-by-missing-metric count/reasons
```

Likes remain a supporting raw fact but do **not** enter the V1 Trust interaction-rate numerator.

Do not replace summed per-media reach with unique Campaign reach in this formula; the numerator counts media-level interaction events, while unique reach counts distinct people.

## 6.3 ASSETS

Primary:

```text
ASSET_COMPLETION_RATE
= approved/completed Campaign Deliverables
  /
  planned Deliverables
```

Exact numerator state names must map to canonical Campaign/C04 Deliverable truth; the Reporting engine must not create a second deliverable lifecycle.

Supporting facts:

```text
APPROVED_DELIVERABLE_COUNT
PUBLISHED_DELIVERABLE_COUNT
DELIVERABLES_REMAINING
```

## 6.4 ACTION

Primary:

```text
authoritatively attributed Campaign action/conversion metric
```

Supporting when authoritative:

```text
ATTRIBUTED_CLICKS
ATTRIBUTED_CONVERSIONS
ATTRIBUTED_ACTIONS
```

If authoritative attribution does not exist:

```text
ACTION_PRIMARY_OUTCOME = UNAVAILABLE
```

Do not infer ACTION success from engagement, captions, links or provider presence.

---

# 7. Additional raw/supporting metric families

These may be emitted only when authoritative for the exact media type and evidence window:

```text
REACH
IMPRESSIONS
PLAYS
VIEWS
LIKES
COMMENTS
SAVES
SHARES
PUBLISHED_MEDIA_COUNT
PUBLISHED_CREATOR_COUNT
APPROVED_DELIVERABLE_COUNT
PUBLISHED_DELIVERABLE_COUNT
```

Possible future/provider-dependent families:

```text
retention
three-second views
other Reel/video depth metrics
```

They are not guaranteed V1 metrics until provider/source authority confirms availability and semantics.

Missing/suppressed/unavailable is never zero.

---

# 8. Result → Signal → Pattern → Learning

## 8.1 RESULT

```text
RESULT
= one deterministic metric/fact
  for an explicit subject + report window + Evidence set
```

A Result may exist without any Signal/Pattern/Learning.

## 8.2 SIGNAL

A comparator-based Signal requires:

```text
same signalKey
+
same comparatorClass
+
direction = ABOVE_BASELINE | BELOW_BASELINE
```

`signalKey` identifies at least:

```text
metric family
subject dimension being compared
content/format cohort when relevant
report contract version
```

`NEUTRAL` is not a recurring directional signal.

### V1 baseline

For creator/content comparisons:

```text
baseline = median of other eligible comparable Campaign items
```

within the same:

```text
Campaign
report window
metric family
content-format cohort where format changes metric meaning
```

The subject is excluded from its own baseline.

If fewer than 3 comparable items exist, no comparator Signal is emitted.

No industry, cross-Brand or prior-Campaign benchmark in V1.

### Materiality

```text
MATERIALITY_THRESHOLD = METRIC_CONTRACT_SPECIFIC
```

Every metric definition that may emit a Signal must freeze a deterministic minimum meaningful change for that metric family.

No model may invent materiality ad hoc.

If no materiality contract exists:

```text
RESULT = ALLOWED
SIGNAL = NOT_AUTHORIZED
PATTERN = NOT_AUTHORIZED
LEARNING = NOT_AUTHORIZED
```

## 8.3 PATTERN

A V1 Pattern requires:

```text
same signalKey
same comparatorClass
same direction

across >= 3 distinct canonical Deliverables
AND >= 2 distinct Creators
AND >= 70% usable evidence coverage
within the same report window
```

Multiple observations of the same Deliverable do not count as recurrence.

## 8.4 LEARNING

A V1 Learning requires either:

```text
A.
same accepted Pattern across >= 5 distinct Deliverables
AND >= 3 Creators
AND >= 80% usable evidence coverage
```

or:

```text
B.
same accepted Pattern recurs in >= 2 non-overlapping reporting cohorts/windows
using the same metric/report contract version
```

Every Learning must cite supporting Pattern/Result identities and retain limitations/coverage context.

## 8.5 Causality

Reporting language remains observational unless an explicit attribution owner proves causality.

Allowed:

> Reels in this Campaign repeatedly showed above-baseline saves.

Not allowed without causal authority:

> Reels caused higher purchase intent.

---

# 9. Reporting state contract

The Campaign consumer must be able to distinguish at least:

```text
LOADING
INSUFFICIENT_DATA
UNAVAILABLE
PROCESSING
CURRENT_COMPLETE
CURRENT_PARTIAL
STALE_CURRENT_PRESERVED
FAILED_CURRENT_PRESERVED
FAILED_NO_CURRENT
COMPLETED_CURRENT
```

Important semantics:

```text
CURRENT_PARTIAL
= valid report exists but admitted evidence/metric coverage is incomplete

STALE_CURRENT_PRESERVED
= prior valid current exists but source/context freshness has expired or newer inputs exist

FAILED_CURRENT_PRESERVED
= latest refresh/execution failed; previous valid current remains visible

FAILED_NO_CURRENT
= latest execution failed and no previously accepted current exists
```

Frontend must never collapse these into a generic zero/empty state.

---

# 10. Required Intelligence → Campaign output contract

The Campaign module does **not** require the Intelligence Engine to expose provider-specific payloads or model internals.

It requires a strict, versioned, display-safe accepted output.

Canonical handoff shape:

```ts
type CampaignReportingIntelligenceOutputV1 = {
  contract: "CAMPAIGN_REPORTING_INTELLIGENCE_V1";

  campaignId: string;
  campaignVersionRef: string;
  reportCalculationId: string;

  reportState:
    | "INSUFFICIENT_DATA"
    | "UNAVAILABLE"
    | "PROCESSING"
    | "CURRENT_COMPLETE"
    | "CURRENT_PARTIAL"
    | "STALE_CURRENT_PRESERVED"
    | "FAILED_CURRENT_PRESERVED"
    | "FAILED_NO_CURRENT"
    | "COMPLETED_CURRENT";

  objective: "AWARENESS" | "TRUST" | "ASSETS" | "ACTION";

  window: {
    type: "CAMPAIGN_TO_DATE" | "LAST_7D_CONTENT" | "LAST_30D_CONTENT";
    from: string;      // ISO UTC
    to: string;        // ISO UTC
    asOf: string;      // immutable server cutoff
    membershipBasis: "CAMPAIGN_MEDIA_PUBLISHED_AT";
  };

  finality: "LIVE_CURRENT" | "PAUSED_CURRENT" | "COMPLETED_CURRENT";
  freshness: "CURRENT" | "STALE" | "UNKNOWN";

  primaryMetric: ReportingMetricV1 | null;
  supportingMetrics: ReportingMetricV1[];

  coverage: {
    eligibleMediaCount: number;
    includedMediaCount: number;
    coveragePercent: number | null;
    excludedMediaCount: number;
    exclusionReasonCounts: Array<{
      reasonCode: string;
      count: number;
    }>;
  };

  results: ReportingResultV1[];
  signals: ReportingSignalV1[];
  patterns: ReportingPatternV1[];
  learnings: ReportingLearningV1[];

  creatorBreakdown: ReportingSubjectBreakdownV1[];
  contentBreakdown: ReportingSubjectBreakdownV1[];

  limitations: ReportingLimitationV1[];

  provenance: {
    reportDefinitionVersion: string;
    metricContractVersions: string[];
    evidenceManifestId: string;
    evidenceManifestHash: string;
    sourceObservationMaxTime: string | null;
    calculationStartedAt: string;
    calculatedAt: string | null;
  };
};
```

## 10.1 Metric object

```ts
type ReportingMetricV1 = {
  metricId:
    | "CAMPAIGN_UNIQUE_REACH"
    | "AGGREGATED_MEDIA_REACH"
    | "IMPRESSIONS"
    | "PLAYS"
    | "VIEWS"
    | "LIKES"
    | "COMMENTS"
    | "SAVES"
    | "SHARES"
    | "TRUST_INTERACTION_RATE"
    | "ASSET_COMPLETION_RATE"
    | "APPROVED_DELIVERABLE_COUNT"
    | "PUBLISHED_DELIVERABLE_COUNT"
    | "DELIVERABLES_REMAINING"
    | "PUBLISHED_MEDIA_COUNT"
    | "PUBLISHED_CREATOR_COUNT"
    | "ATTRIBUTED_CLICKS"
    | "ATTRIBUTED_CONVERSIONS"
    | "ATTRIBUTED_ACTIONS";

  availability: "AVAILABLE" | "PARTIAL" | "UNAVAILABLE";

  value: number | string | null;
  unit: "COUNT" | "PERCENT" | "RATE" | "DECIMAL" | null;

  numerator: number | null;
  denominator: number | null;

  eligibleItemCount: number;
  includedItemCount: number;
  coveragePercent: number | null;

  observedThrough: string | null;
  metricContractVersion: string;

  limitations: string[];
};
```

`value = null` when unavailable. Never send an unavailable metric as `0`.

## 10.2 Result

```ts
type ReportingResultV1 = {
  resultId: string;
  metricId: string;
  subjectType: "CAMPAIGN" | "CREATOR" | "DELIVERABLE" | "MEDIA" | "FORMAT_COHORT";
  subjectRef: string;
  value: number | string;
  unit: string;
  windowRef: string;
  evidenceRefs: string[];
  observedAt: string;
  calculationVersion: string;
};
```

## 10.3 Signal

```ts
type ReportingSignalV1 = {
  signalId: string;
  signalKey: string;
  comparatorClass: string;
  direction: "ABOVE_BASELINE" | "BELOW_BASELINE";
  subjectRef: string;
  metricId: string;
  subjectValue: number;
  baselineValue: number;
  delta: number;
  materialityContractVersion: string;
  supportingResultIds: string[];
  evidenceRefs: string[];
};
```

No `Signal` without a deterministic materiality contract.

## 10.4 Pattern

```ts
type ReportingPatternV1 = {
  patternId: string;
  signalKey: string;
  comparatorClass: string;
  direction: "ABOVE_BASELINE" | "BELOW_BASELINE";
  distinctDeliverableCount: number;
  distinctCreatorCount: number;
  coveragePercent: number;
  supportingSignalIds: string[];
  statement: string; // bounded evidence-backed user-facing interpretation
  limitations: string[];
};
```

## 10.5 Learning

```ts
type ReportingLearningV1 = {
  learningId: string;
  learningKey: string;
  statement: string;
  basis: "WITHIN_WINDOW_RECURRENCE" | "CROSS_WINDOW_RECURRENCE";
  supportingPatternIds: string[];
  supportingResultIds: string[];
  coveragePercent: number;
  causal: false; // V1 default unless separate attribution authority explicitly proves otherwise
  limitations: string[];
};
```

## 10.6 Subject breakdown

```ts
type ReportingSubjectBreakdownV1 = {
  subjectType: "CREATOR" | "DELIVERABLE" | "MEDIA";
  subjectRef: string;
  displayRef?: string;
  metrics: ReportingMetricV1[];
  resultIds: string[];
  limitations: string[];
};
```

The engine should emit breakdowns only where canonical content/creator linkage is deterministic.

## 10.7 Limitation

```ts
type ReportingLimitationV1 = {
  code: string;
  scope: "REPORT" | "METRIC" | "MEDIA" | "SOURCE";
  metricId?: string;
  messageKey: string;
  recoverability:
    | "NONE"
    | "SOURCE_REFRESH"
    | "SOURCE_REAUTHORIZATION"
    | "MORE_EVIDENCE_REQUIRED";
};
```

Campaign frontend should map stable codes to approved copy. The Intelligence Engine must not expose raw provider/model errors as UI copy.

---

# 11. What the Intelligence output must NOT contain

Do not return as Campaign Reporting authority:

```text
raw Meta/Graph payloads
access tokens
OAuth state
Page tokens
provider request IDs as durable business identity
model chain-of-thought
free-form unversioned AI conclusions
fabricated zeros
estimated unique Campaign reach from summed media reach
unattributed conversion claims
ROI/ROAS without canonical spend + attribution contracts
global creator quality/reliability/trust scores
C04 lifecycle re-interpretation
payout ledger calculations
```

---

# 12. Campaign acceptance/current semantics

The Intelligence Engine may compute the output, but Campaign must only accept it when the context remains current.

Expected acceptance fence:

```text
campaignId
campaignVersionRef
window.type/from/to/asOf
objective
reportDefinitionVersion
metricContractVersions
evidenceManifestHash
source/account/auth-generation fences where relevant
```

A stale execution must not replace accepted current.

Recommended idempotency identity:

```text
H(
  campaignId
  + campaignVersionRef
  + objective
  + reportWindow
  + report.asOf
  + evidenceManifestHash
  + reportDefinitionVersion
)
```

Exact hash implementation belongs to the Intelligence/technical owner.

History is immutable; current is a pointer/projection over accepted immutable calculations.

---

# 13. Trigger / refresh / invalidation expectations

Rendering the Campaign Page must **not itself trigger model/Intelligence work** merely because the UI is read.

Expected Campaign-owned triggers:

```text
1. eligibility first becomes true
2. explicit authorized Reporting refresh
3. new authoritative performance/publishing Evidence is admitted
4. selected report window changes and no current calculation exists
5. Campaign completion/finality change
6. a versioned metric/report definition intentionally changes
```

Invalidation/staleness may occur when:

```text
Campaign objective/context version relevant to Reporting changes
canonical media set changes
C04 publishing/completion truth changes
Evidence manifest changes
source authorization/account generation invalidates admitted source truth
metric/report contract version changes
```

Existing Report history is never rewritten.

---

# 14. Frontend decision register

## 14.1 Location

```text
Campaign Header
↓
Campaign Attention Layer
   ├── Performance / Reporting
   ├── Budget
   └── Actionables
↓
3 operational workspaces
```

Reporting is not a workspace/tab.

## 14.2 Attention-Layer summary

When current Reporting exists, primary hierarchy:

```text
1. Campaign objective
2. Primary KPI / outcome
3. 2–4 supporting metrics maximum
4. active report window
5. coverage/freshness/limitation indicator when material
6. up to 1–3 evidence-backed insights/learnings
7. View Full Report
```

When Reporting is not available:

```text
truthful unavailable / insufficient-data state
no zero metrics
no placeholder chart pretending to be data
```

## 14.3 Full Reporting experience

Product requires a deeper Reporting detail experience, but the exact **route vs drawer vs dedicated detail surface** has not been finally frozen in the recovered authority.

Therefore:

```text
FULL_REPORT_SURFACE_COMPOSITION = CAMPAIGN_PAGE_UX_DECISION STILL TO FINALIZE
```

This must **not block the Intelligence output contract** above.

Expected content hierarchy when designed:

```text
Objective performance
Supporting metrics
Coverage / Data status
Results / Signals / Patterns / Learnings
Creator/content breakdown where deterministic
Limitations / freshness
```

Charts are not mandatory. A chart may exist only when the backend provides a truthful chart-ready series with explicit semantics; frontend must not reconstruct series from unrelated snapshots.

## 14.4 State UX

Frontend must support:

```text
LOADING
INSUFFICIENT_DATA
UNAVAILABLE
PROCESSING
CURRENT_COMPLETE
CURRENT_PARTIAL
STALE_CURRENT_PRESERVED
FAILED_CURRENT_PRESERVED
FAILED_NO_CURRENT
COMPLETED_CURRENT
```

A section/provider failure must not break the Campaign Header or operational workspaces.

## 14.5 Mobile

The same Reporting semantics survive mobile.

Expected:

- compact Attention summary;
- no squeezed desktop analytics table;
- Full Report detail recomposes into mobile page/sheet according to the Campaign shell pattern selected later;
- limitations/data-status remain visible rather than hidden for space.

## 14.6 Frontend prohibitions

Frontend must not:

```text
sum reach
calculate rates
select primary KPI
create Pattern/Learning
convert unavailable to zero
infer attribution
pick a provider fallback
recalculate current from raw Evidence
```

---

# 15. Role / authorization boundary

The Intelligence Engine output itself should be **role-neutral Campaign truth**.

Campaign/Brand authorization decides which actor can read Reporting and which commercial-sensitive fields are projected.

Do not encode a new role model inside the Intelligence result.

The current cross-module codebase should be re-audited before freezing exact Brand Owner / Campaign Manager / Finance Admin visibility/actions.

This is a Campaign/Settings authorization contract, not an Intelligence semantic requirement.

---

# 16. External validations still required

The Product/output contract is sufficiently defined to give the Intelligence Engine SA, but production implementation must not assume these facts.

## REPORTING-PV-01 — creator-published media insights

```text
Can authoritative insights be retrieved for creator-published
Campaign Collaboration media under the accepted Meta/provider path?
```

Owner:

```text
Settings — Brand / Meta specialist / provider integration owner
```

Campaign Page SA does not own the answer.

## REPORTING-PV-02 — metric availability

Validate exact metrics by:

```text
media type
media ownership / collaboration configuration
publication age
provider permission/path
observation window
```

This decides which Product metric IDs can be `AVAILABLE`; it does not change missing-data semantics.

## REPORTING-PV-03 — C04 ↔ provider media identity

Validate deterministic linkage:

```text
C04 publishing evidence
→ stable provider media identity
→ provider account / authorization-generation fence
→ performance Evidence
```

No fuzzy/caption/handle matching is authorized as canonical linkage.

## Shared Intelligence validation

Confirm current accepted support for:

```text
versioned processor/definition registration
immutable input/evidence manifests
execution identity + attempts/replay
generation/component/current + CAS
failed-current preservation
coverage/freshness metadata
tenant/owner isolation
```

Campaign must not build private substitutes where shared capability exists.

---

# 17. Source-owner expectations for the Reporting engine

The Reporting engine should receive canonical references/projections rather than scrape or re-own source domains.

Conceptually:

```text
Campaign context input
- campaignId
- Campaign version
- objective
- liveAt/lifecycle
- planned Deliverables / Campaign structure

C04 execution input
- Collaboration IDs
- canonical Deliverable IDs
- canonical publishing state/evidence
- media/provider identity linkage if C04 owns it
- completion truth

Performance Evidence input
- media stable identity
- metric observations
- capturedAt / observedAt
- availability/suppression state
- source/account/authorization-generation fences

Optional tracking/attribution input
- only from an authoritative tracking owner

Optional commercial input
- only when a later Reporting metric explicitly requires it
```

No dependency on Media Kit.

No dependency on Creator payout UI.

Creator Intelligence is not a mandatory Reporting source for Campaign performance calculations; creator/content breakdown may consume already-authoritative identity/content labels only where needed for presentation/grouping.

---

# 18. Acceptance fixtures the Intelligence Engine SA should plan for

At minimum:

```text
RPT-01 no published Deliverable
→ INSUFFICIENT_DATA

RPT-02 published Deliverable, no usable performance Evidence
→ INSUFFICIENT_DATA / UNAVAILABLE

RPT-03 one media item with authoritative metrics
→ Results allowed; Pattern/Learning prohibited

RPT-04 partial metric coverage
→ CURRENT_PARTIAL; missing != zero

RPT-05 AWARENESS no unique reach but per-media reach exists
→ AGGREGATED_MEDIA_REACH available;
   CAMPAIGN_UNIQUE_REACH unavailable

RPT-06 TRUST one item missing saves
→ item excluded from numerator and denominator;
   coverage limitation emitted

RPT-07 observed zero comments/saves/shares
→ zero accepted as real observation

RPT-08 Pattern threshold not met
→ Results/Signals may exist, no Pattern

RPT-09 Pattern threshold met
→ Pattern with supporting IDs/evidence

RPT-10 Learning threshold met
→ Learning with supporting Pattern/Result IDs

RPT-11 refresh failure after valid current
→ FAILED_CURRENT_PRESERVED

RPT-12 stale current after newer evidence/context
→ STALE_CURRENT_PRESERVED

RPT-13 completed Campaign receives late authoritative evidence
→ new immutable superseding calculation

RPT-14 cross-Brand / foreign Campaign Evidence
→ rejected/fail closed

RPT-15 provider source missing/suppressed metric
→ unavailable/partial, never zero

RPT-16 ACTION objective without attribution
→ primary ACTION outcome unavailable
```

---

# 19. What Campaign expects the Intelligence Engine SA to build

The Campaign module does **not** ask the Intelligence Engine SA to redesign Campaign Page.

It asks for a capability that can produce the versioned `CampaignReportingIntelligenceOutputV1` contract above with these guarantees:

```text
1. deterministic metrics first
2. objective-aware Product mapping
3. exact Campaign/C04 media lineage
4. Evidence-backed metric observations
5. missing != zero
6. explicit coverage/freshness/finality
7. Result / Signal / Pattern / Learning thresholds exactly enforced
8. metric-specific materiality contracts before Signals
9. immutable calculation history
10. current/CAS + stale-write protection
11. failed-current preservation
12. Evidence/provenance/auditability
13. no causal statement without attribution authority
14. strict tenant/Campaign/source fencing
15. provider-neutral consumer output
```

The Intelligence Engine SA may choose the internal processor/Object decomposition only if it remains compatible with shared Intelligence architecture and does not create a second DE/Evidence/current/runtime.

---

# 20. Exact handoff request to Intelligence Engine SA

```text
CAMPAIGN_REPORTING_TO_INTELLIGENCE_ENGINE_SA_HANDOFF_V1

You are receiving the frozen-intent Campaign Reporting consumer contract.

Your assignment is NOT to redesign Campaign Reporting Product behavior.

Treat as Campaign consumer authority:
CAMPAIGN_REPORTING_PRODUCT_AND_CONSUMER_CONTRACT_V1

Build/plan the Intelligence capability that can produce:
CampaignReportingIntelligenceOutputV1

Preserve:
- AWARENESS / TRUST / ASSETS / ACTION
- exact metric semantics and missing-data rules
- UTC/window/media-membership rules
- Campaign unique reach vs aggregated media reach distinction
- Trust same-media-set aggregation
- Result → Signal → Pattern → Learning thresholds
- metric-specific materiality gating
- Evidence coverage/freshness/provenance
- immutable history/current/CAS
- failed-current preservation

Do not:
- build Campaign Page frontend UX;
- create a Reporting workspace;
- own Settings/Meta OAuth or tokens;
- recreate C04 Collaboration/Publishing truth;
- use legacy BrandUceReportingService as authority;
- calculate missing metrics as zero;
- infer Campaign media linkage;
- introduce a parallel DE/Evidence/current scheduler;
- make causal claims without attribution authority.

Before production implementation close:
REPORTING-PV-01
REPORTING-PV-02
REPORTING-PV-03

Return first:
1. current shared Intelligence reuse map;
2. exact source/input adapters required;
3. exact internal Reporting definition/processor decomposition;
4. exact output-schema mapping to CampaignReportingIntelligenceOutputV1;
5. missing provider/C04 dependencies;
6. idempotency/current/history/staleness design;
7. finite implementation plan and acceptance fixtures.

Do not mutate provider configuration.
Do not begin Campaign frontend implementation.
```

---

# 21. Items deliberately not frozen in this Reporting register

These do not block handing the output contract to the Intelligence Engine SA, but must not be silently invented:

```text
1. exact Full Report UI surface = route vs drawer vs page/sheet
2. exact current Brand role × Reporting action matrix after latest Settings integration
3. exact provider path that yields creator-published Collaboration media insights
4. exact provider metric availability by media type/configuration
5. exact C04 field used to link publishing evidence to stable provider media ID
6. post-ARCHIVED system late-evidence retention/recalculation policy
7. metric-specific materiality thresholds for every metric family beyond the recurrence framework
8. attribution-owner contract for ACTION conversion metrics
```

Where unknown, the system must produce truthful unavailable/limited states rather than substitute assumptions.

---

# 22. Source bibliography / supersession notes

Primary recovered authority used to build this register:

- `CAMPAIGN_PAGE_REPORTING_AI_MATCH_MARKETPLACE_RECOMMENDATION_PRODUCT_DECISION_RECOVERY_V1.md`
- `CAMPAIGN_PAGE_THREE_INTELLIGENCE_BOUNDED_PRODUCT_CLARIFICATIONS_V1.md`
- `CAMPAIGN_INTELLIGENCE_INTEGRATION_SA_ORIENTATION_DEPENDENCY_AND_READINESS_AUDIT_V1.md`
- `TCS_NEW_SYSTEMS_ARCHITECT_FULL_CONTEXT_READ_AND_REPOSITORY_MAP_V1.md`
- Campaign Page Phase-G authority/reconciliation artifacts
- Campaign Page final developer handoff / reconciliation evidence
- accepted C04 Collaboration authority/handoffs
- accepted Shared DE/Evidence/Intelligence donor architecture
- accepted Settings — Brand / Instagram ownership decisions

Superseded / non-authoritative for Reporting semantics:

- Reporting as a fourth Campaign workspace;
- `PULSE / PROOF / PRODUCTION / PUSH` objective vocabulary;
- legacy UCE reporting that converts missing truth into zeros;
- provisional Reporting Stitch metric values/charts;
- raw provider order/payload as Campaign semantic truth;
- old UI mocks as metric-contract authority.

---

# 23. Freeze request

```text
PARENT_REVIEW_REQUEST =
ACCEPT THIS REPORTING REGISTER AS THE CAMPAIGN PRODUCT/CONSUMER CONTRACT

AFTER ACCEPTANCE =
HAND TO INTELLIGENCE ENGINE SA FOR TECHNICAL REUSE/PREFLIGHT + BUILD PLANNING

CAMPAIGN FRONTEND IMPLEMENTATION =
SEPARATE LATER STEP AFTER INTELLIGENCE OUTPUT CONTRACT EXISTS
```
