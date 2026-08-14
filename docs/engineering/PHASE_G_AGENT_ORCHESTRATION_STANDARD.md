# Phase G Agent Orchestration Standard

**Version:** 1.0  
**Status:** APPROVED  
**Scope:** Global — all Creator Shop modules  
**Companion:** `docs/engineering/PHASE_G_PRODUCT_READINESS_STANDARD.md`

## 1. Purpose

This document governs how an AI engineering agent should **sequence Phase G itself** after receiving one bootstrap/master instruction.

The Product Readiness Standard defines **what each Phase G stage means**. This orchestration standard defines **when the agent may advance, what it must inspect in the previous result, when it must stop, and how it generates the next execution prompt without repeated human prompt authoring**.

The objective is not unrestricted autonomy. The objective is to remove avoidable prompt-by-prompt coordination while preserving Product authority at semantic gates.

## 2. Operating model

The same AI agent operates in two explicit modes.

### WORKER mode

Executes exactly one approved Phase G work package, validates it, writes the acceptance/audit artifact, and returns a structured result.

### SUPERVISOR mode

Reads the completed package and decides one of:

- `ADVANCE_AUTONOMOUSLY`
- `ADVANCE_WITH_DEBT`
- `RETRY_CURRENT_PHASE`
- `SPLIT_NEXT_INVESTIGATION`
- `BLOCKED_ENVIRONMENT`
- `PRODUCT_DECISION_REQUIRED`
- `AUTHORITY_CONFLICT`
- `STOP_NOT_ACCEPTED`

The agent must never blur these modes. It must finish and assess a package before generating or executing the next one.

## 3. Required mutable run ledger

Every module Phase G run must maintain a working-repository ledger at:

`docs/<module>/phase-g/00_run_state.md`

The module manifest may override the module path, but not the purpose.

The ledger records at minimum:

- current Phase G stage;
- canonical specification SHA/ref;
- accepted frontend SHA;
- accepted backend SHA;
- working branches;
- last completed artifact;
- last disposition;
- findings still open;
- Product decisions still open;
- authority conflicts still open;
- environment blockers;
- accepted debt;
- next eligible stage;
- next generated prompt artifact/path;
- Stitch eligibility (`YES/NO`);
- deployment/merge status.

The ledger is state, not product authority. Product/domain contracts remain authoritative.

## 4. Phase result contract

Before deciding whether to advance, the Supervisor must normalize the previous package into this result shape:

```text
Stage:
Status: ACCEPTED | ACCEPTED_WITH_DEBT | BLOCKED_ENVIRONMENT | NOT_ACCEPTED
Starting frontend SHA:
Final frontend SHA:
Starting backend SHA:
Final backend SHA:
Findings addressed:
Findings remaining:
Product decisions remaining:
Authority conflicts remaining:
Tests/checks run:
Checks not run:
Environment blockers:
Debt introduced/retained:
Unexpected backend requirement:
Unexpected frontend requirement:
Migration blocker:
Next-stage recommendation:
```

Claims in the summary must be checked against the produced artifact and, where material, repository evidence. A summary alone is not sufficient authority.

## 5. Autonomous advancement algorithm

After every package, run these checks in order.

### Gate A — Baseline integrity

Confirm:

- expected repository/branch/starting SHA was used;
- unrelated source did not enter the work package;
- final SHA exists when a commit is claimed;
- accepted canonical/backend/frontend baselines remain traceable.

If baseline integrity fails: `STOP_NOT_ACCEPTED`.

### Gate B — Scope integrity

Confirm the package stayed inside its stated scope.

A useful fix discovered outside scope may be retained only when it is:

1. required to preserve canonical correctness;
2. minimal;
3. separately documented with pre/post SHA and tests.

Otherwise reject the package or split the change.

### Gate C — Evidence sufficiency

Confirm required checks actually ran. Distinguish:

- source defect;
- test failure;
- environment blocker;
- external/provider blocker.

Never convert an unrun check to PASS.

### Gate D — Product/authority safety

Stop and request Product only when moving forward requires a material decision about:

- lifecycle/state semantics;
- ownership/source of truth;
- financial/commercial policy;
- permissions/privacy policy;
- new canonical field/taxonomy;
- AI/Intelligence calculation or ranking policy;
- destructive migration policy;
- provider product behavior;
- final G2 UX/IA choice when more than one materially different product model remains valid.

Ordinary reversible engineering choices do not require Product escalation.

### Gate E — Root-cause completeness

G1 cannot start while material G0 findings still have:

- `UNKNOWN` canonical owner;
- `UNKNOWN` frontend/backend fix scope;
- unresolved `AUTHORITY_CONFLICT`;
- unbounded legacy authority;
- unclassified migration risk;
- unproven root cause for a P0/P1 finding.

If those remain, generate another focused G0.2 investigation package.

### Gate F — Next-stage eligibility

Advance only when the previous stage exit criteria are satisfied.

## 6. Automatic transition rules

### G0.0 → G0.1

Advance automatically when:

- baselines are verified;
- authority pack is readable;
- no baseline mismatch requires Product intervention.

### G0.1 → G0.2

The agent must inspect the finding register and **generate its own G0.2 investigation clusters**.

Do not assume a fixed number of G0.2 passes.

Cluster findings primarily by shared root cause/ownership, for example:

- access/identity/read integrity;
- domain/cross-module ownership;
- interaction/error/recovery;
- persistence/migration;
- provider/environment boundary;
- compatibility/legacy authority.

Prefer 3–8 materially related findings per investigation package. Avoid one giant G0.2 prompt and avoid one prompt per trivial finding.

### G0.2 → next G0.2 cluster

Advance automatically when the current cluster is complete and other unresolved root-cause clusters remain.

Before generating the next cluster, update findings with confirmed root causes so the next prompt does not reinvestigate resolved issues.

### Final G0.2 → G0.3

Advance automatically when:

- all P0/P1 root causes are proven;
- material Product decisions are either already frozen or explicitly escalated;
- every finding can be assigned a disposition;
- no authority conflict remains hidden.

### G0.3 → G1

G0.3 must produce:

- final authority matrix;
- finding disposition matrix;
- G1 package decomposition;
- package dependency order;
- acceptance gates;
- deferred-owner register;
- migration/compatibility policy.

If no material Product decision remains, the agent may begin the first G1 package automatically.

If an already-existing source correction was discovered during G0 and needs formal acceptance, create a small `G1R` acceptance package before normal G1 implementation.

### G1 package → next G1 package

Advance automatically when the current package is:

- `ACCEPTED`, or
- `ACCEPTED_WITH_DEBT` and the debt does not invalidate the next package.

Every next package starts from the last **accepted** frontend/backend baselines, never from unrelated parallel drift.

If an environment-only blocker prevents runtime smoke but deterministic source/test/build evidence is sufficient for that package, the package may be `ACCEPTED_WITH_DEBT` and source work may continue. Consolidated runtime acceptance remains mandatory before G2.

### Final G1 → consolidated functional acceptance

Before G2, run one consolidated functional acceptance covering the complete module across all G1 packages.

This gate must reconcile accumulated runtime-smoke debt and verify the integrated source set.

### Consolidated G1 → G2

The agent may draft G2 UX/IA artifacts automatically after consolidated functional acceptance.

However **final G2 UX/IA freeze is a Product semantic gate**. The agent must stop for Product approval if the G2 artifact changes information hierarchy, interaction model, user-facing terminology, or state presentation materially.

If G2 only restates an already-frozen approved authority matrix with no new decisions, it may mark the gate `PREVIOUSLY_APPROVED` and proceed only when the module manifest explicitly permits it.

### G2 → G3/G4

Never invoke Stitch or visually replace production UI until G2 is approved.

Stitch remains visual reference only.

### G4 → G5

Proceed when production integration preserves G1 functional acceptance and satisfies the approved G2/G3 composition.

## 7. Prompt self-generation contract

For every next work package, the Supervisor writes a complete executable prompt before switching to Worker mode.

The generated prompt must contain these sections:

1. **Task and exact stage** — one work package only.
2. **Accepted baselines** — canonical, frontend and backend refs/SHAs.
3. **Required reading** — only the minimum sufficient prior artifacts/contracts.
4. **Findings in scope** — exact IDs.
5. **Frozen Product decisions** — copied from accepted authority, not regenerated.
6. **Required investigation/implementation** — explicit expected outcomes.
7. **Non-goals/source boundaries** — what must not change.
8. **Testing/verification** — exact relevant commands/scenarios.
9. **Output artifact** — deterministic path/name and required structure.
10. **Acceptance result** — permitted dispositions.
11. **Stop conditions** — authority/product/environment blockers.
12. **Next-step prohibition** when Product review is required.

The generated prompt must not silently broaden scope to "clean up" adjacent code.

## 8. Prompt generation from previous results

When generating the next prompt:

- carry forward accepted baselines;
- carry forward unresolved debt explicitly;
- remove findings already closed;
- convert confirmed hypotheses into frozen facts only when evidence supports them;
- include only decisions that were actually approved/frozen;
- preserve deferred-owner boundaries;
- preserve environment blockers without repeatedly re-investigating them;
- include regression tests for previously fixed behavior that the new change could regress.

The next prompt should become **shorter and more specific** as Phase G progresses.

## 9. Dynamic G1 decomposition rules

G1 package boundaries should follow ownership and dependency, not screen count.

Good package boundaries usually isolate one of:

- foundation/read contracts;
- lifecycle/capability authority;
- one cross-module ownership cutover;
- one create/edit workflow;
- one operational workspace;
- error/recovery/realtime behavior;
- compatibility/migration cleanup.

Split a package when:

- frontend and backend changes are independently acceptible;
- one subset requires Product policy while the rest does not;
- one subset requires unavailable infrastructure;
- change volume would make regression attribution unclear.

Combine findings when they share the same state/read/capability root cause and would otherwise duplicate changes/tests.

## 10. Environment policy

Environment setup should not block source-only G0 investigation.

The Supervisor may allow deterministic source/test work to continue while local runtime infrastructure is unavailable, provided:

- the work does not depend on live provider semantics;
- unexecuted runtime gates remain explicit debt;
- consolidated functional acceptance will exercise the integrated result before G2.

Do not repeatedly rerun a known sandbox-blocked command when equivalent evidence has already established the blocker. Use a normal host shell when appropriate and record split evidence.

## 11. Provider/deferred-owner policy

If a capability belongs to Meta, Reporting Intelligence, Payments, Collaboration or another external owner:

- preserve the correct boundary;
- implement truthful unavailable/degraded states where in scope;
- do not fabricate data merely to make a UI complete;
- do not block unrelated Phase G work.

## 12. G2/Stitch safety

The Supervisor must keep `Stitch eligibility = NO` until:

1. consolidated G1 functional acceptance is complete;
2. G2 authority matrix exists;
3. Product has approved any new UX/IA decisions.

Stitch may not decide lifecycle, ownership, field semantics, financial behavior, Intelligence, provider behavior or canonical state.

## 13. Mandatory stop conditions

The agent must stop and surface a concise decision request when any of the following is true:

- equal-authority canonical sources materially disagree;
- a new lifecycle or ownership model is required;
- a new financial/commercial rule is required;
- data destruction/backfill policy must be chosen;
- security/privacy behavior is ambiguous;
- a new AI scoring/ranking policy is required;
- G2 presents materially different valid product architectures;
- the requested baseline cannot be verified;
- proceeding would require modifying an explicitly read-only authority outside scope.

A stop response must include:

```text
DECISION REQUIRED
Affected finding(s):
Why engineering evidence cannot resolve it:
Option A:
Option B:
Recommendation (if one is clearly supported):
Work that can continue independently:
```

## 14. Autonomous completion report

When the agent reaches a mandatory Product gate or completes the requested autonomous run, return:

```text
Phase G current stage:
Accepted frontend baseline:
Accepted backend baseline:
Completed artifacts:
Findings closed / total:
Open findings:
Accepted debt:
Environment blockers:
Product decisions required:
Stitch eligibility:
Next recommended stage:
Generated next prompt path/content:
```

## 15. Governing rule

> **Automate the sequencing of evidence-based engineering work; never automate unresolved Product authority.**
