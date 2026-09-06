# Brand Payouts — Discipline-Batched Execution Topology Amendment V1

`BRAND_PAYOUTS_DISCIPLINE_BATCHED_EXECUTION_TOPOLOGY_AMENDMENT_V1`

## 1. Purpose and authority

This execution-only amendment applies the Product-directed MVP optimization
after the completed P3A V5 evidence run. It changes execution packaging and
validation cadence. It does not change frozen Product behavior, Phase C
architecture, financial ownership, migration authority, provider authority or
phase semantics.

The following remain controlling:

- Product Authority: `f15a91d0ace8b2c424a539d79dbb120869233105`;
- Phase C architecture/finite plan:
  `3fb6b4246aa5f2ecb71c3bbfe99c56e395f30a92`;
- technical autonomy: `7f03411b9940ab16579cd2e176ac9e721edee832`;
- MVP cutline: `9c991a8e8c8dfc90ccc4cf18e48ab1629d5f5b4f`;
- P3A V5 evidence: `96d202591c6ec0d1343beb549bfbfdec492be7a5`.

## 2. Frozen execution packaging

Vertical phase meaning is preserved. Work is packaged as:

1. focused P3A cutover recovery and acceptance;
2. one backend normal-path wave containing P4 Base, P4A, P4B and the P5A
   backend portion, with internal pushed commits and focused gates;
3. one frontend normal-path wave after the backend contract is stable; and
4. one joint provider-disabled production-shaped acceptance and developer
   handoff wave.

P3S, P4R, P5R, P6 and non-MVP provider work remain deferred by the accepted
MVP cutline. P4 may not begin until its Campaign, C-04 and migration gates are
satisfied. Batching is not authority to bypass a gate.

## 3. Validation cadence

For the remaining P3A correction, immutable V1–V5 evidence may be reused after
hash/source verification. Fresh validation is limited to the changed focus
behavior, representative authenticated role/mode/command/responsive lanes, a
production build and the P3A cutover invariants. The complete historical drawer
matrix is not rerun.

For the backend wave:

- run focused contract/security tests at every internal commit;
- run targeted PostgreSQL concurrency/idempotency proof immediately after the
  first reserve implementation;
- run the full backend suite and one migrated PostgreSQL normal-path gate once
  at the end of the wave.

For the frontend wave:

- run focused component/contract/accessibility tests during implementation;
- run the full frontend suite and production build once after source
  stabilization;
- run the complete responsive/accessibility browser matrix once after the
  frontend wave is stable.

The joint wave performs the single broad integrated normal-path acceptance.
Passing immutable evidence must not be repeatedly relabelled as fresh.

## 4. Internal backend checkpoints

The combined backend runner must still push independently reviewable commits:

- `BACKEND-1`: P4 Base canonical C-04/Payouts convergence;
- `BACKEND-2`: P4A Owner/Finance reserve request/approval/execution path;
- `BACKEND-3`: P4B immutable instruction/due-date/obligation intake plus P5A
  provider-neutral readiness, scheduling and deterministic adapter behavior.

No checkpoint may conceal a failed focused gate. The first reserve retains its
immediate PostgreSQL concurrency, idempotency, cross-Brand and role proof.

## 5. Model routing

Model selection applies at clean task/runner boundaries. A model is not claimed
to have changed inside an already-running cloud task.

| Work class | Default model/effort | Escalate only when |
| --- | --- | --- |
| Evidence indexing, checksum/source verification, ledger maintenance and mechanical documentation | GPT-5.6 Luna, medium | inconsistent history or ambiguous authority is found |
| Focused browser/runtime execution and ordinary frontend implementation | GPT-5.6 Terra, high | a security/financial semantic conflict is found |
| Ordinary provider-neutral backend implementation after contracts are frozen | GPT-5.6 Terra, high | concurrency, money lineage or cross-contract uncertainty remains |
| P4 convergence, financial authorization, idempotency/concurrency design and migration proposal/review | GPT-5.6 Sol, high | max reasoning is needed for a concrete unresolved conflict |
| Final financial/security acceptance or circuit-breaker adjudication | GPT-5.6 Sol, high | a non-delegable architecture/security conflict requires max |
| Exceptional unresolved cross-contract conflict | GPT-5.6 Sol max or GPT-6 Astra high | never for routine implementation or evidence packaging |

Runner prompts should state the recommended model. Where the execution client
cannot change a model mid-run, finish the bounded unit and apply the routing at
the next clean invocation. Lower model cost never relaxes acceptance criteria.

## 6. Gates preserved

The following remain separate and non-delegable where already frozen:

- exact Campaign NET_45/NET_60 correction;
- accepted C-04 settlement/convergence handoff;
- exact M1 regeneration and human migration approval;
- Razorpay RZ-G1 and any later provider authorization;
- production enablement and India withholding authority where applicable; and
- canonical branch merges.

Provider-disabled implementation must stay fail closed. No Razorpay action is
authorized by this amendment.

## 7. Terminal effect

```text
VERTICAL_PHASE_SEMANTICS = PRESERVED
EXECUTION_PACKAGING = DISCIPLINE_BATCHED_WAVES
FULL_SUITE = ONCE_PER_COMPLETED_DISCIPLINE_WAVE
COMPLETE_BROWSER_MATRIX = ONCE_AFTER_FRONTEND_SOURCE_STABILIZES
JOINT_PRODUCTION_SHAPED_ACCEPTANCE = ONCE_AT_NORMAL_PATH_HANDOFF
P3A_RECOVERY = FOCUSED_COMPOSITE_PROOF
P4_DEPENDENCY_GATES = PRESERVED
MIGRATION_AUTHORITY = UNCHANGED
PROVIDER_AUTHORITY = UNCHANGED
```
