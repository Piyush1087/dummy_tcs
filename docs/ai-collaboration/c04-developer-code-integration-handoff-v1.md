# C-04 Developer Code Integration Handoff V1

`C04_DEVELOPER_CODE_INTEGRATION_HANDOFF_V1`

**Module:** C-04 — Creator Collaboration

## Accepted candidates

| Repository | Branch | Integration head | Tree | Tested runtime |
|---|---|---|---|---|
| `Piyush1087/creator-commerce-backend-v2-clone` | `c04/shared-collaboration-backend-v1` | `fc4d4b59e2a44d7ddced6bc5dde5119c501ec275` | `083c52dc06c19a23f47491935b472ee5e62bd1c5` | direct parent `373eaa382f555c376df78c0e95c72ff55cc43791`, tree `bd5c3c9570adeeacf2f35df8c4a399637e7bd312` |
| `Piyush1087/creator-commerce-frontend-v2-clone` | `c04/shared-collaboration-frontend-v1` | `106de9988ea2d4bd534205b083f63ae7ecd1878c` | `6481cad5ca026ffeac6010f2e9724a1ee160c201` | same |

The backend head differs from the tested runtime by exactly one documentation file: `docs/C04_BP_G08_BACKEND_HANDOFF_V1.md`.

## Integration topology

At final review:

```text
BACKEND_DEVELOPMENT_SHA = 4c5f42858b950b7cd342f8972f99f548f3daa942
BACKEND_TOPOLOGY = DEVELOPMENT_IS_ANCESTOR_OF_C04

FRONTEND_DEVELOPMENT_SHA = 323658d4b147b95b5629ff8d91fa90b8fe9077e4
FRONTEND_TOPOLOGY = DEVELOPMENT_IS_ANCESTOR_OF_C04
```

Re-fetch immediately before integration. If this topology remains, use the normal protected-branch PR/non-force merge flow. If development has moved or diverged, branch from then-current development, merge the accepted C-04 head non-force, resolve conflicts deliberately, and rerun all affected gates. Never force-push, reset development, rewrite candidate history, or copy donor branches wholesale.

## What the backend handoff contains

- the C-03 same-transaction approved-Application provisioning seam;
- one canonical shared Collaboration aggregate with CreatorProfile/workspace/source-Application lineage;
- first Creator proposal for NEGOTIABLE and preserved FIXED initialization;
- Creator Team actor audit and Owner/Manager/Assistant command policy;
- immutable physical delivery destination and dispatch prerequisite;
- canonical negotiation, securement, fulfillment, per-Deliverable production, publishing/compliance, resolution, settlement and feedback runtime;
- projections, notifications/outbox, socket invalidation, workers, Brief Pack and legacy-writer cutover;
- exact Campaign terms and BP-G08 immutable commercial/reserve/entitlement/recovery authority;
- provider-neutral trusted confirmation consumption without a second payout engine.

## Migration handoff

The candidate has 84 migrations. Apply C-04 migrations 80–84 in order:

1. `20260911120000_c04_shared_collaboration_convergence`
2. `20260911121000_c04_creator_subject_proposal_destination`
3. `20260911122000_c04_integrity_compatibility_async`
4. `20260911123000_c04_bp_g05_extend_exact_payout_terms`
5. `20260911124000_c04_bp_g05_reconcile_exact_payout_terms`

Before deployment, take the environment-appropriate backup/snapshot. Verify the exact 84-directory inventory, confirm migrations 1–79 are unchanged, run migration status, fresh replay and the appropriate upgrade/legacy-shaped validation. Never edit applied SQL or `_prisma_migrations` history. The two exact-term migrations preserve unproven historical `NET_30` and reconcile only immutable canonical-definition evidence for `NET_45`/`NET_60`.

## Required post-integration validation

Backend:

1. locked install, Prisma generate/validate and migration status;
2. fresh 0→84 and current-environment upgrade validation;
3. C-03 Application handoff plus C-04 real-PostgreSQL suites with required executed-count assertions;
4. full backend suite and Brand non-regression;
5. production build/startup and `/health`/root smoke;
6. changed-scope lint/format and authoritative secret scan.

Frontend:

1. locked install, full suite, typecheck and production build;
2. changed-scope lint and normalized full-lint comparison;
3. production-preview browser coverage at desktop, tablet/767–768, 390 and 375;
4. keyboard/focus/accessibility, socket degradation/reconnect, refresh/re-entry and deep links;
5. deterministic Collaboration Brief PDF generation/render/extraction and PII checks.

If backend integration changes no frontend-facing Collaboration DTO/read/action contract, the accepted frontend/browser/PDF evidence remains relevant; otherwise rerun only the affected frontend lanes plus integration smoke.

## Evidence and baseline debt

- Original evidence: `C04_SUPERFAST_EXECUTION_EVIDENCE.zip`, SHA-256 `868e5a93e1e6497a40d6dbdcafd1489e4b8382cf9ddb880d1c7940f43d05da43`.
- Continuation evidence: `C04_BP_G05_BP_G08_CONTINUATION_EVIDENCE.zip`, SHA-256 `6e4c55d6f6879e2c2ff214d343e8ccd9eb2784496452d3e100b42c6e1c79a658`.
- Final backend: 6,233 pass / 771 intentionally guarded.
- Frontend: 976 pass.
- Full frontend lint retains the accepted 26 errors / 13 warnings with no new normalized diagnostic.
- Vite large-chunk and npm `http-proxy` warnings remain inherited nonblocking debt.

## Scope boundaries

C-04 does not own beneficiary/KYC/AML/Tax, reserve approval, funding allocation, financial ledger execution, payout obligation execution, `paymentDueAt`, provider transfer, settlement/reversal execution or reconciliation. No AWS, production, live Meta or live provider validation was performed. These are explicit ownership/environment boundaries, not unresolved C-04 defects.
