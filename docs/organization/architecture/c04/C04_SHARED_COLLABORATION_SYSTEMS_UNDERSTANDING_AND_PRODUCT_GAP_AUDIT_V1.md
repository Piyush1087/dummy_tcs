# C04 Shared Collaboration Systems Understanding and Product Gap Audit V1

`C04_SHARED_COLLABORATION_SYSTEMS_UNDERSTANDING_AND_PRODUCT_GAP_AUDIT_V1`

Audit date: 2026-09-04
Worker: C-04 Systems Architect AI Worker
Disposition: **ACCEPTED BY PARENT**
Scope: read-only audit and durable documentation. No runtime, schema, migration, branch, provider, infrastructure, Stitch, or production-data mutation was performed.

## Post-audit acceptance and supersession notice

Parent accepted this audit through `C04_PARENT_AUDIT_ACCEPTANCE_AND_PRODUCT_FREEZE_V1` and froze both candidate Product decisions in `C04_PRODUCT_DECISION_REGISTER_V1`. The later `C04_STAGE_B_DEPENDENCY_AND_EXTERNAL_BOUNDARY_CORRECTION_V1` did not reopen Product or audit findings; it corrected the execution topology by splitting the C-03 backend handoff dependency from the C-03 frontend base dependency and clarified that C-04 consumes provider-neutral trusted execution confirmations while C-06/Escrow/Payout owns provider execution and provider webhook authentication.

The original Parent-review return state at the end of this document is preserved as the historical state returned by the audit. It is superseded for current program status by the accepted/corrected C-04 authority package.

## Executive determination

C-04 is an extension of the frozen shared Brand + Creator Collaboration domain, not a new Creator Collaboration engine. The accepted shared contracts already freeze almost all lifecycle, commercial, fulfillment, production, publishing, settlement, feedback, persistence, re-entry, and realtime semantics. The accepted runtimes implement most of those semantics for both actor classes, but they predate two binding upstream changes:

1. C-03 now creates a NEGOTIABLE Collaboration with no Creator amount and requires the first C-04 Negotiation command to supply that amount.
2. C-05 makes a Creator profile/workspace the durable subject and a Team member the actor; the accepted Collaboration runtime still equates the Creator with one user and still exposes Collaboration-owned bank/shipping writers.

The smallest defensible Product Decision Register has **two** entries:

- the C-04 Creator Team command-capability policy; and
- the physical-fulfillment destination confirmation/snapshot policy.

Everything else found is already frozen, a projection choice, architecture work, an implementation gap, legacy behavior to retire, or work explicitly owned by C-03/C-05/C-06.

## Audit method and authority precedence

The audit used repository trees at exact fetched remote heads, contract-to-code tracing, branch-history comparison, schema/migration inspection, frontend route/component/API tracing, and accepted audit/test evidence. Dependencies were not installed in the audit worktrees, so no fresh runtime test suite was executed; this report distinguishes source inspection from previously accepted test evidence.

Precedence applied:

1. explicit Parent/Product instruction in the C-04 initiation;
2. frozen shared Collaboration contracts and their later frozen financial/execution overlays;
3. accepted C-03 and C-05 Product/architecture authority at their stated boundaries;
4. accepted Collaboration backend/frontend runtime as implementation evidence;
5. current production-line frontend and accepted Phase G artifacts as reuse evidence;
6. historical Creator implementations, product documents, and Stitch references as learning evidence only.

Legacy behavior never overrides a higher layer. A later implementation change without higher Product authority is treated as drift, not an implicit Product re-freeze.

---

## 1. `verified_repository_heads`

Remote heads were verified after fetch. The three mandatory authority heads exactly match the expected SHAs.

| Repository | Remote branch / checkpoint | Verified SHA | Audit use | Result |
|---|---|---|---|---|
| `Piyush1087/dummy_tcs` | `main` | `7aeb0512cb8270a6bae1169570e82b080f01807e` | Organization and shared Collaboration authority | VERIFIED |
| `Piyush1087/dummy_tcs` | `c03/stage-b-architecture-execution-base` | `458875b939b738b8032409b6de72b6de70f53ed1` | Accepted C-03 Product/architecture handoff | **VERIFIED EXACT** |
| `Piyush1087/creator-commerce-backend-v2-clone` | `collaboration/final-backend-reconciliation` | `13ce652f432560a91dde1f75ca9a21dfa76d054f` | Accepted shared Collaboration backend runtime | **VERIFIED EXACT** |
| `Piyush1087/creator-commerce-frontend-v2-clone` | `collaboration/frontend-production-reconciliation` | `39510031066c44f20d59d1375c01678f34e585f8` | Accepted shared Collaboration frontend runtime | **VERIFIED EXACT** |
| Backend | `development` | `4c5f42858b950b7cd342f8972f99f548f3daa942` | Current integrated C-05 line / current baseline | VERIFIED |
| Frontend | `development` | `323658d4b147b95b5629ff8d91fa90b8fe9077e4` | Current production-line Creator shell and Collaboration UX | VERIFIED |
| Backend | `c05/p3-joint-acceptance` | `156d5834266077be7e2b6a2d459bae5489edbbd6` | Accepted C-05 backend runtime | VERIFIED |
| Frontend | `c05/p3-joint-acceptance` | `323658d4b147b95b5629ff8d91fa90b8fe9077e4` | Accepted C-05 frontend runtime | VERIFIED |
| Backend | `c03/campaign-participation-v1` | `6a2bd2e4b815462abc702dea34f7c368c24a0664` | Current C-03 execution line | VERIFIED; P0 proof only |
| Frontend | `c03/campaign-participation-v1` | `66d6a9bc992afcdfb900d7837defd867670bf640` | Current C-03 execution line | VERIFIED; P0 proof only |
| Frontend | `phase-g/collaboration-g1c-ownership-context` | `353040228dfa20136e82b364ac56556b3b7dd7b5` | Accepted historical Phase G G1/G2 evidence | VERIFIED |
| Backend | `phase-g/collaboration-g1c-bank-ownership` | `b7c726c8e7fba114ee7a0c2b09aac7aaae698ec5` | Post-frozen remediation evidence | VERIFIED |
| Backend | `feature/campaign-collab-production-integration` | `a1ec408e3f78e035096a31d43482cae525a9f94b` | Historical integration reference | VERIFIED; tip adds documentation only |

Repository topology finding:

- backend `development` is not a descendant of accepted Collaboration SHA `13ce652f…`; it contains C-05 but retains the old Collaboration persistence/runtime family;
- frontend `development` is not a descendant of accepted frontend SHA `39510031…`; it does contain the later Phase G/current Collaboration implementation by a separate lineage;
- the current C-03 branches are based on the C-05/current development lines and contain P0 repository/integration proof only, not P1.4 Application-to-Collaboration provisioning;
- therefore no reviewed branch currently combines accepted shared Collaboration, accepted C-05, and the accepted C-03 runtime seam.

Audit worktrees used for exact-head inspection were detached and clean. No audited branch was merged, rebased, or cherry-picked.

## 2. `authority_document_map`

### Organizational authority

| Document | Governs this audit |
|---|---|
| `docs/organization/charters/systems_architect_ai_worker_charter.md` | Authority reconciliation, Product-gap minimization, architecture gate discipline, permanent frontend decision ladder |
| `docs/organization/charters/browser_ai_worker_codex_runner_operating_standard.md` | Read-only browser/repository operating discipline and evidence handling |
| `docs/organization/charters/frontend_ai_worker_charter.md` | State-family-first frontend preparation and production reconciliation |
| `docs/organization/charters/ui_ux_design_ai_worker_charter.md` | UI/UX and Stitch are bounded exception paths after reuse/Aurora evaluation |
| `docs/engineering/ai-engineering-standard.md`, `frontend.md`, `backend.md`, `database.md`, `validation.md` | Repository, contract, persistence, validation, and acceptance standards |

### Frozen shared Collaboration authority

| Document | Authority carried forward |
|---|---|
| `collaboration/README.md` | Canonical package order, shared-domain intent, frozen overlays, no parallel aggregate |
| `collaboration/finalization_review.md` | Final contract completeness review |
| `collaboration/developer_handoff_manifest.md` | Production migration target and implementation constraints |
| `collaboration/contracts/collaboration_domain_contract.md` | Aggregate identity, source lineage, snapshot, lifecycle/stage separation, actor classes, subordinate chat |
| `collaboration/contracts/collaboration_runtime_contract.md` | Transactional commands, stale-state/idempotency, terminal behavior, projections |
| `collaboration/contracts/collaboration_workflow_state_contract.md` | Five-stage workflow and stage/substate transitions |
| `collaboration/contracts/collaboration_commercial_resolution_contract.md` | Negotiation, securement, entitlement, exit, refund, completion boundaries |
| `collaboration/contracts/collaboration_integration_contract.md` | Application, Campaign, Escrow, Payout, notifications, event, and provider boundaries |
| `collaboration/backend/collaboration_schema.prisma` | Frozen canonical persistence model |
| `collaboration/backend/command_contract.md` | Action-specific command surface; no generic state setter |
| `collaboration/backend/read_model_contract.md` | Server-derived role projections and durable rehydration |
| `collaboration/backend/implementation_map.md` | RETAIN/ADAPT/SPLIT/RETIRE/MOVE/NEW map into production |
| `collaboration/backend/schema_reconciliation.md` | Legacy-to-canonical persistence transition |
| `collaboration/backend/financial_boundary_reconciliation.md` | Creator fee vs Brand reserve and India commission/GST |
| `collaboration/backend/financial_schema_delta.md` | Commercial-reserve persistence overlay |
| `collaboration/backend/financial_contract_reconciliation.md` | Escrow/Payout boundary reconciliation |
| `collaboration/backend/execution_open_decision_freeze.md` | Publishing applicability, auto-approval authorization, exit reasons, support `OTHER` |
| `frontend/collaboration/{state_map,interaction_map,ui_domain_mapping,implementation_map,copy_contract,creator_context_contract,realtime_hydration_contract}.md` | Shared Brand/Creator UX, UI state, copy, context, recovery, and realtime contracts |
| `collaboration/phase_g/agent_context_manifest.md` | Mandatory two-actor production audit and runtime evidence discipline |

The financial and execution overlays supersede older wording in base artifacts where explicitly stated.

### C-03 upstream authority

At `dummy_tcs@458875b…`:

- `docs/organization/architecture/c03/c03_architecture_freeze_v1.md`
- `docs/organization/architecture/c03/c03_cross_contract_reconciliation_v1.md`
- `docs/organization/architecture/c03/c03_finite_execution_plan_v1.md`

These freeze source-Application uniqueness, immutable snapshot input, same-transaction approval/provisioning, FIXED/NEGOTIABLE initialization, multiplicity, and the C-03/C-04 Brief distinction.

### C-05 shared Creator authority

Accepted runtime and closeout evidence:

- `docs/ai-collaboration/c05-developer-code-integration-handoff-v1.md`
- `docs/ai-collaboration/c05-execution-ledger-v1.yaml`
- `docs/ai-collaboration/c05-module-closeout-v1.md`
- accepted backend/frontend trees at `156d5834…` / `323658d4…`

These freeze Creator subject vs Team actor, membership roles, persistent shell, canonical contact/address, provider continuity, legal/profile ownership, and provider-neutral payout-destination ownership.

### Campaign and legacy evidence

| Evidence | Use |
|---|---|
| `campaign/create_campaign/field_object_contract.yaml` | Frozen `FIXED|NEGOTIABLE`; NEGOTIABLE amount is a minimum advertised payout; Collaboration owns final negotiated payout |
| `docs/collaboration/product-docs/Creator- Collaboration Workflow.md` | Detailed legacy Creator workflow and content evidence only |
| `docs/collaboration/IMPLEMENTATION.md` | Legacy route/API/Stitch index and six-stage implementation history |
| `docs/ai-collaboration/2026-06-04-collaboration-frontend-intake.md` | Aurora port rules and recorded Stitch sources |
| `docs/collaboration/phase-g/*` | Later state/interaction/mobile/recovery evidence; subordinate to frozen shared contracts |

## 3. `accepted_brand_collaboration_authority_map`

The following are already frozen shared Brand + Creator semantics and must not be reopened merely because Creator legacy differs.

| Area | Frozen shared authority |
|---|---|
| Aggregate identity | One Collaboration is sourced by one approved Application. `sourceApplicationId` is immutable and unique for canonical rows. Campaign × Creator is not unique. |
| Lineage | Retain Application, Campaign, Creator, Brand, Asset, Brief, and Deliverable lineage. Later live Campaign edits do not change active obligations. |
| Execution snapshot | Collaboration owns a locked execution snapshot of agreed Campaign/Asset/Brief/Deliverables, rights, support, commercial basis, and relevant party context. |
| Lifecycle | `ACTIVE`, `PAUSED`, `COMPLETED`, `CANCELLED`, `TERMINATED`; lifecycle is separate from workflow. `PAUSED` is reserved/unassigned, not a generic error state. |
| Workflow | `NEGOTIATION → SECUREMENT → FULFILLMENT → PRODUCTION → PUBLISHING_SETTLEMENT`. Feedback is post-completion, not Stage 6. |
| Actor classes | Domain actors are `BRAND`, `CREATOR`, `SYSTEM`, `ADMIN`; individual Team-role authorization is an upstream/consumer policy seam, not another lifecycle. |
| Commands | Action-specific commands with authorization, state/prerequisite validation, idempotency, optimistic/stale-state protection, atomic state + event persistence. No client-set stage/lifecycle endpoint. |
| Read model | Backend derives `stage`, `status`, `actionRequiredBy`, and `availableActions`; frontend renders capabilities and never reconstructs workflow from chat. |
| FIXED | The locked fixed amount can seed agreed terms and bypass interactive negotiation into Securement. |
| NEGOTIABLE | One Creator proposal, Brand accept or one counter, Creator accept/decline; final agreement locks before Securement. C-03 now supplies no initial proposal. |
| Commercial floor | Campaign NEGOTIABLE offer is the minimum advertised Creator payout; C-04 negotiation must not settle below it. |
| Reserve | Brand secures the full commercial reserve. In India this is Creator fee + 7% platform commission + 18% GST on that commission. Gateway/card charges sit outside the reserve. |
| Payment modes | Platform escrow is active. Manual payment is dormant/internal and not advertised to ordinary MVP actors. Barter is retired. |
| Fulfillment | Applicability/type comes from locked Brand Support (`PRODUCT`, `SERVICE`, `EXPERIENCE`, `ACCESS_SUBSCRIPTION`, `OTHER`), never Brand industry. One remediation is allowed; a second issue hard-stops with zero Creator entitlement and full Brand commercial refund. |
| Production | One execution per required Deliverable, append-oriented versions, at most two revision requests / three submissions, and 72-hour stale-safe SYSTEM auto-approval. |
| Publishing applicability | Explicit per locked Brief Deliverable; never inferred from Campaign objective or media type. |
| Publishing authorization | Brand approval of a publishing-required Deliverable authorizes publishing. SYSTEM auto-approval does not; Brand must explicitly authorize or decline, with no timer. |
| Compliance | Per-Deliverable evidence and correction history. Compliance corrections do not consume production revision allowance. |
| Resolution | Actor, reason, ended-from stage, financial entitlement, residual obligations, and settlement state survive terminal lifecycle. |
| Settlement | Collaboration decides entitlement; Escrow/Payout systems move money. Eligibility is not payment. Completion waits for authoritative required payment/refund confirmations, except valid zero-cash completion. |
| Feedback | Opens after `COMPLETED`; double-blind; revealed when both submit or at the 48-hour deadline. |
| Chat/events | Human chat is persisted communication only. Consequential transitions append canonical events and may project system messages. Frozen implementation authority permits post-terminal chat for residual coordination; historical messages remain readable. |
| Realtime | HTTP/persisted reads reconstruct truth. WebSocket events are invalidation/refetch hints, never workflow state. |
| Context | Read-only counterpart drawer. Brand sees current Creator and same-Brand relationship history only; Creator gets lighter Brand/Campaign/Asset/Brief/current-state context. |
| Documents | C-03 Application Brief Pack describes what was applied to. C-04 Collaboration Brief describes what was agreed to execute from the locked Collaboration snapshot. It is not automatically a legal agreement or payout document. |

## 4. `accepted_brand_backend_runtime_map`

Reference: backend `collaboration/final-backend-reconciliation@13ce652f…`.

| Runtime area | Main production path | What is correctly implemented | Reconciliation / gap |
|---|---|---|---|
| Access/list/detail | `src/features/collaboration/services/{collaboration-access,collaboration-query}.service.ts` | Brand organization scoping, direct Creator scoping, not-found behavior, canonical/legacy projection, persisted inbox/detail reads | Creator authorization is `creatorUserId === user.id`; it does not resolve C-05 subject + Team actor |
| Projection | `utils/collaboration-thread.mapper.ts` | Server-derived stage/status/action owner/capabilities; per-Deliverable actions; legacy compatibility discriminator | Needs `AWAITING_CREATOR_PROPOSAL` and Team-role capability filtering |
| Provisioning | `services/collaboration-provision.service.ts` | Canonical snapshot/commercial/fulfillment/deliverable/event initialization; unique `sourceApplicationId` in schema | Loads mutable current relations, accepts caller applicability, seeds Application proposed fee, may fabricate a user/profile, runs outside C-03 approval transaction, and does not return replay as `{created:false}` |
| Negotiation | `services/collaboration-negotiation.service.ts` | Brand accept/counter/decline and Creator accept-counter/decline; one-counter state guards | No first Creator proposal command/substate; accepted schema validates non-negative amounts but not the Campaign minimum floor |
| Securement | `services/collaboration-securement.service.ts`, funding gateway | Brand escrow request, processing, idempotent callback boundary, full-reserve model | External funding adapter remains a downstream integration; some older copy conflates Creator fee with reserve |
| Fulfillment | `services/collaboration-fulfillment.service.ts` | Support-derived types, evidence, Creator confirmation/issue, one remediation, second-issue hard stop | No C-05 destination-consumption contract; accepted UI used a hard-coded issue code in one path |
| Production | `services/collaboration-production.service.ts` | Per-Deliverable submissions, version history, two revisions, final rejection, aggregate progression | Timer method exists but no accepted scheduler/worker wiring was found |
| Publishing | `services/collaboration-publishing.service.ts` | Per-Deliverable authorization, decline, evidence, correction, verification; explicit treatment of SYSTEM auto-approval | Correctly supersedes older “auto-approved may publish/skip” wording |
| Exceptions | `services/collaboration-exception.service.ts` | Brand end, Creator cancel, hard-stop and financial-resolution policy with residual settlement | Capability/service authorization must be reconciled with Team actor policy |
| Settlement | `services/collaboration-settlement.service.ts`, settlement gateway | Entitlement vs execution legs, callbacks, residual state, completion only after required confirmations | No ordinary public settlement mutation, correctly; C-06/provider adapter and worker ownership remain external |
| Feedback | `services/collaboration-feedback.service.ts` | Post-completion single submission per actor class and double-blind reveal model | Deadline reveal method exists but no accepted scheduler/worker wiring was found |
| Messages | controller + query/service + `CollaborationMessage` | Persisted USER/SYSTEM kinds, unread/last-message projections, realtime emission; post-terminal chat capability matches frozen map | Most canonical workflow commands append `CollaborationEvent` but do not consistently create optional SYSTEM-message projections |
| Realtime | `collaboration.gateway.ts`, `collaboration-realtime.service.ts` | Room invalidation for thread, Brand organization users, and direct Creator user | Creator Team membership fan-out is absent; no durable notification/outbox substitute |
| Creator profile utility | `services/collaboration-creator-profile.service.ts` | Historical profile/bank/shipping compatibility | Creates/writes Creator profile, verifies bank syntactically, and owns shipping; conflicts with C-05 and must be cut over |
| Compatibility endpoints | controller + legacy `collaboration.service.ts` | Canonical rows are guarded away from old global logistics/media/finalization mutations | Legacy profile writers are not row-scoped and remain hazardous until removed/410ed |

Accepted source/test evidence covers canonical financial calculation, commercial commands, fulfillment, per-Deliverable production, auto-approval, publishing, exception resolution, settlement, feedback, and final reconciliation. This audit did not rerun those tests because dependencies were absent from the detached audit worktree.

## 5. `accepted_brand_frontend_runtime_map`

Reference: frontend `collaboration/frontend-production-reconciliation@39510031…`.

| Surface | Correct accepted behavior | Gap / later reusable evidence |
|---|---|---|
| Routes | Shared workspace mounted under Brand and Creator routes | Accepted snapshot lacked the later strict opposite-role/unresolved-role guard |
| Desktop shell | Three-pane inbox / chat / execution workspace using Aurora-compatible primitives | Reuse; current production line improves hierarchy and density |
| Mobile | Inbox → Chat → Execution step flow | Accepted snapshot lacks the later persistent Creator bottom navigation and fuller mobile recovery |
| Hydration | HTTP list/detail/messages first; socket invalidation triggers refetch; reconnect/stale recovery | Reuse; later Phase G adds explicit Refresh and pane-local recovery |
| Negotiation | Brand accept/counter/decline; Creator accept-counter/decline from server capabilities | No first Creator proposal form or API |
| Securement | Brand funding action; Creator status; payout-details link routes to Creator Settings | Reuse boundary; do not restore Collaboration bank form |
| Fulfillment | Brand evidence, Creator confirmation/issue, Brand remediation | Issue entry was partially taxonomy/hard-code driven; later description-first UI is better evidence |
| Production | Per-Deliverable submission, review, revisions, history, final rejection | Reuse |
| Publishing/compliance | Authorization, decline, evidence, correction, verification per Deliverable | Reuse |
| Settlement/resolution | Displays entitlement and payment-leg status without pretending eligibility means paid | Reuse |
| Completion/feedback | Post-completion double-blind feedback UI | Reuse; scheduler remains backend concern |
| Creator cancellation | API and capability mapping exist | Accepted snapshot did not expose the action; later `CreatorCancellationCard` is reusable |
| Context | Basic drawer from already-hydrated detail | Missing dedicated Brand→Creator same-Brand relationship history and some frozen factual fields |
| Failure/read integrity | Basic load/action/realtime states | Later Phase G adds Zod response validation, invalid-deep-link handling, contract-failure states, and independent retry |
| Creator-owned data | Accepted client still contains a Collaboration bank writer | Later current line removes it and links to C-05 Settings; shipping ownership still needs reconciliation |

The accepted frontend is shared-domain implementation evidence, not a Brand-only product. Both Brand and Creator branches already render the same canonical read model and capability family.

## 6. `shared_collaboration_lifecycle_and_state_map`

### Lifecycle overlay

| Lifecycle | Meaning | Normal execution commands | Read/chat/residual behavior |
|---|---|---|---|
| `ACTIVE` | Normal five-stage execution | Capability-derived | Full durable reads; chat allowed |
| `PAUSED` | Reserved explicit pause/admin condition | No normal progress command unless specifically exposed | Readable; do not infer pause from errors or disputes |
| `COMPLETED` | Execution and required settlement confirmations complete | Feedback only, plus explicit residual actions if any | Full history; feedback window; frozen authority does not automatically close chat |
| `CANCELLED` | Creator-initiated terminal outcome | No normal execution | Resolution, settlement legs, obligations, and history remain visible; chat may remain for coordination |
| `TERMINATED` | Brand/System/Admin terminal outcome | No normal execution | Same durable terminal behavior |

### Five-stage workflow

| Stage | Entry / canonical substates | Action owner | Exit condition | Canonical persistence / downstream boundary |
|---|---|---|---|---|
| `NEGOTIATION` | FIXED: locked/not required. NEGOTIABLE: **new** `AWAITING_CREATOR_PROPOSAL` → `AWAITING_BRAND_DECISION` → optional `AWAITING_CREATOR_DECISION` → `LOCKED`; decline is terminal | Creator first proposal; Brand accept/counter/decline; Creator accept-counter/decline | Agreed amount locked, or terminal decline | `CollaborationCommercialAgreement`, locked campaign minimum/currency, `CollaborationEvent` |
| `SECUREMENT` | Await Brand escrow funding → processing → completed/blocked | Brand then SYSTEM/provider; Creator may be routed to C-05/C-06 readiness without owning payment execution | Authoritative full-reserve funding confirmation | Commercial agreement + escrow lock/reference; external Brand Escrow/funding gateway |
| `FULFILLMENT` | `NOT_STARTED` / await Brand provision / await Creator confirmation / remediation / completed / skipped / hard stop | Brand provision; Creator confirm/report; Brand one remediation | Confirmed/skipped or terminal second issue | `CollaborationFulfillment` + append-only issues/evidence; shipping/access/service provider boundary |
| `PRODUCTION` | Per Deliverable `AWAITING_SUBMISSION`, `UNDER_REVIEW`, `REVISION_REQUESTED`, `APPROVED`, `AUTO_APPROVED`, `HARD_STOP` | Creator submit; Brand approve/request revision/final reject; SYSTEM auto-approve | Every Deliverable approved/auto-approved, or terminal hard stop | `CollaborationDeliverableExecution` + append-only submission versions; media storage/provider ref only |
| `PUBLISHING_SETTLEMENT` | Per Deliverable publishing not required / not authorized / awaiting evidence / correction / verified / blocked; aggregate settlement not eligible → eligible → processing → settled/blocked | Brand authorize/decline/review; Creator publish/evidence/correct; SYSTEM/C-06 settlement callbacks | Required compliance verified and all required money legs confirmed; then `COMPLETED` | Publishing/evidence history + settlement/financial resolution; Payout/escrow providers external |
| Post-completion feedback | Hidden window → both submit or 48h → revealed | Brand and Creator each once; SYSTEM reveal | Reveal, without changing completed lifecycle | `CollaborationFeedbackWindow` + two subject-class submissions |

`actionRequiredBy` is an aggregate attention projection. Per-Deliverable `availableActions` remains authoritative where multiple items have different owners/states.

## 7. `brand_actor_action_matrix`

Every row follows: actor → frontend → view state → API command/read → backend owner → canonical persistence → downstream boundary.

| Brand action | Frontend route/component and view state | API | Backend owner | Persisted truth / downstream | Audit status |
|---|---|---|---|---|---|
| List/open Collaboration | `/brand/collaborations` → `CollaborationWorkspace`; inbox/loading/selected/empty/error | `GET /threads`, `GET /threads/:id`, `GET /messages` | query + access services | Canonical aggregate/read projection; none | REUSE |
| Send/read chat | Chat feed/composer; persisted, sending, failed/retry | `POST /threads/:id/messages` | message/query service | `CollaborationMessage`, unread/last-message; WS invalidation | REUSE |
| Accept Creator proposal | `NegotiationPanel`; `AcceptProposedFee` capability | `POST …/negotiation/accept-proposed-fee` | negotiation service | commercial agreement lock + event | REUSE after first-proposal reconciliation |
| Counter once | `NegotiationPanel`; amount form | `POST …/negotiation/counter-offer` | negotiation service | one Brand counter + `AWAITING_CREATOR_DECISION` + event | REUSE; enforce Campaign floor |
| Decline negotiation | `NegotiationPanel`; explicit terminal action | `POST …/negotiation/decline` | negotiation + exception policy | lifecycle/reason/resolution/event | REUSE |
| Fund reserve | `SecurementPanel`; awaiting/processing/completed/blocked | `POST …/securement/request-escrow-funding` | securement service | full commercial reserve/reference/event | Brand Escrow/funding gateway; REUSE |
| Provide support | `FulfillmentPanel`; type-specific evidence form | `POST …/fulfillment/provide` | fulfillment service | fulfillment evidence/state/event | courier/access/service evidence refs; REUSE |
| Remediate first issue | `FulfillmentPanel`; issue history + remediation | `POST …/fulfillment/remediate` | fulfillment service | remediation evidence/state/event | provider evidence only; REUSE |
| Approve Deliverable | `DeliverableCard`; per-item under review | `POST …/production/approve-deliverable` | production service | submission review + Deliverable state/event; also authorizes required publishing | REUSE |
| Request revision | `RevisionRequestForm`; 1 of 2 / final revision | `POST …/production/request-revision` | production service | feedback + revision count/state/event | REUSE |
| Reject final version | final review form | `POST …/production/reject-final` | production + exception policy | hard stop, terminal resolution, entitlement/event | REUSE |
| Decide after SYSTEM auto-approval | `PublishingDeliverableCard`; explicit authorize/decline | `POST …/publishing/authorize` or `/decline` | publishing + exception services | authorization or terminal Brand-declined-publication resolution | REUSE; no timer |
| Review publishing | evidence card; verify/request correction | `POST …/publishing/verify` or `/request-correction` | publishing service | evidence review/correction/compliance state/event | REUSE |
| End active Collaboration | resolution/end control when capability present | `POST …/end-by-brand` | exception service | terminal context + financial resolution + settlement legs | REUSE; not a generic state setter |
| Observe settlement | settlement/resolution cards | read only | query + settlement service | eligibility, payout/refund leg states | C-06/provider executes money |
| Submit feedback | `FeedbackPanel`, completed + window open | `POST …/feedback/review` | feedback service | one Brand feedback row/window | REUSE |
| View Creator context | `BrandContextDrawer` | current detail; future dedicated query | query/read owner | factual Creator/current Collab/same-Brand history | IMPLEMENTATION_GAP for full frozen context |

Ordinary Brand clients must not receive manual-payment, arbitrary settlement, stage-setting, payout, KYC, or Admin-resolution controls.

## 8. `legacy_creator_collaboration_version_inventory`

| Version / evidence | Material distinction | Classification | C-04 treatment |
|---|---|---|---|
| Accepted shared frontend `39510031…` and backend `13ce652f…` | First canonical five-stage, per-Deliverable, entitlement-safe shared runtime with both actor surfaces | `REUSE_WITH_RECONCILIATION` | Runtime authority/evidence; reconcile C-03 and C-05 seams |
| Current frontend `development@323658d4…` | Latest materially complete Creator UX: persistent C-05 shell, richer three-pane workspace, stage progress, robust mobile/recovery, context links, cancellation, histories | `PRIMARY_LEGACY_CREATOR_REFERENCE` | Primary Creator IA/interaction/visual reuse donor only |
| Phase G frontend `35304022…` and G0/G1/G2 documents | Role/read integrity, pane-local recovery, mobile nav, cancellation, C-05 bank cutover, state matrix, Aurora composition | `LEARNING_REFERENCE_ONLY` plus selected `REUSE` | Reuse fixes that do not conflict with frozen authority |
| Phase G backend `b7c726c8…` | Removed bank mutation and changed messaging to ACTIVE-only | `REUSE_WITH_RECONCILIATION` | Reuse bank cutover; retire ACTIVE-only chat restriction absent Parent re-freeze |
| Initial shared UI commit `8da5084…` | Three panes/mobile steps over legacy six-stage global model | `LEARNING_REFERENCE_ONLY` | Preserve shell lessons only |
| Initial backend commit `5d09d62…` | Creator quote endpoint, manual payment, industry routing, global media/posting, Collaboration profile/bank/shipping | `COMPATIBILITY_ONLY` / `RETIRE` | Quote interaction is learning evidence; persistence/lifecycle/commercial semantics retire |
| `Creator- Collaboration Workflow.md` | Detailed Creator holding states, brief/context, remediation, submission history, compliance, feedback, archival concepts | `LEARNING_REFERENCE_ONLY` | Reconcile useful experience detail with canonical state |
| `docs/collaboration/IMPLEMENTATION.md` | Historical six-stage API and phase tracker | `COMPATIBILITY_ONLY` | Route archaeology only |
| Stitch records `Brand-collab_UI`, `Creator-collab_UI` | Source for legacy desktop/mobile composition; raw packages referenced outside audited repositories | `LEARNING_REFERENCE_ONLY`; raw package `NOT_FOUND` | Existing Aurora ports are sufficient; do not revive six-stage semantics |
| Phase G G2.5 Stitch-ready matrix | Sixteen bounded visual targets; no actual G3 generation | `LEARNING_REFERENCE_ONLY` | Useful state checklist; not evidence that new Stitch is required |
| Backend `feature/campaign-collab-production-integration@a1ec408…` | Tip titled handoff integration but changes only an 802-line document | `LEARNING_REFERENCE_ONLY` | Not a runtime seam and not an implementation base |

Materially distinct historical Creator semantics inventoried include: first quote, one-counter negotiation, 30/70 advance/final release, manual receipt confirmation, industry-driven logistics, global revision/media/live-URL state, six-stage feedback, Collaboration-owned address/bank, mobile three-step flow, context/brief download, double-blind feedback, and archival/history concepts.

## 9. `primary_legacy_creator_reference_selection`

**Selected:** frontend `development@323658d4b147b95b5629ff8d91fa90b8fe9077e4`, specifically:

- `src/pages/creator/collaborations/creator-collaborations-page.tsx`
- `src/features/collaboration/`
- its integration within the accepted C-05 persistent Creator shell.

Why selected:

1. it is the latest materially complete Creator Collaboration experience in the available history;
2. it retains the shared workspace rather than creating a Creator-only engine;
3. it has the strongest desktop/mobile, accessibility, failure/recovery, cancellation, context, production-history, publishing-history, and terminal rendering evidence;
4. it already removes the legacy Collaboration bank write and routes payout details to C-05 Settings;
5. it uses Aurora/current Creator Shop patterns and therefore minimizes new design work.

Authority limit: this selection governs reusable Creator information architecture, component patterns, copy direction, and state treatment only. Its terminal read-only chat, direct-user role model, missing first proposal, partial context, and any stale six-stage/financial assumptions do not override frozen shared authority.

## 10. `legacy_creator_actor_action_matrix`

| Creator action/state | Latest/legacy frontend evidence | API/backend/persistence trace | Classification / required treatment |
|---|---|---|---|
| List/open/search/re-enter | Creator route → shared `CollaborationWorkspace`; three-pane desktop, mobile steps, empty/deep-link/recovery states | canonical GET list/detail/messages → query/access → persisted aggregate | `REUSE_WITH_RECONCILIATION`; authorize by C-05 subject/team |
| Chat | shared feed/composer with unread and socket refetch | POST message → persisted `CollaborationMessage` + inbox projection + WS | `REUSE`; restore frozen post-terminal capability if current UI suppresses it |
| Supply first proposal | Legacy `NegotiationPanel`/old `POST …/negotiation/quote`; absent from canonical/current UI | old monolith wrote `creatorProposedFee`; canonical model currently assumes it came from Application | Interaction idea `REUSE_WITH_RECONCILIATION`; create C-04 canonical command, never revive old global service |
| Accept/decline Brand counter | current `NegotiationPanel` capability rendering | canonical accept-counter/decline → commercial agreement/event | `REUSE`; Team capability policy required |
| Observe securement / manage payout details | `SecurementPanel`; Settings link when payout detail needed | Collaboration read only; C-05 payout destination; C-06 verification/execution | `C05_SHARED_CONTRACT_CONSUMPTION`; no bank writer |
| Receive/confirm support | current `FulfillmentPanel` and history | confirm command → fulfillment confirmation/event | `REUSE`; physical destination policy unresolved |
| Report fulfillment issue | description-first current form + issue history | report-issue → append issue; first remediation or second hard stop | `REUSE`; old fixed taxonomy and wallet-debit language retire |
| Submit/revise Deliverable | per-Deliverable card, asset ref/note, version history | submit-deliverable → submission version/deadline/event | `REUSE`; storage provider remains reference boundary |
| Wait for review/auto-approval | holding card/deadline copy | SYSTEM worker → Deliverable auto-approval/event | `REUSE`; scheduler is implementation gap |
| Publish after authorization | per-Deliverable publishing card | publishing evidence → append evidence/event | `REUSE`; never infer authorization from auto-approval/chat |
| Correct compliance | correction feedback + evidence history | corrected-evidence command → new evidence; no production revision consumption | `REUSE` |
| Cancel | later `CreatorCancellationCard` gated by capability | cancel-by-creator → exception resolution/settlement/event | `REUSE`; accepted 395 UI omission is repaired by later evidence |
| Observe entitlement/settlement | resolution + settlement cards | GET detail → financial resolution and payout/refund leg states | `CREATOR_PROJECTION_ONLY`; no payout execution control |
| Submit feedback | completed panel, hidden/revealed states | feedback command → one Creator-class row/window | `REUSE`; exact Team author covered by Product decision |
| Open Brand/Campaign context | current `CreatorContextDrawer` with Campaign/Asset/Brief links | read projection; no mutation | `CREATOR_PROJECTION_ONLY`; extend from frozen snapshot, not chat/live mutation |
| Download Collaboration Brief | legacy document concepts only; no canonical runtime component | deterministic projection from locked Collaboration snapshot | `ARCHITECTURE_ONLY`; distinct from C-03 Brief Pack and legal/payment docs |

## 11. `brand_vs_creator_shared_domain_comparison`

| Dimension | Brand projection/action | Creator projection/action | Shared-domain conclusion |
|---|---|---|---|
| Identity | Brand organization/profile is the counterparty and authorization scope | Creator profile/workspace is the subject; Team user is an actor | One Collaboration aggregate; do not make a Creator copy |
| Inbox | Creator counterpart, Campaign/Asset/Brief, stage, unread, required actor | Brand counterpart, same execution context, stage, unread, required actor | Same rows/read model with role-scoped counterpart projection |
| Chat | Brand USER messages and SYSTEM projections | Creator USER messages and SYSTEM projections | One persisted conversation; sender actor metadata must support Team users |
| Context | Factual Creator profile + current Collaboration + same-Brand history | Lighter Brand + Campaign/Asset/Brief/current-state context | Read-only projections from owners; no Trust-score inference |
| Negotiation | Accept first proposal, counter once, decline | Submit first proposal, accept/decline counter | Same commercial agreement; C-03 no longer supplies Creator amount |
| Securement | Requests full Brand reserve | Observes status and resolves owned payout-readiness data in Settings | Collaboration state is shared; funding/payout execution is external |
| Fulfillment | Provides support and one remediation | Confirms or reports issue | Same fulfillment aggregate; C-05 supplies contact/destination data where physical |
| Production | Reviews each Deliverable; two revision requests maximum | Submits each Deliverable/version | Same per-Deliverable execution and history |
| Auto-approval | May later explicitly authorize/decline publishing | Sees SYSTEM approval but cannot treat it as permission to publish | Same state; production approval and publication authorization remain distinct |
| Publishing/compliance | Authorizes/declines, verifies or requests correction | Publishes only when authorized; submits/corrects evidence | Same per-Deliverable publishing aggregate |
| Settlement | Sees reserve/refund leg truth; cannot mark paid | Sees gross entitlement/payout leg truth; cannot initiate/mark paid | Shared projection; C-06/Escrow/Payout execute money |
| Exit | Brand end when capability permits | Creator cancel when capability permits | Same exception/resolution policy with actor-specific reason/outcome |
| Feedback | One Brand-class submission | One Creator-class submission | Same double-blind window; Team actor attribution is an audit detail, not an extra feedback slot |
| Responsive UX | Brand route inside Brand shell | Creator route inside persistent C-05 shell and bottom nav | Shared feature components with actor-specific shell/navigation |

No Creator-facing state requires a parallel lifecycle, schema, command engine, socket state, or persistence family.

## 12. `c03_application_to_collaboration_dependency_map`

### Frozen boundary

```text
one specific APPROVED Application
  + exactly one immutable C03_APPLICATION_SNAPSHOT_V1
  + one approval transition/idempotency identity
  → provision or reuse at most one Collaboration
  → persist durable unique sourceApplicationId lineage
```

The accepted C-03 port is:

```text
provisionFromApprovedApplication(
  tx,
  { applicationId, approvalTransitionId }
) -> { collaborationId, created }
```

The port loads and validates the Application and immutable snapshot itself. It is not passed a caller-assembled Campaign/Brief/current-live-data payload.

### Required same-transaction order

1. lock/load the pending Application and canonical immutable snapshot;
2. transition Application to `APPROVED`;
3. provision or idempotently reuse the Collaboration using the same transaction handle;
4. append the approved Application event;
5. persist Creator notification/outbox intent and recipient snapshot intent;
6. commit once.

An `APPROVED` Application without its Collaboration is an invariant failure and the transaction must roll back. Provider/email/socket delivery remains asynchronous and cannot control the transaction.

### Multiplicity and sibling behavior

- Replay of the same Application returns the same Collaboration and `created=false`.
- Distinct approved Applications for the same Creator × Campaign may create distinct Collaborations.
- Approval does not supersede, delete, reactivate, or mutate unrelated sibling Applications.
- No Campaign × Creator uniqueness rule may be used as Collaboration identity.

### Snapshot mapping

| C-03 immutable snapshot input | C-04 use |
|---|---|
| Application/Campaign/Brand/Creator/Asset/Brief lineage | Immutable source identity and audit context |
| Commercial model, currency, fixed amount or negotiable minimum | FIXED initialization or NEGOTIABLE floor |
| Deliverables and `publishingRequired` | Per-Deliverable execution initialization |
| Usage rights and Creator requirements | Locked execution snapshot and future Collaboration Brief |
| Brand Support type/value/evidence requirements | Fulfillment applicability and subtype |
| Application reference/submission time | Lineage/read projection; not new Collaboration identity |
| Attribution/invitation/private eligibility evidence | **Excluded** from ordinary Collaboration surface unless a later explicit authority says otherwise |

### Current runtime reality

Current C-03 backend `6a2bd2e4b815462abc702dea34f7c368c24a0664` and frontend `66d6a9bc992afcdfb900d7837defd867670bf640` contain P0 baseline/integration proof only. They do not implement or accept the P1.4 runtime seam. The accepted Collaboration provisioning service at `13ce652f…` is not a substitute because it is caller-shaped, independently transactional, proposal-seeded, and can fabricate identity.

Classification: `C03_HANDOFF_RECONCILIATION`. It blocks C-04 implementation, but it does not block this audit, Product review, or conditional architecture preparation.

## 13. `c05_subject_team_shipping_contact_dependency_map`

| C-05 contract | C-04 consumption | Prohibited duplication / current conflict | Gap class |
|---|---|---|---|
| Canonical Creator subject | Store/reference the subject Creator profile/workspace, not just the owner’s User row | Accepted Collaboration identity/access uses direct `creatorUserId` | `C05_SHARED_CONTRACT_CONSUMPTION` + `ARCHITECTURE_ONLY` |
| Team actor context | Commands carry/resolve `actorUserId`, `actorMembershipId`, `actorRole`, `workspaceId`, `organizationId`, `subjectCreatorProfileId`, `subjectOwnerUserId` | Current runtime has only Brand/Creator session role and direct-user authorization | Product policy + architecture seam |
| Owner / Manager / Assistant | Use active membership and one canonical workspace; fail closed on ambiguity/inactivity | Do not infer authority from email, handle, or owner identity | `TRUE_C04_PRODUCT_DECISION_REQUIRED` for per-command policy |
| Persistent Creator shell | Mount `/creator/collaborations` inside accepted shell/nav; Marketplace remains hidden | Do not create a C-04 sidebar/app shell | `REUSE` |
| Instagram/provider state | Existing Collaboration/history remains accessible through provider interruption; provider-specific publication evidence may show honest failure/recovery | Do not make active Collaboration ownership depend on a currently connected Instagram account | `C05_SHARED_CONTRACT_CONSUMPTION` |
| Default contact/address | Read canonical structured contact/default delivery address when fulfillment requires it | Accepted Collaboration `POST /creator/shipping-address` is a competing owner | Ownership frozen; selection/snapshot timing is Product gap |
| Legal/profile data | Read only the minimum factual fields authorized for context/execution | Do not copy legal profile into Collaboration except a required immutable execution fact | `C05_SHARED_CONTRACT_CONSUMPTION` |
| Payout destination | Read readiness/reference and link to C-05 Settings | Accepted Collaboration bank endpoint writes/“verifies” its own bank model | `LEGACY_TO_RETIRE` |
| KYC/AML/Tax/disbursement | Show authoritative C-06 status when available | C-04 must not execute, verify, or mark payout complete | `DEFERRED_OUT_OF_SCOPE` |

### Subject vs actor invariant

The Collaboration belongs to the Creator subject, while a Team member performs a command. Domain effects such as “Creator accepted” remain Creator-class effects, but audit/event metadata must retain the actual Team actor. Changing the Owner must not orphan Collaboration history. A deactivated membership loses access without changing the subject’s aggregate identity.

### Shipping/contact invariant

C-05 remains owner of reusable default contact/address data. If C-04 stores a per-Collaboration delivery copy, that copy is an immutable execution fact with provenance, not a second editable default-address book. Only physical fulfillment needs it; service/access/experience flows must not require a shipping address.

## 14. `commercial_negotiation_reconciliation`

| Entry | Correct C-04 initialization | Legal actions | Exit |
|---|---|---|---|
| `FIXED` | Seed agreed Creator fee/currency from immutable Application/Campaign snapshot; negotiation `NOT_REQUIRED` or `LOCKED` | No quote/counter UI | Enter Securement |
| `NEGOTIABLE` | `creatorProposedAmount=null`, `brandCounterAmount=null`, `agreedAmount=null`, state `AWAITING_CREATOR_PROPOSAL` | Creator submits one proposal; Brand accepts, counters once, or declines; Creator accepts/declines counter | Lock agreed amount then Securement, or terminal decline |

### Mandatory supersession

Older Collaboration contracts/runtime assume the Application already includes `applicationProposedFee`. At the C-03/C-04 boundary that assumption is explicitly superseded:

```text
C-03 Application: no Creator proposed amount
Brand approval: create Collaboration
C-04 first Negotiation action: Creator supplies proposed amount
```

This does not reopen C-03 Product and does not authorize an Application fee field.

### Amount validation already implied by authority

- proposal, counter, and final agreed Creator fee use the immutable Campaign currency;
- a NEGOTIABLE Campaign amount is a minimum advertised Creator payout, so no proposal/counter/agreement may fall below the locked minimum;
- zero is valid only when the upstream canonical snapshot proves an intentionally authored zero, never from a legacy default;
- Brand reserve is not the Creator fee: for India it adds 7% plan commission and 18% GST on the commission;
- gateway/card fees remain outside that reserve;
- `advancePercentage` is snapshot context, not permission to revive legacy fixed 30/70 settlement logic.

### Required architecture/runtime delta

- add the negotiation substate and canonical `SubmitCreatorProposal` command/schema/guard/event/read capability;
- initialize it only through the accepted C-03 port;
- adapt the useful old quote-form interaction, not the old monolithic service or persistence;
- enforce minimum/currency and idempotency on the server;
- ensure Brand counter capability appears only after the Creator proposal;
- keep one-counter semantics and decline resolution already frozen.

Classification: `C03_HANDOFF_RECONCILIATION` plus `ARCHITECTURE_ONLY`/`IMPLEMENTATION_GAP`; **not** a new Product decision.

## 15. `fulfillment_production_publishing_settlement_map`

| Area | Happy path | Exception/remediation | Owner and persistence | Downstream boundary |
|---|---|---|---|---|
| Fulfillment applicability | Locked Brand Support says none → `SKIPPED`; otherwise Brand supplies type-appropriate evidence and Creator confirms | Creator issue #1 → Brand remediation → Creator re-confirms/reports; issue #2 → hard stop, Creator entitlement 0, full Brand commercial refund | Collaboration fulfillment + append-only issue/evidence rows | C-05 address/contact for physical delivery; courier/access/service provider refs only |
| Production | Creator submits each required Deliverable; Brand approves; all required items resolve | Brand may request two revisions; third version gets final approve/reject. No Brand response for 72h → stale-safe SYSTEM auto-approval | Per-Deliverable execution + append-only submission versions + event | Media/storage owns bytes; Collaboration stores durable asset references/metadata |
| Publishing authorization | Brand-approved publishing-required Deliverable is authorized; non-publishing item is not required | SYSTEM-auto-approved item waits indefinitely for explicit Brand authorize/decline; decline is a terminal resolution path | Per-Deliverable authorization state/event | No social/provider mutation is implied by authorization |
| Publishing evidence/compliance | Creator submits evidence; Brand verifies | Brand requests correction; Creator submits a new evidence version; corrections do not consume production revisions | Per-Deliverable publishing record + append-only evidence | Provider/API verification may assist later but cannot replace authoritative command/evidence policy |
| Normal settlement | After all required execution/compliance, Collaboration records entitlement and becomes eligible; trusted C-06/Payout callbacks move legs to confirmed; only then complete | Failed/blocked payout/refund keeps residual settlement pending; terminal lifecycle may coexist with pending legs | Settlement + financial resolution + external references | Escrow/Payout/C-06 owns money movement, KYC/AML/Tax, beneficiary, disbursement |
| Exit settlement | Canonical reason/stage/actor policy calculates Creator entitlement and Brand commercial refund | Residual product return/asset restriction/other obligations remain durable | Financial resolution independent of lifecycle | Provider callbacks update execution only; never recompute Product entitlement |
| Feedback | Completion opens hidden 48h window; each actor class submits once | Reveal immediately when both submit or by trusted deadline worker | Feedback window + submissions | Notification delivery is a projection only |

Legacy behaviors to reject here include industry-routed logistics, global collaboration-wide revision counters, one global media submission, one global live URL, payout-on-compliance-button behavior, 30/70 wallet assumptions, and “claw back the advance from the Creator wallet” as a substitute for canonical entitlement resolution.

## 16. `notifications_realtime_reentry_map`

### Truth and delivery layers

| Layer | Authority | Accepted runtime state | C-04 requirement |
|---|---|---|---|
| Canonical state/event | Transactional Collaboration tables + `CollaborationEvent` | Implemented for canonical commands | Required; actual workflow truth |
| System chat projection | Optional persisted SYSTEM message derived from event | Provisioning/legacy paths do this; canonical command coverage is inconsistent | Implementation gap, not transition authority |
| Human chat | Persisted `CollaborationMessage` | Implemented | Keep separate from workflow; retain post-terminal coordination under frozen authority |
| Realtime | Socket invalidation to thread, Brand-org users, direct Creator user | Implemented | Refetch only; adapt fan-out to active authorized Creator Team recipients |
| Durable in-app notification | Notification/outbox consumer of committed events | No complete Collaboration event-to-outbox integration found at accepted SHA | Architecture/implementation gap; failure must not roll back workflow |
| Email/push | Optional downstream channel/preferences | Not frozen for C-04 | `DEFERRED_OUT_OF_SCOPE` until notification policy/owner supplies it |

### Refresh and re-entry contract

```text
route entry or reconnect
→ GET authorized inbox
→ resolve requested Collaboration without silent wrong-row fallback
→ GET persisted detail + messages
→ render server-derived capabilities
→ attach socket
→ on invalidation, refetch affected persisted projections
```

Required states include initial loading, background refresh, empty inbox, selected-row loading, no messages, read failure, contract-shape failure, action processing/failure, optimistic-version conflict, action no longer available, realtime degraded with manual refresh, paused, compatibility, terminal, settlement blocked, feedback hidden/revealed, and mobile navigation/back behavior.

Later Phase G/current frontend provides reusable solutions for strict role routing, invalid deep links, response validation, pane-local retry, explicit realtime Refresh, and mobile navigation. Those are implementation evidence. Socket payloads must never become the only copy of a proposal, submission, approval, issue, compliance result, settlement result, or message.

### Permission and membership change

On refresh/re-entry, C-05 membership is re-resolved. A revoked/inactive actor loses access; the Creator subject retains history. A role change recomputes capabilities server-side. Cached frontend capability buttons disappear after authoritative refetch and stale commands fail safely.

## 17. `current_persistence_and_migration_state`

### Frozen/accepted Collaboration line

The accepted backend contains the legacy foundation plus eight additive canonical migration families:

1. `20260810180000_collaboration_phase_1_foundation`
2. `20260810193000_collaboration_phase_3_commercial_commands`
3. `20260810213000_collaboration_phase_3_1_financial_boundary`
4. `20260810233000_collaboration_phase_4_1_fulfillment`
5. `20260811013000_collaboration_phase_4_2_production`
6. `20260811143000_collaboration_phase_4_4_publishing`
7. `20260811180000_collaboration_phase_4_6_settlement`
8. `20260812190000_collaboration_phase_4_7_feedback`

Its canonical persistence includes execution snapshot, commercial agreement/reserve, fulfillment/issues, Deliverable executions/submission versions, publishing/evidence, financial resolution/settlement, feedback window/submissions, messages, and events. `sourceApplicationId` is nullable for legacy compatibility but unique when present; Campaign × Creator is only a lookup, not a uniqueness boundary.

### Current development / C-03 base

Backend `development@4c5f428…` and current C-03 base contain:

- legacy `20260604120000_collaboration_module` and Campaign migrations;
- accepted C-05 migrations `20260909120000` through `20260909123000` for Team identity, contact phone, legal profile, and payout destination;
- **none** of the eight canonical Collaboration migration families above.

That line still carries the older monolithic Collaboration schema and Campaign × Creator assumptions. The current C-03 branch has not yet added its planned Application-sourced Collaboration migration/reconciliation.

### Required future migration preparation, not performed here

- reconcile the accepted Collaboration canonical models with the full current 74-migration history and C-05 subject IDs;
- add the C-03 source-Application constraint/transaction seam on the true integration base;
- remove any Campaign × Creator uniqueness without dropping legitimate history;
- keep `sourceApplicationId` unique for canonical rows and define explicit compatibility behavior for null legacy rows;
- backfill only with exact provenance; never infer Application lineage by email, handle, title, SKU, or similarity;
- retain ambiguous rows as compatibility/read-only and fail closed for unsafe promotion;
- preserve legacy messages/evidence/history while blocking legacy global mutation APIs on canonical rows;
- design address snapshot provenance and Team actor audit columns after Product decisions;
- use forward-only additive migrations with PostgreSQL constraint/concurrency proofs.

No migration was created, edited, applied, or proposed as executable SQL in this audit.

## 18. `current_frontend_ui_state_and_aurora_reuse_map`

The permanent frontend decision ladder produces the following result.

| Ladder step | Audit result | C-04 direction |
|---|---|---|
| Frozen Product authority | Five-stage shared domain, actions, context, resilience, and actor projections are largely frozen | Do not redesign the module concept |
| Frontend State Family Register | Existing frozen maps + Phase G G2 state/mobile matrix cover most families; two Product decisions must be added | Prepare one reconciled C-04 register during architecture, before code |
| Current canonical production frontend | `development@323658d4…` has the strongest shell, workspace, mobile, recovery, cancellation, context links, histories, and terminal cards | Primary component/IA donor |
| Accepted runtime reference | `39510031…` proves canonical five-stage/capability-driven shared UI | Use for contract fidelity |
| Accepted historical references | Phase G docs/screens and recorded Stitch ports cover responsive three-pane/mobile composition and utility states | Reuse selectively; never import stale semantics |
| Aurora + Creator Shop patterns | Existing drawers, cards, form controls, alerts, stage progress, shell, bottom nav, focus/retry patterns are sufficient | FE/Codex can construct first proposal, shipping confirmation, Team-permission states, and Brief action confidently |
| UI/UX / Stitch exception | No unresolved visual/compositional problem has been identified | **No UI/UX or Stitch request now** |

### Reusable state families

- inbox list/loading/empty/filter/search/selected/unread;
- chat loading/empty/send/retry/history/system-message/realtime-degraded;
- execution loading/background refresh/action processing/stale conflict/action unavailable;
- negotiation, securement, fulfillment, remediation, per-Deliverable production/revision/auto-approval;
- authorization, publishing evidence, compliance correction, settlement, resolution, completion, feedback;
- compatibility, blocked, paused, terminal, provider failure, contract failure;
- desktop three-pane and mobile Inbox → Chat → Execution with persistent Creator navigation;
- counterpart drawers and Campaign/Asset/Brief contextual links.

### Required reconciliations

- add `AWAITING_CREATOR_PROPOSAL` and the first-proposal form;
- consume C-05 actor context and render capabilities returned for that Team member;
- add physical-destination confirmation only when support requires delivery;
- remove/keep removed all Collaboration bank/default-address ownership;
- restore post-terminal composer capability if the backend advertises it, because current read-only terminal chat conflicts with frozen authority;
- implement the full frozen Brand→Creator same-Brand relationship context query rather than silently limiting it to current-detail fields;
- provide a Collaboration Brief action as a snapshot projection, not a mutable agreement editor;
- preserve honest “eligible / processing / paid / blocked” settlement language.

The recorded raw Stitch folders are not present in the audited repository, but their Aurora ports and intake documentation are. Their absence does not block Product freeze, architecture preparation, or frontend construction.

## 19. `reuse_reconcile_retire_matrix`

| Evidence/capability | Decision | Reason / boundary |
|---|---|---|
| Shared Collaboration aggregate and five-stage lifecycle | `REUSE` | Frozen authority |
| Accepted command/read model and capability-driven UI | `REUSE_WITH_RECONCILIATION` | Add C-03 first proposal and C-05 actor policy |
| Three-pane desktop + three-step mobile workspace | `REUSE` | Strong shared IA, already Aurora-integrated |
| Current C-05 shell/bottom navigation | `REUSE` | Canonical Creator shell |
| Current pane-local retry, strict route guard, deep-link validation, Zod reads, explicit Refresh | `REUSE` | Later implementation hardening consistent with contracts |
| Current Creator cancellation card | `REUSE` | Exposes already-frozen capability |
| Per-Deliverable submission/revision/publishing histories | `REUSE` | Canonical state fidelity |
| Legacy first-quote form concept | `REUSE_WITH_RECONCILIATION` | Useful interaction for new canonical command only |
| C-05 default contact/address | `REUSE_WITH_RECONCILIATION` | C-05 remains owner; C-04 may persist a confirmed execution copy after Product decision |
| Current light Creator→Brand context | `REUSE` | Matches frozen lighter MVP direction |
| Current light Brand→Creator context | `REUSE_WITH_RECONCILIATION` | Add frozen factual/same-Brand relationship history query |
| C-03 PDF renderer primitives | `REUSE_WITH_RECONCILIATION` | Low-level reuse only; C-04 source/content are distinct |
| Post-terminal chat restriction from later Phase G/current UI | `RETIRE` | Conflicts with frozen implementation authority permitting residual chat |
| Collaboration bank/payout writer | `RETIRE` | C-05/C-06 ownership conflict |
| Collaboration editable default shipping/contact profile | `RETIRE` | C-05 owns defaults |
| Six-stage workflow / feedback Stage 6 | `RETIRE` | Canonical feedback is post-completion |
| Campaign × Creator uniqueness | `RETIRE` | Source Application is identity |
| Proposed amount on Application | `RETIRE` | Explicit C-03 supersession |
| 30/70 wallet/advance settlement engine | `RETIRE` | Full reserve + canonical entitlement/settlement |
| `BARTER` and ordinary manual-payment UI | `RETIRE` | Barter retired; manual dormant/internal |
| Industry-routed logistics | `RETIRE` | Brand Support snapshot owns applicability/type |
| Global revision count/media/live URL | `RETIRE` | Per-Deliverable execution/evidence |
| Auto-approval as publication permission | `RETIRE` | Explicit Brand authorization required after SYSTEM auto-approval |
| Client-set stage/lifecycle or chat-inferred transition | `RETIRE` | Server command/event authority |
| Legacy ratings taxonomy, Trust score, “Creator Vault,” analytics dashboard | `LEARNING_REFERENCE_ONLY` / `DEFERRED_OUT_OF_SCOPE` | Not frozen C-04 MVP authority |
| Raw historical Collaboration Stitch packages | `NOT_FOUND` / `LEARNING_REFERENCE_ONLY` | References exist; actual source packages absent; no new Stitch need identified |

## 20. `complete_gap_register`

Only rows classified `TRUE_C04_PRODUCT_DECISION_REQUIRED` are carried into section 22.

| GAP_ID | Finding | Classification | Required disposition / gate |
|---|---|---|---|
| C04-GAP-001 | No reviewed branch combines accepted canonical Collaboration, C-05, and C-03 P1.4 | `ARCHITECTURE_ONLY` | Establish an explicit convergence/integration base and forward-only migration plan before implementation |
| C04-GAP-002 | Accepted provisioner is outside the Application approval transaction and does not implement the exact C-03 port | `C03_HANDOFF_RECONCILIATION` | C-03 must deliver and accept the same-transaction seam |
| C04-GAP-003 | Accepted provisioner reads/accepts mutable caller context and can fabricate Creator identity | `C03_HANDOFF_RECONCILIATION` | Load immutable Application snapshot and canonical C-05 subject internally; remove fabrication path for canonical provisioning |
| C04-GAP-004 | NEGOTIABLE initialization still assumes Application proposed fee | `C03_HANDOFF_RECONCILIATION` | Initialize null amounts + `AWAITING_CREATOR_PROPOSAL` |
| C04-GAP-005 | No canonical first Creator proposal command/read capability/UI | `IMPLEMENTATION_GAP` | Add action-specific C-04 command, event, read action, frontend form, and tests after architecture |
| C04-GAP-006 | Accepted negotiation validation does not enforce the immutable Campaign minimum payout | `ALREADY_FROZEN_SHARED_COLLABORATION` | Implement server validation; no Parent decision |
| C04-GAP-007 | Source-Application replay currently treats a uniqueness collision as conflict rather than deterministic reuse | `C03_HANDOFF_RECONCILIATION` | Return existing Collaboration with `created=false`; concurrency proof required |
| C04-GAP-008 | Current development persistence still has the old Collaboration family/Campaign × Creator assumption | `ARCHITECTURE_ONLY` | Reconcile full migration history; preserve legacy rows explicitly |
| C04-GAP-009 | Accepted access/list/realtime binds Creator to one `creatorUserId` | `C05_SHARED_CONTRACT_CONSUMPTION` | Move authorization to subject + active Team actor context |
| C04-GAP-010 | C-05 intentionally does not decide which Owner/Manager/Assistant may perform C-04 commands | `TRUE_C04_PRODUCT_DECISION_REQUIRED` | Parent decides C04-PD-01 before architecture freeze |
| C04-GAP-011 | Team actor identity is not retained on Collaboration events/messages/feedback consistently | `ARCHITECTURE_ONLY` | Add actor audit metadata while keeping Creator subject as domain party |
| C04-GAP-012 | Socket Creator invalidation targets one user, not all authorized Team recipients | `IMPLEMENTATION_GAP` | Fan out using authoritative active membership/capability policy |
| C04-GAP-013 | Collaboration still exposes/contains its own bank writer in accepted runtime | `LEGACY_TO_RETIRE` | Remove/410 and link/read C-05 payout destination only |
| C04-GAP-014 | Collaboration exposes an editable shipping/default-address writer | `LEGACY_TO_RETIRE` | Remove default ownership; C-05 remains canonical owner |
| C04-GAP-015 | Exact physical-fulfillment destination selection, confirmation, override, and snapshot timing are not frozen | `TRUE_C04_PRODUCT_DECISION_REQUIRED` | Parent decides C04-PD-02 |
| C04-GAP-016 | C-04 has no business owning beneficiary verification, KYC/AML/Tax, payout initiation, or disbursement | `DEFERRED_OUT_OF_SCOPE` | Consume future C-06 status/reference only |
| C04-GAP-017 | Canonical commands append events but do not consistently project SYSTEM chat rows | `IMPLEMENTATION_GAP` | Add event-driven, idempotent projection where useful; never make it state authority |
| C04-GAP-018 | No complete Collaboration event → durable notification/outbox consumer is present at accepted SHA | `ARCHITECTURE_ONLY` | Define committed-event consumer, safe payloads, recipient snapshot/fan-out, retries |
| C04-GAP-019 | External email/push channel and preference policy are not C-04-frozen | `DEFERRED_OUT_OF_SCOPE` | In-app/realtime can proceed; consume notification owner later |
| C04-GAP-020 | 72-hour production auto-approval method exists without accepted worker scheduling evidence | `IMPLEMENTATION_GAP` | Wire durable stale-safe worker with repeated-fire/idempotency tests |
| C04-GAP-021 | 48-hour feedback reveal method exists without accepted worker scheduling evidence | `IMPLEMENTATION_GAP` | Wire durable deadline worker and re-entry refresh |
| C04-GAP-022 | Funding and settlement gateway abstractions exist but real provider execution remains external | `ARCHITECTURE_ONLY` | Define a provider-neutral trusted confirmation port and idempotent consumption with Escrow/C-06; provider webhook authentication and payout execution stay external |
| C04-GAP-023 | Accepted frontend lacks first-proposal state/form | `IMPLEMENTATION_GAP` | Add from old quote interaction after contract freeze |
| C04-GAP-024 | Accepted frontend has Creator-cancel API but no visible action | `IMPLEMENTATION_GAP` | Reuse later `CreatorCancellationCard` exactly when capability is returned |
| C04-GAP-025 | Accepted frontend has weaker route/deep-link/contract/retry/mobile integrity than later current line | `IMPLEMENTATION_GAP` | Reuse later guard, selection, Zod, pane-retry, Refresh, and mobile patterns |
| C04-GAP-026 | Later current frontend closes terminal chat, while frozen shared implementation authority permits residual chat | `LEGACY_TO_RETIRE` | Backend capability remains authority; reconcile UI to it unless Parent explicitly reopens policy |
| C04-GAP-027 | Brand→Creator context lacks frozen same-Brand relationship history and some factual fields | `IMPLEMENTATION_GAP` | Add privacy-scoped dedicated read projection; do not infer Trust/other-Brand data |
| C04-GAP-028 | Creator→Brand drawer is lightweight but largely sufficient | `CREATOR_PROJECTION_ONLY` | Reuse current fields and locked Campaign/Asset/Brief context |
| C04-GAP-029 | No canonical Collaboration Brief download/projection is implemented | `ARCHITECTURE_ONLY` | Define deterministic snapshot-only projection; share renderer primitives if useful |
| C04-GAP-030 | Legacy “agreement PDF,” invoice, tax document, and permanent legal archive claims exceed frozen C-04 authority | `LEGACY_TO_RETIRE` | Do not label the Collaboration Brief a legal/payment document without separate authority |
| C04-GAP-031 | Accepted fulfillment UI had hard-coded issue-code/taxonomy assumptions | `DEFERRED_OUT_OF_SCOPE` | Reuse later description-first issue UX; taxonomy can remain deferred |
| C04-GAP-032 | Raw Collaboration Stitch packages are referenced but absent from audited repositories | `DEFERRED_OUT_OF_SCOPE` | Existing Aurora/current UI is sufficient; no Product/architecture block |
| C04-GAP-033 | Historical provider disconnect could be used to deny active Collaboration access | `C05_SHARED_CONTRACT_CONSUMPTION` | Historical/active Collaboration remains subject/team-accessible; show honest provider-action recovery only where needed |
| C04-GAP-034 | Legacy nullable/no-Application rows cannot safely be promoted by heuristics | `ARCHITECTURE_ONLY` | Keep explicit compatibility/read-only projection or exact-provenance backfill only |
| C04-GAP-035 | Legacy six-stage, 30/70, barter/manual, industry routing, global media/revision/live URL remain in old code/docs | `LEGACY_TO_RETIRE` | Contain/remove mutation paths; preserve history without preserving semantics |
| C04-GAP-036 | Base command documentation does not fully enumerate later explicit publishing authorize/decline commands | `ALREADY_FROZEN_SHARED_COLLABORATION` | Execution overlay + accepted runtime resolve precedence; reconcile documentation during architecture, no Product question |
| C04-GAP-037 | Older securement wording sometimes calls the Creator fee the funded amount | `ALREADY_FROZEN_SHARED_COLLABORATION` | Financial overlay governs full Brand reserve; align copy/calculation tests |
| C04-GAP-038 | `PAUSED` has no ordinary actor command/policy | `ALREADY_FROZEN_SHARED_COLLABORATION` | Keep reserved; do not invent a pause UX/action |
| C04-GAP-039 | Usage-rights facts are locked but not yet surfaced fully to the Creator | `CREATOR_PROJECTION_ONLY` | Display immutable snapshot facts without a second rights model |
| C04-GAP-040 | A richer usage-rights expiry-reminder product is not frozen | `DEFERRED_OUT_OF_SCOPE` | Do not invent a reminder/rights-management engine |
| C04-GAP-041 | Feedback is one Creator-class submission, but the actual Team actor must be attributable | `ARCHITECTURE_ONLY` | Apply C04-PD-01 to authorization and record actor metadata; never create one feedback slot per member |

## 21. `cross_contract_conflicts`

| CONFLICT_ID | Apparent conflict | Resolution | Product escalation? |
|---|---|---|---|
| C04-XC-01 | Older Collaboration authority/runtime seeds `applicationProposedFee`; C-03 forbids a Creator amount on Application | C-03 explicitly supersedes this boundary. C-04 adds first proposal. | NO; required reconciliation |
| C04-XC-02 | Accepted provisioner can run after/outside Brand Application approval; C-03 requires one transaction | C-03 same-transaction port governs implementation. | NO; implementation gate |
| C04-XC-03 | Accepted Collaboration identity/access uses direct Creator user; C-05 separates Creator subject from Team actor | C-05 subject/team contract governs identity and authorization. | YES only for the role capability policy, C04-PD-01 |
| C04-XC-04 | Accepted Collaboration owns bank/default shipping writers; C-05 owns payout destination/contact/address | Retire writers. Consume C-05 data. | YES only for destination snapshot UX, C04-PD-02 |
| C04-XC-05 | Legacy/older Campaign models treat a negotiable number as a proposed fee or default zero | Canonical Campaign contract makes it a minimum advertised payout and distinguishes missing from authored zero. | NO |
| C04-XC-06 | Older execution wording lets auto-approved content proceed without explicit publishing decision | Later frozen execution overlay and accepted runtime require Brand authorize/decline. | NO |
| C04-XC-07 | Older securement copy/model implies only Creator fee or fixed 30/70 funding | Frozen financial overlay requires the full Brand commercial reserve and separates advance context from settlement. | NO |
| C04-XC-08 | Legacy feedback is Stage 6; canonical lifecycle completes before feedback | Feedback is post-completion and does not cause completion. | NO |
| C04-XC-09 | Later Phase G/current frontend closes terminal chat; frozen implementation map permits it for residual coordination | Frozen shared authority wins; later restriction is drift unless explicitly re-frozen. | NO |
| C04-XC-10 | Phase G light Brand context omits same-Brand relationship history required by frozen context contract | Treat as incomplete implementation, not a narrowed Product scope. | NO |
| C04-XC-11 | Legacy “Collaboration agreement/brief PDF” conflates execution snapshot, legal agreement, invoice, and archive | C-04 Brief is a snapshot projection only; legal/payment documents remain with their owners. | NO |
| C04-XC-12 | Current development has C-05 but old Collaboration; accepted Collaboration branch has canonical Collaboration but no C-05 | Architecture must converge histories and schemas explicitly. Neither branch silently outranks both accepted contracts. | NO; architecture issue |

No conflict was found in which preserving frozen shared Collaboration authority makes the Creator experience logically impossible or unsafe. The two remaining Product decisions concern authorization and fulfillment destination UX, not lifecycle redefinition.

## 22. `candidate_product_decision_register`

### `C04-PD-01` — Creator Team command-capability policy

**DECISION_ID**
`C04-PD-01`

**QUESTION**
Which active Creator Team roles may read/chat and perform Creator-class Collaboration commands, including commercial proposal/accept/decline, fulfillment confirmation/issue, Deliverable submission, publishing evidence/correction, cancellation, and the single Creator feedback submission?

**WHY_NOT_ALREADY_FROZEN**
Shared Collaboration freezes only the `CREATOR` actor class. C-05 freezes Owner/Manager/Assistant membership and actor-vs-subject semantics but explicitly defers C-04 business-command policy. C-03 role policy governs Applications only and cannot be imported silently.

**OPTIONS**

1. **Owner-only state mutation:** all active roles may read/chat; only Owner performs every state-changing Creator command.
2. **Owner + Manager execution; Assistant read/chat only:** Owner and Manager may perform all Creator-class workflow, commercial, exit, and feedback commands; Assistant may read and chat but not change workflow. **Recommended default.**
3. **Granular delegation:** add per-member/per-command Collaboration permissions beyond the three membership roles.

**RECOMMENDED_DEFAULT_IF_ANY**
Option 2. It matches the established Owner/Manager trust boundary, permits operational continuity, keeps Assistant risk bounded, and avoids inventing a new permission-management product. Each command records the actual Team actor; effects remain attributed to the Creator subject. The first authorized feedback submission consumes the one Creator-class slot.

**IMPACT**
Authorization resolver, `availableActions`, event/message audit metadata, feedback uniqueness, realtime/notification recipients, stale membership handling, frontend permission/read-only states, and acceptance tests.

**BLOCKS_ARCHITECTURE = YES**

### `C04-PD-02` — Physical fulfillment destination confirmation

**DECISION_ID**
`C04-PD-02`

**QUESTION**
For a Collaboration whose locked Brand Support requires physical delivery, when and how is the C-05-owned default delivery contact/address confirmed or overridden for that specific execution?

**WHY_NOT_ALREADY_FROZEN**
C-05 freezes the reusable default contact/address owner and permits C-04 consumption. Shared Collaboration freezes support applicability/evidence but not destination-selection timing, update behavior, or per-Collaboration override semantics. Legacy C-04-style address forms conflict with C-05 ownership and cannot decide the issue.

**OPTIONS**

1. **Snapshot at Collaboration creation:** copy the then-current C-05 default automatically into the execution snapshot; later Settings edits never affect it.
2. **Live default until Brand dispatch:** always resolve the current C-05 default until fulfillment is marked provided; no explicit Creator confirmation.
3. **Explicit execution confirmation:** when physical Fulfillment activates, prefill the current C-05 default; an authorized Creator actor confirms it or supplies a one-Collaboration override; persist an immutable delivery copy plus C-05 source/provenance, without changing the default. **Recommended default.**

**RECOMMENDED_DEFAULT_IF_ANY**
Option 3. It prevents silent shipping to a stale address, keeps C-05 as default-data owner, creates an auditable execution fact for the Brand, and does not burden non-physical fulfillment.

**IMPACT**
Fulfillment substates/capabilities, Team authorization, PII projection/access, immutable snapshot/provenance schema, Creator confirmation UI, Brand dispatch readiness, address-change/re-entry behavior, and privacy/security tests.

**BLOCKS_ARCHITECTURE = YES**

### Areas with no genuine remaining Product question

No new Product decision is required for:

- lifecycle/stage count or ownership;
- FIXED vs NEGOTIABLE entry or one-counter behavior;
- the C-03 absence of an Application proposal;
- minimum payout validation;
- escrow reserve math or 100% reserve securement;
- fulfillment applicability, one remediation, or second-issue outcome;
- per-Deliverable revision/auto-approval/publishing/compliance behavior;
- cancellation/end entitlement policy;
- settlement vs payout execution ownership;
- completion/feedback/reveal semantics;
- persistence-vs-realtime authority;
- terminal chat under current frozen authority;
- Collaboration Brief source/boundary;
- Aurora/current-component reuse or Stitch need.

## 23. `architecture_questions_if_any`

These are architecture questions, not Product questions. They should be answered after Parent resolves section 22 and authorizes architecture.

| AQ_ID | Architecture question | Constraint / expected direction |
|---|---|---|
| C04-AQ-01 | What is the exact convergence base for canonical Collaboration + C-05 + accepted C-03 seam? | Must reconcile full histories; no blind cherry-pick or duplicate model family |
| C04-AQ-02 | How does canonical Collaboration reference Creator subject while preserving legacy `creatorUserId` reads? | Add subject/workspace lineage; compatibility adapter for exact legacy rows; never infer by email/handle |
| C04-AQ-03 | Where is Team actor context resolved and how is it carried through commands/events/messages/feedback? | One fail-closed C-05 actor resolver; backend capability derivation is authoritative |
| C04-AQ-04 | Exact enum/schema/event/read DTO for `AWAITING_CREATOR_PROPOSAL` / `SubmitCreatorProposal`? | Add a negotiation substate, not a lifecycle/stage; enforce locked floor/currency/idempotency |
| C04-AQ-05 | How is physical delivery confirmation represented securely? | C-05 owns default; C-04 stores only authorized immutable execution copy/provenance; minimize PII exposure |
| C04-AQ-06 | Which domain events create SYSTEM chat and durable in-app notifications? | Transactional event first; idempotent asynchronous projections; safe payloads only |
| C04-AQ-07 | Which durable worker owns 72h auto-approval and 48h feedback reveal? | Repeated firing must be harmless; persisted deadlines; observable retries/dead letters |
| C04-AQ-08 | How does C-04 validate and deduplicate provider-neutral trusted funding/payout/refund confirmations? | External owner authenticates provider webhooks and executes; Collaboration validates its internal port, records references/results idempotently, and never trusts client “paid” state |
| C04-AQ-09 | What dedicated context query returns same-Brand Creator history without leaking other Brands or internal Trust data? | Privacy-scoped projection; drawer failure is isolated from workspace |
| C04-AQ-10 | How is the Collaboration Brief rendered and versioned? | Deterministic snapshot-only projection; separate type/title from C-03 Application Brief and legal/payment docs |
| C04-AQ-11 | What is the legacy mutation cutover strategy? | Canonical rows reject legacy endpoints; remove/410 profile/bank/default-address writers; retain historical reads |
| C04-AQ-12 | How are legacy null-`sourceApplicationId` rows represented after migration? | Explicit `LEGACY_COMPATIBILITY`; no fabricated provenance or canonical commands that require missing facts |
| C04-AQ-13 | How are optimistic version conflicts surfaced across multiple Team actors? | Server version/idempotency receipt + targeted refetch and action-no-longer-available UI |
| C04-AQ-14 | Which state families require new components? | Prefer adapting current Aurora workspace; likely only first proposal and physical destination confirmation are materially new |

## 24. `c03_runtime_dependency_gate`

C-04 implementation must not begin until Parent/authorized acceptance evidence proves all of the following on the real integration line.

### Required gate evidence

- [ ] An immutable accepted C-03 backend SHA and branch are published after P1.4, not merely the current P0 SHA.
- [ ] Application approval and Collaboration provision/reuse execute on the same Prisma/PostgreSQL transaction handle.
- [ ] The only canonical port is equivalent to `provisionFromApprovedApplication(tx,{applicationId,approvalTransitionId})` and it loads the Application/snapshot itself.
- [ ] `APPROVED` cannot commit without a Collaboration ID; rollback proof covers provisioning/event/notification failures.
- [ ] Canonical `Collaboration.sourceApplicationId` is required/unique for new rows; Campaign × Creator is non-unique.
- [ ] Same-Application replay/concurrency returns one Collaboration and `{created:false}`; distinct approved Applications for the same Creator × Campaign produce distinct Collaborations.
- [ ] Sibling Applications are not automatically superseded/reactivated/deleted.
- [ ] The immutable C-03 snapshot, not mutable live Campaign/Brief data or caller-shaped context, initializes C-04 lineage/obligations.
- [ ] FIXED seeds the frozen fixed commercial basis and advances correctly.
- [ ] NEGOTIABLE seeds null Creator/counter/agreed amounts and `AWAITING_CREATOR_PROPOSAL`; C-03 persists no Creator proposal.
- [ ] No synthetic User/Creator profile is fabricated; canonical C-05 Creator subject lineage is used.
- [ ] Application event and notification/outbox intent share the approval transaction; actual delivery remains asynchronous.
- [ ] Frontend/Brand approval response and deep link use the returned canonical `collaborationId`, not Campaign × Creator lookup.
- [ ] PostgreSQL tests cover retry, duplicate command, concurrent approval, rollback, multiplicity, immutable snapshot, and legacy compatibility.
- [ ] The seam is accepted by the C-03 authority and its exact SHA is incorporated into the later C-04 architecture/preflight package.

### Gate status after Stage B correction

```text
C04_C03_BACKEND_HANDOFF_DEPENDENCY = IN_PROGRESS
C04_C03_FRONTEND_BASE_DEPENDENCY = IN_PROGRESS
```

Current backend/frontend C-03 heads prove P0 only. The backend criteria above govern the hard backend handoff gate. The frontend gate separately requires a C-03 Systems Architect-approved immutable frontend integration base. The historical `feature/campaign-collab-production-integration` tip is documentation-only and does not satisfy either gate.

## 25. `blocks_product_freeze`

**YES — exactly two unresolved Product choices:**

1. `C04-PD-01` Creator Team command-capability policy.
2. `C04-PD-02` physical fulfillment destination confirmation/snapshot policy.

The C-03 runtime seam does **not** block C-04 Product freeze because its Product/architecture contract is already accepted and exact. Runtime acceptance blocks implementation.

No other area should be added to the Parent questionnaire unless Parent deliberately reopens frozen shared authority.

## 26. `blocks_architecture_preparation`

**No technical discovery blocks conditional architecture preparation.** The audit provides sufficient state, command, persistence, dependency, branch-topology, and frontend reuse evidence.

Organizationally, architecture remains unauthorized until Parent reviews this audit and changes the gate. A final architecture freeze should consume decisions C04-PD-01 and C04-PD-02. C-03 runtime completion need not delay preparation, but C-04 architecture must name its exact acceptance gate and must not design against the current nonconforming provisioner.

Recommended preparation boundaries:

- prepare one shared-domain architecture delta, not a Creator module rewrite;
- prepare the canonical integration/migration topology against the real C-03/C-05 base;
- prepare a C-04 Frontend State Family Register seeded from current production and Phase G;
- prepare command/read/event/address/actor/document contracts conditionally on the two Product decisions;
- do not implement, migrate, invoke Stitch, or wire providers during preparation.

## 27. `recommended_next_gate`

Recommended next Parent gate:

`C04_PARENT_AUDIT_REVIEW_AND_MINIMAL_PRODUCT_FREEZE_V1`

At that gate Parent should:

1. accept, correct, or reject this systems-understanding audit;
2. decide only C04-PD-01 and C04-PD-02;
3. publish the minimal C-04 Product Decision Register/freeze;
4. if satisfied, authorize C-04 architecture preparation against the frozen shared domain, accepted C-03 port contract, and accepted C-05 contracts;
5. leave C-03 autonomous implementation running independently;
6. withhold C-04 implementation authorization until section 24 is accepted and architecture/preflight are separately approved.

No UI/UX or Stitch gate is recommended now. The later frontend worker should first reconcile current production, accepted Collaboration runtime, Phase G state evidence, Aurora, and the two new state families. Escalate to UI/UX/Stitch only if that process identifies a specific unresolved compositional problem.

---

## Historical Parent-review return state

```text
C04_SYSTEMS_AUDIT = COMPLETED_FOR_PARENT_REVIEW
C04_PRODUCT_LOGIC = NOT_YET_FROZEN
C04_PRODUCT_DECISION_REGISTER = PREPARED_FOR_PARENT_REVIEW
C04_ARCHITECTURE = NOT_YET_AUTHORIZED
C04_IMPLEMENTATION = NOT_AUTHORIZED
C04_C03_RUNTIME_DEPENDENCY = IN_PROGRESS
```

This block records the audit's original return state. Parent subsequently accepted the audit; current authority and dependency state are defined by the accepted C-04 Product, reconciliation, convergence, architecture, and finite-plan artifacts.
