# Campaign Backend — Canonical Implementation Map

Status: CANONICAL
Version: 1.0
Purpose: consolidate implementation responsibilities without duplicating Prisma or Zod definitions.

## 1. Authority and role

This file is the canonical map between Campaign product/domain contracts and backend implementation.

It does **not** duplicate field-level Prisma definitions or Zod schemas. Use:

- `backend/campaign_schema.prisma` for persistence structure;
- `backend/validation/**/*.schema.ts` for executable validation;
- focused `campaign/**` contracts for detailed surface behavior.

Reconciliation documents are historical evidence and must not override these canonical layers.

## 2. Aggregate ownership

### Campaign

Canonical aggregate: existing `UceCampaign` family.

Do not create a second Campaign aggregate for AI-generated campaigns. AI recommendation provenance is lineage/context; once accepted, the Campaign remains a normal Campaign record.

Campaign owns:

- campaign identity/name;
- lifecycle/status;
- creation source and accepted AI lineage references;
- campaign strategy/objective/KPIs;
- creator targeting;
- audience targeting;
- platform selection;
- campaign commercial configuration and budget;
- visibility/application-facing Campaign configuration;
- Campaign-to-product/brief relationships;
- canonical accepted values used by Campaign workflows.

### Product and Brief

A Campaign can host multiple products. A Campaign product can host multiple briefs.

Deliverables are Brief-owned. Do not reintroduce Campaign-level deliverable persistence merely because Create Campaign previously captured effort-oriented concepts.

### Brand context

Brand-owned facts such as Brand industry are inherited/read as context. Campaign must not create duplicate canonical Brand fields.

Commercial currency follows the frozen Campaign policy derived from Brand Centre country and is persisted as Campaign commercial context. It is not the same concept as product/offering price currency.

## 3. Lifecycle implementation

Canonical Campaign lifecycle values are represented by the current Campaign Prisma schema. Services must enforce legal transitions rather than allowing arbitrary status writes.

Lifecycle mutation should be routed through Campaign application/service logic so transition-specific checks can run atomically.

Important implementation rule: publishing/launching is not a simple field patch. Before a Campaign crosses into its published/live lifecycle, the service must validate all frozen publish-readiness requirements defined by the Campaign Page/Create Campaign contracts and executable validation layer.

Completion/archive behavior must preserve historical references required by downstream collaboration/reporting flows.

## 4. Create Campaign orchestration

Create Campaign remains the three-step product flow:

1. Campaign Strategy
2. Creator Strategy
3. Commercial Strategy

The backend should treat the wizard as mutation of one Campaign aggregate, not as three independent domain objects.

### Draft behavior

Draft persistence may be incomplete relative to publish requirements. Field-level/type validation still applies where values are present.

### Publish behavior

Publish performs the stronger aggregate validation/readiness check. Canonical references (for example KPI/taxonomy IDs) must be resolvable and valid before publication where the frozen contracts require them.

### AI-recommended creation

AI recommendation generation is Intelligence-owned. Campaign owns acceptance and persistence.

When Campaign is created from an AI recommendation:

- persist creation source as AI-recommended;
- retain recommendation lineage/version identifiers required for traceability;
- validate the accepted recommendation through the same Campaign boundary rules as manually entered data;
- persist accepted/resolved Campaign values in Campaign storage;
- do not use the Intelligence recommendation record as the live Campaign value store.

## 5. Edit Campaign orchestration

All post-launch edits must respect the frozen editability rules in the Campaign contracts.

The backend must not rely only on UI disabling. Service-layer authorization/validation must reject forbidden mutations.

Where an edit affects creator eligibility, applications, briefs, active collaborations, commercial expectations, or intelligence inputs, the owning service must execute the corresponding impact policy instead of blindly updating the Campaign row.

Active collaboration terms must not silently change because the parent Campaign was edited later. Collaboration must retain/snapshot the agreed Campaign/Brief/commercial state required by its contract.

## 6. Campaign Page / workspace orchestration

Campaign Page is an application read/write surface over the Campaign aggregate and related modules; it is not a separate persistence aggregate.

Read models may compose Campaign, product, brief, applicant, outreach, collaboration, reporting, and Intelligence-derived data, but canonical ownership remains with the source domain.

Readiness/status indicators shown on Campaign Page should be derived from canonical state and frozen rules, not persisted as duplicate editable truth unless the Prisma schema explicitly defines a materialized field for a justified reason.

## 7. Canonical taxonomy/reference resolution

Campaign uses canonical reference libraries including:

- creator archetypes;
- audience affinities;
- KPI framework.

Services must validate stored IDs against the canonical library/version expected by the relevant contract.

Do not convert canonical IDs into free-text copies as the primary persistence representation.

Human-readable labels can be resolved for API/UI responses.

## 8. Geography

Campaign audience geography semantically belongs to Campaign targeting while reusing the structured geography shape established by the shared Intelligence geography contract.

The working persistence may use JSON where defined by the canonical Prisma schema, but the service/Zod boundary must validate the exact frozen structured object rather than accepting arbitrary JSON.

If the production application already has a canonical shared normalized geography model, the integrating developer may reconcile storage to that model without changing the frozen Campaign semantics.

## 9. Commercials

Campaign commercial behavior must preserve the distinction between:

- creator payout/commercial offer;
- total Campaign budget;
- brand support/value transferred before content creation;
- payment timing/terms;
- Campaign commercial currency.

For negotiable commercials, the stored advertised offer represents the frozen minimum/starting payout semantics defined by the Campaign contract. Do not invent an unapproved maximum negotiated payout field.

Negotiation/application/collaboration services own the later creator-specific agreed amount where applicable.

## 10. Products and briefs

Adding a product and adding a brief are separate Campaign-module operations.

Service rules must enforce parent existence and ownership:

- product must belong to the Campaign/Brand context required by the frozen contract;
- brief must belong to the intended Campaign product;
- deliverables are validated and persisted at Brief level;
- mutations must not orphan dependent active workflow records.

## 11. Discovery, Outreach and Applicants

These are Campaign-adjacent workflow modules with their own validation/services while referencing canonical Campaign state.

They must not duplicate Campaign targeting/commercial fields as independently editable Campaign truth.

Where workflow records require historical stability, persist the specific snapshot/reference required by that workflow rather than making the workflow dependent on mutable current Campaign values.

Creator application commercial negotiation remains bounded by the frozen Campaign rules (including the MVP counter-offer policy) and must be enforced server-side.

## 12. Share

Campaign sharing/visibility uses Campaign-owned visibility semantics. Share endpoints/services must enforce lifecycle and visibility/authorization rules server-side.

Public/share representations should expose only the fields approved by the share contract; do not serialize the full internal Campaign aggregate by default.

## 13. Reporting

Campaign owns reporting setup/context and the association of returned reporting intelligence with the Campaign.

The Creator Shop Intelligence Framework owns reporting intelligence computation.

Implementation therefore needs an explicit adapter/contract boundary:

Campaign -> Intelligence:
- canonical Campaign identifier and relevant frozen Campaign context;
- relevant product/brief/collaboration/performance references/data allowed by the reporting contract;
- trigger/event context and version/lineage metadata where required.

Intelligence -> Campaign/application:
- reporting output in the frozen response contract;
- computation/version/lineage identifiers required for traceability;
- status/error metadata required by the integration contract.

Do not duplicate Intelligence processor internals in Campaign persistence.

## 14. Marketplace score and AI Match score

Marketplace section score and AI Match score are Intelligence-produced outputs.

Campaign/application code may request, consume, cache/reference, and render these outputs according to their contracts, but the scoring methodology and processor-owned evidence/provenance remain Intelligence-owned.

Any Campaign trigger must be explicit about:

- event that causes calculation/recalculation;
- input snapshot/version;
- expected output contract;
- stale/retry/failure behavior;
- lineage needed to explain which intelligence result was used.

## 15. Transaction boundaries

Use a database transaction whenever a business operation must atomically mutate multiple Campaign-owned records or enforce an invariant across them.

Typical transaction candidates include:

- publish/launch state transition plus required canonical freezes/references;
- add/remove/reorder operations whose parent/child invariants must remain consistent;
- acceptance of an application/negotiated commercial where multiple workflow records change together;
- collaboration handoff/snapshot creation;
- destructive edits that require dependent-record policy enforcement.

Do not hold a database transaction open while waiting for external Intelligence/network computation.

## 16. Concurrency and idempotency

Lifecycle transitions, acceptance actions, negotiation actions, and asynchronous result ingestion must be safe against duplicate requests.

Implementation should use the production backend's existing concurrency convention where available (for example optimistic version checks, conditional updates, uniqueness constraints, idempotency keys, or equivalent).

At minimum:

- a Campaign cannot be published twice into conflicting states;
- an application cannot be accepted/rejected through mutually conflicting concurrent mutations;
- a negotiation counter cannot exceed the frozen allowed count because of racing requests;
- an async Intelligence result must not overwrite a newer result/input version merely because it completes later.

## 17. Intelligence async boundary

External Intelligence execution should occur outside the Campaign database transaction.

Recommended logical flow:

1. Campaign service commits canonical state.
2. A trigger/job/event is emitted or queued using the application's production integration pattern.
3. Intelligence processes the versioned input.
4. Result is returned with lineage/version/status.
5. Ingestion validates contract and freshness before associating/serving the result.

Exact queue/vendor infrastructure is intentionally not prescribed here unless another frozen repository contract defines it.

## 18. Validation boundary

Zod schemas are executable request/domain-boundary validation, not a replacement for database constraints or service invariants.

Use all three layers:

- Zod: request shape, enum/range/object validation and frozen cross-field rules represented there;
- service/domain logic: lifecycle, authorization, ownership, current-state and cross-record invariants;
- Prisma/PostgreSQL: persistence types, relations, uniqueness/referential constraints and durable integrity.

## 19. Reconciliation-file status

The following class of artifacts is now **SUPERSEDED FOR IMPLEMENTATION** once its decisions are represented in the current canonical layers:

- `campaign/**/backend_schema_reconciliation.*`
- `campaign/backend/schema_reconciliation.yaml`
- `backend/*_backend_schema_reconciliation.md`
- `backend/reconciliation/*`

They may remain in Git for traceability. Developers/Codex should not implement directly from them without checking the canonical authority order.

## 20. Developer integration rule

This repository is a handoff/reference repository, not the production application repository. The integrating developer must reconcile these Campaign artifacts with the actual production backend architecture before migration/application.

Do not mechanically replace a production canonical model merely because this reference repository uses a working representation. Preserve the frozen domain semantics and map them into the production architecture deliberately.
