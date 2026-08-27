# Product Intelligence V1 — Product Authority Register

**Status:** FROZEN PRODUCT AUTHORITY  
**Date:** 2026-08-27  
**Scope:** Product / Offering semantics required before Product Intelligence execution planning  
**Parent authority:** `intelligence/product_authority/brand_centre_offerings_v0_provisional_authority.md` and `intelligence/product_authority/brand_centre_v0_product_authority.md`

---

## 1. Ownership boundary

Canonical Offering application state owns:

- durable Offering identity;
- Brand ownership;
- canonical kind/subtype;
- lifecycle;
- canonical customer destination;
- canonical price/commercial truth where application-owned;
- canonical media;
- explicit canonical Location relationships;
- Collection/Bundle relationships;
- Brand-confirmed values.

Product Intelligence owns derived understanding only, including:

- factual synthesis;
- creator communication ingredients;
- derived benefits/proof interpretation;
- communication constraints;
- usage/customer context;
- customer action interpretation;
- observed/derived availability understanding;
- change interpretation.

Campaign Asset remains Campaign-owned and is the campaign-time representation of what creators will talk about.

---

## 2. PD-01 — Canonical Offering taxonomy

Canonical `OfferingKind`:

- `PRODUCT`
- `SERVICE`
- `EXPERIENCE`
- `BUNDLE`

Use industry-aware subtype beneath the canonical kind.

A Feature / Capability becomes a first-class canonical Offering only when it is:

- independently customer-facing;
- a legitimate standalone Campaign subject;
- not merely an internal Product attribute.

The current backend enum is not permanent Product Authority where it conflicts with this normalized model.

---

## 3. PD-02 — Price representation and disappearance behavior

Product-level price semantics:

- `EXACT`
- `STARTING_AT`
- `RANGE`
- `NOT_PUBLICLY_LISTED`

Where explicitly available, preserve:

- current price;
- optional regular/reference price.

Price and currency form one commercial tuple.

Reliable same-Offering first-party price remains the controlled refresh exception.

If a previously public price disappears:

- do not silently set price to zero/null;
- retain the last known price with stale/unknown freshness until authoritative replacement, explicit not-publicly-listed evidence, or authorized Brand action.

Exact technical representation remains an implementation decision.

---

## 4. PD-03 — Collection / Product hierarchy

Freeze:

- Product and Collection/BUNDLE may both be canonical Offerings.
- Collection/BUNDLE ↔ Product is many-to-many.
- A Product may belong to multiple Collections.
- Each Product and Collection retains independent identity and lifecycle.
- Campaign Asset may reference either an ACTIVE Product or an ACTIVE Collection/BUNDLE.

Explicitly deferred for V1:

- SKU/variant hierarchy;
- nested Collections/Bundles;
- full catalogue modelling.

---

## 5. PD-04 — Offer / Discount ownership

Offer / Discount is **not** an Offering subtype.

Treat it as a separate canonical commercial entity that may reference one or more Offerings/Bundles.

Temporary promotional state must not redefine permanent Offering identity.

Observed website promotions may remain Evidence/observed commercial context until canonical Offer state is established.

Campaign Asset `OFFER` remains a separate Campaign-domain representation.

---

## 6. PD-05 — Offering media scope

Product meaning:

- zero or one primary image;
- optional small bounded additional gallery.

Do not freeze the exact numeric maximum as Product Authority.

The exact implementation cap may be selected later.

Product Intelligence may observe/describe/recommend media but may not silently change canonical primary selection or approve media.

Do not build a DAM.

---

## 7. PD-06 — Offering ↔ Location / availability

Minimal canonical V1 relationship:

`OFFERING_AVAILABLE_AT_LOCATION`

Meaning:

> A customer can obtain, receive or use the Offering at that exact canonical business Location.

It does **not** imply:

- delivery origin;
- service radius;
- warehouse origin;
- geographic marketing target;
- broad Brand serviceability.

Broader country/global/shipping/service-region availability remains Evidence / derived Intelligence in V1.

Do not build a full canonical geography availability matrix.

Campaign eligibility remains primarily:

`Offering lifecycle = ACTIVE`

with Campaign-specific feasibility/geography logic where relevant.

---

## 8. PD-07 — Product Intelligence output semantic structure

Freeze a small structured semantic model rather than one free-form Product summary or a highly normalized attribute graph.

Output families:

- `factual_summary`
- `key_facts`
- `key_benefits`
- `proof_points`
- `creator_talking_points`
- `communication_constraints`
- `usage_context`
- `customer_context`
- `customer_action`
- `commercial_context`

Do **not** freeze exact list cardinalities as Product Authority.

Those remain output-quality / implementation constraints unless later UX authority requires specific bounds.

Product Intelligence should remain concise and reusable by Campaign / Brief / creator communication consumers.

It must not generate final Campaign Brief copy.

---

## 9. Existing authority preserved

The following remain frozen:

- canonical Offering application state owns identity/lifecycle;
- Product Intelligence owns derived understanding only;
- ACTIVE is required for new Campaign use;
- field/item-level authority applies to canonical Offering truth;
- Brand-confirmed non-price fields are protected;
- reliable first-party price is the controlled refresh exception;
- `Offering.id` is durable canonical identity;
- no fuzzy automatic Offering merge;
- no mandatory Offering-level Audience;
- claims fail closed where support is insufficient;
- Meta/Instagram is optional enrichment only;
- Similarweb is not required for Product Intelligence MVP;
- a dedicated Product change-history Object is deferred;
- pre-launch / inventory / SKU / complex provisioning remain V2.

---

## 10. Governance note

This document freezes Product meaning only.

It does **not** freeze:

- database schema shape;
- migration design;
- enum/storage representation;
- exact media cap;
- exact list cardinalities;
- processor graph;
- DE implementation;
- API representation;
- frontend implementation.

Those belong to Product Intelligence execution planning and implementation, provided they preserve the Product semantics above.

---

## 11. Product decision status

Open Product decisions blocking first vertical slice: **NONE**  
Open Product decisions blocking full Product Intelligence V1: **NONE**

Next phase:

`PRODUCT_INTELLIGENCE_EXECUTION_PLANNING`
