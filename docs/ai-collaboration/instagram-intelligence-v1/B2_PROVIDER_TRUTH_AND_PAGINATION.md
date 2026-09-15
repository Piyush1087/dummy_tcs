# Instagram Intelligence B2 — Provider Truth and Pagination

## Checkpoint state

```text
PACKET = B2_PROVIDER_TRUTH_AND_PAGINATION
STATE = EVIDENCE_READY_FOR_CHILD_SA_REVIEW
B1 = ACCEPTED
B2_ACCEPTED = NO
B3 = PROHIBITED
LIVE_GRAPH_CALLS = NONE
META_PROVIDER_MUTATIONS = NONE
```

This checkpoint records one completed external-local B2 primary run. It does
not claim Program acceptance and does not authorize B3.

## Exact lineage and publication

| Repository | Branch | Accepted predecessor | Published B2 identity |
|---|---|---|---|
| Backend | `program/instagram-intelligence-v1-backend` | `0725a36fa39c4a599e88cd008fddfacf21a9e44c` / `dc98b3af4d1f1ab225a8d5b1d983d0c50c10d781` | R1-corrected `a9e756b28e9da630e9792538c61f695b10bb28c9` / `f878d424d72d1e1cea3c939440d9ab3cb5a54ab1` |
| Frontend | `program/instagram-intelligence-v1-frontend` | `97efcaae7ad69da6bd1c18ab8cebb44ca82c4c9e` / `18c7cb0edd173960d15fcc29d71583a1ea429586` | unchanged |

The backend commit was published by normal non-force push. A subsequent
fetch/prune proved byte-identical local and remote SHA/tree and proved the B1
checkpoint is an ancestor. The authority commit containing this artifact is
reported only in the immutable runner report because a commit cannot encode
its own identity.

## Official provider evidence

Primary Meta documentation was inspected read-only on 2026-09-11. No live
Graph data endpoint, OAuth flow, token operation, provider-management mutation,
or non-Meta provider-contract source was used.

- [Graph API v26.0 changelog](https://developers.facebook.com/docs/graph-api/changelog/version26.0/) identifies v26.0, released 2026-07-29.
- [Instagram Media Insights](https://developers.facebook.com/documentation/instagram-platform/reference/instagram-media/insights) documents Instagram Login access through `instagram_business_basic` plus `instagram_business_manage_insights`, empty data as unavailable rather than zero, possible delay up to 48 hours, top-level-only insights, and the metric/product matrix.
- [Instagram Account Insights](https://developers.facebook.com/documentation/instagram-platform/api-reference/instagram-user/insights) documents follower versus engaged demographics, lifetime period, `total_value`, supported breakdowns/timeframes, privacy thresholds, top-45 output, and delay limitations.
- [IG User Media](https://developers.facebook.com/docs/instagram-platform/instagram-graph-api/reference/ig-user/media/) documents time-bounded `since`/`until` reads, cursor pagination, Story exclusion, and the recent-media limit.
- [IG Media Children](https://developers.facebook.com/docs/instagram-platform/instagram-graph-api/reference/ig-media/children) documents the child edge and unavailable child fields.

The documentation index is not perfectly converged: some route pages retain
Facebook Login wording or older “latest” labels while the current Instagram
Login reference and v26 changelog are current. The implementation therefore
keeps the configured `v26.0` route, the two accepted Instagram Login permissions,
and an explicit optional/unavailable field model; it does not silently
downgrade, add Facebook Pages/Login, or add scopes.

## Frozen v26 read contract

Profile reads request provider ID, username, name, account type, and the three
account counts. R1 removed the raw profile-image locator from both request and
result contracts; an unexpected provider `profile_picture_url` is ignored.
Provider ID and username are required for a successful identity result. Optional missing fields remain
`UNAVAILABLE`; a returned numeric zero is `OBSERVED_ZERO`; no timestamp is
synthesized.

Owned media reads request ID, `media_type`, `media_product_type`, permalink,
caption, and timestamp. Story inventory is excluded by the provider contract.
No media, thumbnail, or signed locator is requested, returned, logged, or
persisted by B2. Provider response order is retained; no early stop relies on
an undocumented ordering guarantee.

Verified top-level media metric allowlist:

| Format/product | Requested metrics |
|---|---|
| Image / Feed | comments, likes, reach, saved, shares, total_interactions, views |
| Carousel / Feed | comments, likes, reach, saved, shares, total_interactions, views |
| Video / Feed | comments, likes, reach, saved, shares, total_interactions, views |
| Reel | comments, likes, reach, saved, shares, total_interactions, views |
| Story (not inventory) | reach, shares, total_interactions, views |
| Unknown | none; every pair is explicit `UNSUPPORTED` |

`impressions` is not requested or aliased to reach. Metrics carry count units,
explicitly unavailable denominators, unavailable provider-observation time,
and the documented 48-hour lag limit. Omitted rows, empty data, unsupported
pairs, content/metric unavailability, and provider failures stay distinct.
No child-media insight call exists.

Audience allowlist:

| Dimension | Values |
|---|---|
| Metric/population | `follower_demographics`; `engaged_audience_demographics` |
| Period / metric type | `lifetime` / `total_value` |
| Timeframe | `this_month`; `this_week` |
| Breakdown | age; city; country; gender |
| Limits | threshold 100; top 45; up to 48-hour delay |

Empty/threshold-suppressed output stays unavailable. Follower and engaged
populations are separate. Missing dimensions and percentages are not inferred.

Carousel child reads preserve returned order with a zero-based ordinal, child
ID, type, and product-type availability, deduplicate IDs, apply the maximum of
10, use only reconstructed same-host cursor requests, and distinguish empty,
partial, failed, exhausted, and capped results. Children remain metadata of one
top-level parent Resource; B2 does not download or persist them.

## Settings-owned ports and containment

`InstagramIntelligenceConnectionReadService` exposes only the non-secret
connection projection: integration/Brand/provider identity, handle, connection
and capability state, authorization generation, credential version, sync/human
action state, and token-expiry metadata. It selects no credential field.

`InstagramIntelligenceAuthorizedReadService` accepts an exact Brand,
integration, provider-account, authorization-generation fence and one typed
allowlisted read command. It rejects provider mismatch, cross-Brand use,
missing/unverified identity, changed account, stale generation, inactive or
disconnected authorization, missing capability, and missing credential before
provider invocation. Only after every fence passes does it decrypt inside the
adapter, invoke the typed provider once, and return normalized truth plus
non-secret integration/Brand/account/generation/version lineage. It performs no
Settings write and returns/logs neither plaintext nor ciphertext.

The DI token exports only the five lossless B2 read methods. It cannot expose
the legacy `fetchMe`, `fetchRecentMedia`, or zero-shaped `fetchMediaInsights`
surface. Existing Creator and Settings consumers retain `InstagramGraphClient`
unchanged as an explicit compatibility boundary. The only shared adjustment is
the additive, typed `RATE_LIMIT` classification and its propagated error type.

## Pagination and truth evidence

- One caller-supplied valid `windowEnd` is captured; `windowStart` is exactly
  30 days earlier. Both fixed Unix boundaries are sent on every page.
- Only valid timestamps in the inclusive `[windowStart, windowEnd]` interval
  are eligible. Future/older rows are excluded.
- Missing/invalid timestamps remain coverage records marked unavailable and
  are never made eligible or replaced with the clock.
- IDs deduplicate deterministically across pages. Returned, eligible,
  missing-timestamp, duplicate, page, oldest/newest timestamp, and stop-reason
  coverage is retained.
- Cursor values are extracted only from the allowlisted response cursor or a
  validated HTTPS same-origin/same-path next reference. Full next URLs are
  never returned or logged. Malformed, foreign-host, and looped cursors become
  explicit provider failure.
- Explicit empty first-page success is `AVAILABLE`/`EMPTY_SUCCESS`; malformed
  or failed first page is `UNAVAILABLE`; later failure is `PARTIAL`. R1 makes
  continuation truth authoritative at the cap: exactly 500 rows with no
  continuation is `AVAILABLE`/`EXHAUSTED`; a valid continuation or additional
  retained current-page row is `PARTIAL`/`CAP_REACHED`.
- Fixture replay with the same input produces byte-equivalent normalized JSON.

Provider failure taxonomy independently retains authorization revalidation,
permission loss, provider access block, rate limit, transient, content/metric
unavailability, and unknown. Safe logs include only operation, status,
classification, numeric code/subcode, and transient flag—not provider body or
credential material.

## Validation evidence

Environment: Windows 11 `10.0.26200` x64; Node `v24.19.0`; npm `11.17.0`;
Prisma generated client `6.19.3`; Docker client/server `29.7.2`; PostgreSQL
`17.11`. All local credentials were synthetic and are omitted.

| Gate | Exact command/procedure | Result |
|---|---|---|
| Immutable install | `npm ci` | PASS, exit 0; 808 packages installed; package/lock unchanged |
| Prisma generation | `npm run prisma:generate` | PASS, exit 0 |
| Prisma validation | `npx prisma validate` with synthetic local `DATABASE_URL` | PASS, exit 0 |
| Production build | `npm run build` | PASS, exit 0 |
| Scoped lint | `npx eslint` over all 13 changed TypeScript paths | PASS, exit 0 |
| Diff integrity | `git diff --check` and staged equivalent | PASS, exit 0 |
| Focused static/contract/compatibility suite | `npx vitest run --config vitest.config.ts` over B2 provider/ports, Instagram reconciliation, both installed contract/preflight tests, Settings readiness/access, Creator AI sync, and B1 persistence/identity architecture | PASS, 10 files / 115 tests |
| B2 real PostgreSQL port | focused B2 port PostgreSQL test with `B2_INSTAGRAM_DATABASE_URL` | PASS, 1 file / 1 test |
| B1 writer PostgreSQL regression | focused unchanged writer test with `B1_INSTAGRAM_DATABASE_URL` | PASS, 1 file / 7 tests |
| Settings reconciliation PostgreSQL | focused test with `BS06_DATABASE_TEST=true` | PASS, 1 file / 22 tests |
| Settings legacy PostgreSQL | focused test with `BS06_LEGACY_DATABASE_TEST=true` | PASS, 1 file / 27 tests |
| Clean database migration | `npm run db:migrate:deploy`; `npx prisma migrate status` | PASS, all 88 applied from zero; current |
| Registry/fixture parse | included installed contract/preflight tests | PASS, 25 tests across the two files |

The immutable install intentionally did not change dependencies or the lockfile
and reported the repository's existing audit inventory (52 findings). No audit
rewrite was authorized. Because npm's script policy left generated Prisma
artifacts absent after install, the required repository command
`npm run prisma:generate` was rerun before PostgreSQL tests; no source or cycle
change resulted. Two optional pre-existing Settings PostgreSQL suites initially
rejected the disposable database name because they require `bs06_*`; a second
task-scoped database with that exact guard was created in the same disposable
container, migrated normally, and both suites then passed. This was environment
setup, not a B2 correction cycle.

## Migration, contract, and hygiene invariants

- Prisma schema, all migrations, B1 provider-neutral writer source, package
  manifest, and lockfile are byte-unchanged.
- Migration count is 88. Migration 88 remains
  `d02b75e50f883150c9d14908c82ef10d9b0de4c2b464168567634dd0157009e4`.
- `sourceClass` remains `INSTAGRAM_OWNED`; exactly nine DE capabilities and
  exactly three future Intelligence Objects remain registered.
- B2 creates no Resource/Capture/Evidence, SemanticObservation, Object,
  generation, current, or candidate state. B1 identity/lifecycle is unchanged.
- Settings lifecycle and roles are unchanged. Manual refresh remains Brand
  Owner allow, Campaign Manager allow, Finance Admin deny/read-only.
- No schema, migration, controller, endpoint, scheduler, refresh trigger,
  OAuth lifecycle, frontend, canonical Brand/Campaign/Collaboration/Creator/
  Offering model, media binary, signed URL, `.env`, or provider credential was
  added.
- Scope remains only `instagram_business_basic` and
  `instagram_business_manage_insights`; Facebook Pages/Login, Business
  Discovery, Creator Marketplace, DMs, publishing, comments management, and
  webhooks remain excluded.
- Secret/pattern, tracked-artifact, planned-push, and post-commit scans passed.
  The repository's pre-existing `.env.example` is unchanged and contains no
  local value; no `.env` is tracked.

## Exact backend file inventory

Changed existing files:

- `src/features/brand-settings/brand-settings-consumer.module.ts`
- `src/features/instagram-intelligence/contracts/instagram-intelligence.contracts.test.ts`
- `src/features/instagram-intelligence/contracts/instagram-intelligence.registry.ts`
- `src/features/instagram/instagram-oauth.client.ts`
- `src/features/instagram/instagram-provider-client.module.ts`
- `src/features/instagram/instagram-provider-error.ts`
- `src/features/instagram/instagram-reconciliation.test.ts`

Added files:

- `src/features/brand-settings/services/instagram-intelligence-provider-read.postgres.test.ts`
- `src/features/brand-settings/services/instagram-intelligence-provider-read.service.test.ts`
- `src/features/brand-settings/services/instagram-intelligence-provider-read.service.ts`
- `src/features/instagram/instagram-intelligence-provider.client.test.ts`
- `src/features/instagram/instagram-intelligence-provider.client.ts`
- `src/features/instagram/instagram-intelligence-provider.types.ts`

No direct Creator consumer was changed. No frontend file was changed.

## Correction accounting and boundary

```text
B2_PRIMARY_RUNS_USED = 1
B2_CORRECTION_CYCLES_USED = 1
LIVE_GRAPH_CALLS = NONE
META_PROVIDER_MUTATIONS = NONE
B3_STARTED = NO
B3_AUTHORIZED = NO
```

Ordinary compile/test iteration remained inside the primary run. The subsequent
Child-SA/Program-Orchestrator review identified two bounded provider-truth
defects; the following R1 section preserves their history and correction proof.

## B2 correction R1 of 2 — provider-truth closeout

The published pre-R1 checkpoint requested and returned the raw
`profile_picture_url`, and assigned `CAP_REACHED` before checking whether a
500-item/10-child response was actually exhausted. R1 corrected only those two
verified defects.

- `profile_picture_url` is absent from the requested profile fields and from
  `InstagramProfileTruth`. Unexpected provider locator material is ignored and
  cannot appear in serialized output or the success-path log.
- Media and child pages are fully inspected for retained current-page overflow,
  then the safe cursor is parsed and validated without making another request.
  Invalid, foreign, or looped continuation remains explicit pagination failure.
- Exactly 500 media or 10 children with no continuation is
  `AVAILABLE`/`EXHAUSTED`.
- Exactly the cap with a valid continuation, or retained current-page data
  beyond the cap, is `PARTIAL`/`CAP_REACHED`.
- No request follows a terminal exhausted, capped, or pagination-failure
  decision. Caps, ordering, deduplication, optional-field semantics, and all
  provider/Settings compatibility contracts remain unchanged.

R1 changed exactly three backend files: the provider types, provider client,
and complete provider fixture test. The fixture file passed 34 of 34 tests; the
full focused B2/contract/compatibility matrix passed 10 files / 117 tests.
Scoped lint, production build, Prisma generation/validation, and diff integrity
passed. Clean PostgreSQL 17.11 applied all 88 migrations and reported current;
the B2 Settings port passed 1/1, B1 writer 7/7, Settings reconciliation 22/22,
and legacy Settings 27/27.

Schema, migrations, migration-88 checksum, dependencies, lockfile, B1 writer,
Creator sources, permissions, provider version, Settings lifecycle, and
frontend are unchanged. R1 backend publication used a normal non-force push;
independent fetch-back proved SHA/tree equality and retained
`a3252f2fed0a9d826f947221aab3dd8fd28aeaf5` ancestry.

```text
B2_CORRECTION_CYCLE = R1 OF 2
B2_PRIMARY_RUNS_USED = 1
B2_CORRECTION_CYCLES_USED = 1
B2_ACCEPTED = NO
B2_EVIDENCE_READY = YES
B3 = PROHIBITED
LIVE_GRAPH_CALLS = NONE
META_PROVIDER_MUTATIONS = NONE
```
