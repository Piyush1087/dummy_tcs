# Codex Old Files — Exact Path Dependency Cleanup V1

`CODEX_OLD_FILES_EXACT_PATH_DEPENDENCY_CLEANUP_V1`

## Purpose

Recover disk capacity by deleting only specifically identified, old, generated `node_modules` directories from Codex-owned historical workspaces.

This cleanup is based on the bounded read-only Codex storage audit. It does not authorize deletion of complete Codex runs, application state, Git repositories, environment files, source files, Docker data, shared stores or the active canonical-reconciliation environment.

## Authorized mutation scope

Only the exact paths listed in the allowlist below may be deleted, and only after every path-specific precondition passes.

No other filesystem mutation is authorized.

## Protected paths and state

Never modify or delete anything under:

`C:\Users\piyus\Documents\Codex\2026-09-17\local-codex-runner-prompt-canonical-reconciliation`

Also protect:

- `C:\Users\piyus\.codex`;
- `C:\Users\piyus\Documents\Codex\.pnpm-store`;
- all `.env`, `.env.*`, PEM, key, credential, token and session files;
- all Git repositories, refs, indexes, object stores and worktree metadata;
- all source, manifests and lockfiles;
- the `creator-shop-acceptance-postgres` container and all Docker resources;
- every path not explicitly allowlisted below.

Do not run Docker commands.

## Exact deletion allowlist

### Group A — audit-confirmed safe generated dependencies

1. `C:\Users\piyus\Documents\Codex\2026-08-12\campaign-runtime-acceptance-fe\node_modules`
2. `C:\Users\piyus\Documents\Codex\2026-08-13\i-need-this-codex-environment-to\work\g1a-frontend\node_modules`
3. `C:\Users\piyus\Documents\Codex\2026-08-15\you-are-starting-the-creator-shop\work\campaign-frontend\node_modules`
4. `C:\Users\piyus\Documents\Codex\2026-08-20\checkout-phase-g-gatekeeper-frontend-reconciliation\work\frontend-reconciliation\node_modules`
5. `C:\Users\piyus\Documents\Codex\g1a-fe-check2\node_modules`

Audit-measured total:

`1,010,250,011 bytes`

### Group B — generated dependencies requiring fresh path checks

6. `C:\Users\piyus\Documents\Codex\2026-08-12\campaign-runtime-acceptance-be\node_modules`
7. `C:\Users\piyus\Documents\Codex\2026-08-13\i-need-this-codex-environment-to\work\g1a-backend\node_modules`
8. `C:\Users\piyus\Documents\Codex\2026-08-17\files-pasted-by-the-user-we\work\backend-campaign-page-reconciliation\node_modules`
9. `C:\Users\piyus\Documents\Codex\2026-08-21\checkout-phase-g-gatekeeper-frontend-reconciliation\work\backend-development-reconciliation\node_modules`

Audit lower-bound total:

`at least 1,434,989,263 bytes`

Maximum expected allowlisted logical recovery:

`at least 2,445,239,274 bytes`

Actual allocated-space recovery may differ.

## Explicit exclusions

Do not delete or modify:

- `C:\Users\piyus\Documents\Codex\2026-08-08\i-w\work\.runtime-cache`;
- `C:\Users\piyus\Documents\Codex\2026-08-10\files-mentioned-by-the-user-resume\phase2-node-modules-partial`;
- the dependency tree within the dirty `campaign-phase1-main` repository;
- the dependency tree whose enclosing Git metadata did not resolve normally;
- any whole date-run directory;
- any whole repository or worktree;
- any material inside the active September 17 reconciliation tree;
- any `.codex` component;
- the shared pnpm store.

## Phase 0 — immutable safety checks

Before deletion:

1. Record current free bytes on the system drive.
2. Resolve every allowlisted path to its canonical absolute path.
3. Confirm each resolved path:
   - is inside `C:\Users\piyus\Documents\Codex`;
   - ends exactly with `\node_modules`;
   - is not inside the protected September 17 reconciliation tree;
   - is not itself a junction, symbolic link or reparse point;
   - is not the target of a running process command line that can be identified safely.
4. Confirm the immediate parent contains:
   - `package.json`;
   - `package-lock.json`.
5. Confirm the parent manifest and lockfile will not be deleted.
6. Check for reparse points inside each target without following them.
   - If any descendant reparse point is present and the deletion method cannot guarantee that it will remove only the link rather than traverse the target, skip that entire candidate.
7. Record an approximate pre-deletion size for each candidate with a bounded measurement.
8. Record the parent directory's Git status read-only when it is a valid Git worktree.
   - Dirty Git status does not authorize deleting anything except the exact allowlisted `node_modules`.
   - If `node_modules` is tracked or contains tracked paths, skip it.
9. Confirm none of the nine paths overlaps another allowlisted path.

If the canonical path differs unexpectedly, the path is not a directory, the parent lockfile is absent, or any safety condition cannot be proven, skip that candidate. Do not broaden or repair the allowlist.

## Phase 1 — path-scoped deletion

Delete candidates sequentially, never in parallel.

For each eligible path:

1. Record free space immediately before deletion.
2. Delete only the exact `node_modules` directory.
3. Do not follow reparse points.
4. Do not delete its parent.
5. Verify:
   - the exact target no longer exists;
   - parent `package.json` remains;
   - parent `package-lock.json` remains;
   - any parent environment files remain;
   - Git tracked state is unchanged;
   - the active reconciliation tree is untouched.
6. Record free space after deletion.
7. Continue to the next exact candidate.

If deletion fails, do not change permissions, take ownership, terminate processes, reboot, retry destructively or use a broader parent path. Record the failure and continue only when doing so is safe.

## Phase 2 — preservation verification

After all eligible deletions:

1. Record final system-drive free bytes.
2. Reverify that the complete protected reconciliation tree exists.
3. In the active backend and frontend retained-candidate worktrees, run read-only identity/status checks sufficient to establish that their prior working state remains present. Do not normalize or modify them.
4. Confirm all detected environment/credential-bearing parent files outside deleted targets remain present.
5. Confirm no Git-tracked file changed because of this cleanup.
6. Confirm no whole Codex run, repository, worktree, Git object store, source tree or lockfile was removed.
7. Do not attempt to start Docker or resume canonical validation in this turn.

## Recovery semantics

Every deleted path must be regenerable from its retained parent:

`npm ci`

Do not run `npm ci` during this cleanup.

## Required result

Return:

```text
CODEX_OLD_FILES_DEPENDENCY_CLEANUP_RESULT =
  COMPLETE | PARTIAL | CIRCUIT_BREAKER

SYSTEM_DRIVE_FREE_BYTES_BEFORE =
SYSTEM_DRIVE_FREE_BYTES_AFTER =
ACTUAL_FREE_BYTES_GAINED =

ALLOWLIST_COUNT = 9
ELIGIBLE_COUNT =
DELETED_COUNT =
SKIPPED_COUNT =
FAILED_COUNT =

GROUP_A_DELETED =
GROUP_A_SKIPPED =
GROUP_B_DELETED =
GROUP_B_SKIPPED =

LOGICAL_BYTES_DELETED =
ACTUAL_ALLOCATED_BYTES_RECOVERED =

ACTIVE_RECONCILIATION_TREE_PRESERVED =
BACKEND_RETAINED_CANDIDATE_PRESERVED =
FRONTEND_RETAINED_CANDIDATE_PRESERVED =
ENVIRONMENT_FILES_PRESERVED =
GIT_TRACKED_STATE_CHANGED = NO
GIT_REFS_OR_OBJECTS_CHANGED = NO
SOURCE_FILES_CHANGED = NO
LOCKFILES_CHANGED = NO
DOCKER_MUTATIONS = 0
CODEX_APPLICATION_STATE_CHANGED = NO
PNPM_STORE_CHANGED = NO

DELETED_PATHS =
SKIPPED_PATHS_WITH_REASONS =
FAILED_PATHS_WITH_ERRORS =
UNAUTHORIZED_PATH_MUTATIONS = NONE

REMAINING_FREE_SPACE =
SUFFICIENT_FOR_FINAL_VALIDATION_8_GIB_GATE = YES | NO
NEXT_SAFE_STORAGE_ACTION =
BLOCKERS =
NEXT_BOUNDARY = PARENT REVIEW
```

Include a table with one row per allowlisted path containing:

- precondition result;
- pre-deletion logical size;
- deletion result;
- free-space delta;
- parent manifest preservation;
- parent lockfile preservation;
- Git preservation result;
- skip/failure reason where applicable.

## Stop conditions

Stop immediately if:

- any deletion resolves outside the exact allowlist;
- the active reconciliation tree changes;
- a Git ref, object, index or tracked source file changes;
- an environment or credential file is removed;
- the deletion tool begins traversing a reparse target;
- an unallowlisted path is affected.

This cleanup does not authorize a broader second pass. If the final free space remains below 8 GiB, return the result for Parent review so that additional old Codex candidates can be evaluated separately.
