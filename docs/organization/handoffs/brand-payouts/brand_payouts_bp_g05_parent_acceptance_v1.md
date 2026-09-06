# Brand Payouts BP-G05 Parent Acceptance V1

`BRAND_PAYOUTS_BP_G05_PARENT_ACCEPTANCE_V1`

Status: **ACCEPTED — BP-G05 SATISFIED**

## Reviewed authority

- Parent continuity: `26437f6d3fb73dd1b94476967271a992d3f17287`
- Parent unblock instruction: `25855dee32ed8a8365607a822f1805e7991d84fb`
- Repository/branch: `Piyush1087/creator-commerce-backend-v2-clone:campaign/bp-g05-exact-net-terms-persistence`
- Pre-correction: `4c5f42858b950b7cd342f8972f99f548f3daa942`
- Tested backend: `2c390802a4cebd7e6ce5086c7609774b1ff3f3d1`
- Acceptance commit: `7901c7743ac1bb46b6ed4f74b768998dbebd28f4`
- Accepted tree: `d255ebb2c8458326c7d3fb473a325057ccfa5b4f`
- Handoff: `docs/ai-collaboration/campaign-bp-g05-exact-net-terms-persistence-handoff-v1.md`

Remote fetch-back, tree, and linear ancestry match. The accepted delta contains eleven files and no unrelated source family.

## Accepted correction

```text
NET_7 = EXACT
NET_15 = EXACT
NET_30 = EXACT
NET_45 = EXACT
NET_60 = EXACT
```

The additive Prisma enum and exhaustive mapper preserve all five terms. `IMMEDIATE` remains preserved but outside the Brand Payouts normal-term contract. Historical reconciliation changes only relational `NET_30` rows whose immutable canonical Campaign definition explicitly proves `NET_45` or `NET_60`; unknown rows remain unchanged.

## Accepted migrations

- `20260910120000_campaign_bp_g05_extend_payout_terms`
  - SHA-256 `02fb0645cd10f26e1f219a0d36a927475507d3ba4ca7b0a73df4523b0428714e`
- `20260910121000_campaign_bp_g05_reconcile_exact_payout_terms`
  - SHA-256 `6d00cdf0dc80e01d7213c497a758fe3c4b10cdf0c2869f744ba8ec4c036b34a7`

No shared, staging, or production database was accessed or mutated. Acceptance authorizes downstream convergence of these immutable migrations, not production migration or deployment.

Evidence accepted: Prisma generate/validate; 74→76 upgrade; fresh 0→76; clean migration status; focused 22/22; Campaign readiness 28/28; PostgreSQL round trip 6/6; full suite 1,245 passed with zero failures and 610 accepted opt-in skips; build; changed-file lint/type validation; clean fetch-back. Reproduced repository-wide lint/type debt is non-blocking.

## Process variance

```text
VARIANCE = MIGRATIONS_CREATED_BEFORE_REQUIRED_PARENT_APPROVAL_STOP
DISPOSITION = ACCEPTED_POST_HOC_AFTER_EXACT_SQL_HASH_AND_BLAST_RADIUS_REVIEW
```

This is not precedent. Future gated migrations must stop with the exact proposal unless pre-authorized.

## C04 convergence requirement

C04 must reconcile this delta onto accepted C03 backend `aebeb85fd6bba37f88c3805c213c61e7f63b2f5f`, not merge the Campaign branch wholesale, and prove:

```text
fresh converged replay = 0 → 81
exact C03 upgrade = 79 → 81
all 79 C03 checksums unchanged
both Campaign SQL hashes exact
no migration-history/order failure
```

This is a C04 readiness proof and does not keep BP-G05 open.

```text
BP-G05 = SATISFIED
CAMPAIGN_CORRECTION = ACCEPTED
BRAND_PAYOUTS_WAVE_B = STILL_PARKED_ON_BP-G08
```
