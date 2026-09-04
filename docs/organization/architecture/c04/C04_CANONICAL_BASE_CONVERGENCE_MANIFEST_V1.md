# C-04 Canonical Base Convergence Manifest V1

`C04_CANONICAL_BASE_CONVERGENCE_MANIFEST_V1`

Date: 2026-09-04
Status: **ACCEPTED WITH BOUNDED STAGE B CORRECTION**
Operation in this assignment: documentation publication only; no runtime, schema, migration, provider, Stitch, AWS, or production mutation

## 1. Purpose

Define the one future implementation base and the authoritative donor trees required to converge shared Collaboration, C-03, and C-05 without merging incompatible histories blindly or creating duplicate schema/runtime families.

## 2. Verified immutable inputs

| Domain | Repository / branch | Verified remote SHA | Role |
|---|---|---|---|
| Shared Product/architecture | `Piyush1087/dummy_tcs:main` | `7aeb0512cb8270a6bae1169570e82b080f01807e` | Frozen Collaboration authority |
| C-03 Product/architecture | `dummy_tcs:c03/stage-b-architecture-execution-base` | `458875b939b738b8032409b6de72b6de70f53ed1` | Approved Application handoff contract |
| Accepted Collaboration backend | `creator-commerce-backend-v2-clone:collaboration/final-backend-reconciliation` | `13ce652f432560a91dde1f75ca9a21dfa76d054f` | Canonical Collaboration runtime donor |
| Accepted Collaboration frontend | `creator-commerce-frontend-v2-clone:collaboration/frontend-production-reconciliation` | `39510031066c44f20d59d1375c01678f34e585f8` | Canonical shared UI/runtime donor |
| Accepted C-05 backend | `creator-commerce-backend-v2-clone:c05/p3-joint-acceptance` | `156d5834266077be7e2b6a2d459bae5489edbbd6` | Creator subject/Team/contact/payout owner |
| Accepted C-05 frontend/current line | `creator-commerce-frontend-v2-clone:development` | `323658d4b147b95b5629ff8d91fa90b8fe9077e4` | Canonical Creator shell and strongest current Collaboration UX |
| Current backend development | `creator-commerce-backend-v2-clone:development` | `4c5f42858b950b7cd342f8972f99f548f3daa942` | Current C-05/full-history base |
| Current C-03 backend | `creator-commerce-backend-v2-clone:c03/campaign-participation-v1` | `6a2bd2e4b815462abc702dea34f7c368c24a0664` | P0 only; not implementation-ready base |
| Current C-03 frontend | `creator-commerce-frontend-v2-clone:c03/campaign-participation-v1` | `66d6a9bc992afcdfb900d7837defd867670bf640` | P0 only; not final implementation base |
| Phase G frontend | `phase-g/collaboration-g1c-ownership-context` | `353040228dfa20136e82b364ac56556b3b7dd7b5` | Reusable access/recovery/mobile/context evidence |
| Phase G backend | `phase-g/collaboration-g1c-bank-ownership` | `b7c726c8e7fba114ee7a0c2b09aac7aaae698ec5` | Bank-cutover donor; terminal-chat change is not authority |

## 3. Branch topology finding

- Backend `development@4c5f428…` contains C-05 and the complete current migration history but not the accepted canonical Collaboration migration/runtime family.
- Accepted Collaboration backend `13ce652f…` contains the canonical Collaboration family but is not an ancestor of backend `development`.
- Frontend `development@323658d4…` contains the later Phase G/current Collaboration UX and C-05 shell but is not a descendant of accepted Collaboration frontend `39510031…`.
- C-03 currently extends the development lines but has only completed P0 proof.
- `feature/campaign-collab-production-integration@a1ec408…` is documentation-only at its tip and is not a runtime convergence base.

There is currently no single accepted implementation tree containing all three authorities.

## 4. Future canonical implementation base

### 4.1 Backend base

The backend base is:

```text
C03_ACCEPTED_POST_P1_4_BACKEND_SHA
on the current C-03/development lineage
```

It must be an immutable SHA that:

- descends from the C-05/current backend lineage;
- has passed the C-03 Application→Collaboration dependency gate;
- includes the same-transaction trusted provisioning port;
- includes the full current migration history;
- is explicitly accepted by C-03 authority.

The accepted Collaboration backend `13ce652f…` is a **donor**, not the branch base. Its Collaboration code, canonical migrations, tests, and behavior are reconciled file-by-file into the post-P1.4 base under frozen contracts.

### 4.2 Frontend base

The frontend base is:

```text
C03_ACCEPTED_FRONTEND_INTEGRATION_SHA
on the current C-03/development lineage
```

It must retain the C-05 shell and current Creator Collaboration UX. `39510031…` remains the canonical contract/runtime donor; `323658d4…`/Phase G remain the stronger current component, state, mobile, and recovery donors where they do not conflict with frozen shared behavior.

### 4.3 Base-lock rule

The backend and frontend bases lock independently.

The C-04 backend implementation line may be created only when:

1. Parent separately authorizes implementation;
2. `C04_C03_BACKEND_HANDOFF_DEPENDENCY = READY`;
3. the exact immutable accepted post-P1.4 backend SHA is recorded in the C-04 P0 backend preflight ledger; and
4. clean fetch-back, ancestry, same-transaction seam, and acceptance-evidence checks pass.

That gate may unlock P0 backend preflight, P1, P2, P3, P4, and backend-safe portions of P6 without waiting for C-03 frontend completion or module closeout.

The C-04 frontend implementation line may be created only when:

1. Parent separately authorizes implementation;
2. `C04_C03_FRONTEND_BASE_DEPENDENCY = READY`;
3. the C-03 Systems Architect has published and approved an immutable frontend integration base—preferably the accepted C-03 P4/frontend-reconciliation checkpoint unless an earlier safe immutable base is explicitly published; and
4. clean fetch-back and ancestry checks pass.

Before the frontend gate is ready, C-04 may perform read-only state-contract and reuse preparation only. It must not create a competing frontend implementation lineage. P7 requires both accepted C-04 backend and frontend lines.

## 5. Backend convergence inventory

| Area | Base / donor | Future treatment |
|---|---|---|
| Full platform/C-05/C-03 schema history | post-P1.4 C-03 backend base | RETAIN |
| Eight accepted canonical Collaboration migration families | `13ce652f…` | RECONCILE into new forward-only migrations; do not replay conflicting historical folders blindly |
| `src/features/collaboration` canonical services/controller/mapper/tests | `13ce652f…` | PORT + ADAPT to current modules, C-03 port, C-05 actor context, and frozen C-04 deltas |
| Phase G bank removal | `b7c726c8…` | REUSE; retire Collaboration bank writer |
| Phase G ACTIVE-only chat | `b7c726c8…` | DO NOT IMPORT; frozen shared authority permits terminal coordination chat |
| Current C-05 actor resolver/contracts | `156d5834…` / current base | RETAIN + CONSUME; do not fork |
| Current C-05 contact/address service | current base | RETAIN as default owner; read only from C-04 |
| Current C-05 payout/legal models | current base | RETAIN as owner; C-04 reads readiness/reference only |
| C-03 trusted provisioning port | accepted post-P1.4 base | RETAIN exactly; C-04 implements/fulfills the port without a second entry path |
| Legacy Collaboration monolith | current base | COMPATIBILITY reads only, then bounded retirement |
| Legacy profile/bank/shipping endpoints | current/accepted legacy code | REMOVE/410 after consumer inventory and compatibility tests |
| Escrow/Payout/Notifications modules | current base/external owner | CONSUME through explicit ports/events; C-04 accepts provider-neutral trusted execution confirmations only and creates no provider/webhook or payout engine |

## 6. Persistence convergence inventory

### 6.1 Retain

- existing migration history on the accepted post-P1.4 base;
- C-05 Creator workspace/member/contact/legal/payout-destination models;
- C-03 Application/snapshot/event/idempotency/notification models;
- existing platform Escrow/Payout/Notification owners;
- legacy Collaboration rows/messages/evidence for compatibility/history.

### 6.2 Reconcile/add forward-only

- canonical shared Collaboration aggregate models from the accepted donor;
- additive Creator subject/workspace lineage on Collaboration;
- unique `sourceApplicationId` for canonical rows and non-unique Campaign × Creator lookup;
- `AWAITING_CREATOR_PROPOSAL` and canonical `creatorProposedFee`/minimum snapshot fields;
- Creator Team actor audit fields on events/messages and required command evidence;
- one immutable `CollaborationDeliveryDestination` per physical Collaboration;
- delivery destination fulfillment substate/projection;
- exact legacy compatibility discriminator/constraints;
- scheduler/outbox/idempotency fields required by frozen shared behavior.

### 6.3 Retire/contain

- Campaign × Creator unique constraint;
- application-proposed-fee as the new canonical negotiation source;
- Collaboration-owned default bank/address persistence and writers;
- old six-stage/global production/publishing mutation paths on canonical rows;
- ordinary barter/manual-payment and 30/70 assumptions;
- heuristic legacy promotion.

### 6.4 Data rules

- New C-03-sourced rows must have `sourceApplicationId`, `creatorProfileId`, and `creatorWorkspaceId`.
- Exact-provenance legacy rows may be backfilled; ambiguous rows remain compatibility rows.
- No destructive rewrite or drop precedes read parity, endpoint containment, and rollback/restore evidence.
- Address/contact bodies never enter events, notifications, analytics, or logs.
- Migration SQL must be reviewed against production-shaped PostgreSQL and the complete migration graph.

## 7. Frontend convergence inventory

| Area | Primary donor | Treatment |
|---|---|---|
| Creator persistent shell/navigation | `323658d4…` | RETAIN |
| Shared three-pane workspace and mobile flow | current frontend/Phase G | RETAIN + RECONCILE |
| Canonical five-stage contracts/capabilities | `39510031…` | AUTHORITY DONOR |
| Role/deep-link/read-contract/retry/realtime hardening | current frontend/Phase G | REUSE |
| Per-Deliverable production/publishing/settlement/feedback | accepted + current frontend | REUSE |
| First Creator proposal | legacy quote interaction only | NEW canonical state/form over new command |
| Physical destination confirmation | current C-05 contact UI + Aurora | NEW bounded Collaboration card/drawer; no Settings duplication |
| Creator Team capability states | C-05 actor provider + backend actions | ADAPT; Assistant read/chat with mutation controls absent |
| Collaboration bank/default address forms | legacy | RETIRE |
| Terminal read-only chat | later current frontend | RECONCILE to backend capability/frozen terminal chat |
| Context drawers | current frontend + frozen context contract | EXTEND privacy-scoped reads; no Trust inference |
| Collaboration Brief | C-03 renderer primitives/current Aurora | NEW snapshot-only projection/action |

## 8. Canonical module boundaries

```text
C-03 Application approval transaction
        │ trusted port
        ▼
Shared Collaboration aggregate
  ├─ query/read/capability projection
  ├─ negotiation/securement
  ├─ fulfillment/delivery destination
  ├─ per-Deliverable production/publishing
  ├─ resolution/settlement projection
  ├─ messages/events/notifications
  └─ feedback/Brief projection
        │
        ├─ C-05 subject/Team/contact/payout-readiness ports
        ├─ Brand Escrow funding port
        ├─ C-06 provider-neutral trusted confirmation port
        ├─ media/provider reference ports
        └─ notification/realtime projection ports
```

No second Creator Collaboration controller family, aggregate, table family, lifecycle, socket-owned state, payout owner, or address book is permitted.

## 9. Future branch and commit discipline

After implementation authorization only:

1. fetch and verify each accepted immutable base SHA when its separate dependency gate becomes ready;
2. create one C-04 backend execution branch from the accepted post-P1.4 backend SHA without waiting for the frontend gate;
3. create one C-04 frontend execution branch only from the C-03 Systems Architect-approved frontend SHA;
4. record applicable preflight tree/ancestry/migration inventories before changes;
5. execute the finite plan with bounded checkpoint commits;
6. never merge/cherry-pick the accepted Collaboration branches wholesale;
7. reconcile files/contracts deliberately and preserve unrelated current work;
8. publish immutable checkpoint SHAs and fetch them back before acceptance;
9. integrate through ordinary non-force history after both lines pass joint acceptance.

Suggested branch names are planning labels, not branches created by this assignment:

```text
c04/shared-collaboration-backend-v1
c04/shared-collaboration-frontend-v1
```

## 10. P0 base acceptance checklists

### 10.1 Backend gate

- [ ] C-03 post-P1.4 backend SHA accepted and fetched back.
- [ ] Backend base descends from the expected C-05/current development line.
- [ ] Same-transaction Application→Collaboration seam and replay/rollback/concurrency evidence accepted.
- [ ] No dirty working tree or untracked migration exists.
- [ ] Full migration count/order and applied-state evidence recorded.
- [ ] Accepted Collaboration donor trees and tests are available read-only.
- [ ] Path-level collision inventory completed.
- [ ] Legacy endpoint consumers inventoried before removal.
- [ ] Product/cross-contract/architecture/finite-plan artifacts accepted.
- [ ] Parent has changed `C04_IMPLEMENTATION` to `AUTHORIZED`.

Failure stops the backend implementation line, but an unready frontend base alone does not.

### 10.2 Frontend gate

- [ ] C-03 Systems Architect-approved immutable frontend integration base accepted and fetched back.
- [ ] Frontend base descends from the expected C-05/current development line.
- [ ] C-05 shell and C-03 Application→Collaboration navigation/re-entry seams are preserved.
- [ ] Frontend State Family Register and donor/reuse inventory completed read-only.
- [ ] Parent has changed `C04_IMPLEMENTATION` to `AUTHORIZED`.

Failure stops frontend implementation. It does not stop already-eligible backend phases. P7 remains blocked until both C-04 lines are accepted.

## 11. Manifest terminal state

```text
C04_CANONICAL_BASE_STRATEGY = ACCEPTED
C04_BACKEND_BASE = WAITING_FOR_C03_ACCEPTED_POST_P1_4_SHA
C04_FRONTEND_BASE = WAITING_FOR_C03_SYSTEMS_ARCHITECT_APPROVED_FRONTEND_SHA
C04_C03_BACKEND_HANDOFF_DEPENDENCY = IN_PROGRESS
C04_C03_FRONTEND_BASE_DEPENDENCY = IN_PROGRESS
C04_IMPLEMENTATION = NOT_AUTHORIZED
```
