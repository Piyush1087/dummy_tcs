# R2 — Application Approval Atomicity Remediation

Status: implemented in production backend feature branch; runtime verification still pending.

## Production source

Repository: `Piyush1087/creator-commerce-backend-v2-clone`
Branch: `feature/campaign-phase-1-3-be`

Key implementation commits in this remediation sequence:

- `fd7f64f32898c35444dab2b7c17757c1aaddb5f5` — Collaboration provisioning made transaction-aware.
- `237f241a949bc31c9df5d69d4d4d091c90e71e37` — approval path can require a newly-created unique Collaboration rather than silently reusing one.
- `12bbd83a4b8b50700e47fd2ce8b08f41e3ed150e` — Campaign Application approval, sibling supersession, current Campaign/Product/Brief eligibility checks, legacy pipeline compatibility updates, inventory reservation, creator-user resolution, and Collaboration creation moved under one outer Prisma transaction.

## Resulting approval boundary

The canonical approval path now performs these operations as one database transaction:

1. Re-read the Application and require `PENDING`.
2. Require a usable creator identity/email.
3. Validate the current Campaign is operational for Applicant processing (`LIVE` or `PAUSED`).
4. Validate the Application Campaign Asset is still active.
5. Validate the Application Brief is still active and still belongs to that Campaign Asset.
6. Claim the selected Application with a conditional `PENDING -> APPROVED` update.
7. Mark sibling pending Applications for the same CampaignCreator as `SUPERSEDED`.
8. Preserve the transitional UCE pipeline state/audit/performance/inventory effects where a legacy applicant row exists.
9. Resolve/create the creator user using the same transaction client.
10. Create the canonical Collaboration using the same transaction client.
11. Enforce one Collaboration per Campaign + creator; the atomic approval path refuses to reuse an already-existing Collaboration.

If Collaboration creation or any earlier invariant fails, the Application approval and all sibling/legacy/inventory effects roll back with it.

Realtime broadcast remains outside the database transaction because it is an external side effect and must not define transaction success.

## Mirror

The changed Campaign Application service and Collaboration provisioning service are mirrored under `production-integration/backend/**` on this review branch. The mirror is for review only; the production backend feature branch is the runnable authority.

## Pending verification

No runtime/build/CI pass is claimed by this document. Before Phase 1–3 sign-off, run backend typecheck/tests and exercise at least:

- successful approval;
- inactive Product rejection;
- inactive/mismatched Brief rejection;
- duplicate/concurrent approval rejection;
- rollback when Collaboration creation fails;
- sibling Application supersession;
- approval with and without a legacy UCE applicant row.
