# C1 Sync Coordinator — External Local Execution Evidence

```text
PACKET = C1_SYNC_COORDINATOR
RESULT = EVIDENCE_READY_AWAITING_CHILD_SA_PROGRAM_ORCHESTRATOR_ACCEPTANCE
C1_ACCEPTED = NO
C1_PRIMARY_RUNS_USED = 1
C1_CORRECTION_CYCLES_USED = 0
B1_THROUGH_C4_AUTHORITY = PRESERVED
D_COMBINED = MANDATORY_V1_NOT_STARTED
WAVE_E = NOT_STARTED
LIVE_GRAPH_CALLS = NONE
LIVE_MODEL_CALLS = NONE
```

## Immutable checkpoints

| Repository | Accepted start SHA / tree | C1 result |
|---|---|---|
| backend | `56c3251e399fc50706f3f0844d64b4318530d37e` / `43b4451a0750e4afec59634a70d75fbec60dd3cb` | `6fd0b9077d46fde08b2de3ed05f2dc4db3f18a98` / `172171898b728c4e6a1c2b801e66ccc5b959c01b` |
| frontend | `dfd08cf95c043049b40847416edea786bb77fe9f` / `50ad0be4ac391ad131681a4a5ce5c8d5ee05606d` | unchanged |
| authority | `fd74212218d551e3ca68e72ce79c32c876e59c77` / `223be7ffcf9dee5557affd029882348026071fdd` | final commit/tree reported by the runner after publication because a commit cannot self-encode its identity |

All three worktrees were clean, equal to fetched remote tracking refs, and on the accepted predecessor chain before mutation. Remotes identified only the expected `Piyush1087` repositories. No overlapping user work was present.

## Implemented boundary

C1 adds one narrow Instagram coordinator adapter. It does not introduce a second generalized worker platform. It reuses the accepted Settings integration record as authorization and identity authority, the existing provider-neutral B2 read service, B3B media completion, C2/C3 evidence processing, C4 shared generation/current runtime, and Settings-owned deletion transaction.

The durable record is fenced by Brand, integration, provider account, authorization generation, capability class, stable request identity, execution window, trigger, and lease. It records the frozen classes, states and triggers; due/backoff timestamps; bounded cursor JSON; lease token/owner/expiry and heartbeat; attempts/failures; last success/manual request; durable queued-manual state; generation IDs; and bounded reason codes. Atomic `FOR UPDATE SKIP LOCKED` claims, expiry reclamation, lease-token completion fencing, database-clock cooldown locking, and bounded exponential retry backoff are covered by PostgreSQL tests.

Cadence is immediate for `INITIAL_30_DAY`, daily for `PROFILE_MEDIA_PERFORMANCE`, weekly for `AUDIENCE`, and one hourly dispatcher with deterministic stable jitter no greater than 30 minutes. A retry retains the original request identity and execution window. A successful recurring run rotates to the next stable scheduled request identity. A manual request received behind a live lease is durably queued and cannot replace the active lease fence.

The exact authenticated endpoint is `POST /api/v1/brand-centre/instagram/refresh`. It resolves Brand only from active authenticated membership, accepts no Brand selector, permits `BRAND_OWNER` and `CAMPAIGN_MANAGER`, denies `FINANCE_ADMIN`, enforces the 15-minute cooldown atomically, and enqueues work without inline provider execution or Settings mutation.

Settings schedules only after a successful connection transaction returns. Same-account reconnect uses the new authorization generation and blocks older generation work. The existing different-account conflict returns before scheduling. The Settings delete-data transaction now removes target-Brand coordinator work; another Brand remains intact and deleted work cannot be reclaimed.

The consumer extension is additive. It exposes bounded sync state, success/attempt/next-due truth, current-preserved degradation, reason codes, role-gated manual refresh and cooldown, and the Settings recovery path. It exposes no lease, cursor, provider payload, credential, raw media, locator, or model internals. The frontend was not changed.

## Migration safety

Migration 90 is `20260912170000_instagram_c1_sync_coordinator`; SHA-256 is `3a282067c79560d5701611071457f1825f3e0b21dd1238253318f4945abbdf80`. It adds only the three coordinator enums, coordinator table, required uniqueness/due/fence indexes, and cascading Brand/integration foreign keys. Migrations 1–89 were not modified. Migration 89 remained byte-identical at SHA-256 `12b5a234d322235199dc8ad1173fc4835517ed0a3ed5a6ff910aa48165f118a8`.

PostgreSQL 17.11 evidence used only the uniquely named disposable container `instagram-c1-postgres-20260912` on loopback port 49907 with synthetic local credentials. Clean 1→90 deploy and `prisma migrate status` passed. A separate database was deployed through migration 89, reported current at 89, then upgraded with migration 90 and reported current at 90. Existing rows are untouched by the additive SQL. Reviewed rollback is to stop C1 dispatch, drop the two foreign keys, table, and the three new enum types; no predecessor object is altered.

## Validation matrix

| Gate | Result | Evidence |
|---|---|---|
| Prisma generate / validate | PASS | Prisma Client 6.19.3 generated; native `npx prisma validate` passed |
| Production build | PASS | `npm run build`; Nest compile and prompt-asset verification passed |
| Scoped ESLint | PASS | all 17 changed/new TypeScript paths |
| Diff check | PASS | staged `git diff --check` |
| Coordinator unit/contract/PostgreSQL | PASS | 13/13 final focused tests; PostgreSQL subset 6/6 |
| Initial, daily, weekly, stable jitter, idempotent scheduling | PASS | exact three class rows; immediate initial; daily/weekly bounds; repeat schedule kept three rows |
| Manual roles, tenant isolation, atomic cooldown | PASS | role contract 3/3; concurrent manual requests had exactly one success; peer Brand unchanged |
| Claim, heartbeat, reclaim, stale completion | PASS | concurrent dispatcher claims had one winner; heartbeat extended live lease; expired lease reclaimed; stale completion rejected |
| Retry/backoff/replay identity | PASS | transient failure entered bounded backoff; retry preserved request identity and execution window |
| Authorization/account generation fences | PASS | stale generation blocked; same-account generation 2 scheduled three fresh rows; degraded authorization blocked acquisition; different-account Settings conflict schedules nothing |
| Delete-data | PASS | target coordinator rows 3→0; peer Brand remained at 3; accepted downstream purge transaction retained |
| Settings lifecycle PostgreSQL | PASS | 22/22 on isolated migrated database, including same/different identity, concurrency, disconnect and generation fences |
| B2 provider read | PASS | 1/1 focused PostgreSQL regression |
| B3B media | PASS | 1/1 focused PostgreSQL regression |
| C2 foundations | PASS | 3/3 focused PostgreSQL regressions |
| C3 semantics | PASS | 3/3 focused PostgreSQL regressions |
| C4 runtime/current | PASS | 1/1 PostgreSQL regression; exactly three Objects and 35 current paths, replay, sibling-failure preservation, isolation and deletion |
| Frozen contract bundles | PASS | exact pinned-source verification from authority commit `bbb0be3345c36e9cc7c4f06ca68fb491b742b83f`; no bundle mutation |
| Full repository baseline observation | CLASSIFIED, NON-C1 | 6,606 passed, 813 skipped; 20 pre-existing unrelated failures: 14 empty collaboration suites and 6 existing architecture assertions in escrow/notifications/Product, including the pre-existing hard-coded migration-count assertion |
| Secret/forbidden artifacts | PASS | staged value-redacted pattern scan: zero findings; no `.env`, key, token, credential, raw media, locator, log, build output or runtime artifact tracked |
| Live calls and provider mutations | PASS | deterministic provider/model fixtures only; no Meta, Graph, OAuth or model call; no provider mutation |

The focused pipeline adapter proves the accepted B2 → B3B → C2 → C3 → C4 order and requires all C4 outcomes to complete before coordinator success. The existing PostgreSQL C4 regression proves exact replay produces no duplicate current transition and that a later failed sibling preserves the previous successful current Objects and Evidence references. Post-test C1 fixture cleanup leaves zero coordinator rows in the reusable clean database.

## Toolchain

```text
OS = Microsoft Windows NT 10.0.26200.0
ARCH = AMD64
NODE = v24.19.0
NPM = 11.17.0
DOCKER_CLIENT_SERVER = 29.7.2 / 29.7.2
POSTGRESQL = 17.11
PRISMA = 6.19.3
```

The repository lockfile was already installed immutably at the accepted checkpoint; C1 adds no dependency and changes no lockfile. The disposable service is removed only after normal publication and fetch-back evidence is complete.

## Scope and topology

No frontend, Product, UX, navigation, workspace, OAuth, provider permission, semantic threshold, canonical adjacent-domain, D_COMBINED, Wave E, or Wave F implementation occurred.

```text
C4 = ACCEPTED
C1 = EVIDENCE_READY_AWAITING_CHILD_SA_PROGRAM_ORCHESTRATOR_ACCEPTANCE
D1 / D2 / D3 = SUPERSEDED_BY_D_COMBINED
D_COMBINED = MANDATORY_V1_NOT_STARTED
WAVE_E_DOES_NOT_CONSUME_D_COMBINED = YES
PLANNED_SEQUENCE = C1 ACCEPTANCE -> D_COMBINED -> E1 -> E2_E3_COMBINED -> E4
E1 = SOLE OWNER OF SHARED PEER-NAVIGATION CONVERGENCE
E1_DEPENDENCY = ACCEPTED_C4_CURRENT_CHECKPOINT
```

This artifact is runner evidence, not Program acceptance.
