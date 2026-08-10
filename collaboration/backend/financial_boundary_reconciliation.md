# Collaboration Phase 3.1 — Financial Boundary, Schema & Runtime Reconciliation

**Status:** CANONICAL / FROZEN FOR PHASE 3 FINANCIAL RECONCILIATION  
**Scope:** Collaboration ↔ Pricing/Subscription ↔ Business Geography ↔ Brand Escrow ↔ Payout  
**Implementation target:** `Piyush1087/creator-commerce-backend-v2-clone`  
**Phase 3 baseline:** `738acec36bbb1570f685369184f3e19e042bb4c2`  

## 1. Purpose

Phase 3 correctly established canonical Negotiation and Securement commands, but its financial boundary still treats the agreed Creator fee as the complete amount that must be secured. Production already contains a richer Brand Escrow model, including pooled vault balances, Collaboration escrow locks, platform commission/GST fields, gateway surcharge fields, Creator settlement details and Razorpay-facing vault metadata.

This artifact freezes how those existing financial primitives must be reconciled with the canonical Collaboration model before Phase 3 is considered financially complete.

It does **not** redesign the future Payout module. It defines the minimum ownership, schema and runtime boundary required so later Payout work does not have to undo Collaboration assumptions.

## 2. Frozen ownership model

```text
Brand Subscription / Pricing Policy
        │
        │ resolves platform commission rate
        ▼
Business Geography Financial Policy
        │
        │ resolves geography-specific tax/payment rules
        ▼
Collaboration
        │
        │ owns commercial obligation + entitlement decision
        ▼
Brand Escrow
        │
        │ owns pooled funds, reserve/lock, Razorpay funding, gateway cost, ledger
        ▼
Payout
        │
        │ owns payment/refund execution and future Creator withholding/net payout
        ▼
Authoritative execution confirmation
```

Canonical ownership:

- **Pricing/Subscription owns** the applicable platform commission rate.
- **Business Geography owns** geography-specific financial/tax/payment policy.
- **Collaboration owns** the agreed Creator gross commercial, snapshotted commercial-policy result, required commercial reserve and final entitlement/refund decision.
- **Brand Escrow owns** Brand vault balances, Razorpay virtual account/card funding, reserve/lock execution, gateway charges and immutable financial ledger movement.
- **Payout owns** actual Creator payment/refund execution, future TDS/withholding calculation, net Creator payout, invoices/tax artifacts and authoritative execution confirmation.

Collaboration must never become the ledger or wallet authority.

## 3. MVP geography scope

Only **India (`IN`)** is financially canonical in this artifact.

The architecture must be geography-extensible, but no US/rest-of-world tax or payment policy is invented here.

India policy frozen for MVP:

- platform commission is resolved from the Brand pricing plan;
- current Founder's Plan commission = **7%**;
- **GST applies only to the platform commission**;
- platform-commission GST rate for the current India policy = **18%**;
- NEFT / bank transfer into the Razorpay virtual account carries **0% platform processing charge**;
- card top-up processing charge = **2%**, plus gateway GST as charged by the payment gateway;
- card processing charge is **non-refundable**;
- gateway/card processing charges are not part of the Collaboration commercial reserve;
- Creator TDS/withholding is deliberately **skipped for MVP** despite future India payout requirements;
- Brand refunds never receive TDS treatment.

### 3.1 TDS explicit deferral

Future India marketplace payout logic may require Section 194O-style withholding at Creator payout, including thresholds/PAN conditions. Because the expected standard rate is operationally small and Payout is scheduled for dedicated work later, **no TDS deduction is executed in the MVP Collaboration runtime**.

Existing production fields such as `expectedTdsPercentage`, `calculatedTdsDeduction`, `tdsBufferBalance` and `netCreatorPayoutPool` are retained as legacy/future Payout infrastructure, but Phase 3 must not make them canonical Collaboration calculations.

For MVP:

```text
creatorGrossEntitlement = creator amount decided by Collaboration
creatorNetPayout        = same amount at the Collaboration boundary
TDS deduction           = 0 in Collaboration runtime
```

This is an implementation deferral, not a permanent statement that India TDS is unnecessary.

## 4. Pricing-plan reconciliation

Production already contains:

- `SubscriptionTier` including `FOUNDERS_BETA`;
- `BrandSubscription` linked 1:1 to Brand;
- Razorpay subscription/customer/plan references;
- older `BrandProfile.planType` / `subscriptionStatus` fields.

Production does **not** yet contain a proper canonical plan-commercial definition carrying the Founder's Plan economics.

Current Founder's Plan business rule:

```text
name: Founder's Plan
subscription price:
  first month: $0
  thereafter: $99/month
platform commission: 7%
```

The canonical implementation must **reuse** the existing subscription/tier model rather than creating a second subscription domain.

Required pricing-policy capability:

```text
resolvePlatformCommissionRate(brandSubscription, businessGeography)
    -> percentage
```

For the current Founder's Plan, this resolves to `7%`.

Do not hard-code `7%` inside Collaboration Negotiation/Securement services. A pricing-policy resolver/configuration boundary may initially contain the single current plan, but the resulting rate must be snapshotted onto the Collaboration when Creator-specific terms lock.

Future plan changes must not rewrite already-locked Collaboration economics.

## 5. India commercial reserve formula

Definitions:

```text
G = agreed Creator gross fee
C = platform commission rate snapshot
P = platform commission amount = G × C
T = GST rate snapshot on platform commission
GST = P × T
R = required commercial reserve
```

For India MVP:

```text
R = G + P + GST
```

Example:

```text
G                      = ₹100,000
C                      = 7%
P                      = ₹7,000
T                      = 18%
GST                    = ₹1,260
required reserve (R)   = ₹108,260
```

**GST is not applied to the Creator gross fee.**

## 6. Gateway/card fee is outside Collaboration reserve

Brand Escrow already supports pooled funding via Razorpay virtual account / bank transfer and card top-up.

A card top-up may charge the Brand:

```text
target vault allocation
+ 2% gateway processing charge
+ gateway GST on that processing charge
```

Only the target vault allocation becomes escrow balance.

Therefore:

```text
requiredSecuredAmount = commercial reserve only
```

It must **not** include:

- card processing surcharge;
- gateway GST on that surcharge;
- TDS/withholding;
- future payout provider fees unless separately frozen.

The 2% card processing charge is non-refundable regardless of Collaboration outcome.

Gateway charges remain represented by Escrow transaction/ledger fields, not by Collaboration entitlement.

## 7. Brand Escrow is pooled; Collaboration requests a reserve/lock

Production already models a Brand vault with:

- total pooled balance;
- locked Campaign/Collaboration funds;
- available balance;
- Razorpay virtual account identity;
- ledger entries.

Canonical Securement should therefore not conceptually mean "collect money specifically for this Collaboration from Razorpay".

It means:

```text
Collaboration commercial obligation
        ↓
request reserve/lock from Brand Escrow
        ↓
BrandEscrowVault.availableBalance
        ↓
CollaborationEscrowLock
```

If sufficient available balance exists, Escrow atomically reserves the required amount.

If insufficient balance exists, Escrow reports insufficient available balance. The Brand may independently top up the pooled vault through NEFT/VAN or card. After authoritative top-up credit, the reserve may be retried.

Razorpay is Escrow-owned and must not become a Collaboration dependency.

## 8. Phase 3 funding gateway reconciliation

Phase 3 introduced a provider-neutral `CollaborationFundingGateway.requestFunding(...)` and trusted SYSTEM funding confirmation. The provider-neutral/trusted-confirmation principle is valid, but the operation is semantically too close to per-Collaboration money collection.

Target boundary:

```text
CollaborationEscrowGateway.reserveFunds({
  collaborationId,
  brandProfileId,
  amount,
  currency,
  idempotencyKey
})
```

Expected result shape may include:

```text
RESERVED
INSUFFICIENT_AVAILABLE_BALANCE
PENDING
```

and a stable reserve/lock reference.

The exact NestJS interface name is implementation-owned. The semantic ownership is frozen:

- Collaboration requests a reserve;
- Escrow decides/executes vault locking;
- Escrow/Razorpay webhooks own top-up truth;
- only a trusted Escrow/System confirmation may complete Securement.

An ordinary Brand command may request Securement but may never self-confirm that funds are secured.

## 9. Collaboration commercial snapshot requirements

When terms become locked, Collaboration must snapshot the commercial-policy result required to execute the obligation consistently.

Required canonical values:

```text
pricingTierSnapshot
businessCountryCodeSnapshot
financialPolicyVersionSnapshot

agreedCreatorFee
commercialCurrency
advancePercentageSnapshot
advanceAmount
balanceAmount

platformCommissionRateSnapshot
platformCommissionAmount
platformCommissionGstRateSnapshot
platformCommissionGstAmount

requiredSecuredAmount
```

For India MVP:

```text
requiredSecuredAmount
= agreedCreatorFee
+ platformCommissionAmount
+ platformCommissionGstAmount
```

Existing `requiredSecuredAmount = agreedCreatorFee` behavior is superseded by this artifact.

The Creator fee remains distinct from the Brand's required commercial reserve.

## 10. Existing `CollaborationEscrowLock` reconciliation

Production already contains `CollaborationEscrowLock` with useful fields:

```text
grossCreatorQuote
platformCommissionFee
platformCommissionGst
totalEscrowLockedAmount
expectedTdsPercentage
calculatedTdsDeduction
netCreatorPayoutPool
advanceTrancheDisbursed
finalTrancheDisbursed
lockReleasedViaRefund
```

Classification:

### RETAIN / CANONICALIZE

- `collaborationId`
- `brandProfileId`
- Creator gross commercial amount concept
- `platformCommissionFee`
- `platformCommissionGst`
- `totalEscrowLockedAmount`
- lock identity / timestamps

### RETAIN AS LEGACY/FUTURE PAYOUT SUPPORT, NOT COLLABORATION AUTHORITY

- `expectedTdsPercentage`
- `calculatedTdsDeduction`
- `netCreatorPayoutPool`

These may later be populated by Payout/India tax policy. For MVP Collaboration they must remain zero/unapplied or otherwise non-authoritative.

### RETIRE FROM CANONICAL SEMANTICS

- `advanceTrancheDisbursed`
- `finalTrancheDisbursed`

The Collaboration contract supports configurable Advance percentage. There is no canonical fixed 30/70 payout architecture.

Migration may retain columns temporarily if existing code/data depends on them, but new canonical runtime must not decide behavior from these booleans.

## 11. Escrow ledger reconciliation

Production `EscrowTransactionLedger` already owns financial movement and includes:

- transaction type;
- collaboration reference;
- amount/currency;
- gateway processing surcharge;
- gateway surcharge GST;
- idempotency key;
- gateway reference;
- transaction status.

This is the correct ownership location for actual money movement.

Legacy fixed-tranche enum semantics such as:

```text
ADVANCE_30
FINAL_70
```

must not drive canonical Collaboration behavior.

Target semantics should represent calculated obligations rather than percentages embedded in enum names, e.g. conceptually:

```text
ADVANCE
BALANCE
PLATFORM_COMMISSION
PLATFORM_COMMISSION_GST
COLLABORATION_REFUND
```

The exact enum migration must be reconciled against production consumers before deletion/rename. Existing ledger history must remain readable.

## 12. Financial resolution decomposition

`CollaborationFinancialResolution` must decide **commercial entitlement**, not payment execution.

At minimum the resolved financial projection must be able to distinguish:

```text
creatorGrossEntitlementAmount
creatorCommercialRefundAmount

platformCommissionRetainedAmount
platformCommissionRefundAmount

platformCommissionGstRetainedAmount
platformCommissionGstRefundAmount

brandCommercialRefundEntitlementAmount
```

The platform commission follows Creator commercial entitlement proportionally.

Canonical rule:

```text
platformCommissionRetainedAmount
= platformCommissionRateSnapshot × creatorGrossEntitlementAmount
```

and:

```text
platformCommissionRefundAmount
= original platformCommissionAmount
- platformCommissionRetainedAmount
```

GST follows the corresponding commission allocation:

```text
platformCommissionGstRetainedAmount
= GST rate snapshot × platformCommissionRetainedAmount

platformCommissionGstRefundAmount
= original platformCommissionGstAmount
- platformCommissionGstRetainedAmount
```

Brand commercial refund entitlement is:

```text
creatorCommercialRefundAmount
+ platformCommissionRefundAmount
+ platformCommissionGstRefundAmount
```

Gateway/card processing fee is excluded and remains non-refundable.

## 13. Partial-entitlement example

Initial terms:

```text
Creator fee                        ₹100,000
Advance percentage                     30%
Platform commission                    7%
Commission GST                         18%

Original commission                 ₹7,000
Original GST                         ₹1,260
Original reserve                   ₹108,260
```

If final policy leaves the Creator entitled only to the 30% Advance:

```text
Creator gross entitlement           ₹30,000
Creator commercial refund           ₹70,000

Commission retained                  ₹2,100
Commission refund                    ₹4,900

GST retained                           ₹378
GST refund                              ₹882

Brand commercial refund             ₹75,782
```

The Brand does not recover any earlier card processing surcharge.

## 14. Zero-fee Collaboration behavior

If `agreedCreatorFee = 0`:

```text
platformCommissionAmount = 0
platformCommissionGstAmount = 0
requiredSecuredAmount = 0
```

Securement remains `NOT_REQUIRED` and deterministic progression continues according to the frozen Collaboration workflow.

Brand Support/product/service consideration remains separate and does not become platform commission base unless a future pricing policy explicitly changes this.

## 15. Manual payment rail

Manual remains a supported canonical rail capability but is **not exposed for MVP**.

Current MVP provisioning may continue defaulting to `PLATFORM_ESCROW`.

Do not introduce a Brand/Creator command for selecting `MANUAL` merely to make the dormant path reachable.

Future plans/geographies may resolve to Manual. Existing Manual runtime capability should therefore remain isolated and removable/disableable without corrupting canonical Escrow behavior.

## 16. Payout minimum future-facing contract

Dedicated Payout implementation is deferred.

The Collaboration/Escrow work must leave Payout a clean future input rather than pre-solving it.

Conceptual Payout input:

```text
collaborationId
creatorIdentity
currency
creatorGrossEntitlementAmount
brandCommercialRefundEntitlementAmount
commercialResolutionRef
financialPolicyVersionSnapshot
```

Future India Payout may additionally resolve:

```text
tdsRateSnapshot
tdsAmount
creatorNetPayoutAmount
withholding evidence
invoice/tax artifact references
```

For MVP, TDS is not calculated or deducted.

Payout remains authoritative for actual transfer/refund confirmation.

## 17. Geography policy model — target requirement

A geography-linked financial policy must be representable without embedding country rules directly into Collaboration services.

Conceptual contract:

```text
BusinessGeographyFinancialPolicy
- countryCode
- policyVersion
- platformCommissionTaxApplicable
- platformCommissionTaxRate
- creatorWithholdingApplicable
- escrowSupported
- bankTransferProcessingRate
- cardProcessingRate
- cardProcessingRefundable
```

India MVP resolution:

```text
countryCode = IN
platformCommissionTaxApplicable = true
platformCommissionTaxRate = 18%
creatorWithholdingApplicable = false   // MVP execution deferral only
escrowSupported = true
bankTransferProcessingRate = 0%
cardProcessingRate = 2%
cardProcessingRefundable = false
```

Do not place platform commission rate in this geography policy; it is plan-owned.

## 18. Pricing policy model — target requirement

A plan/tier-linked commercial policy must be representable using the existing `BrandSubscription` / `SubscriptionTier` domain.

Conceptual contract:

```text
BrandPlanCommercialPolicy
- subscriptionTier
- displayName
- currency
- introductoryMonthlyPrice
- introductoryPeriod
- recurringMonthlyPrice
- platformCommissionRate
- effectiveFrom
- effectiveTo
```

Current Founder's Plan canonical values:

```text
subscriptionTier = FOUNDERS_BETA
displayName = Founder's Plan
introductoryMonthlyPrice = 0
introductoryPeriod = first month
recurringMonthlyPrice = 99 USD
platformCommissionRate = 7%
```

Implementation may initially use configuration/seeded data rather than a new dynamic admin UI. The policy must nevertheless be owned outside Collaboration and its resolved rate snapshotted into each locked Collaboration.

## 19. Securement runtime — corrected target

For PLATFORM_ESCROW:

```text
terms locked
    ↓
calculate + persist commercial snapshot
    ↓
requiredSecuredAmount = Creator fee + commission + GST-on-commission
    ↓
request Brand Escrow reserve
    ↓
if insufficient available balance:
    SECUREMENT remains blocked/waiting for Brand funding
    Brand tops up pooled vault independently
    retry reserve
    ↓
trusted Escrow/System confirms lock
    ↓
confirmedSecuredAmount = actual commercial reserve locked
    ↓
when confirmedSecuredAmount >= requiredSecuredAmount
    Securement COMPLETED
```

`confirmedSecuredAmount` is the commercial reserve locked for this Collaboration. It excludes card surcharge, gateway GST and TDS.

## 20. Read-model implications

Brand/Creator Collaboration reads may expose commercial components needed to understand the locked deal, but must preserve ownership boundaries.

Useful Collaboration projection:

```text
creatorGrossFee
advancePercentage
advanceAmount
balanceAmount
platformCommissionRate
platformCommissionAmount
platformCommissionGstRate
platformCommissionGstAmount
requiredSecuredAmount
confirmedSecuredAmount
securementState
```

Gateway/card surcharge is Escrow/Billing information, not Creator compensation.

Creator-facing UI must never present platform commission/GST as Creator earnings.

## 21. Migration / implementation classification

### RETAIN

- `BrandSubscription`
- `SubscriptionTier.FOUNDERS_BETA`
- `BrandProfile.countryCode`
- `BrandEscrowVault`
- `EscrowTransactionLedger`
- `CollaborationEscrowLock`
- `CreatorSettlementProfile`
- Razorpay virtual-account/card infrastructure
- idempotency/ledger concepts

### ADAPT

- Phase 3 `requiredSecuredAmount` calculation
- Phase 3 funding gateway → reserve/lock semantics
- `CollaborationEscrowLock` as execution snapshot of canonical commercial reserve
- financial-resolution decomposition
- escrow ledger payout-tranche semantics
- read model for new commercial components

### RETIRE FROM CANONICAL AUTHORITY

- fixed `ADVANCE_30` / `FINAL_70` semantics
- `advanceTrancheDisbursed` / `finalTrancheDisbursed` as workflow authority
- hard-coded 30/70 payout calculations
- Collaboration-owned TDS calculation
- treating Creator fee alone as total required escrow reserve
- treating gateway/card processing fee as part of Collaboration reserve/refund
- direct Razorpay/payment-collection ownership inside Collaboration

### NEW

- plan-commercial-policy resolver/definition
- geography financial-policy resolver/definition
- Collaboration commercial-policy snapshot fields
- decomposed commission/GST entitlement/refund fields
- reserve/lock integration boundary between Collaboration and Brand Escrow

## 22. Phase 3 correction requirements derived from this artifact

Before Phase 3 is frozen, implementation must reconcile at minimum:

1. keep `PLATFORM_ESCROW` as the MVP/default rail; Manual remains dormant;
2. resolve the current Brand plan and snapshot the 7% Founder's Plan commission rate;
3. resolve India policy and snapshot 18% GST **only on platform commission**;
4. calculate/persist commission amount and commission GST amount when terms lock;
5. calculate `requiredSecuredAmount = Creator fee + commission + commission GST`;
6. replace per-Collaboration funding semantics with pooled Brand Escrow reserve/lock semantics, reusing production escrow infrastructure;
7. keep gateway/card surcharge outside the reserve and refund model;
8. preserve non-refundable 2% card processing policy in Escrow;
9. do not implement TDS deduction in MVP;
10. extend financial-resolution persistence so partial outcomes proportionally retain/refund commission and its GST;
11. remove fixed 30/70 semantics from new canonical execution while preserving legacy data compatibility;
12. ensure read model exposes truthful commercial/reserve components;
13. do not start dedicated Payout implementation.

## 23. Explicitly deferred

Not part of this reconciliation implementation:

- dynamic plan-management/admin UI;
- US/rest-of-world financial policies;
- FX execution;
- Creator TDS/194O execution for MVP;
- tax filing/remittance workflows;
- payout invoices/tax certificates;
- payout provider selection/transport redesign;
- refund execution provider details;
- Manual rail exposure;
- changes to the frozen Collaboration cancellation/entitlement formulas other than decomposing commission/GST consistently with those formulas.

## 24. Authority and follow-on artifact updates

This file is the canonical Phase 3.1 financial reconciliation decision record. It supersedes older production financial assumptions where they conflict, including fixed 30/70 payout semantics and Creator-fee-only securement.

Before implementation is frozen, affected canonical layers must be reconciled deliberately:

- `collaboration/backend/collaboration_schema.prisma`
- `collaboration/backend/command_contract.md`
- `collaboration/backend/read_model_contract.md`
- `collaboration/backend/implementation_map.md`
- relevant frozen commercial/runtime contracts
- executable Zod/DTO boundaries where affected

Do not patch those files piecemeal until the Phase 3.1 schema delta is explicitly reviewed.
