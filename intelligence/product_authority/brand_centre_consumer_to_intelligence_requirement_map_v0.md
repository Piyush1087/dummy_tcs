# Brand Centre V0 — Consumer-to-Intelligence Requirement Map

**Status:** V0 ARCHITECTURE DERIVATION INPUT  
**Date:** 2026-08-24  
**Scope:** Map Brand Centre consumer needs to Intelligence responsibilities without prematurely freezing processor/schema implementation.  
**Authority dependency:** `intelligence/product_authority/brand_centre_v0_product_authority.md`

---

## 1. Purpose

Brand Centre has now been designed from the consumer side first.

This map works backward from the product experience to identify what Intelligence must eventually provide.

It is intentionally **not** a processor design, database schema, provider map or extraction implementation.

The architectural sequence is:

```text
Brand Centre consumer need
        ↓
canonical Intelligence responsibility
        ↓
required evidence classes
        ↓
readiness / refresh / authority semantics
        ↓
processor and DE design later
```

This prevents the Intelligence architecture from becoming a maximal extraction schema with no clear downstream consumer.

---

# 2. Target Intelligence domains

The current target decomposition remains:

```text
Creator Shop Master Intelligence Schema

├── Brand Intelligence
├── Product / Offering Intelligence
├── Commercial Intelligence
├── Instagram Intelligence
├── Competitor Intelligence
├── Creator Intelligence
├── Campaign Intelligence
└── Performance Intelligence
```

Cross-domain synthesis is additionally required for:

```text
Observations
Opportunity hypotheses
Recommendations / portfolio planning
```

Do not create a separate permanent top-level `Observation Intelligence` merely because Observations exist as semantic objects.

---

# 3. Consumer map — Overview

## Consumer questions

Overview must answer:

```text
What does Creator Shop think matters now?
What changed or deserves attention?
What decision does the Brand need to make next?
How is the current creator portfolio positioned?
```

## Required Intelligence inputs

```text
Brand Intelligence
Offering Intelligence
Instagram Intelligence
Market / Competitor Intelligence when available
Campaign Intelligence
Performance Intelligence
Commercial / budget context
```

## Required synthesis outputs

```text
current Creator Shop perspective
ranked active Observations
1–3 current Recommendations needing Brand attention
quarter portfolio snapshot where relevant
```

## Important boundary

Overview owns no independent truth.

It composes outputs from other domains.

---

# 4. Consumer map — Brand

## 4.1 Confirmed business identity

### Consumer needs

```text
Brand name
website / domain
confirmed Industry
confirmed Sub-industry / category
primary geography
currency basis
canonical social handle(s)
```

### Intelligence responsibility

Primarily Brand Intelligence, but these are **confirmed identity anchors**, not repeatedly re-derived mutable Intelligence.

### Authority requirement

```text
support-controlled after confirmation
never silently rewritten by AI
```

### Downstream consumers

```text
all Intelligence routing
Offering discovery
Instagram acquisition
Campaign creation
commercial defaults
creator collaboration context
```

---

## 4.2 Visual Identity

### Consumer needs

```text
logos
palette
fonts
Brand imagery
```

### Intelligence responsibility

Brand Intelligence should normalize / maintain visual identity references.

### Evidence classes

```text
website evidence
Brand uploads
Brand edits / confirmation
future connected Brand sources where permitted
```

### Authority rule

Brand-confirmed / Brand-uploaded assets dominate observed candidates.

### Downstream consumers

```text
Campaign Brief generation
creator visual guidance
future creative generation
Brand consistency checks
```

---

## 4.3 Brand Identity

### Consumer needs

```text
Brand description
positioning
value proposition
values
tone of voice
personality
USPs / differentiators
reasons to believe
communication constraints
```

### Intelligence responsibility

Brand Intelligence.

### Evidence classes

```text
website
Brand-confirmed edits
own Instagram as enrichment / consistency signal
future Campaign / Performance learning where appropriate
```

### Important semantic split

Brand-owned truth and Creator Shop interpretation should remain distinguishable.

The user-facing Brand Identity may contain confirmed reusable Brand truth; internal Intelligence may maintain richer derived interpretation.

### Downstream consumers

```text
Observation synthesis
Campaign strategy
creator Brief generation
Brand fit evaluation
content / tone constraints
```

---

## 4.4 Audience Personas

### Consumer needs

```text
2–3 strategic Personas
motivations
barriers
trust requirements
creator communication implications
```

### Intelligence responsibility

Brand Intelligence owns the durable Brand-level audience model, informed by Instagram / Campaign / Performance evidence over time.

### Evidence classes

```text
website
own Instagram
Brand corrections
future Campaign / Performance learning
optional Market evidence
```

### Important boundary

Do not create mandatory Offering-level Audience objects.

Campaign targeting should later derive from:

```text
Brand Audience
+ Campaign objective
+ Offering
+ Market context
```

---

## 4.5 Locations

### Consumer needs

```text
reusable business Locations
address / geography
contact / conversion path
Offering availability
active state
```

### Intelligence responsibility

Brand Intelligence owns canonical Brand Locations; Offering Intelligence references them.

### Evidence classes

```text
website
Brand confirmation
```

### Downstream consumers

```text
Offering availability
Campaign geography
Healthcare / Offline recommendation logic
conversion destination selection
```

---

# 5. Consumer map — Offerings

## Consumer needs

Creator Shop must know enough to answer:

```text
What is the Offering?
What customer-facing facts are trustworthy?
What can creators credibly communicate?
What claims are constrained?
What current price / commercial fact applies?
Where/how can a customer act?
Where is the Offering available?
What changed?
```

## Intelligence responsibility

Product / Offering Intelligence.

## Core semantic outputs

Applicable subset:

```text
Offering identity / type
current status
customer-facing description
images / media
price / currency where applicable
key factual attributes
grounded differentiators
creator communication ingredients
claim constraints
customer destination
Location relationships
change history / current freshness
```

## Authority behavior

Must preserve:

```text
Brand-confirmed non-price truth
current reliable price refresh exception
ACTIVE / PAUSED / INCOMPLETE lifecycle
```

## Downstream consumers

```text
Brand Centre Offerings
Observation synthesis
Campaign opportunity generation
Campaign Asset creation
Brief generation
portfolio allocation by Offering
```

---

# 6. Consumer map — Market base case

## 6.1 Current V0 base case

Current Market/Recommendation reasoning should be able to operate from:

```text
Brand website
+
Brand-owned Instagram
```

Competitor Intelligence remains optional enrichment.

A website-only `base 0` mode will be designed later.

## 6.2 Own Instagram consumer needs

Market / Observation synthesis needs Instagram Intelligence to answer:

```text
What does the Brand publish?
Which Offerings are emphasized?
Which formats are used?
Which themes / use-cases appear?
How does communication differ from website Brand truth?
Which eligible content patterns perform relatively better / worse?
What is changing over time?
```

## Intelligence responsibility

Instagram Intelligence owns normalized Brand-owned Instagram understanding.

Performance Intelligence may own deeper measurement semantics; Brand Centre consumes interpreted outputs rather than raw analytics tables.

## Downstream consumers

```text
Market
Observations
Campaign opportunity generation
Recommendation ranking
future Campaign / content strategy
```

---

# 7. Consumer map — Competitor enrichment

## Consumer needs

When reliable competitor evidence exists, Creator Shop should be able to reason about applicable dimensions such as:

```text
competitor positioning
Offering / category emphasis
content / communication themes
creator-related activity where supportable
relative gaps / crowding
changes over time
```

## Intelligence responsibility

Competitor Intelligence.

## Evidence acquisition status

V1 Meta / Instagram acquisition capability is intentionally **not frozen** in this map.

Product will provide verified current Meta API capability information before the deeper Competitor / DE contract is finalized.

Do not introduce third-party influencer-platform APIs as a planned architectural dependency.

## Recommendation behavior

Competitor Intelligence is enrichment:

```text
base Observation / Recommendation can exist without it
competitor evidence may strengthen / weaken / reprioritize it
```

---

# 8. Consumer map — Observations

## Product role

Observation is a synthesis object, not a standalone workspace.

It compresses many domain facts/signals into a small number of material conclusions.

## Required inputs

Potentially any combination of:

```text
Brand Intelligence
Offering Intelligence
Instagram Intelligence
Competitor Intelligence
Campaign Intelligence
Performance Intelligence
Commercial context
```

## Observation generator responsibilities

Detect material:

```text
change
trend
gap
conflict
strength / weakness
opportunity signal
risk signal
```

## Eligibility semantics

A surfaced Observation should be:

```text
grounded
material
new / meaningfully changed
creator-marketing relevant
non-duplicative
```

## Object behavior

Conceptually maintain:

```text
current conclusion
related entities
evidence references
first detected
last materially updated
active / resolved / superseded / hidden state
```

Exact schema is deferred.

## Downstream consumers

```text
Overview
Recommendation synthesis
Recommendation explanation
```

Not every Observation must create a Recommendation.

---

# 9. Consumer map — Opportunity hypotheses

## Product role

Opportunity hypotheses are primarily an internal reasoning layer between Observations and Recommendations.

They answer:

> What creator-marketing responses might plausibly address the current strategic situation?

## Required inputs

```text
Observations
stable Brand truth
Offering readiness
Audience
Market context
current Campaign state
budget / Commercial context
```

## Important boundary

Opportunity generation may create many candidates.

User value comes from **ranking and selecting**, not generating many ideas.

No dedicated Opportunities workspace is required in V0.

---

# 10. Consumer map — Recommendations

## 10.1 Recommendation synthesis inputs

Required base-case inputs:

```text
Brand Intelligence
Offering Intelligence
Instagram Intelligence
Commercial / budget context
Campaign state
```

Optional enrichment:

```text
Observations
Competitor Intelligence
Campaign history
Performance Intelligence
Creator Intelligence / supply suitability
future Paid Media Intelligence
```

## 10.2 Recommendation output requirements

A recommendation should be capable of providing a nearly campaign-ready strategic proposal:

```text
opportunity / strategic intent
canonical Campaign objective
Offering
Audience / geography
creator strategy
creator archetype / size mix
content / creative direction
activation mode
recommended investment
recommended timing
success metric direction
supporting rationale / Observations
Brand decisions required
```

Exact fields must later reconcile with the existing Campaign contracts rather than duplicating them.

## 10.3 Recommendation decision states

Product-facing actions:

```text
Accept
Adjust
Not now
Not for us
Refresh
```

Accept creates a Campaign Draft.

Recommendation acceptance is not Campaign publication.

## 10.4 Valid negative output

Recommendation synthesis must support:

```text
NO NEW CAMPAIGN
```

---

# 11. Consumer map — Commercial / budget allocation

## Consumer need

Creator Shop should recommend deployment of creator budget rather than asking the Brand to design every allocation manually.

## Intelligence responsibility

Commercial Intelligence provides budget/commercial context; Campaign / Recommendation Intelligence uses it for strategic allocation.

## Required allocation model

```text
Quarterly creator budget
        ↓
Objective target allocation
        ↓
Offering / opportunity allocation
        ↓
Campaign allocation
        ↓
creator archetype / size mix
        ↓
deliverable / execution volume
```

## Required portfolio state

Need awareness of:

```text
available budget
committed budget
spent budget
reserved / unallocated budget
current Campaign commitments
planned Campaigns
objective distribution
Offering distribution
creator mix distribution
```

## Important boundary

Do not treat creator size allocation, Offering allocation and objective allocation as independent percentages.

They are nested strategic decisions.

---

# 12. Consumer map — Creator Intelligence dependency

Recommendation synthesis eventually requires Creator Intelligence to answer questions such as:

```text
Which canonical creator archetypes fit this objective / Offering / audience?
Which creator sizes are economically and strategically appropriate?
Is there sufficient creator supply for the proposed plan?
Which prior creator patterns performed well / poorly?
```

Creator Intelligence remains modular and should not be collapsed into Recommendation logic.

Existing canonical creator archetype authority must remain reusable.

---

# 13. Consumer map — Campaign Intelligence

Campaign Intelligence should maintain reusable learning around:

```text
objective
Offering
Audience
creator archetype
creator size
content theme
format
activation mode
Campaign result
Campaign lifecycle / current commitments
```

It is both:

```text
an execution-context input to Recommendations
+
a learning source after Campaign completion / progression
```

Recommendations must avoid duplicating active/planned Campaigns unless the recommendation explicitly means scale / extend / modify.

---

# 14. Consumer map — Performance Intelligence

Performance Intelligence should normalize and interpret performance evidence from available first-party sources.

Potential dimensions include:

```text
Campaign
creator
objective
Offering
content theme
format
creator archetype
creator size
```

Brand Centre should consume interpreted learning rather than raw metric tables.

Raw / detailed measurement remains primarily an Analytics concern.

Negative learning must be available to Recommendation ranking.

---

# 15. Industry policy requirements

Do not fork the whole Intelligence architecture per industry.

Use shared canonical objects and domain processors with industry-aware reasoning / required-field policies.

### D2C priority dimensions

```text
Offering / category
price / offer
feature proof
product demonstration
review / comparison
lifestyle relevance
content format
```

### AI / SaaS priority dimensions

```text
product / capability
use case
workflow demo
education
expert authority
comparison
trial / demo intent
```

### Healthcare priority dimensions

```text
trust
education
treatment understanding
expert credibility
barrier reduction
location
consultation intent
claims / compliance
```

### Offline priority dimensions

```text
location
experience
occasion
visual appeal
social proof
booking intent
seasonality
```

Industry should change reasoning weights and applicable truth, not create four unrelated architectures.

---

# 16. Growth lifecycle policy requirements

Recommendation policy should adapt to Brand maturity without requiring separate Intelligence schemas.

Conceptual tendencies:

```text
Emerging
→ focus, trust, learning, efficient creator mix, UGC

Growing
→ repeatable cadence, adjacent audience / Offering expansion

Established / Leader
→ portfolio optimization, defensive share, launch support, efficiency
```

Exact lifecycle labels and inference rules remain open.

---

# 17. Cadence / invalidation requirements

The Intelligence system must distinguish:

```text
source refresh
Observation invalidation / surfacing
Recommendation invalidation / reevaluation
```

Material events that can invalidate recommendation reasoning include:

```text
Budget change
Offering add / pause / material edit
Brand / Audience change
new Instagram learning
new competitor evidence
Campaign completion
material performance change
new Campaign / Collaboration commitments
```

Recommendation reevaluation may happen automatically, but visible strategy should change only when the material conclusion changes.

Manual `Refresh recommendations` means immediate reevaluation, not novelty generation.

---

# 18. Recommendation throughput requirements for scale

The system must scale across:

```text
small Brand
→ one meaningful campaign may consume a large share of quarterly budget

enterprise Brand
→ 40–100 creator collaborations / month and multiple concurrent initiatives
```

Therefore:

```text
underlying portfolio size is not fixed
visible immediate decisions are usually limited to 1–3
recommendation cadence scales with available budget / execution velocity
quarter remains strategic planning horizon
weekly decision surfacing may be valid at enterprise scale
```

Recommendation Intelligence must reason over the whole quarter to avoid locally optimal but globally unbalanced campaign generation.

---

# 19. Provenance / authority requirements

All durable Intelligence domains should support provenance / authority strongly enough to implement:

```text
WEBSITE_OBSERVED
CREATOR_SHOP_DERIVED
BRAND_CONFIRMED
```

or a later equivalent vocabulary.

The system must know whether a field:

```text
may auto-refresh
may be recomputed
must be preserved
requires Brand resolution on conflict
is support-controlled
```

This metadata principle is preferred over duplicating separate objects for AI vs manual data.

---

# 20. Onboarding requirement classification

Before deeper Intelligence architecture is frozen, every consumer output should be classified against the onboarding timeline:

```text
A. needed for Gatekeeper / admission
B. needed for Fast Brand Analysis / Brand Preview
C. needed before verification
D. useful immediately after Home entry
E. may mature asynchronously in Brand Centre
```

The current Product direction strongly favors category `E` for most deeper Brand / Offering / Market Intelligence.

Do not reintroduce mandatory Brand Centre review into onboarding merely because a downstream field eventually exists.

---

# 21. Next architecture work derived from this map

The next Intelligence architecture pass should produce, for each domain:

```text
canonical responsibilities
owned entities / outputs
consumers
evidence requirements
field authority / provenance semantics
readiness semantics
refresh / invalidation policy
industry policy hooks
cross-domain interfaces
```

Only after those are stable should the team freeze:

```text
processor graph
prompt / model policy
provider-specific DE plans
canonical Zod / DB schemas
runtime orchestration
```

---

# 22. Current unresolved dependencies

Explicitly open:

```text
current Meta API capability for competitor / Business Discovery use cases
website-only base 0 recommendation behavior
exact Instagram Intelligence media / insight contract
exact Observation threshold policy
exact opportunity / Recommendation scoring
budget allocator formula
recommendation cadence thresholds
lifecycle taxonomy
Paid Meta read / management path
```

These gaps are known and should not be silently filled by downstream workers.

---

# 23. Summary map

```text
Brand Centre Consumer
        ↓

Brand
→ Brand Intelligence

Offerings
→ Product / Offering Intelligence

Market base case
→ Brand + Offering + Instagram Intelligence

Market enrichment
→ Competitor Intelligence

Observations
→ cross-domain synthesis

Recommendations
→ Observations
 + Brand
 + Offering
 + Instagram
 + Commercial
 + Campaign state
 + optional Competitor / Creator / Performance learning

Quarterly portfolio
→ Recommendation / Campaign Intelligence
 + Commercial Intelligence
 + Creator Intelligence
 + Performance feedback

Execution
→ Campaigns / Collaborations

Results
→ Performance + Campaign Intelligence
        ↓
new Observations / Recommendation reevaluation
```

This map is the consumer-derived starting point for the next Intelligence Engine architecture phase.