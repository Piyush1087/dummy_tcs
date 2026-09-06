# C-03 P6 Final Execution Route Report V7

`C03_P6_FINAL_EXECUTION_ROUTE_REPORT_V7`

```text
RESULT = READY_FOR_SA_REVIEW

RECOVERY_AUTHORITY_SHA = 184192c116771ef9dd86248df9bbf92249571a06
RECOVERY_AUTHORITY_TREE = dc5fc31ebddbc2a4cc1400c18b7c80e4254853af

P6_BACKEND_CANDIDATE_SHA = aebeb85fd6bba37f88c3805c213c61e7f63b2f5f
P6_BACKEND_CANDIDATE_TREE = 86c5bb769598dd19a634dcd867350e53eaa06f75
P6_BACKEND_PARENT_SHA = 3712f56930a8785b5cb61a9ed31fb43b240cb421

P6_FRONTEND_CANDIDATE_SHA = 82ed3c9ef849be8353565a1901b6f5fb065c37e1
P6_FRONTEND_CANDIDATE_TREE = f039d59aef7b0c8dd1fdb6ebb34cda961761c597

P6A = PASS
POLICY_MATRIX_TOTAL = 13271040
POLICY_MATRIX_EVALUATED = 13271040
POLICY_MATRIX_FAILURES = 0
POLICY_MATRIX_DIGEST = 91a7f94a6010b61f0f7fdc8b4e105b8351fac6353bacc1193df6bc7f4d4dd082
BRIEF_PACK_POLICY_MATRIX = PASS
CONTRACT_FIDELITY = PASS

P6B = PASS
LEGACY_SEED_DIGEST = 10c22c9ada817f30daaaed4337b3b6c4e6f373ac9f191a7cfb28277ba3e65af2
```

P6A and P6B were retained because the candidate pair remained unchanged.

## Migration acceptance

```text
MIGRATION_COUNT = 79
FRESH_0_TO_79 = PASS
P0_74_DEPLOY = PASS
LEGACY_SEED_EXECUTION = PASS
LEGACY_SEED_FIDELITY = PASS
LEGACY_SEED_DIGEST = 10c22c9ada817f30daaaed4337b3b6c4e6f373ac9f191a7cfb28277ba3e65af2
LEGACY_74_TO_79 = PASS
LEGACY_PRESERVATION = PASS
UNEXPECTED_LEGACY_MUTATIONS = 0
MIGRATION_REPLAY_AND_UPGRADE = PASS

FINAL_MIGRATION = 20260910122000_c03_application_handoff_notifications
FINAL_MIGRATION_SHA256 = 69afa7a872131ad6f0ce80b5ba232c1df0a0010589089bae56ec213559d2b255
FINAL_MIGRATION_GIT_BLOB = 49b858278a963b14653e06937c193e8d9bca3236
```

## PostgreSQL and entitlement acceptance

```text
P11A = 5/5 PASS
P11B_FINAL = 5/5 PASS
P11C_FINAL = 6/6 PASS
P11D_FINAL = 6/6 PASS
P11E_FINAL = 21/21 PASS
P11_EXACT_STAGE_FINAL = 38/38 PASS
P12 = 15/15 PASS
P13 = 72/72 PASS
P14_FINAL = 106/106 PASS
P14_TEST_TIMEOUT_MS = 30000
P5_BRIEF_PACK_POSTGRES = 6/6 PASS
BACKEND_POSTGRESQL_ACCEPTED_LANE_INVOCATIONS = 242/242 PASS
REAL_POSTGRES_CONCURRENCY = PASS
PERSISTENCE_NEGATIVE_GUARDS = PASS
CORRECTED_ENTITLEMENT_RUNTIME = PASS
```

The 30-second P14 value was invocation-only acceptance-runner configuration. It was not a backend source, test-source, Vitest configuration, or product semantic change.

Canonical visibility authority:

```text
PUBLIC = authenticated Creator + usable Instagram
ELIGIBLE_CREATORS_ONLY = authenticated Creator + usable Instagram + authoritative backend ELIGIBLE
INVITE_ONLY = authenticated Creator + usable Instagram + valid matching invitation

INVITATION_IS_NOT_ELIGIBLE_ONLY_ENTITLEMENT
```

No Product or architecture change occurred during P6.

## Runtime, regression, browser, and security acceptance

```text
AUTHORIZATION_AND_COMMERCIAL_REDACTION = PASS
INVITATION_SECURITY = PASS
IDEMPOTENCY_SECURITY = PASS
APPLICATION_RUNTIME_RISK_MATRIX = PASS
HISTORICAL_ACCESS = PASS
NOTIFICATIONS = PASS
C04_HANDOFF_REGRESSION = PASS
LEGACY_MUTATION_RETIREMENT = PASS
BRIEF_PACK_RUNTIME = PASS
PDF_RENDER = PASS
PDF_SECURITY = PASS

BACKEND_FULL_SUITE_BUILD_STARTUP = PASS
BACKEND_TESTS = 6206 PASS / 0 FAIL / 765 INTENTIONALLY PENDING
BACKEND_SUITES = 540/540 PASS
BACKEND_BUILD = PASS
BACKEND_STARTUP = PASS

FRONTEND_FULL_SUITE_TYPECHECK_BUILD = PASS
FRONTEND_TESTS = 970/970 PASS
FRONTEND_SUITES = 252/252 PASS
FRONTEND_TYPECHECK = PASS
FRONTEND_BUILD = PASS
CHANGED_FILE_LINT = 42/42 FILES PASS

FULL_LINT = PASS_WITH_UNCHANGED_BASELINE_DEBT
FULL_LINT_ERRORS = 26
FULL_LINT_WARNINGS = 13
FULL_LINT_NORMALIZED_DIAGNOSTICS = EXACT MATCH TO ACCEPTED BASELINE

DESKTOP_TABLET_MOBILE_BROWSER = PASS
KEYBOARD_ACCESSIBILITY = PASS
RESPONSIVE = PASS
NETWORK_SECURITY = PASS
STORAGE_DOM_SECURITY = PASS
SESSION_WORKSPACE_CLEARING = PASS

ACCEPTED_VIEWPORTS = 1440x900, 768x1024, 390x844, 375x812

DIFF_SCOPE_AND_SECRET_SCAN = PASS
HIGH_CONFIDENCE_SECRET_FINDINGS = 0
P6_NEW_TRACKED_DIFF = NONE
BACKEND_WORKTREE = CLEAN
FRONTEND_WORKTREE = CLEAN
RECOVERY_WORKTREE = CLEAN
```

The 765 intentionally pending backend tests were guarded/pending; they were neither failures nor ordinary executed passes. Full repository lint retained exactly 26 errors and 13 warnings of accepted pre-existing baseline debt and was not clean.

The PDF run parsed 11 PDFs and rendered 19 pages, including a nine-page long-content sample. Determinism, bounds, forbidden-marker scanning, and visual inspection passed with no clipping, overlap, broken glyphs, or malformed page transitions.

## Twelve canonical gates

```text
1. CONTRACT_FIDELITY = PASS
2. MIGRATION_REPLAY_AND_UPGRADE = PASS
3. REAL_POSTGRES_CONCURRENCY = PASS
4. AUTHORIZATION_AND_COMMERCIAL_REDACTION = PASS
5. BACKEND_FULL_SUITE_BUILD_STARTUP = PASS
6. FRONTEND_FULL_SUITE_TYPECHECK_BUILD = PASS
7. DESKTOP_TABLET_MOBILE_BROWSER = PASS
8. KEYBOARD_ACCESSIBILITY = PASS
9. PDF_RENDER = PASS
10. LEGACY_MUTATION_RETIREMENT = PASS
11. C04_HANDOFF_REGRESSION = PASS
12. DIFF_SCOPE_AND_SECRET_SCAN = PASS

TWELVE_CANONICAL_GATES = 12/12 PASS
```

## Execution-route notes

The first real-browser attempt found that Playwright 1.55 expected missing Chromium revision 1187. The exact required Playwright Chromium 140 build 1187 was installed as an environment dependency; no candidate file changed.

The first Brief Pack browser invocation used frontend bundle origin `c03-p4.test`, while the unchanged P5 harness allowlist permitted `127.0.0.1` and `c03-p5.test`. No business request occurred and the page remained at sign-in. That preflight invocation was excluded. The unchanged frontend was rebuilt with `VITE_API_URL=http://c03-p5.test:4173`, the disposable database was reset, and the rerun passed.

The P4 browser scripts initially wrote new results to the historical P4 evidence directory because the shared harness retained its original output path. Fresh result JSON and screenshots were copied into V7 evidence, then the historical `C03_P4_FRONTEND_ACCEPTANCE_EVIDENCE` directory was restored byte-for-byte from its sealed ZIP.

A sample renderer container initially could not bind port 4173 because a completed preview retained the port. The preview was stopped, the renderer container was started, and all samples were generated successfully.

No product, backend, frontend, test-source, configuration, migration, schema, or package file was changed. No candidate commit or push occurred. All disposable containers were stopped.

## Evidence and correction history

```text
P6_EVIDENCE_BUNDLE = C03_P6_FINAL_EXECUTION_ROUTE_V7_EVIDENCE.zip
P6_EVIDENCE_SHA256 = 78215308571af534653ec71fe63e172584ea80bf4ee3672db8aa3e086354a001
EVIDENCE_FILE_COUNT = 122

P6_TRACKED_CORRECTION_COUNT = 1
P6_HARNESS_CORRECTION_COUNT = 2
P6_HARNESS_CORRECTION_BUDGET_REMAINING = 0
P6_RESIDUAL_ORACLE_RECONCILIATION_COUNT = 1
P6_LEGACY_FIXTURE_ROUTE_RECONCILIATION_COUNT = 1
P6_RCA_PROVEN_FIXTURE_ADOPTION_COUNT = 1
P6_FINAL_EXECUTION_ROUTE_RECONCILIATION_COUNT = 1
P6_FINAL_EXECUTION_ROUTE_RECONCILIATION_REMAINING = 0
```

The external ZIP, screenshots, generated PDFs, browser artifacts, runtime logs, and disposable databases are not committed.

P6 V1, Resume V2, Resume V3, Resume V4, Resume V5, and V6 remain valid historical blocked runs. V7 supersedes them only as the final P6 outcome and does not rewrite or delete their records.

```text
P6 = TECHNICALLY_ACCEPTED
P7 = NOT STARTED
NEXT_AUTHORIZED_BOUNDARY = SA_REVIEW_ONLY
```
