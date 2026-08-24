# Brand Centre — Brand Workspace V0 Provisional Product Authority

**Status:** PROVISIONAL — PRODUCT DIRECTION ACCEPTED FOR CONTINUED DESIGN  
**Date:** 2026-08-24  
**Scope:** Brand Centre Brand workspace, including Brand Details, Visual Identity, Brand Identity, Audience Personas and Business Locations  
**Purpose:** Establish the Brand workspace consumer model before Market, Campaign Recommendation and deeper Intelligence contracts are frozen.

---

## 1. Brand Centre information architecture — current provisional shape

The Brand Centre should remain small at top level:

```text
Brand Centre
├── Overview
├── Brand
├── Offerings
└── Market
```

`Audience` is not a separate top-level workspace. Audience Personas belong inside `Brand` because they are part of Creator Shop's living understanding of who the Brand needs to influence.

`Campaign Assets` are not part of Brand Centre. They belong to Campaigns.

`Analytics / Performance` remains a separate application destination and should feed interpreted learning into Brand Centre rather than turning Brand Centre into a raw reporting dashboard.

---

## 2. Core UX principle

Brand workspace is primarily a **living read surface**, not a settings form.

Canonical interaction pattern:

```text
Brand workspace
→ read / understand / navigate
→ open section or object detail
→ edit / correct / manage there
```

Do not place edit icons against every row or every Intelligence block.

This is especially important on mobile.

The Brand should feel like a strategic profile maintained by Creator Shop with bounded Brand authority, not a CMS that requires continuous manual upkeep.

---

## 3. Brand workspace structure

Current provisional Brand structure:

```text
Brand
├── Details
├── Visual Identity
├── Brand Identity
├── Audience Personas
└── Business Locations        [only when applicable]
```

These sections may appear as stacked sections on one page or as compact secondary navigation depending on final UI composition. The product authority is the semantic grouping, not a specific tab implementation.

---

## 4. Brand Details

Purpose: represent the stable operational facts needed across Creator Shop.

### Core fields

Applicable subset:

```text
brand name
website
confirmed industry
sub-industry / category
primary country / geography
markets served
collaboration currency
Instagram handle / connected account status
other supported social handles when introduced
short business description
```

Do not turn Brand Details into organization administration.

The following remain outside Brand Centre or belong in Settings / organization management:

```text
team members
roles / permissions
billing / subscription
banking / payout setup
Meta token / connection administration
security settings
legal account administration
```

Brand Centre may show contextual connection status such as `Instagram connected` or `Connect Instagram`, but detailed connection management belongs elsewhere.

---

## 5. Visual Identity

Purpose: provide a reusable visual reference set for Campaign briefs, creator guidance, future creative generation and Brand-consistency checks.

### V0 visual identity content

```text
primary logo
secondary logo / mark               optional
color palette                       optional when not confidently available
heading font                        optional
body font                           optional
brand imagery / reference images    multi-image collection
```

### Image collection

The Brand should be able to maintain multiple visual references, not only one hero image.

Examples:

```text
product/lifestyle photography
brand campaign imagery
store / clinic / office imagery
packaging
approved graphic treatment
brand mood / aesthetic references
```

The workspace should display these as a clean visual collection. Upload / remove / manage actions belong inside Visual Identity detail rather than cluttering the Brand overview.

### Source authority

Website-observed visual identity may refresh when evidence is unambiguous.

Brand-uploaded or Brand-confirmed assets are authoritative and must never be silently replaced by AI refresh.

If a Brand changes its official logo/palette/font through explicit Brand edit, the new Brand-confirmed value becomes current authority.

---

## 6. Brand Identity

Purpose: capture how the Brand presents itself and the grounded strategic characteristics Creator Shop needs for creator communication.

### V0 content

Applicable subset:

```text
brand description
positioning / what the Brand stands for
value proposition
brand values
tone of voice
brand personality
key USPs / differentiators
reasons to believe / proof points
important communication constraints
```

Avoid exposing raw proprietary reasoning, confidence percentages or internal Intelligence traces.

### Brand Identity vs Campaign Brief

Brand Identity contains reusable Brand-level communication authority.

It should not contain campaign-specific:

```text
campaign objective
specific creator instructions
deliverable requirements
campaign CTA
campaign-specific mandatory talking points
campaign timing
```

Those belong to Campaign / Brief.

### Editability

The Brand may correct Brand Identity from detail/edit mode.

Brand-confirmed values gain overwrite protection and are not silently replaced by future AI synthesis.

Creator Shop may continue to derive richer internal Intelligence, but user-visible Brand-confirmed truth remains stable unless the Brand changes it.

---

## 7. Audience Personas belong inside Brand

The MVP should maintain a small set of audience personas rather than an unlimited persona library.

### Target density

```text
2–3 active Audience Personas
```

Do not require a separate Audience Persona for every Offering.

### Persona purpose

A Persona should answer only the questions needed for creator-marketing decisions:

```text
who this audience is
what matters to them
key motivations / desired outcomes
important barriers / concerns
what earns trust / credibility
what kind of influence or communication tends to matter
```

Avoid excessive demographic profiling when it does not materially improve creator strategy.

### Provisional Persona shape

```text
name / label
short description
key characteristics
motivations
barriers / concerns
trust / credibility needs
creator communication implications
```

Optional evidence-derived demographic or geography attributes may appear when strong enough, but they should not become mandatory filler.

### Persona editability

Creator Shop may create and refresh Personas from Brand / Instagram / Campaign / Performance Intelligence.

Brand may correct them from Persona detail.

Brand-confirmed fields are not silently overwritten by future AI refresh.

If new evidence materially conflicts with a Brand-confirmed Persona, Creator Shop may surface the conflict for Brand resolution rather than creating parallel duplicate Personas.

---

## 8. Business Locations

Locations are part of Brand only when operationally meaningful.

Examples:

```text
Healthcare clinics
restaurants
hotels
salons
stores / experience venues
other service locations
```

Pure online brands do not need an empty Locations section.

### V0 location fields

Applicable subset:

```text
location / branch name
full address
city
state / region
country
contact phone
location page URL                 desirable, not mandatory
booking / registration URL       optional when applicable
approved contact / WhatsApp path optional when applicable
Offerings available at location
active / inactive status
```

### URL rule

Location-specific URLs are desirable but not mandatory.

If Creator Shop cannot find a valid location-specific page, use the Brand homepage / strongest valid Brand destination as fallback.

The absence of a dedicated location URL must not create bespoke warning systems in MVP.

### Relationship with Offerings

Locations are reusable Brand entities that Offerings may reference:

```text
Brand
└── Locations

Offering
└── available at → Location IDs
```

Campaign-time geography then determines which locations are relevant.

Do not create duplicate Offering objects merely because the same service exists in multiple cities.

---

## 9. Field authority / refresh rule — shared Brand Centre rule

Use a simple authority hierarchy across Brand, Personas, Visual Identity and Offerings.

Conceptually:

```text
WEBSITE_OBSERVED
CREATOR_SHOP_DERIVED
BRAND_CONFIRMED
```

Exact technical vocabulary may change.

### Refresh behavior

```text
WEBSITE_OBSERVED
→ may refresh automatically from reliable current first-party evidence

CREATOR_SHOP_DERIVED
→ may refresh as Intelligence improves

BRAND_CONFIRMED
→ never silently overwrite
```

If current evidence conflicts with Brand-confirmed truth, Creator Shop may ask the Brand to resolve the conflict.

Do not create a separate manual-override architecture for every workspace; this is a common Brand Centre authority rule.

---

## 10. What should auto-refresh vs remain conservative

### Safe to refresh when reliable

Examples:

```text
website-observed social handle
website-observed location/contact details
website-observed visual assets when not Brand-confirmed
Creator Shop-derived Brand summary
Creator Shop-derived Persona reasoning
Creator Shop-derived communication implications
```

### Conservative / Brand authority preferred

Examples:

```text
brand name
confirmed Industry
primary geography / collaboration currency
Brand-uploaded visual assets
Brand-confirmed tone / values / USPs
Brand-confirmed Persona corrections
```

The Product Intelligence / Brand Intelligence design should later classify exact fields by source and refresh semantics rather than embedding refresh policy in frontend components.

---

## 11. Brand workspace — proposed desktop hierarchy

Illustrative content hierarchy:

```text
Brand

[Brand identity strip]
Logo  Brand Name
Website · Industry · Geography · Instagram

------------------------------------------------

Details
Short operational summary
[View details →]

------------------------------------------------

Visual Identity
Logo / palette / fonts / image thumbnails
[View visual identity →]

------------------------------------------------

Brand Identity
How Creator Shop understands the Brand
Tone · values · USPs · reasons to believe
[View brand identity →]

------------------------------------------------

Audience Personas
[Persona 1] [Persona 2] [Persona 3]
[View personas →]

------------------------------------------------

Locations                               [conditional]
Kolkata · Ranchi · ...
[View locations →]
```

Do not render all editable fields on this page.

---

## 12. Mobile adaptation

Mobile should preserve sequence, not desktop density.

Illustrative hierarchy:

```text
Brand

[logo] Brand Name
Website
Industry · Geography
Instagram connected

Details                         →
short summary

Visual Identity                 →
[logo] [palette] [image] [image]

Brand Identity                  →
short positioning / tone summary

Audience Personas               →
Persona 1
Persona 2
Persona 3

Locations                       →   [if applicable]
Kolkata · Ranchi · ...
```

Each destination opens a focused detail screen where edit / manage actions live.

Avoid inline edit affordances on every mobile block.

---

## 13. Brand Identity content should support Campaign generation

The Brand workspace is a downstream consumer contract for Brand Intelligence.

Future Brand Intelligence should be able to provide enough grounded reusable context that Campaign generation does not repeatedly ask the user for basic Brand facts.

At Campaign time, Brand-level reusable inputs may include:

```text
Brand description / positioning
tone of voice
values / communication boundaries
USPs / reasons to believe
visual references
Audience Personas
business geography / Locations
```

Campaign-specific choices should then focus on the few consequential decisions rather than re-collecting Brand identity from scratch.

---

## 14. No raw Brand Intelligence dump

Brand Centre should expose useful Brand truth and interpretation, not internal Intelligence architecture.

Do not surface user-facing sections titled after internal objects such as:

```text
Brand DNA
confidence score
reasoning chain
raw evidence graph
processor output
```

Translate internal Intelligence into understandable Brand-facing concepts.

---

## 15. Current provisional acceptance summary

Accepted direction for continued Brand Centre design:

```text
Brand Centre top level = Overview / Brand / Offerings / Market
Audience lives inside Brand
Brand workspace = Details / Visual Identity / Brand Identity / Audience Personas / Locations when applicable
Workspace is read-first; edit/manage lives on detail
Visual Identity supports multiple Brand reference images
Brand Identity contains reusable Brand-level communication truth
Audience Personas are limited to 2–3 active Personas
No mandatory Persona per Offering
Locations are reusable Brand entities and are conditional by business model
Location-specific URLs are desirable, not mandatory
Homepage / strongest valid Brand URL is fallback when location-specific URL is absent
Brand-confirmed values are never silently overwritten
Website-observed and Creator Shop-derived values may refresh according to source authority
Brand Centre does not expose raw Intelligence internals
Brand workspace should directly support future Campaign generation without becoming a campaign form
```

This is provisional Product Authority. It should be revisited only if Market, Campaign Recommendation, Analytics or implementation constraints expose a material conflict.