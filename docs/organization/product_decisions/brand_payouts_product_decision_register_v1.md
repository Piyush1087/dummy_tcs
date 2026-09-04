# Brand Payouts — Product Decision Register V1

`BRAND_PAYOUTS_PRODUCT_DECISION_REGISTER_V1`

**Date:** 2026-09-04

**Status:** FROZEN

**Module:** Brand Payouts V1

**Authority:** Product Authority

**Repository baseline:** `Piyush1087/dummy_tcs@7aeb0512cb8270a6bae1169570e82b080f01807e`

**Implementation:** NOT AUTHORIZED

```text
BRAND_PAYOUTS_SYSTEMS_AUDIT = ACCEPTED
BRAND_PAYOUTS_PRODUCT_LOGIC = FROZEN
BRAND_PAYOUTS_PRODUCT_DECISION_REGISTER = FROZEN
BRAND_PAYOUTS_PRODUCT_DECISIONS_REMAINING = NONE

BRAND_PAYOUTS_ARCHITECTURE = NOT_YET_AUTHORIZED
BRAND_PAYOUTS_EXECUTION_PLAN = NOT_YET_AUTHORIZED
BRAND_PAYOUTS_IMPLEMENTATION = NOT_AUTHORIZED
RAZORPAY_PROVIDER_EXECUTION = NOT_AUTHORIZED
```

## 1. Source and scope

This register freezes the Product decisions confirmed through
`BRAND_PAYOUTS_PRODUCT_LOGIC_FREEZE_V1` after Product Authority accepted:

```text
BRAND_PAYOUTS_SYSTEMS_UNDERSTANDING_AUDIT_V1

BRAND_PAYOUTS_SYSTEMS_AUDIT = COMPLETE
BRAND_PAYOUTS_PHASE_A_GATE = PASS_WITH_BLOCKING_PRODUCT_DECISIONS
```

The Phase A audit remains the AS-IS evidence and gap source. This register does
not duplicate that audit. It resolves its BP-PD-01 through BP-PD-10 Product
questions and supersedes or narrows the earlier recommendations where stated.

This is Product authority only. It does not select a schema, DTO, service,
provider call, mobile component, migration, webhook implementation, support
system, pagination design, or final UI copy.

## 2. Authority hierarchy

Brand Payouts must inherit and reconcile, not replace:

1. accepted Brand Settings financial semantics;
2. canonical Campaign commercial configuration;
3. canonical Collaboration commercial agreement, entitlement, resolution, and
   settlement-eligibility authority;
4. Creator Settings ownership of payout destination and legal profile;
5. the existing pooled Brand vault, funding, Brand Return, and financial ledger;
6. the existing provider integration and Brand financial authorization model;
7. this register's dedicated Brand Payouts surface and Product-state decisions.

Where historical code, fixed 30/70 fields, legacy six-stage Collaboration
semantics, client-authored amounts, or provider-native terminology conflict with
this hierarchy, they are compatibility evidence only.

## 3. BP-PD-01 — Dedicated Payouts surface ownership

**Decision: FROZEN**

`/brand/payouts` becomes the canonical Brand financial operations workspace.

It should eventually provide one coherent Brand-facing experience for:

- pooled Brand vault summary;
- Add funds;
- funding state;
- Brand Return;
- Creator payout obligations;
- scheduled, processing, settled, and recovery states;
- financial activity and ledger projection;
- transaction or obligation detail;
- payment-related support.

The already accepted Settings financial semantics remain unchanged. This
decision changes Product surface ownership and composition only.

It does not create:

- a second vault;
- a second ledger;
- a second funding system;
- a second Brand Return implementation;
- a second provider integration;
- a second financial authorization model.

The accepted Settings Secure escrow route or surface may remain temporarily as
a compatibility entry, summary, deep link, or later redirect. Once the
dedicated Payouts workspace is integrated, Settings must not remain a competing
mutation surface.

There must be one canonical backend implementation for:

- Add funds;
- Brand Return;
- vault state;
- financial ledger.

This supersedes the Phase A recommendation that Payouts remain primarily
read-only while Settings retains all Treasury commands. It does not authorize
moving or deleting routes during Phase B.

### 3.1 Escrow terminology

```text
ESCROW_TERMINOLOGY_CHANGE
= DEFERRED_TO_FUTURE_PRODUCT_UI_FINETUNING
```

This program phase does not replace, retire, or rename `escrow`.

Do not, merely for terminology consistency:

- rename routes;
- rename persistence;
- rename lifecycle states;
- replace labels;
- convert existing wording into Razorpay Route terminology.

Current terminology may remain during later implementation reconciliation.
This deferral does not protect factually incorrect Product claims, including:

- fixed 30/70 payment behavior;
- false release controls;
- fabricated provider-success language;
- non-authoritative tax documents;
- incorrect TDS claims.

Those are Product-truth defects, not terminology fine-tuning.

## 4. BP-PD-02 — Brand role authority and reserve request

**Decision: FROZEN**

The accepted per-member `BrandTeamMember.role` remains Brand financial
authority. `BrandProfile.payoutsWorkspaceRole` is not Product authority.

| Brand role | Permitted Brand Payouts authority |
|---|---|
| Brand Owner | View full Brand financial state; Add funds; request Brand Return; approve a Collaboration reserve; access role-appropriate financial detail and support information |
| Finance Admin | View full Brand financial state; Add funds; request Brand Return; approve a Collaboration reserve; access role-appropriate financial detail and support information |
| Campaign Manager | View authorized Campaign/Collaboration payout status, relevant Creator amount, due date, operational status, and masked Brand financial summaries; progress an authorized Collaboration into a state that produces a reserve request |

A Campaign Manager may not:

- directly lock or reserve pooled Brand funds;
- select or alter the reserve amount;
- Add funds;
- initiate Brand Return;
- release or reverse a Creator payout;
- issue tax or accounting documents;
- access original funding-source credentials or sensitive provider identifiers;
- bypass Owner or Finance Admin approval.

V1 reserve flow:

```text
Campaign Manager-originated Collaboration reserve request
        ↓
Owner or Finance Admin approval
        ↓
financial runtime executes canonical reserve
```

V1 has no pre-approved budget-delegation model. Any future delegation requires
separate Product Authority.

The reserve amount and currency come only from the immutable canonical
Collaboration commercial instruction. Caller-supplied economics are never
authority.

## 5. BP-PD-03 — V1 geography, currency, and payout rail

**Decision: FROZEN**

Executable Creator payout support for V1 is:

```text
geography = INDIA
currency = INR
destination rail = SUPPORTED BANK DESTINATION
provider target = RAZORPAY ROUTE
```

Other destination shapes—including UPI, US bank, PayPal, manual payout, and
non-INR payout—must not be represented as executable or payout-ready in Brand
Payouts V1.

Unsupported obligations may remain visible for truthful operational awareness,
but must explicitly communicate:

```text
UNSUPPORTED_GEOGRAPHY_OR_RAIL
```

They fail closed. Do not silently change or convert currency, route to a manual
payment process, fabricate provider readiness, or treat a stored Creator
destination as executable merely because its data shape exists.

Provider-specific user-facing copy is not frozen by this decision.

## 6. BP-PD-04 — Net terms and immutable due date

**Decision: FROZEN**

Preserve every configured Campaign term:

```text
NET_7
NET_15
NET_30
NET_45
NET_60
```

Do not collapse `NET_45` or `NET_60` into `NET_30`.

The selected term must be snapshotted into the canonical Collaboration
commercial agreement or instruction.

For normal successful entitlement:

```text
paymentDueAt
=
settlementEligibleAt
+
configured net-term calendar days

timezone = Asia/Kolkata
```

The resulting immutable timestamp must use a standard server-authoritative
timestamp representation. India V1 uses calendar days. The frontend never
calculates or alters the due date independently.

For cancellation, termination, or exceptional resolution, the immutable
resolution instruction must define the applicable due date or an explicitly
frozen due-date rule. Do not reuse the normal-success anchor when resolution
authority says otherwise.

## 7. BP-PD-05 — Obligation, transfer, hold, and settlement

**Decision: FROZEN**

```text
BUSINESS OBLIGATION
≠
PROVIDER TRANSFER
≠
PROVIDER SETTLEMENT
```

Create the Creator Shop payout obligation when immutable Collaboration
entitlement is established.

Before its due date, the obligation may be shown as:

```text
SCHEDULED
NOT_YET_DUE
```

Start a provider transfer only when every required gate is true:

- `paymentDueAt` has been reached;
- Creator payout setup is operationally ready;
- the supported geography, currency, and rail contract is satisfied;
- protected funding allocation is valid;
- no blocking resolution, reversal, or provider condition exists.

Do not start a Route transfer early merely to place it on hold as ordinary V1
behavior.

Provider hold and release remain internal platform/provider mechanisms for
supported recovery or provider lifecycle management. V1 has no Brand-facing
`OVERRIDE RELEASE`, `RELEASE NOW`, or `MILESTONE OVERRIDE` control.

Owner or Finance Admin reserve approval never authorizes early provider
settlement.

## 8. BP-PD-06 — Creator payout setup, KYC, and sensitive data

**Decision: FROZEN**

Brand Payouts owns only the Brand-facing projection of Creator payout readiness.
It may display normalized states such as:

```text
CREATOR_SETUP_READY
CREATOR_SETUP_REQUIRED
PROVIDER_REVIEW
PAYOUT_UNAVAILABLE
```

Brand Payouts must not display:

- full Creator bank details;
- account or routing numbers;
- PAN or tax identifiers;
- KYC documents;
- provider-onboarding payloads;
- sensitive failure payloads;
- raw provider diagnostics.

Brand Payouts does not own the Creator payout destination, legal profile, KYC
collection journey, or provider-onboarding UX. Those remain with the relevant
Creator Settings, Creator Payouts, Security, and provider-integration authority.

Brand Payouts consumes only:

```text
normalized readiness
+
bounded recovery guidance
```

Provider-hosted or hybrid onboarding that minimizes Creator Shop storage of
sensitive data is the preferred future direction, but is not frozen here as
Brand Payouts Product Authority.

Any local storage of raw KYC documents or tax IDs requires separate Product,
Security, and provider authority.

## 9. BP-PD-07 — India withholding and TDS

**Decision: FROZEN**

```text
TDS CALCULATION IN BRAND PAYOUTS V1 = NOT AUTHORIZED
TDS DISPLAY = NOT AUTHORIZED
TDS EXPORT / CERTIFICATE = NOT AUTHORIZED
```

Without explicit qualified Legal/Tax authority and a later Product freeze, do
not implement, display, or export:

- a hardcoded 2% TDS or any other rate;
- TDS deductions;
- TDS certificates;
- PAN consequences;
- remittance claims;
- threshold logic.

If applicable withholding is legally required before real India Creator
payouts may operate:

```text
INDIA_WITHHOLDING_AUTHORITY = PRODUCTION_LAUNCH_GATE
```

Engineering must neither ignore nor guess that gate. Until it closes, the
Product must not claim that displayed Creator gross entitlement equals the
final legally payable bank receipt.

## 10. BP-PD-08 — Amount breakdown and downloadable artifacts

**Decision: FROZEN**

Brand Payouts may display only backend-authoritative financial values. Where
available and authoritative, payment detail may distinguish:

- Creator agreed gross fee;
- platform commission;
- GST on platform commission;
- total Brand commercial reserve;
- funding allocation;
- amount scheduled;
- amount processing;
- amount settled;
- amount reversed;
- amount remaining outstanding.

Preserve the India reserve relationship:

```text
Creator gross fee
+ platform commission
+ GST on platform commission
= required Brand commercial reserve
```

Gateway or acquisition charges are separate and appear only when
provider-confirmed. The browser must not calculate financial breakdowns.

The only V1 download permitted by this register is:

```text
BACKEND-AUTHORITATIVE FINANCIAL ACTIVITY CSV
```

It must be labelled as an activity export. It is not a GST invoice, tax
invoice, TDS certificate, provider clearing receipt, bank receipt, or Creator
Shop-certified accounting statement.

Hide GST invoice, TDS folder/certificate, provider receipt, and statutory
statement actions until an authoritative accounting or Payout service issues an
immutable artifact containing:

- issuer;
- document type;
- number or reference;
- authoritative source data;
- issue timestamp;
- availability state.

Browser-generated HTML or PDF documents are not authoritative financial
documents.

## 11. BP-PD-09 — Entitlement, reversal, refund, and Brand Return

**Decision: FROZEN**

Keep these concepts distinct:

```text
COLLABORATION ENTITLEMENT / RESOLUTION

ROUTE PROVIDER REVERSAL

COLLABORATION REFUND TO BRAND

BRAND RETURN OF UNUSED AVAILABLE FUNDS
```

Only an immutable Collaboration resolution instruction or separately authorized
Admin resolution instruction may change Creator entitlement or Brand
commercial-refund entitlement. Payouts executes the resulting trusted financial
instruction.

There is no direct Brand or Creator button to reverse a payout, edit
entitlement, reclaim money, mark a payout unpaid, or convert settled money into
AVAILABLE balance.

A provider reversal:

- restores or adjusts protected payout-allocation lineage;
- records authoritative amount-bearing reversal state;
- does not automatically make the value general Brand AVAILABLE balance.

A separate canonical Collaboration refund instruction determines whether and
how protected funds may be released back to the Brand financial balance.

Brand Return remains restricted to eligible unused AVAILABLE money and original
funding sources.

Post-settlement or partial-reversal handling must preserve:

- original obligation;
- amount settled;
- amount reversed;
- amount still outstanding;
- Collaboration resolution reference;
- provider reconciliation lineage.

No silent balance correction is permitted.

## 12. BP-PD-10 — Notifications, timing, and payment support

**Decision: FROZEN**

### 12.1 Financial notifications

Owner and Finance Admin should receive notification for material states,
including:

- reserve approval required;
- funding shortfall;
- Creator setup blocking payment;
- provider action required;
- failed transfer;
- retry or reconciliation required;
- partial or full reversal;
- Brand Return action required;
- other material financial-recovery states.

A Campaign Manager may receive only role-appropriate operational notification
for a Campaign or Collaboration the actor is authorized to manage and only
where existing notification authority permits it.

Ordinary notification copy must not expose sensitive provider or funding detail.

### 12.2 Visible timing

Show:

- exact stored due date;
- current observed status;
- relevant last-updated or provider-observed timestamp;
- truthful blocking reason where available.

Do not promise unverified instant payout, clearing, same-day completion, T+N
settlement, or guaranteed provider completion time.

### 12.3 Payment support action

Freeze a Brand-facing `GET SUPPORT` or `REPORT AN ISSUE` action. Final button
wording remains frontend/UX copy authority.

The action should be available from relevant payout obligations,
transaction/activity rows, Brand Return items, financial-detail views, and
material action-required states.

Where available, a request carries server-authoritative references for:

- Brand;
- Campaign;
- Collaboration;
- payout obligation;
- financial ledger item;
- Brand Return request;
- provider execution reference available only to restricted support systems.

The Brand may choose an issue category and provide a note. Exact categories are
not frozen. Successful submission must return a visible acknowledgement or
reference.

A payment support request does not change financial state or Creator
entitlement; initiate a provider reversal, bank chargeback, or Brand Return;
resolve a Collaboration dispute; or mark a payout failed or settled.

```text
PAYMENT SUPPORT REQUEST
≠ COLLABORATION COMMERCIAL DISPUTE
≠ PROVIDER DISPUTE
≠ BANK CHARGEBACK
≠ FINANCIAL REVERSAL
```

The later architecture may reuse the existing Support domain, a durable support
case, Postmark, internal notification routing, or a bounded combination. That
choice is not made in Phase B.

## 13. Brand Payouts summary and ledger meaning

The dedicated overview is a backend-authoritative operational projection.
Where authoritative, headline information may include:

- AVAILABLE funds;
- pending funding;
- committed or protected funds;
- scheduled Creator payout obligations;
- processing payout obligations;
- settled amount;
- action-required count;
- relevant as-of time.

Do not show one ambiguous balance that combines incompatible buckets. Exact
cards and layout remain frontend decisions.

There is one canonical financial ledger. Brand Payouts must not create another
journal.

The Brand-facing activity view may combine or project canonical ledger
movements, payout-obligation lifecycle events, transfer/settlement/reversal
events, Brand Return lifecycle, and canonical Collaboration refund events. Every
row must identify whether it represents:

- money movement;
- reserved or protected allocation;
- obligation;
- provider-execution event;
- return, refund, or reversal;
- informational lifecycle event.

Do not present `OBLIGATION CREATED`, `PROCESSING`, or `PROVIDER ACCEPTED` as
`SETTLED`, `CLEARED`, or `PAID`.

The Brand-visible ledger is a Creator Shop financial-activity projection, not
automatically a statutory accounting ledger or provider statement. Pagination,
filters, DTO shape, and storage implementation remain architecture decisions.

## 14. Inherited authority preserved

This register carries forward without reopening:

1. one pooled Brand vault;
2. one canonical financial ledger;
3. pending funding is not AVAILABLE;
4. Owner and Finance Admin hold Treasury mutation authority;
5. Campaign Manager is not a Treasury mutation actor;
6. Collaboration owns agreed terms, entitlement, and resolution;
7. Payouts owns financial execution and provider-confirmed money movement;
8. Brand Return is original-source-only;
9. Brand Return is distinct from Collaboration refund and Route reversal;
10. no Brand withdrawal bank or destination is used for Brand Return;
11. fixed 30/70 is not canonical execution;
12. configurable Advance is not a universal automatic first payout;
13. Creator payout provider target is Razorpay Route, not historical RazorpayX
    Payouts;
14. provider-native IDs and states are not ordinary Product vocabulary;
15. there is no direct Brand or Creator provider-dashboard or payout-reversal
    control;
16. there is no fixed payout SLA without verified authority;
17. no TDS or tax artifact may be fabricated;
18. manual payout rail remains outside V1 unless separately reopened.

## 15. Phase A recommendations resolved

| Decision | Phase B disposition |
|---|---|
| BP-PD-01 | **SUPERSEDED:** Payouts becomes the canonical operations workspace; Settings retains its accepted semantics but becomes compatibility/summary/deep-link/redirect rather than a competing mutation surface after integration |
| BP-PD-02 | **NARROWED AND FROZEN:** Campaign Manager may originate the Collaboration state progression that produces a reserve request, but cannot lock funds; Owner/Finance approval remains mandatory |
| BP-PD-03 | **CONFIRMED:** India, INR, supported bank destination, Razorpay Route; every unsupported rail fails closed |
| BP-PD-04 | **NARROWED AND FROZEN:** all five net terms remain distinct; normal due date uses `settlementEligibleAt`, calendar days, and `Asia/Kolkata`; exceptional resolution owns its rule |
| BP-PD-05 | **CONFIRMED:** obligation at entitlement; provider transfer only when due and all gates pass; no ordinary early-held transfer or Brand release control |
| BP-PD-06 | **NARROWED AND FROZEN:** Brand Payouts owns normalized readiness only; collection/onboarding and sensitive data remain external owner concerns; hosted/hybrid is direction, not this register's freeze |
| BP-PD-07 | **CONFIRMED:** TDS calculation/display/export is not authorized; qualified withholding authority may be a production launch gate |
| BP-PD-08 | **CONFIRMED:** backend-authoritative activity CSV only; no synthetic tax/provider/accounting artifact |
| BP-PD-09 | **CONFIRMED AND EXPANDED:** entitlement, provider reversal, Collaboration refund, and Brand Return remain separate with immutable lineage and no direct reversal control |
| BP-PD-10 | **CONFIRMED AND EXPANDED:** role-appropriate notifications, stored timing truth, and non-mutating contextual payment support are required |

## 16. Engineering choices that are not Product blockers

The following remain deliberately outside this Product freeze:

- exact database schema or DTO names;
- exact provider API calls and webhook implementation;
- internal service names;
- exact mobile component choice;
- exact button copy or support category vocabulary;
- exact activity CSV schema;
- support-system implementation;
- exact masking implementation;
- pagination implementation;
- migration mechanics.

No additional Product decision should be created merely because these
engineering details remain open.

## 17. Product freeze verdict

```text
BRAND_PAYOUTS_PRODUCT_DECISION_REGISTER_V1 = FROZEN
BRAND_PAYOUTS_PRODUCT_LOGIC = FROZEN
BRAND_PAYOUTS_PRODUCT_DECISIONS_REMAINING = NONE

NEXT_BOUNDED_GATE
= EXPLICIT_PRODUCT_AUTHORIZATION_FOR_PHASE_C_CROSS_CONTRACT_PREFLIGHT

BRAND_PAYOUTS_ARCHITECTURE = NOT_YET_AUTHORIZED
BRAND_PAYOUTS_EXECUTION_PLAN = NOT_YET_AUTHORIZED
BRAND_PAYOUTS_IMPLEMENTATION = NOT_AUTHORIZED
```
