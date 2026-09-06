# Brand Payouts BP-G08 Parent Acceptance V1

`BRAND_PAYOUTS_BP_G08_PARENT_ACCEPTANCE_V1`

Status: **ACCEPTED — BP-G08 SATISFIED**

## Reviewed authority

- C04 architecture/plan: `de28784662bb92dac6cb927e348f3fc69564af7c`
- Accepted C03 base: `aebeb85fd6bba37f88c3805c213c61e7f63b2f5f`
- C04 branch: `c04/shared-collaboration-backend-v1`
- Tested C04 runtime: `373eaa382f555c376df78c0e95c72ff55cc43791`
- Runtime tree: `bd5c3c9570adeeacf2f35df8c4a399637e7bd312`
- C04 handoff: `fc4d4b59e2a44d7ddced6bc5dde5119c501ec275`
- Handoff tree: `083c52dc06c19a23f47491935b472ee5e62bd1c5`
- Handoff path: `docs/C04_BP_G08_BACKEND_HANDOFF_V1.md`
- Prior frontend unchanged: `106de9988ea2d4bd534205b083f63ae7ecd1878c`

Remote verification proves the branch points exactly to the handoff commit. The tested runtime is its direct parent; the handoff commit changes documentation only. The C04 line is a linear seven-commit descendant of the accepted C03 base.

## Migration disposition

The accepted C03 base contains 79 migrations. All 79 names and blob identities remain unchanged. C04 adds exactly five forward migrations, producing 84:

```text
20260911120000_c04_shared_collaboration_convergence
20260911121000_c04_creator_subject_proposal_destination
20260911122000_c04_integrity_compatibility_async
20260911123000_c04_bp_g05_extend_exact_payout_terms
20260911124000_c04_bp_g05_reconcile_exact_payout_terms
```

Accepted evidence proves fresh 0→84, accepted 82→84, and legacy-shaped 82→84. Exact Campaign NET terms round-trip; unproven historical `NET_30` rows remain unchanged; `IMMEDIATE` fails closed at the C04 agreement boundary.

No development, shared, staging, production, AWS, or provider mutation occurred.

## Accepted BP-G08 contract

C04 now publishes immutable/versioned/provider-neutral authority for:

- commercial agreement identity, version, SHA-256 hash, Brand/Campaign/Collaboration/Creator lineage;
- exact fee, commission, GST, reserve, currency, and Campaign payment-term snapshot;
- append-only reserve request/instruction with idempotency and supersession;
- Creator entitlement and Brand commercial-refund entitlement;
- immutable `settlementEligibleAt`, distinct from Payouts-owned `paymentDueAt`;
- abnormal-resolution and partial/full recovery instructions;
- trusted confirmations for reserve, obligation, processing, settlement, reversal, and recovery.

Campaign Managers may originate the canonical reserve instruction through Collaboration progression but cannot execute the financial reserve. Owner/Finance authority and all payout/provider execution remain downstream. C04 creates no second vault, ledger, payout, transfer, reversal, or provider-reconciliation engine.

## Acceptance evidence

Accepted:

- Prisma generate/validate;
- five-term exact persistence and evidence-only reconciliation;
- append-only database guards;
- focused BP-G05/BP-G08 19/19;
- affected real-PostgreSQL 6/6;
- full backend 6,233 passed with 771 accepted guarded tests;
- build and startup/API smoke;
- changed-file lint/format;
- candidate secret scan;
- remote fetch-back and clean identity proof.

Historical Collaborations without exact terms remain compatibility-only and fail closed. Existing unrelated Prisma drift diagnostics remain nonblocking.

## Process variance

The five C04 migrations were created before the exact Parent migration-approval stop. They are accepted post hoc after exact remote SQL, ancestry, immutable-history, runtime, and blast-radius review. No shared database was touched. This is not precedent for future gated migrations.

## Frontend disposition

No C04 frontend rerun or additional Codex call is required for BP-G08. The prior frontend remains unchanged and BP-G08 is a backend handoff gate. C04 frontend remains a separate non-serializing dependency for later joint acceptance.

## Final disposition

```text
BP-G05 = SATISFIED
BP-G06 = SATISFIED
BP-G08 = SATISFIED
BP-G08A = OPEN_TECHNICAL_PAYOUTS_P4_BASE_CONVERGENCE

BRAND_PAYOUTS_DEPENDENCY_PARK = RELEASED
NEXT = ONE_CONSOLIDATED_WAVE_B_PREFLIGHT
```
