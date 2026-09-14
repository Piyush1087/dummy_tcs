# Creator Content V0 — developer handoff

## Published branches

- Backend: `program/creator-content-v0-backend`.
- Frontend: `program/creator-content-v0-frontend`.
- Authority: `program/creator-content-v0-authority`.

Use normal fetch and non-force integration only. The packet is not merged or deployed.

## Runtime topology

- `CreatorContentPipelineService` owns the Settings-fenced provider acquisition, deterministic 90-day/latest-24 selection, Evidence creation, execution, and replay boundary.
- `CreatorContentSemanticAnalyzer` is the provider-neutral bounded semantic port. The production default deliberately returns `UNKNOWN`; a configured adapter must retain the frozen media security and Evidence rules.
- `CreatorContentProcessorExecutor` and `CreatorContentPersistenceHook` enter the shared verified-bundle generation/transition/CAS-current runtime.
- `CreatorContentService` is the strict authenticated read projection. Callers never select a Creator, workspace, account, or authorization generation.
- The existing Instagram sync coordinator schedules Content immediately on connect/reconnect and daily thereafter through the existing hourly dispatcher.
- Creator Settings source deletion traverses Creator Audience and Creator Content owner-scoped lineage.

## Consumer topology

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
