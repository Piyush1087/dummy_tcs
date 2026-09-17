# Local Codex Prompt — Gate A Local Ref Recovery and Correction Candidate Publication V1

## Role and authorization

Resume in the same local environment that contains the preserved 18-file backend correction candidate.

The previous continuation stopped because a nonstandard backend fetch refspec removed the local branch pointer while leaving the candidate files intact. Parent review authorizes one precise local Git-metadata repair:

```text
RECREATE THE MISSING LOCAL BACKEND BRANCH REF
AT THE EXACT IMMUTABLE BASE COMMIT
WITHOUT MODIFYING THE INDEX OR WORKTREE
```

After that repair, complete the previously authorized one-file frontend lint correction, revalidation, immutable publication of both correction candidates, and combined evidence publication.

Stop for Parent review. Do not run Gate A V4.

## Why the ref disappeared

The backend clone uses:

```text
+refs/*:refs/*
```

A broad fetch with prune mapped an absent remote branch directly onto the local branch namespace and deleted:

```text
refs/heads/correction/canonical-reconciliation-gate-a-backend-boundaries-v1
```

The `.git/HEAD` symbolic reference still names that missing ref, so HEAD is dangling. The exact backend base object and all 18 candidate files remain present.

This is a local reference-metadata repair, not source reconstruction.

## Strict prohibitions

Before backend publication:

- do not run `git fetch --all`;
- do not run any fetch with `--prune` in the backend clone;
- do not change the backend remote fetch configuration;
- do not checkout, reset, restore, clean, stash, rebase, merge, cherry-pick, or regenerate the backend worktree;
- do not edit any backend file;
- do not recreate the candidate from memory;
- do not stage or commit until all ref-recovery and blob checks pass.

Use `git ls-remote` for backend remote collision checks. Use a fresh temporary verification clone or an explicit non-local-head verification namespace after publication.

## Immutable bases and publication targets

### Backend

```text
REPOSITORY =
Piyush1087/creator-commerce-backend-v2-clone

BASE_COMMIT =
da1d19d15198699465040c32ce075b6be1c85faf

BASE_TREE =
560e2b90e95c3456ac7eef7ce9351861ab04a576

LOCAL_AND_REMOTE_BRANCH =
correction/canonical-reconciliation-gate-a-backend-boundaries-v1

EXPECTED_MIGRATION_COUNT =
106

EXPECTED_MIGRATION_SUBTREE =
3894d6d2009fdbdf6bce94708d955c24cf5804ce
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

REGISTER_BLOB =
c9e0343794aad4a46e27882b58b98381dd4c9dcf

EVIDENCE_BRANCH =
reconcile/mvp-canonical-application-v1-gate-a-correction-authority

EVIDENCE_PATH =
docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_GATE_A_CORRECTION_CANDIDATE_EVIDENCE_V1.md
```

## Exact backend candidate file/blob authority

After local-ref repair, the base-to-worktree candidate must consist of exactly these paths and complete Git blob IDs:

| Path | Required candidate blob |
|---|---|
| `src/features/brand-intelligence/audience-persona.architecture.test.ts` | `2264b74c2cb8b96e6e553e61845afffe9ca916cb` |
| `src/features/brand-intelligence/brand-character.architecture.test.ts` | `d3762f5891240ffde17947c7145f15b72e16f9a4` |
| `src/features/brand-intelligence/brand-differentiation.architecture.test.ts` | `f7a28d1b61f85a6d28d3133818bb4e8c09f00cf6` |
| `src/features/brand-intelligence/brand-meaning.architecture.test.ts` | `d9f218c9f89ae10fcaf02680d9bab8349aa109b3` |
| `src/features/brand-intelligence/contracts/registry/contract-runtime.registry.test.ts` | `b84fea909398fc8c489474fee3e5890cf44aa8db` |
| `src/features/brand-intelligence/visual-style.architecture.test.ts` | `462eccb7c7a299d8478fac101f3aa6ef093b45af` |
| `src/features/brand-settings/brand-settings-consumer.module.ts` | `683440ef79c56c186f4306c06b0918167cdf933f` |
| `src/features/collaboration/schemas/provision-collaboration.schema.test.ts` | `97aab38d07e4bfe2303154c95dede71beffe00e0` |
| `src/features/creator-audience/creator-audience.module.ts` | `0650ba72e597c11960cfd97d61fa02b7989b58d1` |
| `src/features/creator-content/creator-content.module.ts` | `c9416e3aeefb28f11ec69357f3912de1789e771e` |
| `src/features/creator-home/creator-home.architecture.test.ts` | `b1e82c5a0244d366d2bc8042f68034758714f73f` |
| `src/features/creator-settings/team/creator-team.policy.test.ts` | `89733c3205a050210261acdaf711a85de10c79f8` |
| `src/features/creator-settings/team/creator-workspace-actor.service.test.ts` | `424f448a75183b7ef4020dc7213394e23f4039ba` |
| `src/features/data-extraction/data-extraction.module.ts` | `c4495f9823a46588c89062b49dada1dd6a6d0e74` |
| `src/features/instagram-intelligence/instagram-intelligence.module.ts` | `277c447a73b5bc2fb530d3c8fea5ee896cda7ef4` |
| `src/features/instagram/instagram-intelligence-provider.module.ts` | `624a64ed27deae1902216a6b569b3adc842bf01e` |
| `src/features/instagram/instagram-provider-client.module.ts` | `689acd2c58f78416257ee71a3947b4393eb55981` |
| `src/features/notifications/notifications-module-wiring.architecture.test.ts` | `8a6d2eafbe4c6b1b1298e970c46409d9d6754f27` |

No nineteenth tracked or untracked backend path is allowed.

## Gate A0 evidence continuity

The prior run passed clean 106, populated 94→106, and all migration assertions using:

```text
FIXTURE_COMMIT =
7a70d074eb2f3109b697c953bfa8a722bf69caf4

FIXTURE_TREE =
efaa2f0f635788e862b2c39752802c520c3f3b06

SQL_BLOB =
2dc29cfed740ddd2ad4780081f68296f98c20065

SQL_SHA256 =
fe27a4fed67a5cb02b507efc7dc86aaf4a17c2b281ec660f95a92f16bc488706

MIGRATION_94_SNAPSHOT =
e606dde5add59ab5863725390ccffc4fad15545988ffba91062971b234265d99
```

Database evidence may be reused only if the exact 18 blobs, base, migration count, migration subtree, and post-validation worktree content remain unchanged.

## Exact frontend correction

Authorized path:

```text
src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx
```

Required base blob:

```text
5cb7c1ade7fd7aad7421fc4ebcc5b004bd2923cf
```

Remove only the unused `PUBLIC_ROUTES` identifier from the import from `../../auth/constants`.

Do not introduce any use of `PUBLIC_ROUTES`. Do not change route behavior, JSX, logic, tests, styles, or any other file.

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
LOCAL_REF_RECOVERY_SECONDS =
BACKEND_INTEGRITY_SECONDS =
FRONTEND_CORRECTION_SECONDS =
BACKEND_REVALIDATION_SECONDS =
FRONTEND_REVALIDATION_SECONDS =
PUBLICATION_SECONDS =
WAITING_OR_BLOCKED_SECONDS =
```

Use `NOT_MEASURABLE` rather than guessing.

## Execution protocol

### Phase 0 — read-only recovery preflight

Do not fetch the backend repository.

1. Capture start time.
2. Record the literal backend `.git/HEAD` content.
3. Require it to equal:
   `ref: refs/heads/correction/canonical-reconciliation-gate-a-backend-boundaries-v1`.
4. Require that ref to be absent.
5. Verify the exact base commit object and tree locally.
6. Compare the current index/worktree directly against the explicit base, not `HEAD`.
7. Require exactly the 18 paths above.
8. Compute the Git blob of every current file using repository filters and require every complete blob ID above.
9. Confirm the new provider-module file exists and no other untracked file exists.
10. Run `git diff --check` against the explicit base, including the new file.
11. Use `git ls-remote --heads origin correction/canonical-reconciliation-gate-a-backend-boundaries-v1` and require no remote result.
12. Use `git ls-remote` similarly to confirm the frontend and authority publication branches are absent.
13. Verify frontend and authority bases/trees without broad prune fetches.

If any content or remote-state check fails, stop without creating a ref.

### Phase 1 — recreate only the missing backend local ref

After Phase 0 passes, create exactly:

```text
refs/heads/correction/canonical-reconciliation-gate-a-backend-boundaries-v1
→ da1d19d15198699465040c32ce075b6be1c85faf
```

Use an atomic ref-creation operation that requires the old value to be absent, such as `git update-ref` with a zero/absent expected old object.

Do not switch files or touch the index/worktree.

Immediately verify:

- `git symbolic-ref HEAD` names the recreated ref;
- `git rev-parse HEAD` equals the exact base;
- `git rev-parse HEAD^{tree}` equals the exact base tree;
- status shows exactly the same 18 candidate paths;
- all 18 complete candidate blobs still match;
- no file timestamp/content adjustment tool ran.

Record the ref transaction. If the ref already appears unexpectedly, stop rather than force it.

### Phase 2 — canonical backend candidate fingerprint

1. Produce a sorted manifest of `path<TAB>full-blob-id` for the 18 files.
2. Compute SHA-256 of that exact UTF-8 manifest and record it as `BACKEND_CANDIDATE_MANIFEST_SHA256`.
3. Stage only the 18 paths temporarily or use an index-safe method to generate the full binary patch including the new file.
4. Compute SHA-256 of the canonical base-to-candidate binary patch.
5. Confirm the staged/working content still matches the 18 blobs.
6. Do not commit yet.

### Phase 3 — frontend branch and one-file correction

1. Ensure the frontend worktree is clean at exact base.
2. Create `correction/canonical-reconciliation-gate-a-frontend-lint-v1` locally from the exact base.
3. Verify the target file base blob.
4. Remove only the unused `PUBLIC_ROUTES` import.
5. Format only that file if required.
6. Require exactly one changed path and a semantic diff containing only the import removal/equivalent import formatting.
7. Compute the corrected blob, manifest hash, and binary patch SHA-256.

### Phase 4 — backend revalidation without edits

Do not fetch or edit backend source.

Run repository-supported commands:

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

Requirements:

- focused suite: 11 files / at least 83 tests / zero failures;
- full suite: zero failures and no regression from 7,240 passed;
- lint, build, Campaign readiness, and contract verification pass;
- all 18 full blobs, manifest hash, and patch hash remain unchanged;
- migration count remains 106 and subtree remains exact;
- provider calls remain zero.

If any tool rewrites a backend file, stop unless the resulting blob remains byte-identical.

### Phase 5 — frontend full validation

Run:

```text
npm ci
npm run typecheck
npm run lint
npm test
npm run test:campaign-autosave
npm run build
```

Require:

- typecheck, lint, tests, autosave, and build pass;
- lint has zero errors;
- tests have zero failures and no regression from 1,408 passed / 1 skipped;
- autosave 8/8;
- the diff remains exactly one file and only the import removal;
- no runtime semantic or route change.

### Phase 6 — commit candidates locally

Only after all validation passes.

#### Backend commit

1. Reverify the 18 blobs, manifest hash, patch hash, migration count, and migration subtree.
2. Commit the exact staged 18-file candidate.
3. Prefer one commit with sole parent `da1d19d15198699465040c32ce075b6be1c85faf`.
4. Record commit, tree, parent, paths, and blobs.
5. Confirm the committed blobs equal the required table.

#### Frontend commit

1. Reverify the one-file diff/blob/hash.
2. Commit as one commit with sole parent `95058a5dd6d4e89e8c65172da4d71cfe63c03018`.
3. Record commit, tree, parent, and corrected blob.

Do not push until both commits pass local tree verification.

### Phase 7 — publish without destructive fetch

1. Push each correction branch explicitly and without force.
2. Do not run a broad/pruning fetch in the backend clone.
3. For fetch-back, use a fresh temporary clone/worktree or fetch each remote branch into an isolated verification ref that is not under `refs/heads/*`.
4. Verify remote tip, commit, tree, parent, exact path set, and every blob.
5. Verify the backend remote migration subtree/count and frontend one-file diff.
6. Do not create main Gate A branches.

If only one publication succeeds, preserve it and report `PARTIAL_PUBLICATION`.

### Phase 8 — combined authority evidence

After both code fetch-backs pass:

1. Create the authority branch from exact base.
2. Add only:
   `docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_GATE_A_CORRECTION_CANDIDATE_EVIDENCE_V1.md`.
3. Set `CORRECTION_CANDIDATE_STATUS = READY_FOR_PARENT_REVIEW`.
4. Include:
   - original correction run, failed continuation, and recovery-run timings;
   - the nonstandard fetch/prune incident and exact ref repair;
   - both immutable candidate commits/trees/parents/paths/blobs;
   - candidate manifest and patch hashes;
   - backend validation;
   - frontend correction and validation;
   - reused database evidence with exact continuity proof;
   - module/registry/C04/Creator-action boundaries;
   - provider and financial assertions;
   - fetch-back verification;
   - no Product/architecture-decision/authorization/migration behavior change;
   - proposed supersession only after Parent acceptance;
   - stop before Gate A V4.
5. Commit/push without force and fetch back using safe explicit ref handling.
6. Record authority commit/tree/path/blob.

Do not alter the controlling register.

## Circuit breakers

```text
BACKEND_HEAD_NOT_EXPECTED_DANGLING_REF
BACKEND_LOCAL_REF_UNEXPECTEDLY_EXISTS
BACKEND_BASE_OBJECT_OR_TREE_MISMATCH
BACKEND_REMOTE_BRANCH_COLLISION
BACKEND_PATH_SET_NOT_EXACTLY_18
BACKEND_COMPLETE_BLOB_MISMATCH
BACKEND_UNTRACKED_CONTAMINATION
LOCAL_REF_AT_WRONG_BASE
BACKEND_CANDIDATE_CHANGED_AFTER_RECOVERY
FRONTEND_BASE_OR_BLOB_MISMATCH
FRONTEND_DIFF_EXCEEDS_UNUSED_IMPORT
FRONTEND_OR_AUTHORITY_BRANCH_COLLISION
MIGRATION_COUNT_OR_SUBTREE_MISMATCH
BACKEND_VALIDATION_FAILURE
FRONTEND_VALIDATION_FAILURE
PROVIDER_CALL_OR_CREDENTIAL_REQUIRED
FINANCIAL_OR_AUTHORIZATION_CHANGE
FETCH_BACK_MISMATCH
```

No source reconstruction is allowed.

## Required final response

Return:

```text
RECOVERY_AND_PUBLICATION_RESULT =
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
LOCAL_REF_RECOVERY_SECONDS =
BACKEND_INTEGRITY_SECONDS =
FRONTEND_CORRECTION_SECONDS =
BACKEND_REVALIDATION_SECONDS =
FRONTEND_REVALIDATION_SECONDS =
PUBLICATION_SECONDS =
WAITING_OR_BLOCKED_SECONDS =

BACKEND_REF_RECOVERY =
BACKEND_BASE_COMMIT =
BACKEND_CHANGED_PATHS =
BACKEND_BLOBS =
BACKEND_CANDIDATE_MANIFEST_SHA256 =
BACKEND_PATCH_SHA256 =
BACKEND_MIGRATION_COUNT =
BACKEND_MIGRATION_SUBTREE =
BACKEND_FOCUSED_TESTS =
BACKEND_FULL_TESTS =
BACKEND_LINT =
BACKEND_BUILD =
BACKEND_CAMPAIGN_READINESS =
BACKEND_INTELLIGENCE_CONTRACT_VERIFY =
DATABASE_EVIDENCE =

FRONTEND_CORRECTION =
FRONTEND_CHANGED_PATHS =
FRONTEND_CORRECTED_BLOB =
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

A successful result is a published correction candidate, not Parent acceptance. Stop before Gate A V4.
