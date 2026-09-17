# Windows Docker VHDX Final Capacity Recovery — Local Codex Prompt V1

`WINDOWS_DOCKER_VHDX_FINAL_CAPACITY_RECOVERY_LOCAL_CODEX_PROMPT_V1`

## Role and authorization

You are the External Local Codex Runner executing the final bounded host-capacity recovery step for:

**Windows Host Disk Capacity Recovery for The Creator Shop Local Codex Environment**

The user requires a fast return to canonical reconciliation.

The target is limited to:

```text
SYSTEM_DRIVE_FREE_SPACE_TARGET = AT_LEAST_10 GiB
PREFERRED_STOP_RANGE = 10–12 GiB
```

Do not perform additional cleanup once the 10 GiB gate passes.

This prompt authorizes:

1. read-only preflight and preservation snapshots;
2. stopping Docker Desktop through its supported CLI;
3. compacting only the exact detached Docker data VHDX using the Windows-supported `diskpart compact vdisk` operation;
4. starting Docker Desktop through its supported CLI;
5. restoring only the expected canonical PostgreSQL runtime state if its existing restart policy does not restore it automatically;
6. final host-readiness verification.

It does not authorize deletion of any additional Docker or filesystem object.

## Current accepted recovery state

The preceding cleanup waves completed:

```text
DOCKER_INTERNAL_BYTES_REMOVED ≈ 7,532,741,925
HOST_NODE_MODULES_BYTES_RECOVERED = 4,926,099,456
CURRENT_REPORTED_SYSTEM_DRIVE_FREE_BYTES = 7,130,337,280
CURRENT_REPORTED_SYSTEM_DRIVE_FREE_GIB = 6.64
```

The Docker data VHDX did not shrink automatically.

Exact VHDX:

`C:\Users\piyus\AppData\Local\Docker\wsl\disk\docker_data.vhdx`

Last recorded logical/physical file length:

`37,383,831,552 bytes`

Microsoft documents `compact vdisk` as reducing the physical size of a dynamically expanding VHD/VHDX after files are deleted, and requires the selected disk to be detached or attached read-only.

## Absolute protected state

### Active canonical reconciliation filesystem

Protect the complete tree:

`C:\Users\piyus\Documents\Codex\2026-09-17\local-codex-runner-prompt-canonical-reconciliation`

Retained worktrees:

- `C:\Users\piyus\Documents\Codex\2026-09-17\local-codex-runner-prompt-canonical-reconciliation\work\backend.git\work\final-fixture-backend`
- `C:\Users\piyus\Documents\Codex\2026-09-17\local-codex-runner-prompt-canonical-reconciliation\work\frontend.git\work\final-harness-frontend`

Expected retained HEADs:

```text
BACKEND_HEAD =
99df138ef5602709cfd9850e5630606b7889f237

FRONTEND_HEAD =
8f600d955b27f55d011adbc5513888b763674509
```

Pre-existing porcelain status must remain byte-for-byte unchanged across this operation.

### Active canonical Docker state

Protected container:

```text
NAME =
creator-shop-acceptance-postgres

FULL_ID =
daa838b5ab95fef2a5fbd64340a3edec6726296f19dee4d26d072a5524074fd7

EXPECTED_PRE_STOP_STATUS =
running

RESTART_POLICY =
unless-stopped
```

Protected volume:

`creator_shop_acceptance_pgdata`

Protected image:

```text
postgres:16
95206741a5b214807675e14165369d05b93a9cf692223b616d07cca227e74b0b
```

### Paused Campaign Intelligence state

Protected paused container:

```text
NAME =
bi-audience-w1-3a-validation

FULL_ID =
1338ca5d383bcb8fe90f1fb7b5f5aa15f67c4f8cf2afa066424346519cc88140

EXPECTED_PRE_STOP_STATUS =
exited
```

Protected database volume:

`fd778be8e896a5c23ee62bb66abbd1fbc7cc598cf71c492bec1b01d01aebf835`

Protected image:

```text
postgres:16-alpine
cf78e76683b9ca8c5733cbbdce6c9262b45b6767934dd0a95e671f9a0fc20685
```

The paused container must remain stopped after Docker restarts.

### Other global protections

Preserve:

- every remaining Docker container, image, volume and network;
- all six retained C03 PostgreSQL volumes;
- Playwright and Gitleaks images;
- dangling images and anonymous volumes;
- every source file, Git ref/object/index, worktree and uncommitted change;
- every `.env`, `.env.*`, credential, token, PEM, key and session file;
- all manifests and lockfiles;
- `C:\Users\piyus\.codex`;
- `C:\Users\piyus\Documents\Codex\.pnpm-store`;
- the separate WSL VHDX under `C:\Users\piyus\AppData\Local\wsl`.

Do not inspect or print container environment-variable values.

## Absolute prohibitions

Do not:

- delete, prune, rename, move, export, import, recreate or reset any Docker object;
- run any Docker prune command;
- delete or alter any volume;
- run Docker Desktop Clean/Purge Data or factory reset;
- run `wsl --unregister`;
- run `wsl --shutdown` unless separately authorized; it is not authorized here;
- attach the VHDX read-write;
- detach a VHDX that remains attached after the supported Docker Desktop stop;
- compact any path except the exact Docker VHDX above;
- compact the separate `AppData\Local\wsl\{GUID}\ext4.vhdx`;
- use `Optimize-VHD`, third-party tools or undocumented Docker internal commands;
- modify Docker Desktop settings;
- run canonical validation, tests, migrations, installs or browser automation;
- expose secret values;
- continue to unrelated storage cleanup after the 10 GiB gate passes.

No additional deletion fallback is authorized in this prompt.

## Phase 0 — immutable preflight

Before stopping Docker:

1. Record:
   - system-drive total and free bytes;
   - free GiB;
   - exact Docker VHDX path, existence, attributes, file length and last-write time;
   - Docker Desktop version and status;
   - bounded `docker version` and `docker info`;
   - `docker system df`;
   - counts of containers, images, volumes and networks.
2. Verify the VHDX resolves exactly to:

   `C:\Users\piyus\AppData\Local\Docker\wsl\disk\docker_data.vhdx`

   Reject reparse-point or path-identity ambiguity.
3. Verify the protected reconciliation root and both retained worktrees exist.
4. Record:
   - backend HEAD;
   - frontend HEAD;
   - byte-preserving porcelain-status snapshots;
   - relevant Git-dir/worktree identity.
5. Verify the canonical container:
   - exact ID/name;
   - running status;
   - restart policy `unless-stopped`;
   - exact protected volume mount;
   - exact expected image ID.
6. Verify the paused Campaign Intelligence container:
   - exact ID/name;
   - exited status;
   - exact protected volume;
   - exact expected image ID.
7. Record read-only identities and counts for all Docker volumes and images sufficient to compare after restart.
8. Record names/sizes of the six retained C03 PostgreSQL volumes.
9. Do not use unrestricted `docker inspect` output.
   - Use narrowly formatted fields only.
   - Never query or emit `.Config.Env`.

If any protected identity differs, stop before Docker Desktop shutdown.

If free space is already at least 10 GiB:

- skip compaction;
- verify Docker health and protected state;
- return `ALREADY_READY`.

## Phase 1 — supported Docker Desktop stop

1. Use the supported Docker Desktop CLI:

   `docker desktop stop`

2. Wait boundedly for Docker Desktop to report stopped.
3. Confirm:
   - Docker daemon is no longer responding;
   - Docker Desktop reports stopped;
   - the exact VHDX is no longer actively mounted/attached by Docker;
   - no Docker Desktop process retains a file handle when this can be checked safely.
4. Do not kill Docker or WSL processes.
5. Do not use Task Manager termination.
6. Do not run `wsl --shutdown`.

If Docker Desktop does not stop cleanly within the bounded wait, do not compact. Attempt only the supported `docker desktop start` recovery if needed, then return a circuit breaker.

## Phase 2 — detached-VHDX proof

Before compaction:

1. Use Windows-supported read-only VHD/disk inspection to confirm:
   - the exact file is a valid VHDX;
   - it is dynamically expanding;
   - it is detached, or attached read-only;
   - it is not attached read-write.
2. A normal `diskpart` selection and `detail vdisk` inspection is permitted.
3. Do not attach or detach the VHDX yourself.
4. Do not modify its maximum size.
5. Do not expand, merge, convert or repair it.

If detached/read-only status cannot be proven, skip compaction and restart Docker Desktop.

## Phase 3 — exact Windows-supported compaction

Only when every precondition passes:

1. Record free bytes and VHDX file length immediately before compaction.
2. Invoke elevated Windows `diskpart` non-interactively with only:

   ```text
   select vdisk file="C:\Users\piyus\AppData\Local\Docker\wsl\disk\docker_data.vhdx"
   detail vdisk
   compact vdisk
   detail vdisk
   exit
   ```

3. Do not include any attach, detach, expand, delete, create, clean, convert or merge command.
4. Capture the complete non-secret DiskPart result.
5. If elevation is unavailable, permission is denied, the disk is attached read-write, or DiskPart reports an error:
   - do not improvise;
   - do not use another compaction mechanism;
   - proceed to supported Docker Desktop restart;
   - return the exact blocker.
6. After successful compaction record:
   - VHDX file length;
   - system-drive free bytes and GiB;
   - actual Windows bytes gained.

Do not repeat compaction in this turn.

## Phase 4 — supported Docker Desktop restart

1. Use:

   `docker desktop start`

2. Wait boundedly for:
   - Docker Desktop status = running;
   - `docker version` client and server success;
   - `docker info` success.
3. Do not factory reset or recreate state if startup is slow.
4. If Docker Desktop fails to become healthy within the bounded window, collect only non-secret status/log evidence and return a circuit breaker.

## Phase 5 — protected runtime restoration and verification

After Docker is healthy:

1. Verify the canonical container still has:
   - the exact same full ID and name;
   - the same image ID;
   - the same volume;
   - restart policy `unless-stopped`.
2. It should restart automatically.
3. If the exact canonical container exists intact but is stopped after Docker Desktop becomes healthy:
   - verify identity and protected volume again;
   - start only that exact existing container;
   - do not recreate it;
   - verify it becomes running.
4. Verify the paused Campaign Intelligence container:
   - exact same ID and name;
   - exact same image and volume;
   - remains exited.
   - Do not start it.
5. Verify:
   - Docker object identities/counts are unchanged from Phase 0;
   - no container/image/volume/network was deleted or created;
   - all retained C03 DB volumes remain;
   - Playwright, Gitleaks and dangling images remain.
6. Reverify:
   - active reconciliation root;
   - backend HEAD and status;
   - frontend HEAD and status;
   - environment/source/lockfile/Git preservation.
7. Record final system-drive free bytes and GiB.
8. Do not start canonical validation.

## Success and stop rules

### Success

Success requires:

- system-drive free space at least `10,737,418,240 bytes` (10 GiB);
- Docker client and server healthy;
- canonical PostgreSQL container running and intact;
- canonical PostgreSQL data volume intact;
- paused Campaign Intelligence container/volume intact and still paused;
- active reconciliation filesystem and retained candidates unchanged;
- no unauthorized mutation.

Once these pass, stop immediately. Do not pursue the 15 GiB preference and do not clean anything else.

### Partial

If compaction succeeds but final free space is below 10 GiB:

- return exact results;
- do not perform more cleanup;
- set `NEXT_BOUNDARY = PARENT_MINIMAL_FALLBACK_REVIEW`.

### Circuit breaker

Return a circuit breaker if:

- protected identities differ;
- Docker cannot stop or restart cleanly;
- detached/read-only status is unproven;
- DiskPart compaction fails;
- Docker state or filesystem state changes unexpectedly.

## Required result

Return:

```text
WINDOWS_DOCKER_VHDX_RECOVERY_RESULT =
  RESOLVED | ALREADY_READY | PARTIAL | CIRCUIT_BREAKER

SYSTEM_DRIVE_FREE_BYTES_BEFORE =
SYSTEM_DRIVE_FREE_BYTES_AFTER =
SYSTEM_DRIVE_FREE_GIB_AFTER =
WINDOWS_BYTES_GAINED_BY_COMPACTION =

DOCKER_VHDX_PATH =
DOCKER_VHDX_BYTES_BEFORE =
DOCKER_VHDX_BYTES_AFTER =
DOCKER_VHDX_BYTES_REDUCED =

VHDX_TYPE = DYNAMIC | OTHER | UNKNOWN
VHDX_ATTACHMENT_PRECONDITION = DETACHED | READ_ONLY | FAILED
DISKPART_COMPACTION = SUCCESS | SKIPPED | FAILED

DOCKER_DESKTOP_STOP = SUCCESS | FAILED
DOCKER_DESKTOP_START = SUCCESS | FAILED
DOCKER_CLIENT_HEALTH =
DOCKER_SERVER_HEALTH =
DOCKER_FACTORY_RESET = NO
DOCKER_OBJECT_DELETIONS = 0
DOCKER_OBJECT_CREATIONS = 0

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
HOST_FREE_SPACE_12_GIB_REFERENCE =
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

Include concise before/after tables for:

- Windows free space and VHDX length;
- Docker protected-object identities/status;
- reconciliation worktree identity/status.

Do not include secret values.

## Stop conditions

Stop remaining operations and preserve evidence if:

- any path other than the exact Docker VHDX is selected in DiskPart;
- DiskPart reports the VHDX attached read-write;
- any DiskPart command outside the exact allowlist is about to run;
- a protected container, volume, image, Git state or source path changes unexpectedly;
- Docker Desktop requests factory reset or data recreation;
- a secret value would be displayed;
- the 10 GiB success gate passes.
