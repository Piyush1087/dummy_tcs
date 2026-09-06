# Brand Payouts Recovery Status and MVP Execution Profile V1

`BRAND_PAYOUTS_RECOVERY_STATUS_AND_MVP_EXECUTION_PROFILE_V1`

## Status and authority

```text
STATUS = PROPOSED_FOR_PARENT_BINDING
PRODUCT_ARCHITECTURE_CHANGE = NONE
PROVIDER_DISABLED_MVP_SCOPE_ONLY = YES
```

Controlling inputs:

- recovery charter: `23a074b01dbca141ddc997113a6ecbbc14e19f82`;
- readiness evidence: `fc3187c18e908bee3b41b13a3116ae63037a99ad`;
- replacement-SA initiation: `22f3768fbbf56b0b4b66c8959baffa0d9a126c16`;
- Product Authority: `f15a91d0ace8b2c424a539d79dbb120869233105`;
- Phase C architecture / finite plan: `3fb6b4246aa5f2ecb71c3bbfe99c56e395f30a92`;
- MVP cutline: `9c991a8e8c8dfc90ccc4cf18e48ab1629d5f5b4f`;
- discipline-batched topology: `BRAND_PAYOUTS_DISCIPLINE_BATCHED_EXECUTION_TOPOLOGY_AMENDMENT_V1`.

## Recovered durable state

| Field | Recovered value |
| --- | --- |
| Last accepted checkpoint | `P2 / BP-P2-READ-MODEL` |
| P2 acceptance ledger SHA | `495ae4f977152b49b0504ed11c441aadd4abcc93` |
| Last accepted backend SHA | `119397ff6836ad12846c1e948409d8d49185c408` |
| Last accepted frontend SHA | `ec412013cb7eeaa119a7cded6fb7f5ef0c40df03` |
| Session-start ledger SHA | `fc3187c18e908bee3b41b13a3116ae63037a99ad` |
| Current phase | `P3A pending Return-only V7 proof` |
| Pushed backend candidate | `12d235345e2748f676d36d61c62ed4bd9c049592` / tree `1dd5900068aa7f7fa3aa25dcc0eaef33ee4d7e24` |
| Pushed frontend candidate | `f775d33f729e02c020ced5b0a7ffcc662110db9e` / tree `30001818c07b231529935dedf12ca059be6bd6dc` |
| Latest P3A evidence | V6 at `4c426cda6d7f64e72fe8943de5ec36dcf897cc59` |
| Current blocker/pending proof | `TEST_HARNESS_CONTRACT_GAP`; four Return-only V7 lanes |
| Migrations applied | no Payouts M1/M2; 74 existing migrations only in disposable readiness database |
| Provider actions | none |
| Uncommitted/unproven application work | none observed; P3A candidate remains unaccepted |
| P4 | not started |

### Classification

- **Accepted durable work:** P0, P1 and P2; immutable accepted evidence remains reusable.
- **Pushed candidate work:** P3A backend and frontend heads above.
- **Evidence-only work:** P3A V1–V6 plus recovery readiness.
- **Test-harness work:** authorized external ephemeral V7 DI override only; never deployable or production-selectable.
- **Uncommitted or unproven work:** none; only V7 acceptance proof is pending.
- **Deferred scope:** P3S, generalized P4R/P5R recovery, M2 support, provider-enabled P6, complete-V1 co-residence and production enablement.

The V6 result is not a Product/source failure. Production correctly exposes no Brand Return capability when the provider is disabled. V7 must test deterministic fail-closed submission without changing that production truth.

## Remaining scope and gates

Classification:

- `MVP_LAUNCH_REQUIRED`: close P3A; P4 Base/P4A/P4B/P5A provider-neutral backend; matching frontend; joint provider-disabled handoff.
- `FINANCIAL_SAFETY_REQUIRED`: RBAC/cross-Brand isolation, immutable money lineage, idempotency/concurrency, migration approval, fail-closed provider behavior.
- `UPSTREAM_DEPENDENCY_REQUIRED`: exact Campaign NET terms, accepted C-04 backend/convergence handoff, C-04 financial recovery instruction where required, C-05 destination fence, M1 exact proposal and human approval.
- `DEFERRED_POST_MVP`: all deferred scope listed above and abstractions without a current normal-path consumer.

Open non-delegable gates do not block Wave A. They block Wave B as follows:

| Gate | Status / effect |
| --- | --- |
| C-04 backend settlement handoff and convergence tree | OPEN_BLOCKING for P4/P5 |
| C-04 financial recovery instruction | OPEN_BLOCKING where finite plan requires it |
| Campaign exact NET terms | OPEN_BLOCKING for canonical due/automatic execution |
| M1 financial migration | PROPOSAL_NOT_AUTHORIZED; human approval required before application |
| C-05 destination fence | READY_WITH_RECONCILIATION; exact current version required before P5 |
| India withholding | production-launch human gate, not provider-disabled handoff |
| Provider credentials/actions, production, canonical merges | not authorized |

## Execution waves

### Wave A — close P3A

1. Reverify immutable source pins and V1–V6 index hashes.
2. Reuse all passing source, full-suite, RBAC, migration, Add funds, responsive and accessibility evidence.
3. Run only four Brand Return lanes: PAYOUTS/SETTINGS × Owner/Finance at 390/1440.
4. Use only the already-authorized external ephemeral DI override; retain outbound deny guard.
5. On pass, SA independently reviews, accepts `BP-P3A-OPERATIONS-CUTOVER`, updates the ledger and continues. No Parent return.

No application source change is planned. Ordinary harness/browser defects may be fixed in the same runner without changing production semantics. A Product, financial, RBAC, migration, provider or architecture conflict is Class C.

### Wave B — backend normal path

Start only after Campaign, C-04 and M1 gates are satisfied. One coherent runner implements:

```text
P4 Base -> P4A -> P4B -> P5A backend
```

Push internal commits at each boundary. Use focused contract/security tests throughout; run immediate disposable-PostgreSQL concurrency/idempotency/cross-Brand proof at first reserve; run the full backend suite/build and one migrated PostgreSQL normal-path acceptance once after stabilization.

### Wave C — frontend normal path

After the backend contract stabilizes, implement remaining provider-disabled P4/P5 UI together. Run focused component/contract/accessibility tests during work, then one full frontend suite/build. Perform the deliberate pre-browser interaction sweep, resolve the whole bounded defect set, then run one complete 390/767/768/desktop responsive, role, mode and accessibility matrix.

### Wave D — joint acceptance and handoff

Run one built-stack, authenticated-role, migrated-disposable-PostgreSQL, provider-disabled normal-path acceptance. Produce the developer handoff with exact SHAs, migrations, evidence and deferred gates. Do not label it real-money production-ready.

## Smart-work controls

- One assignment per coherent wave, not per defect/checkpoint.
- The runner may inspect, implement, correct Class A/B defects, add targeted regressions, continue, gate, commit and return once.
- Browser acceptance begins only after route/identifier/capability/flag contracts and state reachability pass.
- Targeted checks during development; broad discipline suite once at stabilization; joint acceptance once.
- Immutable evidence is reused by SHA/hash when source/environment coverage is unaffected.
- Checkpoints are commits/ledger rollback markers, not new approval ceremonies.
- No numeric defect ceiling. Return only for Class C.
- No rework of accepted P0/P1/P2 and no new abstraction without an MVP consumer.
- Detailed prompts/evidence live in Git; conversational context retains only current SHAs, gates and decisions.
- Model routing: balanced implementation/browser model for Wave A and ordinary work; high-reasoning backend/security model only for migration, concurrency, financial and final acceptance.

These controls remove the prior repetition: V7 is four lanes instead of another full P3A matrix; full suites move from checkpoint frequency to once per stable discipline wave; ordinary defects stay in the same execution loop; and unchanged evidence is referenced rather than rebuilt.

## Preflight and reporting

Every wave must prove state reachability, route/identifier/capability/flag alignment, upstream readiness, local runtime/browser capability and reusable evidence before source work or broad browser execution.

Parent contact is limited to Class C gates, an unavoidable local-runner relay, and final handoff. The SA self-reviews technical checkpoints.

## Estimate and token posture

| Wave | Active engineering estimate | Orchestration/token posture |
| --- | ---: | --- |
| A | 1–2 hours | one focused local runner; reuse 373 P3A artifacts |
| B | 2–4 engineering days after gates | one backend runner; internal commits; one full backend gate |
| C | 2–3 engineering days | one frontend runner; one stabilized matrix |
| D | 0.5–1 engineering day | one joint acceptance and compact evidence index |

Estimates exclude waiting for upstream/human gates. Target uncheckpointed active time is at most 90 minutes and 15 production files unless the accepted wave inherently requires more.

## Session 1 recommendation

```text
RECOVERY_AUDIT = COMPLETE
RECOMMENDATION = ACCEPT_PROFILE_AND_BEGIN_WAVE_A
P3A_SOURCE_CORRECTION_PLANNED = NONE
MIGRATION_ACTION = NONE
PROVIDER_ACTION = NONE
```
