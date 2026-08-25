# Brand Intelligence W1.0 Runtime and Persistence Contract

**Status:** `FROZEN`

**Scope:** Gate A implementation contract for the permanent Brand Intelligence runtime and persistence foundation

**Architecture baseline:** `dummy_tcs/main@c4f5cb8713f75c118efa038d2cc39e987db5321a`

**Backend baseline reverified:** `creator-commerce-backend-v2-clone/development@d76604537701437eff5df12cd11e8595d54395be`

**Implementation authorized by this contract:** no

## 1. Purpose and authority

This contract makes Gate A implementation-ready without implementing it. It freezes the logical records, identities, semantic component addresses, immutable generation rules, mutable current-state rules, protection/CAS behavior, execution hierarchy, leases, idempotency, contract packaging, validator interfaces, M1 application port, reference boundaries, internal current projection, retention classes, tenancy invariants, and W1.0 implementation order.

It is subordinate to and must be read with these frozen authorities:

- `shared_intelligence_metadata_contract.yaml`;
- `brand_canonical_state_read_contract.md`;
- `brand_intelligence_execution_and_maturity_contract.md`;
- `brand_intelligence_runtime_wave1_backend_reconciliation.md`; and
- each applicable processor, reasoning, output, Evidence, and Object contract.

Where this document names logical records or fields, names may be adapted mechanically to established Prisma naming conventions. Their identity, relationships, state semantics, uniqueness, and transition invariants may not be weakened.

## 2. Gate A decisions

Gate A freezes:

1. a generic relational persistence envelope for all permanent Brand Intelligence Objects;
2. immutable Object and component generations;
3. one mutable current pointer per Brand/Object/component semantic address;
4. a typed semantic-path scheme using stable semantic IDs rather than JSON array positions;
5. a separate one-to-many candidate/discrepancy relation;
6. application-authorized, expected-revision transitions;
7. independent execution, processor execution, and technical attempt identities;
8. database-backed lease/retry/idempotency behavior;
9. a deterministic, immutable, build-time contract bundle;
10. fail-closed structural, semantic, and persistence-transition validation;
11. a Brand-ID-based canonical-state port over M1;
12. generic Evidence and business-state reference boundaries;
13. an internal object-oriented current projection; and
14. a rule prohibiting silent writes to legacy or Preview stores.

Gate A does not freeze Gate B Evidence capability payloads, Product permissions, consumer mappings, optional Instagram policy, Serviceability authority, provider/model selection, an outbox, or directed event production. An outbox may be added in W1.4 without changing this persistence model.

## 3. Non-negotiable invariants

- Object and component generation rows are immutable after insertion.
- A processor may emit only `OBSERVED`, `CREATOR_SHOP_DERIVED`, or `SYSTEM_DERIVED` where its contract permits them.
- A processor may never emit `BRAND_CONFIRMED` or `SUPPORT_CONTROLLED`.
- `BRAND_CONFIRMED` and `SUPPORT_CONTROLLED` current state cannot be replaced by an ordinary processor transition.
- authority, source, readiness, and freshness remain independently represented.
- every current pointer update is protected by an expected revision or expected absence.
- every winning current replacement creates a new component generation and a supersession edge; no generation is edited in place.
- a conflicting processor result against protected state is retained as a candidate when it was evaluated against the same protected generation.
- multiple unresolved candidates are supported; one candidate column on the current row is not sufficient.
- processor failures are isolated; there is no whole-engine transaction.
- contract-valid partial and explicit-null results are persisted rather than replaced with filler.
- canonical Brand, Offering, Location, visual asset, availability, and relationship values are referenced, not copied into Intelligence ownership.
- normalized Evidence is referenced; Intelligence persistence does not own its payload semantics.
- all persistence relations are Brand-scoped and cannot cross Brand boundaries.
- no current or generated output is silently dual-written into BrandProfile, Preview, Identity, or legacy Brand DNA storage.

## 4. Logical model overview

```text
IntelligenceExecution
└── ProcessorExecution
    ├── ProcessorAttempt
    └── IntelligenceObjectGeneration
        ├── IntelligenceComponentGeneration
        ├── IntelligenceEvidenceReference
        └── IntelligenceBusinessStateReference

IntelligenceCurrentComponent
├── current → IntelligenceComponentGeneration
└── IntelligenceComponentCandidate[]
    └── candidate → IntelligenceComponentGeneration

IntelligenceAction
└── IntelligenceComponentTransition[]
```

The current projection is assembled from `IntelligenceCurrentComponent` rows and their immutable component generations. `IntelligenceObjectGeneration.value_payload` is the validated output snapshot for audit and lineage; it is not a second whole-object current pointer.

## 5. Shared identity and value conventions

### 5.1 Identifiers

- Record IDs are opaque UUIDs generated before insertion.
- Brand identity is the canonical `BrandProfile.id`; it is named `brand_id` in this contract.
- Semantic IDs and contract versions are case-sensitive exact strings from the pinned bundle.
- Hashes use SHA-256 over canonical UTF-8 encodings and are stored as lowercase hexadecimal.
- Timestamps are UTC instants with database time as the persistence authority.
- Revisions are monotonically increasing 64-bit integers beginning at `1`.

### 5.2 Canonical JSON

JSON payloads are permitted for contract-variable values and metadata. Before hashing, values use deterministic canonical JSON: recursively sorted object keys, preserved array order, normalized Unicode, explicit `null`, and no non-JSON numeric values. JSON is validated before persistence and is never treated as self-validating.

### 5.3 Shared persisted vocabularies

Authority:

```text
OBSERVED
CREATOR_SHOP_DERIVED
BRAND_CONFIRMED
SUPPORT_CONTROLLED
SYSTEM_DERIVED
```

Readiness:

```text
READY
PARTIAL
NOT_READY
```

`FAILED` is an execution outcome and never a current generated value.

Freshness:

```text
CURRENT
STALE
UNKNOWN
```

Source classes are the provider-neutral values in the frozen shared metadata contract. A domain extension is allowed only when its pinned contract declares it.

## 6. Logical record contracts

### 6.1 `IntelligenceExecution`

| Property | Contract |
|---|---|
| Purpose | Correlation envelope for one durable trigger/intent affecting one Brand. It does not imply atomic sibling success. |
| Primary identity | `execution_id` UUID. |
| Relationships | Belongs to one Brand; has one or more `ProcessorExecution` rows. |
| Mutable fields | lifecycle status and aggregate result/timestamps only. Trigger identity/context is immutable. |
| Required metadata | `brand_id`, `trigger_type`, `trigger_ref`, `trigger_idempotency_key`, `correlation_ref`, requested semantic impact/object set, `created_at`. No raw business values. |
| Lifecycle | `PENDING → RUNNING → COMPLETED`; terminal alternatives `FAILED` or `CANCELLED`. |
| Aggregate result | nullable until terminal; then `SUCCEEDED`, `PARTIAL`, `FAILED`, or `NO_RESULT`. It is observational, not a commit boundary. |
| Uniqueness | `(brand_id, trigger_idempotency_key)`. |
| Retention | `RETAIN_WHILE_REFERENCED`; executions with generated history remain reachable through that history. Unreferenced failed envelopes follow operational retention. |

The aggregate result is `PARTIAL` when at least one requested processor completes with a usable result and another fails or produces no usable result. A processor transaction never waits for or rolls back a sibling.

### 6.2 `ProcessorExecution`

| Property | Contract |
|---|---|
| Purpose | One logical evaluation of one processor for one Brand against one exact active scope, canonical dependency manifest, Evidence manifest, contract bundle, and execution intent. |
| Primary identity | `processor_execution_id` UUID. |
| Relationships | Belongs to one `IntelligenceExecution` and the same Brand; has attempts and zero or more Object generations. |
| Immutable identity/input | processor ID/version, bundle identity/hash, output contract ID/version, sorted active component paths/hash, dependency and Evidence manifest hashes, trigger intent key, logical idempotency key, `max_attempts`. |
| Mutable operational state | lifecycle status, eligibility time, attempt count, lease fields, last error category/code, start/completion timestamps, result readiness. |
| Lifecycle | `WAITING_FOR_DEPENDENCY`, `QUEUED`, `RUNNING`, `COMPLETED`, `FAILED_TERMINAL`, `CANCELLED`. Retryable attempt failure returns it to `QUEUED`; it is not a terminal processor state. |
| Result readiness | on completion: `READY`, `PARTIAL`, or `NOT_READY`; failed terminal execution reports `FAILED` at the execution layer and creates no failed generation. |
| Uniqueness | globally unique logical `processor_execution_key`; additionally `(execution_id, processor_id, active_scope_hash)` prevents duplicate tasks inside one trigger envelope. |
| Retention | `RETAIN_WHILE_REFERENCED` when generations exist; otherwise `OPERATIONAL_RETENTION`. |

The dependency and Evidence manifests contain references/revisions/capture identities only. They do not embed canonical business-state or Evidence payloads.

### 6.3 `ProcessorAttempt`

| Property | Contract |
|---|---|
| Purpose | One technical claim and execution attempt for a logical `ProcessorExecution`. Provider-level retries remain inside this attempt. |
| Primary identity | `processor_attempt_id` UUID. |
| Relationships | Belongs to one processor execution and the same Brand. A successful generation may record the exact successful attempt. |
| Required metadata | `attempt_number`, worker/service identity, lease token, lease acquired/expires/heartbeat times, started/completed times, prompt-build ref when present, non-sensitive runtime telemetry summary, error category/code when failed. |
| Mutability | Lease/heartbeat and outcome are mutable while running; terminal attempts are immutable. |
| Lifecycle | `RUNNING`, then one of `SUCCEEDED`, `FAILED_RETRYABLE`, `FAILED_TERMINAL`, `WAITING_DEPENDENCY`, `LEASE_LOST`, `CANCELLED`. |
| Uniqueness | `(processor_execution_id, attempt_number)` and unique non-null lease token. |
| Retention | successful attempts referenced by generations are `RETAIN_WHILE_REFERENCED`; other attempts are `OPERATIONAL_RETENTION`. |

### 6.4 `IntelligenceObjectGeneration`

| Property | Contract |
|---|---|
| Purpose | Immutable, validated output snapshot for exactly one semantic Object produced or authorized in one logical operation. |
| Primary identity | `object_generation_id` UUID. |
| Relationships | Same Brand as its processor execution or action; owns component generations and reference rows. |
| Required identity | `brand_id`, `object_semantic_id`, Object contract ID/version, output contract ID/version where processor-produced, producer kind/ID/version, bundle ID/version/hash, execution and processor-execution refs when processor-produced, successful attempt ref when applicable. |
| Required result | `value_state`, `value_payload`, canonical `value_hash`, `object_metadata_payload`, result readiness, freshness at generation, evaluated active-scope paths/hash, `created_at`. |
| Lineage | optional `based_on_object_generation_id`; optional `supersedes_object_generation_id` under the bounded rule below. |
| Mutability | insert-only; no ordinary update/delete. |
| Uniqueness | `(processor_execution_id, object_semantic_id)` when processor-produced; action-produced generations use `(action_id, object_semantic_id, generation_ordinal)`. |
| Retention | `PERMANENT_HISTORY`, subject only to an explicit privacy/erasure authority. |

Producer kind is one of:

```text
PROCESSOR_OUTPUT
AUTHORIZED_APPLICATION_ACTION
SYSTEM_TRANSITION_RESOLUTION
MIGRATION_IMPORT
```

`MIGRATION_IMPORT` is schema capability, not authorization to migrate data. Processor fields are required only for `PROCESSOR_OUTPUT`; an authorized action ref is required for `AUTHORIZED_APPLICATION_ACTION`.

Object-level `supersedes_object_generation_id` is populated only when the new generation replaces the complete previously evaluated active scope without a protected preservation, candidate, or CAS rejection. Component supersession is the authoritative current-state history. Partial-scope generations use `based_on_object_generation_id` and leave object-level supersession null.

### 6.5 `IntelligenceComponentGeneration`

| Property | Contract |
|---|---|
| Purpose | Immutable value/outcome and metadata for one contract-valid component semantic address within an Object generation. |
| Primary identity | `component_generation_id` UUID. |
| Relationships | Belongs to one Object generation and same Brand/Object; may be current, historical, or a candidate. |
| Required identity | component path scheme version, canonical component path, node kind, Object/contract version. |
| Required result | `value_state`, JSON value when applicable, canonical value hash, authority, source class, readiness, freshness at generation, contract metadata JSON, optional confidence/evidence strength, and creation time. |
| Presentation | optional `presentation_order` for the current generation of a list item; order never participates in identity. |
| Lineage | optional `supersedes_component_generation_id`, which must address the same Brand/Object/path. |
| Mutability | insert-only; no ordinary update/delete. |
| Uniqueness | `(object_generation_id, component_semantic_path)`; a non-null `supersedes_component_generation_id` may be used by at most one winning replacement. |
| Retention | `PERMANENT_HISTORY`. |

Value state is exactly:

```text
VALUE
EXPLICIT_NULL
INTENTIONALLY_ABSENT
```

`VALUE` requires non-null JSON. `EXPLICIT_NULL` requires JSON null and means the processor evaluated the owned component but could not or should not assert a value under the contract. `INTENTIONALLY_ABSENT` is used only when an optional component/item was evaluated and removed/omitted by contract-valid transition semantics. It is never inferred from a missing JSON property.

### 6.6 `IntelligenceCurrentComponent`

| Property | Contract |
|---|---|
| Purpose | The only mutable pointer representing current permanent Intelligence for one Brand/Object/component address. |
| Primary identity | `current_component_id` UUID plus unique semantic address. |
| Semantic key | `(brand_id, object_semantic_id, path_scheme_version, component_semantic_path)`. |
| Current reference | required `current_component_generation_id`, constrained to the same Brand/Object/path. |
| Denormalized guarded state | current authority, source class, readiness, freshness, protection state, lifecycle status, current contract version. These must match or validly project the referenced generation and transition history. |
| CAS state | `revision` starting at 1 and incremented for every current pointer, protection, readiness, freshness, or lifecycle mutation. |
| Freshness detail | evaluated time, optional stale-since, stable stale-reason code, and invalidating semantic/event ref. |
| Lifecycle | `ACTIVE` or `RETIRED`. Retirement is a contract migration/authorized operation, not ordinary processor omission. |
| Mutability | pointer and current-state fields only, through the transition repository. |
| Retention | `RETAIN_WHILE_REFERENCED`; not deleted merely because a newer generation becomes current. |

Protection state is exactly:

```text
UNPROTECTED
BRAND_CONFIRMED
SUPPORT_CONTROLLED
```

It must agree with current authority: `BRAND_CONFIRMED` and `SUPPORT_CONTROLLED` authority require their matching protection state; other authorities require `UNPROTECTED`.

The current row does not contain a single candidate reference. Open discrepancy state is derived from pending `IntelligenceComponentCandidate` rows, allowing more than one legitimate unresolved candidate without overwriting earlier candidates.

### 6.7 `IntelligenceComponentCandidate`

| Property | Contract |
|---|---|
| Purpose | Retain a materially conflicting, validated component generation that did not gain current authority. |
| Primary identity | `component_candidate_id` UUID. |
| Relationships | Belongs to one current component and same Brand/address; references one candidate generation and the protected current generation/revision against which it was evaluated. |
| Required metadata | candidate value hash, discrepancy code, producer execution/action ref, created time. No private reasoning. |
| Lifecycle | `PENDING`, `ACCEPTED`, `REJECTED`, `OBSOLETE`. |
| Mutability | lifecycle/resolution action and resolved time only; candidate value and basis are immutable. |
| Uniqueness | a candidate generation can appear once; duplicate pending value hashes against the same basis current generation are deduplicated. |
| Retention | `PERMANENT_HISTORY` after resolution and while pending. |

A candidate can be attached only when the generation was evaluated with the same protected `current_component_generation_id` recorded as its basis. A generation produced against an older current state is historical/obsolete, not a legitimate new candidate.

### 6.8 `IntelligenceEvidenceReference`

| Property | Contract |
|---|---|
| Purpose | Reference normalized Data Extraction Evidence used by an Object/component generation without owning the Evidence payload. |
| Primary identity | `evidence_reference_id` UUID. |
| Relationships | Belongs to one Object generation and same Brand; carries `$` for Object-level lineage or an exact emitted component path. |
| Required metadata | `evidence_ref`, capability ID, capture/version identity, provider-neutral source class, `captured_at`, observed freshness when supplied, generation component path, Evidence manifest hash/ref. |
| Mutability | immutable. |
| Uniqueness | `(object_generation_id, component_semantic_path, evidence_ref, capability_id)`. |
| Retention | `RETAIN_WHILE_REFERENCED`; normally follows permanent generation history. |

No raw page text, media payload, provider response, token, endpoint, or provider/model name is stored in this record.

### 6.9 `IntelligenceBusinessStateReference`

| Property | Contract |
|---|---|
| Purpose | Reference canonical application state observed by a generation without copying its value into Intelligence ownership. |
| Primary identity | `business_state_reference_id` UUID. |
| Relationships | Belongs to one Object generation and same Brand; scoped to `$` or one component path. |
| Required metadata | entity type, entity ID, semantic field/path, revision kind/token, observed time, canonical snapshot ref, component path. |
| Mutability | immutable. |
| Uniqueness | `(object_generation_id, component_semantic_path, entity_type, entity_id, semantic_field_path, revision_token)`. |
| Retention | `RETAIN_WHILE_REFERENCED`; normally follows permanent generation history. |

Revision kind is `EXPLICIT_VERSION`, `UPDATED_AT`, or `SNAPSHOT_FINGERPRINT`. The reference contains no canonical value payload.

### 6.10 `IntelligenceAction`

| Property | Contract |
|---|---|
| Purpose | Immutable audit envelope for one processor-persistence, authorized mutation, candidate resolution, freshness, retirement, or migration intent. |
| Primary identity | `action_id` UUID generated before transaction entry. |
| Relationships | Belongs to one Brand; may reference a processor execution; groups one or more component transitions. |
| Required metadata | action type, actor type/ref, authorization decision ref when human/support authority is exercised, request idempotency key, correlation ref, reason code, requested atomicity, final outcome, created time. |
| Mutability | inserted with final outcome in the same transaction as its transition records; immutable afterward. |
| Uniqueness | `(brand_id, action_type, request_idempotency_key)`. |
| Retention | `PERMANENT_HISTORY`. |

Actor type is `PROCESSOR`, `BRAND_ACTOR`, `SUPPORT_ACTOR`, `SYSTEM`, or `MIGRATION`. An internal worker identity is never equivalent to a Brand or support authorization decision.

### 6.11 `IntelligenceComponentTransition`

| Property | Contract |
|---|---|
| Purpose | Immutable component-level audit of a proposed and actual current/candidate/freshness transition. |
| Primary identity | `component_transition_id` UUID. |
| Relationships | Belongs to one action and Brand/address; references from/proposed/to generations and candidate where applicable. |
| Required CAS metadata | expected-exists flag, expected revision/generation, observed revision/generation, revision after when applied. |
| Required outcome | transition type, result, reason code, created time. |
| Mutability | immutable. |
| Uniqueness | `(action_id, object_semantic_id, component_semantic_path)`. |
| Retention | `PERMANENT_HISTORY`. |

Transition result includes `APPLIED_CURRENT`, `RECORDED_CANDIDATE`, `NOOP_EQUIVALENT`, `REJECTED_CAS`, `REJECTED_PROTECTED`, `REJECTED_VALIDATION`, and `MARKED_OBSOLETE`.

## 7. One Object generation

One Object generation is one validated evaluation or authorized application operation for exactly one `object_semantic_id`, one Brand, one contract bundle identity, and one active semantic scope.

It records:

```text
object_generation_id
brand_id
object_semantic_id
producer_kind + producer_id/version
processor_id/version when processor-produced
Object contract ID/version
output contract ID/version when applicable
bundle ID/version/hash
value payload + canonical hash
Object metadata payload
result readiness
freshness at generation
evaluated component paths/scope hash
execution / processor execution / attempt references when applicable
action reference when application-produced
based-on / bounded supersedes lineage
created_at
```

The payload is the validated Object value from that operation, including explicit nulls and semantic IDs. It is not the canonical BrandProfile value and is not updated after creation.

The model is not Wave-1-specific. The same envelope supports scalar Objects (`brand_description`), composite Objects (`communication_profile`, `visual_style_profile`, `serviceability_profile`), root semantic lists (`brand_values`, `brand_personality`, `differentiation_and_proof`, `audience_personas`), nested semantic lists, and later contract versions.

## 8. Component semantic-path contract

### 8.1 Address tuple

The durable address is:

```text
(brand_id, object_semantic_id, path_scheme_version, component_semantic_path)
```

`path_scheme_version` is `1` for this contract. The Object ID is not repeated inside the path.

### 8.2 Typed path syntax

The canonical path is an RFC-3986-percent-encoded typed sequence:

```text
$                         Object root
$/f/<field>               named Object field
.../i/<semantic_id>       semantic list item under the preceding collection
```

`f` and `i` are literal segment-type markers. Field names and semantic IDs are encoded as UTF-8 and percent-escaped, including `%` and `/`. Parsers decode segments; they never split unescaped user strings heuristically.

Examples:

```text
brand_description + $
communication_profile + $/f/primary_language
communication_profile + $/f/tone_traits/i/<tone-semantic-id>
audience_personas + $/i/<persona-semantic-id>/f/motivations/i/<motivation-semantic-id>
visual_style_profile + $/f/style_traits/i/<style-trait-semantic-id>
differentiation_and_proof + $/i/<differentiator-id>/f/proof_points/i/<proof-id>
serviceability_profile + $/f/serviceable_markets/i/<market-semantic-id>
```

### 8.3 Path validation

- `$` is the only root token.
- a field segment must exist at that location in the pinned Object/output contract;
- an item segment is valid only below a semantic collection whose item declares `semantic_id`;
- the path semantic ID must equal the emitted item semantic ID;
- JSON array indexes are forbidden in all forms;
- display order, label, wording, case-only presentation, and generation ID never participate in path identity;
- dynamic item paths are contract-validated against a path pattern compiled from the bundle;
- a path that changes only because wording changed is invalid when semantic continuity remains;
- a new semantic ID represents a new semantic item and must pass processor-specific continuity/duplication validation.

### 8.4 Node kinds and collections

Path registry entries classify nodes as:

```text
SCALAR
OBJECT_FIELD
COLLECTION
SEMANTIC_ITEM
NESTED_FIELD
```

A collection path tracks evaluated collection state and presentation order; item identity lives only in item paths. Ordinary refresh replaces unprotected evaluated membership but retains protected item paths. The transition resolver may create a `SYSTEM_TRANSITION_RESOLUTION` membership generation containing semantic IDs only so the effective collection remains materializable without claiming that the processor regenerated protected item values.

When an unprotected item was in the evaluated collection and is no longer emitted, the transition plan creates an `INTENTIONALLY_ABSENT` component generation for that item. Protected omitted items remain current. This prevents both ghost items and silent protected-item deletion.

### 8.5 Protectable paths

A path may be protected only when the pinned contract/path registry designates it as a semantically addressable value:

- a scalar root Object;
- a scalar or nested leaf field;
- a semantic list item; or
- a specifically declared atomic structured field/item.

The following are not protectable unless a future frozen contract explicitly declares atomic protection:

- metadata-only paths;
- collection order/membership containers;
- structural parent objects;
- processor reconciliation/debug payloads;
- an entire composite root whose children have independent authority; and
- arbitrary JSON paths not registered by the contract bundle.

Overlapping protected ancestor/descendant paths are forbidden unless the contract registry defines one exclusive protection granularity. Wave 1 uses leaf/item granularity; `communication_profile` is not protected as one aggregate.

## 9. Current-state and candidate model

There is exactly one current row for one semantic address, regardless of how many historical generations exist. The row points to the current component generation and carries query-critical current metadata plus a CAS revision.

There may be zero, one, or many pending candidates. Candidates are a relation, not a pointer column. The canonical internal projection derives:

```text
discrepancy_state = OPEN when any PENDING candidate exists, otherwise NONE
pending_candidate_count
latest_candidate_created_at
```

Candidate values are returned only by an explicitly authorized internal read. Gate C later determines consumer exposure.

A current row is never rewritten to hold the candidate. Accepting a candidate creates a new `BRAND_CONFIRMED` generation and advances the current pointer to that new generation.

## 10. Authority and protected transition state machine

| From | Command | Preconditions | Transaction result |
|---|---|---|---|
| `NO_CURRENT` | processor derived/observed/system result | expected absence; processor authority allowed by bundle | insert immutable generation, insert current at revision 1, action + applied transition |
| unprotected current | newer processor result | exact expected revision/generation; valid scope/refs | new generation supersedes old component generation; advance pointer; revision +1 |
| unprotected current | Brand confirm existing value | authorized action; exact expected revision | create same-value `BRAND_CONFIRMED` generation retaining source lineage plus action ref; supersede; protect; revision +1 |
| unprotected current | Brand edit | authorized action; contract-valid value; exact expected revision | create `BRAND_CONFIRMED` generation with Brand-input/action lineage; supersede; protect; revision +1 |
| protected current | ordinary equivalent processor result | same protected basis; semantic comparator says equivalent | retain generation as history, current unchanged, record `NOOP_EQUIVALENT`; no candidate |
| protected current | ordinary conflicting processor result | same protected basis; material difference | current unchanged; create/deduplicate `PENDING` candidate and discrepancy transition; no supersession |
| protected current | new authorized confirmed edit | authorization; exact expected revision | create new confirmed generation; supersede current; revision +1; old-basis candidates become `OBSOLETE` |
| protected current + pending candidate | accept candidate | authorization; candidate pending; exact current basis/revision | create a new confirmed generation from candidate value/lineage plus action; supersede current; mark candidate accepted and siblings on old basis obsolete; revision +1 |
| protected current + pending candidate | reject candidate | authorization; candidate pending; current basis still matches | current unchanged; candidate rejected; action/transition recorded |

Authorization is owned by the application service/policy layer above the repository. The transition repository receives an authorization decision reference; it does not infer permission from `brand_id`, actor input, worker identity, or possession of a generation ID.

The state-changing transaction includes action, new generation(s), references, candidate resolution/creation, current pointer update, and component transitions. Provider/Evidence acquisition and model execution occur before and outside this transaction.

Confirmation preserves source lineage:

- confirming an unchanged value retains its prior semantic source/evidence/business refs and adds the action ref;
- authoring a new value uses `BRAND_USER_INPUT` plus its action ref;
- accepting a candidate retains candidate lineage and adds confirmation action lineage.

## 11. Concurrency and CAS contract

Every transition command supplies either:

```text
expected_current = ABSENT
```

or:

```text
expected_current = {
  current_component_generation_id,
  revision
}
```

The repository uses a bounded combination:

1. lock existing current rows in deterministic `(object_semantic_id, component_path)` order;
2. compare expected generation and revision;
3. perform a guarded update whose predicate includes the expected revision;
4. use the unique semantic-address constraint to arbitrate concurrent first insert; and
5. on a first-insert uniqueness or serialization conflict, re-read once and re-plan persistence without rerunning the provider. A second conflict returns `REJECTED_CAS`.

No slow external operation occurs while locks are held.

### AI recompute versus Brand-confirmed edit

- If the edit commits first, the processor cannot advance current. Because it did not evaluate against the new confirmed generation, its output becomes historical/obsolete, not a candidate; a new evaluation may be scheduled later.
- If the processor commits first, the edit fails its stale expected revision and the caller must reread and explicitly retry. The edit is never silently applied over unseen state.

### Two recomputes

Both may create validated immutable generations, but only the first matching expected revision advances current. The loser records `REJECTED_CAS` and does not supersede the winner. A new dependency/Evidence manifest creates a distinct logical processor execution; scheduling policy may reevaluate the losing work against the new current state.

### Candidate acceptance versus new processor generation

Acceptance locks both candidate and current rows and requires the candidate basis plus current revision to match. A processor generation evaluated against an older current cannot be attached as a candidate after acceptance. A processor evaluated against the still-current protected generation may add a different pending candidate; pending candidates do not replace the current pointer.

## 12. Execution hierarchy

### `IntelligenceExecution`

One durable trigger/correlation context for one Brand. It may request multiple independent processors and may end `PARTIAL`. It owns no generation atomically across processors.

### `ProcessorExecution`

One logical processor evaluation for one Brand, active semantic scope, bundle, dependency manifest, Evidence manifest, and trigger intent. All technical retries reuse this identity.

### `ProcessorAttempt`

One technical worker claim. Provider/Data Extraction retries inside the claim do not create additional processor attempts. A new processor attempt begins only after orchestration classifies and requeues the logical processor execution.

## 13. Idempotency contract

### 13.1 Trigger/execution

`trigger_idempotency_key` comes from the durable source event/request identity plus the requested semantic impact. Duplicate delivery for the same Brand returns the existing `IntelligenceExecution`. A separately authorized manual reevaluation uses a new explicit intent/request ID.

### 13.2 Logical processor execution

The unique key is SHA-256 of the canonical tuple:

```text
brand_id
processor_id + processor_version
bundle_id + bundle_version + bundle_hash
sorted active component semantic paths
canonical business-state manifest hash
Evidence manifest hash
execution intent key
```

New Evidence capture/version, a changed business-state revision, a changed active scope, a new contract bundle, or a new explicit reevaluation intent creates a legitimate new key. Duplicate trigger delivery with the same tuple does not.

### 13.3 Technical attempt

`(processor_execution_id, attempt_number)` is unique. Attempt numbers are allocated atomically during claim and never reused.

### 13.4 Generation persistence

Processor output is unique by `(processor_execution_id, object_semantic_id)`. Component output is unique by `(object_generation_id, component_semantic_path)`. Retrying persistence returns the already committed rows rather than creating new generations.

### 13.5 Current transition/action

Authorized and processor persistence commands have a caller-generated `action_id` and request idempotency key. `(action_id, component_semantic_path)` is unique. Replay returns the recorded transition result. A different expected revision under the same idempotency key is a conflict, not a new action.

## 14. Worker lease and retry contract

### Claim

An atomic claim selects an eligible `QUEUED` processor execution with no live lease, sets it `RUNNING`, assigns opaque lease token/worker identity/expiry, increments attempt count, and inserts the matching `RUNNING` attempt in one transaction.

### Heartbeat

Heartbeat extends expiry only when processor execution ID, attempt ID, lease token, `RUNNING` state, and current worker identity all match. A zero-row update means lease loss. The worker must stop and may not persist output.

### Completion

The processor persistence/finalization transaction again verifies the live lease token and attempt. It atomically persists validated generations/transitions and marks attempt/process execution terminal. A stale worker cannot commit after lease loss.

### Reclaim

A reclaimer atomically marks the expired attempt `LEASE_LOST`, clears its lease, and either:

- returns the processor execution to `QUEUED` with a bounded eligibility/backoff policy when attempts remain; or
- marks it `FAILED_TERMINAL` when attempts are exhausted or the error is terminal.

`max_attempts` is a positive immutable execution-policy value. This contract does not invent a universal count.

### Failure ownership

| Category | Owner and behavior |
|---|---|
| `RETRYABLE_TECHNICAL` | Processor orchestration may start a new attempt after bounded backoff. Persistence transactions must have rolled back or be idempotently committed. |
| `VALIDATION_FAILURE` | Non-retryable processor failure by default; no generated/current state. A separately authorized corrective execution is a new intent. |
| `DEPENDENCY_UNAVAILABLE` | Processor execution moves to `WAITING_FOR_DEPENDENCY`; it resumes from a new dependency-availability signal, not blind timer retry. |
| `CONFIGURATION_DRIFT` | Fail closed and terminal; alert. No provider invocation if discovered before execution. |
| `LEASE_LOST` | Attempt terminates; stale worker cannot persist. Reclaimer owns requeue decision. |
| Provider/Data Extraction transient failure | Bounded retry inside the same processor attempt. It must not increment processor attempt count or masquerade as orchestration retry. |

Provider-specific retry rules and provider/model selection are outside this contract.

## 15. Partial success contract

Processors are persistence-isolated:

```text
brand_communication succeeds
brand_meaning fails
→ communication generations/current transitions commit
→ meaning creates no failed generation/current mutation
→ execution aggregate may become PARTIAL
```

Within a contract-valid `brand_meaning` response:

```text
brand_description = VALUE
positioning = EXPLICIT_NULL
value_proposition = VALUE
```

all three evaluated outcomes are persisted in the processor transaction. The null positioning generation retains readiness/reason lineage and is distinguishable from not evaluated.

Within `communication_profile`, each requested component/item follows the same rule. Protected paths can record candidates while valid unprotected sibling paths advance.

The processor persistence transaction may include all its Object/component decisions, but a per-path CAS/protection rejection is a recorded transition outcome rather than an exception that rolls back valid sibling transitions. An infrastructure or persistence-invariant failure rolls back the entire processor transaction. An invalid untrusted response is not partially salvaged unless its frozen validator contract explicitly returns an independently validated subset; Wave 1 currently relies on contract-valid nullable partial output.

## 16. Contract-bundle architecture

### 16.1 Packaging decision

Use a deterministic build-time bundle generated from `dummy_tcs` and consumed by the backend as an immutable pinned package/archive. Runtime reads only the embedded local bundle; it never reads another repository checkout or a mutable branch.

Preferred release path:

```text
canonical dummy_tcs source
→ deterministic bundle generator
→ immutable versioned package/archive + integrity
→ backend lockfile/pin
→ backend build embeds exact bundle
```

If package publication infrastructure is not available for the first implementation, the generated archive and manifest may be vendored into the backend. It must be generated from an exact canonical commit, reviewed as generated content, checksum-verified in CI, and never hand-copied. A shared package may replace this transport later without changing manifest semantics.

### 16.2 Bundle identity

Each processor has one bundle release containing:

```text
bundle_id
bundle_version
owner_engine
owning_branch
architecture_repository
architecture_commit_sha
processor_id + processor_version
owned object semantic IDs
manifest schema version
artifact entries
bundle content hash
```

Required artifact roles:

```text
PROCESSOR_DEFINITION
REASONING_CONTRACT
OUTPUT_CONTRACT
EVIDENCE_CONTRACT
OBJECT_CONTRACT
SHARED_METADATA_CONTRACT
```

Each manifest entry contains exact relative path, role, semantic ID, version, frozen status, required flag, byte length, and SHA-256. The bundle content hash is computed over canonical manifest identity plus the sorted `(role, path, ID, version, hash)` list; the self-hash field is excluded from its own calculation.

The model registry and provider bindings are operational runtime configuration and are not semantic bundle files.

### 16.3 Ownership and release

Intelligence Architecture owns canonical semantic files and bundle generation. Backend owns the allow-list, executable validator binding, pinned dependency/integrity, and deployment. A release requires:

1. all required sources frozen;
2. canonical bundle generation from a clean exact commit;
3. manifest/linkage/fixture checks;
4. immutable publication;
5. backend dependency/allow-list update in a reviewed change; and
6. CI proof that executable validators match the pinned contracts.

## 17. Drift prevention and failure timing

| Condition | Build/CI | Startup | Execution |
|---|---|---|---|
| Unknown processor/bundle | registry generation fails | embedded registry fails closed | request becomes `CONFIGURATION_DRIFT`; no provider call |
| Wrong processor/output/Evidence/shared contract version | bundle validation fails | manifest binding fails | fail configuration before execution |
| Changed artifact hash | deterministic regeneration/integrity fails | bundle hash fails | fail configuration if corruption appears after startup |
| Wrong owning engine/branch | linkage check fails | registry refuses bundle | fail configuration |
| Wrong Object ownership/active path | fixture/registry check fails | path registry refuses binding | persistence validator rejects; no current mutation |
| Missing required bundle file | generation fails | startup health fails | execution unavailable |
| Unexpected additional contract file | exact-file-set check fails | loader rejects unmanifested file | never dynamically loaded |
| Missing validator registration | compile/registry test fails | Brand Intelligence module not ready | execution unavailable |

Build-time checks include exact file-set comparison, ID/version/status parsing, cross-file ownership links, SHA-256, canonical commit, supported contract vocabulary, generated structural schema, and canonical accept/reject fixtures.

Startup checks recompute every embedded file hash, validate bundle hash, instantiate only allow-listed bundles, and require one exact validator registry entry per enabled processor bundle. Failure keeps the Brand Intelligence module/workers unavailable and fails its readiness health check.

Execution-time lookup accepts only the already verified registry key. It never selects an arbitrary path or loads an unregistered file.

## 18. Validator interfaces

The exact registry key is:

```text
(processor_id, processor_version, output_contract_id, output_contract_version)
```

The registry entry also pins bundle ID/version/hash and owned Object/path patterns.

Conceptual interfaces:

```ts
type ValidationIssue = {
  category: "STRUCTURAL" | "SEMANTIC" | "PERSISTENCE" | "CONFIGURATION";
  code: string;
  component_path?: string;
  message: string;
};

interface StructuralValidator {
  validate(input: {
    bundle: VerifiedContractBundle;
    active_component_paths: readonly string[];
    raw_output: unknown;
  }): ValidationResult<StructurallyValidatedOutput>;
}

interface SemanticValidator {
  validate(input: {
    bundle: VerifiedContractBundle;
    active_component_paths: readonly string[];
    output: StructurallyValidatedOutput;
    canonical_state_manifest: CanonicalStateManifest;
    evidence_manifest: EvidenceManifest;
    protected_state_snapshot: ProtectedStateSnapshot;
  }): ValidationResult<SemanticallyValidatedOutput>;
}

interface PersistenceTransitionValidator {
  validate(input: {
    bundle: VerifiedContractBundle;
    output: SemanticallyValidatedOutput;
    producer: ProducerContext;
    expected_current: readonly ExpectedCurrentComponent[];
    evidence_refs: readonly EvidenceReferenceInput[];
    business_state_refs: readonly BusinessStateReferenceInput[];
  }): ValidationResult<ValidatedTransitionPlan>;
}
```

Structural validation may be generated only from a bounded supported contract vocabulary: types, required/optional/null, strict additional properties, enum values, scalar bounds, collection bounds/uniqueness, and metadata alignment that is mechanically expressible. Unsupported constructs fail bundle generation.

Semantic validation is hand-maintained, server-owned code for cross-field meaning, semantic-ID continuity, no geography-derived language, claim safety, distinct outputs, Evidence capability suitability, representativeness, protected-scope rules, and other processor semantics.

Persistence-transition validation is deterministic server-owned code. It validates Object/path ownership, producer authority, reference resolution/Brand scope, value-state consistency, active scope, supersession address, current protection, expected revision, and candidate eligibility.

No YAML content executes code. Provider-native schema enforcement is advisory; these server validators are authoritative.

## 19. Canonical Brand-state application port

Permanent Brand Intelligence depends on a Brand-owned port, not onboarding implementation:

```ts
type CanonicalBrandStateReadRequest = {
  brand_id: string;
  required_semantics: readonly CanonicalBrandStateSemantic[];
  correlation_ref: string;
};

type CanonicalBusinessStateRef = {
  entity_type: string;
  entity_id: string;
  semantic_field_path: string;
  revision_kind: "EXPLICIT_VERSION" | "UPDATED_AT" | "SNAPSHOT_FINGERPRINT";
  revision_token: string;
  observed_at: string;
};

type CanonicalBrandStateField<T> = {
  semantic: CanonicalBrandStateSemantic;
  value: T | null;
  authority: string;
  source: string;
  conflict_detected: boolean;
  candidate_value?: T | null;
  provenance_status?: string;
  resolution_status?: string;
  business_state_ref: CanonicalBusinessStateRef;
};

type CanonicalBrandStateSnapshot = {
  brand_id: string;
  snapshot_ref: string;
  snapshot_revision: string;
  observed_at: string;
  fields: Readonly<Record<CanonicalBrandStateSemantic, CanonicalBrandStateField<unknown>>>;
};

interface CanonicalBrandStateReader {
  read(request: CanonicalBrandStateReadRequest): Promise<CanonicalBrandStateSnapshot>;
}
```

`required_semantics` requires an entry, not a non-null value. Null remains valid where M1 permits it.

The initial adapter may locate the Brand’s existing `BrandIntelligenceScan`/Discovery Lead internally and delegate to `CanonicalBrandStateService`. It must translate M1 source/authority/conflict/provenance/resolution without elevating them. The permanent request never carries `leadId` or Preview details. Where no lead exists, the adapter must read the POST_PROFILE canonical state directly under the same M1 precedence semantics rather than making Discovery Lead identity permanent.

The response must represent one internally coherent read snapshot. Multi-table reads use one consistent database read view or an equivalent atomic snapshot, not unrelated per-field reads.

## 20. Business-state revision/reference contract

Every processor execution creates a sorted canonical dependency manifest from the port’s business-state refs. Its hash participates in processor idempotency. Every generated component records only the refs it materially used.

Reference shape:

```text
entity_type
entity_id
semantic_field_path
revision_kind
revision_token
observed_at
canonical_snapshot_ref
```

Preference order:

1. explicit domain version/revision;
2. owning record `updated_at` when it represents the relevant state adequately;
3. deterministic `SNAPSHOT_FINGERPRINT` over the normalized in-memory selected value plus source/authority/conflict/provenance/resolution and canonical entity identity.

Only the fingerprint token is persisted. The canonical value used to compute it is not copied into the business-state reference. A null canonical field receives a fingerprint too, so a later transition from null to value changes the dependency manifest.

Row-level `updated_at` may conservatively invalidate more than one semantic field; it must never be represented as a field-specific explicit version when it is not one.

## 21. Generic Evidence reference boundary

Before Gate B, W1.0 requires only this provider-neutral input:

```ts
type IntelligenceEvidenceRef = {
  brand_id: string;
  evidence_ref: string;
  capability_id: string;
  capture_id: string;
  capture_version: string;
  source_class: string;
  captured_at: string;
  freshness?: "CURRENT" | "STALE" | "UNKNOWN";
};
```

Data Extraction owns Evidence acquisition, normalization, payload, capability-specific shape, provenance internals, and retention. Brand Intelligence validates that a ref exists, belongs to the same Brand, matches an allowed capability/source class for the bundle, and is part of the execution Evidence manifest. It stores the reference fields and no Evidence payload.

Gate B may extend capability payload contracts without changing this reference envelope.

## 22. Basic canonical current-state projection

Conceptual internal read boundary:

```ts
type CurrentIntelligenceRequest = {
  brand_id: string;
  semantic_object_ids: readonly string[];
  include_candidate_details?: boolean;
};

interface CurrentBrandIntelligenceReader {
  getCurrentIntelligence(
    request: CurrentIntelligenceRequest,
  ): Promise<CurrentIntelligenceProjection>;
}
```

Authorization and Brand membership are established above this reader. `include_candidate_details` is accepted only from an authorized internal application capability; repository access is not authorization.

For each requested Object, the projection returns:

```text
object semantic ID
Object/output contract ID and version
object_state
assembled current value
object readiness derived under the pinned contract
object freshness derived from current components
component records:
  path
  value_state + value
  authority + source
  readiness
  freshness + stale reason
  protection state
  generation ID + generated_at
  Evidence refs
  business-state refs
candidate/discrepancy summary
mixed_generation flag
```

`mixed_generation=true` is valid when different component paths are current from different generations, especially where protected items survive ordinary refresh. The projection never pretends one Object generation produced all current components.

List materialization uses semantic item paths and `presentation_order`; it never uses stored JSON array indexes as identity. Raw generations, actions, actor refs, internal errors, prompt payloads, and provider details are not part of this basic read contract.

Gate C later defines consumer DTOs, candidate visibility, and redaction. Brand Centre DTOs are not designed here.

## 23. Null, absent, and no-current semantics

| Condition | Persistent/read meaning |
|---|---|
| No generation exists | `object_state=NO_CURRENT`; no current row for the address. |
| Processor not evaluated | No generation for that execution/scope; execution history reports `NOT_EVALUATED` or no matching execution. Never synthesize null. |
| Component not owned by processor | Bundle/path registry reports `NOT_OWNED`; no generation/current transition. |
| Component outside active scope | `NOT_EVALUATED` for that execution; prior current may remain. |
| Evaluated but Evidence insufficient | immutable `EXPLICIT_NULL` generation with readiness `PARTIAL` or `NOT_READY` and reason code such as `EVIDENCE_INSUFFICIENT`. |
| Intentionally absent optional component/item | immutable `INTENTIONALLY_ABSENT` generation created by an explicit evaluated transition. |
| Empty collection | `VALUE` with `[]`; distinct from null and from absent. |
| Superseded generation | Historical generation has a supersession edge/current pointer elsewhere; it remains queryable as history and is never returned as current. |
| Retired semantic path | Current row lifecycle `RETIRED`; default projection omits it while history remains. |
| Processor failed validation/provider/persistence | Failure exists on attempt/execution; no failed generation replaces current. |

Missing JSON, explicit null, empty string, empty collection, not evaluated, and not owned are never treated as synonyms.

## 24. Freshness and stale transitions

Current component transitions are:

```text
UNKNOWN → CURRENT
CURRENT → STALE
STALE → CURRENT
CURRENT → CURRENT through a new generation
STALE → STALE while unresolved
```

Marking stale:

- requires an expected current revision;
- updates freshness, stale-since/reason/invalidating ref, and revision;
- creates an action/transition record;
- preserves the current generation and all history; and
- does not imply immediate recomputation.

For unprotected state, a validated replacement generation may move `STALE → CURRENT` while advancing current. For protected Brand-confirmed state, dependency change may mark freshness `STALE` while authority and protection remain unchanged. An ordinary derived candidate cannot make the protected current value fresh or replace it. `STALE → CURRENT` for the same protected semantic requires an authorized reaffirm/edit or an explicitly contract-authorized non-mutating freshness evaluation; W1.0 exposes no Product mutation surface.

Readiness is not changed merely because freshness changes. Authority never changes merely because a value becomes stale or fresh.

## 25. No-silent-dual-write compatibility contract

Permanent outputs and transition repositories must not write:

```text
BrandProfile.description
BrandProfile.visualIdentity
BrandProfile.strategicDna
BrandProfile.brandValues
BrandProfile.targetAudience
BrandPreviewRun
BrandIntelligenceScan
legacy Identity compatibility stores
legacy Brand DNA snapshots
```

The W1.0 module may depend on `BrandProfile` only for Brand identity/tenancy FK and through the canonical Brand-state port for reads. Persistence repositories must not import legacy/Preview write services or expose a method that accepts a legacy destination.

Future compatibility flow is one-way:

```text
canonical current projection
→ explicit compatibility read adapter
→ legacy-shaped consumer response
```

It is not a persistence dual-write. Every fallback adapter emits non-sensitive telemetry:

```text
adapter ID/version
consumer ID
correlation ref
Brand scope identifier according to telemetry policy
requested Object/path
canonical hit
fallback used + legacy source class
conflict detected
candidate present
readiness + freshness
```

Raw semantic values are not logged. A dependency/architecture test must fail if the permanent persistence module gains a Prisma write to any forbidden store.

## 26. Retention policy categories

| Data | Category | Rule |
|---|---|---|
| Object generations | `PERMANENT_HISTORY` | Preserve lineage/supersession; ordinary services cannot update/delete. |
| Component generations | `PERMANENT_HISTORY` | Same; includes null/absent outcomes. |
| Current pointers | `RETAIN_WHILE_REFERENCED` | Retain while Brand/Object state exists; supersession does not delete row/history. |
| Candidate/discrepancy records | `PERMANENT_HISTORY` | Preserve accepted/rejected/obsolete resolution lineage. |
| Action/transition records | `PERMANENT_HISTORY` | Required audit of authority/CAS decisions. |
| Evidence refs | `RETAIN_WHILE_REFERENCED` | Retain with generation; payload remains under Data Extraction policy. |
| Business-state refs | `RETAIN_WHILE_REFERENCED` | Retain with generation; contains no canonical value. |
| Execution/processor execution | `RETAIN_WHILE_REFERENCED` when generations exist; otherwise `OPERATIONAL_RETENTION` | Preserve minimum reproducibility lineage. |
| Successful referenced attempt | `RETAIN_WHILE_REFERENCED` | Preserve exact successful technical lineage. |
| Failed/unreferenced attempts | `OPERATIONAL_RETENTION` | Duration belongs to operational policy. |
| Telemetry/logs | `OPERATIONAL_RETENTION` | No raw values/secrets by default. |
| Raw prompt/provider/execution payload | `PRIVACY_POLICY_DEPENDENT` | Not stored in permanent tables by default; any separate retention requires explicit policy/security review. |

An authorized privacy/erasure workflow may supersede retention. It must be explicit, audited, Brand-scoped, and must not masquerade as ordinary generation mutation.

## 27. Security and tenancy invariants

- Every logical record carries `brand_id` directly or through a database-enforced same-Brand composite relation.
- Parent tables expose a composite unique key `(id, brand_id)` so child foreign keys can enforce Brand equality.
- Current references include Brand, Object ID, path scheme, and component path in the referenced composite key.
- Candidate basis/candidate/current generations must all share the exact Brand/Object/path.
- No business-state or Evidence ref from another Brand may enter a manifest or generation.
- Global contract/policy/taxonomy refs belong to the bundle, not a fabricated Brand business-state ref.
- Brand deletion is `RESTRICT` by default; any privacy deletion is a separately authorized explicit purge, not an incidental cascade.
- Authorization is never inferred from a caller-supplied `brand_id`, generation ID, action ID, or component path.
- Consumer read authorization and candidate-detail authorization are enforced above repository/query composition.
- Workers authenticate as internal service identities and can emit only processor-allowed authority; service identity does not grant Brand/support transitions.
- Actor references and authorization decision refs are stored without access tokens, session secrets, or unnecessary personal data.
- Raw model prompts, provider responses, Evidence payloads, and canonical business values are not logged by transition/persistence code.

## 28. Exact W1.0 implementation sub-stages

### W1.0A — schema and migration

- **Scope:** additive Prisma models/enums and reviewed PostgreSQL constraints/indexes for all logical records; no runtime consumers.
- **Dependencies:** this Gate A contract frozen; existing-schema and migration review.
- **Tests:** Prisma validation/generation, migration apply/rollback in disposable database, composite Brand FKs, unique idempotency/path keys, check constraints, append-only protections, existing-row compatibility.
- **Exit gate:** empty and populated test databases migrate safely; no existing table is repurposed or written.
- **Rollback boundary:** disable application use and roll back only the additive migration before data is accepted; after history exists, use forward migration rather than destructive rollback.

### W1.0B — repositories and transition engine

- **Scope:** insert-only generation/reference repositories; current/candidate/action/transition repository; path codec/registry; CAS/lock state machine.
- **Dependencies:** W1.0A.
- **Tests:** every allowed/forbidden transition, cross-Brand rejection, concurrent first insert, AI/edit races, two recomputes, candidate accept/reject races, protected list-item preservation, idempotent replay, no legacy writes.
- **Exit gate:** deterministic concurrency tests prove no silent protected overwrite or lost update.
- **Rollback boundary:** module feature-disabled; no producer invokes repositories.

### W1.0C — contract bundle and validators

- **Scope:** deterministic bundle generator/package, manifest/hash verification, allow-list, path patterns, structural/semantic/persistence validator interfaces and test registries using non-production fixtures.
- **Dependencies:** frozen semantic sources and W1.0B path/transition contracts.
- **Tests:** all drift matrix failures, unexpected/missing file, wrong ownership/version/hash, unsupported schema vocabulary, registry mismatch, fixture parity, processor-emitted protected authority rejection.
- **Exit gate:** build and startup fail closed for every invalid bundle case; no arbitrary YAML execution.
- **Rollback boundary:** remove/disable bundle registration; persistence remains unused.

### W1.0D — execution, attempts, lease, retry, idempotency

- **Scope:** execution/processor/attempt services, atomic claims, heartbeat/reclaim, terminal classification, logical idempotency, synthetic no-provider task harness.
- **Dependencies:** W1.0A–C.
- **Tests:** duplicate triggers, manifest changes, lease theft/expiry, stale-worker commit denial, provider-retry-versus-attempt accounting, attempt exhaustion, dependency waiting, configuration terminal failure, independent processor aggregate partial result.
- **Exit gate:** synthetic processors execute durably and safely under duplicate delivery and worker failure without real provider/model binding.
- **Rollback boundary:** stop workers; queued records remain recoverable.

### W1.0E — canonical Brand-state port and generic reference adapters

- **Scope:** Brand-ID-based `CanonicalBrandStateReader`, initial M1 adapter, consistent snapshot/revision tokens, generic Evidence-ref validation port.
- **Dependencies:** W1.0C manifest identity and current M1 service.
- **Tests:** required nullable fields, M1 authority/source/conflict fidelity, Brand without Discovery Lead, revision-token stability/change, no raw business values in manifests, cross-Brand ref rejection.
- **Exit gate:** synthetic processor inputs consume only the permanent ports; no onboarding/Preview type leaks into runtime interfaces.
- **Rollback boundary:** unregister adapters; no canonical application state is mutated.

### W1.0F — basic canonical current projection

- **Scope:** internal object-oriented read service and projection assembler; no Brand Centre/Public DTOs.
- **Dependencies:** W1.0B and contract path registry.
- **Tests:** scalar/composite/root-list/nested-list assembly, mixed generations, explicit null/empty/absent/no-current, freshness/readiness separation, candidate summary authorization, bounded query count, retired path omission.
- **Exit gate:** all permanent Object shape categories can be read without Wave-specific schema redesign.
- **Rollback boundary:** disable internal read service; stored history remains intact and no legacy consumer has migrated.

W1.1/W1.2 remain blocked on their applicable Gate B contracts after W1.0 finishes.

## 29. Logical schema blueprint

The following is conceptual PostgreSQL/Prisma design, not Prisma syntax or migration SQL.

### `intelligence_executions`

```text
id UUID PK immutable
brand_id UUID FK BrandProfile RESTRICT immutable
trigger_type text immutable
trigger_ref text immutable
trigger_idempotency_key text immutable
correlation_ref text immutable
requested_impact_json JSONB immutable
status enum mutable
aggregate_result enum nullable mutable
created_at timestamptz immutable
started_at/completed_at timestamptz nullable mutable
```

Constraints/indexes: unique `(brand_id, trigger_idempotency_key)`; unique `(id, brand_id)` for composite children; indexes `(brand_id, created_at desc)` and `(status, created_at)`.

### `intelligence_processor_executions`

```text
id UUID PK
brand_id UUID
execution_id UUID
processor_id/version text
bundle_id/version/hash text
output_contract_id/version text
active_scope_json JSONB + active_scope_hash char(64)
business_manifest_json JSONB + business_manifest_hash char(64)
evidence_manifest_json JSONB + evidence_manifest_hash char(64)
execution_intent_key text
processor_execution_key char(64)
status enum
result_readiness enum nullable
attempt_count/max_attempts integer
next_eligible_at timestamptz nullable
lease_token UUID nullable
lease_owner_ref text nullable
lease_expires_at/last_heartbeat_at timestamptz nullable
last_error_category/code text nullable
created_at/started_at/completed_at timestamptz
```

Constraints/indexes: composite FK `(execution_id, brand_id)`; unique processor execution key; unique `(execution_id, processor_id, active_scope_hash)`; check positive attempts and lease-field coherence; indexes `(status, next_eligible_at, lease_expires_at)`, `(brand_id, processor_id, created_at desc)`, and bundle hash.

### `intelligence_processor_attempts`

```text
id UUID PK
brand_id UUID
processor_execution_id UUID
attempt_number integer
worker_identity_ref text
lease_token UUID
status enum
lease_acquired_at/expires_at/last_heartbeat_at timestamptz
prompt_build_ref text nullable
runtime_telemetry_json JSONB nullable
error_category/code text nullable
started_at/completed_at timestamptz
```

Constraints/indexes: same-Brand composite FK; unique `(processor_execution_id, attempt_number)`; unique lease token; positive attempt number; index running expiry and processor timeline.

### `intelligence_object_generations`

```text
id UUID PK
brand_id UUID
object_semantic_id text
generation_kind enum
producer_id/version text
processor_execution_id UUID nullable
processor_attempt_id UUID nullable
action_id UUID nullable
object_contract_id/version text
output_contract_id/version text nullable
bundle_id/version/hash text
active_scope_json JSONB + active_scope_hash char(64)
value_state enum
value_payload JSONB nullable
value_hash char(64)
object_metadata_payload JSONB
readiness enum
freshness_at_generation enum
based_on_object_generation_id UUID nullable
supersedes_object_generation_id UUID nullable
generation_ordinal integer default 1
created_at timestamptz
```

Constraints/indexes: producer-kind parent checks; same-Brand parent FKs; same Brand/Object lineage FKs; unique `(processor_execution_id, object_semantic_id)` when processor-produced; unique action generation tuple; unique non-null supersedes edge; payload/value-state checks; indexes `(brand_id, object_semantic_id, created_at desc)` and processor/action refs.

### `intelligence_component_generations`

```text
id UUID PK
brand_id UUID
object_generation_id UUID
object_semantic_id text
path_scheme_version integer
component_semantic_path text
node_kind enum
value_state enum
value_payload JSONB nullable
value_hash char(64)
authority enum
source_class text
readiness enum
freshness_at_generation enum
confidence text nullable
evidence_strength text nullable
metadata_payload JSONB
presentation_order integer nullable
supersedes_component_generation_id UUID nullable
created_at timestamptz
```

Constraints/indexes: same-Brand/Object parent FK; unique `(object_generation_id, component_semantic_path)`; composite unique `(id, brand_id, object_semantic_id, path_scheme_version, component_semantic_path)` for current/candidate FKs; same-address supersedes constraint and unique winning supersedes edge; value-state checks; indexes current-history lookup `(brand_id, object_semantic_id, component_semantic_path, created_at desc)` and Object generation.

### `intelligence_current_components`

```text
id UUID PK
brand_id UUID
object_semantic_id text
path_scheme_version integer
component_semantic_path text
node_kind enum
current_component_generation_id UUID
current_contract_id/version text
current_authority enum
current_source_class text
current_readiness enum
current_freshness enum
protection_state enum
lifecycle_status enum
revision bigint
freshness_evaluated_at timestamptz
stale_since timestamptz nullable
stale_reason_code text nullable
invalidating_ref text nullable
updated_at timestamptz
```

Constraints/indexes: unique semantic address; composite same-address FK to current component generation; revision > 0; authority/protection consistency; stale-detail consistency; indexes `(brand_id, object_semantic_id)`, `(brand_id, current_freshness)`, `(brand_id, protection_state)`, and current generation.

### `intelligence_component_candidates`

```text
id UUID PK
brand_id UUID
current_component_id UUID
candidate_component_generation_id UUID
basis_current_component_generation_id UUID
basis_current_revision bigint
candidate_value_hash char(64)
discrepancy_code text
status enum
producer_execution_id UUID nullable
created_at/resolved_at timestamptz
resolution_action_id UUID nullable
```

Constraints/indexes: same Brand/Object/path for current, candidate, and basis; unique candidate generation; partial unique pending `(current_component_id, basis_current_component_generation_id, candidate_value_hash)`; indexes `(current_component_id, status, created_at)` and resolution action.

### `intelligence_evidence_references`

```text
id UUID PK
brand_id UUID
object_generation_id UUID
component_semantic_path text
evidence_ref text
capability_id text
capture_id/version text
source_class text
captured_at timestamptz
observed_freshness enum nullable
evidence_manifest_hash char(64)
created_at timestamptz
```

Constraints/indexes: same-Brand Object generation FK; path must be `$` or an emitted component path; unique lineage tuple; indexes `(brand_id, evidence_ref)`, capability/capture, and Object generation.

### `intelligence_business_state_references`

```text
id UUID PK
brand_id UUID
object_generation_id UUID
component_semantic_path text
entity_type text
entity_id text
semantic_field_path text
revision_kind enum
revision_token text
observed_at timestamptz
canonical_snapshot_ref text
created_at timestamptz
```

Constraints/indexes: same-Brand Object generation FK; unique lineage tuple; entity Brand-scope validation; indexes `(brand_id, entity_type, entity_id)`, revision token, and Object generation.

### `intelligence_actions`

```text
id UUID PK
brand_id UUID
action_type enum
actor_type enum
actor_ref text
authorization_decision_ref text nullable
request_idempotency_key text
correlation_ref text
reason_code text
requested_atomicity enum
outcome enum
processor_execution_id UUID nullable
created_at timestamptz
```

Constraints/indexes: unique `(brand_id, action_type, request_idempotency_key)`; authorization ref required for Brand/support authority actions; same-Brand processor FK; indexes Brand timeline and correlation.

### `intelligence_component_transitions`

```text
id UUID PK
brand_id UUID
action_id UUID
current_component_id UUID nullable for expected-absence insert
object_semantic_id text
path_scheme_version integer
component_semantic_path text
transition_type enum
expected_exists boolean
expected_revision bigint nullable
expected_generation_id UUID nullable
observed_revision bigint nullable
observed_generation_id UUID nullable
proposed_generation_id UUID nullable
to_generation_id UUID nullable
candidate_id UUID nullable
result enum
reason_code text
revision_after bigint nullable
created_at timestamptz
```

Constraints/indexes: same-Brand relations; unique `(action_id, object_semantic_id, component_semantic_path)`; expected-field coherence; applied result requires `to_generation_id/revision_after`; candidate result requires candidate ID; indexes current timeline, action, and result/reason.

### Immutability enforcement

Ordinary application database roles and repositories expose insert-only behavior for Object/component generations, Evidence/business refs, actions, and transitions. The later migration must enforce update/delete rejection for immutable tables through database permissions and/or explicit PostgreSQL guards, with a separately authorized privacy purge path. Prisma model mutability does not weaken this invariant.

## 30. Validation checklist and Gate A exit

This contract is implementation-ready only if review confirms:

- all ten permanent Objects fit the Object/component model without new domain tables;
- scalar, object-field, nested-field, semantic-item, and nested-semantic-item paths are representable;
- no array index participates in identity;
- immutable generations and winning supersession are enforceable;
- ordinary processor transitions cannot emit or overwrite protected authority;
- CAS/row-lock/unique behavior prevents lost updates;
- multiple pending candidates and their resolutions are retained;
- explicit null, empty, absent, not owned, not evaluated, and no current remain distinct;
- contract-valid partial output and independent processors persist without whole-engine rollback;
- canonical business state and Evidence remain external references;
- contract bundles fail closed on every listed drift case;
- the M1 port contains Brand ID but no permanent Discovery Lead or Preview identity;
- the projection supports mixed generations and future nested semantic lists;
- no compatibility dual-write exists;
- no provider/model is selected; and
- no implementation, Prisma schema, migration, frontend, Product policy, M2.5, or Identity retirement is included.

**Proposed verdict:** `BRAND_INTELLIGENCE_W1_0_CONTRACT_READY_FOR_FREEZE`
