# C06 Developer Handoff V1

## Status and integration boundary

```text
IMPLEMENTATION_RESULT = READY_FOR_SA_FINAL_ACCEPTANCE
C06_ACCEPTED = NO — SA FINAL ACCEPTANCE DECISION PENDING
DEPLOYMENT = NOT_PERFORMED
DEVELOPMENT_MERGE = NOT_PERFORMED
```

Backend checkpoint: `071272891041a0cf187f549c3ed82bba5dcbbb79`, tree `dc1c01ec3479fb3f14cb698e1e88aaa56db5ef66`.

Frontend checkpoint: `7f72252fb5cd31f69da9ea59aa9ff81080ac4896`, tree `c066d0ea3d3ce3842e097d385a657050c38d10e6`.

Both checkpoints are on `c06/creator-payouts-provider-disabled-v1`, were pushed normally, fetched back independently, and match their remote SHA and tree exactly.

## Mandatory deletion carry-forward

```text
INTEGRATION REQUIREMENT =
CARRY THE DELETION OF
src/features/creator-payouts/services/creator-payouts.service.ts
INTO development

DO_NOT RESURRECT OR RECOMPOSE THE LEGACY SERVICE
```

The deleted service is dead legacy code and has zero references at the final backend checkpoint. Integration must preserve the canonical C06 projection services and must not rebuild the deleted alternate payout model.

## Required boundaries to preserve

- Keep C06 independent of `CreatorEntryModule` and `CreatorPlatformAccessGuard`; payout access is canonical Creator workspace actor authorization and is not Instagram-capability-gated.
- Preserve `PAYOUT_WORKSPACE_READ`: Owner and Manager allowed, Assistant denied.
- Preserve GET-only, read-only, creator-scoped, actor-aware, fixed-as-of behavior.
- Preserve the provider-disabled treatment and zero provider/network actions.
- Preserve C05 as the payout-destination mutation authority and retain only the narrow safe summary read boundary.
- Carry no migration for C06. The final inventory is 86, C06 owns 0, and migration 86 retains SHA-256 `887e5bb6bd262a4dd02e42a798db55bd136d97bf6a923df7e6466573f11d1f84`.
- Do not introduce a second ledger, financial hash, due-date calculator, provider engine, or persistence model.
- Preserve the two explicit 30000ms timeouts in `application-contract.test.ts` and `creator-brief-pack.test.ts`; they bound stable loopback HTTP tests and do not change runtime behavior.

## Validation handoff

Final evidence records passing PostgreSQL 16 UTC financial-source tests, backend and frontend focused and full suites, production builds, backend startup/API smoke, browser widths 390/767/768/1440, keyboard drawer/focus behavior, Axe serious 0 / critical 0, changed-scope lint, and secret/PII/provider deny scans.

The historical P0 and P6 circuit-breaker evidence must remain in history. Those failures were resolved by separately authorized recovery runs and must not be rewritten or deleted.

Only the C06 Systems Architect may issue final acceptance or authorize downstream integration.
