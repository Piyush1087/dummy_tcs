# Windows Host Disk Capacity — Read-Only Audit for Codex Cleanup Planning V1

`WINDOWS_HOST_DISK_CAPACITY_READ_ONLY_AUDIT_V1`

## Assignment

Perform a read-only disk-capacity audit of the Windows host used for Local Codex reconciliation runs.

The purpose is to identify:

1. the largest directories and individual files;
2. storage attributable to old Codex runs;
3. safely reproducible caches and generated artifacts;
4. likely relocation candidates;
5. an exact, reviewable cleanup proposal for a later separately authorized turn.

This assignment authorizes inspection and reporting only.

```text
MODE = READ_ONLY
DELETION = PROHIBITED
CLEANUP = PROHIBITED
MOVE_OR_RELOCATION = PROHIBITED
DOCKER_MUTATION = PROHIBITED
GIT_MUTATION = PROHIBITED
PROCESS_TERMINATION = PROHIBITED
```

Do not implement cleanup.

## Current condition

The most recent canonical-reconciliation run observed approximately 206–215 MB free on the Windows system drive. Docker did not respond to bounded probes.

This audit must not attempt to fix those conditions. It must identify their likely storage causes and provide evidence for a later path-scoped cleanup decision.

## Protected reconciliation state

Treat the entire following tree as active and protected from mutation:

`C:\Users\piyus\Documents\Codex\2026-09-17\local-codex-runner-prompt-canonical-reconciliation`

Known protected worktrees include:

- `C:\Users\piyus\Documents\Codex\2026-09-17\local-codex-runner-prompt-canonical-reconciliation\work\backend.git\work\final-fixture-backend`
- `C:\Users\piyus\Documents\Codex\2026-09-17\local-codex-runner-prompt-canonical-reconciliation\work\frontend.git\work\final-harness-frontend`

They contain retained validation candidates that may still be uncommitted. Inspect their size, but do not alter files, indexes, refs, worktrees or metadata.

Also protect:

- all current Git repositories, object stores and worktree metadata supporting those candidates;
- the Docker container named `creator-shop-acceptance-postgres`;
- all volumes used by that container;
- all published reconciliation checkpoints;
- Windows system files, recovery partitions and application-managed data;
- user documents, downloads, media and archives unless merely reported for manual review.

## Absolute prohibitions

Do not:

- delete, move, rename, compress, truncate or modify any file or directory;
- run cleanup commands;
- empty Recycle Bin;
- clear npm, browser, package-manager, Windows or Codex caches;
- remove `node_modules`;
- remove Git worktrees, clones, refs, objects, packs or branches;
- run `git gc`, `git prune`, `git clean`, `git reset`, checkout or restore;
- start, stop, restart, remove or prune Docker resources;
- run `docker system prune`, `docker builder prune` or volume prune;
- restart or factory-reset Docker Desktop;
- mutate WSL distributions or VHDX files;
- repair, dereference or delete reparse points;
- terminate processes;
- install utilities;
- expose file contents, credentials, tokens, environment values or secret material.

If a location is inaccessible, record the error and continue. Do not take ownership or alter permissions.

## Audit scope

### A. Volume overview

Inventory all fixed local volumes and report:

- drive letter or mount;
- filesystem;
- total capacity;
- used capacity;
- free capacity;
- percentage free;
- whether the volume appears suitable for relocating development storage.

Pay particular attention to the Windows system drive.

### B. Largest directories

On the system drive, calculate the largest relevant directory trees with emphasis on:

- `C:\Users\piyus\Documents\Codex`
- `C:\Users\piyus\AppData\Local`
- `C:\Users\piyus\AppData\Roaming`
- `C:\Users\piyus\.cache`, if present
- npm caches and package-manager caches;
- Playwright browser caches;
- browser test artifacts;
- Docker Desktop and WSL storage;
- Windows temporary storage;
- Recycle Bin size when measurable without mutation;
- Downloads and other user-owned large directories, report-only;
- developer repositories and duplicated clones;
- `node_modules`, build outputs, coverage, traces, screenshots, videos and logs.

Return at least the 50 largest meaningful directories where technically feasible.

Do not recursively follow directory junctions, symbolic links or reparse points. Identify them separately so that storage is not double counted.

### C. Largest individual files

Return at least the 50 largest individual files on the system drive where technically feasible, including:

- exact full path;
- logical size;
- allocated size if readily available;
- last-modified UTC timestamp;
- apparent owner/category;
- whether it is a reparse-point target or application-managed file;
- preliminary disposition classification.

Do not read file contents. Metadata only.

### D. Codex-specific inventory

Inventory `C:\Users\piyus\Documents\Codex` by run/project directory.

For each material directory, report:

- full path;
- total apparent size;
- last-modified time;
- Git repository/worktree presence;
- clean, dirty or indeterminate state using read-only Git status where applicable;
- untracked-file presence;
- current branch/HEAD when safely determinable;
- approximate sizes of:
  - Git object storage;
  - worktree files;
  - `node_modules`;
  - Playwright/browser downloads;
  - `.artifacts`, traces, videos and screenshots;
  - build output;
  - coverage output;
  - logs;
  - temporary databases or dumps;
- whether it belongs to the active protected reconciliation tree;
- whether it appears reproducible from an immutable remote checkpoint.

Do not assume that an old date makes a directory safe to delete.

### E. Shared developer caches

Measure, without clearing:

- npm cache;
- npm temporary/install remnants;
- Playwright browser cache;
- Chromium/Chrome caches related to test automation;
- package-manager caches;
- TypeScript/build caches;
- Prisma engine/cache artifacts;
- Codex application cache or run storage, where identifiable;
- Windows TEMP locations;
- crash dumps and diagnostic logs;
- Recycle Bin.

Distinguish globally shared caches from project-local generated data.

### F. Docker and WSL storage

Use only bounded, read-only inspection.

If Docker responds, report:

- `docker system df -v` or equivalent read-only inventory;
- images, containers, build cache and volumes;
- which objects are in use;
- approximate reclaimable storage;
- ownership/association with known projects;
- explicit protection of `creator-shop-acceptance-postgres` and its volumes.

If Docker does not respond, do not restart it. Inspect only filesystem-level metadata for Docker/WSL storage, including VHDX sizes where visible.

Specifically inspect and report the state of:

`C:\Users\piyus\AppData\Local\Docker\run\dockerInference`

If it is an inaccessible reparse point, report its metadata and access error without repair or deletion.

Do not treat the apparent size of a sparse VHDX as equal to allocated disk use unless verified.

### G. Duplicate and relocation opportunities

Identify, without hashing entire drives unless inexpensive:

- duplicate repository clones;
- repeated `node_modules` trees;
- repeated Playwright browser installations;
- repeated build/test artifacts;
- large archives or installers;
- Docker/WSL disk images that could potentially be relocated;
- Codex project roots that could be relocated to another fixed volume.

Use path, size, timestamps, Git remotes/HEADs and filenames as evidence. Mark uncertain duplicates as uncertain; do not claim byte identity without proof.

## Classification

Classify every proposed candidate into exactly one category:

- `SAFE_REGENERABLE`
- `LIKELY_SAFE_AFTER_VERIFICATION`
- `ACTIVE_PROJECT_DO_NOT_DELETE`
- `USER_DATA_MANUAL_REVIEW`
- `SYSTEM_OR_APPLICATION_MANAGED`
- `UNKNOWN`

For anything proposed as `SAFE_REGENERABLE`, explain exactly how it can be recreated.

For anything Git-related, a clean worktree alone is not enough. Confirm whether commits and required objects are reachable from an immutable remote ref before suggesting deletion.

## Required cleanup proposal

Produce a proposed cleanup manifest, but do not execute it.

Order candidates by:

1. safety;
2. likely recoverable bytes;
3. impact on the current reconciliation;
4. regeneration cost.

For each candidate include:

- exact path or Docker object identity;
- category;
- measured or estimated recoverable space;
- evidence;
- deletion prerequisites;
- regeneration consequence;
- risk;
- whether it can be included in a later “Codex old files only” cleanup.

Separate the proposal into:

### Tier 1 — old Codex-only, highly recoverable

Only obsolete Codex-owned generated files, caches, artifacts or fully recoverable workspaces.

### Tier 2 — shared developer caches

Reproducible caches that are not exclusively owned by one Codex run.

### Tier 3 — Docker/WSL managed storage

Requires a dedicated, carefully bounded operation.

### Tier 4 — user files or system-managed content

Report only; never include in the later Codex-old-files cleanup.

Compute conservative totals for each tier. Do not add overlapping parent and child directory sizes twice.

## Performance and safety

A full drive traversal may be slow. Use bounded parallelism and avoid loading file contents.

If the audit cannot complete due to extremely low free space, permission errors or tool limitations:

- preserve read-only behavior;
- return completed measurements;
- identify unscanned paths;
- state confidence and possible undercount;
- do not install tools or mutate the host.

## Required result

Return a concise executive summary followed by machine-readable fields and tables.

```text
WINDOWS_HOST_DISK_CAPACITY_AUDIT_RESULT =
  COMPLETE | PARTIAL | BLOCKED

AUDIT_MODE = READ_ONLY
FILES_DELETED = 0
DIRECTORIES_DELETED = 0
BYTES_RECLAIMED = 0
DOCKER_MUTATIONS = 0
GIT_MUTATIONS = 0

SYSTEM_DRIVE =
SYSTEM_DRIVE_TOTAL_BYTES =
SYSTEM_DRIVE_USED_BYTES =
SYSTEM_DRIVE_FREE_BYTES =
SYSTEM_DRIVE_PERCENT_FREE =

OTHER_FIXED_VOLUMES =
CODEX_ROOT_TOTAL_BYTES =
ACTIVE_RECONCILIATION_TREE_BYTES =
OLD_CODEX_CANDIDATE_BYTES =
NPM_CACHE_BYTES =
PLAYWRIGHT_CACHE_BYTES =
PROJECT_NODE_MODULES_BYTES =
BROWSER_ARTIFACT_BYTES =
DOCKER_ALLOCATED_BYTES =
DOCKER_RECLAIMABLE_ESTIMATE_BYTES =
WINDOWS_TEMP_BYTES =
RECYCLE_BIN_BYTES =

TIER_1_CONSERVATIVE_RECLAIMABLE_BYTES =
TIER_2_CONSERVATIVE_RECLAIMABLE_BYTES =
TIER_3_CONSERVATIVE_RECLAIMABLE_BYTES =
TOTAL_NON_OVERLAPPING_CONSERVATIVE_RECLAIMABLE_BYTES =

ACTIVE_RECONCILIATION_PROTECTED = YES | NO
CREATOR_SHOP_ACCEPTANCE_POSTGRES_PROTECTED = YES | NO
INACCESSIBLE_PATHS =
UNSCANNED_PATHS =
AUDIT_CONFIDENCE = HIGH | MEDIUM | LOW

RECOMMENDED_FIRST_CLEANUP_SCOPE =
RECOMMENDED_TARGET_FREE_SPACE =
BLOCKERS =
NEXT_BOUNDARY = PARENT REVIEW OF READ_ONLY AUDIT
```

Attach:

1. volume overview;
2. top directory table;
3. top individual-file table;
4. Codex-run inventory;
5. cache inventory;
6. Docker/WSL inventory;
7. duplicate/relocation observations;
8. exact proposed cleanup manifest;
9. exclusions and uncertainty notes.

Do not create, modify, commit or push repository files as part of the host audit. The response itself is the only deliverable.
