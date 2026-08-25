# Brand Intelligence Wave 1 — Data Extraction Evidence Capability Contract

**Status:** `FROZEN`  
**Owner:** Data Extraction Engine  
**Scope:** Gate B contracts required before `brand_communication` and `brand_meaning` execute.  
**Starting architecture baseline:** `Piyush1087/dummy_tcs/main@c4f5cb8713f75c118efa038d2cc39e987db5321a`  
**Backend audited baseline:** `Piyush1087/creator-commerce-backend-v2-clone/development@d76604537701437eff5df12cd11e8595d54395be`  
**Additional DE implementation reference:** `agent/gatekeeper-v1-data-extraction@6ad9e4e2f1976b4dc35721b6dc06ce2d29db4ea9`

## 1. Gate B decision

Gate B should introduce one durable, provider-neutral normalized Evidence contract family owned by Data Extraction.

Minimum Wave 1 capability set:

```text
owned_website.brand_messaging
owned_website.brand_company_context
owned_website.offering_context
observed_brand_communication_language_signals
derived_communication_constraint_evidence
```

The first two are shared by `brand_communication` and `brand_meaning` and are defined once.

This architecture does **not** implement acquisition, select providers/models, create persistence schema, alter frozen Intelligence semantics, or promote Evidence into `BRAND_CONFIRMED`.

## 2. Permanent boundary

```text
Data Extraction
→ acquire / capture / normalize / classify acquisition quality
→ preserve provenance, identity, coverage, representativeness and conflicts
→ deliver Evidence

Intelligence
→ decide semantic meaning, precedence, primary language, positioning,
  value proposition, communication constraints and durable Brand meaning
```

Data Extraction may classify an observed explicit rule or repeated pattern. It may not decide that the pattern is a permanent Brand rule.

## 3. Shared normalized Evidence envelope

Canonical proposal:

`data-extraction/contracts/normalized_evidence_envelope_v1.yaml`

Every Evidence item carries:

```text
evidence_ref
capability_id
brand_id
resource_ref / resource_type / canonical_url? / page_role?
capture_ref / captured_at / observed_at?
content_excerpt? / normalized_content_ref? / content_hash
semantic_observation_key? / observation_polarity?
source_class
representativeness
coverage
freshness
acquisition_quality
provenance
deduplication
normalized_payload
```

Provider-specific response fields remain below the semantic envelope.

## 4. Evidence identity model

### Resource identity — `resource_ref`
Stable provider-neutral identity of the source resource, such as a canonical owned URL. It survives re-capture.

### Capture identity — `capture_ref`
Immutable identity of one acquisition event. A repeated acquisition creates a new capture even when content is unchanged.

### Evidence item identity — `evidence_ref`
Immutable normalized item identity within a capture/capability. Duplicate extraction from the same capture collapses to one item; a later capture retains separate historical Evidence.

### Semantic observation identity — `semantic_observation_key`
Optional grouping key for the same normalized observed meaning across Evidence items, captures or resources. It supports repetition/conflict analysis without collapsing historical events.

Provider request IDs are never permanent Evidence identity.

## 5. Recapture / deduplication behavior

| Case | Behavior |
|---|---|
| Same page recaptured unchanged | same resource; new capture; same content hash; new capture-scoped Evidence; link prior equivalent Evidence |
| Same page changed | same resource; new capture/hash/Evidence; preserve prior history |
| Same excerpt extracted twice from same capture | deduplicate to one Evidence item |
| Same semantic signal on several pages | preserve Evidence history; semantic grouping allowed; preserve repetition/supporting resources |
| Repeated site chrome/navigation | collapse duplicate noise |
| Repeated representative messaging | preserve repetition count/supporting resource refs |

## 6. Representativeness

Shared vocabulary:

```text
PERSISTENT_BRAND_LEVEL
REPEATED_REPRESENTATIVE
CONTEXT_SPECIFIC
OFFERING_SPECIFIC
INCIDENTAL
```

Representativeness answers how representative an observation is of reusable Brand-level behavior/context. It does not answer how much source surface was acquired.

## 7. Coverage

Shared vocabulary:

```text
SINGLE_RESOURCE
MULTI_RESOURCE_PARTIAL
MULTI_RESOURCE_BROAD
SITE_WIDE_BOUNDED
```

Coverage describes how much of the relevant source surface was observed. It is independent from representativeness.

## 8. Freshness

Data Extraction freshness is capture/resource-state freshness:

```text
CURRENT
POSSIBLY_STALE
UNKNOWN
```

No universal TTL is introduced. Basis may include same active run, unchanged content hash, known source revision, explicit invalidation, material resource change, or unknown revision/age.

Freshness is not acquisition quality, Intelligence readiness or authority.

## 9. Provenance

Durable provenance preserves resource/capture identity, URL where applicable, capture time, provider-neutral capture-method class, normalization version, content hash, parent Evidence/capture refs, and optional `provider_execution_ref`.

Operational-only provider details remain below the envelope:

```text
provider name
endpoint
model
provider request ID
retry details
token/cost
headers / credentials
raw provider response/error
```

A durable `provider_execution_ref` may point to operational telemetry without making provider identity semantic.

## 10. Acquisition quality and availability

Provider-neutral acquisition quality:

```text
COMPLETE
PARTIAL
DEGRADED
UNAVAILABLE
```

Failure categories include:

```text
RESOURCE_UNAVAILABLE
ACCESS_BLOCKED
CONTENT_EXTRACTION_DEGRADED
INSUFFICIENT_RELEVANT_CONTENT
PROVIDER_TECHNICAL_FAILURE
NORMALIZATION_FAILURE
SECURITY_REJECTED
POLICY_NOT_AUTHORIZED
```

Capability status:

```text
AVAILABLE
PARTIAL
DEGRADED
UNAVAILABLE
NOT_REQUESTED
```

with `retryability`, reason codes, coverage, quality and Evidence refs.

A successful capability with zero matching items is valid and is not negative Evidence or a DE failure.

## 11. `owned_website.brand_messaging`

Contract: `data-extraction/contracts/owned_website_brand_messaging_v1.yaml`

Principal surfaces include homepage, About/company, Brand/story, substantive navigation/overview copy and representative category/portfolio/service overview.

Campaign landing pages, one PDP/service headline and support/FAQ are contextual/downweighted. Legal boilerplate, testimonial, UGC/reviews, pure navigation labels and invisible SEO metadata cannot establish representative Brand messaging alone.

The contract captures message text, message role, authorship/visibility and representativeness. It does **not** emit tone, positioning, value proposition, primary language or hard Brand constraints.

## 12. `owned_website.brand_company_context`

Contract: `data-extraction/contracts/owned_website_brand_company_context_v1.yaml`

Captures company/Brand-authored statements about what the company is, history, mission, operating model, company/Brand story, category/business context, stated principles and persistent capabilities/scope.

It preserves the distinction between:

```text
DIRECT_FIRST_PARTY_FACTUAL_STATEMENT
BRAND_AUTHORED_PRINCIPLE_OR_VALUE
BRAND_AUTHORED_MARKETING_ASSERTION
CLAIM_REQUIRING_EXTERNAL_VERIFICATION
```

DE does not verify marketing claims into truth and does not convert these statements into Brand Intelligence.

## 13. `owned_website.offering_context`

Contract: `data-extraction/contracts/owned_website_offering_context_v1.yaml`

Generalization scope:

```text
SINGLE_OFFERING
MULTIPLE_OFFERINGS
BRAND_LEVEL_PORTFOLIO
```

May capture observed offering title/name, category, description, feature/value language, portfolio breadth and repeated Offering themes.

Boundary:

```text
extracted Offering context
!= canonical Offering state
```

Canonical Offering identity/availability remains application-owned. A canonical Offering ref may be attached only when supplied by an existing application reconciliation; Data Extraction never creates it.

## 14. `observed_brand_communication_language_signals`

Contract: `data-extraction/contracts/observed_brand_communication_language_signals_v1.yaml`

Frozen signal types:

```text
EXPLICIT_LANGUAGE_DECLARATION
PRINCIPAL_MESSAGING_LANGUAGE
TRANSLATION_LOCALIZATION_VARIANT
INCIDENTAL_FOREIGN_FRAGMENT
LEGAL_BOILERPLATE_LANGUAGE
LOCATION_OR_PROPER_NAME_LANGUAGE
```

DE may normalize observed language, signal type, surface importance, location, coverage, repetition and message Evidence refs. It must not determine `communication_profile.primary_language`.

Forbidden language proxies:

```text
country
geography
headquarters
currency
Industry
audience geography
markets served
domain TLD
```

## 15. `derived_communication_constraint_evidence`

Contract: `data-extraction/contracts/derived_communication_constraint_evidence_v1.yaml`

Allowed normalized signals:

```text
EXPLICIT_BRAND_AUTHORED_PROHIBITION
EXPLICIT_REQUIRED_TERMINOLOGY
EXPLICIT_CLAIM_OR_DISCLAIMER_RULE
PERSISTENT_OWNED_SOURCE_INSTRUCTION
REPEATED_COMMUNICATION_PATTERN
```

Allowed deterministic derivation includes explicit-rule detection, terminology requirement detection, claim/disclaimer instruction detection, persistent instruction classification, repeated-pattern grouping/counting and polarity classification.

Hard boundary:

```text
REPEATED_COMMUNICATION_PATTERN
!= permanent communication constraint
```

Every derived item keeps parent Evidence refs. Intelligence decides whether any item supports a durable constraint interpretation.

## 16. Conflict preservation

DE preserves conflicts rather than resolving them. Examples include different shipping/availability statements, multilingual principal surfaces, conflicting company descriptions, Offering claims, or an owned source saying “never make medical claims” while another owned campaign surface contains one.

Each item keeps provenance, representativeness and capture state. Semantic precedence is Intelligence-owned.

## 17. Negative Evidence

Explicit negative/restriction statements are Evidence:

```text
not available in region
service excluded
claim prohibited
term must not be used
```

“Not observed” is not negative Evidence. No item is emitted merely because a statement/term was absent from sampled content.

## 18. Healthcare / claim-sensitive preservation

DE preserves source distinctions such as:

```text
BRAND_AUTHORED_CLAIM
CLINICAL_CREDENTIAL
REGULATORY_STATEMENT
TESTIMONIAL
GUARANTEED_OUTCOME_LANGUAGE
```

DE must not validate a clinical claim as factual proof, summarize a testimonial into a Brand fact, collapse regulatory language and marketing assertion into one item, or infer a compliance rule without explicit Evidence. Bounded verbatim excerpts are preferred for explicit claim/rule Evidence.

## 19. Persistence ownership recommendation

**Recommendation: durable Data Extraction Evidence store.**

Conceptual ownership:

```text
Data Extraction
├── resource identity
├── capture history
├── normalized content/content refs
├── normalized Evidence items
├── deduplication/equivalence
├── acquisition quality/freshness
└── operational provenance refs

Intelligence generation
├── evidence_refs
├── bounded inline Evidence context used for execution
├── processor/runtime lineage
└── derived semantic output
```

This supports traceability, cross-processor reuse, provider independence, re-normalization without reacquisition where permitted, deduplication near capture history, and future Audience/Visual/Serviceability/Product reuse.

No persistence schema is authorized by Gate B.

## 20. Evidence reference delivered to Intelligence

Minimum reference:

```text
evidence_ref
capability_id
source_class
resource_ref
captured_at
freshness
representativeness
coverage
acquisition_quality
normalized_payload
provenance_summary
normalized_content_ref?
```

Delivery mode: **bounded inline + reference**. Small structured payloads/excerpts may be inline; large normalized content remains referenced. Intelligence generations persist Evidence refs rather than full raw provider content.

## 21. Acquisition idempotency

Request identity is based on:

```text
brand_id
capability_id
normalized resource set/scope
requested freshness intent
known source/resource revision
normalization contract version
```

Provider request IDs are never idempotency authority.

A new acquisition is legitimate after explicit refresh, source revision/material invalidation, scope expansion, missing/quality-inadequate capture, or no reusable capture. A normalization-version change may re-normalize retained compatible content without external reacquisition.

## 22. Provider fallback behavior

Capability identity remains provider-neutral. For an owned-website capability, DE may internally use semantically equivalent owned-site mechanisms:

```text
direct owned-site acquisition
→ alternate owned-site acquisition mechanism
→ rendered owned-site acquisition
→ capability PARTIAL/DEGRADED/UNAVAILABLE
```

Intelligence sees capability availability/quality rather than “which provider won”. Provider details stay behind operational provenance refs.

A fallback that changes semantic source class is **not** equivalent: public-web search cannot silently replace `owned_website.brand_messaging`.

## 23. Privacy / retention classes

Reserved source/retention classes:

```text
PUBLIC_OWNED_SITE
BRAND_AUTHENTICATED_PRIVATE
USER_ACTION_CONFIRMATION
INSTAGRAM_CONNECTED
```

Wave 1 Gate B owned-website Evidence depends only on `PUBLIC_OWNED_SITE`. Instagram is not required.

## 24. Current backend reuse map

Audited baseline: `development@d76604537701437eff5df12cd11e8595d54395be`.

| Component | Classification | Gate B use |
|---|---|---|
| `brand-preview/data-extraction/brand-preview-evidence.service.ts` | `REUSE_WITH_NORMALIZATION` | Bounded homepage/About/offering acquisition and Cheerio coverage logic reusable; URL-style refs need normalized resource/capture/item identities. |
| `brand-preview/data-extraction/brand-preview-evidence.port.ts` | `REUSE_WITH_NORMALIZATION` | Useful capability-port precedent; Wave 1 needs reusable capability IDs/results rather than Preview-only types. |
| `brand-preview/data-extraction/brand-preview-enrichment.service.ts` | `COMPATIBILITY_ONLY` | Public-web enrichment is not an owned-website substitute; provider/provenance mechanics may inform later IE-requested enrichment. |
| `surface-scan/stage1b/text-context-builder.service.ts` | `REUSE` | Cheerio clean-text, title, page-role and internal-link normalization are a strong deterministic transformer base. |
| `surface-scan/stage1a/zyte-homepage.strategy.ts` | `REUSE_WITH_NORMALIZATION` | Static/rendered owned-site acquisition mechanics reusable below provider-neutral contracts. |
| `surface-scan/stage1a/playwright-homepage.strategy.ts` | `REUSE_WITH_NORMALIZATION` | Browser acquisition mechanics reusable; current output is identity-oriented and requires shared Evidence normalization. |
| Stage 1A/1B orchestration | `LEGACY_REFERENCE_ONLY` | Full legacy scan lifecycle/crawl/Brand DNA sequencing must not become Wave capability semantics. |
| `McpPlannerService` / seven-page planning | `LEGACY_REFERENCE_ONLY` | Historical crawl-planning reference only; not required by Gate B. |
| `provider-execution.contract.ts` | `REUSE_WITH_NORMALIZATION` | Availability/error/telemetry concepts useful; provider execution refs remain below Evidence identity. |
| `structured-evidence-execution.service.ts` | `REUSE_WITH_NORMALIZATION` | Good DE-owned provider-dispatch boundary for model-backed execution; not itself website Evidence semantics. |
| Gemini structured/Gatekeeper adapters | `COMPATIBILITY_ONLY` for Gate B owned-site Evidence | Operational connectivity/provenance patterns only; model identity must not become semantic. |
| OpenAI structured adapter | `COMPATIBILITY_ONLY` | Model execution infrastructure, not owned-website semantic Evidence. |
| Parallel company research adapter | `COMPATIBILITY_ONLY` | Public-web source class differs from owned-site Evidence and cannot silently satisfy it. |
| Preview snapshots/runs | `LEGACY_REFERENCE_ONLY` | Preview synthesis/output is not permanent Wave Evidence. |
| Legacy `BrandIntelligenceScan.runtimeContext` | `LEGACY_REFERENCE_ONLY` | Useful page context but feature-owned legacy scan state, not durable normalized Evidence ownership. |

No current component provides the complete Wave 1 durable resource/capture/Evidence-item/semantic-observation identity model.

## 25. Gate B readiness matrix

### `brand_communication`

```text
owned_website.brand_messaging                 CONTRACT_READY
owned_website.brand_company_context           CONTRACT_READY
observed_brand_communication_language_signals CONTRACT_READY
derived_communication_constraint_evidence     CONTRACT_READY
```

`brand_user_input_and_confirmations` remains a separate backend/application-state handoff and is not redefined here.

A contract being available does not require non-empty Evidence in every run.

### `brand_meaning`

```text
owned_website.brand_company_context CONTRACT_READY
owned_website.brand_messaging       CONTRACT_READY
owned_website.offering_context      CONTRACT_READY
```

Processor partial semantics remain governed by the frozen Intelligence contracts.

## 26. Future reuse

The envelope can later support Audience, Visual Identity, Serviceability, Product Intelligence and Market/Competitor Intelligence without provider-specific redesign. Their semantics are not defined here.

## 27. Validation results required before freeze

Programmatic/schema validation must confirm:

```text
provider-neutral capability IDs
one shared Evidence envelope across all five capabilities
source != authority
coverage != representativeness
freshness != acquisition quality
no country/geography/currency/Industry → language inference
Offering extraction != canonical Offering truth
repeated communication pattern != hard constraint
conflicts preserved
explicit negative Evidence != absence
provider IDs != Evidence IDs
Instagram not required
no permanent Brand Intelligence output
no BRAND_CONFIRMED authority
no backend implementation/provider rewrite
```

## 28. Systems Architect freeze request

If validation passes, recommended verdict:

`BRAND_INTELLIGENCE_WAVE1_EVIDENCE_CONTRACTS_READY_FOR_FREEZE`

This is a request for Systems Architect freeze, not an independent Data Extraction freeze.