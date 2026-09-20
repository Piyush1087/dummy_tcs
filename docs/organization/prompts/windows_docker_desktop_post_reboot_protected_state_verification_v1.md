# Windows Docker Desktop — Post-Reboot Protected-State Verification V1

`WINDOWS_DOCKER_DESKTOP_POST_REBOOT_PROTECTED_STATE_VERIFICATION_V1`

## Assignment

You are the Local Codex verification worker for `WINDOWS_DISK_CAPACITY_RECOVERY_PARENT`.

The user manually restarted Windows and visually confirms Docker Desktop launched normally. Perform one bounded, strictly read-only verification.

Do not delete, modify, restart, stop, repair, reset, prune, compact, build, test, migrate, deploy, or invoke AWS.

## Current boundary

```text
MODE = READ_ONLY
DOCKER_DESKTOP_VISUAL_STATUS = WORKING_NORMALLY
AWS_REMAINS_PAUSED = YES
HOST_READY_FOR_AWS_RESUMPTION = NO_UNTIL_PARENT_REVIEW
```

The prior recovery deleted 21 superseded classic-store ARM64 images and two stopped containers, then compacted the Docker VHDX. A later startup attempt failed on:

```text
C:\Users\piyus\AppData\Local\Docker\run\dockerInference
```

No endpoint deletion was performed. Windows was subsequently restarted.

## Verify Docker health

Record without mutation:

- Docker Desktop process status;
- Docker client version;
- Docker server version;
- engine health;
- active Docker context;
- WSL/Docker distribution status;
- system-drive free bytes;
- Docker VHDX physical/allocated bytes.

Do not stop or restart anything.

## Inspect the prior endpoint read-only

Check only whether this literal path exists:

```text
C:\Users\piyus\AppData\Local\Docker\run\dockerInference
```

If Windows permits ordinary read-only metadata inspection, record its type, attributes and target without following it recursively. If inspection again returns error 1920, record that fact and continue because Docker is now healthy.

Do not delete or alter the endpoint regardless of its state.

## Protected BuildKit evidence

Verify:

- Build-history record: `f2yw5c1vwckyw7q0njnwzbccv`
- Status: completed 27/27
- Platform: `linux/arm64`
- OCI index: `sha256:b7b11ec774cd91c68bebbde6f4442252c166cecfd852544cb8e314ab6fe744c3`
- Platform manifest: `sha256:071e72b67d6fa1a1aa4ebcc9ea9600342c415d0a72f8c3d5ff3136bb92f1265c`
- Config: `sha256:bbb37c159023921d7dc1d73496a838b70b859f2adb56214b917553788e4c4ac1`
- All 18 referenced layer descriptors remain accessible.

Verify no BuildKit history, cache record, content blob, manifest, config, or layer was deleted by the reboot/startup.

## Protected builder

Verify:

- Container ID: `4b339e3b5557687f634f0ee8d6e54cb248063304a2ecbfa8c7095b528620eb55`
- Name: `buildx_buildkit_hygiene-builder0`
- State volume: `buildx_buildkit_hygiene-builder0_state`
- Expected builder identity and state remain intact.

Do not start, stop, recreate, bootstrap, inspect environment values, or mutate the builder.

## Five retained images

Verify exact presence and IDs for:

- `node:20-bookworm-slim`
- `postgres:17.6-bookworm`
- `tonistiigi/binfmt:latest`
- `moby/buildkit:buildx-stable-1`
- `postgres:16`

Confirm the 21 superseded classic-store ARM64 IDs remain absent. Do not pull or delete images.

## Canonical PostgreSQL

Verify:

- Container ID: `daa838b5ab95fef2a5fbd64340a3edec6726296f19dee4d26d072a5524074fd7`
- Name: `creator-shop-acceptance-postgres`
- Image: `postgres:16`
- Volume: `creator_shop_acceptance_pgdata`
- Same restart policy
- Runtime status and health where available.

Do not query database contents, print environment arrays, expose secrets, restart the container, or mutate the database.

## Volume continuity

Verify exactly 86 volumes remain:

- `creator_shop_acceptance_pgdata`;
- `buildx_buildkit_hygiene-builder0_state`;
- `backend-authority_postgres_data`;
- all 83 anonymous volumes.

Confirm all 84 unknown/unattributed volumes remain present and zero volumes were deleted during recovery/reboot.

Do not mount, inspect contents, delete, or prune any volume.

## Filesystem and authority continuity

Read-only confirm that these remain present and unchanged at the identity/status level already recorded:

- three current AWS worktrees and their generated artifacts;
- three dirty/damaged worktrees;
- canonical backend/frontend/infrastructure identities;
- environment and authentication paths.

Do not read secret contents. Do not perform Git fetch, checkout, reset, clean, commit, push, or any other mutation.

## Capacity and AWS boundary

Record current system-drive free bytes. Approximately 7 GiB before reboot was below the safe AWS resumption target.

This packet cannot authorize AWS resumption even if Docker is healthy:

```text
AWS_REMAINS_PAUSED = YES
HOST_READY_FOR_AWS_RESUMPTION = NO_PENDING_PARENT_CAPACITY_REVIEW
```

## Required result

Return:

```text
WINDOWS_DOCKER_DESKTOP_POST_REBOOT_VERIFICATION_RESULT =
PASS | PARTIAL | CIRCUIT_BREAKER

DOCKER_DESKTOP_PROCESS =
RUNNING | NOT_RUNNING

DOCKER_CLIENT_HEALTH =
PASS | FAIL

DOCKER_SERVER_HEALTH =
PASS | FAIL

DOCKER_CLIENT_VERSION =
DOCKER_SERVER_VERSION =

DOCKERINFERENCE_ENDPOINT =
ABSENT | PRESENT_READABLE | PRESENT_INACCESSIBLE_1920 | OTHER

SYSTEM_DRIVE_FREE_BYTES =
DOCKER_VHDX_BYTES =

LATEST_AWS_ARM64_BUILD_RECORD =
PRESERVED | FAIL

LATEST_AWS_ARM64_DESCRIPTORS =
PRESERVED | FAIL

BUILDER_CONTAINER =
PRESERVED | FAIL

BUILDER_STATE_VOLUME =
PRESERVED | FAIL

FIVE_RETAINED_IMAGES =
PRESERVED | FAIL

SUPERSEDED_21_IMAGE_IDS =
ABSENT | UNEXPECTEDLY_PRESENT

CREATOR_SHOP_ACCEPTANCE_POSTGRES =
PRESERVED | FAIL

CREATOR_SHOP_ACCEPTANCE_POSTGRES_STATUS =

TOTAL_VOLUMES =
UNKNOWN_UNATTRIBUTED_VOLUMES =

UNKNOWN_VOLUMES_DELETED =
ZERO | FAIL

CURRENT_AWS_WORKTREES =
PRESERVED | FAIL

DIRTY_WORKTREES =
PRESERVED | FAIL

CANONICAL_GIT_AUTHORITIES =
PRESERVED | FAIL

ENVIRONMENT_AND_AUTH_PATHS =
PRESERVED | FAIL

MUTATIONS_PERFORMED =
NONE

AWS_INTERACTION =
NONE

AWS_REMAINS_PAUSED =
YES

HOST_READY_FOR_AWS_RESUMPTION =
NO_PENDING_PARENT_CAPACITY_REVIEW

BLOCKERS =
NONE | <exact blockers>

NEXT_BOUNDARY =
PARENT REVIEW
```

Do not include execution-time telemetry or secret values.
