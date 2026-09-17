# Local Codex Runner — Creator Actor Contract Correction V1

CANONICAL_RECONCILIATION_FINAL_GATE_CREATOR_ACTOR_CONTRACT_CORRECTION_V1

## Role

Implement and publish the narrowly bounded frontend application correction authorized by the Parent after the final-validation V2 circuit breaker.

The accepted backend emits `PAYOUT_WORKSPACE_READ`. The accepted C06 authority requires preserving it for Owner and Manager while denying it to Assistant. The accepted frontend omits that action from its shared actor contract, so its correct fail-closed mapper rejects valid backend responses.

Add the accepted action to the frontend contract and add regression coverage. Do not change the mapper, backend, role policy, payout runtime, validation harness, schema, migrations, or lockfile.

Publish the corrected frontend application checkpoint and immutable evidence only if every gate passes. Stop for Parent review.

## Telemetry

Start before the first Git, repository, or validation action.

```text
RUN_STARTED_AT_UTC =
RUN_COMPLETED_AT_UTC =
WALL_CLOCK_SECONDS =
ACTIVE_EXECUTION_SECONDS = <if measurable>
COMMAND_COUNT =
LONGEST_COMMAND =
LONGEST_COMMAND_SECONDS =
WAITING_OR_BLOCKED_SECONDS = <if measurable>

IMMUTABLE_VERIFICATION_SECONDS =
CORRECTION_SECONDS =
FOCUSED_VALIDATION_SECONDS =
FULL_VALIDATION_SECONDS =
PUBLICATION_SECONDS =
CLEANUP_SECONDS =
```

Use `NOT_MEASURABLE` rather than estimating. Record this run for later aggregate reconciliation telemetry; do not estimate overall reconciliation time.

## Controlling Parent disposition

Repository:

```text
Piyush1087/dummy_tcs
```

```text
COMMIT =
2368172c6bd43f991a377cb05966f8df14fa5ddb

PATH =
docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_FINAL_GATE_CREATOR_ACTOR_CONTRACT_MISMATCH_PARENT_DISPOSITION_V1.md

BLOB =
66035e224ab6b62469edfec9a270829f0418b9da
```

Verify the exact commit/path/blob before mutation.

## Immutable application checkpoints

Backend — verification only:

```text
REPOSITORY =
Piyush1087/creator-commerce-backend-v2-clone

COMMIT =
1a99cf3f54df849408c8775b20e78c036ee637c3

TREE =
9679ed60f186220716e948779d3d70dbbf89b39a

CONTRACT_PATH =
src/shared/creator/creator-workspace-actor.contract.ts

CONTRACT_BLOB =
6cf893c95b8f581f64c3576c534dfbeb1f6cb839
```

Frontend — correction base:

```text
REPOSITORY =
Piyush1087/creator-commerce-frontend-v2-clone

COMMIT =
a7c00fb77969a419b31e175d4085b4f574a8bed5

TREE =
aad8832bc4bcd9a6b3721a0e1e9fe39316fd9741

CONTRACT_PATH =
src/shared/creator/creator-workspace-actor.contract.ts

CONTRACT_BLOB =
1fa7c0442d744116a519395af9cc029b8d78e38e

MAPPER_PATH =
src/shared/creator/creator-workspace-actor-mapper.ts

MAPPER_BLOB =
d0cc616e7abea62280aa9876377a127641658ae5

TEST_PATH =
src/shared/creator/creator-workspace-actor-context.test.ts

TEST_BLOB =
e12ad45a3ee2b40f2812507cc491f2ff865e2b31
```

C06 authority:

```text
AUTHORITY_COMMIT =
a9bd40eeacc7a201c8ad46fdd0436212a9d65399

FINAL_ACCEPTANCE_BLOB =
3d12027f1de396ee27490e2bd4c18b9b1ea06657

DEVELOPER_HANDOFF_BLOB =
871661ca42897992c46415ab3e2d25b3819f6cb8

BACKEND_DONOR_COMMIT =
071272891041a0cf187f549c3ed82bba5dcbbb79

BACKEND_DONOR_CONTRACT_BLOB =
3447dffddec1a31196d8d156b3625562bb27a488
```

Verify these immutable identities before mutation.

## Safety and isolation

Use a fresh isolated frontend checkout at exactly:

```text
a7c00fb77969a419b31e175d4085b4f574a8bed5
```

Do not use, modify, clean, reset, stash, commit, or publish from the retained dirty V2 validation-candidate worktrees.

Before editing:

1. fetch by direct repository URL into isolated verification refs;
2. verify the base commit and tree;
3. verify the three frontend blobs;
4. verify the backend contract blob;
5. parse both `CREATOR_WORKSPACE_ACTIONS` arrays and prove their set difference is exactly:

```text
BACKEND_ONLY =
PAYOUT_WORKSPACE_READ

FRONTEND_ONLY =
NONE
```

6. verify the target frontend and authority branches are absent remotely;
7. verify clean tracked and untracked state.

Stop on any mismatch or branch collision.

Avoid broad fetch/prune in mirror-style clones. Use explicit repository URLs and refs.

Set repository-local Git identity only if missing:

```text
Piyush1087 <piyush.p1087@gmail.com>
```

Do not modify global or system Git configuration.

## Authorized frontend correction

Target branch:

```text
correction/mvp-canonical-final-gate-creator-actor-payout-read-v1
```

Sole parent:

```text
a7c00fb77969a419b31e175d4085b4f574a8bed5
```

Exactly two changed paths are authorized:

```text
src/shared/creator/creator-workspace-actor.contract.ts
src/shared/creator/creator-workspace-actor-context.test.ts
```

### Contract change

In `CREATOR_WORKSPACE_ACTIONS`, add exactly:

```text
PAYOUT_WORKSPACE_READ
```

Place it with:

```text
PAYOUT_SETTINGS_READ
PAYOUT_SETTINGS_MANAGE
```

Preserve every existing action, spelling, type, export, comment, and unrelated order.

Do not edit the mapper. Do not accept arbitrary unknown values.

### Regression coverage

Update the existing actor-context test file so it proves:

1. a backend-shaped Owner or Manager response containing `PAYOUT_WORKSPACE_READ` maps through the real mapper/provider to `READY`;
2. the mapped actor context retains `PAYOUT_WORKSPACE_READ`;
3. the existing unknown-action fail-closed proof remains;
4. no frontend role-to-action inference is added;
5. an Assistant is not synthetically granted `PAYOUT_WORKSPACE_READ`.

Prefer extending the existing test fixture and adding one explicit assertion/probe over duplicating production logic.

Do not change expected behavior merely to satisfy a test.

## Validation

Install with the repository lockfile and supported package manager.

Run and require:

1. exact two-path diff;
2. post-correction action-set equality between the frontend contract and accepted backend contract;
3. focused shared Creator actor-context tests;
4. relevant Creator Payout route, guard, and workspace tests discoverable from package scripts/test inventory;
5. full frontend test suite;
6. frontend typecheck;
7. frontend lint with zero errors and no new warning;
8. production build;
9. secret/credential pattern scan over the two-path diff;
10. no production path outside the two authorized files;
11. no lockfile, schema, migration, generated artifact, or validation-support path change.

If a pre-existing unrelated warning exists, record it precisely; do not suppress it.

No browser or database run is required in this correction gate. Runtime B08/B11/B12 proof remains for the subsequent V2 harness resumption.

## Publication

Frontend publication:

```text
REPOSITORY =
Piyush1087/creator-commerce-frontend-v2-clone

BRANCH =
correction/mvp-canonical-final-gate-creator-actor-payout-read-v1

SOLE_PARENT =
a7c00fb77969a419b31e175d4085b4f574a8bed5
```

Create one normal commit containing exactly the two authorized paths.

Before pushing, prove:

- commit has the exact sole parent;
- changed pathset is exactly two;
- mapper blob remains `d0cc616e7abea62280aa9876377a127641658ae5`;
- all validation passed;
- worktree is clean.

Push using an exact refspec without force. Independently fetch into an isolated verification ref and verify commit, parent, tree, both changed blobs, pathset, and branch head.

## Evidence publication

Repository:

```text
Piyush1087/dummy_tcs
```

Branch:

```text
reconcile/mvp-canonical-application-v1-final-gate-creator-actor-contract-correction-authority
```

Sole parent:

```text
2368172c6bd43f991a377cb05966f8df14fa5ddb
```

Evidence path:

```text
docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_FINAL_GATE_CREATOR_ACTOR_CONTRACT_CORRECTION_EVIDENCE_V1.md
```

The evidence commit must change exactly that one file.

Record:

- all authority/checkpoint identities;
- pre- and post-correction action-set comparison;
- exact semantic delta;
- exact two-path blobs and patch hash;
- focused and full validation totals;
- unchanged mapper blob;
- no backend/schema/migration/lockfile/provider/financial/validation-support change;
- frontend commit/parent/tree/branch/fetch-back;
- evidence commit/parent/tree/blob/path/fetch-back;
- telemetry;
- retained V2 candidate worktrees untouched.

Push normally and independently fetch back.

## Absolute prohibitions

Do not:

- change backend source;
- remove `PAYOUT_WORKSPACE_READ`;
- change Owner/Manager/Assistant authorization policy;
- edit or weaken `creator-workspace-actor-mapper.ts`;
- make unknown actions pass;
- change Creator Payout runtime behavior;
- edit any path beyond the two authorized frontend files;
- modify schema, migrations, lockfile, provider or financial behavior;
- touch or publish the V2 validation candidates;
- run or publish V2 representative browser results;
- create a final validation checkpoint;
- run the 30-execution matrix;
- publish final canonical acceptance;
- resume Campaign Performance/Reporting, Applicant AI Match, Marketplace recommendation score, Creator Chat, deployment, or Campaign Intelligence;
- force push, rebase, amend, delete branches, create tags, or create PRs.

## Circuit breakers

Stop without publication on:

- immutable identity mismatch;
- pre-correction action-set difference beyond the single accepted action;
- target branch collision;
- changed path outside the exact two-path allowlist;
- any failed focused/full/typecheck/lint/build gate;
- mapper change;
- lockfile/schema/migration/backend change;
- commit, parent, tree, blob, branch, or fetch-back mismatch;
- unsafe interaction with the retained V2 candidates.

## Required response

Begin with:

```text
CREATOR_ACTOR_CONTRACT_CORRECTION_RESULT =
READY_FOR_PARENT_REVIEW | CIRCUIT_BREAKER
```

Include:

```text
RUN_STARTED_AT_UTC =
RUN_COMPLETED_AT_UTC =
WALL_CLOCK_SECONDS =
ACTIVE_EXECUTION_SECONDS =
COMMAND_COUNT =
LONGEST_COMMAND =
LONGEST_COMMAND_SECONDS =
WAITING_OR_BLOCKED_SECONDS =

PARENT_DISPOSITION_INTEGRITY =
BACKEND_CONTRACT_INTEGRITY =
FRONTEND_BASE_INTEGRITY =
C06_AUTHORITY_INTEGRITY =
PRE_CORRECTION_ACTION_SET_DIFF =
POST_CORRECTION_ACTION_SET_DIFF =

FRONTEND_BRANCH =
FRONTEND_COMMIT =
FRONTEND_PARENT =
FRONTEND_TREE =
FRONTEND_CHANGED_PATHS =
FRONTEND_CONTRACT_BLOB =
FRONTEND_TEST_BLOB =
UNCHANGED_MAPPER_BLOB =
FRONTEND_FETCH_BACK =

FOCUSED_ACTOR_TESTS =
CREATOR_PAYOUT_RELEVANT_TESTS =
FRONTEND_FULL_TESTS =
FRONTEND_TYPECHECK =
FRONTEND_LINT =
FRONTEND_BUILD =
SECRET_SCAN =

BACKEND_CHANGE =
SCHEMA_CHANGE =
MIGRATION_CHANGE =
LOCKFILE_CHANGE =
PROVIDER_CHANGE =
FINANCIAL_CHANGE =
VALIDATION_SUPPORT_CHANGE =

AUTHORITY_BRANCH =
EVIDENCE_COMMIT =
EVIDENCE_PARENT =
EVIDENCE_TREE =
EVIDENCE_BLOB =
EVIDENCE_PATH =
EVIDENCE_FETCH_BACK =

RETAINED_V2_CANDIDATES =
SOURCE_WORKTREES_CLEAN =
BLOCKERS =
NEXT_BOUNDARY =
PARENT REVIEW OF CREATOR ACTOR CONTRACT CORRECTION ONLY
```

Do not claim final whole-application acceptance or V2 harness acceptance.
