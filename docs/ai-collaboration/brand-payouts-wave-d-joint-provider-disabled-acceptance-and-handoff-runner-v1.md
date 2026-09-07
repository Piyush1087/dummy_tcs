# Brand Payouts Wave D — Joint Provider-Disabled Acceptance and Developer Handoff Runner V1

`BRAND_PAYOUTS_WAVE_D_JOINT_PROVIDER_DISABLED_ACCEPTANCE_AND_HANDOFF_RUNNER_V1`

## Status

```text
STATUS = AUTHORIZED
WAVE_C = ACCEPTED
EXECUTION_MODE = ONE_FINAL_JOINT_ACCEPTANCE_AND_HANDOFF_RUN
PARENT_CHECKPOINTS_DURING_RUN = NONE
```

This is the sole consolidated Local Codex assignment for the remaining provider-disabled Brand Payouts MVP. It must end either with `BRAND_PAYOUTS_PROVIDER_DISABLED_HANDOFF_READY` or one genuine Class C blocker.

Do not create another planning artifact or return for routine progress, ordinary defects, evidence packaging, or intermediate checkpoints.

## Accepted source authority

```text
Backend repository = Piyush1087/creator-commerce-backend-v2-clone
Backend branch = brand-payouts/wave-c-reserve-read-v1
Backend SHA = a38102fd9662f1654c9572b19913b9e228385b73
Backend tree = adb8c129744dc5e9574328a75e59d802728bbe37
Backend ancestry = C04 ec395bf5760b295dddd9c3f7e9c2f05485b6b743 → Wave B 46c71fd554d7621d9bd13d1bbc3115646a7c56bd → Wave C correction a38102fd9662f1654c9572b19913b9e228385b73

Frontend repository = Piyush1087/creator-commerce-frontend-v2-clone
Frontend branch = brand-payouts/wave-c-frontend-v1
Frontend SHA = 25441dd4fd228bec4d6c9fe9f39c2297318b6167
Frontend tree = 3490d5c936b207d6e1685aee6baff37e073257e0
Frontend accepted P3A source base = 7c75a4c8f5a0df3a1fb82d2f707b1c6b03d56d2a

Migration count = 86
C04 lineage migration = 20260911125000_c04_brand_payouts_reserve_entitlement_lineage
Payouts M1 migration = 20260912100000_brand_payouts_wave_b_normal_path
Payouts M1 Git-blob SHA256 = 887e5bb6bd262a4dd02e42a798db55bd136d97bf6a923df7e6466573f11d1f84
```

Wave C acceptance evidence:

- backend correction: 4 files, 28 focused tests, build/startup/PostgreSQL passed;
- frontend: 114 files / 895 tests passed; production build passed;
- browser: Owner, Finance, Campaign Manager, unauthenticated, 390/767/768/1440 passed;
- serious/critical Axe findings: zero;
- payout-provider actions: zero;
- migrations changed in Wave C: none.

## Disclosed Wave C exceptions and disposition

1. An initial non-accepted frontend bundle omitted local `VITE_API_URL`; the accepted rebuilt bundle corrected it. No residual blocker.
2. Before the accepted browser run, a populated disposable database caused queued test notifications to attempt Postmark delivery with an invalid token. Calls were rejected, no payout-provider call occurred, and recipients were cleared before the accepted run.
3. Three inherited moderate application-shell landmark findings remain disclosed. They are not Brand Payouts serious/critical accessibility blockers.
4. Repository-wide backend lint retains the inherited CRLF/Prettier baseline; changed-scope lint passed.

Do not rerun Wave C merely because these are disclosed. For Wave D, eliminate the notification/egress setup weakness before starting acceptance: use a fresh disposable database, disable or replace outbound notification transport and owned workers/timers with deterministic local test sinks, and install an outbound deny guard before application startup.

The accepted Wave D lane must prove:

```text
NON_LOOPBACK_APPLICATION_ATTEMPTS = 0
PAYOUT_PROVIDER_METHODS_BEYOND_AUTHORIZED_CAPABILITY_ASSERTIONS = 0
PROVIDER_ACTIONS = NONE
```

A blocked attempt during preflight is an environment correction signal. Fix it before the accepted run and then execute the final lane once.

## Mission

Run one production-shaped, built-stack, provider-disabled joint acceptance across the accepted backend and frontend, then publish the developer handoff.

Use immutable prior evidence for unchanged full suites/builds and migration proofs. Do not rerun 6,000+ backend tests or the full responsive Wave C matrix unless a source correction affects them.

```text
exact-ref and environment-delta preflight
→ resolve complete bounded blocker set
→ build accepted source
→ fresh disposable PostgreSQL and migrations
→ deterministic authenticated fixtures
→ one joint provider-disabled normal-path acceptance
→ bounded Class A/B correction if required
→ affected regression and refreshed joint gate
→ compact evidence and decision register
→ developer integration handoff
→ one terminal return
```

## Final joint acceptance

Prove, using the exact built artifacts and one controlled local stack:

### Authority and isolation

- authenticated Owner, Finance Admin, Campaign Manager, unauthenticated, and cross-Brand actors;
- Owner/Finance full authorized financial commands;
- Campaign Manager operational read-only/fail-closed projection with no financial command or protected amount leakage;
- unauthorized and cross-Brand requests denied without distinguishable existence leakage;
- frontend consumes only server-emitted IDs, versions, actions, due timestamps, amounts, and status.

### Provider-disabled normal path

- canonical C04 reserve request appears through the corrected server read contract;
- Owner and Finance can each reach the approval command in an isolated deterministic case;
- repeated pointer/keyboard activation yields exactly one approval and one financial effect;
- reserve execution preserves exact C04 instruction, agreement, entitlement, lock, vault, ledger, Brand, Campaign, Collaboration, creator, version, hash, amount, and currency lineage;
- insufficient funds and supersession remain fail closed;
- P4B instruction/due/obligation intake uses all exact NET_7/15/30/45/60 server-derived Kolkata-to-UTC rules and caller-independent economics;
- current C05 destination ID/version is fenced before provider-neutral claim;
- production provider-disabled binding exposes truthful unavailable/action-required state and performs no provider transfer;
- the authorized test-only provider-neutral boundary proves the normal transition, receipt, and exactly-one settlement effect without being production-selectable;
- obligation, transfer attempt, settlement, receipt, Brand Return, refund/reversal, and ledger meanings remain distinct;
- P3A Payouts/Settings exactly-one command surface and representative Brand Return fail-closed behavior remain intact;
- no duplicate POST, stale capability use, or client-authored financial authority.

### Runtime and UI

- built Nest application starts and shuts down cleanly against fresh disposable 0-to-86 PostgreSQL;
- built frontend preview targets only the exact local backend;
- representative desktop and mobile flows cover overview, reserve request/action, obligation, activity/detail, pagination/history/refresh, provider-disabled state, and role-safe navigation;
- keyboard/focus/error behavior passes;
- no serious or critical Axe issue;
- no unexpected browser console error;
- no unauthorized network or provider action;
- owned processes, ports, database, fixtures, temporary files, sessions, and test sinks are cleaned up.

## Correction authority

If the final lane finds an ordinary Class A defect or bounded Class B inconsistency inside frozen Product/architecture, fix it in the same run, commit it on the corresponding Wave branch, run affected focused proof, rebuild the affected artifact, and rerun the joint lane. Record the decision at the end.

Return early only for a genuine change to Product meaning, material architecture ownership, destructive/heuristic migration, financial/RBAC/cross-Brand authority, provider credential/action, legal/tax gate, production/AWS, canonical merge/deploy, or an unrecoverable prepared-environment contradiction.

## Developer handoff

Publish a concise durable handoff that includes:

- exact Product/architecture/charter/execution authority identities;
- final backend and frontend branches, SHAs, and trees;
- accepted migration identities, order, count, and canonical hashes;
- P3A, Wave B, Wave C, and Wave D evidence identities/permalinks;
- exact test/build/runtime/browser results and evidence reuse declarations;
- configuration and local integration instructions;
- backend-first then frontend integration order;
- feature flags/command-surface configuration;
- provider-disabled limitation and proof of zero provider action;
- inherited lint/accessibility disclosures;
- no production/AWS/canonical merge authority;
- explicit deferred P3S, generalized P4R/P5R, provider-enabled P6, legal/tax if applicable, deployment, and complete-V1 co-residence gates.

Do not label this real-money production-ready.

## Required terminal return

```text
BRAND_PAYOUTS_PROVIDER_DISABLED_HANDOFF_READY

RESULT =
FINAL_BACKEND_BRANCH =
FINAL_BACKEND_SHA =
FINAL_BACKEND_TREE =
FINAL_FRONTEND_BRANCH =
FINAL_FRONTEND_SHA =
FINAL_FRONTEND_TREE =
MIGRATION_COUNT =
MIGRATION_IDENTITIES =
PAYOUTS_M1_GIT_SHA256 =
P3A_EVIDENCE =
WAVE_B_EVIDENCE =
WAVE_C_EVIDENCE =
WAVE_D_EVIDENCE =
AUTH_RBAC_CROSS_BRAND =
RESERVE_AND_EXACTLY_ONE_EFFECT =
P4B_DUE_OBLIGATION =
C05_DESTINATION_VERSION =
PRODUCTION_PROVIDER_DISABLED =
TEST_ONLY_PROVIDER_NEUTRAL =
P3A_COMMAND_SURFACE_AND_RETURN =
BUILT_STACK_RUNTIME =
JOINT_BROWSER_ACCEPTANCE =
ACCESSIBILITY =
CONSOLE =
NON_LOOPBACK_APPLICATION_ATTEMPTS =
PROVIDER_ACTIONS =
NON_DISPOSABLE_DATABASE_MUTATION =
SOURCE_CORRECTIONS_DURING_WAVE_D =
DECISION_REGISTER_PERMALINK =
DEVELOPER_HANDOFF_PERMALINK =
DEVELOPER_INTEGRATION_ORDER =
DEFERRED_GATES =
COMPLETE_BLOCKER_SET =
```
