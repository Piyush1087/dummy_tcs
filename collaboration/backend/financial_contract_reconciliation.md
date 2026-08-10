# Collaboration Phase 3.1B — Financial Command, Read & Runtime Reconciliation

**Status:** CANONICAL / FROZEN FOR PHASE 3.1B  
**Depends on:** `collaboration_schema.prisma` v1.2 + `financial_boundary_reconciliation.md` + `financial_schema_delta.md`  
**Implementation target:** `Piyush1087/creator-commerce-backend-v2-clone`  
**Purpose:** Reconcile the frozen Collaboration command/read/runtime contracts with the v1.2 financial model before the Phase 3 production correction is implemented.

---

## 1. Authority and scope

This artifact is a canonical financial overlay for:

- `collaboration/backend/command_contract.md`;
- `collaboration/backend/read_model_contract.md`;
- `collaboration/contracts/collaboration_runtime_contract.md`;
- `collaboration/contracts/collaboration_commercial_resolution_contract.md`;
- `collaboration/contracts/collaboration_integration_contract.md`.

Where those older frozen files describe Securement as only the agreed Creator cash fee, this v1.2 reconciliation supersedes that narrow amount definition.

It does **not** change:

- Collaboration identity;
- the five workflow stages;
- one-counter Negotiation;
- configurable Advance percentage;
- Fulfillment/Production/Publishing rules;
- Pause being reserved/unassigned;
- Payout owning money movement;
- Manual being a supported but dormant MVP rail capability.

---

## 2. Canonical financial vocabulary

For a locked Collaboration:

```text
G = agreedCreatorFee
C = platformCommissionRateSnapshot
P = platformCommissionAmount
T = platformCommissionGstRateSnapshot
GST = platformCommissionGstAmount
R = requiredSecuredAmount
```

For India MVP:

```text
P   = G × C / 100
GST = P × T / 100
R   = G + P + GST
```

Current policy inputs:

```text
pricing tier: FOUNDERS_BETA / Founder's Plan
platform commission: 7%
business geography: IN
GST on platform commission: 18%
```

GST applies **only** to platform commission.

Gateway/card acquisition charge is outside `R`.

Creator TDS/withholding is deferred for MVP.

---

## 3. Command Contract reconciliation

### 3.1 Negotiation completion

The existing negotiation commands remain:

- `AcceptCreatorProposal`;
- `CounterCreatorProposal`;
- `AcceptBrandCounter`;
- `DeclineBrandCounter`;
- `EndNegotiation` where allowed.

When terms become locked, the command runtime must now atomically resolve and persist:

```text
agreedCreatorFee
advancePercentageSnapshot
advanceAmount
balanceAmount
pricingTierSnapshot
businessCountryCodeSnapshot
financialPolicyVersionSnapshot
platformCommissionRateSnapshot
platformCommissionAmount
platformCommissionGstRateSnapshot
platformCommissionGstAmount
requiredSecuredAmount
termsLockedAt
```

For a zero Creator cash fee, amount fields resolve to zero and Securement remains `NOT_REQUIRED`.

No client may submit the commission/GST rate as a trusted commercial decision.

The backend resolves them from Pricing/Subscription + Business Geography policy.

### 3.2 `RequestEscrowFunding` semantic rename

The existing command name may remain temporarily for compatibility, but its canonical semantic meaning changes from:

```text
collect/fund this Collaboration
```

to:

```text
request reservation of the Collaboration commercial reserve
from the Brand's pooled Escrow vault
```

Target canonical concept:

`RequestEscrowReserve` / `RequestEscrowLock`.

Actor: `BRAND`.

Valid when:

- lifecycle is active;
- stage is Securement;
- payment rail is `PLATFORM_ESCROW`;
- locked terms exist;
- required commercial reserve > 0.

Effect:

- request Escrow to reserve exactly `requiredSecuredAmount`;
- do not invoke Razorpay directly from Collaboration;
- do not mark Securement completed from Brand assertion;
- persist/update a stable request/integration reference as needed;
- remain awaiting authoritative Escrow result if reservation is asynchronous.

### 3.3 Authoritative reserve confirmation

The old `ConfirmEscrowFunding` trusted SYSTEM boundary remains valid in principle but is canonically interpreted as:

`ConfirmEscrowReserve` / authoritative Escrow lock confirmation.

Trusted input must establish:

```text
confirmed reserve amount
stable escrow lock/reference
currency
external/integration confirmation evidence
```

Securement completes only when:

```text
confirmedSecuredAmount >= requiredSecuredAmount
```

For new canonical India Collaborations, `requiredSecuredAmount` includes Creator fee + commission + GST on commission.

Brand cannot self-confirm this command.

### 3.4 Insufficient pooled balance

If Brand Escrow has insufficient available balance:

- Collaboration remains in Securement;
- no financial state is fabricated;
- Escrow returns a structured insufficient-balance outcome;
- Brand may top up the pooled Escrow vault through Escrow/Billing independently;
- reserve/lock can be retried with the same command/idempotency semantics.

Collaboration does not create a Razorpay card order or expose a VAN itself.

### 3.5 Manual payment

Manual commands remain canonically supported:

- `ReportManualPayment`;
- `ConfirmManualPaymentReceived`;
- `ReportManualPaymentNotReceived`.

For MVP:

- new Collaborations may continue to default to `PLATFORM_ESCROW`;
- no Brand/Creator rail-selection command is added;
- Manual is not required to be reachable from the MVP UI;
- existing Manual obligations, if any, remain completable.

The v1.2 platform commission/GST reserve formula applies to the platform Escrow rail. A future Manual-plan/geography policy must explicitly define how platform fees are collected; Phase 3.1B does not invent it.

---

## 4. Runtime Contract reconciliation

### 4.1 Commercial-policy resolution boundary

Before Securement can begin for a locked cash Collaboration, runtime must resolve:

1. authoritative Brand subscription/tier;
2. authoritative Brand business country;
3. plan-owned platform commission rate;
4. geography-owned commission-tax rate;
5. stable policy version.

For India MVP:

```text
FOUNDERS_BETA -> 7% commission
IN -> 18% GST on commission
```

These values are snapshotted at terms lock.

Runtime must not re-read mutable pricing/geography policy later to rewrite an already-locked Collaboration.

### 4.2 Securement invariant

Old invariant:

```text
secure 100% of Creator cash fee
```

is refined to:

```text
secure 100% of the Collaboration commercial reserve
```

For India MVP:

```text
Creator gross fee
+ platform commission
+ GST on platform commission
```

This reserve must be fully confirmed before Securement completes.

### 4.3 Gateway/card charges

Gateway/card charges are not Collaboration commercial reserve.

Runtime must not:

- add card surcharge to `requiredSecuredAmount`;
- make card surcharge refundable through Collaboration resolution;
- derive Collaboration state from payment-acquisition fee status.

Brand Escrow owns those charges and their ledger treatment.

Current India MVP card acquisition rule:

- 2% processing charge;
- gateway GST as charged by gateway;
- non-refundable.

NEFT/VAN processing charge = 0%.

### 4.4 TDS

No Creator TDS is calculated or deducted in Collaboration runtime for MVP.

Existing Escrow TDS fields remain non-authoritative/future Payout infrastructure.

Brand refunds never receive TDS treatment.

---

## 5. Read Model Contract reconciliation

The canonical detail read must expose the v1.2 commercial obligation without forcing the frontend to recompute it.

### 5.1 Commercial agreement projection

Add/project:

```text
pricingTierSnapshot
businessCountryCodeSnapshot
financialPolicyVersionSnapshot

agreedCreatorFee
currency
advancePercentageSnapshot
advanceAmount
balanceAmount

platformCommissionRateSnapshot
platformCommissionAmount
platformCommissionGstRateSnapshot
platformCommissionGstAmount

paymentRail
securementState
requiredSecuredAmount
confirmedSecuredAmount
escrowLockRef
termsLockedAt
securementCompletedAt
```

The frontend must be able to distinguish:

```text
Creator gross fee
vs
Brand total commercial reserve
```

It must not infer platform commission or GST from current plan/config.

### 5.2 Escrow presentation boundary

Collaboration read responses may expose enough reserve status/reference to explain Securement, but must not duplicate full Brand Escrow vault truth.

Do not return as Collaboration-owned truth:

- Brand vault available balance unless sourced through an explicit Escrow projection;
- virtual account details;
- Razorpay payment/order internals;
- gateway processing fee ledger;
- complete financial ledger.

Those belong to Escrow/Billing/Payout surfaces.

### 5.3 Financial resolution projection

Canonical read projection must expose:

```text
creatorGrossEntitlementAmount
creatorCommercialRefundAmount
platformCommissionRetainedAmount
platformCommissionRefundAmount
platformCommissionGstRetainedAmount
platformCommissionGstRefundAmount
brandCommercialRefundEntitlementAmount
currency
```

Compatibility aliases may still expose:

```text
creatorEntitlementAmount
brandRefundEntitlementAmount
```

but new frontend/runtime code should prefer the decomposed canonical fields.

### 5.4 TDS presentation

Do not present a calculated TDS amount in Collaboration MVP read models.

If historical/legacy Escrow infrastructure contains TDS values, they are not promoted to canonical Collaboration truth.

---

## 6. Financial Resolution Contract reconciliation

### 6.1 Creator entitlement is gross commercial entitlement

`creatorGrossEntitlementAmount` is the amount of Creator commercial fee the resolution policy preserves.

It is not Creator net bank receipt after tax/withholding.

### 6.2 Proportional platform commission

Platform commission retained follows Creator entitlement proportionally:

```text
platformCommissionRetainedAmount
= creatorGrossEntitlementAmount
  × platformCommissionRateSnapshot / 100
```

Refunded commission:

```text
platformCommissionRefundAmount
= original platformCommissionAmount
  - platformCommissionRetainedAmount
```

### 6.3 Proportional GST on commission

GST retained follows retained commission:

```text
platformCommissionGstRetainedAmount
= platformCommissionRetainedAmount
  × platformCommissionGstRateSnapshot / 100
```

Refunded GST:

```text
platformCommissionGstRefundAmount
= original platformCommissionGstAmount
  - platformCommissionGstRetainedAmount
```

### 6.4 Brand commercial refund

```text
brandCommercialRefundEntitlementAmount
= creatorCommercialRefundAmount
+ platformCommissionRefundAmount
+ platformCommissionGstRefundAmount
```

No gateway/card processing fee is added to this refund entitlement.

### 6.5 Compatibility fields

Until legacy readers are retired:

```text
creatorEntitlementAmount
= creatorGrossEntitlementAmount
```

```text
brandRefundEntitlementAmount
= brandCommercialRefundEntitlementAmount
```

Both compatibility and canonical decomposition must be written atomically when a financial resolution is decided.

---

## 7. Existing frozen cancellation/hard-stop policies under v1.2

The existing policy decides the Creator **gross commercial entitlement** first.

Examples:

### Negotiation / pre-securement exit

```text
creatorGrossEntitlementAmount = 0
```

Therefore commission/GST retained are also zero and the full commercial reserve, if any was reserved unexpectedly, is refundable.

### Brand-protected post-securement exit

Creator entitlement remains the frozen Advance amount.

Then:

- commission retained = plan rate × Advance entitlement;
- GST retained = tax rate × retained commission;
- remainder of Creator commercial + commission + GST is Brand refund entitlement.

### Fulfillment hard stop / Creator non-performance where Creator entitlement = 0

Commission retained = 0.

GST retained = 0.

Full Collaboration commercial reserve is Brand-refund entitlement.

### Production hard stop where Creator entitlement = actual Advance amount

Commission and GST are retained only in the same proportion as the Creator gross entitlement.

### Normal success

Creator gross entitlement = full agreed Creator fee.

Platform retains full commission and full GST-on-commission amount.

Brand commercial refund entitlement = 0.

---

## 8. Integration Contract reconciliation

### Pricing/Subscription integration

Collaboration requires a resolver boundary equivalent to:

```text
resolvePlanCommercialPolicy(brandProfileId, effectiveAt)
```

Minimum output:

```text
subscriptionTier
policy identity/version if applicable
platformCommissionRate
```

For current Founder's Plan: 7%.

Do not embed the 7% literal inside Collaboration domain services.

### Business Geography integration

Collaboration requires a resolver boundary equivalent to:

```text
resolveBusinessGeographyFinancialPolicy(countryCode, effectiveAt)
```

Minimum India output:

```text
countryCode = IN
policyVersion
platformCommissionTaxRate = 18%
escrowSupported = true
```

Gateway top-up policy remains Escrow-owned even if the same geography policy source carries those values.

### Escrow integration

Target Collaboration-to-Escrow boundary:

```text
reserveFunds({
  collaborationId,
  brandProfileId,
  amount,
  currency,
  idempotencyKey
})
```

The request amount is `requiredSecuredAmount`.

Escrow owns:

- vault lookup;
- available-balance check;
- row/concurrency lock;
- reserve ledger write;
- CollaborationEscrowLock execution row;
- authoritative reserve reference;
- pooled balance updates.

Collaboration receives only the result needed to advance/hold Securement.

### Payout integration

No dedicated Payout redesign occurs in Phase 3.1B.

Future Payout input remains based on gross entitlements:

```text
creatorGrossEntitlementAmount
brandCommercialRefundEntitlementAmount
currency
commercialResolutionRef
financialPolicyVersionSnapshot
```

TDS/net Creator payout remain future Payout-owned values.

---

## 9. Production model reconciliation requirements

The Phase 3 production correction should RETAIN + ADAPT:

- `BrandSubscription`;
- `BrandEscrowVault`;
- `CollaborationEscrowLock`;
- `EscrowTransactionLedger`;
- `CreatorSettlementProfile`;
- Collaboration Phase 3 Negotiation/Securement services.

It should not create a second escrow aggregate or second subscription domain.

`CollaborationEscrowLock` mapping:

```text
agreedCreatorFee -> grossCreatorQuote
platformCommissionAmount -> platformCommissionFee
platformCommissionGstAmount -> platformCommissionGst
requiredSecuredAmount -> totalEscrowLockedAmount
```

Existing TDS fields remain zero/non-authoritative for MVP Collaboration.

Legacy fixed-tranche booleans/enums may remain for migration but new runtime must not branch on `ADVANCE_30` / `FINAL_70` semantics.

---

## 10. Required Phase 3 implementation correction

The existing Phase 3 implementation is not financially complete until all of the following are true:

1. terms lock resolves/snapshots plan + geography financial policy;
2. `requiredSecuredAmount` is the full commercial reserve, not only Creator fee;
3. Collaboration requests a pooled Escrow reserve/lock rather than direct per-Collaboration Razorpay funding;
4. reserve confirmation comes only from trusted Escrow/System evidence;
5. read model exposes Creator fee vs commission vs GST vs reserve separately;
6. financial-resolution calculation supports proportional commission/GST retention/refund;
7. card/gateway charges remain outside Collaboration reserve/refund;
8. TDS remains skipped in MVP Collaboration runtime;
9. Manual remains dormant but preserved;
10. no fixed 30/70 escrow logic is reintroduced.

---

## 11. Test requirements for Phase 3 correction

At minimum test:

- Founder's Plan resolves 7% commission through pricing resolver;
- India policy resolves 18% GST on commission only;
- ₹100,000 Creator fee -> ₹7,000 commission -> ₹1,260 GST -> ₹108,260 reserve;
- GST is not calculated on Creator fee;
- zero Creator fee -> zero commission/GST/reserve;
- terms lock snapshots policy values and does not change when source policy changes later;
- Escrow reserve request uses total commercial reserve;
- insufficient pooled balance does not complete Securement;
- Brand cannot self-confirm reserve;
- authoritative reserve confirmation completes Securement only at sufficient amount;
- gateway/card fee is excluded from required reserve;
- 30% Creator entitlement on ₹100,000 produces ₹2,100 retained commission, ₹378 retained GST and ₹75,782 Brand commercial refund entitlement;
- Creator entitlement zero produces full commercial reserve refund entitlement;
- normal success retains full commission/GST and no Brand refund;
- TDS remains zero/unapplied in Collaboration runtime;
- existing Phase 1–3 Negotiation/Securement behavior does not regress.

---

## 12. Freeze statement

The v1.2 financial model is now canonical for Collaboration implementation.

The remaining open financial areas are deliberately external/deferred:

- final dynamic pricing-plan administration UX;
- non-India policies;
- dedicated Payout runtime;
- India TDS/Section 194O implementation;
- invoice/tax artifact execution;
- exact Razorpay reserve/top-up orchestration details beyond the existing Escrow domain.

These open areas do not permit Collaboration to invent alternative commission, tax, reserve or refund semantics.