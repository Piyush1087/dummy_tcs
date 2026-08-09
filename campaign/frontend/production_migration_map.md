# Campaign Production Migration Map

**Status:** Canonical Phase 3D production mapping artifact  
**Scope:** Campaign production integration mapping for `AatishBrianDSilva/creator-commerce-frontend-v2-clone`  
**Evidence base:** Phase 3A–3C production audit plus Codex Phase 3D-1 read-only Campaign Page audit at production commit `7524bb5d4dc85793597423a98c09fe2867355317`

## 1. Purpose

This document maps the canonical Campaign architecture in `dummy_tcs` to the actual production frontend structure.

It does **not** redefine Campaign business behavior, lifecycle, DTOs, validation, Design System semantics, or Intelligence logic.

Its job is to answer:

- which production files survive;
- which production files change;
- which production files split or retire;
- what new production boundaries are likely required;
- which `dummy_tcs` artifacts are authoritative for each migration task;
- which production dependencies Codex may read versus modify;
- which integration blockers must be resolved before a production implementation can be treated as complete.

Use this document together with:

- `campaign/phase_1_developer_handoff_files.md`
- `campaign/phase_2_developer_handoff_files.md`
- `campaign/production_frontend_migration_playbook.md`
- canonical Campaign contracts under `campaign/**`
- `docs/design-system/AURORA_DESIGN_SYSTEM.md`

## 2. Production topology

Production repository:

`AatishBrianDSilva/creator-commerce-frontend-v2-clone`

Primary Campaign routes:

- Campaign list → `BrandUceCampaignsPage`
- Create Campaign → `BrandUceCampaignCreatePage`
- Campaign detail → `BrandUceCampaignDetailPage`

All authenticated Campaign routes render inside the production AppShell.

Primary Campaign feature boundary:

```text
src/pages/brand/uce/**
src/features/uce/**
```

Primary shared production dependencies:

```text
src/layouts/app-shell/**
src/design-system/aurora/**
src/routes/app-routes.tsx
```

Surface-specific adjacent dependencies:

```text
src/features/brand-centre/**
    Add Product source/catalogue integration only

src/features/creator-centre/**
    Creator presentation/profile reference only

src/features/collaboration/**
    downstream Collaboration integration/reference only
```

Dependency visibility does not make an adjacent module migration scope.

## 3. Authority hierarchy

When sources disagree:

1. Canonical Campaign contracts in `dummy_tcs`
2. Aurora Design System 5.0
3. Approved Stitch reference for that specific surface
4. Production implementation patterns and shared primitives
5. `dummy_tcs` staging visuals

The production AppShell is retained as the real application shell.

The old production Campaign Page does not remain the Campaign workflow/IA authority.

## 4. File lifecycle vocabulary

Each materially affected production file should receive one primary lifecycle classification.

### SURVIVES
Existing production file remains substantially intact.

### MODIFY
Existing file remains and receives bounded migration changes.

### SPLIT
Useful implementation remains, but obsolete responsibility must be extracted, replaced, or recomposed.

### RETIRE
File belongs to obsolete Campaign workflow architecture and should leave the active Campaign path after replacement parity is validated.

### NEW
A new production boundary/component is required and no suitable predecessor exists.

### SHARED-UPGRADE
A reusable Aurora/AppShell capability requires a shared improvement rather than a Campaign-specific workaround.

## 5. Surface migration decisions

| Surface | Decision | Production baseline | Canonical/new authority | Reuse guidance |
|---|---|---:|---|---|
| Global AppShell/navigation | KEEP | Yes | DS5 compatibility only | preserve production shell |
| Create Campaign | ADAPT | Yes | Create Campaign field/runtime/validation contracts | preserve mature production wizard/layout |
| Edit Campaign | ADAPT | Yes | same Campaign definition + runtime editability rules | reuse Create/form/drawer patterns; do not preserve narrow legacy edit DTO |
| Add Product | ADAPT | Yes | Add Product/domain/command contracts | preserve Brand Centre source/search UX where compatible |
| Product Details | ADAPT heavily | Yes | canonical lazy Product read projection | reuse production drawer mechanics |
| Add Brief | ADAPT | Yes | Add Brief contracts | preserve mature Brief wizard |
| Brief Details | ADAPT | Yes | canonical lazy Brief read projection | reuse production snapshot/drawer mechanics |
| Campaign Page | REPLACE | No | Campaign Page IA/hydration/capabilities/state contracts | reuse production primitives, not old workflow |
| Discovery | REPLACE | No | canonical state/workspace/action architecture | reuse generic production UI internals where useful |
| Applicants | REPLACE | No | canonical Application/Snapshot workspace architecture | reuse mutation/error/loading mechanics selectively |
| Creator Card | ADD | No mature Campaign baseline | Campaign-context creator projection | reuse Aurora + selected Creator Centre patterns |
| Creator Profile | REPLACE | No trustworthy Campaign content baseline | Campaign-context profile projection | reuse drawer mechanics + selected Creator Centre presentation patterns |
| Campaign Details | ADD | No | canonical View/read contract | use shared production drawer primitive |
| Campaign Copilot | ADD | No | bounded supplied projection/action boundary | no frontend Intelligence computation |
| Share | ADAPT heavily | Yes | canonical command/tracking semantics | preserve journey/layout; replace frontend-owned execution assumptions |
| Outreach | ADD | No mature Campaign composer found | OutreachService-owned boundary | reuse production modal/drawer/form primitives |
| Reporting | REPLACE | No | Campaign-owned reporting projection architecture | do not preserve legacy SaaS/tab runtime |

## 6. Campaign Page production composition — current

Current production composition:

```text
AppShellLayout
└─ BrandUceCampaignDetailPage
   ├─ CampaignWorkspaceZone1
   ├─ CampaignHeroEditDrawer
   ├─ CampaignProductsBriefsRepository
   ├─ CampaignPipelineWorkspace
   │  ├─ ProspectsTabPanel
   │  ├─ ApplicantsTabPanel
   │  ├─ ActiveCollabsTabPanel
   │  └─ ReportingTabPanel
   ├─ LinkAssetDrawer
   ├─ ProductDetailDrawer
   ├─ BriefSnapshotDrawer / BriefingWizardDrawer
   └─ CampaignShareRouterModal
```

Target composition must preserve the production route/AppShell entry while replacing the Campaign-specific page architecture.

Conceptually:

```text
AppShellLayout
└─ BrandUceCampaignDetailPage
   └─ canonical Campaign Page composition
      ├─ Campaign Header / lifecycle context
      ├─ Campaign Details entry
      ├─ Copilot projection
      ├─ Performance/Reporting summary
      ├─ Products & Briefs readiness/summary
      ├─ Discovery workspace when supplied/visible
      ├─ Applicants workspace when supplied/visible
      ├─ lazy Product/Brief/Creator/Campaign detail surfaces
      └─ capability-driven Share / lifecycle / other actions
```

The page consumes resolved backend projections; it does not reconstruct lifecycle/readiness/business legality locally.

## 7. Production file-level migration ledger

### 7.1 Shared/application files

| Production file | Classification | Target responsibility | Guidance |
|---|---|---|---|
| `src/routes/app-routes.tsx` | SURVIVES | preserve authenticated Campaign routes/AppShell entry | change only if route parameters/integration genuinely require it |
| `src/layouts/app-shell/**` | SURVIVES | production application chrome | no Campaign-specific redesign |
| `src/design-system/aurora/**` | SURVIVES | shared production UI primitives | reuse subject to DS5; shared gaps become SHARED-UPGRADE only |

### 7.2 Campaign detail composition

| Production file | Classification | Target responsibility | Required change |
|---|---|---|---|
| `src/pages/brand/uce/BrandUceCampaignDetailPage.tsx` | SPLIT | retain route/loading/error composition responsibilities; become composition host for new Campaign Page | remove old Campaign-specific orchestration and compose canonical feature root |
| `CampaignWorkspaceZone1.tsx` | RETIRE | replaced by canonical Campaign header/context + Campaign Details entry | remove legacy ACTIVE/PAUSED-centric hero/details ownership after parity |
| `CampaignProductsBriefsRepository.tsx` | SPLIT | new Products & Briefs summary/readiness + lazy detail triggers | preserve useful product/brief presentation/trigger mechanics; replace legacy state/capability assumptions |
| `CampaignPipelineWorkspace.tsx` | RETIRE | replaced by state-driven Discovery/Applicants/Reporting composition | do not preserve tab/pipeline ownership |
| `ProspectsTabPanel.tsx` | RETIRE | replaced by Discovery workspace | old pipeline/table ownership is not target architecture |
| `ApplicantsTabPanel.tsx` | RETIRE | replaced by canonical Applicants workspace | old Collaboration-shaped page model must not remain Campaign Applicant truth |
| `ActiveCollabsTabPanel.tsx` | RETIRE | Campaign retains only bounded references into separately owned Collaboration | do not absorb Collaboration lifecycle into Campaign |
| `ReportingTabPanel.tsx` | RETIRE | replaced by Campaign reporting summary/detail projection | legacy refresh/runtime/metric semantics are not target authority |

### 7.3 Retained/adapted workflows and detail surfaces

| Production file | Classification | Target responsibility | Required change |
|---|---|---|---|
| `CampaignHeroEditDrawer.tsx` | RETIRE | canonical Edit Campaign uses the same Campaign definition/form architecture as Create | reuse its drawer interaction ideas if useful, but do not preserve narrow name/budget/inventory DTO |
| `LinkAssetDrawer.tsx` | MODIFY | adapted Add Product | preserve Brand Centre acquisition/search UX where compatible; submit canonical command input |
| `BriefingWizardDrawer.tsx` | MODIFY | adapted Add Brief | preserve mature Brief wizard mechanics; reconcile canonical payload/validation |
| `ProductDetailDrawer.tsx` | MODIFY | lazy Product Details | consume canonical read projection/capabilities rather than legacy repository model |
| `BriefSnapshotDrawer.tsx` | MODIFY | lazy Brief Details | consume canonical read projection/capabilities |
| `CampaignShareRouterModal.tsx` | SPLIT | canonical Share presentation + result state | preserve strong journey/layout mechanics; move/remove frontend-generated link/tracking/business assumptions |

### 7.4 API/contracts

| Production file | Classification | Target responsibility | Required change |
|---|---|---|---|
| `brand-uce-client.ts` | SPLIT | preserve reusable transport/auth/error mechanics while introducing canonical Campaign read/command adapter boundary | Campaign Page must stop consuming persistence-shaped direct REST state as page truth |
| `brand-uce.contracts.ts` | SPLIT | preserve only legacy types still required temporarily by retained Create/Add flows; remove it as Campaign Page-facing canonical state | new Campaign Page-facing types come from canonical View/Action contract mapping |

## 8. Important interpretation notes

### 8.1 Edit Campaign surface vs legacy edit file

The **surface** remains ADAPT because production remains the implementation environment and mature form/drawer patterns should be reused.

The specific legacy file `CampaignHeroEditDrawer.tsx` is RETIRE because it represents only the old narrow edit model. This is not a contradiction.

### 8.2 Applicant approval and Collaboration

Canonical ownership rule:

```text
Applicant approval
  → Campaign-owned Application reaches authoritative approved state
  → backend/orchestration MAY initiate or reference Collaboration
  → Collaboration owns its own lifecycle/execution
```

What must not survive is a frontend model in which:

- the Collaboration row is Campaign Applicant truth;
- React assumes approval itself equals Collaboration creation;
- Campaign owns Collaboration lifecycle.

Any Collaboration creation/reference triggered after approval must occur through an explicit backend-owned integration boundary.

### 8.3 SideDrawer

A shared `SideDrawer` component already exists in production Aurora and is used directly by Campaign surfaces.

It is not currently exported through the Aurora public barrel.

Therefore the SHARED-UPGRADE question is narrow:

- confirm DS5 conformance;
- decide whether to formally export/promote the existing shared drawer primitive;
- do **not** create a second Campaign drawer framework.

## 9. New production component boundaries likely required

Names are indicative and may be adjusted to production conventions during PLAN.

Likely new boundaries:

```text
src/features/uce/campaign-page/
├── CampaignPage.tsx
├── CampaignHeader.tsx
├── CampaignCopilot.tsx
├── PerformanceSummary.tsx
├── ProductsBriefsSection.tsx
├── DiscoveryWorkspace.tsx
├── ApplicantsWorkspace.tsx
├── ExpandableSection.tsx            # only if genuinely reusable inside Campaign
├── campaign-read-adapter.ts
├── campaign-command-adapter.ts
├── campaign-view-types.ts           # or equivalent canonical mapping boundary
└── lazy drawer composition adapters as required
```

Do not over-componentize. Existing production primitives should be reused before introducing generic new components.

## 10. `dummy_tcs` authority packages by migration task

### Campaign Page foundation

Mandatory context:

- `campaign/campaign_module_contract.md`
- `campaign/campaign_page/**`
- `campaign/frontend/implementation_map.md`
- `campaign/frontend/state_map.md`
- `campaign/frontend/module_state_contract.md`
- `campaign/frontend/ui_domain_mapping.md`
- `campaign/frontend/view_dto_api_contract.md`

### Create/Edit Campaign

Mandatory context:

- `campaign/create_campaign/field_object_contract.yaml`
- `campaign/create_campaign/field_validation_reconciliation.md`
- `campaign/create_campaign/runtime_contract.yaml`
- relevant canonical vocabularies
- executable validation contracts

Do not transplant a replacement Create Campaign React frontend from staging; one was not built as the production target.

### Add Product

Mandatory context:

- `campaign/add_product/**`
- Campaign read/command mapping relevant to Campaign Asset/Product

### Add Brief

Mandatory context:

- `campaign/add_brief/**`
- relevant Product/Brief readiness/read/command contracts

### Discovery / Applicants

Mandatory context:

- Campaign Page state/hydration/orchestration contracts
- frontend state map
- UI-domain mapping
- View DTO/API contract

### Campaign/Product/Brief Details

Mandatory context:

- frontend View DTO/API contract
- relevant focused read contract
- supplied capabilities

### Share / Outreach

Mandatory context:

- relevant canonical command/service boundaries
- View/Action DTO contract
- backend-owned routing/idempotency rules

### Reporting / Copilot

Mandatory context:

- Campaign reporting/intelligence projection contract
- View DTO contract

Do not implement Campaign Intelligence computation in frontend.

### Design authority for all tasks

Always include:

`docs/design-system/AURORA_DESIGN_SYSTEM.md`

## 11. Codex READ / WRITE policy

### AUDIT / PLAN

Codex may read broadly enough across production to discover reusable patterns and direct dependencies.

Primary read scope:

```text
src/pages/brand/uce/**
src/features/uce/**
src/routes/app-routes.tsx
src/layouts/app-shell/**
src/design-system/aurora/**
```

Surface-specific read-only dependencies when required:

```text
src/features/brand-centre/**
src/features/creator-centre/**
src/features/collaboration/**
```

No writes during AUDIT/PLAN.

### IMPLEMENT

Read scope may remain broad enough to resolve imports/patterns.

Write scope must be explicit and approved in the preceding PLAN.

Normally allowed:

```text
src/pages/brand/uce/BrandUceCampaignDetailPage.tsx
approved Campaign feature files under src/features/uce/**
Campaign-specific CSS
canonical Campaign read/command adapters and view/action mappings
minimal Campaign route adjustment if genuinely required
narrow shared Aurora upgrade explicitly approved in PLAN
```

Not allowed without separate approval:

```text
AppShell/navigation redesign
Brand Centre business/workflow refactor
Creator Centre business/workflow refactor
Collaboration lifecycle/workflow refactor
backend domain/endpoint changes
Campaign Intelligence execution
legacy Campaign file deletion before replacement parity
```

## 12. Current vs target data flow

### Current production pattern

Conceptually:

```text
BrandUceCampaignDetailPage
  → legacy Campaign shell API
  → persistence-shaped UCE DTOs
  → page/component-local lifecycle/status/readiness assumptions
  → direct REST mutations
  → local reload
```

Current production also contains tab/pipeline-owned operational state and legacy reporting/share assumptions.

### Target Campaign Page pattern

```text
CampaignPage
  → CampaignReadAdapter
  → canonical Campaign Page View DTO

User action
  → CampaignCommandAdapter
  → canonical command boundary
  → backend authoritative write/orchestration
  → authoritative re-read
  → Campaign Page View DTO refresh
```

Frontend consumes:

- resolved lifecycle;
- hydration/readiness outcome;
- supplied capabilities;
- workspace visibility/availability;
- supplied Intelligence states;
- lazy detail projections.

Frontend must not reconstruct:

- lifecycle legality;
- execution readiness;
- Outreach channel ownership;
- Campaign Intelligence;
- reporting calculations;
- backend idempotency/routing decisions.

## 13. Old frontend-owned logic that must not survive

- reducing Campaign lifecycle to old `ACTIVE`/`PAUSED` assumptions;
- page-owned status toggle legality;
- tab/pipeline ownership as Campaign information architecture;
- legacy UCE persistence-shaped DTOs as Campaign Page state;
- Product/Brief readiness inferred from old shell counts;
- frontend-generated Share URL/tracking business logic;
- Campaign-owned Collaboration lifecycle;
- legacy reporting refresh/calculation semantics as canonical reporting;
- frontend-created Intelligence/recommendation conclusions.

## 14. Integration blockers / required decisions

### Blocker 1 — Lifecycle mapping

Production uses:

```text
DRAFT | ACTIVE | PAUSED | COMPLETED | ARCHIVED
```

Canonical Campaign uses:

```text
DRAFT | PUBLISHED | LIVE | PAUSED | COMPLETED | ARCHIVED
```

Do not solve this by renaming `ACTIVE` to `LIVE` in React.

An explicit backend/read mapping and authoritative transition model is required so `PUBLISHED` and `LIVE` remain semantically distinct and Campaign Page hydration can correctly represent Product Setup / Brief Setup / operational states.

### Blocker 2 — Applicant model integration

Production Applicants are currently Collaboration-shaped while canonical Campaign Applicants are Application/Snapshot-shaped.

Production integration must introduce the canonical Campaign Application boundary. Downstream Collaboration creation/reference, if triggered by approval, remains backend-owned and Collaboration-owned.

### Blocker 3 — Campaign Page API/read contract

Current production shell/API payloads are not the canonical Campaign Page View DTO.

The production integration needs a real read/adapter boundary. Frontend must not fabricate missing canonical fields from unrelated legacy values.

### Deferred boundary — Campaign Intelligence

Campaign Intelligence projections remain unavailable/supplied boundaries until the Intelligence implementation exists.

This is not a reason to put AI logic in Campaign React.

## 15. Shared primitive decisions

Reuse production Aurora primitives where suitable:

- Button
- TextField / form primitives
- Card
- Alert
- Badge / Chip
- Toggle
- Toast
- existing SideDrawer implementation

Do not preserve the old operational Tabs just because the Tabs primitive exists. Tabs remain valid only where the product relationship is genuinely peer-view navigation.

AppShell owns global breadcrumb/current-page context. Campaign components should not create a competing page-level breadcrumb unless there is a true nested-navigation requirement.

## 16. Dependency-aware migration order

Recommended execution order:

```text
0. Resolve/freeze production-to-canonical lifecycle and API/read-command mapping
   ↓
1. Add canonical Campaign Page read/command adapter + production-facing view/action types
   ↓
2. Replace Campaign detail composition root while preserving AppShell/routes
   ↓
3. Implement capability/hydration-driven Campaign Header + Products & Briefs readiness
   ↓
4. Reconcile Product/Brief detail and Add Product/Add Brief integrations needed by page readiness
   ↓
5. Replace Discovery workspace
   ↓
6. Add Creator Card + Campaign-context Creator Profile
   ↓
7. Replace Applicants workspace and explicit downstream Collaboration integration boundary
   ↓
8. Adapt Share + add Outreach boundary
   ↓
9. Replace Reporting composition
   ↓
10. Add Campaign Copilot unavailable/loading/supplied projection states
   ↓
11. Reconcile Create/Edit Campaign against the canonical definition/runtime
   ↓
12. End-to-end functional verification
   ↓
13. DS5 targeted audit
   ↓
14. Targeted Stitch visual refinement
   ↓
15. Retire obsolete legacy Campaign files only after parity/regression validation
```

## 17. Legacy file retirement rule

RETIRE does **not** mean delete immediately.

Legacy files should remain until:

1. replacement production path is integrated;
2. canonical behavior/state parity is verified;
3. no retained flow still imports the legacy file/type;
4. regression tests/build/runtime smoke pass;
5. developer/Codex explicitly confirms safe removal.

This is especially important for old UCE contracts/API consumers because retained Create/Add flows may temporarily depend on legacy types during staged migration.

## 18. Phase 3 completion criterion

Phase 3 planning is complete when:

- this production migration map is reviewed/frozen;
- lifecycle/API/Application integration blockers are explicitly resolved or assigned to the production backend integration step;
- the developer/Codex implementation sequence uses bounded AUDIT → PLAN → IMPLEMENT → VERIFY tasks;
- no broad merge instruction is used;
- production AppShell and mature retained workflows remain protected;
- obsolete Campaign architecture is retired only after validated replacement.

This document is the production-code mapping layer. Product behavior remains owned by the canonical Campaign contracts.