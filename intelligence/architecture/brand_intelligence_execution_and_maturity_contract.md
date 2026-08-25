# Brand Intelligence Execution and Maturity Contract

**Version:** 0.1  
**Status:** PROPOSED_FOR_SYSTEMS_ARCHITECT_FREEZE  
**Owner:** Intelligence Engine  
**Repository baseline:** `Piyush1087/dummy_tcs` `main@20c95028e150ab4543398300b7f0ba94aefb1a16`

## 1. Purpose

This contract reconciles the four permanent Brand Intelligence branches into one progressive execution and maturity architecture. It defines semantic execution readiness, branch parallelism, canonical-state dependencies, partial-result behavior, invalidation, freshness, consumer-scoped readiness, runtime sequencing, persistence readiness, and current legacy Identity retirement implications.

It does not implement runtime, select providers/models, create persistence schema, modify Product Authority, or retire Identity.

Permanent topology:

```text
Brand Intelligence
├── Brand Expression
├── Audience
├── Visual Identity
└── Serviceability
```

Legacy `Identity` remains `FROZEN_REFERENCE + COMPATIBILITY_ONLY` and is not part of the permanent topology.

## 2. Permanent execution inventory

| Branch | Processor | Type | Owned Object(s) | Processor | Reasoning | Output | Evidence | Semantic maturity | Runtime | Persistence |
|---|---|---|---|---|---|---|---|---|---|---|
| Brand Expression | `brand_meaning` | AI_REASONING | `brand_description`, `positioning`, `value_proposition` | FROZEN | FROZEN | FROZEN | FROZEN | SEMANTIC_STACK_COMPLETE | IMPLEMENTATION_NOT_FOUND | implementation not found |
| Brand Expression | `brand_character` | AI_REASONING | `brand_values`, `brand_personality` | FROZEN | FROZEN | FROZEN | FROZEN | SEMANTIC_STACK_COMPLETE | IMPLEMENTATION_NOT_FOUND | implementation not found |
| Brand Expression | `brand_differentiation` | AI_REASONING | `differentiation_and_proof` | FROZEN | FROZEN | FROZEN | FROZEN | SEMANTIC_STACK_COMPLETE | IMPLEMENTATION_NOT_FOUND | implementation not found |
| Brand Expression | `brand_communication` | HYBRID | `communication_profile` | FROZEN | FROZEN | FROZEN | FROZEN | SEMANTIC_STACK_COMPLETE | IMPLEMENTATION_NOT_FOUND | implementation not found |
| Serviceability | `serviceability_synthesis` | HYBRID | `serviceability_profile` | FROZEN | FROZEN | FROZEN | FROZEN | SEMANTIC_STACK_COMPLETE | IMPLEMENTATION_NOT_FOUND | implementation not found |

Branches with no permanent processor yet:

| Branch | Durable Object | Current maturity |
|---|---|---|
| Audience | `audience_personas` | OBJECT_ONLY |
| Visual Identity | `visual_style_profile` | OBJECT_ONLY |

`OBJECT_ONLY` means the frozen Object semantics are accepted but processor definition, reasoning, output validation and Evidence contracts are absent.

## 3. Complete permanent Object inventory

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

All ten permanent Objects are represented by this execution architecture.

## 4. Input classification model

Processor inputs are classified as:

- `CANONICAL_APPLICATION_STATE`
- `CANONICAL_OFFERING_STATE`
- `CANONICAL_LOCATION_STATE`
- `OTHER_INTELLIGENCE_OBJECT`
- `OBSERVED_EVIDENCE`
- `BRAND_USER_INPUT`
- `OPTIONAL_CONTEXT`
- `LEGACY_COMPATIBILITY_ONLY`

Canonical state remains application/backend-owned and is referenced, not recreated as Intelligence.

## 5. Canonical input/dependency map

### 5.1 `brand_meaning`

`CANONICAL_APPLICATION_STATE`
- Brand name
- canonical domain / website
- confirmed Industry
- authoritative category/sub-industry when available

`OBSERVED_EVIDENCE`
- `owned_website.brand_company_context`
- `owned_website.brand_messaging`
- `owned_website.offering_context`

`BRAND_USER_INPUT`
- Brand user input and confirmations

`CANONICAL_OFFERING_STATE`
- none as a hard input; Offering context can inform Brand-level meaning, but Offering truth is not copied into Brand Objects.

### 5.2 `brand_character`

`CANONICAL_APPLICATION_STATE`
- Brand name
- confirmed Industry
- authoritative category/sub-industry when available

`OBSERVED_EVIDENCE`
- `owned_website.brand_company_context`
- `owned_website.brand_messaging`

`BRAND_USER_INPUT`
- Brand user input and confirmations

`OPTIONAL_CONTEXT`
- owned Instagram Brand context when sufficiently representative

### 5.3 `brand_differentiation`

`CANONICAL_APPLICATION_STATE`
- Brand name
- domain
- confirmed Industry
- authoritative category/sub-industry when available

`CANONICAL_OFFERING_STATE`
- canonical Offering facts when relevant, by reference only

`OBSERVED_EVIDENCE`
- Brand company context
- Brand messaging
- Offering context
- explicit factual proof/claim Evidence

`BRAND_USER_INPUT`
- Brand-provided or confirmed differentiator/proof context

Canonical Offering facts are supporting facts, not Product Intelligence output dependencies and not duplicated inside Brand Intelligence.

### 5.4 `brand_communication`

`CANONICAL_APPLICATION_STATE`
- Brand name
- confirmed Industry

`OBSERVED_EVIDENCE`
- `owned_website.brand_messaging`
- `owned_website.brand_company_context`
- observed Brand communication-language signals

`BRAND_USER_INPUT`
- Brand communication input/confirmation

`OPTIONAL_CONTEXT`
- owned Instagram context

`LEGACY_COMPATIBILITY_ONLY`
- legacy `identity.primary_language` during migration reconciliation only

### 5.5 `serviceability_synthesis`

`CANONICAL_APPLICATION_STATE`
- primary Brand geography/country anchor

`CANONICAL_LOCATION_STATE`
- active canonical Locations

`CANONICAL_OFFERING_STATE`
- canonical Offering availability
- Offering ↔ Location relationships

`OBSERVED_EVIDENCE`
- `owned_website.serviceability_evidence`
- `owned_website.location_evidence`

`OPTIONAL_CONTEXT`
- demand geography
- Audience geography

`LEGACY_COMPATIBILITY_ONLY`
- legacy `markets_served`

Audience/demand geography may corroborate but cannot establish serviceability.

### 5.6 Audience — future processor inputs

The frozen Object contract permits:

`CANONICAL_APPLICATION_STATE`
- Brand ID/name
- confirmed Industry/category

`OBSERVED_EVIDENCE`
- owned website company/customer-use context

`OTHER_INTELLIGENCE_OBJECT`
- Brand Expression, optional enrichment only

`BRAND_USER_INPUT`
- Brand edits/confirmations

`OPTIONAL_CONTEXT`
- own Instagram
- Campaign/Performance learning
- Market/competitor context

Preview audience groups are candidate/reconciliation context only.

### 5.7 Visual Identity — future processor inputs

`CANONICAL_APPLICATION_STATE`
- canonical visual business-state references
- explicit Brand visual guidance

`OBSERVED_EVIDENCE`
- owned visual Evidence
- owned website visual Evidence

Canonical visual state includes approved logo/marks/palette/fonts/reference images and remains outside Intelligence ownership.

Brand personality is not a hard dependency.

## 6. Readiness model

Three different questions must remain separate:

1. **Execution readiness** — can the processor run now?
2. **Result state/freshness** — what did the last execution produce and is it current?
3. **Consumer readiness** — is the available Intelligence useful enough for a particular consumer?

### 6.1 Execution readiness

- `NOT_EVALUATED`
- `WAITING_FOR_CANONICAL_INPUT`
- `WAITING_FOR_EVIDENCE`
- `READY_TO_RUN`
- `BLOCKED_BY_CONFLICT`

A processor can be `READY_TO_RUN` even when the eventual result will be partial.

### 6.2 Result state

Use the shared readiness/freshness semantics rather than merging them:

Result readiness:
- `READY`
- `PARTIAL`
- `NOT_READY`
- `FAILED`

Freshness:
- `CURRENT`
- `STALE`
- `UNKNOWN`
- optional runtime-only `REFRESHING`

### 6.3 Consumer readiness

Consumer readiness is separately evaluated as:
- `NOT_READY`
- `PARTIAL`
- `READY`

A `PARTIAL` Object may be READY for one bounded consumer and insufficient for another.

## 7. Initial post-verification execution plan

Assume after verify/claim:
- BrandProfile exists
- confirmed Industry exists
- canonical domain exists
- Brand Preview Evidence/candidate observations may exist

Do not assume:
- Offerings complete
- Locations complete
- Instagram connected
- Brand user confirmation complete

| Processor / branch | Initial classification | Reason |
|---|---|---|
| `brand_meaning` | RUN_IF_EVIDENCE_AVAILABLE | canonical anchors are sufficient; representative Brand/company/messaging/offering context is still needed |
| `brand_character` | RUN_IF_EVIDENCE_AVAILABLE | can run from company/messaging Evidence; Instagram is optional |
| `brand_differentiation` | RUN_IF_EVIDENCE_AVAILABLE | Brand-level differentiator can be partial/null; canonical Offering facts are supporting when available, not universal blockers |
| `brand_communication` | RUN_IF_EVIDENCE_AVAILABLE | website messaging/language Evidence sufficient; Instagram optional |
| `serviceability_synthesis` | WAIT_FOR_BUSINESS_STATE or RUN_IF_EVIDENCE_AVAILABLE for bounded partial | full trustworthy maturity benefits materially from canonical Locations/Offering availability; website Evidence alone may yield a narrower partial profile but must not substitute for canonical Offering truth |
| Audience | DEFERRED | OBJECT_ONLY; semantic stack must be completed before runtime |
| Visual Identity | DEFERRED | OBJECT_ONLY; semantic stack must be completed before runtime |

No processor creates a verification/Home gate.

## 8. Permanent execution DAG and parallelism

```text
Canonical Brand/application state
        │
        ├─────────────┬──────────────┬───────────────┬───────────────┐
        │             │              │               │               │
        ▼             ▼              ▼               ▼               ▼
 brand_meaning  brand_character brand_differentiation brand_communication  Audience*
        │             │              │               │               ▲
        │             │              │               │               │
        └─────────────┴──── OPTIONAL Brand Expression enrichment ────┘

Canonical visual state + visual Evidence
        │
        ▼
 Visual Identity*

Canonical Brand geography
+ canonical Locations
+ canonical Offering availability
+ Offering↔Location relationships
+ first-party serviceability Evidence
        │
        ▼
 serviceability_synthesis
```

`*` Audience and Visual Identity are not executable yet because their semantic stacks are incomplete.

True hard cross-branch dependencies:
- none among the four permanent branches.

Accepted optional edge:
- Brand Expression → Audience = `OPTIONAL_CONTEXT`.

All five currently defined permanent processors can otherwise be scheduled independently when their own canonical/Evidence prerequisites are met.

UI workspace order is not processor dependency.

## 9. Brand Preview reuse/reconciliation

| Preview output | Permanent reuse classification | Rule |
|---|---|---|
| `brand_descriptor` | RECONCILIATION_CONTEXT / NO_DIRECT_PROMOTION | may help compare early understanding, never directly becomes `brand_description` |
| `brand_understanding_narrative` | RECONCILIATION_CONTEXT | not directly promoted into description/positioning/value proposition |
| `audience_groups[]` | CANDIDATE_SEED + RECONCILIATION_CONTEXT | must be re-evaluated under durable Persona admission; new durable semantic IDs assigned |
| creator opportunities | NO_REUSE as permanent Brand Object | bounded Preview strategy output, not Brand Intelligence truth |
| archetype recommendations | NO_REUSE as permanent Brand Object | bounded Preview taxonomy recommendation |
| optional logo candidate | EVIDENCE_CONTEXT / application candidate | may participate in canonical logo reconciliation; not `visual_style_profile` and not automatically canonical |

Preview synthesis is not raw Evidence merely because it came earlier. Where reused, original supporting Evidence/provenance should remain available.

## 10. Cross-branch dependency review

| Candidate dependency | Classification | Reason |
|---|---|---|
| Audience requires Brand Expression | OPTIONAL_CONTEXT | Brand Expression may enrich Persona interpretation; Audience Object contract does not require it |
| Brand differentiation requires Product Intelligence output | NO_DEPENDENCY | may consume canonical Offering facts; no Product Intelligence output hard dependency |
| Serviceability requires Audience geography | NO_DEPENDENCY | Audience geography is supporting context only and cannot establish serviceability |
| Visual Identity requires Brand personality | NO_DEPENDENCY | visual interpretation derives from canonical visual state/Evidence |
| Brand Communication requires Visual Identity | NO_DEPENDENCY | verbal/message semantics are independent from visual semantics |
| Serviceability requires canonical Offering/Location state | HARD_APPLICATION_STATE_DEPENDENCY for high-fidelity known facts, not cross-Intelligence dependency | application state, not another Intelligence branch |

No circular hard dependency exists.

## 11. Offering/Location dependency review

Only Serviceability has a strong direct maturity dependency on canonical Offering availability and Locations.

`brand_differentiation` may consume canonical Offering facts when relevant, but:
- it can remain partial/null without complete catalogue state;
- it must not copy Offering-specific proof into Brand-level proof without defensible generalization.

`brand_meaning` consumes Offering Evidence/context to understand Brand meaning, but does not require canonical catalogue completeness and does not own Offering truth.

Audience does not require one Persona per Offering.

Visual Identity does not require Offerings/Locations.

Website-extracted catalogue observations may be Evidence/candidates, never permanent canonical Offering truth.

## 12. Brand-confirmed state and user edits

Across all branches:

```text
BRAND_CONFIRMED current state
!= ordinary derivation dependency for replacement
```

Rules:
- protected components are normally excluded from active automatic replacement scope;
- new Evidence may be compared against protected state;
- material disagreement creates discrepancy/conflict handling, not silent overwrite;
- user edit may narrowly invalidate dependent derived fields/consumer projections;
- processor cannot independently emit `BRAND_CONFIRMED`.

Examples:
- confirmed positioning edit → positioning current/protected; related Audience communication implications may become reevaluation candidates.
- confirmed communication constraint edit → only relevant communication/Brief projections reevaluate.
- confirmed Persona item → preserve that item while unprotected Persona items may refresh.
- confirmed visual constraint → remains normative; observed visual patterns cannot overwrite it.
- confirmed Serviceability component, if future Product authority allows it → preserve under ordinary refresh.

## 13. Directed invalidation graph

### Brand name/domain change
May invalidate:
- Brand Meaning outputs dependent on identity/domain
- relevant Audience reconciliation context
- relevant visual Evidence acquisition association
- Serviceability Evidence association if domain source changes

Does not mean all durable Objects must be recomputed immediately.

### Confirmed Industry/category change
May invalidate:
- `brand_meaning`
- relevant `brand_character` interpretation
- `brand_differentiation`
- `brand_communication` only where Industry context materially affects interpretation
- Audience Persona reasoning
- Serviceability only if Industry affects interpretation of business/service model, not as automatic geography authority
- Visual Identity normally unaffected unless a later explicit dependency exists

### Brand messaging change
May invalidate:
- `brand_meaning.positioning/value_proposition` where meaning changed
- `brand_communication` affected components
- `brand_character` only if underlying durable character/values meaning changed
- `brand_differentiation` where differentiator/claim Evidence changed
- affected Audience communication implications
- not Serviceability/Visual Identity automatically

### Company story / values change
May invalidate:
- `brand_character`
- affected Brand Meaning context
- affected Brand differentiation/proof if factual company support changed
- relevant Audience implications
- not Serviceability/Visual automatically

### Offering composition change
May invalidate:
- Brand Meaning only when Brand-level proposition meaning materially changes
- Brand Differentiation only when Brand-level generalized facts/differentiation change
- Serviceability components relying on those Offerings/availability
- downstream consumer projections
- not Audience/Visual automatically

### Offering availability change
Invalidates:
- affected Serviceability markets/basis/outer envelope
- downstream feasibility projections
- not Brand Expression/Audience/Visual automatically

### Location change
Invalidates:
- affected Serviceability components only
- downstream location/feasibility projections
- not other Brand branches automatically

### Logo / palette / reference asset change
Invalidates:
- affected Visual Identity components
- downstream visual guidance/Brief projections
- does not invalidate Brand Expression/Audience/Serviceability by default

### Instagram connection/new Evidence
May enrich/refresh:
- Brand Communication relevant tone/language/guidance
- future Audience relevant Persona fields
- potentially Brand Character only when representative and materially generalizable
- future Market/Instagram Intelligence outside this contract
Does not trigger whole Brand Intelligence recompute.

### Brand-confirmed Object edit
- protects edited field/item
- narrowly invalidates declared dependents/projections
- does not request automatic self-overwrite.

## 14. Freshness model

No universal TTL.

Architecture-level classes:

### `EFFECTIVELY_STABLE_UNTIL_EDITED_OR_MAJOR_CHANGE`
Typical:
- Brand values
- stable Brand personality
- Brand-confirmed communication/visual constraints

### `CANONICAL_STATE_CHANGE_DRIVEN`
Typical:
- Serviceability components tied to Location/Offering availability
- Visual interpretation tied to approved canonical assets

### `EVIDENCE_REFRESH_DRIVEN`
Typical:
- Brand messaging-derived positioning/value proposition
- communication tone/language
- derived differentiation/proof
- visual imagery/style interpretation
- Audience communication implications

### `EVENT_INVALIDATED`
Typical:
- Brand-confirmed edits
- Offering/Location activation/deactivation
- canonical asset replacement

### `PERIODICALLY_REFRESHABLE_WHEN_A_CONSUMER_JUSTIFIES_IT`
Allowed architecture pattern, but no periodic schedule/TTL is frozen here.

Freshness never changes authority by itself.

## 15. Progressive maturity model

Branch maturity states:

- `UNSTARTED`
- `FOUNDATION_AVAILABLE`
- `PARTIAL`
- `USEFUL`
- `RICH`
- `STALE_OR_REEVALUATION_NEEDED`

These are architecture-level maturity labels, not replacements for shared runtime readiness/freshness states.

Progression:

```text
Brand verified
↓
canonical anchors available
↓
Brand Expression processors run selectively as Evidence exists
↓
partial Brand Centre becomes useful
↓
Offerings / Locations / user edits / richer Evidence become available
↓
Serviceability and other branches mature
↓
Audience + Visual Identity become executable after missing semantic stacks are completed
↓
more domain/Instagram/Performance evidence
↓
selective field/item refresh
```

No mandatory Brand DNA, Audience, Visual Identity, Offering or full Intelligence review checkpoint is introduced.

Normal target of 2–3 Personas is not a universal completion threshold.

## 16. Consumer-scoped readiness

### Brand Centre — Brand workspace
Minimum useful:
- canonical business identity
- any useful Brand Expression subset

Preferred:
- richer Brand Expression
- durable Audience Persona(s)
- canonical visual state + visual_style_profile
- Locations where relevant

Partial behavior:
- show available sections; missing Intelligence does not block workspace.

### Brand Centre — Overview
Minimum useful:
- at least one material, grounded domain signal/Observation from available domains

Preferred:
- Brand + Offering + Instagram/Performance/Commercial context

Partial behavior:
- composition shrinks; Overview owns no independent truth.

### Brand Centre — Offerings context
Minimum:
- canonical Offering state; Brand Expression optional supporting context

Preferred:
- Brand differentiation/communication context, Serviceability where relevant

Partial:
- Offering remains usable without all Brand Intelligence.

### Market
Current V0 base case expects Brand website + own Instagram when connected; competitor is enrichment.
Permanent Brand Intelligence provides Brand meaning/communication/Audience context but does not own Market composition.

### Recommendations / Creator Strategy
Minimum useful:
- sufficiently grounded Brand meaning/communication
- applicable Offering truth
- relevant strategic context

Preferred:
- Audience, Serviceability, Performance, Commercial and Market enrichment

Partial:
- fewer/narrower recommendations; no filler.

### Create Campaign / future Campaign Intelligence
May consume Brand Expression, Audience and Serviceability as reusable context.
Campaign-specific objective/targeting/Brief remains downstream and must not be stored back as Brand Intelligence.

### future Creator matching/outreach
May prefer richer Audience and Brand Expression; later contracts determine stronger thresholds.

## 17. Branch maturity and contract gaps

| Branch | Status | Exact gap |
|---|---|---|
| Brand Expression | READY_FOR_RUNTIME_ARCHITECTURE | semantic stack frozen for all four processors; runtime/persistence still unimplemented |
| Serviceability | READY_FOR_RUNTIME_ARCHITECTURE with CANONICAL_STATE_DEPENDENCY_GAP | semantic stack frozen; runtime needs canonical Location/Offering availability/relationship inputs and backend reconciliation |
| Audience | SEMANTIC_CONTRACT_GAP + EVIDENCE_CONTRACT_GAP + OUTPUT_VALIDATION_GAP | needs processor definition, reasoning contract, output contract, Evidence contract before runtime |
| Visual Identity | SEMANTIC_CONTRACT_GAP + EVIDENCE_CONTRACT_GAP + OUTPUT_VALIDATION_GAP | needs processor definition, reasoning contract, output contract, Evidence contract before runtime; canonical visual-state implementation also remains deferred |

There is no current Product Authority gap that blocks defining the basic Audience or descriptive Visual Identity semantic stacks. Sensitive demographic inference and richer visual hard-constraint semantics must continue to obey their already-frozen policy boundaries.

## 18. Recommended runtime implementation ordering

### Pre-runtime semantic closure
Before any Audience or Visual runtime:
1. complete Audience processor/reasoning/output/Evidence contracts;
2. complete Visual Identity processor/reasoning/output/Evidence contracts.

This semantic work can run in parallel with runtime work for already complete branches.

### Runtime Wave 1 — canonical anchors + high-value/migration-critical expression
Implement on shared runtime:
- `brand_communication`
- `brand_meaning`

Why:
- complete semantics;
- canonical M1 Brand anchors already have a read contract;
- direct Brand Centre/Chat value;
- `brand_communication` is the permanent replacement producer for legacy `primary_language`;
- both have low canonical-state dependency complexity.

### Runtime Wave 2 — claim/character + Serviceability conditional lane
Implement:
- `brand_character`
- `brand_differentiation`

In parallel, implement `serviceability_synthesis` only once canonical Location/Offering availability/relationship reads are verified.

Why:
- Character and differentiation are semantically mature and add Brand Centre/Brief value;
- Serviceability is migration-critical for legacy `markets_served`, but its correctness depends on application business-state readiness.

### Runtime Wave 3 — Audience and Visual Identity
After their semantic stack freezes:
- Audience processor/runtime
- Visual Identity processor/runtime

Order between them should be consumer-driven; they have no hard dependency on one another.

This ordering avoids waiting for all branches before delivering useful Intelligence and avoids implementing incomplete semantics.

## 19. Persistence readiness

| Branch | Classification | Rationale |
|---|---|---|
| Brand Expression | PERSISTENCE_REQUIRES_BACKEND_AUDIT | semantics complete; storage must support object/item/subfield authority, lineage, Evidence refs, supersession without duplicating canonical Brand fields |
| Serviceability | PERSISTENCE_REQUIRES_BACKEND_AUDIT | semantic shape complete; storage must reference canonical Locations/Offerings rather than duplicate them; canonical state availability must be reconciled |
| Audience | PERSISTENCE_BLOCKED_BY_SEMANTICS | processor/output/Evidence semantics not yet complete |
| Visual Identity | PERSISTENCE_BLOCKED_BY_SEMANTICS | processor/output/Evidence semantics incomplete; canonical visual-state implementation also deferred |

Permanent derived storage should preserve, where applicable:
- current Object/version
- item/subfield metadata
- generation lineage
- Evidence refs
- business-state refs
- supersession/history
- freshness/invalidation state where runtime boundary requires durability

Canonical application state must remain referenced externally rather than copied:
- Brand identity anchors
- canonical visual assets/settings
- Offerings
- Locations
- Offering availability/Location relations

## 20. Legacy Identity retirement implications

| Legacy Identity semantic | Current replacement status | Retirement implication |
|---|---|---|
| `website_url` | canonical application Brand/domain state | permanent replacement available; compatibility retirement still requires all consumers remapped |
| `brand_name` | canonical application Brand state | replacement available |
| `brand_logo` | interim canonical Brand logo/application state; richer canonical visual asset path deferred | compatibility remains where consumers still depend on legacy path |
| `industry` | standalone Gatekeeper confirmation → canonical Brand Industry | replacement available; legacy Gatekeeper scope decoupled |
| `sub_industry` | provisional application context only under current Gatekeeper authority | cannot claim confirmed replacement; retain conservative compatibility/provenance behavior |
| `country` | canonical Brand application state | replacement available |
| `reporting_currency` | canonical application field/read contract, but provenance/resolution gap remains | not an Intelligence producer; legacy deterministic resolution must not be permanent authority |
| social handles | M1 canonical application state for IG/YT/TikTok; FB/LinkedIn deferred | partial replacement; deferred platforms remain compatibility-only |
| `primary_language` | `brand_communication.communication_profile.primary_language` semantic producer complete | runtime/persistence/adapter/consumer migration still block retirement |
| `markets_served` | `serviceability_synthesis.serviceability_profile` semantic producer complete | canonical state + runtime/persistence/projection/consumer migration still block retirement |
| `tagline` | superseded as permanent Intelligence Object | retire only after consumer audit/remap |
| `business_geography` | superseded by canonical geography/Locations + Serviceability | retire after consumers remap |
| `industry_niche` | deferred | cannot retire |
| `website_currency` | deferred to Product Intelligence reconciliation | cannot retire |

### M7/M8 remaining blockers

M7 obsolete Identity execution-layer retirement remains blocked by:
- runtime implementation and verified consumer migration for permanent replacement processors;
- persistence/reconciliation for `primary_language` and Serviceability;
- remaining explicit `identity_test`/compatibility consumers;
- deferred `industry_niche` and `website_currency`;
- any residual Brand Preview/legacy candidate fallback still measured as active.

M8 final Identity branch removal additionally requires:
- zero accepted semantic owner references to Identity;
- all compatibility consumers remapped;
- migration/backfill/adapters complete where required;
- regression tests including Brand Preview/onboarding;
- no deferred semantic still depends on Identity artifacts or a separately extracted compatibility package.

M2.5 / Identity removal is not authorized by this contract.

## 21. Validation invariants

This architecture must satisfy:

- all permanent processors represented;
- all ten permanent Objects represented;
- Identity not restored to permanent topology;
- no mandatory onboarding checkpoint;
- no Preview output directly promoted;
- Audience geography never establishes Serviceability;
- canonical Offering truth not duplicated as Intelligence canonical state;
- no whole-engine invalidation rule;
- BRAND_CONFIRMED silent overwrite forbidden;
- no provider/model selection;
- no runtime implementation;
- no persistence schema;
- no circular hard dependency.

## 22. Freeze scope

If accepted, this contract freezes the engine-level execution/maturity architecture only:
- processor/branch readiness model;
- semantic DAG and parallelism;
- progressive execution sequencing;
- Preview reconciliation boundaries;
- directed invalidation;
- freshness classes;
- consumer-scoped readiness;
- branch contract gaps;
- runtime implementation waves;
- persistence readiness classifications;
- Identity retirement implications.

It does not freeze runtime code, persistence schema, provider/model bindings, Data Extraction implementation, Product UI sequencing, or deferred semantic contracts.
