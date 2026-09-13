# Instagram Intelligence — Week 4 Speech Foundation

Status: `READY_FOR_CHILD_SA_PROGRAM_ORCHESTRATOR_REVIEW`

The Parent-transmitted Program-Orchestrator authority accepts Week 2 after its
single correction, defers Week 3 without starting Creator implementation, and
authorizes Week 4 only. This artifact records evidence readiness and does not
self-accept Week 4. Week 5 remains prohibited.

## Exact checkpoints

| Repository | Starting SHA / tree | Result SHA / tree | Result |
| --- | --- | --- | --- |
| backend | `d6b76c2272bf73756e8544526421cdee5fbcc08c` / `f6d022a924124c5c16b41f4e9cddf2ecd0793270` | `41fbe7c888208829f10ae49703da690d02f10d0f` / `0ba5cc6880120bbb294048261ea81c1a7704738d` | clean normal push and independent fetch-back equality |
| frontend | `5866d0ac82f742957f53a8db2144a9a166628b75` / `7c095290ffdef4c84f37382bc594bef536c92a49` | unchanged | clean local/fetched equality |
| authority | `96bf2b910a9da0f62e9d9004c4a37a5afc05cf5c` / `4ff24240fbf8e2e75e63a758f15debc137265518` | containing commit reported by runner | clean normal publication required |

Applicable repository standards, the incremental charter, Week 1/2 evidence,
Creator reuse manifest, single ledger, accepted B1/B2/B3A/B3B/C2/C3/C4/C1
contracts, Settings lifecycle, secure video foundation, C3-R0 provenance and
existing current/deletion behavior were reconciled before mutation.

## Implemented boundary

Only deep-selected `REEL`, `REELS` and `VIDEO` media route to the Week 4 speech
pipeline. Image, carousel, unselected-media, frontend, public API and workspace
behavior are unchanged. The reusable layer extracts task-owned temporary WAV
with FFmpeg argv execution: signed 16-bit PCM, mono, 16 kHz and at most
6,291,456 bytes after the accepted 100 MiB/180-second video controls. It checks
regular-file ownership, RIFF/WAVE identity, bounded process output,
timeout/abort and terminal cleanup. No raw audio/video/frame is retained.

The provider-neutral transcript port accepts strict untrusted candidates and
finalizes `OBSERVED`, `EXPLICIT_EMPTY` or fail-closed `UNKNOWN`. It preserves
source language without translation or speaker/demographic inference, requires
monotonic non-overlapping timestamps, NFKC normalization and exact bounds of
120 segments, 500 characters per segment and 20,000 total. Audio/transcript is
data only and cannot direct tools, provider calls, files, SQL or prompts.

Server finalization derives only the first segment intersecting 0–3000 ms as a
hook, exact-boundary phrases from the small CTA vocabulary, and one exact unique
active same-Brand Offering occurrence. It does not infer performance,
effectiveness, causality, compliance, speaker identity or Collaboration truth.

## Persistence, replay and observability

Migration `20260914010000_instagram_w4_audio_observations` adds only
`instagram.media_audio_observations` to the seven existing exact capability
checks. It adds no table, column, index, enum or new Resource/source class.
Audio technical Evidence is `PROVIDER_MEDIATED_FETCH`; transcript Evidence is
same-capability `MODEL_DERIVATION` with its exact parent Evidence and Capture.
Completed Capture `capturedAt` precedes Evidence. Bounded payloads contain only
technical hashes/metadata, validated transcript/cues, profile/model identity
and source lineage—never bytes, base64, locators, provider bodies, secrets,
prompts, reasoning or temporary paths.

The current non-secret Settings fence precedes replay. Identity binds Brand,
integration/account/generation, provider media, source Capture/Evidence,
window/cutoff, speech/audio/transcript/prompt/model/finalizer profiles and the
active Offering snapshot; actual execution also retains the verified video
fingerprint. Exact replay preserves ordered Evidence refs and segment truth
without locator, download, probe, audio extraction, model or persistence work.
Changed input cannot collide and zero-Evidence failure cannot replay.

Operational logs expose only allowlisted categories: extraction/no-track or
failure, bounded audio-size class, transcript state, counts, provider/model
identity, timeout/abort, cue counts, replay, cleanup and current preservation.
They exclude media content and credentials.

## Verification

- Immutable `npm ci`, Prisma generate/validate, scoped ESLint/Prettier,
  `git diff --check` and production build passed. Manifest/lockfile and
  Dockerfile are unchanged; npm reported the pre-existing audit advisory set.
- Focused Week 4 and predecessor unit/regression matrix passed 156/156. The
  final Week 4 contract/replay matrix passed 11/11.
- Disposable PostgreSQL 17 clean route applied all 91 migrations and reported
  current. Week 4 persisted exactly Resource 1, Capture 1, artifact 1, Evidence
  2, Observation 1 and support 1; exact replay changed no row/ref and repeated
  no expensive call. Changed-input transcription failure preserved all prior
  rows. Cross-Brand data survived target purge; target rows and temporary audio
  were removed.
- The affected PostgreSQL W1/W2/C3-R0/C3/C4/C1 predecessor matrix passed 18/18.
  A separate 90-to-91 upgrade preserved one website and one existing Instagram
  Resource and ended current at 91.
- A production image built from the unchanged Dockerfile. Its system FFmpeg
  5.1.9 produced a 64,722-byte two-second synthetic WAV with `pcm_s16le`,
  16,000 Hz and one channel, then both synthetic video/audio files were removed.
- Secret, raw-media, locator and temporary-artifact scans passed. Optional live
  transcription was not run because both required local configuration names
  were absent. Live Graph/model calls and provider mutations were none.

Week 4 used one primary run and zero formal correction cycles. No Week 3 or
Creator implementation, Week 5 work, frontend/public API change, provider
permission, development merge, production migration or deployment occurred.
