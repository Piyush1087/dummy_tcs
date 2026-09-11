# Instagram Intelligence B3B — Thinner V1 Media Completion

**Execution status:** `EVIDENCE_READY_FOR_CHILD_SA_REVIEW`  
**Program acceptance:** not self-declared  
**Primary runs:** 1  
**Correction cycles:** 0

## Exact starting authority

Normal fetch/prune and clean-worktree checks passed before mutation.

| Repository | Starting SHA | Starting tree |
|---|---|---|
| backend | `4ebe7d95f33f14d3e650bcfa54a117bfd56373e1` | `97791d71bbced9b7eedd44f9af80df4e31353738` |
| frontend | `bc8523183ae4892c0b538474d2f5444a1ea356d8` | `7f3016c01500083ae2f536ebd0540219c9228dd7` |
| authority | `8265b094be937c8909e3aeb350253a96ad35ebe5` | `dc36ad76ba5f21d9eaafee3b523e20c4f26ab69d` |
| B4 contract source | `c98b4edfa64b6711d290947ea61236573e029dd2` | `15be1c29422b0079acce3c9220e0413eab750df8` |

Local and fetched remote identities were equal, all three worktrees were clean,
accepted predecessor ancestry was intact, and the B4 source commit was an
ancestor of the starting authority commit.

## Implemented bounded lane

- The existing B2 30-day inclusive inventory and 500-item safety cap feed a
  B3B all-eligible light-Evidence lane. Each eligible post records bounded
  format/timestamp/permalink availability, caption state/content/hash, metric
  state/value, inventory/caption/metric/visual coverage, and selection metadata.
- Missing-timestamp rows remain in account-level limitation coverage and are
  excluded from the eligible corpus. Partial inventory and metric results retain
  successful peers. The bounded B2 correction now maps an absent caption to
  `UNAVAILABLE/FIELD_ABSENT`; provider-confirmed empty remains
  `EXPLICIT_EMPTY`.
- Selector contract `instagram-b3b-thinner-v1` is pure and input-order
  independent. Counts 0–24 select all; larger sets select exactly 24. It first
  preserves normalized format coverage, then four occupied publication-time
  buckets, then fills by recency and stable provider-media identity. Output
  carries rank, reasons, eligible count, and selected count.
- Unselected media records `NOT_INSPECTED`, `UNKNOWN`, and
  `MEDIA_NOT_SELECTED_FOR_DEEP_ANALYSIS`, and bypasses locator acquisition and
  the visual-model port.
- Selected IMAGE uses the accepted B3A lifecycle unchanged. A selected carousel
  persists bounded ordered B2 child truth under the parent and selects at most
  one IMAGE child using `first-supported-still-by-ordinal-v1`; its observation
  remains attached to the parent Resource. Selected REEL/REELS/VIDEO requests
  only `thumbnail_url`, uses the safe still downloader, records `COVER_ONLY`,
  and retains `VIDEO_NOT_ANALYZED`, `AUDIO_NOT_ANALYZED`, and
  `TRANSCRIPT_NOT_ACQUIRED`.
- Missing/partial carousel representatives and unavailable covers remain
  `UNKNOWN` without erasing light Evidence. No child Resource, video download,
  frame extraction, audio, transcription, or higher-order semantic inference is
  created.

## Mandatory streamed locator bound

`MAX_LOCATOR_RESPONSE_BYTES = 65,536` is enforced before JSON parsing and while
streaming every response. Declared oversize is rejected before reading; exact
limit succeeds; absent/chunked/dishonest lengths and later-chunk overflow are
bounded; abort/overflow cancels and releases the reader; only a complete bounded
UTF-8 object is parsed. Errors expose only the existing safe typed classification.

Deterministic coverage passed for exact-limit, declared oversize, chunked and
absent-length oversize, dishonest length, later-chunk overflow, malformed and
non-object JSON, abort, reader cancellation, and non-disclosure. The same client
is used for IMAGE, representative carousel child, and video cover lookup.

## Validation evidence

Environment: Windows 11 64-bit, x86_64, Node `v24.19.0`, npm `11.17.0`, Git
`2.55.0.windows.3`, Docker Engine `29.7.2`, PostgreSQL `17.11`.

- `npm ci`: PASS, 813 packages installed from the immutable lockfile. Package
  manifest and lockfile blobs remained unchanged. The pre-existing audit output
  reported 52 dependency advisories; B3B added no dependency.
- Prisma generate/validate: PASS.
- Disposable PostgreSQL 17 tmpfs instance: PASS. All 88 migrations applied from
  zero; `prisma migrate status` reported current. Migration 88 remained
  byte-identical at SHA-256
  `d02b75e50f883150c9d14908c82ef10d9b0de4c2b464168567634dd0157009e4`.
- Focused provider/media/Intelligence matrix: 16 files / 164 tests PASS,
  including all B1/B2/B3A/B4 focused regressions. Final B3B/B4 PostgreSQL replay
  matrix: 3 files / 4 tests PASS. Additional B3B unavailable-carousel and
  unavailable-cover cases passed.
- Real PostgreSQL B3B mixed-media fixture: 5 Resources, 9 Captures, 13 bounded
  artifacts, and 9 Evidence items for account inventory plus four parent media;
  replay preserved exact row counts. No carousel-child Resource existed. Both
  carousel and cover observations remained on their parent media Resources.
- B1 final writer, B2 Settings read fence, B3A cleanup/deletion, account and
  authorization-generation fences, second-Brand isolation, failure-without-
  Evidence, and B4 success/replay/failure-current preservation: PASS.
- Production build, scoped ESLint, `git diff --check`, provider-neutral
  preflight, and exact frozen-bundle verify-only from pinned architecture commit
  `bbb0be3345c36e9cc7c4f06ca68fb491b742b83f`: PASS.
- Staged secret/forbidden-artifact scan: 12 files, zero findings. No `.env`,
  credential, token, signed locator, raw media, temporary image, database volume,
  browser state, build output, or runtime log was tracked.

## Publication

Backend commit `60a0ab2b8fb142115eccf93c3c82e72d473ca94b`, tree
`686e665bc350e17fad5a81f8c52b77825e067cc2`, was normally pushed to
`program/instagram-intelligence-v1-backend`; independent fetch-back produced
equal local/remote SHA and tree, with the accepted B4 backend checkpoint as an
ancestor. The frontend remains clean and unchanged at
`bc8523183ae4892c0b538474d2f5444a1ea356d8` / `7f3016c01500083ae2f536ebd0540219c9228dd7`.

The authority commit containing this artifact and the ledger cannot encode its
own SHA. Its exact local/fetched SHA and tree are reported by the runner after
normal publication.

## Scope statement

No schema or migration, dependency, frontend file, B4 contract-source/generated
bundle, provider permission, Product/UX behavior, C2+ semantic foundation, live
Graph call, live model call, provider mutation, raw-media persistence, or second
DE/Evidence lifecycle was introduced. C2 remains prohibited pending external
B3B review. V1.1 continues to defer multi-frame/video/audio/transcript analysis,
full carousel sweeps, and higher-order media semantics.

