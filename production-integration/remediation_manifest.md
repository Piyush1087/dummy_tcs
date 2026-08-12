# Campaign Production Integration — Remediation Manifest

**Prepared:** 2026-08-12  
**Purpose:** Overlay the original Phase 1–3 production-integration snapshot with the later R1/R2 contract remediation.

The original `manifest.md` remains the historical baseline manifest. This file is the authority for remediation work performed after that snapshot.

## Current production source heads reviewed

| Role | Repository | Branch | Reviewed head |
|---|---|---|---|
| Frontend | `Piyush1087/creator-commerce-frontend-v2-clone` | `feature/campaign-phase-1-3-fe` | `d893e796a9306e74ad2a17ababba041673d7a8fa` |
| Backend | `Piyush1087/creator-commerce-backend-v2-clone` | `feature/campaign-phase-1-3-be` | `7c90b8956c2837a5c8a78c12c215c67d8beb4d43` |

Backend head includes the R2 Campaign Page query correction. Frontend head is the latest R1 Google Places picker correction reviewed in this pass.

## R1 remediation mirrored into this review branch

The review package now includes the canonical Create Campaign UI/runtime artifacts that were absent from the original snapshot, including:

- `frontend/src/features/uce/components/CreateCampaignWizard.tsx`
- `frontend/src/features/uce/components/AudienceAffinityPicker.tsx`
- `frontend/src/features/uce/components/AudienceGeographyPicker.tsx`
- `frontend/src/features/uce/components/CampaignCanonicalPickers.css`
- `frontend/src/features/uce/canonical/audience-affinities.ts`
- `frontend/src/features/uce/types/campaign-wizard.ts`
- `frontend/src/features/uce/schemas/canonical-campaign-wizard-schema.ts`
- `frontend/src/features/uce/api/canonical-campaign-draft-client.ts`
- `frontend/src/features/uce/mappers/map-wizard-to-canonical-payload.ts`
- `frontend/src/features/uce/mappers/canonical-campaign-draft.ts`

These artifacts establish the reviewable R1 path for canonical affinities, Google Places-normalized geography, structured Draft/autosave/Publish transport, and canonical Campaign payload mapping.

## R2 remediation mirrored into this review branch

- `backend/src/features/brand-uce/services/campaign-query.service.ts` is updated so:
  - `executionReady` = active Campaign Asset with active Brief;
  - Applicants workspace/counts use `UceApplication` truth;
  - `creationSource` is projected from persisted `creation_source` rather than hard-coded `MANUAL`.

See `R2_STATIC_COMPLIANCE.md` for unresolved R2 blockers.

## Verification status

This pass is **static source/contract reconciliation**. No source branch currently exposes a CI status check for the reviewed FE head, and this review does not claim build/runtime verification.

R2 must not be marked complete until the approval transaction and Co-Pilot AI-recommended Campaign creation blockers documented in `R2_STATIC_COMPLIANCE.md` are resolved and runtime-tested.
