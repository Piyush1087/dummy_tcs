# Campaign Applicant AI Match P0 Resumption Correction 2 — External Local Codex Execution V1

Identifier: `CAMPAIGN_APPLICANT_AI_MATCH_P0_RESUMPTION_CORRECTION_2_LOCAL_CODEX_EXECUTION_V1`

## Assignment

Execute one documentation-only correction of the Applicant AI Match P0 resumption evidence. Do not begin implementation.

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

1. fetch and prune the repository;
2. verify the remote authority branch equals the supplied SHA/tree;
3. verify the supplied SHA is a direct descendant of `1d06dbbc994c33ae02cffdcb90065b5dfa90a77f`;
4. use a clean isolated task-owned worktree;
5. stop without mutation on any mismatch.

## 2. Read completely

From the exact launch checkpoint, read:

1. `AGENTS.md`
2. `AI_ENGINEERING_STANDARD.md`
3. `docs/engineering/ai-integration.md`
4. `docs/ai-collaboration/campaign-page/campaign-applicant-ai-match-v1/CAMPAIGN_APPLICANT_AI_MATCH_PRODUCT_AND_CONSUMER_CONTRACT_V1.md`
5. `docs/ai-collaboration/campaign-page/campaign-applicant-ai-match-v1/CAMPAIGN_APPLICANT_AI_MATCH_PRODUCT_CLARIFICATION_V1.md`
6. `docs/ai-collaboration/campaign-page/campaign-applicant-ai-match-v1/CAMPAIGN_APPLICANT_AI_MATCH_TECHNICAL_PREFLIGHT_AND_FINITE_IMPLEMENTATION_PLAN_V1.md`
7. `docs/ai-collaboration/campaign-page/campaign-applicant-ai-match-v1/CAMPAIGN_APPLICANT_AI_MATCH_P0_RESUMPTION_REPORT_V1.md`
8. `docs/ai-collaboration/campaign-page/campaign-applicant-ai-match-v1/CAMPAIGN_APPLICANT_AI_MATCH_P0_RESUMPTION_TECHNICAL_REVIEW_V1.md`
9. `docs/ai-collaboration/campaign-page/campaign-applicant-ai-match-v1/CAMPAIGN_APPLICANT_AI_MATCH_P0_RESUMPTION_CORRECTION_1_REPORT_V1.md`
10. `docs/ai-collaboration/campaign-page/campaign-applicant-ai-match-v1/CAMPAIGN_APPLICANT_AI_MATCH_P0_RESUMPTION_CORRECTION_1_TECHNICAL_FINAL_REVIEW_V1.md`
11. `docs/ai-collaboration/campaign-page/campaign-applicant-ai-match-v1/EXECUTION_LEDGER.md`
12. accepted Campaign canonical-objective authority and implementation reports named by the ledger.

Read the exact executable sources from accepted Campaign backend SHA `3c1c523a178c452023add9745628ecff8a6e5e55`, including:

```text
prisma/schema.prisma
src/features/brand-uce/services/canonical-campaign-definition.ts
src/features/brand-uce/services/canonical-campaign-application-read.service.ts
```

Read additional source only where needed to verify a statement being corrected.

## 3. Authority precedence

Use:

```text
Parent/Product corrections
> frozen Product clarification
> base Product contract where not superseded
> accepted Campaign authority and executable contract
> accepted immutable reports/checkpoints
> repository truth
> historical prose
```

Do not reinterpret Product behavior.

## 4. Required corrections

Publish a new descendant report that satisfies every requirement in:

```text
CAMPAIGN_APPLICANT_AI_MATCH_P0_RESUMPTION_CORRECTION_1_TECHNICAL_FINAL_REVIEW_V1
```

At minimum:

### A. Objective handoff fidelity

- Use the exact executable `CampaignObjectiveHandoffV1` field shape from Campaign backend `3c1c523...`.
- Do not rename, flatten, widen or locally redefine its semantics.
- C03 copies the complete owner-produced AVAILABLE/UNAVAILABLE union.

### B. Targeting source fidelity

- Correct persistence sources to `targetLocations`, `audienceAgeMin`, `audienceAgeMax`, and `audienceGender`.
- Preserve Campaign-owned strict targeting projection and C03 consumer-only behavior.
- Keep affinity unavailable/empty.

### C. Match-state fidelity

- Match states remain only `PROCESSING | READY | UNAVAILABLE`.
- Remove terminal Match `PARTIAL` everywhere.
- A per-item semantic classification `PARTIAL` is permitted but must be explicitly distinguished from Match lifecycle.

### D. Semantic scoring mutual exclusivity

- Replace overlapping qualitative anchor predicates with bounded per-item classifications plus mutually exclusive deterministic aggregation/finalization rules.
- Cover all seven semantic criteria and every `0 | 25 | 50 | 75 | 100` anchor.
- Define conflict precedence, insufficient-evidence behavior, exact boundary rules, canonical order and permutation invariance.
- Include a compact proof table or exhaustive fixture matrix demonstrating one-and-only-one final disposition for accepted candidates.
- Do not introduce new Product dimensions, weights, inputs or lifecycle behavior.

### E. Consistency pass

- Correct every occurrence, not only the highlighted examples.
- Preserve all nonconflicting accepted findings.
- If repository evidence creates a new material conflict, stop and report it rather than inventing a resolution.

## 5. Publication

Allowed authority changes only:

1. add:
   `CAMPAIGN_APPLICANT_AI_MATCH_P0_RESUMPTION_CORRECTION_2_REPORT_V1.md`
2. append the correction execution entry to:
   `EXECUTION_LEDGER.md`

Publish as a normal descendant on:

```text
program/campaign-applicant-ai-match-v1-authority
```

Independently fetch back and verify final SHA/tree equality and required ancestry.

Do not rewrite prior reports or prompts.

## 6. Prohibitions

Do not:

- modify backend or frontend source;
- create migrations;
- implement Campaign targeting or C03 V2;
- begin Applicant Match P1, P2, P3 or P4;
- make live Graph/model/provider calls;
- access production data;
- merge development or production;
- deploy.

## 7. Required response

Return:

```text
CAMPAIGN_APPLICANT_AI_MATCH_P0_RESUMPTION_CORRECTION_2_EXTERNAL_LOCAL_CODEX_REPORT_V1

RESULT = READY_FOR_APPLICANT_AI_MATCH_TECHNICAL_SA_FINAL_P0_REVIEW

AUTHORITY_INPUT_SHA = <sha>
AUTHORITY_INPUT_TREE = <tree>

EXECUTABLE_HANDOFF_CONTRACT_FIDELITY = PASS|FAIL
TARGETING_PERSISTENCE_FIELD_FIDELITY = PASS|FAIL
MATCH_TERMINAL_STATE_FIDELITY = PASS|FAIL
SEMANTIC_SCORING_MUTUAL_EXCLUSIVITY = PASS|FAIL
DEPENDENCY_WAIT_POLICY_INTERNAL_CONSISTENCY = PASS|FAIL

P0_EVIDENCE_READY = YES|NO
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

AUTHORITY_REPORT_SHA = <sha>
AUTHORITY_REPORT_TREE = <tree>
AUTHORITY_FETCH_BACK = PASS|FAIL

NEXT_BOUNDARY =
PARENT_PROGRAM_ORCHESTRATOR_AND_APPLICANT_MATCH_TECHNICAL_SA_FINAL_P0_REVIEW_ONLY
```

If any required gate fails, return the exact blocker and do not claim P0 evidence ready.
