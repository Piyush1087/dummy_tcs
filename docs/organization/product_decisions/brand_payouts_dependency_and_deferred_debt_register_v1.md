# Brand Payouts — Dependency and Deferred-Debt Register V1

`BRAND_PAYOUTS_DEPENDENCY_AND_DEFERRED_DEBT_REGISTER_V1`

**Date:** 2026-09-04

**Status:** RECORDED

**Authority:** Product Authority

**Product register:** [Brand Payouts Product Decision Register V1](brand_payouts_product_decision_register_v1.md)

**Frontend state register:** [Brand Payouts Frontend State Family Register V1](brand_payouts_frontend_state_family_register_v1.md)

**Implementation:** NOT AUTHORIZED

```text
BRAND_PAYOUTS_C04_SETTLEMENT_HANDOFF_DEPENDENCY = OPEN
RAZORPAY PRODUCT/ARCHITECTURE DEBT = OPEN
RAZORPAY LIVE/TEST CAPABILITY ACCEPTANCE = NOT PROVEN BY PRODUCT FREEZE
INDIA_WITHHOLDING_AUTHORITY = PRODUCTION_LAUNCH_GATE_IF_APPLICABLE

BRAND_PAYOUTS_ARCHITECTURE = NOT_YET_AUTHORIZED
BRAND_PAYOUTS_EXECUTION_PLAN = NOT_YET_AUTHORIZED
BRAND_PAYOUTS_IMPLEMENTATION = NOT_AUTHORIZED
RAZORPAY_PROVIDER_EXECUTION = NOT_AUTHORIZED
```
## 1. Source boundary

This register carries forward only the dependency and deferred-debt findings
needed after `BRAND_PAYOUTS_SYSTEMS_UNDERSTANDING_AUDIT_V1`. The accepted Phase
A audit remains the complete AS-IS evidence and `BP-GAP-*` source and is not
duplicated here.

The Product decisions that resolve BP-PD-01 through BP-PD-10 are frozen in the
Product Decision Register. Open engineering, provider, legal, integration, and
UI debt below does not reopen those decisions.

## 2. C-04 settlement dependency

```text
BRAND_PAYOUTS_C04_SETTLEMENT_HANDOFF_DEPENDENCY = OPEN
```

### 2.1 Verified current C-04 authority

The authority repository was checked before this register was written.

| Evidence | Verified value |
|---|---|
| Repository | `Piyush1087/dummy_tcs` |
| Remote branch | `c04/stage-b-authority-package-v1` |
| Remote head | `de28784662bb92dac6cb927e348f3fc69564af7c` |
| Product register | `docs/organization/architecture/c04/C04_PRODUCT_DECISION_REGISTER_V1.md` |
| Cross-contract reconciliation | `docs/organization/architecture/c04/C04_CROSS_CONTRACT_RECONCILIATION_V1.md` |
| Architecture | `docs/organization/architecture/c04/C04_ARCHITECTURE_FREEZE_V1.md` |
| Finite plan | `docs/organization/architecture/c04/C04_FINITE_EXECUTION_PLAN_V1.md` |

That verified Stage B package records:

```text
C04_PRODUCT_LOGIC = FROZEN
C04_ARCHITECTURE = ACCEPTED
C04_FINITE_EXECUTION_PLAN = ACCEPTED_WITH_BOUNDED_STAGE_B_CORRECTION
C04_IMPLEMENTATION = NOT_AUTHORIZED
```

The remote head is accepted Stage B authority evidence. It is not a final C-04
runtime settlement handoff or implementation-acceptance head. No such final
runtime handoff was verified for this Product freeze.

### 2.2 Required future handoff

Payouts architecture and implementation must consume the final accepted C-04:

- immutable commercial agreement;
- reserve request or instruction;
- Creator entitlement;
- Brand refund entitlement;
- settlement-eligibility timestamp;
- abnormal resolution instruction;
- money-movement confirmation seam.

Do not wire new payout execution to:

- fixed 30/70 fields;
- legacy six-stage Collaboration semantics;
- `isFinalPayoutReleased`;
- caller-supplied gross amounts;
- other compatibility fields.

### 2.3 Gate effect

| Gate | Effect of the open dependency |
|---|---|
| Product Authority freeze | Does not block; this register freezes Product meaning now |
| Independent Payouts read, RBAC, and ledger architecture preparation | Does not block after separate Phase C authorization |
| Provider-neutral architecture work unrelated to final C-04 settlement integration | Does not block after separate Phase C authorization |
| Final settlement-integration freeze | Blocks until the immutable accepted C-04 runtime handoff is available |
| End-to-end payout execution and acceptance | Blocks |

This table records dependency effect only. It does not authorize or begin Phase
C.

## 3. Inherited owner dependencies

| Owner or authority | Brand Payouts consumes | Brand Payouts must not duplicate |
|---|---|---|
| Brand Settings / financial runtime | Pooled vault, Add funds, funding truth, original-source Brand Return, Brand authorization | Vault, ledger, funding service, Brand Return implementation, financial RBAC |
| Campaign | Configured commercial terms and currency inputs consumed through canonical downstream instructions | Campaign commercial policy or caller-authored economics |
| Collaboration / C-04 | Immutable agreement, reserve instruction, entitlement, resolution, eligibility timestamp, refund instruction, confirmation seam | Commercial negotiation, entitlement calculation, resolution policy, compatibility settlement logic |
| Creator Settings / C-05 | Provider-neutral payout-destination and legal-profile ownership, normalized readiness references | Creator destination, legal profile, KYC collection, address book, raw sensitive data |
| Creator Payouts / Security / provider integration | Normalized onboarding/provider readiness and bounded recovery guidance | KYC/AML/Tax policy, provider onboarding UX, raw diagnostics, provider credentials |
| Support authority | Accepted support request and acknowledgement/reference | Commercial dispute resolution or financial-state mutation |
| Qualified Legal/Tax authority | Any future India withholding applicability, rate, threshold, remittance, PAN, or certificate rule | Guessed TDS logic or fabricated tax artifacts |
| Canonical financial ledger | Money movement and allocation truth used for Brand-facing activity projection | A second journal or statutory-accounting claim |

## 4. Razorpay Product and architecture debt

The Phase A `BP-RZ-01` through `BP-RZ-12` debt register remains active.

```text
RAZORPAY PRODUCT/ARCHITECTURE DEBT = OPEN
RAZORPAY LIVE/TEST CAPABILITY ACCEPTANCE = NOT PROVEN BY PRODUCT FREEZE
```

No Razorpay execution or provider mutation is authorized by this freeze.

| ID | Open provider debt | Product-freeze effect | Later acceptance effect |
|---|---|---|---|
| BP-RZ-01 | Enable or confirm Razorpay Route Linked Account Test API entitlement | Does not block this freeze | Required provider capability evidence |
| BP-RZ-02 | Obtain exact Test stakeholder, KYC, product-configuration fixture, and state progression | Does not block; onboarding ownership remains external to Brand Payouts | Required provider/onboarding evidence under separate Product, Security, and provider authority |
| BP-RZ-03 | Capture exact bank configuration or validation pending, success, and failure evidence | Does not block this freeze | Required normalized readiness and recovery evidence |
| BP-RZ-04 | Confirm direct-transfer entitlement and exact idempotency/request contract | Does not block this freeze | Required before provider execution acceptance |
| BP-RZ-05 | Confirm hold, release, and `on_hold_until` behavior | BP-PD-05 Product prerequisite is now closed; debt remains open | Required provider lifecycle/recovery evidence |
| BP-RZ-06 | Configure and capture signed Test transfer, reversal, and settlement webhooks | Does not block this freeze | Required webhook/runtime evidence |
| BP-RZ-07 | Verify processed, released, and settled ordering plus replay and out-of-order behavior | Does not block this freeze | Required lifecycle/idempotency acceptance |
| BP-RZ-08 | Verify full, partial, and multiple reversal behavior and settlement interaction | BP-PD-09 Product prerequisite is now closed; debt remains open | Required reversal/reconciliation acceptance |
| BP-RZ-09 | Complete original-source Brand Return capability and webhook verification | Does not block this freeze | Required before Brand Return provider execution acceptance |
| BP-RZ-10 | Resolve ambiguous, error, retry, and reconciliation behavior with redacted evidence | Does not block this freeze | Required recovery and operational acceptance |
| BP-RZ-11 | Resolve the previously observed Live dashboard or payment-method warning | Does not block this freeze | Required before production provider readiness |
| BP-RZ-12 | Run separately authorized controlled Test transactions and later production-readiness checks | Does not block this freeze | Required staged provider acceptance; not authorized here |

These Product decisions allow later provider work to be planned. They do not
prove Route entitlement, Linked Account onboarding, stakeholder/KYC
configuration, bank validation, transfer creation, hold/release, settlement,
reversal, webhook operation, or Brand Return execution.

## 5. Required separation of later provider gates

A later Phase C plan, if separately authorized, must keep these gates distinct:

1. provider-neutral architecture;
2. code and deterministic test-fake implementation;
3. bounded read-only Razorpay capability audit;
4. separately authorized controlled Test transactions;
5. production provider-readiness acceptance.

Any future desktop Codex Razorpay assignment must identify credentials by
location only and must never include secret values.

## 6. Other deferred debt and launch gates

| Item | Frozen status | Effect |
|---|---|---|
| Escrow terminology change | `DEFERRED_TO_FUTURE_PRODUCT_UI_FINETUNING` | Does not block Product freeze or later reconciliation; does not protect factually incorrect financial copy |
| Settings compatibility route/surface disposition | Compatibility entry, summary, deep link, or later redirect may remain temporarily | Exact route movement/deletion is not authorized in Phase B; competing mutation surfaces are not a valid accepted end state |
| Non-India, non-INR, UPI, US bank, PayPal, and manual payout rails | Outside executable V1 | Show only truthful unsupported state; fail closed |
| Creator provider-onboarding UX | Not owned or frozen by Brand Payouts; hosted/hybrid is preferred direction only | Separate Creator Payouts, Security, provider, and Product authority required |
| India withholding/TDS authority | Not authorized in Brand Payouts V1 | If legally applicable, qualified authority is a production launch gate |
| GST invoice, TDS certificate, provider/bank receipt, statutory statement | Not issued by this Product surface | Remain hidden/unavailable until an authoritative issuing service exists |
| Support-system implementation | Deferred to Phase C architecture | Product support behavior is frozen; exact Support/Postmark/case/notification composition is not |
| Exact CSV schema, masking, pagination, DTO, and mobile components | Engineering detail | Not a Product blocker |

## 7. Architecture-preparation gate

```text
BRAND_PAYOUTS_PRODUCT_DECISIONS_REMAINING = NONE
BLOCKERS_TO_PRODUCT_AUTHORITY_FREEZE = NONE

BLOCKERS_TO_INDEPENDENT_ARCHITECTURE_PREPARATION
= NONE_WITHIN_FROZEN_PRODUCT_SCOPE

PHASE_C_AUTHORIZATION
= REQUIRED_BEFORE_ARCHITECTURE_PREPARATION_BEGINS

BRAND_PAYOUTS_C04_SETTLEMENT_HANDOFF_DEPENDENCY
= BLOCKS_FINAL_SETTLEMENT_INTEGRATION_FREEZE_AND_END_TO_END_EXECUTION

RAZORPAY_LIVE_TEST_ACCEPTANCE
= DOES_NOT_BLOCK_PROVIDER_NEUTRAL_PREPARATION
+ BLOCKS_PROVIDER_RUNTIME_ACCEPTANCE
```

The recommended next bounded gate is an explicit Product authorization to begin
Phase C cross-contract preflight. This register neither grants that authorization
nor supplies an architecture or execution plan.

## 8. Register verdict

```text
BRAND_PAYOUTS_DEPENDENCY_AND_DEFERRED_DEBT_REGISTER_V1 = RECORDED
BRAND_PAYOUTS_C04_SETTLEMENT_HANDOFF_DEPENDENCY = OPEN
RAZORPAY PRODUCT/ARCHITECTURE DEBT = OPEN
RAZORPAY LIVE/TEST CAPABILITY ACCEPTANCE = NOT_PROVEN
INDIA_WITHHOLDING_AUTHORITY = PRODUCTION_LAUNCH_GATE_IF_APPLICABLE

BRAND_PAYOUTS_ARCHITECTURE = NOT_YET_AUTHORIZED
BRAND_PAYOUTS_EXECUTION_PLAN = NOT_YET_AUTHORIZED
BRAND_PAYOUTS_IMPLEMENTATION = NOT_AUTHORIZED
RAZORPAY_PROVIDER_EXECUTION = NOT_AUTHORIZED
```
