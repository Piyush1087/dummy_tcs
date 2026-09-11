# Instagram Intelligence C2 — Deterministic Foundations

**Execution status:** `EVIDENCE_READY_FOR_CHILD_SA_REVIEW`  
**Program acceptance:** not self-declared  
**Primary runs:** 1  
**Correction cycles:** 0

## Exact starting authority

Normal fetch/prune, local/fetched equality, clean-worktree, and ancestry checks
passed before mutation.

| Repository | Starting SHA | Starting tree |
|---|---|---|
| backend | `60a0ab2b8fb142115eccf93c3c82e72d473ca94b` | `686e665bc350e17fad5a81f8c52b77825e067cc2` |
| frontend | `bc8523183ae4892c0b538474d2f5444a1ea356d8` | `7f3016c01500083ae2f536ebd0540219c9228dd7` |
| authority | `d59a130164dd31fc38261cb855dea54a5c57b7d2` | `bcb4d754c9f13b035986cb3d61d2a61b7fc2f9ec` |
| immutable B4 contract-source ancestor | `c98b4edfa64b6711d290947ea61236573e029dd2` | `15be1c29422b0079acce3c9220e0413eab750df8` |

B3B backend and authority descended from accepted B4. The immutable B4 source
remained an authority ancestor. No overlapping user work existed.

## Contract and placement

Contract `instagram-c2-deterministic-foundations-v1` adds one bounded backend
service under the existing Instagram Intelligence module. It reuses existing
Prisma Evidence, Semantic Observation, Observation-support, canonical JSON,
SHA-256, capability IDs, B2 metric vocabulary, B3B payloads, and Settings-owned
deletion. No schema, migration, capability, Object/current/candidate, consumer,
API, frontend, or second lifecycle was added.

The projection admits only completed `INSTAGRAM_OWNED` captures at or before an
exact cutoff, for the exact Brand, provider account, and current authorization
generation. It binds the requested end and inclusive 30-day start, sorts every
identity before hashing, and excludes C2-derived rows from future source input.
Historical account snapshots are queried separately and may span generations
only for the unchanged Brand/provider account; each generation stays explicit.

## Deterministic result inventory

- Account facts remain `FACTUAL_RESULT` context.
- Corpus facts include inventory/eligible/missing/excluded counts, cap/partial
  state, normalized-format counts and exact shares, caption states, visual
  inspection states, selected/unselected counts, publication dates, ordered
  intervals, minimum/maximum/mean/median interval, and posting rates.
- Metric cohorts are `ALL_ELIGIBLE` factual totals/coverage and each format
  independently. Installed metrics are reach, views, likes, comments, saved,
  shares, and provider-supplied total_interactions. The latter is never
  reconstructed. Reach sums are labeled exactly `SUMMED_MEDIA_REACH`.
- Every metric cohort retains eligible/supported/available/unavailable/
  unsupported/provider-failure/observed-zero counts, numerator/denominator
  coverage, sum/minimum/maximum/arithmetic mean/median, and availability.
- Per-media descriptive rates are limited to total_interactions, likes,
  comments, saved, or shares divided by same-media reach. Missing/failure,
  unsupported, and zero reach map respectively to `DENOMINATOR_UNAVAILABLE`,
  `DENOMINATOR_UNSUPPORTED`, and `DENOMINATOR_ZERO`; no substitute zero exists.
- Follower and engaged distributions remain separate by population, timeframe,
  breakdown, unit, and Evidence. Shares require an explicit total or a proven
  complete, unsuppressed, untruncated partition. Partial/TOP_45/unknown sets are
  not renormalized. Comparable bucket deltas expose numeric values and the
  existing versioned 5/10-point threshold flags only.
- Snapshot states are `CURRENT_STATE_ONLY` for one valid snapshot and
  `FACTUAL_CHANGE_ELIGIBLE` for two or more. Percentage change requires a
  non-zero prior value. Trend-interpretation eligibility requires at least
  three snapshots and at least 14 elapsed days; no direction or narrative is
  emitted.

Arithmetic accepts safe integers, computes with `bigint` rational operations,
serializes six decimal places using round-half-up, and normalizes negative zero.
This rule covers rates, shares, coverage, means, medians, and percentage change.
Locale-sensitive formatting, floating-point persisted calculations, NaN, and
Infinity are absent.

## Persistence and lineage

Each source capability produces a bounded `DETERMINISTIC_DERIVED_RESULT`
Evidence payload and an existing Semantic Observation. The deterministic key is
the contract, capability, canonical input-manifest hash, and canonical value
hash. Existing Observation-support rows reference the complete capability-owned
source Evidence set. Replay excludes derived rows from input, reuses the exact
Evidence/Observation identities, and does not duplicate support relations.

The PostgreSQL fixture projected eight current-generation source rows and two
same-account historical rows. Before task-owned deletion it held 10 source
Evidence rows, four derived Evidence rows, four Semantic Observations, and ten
support relations. Replay preserved all row counts and identities. A changed
Evidence identity changed the input/value identity; shuffled input produced
byte-identical canonical output. Provider mismatch, stale generation, and a
second Brand were rejected or isolated. Settings deletion removed the target
Brand's C2 Evidence, Observations, and support while preserving the other Brand.

## Validation evidence

Environment: Windows 11 64-bit, x86_64, Node `v24.19.0`, npm `11.17.0`, Docker
Engine `29.7.2`, disposable PostgreSQL 17 Alpine.

- `npm ci`: PASS, 813 packages from the immutable lockfile. Package and lockfile
  remained unchanged. The existing audit reported 52 advisories; C2 added no
  dependency.
- Prisma generate and validate: PASS.
- Clean PostgreSQL: all 88 migrations applied; status current; count exactly 88.
  Migration 88 remained byte-identical at SHA-256
  `d02b75e50f883150c9d14908c82ef10d9b0de4c2b464168567634dd0157009e4`.
- Focused C2 plus B1/B2/B3A/B3B/B4 matrix: 14 files, 68 tests PASS. C2 alone:
  2 files, 10 tests PASS, including mixed IMAGE/CAROUSEL/REEL/VIDEO, arithmetic,
  audience, history, replay, isolation, support, and deletion.
- Scoped ESLint, backend production build, and `git diff --check`: PASS.
- Package/lock integrity and staged secret/forbidden-artifact scan: PASS. No
  `.env`, credential, token, signed locator, raw/base64 media, temporary image,
  database volume, browser state, build output, or runtime log was tracked.

## Publication and scope

Backend commit `bb8acafb63b74419a7188c52fe1a154b44904c73`, tree
`f9c3e2e6cffb2c749f9911ebea093edd79ba428e`, was normally pushed to
`program/instagram-intelligence-v1-backend`. Independent fetch-back produced
equal local/remote SHA and tree with the accepted B3B checkpoint as ancestor.
Frontend stayed unchanged and clean at
`bc8523183ae4892c0b538474d2f5444a1ea356d8` /
`7f3016c01500083ae2f536ebd0540219c9228dd7`.

No live Graph/OAuth/Meta/provider/model call, provider mutation, media download,
raw-media persistence, Campaign change, semantic interpretation, Signal,
Pattern, Learning, recommendation, ranking, C3/C4, consumer/API, frontend, or
immutable B4 artifact change occurred. The final authority commit cannot encode
its own identity; the runner report records its independently fetched SHA/tree.

