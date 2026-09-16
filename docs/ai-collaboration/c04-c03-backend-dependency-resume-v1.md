# C-04 C03 Backend Dependency Resume V1

`C04_C03_BACKEND_DEPENDENCY_RESUME_V1`

This is a docs-only execution-resume record. It does not reopen C-04 Product logic, architecture, finite planning, C-03 implementation, Campaign Product logic, or provider/production work.

## Frozen C-04 authority

```text
C04_STAGE_B_ACCEPTED_SHA =
de28784662bb92dac6cb927e348f3fc69564af7c

C04_STAGE_B_ACCEPTED_TREE =
eac67d364cd5d06dd5444dcb49c6d80eb476cd97

C04_PRODUCT_LOGIC = FROZEN
C04_ARCHITECTURE = ACCEPTED
C04_FINITE_EXECUTION_PLAN = ACCEPTED
C04_IMPLEMENTATION = AUTHORIZED
C04_EXECUTION_MODE = SUPERFAST_AUTONOMOUS_EXECUTION
```

The Stage B SHA above remains the immutable semantic/architecture input. This later record changes only dependency/execution status.

## Accepted C-03 downstream handoff

```text
C03_POST_P1_4_BACKEND_HANDOFF_SHA =
df32e63e4ca44de57b40be59167c300ecb886ddd

C03_POST_P1_4_BACKEND_SHA =
aebeb85fd6bba37f88c3805c213c61e7f63b2f5f

C03_POST_P1_4_BACKEND_TREE =
86c5bb769598dd19a634dcd867350e53eaa06f75

AEBEB85F_DISPOSITION = ACCEPTED_CANONICAL
C04_C03_BACKEND_HANDOFF_DEPENDENCY = READY
C04_BACKEND_IMPLEMENTATION_BASE_SHA =
aebeb85fd6bba37f88c3805c213c61e7f63b2f5f
```

C-04 must not reopen or rerun accepted C-03 work.

## Backend work now technically eligible

C-04 may proceed from the accepted C-03 base with all backend work that does not require unresolved Campaign payment-term authority, including:

- shared Collaboration persistence/runtime convergence;
- canonical source-Application and Creator subject/workspace lineage;
- Team actor authorization/audit;
- first Creator proposal and canonical negotiation state;
- physical delivery destination confirmation/provenance;
- shared Brand non-regression;
- per-Deliverable production/publishing/compliance convergence;
- Creator entitlement and Brand refund-entitlement machinery where its inputs are already authoritative;
- canonical reserve-request/instruction identity, versioning, hashing, authorization, idempotency and confirmation seams using authoritative Collaboration economics only;
- `settlementEligibleAt` ownership/persistence when derived from accepted Collaboration lifecycle/resolution authority rather than an inferred Campaign payment term;
- abnormal-resolution/recovery instruction structure and versioning;
- provider-neutral money-movement confirmation consumption seam;
- projections/workers/notifications/socket invalidation;
- Collaboration Brief projection;
- legacy writer containment/retirement and compatibility reads.

No provider execution, payout execution, KYC, AML, Tax, AWS, production, or live provider mutation is authorized.

## Campaign BP-G05 dependency

Campaign NET_45 / NET_60 persistence correction is executing independently.

C-04 must not invent, infer, collapse, or locally compensate for a missing Campaign term.

```text
C04_CAMPAIGN_PAYMENT_TERM_DEPENDENCY = WAITING_FOR_ACCEPTED_BP_G05_HANDOFF

ALLOWED_EXACT_TERMS_AFTER_HANDOFF =
NET_7 | NET_15 | NET_30 | NET_45 | NET_60

LOSSY_NET_45_OR_NET_60_TO_NET_30_ADAPTER = PROHIBITED
LEGACY_30_70_TERM_INFERENCE = PROHIBITED
DISPLAY_COPY_TERM_INFERENCE = PROHIBITED
```

Any C-04 schema/contract/runtime field whose truth depends on the exact Campaign term must remain unfinalized/unpopulated for new canonical execution until the accepted Campaign handoff is consumed.

The normal due-date contract remains downstream-only:

```text
exact immutable C04 Campaign-term snapshot
+
settlementEligibleAt
-> payout due-date derivation by the payout owner
```

C-04 does not locally invent `paymentDueAt`.

## Brand Payouts BP-G08 target handoff

The final accepted C-04 backend handoff for Brand Payouts must publish versioned immutable authority for:

```text
immutable commercial agreement
reserve request / instruction identity + version + hash
exact authoritative fee / commission / GST / reserve breakdown + currency
exact Campaign payment-term snapshot after BP-G05 is accepted
settlementEligibleAt
Creator entitlement
Brand refund entitlement
cancellation / termination / abnormal resolution instruction
versioned partial/full financial recovery instruction
provider-neutral money-movement confirmation seam
```

C-04 owns commercial/resolution truth. Existing financial/Payouts runtime owns approval/execution, funding allocation, obligation/due-date derivation, transfer, settlement, reversal, reconciliation and authoritative financial execution state.

Prohibited downstream sources include fixed 30/70 compatibility fields, legacy six-stage semantics, `isFinalPayoutReleased`, caller-supplied gross amounts, and other non-authoritative legacy fields.

## Current execution state

```text
C04_C03_BACKEND_HANDOFF_DEPENDENCY = READY
C04_BACKEND_EXECUTION = RESUMED
C04_CAMPAIGN_PAYMENT_TERM_DEPENDENCY = WAITING_FOR_ACCEPTED_BP_G05_HANDOFF
C04_BP_G08_BACKEND_HANDOFF = IN_PROGRESS

PRODUCT_QUESTIONS = NONE
ARCHITECTURE_CONFLICTS = NONE
MIGRATION_CONFLICTS = NONE_KNOWN

NEXT_EXECUTION_ROUTE = EXTERNAL_LOCAL_CODEX_PARENT_RELAY
PARENT_RETURN = CIRCUIT_BREAKER_ONLY_OR_ACCEPTED_C04_BACKEND_HANDOFF
```
