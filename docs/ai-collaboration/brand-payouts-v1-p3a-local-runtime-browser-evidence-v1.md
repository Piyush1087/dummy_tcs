# Brand Payouts P3A — local runtime evidence V1

`P3A_RUNTIME_BROWSER_CIRCUIT_BREAKER`

**P3A_SETTINGS_CONTRAST_BELOW_WCAG_AA** blocks the required zero-serious-findings gate. The new **Open Payouts** compatibility link renders at **1.92:1**, below the required **4.5:1**, in the final production build. It reproduces for Owner and Finance Admin at 390, 767, 768 and 1440 CSS px. Inherited Settings active-tab and rollback Refresh-status contrast failures also reproduce. No source correction or financial command was attempted. P3A acceptance is not set.

## Immutable inputs

| Input | SHA | Tree |
| --- | --- | --- |
| Backend | `12d235345e2748f676d36d61c62ed4bd9c049592` | `1dd5900068aa7f7fa3aa25dcc0eaef33ee4d7e24` |
| Frontend | `e81c5bf105e8cc03d93f01f5be981cc527e36ca0` | `c32c164e1f4cda963dd8358e33fe253aed77dfcc` |
| Starting authority | `74bc2d5cbc86dd04c72c5bcbdee29afbd9725d68` | `79699e19da7a3872c51dae81aad16ef84fb7c717` |

The [committed assignment](https://github.com/Piyush1087/dummy_tcs/blob/74bc2d5cbc86dd04c72c5bcbdee29afbd9725d68/docs/ai-collaboration/brand-payouts-v1-p3a-local-runtime-browser-runner-v1.md) is the authority for this run. [Source binding](evidence/brand-payouts-p3a-local-runtime-browser-v1/source-binding.json) records exact heads, trees, parents, required ancestry, clean worktrees, candidate-diff hashes and per-file Git blob identities. The backend changes 10 files, including seven production/configuration files; the frontend changes 16, including 12 production files. No schema, migration, package, lockfile or provider-adapter delta exists.

The [evidence index](evidence/brand-payouts-p3a-local-runtime-browser-v1/index.json) hashes this report and every supporting artifact. Artifacts inherit pinned identities and applicable test/source classification from their enclosing records and index. Prior evidence and the execution ledger remain unchanged.

## Completed source and PostgreSQL gates

[Fresh source gates](evidence/brand-payouts-p3a-local-runtime-browser-v1/source-gates.json) passed:

- Backend focused: **13/13**; full: **1,268 passed, 615 opt-in skipped**.
- Frontend focused: **61/61**; full: **884/884**.
- Changed-file ESLint in both repositories, frontend typecheck, backend build/asset copy, final frontend production build and diff checks.

Repository-wide lint debt was neither repaired nor represented as passing. The full backend run includes the requested Brand Return/funding and notification policy, recipient, dispatch and worker unit suites.

[All six opt-in PostgreSQL/security suites](evidence/brand-payouts-p3a-local-runtime-browser-v1/postgresql-security.json) passed sequentially:

| Suite | Passed |
| --- | ---: |
| Payouts P1 security | 17 |
| Brand workspace authorization | 10 |
| Brand Return PostgreSQL | 9 |
| Notification hardening | 6 |
| Notification workers | 6 |
| Operational producers | 2 |
| Total | **50** |

The suites require distinct database-name conventions, so each used its own empty disposable database in one loopback-only container. A separate empty database was used for browser/runtime fixtures. [Database lifecycle evidence](evidence/brand-payouts-p3a-local-runtime-browser-v1/database-lifecycle.json) records **74 committed migrations per database**, UTC sessions, PostgreSQL 17.11 and matching source checksums. No new migration was created or applied. Deterministic local provider doubles in tests are not external-provider proof.

## Built runtime and bounded browser sweep

[Runtime evidence](evidence/brand-payouts-p3a-local-runtime-browser-v1/built-runtime.json) proves full `dist/main.js`/AppModule startup, root/liveness/database-health 200 responses, canonical route mapping and separate backend process starts for `PAYOUTS` and `SETTINGS`. One final production-built Vite preview was reused unchanged across both credited configurations. Provider variables were absent; the outbound deny/record guard loaded before application bootstrap. No financial command was submitted.

**Build-count deviation:** the generic source-gate harness initially passed `NODE_ENV=test` to Vite. That first build and its browser captures were discarded. A second build used explicit `NODE_ENV=production`, `VITE_STAGE=local` and the loopback API origin. All credited runtime evidence uses this second build. The [harness correction record](evidence/brand-payouts-p3a-local-runtime-browser-v1/harness-correction.json) retains the distinction; prefixed `environment-build-attempt-*` artifacts receive no gate credit. Final build output and asset hashes are in the [environment record](evidence/brand-payouts-p3a-local-runtime-browser-v1/environment.json).

The bounded sweep contains **80 fresh production-build Axe scans**, each at a 1000px viewport height:

| Matrix | Rows | Scope |
| --- | ---: | --- |
| [Payouts mode preflight](evidence/brand-payouts-p3a-local-runtime-browser-v1/browser-preflight-PAYOUTS.json) | 24 | Owner, Finance and Manager; Payouts and Settings; all four widths |
| [Settings mode preflight](evidence/brand-payouts-p3a-local-runtime-browser-v1/browser-preflight-SETTINGS.json) | 24 | Same actors, routes and widths after process restart |
| [Payouts drawers](evidence/brand-payouts-p3a-local-runtime-browser-v1/bounded-drawers-PAYOUTS.json) | 20 | Add funds open/invalid/ready without submit; Return open/invalid under real zero eligibility |
| [Rollback drawer](evidence/brand-payouts-p3a-local-runtime-browser-v1/bounded-drawers-SETTINGS.json) | 12 | Add funds open/invalid/ready without submit |

Normal password login was used throughout; no browser token or style was injected. No eligibility projection or mutation-response interception was used. Drawer traces record Tab/Enter entry, exact focus, 16-Tab containment, Escape close and focus return. Text fields were filled by automation; these bounded observations are not a claim that the complete P3A keyboard gate passed. Drawer records capture page exceptions; the complete console-stream gate remains deferred.

[Browser summary](evidence/brand-payouts-p3a-local-runtime-browser-v1/browser-summary.json) records **zero document-level horizontal overflow** across all 80 rows. Screenshots, control names, active elements, all three width metrics, mode, actor, source classification and network records accompany the matrices. Payouts-mode Owner/Finance show commands on Payouts and none on Settings; rollback restores the Settings controls. These observations do not substitute for the deferred mutation-admission matrix.

## Reproducible accessibility failure

[All Axe findings and node-level evidence](evidence/brand-payouts-p3a-local-runtime-browser-v1/accessibility-failure.json) retain **22 serious rule instances, zero critical**, plus every lower-severity finding. Multiple failing nodes may belong to one serious rule instance. Known moderate nested/duplicate-main findings remain visible; no rule was disabled.

| Element | Observed contrast | Ownership |
| --- | --- | --- |
| New Open Payouts link | `#34d399` on white, 14px, **1.92:1** | P3A page selects `.settings-team__action-link`; inherited Settings CSS supplies the color |
| Active Settings tab | `#34d399` on `#f8f8f8`, 14px, **1.81:1** | Inherited `.brand-settings__tab--active` |
| Rollback Refresh status | `#34d399` on white, 12px, **1.92:1** | Inherited escrow outline/small button |

All require 4.5:1 for their rendered small text. The new link fails in all eight Owner/Finance width combinations in Payouts mode. The active tab is additionally detected at 767/768/1440; its horizontal-tab visibility differs at 390. Rollback exposes the inherited Refresh-status failure. Neither Payouts nor rollback drawer scans produced serious/critical findings.

Reproduction: build the pinned frontend with explicit production/local-preview settings; start the pinned full backend with `BRAND_PAYOUTS_COMMAND_SURFACE=PAYOUTS`; log in through the normal form as Owner or Finance; open `/brand/settings/escrow`; scan at 390×1000, 767×1000, 768×1000 and 1440×1000. The actual link is shown in the [390px screenshot](evidence/brand-payouts-p3a-local-runtime-browser-v1/PAYOUTS-390-owner-settings-compatibility.png). Restart only the backend with `SETTINGS` to reproduce the rollback Refresh-status finding.

Suspected source locations are `src/pages/brand/settings/brand-settings-escrow-page.tsx:61`, `src/features/settings/settings.css:593` and `:71`, and the rollback button at `src/features/brand-escrow/components/escrow-account-card.tsx:87` using `src/design-system/aurora/components.css:111`. The new link is a P3A addition; the other color definitions are inherited. A port, database or credential change cannot correct the committed color choices. Source correction is required and was not attempted.

## Purity, cleanup and deferred gates

[Financial snapshots](evidence/brand-payouts-p3a-local-runtime-browser-v1/financial-purity.json) prove byte-equivalent normalized state across all 20 canonical models before/after both bounded read-only modes, including discarded-build reads. This is a lane-level comparison, not the deferred per-command matrix. [Network/provider evidence](evidence/brand-payouts-p3a-local-runtime-browser-v1/network-provider-summary.json) records zero financial command POSTs, no Payouts mutation, no external application/provider connection attempt and no provider action. Blocked fonts and anonymous-auth 401s are classified separately. No provider outcome or production readiness is claimed.

The [circuit-breaker record](evidence/brand-payouts-p3a-local-runtime-browser-v1/circuit-breaker.json) explicitly defers the full admission/replay matrix, built-runtime fail-closed submissions, missing/blank/invalid process checks, complete transient-state browser matrix, notification/detail integration and P2 pagination/identity smoke. They are **not passing gates** in this package.

[Shutdown evidence](evidence/brand-payouts-p3a-local-runtime-browser-v1/shutdown.json) records controlled removal of owned processes, the database container/volume, session material, temporary scripts and listeners. Source worktrees remain clean at the pins. JSON, links, screenshots, index hashes, sensitive-value scans and `git diff --check` were validated before the evidence-only commit. No ledger edit, P3A acceptance or P4 work is included.
