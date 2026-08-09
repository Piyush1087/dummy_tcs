# Creator Shop Collaboration Module — Canonical Entry Point

Status: CANONICAL / FROZEN FOR IMPLEMENTATION
Version: 1.0

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

1. `collaboration/backend/collaboration_schema.prisma` — canonical persisted Collaboration truth, v1.1 frozen.
2. `backend/validation/collaboration/collaboration.schema.ts` — executable input/query boundary validation.
3. `collaboration/backend/command_contract.md` and `collaboration/backend/read_model_contract.md` — canonical mutation/query contracts.
4. `collaboration/backend/implementation_map.md` — production NestJS migration/orchestration instructions.
5. Frozen domain contracts under `collaboration/contracts/` — product/domain semantics and ownership boundaries.
6. Frontend contracts under `frontend/collaboration/` — UI state, interaction, copy, hydration and production modification behavior.
7. Reconciliation/review/baseline artifacts under `collaboration/backend/` — implementation evidence and traceability; they do not override the canonical layers above.

If a lower-authority file conflicts with a higher-authority file, do not silently implement the lower-authority version. Resolve the conflict against the frozen product decision first.

## Canonical domain contracts

- `collaboration/contracts/collaboration_domain_contract.md`
- `collaboration/contracts/collaboration_runtime_contract.md`
- `collaboration/contracts/collaboration_workflow_state_contract.md`
- `collaboration/contracts/collaboration_commercial_resolution_contract.md`
- `collaboration/contracts/collaboration_integration_contract.md`

These five contracts define aggregate identity, lifecycle/workflow, runtime transition rules, commercial/escrow/resolution policy and cross-module ownership.

## Canonical backend package

Implementation-authority files:

- `collaboration/backend/collaboration_schema.prisma`
- `collaboration/backend/command_contract.md`
- `collaboration/backend/read_model_contract.md`
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
- Full agreed Creator cash fee is secured in escrow when the platform/escrow rail applies.
- Advance percentage is configuration, not a fixed 30/70 payment split.
- BARTER is not a payment rail; zero-cash + product/service consideration represents barter-like value exchange naturally.
- Fulfillment comes from frozen Create Campaign Brand Support configuration, never Brand industry.
- The second unresolved Fulfillment failure hard-stops normal execution with Creator entitlement 0 and full Brand refund; fault adjudication is not required for this MVP outcome.
- Production is per locked Deliverable. Each Deliverable has independent submissions/version history and a maximum of two Brand-requested revision rounds.
- Every submitted version gets a 72h Brand review deadline.
- `AUTO_APPROVED` satisfies Production but does not itself authorize public posting.
- Publishing/compliance is Deliverable-aware; there is no universal Collaboration-level live-post URL.
- Financial entitlement is Collaboration-owned; money movement is Payout-owned.
- Completion depends on required execution + authoritative financial settlement, not feedback.
- Feedback is post-completion and double-blind until both submit or the 48h window expires.
- Persisted HTTP/backend reads reconstruct the Collaboration. WebSocket is notification/invalidation only.
- Chat/system messages are projections/communication; they do not create workflow authority.

## Explicit open dependencies

The module is frozen for implementation while preserving several intentionally open integration details:

1. **Upstream publishing applicability authoring/derivation.** `publishingRequired` is a required locked fact per Deliverable Execution, but the Campaign/Brief rule that determines it is not yet frozen. Provisioning must resolve it explicitly and must never default it to false.
2. **Pause semantics.** Lifecycle value exists; pause/resume authority, timer behavior and deadline effects remain unassigned.
3. **Scheduler technology.** 72h auto-approval and 48h feedback reveal require stale-safe SYSTEM commands; the queue/cron/worker technology is implementation-owned.
4. **Asset provider.** Collaboration persists provider-neutral asset/evidence references; storage/upload provider remains outside Collaboration.
5. **Exact Payout/FX API/event shapes.** Commercial entitlement and evidence boundaries are frozen; provider-specific execution contracts may be reconciled during implementation.

These are not permission to invent competing domain semantics.

## Production migration principle

Production already contains working Collaboration infrastructure. Use `collaboration/backend/implementation_map.md` and `frontend/collaboration/implementation_map.md` to evolve it via RETAIN / ADAPT / SPLIT / RETIRE / MOVE / NEW classifications.

Do not create parallel operational aggregates, a new frontend from scratch, a generic state-update API, or a second escrow/payment domain.

## Developer/Codex handoff

Use `collaboration/developer_handoff_manifest.md` as the implementation reading order and task boundary. It distinguishes canonical inputs from production evidence and specifies what may and may not be inferred.

## Change discipline

Canonical files may be changed only when a product decision is deliberately unfrozen or a verified implementation contradiction requires reconciliation. When changing a frozen decision, update every affected canonical layer—domain contract, Prisma, command/read contract, Zod, backend implementation map and frontend artifacts as applicable—rather than patching one layer in isolation.
