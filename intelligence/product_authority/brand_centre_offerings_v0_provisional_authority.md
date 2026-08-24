# Brand Centre — Offerings V0 Provisional Product Authority

**Status:** PROVISIONAL — PRODUCT DIRECTION ACCEPTED FOR CONTINUED DESIGN  
**Date:** 2026-08-24  
**Scope:** Brand Centre Offerings workspace and Offering → Campaign Asset boundary  
**Purpose:** Establish a stricter MVP operating model before Audience / Brand workspace design and before Product Intelligence contracts are frozen.

---

## 1. Core product philosophy

Creator Shop should optimize for **reliable delegation**, not maximum configurability.

The platform is intended to replace a meaningful portion of the work normally performed by an influencer-marketing agency. The desired interaction model is therefore:

```text
Creator Shop understands the Brand
        ↓
Creator Shop builds and maintains the operating picture
        ↓
Creator Shop recommends the few consequential decisions
        ↓
Brand approves / corrects / overrides when required
        ↓
Creator Shop executes
```

MVP should prefer strict, scalable rules over many use-case-specific exceptions.

Where a fact or configuration is necessary for safe campaign execution, the system should use a clear **GO / NO-GO** rule rather than proliferating warning states and bespoke exception handling.

---

## 2. Canonical terminology

### Offering

An **Offering** is something the Brand sells, provides, or wants customers to engage with.

Offerings belong in **Brand Centre**.

Examples:

- D2C: Product, Collection, Offer / Discount
- AI / SaaS: Product, Plan, material Feature / Capability, Offer
- Healthcare: Treatment / Service, Package / Program, Offer
- Offline Services: Service, Experience, Package, Offer

### Campaign Asset

A **Campaign Asset** is the campaign-time representation of **what the creator is expected to talk about**.

Campaign Asset terminology should not be used interchangeably with Offering inside Brand Centre.

Canonical Campaign Asset kinds remain:

```text
BRAND
OFFERING
OFFER
```

Campaign Assets belong to Campaigns, not Brand Centre.

### Creator Support / Gifting / Provisioning

What a creator receives from the Brand is a separate concern and is **not** a Campaign Asset.

Examples:

- physical product sample;
- gift box;
- review unit;
- 100% checkout code;
- trial account;
- SaaS credits;
- consultation / experience access.

This may become a dedicated gifting/provisioning system in V2.

---

## 3. Brand Centre Offerings UX rule

Brand Centre workspaces are primarily **browse / understand / navigate** surfaces.

Do not place edit/delete/regenerate controls on every Offering row/card.

Canonical pattern:

```text
Offerings workspace
→ clean list / grouping
→ click Offering
→ Offering detail
→ edit / pause / remove actions live on detail
```

This rule is especially important for mobile and should be applied consistently across future Brand Centre workspaces where practical.

V2 may explore `Regenerate`, `Share feedback`, or richer provenance/source controls.

---

## 4. No mandatory Offering-level audience model

Do not require an Audience definition for every Offering.

Audience remains primarily Brand / Audience Intelligence authority.

Campaign targeting should later resolve from:

```text
Brand Audience
+ Campaign objective
+ Offering
+ Market context
→ Campaign target audience
```

Offering-specific affinity/fit signals may exist internally, but they are not a mandatory Offering-detail surface or canonical user-edit requirement in MVP.

---

## 5. Offering content exists to support creator communication

Offering detail should not become a generic ecommerce catalogue or Product Intelligence dump.

The Offering must contain the grounded business truth necessary to become a high-quality Campaign Asset and to help build a creator Brief.

### Common Offering communication payload

At minimum, an active Offering should provide the applicable subset of:

```text
name
kind / subtype
description
images / media where relevant
commercial / service facts required for public communication
key factual features / attributes
key differentiators that are grounded
customer-facing destination(s)
location applicability where relevant
status
creator communication ingredients
```

### Creator communication ingredients

These are reusable, grounded inputs rather than a finished Campaign Brief.

Examples:

```text
key factual talking-point ingredients
important product/service facts
things a creator can credibly demonstrate / explain
claim constraints / facts that must not be overstated
```

Offering content should add value over basic catalogue data by making it usable for creator communication.

The Campaign Brief remains responsible for campaign-specific:

```text
objective
audience
creative direction
deliverables
mandatory talking points
CTA
platform constraints
Do / Don't guidance
```

---

## 6. MVP source model: AI-discovered and manually added Offerings converge

Creator Shop should support two creation paths:

```text
AI-discovered Offering
Manual Add Offering
```

Both must converge into the **same canonical Offering field requirements and validation rules**.

Do not allow a low-quality manual Offering schema such as only `name + description` if an AI-discovered Offering requires materially richer fields.

### Source authority

The important distinction is not "AI vs manual". It is **field authority / provenance**.

Conceptually:

```text
WEBSITE_OBSERVED
BRAND_CONFIRMED
CREATOR_SHOP_DERIVED
```

Exact technical vocabulary may be refined later.

Brand-confirmed values have higher overwrite protection than observed/derived values.

---

## 7. Manual Add Offering is provisionally accepted

Manual addition remains in MVP because non-D2C businesses may have legitimate Offerings that Creator Shop cannot infer exactly as the Brand intends.

Examples include:

- enterprise SaaS capabilities represented only loosely on public pages;
- clinic/service structures that are not expressed as neat product pages;
- offline packages / experiences;
- Offerings described on a homepage rather than a dedicated URL.

Manual addition is allowed only through the same canonical validation requirements as AI-discovered Offerings.

**Pre-launch Offering support is deferred to V2.**

MVP should not add exception workflows specifically for products/services that are not yet available to customers.

---

## 8. Offering type must be selected first for manual creation

Manual Add Offering begins with an industry-aware Offering type.

### D2C

```text
Product
Collection
Offer / Discount
```

### AI / SaaS

```text
Product
Plan
Feature / Capability
Offer
```

`Offer` is separate from Product/Plan/Feature because it has independent validity, applicability and terms.

### Healthcare

```text
Treatment / Service
Package / Program
Offer
```

Locations are managed in the same Offerings workspace but are not themselves Offerings.

### Offline Services

```text
Service
Experience
Package
Offer
```

Locations are managed alongside Offerings but remain separate business entities.

---

## 9. Manual field requirements — strict MVP validation

Manual Add must satisfy the same minimum business-truth contract expected from AI-discovered Offerings before the Offering can become ACTIVE.

The exact field matrix will be frozen later, but the provisional minimums are:

### D2C Product

Required:

```text
name
description
at least one product image
price
currency
product/customer URL
key factual features
availability = active
```

### D2C Collection

Required:

```text
name
description
at least one image
collection/customer URL
included products or a valid collection relationship
availability = active
```

### D2C Offer / Discount

Required:

```text
name
description
applicable Product(s)/Collection(s)
validity period
terms
customer destination
```

### AI / SaaS

Require the equivalent public/customer-operational truth for the selected type, including an appropriate customer information / signup / trial / demo destination where the business offers one.

A SaaS homepage may legitimately serve as the destination for one or more Offerings. Dedicated per-Offering URLs are not mandatory when the homepage is genuinely the customer-facing source for those Offerings.

### Healthcare / Offline

Require the Offering/service facts and at least one valid customer conversion/contact path through the relevant location or Brand-level destination.

Invalid/incomplete manual Offerings remain non-active and cannot be launched into a Campaign.

---

## 10. URL handling and duplicate resolution

Do not use URL equality as the universal identity key for Offerings.

### D2C

A dedicated PDP/collection URL is a strong identity/deduplication signal.

If a manually supplied URL matches an existing AI-discovered Offering, direct the user to review/update the existing Offering instead of creating a duplicate.

### AI / SaaS / Services

The same homepage or broad service page may legitimately support several Offerings.

Therefore duplicate resolution should use a combination of:

```text
normalized URL
Offering type
name / identity
website evidence
existing canonical relationships
```

Do not block creation solely because the URL already belongs to another Offering.

The user should be prevented from creating a duplicate when Creator Shop can establish that the same Offering already exists.

---

## 11. Customer destinations are industry-adaptive

Do not force all industries into one `product_url` mental model.

### D2C

Primary customer action is generally purchase / product discovery.

### AI / SaaS

Possible destinations include:

```text
information page
signup
trial
book demo
contact sales
```

### Healthcare

Possible destinations include:

```text
treatment information
location-specific treatment page
book consultation
patient registration
phone
WhatsApp / approved contact path
```

### Offline Services

Possible destinations include:

```text
service information
booking
reservation
phone
WhatsApp / contact
location page
```

The future technical model may support multiple typed destinations, including location-specific destinations. MVP UX should remain simple and ask only for the relevant customer-facing paths.

---

## 12. Healthcare / Offline Location model

Location is a separate reusable entity, not a Campaign Asset and not necessarily an Offering.

For Healthcare / Offline Services, capture at minimum:

```text
location name
full address
city
state / region
country
contact phone
primary location page if available
appointment / registration / booking destination if applicable
services / Offerings available at location
active / inactive status
```

Optional contact channels such as WhatsApp may be supported where relevant.

This supports both local brands and multi-location brands without creating a different Offering for every city.

Example:

```text
Offering: IVF
Locations: Kolkata, Delhi, Mumbai, ...
```

Campaign-time targeting can then combine:

```text
Campaign Asset = IVF
Campaign geography = Kolkata
Applicable location(s) = Kolkata clinics
Customer destination = best valid Kolkata conversion path
```

For a Brand-level Campaign:

```text
Campaign Asset = BRAND
Campaign geography = national / regional / city
```

---

## 13. Strict Offering lifecycle for MVP

Avoid a large family of promotion-readiness states in MVP.

Provisional Offering lifecycle:

```text
DRAFT / INCOMPLETE
ACTIVE
PAUSED / INACTIVE
```

### GO rule

Only `ACTIVE` Offerings may be selected for new Campaigns.

### NO-GO rule

An Offering missing required canonical business truth cannot become ACTIVE and therefore cannot be launched into a new Campaign.

AI-discovered Offerings should only become active when the required evidence/validation floor is satisfied.

Manual Offerings must satisfy the same required floor before activation.

No separate `Promotion Readiness` UI is required in MVP.

Campaign-specific activation checks may still exist later, but they should be narrowly scoped and not turn Brand Centre into a warning dashboard.

---

## 14. Brand override protection — hard rule

Brand-confirmed/overridden values must **never be silently overwritten by future AI/website refreshes**.

Provisional field refresh rule:

```text
WEBSITE_OBSERVED
→ refresh may update when stronger/current first-party evidence is found

CREATOR_SHOP_DERIVED
→ Intelligence refresh may update

BRAND_CONFIRMED
→ never auto-overwrite
```

When current website evidence conflicts with a Brand-confirmed value, Creator Shop may surface the conflict for explicit Brand resolution, but must preserve the confirmed value until the Brand accepts the change.

This rule should become reusable across Brand Centre, not Offering-specific.

---

## 15. Campaign Asset freshness — no stale snapshot assumption

A Campaign Asset must retain traceability to the source Offering, but an immutable snapshot alone is not sufficient because customer-facing facts may change while creator communication is still active.

The MVP should use a stricter rule:

> **Before Campaign launch / creator-facing activation, current Offering truth must be revalidated against the Campaign Asset's material communication facts.**

Material facts include the applicable subset of:

```text
price / commercial proposition
offer validity
availability
customer destination
location applicability
key factual claims used in creator communication
```

If a material Offering fact changed after the Campaign Asset was prepared:

```text
NO-GO for new creator-facing activation
until Campaign Asset / Brief is reconciled
```

Do not silently launch stale creator communication.

After a Collaboration is already active, a material source change should not silently rewrite creator instructions. The affected Campaign/Collaboration must be flagged for explicit reconciliation before further publishing/activation where the stale fact could reach consumers.

This keeps historical traceability while prioritizing current consumer truth.

The exact runtime reconciliation workflow belongs to later Campaign/Collaboration contract design; MVP principle is the hard stale-fact NO-GO, not a large configurable exception system.

---

## 16. Edit / Pause / Remove rules

### Edit

Brand may edit an Offering from Offering detail.

If the Offering is unused by active Campaign/Collaboration work, the edit can apply normally.

If a material field is already represented in an active Campaign Asset / Brief:

```text
Brand Centre truth may be updated
+
affected Campaign/Collaboration must be flagged
+
stale creator-facing execution must not proceed without reconciliation
```

Do not silently propagate the new value into creator instructions, and do not silently preserve stale creator instructions through future activation.

### Pause / Inactivate

Pausing an Offering:

- removes it from new Campaign selection/recommendation;
- does not erase historical Campaign records;
- does not automatically terminate an existing Collaboration;
- flags active usages for review if continued promotion would now be invalid.

### Remove

Hard delete is allowed only when there is no historical dependency that requires preservation.

If the Offering has Campaign/Collaboration history, deactivate/archive instead of deleting its historical identity.

---

## 17. V2 deferrals

Explicitly defer:

```text
pre-launch Offering workflows
full gifting / provisioning system
unique 100% creator checkout codes
creator self-order fulfilment
inventory automation
live Offering regeneration controls
rich user feedback on AI extraction
fine-grained promotion-readiness scoring
complex exception matrices per industry/use case
```

These should not complicate MVP Offerings architecture.

---

## 18. Consequences for future Product Intelligence

Product / Offering Intelligence should be designed to answer only questions needed by the product surfaces and campaign system, including:

```text
What is the Offering?
What customer-facing facts are trustworthy?
What can be credibly communicated by creators?
What claims require constraint?
Where/how can a customer act on interest?
Where is the Offering available?
How does it relate to Product / Plan / Feature / Collection / Offer / Location structure?
What changed since the last validated state?
```

It should not be optimized merely to extract the largest possible product catalogue schema.

---

## 19. Current provisional acceptance summary

Accepted direction for continued Brand Centre design:

```text
Brand Centre uses Offerings, not Campaign Assets
Workspace lists remain clean; edit/manage lives on detail
No mandatory Audience per Offering
AI + manual creation converge on same canonical validation
Manual creation remains available
Pre-launch deferred to V2
Offering type selected before manual form
D2C manual Product requires product URL in MVP
SaaS may reuse homepage across several Offerings
Locations are separate reusable entities
Healthcare/Offline capture address + conversion/contact paths
No Promotion Readiness layer in MVP
Only ACTIVE Offerings may enter new Campaigns
Brand-confirmed fields are never auto-overwritten
Campaign activation must revalidate material Offering facts
Stale creator-facing facts create a hard reconciliation NO-GO
Pause/deactivate preserves history and blocks new use
```

This document is provisional Product Authority for subsequent Brand Centre V0/V1 design. It should be revisited only when later Audience / Brand / Market / Campaign Recommendation design exposes a genuine conflict or missing requirement.
