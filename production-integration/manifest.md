# Campaign Phases 1–3 — Production Integration Review Manifest

**Status:** Remediated production implementation snapshot; static review complete, runtime acceptance pending  
**Branch:** `campaign/production-integration-review`  
**Updated:** 2026-08-12

## Current authoritative source branches

| Role | Repository | Branch | Reviewed head |
|------|------------|--------|---------------|
| Backend implementation | `Piyush1087/creator-commerce-backend-v2-clone` | `feature/campaign-phase-1-3-be` | `7533af6373fac9093d7c9d083f4f669545e9f7d2` |
| Frontend implementation | `Piyush1087/creator-commerce-frontend-v2-clone` | `feature/campaign-phase-1-3-fe` | `351f280c98da6ae1a28c09bb2d78572b24e6d463` |
| Review mirror | `Piyush1087/dummy_tcs` | `campaign/production-integration-review` | this branch; mirror updated after the source changes listed below |

The older `growth-verse/**` remotes are not treated as current authority in this review because the remediation work in this session was written to the Piyush-owned clone feature branches. Do not assume those remotes are byte-identical without a separate comparison.

## Package purpose

```text
production-integration/
├── manifest.md
├── R2_STATIC_COMPLIANCE.md
├── R2_APPROVAL_ATOMICITY.md
├── backend/             production-relative Campaign/backend files
└── frontend/            production-relative Campaign/frontend files
```

The mirror is a review package, not a standalone runnable application. Existing canonical material under `campaign/**`, `docs/**`, Phase 1–3 handoffs, the production migration playbook/map, and `frontend/staging/**` remains the comparison authority and was not replaced by the implementation snapshot.

## Remediation incorporated after the original developer handoff

### Phase 1 / Create Campaign

The production Create Campaign path was reconciled toward the frozen Campaign contract rather than leaving the canonical schema disconnected from the real wizard. The implementation now includes the canonical manual Draft/autosave/publish runtime, canonical objective/targeting/commercial semantics, derived currency handling, the canonical Creator Archetype library, canonical Affinity selection, and Google Places-normalized geography. The existing production Create Campaign presentation was adapted rather than replaced wholesale.

Key implementation areas include:

- canonical Campaign validation/schema and Create service/controller;
- canonical draft API/runtime and Draft → Publish boundary;
- production Create Campaign wizard/state/validation/mappers;
- canonical archetype and affinity selectors;
- Google Places geography selector and normalized geography validation.

### Phase 2 / state and command correctness

The following contract-critical corrections are reflected in the source branches and mirror:

- `executionReady` = active Campaign Asset with active Brief;
- Campaign Page Product/Brief counts use active/published semantics;
- Applicants workspace state/counts are Application-owned;
- Campaign `creationSource` is persisted/read rather than hard-coded;
- Application approval, sibling supersession and canonical Collaboration provisioning are transaction-coordinated;
- Collaboration provisioning supports an existing Prisma transaction and strict new-creation semantics;
- stale Campaign lifecycle vocabulary was reconciled to `DRAFT / PUBLISHED / LIVE / PAUSED / COMPLETED / ARCHIVED`;
- fabricated Campaign Copilot summaries/actions were removed. `copilotSummary` is `UNAVAILABLE` until an accepted Campaign Intelligence projection exists.

### Intelligence ownership decision

AI-recommended Campaign generation and recommendation-to-Campaign translation are **not Campaign-module responsibilities**. They are owned by the Creator Shop Intelligence Engine. Existing Co-Pilot/HITL logic that translates recommendation-like data into the legacy Campaign wizard path is flagged as legacy/deprecation debt and must not be treated as the canonical AI-recommended Campaign creation implementation.

Campaign retains only the persistence/integration surface required to accept authoritative Intelligence output, such as `creationSource = AI_RECOMMENDED` and future recommendation provenance.

### Phase 3 / production frontend reconciliation

The production Campaign Page now uses explicit Campaign-facing surface boundaries while retaining the production shell/Aurora primitives:

- `CanonicalCampaignPage.tsx` — canonical Campaign page composition;
- `CampaignDetailsDrawer.tsx` — Campaign Details drawer boundary;
- `CreatorProfileDrawer.tsx` — Campaign-context creator profile boundary;
- `OutreachComposerDrawer.tsx` — backend-resolved composer boundary; final send/DM execution remains disabled until canonical execution commands exist;
- `ReportingDrawer.tsx` — bounded Campaign reporting surface. The legacy SaaS reporting payload is intentionally not consumed by the new Campaign Page; detailed Reporting waits for the accepted Reporting/Intelligence projection;
- `CreatorCard.tsx` — compact Discovery/Applicants creator surface;
- `campaign-page.css` — scoped responsive layout/drawer styles;
- Aurora `SideDrawer` is reused via the shared Aurora export rather than duplicated inside Campaign.

Product and Brief view/add flows remain connected through the retained/adapted production surfaces.

## Important current classifications

| Surface / boundary | Current classification | Notes |
|--------------------|------------------------|-------|
| Production AppShell/navigation | KEEP | Campaign renders inside the existing product shell |
| Create Campaign UI | ADAPT | Production presentation retained; field/runtime semantics reconciled to Phase 1 |
| Add Product | KEEP / ADAPT | Retain mature production flow; canonical Campaign Asset semantics remain authority |
| Add Brief | KEEP / ADAPT | Retain mature production flow; canonical Brief semantics remain authority |
| Campaign Page | REPLACE | New canonical Campaign Page architecture |
| Discovery / Applicants | REPLACE / ADAPT | New Campaign-facing cards/workspaces; Application is applicant truth |
| Creator Profile | ADD / REPLACE | Campaign-context SideDrawer |
| Campaign Details | ADD | Lazy/read-oriented SideDrawer surface |
| Reporting | REPLACE | Compact deterministic summary retained; detailed legacy SaaS reporting not reused |
| Outreach | ADAPT | Composer boundary present; final Email/Priority DM execution deferred to owned command implementation |
| Campaign Copilot | DEFER TO INTELLIGENCE | No fabricated Campaign Intelligence output |
| AI recommendation → Campaign translation | DEFER TO INTELLIGENCE | Legacy translation path flagged for later retirement |

## Source files materially added/changed by remediation

This section records the most important additions after the original Phase 1–3 developer snapshot; it is not intended to duplicate every dependency already present in the mirror.

### Backend

- `src/features/brand-uce/services/campaign-query.service.ts`
- `src/features/brand-uce/services/campaign-application.service.ts`
- `src/features/collaboration/services/collaboration-provision.service.ts`
- canonical Campaign Create/Draft controller/service/schema/migration files under `src/features/brand-uce/**` and `prisma/**`
- Campaign lifecycle classifier vocabulary touchpoints under `src/features/co-pilot/**`

### Frontend

- `src/features/uce/campaign-page/CanonicalCampaignPage.tsx`
- `src/features/uce/campaign-page/CampaignDetailsDrawer.tsx`
- `src/features/uce/campaign-page/CreatorProfileDrawer.tsx`
- `src/features/uce/campaign-page/OutreachComposerDrawer.tsx`
- `src/features/uce/campaign-page/ReportingDrawer.tsx`
- `src/features/uce/campaign-page/CreatorCard.tsx`
- `src/features/uce/campaign-page/types.ts`
- `src/features/uce/campaign-page/campaign-page.css`
- `src/features/uce/api/brand-uce-client.ts`
- production Create Campaign wizard/schema/validation/mappers and canonical picker files under `src/features/uce/**`
- `src/design-system/aurora/index.ts` (SideDrawer public export only; existing shared primitive retained)

## Runtime acceptance status

GitHub currently reports no commit status checks for either reviewed source head. Therefore this package is **statically reviewed, not runtime-verified**.

Before merge, execute repository-native typecheck/lint/build plus focused Campaign tests and end-to-end lifecycle/Application scenarios. See `R2_STATIC_COMPLIANCE.md` for the required acceptance commands and scenarios.

## Review guidance

Compare this implementation package against:

- canonical specs: `campaign/**`;
- design authority: `docs/design-system/AURORA_DESIGN_SYSTEM.md`;
- Phase handoffs: `campaign/phase_*_developer_handoff_files.md`;
- production migration playbook/map;
- staging reference only where it remains relevant.

Do not infer missing Intelligence, provider execution, or Collaboration semantics in the frontend. A surface may legitimately remain `UNAVAILABLE` until its owning subsystem supplies the canonical projection/command.
