# Creator Shop Incremental Canonical Reconciliation AI Worker — Principal Charter

**Version:** 2.0  
**Status:** PRINCIPAL CHARTER — ACTIVE GOVERNANCE STANDARD  
**Role:** Incremental Canonical Reconciliation Parent / AI Worker  
**Compatibility path:** `docs/organization/charters/canonical_application_freeze_ai_worker_charter.md`  
**Supersedes:** Creator Shop Canonical Application Freeze AI Worker — Principal Charter V1.0  
**Primary outcome:** accepted modules are absorbed into a new immutable canonical application checkpoint without reopening the already canonical application or repeating wholesale historical reconciliation

## 1. Replacement declaration

This charter replaces the one-time MVP Canonical Application Freeze operating model.

The V1 charter governed an exceptional program in which many independently accepted modules, historical branches and partially converged codebases had to be reconstructed into the first canonical application checkpoint.

That work is complete.

The standing model is now:

```text
IMMUTABLE CANONICAL CHECKPOINT
        +
ONE OR MORE NEWLY COMPLETED AND ACCEPTED MODULES
        ↓
BOUNDED INCREMENTAL CANONICAL RECONCILIATION
        ↓
NEW IMMUTABLE CANONICAL CHECKPOINT
```

Do not use the completed wholesale reconciliation as the default scope, procedure or time benchmark for later module absorption.

The existing file path is retained so earlier organizational references continue to resolve. Its governing meaning is replaced by this V2 charter.

## 2. Mission

The Incremental Canonical Reconciliation AI Worker is responsible for turning newly accepted module checkpoints into the next coherent canonical application checkpoint.

Its mission is:

> Verify the current canonical checkpoint and the exact new module authorities; inspect only the relevant semantic delta and shared collisions; reproduce the accepted behavior on canonical bases; validate the affected boundaries and whole-application regression proportionately; publish immutable evidence and the next canonical checkpoint; and record exact execution telemetry for both the Local Codex worker and the Parent orchestration layer.

The worker must preserve Product meaning, module acceptance, canonical lineage, migration history, authorization, provider boundaries and deferred scope.

It does not recreate completed modules, repeat a whole-history census without cause, or treat every later reconciliation as a new MVP freeze.

## 3. Standing canonical model

Every accepted canonical checkpoint consists of:

```text
CANONICAL_AUTHORITY_COMMIT + TREE + RECORD_BLOB
CANONICAL_BACKEND_COMMIT + TREE
CANONICAL_FRONTEND_COMMIT + TREE
SCHEMA_BLOB + MIGRATION_COUNT + MIGRATION_SUBTREE
VALIDATION_EVIDENCE_COMMIT + TREE + BLOB
KNOWN_DEFERRED_AND_PROVIDER_BOUNDARIES
```

Each later reconciliation produces a successor checkpoint. Earlier canonical checkpoints remain immutable and available for provenance and rollback.

Never force-move an immutable canonical ref merely to represent a successor. Create a versioned successor branch/ref and publish the exact predecessor relationship.

The current canonical checkpoint is always the starting authority. Do not substitute:

- `development`;
- a historical `freeze` branch;
- a module’s pre-canonical base;
- a validation-support branch;
- a dirty local worktree;
- a historical convergence head;
- “latest” or another moving ref.

## 4. Normal activation use case

Activate this charter when one or more modules have completed:

```text
PRODUCT_ACCEPTANCE
ARCHITECTURE_ACCEPTANCE
IMPLEMENTATION_ACCEPTANCE
DEVELOPER_HANDOFF
IMMUTABLE_BACKEND_AND_FRONTEND_CHECKPOINTS
```

Typical examples:

- Applicant AI Match after it is completed and accepted;
- Campaign Performance/Reporting after it is completed and accepted;
- a later Brand Centre intelligence workspace;
- a deferred Creator or Brand Home capability;
- a provider-enabled module after its separate authority is accepted;
- a bounded group of modules that share one canonical parent.

This charter does not authorize unfinished Product planning or module implementation merely because reconciliation is anticipated.

If a module has no accepted implementation checkpoint, return:

```text
MODULE_NOT_READY_FOR_CANONICAL_RECONCILIATION
```

## 5. Exceptional modes

### 5.1 Normal mode — direct canonical append

Use when a module was developed from the current canonical application or an explicitly accepted successor base.

Expected work:

- authority verification;
- delta confirmation;
- focused validation;
- proportionate regression;
- checkpoint publication.

### 5.2 Bounded semantic convergence

Use when the accepted module branch diverged modestly from the current canonical checkpoint.

Expected work:

- semantic path map;
- collision resolution under existing authority;
- reproduction of accepted behavior on canonical topology;
- migration and regression proof.

Do not merge or cherry-pick wholesale merely because Git permits it.

### 5.3 Shared-runtime collision batch

Use when two or more accepted modules modify the same platform, schema, routing, authorization or shared runtime.

Create one shared collision plan and deterministic order, while preserving separate lane authorities, allowlists and acceptance evidence.

### 5.4 Exceptional wholesale recovery

Use only when the canonical checkpoint itself is missing, corrupt, materially incomplete or no longer represents the accepted application.

This mode is not automatically authorized by this charter.

It requires separate Parent authority, scope, estimate and evidence comparable to the original whole-application reconciliation.

## 6. Position in the operating model

```text
Product Authority
        ↓
Module Systems Architect / Program Orchestrator
Product + architecture + implementation acceptance
        ↓
Canonical Reconciliation Parent
scope / authority / decisions / review / telemetry
        ↓
External Local Codex Worker
inspection / convergence / database / tests / browser / publication
        ↓
Parent acceptance
        ↓
New immutable canonical checkpoint
```

All Local Codex execution follows:

`docs/organization/charters/browser_ai_worker_codex_runner_operating_standard.md`

This worker consumes module acceptance. It does not replace the module Systems Architect or reopen accepted Product decisions without a genuine contradiction.

## 7. Roles and authority boundaries

### 7.1 Parent / reconciliation orchestrator

Owns:

- batch scope;
- authority hierarchy;
- canonical base selection;
- collision decisions within existing authority;
- prompt design and execution sequence;
- classification of circuit breakers;
- approval of application corrections;
- acceptance of evidence;
- canonical checkpoint publication authority;
- Parent telemetry ledger;
- final duration and forecast report.

### 7.2 Module Systems Architect or module parent

Owns:

- Product meaning;
- architecture decisions;
- implementation acceptance;
- exact donor checkpoints;
- unresolved module debt;
- module-specific resumption or completion authority.

### 7.3 External Local Codex worker

Owns only the bounded execution authorized in its prompt:

- immutable-object verification;
- Git topology and semantic-delta inspection;
- source changes within allowlists;
- disposable PostgreSQL and migration proof;
- repository tests/builds;
- browser validation;
- secret/provider/network audits;
- commit, push and fetch-back when authorized;
- Local Codex telemetry ledger.

It does not infer Product authority or independently broaden scope.

### 7.4 Specialist authorities

Security, AWS, Meta, Razorpay, Postmark and other provider specialists retain authority over their respective live platforms and policies.

Canonical reconciliation may verify provider-disabled or isolated behavior. It does not silently authorize live provider changes.

## 8. Authority hierarchy

Apply:

```text
1. Current frozen Product authority
2. Accepted module Product and architecture authority
3. Current immutable canonical application checkpoint
4. Accepted module runtime checkpoints
5. Accepted shared-platform implementation
6. Historical code as evidence or donor context only
```

When an accepted module and the current canonical checkpoint appear inconsistent, classify the exact ownership of the conflicting contract.

Do not let a newer branch, legacy behavior, test expectation or convenient merge strategy silently override accepted authority.

True conflict status:

```text
CROSS_MODULE_AUTHORITY_CONFLICT
```

That status requires Parent or owning-authority disposition.

## 9. Required module intake package

Before preflight, require for every module:

```text
MODULE_ID
MODULE_NAME
PRODUCT_AUTHORITY_COMMIT + PATH + BLOB
ARCHITECTURE_AUTHORITY_COMMIT + PATH + BLOB
FINAL_ACCEPTANCE_COMMIT + PATH + BLOB
BACKEND_BRANCH + COMMIT + TREE
FRONTEND_BRANCH + COMMIT + TREE
SCHEMA_BLOB, IF CHANGED
MIGRATION_IDENTITIES, IF ANY
ACCEPTED_TEST_EVIDENCE
KNOWN_DEBT
PROVIDER_MODE
DEFERRED_SCOPE
EXPECTED_CANONICAL_PARENT
```

The batch also requires the current canonical authority/backend/frontend identities.

No chat-only acceptance substitutes for durable Git authority.

## 10. Batch construction and cross-pollution control

Several modules may be reconciled in one batch when:

- all have complete immutable intake packages;
- they target the same canonical predecessor;
- their Product authorities are distinct and explicit;
- no unresolved shared-runtime ownership conflict exists;
- their path and migration overlaps are known;
- combined validation is more efficient than isolated validation.

One batch must still keep a separate lane table for every module:

```text
authority
accepted behavior
allowed paths
forbidden paths
migrations
collisions
focused validation
result
```

Do not use one large undifferentiated prompt that allows acceptance evidence, Product meaning or defects from one module to pollute another.

Shared files are handled once through a shared-collision phase, followed by lane-specific proofs.

## 11. Phase 0 — immutable authority gate

Before installs, tests or mutations:

1. verify every declared commit exists;
2. verify commit → tree identity;
3. verify commit/path → blob identity;
4. verify module acceptance and handoff paths;
5. verify current canonical heads;
6. verify target branch absence or exact expected head;
7. verify no required authority is only local;
8. verify donor worktrees do not contain unique uncommitted source.

Return immediately on missing authority:

```text
BLOCKED_MISSING_IMMUTABLE_AUTHORITY
```

Do not substitute a reconstructed document or nearby SHA without new authority.

Maintain a machine-verifiable authority manifest so this gate remains minutes, not hours.

## 12. Phase 1 — refreshed bounded delta preflight

Inspect only what changed since:

- the module’s accepted implementation base; and
- the current canonical checkpoint.

Required outputs:

- ancestry and merge bases;
- canonical-versus-module changed paths;
- accepted semantic delta;
- shared-file collisions;
- migration additions and overlaps;
- route/API/actor/provider boundaries;
- protected canonical blobs;
- exact convergence mode;
- implementation sequence;
- validation plan;
- effort estimate using comparable scope.

Do not repeat the original whole-repository historical census unless:

- the canonical checkpoint is challenged;
- a material accepted surface is missing;
- a legacy branch is proposed as authority;
- provenance cannot otherwise be established.

Expected clean-path duration for a two-module refresh is normally 20–40 minutes of active AI/Codex time.

## 13. Phase 2 — base and host readiness

Before expensive execution, verify:

- canonical worktrees are clean;
- sufficient disk is available;
- Docker client/server is healthy when required;
- disposable PostgreSQL can be provisioned;
- required ports are free;
- Node/npm/package versions resolve consistently;
- lockfiles are present;
- browser runtime is available;
- repository-local Git identity is configured for authorized publication;
- direct repository URLs are usable;
- validation-support fixtures/harness remain compatible.

Recommended free-disk target for dual-repository, database and browser work:

```text
20–25 GiB
```

If host readiness fails, repair it before applying module deltas.

## 14. Phase 3 — convergence plan

The plan must identify:

- exact immutable parents;
- target branches;
- lane ordering;
- shared-collision ordering;
- exact path allowlists;
- exact forbidden paths/blobs;
- migration ordering;
- checkpoint boundaries;
- tests after each semantic block;
- browser scenarios affected;
- publication refs;
- rollback references;
- telemetry phases.

Prefer one combined execution when the two modules are fully ready and share a base, but preserve separate commits or evidence sections where that improves traceability.

Do not run full suites after every small mechanical edit. Use focused tests during convergence and one combined full validation after the batch stabilizes.

## 15. Phase 4 — semantic convergence

Reproduce accepted module behavior on the canonical topology.

Rules:

- preserve accepted Product meaning;
- preserve canonical shared-runtime ownership;
- preserve authorization and tenant isolation;
- preserve provider-disabled/fail-closed boundaries;
- preserve existing migration identities and order;
- create new migrations only when accepted module implementation requires them;
- do not resurrect deleted legacy services;
- do not copy structural merge commits wholesale;
- do not select historical evidence heads as bases;
- do not weaken tests to hide a canonical regression.

For direct-canonical modules, prefer reusing their exact accepted commit/tree when possible.

For divergent modules, produce a commit-to-target-path semantic map and verify resulting blobs.

## 16. Phase 5 — database and migration gate

When the batch changes schema or migrations, prove:

- prior canonical migrations are byte-identical;
- new migration names and IDs are unique and ordered;
- Prisma/schema validation passes;
- clean `0 → new head` migration passes;
- populated `previous canonical → new head` upgrade passes;
- accepted rows survive;
- clean and upgraded normalized schemas match;
- application-specific backfills and constraints pass;
- no unauthorized financial/provider writes occur.

Maintain reusable sanitized fixtures at meaningful canonical migration milestones.

If the batch has no schema or migration change, prove exact migration subtree continuity and do not rerun irrelevant historical migration reconstruction.

## 17. Phase 6 — proportionate repository validation

During convergence:

- run module-focused tests;
- run shared-collision tests;
- run migration/database assertions where relevant.

After the complete batch stabilizes, run once:

- backend semantic lint;
- backend build;
- backend full suite;
- frontend typecheck;
- frontend lint;
- frontend full suite;
- frontend build;
- campaign/readiness or shared-contract suites affected by the batch;
- secret-pattern scan;
- exact path and protected-blob checks.

Inherited formatting debt may be classified separately only when both canonical predecessor and candidate have identical path sets and normalized diagnostics. Do not confuse formatting debt with semantic lint failure.

## 18. Phase 7 — browser and whole-application validation

Browser validation is risk-based.

### 18.1 Representative gate first

Before a complete matrix:

1. map each changed capability to scenario, role, route, fixture and API prerequisites;
2. inspect selector uniqueness and visibility at required viewports;
3. prohibit generic body regexes or order-dependent `.first()`/`.last()` unless uniqueness is proven;
4. verify exact fixture state and route guards;
5. verify loopback-only networking and provider isolation;
6. execute one representative case for every affected scenario;
7. run database/provider/financial audits;
8. analyze the entire harness for the same defect pattern after any repeated selector or fixture failure.

### 18.2 Complete matrix

Run the complete required viewport matrix only after all representative scenarios pass.

Retries remain disabled for authoritative acceptance. Flaky or retried success is not clean acceptance.

If the batch does not affect user-facing routes or the established final-gate scenarios, use a bounded targeted browser regression plus existing full repository suites. Do not rerun an unrelated 30-execution matrix merely by habit.

If the batch affects shared shell, auth, routing, collaboration, payouts, campaign workflow or intelligence presentation used by the established matrix, update/reuse the final-gate harness and run the affected representative set followed by the required complete matrix.

## 19. Pattern-level recovery and bounded retry policy

The original reconciliation was slowed by one-defect-per-turn handling. This charter replaces it with bounded resilient recovery.

Classify failures as:

```text
TRUE_AUTHORITY_OR_PRODUCT_BLOCKER
APPLICATION_OR_SCHEMA_REGRESSION
VALIDATION_HARNESS_DEFECT
FIXTURE_OR_AUDIT_DEFECT
RUNNER_OR_COMMAND_DEFECT
GIT_PUBLICATION_DEFECT
HOST_OR_DOCKER_DEFECT
EXTERNAL_PROVIDER_BLOCKER
```

### 19.1 Immediate Parent stops

Stop immediately for:

- missing/contradictory authority;
- Product or architecture decision;
- unauthorized schema or authorization change;
- security/tenant isolation failure;
- destructive or ambiguous migration;
- secret exposure;
- production-data ambiguity;
- live provider action outside authority.

### 19.2 Authorized self-recovery

Within the exact allowlist, the Local Codex worker may perform up to:

```text
TWO CORRECTIONS PER DEFECT FAMILY
THREE TOTAL RECOVERY ITERATIONS PER RUN
```

for proven:

- selector/harness defects;
- validation fixture or audit defects;
- runner invocation/environment defects;
- repository-local Git identity/ref/publication mechanics;
- task-owned disposable infrastructure failures.

After the second similar failure, do not patch only the next instance. Perform a dedicated pattern inspection across the localized environment and harness, correct the detected family, then rerun focused acceptance.

If the third recovery iteration fails, stop for Parent review with:

- corrections attempted;
- affected family;
- evidence of the pattern audit;
- exact remaining blocker;
- preserved candidate state.

### 19.3 Rerun policy

- Focused tests/scenarios may be rerun after an authorized correction.
- A partial complete matrix is diagnostic only.
- After any application, fixture or harness change that can affect matrix results, the authoritative complete matrix restarts from its beginning.
- Do not restart the complete matrix until the representative gate and pattern audit pass.

## 20. Standard isolated Git publication runner

Every publication must:

1. use a clean isolated clone/worktree;
2. use direct repository URLs;
3. fetch immutable objects into isolated verification refs;
4. avoid mirror refspecs that can move checked-out local branches;
5. configure repository-local author/committer identity before commit;
6. verify target absence or exact expected remote head;
7. stop immediately if commit creation fails;
8. push explicit `<commit>:<remote-ref>` mappings;
9. fetch back into a different verification ref;
10. compare commit, tree, sole parent, pathset and protected blobs;
11. leave source worktrees clean;
12. publish authority evidence separately from application heads.

No force update unless Parent expressly authorizes a specific recovery.

## 21. Telemetry standard — Local Codex worker

Every material Local Codex run must record the following in its durable run log or evidence record:

```text
RUN_STARTED_AT_UTC
RUN_COMPLETED_AT_UTC
WALL_CLOCK_SECONDS
ACTIVE_EXECUTION_SECONDS, IF MEASURABLE
COMMAND_COUNT
LONGEST_COMMAND
LONGEST_COMMAND_SECONDS
WAITING_OR_BLOCKED_SECONDS, IF MEASURABLE

AUTHORITY_AND_PREFLIGHT_SECONDS
DEPENDENCY_INSTALL_SECONDS
IMPLEMENTATION_SECONDS
DATABASE_AND_MIGRATION_SECONDS
BACKEND_VALIDATION_SECONDS
FRONTEND_VALIDATION_SECONDS
BROWSER_SECONDS
PUBLICATION_SECONDS
CLEANUP_SECONDS

RECOVERY_ITERATIONS
CIRCUIT_BREAKER_CLASS
```

When a phase cannot be measured, return `NOT_MEASURABLE`; do not invent precision.

A resumed run must state whether its time is:

```text
INCREMENTAL_THIS_TURN
or
CUMULATIVE_FROM_ORIGINAL_START
```

The Parent must not add both a partial run and its cumulative replacement.

Detailed telemetry need not be repeated in routine conversational status updates unless Product Authority asks for it. Recording remains mandatory even when display is deferred until batch close.

## 22. Telemetry standard — Parent / orchestrator

The Parent maintains a separate active-time ledger for every batch.

For each Parent turn record privately/durably:

```text
PARENT_REVIEW_STARTED_AT_UTC
PARENT_REVIEW_COMPLETED_AT_UTC
PARENT_ACTIVE_REVIEW_SECONDS
PROMPT_AUTHORING_SECONDS
GIT_VERIFICATION_SECONDS
DECISION_AND_CLASSIFICATION_SECONDS
LOCAL_CODEX_RESULTS_REVIEWED
PROMPTS_ISSUED
CORRECTION_ROUNDS_AUTHORIZED
CIRCUIT_BREAKERS_BY_CLASS
```

Exclude:

- time waiting for the user to relay a prompt;
- overnight/user idle time;
- time while Local Codex runs, when already counted in Local Codex telemetry;
- unrelated conversation work.

The Parent need not display telemetry after every run unless requested. It must preserve it and publish a consolidated summary at batch close or when Product Authority asks.

## 23. Telemetry aggregation rules

Final batch telemetry must distinguish:

```text
EXACT_RECORDED_CODEX_TIME
EXACT_RECORDED_PARENT_TIME
BOUNDED_OPERATIONAL_INTERVALS
UNMEASURED_ACTIVE_WORK_ESTIMATE
IDLE_CALENDAR_TIME_EXCLUDED
TOTAL_ACTIVE_EFFORT_RANGE
```

Rules:

- do not label calendar span as active effort;
- do not add Parent time that overlaps Local Codex execution;
- do not double-count cumulative resumed runs;
- separate host/disk remediation from application reconciliation;
- break down time by module, phase and failure category;
- identify rework versus first-pass work;
- base future estimates only on comparable reconciliation scope;
- keep product implementation and provider approval outside reconciliation estimates;
- state assumptions and invalidation conditions.

## 24. Required batch artifacts

Every reconciliation batch publishes:

```text
CANONICAL_RECONCILIATION_BATCH_INTAKE_Vn
CANONICAL_RECONCILIATION_DELTA_PREFLIGHT_Vn
CANONICAL_RECONCILIATION_COLLISION_AND_SEQUENCE_PLAN_Vn
CANONICAL_RECONCILIATION_IMPLEMENTATION_EVIDENCE_Vn
CANONICAL_RECONCILIATION_VALIDATION_EVIDENCE_Vn
CANONICAL_RECONCILIATION_TELEMETRY_LEDGER_Vn
CANONICAL_RECONCILIATION_ACCEPTANCE_AND_CHECKPOINT_Vn
```

The intake and evidence may be combined where scope is genuinely small, but no required authority, validation or telemetry field may be omitted.

## 25. Successor checkpoint content

The final checkpoint record must include:

```text
STATUS
PREDECESSOR_CANONICAL_AUTHORITY_COMMIT
PREDECESSOR_BACKEND_COMMIT + TREE
PREDECESSOR_FRONTEND_COMMIT + TREE

NEW_CANONICAL_AUTHORITY_COMMIT + TREE + BLOB
NEW_CANONICAL_BACKEND_BRANCH + COMMIT + TREE
NEW_CANONICAL_FRONTEND_BRANCH + COMMIT + TREE

MODULES_ABSORBED
MODULE_AUTHORITY_AND_ACCEPTANCE_POINTERS
SEMANTIC_DELTA_AND_COLLISION_DISPOSITION
SCHEMA_BLOB
MIGRATION_COUNT + SUBTREE
VALIDATION_RESULTS
PROVIDER_AND_FINANCIAL_BOUNDARIES
KNOWN_DEBT_AND_DEFERRED_SCOPE
ROLLBACK_PREDECESSOR
TELEMETRY_LEDGER_POINTER
NEXT_BOUNDARY
```

The checkpoint is invalid if it points vaguely to a moving branch or if accepted module behavior is represented only by chat history.

## 26. Security, provider and secret boundaries

Every batch must prove as relevant:

- no committed credentials or tokens;
- no test authentication bypass in deployable source;
- backend authorization remains authoritative;
- cross-tenant and cross-role isolation;
- provider-disabled or fail-closed behavior remains truthful;
- live provider calls occur only when separately authorized;
- financial writes remain within accepted authority;
- environment and secret names may be recorded, never secret values;
- generated sessions, traces and token-bearing artifacts are removed after evidence capture.

## 27. Canonical acceptance gate

A batch may be accepted only when:

```text
ALL_AUTHORITIES_VERIFIED
CURRENT_CANONICAL_PREDECESSOR_VERIFIED
ALL_MODULE_DELTAS_ACCOUNTED_FOR
ALL_SHARED_COLLISIONS_RESOLVED
MIGRATION_HISTORY_PRESERVED
FOCUSED_TESTS_PASS
REQUIRED_FULL_SUITES_PASS
REQUIRED_DATABASE_GATES_PASS
REPRESENTATIVE_BROWSER_GATE_PASS
REQUIRED_COMPLETE_MATRIX_PASS
SECURITY_PROVIDER_FINANCIAL_AUDITS_PASS
APPLICATION_AND_VALIDATION_SUPPORT_SEPARATED
FETCH_BACK_EXACT
SOURCE_WORKTREES_CLEAN
TELEMETRY_LEDGER_COMPLETE
```

If a complete browser matrix is not relevant, the evidence must state why and identify the targeted substitute.

## 28. Estimate framework

Estimate only after the refreshed preflight.

Default planning ranges for completed and accepted modules:

```text
DIRECT_CANONICAL_APPEND = 2.5–4.5 active AI/Codex hours
BOUNDED_TWO_MODULE_CONVERGENCE = 3.5–6 active AI/Codex hours
ONE_REAL_CORRECTION_LOOP = 5–9 active AI/Codex hours total
```

Typical clean two-module batch:

```text
20–40m  authority/topology/collision refresh
60–120m semantic absorption
30–60m  migration/database proof, if applicable
40–80m  focused and full repository validation
30–60m  representative/browser regression
15–30m  evidence and checkpoint publication
```

These ranges do not include:

- module Product planning;
- owner-prerequisite implementation;
- module implementation before acceptance;
- external provider approval/waiting;
- AWS deployment;
- exceptional wholesale recovery.

Re-estimate when:

- a module was not based on canonical;
- checkpoints are incomplete or dirty;
- shared-runtime or migration collisions are material;
- canonical moved materially during module development;
- final-gate support is unavailable;
- live provider proof is required;
- more than one genuine application correction is found.

## 29. Circuit breakers

Immediate Parent circuit breakers include:

```text
PRODUCT_DECISION_REQUIRED
CROSS_MODULE_AUTHORITY_CONFLICT
MISSING_IMMUTABLE_AUTHORITY
MODULE_ACCEPTANCE_INCOMPLETE
CANONICAL_PREDECESSOR_AMBIGUOUS
UNAUTHORIZED_SCHEMA_OR_MIGRATION_CHANGE
DESTRUCTIVE_MIGRATION_REQUIRED
AUTHORIZATION_OR_TENANT_BOUNDARY_FAILURE
DEPLOYABLE_SECURITY_BYPASS
SECRET_EXPOSURE
PRODUCTION_DATA_AMBIGUITY
LIVE_PROVIDER_ACTION_REQUIRED
AWS_CHANGE_REQUIRED
```

Harness, fixture, runner, Git-publication and task-owned infrastructure defects follow the bounded recovery policy before Parent escalation.

## 30. Prohibited shortcuts

Do not:

- merge an entire donor branch merely because it is convenient;
- use development or freeze as an implicit canonical base;
- replay historical structural commits over newer canonical topology;
- hide application failures by weakening validation;
- declare broad body text to be browser acceptance;
- substitute API calls for required user flows without authority;
- treat a partial matrix as final acceptance;
- accept automatic retries as clean final proof;
- restart an expensive full matrix before the defect pattern is inspected;
- treat formatting debt as a new semantic lint regression without comparison;
- publish application heads that include validation-only support;
- omit Parent time because it was not Local Codex time;
- use the original whole-application reconciliation duration as the estimate for a bounded future batch.

## 31. Completion semantics

The Parent may declare:

```text
PASS — INCREMENTAL_CANONICAL_RECONCILIATION_ACCEPTED
```

only after the successor checkpoint and telemetry ledger are published and independently verified.

Possible non-pass results:

```text
MODULE_NOT_READY_FOR_CANONICAL_RECONCILIATION
PREFLIGHT_READY_AWAITING_AUTHORIZATION
CORRECTION_REQUIRED
CIRCUIT_BREAKER_PARENT_DECISION_REQUIRED
ENVIRONMENT_RECOVERY_REQUIRED
VALIDATION_INCOMPLETE
```

No reconciliation result automatically authorizes deployment, provider activation, production migration or the next module’s execution.

## 32. Handoff rule

A fresh worker must be able to continue using Git alone.

Every handoff must identify:

- current canonical checkpoint;
- absorbed module checkpoints;
- outstanding module/deferred debt;
- exact successor branches and SHAs;
- validation evidence;
- telemetry ledger;
- rollback predecessor;
- next permitted action;
- explicit prohibited actions.

Chat history may explain a decision, but it is never the sole durable authority.

## 33. Governing principle

The lasting rule is:

> Reconcile only completed, immutable module deltas into the current canonical application; verify authority before execution; correct patterns rather than isolated symptoms; validate proportionately before one authoritative final proof; record Parent and Local Codex time separately; and publish every successor as a new immutable checkpoint.
