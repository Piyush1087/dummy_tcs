# Instagram Intelligence — Week 1 Correction 1 Evidence

Status: `READY_FOR_CHILD_SA_PROGRAM_ORCHESTRATOR_REVIEW`

This record corrects only exact replay sequencing, replay coverage truth, and
MP4 signature-validation memory use. Week 1 is not self-accepted and Week 2 is
prohibited.

## Exact starting state

| Repository | Starting SHA | Starting tree | Result |
| --- | --- | --- | --- |
| backend | `4eb459d01d45e21f63fd7e85e0eb57784c0c1b83` | `2c96a589a48a214c9c2980961dfe3a7a8885b926` | clean local/fetched equality |
| frontend | `5866d0ac82f742957f53a8db2144a9a166628b75` | `7c095290ffdef4c84f37382bc594bef536c92a49` | clean and unchanged |
| authority | `7c4a76df7910c8e23c1b89982b35fb00c9fc39be` | `c86562b04f48da9fe25a86ddb053a3ec52bc2e55` | clean local/fetched equality |

## Corrected behavior

The Brand Settings acquisition service exposes an authorization-only fence that
selects no encrypted credential and makes no provider call. It validates the
current Brand, Instagram provider, account, authorization generation, identity,
active/connected state, authorization health, and first-party capability.

After this fence, the Week 1 pipeline computes a deterministic pre-acquisition
identity over the Brand/tenant, provider account, authorization generation,
provider media, admitted source Capture/Evidence manifest, window cutoff,
video/frame profiles, observation contract/prompt, and model
provider/identity/profile. An exact completed replay written by the corrected
path returns before locator/acquisition/download, probe, extraction, or model
work. Actual acquisition still contributes the verified video SHA-256 to the
full execution identity. The post-acquisition execution-identity lookup remains
only as bounded compatibility for the published Week 1 rows.

Completed metadata persists the original requested/extracted/observed counts and
availability. Replay validates these bounded values, rejects zero Evidence and
inconsistent apparent completeness, and orders the exact Evidence refs by frame
ordinal. Unit proof preserves `6/3/2/PARTIAL`; PostgreSQL proof preserves
`6/2/2/PARTIAL` and stable Capture/Evidence/Observation/current counts.

The downloader still streams and enforces the 100 MiB limit, rejects declared,
chunked, and dishonest oversize responses, validates MIME/MP4 signature, and
retains FFprobe/container/codec/duration checks and cleanup. MP4 signature
validation now opens the file and reads only 12 bytes; it performs no whole-file
`Buffer` read.

## Verification

- Changed-surface unit/architecture tests: 32 passed.
- Expanded current Instagram/Settings/evidence non-PostgreSQL matrix: 440
  passed; PostgreSQL suites were separately enabled. The unchanged historical
  commercial migration-shape test was excluded because it asserts the
  predecessor's superseded 10-capability allow-list rather than the accepted
  current 19-capability state.
- Clean PostgreSQL 17: all 90 migrations applied, status current, focused B1,
  B2, B3A, B3B, C2, C3, C4, C1, hidden-Brand, and Week 1 matrix 29 passed.
- Prisma generate/validate, production build, scoped ESLint, Prettier, and
  `git diff --check`: passed.
- Schema, 90-migration tree, package manifest/lockfile, and Dockerfile are
  byte-identical to the accepted Week 1 starting checkpoint.
- Secret and forbidden-artifact scan: passed. No `.env`, credential, signed
  locator, raw video/frame, provider payload, or temporary path was published.
- Live Graph calls, live model calls, and Meta mutations: none.

## Publication

Backend correction: `c634387e06cff5e20fd2588b3a9d1d1d6a78a21a` /
tree `ef8e762e26892481da590f418df6ab4d5193b42a`. The first commit owns the
bounded source/tests and its child adds explicit zero generation/current row
counts to the PostgreSQL proof. Normal pushes and independent
fetch-back SHA/tree equality passed; the accepted starting SHA is an ancestor.
The authority checkpoint containing this file is reported by the runner because
a commit cannot encode its own identity.

Correction cycles used: 1. Week 1 remains evidence-ready for Child-SA / Program
Orchestrator review. Week 2 remains prohibited.
