# Creator Content V0 — developer handoff

## Published branches

- Backend: `program/creator-content-v0-backend`.
- Frontend: `program/creator-content-v0-frontend`.
- Authority: `program/creator-content-v0-authority`.

Use normal fetch and non-force integration only. The packet is not merged or deployed.

## Runtime topology

- `CreatorContentPipelineService` owns the Settings-fenced provider acquisition, deterministic 90-day/latest-24 selection, Evidence creation, execution, and replay boundary.
- `CREATOR_CONTENT_SEMANTIC_ANALYZER` now binds to production `CreatorContentMultimodalService` via `useExisting`, not the missing whole-semantic adapter. The real orchestrator reuses contained image/video acquisition, bounded decoder/frames, visual/OCR and bounded audio/speech primitives. Only underlying unconfigured low-level model ports fail closed. No live calls are needed for the boundary-fixture proof.
- `CreatorContentProcessorExecutor` and `CreatorContentPersistenceHook` enter the shared verified-bundle generation/transition/CAS-current runtime.
- `CreatorContentService` is the strict authenticated read projection. Callers never select a Creator, workspace, account, or authorization generation.
- The existing Instagram sync coordinator schedules Content immediately on connect/reconnect and daily thereafter through the existing hourly dispatcher.
- Creator Settings source deletion traverses Creator Audience and Creator Content owner-scoped lineage.

## Correction 1 production configuration and evidence

The backend correction is `0fa145ac6a021337929e87b9eb9e0c67ebc82b7e` / `750065a56a4a060c125a9bee7ddc9fb842204e7e`, descending from the original P4 checkpoint. The frontend is unchanged. See `P2_P4_CORRECTION_1_EVIDENCE.md` for commands, boundary fixtures, lineage and remaining test-routing disclosure. P2/P3/P4 are corrected evidence-ready, not self-accepted.

Configuration names only: `INSTAGRAM_IMAGE_VISUAL_ENABLED`, `INSTAGRAM_SELECTED_VIDEO_FRAMES_ENABLED`, `INSTAGRAM_SELECTED_VIDEO_SPEECH_ENABLED`. Switches default off; low-level unconfigured visual/OCR/frame/speech/grounded ports fail closed. No live credentials are required. This patch adds no dependency or migration.

Content calls the existing provider client with explicit `windowDays=90`; Brand two-argument callers retain `30`. Media work is serial, latest-24, carousel cap 10, accepted sampled frame/audio bounds. Carousel video children are cover-only, not full-video negatives. Semantic model input contains bounded caption plus admitted visual/OCR/frame/speech descriptors and exact support IDs, never metrics. Strict candidates are server-validated, bounded, normalized and rejected on foreign support.

Replay runs after current non-secret Creator Settings fence but before credential/provider acquisition. Identity binds owner/workspace/integration/account/generation/exact window and semantic/model/contract/profile/switch versions. Replay retrieves the original completed execution's Object value, preserving partial modality coverage and ordered Evidence refs. Source and MODEL_DERIVATION Evidence remain distinct; current uses the existing verified eight-component runtime.

Creator Settings target-only purge additionally removes supported Content Observation/support/relation rows and target `creator:` temporary-store scope; another owner and website/source survive. No Settings endpoint or lifecycle mutation ownership changes.

## Consumer topology (unchanged)

- Route: `/creator/insights/content`.
- API: `GET /api/v1/creator/insights/content`.
- Required action: `INSIGHTS_CONTENT_READ` for Owner, Manager and Assistant.
- Audience and Content share the in-workspace Creator Insights peer navigation. The outer Creator shell is unchanged.
- The frontend validates the complete V0 response, uses authenticated no-store reads, preserves last-good state, and renders only safe HTTPS representative links.

## Configuration names

No new production configuration name or dependency was added. Existing database, JWT, Settings field-encryption, application-origin, and provider/model adapter configuration remains authoritative. Never commit runtime environment files.

## Verification commands

Use the repository scripts for Prisma generate/validate, migration deploy/status, production builds and Vitest. P4-specific deterministic harnesses are:

- backend `scripts/p4-creator-content-browser-fixture.ts`;
- frontend `scripts/p3-creator-content-browser-proof.mjs`;
- frontend `scripts/p4-creator-content-integrated-browser-proof.mjs`.

All harnesses require explicit task-local guards/configuration and synthetic credentials. They must run only against a disposable local database and local application ports.

## Deferred boundaries

Content V1/longitudinal analysis, recommendations, Portfolio/Media Kit curation, semantic editing, manual refresh, cross-platform aggregation, causal claims, and canonical Collaboration promotion remain out of scope. Configuring a production multimodal adapter must reuse the accepted secure image/carousel/video/speech primitives and may not weaken temporary-media cleanup or provenance.
