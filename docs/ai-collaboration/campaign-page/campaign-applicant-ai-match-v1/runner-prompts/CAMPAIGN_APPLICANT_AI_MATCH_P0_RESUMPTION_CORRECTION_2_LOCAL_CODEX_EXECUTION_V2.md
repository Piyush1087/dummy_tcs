# Campaign Applicant AI Match P0 Resumption Correction 2 — External Local Codex Execution V2

Identifier: `CAMPAIGN_APPLICANT_AI_MATCH_P0_RESUMPTION_CORRECTION_2_LOCAL_CODEX_EXECUTION_V2`

## Assignment

Perform one consolidated, documentation-only correction of the Applicant AI Match P0 evidence and publish the corrected report for final Technical-SA review.

This V2 prompt supersedes `CAMPAIGN_APPLICANT_AI_MATCH_P0_RESUMPTION_CORRECTION_2_LOCAL_CODEX_EXECUTION_V1`. Do not execute V1. Do not begin implementation.

## 1. Immutable authority gate

Repository:

```text
Piyush1087/dummy_tcs
```

Authority branch:

```text
program/campaign-applicant-ai-match-v1-authority
```

Required launch checkpoint:

```text
SHA  = the immutable SHA supplied in the Parent launch message
TREE = the immutable tree supplied in the Parent launch message
```

Before any repository work:

1. fetch and prune the authority repository;
2. verify the remote authority branch equals the supplied SHA/tree;
3. verify the supplied SHA is a direct descendant of `4e20e6d611ed1f59e39d03e5ff4ee21d3369c083` and contains this exact V2 prompt plus its scope-expansion review;
4. verify accepted Campaign authority/backend/frontend checkpoints named below from their remotes;
5. use clean isolated task-owned worktrees;
6. stop without mutation on any mismatch.

Do not rely on local uncommitted files or attachments.

## 2. Read completely

From the exact launch checkpoint, read:

1. `AGENTS.md`
2. `AI_ENGINEERING_STANDARD.md`
3. `docs/engineering/ai-integration.md`
4. `docs/ai-collaboration/campaign-page/campaign-applicant-ai-match-v1/CAMPAIGN_APPLICANT_AI_MATCH_PRODUCT_AND_CONSUMER_CONTRACT_V1.md`
5. `docs/ai-collaboration/campaign-page/campaign-applicant-ai-match-v1/CAMPAIGN_APPLICANT_AI_MATCH_PRODUCT_CLARIFICATION_V1.md`
6. `docs/ai-collaboration/campaign-page/campaign-applicant-ai-match-v1/CAMPAIGN_APPLICANT_AI_MATCH_TECHNICAL_PREFLIGHT_AND_FINITE_IMPLEMENTATION_PLAN_V1.md`
7. `docs/ai-collaboration/campaign-page/campaign-applicant-ai-match-v1/P0_CURRENT_STATE_DONOR_SCORING_AND_DEPENDENCY_PREFLIGHT.md`
8. `docs/ai-collaboration/campaign-page/campaign-applicant-ai-match-v1/CAMPAIGN_APPLICANT_AI_MATCH_P0_RESUMPTION_AUTHORITY_V1.md`
9. `docs/ai-collaboration/campaign-page/campaign-applicant-ai-match-v1/CAMPAIGN_APPLICANT_AI_MATCH_P0_RESUMPTION_REPORT_V1.md`
10. `docs/ai-collaboration/campaign-page/campaign-applicant-ai-match-v1/CAMPAIGN_APPLICANT_AI_MATCH_P0_RESUMPTION_TECHNICAL_REVIEW_V1.md`
11. `docs/ai-collaboration/campaign-page/campaign-applicant-ai-match-v1/CAMPAIGN_APPLICANT_AI_MATCH_P0_RESUMPTION_CORRECTION_1_REPORT_V1.md`
12. `docs/ai-collaboration/campaign-page/campaign-applicant-ai-match-v1/CAMPAIGN_APPLICANT_AI_MATCH_P0_RESUMPTION_CORRECTION_1_TECHNICAL_FINAL_REVIEW_V1.md`
13. `docs/ai-collaboration/campaign-page/campaign-applicant-ai-match-v1/CAMPAIGN_APPLICANT_AI_MATCH_P0_RESUMPTION_CORRECTION_2_SCOPE_EXPANSION_REVIEW_V1.md`
14. `docs/ai-collaboration/campaign-page/campaign-applicant-ai-match-v1/EXECUTION_LEDGER.md`
15. every accepted Campaign canonical-objective authority and implementation report named by the ledger.

Treat the V1 Correction 2 prompt as historical only. It is superseded and not execution authority.

Read exact executable sources from accepted Campaign backend:

```text
SHA  = 3c1c523a178c452023add9745628ecff8a6e5e55
TREE = 0138efccc1d83ad5c558571b971731e0c45499ec
```

At minimum inspect:

```text
prisma/schema.prisma
src/features/brand-uce/services/canonical-campaign-definition.ts
src/features/brand-uce/services/canonical-campaign-application-read.service.ts
```

Inspect the accepted C03 submission/snapshot/domain-event/outbox sources and the shared Intelligence runtime sources identified by the P0 reports. Read additional source whenever necessary to verify a corrected claim. Cite file paths, immutable SHAs and relevant symbols in the report; do not substitute historical prose for executable evidence.

Accepted Campaign checkpoints:

```text
CAMPAIGN_AUTHORITY_SHA   = 3a4aa77a4f0f40a472c657622f93ed459c82c12f
CAMPAIGN_AUTHORITY_TREE  = b6140a9905896980e9f6a2a4b8ac8d1d077201b7
CAMPAIGN_BACKEND_SHA     = 3c1c523a178c452023add9745628ecff8a6e5e55
CAMPAIGN_BACKEND_TREE    = 0138efccc1d83ad5c558571b971731e0c45499ec
CAMPAIGN_FRONTEND_SHA    = 0662cd6963859d9e46abe53910b174d4826adaa3
CAMPAIGN_FRONTEND_TREE   = 02243e16ed283810936fdaee0601981fe316688d
```

## 3. Authority precedence

Use:

```text
Parent/Product corrections
> Product Clarification V1 where it explicitly supersedes the base contract
> base Product contract where not superseded
> accepted Campaign/C03/module authorities within their ownership boundaries
> accepted immutable implementation checkpoints
> current repository truth at those checkpoints
> accepted reports/evidence
> historical prose
```

Do not let Applicant Match redefine Campaign or C03-owned contracts. Do not invent Product behavior.

## 4. Required corrected report

Add exactly:

```text
docs/ai-collaboration/campaign-page/campaign-applicant-ai-match-v1/
CAMPAIGN_APPLICANT_AI_MATCH_P0_RESUMPTION_CORRECTION_2_REPORT_V1.md
```

The report must be self-contained and must preserve every nonconflicting accepted P0 finding. It must explicitly correct every conflicting occurrence in Correction 1, not only repeat this checklist.

### Gate A — executable objective handoff fidelity

Use the exact accepted executable `CampaignObjectiveHandoffV1` union:

```text
AVAILABLE:
  status
  objective = AWARENESS | TRUST | ASSETS | ACTION
  objectiveContract = CAMPAIGN_OBJECTIVE_V1
  campaignDefinition:
    version
    snapshotRef
    hash

UNAVAILABLE:
  status
  reason =
    CANONICAL_OBJECTIVE_REQUIRED
    | LEGACY_OBJECTIVE_UNRESOLVED
    | CAMPAIGN_DEFINITION_INTEGRITY_INVALID
```

Do not rename, flatten, widen, locally reinterpret, or partially copy it. C03 V2 copies the complete owner-produced union.

### Gate B — C03 ApplicationSnapshot V2 executable fidelity

Define the C03-owned candidate against exact executable C03 truth:

- contract identity is `C03_APPLICATION_SNAPSHOT_V2`;
- submission status is `PENDING`, with captured status/version; `SUBMITTED` remains a domain-event name;
- canonical identity uses `brandProfileId`, `subjectCreatorProfileId`, `subjectCreatorWorkspaceId`, `campaignId`, `canonicalCampaignAssetId`, and `canonicalBriefId`, plus preserved actor identity where applicable;
- V1 contexts remain present and immutable: `campaignContext`, `campaignAssetContext`, `briefContext`, `commercialContext`, `creatorIdentity`, optional `actorContext`, optional `attributionContext`, and `createdAt`;
- Match fields are additive and accessed through a strict Match allowlist. Commercial/actor/attribution contexts never become scoring inputs;
- V1 snapshots remain readable and immutable but Match-ineligible. No backfill or reconstruction from mutable Campaign rows;
- snapshot ID/hash construction is single-insert atomic. Preassign the snapshot ID before canonical hashing if the ID participates in the hash; prohibit insert-then-update.

Provide the complete proposed V2 JSON/type shape, canonicalization/hash inputs, uniqueness/idempotency fence, submission transaction ordering, and immutable legacy behavior. This remains a C03-SA candidate, not implementation authority.

### Gate C — Campaign targeting handoff and definition integrity

Define a strict Campaign-owned `CampaignTargetingHandoffV1` AVAILABLE/UNAVAILABLE union using actual sources:

```text
UceCampaignTargeting.targetLocations
UceCampaignTargeting.audienceAgeMin
UceCampaignTargeting.audienceAgeMax
UceCampaignTargeting.audienceGender
UceCampaignTargeting.targetingVersion
```

Requirements:

- structured geography preserves `LOCALITY | REGION | COUNTRY | GLOBAL`;
- ages are integers in `13..65` with `min <= max`;
- `ALL` gender projects to `NOT_APPLICABLE`;
- affinity is `UNAVAILABLE` with `ids = []`; do not source it from draft/canonical-definition/wizard JSON;
- targeting values and version are validated against the same canonical Campaign definition and hash fenced by the objective handoff;
- `targetingVersion` alone is insufficient;
- the targeting contract version is frozen in-band or unambiguously by `C03_APPLICATION_SNAPSHOT_V2`;
- distinguish output names from persistence names;
- C03 copies the owner-produced union without interpreting raw Campaign rows.

Identify exact unavailable reasons and mutually exclusive precedence. Do not implement this handoff.

### Gate D — nonblocking Application and reliable trigger ownership

Match objective, targeting, donor, model, or runtime availability never prevents a valid Application submission.

Do not claim an existing Match consumer/outbox. Current C03 has a `SUBMITTED` `ApplicationDomainEvent` and notification-outbox behavior, but no accepted Match-ready consumer was established.

Define the future boundary precisely:

- C03 V2 transactionally persists its immutable snapshot and a durable Match-ready signal/outbox under separately authorized C03 work;
- Applicant Match later owns the idempotent consumer and request service;
- signal payload is stable identity/fence data, not a donor manifest;
- recovery uses accepted outbox/shared-runtime patterns, with no GET execution and no second scheduler;
- post-submission enqueue/consumer failure does not roll back or reopen the Application.

### Gate E — Match lifecycle and terminal Application race

Match lifecycle is exactly:

```text
PROCESSING | READY | UNAVAILABLE
```

Remove terminal Match `PARTIAL` everywhere. A bounded per-item semantic label named `PARTIAL`, if retained, must be explicitly non-lifecycle and cannot leak into Match state.

Before each dependency inspection, manifest freeze, calculation acceptance and publication, require the Application to equal captured `PENDING` status/version. Treat every non-`PENDING` executable status as a stop:

```text
APPROVED | REJECTED | WITHDRAWN | EXPIRED | SUPERSEDED
```

Use lock/CAS ordering to resolve terminalization versus publication. If terminalization wins: stop waiting, reject late current publication, do not reopen the decision, create no user-visible Match result, and record bounded execution/audit disposition only.

### Gate F — donor-manifest lifecycle ordering

Specify this order:

1. pre-freeze dependency observations are execution metadata only;
2. first coherent readiness or terminal insufficiency triggers atomic manifest-freeze CAS;
3. calculation uses only the frozen manifest and does not retain a database transaction across model/provider work;
4. publication checks the same manifest hash, live execution/lease, captured `PENDING` status/version and no accepted current, then atomically completes immutable graph/current CAS;
5. terminal `UNAVAILABLE` may freeze and publish together if no calculation is required.

Clearly separate dependency-registration/wait metadata from accepted Match provenance. Same request plus same manifest is idempotent. Later donor current is ignored after freeze/accepted result.

### Gate G — dependency wait completeness and load proof

Preserve the accepted versioned 24-hour half-open policy direction, then make it internally complete:

- wait while relevant donors are actively processing and readiness is insufficient;
- freeze immediately at first coherent readiness;
- finalize `UNAVAILABLE` immediately when all relevant donors are terminal and the threshold is mathematically unreachable, even before the horizon;
- optional/irrelevant/unusable donors do not delay;
- check terminal Application state/version at every boundary;
- define deterministic jitter, exact deadline equality, late-start, one-outstanding-retry and bounded technical retry behavior;
- define a CAS-deduplicated event-wake rule. If load math assumes one accepted wake per donor identity, enforce it; otherwise state the true transition cap;
- recompute and show the maximum-attempt formula, including whether the prior `338` bound remains valid;
- zero work after accepted current and zero GET-triggered work.

No second scheduler.

### Gate H — deterministic coverage arithmetic

Make one explicit, globally consistent choice for partially comparable evidence.

If fractional subcriterion coverage exists, specify exact rational numerator/denominator, admitted score weight, dimension coverage and dimension `>= 50%` numeric-readiness calculations. Cover at least required content formats, performance metrics/formats, geography and age.

If fractional subcriterion coverage does not exist, resolve each subcriterion as a whole mutually exclusive evidence state and remove every partial-coverage claim.

In both cases:

- unavailable/missing is never score zero;
- denominator normalization removes unavailable weights exactly;
- overall readiness uses exact rational weighted coverage `>= 60%` and numeric `AUDIENCE_FIT` or `CONTENT_AND_DELIVERABLE_FIT`;
- every deterministic criterion has mutually exclusive state/score precedence and exact boundary fixtures;
- rounding occurs only at the accepted final presentation boundary.

### Gate I — semantic registry mutual exclusivity and explanations

For all seven accepted semantic criteria:

- use provider-neutral structured candidate schemas;
- define bounded per-item classifications;
- define exhaustive, mutually exclusive final score anchors `0 | 25 | 50 | 75 | 100`;
- state evidence minimums, self-declaration caps, conflict precedence, exact threshold equality, canonical sort/order and permutation invariance;
- ensure one-and-only-one final disposition for every accepted candidate;
- provide a compact exhaustive fixture/decision matrix covering all finalization branches;
- keep deterministic explanation selection to the accepted bounded maximum, with stable tie-breaking and no raw provider prose.

Do not add dimensions, weights, inputs, heuristics, model-owned totals, or Product behavior.

### Gate J — semantic/model failure disposition

Separately specify:

```text
adapter unconfigured
malformed/schema-invalid candidate
transient provider failure
retry exhaustion
```

For each, define execution state, retry eligibility, final criterion state, effect on exact coverage/readiness, and terminal conditions. Deterministic evaluators continue to operate. Do not invent heuristic fallback. Production remains fail-closed where a required semantic adapter is unavailable. Fixture/provider-neutral adapters may prove architecture only where the accepted plan permits.

### Gate K — immutable request identity and version bundle

Define canonical serialization and digest construction for the single initial request. Bind at least:

```text
applicationId
immutable snapshot identity/hash
scoring-registry version
semantic-rubric version
performance-normalization version
objective-weight-contract version
wait-policy/processor bundle version where execution-affecting
```

State the unique constraint/idempotency behavior. Same immutable request and frozen manifest replays the same execution/current. Later version changes cannot create re-evaluation, refresh, supersession or another current in V1.

### Gate L — governance sequence

Record the only permitted post-P0 sequence:

1. Campaign SA accepts `CampaignTargetingHandoffV1`.
2. Campaign backend implementation is separately authorized, published and accepted.
3. C03 SA accepts `C03_APPLICATION_SNAPSHOT_V2` and durable Match-ready signal boundary.
4. C03 implementation is separately authorized, published and accepted.
5. Parent accepts the converged immutable Campaign/C03 checkpoint.
6. Applicant Match P1 may then be separately authorized.

Do not authorize or perform any of these implementation phases in this run.

## 5. Cross-cutting invariants

The corrected report must preserve:

- Clarification V1 precedence over conflicting base Product text only where explicit;
- donor-lifecycle neutrality and no Match reacquisition/persistence policy;
- four scored dimensions only and normalized accepted weights;
- Commercial/Work Fit globally not applicable; no Work Preferences, Rate Card, payout/KYC readiness, availability, willingness, usage-right preference or Partnership Ads preference;
- one initial immutable evaluation only; no refresh, re-evaluation, supersession, stale-current or donor-change evaluation;
- objective/Application/donor unavailability never blocks C03 decision actions;
- Campaign Page Applicants only; no Discovery use; Creator visibility none;
- shared Evidence/Observation/processor/generation/component/current/candidate/transition/CAS/execution/provenance architecture; no parallel system;
- optional Portfolio/C04 absence never causes waiting, and C04 prior work is not admitted without accepted privacy-safe authority;
- strict tenant authorization and sensitive/proxy/provider-output fail-closed behavior.

Run a terminology and consistency scan over the whole new report for forbidden or stale vocabulary.

## 6. Circuit breakers

Stop and report an exact blocker without publishing a false-ready report if any of these remain:

- accepted authority/checkpoint mismatch;
- an unresolved Product conflict;
- unsafe or ambiguous tenant/Application/Creator/Campaign identity;
- no immutable C03 snapshot fence can be designed without violating accepted ownership;
- Campaign targeting cannot be projected without Applicant Match interpreting mutable/raw Campaign data;
- shared runtime cannot host the lifecycle without parallel architecture;
- no viable Audience or Content path even fail-closed;
- coverage, wait/load, manifest or score rules remain non-deterministic;
- required owner acceptance is represented as already granted when it is only a candidate.

Temporary donor processing, optional donor absence, missing live credentials and a fail-closed model adapter are not alone circuit breakers.

## 7. Publication boundary

Allowed authority changes only:

1. add `CAMPAIGN_APPLICANT_AI_MATCH_P0_RESUMPTION_CORRECTION_2_REPORT_V1.md`;
2. append one Correction 2 execution entry to `EXECUTION_LEDGER.md`.

Publish as a normal descendant on:

```text
program/campaign-applicant-ai-match-v1-authority
```

Do not rewrite any prior report, prompt or authority. Independently fetch back and verify final SHA/tree, parent/ancestry and report blob equality.

## 8. Prohibitions

Do not:

- modify backend or frontend source;
- create migrations or implementation branches;
- implement Campaign targeting, C03 V2 or Applicant Match;
- begin P1, P2, P3 or P4;
- make live Graph/model/provider calls;
- mutate Meta/OAuth/provider configuration;
- access production data;
- merge development or production;
- deploy.

## 9. Required response

Return exactly this report identifier and every field:

```text
CAMPAIGN_APPLICANT_AI_MATCH_P0_RESUMPTION_CORRECTION_2_EXTERNAL_LOCAL_CODEX_REPORT_V1

RESULT = READY_FOR_APPLICANT_AI_MATCH_TECHNICAL_SA_FINAL_P0_REVIEW

AUTHORITY_INPUT_SHA = <sha>
AUTHORITY_INPUT_TREE = <tree>

EXECUTABLE_OBJECTIVE_HANDOFF_FIDELITY = PASS|FAIL
C03_SNAPSHOT_V2_EXECUTABLE_FIDELITY = PASS|FAIL
TARGETING_SOURCE_AND_DEFINITION_INTEGRITY = PASS|FAIL
NONBLOCKING_APPLICATION = PASS|FAIL
RELIABLE_TRIGGER_OWNERSHIP = PASS|FAIL
MATCH_STATE_FIDELITY = PASS|FAIL
TERMINAL_APPLICATION_FENCE = PASS|FAIL
MANIFEST_LIFECYCLE_ORDERING = PASS|FAIL
WAIT_POLICY_COMPLETENESS_AND_LOAD = PASS|FAIL
DETERMINISTIC_COVERAGE_ARITHMETIC = PASS|FAIL
SEMANTIC_SCORING_MUTUAL_EXCLUSIVITY = PASS|FAIL
SEMANTIC_FAILURE_DISPOSITION = PASS|FAIL
REQUEST_IDENTITY_VERSIONING = PASS|FAIL
GOVERNANCE_SEQUENCE = PASS|FAIL

P0_EVIDENCE_READY = YES|NO
CAMPAIGN_TARGETING_HANDOFF = REQUIRED_PRE_C03_V2_DEPENDENCY
C03_APPLICATION_SNAPSHOT_V2 = REQUIRED_PRE_P1_DEPENDENCY

P1 = NOT_STARTED_NOT_AUTHORIZED
P2 = NOT_STARTED
P3 = NOT_STARTED
P4 = NOT_STARTED

BACKEND_CHANGED = NO
FRONTEND_CHANGED = NO
NEW_MIGRATIONS = NONE

LIVE_GRAPH_CALLS = NONE
LIVE_MODEL_CALLS = NONE
PRODUCTION_DATA_ACCESSED = NO
DEVELOPMENT_MERGE = NOT_PERFORMED
PRODUCTION_MERGE = NOT_PERFORMED
DEPLOYMENT = NOT_PERFORMED

AUTHORITY_REPORT_SHA = <sha>
AUTHORITY_REPORT_TREE = <tree>
AUTHORITY_FETCH_BACK = PASS|FAIL

NEXT_BOUNDARY =
PARENT_PROGRAM_ORCHESTRATOR_AND_APPLICANT_MATCH_TECHNICAL_SA_FINAL_P0_REVIEW_ONLY
```

Every PASS must point to a report section and executable evidence. If any gate fails, set `P0_EVIDENCE_READY = NO`, return the exact blocker, and do not claim readiness or advance implementation.
