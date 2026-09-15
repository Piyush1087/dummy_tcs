# Localized Commercial Currency Display / Conversion — Future Requirement

STATUS = DEFERRED_FUTURE_REQUIREMENT

## Purpose

Allow Brand and Creator users to understand commercial values in their own familiar operating currency while preserving one authoritative canonical currency/value for each commercial record.

## Current authority caveat

Current canonical C-03 Campaign authority states that Campaign commercial remains in Campaign currency and is not automatically converted into the Creator's local canonical fee.

Rate Card V0 therefore must not assume a universal localized FX display layer already exists.

## Future Product direction

Desired future behavior should evaluate:

```text
CANONICAL COMMERCIAL VALUE
= preserved exactly in its source/agreement currency

VIEWER-LOCAL DISPLAY
= optional derived conversion for comprehension only
```

Examples:

- Brand views Creator Rate Card in Brand operating currency;
- Creator views Campaign commercial in Creator operating currency;
- Collaboration continues to store and execute against one explicit agreed currency/value;
- converted display never silently mutates or replaces canonical contractual value.

## Required future decisions

- authoritative FX-rate provider/source;
- refresh cadence and timestamp;
- rounding policy;
- supported currency set;
- India INR / US+other USD default behavior versus broader currency support;
- which viewer surfaces show converted value;
- exact labeling such as `Approx.` / `Converted for reference`;
- quote/agreement currency selection for direct enquiries;
- historical rate handling for audit/replay;
- behavior when FX rate is unavailable/stale;
- tax/payout/provider interaction boundaries.

## Invariants

- conversion is display/reference unless explicitly promoted through a later commercial command;
- Campaign commercial authority is not changed by viewer-local conversion;
- Rate Card canonical currency is not changed by viewer-local conversion;
- Collaboration locked agreement currency/value is immutable under FX movements;
- missing FX data must never fabricate a converted amount.

## Non-goals

This requirement does not authorize FX implementation in Rate Card V0, Campaign, C04 Collaboration, Payouts or Media Kit.
