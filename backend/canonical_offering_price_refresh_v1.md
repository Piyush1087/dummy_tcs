# Canonical Offering Price Refresh V1

**Status:** REVIEW_PENDING
**Version:** 1.0
**Date:** 2026-08-28
**Owner:** Application backend / canonical Offering state

## Decision

Canonical Offering price remains application-owned business state. Data Extraction owns immutable first-party commercial Evidence and its acquisition/normalization lineage; it never writes canonical price or selects a winner. The application backend alone reconciles a current exact commercial refresh into a guarded canonical price revision.

The default refresh interval is 24 hours. An hourly scheduler scan dispatches a conservative bounded batch of eligible ACTIVE Offerings. A deterministic hourly UTC request-key bucket and the existing durable CapabilityExecution uniqueness constraint provide the multi-instance acquisition claim. Only the claim creator performs exact-resource acquisition and normalization.

Automatic refresh is permitted only for machine-managed price. A current revision with `BRAND_CONFIRMED` authority is protected. A current revision whose origin is `BRAND_EDIT` or `BRAND_UPLOAD` is also protected even when its authority metadata is inconsistent. `Offering.isUserEdited` is not price-protection authority. An authenticated Brand manual edit creates a `BRAND_CONFIRMED` / `BRAND_EDIT` canonical revision and blocks subsequent automatic refresh.

The bounded reconciliation outcomes are:

```text
NO_CHANGE
ADVANCE_PRICE
MARK_STALE
BLOCKED_MANUAL
CONFLICT_NO_ADVANCE
INSUFFICIENT_EVIDENCE
INACTIVE_NO_ADVANCE
CAS_REJECTED
```

Reconciliation uses only fresh, exact-Offering `OFFERING_DETAIL` / `OFFERING_SPECIFIC` commercial Evidence attached to the current capability execution. Historical Evidence is never unioned to select a winner. Agreeing observations coalesce by decimal commercial-tuple equality; conflicting tuples do not advance. No LLM, provider heuristic, FX conversion, or ambiguous-symbol currency inference participates in the decision.

Explicit unopposed `NOT_PUBLICLY_LISTED` Evidence may create a revision. When canonical price already exists, its defensible currency is retained. A first `NOT_PUBLICLY_LISTED` observation without defensible currency cannot initialize canonical price.

A successful usable exact capture with no qualifying public-price Evidence marks an existing unprotected machine-managed price `STALE` while retaining its full value tuple. Acquisition failure or normalization failure does not change price or freshness. Missing price is not converted to `NOT_PUBLICLY_LISTED`.

Controlled writes re-check exact Brand ownership, exact Offering, ACTIVE lifecycle, current state revision, current revision identity, authority, and origin inside the same Serializable transaction as the canonical CAS. Manual edits and concurrent initialization therefore win safely without same-attempt retry.

This decision introduces no new provider, no LLM reconciliation, no queue/cache infrastructure, no Data Extraction capability, no Product Intelligence processor, and no database migration.
