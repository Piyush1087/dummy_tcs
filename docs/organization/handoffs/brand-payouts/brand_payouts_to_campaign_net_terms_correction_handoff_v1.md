# Brand Payouts to Campaign Net Terms Correction Handoff V1

Artifact: `BRAND_PAYOUTS_TO_CAMPAIGN_NET_TERMS_CORRECTION_HANDOFF_V1`

Status: `ISSUED_NON_BLOCKING — CAMPAIGN_OWNER_ACCEPTANCE_PENDING`

## Authority and observed defect

- Brand Payouts Product Authority: `f15a91d0ace8b2c424a539d79dbb120869233105`
- Brand Payouts architecture: `3fb6b4246aa5f2ecb71c3bbfe99c56e395f30a92`
- Backend base inspected: `4c5f42858b950b7cd342f8972f99f548f3daa942`

Campaign Product configuration accepts:

```text
NET_7
NET_15
NET_30
NET_45
NET_60
```

The current relational `UcePayoutTerms` enum contains only `IMMEDIATE`, `NET_7`, `NET_15`, and `NET_30`. The current canonical Campaign persistence mapper collapses `NET_45` and `NET_60` to `NET_30`, even though the canonical Campaign JSON retains the selected value.

```text
PRIMARY_OWNER = CAMPAIGN
SECOND_OWNER = C04_SNAPSHOT_RECONCILIATION
PAYOUTS_COMPATIBILITY_ADAPTER = PROHIBITED_FOR_LOSSY_VALUES
```

This handoff is non-blocking for Brand Payouts P0-P2. It blocks canonical due-date and automatic payout execution in P4/P5A. It does not authorize the Payouts program to modify Campaign persistence or create a Campaign migration.

## Required Campaign outcome

1. Add relational support for exact `NET_45` and `NET_60` values.
2. Remove the lossy mapping to `NET_30`.
3. Keep `IMMEDIATE` outside the accepted Brand Payouts normal-term contract.
4. Reconcile historical rows only where immutable canonical Campaign evidence proves the original term.
5. Leave an unproven historical term unknown/legacy-unreconciled; do not infer it from relational NET_30, display copy, or fixed-tranche fields.
6. Publish the exact selected term through the Campaign-to-C-04 contract so C-04 can snapshot it immutably.

## Required acceptance evidence

- exact Campaign authority/base SHA and correction branch;
- additive schema/migration proposal and its separate human acceptance;
- mapper round-trip tests for all five accepted values;
- fresh and upgrade PostgreSQL evidence;
- evidence-only historical reconciliation report showing reconciled and unresolved counts;
- proof that unknown records remain unknown;
- exact C-04 outbound handoff field/value tests;
- clean pushed checkpoint and rollback/compatibility strategy.

No Payouts implementation may compensate for a missing or lossy term. Until the gate closes, affected obligations remain read-only legacy/limited and are ineligible for automatic execution.

## Copy-paste relay prompt

```text
# Campaign Systems Architect — Brand Payouts Net-Term Dependency Intake

Treat the durable artifact:

docs/organization/handoffs/brand-payouts/
brand_payouts_to_campaign_net_terms_correction_handoff_v1.md

from Brand Payouts authority:

Piyush1087/dummy_tcs
brand-payouts/v1-execution-ledger
BP-P0-CONTRACT-BASE checkpoint

as a bounded upstream dependency notice.

Observed defect: Campaign Product accepts NET_45 and NET_60, but current
relational persistence maps both to NET_30.

Required owner: CAMPAIGN.

Required outcome:

- additive relational NET_45/NET_60 support;
- removal of the lossy mapper;
- all-five-term round-trip evidence;
- historical reconciliation only from immutable exact evidence;
- unknown historical terms remain unknown;
- exact term supplied to C-04 for immutable snapshot.

Brand Payouts will not implement a compatibility adapter or infer a term.

Do not implement or migrate solely because of this message unless your existing
Campaign execution authority permits it. Reconcile the dependency into the next
eligible Campaign checkpoint and return ACCEPT, CORRECT, or CONFLICT with the
exact authority/runtime SHA and migration gate status.
```

