# Creator Centre — Commercial Setup / Work Preferences V0 Product Decision Register

`CREATOR_COMMERCIAL_SETUP_WORK_PREFERENCES_V0_PRODUCT_DECISION_REGISTER_V1`

STATUS = PRODUCT_FROZEN_FOR_V0

IMPLEMENTATION = NOT_AUTHORIZED_BY_THIS DOCUMENT ALONE

This document freezes the V0 Product behavior for the **Commercial Setup / Work Preferences** surface in Creator Centre.

Creator Settings / Payouts remain canonical owners of sensitive operational data such as shipping destination, payout/bank details and future KYC execution.

Rate Card Product authority is frozen separately in:

`CREATOR_COMMERCIAL_SETUP_RATE_CARD_V0_PRODUCT_DECISION_REGISTER_V1`.

---

## 1. Purpose

Commercial Setup helps the Creator tell Creator Shop:

> how they want to work with Brands, and whether they are operationally ready when a commercial opportunity progresses.

The workspace is a Creator business-operation surface, not a replacement for Settings.

---

## 2. Durable Creator Centre placement

Current top-level direction remains:

```text
Creator Centre
├── Insights
│   ├── Audience
│   └── Content
├── Creator Brand
├── Portfolio
├── Commercial Setup
└── Media Kit
```

Commercial Setup contains Work Preferences plus a lightweight Operational Readiness projection, with Rate Card as a separate internal section.

---

## 3. V0 structure

```text
COMMERCIAL SETUP

WORK PREFERENCES
- Based in
- Open to international Brands
- Preferred industries
- Industries I do not work with
- Availability
- Physical-product collaborations
- Open to UGC projects
- Open to gifting / barter collaborations

OPERATIONAL READINESS
- Shipping setup
- Payout / bank setup
- KYC
```

Exact visual layout is not frozen here.

---

## 4. Base country

V0 requires a Creator base/operating country when the Creator configures Commercial Setup.

Creator-facing concept:

```text
Based in
India
```

This is not Audience geography.

```text
CREATOR BASE COUNTRY != AUDIENCE COUNTRY
```

V0 should not force this question into early Creator onboarding solely to enter the product.

Later consumers may use base country for commercial defaults such as currency, provider/payout eligibility, physical-product logistics and Marketplace eligibility, subject to their own Product authority.

---

## 5. International Brand preference

V0 uses a simple Creator-controlled preference:

```text
Open to international Brands
YES / NO
```

Do not require a granular country-by-country Brand-market allowlist in V0.

Granular preferred Brand markets may be added later if Marketplace or matching Product requirements justify them.

This is a preference, not an automatic legal/payment/platform eligibility claim.

---

## 6. Industry preferences and exclusions

V0 supports both:

```text
Preferred industries
```

and an optional explicit:

```text
Industries I do not work with
```

These semantics remain distinct:

```text
PREFERRED != REQUIRED

NOT PREFERRED != EXCLUDED
```

Preferred industries should guide future discovery/matching but must not silently act as hard eligibility filters.

Explicit excluded industries may act as hard Creator preference constraints where a later consumer is authorized to use them.

Exact industry taxonomy should reuse the platform's accepted/canonical industry vocabulary where possible rather than creating a Creator-only taxonomy.

---

## 7. Availability

V0 freezes exactly three operational states:

```text
ACCEPTING_COLLABORATIONS

PAUSED_UNTIL <date>

NOT_ACCEPTING_NEW_COLLABORATIONS
```

Availability governs **new opportunities**.

It does not pause, cancel, alter or excuse obligations in existing Campaign participation or Collaboration.

```text
AVAILABILITY
= new-opportunity preference

NOT
= current Collaboration lifecycle state
```

A later Marketplace, Media Kit or direct-enquiry consumer may use this state subject to its own Product authority.

---

## 8. Physical-product collaborations

V0 asks only:

```text
Physical-product collaborations
YES / NO
```

This is willingness to participate in collaborations requiring physical-product fulfillment.

The Creator's shipping address does not belong in Commercial Setup.

Creator Settings remains canonical owner of the default shipping destination.

When an actual physical Collaboration requires delivery, the accepted Collaboration rule remains:

```text
Settings default destination
→ Creator confirms / overrides for the Collaboration
→ Collaboration stores its immutable execution copy
```

Commercial Setup may project shipping readiness but must not expose the address itself.

---

## 9. UGC project preference

V0 asks:

```text
Open to UGC projects
YES / NO
```

UGC is **not** a separate deliverable format.

It is a use case of the existing Campaign / Brief / Deliverable construct where publication on the Creator's own social handle is not required.

This preference therefore means:

> I am willing to consider projects where I create Brand-usable content without necessarily publishing it on my own social account.

The Rate Card Product authority owns how this preference interacts with standard commercial baselines and content-right expectations.

Do not create a Creator-only `UGC_VIDEO` deliverable type from this toggle.

`YES` indicates willingness to consider UGC work; it never obligates acceptance of a specific project.

---

## 10. Gifting / barter preference

V0 asks:

```text
Open to gifting / barter collaborations
YES / NO
```

This is a Creator preference, not a separate canonical compensation rail.

Cash compensation and non-cash consideration remain distinct concepts in Campaign / Collaboration commercial authority.

`YES` means the Creator is willing to consider gifted/non-cash opportunities. It does not:

- promise acceptance;
- imply every physical-product Campaign is barter;
- convert gifted value into Creator cash compensation;
- reintroduce a retired `BARTER` rail/model.

This preference may later inform Media Kit and Marketplace consumers subject to their own Product authority.

---

## 11. Operational readiness projection

Commercial Setup V0 shows operational readiness in one section. It does not own the underlying sensitive records.

### 11.1 Shipping setup

Project a truthful status from Creator Settings, for example:

```text
Shipping setup
READY | NEEDS_SETUP
```

A Manage in Settings deep link may be shown.

Do not copy or edit the address in Commercial Setup.

### 11.2 Payout / bank setup

Bank/payout setup is a **critical commercial-readiness dependency**.

Commercial Setup should project the Creator's payout/bank readiness from the canonical Creator Settings / Creator Payouts domain and provide the relevant deep link.

Creator-facing status may be expressed as:

```text
Payout setup
READY | NEEDS_SETUP | PROVIDER_REVIEW | UNAVAILABLE
```

using the canonical underlying readiness vocabulary where available.

Product direction for the later Collaboration/Payout module sweep:

> A Creator should not be allowed to sign/finalize the commercial agreement for a paid Collaboration until the required bank/payout setup is complete.

This enforcement is **NOT implemented or authorized by this document**.

During the upcoming module sweep, C04 Creator Collaboration and the corresponding Brand Collaboration/financial path must be audited. If the pre-agreement gate is not already enforced, Product intends to add it before launch/provider-enabled paid execution.

Commercial Setup therefore treats payout readiness as important now even if the gate is enforced later.

### 11.3 KYC

KYC is **not deferred beyond MVP as a Product concept**.

It is temporarily pending the planned cross-module KYC/compliance sweep.

For this Commercial Setup V0 pass, render a static readiness row:

```text
KYC
COMING SOON
```

No KYC data collection, provider mutation or verification workflow is authorized by this document.

If there is a suitable Creator Settings landing location, the row may deep-link to Settings; otherwise `COMING SOON` may remain non-actionable until the KYC Settings flow exists.

When KYC is implemented, Creator Settings / payout/compliance infrastructure should remain the canonical owner; Commercial Setup should continue to project status rather than become a competing KYC mutation surface.

---

## 12. Settings ownership boundary

Commercial Setup owns Creator work preferences.

It does not become canonical owner of:

- shipping addresses;
- payout/bank account details;
- KYC documents/status execution;
- legal identity;
- provider credentials;
- OAuth/social connection state.

For those domains it may show readiness/status and route to the canonical Settings surface.

One UI may compose multiple canonical owners without duplicating mutation authority.

---

## 13. Preference versus eligibility

Product must preserve the distinction:

```text
WANTS TO
!=
CAN
```

Examples:

- Creator is willing to work with international Brands = preference.
- payment/provider rail supports the transaction = platform eligibility.
- Creator accepts physical-product collaborations = preference.
- Creator is open to UGC or gifting/barter = preference.
- a valid confirmed shipping destination exists for a specific Collaboration = operational requirement.

Later Marketplace/AI Match must not collapse preference and eligibility into one field.

---

## 14. Explicit V0 deferrals

Commercial Setup / Work Preferences V0 does not freeze:

- granular country/market allowlists;
- travel willingness;
- in-person shoot radius;
- working hours;
- calendar scheduling;
- Creator lead-time SLA;
- Creator-declared maximum collaboration capacity;
- agency representation;
- tax profile;
- market-specific pricing/currencies;
- KYC workflow/provider/schema;
- payout-provider enablement;
- bank-account mutation UI;
- Collaboration commercial-agreement gate implementation;
- Media Kit projection;
- Marketplace/AI Match ranking behavior.

Rate Card pricing semantics are frozen separately and are no longer a Work Preferences open decision.

---

## 15. Product-level acceptance criteria

The V0 surface is Product-acceptable only if:

1. Creator can set base country;
2. Creator can set Open to international Brands YES/NO;
3. Creator can select preferred industries and optional excluded industries with distinct semantics;
4. Creator can choose exactly one Availability state and PAUSED_UNTIL supports a date;
5. Creator can set physical-product willingness YES/NO;
6. Creator can set Open to UGC projects YES/NO without creating a new UGC deliverable format;
7. Creator can set Open to gifting/barter collaborations YES/NO without creating a barter compensation rail;
8. availability affects no existing Collaboration state;
9. shipping readiness is projected without exposing/mutating address data;
10. payout/bank readiness is projected from canonical Settings/Payout authority with a Settings deep link where applicable;
11. KYC appears as static `COMING SOON` until the planned KYC sweep authorizes a real flow;
12. Commercial Setup does not create duplicate mutation surfaces for Shipping, Payouts or KYC;
13. preference and eligibility remain separate concepts.

---

## 16. Future mandatory audit note — pre-agreement payout readiness

Record this as a required Product check during the next C04 / Brand Collaboration / Creator Payouts sweep:

```text
PAID COLLABORATION AGREEMENT SIGNING
SHOULD REQUIRE
CREATOR PAYOUT / BANK SETUP READY
```

If the current accepted Collaboration flow permits a paid commercial agreement to become final without required payout/bank readiness, Product intends to introduce a bounded pre-agreement readiness gate.

The exact readiness state, actor behavior, recovery UX and financial-provider semantics must be reviewed against accepted C04/C06/Brand Payouts authority before implementation.

---

## 17. Authority / next boundary

```text
COMMERCIAL_SETUP_WORK_PREFERENCES_V0_PRODUCT = FROZEN

UGC_PROJECT_PREFERENCE = FROZEN

GIFTING_BARTER_PREFERENCE = FROZEN

RATE_CARD_PRODUCT = FROZEN_IN_SEPARATE_REGISTER

KYC_PRODUCT_SWEEP = PLANNED / NOT AUTHORIZED HERE

PRE_AGREEMENT_PAYOUT_READINESS_GATE = PRODUCT_DIRECTION_RECORDED / IMPLEMENTATION_NOT_AUTHORIZED

TECHNICAL PREFLIGHT = NOT YET AUTHORIZED BY THIS DOCUMENT ALONE
```

This Product register may be used later as input to a bounded current-state/reuse/implementation preflight after the current Creator Content V0 implementation program reaches its agreed handoff boundary.
