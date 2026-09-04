# Brand Payouts — Frontend State Family Register V1

`BRAND_PAYOUTS_FRONTEND_STATE_FAMILY_REGISTER_V1`

**Date:** 2026-09-04

**Status:** FROZEN

**Authority:** Product Authority

**Product register:** [Brand Payouts Product Decision Register V1](brand_payouts_product_decision_register_v1.md)

**Frontend implementation:** NOT AUTHORIZED

```text
BRAND_PAYOUTS_FRONTEND_STATE_FAMILY_REGISTER = FROZEN
STITCH = NOT_REQUIRED_BY_DEFAULT
```

## 1. Purpose and boundary

This register freezes materially different user-visible truths for the future
`/brand/payouts` workspace. It does not freeze exact card design, layout, final
copy, component names, DTOs, or implementation-facing state IDs.

Frontend architecture may improve the identifiers below, but may not collapse
states whose meaning, authority, action, financial consequence, or recovery
differs.

This register finalizes the provisional state-family input in
`BRAND_PAYOUTS_SYSTEMS_UNDERSTANDING_AUDIT_V1`. It must be consumed with the
Product Decision Register rather than treated as an independent business-state
authority.

## 2. Cross-cutting state rules

1. Every amount, balance bucket, due date, permission, obligation status,
   provider observation, Brand Return state, and available action comes from a
   server-authoritative contract.
2. Page sections may load, fail, refresh, or become stale independently.
3. A transient dependency failure should not erase a valid last-known state;
   stale truth must be labelled with its as-of time.
4. Frontend redaction is presentation only. Backend projection and
   authorization remain authoritative.
5. A user-visible status must never strengthen source truth. Accepted,
   processing, held, or eligible does not mean settled.
6. Incompatible financial buckets must remain separate. One ambiguous
   `balance` is prohibited.
7. Provider-native IDs, raw diagnostics, funding credentials, and Creator
   sensitive data are not ordinary Brand-visible state.
8. A support request is its own workflow and never mutates financial state.
9. Existing Settings Treasury, Collaboration, Creator Settings, Support, and
   Aurora patterns must be inspected before proposing new components or Stitch.

## 3. Page and data states

| Product-semantic state | Required visible truth | Required behavior |
|---|---|---|
| Initial / loading | The financial workspace is being initialized; no amount or status has yet been established | Preserve a stable shell; do not flash zero balances, empty-state claims, or stale actions as current truth |
| Independently loading sections | One or more overview, obligation, activity, Brand Return, or support sections are still loading while others may be ready | Scope loading treatment to the affected section and preserve usable authoritative sections |
| Partial source coverage | Some source projections are available while one or more sources are unavailable or incomplete | Identify affected coverage; do not combine incomplete totals into a complete-looking summary |
| Stale last-known state | Previously authoritative data is displayed but freshness cannot currently be confirmed | Show last-successful/as-of time and a stale indicator; restrict actions whose safety requires fresh authority |
| Refreshing | Existing authoritative data remains visible while a newer observation is requested | Keep current state readable; avoid resetting to zero/empty; show bounded refresh feedback |
| Empty / new Brand | No authoritative funding, obligation, Return, or activity record exists for the Brand | Explain the genuine empty condition and expose only role-authorized next actions; do not confuse this with vault initialization failure |
| Ready overview | Current authoritative buckets, counts, obligations, activity, and as-of time are available | Present incompatible buckets separately and map actions from server authority |
| Backend or provider dependency unavailable | A required source cannot presently answer or execute | Preserve safe last-known truth where available, label the unavailable dependency semantically, and expose only permitted recovery/support |
| Legacy historical state cannot be safely normalized | Historical data exists but cannot be assigned a stronger canonical financial or provider meaning | Display bounded compatibility/history language; do not fabricate due, paid, settled, tax, rail, or provider truth |

## 4. Authority states

| Product-semantic state | Required visible truth | Permitted action boundary |
|---|---|---|
| Owner full financial access | Active Brand Owner has full Brand financial projection authority | May see full role-appropriate state, Add funds, request Brand Return, approve reserve, and access financial detail/support |
| Finance Admin full financial access | Active Finance Admin has full Brand financial projection authority | Same Product-level financial actions as Owner, subject to server-authoritative current action availability |
| Campaign Manager operational / read-only access | Campaign Manager has bounded access only for otherwise-authorized Campaigns and Collaborations | May see relevant Creator amount, due date, operational status, and masked Brand summary; may progress Collaboration so it produces a reserve request; may not perform Treasury mutation |
| Server-redacted sensitive detail | Data exists but the actor must not receive or view the sensitive fields | Show a stable redacted or omitted projection; never depend on client masking of broadly returned secrets |
| Reserve approval required | A canonical Collaboration reserve request exists and awaits an authorized financial actor | Owner/Finance may receive the approval action; Campaign Manager sees bounded operational status only |
| Not authorized | Actor lacks Brand, role, scope, membership, or object authority | Fail closed with no protected financial data or mutation control; provide a bounded route/recovery path only where authorized |

The frontend must not use `BrandProfile.payoutsWorkspaceRole` as Product
authority. It consumes server-enforced authority rooted in
`BrandTeamMember.role`.

## 5. Funding and reserve states

| Product-semantic state | Required visible truth | Must not imply |
|---|---|---|
| Funding pending | A funding attempt or provider observation exists but funds are not AVAILABLE | Spendable credit, successful provider completion, or reserve capacity |
| AVAILABLE funds | Canonical Brand money is currently eligible for authorized allocation or original-source Brand Return | Total bank balance, pending funds, committed funds, or settled Creator payouts |
| Committed / protected funds | Canonical money is allocated or protected against an obligation or reserve | General AVAILABLE money or settled payment |
| Reserve requested | Collaboration produced a canonical reserve request from immutable commercial instruction | Funds are locked, transfer started, or approval granted |
| Owner / Finance approval required | Reserve request awaits an authorized actor | Campaign Manager authority to approve, choose, or edit the economics |
| Funding shortfall | Authoritative AVAILABLE funds cannot satisfy the required commercial reserve | A reduced caller-selected reserve, partial hidden success, or automatic currency conversion |
| Reserve completed | Canonical financial runtime confirmed the requested protected allocation | Creator payment settled or provider transfer started |
| Reserve failed / action required | Reserve execution did not complete or requires reconciliation/action | Entitlement loss, successful reserve, or permission for client-side retry without server authority |

## 6. Creator payment states

| Product-semantic state | Required visible truth | Required distinction or recovery |
|---|---|---|
| Obligation scheduled / not due | Immutable Creator entitlement produced an obligation and `paymentDueAt` has not been reached | Show exact stored due date; no transfer/settlement claim and no release-now action |
| Creator setup required | Normalized Creator payout readiness blocks execution | Show bounded recovery guidance; no bank, PAN, KYC document, or raw failure payload |
| Unsupported geography or rail | The obligation does not satisfy India + INR + supported bank rail | Fail closed as `UNSUPPORTED_GEOGRAPHY_OR_RAIL`; no conversion, manual route, or payout-ready claim |
| Provider review | Normalized provider/onboarding review state blocks or delays execution | No invented duration, blame, success claim, or raw diagnostic |
| Operationally eligible / queued | Due date and all known execution gates are satisfied; execution is queued or awaiting the owned runtime | Not provider accepted, processing, settled, or paid |
| Processing | Provider execution has started or been accepted but settlement is not confirmed | Show observed timestamp/status; never label cleared, paid, or settled |
| Held / release pending | Provider/platform lifecycle reports a hold or release-pending condition for recovery or provider management | No Brand release/override control; show bounded owner/recovery state only |
| Settled | Authoritative provider-confirmed settlement exists | Show confirmed amount and timestamp; document availability remains a separate state |
| Failed / retryable | Execution failed with a server-authoritative retry/reconciliation path | Preserve obligation and funding lineage; expose only server-authorized retry/support action |
| Action required | A specific authorized actor, platform operation, or support/reconciliation step is required | State the bounded reason and owner without exposing sensitive diagnostics |
| Partial reversal | An amount-bearing reversal affected only part of the prior execution | Show original amount, settled amount, reversed amount, and still-outstanding amount; do not imply general Brand availability |
| Full reversal | An authoritative amount-bearing reversal covers the full applicable executed amount | Preserve original obligation and provider lineage; Brand balance release still requires separate Collaboration refund authority |
| Outstanding after partial event | A non-zero amount remains due after settlement, failure, or reversal events | Show exact authoritative outstanding value and current execution/recovery state; do not collapse into generic processing |

## 7. Brand Return states

Brand Return applies only to eligible unused AVAILABLE money and original
funding sources. It is distinct from Collaboration refund and Route reversal.

| Product-semantic state | Required visible truth | Required behavior |
|---|---|---|
| Requested | An authorized Brand Return request exists | Preserve requested amount/reference and current source-allocation state |
| Allocating original sources | Runtime is determining or reserving eligible original funding-source allocations | Do not ask for or imply a Brand withdrawal bank/destination |
| Processing | One or more original-source return executions are underway | Show observed progress without claiming completion |
| Partial | Some source allocations completed while others remain pending, failed, or action-required | Preserve completed and outstanding amounts/source lineage separately |
| Completed | Every required return leg is authoritatively confirmed complete | Show authoritative amount and completion references/timestamps where permitted |
| Action required | An authorized Brand/platform/support action is required | Expose bounded next action without silently editing financial state |
| Failed | Return execution failed or could not proceed | Preserve source lineage and eligible state; show server-authorized retry/recovery/support only |

## 8. Document and export states

| Product-semantic state | Required visible truth | Required behavior |
|---|---|---|
| Activity CSV available | Backend-authoritative financial activity export is available | Label it as an activity export and retrieve it from the authoritative service |
| Export unavailable | Activity export is not currently available | Show an honest unavailable/retry state; do not synthesize a browser export that changes its authority |
| Authoritative document not issued | No qualified service has issued the requested invoice, receipt, certificate, or statement | Hide the action or show `not issued`; do not imply pending statutory issuance without authority |
| Browser-generated tax/provider document prohibited | A frontend-generated HTML/PDF would not be authoritative | Do not offer GST invoice, TDS certificate/folder, provider receipt, bank receipt, or statutory/accounting statement generation |

## 9. Support states

| Product-semantic state | Required visible truth | Required behavior |
|---|---|---|
| Support action available | Current context permits `GET SUPPORT` or `REPORT AN ISSUE` | Pre-bind available server-authoritative context references without exposing restricted diagnostics |
| Support form / input | Brand may choose a category and add a note | Exact category and final button copy remain later UX decisions; distinguish payment support from disputes/reversal/Return |
| Submitting | Support request is being created | Prevent ambiguous duplicate submission while preserving entered content and financial state |
| Submitted with reference | Support system accepted the request | Show visible acknowledgement/reference; do not change financial status |
| Submission failed / retryable | Request was not accepted and may be safely retried | Preserve input where safe; show retry/support-unavailable truth; do not claim case creation |
| Support unavailable | Support request dependency cannot presently accept the request | Show an honest bounded fallback only if separately authorized; do not mutate the payment state |
| Restricted diagnostic detail | Additional provider/funding context exists only for restricted support systems | Ordinary Brand UI and notifications receive bounded/redacted detail only |

```text
PAYMENT SUPPORT REQUEST
≠ COLLABORATION COMMERCIAL DISPUTE
≠ PROVIDER DISPUTE
≠ BANK CHARGEBACK
≠ FINANCIAL REVERSAL
```

## 10. Responsive behavior

The same semantic state model applies across desktop and mobile.

| Context | Frozen behavior |
|---|---|
| Wide tables | May present dense financial columns when hierarchy, labels, status, and actions remain accessible |
| Narrow/mobile | Tables transform into usable cards, rows, sections, or sheets while preserving amount, currency, status, timing, authority, and action semantics |
| Detail access | Secondary detail may use progressive disclosure, drawers, or sheets without hiding material financial truth |
| Overflow | No document-level horizontal scroll; bounded component-level overflow is permitted only where accessible and necessary |
| Actions | Role-authorized primary/recovery/support actions remain reachable without creating a separate mobile business rule |

Exact component choice remains frontend architecture authority.

## 11. Truths that may not be collapsed

At minimum, keep these distinctions explicit:

```text
PENDING FUNDING ≠ AVAILABLE ≠ COMMITTED / PROTECTED

RESERVE REQUESTED ≠ RESERVE APPROVED ≠ RESERVE COMPLETED

OBLIGATION ≠ TRANSFER ≠ SETTLEMENT

ELIGIBLE / QUEUED ≠ PROCESSING ≠ SETTLED

CREATOR SETUP REQUIRED ≠ UNSUPPORTED GEOGRAPHY OR RAIL

PARTIAL REVERSAL ≠ FULL REVERSAL ≠ BRAND BALANCE RELEASE

BRAND RETURN ≠ COLLABORATION REFUND ≠ ROUTE REVERSAL

ACTIVITY CSV ≠ TAX / PROVIDER / BANK / ACCOUNTING DOCUMENT

PAYMENT SUPPORT ≠ COMMERCIAL DISPUTE ≠ FINANCIAL MUTATION
```

## 12. Frontend decision ladder and Stitch status

The permanent decision order remains:

```text
Frozen Product Authority
→ Frontend State Family Register
→ inspect current production frontend
→ reuse an existing component/pattern where possible
→ inspect accepted historical references
→ construct from Aurora + existing application patterns where confident
→ only then consider Stitch
```

Existing Settings Treasury, Collaboration, Creator Settings, Support, and
Aurora patterns are the first inspection set.

```text
STITCH = NOT_REQUIRED_BY_DEFAULT
```

No Stitch work is authorized by this register.

## 13. Register verdict

```text
BRAND_PAYOUTS_FRONTEND_STATE_FAMILY_REGISTER_V1 = FROZEN
MATERIALLY_DISTINCT_PRODUCT_TRUTHS = PRESERVED
EXACT_STATE_IDS = FRONTEND_ARCHITECTURE_DETAIL
EXACT_CARD_DESIGN_AND_COPY = NOT_FROZEN_HERE
FRONTEND_IMPLEMENTATION = NOT_AUTHORIZED
```
