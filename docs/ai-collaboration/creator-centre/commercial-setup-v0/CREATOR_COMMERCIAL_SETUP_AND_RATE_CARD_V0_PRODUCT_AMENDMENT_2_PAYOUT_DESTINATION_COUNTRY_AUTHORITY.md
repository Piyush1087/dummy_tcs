# Creator Commercial Setup / Work Preferences V0 + Rate Card V0 — Product Amendment 2: Payout-Destination Country Authority

`CREATOR_COMMERCIAL_SETUP_AND_RATE_CARD_V0_PRODUCT_AMENDMENT_2_PAYOUT_DESTINATION_COUNTRY_AUTHORITY`

## 1. Correction purpose

This amendment corrects one over-constrained interpretation in Product Amendment 1.

Parent authority stated:

```text
VERIFIED KYC = FIRST BASE-COUNTRY AUTHORITY WHEN BUILT
BANK DETAILS = SECOND BASE-COUNTRY AUTHORITY
CREATOR-DECLARED COUNTRY = CURRENT FALLBACK
```

Product Amendment 1 incorrectly narrowed the second source to a separately provider-validated bank-country assertion. That assertion does not exist in the accepted C05/C06 runtime and was not required by Parent.

This amendment supersedes only the phrase `VALIDATED_PAYOUT_BANK_PROFILE` and its validation requirement. Every other country/currency transition rule in Product Amendment 1 remains frozen.

## 2. Correct canonical precedence

```text
1. VERIFIED_KYC
2. ACTIVE_CANONICAL_BANK_DESTINATION
3. CREATOR_DECLARED_BASE_COUNTRY
```

For current V0, KYC has no producer and must never be fabricated.

## 3. Active canonical bank destination

`ACTIVE_CANONICAL_BANK_DESTINATION` means the Settings/Payout-owned record that is:

- owned by the exact Creator;
- the single current primary payout destination;
- not disabled or replaced;
- a bank-account destination;
- identified by exact destination ID and destination version;
- carrying a valid ISO country and canonical currency;
- consistent with the current Settings-owned legal profile country and payee type when that legal profile exists.

The authority claim is limited to:

```text
THIS IS THE COUNTRY DECLARED IN THE CREATOR'S
CURRENT CANONICAL BANK/PAYOUT DESTINATION
```

It does not claim that the bank account, identity, KYC, provider onboarding, or transfer rail is verified or ready.

## 4. Separation from payout readiness

Country authority is independent of transfer eligibility.

Therefore none of these is required to use the active bank destination's country:

- `READY` transfer status;
- `BANK_VALIDATED` profile status;
- cooling-period completion;
- provider-product readiness;
- C04 agreement/payout eligibility.

Conversely, a country-authority projection must not imply any of those states.

Do not combine a profile-level bank-validation flag with a destination country. Do not use stale provider evidence after destination replacement.

## 5. Exact fence and truth states

The Settings/Payout-owned non-secret read contract must return exactly one of:

```text
AVAILABLE
ABSENT
CONFLICT
```

### AVAILABLE

Return only:

- Creator profile ID;
- destination reference;
- destination version;
- country code;
- currency code;
- destination state;
- legal-profile version when used for consistency;
- deterministic authority fingerprint;
- observed timestamp.

No bank number, account holder details, encrypted payload, provider reference, masked account, or provider diagnostics may cross this boundary.

### ABSENT

Use when no active primary bank-account destination exists. Commercial Setup falls back to Creator-declared base country.

### CONFLICT

Use when authority cannot be selected safely, including:

- multiple active primary destinations;
- invalid country/currency;
- bank destination and legal-profile country/payee mismatch;
- an unresolved destination/version inconsistency.

On `CONFLICT`, do not silently fall back to manual country. Fail closed, make monetary rates unavailable to consumers, and direct Owner/Manager to Settings/Payouts.

## 6. Replacement and disable behavior

Replacement creates a new destination/version authority fingerprint. Prior destination authority immediately becomes stale.

Disabling/removing the active bank destination changes authority to:

```text
CREATOR_DECLARED_BASE_COUNTRY
```

The declared country remains editable. If the authority change alters currency, apply the existing no-FX monetary-reset rules from Amendment 1.

## 7. Rate Card authority fingerprint

Every Rate Card revision must bind its currency to the exact effective-country authority used when it was created or confirmed.

The non-secret fingerprint must identify:

```text
SOURCE
SOURCE_REFERENCE
SOURCE_VERSION
COUNTRY
CURRENCY
```

For manual authority, source reference/version binds the exact Work Preferences revision. For bank authority, it binds the exact destination ID/version and relevant legal-profile version. Future KYC will bind its separately governed verified record/version.

Every Rate Card consumer must compare the stored fingerprint with current effective authority.

## 8. Fail-closed mismatch behavior

If the current authority fingerprint differs from the Rate Card fingerprint:

- old monetary values are not current or consumable;
- no old amount may be returned under the new currency;
- no FX or silent relabelling occurs;
- the consumer projects `MONETARY_RATES_REQUIRE_REENTRY`;
- currency-independent usage-right and payment preferences may remain available;
- Owner/Manager can reconcile by accepting the authoritative country/currency and entering new monetary values;
- Assistant remains read-only.

The application may perform immediate reconciliation from an existing Settings mutation only if it can reuse a safe shared transaction boundary. Otherwise fingerprint mismatch plus fail-closed consumer projection is the required V0 safety mechanism. Do not build a second scheduler or mutate on GET.

## 9. C04 boundary

C04 agreement-onward bank/payout gating remains independent and unchanged.

```text
BANK COUNTRY AUTHORITY != PAYOUT READY
BANK COUNTRY AUTHORITY != C04 AGREEMENT ELIGIBLE
```

Commercial Setup projects readiness only. It neither weakens nor duplicates the C04 gate.

## 10. KYC boundary

Future verified KYC remains the highest authority and will overwrite the effective country. Its fingerprint invalidates lower-authority Rate Card monetary values when currency changes.

No KYC producer, schema, workflow, verification, or UI is authorized now.

## 11. Current implementation direction

Reuse current canonical Settings/Payout destination and legal-profile persistence. Add the smallest provider-neutral, non-secret read port and Rate Card fingerprint necessary for this consumer.

```text
C06 SCHEMA CHANGE = NOT EXPECTED
C06 TRANSFER-READINESS CHANGE = PROHIBITED
SETTINGS PAYOUT MUTATION CHANGE = NOT REQUIRED BY DEFAULT
RATE_CARD SCHEMA = MAY STORE AUTHORITY FINGERPRINT
```

If implementation proves a C06 schema/migration or payout-state-machine change is unavoidable, stop for technical scope review.

## 12. Resolution

```text
VALIDATED_PAYOUT_COUNTRY_OWNER_CONTRACT_REQUIRED = RESOLVED
SECOND AUTHORITY = ACTIVE_CANONICAL_BANK_DESTINATION
TRANSFER READINESS COUPLING = PROHIBITED
P0 RECOVERY = AUTHORIZED BY SEPARATE PROMPT
```
