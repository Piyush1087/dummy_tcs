# Creator Audience V0 — P4 final evidence

`CREATOR_AUDIENCE_V0_P4_FINAL_EVIDENCE_V1`

## Disposition

`P4 = ACCEPTED`

The conditional packet gates are complete. Final Creator Technical SA / Parent
acceptance remains external to this runner report.

## Immutable implementation chain

| Surface | Accepted predecessor | Final P4 checkpoint |
| --- | --- | --- |
| Backend | P2 `1eba8f80c5f98bcd2bc5b015985a4b01292ed81d` / `bf1f561dccbca15c1c3faa79a22820863192aafe` | `885e1a57a2c0fff75db162216900684303256b9f` / `fffe8bd7fcbe99020ab6f4c50c1c5f91af78015e` |
| Frontend | P3 `24a97eafd2da4e6f98282b10916adb5758c3017f` / `0c3079c1dc83a29da29393e04ad85169fba88e61` | `39799c75abc89e47d6a3526fb05f83d4cfbef585` / `4d76d7766d82153c60fafd6963f64740b729e9de` |
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

The guarded P4 fixture uses a synthetic Creator Owner and Settings-compatible
Instagram integration. It creates no sync job and cannot make a provider call.
It publishes the accepted deterministic acquisition through the production
shared repository, then the production-built backend and frontend complete the
real password-login/API/UI path.

Persisted lineage after publication:

```text
Resource = 1
completed Capture with capturedAt = 1
Evidence = 8
Audience Object generation = 1
component generations = 6
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
- Exact replay keeps row counts stable and performs no second credential or
  provider execution. Later unavailable execution does not replace valid
  current.
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

P4 used one bounded operational correction cycle: the first boot/browser
invocations were reconciled to the repository's required local mail-template
configuration, exact PostgreSQL `localhost` guard, and expected unauthenticated
startup-refresh 401. No Product, schema, API, or feature correction was needed.

