# Windows Docker VHDX Final Capacity Recovery — Manual Desktop Route V2

`WINDOWS_DOCKER_VHDX_FINAL_CAPACITY_RECOVERY_MANUAL_DESKTOP_ROUTE_V2`

## Purpose

Complete the final Windows system-drive recovery after V1 stopped safely because Docker Desktop 4.86.0 does not expose the expected `docker desktop stop/start` CLI on this installation.

This is an execution-route correction only.

The user must manually choose **Quit Docker Desktop** from the Docker Desktop tray/menu before starting this prompt.

Do not ask the user to delete or reset anything.

## Target

```text
SYSTEM_DRIVE_FREE_SPACE_TARGET = AT LEAST 10 GiB
CURRENT_REPORTED_FREE_SPACE = 7,129,186,304 bytes / 6.64 GiB
ALREADY_FREED_INSIDE_DOCKER ≈ 7,532,741,925 bytes
```

Stop all recovery work immediately after:

- at least 10 GiB free;
- Docker client/server healthy after relaunch;
- protected runtime and filesystem continuity verified.

Do not continue toward 15 GiB.

## Exact authorized operation

This prompt authorizes only:

1. confirming Docker Desktop was manually quit and the daemon/VHDX are no longer active;
2. compacting this exact detached dynamically expanding VHDX with Windows `diskpart compact vdisk`:

   `C:\Users\piyus\AppData\Local\Docker\wsl\disk\docker_data.vhdx`

3. launching the already-installed Docker Desktop executable normally;
4. verifying Docker health and all protected state;
5. starting only the exact existing canonical PostgreSQL container if its `unless-stopped` policy does not restart it automatically.

No deletion or additional cleanup is authorized.

## Controlling prior evidence

V1 circuit breaker:

```text
WINDOWS_DOCKER_VHDX_RECOVERY_RESULT = CIRCUIT_BREAKER
BLOCKER = docker desktop CLI subcommands unavailable
DISKPART_COMPACTION = SKIPPED
DOCKER_OBJECT_DELETIONS = 0
UNAUTHORIZED_MUTATIONS = NONE
```

Protected state remained intact.

## Absolute protected filesystem state

Protect:

`C:\Users\piyus\Documents\Codex\2026-09-17\local-codex-runner-prompt-canonical-reconciliation`

Retained worktrees:

- `C:\Users\piyus\Documents\Codex\2026-09-17\local-codex-runner-prompt-canonical-reconciliation\work\backend.git\work\final-fixture-backend`
- `C:\Users\piyus\Documents\Codex\2026-09-17\local-codex-runner-prompt-canonical-reconciliation\work\frontend.git\work\final-harness-frontend`

Expected HEADs:

```text
BACKEND_HEAD =
99df138ef5602709cfd9850e5630606b7889f237

FRONTEND_HEAD =
8f600d955b27f55d011adbc5513888b763674509
```

Their pre-existing status must remain unchanged.

## Absolute protected Docker state

Canonical:

```text
CONTAINER_NAME =
creator-shop-acceptance-postgres

CONTAINER_ID =
daa838b5ab95fef2a5fbd64340a3edec6726296f19dee4d26d072a5524074fd7

VOLUME =
creator_shop_acceptance_pgdata

IMAGE_ID =
95206741a5b214807675e14165369d05b93a9cf692223b616d07cca227e74b0b

RESTART_POLICY =
unless-stopped
```

Paused Campaign Intelligence:

```text
CONTAINER_NAME =
bi-audience-w1-3a-validation

CONTAINER_ID =
1338ca5d383bcb8fe90f1fb7b5f5aa15f67c4f8cf2afa066424346519cc88140

VOLUME =
fd778be8e896a5c23ee62bb66abbd1fbc7cc598cf71c492bec1b01d01aebf835

IMAGE_ID =
cf78e76683b9ca8c5733cbbdce6c9262b45b6767934dd0a95e671f9a0fc20685

REQUIRED_FINAL_STATUS =
exited
```

Also preserve:

- all six retained C03 PostgreSQL volumes;
- all other containers, images, volumes and networks;
- Playwright, Gitleaks, dangling images and anonymous volumes;
- all source, Git state, worktrees, environment files, credentials, manifests and lockfiles;
- `C:\Users\piyus\.codex`;
- `C:\Users\piyus\Documents\Codex\.pnpm-store`;
- the separate `C:\Users\piyus\AppData\Local\wsl\{GUID}\ext4.vhdx`.

Never print or inspect container environment values.

## Absolute prohibitions

Do not:

- terminate Docker processes;
- use `Stop-Process`, `taskkill`, service termination or WSL shutdown;
- attach or detach the VHDX;
- compact any other VHD/VHDX;
- run `Optimize-VHD` or third-party tools;
- delete or prune Docker objects;
- factory reset, clean/purge data or recreate Docker state;
- modify Docker Desktop settings;
- run validation, tests, migrations, installs or browser automation;
- use an alternate VHDX path;
- continue if Docker Desktop was not already quit cleanly by the user.

## Phase 0 — prerequisite and immutable checks

1. Record system-drive free bytes/GiB.
2. Resolve the exact VHDX canonical path.
3. Reject any reparse-point or path mismatch.
4. Record VHDX:
   - existence;
   - length;
   - attributes;
   - last-write time.
5. Confirm the protected reconciliation tree and both retained worktrees exist.
6. Verify both expected HEADs and record byte-preserving status snapshots.
7. Confirm Docker Desktop is fully stopped using multiple non-mutating checks:
   - Docker Desktop UI/process state;
   - Docker daemon probe must fail because the engine is stopped;
   - no active Docker Desktop backend process should retain the VHDX;
   - Windows VHD inspection must show the exact VHDX detached or read-only.
8. Do not treat an unavailable daemon by itself as adequate detached proof.
9. Use narrowly scoped inspection only. Do not enumerate or display environment variables.

If Docker is still running or the VHDX remains attached read-write:

```text
RESULT = USER_ACTION_REQUIRED
ACTION = QUIT_DOCKER_DESKTOP_MANUALLY_AND_RERUN_V2
```

Do not attempt shutdown yourself.

If free space is already at least 10 GiB, skip compaction and proceed to Docker relaunch/verification only if Docker is stopped.

## Phase 1 — detached dynamic-VHDX proof

Using Windows-supported read-only DiskPart inspection:

1. Select only:

   `C:\Users\piyus\AppData\Local\Docker\wsl\disk\docker_data.vhdx`

2. Run `detail vdisk`.
3. Prove:
   - exact selected file;
   - valid VHDX;
   - dynamically expanding type;
   - detached or read-only state.
4. Do not attach, detach, expand, shrink maximum capacity, merge, convert, repair, create or delete anything.

If dynamic type and detached/read-only state are not both proven, do not compact.

## Phase 2 — one exact compaction

Only when Phase 1 passes:

1. Record immediate pre-compaction:
   - Windows free bytes;
   - VHDX length.
2. Run elevated Windows DiskPart non-interactively with exactly:

   ```text
   select vdisk file="C:\Users\piyus\AppData\Local\Docker\wsl\disk\docker_data.vhdx"
   detail vdisk
   compact vdisk
   detail vdisk
   exit
   ```

3. No other DiskPart command is authorized.
4. Capture the non-secret result.
5. Run compaction once only.
6. Record:
   - VHDX length after;
   - system-drive free bytes/GiB after;
   - actual bytes returned to Windows.

If elevation is unavailable or DiskPart fails, do not improvise.

## Phase 3 — normal Docker Desktop relaunch

Locate the already-installed Docker Desktop executable at the standard installed location, expected:

`C:\Program Files\Docker\Docker\Docker Desktop.exe`

1. Confirm the executable exists and is the installed Docker Desktop application.
2. Launch it normally using Windows process launch semantics.
3. Do not pass reset, purge, factory, shutdown or internal flags.
4. Wait boundedly for the Docker engine.
5. Verify:
   - Docker client responds;
   - Docker server responds;
   - `docker info` succeeds.
6. If the executable cannot be safely resolved, return:
   `USER_ACTION_REQUIRED = START_DOCKER_DESKTOP_MANUALLY`.
7. Do not substitute another executable.

## Phase 4 — protected-state verification

After Docker is healthy:

1. Verify the exact canonical container ID/name/image/volume/restart policy.
2. It should be running automatically.
3. If it exists intact but remains stopped:
   - reconfirm its identity and volume;
   - start only that exact existing container;
   - do not recreate it.
4. Verify the paused Campaign Intelligence container has:
   - the exact same ID/name/image/volume;
   - status `exited`.
5. Do not start Campaign Intelligence.
6. Verify all Docker object identity inventories match the pre-stop inventory:
   - no deletions;
   - no creations;
   - no volume loss.
7. Verify all C03 database volumes, Playwright, Gitleaks, dangling images and anonymous volumes remain.
8. Reverify the reconciliation tree, HEADs and byte-preserving statuses.
9. Record final Windows free bytes/GiB.
10. Do not run canonical validation.

## Success criteria

```text
SYSTEM_DRIVE_FREE_BYTES >= 10,737,418,240
DOCKER_CLIENT = HEALTHY
DOCKER_SERVER = HEALTHY
CANONICAL_POSTGRES = RUNNING_AND_INTACT
CANONICAL_PGDATA = INTACT
CAMPAIGN_INTELLIGENCE = EXITED_AND_INTACT
RECONCILIATION_CANDIDATES = PRESERVED
UNAUTHORIZED_MUTATIONS = NONE
```

Once these pass, stop immediately. Do not clean anything else.

## Required result

Return:

```text
WINDOWS_DOCKER_VHDX_MANUAL_ROUTE_RESULT =
  RESOLVED | USER_ACTION_REQUIRED | PARTIAL | CIRCUIT_BREAKER

SYSTEM_DRIVE_FREE_BYTES_BEFORE =
SYSTEM_DRIVE_FREE_BYTES_AFTER =
SYSTEM_DRIVE_FREE_GIB_AFTER =
WINDOWS_BYTES_GAINED_BY_COMPACTION =

DOCKER_VHDX_PATH =
DOCKER_VHDX_BYTES_BEFORE =
DOCKER_VHDX_BYTES_AFTER =
DOCKER_VHDX_BYTES_REDUCED =
VHDX_TYPE =
VHDX_ATTACHMENT_PRECONDITION =
DISKPART_COMPACTION =

DOCKER_DESKTOP_PRECONDITION = MANUALLY_STOPPED | STILL_RUNNING
DOCKER_DESKTOP_RELAUNCH =
DOCKER_CLIENT_HEALTH =
DOCKER_SERVER_HEALTH =

CANONICAL_CONTAINER_ID_UNCHANGED =
CANONICAL_CONTAINER_STATUS =
CANONICAL_PGDATA = INTACT
CAMPAIGN_INTELLIGENCE_CONTAINER_ID_UNCHANGED =
CAMPAIGN_INTELLIGENCE_CONTAINER_STATUS = EXITED
CAMPAIGN_INTELLIGENCE_DB_VOLUME = INTACT

C03_DATABASE_VOLUMES = ALL_INTACT
PLAYWRIGHT_IMAGE = INTACT
GITLEAKS_IMAGES = INTACT
DANGLING_IMAGES = INTACT
ANONYMOUS_VOLUMES = INTACT

DOCKER_OBJECT_DELETIONS = 0
DOCKER_OBJECT_CREATIONS = 0
DOCKER_FACTORY_RESET = NO

ACTIVE_RECONCILIATION_TREE = PRESERVED
BACKEND_HEAD =
BACKEND_RETAINED_STATUS = PRESERVED
FRONTEND_HEAD =
FRONTEND_RETAINED_STATUS = PRESERVED
ENVIRONMENT_FILES = PRESERVED
GIT_REFS_OBJECTS = PRESERVED
SOURCE_AND_LOCKFILES = PRESERVED
SECRET_VALUES_EMITTED = NO

HOST_FREE_SPACE_10_GIB_GATE = PASS | FAIL
HOST_READY_FOR_FINAL_VALIDATION = YES | NO

UNAUTHORIZED_MUTATIONS = NONE
BLOCKERS =
NEXT_ACTION =
NEXT_BOUNDARY =
```

If resolved:

```text
NEXT_ACTION =
  RETURN THIS RESULT TO THE WINDOWS DISK CAPACITY RECOVERY PARENT
  FOR FINAL CLOSURE HANDOFF TO CANONICAL RECONCILIATION
```

## Stop conditions

Stop immediately if:

- Docker was not already quit by the user;
- the VHDX is attached read-write;
- the selected VHDX path differs by any character;
- DiskPart would run any command outside the exact allowlist;
- any protected identity changes;
- Docker requests reset/recreation;
- a secret value would be displayed;
- free space reaches at least 10 GiB and all protected-state checks pass.
