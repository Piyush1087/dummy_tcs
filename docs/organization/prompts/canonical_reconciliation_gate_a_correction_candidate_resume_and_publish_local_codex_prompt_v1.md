# Local Codex Prompt — Gate A Correction Candidate Resume and Publish V1

## Role and authorization

Resume the immediately preceding bounded correction run in the same local execution environment.

The prior run completed and validated the exact 18-file backend correction candidate but stopped before committing or publishing because the immutable frontend target contained one pre-existing lint error. Parent review determined that the frontend error is a semantics-neutral unused import.

This prompt authorizes only:

1. integrity verification of the preserved backend candidate;
2. one exact frontend lint correction;
3. backend and frontend revalidation;
4. immutable publication of both correction candidates;
5. publication of combined implementation evidence;
6. a stop for Parent review.

This prompt does **not** authorize reconstructing a missing or altered backend candidate, expanding either code scope, rerunning Gate A, creating main reconciliation branches, converging C06 or Campaign Objectives, resuming Campaign Intelligence, deployment, or live provider calls.

## Mandatory preservation rule

The validated backend candidate currently exists only as uncommitted changes on local branch:

```text
correction/canonical-reconciliation-gate-a-backend-boundaries-v1
```

Do not clean, reset, checkout over, stash-drop, rebase, or regenerate that worktree.

If the preserved branch/worktree or any expected candidate path is missing or does not match the reported candidate blob prefix, stop with:

```text
BACKEND_CANDIDATE_STATE_MISSING_OR_CHANGED
```

Do not recreate it from memory or silently rerun the prior implementation.

## Repositories and immutable bases

### Backend

```text
REPOSITORY =
Piyush1087/creator-commerce-backend-v2-clone

BASE_COMMIT =
da1d19d15198699465040c32ce075b6be1c85faf

BASE_TREE =
560e2b90e95c3456ac7eef7ce9351861ab04a576

LOCAL_BRANCH =
correction/canonical-reconciliation-gate-a-backend-boundaries-v1

REMOTE_BRANCH_TO_CREATE =
correction/canonical-reconciliation-gate-a-backend-boundaries-v1
```

### Frontend

```text
REPOSITORY =
Piyush1087/creator-commerce-frontend-v2-clone

BASE_COMMIT =
95058a5dd6d4e89e8c65172da4d71cfe63c03018

BASE_TREE =
4e0c9906d5de1b6d03bfa74a7b5683c920d67a61

CORRECTION_BRANCH =
correction/canonical-reconciliation-gate-a-frontend-lint-v1
```

### Authority

```text
REPOSITORY =
Piyush1087/dummy_tcs

BASE_COMMIT =
346ae2a5ec58506870036db832223c996311fc29

BASE_TREE =
215528f9b1e077f576ef29e5b61119b08d398107

EVIDENCE_BRANCH =
reconcile/mvp-canonical-application-v1-gate-a-correction-authority

EVIDENCE_PATH =
docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_GATE_A_CORRECTION_CANDIDATE_EVIDENCE_V1.md
```

The controlling register blob remains:

```text
c9e0343794aad4a46e27882b58b98381dd4c9dcf
```

## Prior run result

```text
CORRECTION_IMPLEMENTATION_RESULT =
CIRCUIT_BREAKER

BACKEND_CORRECTION =
IMPLEMENTED_AND_VALIDATED_LOCALLY

BACKEND_CHANGED_PATHS =
18 EXACT

BACKEND_FOCUSED_TESTS =
83 PASSED

BACKEND_FULL_TESTS =
7,240 PASSED / 954 SKIPPED / ZERO FAILED

BACKEND_LINT_BUILD_CAMPAIGN_INTELLIGENCE_GATES =
PASS

CLEAN_DATABASE_106 =
PASS

POPULATED_DATABASE_94_TO_106 =
PASS

MIGRATION_95_TO_106_ASSERTIONS =
PASS

FRONTEND_TYPECHECK_TESTS_AUTOSAVE_BUILD =
PASS

FRONTEND_LINT =
FAIL — unused PUBLIC_ROUTES import only

PUBLICATION =
NOT_STARTED
```

Run timestamps for the prior evidence:

```text
PRIOR_RUN_STARTED_AT_UTC =
2026-09-17T05:16:54.6357874Z

PRIOR_RUN_COMPLETED_AT_UTC =
2026-09-17T06:26:42.7371703Z

PRIOR_WALL_CLOCK_SECONDS =
4188.101
```

## Gate A0 fixture continuity

The prior run verified and successfully used:

```text
FIXTURE_COMMIT =
7a70d074eb2f3109b697c953bfa8a722bf69caf4

FIXTURE_TREE =
efaa2f0f635788e862b2c39752802c520c3f3b06

SQL_BLOB =
2dc29cfed740ddd2ad4780081f68296f98c20065

SQL_SHA256 =
fe27a4fed67a5cb02b507efc7dc86aaf4a17c2b281ec660f95a92f16bc488706

MIGRATION_94_SNAPSHOT_SHA256 =
e606dde5add59ab5863725390ccffc4fad15545988ffba91062971b234265d99
```

Backend migration inventory remained exactly 106 and its migration subtree was:

```text
3894d6d2009fdbdf6bce94708d955c24cf5804ce
```

Because this continuation permits no backend change, the prior clean/populated database evidence may be reused only after exact candidate continuity and unchanged migration-tree proof. If continuity cannot be proven, rerun the database gates or stop; do not claim reuse.

## Exact preserved backend candidate inventory

The backend worktree must contain exactly these 18 paths with these reported candidate blob prefixes:

| Path | Candidate blob prefix |
|---|---|
| `src/features/brand-intelligence/audience-persona.architecture.test.ts` | `2264b74c` |
| `src/features/brand-intelligence/brand-character.architecture.test.ts` | `d3762f58` |
| `src/features/brand-intelligence/brand-differentiation.architecture.test.ts` | `f7a28d1b` |
| `src/features/brand-intelligence/brand-meaning.architecture.test.ts` | `d9f218c9` |
| `src/features/brand-intelligence/contracts/registry/contract-runtime.registry.test.ts` | `b84fea90` |
| `src/features/brand-intelligence/visual-style.architecture.test.ts` | `462eccb7` |
| `src/features/brand-settings/brand-settings-consumer.module.ts` | `683440ef` |
| `src/features/collaboration/schemas/provision-collaboration.schema.test.ts` | `97aab38d` |
| `src/features/creator-audience/creator-audience.module.ts` | `0650ba72` |
| `src/features/creator-content/creator-content.module.ts` | `c9416e3a` |
| `src/features/creator-home/creator-home.architecture.test.ts` | `b1e82c5a` |
| `src/features/creator-settings/team/creator-team.policy.test.ts` | `89733c32` |
| `src/features/creator-settings/team/creator-workspace-actor.service.test.ts` | `424f448a` |
| `src/features/data-extraction/data-extraction.module.ts` | `c4495f98` |
| `src/features/instagram-intelligence/instagram-intelligence.module.ts` | `277c447a` |
| `src/features/instagram/instagram-intelligence-provider.module.ts` | `624a64ed` |
| `src/features/instagram/instagram-provider-client.module.ts` | `689acd2c` |
| `src/features/notifications/notifications-module-wiring.architecture.test.ts` | `8a6d2eaf` |

Compute each full Git blob ID using the exact current file contents. Require all 18 prefixes to match. Record every full blob ID and a SHA-256 of the complete binary-safe base-to-candidate patch before any other action.

The backend worktree may contain no nineteenth tracked/staged change.

## Exact frontend correction

### Path

```text
src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx
```

### Base blob

```text
5cb7c1ade7fd7aad7421fc4ebcc5b004bd2923cf
```

At the immutable base, the import is:

```tsx
import {
  AUTH_ROUTES,
  PUBLIC_ROUTES,
  publicCampaignPath,
} from "../../auth/constants";
```

`PUBLIC_ROUTES` is never referenced in the component. The exact authorized correction is removal of only that unused imported identifier, producing the equivalent import:

```tsx
import { AUTH_ROUTES, publicCampaignPath } from "../../auth/constants";
```

Formatting may choose an equivalent valid layout. No other token, behavior, route, test, snapshot, style, or file may change.

This correction does not authorize using `PUBLIC_ROUTES` in new behavior. It is removal of dead import syntax only.

## Publication branches

All must be absent remotely before mutation:

```text
BACKEND =
correction/canonical-reconciliation-gate-a-backend-boundaries-v1

FRONTEND =
correction/canonical-reconciliation-gate-a-frontend-lint-v1

AUTHORITY =
reconcile/mvp-canonical-application-v1-gate-a-correction-authority
```

If any exists, inspect and stop with `TARGET_BRANCH_COLLISION`. Never force-update or delete it.

## Timing telemetry

Record:

```text
RUN_STARTED_AT_UTC =
RUN_COMPLETED_AT_UTC =
WALL_CLOCK_SECONDS =
ACTIVE_EXECUTION_SECONDS =
COMMAND_COUNT =
LONGEST_COMMAND =
LONGEST_COMMAND_SECONDS =
BACKEND_CONTINUITY_CHECK_SECONDS =
FRONTEND_IMPLEMENTATION_SECONDS =
BACKEND_REVALIDATION_SECONDS =
FRONTEND_REVALIDATION_SECONDS =
PUBLICATION_SECONDS =
WAITING_OR_BLOCKED_SECONDS =
```

Use `NOT_MEASURABLE` rather than estimating.

## Execution protocol

### Phase 0 — environment and immutable integrity

1. Capture start time before commands.
2. Fetch all remotes without moving worktrees.
3. Verify backend/frontend/authority bases and trees.
4. Verify the controlling register tuple.
5. Verify Gate A0 fixture identities.
6. Confirm all three remote publication branches are absent.
7. Confirm the authority worktree is clean.
8. Confirm the frontend worktree is clean at the exact immutable target.
9. Do not require the backend worktree to be clean; it must contain exactly the intentional candidate.

### Phase 1 — backend candidate continuity

Before editing any repository:

1. Confirm the backend branch name and base ancestry.
2. Confirm HEAD is still `da1d19d15198699465040c32ce075b6be1c85faf`; no backend correction commit exists.
3. Confirm exactly 18 changed/untracked authorized paths.
4. Compute full candidate blob IDs and require every reported prefix.
5. Compute and record the complete patch SHA-256.
6. Run `git diff --check`.
7. Confirm no dependency, lockfile, Prisma schema/migration, generated, provider implementation, financial, or unauthorized file changed.
8. Confirm migration count 106 and migration subtree `3894d6d2009fdbdf6bce94708d955c24cf5804ce`.
9. Confirm all 18 changes still implement:
   - centralized exact registry inventory and processor-specific ownership/exclusion;
   - zero Creator Home persistence ownership;
   - narrow lifecycle versus Intelligence/media provider module separation;
   - active versus legacy-only C04 state proof;
   - exact role/action matrices and Assistant denial.

Any mismatch is a hard stop. Make no attempt to repair the backend candidate in this continuation.

### Phase 2 — frontend correction branch and edit

1. Create the local frontend branch from exact `95058a5dd6d4e89e8c65172da4d71cfe63c03018`.
2. Verify the target file base blob.
3. Remove only `PUBLIC_ROUTES` from the import.
4. Format only the target file using the repository formatter if required.
5. Require the base-to-working-tree diff to contain exactly one path and only the unused-import deletion/format-equivalent import change.
6. Compute and record the candidate blob and patch SHA-256.
7. Confirm no route behavior or runtime expression changed.

### Phase 3 — backend revalidation

Do not edit backend files.

Run:

```text
npm run prisma:generate
npx prisma validate
npm run lint:eslint
npm run build
focused 11-file Vitest suite
npm test
npm run test:campaign-readiness
npm run intelligence:contracts:verify
```

Use repository-supported syntax and the documented clean authority checkout for contract verification.

Required:

- focused suite: at least the previously validated 11 files/83 tests, zero failures;
- full suite: zero failures and no regression from 7,240 passed;
- lint/build/readiness/contract verification pass;
- no new backend blob or patch-hash change after validation;
- provider calls remain zero.

The prior database evidence may be incorporated as `REUSED_WITH_EXACT_CANDIDATE_AND_MIGRATION_CONTINUITY` only if the full blob-prefix, patch SHA-256, and migration-tree checks pass and no backend file changes. Otherwise rerun clean 106 and populated 94→106 or stop.

### Phase 4 — frontend full validation

At the one-file frontend candidate:

```text
npm ci
npm run typecheck
npm run lint
npm test
npm run test:campaign-autosave
npm run build
```

Requirements:

- lint: zero errors;
- typecheck/build: pass;
- tests: zero failures and no regression from 1,408 passed/1 skipped;
- autosave: 8/8;
- exact one-file diff remains;
- no frontend runtime semantic change.

Warnings must be recorded but do not block only if the configured lint command exits successfully and no accepted warning budget is tightened or bypassed.

### Phase 5 — commit both correction candidates locally

Only after Phases 1–4 pass.

#### Backend

1. Recompute all 18 full blob IDs and patch SHA-256; require equality with Phase 1.
2. Commit the exact candidate, preferably as one commit.
3. Require base `da1d19d…` as the sole parent.
4. Record commit, tree, parent, 18 paths, and blobs.
5. Confirm migration subtree and count remain unchanged.

#### Frontend

1. Reconfirm the exact one-file diff.
2. Commit as one commit.
3. Require base `95058a5d…` as the sole parent.
4. Record commit, tree, parent, path, base blob, and corrected blob.

Do not push until both local commits and post-commit tree/path checks pass.

### Phase 6 — publish and fetch back code candidates

1. Push both correction branches without force.
2. Fetch each branch into a fresh namespace.
3. Verify:
   - advertised branch tip;
   - commit/tree/parent;
   - exact path set;
   - every blob;
   - backend migration subtree/count;
   - frontend one-file semantic-neutral diff.
4. Do not create the main Gate A backend/frontend branches.

If one code branch publishes and the other fails, do not rewrite or delete the successful branch. Report `PARTIAL_PUBLICATION`.

### Phase 7 — publish combined authority evidence

After both code fetch-backs pass:

1. Create the authority evidence branch from exact `346ae2a5ec58506870036db832223c996311fc29`.
2. Add exactly the one evidence path.
3. Mark:
   `CORRECTION_CANDIDATE_STATUS = READY_FOR_PARENT_REVIEW`.
4. Include:
   - both run timing records;
   - immutable bases and prior circuit-breaker history;
   - complete backend and frontend commit/tree/parent/path/blob inventories;
   - backend patch SHA-256 and frontend patch SHA-256;
   - before/after Instagram module graph;
   - registry, C04, Creator Home, and role/action proof;
   - backend revalidation;
   - frontend lint correction and validation;
   - prior database proof and exact continuity basis, or rerun result;
   - provider/financial/write assertions;
   - fetch-back proof;
   - explicit statement that historical accepted checkpoints remain immutable;
   - proposed supersession only after Parent acceptance;
   - explicit stop before Gate A V4.
5. Commit and push without force.
6. Fetch back and verify commit/tree/path/blob.

Do not edit the V2 register or any existing acceptance record.

## Circuit breakers

```text
BACKEND_CANDIDATE_STATE_MISSING_OR_CHANGED
BACKEND_BLOB_PREFIX_MISMATCH
BACKEND_PATH_BOUNDARY_MISMATCH
BACKEND_PATCH_CHANGED_DURING_REVALIDATION
FRONTEND_BASE_OR_BLOB_MISMATCH
FRONTEND_CHANGE_EXCEEDS_UNUSED_IMPORT
TARGET_BRANCH_COLLISION
IMMUTABLE_AUTHORITY_MISMATCH
MIGRATION_COUNT_OR_TREE_MISMATCH
BACKEND_FOCUSED_TEST_FAILURE
BACKEND_FULL_TEST_FAILURE
BACKEND_LINT_OR_BUILD_FAILURE
CAMPAIGN_OR_INTELLIGENCE_CONTRACT_FAILURE
FRONTEND_LINT_FAILURE
FRONTEND_TYPECHECK_TEST_AUTOSAVE_OR_BUILD_FAILURE
PROVIDER_CALL_OR_CREDENTIAL_REQUIRED
FINANCIAL_OR_AUTHORIZATION_BEHAVIOR_CHANGE
FETCH_BACK_MISMATCH
WORKTREE_CONTAMINATION
```

Do not weaken lint, tests, TypeScript, formatter, or build configuration.

## Required final response

Return:

```text
CORRECTION_CANDIDATE_PUBLICATION_RESULT =
READY_FOR_PARENT_REVIEW |
CIRCUIT_BREAKER |
PARTIAL_PUBLICATION

RUN_STARTED_AT_UTC =
RUN_COMPLETED_AT_UTC =
WALL_CLOCK_SECONDS =
ACTIVE_EXECUTION_SECONDS =
COMMAND_COUNT =
LONGEST_COMMAND =
LONGEST_COMMAND_SECONDS =
BACKEND_CONTINUITY_CHECK_SECONDS =
FRONTEND_IMPLEMENTATION_SECONDS =
BACKEND_REVALIDATION_SECONDS =
FRONTEND_REVALIDATION_SECONDS =
PUBLICATION_SECONDS =
WAITING_OR_BLOCKED_SECONDS =

BACKEND_CANDIDATE_CONTINUITY =
BACKEND_CHANGED_PATHS =
BACKEND_PATCH_SHA256 =
BACKEND_MIGRATION_COUNT =
BACKEND_MIGRATION_TREE =
BACKEND_FOCUSED_TESTS =
BACKEND_FULL_TESTS =
BACKEND_LINT =
BACKEND_BUILD =
BACKEND_CAMPAIGN_READINESS =
BACKEND_INTELLIGENCE_CONTRACT_VERIFY =
DATABASE_EVIDENCE =

FRONTEND_CORRECTION =
FRONTEND_CHANGED_PATHS =
FRONTEND_PATCH_SHA256 =
FRONTEND_TYPECHECK =
FRONTEND_LINT =
FRONTEND_TESTS =
FRONTEND_AUTOSAVE =
FRONTEND_BUILD =

BACKEND_CORRECTION_BRANCH =
BACKEND_CORRECTION_COMMIT =
BACKEND_CORRECTION_PARENT =
BACKEND_CORRECTION_TREE =
BACKEND_CORRECTION_FETCH_BACK =

FRONTEND_CORRECTION_BRANCH =
FRONTEND_CORRECTION_COMMIT =
FRONTEND_CORRECTION_PARENT =
FRONTEND_CORRECTION_TREE =
FRONTEND_CORRECTION_BLOB =
FRONTEND_CORRECTION_FETCH_BACK =

AUTHORITY_EVIDENCE_BRANCH =
AUTHORITY_EVIDENCE_COMMIT =
AUTHORITY_EVIDENCE_TREE =
AUTHORITY_EVIDENCE_BLOB =
AUTHORITY_EVIDENCE_FETCH_BACK =

PRODUCT_CHANGE = NO
ARCHITECTURE_DECISION_CHANGE = NO
AUTHORIZATION_POLICY_CHANGE = NO
MIGRATION_CHANGE = NO
PROVIDER_BEHAVIOR_CHANGE = NO
FINANCIAL_BEHAVIOR_CHANGE = NO
MAIN_GATE_A_BRANCHES_CREATED = NO
GATE_A_V4_RUN = NO
C06_OR_CAMPAIGN_OBJECTIVES_ENTERED = NO
CAMPAIGN_INTELLIGENCE_REMAINS_PAUSED = YES
SOURCE_WORKTREES_CLEAN =
BLOCKERS =
NEXT_BOUNDARY = PARENT_REVIEW_ONLY
```

Also include exact code/evidence publication tables, validation totals, and stop-boundary confirmation.

A successful publication is still a candidate. Do not declare Parent acceptance and do not start Gate A V4.
