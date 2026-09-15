# Creator Centre — Media Kit V0 Product Decision Register V2

`CREATOR_MEDIA_KIT_V0_PRODUCT_DECISION_REGISTER_V2`

Date: 2026-09-15  
Status: **PRODUCT_FROZEN_FOR_V0**  
Supersedes: `CREATOR_MEDIA_KIT_V0_PRODUCT_DECISION_REGISTER_V1`  
Implementation: **NOT_AUTHORIZED_BY_THIS DOCUMENT ALONE**

This is the single current Product authority for Creator Media Kit V0.

Legacy Creator Media Kit implementation and the non-authoritative composition note remain reference-only. They are not Product, UX, schema, persistence or reconciliation authority.

---

## 0. V2 decision delta

V2 preserves the accepted Media Kit composition model and freezes these corrections:

1. Portfolio consumes individual Portfolio V3 items, not projects or case studies.
2. Portfolio media remains static and opens its source destination.
3. `Based in` is sourced from Commercial Setup, not Creator Brand.
4. Rate Card consumes the frozen V2 terms, including `Partnership Ads` and the `<15 seconds` Reel baseline.
5. Rate Card visibility depends on a valid configured Rate Card; Rate Card has no separate publish lifecycle in V0.
6. Two parallel CTAs are frozen: `Work with Creator` and `Reveal Email ID`.
7. Brand signup from `Work with Creator` is shortened to website URL plus domain-linked work-email verification, then lands directly in C04.
8. Agency onboarding is deferred to V2; Agencies use the email CTA in V0.
9. Neither CTA is filtered by Creator country, commercial preferences, Rate Card or Availability.
10. Availability is absent from the unauthenticated Media Kit shell and is shown only after Brand login/signup.
11. `Reveal Email ID` is present by default and is not Creator-controlled.
12. PDF download is supported as a point-in-time presentation snapshot.

Where V1 conflicts with these decisions, V2 governs.

---

## 1. Purpose

Media Kit V0 is:

> a live, private-by-default commercial profile that helps a Brand understand the Creator, verify fit, inspect selected proof and move directly into a Creator-specific enquiry.

Its jobs are:

```text
PRESENT
Who I am as a Creator

PROVE
Who I reach, what I create,
and selected commercial work

CONVERT
Work with Creator
or
Reveal Email ID
```

Media Kit is not:

- another Audience, Content, Creator Brand, Portfolio or Rate Card editor;
- a website/page builder;
- a public commercial profile;
- an all-post feed;
- a Campaign;
- a quote, contract or Collaboration agreement;
- canonical owner of upstream Creator Centre truth.

---

## 2. One Media Kit per Creator

V0 supports exactly one Media Kit per canonical Creator business subject.

```text
MEDIA_KITS_PER_CREATOR = 1
```

V0 excludes multiple industry kits, Brand-specific kits, alternate commercial personas, custom domains and multiple share links.

---

## 3. Live composition and upstream authority

The live shared Media Kit resolves the latest publishable upstream truth allowed by Media Kit visibility and curation.

```text
Creator Brand
Audience V1
Content
Portfolio V3
Commercial Setup V2
Rate Card V2
        ↓
      Media Kit
```

Ownership remains upstream:

- Creator Brand owns Creator positioning, bio, niche, style and visual identity;
- Audience owns factual/derived Audience truth;
- Content owns factual/derived Content truth;
- Portfolio owns individual commercial-work items and their provenance;
- Commercial Setup owns work preferences, including Availability and Based in;
- Rate Card owns offers, starting rates and preferred payment terms;
- Settings owns designated business email and its underlying identity data;
- C04 owns the Creator-specific enquiry and Collaboration journey.

Media Kit owns composition, section visibility, bounded selection, presentation, sharing, PDF export and CTAs.

```text
LIVE MEDIA KIT
= LIVING REFERENCE

PDF DOWNLOAD
= POINT-IN-TIME PRESENTATION SNAPSHOT

QUOTE / COLLABORATION
= TRANSACTION-SPECIFIC LOCKED TRUTH
```

---

## 4. Access and discoverability

V0 is:

```text
LINK_ONLY
UNLISTED
NO SEARCH DISCOVERY
NO INDEXING
```

The stable link has two access layers.

### 4.1 Public / anyone-with-link shell

No authentication is required.

The public shell may show:

- Creator name;
- profile image;
- Instagram handle or public social identity;
- positioning and short bio;
- Creator Brand styling;
- up to three Creator-selected public-safe Instagram content thumbnails;
- `Work with Creator` CTA;
- `Reveal Email ID` CTA.

The public shell must not show:

- Audience demographics;
- detailed performance;
- Portfolio or past Brand work;
- Rate Card;
- payment preferences;
- UGC, gifting/barter, physical-product or international-Brand preferences;
- Availability;
- KYC, payout/bank or shipping readiness;
- Campaign or Collaboration information.

### 4.2 Verified Brand layer

After normal Brand identity verification, the Brand may see:

```text
1. Creator
2. Audience
3. Content & Performance
4. Portfolio
5. Work With Me
6. Availability
7. Work with Creator
8. Download PDF
```

Operational readiness details remain internal and are never exposed merely because the viewer is a verified Brand.

---

## 5. Creator identity projection

The Creator section may include:

- name, profile image and handle;
- positioning and short bio;
- niche or areas of expertise;
- Creator personality, tone and visual identity;
- languages where commercially relevant;
- Based in.

Creator Brand supplies Creator identity and styling.

Commercial Setup supplies `Based in`.

Media Kit does not edit either source.

---

## 6. Audience projection

Media Kit owns one coarse control:

```text
SHOW AUDIENCE IN MEDIA KIT
ON / OFF
```

When valid Audience data exists, the default is ON.

The Creator may hide the whole section. There are no field-level publication controls.

The Brand-facing projection is compact and may include only bounded, valid Audience facts or conclusions allowed by Audience authority. Audience V1 does not automatically make every Audience Profile, contextual interpretation or longitudinal conclusion publishable.

Missing, suppressed, unavailable, stale or unsupported data must not be represented as zero.

---

## 7. Content & Performance projection

Media Kit owns one coarse control:

```text
SHOW CONTENT & PERFORMANCE IN MEDIA KIT
ON / OFF
```

When valid Content data exists, the default is ON.

The Creator may hide the whole section. There are no field-level Content controls.

The projection may include bounded themes, strengths, performance context and representative examples grounded in canonical Content truth. It must not recreate the Content workspace or convert system-selected representative content into Portfolio truth.

---

## 8. Public-shell visual selection

Media Kit owns selection of up to three eligible public Instagram items for the unauthenticated shell.

This selection:

- is distinct from Content's system-selected representative examples;
- is distinct from Portfolio feature selection;
- does not mutate Content or Portfolio;
- contains no private commercial metrics or collaboration claims;
- uses a static image or cover;
- opens the actual Instagram source destination;
- does not autoplay or open an internal preview.

If no eligible item is selected, the public shell remains valid without thumbnails.

---

## 9. Portfolio V3 projection

Portfolio is the one commercial-proof section requiring explicit Creator item selection.

```text
PORTFOLIO APPEARS IN MEDIA KIT
ONLY THROUGH EXPLICIT CREATOR FEATURE SELECTION
```

Media Kit consumes individual Portfolio V3 items, not projects, case studies or galleries.

V0 supports a bounded featured set of approximately four to six items. The Creator may include, exclude and order eligible items.

Each item may show:

- static image or cover;
- content format;
- identified or inferred Brand when available;
- publication/work date when available;
- `Instagram Verified`, `Creator Shop Verified`, `Possible Collaboration` or `Creator Provided` labels as applicable;
- concise allowed performance or Creator context;
- observed-as-of date for source-derived performance;
- source destination.

Interaction follows Portfolio V3:

- Reel cover opens the Instagram Reel;
- image opens the Instagram post;
- carousel cover opens the Instagram carousel;
- Story opens its available source destination;
- external/UGC item opens its supplied public destination or authorized work-reference link.

There is no Media Kit-hosted media player, carousel recreation, project detail or autoplay.

Removed Portfolio items are ineligible and disappear from Media Kit selection and live presentation.

---

## 10. Work With Me

Work With Me may consume:

- valid configured Rate Card items;
- UGC willingness;
- gifting/barter willingness;
- physical-product willingness;
- international-Brand openness;
- preferred payment terms;
- standard Rate Card conditions.

Media Kit does not own those values.

UGC remains a use case of the existing Campaign, Brief and Deliverable construct. It is not displayed as a separate canonical Deliverable type merely for Media Kit.

No country or commercial preference becomes a Media Kit access, CTA or C04-entry filter.

---

## 11. Rate Card projection and visibility

Rate Card remains upstream commercial truth.

Media Kit owns only section inclusion:

```text
SHOW RATE CARD IN MEDIA KIT
ON / OFF
```

Once a valid Rate Card is configured, Media Kit Rate Card visibility defaults ON. The Creator may hide the whole section.

Rate Card has no separate V0 publish lifecycle and Media Kit must not require a nonexistent Rate Card publish action.

No per-rate visibility exists in V0.

Brand-facing presentation must retain:

- `Starting from` semantics;
- Creator canonical country-based currency;
- `<15 seconds` as the V0 Reel reference baseline;
- `Partnership Ads` as the Instagram-only Creator-facing label;
- non-binding/reference meaning;
- Campaign, quote and Collaboration supremacy.

No FX conversion or Brand-local currency display is included in V0.

UGC content-right behavior remains governed by Rate Card and Commercial Setup authority and is not redefined here.

---

## 12. Availability boundary

Availability does not appear on the public Media Kit shell.

Only after Brand login/signup and verification may the Brand see the Creator's current Availability:

```text
ACCEPTING_COLLABORATIONS

PAUSED_UNTIL <date>

NOT_ACCEPTING_NEW_COLLABORATIONS
```

Availability is informational in the Media Kit conversion path.

It does not:

- hide or disable either public CTA;
- prevent Brand verification;
- prevent direct entry into the Creator-specific C04 context;
- reveal prior Availability history.

C04 and the Creator retain authority over whether and how the enquiry proceeds.

---

## 13. No preference or geography filtration

Media Kit does not filter either CTA or Brand access using:

- Creator or Brand country;
- international-Brand preference;
- preferred industries;
- excluded industries;
- physical-product willingness;
- UGC willingness;
- gifting/barter willingness;
- Rate Card mismatch;
- payment-term preference;
- Availability.

These values may be presented after verification where authorized. They do not become silent eligibility rules.

The Creator decides whether to proceed with the enquiry through the C04 journey.

---

## 14. CTA 1 — Work with Creator

Primary CTA:

```text
Work with Creator
Verified Brand enquiries
```

For an already authenticated and verified Brand:

```text
Work with Creator
→ Creator-specific C04 context
```

For a new or unverified Brand:

```text
Work with Creator
→ Enter website URL
→ Verify domain through domain-linked work email
→ Creator-specific C04 context
```

This shortened journey reuses the applicable source/capabilities of normal Brand onboarding but deliberately skips:

- Brand Preview;
- Instagram connection;
- generic initial Brand Centre landing;
- Campaign creation.

Brand and Creator context must survive signup and verification.

This is not a second weak Brand identity system. Domain-linked work-email verification remains required.

---

## 15. Direct C04 entry

A verified Brand lands directly in C04 for the selected Creator.

```text
MEDIA KIT
→ DIRECT CREATOR ENQUIRY ORIGIN
→ C04
```

No Campaign is created merely to support the enquiry.

The entry represents a Creator-specific commercial conversation, not a locked commercial agreement.

C04 retains authority for conversation, quote/terms, mutual acceptance, operational checkpoints and any later Collaboration execution.

The technical preflight must reconcile a direct Media Kit enquiry origin into C04 without creating a parallel messaging or agreement system.

---

## 16. CTA 2 — Reveal Email ID

Parallel secondary CTA:

```text
Reveal Email ID
Agencies and email enquiries
```

This CTA:

- is available by default on the public shell;
- is not Creator-controlled;
- reveals the Settings-owned designated Creator business/contact email;
- requires no Brand authentication;
- does not unlock Audience, Content performance, Portfolio, Rate Card or other verified commercial sections;
- does not create a Creator Shop enquiry;
- does not enter C04;
- exits the Creator Shop commercial workflow into external email.

It is not conditional on Brand verification failure.

Media Kit owns the reveal interaction but does not own or edit the underlying email identity.

---

## 17. Agency boundary

Agency onboarding and verified Agency participation are deferred to V2.

In V0:

```text
AGENCY
→ REVEAL EMAIL ID
→ EXTERNAL EMAIL ENQUIRY
```

An Agency does not receive a generic-email bypass into verified Brand content or C04.

---

## 18. Fixed hierarchy and visibility

V0 uses:

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
Availability
↓
CTAs
```

Hidden or unavailable sections collapse.

The Creator cannot reorder top-level sections.

Visibility model:

```text
Creator identity
= ALWAYS

Audience
= SHOW / HIDE

Content & Performance
= SHOW / HIDE

Portfolio
= SHOW / HIDE
  + explicit item selection

Rate Card
= SHOW / HIDE

Availability
= VERIFIED BRAND ONLY
  NOT A CTA FILTER

CTAs
= PUBLIC SHELL + VERIFIED VIEW
  NOT CREATOR-CONTROLLED
```

---

## 19. Appearance customization

Media Kit applies Creator Brand identity through one polished responsive presentation system.

V0 excludes custom fonts, arbitrary independent colors, custom CSS, arbitrary layouts, arbitrary section backgrounds, custom templates and custom-domain builder behavior.

Future limited templates or variants may be considered later.

---

## 20. Lifecycle and stable link

V0 lifecycle:

```text
DRAFT
LIVE
```

### DRAFT

- Creator may configure and preview Public and Verified Brand views;
- the shared URL does not expose an active Kit;
- Creator may download the current Verified Brand preview as PDF.

### LIVE

- one stable shared link works;
- upstream publishable data resolves live;
- visibility and curation apply;
- eligible verified Brands may download the PDF.

Actions:

```text
Publish
Unpublish
Copy link
Preview
Download PDF
```

No approval/review workflow exists in V0.

---

## 21. No completeness score

No Media Kit completion percentage or score is shown.

A valid Kit may have no Portfolio, insufficient Audience data, hidden Content or hidden Rate Card.

A Kit may be published with whatever valid sections exist. Hidden or unavailable sections do not render.

---

## 22. Creator preview

Creator preview supports:

```text
Public view
Verified Brand view
```

Public view shows exactly what an unauthenticated visitor sees.

Verified Brand view shows the commercial composition available after Brand verification.

PDF preview/download uses the current Verified Brand composition.

---

## 23. Share-link model

V0 provides one stable Media Kit URL.

```text
ONE STABLE MEDIA KIT LINK
NO EXPIRING LINK
NO PER-BRAND LINK
NO SECRET ACCESS TOKEN
```

Commercial sections are protected by Brand authentication rather than URL secrecy.

V0 excludes custom domains, multiple links, multiple Kits and Brand-specific Kits.

---

## 24. PDF download capability

### 24.1 Eligible actors

Creator may download the current Verified Brand preview from DRAFT or LIVE configuration.

A verified Brand may download a LIVE Media Kit.

Anonymous/public-shell visitors cannot download the commercial PDF.

### 24.2 Snapshot semantics

```text
MEDIA KIT PDF
= POINT-IN-TIME PRESENTATION SNAPSHOT

NOT
= LIVE DOCUMENT
NOT
= QUOTE
NOT
= CONTRACT
NOT
= LOCKED COMMERCIAL AGREEMENT
```

The PDF contains only the sections and items visible in the Verified Brand composition at generation time.

It displays:

```text
Generated on <date>
```

Source-derived performance retains:

```text
Observed as of <date>
```

Rate Card values retain canonical Creator currency and `Starting from` wording. No FX conversion occurs in V0.

Changes to the live Media Kit do not mutate an already downloaded PDF. Unpublishing the live Kit does not revoke files already downloaded.

### 24.3 PDF media behavior

Portfolio and public content media render as embedded static images/covers where acquisition succeeds.

- Reel: embedded static cover;
- image post: embedded static image;
- carousel: embedded static representative cover;
- Story: embedded static preview only when valid material exists;
- external/UGC work: no preview is assumed.

Each eligible source destination remains a clickable hyperlink.

If a presentation asset cannot be acquired, the PDF uses a truthful no-image state and preserves the readable/clickable source link where one exists.

No video, autoplay, embedded Instagram player or interactive carousel exists in PDF.

### 24.4 PDF delivery and persistence

PDF is generated on demand.

V0 does not create:

- a hosted public PDF URL;
- a Creator/Brand PDF archive;
- a version-management interface;
- an expiring download link;
- access revocation for a file already downloaded;
- a per-Brand customized Kit.

A downloaded PDF is intentionally portable outside Creator Shop access control.

### 24.5 PDF CTA

The PDF may contain clickable actions returning to the live Media Kit and its `Work with Creator` path.

Current access and verification rules are evaluated when the live link is opened; the PDF does not bypass them.

PDF-generation failure does not block the live Media Kit.

---

## 25. Brand verification fast path

The Media Kit fast path uses the existing Brand identity model:

```text
website URL
+ domain-linked work email verification
```

It does not require Brand Preview or social connection for this intent.

The Brand returns directly to the same Creator-specific C04 context.

Failure to verify does not unlock commercial content or C04. `Reveal Email ID` remains independently available as the parallel external-email path.

---

## 26. Standard Rate Card conditions

The verified Brand view and PDF display platform-controlled explanatory terms where Rate Card is shown:

1. rates are indicative starting/reference rates;
2. actual pricing may vary with final brief, requirements, complexity, timelines and rights;
3. the Rate Card does not constitute acceptance;
4. the Creator may accept or decline any opportunity;
5. final deliverables, rights, payment terms and commercial value are agreed separately;
6. Campaign-specific or mutually accepted downstream terms supersede the Rate Card;
7. rights apply only when explicitly included in the final agreement;
8. Rate Card changes are prospective and do not mutate Applications or Collaborations.

No arbitrary Creator-authored legal T&C editor exists in V0.

---

## 27. Instrumentation

Instrument at minimum:

```text
KIT_VIEW
PUBLIC_THUMBNAIL_SOURCE_OPENED
WORK_WITH_CREATOR_CLICK
REVEAL_EMAIL_ID_CLICK
BRAND_AUTH_STARTED
DOMAIN_VERIFICATION_STARTED
DOMAIN_VERIFICATION_COMPLETED
VERIFICATION_FAILED
C04_DIRECT_ENTRY
MEDIA_KIT_PDF_DOWNLOAD
```

Preserve Creator/link attribution and authenticated Brand identity where applicable.

Instrumentation failure must not block viewing, verification, C04 entry, email reveal or PDF delivery.

No Creator-facing Media Kit analytics dashboard is required in V0.

---

## 28. Information never exposed as Media Kit content

Even to verified Brands, Media Kit does not expose:

- KYC status;
- bank or payout setup;
- shipping address;
- Availability history;
- raw excluded-industry system state;
- Campaign applications;
- active Collaboration operational state;
- internal Content limitations;
- raw Intelligence confidence;
- model prompts or reasoning;
- provider credentials or private Settings state.

The current Availability value may be shown after verification; its history may not.

---

## 29. Explicit V0 exclusions

Media Kit V0 excludes:

- multiple Media Kits;
- Brand-specific Kit variants;
- custom domains;
- arbitrary section ordering;
- page-builder customization;
- field-level Audience, Content or Rate Card visibility;
- automatic Portfolio publication;
- Portfolio project/case-study rendering;
- internal Portfolio media preview;
- public commercial sections;
- public PDF download;
- per-Brand PDF customization;
- PDF archive/version management;
- Media Kit completeness score;
- Creator-facing Media Kit analytics;
- public Marketplace/search discovery;
- Creator-controlled email-reveal toggle;
- CTA filtering based on geography, commercial preferences, Rate Card or Availability;
- Agency onboarding;
- Campaign creation as a direct-enquiry prerequisite;
- parallel messaging or agreement systems;
- Media Kit-owned editing of upstream truth;
- payment, payout, KYC or shipping execution.

---

## 30. Product acceptance criteria

Media Kit V0 is Product-conformant only if:

1. exactly one Kit exists per Creator;
2. Kit supports DRAFT/LIVE and Publish/Unpublish;
3. LIVE uses one stable, unlisted, non-indexed link;
4. public shell exposes only identity, bounded public-safe imagery and the two CTAs;
5. public shell never exposes Availability or verified commercial sections;
6. verified commercial content requires website/domain-linked work-email Brand verification;
7. the shortened signup path skips Brand Preview, Instagram connection and generic Brand Centre landing;
8. verified Brand returns directly to the selected Creator's C04 context;
9. no Campaign is created merely to support a direct Media Kit enquiry;
10. `Work with Creator — Verified Brand enquiries` is the primary CTA;
11. `Reveal Email ID — Agencies and email enquiries` is a parallel default CTA, not a failure fallback;
12. email reveal is not Creator-controlled and unlocks no commercial content or C04;
13. Agency onboarding remains deferred to V2;
14. neither CTA is filtered by geography, preferences, Rate Card or Availability;
15. Availability is visible only after Brand verification;
16. Audience and Content use coarse SHOW/HIDE and default ON when valid;
17. public thumbnails are explicitly Creator-selected inside Media Kit;
18. Portfolio contains only explicitly selected eligible individual Portfolio V3 items;
19. Portfolio media opens the real source and never an internal preview;
20. valid configured Rate Card visibility defaults ON and retains V2 semantics;
21. Creator and verified Brand can download the allowed Verified Brand composition as PDF;
22. anonymous users cannot download the commercial PDF;
23. PDF is dated, static, non-contractual and preserves observed-as-of context;
24. PDF embeds static media when available and preserves clickable source links;
25. downloaded PDFs are not mutated or revoked by later live-Kit changes;
26. Media Kit never mutates upstream Creator Centre truth;
27. operational readiness and private Settings/provider state remain hidden;
28. instrumentation failure never blocks the user journey.

---

## 31. Authority conclusion

```text
CREATOR_MEDIA_KIT_V0_PRODUCT
= FROZEN_V2

COMPOSITION
= FROZEN

ACCESS
= PUBLIC_SHELL + VERIFIED_BRAND_LAYER

PUBLIC_CTAS
= WORK_WITH_CREATOR
  + REVEAL_EMAIL_ID

WORK_WITH_CREATOR_PATH
= WEBSITE_URL
  → DOMAIN-LINKED WORK-EMAIL VERIFICATION
  → DIRECT C04 CREATOR CONTEXT

REVEAL_EMAIL
= DEFAULT
  NOT CREATOR-CONTROLLED
  EXTERNAL EMAIL PATH

AGENCY_ONBOARDING
= DEFERRED_V2

CTA_FILTERING
= NONE FOR GEOGRAPHY
  COMMERCIAL PREFERENCES
  RATE CARD
  OR AVAILABILITY

AVAILABILITY
= NOT PUBLIC
  VISIBLE AFTER BRAND VERIFICATION

PORTFOLIO
= EXPLICITLY SELECTED INDIVIDUAL V3 ITEMS

PDF_DOWNLOAD
= CREATOR + VERIFIED BRAND
  POINT-IN-TIME PRESENTATION SNAPSHOT
  NO PUBLIC DOWNLOAD

UPSTREAM TRUTH
= CONSUMED NOT REDEFINED

C04
= DIRECT ENQUIRY / COLLABORATION AUTHORITY

IMPLEMENTATION
= NOT AUTHORIZED_BY_THIS DOCUMENT ALONE
```

No Product decision remains open for Media Kit V0.
