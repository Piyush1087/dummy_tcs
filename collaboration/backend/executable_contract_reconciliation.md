# Collaboration Backend — Executable Contract ↔ Frozen Prisma Reconciliation

**Status:** COMPLETE / CANONICAL RECONCILIATION  
**Scope:** Field-by-field reconciliation of `command_contract.md`, `read_model_contract.md`, and `backend/validation/collaboration/collaboration.schema.ts` against frozen `collaboration_schema.prisma` v1.1.  
**Purpose:** Confirm that executable inputs/read outputs are backed by canonical persistence or are explicitly derived/service-owned, and identify any implementation-time initialization rules that must not be inferred.

## 1. Result

The executable contract layer is compatible with frozen Prisma v1.1. No schema redesign is required.

Three implementation rules are mandatory:

1. `CollaborationPublishingExecution` must not be allowed to remain at its Prisma defaults when the corresponding Deliverable has `publishingRequired = true`; provisioning/stage initialization must explicitly set publishing state/authorization state, or defer creation of the publishing row until applicability is evaluated.
2. `CollaborationCommercialAgreement.paymentRail` defaults to `PLATFORM_ESCROW`; if a valid Manual capability is selected, provisioning/terms-lock logic must explicitly set `MANUAL` rather than relying on the default.
3. read-model fields such as `actionRequiredBy`, `availableActions`, progress labels, review-time-remaining, and role-specific display currency remain derived outputs and must never be accepted back as mutation truth.

These are runtime/initialization rules, not reasons to reopen the frozen Prisma schema.

---

## 2. Provisioning

### Command/Zod

`ProvisionCollaborationFromApprovedApplication`

Input fields:

- `sourceApplicationId`
- optional `commandId`
- `deliverablePublishingApplicability[]`
  - `sourceBriefDeliverableId`
  - `publishingRequired`

### Prisma backing

- `sourceApplicationId` -> `Collaboration.sourceApplicationId @unique`
- Application-derived lineage -> `campaignId`, `campaignCreatorId`, `campaignAssetId`, `briefId`, `brandProfileId`, `creatorUserId`
- immutable source context -> `CollaborationExecutionSnapshot`
- one execution row per source Deliverable -> `CollaborationDeliverableExecution`
- explicit publication applicability -> `CollaborationDeliverableExecution.publishingRequired`
- command/event history -> `CollaborationEvent.commandId` / aggregate version

### Derived/service-owned

Provisioning service derives all lineage from the approved Application and validates that the supplied publishing-applicability set exactly covers the required Brief Deliverables.

### Required invariant

Zod ensures the array is present/non-empty, but **service validation must enforce exact coverage and uniqueness against the authoritative Brief Deliverables**. Prisma's `(collaborationId, sourceBriefDeliverableId)` uniqueness is the final database guard, not a substitute for a clean provisioning error.

**Status: PASS.**

---

## 3. Negotiation

### `AcceptCreatorProposal`

No client-authored commercial amount is accepted.

Prisma effect:

- `CollaborationCommercialAgreement.applicationProposedFee` is accepted as source value;
- `agreedCreatorFee` is set by runtime;
- `negotiationState -> LOCKED`;
- `termsLockedAt` set;
- `advanceAmount`, `balanceAmount`, `requiredSecuredAmount` derived from agreed fee + frozen Advance percentage.

### `CounterCreatorProposal`

Zod: `counterFee`.

Prisma:

- `brandCounterFee`;
- `negotiationState -> AWAITING_CREATOR_DECISION`.

### `AcceptBrandCounter`

No amount input.

Prisma:

- `agreedCreatorFee <- brandCounterFee`;
- `negotiationState -> LOCKED`.

### `DeclineBrandCounter`

Prisma:

- aggregate lifecycle/terminal context;
- `negotiationState -> FAILED` where useful;
- `CollaborationFinancialResolution` for zero Creator entitlement / applicable Brand outcome;
- `CollaborationEvent`.

### Derived/service-owned

Advance and balance arithmetic are server-owned. Client never supplies lifecycle or negotiated final amount on acceptance.

**Status: PASS.**

---

## 4. Securement

### `RequestEscrowFunding`

Zod carries Collaboration command envelope only.

Prisma/runtime source fields:

- `agreedCreatorFee`
- `requiredSecuredAmount`
- `paymentRail`
- `securementState`

External request correlation:

- `fundingInstructionRef`

The funding amount is derived server-side as 100% of agreed Creator cash fee.

### `ConfirmEscrowFunding`

Zod:

- `fundingConfirmationRef`
- `confirmedAmount`
- `currency`

Prisma:

- `fundingConfirmationRef`
- `confirmedSecuredAmount`
- `securementState`
- `securementCompletedAt`

Service must compare confirmation amount/currency to the authoritative agreement before completing Securement.

### Manual commands

`ReportManualPayment` -> `manualPaymentEvidenceRef`  
`ConfirmManualPaymentReceived` -> `manualCreatorConfirmedAt`, state/timestamp  
`ReportManualPaymentNotReceived` -> `paymentDisputeRef` or event/resolution evidence + `securementState = PAYMENT_DISPUTED/BLOCKED`

### Required initialization rule

`paymentRail` has a Prisma default of `PLATFORM_ESCROW`. A Manual-enabled Collaboration must explicitly persist `MANUAL`; the default must not be treated as capability discovery.

**Status: PASS WITH MANDATORY INITIALIZATION RULE.**

---

## 5. Fulfillment

### `ProvideFulfillment`

Zod evidence fields map directly to:

- `shipmentTrackingRef`
- `courierName`
- `accessEvidenceRef`
- `redemptionCode`
- `serviceEvidenceRef`
- `genericFulfillmentEvidence`

Runtime sets:

- `state`
- `brandFulfilledAt`

### `ConfirmFulfillment`

Runtime sets:

- `creatorConfirmedAt`
- `completedAt`
- `state = COMPLETED`

### `ReportFulfillmentIssue`

Zod:

- `issueCode`
- `description`
- optional `evidenceRef`

Prisma:

- append `CollaborationFulfillmentIssue`
- transactionally increment `CollaborationFulfillment.issueCount`
- set Fulfillment state
- issue #2 also creates terminal financial resolution/event state.

Authenticated actor supplies `reportedByUserId`; it is not client-authored.

### `ProvideFulfillmentRemediation`

Zod `remediationEvidenceRef` -> issue row `remediationEvidenceRef` + `remediationAt`.

**Status: PASS.**

---

## 6. Deliverable Production

### `SubmitDeliverable`

Zod:

- `deliverableExecutionId`
- `assetRef`
- optional `submissionMetadata`

Prisma:

- append `CollaborationSubmissionVersion`
- `assetRef`
- `submissionMetadata`
- server-derived `versionNumber`
- server-derived `reviewDeadlineAt`
- `reviewState = UNDER_REVIEW`
- Deliverable `state = UNDER_REVIEW`

### `ApproveDeliverable`

Zod includes exact `submissionVersionId` + Deliverable ID.

Prisma runtime changes:

- version `reviewState = APPROVED`
- `reviewedAt`, `reviewedByUserId`
- Deliverable `state = APPROVED`
- `approvedAt`
- publishing authorization evidence where applicable.

### `RequestDeliverableRevision`

Zod:

- exact submission version
- required `brandFeedback`

Prisma:

- version review result / feedback
- Deliverable `revisionRequestCount`
- Deliverable `state = REVISION_REQUESTED`

### `RejectFinalDeliverable`

Maps to:

- version `FINAL_REJECTED`
- Deliverable `HARD_STOP`
- `hardStoppedAt`
- terminal financial resolution.

### `AutoApproveDeliverable`

Maps to:

- exact version `AUTO_APPROVED`
- version `autoApprovedAt`
- Deliverable `AUTO_APPROVED`
- Deliverable `autoApprovedAt`

`expectedAggregateVersion` provides stale-command protection. Runtime must additionally confirm the target version is still the current review target and its deadline has expired.

**Status: PASS.**

---

## 7. Publishing / compliance

### `SubmitPublishingEvidence`

Zod:

- `deliverableExecutionId`
- `publicationEvidenceRef`
- optional `publicationMetadata`

Prisma:

- `CollaborationPublishingExecution.publicationEvidenceRef`
- `publicationMetadata`
- `evidenceSubmittedAt`
- `state = EVIDENCE_SUBMITTED`

### `VerifyPublishing`

Zod optional `complianceEvidenceRef` -> Prisma `complianceEvidenceRef`, `complianceVerifiedAt`, `state = COMPLIANCE_VERIFIED`.

### `RequestPublishingCorrection`

Zod `correctionReason` -> Prisma `correctionReason`, `state = CORRECTION_REQUIRED`.

### `SubmitCorrectedPublishingEvidence`

Same structural evidence payload; runtime updates/replaces current publishing evidence while preserving domain event/audit history. Production revision count is untouched.

### `BlockPublishingCompliance`

Zod:

- `blockedReason`
- optional `evidenceRef`

Prisma:

- `blockedReason`
- `state = BLOCKED`
- optional evidence may be preserved in `CollaborationEvent.payload` because canonical Publishing persistence does not define a second generic block-evidence column.

### Mandatory initialization rule

`CollaborationPublishingExecution` currently has defaults `PUBLISHING_NOT_REQUIRED` and `NOT_REQUIRED`. These defaults are valid only for truly non-publishing Deliverables.

For `publishingRequired = true`, runtime must either:

- create the row with explicit non-default state/authorization initialization; or
- defer creation of the row until Publishing applicability/authorization is evaluated.

A required-publishing Deliverable must never be persisted as “not required” merely because defaults were used.

**Status: PASS WITH MANDATORY INITIALIZATION RULE.**

---

## 8. Settlement and resolution

### Normal settlement

`EstablishNormalSettlementEligibility` has no client-authored amount. Runtime derives the full Creator entitlement from `agreedCreatorFee` and creates/updates:

- `CollaborationFinancialResolution` as appropriate;
- `CollaborationSettlement.creatorSettlementAmount`;
- currency;
- `state = ELIGIBLE`.

### Settlement request / confirmation

External refs map to:

- `payoutInstructionRef`
- `payoutExecutionRef`
- `refundExecutionRef`
- `authoritativeConfirmationRef`
- settlement timestamps/state.

### Admin resolution

Zod maps directly to:

- `creatorEntitlementAmount`
- `brandRefundEntitlementAmount`
- `currency`
- `reasonCode`
- `reasonText`
- `resolutionEvidence`
- `residualObligations`

Authenticated Admin identity supplies `decidedByActorClass`, `decidedByUserId`, and timestamps.

### `EndCollaboration`

Client supplies reason/evidence, not lifecycle or payout amounts. Runtime classification is persisted across:

- `Collaboration.lifecycle`
- terminal context fields
- `CollaborationFinancialResolution`
- `CollaborationEvent`.

Where a lightweight `evidenceRef` does not need a dedicated normalized column, it is valid to preserve it in resolution/event evidence rather than expanding Prisma for every command payload.

**Status: PASS.**

---

## 9. Feedback

### `SubmitCollaborationFeedback`

Zod:

- `rating 1..5`
- optional `reviewText`

Prisma:

- `CollaborationFeedback.rating`
- `reviewText`
- authenticated role/user fields
- `submittedAt`
- uniqueness `(collaborationId, authorRole)`.

### `RevealFeedback`

Runtime updates:

- `CollaborationFeedbackWindow.visibility`
- `revealedAt`

The 48h calculation is runtime/scheduler-owned; `openedAt` and `closesAt` persist the authoritative window.

**Status: PASS.**

---

## 10. Conversation / inbox

### `PostCollaborationMessage`

Zod `body` maps to `CollaborationMessage.body`.

Authenticated runtime supplies:

- `senderUserId`
- `kind = USER`
- timestamp.

Domain event projection supplies SYSTEM message kind/event tag.

Inbox fields are intentionally denormalized and updated transactionally:

- `lastMessageSnippet`
- `lastMessageAt`
- `unreadCountBrand`
- `unreadCountCreator`.

These fields support reads only and never drive workflow.

**Status: PASS.**

---

## 11. Read-model reconciliation

### Persisted direct facts

The read contract directly reads canonical persisted facts from:

- aggregate identity/lifecycle/stage/status;
- snapshot/commercial/securement;
- Fulfillment and issue history;
- Deliverable Executions and Submission Versions;
- Publishing Execution;
- Settlement/Financial Resolution;
- feedback window/rows;
- message/inbox projections.

### Derived fields — intentionally absent from Prisma

These remain query-service/read-mapper outputs:

- `actionRequiredBy`
- `availableActions[]`
- stage-specific human labels
- `reviewTimeRemaining`
- completion summaries
- viewer-specific unread selection
- role-specific commercial/FX display projections
- Creator/Brand context aggregation
- relationship-history counts

No mutation DTO may accept any of these as authoritative state.

### Access-scoped fields

Evidence refs, relationship history, counterpart details, and hidden feedback contents must be filtered by viewer role/policy in the query layer rather than encoded as separate Prisma truth.

**Status: PASS.**

---

## 12. Zod boundary reconciliation

The Collaboration Zod package correctly validates **client/system-authored command structure**, not database rows.

Appropriate service-owned validations that must remain outside Zod include:

- actor authorization and ownership;
- current lifecycle/stage/substate;
- exact approved Application lineage;
- Deliverable membership in this Collaboration;
- exact publishing-applicability coverage at provisioning;
- one Brand counter rule;
- Advance arithmetic and full-fee securement amount;
- external funding confirmation authenticity;
- maximum two Fulfillment issues;
- maximum two revision requests per Deliverable;
- current/target Submission Version checks;
- deadline expiry/stale-state checks;
- publishing authorization;
- entitlement/refund calculations;
- feedback timing/reveal condition.

This matches the existing repository validation convention: Zod owns structural input validity while service/domain runtime owns cross-record and lifecycle invariants.

**Status: PASS.**

---

## 13. One validation hardening recommendation

Before production implementation, extend `collaboration.schema.test.ts` with explicit tests that:

- duplicate `sourceBriefDeliverableId` entries in `deliverablePublishingApplicability` are rejected at the validation boundary if we choose to enforce uniqueness in Zod;
- `publishingRequired` cannot be omitted;
- mutation inputs reject lifecycle/stage/actionRequiredBy fields because those are backend-owned;
- feedback rating boundaries remain enforced;
- revision feedback remains required;
- pagination bounds remain enforced.

Exact Deliverable coverage against the Brief remains service-owned even if duplicate IDs are rejected structurally.

---

# Final reconciliation decision

**Executable command/read/Zod contracts are compatible with frozen Collaboration Prisma v1.1.**

No frozen schema change is required.

Implementation must preserve the three critical boundaries:

1. explicit publishing applicability and publishing-row initialization;
2. explicit Manual-vs-Escrow rail initialization when applicable;
3. derived/read-only UI state (`actionRequiredBy`, `availableActions`, display/progress values) never becoming mutation truth.

The backend `implementation_map.md` remains the production migration map; this document is the field-level proof that the canonical executable layer and frozen persistence model agree before Codex implementation begins.
