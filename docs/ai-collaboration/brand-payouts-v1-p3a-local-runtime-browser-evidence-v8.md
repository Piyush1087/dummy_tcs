# Brand Payouts P3A local runtime browser evidence V8

Status: **PASS**

Execution mode: `WAVE_A_SAME_RUNNER_CLASS_A_CORRECTION_AND_FOCUSED_ACCEPTANCE`.

This package corrects only `PAYOUTS_REFRESH_UNMOUNTS_RETURN_DRAWER_ON_CANONICAL_503`, adds the focused regression, and reruns only the two failed PAYOUTS Brand Return lanes. SETTINGS, Add funds, backend suites, historical matrices, other roles, and other widths were not rerun.

## Source correction

The read-only backend remains `12d235345e2748f676d36d61c62ed4bd9c049592`, tree `1dd5900068aa7f7fa3aa25dcc0eaef33ee4d7e24`.

The frontend correction is commit `7c75a4c8f5a0df3a1fb82d2f707b1c6b03d56d2a`, tree `956bae22a91aeaf53733f9e913d500b9750577e2`, parent `f775d33f729e02c020ced5b0a7ffcc662110db9e`. It changes exactly:

- `src/features/brand-payouts/components/PayoutsTreasuryActions.tsx`
- `src/features/brand-payouts/brand-payouts-p2.test.ts`

The production change distinguishes retained command context from initiation authority. A current, fully authorized PAYOUTS context with retained data continues rendering an already-open drawer during `REFRESHING`, while both underlying command launchers are natively disabled. Stale/unavailable, unauthorized, cross-surface, and capability-revoked contexts still close fail-closed. No shared drawer, API, backend, financial, provider, migration, SETTINGS, or Product semantic changed.

The included zero-context `frontend-correction.diff` is 8570 bytes with SHA-256 `a4bcde7b726dbd6da6f9562cf56970b28163800a00cf904cd9043e7d99e331a7`.

## Focused source gates

- Named regression: 1 passed, 30 skipped.
- Full affected Brand Payouts/P3A file: 31 passed, 0 failed.
- Changed-file Prettier: pass for 2 files.
- Changed-file ESLint: pass for 2 files.
- Frontend typecheck: pass.
- Local-preview production build: pass; JS `index-CRF3IncB.js`, CSS `index-DdjQArWM.css`.
- Unrelated changed files: zero. The full frontend suite was intentionally not run.

The targeted regression proves the drawer and truthful error survive a pending retained-data refresh; submit focus and dedupe remain intact; new Treasury initiation is unavailable; Tab/Shift+Tab remain trapped; refreshed READY data leaves the drawer usable and Escape restores the exact invoker. Separate cases prove stale, unavailable, unauthorized, cross-surface, and capability-revoked contexts close fail-closed.

## Reused evidence

Every indexed artifact from V1 through V7 was verified from exact Git blob bytes: V1 124, V2 51, V3 12, V4 24, V5 124, V6 38, and V7 21. Result: **PASS 394 of 394** under `REUSED_IMMUTABLE_P3A_V1_TO_V7_EVIDENCE`. V7 SETTINGS post-error remains `REUSED_PASS_2_OF_2`.

## Focused V8 runtime proof

| Role | Route | Width | One POST | Refresh observed with drawer | Post-error focus/error/trap | Escape | Axe serious/critical | Overflow | Result |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Owner | `/brand/payouts` | 390 | PASS | PASS (3 samples) | PASS | PASS | 0 / 0 | 0 | PASS |
| Finance Admin | `/brand/payouts` | 1440 | PASS | PASS (3 samples) | PASS | PASS | 0 / 0 | 0 | PASS |

Each lane authenticated normally, observed an authoritative positive INR returnable balance, keyboard-opened Return unused funds, entered `100.00`, confirmed, and submitted with Enter. While only delivery of the unchanged local response was delayed, submit retained focus, remained natively enabled with `aria-disabled=true`, and ignored repeat Enter and pointer activation; exactly one POST occurred per lane. Pending Tab and Shift+Tab remained trapped.

After release, both responses remained canonical `PROVIDER_SETUP_REQUIRED` 503 responses. A DOM mutation observer captured the actual `REFRESHING` interval three times per lane and recorded no missing dialog. The truthful provider-unavailable/no-return-completed copy rendered, submit focus remained, the post-error trap held, and Escape restored the exact invoker.

## Financial and safety controls

Before and after are identical: zero Brand Return requests, allocations, and ledger entries; vault total and available remain 100000 with zero active return commitment; the proven-source lot remains 100000 available and provider-refundable with zero committed or externally returned. Financial mutation on 503 is **none**.

The full-AppModule launcher is the V7 launcher content, SHA-256 `0210c24d3ec090b6e9879980f86854ff873674964f0249bc6c526cff48abc7fb`, labelled `TEST_ONLY_EPHEMERAL_DI_OVERRIDE_NOT_DEPLOYABLE`. It overrides only `BrandReturnRefundProvider`. Counts are capabilities 4, assertExecutionAvailable 2, and zero for all three forbidden methods. Provider credentials, provider actions, backend non-loopback attempts, escaped browser non-loopback requests, serious/critical Axe findings, and document overflow are all zero.

The owned UTC PostgreSQL instance applied all and only 74 migrations without a persistent volume. Root, liveness, database health, protected route mapping, controlled shutdown, removal of the database and temporary harness, clean source worktrees, and a from-scratch evidence index validation are recorded in the compact package.

P3A acceptance is **NOT_SET**. P4 work is **NONE**. The Systems Architect performs acceptance.
