# Brand Centre — Systems Architect Progress Handoff

**Status:** ACTIVE PRODUCT-DESIGN CONTINUITY UPDATE  
**Date:** 2026-08-24  
**Scope:** Brand Centre V0/V1 product direction after Brand Preview completion  
**Parent continuity:** `docs/organization/handoffs/brand_onboarding_systems_architect_continuity_20260822.md`

---

## 1. Purpose

This update gives the Systems Architect the current state of Brand Centre product design so the program can continue without reconstructing the discussion from chat history.

Brand Preview implementation, runtime acceptance, clone integration and developer handoff are complete. The current Product/UX stream is intentionally working **output-first**: define the Brand Centre and downstream decision surfaces first, then derive the Product / Competitor / Commercial / Instagram / Campaign Intelligence requirements from those desired outputs.

Do not treat the Brand Centre work below as final frontend implementation authority yet. It is a progressively converging Product/UX model intended to become the consumer contract for deeper Intelligence.

---

## 2. Current strategic direction

Creator Shop should behave more like an influencer-marketing agency than a highly configurable SaaS form system.

The operating philosophy is:

```text
Creator Shop understands the Brand
        ↓
Creator Shop builds and maintains the operating picture
        ↓
Creator Shop recommends the few consequential decisions
        ↓
Brand approves / corrects / overrides where needed
        ↓
Creator Shop executes
```

The Product should optimize for **reliable delegation**, not maximum configurability.

Prefer a small number of strict, scalable GO / NO-GO rules over large exception matrices and highly use-case-specific configuration.

Brand Centre should therefore be a **living strategic workspace**, not a generic dashboard, CMS or Intelligence-debugging console.

---

## 3. Current Brand Centre top-level information architecture

Current provisional structure:

```text
Brand Centre

Overview
Brand
Offerings
Market
```

Audience is **not** a separate top-level workspace; it belongs inside Brand.

Campaign Assets are **not** a Brand Centre workspace; they remain Campaign-domain objects.

Raw Analytics / Performance is expected to remain a separate, lower-frequency application destination. Brand Centre consumes the learnings and implications of performance rather than duplicating a raw analytics dashboard.

The next planned workspaces are:

```text
Observations
Campaign Recommendations
```

These may become part of Overview / planning rather than necessarily new top-level navigation items. Product must resolve placement before frontend authority is frozen.

---

## 4. Brand workspace — current UX direction

The Brand workspace should use:

```text
Header
→ confirmed business identity / business information

Carousel / section-led body
→ Visual Identity
→ Brand Identity
→ Audience Personas
→ Business Locations where applicable
```

The workspace is primarily **read / understand / navigate**. Edit controls should not be scattered across every field/card, especially on mobile.

Canonical UX principle:

```text
workspace / section
→ readable summary
→ open detail/manage surface
→ edit / pause / remove / support action there
```

### 4.1 Confirmed Brand identity — support-controlled

Earlier Gatekeeper / Intelligence decisions remain authoritative: the confirmed Brand identity block contains system anchors that downstream Intelligence and Collaboration rely on.

Support-controlled / non-self-serve fields include:

```text
Brand name
Primary website/domain
Industry
Sub-industry
Country / primary geography
Reporting / collaboration currency basis
Canonical social handles, including Instagram
Verification / canonical Brand identity relationships
```

Reason: these fields are not cosmetic profile data. They affect Intelligence routing, evidence acquisition, currency/commercial defaults, connected identity, and creator collaboration context.

In particular, the Instagram/social handle must **not** be casually self-editable because changing the canonical Brand social identity can affect creator collaboration and connected intelligence.

UX should not clutter the page with locks. Protected fields are displayed normally; the relevant manage/detail surface can show `Contact support to change` for protected fields.

### 4.2 Brand-editable expression and visual fields

Self-serve Brand-controlled areas include, provisionally:

```text
Logo / alternate logo
Color palette
Fonts
Brand imagery / visual reference library
Brand description
Positioning
Value proposition
Tone of voice
Brand values
USPs / differentiators
Reasons to believe
Audience Personas
Business locations
```

Once the Brand explicitly edits/confirms a field, future AI refresh must not silently overwrite that Brand-confirmed value unless Product defines a specific exception.

### 4.3 Tone of voice

Do not reduce Tone of Voice to one dropdown.

Preferred structure:

```text
bounded selectable traits, e.g. up to ~4
+
optional short free-text guidance
```

Example read state:

```text
Warm · Expert · Reassuring

Clear and empathetic, with clinical authority without sounding intimidating.
```

This keeps the field structured enough for Intelligence while preserving Brand nuance.

### 4.4 Audience Personas

Audience remains Brand-level, not repeated per Offering.

Current direction: approximately **2–3 meaningful personas**, not an unlimited persona library.

Likely persona content:

```text
persona label
short description
motivations
barriers
trust / influence requirements
```

Avoid turning personas into a CRM segmentation builder or detailed psychographic questionnaire in MVP.

### 4.5 Business Locations

Locations are reusable Brand entities for Healthcare / Offline Services and other location-dependent businesses.

Indicative fields:

```text
location name
full address
city
state / region
country
phone
location page if available
booking / registration / appointment path if applicable
Offerings/services available at that location
active / inactive status
```

Location-specific URLs are desirable, not mandatory. If a specific URL is not available, the Brand's valid homepage / primary destination may be used.

---

## 5. Offerings workspace — provisionally reconciled direction

Current provisional authority:

`intelligence/product_authority/brand_centre_offerings_v0_provisional_authority.md`

Latest reconciliation commit before this handoff:

`0907986e5fe25b895c6c73aa586acafbed01f99b`

### 5.1 Canonical meaning

**Offering** = something the Brand sells, provides or wants customers to engage with.

Offerings belong in Brand Centre.

**Campaign Asset** = campaign-time representation of what the creator is expected to talk about.

Campaign Assets belong to Campaigns and should not be used interchangeably with Offerings in Brand Centre.

Creator gifting/provisioning is separate again and may become V2.

### 5.2 Offering detail purpose

Offering detail exists primarily to feed high-quality creator communication and Campaign Asset creation, not to become a generic product-catalogue dump.

Do **not** require an Audience model for every Offering.

Offering content should capture the applicable subset of:

```text
identity / type
description
images/media where relevant
commercial/service facts
key factual features/attributes
grounded differentiators
customer-facing URL/destination
location applicability where relevant
status
creator communication ingredients
```

Creator communication ingredients are reusable, grounded source material such as:

```text
key factual talking points
important product/service facts
things a creator can credibly demonstrate / explain
claim constraints / facts that must not be overstated
```

The Campaign Brief remains responsible for campaign-specific objective, audience, creative direction, deliverables, CTA and Do/Don't guidance.

### 5.3 Manual Add Offering

Manual addition remains accepted because non-D2C businesses may have valid Offerings that AI cannot infer exactly as intended.

Manual creation begins with an industry-aware Offering type.

Indicative types:

```text
D2C: Product, Collection, Offer / Discount
AI/SaaS: Product, Plan, Feature / Capability, Offer
Healthcare: Treatment / Service, Package / Program, Offer
Offline: Service, Experience, Package, Offer
```

Pre-launch Offering workflows are deferred to V2.

Manual and AI-discovered Offerings converge into the same canonical model and validation rules, but **not every possible field is mandatory**. Required fields must be determined by Offering type and safe MVP execution needs.

### 5.4 URL rules

A valid Brand website is already a platform-level admission requirement, so the MVP does not target no-website businesses.

Current URL direction:

- D2C Product/Collection: dedicated customer-facing product/collection URL is normally required.
- AI/SaaS / Healthcare / Offline: duplicate URLs are allowed; the same homepage/broad page may validly support multiple Offerings.
- Healthcare/Offline: location-specific URLs are desirable but not mandatory; fallback may be Brand homepage / best valid Brand destination.

Do not use URL equality as the universal Offering identity key outside D2C.

### 5.5 Offering lifecycle

Avoid a complex Promotion Readiness framework in MVP.

Use a strict simple lifecycle:

```text
DRAFT / INCOMPLETE
ACTIVE
PAUSED / INACTIVE
```

Only ACTIVE Offerings can be selected/recommended for new Campaigns.

An incomplete manual Offering cannot be launched.

AI should not create an ACTIVE Offering unless it meets the required evidence/validation floor.

### 5.6 Brand overrides and refresh authority

Brand-confirmed non-price fields must not be silently overwritten by future AI/website refreshes.

Current exception agreed in Product discussion:

**Price may auto-refresh from reliable current first-party evidence.**

If the Brand previously manually overrode price, the UI should make any price change visible/controllable rather than silently undermining Brand authority.

Exact field-authority implementation belongs to later IE/backend design; Product intent is that explicit Brand correction establishes durable authority.

### 5.7 Offering changes after Campaign / Collaboration starts

Avoid complex per-field synchronization logic in MVP.

Current simplified Product rule:

- current Offering truth may continue to refresh;
- price should stay current;
- most other manual Offering changes should be discouraged once the Offering is actively used in a Collaboration;
- the Brand is responsible for maintaining destination/URL sanctity once creator execution has started;
- if the destination/content becomes materially inconsistent, creator may dispute;
- creator should perform a final material check before going live and stop/raise an issue if the product/service has changed significantly.

Do not silently mutate creator instructions in an active Collaboration based on arbitrary Brand Centre edits.

Pause/inactivate prevents new Campaign use but preserves history. Hard delete should only occur when historical dependencies do not require identity preservation.

---

## 6. Market workspace — V0 understanding sufficient; V1 intentionally deferred

The Market workspace has enough Product direction to continue the Brand Centre program, but **Market V1 must not be frozen yet**.

Current intended Market themes include:

```text
competitive context
competitor activity
product/Offering emphasis
creator/archetype activity where evidence supports it
content themes
observed public performance where defensible
Share of Voice where denominator coverage is defensible
industry-aware comparisons
Creator Shop interpretation
```

Important Product decisions:

- Market reality should not be distorted by Brand lifecycle stage or budget.
- Lifecycle stage + budget belong in later Planning / Campaign Recommendation logic and determine what is worth doing about the market, not what the market data says.
- Competitor roles may include direct competitors plus a category/industry benchmark leader, but the Brand should not automatically be told to match the leader's SOV.
- Market should remain strategic, not a raw analytics dashboard.

### 6.1 Data-access uncertainty — explicit STOP for Market V1

Product concluded that Instagram/Meta data access is the principal unresolved constraint.

Do **not** freeze Business Discovery / Graph API / Meta Ads capabilities based on assumptions from this discussion.

The Product owner will obtain/review more reliable Meta API capability information and Market V1 will be revisited afterwards.

### 6.2 Provider policy

Do **not** proceed with influencer-platform APIs such as:

```text
Modash
HypeAuditor
similar influencer-database providers
```

These are outside the intended Market acquisition strategy at this stage.

Parallel-style public-web research may still be considered later as bounded public-web enrichment/fallback, but must not be treated as a compliance bypass around Meta restrictions.

Brand24/social-listening research was useful conceptually, but no social-listening provider dependency is frozen.

### 6.3 Base resilience principle

Even if richer Instagram/Meta competitor evidence is unavailable, Creator Shop should still produce useful Brand-specific Intelligence from:

```text
Brand website
Brand Instagram where connected/authorized
competitor websites
competitor Offerings
competitor website UGC/testimonials/content
public-web evidence where permitted
```

Richer creator/SOV/competitor-social sections should be evidence-dependent rather than fabricated.

---

## 7. Performance / Analytics boundary

Current product direction:

```text
Analytics / Performance
= what happened; raw/underlying metrics and reporting

Brand Centre
= what Creator Shop understands those signals to mean

Home
= what needs attention / what the Brand should do now
```

Brand Centre should not become another raw dashboard.

Brand's own Instagram performance may become a substantial first-party Intelligence input after Meta connection, including content, format, theme and performance learning. The depth and exact placement should be revisited with the verified Meta capability set.

Creator-generated UGC must be treated as more than influencer distribution. Creator output can be used for:

```text
creator-owned publishing
Brand-owned UGC/content
Product-page creative
Meta paid creative
```

This matters later for Campaign Recommendations and Performance Intelligence.

---

## 8. Planning / budget philosophy — deferred but important dependency

Detailed budget-flywheel design is intentionally parked.

Product philosophy already accepted:

> Creator Shop is replacing a meaningful portion of an influencer-marketing agency.

Therefore campaign activation should eventually begin from a **monthly / quarterly creator-marketing plan**, not isolated one-off Campaign recommendations with unrelated budgets.

Future structure should roughly be:

```text
Brand business context
        ↓
monthly / quarterly marketing plan
        ↓
budget envelope
        ↓
strategic priorities
        ↓
opportunity set
        ↓
portfolio prioritization
        ↓
recommended Campaigns
        ↓
low-risk Brand approvals / adjustments
        ↓
execution
```

Existing backend flywheel logic around campaign objective, creator size and product setup must be inspected before defining this model so useful existing logic is reused rather than recreated.

---

## 9. Next Product work

Proceed next to:

```text
1. Observations
2. Campaign Recommendations
```

The goal is to define what Creator Shop should tell the Brand, what it should notice, what it should recommend, and what actions it should offer.

Do **not** yet design the underlying Intelligence Engines in isolation.

Continue working backwards:

```text
Desired user-facing output
        ↓
required facts / observations
        ↓
required Intelligence Objects / derived signals
        ↓
required Evidence
        ↓
IE processor / execution design
        ↓
DE acquisition capabilities
```

This is the core output-first architecture principle for the next phase.

---

## 10. Assimilation plan — how Brand Centre work feeds onboarding + Intelligence architecture

The current Brand Centre design is intentionally a transient Product hypothesis. Once Brand, Offerings, Market, Observations and Campaign Recommendations are sufficiently coherent, Systems Architect should coordinate a formal assimilation pass.

That pass should produce a coherent chain:

```text
Brand Centre target experience
        ↓
canonical consumer/output contracts
        ↓
what must already be known at onboarding
vs
what may mature progressively after onboarding
        ↓
Brand onboarding continuation
Verify / claim
→ Meta connection decision
→ limited-intelligence path
→ Chat-first Home
→ Brand Centre progressive maturation
        ↓
Intelligence requirement map
        ↓
Brand / Product / Competitor / Commercial /
Instagram / Campaign / Performance Intelligence design
```

### 10.1 Onboarding assimilation questions

The later consolidation pass must explicitly determine:

```text
Which Brand Centre fields originate from Gatekeeper / Brand Preview?
Which are populated asynchronously after verification?
Which require Meta connection?
Which may be missing without blocking Home access?
Which are Brand-editable later but should not be onboarding questions?
Which confirmed identity fields remain support-controlled?
What limited-Intelligence experience is shown when Meta is skipped?
```

The answer should preserve the already-frozen onboarding principle:

> Do not turn Brand Centre correction into a mandatory onboarding review sequence.

Brand Centre should mature progressively after verification rather than reintroducing Core Identity / Brand DNA / Catalogue / Competitor review into onboarding.

### 10.2 Intelligence assimilation questions

For each Brand Centre surface/output, derive:

```text
canonical facts
Brand-confirmed fields
AI-derived fields
refreshable observed fields
support-controlled identity fields
provenance/authority requirement
readiness/GO-NO-GO rules
downstream Campaign dependency
```

Then map those to existing Master Intelligence domains without creating duplicate engines merely because the UI has a workspace.

Expected likely consumers/sources:

```text
Brand workspace       → Brand Intelligence
Offerings             → Product Intelligence + Brand truth
Market                → Competitor Intelligence + Instagram/public evidence
Observations          → cross-domain synthesis
Campaign Recommendations → Campaign Intelligence / planning layer
Analytics             → Performance Intelligence
```

Do not assume these names imply one processor or one database table each.

---

## 11. Systems Architect immediate responsibilities

The Systems Architect should now:

1. preserve the decisions in this handoff as current Product continuity;
2. treat Offerings as provisionally reconciled, subject only to genuine conflicts found downstream;
3. treat Brand as directionally defined but not yet final visual/frontend authority;
4. keep Market V1 open pending reliable Meta API capability evidence from Product;
5. do not introduce Modash/HypeAuditor/similar influencer-platform API dependencies;
6. ensure Observations and Campaign Recommendations are designed output-first before IE domain architecture is expanded;
7. when those surfaces stabilize, coordinate the assimilation pass into onboarding continuation + Brand Centre + Intelligence requirement map;
8. keep detailed Budget/Flywheel planning deferred until Campaign Recommendations require it, then audit existing backend logic before creating new authority.

---

## 12. Current program checkpoint

```text
Brand Preview                      COMPLETE
Developer production handoff       COMPLETE
Brand Centre V0/V1 direction       IN PROGRESS
Offerings workspace                PROVISIONALLY RECONCILED
Brand workspace                    DIRECTIONALLY DEFINED
Market workspace                   V0 UNDERSTANDING SUFFICIENT
Market V1 / Meta acquisition       DEFERRED PENDING VERIFIED API INFO
Observations                       NEXT
Campaign Recommendations           NEXT AFTER / WITH OBSERVATIONS
Budget Flywheel                     DEFERRED
Deep Intelligence domain design     AFTER consumer/output picture is clearer
```

This is the current Systems Architect continuation point.
