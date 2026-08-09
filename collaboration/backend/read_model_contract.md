# Collaboration Backend — Query / Read Model Contract

**Status:** CANONICAL / FROZEN  
**Depends on:** frozen Collaboration contracts + `collaboration_schema.prisma` v1.1 + frozen frontend reconciliation 6.7B

## 1. Principle

Reads reconstruct persisted Collaboration truth. WebSocket/realtime is an invalidation/latency mechanism only.

Read models may derive presentation fields such as `actionRequiredBy`, `availableActions`, labels and role-specific commercial display. Derived projections must not become independent workflow authority.

## 2. Required query surfaces

### `ListCollaborations`

Supports Brand or Creator inbox/list views.

Suggested filters:

- Campaign;
- Brief;
- lifecycle;
- current stage;
- search;
- action required / waiting projection where useful.

Row output should include:

- `collaborationId`;
- source Campaign/Brief/Product-or-CampaignAsset context required to distinguish multiple Collaborations with the same counterpart;
- counterpart identity summary;
- lifecycle;
- current stage + stage status;
- derived `actionRequiredBy`;
- derived compact `availableActions` where needed;
- last-message snippet/time;
- viewer unread count;
- updated time.

Internal Application/Collaboration IDs other than `collaborationId` do not need to be user-facing.

### `GetCollaborationDetail`

Returns the authoritative hydrated Collaboration workspace DTO.

Canonical sections:

- `identity`;
- `sourceContext`;
- `lifecycle`;
- `workflow`;
- `commercial`;
- `securement`;
- `fulfillment`;
- `deliverables[]` with submission versions;
- `publishing[]` or publishing data under each Deliverable;
- `settlement`;
- `resolution`;
- `feedback` / feedback window;
- role-specific context links/projections.

### `ListCollaborationMessages`

Returns persisted `USER` + `SYSTEM` messages in chronological order with pagination/cursor support as needed.

Messages are conversation history, not workflow authority.

### `GetCreatorContextForBrand`

Brand-only read projection opened from Collaboration header.

Returns:

- Creator identity/platform basics;
- current Collaboration summary;
- factual previous Collaboration history between this Brand and this Creator only;
- prior outcome/feedback projection where permitted.

Do not expose other Brands' relationship history, hidden Trust scores or Admin notes.

### `GetBrandContextForCreator`

Creator-facing lightweight Brand/Campaign/Product/Brief/current Collaboration context.

## 3. Identity projection

`identity` should include at minimum:

- `collaborationId`;
- `sourceApplicationId` for backend traceability (may be omitted from user-facing DTO if not needed);
- `campaignId`;
- `campaignCreatorId` where useful internally;
- `campaignAssetId`;
- `briefId`;
- Brand identity summary;
- Creator identity summary.

The same Creator may have multiple Collaborations in one Campaign; DTO/UI must not assume Campaign × Creator uniqueness.

## 4. Lifecycle/workflow projection

Expose:

- `lifecycle`;
- `currentStage`;
- `currentStageStatus`;
- `endedFromStage` / terminal reason/time where applicable;
- `completedAt`;
- derived `actionRequiredBy`;
- derived `availableActions[]`.

`actionRequiredBy` is derived from authoritative lifecycle + stage-specific state. It is not persisted canonical aggregate truth.

Suggested `availableActions` values should map 1:1 to backend command names/capabilities rather than arbitrary UI button strings.

## 5. Commercial / Securement projection

Return authoritative agreed terms and funding state, not frontend calculations:

- proposal/counter/agreed Creator fee as applicable;
- currency;
- Advance percentage snapshot;
- Advance amount;
- balance amount;
- non-cash consideration;
- payment rail;
- required secured amount;
- confirmed secured amount;
- Securement state;
- external evidence references only where actor is permitted to view them.

Role-specific FX/display conversions may be supplied as projections, but must be clearly distinguishable from canonical commercial amount/currency.

## 6. Fulfillment projection

Return exact locked Brand Support applicability/type plus operational state/evidence appropriate to the viewer:

- applies / skipped;
- Brand Support type;
- current Fulfillment state;
- issue count;
- shipment/access/redemption/service evidence as appropriate;
- Creator confirmation timestamps;
- issue/remediation history.

Do not derive fulfillment type from Brand industry.

## 7. Deliverable projection

Each Deliverable read model includes:

- `deliverableExecutionId`;
- source Deliverable reference;
- definition snapshot/display summary;
- display order;
- current Deliverable state;
- revision request count;
- `publishingRequired` locked fact;
- latest submission summary;
- submission version history;
- approval/auto-approval/hard-stop timestamps;
- derived available actions.

Each Submission Version includes:

- `submissionVersionId`;
- version number;
- provider-neutral asset reference / preview projection;
- review state;
- Brand feedback;
- review deadline;
- reviewed/auto-approved timestamps.

For `UNDER_REVIEW`, read model may derive human-friendly `reviewTimeRemaining` from `reviewDeadlineAt`; the persisted deadline remains source truth.

## 8. Publishing projection

Per Deliverable expose:

- publishing applicability;
- publication authorization state and evidence/timestamp;
- publishing state;
- publication evidence reference/metadata;
- correction reason;
- compliance verification state/timestamp;
- blocked reason where applicable.

Critical projection rule:

- `APPROVED` may produce publication authorization according to locked requirements;
- `AUTO_APPROVED` never implies publication authorization by itself.

## 9. Settlement and resolution projection

Keep entitlement and execution visibly separate.

Resolution projection:

- lifecycle outcome/reason;
- Creator entitlement amount;
- Brand refund entitlement amount;
- currency;
- financial resolution status;
- residual obligations;
- resolution evidence/decision context where viewer may see it.

Settlement projection:

- `NOT_ELIGIBLE | ELIGIBLE | PROCESSING | SETTLED | BLOCKED`;
- Creator settlement amount / Brand refund execution amount;
- execution/confirmation references where appropriate;
- blocked reason.

Frontend must not calculate kill fee/refund split.

## 10. Completed + feedback projection

For `COMPLETED`, return a completion summary independent of feedback:

- completion timestamp;
- Deliverable completion summary;
- Publishing completed/not required summary;
- settlement status.

Feedback projection includes:

- viewer submission state;
- counterparty submission/reveal state without leaking hidden review contents;
- feedback window close time;
- revealed feedback only after canonical reveal condition.

## 11. Blocked and Pause projections

`BLOCKED` must expose:

- reason/category;
- derived actor/action requirement;
- whether user has an available action;
- otherwise waiting/Admin/System state.

`PAUSED` is representable as lifecycle, but no normal Brand/Creator pause/resume action should be emitted until policy is frozen.

## 12. Realtime/hydration invariant

On entry/re-entry:

`GET list -> GET selected detail -> GET messages -> render -> attach realtime`

On realtime event:

`event -> invalidate/refetch authoritative read model`

Socket payloads must not be the only location of reconstructable state.

## 13. Error / stale-state responses

Mutation responses should return or enable immediate retrieval of the updated authoritative read model.

For optimistic concurrency/stale state, return a stable conflict code and current aggregate version so clients can refetch rather than guessing the transition.
