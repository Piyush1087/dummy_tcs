# Local Codex Runner — Gate B C06 Local-Ref Recovery and Evidence Publication V1

CANONICAL_RECONCILIATION_GATE_B_C06_LOCAL_REF_RECOVERY_AND_EVIDENCE_PUBLICATION_V1

## Role and authorization

Act as the bounded recovery and evidence-publication worker for the completed Gate B C06 implementation.

This prompt authorizes:

1. read-only immutable verification of the already published backend/frontend commits and branches;
2. exact local normalization of the two original candidate worktrees under strict preconditions;
3. publication of the missing Gate B authority evidence.

It does not authorize implementation reconstruction, source redesign, backend/frontend commits, remote implementation-branch updates, force pushes, test-driven source edits, migrations, unrelated cleanup, Campaign Objectives, deployment, Creator Chat, Applicant AI Match, or Campaign Performance/Reporting.

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
LOCAL_WORKTREE_RECOVERY_SECONDS =
EVIDENCE_PUBLICATION_SECONDS =
~~~

Use NOT_MEASURABLE rather than estimating.

## Controlling Parent authority

~~~text
REPOSITORY =
Piyush1087/dummy_tcs

PARENT_DISPOSITION_COMMIT =
3053177c3f2844076f1599bf0f3c89361b9bf985

PARENT_DISPOSITION_PATH =
docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_GATE_B_C06_LOCAL_REF_CIRCUIT_BREAKER_PARENT_DISPOSITION_V1.md

PARENT_REVIEW_RESULT =
OPERATIONAL_CIRCUIT_BREAKER_ACCEPTED

REMOTE_IMPLEMENTATION_DISPOSITION =
PRESERVE

NEXT_BOUNDARY =
LOCAL WORKTREE NORMALIZATION
+
GATE B AUTHORITY EVIDENCE PUBLICATION
~~~

Verify the exact commit and path before any mutation.

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

CHANGED_PATH_COUNT =
24

PRISMA_SCHEMA_BLOB =
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

CHANGED_PATH_COUNT =
15

CAMPAIGN_DETAIL_WORKSPACE_BLOB =
62cd7684410144de816363e0f943e244da2225be
~~~

Do not update either remote implementation branch.

## Prior continuity evidence

Before the mirror-style push bookkeeping moved the refs:

~~~text
BACKEND_ORIGINAL_BASE =
b14afa38fb82155ea155beeae2430a1854c089a3

BACKEND_ORIGINAL_MANIFEST_SHA256 =
c8a7c9c55528848caba1cfb644d45e5f2c5dd8a63580b4e16547ea41fe3e3bb7

BACKEND_ORIGINAL_PATCH_SHA256 =
0393deecac8bf3e0232c3be39a9d3d4176159ba04f5a46c277d345d46037452f

FRONTEND_ORIGINAL_BASE =
bdd03e036ccd981fbfc573b58815fd277b9d757c

FRONTEND_ORIGINAL_MANIFEST_SHA256 =
506d2282f4f51c819d9dd94240c38c3423f3db3c839234dfd6a41a4857f57384

FRONTEND_ORIGINAL_PATCH_SHA256 =
15a3a319da59a88a374479b27b21b26b2cb8663db8b6d960766c83dfa0c63ca3
~~~

The published commits, not these former dirty-worktree diffs, are now controlling.

## Phase 1 — immutable remote verification

Use direct repository URLs and isolated refs. Do not use broad fetch --all --tags --prune or a named-remote operation that can move local refs.

Verify:

- Parent disposition commit/path/blob;
- backend commit, tree, sole parent, exact 24-path diff, corrected schema blob, 106 migrations, migration subtree, and remote branch head;
- frontend commit, tree, sole parent, exact 15-path diff, protected CampaignDetailWorkspace blob, and remote branch head;
- C06 final authority a9bd40eeacc7a201c8ad46fdd0436212a9d65399;
- corrected Gate A backend acceptance dbb919f33f888285167685d5489cf9e4f687441f;
- Gate B preflight acceptance 833293602d95dd24a32e44520353879063090933;
- no Gate B authority branch currently exists remotely.

Do not rerun npm, tests, Prisma, PostgreSQL, browser, formatter, or builds. The immutable tested commits are unchanged.

## Phase 2 — exact local worktree normalization

### Frontend original candidate worktree

Before any change, require all:

~~~text
HEAD =
b10a23f67ce9a813cd5664e45e31870c6bd2a7e1

GIT_STATUS =
CLEAN

TREE =
ecdcf27c9e4271342c413162bd2993138e4b263c
~~~

Record the relevant reflog entry showing update by push.

If clean, make no change.

If it is not exactly clean at this commit, stop with FRONTEND_ORIGINAL_WORKTREE_UNEXPECTED_STATE.

### Backend original candidate worktree

Before restoration, require all:

~~~text
HEAD =
7883286d8e74b1759518c758c9683fc926374441

HEAD_TREE =
faaaa49f82ca93c482bedbb0f9b0cf3385a1bada

CHANGED_PATH_COUNT =
1

ONLY_CHANGED_PATH =
prisma/schema.prisma

WORKTREE_SCHEMA_BLOB =
da08f8e8518a67b05b58396cf9069481bde76425

HEAD_SCHEMA_BLOB =
8d5833ca756b837cdaaafdc4fe9c746676d63d8a
~~~

Record:

- porcelain status;
- diff;
- worktree blob;
- HEAD blob;
- reflog entry showing update by push.

Only if every precondition passes, run an exact path-scoped restore of prisma/schema.prisma from HEAD.

Do not use reset, clean, checkout of a branch, stash, rebase, or a recursive restore.

After restoration require:

~~~text
HEAD =
7883286d8e74b1759518c758c9683fc926374441

GIT_STATUS =
CLEAN

WORKTREE_TREE =
faaaa49f82ca93c482bedbb0f9b0cf3385a1bada

SCHEMA_BLOB =
8d5833ca756b837cdaaafdc4fe9c746676d63d8a
~~~

Do not delete either original worktree.

## Accepted validation to record

The evidence must retain the executed results:

~~~text
BACKEND_FOCUSED_TESTS =
63 / 63 PASS

BACKEND_POSTGRESQL =
PASS
POSTGRESQL 16.15 UTC
106 / 106 MIGRATIONS
C06 P6 1 / 1
ZERO CAPTURED READ_PHASE WRITES

BACKEND_FULL_TESTS =
7264 PASSED
955 INFRASTRUCTURE_SKIPPED
ZERO FAILED

BACKEND_LINT =
PASS

BACKEND_BUILD =
PASS

BACKEND_CAMPAIGN_READINESS =
28 / 28 PASS

BACKEND_INTELLIGENCE_CONTRACT_VERIFY =
PASS

FRONTEND_FOCUSED_TESTS =
37 / 37 PASS

FRONTEND_FULL_TESTS =
1417 PASSED
1 SKIPPED
ZERO FAILED

FRONTEND_TYPECHECK =
PASS

FRONTEND_LINT =
PASS
ZERO ERRORS
8 PRE_EXISTING WARNINGS

FRONTEND_AUTOSAVE =
8 / 8 PASS

FRONTEND_BUILD =
PASS

ZERO_FINANCIAL_WRITES =
PASS

ZERO_PROVIDER_CALLS =
PASS

BROWSER_GATE =
DEFERRED_TO_FINAL_WHOLE_APPLICATION_ACCEPTANCE
~~~

State explicitly that these gates were executed before remote publication against the same immutable commits now verified. Do not imply they were rerun during recovery.

## Phase 3 — authority evidence publication

Authority repository:

~~~text
REPOSITORY =
Piyush1087/dummy_tcs

BASE_COMMIT =
3053177c3f2844076f1599bf0f3c89361b9bf985

NEW_BRANCH =
reconcile/mvp-canonical-application-v1-gate-b-c06-authority

EVIDENCE_PATH =
docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_GATE_B_C06_SEMANTIC_CONVERGENCE_EVIDENCE_V1.md
~~~

Create the authority branch from the exact Parent disposition commit, not the prompt-publication commit.

Publish exactly one evidence document containing:

- Parent authorities and prior circuit-breaker records;
- corrected Gate A backend base;
- immutable backend/frontend implementation objects;
- exact 24/15 path manifests;
- protected blobs and migration identities;
- candidate patch reconstruction results;
- executed focused/full/PostgreSQL/lint/build/contract validation;
- zero financial-write and provider-call evidence;
- browser deferral;
- remote branch fetch-back;
- local-ref failure cause and reflog timestamps;
- exact local normalization preconditions and results;
- statement that no implementation commit or test rerun occurred during recovery;
- remaining exclusions and next boundary;
- timing telemetry.

Commit only this document.

Push the authority branch without force using an explicit URL/refspec that cannot move a checked-out local branch.

Fetch it back through a different isolated verification ref. Verify evidence commit, parent, tree, blob, path, and branch head.

## Circuit breakers

Stop without authority publication if any occurs:

~~~text
PARENT_DISPOSITION_MISMATCH
BACKEND_REMOTE_COMMIT_TREE_OR_PARENT_MISMATCH
FRONTEND_REMOTE_COMMIT_TREE_OR_PARENT_MISMATCH
BACKEND_REMOTE_PATHSET_MISMATCH
FRONTEND_REMOTE_PATHSET_MISMATCH
PROTECTED_SCHEMA_BLOB_MISMATCH
MIGRATION_COUNT_OR_SUBTREE_MISMATCH
CAMPAIGN_DETAIL_WORKSPACE_BLOB_MISMATCH
IMPLEMENTATION_REMOTE_BRANCH_MOVED
AUTHORITY_BRANCH_COLLISION
UNSAFE_FETCH_OR_PUSH_REFSPEC
FRONTEND_ORIGINAL_WORKTREE_UNEXPECTED_STATE
BACKEND_ORIGINAL_WORKTREE_UNEXPECTED_STATE
BACKEND_RESTORE_PRECONDITION_MISMATCH
UNAUTHORIZED_LOCAL_PATH_MUTATION
REMOTE_IMPLEMENTATION_BRANCH_UPDATE_ATTEMPTED
EVIDENCE_PUBLICATION_SCOPE_EXCEEDED
EVIDENCE_FETCH_BACK_MISMATCH
~~~

Do not improvise or expand cleanup. Return the exact state and smallest Parent decision.

## Required final report

Return:

~~~text
CANONICAL_RECONCILIATION_GATE_B_C06_RECOVERY_RESULT =
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
BACKEND_REMOTE_BRANCH_HEAD =
BACKEND_CHANGED_PATHS =
BACKEND_SCHEMA_BLOB =
BACKEND_MIGRATION_COUNT =
BACKEND_MIGRATION_SUBTREE =

FRONTEND_REMOTE_INTEGRITY =
FRONTEND_REMOTE_BRANCH_HEAD =
FRONTEND_CHANGED_PATHS =
CAMPAIGN_DETAIL_WORKSPACE_BLOB =

FRONTEND_ORIGINAL_WORKTREE_BEFORE =
FRONTEND_ORIGINAL_WORKTREE_AFTER =
BACKEND_ORIGINAL_WORKTREE_BEFORE =
BACKEND_RESTORED_PATH =
BACKEND_ORIGINAL_WORKTREE_AFTER =
LOCAL_REF_ROOT_CAUSE =

TESTS_RERUN =
ACCEPTED_BACKEND_VALIDATION_RECORDED =
ACCEPTED_FRONTEND_VALIDATION_RECORDED =
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

REMOTE_IMPLEMENTATION_BRANCHES_UPDATED =
SOURCE_WORKTREES_CLEAN =
BLOCKERS =
NEXT_BOUNDARY =
PARENT_REVIEW_ONLY =
~~~

A ready result requires immutable remote verification, exact local normalization, clean original worktrees, bounded authority publication, and fetch-back.

End after the report. Do not begin Campaign Objectives, final canonical publication, deployment, or paused workstreams.
