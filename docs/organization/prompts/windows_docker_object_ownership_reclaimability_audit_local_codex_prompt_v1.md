# Windows Docker Object Ownership and Reclaimability Audit — Local Codex Prompt V1

`WINDOWS_DOCKER_OBJECT_OWNERSHIP_RECLAIMABILITY_AUDIT_LOCAL_CODEX_PROMPT_V1`

## Role

You are the External Local Codex Runner performing a bounded, Docker-only, read-only audit for:

**Windows Host Disk Capacity Recovery for The Creator Shop Local Codex Environment**

The parent requires an exact ownership graph and reclaimability assessment before authorizing any Docker cleanup.

This assignment is:

```text
MODE = READ_ONLY
DOCKER_MUTATION = NOT_AUTHORIZED
FILESYSTEM_MUTATION = NOT_AUTHORIZED
APPLICATION_VALIDATION = NOT_AUTHORIZED
```

Do not delete, prune, stop, start, restart, rename, retag, export, import, compact, migrate or modify anything.

## Goal

Determine which Docker containers, images, volumes, networks and build-cache objects belong to:

1. the active canonical-reconciliation environment;
2. the paused Campaign Intelligence layers;
3. completed or obsolete historical validation/development runs;
4. shared or unresolved ownership.

Return exact object identities, relationships and actual Docker-reported reclaimability so the Parent can prepare a narrow deletion allowlist.

Do not perform cleanup in this turn.

## Known host context

Windows profile root:

`C:\Users\piyus`

System drive:

`C:`

Recent free capacity:

`2,689,499,136 bytes` (approximately 2.50 GiB)

Docker data disk:

`C:\Users\piyus\AppData\Local\Docker\wsl\disk\docker_data.vhdx`

Recent logical size:

`37,383,831,552 bytes`

The VHDX logical size is not reclaimable-space evidence. Do not infer that deleting Docker objects will immediately return the same number of bytes to Windows.

## Absolute protected state

### Active canonical reconciliation

Protect the complete tree:

`C:\Users\piyus\Documents\Codex\2026-09-17\local-codex-runner-prompt-canonical-reconciliation`

Known retained worktrees:

- `C:\Users\piyus\Documents\Codex\2026-09-17\local-codex-runner-prompt-canonical-reconciliation\work\backend.git\work\final-fixture-backend`
- `C:\Users\piyus\Documents\Codex\2026-09-17\local-codex-runner-prompt-canonical-reconciliation\work\frontend.git\work\final-harness-frontend`

Known protected Docker state:

- container: `creator-shop-acceptance-postgres`
- volume: `creator_shop_acceptance_pgdata`

The exact container name may be visually truncated in Docker Desktop. Resolve its full engine name and ID read-only.

Protect every Docker object used by, mounted into, created by, or required to resume this canonical-reconciliation environment.

### Paused Campaign Intelligence work

Campaign Intelligence layers are paused until canonical reconciliation completes.

Stopped status does not mean obsolete.

Protect every Docker object attributable to those paused layers, including containers, images, named or anonymous volumes, networks and exclusive build state.

The exact Docker object names are not provided as authority. Determine candidates from:

- Docker Compose labels;
- project, service, working-directory and config-file labels;
- container names and creation times;
- images;
- mounts;
- host bind paths;
- repository paths;
- network membership;
- associated volume names;
- other read-only provenance.

If Campaign Intelligence ownership cannot be proven, classify the object as unresolved and preserve it.

### Global protections

Preserve:

- all Docker volumes until a later exact-volume authorization;
- all database data;
- all canonical reconciliation state;
- all paused Campaign Intelligence state;
- every filesystem path;
- every Git repository, worktree, ref, object, index and uncommitted file;
- every `.env`, `.env.*`, credential, token, PEM, key and session file;
- all source, manifest and lockfiles;
- `C:\Users\piyus\.codex`;
- `C:\Users\piyus\Documents\Codex\.pnpm-store`.

Do not inspect secret values or database row contents.

## Absolute prohibitions

Do not run any command that can mutate Docker or Windows state, including but not limited to:

- `docker rm`, `docker container rm`, `docker container prune`;
- `docker image rm`, `docker rmi`, `docker image prune`;
- `docker volume rm`, `docker volume prune`;
- `docker network rm`, `docker network prune`;
- `docker builder prune`, `docker buildx prune`;
- `docker system prune`;
- `docker compose down`, `docker compose rm`;
- any command with `--volumes`, `-v`, `--force` or `-f` when it means deletion;
- `docker stop`, `start`, `restart`, `kill`, `pause`, `unpause`;
- Docker Desktop factory reset, clean/purge data, reset Kubernetes or disk-image relocation;
- WSL shutdown, unregister, export/import or VHDX compaction;
- changing Docker Desktop settings;
- reading files inside volumes or containers;
- starting canonical validation.

Do not click Docker Desktop trash icons.

## Bounded runtime

Target completion within 15 minutes.

Individual Docker commands must have a reasonable timeout. If a command hangs, terminate only that client command safely; do not terminate Docker Desktop, containers, WSL or system services.

Do not repeat a daemon probe indefinitely.

## Phase 0 — host and daemon readiness

Read only:

1. Record system-drive total and free bytes.
2. Confirm the protected reconciliation tree and both retained worktree paths exist.
3. Record Docker Desktop version if available.
4. Run bounded:
   - `docker version`;
   - `docker info`.
5. Do not restart Docker if either probe fails.
6. If the daemon is unavailable, return `CIRCUIT_BREAKER_DOCKER_DAEMON_UNAVAILABLE` with the exact error and stop before mutation.

## Phase 1 — authoritative Docker space report

Capture read-only outputs sufficient to distinguish virtual, shared, unique and reclaimable storage:

- `docker system df`;
- `docker system df -v`;
- builder inventory;
- read-only build-cache usage for every detected builder where supported.

Do not add together:

- virtual image sizes that share layers;
- image totals already included in Docker's aggregate;
- volumes referenced by multiple containers;
- Docker Desktop UI totals and CLI totals.

Use Docker's reported reclaimable and unique-size fields when available.

If a field is unavailable, mark it `UNKNOWN`; do not estimate it from the VHDX size.

## Phase 2 — complete container inventory

Inventory every container, running and stopped.

For each container record:

- full container ID;
- exact name;
- status and health;
- creation time;
- image name and immutable image ID;
- writable-layer size if Docker reports it;
- published ports;
- restart policy;
- all mounts:
  - type;
  - source or volume name;
  - destination;
  - read-only/read-write;
- attached networks;
- Docker Compose labels, especially:
  - `com.docker.compose.project`;
  - `com.docker.compose.project.working_dir`;
  - `com.docker.compose.project.config_files`;
  - `com.docker.compose.service`;
  - `com.docker.compose.container-number`;
  - one-off indicator;
- any other non-secret provenance label useful for ownership.

Do not inspect environment-variable values.

A stopped container may still be a protected paused object and may still keep an image or volume referenced.

## Phase 3 — image ownership and unique space

Inventory every image, including dangling images.

For each image record:

- immutable image ID;
- all repository tags and digests;
- creation time;
- virtual size;
- shared size;
- unique size;
- Docker-reported container reference count;
- exact referencing container IDs and names;
- parent image or layer relationship if available without expensive traversal;
- whether any protected or unresolved container references it.

The Docker Desktop screenshot previously showed:

- about 15 images;
- two dangling `<none>:<none>` images of approximately 2.06 GB virtual size each;
- Node 20 and Node 22 images;
- PostgreSQL `17` and `latest`;
- a Playwright image.

Do not assume the displayed sizes are independently reclaimable. Prove actual unique/reclaimable space and reference ownership.

## Phase 4 — volume ownership and data-risk classification

Inventory every volume.

For each volume record:

- exact name;
- driver;
- creation time if available;
- labels;
- Docker-reported size;
- every referencing container, including stopped containers;
- Compose project/service provenance;
- mount destination;
- whether anonymous or named;
- whether its name or mount destination indicates:
  - PostgreSQL/database state;
  - `node_modules` or other regenerable dependencies;
  - source/workspace data;
  - cache;
  - unresolved data.

Known visible examples include:

- `creator_shop_acceptance_pgdata` — protected;
- several `tcs-c03-*-node-modules` volumes around 741 MB each;
- `tcs-c03-p6-pgdata` around 496 MB;
- an unidentified hash-named volume around 2.8 GB.

Do not assume those sizes or names are still current. Verify through Docker.

Do not inspect volume file contents.

Use these data-risk classes:

- `PROTECTED_DATABASE`;
- `PROTECTED_ACTIVE_OR_PAUSED`;
- `REGENERABLE_DEPENDENCY`;
- `HISTORICAL_DATABASE_REQUIRES_EXPLICIT_DECISION`;
- `ANONYMOUS_UNRESOLVED`;
- `SHARED`;
- `OTHER_UNRESOLVED`.

No volume is deletion-authorized by this audit.

## Phase 5 — network and build-cache inventory

### Networks

For each user-created network record:

- ID and name;
- labels and Compose project;
- attached containers;
- ownership classification.

Report space as negligible unless Docker reports otherwise.

### Build cache

For each builder and cache record, as far as supported read-only:

- builder name/driver/status;
- cache ID/type;
- size;
- reclaimable status;
- last-used or created time if available;
- project ownership if actually provable;
- whether it may be required by protected work.

Do not classify generic build cache as project-exclusive without evidence.

## Phase 6 — ownership classification

Assign every container, image, volume, network and material build-cache group exactly one classification:

1. `KEEP_CANONICAL_RECONCILIATION`
2. `KEEP_CAMPAIGN_INTELLIGENCE_PAUSED`
3. `CANDIDATE_COMPLETED_HISTORICAL_RUN`
4. `CANDIDATE_REGENERABLE_ARTIFACT`
5. `KEEP_SHARED_WITH_PROTECTED`
6. `UNRESOLVED_PRESERVE`

Rules:

- Object age alone is not evidence.
- Running state alone is not evidence.
- Stopped Campaign Intelligence objects remain protected.
- Any object shared with protected state is protected.
- Any object with conflicting or incomplete provenance is unresolved.
- C03, C04, C06, C02A, G1A or any other familiar name is not automatically deletion-authorized.
- A historical module's accepted/finished status may support candidacy, but Docker ownership and isolation must still be proven.
- Database volumes remain decision-gated even when their surrounding run appears historical.
- Regenerable `node_modules` volumes may be strong candidates only when exclusive to a completed historical run.
- Images may become candidates only when no protected or unresolved container references them.
- Dangling does not automatically mean safe if a stopped protected/unresolved container references the image ID.

## Phase 7 — proposed cleanup sequence without execution

Prepare, but do not execute, exact candidate manifests for later Parent review.

### Manifest A — historical stopped containers

For each proposed container:

- exact ID and name;
- ownership evidence;
- writable-layer recovery;
- attached volumes;
- image;
- reason it is not canonical reconciliation or paused Campaign Intelligence.

### Manifest B — images potentially removable after Manifest A

For each proposed image:

- immutable ID;
- tags;
- current references;
- references that would remain after Manifest A;
- unique/reclaimable bytes;
- shared-layer caveat.

### Manifest C1 — regenerable dependency/cache volumes

For each proposed volume:

- exact name;
- size;
- all references;
- provenance;
- regeneration method;
- why it contains no authoritative source or database state.

### Manifest C2 — historical database volumes requiring user decision

Keep separate from C1.

For each:

- exact name;
- size;
- project/run provenance;
- references;
- what would be irreversibly lost;
- whether committed evidence or fixtures appear to exist without inspecting database contents;
- explicit `USER_DECISION_REQUIRED`.

### Manifest D — build cache

For each proposed cache scope:

- exact builder/cache identity where possible;
- size and reclaimable bytes;
- ownership confidence;
- protected-work risk.

### Manifest E — networks

List only networks exclusive to proposed historical containers.

## Required calculations

Report separately:

- current Windows free bytes and GiB;
- Docker aggregate bytes;
- Docker-reported reclaimable bytes by:
  - containers;
  - images;
  - volumes;
  - build cache;
- proposed low-risk reclaimable bytes:
  - historical container writable layers;
  - image unique layers exclusive to historical containers;
  - regenerable dependency/cache volumes;
  - confidently disposable build cache;
- decision-gated bytes:
  - historical database volumes;
- unresolved bytes;
- total proposed recovery without double counting.

Provide both decimal GB and binary GiB where practical.

Do not claim that Docker-internal recovery equals immediate Windows system-drive recovery.

## Preservation verification

Before returning:

- re-record Windows free bytes;
- confirm no Docker object count changed;
- confirm the protected canonical container still has the same ID/status;
- confirm `creator_shop_acceptance_pgdata` still exists with the same identity;
- confirm the active reconciliation tree and both retained worktrees still exist;
- confirm:
  - Docker mutations = 0;
  - filesystem mutations = 0;
  - Git mutations = 0;
  - environment/credential reads = 0;
  - validation runs = 0.

## Required result

Return:

```text
WINDOWS_DOCKER_OWNERSHIP_AUDIT_RESULT =
  COMPLETE | PARTIAL_TIME_LIMIT | CIRCUIT_BREAKER_DOCKER_DAEMON_UNAVAILABLE

MODE = READ_ONLY
ELAPSED_SECONDS =

SYSTEM_DRIVE_FREE_BYTES_BEFORE =
SYSTEM_DRIVE_FREE_BYTES_AFTER =
SYSTEM_DRIVE_FREE_GIB_AFTER =

DOCKER_CLIENT_HEALTH =
DOCKER_SERVER_HEALTH =
DOCKER_DESKTOP_VERSION =

CONTAINERS_TOTAL =
CONTAINERS_RUNNING =
CONTAINERS_STOPPED =
IMAGES_TOTAL =
VOLUMES_TOTAL =
BUILDERS_TOTAL =

DOCKER_RECLAIMABLE_CONTAINERS_BYTES =
DOCKER_RECLAIMABLE_IMAGES_BYTES =
DOCKER_RECLAIMABLE_VOLUMES_BYTES =
DOCKER_RECLAIMABLE_BUILD_CACHE_BYTES =

LOW_RISK_PROPOSED_RECOVERY_BYTES =
DECISION_GATED_DATABASE_VOLUME_BYTES =
UNRESOLVED_BYTES =
TOTAL_NON_OVERLAPPING_PROPOSED_RECOVERY_BYTES =

CANONICAL_RECONCILIATION_OBJECTS =
PAUSED_CAMPAIGN_INTELLIGENCE_OBJECTS =
HISTORICAL_CANDIDATE_OBJECTS =
SHARED_PROTECTED_OBJECTS =
UNRESOLVED_OBJECTS =

CREATOR_SHOP_ACCEPTANCE_POSTGRES = INTACT
CREATOR_SHOP_ACCEPTANCE_PGDATA = INTACT
ACTIVE_RECONCILIATION_TREE = PRESERVED
BACKEND_RETAINED_CANDIDATE = PRESERVED
FRONTEND_RETAINED_CANDIDATE = PRESERVED

DOCKER_MUTATIONS = 0
FILESYSTEM_MUTATIONS = 0
GIT_MUTATIONS = 0
ENVIRONMENT_OR_CREDENTIAL_VALUES_READ = 0
VALIDATION_RUNS = 0

MANIFEST_A_HISTORICAL_CONTAINERS =
MANIFEST_B_EXCLUSIVE_IMAGES =
MANIFEST_C1_REGENERABLE_VOLUMES =
MANIFEST_C2_DATABASE_VOLUMES_REQUIRING_DECISION =
MANIFEST_D_BUILD_CACHE =
MANIFEST_E_NETWORKS =

UNRESOLVED_QUESTIONS =
BLOCKERS =
NEXT_BOUNDARY = PARENT REVIEW BEFORE ANY CLEANUP
```

Also include:

1. a complete container table;
2. a complete image table;
3. a complete volume table;
4. a network/build-cache table;
5. an ownership dependency map showing:
   `container → image → volumes → network → Compose provenance`;
6. each proposed cleanup manifest with exact immutable identities;
7. explicit overlap accounting.

## Stop conditions

Stop and return a circuit breaker if:

- Docker health probes fail;
- any requested read-only operation unexpectedly attempts mutation;
- protected reconciliation state changes;
- the canonical PostgreSQL container or volume identity disappears;
- ownership cannot be established without inspecting secrets or database contents;
- a command would require restarting Docker, WSL or Windows;
- the audit cannot finish safely within the bounded runtime.

Do not convert an incomplete audit into cleanup authorization.
