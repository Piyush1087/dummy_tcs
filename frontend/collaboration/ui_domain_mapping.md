# Collaboration UI-Domain Mapping

Status: FROZEN from Collaboration 6.7B frontend reconciliation.

## Purpose

Map Collaboration frontend surfaces to authoritative domain/read-model truth. The frontend presents Collaboration state; it does not own workflow transitions or financial policy.

## Workspace

| UI surface | Domain/read-model source | Notes |
|---|---|---|
| Thread identity | `collaborationId` + source context summary | Internal IDs not shown to users. |
| Counterparty | Brand/Creator read model | Click opens context drawer. |
| Campaign context | Collaboration source snapshot/reference | Used to distinguish Collaboration scope. |
| Product/Brief/Deliverable summary | Locked execution snapshot | Must survive later Campaign edits. |
| Lifecycle badge | Collaboration lifecycle | Separate from workflow stage. |
| Stage/status | workflow stage + stage status | Do not infer from chat/messages. |
| Action required | `actionRequiredBy` | Backend-derived. |
| Available buttons | `availableActions` | Backend authoritative. |
| Last message | persisted conversation projection | Not workflow truth. |

## Negotiation

| UI element | Domain source |
|---|---|
| Creator proposal | Collaboration commercial negotiation state |
| Brand counter | Collaboration commercial negotiation state |
| final agreed fee | locked Collaboration commercial terms |
| currency display | commercial canonical amount + FX/display projection |
| Accept/Counter/Decline availability | `availableActions` |

Do not render fixed 30/70 values. Advance percentage is inherited from Campaign and snapshotted into Collaboration.

## Securement

| UI element | Domain source |
|---|---|
| agreed cash fee | locked Collaboration commercial terms |
| amount to secure | full agreed cash fee for escrow rail |
| Advance protection % | locked commercial snapshot |
| funding status | Payout/escrow confirmation projected into Collaboration |
| manual-payment state | Collaboration obligation state + Creator confirmation |
| payout-details prerequisite | Settings/Payout-owned availability |

`BARTER` is not a payout mode. Cash-zero Collaboration may skip monetary securement while retaining non-monetary Fulfillment obligations.

## Fulfillment

| UI element | Domain source |
|---|---|
| fulfillment applicability | locked Create Campaign-derived fulfillment config |
| subtype | canonical fulfillment configuration |
| shipment/access/service fields | subtype-specific execution/evidence |
| confirmation state | Collaboration Fulfillment state |
| issue count/status | Collaboration Fulfillment execution |
| hard-stop/result | Collaboration lifecycle + resolution read model |

Never choose Physical/Digital/Service UI from industry alone.

## Production

Production is per Deliverable Execution.

| UI element | Domain source |
|---|---|
| Deliverable cards | locked Collaboration Deliverable Executions |
| status | per-Deliverable execution status |
| latest submission | current Submission Version |
| version history | append-only Submission Versions |
| revision count | per-Deliverable revision state |
| Brand feedback | revision/review evidence |
| review deadline | current submitted version timer metadata |
| auto-approved state | authoritative Deliverable status |
| asset preview/reference | asset/media abstraction |

`AUTO_APPROVED` satisfies Production but does not itself authorize public posting.

## Publishing

| UI element | Domain source |
|---|---|
| publishing required | locked Deliverable requirement |
| publication authorization | explicit Brand approval/contract state |
| evidence | per-Deliverable publishing evidence |
| correction status | publishing/compliance state |
| compliance verified | authoritative verification result |

One global `livePostUrl` is not canonical.

## Settlement

| UI element | Domain source |
|---|---|
| Creator entitlement | Collaboration financial-resolution/settlement read model |
| Brand entitlement/refund | Collaboration financial-resolution read model |
| processing/settled state | Payout execution confirmation |

Frontend never calculates payment/refund amounts or assumes a fixed Advance split.

## Completion

Completed panel consumes:

- `lifecycle = COMPLETED`;
- completion timestamp;
- Deliverable resolution summary;
- publishing completed/not-required summary;
- settlement status;
- commercial summary.

Feedback is rendered below completion and does not own lifecycle.

## Cancellation / termination

Resolution Card consumes:

- lifecycle;
- reason;
- ended-from stage;
- Creator entitlement;
- Brand entitlement/refund;
- financial resolution status;
- residual obligations.

Frontend does not determine fault or lifecycle classification.

## Pause

`PAUSED` may be displayed generically when authoritative backend lifecycle says Paused. Actor authority, deadline/timer behavior, resume behavior and allowed actions remain intentionally unassigned.

## Chat/system messages

Human messages come from persisted conversation data. System messages are projections of authoritative domain events. Neither is used to infer workflow state.

## Realtime

WebSocket events are invalidation/change signals. Authoritative current UI state is reconstructed through persisted backend reads.

## Context drawers

### Creator Context Drawer
Consumes Creator identity/intelligence summaries plus Brand-Creator relationship history query. Shows only this Brand's factual previous Collaboration relationship, not other Brands' history or internal Trust/admin intelligence.

### Brand Context Drawer
Consumes Brand summary plus current Campaign/Product/Brief/Collaboration context.

## Target UI read-model direction

Conceptual shape:

- identity/source context;
- lifecycle;
- workflow `{ stage, status, actionRequiredBy, availableActions }`;
- commercials;
- securement;
- fulfillment;
- deliverables with submissions;
- publishing requirements/evidence;
- settlement;
- resolution;
- feedback.

Exact TypeScript DTO field names are deferred to backend/read-model reconciliation.