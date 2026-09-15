# Creator Centre — Commercial Setup / Work Preferences V0 Product Decision Register V2

`CREATOR_COMMERCIAL_SETUP_WORK_PREFERENCES_V0_PRODUCT_DECISION_REGISTER_V2`

Date: 2026-09-15  
Status: **PRODUCT_FROZEN_FOR_V0**  
Implementation: **NOT_AUTHORIZED_BY_THIS DOCUMENT ALONE**

Supersedes and consolidates:

- `CREATOR_COMMERCIAL_SETUP_WORK_PREFERENCES_V0_PRODUCT_DECISION_REGISTER_V1`;
- `CREATOR_COMMERCIAL_SETUP_WORK_PREFERENCES_V0_PRODUCT_AMENDMENT_1_GIFTING_BARTER`;
- `CREATOR_COMMERCIAL_SETUP_WORK_PREFERENCES_V0_PRODUCT_AMENDMENT_2_UGC_PROJECTS`.

Those documents remain historical evidence. This V2 register is the single current Product authority for Commercial Setup / Work Preferences V0.

Rate Card remains separately governed by:

`CREATOR_COMMERCIAL_SETUP_RATE_CARD_V0_PRODUCT_DECISION_REGISTER_V1`.

---

## 0. V2 consolidation result

V2 makes no broad redesign of Commercial Setup.

It:

1. consolidates the base register and both frozen amendments;
2. freezes the initial Availability state as `ACCEPTING_COLLABORATIONS`;
3. preserves the authorized C04 payout-readiness gate without redefining or duplicating it;
4. preserves Settings — Creator ownership of roles and permissions;
5. preserves intentional KYC `COMING SOON` behavior;
6. leaves Rate Card Product authority separate.

No other V0 Product behavior is changed.

---

## 1. Purpose

Commercial Setup helps the Creator tell Creator Shop:

> how they want to work with Brands, and whether they are operationally ready when a commercial opportunity progresses.

It is a Creator business-operation surface, not a replacement for Settings, Payouts, Campaign or Collaboration.

---

## 2. Durable Creator Centre placement

```text
Creator Centre
├── Insights
│   ├── Audience
│   └── Content
├── Creator Brand
├── Portfolio
├── Commercial Setup
│   ├── Work Preferences / Operational Readiness
│   └── Rate Card
└── Media Kit
```

Work Preferences and Rate Card are distinct internal Commercial Setup sections.

Exact visual layout is not frozen here.

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

UGC and gifting/barter are adjacent Creator preference questions.

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
CREATOR BASE COUNTRY
!=
AUDIENCE COUNTRY
```

V0 does not force this question into early Creator onboarding solely to enter the product.

Later consumers may use base country for commercial defaults such as currency, provider/payout eligibility, physical-product logistics and Marketplace eligibility, subject to their own authority.

Rate Card owns the separate question of how country changes interact with canonical currency and existing numerical rates.

---

## 5. International Brand preference

V0 uses:

```text
Open to international Brands
YES / NO
```

No granular country-by-country Brand-market allowlist is required in V0.

This is a Creator preference, not an automatic legal, payment, provider or Marketplace eligibility claim.

---

## 6. Industry preferences and exclusions

V0 supports both:

```text
Preferred industries
```

and optional:

```text
Industries I do not work with
```

Their semantics remain distinct:

```text
PREFERRED
!=
REQUIRED

NOT PREFERRED
!=
EXCLUDED
```

Preferred industries may guide future discovery and matching but do not silently become hard eligibility filters.

Explicit exclusions may act as hard Creator preference constraints only where a later consumer is authorized to use them.

The implementation should reuse accepted platform industry vocabulary where meaning survives. These fields are not Creator Brand niches and must not be persisted as though the two concepts were interchangeable.

---

## 7. Availability

V0 freezes exactly three Creator-facing states:

```text
ACCEPTING_COLLABORATIONS

PAUSED_UNTIL <date>

NOT_ACCEPTING_NEW_COLLABORATIONS
```

### Initial state

Before the Creator has configured Commercial Setup:

```text
AVAILABILITY
= ACCEPTING_COLLABORATIONS
```

This default applies only to Availability. It does not create implicit answers for other Creator preference fields.

Availability governs new opportunities only.

It does not pause, cancel, alter or excuse obligations in any existing Campaign participation or Collaboration.

```text
AVAILABILITY
= NEW-OPPORTUNITY PREFERENCE

NOT
= CURRENT COLLABORATION LIFECYCLE STATE
```

Later Marketplace, Media Kit or direct-enquiry consumers may use Availability subject to their own Product authority.

---

## 8. Physical-product collaborations

V0 asks:

```text
Physical-product collaborations
YES / NO
```

This records willingness to consider opportunities requiring physical-product fulfillment.

The Creator's shipping address does not belong in Commercial Setup.

Creator Settings remains canonical owner of the default shipping destination.

For an actual physical Collaboration:

```text
Settings default destination
→ Creator confirms / overrides for the Collaboration
→ Collaboration stores its immutable execution copy
```

Commercial Setup may project shipping readiness but must not expose or edit the address.

---

## 9. UGC project preference

V0 asks, next to gifting/barter:

```text
Open to UGC projects
YES / NO
```

`YES` means the Creator is willing to consider work where Creator-produced content is delivered for Brand use and publication on the Creator's own social handle is not required.

`NO` means Creator Shop must not proactively treat UGC opportunities as preferred or suitable for that Creator.

UGC is not a separate Deliverable format or separate Campaign domain.

It is a use case of the existing:

```text
Campaign
→ Brief
→ Deliverable
```

construct, with publishing applicability determined by the actual opportunity.

For UGC projects, content usage rights apply by default. Exact scope, duration, paid amplification and other rights remain opportunity/agreement-specific and must be explicit in final Campaign, quote and Collaboration terms.

```text
OPEN_TO_UGC_PROJECTS
!=
AUTOMATIC ACCEPTANCE

OPEN_TO_UGC_PROJECTS
!=
SEPARATE DELIVERABLE FORMAT

OPEN_TO_UGC_PROJECTS
!=
FINAL USAGE-RIGHTS AGREEMENT
```

The Rate Card must not create a separate `UGC_VIDEO` item from this preference.

---

## 10. Gifting / barter preference

V0 asks:

```text
Open to gifting / barter collaborations
YES / NO
```

`YES` means the Creator is willing to consider opportunities where non-cash Brand consideration such as product or gifting is a material part of the proposition.

`NO` means Creator Shop must not proactively treat gifting/barter opportunities as preferred or suitable for that Creator.

This is a preference, not a binding commitment and not a new canonical Campaign compensation rail.

```text
OPEN_TO_GIFTING_BARTER
!=
AUTOMATIC ACCEPTANCE

OPEN_TO_GIFTING_BARTER
!=
CAMPAIGN COMMERCIAL TERMS
```

Cash compensation and non-cash consideration remain distinct. A specific Campaign's commercial terms remain authoritative.

Rate Card and Media Kit may project this canonical preference but must not create another owned copy.

---

## 11. Operational readiness projection

Commercial Setup shows operational readiness without owning the underlying sensitive records.

### 11.1 Shipping setup

Project truthful Settings-owned readiness, for example:

```text
Shipping setup
READY | NEEDS_SETUP
```

A Manage in Settings deep link may be shown.

Do not copy, expose or edit the address in Commercial Setup.

### 11.2 Payout / bank setup

Project canonical Creator Settings / Creator Payouts readiness, using the canonical state vocabulary where available.

Creator-facing status may be presented as:

```text
Payout setup
READY | NEEDS_SETUP | PROVIDER_REVIEW | UNAVAILABLE
```

A relevant Settings or Payouts deep link may be shown.

The paid-Collaboration payout-readiness gate is already authorized by C04 authority. Commercial Setup does not re-authorize, redefine or independently implement it.

```text
COMMERCIAL SETUP
= READINESS PROJECTION

C04
= AUTHORIZED COLLABORATION GATE OWNER
```

### 11.3 KYC

KYC is intentionally rendered as:

```text
KYC
COMING SOON
```

No KYC data collection, provider mutation or verification workflow is authorized by this register.

If there is a suitable Creator Settings landing location, the row may deep-link to Settings. Otherwise it remains non-actionable.

Future KYC execution remains owned by Settings, Payouts and compliance authority; Commercial Setup continues to be a projection surface.

---

## 12. Ownership boundaries

Commercial Setup owns Creator work preferences.

It does not own or duplicate:

- shipping addresses;
- payout or bank-account details;
- KYC documents or verification execution;
- legal identity;
- provider credentials;
- OAuth or social-connection state;
- Campaign commercial terms;
- Collaboration agreement truth;
- Rate Card pricing;
- Media Kit presentation.

One UI may compose projections from multiple canonical owners without duplicating mutation authority.

Roles and permissions are owned by Settings — Creator. This register creates no independent Commercial Setup role matrix.

---

## 13. Preference versus eligibility

Product must preserve:

```text
WANTS TO
!=
CAN
```

Examples:

- willingness to work with international Brands is a preference;
- payment/provider support is platform eligibility;
- physical-product willingness is a preference;
- UGC and gifting/barter willingness are preferences;
- a valid destination for one Collaboration is an operational requirement;
- final Campaign and Collaboration terms remain opportunity-specific authority.

Marketplace, matching and downstream consumers must not collapse preference and eligibility into one field.

---

## 14. Downstream boundaries

### Campaign and Collaboration

Specific Campaign commercial terms supersede preferences.

Accepted Collaboration truth supersedes generic preferences for that Collaboration.

Availability changes do not mutate active Applications or Collaborations.

### Rate Card

Rate Card owns standard/reference offerings, starting prices and standard payment preferences.

It may project Work Preferences but must not duplicate their canonical storage.

### Media Kit

Media Kit may choose whether and how eligible Commercial Setup information is presented to Brands.

It does not become the canonical owner of the preferences.

### Marketplace / AI Match

Later matching may consume preferences only under its own Product authority.

A preference is not automatically a ranking rule, eligibility rule or hard filter unless that consumer explicitly authorizes the behavior.

---

## 15. Explicit V0 deferrals

Commercial Setup / Work Preferences V0 does not freeze:

- granular country or market allowlists;
- travel willingness;
- in-person shoot radius;
- working hours;
- calendar scheduling;
- Creator lead-time SLA;
- Creator-declared maximum collaboration capacity;
- agency representation;
- tax profile;
- market-specific pricing or currencies;
- KYC workflow, provider or schema;
- payout-provider enablement;
- bank-account mutation UI;
- Media Kit projection design;
- Marketplace or AI Match ranking behavior.

Rate Card pricing semantics remain separately frozen and are not a Work Preferences open decision.

---

## 16. Product acceptance criteria

Commercial Setup / Work Preferences V0 is Product-conformant only if:

1. initial Availability is `ACCEPTING_COLLABORATIONS`;
2. Creator can set base country when configuring Commercial Setup;
3. Creator can set international-Brand willingness to YES or NO;
4. preferred and excluded industries retain different meanings;
5. Creator can select exactly one of the three Availability states;
6. `PAUSED_UNTIL` supports a date;
7. Availability affects only new opportunities and never mutates existing Collaboration obligations;
8. Creator can set physical-product willingness to YES or NO;
9. Creator can set UGC-project willingness to YES or NO without introducing a UGC Deliverable type;
10. Creator can set gifting/barter willingness to YES or NO without introducing a barter compensation rail;
11. UGC rights apply by default while exact final rights remain agreement-specific;
12. shipping readiness is projected without exposing or mutating the address;
13. payout/bank readiness is projected from canonical Settings/Payout authority;
14. Commercial Setup does not duplicate the C04-authorized payout-readiness gate;
15. KYC intentionally appears as `COMING SOON`;
16. Commercial Setup does not create duplicate mutation surfaces for Settings, Shipping, Payouts or KYC;
17. role authority remains with Settings — Creator;
18. preference and eligibility remain separate.

---

## 17. Authority conclusion

```text
COMMERCIAL_SETUP_WORK_PREFERENCES_V0_PRODUCT
= FROZEN_V2

INITIAL_AVAILABILITY
= ACCEPTING_COLLABORATIONS

UGC_PROJECT_PREFERENCE
= FROZEN

GIFTING_BARTER_PREFERENCE
= FROZEN

UGC_DELIVERABLE_TYPE
= NO

COMMERCIAL_SETUP_ROLES
= SETTINGS_CREATOR_AUTHORITY

KYC_PRESENTATION
= COMING_SOON

PAYOUT_READINESS_GATE
= AUTHORIZED_AND_OWNED_BY_C04
  NOT_DUPLICATED_HERE

RATE_CARD_PRODUCT
= SEPARATE_FROZEN_REGISTER

IMPLEMENTATION
= NOT_AUTHORIZED_BY_THIS DOCUMENT ALONE
```

No Product decision remains open for Commercial Setup / Work Preferences V0.
