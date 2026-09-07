# Brand Payouts — Wave C Reserve Read Contract Correction and Continuation V1

`BRAND_PAYOUTS_WAVE_C_RESERVE_READ_CONTRACT_CORRECTION_AND_CONTINUATION_V1`

## Status

```text
STATUS = AUTHORIZED
BLOCKER_CLASSIFICATION = CLASS_B_BOUNDED_CONTRACT_COMPLETION
PARENT_APPROVAL_REQUIRED = NO
EXECUTION = ONE_COMBINED_BACKEND_CORRECTION_AND_FRONTEND_CONTINUATION
```

This assignment supersedes the runner's classification of `WAVE_C_CLASS_C_RESERVE_APPROVAL_AUTHORITY_UNREACHABLE` as Class C. The factual finding is accepted; the stop classification is not.

The accepted backend already contains:

- the canonical C04 reserve instruction authority and immutable lineage;
- a Brand-scoped reserve-request V2 read shape;
- a reserve approval command restricted to Owner/Finance;
- server-side transaction, currentness, supersession, idempotency, concurrency, tenant, and economics validation.

The bounded omission is that `listReserveRequests` remains an unconditional unavailable stub and the read-action union lacks the matching approval action. Completing that already-planned production read/command contract does not change Product meaning, financial authority, migration scope, security policy, or provider assumptions.

## Exact bases

```text
Backend repository = Piyush1087/creator-commerce-backend-v2-clone
Backend base branch = brand-payouts/wave-b-backend-v1
Backend base SHA = 46c71fd554d7621d9bd13d1bbc3115646a7c56bd
Backend base tree = 40c1f931be6c2e358394ed5944f67d714b98f09d
Migration count = 86
Migration 86 = 20260912100000_brand_payouts_wave_b_normal_path
Migration 86 Git-blob SHA256 = 887e5bb6bd262a4dd02e42a798db55bd136d97bf6a923df7e6466573f11d1f84

Frontend repository = Piyush1087/creator-commerce-frontend-v2-clone
Wave C branch = brand-payouts/wave-c-frontend-v1
Wave C preflight/evidence SHA = 460282d9634d0c3d4cf3767df8a4a72459aa57c8
Wave C preflight/evidence tree = e137698df8673d731e28e05665296b3f1b7f8177
Accepted P3A source base = 7c75a4c8f5a0df3a1fb82d2f707b1c6b03d56d2a
```

The frontend Wave C SHA contains preflight/evidence only and is not an accepted implementation checkpoint. Preserve its evidence, continue on the same Wave C branch, and do not reopen P3A.

## One-run sequence

```text
verify exact bases
→ complete bounded backend reserve read contract
→ focused backend proof
→ commit/push backend correction
→ bind frontend to exact corrected backend SHA
→ resume full Wave C implementation
→ pre-browser defect sweep
→ stabilize
→ one full frontend suite/build
→ one complete built-stack browser/accessibility matrix
→ commit/push frontend
→ one consolidated return
```

Do not return between the backend correction and frontend continuation. Fix ordinary Class A/B defects encountered anywhere in this sequence inside the same run.

## Backend correction envelope

Create a bounded backend correction branch from the exact Wave B backend base. Complete the existing V2 reserve-request read contract without adding a migration.

The corrected production contract must:

1. project canonical C04 `CollaborationReserveInstruction` rows from the database rather than an unconditional unavailable response;
2. use the server-resolved Brand scope and preserve cross-Brand fail-closed isolation;
3. expose the exact server-owned `reserve_instruction_id` required by the existing approval command;
4. keep the business reserve-request identity, public/display reference, API command identity, and resource version explicit and distinct;
5. add the existing command's matching read capability/action, named consistently (normally `APPROVE_RESERVE`);
6. emit that action only for an authenticated Owner/Finance viewer and only for a current, unsuperseded instruction in the exact approval-eligible state;
7. emit no approval action and no unauthorized amount for Campaign Manager; retain the existing fail-closed campaign/entity-scope behavior unless an already-accepted predicate exists;
8. derive status and amount only from canonical persisted C04 fields;
9. honor accepted cursor, filter, fixed-as-of, source coverage, freshness, pagination, and snapshot-invalidation conventions;
10. revalidate authority, Brand, instruction state/currentness, requester membership, supersession, and idempotency transactionally in the existing command; the read action is not authority by itself;
11. expose no provider-native identifier, funding-source secret, creator bank/KYC detail, or caller-authored financial value;
12. preserve provider-disabled behavior and perform zero provider/network action.

Add focused contract/service/controller/PostgreSQL tests for:

- Owner and Finance eligible projection and successful command targeting;
- Campaign Manager read-only/fail-closed behavior;
- unauthorized and cross-Brand denial;
- stale/superseded/non-current instruction action suppression;
- public reference versus command-resource identity;
- pagination/filter/as-of behavior;
- repeated command idempotency and no duplicate financial effect;
- empty and unavailable source behavior where genuinely applicable.

No migration, economics change, provider abstraction, generalized recovery, or unrelated refactor is authorized.

## Backend correction gate

Run affected tests, scoped lint/typecheck, Prisma validation/generation if relevant, build, startup smoke, and focused disposable-PostgreSQL integration. Do not rerun the complete Wave B suite unless the correction's dependency footprint makes it genuinely necessary.

Commit/push the correction and fetch back the exact remote SHA/tree. Then immediately use that exact SHA as the Wave C backend binding.

## Resume Wave C

Continue the already-authorized `BRAND_PAYOUTS_WAVE_C_COHERENT_FRONTEND_EXECUTION_RUNNER_V1` scope in full:

- all remaining P4/P5 provider-disabled normal-path frontend states;
- reserve approval from the server-emitted action and exact instruction ID;
- Owner/Finance command behavior and Campaign Manager read-only/fail-closed behavior;
- C05 destination/version fencing;
- identity/navigation/pagination/Back/refresh/history/stale restoration;
- exactly-one Payouts/Settings command surface;
- focus, keyboard, dialog, dedupe, contrast, responsive and accessibility requirements;
- provider-disabled production behavior versus deterministic test-only provider-neutral evidence.

Before the broad browser matrix, run the complete interaction/contract sweep defined in the original Wave C assignment and correct the full bounded defect set. Then run the full frontend suite/build once and one complete built-stack browser/accessibility matrix against the corrected built backend and disposable 0-to-86 PostgreSQL.

## Only genuine early stops

Stop only for a newly proven Product meaning change, destructive migration, material architecture ownership change, financial/RBAC/cross-Brand authority contradiction, provider/Test/Live action, legal/tax gate, production/canonical merge authority, or unrecoverable prepared-environment failure.

An ordinary flaw in the bounded correction is fixed within this run and recorded in the terminal decision register.

## Required consolidated return

```text
BRAND_PAYOUTS_WAVE_C_FRONTEND_COMPLETE_V2

RESULT =
BACKEND_CORRECTION_BRANCH =
BACKEND_CORRECTION_SHA =
BACKEND_CORRECTION_TREE =
BACKEND_CHANGED_FILES =
MIGRATIONS_CHANGED =
RESERVE_READ_CONTRACT =
OWNER_FINANCE_APPROVAL_REACHABILITY =
CAMPAIGN_MANAGER_BEHAVIOR =
RBAC_CROSS_BRAND =
CONCURRENCY_IDEMPOTENCY =
BACKEND_FOCUSED_GATES =
BACKEND_BUILD_STARTUP =
FRONTEND_BRANCH =
FRONTEND_FINAL_SHA =
FRONTEND_FINAL_TREE =
BOUND_BACKEND_SHA =
P4_P5_NORMAL_PATH_UI =
C05_DESTINATION_VERSION_BINDING =
EXACTLY_ONE_COMMAND_SURFACE =
IDENTITY_NAVIGATION_PAGINATION_RESTORATION =
FOCUS_KEYBOARD_DEDUPE =
RESPONSIVE_VIEWPORTS =
AXE_ACCESSIBILITY =
FULL_FRONTEND_SUITE =
PRODUCTION_BUILD =
BUILT_STACK_BROWSER_MATRIX =
CONSOLE_NETWORK =
PROVIDER_NETWORK_GUARD =
PROVIDER_ACTIONS =
NON_DISPOSABLE_DATABASE_MUTATION =
DECISION_REGISTER_PERMALINK =
EVIDENCE_REPORT_PERMALINK =
COMPLETE_BLOCKER_SET =
DEFERRED_SCOPE =
```

Wave D, P6, P3S, generalized P4R/P5R, production/AWS, and canonical merge/deploy remain excluded.
