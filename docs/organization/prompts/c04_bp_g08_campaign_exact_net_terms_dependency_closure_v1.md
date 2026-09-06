# C04 — BP-G08 Campaign Exact Net-Term Dependency Closure V1

`C04_BP_G08_CAMPAIGN_EXACT_NET_TERMS_DEPENDENCY_CLOSURE_V1`

Status: **PARENT DEPENDENCY UPDATE — BP-G05 SATISFIED**

Follow-up to `docs/organization/prompts/c04_bp_g08_backend_reserve_settlement_handoff_activation_v1.md`. This changes only the Campaign dependency state and does not broaden C04 authority.

## Accepted Campaign authority

```text
BP-G05 = SATISFIED
BRANCH = campaign/bp-g05-exact-net-terms-persistence
TESTED_BACKEND_SHA = 2c390802a4cebd7e6ce5086c7609774b1ff3f3d1
ACCEPTANCE_SHA = 7901c7743ac1bb46b6ed4f74b768998dbebd28f4
ACCEPTED_TREE = d255ebb2c8458326c7d3fb473a325057ccfa5b4f
```

Campaign now persists exact `NET_7/15/30/45/60`. `IMMEDIATE` remains outside the Payouts normal-term contract. C04 may snapshot `UceCampaignCommercials.finalBalanceTerms` after bounded convergence. No inference from legacy copy, tranche fields, fallbacks, or adapters is allowed.

## Immutable migrations

```text
20260910120000_campaign_bp_g05_extend_payout_terms
SHA256 = 02fb0645cd10f26e1f219a0d36a927475507d3ba4ca7b0a73df4523b0428714e

20260910121000_campaign_bp_g05_reconcile_exact_payout_terms
SHA256 = 6d00cdf0dc80e01d7213c497a758fe3c4b10cdf0c2869f744ba8ec4c036b34a7
```

Reconcile onto the accepted C03/C04 base. Do not wholesale-merge the Campaign branch or edit accepted migrations.

## Required migration-graph proof

The C03 base has 79 migrations; Campaign was independently proven from the 74-migration development base. C04 readiness must prove:

```text
fresh 0 → 81 = PASS
exact accepted C03 79 → 81 = PASS
all C03 migration names/checksums unchanged = PASS
Campaign migration hashes exact = PASS
Prisma migrate status = CLEAN
exact-evidence reconciliation = PASS
unknown NET_30 preservation = PASS
```

Any ordering/history conflict is a complete-set readiness blocker, not authority for a workaround.

```text
C04_C03_BACKEND_HANDOFF_DEPENDENCY = READY
BP-G05 = SATISFIED
BP-G08 = OPEN_PENDING_C04_ACCEPTED_RUNTIME_HANDOFF
```

Continue the existing C04 backend readiness lane and return through the original activation contract.
