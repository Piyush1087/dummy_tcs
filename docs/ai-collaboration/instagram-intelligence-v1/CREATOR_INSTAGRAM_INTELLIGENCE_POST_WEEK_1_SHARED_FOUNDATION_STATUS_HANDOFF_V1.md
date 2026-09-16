# Creator Instagram Intelligence — Post-Week-1 Shared Foundation Status Handoff V1

`CREATOR_INSTAGRAM_INTELLIGENCE_POST_WEEK_1_SHARED_FOUNDATION_STATUS_HANDOFF_V1`

Date: `2026-09-14`

## 1. Purpose

This is a delta handoff from the Brand Instagram Intelligence Program to the
Creator Instagram Intelligence Systems Architect.

The previous Creator-facing handoff boundary was:

```text
W1_SHARED_VIDEO_FOUNDATION_CREATOR_REUSE_MANIFEST
```

Since that boundary, three accepted updates have changed the reusable donor
surface:

```text
UPDATE 1 = WEEK 1 REPLAY + BOUNDED-MEMORY CORRECTION
UPDATE 2 = WEEK 2 CAROUSEL + VISUAL-TEXT FOUNDATION
UPDATE 3 = WEEK 4 SPEECH FOUNDATION + PROVENANCE CORRECTION
```

This document informs Creator planning and future base adoption. It does not
authorize Creator implementation, change Creator Product decisions, or make
Brand-owned orchestration Creator authority.

## 2. Current accepted donor checkpoints

| Repository | Branch | Accepted SHA | Tree | Meaning |
| --- | --- | --- | --- | --- |
| Backend | `program/instagram-intelligence-v1-backend` | `fef32afb0fdef52f00c7c22b3d0a85967a68fded` | `7ef6bd705b55ef82836b3f57f06a2832a867e781` | Final Week 4 checkpoint after provenance correction 1 |
| Frontend | `program/instagram-intelligence-v1-frontend` | `5866d0ac82f742957f53a8db2144a9a166628b75` | `7c095290ffdef4c84f37382bc594bef536c92a49` | Unchanged by Weeks 1, 2 and 4 |
| Program authority | `program/instagram-intelligence-v1-authority` | `366b23dcf58ec1bd659588c1bc8d2bb275a72798` | `f13ae41ad69178e805beda04475eef4f66df769e` | Final Week 4 evidence/ledger checkpoint before this handoff document |

Backend migration count at the accepted donor is `91`.

The final backend SHA supersedes the earlier Creator manifest's intermediate
Week 1, Week 2 and pre-correction Week 4 SHAs as the adoption target. Those
intermediate SHAs remain useful as historical evidence, not as separate bases
that Creator must replay one by one.

## 3. Update 1 — Week 1 replay and bounded-memory hardening

Accepted historical checkpoint:

```text
BACKEND_SHA = c634387e06cff5e20fd2588b3a9d1d1d6a78a21a
BACKEND_TREE = ef8e762e26892481da590f418df6ab4d5193b42a
```

### What changed

- Added a current, non-secret authorization-only fence before replay or
  expensive media work.
- Added a deterministic pre-acquisition replay identity over subject,
  provider account, authorization generation, media identity, admitted source
  lineage, window and technical/model profiles.
- Exact completed replay now returns before locator lookup, download, probing,
  frame extraction or model work.
- Replay preserves the original bounded coverage and exact ordered Evidence
  references rather than reconstructing an optimistic result.
- MP4 signature validation reads only the required 12-byte prefix instead of
  buffering the complete accepted video.
- The existing 100 MiB download, 180-second duration, six-frame, process-output,
  timeout, abort and cleanup controls remain intact.

### Creator implication

Creator should reuse the domain-neutral locator, acquisition, downloader,
temporary-store, decoder, timestamp selection and error contracts. Its own
adapter must implement the same safe lifecycle shape:

```text
CURRENT CREATOR AUTHORIZATION FENCE
→ EXACT REPLAY LOOKUP
→ EXPENSIVE MEDIA WORK ONLY IF REQUIRED
→ CREATOR-OWNED PERSISTENCE / SEMANTICS
→ TERMINAL TEMPORARY-MEDIA CLEANUP
```

Creator must not import the Brand Settings authorization service or Brand Week
1 pipeline merely to obtain this behavior.

## 4. Update 2 — Week 2 carousel and visual-text foundation

Accepted final checkpoint after modality-partial correction 1:

```text
BACKEND_SHA = d6b76c2272bf73756e8544526421cdee5fbcc08c
BACKEND_TREE = f6d022a924124c5c16b41f4e9cddf2ecd0793270
```

### What changed

- Added bounded selected-carousel analysis with an exact ordered child
  manifest.
- Preserved provider child limit `10`; Brand orchestration uses concurrency
  `3` and the existing maximum deep corpus of `24` posts.
- IMAGE children receive still inspection. REEL/VIDEO children remain
  cover-only and cannot establish temporal negatives.
- Unsupported, failed and unavailable children remain `UNKNOWN`; unselected
  carousels remain `NOT_INSPECTED / UNKNOWN`.
- Added the domain-neutral strict visual-text contract in
  `src/features/instagram/media/instagram-visual-text.ts`:
  - maximum 20 spans;
  - maximum 160 normalized characters per span;
  - maximum 1,600 normalized characters total;
  - NFKC and whitespace normalization;
  - deterministic ordering/deduplication;
  - untrusted image text treated as data only;
  - fail-closed validation.
- Correction 1 made visual description and OCR settle independently. One valid
  modality survives failure of its peer; OCR failure is not
  `EXPLICIT_EMPTY`, and visual failure is not a visual negative.
- Complete negative claims require every rule-required modality and coverage
  scope to be complete.

### Creator-reusable surface

- The provider-neutral visual-text port, unavailable adapter, candidate schema,
  normalization, limits and deterministic validation.
- Existing provider-neutral temporary-image and contained-image acquisition
  primitives, but only behind Creator-owned authorization and deletion.
- The independent-modality truth rule: preserve valid evidence while keeping
  failed/uninspected modalities `UNKNOWN`.

### Brand-only surface Creator must not adopt

- `InstagramW2CarouselPipelineService`.
- Brand's 30-day/24-post selection policy.
- Brand Settings fencing and Brand replay identity.
- Brand Offering matching, disclosure cue finalization, C3/C4 admission,
  current projection or Settings deletion adapter.

Creator must define its own carousel selection, semantic use of OCR, Evidence
ownership, consumer contract and deletion behavior.

## 5. Update 3 — Week 4 speech foundation and corrected provenance

Accepted final checkpoint after provenance-lineage correction 1:

```text
BACKEND_SHA = fef32afb0fdef52f00c7c22b3d0a85967a68fded
BACKEND_TREE = 7ef6bd705b55ef82836b3f57f06a2832a867e781
```

### What changed

- Only deep-selected `REEL`, `REELS` and `VIDEO` media enter the Brand Week 4
  speech path.
- Added reusable domain-neutral audio extraction under
  `src/features/instagram/media/video/`:
  - temporary WAV;
  - signed 16-bit PCM;
  - mono;
  - 16 kHz;
  - maximum 6,291,456 bytes;
  - FFmpeg argv execution without a shell;
  - bounded output, timeout/abort and terminal cleanup.
- Added a provider-neutral speech-transcription port, strict candidate schema
  and finalizer:
  - `OBSERVED` for validated non-empty timestamped speech;
  - `EXPLICIT_EMPTY` only after successful extraction/transcription establishes
    no intelligible speech;
  - `UNKNOWN` for inability to establish transcript truth;
  - maximum 120 segments;
  - maximum 500 normalized characters per segment;
  - maximum 20,000 normalized characters total;
  - source-language preservation;
  - no translation, speaker identity or demographic inference.
- Added a fail-closed Gemini adapter using configuration names only:
  `GEMINI_API_KEY` and `INSTAGRAM_SPEECH_MODEL_ID`.
- Added only atomic Brand-side spoken observations: first segment intersecting
  0–3 seconds as a hook, exact bounded CTA phrases and one exact unique active
  same-Brand Offering phrase. No performance, causal, compliance or
  Collaboration inference was added.
- Added capability `instagram.media_audio_observations`; migration count moved
  from 90 to 91 without a new table, column, index, Resource type or source
  class.

### Correction 1 — canonical provenance

The original Week 4 run incorrectly labeled locally extracted audio technical
Evidence as provider-mediated and did not prove a real source parent. The
accepted correction establishes:

```text
EXACT ADMITTED SOURCE-MEDIA EVIDENCE
→ AUDIO TECHNICAL EVIDENCE / DETERMINISTIC_DERIVATION
→ TRANSCRIPT EVIDENCE / MODEL_DERIVATION
→ SAME-CAPABILITY TRANSCRIPT OBSERVATION SUPPORT
```

External source parents are transactionally checked for exact Brand, Instagram
media Resource, provider account, authorization generation, provider
integration and completed source Capture. Nonexistent, cross-Brand,
wrong-account, stale-generation, wrong-media, wrong-Capture and circular
parents fail atomically.

### Creator-reusable surface

- `InstagramAudioExtractorPort` and `FfmpegInstagramAudioExtractor`.
- `InstagramSpeechTranscriptionPort`.
- Strict transcript candidate/finalizer, bounds, normalization and unavailable
  adapter seams.
- The source → deterministic audio → model transcript provenance shape.
- Existing temporary-media security and cleanup controls.

### Brand-only surface Creator must not adopt

- `InstagramW4SpeechPipelineService`.
- Brand Settings authorization and Brand rollout flag
  `INSTAGRAM_SELECTED_VIDEO_SPEECH_ENABLED`.
- Brand 30-day/24-post selection, Offering snapshot/matching, replay identity,
  Capture/Evidence policy, C3/C4/current integration and Settings deletion
  adapter.

Creator must choose and freeze its own speech selection, rollout, atomic cue
semantics, consumer use, retention/deletion and failure-current behavior.

## 6. Consolidated reusable donor map

| Concern | Reuse status | Creator responsibility |
| --- | --- | --- |
| Secure video locator/download | Reuse domain-neutral foundation | Creator authorization and provider-account lifecycle |
| Temporary video/frame/audio store | Reuse safety and cleanup contracts | Creator isolation scope and delete-data trigger |
| FFprobe/FFmpeg video decoding | Reuse | Creator selected-media policy |
| Deterministic frame timestamps | Reuse technical algorithm if compatible | Creator Product coverage policy |
| Visual model / visual-text ports | Reuse provider-neutral ports and strict validators | Creator model profile and semantic finalizer |
| Carousel child transport/inspection primitives | Reuse low-level components | Creator child-selection and coverage semantics |
| Audio extraction | Reuse | Creator execution adapter and rollout |
| Timestamped transcription | Reuse provider-neutral port/finalizer | Creator provider configuration and semantic use |
| Replay lifecycle pattern | Reuse lifecycle semantics | Creator-owned identity and authorization fence |
| Evidence provenance classes | Reuse shared invariant | Creator-owned Capture/Evidence admission and exact parents |
| Brand B3B/C2/C3/C4/C1 runtime | Do not reuse as Creator authority | Creator Objects/processors/current/consumer |
| Brand Settings lifecycle | Do not reuse | Creator integration lifecycle and deletion |
| Brand workspace/frontend | N/A; unchanged by these updates | Creator Centre UX authority |

## 7. Creator SA adoption rule

Creator implementation has not started. Therefore these updates create no
active Creator merge conflict or rework burden.

When Creator implementation is authorized, the Creator SA should begin with a
bounded base-uplift/reuse preflight:

1. Revalidate the three repository checkpoints in Section 2 against current
   remote state.
2. Treat backend `fef32afb...` as the complete donor, not the earlier Week 1
   SHA from the original handoff.
3. Prove the intended Creator implementation base contains or deliberately
   imports the accepted shared low-level files without copying Brand-bound
   services.
4. Start any Creator schema migration after the accepted 91-migration chain;
   do not recreate `instagram.media_audio_observations` or shared provenance.
5. Freeze Creator-owned account lifecycle, authorization-generation fence,
   corpus/selection, Objects, replay identity, semantics, consumer and
   delete-data policy before implementation.
6. Add architecture tests that prevent shared low-level media code from
   importing Brand or Creator domain modules.
7. Prove Brand and Creator adapters can compose the shared foundation without
   one subject's deletion, authorization or Evidence rows affecting the other.

Do not modify accepted Brand program branches as part of Creator adoption. The
Creator packet should create its own accepted predecessor chain and report any
conflict before mutation.

## 8. Status and boundaries

```text
BRAND_WEEK_1 = ACCEPTED
BRAND_WEEK_2 = ACCEPTED
BRAND_WEEK_4 = ACCEPTED

CREATOR_IMPLEMENTATION = NOT_STARTED
CREATOR_PRODUCT_FREEZE = SEPARATE_PARENT_LED_PROCESS
CREATOR_BASE_UPLIFT = NOT_YET_EXECUTED

WEEK_3_CREATOR_ADOPTION_PACKET = DEFERRED
BRAND_CENTRE_EDIT = PAUSED_NOT_AUTHORIZED

LIVE_GRAPH_VALIDATION_FOR_THESE_UPDATES = NOT_RUN / NON_BLOCKING
LIVE_MODEL_VALIDATION_FOR_THESE_UPDATES = NOT_RUN / NON_BLOCKING
RAW_VIDEO_OR_AUDIO_DURABLY_PERSISTED = NO

THIS_HANDOFF = STATUS_AND_REUSE_AUTHORITY_ONLY
CREATOR_IMPLEMENTATION_AUTHORIZATION = NO
```

## 9. Sources the Creator SA must read before implementation planning

```text
docs/ai-collaboration/instagram-intelligence-v1/
  INSTAGRAM_INTELLIGENCE_INCREMENTAL_REEL_CAPABILITY_RELEASE_CHARTER_V1.md
  W1_SHARED_VIDEO_FOUNDATION_CREATOR_REUSE_MANIFEST.md
  W1_CORRECTION_1_REPLAY_AND_BOUNDED_MEMORY.md
  W2_CAROUSEL_AND_VISUAL_TEXT.md
  W4_SPEECH_FOUNDATION.md
  EXECUTION_LEDGER.md
```

The Creator SA should use the final accepted SHAs in this handoff to resolve
status language inside runner-authored artifacts that still correctly say they
did not self-accept their own packet.

## 10. Next boundary

```text
NEXT_CREATOR_BOUNDARY =
PARENT COMPLETES CREATOR PRODUCT FREEZE
→ CREATOR SA RECONCILES THIS DELTA HANDOFF
→ BOUNDED BASE-UPLIFT / REUSE PREFLIGHT

NO CREATOR SOURCE MUTATION IS AUTHORIZED BY THIS DOCUMENT
```
