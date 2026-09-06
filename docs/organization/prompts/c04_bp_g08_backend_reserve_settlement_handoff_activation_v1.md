# C04 — BP-G08 Backend Reserve/Settlement Handoff Activation V1

`C04_BP_G08_BACKEND_RESERVE_SETTLEMENT_HANDOFF_ACTIVATION_V1`

Status: **PARENT BACKEND-LANE ACTIVATION — DEPENDENCY-GATED**

## 1. Purpose

Resume C04 from its accepted durable architecture and finite plan and activate the backend lane needed to clear Brand Payouts `BP-G08`.

Do not restart C04, reopen Product decisions, recreate Stage B, or create a competing Collaboration engine.

## 2. Accepted authority

- Parent continuity authority: `26437f6d3fb73dd1b94476967271a992d3f17287`
- C04 accepted architecture/plan branch head: `de28784662bb92dac6cb927e348f3fc69564af7c`
- C03 downstream handoff authority: `df32e63e4ca44de57b40be59167c300ecb886ddd`
- Accepted C03 post-P1.4 backend SHA: `aebeb85fd6bba37f88c3805c213c61e7f63b2f5f`
- Accepted C03 backend tree: `86c5bb769598dd19a634dcd867350e53eaa06f75`
- Brand Payouts Product Authority: `f15a91d0ace8b2c424a539d79dbb120869233105`
- Brand Payouts architecture: `3fb6b4246aa5f2ecb71c3bbfe99c56e395f30a92`
- Existing dependency contract:
  `docs/organization/handoffs/brand-payouts/brand_payouts_to_c04_settlement_dependency_handoff_v1.md`

Durable disposition:

```text
C04_C03_BACKEND_HANDOFF_DEPENDENCY = READY
C04_CANONICAL_BACKEND_DEPENDENCY_SHA = aebeb85fd6bba37f88c3805c213c61e7f63b2f5f
C04_IMPLEMENTATION = AUTHORIZED_FOR_BACKEND_READINESS_LANE_ONLY
C04_FRONTEND_IMPLEMENTATION = NOT_AUTHORIZED_BY_THIS_DIRECTIVE
BP-G08 = OPEN_UNTIL_ACCEPTED_C04_HANDOFF
```

## 3. Authorized stage

Use the accepted C04 architecture and finite execution plan. Revalidate any newer durable C04 state, then run one consolidated backend deep-planning and execution-readiness preflight beginning with P0-B.

The preflight must:

- lock and fetch back the exact accepted C03 base;
- prove ancestry and the same-transaction Application-to-Collaboration seam;
- inventory the 79 accepted migrations and every C04 schema/path collision;
- reconcile accepted Collaboration donors by `REUSE → RECONCILE → ADD → DEFER`;
- identify the exact forward-only C04 migration proposal;
- prove PostgreSQL/Docker, Node/npm/Prisma, tests, startup, fixtures, auth/RBAC, workers, and evidence destinations are reachable;
- enumerate the complete blocker set before source mutation;
- preserve the existing external Local Codex execution route: cloud C04 SA owns authority/review; the user relays the Git-hosted assignment to the Local Codex runner.

Do not classify absence of an internally callable Local Codex tool as no execution route.

## 4. BP-G08 normal-path output

The accepted C04 backend handoff must publish a versioned, immutable, provider-neutral contract for:

- commercial agreement identity/version/hash and lineage;
- reserve-request identity/version/hash and requester authority;
- exact Creator gross fee, platform commission, GST on commission, total Brand reserve, currency;
- exact payment-term snapshot;
- server-authoritative `settlementEligibleAt`;
- Creator entitlement;
- Brand commercial-refund entitlement and normal cancellation/termination resolution needed by the frozen path;
- trusted provider-neutral money-movement confirmation seam;
- replay, supersession, concurrency, cross-Brand, RBAC, and integrity rules.

C04 owns commercial agreement, entitlement, reserve request, and resolution truth. Brand Payouts owns financial approval/execution, due derivation, obligation/settlement execution, provider reconciliation, and confirmation persistence.

Generalized P4R/P5R recovery and provider-enabled work remain deferred from the current Brand Payouts normal-path critical lane unless independently required by C04's already-frozen normal path.

## 5. Campaign term dependency

`BP-G05` is still open.

C04 must not infer, collapse, or compensate for a lossy Campaign term. It may plan and validate disjoint backend work, but it must not claim `BP-G08 = SATISFIED` until the accepted Campaign correction is integrated and tests prove exact `NET_7/15/30/45/60` snapshot preservation.

## 6. Migration and source gate

This directive does not approve an unidentified migration.

If the backend wave requires a new migration, return the exact Prisma/SQL/FK/index/backfill/rollback proposal for Parent/human approval before source mutation. No accepted C03 migration may be edited.

After exact migration approval and closure of any complete readiness blockers, C04 may proceed through one coherent backend execution under its accepted phase topology, using internal commits as durability markers rather than new Parent gates.

## 7. Prohibited scope

```text
NO C04 PRODUCT OR ARCHITECTURE REOPEN
NO FRONTEND SOURCE MUTATION
NO STITCH
NO PROVIDER TEST OR LIVE ACTION
NO PAYOUT EXECUTION OR KYC OWNERSHIP
NO AWS OR PRODUCTION ACTION
NO CANONICAL MERGE OR DEPLOY
NO HISTORICAL MIGRATION EDIT
NO HEURISTIC LEGACY BACKFILL
NO PAYOUTS COMPATIBILITY WORKAROUND
```

## 8. Required return

```text
C04_BP_G08_BACKEND_READINESS_STATUS =
  READY_FOR_EXACT_MIGRATION_APPROVAL
  | READY_NO_MIGRATION
  | BLOCKED_COMPLETE_SET

C04_DURABLE_STATE_REVALIDATED_AT =
C04_ACCEPTED_AUTHORITY_SHA =
C03_ACCEPTED_BASE_SHA =
C03_ACCEPTED_BASE_TREE =
C04_EXECUTION_BRANCH =
C04_EXACT_MIGRATION_PROPOSAL_PATH =
BP_G05_INTEGRATION_STATUS =
COMPLETE_PREFLIGHT_BLOCKER_SET =
NEXT_PARENT_GATE =
```

Do not publish `BP-G08 = SATISFIED` until C04 authority has accepted the runtime checkpoint and durable downstream handoff.
