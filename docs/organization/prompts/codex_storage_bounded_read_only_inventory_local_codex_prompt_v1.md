# Codex Storage — Bounded Read-Only Inventory for Old-Files Cleanup V1

`CODEX_STORAGE_BOUNDED_READ_ONLY_INVENTORY_V1`

## Purpose

Perform a fast, bounded, read-only inventory of Codex-owned storage on the Windows host.

The previous whole-user-profile audit was stopped because recursively enumerating millions of files was disproportionate to the intended cleanup scope.

This assignment is limited to identifying old Codex files that may be cleaned in a subsequent, separately authorized turn.

```text
MODE = READ_ONLY
SCOPE = CODEX_OWNED_STORAGE_ONLY
DELETION = PROHIBITED
MOVE_OR_RENAME = PROHIBITED
GIT_MUTATION = PROHIBITED
DOCKER_MUTATION = PROHIBITED
SYSTEM_CLEANUP = PROHIBITED
```

## Time and execution limits

- Total audit time budget: 12 minutes.
- No single recursive command may run longer than 3 minutes.
- Do not launch one monolithic recursive scan across the user profile or entire drive.
- Do not scan file contents.
- Do not hash entire directory trees.
- Do not follow junctions, symbolic links or reparse points.
- Emit or retain incremental measurements after each top-level directory.
- If the time budget is reached, stop normally and return a partial report with the measurements already collected.
- A bounded child command created by this audit may be stopped when its declared three-minute limit expires. Do not terminate unrelated or pre-existing processes.

## Primary scope

Inspect only:

`C:\Users\piyus\Documents\Codex`

You may additionally obtain non-recursive/top-level size metadata for clearly Codex-related locations such as:

- `C:\Users\piyus\.codex`, if present;
- Codex-specific application cache directories under `AppData`;
- Playwright artifacts or browser caches demonstrably created by Codex runs.

Do not expand into a general scan of Downloads, Documents outside the Codex tree, browser profiles, Windows directories, unrelated application data or other user files.

## Active protected reconciliation tree

The entire following directory is active and must not be proposed for deletion:

`C:\Users\piyus\Documents\Codex\2026-09-17\local-codex-runner-prompt-canonical-reconciliation`

Known active worktrees include:

- `C:\Users\piyus\Documents\Codex\2026-09-17\local-codex-runner-prompt-canonical-reconciliation\work\backend.git\work\final-fixture-backend`
- `C:\Users\piyus\Documents\Codex\2026-09-17\local-codex-runner-prompt-canonical-reconciliation\work\frontend.git\work\final-harness-frontend`

This tree contains retained, potentially uncommitted V2 validation candidates.

Measure its aggregate size if inexpensive, but classify it:

`ACTIVE_PROJECT_DO_NOT_DELETE`

Do not modify it, run cleanup inside it or recommend deleting its dependencies until the canonical reconciliation is complete.

## Other protected material

Protect any path when one or more of the following are true:

1. Git status is dirty, staged or has untracked files.
2. The repository or worktree contains unpublished commits or unique objects whose remote reachability is not proven.
3. The path contains any environment or credential-shaped file, including:
   - `.env`
   - `.env.*`
   - `*.pem`
   - `*.key`
   - credential JSON
   - token/session files
   - private npm configuration
4. A running process command line or working context visibly references the path.
5. It was modified recently enough that active use is plausible.
6. Ownership or purpose is ambiguous.
7. It supports the active canonical-reconciliation tree through Git alternates, worktree metadata, junctions or shared dependencies.

Do not open or print the contents of environment or credential files. Report only that protected material exists.

A clean Git worktree alone is not proof that deletion is safe.

## Absolute prohibitions

Do not:

- delete, move, rename, compress, truncate or modify files;
- clean caches;
- remove `node_modules`;
- run package-manager cleanup;
- run Git clean, reset, restore, checkout, gc, prune, repack or worktree removal;
- create commits, branches or tags;
- start, stop, restart or inspect Docker with a potentially hanging daemon call;
- remove Docker resources;
- change permissions or ownership;
- traverse inaccessible reparse points;
- inspect secret contents;
- install utilities.

## Audit method

### Phase 1 — immediate capacity and root inventory

Report current free space on all fixed drives.

List the immediate children of:

`C:\Users\piyus\Documents\Codex`

For each immediate child, capture:

- full path;
- directory/file;
- apparent size using a bounded method;
- last-modified UTC;
- reparse-point status;
- likely run/project identity.

Prioritize directories by apparent size. Do not wait for every directory if the time budget would be exceeded.

### Phase 2 — targeted inspection of largest Codex directories

Inspect only the largest material Codex directories identified in Phase 1.

For each, report approximate non-overlapping sizes for:

- Git object stores and packs;
- working-tree files;
- `node_modules`;
- build outputs such as `dist`, `build`, `.next`, `.vite`;
- coverage output;
- Playwright browser downloads;
- `.artifacts`, traces, videos and screenshots;
- logs;
- temporary clones or worktrees;
- database dumps or local disposable-data files;
- package-manager caches located inside the run.

Prefer directory-level metadata. Do not enumerate every file in dependency trees merely to create a largest-file table.

### Phase 3 — preservation checks

For each directory that might later be cleaned:

1. Identify whether it contains a Git repository, bare repository or linked worktree.
2. Use read-only Git commands with bounded time to determine:
   - HEAD/branch;
   - dirty/staged/untracked state;
   - remotes;
   - worktree relationships.
3. Detect environment/credential-shaped filenames without reading content.
4. Check whether any active process visibly references the path.
5. Determine whether the directory is inside or supports the protected reconciliation tree.
6. Determine whether complete remote recoverability can be proven. If not, mark it protected or manual-review.

Do not run expensive remote fetches during this inventory.

### Phase 4 — old Codex cleanup candidates

Identify exact candidates in these groups:

#### A. Generated subdirectories

Examples:

- old `node_modules`;
- old build output;
- coverage;
- sanitized Playwright traces/videos/screenshots;
- old test artifacts;
- package caches located entirely inside an obsolete Codex run.

These may be candidates even when the surrounding project directory must be retained.

#### B. Entire obsolete Codex runs

An entire run directory may be proposed only if all are true:

- it is outside the active protected reconciliation tree;
- no dirty, staged or untracked state exists;
- no environment or credential material would be lost;
- no process references it;
- required commits and objects are proven recoverable from an immutable remote;
- it is not a Git common directory supporting retained worktrees;
- its purpose is complete or superseded.

If any condition is uncertain, do not propose whole-directory deletion.

#### C. Duplicate dependency installations

Identify repeated `node_modules` trees and their approximate sizes. Do not assume they are interchangeable; report regeneration commands and lockfile presence.

#### D. Codex application state

Report the size of `.codex` and Codex app caches, but classify conversation history, settings, authentication, skills, configuration and unknown application state as protected. Only clearly documented, reproducible cache subdirectories may be proposed.

## Classification

Classify every candidate as exactly one:

- `SAFE_REGENERABLE_CODEX_ONLY`
- `LIKELY_SAFE_AFTER_PARENT_REVIEW`
- `ACTIVE_PROJECT_DO_NOT_DELETE`
- `CONTAINS_ENV_OR_CREDENTIAL_MATERIAL`
- `GIT_RECOVERABILITY_UNPROVEN`
- `CODEX_APPLICATION_STATE_PROTECTED`
- `UNKNOWN_DO_NOT_DELETE`

## Cleanup manifest requirements

Produce a proposed manifest for the later cleanup turn.

For each entry include:

- exact full path;
- candidate type;
- classification;
- approximate exclusive bytes reclaimable;
- last-modified UTC;
- evidence supporting classification;
- Git status/recoverability summary;
- environment/credential-file presence;
- process-use result;
- regeneration command or method;
- risks and prerequisites.

Do not double count nested paths. If an entire directory is listed, do not add its child directories to the total.

Create three manifest sections:

### Tier 1 — safe Codex-generated subdirectories

Only highly recoverable, path-scoped generated content outside active work.

### Tier 2 — obsolete Codex run directories

Only directories satisfying every whole-run deletion condition.

### Retain/manual review

Everything active, dirty, credential-bearing, remotely unverified or ambiguous.

## Required output

Return concise results even if the audit is partial.

```text
CODEX_STORAGE_BOUNDED_AUDIT_RESULT =
  COMPLETE | PARTIAL_TIME_LIMIT | BLOCKED

MODE = READ_ONLY
ELAPSED_SECONDS =
FILES_DELETED = 0
DIRECTORIES_DELETED = 0
BYTES_RECLAIMED = 0
GIT_MUTATIONS = 0
DOCKER_MUTATIONS = 0

SYSTEM_DRIVE_FREE_BYTES =
OTHER_FIXED_DRIVES =
CODEX_DOCUMENTS_ROOT_BYTES =
CODEX_APP_STATE_BYTES =
ACTIVE_RECONCILIATION_TREE_BYTES =

TOP_LEVEL_CODEX_CHILDREN_MEASURED =
TOP_LEVEL_CODEX_CHILDREN_UNMEASURED =
LARGEST_CODEX_DIRECTORY =
LARGEST_CODEX_DIRECTORY_BYTES =

TIER_1_CANDIDATE_COUNT =
TIER_1_NON_OVERLAPPING_BYTES =
TIER_2_CANDIDATE_COUNT =
TIER_2_NON_OVERLAPPING_BYTES =
TOTAL_CONSERVATIVE_CODEX_ONLY_RECLAIMABLE_BYTES =

DIRTY_OR_UNTRACKED_PATHS =
ENV_OR_CREDENTIAL_BEARING_PATHS =
UNPUBLISHED_OR_UNVERIFIED_GIT_PATHS =
PROCESS_REFERENCED_PATHS =
REPARSE_POINTS_SKIPPED =
INACCESSIBLE_PATHS =

ACTIVE_RECONCILIATION_PROTECTED = YES | NO
RECOMMENDED_CLEANUP_MANIFEST_READY = YES | NO
EXPECTED_FREE_SPACE_AFTER_APPROVED_CLEANUP =
BLOCKERS =
NEXT_BOUNDARY = PARENT REVIEW BEFORE CODEX-ONLY CLEANUP
```

Attach:

1. fixed-volume free-space summary;
2. immediate Codex-root directory table;
3. targeted largest-directory breakdown;
4. protected-state findings;
5. Tier 1 cleanup manifest;
6. Tier 2 cleanup manifest;
7. retain/manual-review table;
8. non-overlapping reclaimable-space calculation;
9. paths not measured because of the time limit.

The response is the only deliverable. Do not create, edit, commit or push any repository file during this inventory.
