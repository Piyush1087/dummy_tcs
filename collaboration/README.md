# Creator Shop Collaboration Module — Canonical Entry Point

Status: CANONICAL / FROZEN FOR IMPLEMENTATION
Version: 1.2

This directory is the canonical entry point for the Creator Shop Collaboration module. It defines the independent operational aggregate created from one approved Application and the execution workflow from commercial agreement through securement, fulfillment, production, publishing/settlement, completion and post-completion feedback.

## Scope

Collaboration is an independent module. It does not belong to Campaign, CampaignCreator, Payout, Asset, Settings, Intelligence or Conversation even when it consumes data or services from those modules.

Canonical creation identity:

`specific APPROVED Application -> at most one Collaboration`

Multiple approved Applications for the same Creator in the same Campaign may therefore create multiple Collaborations. Campaign × Creator is not Collaboration identity.

The active workflow is:

`NEGOTIATION -> SECUREMENT -> FULFILLMENT -> PRODUCTION -> PUBLISHING_SETTLEMENT -> COMPLETED`

Feedback is post-completion, not Stage 6.

Canonical lifecycle is independent from workflow stage:

`ACTIVE | PAUSED | COMPLETED | CANCELLED | TERMINATED`

`PAUSED` is intentionally reserved without Brand/Creator command authority, timer behavior or deadline effects. Future Admin-resolution policy may assign it.

## Canonical authority order

When Collaboration artifacts overlap, use this order:

1. `collaboration/backend/collaboration_schema.prisma` — canonical persisted Collaboration truth, v1.2 frozen.
2. `collaboration/backend/financial_boundary_reconciliation.md`, `collaboration/backend/financial_schema_delta.md` and `collaboration/backend/financial_contract_reconciliation.md` — canonical Phase 3.1 financial ownership/schema/runtime overlay for pricing, India commission/GST, Escrow reserve and future Payout boundaries.
3. `collaboration/backend/execution_open_decision_freeze.md` — canonical Phase 4 execution-policy overlay for publishing applicability ownership, auto-approval/publication authorization, end-reason classification and Brand Support `OTHER` handling.
4. `backend/validation/collaboration/collaboration.schema.ts` — executable input/query boundary validation.
5. `collaboration/backend/command_contract.md` and `collaboration/backend/read_model_contract.md` — canonical mutation/query contracts, read together with the frozen overlays above.
6. `collaboration/backend/implementation_map.md` — production NestJS migration/orchestration instructions.
7. Frozen domain contracts under `collaboration/contracts/` — product/domain semantics and ownership boundaries, read together with the frozen overlays where financial or Phase 4 execution semantics are affected.
8. Frontend contracts under `frontend/collaboration/` — UI state, interaction, copy, hydration and production modification behavior.
9. Other reconciliation/review/baseline artifacts under `collaboration/backend/` — implementation evidence and traceability; they do not override the canonical layers above.

If a lower-authority file conflicts with a higher-authority file, do not silently implement the lower-authority version. Resolve the conflict against the frozen product decision first.

## Canonical domain contracts

- `collaboration/contracts/collaboration_domain_contract.md`
- `collaboration/contracts/collaboration_runtime_contract.md`
- `collaboration/contracts/collaboration_workflow_state_contract.md`
- `collaboration/contracts/collaboration_commercial_resolution_contract.md`
- `collaboration/contracts/collaboration_integration_contract.md`

These five contracts define aggregate identity, lifecycle/workflow, runtime transition rules, commercial/escrow/resolution policy and cross-module ownership.

Canonical overlays:

- `collaboration/backend/financial_boundary_reconciliation.md`
- `collaboration/backend/financial_schema_delta.md`
- `collaboration/backend/financial_contract_reconciliation.md`
- `collaboration/backend/execution_open_decision_freeze.md`

## Canonical backend package

Implementation-authority files:

- `collaboration/backend/collaboration_schema.prisma`
- `collaboration/backend/command_contract.md`
- `collaboration/backend/read_model_contract.md`
- `collaboration/backend/financial_boundary_reconciliation.md`
- `collaboration/backend/financial_schema_delta.md`
- `collaboration/backend/financial_contract_reconciliation.md`
- `collaboration/backend/execution_open_decision_freeze.md`
- `collaboration/backend/implementation_map.md`
- `backend/validation/collaboration/collaboration.schema.ts`
- `backend/validation/collaboration/collaboration.schema.test.ts`

Traceability/reconciliation files:

- `collaboration/backend/production_schema_baseline.prisma`
- `collaboration/backend/schema_reconciliation.md`
- `collaboration/backend/dependency_check.md`
- `collaboration/backend/schema_review.md`
- `collaboration/backend/integrated_schema_check.md`
- `collaboration/backend/executable_contract_reconciliation.md`

The production baseline is evidence, not the target schema.

## Canonical frontend package

The Collaboration frontend artifacts live in `frontend/collaboration/` because they reconcile the shared production frontend architecture rather than creating a second UI tree inside this module directory.

- `frontend/collaboration/state_map.md`
- `frontend/collaboration/interaction_map.md`
- `frontend/collaboration/ui_domain_mapping.md`
- `frontend/collaboration/implementation_map.md`
- `frontend/collaboration/copy_contract.md`
- `frontend/collaboration/creator_context_contract.md`
- `frontend/collaboration/realtime_hydration_contract.md`

Frontend implementation principle: retain and adapt the existing Collaboration workspace, chat, command-client and realtime architecture. Do not rebuild the module from scratch.

## Core implementation invariants

- One approved Application is the Collaboration creation/idempotency source.
- Collaboration retains source references plus a locked execution snapshot; later Campaign edits do not silently mutate active obligations.
- Backend commands own transitions; clients never PATCH lifecycle/stage/substate directly.
- `actionRequiredBy` and `availableActions` are derived read-model outputs, not persisted workflow authority.
- For the platform/escrow rail, Securement locks 100% of the Collaboration commercial reserve, not merely the Creator fee.
- For India MVP, commercial reserve = Creator gross fee + plan-owned platform commission + GST on platform commission only.
- Current Founder's Plan platform commission = 7%, resolved outside Collaboration and snapshotted when terms lock.
- Current India platform-commission GST = 18%; GST is not applied to Creator gross fee.
- Gateway/card acquisition charges remain Escrow-owned and outside Collaboration reserve/refund; the current card processing charge is non-refundable.
- Commission and GST follow Creator gross entitlement/refund proportionally.
- Creator TDS/withholding is deliberately deferred from MVP Collaboration runtime and remains future Payout-owned logic.
- Advance percentage is configuration, not a fixed 30/70 payment split.
- BARTER is not a payment rail; zero-cash + product/service consideration represents barter-like value exchange naturally.
- Fulfillment comes from frozen Create Campaign Brand Support configuration, never Brand industry.
- `UceBrandSupportType.OTHER` remains `OTHER` and uses generic provider-neutral fulfillment evidence plus Creator confirmation; it must not be remapped into a second taxonomy.
- The second unresolved Fulfillment failure hard-stops normal execution with Creator entitlement 0 and full Brand commercial refund entitlement; fault adjudication is not required for this MVP outcome.
- Production is per locked Deliverable. Each Deliverable has independent submissions/version history and a maximum of two Brand-requested revision rounds.
- Every submitted version gets a 72h Brand review deadline.
- `publishingRequired` is an explicit Brief Deliverable authoring fact, locked into each `CollaborationDeliverableExecution`; it is not inferred from Campaign objective, industry, platform or deliverable format.
- Explicit Brand approval of a publishing-required Deliverable also authorizes that approved content for publication.
- `AUTO_APPROVED` satisfies Production but does not authorize public posting. Brand must subsequently `AuthorizePublishing` or `DeclinePublishing` for a publishing-required auto-approved Deliverable.
- Brand-directed non-publication is distinct from Creator publishing non-performance and follows the protected-Advance financial path.
- Publishing/compliance is Deliverable-aware; there is no universal Collaboration-level live-post URL.
- Financial entitlement is Collaboration-owned; Escrow owns reserve/ledger movement and Payout owns payout/refund execution.
- Completion depends on required execution + authoritative financial settlement, not feedback.
- Feedback is post-completion and double-blind until both submit or the 48h window expires.
- Persisted HTTP/backend reads reconstruct the Collaboration. WebSocket is notification/invalidation only.
- Chat/system messages are projections/communication; they do not create workflow authority.

## Explicit open dependencies

The module is frozen for implementation while preserving several intentionally open integration details:

1. **Pause semantics.** Lifecycle value exists; pause/resume authority, timer behavior and deadline effects remain unassigned.
2. **Scheduler technology.** 72h auto-approval and 48h feedback reveal require stale-safe SYSTEM commands; the queue/cron/worker technology is implementation-owned.
3. **Asset provider.** Collaboration persists provider-neutral asset/evidence references; storage/upload provider remains outside Collaboration.
4. **Exact Payout/FX API/event shapes.** Gross commercial entitlement/refund and evidence boundaries are frozen; provider-specific execution contracts may be reconciled during implementation.
5. **India Creator TDS implementation.** TDS/withholding is intentionally deferred for MVP and belongs to the later dedicated Payout phase.
6. **Non-India financial policies.** The v1.2 financial model is geography-extensible, but only India commission/GST/escrow policy is frozen here.
7. **Publication-consent timeout.** None is frozen for MVP; do not invent automatic publication authorization or decline after Production auto-approval.
8. **Compliance timeout/auto-resolution.** No such policy is frozen.

The upstream Brief Deliverable schema still requires an implementation patch to persist the now-frozen `publishingRequired` authoring fact. Until then, the explicit trusted provisioning applicability map remains a temporary compatibility boundary.

These are not permission to invent competing domain semantics.

## Production migration principle

Production already contains working Collaboration, Subscription and Escrow infrastructure. Use the canonical backend artifacts and frontend implementation map to evolve it via RETAIN / ADAPT / SPLIT / RETIRE / MOVE / NEW classifications.

Do not create parallel operational aggregates, a new frontend from scratch, a generic state-update API, a second escrow/payment domain, or a second subscription/pricing domain.

## Developer/Codex handoff

Use `collaboration/developer_handoff_manifest.md` as the implementation reading order and task boundary. It distinguishes canonical inputs from production evidence and specifies what may and may not be inferred.

For Phase 3 financial correction, Codex/developers must additionally read the three Phase 3.1 financial artifacts before changing Negotiation/Securement code. For Phase 4 execution, they must also read `collaboration/backend/execution_open_decision_freeze.md` before changing Fulfillment, Production, Publishing or exception behavior.

## Change discipline

Canonical files may be changed only when a product decision is deliberately unfrozen or a verified implementation contradiction requires reconciliation. When changing a frozen decision, update every affected canonical layer—domain contract, Prisma, command/read contract, Zod, backend implementation map and frontend artifacts as applicable—rather than patching one layer in isolation.
