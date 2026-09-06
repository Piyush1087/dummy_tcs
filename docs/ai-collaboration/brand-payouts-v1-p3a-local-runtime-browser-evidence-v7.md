# Brand Payouts P3A local runtime browser evidence V7

Status: **BLOCKED**

Stable signature: `PAYOUTS_REFRESH_UNMOUNTS_RETURN_DRAWER_ON_CANONICAL_503`

This is the return-only V7 execution against the immutable backend and frontend bindings. It does not concatenate any earlier runner, rerun Add funds, edit the execution ledger, accept P3A, or begin P4.

## Binding and reused evidence

- Backend: `12d235345e2748f676d36d61c62ed4bd9c049592`, tree `1dd5900068aa7f7fa3aa25dcc0eaef33ee4d7e24`.
- Frontend: `f775d33f729e02c020ced5b0a7ffcc662110db9e`, tree `30001818c07b231529935dedf12ca059be6bd6dc`.
- Execution-ledger starting head: `803edf862f147a8e00ef431ea67ad2c541695c82`; required V6 ancestor `4c426cda6d7f64e72fe8943de5ec36dcf897cc59` verified.
- The V1–V6 indexes were revalidated from Git blob bytes: V1 124, V2 51, V3 12, V4 24, V5 124, V6 38; **373 of 373 pass** under `REUSED_IMMUTABLE_P3A_V1_TO_V6_EVIDENCE`.
- Both source worktrees were clean before and after. Source changes and migration changes: **none**.

## Isolated execution boundary

The hashed launcher in this evidence is labelled `TEST_ONLY_EPHEMERAL_DI_OVERRIDE_NOT_DEPLOYABLE`. It imports the exact built `AppModule` through `@nestjs/testing` and overrides only `BrandReturnRefundProvider`. Across the four final lanes, `capabilities()` was called eight times and `assertExecutionAvailable()` four times. `createRefund()`, `fetchRefund()`, and `verifyTrustedFundingEvidence()` were called zero times. No provider credential was present, no provider action occurred, and the pre-bootstrap outbound deny/record guards recorded zero attempts.

A fresh owned `postgres:17-alpine` instance used UTC, no persistent volume, and all and only the 74 committed migrations. The normal-auth seed contained Owner and Finance Admin actors, an active INR subscription and vault, and one credited `PROVEN_SOURCE` GATEWAY/INR lot with ₹100,000 available and provider-refundable capacity. Root, liveness, database health, protected route mapping, mode restart, preview, and controlled shutdown are recorded in the evidence directory.

## Four return-only lanes

| Mode | Role | Route | Width | One POST | Pending contract | Canonical 503 | Post-error contract | Result |
| --- | --- | --- | ---: | ---: | ---: | ---: | ---: | --- |
| PAYOUTS | Owner | `/brand/payouts` | 390 | PASS | PASS | PASS | FAIL: drawer unmounted | BLOCKED |
| PAYOUTS | Finance Admin | `/brand/payouts` | 1440 | PASS | PASS | PASS | FAIL: drawer unmounted | BLOCKED |
| SETTINGS | Owner | `/brand/settings/escrow` | 390 | PASS | PASS | PASS | PASS | PASS |
| SETTINGS | Finance Admin | `/brand/settings/escrow` | 1440 | PASS | PASS | PASS | PASS | PASS |

Every lane proved the configured surface alone exposed an active command, observed an authoritative INR returnable balance of 100000, keyboard-opened the drawer, submitted with Enter under `TEST_ONLY_LOCAL_RESPONSE_DELIVERY_DELAY`, retained focus on a natively enabled submit with `aria-disabled=true`, rejected repeat Enter and pointer activation, issued exactly one browser POST, and received the unchanged 503 body with code `PROVIDER_SETUP_REQUIRED`. Pending Tab and Shift+Tab remained trapped in all four lanes.

Both SETTINGS lanes then retained submit focus, rendered the truthful provider-unavailable/no-return-completed copy, retained the post-error focus trap, and restored the exact invoker with Escape. Both PAYOUTS lanes instead removed the dialog immediately after response release.

## Blocker reproduction and source chain

Reproduce with either PAYOUTS lane in `browser-PAYOUTS.json`: authenticate normally, keyboard-open Return unused funds, enter `100.00`, confirm, focus `Confirm Brand Return`, delay only delivery of the unchanged local response, press Enter, verify the pending contract and dedupe, then release the response. The backend returns the canonical 503, but `dialog_visible` becomes false and `truthful_error_visible` is false.

The immutable frontend source explains the observed sequence. `BrandReturnDrawer` sets the error and then awaits `onRefresh` in its catch path. `PayoutsTreasuryActions.refreshCanonicalViews` calls the parent workspace refresh. That refresh changes the overview status from `READY` to `REFRESHING`; `actionable` requires `READY`; and the existing effect closes both command drawers whenever `actionable` is false. The SETTINGS host retains its vault while refreshing and therefore does not unmount the drawer.

## Financial, accessibility, and safety outcome

Before and after are identical: zero Brand Return requests, zero allocations, zero ledger entries; vault total and available remain 100000 with zero active return commitment; the lot remains 100000 available and refundable with zero committed or externally returned. Thus financial mutation on 503 is **none**.

All four full-document Axe scans have zero serious and zero critical findings; all four have zero document overflow. Focus-visible and computed contrast properties are in each lane record. Browser-side font stylesheet attempts were denied locally; the backend guard recorded zero outbound attempts and zero provider attempts.

P3A acceptance is **NOT_SET**. P4 work is **NONE**. Systems Architect adjudication is required; no source correction was authorized by this runner.
