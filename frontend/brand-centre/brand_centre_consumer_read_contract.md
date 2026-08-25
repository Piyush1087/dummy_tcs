# Brand Centre — Frontend Consumer Read Contract

**Status:** `PROPOSED_FOR_SYSTEMS_ARCHITECT_REVIEW`  
**Owner:** Frontend AI Worker  
**Authority baseline:** `Piyush1087/dummy_tcs@017dbceac494f0861ec9a6bea7af3129b70fa5cb`  
**Frontend reference audited:** `Piyush1087/creator-commerce-frontend-v2-clone@cbef201c571c6493c0a83ca4a6be12963faa959d`

## 1. Purpose

This contract defines the frontend-facing read projection required by Brand Centre V0. It is deliberately **not** a backend API contract and does not authorize routes or runtime implementation.

The permanent consumer chain is:

```text
canonical application/business state
+ canonical current Intelligence projection
        ↓
Brand Centre backend consumer projection
        ↓
frontend runtime validation / adapter
        ↓
workspace read models
        ↓
UI state selectors
        ↓
screen composition
```

React components must not consume the raw W1.0 persistence/current-component model directly and must not reconstruct Intelligence meaning from source metadata.

## 2. Recommended read architecture — hybrid

Recommend a **workspace aggregate + object/detail hybrid**, not one global endpoint and not raw object queries for every card.

Conceptual consumer capabilities:

```text
Brand Centre shell / workspace summaries
├── Overview
├── Brand
├── Offerings
├── Market
└── Recommendations

Focused detail reads
├── Brand section / semantic Object detail
├── Audience Persona detail
├── Offering detail
├── Location detail
└── later candidate/conflict detail when Product authorizes it
```

The backend may later expose workspace-specific routes such as:

```text
GET /brand-centre/overview
GET /brand-centre/brand
GET /brand-centre/offerings
GET /brand-centre/market
GET /brand-centre/recommendations
```

and, where genuinely needed, a semantic-object/detail capability. These route names are recommendations only.

### Why not one aggregate endpoint?

Overview, Brand, Offerings, Market and Recommendations have materially different domain owners, readiness, freshness and refresh cadence. A giant response would encourage page-wide loading, coupled invalidation and incorrect assumptions that all Brand Centre truth refreshes together.

### Why not expose raw W1.0 object projection everywhere?

W1.0 intentionally preserves component paths, generations, Evidence refs, protection and candidates. Most UI components need only selected current semantics plus bounded presentation metadata. The frontend adapter should hide runtime/persistence complexity while preserving distinctions that affect user behavior.

## 3. Shared frontend consumer primitives

Conceptual TypeScript:

```ts
type BrandCentreCurrentValue<T> =
  | { kind: "VALUE"; value: T }
  | { kind: "EXPLICIT_NULL" }
  | { kind: "INTENTIONALLY_ABSENT" }
  | { kind: "NO_CURRENT" }
  | { kind: "NOT_EVALUATED" }
  | { kind: "NOT_OWNED" };

type ConsumerReadiness = "NOT_READY" | "PARTIAL" | "READY";
type ResultReadiness = "READY" | "PARTIAL" | "NOT_READY";
type FrontendFreshness = "CURRENT" | "STALE" | "UNKNOWN" | "REFRESHING";

type AuthorityPresentation =
  | "observed"
  | "creator_shop"
  | "confirmed"
  | "protected"
  | "system_managed"
  | "mixed";

type CandidateNotice = {
  status: "NONE" | "AVAILABLE" | "CONFLICT";
  count: number;
  currentPreserved: boolean;
  summaryAvailable: boolean;
  rawCandidateVisible: boolean;
};

type BrandCentreField<T> = {
  semanticId: string;
  current: BrandCentreCurrentValue<T>;
  readiness: ConsumerReadiness;
  resultReadiness: ResultReadiness;
  freshness: FrontendFreshness;
  authority: AuthorityPresentation;
  editability: "EDITABLE" | "SUPPORT_CONTROLLED" | "READ_ONLY" | "POLICY_PENDING";
  candidate?: CandidateNotice;
  staleReason?: string;
  mutationRef?: {
    objectSemanticId: string;
    componentPath: string;
    expectedRevision: string | number;
  };
};
```

`ResultReadiness` represents only permanent/current generated-result readiness. `FAILED` is an execution outcome and must remain outside this type. A failed refresh may coexist with a retained current field whose `resultReadiness` remains `READY`, `PARTIAL` or `NOT_READY` as appropriate.

`mutationRef` is internal adapter metadata for a future write architecture; it is not visible UI content and does not authorize an edit control now.

## 4. Canonical business state vs Intelligence

Brand Centre is a composition over **two authority classes**, not an Intelligence-only page.

### Canonical application/business state

Examples:

- Brand name;
- canonical website/domain;
- confirmed Industry and category/sub-industry;
- primary country/geography anchor;
- collaboration/reporting currency basis;
- canonical social handles / connection status;
- canonical visual assets: logo, approved palette, approved fonts, approved reference images;
- canonical Locations;
- canonical Offerings and lifecycle/availability.

These remain owned by the application/backend and should be projected directly into the Brand Centre consumer model.

### Durable Intelligence

Brand Centre consumes the current projection of:

```text
Brand Expression
├── brand_description
├── positioning
├── value_proposition
├── brand_values
├── brand_personality
├── differentiation_and_proof
└── communication_profile

Audience
└── audience_personas

Visual Identity
└── visual_style_profile

Serviceability
└── serviceability_profile
```

The frontend must not promote Brand Preview synthesis into these permanent fields.

## 5. Brand workspace read model

```ts
type BrandCentreBrandWorkspaceReadModel = {
  brandId: string;
  workspaceReadiness: ConsumerReadiness;
  identity: BrandBusinessIdentityReadModel;
  details: BrandDetailsReadModel;
  visualIdentity: VisualIdentityReadModel;
  brandIdentity: BrandExpressionReadModel;
  audience: AudienceReadModel;
  locations: LocationsReadModel | null;
  serviceability: ServiceabilityReadModel;
};
```

### 5.1 Brand business identity

Project backend-owned anchors without pretending they are Brand Intelligence:

```ts
type BrandBusinessIdentityReadModel = {
  brandName: BrandCentreField<string>;
  website: BrandCentreField<{ url: string; displayDomain: string }>;
  industry: BrandCentreField<string>;
  category: BrandCentreField<string | null>;
  primaryGeography: BrandCentreField<string | null>;
  currency: BrandCentreField<string>;
  socialHandles: Array<{
    semanticId: string;
    platform: string;
    handle: string;
    connectionState?: string;
    field: BrandCentreField<string>;
  }>;
};
```

Support-controlled identity may render normally. The consumer projection should carry editability so UX can later provide `Contact support to change` without showing lock badges on every row.

### 5.2 Brand Expression

```ts
type BrandExpressionReadModel = {
  description: BrandCentreField<string>;
  positioning: BrandCentreField<string>;
  valueProposition: BrandCentreField<string>;
  values: BrandCentreCollectionField<BrandValueItem>;
  personality: BrandCentreCollectionField<BrandPersonalityItem>;
  differentiation: BrandCentreCollectionField<BrandDifferentiationItem>;
  communication: BrandCentreField<CommunicationProfile>;
};
```

Important granularity:

- `brand_description`, `positioning`, `value_proposition` can be independently nullable and independently authoritative/fresh;
- Brand Values and Personality use stable semantic IDs and item-level metadata;
- differentiation has subfield authority for the interpretation and independent item authority/freshness for proof points;
- communication carries independently authoritative tone traits, free-text guidance, communication constraints and primary language.

Do not flatten these into one `Brand DNA authority = AI` label.

### 5.3 Audience

Normal Brand Centre consumption is **ACTIVE Personas only**.

```ts
type AudiencePersonaReadModel = {
  semanticId: string;
  lifecycle: "ACTIVE";
  label: BrandCentreField<string>;
  summary: BrandCentreField<string>;
  keyCharacteristics: BrandCentreCollectionField<SemanticTextItem>;
  motivations: BrandCentreCollectionField<SemanticTextItem>;
  barriersOrConcerns: BrandCentreCollectionField<SemanticTextItem>;
  trustCredibilityNeeds: BrandCentreCollectionField<SemanticTextItem>;
  creatorCommunicationImplications: BrandCentreCollectionField<SemanticTextItem>;
  geographyContext?: BrandCentreField<unknown>;
};

type AudienceReadModel = {
  state: BrandCentreSectionState<AudiencePersonaReadModel[]>;
  personas: AudiencePersonaReadModel[];
};
```

Rules:

- `semanticId`, not label or array index, is React identity;
- 0, 1, 2 or 3 active Personas are all representable;
- 2–3 is a normal Product target, not a rendering prerequisite;
- one strong Persona can be a valid partial/ready bounded state;
- do not expose INACTIVE/SUPERSEDED history on the normal workspace unless later UX/Product explicitly needs history;
- Preview audience groups are not durable Persona IDs.

### 5.4 Visual Identity

The consumer contract must preserve this split:

```ts
type CanonicalVisualStateReadModel = {
  primaryLogo: BrandCentreField<VisualAssetRef | null>;
  secondaryMarks: BrandCentreCollectionField<VisualAssetRef>;
  palette: BrandCentreCollectionField<PaletteEntry>;
  headingFont: BrandCentreField<FontRef | null>;
  bodyFont: BrandCentreField<FontRef | null>;
  referenceImages: BrandCentreCollectionField<VisualAssetRef>;
};

type DerivedVisualStyleReadModel = {
  summary: BrandCentreField<string>;
  styleTraits: BrandCentreCollectionField<SemanticTextItem>;
  imageryStyle: BrandCentreField<unknown>;
  graphicTreatment: BrandCentreField<unknown>;
  visualConstraints: BrandCentreCollectionField<SemanticTextItem>;
};

type VisualIdentityReadModel = {
  canonical: CanonicalVisualStateReadModel;
  style: BrandCentreSectionState<DerivedVisualStyleReadModel>;
};
```

A derived style trait must never cause the UI to imply that a palette/font/constraint is approved. Hard visual constraints require explicit accepted authority; the derived style profile is interpretation.

### 5.5 Locations and Serviceability

Locations are canonical business entities. Serviceability is derived Brand-level Intelligence. Keep them separate:

```ts
type ServiceabilityReadModel = {
  state: BrandCentreSectionState<{
    overallScope: BrandCentreField<"LOCAL" | "REGIONAL" | "COUNTRY" | "MULTI_COUNTRY" | "GLOBAL">;
    coverageIsHeterogeneous: BrandCentreField<boolean>;
    serviceableMarkets: BrandCentreCollectionField<ServiceableMarketReadModel>;
    mixedCoverageNote: BrandCentreField<string>;
  }>;
};
```

`serviceability_basis` is primarily traceability metadata and should not be rendered as a normal workspace list. It may support future explanation/detail surfaces.

Never substitute Audience geography or demand geography when Serviceability is `NOT_READY` or partial.

## 6. Offerings workspace read model

Offerings are canonical business objects enriched by Product Intelligence. The frontend contract should converge AI-discovered and manually-created Offerings rather than create separate collections.

```ts
type BrandCentreOfferingsReadModel = {
  workspaceReadiness: ConsumerReadiness;
  groups: Array<{
    groupId: string;
    label: string;
    offerings: OfferingSummaryReadModel[];
  }>;
};

type OfferingSummaryReadModel = {
  offeringId: string;
  kind: string;
  lifecycle: "DRAFT" | "INCOMPLETE" | "ACTIVE" | "PAUSED" | "INACTIVE";
  name: string;
  description?: string | null;
  image?: VisualAssetRef | null;
  destination?: string | null;
  priceSummary?: string | null;
  freshness: FrontendFreshness;
  consumerReadiness: ConsumerReadiness;
};
```

Normal list surfaces are browse/understand/navigate. Edit/pause/remove belong on Offering detail. Only ACTIVE Offerings are eligible for new Campaign planning, but the frontend does not independently decide lifecycle eligibility.

The future Offering detail consumer can expose creator communication ingredients and claim constraints, but must not turn into a Campaign Brief.

## 7. Overview read model

Overview owns no independent truth.

```ts
type BrandCentreOverviewReadModel = {
  perspective: SectionReference<CreatorShopPerspective>;
  observations: SectionReference<ObservationSummary[]>;
  recommendations: SectionReference<RecommendationSummary[]>;
  portfolio?: SectionReference<PortfolioSnapshot>;
  brandContext: SectionReference<BrandContextSummary>;
  offeringContext: SectionReference<OfferingContextSummary>;
  marketContext: SectionReference<MarketContextSummary>;
};
```

Every semantic item must retain an owning-domain reference. The frontend must not persist Overview-composed facts as a second source of truth.

Observation summaries are eligible only when their owning synthesis contract has already decided they are grounded/material/current enough. The frontend does not implement observation thresholds.

## 8. Market read model

The exact Market Intelligence output contract is not yet frozen enough for frontend field-level semantics. Therefore V0 frontend architecture should freeze **the envelope**, not invent Market conclusions:

```ts
type BrandCentreMarketReadModel = {
  workspaceReadiness: ConsumerReadiness;
  ownBrand: BrandCentreSectionState<MarketOwnedBrandSummary>;
  instagram: BrandCentreSectionState<InstagramMarketSummary>;
  performance: BrandCentreSectionState<PerformanceMarketSummary>;
  competitors: BrandCentreSectionState<CompetitorMarketSummary[]>;
  observations: BrandCentreSectionState<ObservationSummary[]>;
};
```

Rules:

- competitor enrichment may be NOT_READY while the base Market remains useful;
- website + own Instagram is the current base case;
- website-only `base 0` remains a Product/Intelligence dependency and must not be fabricated in frontend;
- do not expose generic Share of Voice without a defensible denominator/scope supplied by Intelligence.

## 9. Recommendations read model

As with Market, freeze only consumer state and Product-visible decision semantics until Creator Strategy output contracts are complete:

```ts
type BrandCentreRecommendationsReadModel = {
  workspaceReadiness: ConsumerReadiness;
  evaluation: {
    freshness: FrontendFreshness;
    activity?: "NONE" | "REFRESHING" | "TEMPORARILY_UNAVAILABLE";
  };
  recommendations: RecommendationSummary[];
  noNewCampaign?: {
    active: boolean;
    explanation?: string;
  };
};
```

Product-visible decision actions remain:

```text
Accept
Adjust
Not now
Not for us
Refresh recommendations
```

The read architecture should preserve semantic IDs and future mutation refs, but this contract does not define action APIs or permissions. `Accept` must eventually create a Campaign Draft, not publish a Campaign.

## 10. Candidate/discrepancy projection

Normal workspace read models receive only a bounded notice:

```ts
type CandidateNotice = {
  status: "NONE" | "AVAILABLE" | "CONFLICT";
  count: number;
  currentPreserved: boolean;
  summaryAvailable: boolean;
  rawCandidateVisible: boolean;
};
```

Default `rawCandidateVisible = false` pending Gate C/Product policy.

Where current is `BRAND_CONFIRMED` or `SUPPORT_CONTROLLED`, candidate state never replaces the displayed current value. Detail surfaces may later request candidate content under an explicitly authorized read/mutation policy.

## 11. Mixed-generation projection

`mixed_generation=true` is valid and should normally remain implementation metadata.

Do not provide one misleading Object-wide:

- source;
- generated timestamp;
- authority;
- freshness.

Instead:

- aggregate for display only when all relevant visible components agree;
- otherwise use `mixed` presentation or omit the aggregate label;
- retain per-component metadata for fields/items whose authority, freshness, candidate state or editability affects behavior;
- never expose generation IDs to ordinary Brand users.

## 12. Loading/cache semantics

Workspace queries cache independently.

Recommended behavior:

1. first visit with no cache → request `LOADING`;
2. successful validated response → `READY` request state regardless of section semantic readiness;
3. background revalidation → keep current workspace visible;
4. stale Intelligence → retain current values while revalidation/reevaluation occurs;
5. request error with prior cache → retain prior data with bounded request-error treatment;
6. request error without data → workspace-level error treatment;
7. Intelligence NOT_READY → semantic learning/not-ready state, not network error.

Do not couple cache invalidation across all Brand Centre workspaces merely because one underlying Object changes.

## 13. Error and failed-execution boundary

Frontend-safe categories:

- `TRANSPORT`
- `AUTHORIZATION`
- `MALFORMED_RESPONSE`
- `TEMPORARILY_UNAVAILABLE`

Intelligence `NOT_READY`, `PARTIAL` and `STALE` are not API errors. `FAILED` is not a current result-readiness value; a failed execution/refresh is represented as runtime/activity or safe error metadata.

Required preservation examples:

```text
current value READY + refresh execution fails
→ retain READY current value
→ runtime/error hint may appear
→ resultReadiness remains READY

no current value + execution unavailable
→ consumer may be NOT_READY
→ runtimeActivity = TEMPORARILY_UNAVAILABLE when backend supplies it
→ failure is not EXPLICIT_NULL and does not create resultReadiness=FAILED

stale current value + refresh fails
→ stale current value remains visible
→ prior READY/PARTIAL/NOT_READY result readiness is preserved
→ failed refresh does not erase current state
```

Processor/provider names, internal execution codes and raw backend failures must not reach presentation components.

## 14. Backend consumer-projection requirements

A later backend implementation should expose enough information for the frontend adapter to preserve:

- workspace and section consumer readiness;
- current result readiness (`READY | PARTIAL | NOT_READY`) where useful;
- current value state;
- freshness and safe stale reason;
- authority at meaningful component/item granularity;
- support/editability policy supplied by application Product authority;
- stable semantic IDs;
- candidate/discrepancy summary;
- mixed-generation indication;
- expected revision/component path only for future mutation-ready detail reads;
- neutral runtime activity hint when Product wants learning/refreshing/unavailable presentation;
- consumer-safe execution failure/unavailability metadata separately from current result readiness when needed.

It should not require normal frontend consumers to understand processor executions, attempts, leases, Evidence payloads, model/provider identities or database records.

## 15. Legacy frontend boundary

The existing frontend `BrandCentreDnaResponse`, `BrandCentreIntelligenceResponse` and Planner DTOs are compatibility/reference shapes only. They combine old Brand DNA, catalogue, budget, account infrastructure, growth-impact/leak scoring and Campaign Planner semantics in ways that do not match V0 Brand Centre ownership.

The reusable implementation idea is the authenticated fetch/query shell and background-refresh behavior, not those semantic DTOs.

## 16. Product / authority dependencies not resolved here

The following remain outside this frontend contract:

1. Gate D edit/permission policy by field/object;
2. candidate raw-value visibility and accept/reject policy;
3. final Market field/output contract including website-only base mode;
4. final Creator Strategy / Recommendation read contract;
5. final Observation output/detail semantics;
6. serviceability Brand-edit/confirmation permission, if any;
7. exact UX copy, visual hierarchy, screen families and responsive composition from the UI/UX Worker.

None of these gaps requires the frontend to invent alternative semantics now.
