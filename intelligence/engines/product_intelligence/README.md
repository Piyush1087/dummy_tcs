# Product Intelligence V1

**Status:** FROZEN SEMANTIC CONTRACT  
**Scope:** P0 semantic contract materialization only  
**Product authority:** `intelligence/product_authority/product_intelligence_product_authority_register_v1.md`

## Purpose

Product Intelligence maintains Creator Shop's reusable, derived understanding of one exact canonical Offering within a Brand. Canonical Offering application state continues to own identity, kind/subtype, lifecycle, customer destination, price/commercial truth, media, Location relationships, Collection/BUNDLE relationships, and Brand-confirmed values.

Product Intelligence does not create a parallel catalogue, Campaign Asset, Offer, Audience, final Campaign Brief, or creator-provisioning model.

## Permanent V1 topology

| Object | Owning processor | Semantic families |
|---|---|---|
| `offering_factual_profile` | `offering_factual_synthesis` | `factual_summary`, `key_facts`, `key_benefits`, `proof_points`, `usage_context`, `customer_context` |
| `offering_creator_communication_profile` | `offering_creator_communication` | `creator_talking_points`, `communication_constraints` |
| `offering_actionability_profile` | `offering_actionability_synthesis` | `customer_action`, `commercial_context` |

Exactly these three Objects and three semantic processors comprise Product Intelligence V1 P0. A new processor must not be added merely to mirror another field.

## Scope and execution invariant

Every Object and processor execution is scoped to one exact durable canonical `Offering.id` within one Brand. Evidence for Offering A must not be consumed for Offering B merely because both belong to the same Brand.

The shared Intelligence runtime remains the execution foundation. One Offering processor execution must be independently identifiable from another Offering processor execution under the same Brand using the conceptual identity `Brand + Offering subject + processor`. Exact columns, enums, indexes, subject-scope representation, persistence design, and migrations belong to P1 and are not frozen here.

## Canonical reconciliation boundary

Evidence-to-Offering reconciliation is deterministic application/Data Extraction boundary work, not an AI Product Intelligence processor.

- An existing canonical Offering reference may scope Evidence.
- Reconciliation may propose review when identity is unresolved.
- It must not fuzzy-merge Offerings, create a canonical Offering, change durable identity, or use URL equality as a universal identity key.
- The same canonical Offering reference must scope canonical inputs, Evidence, output, and execution lineage.

## Progressive maturity

Profiles may be `READY`, `PARTIAL`, `NOT_READY`, or `FAILED` under shared readiness vocabulary, independently of `CURRENT`, `STALE`, or `UNKNOWN` freshness. Contract-valid partial results and explicit nulls are preferred to filler. Consumer readiness is evaluated per consumer.

Only an `ACTIVE` canonical Offering may be selected for a new Campaign. Product Intelligence readiness never changes canonical lifecycle and does not itself authorize Campaign use.

## Claim and proof safety

Observed statement is not externally verified fact. Brand confirmation is not external verification. A testimonial is not proof, and credential occurrence is not credential verification. Regulated or high-risk efficacy, safety, success, and superiority claims fail closed without sufficient approved same-Offering support.

## Commercial and geography boundaries

Canonical price and currency are one commercial tuple and remain application-owned. Reliable current first-party same-Offering price is the controlled refresh exception, but Product Intelligence may not perform that mutation. Product commercial/price Evidence sufficiency requires P2 Data Extraction capability preflight; P0 freezes no new commercial Evidence capability.

`OFFERING_AVAILABLE_AT_LOCATION` is the only canonical Product V1 Location relation. Broader shipping, service-area, or geographic actionability remains Evidence or derived interpretation and must not be promoted into broad canonical geography.

## P0 non-goals

- runtime or persistence implementation
- database representation or migration
- shared runtime architecture edits
- Data Extraction capability implementation
- provider or model selection
- frontend changes
- final Campaign Brief copy
- Product change-history processor or Object
- SKU, variant, inventory, nested Bundle, or provisioning semantics

