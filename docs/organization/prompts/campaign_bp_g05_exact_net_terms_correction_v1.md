# Campaign — BP-G05 Exact Net-Term Correction V1

`CAMPAIGN_BP_G05_EXACT_NET_TERMS_CORRECTION_V1`

Status: **PARENT UPSTREAM UNBLOCK INSTRUCTION — OWNER RETURN REQUIRED**

## 1. Purpose

Clear only Brand Payouts dependency gate `BP-G05`.

This is a bounded correction to the existing Campaign module. It is not a Campaign restart, Product redesign, Payouts implementation task, C04 implementation task, provider task, production deployment, or generalized historical cleanup.

## 2. Durable authority

- Parent continuity authority: `26437f6d3fb73dd1b94476967271a992d3f17287`
- Brand Payouts Product Authority: `f15a91d0ace8b2c424a539d79dbb120869233105`
- Brand Payouts architecture: `3fb6b4246aa5f2ecb71c3bbfe99c56e395f30a92`
- Existing dependency handoff:
  `docs/organization/handoffs/brand-payouts/brand_payouts_to_campaign_net_terms_correction_handoff_v1.md`
- Last revalidated backend `development` head: `4c5f42858b950b7cd342f8972f99f548f3daa942`

Revalidate the Campaign-owned canonical authority, branch, and exact implementation head before relying on the last observed head.

## 3. Frozen correction contract

Campaign Product accepts exactly:

```text
NET_7
NET_15
NET_30
NET_45
NET_60
```

The observed relational contract lacks `NET_45` and `NET_60`, and the observed mapper collapses them to `NET_30`.

Required outcome:

1. relational persistence preserves all five exact values;
2. no mapper collapses `NET_45` or `NET_60`;
3. `IMMEDIATE` remains outside the accepted Brand Payouts normal-term contract;
4. historical correction occurs only where immutable canonical Campaign evidence proves the exact original value;
5. ambiguous relational `NET_30` remains unknown/legacy-unreconciled and is never inferred;
6. the Campaign-to-C04 handoff publishes the exact selected value for immutable snapshotting.

Payouts and C04 must not implement a compatibility workaround for lossy upstream truth.

## 4. Authorized first stage

Run one consolidated Campaign-owned deep-planning and execution-readiness preflight for this correction.

Before source mutation, return the exact:

- canonical Campaign authority and implementation branch/head;
- confirmed AS-IS enum and mapper paths;
- full affected read/write/DTO/test consumer inventory;
- additive Prisma/SQL migration proposal;
- historical evidence source and deterministic reconciled/unresolved count method;
- rollback/forward-correction strategy;
- focused and PostgreSQL acceptance matrix;
- complete blocker set.

If the current canonical tree already preserves all five exact values, publish evidence and propose gate closure without implementing duplicate work.

## 5. Migration gate

Do not create, edit, apply, commit, or push a migration under this instruction.

If an additive migration is required, return the exact proposal for Parent/human approval. After that approval, the Campaign authority may issue one coherent correction execution covering schema, mapper, round-trip tests, fresh and upgrade PostgreSQL proof, historical reconciliation evidence, downstream C04 handoff, fetch-back, clean tree, and final accepted SHA.

Never edit historical migrations. Never infer an exact historical term from relational `NET_30`, copy, tranche fields, or payout behavior.

## 6. Prohibited scope

```text
NO PAYOUTS SOURCE CHANGE
NO C04 SOURCE CHANGE
NO PRODUCT CHANGE
NO PROVIDER ACTION
NO AWS OR PRODUCTION ACTION
NO CANONICAL MERGE OR DEPLOY
NO DESTRUCTIVE OR HEURISTIC MIGRATION
NO MODULE RESTART
```

## 7. Required return

```text
CAMPAIGN_BP_G05_STATUS =
  ALREADY_SATISFIED
  | MIGRATION_APPROVAL_REQUIRED
  | BLOCKED_CONFLICT

CAMPAIGN_AUTHORITY_SHA =
CAMPAIGN_CANONICAL_BRANCH =
CAMPAIGN_CANONICAL_BACKEND_SHA =
AS_IS_DEFECT_CONFIRMED =
EXACT_MIGRATION_PROPOSAL_PATH =
HISTORICAL_RECONCILIATION_POLICY =
COMPLETE_PREFLIGHT_BLOCKER_SET =
NEXT_PARENT_GATE =
```

`BP-G05` remains open until Campaign authority publishes an accepted correction SHA, immutable migration identity, PostgreSQL/runtime proof, and exact downstream handoff.
