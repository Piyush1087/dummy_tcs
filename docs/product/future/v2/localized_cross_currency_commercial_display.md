# Localized Cross-Currency Commercial Display — Future Requirement

STATUS = DEFERRED_FUTURE_REQUIREMENT

## Purpose

Allow Brand and Creator users to view commercial amounts in a familiar/local display currency while preserving one authoritative canonical commercial currency and amount for each Campaign, Rate Card, quote and Collaboration agreement.

This requirement is separate from Rate Card V0 and is not assumed to exist in the current application.

## Current authority constraint

Current Campaign Product authority preserves Campaign commercial currency as canonical and does not authorize silently converting the canonical fee into the Creator's local currency.

Therefore any future FX capability must be a display/projection layer, not a mutation of canonical commercial truth.

## Future Product intent

Conceptually:

```text
CANONICAL COMMERCIAL AMOUNT
+ canonical currency
        ↓
authoritative transaction/agreement truth

OPTIONAL LOCALIZED DISPLAY
+ viewer currency
+ FX rate/source
+ conversion timestamp
        ↓
approximate/read-only convenience projection
```

Examples may include:

- Brand sees Creator Rate Card reference values in Brand-facing display currency;
- Creator sees Campaign/reference values in Creator-facing display currency;
- original canonical currency and amount remain visible or otherwise unambiguous;
- accepted quote / Collaboration locks one canonical commercial currency rather than depending on a volatile display conversion.

## Required future decisions

Future Product/financial architecture must define:

- supported canonical currencies;
- supported display currencies;
- FX provider/source;
- rate refresh cadence;
- timestamp and stale-rate behavior;
- rounding rules;
- whether taxes/fees are converted or independently calculated;
- legal/payment implications;
- offline/failure behavior;
- auditability;
- copy distinguishing approximate display from authoritative contractual amount.

## Non-goals

This requirement does not authorize:

- automatic mutation of Campaign commercial currency;
- automatic mutation of Creator Rate Card canonical currency;
- FX trading/hedging;
- settlement conversion;
- multi-currency Collaboration agreements;
- silent conversion without provenance.
