# Creator Rate Card Packages — V2 Future Requirement

STATUS = DEFERRED_V2

## Purpose

Allow a Creator to build reusable commercial packages from the same atomic deliverables, add-ons and rights used by the V0 Rate Card and future direct quote flow.

Packages must extend the shared commercial vocabulary rather than introduce separate package-only deliverable semantics.

## Basic V2 package model

A Creator may compose a package from one or more commercial line items, for example:

```text
2 × Reel
1 × Story
1 × Link in Bio / 7 days
```

The package may then have either:

1. an overall discount applied to the sum of the component starting rates; or
2. an explicitly set package starting price.

## Richer package model

A later Product phase may support more customizable packages combining:

- deliverable × quantity;
- duration-bearing add-ons;
- content/usage rights;
- Partnership/Spark Ad authorization;
- optional exclusivity when the shared rights model exists;
- package-level starting price.

Example:

```text
2 × Reel
3 × Story
Partnership Ad / 30 days
Organic/content usage rights / 60 days

Package starting from: ₹120,000
```

## Invariants

- Packages remain indicative/reference commercial standards, not binding offers.
- Campaign-specific commercial terms supersede Creator Rate Card/package references when the Creator applies to a Campaign.
- Direct enquiry/quote may use a package as a starting point, but the accepted C04 commercial agreement remains authoritative.
- Package creation must reuse canonical deliverable/add-on/right identifiers rather than free-text commercial types.
- Package price updates affect future opportunities only and do not mutate locked Collaboration agreements.

## Deferred decisions

Future Product work must decide:

- discount vs explicit package-price UX;
- whether package components may override their base Rate Card scope/duration;
- package availability/archival/versioning;
- whether packages can be surfaced in Media Kit and Marketplace;
- quote expansion into package line items;
- handling when an underlying Rate Card item changes after package publication.

## Current disposition

```text
RATE CARD V0 = ATOMIC ITEMS ONLY
PACKAGES = V2
```
