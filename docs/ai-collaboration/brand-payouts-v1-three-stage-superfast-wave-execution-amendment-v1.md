# Brand Payouts — Three-Stage Superfast Wave Execution Amendment V1

`BRAND_PAYOUTS_THREE_STAGE_SUPERFAST_WAVE_EXECUTION_AMENDMENT_V1`

## 0. Status and effect

```text
STATUS = AUTHORIZED
EFFECTIVE_FROM = POST_P3A / WAVE_B
PRODUCT_LOGIC_CHANGE = NONE
ARCHITECTURE_CHANGE = NONE
P3A_REOPENED = NO
MIGRATION_AUTHORITY_CHANGE = NONE
PROVIDER_AUTHORITY_CHANGE = NONE
PRODUCTION_AUTHORITY_CHANGE = NONE
```

This is a Parent execution-operating amendment for the active Brand Payouts Systems Architect.

It supplements the accepted Product Authority, Phase C architecture/finite plan, MVP delivery cutline, recovery operating rules and discipline-batched topology. It changes only how the remaining provider-disabled MVP work is planned, preflighted, delegated and executed.

Current accepted starting point:

```text
BP-P3A-OPERATIONS-CUTOVER = ACCEPTED
BACKEND_SHA = 12d235345e2748f676d36d61c62ed4bd9c049592
FRONTEND_SHA = 7c75a4c8f5a0df3a1fb82d2f707b1c6b03d56d2a
LEDGER_SHA = 0f606acafa6d685b477e045114f1af9e0a951f68
P4 = NOT_STARTED_DEPENDENCY_GATED
```

Do not reopen P3A. This authority is prospective and is designed not to interrupt the SA while it is waiting for Wave B dependencies.

---

## 1. Principal operating rule

For every major remaining wave, the Systems Architect owns three distinct responsibilities:

```text
A. DEEP PLANNING
B. EXECUTION-READINESS PREFLIGHT
C. SUPERFAST EXECUTION
```

These are SA-managed subphases of one wave. They are **not Parent approval points** and are not separate user-visible mini-projects.

The default flow is:

```text
DEEP PLANNING
→ READINESS PREFLIGHT
→ SUPERFAST EXECUTION
→ WAVE ACCEPTANCE
→ NEXT ELIGIBLE WAVE
```

The SA must not return to Parent merely because it completed A, B, an internal checkpoint, or an ordinary correction.

---

## 2. Responsibility A — Deep Planning

Before implementation begins for a wave, the SA must establish the complete decision and execution map for that wave.

Deep Planning must answer, at minimum:

```text
WHAT exact Product/architecture meaning is already frozen?
WHAT exact dependencies must exist before source work?
WHAT exact SHAs/artifacts satisfy those dependencies?
WHAT is reused versus reconciled versus genuinely new?
WHAT schema/migration work is expected?
WHAT financial/security invariants are affected?
WHAT runtime/browser states must be demonstrable?
WHAT deterministic test boundaries/fakes are required?
WHAT environment capabilities will be needed?
WHAT can execute in cloud/Work and what, if anything, requires local Codex?
WHAT evidence can be reused by immutable SHA/hash?
WHAT is the complete acceptance matrix for the wave?
WHAT is explicitly deferred from the MVP path?
```

Deep Planning is primarily an SA reasoning/repository-review responsibility.

### Codex use during Deep Planning

Do not call Codex merely to restate authority, inspect a handful of files, debate architecture, or create a status report.

Codex may be used once during Deep Planning only when a large-scale repository diff, migration-collision inventory, donor-vs-base comparison, or other computation-heavy inspection materially improves accuracy.

Where Codex is used, it must return one consolidated planning evidence package rather than incremental findings.

### Deep Planning output

Persist a compact durable wave plan or ledger section. It should contain decisions and execution facts, not a long narrative.

The SA does not return this plan to Parent unless it exposes a genuine non-delegable decision.

---

## 3. Responsibility B — Execution-Readiness Preflight

Implementation must not begin until the SA has proved that the planned wave can actually be executed and accepted with the available environment.

The goal is to eliminate late discovery of harness, browser, database, state-reachability, port, migration or test-boundary failures.

For each wave, preflight must prove all capabilities that the wave will later require.

### 3.1 Universal preflight

Verify:

- exact authority, branch, SHA/tree and ancestry;
- clean worktrees / isolated worktrees;
- dependency gate identities and exact observed SHAs;
- package-manager/toolchain availability;
- deterministic build path;
- baseline focused tests relevant to the wave;
- no unexpected migration drift;
- evidence output path and Git push/fetch-back capability;
- cleanup capability.

### 3.2 Backend/financial wave preflight

Before Wave B source implementation, additionally prove as applicable:

- canonical C-04 backend handoff and convergence base are actually present;
- Campaign exact NET-term persistence contract is accepted and present;
- C-05 readiness/destination-version seam required for P5A is available or exactly gated;
- Prisma generate/validate works on the intended convergence tree;
- current migration-history collision inventory is known;
- disposable PostgreSQL can be created, migrated, reset and removed;
- UTC/database settings are correct;
- row-lock/concurrency/idempotency test harness works;
- Owner, Finance, Campaign Manager and cross-Brand fixtures can be created;
- first-reserve success, shortfall, replay and denial states are reachable;
- due/not-due, readiness blocked/ready and provider-disabled states are reachable;
- deterministic provider-neutral fake/boundary is available without provider network action;
- full built AppModule can start and shut down.

### 3.3 Frontend wave preflight

Before Wave C browser acceptance, prove as applicable:

- backend contracts are frozen at exact accepted SHAs;
- built frontend preview can reach the intended backend;
- browser/Playwright or equivalent automation is available;
- exact viewport control is available;
- screenshot, DOM, console and network capture work;
- Axe/accessibility and keyboard/focus tooling work;
- every required state family can be reached with deterministic fixtures;
- detail identity, route identity, pagination/history restoration and command-capability fixtures are known;
- provider-disabled production behavior and any accepted test-only state boundary are both reachable where required.

### 3.4 Preflight classification

Every required capability is classified:

```text
READY
READY_WITH_KNOWN_BOUNDARY
NOT_READY_BLOCKING
NOT_REQUIRED_FOR_THIS_WAVE
```

`READY_WITH_KNOWN_BOUNDARY` is permitted only when the known boundary still allows every currently required acceptance state to be reached.

If a required acceptance state is unreachable:

```text
UNREACHABLE_REQUIRED_ACCEPTANCE_STATE
= NOT_READY_BLOCKING
```

Do not begin implementation or broad browser acceptance until the blocker is removed or the accepted scope legitimately changes.

### Codex use during Preflight

Prefer **one consolidated readiness Codex runner per major wave** when local runtime/computation is materially useful.

The readiness runner should be authorized to inspect all planned prerequisites for that wave in one pass and to correct ordinary Class A environment/harness issues inside its bounded scope, then rerun readiness.

Do not issue a new Codex prompt for each missing package, port, browser revision, fixture, local-preview issue or harmless harness defect.

A readiness runner returns once with:

```text
WAVE_READINESS = PASS | BLOCKED_CLASS_C
CAPABILITY_MATRIX
DEPENDENCY_MATRIX
BASELINE_RESULTS
STATE_REACHABILITY
ENVIRONMENT_ROUTING
REMAINING_NON_DELEGABLE_GATES
```

If readiness passes, the SA continues directly to execution. No Parent approval is required merely because preflight passed.

---

## 4. Responsibility C — Superfast Execution

After Deep Planning and Readiness both pass, execute the coherent wave with minimal orchestration interruption.

A normal implementation runner is expected to perform:

```text
inspect exact accepted inputs
→ implement complete bounded wave delta
→ run focused tests
→ detect all ordinary in-scope defects
→ correct Class A/B defects in the same run
→ add targeted regressions
→ continue implementation
→ create internal checkpoint commits
→ run end-of-wave broad gate once
→ push/fetch-back
→ update evidence/ledger
→ return one consolidated result
```

Internal checkpoint names remain for traceability and rollback, but they are not separate execution profiles.

### 4.1 Wave B — backend normal path

One coherent backend discipline wave contains:

```text
BACKEND-1 = BP-P4-BASE-CONVERGENCE
BACKEND-2 = BP-P4A-FIRST-RESERVE
BACKEND-3 = BP-P4B-INSTRUCTION-INTAKE + P5A backend normal path
```

Focused gates run at internal commits.

The first reserve immediately receives targeted PostgreSQL proof for:

- concurrency;
- idempotency;
- Owner/Finance authorization;
- Campaign Manager denial;
- cross-Brand isolation;
- exactly one canonical reserve/allocation/ledger effect.

The full backend suite/build and one migrated PostgreSQL normal-path acceptance run once after the backend wave stabilizes.

### 4.2 M1 human gate

The one planned Parent stop inside Wave B is the exact financial migration approval:

```text
accepted Campaign contract
+ accepted C-04 runtime handoff
+ BP-P4-BASE-CONVERGENCE
→ regenerate exact M1 Prisma/SQL/FK/index/rollback proposal
→ PARENT M1 APPROVAL
→ continue the same backend wave
```

Do not ask Parent to approve the planning, preflight, convergence strategy, P4A checkpoint or P4B checkpoint separately unless a genuine Class C issue exists.

### 4.3 Wave C — frontend normal path

Implement all remaining provider-disabled P4/P5 frontend states against the stable backend contracts in one frontend wave.

Before the expensive browser matrix, run one complete integration/interaction sweep covering, where applicable:

- list/detail identifiers;
- public references versus API IDs;
- pagination/load-more/history restoration;
- Back/refresh;
- stale/partial restoration;
- exactly-one command surface;
- command pending/error focus;
- duplicate submit prevention;
- focus trap/return;
- contrast/accessibility interactive variants;
- 767/768 breakpoint behavior;
- representative overflow;
- role/cross-Brand detail behavior;
- runtime schema/API compatibility;
- acceptance-state reachability.

Resolve the bounded Class A/B defect set in the same runner before broad browser acceptance.

Then run the full frontend suite/build once and one complete responsive/accessibility/browser matrix after source stabilizes.

### 4.4 Wave D — P7 joint acceptance

Run one final broad provider-disabled production-shaped acceptance and establish:

```text
BP-P7-NORMAL-PATH-ACCEPTANCE
BRAND_PAYOUTS_PROVIDER_DISABLED_HANDOFF_READY
```

This does not imply Razorpay Test acceptance, real-money production readiness, provider-enabled acceptance, production deployment or canonical merge approval.

---

## 5. Defect handling inside a wave

Classify by consequence, not by the fact that Payouts is a financial module.

### Class A — ordinary implementation / harness / environment defect

Examples: CSS, focus, route identifier, pagination restoration, local preview, fixture, browser configuration, deterministic test-harness reachability.

```text
FIX IN SAME RUNNER
→ TARGETED REGRESSION
→ FOCUSED RERUN
→ CONTINUE
```

No Parent return. No new runner unless the current runner genuinely cannot perform the correction.

### Class B — bounded integration correction inside frozen architecture

Examples: backend/frontend representation mismatch, narrow shared-service adapter, bounded repository test boundary.

SA adjudicates, runner corrects, affected gates rerun, execution continues.

### Class C — non-delegable

Return only for:

- new/changed Product meaning;
- material architecture ownership change;
- exact migration approval or destructive migration;
- financial/RBAC/cross-Brand security authority change;
- unresolved upstream contract contradiction;
- provider credential/mutation requirement;
- controlled provider Test action;
- production enablement/deployment;
- canonical merge authorization;
- qualified legal/tax gate;
- genuine inability to execute the frozen scope after readiness preflight.

---

## 6. When Codex should be called

The objective is **minimum useful runner count**, not zero runner use.

### Call Codex when

- large-scale repository modification is required;
- migration/schema implementation or collision analysis is required;
- disposable PostgreSQL/concurrency/runtime proof is required;
- long/full test/build execution is required;
- local browser/Playwright/accessibility/runtime evidence is required;
- broad mechanical reconciliation materially benefits from an agentic implementation environment;
- the cloud/SA environment lacks a capability already routed to local Codex.

### Do not call Codex when

- SA can inspect the needed repository context directly;
- the task is Product/architecture reasoning;
- it is merely a status update or checkpoint narration;
- one tiny already-understood defect can be resolved inside the current active runner;
- the purpose is only to restate evidence already accepted by immutable SHA/hash;
- another coherent runner is already active and authorized to perform the work.

### Default runner count

For the remaining provider-disabled normal path, target:

```text
Wave B planning:        0–1 computation-only call if needed
Wave B readiness:       1 consolidated readiness runner
Wave B implementation:  1 coherent backend runner, interrupted only for exact M1 approval
Wave C planning:        normally SA-only
Wave C readiness:       1 consolidated readiness/browser-capability runner if not already proven
Wave C implementation:  1 coherent frontend runner
Wave D acceptance:      1 independent final acceptance runner only if local runtime is required
```

Do not create prompt-per-defect execution.

---

## 7. Parent communication policy

Parent should not be used as the technical orchestration loop.

Do not return for:

- completion of Deep Planning;
- readiness PASS;
- internal checkpoint acceptance;
- routine implementation defects;
- Class A/B correction decisions;
- routine test/build completion;
- movement from P4A to P4B or backend to frontend when the accepted wave profile already authorizes it.

Return only for:

1. exact M1 financial migration approval;
2. a genuine Class C decision;
3. unavoidable manual relay when Parent/User must physically pass a local Codex prompt;
4. final provider-disabled handoff readiness.

If a manual relay is required, return only the Git permalink and exact expected input/output SHAs. It is transport, not a checkpoint approval.

---

## 8. AI model / effort routing

Model routing occurs only at a clean task, runner or specialist boundary. Never design a coherent wave around changing models mid-run.

### Systems Architect — Deep Planning

```text
MODEL = GPT-5.6 Sol
EFFORT = HIGH
```

Use for dependency interpretation, convergence strategy, migration planning, financial ownership, risk classification and acceptance design.

### Systems Architect / Work — Readiness Preflight

```text
MODEL = GPT-5.6 Sol
EFFORT = MEDIUM
```

Use for environment/capability audit, source-state reconciliation, test-harness planning, state-reachability review and consolidated readiness adjudication.

Escalate a *new task* to `GPT-5.6 Sol / HIGH` only if readiness exposes a genuine financial, migration, security or cross-contract ambiguity.

### Ordinary implementation wave

```text
MODEL = GPT-5.6 Sol
EFFORT = MEDIUM
```

Use for routine backend/frontend implementation and Class A/B corrections after contracts are frozen.

For the backend Wave B convergence/M1/first-reserve portion, prefer:

```text
MODEL = GPT-5.6 Sol
EFFORT = HIGH
```

because money lineage, migration shape, concurrency and cross-contract convergence are the dominant risks. If one coherent backend cloud task must keep a single model for the whole wave, keep `Sol / HIGH` rather than splitting the wave only to save model effort.

### Final financial/security acceptance

```text
MODEL = GPT-5.6 Sol
EFFORT = HIGH
```

Use for P7 acceptance, financial/security invariant review and final handoff adjudication.

### Codex runner model

Use the strongest balanced implementation/runtime Codex model available for the runner. Do not require a model switch inside a running Codex task. Escalate only at the next clean runner boundary when a concrete financial/security/migration problem justifies it.

Do not use maximum/extra-high reasoning merely for CSS, evidence packaging, command execution, browser screenshots, mechanical tests or ledger updates.

---

## 9. Evidence and validation efficiency

Use the lowest-cost proof sufficient for the current subphase.

```text
During implementation
= targeted regression + affected tests

At internal checkpoint
= focused semantic/security gate

At backend wave end
= one full backend suite/build + migrated PG normal-path acceptance

At frontend source stabilization
= one full frontend suite/build + one browser matrix

At final handoff
= one joint P7 production-shaped provider-disabled acceptance
```

Reuse immutable prior evidence when the covered source/environment inputs are unchanged and the current change cannot affect that invariant.

Evidence exists to prove correctness, not to become a parallel product.

---

## 10. Immediate operating instruction

The active SA is currently parked after accepted P3A because Wave B dependencies are open.

Do not restart or reopen the accepted work.

While waiting, the SA may complete Deep Planning for Wave B and keep an exact dependency matrix current, but must not implement P4/P5 source before the required runtime authorities exist.

When the required Campaign/C-04 dependencies become available:

1. revalidate exact gate/artifact/required-SHA/observed-SHA status;
2. complete one consolidated Wave B readiness preflight;
3. if readiness passes, begin the coherent backend wave;
4. return to Parent only for the exact M1 migration approval or another Class C boundary;
5. after M1 approval, continue the same backend wave without further routine Parent checkpoints;
6. proceed to the frontend wave and P7 as the accepted profile allows.

The operating target is:

```text
DEEP PLANNING
→ ONE COMPLETE PREFLIGHT
→ SUPERFAST EXECUTION
```

with strong financial safety and minimal Codex/Parent round trips.