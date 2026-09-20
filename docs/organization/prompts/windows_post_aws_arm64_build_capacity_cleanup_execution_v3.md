# Windows Host — Post-AWS ARM64 Build Capacity Cleanup Execution V3

`WINDOWS_POST_AWS_ARM64_BUILD_CAPACITY_CLEANUP_EXECUTION_V3`

## 1. Assignment and mode

You are the Local Codex execution worker for `WINDOWS_DISK_CAPACITY_RECOVERY_PARENT`.

Execute one bounded cleanup program using the completed read-only audit as the controlling local inventory. This is no longer audit-only. The exact targets and guarded conditional actions below are authorized.

No AWS, Git-governance, reconciliation, or intelligence worker may run concurrently. AWS apply remains paused. Make no AWS calls or mutations.

Do not stop merely because the 25 GB target cannot be reached safely. Execute every independently authorized safe target, compact the Docker VHDX once when useful, then return `PASS` if the target is met or `PARTIAL` with the safe maximum and exact retained blockers.

## 2. Parent correction to the audit

There is no separately expected “approximately 6.5 GB filesystem destination.”

The earlier 6.5 GB figure was an approximate estimate for recent ARM64 Docker artifacts, not a proven additional path. The audit’s layer-aware measurement of approximately 6.406 GB for the two superseded ARM64 image families is the intended capacity source.

Therefore:

```text
ADDITIONAL_APPROXIMATE_6_5_GB_LOCATION = NOT_APPLICABLE
ADDITIONAL_LOCATION_BLOCKER = CLEARED
```

Do not search for an unspecified 6.5 GB filesystem path and do not broaden into a whole-profile scan.

## 3. Completed read-only baseline

Use the audit baseline, but revalidate exact identity and references immediately before each mutation:

```text
SYSTEM_DRIVE_FREE_BYTES = 2811633664
DOCKER_HEALTH = HEALTHY
DOCKER_CLIENT = 29.7.2
DOCKER_SERVER = 29.7.2
DOCKER_VHDX =
C:\Users\piyus\AppData\Local\Docker\wsl\disk\docker_data.vhdx
DOCKER_VHDX_BYTES = 37813747712

DOCKER_IMAGES_SAFE_ESTIMATE =
APPROXIMATELY 6406000000 LAYER-AWARE BYTES

BUILDKIT_CACHE =
4706000000 BYTES / 38 RECORDS
SHARED_WITH_IMAGES =
3345000000 BYTES
PRIVATE =
1361000000 BYTES
```

The BuildKit total is not automatically reclaimable. It includes current protected AWS evidence.

## 4. Authorities and protected current state

Preserve:

### Canonical source

- Backend commit: `5bc4b5b93d38ee1dd22d77faf12778e791af12b8`
- Backend tree: `79b55b7e0b5d2820b0a7a089b77a019872cc4ae2`
- Frontend commit: `ae2d8cc83ce667b8e44ffeab2eb38e7f466ff122`
- Frontend tree: `3f21933c12867c6356dad0d22c32e90dbbe1833a`
- Infrastructure branch: `infra/creator-shop-platform-dev-v1`
- Infrastructure commit: `e94c328b139758789645f2220841799ead0bc853`
- Infrastructure tree: `eda1fcf361681b1e913d75cfc9e605f53dc0fcdf`

The governance packet commit/blob that the audit could not locate remains unverified, but this does not authorize any Git or filesystem mutation. Do not treat it as permission to delete Git material.

### Current AWS ARM64 build evidence

- Protected build-history record: `f2yw5c1vwckyw7q0njnwzbccv`
- OCI index: `sha256:b7b11ec774cd91c68bebbde6f4442252c166cecfd852544cb8e314ab6fe744c3`
- Platform manifest: `sha256:071e72b67d6fa1a1aa4ebcc9ea9600342c415d0a72f8c3d5ff3136bb92f1265c`
- Config: `sha256:bbb37c159023921d7dc1d73496a838b70b859f2adb56214b917553788e4c4ac1`
- All 18 layer descriptors referenced by the protected record
- Builder container: `4b339e3b5557687f634f0ee8d6e54cb248063304a2ecbfa8c7095b528620eb55` / `buildx_buildkit_hygiene-builder0`
- Builder state volume: `buildx_buildkit_hygiene-builder0_state`

Before mutation, capture the protected record’s exact descriptor/content identity and verify it is completed, `linux/arm64`, and internally accessible. After every Docker wave and after restart, reverify it.

### Protected runtime and volumes

- Container: `daa838b5ab95fef2a5fbd64340a3edec6726296f19dee4d26d072a5524074fd7` / `creator-shop-acceptance-postgres`
- Volume: `creator_shop_acceptance_pgdata`
- Image: `postgres:16`
- `backend-authority_postgres_data`
- All 83 anonymous volumes
- Every other volume not explicitly authorized by exact name in this prompt

Unknown Docker volumes deleted must remain zero.

### Protected images/tooling

Retain:

- `node:20-bookworm-slim`
- `postgres:17.6-bookworm`
- `tonistiigi/binfmt:latest`
- `moby/buildkit:buildx-stable-1`
- `postgres:16`

Do not remove an untagged/shared layer if it is referenced by any protected image, protected BuildKit record, protected builder, or protected container.

### Protected filesystem state

Do not alter or delete:

- the three current AWS worktrees:
  - `C:\Users\piyus\Documents\Codex\2026-09-19\files-pasted-by-the-user-aws\work\creator-shop-backend`
  - `C:\Users\piyus\Documents\Codex\2026-09-19\files-pasted-by-the-user-aws\work\creator-shop-frontend`
  - `C:\Users\piyus\Documents\Codex\2026-09-19\files-pasted-by-the-user-aws\work\creator-shop-infrastructure`
- their `node_modules`, frontend `dist`, infrastructure `cdk.out`, outputs, logs, and other current AWS-run artifacts
- `C:\Users\piyus\.cache\codex-runtimes`
- all three dirty/damaged worktrees recorded by the audit
- every Git repository, worktree, `.git` directory, archive bundle, manifest, credential-held backend archive candidate, environment file, authentication/configuration store, user document, WSL distribution, and reparse target

There is no filesystem deletion allowlist in this execution packet.

## 5. Absolute prohibitions

Do not run:

- `docker system prune --all --volumes`
- `docker volume prune`
- broad `docker image prune`
- broad `docker builder prune`
- broad `docker buildx prune`
- Docker factory reset
- `git clean`
- `git reset`
- recursive deletion against `C:\` or `C:\Users\piyus`

Do not delete, recreate, relocate, replace, or unregister the Docker VHDX/WSL distribution.

Do not print secret values or Docker environment arrays.

## 6. Pre-mutation gate

Immediately before deletion:

1. Re-measure host free bytes, VHDX bytes, Docker health, images, containers, volumes, BuildKit histories, cache, and builder identity.
2. Verify the protected ARM64 record and all its descriptors.
3. Verify the canonical PostgreSQL container is running with the same ID, image, attached volume, and restart policy.
4. Confirm neither authorized stopped container has gained a protected mount or become active.
5. Confirm every authorized image remains ARM64-build residue and has no reference other than the two authorized stopped containers identified below.
6. Confirm no concurrent worker/build is active.
7. Produce an in-memory exact deletion ledger.

If state has changed for one target, retain that target and continue with other independently safe entries. Stop the whole program only if protected state is at risk.

## 7. Wave A — exact stopped containers

Delete only these exact stopped containers, after ID and no-volume verification:

- `f6eea5a8632b8b2adad55eb821664afa6fba5671e80cc367b302bccd67125c31` / `sleepy_chaum`
- `fcabbac41d8838b19ff09ec59c1f6e033ef771c54eaaec13b222dbb41e49b182` / `vigorous_carson`

Do not use a name wildcard or stopped-container prune.

Verify the protected builder and canonical PostgreSQL remain running and unchanged.

## 8. Wave B — exact superseded classic-store ARM64 images

After Wave A, delete only the following 21 exact image IDs, one by one or as an explicit enumerated command. Before deleting each image, recheck container references. Do not force-delete an image that has acquired a reference.

1. `5e63b1f65a44cd1eec1a4bda6f887e42b73ccc5bee8f5109250a083a87d2b431`
2. `cf09b3c56ddd221e31fafbd6a279e724f13efcc50bde9255f8782cce9b0325ad`
3. `e1e7353a92eb1fa30420b1fd3302ce1763e80c4fcc41d85dc49c65868dc4ca08`
4. `88f1a1155c934998c673a7a7d3aaf7db98fe7c9e79d363c5c163ff19c221ecbd`
5. `225c0b31279df064dc0f56c68d23a30aba9ff85d81139b7082d6dacf774e1a71`
6. `bd73a5b1840a932fec1752d8ab22fc9c4f5b0db5a211086b300759a9b72fcc46`
7. `688d199f88d7006ae7b6bd318298b5ede92d943722a5642863a15296b4417194`
8. `e8ece6a25b112f39c38a1b48bea90bd37ea3be5b5cb1fefe39efe09056f12637`
9. `b79c6df156779d60dc4e46694c5888d72a768213991598622884749cee48d1a7`
10. `3de80102e63d7139112d99fc93e1daa4701b881a89c15c66c7e0dd361fd769a9`
11. `6dfdcb41d851fe0b2c2b901124f8985cd5c2e1ebe81d427aeb32873dd1d8e0ff`
12. `795a0168f6f09554058b4c418220424d5afa5855aac9abe2e2840dbbfa904bf2`
13. `396bbbe8f2da059fabe12db31ed34dd71af3a7af482488b86dd914f6a439b627`
14. `8f287002565a398a5e206df05ce33c08a21ef1f69c1f906df7f7bb19d48bb92e`
15. `91f6a076841bcef6ed75b4de72e3b61cb55346fc412582bd281de82668ecc218`
16. `3c2f6bc98e4b3a6d0c41e64809637e19c5c4d83bc0148000d5610619d9584590`
17. `bb22de459ff6eb9825ddf08a2503d170b784b9fe005797dd5c348a8391f0dd00`
18. `131f6d11631a5af8ba204c80dd73d49598d63c5da47302911e11bbae99b6b954`
19. `9904167001b3c44b3d2b584d10d7fbf577885762a3660afc4a979672d16b096a`
20. `a3dc260bfb337ac3343ef06af19efdf761b5a7b56a63adef1efbcf3afd61e87e`
21. `287fa1805c0205602dbcc07e5aa7d43ef49c43d100f023a016868aa59ffae3b5`

The tagged images `creator-shop-backend:packet-arm64` and `creator-shop-backend:hygiene-v1` are included through their exact IDs.

Record deletion success/failure for each exact ID and the layer-aware Docker space change. Do not count overlapping inspect sizes additively.

After the wave, verify the five protected images/tooling entries, protected BuildKit record, builder, PostgreSQL container, and all volumes.

## 9. Wave C — guarded BuildKit history/cache cleanup

The audit did not establish a deletion allowlist for BuildKit cache. This phase authorizes dependency mapping and deletion only when exact independence can be proven.

1. Enumerate the three BuildKit history records and identify the two records other than `f2yw5c1vwckyw7q0njnwzbccv`.
2. For each nonprotected history record, collect exact output descriptors, configs, manifests, layer/content digests, cache references, timestamps, and build association.
3. Compare them with:
   - the protected record and its 18 layer descriptors;
   - protected image/tooling content;
   - the active builder’s current requirements.
4. A nonprotected history record may be deleted by exact record ID only if it belongs to a completed superseded AWS ARM64 build and deleting it cannot remove or invalidate any protected descriptor/content.
5. Cache content may be deleted only through an exact per-record/per-content mechanism whose scope can be demonstrated before execution.
6. If the installed Docker/buildx version cannot target exact independent records/content without a broad prune, retain all BuildKit cache.
7. Never delete or recreate `buildx_buildkit_hygiene-builder0` or its state volume.
8. Never run a broad prune even if Docker labels cache “reclaimable.”
9. Reverify the protected record and its descriptors immediately after each exact history/cache deletion.

This is a bounded opportunity, not a requirement. Safety takes priority over the 25 GB target.

## 10. Wave D — Docker VHDX compaction

After Docker deletions:

1. Measure Docker internal usage, host free bytes, and VHDX allocated bytes.
2. Confirm the protected builder and PostgreSQL database are quiescent and no build/database write is active.
3. Stop Docker Desktop through a supported clean route.
4. If the Docker Desktop CLI stop command is unavailable, pause this same task once and ask the user to choose **Quit Docker Desktop** from the tray/menu. Resume after the user replies `done`; do not publish the final report before compaction is resolved.
5. Verify Docker/WSL processes are stopped and the exact VHDX is detached.
6. Verify the VHDX is dynamic.
7. Run one exact DiskPart `compact vdisk` operation against:
   `C:\Users\piyus\AppData\Local\Docker\wsl\disk\docker_data.vhdx`
8. Do not delete, recreate, move, replace, or factory-reset the VHDX.
9. Relaunch Docker Desktop from its verified installed executable.
10. Wait boundedly and verify Docker client/server health.
11. Reverify protected ARM64 BuildKit evidence, builder, protected images, canonical PostgreSQL container/volume, and volume inventory.
12. Record final host free bytes and VHDX allocated bytes.

If safe stop, detachment, or compaction cannot be proven, skip it and return `PARTIAL`. Do not use task-killing, WSL unregister, or destructive fallback.

## 11. Final protections and validation

Confirm:

- protected current AWS ARM64 build record, index, platform manifest, config, and all 18 layers remain accessible;
- canonical PostgreSQL has the same container ID, image, volume, and restart policy;
- all 84 unknown/unattributed volumes remain present;
- unknown volumes deleted = zero;
- all three dirty/damaged worktrees remain unchanged;
- all current AWS worktrees and generated outputs remain unchanged;
- canonical backend/frontend/infrastructure identities remain unchanged;
- environment, AWS SSO/CLI, GitHub CLI, SSH, credential-manager, and secret-bearing paths remain present;
- no AWS interaction occurred;
- no Git mutation occurred;
- no factory reset occurred.

Do not expose secret values.

## 12. Required result

Return one consolidated result:

```text
WINDOWS_POST_AWS_ARM64_BUILD_CAPACITY_CLEANUP_RESULT =
PASS | PARTIAL | CIRCUIT_BREAKER

SYSTEM_DRIVE_FREE_BYTES_BEFORE =
SYSTEM_DRIVE_FREE_BYTES_AFTER =
NET_FREE_SPACE_RECOVERED =

DOCKER_VHDX_BYTES_BEFORE =
DOCKER_VHDX_BYTES_AFTER =
DOCKER_INTERNAL_BYTES_RECLAIMED =

STOPPED_CONTAINERS_REMOVED =
<exact IDs/names>

SUPERSEDED_ARM64_IMAGES_REMOVED =
<exact IDs>

SUPERSEDED_ARM64_IMAGES_RETAINED =
<exact IDs and reasons>

BUILDKIT_HISTORY_RECORDS_REMOVED =
<exact IDs or NONE>

BUILDKIT_CACHE_BYTES_RECLAIMED =
<integer or ZERO_NOT_SAFELY_TARGETABLE>

LATEST_AWS_ARM64_BUILD_RECORD =
PRESERVED | FAIL

LATEST_AWS_ARM64_INDEX =
PRESERVED | FAIL

LATEST_AWS_ARM64_PLATFORM_MANIFEST =
PRESERVED | FAIL

LATEST_AWS_ARM64_CONFIG =
PRESERVED | FAIL

CREATOR_SHOP_ACCEPTANCE_POSTGRES =
PRESERVED | FAIL

UNKNOWN_DOCKER_VOLUMES_DELETED =
ZERO | FAIL

CANONICAL_GIT_AUTHORITIES =
PRESERVED | FAIL

CURRENT_AWS_WORKTREES =
PRESERVED | FAIL

DIRTY_WORKTREES =
PRESERVED | FAIL

ENVIRONMENT_AND_AUTH_FILES =
PRESERVED | FAIL

DOCKER_HEALTH_AFTER =
PASS | FAIL

DOCKER_FACTORY_RESET =
NO

AWS_INTERACTION =
NONE

TARGET_25_GB_FREE_SPACE =
PASS | FAIL_SAFE_MAXIMUM_REACHED

HOST_READY_FOR_AWS_RESUMPTION =
YES | NO

RETAINED_HIGH_VOLUME_ITEMS =
<exact objects/paths, sizes and reasons>

BLOCKERS =
NONE | <exact blockers>

NEXT_BOUNDARY =
PARENT REVIEW
```

Also include:

- exact before/after image inventory;
- exact deletion evidence with measured recovery;
- BuildKit protected-versus-deleted dependency table;
- retained high-volume classification;
- confirmation that the prior “6.5 GB location” was the ARM64 image-family estimate and not a separate path.

Do not include execution-time telemetry.
