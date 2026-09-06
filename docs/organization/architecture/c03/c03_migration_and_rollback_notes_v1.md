# C-03 Migration and Rollback Notes V1

`C03_MIGRATION_AND_ROLLBACK_NOTES_V1`

**Module:** C-03 — Creator Campaign Participation / Apply
**Accepted backend:** `aebeb85fd6bba37f88c3805c213c61e7f63b2f5f`
**Migration rule:** `MIGRATIONS_ARE_FORWARD_HISTORY`

## Inventory

The canonical execution base contains 74 migrations. Those first 74 migration directories and their contents are immutable. The accepted C-03 backend contains exactly 79 migrations and adds only this sequence:

| Number | Migration |
|---:|---|
| 75 | `20260910120000_c03_campaign_asset_brief_convergence` |
| 76 | `20260910120500_c03_application_snapshot_foundation` |
| 77 | `20260910121000_c03_invitation_ingress_idempotency_events` |
| 78 | `20260910121500_c03_integrity_guards_and_legacy_compatibility` |
| 79 | `20260910122000_c03_application_handoff_notifications` |

```text
PRE_C03_MIGRATION_COUNT = 74
FINAL_MIGRATION_COUNT = 79
FINAL_MIGRATION_SHA256 = 69afa7a872131ad6f0ce80b5ba232c1df0a0010589089bae56ec213559d2b255
FINAL_MIGRATION_GIT_BLOB = 49b858278a963b14653e06937c193e8d9bca3236

FRESH_0_TO_79 = PASS
LEGACY_74_TO_79 = PASS
LEGACY_PRESERVATION = PASS
UNEXPECTED_LEGACY_MUTATIONS = 0
```

P7 independently confirmed the 74-to-79 Git inventory, the five added paths, the final Git-content hash/blob, and a fresh local PostgreSQL deployment of all 79 migrations with an up-to-date Prisma migration status.

## Before integration or deployment

1. Verify the accepted backend SHA and tree and the exact 79-directory migration inventory.
2. Confirm the first 74 migration directories are byte-for-byte unchanged from canonical base `4c5f42858b950b7cd342f8972f99f548f3daa942`.
3. Run Prisma migration status against the intended target using approved environment configuration.
4. Take a backup or snapshot appropriate to the target environment and verify its restore procedure.
5. Complete code integration and required post-integration validation before applying the C-03 migration set.

If integration fails before deployment, do not apply the C-03 migration set. Resolve the integration and repeat validation first.

## Forward history and rollback

Applied migrations are forward history. Do not edit historical migration SQL, delete or rewrite applied migration files, or manually delete `_prisma_migrations` rows.

If a failure occurs after migrations are applied, choose the recovery mechanism appropriate to the deployment situation:

- Restore the database from the verified pre-deployment backup or snapshot when the whole deployment must be reversed.
- Publish and apply an explicit forward corrective migration when the deployed history must be preserved and corrected in place.

Coordinate application rollback with database compatibility. Verify migration status and application health after either recovery path. P7 performed no production deployment, production rollback, AWS action, or live provider action.
