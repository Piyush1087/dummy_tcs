# Brand Centre — Offerings Provisional Product Authority

**Status:** PROVISIONALLY RECONCILED — READY TO INFORM BRAND WORKSPACE DESIGN  
**Date:** 2026-08-24  
**Scope:** Brand Centre Offerings workspace and Offering → Campaign Asset boundary  
**Purpose:** Freeze a strict, scalable MVP operating model before Brand / Market / Campaign Recommendation design and before Product Intelligence contracts are frozen.

---

## 1. Core product philosophy

Creator Shop should optimize for **reliable delegation**, not maximum configurability.

The platform is intended to replace a meaningful portion of the work normally performed by an influencer-marketing agency. The desired interaction model is:

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

MVP should prefer a small number of strict, scalable rules over many use-case-specific exceptions.

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

Campaign Asset terminology must not be used interchangeably with Offering inside Brand Centre.

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

- physical sample / review unit;
- gift box;
- 100% checkout code;
- trial account;
- SaaS credits;
- consultation / experience access.

Dedicated gifting / provisioning is deferred to V2.

---

## 3. Brand Centre Offerings UX

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

This rule is especially important for mobile and should be reused across Brand Centre where practical.

V2 may explore `Regenerate`, `Share feedback`, or richer provenance controls.

---

## 4. No mandatory Offering-level audience model

Do not require an Audience definition for every Offering.

Audience belongs to the broader **Brand** model and later Campaign targeting logic.

Campaign targeting should later resolve from:

```text
Brand Audience
+ Campaign objective
+ Offering
+ Market context
→ Campaign target audience
```

Offering-specific fit signals may exist internally, but are not mandatory user-facing Offering fields in MVP.

---

## 5. Offering detail exists to feed creator communication

Offering detail should not become a generic ecommerce catalogue or Product Intelligence dump.

Its purpose is to hold the grounded business truth that can later flow into a Campaign Asset and Brief.

### Common Offering content

An Offering may contain the applicable subset of:

```text
name
kind / subtype
description
images / media where relevant
price / commercial facts where relevant
key factual features / attributes
grounded differentiators
customer-facing URL / destination
location applicability where relevant
status
creator communication ingredients
```

Not every field must be mandatory for every Offering type.

### Creator communication ingredients

These are reusable grounded inputs, not a finished Brief:

```text
key factual talking-point ingredients
important product / service facts
things a creator can credibly demonstrate / explain
claim constraints / facts that must not be overstated
```

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

## 6. AI-discovered and manually added Offerings converge into one canonical object

Creator Shop supports two creation paths:

```text
AI-discovered Offering
Manual Add Offering
```

They must converge into the **same canonical Offering model**, but this does **not** mean every possible field is mandatory.

Validation should require only the minimum applicable truth necessary for that Offering type to be ACTIVE and usable in Campaign planning.

The important distinction is **field authority / provenance**, not "AI vs manual".

Conceptually:

```text
WEBSITE_OBSERVED
BRAND_CONFIRMED
CREATOR_SHOP_DERIVED
```

Exact technical vocabulary may be refined later.

---

## 7. Manual Add Offering is accepted for MVP

Manual addition remains in MVP because non-D2C businesses may have legitimate Offerings that Creator Shop cannot infer or structure exactly as the Brand intends.

Examples include:

- SaaS products / plans / capabilities represented only on broad pages or the homepage;
- healthcare treatment structures that are not expressed as neat landing pages;
- offline services or packages not represented as discrete product pages.

**Pre-launch Offering support is deferred to V2.**

MVP should not create exception workflows for products/services that are not yet available to customers.

---

## 8. Manual Add starts with Offering type

Manual Add Offering begins with an industry-aware type selection.

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

`Offer` remains separate from Product / Plan / Feature because it has independent validity, applicability and terms.

### Healthcare

```text
Treatment / Service
Package / Program
Offer
```

Locations are managed alongside Offerings but remain separate business entities.

### Offline Services

```text
Service
Experience
Package
Offer
```

Locations are managed alongside Offerings but remain separate business entities.

---

## 9. URL rule — mandatory customer-facing web presence in MVP

Creator Shop Brand onboarding itself requires a valid Brand website. MVP therefore targets Brands with an established web presence.

For an ACTIVE Offering, Creator Shop should require a valid customer-facing URL or resolvable Brand website destination.

This is a strict MVP bet:

> If the Brand has no meaningful web presence for customers at all, it is outside the intended MVP target profile.

However, a dedicated URL per Offering is **not** always required.

### D2C

For Product / Collection, a dedicated product or collection URL is normally required because the Offering is directly transactional and the page is a strong identity / truth source.

### AI / SaaS / Healthcare / Offline Services

The same homepage or broad service page may legitimately support multiple Offerings.

Therefore:

```text
same URL
≠ duplicate Offering
```

URL duplication is allowed across all non-D2C industries.

For Healthcare / Offline multi-location businesses, location-specific URLs are **desirable, not mandatory**. When a location-specific destination is unavailable, fall back to the Brand homepage or best valid Brand-level customer destination.

---

## 10. Duplicate resolution

Do not use URL equality as the universal identity key.

### D2C

A normalized dedicated PDP / collection URL is a strong deduplication signal.

If a manually supplied D2C URL matches an existing AI-discovered Offering, direct the user to review/update the existing Offering rather than create a duplicate.

### Non-D2C

Duplicate resolution should use a combination of:

```text
Offering type
name / identity
website evidence
canonical parent / child relationships
URL only as supporting evidence
```

Do not block creation solely because another Offering uses the same URL.

---

## 11. Manual field requirements — applicable minimum, not universal completeness

Manual and AI-created Offerings should share the same **canonical field structure**, but only the applicable minimum fields are mandatory.

### D2C Product — MVP minimum

Normally require:

```text
name
description
at least one product image
price
currency
product/customer URL
key factual features
ACTIVE availability
```

### D2C Collection — MVP minimum

Normally require:

```text
name
description
at least one image
collection/customer URL
included product relationship or collection identity
ACTIVE availability
```

### D2C Offer / Discount — MVP minimum

Normally require:

```text
name
description
applicable Product(s)/Collection(s)
validity period
terms
customer destination
```

### AI / SaaS

Require enough information to identify and explain the Product / Plan / Feature / Offer plus a valid customer-facing Brand URL. A dedicated per-Offering URL is optional.

### Healthcare / Offline

Require enough information to identify and explain the Treatment / Service / Experience / Package / Offer plus a valid customer-facing Brand URL. Location-specific pages are optional.

If the minimum required truth for the selected type cannot be established, the Offering remains non-active and cannot enter a new Campaign.

---

## 12. Customer destinations and Locations

The MVP should not create a complex destination-routing system.

Use the simplest reliable rule:

```text
Offering-specific URL when available
→ otherwise valid Brand / homepage URL
```

For Healthcare / Offline, Location is a separate reusable entity.

Capture at minimum where available / applicable:

```text
location name
full address
city
state / region
country
contact phone
location page URL (optional)
appointment / registration / booking URL (optional)
Offerings available at location
active / inactive status
```

Address should be captured because physical accessibility is often the actual customer conversion path.

Phone / booking / registration details are valuable for Healthcare / Offline conversion and should be captured where available, but location-specific URLs are not required to make a Location valid.

Fallback customer URL remains the Brand homepage / best valid Brand destination.

---

## 13. Strict Offering lifecycle for MVP

Avoid a large family of promotion-readiness states.

Provisional lifecycle:

```text
DRAFT / INCOMPLETE
ACTIVE
PAUSED / INACTIVE
```

### GO

Only `ACTIVE` Offerings may be selected for new Campaigns.

### NO-GO

An Offering missing the minimum applicable business truth for its type cannot become ACTIVE and therefore cannot enter a new Campaign.

No separate `Promotion Readiness` score or warning framework is required in MVP.

---

## 14. Brand override protection — hard rule

Brand-confirmed/overridden values must **never be silently overwritten by future AI/website refreshes**, except for the explicit price-refresh rule below.

General field rule:

```text
WEBSITE_OBSERVED
→ refresh may update

CREATOR_SHOP_DERIVED
→ Intelligence refresh may update

BRAND_CONFIRMED
→ preserve until Brand changes it
```

Brand-confirmed values should be persisted as field-level authority so refresh logic can distinguish observed from explicitly overridden truth.

When current first-party evidence conflicts with a Brand-confirmed non-price field, preserve the Brand value unless the Brand explicitly changes it.

This rule should become reusable across Brand Centre.

---

## 15. Price is a controlled exception

Price is time-sensitive consumer truth and should not remain stale merely because the Brand previously confirmed or overrode it.

For Offerings where a public price exists:

```text
website / authoritative first-party price refresh
→ may automatically update current Offering price
```

If the Brand is manually editing an Offering, current price should remain editable and the Brand may explicitly change it.

Price history / prior Brand confirmation may be retained internally, but current public price should track the latest reliable first-party value.

Do not extend this automatic-refresh exception to arbitrary fields.

---

## 16. Campaign Asset freshness — strict but minimal MVP rule

Campaign Asset should retain traceability to the source Offering, but MVP should avoid a complex synchronization/reconciliation engine.

### Before creator work begins

Campaign creation should use the current ACTIVE Offering truth.

### Once creator Collaboration begins

The Brand is responsible for maintaining URL sanctity and keeping the underlying Offering materially consistent with what creators have been instructed to communicate.

Creator Shop should **not silently auto-rewrite most creator instructions** during an active Collaboration.

### Price

Price is the exception:

- current public price may auto-refresh;
- creator-facing campaign material that surfaces price should use the current price where technically possible;
- if a Brand manually changes price, the updated price should become current campaign truth.

### Other material changes

Changes to product/service identity, core specification, offer terms, or customer destination after Collaboration has started should be discouraged.

If the Brand changes or breaks the underlying Offering/URL such that creator instructions materially diverge from current reality, this can form a basis for creator dispute / operational review.

The platform should not build a large family of special-case synchronization workflows for MVP.

### Creator final check

Before going live, the creator should perform a simple final verification that the Offering / destination has not materially changed from the approved Brief.

If it has changed significantly, publishing should not proceed until resolved through the existing Campaign / Collaboration review path.

This is the MVP control point for non-price Offering drift.

---

## 17. Edit / Pause / Remove rules

### Edit

Brand may edit an Offering from Offering detail.

When an Offering is already used in a live Campaign / Collaboration:

- price may change under the price rule above;
- other material edits should be discouraged;
- save flow should warn that active creator work exists;
- Brand remains responsible for ensuring the linked customer URL remains materially consistent;
- significant mismatch discovered before creator publish must be resolved before go-live.

Do not build per-field campaign synchronization choices in MVP.

### Pause / Inactivate

Pausing an Offering:

- removes it from new Campaign selection / recommendation;
- preserves historical Campaign records;
- does not automatically terminate an existing Collaboration.

If the Offering is actively being promoted, the UI should clearly warn before allowing pause.

### Remove

Hard delete is allowed only when there is no Campaign / Collaboration history that requires preservation.

If the Offering has history, deactivate/archive instead of deleting its identity.

---

## 18. V2 deferrals

Explicitly defer:

```text
pre-launch Offering workflows
full gifting / provisioning system
unique 100% creator checkout codes
creator self-order fulfilment
inventory automation
live Offering regeneration controls
rich user feedback on AI extraction
promotion-readiness scoring
complex per-industry exception matrices
fine-grained campaign synchronization choices for every Offering field
```

---

## 19. Consequences for future Product / Offering Intelligence

Product / Offering Intelligence should be designed to answer only questions needed by Brand Centre and Campaign planning:

```text
What is the Offering?
What customer-facing facts are trustworthy?
What can be credibly communicated by creators?
What claims require constraint?
What current price / commercial fact applies?
Where/how can a customer act on interest?
Where is the Offering available?
How does it relate to Product / Plan / Feature / Collection / Offer / Location structure?
What changed since the last validated state?
```

It should not be optimized merely to extract the largest possible catalogue schema.

---

## 20. Reconciled MVP summary

Accepted provisional direction:

```text
Brand Centre uses Offerings, not Campaign Assets
Workspace list is clean; manage on Offering detail
No mandatory Audience per Offering
AI + manual creation converge on one canonical model
Not every canonical field is mandatory
Manual Add remains available
Pre-launch deferred to V2
Offering type selected first
Brand website / customer-facing URL is mandatory at platform level
D2C normally requires dedicated Product / Collection URL
Non-D2C may reuse the same URL across multiple Offerings
Healthcare / Offline location-specific URLs are optional
Homepage / best Brand URL is fallback
Locations are reusable entities with address/contact data
No Promotion Readiness layer in MVP
Only ACTIVE Offerings may enter new Campaigns
Brand-confirmed non-price fields are not auto-overwritten
Price may auto-refresh from reliable first-party truth
Other active-Collaboration changes are discouraged, not auto-synchronized
Creator performs final material Offering check before go-live
Pause blocks new use but does not erase history
Hard delete only when no historical dependency exists
```

This document is the reconciled provisional Product Authority for Offerings and should now be treated as the starting point for Brand workspace design. Revisit only if Brand / Market / Campaign Recommendation design exposes a genuine conflict or missing requirement.
