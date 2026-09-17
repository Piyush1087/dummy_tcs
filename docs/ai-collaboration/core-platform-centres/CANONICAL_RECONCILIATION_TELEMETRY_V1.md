# Canonical Reconciliation Telemetry V1

Identifier: `CANONICAL_RECONCILIATION_TELEMETRY_V1`

Date opened: 2026-09-16  
Status: ACTIVE  
Scope: Core Platform, Brand Centre, Creator Centre canonical reconciliation

## 1. Measurement boundary

```text
INCLUDED_START =
First External Local Codex read-only canonical-reconciliation preflight run

EXCLUDED =
All acceptance work and discussion before that preflight

END =
Immutable reconciled backend/frontend checkpoints accepted
```

The first-run duration is user-reported. Prompt-preparation time before timing was requested was not measured and is not silently estimated.

## 2. Measurement method

Track these separately:

- External Local Codex wall-clock duration;
- assistant/Parent review and planning duration;
- implementation, correction and validation-run duration;
- manual relay and Parent-decision waiting time;
- infrastructure/provisioning waiting time;
- total calendar elapsed time;
- prompt-response cycles;
- blocker/correction cycles;
- commits, files, migrations, tests and runtime evidence;
- outcome and whether the work advanced reconciliation.

Do not combine waiting time with active execution time when producing future estimates.

## 3. Timing fields required from future Local Codex runs

Every subsequent runner prompt must require:

```text
RUN_STARTED_AT_UTC =
RUN_COMPLETED_AT_UTC =
WALL_CLOCK_SECONDS =
ACTIVE_EXECUTION_SECONDS = <if measurable>
COMMAND_COUNT =
LONGEST_COMMAND_AND_SECONDS =
WAITING_OR_BLOCKED_SECONDS = <if measurable>
```

The runner must also separate inspection, implementation, dependency installation, test, migration, build and browser-validation time where measurable.

## 4. Event ledger

| ID | Phase | Actor | Duration | Result | Productive outcome | Mutation |
|---|---|---|---:|---|---|---|
| CR-001 | Read-only preflight — immutable authority integrity gate | External Local Codex | 4 minutes, user-reported | `BLOCKED_MISSING_IMMUTABLE_AUTHORITY_OBJECTS` | Detected six unreachable Creator Brand pointers before unsafe topology analysis | None |
| CR-002 | Blocker review and GitHub authority verification | Assistant/Parent review lane | approximately 3 minutes measured | `DOCS_ONLY_POINTER_CORRECTION_REQUIRED` | Proved the accepted objects exist under the correct SHAs; classified the issue as consolidated-register transcription defects; published bounded correction request | Authority prompt only |
| CR-003 | Consolidated-register V2 docs-only correction and complete pointer-integrity pass | Orchestrator 1 | 5 minutes 56 seconds | `PASS` | Published controlling V2 register; verified 121/121 immutable pointers, 27/27 commit-tree tuples, 7/7 final-acceptance path/blob tuples and 112/112 module references | One authority document |
| CR-004 | Parent review, V2 fetch-back verification and timed preflight-rerun preparation | Assistant/Parent review lane | approximately 1 minute measured | `READY_TO_RERUN_READ_ONLY_PREFLIGHT` | Verified V2 blob and corrected tuples; published V2 runner prompt with mandatory timing fields | Runner prompt only |
| CR-005 | Full read-only reconciliation preflight rerun | External Local Codex | 9 minutes 36.173 seconds | `PREFLIGHT_READY` | Selected exact freeze bases, established 108-migration target, mapped seven-module/C06/Campaign deltas and resolved collision authorities | None |
| CR-006 | Parent review and Gate A implementation-prompt preparation | Assistant/Parent review lane | approximately 5 minutes measured | `GATE_A_READY_FOR_EXECUTION` | Accepted staged implementation direction and published a bounded seven-module/106-migration Gate A prompt | Runner prompt only |
| CR-007 | Whole-application coverage challenge and Gate A hold | Assistant/Parent review lane | approximately 5 minutes measured | `BASELINE_COVERAGE_ADDENDUM_REQUIRED` | Identified that Gatekeeper/onboarding, broader Campaign, Settings and other baseline surfaces need explicit authority/runtime/ancestry classification before implementation | Runner prompt only |
| CR-008 | Complete historical build-inventory expansion | Assistant/Parent review lane | approximately 11 minutes measured | `EXHAUSTIVE_COVERAGE_AUDIT_REQUIRED` | Expanded the audit to Brand/Creator onboarding, Chat, Brand/Product Intelligence, Campaign’s three workspaces, billing, Creator Centre and skipped/paused programs; superseded narrower coverage V1 | Runner prompt only |
| CR-009 | Complete historical build and whole-application coverage audit | External Local Codex | 6 minutes 35.364 seconds | `PASS_WITH_PLAN_REVISION` | Classified all material workstreams; found no omitted accepted donor and zero unclassified workstreams; required explicit baseline preservation gates | None |
| CR-010 | Coverage-result review and Gate A V2 publication | Assistant/Parent review lane | approximately 5 minutes measured | `GATE_A_V2_READY` | Corrected stage-specific C06 route semantics, confirmed Creator Chat deferred, and published whole-application baseline-preservation plus seven-module Gate A | Runner prompt only |
| CR-011 | Gate A baseline validation and attempted seven-module convergence | External Local Codex | 21 minutes 20.630 seconds | `CIRCUIT_BREAKER` | Passed immutable identities, static 94→106 migration integrity, 6,612 backend tests, 1,132 frontend tests, builds and boundary checks; exposed absence of an authorized populated migration-94 fixture before branch creation | None |
| CR-012 | Gate A blocker review and Gate A0 fixture-prompt publication | Assistant/Parent review lane | approximately 6 minutes measured | `GATE_A0_READY_FOR_EXECUTION` | Classified the stop as test infrastructure rather than reconciliation failure and published a bounded prompt for an immutable deterministic synthetic migration-94 fixture | Runner prompt only |
| CR-013 | Gate A0 synthetic migration-94 fixture creation and publication | External Local Codex | 17 minutes 35.446 seconds | `PASS` | Published deterministic 44-row/24-table migration-94 fixture, reproduced it in two independent PostgreSQL databases, and immutably published fixture and authority evidence | Dedicated backend test-infrastructure branch plus one authority evidence document |
| CR-014 | Gate A0 Parent review and independent publication verification | Assistant/Parent review lane | approximately 5 minutes measured | `GATE_A0_ACCEPTED` | Verified published blobs, exact three-file/one-file diff boundaries, manifest coherence, SQL safety boundaries, deterministic evidence, and readiness for an independently authorized Gate A rerun | None |
| CR-015 | Gate A V3 fixture-pinned rerun prompt publication | Assistant/Parent review lane | approximately 5 minutes measured | `GATE_A_V3_READY_FOR_EXECUTION` | Published a full rerun prompt requiring immutable fixture verification, clean-106 and populated 94→106 paths, all twelve post-upgrade assertion groups, delayed branch publication and Parent-review stop | Runner prompt only |
| CR-016 | Gate A V3 fixture-pinned validation rerun | External Local Codex | 43 minutes 29.488 seconds | `CIRCUIT_BREAKER` | Revalidated freeze baseline, fixture authority and clean-106 migration path; exposed 11 checked-in assertion failures across shared registries, Creator Home, Instagram wiring, C04 vocabulary and Creator permissions before branch creation | None |
| CR-017 | Accepted-test regression triage and read-only diagnostic prompt | Assistant/Parent review lane | approximately 8 minutes measured | `READ_ONLY_DIAGNOSTIC_READY` | Independently inspected failing target tests and runtime surfaces, identified shared-boundary risks, and published an authority/provenance diagnostic before permitting correction | Runner prompt only |
| CR-018 | Gate A backend regression read-only diagnostic | External Local Codex | 11 minutes 44.179 seconds | `MIXED_CORRECTION_REQUIRED` | Reproduced all 11 failures, classified ten as stronger test rescoping and one as real Instagram DI composition overexposure; mapped all corrections to existing authority | None |
| CR-019 | Diagnostic Parent review and correction-boundary assessment | Assistant/Parent review lane | approximately 5 minutes measured | `BOUNDED_CORRECTION_READY_FOR_AUTHORIZATION` | Confirmed no Product/schema/frontend change; correction requires a new immutable backend technical checkpoint and authority acceptance without rewriting the accepted historical target | None |
| CR-020 | Backend boundary-correction implementation prompt publication | Assistant/Parent review lane | approximately 7 minutes measured | `CORRECTION_IMPLEMENTATION_READY` | Published an exact 18-path correction prompt covering stronger test contracts, narrow/wide Instagram DI separation, full backend/database/frontend validation, immutable candidate publication and Parent-review stop | Runner prompt only |

## 5. Current cumulative telemetry

```text
LOCAL_CODEX_ACTIVE_TIME = 1 hour 54 minutes 21.280 seconds
ORCHESTRATOR_CORRECTION_TIME = 5 minutes 56 seconds
ASSISTANT_REVIEW_ACTIVE_TIME = approximately 1 hour 6 minutes
KNOWN_ACTIVE_TIME_TOTAL = approximately 3 hours 6 minutes 17.280 seconds
LOCAL_CODEX_RUNS = 7
ORCHESTRATOR_CORRECTION_CYCLES = 1
ASSISTANT_REVIEW_CYCLES = 12
BLOCKER_CYCLES = 3
BLOCKERS_CLOSED = 2
RUNNER_PROMPTS_PUBLISHED = 10
RUNNER_PROMPTS_EXECUTED = 7
IMPLEMENTATION_RUNS = 2
CORRECTION_IMPLEMENTATION_RUNS = 0
RUNTIME_VALIDATION_RUNS = 3
CANONICAL_RUNTIME_REPOSITORY_MUTATIONS = 0
AUTHORITY_DOCS_CHANGED = 1
```

The authority-integrity stop is counted as productive preflight work, not wasted execution.

## 6. Current blocker disposition

```text
CLOSED_BLOCKER =
Six mistyped Creator Brand commit/blob pointers in
CORE_PLATFORM_CENTRES_CONSOLIDATED_ACCEPTANCE_REGISTER_V1

CLOSED_BLOCKER_REMEDY =
CORE_PLATFORM_CENTRES_CONSOLIDATED_ACCEPTANCE_REGISTER_V2
commit 346ae2a5ec58506870036db832223c996311fc29
blob c9e0343794aad4a46e27882b58b98381dd4c9dcf

CURRENT_BLOCKER_SOURCE =
Accepted backend target fails 11 checked-in tests across shared Intelligence registry, Creator Home migration ownership, Instagram provider/module wiring, C04 securement vocabulary and Creator role/action expectations

CLOSED_RUNTIME_INFRASTRUCTURE_BLOCKER =
Missing authorized deterministic populated migration-94 fixture for the independent 94→106 PostgreSQL upgrade proof

PRODUCT_OR_ARCHITECTURE_DEFECT =
NO

RUNTIME_IMPLEMENTATION_DEFECT =
NO

FIXTURE_REMEDY =
PASS AND PARENT-VERIFIED
backend fixture commit 7a70d074eb2f3109b697c953bfa8a722bf69caf4
SQL blob 2dc29cfed740ddd2ad4780081f68296f98c20065
SQL SHA-256 fe27a4fed67a5cb02b507efc7dc86aaf4a17c2b281ec660f95a92f16bc488706
authority evidence commit 5826c82606c77383810a0dfdc5757ca4a4ece006

GATE_A_RESULT =
PRIOR ATTEMPT CIRCUIT_BREAKER BEFORE BRANCH CREATION

NEXT_ACTION =
Execute the bounded backend correction prompt, publish the immutable candidate and implementation evidence, then stop for Parent review before Gate A V4

READ_ONLY_PREFLIGHT_RESULT =
PREFLIGHT_READY

EXPECTED_FINAL_RECONCILED_MIGRATION_COUNT =
108
```

## 7. Update rule

Append an event after every substantive Orchestrator review, Local Codex run, correction run, implementation packet, validation packet, or Parent decision that changes the critical path.

At completion, publish:

- total calendar elapsed time;
- active assistant time;
- active Local Codex time;
- wait/relay time;
- prompt volume and correction ratio;
- blocker distribution;
- change and validation volume;
- actual versus estimated effort;
- recommendations for the next canonical reconciliation.
