# Creator Media Kit V3 developer handoff

## Published branches

- Backend `program/creator-media-kit-v3-backend`: `da1d19d15198699465040c32ce075b6be1c85faf` / tree `560e2b90e95c3456ac7eef7ce9351861ab04a576`.
- Frontend `program/creator-media-kit-v3-frontend`: `95058a5dd6d4e89e8c65172da4d71cfe63c03018` / tree `4e0c9906d5de1b6d03bfa74a7b5683c920d67a61`.

## Integration map

- Backend module: `src/features/creator-media-kit/`.
- Settings-owned business-email read adapter: `src/features/creator-settings/services/creator-business-email-projection.service.ts`.
- Legacy anonymous route delegates to the explicit LIVE V3 aggregate and fails closed otherwise.
- Frontend feature: `src/features/creator-media-kit/`; Creator, anonymous and verified Brand pages are registered in the existing router/shell.
- Migration: `20260916180000_creator_media_kit_v3`; apply with the repository's normal Prisma migration deployment workflow.

## Local proof configuration names

`DATABASE_URL`, `CREATOR_MEDIA_KIT_DATABASE_TEST`, `CREATOR_MEDIA_KIT_BROWSER_FIXTURE`, `CREATOR_MEDIA_KIT_FIXTURE_PASSWORD`, `CREATOR_MEDIA_KIT_FIXTURE_MANIFEST`, `CREATOR_MEDIA_KIT_BACKEND_ORIGIN`, `CREATOR_MEDIA_KIT_FRONTEND_ORIGIN`, `CREATOR_MEDIA_KIT_BROWSER_PATH`, `CREATOR_MEDIA_KIT_BROWSER_EVIDENCE`.

No values belong in Git or handoff material.

## Operational invariants

- DRAFT is non-public; publication is explicit and revision-aware.
- Legacy `isMediaKitPublic` is never authority for V3 exposure.
- Media Kit composes accepted upstream projections and never writes upstream truth.
- Settings owns business email and deletion lifecycle; Brand owns verification.
- Public/verified projections remain strict and separate.
- Work with Creator stops at the click; events remain nonblocking.
- PDF is generated client-side from an authorized point-in-time DTO and is never archived by Media Kit.
- Preserve source-link/no-image fallback and do not introduce raw/signed media persistence.

## Deferred external-owner debts

Settings Creator Instagram source-delete reconciliation and Settings Creator `Delete my data` remain deferred to Settings. They were not implemented or weakened here.
