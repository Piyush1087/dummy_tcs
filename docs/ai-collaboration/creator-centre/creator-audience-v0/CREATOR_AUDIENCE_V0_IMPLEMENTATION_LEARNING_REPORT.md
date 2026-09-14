# Creator Audience V0 — implementation learning report

`CREATOR_AUDIENCE_V0_IMPLEMENTATION_LEARNING_REPORT_V1`

## Product decisions validated by implementation

- Audience works as one read-only factual workspace with source/freshness near
  the top, audience-level Highlights, a whole-section cohort switch, and status
  last.
- Cohort usability can be represented independently from account follower
  count. One usable cohort needs no one-option control; neither usable cohort
  needs a truthful recovery surface, not empty charts.
- Count-only rendering is sufficient when provider denominator authority is
  absent. No fabricated percentage or zero is necessary.
- The same explicit read action works for Owner, Manager, and Assistant without
  extending mutation authority.
- A weekly, no-manual-refresh factual snapshot is compatible with the existing
  shared scheduler and failure-current preservation model.

## Shared donor code reused byte-identically

- The stateless Instagram Graph client, provider error classification,
  professional-account eligibility, accepted metric/breakdown vocabulary,
  provider category bound, and low-level response hardening remain shared.
- Existing Data Extraction/Evidence and Intelligence generation/current tables,
  CAS/transition behavior, and the Instagram sync job table remain the only
  persistence/runtime surfaces.
- The Aurora shell, authenticated fetch/session path, Settings connection
  lifecycle, and production health routes were reused.

## Shared code generalized by owner scope

- P1 added one durable discriminated `BRAND`/`CREATOR` owner scope through DE,
  Evidence, Intelligence, current, and sync lineage.
- Brand history was deterministically backfilled. Offering remains Brand-owned;
  Creator scope binds canonical Owner `CreatorProfile` plus active workspace.
- Scope-aware uniqueness, lineage triggers, exact purge traversal, and shared
  scheduling prevent Brand/Creator collision without a synthetic Brand or
  parallel runtime.

## Creator-specific additions

- Settings-compatible Creator credential/fence adapter and server-side actor →
  workspace → canonical Owner subject resolution.
- Deterministic Audience normalization, Highlights finalizer, shared-current
  repository adapter, strict authenticated consumer, and internal exact Creator
  Instagram purge.
- Creator Insights/Audience route, durable shell destination, strict Zod client,
  last-good hook, truthful state UI, and bounded browser acceptance harnesses.

## Unexpected complexity and debt

- Parallel current-MVP and Instagram-donor branches made P0 a real convergence
  exercise; the Prisma schema needed a structural union and both migration
  histories needed independent upgrade proof.
- PostgreSQL nullable-key behavior required explicit owner-scope lineage and
  uniqueness triggers during P1 rather than relying on legacy Brand nullable
  columns.
- The repository application boot currently requires mail-provider configuration
  even for health-only local startup. Synthetic values avoid calls, but a
  future explicit offline/local provider abstraction would make smoke tests
  simpler without weakening production validation.
- The frontend bundle retains a pre-existing large-chunk advisory. Audience
  adds no dependency and is not the source of that architectural debt.

## Reusable seams for future Creator Insights

- The owner-scope repository and shared generation/current runtime can host new
  Creator Objects without another tenancy system.
- The narrow Creator lifecycle scheduling port can enqueue future capabilities
  into the single dispatcher.
- The strict consumer schema/client/hook/state pattern can be reused while each
  future workspace retains its own Product contract and action.
- Provider adapters should continue to own credentials and return bounded,
  provider-neutral truth objects; deterministic application finalizers should
  own display-safe facts.

## Explicitly deferred Product/build scope

Content, Creator Brand, Portfolio, Commercial Setup, Media Kit, Persona,
psychographics, editing/customization, manual Audience refresh, public source
deletion, Campaign, Collaboration, AI Match, and Marketplace behavior remain
not started. No recommendation, model-generated insight, or causal claim was
introduced.

## Recommendations to the Creator Product SA

- Preserve denominator and availability language as explicit Product contracts
  in any future demographic expansion.
- Decide each future workspace's action, source cadence, and empty/partial
  semantics before authorizing implementation.
- Treat the owner-scope and scheduling seams as platform constraints, while
  keeping future visible hierarchy and terminology under Product authority.
- Consider a separately authorized local/offline boot provider mode if repeated
  acceptance work justifies removing unrelated mail configuration from health
  smoke prerequisites.

