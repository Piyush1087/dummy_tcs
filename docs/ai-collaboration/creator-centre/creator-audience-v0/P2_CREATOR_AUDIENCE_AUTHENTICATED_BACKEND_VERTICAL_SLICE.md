# P2 — Creator Audience authenticated backend vertical slice

`CREATOR_AUDIENCE_V0_P2_EVIDENCE_V1`

## Accepted checkpoint

- Backend parent: `843faa5cf6936c0a5e8895a703cf8bdf3921e246` / `1867832be3cdace0f3a065925ba57e77bff6f756`.
- Backend P2: `1eba8f80c5f98bcd2bc5b015985a4b01292ed81d` / `bf1f561dccbca15c1c3faa79a22820863192aafe`.
- Frontend remains P0: `777c74cb7ca978053d9c10dcab29b282bc2dbea8` / `a3d6a32f566eeed9b608a7b5a2a4d1ec0b238e6f`.
- Publication/fetch-back: local and `origin/program/creator-audience-v0-backend` SHA/tree equal; P1 ancestry PASS.

## Implementation

- The authenticated no-store route is `GET /api/v1/creator/insights/audience`.
- Server-side actor resolution uses the active Creator workspace and canonical Owner `CreatorProfile`; caller input cannot select Creator, workspace, provider account, integration, or authorization generation.
- `INSIGHTS_AUDIENCE_READ` permits Owner, Manager, and Assistant read-only access. It grants no Settings or mutation authority.
- A Creator Settings-owned credential fence validates Instagram Professional account type, exact account and generation, current token state, authorization health, and basic/insights capabilities. Decryption exists only in the acquisition fence after replay misses.
- The stateless provider client performs the accepted eight current-month/lifetime audience reads and retains an explicit provider denominator only when it is finite and consistent.
- Creator-owned Resource, completed Capture with non-null `capturedAt`, eight bounded Evidence rows, one deterministic Audience Object, six component generations, six current components, and exact Evidence references use the shared owner-scoped runtime.
- The deterministic normalizer preserves unavailable, provider-failure, privacy/empty suppression, top-45, observed-zero, count-only, partial-cohort, and stale truth. Percentages require an explicit valid denominator. Highlights use the frozen 5/10-point rules, are audience-level, deterministic, and capped at three. No model participates.
- Initial connect/reconnect schedules immediate Audience processing through a narrow Creator lifecycle port backed by the one shared Instagram coordinator. The existing one hourly dispatcher claims Creator work; success schedules weekly plus deterministic 0–30 minute jitter. No manual Audience refresh exists.
- Exact replay retains the current Settings fence and performs no second credential or provider execution. Failure does not replace current.
- Internal purge deletes Creator Instagram/Audience data and jobs only; the Creator scope and Creator-owned website data survive.

## PostgreSQL proof

- Disposable PostgreSQL 17 database: `creator_audience_p2_clean` on the task container.
- Migration status: 101/101, current; no P2 schema or migration change.
- Lineage counts after first publication: Resource 1, completed Capture 1, Evidence 8, Object 1, component generations 6, current components 6.
- Exact replay leaves all six counts unchanged.
- Shared scheduler: initial job immediately due; exact Creator/account/generation lease; completion becomes pending with next due in 168–168.5 hours; manual pending false.
- Purge removes target Instagram/Audience rows, retains the owner scope, and retains a Creator-owned website Resource.

## Verification

- Prisma generate/validate and migration status: PASS.
- Backend production build: PASS.
- Creator Audience, provider, shared dispatcher/pipeline, Creator Settings/Team/entry, and owner-scope focused suite: 15 files PASS, 108 tests PASS; opt-in PostgreSQL tests separately enabled.
- Creator Audience PostgreSQL: 2/2 PASS. Owner-scope PostgreSQL: 3/3 PASS.
- Scoped ESLint, Prettier, and `git diff --check`: PASS.
- Strict DTO/route architecture, no mutation controls, no internal identifiers, no credential leakage: PASS.
- Fixture matrix covers complete/partial/single/neither cohort, suppression, provider failure, observed zero, invalid/valid denominators, compatible/incompatible comparisons, three allowed roles, authorization/account/generation rejection, replay, current preservation, cadence, and source-scoped purge.
- Secret scan: PASS. No `.env`, token, raw provider payload, lease, signed locator, raw media, prompt, or model output is tracked or exposed.
- Live Graph calls: NONE. Live model calls: NONE.

## Review disposition

The first focused architecture wave rejected a direct coordinator type dependency in the initial-connect service. One bounded correction introduced a narrow local scheduling port while retaining the single shared implementation. The rerun passed.

`P2 = ACCEPTED`

`P2_CORRECTION_CYCLES = 1`
