# Local Codex Runner — Gate C Publication-Only Recovery V1

CANONICAL_RECONCILIATION_GATE_C_PUBLICATION_ONLY_RECOVERY_V1

## Role

Complete publication of the already implemented and fully validated Gate C Campaign Objectives candidates.

This is a publication-only recovery.

Do not edit source, tests, schema, migrations, configuration tracked by Git, or runtime behavior. Do not rerun tests or databases. If exact candidate continuity is unavailable, stop for Parent review.

## Controlling Parent disposition

~~~text
AUTHORITY_REPOSITORY =
Piyush1087/dummy_tcs

PARENT_DISPOSITION_COMMIT =
ca37da02cd07f1603f8a64f880cb6edcaf2ede28

PARENT_DISPOSITION_PATH =
docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_GATE_C_EMPTY_BACKEND_BRANCH_PUBLICATION_CIRCUIT_BREAKER_PARENT_DISPOSITION_V1.md

PARENT_REVIEW_RESULT =
CIRCUIT_BREAKER_ACCEPTED

AUTHORIZED_ACTION =
PUBLICATION-ONLY RECOVERY
~~~

Verify the exact disposition commit, tree, path, and blob before any commit or push.

Also verify:

~~~text
GATE_C_PREFLIGHT_ACCEPTANCE_COMMIT =
2b14a94ed27633bf39cd42371b7b6b2276b68d7a

GATE_C_TEST_CLEANUP_DISPOSITION_COMMIT =
116ef04d45202351fea235a3847e64addd2fbf6d
~~~

## Mandatory telemetry

Start immediately before the first command:

~~~text
RUN_STARTED_AT_UTC =
RUN_COMPLETED_AT_UTC =
WALL_CLOCK_SECONDS =
ACTIVE_EXECUTION_SECONDS = <if measurable>
COMMAND_COUNT =
LONGEST_COMMAND =
LONGEST_COMMAND_SECONDS =
WAITING_OR_BLOCKED_SECONDS = <if measurable>

AUTHORITY_AND_REMOTE_VERIFICATION_SECONDS =
CANDIDATE_CONTINUITY_SECONDS =
BACKEND_COMMIT_AND_FAST_FORWARD_SECONDS =
FRONTEND_COMMIT_AND_PUBLICATION_SECONDS =
EVIDENCE_PUBLICATION_SECONDS =
~~~

Use `NOT_MEASURABLE` rather than estimating.

## Fail-fast control

Every command that can fail must terminate the phase before the next command.

Use fail-fast shell semantics equivalent to:

~~~text
set -euo pipefail
~~~

or explicit exit-code checks in shells without that syntax.

A failed commit must make a push impossible.

Before each push, explicitly require:

- the commit command returned zero;
- `HEAD` exists;
- `HEAD` differs from its base;
- `HEAD^` equals the exact base;
- `HEAD` has exactly one parent;
- `HEAD^{tree}` equals the pre-commit staged tree;
- the exact path count and allowlist match.

## Repository-scoped Git identity

For each isolated backend, frontend, and authority repository used for commit creation, set only local repository configuration:

~~~text
git config --local user.name "Piyush1087"
git config --local user.email "piyush.p1087@gmail.com"
~~~

Verify the values before committing.

Do not change global or system Git configuration.

Record the final commit author and committer identities.

## Git safety

Use only the isolated candidate worktrees from the immediately preceding run.

Do not touch older or non-isolated reconciliation worktrees.

Do not:

- edit or format files;
- run generators, tests, builds, migrations, or databases;
- fetch with `--all --prune`;
- use mirror-style `+refs/*:refs/*`;
- use a named remote whose bookkeeping can move local heads;
- merge, rebase, cherry-pick, reset, or restore;
- force push;
- delete or recreate the backend remote branch;
- create extra commits.

Push through explicit repository URLs and exact refspecs. Fetch back into independent isolated verification refs or separate fresh verification clones.

## Backend remote precondition

~~~text
REPOSITORY =
Piyush1087/creator-commerce-backend-v2-clone

REMOTE_BRANCH =
reconcile/mvp-canonical-application-v1-gate-c-campaign-objectives-backend

REQUIRED_CURRENT_REMOTE_HEAD =
7883286d8e74b1759518c758c9683fc926374441

REQUIRED_CURRENT_REMOTE_TREE =
faaaa49f82ca93c482bedbb0f9b0cf3385a1bada

REMOTE_BRANCH_DISPOSITION =
EMPTY PUBLICATION AT UNCHANGED GATE B BASE
~~~

Verify this exact remote state immediately before commit and immediately before push.

Any movement is a circuit breaker.

## Backend candidate continuity

Require the isolated backend candidate to have:

~~~text
HEAD =
7883286d8e74b1759518c758c9683fc926374441

BASE_TREE =
faaaa49f82ca93c482bedbb0f9b0cf3385a1bada

TOTAL_CHANGED_PATHS =
27

UNSTAGED_CHANGES =
ZERO AFTER STAGING

UNTRACKED_PATHS_OUTSIDE_ALLOWLIST =
ZERO
~~~

The exact 27 paths must equal the original Gate C 26-path allowlist plus:

~~~text
src/features/brand-payouts/brand-payouts-p1.security.test.ts
~~~

Require:

~~~text
BACKEND_DONOR_SOURCE_BLOBS =
23 / 23 EXACT

MIGRATION_107_BLOB =
a8215f86e2f48c0a7f0f94a4aaad48d745795699

MIGRATION_108_BLOB =
b900744912001e004523d471570f48f6f54c050b

FINAL_SCHEMA_BLOB =
1d9b3a8bf3145d47d326fae88493f7816eef9140

CORRECTED_TEST_BLOB =
b505a6ac26a38f951d0829439f3362543e934a71

MIGRATION_COUNT =
108

ORIGINAL_106_MIGRATIONS_PRESERVED =
YES

C06_PATHS =
UNCHANGED

LEGACY_C06_SERVICE =
REMAINS DELETED
~~~

Verify the trigger migration remains:

~~~text
prisma/migrations/20260912100000_brand_payouts_wave_b_normal_path/migration.sql

BLOB =
05d5fe00c34471b3524cfbe011cf20dc306c103a
~~~

Stage only the exact 27 paths if they are not already staged. Do not modify file content.

Record the staged candidate tree using `git write-tree`.

## Backend commit and normal fast-forward

Create exactly one commit:

~~~text
COMMIT_MESSAGE =
feat(campaign): converge canonical objectives onto Gate B

SOLE_PARENT =
7883286d8e74b1759518c758c9683fc926374441

EXPECTED_CHANGED_PATHS =
27
~~~

After the commit, verify all fail-fast postconditions.

Reverify the remote backend branch is still at the exact base.

Prove the new commit is a direct child and therefore a fast-forward of the remote head.

Push without force using an explicit repository URL and:

~~~text
HEAD:refs/heads/reconcile/mvp-canonical-application-v1-gate-c-campaign-objectives-backend
~~~

Fetch back independently and verify:

- remote branch head;
- commit;
- sole parent;
- tree;
- exact 27 paths;
- all protected blob identities;
- migration count and blobs;
- schema blob;
- corrected test blob;
- C04/C06 preservation.

## Frontend candidate continuity

~~~text
REPOSITORY =
Piyush1087/creator-commerce-frontend-v2-clone

BASE_COMMIT =
b10a23f67ce9a813cd5664e45e31870c6bd2a7e1

BASE_TREE =
ecdcf27c9e4271342c413162bd2993138e4b263c

TARGET_BRANCH =
reconcile/mvp-canonical-application-v1-gate-c-campaign-objectives-frontend

TARGET_BRANCH_PRECONDITION =
ABSENT

TOTAL_CHANGED_PATHS =
19

DONOR_BLOB_MATCHES =
19 / 19

PROTECTED_CAMPAIGN_DETAIL_WORKSPACE_BLOB =
62cd7684410144de816363e0f943e244da2225be
~~~

Require no unstaged or untracked path outside the exact 19-path allowlist.

Stage the exact candidate without changing file content and record the staged tree using `git write-tree`.

Create exactly one commit:

~~~text
COMMIT_MESSAGE =
feat(campaign): converge canonical objectives onto Gate B

SOLE_PARENT =
b10a23f67ce9a813cd5664e45e31870c6bd2a7e1

EXPECTED_CHANGED_PATHS =
19
~~~

Verify all fail-fast postconditions.

Reverify the target branch is absent, push through an explicit URL/refspec without force, and fetch back independently.

Verify branch head, commit, sole parent, tree, exact 19 paths, donor blobs, and protected Campaign Detail Workspace blob.

## Accepted validation to record without rerun

Record that the following validation was executed against the exact candidate trees before this publication recovery:

~~~text
BRAND_PAYOUT_P1_POSTGRESQL =
17 / 17 PASS
CLEAN EXIT

APPEND_ONLY_DELETE_ASSERTION =
PASS
BP_M1_OBLIGATION_DELETE_FORBIDDEN

C06_POSTGRESQL =
1 / 1 PASS

C04_POSTGRESQL =
6 / 6 PASS

BRAND_PAYOUT_WAVE_B_POSTGRESQL =
3 / 3 PASS

CLEAN_DATABASE_0_TO_108 =
PASS

POPULATED_DATABASE_106_TO_108 =
PASS

ORIGINAL_106_MIGRATIONS =
PRESERVED

BACKEND_FULL =
7326 PASSED
955 SKIPPED
ZERO FAILED

BACKEND_LINT_BUILD =
PASS

CAMPAIGN_READINESS =
31 / 31 PASS

INTELLIGENCE_CONTRACT_VERIFY =
PASS

FRONTEND_FOCUSED =
66 / 66 PASS

FRONTEND_FULL =
1417 PASSED
1 SKIPPED
ZERO FAILED

FRONTEND_TYPECHECK_LINT_AUTOSAVE_BUILD =
PASS

RESPONSIVE_KEYBOARD_ACCESSIBILITY =
PASS

INTEGRATED_BROWSER_GATE =
DEFERRED_TO_FINAL_WHOLE_APPLICATION_ACCEPTANCE

ZERO_PROVIDER_CALLS =
PASS

ZERO_UNAUTHORIZED_FINANCIAL_WRITES =
PASS
~~~

Explicitly state these were reused after exact candidate-tree continuity and were not rerun.

## Authority evidence publication

Only after both implementation branches fetch back exactly:

~~~text
REPOSITORY =
Piyush1087/dummy_tcs

BASE_COMMIT =
ca37da02cd07f1603f8a64f880cb6edcaf2ede28

TARGET_BRANCH =
reconcile/mvp-canonical-application-v1-gate-c-campaign-objectives-authority

TARGET_BRANCH_PRECONDITION =
ABSENT

EVIDENCE_PATH =
docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_GATE_C_CAMPAIGN_OBJECTIVES_SEMANTIC_CONVERGENCE_EVIDENCE_V1.md
~~~

Create exactly one evidence document containing:

- controlling Parent acceptance and both circuit-breaker dispositions;
- immutable Gate B bases and accepted donors;
- exact candidate continuity;
- corrected test-harness path and blob;
- proof the append-only trigger/migration remained unchanged;
- all validation results, clearly marked as previously executed and reused;
- the failed empty-branch publication and root cause;
- repository-scoped identity and fail-fast correction;
- exact backend/frontend commits, parents, trees, branches, pathsets, and blob identities;
- backend normal fast-forward proof from the empty base branch;
- independent fetch-back;
- migration/schema/C04/C06 preservation;
- Reporting fail-closed and Campaign Intelligence pause boundaries;
- browser deferral;
- zero provider/financial-write evidence;
- clean final worktrees;
- telemetry, exclusions, and next boundary.

Set repository-scoped identity before creating the evidence commit.

Commit only that file, with sole parent `ca37da02cd07f1603f8a64f880cb6edcaf2ede28`.

Push without force through explicit URL/refspec and independently fetch back. Verify branch head, commit, sole parent, tree, one-file scope, evidence path, and blob.

## Cleanup

After successful independent verification:

- require backend, frontend, and authority publication worktrees to be clean;
- remove only temporary verification refs/clones created by this recovery;
- do not delete the retained remote branches or evidence.

## Circuit breakers

~~~text
PARENT_DISPOSITION_MISMATCH
BACKEND_REMOTE_BRANCH_NOT_AT_EXACT_BASE
FRONTEND_OR_AUTHORITY_BRANCH_COLLISION
CANDIDATE_HEAD_MISMATCH
CANDIDATE_PATHSET_MISMATCH
UNSTAGED_OR_UNTRACKED_DRIFT
PROTECTED_BLOB_MISMATCH
STAGED_TREE_MISMATCH
LOCAL_GIT_IDENTITY_MISMATCH
COMMIT_COMMAND_FAILURE
POST_COMMIT_HEAD_EQUALS_BASE
COMMIT_PARENT_OR_TREE_MISMATCH
BACKEND_UPDATE_NOT_FAST_FORWARD
FORCE_PUSH_OR_BRANCH_DELETE_ATTEMPTED
FRONTEND_OR_AUTHORITY_PUBLICATION_MISMATCH
FETCH_BACK_MISMATCH
SOURCE_TEST_BUILD_OR_DATABASE_COMMAND_EXECUTED
EVIDENCE_SCOPE_EXCEEDED
~~~

If any breaker occurs, stop immediately before the next publication. Preserve already published immutable objects and report the exact partial state.

## Required final report

Return:

~~~text
CANONICAL_RECONCILIATION_GATE_C_PUBLICATION_RECOVERY_RESULT =
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
GIT_IDENTITY_SCOPE =
FAIL_FAST_CONTROL =
BACKEND_REMOTE_PRECONDITION =
FRONTEND_REMOTE_PRECONDITION =
AUTHORITY_REMOTE_PRECONDITION =

BACKEND_CANDIDATE_CONTINUITY =
BACKEND_STAGED_TREE =
BACKEND_COMMIT =
BACKEND_PARENT =
BACKEND_TREE =
BACKEND_CHANGED_PATHS =
BACKEND_AUTHOR =
BACKEND_COMMITTER =
BACKEND_FAST_FORWARD =
BACKEND_REMOTE_HEAD =
BACKEND_FETCH_BACK =

FRONTEND_CANDIDATE_CONTINUITY =
FRONTEND_STAGED_TREE =
FRONTEND_COMMIT =
FRONTEND_PARENT =
FRONTEND_TREE =
FRONTEND_CHANGED_PATHS =
FRONTEND_AUTHOR =
FRONTEND_COMMITTER =
FRONTEND_REMOTE_HEAD =
FRONTEND_FETCH_BACK =

VALIDATION_RERUN =
VALIDATION_REUSE_CONTINUITY =
MIGRATION_COUNT =
FINAL_SCHEMA_BLOB =
CORRECTED_TEST_BLOB =
TRIGGER_MIGRATION_BLOB =
C04_PRESERVED =
C06_PRESERVED =
REPORTING_REMAINS_FAIL_CLOSED =
CAMPAIGN_INTELLIGENCE_REMAINS_PAUSED =
INTEGRATED_BROWSER_GATE =
ZERO_PROVIDER_CALLS =
ZERO_UNAUTHORIZED_FINANCIAL_WRITES =

AUTHORITY_BRANCH =
EVIDENCE_COMMIT =
EVIDENCE_PARENT =
EVIDENCE_TREE =
EVIDENCE_BLOB =
EVIDENCE_PATH =
EVIDENCE_AUTHOR =
EVIDENCE_COMMITTER =
EVIDENCE_FETCH_BACK =

SOURCE_WORKTREES_CLEAN =
BLOCKERS =
NEXT_BOUNDARY =
PARENT_REVIEW_ONLY =
~~~

End after the report. Do not perform Parent acceptance, final whole-application validation, final canonical publication, deployment, or Campaign Intelligence resumption.
