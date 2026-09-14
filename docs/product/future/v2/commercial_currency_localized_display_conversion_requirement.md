# Localized Commercial Currency Display / Conversion — Future Requirement

STATUS = DEFERRED_FUTURE_REQUIREMENT

## Why this is recorded

Current accepted Campaign authority keeps Campaign commercial amounts in the canonical Campaign currency and does not currently establish viewer-localized FX conversion as canonical Product behavior.

Creator Rate Card V0 should therefore not assume that such a conversion layer already exists.

## Future Product intent

Creator Shop should be able to show commercial amounts to Brand and Creator users in a familiar/local supported display currency while preserving one authoritative canonical commercial currency and amount for each Rate Card, Campaign, quote and Collaboration agreement.

Example future behavior:

```text
Creator canonical Rate Card amount = INR 50,000
Brand viewing from supported USD market = approximate/local display in USD

Campaign canonical amount = USD 600
Creator viewing from supported INR market = approximate/local display in INR
```

The localized display must never mutate or replace the canonical amount used for offers, negotiation, agreement, ledger, payout or legal/commercial execution.

## Future requirements to freeze

A later Product/financial architecture phase must define:

- supported canonical currencies;
- user/organization display-currency resolution;
- FX provider/source;
- rate timestamp and freshness policy;
- rounding rules;
- display copy such as `approx.` / `converted from`;
- whether both canonical and converted values are always visible;
- behavior when FX data is stale/unavailable;
- treatment at quote/agreement lock;
- historical reproducibility of displayed conversion where legally/audit-relevant;
- separation between display conversion and actual settlement/payout conversion;
- Creator Rate Card, Campaign, Marketplace, Media Kit, direct enquiry and C04 integration.

## Invariant

```text
DISPLAY CURRENCY
!=
CANONICAL COMMERCIAL CURRENCY
```

No consumer may silently use a localized display amount as the contractual Collaboration amount.

## Current disposition

```text
RATE CARD V0 MAY AUTO-RESOLVE ITS CANONICAL CURRENCY FROM CREATOR COUNTRY / LATER KYC
VIEWER-LOCALIZED FX DISPLAY = NOT FROZEN / NOT AUTHORIZED HERE
```
