# Creator Audience V0 — P1 shared Brand/Creator owner-scope foundation

`CREATOR_AUDIENCE_V0_P1_SHARED_OWNER_SCOPE_EVIDENCE_V1`

## Disposition

`P1 = ACCEPTED`

The shared Data Extraction, Evidence, Intelligence and Instagram sync persistence
has one durable typed owner scope. Existing Brand rows deterministically resolve to
`BRAND` scopes; Creator rows resolve to the canonical Owner `CreatorProfile` and
active workspace as `CREATOR` scopes. No synthetic Brand, parallel DE runtime,
parallel current store or second scheduler was introduced.

## Immutable implementation checkpoint

- P0 backend parent: `0da1918181d7fccc2ebce10e13dccc4817e0fcdb` /
  `308855487158a4c4fae0bd27dcd39ab86ed2c059`.
- P1 foundation commit: `175d4c150c12306ecd1577df10ebcc05b9035af6` /
  `ca0ffecdbfceac38204da23bf257d04a23949de7`.
- P1 final isolation correction: `843faa5cf6936c0a5e8895a703cf8bdf3921e246` /
  `1867832be3cdace0f3a065925ba57e77bff6f756`.
- Normal push and independent fetch-back: exact SHA/tree equality; P0 ancestry
  confirmed.
- Frontend remains byte-identical at
  `777c74cb7ca978053d9c10dcab29b282bc2dbea8` /
  `a3d6a32f566eeed9b608a7b5a2a4d1ec0b238e6f`.

## Schema and migration proof

- Migration base: 98 directories at P0; result: 101 directories.
- `20260914185000_creator_audience_subject_enum/migration.sql` SHA-256:
  `0218c964495159facdcd040ffe34e92c6cd32ab445c00af34cbb43c328483499`.
- `20260914190000_creator_audience_shared_owner_scope/migration.sql` SHA-256:
  `faaa58e9afaae9021bafc64930f2c80412d90aa79d46af3ae09629b4bf9aa5cf`.
- `20260914191000_creator_audience_owner_scope_lineage/migration.sql` SHA-256:
  `723287fb4d80345b2e89c687feccbadd146f0f709948c382de2a28346afb70d8`.
- Clean disposable PostgreSQL 17 apply: 101/101, migration status current.
- Populated P0 upgrade: 98→101 PASS. Resource count/hash remained
  `1:fc61a8...`; Intelligence subject count/hash remained `1:e31349...`;
  zero migrated rows lacked owner scope.
- Migration review: additive typed scope plus deterministic Brand backfill;
  validation triggers reject neither/both ownership and Brand/Creator
  substitution. Recovery is restore/forward-correction; no destructive rollback
  was run against non-task data.

## Runtime and isolation proof

- `IntelligenceOwnerScopeRepository` resolves Brand and canonical Creator
  subjects and performs exact internal Creator Instagram source purge.
- Existing Brand sync claims only Brand-owned jobs and fails closed when its
  Brand integration arm is absent. The shared job table remains the sole
  scheduler persistence surface.
- PostgreSQL tests prove first-class Creator insert/read/purge, nullable Brand
  compatibility for Creator rows, deterministic Brand scope resolution,
  cross-Brand substitution rejection, cross-Creator lineage rejection despite
  SQL NULL semantics, scope-based idempotency/current uniqueness, and canonical
  Creator scope retention.
- Settings disconnect semantics were not changed; no user-facing purge route
  was added.
- Offering remains Brand-owned.

## Verification

- Prisma generate/validate: PASS.
- Production build: PASS.
- Full affected Brand regression: 114 files passed, 38 opt-in database files
  skipped; 964 tests passed, 442 skipped. Required P1 PostgreSQL owner-scope
  tests separately ran enabled and passed 2/2.
- Changed-surface ESLint, Prettier, Prisma format and `git diff --check`: PASS.
- Planned-content scan: no private key, credential-bearing URL, access token,
  `.env`, raw provider/media payload or temporary artifact.
- Live Graph/model calls: none.

## Correction accounting

Two bounded correction cycles were used. The first split enum creation from
enum-value use and corrected UUID/text handling in the task-only rehearsal. The
second was triggered by the pre-P2 review and added scoped uniqueness and
lineage triggers where legacy nullable Brand keys would otherwise cease to
enforce Creator references. No history rewrite occurred.
