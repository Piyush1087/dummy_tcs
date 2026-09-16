# CAMPAIGN APPLICANT AI MATCH — TECHNICAL PREFLIGHT + FINITE IMPLEMENTATION PLAN V1

`CAMPAIGN_APPLICANT_AI_MATCH_TECHNICAL_PREFLIGHT_AND_FINITE_IMPLEMENTATION_PLAN_V1`

## 0. Result

```text
RESULT = READY_FOR_P0_EXECUTION

BASE_PRODUCT_CONTRACT = PARENT_ACCEPTED_FOR_P0
PRODUCT_CLARIFICATION_V1 = PARENT_ACCEPTED_FOR_P0

ADDITIONAL_CAMPAIGN_SA_QUESTIONS = NONE
TECHNICAL_SA_IMPLEMENTATION_CAPABILITY = RELIABLE

IMPLEMENTATION = NOT_STARTED
```

Use the same optimized discipline as Campaign Reporting:

```text
RUN A = P0 read-only authority/current-state/donor/scoring preflight
TECHNICAL-SA P0 REVIEW
RUN B = autonomous P1→P4 implementation
```

No additional Parent relay is required after P0 unless a Product/authority conflict appears.

## 1. Product authority

P0 authority consists of:

1. `CAMPAIGN_APPLICANT_AI_MATCH_PRODUCT_AND_CONSUMER_CONTRACT_V1`;
2. `CAMPAIGN_APPLICANT_AI_MATCH_PRODUCT_CLARIFICATION_V1`;
3. this Technical Plan V1.

Precedence:

```text
Clarification V1
→ replaces source-lifecycle-specific Match behavior with donor-availability neutrality
→ removes Commercial/Work Fit from V1
→ removes Work Preferences and Rate Card donors
→ removes all re-evaluation/refresh flows
→ adds dependency-waiting initial evaluation
```

## 2. Frozen V1 outcome

Applicant AI Match is Brand-side, post-Application decision support anchored to one immutable C03 `ApplicationSnapshot`.

It produces at most one accepted evaluation per immutable ApplicationSnapshot:

```text
PROCESSING
READY with integer score 0..100
UNAVAILABLE with score null
```

It never gates C03 Approve/Reject and never copies Marketplace Recommendation score/rank.

Scored dimensions:

```text
AUDIENCE_FIT
CONTENT_AND_DELIVERABLE_FIT
BRAND_AND_OFFERING_FIT
PERFORMANCE_FIT
```

`COMMERCIAL_AND_WORK_FIT` is globally `NOT_APPLICABLE` in V1 and removed from the applicable top-level denominator.

## 3. Architecture placement

Reuse:

```text
C03 Application/ApplicationSnapshot identity and lifecycle
shared Intelligence execution/attempt/lease/retry
dependency/Evidence manifests
immutable generation/history/current/CAS
failure/stale-write protection
accepted Creator/Brand/Offering donor currents and Evidence
Campaign Applicants server capability authority
```

Add only:

```text
Applicant/ApplicationSnapshot subject adaptation if shared runtime requires it
Applicant Match definition/contracts
donor adapters
dependency-readiness coordinator using shared primitives
four-dimension scoring registry
structured semantic evaluator port
Campaign Applicants consumer projection
```

Prohibit:

```text
parallel DE/Evidence/current/scheduler/runtime
mutable score column bypassing generation/current
raw provider/model output in Campaign API
frontend score calculation
Application/C04 mutation
Marketplace current reuse
```

## 4. P0 technical questions

P0 must answer from exact repository truth:

1. What are the canonical accepted backend/frontend/authority convergence bases?
2. What exact C03 entity and hash/version fields form the immutable ApplicationSnapshot fence?
3. What exact C03 events/capabilities exist for Application creation, terminalization and Applicant read/decision authority?
4. Can the shared Intelligence subject model represent Application/ApplicationSnapshot safely, or what bounded additive adaptation is needed?
5. Which donor programs are technically accepted and what strict current/Evidence contracts do they expose?
6. How are donor `PROCESSING`, current, stale, unavailable and terminal states read without owning their lifecycle?
7. Which donor combinations can satisfy >=60% coverage plus Audience-or-Content readiness?
8. What existing dependency-request/worker/lease primitives can wait for donor readiness without a second scheduler?
9. What bounded wait horizon/retry policy fits current worker semantics?
10. Which subcriteria are deterministic, structured-model-owned or unavailable in V1?
11. What exact scoring formula/rubric/version applies to every included subcriterion?
12. What schema/migration delta is actually necessary?
13. What Applicants card/detail routes and DTOs are canonical today?
14. Which existing role/capability projections govern read and Approve/Reject without Match reinterpretation?

## 5. Candidate scoring-registry requirements

P0 must publish a complete candidate:

```text
ApplicantAIMatchScoringRegistryV1
ApplicantAIMatchSemanticRubricV1
ApplicantAIMatchPerformanceNormalizationV1
```

Every included subcriterion requires:

```text
stable ID
dimension
frozen weight
input owners/contracts
admission rule
AVAILABLE/UNAVAILABLE/CONFLICT/NOT_APPLICABLE rule
exact deterministic formula or structured rubric
0..100 anchors
minimum evidence/sample
coverage contribution
Evidence-reference requirement
limitation/reason codes
contract version
permutation/canonicalization rule
```

No implementation may leave a score to free-form model judgement.

### 5.1 Deterministic candidates

P0 should prefer deterministic/versioned evaluators for:

```text
geography overlap
age overlap
gender overlap where Product/legal/provider-authorized
required-format evidence
performance sample/recency
format-matched performance aggregates
performance consistency
coverage/confidence/weight arithmetic
```

### 5.2 Structured semantic candidates

Potential structured-model evaluators:

```text
audience affinities alignment
Brief/content semantic alignment
creative/production consistency
category/niche relevance
positioning/archetype alignment
tone/visual/content-expression fit
```

Each must use a frozen bounded candidate/output schema, admitted excerpts/observations only, prompt-injection controls, strict output validation, provider-neutral model DI and fail-closed production behavior when no adapter is configured.

### 5.3 Performance meaning

P0 must propose a reproducible creator-relative, format-matched normalization. No global/industry percentile or cross-Creator ranking is authorized without an accepted benchmark owner.

The preferred Product meaning is:

```text
performance in Campaign-required formats
relative to the Creator's compatible recent-content baseline
```

P0 must reject a normalization that rewards follower count alone or lets one viral post independently produce high consistency.

## 6. Coverage arithmetic

P0 must prove exact arithmetic using rational/decimal basis points, not floating-point-dependent behavior.

Required interpretation:

```text
subcriterion AVAILABLE
→ contributes score and admitted subweight

UNAVAILABLE / CONFLICT
→ excluded from numeric score
→ reduces evidence coverage

NOT_APPLICABLE
→ removed from score and coverage denominator
```

Dimension score:

```text
sum(score × admitted subweight)
/
sum(admitted subweight)
```

Dimension numeric readiness:

```text
available applicable subweight >= 50%
```

Overall coverage:

```text
sum(objective weight × dimension evidence coverage)
/
sum(applicable objective weights)
```

Overall score:

```text
sum(available dimension score × applicable objective weight)
/
sum(available dimension objective weight)
```

Numeric Match additionally requires:

```text
overall weighted coverage >= 60%
+ Audience or Content dimension numeric
```

V1 globally removes Commercial/Work from applicable objective-weight denominator.

Candidate rounding for P0 review:

```text
exact decimal/basis-point arithmetic
round half up once at dimension output
round half up once at final overall integer output
```

Confidence:

```text
60–69 LOW
70–84 MEDIUM
85–100 HIGH
```

## 7. Initial dependency-readiness lifecycle

Use one request anchored to:

```text
applicationId
ApplicationSnapshot id/version/hash
Campaign/objective
definition/rubric/weight versions
```

Before immutable manifest freeze:

```text
inspect accepted donor states
wait through shared primitives while high-value donors are PROCESSING
do not publish generations
do not finalize UNAVAILABLE prematurely
```

At first sufficient coherent donor set:

```text
freeze donor manifest/asOf/hash
execute once
publish READY or truthful UNAVAILABLE
```

At terminal insufficiency or wait-horizon expiry:

```text
freeze terminal manifest
publish UNAVAILABLE
```

If Application terminalizes first:

```text
stop
publish no new current
record bounded disposition
```

No donor-change, manual or automatic re-evaluation follows accepted current.

## 8. Consumer architecture

Use a strict envelope separating current from latest attempt/dependency state:

```ts
type ApplicantAIMatchConsumerV1 = {
  contract: "APPLICANT_AI_MATCH_CONSUMER_V1";
  application: {
    applicationId: string;
    status: "PENDING" | "APPROVED" | "REJECTED" | "EXPIRED";
    snapshotId: string;
    snapshotVersion: string;
  };
  state: "PROCESSING" | "READY" | "UNAVAILABLE";
  current: ApplicantAIMatchCurrentV1 | null;
  latestAttempt: {
    executionId: string;
    phase: "WAITING_FOR_DEPENDENCIES" | "CALCULATING" | "SUCCEEDED" | "FAILED" | "STOPPED_TERMINAL_APPLICATION";
    startedAt: string;
    completedAt: string | null;
    failureCode: string | null;
  } | null;
  limitations: ApplicantMatchLimitationV1[];
};
```

`READY` current includes score/confidence/coverage, four dimensions, bounded reasons and provenance. `UNAVAILABLE` current has score/confidence null and exact material limitations.

The UI consumes C03's existing decision actions. Match state never authorizes or disables Approve/Reject.

## 9. Finite execution plan

### Run A — P0 preflight

Read-only backend/frontend audit plus authority publication:

```text
exact bases and convergence DAG
C03 ApplicationSnapshot adapter
donor acceptance/reuse matrix
shared-runtime placement
dependency-readiness design and wait-horizon candidate
complete scoring registries/rubrics
coverage/rounding proofs
strict request/output/consumer contracts
schema/migration plan
P1→P4 validated packet plan
```

No backend/frontend mutation or migration.

P0 circuit breakers:

```text
no immutable ApplicationSnapshot fence
no safe Application/Creator/Campaign tenant identity
shared runtime cannot host Match without parallel architecture
no viable Audience or Content donor path even as fail-closed adapter
Product conflict in score meaning
accepted authorities cannot be converged normally
```

Donors temporarily processing, optional donor absence, missing live credentials and fail-closed model adapter are not circuit breakers.

### P1 — foundation + deterministic vertical slice

Implement:

```text
ApplicationSnapshot subject/fence
initial request/dependency readiness
manifest freeze
coverage/weight/rounding engine
deterministic Audience/format/performance evaluators proven by P0
immutable generation/history/current/CAS
strict backend consumer
```

Prove one real PostgreSQL-backed `READY`, one donor-waiting `PROCESSING`, one terminal `UNAVAILABLE`, replay/idempotency, terminal-Application stop and tenant isolation.

### P2 — semantic evaluators + complete Match Object

Implement only P0-accepted structured semantic rubrics through provider-neutral DI. Production remains fail-closed when adapter is not configured; deterministic paths remain operational.

Complete four-dimension result, explanations, unknowns, confidence, provenance and rejection of sensitive/proxy/model-injected fields.

No live model call is required for acceptance; fixture adapter proof is sufficient.

### P3 — C03 Applicants integration + frontend

Backend:

```text
initial request after successful ApplicationSnapshot creation
zero GET-triggered execution
terminalization stop/fence
Applicants card/detail projections
strict Brand/Application authorization
no refresh/re-evaluation endpoint
```

Frontend:

```text
Campaign Page → Applicants only
card score/state/reason
detail Decision Brief
four-dimension breakdown
Strengths / Areas to consider / Unknowns
PROCESSING / READY / UNAVAILABLE / runtime-failure states
C03 decision actions remain independent
Creator visibility = none
```

### P4 — integrated acceptance and closeout

Required:

```text
clean PostgreSQL migration route and populated upgrade
production builds/boot/health
real ApplicationSnapshot→donors→manifest→generation/current→API→UI lineage
MATCH-01 through MATCH-22 plus clarification fixtures
roles/tenant/Application isolation
no re-evaluation/refresh surface
donor-processing edge case
terminal-Application race
frontend responsive/browser/Axe matrix
C03/C04/Campaign/shared Intelligence/donor regressions
secret/raw-provider/model-prompt artifact scans
normal publication/fetch-back
ledger/evidence/developer/Product-learning handoff
no development merge/deployment
```

## 10. Additional clarification fixtures

```text
MATCH-23
Creator donors PROCESSING when ApplicationSnapshot succeeds
→ Match PROCESSING, not failed/UNAVAILABLE/0

MATCH-24
one donor finishes; coverage still insufficient; another material donor PROCESSING
→ remain PROCESSING

MATCH-25
first coherent donor set reaches readiness within wait horizon
→ freeze manifest once and evaluate READY

MATCH-26
donors terminal/unavailable or wait horizon expires below readiness
→ one accepted UNAVAILABLE result

MATCH-27
Application terminalizes while waiting/calculating
→ no new current; bounded stopped disposition

MATCH-28
donor current changes after accepted READY/UNAVAILABLE
→ no new execution/current in V1

MATCH-29
Work Preferences and Rate Card exist
→ not loaded, scored or referenced

MATCH-30
Commercial mismatch-like facts supplied
→ cannot affect Match score

MATCH-31
Commercial/Work original weight
→ removed from applicable denominator; four dimensions normalize deterministically

MATCH-32
donor unavailable
→ availability state only; lifecycle cause is not a Match input
```

## 11. Acceptance outcome

After P0 Technical-SA acceptance, issue one autonomous P1→P4 Local Codex prompt. Return to Parent only for a defined circuit breaker or after final P4 evidence.

Final artifact:

```text
CAMPAIGN_APPLICANT_AI_MATCH_V1_FINAL_ACCEPTANCE_AND_PRODUCT_LEARNING_HANDOFF_V1
```
