# Creator Rate Card Packages — V2 Future Requirement

STATUS = DEFERRED_V2

## Purpose

Allow a Creator to define reusable commercial packages from the same canonical commercial atoms used by Rate Card V0, future quotes and Collaboration commercial agreements.

## Product direction

A package may combine quantities of base deliverables plus duration-bound add-ons/rights and then apply either an overall package discount or an explicit package starting price.

Examples:

```text
2 × Reel
3 × Story
Link in Bio / 7 days
Partnership Ad / 30 days
Content usage rights / 30 days
```

Possible pricing models to evaluate later:

```text
A. atomic starting-rate sum
→ overall discount %
→ resulting package starting price

B. Creator directly sets package starting price
```

The exact V2 pricing model is not frozen here.

## Platform convergence

Packages must reference the same shared deliverable/right concepts used by Brand Campaign/Brief and future quote/Collaboration flows rather than introduce package-only semantic duplicates.

UGC remains a use case / work preference, not a separate package deliverable type.

## Required future decisions

Future Product/architecture work must define:

- package name/description;
- allowed deliverable atoms;
- quantities;
- duration-bearing rights/add-ons;
- discount versus explicit package-price model;
- package currency;
- package lifecycle/versioning;
- Media Kit visibility;
- Marketplace use;
- quote prefill behavior;
- whether packages may carry payment-term preferences;
- how a Brand changes package scope during negotiation;
- historical snapshot behavior once quoted/agreed.

## Non-goals

This requirement does not authorize package implementation in Rate Card V0 and does not make a published package a binding offer or Collaboration agreement.
