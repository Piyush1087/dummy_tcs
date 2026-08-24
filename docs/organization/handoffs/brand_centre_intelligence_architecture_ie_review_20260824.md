# Brand Centre Intelligence Architecture — IE Review

**Date:** 2026-08-24  
**Review basis:** IE Worker Charter + current Master Intelligence Schema + Brand Centre V0 Product Authority + consumer-to-Intelligence map + Brand Centre Intelligence Architecture Reconciliation V1  
**Implementation:** NOT AUTHORIZED BY THIS REVIEW

## 1. Verdict

`PASS_WITH_CORRECTIONS`

The consumer-driven direction is coherent and substantially reusable. The proposed active domains are a sound basis for the Brand journey through Brand Centre and Recommendations, and `Creator Strategy Intelligence` represents a genuinely separate reusable reasoning responsibility from live `Campaign Intelligence`.

The corrections below are required before object/processor/runtime contracts are frozen.

---

## 2. Architecture retained unchanged

Retain the existing shared Intelligence runtime principles and infrastructure:

```text
Data Extraction → normalized Evidence → Intelligence → reusable consumers

Compiler
Prompt Builder
Model registry/resolver
Evidence runtime boundary
Provider port
Validator
Persistence adapter
Telemetry
Execution Profiles
partial execution / dependency-aware refresh
```

Retain the permanent worker boundary:

> Intelligence controls WHY / WHAT / WHEN. Data Extraction controls HOW / CONNECTION / DELIVERY.

Retain the existing principles of single canonical semantic ownership, explicit dependencies, evidence traceability, provider-neutral Evidence capabilities, deterministic + AI reasoning, partial execution, authority lifecycle, versioning and reuse of canonical backend storage where appropriate.

The Brand Centre active design scope remains coherent:

```text
Brand Intelligence
Product Intelligence
Instagram Intelligence
Performance Intelligence
Commercial Intelligence
Competitor Intelligence
        ↓
creator-marketing synthesis
        ↓
Creator Strategy Intelligence
```

For this phase continue to defer implementation of:

```text
Match Intelligence
Campaign Intelligence
full Creator Intelligence
```

Campaign Intelligence remains reserved for intelligence around an actual Campaign: live analysis, progress/execution understanding, insights/reporting and intervention signals.

---

## 3. Corrections required

### C1 — Do not let Intelligence engines become owners of canonical operational/business entities

Several reconciliation statements currently describe Brand/Product/Commercial Intelligence as if the engine owns the canonical business record itself. This must be corrected before contract design.

Examples:

```text
confirmed Brand identity anchors
canonical Offering entity + ACTIVE/PAUSED lifecycle
quarter budget ledger
committed / spent / reserved amounts
Campaign state
```

These are authoritative product/backend facts or operational state. Intelligence may:

```text
consume them
normalize them for reasoning
attach derived Intelligence to them
maintain authority/provenance metadata for derived outputs
identify conflicts/readiness
```

but should not silently create a parallel canonical business database.

Preferred boundary:

```text
Canonical business state
        ↓
Intelligence interpretation / derived objects
        ↓
Brand Centre / Recommendations
```

Product Intelligence therefore owns **Offering Intelligence associated with a canonical Offering**, not the existence/lifecycle of the Offering record itself.

Commercial Intelligence owns derived commercial planning/economic understanding; the authoritative declared budget and accounting/commitment state must reconcile to canonical backend state.

Brand Intelligence consumes confirmed identity anchors after confirmation rather than repeatedly treating them as ordinary AI-owned objects.

### C2 — Observation cannot remain an ownerless free-floating Intelligence object

The IE charter requires every reusable Intelligence Object to have one canonical semantic owner.

Keep the Product decision that Observation is **not a top-level engine and not a workspace**, but assign canonical ownership before implementation.

Recommended V1 boundary for this journey:

```text
Creator Strategy Intelligence
└── Observation Synthesis
```

Observation Synthesis may consume all active Intelligence domains, but surfaced Observations are limited to creator-marketing-relevant conclusions used by Overview / Recommendation explanation / strategic prioritization.

This preserves cross-domain synthesis without introducing an `Observation Intelligence` engine.

If future non-creator operational observations materially expand beyond Creator Strategy, revisit ownership then rather than creating a generic synthesis platform now.

### C3 — Separate factual operational state from Commercial Intelligence

The following should not be modeled as AI-derived Intelligence merely because Recommendations consume them:

```text
Brand-declared quarterly budget
actual committed amount
actual spent amount
accepted/planned Campaign commitments
```

Commercial Intelligence should reason over canonical commercial state and may derive:

```text
available planning capacity
expected creator-cost bands
minimum viable execution range
provisioning economics
commercial constraints
portfolio economic feasibility
commercial learning
```

Exact ledger semantics require backend reconciliation before persistence is frozen.

### C4 — Creator Strategy may depend on Campaign state without depending on Campaign Intelligence

Creator Strategy needs enough current Campaign/portfolio state to prevent duplicate recommendations and double allocation.

Because Campaign Intelligence is deferred, use canonical Campaign/Collaboration business state as a dependency/read model. Do **not** make current Recommendation design wait for live Campaign Intelligence.

Later, Campaign Intelligence can add richer live-campaign semantic signals without replacing canonical Campaign state.

### C5 — Product Intelligence must distinguish Offering business truth from derived creator-communication Intelligence

Current direction is valid, but object contracts should distinguish:

```text
Canonical Offering facts / Brand-confirmed facts
vs
Creator Shop derived communication ingredients / interpretation
```

The engine must not make an AI-derived benefit, differentiator or talking point equivalent to a Brand-confirmed/customer-facing fact.

Price remains the accepted controlled freshness exception, but the mechanism must reconcile with canonical Offering persistence rather than creating a separate Product Intelligence price authority.

### C6 — Brand Identity / Communication branch split is provisional, not yet canonical

The proposed Brand branches are directionally coherent, but `Brand Identity` and `Communication` overlap on tone, personality and message constraints. Do not freeze both branch taxonomies until object ownership is deduplicated.

The Product experience can preserve its user-facing sections while IE chooses the smallest non-overlapping semantic branch model.

### C7 — Performance Intelligence should own learning, not source-specific metric truth

Preserve:

```text
RESULT → SIGNAL → LEARNING
```

but make comparison eligibility and evidence strength primarily deterministic where possible. AI can interpret meaning only after comparability/measurement-window rules pass.

`Learning Memory` is a valid durable Intelligence concept, but its scope/generalization must retain context and must not silently broaden from one Offering/format to Brand-wide truth.

### C8 — Creator Strategy Intelligence is accepted as a durable domain, but `Portfolio Learning` should not duplicate Performance Intelligence

Creator Strategy may remember:

```text
recommendation decisions
portfolio allocations
accepted/rejected/superseded recommendation context
```

but reusable outcome learning such as “Micro Demonstrators repeatedly outperform Macro Lifestyle for Trust” remains Performance Intelligence.

Rename/refine `Portfolio Learning` during detailed design if necessary so ownership is not duplicated.

### C9 — Market is a product composition, not an Intelligence domain

Continue to avoid a separate `Market Intelligence` engine for V1. Market workspace composes Brand/Product/Instagram/Performance/Competitor outputs.

Competitor Intelligence owns competitor-specific comparative understanding. Cross-domain Observation Synthesis / Creator Strategy owns the creator-marketing implication.

### C10 — Long-term Match Intelligence remains deferred from this reconciliation

The Product owner has separately identified a future pairwise Brand × Creator matching/prospect-ranking capability. It is a plausible future top-level Intelligence domain, but it is not required to complete the Brand Centre journey and must not be pulled into current contracts.

Do not modify current Brand Centre implementation scope for it.

---

## 4. Confirmed engine ownership map

### Brand Intelligence

Owns reusable derived understanding of:

```text
Brand identity interpretation
Brand positioning / values / differentiators
Visual Identity understanding/references
Brand-level Audience intelligence
Brand communication understanding
Location-related Brand intelligence where needed
```

Consumes confirmed Brand identity anchors as authoritative business state after the confirmation boundary.

Does not own competitive market position, Offerings, Instagram performance, Recommendations or canonical account administration.

### Product Intelligence

Owns reusable **Offering Intelligence** associated with canonical Offerings:

```text
Offering understanding
structure/relationships
customer-truth interpretation
creator communication ingredients
demonstrability / proof / claim constraints
change/freshness interpretation
```

Does not own creator-marketing budget or Campaign strategy.

### Instagram Intelligence

Owns semantic understanding of Brand-owned Instagram behaviour:

```text
publishing behaviour
content classification
Offering presence
communication pattern
Audience/community signals
creator/UGC presence
change/evolution
```

Does not own canonical Brand identity, canonical Offering truth, performance conclusions, competitor social Intelligence or paid-media Intelligence.

### Performance Intelligence

Owns performance interpretation and reusable learning across sufficiently comparable evidence:

```text
asset/result interpretation
signals/trends
positive / negative / inconclusive learning
context-scoped Learning Memory
```

It may start from own Instagram performance and later absorb Campaign/creator/UGC/paid-media outcomes.

### Commercial Intelligence

Owns derived creator-marketing economic understanding:

```text
creator cost expectations
provisioning economics
usage-rights economic impact
minimum viable execution ranges
commercial constraints
portfolio economic feasibility
commercial market learning
```

Consumes authoritative budget/commitment/spend state from canonical product/backend systems.

### Competitor Intelligence

Owns competitor-specific external comparative understanding:

```text
competitor universe/roles
positioning
Offering/category emphasis
commercial/offer signals
communication/content
website UGC/social-proof use
change/movement
social/creator activity only when evidence capability exists
share/SOV only with defensible denominator/coverage
```

Website-first base mode is valid. Unresolved Meta social acquisition is enrichment, not a blocker.

### Creator Strategy Intelligence

Owns pre-campaign creator-marketing strategy and recommendation:

```text
Observation Synthesis
opportunity hypotheses
objective strategy
Offering strategy
creator cohort/archetype/tier strategy
content strategy
activation mode
quarterly portfolio strategy
recommendation ranking/lifecycle
```

Consumes authoritative Campaign/portfolio state directly while Campaign Intelligence is deferred.

Does not own creator-by-creator matching or live Campaign analysis.

---

## 5. Shared metadata / runtime implications

Do not create one universal giant object wrapper, but durable derived Intelligence should expose a small common metadata contract sufficient for authority, refresh and traceability.

Minimum common concepts:

```text
object_id / semantic key
domain + branch
object/schema version
value/status
producer processor + processor version
execution id
Evidence references
source/evidence observed_at
computed_at / last_evaluated_at
freshness or stale state where applicable
authority / edit protection state where applicable
readiness / availability state
confidence / grounding strength where applicable
supersedes / prior-version reference where versioned history matters
```

Keep `source` and `authority` conceptually separate. A value can be based on website Evidence but become Brand-confirmed after explicit correction/confirmation.

Recommended authority model should support at minimum the semantics behind:

```text
OBSERVED / source-grounded
CREATOR_SHOP_DERIVED
BRAND_CONFIRMED / protected
SUPPORT_CONTROLLED identity anchor
```

Exact enum names remain an IE design decision.

Readiness should be domain/object-specific rather than forcing one global lifecycle. Shared runtime only needs consistent ability to represent `available / partial / unavailable / stale / failed` semantics as appropriate.

Dependency invalidation must remain machine-readable so that, for example:

```text
Offering material change
→ affected Product Intelligence
→ affected Observations
→ Creator Strategy reevaluation
```

without regenerating unrelated Brand Intelligence.

---

## 6. Open dependencies / Product questions

These are not blockers for starting foundational object design unless stated otherwise.

### Product / Systems Architect

Need later acceptance of:

```text
final Brand Intelligence branch/object deduplication
exact Brand lifecycle/maturity concept if used in Recommendation policy
quarterly planning period semantics across calendar/fiscal/custom quarters
Recommendation action vocabulary beyond CREATE / NO NEW CAMPAIGN
```

### Backend

Required before persistence/accounting contracts are frozen:

```text
canonical Brand identity storage
canonical Offering storage/lifecycle
quarter budget storage if already present
Campaign planned/committed/spent semantics
Collaboration commitments relevant to portfolio capacity
```

### Data Extraction

Required per processor only after IE evidence requirements are defined.

Do not design provider calls inside engine contracts.

### Meta capability

Still open for competitor social / Business Discovery / broader Meta capability.

Not a blocker for:

```text
Brand Intelligence
Product Intelligence
website-first Competitor Intelligence
Creator Strategy base architecture
```

It is a blocker only for contracts that claim specific competitor-social evidence or Meta-only first-party fields not yet verified.

### Creator economics

Creator Strategy can design cohort-level logic now, but accurate cost bands will need either existing marketplace/backend data or a bounded initial commercial policy before production recommendations rely on them.

---

## 7. Recommended implementation-design sequence

Do **not** implement all engines at once.

Recommended contract-design order:

```text
1. Shared Intelligence object metadata / authority / readiness conventions
2. Brand Intelligence reconciliation
3. Product / Offering Intelligence
4. Instagram Intelligence base contract
5. Performance Intelligence on own-Instagram evidence
6. Commercial Intelligence + canonical backend commercial-state reconciliation
7. Competitor Intelligence website-first base contract
8. Creator Strategy Intelligence — Observation Synthesis
9. Creator Strategy Intelligence — opportunity / ranking / quarterly portfolio / Recommendation contract
10. Execution-profile and dependency/invalidation reconciliation across the journey
11. Reconcile onboarding → post-verification progressive Intelligence maturity
```

At each stage define consumer requirements first, then Objects, processors, Evidence capabilities, validation, persistence and refresh.

Do not freeze recommendation scoring weights or observation thresholds before representative evaluation fixtures exist.

---

## 8. Files to amend / create / deprecate / leave unchanged

### Amend later after Product/Systems acceptance

`intelligence/master_intelligence_schema.md`

- add `Creator Strategy Intelligence` as the durable pre-campaign portfolio/recommendation domain;
- preserve `Campaign Intelligence` as live-Campaign intelligence;
- do not yet require Match Intelligence implementation in the Brand Centre execution scope;
- update dependency diagram to include Performance feedback and Creator Strategy.

`intelligence/engines/brand_intelligence/engine_definition.md`

- remove stale mandatory Identity review / Surface review lifecycle assumptions;
- reconcile branches/object ownership with current Brand Centre/Brand onboarding authority;
- preserve reusable runtime implementation principles.

`intelligence/product_authority/brand_centre_intelligence_architecture_reconciliation_v1.md`

- correct canonical-business-state ownership language;
- assign Observation Synthesis canonical ownership under Creator Strategy for V1;
- clarify Commercial Intelligence vs canonical budget ledger;
- clarify Product Intelligence vs canonical Offering entity;
- remove/rename any `Portfolio Learning` wording that duplicates Performance Intelligence.

`intelligence/product_authority/brand_centre_consumer_to_intelligence_requirement_map_v0.md`

- apply the same ownership corrections so downstream contract work does not inherit the ambiguity.

### Create during specialist design

```text
shared Intelligence metadata/authority/readiness contract
Product Intelligence engine definition
Instagram Intelligence engine definition
Performance Intelligence engine definition
Commercial Intelligence engine definition
Competitor Intelligence engine definition
Creator Strategy Intelligence engine definition
Observation Synthesis contract under Creator Strategy
Recommendation / portfolio contract under Creator Strategy
```

Use the repository's existing engine/processors/artifact structure rather than inventing a parallel documentation hierarchy.

### Deprecate / supersede only where contradicted

Do not delete the existing Brand Intelligence implementation history. Mark stale onboarding lifecycle sections as superseded by current Brand onboarding Product Authority when the engine definition is reconciled.

Any older `Surface Intelligence` / mandatory user-review assumptions that conflict with the frozen onboarding journey should remain historical reference only, not current execution authority.

### Leave unchanged for now

```text
IE worker charter
shared runtime architecture
Brand Preview frozen runtime contracts
Brand Centre Product Authority
Offerings Product Authority
canonical creator-archetype taxonomy
Campaign Intelligence implementation/contracts unrelated to pre-campaign planning
Match Intelligence future design
Meta/Data Extraction provider implementations
```

---

## 9. Review closure

The architecture is approved to proceed to detailed Intelligence contract design **after Product / Systems Architect accepts the correction set above**.

No processor/runtime implementation is authorized by this review.