# C06_PRODUCT_AUTHORITY_V1

## Status

```text
PRODUCT_LOGIC = FROZEN
C06_SCOPE = CREATOR_PAYOUT_PROVIDER_DISABLED_ONLY
IMPLEMENTATION = NOT_PERFORMED_BY_SA
```

Authority baseline: accepted `C06_CREATOR_PAYOUT_DEEP_AUDIT_REPORT_V1` plus this Product freeze. Historical Creator Payout code is not Product Authority.

## Product identity

C06 is the authenticated, Creator-workspace-scoped, read-only payout workspace over the accepted shared financial engine.

```text
ONE_FINANCIAL_ENGINE
TWO_ACTOR_SPECIFIC_PROJECTIONS
```

Brand Payouts is the Brand projection. C06 is the Creator projection. C06 owns no financial command or financial persistence.

## Actors

| Actor | Workspace read | Manage-in-Settings link | C06 mutation/execution |
| --- | --- | --- | --- |
| Owner | Yes | According to C05 capability | None |
| Manager | Yes | According to C05 capability | None |
| Assistant | Denied, non-enumerating | None | None |

C05 remains sole authority for payout/legal Settings mutations.

## Product surfaces

1. Overview
2. Payout obligations
3. Payout history
4. Obligation/history detail
5. Read-only payout-method summary with `Manage in Settings`

No separate ledger, statement, tax, invoice, receipt-generation, support, recovery, provider, or payout-run surface is included.

## Summary contract

All monetary summaries are backend-authoritative exact decimal-string buckets grouped by currency. Unlike currencies are never summed. A source is represented as unavailable rather than as a fabricated zero.

| Summary | Exact predicate |
| --- | --- |
| `UPCOMING` | Canonical, nonterminal, outstanding obligation with stored `paymentDueAt > asOf` and no higher-priority action/processing condition |
| `DUE_OR_ACTION_REQUIRED` | Canonical outstanding obligation with `paymentDueAt <= asOf` or an allowlisted blocking/action gate; includes provider-unavailable due rows without implying Creator fault |
| `PROCESSING` | Amount supported by one coherent in-flight transfer attempt and canonical funding/destination snapshot evidence |
| `PAID_TO_DATE` | Coherent settled transfer amount less coherent processed reversals, supported by receipts and settlement ledger evidence |

Priority for current outstanding classification is `PROCESSING` → `DUE_OR_ACTION_REQUIRED` → `UPCOMING`, preventing double counting. `PAID_TO_DATE` is a cumulative historical metric and is separately identified as such.

## Creator-safe obligation

An obligation may expose safe Brand and Campaign labels/references, Collaboration reference, exact entitlement/settled/reversed/outstanding values, canonical stored due date, lifecycle, effective gate, allowlisted reason, safe next action, observed time, and limitation state. It must not expose vault, reserve-approval identities/economics, funding-lot details, other Creators, or provider diagnostics.

Legacy/unproven rows may appear only as ownership-proven limited records. They contribute to no monetary summary, expose no unproven amount or due date, and carry `LEGACY_UNRECONCILED`/safe limitation.

## Due-date authority

Displayed due date is the already persisted `creator_payout_obligations.paymentDueAt`. It is exposed only after canonical C04 lineage and stored due evidence validate. The shared Kolkata helper may verify the stored date; neither C06 nor the frontend creates a competing calculator.

Accepted terms: `NET_7`, `NET_15`, `NET_30`, `NET_45`, `NET_60`.

## Provider-disabled truth

| Canonical/effective state | Creator treatment |
| --- | --- |
| `NOT_YET_DUE` | Upcoming with stored due date |
| `CREATOR_SETUP_REQUIRED` | Owner/Manager may manage payout Settings |
| `UNSUPPORTED_GEOGRAPHY_OR_RAIL` | Configured method is unsupported for this rail; no verification claim |
| `FUNDING_REQUIRED` | Waiting for protected funding; no Creator financial command |
| `RESOLUTION_BLOCKED` | Paused by Collaboration resolution; safe Collaboration navigation only |
| `PROVIDER_UNAVAILABLE` | Transfers unavailable; no Creator corrective action or timing promise |
| `READY` | Never presented as executable while provider capability is disabled; effective gate becomes `PROVIDER_UNAVAILABLE` |
| `PROCESSING` | Shown only from coherent pre-existing canonical attempt evidence |
| `SETTLED` | Shown only from coherent transfer, receipt, and ledger evidence |
| `FAILED_RETRYABLE` | Attention state with no retry button or execution promise |
| `ACTION_REQUIRED` | Used only with an allowlisted safe reason and safe next action |

A due, otherwise-ready obligation must show `PROVIDER_UNAVAILABLE`, never `CREATOR_SETUP_REQUIRED`.

## Payout method

C06 shows only masked display, destination type, country, currency, current/primary state, destination version/currentness, safe reason, updated time, C06 rail support, and an authorized Settings link. No full account/routing/legal/encrypted/provider/KYC data is permitted.

## Prohibitions

- no second financial model/ledger/due calculator/reserve/transfer/settlement/provider/recovery engine;
- no financial-only hash;
- no provider call, credential, fake execution, Pay now, Run cycle, or ETA;
- no KYC/PAN/tax ID/provider-verification claim;
- no legacy escrow/tranche/automatic-release semantics;
- no Creator payout write endpoint.

## Deferrals

Provider integration, provisioning, verification, manual/scheduled execution, live reconciliation, P3S support, support-case persistence, P4R/P5R recovery/reversal, generalized recovery UI, provider-enabled acceptance, and production deployment remain deferred. KYC is `NOT_C06_SCOPE`, not deferred C06 debt.

