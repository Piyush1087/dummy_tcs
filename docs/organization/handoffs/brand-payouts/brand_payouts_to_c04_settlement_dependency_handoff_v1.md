# Brand Payouts to C-04 Settlement Dependency Handoff V1

Artifact: `BRAND_PAYOUTS_TO_C04_SETTLEMENT_DEPENDENCY_HANDOFF_V1`

Status: `ISSUED_NON_BLOCKING — C04_OWNER_ACCEPTANCE_PENDING`

## Authority

- Brand Payouts Product Authority: `f15a91d0ace8b2c424a539d79dbb120869233105`
- Brand Payouts architecture: `3fb6b4246aa5f2ecb71c3bbfe99c56e395f30a92`
- C-04 architecture: `de28784662bb92dac6cb927e348f3fc69564af7c`
- C-04 runtime authority remains with the C-04 program.

This handoff is an early contract dependency notice. It does not authorize C-04 implementation, change C-04 Product authority, modify a C-04 branch, or block Brand Payouts P0-P2.

## Required C-04 output

C-04 must eventually publish one immutable, versioned, provider-neutral financial instruction family containing or unambiguously referencing all of the following:

| Required output | C-04-owned meaning | Payouts consumption invariant |
|---|---|---|
| Commercial agreement identity | Stable agreement/instruction ID, version, integrity hash, Brand, Campaign, Collaboration, Creator, issued-at | Reject missing identity, mismatched replay, or superseded instruction |
| Reserve request | Stable request identity/version/hash and requester authority | Campaign Manager may originate only through authorized Collaboration progression |
| Exact commercial breakdown | Creator gross fee, platform commission, GST on commission, total Brand reserve, currency | Payouts never accepts or recomputes caller-authored economics |
| Payment-term snapshot | Exact `NET_7`, `NET_15`, `NET_30`, `NET_45`, or `NET_60` | No lossy NET_30 fallback or inference from copy/legacy stages |
| Settlement eligibility | Server-authoritative `settlementEligibleAt` | Normal due policy uses this exact anchor |
| Creator entitlement | Immutable gross entitlement and resolution/version context | Creates/replays one business obligation; does not imply transfer or settlement |
| Brand refund entitlement | Explicit amount/currency and commercial resolution authority | Kept separate from Route reversal and Brand Return |
| Cancellation/termination resolution | Immutable resolution identity, effect, authority, and exceptional due instruction/rule where applicable | Normal-success due anchor is not reused when resolution says otherwise |
| Partial/full financial recovery | Versioned, amount-bearing instruction with source obligation/settlement, effect vocabulary, supersession/replay rules | Gates P4R/P5R only; normal intake/scheduling does not wait for it |
| Money-movement confirmation seam | Trusted provider-neutral acknowledgement keyed to instruction/version/hash with applied/remaining amounts, status, resulting references, observed-at | C-04 consumes financial fact; it does not infer it from provider-native state |

The recovery effect vocabulary must keep at least these meanings separate:

```text
OBLIGATION_ADJUSTMENT
COLLABORATION_REFUND_AUTHORIZATION
PAYOUT_RECOVERY_REQUIRED
```

## Ownership boundary

C-04 owns agreement, entitlement, reserve request, Brand commercial-refund entitlement, cancellation/termination resolution, recovery authority, and instruction persistence. Brand Payouts owns approval/execution validation, due derivation from the accepted inputs, payout obligation/execution, provider reconciliation, and confirmation persistence.

Brand Payouts will not:

- recompute the commercial breakdown;
- accept amount/currency from a Brand or Campaign Manager command;
- read legacy fixed 30/70 or six-stage fields as new execution authority;
- invent a term, eligibility timestamp, refund entitlement, or recovery instruction;
- treat provider acceptance as settlement;
- modify C-04 persistence from a Payouts branch.

## Dependency gates

```text
BRAND_PAYOUTS_C04_ARCHITECTURE_DEPENDENCY
= READY_WITH_RECONCILIATION

BRAND_PAYOUTS_C04_BACKEND_SETTLEMENT_HANDOFF_DEPENDENCY
= OPEN_BLOCKING_FOR_P4_P5

BRAND_PAYOUTS_C04_FRONTEND_DEPENDENCY
= OPEN_NON_SERIALIZING

BRAND_PAYOUTS_C04_RECOVERY_INSTRUCTION_DEPENDENCY
= OPEN_BLOCKING_FOR_P4R_P5R_ONLY
```

Closure requires an accepted C-03 post-P1.4 base, accepted C-04 runtime checkpoint, final versioned contract, trusted confirmation owner, and the canonical Payouts/C-04 backend convergence proof defined by `BP-G08A`.

## Copy-paste relay prompt

```text
# C-04 Systems Architect — Brand Payouts Settlement Dependency Intake

Treat the durable artifact:

docs/organization/handoffs/brand-payouts/
brand_payouts_to_c04_settlement_dependency_handoff_v1.md

from Brand Payouts authority:

Piyush1087/dummy_tcs
brand-payouts/v1-execution-ledger
BP-P0-CONTRACT-BASE checkpoint

as a bounded upstream dependency notice.

Brand Payouts requires the final accepted C-04 runtime handoff to publish:

- immutable commercial agreement identity/version/hash;
- reserve request identity/version/hash;
- exact Creator fee, commission, GST-on-commission, total reserve and currency;
- exact NET_7/15/30/45/60 snapshot;
- settlementEligibleAt;
- Creator entitlement;
- Brand commercial-refund entitlement;
- cancellation/termination resolution and exceptional due authority;
- versioned partial/full financial recovery instruction;
- trusted provider-neutral money-movement confirmation seam.

C-04 retains ownership of all commercial and resolution truth. Payouts will not
recompute it or wire to legacy fixed 30/70, six-stage, caller-authored, or
isFinalPayoutReleased fields.

Do not implement or modify C-04 solely because of this message unless your
existing C-04 execution authority permits it. Reconcile the dependency into the
next eligible C-04 contract/checkpoint and return ACCEPT, CORRECT, or CONFLICT
with the exact accepted authority/runtime SHA and any remaining field gap.
```

