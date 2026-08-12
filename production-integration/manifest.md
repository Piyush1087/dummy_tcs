# Campaign Phases 1–3 — Production Integration Review Manifest

**Status:** Production implementation handoff for contract review  
**Branch:** `campaign/production-integration-review`  
**Prepared:** 2026-08-12

## Source repositories

| Role | Repository | Branch | Commit SHA |
|------|------------|--------|------------|
| Backend (clone — primary review) | `Piyush1087/creator-commerce-backend-v2-clone` | `feature/campaign-phase-1-3-be` | `efb89a333e1adf420b62673fe777c3ebcb9ce4ac` |
| Backend (growth-verse) | `growth-verse/creator-commerce-backend-v2` | `feature/campaign-phase-1-3-be` | `efb89a333e1adf420b62673fe777c3ebcb9ce4ac` |
| Frontend (clone — primary review) | `Piyush1087/creator-commerce-frontend-v2-clone` | `feature/campaign-phase-1-3-fe` | `e40839d11753da1fd26cbe25b5cb0712bde19521` |
| Frontend (growth-verse) | `growth-verse/creator-commerce-frontend-v2` | `feature/campaign-phase-1-3-fe` | `e40839d11753da1fd26cbe25b5cb0712bde19521` |

Clone and growth-verse remotes carry identical commit objects for this handoff.

## Package layout

```text
production-integration/
├── manifest.md          (this file)
├── backend/             (34 files — production-relative paths preserved)
└── frontend/            (18 files — production-relative paths preserved)
```

Existing reference material under `campaign/**`, `docs/**`, handoffs, playbook, migration map, and `frontend/staging/**` was **not modified**.

---

## Backend files

| Original path | Classification | Phase(s) | Reason |
|---------------|----------------|----------|--------|
| `docs/campaigns/backend-canonical-mapping.md` | NEW | 1 | Frozen BE→canonical field and lifecycle mapping decisions |
| `prisma/schema.prisma` | MODIFIED | 1, 2, 3 | Campaign status enum (PUBLISHED/LIVE), Application and Share models |
| `prisma/migrations/20260810120000_uce_campaign_status_published_live/migration.sql` | NEW | 1 | Add PUBLISHED and LIVE campaign statuses |
| `prisma/migrations/20260810120000_uce_campaign_status_published_live/apply_step1.sql` | NEW | 1 | Migration helper for status enum transition |
| `prisma/migrations/20260810120100_uce_campaign_status_drop_active/migration.sql` | NEW | 1 | Remove legacy ACTIVE status |
| `prisma/migrations/20260811120000_uce_application_and_share/migration.sql` | NEW | 3 | Application-owned applicants and persisted Share tracking |
| `src/features/brand-uce/validation/shared/campaign.shared.schema.ts` | NEW | 1 | Shared Zod primitives aligned to canonical contracts |
| `src/features/brand-uce/validation/campaign/campaign.schema.ts` | NEW | 1 | Campaign domain Zod validation |
| `src/features/brand-uce/validation/campaign/campaign.schema.test.ts` | NEW | 1 | Phase 1 validation test coverage |
| `src/features/brand-uce/validation/campaign/run-campaign-schema-smoke.ts` | NEW | 1 | Local schema smoke runner |
| `src/features/brand-uce/validation/applicants/application.schema.ts` | NEW | 3 | Application domain Zod validation |
| `src/features/brand-uce/validation/index.ts` | NEW | 1 | Validation module exports |
| `src/features/brand-uce/services/campaign-query.service.ts` | NEW | 2, 3 | Campaign read model — page, discovery, applications hydration |
| `src/features/brand-uce/services/campaign-query.hydration.ts` | NEW | 2 | Capabilities, workspaces, readiness hydration helpers |
| `src/features/brand-uce/services/campaign-query.hydration.smoke.ts` | NEW | 2 | Hydration smoke runner |
| `src/features/brand-uce/services/campaign-command.service.ts` | NEW | 3 | Share execute and outreach compose commands |
| `src/features/brand-uce/services/campaign-application.service.ts` | NEW | 3 | Application-owned applicants; approve/reject with Collaboration handoff |
| `src/features/brand-uce/brand-uce.controller.ts` | MODIFIED | 2, 3 | Routes for page, discovery, applications, lifecycle, share, outreach |
| `src/features/brand-uce/brand-uce.module.ts` | MODIFIED | 2, 3 | Wire query, command, and application services |
| `src/features/brand-uce/services/brand-uce-campaign.service.ts` | MODIFIED | 1, 3 | Publish/go-live/pause/resume; Phase 1 create wizard adapters |
| `src/features/brand-uce/schemas/uce-wizard.schema.ts` | MODIFIED | 1 | Visibility, compensation, currency aligned to Phase 1 contracts |
| `src/features/co-pilot/core/ai-module.contract.ts` | MODIFIED | 1 | Campaign status ACTIVE→LIVE in co-pilot contract |
| `src/features/co-pilot/modules/uce-campaign-list/campaign-list-validation.ts` | MODIFIED | 1 | Campaign list validation uses LIVE status |
| `src/features/co-pilot/modules/uce-campaign-list/campaign-list.intents.ts` | MODIFIED | 1 | Campaign list intents use LIVE status |
| `src/features/co-pilot/modules/uce-campaign-list/campaign-list.tools.ts` | MODIFIED | 1 | Campaign list tools use LIVE status |
| `src/features/co-pilot/modules/uce-campaign-list/uce-campaign-list.ai-module.ts` | MODIFIED | 1 | AI module campaign status vocabulary update |
| `src/features/co-pilot/services/co-pilot-campaign-classifier.service.ts` | MODIFIED | 1 | Classifier uses LIVE status |
| `src/features/co-pilot/services/co-pilot-hitl.service.ts` | MODIFIED | 1 | HITL service uses LIVE status |
| `src/features/creator-marketplace/services/creator-marketplace.service.ts` | MODIFIED | 1 | Campaign status read aligned to LIVE |
| `src/features/creator-marketplace/services/creator-invitation.service.ts` | MODIFIED | 1 | Campaign status read aligned to LIVE |
| `src/features/creator-uce/services/creator-uce-campaigns.service.ts` | MODIFIED | 1 | Creator campaign list status vocabulary |
| `src/features/public-brand/public-brand.service.ts` | MODIFIED | 1 | Public brand campaign status read |
| `src/features/brand-settings/services/brand-settings-integrations.service.ts` | MODIFIED | 1 | Minor integration touchpoint for campaign context |
| `tsconfig.build.json` | MODIFIED | 1 | Include validation module in build |

---

## Frontend files

| Original path | Classification | Phase(s) | Reason |
|---------------|----------------|----------|--------|
| `src/features/uce/campaign-page/CanonicalCampaignPage.tsx` | NEW | 3 | Canonical Campaign Page shell consuming View DTO |
| `src/features/uce/campaign-page/CreatorCard.tsx` | NEW | 3 | Creator card primitive for Campaign Page |
| `src/features/uce/campaign-page/campaign-page.css` | NEW | 3 | Scoped Campaign Page styles |
| `src/features/uce/campaign-page/types.ts` | NEW | 3 | View DTO and page-local types |
| `src/pages/brand/uce/BrandUceCampaignDetailPage.tsx` | REPLACED | 3 | Detail page loads View DTO and composes CanonicalCampaignPage |
| `src/pages/brand/uce/BrandUceCampaignDetailPage.css` | MODIFIED | 3 | Page padding and mobile shell clearance |
| `src/features/uce/api/brand-uce-client.ts` | MODIFIED | 2, 3 | Page, discovery, applications, lifecycle, share, outreach API client |
| `src/features/uce/contracts/brand-uce.contracts.ts` | MODIFIED | 1 | PUBLISHED/LIVE status types; View DTO contracts |
| `src/features/uce/mappers/phase1-campaign-adapters.ts` | NEW | 1 | Phase 1 field adapters (visibility, compensation, KPI, currency) |
| `src/features/uce/mappers/map-wizard-to-payload.ts` | MODIFIED | 1 | Wizard payload mapping via Phase 1 adapters |
| `src/features/uce/schemas/campaign-wizard-schema.ts` | MODIFIED | 1 | Visibility and compensation schema aligned to contracts |
| `src/features/uce/components/CampaignShareRouterModal.tsx` | MODIFIED | 3 | Share opens modal; execute on deliberate channel action |
| `src/features/uce/components/CampaignShareRouterModal.css` | MODIFIED | 3 | Share modal styling |
| `src/features/uce/components/CampaignListTabs.tsx` | MODIFIED | 1 | Tab filters use PUBLISHED/LIVE lifecycle |
| `src/features/uce/utils/uce-format.ts` | MODIFIED | 1 | Status label formatting for new lifecycle |
| `src/features/uce/components/CampaignWorkspaceZone1.tsx` | MODIFIED | 3 | Retired from detail page composition; minor status alignment |
| `src/features/uce/uce-responsive.css` | MODIFIED | 3 | Responsive adjustments for Campaign Page layout |
| `src/features/uce/RETIRED_CAMPAIGN_PIPELINE.md` | NEW | 3 | Documents pipeline/Zone1 retirement from detail page composition |

---

## Unchanged dependencies (inspected, not modified)

| Original path | Classification | Phase(s) | Reason |
|---------------|----------------|----------|--------|
| `src/routes/app-routes.tsx` | UNCHANGED_DEPENDENCY | — | Campaign routes already existed; no route changes required |
| `src/layouts/app-shell/**` | UNCHANGED_DEPENDENCY | — | Production AppShell retained; Campaign Page integrates within existing shell |
| `src/design-system/aurora/**` | UNCHANGED_DEPENDENCY | — | Aurora primitives reused; no DS changes for Campaign handoff |
| `src/features/brand-centre/**` | UNCHANGED_DEPENDENCY | — | Add Product integration unchanged; lazy detail endpoints only |
| `src/features/creator-centre/**` | UNCHANGED_DEPENDENCY | — | Creator profile presentation reference only |
| `src/features/collaboration/**` | UNCHANGED_DEPENDENCY | 3 | Collaboration handoff on Application approve; module not modified in FE |

---

## Deleted files

No production files were git-deleted in this handoff. Campaign pipeline/Zone1 components remain in the repository but are **retired from detail page composition** (see `RETIRED_CAMPAIGN_PIPELINE.md`).

---

## Review guidance

Compare `production-integration/**` against:

- Canonical specs: `campaign/**`
- Design authority: `docs/design-system/AURORA_DESIGN_SYSTEM.md`
- Phase handoffs: `campaign/phase_*_developer_handoff_files.md`
- Staging reference: `frontend/staging/**`

Do not treat this package as a runnable application — it is a mirrored snapshot of production-integrated files for contract validation.
