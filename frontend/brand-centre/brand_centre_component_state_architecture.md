# Brand Centre — Component & State Architecture

**Status:** `PROPOSED_FOR_SYSTEMS_ARCHITECT_REVIEW`  
**Owner:** Frontend AI Worker  
**Authority baseline:** `Piyush1087/dummy_tcs@017dbceac494f0861ec9a6bea7af3129b70fa5cb`  
**Frontend reference audited:** `Piyush1087/creator-commerce-frontend-v2-clone@cbef201c571c6493c0a83ca4a6be12963faa959d`

## 1. Responsibility boundary

This architecture deliberately stops before screen composition.

```text
backend consumer projection
        ↓
runtime schema validation
        ↓
workspace adapter
        ↓
query/cache state
        ↓
semantic selectors
        ↓
workspace controller
        ↓
UX-owned presentation components
```

Frontend adapters may normalize transport/runtime complexity but must not synthesize Brand, Audience, Market or Recommendation meaning.

## 2. Proposed module structure

Future production implementation should converge toward a feature structure conceptually like:

```text
src/features/brand-centre/
├── api/
│   ├── brand-centre-overview-client.ts
│   ├── brand-centre-brand-client.ts
│   ├── brand-centre-offerings-client.ts
│   ├── brand-centre-market-client.ts
│   └── brand-centre-recommendations-client.ts
├── contracts/
│   ├── brand-centre-shared.contracts.ts
│   ├── brand-centre-overview.contracts.ts
│   ├── brand-centre-brand.contracts.ts
│   ├── brand-centre-offerings.contracts.ts
│   ├── brand-centre-market.contracts.ts
│   └── brand-centre-recommendations.contracts.ts
├── schemas/
│   └── corresponding runtime schemas
├── adapters/
│   ├── map-brand-workspace.ts
│   ├── map-offerings-workspace.ts
│   ├── map-market-workspace.ts
│   ├── map-recommendations-workspace.ts
│   └── map-intelligence-component-meta.ts
├── queries/
│   ├── use-brand-centre-overview.ts
│   ├── use-brand-centre-brand.ts
│   ├── use-brand-centre-offerings.ts
│   ├── use-brand-centre-market.ts
│   └── use-brand-centre-recommendations.ts
├── selectors/
│   ├── select-section-presentation-state.ts
│   ├── select-authority-presentation.ts
│   └── select-workspace-readiness.ts
└── components/
    └── UX-owned workspace/detail compositions later
```

File names are implementation guidance, not frozen source layout.

## 3. State ownership

### Network/query layer owns

- initial request loading;
- background revalidation;
- transport/API errors;
- cached previous projection;
- request cancellation/deduplication.

It does **not** own Intelligence readiness.

### Workspace adapter owns

- mapping backend current-value semantics to frontend `VALUE / EXPLICIT_NULL / INTENTIONALLY_ABSENT / NO_CURRENT / NOT_EVALUATED / NOT_OWNED`;
- authority presentation mapping;
- safe freshness mapping;
- component/item stable identity;
- bounded candidate summary;
- mixed-generation preservation;
- removing internal runtime/persistence metadata from component props.

It does **not** decide whether a derived statement is true.

### Semantic selectors own

Pure derivation of presentation states such as:

```text
CONTENT_READY
CONTENT_PARTIAL
CONTENT_STALE
CONTENT_REFRESHING
INTELLIGENCE_NOT_READY
REQUEST_ERROR_WITH_CURRENT
REQUEST_ERROR_EMPTY
```

Selectors must be deterministic and side-effect free.

### Workspace controller owns

- which workspace query is active;
- orchestration of independent section/detail queries;
- navigation between list/section/detail views;
- focus/loading transitions later defined by UX;
- future mutation optimistic/pessimistic coordination only after mutation authority is frozen.

It must not poll processor jobs directly unless a future backend consumer contract explicitly requires a neutral refresh activity capability.

## 4. Query/cache architecture

Brand Centre should not repeat the current legacy pattern of coupling UI to raw job polling every two seconds.

Recommended query identity:

```text
brand-centre:overview:<brandId>
brand-centre:brand:<brandId>
brand-centre:offerings:<brandId>
brand-centre:market:<brandId>
brand-centre:recommendations:<brandId>
brand-centre:object:<brandId>:<semanticObjectId>
brand-centre:offering:<brandId>:<offeringId>
brand-centre:persona:<brandId>:<personaSemanticId>
```

Cache invalidation should follow consumer/domain impact, not a whole-Brand-Centre reset.

Examples:

- Brand positioning edit → invalidate Brand workspace and affected Overview/Recommendation projections when backend confirms impact;
- Offering pause → invalidate Offerings and affected Overview/Recommendations, not Visual Identity;
- new Instagram learning → Market/Overview/Recommendations can revalidate without replacing Brand canonical Details;
- Location change → Brand/Serviceability and feasibility-dependent projections, not all Brand Expression.

The frontend does not independently reproduce the Intelligence dependency graph; backend consumer invalidation/event semantics should eventually tell the client what is stale or changed.

## 5. Workspace controller contracts

### Overview

Consumes selected current outputs only. It is a composition controller, never an alternative state store.

Component-level interfaces should accept domain references/semantic IDs so drill-down returns to the owning workspace.

### Brand

Controller sections:

```text
Brand identity / Details
Visual Identity
Brand Identity
Audience Personas
Business Locations [conditional]
Serviceability context [composed where UX places it]
```

Product authority freezes semantic grouping, not whether these become stacked sections or secondary navigation. The controller must therefore avoid encoding tab-specific assumptions.

### Offerings

Controller supports:

```text
list/grouping
→ Offering detail
```

No edit/delete/regenerate actions on every list card. Future mutations live in detail/controller boundary.

### Market

Controller loads independent sources/sections so unavailable competitor enrichment does not block owned Brand/Instagram/Performance context.

### Recommendations

Controller supports current recommendation list, valid `NO NEW CAMPAIGN`, background reevaluation state and future decision mutations. It must not turn Recommendation acceptance into Campaign publication.

## 6. Component metadata boundary

Avoid two extremes:

1. stripping all metadata and losing protection/freshness/conflict behavior;
2. passing W1.0 current-component records into every UI component.

Use bounded semantic wrappers.

```ts
type FieldViewState<T> = {
  semanticId: string;
  current: CurrentValue<T>;
  readiness: ConsumerReadiness;
  freshness: FrontendFreshness;
  authority: AuthorityPresentation;
  editability: Editability;
  candidate?: CandidateNotice;
  mutationRef?: MutationRef;
};
```

For a simple static summary, the adapter may reduce this further to `value + presentationState` if no independently meaningful metadata is lost.

Keep full component metadata for:

- Brand Expression independently editable scalars;
- Brand Values / Personality items;
- differentiation vs proof points;
- Communication items/subfields;
- Persona fields/items;
- visual constraints vs descriptive style traits;
- Serviceability market items when individually stale/conflicted;
- any current component with candidate/discrepancy state.

## 7. Collection architecture

All semantically durable collections use stable IDs.

Generic contract:

```ts
type SemanticCollection<T extends { semanticId: string }> = {
  current: CurrentValue<T[]>;
  readiness: ConsumerReadiness;
  freshness: FrontendFreshness;
  items: T[];
};
```

Rules:

- array index never becomes identity;
- order can be presentation order only;
- no empty slots for target density;
- empty collection remains distinguishable from no current collection;
- independently protected items can coexist with refreshed items;
- mixed-generation collection is valid.

## 8. Audience component model

Normal workspace selector:

```text
all durable Personas
→ lifecycle filter ACTIVE
→ stable semantic IDs
→ preserve field/item partiality
→ present 0/1/2/3 active Personas truthfully
```

Do not use label as key.

Do not expose CANDIDATE as ordinary Persona.

Do not fetch history merely to render the normal Brand workspace. A future Persona detail/history route can request INACTIVE/SUPERSEDED lineage if Product requires it.

## 9. Visual Identity component model

Use two sibling state owners:

```text
CanonicalVisualStateController
DerivedVisualStyleController
```

They may render in one UX section but remain independent contracts.

`CanonicalVisualStateController` consumes backend business state: approved assets/palette/fonts/reference imagery.

`DerivedVisualStyleController` consumes `visual_style_profile`.

Invariant:

```text
DerivedVisualStyleController
cannot mutate or semantically promote
CanonicalVisualStateController
```

This avoids the dangerous UI inference that repeated observed styling is an approved Brand constraint.

## 10. Serviceability component model

Serviceability should consume:

- canonical Location summaries separately;
- canonical Offering availability separately where relevant;
- derived `serviceability_profile` as Brand-level context.

If `serviceability_profile` is partial or not ready, retain canonical Locations as their own business facts, but **do not** present those Locations alone as proof of the complete Brand serviceability envelope.

Audience geography must never be the fallback.

## 11. Loading architecture

Recommended component behavior:

### First load

No cached projection → skeleton/loading treatment scoped to the workspace/section.

### Background request

Cached projection exists → retain it; no skeleton replacement.

### Intelligence learning

Request has succeeded but consumer state is not ready → semantic learning/not-ready treatment, not request spinner.

### Intelligence refreshing

Current value remains visible; subtle refresh treatment if UX chooses.

### Transport failure during background refresh

Retain previous valid projection; present bounded request issue only when actionable/material.

This distinction is required for a Brand Centre that progressively matures Intelligence without feeling unstable.

## 12. Error architecture

Adapters should produce only frontend-safe categories:

```text
TRANSPORT
AUTHORIZATION
MALFORMED_RESPONSE
TEMPORARILY_UNAVAILABLE
```

Components must never depend on:

- provider error code;
- processor ID;
- job state;
- model name;
- internal exception message.

A malformed response should fail closed at the consumer boundary rather than render partially unvalidated metadata.

## 13. Runtime activity architecture

The assignment requires UI support for learning, refreshing and temporary unavailability without coupling to jobs.

Recommended neutral backend-to-frontend hint:

```ts
type ConsumerActivity =
  | "NONE"
  | "LEARNING"
  | "REFRESHING"
  | "TEMPORARILY_UNAVAILABLE";
```

This hint is optional and consumer-scoped. It should be derived server-side from runtime state if needed.

Frontend must not map W1.0 execution states such as `QUEUED`, lease/attempt state or processor-specific phases directly into product UI.

## 14. Candidate/discrepancy architecture

Read contract supports summary now and mutation later.

```ts
type CandidateNotice = {
  status: "NONE" | "AVAILABLE" | "CONFLICT";
  count: number;
  currentPreserved: boolean;
  summaryAvailable: boolean;
  rawCandidateVisible: boolean;
};
```

Future mutation-ready detail state may carry:

```ts
type CandidateMutationRef = {
  candidateId: string;
  componentPath: string;
  expectedRevision: string | number;
};
```

No accept/reject control should exist until Product/Gate C/D authority explicitly permits it.

## 15. Mutation-readiness architecture

Read components should already be able to receive opaque mutation metadata without rendering it.

Future writes should use expected revision / compare-and-swap semantics and then invalidate/refetch the affected consumer projection.

Frontend must never optimistically claim a `BRAND_CONFIRMED` transition before backend acceptance.

Recommended future action lifecycle:

```text
read current + expected revision
→ submit bounded mutation
→ backend validates authority/CAS
→ accepted current projection returned or refetched
→ UI updates from authoritative projection
```

## 16. Responsive architecture

No desktop-specific semantic types.

The same workspace model must support:

- desktop sections / secondary navigation;
- mobile stacked sections / detail navigation;
- different disclosure density;
- possible bottom-sheet/detail patterns later defined by UX.

State selectors cannot branch on viewport to change semantic readiness, authority or missing-data meaning.

## 17. Existing frontend classification

Audited baseline: `creator-commerce-frontend-v2-clone/development@cbef201c571c6493c0a83ca4a6be12963faa959d`.

| Existing asset | Classification | Reason / future use |
|---|---|---|
| authenticated application route/shell infrastructure | `REUSE` | Brand Centre remains an authenticated app destination; global shell should not be reinvented. |
| `src/pages/brand/brand-centre/brand-centre-page.tsx` | `REPLACE` | Owns legacy DNA / Intelligence / Planner tab composition and raw job polling, incompatible with V0 workspace IA. |
| `brand-centre-budget-page.tsx` | `COMPATIBILITY_ONLY` | Commercial/budget concepts remain relevant, but V0 does not define budget as a top-level Brand Centre workspace and quarterly Commercial Intelligence supersedes the monthly DNA-style model. |
| `BrandCentreTabs.tsx` | `REPLACE` | Existing tab identities are legacy; interaction primitive may inspire later UX but labels/state model must be reconciled to Overview/Brand/Offerings/Market/Recommendations. |
| `BrandDNA.tsx` | `LEGACY_REFERENCE_ONLY` | Brand DNA is explicitly not the new user-facing Intelligence model; some content rendering patterns may inform implementation only. |
| `BrandDnaCatalogSections.tsx` | `LEGACY_REFERENCE_ONLY` | Mixes Offerings/Offers/Competitors under DNA; new ownership separates Offerings and Market. |
| `AccountInfrastructure.tsx` | `LEGACY_REFERENCE_ONLY` | Billing/team/Meta administration belongs outside Brand Centre except contextual connection status. |
| `BudgetManagement.tsx` / `BudgetAdjustment.tsx` | `COMPATIBILITY_ONLY` | Budget editing/display may later map to Commercial Intelligence/product policy, but current monthly percentage model is not canonical V0. |
| `DeepScanStatusBanner.tsx` | `REPLACE` | UI should consume consumer readiness/activity, not legacy deep-scan job semantics. |
| `IntelligenceGaps.tsx` | `LEGACY_REFERENCE_ONLY` | Growth leaks/lift scoring is not frozen Observation/Market/Recommendation authority. |
| `CampaignPlanner.tsx` | `LEGACY_REFERENCE_ONLY` | Campaign Planner semantics are superseded by Creator Strategy Recommendations; recommendation acceptance only creates a draft. |
| `BrandCentreApiJsonPanel.tsx` | `COMPATIBILITY_ONLY` | Generic debug/API rendering can remain diagnostic but is not a Product surface. |
| `use-brand-centre-api-json.ts` | `REUSE_WITH_RECONCILIATION` | Generic enabled/fetch/reload pattern useful, but must retain previous data explicitly, classify safe errors, and separate background loading from semantic readiness. |
| `use-brand-centre-dna-data.ts` | `REPLACE` | Couples legacy DNA/budget/account/scan endpoints and old view model. |
| `brand-centre-client.ts` | `REPLACE` for V0 consumer API surface | Auth/fetch helper pattern reusable; DNA/leaks/planner routes and semantic DTOs are legacy. |
| `brand-centre.contracts.ts` | `REPLACE` | Current contracts encode DNA, deep scan, leak scoring, SOV and planner semantics rather than frozen current-projection consumer contracts. |
| `types.ts` | `REPLACE` | Current `BrandCentreViewModel` collapses data, budget, account, catalogue and presentation into one legacy view model. |
| `brand-centre.css` | `LEGACY_REFERENCE_ONLY` | Visual composition awaits UI/UX authority and later Stitch/reconciliation. |
| canonical Brand workspace consumer/state architecture | `NOT_FOUND` | Must be implemented after Systems Architect/UX review. |
| canonical Overview consumer/state architecture | `NOT_FOUND` | No V0 Overview composition exists. |
| canonical Offerings workspace consumer/state architecture | `NOT_FOUND` | Existing catalogue sections are not canonical Offering workspace. |
| canonical Market workspace consumer/state architecture | `NOT_FOUND` | Existing Intelligence leaks/SOV are not a frozen Market contract. |
| canonical Recommendations workspace consumer/state architecture | `NOT_FOUND` | Existing Planner is not Creator Strategy Recommendation authority. |

## 18. Migration principle

Do not rewrite everything because the semantics changed.

Reuse:

- application shell and route infrastructure;
- authentication headers/session infrastructure;
- Aurora primitives;
- generic request/reload mechanics after state-model cleanup;
- existing accessible/responsive app-shell behavior where correct.

Replace/reconcile:

- semantic contracts;
- workspace IA;
- state adapters;
- legacy job polling;
- Brand DNA aggregation;
- leak/SOV/planner assumptions;
- monthly budget coupling inside Brand workspace.

## 19. UX collaboration dependencies

Frontend architecture is intentionally waiting on the UI/UX Worker for:

- exact screen inventory/families;
- Overview hierarchy;
- Brand section disclosure/detail model;
- Offerings grouping/detail composition;
- Market hierarchy under partial source availability;
- Recommendation decision-state composition;
- candidate/stale/confirmed visual language;
- empty/learning/refreshing user-facing copy;
- responsive transformation and focus behavior.

UX should consume this state contract rather than redefine semantic readiness or authority.

## 20. Implementation gate

Production frontend implementation should not begin from this proposal alone.

Recommended gate sequence:

```text
Systems Architect review of FE consumer/state architecture
        ↓
UI/UX contract reconciliation
        ↓
backend consumer/API contract freeze
        ↓
frontend runtime schemas/adapters
        ↓
screen implementation
        ↓
Stitch visual reconciliation where authorized
```

Runtime processor implementation may proceed in parallel upstream because this frontend contract is based on frozen semantics, not processor/job mechanics.
