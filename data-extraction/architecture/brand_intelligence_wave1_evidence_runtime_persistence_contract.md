# Brand Intelligence Wave 1 — Durable Normalized Evidence Runtime & Persistence Contract

**Status:** `FROZEN`  
**Owner:** Data Extraction Engine  
**Scope:** Durable normalized Evidence runtime/persistence architecture required to deliver frozen Wave 1 Evidence capabilities to Brand Intelligence.  
**Architecture baseline:** `Piyush1087/dummy_tcs/main@017dbceac494f0861ec9a6bea7af3129b70fa5cb`  
**Backend audited baseline:** `Piyush1087/creator-commerce-backend-v2-clone/development@24ae85190fe7133b9cf5c485878f6a773a612fb9`  
**Implementation authorized by this contract:** no

## 1. Purpose

This contract defines the implementation architecture for the durable normalized Evidence layer required by Wave 1 after the Evidence semantic contracts were frozen.

It covers:

- stable resource, capture and Evidence identity;
- durable provider-neutral Evidence persistence;
- normalized content retention/reference policy;
- capability execution and idempotency;
- freshness, acquisition quality, coverage and representativeness;
- semantic-observation grouping without collapsing history;
- conflict and negative-Evidence preservation;
- bounded owned-website acquisition planning;
- implementation architecture for the first five Wave 1 capabilities;
- the Data Extraction runtime/query boundary that adapts into the accepted W1.0E `IntelligenceEvidenceReader`; and
- additive backend schema/repository staging.

It does **not** implement providers, modify Prisma, enable `brand_communication` or `brand_meaning`, choose provider/model policy, or move Evidence ownership into Intelligence.

## 2. Frozen authorities preserved

This contract is subordinate to:

- `data-extraction/contracts/normalized_evidence_envelope_v1.yaml`;
- `data-extraction/contracts/owned_website_brand_messaging_v1.yaml`;
- `data-extraction/contracts/owned_website_brand_company_context_v1.yaml`;
- `data-extraction/contracts/owned_website_offering_context_v1.yaml`;
- `data-extraction/contracts/observed_brand_communication_language_signals_v1.yaml`;
- `data-extraction/contracts/derived_communication_constraint_evidence_v1.yaml`;
- `data-extraction/architecture/brand_intelligence_wave1_evidence_capability_contract.md`;
- `intelligence/architecture/shared_intelligence_metadata_contract.yaml`;
- `intelligence/architecture/brand_intelligence_execution_and_maturity_contract.md`; and
- `intelligence/architecture/brand_intelligence_w1_0_runtime_persistence_contract.md`.

Permanent boundary:

```text
Data Extraction
→ owns resource/capture/content/Evidence identity and delivery
→ owns Evidence quality/freshness/coverage/representativeness/provenance
→ owns deduplication/equivalence/conflict preservation

Intelligence
→ consumes Evidence refs and bounded Evidence context
→ interprets semantics and precedence
→ produces durable Intelligence
```

## 3. Current backend audit

Backend baseline: `development@24ae85190fe7133b9cf5c485878f6a773a612fb9`.

| Component | Classification | Runtime/persistence conclusion |
|---|---|---|
| `src/features/data-extraction/data-extraction.module.ts` | `REUSE_WITH_NORMALIZATION` | Valid Data Extraction boundary and provider runtime host. Must later export capability/repository/read-port services rather than only provider adapters. |
| `src/features/data-extraction/contracts/provider-execution.contract.ts` | `REUSE_WITH_NORMALIZATION` | Useful provider execution availability/error/telemetry vocabulary. Provider result is not durable normalized Evidence identity. |
| `src/features/data-extraction/services/structured-evidence-execution.service.ts` | `COMPATIBILITY_ONLY` for owned-site Evidence | Good DE-owned model-provider dispatch boundary; not an owned-website Evidence persistence/runtime service. |
| `brand-preview/data-extraction/brand-preview-evidence.service.ts` | `REUSE_WITH_NORMALIZATION` | Bounded homepage/About/offering acquisition, direct→Zyte escalation and early-stop logic are reusable. URL-shaped refs and transient page arrays are not durable Wave Evidence. |
| `brand-preview/data-extraction/brand-preview-evidence.port.ts` | `REUSE_WITH_NORMALIZATION` | Useful capability-port precedent, but Preview-only payload and model-specific enrichment port are not the permanent Wave reader. |
| `surface-scan/stage1b/text-context-builder.service.ts` | `REUSE` | Strong Cheerio clean-text/title/internal-link transformer. Page-role vocabulary must be normalized/expanded for Wave capability contracts. |
| `surface-scan/stage1a/zyte-homepage.strategy.ts` | `REUSE_WITH_NORMALIZATION` | HTTP-body→rendered acquisition mechanics reusable below provider-neutral capture semantics. Provider identity stays operational. |
| `surface-scan/stage1a/playwright-homepage.strategy.ts` | `REUSE_WITH_NORMALIZATION` | Browser/rendered acquisition mechanics reusable; existing output remains identity-focused and not durable normalized Evidence. |
| Gatekeeper Gemini/Parallel/OpenAI Data Extraction adapters | `COMPATIBILITY_ONLY` | Operational/provider patterns may be reused. They are not semantic defaults for owned-site Wave capabilities. |
| Brand Preview run/snapshot persistence | `LEGACY_REFERENCE_ONLY` | Preview lifecycle store, not durable normalized Evidence ownership. |
| `BrandIntelligenceScan.runtimeContext` / Stage 1B snapshots | `LEGACY_REFERENCE_ONLY` | Useful historical page context; feature-owned legacy scan state cannot become the durable Evidence store. |
| W1.0 `IntelligenceEvidenceReference` | `REUSE_AS_CONSUMER_REFERENCE_ONLY` | Correctly stores references to Data Extraction Evidence but intentionally does not own Evidence payloads/resources/captures. |
| W1.0 `ProcessorExecution.evidence_manifest` | `REUSE_AS_CONSUMER_MANIFEST` | Correct destination for deterministic Evidence manifests once DE can produce stable refs. It is not the Evidence store. |
| W1.0E `IntelligenceEvidenceReader` | `ACCEPTED_CONSUMER_PORT` | Permanent Intelligence-side reader boundary. DE must adapt into it rather than redefine it. |
| W1.0E `EvidenceManifestBuilder` | `ACCEPTED_CONSUMER_MANIFEST_BUILDER` | Intelligence owns the exact consumed-reference manifest/hash. DE capability manifests are upstream production lineage, not replacements. |
| W1.0E `MissingDataExtractionEvidenceAdapter` | `REUSE_UNTIL_DE_PREREQUISITE_READY` | Correct fail-closed production placeholder returning `DE_EVIDENCE_STORE_PREREQUISITE_MISSING`. Replace only at DE-W1.0F after durable Evidence/query semantics exist. |
| Durable DE resource table | `NOT_FOUND` | Missing. |
| Durable DE capture table | `NOT_FOUND` | Missing. |
| Durable normalized content artifact/reference | `NOT_FOUND` | Missing. |
| Durable normalized Evidence item store | `NOT_FOUND` | Missing. |
| Durable semantic-observation/equivalence/conflict store | `NOT_FOUND` | Missing. |
| Durable capability execution/result store | `NOT_FOUND` | Missing. |

## 4. Current-state verdict

```text
DURABLE_NORMALIZED_EVIDENCE_STORE_NOT_FOUND
```

The existing `IntelligenceEvidenceReference` is deliberately a **reference-only consumer record**. It contains `evidence_ref`, capability/capture identity, provider-neutral source class, capture time and Evidence freshness for Intelligence lineage, but it has no normalized page/content payload and is owned by Intelligence generation history.

W1.0E correctly preserves this boundary with:

```text
MissingDataExtractionEvidenceAdapter
→ DE_EVIDENCE_STORE_PREREQUISITE_MISSING
```

It therefore cannot substitute for:

```text
Data Extraction resource
→ capture history
→ normalized content
→ normalized Evidence items
→ semantic grouping/conflict relations
→ capability execution/read lookup
```

Preview snapshots, provider envelopes and runtime logs also do not satisfy this requirement.

## 5. Core identity model

Four identities remain permanently distinct.

### 5.1 `resource_ref`

Stable, Brand-scoped provider-neutral identity of one source resource.

For an owned website the durable address is conceptually:

```text
brand_id
+ source_class = OWNED_WEBSITE
+ canonical_resource_key
```

`resource_ref` is an opaque record ID. Idempotent resource lookup uses a canonical resource-key hash; provider request IDs never participate.

### 5.2 `capture_ref`

Immutable identity of one logical acquisition event for one resource.

One logical capture may include several technical/provider attempts. Those attempts remain operational provenance underneath the single capture.

### 5.3 `evidence_ref`

Immutable identity of one normalized Evidence item emitted from one capture under one capability and normalization contract version.

Creation is idempotent using the canonical tuple:

```text
brand_id
capture_ref
capability_id
normalization_contract_version
item_fingerprint
```

The stored `evidence_ref` may remain an opaque UUID; the tuple uniqueness is the idempotency authority.

### 5.4 `semantic_observation_key`

Optional Brand-scoped grouping identity for materially equivalent normalized meaning across resources, captures or Evidence items.

It supports:

- repetition analysis;
- supporting-resource aggregation;
- equivalence lookup; and
- conflict relationship detection.

It is **not** a mutable Evidence row and never replaces historical `evidence_ref` values.

## 6. Resource identity and URL canonicalization

### 6.1 Canonical URL handling

For owned web resources:

- lowercase scheme/host;
- remove fragments;
- normalize default ports;
- normalize URL encoding consistently;
- remove known tracking-only parameters such as UTM/click identifiers;
- preserve query parameters that materially select content;
- sort retained query parameters deterministically;
- preserve meaningful path identity;
- use the final validated owned-site destination when a safe redirect establishes equivalence.

### 6.2 Redirects

A redirect does not automatically create a new resource.

```text
requested URL
→ safe redirect
→ same durable page/resource
```

may be represented by one `resource_ref` plus alias history when the redirect establishes that both addresses refer to the same owned resource.

A redirect to a materially different source/surface creates a different resource or a rejected acquisition according to network/source policy.

### 6.3 Canonical URL changes

A stable resource may acquire a new canonical URL when there is explicit redirect/canonical-link evidence of a move. Preserve historical aliases rather than rewriting old capture URLs.

If the old and new URLs remain independently active/materially distinct, create separate resources.

### 6.4 Tracking variants

Tracking-only variants resolve to the same resource key.

Content-selecting variants are distinct unless explicit canonical/redirect evidence proves equivalence.

### 6.5 Same content through aliases

Content-hash equality alone is insufficient to merge resource identity. Merge aliases only when URL/canonical/redirect semantics establish equivalence.

This prevents site-wide template duplication from collapsing unrelated pages.

### 6.6 Localized variants

Localized versions are separate `resource_ref` values linked by a resource relation such as `LOCALIZED_VARIANT_OF` / shared localization family.

They must not be deduplicated into one resource merely because translated pages share structure.

## 7. Capture semantics

A `capture_ref` represents one logical acquisition event.

Rules:

```text
same resource recaptured unchanged
→ same resource_ref
→ new capture_ref
→ content hash may remain the same

same resource changed
→ same resource_ref
→ new capture_ref
→ new content hash
```

Provider retries inside one logical acquisition do not create new captures unless a later retry is deliberately promoted to a separate completed source snapshot. Normally all technical attempts link to the same capture execution.

A capture may end with usable content or terminal acquisition quality such as `UNAVAILABLE`. Failed provider attempts with no logical source capture remain provider execution telemetry, not synthetic Evidence.

Capture metadata becomes immutable after terminal completion.

## 8. Logical persistence architecture

### 8.1 `DataExtractionResource`

**Purpose:** Brand-scoped durable provider-neutral source-resource identity.

Key fields:

```text
resource_id / resource_ref
brand_id
source_class
resource_type
canonical_resource_key
canonical_resource_key_hash
canonical_url?
created_at
retired_at?
```

Rules:

- `resource_ref` immutable;
- canonical identity transitions preserve alias history;
- unique `(brand_id, source_class, canonical_resource_key_hash)`;
- indexes on `(brand_id, source_class)` and `(brand_id, canonical_url)`;
- no cross-Brand resource identity reuse.

Retention: `RETAIN_WHILE_BRAND_OR_EVIDENCE_REFERENCED`.

### 8.2 `DataExtractionResourceAlias`

**Purpose:** Preserve requested URLs, historical canonical URLs, redirects and alternate addresses without changing historical capture identity.

Key fields:

```text
resource_alias_id
brand_id
resource_id
alias_type
normalized_alias
alias_hash
first_observed_at
last_observed_at
```

Alias types may include `REQUESTED_URL`, `REDIRECT_SOURCE`, `CANONICAL_LINK`, `HISTORICAL_CANONICAL`, `TRACKING_VARIANT`.

Unique `(brand_id, alias_hash)` only when policy establishes one-resource ownership; collision requires explicit reconciliation rather than silent reassignment.

### 8.3 `DataExtractionResourceRelation`

**Purpose:** Provider-neutral relation among owned resources without collapsing their identity.

Initial relation types:

```text
LOCALIZED_VARIANT_OF
MOVED_TO
CANONICAL_EQUIVALENT_OF
```

Relations are evidence/provenance aids, not Intelligence precedence.

### 8.4 `DataExtractionCapture`

**Purpose:** One immutable terminal acquisition event for one resource.

Key fields:

```text
capture_id / capture_ref
brand_id
resource_id
capability_execution_id?
acquisition_request_key
capture_started_at
captured_at
observed_at?
source_revision_ref?
source_content_hash?
acquisition_quality
failure_categories[]
quality_detail_codes[]
normalization_input_artifact_ref?
```

Relations:

- belongs to one resource/Brand;
- may link to multiple provider executions;
- may own multiple content artifacts;
- may produce multiple Evidence items.

Recommended uniqueness:

```text
(brand_id, resource_id, acquisition_request_key, capture_ordinal)
```

Indexes:

- `(brand_id, resource_id, captured_at desc)`;
- `(brand_id, source_content_hash)`;
- `(brand_id, acquisition_quality)`.

Retention: `RETAIN_WHILE_EVIDENCE_REFERENCED` plus source/privacy policy.

### 8.5 `DataExtractionContentArtifact`

**Purpose:** Provider-neutral retained source/normalized content referenced by captures and Evidence.

Artifact kinds:

```text
ACQUIRED_SOURCE_BODY
NORMALIZED_TEXT
NORMALIZED_MEDIA_DESCRIPTOR
STRUCTURED_SOURCE_FRAGMENT
```

`ACQUIRED_SOURCE_BODY` means the actual acquired public source body after provider envelope removal, **not** raw provider payload/headers.

Key fields:

```text
content_artifact_id
brand_id
capture_id
artifact_kind
media_type
content_hash
byte_length
inline_content?
object_store_ref?
normalization_contract_version?
created_at
```

Exactly one durable content representation must be resolvable when retention policy requires replay; bounded content may be inline and larger content object-store referenced.

Retention: source/privacy-specific; removal must preserve hashes/provenance metadata required by referenced Evidence when policy permits.

### 8.6 `DataExtractionEvidenceItem`

**Purpose:** Immutable normalized Evidence item implementing the frozen shared envelope.

Key fields:

```text
evidence_id / evidence_ref
brand_id
capability_id
normalization_contract_version
resource_id
capture_id
content_artifact_id?
source_class
resource_type
page_role?
content_excerpt?
normalized_content_ref?
content_hash
semantic_observation_id?
observation_polarity
representativeness
representativeness_detail?
coverage_snapshot
coverage_detail?
freshness_at_emit
freshness_basis_at_emit
acquisition_quality
normalized_payload
item_fingerprint
created_at
```

Immutable after insertion.

Idempotent uniqueness:

```text
(brand_id, capture_id, capability_id,
 normalization_contract_version, item_fingerprint)
```

Indexes:

- `(brand_id, capability_id, created_at desc)`;
- `(brand_id, resource_id, capability_id)`;
- `(brand_id, semantic_observation_id)`;
- `(brand_id, content_hash)`;
- `(brand_id, representativeness)`.

Retention: `RETAIN_WHILE_REFERENCED`; referenced Intelligence generations must continue resolving `evidence_ref` even if large content later expires.

### 8.7 `DataExtractionSemanticObservation`

**Purpose:** Stable grouping of equivalent normalized observed meaning without replacing member Evidence history.

Key fields:

```text
semantic_observation_id
brand_id
capability_id
semantic_observation_key
semantic_key_hash
created_at
retired_at?
```

Unique `(brand_id, capability_id, semantic_key_hash)`.

Do not store a “winning value”.

Representativeness may be computed across supporting Evidence but item-level representativeness remains the historical source of truth.

### 8.8 `DataExtractionObservationSupport`

**Purpose:** Many-to-many support membership between semantic observation and immutable Evidence items.

Key fields:

```text
semantic_observation_id
evidence_id
support_role
created_at
```

Unique `(semantic_observation_id, evidence_id)`.

`support_role` initially distinguishes `DIRECT`, `REPEATED_SUPPORT`, `CONTEXTUAL_SUPPORT` without assigning semantic precedence.

### 8.9 `DataExtractionObservationRelation`

**Purpose:** Preserve relations between semantic observations.

Initial relation types:

```text
EQUIVALENT_TO
CONFLICTS_WITH
LOCALIZED_VARIANT_CONTEXT
```

`CONFLICTS_WITH` preserves contradiction only; it never identifies a winner.

### 8.10 `DataExtractionCapabilityExecution`

**Purpose:** Durable envelope for one capability request for one Brand, normalized resource scope and freshness intent.

Key fields:

```text
capability_execution_id
brand_id
capability_id
normalization_contract_version
normalized_resource_scope
resource_scope_hash
freshness_intent
request_idempotency_key
status
retryability
reason_codes[]
coverage
acquisition_quality
started_at
completed_at?
evidence_manifest_ref?
evidence_manifest_hash?
```

Capability status:

```text
AVAILABLE
PARTIAL
DEGRADED
UNAVAILABLE
NOT_REQUESTED
```

`AVAILABLE + 0 Evidence items` remains valid.

Indexes/uniqueness:

- unique `(brand_id, request_idempotency_key)`;
- `(brand_id, capability_id, completed_at desc)`;
- `(brand_id, status)`.

### 8.11 `DataExtractionCapabilityResource`

**Purpose:** Resource scope requested/used by a capability execution.

Key fields:

```text
capability_execution_id
resource_id
scope_role
selection_reason
ordinal?
```

This allows one acquired resource/capture to support multiple capabilities without duplicate page acquisition.

### 8.12 `DataExtractionCapabilityEvidence`

**Purpose:** Ordered/deterministic membership of Evidence refs in one capability result/manifest.

Key fields:

```text
capability_execution_id
evidence_id
manifest_role
```

Unique `(capability_execution_id, evidence_id)`.

Manifest ordering is canonical and independent of database row order.

### 8.13 `DataExtractionFreshnessAssessment`

**Purpose:** Append-only Evidence/resource freshness evaluation without mutating historical Evidence items.

Key fields:

```text
freshness_assessment_id
brand_id
target_type   # RESOURCE | CAPTURE | EVIDENCE
target_ref
state         # CURRENT | POSSIBLY_STALE | UNKNOWN
evaluated_at
basis
prior_capture_ref?
source_revision_ref?
invalidating_ref?
```

The latest applicable assessment is projected by the reader. Historical Evidence keeps `freshness_at_emit` for reproducibility.

No `STALE` value exists in the Evidence vocabulary.

### 8.14 `DataExtractionProviderExecutionLink`

**Purpose:** Link a capture/capability execution to operational provider telemetry without provider-coupling semantic Evidence.

Key fields:

```text
provider_execution_link_id
brand_id
capture_id?
capability_execution_id?
provider_execution_ref
attempt_role
created_at
```

Provider/model/endpoint/request ID remains resolvable behind `provider_execution_ref` in operational telemetry. It does not participate in resource, capture, Evidence or semantic-observation identity.

Retention: `OPERATIONAL_RETENTION` unless referenced for an active investigation/audit policy.

## 9. Resource versus content

Permanent rule:

```text
resource != capture != captured content != normalized Evidence
```

One resource has many captures.

One capture may reference:

- one provider-neutral acquired source body;
- one or more normalized content artifacts; and
- many Evidence items across capabilities.

One content artifact may support several Evidence items.

Evidence items do not duplicate full captured content by default.

## 10. Normalized content retention recommendation

Use **hybrid bounded storage**.

### Relational inline

Best for:

- bounded excerpts;
- small normalized message/context items;
- metadata;
- hashes;
- descriptors; and
- capability payloads.

### Object-store reference

Best for:

- larger provider-neutral acquired page bodies;
- large normalized text snapshots;
- replay/re-normalization source artifacts; and
- media descriptors or future media artifacts exceeding ordinary row practicality.

### Rules

- Do not store raw provider response envelopes by default.
- If replay is required, retain the provider-neutral acquired source body rather than provider-specific payload wrapper.
- Always retain content hash/byte length/media type even when content is externally referenced.
- No arbitrary byte/day threshold is frozen here; implementation should use a configurable storage policy under later operational approval.
- Intelligence context receives bounded content, never entire source artifacts by default.

## 11. Capability execution model

Internal DE acquisition/refresh input:

```text
brand_id
capability_id
normalized resource scope
freshness intent
normalization contract version
correlation/acquisition run ref
```

Freshness intent vocabulary:

```text
REUSE_ALLOWED
REFRESH_IF_NOT_CURRENT
FORCE_RECAPTURE
```

Semantics:

- `REUSE_ALLOWED`: reuse a valid current capture/Evidence set when scope and contract version match and no explicit invalidation exists;
- `REFRESH_IF_NOT_CURRENT`: reuse only when current Evidence is `CURRENT`; recapture/re-normalize when current state is `POSSIBLY_STALE` or `UNKNOWN` as technically appropriate;
- `FORCE_RECAPTURE`: explicit acquisition intent creates a new capture even when prior content appears current.

Return:

```text
capability_execution_ref
capability_id
status
retryability
reason_codes
coverage
acquisition_quality
freshness summary
evidence_refs/items
evidence_manifest_ref/hash
provenance summary
```

Capability execution does not decide whether Brand Intelligence is semantically ready.

Normal Intelligence reads do **not** invoke this acquisition/refresh command. Read and acquisition are separate runtime operations; Section 29 freezes the read-side adapter boundary.

## 12. Acquisition idempotency

Canonical request identity uses:

```text
brand_id
capability_id
normalized resource scope
freshness intent
known source revision when available
normalization contract version
explicit refresh/intent identity when required
```

Provider request ID is forbidden.

Decision flow:

```text
matching reusable current capture + compatible normalizer + REUSE_ALLOWED
→ reuse Evidence / no new capture

matching capture but new normalization contract and retained content compatible
→ re-normalize existing capture / new Evidence items

resource changed, explicit invalidation, insufficient quality,
REFRESH_IF_NOT_CURRENT requiring refresh, or FORCE_RECAPTURE
→ new capture
```

A normalization-only replay must preserve parent capture refs and produce new Evidence refs under the new normalization contract version.

## 13. Freshness architecture

Evidence freshness remains:

```text
CURRENT
POSSIBLY_STALE
UNKNOWN
```

No universal TTL.

Freshness basis may include:

```text
SAME_ACTIVE_RUN
CONTENT_HASH_UNCHANGED
SOURCE_REVISION_UNCHANGED
SOURCE_REVISION_CHANGED
RESOURCE_CHANGED
EXPLICIT_INVALIDATION
EXPLICIT_REFRESH_REQUESTED
CAPTURE_AGE_UNEVALUATED
UNKNOWN_RESOURCE_STATE
```

Architecture:

1. capture/Evidence records retain freshness-at-emit;
2. later freshness evaluations append `DataExtractionFreshnessAssessment` rows;
3. reader projects the latest applicable Evidence freshness;
4. Intelligence snapshots the Evidence freshness it observed in its manifest/reference;
5. DE never writes Intelligence freshness `STALE` merely because Evidence is `POSSIBLY_STALE`.

## 14. Representativeness architecture

Frozen vocabulary:

```text
PERSISTENT_BRAND_LEVEL
REPEATED_REPRESENTATIVE
CONTEXT_SPECIFIC
OFFERING_SPECIFIC
INCIDENTAL
```

Primary persistence: **Evidence item level** because representativeness belongs to the observation in its source/capture context.

Semantic-observation grouping may expose a derived aggregate summary for lookup/repetition, but it must retain member-item classes and must never erase lower-representativeness conflicting support.

Representativeness is indexed independently from coverage.

## 15. Coverage architecture

Frozen vocabulary:

```text
SINGLE_RESOURCE
MULTI_RESOURCE_PARTIAL
MULTI_RESOURCE_BROAD
SITE_WIDE_BOUNDED
```

Primary persistence: **capability execution level**, because coverage answers how much of the requested relevant source surface was observed.

Each Evidence item also stores the coverage snapshot from the capability execution that emitted it, as required by the frozen envelope and for historical lineage.

Semantic-observation coverage is derived from supporting resource refs and is not an independently authoritative stored classification.

Coverage must never set representativeness automatically.

## 16. Conflict preservation

Conflicting Evidence is modeled as independent immutable items/observations.

Example:

```text
observation A: global shipping
observation B: India-only shipping
relation: CONFLICTS_WITH
```

Store:

- both Evidence refs;
- both resource/capture refs;
- representativeness of each;
- freshness of each;
- supporting resources/repetition; and
- symmetric conflict relation.

Forbidden:

```text
winning_evidence_ref
resolved_truth
preferred_source
```

inside Data Extraction.

Intelligence owns precedence/semantic resolution.

## 17. Explicit negative Evidence

Use the frozen polarity vocabulary:

```text
AFFIRMATIVE
EXPLICIT_NEGATIVE
RESTRICTION
NEUTRAL
```

An explicit statement such as “not available in India” or “never use term X” may emit Evidence with explicit negative/restriction polarity.

Failure to observe a statement emits **no Evidence item**.

```text
explicit negative statement != absence of statement
```

## 18. Deduplication architecture

### Resource level

Canonical URL key + alias/canonical evidence prevents tracking duplicates. Content-hash equality alone does not merge resources.

### Capture level

Never collapse completed historical captures. Acquisition idempotency prevents unnecessary recapture before it occurs.

### Evidence-item level

Within the same capture/capability/normalizer version, identical item fingerprints collapse to one immutable `evidence_ref`.

### Semantic-observation level

Equivalent meaning may share one semantic observation group while keeping every historical Evidence item/support ref.

### Useful repetition

```text
same Brand message on five meaningful pages
→ one semantic observation group
→ five supporting Evidence/resource refs retained
→ repetition count derived as 5
```

Repeated site chrome/noise may be discarded or deduplicated before Evidence emission.

## 19. Provider execution boundary

Operational provider telemetry may retain:

```text
provider
adapter/endpoint
provider request ID
model when applicable
retry count
duration
usage/cost
HTTP/provider status
technical error
```

Durable normalized Evidence stores only an optional `provider_execution_ref` / link.

Provider details do not participate in:

- `resource_ref`;
- `capture_ref`;
- `evidence_ref`;
- `semantic_observation_key`;
- `capability_id`; or
- Evidence source class.

## 20. Same-Brand security / tenancy

Every durable DE record is Brand-scoped.

Required invariant:

```text
resource.brand_id
= capture.brand_id
= content.brand_id
= evidence.brand_id
= capability_execution.brand_id
= observation.brand_id
```

All relations must constrain Brand identity, not rely only on opaque foreign IDs.

Two Brands pointing to the same public URL receive distinct Brand-scoped resource/Evidence lineage.

Future physical content deduplication across Brands may occur only below semantic ownership, must not expose cross-Brand IDs/refs, and requires separate privacy/tenancy review.

## 21. Page/resource role model

Normalized provider-neutral roles for Wave 1:

```text
HOMEPAGE
ABOUT_COMPANY
BRAND_STORY
MISSION_VALUES
COMPANY_OVERVIEW
PORTFOLIO_OVERVIEW
CATEGORY_OVERVIEW
SERVICE_OVERVIEW
SOLUTIONS_OVERVIEW
PRICING_PLANS
OFFERING_DETAIL
CAMPAIGN_LANDING
POLICY
LEGAL
TESTIMONIAL
SUPPORT
FAQ_HELP
LOCALIZED_VARIANT
OTHER
```

Role is an observed/classified property of a captured resource/context, not part of provider identity.

A URL changing role does not automatically create a new resource.

## 22. Bounded Wave 1 resource selection

Do not recreate the legacy seven-page scan.

For a multi-capability Wave 1 request, build one shared resource plan from the union of capability needs and reuse captures across normalizers.

Priority:

```text
1. homepage
2. best About/company/story/mission surface
3. best offering/category/portfolio/service/solutions overview
4. only if a specific capability coverage gap remains:
   one additional high-signal representative surface
```

A fixed maximum page count is not semantic authority. The resource planner stops when requested capabilities have defensible coverage or when the bounded acquisition budget is exhausted.

Do not crawl catalogue/PDP inventories, blogs, legal archives, campaigns or support content merely to make Evidence richer.

Campaign/legal/support pages are acquired only when a requested capability explicitly needs contextual/constraint/claim evidence from that role.

Existing Brand Preview homepage/About/offering acquisition is therefore a strong initial surface set for Wave 1, but permanent capability normalization and durable identity must sit above it.

## 23. `owned_website.brand_messaging` implementation architecture

Pipeline:

```text
provider-neutral page acquisition
→ content normalization
→ page/section segmentation
→ page-role and visibility classification
→ candidate Brand-message units
→ remove chrome/boilerplate/UGC/testimonial noise
→ assign message role/authorship/visibility
→ dedupe item candidates
→ assign representativeness from frozen deterministic rules
→ semantic-equivalence/repetition grouping
→ emit immutable Evidence items
```

Candidate units include visible heading/paragraph/list/FAQ sections from eligible resources.

Do not derive:

- tone traits;
- positioning;
- value proposition;
- primary language authority; or
- permanent communication constraints.

Deterministic extraction should be the default. An optional classifier may later assist ambiguous authorship/message-role/equivalence cases behind a provider-neutral normalization interface, but no model/provider is selected here.

## 24. `owned_website.brand_company_context` implementation architecture

Pipeline:

```text
eligible company/about/story/mission content
→ segment factual/Brand-authored statement units
→ classify statement_class
→ classify assertion_nature
→ preserve bounded source excerpt
→ assign subject scope
→ dedupe/group repetition
→ emit Evidence
```

Frozen assertion distinctions remain:

```text
DIRECT_FIRST_PARTY_FACTUAL_STATEMENT
BRAND_AUTHORED_PRINCIPLE_OR_VALUE
BRAND_AUTHORED_MARKETING_ASSERTION
CLAIM_REQUIRING_EXTERNAL_VERIFICATION
```

Rule-first classification uses page role, surrounding labels and statement form.

An optional provider-neutral classifier may resolve ambiguous statement class/assertion nature later. It must preserve original excerpt and may not turn marketing assertion into verified fact.

## 25. `owned_website.offering_context` implementation architecture

Pipeline:

```text
offering/category/portfolio/service surface
→ identify observed offering blocks/overview context
→ normalize title/category/description/value language
→ classify generalization scope
→ detect repeated themes across observed offerings/resources
→ attach canonical Offering ref only when supplied by application reconciliation
→ emit Evidence
```

Frozen scopes:

```text
SINGLE_OFFERING
MULTIPLE_OFFERINGS
BRAND_LEVEL_PORTFOLIO
```

One Offering cannot be generalized to Brand-level portfolio context without explicit/repeated support.

Data Extraction never creates, updates, activates or retires canonical Offering records.

## 26. `observed_brand_communication_language_signals` implementation architecture

### Deterministic steps

- detect actual language from observed communication text;
- consume explicit HTML language declarations/selectors as source signals;
- inspect `hreflang`/localized URL relationships;
- identify page/section role and visibility;
- count repetition/supporting message refs;
- separate boilerplate/legal/resource-localized context;
- preserve actual message Evidence refs.

### Optional classifier steps

A provider-neutral classifier may assist only where deterministic analysis is ambiguous, for example:

- short/mixed-language fragments;
- proper names versus genuine foreign-language message text;
- principal-message versus incidental fragment classification; or
- ambiguous localization structure.

Forbidden classifier/context inputs for language inference:

```text
country
geography
currency
Industry
audience geography
market served
TLD
```

Data Extraction may emit `PRINCIPAL_MESSAGING_LANGUAGE` **signals** tied to principal message surfaces. It still does not resolve `communication_profile.primary_language`.

## 27. `derived_communication_constraint_evidence` implementation architecture

Input is parent normalized Evidence, primarily `brand_messaging` and `brand_company_context`.

Pipeline:

```text
parent Evidence refs
→ explicit instruction/prohibition/terminology/claim-rule detection
→ preserve verbatim excerpt for explicit rule-sensitive text
→ normalize semantic force for dedupe
→ classify polarity
→ group materially repeated communication patterns
→ count repetitions/resources
→ emit derived Evidence with all parent refs
```

Signals:

```text
EXPLICIT_BRAND_AUTHORED_PROHIBITION
EXPLICIT_REQUIRED_TERMINOLOGY
EXPLICIT_CLAIM_OR_DISCLAIMER_RULE
PERSISTENT_OWNED_SOURCE_INSTRUCTION
REPEATED_COMMUNICATION_PATTERN
```

Hard invariant:

```text
REPEATED_COMMUNICATION_PATTERN
!= hard communication constraint
```

Data Extraction reports the observation/classification only. Intelligence interprets whether it supports a durable communication constraint.

## 28. Healthcare / claim-sensitive handling

Evidence normalizers must preserve:

```text
BRAND_AUTHORED_CLAIM
CLINICAL_CREDENTIAL
REGULATORY_STATEMENT
TESTIMONIAL
GUARANTEED_OUTCOME_LANGUAGE
```

Safeguards:

- preserve bounded verbatim excerpt for claim/rule-sensitive items;
- preserve authorship/source role;
- preserve testimonial distinction;
- preserve regulatory statement separately from marketing assertion;
- never emit verification/truth status based solely on owned copy;
- never summarize guaranteed-outcome language into a factual Brand claim;
- never infer compliance rule from Industry/regulation without explicit source Evidence.

## 29. Evidence read ownership and adapter boundary

W1.0E has already frozen the permanent **Intelligence-side consumer port**. Data Extraction does not redefine it.

Accepted Intelligence contract:

```ts
interface IntelligenceEvidenceReadRequest {
  readonly brandId: string;
  readonly processorId: string;
  readonly processorVersion: string;
  readonly capabilityIds: readonly NormalizedEvidenceCapabilityId[];
}

interface IntelligenceEvidenceReader {
  read(
    request: IntelligenceEvidenceReadRequest,
  ): Promise<NormalizedEvidenceSet>;
}
```

Production relationship:

```text
Intelligence
ProcessorDependencyPreparationService
        ↓
IntelligenceEvidenceReader
        ↓
DataExtractionIntelligenceEvidenceAdapter
        ↓
DataExtractionEvidenceQueryPortV1 / durable DE read service
        ↓
DE Evidence persistence
```

### 29.1 DE-owned read/query interface

DE owns an internal query/read contract, not a competing Intelligence reader:

```ts
interface DataExtractionEvidenceQueryPortV1 {
  readExisting(request: DataExtractionEvidenceQueryRequestV1):
    Promise<DataExtractionEvidenceQueryResultV1>;
}

type DataExtractionEvidenceQueryRequestV1 = {
  brandId: string;
  capabilityIds: readonly string[];
  consumerContext?: {
    processorId?: string;
    processorVersion?: string;
  };
  correlationRef?: string;
};
```

The read service resolves the appropriate current/reusable persisted capability executions and Evidence according to DE-owned freshness/resource policies. A normal read does not receive or imply an acquisition command.

`processorId` / `processorVersion`, when propagated as consumer context, support authorization, tracing and requested-capability validation only. They do not participate in:

```text
resource identity
capture identity
Evidence identity
semantic-observation identity
capability execution identity
```

The same normalized Evidence may therefore be reused by multiple authorized processors.

### 29.2 Separate acquisition/refresh interface

Acquisition is a different operation:

```ts
interface DataExtractionEvidenceAcquisitionPortV1 {
  requestAcquisition(
    request: DataExtractionEvidenceAcquisitionRequestV1,
  ): Promise<DataExtractionCapabilityExecutionResultV1>;
}

type DataExtractionEvidenceAcquisitionRequestV1 = {
  brandId: string;
  capabilityId: string;
  resourceScope: unknown;
  freshnessIntent: "REUSE_ALLOWED" | "REFRESH_IF_NOT_CURRENT" | "FORCE_RECAPTURE";
  correlationRef: string;
};
```

This preserves the permanent distinction:

```text
READ EXISTING NORMALIZED EVIDENCE
!=
REQUEST ACQUISITION / REFRESH
```

The accepted W1.0E `IntelligenceEvidenceReader` is a reader and must not accidentally trigger acquisition. An Intelligence execution profile may later invoke a separately authorized acquisition/refresh command, but that is not implicit in `read()`.

### 29.3 Adapter responsibilities

`DataExtractionIntelligenceEvidenceAdapter` implements the accepted `IntelligenceEvidenceReader` and must:

1. validate the processor's requested capability IDs against the accepted port vocabulary;
2. pass Brand/capability/consumer context to the DE query port;
3. read existing durable normalized Evidence only;
4. map DE persistence/query records into W1.0E `NormalizedEvidenceSet` exactly;
5. preserve same-Brand tenancy;
6. expose bounded transient normalized payload only where the accepted port allows it;
7. expose operational `providerExecutionRef` only through the accepted transient provenance field and never as semantic identity;
8. return capability status including valid `AVAILABLE + 0 Evidence items`;
9. never resolve Intelligence readiness/precedence; and
10. never construct or overwrite `ProcessorExecution.evidence_manifest` directly.

## 30. Capability execution reference and manifest ownership

### 30.1 Capability execution reference decision

A bounded W1.0E amendment is recommended:

```text
BOUNDED_W1_0E_PORT_AMENDMENT_RECOMMENDED
```

Add exactly:

```ts
interface NormalizedEvidenceCapabilityResult {
  readonly capabilityExecutionRef: string;
  // existing fields unchanged
}
```

and include the same field in the capability node of the Intelligence `EvidenceDependencyManifest`.

Reason: `AVAILABLE + 0 Evidence items` is valid. Without a capability execution reference, that result has no deterministic durable link to the DE execution that established availability/coverage/quality. Item-level Evidence/provenance cannot supply this lineage when there are zero items.

No capability-level freshness-summary amendment is recommended. Item-level freshness is already explicit; duplicating a capability freshness value would introduce aggregation semantics not required by the accepted W1.0E reader. DE may keep an internal capability freshness projection for acquisition policy without promoting it into the Intelligence consumer port.

### 30.2 DE capability manifest versus Intelligence manifest

Two manifests have different authority:

```text
DE capability manifest
→ authority for what one DE capability execution produced/acquired
→ owned by Data Extraction

Intelligence ProcessorExecution evidence_manifest
→ authority for the exact Evidence references consumed by one logical processor execution
→ owned by Intelligence
```

They may be linked by `capabilityExecutionRef`, but they are not the same artifact and neither owns the other's semantics.

The accepted W1.0E `EvidenceManifestBuilder` remains the only authority that builds the Intelligence-side deterministic manifest/hash from the `NormalizedEvidenceSet`. DE does not supply or overwrite `ProcessorExecution.evidence_manifest`.

Transient `boundedNormalizedPayload`, `freshness.evaluatedAt`, and `providerExecutionRef` remain intentionally excluded from the Intelligence manifest, matching W1.0E behavior.

## 31. Bounded inline + reference delivery

Preserve:

```text
small normalized structured payload/excerpt → inline
larger normalized content                 → normalized_content_ref
```

No arbitrary token/byte threshold is frozen here.

Rules:

- capability-specific normalized payload remains inline when naturally bounded;
- large page-level clean text should be referenced;
- a bounded excerpt may accompany the ref for prompt/context efficiency;
- the same `evidence_ref` resolves the durable normalized payload/content reference independently of the provider that acquired it;
- Intelligence generation stores Evidence refs and its bounded execution snapshot, not DE-owned full content.

## 32. Privacy and retention

Frozen classes:

```text
PUBLIC_OWNED_SITE
BRAND_AUTHENTICATED_PRIVATE
USER_ACTION_CONFIRMATION
INSTAGRAM_CONNECTED
```

Wave 1 initial scope is `PUBLIC_OWNED_SITE` only.

Recommended retention categories without day counts:

| Record | Retention category |
|---|---|
| Resource identity/aliases | `RETAIN_WHILE_BRAND_OR_EVIDENCE_REFERENCED` |
| Capture metadata | `RETAIN_WHILE_EVIDENCE_REFERENCED` |
| Acquired/normalized content artifact | `SOURCE_POLICY_BOUND_RETAIN_WHILE_REQUIRED_FOR_REFERENCED_EVIDENCE_OR_REPLAY` |
| Evidence item | `RETAIN_WHILE_REFERENCED` |
| Semantic observation/support/conflict relation | `RETAIN_WHILE_MEMBER_EVIDENCE_REFERENCED` |
| Capability execution used by Intelligence manifest | `RETAIN_WHILE_REFERENCED` |
| Unreferenced capability/provider execution telemetry | `OPERATIONAL_RETENTION` |
| Provider request/log payload | not stored by default; provider/security policy only |

Privacy/erasure authority may remove content while retaining permissible non-content hashes/lineage markers; exact erasure behavior requires source-specific privacy policy.

## 33. Backend schema recommendation

**Recommendation:** additive new Prisma models are required.

Do **not** reuse `IntelligenceEvidenceReference` as the DE store. It remains the Intelligence consumer-side lineage table.

Prisma-ready logical blueprint:

| Logical model | Required fields / relations | Key uniqueness/indexes | Immutability |
|---|---|---|---|
| `DataExtractionResource` | id, brandId FK, sourceClass, resourceType, canonicalResourceKey/hash, canonicalUrl, timestamps | unique brand+source+keyHash; brand/source/url indexes | identity immutable; controlled canonical/retirement metadata mutable |
| `DataExtractionResourceAlias` | id, brandId, resourceId FK, aliasType, normalizedAlias/hash, observed timestamps | brand+aliasHash index/conditional uniqueness | append/update last-seen only |
| `DataExtractionResourceRelation` | brandId, fromResourceId, toResourceId, relationType | unique relation tuple | append-only |
| `DataExtractionCapture` | id, brandId, resourceId, capabilityExecutionId?, requestKey, timestamps, source revision/hash, quality/failure fields | brand/resource/time; request-key indexes | terminal capture immutable |
| `DataExtractionContentArtifact` | id, brandId, captureId, kind, mediaType, contentHash, size, inlineContent?, objectStoreRef?, normalizer version | capture/kind/hash indexes | immutable |
| `DataExtractionEvidenceItem` | id, brandId, capabilityId, normalizer version, resourceId, captureId, contentRef?, payload/excerpt/hash, polarity, representativeness, coverage snapshot, freshness-at-emit, quality, fingerprint | unique capture+capability+version+fingerprint; brand/capability/ref indexes | immutable |
| `DataExtractionSemanticObservation` | id, brandId, capabilityId, semantic key/hash | unique brand+capability+keyHash | identity immutable |
| `DataExtractionObservationSupport` | observationId, evidenceId, supportRole | unique observation+evidence | append-only |
| `DataExtractionObservationRelation` | brandId, fromObservationId, toObservationId, relationType | unique directed canonical tuple | append-only |
| `DataExtractionCapabilityExecution` | id, brandId, capabilityId, normalizer version, scope/hash, freshnessIntent, idempotency key, status/result metadata, manifest ref/hash | unique brand+requestKey; brand/capability/time | inputs immutable; lifecycle/result terminalized |
| `DataExtractionCapabilityResource` | capabilityExecutionId, resourceId, scopeRole, selectionReason | unique execution+resource+scopeRole | append-only after execution terminal |
| `DataExtractionCapabilityEvidence` | capabilityExecutionId, evidenceId, manifestRole | unique execution+evidence | append-only |
| `DataExtractionFreshnessAssessment` | id, brandId, targetType/ref, Evidence freshness state, evaluatedAt, basis/revision/invalidation refs | target/time index | append-only |
| `DataExtractionProviderExecutionLink` | id, brandId, capture/capabilityExecution ref, providerExecutionRef, attemptRole | capture/capability/provider ref indexes | append-only |

All same-Brand relations require composite or explicit Brand guards analogous to W1.0 Intelligence persistence.

## 34. Migration boundary

Eventual migration is additive.

Do not:

- delete or rewrite Brand Preview Evidence;
- rewrite Stage 1A/1B snapshots;
- remove provider execution logs;
- change W1.0 Intelligence generation/current-state schema;
- mutate historical Gatekeeper records; or
- remap existing `IntelligenceEvidenceReference` to ownership of payloads.

Legacy acquisition paths may continue while durable DE capture/normalization is introduced behind the new capability boundary.

## 35. Existing acquisition reuse plan

### Cheerio / `TextContextBuilderService`

**Reuse:** HTML load, script/chrome removal, clean text, title, internal links.

**Normalize:** use shared Wave page-role classifier; segment content into candidate Evidence units; preserve capture/content hashes and normalized-content refs.

### Zyte

**Reuse:** static HTTP response body acquisition, rendered fallback, timeout/error mechanics.

**Normalize:** wrap as capture mechanism behind provider-neutral owned-site acquisition. One DE capture may reference Zyte provider execution telemetry but Evidence does not identify as Zyte.

### Playwright

**Reuse:** rendered DOM acquisition for technically necessary pages.

**Normalize:** capture provider-neutral page body/DOM-derived content; do not use its current identity-specific output as permanent Evidence payload.

### Brand Preview website Evidence service

**Reuse:** homepage-first selection, About/offering discovery, bounded direct fetch, selective Zyte escalation, early stop.

**Normalize:** move resource/capture/content/Evidence identity into DE repositories; remove Preview-only URL refs as durable identity; allow shared resource plan across Wave capabilities.

### Provider execution envelope

**Reuse:** technical availability/error/connection/telemetry patterns and provider execution correlation.

**Normalize:** persist only opaque provider execution reference in durable Evidence lineage; do not reuse provider result as normalized Evidence row.

### Gemini/OpenAI/Parallel adapters

**Compatibility only:** operational runtimes available where an IE/requested capability later authorizes them. They are not semantic defaults for Wave owned-website Evidence.

## 36. Implementation staging

### DE-W1.0A — runtime contracts and repository ports

**Scope**

- implement stable Evidence/resource/capture/capability types from frozen DE contracts;
- define DE repository interfaces;
- define `DataExtractionEvidenceQueryPortV1` and separate acquisition/refresh port;
- define adapter mapping fixtures against the accepted W1.0E `IntelligenceEvidenceReader`;
- define canonical DE capability-manifest/hash utility;
- no provider changes.

**Dependency:** Systems Architect freeze of this contract.

**Tests:** contract loading, provider-neutral IDs, Brand guard types, canonical hashing, accepted-reader mapping fixtures.

**Exit gate:** DE persistence/query code can compile against stable internal interfaces without redefining the Intelligence consumer port.

**Rollback:** code-only removal; no schema/data.

### DE-W1.0B — additive Evidence persistence schema

**Scope**

- create additive Prisma models/enums/indexes/constraints for resources, captures, content, Evidence, observations, capability executions, freshness and provider refs;
- no existing-table destructive changes.

**Dependency:** DE-W1.0A.

**Tests:** Prisma validate/generate, migration SQL constraints, same-Brand FK guards, uniqueness/idempotency, Evidence/Intelligence freshness separation.

**Exit gate:** empty durable DE store deploys safely alongside legacy paths.

**Rollback:** additive migration rollback policy; no legacy table rewrite.

### DE-W1.0C — resource/capture/content repositories

**Scope**

- canonical URL/resource identity;
- aliases/relations;
- capture transaction and provider-execution links;
- hybrid content artifacts;
- freshness assessments.

**Dependency:** DE-W1.0B.

**Tests:** URL aliases/tracking/localization, unchanged recapture, changed recapture, provider retry→one capture, same-Brand isolation.

**Exit gate:** a resource can be captured/replayed with durable lineage independent of capability semantics.

**Rollback:** stop new writes; additive records can coexist without consumers.

### DE-W1.0D — capability execution/idempotency and bounded owned-site acquisition

**Scope**

- durable capability execution;
- resource planner;
- reuse/recapture/re-normalize decisions;
- wrap direct/Zyte/rendered mechanics behind owned-site capture boundary;
- no semantic normalizers yet.

**Dependency:** DE-W1.0C.

**Tests:** request idempotency, `AVAILABLE + 0`, partial/degraded paths, no cross-source/provider semantic switch, bounded page planning.

**Exit gate:** provider-neutral page resources/captures available for requested Wave capability scope.

**Rollback:** disable new capability dispatcher; existing acquisition remains untouched.

### DE-W1.0E — Wave 1 capability normalizers

**Scope**

- messaging normalizer;
- company-context normalizer;
- offering-context normalizer;
- language-signal normalizer;
- communication-constraint Evidence normalizer;
- observation grouping/conflict/dedupe.

**Dependency:** DE-W1.0D.

**Tests:** frozen YAML fixtures, no language-from-geography, Offering boundary, repeated-pattern boundary, Healthcare distinctions, conflict/negative-Evidence cases.

**Exit gate:** all five capability requests persist frozen-contract-valid `evidence_ref` items.

**Rollback:** normalizer-version isolation; prior captures remain replayable.

### DE-W1.0F — production read adapter

**Scope**

- production `DataExtractionEvidenceQueryPortV1` implementation over durable DE persistence;
- `DataExtractionIntelligenceEvidenceAdapter` implementing the already accepted W1.0E `IntelligenceEvidenceReader`;
- stable Evidence lookup;
- bounded inline/reference hydration;
- capability availability/quality/freshness projection;
- `capabilityExecutionRef` projection if the bounded W1.0E amendment is accepted;
- no replacement of the Intelligence `EvidenceManifestBuilder`.

**Dependency:** DE-W1.0E plus any accepted bounded W1.0E port amendment.

**Tests:** stable ref lookup, same-Brand rejection, exact `NormalizedEvidenceSet` mapping, `AVAILABLE + 0` traceability, content-ref hydration bounds, processor identity excluded from DE identities, accepted manifest-builder compatibility.

**Exit gate:** the production adapter can replace `MissingDataExtractionEvidenceAdapter` without reading provider/Preview/Stage1B internals and without triggering acquisition from `read()`.

**Rollback:** bind `INTELLIGENCE_EVIDENCE_READER` back to `MissingDataExtractionEvidenceAdapter`; no Evidence data mutation required.

The production backend may replace `MissingDataExtractionEvidenceAdapter` **only at DE-W1.0F**, when durable Evidence lookup and mapping semantics genuinely exist. Merely creating the adapter class earlier is not sufficient.

## 37. DE ↔ W1.0E compatibility reconciliation

Accepted Intelligence-side structures are the W1.0E `IntelligenceEvidenceReadRequest`, `NormalizedEvidenceSet`, `NormalizedEvidenceCapabilityResult`, `NormalizedEvidenceReference`, `EvidenceProvenanceSummary`, `EvidenceDeduplication`, and `EvidenceManifestBuilder` at backend `24ae85190fe7133b9cf5c485878f6a773a612fb9`.

| DE concept | W1.0E field/surface | Classification | Reconciliation |
|---|---|---|---|
| Brand ID | `IntelligenceEvidenceReadRequest.brandId`, `NormalizedEvidenceSet.brandId`, item `brandId` | `EXACT_MATCH` | Same Brand-scoped identity. |
| Processor ID | request `processorId` | `EXACT_MATCH` as consumer context | Passed for authorization/tracing only; excluded from DE identities. |
| Processor version | request `processorVersion` | `EXACT_MATCH` as consumer context | Passed for authorization/tracing only; excluded from DE identities. |
| Capability ID | request `capabilityIds`, result/item `capabilityId` | `EXACT_MATCH` | Frozen five-value provider-neutral vocabulary. |
| Capability execution ref | none currently | `BOUNDED_W1_0E_AMENDMENT_RECOMMENDED` | Add `capabilityExecutionRef` to capability result and Intelligence manifest capability node. |
| Resource ref | item `resourceRef` | `EXACT_MATCH` | Adapter projects durable DE `resource_ref`. |
| Capture ref | item `captureRef` | `EXACT_MATCH` | Adapter projects durable DE `capture_ref`. |
| Capture version | item `captureVersion` | `ADAPTER_MAPPING` | Adapter projects the DE immutable capture representation/version token; it is not provider request/version identity. |
| Evidence ref | item `evidenceRef` | `EXACT_MATCH` | Durable DE `evidence_ref`. |
| Source class | item `sourceClass` | `EXACT_MATCH` | Same frozen provider-neutral vocabulary. |
| Captured at | item `capturedAt` | `EXACT_MATCH` | DE terminal capture timestamp. |
| Freshness | item `freshness` | `EXACT_MATCH` | `CURRENT/POSSIBLY_STALE/UNKNOWN`; `evaluatedAt` stays transient and is intentionally omitted from Intelligence manifest. |
| Representativeness | item `representativeness` | `EXACT_MATCH` | Same frozen vocabulary. |
| Coverage | capability/item `coverage` | `EXACT_MATCH` | Capability coverage plus item snapshot. |
| Acquisition quality | capability/item `acquisitionQuality` | `ADAPTER_MAPPING` | DE quality state/failure/detail projected into accepted object shape. |
| Provenance | item `provenance` | `ADAPTER_MAPPING` | Field names map directly; providerExecutionRef remains transient and excluded from manifest. |
| Parent Evidence refs | `provenance.parentEvidenceRefs` | `EXACT_MATCH` | Sorted by Intelligence manifest builder. |
| Parent capture refs | `provenance.parentCaptureRefs` | `EXACT_MATCH` | Sorted by Intelligence manifest builder. |
| Provider execution ref | `provenance.providerExecutionRef?` | `EXACT_MATCH` transient | Operational trace only; never semantic identity and never in Intelligence manifest. |
| Dedupe fingerprint | `deduplication.itemFingerprint` | `EXACT_MATCH` | Same immutable item fingerprint semantics. |
| Equivalent Evidence ref | `deduplication.equivalentPriorEvidenceRef?` | `EXACT_MATCH` | Historical equivalence, not identity collapse. |
| Repetition count | `deduplication.repetitionCount` | `EXACT_MATCH` | Preserves useful repetition. |
| Supporting resources | `deduplication.supportingResourceRefs` | `EXACT_MATCH` | Brand-scoped resource refs. |
| Normalized content ref | `normalizedContentRef?` | `EXACT_MATCH` | Large normalized content remains referenced. |
| Bounded normalized payload | `boundedNormalizedPayload?` | `EXACT_MATCH` transient | Allowed for processor input; manifest builder excludes raw/transient payload. |
| Content hash | `contentHash` | `EXACT_MATCH` | Provider-neutral normalized/captured content lineage hash. |
| Polarity | `polarity?` | `EXACT_MATCH` | Frozen `AFFIRMATIVE/EXPLICIT_NEGATIVE/RESTRICTION/NEUTRAL`. |
| Conflict relation/group | `conflictGroupRef?` | `ADAPTER_MAPPING` | Adapter derives stable Brand-scoped conflict group/ref from DE observation relations; no winner semantics. |
| Normalization contract version | capability `normalizationContractVersion`, provenance version | `EXACT_MATCH` | Same frozen/versioned normalizer contract. |
| Capability availability | capability `status` | `EXACT_MATCH` | `AVAILABLE/PARTIAL/DEGRADED/UNAVAILABLE/NOT_REQUESTED`. |
| Retryability | capability `retryability` | `EXACT_MATCH` | Same three-state contract. |
| Reason codes | capability `reasonCodes` | `EXACT_MATCH` | Provider-neutral capability reason codes. |
| Resource/page scope requested for acquisition | no reader field | `DE_INTERNAL_ONLY` | Belongs to separate DE acquisition/refresh command, not normal Intelligence read. |
| Freshness intent for acquisition | no reader field | `DE_INTERNAL_ONLY` | Belongs to separate DE acquisition/refresh command. |
| DE capability manifest ref/hash | no accepted reader field | `DE_INTERNAL_ONLY` | DE production lineage; related via capabilityExecutionRef, not a substitute for Intelligence manifest. |
| `observedAt` when source exposes it | no current item field | `DE_INTERNAL_ONLY` | Retained in DE persistence; not required by current W1.0E consumer contract. |
| Page role | no current item field | `DE_INTERNAL_ONLY` | Retained in DE Evidence payload/resource metadata; no bounded amendment required for Wave 1 consumer. |

This table supersedes the earlier pre-W1.0E coordination statement. No second `IntelligenceEvidenceReaderV1` is frozen.

## 38. Processor activation boundary

Even after this architecture is frozen:

```text
brand_communication = EXECUTION_DISABLED
brand_meaning       = EXECUTION_DISABLED
```

Activation requires later DE implementation, production Evidence read integration, runtime validation and the applicable Intelligence activation gate.

The existence of `DataExtractionIntelligenceEvidenceAdapter` alone is **not** an activation signal.

## 39. Validation

This convergence correction preserves:

```text
resource != capture != Evidence                         PASS
provider request ID != Evidence ID                       PASS
coverage != representativeness                           PASS
Evidence freshness != Intelligence freshness             PASS
Offering Evidence != canonical Offering                  PASS
language not inferred from geography/currency/Industry   PASS
REPEATED_COMMUNICATION_PATTERN != hard constraint        PASS
conflicts preserved; no winning Evidence                 PASS
explicit negative Evidence != absence                    PASS
provider/model identity remains operational               PASS
durable normalized Evidence owned by Data Extraction      PASS
Intelligence consumes refs/bounded context                PASS
accepted W1.0E IntelligenceEvidenceReader preserved       PASS
read existing Evidence != acquisition/refresh command     PASS
processor identity not DE Evidence identity               PASS
DE capability manifest != Intelligence consumed manifest  PASS
same-Brand tenancy enforced                               PASS
no provider/model selection                               PASS
no provider implementation                               PASS
no backend/Prisma modification                            PASS
no Wave processor activation                              PASS
```

## 40. Systems Architect freeze request

Recommended verdict:

```text
BRAND_INTELLIGENCE_WAVE1_EVIDENCE_RUNTIME_CONTRACT_READY_FOR_FREEZE
```

This is a bounded convergence correction to the Data Extraction architecture proposal. It does not independently authorize W1.0E port modification, provider changes, persistence migration, runtime writes, acquisition, or processor activation.