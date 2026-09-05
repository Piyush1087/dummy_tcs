# Brand Payouts — MVP Delivery Cutline and Post-P2 Execution Authority V1

`BRAND_PAYOUTS_MVP_DELIVERY_CUTLINE_AND_POST_P2_EXECUTION_AUTHORITY_V1`

## 0. Status and effect

**STATUS: AUTHORIZED**

This is a Product/Parent execution amendment for the persistent Brand Payouts Systems Architect.

It supplements the frozen Product Authority, accepted architecture, finite execution plan, and existing technical-autonomy amendments. It does not reopen accepted P0/P1/P2 work or reduce any financial, RBAC, cross-Brand, exact-money, idempotency, one-vault, one-ledger, provider, or migration safety invariant.

This authority takes effect only after:

```text
BP-P2-FIRST-VERTICAL-SLICE = ACCEPTED
```

The commit containing this file is the authoritative instruction SHA. Reverify this file, the execution ledger, and all current repository heads before acting.

---

## 1. Frozen authority

```text
Product Authority
= f15a91d0ace8b2c424a539d79dbb120869233105

Accepted architecture / finite plan
= 3fb6b4246aa5f2ecb71c3bbfe99c56e395f30a92

Execution mode
= HYBRID_RUN

Product stage
= PRE_LAUNCH_MVP
```

Accepted P0/P1/P2 work must not be refactored merely to make the implementation smaller.

---

## 2. Near-term milestone

Freeze the next delivery target as:

```text
BRAND_PAYOUTS_NEAR_TERM_TARGET
= PROVIDER_DISABLED_NORMAL_PATH_HANDOFF
```

This milestone is not equivalent to:

```text
BRAND_PAYOUTS_COMPLETE_V1
BRAND_PAYOUTS_RAZORPAY_TEST_ACCEPTED
BRAND_PAYOUTS_PRODUCTION_ENABLED
```

The handoff must be labelled explicitly incomplete for deferred Support, generalized recovery, and provider-enabled execution.

---

## 3. Critical path after P2

After P2 acceptance, execute only this launch-critical provider-neutral sequence:

```text
P3A — minimal operational-surface cutover
  ↓
P4 BASE — canonical C-04/Payouts convergence
  ↓
P4A — first Owner/Finance reserve path
  ↓
P4B — normal immutable instruction, due-date, and obligation intake
  ↓
P5A — provider-neutral normal payout flow
  ↓
P7 — provider-disabled normal-path acceptance and developer handoff
```

The Systems Architect must continue automatically through each technically eligible phase, self-reviewing and ledger-binding checkpoints, except where a named non-delegable gate remains open.

If C-04, Campaign, C-05, or migration authority is not ready, do not invent compatibility work. Record the exact gate, continue any genuinely non-serializing lane, and wait where necessary.

---

## 4. P3A scope

P3A is a minimal reuse/cutover checkpoint only.

It may:

- expose the already-existing canonical Add funds and Brand Return commands from `/brand/payouts`;
- preserve one pooled vault, one financial ledger, one funding service, and one Brand Return service;
- make Settings a compatibility summary/deep link;
- enforce exactly one active mutation surface;
- add only launch-relevant financial notifications and links;
- retain rollback to the prior Settings surface.

It may not create:

- another vault, ledger, funding service, or Brand Return implementation;
- a new financial mutation model;
- a migration;
- provider execution;
- generalized notification variants unrelated to the normal path.

---

## 5. Deferred from the near-term critical path

Freeze:

```text
P3S_DURABLE_PAYMENT_SUPPORT_CASE
= DEFERRED_FROM_NORMAL_PATH_HANDOFF

P4R_GENERALIZED_FINANCIAL_RECOVERY_INTAKE
= DEFERRED_FROM_NORMAL_PATH_HANDOFF

P5R_GENERALIZED_PARTIAL_FULL_RECOVERY_EXECUTION
= DEFERRED_FROM_NORMAL_PATH_HANDOFF

COMPLETE_V1_CORESIDENCE_ACCEPTANCE
= DEFERRED_FROM_NORMAL_PATH_HANDOFF
```

The corresponding frozen Product Authority remains valid. Deferral is sequencing, not cancellation.

For the near-term milestone, a contextual link to the existing Support/contact experience may be used only when it already exists and can carry safe Creator Shop references without adding new persistence or financial side effects.

Do not apply M2 for the normal-path milestone.

Generalized partial/full post-settlement recovery must not be implemented unless required by an accepted upstream instruction or provider evidence. The normal path must still handle safe failure, retryable failure, ambiguity, and fail-closed behavior.

---

## 6. Razorpay lane

Freeze:

```text
RZ-G1_READ_ONLY_TEST_CAPABILITY_AUDIT
= AUTHORIZED_AS_A_PARALLEL_NON_SERIALIZING_LOCAL_LANE

RZ-G2A / RZ-G2W
= NOT_AUTHORIZED_BY_THIS FILE

RZ-G3_CONTROLLED_TEST_ACTIONS
= NOT_AUTHORIZED

RZ-G4_PRODUCTION_ENABLEMENT
= NOT_AUTHORIZED
```

The Systems Architect may prepare and Git-host the exact local desktop Codex prompt for RZ-G1.

RZ-G1 may inspect only current Test-mode capability/configuration/API evidence and must not create or mutate any Razorpay entity, account, transfer, hold, reversal, refund, webhook, credential, or provider configuration.

RZ-G1 is not on the provider-disabled normal-path critical chain. Its active execution time is tracked separately and may overlap the core run.

---

## 7. MVP proportionality rules

From P3 onward, classify every proposed work item as:

```text
MVP_LAUNCH_REQUIRED
FINANCIAL_SAFETY_REQUIRED
UPSTREAM_DEPENDENCY_REQUIRED
DEFERRED_POST_MVP
```

Implement only the first three categories.

Preserve these priorities:

1. normal payout path before exceptional recovery breadth;
2. one country, one currency, one supported bank rail, one provider target;
3. existing canonical services before new infrastructure;
4. present Product flows before hypothetical historical compatibility;
5. no generalized subsystem without a current MVP consumer.

Do not add another legacy classification, generic port, provider abstraction, state family, notification variant, or compatibility adapter unless a current critical-path consumer or financial-safety invariant requires it.

Unless actual persistent-data counts prove meaningful historical financial records exist, do not expand historical reconstruction or backfill logic. Keep already-accepted legacy-safe display behavior, but do not build more.

Campaign Manager remains fail-closed with zero financial rows until an accepted entity-scope predicate exists. Rich Campaign Manager access must not delay Owner/Finance MVP delivery.

---

## 8. Validation and correction efficiency

For each bounded correction:

- add one targeted regression;
- run focused affected gates immediately;
- run the full repository suite once at the phase checkpoint;
- run the complete browser matrix after source stabilizes;
- rerun a complete matrix only when changed source can materially affect it;
- reuse accepted evidence when the relevant SHA, source, and environment contract are unchanged.

Numeric historical correction counts are telemetry, not automatic Parent-stop triggers.

The Systems Architect may self-authorize and self-accept bounded technical corrections that:

- remain inside frozen Product/architecture scope;
- change no financial or security authority;
- require no schema/migration change;
- require no provider action;
- include a targeted regression;
- remain within the current phase.

Target limits:

```text
MAX_UNCHECKPOINTED_ACTIVE_MINUTES = 90
MAX_PRODUCTION_FILES_PER_PHASE = 15
```

A phase may exceed 15 production files only when the accepted phase inherently requires it and the ledger records why.

If a phase exceeds its active-time estimate by more than 50%, first reduce or defer scope rather than add architecture.

---

## 9. Time budget after P2

All estimates are AI-led active engineering time. They include implementation, tests, builds, disposable PostgreSQL/runtime evidence, reviews, commits, and ledger updates. They exclude waiting for human approval, upstream C-04/Campaign delivery, local-runner relay, or provider access.

```text
PREVIOUS_COMPLETE_PROVIDER_DISABLED_V1_ESTIMATE
= 68–134 active hours

LEAN_POST_P2_NORMAL_PATH_TARGET
= 35–55 active hours

CONTINGENCY_CEILING
= 65 active hours
```

Planning allocation:

| Segment | Target active time |
|---|---:|
| P3A minimal cutover/reuse | 4–8 hours |
| P4 Base + P4A + P4B | 12–22 hours |
| P5A provider-neutral normal flow | 10–16 hours |
| P7 normal-path acceptance/handoff | 5–8 hours |
| Ledger/integration/bounded correction overhead | 4–6 hours |

Expected midpoint reduction versus the complete provider-disabled plan is approximately one half. The cutline is expected to avoid roughly 30–70 active hours before the first developer handoff.

RZ-G1 read-only evidence is not included in the core critical-path estimate because it is a separate non-serializing lane.

---

## 10. Checkpoint autonomy and non-delegable gates

```text
TECHNICAL_CHECKPOINT_REVIEW_OWNER
= SYSTEMS_ARCHITECT

ROUTINE_PARENT_CHECKPOINT_RETURN
= NOT_REQUIRED
```

After a passing technical checkpoint, the Systems Architect must commit, push, bind the ledger, and continue to the next eligible critical-path phase.

Return only for a genuinely non-delegable gate:

- new or changed Product decision;
- material architecture change;
- exact M1 migration approval before creation/application;
- any destructive migration;
- financial/security authority conflict;
- provider mutation or controlled Test action;
- production enablement/deployment;
- canonical merge authorization;
- unresolved upstream contradiction;
- circuit breaker that cannot be corrected within frozen scope.

The first reserve path in disposable PostgreSQL with deterministic/fail-closed provider behavior is a technical checkpoint and may be self-accepted after the exact M1 migration has separately received human approval.

---

## 11. Required milestone return

When the critical path is complete, return:

```text
BRAND_PAYOUTS_PROVIDER_DISABLED_HANDOFF_READY
```

with exact:

- authority and ledger SHAs;
- backend and frontend SHAs;
- accepted migration identities;
- P3A/P4 Base/P4A/P4B/P5A/P7 checkpoint evidence;
- test/build/runtime results;
- provider mode and proof of zero unauthorized provider actions;
- deferred P3S/P4R/P5R/P6/complete-V1 gates;
- C-04/Campaign/C-05 dependency SHAs;
- developer integration instructions.

Do not describe this milestone as production-ready real-money Payouts.

---

## 12. Immediate instruction

Complete and self-accept P2 first.

After P2 acceptance, apply this cutline automatically. Do not return merely to ask whether P3A may begin.

Proceed with the smallest safe normal-path implementation and stop only at a named non-delegable gate or at `BRAND_PAYOUTS_PROVIDER_DISABLED_HANDOFF_READY`.