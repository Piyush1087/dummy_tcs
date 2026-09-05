# Brand Payouts — P2 Recovery and Autonomous SA Checkpoint Authorization V2

`BRAND_PAYOUTS_P2_RECOVERY_AND_AUTONOMOUS_SA_CHECKPOINT_AUTHORIZATION_V2`

## 0. Authority and effect

**STATUS: AUTHORIZED**

This is a Parent/Product execution instruction for the persistent Brand Payouts Systems Architect.

The commit containing this file is the authoritative instruction SHA. Verify that exact commit and this exact file before acting.

This instruction:

1. accepts the durable P1 state without reopening it;
2. preserves the pushed P2 candidate;
3. authorizes bounded P2 gate recovery;
4. delegates technical checkpoint review and acceptance to the Systems Architect from this point forward; and
5. supersedes prior requirements to return to Parent for routine P2 and later technical checkpoint acceptance.

It does **not** change Product logic, frozen architecture, financial ownership, schema/migration ceilings, provider boundaries, security invariants, or production-enablement authority.

---

## 1. Frozen durable state

```text
BP-P0-CONTRACT-BASE
= ACCEPTED

BP-P1-BACKEND-READ
= ACCEPTED

P1 backend branch
= brand-payouts/v1-backend

P1 backend starting SHA
= b19752e476f85509ac2a895ffde6f17180dec7ee

P1 accepted backend SHA
= 60385abbd12d5a363615100c463ac6755ce848ea

P1 accepted backend tree
= 1826f3aad9e57b0cf3226a2a3a1acd951c4f344a

P2 frontend branch
= brand-payouts/v1-frontend

P2 frontend base
= 323658d4b147b95b5629ff8d91fa90b8fe9077e4

P2 candidate frontend SHA
= b69c37bc9c1b1aec0976ab503acbb7274153480d

P2 candidate frontend tree
= 0eea09c409f84b463ff087aa01a3c85b784f53fc

Current execution-ledger stop SHA
= dc9b6428d36132b2d11fdb7125b51fc26894275a

BP-P2-FIRST-VERTICAL-SLICE
= IMPLEMENTED_PENDING_ACCEPTANCE_BLOCKED

P3
= NOT_STARTED

MIGRATIONS
= NONE

PROVIDER_ACTIONS
= NONE
```

P1 is final and must not be amended, rewritten, or reopened.

The P2 frontend candidate is a durable pushed candidate. Do not rebuild it from the original frontend base and do not move it unless recovery evidence proves a genuine source defect.

---

## 2. New checkpoint-review topology

From this authority forward:

```text
TECHNICAL_CHECKPOINT_REVIEW_OWNER
= SYSTEMS_ARCHITECT

ROUTINE_PARENT_CHECKPOINT_RETURN
= NOT_REQUIRED

SYSTEMS_ARCHITECT_SELF_CHECKPOINT
= AUTHORIZED

SYSTEMS_ARCHITECT_ACCEPT_CORRECT_STOP
= AUTHORIZED_WITHIN_FROZEN_BOUNDARIES

AUTONOMOUS_CONTINUATION_AFTER_ACCEPTANCE
= REQUIRED_WHERE_DEPENDENCIES_ARE_SATISFIED
```

The Systems Architect must conduct its own checkpoint review using the frozen Product Authority, accepted architecture, finite execution plan, specialist evidence, repository state, tests, runtime proof, and ledger.

For every technical checkpoint, the Systems Architect must:

1. verify exact branch heads, ancestry, clean worktrees, migration state, provider state, and predecessor acceptance;
2. review the complete source, test, security, runtime, and evidence package;
3. classify the checkpoint as `ACCEPT`, `CORRECT`, or `STOP`;
4. apply only bounded corrections that are explicitly allowed by this authority and the accepted architecture;
5. rerun all affected gates;
6. commit and push the checkpoint and ledger evidence;
7. record the Systems Architect as checkpoint reviewer/acceptor; and
8. immediately continue to the next eligible phase or non-serializing lane.

Do not return merely to ask Parent to accept a passing technical checkpoint.

Do not use `READY_FOR_PARENT_REVIEW` as the normal terminal state for P2 or later technical checkpoints.

Use one of:

```text
SA_CHECKPOINT_ACCEPTED_CONTINUING
SA_CHECKPOINT_ACCEPTED_WAITING_NON_DELEGABLE_GATE
SA_CHECKPOINT_CORRECTION_IN_PROGRESS
SA_EXECUTION_STOPPED_NON_DELEGABLE
BRAND_PAYOUTS_PROVIDER_DISABLED_HANDOFF_READY
```

A manual relay to a local Codex runner, when technically unavoidable, is not a Parent acceptance gate. It is an execution handoff only. After evidence returns, the Systems Architect resumes, reviews, checkpoints, and continues without requesting Parent acceptance.

---

## 3. Immediate authorized assignment

Resume only:

```text
P2_GATE_RECOVERY
```

Close exactly two known blockers:

```text
A. BUILT_APP_MODULE_STARTUP_FAILURE
B. MISSING_LIVE_BROWSER_RESPONSIVE_ACCESSIBILITY_EVIDENCE
```

Do not begin P3 before P2 is self-accepted by the Systems Architect.

Do not reopen P0 or P1.

Do not alter Product semantics, financial authority, schema, migrations, provider configuration, or provider state.

---

## 4. Blocker A — built backend AppModule startup

Observed failure:

```text
NotificationsModule import index [2] is undefined
```

Static inspection indicates the likely existing module path:

```text
NotificationsModule
  -> BrandCentreModule
  -> BrandIntelligenceModule
  -> NotificationsModule
```

Treat this initially as:

```text
BASELINE_RUNTIME_BOOTSTRAP_DEFECT
```

unless runtime diagnosis proves otherwise.

### 4.1 Starting point

Repository:

```text
Piyush1087/creator-commerce-backend-v2-clone
```

Branch:

```text
brand-payouts/v1-backend
```

Starting SHA:

```text
60385abbd12d5a363615100c463ac6755ce848ea
```

### 4.2 Required diagnosis

Before changing source, prove:

- the exact circular or undefined import path;
- which module appears at `NotificationsModule` import index `[2]` in the built runtime;
- which provider or exported service requires each side of the import relationship;
- whether one import can be narrowed or removed;
- whether a shared/provider-only module is already available;
- whether `forwardRef` is required at one or more exact Nest boundaries;
- whether exported providers remain resolvable after the correction; and
- whether the defect existed at the accepted P1 starting base.

Do not add `forwardRef` blindly merely to suppress the message.

### 4.3 Allowed correction

Implement the smallest correct Nest module-composition repair.

```text
MAX_PRODUCTION_FILES_CHANGED_FOR_BOOT_FIX
= 3
```

Test files needed for a targeted startup regression do not count toward that production-file ceiling, but must remain minimal.

Allowed changes are limited to:

- exact module import wiring;
- exact dependency-injection boundary correction;
- a bounded startup/module-resolution regression test; and
- no-op test harness changes strictly required to prove built application startup.

Forbidden:

- Brand Payouts Product or API semantic changes;
- Brand Intelligence Product changes;
- notification behavior changes;
- financial authorization changes;
- P1 query-contract changes;
- Prisma schema changes;
- migrations;
- provider configuration;
- Razorpay code or action;
- unrelated module cleanup;
- broad refactoring.

If more than three production files, a new architectural component, or a semantic change is required:

```text
ARCHITECTURE_CONFLICT
-> SA_EXECUTION_STOPPED_NON_DELEGABLE
```

### 4.4 Required backend validation

After correction, prove all of the following against a freshly built `dist`:

- Nest build passes;
- built `AppModule` initializes;
- `NotificationsModule` resolves every import;
- `BrandCentreModule` initializes;
- `BrandIntelligenceModule` initializes;
- `BrandPayoutsModule` initializes;
- the full application reaches listening/ready state;
- shutdown is clean;
- no provider call occurs;
- no financial mutation occurs merely from startup.

Run:

- targeted module/import regression tests;
- built application startup smoke;
- all Brand Payouts P0/P1 focused tests;
- P1 PostgreSQL/security tests;
- affected notification tests;
- affected Brand Centre and Brand Intelligence tests;
- full backend suite;
- build;
- changed-file lint/format where applicable;
- diff check;
- Prisma schema and migration diff.

Expected:

```text
SCHEMA_CHANGE
= NONE

MIGRATION
= NONE

PROVIDER_ACTION
= NONE
```

Commit and push one bounded descendant without rewriting P1.

Record:

```text
P2_BACKEND_RUNTIME_RECOVERY_SHA
P2_BACKEND_RUNTIME_RECOVERY_TREE
```

Classify the ledger entry as:

```text
BASELINE_RUNTIME_BOOT_CORRECTION
```

This correction is a separately authorized recovery exception. It does not reopen P1 and does not reset the original implementation correction budget.

---

## 5. Blocker B — local runtime/browser evidence

The cloud browser is policy-blocked from opening the local preview. Parent therefore authorizes:

```text
P2_LOCAL_DESKTOP_RUNTIME_BROWSER_ACCEPTANCE
= AUTHORIZED
```

This is a non-provider validation lane only.

It does not authorize:

- Razorpay access;
- provider credentials;
- provider API or CLI action;
- Test or Live financial transactions;
- schema migration creation or application beyond already accepted repository migrations needed to boot a disposable database;
- production deployment;
- merge to canonical branches;
- P3 source work before P2 acceptance.

### 5.1 Git-hosted runner prompt rule

If a separate local desktop Codex runner is required, the Systems Architect must create the complete runner assignment as a committed Markdown file in Git.

Use the execution-ledger branch and a durable path such as:

```text
docs/ai-collaboration/
brand-payouts-v1-p2-local-runtime-browser-runner-v1.md
```

The Systems Architect must return only the exact commit permalink for manual relay. Do not paste a long runner prompt into chat.

The runner prompt must pin:

Backend:

```text
corrected descendant of
60385abbd12d5a363615100c463ac6755ce848ea
```

Frontend:

```text
b69c37bc9c1b1aec0976ab503acbb7274153480d
```

The frontend SHA remains unchanged unless live evidence proves a source defect.

When the local runner returns evidence, the Systems Architect—not Parent—must review it, decide `ACCEPT`, `CORRECT`, or `STOP`, update the ledger, and continue.

---

## 6. Required local runtime topology

The local runner must:

1. fetch the exact backend and frontend branches;
2. verify the expected remote heads and ancestry;
3. verify clean worktrees before execution;
4. record Node, npm, package-manager, database, browser, and operating-system versions;
5. provision a disposable PostgreSQL database;
6. apply the currently accepted migrations from zero/current accepted base as appropriate;
7. seed deterministic test-safe fixtures;
8. build and start the corrected backend from fresh output;
9. build and start the exact P2 frontend candidate;
10. point the frontend only to the local backend;
11. authenticate through a repository-supported test/runtime flow;
12. preserve redacted request/response, console, screenshot, DOM, and accessibility evidence; and
13. shut down cleanly and remove or clearly identify disposable resources.

Required fixtures:

- Brand Owner;
- Finance Admin;
- Campaign Manager;
- inactive membership actor;
- no-active-membership actor;
- unrelated Brand actor;
- direct Creator actor;
- Admin actor without Brand financial membership;
- genuine empty/new Brand;
- authoritative financial records;
- legacy-limited/unreconciled records;
- partial/unavailable source conditions where the accepted test harness supports them.

No production or shared database may be used.

---

## 7. Required HTTP/RBAC/runtime proof

Use the built full application, not only a bounded test module.

Prove:

- the full backend serves the Brand Payouts routes;
- V2 media-type negotiation succeeds;
- incompatible/default representation behavior remains correct;
- Owner receives the full Product-safe projection;
- Finance Admin receives the full Product-safe projection;
- Campaign Manager receives zero financial rows under the current fail-closed scope;
- inactive/no-membership actors fail closed;
- Creator/Admin actors fail closed for Brand financial content;
- cross-Brand list, detail, cursor, and existence probes fail closed;
- runtime schema validation passes;
- summary buckets remain separate and source-authoritative;
- activity distinguishes money movement from lifecycle information;
- legacy history is not fabricated;
- pagination exposes `as_of`, continuation, page completeness, and source completeness;
- sensitive fields are absent;
- reads are side-effect-free;
- reads do not provision a vault or provider account;
- Settings remains the sole temporary Add funds / Brand Return mutation surface;
- no provider invocation occurs.

Re-run or preserve the existing PostgreSQL HTTP/RBAC matrix and add the full-AppModule route proof that was previously blocked.

---

## 8. Required browser proof

Use a real browser at exactly:

```text
390px
767px
768px
1440px desktop
```

Capture screenshots and evidence for materially distinct states and actor projections.

At minimum validate:

- route entry;
- authenticated Owner;
- Finance Admin;
- Campaign Manager;
- unauthorized actor;
- unrelated Brand reference;
- initial/loading;
- independently loading sections;
- partial source coverage;
- stale last-known data;
- refreshing;
- empty/new Brand;
- ready state;
- unavailable dependency;
- legacy-unreconciled state;
- obligation detail;
- activity detail;
- pagination/load-more;
- Settings Add funds deep link;
- Settings Brand Return deep link;
- browser Back restoration;
- refresh restoration;
- direct unauthorized detail navigation.

Validate all of the following:

- no document-level horizontal overflow;
- below 768px, suitable tables transform into labelled cards/rows/sheets;
- 767px and 768px behave at the intended breakpoint;
- fixed bottom navigation and safe-area clearance do not obscure content;
- keyboard-only operation succeeds;
- visible focus is retained;
- controls have correct labels and accessible names;
- drawer/sheet focus entry, containment where appropriate, Escape/close, and focus return work;
- protected data does not render before authorization resolves;
- the browser performs no money or due-date calculation;
- no fixed 30/70 or TDS claim appears;
- no synthetic invoice, tax document, provider receipt, or statutory statement appears;
- no release, reversal, mark-paid, or retry-with-new-economics control appears;
- no provider ID, bank/KYC/tax value, credential, or raw diagnostic appears in the DOM;
- no unexpected console error attributable to Payouts appears;
- no unexpected Payouts HTTP 4xx/5xx appears for authorized flows;
- unauthorized 4xx responses remain fail-closed and do not leak existence.

Evidence must identify:

- exact SHA pair;
- viewport dimensions;
- actor/fixture;
- state under test;
- screenshot path/reference;
- relevant network request/response reference;
- console result;
- overflow result;
- accessibility/focus result.

---

## 9. Recovery defect handling

### 9.1 Environment-only issue

The Systems Architect may correct local configuration, ports, disposable database setup, fixture setup, and test harness invocation without source changes, then rerun the evidence lane.

### 9.2 Genuine P2 source defect

If runtime/browser evidence exposes a distinct genuine P2 source defect, the Systems Architect may authorize and supervise one bounded recovery correction without returning to Parent, provided all of the following are true:

- the defect is inside the already accepted P2 Product/architecture scope;
- no Product decision changes;
- no financial/security authority changes;
- no schema or migration changes;
- no provider action or assumption is introduced;
- the correction changes no more than three backend production files or five frontend production files;
- the correction has a targeted regression test;
- all affected focused/full gates are rerun;
- the exact defect, correction, file scope, and evidence are recorded in the ledger.

This is a single P2 recovery exception, separate from the baseline boot correction.

A repeated identical failure, a second genuine P2 source defect requiring another correction loop, or a semantic/architectural change is:

```text
SA_EXECUTION_STOPPED_NON_DELEGABLE
```

Do not conceal repeated failure through additional unreviewed edits.

---

## 10. P2 Systems Architect checkpoint

After the boot correction and browser/runtime lane, the Systems Architect must conduct the complete P2 checkpoint itself.

Review against every mandatory first-slice condition in the accepted finite execution plan, including:

- exact pushed SHAs;
- built backend and frontend;
- migrated disposable PostgreSQL;
- real application authorization fixtures;
- role projection;
- cross-Brand isolation;
- server redaction;
- legacy-safe truth;
- pagination and source completeness;
- one temporary mutation surface;
- responsive behavior at all four widths;
- keyboard/focus/accessibility;
- read-side purity;
- singular financial authorities;
- empty/new Brand behavior;
- structured source coverage;
- provider disabled/fail-closed behavior.

If every mandatory condition passes, the Systems Architect is authorized to set:

```text
BP-P2-FIRST-VERTICAL-SLICE
= ACCEPTED

P2_REVIEW_OWNER
= SYSTEMS_ARCHITECT

P2_PARENT_REVIEW
= DELEGATED_BY_THIS_AUTHORITY
```

Commit and push the ledger update.

The P2 checkpoint must record at least:

1. accepted P1 backend SHA;
2. P2 candidate frontend SHA;
3. exact startup root cause;
4. whether it pre-existed Payouts;
5. files changed for the boot correction;
6. corrected backend commit/tree;
7. startup regression result;
8. full backend/P1 regression result;
9. schema/migration confirmation;
10. local environment versions;
11. disposable PostgreSQL and migration result;
12. authenticated HTTP/RBAC result;
13. 390px result/evidence;
14. 767px result/evidence;
15. 768px result/evidence;
16. desktop result/evidence;
17. horizontal-overflow result;
18. keyboard/focus/accessibility result;
19. console/network result;
20. frozen P2 state-family result;
21. Settings single-mutation-surface confirmation;
22. provider-action confirmation;
23. final backend SHA;
24. final frontend SHA;
25. final ledger SHA;
26. recovery exceptions consumed;
27. remaining defects or blockers;
28. Systems Architect checkpoint disposition.

Successful P2 terminal state:

```text
BP-P1-BACKEND-READ
= ACCEPTED

BP-P2-FIRST-VERTICAL-SLICE
= ACCEPTED

MIGRATIONS
= NONE

PROVIDER_ACTIONS
= NONE
```

Then continue automatically.

---

## 11. Autonomous continuation after P2

Upon P2 self-acceptance, do not return for Parent approval.

Immediately revalidate gates and start the next eligible phase.

### 11.1 P3A

P3A is eligible after accepted P2 unless a current repository or dependency check proves otherwise.

The Systems Architect may orchestrate, review, self-checkpoint, accept, and continue through:

```text
BP-P3A-OPERATIONS-CUTOVER
```

within the already accepted Product/architecture boundaries.

### 11.2 P3S

P3S remains independently gated by:

- the exact accepted M2 migration proposal;
- Security-approved restricted access/retention policy `BP-G21`; and
- the accepted latest-head sequencing rule.

If those gates are not satisfied, park P3S without blocking P3A or other eligible work.

Do not apply M2 autonomously.

### 11.3 P4 and later

Continue autonomously through each technically eligible provider-neutral checkpoint, with the Systems Architect as reviewer/acceptor.

Where a lane is blocked by an upstream dependency, record the blocker and continue any non-serializing eligible lane.

Do not manufacture missing C-03, C-04, Campaign, C-05, Security, migration, or provider authority.

P4 remains gated by the accepted canonical dependencies and human migration acceptance defined in architecture. P5 remains gated by accepted P4/C-05/RZ-G0 provider-neutral inputs. P6 provider actions remain separately gated. P7 provider-disabled validation may be self-checkpointed when its prerequisites are met.

The Systems Architect must not create artificial Parent stops at the end of passing technical checkpoints.

---

## 12. Non-delegable gates and stops

The delegation in this file does not allow the Systems Architect to self-authorize the following:

1. a new or changed Product decision;
2. a material architecture change;
3. application of M1 or M2 without the exact required human migration acceptance;
4. any destructive migration;
5. any provider credential inspection not already authorized;
6. any Razorpay or other provider mutation;
7. any controlled Test transaction without a separate exact action envelope;
8. any Live provider action;
9. production enablement or deployment;
10. merge to canonical `development`/`main` branches where owner acceptance is separately required;
11. waiver of a financial, cross-Brand, privacy, or security invariant;
12. invention of missing upstream authority or financial truth.

Return to the user only when one of these non-delegable cases requires a concrete decision or action, or when a circuit breaker is reached.

A non-delegable stop report must be compact and exact:

```text
SA_EXECUTION_STOPPED_NON_DELEGABLE

LAST_ACCEPTED_CHECKPOINT =
LAST_ACCEPTED_BACKEND_SHA =
LAST_ACCEPTED_FRONTEND_SHA =
LAST_LEDGER_SHA =

BLOCKER =
WHY_NON_DELEGABLE =
EXACT_DECISION_OR_AUTHORITY_REQUIRED =
SAFE_NON_SERIALIZING_WORK_COMPLETED =
PROVIDER_ACTIONS =
MIGRATIONS =
```

Do not return a general progress report in place of continuing eligible work.

---

## 13. Durable prompt/evidence rule

From this point forward, any long specialist assignment, local runner prompt, recovery prompt, or checkpoint evidence index must be committed to Git and shared by exact commit permalink.

Do not rely on long chat-pasted prompts that can truncate.

Every such artifact must identify:

- authority SHA;
- predecessor checkpoint;
- exact repository/branch/SHA inputs;
- allowed and forbidden scope;
- validation gates;
- commit/push requirements;
- ledger update requirements;
- terminal statuses.

---

## 14. Immediate operating instruction to the Systems Architect

Read this file completely.

Verify the current remote state and accepted SHAs.

Do not return with only a plan or restatement.

Execute P2 gate recovery, create the Git-hosted local runner prompt if required, review returned evidence, conduct the P2 checkpoint yourself, commit/push the accepted ledger state, and continue to the next eligible phase.

Pause only for:

- an unavoidable manual local-runner relay;
- a non-delegable gate;
- a circuit breaker; or
- completion of all currently eligible provider-neutral work.

At an unavoidable local-runner relay, return exactly:

```text
LOCAL_DESKTOP_RELAY_REQUIRED

RUNNER_PROMPT_PERMALINK =
EXPECTED_BACKEND_SHA =
EXPECTED_FRONTEND_SHA =
RETURN_EVIDENCE_PATH_OR_ARTIFACT =
```

This relay is not a Parent checkpoint. Resume automatically when evidence is supplied.

At final provider-disabled handoff readiness, return:

```text
BRAND_PAYOUTS_PROVIDER_DISABLED_HANDOFF_READY
```

with exact backend, frontend, authority/ledger, migration, provider, test, runtime, and deferred-gate references.

STOP only where this file or the accepted architecture requires it.
