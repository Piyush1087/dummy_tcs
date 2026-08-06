# Creator Shop Campaign Module — Canonical Entry Point

Status: CANONICAL
Version: 1.0

This directory contains the product/domain specifications for the Creator Shop Campaign module. This README is the navigation and authority entry point for developers and Codex.

## Scope

The Campaign module owns the campaign aggregate and the workflows around campaign definition, lifecycle, products, briefs, discovery, outreach, applicants, sharing, collaboration handoff, and reporting setup.

Reporting intelligence, Marketplace section score, AI Match score, and recommendation generation remain Intelligence-owned. Campaign owns the application-facing persistence, accepted/resolved values, lifecycle, human actions, and the contracts/trigger points through which Intelligence is invoked or consumed.

## Canonical authority order

When artifacts overlap, use this order:

1. `backend/campaign_schema.prisma` — persisted Campaign-domain truth.
2. `backend/validation/**/*.schema.ts` — executable boundary/input validation.
3. `campaign/backend/implementation_map.md` — service ownership, lifecycle/orchestration, transaction/concurrency and integration boundaries.
4. Focused contracts inside `campaign/**` — detailed product/domain behavior for each Campaign surface.
5. `*_schema_reconciliation.*` and other reconciliation artifacts — historical design/reconciliation evidence only; they are not current implementation authority.

If a lower-authority artifact conflicts with a higher-authority artifact, do not silently implement the lower-authority version. Treat the conflict as a reconciliation issue and resolve it against the frozen product decision before changing canonical implementation files.

## Canonical implementation

### Persistence

- `backend/campaign_schema.prisma`

Campaign persistence is intentionally separate from `backend/intelligence_schema.prisma`.

### Validation

- `backend/validation/shared/`
- `backend/validation/campaign/`
- `backend/validation/assets-briefs/`
- `backend/validation/discovery/`
- `backend/validation/outreach/`
- `backend/validation/applicants/`
- `backend/validation/share/`
- `backend/validation/intelligence/`
- `backend/validation/index.ts`

### Canonical reference data

- `campaign/canonical/audience_affinities.yaml`
- `campaign/canonical/creator_archetypes.yaml`
- `campaign/canonical/kpi_framework.yaml`

These files are canonical taxonomies/reference data and are not reconciliation artifacts.

## Campaign aggregate principles

- Evolve the existing `UceCampaign` aggregate; do not create a parallel Campaign aggregate.
- Campaign creation source is persisted (`MANUAL` or `AI_RECOMMENDED`).
- Brand industry is inherited Brand context, not a Campaign-owned Create Campaign input.
- Campaign commercial currency is derived from Brand Centre country, restricted to INR/USD under the frozen Campaign policy, and is distinct from website/product price currency.
- Campaign audience geography uses the shared structured geography semantics defined by the Intelligence geography contract, while Campaign remains the semantic owner of campaign audience targeting.
- Deliverables belong to Brief, not Campaign.
- Campaign may contain multiple products; each product may have multiple briefs.
- Accepted/resolved Campaign values are Campaign-owned even when Intelligence recommends them.
- Intelligence lineage may be retained on Campaign records without making Intelligence the canonical Campaign value store.

## Domain specifications

Focused contracts under the following directories remain valid detailed specifications and should be consulted for the relevant surface:

- `campaign/create_campaign/`
- `campaign/campaign_page/`
- `campaign/add_product/`
- `campaign/add_brief/`
- other Campaign workflow directories present in this repository (Discovery, Outreach, Applicants, Share, Reporting and related modules).

These contracts explain product semantics that cannot be inferred from Prisma alone. They do not override the canonical persistence or executable validation layers.

## Intelligence boundary

Intelligence owns generated intelligence and recommendation computation. Campaign should define:

- what Campaign/Brand context is sent to Intelligence;
- the trigger/event that initiates computation;
- the response contract Campaign expects back;
- lineage/version identifiers needed for traceability;
- which returned recommendation is accepted/resolved into canonical Campaign state.

Campaign must not duplicate Intelligence processor telemetry, provenance/history, or recommendation stores merely to make Campaign persistence self-contained.

## Collaboration boundary

Campaign lifecycle and collaboration lifecycle are separate concerns. When a creator/application becomes a collaboration, the handoff must preserve the Campaign/Brief/commercial state required by that collaboration so later Campaign edits do not silently mutate an already-active collaboration's agreed terms.

## Reconciliation artifacts

Files named like `*_schema_reconciliation.*` document how the current schema was reached. They are retained for traceability/version history but are classified as **SUPERSEDED FOR IMPLEMENTATION** once their decisions are represented in the canonical Prisma/Zod/implementation-map layers.

Do not use a reconciliation file as the primary source when implementing new Campaign code.

## Change discipline

The repository is versioned. Canonical files may therefore be updated directly when a frozen decision changes, but overwrites must be deliberate:

1. read the current canonical file first;
2. preserve unrelated frozen decisions;
3. update all affected canonical layers when a change crosses persistence, validation, or orchestration boundaries;
4. avoid introducing a second store/model for a concept already owned canonically elsewhere;
5. use Git history to recover previous versions rather than creating duplicate backup files in the canonical tree.
