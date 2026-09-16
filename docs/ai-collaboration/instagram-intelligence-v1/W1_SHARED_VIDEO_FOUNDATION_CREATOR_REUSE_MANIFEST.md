# Week 1 Shared Video Foundation — Creator Reuse Manifest

Status: `BRAND_W1_W2_ACCEPTED_W4_SPEECH_EVIDENCE_READY_CREATOR_IMPLEMENTATION_NOT_STARTED`

## Checkpoints

- Backend predecessor: `d5b9de557ed983a9c3af26b1edc305ba8b77d6f3` /
  `67d2642871899fda9e7bd9248b8d56892c3d6e6d`.
- Backend Week 1 result: `4eb459d01d45e21f63fd7e85e0eb57784c0c1b83` /
  `2c96a589a48a214c9c2980961dfe3a7a8885b926`.
- Backend Week 1 correction 1 result:
  `c634387e06cff5e20fd2588b3a9d1d1d6a78a21a` /
  `ef8e762e26892481da590f418df6ab4d5193b42a`.
- Backend Week 2 result: `36dbcb216ad3fa2e979c0d2778ae6675d6355cbd` /
  `b0ce0192ef259758792979b4e136f0867f87654e`.
- Backend Week 2 correction 1 / accepted predecessor:
  `d6b76c2272bf73756e8544526421cdee5fbcc08c` /
  `f6d022a924124c5c16b41f4e9cddf2ecd0793270`.
- Backend Week 4 evidence checkpoint:
  `41fbe7c888208829f10ae49703da690d02f10d0f` /
  `0ba5cc6880120bbb294048261ea81c1a7704738d`.

## Reusable provider-neutral foundation

The future Creator adapter may reuse only the domain-neutral files under
`src/features/instagram/media/video/`:

- `InstagramVideoLocatorClient` and its typed locator truth;
- `InstagramContainedVideoAcquisitionService`;
- `InstagramSecureVideoDownloader`;
- `InstagramVideoTemporaryStore`;
- `InstagramVideoDecoderPort` and `FfmpegInstagramVideoDecoder`;
- `selectInstagramVideoFrameTimestamps` and the video/frame/probe/error types.

Inputs are provider media identity, approved source locator, abort signal,
isolation scope, and the immutable technical profile. Outputs are typed truth,
sanitized technical metadata, verified video fingerprints, bounded frame
metadata, and typed error codes. They contain no Brand Object, Creator Object,
Campaign, Collaboration, Offering, workspace, consumer DTO, or frontend type.
The architecture test rejects imports from those layers.

Safety authority is `selected-reel-frames-v1`: 104857600 download bytes,
180 seconds, six frames, 1280-pixel long edge, 4194304 encoded frame bytes,
and no raw-video or raw-frame retention. Security includes HTTPS/host/DNS/private
IP/redirect checks, declared and streamed size bounds, dishonest-length checks,
MIME/signature validation, atomic isolation, bounded process output/time, argv
execution without a shell, and terminal cleanup.

Configuration names are:

- `INSTAGRAM_VIDEO_FFMPEG_PATH`;
- `INSTAGRAM_VIDEO_FFPROBE_PATH`;
- Brand-only rollout name `INSTAGRAM_SELECTED_VIDEO_FRAMES_ENABLED`.

No configuration value is recorded. The production prerequisite is the Debian
Bookworm `ffmpeg` package in the backend container, proven with FFmpeg/FFprobe
5.1.9 and the compiled application decoder. There is no npm dependency change.

## Evidence and cleanup semantics

The reusable layer never persists data. The consuming subject adapter owns
authorization fencing, source Capture/Evidence lineage, low-level model
selection, semantic integration, replay identity, and Settings/subject deletion.
For the Brand adapter, corrected exact replay retains a current non-secret
Settings authorization fence, uses a deterministic pre-acquisition manifest,
and recovers the original bounded coverage metadata and ordered Evidence refs.
The shared downloader validates only the 12-byte MP4 prefix and never buffers a
complete accepted video merely for signature validation.
Temporary video and frames are unique to one isolation scope and must be removed
after success, partial completion, failure, abort, timeout, or explicit subject
deletion. Consumer-visible data must never contain signed locators, raw bytes,
base64, temporary paths, provider bodies, or decoder logs.

## Brand-bound code Creator must not reuse

Creator must not import or call:

- `InstagramIntelligenceVideoAcquisitionService` in Brand Settings;
- `InstagramW1VideoPipelineService` or its Brand/C3 integration;
- Brand `Capture`/Evidence writer policy as a substitute for Creator authority;
- B3B selection, C2/C3/C4 Objects/current, C1 coordinator, Brand consumers,
  Brand Settings lifecycle, or Brand workspace contracts.

Those files bind Brand membership, Settings-owned Brand integration identity,
Brand Evidence/current, the 30-day/24-post Brand corpus, and Brand deletion.

## Future Creator integration seams

A separately authorized Creator packet must supply its own:

1. Creator provider-account lifecycle and authorization-generation fence;
2. subject-specific selected-media policy and rollout switch;
3. Creator Capture/Evidence ownership and exact replay identity;
4. Creator low-level frame-model adapter/profile;
5. Creator semantic/Object/consumer ownership; and
6. Creator delete-data and tenant-isolation proof.

It may compose the shared locator, acquisition, temporary store, decoder port,
technical constants, and error contracts without changing their safety meaning.
It must not treat Brand acceptance as Creator Product or schema authority.

Focused compatibility evidence is in the video architecture, locator,
foundation, Brand W1 pipeline, B3B, C3 sampled-frame, PostgreSQL lineage, and
Settings deletion tests. Creator implementation was not started.

## Week 2 domain-neutral visual-text addition

The new `src/features/instagram/media/instagram-visual-text.ts` contract is
safe for a separately authorized Creator adapter to reuse. It contains only the
provider-neutral visual-text model port, unavailable fail-closed adapter,
strict candidate validation, NFKC normalization, deterministic ordering and
deduplication. Its fixed limits are 20 spans, 160 characters per span and 1,600
characters total. Image text is untrusted source data and the model request
marks it data-only. There is no new configuration name or dependency.

The existing provider-neutral temporary image artifact/store and contained
image acquisition primitives may remain reusable only behind a Creator-owned
authorization and deletion adapter. The existing provider child bound remains
10. Week 2 Brand orchestration limits concurrency to three and maximum bounded
work to 24 selected posts times 10 children; those corpus decisions remain
Brand authority rather than reusable Creator Product policy.

Creator must not reuse `InstagramW2CarouselPipelineService`, the Brand Settings
authorization fence, B3B selection/integration, the Week 2 cue finalizer, Brand
Offering matching, C3/C4 admission/current, Capture/Evidence policy or Settings
deletion adapter. Those files bind Brand account/generation identity, the
30-day/24-post corpus, Campaign/Collaboration/Offering non-ownership and the
existing three-Object runtime.

Week 2 compatibility proof is in the visual-text contract tests, Week 2 unit
and PostgreSQL suites, B3B selected-carousel routing, C3 exact-child grounding,
C4 current regression and Settings deletion/isolation tests. A future Creator
packet must provide its own selection, authorization, source lineage, semantic
finalizer, replay identity, consumer contract and delete-data proof. Creator
implementation remains not started and not authorized by Week 2.

### Week 2 correction 1 compatibility clarification

The reusable visual-text contract at backend checkpoint
`d6b76c2272bf73756e8544526421cdee5fbcc08c` rechecks each normalized span after
NFKC/whitespace normalization and rejects any expansion beyond 160 characters;
it never truncates source text. A future Creator-owned adapter must settle
descriptive visual and OCR results independently, preserve a valid modality
when its peer fails, keep EXPLICIT_EMPTY distinct from UNKNOWN, and maintain
independent inspected/unavailable counts and completeness scopes. These are
reusable modality-truth requirements, not authority to reuse the Brand-bound
Week 2 pipeline, replay identity, Evidence writer, cue finalizer, C3/C4 logic,
Settings fence or deletion adapter. Creator implementation remains not started.

## Week 4 domain-neutral speech foundation

The future Creator adapter may reuse the domain-neutral
`InstagramAudioExtractorPort`, `FfmpegInstagramAudioExtractor`,
`InstagramSpeechTranscriptionPort`, strict transcript candidate/finalizer and
unavailable/provider adapter seams under `src/features/instagram/media/video/`.
The fixed profile is temporary WAV, signed 16-bit PCM, mono, 16 kHz, at most
6,291,456 bytes, with at most 120 normalized timestamped segments, 500
characters per segment and 20,000 characters total. FFmpeg uses argv execution
without a shell, bounded process output, timeout/abort propagation, regular
task-owned files and terminal cleanup. Transcript/audio content is untrusted
data only; raw audio, base64, locators, prompts and model reasoning are not
durable.

Reusable configuration names are `INSTAGRAM_VIDEO_FFMPEG_PATH`,
`GEMINI_API_KEY` and `INSTAGRAM_SPEECH_MODEL_ID`; no value is recorded. The
Brand-only rollout name `INSTAGRAM_SELECTED_VIDEO_SPEECH_ENABLED` is not a
Creator Product decision. The production Debian Bookworm container supplies
FFmpeg/FFprobe 5.1.9 and needs no new npm dependency.

Creator must not reuse `InstagramW4SpeechPipelineService`, Brand Settings
authorization, the 30-day/24-post selection, Brand replay identity, Offering
snapshot/matching, Capture/Evidence policy, C3/C4/current integration, Settings
deletion adapter or Brand operational policy. A later Creator-owned packet must
supply its own authorization-generation fence, selection/rollout, provider
configuration, source lineage, cue semantics, replay, retention/deletion,
tenant isolation and consumer authority. Week 4 did not start or modify Creator
implementation.
