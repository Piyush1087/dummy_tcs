# Creator Centre — Commercial Setup / Rate Card V0 Product Decision Register

`CREATOR_COMMERCIAL_SETUP_RATE_CARD_V0_PRODUCT_DECISION_REGISTER_V1`

STATUS = PRODUCT_FROZEN_FOR_V0

IMPLEMENTATION = NOT_AUTHORIZED_BY_THIS DOCUMENT ALONE

This document freezes Creator Rate Card V0 inside Creator Centre / Commercial Setup.

The Rate Card is a standard/reference commercial baseline. It is not a binding offer, Campaign commercial authority, quote, or Collaboration agreement.

---

## 1. Core Product principle

A Creator Rate Card can never fully describe every Brand brief.

V0 therefore treats every published rate as:

```text
STARTING FROM
```

There is no `FIXED` Rate Card posture in V0.

The Rate Card exists to help a Brand quickly decide whether to continue into enquiry/negotiation and to give Creator Shop reusable commercial atoms for future direct quote flows.

Conceptually:

```text
CREATOR RATE CARD
standard/reference starting terms
        ↓
CAMPAIGN OR DIRECT ENQUIRY
specific opportunity terms
        ↓
NEGOTIATION / QUOTE
        ↓
C04 COLLABORATION
locked commercial agreement
```

---

## 2. Campaign commercial always supersedes Rate Card

When a Creator views or applies to a Brand Campaign:

```text
CAMPAIGN COMMERCIAL
>
CREATOR RATE CARD
```

The Campaign's canonical currency, compensation model, commercial offer/minimum and payment terms remain authoritative for that Campaign.

A Creator's Rate Card must not:

- block the Creator from viewing/applying merely because the Campaign offer is below the Rate Card;
- automatically alter the Campaign commercial amount;
- become an Application commercial proposal;
- become the locked Collaboration fee.

Future Marketplace/recommendation may use Rate Card economics as an advisory commercial-fit signal, but a higher Rate Card is not by itself a hard eligibility blocker.

---

## 3. Durable placement

Commercial Setup becomes conceptually:

```text
COMMERCIAL SETUP

[ Work Preferences | Rate Card ]
```

Operational readiness remains part of Commercial Setup / Work Preferences.

Rate Card does not own bank details, KYC, shipping address, source/social integrations, or Media Kit visibility.

---

## 4. Shared platform commercial vocabulary

Creator and Brand commercial surfaces should converge on the same platform concepts wherever meaning survives.

Current frozen Brand Brief authority owns canonical Deliverables and usage-right semantics. Technical implementation must reconcile Rate Card items to those shared concepts rather than create an unrelated Creator-only commercial vocabulary.

Current Brand Brief deliverable formats include:

```text
REEL_VIDEO
STORY
PHOTOSHOOT
BANNER_CAROUSEL
```

Brand Brief usage rights include:

```text
LINK_IN_BIO
PARTNERSHIP / SPARK ADS
ORGANIC REPOSTING RIGHTS
BRANDED COLLABORATION
```

### UGC requirement

Creator Rate Card V0 must also support a Creator-facing `UGC Video` commercial item because UGC is an explicit Brand/Campaign commercial/content requirement in the existing Campaign experience.

However, current frozen Add Brief authority does not expose `UGC_VIDEO` as a canonical Deliverable format; UGC appears in Campaign UX/examples rather than as one of the frozen four Deliverable formats.

Therefore:

```text
UGC VIDEO = PRODUCT REQUIRED IN RATE CARD V0

EXACT SHARED DOMAIN MAPPING = TECHNICAL / PRODUCT RECONCILIATION REQUIRED
```

Do not introduce a conflicting parallel Campaign Deliverable enum merely to implement Rate Card.

The later Rate Card technical preflight must determine the correct shared mapping and return any material Campaign-domain conflict to Product authority.

---

## 5. Atomic Content Rates

V0 Rate Card is atomic. Packages are deferred to V2.

Creator may enable only the content items they offer.

Each enabled item requires one positive starting amount in the canonical Rate Card currency.

Recommended Creator-facing V0 items:

```text
Reel
Story
Carousel
Photoshoot / static asset creation
UGC Video
```

### 5.1 Reel

Reference scope:

```text
1 Reel
reference duration: approximately 15–20 seconds
```

The starting rate is not a promise that longer/more complex Reels cost the same.

### 5.2 Story

Reference scope:

```text
1 Story
```

Story bundles/sets are not a separate V0 Rate Card item. They may be composed later through V2 packages.

### 5.3 Carousel

Reference scope:

```text
1 Carousel
```

Exact slide count remains brief-specific and may change the final quote.

### 5.4 Photoshoot / static asset creation

Reference scope:

```text
1 delivered photo/static asset
```

Exact quantity/production requirements remain opportunity-specific.

### 5.5 UGC Video

Reference scope:

```text
1 UGC Video
reference duration: approximately 15–20 seconds
```

UGC Video does not automatically imply publication on the Creator's own account. Publication, usage and paid-media rights must be explicitly agreed where applicable.

---

## 6. No fixed-rate posture

All V0 monetary Rate Card line items display:

```text
Starting from <amount>
```

Do not ask the Creator to choose `Fixed` versus `Starting from`.

This keeps the meaning consistent:

> the listed amount is the Creator's baseline for the standard reference scope, before opportunity-specific complexity is known.

---

## 7. Add-ons and rights

Add-ons/rights remain distinct from base content Deliverables.

### 7.1 Link in Bio

V0 supports exactly one reference Link-in-Bio rate:

```text
Starting from <amount>
Duration: <durationDays>
```

One duration is stored/displayed, not multiple tiers.

Default V0 reference duration may initialize to:

```text
7 days
```

but the implementation may allow the Creator to set one positive duration value.

### 7.2 Partnership / Spark Ad authorization

V0 supports exactly one reference paid-amplification authorization rate:

```text
Starting from <amount>
Authorization duration: <authorizationDays>
```

One duration is stored/displayed, not multiple tiers.

Default V0 reference duration may initialize to:

```text
15 days
```

but the implementation may allow the Creator to set one positive duration value.

### 7.3 Content usage rights

Content/organic usage rights remain intentionally simple in V0.

Creator sets:

```text
Content usage rights available
YES / NO
```

If `YES`, Creator may optionally set one standard/reference duration:

```text
usageDays > 0
```

V0 does not require a separate published starting price for content usage rights.

The actual rights fee/scope may be negotiated in the opportunity-specific quote/agreement.

No usage right is granted merely because the Rate Card says the Creator is open to it.

---

## 8. Gifting / barter preference

Rate Card may display the Creator's canonical Work Preferences value:

```text
Open to gifting / barter collaborations
YES / NO
```

This value is owned by the Work Preferences amendment and must not be duplicated as a second canonical Rate Card field.

`YES` means willing to consider, not automatic acceptance.

---

## 9. Currency

Creator does not manually choose Rate Card currency in V0.

Canonical Rate Card currency is auto-resolved from Creator commercial geography/business identity:

```text
Creator base country initially
→ later KYC/legal identity where authoritative
→ canonical Rate Card currency
```

The exact country/KYC-to-currency resolver must reuse accepted platform financial/geography authority rather than create a Rate Card-only mapping.

A later localized FX display layer may show Brand/Creator viewers approximate converted amounts while preserving canonical commercial currency. That capability is a separate future requirement and is not assumed to exist in V0.

---

## 10. Preferred payment terms

Rate Card V0 includes standard/preferred payment terms and converges with current Brand Campaign commercial structure.

### 10.1 Advance percentage

Creator selects one preferred standard value from the current accepted Campaign set:

```text
0%
25%
50%
75%
100%
```

### 10.2 Balance / payout term

Creator selects one preferred standard net term from the current Create Campaign set:

```text
NET_7
NET_15
NET_30
NET_45
NET_60
```

`IMMEDIATE` is not a selectable Creator Rate Card term while it is not selectable in current Create Campaign authority.

### 10.3 Supersession

These are Creator standard/preferred terms only.

When the Creator applies to a Campaign:

```text
CAMPAIGN PAYMENT TERMS SUPERSEDE RATE CARD PAYMENT TERMS
```

For a future direct enquiry, the final quote/Collaboration agreement may override the Rate Card preferences by explicit mutual agreement.

---

## 11. Future direct quote / C04 quick action

Rate Card V0 should be structured so future C04 chat can use it as a quote starting point.

Example future flow:

```text
Brand and Creator discuss:
2 Reels + 1 Story

Creator selects:
+ Send Quote

Creator Shop prefills draft using Rate Card starting rates
→ Creator reviews/edits
→ Creator explicitly sends quote
```

Rate Card may assist arithmetic/prefill but must never auto-send or auto-lock commercial terms.

If requested scope differs from the Rate Card reference scope, the Creator must be able to adjust the draft quote before sending.

The accepted quote/final C04 commercial agreement remains authoritative.

---

## 12. Standard Rate Card terms / explanatory conditions

V0 should show a standardized platform-supplied Rate Card conditions list below the rates.

These are explanatory Product terms, not a substitute for legal Collaboration terms.

Recommended V0 copy semantics:

1. **Rates are indicative starting points.** Listed rates reflect a standard/reference scope and are not binding offers.
2. **Final pricing depends on the brief.** Content length/quantity, production complexity, revisions, turnaround, props/travel, usage rights, paid amplification, exclusivity and other requirements may change the final quote.
3. **Creator retains discretion.** The Creator may accept, reject or counter an opportunity until final commercial terms are mutually accepted.
4. **Campaign terms supersede the Rate Card.** When the Creator applies to a Brand Campaign, that Campaign's commercial terms and payment terms govern the opportunity.
5. **Direct-deal agreement supersedes the Rate Card.** For direct enquiries, the final accepted quote/Collaboration commercial agreement governs.
6. **Rights are explicit.** Link-in-Bio, Partnership/Spark Ad authorization and content usage rights apply only when explicitly included in the final agreement and only for the agreed duration/scope.
7. **Gifting/barter is optional.** Being open to gifting/barter means the Creator is willing to consider such opportunities, not obligated to accept them.
8. **Rate Card changes are prospective.** Updating the Rate Card affects future opportunities and must never mutate historical Applications or locked Collaborations.
9. **Payment terms are preferences.** Rate Card payment terms are the Creator's standard preference and may be superseded by Campaign/final agreement terms.

V0 does not allow arbitrary Creator-authored legal T&C text.

---

## 13. Media Kit boundary

Rate Card owns:

```text
what I offer
my baseline starting rates
my standard payment preferences
my standard add-on/right availability
```

Media Kit later owns whether/how the Rate Card is exposed to eligible Brands.

No per-item public/private visibility belongs in Rate Card V0.

---

## 14. Marketplace / recommendation boundary

Future Marketplace may use Rate Card data for advisory commercial-fit or expected-economics ranking.

However:

```text
RATE CARD ABOVE CAMPAIGN OFFER
!=
CREATOR INELIGIBLE
```

The Creator must not be discouraged or blocked from applying solely because their published starting rate is higher than a Campaign's current commercial offer.

Rate mismatch may be explanatory/advisory only unless a later explicit Marketplace Product decision creates a different rule.

---

## 15. V2 packages

Packages are not part of V0.

V2 may let Creator compose packages from the same canonical commercial atoms, for example:

```text
2 × Reel
3 × Story
Link in Bio / 7 days
Partnership Ad / 30 days
Content usage rights / duration
```

and set either an overall discount or package starting price.

The detailed V2 package requirement is parked separately in the future-requirements branch.

---

## 16. Explicit V0 exclusions

Rate Card V0 excludes:

- fixed-rate posture;
- multiple duration tiers per item;
- Story bundles as a separate atomic item;
- Creator-built packages;
- minimum project fee;
- Creator-entered Rate Card currency;
- multiple Rate Card currencies;
- automatic FX mutation of canonical prices;
- item-level visibility/privacy;
- arbitrary Creator-authored legal T&C;
- payment-provider execution;
- bank/KYC mutation;
- shipping details;
- custom taxes/withholding logic;
- exclusivity pricing;
- detailed multi-channel usage-right pricing;
- travel/in-person shoot pricing;
- rush fees;
- automatic Campaign eligibility blocking based on Rate Card;
- automatic quote sending;
- direct C04 implementation.

---

## 17. Product acceptance criteria

Rate Card V0 is Product-acceptable only when:

1. every enabled monetary item uses `Starting from` semantics;
2. Creator may enable/disable atomic items without creating a binding commercial offer;
3. Campaign commercial and payment terms always supersede Rate Card when applying to Campaigns;
4. Rate Card mismatch does not block Campaign application;
5. Reel, Story, Carousel, Photoshoot/static creation and UGC Video Product needs are represented, with UGC domain mapping explicitly reconciled before implementation;
6. Link-in-Bio has one starting amount plus one positive duration;
7. Partnership/Spark Ad has one starting amount plus one positive authorization duration;
8. Content usage rights expose YES/NO plus optional positive duration and are never implicitly granted;
9. gifting/barter preference is projected from canonical Work Preferences;
10. currency is auto-resolved, not manually entered;
11. preferred payment terms use accepted Campaign advance-percentage and net-term vocabulary;
12. standardized conditions make Rate Card's non-binding/reference nature clear;
13. Rate Card changes do not mutate existing Applications/Collaborations;
14. structure can later seed an editable Creator quote without auto-sending it;
15. Media Kit visibility remains outside Rate Card ownership.

---

## 18. Authority / next boundary

```text
CREATOR_RATE_CARD_V0_PRODUCT = FROZEN

WORK_PREFERENCES_GIFTING_BARTER_AMENDMENT = FROZEN

RATE_CARD_PACKAGES = DEFERRED_V2

LOCALIZED_FX_DISPLAY = DEFERRED_FUTURE_REQUIREMENT

CAMPAIGN_NDA_REQUIREMENT = SEPARATE FUTURE BRAND REQUIREMENT

TECHNICAL CURRENT-STATE / REUSE PREFLIGHT = NOT YET AUTHORIZED BY THIS DOCUMENT ALONE
```

The future technical preflight must specifically reconcile the UGC Video Product requirement and Rate Card presentation categories against the current frozen Campaign/Brief/Deliverable domain before implementation.
