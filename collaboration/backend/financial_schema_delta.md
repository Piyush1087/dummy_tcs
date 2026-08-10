# Collaboration Phase 3.1A — Canonical Financial Schema Delta

**Status:** CANONICAL / FROZEN FOR PHASE 3.1A  
**Depends on:** `financial_boundary_reconciliation.md` + frozen Collaboration schema v1.1  
**Implementation target:** `Piyush1087/creator-commerce-backend-v2-clone`  
**Purpose:** Define the exact schema-level delta required to reconcile Collaboration commercial obligation, Brand Escrow locking, India commission/GST policy and future Payout boundaries without making Collaboration the financial ledger.

---

## 1. Frozen principles

1. `agreedCreatorFee` is the Creator's **gross commercial fee**.
2. Platform commission is **plan-owned** and snapshotted when Collaboration terms lock.
3. India GST applies **only to platform commission**, not to Creator gross fee.
4. For India MVP:
   - Founder's Plan commission = `7%`;
   - GST on commission = `18%`;
   - card top-up processing charge = `2%` + gateway GST, owned by Escrow and non-refundable;
   - NEFT / Razorpay virtual-account top-up processing charge = `0%`;
   - TDS execution is deferred for MVP.
5. `requiredSecuredAmount` means the total **Collaboration commercial reserve** that Escrow must lock.
6. For India MVP:

```text
requiredSecuredAmount
= agreedCreatorFee
+ platformCommissionAmount
+ platformCommissionGstAmount
```

7. Gateway/card acquisition charges are **not** included in `requiredSecuredAmount`.
8. Collaboration owns entitlement/refund decisions. Escrow owns actual balance/reserve/ledger movement. Payout owns future Creator payout/refund execution and withholding.
9. Commission and GST follow Creator entitlement/refund proportionally.
10. TDS fields already present in production Escrow remain future/Payout infrastructure and are not canonical Collaboration calculations for MVP.

---

## 2. Canonical schema ownership split

### Collaboration-owned persisted truth

- Creator-specific gross fee and locked terms;
- pricing-plan snapshot/reference used to resolve commission;
- business-geography snapshot used to resolve financial policy;
- commission rate/amount snapshot;
- GST-on-commission rate/amount snapshot;
- required commercial reserve;
- confirmed reserved amount/reference;
- final Creator gross entitlement;
- Creator-commercial refund entitlement;
- retained/refunded platform commission;
- retained/refunded GST on platform commission;
- total Brand commercial refund entitlement.

### Escrow-owned persisted truth

- pooled Brand escrow balance;
- available balance;
- locked balance;
- Razorpay virtual account and funding state;
- Collaboration reserve/lock execution;
- gateway/card processing surcharge and gateway GST;
- ledger entries;
- actual reserve/release/refund movement.

### Payout-owned persisted truth

Deferred from this schema delta except for references already required by Collaboration Settlement:

- Creator payout instruction/execution;
- Brand refund execution;
- TDS / withholding calculation;
- Creator net payout;
- invoice/tax artifacts;
- authoritative payout/refund confirmation.

---

## 3. `CollaborationCommercialAgreement` — exact delta

The existing canonical model remains the owner of the locked Creator-specific commercial obligation.

### Existing fields retained unchanged

```prisma
applicationProposedFee      Decimal?
brandCounterFee             Decimal?
agreedCreatorFee            Decimal?
currency                    String
advancePercentageSnapshot   Int
advanceAmount               Decimal?
balanceAmount               Decimal?
paymentRail                 CollaborationPaymentRail
securementState             CollaborationSecurementState?
requiredSecuredAmount       Decimal?
confirmedSecuredAmount      Decimal?
fundingInstructionRef       String?
fundingConfirmationRef      String?
termsLockedAt               DateTime?
securementCompletedAt       DateTime?
```

### New canonical fields

Add:

```prisma
pricingTierSnapshot String? @map("pricing_tier_snapshot") @db.VarChar(80)
businessCountryCodeSnapshot String? @map("business_country_code_snapshot") @db.VarChar(2)
financialPolicyVersionSnapshot String? @map("financial_policy_version_snapshot") @db.VarChar(80)

platformCommissionRateSnapshot Decimal? @map("platform_commission_rate_snapshot") @db.Decimal(7, 4)
platformCommissionAmount Decimal? @map("platform_commission_amount") @db.Decimal(14, 2)

platformCommissionGstRateSnapshot Decimal? @map("platform_commission_gst_rate_snapshot") @db.Decimal(7, 4)
platformCommissionGstAmount Decimal? @map("platform_commission_gst_amount") @db.Decimal(14, 2)

escrowLockRef String? @map("escrow_lock_ref")
```

### Semantics

#### `pricingTierSnapshot`

Stores the pricing tier/policy identity used to resolve commission at term-lock time. For current MVP this resolves from `FOUNDERS_BETA` / Founder's Plan.

This is a snapshot identifier, not the mutable source of plan economics.

#### `businessCountryCodeSnapshot`

Stores the two-letter business-geography code used to resolve financial policy. India MVP = `IN`.

It must come from the authoritative Brand business geography, not from creator geography.

#### `financialPolicyVersionSnapshot`

Stores the version of geography-specific financial policy used when terms lock. This prevents later policy changes from silently rewriting an active Collaboration.

Example initial India policy version may be implementation-defined, e.g. `IN_MVP_2026_01`, provided it is stable and explicit.

#### `platformCommissionRateSnapshot`

Percentage resolved from Pricing/Subscription and frozen at terms lock.

Canonical value representation is percentage points, e.g. `7.0000` means 7%.

#### `platformCommissionAmount`

For the locked Creator fee:

```text
agreedCreatorFee × platformCommissionRateSnapshot / 100
```

#### `platformCommissionGstRateSnapshot`

Geography-policy-owned tax rate applied only to platform commission. India MVP = `18.0000`.

#### `platformCommissionGstAmount`

```text
platformCommissionAmount × platformCommissionGstRateSnapshot / 100
```

GST is not applied to `agreedCreatorFee`.

#### `requiredSecuredAmount`

Existing field is retained but its canonical meaning is superseded/clarified:

```text
Creator gross fee
+ platform commission
+ GST on platform commission
```

For India MVP this is the amount the Brand Escrow domain must reserve for the Collaboration.

#### `confirmedSecuredAmount`

Means the commercial reserve authoritatively confirmed as reserved/locked by Escrow.

It does not mean money merely requested from the Brand and does not include gateway/card acquisition charges.

#### `escrowLockRef`

Stable reference to the Escrow-owned Collaboration lock/reserve record. Collaboration does not own the lock ledger itself.

### Nullability

The new policy/commission/GST fields are nullable in the migration because:

- existing/legacy rows predate this policy snapshot;
- negotiable Collaborations do not have locked economics until terms lock.

For **new canonical Collaborations after Phase 3.1 implementation**, once terms are locked and `agreedCreatorFee` is resolved, the runtime must require all applicable policy snapshot fields to be populated before Securement can proceed.

For a zero-fee Collaboration, rate/policy snapshots still persist when applicable, while amount fields resolve to zero.

---

## 4. `CollaborationExecutionSnapshot` — no duplicate financial amounts

Do **not** duplicate commission amount/GST amount/reserve amount into `CollaborationExecutionSnapshot`.

The execution snapshot already owns immutable upstream Campaign context including:

```prisma
campaignCommercialContext
advancePercentageSnapshot
commercialCurrency
```

That remains useful evidence, but Creator-specific commercial economics belong to `CollaborationCommercialAgreement` because Negotiation may resolve them after provisioning.

No schema delta is required here except that `campaignCommercialContext` may continue to preserve upstream evidence.

---

## 5. `CollaborationFinancialResolution` — exact decomposition delta

The existing canonical fields:

```prisma
creatorEntitlementAmount Decimal?
brandRefundEntitlementAmount Decimal?
```

are too coarse to support proportional commission/GST retention and refund without reverse engineering.

### Rename semantics without destructive migration

For compatibility, retain the existing columns initially:

- `creatorEntitlementAmount`
- `brandRefundEntitlementAmount`

Their canonical read semantics become aliases/projections of the richer decomposition below until a later migration chooses whether to rename/remove them.

### New canonical fields

Add:

```prisma
creatorGrossEntitlementAmount Decimal? @map("creator_gross_entitlement_amount") @db.Decimal(14, 2)
creatorCommercialRefundAmount Decimal? @map("creator_commercial_refund_amount") @db.Decimal(14, 2)

platformCommissionRetainedAmount Decimal? @map("platform_commission_retained_amount") @db.Decimal(14, 2)
platformCommissionRefundAmount Decimal? @map("platform_commission_refund_amount") @db.Decimal(14, 2)

platformCommissionGstRetainedAmount Decimal? @map("platform_commission_gst_retained_amount") @db.Decimal(14, 2)
platformCommissionGstRefundAmount Decimal? @map("platform_commission_gst_refund_amount") @db.Decimal(14, 2)

brandCommercialRefundEntitlementAmount Decimal? @map("brand_commercial_refund_entitlement_amount") @db.Decimal(14, 2)
```

### Canonical formulas

Let:

```text
G = original agreedCreatorFee
E = final Creator gross entitlement
P = original platformCommissionAmount
T = platformCommissionGstRateSnapshot
GST = original platformCommissionGstAmount
```

Then:

```text
creatorCommercialRefundAmount = G - E
```

```text
platformCommissionRetainedAmount
= platformCommissionRateSnapshot × E / 100
```

```text
platformCommissionRefundAmount
= P - platformCommissionRetainedAmount
```

```text
platformCommissionGstRetainedAmount
= platformCommissionRetainedAmount × T / 100
```

```text
platformCommissionGstRefundAmount
= GST - platformCommissionGstRetainedAmount
```

```text
brandCommercialRefundEntitlementAmount
= creatorCommercialRefundAmount
+ platformCommissionRefundAmount
+ platformCommissionGstRefundAmount
```

Gateway/card processing charges are excluded.

### Compatibility aliases

During migration:

```text
creatorEntitlementAmount
= creatorGrossEntitlementAmount
```

and:

```text
brandRefundEntitlementAmount
= brandCommercialRefundEntitlementAmount
```

New canonical runtime should populate both old compatibility fields and new decomposed fields atomically until legacy consumers are retired.

---

## 6. `CollaborationSettlement` — no TDS schema expansion in MVP

Do not add TDS fields to canonical Collaboration Settlement during Phase 3.1A.

Existing settlement fields remain:

```prisma
creatorSettlementAmount
brandRefundAmount
payoutInstructionRef
payoutExecutionRef
refundExecutionRef
authoritativeConfirmationRef
```

For MVP, `creatorSettlementAmount` represents the Creator gross amount instructed to future Payout execution because TDS is deferred.

A dedicated Payout phase may later add:

```text
tdsRateSnapshot
tdsAmount
creatorNetPayoutAmount
withholdingEvidenceRef
```

under Payout ownership rather than making Collaboration tax-law authority.

---

## 7. Production `CollaborationEscrowLock` — retain and canonicalize

Production already has:

```prisma
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

Phase 3.1A does **not** create another lock model.

### Canonical mapping

```text
CollaborationCommercialAgreement.agreedCreatorFee
→ CollaborationEscrowLock.grossCreatorQuote

CollaborationCommercialAgreement.platformCommissionAmount
→ CollaborationEscrowLock.platformCommissionFee

CollaborationCommercialAgreement.platformCommissionGstAmount
→ CollaborationEscrowLock.platformCommissionGst

CollaborationCommercialAgreement.requiredSecuredAmount
→ CollaborationEscrowLock.totalEscrowLockedAmount
```

The lock is execution evidence owned by Escrow; the commercial agreement is the Collaboration obligation source.

### TDS fields

For MVP:

```text
expectedTdsPercentage = 0
calculatedTdsDeduction = 0
netCreatorPayoutPool = gross Creator amount at the current Escrow compatibility boundary
```

These fields are not canonical Collaboration decision inputs.

### Legacy tranche fields

`advanceTrancheDisbursed` and `finalTrancheDisbursed` must remain legacy compatibility only. New Collaboration execution must not use them to decide entitlement, because Advance is configurable and not fixed 30/70.

---

## 8. Production `EscrowTransactionLedger` — no duplicate Collaboration ledger

Retain the existing ledger as financial movement authority.

The ledger already supports:

- collaboration reference;
- amount/currency;
- gateway surcharge;
- gateway GST;
- gateway reference;
- transaction status;
- idempotency.

Phase 3.1A does not add ledger fields into Collaboration models.

### Enum reconciliation requirement

Existing fixed-tranche semantics such as:

```text
ADVANCE_30
FINAL_70
```

must not be used by new canonical runtime.

A later production schema patch should add percentage-neutral values before any legacy values are retired, for example conceptually:

```text
ADVANCE
BALANCE
PLATFORM_COMMISSION
PLATFORM_COMMISSION_GST
COLLABORATION_REFUND
```

Exact production enum names may be finalized during implementation reconciliation, but new runtime must not encode fixed percentages.

---

## 9. Pricing-plan schema — extend existing subscription domain, do not duplicate

Production already contains:

- `SubscriptionTier.FOUNDERS_BETA`;
- `BrandSubscription`;
- Razorpay subscription/plan references.

Phase 3.1A requires a plan-commercial policy source but does not require a full pricing administration module.

### Recommended minimum production model

Add one reusable external-domain model rather than hard-coding plan economics in Collaboration:

```prisma
model BrandPlanCommercialPolicy {
  id String @id @default(cuid())
  subscriptionTier SubscriptionTier @map("subscription_tier")
  marketCountryCode String? @map("market_country_code") @db.VarChar(2)

  displayName String @map("display_name")
  currency SubscriptionCurrency
  introductoryMonthlyPrice Decimal @map("introductory_monthly_price") @db.Decimal(12, 2)
  introductoryMonths Int @default(0) @map("introductory_months")
  recurringMonthlyPrice Decimal @map("recurring_monthly_price") @db.Decimal(12, 2)
  platformCommissionRate Decimal @map("platform_commission_rate") @db.Decimal(7, 4)

  effectiveFrom DateTime @map("effective_from")
  effectiveTo DateTime? @map("effective_to")

  createdAt DateTime @default(now()) @map("created_at")
  updatedAt DateTime @updatedAt @map("updated_at")

  @@index([subscriptionTier, marketCountryCode, effectiveFrom])
  @@map("brand_plan_commercial_policies")
}
```

For the India Founder's Plan initial seed:

```text
subscriptionTier = FOUNDERS_BETA
marketCountryCode = IN
displayName = Founder's Plan
currency = USD
introductoryMonthlyPrice = 0
introductoryMonths = 1
recurringMonthlyPrice = 99
platformCommissionRate = 7
```

If implementation prefers configuration/seeded constants for MVP instead of a table, that is acceptable only if:

- ownership remains in Pricing/Subscription;
- Collaboration accesses it through a resolver boundary;
- the resolved tier/rate are snapshotted onto Collaboration;
- no `7%` literal is embedded in Negotiation/Securement services.

The canonical Collaboration working schema does not need to define this external model itself; production integration may do so.

---

## 10. Business-geography financial policy schema

Country-specific financial rules must remain outside Collaboration.

### Recommended minimum production model

```prisma
model BusinessGeographyFinancialPolicy {
  id String @id @default(cuid())
  countryCode String @map("country_code") @db.VarChar(2)
  policyVersion String @map("policy_version") @db.VarChar(80)

  platformCommissionTaxApplicable Boolean @default(false) @map("platform_commission_tax_applicable")
  platformCommissionTaxRate Decimal @default(0) @map("platform_commission_tax_rate") @db.Decimal(7, 4)

  creatorWithholdingApplicable Boolean @default(false) @map("creator_withholding_applicable")
  escrowSupported Boolean @default(true) @map("escrow_supported")

  bankTransferProcessingRate Decimal @default(0) @map("bank_transfer_processing_rate") @db.Decimal(7, 4)
  cardProcessingRate Decimal @default(0) @map("card_processing_rate") @db.Decimal(7, 4)
  cardProcessingRefundable Boolean @default(false) @map("card_processing_refundable")

  effectiveFrom DateTime @map("effective_from")
  effectiveTo DateTime? @map("effective_to")

  createdAt DateTime @default(now()) @map("created_at")
  updatedAt DateTime @updatedAt @map("updated_at")

  @@unique([countryCode, policyVersion])
  @@index([countryCode, effectiveFrom])
  @@map("business_geography_financial_policies")
}
```

India MVP seed:

```text
countryCode = IN
platformCommissionTaxApplicable = true
platformCommissionTaxRate = 18
creatorWithholdingApplicable = false   // MVP execution deferral
escrowSupported = true
bankTransferProcessingRate = 0
cardProcessingRate = 2
cardProcessingRefundable = false
```

This policy owns financial rules for Brand business geography. It does not own the platform commission rate.

---

## 11. Snapshot timing

### Provisioning

At Collaboration provisioning:

- preserve Brand business country in locked upstream context;
- preserve Brand subscription/tier reference if available;
- do not calculate final commission amount for a negotiable Collaboration before `agreedCreatorFee` is resolved.

### Fixed-fee Collaboration

When fixed terms are locked during provisioning/runtime initialization:

1. resolve current Brand plan commercial policy;
2. resolve current business-geography financial policy;
3. snapshot tier/country/policy version/rates;
4. calculate commission and GST;
5. calculate required reserve;
6. enter Securement or skip if total reserve is zero.

### Negotiable Collaboration

When Brand accepts Creator proposal or Creator accepts Brand counter:

1. resolve and snapshot policies exactly once;
2. lock `agreedCreatorFee`;
3. calculate commission/GST/reserve;
4. persist all commercial snapshot fields atomically with Negotiation lock event;
5. evaluate Securement.

Once `termsLockedAt` is set, later Brand plan/geography policy changes do not rewrite those values.

---

## 12. Securement schema semantics after Phase 3.1A

### `requiredSecuredAmount`

Commercial reserve required from Brand Escrow.

### `confirmedSecuredAmount`

Commercial reserve authoritatively locked/reserved by Brand Escrow.

### `fundingInstructionRef`

Legacy-compatible field may remain, but new canonical semantics should migrate toward an Escrow reserve/lock instruction/reference rather than a direct Razorpay collection instruction.

### `fundingConfirmationRef`

Trusted confirmation/evidence that the reserve was locked. It must not be generated by an ordinary Brand client.

### `escrowLockRef`

Direct stable linkage/correlation to `CollaborationEscrowLock` or equivalent Escrow-domain record.

Do not store Razorpay order/payment/VAN data in `CollaborationCommercialAgreement`.

---

## 13. Financial-resolution invariants

For any `RESOLVED` financial resolution after terms were locked:

```text
0 <= creatorGrossEntitlementAmount <= agreedCreatorFee
```

```text
creatorGrossEntitlementAmount
+ creatorCommercialRefundAmount
= agreedCreatorFee
```

```text
platformCommissionRetainedAmount
+ platformCommissionRefundAmount
= platformCommissionAmount
```

```text
platformCommissionGstRetainedAmount
+ platformCommissionGstRefundAmount
= platformCommissionGstAmount
```

```text
brandCommercialRefundEntitlementAmount
= creatorCommercialRefundAmount
+ platformCommissionRefundAmount
+ platformCommissionGstRefundAmount
```

All calculations use the locked snapshot rates/amounts, never the Brand's current plan or current geography policy.

Rounding strategy must be centralized and deterministic at the currency's supported precision; individual services must not implement different rounding rules.

---

## 14. Zero-fee and negotiation-exit behavior

### Zero-fee locked Collaboration

```text
agreedCreatorFee = 0
platformCommissionAmount = 0
platformCommissionGstAmount = 0
requiredSecuredAmount = 0
```

Securement is `NOT_REQUIRED`.

### Negotiation exit before terms lock

There is no locked Creator fee/commission/GST obligation.

Financial resolution may remain:

```text
Creator entitlement = 0
Brand commercial refund = 0
```

No fabricated commission/GST values are required.

---

## 15. TDS — explicit MVP schema decision

No new canonical TDS fields are added to Collaboration models in Phase 3.1A.

Production Escrow fields:

```text
expectedTdsPercentage
calculatedTdsDeduction
tdsBufferBalance
netCreatorPayoutPool
```

remain retained for compatibility/future Payout work but are not used to reduce Collaboration entitlement or Securement reserve in MVP.

For MVP:

```text
Creator gross payout instruction = creatorGrossEntitlementAmount
TDS deducted by Collaboration = 0
Brand refund TDS = 0
```

The future Payout module may implement Section 194O-oriented India withholding rules separately without changing the frozen Collaboration entitlement formulas.

---

## 16. Required canonical Prisma v1.2 patch summary

`collaboration_schema.prisma` v1.1 → v1.2 should add only Collaboration-owned financial fields:

### `CollaborationCommercialAgreement`

```text
pricingTierSnapshot
businessCountryCodeSnapshot
financialPolicyVersionSnapshot
platformCommissionRateSnapshot
platformCommissionAmount
platformCommissionGstRateSnapshot
platformCommissionGstAmount
escrowLockRef
```

### `CollaborationFinancialResolution`

```text
creatorGrossEntitlementAmount
creatorCommercialRefundAmount
platformCommissionRetainedAmount
platformCommissionRefundAmount
platformCommissionGstRetainedAmount
platformCommissionGstRefundAmount
brandCommercialRefundEntitlementAmount
```

The working canonical Collaboration schema should **not** duplicate full Pricing, Geography, Brand Escrow or Payout models. Those remain external-domain dependencies documented by reconciliation artifacts.

---

## 17. Production integration delta

When Codex implements this delta against production, it should:

### RETAIN

- `BrandSubscription`;
- `SubscriptionTier.FOUNDERS_BETA`;
- `BrandEscrowVault`;
- `CollaborationEscrowLock`;
- `EscrowTransactionLedger`;
- `CreatorSettlementProfile`;
- Razorpay vault/top-up infrastructure.

### ADAPT

- `CollaborationCommercialAgreement` with policy/commission/GST snapshots;
- `CollaborationFinancialResolution` with decomposed entitlement/refund fields;
- `CollaborationEscrowLock` mapping to canonical obligation values;
- Securement gateway from collection semantics toward pooled-vault reserve/lock semantics;
- ledger enum/runtime paths away from fixed `ADVANCE_30` / `FINAL_70` authority.

### ADD

- Pricing commercial-policy resolver and, if appropriate, seeded `BrandPlanCommercialPolicy` persistence;
- Business-geography financial-policy resolver and, if appropriate, seeded `BusinessGeographyFinancialPolicy` persistence;
- stable calculation helper for commission/GST/reserve and proportional resolution decomposition.

### DEFER

- full Payout redesign;
- TDS execution;
- creator net payout calculations;
- invoices/tax documentation;
- non-India financial policies;
- dynamic plan administration UI.

---

## 18. Migration/backfill policy

Legacy rows cannot safely be assigned invented commercial-policy snapshots.

Migration rules:

- add new snapshot/decomposition columns nullable;
- do not backfill `7%`/`18%` blindly onto historical Collaborations;
- new canonical terms-lock commands populate all applicable fields;
- existing canonical Phase 3 test fixtures may be migrated/updated explicitly where their known policy context is controlled;
- legacy reads should surface policy snapshot as unavailable rather than fabricate it;
- historical `CollaborationEscrowLock` values remain ledger/execution evidence and may later support an explicit audited backfill if required.

---

## 19. Read-model impact

Phase 2 canonical reads must later expose, where terms are locked:

```text
pricingTierSnapshot
businessCountryCodeSnapshot
platformCommissionRateSnapshot
platformCommissionAmount
platformCommissionGstRateSnapshot
platformCommissionGstAmount
requiredSecuredAmount
confirmedSecuredAmount
```

Financial resolution reads must expose the decomposed entitlement/refund values.

Brand-facing views may show total commercial reserve. Creator-facing views must not incorrectly present platform commission/GST as Creator compensation.

Creator-facing Creator fee remains `agreedCreatorFee`.

---

## 20. Freeze decision

Phase 3.1A freezes the **schema target**, not yet the production implementation.

The next step is:

> **Phase 3.1B — Patch canonical `collaboration_schema.prisma` v1.1 → v1.2 and reconcile command/read/runtime contracts.**

Only after v1.2 is patched and validated should Codex receive the Phase 3 financial correction implementation prompt.
