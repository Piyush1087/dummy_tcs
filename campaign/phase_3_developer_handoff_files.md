# Campaign Phase 3 — Developer Handoff

**Status:** READY FOR DEVELOPER EXECUTION / CONSERVATIVE HANDOFF

## 1. Purpose

Phase 3 reconciles the newer Campaign architecture in `dummy_tcs` with the existing production frontend in:

`AatishBrianDSilva/creator-commerce-frontend-v2-clone`

This handoff intentionally stops before production implementation because the production backend is not yet available for audit. The frontend production audit found semantic mismatches that must not be hidden with frontend-only adapters.

The developer should use this document together with the Phase 1/2 handoffs and the Phase 3 migration artifacts below.

---

## 2. What is complete

### Phase 3A — Production topology

Production Campaign frontend was mapped.

Primary production scope:

- `src/pages/brand/uce/**`
- `src/features/uce/**`
- `src/routes/app-routes.tsx`
- `src/layouts/app-shell/**`
- `src/design-system/aurora/**`

Surface-specific dependencies only when required:

- `src/features/brand-centre/**`
- `src/features/creator-centre/**`
- `src/features/collaboration/**`

Do not broadly refactor these adjacent modules during Campaign migration.

### Phase 3B — Surface decisions

Final production migration direction:

| Surface | Decision |
|---|---|
| Create Campaign | ADAPT |
| Edit Campaign | ADAPT; current narrow `CampaignHeroEditDrawer` file is expected to retire |
| Add Product | ADAPT |
| Product Details | ADAPT heavily |
| Add Brief | ADAPT |
| Brief Details | ADAPT |
| Campaign Page | REPLACE |
| Discovery | REPLACE |
| Applicants | REPLACE; preserve explicit backend-owned Collaboration handoff/reference where applicable |
| Creator Card | ADD |
| Creator Profile | REPLACE Campaign content architecture; reuse production profile/drawer primitives selectively |
| Campaign Details | ADD |
| Campaign Copilot | ADD |
| Share | ADAPT heavily |
| Outreach | ADD |
| Reporting | REPLACE |
| Global AppShell/navigation | KEEP |

Definitions:

- **KEEP** = existing production frontend remains substantially intact.
- **ADAPT** = production frontend remains the implementation baseline but is modified to satisfy canonical Campaign contracts/DS5.
- **REPLACE** = production surface is not the workflow/IA baseline; newer Campaign architecture controls the surface.
- **ADD** = required production surface does not currently exist.
- **REUSE** = secondary guidance only; reuse production primitives inside ADD/REPLACE surfaces.

### Phase 3C — Shared primitive/design-system audit

Keep the production application shell and reuse Aurora primitives.

Reusable production primitives include:

- Button
- TextField / SelectField
- Card
- Alert
- Badge / Chip
- SideDrawer implementation
- Toast
- responsive AppShell/header/breadcrumb system

Use `dummy_tcs/docs/design-system/AURORA_DESIGN_SYSTEM.md` as Design System 5.0 authority.

Do not create Campaign-specific replacements for shared primitives unless a real shared capability gap is confirmed.

### Phase 3D — Production migration map

A read-only Codex audit was run against production `main` commit:

`7524bb5d4dc85793597423a98c09fe2867355317`

The audit was reviewed and corrected. Canonical production mapping is now documented in:

`campaign/frontend/production_migration_map.md`

Important reviewed corrections:

- `CampaignProductsBriefsRepository.tsx` = SPLIT, not MODIFY + SPLIT.
- `CampaignShareRouterModal.tsx` = SPLIT, not MODIFY + SPLIT.
- `CampaignHeroEditDrawer.tsx` may RETIRE at file level while Edit Campaign remains an ADAPT surface.
- `brand-uce.contracts.ts` = SPLIT, not immediate whole-file retirement.
- Applicant approval remains Campaign Application-owned; any Collaboration creation/reference must happen through an explicit backend-owned integration boundary rather than making Collaboration the Campaign Applicant state model.
- SideDrawer already exists; if needed, promote/upgrade the existing shared primitive rather than creating another drawer system.

---

## 3. Canonical Phase 3 artifacts

Use these files as the Phase 3 authority:

### ADD / READ

- `campaign/production_frontend_migration_playbook.md`
- `campaign/frontend/production_migration_map.md`
- `campaign/phase_3_developer_handoff_files.md`

The playbook defines KEEP / ADAPT / REPLACE / ADD behavior and Codex prompt patterns.

The production migration map defines production paths, file lifecycle, read/write boundaries, migration blockers and target execution order.

---

## 4. Phase 1 and Phase 2 remain authoritative

Do not reopen Phase 1 or Phase 2 wholesale.

Use:

- `campaign/phase_1_developer_handoff_files.md`
- `campaign/phase_2_developer_handoff_files.md`

Phase 1 owns canonical Campaign contracts/runtime/validation.

Phase 2 owns Campaign logic/state correctness, staging-boundary cleanup and merge-safety guidance.

Only make targeted amendments if production backend evidence proves a genuine contract conflict.

---

## 5. Do not migrate staging application infrastructure

Do **not** copy production-unready staging infrastructure into the real app.

In particular, do not migrate as production architecture:

- `frontend/staging/**` shell/navigation;
- scenario fixtures;
- staging command harness;
- staging mock/store infrastructure;
- staging-only selector/tooling.

Staging React may be used as Campaign behavior/IA reference where the production migration map explicitly points to it.

---

## 6. Production frontend direction

### KEEP

- real production AppShell/navigation/routing conventions;
- production shared Aurora primitive system;
- mature production implementation patterns that remain compatible with DS5.

### ADAPT production implementation

- Create Campaign;
- Edit Campaign workflow using the canonical Campaign field object;
- Add Product;
- Add Brief;
- Product Details;
- Brief Details;
- Share.

### REPLACE production workflow/IA

- Campaign Page;
- Discovery;
- Applicants;
- Creator Profile Campaign content model;
- Reporting;
- legacy Campaign pipeline/tab ownership.

### ADD

- Creator Card;
- Campaign Details;
- Campaign Copilot presentation/projection boundary;
- Outreach production surface.

Do not invent Campaign Intelligence data while adding these surfaces.

---

## 7. Current integration blockers — DO NOT solve in frontend only

The production frontend currently proves the following legacy API/runtime model:

- `DRAFT | ACTIVE | PAUSED | COMPLETED | ARCHIVED`
- direct `brand-uce` REST shell reads/mutations;
- Collaboration-shaped Applicant pipeline endpoints;
- legacy reporting refresh/metrics endpoints;
- frontend-owned Share URL/tracking assumptions;
- legacy Product/Brief readiness inference.

Canonical Campaign requires, among other things:

- `DRAFT | PUBLISHED | LIVE | PAUSED | COMPLETED | ARCHIVED`;
- backend-authoritative hydration/readiness;
- canonical Campaign Page View DTO;
- canonical command boundary;
- Campaign Application/Snapshot applicant model;
- backend-owned Share/Outreach/business-routing semantics;
- accepted Reporting/Intelligence projections.

Therefore:

**Do not implement a frontend compatibility shim that simply disguises `ACTIVE` as `LIVE`, reconstructs readiness in React, fabricates canonical View DTOs from semantically incomplete payloads, or makes Collaboration rows the canonical Applicant model.**

---

## 8. Required next activity when production backend becomes available

Run a targeted backend audit before the main Campaign Page production implementation.

Audit only Campaign and direct dependencies:

- `brand-uce` Campaign routes/controllers/services;
- Campaign persistence/schema/status model;
- Create/Edit Campaign runtime;
- Product/Brief orchestration and readiness;
- Applicant/Application/Collaboration handoff;
- Share/Outreach ownership;
- Reporting endpoints/projections;
- any Campaign read-model/query service.

The backend audit must answer:

1. How does production `ACTIVE` map/migrate to canonical `PUBLISHED` and `LIVE`?
2. Can the backend provide the canonical Campaign Page View DTO directly or through a dedicated read-model layer?
3. Which canonical command endpoints already exist versus must be added/replaced?
4. How should Campaign Application approval hand off to independently owned Collaboration?
5. Where should Product/Brief readiness be resolved?
6. Which Share/Outreach behaviors move out of frontend ownership?
7. Which Reporting projections can be supplied now while Campaign Intelligence remains deferred?

Do not change canonical Phase 1 contracts merely to preserve legacy backend semantics unless a genuine product/domain conflict is found.

---

## 9. Codex execution rule

Preferred task flow per surface:

`AUDIT -> PLAN -> IMPLEMENT -> VERIFY -> VISUAL REFINE`

Do not routinely combine all five into one broad prompt.

For implementation tasks, Codex may read broadly enough to resolve real imports/reuse patterns, but writes must remain explicitly bounded to the approved Campaign files plus separately approved shared-primitives changes.

Adjacent modules such as Brand Centre, Creator Centre and Collaboration are dependency/reference scope, not automatic write scope.

---

## 10. Conservative execution order

Until production backend is audited:

### Safe now

- read-only frontend reconnaissance;
- confirm file-level migration plan;
- review retained production UI;
- prepare branch/work plan;
- no-destructive design-system compatibility analysis.

### Hold

- main Campaign Page production implementation;
- canonical read/command adapter implementation against legacy endpoints;
- lifecycle migration;
- Applicant production migration;
- Reporting runtime replacement;
- Share/Outreach backend execution migration;
- deletion/retirement of legacy Campaign files.

### After backend audit

1. Freeze backend-to-canonical lifecycle/read/command mapping.
2. Implement canonical Campaign Page read/command boundary.
3. Replace Campaign Page composition while preserving AppShell.
4. Reconcile Products/Briefs and lazy detail surfaces.
5. Replace Discovery/Applicants.
6. Add/adjust Creator surfaces, Share, Outreach, Reporting and Copilot boundaries.
7. Reconcile retained Create/Edit/Add Product/Add Brief workflows.
8. Run end-to-end functional verification.
9. Run DS5 audit.
10. Use targeted Stitch references only where visual refinement remains necessary.
11. Retire old Campaign files only after replacement parity/regression validation.

---

## 11. Production repo handling

Do not copy the entire production frontend into `dummy_tcs` or create a permanent production mirror there.

Use the two repositories side by side:

- `dummy_tcs` = canonical Campaign contracts/new architecture;
- production repository = real application implementation/integration environment.

Perform the actual production migration in the production repo or an implementation branch of it once backend integration is understood.

---

## 12. Developer starting point

Read in this order:

1. `campaign/phase_1_developer_handoff_files.md`
2. `campaign/phase_2_developer_handoff_files.md`
3. `campaign/production_frontend_migration_playbook.md`
4. `campaign/frontend/production_migration_map.md`
5. this Phase 3 handoff

Then inspect the current production branch before implementation because production may have advanced beyond the audited commit.

If the production backend is still unavailable, stop before semantic Campaign Page integration and do not manufacture missing backend behavior in frontend code.
