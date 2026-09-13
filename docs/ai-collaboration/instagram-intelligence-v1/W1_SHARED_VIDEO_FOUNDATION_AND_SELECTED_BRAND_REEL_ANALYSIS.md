# Instagram Intelligence — Week 1 Shared Video Foundation

Status: `EVIDENCE_READY_AWAITING_CHILD_SA_PROGRAM_ORCHESTRATOR_ACCEPTANCE`

Week 1 adds a provider-neutral, bounded video acquisition/decoding seam and uses
it only for already deep-selected Brand-owned `REEL`, `REELS`, and `VIDEO`
media. Week 2, Creator implementation, development merge, and deployment remain
prohibited. This artifact records evidence readiness; it does not accept Week 1.

## Starting authority and recovery

The supplied Week 1 prompt SHA-256 is
`46dc3bfb9ba53899a4f930f5be3e944820b591e78a59f20fe8251308796bf55b`.
The authority worktree was clean at
`261bd1d4ddb6ffe4cb3a06ab00b83f3b0a9ef320` / tree
`4305067d3d29d0d5429a29e103cf2ab5b3e92249`. A read-only fetch found the exact
accepted one-commit descendant
`55efc544234758b2c694b3d5fbd3bdcf8b8877da` / tree
`37775870c7e91c21c44621097d032fb004d9f27c`. The runner proved direct ancestry
and distance one, then used exactly `git merge --ff-only` and reverified local
and fetched equality plus a clean worktree.

The recovered Week 1 implementation anchors were:

| Repository | SHA | Tree |
| --- | --- | --- |
| backend | `d5b9de557ed983a9c3af26b1edc305ba8b77d6f3` | `67d2642871899fda9e7bd9248b8d56892c3d6e6d` |
| frontend | `5866d0ac82f742957f53a8db2144a9a166628b75` | `7c095290ffdef4c84f37382bc594bef536c92a49` |
| authority | `55efc544234758b2c694b3d5fbd3bdcf8b8877da` | `37775870c7e91c21c44621097d032fb004d9f27c` |

All three worktrees were clean and all remotes identified the expected GitHub
repositories. Backend migration count was exactly 90; the latest migration was
`20260912170000_instagram_c1_sync_coordinator` and its SQL SHA-256 was
`3a282067c79560d5701611071457f1825f3e0b21dd1238253318f4945abbdf80`.

## Implemented boundary

The shared path is:

```text
Settings authorization and exact tenant/account/generation fence
-> minimum-field provider locator
-> bounded secure temporary MP4 acquisition
-> FFprobe container/codec/duration validation
-> deterministic selected-reel-frames-v1 timestamps
-> temporary JPEG extraction
-> fail-closed low-level per-frame observation
-> completed Capture and exact frame Evidence
-> C3 exact-frame semantic grounding
-> existing C4 three-Object/current consumer path
```

The fixed profile is unchanged: 100 MiB maximum download, 180-second maximum
duration, at most six frames, 1280-pixel maximum long edge, 4 MiB maximum
encoded frame, and no raw-video or raw-frame retention. Candidate timestamps are
0, 1500, 3000, 50%, 80%, and duration minus 250 ms, then range-filtered,
millisecond-normalized, deduplicated, sorted, and capped at six.

The locator asks only for `id,media_type,media_url,timestamp`, validates media
identity and type, uses the existing bounded JSON reader, and exposes typed
`AVAILABLE`, `PARTIAL`, or `UNAVAILABLE` truth without admitting the signed
locator to persisted evidence or consumer output.

The downloader requires HTTPS and an approved host, rejects private/reserved DNS
answers, revalidates every redirect, bounds redirect count and all timeouts,
checks declared length, independently enforces streamed length, detects
dishonest length, validates MIME plus MP4 signature, writes atomically into a
unique isolation scope, and removes partial artifacts on every terminal path.

The decoder uses `spawn` argument vectors with `shell: false`, bounded
stdout/stderr, timeout, abort and exit-code handling. FFprobe output is parsed as
untrusted data. The production Docker runtime now installs the Debian Bookworm
`ffmpeg` package, providing FFmpeg and FFprobe 5.1.9 in the proof image. The
production image successfully executed the application decoder wrapper against
a generated four-second H.264 MP4, verified its 320x180/4000 ms probe, extracted
three bounded JPEG frames, and removed the temporary scope.

No npm package or lockfile changed. The repository Docker context is now bounded
by explicit ignores for Git, dependencies, build/test output, logs, and local
environment files. The rollout switch
`INSTAGRAM_SELECTED_VIDEO_FRAMES_ENABLED` defaults to `false`; executable path
overrides are `INSTAGRAM_VIDEO_FFMPEG_PATH` and
`INSTAGRAM_VIDEO_FFPROBE_PATH`. This artifact records names only, never values.

## Semantics, identity, and lifecycle

Each frame identity binds Brand, provider account, authorization generation,
provider media ID, source Capture/Evidence manifest, verified video SHA-256,
acquisition/frame-selection versions, frame ordinal and requested timestamp,
frame dimensions/size/hash, low-level observation contract/profile/model,
C3 profile, and window/cutoff identity. At the originally published checkpoint,
exact successful replay returned stable references only after repeating locator
and download acquisition. Correction 1 adds a current non-secret Settings fence
and a deterministic pre-acquisition replay manifest, so executions written by
the corrected path return stable references without locator, download, probe,
extraction, or model work. A bounded post-acquisition lookup remains only for
compatibility with the originally published rows. Changed-profile failure cannot
replace prior valid evidence/current.

Only structured metadata and low-level observations are persisted. Raw video,
raw frame bytes, base64, signed locators, temporary paths, provider payloads,
decoder logs, and model internals are excluded. Partial frame success is
explicit. Sampled-frame C3 inputs use
`instagram-c3-sampled-video-frames-v1`; positive fields cite the exact admitted
frame refs, while Creator, Offering, and likely-collaboration absence remains
`UNKNOWN / INSUFFICIENT_EVIDENCE`. Sampled frames cannot produce a complete-video
negative and do not imply temporal sequence, audio, transcript, causality, or a
three-second-view proxy.

Selected IMAGE and CAROUSEL behavior remains unchanged. Unselected video is
bypassed and remains not inspected/unknown. The selected Reel/video path is
reachable only while the fail-closed rollout switch is enabled. Existing C2
cohort/sample/coverage rules and the existing C4 three-Object/current path are
unchanged.

Settings target delete-data purges the target Brand's new video Evidence and
task-scoped temporary files through the accepted lifecycle. PostgreSQL tests
prove another tenant and unrelated website evidence survive.

## Correction 1: replay and bounded memory

Correction 1 preserves the accepted Week 1 Product and lifecycle boundaries. A
current Settings query validates Brand, Instagram provider, provider account,
authorization generation, active/connected status, verified identity, and
first-party profile capability without selecting the encrypted credential or
calling the provider. Only then may the pipeline look up the deterministic
pre-acquisition manifest. Its identity binds Brand, provider account,
authorization generation, provider media, admitted source Capture/Evidence,
window cutoff, video/frame profiles, observation contract/prompt, and model
provider/identity/profile. Actual acquisition still adds the verified video
SHA-256 to the full persisted execution identity.

The persisted bounded metadata now carries the original requested, extracted,
and observed frame counts plus `AVAILABLE`/`PARTIAL` truth. Replay rejects
zero-Evidence failures and inconsistent metadata, recovers Evidence references
in frame order, and never derives coverage from Evidence count. The corrected
partial proof is `6 requested / 3 extracted / 2 observed / PARTIAL` in unit
tests and `6 / 2 / 2 / PARTIAL` against PostgreSQL.

MP4 signature validation now reads only the required 12-byte prefix. Streamed
100 MiB enforcement, declared/chunked/dishonest length rejection, MIME and MP4
signature checks, FFprobe validation, decoder bounds, and cleanup are unchanged.
No schema, migration, dependency, Dockerfile, public API, or frontend changed.

## Verification

The runner used Windows 11 AMD64, host Node 24.19.0/npm 11.17.0, Docker
29.7.2, and a production Node 20 Bookworm image. `npm ci` completed from the
immutable lockfile (the inherited audit report remained 4 low, 24 moderate, 23
high, and 1 critical). Prisma generation and validation passed. Scoped ESLint
covered all 27 changed TypeScript files; Prettier check, production build, and
`git diff --check` passed.

The focused provider/security/media/C2/C3/C4/C1/hidden-Brand/Settings matrix
passed 295/295 non-PostgreSQL tests. Week 1/C3 clean-database tests passed 5/5.
The broader PostgreSQL matrix passed 29 current tests across B1, B2, B3A, B3B,
C2, C3, C4, C1, hidden Brand, and Week 1. All 90 migrations applied from an
empty PostgreSQL 17 database and `prisma migrate status` reported current. The
historical B4 1.0 executor test is deliberately non-executable after accepted
C4 activation; the active C4 successor passed and generated exactly three
Objects/35 owned paths/current components.

The backend checkpoint is
`4eb459d01d45e21f63fd7e85e0eb57784c0c1b83` / tree
`2c96a589a48a214c9c2980961dfe3a7a8885b926`, one descendant of the accepted
backend predecessor. It contains 29 changed files, 2,951 insertions and 92
deletions. The frontend remains byte-identical. Normal publication and
independent fetch-back equality are recorded in the immutable runner report.

No live Graph call, live model call, provider mutation, raw-media persistence,
new migration, frontend change, Creator implementation, Week 2 work,
development merge, or deployment occurred.

Correction 1 is published at backend
`112e9a9a567c5a258cd52d493d9758ef5270e6c2` / tree
`29ae2b8392325eb3f0626b93982c6a96142cd709`. Its focused changed-surface suite
passed 32/32, the expanded current non-PostgreSQL matrix passed 440/440, and the
clean PostgreSQL 17 predecessor matrix passed 29/29 after all 90 migrations.
Prisma generate/validate, production build, scoped ESLint, Prettier, and diff
checks passed. Correction 1 remains evidence-ready and is not self-accepted.
