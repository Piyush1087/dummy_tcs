# Creator Audience V0 — P4 final evidence

`CREATOR_AUDIENCE_V0_P4_FINAL_EVIDENCE_V1`

## Disposition

`P4_INTEGRATED_CORRECTION_EVIDENCE_READY = YES`

Final review reopened P4 acceptance because the original fixture bypassed the
production pipeline. Correction 1 closes that defect; final Creator Technical
SA / Parent acceptance remains external to this runner report.

## Immutable implementation chain

| Surface | Accepted predecessor | Final P4 checkpoint |
| --- | --- | --- |
| Backend | P4 `885e1a57a2c0fff75db162216900684303256b9f` / `fffe8bd7fcbe99020ab6f4c50c1c5f91af78015e` | correction `7028d1fcbd467175a5358fce92ad2edd63ea44cd` / `dbc9b8e00936d4ecbc700b516b17ad8ce78f2d17` |
| Frontend | P4 `39799c75abc89e47d6a3526fb05f83d4cfbef585` / `4d76d7766d82153c60fafd6963f64740b729e9de` | harness correction `4ca6141face77821f546a13bdde12c8c41780a6f` / `f14d5076021a97137f505a91c81736021a8dc30a` |
| Authority | P3 `13ee2cdf6c17bdc06637364d322ec0b08c4841ce` / `881540fb45a72a631dd0d7d652728f5e265f85e8` | final publication is reported by the immutable runner report |

Backend and frontend were normally pushed, fetched independently, and proved
local/fetched SHA and tree equality with accepted predecessor ancestry.

## Environment and database

- Windows 10 build 26200, AMD64; Node 24.19.0; npm 11.17.0; Git 2.55.0;
  Docker 29.7.2; PostgreSQL 17.11; Chrome 152.0.7977.83.
- A uniquely named task PostgreSQL 17 container exposed a task-only local port.
  No unrelated container, database, or volume was reused or removed.
- Clean database `creator_audience_p4_clean`: all 101 migrations applied from
  empty; Prisma status current; only the standard `plpgsql` extension is
  installed, and no extra extension is required.
- The populated 98→101 converged-predecessor rehearsal and deterministic Brand
  backfill remain the accepted P1 proof; no migration changed after P1.
- Prisma generate/validate and the backend production build passed.
- Backend production boot passed with generated local-only configuration.
  `GET /health/live` returned HTTP 200 and `{"status":"ok"}`. `GET /health`
  returned HTTP 200 with database status `up`.

## Integrated authenticated fixture

The corrected guarded P4 fixture uses a synthetic Creator Owner,
Settings-compatible Instagram integration, and provider DI that rejects
external hosts. It invokes the production Creator Audience pipeline, which
performs DE/Capture/Evidence persistence and then publishes through the shared
verified Intelligence execution, generation, transition, CAS, and current
services. It creates no sync job and makes no live provider or model call. The
production-built backend and frontend then complete the real password-login,
API, and UI path.

Persisted lineage after publication:

```text
Resource = 1
completed Capture with capturedAt = 1
Evidence = 8
shared Intelligence execution = 1
processor execution = 1
processor attempt = 1
Audience Object generation = 1
component generations = 6
transition action = 1
transition outcomes = 6
current components = 6
Creator Instagram sync jobs = 0
```

The real authenticated `GET /api/v1/creator/insights/audience` returned the
strict `creator_audience_v0.1` DTO, two usable cohorts, and at most three
deterministic Highlights. No internal Evidence ID, provider payload, token,
lease, or mutation control was exposed. Direct unauthenticated access returned
HTTP 401.

## Truth, role, isolation, cadence, and deletion matrix

- Complete, both-partial, Followers-only, Engaged-only, neither-usable,
  observed follower zero, follower-count-with-demographics-suppressed,
  provider empty/threshold suppression, top-45, provider failure, valid and
  invalid denominator, compatible and incompatible comparison, and stale/
  preserved-current fixtures: PASS.
- Highlights are deterministic, evidence-bound, audience-level, and capped at
  three. There is no model participation.
- Owner, Manager, and Assistant explicit `INSIGHTS_AUDIENCE_READ`: PASS.
  Missing action, inactive membership, absent workspace, subject substitution,
  provider-account mismatch, and stale authorization generation: denied.
- Exact replay keeps every source, execution, attempt, generation, transition,
  and current row count stable and performs no second credential or provider
  execution. A later provider failure is projected separately from preserved
  current. Freshness is calculated at read time: before 192 hours is current;
  exactly 192 hours and later is stale.
- One shared hourly dispatcher, immediate initial/reconnect due gate, weekly
  168–168.5 hour cadence including deterministic jitter, and 192-hour stale
  policy: PASS. Manual Audience refresh: absent.
- Internal exact Creator Instagram purge removes target Instagram/Audience
  lineage only. Creator website, other Creator, Brand, Offering, and unrelated
  source data remain. No public delete-data API or UI was added.

## Tests and browser acceptance

- Backend focused non-PostgreSQL matrix: 10 files / 92 tests passed; the two
  opt-in PostgreSQL tests were intentionally skipped in that process and then
  run enabled.
- Creator Audience PostgreSQL lineage/replay/cadence/purge: 2/2 passed.
- Shared owner-scope PostgreSQL isolation/purge: 3/3 passed.
- Frontend focused Audience/shell matrix: 7 files / 33 tests passed. Related
  authenticated/platform guard matrix: 2 files / 23 tests passed.
- P3 synthetic state browser harness and P4 real backend/API browser harness
  both passed at every required width.
- Correction-focused shared runtime/Creator matrix: 34 tests passed. Full
  affected PostgreSQL changed-surface manifest: 321 tests passed; one historical
  upgrade case was skipped by its own suite and four historical/obsolete harness
  files were explicitly excluded from the clean 101-current runtime matrix.
- Frontend full suite: 1,223 tests passed with one existing skip; production
  build passed.

| Width | Real auth/API/UI | Navigation | Keyboard/focus | Overflow | Axe serious | Axe critical | Lesser |
| --- | --- | --- | --- | --- | ---: | ---: | ---: |
| 390 | PASS | mobile bottom nav | PASS | PASS | 0 | 0 | 0 |
| 767 | PASS | mobile bottom nav | PASS | PASS | 0 | 0 | 0 |
| 768 | PASS | desktop sidebar | PASS | PASS | 0 | 0 | 0 |
| 1440 | PASS | desktop sidebar | PASS | PASS | 0 | 0 | 0 |

## Integrity and cleanup

- Backend/frontend production builds, scoped lint/format, and diff checks:
  PASS. Package manifests and lockfiles are unchanged from the accepted
  predecessors; schema and migrations are unchanged after P1.
- High-confidence secret/private-key/credential-bearing-URL scan: PASS. No
  `.env`, access-token value, raw provider response/media, screenshot, database
  volume, generated build, or temporary path is tracked.
- Live Graph calls: NONE. Live model calls: NONE. Meta mutations: NONE.
- No Content, Creator Brand, Portfolio, Commercial Setup, Media Kit, Campaign,
  Collaboration, AI Match, Marketplace, Persona, or edit capability was started.
- No `development` merge and no deployment occurred.

P4 used two bounded correction cycles. The first reconciled boot/browser
invocations to the repository's required local mail-template configuration,
exact PostgreSQL `localhost` guard, and expected unauthenticated startup-refresh
401. The second removed trailing blank lines detected by the authority
publication diff gate. No Product, schema, API, or feature correction was needed.
