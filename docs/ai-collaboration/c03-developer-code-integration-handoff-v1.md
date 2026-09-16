# C-03 Developer Code Integration Handoff V1

`C03_DEVELOPER_CODE_INTEGRATION_HANDOFF_V1`

**Module:** C-03 — Creator Campaign Participation / Apply

## Accepted inputs

| Repository | Accepted branch | Accepted SHA | Accepted tree |
|---|---|---|---|
| `Piyush1087/creator-commerce-backend-v2-clone` | `c03/recovery-campaign-participation-v1` | `aebeb85fd6bba37f88c3805c213c61e7f63b2f5f` | `86c5bb769598dd19a634dcd867350e53eaa06f75` |
| `Piyush1087/creator-commerce-frontend-v2-clone` | `c03/campaign-participation-v1` | `82ed3c9ef849be8353565a1901b6f5fb065c37e1` | `f039d59aef7b0c8dd1fdb6ebb34cda961761c597` |

P7 observed these current development refs:

```text
BACKEND_CURRENT_DEVELOPMENT_SHA = 4c5f42858b950b7cd342f8972f99f548f3daa942
FRONTEND_CURRENT_DEVELOPMENT_SHA = 323658d4b147b95b5629ff8d91fa90b8fe9077e4
```

Those SHAs are also the historical canonical execution bases. In both repositories, current `origin/development` is an ancestor of the accepted C-03 tip:

```text
BACKEND_INTEGRATION_TOPOLOGY = CURRENT_DEVELOPMENT_IS_ANCESTOR_OF_C03
FRONTEND_INTEGRATION_TOPOLOGY = CURRENT_DEVELOPMENT_IS_ANCESTOR_OF_C03
```

Normal non-force PR/merge integration is structurally straightforward at the observed topology. Re-fetch and reclassify immediately before integration because development can advance.

## Non-force integration workflow

Perform the following independently in each repository:

1. Fetch `origin/development` and the accepted C-03 branch.
2. Verify the fetched C-03 tip SHA and tree exactly match the table above.
3. Re-run the two-way ancestry checks between current `origin/development` and the accepted C-03 tip.
4. Create an integration branch from current `origin/development`.
5. Merge the accepted C-03 tip using a normal non-force merge or open a PR from the accepted branch, according to repository policy.
6. Review the full integration diff, migration inventory, and conflicts before publication.
7. Run the post-integration validation below.
8. Publish through the normal protected-branch workflow without force pushing or rewriting candidate history.

If the refs have diverged when integration begins, fetch both refs, create the integration branch from then-current `origin/development`, merge the accepted C-03 tip non-force, resolve every conflict deliberately, and rerun integration validation. Do not reset development, replace it blindly, force push, or rewrite accepted candidate history.

P7 did not perform either integration or conflict resolution.

## Migration handoff

The backend moves from 74 immutable migrations to 79. Apply migrations 75–79 in order:

1. `20260910120000_c03_campaign_asset_brief_convergence`
2. `20260910120500_c03_application_snapshot_foundation`
3. `20260910121000_c03_invitation_ingress_idempotency_events`
4. `20260910121500_c03_integrity_guards_and_legacy_compatibility`
5. `20260910122000_c03_application_handoff_notifications`

Verify the exact 79-file inventory, confirm the first 74 are unchanged, run migration status, and take an environment-appropriate backup/snapshot before deployment. Follow [C-03 Migration and Rollback Notes V1](../organization/architecture/c03/c03_migration_and_rollback_notes_v1.md). Applied migration SQL and `_prisma_migrations` history must not be rewritten or manually deleted.

## Required post-integration validation

Backend:

1. Run `npm ci`.
2. Run Prisma generate and validate.
3. Run migration status and replay/upgrade validation appropriate to the integration environment.
4. Run the full backend suite.
5. Run the required PostgreSQL C-03 lanes.
6. Run the production build and startup smoke.

Frontend:

1. Run `npm ci`.
2. Run typecheck and the full frontend test suite.
3. Run the production build.
4. Run changed-scope lint.
5. Run browser smoke against the integrated backend/configuration.

If a conflict affects C-03 behavior, rerun every affected P6 canonical gate.

## Evidence, debt, and scope

P6 passed 12/12 canonical gates. Evidence is `C03_P6_FINAL_EXECUTION_ROUTE_V7_EVIDENCE.zip`, SHA-256 `78215308571af534653ec71fe63e172584ea80bf4ee3672db8aa3e086354a001`.

Nonblocking inherited debt:

- Frontend full lint: `PASS_WITH_UNCHANGED_BASELINE_DEBT`, exactly 26 errors and 13 warnings, with normalized diagnostics exactly matching the accepted baseline. Do not describe full lint as clean.
- Backend: 6,206 passed and 765 intentionally pending/guarded. The pending tests are neither failures nor ordinary executed passes.
- P14 real-PostgreSQL acceptance used invocation-only `--testTimeout=30000` for the 21-sequential-submit cursor case. No test source or Vitest configuration changed.

Scope exclusions are no AWS or production validation, no live Meta or provider validation, no marketplace implementation, no payout/KYC implementation, and no post-acceptance C04 workflow implementation. These are boundaries, not unresolved C-03 acceptance defects.
