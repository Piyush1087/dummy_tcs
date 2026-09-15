# Creator Centre — Media Kit V0 Product Decision Register

`CREATOR_MEDIA_KIT_V0_PRODUCT_DECISION_REGISTER_V1`

STATUS = PRODUCT_FROZEN_FOR_V0

IMPLEMENTATION = NOT_AUTHORIZED_BY_THIS DOCUMENT ALONE

This document freezes the V0 Product behavior for the Creator Media Kit.

Media Kit is the final composition + conversion layer over upstream Creator Centre truths. It does not become the canonical owner of Creator Brand, Audience, Content, Portfolio, Rate Card, Commercial Setup, Settings, Payouts, KYC, shipping, Campaign or Collaboration truth.

Legacy Creator Media Kit implementation is reference-only and is not Product, UX, schema or reconciliation authority.

---

## 1. Purpose

Media Kit V0 is:

> A live, private-by-default commercial profile that helps a Brand understand the Creator quickly, verify fit, see selected commercial proof, and move into a Creator Shop enquiry.

Its three jobs are:

```text
PRESENT
Who I am as a Creator

PROVE
Who I reach, what I create,
and what I have done commercially

CONVERT
Help a genuine Brand decide:
proceed / do not proceed
```

Media Kit is not:

- another Audience editor;
- another Content editor;
- another Rate Card editor;
- another Creator Brand editor;
- a website/page builder;
- a public creator landing page;
- an all-post portfolio;
- a contract, quote or commercial agreement.

---

## 2. One Media Kit per Creator

V0 supports exactly one Media Kit per canonical Creator business subject.

```text
MEDIA_KITS_PER_CREATOR = 1
```

V0 does not support:

- multiple kits for different industries;
- Brand-specific kits;
- custom domains;
- alternate audience profiles;
- multiple commercial personas.

These may be future extensions.

---

## 3. Live composition, not a snapshot

The shared Media Kit URL always resolves the latest publishable upstream truth from the applicable Creator Centre domains, subject to Media Kit visibility rules.

Conceptually:

```text
Creator Brand
Audience
Content
Portfolio
Commercial Setup
Rate Card
        ↓
      Media Kit
```

Examples:

```text
Audience updates
→ Media Kit reflects the new accepted Audience projection

Creator changes Rate Card
→ Media Kit reflects the new Rate Card

Creator changes featured Portfolio work
→ Media Kit reflects the new feature selection
```

Media Kit itself is not contractual.

```text
MEDIA KIT
= living reference

QUOTE / COLLABORATION
= transaction-specific locked truth
```

Downstream quote / Collaboration systems own the immutable commercial snapshot required for execution.

---

## 4. Access and discoverability model

V0 is:

```text
LINK_ONLY
UNLISTED
NO SEARCH DISCOVERY
NO INDEXING
```

The Media Kit has two access layers.

### 4.1 Public / anyone-with-link shell

No authentication is required to see the public shell.

The public shell may show only:

- Creator name;
- profile image;
- Instagram handle / public social identity;
- Creator positioning / short bio;
- Creator Brand visual personality / styling;
- up to approximately 3 selected/public-safe visual content thumbnails.

The public shell must not expose:

- Audience demographics;
- detailed performance;
- Portfolio / Brand work;
- Rate Card;
- payment preferences;
- commercial preferences;
- past Brand relationships;
- KYC / payout / bank / shipping readiness;
- commercial availability history.

Public visual thumbnails are context only. They must not expose private commercial metrics or commercial proof.

### 4.2 Verified Brand layer

Normal Brand identity verification unlocks the commercial profile.

The Brand-facing Media Kit may then contain:

```text
1. Creator
2. Audience
3. Content & Performance
4. Portfolio
5. Work With Me
   - Rate Card / starting-rate projection
   - collaboration preferences
   - availability
   - payment terms/preferences where canonical upstream Product supports them
   - commercial notes / standard terms
6. Primary CTA
```

Operational readiness details such as KYC, payout/bank readiness and shipping setup remain internal and are never shown merely because the viewer is a verified Brand.

---

## 5. Creator section

The Creator section consumes canonical Creator Brand authority.

Likely Brand-facing projection may include:

- name / profile image;
- handle;
- positioning;
- short bio;
- niche / areas of expertise;
- Creator personality / tone;
- languages where commercially relevant;
- based-in location;
- Creator Brand palette / visual identity where applicable.

Media Kit does not own or edit these facts.

---

## 6. Audience projection

Media Kit V0 owns one coarse visibility control:

```text
SHOW AUDIENCE IN MEDIA KIT
ON / OFF
```

No field-level Audience publication controls exist in V0.

When ON, Media Kit automatically generates a compact Brand-facing projection from canonical Audience truth.

The exact projection may include, where valid and available:

- follower/audience size context;
- top audience age cohort;
- top market;
- top cities;
- a bounded valuable Audience Highlight.

Media Kit must not dump the full Audience workspace into the Kit.

### Default

If valid Audience data exists, Audience visibility defaults:

```text
ON
```

The Creator may turn the whole section OFF.

---

## 7. Content & Performance projection

Media Kit consumes canonical Content/Insights truth and does not recreate the Content workspace.

V0 owns one coarse visibility control:

```text
SHOW CONTENT & PERFORMANCE IN MEDIA KIT
ON / OFF
```

No per-Highlight, per-metric or per-content-insight controls exist in V0.

When ON, the compact Brand-facing projection may include:

- known content themes;
- content strengths / creative structures;
- a bounded Creator Shop Content Highlight;
- representative Content examples grounded by the canonical Content workspace.

### Default

If valid Content data exists, Content & Performance visibility defaults:

```text
ON
```

The Creator may turn the whole section OFF.

---

## 8. Portfolio projection and curation

Portfolio is the one Media Kit section where explicit Creator curation is expected.

Commercial proof is reputational and must not be auto-published merely because Creator Shop has verified work available.

V0 rule:

```text
PORTFOLIO APPEARS IN MEDIA KIT
ONLY THROUGH EXPLICIT CREATOR FEATURE SELECTION
```

Media Kit may allow the Creator to:

- include / exclude Portfolio entries;
- order featured entries.

Media Kit does not edit Portfolio facts/case studies.

V0 target is a bounded featured set, approximately 4–6 entries subject to final UI/Portfolio authority.

No automatic publication of C04/verified Brand work is allowed before Creator feature selection.

---

## 9. Work With Me section

Rate Card and operational preferences appear in one Brand-facing commercial section rather than as unrelated fragments.

Conceptual Brand question:

> Can this Creator work for my requirement, and what should I roughly expect commercially?

The section may consume canonical upstream values including:

- indicative / starting Rate Card items;
- UGC project willingness;
- gifting / barter willingness;
- physical-product willingness;
- international Brand openness;
- current collaboration availability;
- preferred payment terms where Rate Card/Commercial Setup authority supports them;
- standard Rate Card terms.

Media Kit does not own these fields.

### UGC semantic boundary

UGC remains a use case / working preference using the same Campaign/content construct where posting on the Creator's social handle is not required.

Media Kit must not invent UGC as a separate social-platform deliverable format merely for presentation.

---

## 10. Rate Card projection and visibility

Rate Card remains upstream commercial truth.

Media Kit owns only Brand-facing inclusion/exclusion of that section.

```text
SHOW RATE CARD IN MEDIA KIT
ON / OFF
```

### Default

Once the Creator has explicitly configured/published a valid Rate Card, Media Kit Rate Card visibility defaults:

```text
ON
```

The Creator may turn the whole Rate Card section OFF.

No per-rate visibility controls exist in V0.

Media Kit must present Rate Card values as indicative/reference starting commercial terms, not as binding offers or automatic Collaboration prices.

Campaign-specific or quote-specific commercial terms supersede the standard Rate Card when the Creator chooses to participate in that Campaign/enquiry.

---

## 11. Standard Rate Card terms block

At the bottom of Work With Me / Rate Card, V0 displays a platform-controlled explanatory terms block.

Canonical Product meaning:

- Rates shown are indicative starting/reference rates.
- Actual pricing may vary based on final brief, content requirements, usage rights, timelines and other commercial requirements.
- A Rate Card does not constitute acceptance of a collaboration.
- The Creator may accept or decline any opportunity.
- Final deliverables, rights, payment terms and commercial value are agreed separately before a Collaboration becomes binding.
- Campaign-specific commercial terms supersede the Creator's standard Rate Card when the Creator chooses to participate in that Campaign.

V0 does not make this a free-text legal-terms editor.

A small Creator commercial note may be considered later if independently justified.

---

## 12. Availability is authoritative and not hideable

Creator availability is operational truth affecting new-opportunity intake.

It is always respected by Media Kit and cannot be hidden merely to keep the CTA active.

### ACCEPTING_COLLABORATIONS

- CTA may be active.
- email fallback may be available subject to the separate fallback rule.

### PAUSED_UNTIL <date>

- show clear paused-until copy;
- disable new Creator Shop enquiry creation;
- disable Creator business-email fallback.

### NOT_ACCEPTING_NEW_COLLABORATIONS

- show clear not-accepting copy;
- disable new Creator Shop enquiry creation;
- disable Creator business-email fallback.

Media Kit must not create a new-opportunity path that bypasses the Creator's frozen availability preference.

---

## 13. Section visibility model

V0 freezes exactly this section-level model:

```text
Creator identity
= ALWAYS

Audience
= SHOW / HIDE

Content & Performance
= SHOW / HIDE

Portfolio
= SHOW / HIDE

Rate Card
= SHOW / HIDE

Availability
= ALWAYS RESPECTED
```

No field-level visibility toggles.

No arbitrary section deletion.

---

## 14. Fixed section order

V0 uses a fixed hierarchy:

```text
Creator
↓
Audience
↓
Content & Performance
↓
Portfolio
↓
Work With Me / Rate Card
↓
Primary CTA
```

Hidden sections collapse.

The Creator cannot arbitrarily reorder top-level Media Kit sections in V0.

Portfolio entries themselves may be reorderable within the Portfolio projection.

This keeps Media Kit a structured commercial profile rather than a page builder.

---

## 15. Appearance customization

Media Kit should reflect Creator Brand without becoming Canva or a website builder.

V0 direction:

```text
Creator Brand
→ palette / personality / visual identity

Media Kit
→ one polished responsive presentation system
```

V0 does not freeze or support:

- custom fonts;
- arbitrary colors independent of Creator Brand;
- custom CSS;
- arbitrary page layouts;
- arbitrary section backgrounds;
- custom templates/domain builder behavior.

Future limited templates or Light / Dark / Brand variants may be considered later.

---

## 16. Lifecycle

V0 lifecycle:

```text
DRAFT
LIVE
```

### DRAFT

- Creator may configure and preview the Kit;
- shared URL must not expose the Kit as an active commercial profile.

### LIVE

- stable shared link works;
- upstream publishable data updates automatically;
- visibility configuration applies.

Supported actions:

```text
Publish
Unpublish
```

No approval/review workflow exists in V0.

---

## 17. No completeness score

Do not calculate or show Media Kit completion percentages/scores.

A valid Kit may legitimately have:

- no Portfolio yet;
- insufficient Audience data;
- hidden Content;
- hidden Rate Card.

A Kit may be published with whatever valid sections exist.

Hidden/unavailable sections simply do not render.

---

## 18. Creator preview

V0 Creator preview supports two modes:

```text
Public view
Verified Brand view
```

Public view shows the unauthenticated shell.

Verified Brand view shows the commercial composition the Creator has chosen to expose to eligible Brands.

This helps the Creator understand exactly what followers/random visitors can see versus what a verified Brand can see.

---

## 19. Share-link model

V0 provides one stable Media Kit URL.

```text
ONE STABLE MEDIA KIT LINK
NO EXPIRING LINK
NO PER-BRAND LINK
NO SECRET ACCESS TOKEN REQUIRED
```

Sensitive content remains protected by Brand authentication rather than URL secrecy.

Creator controls include:

- Copy link;
- Preview;
- Publish / Unpublish.

V0 excludes custom domain, multiple links, multiple kits and Brand-specific kits.

---

## 20. Brand verification journey

From the public Media Kit shell:

```text
Work with Creator
→ Brand signs in / signs up
→ Brand website/domain
+ domain-linked work email verification
→ return directly to the same Creator / Media Kit context
```

The immediate Media Kit intent must not force the Brand through:

- Brand Preview;
- Instagram connection;
- generic initial Brand Centre landing;

before returning to the Creator context.

This is a fast-path through the existing Brand identity model, not a second Brand-authentication system.

---

## 21. Business-email fallback

If Brand verification cannot be satisfied, Media Kit may expose the Creator's designated business/contact email only when the Creator has enabled:

```text
ALLOW BUSINESS EMAIL FALLBACK
YES / NO
```

The fallback:

- does not unlock Audience;
- does not unlock Portfolio;
- does not unlock Rate Card;
- does not unlock detailed commercial performance;
- does not unlock C04 / Collaboration workflow;
- exits the Creator Shop commercial flow.

The fallback is secondary and must not be given equal prominence to the primary verified-Brand CTA.

If Creator availability is PAUSED or NOT_ACCEPTING_NEW_COLLABORATIONS, the fallback is disabled as well.

---

## 22. Primary CTA and conversion direction

V0 uses one prominent Creator-specific CTA, conceptually:

```text
Work with [Creator]
```

or equivalent `Send partnership enquiry` language.

Exact copy may be finalized in UX, but the Product action is one Creator-specific partnership enquiry intent.

The Brand must return to the same Creator context after authentication/verification.

Do not route the Brand to generic Brand Home and require rediscovery.

Do not require Brand Campaign creation merely to express direct Creator interest.

Long-term direction remains:

```text
Media Kit
→ enquiry
→ conversation
→ + Send Quote
→ commercial agreement
→ C04 execution
```

The exact direct-C04 enquiry/origin model remains separate future Product/architecture authority.

---

## 23. Acquisition attribution / instrumentation

Media Kit is intentionally a Creator-led Brand acquisition loop.

V0 should instrument at minimum:

```text
KIT_VIEW
WORK_WITH_CREATOR_CLICK
BRAND_AUTH_STARTED
DOMAIN_VERIFICATION_STARTED
DOMAIN_VERIFICATION_COMPLETED
VERIFICATION_FAILED
EMAIL_FALLBACK_REVEALED
ENQUIRY_STARTED
ENQUIRY_SUBMITTED
```

Preserve Creator/link attribution sufficient to understand conversion.

Instrumentation failure must not block Kit viewing or enquiry.

No Creator-facing Media Kit analytics dashboard is required in V0.

---

## 24. What Media Kit must never display as Brand-facing content

Even to verified Brands, Media Kit does not expose:

- KYC status;
- bank setup status;
- payout setup status;
- shipping address;
- internal Creator availability history;
- internal excluded-industry logic as raw system state;
- Campaign applications;
- active Collaboration operational state;
- internal Content limitations;
- raw Intelligence confidence;
- AI/model prompts/reasoning;
- private provider/settings state.

Creator preference/eligibility constraints may affect whether enquiry is allowed without requiring ugly/internal explanations to be displayed.

---

## 25. V0 composition summary

### Public / link-only

```text
Creator Hero
- identity
- positioning
- Creator Brand styling
- up to ~3 public-safe visual thumbnails

Primary CTA
→ Brand authentication / verification
```

### Verified Brand

```text
Creator Hero

Audience
- optional coarse SHOW/HIDE

Content & Performance
- optional coarse SHOW/HIDE

Portfolio
- optional SHOW/HIDE
- explicit Creator-selected featured work only

Work With Me
- upstream Rate Card / starting-rate projection when enabled
- UGC willingness
- gifting/barter willingness
- physical-product willingness
- international Brand openness
- availability
- preferred payment terms where upstream authority supports them
- standard Rate Card terms

Primary CTA
```

---

## 26. Five previously open decisions — now frozen

The prior discussion left five explicit choices. They are now frozen as follows:

```text
PUBLIC SHELL VISUALS
= identity + positioning + up to ~3 public-safe content thumbnails
  no metrics/commercial copy

PORTFOLIO PUBLICATION
= manual Creator feature selection required
  no automatic display of verified C04 work

RATE CARD VISIBILITY DEFAULT
= ON once Creator explicitly configures/publishes a valid Rate Card
  Creator may switch the whole Media Kit Rate Card section OFF

AUDIENCE / CONTENT VISIBILITY DEFAULT
= ON when valid data exists
  Creator may hide either whole section

PAUSED / NOT ACCEPTING
= disable new enquiry CTA
  disable business-email fallback
```

---

## 27. Explicit V0 exclusions

Media Kit V0 excludes:

- multiple Media Kits;
- Brand-specific Kit variants;
- custom domains;
- arbitrary section ordering;
- arbitrary page-builder customization;
- custom fonts/CSS;
- field-level Audience/Content/Rate Card visibility controls;
- automatic Portfolio publication;
- Media Kit completeness score;
- Creator-facing Kit analytics dashboard;
- public Marketplace/search discovery from the Media Kit;
- public commercial sections;
- generic-email bypass into the authenticated commercial profile;
- generic-email access to C04;
- Agency onboarding exception;
- Campaign creation as a mandatory prerequisite to direct Creator interest;
- direct-C04 implementation details;
- quote implementation;
- payment/payout/KYC readiness exposure to Brands;
- operational Collaboration data;
- Media Kit-owned editing of upstream workspaces.

---

## 28. Product-level acceptance criteria

Media Kit V0 is Product-acceptable only if:

1. exactly one Media Kit exists per Creator in V0;
2. Kit has DRAFT/LIVE lifecycle with Publish/Unpublish;
3. LIVE Kit uses one stable link and latest publishable upstream truth;
4. public access is link-only/unlisted/non-indexed;
5. public shell exposes identity/positioning/Brand styling and only bounded public-safe imagery;
6. commercial sections remain inaccessible until normal Brand identity verification succeeds;
7. verified Brand returns to the same Creator context after auth/verification;
8. Audience and Content use coarse SHOW/HIDE only, defaulting ON when valid;
9. Portfolio requires explicit Creator feature selection before publication;
10. Rate Card defaults ON once valid/published upstream and may be hidden only as a whole section;
11. availability cannot be hidden and blocks new enquiry + email fallback when paused/not accepting;
12. business-email fallback never unlocks commercial sections or C04;
13. top-level section order is fixed and hidden sections collapse;
14. no completeness score is shown;
15. Creator can preview both Public and Verified Brand views;
16. Kit does not expose KYC/bank/payout/shipping/internal operational state;
17. Media Kit does not mutate upstream Creator Brand/Audience/Content/Portfolio/Commercial Setup/Rate Card truth;
18. standard Rate Card terms clearly state indicative/reference nature and Campaign/downstream supremacy;
19. instrumentation captures the main Brand-acquisition funnel without blocking the journey;
20. no legacy Media Kit implementation is treated as Product/schema authority merely because it exists.

---

## 29. Authority / next boundary

```text
CREATOR_MEDIA_KIT_V0_PRODUCT = FROZEN

MEDIA_KIT_COMPOSITION = FROZEN
MEDIA_KIT_ACCESS_MODEL = FROZEN
MEDIA_KIT_VISIBILITY_MODEL = FROZEN
MEDIA_KIT_LIFECYCLE = FROZEN
MEDIA_KIT_BRAND_AUTH_FAST_PATH = FROZEN
MEDIA_KIT_EMAIL_FALLBACK = FROZEN
MEDIA_KIT_AVAILABILITY_BEHAVIOR = FROZEN
MEDIA_KIT_ATTRIBUTION_REQUIREMENTS = FROZEN

UPSTREAM CREATOR BRAND / AUDIENCE / CONTENT / PORTFOLIO /
COMMERCIAL SETUP / RATE CARD
= CONSUMED, NOT REDEFINED HERE

DIRECT C04 ENQUIRY / QUOTE ARCHITECTURE
= NOT FROZEN BY THIS DOCUMENT

TECHNICAL PREFLIGHT
= NOT AUTHORIZED BY THIS DOCUMENT ALONE

IMPLEMENTATION
= NOT AUTHORIZED
```

Next implementation authority should begin only after the Parent chooses the appropriate Systems Architect / technical owner and explicitly authorizes a current-state/reuse/architecture preflight against the accepted upstream Creator Centre modules.
