# CAMPAIGN APPLICANT AI MATCH — PRODUCT CLARIFICATION V1

`CAMPAIGN_APPLICANT_AI_MATCH_PRODUCT_CLARIFICATION_V1`

## 0. Authority

This clarification supplements and, where stated, supersedes:

```text
CAMPAIGN_APPLICANT_AI_MATCH_PRODUCT_AND_CONSUMER_CONTRACT_V1
```

The base Product contract remains authoritative except for the exact changes below.

```text
PARENT_CLARIFICATION = ACCEPTED
IMPLEMENTATION = NOT AUTHORIZED BY THIS DOCUMENT ALONE
```

## 1. Donor-availability neutrality

Applicant AI Match does not receive, inspect or reason about source-lifecycle causes. Its only input question is whether an owning donor exposes admissible Match data.

```text
admissible donor current/data available
→ may be used

admissible donor current/data unavailable
→ unavailable input
```

The cause of donor availability is not part of the Match manifest, scoring contract, output, limitation taxonomy or UI. Source owners may change what persists in the future; Match simply consumes the resulting admissible donor state. It must not reacquire unavailable data or invent a persistence policy.

## 2. Commercial and Work dimension removed from MVP

For Applicant AI Match V1:

```text
COMMERCIAL_AND_WORK_FIT = NOT_APPLICABLE_GLOBAL_V1
```

Do not consume or score:

```text
Work Preferences
Rate Card
Creator commercial setup
payout/KYC readiness
general availability
commercial willingness
usage-right preference
Partnership Ads preference
```

Rationale:

- most V1 creators may arrive freshly through the future Marketplace path;
- an actual Application is opportunity-specific willingness to the Campaign;
- submitted Campaign/Application commercial context supersedes generic Creator preferences for Applicant Match;
- a higher-priced Creator may still be the better match;
- Applicant Match is not commercial eligibility or affordability scoring.

Application submission may be displayed as factual willingness but contributes no Match subscore.

The original five-dimension Product vocabulary remains historical compatibility, but V1 calculation and UI use four scored dimensions:

```text
AUDIENCE_FIT
CONTENT_AND_DELIVERABLE_FIT
BRAND_AND_OFFERING_FIT
PERFORMANCE_FIT
```

The original objective weights for `COMMERCIAL_AND_WORK_FIT` are removed from the applicable top-level denominator. Remaining objective weights are normalized by the accepted general formula; do not invent replacement weights.

## 3. No re-evaluation flow in V1

Supersede the original pending re-evaluation policy.

```text
INITIAL_EVALUATION = ONE PER IMMUTABLE APPLICATION SNAPSHOT

EXPLICIT_REEVALUATION = NOT_SUPPORTED_V1
MANUAL_REFRESH = NOT_SUPPORTED_V1
AUTOMATIC_REEVALUATION = NOT_SUPPORTED_V1
DONOR_CHANGE_REEVALUATION = NOT_SUPPORTED_V1
```

Brand/Creator donor changes after an accepted `READY` or `UNAVAILABLE` evaluation do not create a new evaluation in V1.

The accepted result remains immutable historical decision context. A future re-evaluation product requires separate authority.

Accordingly, these original states are reserved for future compatibility and are not emitted by normal V1 behavior:

```text
STALE_CURRENT_PRESERVED
FAILED_CURRENT_PRESERVED
supersedesEvaluationId != null
```

## 4. Initial donor-readiness wait

The one initial evaluation has two phases:

```text
1. dependency readiness
2. immutable evaluation
```

Canonical edge case:

```text
Campaign invites Creator
→ Creator signs up
→ Creator connects Graph API
→ Creator donor pipelines begin
→ Creator applies while donors are still PROCESSING
→ ApplicationSnapshot succeeds
→ Applicant Match request begins
```

Required behavior:

```text
donors actively PROCESSING
+ current admitted evidence is insufficient for numeric readiness
→ Match stays PROCESSING
→ Application decision remains nonblocking
→ do not finalize failure
→ do not emit score 0
→ do not create an accepted UNAVAILABLE result prematurely
```

The initial Match request may wait/retry through existing shared execution/dependency primitives. This is not re-evaluation because no Match result has yet been accepted.

At the first coherent point where:

```text
overall coverage can reach >= 60%
+ Audience or Content dimension can be numeric
```

freeze one immutable donor manifest and execute the Match.

If enough evidence is already available when the ApplicationSnapshot is created, evaluate immediately.

If some donors terminate unavailable but remaining donors satisfy readiness, evaluate with the admitted subset.

If all relevant donors are terminal and readiness cannot be reached, or the versioned technical wait horizon expires:

```text
state = UNAVAILABLE
score = null
```

The exact wait horizon, retry/backoff and dependency-readiness mechanism are technical configuration to be proposed in P0. Do not create a second scheduler.

## 5. Immutable request and manifest semantics

The ApplicationSnapshot anchor is frozen when the Application is submitted.

The donor input manifest is frozen only when the initial evaluation is ready to calculate or finalize `UNAVAILABLE`.

Dependency-readiness observations before manifest freeze are execution metadata, not accepted Match generations.

After manifest freeze:

```text
same request/manifest
→ replay/idempotent

different later donor current
→ ignored by V1 after accepted result
```

## 6. Application terminal race

If the Application becomes `APPROVED`, `REJECTED` or `EXPIRED` before initial Match publication:

```text
stop dependency waiting
reject late current publication
do not reopen the Application decision
do not create a new user-visible Match result
record bounded execution/audit disposition only
```

If a Match was already accepted before terminalization, it remains historical and read-only.

## 7. Consumer-state correction

Use an envelope that separates accepted current from latest execution attempt.

```text
PROCESSING
= no accepted current
+ initial request/dependency/evaluation running

READY
= accepted numeric current

UNAVAILABLE
= accepted no-score current after terminal insufficiency/wait expiry
```

An actual runtime failure during the initial evaluation is distinct from donors still processing. It may be retried through existing shared primitives. After terminal retry exhaustion, expose bounded failure/limitation truth without disabling C03 decision capability.

## 8. V1 donor cutline

Required anchors:

```text
C03 Application identity
immutable ApplicationSnapshot
Campaign/Brief snapshot
Creator canonical identity
```

Potential scored donors, admitted only when accepted/current and compatible:

```text
Creator Audience
Creator Content
Creator Brand
Brand Intelligence
Offering Intelligence
Instagram-derived Evidence/current through accepted owner contracts
```

Optional capability-gated enhancers:

```text
Portfolio
C04 verified prior work
```

Explicitly excluded from V1 Match:

```text
Work Preferences
Rate Card
commercial setup
Settings lifecycle state as a scoring input
raw provider tokens/payloads
```

## 9. Preserved invariants

All other base-contract invariants remain frozen, including:

```text
ApplicationSnapshot anchor
0..100 integer score only when READY
missing/conflict != zero
NOT_APPLICABLE removed from denominator
>=50% dimension support
>=60% overall coverage
Audience-or-Content minimum rule
confidence from coverage
objective-specific original weights normalized over applicable dimensions
bounded Strengths / Areas to consider / Unknowns
nonblocking C03 decision authority
immutable history/current/CAS
tenant/Brand/Campaign/Application/Creator isolation
privacy/sensitive-inference prohibitions
Marketplace Recommendation separation
frontend calculation prohibited
```

## 10. Implementation consequence

The Technical SA must now produce:

```text
current-state/donor/runtime preflight
exact four-dimension scoring registry
deterministic vs structured-model split
dependency-readiness state machine
versioned wait-horizon proposal
finite P1→P4 plan
```

No further Campaign SA question is required unless repository truth exposes a conflict with the immutable ApplicationSnapshot or Applicants capability model.
