# Brand Payouts — P3A Operations Cutover Acceptance V1

`BRAND_PAYOUTS_P3A_OPERATIONS_CUTOVER_ACCEPTANCE_V1`

## Decision

```text
CHECKPOINT = BP-P3A-OPERATIONS-CUTOVER
DECISION = ACCEPTED
P3A = COMPLETE
P4 = NOT_STARTED_GATE_BLOCKED
```

## Accepted source

| Repository | Accepted commit | Tree |
| --- | --- | --- |
| Backend | `12d235345e2748f676d36d61c62ed4bd9c049592` | `1dd5900068aa7f7fa3aa25dcc0eaef33ee4d7e24` |
| Frontend | `7c75a4c8f5a0df3a1fb82d2f707b1c6b03d56d2a` | `956bae22a91aeaf53733f9e913d500b9750577e2` |

The frontend correction is a direct child of `f775d33f729e02c020ced5b0a7ffcc662110db9e` and changes exactly:

- `src/features/brand-payouts/components/PayoutsTreasuryActions.tsx`;
- `src/features/brand-payouts/brand-payouts-p2.test.ts`.

It separates retained command rendering from command initiation: an already-open drawer remains mounted through a retained-data `REFRESHING` interval, while new command initiation is disabled. Stale/unavailable, unauthorized, cross-surface and capability-revoked states still close fail closed.

## Accepted evidence

- V1–V7 immutable evidence: verified and reused, 394/394 indexed artifacts;
- V8 correction/runtime evidence: `b240c2dfd512a3080dac1fbb6b4fe5f890dbc6f4`, tree `5f7f52a11bc15ab7431fa149b4a67ca03b31a70d`;
- V8 source gates: named regression 1/1; affected file 31/31; changed-file formatting/lint, typecheck and build pass;
- Payouts Return post-error: pass 2/2;
- V7 Settings Return post-error: reused pass 2/2;
- submission focus/dedupe: composite pass 4/4;
- Add funds, surface cutover, RBAC/admission, responsive/accessibility and other unchanged gates: reused from immutable accepted evidence.

The V8 evidence commit is a direct child of its authorized runner commit `7def5369670e106f832382e7a01e46109142252d`. Its source bindings, file set, compact index, runtime lifecycle and cleanup are coherent.

## Financial and safety acceptance

```text
CANONICAL_503 = PROVIDER_SETUP_REQUIRED
FINANCIAL_MUTATION_ON_503 = NONE
BRAND_RETURN_REQUESTS_ON_503 = 0
ALLOCATIONS_ON_503 = 0
LEDGER_ENTRIES_ON_503 = 0
DUPLICATE_POSTS = 0
SERIOUS_P3A_AXE_FINDINGS = 0
CRITICAL_P3A_AXE_FINDINGS = 0
DOCUMENT_OVERFLOW = 0
MIGRATION_FILES_CREATED_OR_CHANGED = NONE
PAYOUTS_M1_M2_APPLIED = NO
PROVIDER_METHODS_BEYOND_CAPABILITY_AND_ASSERT = 0
PROVIDER_ACTIONS = NONE
NON_LOOPBACK_APPLICATION_ATTEMPTS = 0
CLEANUP = PASS
```

Production provider-disabled Brand Return semantics remain truthful: production advertises no unsupported capability. The acceptance-only provider boundary was external, ephemeral, non-deployable and removed after proof.

## Next state

P3A is accepted without reopening P0–P2. P4 remains blocked by its existing non-delegable dependencies, including the accepted C-04 backend/convergence handoff, exact Campaign NET terms and M1 migration proposal/human approval. No migration, provider action, merge, deployment or P4 implementation is authorized by this acceptance.
