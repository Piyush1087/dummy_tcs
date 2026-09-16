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

## 5. Current cumulative telemetry

```text
LOCAL_CODEX_ACTIVE_TIME = 4 minutes
ASSISTANT_REVIEW_ACTIVE_TIME = approximately 3 minutes
KNOWN_ACTIVE_TIME_TOTAL = approximately 7 minutes
LOCAL_CODEX_RUNS = 1
ASSISTANT_REVIEW_CYCLES = 1
BLOCKER_CYCLES = 1
IMPLEMENTATION_RUNS = 0
CORRECTION_IMPLEMENTATION_RUNS = 0
RUNTIME_VALIDATION_RUNS = 0
CANONICAL_REPOSITORY_MUTATIONS = 0
```

The authority-integrity stop is counted as productive preflight work, not wasted execution.

## 6. Current blocker disposition

```text
BLOCKER_SOURCE =
Six mistyped Creator Brand commit/blob pointers in
CORE_PLATFORM_CENTRES_CONSOLIDATED_ACCEPTANCE_REGISTER_V1

LOST_AUTHORITY =
NO

CREATOR_BRAND_REACCEPTANCE_REQUIRED =
NO

REQUIRED_REMEDY =
Docs-only superseding acceptance-register correction,
followed by complete pointer-integrity verification and a full preflight rerun
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
