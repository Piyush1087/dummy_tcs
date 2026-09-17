# Windows Docker C03 Historical Runtime Cleanup — Local Codex Prompt V1

`WINDOWS_DOCKER_C03_HISTORICAL_RUNTIME_CLEANUP_LOCAL_CODEX_PROMPT_V1`

## Role and authorization

You are the External Local Codex Runner executing the first bounded Docker cleanup wave for:

**Windows Host Disk Capacity Recovery for The Creator Shop Local Codex Environment**

The Parent has reviewed the read-only Docker ownership audit and the user has approved deletion of the nine exact historical C03 dependency/dist volumes listed below.

This cleanup is authorized only for:

1. 26 exact stopped historical C03 containers;
2. one exact stopped `hello-world` container;
3. nine exact C03 dependency/dist volumes;
4. six exact C03 networks, only after every attached allowlisted container is removed and the network has zero remaining endpoints;
5. the exact Node 20 image, only after all allowlisted C03 containers are removed and Docker proves zero remaining container references;
6. the exact `hello-world` image, only after its allowlisted container is removed and Docker proves zero remaining references.

No other mutation is authorized.

## Controlling audit

```text
WINDOWS_DOCKER_OWNERSHIP_AUDIT_RESULT = PARTIAL_TIME_LIMIT
DOCKER_CLIENT = 29.7.2
DOCKER_SERVER = 29.7.2
DOCKER_DESKTOP = 4.86.0
SYSTEM_DRIVE_FREE_BYTES_AT_AUDIT_END = 2,219,565,056
```

The audit found:

- C03 allowlisted container writable layers: `2,302,922,752 bytes`;
- C03 dependency/dist volumes: approximately `5,229,800,000 bytes`;
- Node 20 unique image size after C03 removal: approximately `1,592,000,000 bytes`.

These are Docker-internal logical/unique measurements. They are not guaranteed Windows free-space gains.

## Absolute protected state

### Active canonical reconciliation

Protect the complete tree:

`C:\Users\piyus\Documents\Codex\2026-09-17\local-codex-runner-prompt-canonical-reconciliation`

Known retained worktrees:

- `C:\Users\piyus\Documents\Codex\2026-09-17\local-codex-runner-prompt-canonical-reconciliation\work\backend.git\work\final-fixture-backend`
- `C:\Users\piyus\Documents\Codex\2026-09-17\local-codex-runner-prompt-canonical-reconciliation\work\frontend.git\work\final-harness-frontend`

Protected Docker objects:

- container:
  - name: `creator-shop-acceptance-postgres`
  - expected ID: `daa838b5ab95fef2a5fbd64340a3edec6726296f19dee4d26d072a5524074fd7`
- volume: `creator_shop_acceptance_pgdata`
- image: `postgres:16`, expected image ID:
  `95206741a5b214807675e14165369d05b93a9cf692223b616d07cca227e74b0b`
- shared `bridge` network.

### Paused Campaign Intelligence

Protect:

- container:
  - name: `bi-audience-w1-3a-validation`
  - expected ID: `1338ca5d383bcb8fe90f1fb7b5f5aa15f67c4f8cf2afa066424346519cc88140`
- database volume:
  `fd778be8e896a5c23ee62bb66abbd1fbc7cc598cf71c492bec1b01d01aebf835`
- image:
  `postgres:16-alpine`, expected image ID:
  `cf78e76683b9ca8c5733cbbdce6c9262b45b6767934dd0a95e671f9a0fc20685`
- shared `bridge` network.

Stopped status does not weaken this protection.

### Protected C03 database volumes

Do not delete or modify:

- `tcs-c03-p3-pgdata`
- `tcs-c03-p3-v3-pgdata`
- `tcs-c03-p6-pgdata`
- `tcs-c03-p12-pgdata`
- `tcs-c03-p13-pgdata`
- `tcs-c03-p14-pgdata`

The allowlisted C03 PostgreSQL containers may be removed, but these six named database volumes must remain.

### Other protected Docker state

Do not modify or delete:

- any C02A, C04, C06 or GAB1 container, volume, image or network;
- the Playwright `v1.61.1-noble` image:
  `5b8f294aff9041b7191c34a4bab3ac270157a28774d4b0660e9743297b697e48`;
- either Gitleaks image:
  - `c00b6bd0aeb3071cbcb79009cb16a60dd9e0a7c60e2be9ab65d25e6bc8abbb7f`;
  - `b5918eb91b8d2473cec722f066abb4352e4ffdc4ec9f4283ec143aba9ec9ebc4`;
- every dangling or intermediate image;
- all anonymous volumes;
- every volume not in the nine-volume allowlist;
- every container, image or network not explicitly allowlisted;
- Docker Desktop settings, factory state and data-disk location;
- the Docker/WSL VHDX;
- all source files, bind-mounted directories, repositories, worktrees, Git state, environment files, credentials, manifests and lockfiles;
- `C:\Users\piyus\.codex`;
- `C:\Users\piyus\Documents\Codex\.pnpm-store`.

Do not inspect environment-variable values, secret contents or database rows.

## Prohibited broad operations

Do not run:

- `docker system prune`;
- `docker container prune`;
- `docker image prune`;
- `docker volume prune`;
- `docker network prune`;
- `docker builder prune` or `docker buildx prune`;
- `docker compose down`, `docker compose rm` or any Compose-wide cleanup;
- any Docker Desktop clean/purge/factory-reset action;
- any WSL shutdown, unregister, export/import or VHDX compaction;
- any wildcard, prefix-generated, regex-generated or discovered deletion;
- any deletion outside the exact allowlists below.

Do not use `--volumes` with container deletion.

Do not stop, restart, pause or otherwise modify protected containers.

## Exact allowlist A — historical C03 containers

Each entry is authorized only when both its full ID and exact name match and its state remains stopped/exited.

```text
265cda6be26d2dcbfb538e8276c7235785b18ff9f8202815b55e74e889c9b925  tcs-c03-p6-node
abebc1ef51a15aae8dc4e64125eef5d525d23a918e78d7ba646c1436d5b57ae7  tcs-c03-p6-postgres
9cbea851bb2ab0434b084b71e93295c670ee9dcc98368586d624fc5943a5fef7  tcs-c03-p6-v2-install
cf8fef4988c1a94e331c245d707c80fe9b853f60e1ec3cf2382f0c9bf483b7a4  tcs-c03-p6-correction-node
d62310c2348ecf33813fde1cd8df984ccfd0cc147ab15fd44786ec523ec1d7b6  tcs-c03-p5-forward
063e3870411b2f1417b5c9056ea3c96e21d1b5ac9fc36f8db06283506944e0a9  tcs-c03-p5-frontend-node
8d0084b5883868c008fbbd2b86e37c51feec0abbc51d3cd35fe36b6f4fbf9852  tcs-c03-p5-backend-node
1faae2ec9f881569d962496ec23f1b3862c34826da9011df28ad6ab70fed0eb2  tcs-c03-p4-backend
cd72c06ff2102cc63f447d3a3cc8f01d6394dc17896ec9ec0cc31aa62afb841d  tcs-c03-p4-forward
7437323b10c23e7f0689da803490cfc9a05b708d93a4f1900c31095effc1cd3a  tcs-c03-p4-preview
a6268688671417483978cdc1809ca251712accf717ff5ee611cc2e5385c499d2  tcs-c03-p4-backend-first
6ac8beb7172b507fdec3e6a333535a1b7a4877abfb7abd86585b6e9a816a338c  tcs-c03-p4-web
680092c34f07709d5b42ed742db96d1b55a209fd74deb03b07eb4b81055cc555  tcs-c03-p4-node
1dfbfae62922d0352920c4ef06cce361cf0d5f601dcc178552bf4112e716be04  tcs-c03-p3-v4-node
cd2e04b661677e9b7b58c99a9b8ec50cc5d0dd772bea64a2972a4bfe24bc53f0  tcs-c03-p3-v3-node
85216ce14618e51574fd5f4841fb20e4ecd98dfd3d8dd92e76c4b6d7ffb893e1  tcs-c03-p3-v3-postgres
35c74697a54ef3334dcdbf940c7786c5eed31d964d56f86846b6f0ef4fff85cf  tcs-c03-p3-node
37e21d7ff50cb49d8b2492f59af7b8e8bfd3dae5f0780047a702d508f8436c37  tcs-c03-p3-postgres
5f649d96ec8707a894caeaa9a1e945ce9d2bd3955207cf1a7712316249151192  tcs-c03-p14-runtime
c56e5371c10a247cdc06742f68722d64e152ff51831f0fc0deb157278cac70f7  tcs-c03-p14-runner
6af3a09c8ced2cd5c0ddb06e0733e393fc4beb35ed9170d419b8ec5a13503573  tcs-c03-p14-postgres
a328538f41d6267567a806ffb98a007e9150e3e709c73ccb250f98b727c00fbd  tcs-c03-p13-runtime
473c9f91c4d6be242f70171f4d4c312cef4727cb600bfd9dc94697ff275d22a6  tcs-c03-p13-runner
90041178417e0dcf8c7229ab0910332840243e7443daff8f439b95c6eaf0779e  tcs-c03-p13-postgres
2fe33ce019ce3bff677ee921a34742bdfef62e384d5501c946a42d74d9b1d91a  tcs-c03-p12-runner
3c5e2d43756c5195c157d3160aef5212e279c39077fcc2639e51d42de20c1e73  tcs-c03-p12-postgres
```

Count: `26`.

## Exact allowlist B — trivial historical container

```text
3333ac4950442a5b63e20eb4e53e36d64099ee9c47175afbf8e3d51e531d8c0a  funny_curie
```

Count: `1`.

## Exact allowlist C — regenerable C03 dependency/dist volumes

The user explicitly approved these exact volumes.

```text
tcs-c03-p3-dist
tcs-c03-p3-node-modules
tcs-c03-p4-node-modules
tcs-c03-p5-frontend-modules
tcs-c03-p5-backend-modules
tcs-c03-p6-correction-modules
tcs-c03-p12-node-modules
tcs-c03-p13-node-modules
tcs-c03-p14-node-modules
```

Count: `9`.

Expected audit-reported total: approximately `5,229,800,000 bytes`.

## Exact allowlist D — C03 networks

```text
tcs-c03-p3-net      expected prior ID prefix ebdcbea8
tcs-c03-p3-v3-net   expected prior ID prefix c133c8ee
tcs-c03-p6-net      expected prior ID prefix cf3e85fe
tcs-c03-p12-net     expected prior ID prefix bc62cfe9
tcs-c03-p13-net     expected prior ID prefix f4bee627
tcs-c03-p14-net     expected prior ID prefix a4c2c324
```

Count: `6`.

These networks may be removed only if:

- exact name and expected prior ID prefix still match;
- all allowlisted container deletions have completed or the remaining endpoints are zero;
- Docker inspection proves zero remaining endpoints;
- no protected or unallowlisted container references them.

Networks provide negligible disk recovery. Skip rather than force if any condition is uncertain.

## Exact allowlist E — conditional images

### Node 20 image

```text
IMAGE_ID =
8f693eaa7e0a8e71560c9a82b55fd54c2ae920a2ba5d2cde28bac7d1c01c9ba5

EXPECTED_TAGS =
node:20-bookworm
node:20.20.2-bookworm
```

Delete only after:

- every eligible container in allowlist A has been removed;
- Docker reports zero remaining containers referencing this image ID;
- no protected or unallowlisted container references it;
- the immutable ID still resolves to the expected tags;
- the protected canonical and Campaign Intelligence objects remain intact.

If any reference remains, skip the image. Do not remove the remaining container.

### Hello World image

```text
IMAGE_ID =
5dd0d3e6e255913fc30f90b9f2b1d359cc2cbdb48090cc4b65f1676e203243cc

EXPECTED_TAG =
hello-world:latest
```

Delete only after `funny_curie` is removed and Docker reports zero remaining references.

## Phase 0 — immutable preflight

Before any deletion:

1. Record:
   - Windows system-drive total and free bytes;
   - Docker data VHDX logical size;
   - `docker system df`;
   - `docker system df -v`;
   - all Docker object counts.
2. Verify Docker client and server health with bounded `docker version` and `docker info`.
3. Verify the protected reconciliation tree and both retained worktree paths exist.
4. Record read-only identity/status evidence for the retained backend and frontend candidates sufficient to compare after cleanup.
   - Do not normalize, restore, reset, clean or modify them.
5. Verify the canonical container:
   - exact name and ID match;
   - remains running or in its existing state;
   - still mounts `creator_shop_acceptance_pgdata`;
   - restart policy remains unchanged.
6. Verify `creator_shop_acceptance_pgdata` exists and record its identity/labels/size.
7. Verify the paused Campaign Intelligence container and its protected anonymous DB volume exist with matching identities.
8. Verify all protected images listed above exist.
9. Verify all six protected C03 database volumes exist and record their names, sizes and current reference counts.
10. Resolve every allowlisted container by both exact full ID and exact name.
    - If an ID/name mismatch exists, skip that container.
    - If an allowlisted container is running, restarting, paused or removing, skip it.
    - Do not stop it.
11. For every allowlisted dependency volume:
    - confirm exact name;
    - inspect labels, current references and mount destinations;
    - confirm every reference is from allowlist A;
    - confirm its mount destinations/provenance represent `node_modules`, dependency or `dist` artifacts;
    - confirm it is not any protected database volume;
    - record its pre-deletion size.
    - If any unallowlisted reference or data-role ambiguity exists, skip that volume.
12. Confirm the allowlists do not overlap protected state.
13. Record current image reference counts for both conditional images.

If canonical reconciliation or paused Campaign Intelligence identity fails, stop before deletion.

## Phase 1 — remove exact stopped containers

Process allowlists A and B sequentially, never in parallel.

For each entry:

1. Re-resolve exact ID and name.
2. Confirm the state remains stopped/exited.
3. Record:
   - current writable-layer size;
   - image ID;
   - mounts;
   - networks.
4. Remove only that exact container by full ID.
5. Do not pass `--volumes` or `-v`.
6. Do not use force.
7. Verify:
   - that exact container no longer exists;
   - all named and anonymous volumes still exist;
   - all bind-source paths remain untouched;
   - canonical reconciliation and paused Campaign Intelligence remain intact.
8. Record the result and continue.

If a deletion fails:

- do not force it;
- do not stop or kill a process;
- record the failure;
- continue only when protected state remains intact.

## Phase 2 — remove exact regenerable volumes

Only after Phase 1.

Process allowlist C sequentially.

For each volume:

1. Re-inspect the exact name.
2. Confirm:
   - it has zero remaining container references;
   - every pre-cleanup reference was an allowlist-A container;
   - it is not a database volume;
   - identity and classification have not changed.
3. Record Windows free bytes and Docker disk usage before deletion.
4. Remove only the exact volume name.
5. Do not use prune, wildcard expansion or force.
6. Verify:
   - the exact volume no longer exists;
   - all six protected C03 database volumes remain;
   - canonical and Campaign Intelligence volumes remain;
   - no unallowlisted volume count changed.
7. Record Docker-reported bytes removed and Windows free-space delta where observable.

If the volume remains referenced or any check fails, skip it.

## Phase 3 — remove exclusive networks

Only after container removal.

For each allowlist-D network:

1. Confirm exact name and prior ID prefix.
2. Confirm zero endpoints.
3. Confirm it is not `bridge`, `host` or `none`.
4. Confirm no protected/unallowlisted object references it.
5. Remove only that exact network.
6. Skip rather than force on any mismatch.

## Phase 4 — conditionally remove images

### Node 20

Re-inspect the exact immutable Node 20 image ID.

Delete it only if every condition in allowlist E passes.

Use the immutable ID. Do not force removal. Do not remove any container to satisfy this condition.

Verify no other image ID was removed and protected images remain.

### Hello World

Apply the same exact-reference checks after `funny_curie` removal.

Do not delete any other tagged, dangling or intermediate image.

## Phase 5 — post-cleanup evidence

Record:

1. Windows system-drive free bytes and GiB.
2. Docker VHDX logical size.
3. `docker system df` and `docker system df -v`.
4. Docker object counts.
5. Actual removed object identities.
6. Docker-reported and Windows-observed recovery without double counting.
7. Canonical container:
   - same ID;
   - same status;
   - same protected volume.
8. Paused Campaign Intelligence:
   - same container ID/status;
   - same protected database volume.
9. All six protected C03 database volumes still exist.
10. Playwright, Gitleaks, PostgreSQL protected and dangling images remain.
11. All anonymous volumes remain.
12. The active reconciliation tree and both retained candidates remain present and unchanged in identity/status relative to Phase 0.
13. No source, Git, environment, credential, manifest or lockfile changed.

Do not run canonical validation.

Do not compact the VHDX in this turn.

If Windows free space remains below 10 GiB even though Docker internal storage fell materially, report:

`NEXT_SAFE_ACTION = PARENT_REVIEW_FOR_SUPPORTED_VHDX_COMPACTION`

Do not attempt compaction automatically.

## Required result

Return:

```text
WINDOWS_DOCKER_C03_CLEANUP_RESULT =
  COMPLETE | PARTIAL | CIRCUIT_BREAKER

SYSTEM_DRIVE_FREE_BYTES_BEFORE =
SYSTEM_DRIVE_FREE_BYTES_AFTER =
SYSTEM_DRIVE_FREE_GIB_AFTER =
WINDOWS_FREE_BYTES_GAINED =

DOCKER_VHDX_LOGICAL_BYTES_BEFORE =
DOCKER_VHDX_LOGICAL_BYTES_AFTER =

DOCKER_REPORTED_BYTES_REMOVED =
CONTAINER_WRITABLE_BYTES_REMOVED =
DEPENDENCY_VOLUME_BYTES_REMOVED =
IMAGE_UNIQUE_BYTES_REMOVED =

ALLOWLISTED_CONTAINERS = 27
CONTAINERS_DELETED =
CONTAINERS_SKIPPED =
CONTAINERS_FAILED =

ALLOWLISTED_DEPENDENCY_VOLUMES = 9
DEPENDENCY_VOLUMES_DELETED =
DEPENDENCY_VOLUMES_SKIPPED =
DEPENDENCY_VOLUMES_FAILED =

ALLOWLISTED_NETWORKS = 6
NETWORKS_DELETED =
NETWORKS_SKIPPED =
NETWORKS_FAILED =

NODE20_IMAGE_DELETED =
HELLO_WORLD_IMAGE_DELETED =

DELETED_CONTAINER_IDS_AND_NAMES =
DELETED_VOLUME_NAMES =
DELETED_NETWORK_IDS_AND_NAMES =
DELETED_IMAGE_IDS_AND_TAGS =

SKIPPED_OBJECTS_WITH_REASONS =
FAILED_OBJECTS_WITH_ERRORS =
UNAUTHORIZED_MUTATIONS = NONE

CANONICAL_CONTAINER = INTACT
CANONICAL_CONTAINER_ID_UNCHANGED =
CANONICAL_PGDATA = INTACT
CAMPAIGN_INTELLIGENCE_CONTAINER = INTACT
CAMPAIGN_INTELLIGENCE_DB_VOLUME = INTACT
C03_DATABASE_VOLUMES = ALL_INTACT
PLAYWRIGHT_IMAGE = INTACT
GITLEAKS_IMAGES = INTACT
DANGLING_IMAGES = INTACT
ANONYMOUS_VOLUMES = INTACT

ACTIVE_RECONCILIATION_TREE = PRESERVED
BACKEND_RETAINED_CANDIDATE = PRESERVED
FRONTEND_RETAINED_CANDIDATE = PRESERVED
ENVIRONMENT_FILES = PRESERVED
GIT_REFS_OBJECTS = PRESERVED
SOURCE_AND_LOCKFILES = PRESERVED

DOCKER_FACTORY_RESET = NO
DOCKER_PRUNE_COMMANDS = 0
DOCKER_VOLUMES_OUTSIDE_ALLOWLIST_DELETED = 0
VHDX_COMPACTION = NOT_PERFORMED
CANONICAL_VALIDATION_RUNS = 0

HOST_FREE_SPACE_10_GIB_GATE = PASS | FAIL
HOST_FREE_SPACE_15_GIB_PREFERENCE = PASS | FAIL
NEXT_SAFE_ACTION =
BLOCKERS =
NEXT_BOUNDARY = PARENT REVIEW
```

Include a table with one row per allowlisted object showing:

- preflight identity result;
- eligibility;
- pre-cleanup size/reference state;
- action result;
- post-cleanup verification;
- Windows free-space delta where measurable;
- skip/failure reason.

## Stop conditions

Stop all remaining mutation immediately if:

- the canonical or Campaign Intelligence protected object identity changes;
- any protected volume or image disappears;
- any deletion resolves outside the exact allowlist;
- a deletion would require force;
- Docker begins deleting additional objects implicitly;
- an anonymous volume is removed;
- a protected C03 database volume is removed;
- a bind-source path, source file, Git object/ref/index, environment file, credential, manifest or lockfile changes;
- Docker Desktop becomes unhealthy;
- an unexpected factory reset, WSL change or VHDX operation begins.

On stop, preserve all evidence and return the exact completed mutations and blocker.
