# Brand Intelligence Runtime Wave 1 — Backend Reconciliation

**Status:** `PROPOSED_FOR_SYSTEMS_ARCHITECT_FREEZE`

**Scope:** audit and architecture only; no runtime, schema, migration, validator, provider, model, frontend, Product Authority, M2.5, or Identity-retirement implementation

**Architecture baseline:** `dummy_tcs/main@63aa2c46197f5db57346883c649161788811b62e`

**Backend baseline reverified:** `creator-commerce-backend-v2-clone/development@d76604537701437eff5df12cd11e8595d54395be` (local branch, `origin/development`, and live remote ref matched; worktree clean)

**Wave:** `brand_communication` and `brand_meaning`

**Permanent outputs:** `communication_profile`, `brand_description`, `positioning`, `value_proposition`

## 1. Decision summary

Runtime Wave 1 should be implemented behind a new Brand Intelligence application boundary. It should use:

- M1 canonical Brand state through an application port;
- normalized, capability-addressed Evidence supplied by Data Extraction;
- two independently durable processor executions;
- server-owned, ID/version-pinned structural and semantic validation;
- an immutable generic Intelligence Object generation store plus protected current-component state;
- a canonical object-oriented current projection for consumers; and
- directed invalidation from semantic business/Evidence events.

It must not write Wave 1 results directly into `BrandProfile.description`, `BrandProfile.visualIdentity`, `BrandProfile.strategicDna`, Brand Preview snapshots, or legacy `BrandIntelligenceScan` snapshots. Those fields are compatibility/dual-truth surfaces until separately migrated.

The architecture is suitable for Systems Architect freeze. Implementation is not yet unblocked: the persistence decision and table contract, Data Extraction capability contracts, protected-state transaction contract, durable event/job ownership, executable validator pattern, and consumer projection contract must be frozen first.

## 2. Frozen semantic constraints

This proposal preserves the principal contracts without adapting semantics to the current backend:

- `brand_communication` and `brand_meaning` have no hard dependency on one another.
- A sibling failure cannot invalidate a successful result.
- Partial output is valid where the frozen output contract permits null or independently absent components.
- There is no whole-engine transaction and no generic “refresh all Brand Intelligence” operation.
- source, authority, readiness, and freshness are separate dimensions.
- Brand-confirmed state is protected from AI overwrite.
- derived persistence references canonical Brand, Offering, Location, visual-asset, availability, and Offering-to-Location state; it does not duplicate ownership of that state.
- Brand Preview output is not permanent Brand Intelligence.
- `communication_profile.primary_language` replaces legacy `Identity.primary_language`; geography is not a language inference rule.
- `brand_description`, `positioning`, and `value_proposition` are independent nullable outputs and must remain semantically distinct.

## 3. Backend runtime infrastructure inventory

| Concern | Existing component | Classification | Reconciliation required |
|---|---|---:|---|
| Provider-neutral structured execution | `src/features/data-extraction/services/structured-evidence-execution.service.ts` | `REUSE_WITH_RECONCILIATION` | Expose capability/port semantics, keep provider details below the boundary, and return normalized Evidence or validated candidate output with durable execution correlation. |
| Provider result/error envelope | `src/features/data-extraction/contracts/provider-execution.contract.ts` | `REUSE_WITH_RECONCILIATION` | Retain availability, quality, provenance, telemetry, and error classification; add Wave Evidence-item identity and capture lineage outside provider-specific fields. |
| Gemini structured adapter | `src/features/data-extraction/providers/gemini-structured.provider.ts` | `REUSE_WITH_RECONCILIATION` | Provider is an implementation choice, not a semantic dependency. |
| OpenAI structured adapter | `src/features/data-extraction/providers/openai-structured.provider.ts` | `REUSE_WITH_RECONCILIATION` | Same constraint; do not freeze it into processor or Evidence contracts. |
| Parallel company research adapter | `src/features/data-extraction/providers/parallel-company-research.provider.ts` | `REUSE_WITH_RECONCILIATION` | May satisfy selected acquisition capabilities only through a normalized Data Extraction contract. |
| Bounded provider retry | `src/features/data-extraction/utils/provider-retry.util.ts` | `REUSE` | Continue bounded technical retry (maximum three); orchestration owns processor retry and must not create cross-provider semantic drift. |
| Data Extraction module boundary | `src/features/data-extraction/data-extraction.module.ts` | `REUSE_WITH_RECONCILIATION` | Export capability-addressed acquisition/execution ports rather than Wave code importing concrete providers. |
| Backend compiler | `src/intelligence/runtime/compiler/compiler.ts` | `REUSE_WITH_RECONCILIATION` | Its DAG batching and task-state vocabulary are useful. Replace flat shared-output merge, in-memory-only execution identity, and required-task aggregation with durable independent processor records and object-scoped persistence. |
| Safe YAML loader | `src/intelligence/runtime/loaders/safe-yaml.loader.ts` | `REUSE_WITH_RECONCILIATION` | Path safety is useful; consume a pinned contract bundle and enforce an allowlist, exact IDs, versions, hashes, ownership, and cross-artifact relationships. |
| Model registry resolver | `src/intelligence/runtime/models/model-registry.resolver.ts` | `REUSE_WITH_RECONCILIATION` | Preserve fail-closed environment/profile resolution. Model/provider selection remains operational configuration and outside this freeze. |
| Prompt builder | `src/intelligence/runtime/prompt-builder/intelligence-prompt.builder.ts` | `REUSE_WITH_RECONCILIATION` | Retain versioned artifact, canonical dependency, Evidence-ref, and output-ownership checks. Support processor-specific optional artifact slots and a real active-output schema adapter. |
| Preview output validator | `src/intelligence/runtime/validation/brand-preview.validation.ts` | `LEGACY_REFERENCE_ONLY` | Demonstrates strict Zod plus semantic pruning but validates Preview semantics, not permanent Wave outputs. |
| Gatekeeper validator | `src/intelligence/runtime/validation/gatekeeper-site-assessment.validation.ts` | `LEGACY_REFERENCE_ONLY` | Demonstrates strict structural and semantic validation separation; not reusable as a Wave validator. |
| Legacy Stage 1B job creation | `src/features/brand-onboarding/brand-intelligence-job.service.ts` | `COMPATIBILITY_ONLY` | Its `STAGE_1B_PIPELINE` job type and discovery-lead ownership do not represent permanent processors. |
| Legacy Stage 1B worker | `src/features/brand-onboarding/brand-intelligence-worker.service.ts` | `LEGACY_REFERENCE_ONLY` | Polling/claim pattern is informative, but it has no lease recovery and runs legacy Stage 1B sequentially. |
| Brand Preview run/worker | `src/features/brand-onboarding/brand-preview/brand-preview-run.service.ts`; `brand-preview-worker.service.ts` | `LEGACY_REFERENCE_ONLY` | Lease-token and lease-expiry handling is a useful worker pattern; Preview ownership and one-run-per-lead semantics are not Wave semantics. |
| Brand Centre job service/dispatcher | `src/features/brand-centre/services/brand-centre-scan.service.ts`; `brand-centre-job-dispatcher.service.ts` | `REPLACE` | `setImmediate` dispatch is not a durable queue; broad deep-scan/refresh/planner jobs cannot own directed Wave invalidation. |
| Brand Centre deep-scan worker | `src/features/brand-centre/workers/deep-scan.worker.ts` | `LEGACY_REFERENCE_ONLY` | It directly overwrites profile JSON/text and does not safely enforce protected Wave state. |
| Route idempotency registry | Prisma `IdempotencyRegistry` and escrow-owned manager | `COMPATIBILITY_ONLY` | Request-response replay is feature-owned. Wave idempotency belongs in unique processor-execution keys and persistence transactions. |
| Durable domain events/outbox | backend-wide | `NOT_FOUND` | No generic event bus/outbox suitable for Wave directed invalidation was found. |
| Versioned permanent processor execution | backend-wide | `NOT_FOUND` | Existing run/job records are Preview, Gatekeeper, Brand Centre, or Stage 1B specific. |
| Permanent semantic current-state projection | backend-wide | `NOT_FOUND` | Existing APIs expose BrandProfile/Brand Centre aggregates, not canonical Intelligence current state. |

Telemetry exists locally in provider envelopes, M1 Brand-state reads, Gatekeeper, Preview, and workers, so the overall telemetry classification is `MIXED`. Wave telemetry must join execution, processor execution, acquisition, validation, and persistence with stable correlation IDs and error classes.

## 4. Existing persistence inventory

| Candidate | Exact store/services | Classification | Finding |
|---|---|---:|---|
| Legacy Brand Intelligence scan | Prisma `BrandIntelligenceScan`; Stage 1A/1B/2 onboarding services | `LEGACY_IDENTITY_STORE` | Holds `stage1aSnapshot`, `authoritativeIdentity`, `runtimeContext`, `brandDnaRaw`, verified snapshot, checkpoint, and error JSON. Discovery-lead lifecycle and legacy Identity/Brand DNA semantics make it unsuitable for permanent Wave state. |
| Legacy BI job | Prisma `BrandIntelligenceJob`; `brand-intelligence-job.service.ts`; `brand-intelligence-worker.service.ts` | `LEGACY_IDENTITY_STORE` | Queue record for `STAGE_1B_PIPELINE`; no object generation or independent Wave processor identity. |
| Discovery intake | `DiscoveryLead.temporaryPayload` | `TRANSIENT_SCAN_STORE` | Temporary onboarding input; never a permanent derived store. |
| Preview snapshot/run | Prisma `BrandPreviewRun`; `src/features/brand-onboarding/brand-preview/**` | `PREVIEW_ONLY_STORE` | Explicitly Preview-owned. Similar wording does not establish semantic equivalence or promotion authority. |
| Flat Brand profile fields | Prisma `BrandProfile.tagline`, `description`, `brandValues`, `targetAudience` | `REUSABLE_WITH_RECONCILIATION` | Existing application/compatibility fields with active consumers. No stable object identity, per-component metadata, lineage, supersession, or safe conflict state. |
| Brand profile JSON | `BrandProfile.visualIdentity`, `strategicDna`, `policyFlags`, `isUserEdited` | `REUSABLE_WITH_RECONCILIATION` | Can remain a legacy projection/edit surface during migration, but not the canonical permanent store. |
| Audience personas | Prisma `BrandAudiencePersona` | `UNRELATED` | Future Audience work may reconcile it, but it does not store Wave 1 objects. |
| Growth baseline/leaks/planner | `BrandIntelligenceBaseline`, `BrandPerformanceLeak`, Brand Centre planner records | `UNRELATED` | Performance/planning semantics, not Wave 1 permanent meaning/communication. |
| Offerings and locations | Prisma `Offering`, `Location` | `UNRELATED` as derived storage | Canonical business-state candidates to reference as dependencies; they must not be copied into permanent Intelligence value ownership. |
| Permanent versioned Intelligence Object store | backend-wide | `NOT_FOUND` | New persistence is required. |

No candidate is a `CANONICAL_PERMANENT_DERIVED_INTELLIGENCE_STORE`.

Legacy Brand DNA contains similarly named `brand_positioning`, `brand_narrative`, `core_value_proposition`, and `tone_of_voice` wrappers. Stage 2 merge logic projects these into `BrandProfile.description` and `BrandProfile.visualIdentity.{positioning,valueProp,toneOfVoice,narrative}`. Snapshot validation can soft-fill missing Evidence with `system://soft-fill`; that behavior is forbidden for permanent Wave 1 and is `LEGACY_REFERENCE_ONLY`.

## 5. Shared metadata capability matrix

| Capability | Backend support | Persist for permanent state? | Reconciliation |
|---|---:|---:|---|
| Stable semantic identity | `PARTIAL_SUPPORT` | Yes | String field names and legacy IDs exist, but no canonical `(brand, semantic object/component)` current key. |
| Source | `MIXED` | Yes | Legacy wrappers/provider envelopes carry source, but semantics vary and source is sometimes conflated with acquisition method. |
| Authority | `PARTIAL_SUPPORT` | Yes | `isUserEdited` and `edited` flags approximate authority but cannot express component/item authority or Brand-confirmed candidates. |
| Readiness | `MIXED` | Yes | Preview/Gatekeeper/run states exist; no permanent object readiness. |
| Freshness | `PARTIAL_SUPPORT` | Yes | Timestamps/lease expiry exist, but no object freshness status, basis, or stale reason. |
| Dependencies | `PARTIAL_SUPPORT` | Yes | Compiler task dependencies and prompt canonical dependencies exist; permanent dependency refs do not. |
| Directed invalidation | `NOT_FOUND` | Yes | No semantic impact map/event record/current-state stale transition. |
| Generation lineage | `PARTIAL_SUPPORT` | Yes | Runs/snapshots have IDs, but no immutable generation chain per object/component. |
| Supersession | `NOT_FOUND` | Yes | No explicit supersedes/superseded-by relation for permanent Intelligence. |
| Confidence/evidence strength | `MIXED` | Yes when emitted | Provider/legacy values carry confidence; semantics are inconsistent. Preserve only contract-valid normalized values. |
| Evidence refs | `PARTIAL_SUPPORT` | Yes | Preview grounding refs and provider provenance exist, but no durable normalized Evidence identity/reference contract for Wave. |
| Business-state refs | `PARTIAL_SUPPORT` | Yes | Canonical dependencies can be passed at runtime, but generation-level refs/version stamps are absent. |
| Provider request telemetry | `FULL_SUPPORT` for current adapters | Execution only, with durable summary | Persist non-sensitive model/profile alias, latency, attempts, tokens/cost where available, and error class; keep raw provider internals operational. |
| Prompt payload | `PARTIAL_SUPPORT` | Hash/manifest only by default | Persist prompt-build ID, artifact manifest, and hash; raw payload retention requires a separate privacy/retention decision. |

The permanent store must persist all semantics needed to reconstruct current state, protection, provenance, freshness, conflict, and lineage. Ephemeral request bodies, raw provider responses, stack traces, and high-cardinality debug fields should remain execution/log data subject to retention controls.

## 6. Protected-state assessment

**Direction:** `NEW_INTELLIGENCE_PERSISTENCE_REQUIRED`.

`BrandProfile.isUserEdited` is a JSON map keyed by legacy profile field. Offering and persona records also have coarse booleans. These mechanisms cannot safely represent:

1. current derived value;
2. a Brand-confirmed current component/item;
3. a later AI-derived candidate;
4. a discrepancy between current and candidate;
5. immutable superseded generations; and
6. compare-and-swap protection under concurrent confirmation and recompute.

Existing snapshots are feature-owned and not a per-object generation history. Existing audit/history models do not cover these semantic transitions. Worse, the Brand Centre deep-scan worker writes `BrandProfile.description`, `strategicDna.narrative`, and `visualIdentity.toneOfVoice` without consulting `isUserEdited`, while `BrandCentreDnaService.patchNarrative` updates similar fields without consistently recording protected authority.

The permanent mutation transaction must create an immutable generation, update component-level current pointers using an expected revision, and record authority/action provenance. If the current component is `BRAND_CONFIRMED`, a conflicting AI generation is retained as a candidate/discrepancy and cannot move the current pointer.

## 7. M1 canonical Brand-state reuse

**Recommendation:** `REUSE_VIA_APPLICATION_PORT`.

Current implementation:

- `src/features/brand-onboarding/canonical-brand-state/canonical-brand-state.service.ts`
- `brand-state-read.types.ts`
- `brand-state-read-telemetry.service.ts`

`CanonicalBrandStateService` correctly applies the M1 read contract and exposes canonical values/conflicts for brand name, domain, confirmed Industry, country, and other anchors. Wave code must depend on a Brand Intelligence application port such as `CanonicalBrandStateReader`, with the current service as its first adapter. This prevents permanent runtime code from importing onboarding internals or reading `BrandProfile`, `DiscoveryLead`, `BrandPreviewRun`, or legacy Identity snapshots directly.

Lifecycle implications:

- initial Wave execution is post-verification/post-profile and is not gated on Home or Preview readiness;
- the processor execution captures business-state refs/revisions from one canonical snapshot;
- post-profile reads should ultimately resolve by Brand profile without a permanent requirement for a discovery-lead ID; the current lead requirement is an adapter reconciliation item;
- a later canonical-state revision creates directed staleness/re-execution, never an in-place mutation of old generation dependencies.

## 8. Evidence-acquisition readiness

| Frozen Evidence capability | Classification | Existing source | Required handoff/reconciliation |
|---|---:|---|---|
| `owned_website.brand_messaging` | `AVAILABLE_WITH_NORMALIZATION` | `src/features/brand-onboarding/brand-preview/data-extraction/brand-preview-evidence.service.ts`, `brand-preview-enrichment.service.ts`, `src/features/brand-onboarding/surface-scan/stage1b/text-context-builder.service.ts`, and Stage 1A `zyte-homepage.strategy.ts` / `playwright-homepage.strategy.ts` | Normalize page/resource identity, source class, captured time, excerpt/text boundaries, freshness, coverage, representativeness, and provenance. |
| `owned_website.brand_company_context` | `AVAILABLE_WITH_NORMALIZATION` | Same homepage/About-page acquisition | Add capability-specific page selection and coverage/representativeness rules. |
| `observed_brand_communication_language_signals` | `NEEDS_DATA_EXTRACTION_HANDOFF` | Owned-page text exists, but no normalized language-signal Evidence capability | Data Extraction must produce observed signals without deriving language from country/geography. |
| `brand_user_input_and_confirmations` for communication | `NOT_FOUND` | Profile edit endpoints and `isUserEdited` exist, but no normalized confirmation Evidence/action lineage | Authorized Intelligence mutations must emit referenceable confirmation/action Evidence. |
| `derived communication_constraint_evidence` | `NEEDS_DATA_EXTRACTION_HANDOFF` | Raw messaging and some legacy policy fields exist | Define a normalized derived-Evidence capability with producer/version/source refs; do not promote arbitrary profile JSON. |
| `owned_website.offering_context` | `AVAILABLE_WITH_NORMALIZATION` | Preview Offering-page fetch; surface-scan products; `Offering` records and scan URLs | Evidence must reference canonical Offering IDs/revisions where available and retain page provenance. |
| `brand_user_input_and_confirmations` for meaning | `NOT_FOUND` | Same limitation as communication | Same mutation/Evidence action contract. |
| optional representative Instagram communication Evidence | `NOT_FOUND` | `BrandIntegration` stores handle/token/scopes; brand social-sync connects accounts. `InstagramGraphClient.fetchRecentMedia` is used for creator sync, not a durable brand Evidence capture. | A brand-scoped, consent/scope-aware Data Extraction capability must acquire and normalize representative captions/media metadata. Do not reuse creator post storage. |

Provider names must remain below these semantic capability contracts.

## 9. Brand Preview Evidence reuse

**Classification:** `REUSED_AS_TRANSIENT_BOOTSTRAP`, and only `REUSED_AFTER_NORMALIZATION` before a permanent processor may consume it.

Preview acquisition already returns grounded owned-site page text, URLs, page types/titles, basic coverage, availability, and quality. It is a useful bootstrap source. Its refs such as `owned:<url>` and its small homepage/About/Offering page selection do not yet meet permanent capture identity, freshness, representativeness, or normalized provenance requirements.

The reusable unit is the underlying acquired page Evidence, not `BrandPreviewRun` or synthesized Preview output. Data Extraction should normalize it into capability-addressed captures and issue durable Evidence refs. Public-web Preview enrichment is not a required Wave 1 authority and must not be silently added to the frozen Evidence set.

## 10. Runtime definition loading and drift protection

| `dummy_tcs` component | Classification | Recommendation |
|---|---:|---|
| `intelligence/runtime/compiler/compiler.ts` | `REFERENCE_IMPLEMENTATION_TO_PORT` | Port scheduling/state concepts only after reconciling durable identity, independent persistence, and partial-success semantics. |
| `intelligence/runtime/prompt_builder/prompt_builder.ts` | `REFERENCE_IMPLEMENTATION_TO_PORT` | Port precondition checks, versioned manifest, Evidence refs, canonical dependencies, and active-output filtering; replace placeholder schema wrapping with executable schema adaptation. |
| `intelligence/runtime/loaders/yaml_loader.ts` | `SHARED_PACKAGE_CANDIDATE` | Safe path resolution is generic but insufficient alone. |
| `intelligence/runtime/loaders/allowlisted_definition_loader.ts` | `SHARED_PACKAGE_CANDIDATE` | Exact allowlist/ID/version enforcement is a reusable kernel; add checksum and relationship validation. |
| Gatekeeper/Identity repository loaders | `ARCHITECTURE_REFERENCE_ONLY` | They hard-code branch-specific layouts and legacy Identity assumptions. Create a Wave bundle manifest rather than extending these loaders. |
| `intelligence/runtime/validation/validator_registry.ts` | `REFERENCE_IMPLEMENTATION_TO_PORT` | Server-owned, fail-closed registration by processor and output contract ID/version is the correct pattern. |
| Identity/Gatekeeper validators | `ARCHITECTURE_REFERENCE_ONLY` | Their semantics are unrelated to Wave outputs. |
| `intelligence/runtime/models/resolver.ts` | `REFERENCE_IMPLEMENTATION_TO_PORT` | Preserve fail-closed profile/alias/environment resolution without choosing Wave providers/models in this freeze. |

Backend deployment must not read another repository’s working tree at runtime. The architecture repository should publish or generate a versioned, immutable contract bundle containing an allow-listed manifest of path, semantic ID, version, and content hash. Backend pins the bundle version and canonical commit/hash. CI must fail if:

- a registered processor/artifact ID or version differs;
- a content hash changes without the expected version/bundle update;
- output ownership or processor-to-contract linkage differs;
- an executable validator is missing for a frozen contract; or
- contract fixtures accepted/rejected by the canonical suite disagree with backend validators.

This can become a shared package after ownership/release mechanics are frozen. A hand-copied untracked YAML directory is not acceptable drift control.

## 11. Validation architecture

Use a layered combination:

1. **Contract-derived bounded structural validator:** generate or adapt only the supported contract vocabulary into strict schemas for object shape, required keys, nullability, scalar/array types, enums, bounds, uniqueness, and metadata shape. Fail closed on unsupported contract constructs.
2. **Hand-maintained processor-specific semantic validator:** enforce cross-field and domain rules that structure cannot express, including metadata/value alignment, allowed semantic IDs, language normalization and the no-geography-inference rule, Evidence-ref validity, constraint consistency, claim grounding, and semantic distinctness among description/positioning/value proposition.
3. **Server-owned registry:** key by `(processor_id, processor_version, output_contract_id, output_contract_version)` and reject unregistered or mismatched executions before persistence.
4. **Persistence invariant validator:** confirm active outputs are owned by the processor, all references resolve, authority transitions are legal, and current-pointer updates obey protection/CAS rules.

Provider-native structured output is a convenience and may use a subset schema; it is not the authoritative validator. Do not use unrestricted YAML-to-code generation. Contract manifest checks, fixture parity, and ID/version/hash drift tests are mandatory CI gates.

## 12. Wave 1 orchestration

```text
trigger / directed impact
          │
          ▼
canonical Brand-state snapshot + normalized Evidence manifest
          │
          ├── durable brand_communication processor execution
          │       └── validate → persist its successful object generation
          │
          └── durable brand_meaning processor execution
                  └── validate → persist its successful object generations
```

Recommended identities and state:

- `IntelligenceExecution`: correlation envelope for one trigger and dependency snapshot; never an atomic commit boundary for sibling outputs.
- `IntelligenceProcessorExecution`: one durable record per processor attempt lineage, with processor/version, contract bundle, trigger, active outputs, canonical/Evidence manifest hashes, state, retry counters, lease, timestamps, error class, and telemetry summary.
- `IntelligenceObjectGeneration`: immutable validated result for one semantic object, linked to its processor execution.

Idempotency should be enforced by a unique logical key equivalent to:

```text
(brand_id, processor_id, processor_version,
 active_output_set, canonical_dependency_manifest_hash,
 evidence_manifest_hash, trigger_semantic_fingerprint)
```

Retries reuse the logical processor execution and create attempt records or increment a guarded attempt counter; they do not create duplicate generations. Provider adapters own bounded technical retries. Orchestration owns retry of a retryable processor failure. Validation/configuration/protection conflicts are not blindly retried.

Each processor validates and persists in its own transaction. The envelope becomes `SUCCEEDED`, `PARTIAL`, or `FAILED` for observation only. A successful `communication_profile` remains current if `brand_meaning` fails, and vice versa. Re-execution targets only impacted processors/active components.

Worker claims require database-backed lease token/expiry, heartbeats where execution can exceed a lease, bounded attempts, reclaim of expired work, and an atomic terminal transition. Telemetry must correlate trigger, execution, processor execution, attempt, Evidence acquisition, prompt build, validation, generation, and current-state transition without logging secrets or protected raw content.

## 13. Trigger and directed-invalidation architecture

Introduce semantic application events through a transactional outbox or an equivalently durable event publication boundary. Direct service dispatch is acceptable only as an initial adapter if the source transaction also records durable pending work. Events carry brand ID, source entity/ref/revision, actor/action ref where applicable, occurred time, semantic impact keys, and deduplication ID.

Required triggers:

- post-verification/post-profile initial availability;
- new representative owned-website Evidence;
- Brand messaging change;
- company-context/story change;
- confirmed Industry change;
- Brand-confirmed Intelligence edit;
- optional normalized Instagram Evidence;
- canonical Offering-context change affecting meaning; and
- authorized manual refresh scoped to processor/object and reason.

An invalidation resolver maps event impact keys to declared processor/component dependencies, marks only affected current components stale, and enqueues the minimum processor work. It must not expose a generic refresh-all operation.

## 14. Persistence options

### Option A — generic versioned Intelligence Object store

Relational execution/generation/current/component envelopes with contract-validated JSON values/metadata and normalized reference rows.

**Strengths:** stable semantic identity; generic field/item authority; immutable history; supersession; Evidence and business-state refs; freshness; one consumer model; future Audience/Visual Identity/Serviceability extensibility; safe coexistence/migration.

**Trade-offs:** requires a carefully frozen schema, component-path rules, indexes, and typed projection adapters.

### Option B — branch-specific structured persistence

Dedicated communication and meaning tables with typed columns plus duplicated metadata/history tables.

**Strengths:** simple SQL queries and strong branch-specific database types.

**Trade-offs:** repeats protection/lineage machinery; schema proliferation for item-level outputs and future branches; inconsistent metadata is likely; cross-branch consumer projection is harder; each frozen semantic evolution pressures migrations.

### Option C — extend BrandProfile JSON/current structured fields

Write results into `description`, `visualIdentity`, `strategicDna`, or a new profile JSON blob.

**Strengths:** smallest initial change and existing consumer reach.

**Trade-offs:** fails stable object/component identity, authority, candidates, history, supersession, references, freshness, concurrency, and migration safety. It entrenches dual truth and makes future branches harder.

| Criterion | Option A | Option B | Option C |
|---|---:|---:|---:|
| Stable semantic identity | Strong | Strong | Weak |
| Field/item authority and conflict | Strong | Medium/strong but duplicated | Weak |
| Metadata, refs, freshness, history | Strong | Strong but duplicated | Weak |
| Queryability | Strong with indexes/projections | Strong | Medium/weak |
| Consumer access | Strong canonical projection | Multiple adapters | Existing but semantically unsafe |
| Future branch support | Strong | Weak/medium | Weak |
| Migration safety | Strong | Medium | Weak |

## 15. Recommended persistence architecture

Freeze **Option A**: a generic relational envelope with contract-validated JSON payloads and component-level current state.

Likely logical records (names remain implementation-stage naming choices):

- **Execution:** trigger/correlation, brand, dependency/Evidence manifests, bundle version/hash, aggregate observation state.
- **Processor execution and attempt:** processor/version, active outputs, idempotency key, lease/retry/error/telemetry, prompt-build and model-profile lineage.
- **Object generation:** `(brand, semantic_object_id, generation_id)`, producer/contract versions, immutable value and object metadata, readiness/freshness-at-generation, supersedes link, processor execution.
- **Component generation/state:** stable component/item semantic path, immutable component value/metadata, and a current-state row keyed by `(brand, object_id, component_semantic_path)` with current generation, authority, protection revision, freshness/stale reason, candidate generation, and discrepancy state.
- **Reference rows:** generation/component to normalized Evidence refs and canonical business-state refs/revisions. JSON arrays may be a materialized copy for reads, but relational references are the integrity/query surface.
- **Action/audit relation:** authorized confirmation, rejection, candidate acceptance, supersession, and stale transitions linked to actor/action refs.

`communication_profile` needs component/item-level state because its fields and communication-constraint items can carry independent metadata/authority. The three `brand_meaning` outputs are separately addressable object components/generations even when produced in one processor call. The projection may assemble an object document, but protection must not be aggregate-only.

Use append-only generations plus a small mutable current-state pointer. Update it with row locking or optimistic revision/CAS. Never mutate an old generation to represent a new inference or confirmation.

## 16. Persistence ownership boundary

Permanent Intelligence persistence may own:

- derived Object/component/item values;
- Object/component/item metadata;
- normalized Evidence references;
- canonical business-state references and observed revisions;
- generation and processor lineage;
- readiness/freshness/stale reason; and
- candidate, discrepancy, supersession, and history relations.

It only references, and never becomes authoritative for:

- Brand identity and confirmed Industry;
- Offerings;
- Locations;
- visual assets;
- Offering availability; or
- Offering-to-Location relationships.

Denormalized display labels can exist only in non-authoritative read caches with source refs/revisions and must not be processor inputs.

## 17. Consumer read architecture

The canonical internal read model is an **object-oriented current Brand Intelligence projection**. A service such as `CurrentBrandIntelligenceProjectionService` should return requested semantic objects/components with:

```text
value
semantic identity and contract version
readiness
freshness and stale reason
authority/source
confidence/evidence strength where valid
Evidence refs and business-state refs
generation/updated time
candidate/discrepancy summary when authorized for the caller
```

Do not expose raw generation tables as the default API. Processor-oriented endpoints are operational/admin surfaces only. Branch-oriented responses are convenience groupings over the object projection. Brand Centre should receive a dedicated projection adapter that consumes the canonical current read model; it must not establish another source of truth.

During migration, an explicit compatibility adapter may populate legacy DTO shapes or select a legacy fallback. It must emit fallback/conflict telemetry and cannot silently dual-write permanent outputs into BrandProfile fields.

## 18. Brand-confirmed mutation and protection model

```text
authorized consumer/editor
        ↓
Brand Intelligence application mutation service
        ↓ authorization + semantic validation + expected revision
transaction: immutable BRAND_CONFIRMED generation
        + protected current-component pointer
        + action/audit ref + outbox event
        ↓
narrow downstream projection/invalidation
```

Authorization belongs in the application/API service and policy/guard layer, not in the AI processor, provider adapter, repository, or frontend. The service must verify brand membership/role, allowed component, action intent, expected current revision, and contract-valid value.

An AI processor can subsequently persist a conflicting derived candidate. The protected current pointer remains unchanged; discrepancy is visible to authorized consumers. Accepting/rejecting a candidate is another authorized action and immutable generation transition. A Brand-confirmed edit does not make the edited component stale merely because its source changed; it invalidates only declared downstream dependants/projections.

## 19. Wave 1 invalidation matrix

`stale` below means mark only declared affected components and schedule their owning processor when Evidence/dependencies are sufficient.

| Change | `brand_communication` | `brand_meaning` | Notes |
|---|---:|---:|---|
| Brand name change | Stale | Stale | Both declare canonical Brand identity context; dependency manifests decide component granularity. |
| Canonical domain change | Stale | Stale | Existing owned-site Evidence is no longer representative of the canonical domain; reacquire before processing. |
| Confirmed Industry change | Stale | Stale | Both consume confirmed Industry context. No legacy classifier read. |
| Brand messaging change/new representative messaging Evidence | Stale | Stale | Both Evidence contracts consume messaging. |
| Company story/context change | Stale | Stale | Both consume company context. |
| Offering composition/context affecting Brand meaning | Neither for communication | Stale | Only `brand_meaning` declares Offering context in Wave 1. |
| New communication-language Evidence | Stale | Neither | Recompute affected communication components. |
| New representative Instagram Evidence | Stale | Neither | Optional communication Evidence only; requires normalized capability. |
| Brand-confirmed communication edit | Neither for the protected edited component | Neither | Preserve current; invalidate only declared downstream consumers outside these sibling processors. Unprotected related components may be targeted only if a frozen dependency says so. |
| Brand-confirmed meaning edit | Neither | Neither for the protected edited component | Preserve current; only downstream consumers/projections are invalidated. |

## 20. `primary_language` compatibility migration

Backend audit found no `primary_language`, `primaryLanguage`, or `communication_profile` field in Prisma schema or `src`, and no current backend reader, writer, active consumer, or compatibility projection. The Stage 1A `core-identity.schema.ts` also has no language output. The legacy concept exists in architecture/Identity semantics, not in the accepted backend code shape.

Migration design:

- **New canonical read:** consumers read `communication_profile.primary_language` from the current Intelligence projection.
- **Temporary legacy fallback:** add only if an implementation-stage deployed-data/external-consumer audit discovers an actual historical store. Encapsulate it in the compatibility projection; never infer from country.
- **Conflict:** a protected current Wave value wins. A differing legacy value becomes telemetry/discrepancy context and cannot overwrite it.
- **Backfill:** do not perform a blind backfill. If real legacy values are discovered, import only with retained original source/provenance and a migration generation/action marker; otherwise allow normal Wave Evidence execution to produce a value or null.
- **Telemetry:** count Wave hits, legacy fallbacks, nulls, conflicts, and consumers still requesting legacy shape.
- **Retirement:** fallback usage is zero for an agreed observation window, all consumers use the new projection, and deployed-data audit confirms no required legacy-only records.

This assignment does not remove Identity behavior.

## 21. Brand meaning dual-truth audit

The permanent objects are net-new canonical Intelligence semantics in the accepted backend. Similar legacy fields are not proven equivalent:

- `BrandProfile.description`, read publicly and as Brand Centre `narrative.briefDescription`;
- `BrandProfile.visualIdentity.positioning` and `.valueProp`, written by legacy Brand DNA merge;
- `BrandProfile.visualIdentity.narrative` and `.toneOfVoice`;
- `BrandProfile.strategicDna.narrative.brandUsps`, `.briefDescription`-like projection, and `.toneOfVoice`;
- legacy `BrandIntelligenceScan.brandDnaRaw/brandDnaVerifiedSnapshot` fields `brand_narrative`, `brand_positioning`, and `core_value_proposition`; and
- Preview `brand_descriptor` and `brand_understanding_narrative`, which are explicitly Preview-only.

Active consumers include `BrandCentreDnaService`, Brand Centre deep scan and aggregate/co-pilot paths, `BrandProfileService`, and `PublicBrandService`. They create dual-truth risk if Wave writes are aliased into existing fields. Freeze the Wave projection as canonical first, then migrate consumers field by field through an explicit semantic mapping/product decision. Until then, legacy fields remain compatibility data and Wave does not dual-write them.

## 22. Serviceability prerequisite audit

| Canonical prerequisite | Classification | Exact backend state | Gap before Runtime Wave 2 |
|---|---:|---|---|
| Primary Brand geography | `PARTIAL` | `BrandProfile.countryCode`; M1 canonical `country`; Stage 1A country wrapper | Nullable/legacy provenance and “primary service geography” authority are not explicitly modeled. |
| Locations | `PARTIAL` | Prisma `Location`; reads in `src/features/brand-onboarding/brand-profile.service.ts`; created by surface-scan runners | No active/lifecycle or confirmation/authority state; scan-created records can be treated as current without serviceability-specific authority. |
| Offering availability | `PARTIAL` | Prisma `Offering.isActive`; writes in `brand-offerings.service.ts` and `BrandCentreDnaService` | Active is not geographic/temporal availability and lacks availability authority/version semantics. |
| Offering-to-Location | `AUTHORITY_UNCLEAR` | `Offering.locationIds String[]` | No relational FK/integrity, lifecycle, or authoritative mutation/read contract was found. |

Serviceability is not ready to join Runtime Wave 2 until Product/Application authority for these states and the Offering-to-Location relationship is frozen. This proposal does not design its runtime.

## 23. Bounded implementation stages

These are future stages, not authorization to implement.

### W1.0 — permanent runtime and persistence foundation

- **Objective:** add contract-bundle loading, execution/processor attempt records, immutable object/component generations, protected current state, reference rows, leases/idempotency, and telemetry.
- **Likely backend modules/files:** new `src/features/brand-intelligence/**`; Prisma schema plus reviewed migration; adapter additions under `src/intelligence/runtime/**`; Data Extraction port interfaces; application module wiring.
- **Schema implications:** all new execution, generation, current-component, reference, action/audit, and outbox tables/indexes; no reuse of Preview/Stage 1B tables.
- **Tests:** migrations/constraints, CAS/protection concurrency, idempotency, lease reclaim, partial commit, bundle drift, reference integrity, no BrandProfile writes.
- **Rollback boundary:** module/worker disabled; new tables additive and unread by existing consumers.
- **Exit gate:** foundation contract frozen, migrations reviewed, two synthetic processors can independently persist/read protected current state.

### W1.1 — `brand_communication`

- **Objective:** acquire normalized communication Evidence, execute/validate the frozen processor, and persist `communication_profile` components.
- **Likely modules/files:** `src/features/brand-intelligence/processors/brand-communication/**`; Wave validators/registry; Data Extraction capability adapters; contract-bundle manifest registration.
- **Schema implications:** none beyond W1.0 unless normalized Evidence capture ownership is frozen in a separate Data Extraction migration.
- **Tests:** language null/ISO rules, no geography inference, constraint item identity/metadata, protected candidate, Evidence loss, retry/failure classes, exact ID/version drift.
- **Rollback boundary:** disable only the processor registration/worker route; retained generations remain unread unless projection enabled.
- **Exit gate:** canonical current projection returns contract-valid communication state with lineage and no legacy writes.

### W1.2 — `brand_meaning`

- **Objective:** execute/validate three independent meaning outputs using normalized company/messaging/Offering Evidence.
- **Likely modules/files:** `src/features/brand-intelligence/processors/brand-meaning/**`; meaning validators/registry; Offering-context Data Extraction adapter.
- **Schema implications:** W1.0 generic tables only.
- **Tests:** independent null/partial outcomes, semantic distinctness, Evidence/business refs, sibling failure isolation, protected candidates, no Preview promotion/BrandProfile writes.
- **Rollback boundary:** disable only meaning registration/trigger routing.
- **Exit gate:** each meaning component can independently become current/protected/stale and communication success is unaffected.

### W1.3 — canonical current projection and bounded consumer adapters

- **Objective:** expose object-oriented internal reads and a Brand Centre compatibility adapter without changing frontend semantics yet.
- **Likely modules/files:** `src/features/brand-intelligence/queries/**`, DTOs/controllers if authorized, explicit adapter under Brand Centre/Public Brand owners.
- **Schema implications:** optional read-model/index only; no canonical values copied into BrandProfile.
- **Tests:** authorization, metadata redaction, current-vs-candidate selection, stale/readiness, batched reads, legacy fallback telemetry.
- **Rollback boundary:** route/adapter feature flag returns legacy consumer data.
- **Exit gate:** named pilot consumers read the canonical projection and raw generations are not public API.

### W1.4 — durable triggers and directed invalidation

- **Objective:** publish semantic source events, map dependencies, mark narrow stale state, and enqueue idempotent recompute.
- **Likely modules/files:** `src/features/brand-intelligence/events/**`, worker/orchestrator, source-service outbox hooks in M1 Brand/Offering/Evidence mutation owners.
- **Schema implications:** outbox/invalidation records if not included in W1.0.
- **Tests:** full invalidation matrix, duplicate/out-of-order events, transaction failure, stale-before-recompute, protected current behavior, no refresh-all path.
- **Rollback boundary:** stop event consumers; current data remains readable with previous freshness.
- **Exit gate:** every Wave trigger has a durable producer, minimum impact mapping, and replay-safe processor scheduling.

### W1.5 — `primary_language` and legacy meaning consumer migration

- **Objective:** move discovered consumers to the canonical projection, add only evidence-backed legacy fallback/backfill, and measure retirement readiness.
- **Likely modules/files:** compatibility query adapters and consumer services found in the implementation-stage usage/data audit; no Identity deletion.
- **Schema implications:** normally none beyond migration action generations; a temporary mapping table requires separate approval if an external legacy store is discovered.
- **Tests:** fallback precedence, conflicts, protected value wins, telemetry, public/Brand Centre DTO parity where Product approves semantic mapping.
- **Rollback boundary:** compatibility adapter selects legacy reads; permanent generations remain intact.
- **Exit gate:** agreed consumer cohort migrated, fallback metrics stable, dual-truth mappings explicitly accepted; Identity retirement remains a later assignment.

## 24. Product blockers

Product/Application Authority must freeze before consumer migration:

- which current consumers may display each permanent object and which metadata/candidate details each role may see;
- semantic mappings, if any, from Wave `brand_description`, `positioning`, and `value_proposition` to existing Brand Centre/Public Brand fields;
- who may confirm/edit each object component/item and which roles may accept/reject candidates;
- manual-refresh eligibility/rate/UX semantics;
- whether Instagram Evidence is opt-in, which Brand integration scopes authorize it, and its representativeness/retention policy; and
- Serviceability authority for primary geography, Location lifecycle, geographic Offering availability, and Offering-to-Location mapping.

These do not change frozen processor semantics.

## 25. Data Extraction blockers

Data Extraction must freeze capability contracts for:

- normalized owned-site messaging, company-context, and Offering-context captures;
- observed communication-language signals;
- derived communication-constraint Evidence;
- referenceable Brand confirmation/action Evidence;
- optional representative brand Instagram Evidence;
- Evidence identity, capture time, source class/resource ref, freshness, coverage, representativeness, provenance, quality, retention, and deduplication;
- capability error/availability semantics and acquisition idempotency; and
- ownership/location of durable normalized Evidence captures versus Wave generation references.

Current provider adapters are sufficient foundations but do not satisfy these semantic contracts by themselves.

## 26. Backend blockers and implementation gate

Before code begins, Systems Architecture/Backend must freeze:

1. Option A and the exact execution/generation/current-component/reference/outbox schema, indexes, retention, and migration plan;
2. component semantic-path rules for scalar, subfield, and list-item authority;
3. protected-state transition/CAS/discrepancy transaction rules;
4. contract-bundle packaging, release ownership, checksum manifest, and CI drift gates;
5. structural-plus-semantic validator interfaces and registration keys;
6. canonical Brand-state application port and removal of permanent discovery-lead coupling;
7. Data Extraction capability ports and normalized Evidence record ownership;
8. durable event/outbox, worker lease, retry, idempotency, and error-state ownership;
9. canonical current projection/API contract and authorization/redaction; and
10. compatibility policy that forbids silent Wave dual-writes to legacy BrandProfile/Preview/Identity stores.

No provider/model choice is required for this architecture freeze. No Wave 1 implementation should start while these structural contracts remain proposed rather than frozen.

## 27. Final recommendation

Freeze this reconciliation with Option A, per-component protected state, independent durable processor execution, an M1 application port, normalized Data Extraction capabilities, server-owned version-pinned validation, durable directed invalidation, and an object-oriented current projection.

**Verdict:** `BRAND_INTELLIGENCE_WAVE1_BACKEND_ARCHITECTURE_READY_FOR_FREEZE`

This verdict means the reconciliation artifact is ready for Systems Architect review/freeze. It does **not** mean backend implementation is ready or authorized; Sections 24–26 are mandatory pre-code gates.
