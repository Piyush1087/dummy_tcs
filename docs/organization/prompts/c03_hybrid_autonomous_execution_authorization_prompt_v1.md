# C-03 — Hybrid Autonomous Execution Authorization Prompt V1

Use this prompt only after the C-03 Systems Architect audit, architecture freeze, finite execution plan, and execution-base readiness have been accepted by the parent.

---

# C-03 PARENT ORCHESTRATOR — HYBRID AUTONOMOUS EXECUTION AUTHORIZATION

`C03_HYBRID_AUTONOMOUS_EXECUTION_V1`

The following gates are now accepted:

```text
C03_PRODUCT_LOGIC = FROZEN
C03_SYSTEMS_AUDIT = ACCEPTED
C03_ARCHITECTURE = ACCEPTED
C03_FINITE_EXECUTION_PLAN = ACCEPTED
C03_EXECUTION_BASE = READY
```

You are authorized to begin:

```text
C03_HYBRID_AUTONOMOUS_EXECUTION = AUTHORIZED
```

## 1. Operating mode

Continue as the C-03 Systems Architect and retain orchestration authority for the complete finite run.

Use the accepted C-03 execution plan and architecture as authority.

You may autonomously:

- initiate bounded specialist workers;
- initiate bounded Codex runners;
- sequence backend/frontend/UI/security work;
- review worker and runner returns;
- issue bounded correction prompts;
- create checkpoint branches/commits/pushes where authorized by the finite plan;
- update the execution ledger;
- progress through internal checkpoints;
- run acceptance gates;
- prepare developer handoff and closeout.

Do not return to the parent for routine implementation failures or ordinary corrections.

## 2. Parent escalation only for circuit breakers

Stop and return to the parent only if you encounter a defined circuit breaker, including:

- frozen Product contradiction/impossibility;
- unresolved critical cross-contract conflict requiring Product or architecture change;
- destructive/ambiguous data migration;
- accepted C-01/C-05 invariant that would need to be changed rather than consumed;
- security/privacy issue requiring Product decision;
- unexpected canonical-base drift that invalidates the accepted audit/plan;
- unavailable core execution capability;
- need for unauthorized live Meta/provider mutation or identity;
- required expansion into C-04, Marketplace, Payouts, Creator Centre, AWS or unrelated Brand modules.

## 3. Non-negotiable C-03 invariants

Preserve all frozen C-03 Product decisions, including:

- Creator Campaign Opportunity Page is the complete understanding surface;
- canonical `Campaign Asset → Brief` selection;
- commercial visibility uses the Opportunity Access Gate;
- guest/no-Instagram users never receive commercial values;
- ELIGIBLE_ONLY requires backend-confirmed eligibility before commercial values unlock;
- INVITE_ONLY requires valid invitation before commercial values unlock;
- Apply requires the same identity/access hierarchy plus application-level validity;
- NEGOTIABLE Apply does not collect Creator fee proposal;
- initial Creator negotiated amount begins in C-04 after Brand acceptance;
- public ecommerce inventory never gates Apply;
- explicit Submit remains the Application creation command;
- multiple Applications/approved Collaborations follow frozen cardinality;
- Application Brief Pack is generated from immutable Application snapshot;
- C-01 continuation preserves Campaign intent and no auto-Application;
- C-05 actor/subject/team/Instagram authority is reused;
- no Marketplace implementation;
- no post-acceptance Collaboration implementation;
- no AWS/production deployment.

## 4. Execution evidence

Maintain a durable checkpoint ledger containing at minimum:

- exact input/base SHAs;
- worker/runner assignment;
- files changed;
- migrations;
- tests/runtime evidence;
- checkpoint commit SHA;
- acceptance/correction decision;
- open debt/blockers.

Do not silently weaken tests to make a checkpoint pass.

## 5. Terminal target

Continue through the accepted finite plan until either a circuit breaker occurs or the module can return:

```text
PASS — C03_ACCEPTED

BACKEND_RUNTIME_ACCEPTANCE_SHA = <sha>
FRONTEND_RUNTIME_ACCEPTANCE_SHA = <sha>

C03_DEVELOPER_HANDOFF = COMPLETE
C03_MODULE_CLOSEOUT = COMPLETE
```

Do not deploy to AWS or production as part of this authorization.
