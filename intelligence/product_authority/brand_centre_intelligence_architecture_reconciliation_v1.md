# Brand Centre Intelligence Architecture Reconciliation V1

**Status:** PRODUCT / ARCHITECTURE RECONCILIATION INPUT — READY FOR IE WORKER REVIEW  
**Date:** 2026-08-24  
**Scope:** Intelligence required for the Brand journey through Brand Centre and Recommendations  
**Authority dependencies:**

- `intelligence/product_authority/brand_centre_v0_product_authority.md`
- `intelligence/product_authority/brand_centre_consumer_to_intelligence_requirement_map_v0.md`
- `intelligence/product_authority/brand_centre_offerings_v0_provisional_authority.md`
- `intelligence/product_authority/brand_centre_brand_workspace_v0_provisional_authority.md`
- `intelligence/product_authority/brand_onboarding_v1_product_authority.md`

---

## 1. Purpose

This artifact reconciles the existing Creator Shop Master Intelligence architecture against the consumer-first Brand Centre design completed after Brand Preview.

The key architecture rule is:

```text
Do not design Intelligence in the abstract.
Design each Intelligence domain from the reusable consumer truth it must serve.
```

The current Brand Centre journey requires a smaller active Intelligence scope than the full Creator Shop platform.

This document intentionally does **not** freeze processor count, prompt design, database schema, model/provider choice, scoring weights, Meta API mechanics, or exact runtime implementation.

---

## 2. Active Intelligence scope through Brand Centre

For the journey through Brand Centre + Recommendations, active design scope is:

```text
Brand Intelligence
Product Intelligence
Instagram Intelligence
Performance Intelligence
Commercial Intelligence
Competitor Intelligence
        ↓
Cross-domain Observation Synthesis
        ↓
Creator Strategy Intelligence
```

Explicitly defer for this phase:

```text
Match Intelligence
Campaign Intelligence
full Creator Intelligence implementation
```

The canonical creator-archetype taxonomy and coarse creator-size/tier policy may still be consumed by Creator Strategy Intelligence without building full Creator Intelligence yet.

---

## 3. Master topology amendment

The previous master schema remains useful as a domain map, but one permanent addition is now required:

```text
Creator Strategy Intelligence
```

Its business question is:

> How should this Brand deploy creators, content and budget to achieve its marketing objectives?

Do **not** repurpose Campaign Intelligence for this responsibility.

Campaign Intelligence remains reserved for a real/live Campaign and should later own campaign-specific AI analysis, live execution understanding, campaign insights/reporting and intervention signals.

Match Intelligence remains a separate later capability for Brand × Creator fit and contextual prospect ranking.

Long-term master topology therefore becomes conceptually:

```text
Creator Shop Master Intelligence
├── Brand Intelligence
├── Product Intelligence
├── Commercial Intelligence
├── Instagram Intelligence
├── Competitor Intelligence
├── Creator Intelligence
├── Match Intelligence
├── Creator Strategy Intelligence
├── Campaign Intelligence
└── Performance Intelligence
```

For the current Brand Centre program, only the active subset in Section 2 should be designed end-to-end.

---

## 4. Cross-domain Observations are not an engine

Observation is a synthesis object, not a standalone permanent Intelligence engine and not a Brand Centre workspace.

Conceptual pipeline:

```text
Domain Intelligence
        ↓
material cross-domain synthesis
        ↓
Observation
        ↓
Opportunity hypothesis
        ↓
Creator Strategy Intelligence
        ↓
Recommendation
```

Observations should primarily surface in:

```text
Brand Centre Overview
Recommendation rationale / evidence
```

Observation candidate families include:

```text
CHANGE
GAP
CONFLICT
STRENGTH
WEAKNESS
TREND
OPPORTUNITY SIGNAL
RISK SIGNAL
```

A surfaced Observation should be grounded, material, new/meaningfully changed, creator-marketing relevant and non-duplicative.

Exact trigger thresholds remain an IE design problem.

---

# 5. Brand Intelligence — reconciled responsibility

## Permanent business question

> Who is this Brand, who does it serve, how does it express itself, and what reusable Brand truth should Creator Shop carry into creator strategy?

## Provisional semantic domains

```text
Brand Intelligence
├── Identity
├── Brand Identity
├── Visual Identity
├── Audience
├── Communication
└── Locations
```

These are semantic domains, not automatically processors.

### Identity

Owns confirmed Brand anchors such as:

```text
brand name
website/domain
confirmed industry
confirmed sub-industry/category
primary geography/country
currency basis
canonical social handle(s)
```

After the confirmation boundary these are support-controlled identity anchors and must not silently evolve from later AI evidence.

### Brand Identity

Owns reusable Brand-level truth/interpretation such as:

```text
description
positioning
value proposition
values
personality
USPs/differentiators
reasons to believe
```

### Visual Identity

Owns:

```text
logos
palette
fonts
Brand imagery/reference assets
visual interpretation where useful
```

Brand-uploaded/Brand-confirmed assets dominate observed candidates.

### Audience

Owns the durable Brand-level audience model, currently targeting 2–3 meaningful Personas rather than unlimited segmentation.

### Communication

Owns reusable Brand-level:

```text
tone
communication traits
what the Brand should/should not sound like
communication / claim constraints
```

### Locations

Owns canonical reusable Brand locations where operationally relevant.

## Boundary corrections

Existing broad concepts such as `Market Position` should not steal responsibility from Competitor / cross-domain Market reasoning.

Brand Intelligence owns Brand positioning; it does not own derived competitive position.

## Lifecycle correction

The current Brand Intelligence engine definition contains stale onboarding lifecycle assumptions involving mandatory Identity review / Surface Intelligence review.

Current Product Authority is:

```text
Gatekeeper
→ Fast Brand Analysis
→ Brand Preview
→ Verify / claim Brand
→ Instagram connection decision
→ Home
→ deeper Intelligence progressively matures Brand Centre
```

Do not reintroduce mandatory Brand / Audience / Offering review gates into onboarding.

Brand Preview should be treated as an early consumer of partial Brand understanding, not as a separate permanent Brand model.

---

# 6. Product Intelligence — reconciled responsibility

## Permanent business question

> What does this Brand sell or provide, what is true about each Offering, and what can creators credibly communicate about it?

Keep the top-level architectural name `Product Intelligence` for continuity, but its consumer model is the canonical Brand Centre `Offering`.

## Provisional semantic domains

```text
Product Intelligence
├── Offering Identity
├── Offering Structure
├── Customer Truth
├── Creator Communication
├── Commercial Facts
├── Availability
├── Location Applicability
├── Relationships
└── Change / Freshness
```

### Canonical Offering types

Industry-aware examples:

```text
D2C: Product / Collection / Offer
AI-SaaS: Product / Plan / Capability / Offer
Healthcare: Treatment-Service / Package-Program / Offer
Offline: Service / Experience / Package / Offer
```

### Core boundary

Product Intelligence owns current customer-facing Offering truth, including current public price/offer facts where applicable.

Commercial Intelligence owns creator-marketing budget/economics, not customer price truth.

### Creator communication

Product Intelligence should derive grounded reusable ingredients:

```text
credible talking points
demonstrable features/use cases
proof points
claim constraints
facts not to overstate
```

These are not finished Campaign Briefs.

### Authority/refresh

AI-discovered and manually added Offerings converge into the same canonical model with field-level provenance/authority.

Brand-confirmed non-price fields must not be silently overwritten.

Price remains the controlled first-party freshness exception already accepted in Offering authority.

### Readiness

Retain a small lifecycle such as:

```text
DRAFT / INCOMPLETE
ACTIVE
PAUSED / INACTIVE
```

Only ACTIVE Offerings may enter new creator strategy / Campaign planning.

---

# 7. Instagram Intelligence — reconciled responsibility

## Permanent business question

> How does this Brand actually communicate and behave on Instagram, and what does that reveal about its creator-marketing position?

## Provisional semantic domains

```text
Instagram Intelligence
├── Profile
├── Publishing Behaviour
├── Content
├── Offering Presence
├── Communication
├── Audience / Community Signals
├── Creator / UGC Presence
└── Change / Evolution
```

### Core boundary

Instagram Intelligence describes Brand-owned Instagram behaviour.

It does not own:

```text
canonical Brand identity
canonical Offering truth
performance conclusions
competitor social intelligence
Campaign Recommendations
paid Meta ads
```

The canonical social handle remains a protected Brand Identity anchor; Instagram Intelligence consumes it and may report discrepancies but does not silently change it.

### Content understanding

Where lawful/available evidence supports it, content understanding should eventually be multimodal rather than caption-only.

Normalized dimensions should support longitudinal comparison and may include applicable concepts such as:

```text
format
content type
theme/use case
Offering
creative mode
communication mode
creator/UGC presence
```

Exact Meta/API fields are intentionally not frozen here.

### Relationship to Performance

Instagram Intelligence answers:

```text
What did the Brand publish?
```

Performance Intelligence answers:

```text
What happened when it published it?
```

---

# 8. Performance Intelligence — reconciled responsibility

## Permanent business question

> What appears to work, what appears not to work, and what has Creator Shop learned strongly enough to reuse in future strategy?

For the current Brand Centre base case, own Instagram is the first performance evidence source.

Later the same engine may absorb Campaign, creator, UGC and paid-media outcomes without changing its fundamental role.

## Provisional semantic domains

```text
Performance Intelligence
├── Measurement Context
├── Content Performance
├── Offering Performance
├── Theme / Use-case Performance
├── Format Performance
├── Communication Performance
├── Creator / UGC Performance
├── Audience-response Signals
├── Change / Trend
└── Learning Memory
```

### Core boundary

Analytics is raw/detail measurement; Performance Intelligence is interpretation / reusable learning.

### Evidence discipline

Performance conclusions should only be drawn across sufficiently comparable evidence.

One strong/weak asset must not automatically become strategy.

Use a conceptual progression such as:

```text
RESULT
→ SIGNAL
→ LEARNING
```

### Learning memory

Performance Intelligence should persist positive, negative and inconclusive learnings with context, scope, recency and evidence strength.

Negative learning should usually reduce future weighting rather than permanently ban a strategy after one weak result.

### Objective discipline

Do not infer business outcomes the available metrics cannot prove.

Example: stronger saves may support a stronger save-response conclusion; it does not automatically prove purchase intent or revenue impact.

---

# 9. Commercial Intelligence — reconciled responsibility

## Permanent business question

> What creator-marketing budget is available, what is already committed, what does execution cost, and what commercial constraints should shape the creator portfolio?

## Provisional semantic domains

```text
Commercial Intelligence
├── Budget Context
├── Budget Commitments
├── Creator Economics
├── Provisioning Economics
├── Campaign Economics
├── Payment / Commercial Constraints
├── Portfolio Capacity
└── Commercial Learning
```

### Quarterly planning horizon

Budget should be period-based rather than one permanent Brand number.

The strategic planning horizon is provisionally quarterly.

Conceptual state includes:

```text
approved/declared budget
committed
spent
planned/reserved
available / unallocated
```

Exact accounting semantics must later reconcile with backend Campaign/Collaboration state.

### Authority split

Brand-authoritative:

```text
actual available creator budget
hard spending ceiling
currency
commercial restrictions
```

Creator Shop-derived:

```text
recommended investment
expected creator-cost range
minimum viable execution range
```

Budget is not required during onboarding; Recommendations may initially provide a recommended investment range.

### Budget flywheel boundary

Commercial Intelligence estimates/validates economics.

Creator Strategy Intelligence chooses objective, Offering, creator mix and scope.

Canonical loop:

```text
Creator Strategy proposal
→ Commercial feasibility/cost
→ feasible? yes/no
→ if no, Creator Strategy revises
→ repeat
```

Commercial Intelligence does not independently choose creator-size mix, objective allocation or Offering allocation.

### Creator economics

Expected cost should eventually account for relevant dimensions such as creator tier, geography, archetype where material, deliverable, posting requirement, production-only vs distribution, usage rights and provisioning.

Exact rate models are deferred.

---

# 10. Competitor Intelligence — reconciled responsibility

## Permanent business question

> Who are the relevant competitors, how do they differ from the Brand, and what external competitive signals should influence Creator Shop's understanding and strategy?

## Base-mode rule

Competitor Intelligence must remain useful from website/public first-party evidence alone.

Unresolved Instagram/Meta acquisition must enrich the engine later, not become a V1 dependency.

## Provisional semantic domains

```text
Competitor Intelligence
├── Competitor Universe
├── Competitive Role
├── Brand Positioning
├── Offering / Category
├── Commercial / Offer Signals
├── Communication / Content
├── Creator / Social Activity       [when supportable]
├── Market Presence / Share         [when defensible]
├── Change / Movement
└── Competitive Interpretation
```

### Competitor roles

At minimum:

```text
DIRECT COMPETITOR
BENCHMARK / INDUSTRY LEADER
LOCAL COMPETITOR where applicable
```

A benchmark/industry leader is context, not automatically an SOV target.

### Competitor set

Creator Shop should propose a bounded competitor set and allow Brand review/correction.

### Website-first base intelligence

Reliable base dimensions include applicable competitor:

```text
positioning
Offerings/category
price/offer signals
communication themes
website UGC/testimonial/social-proof use
material change
```

### Social enrichment

Competitor social/creator activity is capability-gated and must remain explicitly unavailable when acquisition is not supportable.

Do not fabricate social understanding from absence or weak evidence.

### SOV / share discipline

Any share metric must have a defined denominator/scope, competitor set, period, platform/source and coverage.

Do not output generic SOV when denominator coverage is not defensible.

### Acquisition dependency

Current Meta Business Discovery / Graph API / Creator Marketplace capability remains deliberately unresolved pending Product-provided verified capability information.

Do not introduce third-party influencer-platform APIs as a planned dependency.

---

# 11. Creator Strategy Intelligence — new permanent domain

## Permanent business question

> Given what Creator Shop knows about the Brand, its Offerings, Instagram behaviour, performance, budget and competitive context, what creator strategy should the Brand pursue next?

## Provisional semantic domains

```text
Creator Strategy Intelligence
├── Strategic Context
├── Observation Intake
├── Opportunity Generation
├── Objective Strategy
├── Offering Strategy
├── Creator Strategy
├── Content Strategy
├── Budget / Portfolio Strategy
├── Recommendation Ranking
├── Recommendation Lifecycle
└── Portfolio Learning
```

### Required base-case inputs

```text
Brand Intelligence
Product Intelligence
Instagram Intelligence
Performance Intelligence
Commercial Intelligence
current Campaign/portfolio state sufficient to avoid duplication
```

Optional enrichment:

```text
Competitor Intelligence
future full Creator Intelligence
future Match Intelligence
future Campaign learning
future paid-media learning
```

### Observation boundary

Observations provide strategic triggers, but Recommendations may also consume stable truth directly.

### Objective authority

Reuse canonical Campaign objective vocabulary rather than inventing Recommendation-specific objectives.

### Quarterly portfolio planning

Creator Strategy should reason over the quarter, not isolated campaigns only.

Hierarchical allocation model:

```text
Quarterly creator budget
→ Objective target allocation
→ Offering/opportunity allocation
→ Campaign allocation
→ creator archetype / size mix
→ deliverable / execution volume
```

These are nested decisions; do not model objective, Offering and creator-size allocation as three unrelated percentage systems.

### Creator cohort strategy before Match Intelligence

For the current phase, Creator Strategy only needs cohort-level outputs:

```text
creator archetype
creator tier/size mix
approximate count
activation role
```

Actual creator-by-creator selection is deferred.

### Activation mode

Strategy must distinguish at least conceptually:

```text
CREATOR DISTRIBUTION
UGC / CONTENT PRODUCTION
HYBRID
```

because creator economics and campaign purpose differ materially.

### Recommendation trigger threshold

A Campaign Recommendation should require more than an Observation.

Conceptually require:

```text
meaningful opportunity
+ creator marketing is appropriate
+ Brand/Offering readiness
+ budget feasibility
+ timing validity
+ portfolio capacity
+ no redundant active/planned work
+ no stronger conflicting evidence
```

Exact scoring/thresholds remain IE responsibility.

### Valid output

`NO NEW CAMPAIGN` is a first-class valid recommendation.

### Recommendation cadence

Do not use a fixed universal weekly/monthly recommendation schedule.

Principles:

```text
small / low-budget Brand
→ one campaign may consume most of quarter; event-driven / completion-driven recommendations

growing Brand
→ more frequent rolling recommendations

enterprise / high-velocity Brand
→ potentially weekly decision surfacing while retaining quarterly portfolio context
```

Visible immediate decisions should generally remain limited to 1–3 even when the underlying enterprise portfolio contains many initiatives.

### Manual refresh

`Refresh recommendations` means immediate reevaluation of current evidence and portfolio state, not novelty generation.

A valid result is:

> Current recommendation remains strongest.

### Automatic invalidation

Material changes such as budget, Offering status, Brand/Audience truth, Instagram learning, Performance learning, competitor context or new Campaign commitments should invalidate relevant downstream Recommendation reasoning automatically.

User-visible strategy should only change when the material conclusion changes.

### Negative learning

Repeated negative Performance learning should reduce or suppress future comparable strategy weighting; one weak result should usually not create a permanent ban.

### Hard GO / NO-GO before ranking

Examples of candidates that should fail before ranking include:

```text
inactive Offering
insufficient factual grounding
meaningful compliance/claim conflict
non-viable budget floor
clear duplication of active work
wrong geography / unavailable Offering
```

Prefer a few strong scalable gates over a large warning matrix.

---

# 12. Industry variation is policy, not topology

Do not fork the Intelligence architecture by industry.

Use shared domains with industry-aware applicable truth, classification and reasoning weights.

High-level emphasis:

```text
D2C
Product / category / feature proof / demo / review / lifestyle / UGC / offers

AI-SaaS
Capability / workflow / demo / tutorial / education / expert authority / trial intent

Healthcare
Trust / education / treatment understanding / expert credibility / barrier reduction / geography / claims

Offline
Location / experience / occasion / local reach / social proof / visit-booking intent / seasonality
```

---

# 13. Brand lifecycle is policy, not topology

Lifecycle may influence:

```text
objective weighting
risk tolerance
creator tier mix
Offering breadth
campaign velocity
portfolio diversity
learning/experimentation allocation
```

Do not create separate engine families for emerging/growing/enterprise Brands.

Exact lifecycle vocabulary and inference remain open.

---

# 14. Common authority / provenance requirement

Across durable Brand Centre Intelligence, prefer metadata-driven provenance/authority rather than separate AI/manual object families.

At minimum the system must distinguish enough to implement concepts equivalent to:

```text
source
observed/derived/confirmed authority
last observed
last confirmed
freshness
whether refresh may overwrite
whether conflict requires Brand/support resolution
```

Shared conceptual authority remains:

```text
WEBSITE_OBSERVED
CREATOR_SHOP_DERIVED
BRAND_CONFIRMED
```

with support-controlled identity anchors as a stronger protected class.

Exact metadata schema is an IE architecture decision.

---

# 15. Common cadence / invalidation requirement

The architecture must distinguish:

```text
Evidence/source refresh
→ domain Intelligence refresh
→ Observation trigger/update
→ Recommendation reevaluation
→ user-visible recommendation change
```

These are not one cadence.

Example:

```text
Instagram refresh
→ no material semantic change
→ no Observation
→ no Recommendation change
```

versus:

```text
Instagram refresh
→ repeated new performance pattern
→ Observation
→ portfolio reevaluation
→ Recommendation update if material
```

---

# 16. Existing architecture — preserve / amend / defer

## Preserve

```text
modular top-level Intelligence domains
single responsibility
shared consumption
Evidence traceability
independent evolution
provider-neutral Evidence boundary
Intelligence Compiler / processor / artifact runtime principles where already valid
canonical creator-archetype source
```

## Amend

```text
Brand Intelligence lifecycle to current Brand Preview → Verify → Instagram → Home → progressive Brand Centre journey
Product Intelligence to canonical Offering consumer model
Commercial Intelligence away from customer-pricing ownership toward creator-budget/economics ownership
Instagram Intelligence away from owning generic performance conclusions
Performance Intelligence toward reusable cross-source learning memory
Campaign planning/recommendation responsibility moved out of Campaign Intelligence into Creator Strategy Intelligence
```

## Defer

```text
full Creator Intelligence
Match Intelligence
Campaign Intelligence reconciliation
Meta competitor-social acquisition mechanics
paid Meta Ads Intelligence
creator-by-creator prospect ranking
exact Observation thresholds
exact Recommendation ranking formula
exact budget allocator mathematics
```

---

# 17. IE worker review assignment

The Intelligence Engine AI Worker should now review this reconciliation against:

```text
existing master_intelligence_schema.md
existing Brand Intelligence engine artifacts
existing runtime/compiler/persistence conventions
Brand Preview runtime authority
Brand Centre consumer/Product Authority
```

The worker should return one of:

```text
PASS
PASS_WITH_CORRECTIONS
ARCHITECTURE_CONFLICT
```

The worker must specifically identify:

1. which existing Intelligence architecture can be retained unchanged;
2. stale assumptions that must be deprecated or migrated;
3. whether `Creator Strategy Intelligence` is the correct durable engine boundary/name;
4. canonical ownership boundaries between Product / Commercial / Instagram / Performance / Competitor / Creator Strategy;
5. whether Observation should remain a cross-domain synthesis object rather than an engine;
6. the minimal common provenance/authority/readiness metadata needed across domains;
7. a proposed implementation sequence through Brand Centre;
8. open dependencies that require Product or DE decisions before implementation.

The worker should **not** implement or freeze processors merely from this document. First return the architecture review and correction set.

---

# 18. Proposed implementation-design order after IE acceptance

Unless the IE review finds a genuine dependency conflict, proceed in this order:

```text
1. reconcile Brand Intelligence
2. define Product Intelligence / Offering contracts
3. define Instagram Intelligence contracts
4. define Performance Intelligence / learning contracts
5. define Commercial Intelligence / budget-economics contracts
6. define Competitor Intelligence website-first contracts
7. define cross-domain Observation contract
8. define Creator Strategy Intelligence
9. reconcile onboarding → post-verification progressive Intelligence execution profiles
10. derive DE requirements from accepted Intelligence contracts
```

This ordering deliberately postpones Recommendation implementation until the durable truth/learning engines have stable consumer contracts.

---

# 19. Acceptance boundary

This document is a Product/Architecture reconciliation input, not final IE implementation authority.

Do not rewrite `master_intelligence_schema.md` or replace existing engine artifacts until the IE worker completes the architecture review and Product/Systems Architect accepts the correction set.
