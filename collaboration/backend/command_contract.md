# Collaboration Backend — Command Contract

**Status:** CANONICAL / FROZEN  
**Depends on:** frozen Collaboration contracts (6.2–6.6) + `collaboration_schema.prisma` v1.1  
**Purpose:** Define the executable mutation boundary. Clients submit domain commands; they never PATCH lifecycle/stage/substate directly.

## 1. Command envelope

Every consequential command carries, either explicitly or through authenticated request context:

- `collaborationId`;
- authenticated actor identity and actor class (`BRAND | CREATOR | SYSTEM | ADMIN`);
- command/idempotency identity where retries are possible;
- optional expected aggregate version for stale-state protection;
- action-specific payload/evidence.

Runtime order is authoritative:

`authenticate -> authorize -> lifecycle gate -> stage/substate gate -> validate payload/evidence -> validate external prerequisites -> atomically update state + append event -> trigger retryable side effects`

The frontend may hide/disable actions, but only backend runtime decides whether a command is valid.

## 2. Provisioning command

### `ProvisionCollaborationFromApprovedApplication`

Actor: `SYSTEM` or trusted Campaign/Application backend workflow.

Input:

- `sourceApplicationId`.

Runtime requirements:

- Application exists and is `APPROVED`;
- one Application may create at most one Collaboration;
- load Campaign/CampaignCreator/CampaignAsset/Brief/Brand/Creator lineage from Application;
- build the locked Collaboration execution snapshot;
- create one `CollaborationDeliverableExecution` per required Brief Deliverable;
- require an explicit resolved `publishingRequired` value for every Deliverable Execution; do not default it;
- explicitly initialize Negotiation applicability/state;
- initialize stage/substate records consistently;
- append creation event/system message atomically where practical.

Idempotency key: `sourceApplicationId`.

## 3. Negotiation commands

### `AcceptCreatorProposal`
Actor: `BRAND`.

Valid from: `NEGOTIATION / AWAITING_BRAND_DECISION`.

Effect: lock Creator-specific commercial terms; Negotiation completes; backend evaluates Securement applicability.

### `CounterCreatorProposal`
Actor: `BRAND`.

Payload: `counterFee`.

Valid from: `NEGOTIATION / AWAITING_BRAND_DECISION` when the one Brand counter is still available.

Effect: store Brand counter; move to `AWAITING_CREATOR_DECISION`.

### `AcceptBrandCounter`
Actor: `CREATOR`.

Valid from: `NEGOTIATION / AWAITING_CREATOR_DECISION`.

Effect: lock counter as agreed fee; Negotiation completes; evaluate Securement.

### `DeclineBrandCounter`
Actor: `CREATOR`.

Valid from: `NEGOTIATION / AWAITING_CREATOR_DECISION`.

Effect: Collaboration becomes `CANCELLED` under negotiation-failure resolution; no Creator payout entitlement.

### `EndNegotiation`
Actor: permitted `BRAND`/`CREATOR` according to runtime policy.

Effect: explicit early cancellation only where the frozen cancellation policy permits it. Client never supplies lifecycle value directly.

## 4. Securement commands

### `RequestEscrowFunding`
Actor: `BRAND`.

Valid when platform/escrow rail applies and agreed Creator cash fee > 0.

Effect: request funding of **100% of agreed Creator cash fee**. Advance percentage does not reduce the amount secured.

### `ConfirmEscrowFunding`
Actor: `SYSTEM` from authoritative Payout/Escrow evidence.

Payload: external confirmation reference and confirmed amount.

Effect: mark Securement completed only after authoritative funding evidence is validated; backend evaluates Fulfillment applicability.

### `ReportManualPayment`
Actor: `BRAND`.

Valid only if Manual rail capability is enabled.

Payload: payment evidence reference.

Effect: move to Creator confirmation state; Brand assertion alone is not authoritative receipt.

### `ConfirmManualPaymentReceived`
Actor: `CREATOR`.

Effect: Manual Securement completes and backend evaluates Fulfillment applicability.

### `ReportManualPaymentNotReceived`
Actor: `CREATOR`.

Effect: Securement becomes blocked/disputed. No automatic allocation or termination occurs.

## 5. Fulfillment commands

Fulfillment applicability/type comes from the locked Campaign Brand Support snapshot, never Brand industry.

### `ProvideFulfillment`
Actor: `BRAND`.

Payload: type-appropriate execution/evidence fields, for example shipment tracking, access/service/redemption evidence or generic evidence reference.

Effect: records fulfillment evidence and moves to Creator confirmation where applicable.

### `ConfirmFulfillment`
Actor: `CREATOR`.

Effect: Fulfillment completes; backend activates Production.

### `ReportFulfillmentIssue`
Actor: `CREATOR`.

Payload: issue code, description, optional evidence reference.

Effect:

- issue #1 -> remediation allowed;
- issue #2 -> normal execution hard-stops; Creator entitlement = 0; Brand refund entitlement = full secured amount; no fault adjudication required.

### `ProvideFulfillmentRemediation`
Actor: `BRAND`.

Valid only after issue #1.

Effect: stores remediation evidence and returns flow to Creator confirmation.

## 6. Production commands

All Production commands target a specific `deliverableExecutionId`.

### `SubmitDeliverable`
Actor: `CREATOR`.

Payload:

- `deliverableExecutionId`;
- provider-neutral `assetRef`;
- optional submission metadata.

Effect: append next Submission Version; set exact version review state to `UNDER_REVIEW`; set Deliverable state `UNDER_REVIEW`; persist `reviewDeadlineAt = submission time + 72h`; append event.

### `ApproveDeliverable`
Actor: `BRAND`.

Payload: `deliverableExecutionId`, target `submissionVersionId`.

Effect: exact submitted version -> `APPROVED`; Deliverable -> `APPROVED`; explicit Brand approval can create publication authorization when that Deliverable is contractually publishing-required.

### `RequestDeliverableRevision`
Actor: `BRAND`.

Payload: target submission version + required Brand feedback.

Effect: append review result; increment that Deliverable's revision-request count; Deliverable -> `REVISION_REQUESTED` while normal allowance remains.

Maximum normal Brand-requested revision rounds = 2 per Deliverable.

### `RejectFinalDeliverable`
Actor: `BRAND`.

Valid only after the final permitted submission when no further ordinary revision is available.

Effect: target version -> final rejected; Deliverable -> `HARD_STOP`; Collaboration enters Production-hard-stop termination resolution. Creator entitlement = actual Advance amount; Brand refund entitlement = balance.

### `AutoApproveDeliverable`
Actor: `SYSTEM`.

Payload: exact `submissionVersionId` and expected state/version.

Valid only after `reviewDeadlineAt` has expired and stale-state checks confirm the version is still under review.

Effect: version + Deliverable -> `AUTO_APPROVED`.

Important: `AUTO_APPROVED` satisfies Production but **does not authorize public publishing**.

## 7. Publishing / compliance commands

All publishing commands target a specific Deliverable Execution.

### `SubmitPublishingEvidence`
Actor: `CREATOR`.

Valid only when publishing is required **and** publication has explicit Brand authorization.

Payload: provider-neutral evidence reference + optional metadata.

### `VerifyPublishing`
Actor: `BRAND` or trusted `SYSTEM` verification path according to implementation.

Effect: publishing/compliance for that Deliverable becomes verified.

### `RequestPublishingCorrection`
Actor: `BRAND`.

Payload: correction reason.

Effect: publishing -> `CORRECTION_REQUIRED`. This does not consume a Production revision.

### `SubmitCorrectedPublishingEvidence`
Actor: `CREATOR`.

Effect: append/update evidence for re-verification without changing Production revision count.

### `BlockPublishingCompliance`
Actor: trusted `ADMIN`/`SYSTEM` path where a dispute or verification issue requires blocking.

Effect: non-terminal blocked state; does not itself allocate funds.

## 8. Settlement / resolution commands

### `EstablishNormalSettlementEligibility`
Actor: `SYSTEM`.

Valid after required execution/publishing/compliance gates are resolved.

Effect: Creator entitlement = full agreed Creator cash fee; creates/updates settlement instruction snapshot.

### `RequestSettlementExecution`
Actor: `SYSTEM` / trusted backend integration.

Effect: send entitlement instruction to Payout; Collaboration moves to processing only after request acceptance as defined by integration.

### `ConfirmSettlementExecution`
Actor: `SYSTEM` from authoritative Payout confirmation.

Effect: settlement -> `SETTLED`; if all required execution obligations are complete, lifecycle -> `COMPLETED`.

### `ConfirmRefundExecution`
Actor: `SYSTEM` from authoritative Payout confirmation.

Effect: update terminal resolution execution status without changing the already-decided entitlement.

### `ApplyAdminResolution`
Actor: `ADMIN`.

Payload includes explicit Creator entitlement, Brand refund entitlement, reason/evidence and optional residual obligations.

Effect: records explicit exceptional resolution; Admin does not directly patch balances or lifecycle tables outside command processing.

## 9. Terminal/exception commands

### `EndCollaboration`
Actor: permitted `BRAND` / `CREATOR` / `ADMIN` according to runtime policy.

Payload: reason/evidence.

Backend classifies canonical outcome (`CANCELLED` or `TERMINATED`) and financial policy; client does not choose the lifecycle enum or payout formula.

### Pause / Resume

Reserved but **not assigned**. No Brand/Creator Pause or Resume command is canonical yet. Future Admin-resolution policy may introduce explicit commands without changing the lifecycle enum.

## 10. Feedback commands

Feedback is post-completion only.

### `SubmitCollaborationFeedback`
Actor: `BRAND` or `CREATOR`.

Payload: integer rating `1..5`, optional review text.

Invariant: one feedback row per Collaboration × author role.

### `RevealFeedback`
Actor: `SYSTEM`.

Valid at the earlier of both parties submitted or 48h window expiry.

Effect: feedback window visibility -> `REVEALED`; does not change lifecycle.

## 11. Conversation commands

### `PostCollaborationMessage`
Actor: `BRAND` or `CREATOR` with Collaboration access.

Payload: message body.

Effect: append `USER` message and update inbox projection fields. Chat text never mutates workflow implicitly.

System messages are generated from domain events/backend effects; clients do not submit arbitrary SYSTEM messages.

## 12. Explicitly prohibited generic mutations

Do not expose generic commands such as:

- `PATCH /collaboration { currentStage }`;
- `setLifecycle(...)`;
- `setDeliverableState(...)`;
- `setSettlementState(...)`;
- `setActionRequiredBy(...)`.

`actionRequiredBy` and `availableActions` are derived read-model outputs. State changes happen through the action-specific commands above.
