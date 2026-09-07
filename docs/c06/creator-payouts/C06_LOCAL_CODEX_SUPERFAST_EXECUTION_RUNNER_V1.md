# C06_LOCAL_CODEX_SUPERFAST_EXECUTION_RUNNER_V1

`C06_LOCAL_CODEX_SUPERFAST_EXECUTION_RUNNER_V1`

You are the external Local Codex implementation/runtime runner for:

**C-06 — Creator Payouts, provider-disabled MVP only.**

The Cloud C06 Systems Architect remains authority. Product and architecture are frozen. Execute the finite plan without redefining Product meaning.

## 1. Authority

Authority repository:

```text
Piyush1087/dummy_tcs
```

Frozen authority branch and immutable SHA:

```text
BRANCH = c06/product-architecture-execution-authority-v1
FROZEN_AUTHORITY_SHA = 2d13f3973d5613839f29976be54491696e1b202a
```

Read completely before source mutation:

```text
docs/organization/charters/systems_architect_ai_worker_charter.md
docs/organization/charters/browser_ai_worker_codex_runner_operating_standard.md
docs/organization/charters/backend_ai_worker_charter.md
docs/organization/charters/frontend_ai_worker_charter.md

docs/c06/creator-payouts/C06_PRODUCT_AUTHORITY_V1.md
docs/c06/creator-payouts/C06_ARCHITECTURE_AND_OWNERSHIP_V1.md
docs/c06/creator-payouts/C06_BASE_CONVERGENCE_PLAN_V1.md
docs/c06/creator-payouts/C06_FINITE_EXECUTION_PLAN_V1.md
docs/c06/creator-payouts/C06_EXECUTION_READINESS_PREFLIGHT_REPORT_V1.md
docs/c06/creator-payouts/C06_ACCEPTANCE_MATRIX_V1.md
```

Verify the six C06 files exist at the exact frozen authority SHA. Do not amend, rewrite, or force-move that authority commit.

## 2. Execution mode

```text
MODE = AUTONOMOUS_RUN_WITH_GATES
AUTHORIZED_PHASES = P0 P1 P2 P3 P4 P5 P6 P7
INTERMEDIATE_PARENT_APPROVALS = NOT_REQUIRED_FOR_ORDINARY_BOUNDED_FIXES
PRODUCTION_DEPLOYMENT = NOT_AUTHORIZED
```

At every phase boundary: validate, update the execution ledger, commit, push, independently fetch back, and prove a clean worktree. Continue automatically only after the phase gate passes.

Use at most two bounded correction cycles per phase:

```text
one diagnosis
→ one bounded correction
→ rerun gate
```

If the same gate fails again or correction changes Product/architecture/security/persistence/provider boundaries, stop.

## 3. Absolute scope

Build one Creator-scoped, authenticated, actor-aware, read-only payout workspace over the accepted shared financial engine.

```text
ONE_FINANCIAL_ENGINE
TWO_ACTOR_SPECIFIC_PROJECTIONS
```

C06 must create no second obligation, ledger, due calculator, reserve, transfer, settlement, provider, recovery engine, history table, or financial-only hash.

## 4. Provider and compliance cut

```text
PROVIDER = DISABLED
PROVIDER_CREDENTIALS = NONE
PROVIDER_METHOD_ACTIONS = ZERO
RAZORPAY_CALLS = ZERO
EXTERNAL_FINANCIAL_NETWORK_CALLS = ZERO
MANUAL_PAYOUT_TRIGGER = DEFERRED
AUTOMATED_PAYOUT_SCHEDULER = DEFERRED
KYC = NOT_C06_SCOPE
PAN_OR_TAX_ID_CAPTURE = NOT_AUTHORIZED
```

Do not access AWS, production, Razorpay, Meta, live providers, or live money. Do not create provider mocks that leak into production composition. Existing fail-closed provider remains authoritative. C06 GET reads must not invoke `ProviderNeutralPayoutService` or `CreatorPayoutProviderPort`.

## 5. Implementation repositories and immutable bases

Backend:

```text
REPOSITORY = Piyush1087/creator-commerce-backend-v2-clone
CREATOR_BASE = 4e082f67953f0d6b55fa791f2cea03c8aef28119
BRAND_PAYOUT_DONOR = a38102fd9662f1654c9572b19913b9e228385b73
MERGE_BASE = ec395bf5760b295dddd9c3f7e9c2f05485b6b743
BRANCH = c06/creator-payouts-provider-disabled-v1
```

Frontend:

```text
REPOSITORY = Piyush1087/creator-commerce-frontend-v2-clone
CREATOR_BASE = 29e78397fc66676d0134c45aa0bb6af173fbe12b
BRAND_PAYOUT_DONOR = 25441dd4fd228bec4d6c9fe9f39c2297318b6167
MERGE_BASE = 323658d4b147b95b5629ff8d91fa90b8fe9077e4
BRANCH = c06/creator-payouts-provider-disabled-v1
```

Do not start from development or another inferred head. Do not rebase, force push, rewrite history, or decompose donor history into cherry-picks unless ordinary merge proves impossible; that condition requires a stop for SA review.

## 6. Migration invariant

```text
TOTAL_MIGRATIONS_AFTER_P0 = 86
C06_OWNED_MIGRATIONS = 0
FIRST_85_MIGRATIONS_UNCHANGED = YES
MIGRATION_86 = 20260912100000_brand_payouts_wave_b_normal_path
MIGRATION_86_SHA256 = 887e5bb6bd262a4dd02e42a798db55bd136d97bf6a923df7e6466573f11d1f84
```

Any migration 87, any migration edit/rename/hash drift, or any proposal for new persistence is a hard stop.

## 7. P0 — Exact convergence before feature mutation

Backend:

1. Fetch the exact base and donor SHAs.
2. Create the named branch at the Creator base.
3. Perform a normal `--no-ff`, non-force merge of the Brand Payout donor.
4. The only expected changed-on-both path is `src/features/collaboration/collaboration.module.ts`.
5. Resolve additively: retain both `CollaborationHomeReadService` and `CollaborationTrustedConfirmationService` in appropriate imports/providers/exports.
6. Do not make C06 feature changes inside the convergence commit.

Frontend:

1. Fetch the exact base and donor SHAs.
2. Create the named branch at the Creator base.
3. Perform a normal `--no-ff`, non-force merge of the Brand Payout donor.
4. The only expected changed-on-both path is `src/routes/app-routes.tsx`.
5. Preserve C03 Campaign, C04 Collaboration, C02A Home, Creator Settings, Creator shell, and accepted Brand Payout route guard behavior.
6. Do not make C06 feature changes inside the convergence commit.

P0 proof:

- exact merge parents and merge bases;
- no unexpected changed-on-both file or semantic conflict;
- backend migration count/identities/hash exact;
- accepted routes/modules present;
- Prisma format/validate/generate;
- focused overlap regressions;
- backend/frontend builds and startup/route smoke;
- clean worktrees, convergence commits, push, fetch-back.

If P0 fails, return `C06_P0_CONVERGENCE_CIRCUIT_BREAKER` and stop before feature mutation.

## 8. Frozen backend contract

Implement only authenticated GET routes:

```text
GET /api/v1/creator/payouts
GET /api/v1/creator/payouts/obligations
GET /api/v1/creator/payouts/obligations/:obligationId
GET /api/v1/creator/payouts/history
GET /api/v1/creator/payouts/history/:historyId
GET /api/v1/creator/payouts/payout-method
```

Every response is `private, no-store`, fixed-as-of, Creator-workspace-scoped, actor-aware, exact decimal-string money, backend-authoritative dates/status, stable pagination, and fail-closed across Creators.

Common schema version:

```text
C06_CREATOR_PAYOUTS_V1
```

Do not add any POST/PATCH/PUT/DELETE C06 route.

## 9. Authorization

Use the canonical `CreatorWorkspaceActorService` boundary and add the distinct action:

```text
PAYOUT_WORKSPACE_READ
```

Freeze:

```text
OWNER = READ YES
MANAGER = READ YES
ASSISTANT = DENIED
```

Owner/Manager obtain the action through the canonical policy; Assistant's explicit action list remains without it. Deny before financial queries and keep foreign/missing resources non-enumerating. No C06 actor receives a financial execution command. Settings capability remains exclusively C05-governed.

## 10. Canonical sources and validation

Read only accepted shared sources:

```text
creator_payout_obligations
route_transfer_attempts
payout_reconciled_receipts
escrow_transaction_ledger
creator_payout_funding_allocations
C04 authority/agreement/reserve/trusted-confirmation relations
C05 payout destination through a narrow safe read port
```

Before exposing canonical amount/due state, prove subject ownership/currency, `CANONICAL_C04` provenance, exact current unsuperseded C04 instruction/agreement hashes and versions, reserve/funding confirmation, exact allocation sum, stored settlement eligibility/term/due-rule/due evidence/date, coherent transfer/receipt/ledger settlement and reversal, and destination snapshot/currentness where applicable.

Reuse the accepted shared Kolkata helper only to validate the persisted due date. Display the persisted `paymentDueAt`; do not recompute it in the frontend or add a second calculator.

Ownership-proven legacy/unproven rows may be emitted only as limited records with unproven money/due hidden. They contribute to no monetary summary.

## 11. Summary contract

Return exact per-currency buckets for:

```text
UPCOMING
DUE_OR_ACTION_REQUIRED
PROCESSING
PAID_TO_DATE
```

Current outstanding priority is:

```text
PROCESSING
→ DUE_OR_ACTION_REQUIRED
→ UPCOMING
```

This prevents overlap/double counting. Paid-to-date is cumulative net settled evidence after processed reversals. Unavailable is not zero. Never sum unlike currencies or use JavaScript floating-point money.

## 12. Gate/lifecycle truth

Implement the frozen Creator-safe treatment for:

```text
NOT_YET_DUE
CREATOR_SETUP_REQUIRED
UNSUPPORTED_GEOGRAPHY_OR_RAIL
FUNDING_REQUIRED
RESOLUTION_BLOCKED
PROVIDER_UNAVAILABLE
READY
PROCESSING
SETTLED
FAILED_RETRYABLE
ACTION_REQUIRED
```

While provider capability is disabled, an otherwise-ready due obligation uses effective gate `PROVIDER_UNAVAILABLE`, not setup failure. Do not mutate the stored obligation from a GET. Setup/rail/funding/resolution blockers retain their specific truthful gate. Processing/settled/failure requires coherent existing evidence. No ETA, retry control, payout execution control, or provider promise.

## 13. History/detail

Create no history table. Project a fixed-as-of merged sequence over obligation, transfer, receipt, settlement, and reversal evidence, strictly joined to the subject Creator. Use safe public references/resource versions and allowlisted categories/reasons. Exclude Brand Return, pooled vault/funding events, provider IDs/payloads, reserve approval details, restricted recovery/support diagnostics, and unrelated Creator/Brand records.

## 14. C05 method boundary

Add a narrow C05-owned `CreatorPayoutMethodSummaryPort` or equivalently named port with an explicit database select that never retrieves secret/legal/provider payloads.

Allowed result:

```text
destination_id
destination_version
masked_display
destination_type
country_code
currency_code
is_primary
destination_state
safe_reason_code
updated_at
c06_rail_support
manage_settings_href when authorized
```

Do not expose beneficiary name, full account/routing, encrypted payload, encryption-key version, legal profile/address, provider mapping/secret/status, KYC, or verification claims. Do not duplicate C05 forms or writes.

## 15. Frontend

Build one Creator Payout workspace from:

- accepted Brand Payout loading/error/refresh, obligation/history/detail, exact money/date/status, responsive table/card, drawer/focus, and partial/unavailable primitives;
- bounded Creator shell, visual, mobile row, and detail presentation patterns.

Do not port Brand vault/Add funds/Return/reserve/treasury, Finance Admin/Campaign Manager semantics, or legacy Creator escrow/tranche/bank verification/tax/invoice/receipt/ETA/automatic-release semantics.

Required surface:

- four per-currency summary families;
- paginated obligations;
- paginated history and safe detail;
- read-only payout-method summary;
- `Manage in Settings` only when C05 capability authorizes it;
- empty, partial, unavailable, legacy-limited, and permission states.

No Stitch. If a material composition gap genuinely requires Stitch or UI/UX authority, stop for SA review.

## 16. Finite phases

Execute exactly:

```text
P0 = BASE_CONVERGENCE
P1 = BACKEND_CONTRACTS_AND_AUTHORIZATION
P2 = OBLIGATION_AND_SUMMARY_PROJECTION
P3 = HISTORY_DETAIL_AND_C05_METHOD_SUMMARY
P4 = FRONTEND_CONTRACTS_API_HOOKS
P5 = CREATOR_PAYOUT_WORKSPACE
P6 = JOINT_POSTGRES_BROWSER_ACCESSIBILITY_REGRESSION
P7 = DURABLE_CLOSEOUT_FOR_SA_REVIEW
```

Use the phase purposes and gates in `C06_FINITE_EXECUTION_PLAN_V1.md`. Do not collapse P0 into feature implementation. Later phases may be combined into one physical working session, but their checkpoints/evidence remain distinct.

## 17. Required acceptance

Backend/data:

- Owner/Manager pass; Assistant denied;
- cross-Creator and foreign Collaboration/obligation denial;
- exact counts, pagination, as-of, summary/row predicate parity;
- every NET term and due boundary;
- all frozen gates/lifecycles and provider-unavailable separation;
- C05 none/current/stale/attention/disabled/ambiguous/unsupported destination states;
- exact decimal strings and mixed-currency separation;
- coherent processing/settlement/reversal/history/detail;
- legacy/corrupt/partial/unavailable fail-closed behavior;
- no C06 writes, provider methods, new persistence, or financial hashes;
- PII/secret/diagnostic denylist.

Real PostgreSQL 16 UTC fixtures must include multiple Creators, workspaces, roles, Brands, foreign records, all NET terms/states, current/stale destinations, corrupt lineage, multiple currencies, and enough rows for pagination.

Frontend/browser:

- exact built frontend/backend over disposable PostgreSQL;
- widths 390, 767, 768, and 1440;
- Owner, Manager, Assistant, empty, partial, unavailable, mixed-currency, long-label, and multi-page states;
- no horizontal overflow;
- keyboard navigation, live loading/error, detail drawer trap/Escape/return focus, visible focus;
- Axe serious 0 and critical 0;
- no C06-attributable console warnings/errors;
- no legacy semantics, KYC, provider-verification claim, fake ETA, PDFs, or execution control.

Regression/safety:

```text
Prisma format/validate/generate
fresh PostgreSQL 0→86
populated 85→86
focused C04 financial lineage
focused C05 payout authority
focused Brand Payout
focused C06 backend/frontend
full backend suite
full frontend suite
backend build
frontend production build
startup/API smoke
changed-scope lint
secret scan
PII denylist scan
provider/network deny proof
```

No unexplained pass-count reduction. An unchanged inherited baseline may remain only if isolated, non-C06, and explicitly disclosed.

## 18. Execution ledger and durable evidence

On the C06 authority branch, add without rewriting the frozen authority commit:

```text
docs/c06/creator-payouts/C06_EXECUTION_LEDGER_V1.yaml
docs/c06/creator-payouts/evidence/<phase-specific evidence>
docs/c06/creator-payouts/C06_LOCAL_CODEX_SUPERFAST_EXECUTION_REPORT_V1.md
docs/c06/creator-payouts/C06_DEVELOPER_INTEGRATION_HANDOFF_V1.md
```

The ledger records authority SHA, phase, repository, starting/final SHA/tree, branch, merge parents, files, migrations, tests, correction counts, environment, failure/deviation, and next phase. Keep provider credentials, secrets, PII, raw payloads, and disposable database contents out of Git.

## 19. Circuit breakers

Stop immediately for:

```text
PRODUCT_DECISION_REQUIRED
ARCHITECTURE_CONFLICT
P0_UNEXPECTED_SEMANTIC_CONFLICT
BRANCH_DIVERGENCE
UNAUTHORIZED_SCHEMA_MIGRATION
MIGRATION_COUNT_OR_HASH_DRIFT
NEW_PERSISTENCE_REQUIRED
DESTRUCTIVE_MIGRATION_REQUIRED
PROVIDER_OR_CREDENTIAL_REQUIREMENT
ANY_PROVIDER_OR_EXTERNAL_FINANCIAL_CALL
SECURITY_OR_AUTH_BOUNDARY_CHANGE
CROSS_CREATOR_OR_ROLE_ISOLATION_FAILURE
CANONICAL_FINANCIAL_STATE_AMBIGUITY
REPEATED_GATE_FAILURE
PRODUCTION_ARTIFACT_FAILURE
AWS_OR_PRODUCTION_ACCESS_REQUIRED
STITCH_OR_NEW_UI_AUTHORITY_REQUIRED
```

Do not continue another phase after a circuit breaker.

## 20. Required final return

Return the complete immutable report:

```text
C06_LOCAL_CODEX_SUPERFAST_EXECUTION_REPORT_V1

RESULT =
READY_FOR_SA_REVIEW
| CIRCUIT_BREAKER

FROZEN_AUTHORITY_SHA =
2d13f3973d5613839f29976be54491696e1b202a

BACKEND_BRANCH =

BACKEND_P0_CONVERGENCE_SHA =
BACKEND_FINAL_SHA =
BACKEND_FINAL_TREE =
BACKEND_MERGE_PARENTS =

FRONTEND_BRANCH =

FRONTEND_P0_CONVERGENCE_SHA =
FRONTEND_FINAL_SHA =
FRONTEND_FINAL_TREE =
FRONTEND_MERGE_PARENTS =

AUTHORITY_EVIDENCE_BRANCH =
c06/product-architecture-execution-authority-v1

AUTHORITY_EVIDENCE_FINAL_SHA =

TOTAL_MIGRATIONS =
86

C06_OWNED_MIGRATIONS =
0

MIGRATION_86_SHA256 =
887e5bb6bd262a4dd02e42a798db55bd136d97bf6a923df7e6466573f11d1f84

PHASE_RESULTS =
P0:<exact>
P1:<exact>
P2:<exact>
P3:<exact>
P4:<exact>
P5:<exact>
P6:<exact>
P7:<exact>

FILES_CHANGED =
<exact by repository>

TESTS_AND_RUNTIME =
<exact commands/counts/results>

POSTGRESQL_PROOF =
<exact>

BROWSER_PROOF =
<exact 390/767/768/1440>

AXE =
SERIOUS_0_CRITICAL_0 | <circuit breaker>

PROVIDER_CREDENTIALS =
NONE

PROVIDER_METHOD_ACTIONS =
ZERO

RAZORPAY_CALLS =
ZERO

EXTERNAL_FINANCIAL_NETWORK_CALLS =
ZERO

NEW_CREATOR_LEDGER =
NO

NEW_FINANCIAL_HASH =
NO

SECRET_AND_PII_SCAN =
<exact>

CORRECTION_COUNTS =
<exact by phase and total>

DEVIATIONS =
NONE | <exact>

UNRESOLVED_BLOCKERS =
NONE | <exact>

WORKTREES =
CLEAN | <exact>

PUSH_FETCHBACK =
PASS | <exact>

NEXT_AUTHORIZED_BOUNDARY =
SA_REVIEW_ONLY
```

Do not deploy. Do not merge to development. Do not declare `C06_ACCEPTED`; only the Cloud Systems Architect may review and accept the returned evidence.

