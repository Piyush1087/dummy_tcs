# Windows Docker Desktop Startup Recovery — dockerInference Endpoint V1

`WINDOWS_DOCKER_DESKTOP_STARTUP_RECOVERY_DOCKERINFERENCE_V1`

## 1. Assignment

You are the Local Codex execution worker for `WINDOWS_DISK_CAPACITY_RECOVERY_PARENT`.

Execute this as a separate, narrowly bounded Docker startup-recovery operation.

The preceding ARM64 cleanup and VHDX compaction completed within authority, but Docker Desktop 4.86.0 failed during restart because it could not remove one exact endpoint:

```text
C:\Users\piyus\AppData\Local\Docker\run\dockerInference
```

The endpoint was reported as a zero-byte reparse-point runtime socket created during Docker restart.

This packet authorizes read-only classification followed, only if every gate passes, by deletion of that exact stale endpoint. It does not authorize any additional capacity cleanup.

AWS execution remains paused. Git-governance, reconciliation, intelligence, AWS, deployment, build, test, image-build, and provider work must not run concurrently.

## 2. Current recovery state

```text
SYSTEM_DRIVE_FREE_BYTES =
7515115520

APPROXIMATE_FREE_SPACE =
7.00 GiB

DOCKER_VHDX_BYTES =
31202476032

DOCKER_HEALTH =
FAIL_AFTER_RESTART

TARGET_25_GB_FREE_SPACE =
NOT_REACHED

AWS_RESUMPTION =
NOT_AUTHORIZED
```

The prior cleanup removed the two exact stopped ARM64-build containers and all 21 authorized superseded classic-store ARM64 images. It deleted no BuildKit history/cache/blob, volume, Git state, worktree, environment/authentication file, or AWS state.

Do not repeat any previous deletion or compaction.

## 3. Absolute execution boundary

Authorized sequence:

1. Read-only process and endpoint verification.
2. Exact endpoint deletion only if all gates pass.
3. Docker Desktop relaunch.
4. Docker and protected-state verification.
5. One consolidated result.

Not authorized:

- image deletion;
- container deletion;
- cache or BuildKit deletion;
- volume deletion;
- filesystem cleanup beyond the exact endpoint;
- VHDX cleanup, compaction, replacement, movement, or recreation;
- Docker factory reset;
- WSL unregister;
- Git mutation;
- AWS interaction;
- build, test, migration, deployment, or provider execution.

## 4. Protected state

Preserve all current state, including:

### Latest AWS ARM64 BuildKit evidence

- Build-history record: `f2yw5c1vwckyw7q0njnwzbccv`
- OCI index: `sha256:b7b11ec774cd91c68bebbde6f4442252c166cecfd852544cb8e314ab6fe744c3`
- Platform manifest: `sha256:071e72b67d6fa1a1aa4ebcc9ea9600342c415d0a72f8c3d5ff3136bb92f1265c`
- Config: `sha256:bbb37c159023921d7dc1d73496a838b70b859f2adb56214b917553788e4c4ac1`
- All 18 referenced layer descriptors

### Builder

- Container ID: `4b339e3b5557687f634f0ee8d6e54cb248063304a2ecbfa8c7095b528620eb55`
- Name: `buildx_buildkit_hygiene-builder0`
- State volume: `buildx_buildkit_hygiene-builder0_state`

### Five retained images

- `node:20-bookworm-slim`
- `postgres:17.6-bookworm`
- `tonistiigi/binfmt:latest`
- `moby/buildkit:buildx-stable-1`
- `postgres:16`

### Canonical database

- Container ID: `daa838b5ab95fef2a5fbd64340a3edec6726296f19dee4d26d072a5524074fd7`
- Name: `creator-shop-acceptance-postgres`
- Volume: `creator_shop_acceptance_pgdata`
- Preserve its exact image, mount, ID, and restart policy.

### Volumes

Preserve all 86 volumes:

- `creator_shop_acceptance_pgdata`;
- `buildx_buildkit_hygiene-builder0_state`;
- `backend-authority_postgres_data`;
- all 83 anonymous volumes.

The 84 unknown/unattributed volumes are `backend-authority_postgres_data` plus the 83 anonymous volumes. Unknown volumes deleted must remain zero.

### Filesystem, Git, credentials, and AWS

Preserve every Git repository/worktree/archive, current AWS worktree and artifact, dirty/damaged worktree, environment file, AWS SSO/CLI state, GitHub CLI authentication, SSH key, credential-manager entry, secret-bearing configuration, user document, WSL distribution, and Docker VHDX.

## 5. Phase A — read-only stop verification

Before inspecting or deleting the endpoint:

1. Record current system-drive free bytes.
2. Confirm Docker client/server are unavailable because startup failed.
3. Confirm Docker Desktop is not running.
4. Confirm relevant Docker Desktop backend, engine, VM, BuildKit, container runtime, and Docker-owned WSL processes are fully stopped.
5. Use supported read-only process inspection. Do not kill processes.
6. If Docker Desktop or a relevant Docker/WSL process is active, ask the user to choose **Quit Docker Desktop** from the tray/menu and wait for confirmation.
7. Recheck until cleanly stopped or declare a circuit breaker.

Do not delete the endpoint while Docker or the relevant WSL/Docker runtime is active.

## 6. Phase B — exact reparse-point inspection

Inspect only this literal path without following it recursively:

```text
C:\Users\piyus\AppData\Local\Docker\run\dockerInference
```

Record:

- whether it exists;
- item type;
- attributes;
- reparse tag/type;
- link target/substitute name;
- reported length;
- creation and modification timestamps;
- owner where safely available;
- whether the target exists;
- resolved target path, without traversing its contents;
- whether the resolved target is within Docker-managed transient runtime state;
- whether it points into the Docker VHDX, a WSL distribution, a protected worktree, user documents, credentials, environment/configuration storage, a database directory, or any other protected location.

Do not enumerate or delete the parent directory. Do not recursively inspect the target.

## 7. Exact deletion gate

Deletion is authorized only if every condition is true:

1. Docker Desktop and relevant Docker/WSL processes are fully stopped.
2. The literal endpoint still exists.
3. It is exactly the reported zero-byte reparse-point/runtime-socket endpoint.
4. It is Docker-managed transient runtime state.
5. It is stale and not actively referenced.
6. Its resolved target is absent or confined to Docker-managed transient runtime space.
7. It does not point into protected storage or outside the expected Docker runtime boundary.
8. Deleting the link/endpoint itself will not delete or traverse its target.
9. The exact literal path is used without a wildcard, unresolved variable, parent-directory deletion, or recursive flag.

If any condition is unproved, delete nothing and return `CIRCUIT_BREAKER`.

## 8. Phase C — exact endpoint repair

If all deletion gates pass:

- Delete only:
  `C:\Users\piyus\AppData\Local\Docker\run\dockerInference`
- Delete the endpoint/link itself, not its resolved target.
- Use a literal-path, nonrecursive operation appropriate to its verified Windows reparse type.
- Do not delete, rename, clean, or recreate:
  `C:\Users\piyus\AppData\Local\Docker\run`
  or anything else within it.
- Verify the exact endpoint is absent afterward.
- Record whether deletion succeeded.

No second filesystem target is authorized.

## 9. Phase D — Docker relaunch and health

1. Relaunch Docker Desktop from its verified installed executable.
2. Wait boundedly for startup.
3. Verify Docker client and server health and versions.
4. If Docker fails, capture only non-secret error metadata relevant to the failure.
5. Do not factory-reset, reinstall, unregister WSL, delete another socket, or attempt an unapproved workaround.
6. If the same endpoint is recreated while Docker becomes healthy, classify that as normal transient runtime recreation.
7. If startup fails on a different target, stop and return for Parent review.

## 10. Protected-state reverification

After Docker becomes healthy, verify:

1. Protected BuildKit history record `f2yw5c1vwckyw7q0njnwzbccv` is accessible, completed 27/27, and `linux/arm64`.
2. Protected OCI index, platform manifest, config, and all 18 layer descriptors remain accessible.
3. Builder container `4b339e3b5557687f634f0ee8d6e54cb248063304a2ecbfa8c7095b528620eb55` and `buildx_buildkit_hygiene-builder0_state` remain intact.
4. All five retained images remain present.
5. `creator-shop-acceptance-postgres` has the same container ID, image, volume, and restart policy and is running or has its expected protected status.
6. Exactly 86 volumes remain present.
7. All 84 unknown/unattributed volumes remain present.
8. No image, container, cache, history, blob, builder, volume, VHDX, Git, worktree, environment/authentication, or AWS mutation occurred beyond deletion of the exact stale endpoint.
9. Record final system-drive free bytes.

Do not print Docker environment arrays or secret values.

## 11. Capacity and AWS boundary

Approximately 7 GiB free remains below the safe capacity target for AWS resumption.

Even if Docker health is restored:

```text
HOST_READY_FOR_AWS_RESUMPTION = NO
AWS_REMAINS_PAUSED = YES
```

Do not resume AWS work. Capacity planning remains a separate Parent decision after startup recovery.

## 12. Required result

Return one consolidated report:

```text
WINDOWS_DOCKER_DESKTOP_STARTUP_RECOVERY_RESULT =
PASS | PARTIAL | CIRCUIT_BREAKER

DOCKER_PROCESSES_STOPPED_BEFORE_REPAIR =
YES | NO

DOCKERINFERENCE_PATH =
C:\Users\piyus\AppData\Local\Docker\run\dockerInference

DOCKERINFERENCE_CLASSIFICATION =
STALE_DOCKER_TRANSIENT_REPARSE_ENDPOINT | PROTECTED_OR_AMBIGUOUS | ABSENT

DOCKERINFERENCE_REPARSE_TYPE =
<exact type or NOT_APPLICABLE>

DOCKERINFERENCE_TARGET =
<non-secret exact resolved target or ABSENT | UNRESOLVED>

DOCKERINFERENCE_TARGET_WITHIN_TRANSIENT_DOCKER_RUNTIME =
YES | NO | UNPROVED

DOCKERINFERENCE_DELETED =
YES | NO

OTHER_FILESYSTEM_TARGETS_DELETED =
NONE

DOCKER_HEALTH_AFTER =
PASS | FAIL

DOCKER_CLIENT_VERSION_AFTER =
<version or UNAVAILABLE>

DOCKER_SERVER_VERSION_AFTER =
<version or UNAVAILABLE>

LATEST_AWS_ARM64_BUILD_RECORD =
PRESERVED | FAIL | NOT_VERIFIABLE_DOCKER_UNAVAILABLE

LATEST_AWS_ARM64_DESCRIPTORS =
PRESERVED | FAIL | NOT_VERIFIABLE_DOCKER_UNAVAILABLE

BUILDER_CONTAINER =
PRESERVED | FAIL | NOT_VERIFIABLE_DOCKER_UNAVAILABLE

BUILDER_STATE_VOLUME =
PRESERVED | FAIL | NOT_VERIFIABLE_DOCKER_UNAVAILABLE

FIVE_RETAINED_IMAGES =
PRESERVED | FAIL | NOT_VERIFIABLE_DOCKER_UNAVAILABLE

CREATOR_SHOP_ACCEPTANCE_POSTGRES =
PRESERVED | FAIL | NOT_VERIFIABLE_DOCKER_UNAVAILABLE

TOTAL_VOLUMES_AFTER =
<integer or NOT_VERIFIABLE_DOCKER_UNAVAILABLE>

UNKNOWN_UNATTRIBUTED_VOLUMES_AFTER =
<integer or NOT_VERIFIABLE_DOCKER_UNAVAILABLE>

UNKNOWN_VOLUMES_DELETED =
ZERO | FAIL

IMAGES_DELETED =
ZERO

CONTAINERS_DELETED =
ZERO

BUILDKIT_OR_CACHE_DELETIONS =
ZERO

VHDX_MUTATIONS =
ZERO

GIT_MUTATIONS =
ZERO

AWS_INTERACTION =
NONE

SYSTEM_DRIVE_FREE_BYTES_BEFORE =
SYSTEM_DRIVE_FREE_BYTES_AFTER =

HOST_READY_FOR_AWS_RESUMPTION =
NO

AWS_REMAINS_PAUSED =
YES

BLOCKERS =
NONE | <exact blockers>

NEXT_BOUNDARY =
PARENT REVIEW
```

Do not include execution-time telemetry.
