# CAMPAIGN APPLICANT AI MATCH — PRODUCT DECISION REGISTER + CAMPAIGN CONSUMER OUTPUT CONTRACT V1

`CAMPAIGN_APPLICANT_AI_MATCH_PRODUCT_AND_CONSUMER_CONTRACT_V1`

## Status

```text
PRODUCT_SCOPE = APPLICANT AI MATCH ONLY
PRODUCT_DECISION_REGISTER = RECOVERED + BOUNDED CLARIFICATIONS INCORPORATED
PARENT_FREEZE = REQUIRED BEFORE IMPLEMENTATION
IMPLEMENTATION = NOT AUTHORIZED BY THIS DOCUMENT
INTELLIGENCE_ENGINE_BUILD = MAY USE THIS AS CAMPAIGN CONSUMER REQUIREMENT AFTER PARENT ACCEPTANCE
FRONTEND_CALCULATION = PROHIBITED
APPLICATION_DECISION_AUTHORITY = BRAND / C03 DOMAIN, NOT AI MATCH
DISCOVERY_RECOMMENDATION = SEPARATE DEFINITION
```

This document isolates **Applicant AI Match** from the other two deferred Campaign intelligence layers:

```text
Marketplace Recommendation
= PRE-APPLICATION sourcing/recommendation

Applicant AI Match
= POST-APPLICATION evaluation of a specific immutable ApplicationSnapshot

Campaign Reporting
= POST-EXECUTION Campaign performance calculation/interpretation
```

The purpose is to tell the Intelligence Engine / Campaign Intelligence SA exactly **what the Campaign Applicants module expects to receive**, while preserving C03 Application ownership, Creator Centre source ownership, shared Intelligence runtime ownership, Settings source lifecycle ownership and C04 Collaboration independence.

---

# 1. Core Product definition

Applicant AI Match answers:

> **How well does this specific Creator's submitted Application fit the Campaign/Brand opportunity, based on the immutable application-time context and the admissible evidence currently available?**

It is **decision support** for the Brand.

It is not:

- creator sourcing;
- Meta Creator Marketplace ordering;
- Discovery Match Potential;
- a permanent/global Creator quality score;
- Application eligibility authority;
- an automatic approval/rejection decision;
- Collaboration execution;
- a Creator-facing performance grade;
- a substitute for the Brand's judgement.

Canonical lifecycle boundary:

```text
Discovery / Marketplace Recommendation
        ↓
Creator applies
        ↓
C03 Application created
        ↓
immutable ApplicationSnapshot created
        ↓
Applicant AI Match evaluation
        ↓
Brand reviews Applicant
        ↓
Approve / Reject
        ↓
if approved → C04 Collaboration independently owns execution
```

---

# 2. Authority and recent-system corrections

## 2.1 C03 owns Application truth

C03 remains authoritative for:

```text
Application identity
Application lifecycle
ApplicationSnapshot identity/version
Application → Campaign / Creator / Asset / Brief association
Approve / Reject capability
approval handoff to C04
```

Applicant AI Match must never create a second Application state machine.

Known accepted C03 authority references from the latest Campaign Intelligence audit:

```text
authority = origin/c03/recovery-authority
SHA = df32e63e4ca44de57b40be59167c300ecb886ddd

accepted backend = origin/c03/recovery-campaign-participation-v1
SHA = aebeb85fd6bba37f88c3805c213c61e7f63b2f5f

accepted frontend = origin/c03/campaign-participation-v1
SHA = 82ed3c9ef849be8353565a1901b6f5fb065c37e1
```

These are authority references for preflight, not permission to implement without a fresh fetch/prune and cross-module convergence check.

## 2.2 Application lifecycle vocabulary

For this Product register, do not invent new Applicant lifecycle states.

The established Application decision path is:

```text
PENDING
→ APPROVED
→ REJECTED
→ EXPIRED when Campaign/domain closure rules make a pending Application expire
```

Applicant AI Match state is separate from Application state.

Examples:

```text
Application = PENDING
AI Match = PROCESSING

Application = PENDING
AI Match = UNAVAILABLE

Application = PENDING
AI Match = READY
```

All can be valid.

## 2.3 C04 owns post-approval execution

Applicant approval may hand off/provision a Collaboration, but Applicant AI Match stops at the Application decision boundary.

It does not own:

- Negotiation;
- Securement;
- Fulfillment;
- Production;
- Publishing;
- settlement;
- Collaboration lifecycle.

Prior verified C04 work may be admitted as evidence **only where privacy/ownership rules explicitly allow it**.

## 2.4 Creator Centre / Creator-side source ownership

Recent Creator-side work is a major source donor but not Campaign-owned truth.

Potential donor families include:

```text
Creator Audience
Creator Content
Creator Brand
Work Preferences / Commercial Setup
Rate Card
Portfolio / verified work where technically accepted
Instagram source-native performance/content evidence
```

The Match engine consumes accepted current/intelligence/evidence references; it does not recreate those engines.

Recent accepted/published donor checkpoints include:

```text
Creator Content V0 authority
= cb9ee23118eafb2dc156c25eb09702ea93252db4

Creator Brand V0 authority
= 08c72433b32ed8a199d29ae8875d668dc2f0eddf

Creator Commercial / Work Preferences / Rate Card authority
= 897026bb39e7390397b9fea48a696ee488c31a4c

Creator Audience V1 published evidence/authority checkpoint later observed as
backend = 6f000bd9364f48d338ae88cec78dcfed0f4fd522
frontend = 36d75f4eceded7e9e35aaa280b544164d086ca05
authority = a403a9eae752a4201b263f3e1fb518e0a115e329
```

Latest available Audience V1 evidence reports all P0–P4 gates/evidence ready, while its own immutable return still reserved final technical acceptance to the Technical SA/Program Orchestrator. A later Portfolio V3 execution prompt treats that checkpoint as an accepted predecessor. Therefore the future Match implementation preflight must **fresh-verify final Audience V1 authority status rather than relying on either earlier P2-only state or chat memory**.

Portfolio V3 is an optional enhancer, not a hard Applicant Match Product dependency unless Parent later changes this register. Its exact latest technical acceptance must likewise be revalidated before use.

## 2.5 Settings — Creator owns source lifecycle

Settings — Creator exclusively owns future user-facing source/data lifecycle actions including:

```text
DELETE MY INSTAGRAM DATA
DELETE MY DATA
```

Applicant AI Match must not implement deletion, reconnect, source-account change or provider authorization.

The frozen Creator-side Product outcome for `DELETE MY INSTAGRAM DATA` preserves accepted derived Creator Centre Intelligence while deleting Instagram base/source data. Therefore Match may consume preserved derived Creator Intelligence **only if the owning donor contract still marks that current/result as admissible for the evaluation**.

The Match engine must not silently re-fetch deleted source data or treat missing source evidence as zero.

Exact Campaign Match-history retention after broader `DELETE MY DATA` is a cross-domain retention/privacy contract and is **not frozen by this register**.

## 2.6 Settings — Brand / Brand Intelligence

Brand Settings owns Brand-side provider connections; Brand Intelligence and Offering/Product Intelligence own their canonical semantic outputs.

Applicant AI Match may consume admitted Brand/Offering current/version references but must not:

- own Brand Instagram OAuth;
- read provider tokens;
- mutate Brand Intelligence;
- turn raw provider payload into Brand truth.

---

# 3. Product trigger and evaluation anchor

## 3.1 Initial trigger

The initial Applicant Match request occurs after:

```text
Application created
+
immutable ApplicationSnapshot successfully created
```

The Match engine must not score an unsubmitted Prospect/Discovery candidate as an Applicant.

## 3.2 Immutable evaluation context

The canonical application context is:

```text
ApplicationSnapshot
```

Later mutable Campaign edits do **not** retroactively rewrite the submitted Application context.

Conceptually:

```text
Application submitted at T1
→ ApplicationSnapshot S1

Campaign edited at T2
→ current Campaign becomes V2

Applicant Match for that Application
→ remains anchored to S1 for Campaign/Application submission context
```

The evaluation may consume newer admissible Creator/Brand/Offering evidence only under the explicit pending re-evaluation policy below; the ApplicationSnapshot itself remains unchanged.

## 3.3 Initial evaluation may be unavailable

If sufficient admitted evidence does not exist:

```text
AI Match = UNAVAILABLE
```

not:

```text
AI Match = 0
```

and not:

```text
Application = invalid
```

---

# 4. AI Match states

Product-level Applicant Intelligence state remains:

```text
PROCESSING
READY
UNAVAILABLE
```

Execution/current health is separate metadata and must not invent more Application states.

Recommended Campaign projection health:

```text
CURRENT
STALE_CURRENT_PRESERVED
FAILED_CURRENT_PRESERVED
NONE
```

Meaning:

```text
PROCESSING
= an evaluation has been requested and no accepted current result is yet available,
  or an explicit pending re-evaluation is executing while the UI separately retains
  the old current if one exists

READY
= accepted score/explanation exists

UNAVAILABLE
= no numeric score may be emitted under the frozen evidence-sufficiency rules

STALE_CURRENT_PRESERVED
= accepted prior Match remains available but source/input freshness has materially changed

FAILED_CURRENT_PRESERVED
= new explicit evaluation failed; prior accepted Match remains available with failure disclosure
```

The core user-facing state must remain understandable and bounded.

---

# 5. Nonblocking decision authority

Frozen Product rule:

```text
AI MATCH AVAILABILITY
!=
APPLICATION DECISION CAPABILITY
```

If C03 says Approve/Reject is currently authorized, then:

```text
PROCESSING
UNAVAILABLE
FAILED_CURRENT_PRESERVED
```

must not by themselves disable Approve/Reject.

The frontend must consume C03/server capability authority.

Forbidden:

```text
if aiMatch.state != READY
→ disable Approve
```

The Brand remains final decision authority.

---

# 6. Score scale, confidence and evidence sufficiency

## 6.1 Numeric score

```text
AI_MATCH_SCORE = integer 0..100
```

The numeric score is visible only when Match is `READY`.

Exact rounding implementation must be deterministic/versioned. Campaign requires an integer; the Intelligence definition contract must pin the rounding algorithm before implementation.

## 6.2 Evidence coverage

Missing optional evidence is never scored as zero.

Every frozen scoring dimension/subcriterion has an evidence/admission state:

```text
AVAILABLE
UNAVAILABLE
CONFLICT
NOT_APPLICABLE
```

Definitions:

```text
AVAILABLE
= admissible evidence exists and the subcriterion may receive a numeric subscore

UNAVAILABLE
= expected/possible evidence is absent, suppressed, stale beyond the admitted contract,
  source-deleted without admissible preserved current, or otherwise unusable

CONFLICT
= material evidence conflict exists and no accepted source-precedence rule resolves it

NOT_APPLICABLE
= Campaign did not author/require that criterion; it is removed from the denominator
```

`UNAVAILABLE` and `CONFLICT` reduce coverage; they do not become zero fit.

## 6.3 Dimension availability

A dimension may produce a numeric dimension score only when:

```text
supported frozen subweight >= 50%
```

of that dimension's applicable subweight.

## 6.4 Overall numeric readiness

Overall Match may be `READY` with a numeric score only when:

```text
overall weighted evidence coverage >= 60%
AND
at least one of:
  AUDIENCE_FIT is numerically available
  OR
  CONTENT_AND_DELIVERABLE_FIT is numerically available
```

Otherwise:

```text
state = UNAVAILABLE
score = null
```

## 6.5 Confidence

```text
HIGH = >= 85% weighted evidence coverage
MEDIUM = 70%..84%
LOW = 60%..69%
< 60% = no numeric score / UNAVAILABLE
```

Confidence is evidence sufficiency, **not another fit dimension**.

---

# 7. Top-level dimensions and objective-specific weights

The five Product dimensions are frozen-intent:

```text
1. AUDIENCE_FIT
2. CONTENT_AND_DELIVERABLE_FIT
3. BRAND_AND_OFFERING_FIT
4. PERFORMANCE_FIT
5. COMMERCIAL_AND_WORK_FIT
```

Objective-specific top-level weights:

| Objective | Audience | Content & Deliverable | Brand & Offering | Performance | Commercial & Work |
|---|---:|---:|---:|---:|---:|
| `AWARENESS` | 35 | 20 | 15 | 20 | 10 |
| `TRUST` | 25 | 25 | 25 | 15 | 10 |
| `ASSETS` | 15 | 35 | 25 | 10 | 15 |
| `ACTION` | 30 | 20 | 15 | 25 | 10 |

The meaning of a dimension does **not** silently change by objective. Only the top-level weights vary unless a later Parent-approved contract explicitly supersedes this rule.

---

# 8. General scoring formula

For every subcriterion with `AVAILABLE` evidence:

```text
subscore = 0..100
subweight = frozen Product weight
evidenceRefs = required
scoringContractVersion = required
```

Dimension score:

```text
DIMENSION_SCORE
=
Σ(subscore × admitted subweight)
/
Σ(admitted subweight)
```

Overall score:

```text
OVERALL_AI_MATCH
=
Σ(dimensionScore × admitted top-level weight)
/
Σ(admitted top-level weight)
```

subject to:

```text
>= 60% overall weighted evidence coverage
+
Audience or Content dimension available
```

`NOT_APPLICABLE` Product criteria are removed from the relevant denominator.

`UNAVAILABLE` and `CONFLICT` are excluded from numeric calculation and reflected in coverage/Unknowns.

The Intelligence SA must make every subscore evaluator reproducible/versioned. Deterministic facts should use deterministic formulae. Semantic fit may use a model only through a frozen rubric/structured output contract; the model must not invent dimensions or weights.

---

# 9. AUDIENCE_FIT

Frozen subcriteria:

| Subcriterion | Weight | Product meaning |
|---|---:|---|
| Target geography overlap | 35 | alignment of authoritative Creator audience with Campaign-authored target locations |
| Target age overlap | 25 | alignment with Campaign-authored target age ranges |
| Target gender overlap | 20 | alignment with Campaign-authored target gender selection where legally/Product-authorized |
| Target affinities alignment | 20 | evidence-backed affinity alignment to Campaign-authored affinities |

Rules:

```text
Campaign did not author criterion
→ NOT_APPLICABLE

provider-suppressed demographic
→ UNAVAILABLE

missing demographic
→ UNAVAILABLE, not 0

demographic bucket
!= psychographic inference
```

### Deterministic overlap expectation

Where Campaign target and Creator distribution are directly comparable categories, the evaluator should be deterministic and versioned.

Examples of Product meaning:

```text
geo / age / gender overlap
= share/alignment of the known Creator audience that falls inside Campaign-authored target categories
```

The exact bucket normalization, unknown-bucket handling and multi-location semantics belong in the Intelligence definition contract and must be reviewed before implementation.

### Affinities

Affinities are semantic and may consume admitted Audience/Content/Creator Brand evidence, but must never infer sensitive traits.

---

# 10. CONTENT_AND_DELIVERABLE_FIT

Frozen subcriteria:

| Subcriterion | Weight | Product meaning |
|---|---:|---|
| Required format evidence | 35 | evidence that the Creator can credibly produce Campaign-required deliverable formats |
| Brief/content semantic alignment | 35 | evidence-backed alignment between Creator content patterns and Brief requirements |
| Creative/production consistency | 15 | consistency of relevant content execution where accepted Content Intelligence provides it |
| Relevant verified work | 15 | accepted Portfolio/C04 verified work when authorized/available |

Rules:

- Portfolio is optional unless later Parent authority makes it mandatory.
- Missing recent example of a media type does not prove inability.
- `likely_collab` may be bounded evidence but is not canonical Collaboration truth.
- C04 verified work is stronger provenance where available, but must preserve privacy/ownership rules.
- No raw media URL becomes durable Match identity.

### Required-format evaluator

The definition contract should score evidence across the required Campaign deliverable formats rather than use a generic Creator format preference.

A missing format evidence set lowers coverage; it is not automatically zero ability.

### Semantic alignment

Semantic evaluation must be against the immutable Brief/Application context, with structured rubric output and Evidence refs. Free-form model judgement without a versioned rubric is prohibited.

---

# 11. BRAND_AND_OFFERING_FIT

Frozen subcriteria:

| Subcriterion | Weight | Product meaning |
|---|---:|---|
| Category / niche relevance | 35 | evidence-backed relevance to Brand/Offering category and Campaign context |
| Positioning / archetype alignment | 25 | alignment between accepted Brand/Creator Brand semantics and Campaign creator strategy |
| Tone / visual / content-expression fit | 25 | semantic compatibility with Brand/Brief expression |
| Relevant brand-work context | 15 | verified/reliable prior work context where authorized |

Rules:

```text
no universal Creator brand-quality score
no private other-Brand relationship leakage
no competitor-work penalty unless separately authorized
no inference from brand names alone when canonical semantic evidence exists
```

Brand Intelligence and Offering/Product Intelligence remain their own owners; Match consumes accepted versioned outputs.

---

# 12. PERFORMANCE_FIT

Frozen subcriteria:

| Subcriterion | Weight | Product meaning |
|---|---:|---|
| Format-matched reach/view efficiency | 35 | accepted performance evidence for content comparable to Campaign deliverables |
| Engagement / high-intent interaction performance | 30 | accepted interaction evidence with explicit denominator |
| Performance consistency | 20 | repeatability across eligible recent items, not one viral post |
| Recency / usable sample | 15 | freshness and sufficient comparable sample |

Rules:

- follower count alone is not a quality score;
- unavailable provider metrics lower coverage rather than fit;
- no industry/global benchmark unless an accepted benchmark owner exists;
- one viral item cannot independently create a high consistency score;
- missing denominator means rate-based evidence is unavailable;
- observed zero and missing/unavailable are different states.

### Normalization requirement

Exact deterministic performance normalization—e.g. Creator-own median, comparable-format baseline, robust percentile or another reproducible formula—must be frozen in the Intelligence definition contract before implementation.

Campaign Product **does not authorize a hidden model-only normalization**.

---

# 13. COMMERCIAL_AND_WORK_FIT

Frozen subcriteria:

| Subcriterion | Weight | Product meaning |
|---|---:|---|
| Current availability / willingness | 30 | accepted Work Preferences availability/current state |
| Campaign-type / industry preference compatibility | 20 | explicit accepted Creator preferences where authoritative |
| Rate Card / Campaign commercial compatibility | 35 | relationship between Creator starting/reference rates and Campaign-authoritative commercial terms |
| Usage / Partnership Ads / rights compatibility | 15 | explicit rights/preferences where Campaign requires them |

Rules:

- Creator Rate Card is starting/reference information, not Campaign transactional truth.
- Campaign/Add Brief owns transactional commercial requirements.
- A Creator rate above an inferred per-Creator budget is not automatically an eligibility failure unless Campaign Product explicitly defines a hard maximum.
- Missing Work Preferences/Rate Card lowers coverage, not fit.
- Application submission itself may be presented as factual willingness to this opportunity, but must not silently replace the Work Preferences subcriterion scoring contract.
- payout/KYC readiness is not Applicant fit unless explicitly admitted by a later Product decision.

---

# 14. Hard eligibility versus scoring

Applicant AI Match introduces **no new hidden Application eligibility system**.

Hard validation remains owner/domain truth.

Match may fail closed / become `UNAVAILABLE` when:

```text
Application identity invalid
ApplicationSnapshot unavailable/unverifiable
Campaign/Application ownership mismatch
Creator subject cannot be resolved
required immutable context hash/version invalid
cross-tenant access fails
```

These are not low Match scores.

Campaign target preferences, Creator Intelligence gaps and commercial uncertainty are not automatically hard rejection gates.

If C03 accepted the Application, the Match engine may not retroactively invalidate it merely because optional Intelligence is missing.

---

# 15. Prohibited inference / fairness boundary

Applicant AI Match must not infer or score:

```text
race / ethnicity
religion
health condition
sexual orientation / sex life
political affiliation
trade-union status
criminal history
income/wealth from geography
personal trustworthiness
"creator quality" from follower count alone
private other-Brand relationship history
availability from posting frequency
commercial willingness from audience geography
```

Sensitive/proxy dimensions require separate Product/legal authority.

Gender-target alignment may only use Campaign-authored targeting and authoritative permitted audience data under the accepted Product/legal/provider contract; it must not infer a Creator's personal gender identity.

---

# 16. Explanation contract

When `READY`, Applicant Match emits bounded decision-support explanations.

User-facing structure:

```text
Strengths: max 2
Areas to consider: max 2
Unknowns: max 2 material items
Dimension breakdown: bounded to the five frozen dimensions
```

Rules:

- every explanation must be supportable by admitted evidence/result references;
- Unknowns represent missing/conflicting/limited evidence, not negative fit;
- do not expose model chain-of-thought;
- do not expose raw provider payload/error text;
- no unsupported causal or personal-character judgement;
- do not convert low coverage into a negative narrative.

Historical internal vocabulary `weaknesses` may remain compatibility-only; user-facing copy should use **Areas to consider**.

---

# 17. Pending re-evaluation / supersession

Initial evaluation is bound to the immutable ApplicationSnapshot.

While Application remains `PENDING`, an explicit authorized re-evaluation may run using:

```text
same ApplicationSnapshot
+
new versioned admissible evidence manifest
```

Examples of valid reasons:

```text
previous Match was UNAVAILABLE and new Creator Intelligence became available
accepted Creator Intelligence/current materially advanced
prior source was stale and a new admissible current exists
explicit Brand/system refresh policy requests a new evaluation
```

Rules:

```text
no silent auto-rewrite of old result
old evaluation remains immutable history
new accepted evaluation may supersede current
stale execution may not overwrite newer current
```

Once the Application reaches terminal decision state (`APPROVED`, `REJECTED`, `EXPIRED`):

```text
Applicant Match current/history becomes read-only historical decision context
no automatic re-evaluation
```

A later Collaboration does not mutate the historical Applicant score.

---

# 18. Marketplace Recommendation separation

Frozen boundary:

```text
MARKETPLACE_RECOMMENDATION
!=
APPLICANT_AI_MATCH
```

They may share:

```text
top-level dimension vocabulary
Product-approved rubric library
objective-specific top-level weights
reusable deterministic calculation primitives
shared Intelligence runtime
```

They must not share:

```text
subject identity
trigger
input snapshot
run/current identity
accepted-result record
history/current pointer
user-facing output contract
supersession semantics
```

A Marketplace creator who later applies is **re-evaluated** under Applicant Match.

Do not copy the pre-application internal score/rank into Applicants.

Reasons:

```text
ApplicationSnapshot is a new immutable authority boundary
admitted evidence may differ
provider enrichment may have changed
Campaign/Application context is frozen differently
Applicant Match has different nonblocking decision-support semantics
```

---

# 19. Source/input classification for the Match engine

## 19.1 Campaign / Application inputs

| Input | Owner | Match role |
|---|---|---|
| Application identity/status | C03 | HARD IDENTITY / lifecycle context |
| ApplicationSnapshot identity/version/hash | C03 | REQUIRED immutable evaluation anchor |
| Campaign objective | Campaign Snapshot | SCORING INPUT / selects top-level weights |
| Target geography/age/gender/affinities | Campaign Snapshot | SCORING INPUT where authored |
| Deliverables | Campaign/Brief Snapshot | SCORING INPUT |
| Brief requirements | Campaign/Brief Snapshot | SCORING INPUT |
| Asset/Offering reference | Campaign + Offering owner | context/scoring input |
| Commercial model/terms relevant to application | Campaign Snapshot | SCORING INPUT |

## 19.2 Brand / Offering inputs

| Input | Owner | Match role |
|---|---|---|
| Brand semantic current | Brand Intelligence | optional scoring/explanation input |
| Offering/Product semantic current | Product/Offering Intelligence | optional scoring/explanation input |
| Brand Instagram raw/provider data | Settings/Instagram/DE owner | NOT direct Match input; use accepted Intelligence/Evidence contracts only |

## 19.3 Creator inputs

| Input | Owner | Match role |
|---|---|---|
| Creator canonical identity | Creator platform/C03 | REQUIRED identity |
| Creator Audience | Creator Audience | optional scoring input |
| Creator Content | Creator Content | optional scoring input |
| Creator Brand | Creator Brand | optional scoring/context input |
| Work Preferences | Creator Commercial Setup | optional scoring input |
| Rate Card | Creator Rate Card | optional scoring input |
| Portfolio | Creator Portfolio | OPTIONAL ENHANCER when technically accepted/admissible |
| prior verified work | C04 and/or Portfolio | OPTIONAL ENHANCER under privacy rules |
| raw source tokens/credentials | Settings | PROHIBITED |

Missing optional donors reduce coverage; they do not become negative evidence.

---

# 20. Required Campaign → Intelligence input manifest

The Match engine should not roam across mutable domain state without an explicit input snapshot/manifest.

Conceptual request:

```ts
type ApplicantAIMatchRequestV1 = {
  contract: "APPLICANT_AI_MATCH_REQUEST_V1";

  applicationId: string;
  applicationSnapshotRef: {
    snapshotId: string;
    snapshotVersion: string;
    snapshotHash: string;
  };

  campaignContext: {
    campaignId: string;
    objective: "AWARENESS" | "TRUST" | "ASSETS" | "ACTION";
    campaignSnapshotVersion: string;
    assetRef: string | null;
    briefRef: string | null;
    targetAudienceRef: string | null;
    deliverableContractRef: string;
    commercialContextRef: string | null;
  };

  creatorSubjectRef: string;

  admittedDependencies: Array<{
    owner:
      | "BRAND_INTELLIGENCE"
      | "OFFERING_INTELLIGENCE"
      | "CREATOR_AUDIENCE"
      | "CREATOR_CONTENT"
      | "CREATOR_BRAND"
      | "WORK_PREFERENCES"
      | "RATE_CARD"
      | "PORTFOLIO"
      | "C04_VERIFIED_WORK"
      | "INSTAGRAM_EVIDENCE";

    currentRef: string;
    contractVersion: string;
    observedThrough: string | null;
    freshness: "CURRENT" | "STALE" | "UNKNOWN";
    evidenceRefs: string[];
  }>;

  evaluationReason: "INITIAL_APPLICATION" | "EXPLICIT_PENDING_REEVALUATION";
  priorEvaluationId: string | null;
};
```

Exact internal transport/API naming belongs to the technical owner. The invariant is an explicit immutable/versioned manifest.

---

# 21. Required Intelligence → Campaign output contract

The Campaign module expects a strict versioned result/projection, not raw provider/model output.

```ts
type ApplicantAIMatchIntelligenceOutputV1 = {
  contract: "APPLICANT_AI_MATCH_INTELLIGENCE_V1";

  evaluationId: string;
  applicationId: string;
  applicationSnapshotId: string;
  applicationSnapshotVersion: string;
  applicationSnapshotHash: string;

  campaignId: string;
  objective: "AWARENESS" | "TRUST" | "ASSETS" | "ACTION";

  state: "PROCESSING" | "READY" | "UNAVAILABLE";

  currentHealth:
    | "CURRENT"
    | "STALE_CURRENT_PRESERVED"
    | "FAILED_CURRENT_PRESERVED"
    | "NONE";

  score: number | null; // integer 0..100 only when READY
  confidence: "HIGH" | "MEDIUM" | "LOW" | null;
  weightedEvidenceCoveragePercent: number;

  dimensions: ApplicantMatchDimensionV1[];

  explanation: {
    strengths: ApplicantMatchReasonV1[];        // max 2
    areasToConsider: ApplicantMatchReasonV1[]; // max 2
    unknowns: ApplicantMatchReasonV1[];        // max 2
  };

  limitations: ApplicantMatchLimitationV1[];

  provenance: {
    definitionVersion: string;
    rubricVersion: string;
    objectiveWeightVersion: string;
    inputManifestId: string;
    inputManifestHash: string;
    processorVersion: string;
    modelProfileVersion: string | null;
    evidenceObservedThrough: string | null;
    evaluationStartedAt: string;
    evaluatedAt: string | null;
  };

  supersedesEvaluationId: string | null;
};
```

## 21.1 Dimension object

```ts
type ApplicantMatchDimensionV1 = {
  dimension:
    | "AUDIENCE_FIT"
    | "CONTENT_AND_DELIVERABLE_FIT"
    | "BRAND_AND_OFFERING_FIT"
    | "PERFORMANCE_FIT"
    | "COMMERCIAL_AND_WORK_FIT";

  objectiveWeight: number;

  state: "AVAILABLE" | "UNAVAILABLE" | "CONFLICT" | "NOT_APPLICABLE";
  score: number | null; // 0..100 only when dimension available
  evidenceCoveragePercent: number;

  subcriteria: ApplicantMatchSubcriterionV1[];
};
```

## 21.2 Subcriterion object

```ts
type ApplicantMatchSubcriterionV1 = {
  subcriterionId: string;
  frozenWeight: number;
  state: "AVAILABLE" | "UNAVAILABLE" | "CONFLICT" | "NOT_APPLICABLE";
  score: number | null;
  scoringContractVersion: string;
  evidenceRefs: string[];
  limitationCodes: string[];
};
```

## 21.3 Reason object

```ts
type ApplicantMatchReasonV1 = {
  reasonCode: string;
  dimension: string | null;
  text: string;
  evidenceRefs: string[];
  severity: "SUPPORTING" | "CONSIDER" | "UNKNOWN";
};
```

The Campaign frontend may render `text` only if it is already bounded/validated by the accepted result contract; alternatively the backend may map `reasonCode` to approved copy. Raw model prose is not automatically user-facing authority.

## 21.4 Limitation object

```ts
type ApplicantMatchLimitationV1 = {
  code: string;
  scope: "EVALUATION" | "DIMENSION" | "SUBCRITERION" | "SOURCE";
  dimension?: string;
  messageKey: string;
  recoverability:
    | "NONE"
    | "MORE_EVIDENCE_REQUIRED"
    | "SOURCE_REFRESH"
    | "SOURCE_REAUTHORIZATION"
    | "EXPLICIT_REEVALUATION";
};
```

---

# 22. Output invariants

The Intelligence engine must guarantee:

```text
READY → score != null
UNAVAILABLE → score = null
PROCESSING → score = null unless Campaign separately preserves a prior current evaluation

score integer in [0, 100]
confidence present only with READY score
weightedEvidenceCoveragePercent always explicit
missing evidence != score 0
CONFLICT != score 0
NOT_APPLICABLE removed from denominator
```

Every score/reason/breakdown must be traceable to:

```text
ApplicationSnapshot
+
versioned input manifest
+
accepted donor currents/evidence
+
rubric/definition versions
```

---

# 23. Campaign acceptance / idempotency / current-history semantics

The Intelligence Engine may compute; Campaign accepts only results matching the still-authoritative Application/context fence.

Expected acceptance fence includes:

```text
applicationId
applicationSnapshotId/version/hash
campaignId
objective
inputManifestHash
definitionVersion
rubricVersion
objectiveWeightVersion
```

Recommended idempotency identity concept:

```text
H(
  applicationId
  + applicationSnapshotHash
  + inputManifestHash
  + definitionVersion
  + rubricVersion
  + objectiveWeightVersion
)
```

Exact hash implementation is technical authority.

Rules:

```text
same immutable request → replay/idempotent
older/stale execution → cannot replace newer accepted current
failed new execution → prior accepted current preserved
new explicit pending re-evaluation → new immutable evaluation generation/history
terminal Application → no new automatic Match generation
```

Do not store the score as an ordinary mutable Application column if doing so bypasses accepted Intelligence generation/history/current semantics.

---

# 24. Frontend Product register

## 24.1 Location

Applicant AI Match appears only in:

```text
Campaign Page
→ Applicants workspace
```

It is not shown as the primary recommendation value in Discovery.

## 24.2 Applicant card

Compact Applicant card/list presentation should show:

```text
Creator identity
Application decision status
Product / Brief context
AI Match state
AI Match numeric score when READY
one concise supporting Match reason where useful
applied/submission timing
Approve / Reject when C03 capability permits
View Application / Applicant Detail
```

AI must remain visually subordinate to the Brand decision controls.

Do not show Creator discovery `Match Potential` as the primary Applicant value.

## 24.3 READY card

Conceptually:

```text
AI Match
91 / 100

Strong audience/content alignment
```

Exact visual score treatment belongs to Campaign Page/Stitch authority.

## 24.4 PROCESSING card

Conceptually:

```text
AI Match is being calculated
```

Approve/Reject remains available if C03 allows it.

## 24.5 UNAVAILABLE card

Conceptually:

```text
AI Match unavailable
You can still review and decide.
```

No placeholder `0`.

## 24.6 Applicant Detail / AI Decision Brief

Detailed Match presentation should support:

```text
Creator identity
Application status
Product / Brief submitted against
submission timing
immutable Application context orientation
AI Match score
confidence / evidence coverage
Strengths
Areas to consider
material Unknowns
five-dimension breakdown
limitations/freshness when material
Approve / Reject from C03 capability authority
```

Do not expose raw model chain-of-thought or raw provider payload.

## 24.7 Historical terminal Applications

For `APPROVED`, `REJECTED`, `EXPIRED`:

```text
Match = historical/read-only
```

No active Approve/Reject controls when C03 says the Application is terminal.

## 24.8 Creator visibility

V1 Applicant AI Match is **Brand-side decision support**.

```text
CREATOR_VISIBLE_AI_MATCH_SCORE = NO
CREATOR_VISIBLE_AI_MATCH_REASONS = NO
```

A future Creator-facing explanation/appeal product would require separate Product authority.

## 24.9 AI score editing

```text
MANUAL_SCORE_OVERRIDE = NO
```

The Brand may disagree with the AI Match by making a different Application decision, but it does not edit the canonical score/reasons.

---

# 25. Applicants workspace boundaries the Match engine does not own

The Match engine must not generate or own:

```text
Application status
Approve / Reject capability
bulk decision behavior
Application duplicate limits
Campaign close → Expired behavior
Collaboration provisioning
Applicant alerts
payment-dispute alert
previous-rejection alert
completed-collaboration alert
Outreach history
Creator profile canonical identity
Product/Brief ownership
```

The Applicants workspace composes those from their owners.

Historical alert priority remains a Campaign Applicants concern, not an AI Match dimension:

```text
Payment dispute
> Previous rejection
> Completed collaboration
```

Do not turn those alerts into hidden Match penalties unless a future Product contract explicitly admits a related scoring signal.

---

# 26. Source lifecycle / freshness semantics

Match consumes accepted source/donor outputs under their own freshness/retention rules.

Examples:

```text
Creator Audience stale
→ may become unavailable or admitted-as-stale only if that donor's Match input contract allows it

Creator Instagram disconnected
→ does not delete Application
→ does not set Match to 0

Delete My Instagram Data
→ Match must not read deleted raw source data
→ preserved derived Creator Centre Intelligence may remain an input only if owner contract marks it admissible

Brand/Offering Intelligence changes
→ existing Match does not silently rewrite
→ while Application PENDING, an explicit re-evaluation may admit new versioned current
```

The Match engine must never own source reconnect/delete flows.

---

# 27. Acceptance fixtures the Intelligence Engine SA should plan for

At minimum:

```text
MATCH-01
PENDING Application + complete high-coverage evidence
→ READY numeric score

MATCH-02
PENDING Application + 60–69% coverage
→ READY + LOW confidence

MATCH-03
PENDING Application + 70–84%
→ READY + MEDIUM confidence

MATCH-04
PENDING Application + >=85%
→ READY + HIGH confidence

MATCH-05
coverage <60%
→ UNAVAILABLE, score null

MATCH-06
Audience unavailable but Content dimension available and total coverage >=60%
→ may be READY

MATCH-07
Content unavailable but Audience available and total coverage >=60%
→ may be READY

MATCH-08
both Audience and Content unavailable
→ UNAVAILABLE regardless of other dimension coverage

MATCH-09
optional Rate Card / Portfolio missing
→ coverage reduced; no zero penalty

MATCH-10
Campaign did not author gender criterion
→ gender = NOT_APPLICABLE, removed from denominator

MATCH-11
provider demographic suppressed
→ UNAVAILABLE, not zero

MATCH-12
conflicting Brand/Creator evidence with no precedence
→ CONFLICT; excluded; Unknown reason

MATCH-13
one viral post only
→ cannot independently create strong Performance consistency

MATCH-14
initial UNAVAILABLE; later explicit pending re-evaluation with new admitted evidence
→ new immutable evaluation, old history retained

MATCH-15
new evaluation fails after prior READY
→ FAILED_CURRENT_PRESERVED

MATCH-16
old execution completes after newer accepted result
→ stale write rejected

MATCH-17
Application APPROVED before Match completes
→ C03 decision stands; late Match must not reopen decision or create active current

MATCH-18
Application REJECTED/EXPIRED
→ historical Match only; no automatic refresh

MATCH-19
Marketplace recommendation existed before application
→ Applicant evaluation recomputed; no score copy

MATCH-20
foreign Campaign/Creator/Application evidence injection
→ fail closed / tenant isolation

MATCH-21
source-deleted raw Instagram evidence
→ not read; no silent reacquisition

MATCH-22
sensitive/proxy inferred field supplied by model
→ output validation rejects
```

---

# 28. What the Intelligence Engine SA is expected to build

Campaign is asking for an Applicant Match capability that can produce `ApplicantAIMatchIntelligenceOutputV1` with these guarantees:

```text
1. ApplicationSnapshot-bound evaluation
2. one authoritative Applicants-only numeric 0–100 score when READY
3. objective-specific top-level weights
4. frozen five-dimension/subcriterion vocabulary
5. deterministic missing/conflict/not-applicable semantics
6. >=50% dimension support rule
7. >=60% overall weighted coverage rule
8. Audience-or-Content minimum evidence rule
9. HIGH/MEDIUM/LOW confidence from coverage
10. bounded strengths / areas-to-consider / unknowns
11. evidence/provenance for every scored claim
12. separate Marketplace and Applicant current/history
13. explicit pending-only re-evaluation
14. immutable evaluation history + current pointer/CAS
15. stale-write rejection
16. failed-current preservation
17. no effect on C03 Approve/Reject capability
18. tenant/Brand/Campaign/Application/Creator isolation
19. no sensitive/proxy inference
20. provider/source lifecycle compliance
```

The Intelligence Engine SA may choose internal Object/processor/component decomposition only if it remains compatible with shared Intelligence architecture and does not create a parallel DE/Evidence/current/runtime.

---

# 29. Exact handoff request to Intelligence Engine SA

```text
CAMPAIGN_APPLICANT_AI_MATCH_TO_INTELLIGENCE_ENGINE_SA_HANDOFF_V1

You are receiving the Campaign Applicant AI Match Product/consumer contract.

Your assignment is NOT to redesign Applicants, C03, Creator Centre or Campaign Product logic.

Treat as Campaign consumer authority:
CAMPAIGN_APPLICANT_AI_MATCH_PRODUCT_AND_CONSUMER_CONTRACT_V1

Build/plan the Intelligence capability that can produce:
ApplicantAIMatchIntelligenceOutputV1

Preserve:
- immutable C03 ApplicationSnapshot anchor;
- AWARENESS / TRUST / ASSETS / ACTION;
- integer 0–100 Applicants-only Match score;
- five dimensions + objective weights;
- frozen subcriteria and subweights;
- missing != zero;
- CONFLICT != zero;
- NOT_APPLICABLE removed from denominator;
- >=50% dimension support rule;
- >=60% overall coverage + Audience-or-Content rule;
- HIGH/MEDIUM/LOW confidence;
- bounded Strengths / Areas to consider / Unknowns;
- nonblocking C03 decision authority;
- pending-only explicit re-evaluation;
- immutable history/current/CAS;
- failed-current preservation;
- evidence/provenance/auditability;
- privacy/sensitive-attribute prohibitions;
- strict separation from Marketplace Recommendation.

Do not:
- calculate Match in the frontend;
- copy Marketplace score/rank into Applicants;
- make AI Match an Application eligibility gate;
- disable Approve/Reject because Match is unavailable;
- mutate C03 Application/Snapshot;
- mutate C04 Collaboration;
- own Creator/Brand Settings source lifecycle;
- read/store OAuth tokens;
- infer missing optional evidence as zero;
- expose raw model chain-of-thought;
- build parallel DE/Evidence/current/scheduler infrastructure.

Return first:
1. current shared Intelligence reuse map;
2. exact C03 ApplicationSnapshot adapter/read contract;
3. exact Campaign/Brand/Offering/Creator donor input adapters;
4. exact subcriterion evaluator design and scoringContractVersion for every subcriterion;
5. exact deterministic vs model-owned scoring split;
6. exact output mapping to ApplicantAIMatchIntelligenceOutputV1;
7. coverage/conflict/NOT_APPLICABLE arithmetic proof;
8. current/history/re-evaluation/idempotency design;
9. privacy/source-lifecycle handling;
10. finite implementation plan and acceptance fixtures.

Before implementation, independently verify the latest accepted authority for:
- C03;
- Shared Intelligence runtime;
- Creator Audience V1;
- Creator Content;
- Creator Brand;
- Work Preferences / Rate Card;
- Portfolio if admitted;
- Settings — Creator source lifecycle;
- Brand/Offering Intelligence;
- C04 prior-work projection if admitted.
```

---

# 30. Items deliberately not frozen / not Campaign Page SA authority

These must not be silently invented by the implementation SA:

```text
1. exact deterministic formula/model rubric that converts each semantic subcriterion into 0..100
   beyond the Product meanings/weights/admission rules frozen here;

2. exact performance normalization algorithm for PERFORMANCE_FIT;

3. exact current accepted Portfolio technical status until fresh Git verification;

4. exact current Audience V1 final technical status until fresh Git verification,
   despite later evidence treating its a403... checkpoint as accepted predecessor;

5. exact Match-history retention behavior after Settings — Creator "Delete My Data";

6. exact C04 prior-work read projection/privacy scope admitted into Applicant Match;

7. exact Campaign Brand-role × Applicant-Match visibility matrix beyond:
   Brand-side Applicants = visible,
   Creator-side = not visible;

8. exact internal Object/processor names, HTTP routes, table/migration design;

9. exact score rounding algorithm (must be deterministic/versioned and output integer 0..100);

10. any new sensitive/proxy scoring dimension.
```

The Intelligence Engine SA should return these as technical/product dependencies rather than fill gaps by convenience.

---

# 31. Source bibliography / supersession notes

Primary recovered authority incorporated:

- `CAMPAIGN_PAGE_REPORTING_AI_MATCH_MARKETPLACE_RECOMMENDATION_PRODUCT_DECISION_RECOVERY_V1.md`
- `CAMPAIGN_PAGE_THREE_INTELLIGENCE_BOUNDED_PRODUCT_CLARIFICATIONS_V1.md`
- `CAMPAIGN_INTELLIGENCE_INTEGRATION_SA_ORIENTATION_DEPENDENCY_AND_READINESS_AUDIT_V1.md`
- Campaign Applicants / ApplicationSnapshot Product authority
- accepted C03 recovery/final handoffs
- accepted Creator Audience / Content / Creator Brand / Commercial authority
- Creator Audience V1 final execution evidence and later predecessor references
- Creator Portfolio V3 Product authority as optional donor context
- Settings — Creator deletion/source-ownership amendment
- accepted C04 Collaboration authority for verified work only where admitted
- shared DE/Evidence/Intelligence architecture

Superseded / prohibited for Applicant Match semantics:

```text
Discovery qualitative Match Potential as Applicant score
Marketplace provider order as Applicant score
pre-application recommendation score copied into Applicant current
AI availability gating Approve/Reject
global Creator quality score
missing optional evidence = 0
follower count = creator quality
private other-Brand relationship history
raw provider payload as Product truth
legacy free-form AI Recommendation without evidence/version contract
```

---

# 32. Parent freeze request

```text
PARENT_REVIEW_REQUEST =
ACCEPT THIS APPLICANT AI MATCH REGISTER AS THE CAMPAIGN PRODUCT/CONSUMER CONTRACT

AFTER ACCEPTANCE =
HAND TO INTELLIGENCE ENGINE SA FOR CURRENT-STATE REUSE PREFLIGHT + BUILD PLANNING

CAMPAIGN APPLICANTS FRONTEND WIRING =
SEPARATE LATER STEP AFTER THE INTELLIGENCE OUTPUT CONTRACT EXISTS
```
