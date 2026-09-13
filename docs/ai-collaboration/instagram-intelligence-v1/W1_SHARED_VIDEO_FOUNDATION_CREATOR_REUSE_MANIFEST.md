# Week 1 Shared Video Foundation — Creator Reuse Manifest

Status: `BRAND_W1_EVIDENCE_READY_CREATOR_IMPLEMENTATION_NOT_AUTHORIZED`

## Checkpoints

- Backend predecessor: `d5b9de557ed983a9c3af26b1edc305ba8b77d6f3` /
  `67d2642871899fda9e7bd9248b8d56892c3d6e6d`.
- Backend Week 1 result: `4eb459d01d45e21f63fd7e85e0eb57784c0c1b83` /
  `2c96a589a48a214c9c2980961dfe3a7a8885b926`.

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
