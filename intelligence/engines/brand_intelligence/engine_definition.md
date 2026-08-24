# Brand Intelligence Engine

**Version:** 2.0  
**Status:** FROZEN TOPOLOGY  
**Parent:** Creator Shop Master Intelligence Schema  
**PERMANENT_BRAND_INTELLIGENCE_TOPOLOGY:** FROZEN

## Purpose

Brand Intelligence is Creator Shop's durable reusable understanding of the Brand itself—how it expresses value and meaning, who its relevant audiences are, what reusable visual principles characterize it, and where it can credibly serve customers.

Brand Intelligence owns **derived reusable Brand understanding**. It consumes canonical application/business state and must not create parallel canonical copies of business records.

## Permanent branch topology

```text
Brand Intelligence
├── Brand Expression
├── Audience
├── Visual Identity
└── Serviceability
```

Permanent Object authority remains in each branch registry:

```text
branches/brand_expression/objects.yaml
branches/audience/objects.yaml
branches/visual_identity/objects.yaml
branches/serviceability/objects.yaml
```

The permanent foundational Objects are:

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
└── audience_personas[]

Visual Identity
└── visual_style_profile

Serviceability
└── serviceability_profile
```

Every permanent semantic Object has one owning branch. Frontend composition does not create additional Intelligence ownership.

## Business question

> Who is this Brand, who does it serve, how does it express itself, and what reusable Brand understanding should Creator Shop carry into creator strategy?

## Canonical business-state input boundary

Brand Intelligence consumes applicable canonical application/business state such as:

```text
Canonical Brand State
├── brand_id
├── brand_name
├── website / canonical domain
├── confirmed Industry
├── confirmed Sub-industry / category
├── primary Brand country / geography anchor
├── reporting / collaboration currency basis
├── canonical social handles
│
├── Canonical Visual State
│   ├── primary logo
│   ├── secondary marks
│   ├── approved palette
│   ├── approved typography
│   └── approved reference imagery
│
├── Locations[]
│
├── Offerings[]
│   ├── Offering truth
│   ├── availability
│   └── Offering ↔ Location relationships
│
└── Brand-authoritative corrections / confirmations
```

Brand Intelligence must not own parallel canonical copies of:

```text
Brand identity/account anchors
visual asset CRUD/state
Locations
Offerings
Offering availability
Campaign configuration/state
Collaboration state
budget/accounting state
canonical social handles
```

Canonical business entities remain owned by their application/backend authority. Brand Intelligence may consume them, reference them, derive Intelligence from them, detect discrepancies, and request authorized resolution.

## Branch responsibilities

### Brand Expression

Owns reusable Brand-level semantic and communication understanding:

```text
brand description
positioning
value proposition
values
personality
Brand-level differentiation and proof
Brand-wide communication profile
```

### Audience

Owns the durable Brand-level strategic Persona collection. Audience Personas describe who matters to the Brand and the motivations, barriers, trust requirements and creator-communication implications relevant to creator strategy.

Audience does not own Campaign targeting configuration.

### Visual Identity

Owns reusable **derived interpretation** of the Brand's visual patterns through `visual_style_profile`.

Canonical logos, palette, typography and reference imagery remain canonical visual business state. Descriptive visual interpretation must not silently become mandatory Brand rules; explicit hard visual constraints require accepted Brand authority.

### Serviceability

Owns the Brand-level `serviceability_profile`: where the Brand can currently and credibly provide its Offerings to customers.

Serviceability does not own country anchors, Location CRUD, Offering-specific availability, Persona geography, Campaign target geography, demand geography or competitor geography.

## Cross-branch boundary invariants

### Communication profile vs Audience implications

`communication_profile` owns reusable Brand-wide verbal, message and tone guidance.

`audience_personas[].creator_communication_implications` owns audience-relative interpretation of how creator communication may help a specific Persona.

Neither replaces the other.

### Communication profile vs Visual constraints

`communication_profile` owns verbal/message/tone constraints.

`visual_style_profile.visual_constraints[]` owns explicit visual execution constraints.

These semantics remain separate.

### Brand differentiation vs Offering-specific proof

`differentiation_and_proof` owns Brand-level differentiators and Brand-level proof.

Offering-specific features, claims, advantages and proof remain canonical Offering truth and/or Product/Offering Intelligence.

## Cross-branch dependency model

The permanent Brand branch graph is intentionally sparse.

```text
Canonical Brand/business state
├──→ Brand Expression
├──→ Audience
├──→ Visual Identity
└──→ Serviceability

Owned Evidence
├──→ Brand Expression
├──→ Audience
├──→ Visual Identity
└──→ Serviceability

Brand Expression
└── OPTIONAL_ENRICHMENT → Audience
```

`Brand Expression → Audience` is optional enrichment, not a hard dependency. All other branch-to-branch relationships are `NO_DEPENDENCY` unless a later accepted contract explicitly introduces an edge.

Circular Brand-branch dependencies are forbidden.

## Directed invalidation

Only declared affected Intelligence should become stale or a reevaluation candidate.

Examples:

```text
Brand positioning changes
→ affected Brand Expression fields update/stale
→ affected Audience creator-communication implications may reevaluate
→ downstream Creator Strategy may reevaluate
```

but not Visual Identity or Serviceability automatically.

```text
Location closes
→ affected Serviceability basis/markets become stale
```

but not Brand Expression, Audience or Visual Identity automatically.

Invalidation is not deletion and does not require immediate recomputation.

## Shared metadata invariants

Shared semantic metadata authority:

`intelligence/architecture/shared_intelligence_metadata_contract.yaml`

Engine-wide invariants include:

```text
source ≠ authority
authority ≠ freshness
readiness ≠ freshness
protected current authority ≠ ordinary derivation dependency
consumer-scoped readiness
directed invalidation
invalidation ≠ deletion
```

Brand-confirmed values/items cannot be silently overwritten by new observed or Creator Shop-derived values. Provider, endpoint, scraper and model names do not become canonical semantic source classes.

## Product lifecycle and progressive maturity

Canonical product journey remains:

```text
Gatekeeper
→ Fast Brand Analysis
→ Brand Preview
→ Verify / claim
→ Instagram decision
→ Home
→ progressive Brand Intelligence maturity
```

Brand Preview is a bounded early synthesis:

```text
Preview bounded synthesis
≠ durable Brand Intelligence
```

No Brand Intelligence branch completeness requirement may become a mandatory verification or Home-entry gate.

### B — Brand Preview

Bounded early synthesis only. No durable Brand Intelligence completeness is required.

### D — after Home

Initial useful maturity may include:

```text
initial Brand Expression
first credible Audience Persona(s)
partial Visual Identity if grounded
partial Serviceability if grounded
```

### E — Brand Centre

All four branches may mature independently and asynchronously as canonical business state and Evidence improve.

## Brand Preview compatibility boundary

Frozen Brand Preview semantics remain distinct from permanent Brand Intelligence:

```text
brand_descriptor
→ BOUNDED_PRESENTATION_OUTPUT

brand_understanding_narrative
→ BOUNDED_PRESENTATION_OUTPUT

audience_groups[]
→ CANDIDATE_SEED + RECONCILIATION_CONTEXT

creator opportunities
→ BOUNDED_PRESENTATION_OUTPUT

archetype recommendations
→ BOUNDED_PRESENTATION_OUTPUT

optional brand_logo
→ COMPATIBILITY_INPUT
```

No Preview output becomes durable Brand Intelligence truth merely because it was displayed.

## Legacy Identity compatibility

The existing:

`intelligence/engines/brand_intelligence/branches/identity/`

remains:

```text
FROZEN_REFERENCE
+
COMPATIBILITY_ONLY
```

Identity is **not** part of the permanent Brand Intelligence topology.

It remains temporarily available for existing consumers, including current Brand Preview/runtime references, until those consumers are deliberately remapped according to:

`intelligence/engines/brand_intelligence/identity_compatibility_migration_plan.md`

Do not remove compatibility paths merely because a permanent semantic owner has been defined.

## Evidence boundary

Brand Intelligence defines semantic Evidence needs at capability level. Typical classes include:

```text
owned website Brand/company context
owned website Brand messaging
owned website customer/use context
owned website Offering context
owned website visual evidence
owned website serviceability/location evidence
canonical Brand business state
canonical visual business state
canonical Location state
canonical Offering availability
Brand edits/confirmations
```

Later optional enrichment may include own Instagram context and Campaign/Performance learning where accepted.

Data Extraction owns provider/API connection and delivery mechanics. Provider names do not define Brand Intelligence Objects or branch ownership.

## Consumers

Brand Intelligence may be consumed selectively by Brand Centre, Chat, Creator Strategy, Campaign Brief generation, Campaign targeting derivation, creator visual guidance, future creative generation, future Match Intelligence and Market composition.

Consumer-specific readiness remains bounded. No consumer is assumed to require all Brand Intelligence Objects.

## Runtime implementation boundary

The shared Intelligence Compiler/runtime remains the execution foundation. Permanent topology does not imply one processor per Object, one execution profile for the whole engine, one persistence shape, or immediate runtime implementation.

Processor, Evidence, execution-profile, persistence and Data Extraction contracts are later design stages.

## Topology freeze scope

`PERMANENT_BRAND_INTELLIGENCE_TOPOLOGY: FROZEN` means:

> Brand Expression, Audience, Visual Identity and Serviceability are the accepted permanent foundational Brand Intelligence branches for this architecture version.

It does **not** mean processors, reasoning artifacts, Evidence contracts, persistence implementation, runtime wiring or Data Extraction capabilities are frozen.
