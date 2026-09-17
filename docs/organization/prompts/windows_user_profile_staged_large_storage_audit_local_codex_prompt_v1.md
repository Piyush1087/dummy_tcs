# Windows User Profile — Staged Large-Storage Audit V1

`WINDOWS_USER_PROFILE_STAGED_LARGE_STORAGE_AUDIT_V1`

## Purpose

Perform a read-only, staged storage audit limited to:

`C:\Users\piyus`

Identify the largest directories and individual files that materially consume the Windows system drive.

The previous audit used a single broad recursive traversal and took too long. Do not repeat that approach. Measure the profile hierarchically: immediate children first, then drill into only the largest roots.

```text
MODE = READ_ONLY
ROOT_SCOPE = C:\Users\piyus
DELETION = PROHIBITED
MOVE_OR_RENAME = PROHIBITED
PERMISSION_CHANGE = PROHIBITED
PROCESS_TERMINATION = PROHIBITED_EXCEPT_OWN_TIMED_OUT_CHILD
DOCKER_MUTATION = PROHIBITED
GIT_MUTATION = PROHIBITED
```

## Execution budget

- Target completion: 15 minutes.
- Hard maximum: 20 minutes.
- No single measurement command may run longer than 3 minutes.
- Do not run one monolithic recursive command across the complete profile.
- Use staged, path-scoped measurements.
- Persist partial results after every measured directory.
- If the hard limit is reached, stop normally and return the collected results.
- A child command created by this audit may be stopped when its declared time limit expires. Do not stop unrelated or pre-existing processes.

## Safety

Do not:

- delete, move, rename, compress, truncate or modify anything;
- clear caches or temporary files;
- empty Recycle Bin;
- start, stop, restart, prune or factory-reset Docker;
- alter WSL distributions or VHDX files;
- run Git cleanup, garbage collection, reset, checkout or restore;
- change file ownership or permissions;
- repair or dereference reparse points;
- open or reproduce file contents;
- print secrets, environment values, tokens or credentials;
- install utilities.

If a path is inaccessible, record the error and continue.

## Protected active state

The following tree is active and must always be classified as protected:

`C:\Users\piyus\Documents\Codex\2026-09-17\local-codex-runner-prompt-canonical-reconciliation`

Do not perform an expensive per-file analysis inside it. Measure only its aggregate size when feasible and preserve it.

Also classify these as protected unless a later separate cleanup explicitly authorizes otherwise:

- `C:\Users\piyus\.codex` application state;
- all environment and credential-bearing files;
- Git repositories, worktrees and object stores;
- Docker volumes;
- user-created documents, media and archives.

This audit may identify and rank them, but may not modify them.

## Reparse-point and size rules

- Do not follow directory junctions, symbolic links or reparse points.
- Report reparse points separately.
- Avoid double counting linked or nested storage.
- Distinguish logical size from allocated size when Windows exposes both.
- For sparse VHDX files, report both apparent/logical and allocated size where possible.
- Mark incomplete timed measurements with `>=`.
- Do not present lower bounds as exact totals.

## Stage 1 — immediate profile map

List every immediate child of:

`C:\Users\piyus`

For each child, report:

- exact path;
- directory or file;
- last-modified UTC;
- attributes and reparse-point status;
- bounded recursive size or lower bound;
- measurement duration;
- completion status.

Prioritize likely heavy roots, including:

- `AppData`
- `Documents`
- `Downloads`
- `.codex`
- package-manager/cache directories;
- browser automation directories;
- IDE/developer-tool directories;
- WSL/Docker-related files under the profile.

Do not drill into small roots unless time remains.

## Stage 2 — drill into largest roots

Select the largest five to eight immediate children from Stage 1.

For each selected root:

1. List immediate child directories and files.
2. Measure each immediate child independently with a maximum two-minute budget.
3. Rank them by measured or lower-bound size.
4. Drill one additional level only into the largest two or three children.
5. Stop drilling when the result already identifies a deletion/relocation boundary or when the time budget would be exceeded.

At minimum, attempt targeted breakdowns of:

### AppData

- `C:\Users\piyus\AppData\Local`
- `C:\Users\piyus\AppData\Roaming`
- `C:\Users\piyus\AppData\LocalLow`

Within those, prioritize:

- Docker and WSL storage;
- Temp;
- npm/pnpm/yarn caches;
- Playwright and browser downloads;
- browser caches;
- IDE caches;
- crash dumps;
- application update/install caches;
- Codex-related app directories.

Do not scan browser-history contents or expose profile data.

### Documents

Prioritize immediate project/run roots. The complete Codex tree may be measured by top-level child, but do not repeat a full per-file dependency traversal.

### Downloads/Desktop/Videos/Pictures

Report large files and directories for manual review only. Do not classify personal data as automatically deletable.

## Stage 3 — largest individual files

Search for large files only within the largest roots identified by Stages 1 and 2.

Avoid a redundant second full-profile traversal.

Return:

- all discovered files at least 1 GiB;
- then enough files at least 250 MiB to produce up to 50 useful entries;
- exact path;
- logical size;
- allocated size when available;
- last-modified UTC;
- likely category;
- sparse/compressed/reparse status;
- preliminary disposition.

Do not read file contents.

Pay particular attention to:

- VHDX and virtual-disk files;
- database files;
- archives;
- installers;
- crash dumps;
- package caches;
- browser binaries;
- Git packfiles;
- SQLite history/log files;
- Playwright videos/traces;
- duplicated repository bundles;
- temporary execution artifacts.

## Stage 4 — storage categories

Aggregate non-overlapping storage where possible into:

- active Codex reconciliation;
- old Codex runs;
- Codex application state;
- Git repositories/object stores;
- dependency trees;
- package-manager caches;
- Playwright/browser automation;
- Docker/WSL;
- Windows/application Temp;
- browser/application caches;
- user downloads and personal files;
- databases, archives and installers;
- unknown/system-managed content.

## Classification

Classify each material cleanup or relocation candidate as exactly one:

- `SAFE_REGENERABLE_CACHE`
- `LIKELY_SAFE_AFTER_APPLICATION_CHECK`
- `OLD_CODEX_CANDIDATE_REQUIRES_GIT_CHECK`
- `ACTIVE_PROJECT_DO_NOT_DELETE`
- `USER_DATA_MANUAL_REVIEW`
- `APPLICATION_STATE_REQUIRES_VENDOR_SAFE_METHOD`
- `DOCKER_OR_WSL_MANAGED`
- `SYSTEM_MANAGED_DO_NOT_DELETE_DIRECTLY`
- `UNKNOWN_DO_NOT_DELETE`

No classification authorizes deletion in this run.

## Candidate recommendations

Create separate ranked lists for:

### A. Potentially safe direct cleanup

Only reproducible caches or generated artifacts for which deletion semantics are clear.

### B. Cleanup through application-supported mechanisms

Examples include Docker Desktop, browser cache, Windows Storage settings, application update caches or WSL compaction. Report the supported mechanism conceptually; do not execute it.

### C. Relocation candidates

Large active data that could move to another drive or machine, including Docker disk images, Codex working roots, repositories and browser caches.

### D. Manual user review

Downloads, archives, media and other personal content.

For each candidate include:

- exact path;
- measured/lower-bound size;
- likely allocated recovery;
- classification;
- why it is large;
- cleanup/relocation prerequisite;
- risk;
- whether it overlaps another listed candidate.

## Required result

Return:

```text
WINDOWS_USER_PROFILE_STORAGE_AUDIT_RESULT =
  COMPLETE | PARTIAL_TIME_LIMIT | BLOCKED

MODE = READ_ONLY
ROOT_SCANNED = C:\Users\piyus
ELAPSED_SECONDS =
FILES_DELETED = 0
DIRECTORIES_DELETED = 0
BYTES_RECLAIMED = 0
GIT_MUTATIONS = 0
DOCKER_MUTATIONS = 0

SYSTEM_DRIVE_TOTAL_BYTES =
SYSTEM_DRIVE_FREE_BYTES =
PROFILE_LOGICAL_BYTES =
PROFILE_ALLOCATED_BYTES_IF_AVAILABLE =

IMMEDIATE_CHILDREN_COUNT =
IMMEDIATE_CHILDREN_MEASURED =
IMMEDIATE_CHILDREN_INCOMPLETE =
LARGEST_PROFILE_CHILD =
LARGEST_PROFILE_CHILD_BYTES =

APPDATA_BYTES =
DOCUMENTS_BYTES =
DOWNLOADS_BYTES =
CODEX_DOCUMENTS_BYTES =
CODEX_APP_STATE_BYTES =
DOCKER_WSL_BYTES =
PACKAGE_CACHE_BYTES =
TEMP_BYTES =
BROWSER_AUTOMATION_BYTES =
USER_DATA_MANUAL_REVIEW_BYTES =

FILES_AT_LEAST_1_GIB =
FILES_AT_LEAST_250_MIB =
LARGEST_FILE =
LARGEST_FILE_LOGICAL_BYTES =
LARGEST_FILE_ALLOCATED_BYTES =

SAFE_REGENERABLE_ESTIMATE_BYTES =
APPLICATION_SUPPORTED_CLEANUP_ESTIMATE_BYTES =
OLD_CODEX_REQUIRING_CHECK_ESTIMATE_BYTES =
MANUAL_USER_REVIEW_ESTIMATE_BYTES =
TOTAL_NON_OVERLAPPING_POTENTIAL_BYTES =

ACTIVE_RECONCILIATION_PROTECTED = YES | NO
REPARSE_POINTS_SKIPPED =
INACCESSIBLE_PATHS =
INCOMPLETE_PATHS =
AUDIT_CONFIDENCE = HIGH | MEDIUM | LOW

TOP_RECOMMENDED_NEXT_ACTIONS =
BLOCKERS =
NEXT_BOUNDARY = PARENT REVIEW BEFORE ANY CLEANUP
```

Attach:

1. immediate profile-child table;
2. largest-root breakdown tables;
3. largest individual-file table;
4. storage-category summary;
5. direct-cleanup candidate table;
6. application-supported cleanup table;
7. relocation candidate table;
8. manual-review table;
9. overlap/double-counting notes;
10. incomplete-path and confidence notes.

## Stop boundary

This is evidence collection only.

Do not generate or execute deletion commands. Do not create cleanup scripts. Do not modify or publish repository files. The response is the only deliverable.
