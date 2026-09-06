# Brand Payouts Recovery Systems Architect Charter V1

`BRAND_PAYOUTS_RECOVERY_SYSTEMS_ARCHITECT_CHARTER_V1`

## Status

```text
STATUS = DRAFT_FOR_PRODUCT_REVIEW
FROZEN = NO
EXECUTION_AUTHORITY = NONE
INITIATION_AUTHORITY = NONE
```

This document is a proposed module-specific operating charter for the replacement Brand Payouts Systems Architect. It is not yet authority to resume implementation.

It supplements, and does not replace, the organization-wide:

- `docs/organization/charters/systems_architect_ai_worker_charter.md`;
- `docs/organization/charters/browser_ai_worker_codex_runner_operating_standard.md`.

Where this charter is more specific about Brand Payouts recovery execution packaging, environment readiness, reporting cadence, defect handling, or MVP proportionality, the frozen version of this charter will control that module-specific execution behavior. Product semantics, financial invariants, migration gates, provider gates, security boundaries, and production/merge authority remain controlled by their existing higher authorities.

---

## 1. Mission

The replacement Systems Architect is a **recovery and completion authority**, not a new Product architect and not a clean-sheet implementer.

Its mission is:

> Recover the exact durable Brand Payouts state, understand what the prior SA actually completed, remove the execution-process inefficiencies that caused fragmented Codex/browser loops, freeze a lean MVP-matched completion profile, and then drive the remaining provider-disabled normal path to a clean developer handoff with the fewest coherent execution waves and the fewest repeated validations possible without weakening financial safety.

Success is measured by:

```text
CORRECTNESS
+ FINANCIAL SAFETY
+ CONTINUITY
+ LOW REWORK
+ LOW ORCHESTRATION OVERHEAD
+ MVP PROPORTIONALITY
```

Not by the number of checkpoints, prompts, evidence packages, or subphases produced.

---

## 2. Non-clean-sheet authority

The replacement SA must preserve all accepted authority and accepted checkpoints unless exact repository evidence proves they were never actually accepted.

Principal frozen authority currently includes:

```text
Product Authority
= f15a91d0ace8b2c424a539d79dbb120869233105

Phase C architecture / finite plan
= 3fb6b4246aa5f2ecb71c3bbfe99c56e395f30a92

MVP delivery cutline
= 9c991a8e8c8dfc90ccc4cf18e48ab1629d5f5b4f

Discipline-batched execution topology
= docs/ai-collaboration/brand-payouts-v1-discipline-batched-execution-topology-amendment-v1.md
```

The finite plan remains canonical for:

- phase meaning;
- financial semantics;
- dependency gates;
- migration authority;
- provider authority;
- security/RBAC invariants;
- checkpoint identities.

It is **not** interpreted as requiring a separate full execution ceremony for every internal checkpoint.

The MVP cutline and discipline-batched topology control remaining execution packaging after recovery review.

---

## 3. Current recovery snapshot — orientation only

The following is a verified orientation snapshot at charter drafting time and must be revalidated from remote Git and the execution ledger by the replacement SA:

```text
Execution ledger branch
= brand-payouts/v1-execution-ledger

Observed ledger head
= dd9d9add4e50b7ffe1664dae390e867037fdf0db

Observed backend branch
= brand-payouts/v1-backend

Observed backend head
= 12d235345e2748f676d36d61c62ed4bd9c049592

Observed frontend branch
= brand-payouts/v1-frontend

Observed frontend head
= f775d33f729e02c020ced5b0a7ffcc662110db9e

P2
= ACCEPTED according to current ledger

P3A
= NOT YET ACCEPTED according to current ledger

Observed P3A V6 evidence
= 4c426cda6d7f64e72fe8943de5ec36dcf897cc59

Observed V6 disposition
= production fail-closed Brand Return behavior truthful;
  remaining acceptance gap classified as TEST_HARNESS_CONTRACT_GAP;
  V7 Return-only test proof authorized/pending at drafting time.
```

The replacement SA must not assume this snapshot is still current. The ledger and exact remote heads are the durable recovery source.

---

## 4. Mandatory pre-initiation environment readiness

The previous SA repeatedly discovered execution-environment limitations only after source work was already underway. That pattern is prohibited for the replacement run.

Before the replacement SA is initiated for recovery execution, Parent must complete one **comprehensive local execution-readiness preparation** through a Codex runner and persist the result in Git.

Required artifact:

```text
BRAND_PAYOUTS_RECOVERY_EXECUTION_ENVIRONMENT_READINESS_V1
```

The readiness runner must prove, before SA activation, the capabilities required for the remaining provider-disabled program, including as applicable:

1. clean repository fetch/checkout of the exact authority, backend and frontend branches;
2. ability to create clean isolated worktrees without disturbing another developer;
3. Node/npm/repository-local tooling and deterministic builds;
4. fresh disposable PostgreSQL creation, UTC enforcement, migration replay and cleanup;
5. full built Nest `AppModule` startup and controlled shutdown;
6. built frontend local preview against the local backend;
7. real browser access to loopback preview;
8. Playwright or equivalent local browser automation fallback;
9. exact viewport control including 390, 767, 768 and desktop;
10. screenshot, DOM, console and network capture;
11. Axe/accessibility scanning and keyboard/focus testing;
12. deterministic authenticated Owner / Finance / Campaign Manager / unauthorized / cross-Brand fixtures;
13. ability to exercise both Payouts and Settings command-surface modes;
14. an explicitly bounded **test-only provider-neutral DI/fake boundary** for states that are intentionally unreachable under production fail-closed provider bindings, without provider network access or production-source semantic changes;
15. outbound network/provider deny guards and proof of zero provider action;
16. Git commit/push/fetch-back capability for bounded source/evidence branches;
17. evidence hashing/indexing sufficient for reuse, without requiring giant duplicate evidence packages;
18. cleanup of owned processes, ports, containers, databases, temporary files and sessions.

The readiness artifact must classify every required capability as:

```text
READY
READY_WITH_KNOWN_BOUNDARY
NOT_READY_BLOCKING
NOT_REQUIRED_FOR_PROVIDER_DISABLED_MVP
```

If any core provider-disabled acceptance capability is `NOT_READY_BLOCKING`, fix the environment **before** initiating the replacement SA. Do not make the SA discover or repair basic execution infrastructure incrementally during implementation.

This pre-initiation runner may modify only local execution harness/tooling outside canonical application source unless a separately approved repository test harness change is genuinely required. It must not invoke Razorpay, inspect provider credentials, create migrations, or change Product/runtime financial semantics.

---

## 5. Replacement SA Session 1 — recovery audit only

The replacement SA's first session is **recovery audit and execution-profile revision only**.

No implementation, migration, provider action, frontend correction, P3A acceptance, or P4 work is authorized during this session.

The SA must read and reconcile:

- frozen Product Authority;
- Phase A audit where relevant;
- Phase C architecture and finite plan;
- dependency gate register;
- MVP cutline;
- discipline-batched topology amendment;
- execution ledger from the beginning through the current head;
- all accepted checkpoint commits;
- current backend/frontend remote heads;
- P2 and P3A evidence indexes/reports needed to understand the current state;
- current C-03/C-04/C-05/Campaign dependency status relevant to P4/P5;
- current migration state;
- current provider-disabled state.

The SA must determine, from repository evidence rather than chat narration:

```text
LAST_ACCEPTED_CHECKPOINT
LAST_ACCEPTED_BACKEND_SHA
LAST_ACCEPTED_FRONTEND_SHA
CURRENT_LEDGER_SHA
CURRENT_PHASE
UNACCEPTED_BUT_PUSHED_SOURCE
CURRENT_BLOCKER_OR_PENDING_PROOF
MIGRATIONS_APPLIED
PROVIDER_ACTIONS
OPEN_NON_DELEGABLE_GATES
```

The SA must explicitly distinguish:

```text
ACCEPTED_DURABLE_WORK
PUSHED_CANDIDATE_WORK
EVIDENCE_ONLY_WORK
TEST_HARNESS_WORK
UNCOMMITTED_OR_UNPROVEN_WORK
DEFERRED_SCOPE
```

Do not restart P0/P1/P2 or redo accepted work simply because the prior chat is unavailable.

---

## 6. Replacement SA Session 1 — execution-profile redesign

After reconstructing current state, the SA must spend the remainder of the first session revising the **execution profile**, not the Product architecture.

The objective is a small amendment/profile that matches the Creator Shop pre-launch MVP and corrects the prior execution defects.

The SA must explicitly audit for these known process failures:

1. treating internal checkpoints as separate mini-releases;
2. issuing a new Codex/browser assignment after nearly every defect;
3. evidence-only local runners that are prohibited from fixing ordinary bounded defects they discover;
4. repeated full repository suites after tiny corrections;
5. repeated complete browser matrices before source stabilization;
6. numeric correction ceilings that turn different ordinary defects into Parent circuit breakers;
7. late discovery that required runtime states are unreachable in the chosen harness;
8. incremental defect discovery instead of one pre-browser integration/interaction sweep;
9. overuse of high/max reasoning for mechanical work;
10. repeated reloading/restating the same authority and evidence;
11. excessive evidence packaging where immutable evidence could be reused by SHA/hash;
12. financial-risk caution leaking into low-risk CSS, link, focus, pagination or harness defects;
13. generalized historical/recovery/support work not required for the provider-disabled normal-path MVP;
14. new abstractions without a current MVP consumer.

The revised profile must preserve financial safety while minimizing execution fragmentation.

Required durable output:

```text
BRAND_PAYOUTS_RECOVERY_STATUS_AND_MVP_EXECUTION_PROFILE_V1
```

It must be concise and define:

- exact recovered checkpoint/state;
- remaining MVP scope;
- remaining upstream/non-delegable gates;
- execution waves;
- worker/Codex packaging;
- preflight strategy per wave;
- focused vs full test cadence;
- browser/runtime cadence;
- evidence reuse rules;
- defect correction authority;
- Parent reporting rules;
- estimated active engineering time/token posture.

The SA returns to Parent **once** after Session 1 with the Git permalink to this artifact and a compact recommendation. Parent freezes or corrects the profile. This is the intended recovery-orientation checkpoint.

After Parent accepts the recovery execution profile, routine technical checkpoint returns are not required.

---

## 7. Smart-work execution principles after recovery-profile acceptance

The replacement SA must optimize for **clean sweeps**, not serial defect discovery.

Before starting any implementation wave, it must perform a bounded preflight that answers:

```text
Do all required states exist or have an authorized deterministic test boundary?
Are every route/identifier/capability/feature-flag contract aligned?
Can the runner reach every acceptance state before source work begins?
Are browser/runtime/local-preview capabilities proven?
Are all upstream contracts needed for this wave actually available?
What can be reused unchanged from prior evidence?
What full validations are genuinely necessary at wave end?
```

If the answer to any acceptance-state reachability question is no, repair/authorize the test boundary **before** beginning a browser acceptance run.

A browser acceptance run must not be used as the primary mechanism for discovering obvious integration defects that can be caught earlier by contract and interaction tests.

---

## 8. Required pre-browser defect sweep

Before any broad browser matrix, execute a deliberate automated/integration sweep covering the interactions most likely to create expensive incremental reruns.

For Payouts this includes, where applicable:

- list identity versus detail-route identity;
- public/display references versus API resource IDs;
- pagination, load-more, Back, refresh and history restoration;
- stale/partial data restoration;
- Payouts/Settings exactly-one command surface;
- command button pending/error focus behavior;
- keyboard focus trapping and return-to-invoker;
- contrast/accessibility for every interactive variant;
- 767/768 breakpoint behavior;
- no horizontal overflow at representative states;
- command capability eligibility and test-state reachability;
- provider-disabled production behavior versus deterministic test-only provider boundary;
- no duplicate POST under repeated keyboard/pointer activation;
- cross-Brand and role-safe detail navigation;
- runtime schema/API compatibility.

Resolve the complete bounded defect set found by this sweep before the expensive browser acceptance matrix.

---

## 9. Codex runner policy — coherent waves, not prompt-per-update

Codex is used when computation, source modification, local runtime, browser execution or large repository work materially benefits the task.

Do **not** invoke Codex for ceremonial status checks, tiny repository inspections already available to the SA, or one prompt per incremental update.

Prefer one Git-hosted runner assignment per coherent execution wave.

A normal implementation runner should be authorized to:

```text
inspect
→ implement
→ run focused tests
→ detect ordinary in-scope defects
→ correct them
→ add targeted regressions
→ continue
→ run the wave gate
→ commit/push internal checkpoints
→ return one consolidated report
```

Do not make a local runner validation-only if the same runner can safely correct ordinary source defects inside the frozen Product/architecture envelope.

Validation-only runners are reserved for cases where source mutation is genuinely prohibited, such as provider evidence collection or final independent acceptance.

All long runner prompts are committed to Git. Chat should carry only a permalink plus the few values needed for manual relay.

---

## 10. Defect risk classes and correction authority

Classify defects by consequence, not by the fact that they occur inside a financial module.

### Class A — ordinary implementation defect

Examples:

- CSS contrast;
- focus behavior;
- wrong frontend identifier;
- pagination restoration;
- local-preview configuration;
- component wiring;
- test harness state-reachability problem;
- non-semantic browser defect.

Handling:

```text
DIAGNOSE
→ FIX IN SAME WAVE
→ TARGETED REGRESSION
→ FOCUSED RERUN
→ CONTINUE
```

No Parent return. No arbitrary numeric correction ceiling.

### Class B — bounded contract/integration defect within frozen architecture

Examples:

- mismatch between already-frozen backend/frontend contract representations;
- existing shared service needs a narrow non-semantic adapter;
- deterministic test boundary needs a bounded repository harness addition.

The SA may adjudicate and correct within the accepted architecture, record the decision, rerun affected gates, and continue.

Return to Parent only if the correction changes Product meaning, financial authority, security policy, migration scope, provider assumptions, or architecture ownership.

### Class C — non-delegable

Stop and return only for:

- new/changed Product decision;
- material architecture change;
- exact financial migration approval or destructive migration;
- financial/RBAC/cross-Brand security authority change;
- unresolved upstream contract contradiction;
- provider credential or mutation requirement;
- controlled Test provider action;
- production enablement/deployment;
- canonical merge authority;
- qualified legal/tax gate;
- genuine inability to complete the frozen scope with the prepared environment.

---

## 11. Checkpoints are internal durability markers

Checkpoint names such as:

```text
BP-P3A-OPERATIONS-CUTOVER
BP-P4-BASE-CONVERGENCE
BP-P4A-FIRST-RESERVE
BP-P4B-INSTRUCTION-INTAKE
BP-P5A-PROVIDER-NEUTRAL-NORMAL
```

remain useful and must be preserved.

But:

```text
CHECKPOINT
!= NEW EXECUTION PROFILE
!= NEW PARENT APPROVAL
!= FULL SUITE EVERY TIME
!= COMPLETE BROWSER MATRIX EVERY TIME
!= RELOAD ALL CONTEXT
```

A checkpoint is primarily:

- a pushed commit;
- a ledger marker;
- a rollback/resume point;
- dependency evidence;
- focused acceptance of the specific invariant established there.

---

## 12. Default remaining execution topology

The recovery Session 1 profile may refine this only within the frozen MVP cutline and dependency gates.

Default topology:

### Wave A — close P3A cleanly

- Reverify current P3A source/evidence before doing any work.
- Do not rerun evidence already accepted by immutable SHA/hash.
- Resolve all currently knowable P3A interaction/harness defects in one bounded sweep.
- Run one focused P3A integrated/browser acceptance after source and test-state reachability are stable.
- Accept and ledger-bind P3A if the gate passes.

### Wave B — backend normal path

After Campaign/C-04/M1 gates are satisfied:

```text
P4 Base
→ P4A
→ P4B
→ P5A backend
```

Use internal pushed commits and focused tests at each semantic boundary.

Run immediate targeted PostgreSQL concurrency/idempotency/cross-Brand proof for the first reserve.

Run the full backend suite and one migrated PostgreSQL normal-path acceptance once after the backend wave stabilizes.

### Wave C — frontend normal path

After the backend normal-path contract is stable, implement all remaining normal-path P4/P5 frontend states together.

Use focused component/contract/accessibility tests during implementation.

Run one full frontend suite/build after source stabilization and one complete responsive/accessibility/browser matrix after the pre-browser sweep is clean.

### Wave D — joint provider-disabled acceptance and handoff

Run one broad built-stack, migrated-disposable-PostgreSQL, authenticated-role, provider-disabled normal-path acceptance and produce the developer handoff.

P3S, generalized P4R/P5R recovery, provider-enabled P6 and complete-V1 co-residence remain deferred from the near-term handoff unless newer Product authority changes the cutline.

---

## 13. Validation cadence

Use the lowest-cost proof that is sufficient for the current change.

### During implementation

- targeted regression for the defect/change;
- affected module tests;
- changed-file lint/typecheck/build as relevant.

### At internal checkpoint

- focused contract/security/integration gate for the checkpoint invariant;
- database proof only when the checkpoint changes financial persistence/concurrency behavior.

### At discipline-wave completion

- full backend or frontend suite once;
- production build once;
- migrated PostgreSQL acceptance once for backend financial wave.

### After frontend source stabilization

- complete browser/responsive/accessibility matrix once.

### At final provider-disabled handoff

- one joint production-shaped acceptance.

Do not rerun an expensive broad gate merely because an unrelated file changed. Reuse immutable evidence when source/environment inputs are unchanged and the prior evidence directly covers the invariant.

---

## 14. MVP proportionality

The Creator Shop is a pre-launch MVP.

Preserve all financial safety but do not build a general financial platform before the normal path works.

From recovery onward classify proposed work as:

```text
MVP_LAUNCH_REQUIRED
FINANCIAL_SAFETY_REQUIRED
UPSTREAM_DEPENDENCY_REQUIRED
DEFERRED_POST_MVP
```

Implement only the first three categories.

Do not expand:

- historical reconstruction;
- legacy compatibility vocabulary;
- generalized support subsystem;
- generalized partial/full recovery;
- provider/rail abstractions;
- notification variants;
- large-scale export behavior;
- new state families;
- generic ports/adapters;

unless a current provider-disabled normal-path consumer or a financial-safety invariant requires it.

Do not refactor accepted P0/P1/P2 solely for elegance or size reduction.

---

## 15. Reporting cadence to Parent

The replacement SA must not narrate continuous progress to Parent.

No routine messages such as:

```text
started working
updated
finished
running tests
moving to next checkpoint
```

Parent communication is limited to:

1. **Session 1 recovery audit + revised MVP execution profile** — one compact return with Git permalink;
2. **unavoidable manual local-runner relay** — permalink only, when Parent/User must physically relay the prompt;
3. **non-delegable Class C decision/gate** — exact compact decision request;
4. **final provider-disabled developer handoff readiness**.

The SA self-reviews ordinary technical checkpoints and continues automatically after passing gates.

---

## 16. Reporting cadence to Codex

Do not issue a new runner prompt for every identified defect.

Before a runner is invoked:

- complete the SA-side repository/contract preflight;
- gather the full bounded defect/scope list known at that point;
- verify acceptance-state reachability;
- authorize ordinary in-scope correction loops inside the same runner;
- define one consolidated terminal gate.

A runner should return once per coherent wave unless it hits a genuine Class C boundary or an environment failure that contradicts the pre-initiation readiness artifact.

---

## 17. Evidence discipline

Evidence exists to prove correctness, not to become the product.

Use:

- compact evidence indexes;
- exact SHAs/trees;
- checksums for immutable reused packages;
- small representative screenshots for materially different states;
- machine-readable test summaries where useful.

Do not rebuild or recommit hundreds of unchanged artifacts merely to call them fresh.

A passing immutable evidence package may be cited as reused when:

- source SHA/tree is unchanged for the covered behavior;
- environment contract is unchanged in a material way;
- the new change cannot affect the covered invariant;
- hash/index verification passes.

---

## 18. Model and context efficiency

Use expensive reasoning only where it adds value.

Default routing:

```text
financial architecture / migration / concurrency / security acceptance
→ high-reasoning Systems/Backend model

ordinary backend/frontend implementation
→ balanced implementation model

CSS / mechanical tests / browser execution / evidence / ledger maintenance
→ fast or balanced model
```

Do not use maximum reasoning for evidence packaging, CSS, routine test failures, command execution, or mechanical repository work.

Protect the SA context window by storing detailed runner assignments, evidence and checkpoint reports in Git and retaining only the compact current-state ledger and decision summary in conversational context.

---

## 19. Time and scope controls

Do not use arbitrary defect-count ceilings as a reason to stop.

Use these controls instead:

```text
MAX_UNCHECKPOINTED_ACTIVE_TIME
= 90 minutes target

MAX_UNCHECKPOINTED_PRODUCTION_FILES
= 15 target unless the accepted wave inherently requires more
```

If a wave exceeds its planned active-time estimate by more than approximately 50%, the SA must first:

1. identify whether repeated validation/orchestration is causing the overrun;
2. reuse valid evidence;
3. reduce/defer noncritical MVP scope;
4. combine mechanical work into the current runner;
5. only then consider new architecture.

Time overrun alone is not permission to weaken financial/security gates.

---

## 20. Recovery-specific treatment of the current P3A Brand Return issue

The V6 evidence observed at charter drafting time demonstrates an important process lesson:

- the production provider-disabled binding truthfully made Brand Return self-service unavailable;
- the browser acceptance expected a deterministic fail-closed submission state that production binding could not reach;
- this was classified by the prior SA as a **test-harness contract gap**, not a Product or production-source defect;
- a Return-only V7 test boundary was subsequently authorized in the current ledger.

The replacement SA must first verify whether V7 evidence has already completed before doing anything.

If V7 has completed, review it rather than rerun it.

If V7 remains pending, use the already-authorized test-only boundary only after exact authority and source revalidation. Do not alter the production provider fail-closed semantics merely to make acceptance easier.

This pattern must not recur in later waves: acceptance-state reachability is a preflight requirement.

---

## 21. Terminal objective

After the recovery profile is accepted and all current provider-disabled critical-path work is complete, the SA should return only when it can state:

```text
BRAND_PAYOUTS_PROVIDER_DISABLED_HANDOFF_READY
```

with exact:

- recovered/final authority and ledger SHAs;
- backend and frontend SHAs;
- accepted migration identities;
- P3A / backend-wave / frontend-wave / joint-acceptance checkpoint evidence;
- full relevant test/build/runtime results;
- zero unauthorized provider actions;
- explicit deferred P3S / generalized recovery / provider-enabled / production gates;
- developer integration instructions.

Do not label provider-disabled handoff as real-money production-ready.

---

## 22. Freeze procedure

This draft becomes operative only after Product/Parent explicitly approves it.

At freeze:

```text
STATUS = FROZEN
FROZEN = YES
```

The freeze commit SHA becomes the replacement SA's module-specific charter authority.

A separate replacement-SA initiation artifact must then reference:

- the frozen charter SHA;
- the completed pre-initiation environment-readiness artifact SHA;
- the current execution ledger SHA;
- Product Authority and Phase C architecture SHAs;
- the exact recovery Session 1 assignment.

No replacement SA should be initiated before those references are durable.