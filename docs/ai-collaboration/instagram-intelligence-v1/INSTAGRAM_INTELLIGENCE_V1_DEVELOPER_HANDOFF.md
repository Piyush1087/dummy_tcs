# Instagram Intelligence V1 — Developer Handoff

This is the concise operational handoff for the accepted V1 implementation.
For acceptance detail, use
[F3_FINAL_EVIDENCE_AND_DEVELOPER_HANDOFF.md](./F3_FINAL_EVIDENCE_AND_DEVELOPER_HANDOFF.md)
and [F1_F2_COMBINED_INTEGRATED_ACCEPTANCE.md](./F1_F2_COMBINED_INTEGRATED_ACCEPTANCE.md).

## What was built

- Settings-owned Instagram connection projection and lifecycle controls.
- Provider-neutral Graph adapter with AVAILABLE/PARTIAL/UNAVAILABLE truth,
  pagination, bounded acquisition and authorization-generation fencing.
- Instagram DE Resources, Captures, Artifacts and Evidence with exact lineage.
- Fixed 30-day eligible-media corpus and a deterministic deep corpus of at most
  24 posts.
- Selected image inspection, deterministic representative carousel-child
  inspection, and Reel/video cover-or-thumbnail inspection.
- C2 deterministic foundations; C3 per-media observations and `likely_collab`;
  C4 three Objects in shared generation/current; C1 automated/manual refresh.
- Mandatory source-native hidden Instagram-to-Brand generation lane.
- Six-workspace Brand Centre peer navigation, one Instagram workspace and a
  route-owned media-detail drawer/mobile sheet.

## Backend runtime and source map

Primary ownership paths in `creator-commerce-backend-v2-clone`:

- Settings projection/lifecycle: `src/features/brand-settings/brand-settings.controller.ts`,
  `services/brand-settings-integrations.service.ts`,
  `services/instagram-intelligence-provider-read.service.ts`,
  `services/instagram-intelligence-image-acquisition.service.ts`,
  `services/brand-instagram-deletion.service.ts`, and
  `schedulers/brand-instagram-deletion.scheduler.ts`.
- Provider boundary and media safety: `src/features/instagram/instagram-intelligence-provider.client.ts`,
  `instagram-graph.client.ts`, `instagram-provider.config.ts`, and
  `media/instagram-secure-image-downloader.ts`,
  `media/instagram-image-temporary-store.ts`.
- DE/Capture/Evidence: `src/features/data-extraction/evidence/instagram/instagram-capture-writer.service.ts`
  and `instagram-derived-data-purge.service.ts`.
- Corpus/media: `src/features/instagram-intelligence/media/instagram-b3a-image-pipeline.service.ts`,
  `instagram-b3b-selector.ts`, and `instagram-b3b-media-completion.service.ts`.
- Deterministic and semantic layers: `foundations/instagram-c2-foundations.service.ts`
  and `semantics/instagram-c3-semantics.service.ts`.
- Three-Object runtime: `runtime/instagram-c4.runtime.service.ts`,
  `instagram-c4.processor.ts`, `instagram-c4.persistence.ts`, and
  `instagram-c4.contract.ts`.
- Consumer/API: `consumer/instagram-b4-consumer.controller.ts`,
  `instagram-b4-consumer.service.ts`, and `instagram-b4-consumer.schema.ts`.
- Refresh coordination: `sync/instagram-sync.controller.ts`,
  `instagram-sync-coordinator.repository.ts`,
  `instagram-sync-dispatcher.service.ts`, and
  `instagram-sync-pipeline.adapter.ts`.
- Hidden Brand lane: `hidden-brand/instagram-hidden-brand.runtime.ts`,
  `instagram-brand-source-admission.service.ts`,
  `instagram-hidden-brand.persistence.ts`, and
  `instagram-hidden-brand.reader.ts`.
- Runtime registry/bundles: `src/features/instagram-intelligence/contracts/`
  and `src/features/brand-intelligence/generated/contract-bundles/instagram_*`.

Verified public routes:

```text
GET  /api/v1/brand-centre/instagram
GET  /api/v1/brand-centre/instagram/media/:mediaId
POST /api/v1/brand-centre/instagram/refresh
GET  /api/v1/brand/settings/integrations
GET  /api/v1/brand/settings/integrations/instagram/oauth-url
POST /api/v1/brand/settings/integrations/instagram/connect
POST /api/v1/brand/settings/integrations/resolve-identity-conflict
POST /api/v1/brand/settings/integrations/manage
```

The hourly dispatcher is `InstagramSyncDispatcherService`. Settings deletion
resumption runs every minute. Account-token expiry evaluation runs daily.

Key backend tests are colocated as `*.test.ts` and `*.postgres.test.ts` under
the paths above, especially `instagram-intelligence-provider.client.test.ts`,
`instagram-secure-image-downloader.test.ts`,
`instagram-capture-writer.postgres.test.ts`,
`instagram-c3-semantics.postgres.test.ts`, `instagram-c4.postgres.test.ts`,
`instagram-sync-coordinator.postgres.test.ts`, and
`instagram-hidden-brand.postgres.test.ts`.

## Frontend runtime and source map

Primary paths in `creator-commerce-frontend-v2-clone`:

- Route composition: `src/routes/app-routes.tsx` and
  `src/pages/brand/brand-centre/brand-centre-instagram-page.tsx`.
- Peer navigation: `src/features/brand-centre/navigation/brand-centre-workspaces.ts`.
- Strict API/schema boundary: `src/features/instagram-intelligence/api/instagram-b4-client.ts`
  and `contracts/instagram-b4.schemas.ts`.
- Workspace/read state: `components/instagram-workspace.tsx`,
  `components/instagram-b4-view.tsx`, and `hooks/use-instagram-b4.ts`.
- Media detail: `components/instagram-media-detail.tsx`,
  `components/instagram-media-detail-safety.ts`, and
  `hooks/use-instagram-media-detail.ts`.
- Settings lifecycle UI: `src/features/settings/components/brand/brand-integrations-settings.tsx`,
  `api/instagram-integrations-client.ts`, and
  `contracts/instagram-integrations.contracts.ts`.
- Authenticated browser proofs: `scripts/e2e3-instagram-workspace-proof.mjs`
  and `scripts/e4-instagram-media-detail-proof.mjs`.

The canonical frontend routes are `/brand-centre/instagram` and
`/brand-centre/instagram/media/:mediaId`; Settings integration controls are at
`/brand/settings/integrations`.

## Runtime behavior and ownership

- V1 window: fixed 30 days.
- Initial connection processing: immediate.
- Profile/media/performance: daily.
- Audience: weekly.
- Dispatcher: hourly with due gates and deterministic jitter.
- Manual-refresh cooldown: 15 minutes.
- Brand Owner: read and refresh.
- Campaign Manager: read and refresh.
- Finance Admin: read-only; refresh denied.

Valid current remains visible while refresh is running and after an independent
failure. Freshness, capability and processing degradation are projected
separately. Missing/unavailable metrics remain unknown and are never rendered as
zero.

Settings exclusively owns connect, reconnect, account-conflict resolution,
disconnect and delete-data. Instagram owns source-native observations and its
three Objects. Hidden Instagram-derived Brand generations do not directly
mutate canonical/manual Brand truth. Exact active same-Brand Offering links are
grounded references and do not mutate Offering identity, facts, price or
currency. `likely_collab` is an inference, never canonical Collaboration truth.
Instagram owns neither canonical Creator identity nor Campaign configuration or
future Campaign Performance evaluation.

Campaign objectives are `AWARENESS / TRUST / ASSETS / ACTION`; the former
`PULSE / PROOF / PRODUCTION / PUSH` vocabulary is legacy only.

## Data, security and deletion

Every read/write is fenced by server-resolved tenant/Brand, provider account and
authorization generation. Persistence ordering is Capture start, bounded
material, completed authoritative `capturedAt`, then Evidence. Derived Evidence
uses explicit `MODEL_DERIVATION` provenance and ordered parent Evidence refs.

Remote media acquisition applies scheme, DNS/IP, redirect and hostname checks,
a streamed 65,536-byte locator-response limit, bounded temporary storage and
cleanup. Raw media is not durably persisted. Credentials remain Settings-owned,
encrypted/contained and absent from consumer DTOs and logs.

Settings delete-data fences the integration, removes the target Brand's
Instagram-owned Resources, Captures, Artifacts, Evidence, observations,
executions, generations and current pointers, and preserves other tenants plus
unrelated website/shared and canonical business data.

Existing runtime environment-variable names needed by this path are:

```text
DATABASE_URL
PORT
STAGE
APP_FRONTEND_URL
PUBLIC_API_BASE_URL
INSTAGRAM_API_ID
INSTAGRAM_APP_SECRET
INSTAGRAM_GRAPH_VERSION
SETTINGS_FIELD_ENCRYPTION_KEY
JWT_SECRET
JWT_SECRET_DEV
JWT_SECRET_PROD
JWT_ISSUER
JWT_AUDIENCE
VITE_API_URL
VITE_STAGE
```

`INSTAGRAM_GRAPH_VERSION` is read from committed provider configuration even
though it is not currently listed in the backend example file. Use local ignored
`.env` files; never commit values.

Focused PostgreSQL/browser harnesses additionally recognize:

```text
B1_INSTAGRAM_DATABASE_URL
B2_INSTAGRAM_DATABASE_URL
C2_DATABASE_URL
C3_DATABASE_URL
B3A_DATABASE_URL
B3B_DATABASE_URL
B4_DATABASE_URL
C4_DATABASE_URL
C1_DATABASE_URL
D_COMBINED_DATABASE_URL
BS06_DATABASE_TEST
BS06_LEGACY_DATABASE_TEST
BS06_MIGRATION_DATABASE_TEST
C4_BROWSER_FIXTURE_PATH
A3_BROWSER_FIXTURE_RUN
A3_BROWSER_PASSWORD
B4_BROWSER_FIXTURE_RUN
B4_BROWSER_PASSWORD
E2E3_FRONTEND_URL
E2E3_BACKEND_URL
E2E3_C4_FIXTURE_PATH
E2E3_CHROME_PATH
E4_FRONTEND_URL
E4_BACKEND_URL
E4_C4_FIXTURE_PATH
E4_ROLE_FIXTURE_PATH
E4_CHROME_PATH
```

## Local verification and integration

Backend, from its repository root:

```powershell
npm ci
npm run prisma:generate
npx prisma validate
npm run db:migrate:deploy
npx prisma migrate status
npm run build
npx vitest run --config vitest.config.ts src/features/instagram/instagram-intelligence-provider.client.test.ts src/features/instagram/media/instagram-secure-image-downloader.test.ts src/features/data-extraction/evidence/instagram/instagram-resource-identity.test.ts
npx vitest run --config vitest.config.ts src/features/instagram-intelligence/contracts src/features/instagram-intelligence/foundations src/features/instagram-intelligence/semantics
```

Run PostgreSQL suites serially with their documented disposable-database flags;
do not point them at developer or shared data. To verify frozen bundles, use:

```powershell
npm run intelligence:contracts:verify -- --source <clean-authority-checkout> --commit bbb0be3345c36e9cc7c4f06ca68fb491b742b83f
```

Frontend, from its repository root:

```powershell
npm ci
npm run typecheck
npm test
npm run build
npx vitest run --config vitest.config.ts src/features/instagram-intelligence src/features/brand-centre/navigation/brand-centre-workspaces.test.ts
```

For authenticated local browser proof, first use an isolated disposable database
and production-built frontend/backend, then set only the named `E2E3_*` or
`E4_*` harness variables and run:

```powershell
node scripts/e2e3-instagram-workspace-proof.mjs
node scripts/e4-instagram-media-detail-proof.mjs
```

These branches are not merged into `development`. Review, merge, target
environment migration, deployment and operational monitoring remain explicit
developer/Parent work.

## Known limitations and deferred work

Explicit post-V1 deferrals:

- 7-day and 14-day window toggles; V1 remains fixed at 30 days.
- Multi-frame Reel/video analysis and video pacing/temporal interpretation.
- Full carousel-child visual sweeps.
- Audio acquisition/analysis and transcription.
- Video-specific creative-structure conclusions beyond cover evidence.
- Semantic editing/manual override, which belongs to a future shared capability.
- Any promotion of `likely_collab` into canonical Collaboration truth.
- Creator enrichment, follower counts and tier ownership in Instagram.
- Optional live Graph read; its absence does not invalidate provider-neutral
  acceptance.

Operational follow-ups, not new Product scope: merge/review the program branches,
configure target-environment secrets, apply the accepted 90 migrations, execute
deployment validation and monitor scheduled jobs/deletion processing.

Inherited repository diagnostics remain separate from Instagram defects:
backend/frontend npm audit findings, checkout-wide backend Prettier/line-ending
findings, frontend bundle-size warning, the seeded historical P1C1 test
requirement, and accepted lower-severity workspace landmark findings
(`landmark-main-is-top-level`, `landmark-no-duplicate-main`,
`landmark-unique`).
