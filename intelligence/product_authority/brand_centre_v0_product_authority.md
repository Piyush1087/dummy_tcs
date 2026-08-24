# Brand Centre V0 — Consolidated Product Authority

**Status:** CONSOLIDATED V0 PRODUCT AUTHORITY  
**Date:** 2026-08-24  
**Scope:** Brand Centre information architecture, workspace purpose, authority/editability, observation/recommendation model, portfolio logic, cadence, and progressive Intelligence behavior.  
**Purpose:** Consolidate the accepted V0 Brand Centre product model before deeper Intelligence Engine, Data Extraction, frontend and visual design work.

---

## 1. Product philosophy

Creator Shop should replace a meaningful portion of the work normally performed by an influencer-marketing agency.

The operating model is:

```text
Creator Shop understands the Brand
        ↓
Creator Shop continuously maintains Brand / Offering / Market understanding
        ↓
Creator Shop identifies what materially matters
        ↓
Creator Shop recommends the few consequential decisions
        ↓
Brand approves / corrects / adjusts high-consequence choices
        ↓
Creator Shop executes through Campaigns / Collaborations
        ↓
Performance becomes new Intelligence
```

The product should optimize for **reliable delegation**, not maximum configurability.

---

## 2. Brand Centre role in the application

Canonical distinction:

```text
Home
= what should I pay attention to / do now?

Brand Centre
= what does Creator Shop understand about my business, market and creator strategy?

Campaigns
= execution environment

Analytics
= what happened? raw / measurement-oriented performance destination
```

Brand Centre must not become a generic admin/settings area or raw Intelligence console.

---

## 3. Brand Centre V0 information architecture

```text
Brand Centre
├── Overview
├── Brand
├── Offerings
├── Market
└── Recommendations
```

There is **no separate Observations workspace** in V0.

`Observation` remains an internal/user-visible semantic object, but highest-priority Observations are surfaced primarily through Overview and may be referenced inside Recommendations.

`Audience` is not a top-level workspace; Audience Personas belong inside Brand.

`Campaign Assets` are not part of Brand Centre; they belong to Campaigns.

`Analytics / Performance` remains a separate destination.

---

## 4. Common Brand Centre UX rule

Brand Centre workspaces are primarily:

```text
browse
→ understand
→ navigate
```

Detailed management follows:

```text
workspace
→ section / object detail
→ edit / correct / manage
```

Do not turn primary workspace surfaces into dense CMS forms with edit controls on every row.

This is especially important on mobile.

---

# 5. Overview

## 5.1 Purpose

Overview is a **composition surface**, not a separate Intelligence domain.

It should answer:

> What does Creator Shop think matters most right now?

It may assemble:

```text
Creator Shop perspective
highest-priority Observations
recommended next decisions
quarter / portfolio snapshot where relevant
compact Brand / Offering / Market state
```

## 5.2 Observations on Overview

Observations are the compression layer between domain Intelligence and strategic action.

Conceptual funnel:

```text
Evidence
→ Domain Intelligence / facts / signals
→ Observations
→ Opportunity hypotheses
→ Recommendations
```

A user-visible Observation should represent a material:

```text
change
trend
strength / weakness
gap
conflict
opportunity signal
risk signal
```

It should not merely restate persistent Brand facts.

Illustrative observation:

> Demonstration-led Reels are consistently outperforming polished product-led content, while a priority Offering has relatively little demonstration content.

## 5.3 Observation trigger semantics

An Observation becomes eligible to surface only when the underlying signal is:

```text
grounded
material
new or meaningfully changed
relevant to creator marketing
non-duplicative
```

Exact numeric thresholds belong to later Intelligence policy, not Product Authority.

## 5.4 Observation actions

Observations may offer only low-risk actions such as:

```text
Review Offering
View Brand
See Market
View performance
Resolve mismatch
Hide observation
```

An Observation should not directly launch an expensive/high-consequence Campaign action.

---

# 6. Brand

## 6.1 Workspace composition direction

Brand should feel like one coherent Brand profile rather than several administration tabs.

Preferred V0 experience direction:

```text
Brand workspace

Header
→ confirmed business information / identity

Carousel / section-led content
→ Visual Identity
→ Brand Identity
→ Audience Personas
→ Business Locations [conditional]
```

The exact visual treatment is not frozen here; the semantic hierarchy is.

## 6.2 Confirmed business identity — support-controlled

The following fields are system anchors and are not ordinary self-serve profile edits after confirmation:

```text
Brand name
primary website / domain
confirmed Industry
confirmed Sub-industry / category
primary country / geography
collaboration / reporting currency basis
canonical Instagram / social handle(s)
```

These fields affect downstream Intelligence, identity, creator collaboration, commercial defaults or platform integrations.

Changes should use a bounded support / exceptional-change path rather than ordinary self-service edit.

The UI should not clutter the page with locks; protected values can be displayed normally with a contextual `Contact support to change` path where needed.

In particular, canonical social handles must not be silently changed or self-edited because they may affect Brand identity, Instagram Intelligence, creator collaboration context and future performance linkage.

## 6.3 Brand-editable expression

Brand may self-edit / manage:

```text
logo / visual assets
color palette
fonts
brand imagery
brand description
positioning / value proposition
tone of voice
brand personality
values
USPs / differentiators
reasons to believe / communication constraints
Audience Personas
Business Locations
```

Brand-confirmed fields are not silently overwritten by later AI refresh.

## 6.4 Tone of voice

Tone should not be a single dropdown.

Preferred V0 interaction:

```text
choose a bounded set of tone traits
+
optional short free-text guidance
```

Example traits may include `Warm`, `Expert`, `Reassuring`, `Bold`, `Playful`, `Premium`, `Conversational`, etc. Exact taxonomy is deferred.

## 6.5 Audience Personas

Maintain a small strategic set rather than an unlimited segment builder:

```text
2–3 active Personas
```

Each Persona should contain only creator-strategy-relevant understanding such as:

```text
who they are
what matters to them
motivations
barriers / concerns
trust / credibility needs
creator communication implications
```

No mandatory Audience definition per Offering.

## 6.6 Locations

Business Locations are conditional reusable Brand entities, especially relevant to Healthcare and Offline Services.

Offerings may reference Location IDs; Campaign-time geography determines which locations matter.

---

# 7. Offerings

The reconciled Offering authority remains in:

`intelligence/product_authority/brand_centre_offerings_v0_provisional_authority.md`

The following principles are incorporated into this consolidated authority:

```text
Offering belongs to Brand Centre
Campaign Asset belongs to Campaigns
Creator Support / gifting / provisioning is separate
AI-discovered + manually-added Offerings converge to one canonical object
only ACTIVE Offerings may be used for new Campaigns
Brand-confirmed non-price fields are not silently overwritten
price may refresh from reliable first-party truth
Locations are separate reusable entities
Offering detail exists to support creator communication, not generic catalogue completeness
```

Creator communication ingredients are grounded reusable inputs for later Campaign Brief generation; they are not finished Briefs.

---

# 8. Market

## 8.1 V0 purpose

Market should explain the Brand's creator/content position and, where available, enrich that picture with competitor/market evidence.

For the current base-case reasoning model, V0 must work from:

```text
Brand website
+
Brand-owned Instagram [when connected]
```

A later `base 0` website-only mode remains to be designed.

## 8.2 Base-case Market questions

Without depending on competitor intelligence, Market should be able to reason about:

```text
which Offerings the Brand emphasizes
which content / communication territories it uses
which formats it uses
which themes / use-cases appear to perform relatively better
where website strategy and Instagram execution diverge
which Brand / Offering opportunities appear underused
```

## 8.3 Competitor Intelligence as enrichment

Competitor Intelligence is optional enrichment in V0, not a dependency for recommendation generation.

Available competitor evidence may:

```text
strengthen an Observation
weaken an Observation
identify a competitive gap
identify saturation / crowding
change opportunity priority
change Recommendation ranking
```

The Market V1 acquisition contract remains intentionally open pending verified current Meta API capability research.

Do not introduce third-party influencer-platform APIs such as Modash / HypeAuditor as a planned dependency.

## 8.4 Industry variation

Keep one common Market architecture while changing the strategic dimensions by industry.

### D2C

Emphasize:

```text
Offering / category
price / offer
feature proof
product demonstration
review / comparison
lifestyle relevance
content format
creator archetype
```

### AI / SaaS

Emphasize:

```text
product / capability
use case
workflow demonstration
education
expert / operator authority
comparison
trial / demo intent
```

### Healthcare

Emphasize:

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

### Offline Services / Experiences

Emphasize:

```text
location
experience
occasion
visual appeal
creator visit / social proof
booking intent
seasonality
```

---

# 9. Recommendations

## 9.1 Purpose

Recommendations is where Creator Shop moves from understanding to agency-like strategic advice.

A recommendation is not merely an AI-generated idea.

> A recommendation is a sufficiently grounded, strategically relevant, feasible and portfolio-aware creator-marketing action that Creator Shop believes deserves Brand attention now.

## 9.2 Recommendation inputs

Base-case required strategic inputs:

```text
Brand Intelligence
Offering Intelligence
own Instagram Intelligence [for the current base case]
Budget context
current / planned Campaign state
```

Optional enrichment:

```text
Competitor Intelligence
previous Campaign / Collaboration learning
Performance Intelligence
Paid Media Intelligence [future]
broader Market Intelligence
```

Recommendations may consume stable Intelligence directly in addition to explicit Observations.

## 9.3 Recommendation trigger semantics

A Campaign Recommendation becomes eligible when:

```text
one or more credible strategic signals / Observations exist
+
Brand relevance
+
Offering readiness
+
creator marketing is an appropriate intervention
+
budget feasibility
+
portfolio need / gap
+
timing validity
+
non-redundancy with active / planned Campaigns
+
no stronger conflicting evidence
```

Recommendation = selection and prioritization, not idea generation.

## 9.4 Recommendation actions

User-facing recommendation actions should support:

```text
Accept
Adjust
Not now
Not for us
Refresh recommendations
```

Accept should create a pre-populated Campaign Draft; it must not directly publish / activate a Campaign.

Adjust should expose only high-consequence levers such as:

```text
budget
timing
Offering
market / geography
audience guardrails
major Brand / compliance constraints
```

Creator Shop should recompute downstream creator / deliverable strategy after material adjustment.

## 9.5 No-campaign output is valid

`NO NEW CAMPAIGN` is a valid Recommendation result when current work should be completed, evidence is insufficient, budget is fully committed, or the current portfolio already addresses the strongest opportunity.

---

# 10. Quarterly portfolio model

## 10.1 Strategic horizon

Preferred planning hierarchy:

```text
QUARTER
= creator-marketing portfolio and allocation

MONTH
= execution sequencing

WEEK
= decision / recommendation cadence for high-velocity Brands
```

The Product must scale from a small Brand running one campaign to an enterprise Brand managing 40–100 creator collaborations per month.

## 10.2 Recommendation count

Do not globally freeze recommendation count to `1 + 2`.

The underlying quarter may contain many initiatives.

The interface should generally surface only:

```text
1–3 Recommendations currently requiring Brand attention
```

while allowing a larger planned / active portfolio underneath.

For a small Brand there may be only one valid recommendation for an extended period.

For a large/high-budget Brand, new recommendations may be surfaced approximately weekly as the rolling portfolio progresses.

## 10.3 Budget allocation hierarchy

Do not independently split budget across objectives, Offerings and creator tiers.

Use a hierarchical allocation model:

```text
Quarterly creator budget
        ↓
1. Objective target allocation
        ↓
2. Offering / strategic opportunity allocation
        ↓
3. Campaign allocation
        ↓
4. Creator archetype / size mix
        ↓
5. Deliverable / execution volume
```

Creator tier is therefore a downstream strategy choice, not a top-level equal-split decision.

## 10.4 Portfolio balance

The system should monitor planned + committed + completed quarter allocation across dimensions such as:

```text
objective
Offering
creator archetype
creator size
campaign type / activation mode
```

Balance does not mean equal distribution.

Recommendation logic should compare actual allocation against **strategically justified target allocation** and avoid accidental overconcentration.

A launch quarter may legitimately place a large share of budget behind one Offering.

---

# 11. Recommendation cadence and refresh

## 11.1 Three separate cadences

```text
INTELLIGENCE CADENCE
source-specific / continuous or periodic

OBSERVATION CADENCE
material-change driven

RECOMMENDATION CADENCE
event + portfolio-review driven
```

These should not share one refresh mechanism or one schedule.

## 11.2 Automatic reevaluation

Material changes should automatically mark affected recommendation reasoning stale and trigger reevaluation.

Examples:

```text
Budget changed
Offering added / paused / materially changed
Brand / Audience materially changed
new Instagram learning
new competitor evidence
Campaign completed
performance materially changed
campaign / collaboration commitments changed
```

The Brand should not have to remember to manually request reevaluation.

## 11.3 Controlled user-visible change

Automatic reevaluation must not cause silent chaotic strategy churn.

If an active recommendation materially changes, the UI should communicate that the plan has been updated or superseded rather than simply replacing it without explanation.

## 11.4 Manual Refresh

A `Refresh recommendations` control is acceptable.

Its meaning is:

> Re-evaluate current Intelligence and portfolio state now.

It must not mean:

> Generate different ideas for novelty.

A refresh may validly return that the current recommendation remains strongest.

## 11.5 Recommendation cadence scales with operating scale

Conceptual behavior:

```text
small / low-budget Brand
→ recommendation only when meaningful capacity / need exists

growing Brand
→ periodic + event-driven

large / enterprise Brand
→ rolling portfolio review, potentially weekly
```

Cadence should eventually derive from:

```text
quarterly budget
campaign velocity
active collaboration volume
number / priority of Offerings
remaining unallocated budget
portfolio coverage
```

---

# 12. Negative signals and learning memory

Previous Campaign / Collaboration performance must actively influence future Recommendation ranking.

Learning should attach at more than Campaign level, including where supportable:

```text
objective
Offering
Audience
creator archetype
creator size
content theme
format
creator
activation mode
```

Repeated negative evidence may:

```text
reduce weighting
pause a strategy from future Recommendation
reduce target allocation
recommend stopping additional activation / spend
```

True permanent exclusions should remain rare.

For a live Campaign that materially underperforms, Creator Shop may recommend pausing further activation or additional spend, but should not autonomously pause a high-consequence live Campaign in V0.

---

# 13. Recommendation prioritization

Candidate opportunities should be ranked using a strategic model that conceptually considers:

```text
business relevance
objective need
Offering priority
evidence strength
creator suitability
budget feasibility
timing
portfolio complementarity / redundancy
historical positive / negative learning
```

Additional factors such as learning value, lifecycle stage and risk may influence weighting.

Do not expose internal scores such as `Recommendation score = 91` to the Brand.

Recommendation priority must remain explainable in natural product language:

```text
what Creator Shop noticed
why it matters
why this action now
why this Offering / audience / creator mix
what investment is recommended
what Brand decision is required
```

---

# 14. Growth lifecycle

Use the same underlying Intelligence model across Brand lifecycle stages, but vary recommendation policy / weighting.

Conceptually:

### Emerging

Favor:

```text
focused territory
trust building
learning efficiency
UGC / asset creation
micro / efficient creator mixes
```

Avoid broad SOV battles.

### Growing

Favor:

```text
adjacent audience expansion
repeatable creator cadence
multiple Offerings
stronger category competition
```

### Established / Leader

Favor:

```text
portfolio optimization
defensive share
new Offering support
creative refresh
incremental efficiency
```

Exact lifecycle taxonomy is deferred to Intelligence/Product refinement.

---

# 15. Progressive onboarding → Brand Centre assimilation

Brand Centre must not be turned into a mandatory review flow during onboarding.

Canonical onboarding remains:

```text
Landing
→ Gatekeeper
→ Fast Brand Analysis
→ Brand Preview
→ Verify / claim
→ Instagram connection decision
→ Chat-first Home
→ deeper Intelligence matures asynchronously
→ Brand Centre progressively fills and improves
```

For each Brand Centre consumer object, later architecture work must classify:

```text
required before Brand Preview?
required before verification?
required before Home?
may mature after Home?
requires Brand confirmation?
```

The default should be progressive maturity, not reintroducing review gates for Brand Identity, Audience, Offerings or Market before product entry.

---

# 16. Common field authority principle

Conceptual authority classes:

```text
WEBSITE_OBSERVED
CREATOR_SHOP_DERIVED
BRAND_CONFIRMED
```

General behavior:

```text
WEBSITE_OBSERVED
→ may refresh when reliable

CREATOR_SHOP_DERIVED
→ may refresh as Intelligence changes

BRAND_CONFIRMED
→ never silently overwrite
```

Explicit exceptions, such as current Offering price, are defined by the owning domain authority and must not be generalized.

Confirmed Brand identity anchors are additionally support-controlled as defined in Section 6.2.

---

# 17. V0 unresolved / deferred areas

Do not block Brand Centre V0 consolidation on these:

```text
Market V1 Meta / competitor acquisition feasibility
website-only base 0 Recommendation mode
exact budget allocator formula
exact Observation thresholds
exact Recommendation ranking weights
exact lifecycle taxonomy
exact recommendation cadence thresholds by spend / velocity
Meta Ads read / management strategy
rich portfolio analytics
pre-launch Offering workflows
creator provisioning / gifting automation
```

These become downstream Product / Intelligence / DE decisions.

---

# 18. Reconciled V0 summary

```text
Brand Centre = Overview / Brand / Offerings / Market / Recommendations

Observations are semantic objects, not a standalone workspace
Overview surfaces the most important Observations + immediate Recommendations
Brand uses a business-info header plus Visual Identity / Brand Identity / Personas / Locations sections
confirmed Brand identity anchors are support-controlled
Brand-confirmed values are not silently overwritten
Offerings remain separate from Campaign Assets
Market V0 must work from Brand website + own Instagram
competitor Intelligence only enriches the base model
Recommendations are portfolio-aware strategic actions, not generated ideas
quarter is the primary strategic planning horizon
recommendation throughput scales with budget / execution velocity
show only 1–3 decisions requiring attention at once
budget flows objective → Offering/opportunity → Campaign → creator mix → execution volume
Observation = material Intelligence change
Recommendation = actionable + feasible + portfolio-relevant response
Intelligence refresh, Observation surfacing and Recommendation cadence are separate
material input changes trigger automatic reevaluation
manual Refresh means re-evaluate, not regenerate novelty
negative performance changes future ranking / allocation
NO NEW CAMPAIGN is a valid Recommendation
onboarding remains short; Brand Centre matures progressively after verification
```

This document is the consolidated V0 Product Authority for Brand Centre. Deeper Intelligence, Data Extraction, frontend and UI/UX work should derive from it rather than redefining the consumer model.