# Brand Payouts V1 Wave B Deep Planning and Dependency Matrix V1

`BRAND_PAYOUTS_V1_WAVE_B_DEEP_PLANNING_AND_DEPENDENCY_MATRIX_V1`

## Status

```text
STATUS = DEEP_PLANNING_COMPLETE
EXECUTION_READINESS_PREFLIGHT = WAITING_ON_UPSTREAM_ACCEPTANCE
P4_P5_SOURCE_WORK = NOT_STARTED
P3A = ACCEPTED_AND_NOT_REOPENED
PROVIDER_ACTIONS = NONE
MIGRATION_AUTHORITY = NONE
```

This plan implements the post-P3A operating amendment at
`634db2b0def32ca3b703fa9806d267b1d89dd7ef`. Deep planning, readiness
preflight and superfast execution are SA-managed stages, not Parent
checkpoints.

## 1. Durable starting point

| Authority/state | Exact identity | Treatment |
|---|---|---|
| Product Authority | `f15a91d0ace8b2c424a539d79dbb120869233105` | Frozen |
| Phase C architecture / finite plan | `3fb6b4246aa5f2ecb71c3bbfe99c56e395f30a92` | Frozen |
| MVP delivery cutline | `9c991a8e8c8dfc90ccc4cf18e48ab1629d5f5b4f` | Frozen |
| Recovery charter | `23a074b01dbca141ddc997113a6ecbbc14e19f82` | Frozen |
| Superfast execution amendment | `634db2b0def32ca3b703fa9806d267b1d89dd7ef` | Active post-P3A packaging authority |
| P3A acceptance ledger | `0f606acafa6d685b477e045114f1af9e0a951f68` | Accepted; never reopen |
| Accepted P3A backend | `12d235345e2748f676d36d61c62ed4bd9c049592` | Port input |
| Accepted P3A frontend | `7c75a4c8f5a0df3a1fb82d2f707b1c6b03d56d2a` | Frozen until Wave C |
| Environment readiness evidence | `fc3187c18e908bee3b41b13a3116ae63037a99ad` | Reuse; revalidate only wave-specific assumptions |

## 2. Exact dependency matrix

| Gate | Required accepted identity | Current exact observation | State / unblock rule |
|---|---|---|---|
| BP-G05 Campaign term correction | Accepted Campaign code, migration, PostgreSQL proof, reconciliation and rollback handoff preserving exact NET_45/NET_60 semantics | Only observed planning/review branch: `campaign/production-integration-review@06b714949b7217f38ec3f69efd1aea1e803ce2cf`; no accepted backend correction branch found | **OPEN_BLOCKING**. Must receive a durable accepted Campaign runtime handoff SHA and migration identity. |
| BP-G06 C03 post-P1.4 backend base | Accepted post-P1.4 C03 backend handoff | Observed candidate `c03/recovery-campaign-participation-v1@aebeb85fd6bba37f88c3805c213c61e7f63b2f5f`; acceptance identity has not been established | **OPEN_BLOCKING**. Candidate status cannot substitute for an accepted handoff. |
| BP-G08 C04 canonical reserve/settlement handoff | Accepted C04 backend implementation/runtime handoff built on the accepted C03 base | Authority package `c04/stage-b-authority-package-v1@de28784662bb92dac6cb927e348f3fc69564af7c`; no C04 backend implementation branch found | **OPEN_BLOCKING**. Must receive exact accepted C04 code and migration SHAs plus runtime contract evidence. |
| BP-G08A convergence | One reconciled backend tree containing accepted C03/C04 plus accepted P3A semantics | Not yet constructible | **IN_WAVE** at BP-P4-BASE; file-by-file reconciliation, not donor merge/rebase/cherry-pick. |
| BP-G10 M1 | Parent approval of exact regenerated M1 against the converged tree | No exact proposal yet; intentionally premature | **PARENT_STOP** after BP-P4-BASE and accepted/applied upstream owner migrations. |
| BP-G04 C05 destination/readiness fence | Exact accepted C05 code/schema/version contract | Accepted runtime identity `156d5834266077be7e2b6a2d459bae5489edbbd6`; exact destination/version fence still requires convergence reconciliation | **READY_WITH_RECONCILIATION** before P5A implementation. |
| BP-G12 RZ-G0 provider-neutral seam | Provider-disabled fail-closed runtime plus deterministic fake boundary | Prepared environment proves the boundary is non-production-selectable | **READY_WITH_RECONCILIATION**; re-prove on the converged backend. |

Wave B source entry requires BP-G05, BP-G06 and BP-G08 to have durable accepted
identities. No P4/P5 source work begins before all three are satisfied.

## 3. Coherent Wave B execution design

### BACKEND-1 — BP-P4-BASE-CONVERGENCE

Create `brand-payouts/v1-backend-convergence` from the accepted C04 canonical
handoff head. Reconcile accepted Brand Payouts P0–P3A semantics file-by-file.
Preserve C04 ownership of commercial/resolution truth and Brand Payouts
ownership of financial approval, reserve execution, due processing and
provider-neutral transfer intake.

Focused gate:

- one co-resident compile/test tree;
- schema diff proving no accepted upstream owner migration was duplicated;
- exact request/instruction/version/hash/economics compatibility;
- Brand/role/cross-Brand boundaries;
- no provider method or network action.

Then regenerate the exact additive M1 proposal from this tree and return only
that proposal to Parent for BP-G10 approval.

### BACKEND-2 — BP-P4A-FIRST-RESERVE

After exact M1 approval, apply only the approved migration and implement the
first reserve approval/execution path.

Immediate focused PostgreSQL proof:

- immutable C04 request/instruction identity and economics snapshot;
- Owner/Finance allow; Campaign Manager and unauthorized deny;
- cross-Brand isolation;
- row locking, lease/claim and retry safety;
- idempotency and at most one successful financial effect;
- shortfall and funding-resume behavior;
- supersession/version/hash mismatch rejection;
- UTC and direct-SQL invariant checks.

Commit and ledger-bind the checkpoint internally; continue without a Parent
return.

### BACKEND-3 — BP-P4B-INSTRUCTION-INTAKE + P5A backend

Implement obligation intake and the provider-neutral normal path together:

- exact payment-term and exceptional-due evidence;
- deterministic obligation idempotency;
- current destination/version/readiness fence;
- India/INR/bank and funding/resolution eligibility;
- durable transfer attempts and typed outcomes;
- deterministic fake with production fail-closed selection;
- settlement recorded exactly once;
- zero provider network and zero provider mutation.

Finish with one full backend suite/build and one migrated disposable-PostgreSQL
normal-path acceptance.

## 4. M1 exact design envelope

M1 is one additive Brand Payouts financial migration, regenerated only after
convergence. It may contain:

- `FinancialReserveApproval` with immutable C04 request/instruction identity,
  Brand/collaboration, version/hash, trusted economics/currency snapshot,
  requester/approver identity and role snapshots, status/version/idempotency,
  execution/failure and ledger links;
- append-only `FinancialReserveExecutionAttempt` with claim/lease,
  normalized outcome/failure and at most one success per instruction;
- obligation provenance and retained exact payment-term/due evidence;
- set-once transfer-attempt destination/provider-neutral milestone fields;
- set-once reconciled receipt identity and dedupe indexes.

No inferred historical backfill, destructive rewrite, provider schema, or
second Brand Payouts migration is authorized. If the converged upstream schema
cannot support this as one safe additive migration, that is Class C.

## 5. Consolidated readiness preflight trigger

When BP-G05, BP-G06 and BP-G08 are accepted, run one readiness assignment that
must produce all of the following before implementation starts:

1. fetch-back verification of every authority/source/migration SHA;
2. clean convergence worktree and exact accepted C04 starting tree;
3. contract map for every identifier, hash, amount, term, due and role field;
4. schema ownership/diff and migration-order proof;
5. reachability for shortfall, resume, stale version, duplicate request,
   concurrency, unauthorized and cross-Brand states;
6. disposable UTC PostgreSQL replay of all accepted upstream migrations;
7. production provider deny guard and non-production-selectable deterministic
   fake;
8. focused command list, evidence-reuse index and terminal gate;
9. clean process/database/container cleanup proof.

Any unreachable required state is repaired or adjudicated before the
implementation runner starts.

## 6. Validation and evidence economy

- Reuse immutable P3A evidence by SHA/hash where the covered source and
  invariant are unaffected; do not rerun P3A.
- During implementation run targeted and affected-module tests.
- At BP-P4-BASE run convergence/contract/security proof only.
- At first reserve run the immediate PostgreSQL concurrency/idempotency and
  financial-safety proof.
- Run the full backend suite/build and migrated PostgreSQL acceptance once,
  after BACKEND-3 stabilizes.
- Produce compact indexes and representative artifacts; do not duplicate
  unchanged packages.
- One coherent backend runner may inspect, implement, correct Class A/B
  defects, add regressions, checkpoint/push and continue. It pauses only for
  exact M1 approval or Class C.

## 7. Model, runner and context routing

- Deep planning: high-reasoning Systems/Backend review; completed directly
  from durable Git evidence, so no separate Codex assignment was necessary.
- Readiness: one consolidated balanced runner after dependencies clear.
- Wave B implementation: one coherent high-reasoning backend runner through
  convergence, M1 pause, reserve and provider-neutral normal path.
- Mechanical tests, evidence and ledger maintenance use balanced/fast routing.
- Git artifacts retain detail; conversational state retains only exact current
  identities and decisions.

This replaces repeated prompt-per-defect assignments, repeated broad suites and
reloading frozen context. It does not reduce any financial, migration,
security, cross-Brand or provider gate.

## 8. Deferred scope

`P3S`, generalized `P4R/P5R`, provider-enabled P6, generalized historical
reconstruction, provider/rail abstractions and production enablement remain
deferred. Wave C and the final joint acceptance begin only after the stabilized
Wave B backend contract exists.

## 9. Next transition

```text
CURRENT_STATE
= P3A_ACCEPTED
+ WAVE_B_DEEP_PLANNING_COMPLETE
+ BP_G05_OPEN
+ BP_G06_OPEN
+ BP_G08_OPEN

NEXT_AUTOMATIC_TRANSITION
= ACCEPTED_BP_G05_BP_G06_BP_G08_IDENTITIES
→ ONE_CONSOLIDATED_WAVE_B_READINESS_PREFLIGHT
→ ONE_COHERENT_WAVE_B_BACKEND_EXECUTION

NEXT_PARENT_RETURN
= EXACT_BP_G10_M1_APPROVAL
  OR_GENUINE_CLASS_C
  OR_UNAVOIDABLE_LOCAL_RUNNER_RELAY
  OR_FINAL_PROVIDER_DISABLED_HANDOFF_READY
```
