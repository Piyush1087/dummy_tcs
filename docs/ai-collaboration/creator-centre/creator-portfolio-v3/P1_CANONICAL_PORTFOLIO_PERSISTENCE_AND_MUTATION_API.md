# Creator Portfolio V3 — P1 canonical persistence and mutation API

Status: ACCEPTED under mandatory autonomous packet gates. P2 may proceed; final technical acceptance remains with the Technical SA / Program Orchestrator.

## Exact P0 predecessor

Backend `6d8d040ad4867d483b3263b4b18cdacaad061896` / `a9b39e6c1e1f9d67646eec51901a41804da8e535`; authority `acff9bd9c84fbf08ca1d18b6cdad02d47ca84dd1` / `7f3336b52cd52619b20d357d5458abb8a2e5e102`; frontend unchanged at accepted Audience V1 `36d75f4eceded7e9e35aaa280b544164d086ca05` / `eb9c4471a5a7db6228b2f8c4c234834c5671d828`. All P0 checkpoints were normally published/fetched equal and clean before P1. Latest prepublication backend fetch still resolves the exact P0 remote; frontend independently fetched equal and clean.

## Reviewed additive persistence

Migration `20260916170000_creator_portfolio_v3_canonical_item_revision` is unique across 131 fetched backend refs / 118 distinct migration names. SHA-256 `4d7c45fd99045c5c3f952bba6bba937082b500692cf734ea3c7c31d144e16826`. Schema delta: 80 added lines, no removed predecessor line. Accepted migrations 1–104 unchanged.

Four Portfolio-owned tables:

- `creator_portfolios`: unique canonical workspace/Owner pair; monotonically increasing current revision; restrict foreign Owner/workspace deletion until the owning future lifecycle handles the aggregate.
- `creator_portfolio_items`: Creator-scoped stable item identity, bounded metadata, INCLUDED/REMOVED curation, source-filter array and strict bounded provenance envelopes; latest revision address. No media fields or source-row FK.
- `creator_portfolio_aliases`: exact hashed stable-destination alias scoped to one Portfolio/item; unique matching key, no mutable locator identity.
- `creator_portfolio_revisions`: immutable bounded changed-item snapshot; previous/current revision, authenticated actor/membership/role, origin, command hash and idempotency key.

Deferred current/item-to-revision foreign keys, monotonic aggregate identity/revision guard, immutable audit trigger, active actor/workspace binding and history continuity protect persistence. JSON is reserved for strict source-specific provenance and historical bounded snapshots, not independently mutable foreign truth. Filterable item state/source and identity are relational/indexed. Future SOURCE_ADAPT audit origin is distinct from manual curation; no source adapter is activated in P1.

No source/Evidence/C04/Settings FK intentionally deletes derived Portfolio. Generic task-only aggregate deletion proves FK target-only capability; it is not a Portfolio or Settings deletion command/coordinator. No production purge entry point or delete route is introduced.

## Application / transport / roles

`PortfolioModule` owns controller/service/repository and is wired once in AppModule. Established canonical Creator Team actor resolution is reused in read-only mode. Mutation locks the exact Team workspace, re-resolves current actor, verifies unchanged canonical subject and explicit PORTFOLIO_CURATE before replay/CAS/write. Shared action vocabulary adds only PORTFOLIO_READ and PORTFOLIO_CURATE; active Owner/Manager receive both, Assistant only read. All pre-existing action decisions remain unchanged; the exact Assistant regression list gains one authorized read entry, with every administration denial retained.

GET/PUT `/api/v1/creator/portfolio`: real production JwtAuthGuard/session validation, existing throttle, private no-store/Vary headers. Strict commands ADD_REFERENCE/EDIT_REFERENCE/REMOVE/RESTORE. Caller workspace/Owner, verified facts, upload, project and deletion fields rejected before repository mutation. Only pure Creator-provided limited link facts are editable; verified source facts cannot be supplied through mutation DTOs. Source adaptation remains P2-owned.

Command identity binds normalized request + authenticated actor/membership; exact UUID replay precedes revision CAS and makes no new item/alias/audit. Changed payload/actor under same key fails; stale revision and concurrent losing CAS fail atomically. Alias collision rejects before writes; editing a manual destination preserves stable item identity and replaces only its own alias. Remove/restore changes Portfolio state and audit, never source records/provenance.

P1 closes the transport separation: public source labels/basis/observed time are strict safe envelopes; account IDs, authorization generations, Capture/Evidence refs, internal hashes and model/processor identities remain internal. Instagram identity verification and inferred Possible Collaboration remain distinct from Creator Shop commercial completion and Creator-provided origin. This is a mapper/privacy correction, not a Product change.

Technical response pagination: at most 100 items per page, validated Owner-scoped cursor and five exact Product filters; no lifetime Portfolio cap or project limit. Ordering remains descending available work/publication date, stable identity tie-break. Duplicate response identities and inconsistent Assistant curation flags fail strict parsing. HTTPS-only actual source/work references, no userinfo/IP/private host/CDN/signed query; trailing-dot private-host bypass rejected. References are never fetched, uploaded or independently claimed publicly accessible.

## Actual PostgreSQL / upgrade evidence

PostgreSQL 17.11, cached postgres:17-alpine, loopback port 55472, Portfolio-only unique containers/databases, tmpfs data/no persistent volume. Only plpgsql 1.0 is installed; no extra extension required. Required local synthetic configuration generated in-process, values not printed or persisted: DATABASE_URL/DEV_DATABASE_URL, SETTINGS_FIELD_ENCRYPTION_KEY, JWT_SECRET/JWT_ISSUER/JWT_AUDIENCE, AUTH_OTP_PEPPER.

Fresh 0→105 repository `npm run db:migrate:deploy`: PASS; `npx prisma migrate status`: current. Separate fresh accepted-104 database populated through real accepted Source/Evidence/Audience runtime, then actual repository deploy 104→105: PASS. All 199 predecessor table counts/digests identical, 20 populated tables / 80 rows; digest inventory `7ef873bed1d930d1ea928daebf45e0d4ba342febb94a0fc425cb75311afe1b73`. Built-in SQL MD5 used for deterministic ordered per-table evidence, no extension/data export. Only the newly authored untracked migration was temporarily held in a validated task-owned directory for the 104 baseline apply and restored in finally; no accepted migration moved/changed. Hold directory absent afterwards.

P1 eight real database/API tests PASS; accepted lifecycle/purge eighteen assertions PASS on head105. Final task-isolated fixture rerun: 26/26 PASS. Owner/Manager create two items yields aggregate/items/aliases/revisions `1/2/2/2`; exact replay stable. Assistant mutation denied, all active roles read; anonymous HTTP401, inactive403, wrong Creator item404, invalid override/query400, stale CAS409. Real JWT/session module and production compiled Portfolio module used, no auth bypass. Test-only POSTMARK_CLIENT override throws on any attempted external dispatch; no provider credential needed. Concurrency has exactly one winner/one loser; no partial write. Audit update/delete/forged aggregate identity reject. Remove/restore preserves source integration/provenance. Existing internal source purge leaves derived Portfolio intact; direct task-only aggregate deletion leaves other Creator Portfolio and source integration intact.

## Failures retained / bounded primary corrections

Initial policy run: 31 passed / one stale exact action-list expectation failed; add only authorized PORTFOLIO_READ expectation, rerun green. Initial P1 database/API run: 24/26 passed; synchronous invalid-query assertion used async matcher, and email provider fixture was not overridden. Correct only matcher and test provider override, fresh rerun 26/26 passed. Subsequent task-scope fixture refinement supplies a fresh Portfolio-specific run ID to the accepted external media fixture; only owned helper/import/cleanup guards change, accepted eighteen assertions and accepted files remain intact; rerun 26/26 passed. No gate weakening/formal correction cycle.

Accepted `purgeCreatorInstagram()` owner file remains exact Git blob `1ae5c276c98d2c66a39bf464cd5453350533bdcb`. All Audience/Content/Creator Brand implementation, deletion behavior, accepted migrations/package/lock/Docker/decoder/frozen bundles remain unchanged. Role vocabulary delta is explicitly Portfolio-only.

## Build / hygiene / packet accounting

Prisma format/generate/validate PASS. Scoped ESLint and formatter PASS; diff check PASS. Focused role/Portfolio/Brand/Commercial/Content/C04 matrix 108 PASS; additional Rate Card/Audience/Content contract matrix17 PASS; final privacy/link/schema/service/boundary matrix29 PASS (overlapping checks, not a unique total). Final frozen-source production backend build PASS (`npm run build`). Final staged high-confidence secret/forbidden-artifact scan PASS across 18 files. No .env/media/log/runtime state tracked.

## Publication and exact changed inventory

Backend commit `627b9865c887af5bf86d6a834f04593f0f27f42e`, tree `5e12af994b439401a2a5dfa8db0b97970540b55f`, parent `6d8d040ad4867d483b3263b4b18cdacaad061896`. Normal non-force push and independent all-head fetch/prune: local/fetched SHA and tree equal; P0 ancestry PASS, clean worktree PASS. 18 files / 1512 insertions / 4 deletions. Exact owning commit inventory:

```text
prisma/migrations/20260916170000_creator_portfolio_v3_canonical_item_revision/migration.sql
prisma/schema.prisma
src/app.module.ts
src/features/creator-portfolio/contracts/portfolio.contract.test.ts
src/features/creator-portfolio/contracts/portfolio.contract.ts
src/features/creator-portfolio/portfolio.controller.ts
src/features/creator-portfolio/portfolio.module.ts
src/features/creator-portfolio/portfolio.repository.ts
src/features/creator-portfolio/portfolio.service.test.ts
src/features/creator-portfolio/portfolio.service.ts
src/features/creator-portfolio/testing/portfolio-content.fixture.ts
src/features/creator-portfolio/testing/portfolio-p1.postgres.test.ts
src/features/creator-portfolio/testing/portfolio-purge.postgres.test.ts
src/features/creator-portfolio/testing/portfolio-upgrade.postgres.test.ts
src/features/creator-portfolio/testing/portfolio.fixture.ts
src/features/creator-settings/team/creator-team.policy.test.ts
src/features/creator-settings/team/creator-team.policy.ts
src/shared/creator/creator-workspace-actor.contract.ts
```

Frontend remains exact accepted checkpoint, no source changes. P0 authority containing commit `acff9bd9c84fbf08ca1d18b6cdad02d47ca84dd1` / `7f3336b52cd52619b20d357d5458abb8a2e5e102`. P1 authority containing identity is recorded in subsequent packet/final evidence after publication, avoiding a self-hash cycle.

P1_PRIMARY_RUNS_USED = 1
P1_FORMAL_CORRECTION_CYCLES_USED = 0
MEDIA_KIT = NOT_STARTED
LIVE_GRAPH_CALLS = NONE
LIVE_MODEL_CALLS = NONE
META_PROVIDER_MUTATIONS = NONE
DEVELOPMENT_MERGE = NOT_PERFORMED
DEPLOYMENT = NOT_PERFORMED

SETTINGS_CREATOR_INSTAGRAM_SOURCE_DELETE_RECONCILIATION = DEFERRED
SETTINGS_CREATOR_DELETE_MY_DATA = DEFERRED

Future Settings source deletion preserves derived Creator Centre outputs. The accepted internal purge is regression-only in tests, never called/extended by Portfolio production. Broader Delete my data lifecycle remains deferred; final handoffs must retain both debts. All task P1 containers stopped/removed; no unrelated developer/Audience/Commercial runtime accessed or cleaned. P2 begins only after mandatory P1 publication/fetch-back/clean gates.
