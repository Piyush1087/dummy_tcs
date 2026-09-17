# Local Codex Runner — Canonical Reconciliation Gate B C06 Read-Only Convergence Preflight V1

CANONICAL_RECONCILIATION_GATE_B_C06_READ_ONLY_CONVERGENCE_PREFLIGHT_V1

## Role and authorization

Act as the bounded read-only preflight worker for Gate B of the Core Platform, Brand Centre, and Creator Centre canonical reconciliation.

This assignment authorizes inspection and analysis only.

~~~text
IMPLEMENTATION =
NOT AUTHORIZED

SOURCE EDITS =
PROHIBITED

BRANCH CREATION_OR_ADVANCEMENT =
PROHIBITED

COMMITS_OR_PUSHES =
PROHIBITED

MIGRATIONS_OR_DATABASE_MUTATION =
PROHIBITED

PROVIDER_CALLS =
PROHIBITED

FINANCIAL_WRITES =
PROHIBITED
~~~

Do not modify any repository. Do not create an evidence branch. Do not start Campaign Objective convergence. Do not resume Applicant AI Match or Campaign Performance/Reporting.

The goal is to produce an implementation-ready semantic convergence plan for the accepted provider-disabled C06 Creator Payouts module on top of the exact Parent-accepted Gate A heads.

## Mandatory execution telemetry

Capture:

~~~text
RUN_STARTED_AT_UTC =
RUN_COMPLETED_AT_UTC =
WALL_CLOCK_SECONDS =
ACTIVE_EXECUTION_SECONDS = <if measurable>
COMMAND_COUNT =
LONGEST_COMMAND =
LONGEST_COMMAND_SECONDS =
WAITING_OR_BLOCKED_SECONDS = <if measurable>
~~~

Use NOT_MEASURABLE instead of estimating.

## Controlling Gate A authority

### Parent acceptance

~~~text
REPOSITORY =
Piyush1087/dummy_tcs

PARENT_ACCEPTANCE_COMMIT =
910c3d4c9696d23f05acbc47d825c84383d86caf

PARENT_ACCEPTANCE_PATH =
docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_GATE_A_PARENT_ACCEPTANCE_V1.md

PARENT_ACCEPTANCE_RESULT =
ACCEPTED
~~~

Verify the commit and path before analysis.

### Gate A evidence

~~~text
EVIDENCE_COMMIT =
7afdcf693f41fea2692d07b873fb99e7e65a948e

EVIDENCE_TREE =
9b2c12b850119ccaf53b446f69472c99503eab57

EVIDENCE_PATH =
docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_GATE_A_BASELINE_PRESERVATION_AND_CORRECTED_CHAIN_EVIDENCE_V4.md

EVIDENCE_BLOB =
5a2b846e1c8e2303ab7e9e607fab0e73e327a4a0
~~~

### Exact Gate A implementation heads

Backend:

~~~text
REPOSITORY =
Piyush1087/creator-commerce-backend-v2-clone

BRANCH_NAVIGATION_ONLY =
reconcile/mvp-canonical-application-v1-backend

COMMIT =
b14afa38fb82155ea155beeae2430a1854c089a3

TREE =
f55aa0b28661ce265ba568261eb951ab78b8b26d

MIGRATION_COUNT =
106
~~~

Frontend:

~~~text
REPOSITORY =
Piyush1087/creator-commerce-frontend-v2-clone

BRANCH_NAVIGATION_ONLY =
reconcile/mvp-canonical-application-v1-frontend

COMMIT =
bdd03e036ccd981fbfc573b58815fd277b9d757c

TREE =
008c07192afa7c6a99d73f67d6df3c5bec83e7e8
~~~

Do not trust movable branch tips. Use exact commits and trees.

## Accepted C06 donor authority

### Final authority publication

~~~text
REPOSITORY =
Piyush1087/dummy_tcs

AUTHORITY_COMMIT =
a9bd40eeacc7a201c8ad46fdd0436212a9d65399

AUTHORITY_PATHS =
docs/c06/creator-payouts/C06_FINAL_ACCEPTANCE_V1.md
docs/c06/creator-payouts/C06_DEVELOPER_HANDOFF_V1.md
docs/c06/creator-payouts/C06_FINAL_EVIDENCE_INDEX_V1.md
docs/c06/creator-payouts/C06_FINAL_EXECUTION_REPORT_V1.md
docs/c06/creator-payouts/C06_EXECUTION_LEDGER_V1.yaml

ACCEPTANCE_SCOPE =
CREATOR_PAYOUT_PROVIDER_DISABLED_ONLY

PRODUCT_LOGIC =
FROZEN_AND_SATISFIED

ARCHITECTURE =
ACCEPTED_AND_SATISFIED

P0_TO_P7 =
ACCEPTED
~~~

Recover and verify the exact commit, tree, paths, and blobs for all controlling C06 records.

### Accepted backend donor

~~~text
REPOSITORY =
Piyush1087/creator-commerce-backend-v2-clone

BRANCH_NAVIGATION_ONLY =
c06/creator-payouts-provider-disabled-v1

COMMIT =
071272891041a0cf187f549c3ed82bba5dcbbb79

TREE =
dc1c01ec3479fb3f14cb698e1e88aaa56db5ef66

HISTORICAL_MIGRATION_COUNT =
86

C06_OWNED_MIGRATIONS =
0
~~~

Known accepted donor lineage:

1. c4e4aa552bba09092fc1b3c25e5cbf95ef9ea73e
2. 6c7612450ddf033a5ce44be761a4b37b05703eb7
3. def87a45a549f400ca94087924874b9ef763a3a9
4. 3e513d90486bbb7a2a24080d031ebe28539eaa3f
5. e9d71162b5d4720a2df3f58d69b4c4a5ce14f2de
6. 071272891041a0cf187f549c3ed82bba5dcbbb79

### Accepted frontend donor

~~~text
REPOSITORY =
Piyush1087/creator-commerce-frontend-v2-clone

BRANCH_NAVIGATION_ONLY =
c06/creator-payouts-provider-disabled-v1

COMMIT =
7f72252fb5cd31f69da9ea59aa9ff81080ac4896

TREE =
c066d0ea3d3ce3842e097d385a657050c38d10e6
~~~

Known accepted donor lineage:

1. 056f91af89eb35db6841e29194464ec93bcff241
2. 5908235d98b4a9ef078c853079ddfa4913e5a5ab
3. 108f0d58ddf3b9bde0a1d3b1d97442e5ff4a954c
4. 7f72252fb5cd31f69da9ea59aa9ff81080ac4896

The structural convergence commits and historical inventory assertions are lineage evidence, not blindly replayable semantic changes.

## Frozen C06 invariants

The convergence plan must preserve all of the following:

- read-only Creator Payout workspace;
- creator-scoped obligations, summaries, history, and detail;
- Owner and Manager read access;
- Assistant denial using non-enumerating behavior;
- fixed-as-of pagination and isolation;
- safe C05 payout-method summary and Manage in Settings link;
- C05 remains sole payout-destination mutation authority;
- PAID_TO_DATE equals settled amount minus coherent processed reversals;
- due provider-disabled payouts return PROVIDER_UNAVAILABLE;
- no timing promise, retry button, manual trigger, or execution claim;
- canonical due dates and existing financial-source reuse;
- no new persistence, Creator ledger, financial hash, or C06 migration;
- zero C06 financial writes;
- zero provider calls;
- legacy Creator Payout service remains deleted;
- Creator Entry/Instagram dependency remains removed;
- provider-disabled boundary remains explicit;
- accepted responsive, keyboard/focus, and accessibility behavior remains planned for validation.

Provider integration, Razorpay Route, provider verification, manual or scheduled payout execution, P3S, P4R/P5R, provider-enabled acceptance, production deployment, and Creator Chat remain excluded.

## Mandatory topology and integrity analysis

### 1. Ref-safe acquisition

Inspect configured fetch refspecs before fetching.

Do not use broad git fetch --all --tags --prune when a clone maps +refs/*:refs/*.

Use immutable SHA fetches, direct repository URLs into isolated verification refs, or fresh clean clones. Do not mutate or delete local branches.

### 2. Immutable verification

Verify:

- Gate A Parent acceptance commit/path/blob;
- Gate A evidence commit/tree/path/blob;
- both exact Gate A commits and trees;
- C06 authority commit and all controlling record paths/blobs;
- both C06 donor commits and trees;
- every listed donor-lineage commit;
- current remote Gate A branch heads equal the exact accepted commits.

Stop if any object is missing or mismatched.

### 3. Topology

For backend and frontend, report:

- Gate A target ancestry;
- C06 donor ancestry;
- exact merge base;
- ahead/behind counts;
- path-level differences;
- commits unique to each side;
- whether any C06 commit is safely replayable as-is;
- which commits are structural lineage only;
- whether semantic reconstruction is required.

Do not infer that a clean textual cherry-pick is semantically safe.

### 4. Semantic donor extraction

Produce an exact C06-only semantic inventory.

Classify every changed path as:

~~~text
TRANSPLANT_EXACTLY
REIMPLEMENT_ON_GATE_A
MERGE_WITH_GATE_A
TEST_ONLY_UPDATE
LINEAGE_ONLY_DO_NOT_REPLAY
ALREADY_PRESENT
RETIRE_OR_DELETE
EXCLUDE
PARENT_DECISION_REQUIRED
~~~

For each path, identify:

- accepted C06 behavior supplied;
- Gate A state;
- collision, if any;
- controlling authority;
- planned target state;
- proposed validation.

Provide separate backend and frontend tables.

## Mandatory collision review

At minimum, resolve or classify these known overlaps.

### Backend

- Creator workspace actor resolution and authorizationVersion.
- Creator Settings team authorization and Gate A capability expansion.
- Creator Payout controller guards and non-enumerating authorization.
- App-module and module-composition topology.
- Creator Home, C03, C04, notifications, and shared home services.
- C05 payout-method summary ownership.
- Existing financial projections, reversals, due dates, and settlement vocabulary.
- Instagram lifecycle versus Intelligence-provider DI separation accepted in Gate A.
- Deletion of src/features/creator-payouts/services/creator-payouts.service.ts.
- Migration assertions written against historical count 86 versus Gate A count 106.

### Frontend

- /creator/payouts currently staged as a temporary Settings redirect versus the accepted C06 workspace mount.
- Creator Entry guard scope and Instagram independence.
- Creator Settings payout-method mutation ownership.
- Creator Home, C03, C04, route, shell, and navigation topology.
- Removal of CreatorBankDetailsDrawer and any legacy payout document-export behavior.
- Gate A correction in CampaignDetailWorkspace must remain byte-identical.
- Responsive behavior at 390, 767, 768, and 1440 pixels.
- Keyboard, focus, and accessibility acceptance.

### Cross-module

- Brand Payouts behavior must remain separate from C06.
- No provider-enabled or payout-execution behavior may leak into C06.
- Campaign Objective vocabulary must remain unchanged in this gate.
- Creator Chat remains deferred.
- Applicant AI Match and Campaign Performance/Reporting remain paused.
- All Gate A modules and 106 migrations remain preserved.

## Migration interpretation

~~~text
GATE_A_MIGRATION_COUNT =
106

C06_OWNED_MIGRATIONS =
0

EXPECTED_GATE_B_MIGRATION_COUNT =
106
~~~

The historical C06 inventory of 86 is acceptance context only.

The preflight must identify every test, fixture, assertion, or document in the donor delta that hardcodes 86 and specify whether it should be target-aware, removed, or excluded.

No migration creation, edit, execution, or database mutation is authorized in this preflight.

## Required implementation plan

Return an implementation plan that is executable in one later bounded Local Codex run if safe.

The plan must specify:

1. exact implementation bases;
2. proposed backend, frontend, and authority branch names;
3. exact path-level mutation allowlists;
4. commit-to-target-path mapping;
5. ordered edit sequence;
6. how accepted C06 behavior will be preserved without importing obsolete topology;
7. exact focused tests;
8. full backend/frontend validation;
9. PostgreSQL validation needed for the read-only financial projections;
10. no-migration proof;
11. provider-call and financial-write negative proof;
12. responsive/accessibility/browser plan;
13. final branch and authority-evidence publication procedure;
14. circuit breakers;
15. effort and prompt-journey estimate.

Do not implement any part of the plan.

## Required validation design

At minimum plan for:

Backend:

- Prisma generate and validate;
- mandatory lint command;
- build;
- C06 focused unit, architecture, authorization, pagination, projection, and PostgreSQL suites;
- C03/C04/Creator Home/Creator Settings/notifications regression suites;
- Brand Payout separation checks;
- full test suite;
- campaign readiness and Intelligence contract verification where Gate A requires them;
- migration count and subtree identity;
- zero provider-call and zero financial-write assertions.

Frontend:

- typecheck;
- lint;
- C06 focused tests;
- Creator Entry/Settings/Home/C03/C04 route and guard regressions;
- full test suite;
- autosave suite where Gate A requires it;
- production build;
- browser/responsive/accessibility plan.

Database:

- disposable PostgreSQL only;
- target migration count 106;
- existing Gate A migration subtree unchanged;
- populated financial-source projection cases needed by C06;
- no C06-owned migration.

If integrated browser infrastructure is unavailable during implementation, the later run must report it explicitly and preserve the final whole-application browser gate. It must not fabricate a pass.

## Required preflight result

Return:

~~~text
CANONICAL_RECONCILIATION_GATE_B_C06_PREFLIGHT_RESULT =
READY_FOR_PARENT_REVIEW | BLOCKED

RUN_STARTED_AT_UTC =
RUN_COMPLETED_AT_UTC =
WALL_CLOCK_SECONDS =
ACTIVE_EXECUTION_SECONDS =
COMMAND_COUNT =
LONGEST_COMMAND =
LONGEST_COMMAND_SECONDS =
WAITING_OR_BLOCKED_SECONDS =

GATE_A_PARENT_ACCEPTANCE_INTEGRITY =
GATE_A_EVIDENCE_INTEGRITY =
GATE_A_BACKEND_HEAD_INTEGRITY =
GATE_A_FRONTEND_HEAD_INTEGRITY =

C06_AUTHORITY_INTEGRITY =
C06_BACKEND_DONOR_INTEGRITY =
C06_FRONTEND_DONOR_INTEGRITY =
C06_DONOR_LINEAGE_INTEGRITY =

BACKEND_TOPOLOGY =
FRONTEND_TOPOLOGY =
SEMANTIC_RECONSTRUCTION_REQUIRED =
WHOLESALE_MERGE_SAFE =
CHERRY_PICK_SAFE =

EXPECTED_GATE_B_MIGRATION_COUNT =
C06_OWNED_MIGRATIONS =
LEGACY_SERVICE_DELETION_PRESERVED =
C05_MUTATION_AUTHORITY_PRESERVED =
PROVIDER_DISABLED_BOUNDARY_PRESERVED =
ZERO_FINANCIAL_WRITES_PLAN =
ZERO_PROVIDER_CALLS_PLAN =

BACKEND_PATH_CLASSIFICATION =
FRONTEND_PATH_CLASSIFICATION =
COLLISIONS =
PARENT_DECISIONS_REQUIRED =

PROPOSED_BACKEND_BRANCH =
PROPOSED_FRONTEND_BRANCH =
PROPOSED_AUTHORITY_BRANCH =
IMPLEMENTATION_SEQUENCE =
VALIDATION_SEQUENCE =

IMPLEMENTATION_EFFORT =
EXPECTED_LOCAL_CODEX_WALL_CLOCK =
EXPECTED_PROMPT_RESPONSE_CYCLES =

IMPLEMENTATION_AUTHORIZED =
NO

SOURCE_WORKTREES_CLEAN =
BLOCKERS =
NEXT_BOUNDARY =
PARENT_REVIEW_ONLY
~~~

Attach:

1. immutable integrity table;
2. topology table;
3. backend path classification;
4. frontend path classification;
5. collision/authority resolution table;
6. commit-to-target-path map;
7. exact implementation sequence;
8. exact validation matrix;
9. circuit breakers;
10. effort and prompt-journey estimate.

## Circuit breakers

Stop without mutation if any occurs:

~~~text
AUTHORITY_POINTER_MISMATCH
GATE_A_HEAD_MISMATCH
C06_DONOR_SHA_OR_TREE_MISMATCH
C06_ACCEPTANCE_RECORD_MISSING
C06_LINEAGE_MISMATCH
MISSING_REQUIRED_OBJECT
UNRESOLVED_PRODUCT_OR_ARCHITECTURE_CONFLICT
FINANCIAL_SOURCE_AUTHORITY_AMBIGUITY
C05_MUTATION_AUTHORITY_CONFLICT
PROVIDER_DISABLED_BOUNDARY_CONFLICT
C06_MIGRATION_REQUIRED
GATE_A_PRESERVATION_CONFLICT
CAMPAIGN_OBJECTIVE_CHANGE_REQUIRED
PAUSED_WORKSTREAM_ACTIVATION_REQUIRED
UNSAFE_FETCH_REFSPEC
WORKTREE_NOT_CLEAN
~~~

A blocker report must identify the exact object, path, authority conflict, and smallest Parent decision needed.

End after the read-only preflight. Do not create branches, edit files, commit, push, run migrations, call providers, or begin C06 implementation.
