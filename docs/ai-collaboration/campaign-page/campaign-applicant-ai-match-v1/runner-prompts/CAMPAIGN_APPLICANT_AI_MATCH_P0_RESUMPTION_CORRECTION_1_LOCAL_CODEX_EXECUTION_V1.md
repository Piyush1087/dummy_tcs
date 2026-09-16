# Campaign Applicant AI Match — P0 Resumption Correction 1 External Local Codex Execution V1

Identifier: `CAMPAIGN_APPLICANT_AI_MATCH_P0_RESUMPTION_CORRECTION_1_LOCAL_CODEX_EXECUTION_V1`

## 1. Assignment

Execute one documentation-only correction to the Applicant AI Match P0 resumption evidence.

```text
AUTHORIZED_WORK =
CORRECT C03 V2 COMPLETE-HANDOFF/NONBLOCKING CONTRACT
+ COMPLETE SEMANTIC SCORING ANCHORS
+ COMPLETE DEPENDENCY-WAIT POLICY VERSIONING
+ PUBLISH CORRECTION REPORT
```

Do not modify or implement backend/frontend source. Stop after the correction report is published.

## 2. Git authority gate

The launch message supplies an immutable SHA/tree for:

```text
Repository = Piyush1087/dummy_tcs
Branch = program/campaign-applicant-ai-match-v1-authority
Path = docs/ai-collaboration/campaign-page/campaign-applicant-ai-match-v1/
```

Verify exact remote branch equality after fetch/prune and require the launch checkpoint to be a normal descendant of:

```text
P0 resumption report SHA = ef244f9cb937b87c3334b3f85b61b5a312a59bc6
P0 resumption report tree = 3bc583c2989eec129c371137423bd35527ed6b84
```

Use fresh task-owned worktrees and preserve unrelated work.

Stop on mismatch:

```text
APPLICANT_AI_MATCH_P0_CORRECTION_1_AUTHORITY_INPUT_MISMATCH
```

## 3. Required reads

Read completely from the exact launch checkpoint:

```text
CAMPAIGN_APPLICANT_AI_MATCH_PRODUCT_AND_CONSUMER_CONTRACT_V1.md
CAMPAIGN_APPLICANT_AI_MATCH_PRODUCT_CLARIFICATION_V1.md
CAMPAIGN_APPLICANT_AI_MATCH_TECHNICAL_PREFLIGHT_AND_FINITE_IMPLEMENTATION_PLAN_V1.md
P0_CURRENT_STATE_DONOR_SCORING_AND_DEPENDENCY_PREFLIGHT.md
CAMPAIGN_APPLICANT_AI_MATCH_P0_RESUMPTION_AUTHORITY_V1.md
CAMPAIGN_APPLICANT_AI_MATCH_P0_RESUMPTION_REPORT_V1.md
CAMPAIGN_APPLICANT_AI_MATCH_P0_RESUMPTION_TECHNICAL_REVIEW_V1.md
EXECUTION_LEDGER.md
runner-prompts/CAMPAIGN_APPLICANT_AI_MATCH_P0_RESUMPTION_LOCAL_CODEX_EXECUTION_V1.md
runner-prompts/CAMPAIGN_APPLICANT_AI_MATCH_P0_RESUMPTION_CORRECTION_1_LOCAL_CODEX_EXECUTION_V1.md
```

Also read the accepted Campaign handoff/Parent-final documents named by the resumption report, repository instructions, and only the current C03/Campaign/shared-runtime source required to validate the correction.

No attachments are required.

## 4. Accepted findings not to reopen

Do not reopen without contradictory current repository evidence:

- Campaign objective unblock and accepted checkpoints;
- authority/convergence DAG;
- donor ownership/reuse/exclusion matrix;
- shared Intelligence reuse and additive `APPLICATION` subject direction;
- four scored dimensions and weight normalization;
- deterministic coverage/rounding arithmetic;
- creator-relative performance direction;
- C03 V2 as an external pre-P1 dependency;
- P1-P4 remaining unauthorized.

## 5. Correct C03 V2 contract

Publish an exact corrected candidate that freezes the full Campaign-owned unions:

```text
CampaignObjectiveHandoffV1 = AVAILABLE | UNAVAILABLE
CampaignTargetingHandoffV1 = AVAILABLE | UNAVAILABLE
```

Preserve every accepted objective unavailable reason without local translation.

Prove in the design that:

- current C03 Application authorization remains authoritative;
- Application submission and its immutable snapshot/event transaction do not fail solely because Match objective/target inputs are unavailable;
- objective unavailable produces an immediate terminal initial Match `UNAVAILABLE`, score null, without donor waiting;
- target unavailable affects only relevant subcriteria/coverage and may still allow READY through other evidence;
- no mutable Campaign reconstruction exists;
- C03 copies owner-produced handoffs under current transaction locks;
- Match receives one immutable V2 snapshot identity/hash/status-version fence;
- terminal Application CAS remains nonblocking and rejects late Match current.

Define exact snapshot and request schemas, availability/reason codes and event/outbox boundary. Distinguish:

```text
C03/Application hard failure
Campaign handoff unavailable
Match subcriterion unavailable
Match terminal UNAVAILABLE
runtime FAILED_NO_CURRENT
```

Do not invent an Application eligibility rule.

## 6. Complete semantic registry

Publish the full corrected `ApplicantAIMatchSemanticRubricV1` for every semantic/hybrid criterion listed in the Technical Review.

For each criterion specify:

- exact bounded input fields and maximum sizes;
- minimum independent Evidence refs/items;
- exact `UNAVAILABLE` and `CONFLICT` rules;
- criterion-specific meanings for scores `0,25,50,75,100`;
- self-declaration cap where applicable;
- evidence needed for scores above `50`;
- strict candidate schema and server finalizer checks;
- canonical ordering, tie-breaking and permutation behavior;
- limitation and reason codes;
- whether evaluation is semantic, deterministic, or hybrid.

Complete `CNT_CONSISTENCY_V1` as a bounded per-item semantic classification followed by deterministic aggregation, or supply a stronger exact alternative consistent with Product.

Define deterministic explanation selection for max two Strengths, Areas to consider and Unknowns. Missing/conflicting evidence must not become a negative fit score or an Area to consider merely because it is missing.

Do not use free-form model prose as authority and do not persist prompts/completions/chain-of-thought.

## 7. Complete wait-policy configuration

Publish an exact `ApplicantAIMatchDependencyWaitPolicyV1` configuration including:

```text
policy version
24-hour horizon boundary
deadline origin
event-first wake-up
shared-runtime retry identity
one outstanding retry invariant
deterministic jitter formula/range
inspection delay sequence/cap
technical retry sequence/count
late-start behavior
terminal-Application checks
manifest-freeze CAS
GET zero-work invariant
post-current zero-work invariant
bounded worst-case inspection count/load
```

Prove it reuses existing execution/lease/backoff primitives and is not a second scheduler.

## 8. Updated sequencing

The corrected finite plan must retain:

```text
P0 final review
→ separate Campaign target-handoff + C03 ApplicationSnapshot V2 dependency packet
→ Parent/Campaign/C03 acceptance
→ Applicant Match P1
→ P2
→ P3
→ P4
```

Applicant Match P1 must not own C03 snapshot schema, submission transaction, snapshot event or C03 migrations.

## 9. Verification

Run only verification necessary for the documentation correction:

- exact Git SHA/tree/ancestry and required-file checks;
- relevant current source inspection;
- type/contract consistency reasoning against current executable shapes;
- arithmetic/permutation worked fixtures needed for new rubric/tie-break rules;
- docs diff check;
- secret/forbidden-artifact scan;
- backend/frontend unchanged proof.

Do not repeat unrelated broad tests or claim unexecuted checks.

## 10. Circuit breakers

Stop for:

```text
APPLICANT_AI_MATCH_P0_CORRECTION_1_AUTHORITY_INPUT_MISMATCH
APPLICANT_AI_MATCH_C03_NONBLOCKING_CONTRACT_CONFLICT
APPLICANT_AI_MATCH_CAMPAIGN_HANDOFF_UNION_CONFLICT
APPLICANT_AI_MATCH_SEMANTIC_RUBRIC_PRODUCT_DECISION_REQUIRED
APPLICANT_AI_MATCH_WAIT_POLICY_RUNTIME_INCOMPATIBLE
APPLICANT_AI_MATCH_ACCEPTED_FINDING_INVALIDATED
```

Missing C03 V2 implementation is not a correction-run circuit breaker.

## 11. Publication

Publish documentation only to the same authority branch and path.

Create:

```text
CAMPAIGN_APPLICANT_AI_MATCH_P0_RESUMPTION_CORRECTION_1_REPORT_V1.md
```

Append `EXECUTION_LEDGER.md`. Do not rewrite prior reports or frozen Product/Plan/prompt files.

Use a normal non-force descendant commit and independently fetch it back.

## 12. Required return

```text
CAMPAIGN_APPLICANT_AI_MATCH_P0_RESUMPTION_CORRECTION_1_EXTERNAL_LOCAL_CODEX_REPORT_V1

RESULT =
READY_FOR_APPLICANT_AI_MATCH_TECHNICAL_SA_FINAL_REVIEW
| <EXACT_CIRCUIT_BREAKER>

AUTHORITY_INPUT_SHA =
AUTHORITY_INPUT_TREE =

C03_V2_COMPLETE_HANDOFF_UNION = PASS | FAIL | NOT_REACHED
C03_V2_NONBLOCKING_APPLICATION = PASS | FAIL | NOT_REACHED
CAMPAIGN_TARGETING_HANDOFF = PASS | FAIL | NOT_REACHED
SEMANTIC_SCORING_REGISTRY_COMPLETENESS = PASS | FAIL | NOT_REACHED
EXPLANATION_SELECTION = PASS | FAIL | NOT_REACHED
DEPENDENCY_WAIT_POLICY_VERSIONING = PASS | FAIL | NOT_REACHED

P0_EVIDENCE_READY = YES | NO
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
DEPLOYMENT = NOT_PERFORMED

AUTHORITY_REPORT_SHA =
AUTHORITY_REPORT_TREE =
AUTHORITY_FETCH_BACK = PASS | FAIL | NOT_REACHED

NEXT_BOUNDARY =
PARENT_PROGRAM_ORCHESTRATOR_AND_APPLICANT_MATCH_TECHNICAL_SA_FINAL_P0_REVIEW_ONLY
```

## 13. Final instruction

Make the smallest complete documentation correction. Do not hide the nonblocking Application boundary behind a fail-closed Match design, and do not leave semantic scoring anchors to implementation-time invention.
