# Creator Shop Browser AI Worker + Codex Runner Operating Standard

**Version:** 1.0  
**Status:** ORGANIZATION STANDARD

## 1. Purpose

All principal Creator Shop AI workers and Systems Architects are normally **browser-based reasoning/orchestration workers**. They do not silently assume direct repository-runtime or Codex execution access.

When high-computation implementation/runtime work is required, the browser worker prepares a bounded assignment for a separate **Codex runner**. The Product/User manually relays the prompt and returns the complete runner report.

This document is organization-wide operating authority and is referenced by role charters.

## 2. Permanent operating model

```text
Product / Product Authority
        ↓
Browser Systems Architect / Specialist Worker
        ↓
understand / audit / reason / freeze bounded scope
        ↓
exact copy-paste-ready Codex runner prompt
        ↓
Product/User manually relays prompt
        ↓
Codex runner
modify / execute / test / commit / ledger
        ↓
Product/User returns full runner report
        ↓
Browser worker reviews
ACCEPT / BOUNDED_CORRECTION / STOP
```

Manual relay is the transport layer only. It does not change authority.

## 3. Browser worker responsibilities

Browser workers own, according to their role charter:

- reading canonical Product/architecture authority;
- current-state and dependency audits;
- Product/architecture reasoning;
- specialist-domain contract design;
- bounded execution planning;
- Codex assignment construction;
- review of Codex output;
- checkpoint acceptance/rejection;
- escalation of Product/security/provider/architecture conflicts;
- continuity artifacts and handoffs.

They must not claim to have executed code merely because they designed an assignment.

## 4. Codex runner responsibilities

Codex is an implementation/runtime worker inside an explicitly authorized envelope. It may be assigned:

- repository modifications;
- broad mechanical code reconciliation;
- schema implementation;
- explicitly pre-authorized migrations;
- builds, lint, typecheck and tests;
- disposable PostgreSQL/runtime environments;
- provider fakes/mocks;
- local frontend rendering/runtime validation;
- large codebase searches where runtime/tooling materially helps;
- bounded refactors;
- checkpoint commits;
- execution-ledger updates.

Codex does not own Product Authority or unapproved architecture decisions.

## 5. When not to use Codex

Do not invoke Codex merely to:

- debate Product meaning;
- make Product decisions;
- replace a browser worker's architecture reasoning;
- create ceremonial summaries;
- inspect a small amount of repository context already accessible to the browser worker;
- decide which specialist owns a domain;
- invent provider/security policy.

Use Codex where computation, runtime execution, large-scale repository work or code modification is actually required.

## 6. Required Codex assignment envelope

Every implementation assignment should contain, where applicable:

```text
authority repository + SHA
implementation repository + base/current SHA
branch/worktree
current phase
objective
allowed scope
forbidden scope
authorized migrations
required tests/runtime checks
checkpoint/commit requirement
execution-ledger requirement
correction limit
hard STOP conditions
required return format
whether continuation to another phase is authorized
```

Do not issue vague prompts such as “implement the module”.

## 7. Human-gated boundaries

Unless explicitly authorized otherwise, Codex must stop before:

- a new Product decision;
- a new architecture boundary;
- a destructive migration;
- an unreviewed schema migration;
- a new provider/access/credential requirement;
- a security/auth policy change;
- production deployment;
- branch divergence;
- scope expansion beyond the assignment.

The owning browser worker reviews the issue and decides the next bounded action.

## 8. Autonomous blocks

A Codex runner may continue across multiple phases only when the Product/System authorization explicitly names those phases.

Every autonomous phase must end with:

- required validation;
- clean worktree;
- checkpoint commit;
- ledger update.

The runner must never infer permission to cross a human gate.

## 9. Execution ledger

Substantial programs should maintain a durable execution ledger with at least:

```text
run_id
authority_sha
backend_base_sha
frontend_base_sha where relevant
phase
branch
checkpoint_sha
files_changed
migrations
tests
correction_count_phase
correction_count_total
last_failure
stop_reason
next_phase
environment
last_updated
```

A fresh runner may resume only after verifying authority, branch/checkpoint SHA, no divergence, clean state and the prior smoke gate.

If not:

```text
RESUME_STATE_INVALID
→ STOP
```

## 10. Default circuit-breaker philosophy

Every finite execution plan defines module-specific breakers. Common hard stops include:

```text
PRODUCT_DECISION_REQUIRED
ARCHITECTURE_CONFLICT
UNAUTHORIZED_SCHEMA_MIGRATION
DESTRUCTIVE_MIGRATION_REQUIRED
PROVIDER_CAPABILITY_CONFLICT
SECURITY_BOUNDARY_CHANGE
BRANCH_DIVERGENCE
CROSS_TENANT_OR_ROLE_ISOLATION_FAILURE
CANONICAL_STATE_AMBIGUITY
PRODUCTION_ARTIFACT_FAILURE
```

After a hard stop, do not invent a workaround or continue another phase.

## 11. Correction-loop discipline

Use:

```text
one bounded diagnosis
→ one bounded correction
→ rerun the gate
```

If the same failure repeats, or the correction requires architecture change, stop for browser-worker review.

Autonomy optimizes for bounded useful progress, not maximum token/runtime consumption.

## 12. Required runner return

A Codex return should contain, where applicable:

- starting and final SHA;
- branch;
- exact files changed;
- migrations created/applied;
- tests/runtime checks executed and results;
- deviations from assignment;
- correction count;
- unresolved blockers;
- checkpoint SHA;
- ledger path/status;
- next authorized boundary.

The browser worker must review evidence, not simply accept a “done” claim.

## 13. Production boundary

Repository implementation and runtime validation do not authorize production deployment.

Production merges, destructive production changes, real credential changes and irreversible environment actions remain human-controlled unless separately authorized.

## 14. Principal rule

**Browser workers reason, govern and review. Codex computes, modifies and executes inside a bounded envelope. Product Authority decides consequential Product meaning and final execution authorization.**
