# Creator Commercial Setup / Work Preferences V0 + Rate Card V0 — Product Amendment 1: Country and Currency Authority

`CREATOR_COMMERCIAL_SETUP_AND_RATE_CARD_V0_PRODUCT_AMENDMENT_1_COUNTRY_CURRENCY_AUTHORITY`

## 1. Status

```text
PRODUCT_AMENDMENT = FROZEN
SCOPE = BASE_COUNTRY_AUTHORITY + RATE_CARD_CURRENCY_TRANSITION
WORK_PREFERENCES_V2 = OTHERWISE_UNCHANGED
RATE_CARD_V2 = OTHERWISE_UNCHANGED
KYC_IMPLEMENTATION = NOT_AUTHORIZED
C04_CHANGE = NOT_AUTHORIZED
```

This amendment resolves `RATE_CARD_CURRENCY_AUTHORITY_REQUIRED` from the first autonomous P0 run.

## 2. Canonical base-country authority order

Use the highest available valid authority:

```text
1. VERIFIED_KYC
2. VALIDATED_PAYOUT_BANK_PROFILE
3. CREATOR_DECLARED_BASE_COUNTRY
```

`VALIDATED_PAYOUT_BANK_PROFILE` means the canonical country accepted by the Settings / Creator Payout authority. Raw, incomplete, rejected, or merely client-entered bank data is not authoritative.

Audience geography, Instagram geography, inferred location, shipping address, Campaign target geography, and IP/device location are not base-country authority.

## 3. Current V0 behavior before KYC exists

KYC is not implemented in this packet. Until verified KYC exists, base country is changeable.

When no valid bank/payout country exists:

```text
BASE_COUNTRY_SOURCE = CREATOR_DECLARED
COMMERCIAL_SETUP_EDIT = ALLOWED
```

When a valid bank/payout country exists:

```text
BASE_COUNTRY_SOURCE = PAYOUT_BANK
EFFECTIVE_BASE_COUNTRY = VALIDATED_BANK_COUNTRY
COMMERCIAL_SETUP_CONFLICTING_OVERRIDE = NOT_ALLOWED
CHANGE_PATH = SETTINGS / PAYOUT BANK DETAILS
```

The Creator can still change country before KYC, but an authoritative bank-backed country must be changed through its owning Settings/Payout surface. Commercial Setup must not create a contradictory manual override.

If the bank-backed authority becomes unavailable before KYC, the system may fall back to the last explicitly confirmed Creator-declared country. It must label the authority truthfully and must not infer a country from a deleted or invalid bank record.

## 4. Future KYC behavior

Once verified KYC is implemented and available:

```text
BASE_COUNTRY_SOURCE = VERIFIED_KYC
EFFECTIVE_BASE_COUNTRY = VERIFIED_KYC_COUNTRY
COMMERCIAL_SETUP_EDIT = DISABLED
LOWER_AUTHORITY_OVERRIDE = PROHIBITED
```

If KYC country differs from the current bank-backed or Creator-declared country, KYC overwrites the effective canonical base country.

A later change requires the separately governed KYC correction/remediation flow. Commercial Setup must not provide a bypass.

This amendment freezes precedence only. It does not authorize a KYC schema, provider, workflow, UI, or verification claim in V0.

## 5. C04 and payout boundary

From agreement onward, C04 cannot proceed without the required canonical bank/payout details.

```text
C04 PAYOUT-READINESS GATE = PRESERVED
GATE OWNER = C04 + SETTINGS/PAYOUT AUTHORITY
COMMERCIAL SETUP = READ-ONLY READINESS PROJECTION
```

Commercial Setup must not reproduce or independently enforce a second agreement/payout state machine. If KYC later changes country and makes existing bank details incompatible, canonical payout readiness must degrade through its owning module and C04 remains blocked until that owner resolves the bank setup.

## 6. Canonical Rate Card currency

Rate Card currency is derived from the effective base country, never manually selected.

For V0, reuse the accepted current geographic resolver:

```text
IN → INR
US → USD
REST_OF_WORLD → USD
```

Do not add FX conversion or a Rate Card-only mapping.

## 7. Country change when currency does not change

When the effective country changes but the resolved Rate Card currency remains the same:

```text
COUNTRY = UPDATED
CURRENCY = UNCHANGED
MONETARY RATES = PRESERVED
NON-MONETARY TERMS = PRESERVED
AUDIT = REQUIRED
```

Example: `US → GB` remains `USD`; valid USD rates remain current.

## 8. Creator-declared country change when currency changes

When a Creator-declared change would alter currency and current monetary Rate Card values exist:

1. show an explicit warning before mutation;
2. require an explicit server-validated confirmation flag;
3. without confirmation, reject atomically and change nothing;
4. on confirmation, update country and Rate Card in one transaction;
5. derive the new currency;
6. disable and clear current monetary lines for Reel, Story, Carousel, Photoshoot/static, Link in Bio, and Partnership Ads;
7. preserve currency-independent usage-right availability/duration and payment-term preferences;
8. require the Creator to enter new monetary rates.

The cleared values remain only in immutable prior revision/audit history. They are not current, converted, relabelled, or consumable.

If no current monetary values exist, no reset confirmation is required.

## 9. Higher-authority country overwrite when currency changes

When validated bank/payout authority or future verified KYC overwrites country and changes resolved currency:

```text
AUTHORITATIVE COUNTRY UPDATE = MUST PROCEED
FX = NONE
SILENT CURRENCY RELABEL = PROHIBITED
CURRENT MONETARY LINES = DISABLED + CLEARED
PRIOR VALUES = IMMUTABLE HISTORY ONLY
NON-MONETARY TERMS = PRESERVED
CREATOR NOTIFICATION = REQUIRED WHEN THE EVENT PATH EXISTS
```

The authoritative update must not be blocked by stale rates. If the owning Settings/KYC flow can show a pre-commit warning, it should. Absence of that UI in V0 must not cause Commercial Setup to invent a mutation surface.

## 10. Transaction, concurrency, and audit requirements

Any change that affects both base country and Rate Card currency must be atomic.

Require:

- current Work Preferences revision;
- current Rate Card revision when one exists;
- idempotent request identity;
- tenant and Creator isolation;
- immutable audit origin;
- old/new authority source;
- old/new country;
- old/new currency;
- identifiers of cleared monetary lines;
- no current partial state in which new country is paired with usable old-currency amounts.

A stale revision rejects the complete transaction.

## 11. Read and UI projection

Commercial Setup may project:

```text
effectiveBaseCountry
baseCountrySource = CREATOR_DECLARED | PAYOUT_BANK | VERIFIED_KYC
baseCountryEditable
canonicalRateCardCurrency
```

For V0, `VERIFIED_KYC` is a reserved future authority state only and must never be fabricated.

When source is `PAYOUT_BANK`, explain that country is controlled by bank/payout setup and link to the existing owner where possible. When source is future `VERIFIED_KYC`, display it as verified and locked.

Do not expose bank account details, KYC documents, provider payloads, or private audit internals.

## 12. Product examples

### India manual profile → UK manual profile

```text
INR → USD
EXISTING MONETARY RATES = CLEAR AFTER EXPLICIT CONFIRMATION
```

### United States → United Kingdom

```text
USD → USD
EXISTING MONETARY RATES = PRESERVE
```

### Manual India → validated US bank profile

```text
PAYOUT_BANK OVERRIDES CREATOR_DECLARED
INR → USD
AUTHORITATIVE COUNTRY UPDATE PROCEEDS
MONETARY RATES CLEAR WITHOUT FX OR RELABEL
```

### Future verified KYC India conflicts with US bank profile

```text
VERIFIED_KYC OVERRIDES PAYOUT_BANK
BASE COUNTRY = IN
CURRENCY = INR
USD MONETARY RATES CLEAR
PAYOUT READINESS MAY DEGRADE IN ITS OWNING MODULE
C04 REMAINS GATED BY CANONICAL PAYOUT READINESS
```

## 13. Explicit non-authorizations

This amendment does not authorize:

- KYC implementation;
- bank-details editing in Commercial Setup;
- C04 or payout-state-machine changes;
- foreign-exchange conversion;
- multiple active Rate Card currencies;
- manual currency choice;
- restoration of cleared values as current;
- inferred geography as authority;
- Audience V1, Portfolio, or Media Kit work.

## 14. Execution disposition

```text
RATE_CARD_CURRENCY_AUTHORITY_REQUIRED = RESOLVED
P0_RECOVERY = AUTHORIZED_BY_SEPARATE RUNNER PROMPT
P1–P4 = PROHIBITED UNTIL RECOVERED P0 PASSES
```
