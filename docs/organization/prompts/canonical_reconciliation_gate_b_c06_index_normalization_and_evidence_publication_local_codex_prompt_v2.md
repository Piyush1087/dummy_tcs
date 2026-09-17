# Local Codex Runner — Gate B C06 Index Normalization and Evidence Publication V2

CANONICAL_RECONCILIATION_GATE_B_C06_INDEX_NORMALIZATION_AND_EVIDENCE_PUBLICATION_V2

## Role and authorization

Complete the already validated Gate B C06 recovery.

This prompt authorizes exactly:

1. immutable re-verification of the published Gate B backend/frontend commits;
2. exact local Git-index normalization of one backend P6 test path;
3. exact index-and-worktree normalization of the backend Prisma schema from immutable HEAD;
4. publication of the missing Gate B authority evidence.

No implementation edit, backend/frontend commit, remote implementation update, test rerun, build rerun, migration, provider call, financial write, unrelated cleanup, Campaign Objective work, deployment, Creator Chat, Applicant AI Match, or Campaign Performance/Reporting work is authorized.

## Mandatory telemetry

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

IMMUTABLE_VERIFICATION_SECONDS =
INDEX_NORMALIZATION_SECONDS =
SCHEMA_NORMALIZATION_SECONDS =
EVIDENCE_PUBLICATION_SECONDS =
~~~

Use NOT_MEASURABLE rather than estimating.

## Controlling Parent authority

~~~text
REPOSITORY =
Piyush1087/dummy_tcs

PARENT_DISPOSITION_COMMIT =
cfed2a3f9bac9796821b3e73bb2ac5060b4c4317

PARENT_DISPOSITION_PATH =
docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_GATE_B_C06_INDEX_STATE_CIRCUIT_BREAKER_PARENT_DISPOSITION_V1.md

PARENT_REVIEW_RESULT =
OPERATIONAL_CIRCUIT_BREAKER_ACCEPTED

NEXT_BOUNDARY =
EXACT TWO_PATH LOCAL NORMALIZATION
+
GATE B AUTHORITY EVIDENCE PUBLICATION
~~~

Verify the exact commit and path before local mutation.

## Immutable implementation objects

Backend:

~~~text
REPOSITORY =
Piyush1087/creator-commerce-backend-v2-clone

REMOTE_BRANCH =
reconcile/mvp-canonical-application-v1-gate-b-c06-backend

COMMIT =
7883286d8e74b1759518c758c9683fc926374441

TREE =
faaaa49f82ca93c482bedbb0f9b0cf3385a1bada

SOLE_PARENT =
36f9142c553af6eeecacc03977853951b7246b77

CHANGED_PATHS =
24

SCHEMA_BLOB =
8d5833ca756b837cdaaafdc4fe9c746676d63d8a

MIGRATION_COUNT =
106

MIGRATION_SUBTREE =
3894d6d2009fdbdf6bce94708d955c24cf5804ce
~~~

Frontend:

~~~text
REPOSITORY =
Piyush1087/creator-commerce-frontend-v2-clone

REMOTE_BRANCH =
reconcile/mvp-canonical-application-v1-gate-b-c06-frontend

COMMIT =
b10a23f67ce9a813cd5664e45e31870c6bd2a7e1

TREE =
ecdcf27c9e4271342c413162bd2993138e4b263c

SOLE_PARENT =
bdd03e036ccd981fbfc573b58815fd277b9d757c

CHANGED_PATHS =
15

CAMPAIGN_DETAIL_WORKSPACE_BLOB =
62cd7684410144de816363e0f943e244da2225be
~~~

Use direct repository URLs into isolated refs for remote verification. Do not use named-remote fetch or push operations.

Verify the remote branches and all immutable fields above before normalization.

## Exact original-worktree preconditions

Frontend original worktree must remain:

~~~text
HEAD =
b10a23f67ce9a813cd5664e45e31870c6bd2a7e1

TREE =
ecdcf27c9e4271342c413162bd2993138e4b263c

STATUS =
CLEAN
~~~

Make no frontend change.

Backend original worktree must have:

~~~text
HEAD =
7883286d8e74b1759518c758c9683fc926374441

HEAD_TREE =
faaaa49f82ca93c482bedbb0f9b0cf3385a1bada

STATUS_PATHS =
prisma/schema.prisma
src/features/creator-payouts/creator-payouts-p6.postgres.test.ts

NO_OTHER_STATUS_PATH =
YES
~~~

Record porcelain-v2 status, staged diff, unstaged diff, HEAD blobs, index blobs, worktree blobs, and the relevant update-by-push reflog entry before mutation.

## Phase 1 — P6 index-only normalization

Path:

~~~text
src/features/creator-payouts/creator-payouts-p6.postgres.test.ts
~~~

Require:

~~~text
HEAD_BLOB =
cd9996bc2757a6d754d020d0c054ffe05c166f30

WORKTREE_BLOB =
cd9996bc2757a6d754d020d0c054ffe05c166f30

INDEX_BLOB =
95cff3190e1751a509f899d6fee7724bd42983a0
~~~

Confirm:

- staged delta is exactly 13 deleted lines;
- unstaged delta restores exactly the same 13 lines;
- no other P6 content difference exists.

Only then normalize the index entry from HEAD using a path-scoped staged restore equivalent to:

~~~text
git restore --source=HEAD --staged -- src/features/creator-payouts/creator-payouts-p6.postgres.test.ts
~~~

Do not include --worktree for this path.

Afterward require:

~~~text
HEAD_BLOB =
cd9996bc2757a6d754d020d0c054ffe05c166f30

INDEX_BLOB =
cd9996bc2757a6d754d020d0c054ffe05c166f30

WORKTREE_BLOB =
cd9996bc2757a6d754d020d0c054ffe05c166f30

P6_STATUS =
CLEAN
~~~

## Phase 2 — schema index-and-worktree normalization

Path:

~~~text
prisma/schema.prisma
~~~

Require:

~~~text
HEAD_BLOB =
8d5833ca756b837cdaaafdc4fe9c746676d63d8a

WORKTREE_BLOB =
da08f8e8518a67b05b58396cf9069481bde76425

INDEX_BLOB_ALLOWED =
da08f8e8518a67b05b58396cf9069481bde76425
OR
8d5833ca756b837cdaaafdc4fe9c746676d63d8a
~~~

Inspect and record the exact index blob and both staged/unstaged schema diffs.

Any third blob identity or any delta beyond the already accepted three legacy-field difference is a circuit breaker.

Only after those checks normalize both index and worktree from HEAD using an exact path-scoped restore equivalent to:

~~~text
git restore --source=HEAD --staged --worktree -- prisma/schema.prisma
~~~

Afterward require:

~~~text
HEAD_BLOB =
8d5833ca756b837cdaaafdc4fe9c746676d63d8a

INDEX_BLOB =
8d5833ca756b837cdaaafdc4fe9c746676d63d8a

WORKTREE_BLOB =
8d5833ca756b837cdaaafdc4fe9c746676d63d8a

SCHEMA_STATUS =
CLEAN
~~~

Then require the complete backend original worktree status to be clean at HEAD 7883286d8e74b1759518c758c9683fc926374441.

Do not delete either worktree.

## Accepted validation to record without rerun

Record that these results were executed against the exact immutable published commits before publication:

~~~text
BACKEND_FOCUSED =
63 / 63 PASS

BACKEND_POSTGRESQL =
PASS
POSTGRESQL 16.15 UTC
106 / 106 MIGRATIONS
C06 P6 1 / 1
ZERO CAPTURED READ_PHASE WRITES

BACKEND_FULL =
7264 PASSED
955 INFRASTRUCTURE_SKIPPED
ZERO FAILED

BACKEND_LINT_BUILD =
PASS

CAMPAIGN_READINESS =
28 / 28 PASS

INTELLIGENCE_CONTRACT_VERIFY =
PASS

FRONTEND_FOCUSED =
37 / 37 PASS

FRONTEND_FULL =
1417 PASSED
1 SKIPPED
ZERO FAILED

FRONTEND_TYPECHECK_LINT_BUILD =
PASS

FRONTEND_AUTOSAVE =
8 / 8 PASS

ZERO_FINANCIAL_WRITES =
PASS

ZERO_PROVIDER_CALLS =
PASS

BROWSER_GATE =
DEFERRED_TO_FINAL_WHOLE_APPLICATION_ACCEPTANCE
~~~

Do not claim these were rerun during normalization.

## Authority evidence publication

~~~text
REPOSITORY =
Piyush1087/dummy_tcs

BASE_COMMIT =
cfed2a3f9bac9796821b3e73bb2ac5060b4c4317

NEW_BRANCH =
reconcile/mvp-canonical-application-v1-gate-b-c06-authority

EVIDENCE_PATH =
docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_GATE_B_C06_SEMANTIC_CONVERGENCE_EVIDENCE_V1.md
~~~

Before branch creation, verify the authority branch is absent remotely.

Create it from the exact Parent disposition commit, not the prompt-publication commit.

Publish exactly one evidence document containing:

- all Parent authorities and correction/circuit-breaker records;
- exact backend/frontend implementation commits, parents, trees, and pathsets;
- protected schema, migration, and frontend blobs;
- candidate reconstruction and validation evidence;
- PostgreSQL and zero-write proof;
- provider-disabled and C05 boundaries;
- browser deferral;
- original mirror-style push root cause and reflog timestamp;
- first recovery precondition failure;
- P6 HEAD/index/worktree identities before and after;
- schema HEAD/index/worktree identities before and after;
- clean final local worktree states;
- explicit statement that no test/build/implementation rerun or remote implementation update occurred;
- exclusions, next boundary, and telemetry.

Commit only that document.

Push through an explicit repository URL/refspec without force. Do not use a named remote whose push bookkeeping can move local refs.

Fetch back through a separate isolated verification ref and verify:

- authority branch head;
- evidence commit;
- sole parent;
- tree;
- evidence path;
- blob;
- one-file scope.

## Circuit breakers

Stop without authority publication if any occurs:

~~~text
PARENT_DISPOSITION_MISMATCH
BACKEND_OR_FRONTEND_REMOTE_MOVED
IMMUTABLE_OBJECT_MISMATCH
FRONTEND_ORIGINAL_WORKTREE_NOT_CLEAN
BACKEND_HEAD_OR_STATUS_PATH_MISMATCH
P6_HEAD_INDEX_OR_WORKTREE_BLOB_MISMATCH
P6_DIFF_NOT_EXACTLY_REVERSING_13_LINES
P6_WORKTREE_MUTATION_REQUIRED
SCHEMA_HEAD_WORKTREE_OR_INDEX_BLOB_MISMATCH
SCHEMA_DIFF_EXCEEDS_ACCEPTED_THREE_FIELDS
UNAUTHORIZED_LOCAL_PATH_MUTATION
BACKEND_NOT_CLEAN_AFTER_NORMALIZATION
AUTHORITY_BRANCH_COLLISION
UNSAFE_FETCH_OR_PUSH_REFSPEC
REMOTE_IMPLEMENTATION_UPDATE_ATTEMPTED
EVIDENCE_SCOPE_EXCEEDED
EVIDENCE_FETCH_BACK_MISMATCH
~~~

Do not improvise, rerun implementation, or expand local cleanup.

## Required final report

Return:

~~~text
CANONICAL_RECONCILIATION_GATE_B_C06_INDEX_RECOVERY_RESULT =
READY_FOR_PARENT_REVIEW | CIRCUIT_BREAKER

RUN_STARTED_AT_UTC =
RUN_COMPLETED_AT_UTC =
WALL_CLOCK_SECONDS =
ACTIVE_EXECUTION_SECONDS =
COMMAND_COUNT =
LONGEST_COMMAND =
LONGEST_COMMAND_SECONDS =
WAITING_OR_BLOCKED_SECONDS =

PARENT_DISPOSITION_INTEGRITY =
BACKEND_REMOTE_INTEGRITY =
FRONTEND_REMOTE_INTEGRITY =
REMOTE_IMPLEMENTATION_BRANCHES_UPDATED =

FRONTEND_ORIGINAL_WORKTREE =
BACKEND_ORIGINAL_HEAD =
BACKEND_STATUS_PATHS_BEFORE =

P6_HEAD_BLOB_BEFORE =
P6_INDEX_BLOB_BEFORE =
P6_WORKTREE_BLOB_BEFORE =
P6_INDEX_NORMALIZATION =
P6_HEAD_INDEX_WORKTREE_AFTER =
P6_STATUS_AFTER =

SCHEMA_HEAD_BLOB_BEFORE =
SCHEMA_INDEX_BLOB_BEFORE =
SCHEMA_WORKTREE_BLOB_BEFORE =
SCHEMA_NORMALIZATION =
SCHEMA_HEAD_INDEX_WORKTREE_AFTER =
SCHEMA_STATUS_AFTER =

BACKEND_ORIGINAL_WORKTREE_AFTER =
TESTS_RERUN =
ACCEPTED_VALIDATION_RECORDED =
ZERO_FINANCIAL_WRITES =
ZERO_PROVIDER_CALLS =
BROWSER_GATE =

AUTHORITY_BRANCH =
EVIDENCE_COMMIT =
EVIDENCE_PARENT =
EVIDENCE_TREE =
EVIDENCE_BLOB =
EVIDENCE_PATH =
EVIDENCE_FETCH_BACK =

SOURCE_WORKTREES_CLEAN =
BLOCKERS =
NEXT_BOUNDARY =
PARENT_REVIEW_ONLY =
~~~

A ready result requires exact two-path normalization, clean original worktrees, immutable remote branches, bounded authority evidence publication, and fetch-back.

End after the report. Do not begin Campaign Objectives, final canonical publication, deployment, or paused workstreams.
