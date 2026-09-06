# Brand Payouts P3A — V5 bounded runtime evidence

`P3A_RUNTIME_BROWSER_CIRCUIT_BREAKER`

**P3A_DRAWER_SUBMISSION_FOCUS_ESCAPES_MODAL** blocks the keyboard gate. After keyboard submission of Add funds receives the real provider-absent 503, the drawer remains open but focus moves to BODY. In an isolated SETTINGS Owner reproduction at 390×1000, subsequent Tab presses reach Notifications, Open Menu, and General behind the modal. No Axe or response interception is used in that reproduction. No source correction was attempted; P3A acceptance is not set and P4 was not started.

The prior async-trigger correction **passes all 16 PAYOUTS role/command/width combinations**. This is a distinct failure during submission inside the drawer, not a recurrence of the V4 open/close defect.

## Authority, integrity and source gates

The [V5 runner](https://github.com/Piyush1087/dummy_tcs/blob/fc1db87b220b2be7d3e9ad3301e4c85bddf16716/docs/ai-collaboration/brand-payouts-v1-p3a-local-runtime-browser-runner-v5.md) controls this run. [Source binding](evidence/brand-payouts-p3a-local-runtime-browser-v5/source-binding.json) verifies exact clean local and remote inputs:

| Input | Commit | Tree |
| --- | --- | --- |
| Backend | `12d235345e2748f676d36d61c62ed4bd9c049592` | `1dd5900068aa7f7fa3aa25dcc0eaef33ee4d7e24` |
| Frontend | `ca1a289670968eacf2c2c5c31ac626921aa8efba` | `f410720eb7b176d7f5f0e6d359b9083b362d957e` |

The frontend parent is `a8800de192f2e716f405b75f38799271fd9f1a9b`. Its delta is exactly the authorized Treasury-actions production file and Brand Payouts regression test. Shared SideDrawer, CSS, APIs, financial semantics, schema, migrations, packages and lockfiles are unchanged.

[Reuse integrity](evidence/brand-payouts-p3a-local-runtime-browser-v5/reuse-integrity.json) freshly verifies **211/211** immutable Git-blob hashes and byte sizes: V1 124, V2 51, V3 12, V4 24. Reports/indexes, commit/tree/source bindings, ancestry and evidence-only file sets were checked. Inherited work is labelled **REUSED_IMMUTABLE_V1_V2_V3_V4_EVIDENCE**: unchanged backend and PostgreSQL/security 50/50, read purity, five configurations, 168 admission/replay requests and 300 assertions, canonical fail-closed financial behavior, non-drawer browser/P2 smoke and zero-provider results. V4 supplies migration authority and root-cause evidence only; its failed focus and incomplete matrix are not credited as passing.

[Fresh source gates](evidence/brand-payouts-p3a-local-runtime-browser-v5/fresh-source-gates.json) pass: **29/29 targeted, 64/64 focused, 887/887 full**, changed-file ESLint/Prettier, typecheck, diff integrity, backend build and one production frontend build. The only production-build warning is the existing large-chunk warning. Sanitized executable logs accompany the results. Repository-wide lint debt was not repaired or represented as passing.

[Harness attempts](evidence/brand-payouts-p3a-local-runtime-browser-v5/harness-attempts.json) disclose an initial full-suite run with preview API variables, which caused six relative-URL assertions to fail. The unchanged full suite then passed with its standard test environment. Preview variables were applied to the production build. A validation-field locator was corrected after error text changed its accessible label; the discarded attempt receives no gate credit. An early preview process was stopped before browser work; credited captures use the subsequently completed V5 production build. No assertion or application source was changed.

## Disposable runtime and completed browser scope

[Database evidence](evidence/brand-payouts-p3a-local-runtime-browser-v5/database-lifecycle.json) records fresh owned loopback-only PostgreSQL, UTC, and **74 existing committed migrations**, each matching accepted V1 and pinned working-file checksums. V5 section 4 authorizes this bootstrap. No migration file was created or edited and no M1/M2 was applied. Only V4-equivalent Owner/Finance, Brand/subscription and vault fixtures were seeded. Canonical password hashing, one random temporary password and the real browser login flow were used; sessions were not injected.

`DISPOSABLE_DATABASE_EXISTING_MIGRATIONS_APPLIED = YES`

`MIGRATION_FILES_CREATED_OR_CHANGED = NONE`

[Environment](evidence/brand-payouts-p3a-local-runtime-browser-v5/environment.json) records versions and local production configuration. [Runtime lifecycle](evidence/brand-payouts-p3a-local-runtime-browser-v5/runtime-lifecycle.json) proves full `dist/main.js`/AppModule startup, mapped routes, ready state and root/liveness/database-health 200 responses in PAYOUTS and then SETTINGS. Backend/provider configuration was isolated, provider variables absent, and the loopback deny/record guard loaded before bootstrap. The frontend was served through built Vite preview.

[PAYOUTS browser evidence](evidence/brand-payouts-p3a-local-runtime-browser-v5/browser-PAYOUTS.json) contains **88 fresh rows** at 390, 767, 768 and 1440 CSS px, all 1000px high. Both roles and commands cover all **16 base open combinations**, pending reads, client validation, Escape/Cancel/Close reopening and focus return; Add funds also covers ready-to-submit. Each pending read is a real local contract-valid GET with unchanged status/body and a recorded SHA-256, labelled `TEST_ONLY_RESPONSE_TIMING_CONTROL`. The focused invoking button remains natively enabled with `aria-disabled=true`; its sibling is disabled. Two repeated Enter activations and a real pointer click produce exactly one GET. Twelve Tab steps remain inside each opened drawer with visible focus. All three closing paths restore the exact invoker.

[Provider-absent presentation evidence](evidence/brand-payouts-p3a-local-runtime-browser-v5/failclosed-PAYOUTS.json) adds **eight full-document scans**, both roles at all widths, from two real canonical Add funds POSTs returning 503. The same failure presentation is resized; these are two commands, not eight. The error remains visible and no funds-confirmed claim appears. These rows pass contrast/Axe/overflow but **fail modal focus containment**: recorded focus is BODY while the drawer remains open. They are not passing overall keyboard rows.

Across the **96 full-document Axe scans**, including portal content, there are **zero serious/critical findings and zero horizontal overflow**. Active Cancel is the exact corrected `rgb(0,108,75)` with ratio at least 4.5:1; disabled controls are separately classified. All width metrics, actual foreground/background ratios, hit visibility, footer clearance, responsive footer direction, named controls, console/network references and screenshots are retained per row. The 767/768 measurements preserve the composition boundary. This evidence does not establish the unexecuted SETTINGS matrix or all 32 required base combinations.

The actual fail-closed Return summary has zero self-service eligibility. Positive input remains unavailable; no summary-body override was used. Return ready-to-submit/provider-absent states and the Settings Return entry remained unexercised. Clarification was requested about these unreachable states, but no answer arrived before the independent source circuit breaker. No exception or complete-gate credit is assumed.

## Reproducible submission-state failure

[Isolated keyboard reproduction](evidence/brand-payouts-p3a-local-runtime-browser-v5/submission-focus-reproduction.json) confirms the new failure in SETTINGS mode, Owner, `/brand/settings/escrow`, 390×1000:

1. Authenticate normally; focus Add funds and press Enter.
2. Enter 5000, focus Continue to provider, and press Enter.
3. The canonical local POST returns 503 with provider configuration absent. Wait one second.
4. The modal is still open, but `document.activeElement` is BODY.
5. Tab proceeds to background Notifications, Open Menu and General instead of remaining inside the modal.

The [post-failure screenshot](evidence/brand-payouts-p3a-local-runtime-browser-v5/SETTINGS-390-owner-add-funds-post-failure-tab-escape.png) accompanies the machine-readable active-element trace. This reproduction uses neither Axe nor interception, so scanner focus or timing control cannot explain the failure. PAYOUTS records corroborate the BODY/open-modal state for both roles at every width.

The bounded suspected files are `src/features/brand-escrow/components/escrow-top-up-drawer.tsx` (sets submitting at line 76; disables the focused submit at 138) and `src/design-system/aurora/components/SideDrawer.tsx` (Tab handling at 49–61 only wraps the first/last modal elements). Disabling the focused submit loses focus; the shared handler does not recover containment when focus is outside the dialog. Preserving/restoring modal focus across that application transition requires a source change. Database, port and fixture adjustments cannot repair it. No fix was attempted.

[Circuit-breaker details](evidence/brand-payouts-p3a-local-runtime-browser-v5/circuit-breaker.json) identify the completed and deferred gates. SETTINGS was booted and used only for isolated reproduction; its full drawer matrix was stopped. The new failure blocks [composite P3A coverage](evidence/brand-payouts-p3a-local-runtime-browser-v5/composite-coverage.json), despite passing source tests, trigger correction and bounded Axe/contrast evidence.

## Financial boundary, baseline and cleanup

[Financial/provider evidence](evidence/brand-payouts-p3a-local-runtime-browser-v5/financial-provider-summary.json) records three canonical Add funds POSTs total, all 503: two PAYOUTS presentation commands and one SETTINGS reproduction. They create the accepted pending foundations—three loads and six ledger rows—while the selected canonical vault state remains byte-equivalent across all four snapshots. Funding lots and Return requests/allocations remain zero. No provider request/action or external backend connection attempt occurred. Full admission/replay behavior is reused from V2 rather than repeated or relabelled fresh.

[Baseline findings](evidence/brand-payouts-p3a-local-runtime-browser-v5/baseline-findings.json) disclose the four immutable inactive Email-code serious findings outside P3A, not freshly rescanned. Every fresh minor/moderate rule remains in the Axe records: shared drawer role and shell/workspace/portal landmark nesting, duplication and uniqueness. These do not meet the serious/critical threshold, but they do not excuse the independently failing keyboard gate. Console records retain expected anonymous refresh 401s, blocked fonts/scanner preload warnings, and the intended command 503s. No unexpected application page exception occurred. No provider IDs, bank/KYC values, session secrets or raw provider payloads are preserved.

[Cleanup](evidence/brand-payouts-p3a-local-runtime-browser-v5/cleanup.json) verifies no owned process/listener/container/volume or private session remains, temporary scripts are removed, both source worktrees remain clean at the pins, and the shared database is untouched. Owned Windows processes were deliberately terminated; graceful Nest shutdown-hook execution is not claimed. The [index](evidence/brand-payouts-p3a-local-runtime-browser-v5/index.json) hashes this report and every supporting artifact. JSON, local links, screenshots, staged hashes, sensitive-value/path scans and `git diff --check` were validated. Only the additive V5 package is committed; prior evidence and the execution ledger are unchanged. No P3A acceptance, provider capability, production readiness or P4 work is claimed.
