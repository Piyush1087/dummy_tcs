# Creator Shop Collaboration — Domain Contract

**Status:** CANONICAL / FROZEN — Step 6.2  
**Scope:** Collaboration aggregate identity, ownership, source lineage, lifecycle and module boundaries

## 1. Purpose

This contract defines what a Collaboration is, what it owns, what it inherits from upstream Campaign/Application context, and what it explicitly does not own. Detailed command execution belongs to the Runtime Contract; stage transitions belong to the Workflow & State Contract; monetary outcome policy belongs to the Commercial & Resolution Contract; cross-module exchange belongs to the Integration Contract.

## 2. Domain definition

A Collaboration is an independent Brand × Creator execution agreement created from one approved Campaign Application. It executes the agreed commercial, fulfillment, content-production, publishing, settlement and post-completion obligations for that specific approved Application.

A Collaboration is not an Application status, CampaignCreator state, Campaign subrecord, chat thread, payout transaction or reporting object.

## 3. Creation and cardinality

Canonical creation boundary:

`Application APPROVED -> create Collaboration`

Invariants:

- one Application may create at most one Collaboration;
- one Collaboration has exactly one source Application;
- Collaboration creation is idempotent for the source Application;
- a Creator may have multiple Collaborations in the same Campaign when multiple distinct Applications are approved;
- Collaboration identity is therefore not `Campaign × Creator` and not `CampaignCreator × Campaign`.

`CampaignCreator` remains an upstream grouping construct and may be associated with multiple Applications/Collaborations.

## 4. Operational identity

After creation, `collaborationId` is the stable operational identity for Collaboration commands, reads, chat context and projections. `applicationId` remains immutable source lineage.

Campaign > Collaborations must use `collaborationId` as the operational card/detail identity while retaining source Application traceability.

## 5. Independent aggregate

Collaboration owns its own execution state machine. Campaign may create the entry condition through Application approval and may later consume a Collaboration projection, but Campaign does not own or duplicate Collaboration lifecycle.

Campaign pause, completion, archive or acquisition closure does not automatically pause, complete, terminate or delete an active Collaboration. Future cross-domain effects must be explicit policy.

Campaign/Product/Brief deactivation after Collaboration creation does not silently invalidate an active Collaboration.

## 6. Shared authoritative state

Brand and Creator do not own separate Collaboration records. They receive role-specific projections of one authoritative Collaboration aggregate.

`Collaboration -> Brand view`  
`Collaboration -> Creator view`

## 7. Source lineage and locked execution snapshot

Every Collaboration retains source references sufficient for lineage, conceptually including:

- `sourceApplicationId`;
- `campaignId`;
- `campaignCreatorId` where applicable;
- `productId` where applicable;
- `briefId`;
- Brand identity;
- Creator identity.

References answer: **where did this Collaboration originate?**

The Collaboration must also preserve a locked execution snapshot of the obligations agreed for this execution, including as applicable:

- Campaign context required for execution;
- Product/service consideration;
- Brief;
- selected/required Deliverables;
- usage rights;
- publishing requirements;
- fulfillment configuration;
- Application-selected terms;
- relevant Commercial Strategy inputs;
- relevant Brand/Creator execution context.

The snapshot answers: **what did the parties agree to execute?**

Later edits to Campaign, Product, Brief or Commercial Strategy must not silently rewrite an active Collaboration. A future explicit amendment capability would be required.

## 8. Upstream configuration authority

Create Campaign remains authoritative for upstream configuration such as fulfillment requirements, product/service consideration, Advance percentage and publishing requirements. Collaboration snapshots and executes those decisions; it does not independently infer fulfillment from Brand industry or generic assumptions.

Final Creator-specific terms produced through Collaboration Negotiation become Collaboration-owned locked execution terms.

## 9. Lifecycle

Canonical Collaboration lifecycle:

- `ACTIVE`
- `PAUSED`
- `COMPLETED`
- `CANCELLED`
- `TERMINATED`

`PAUSED` is intentionally retained as a legitimate lifecycle concept, but actor authority, timer behavior, deadline effects and permitted actions are not assigned yet. Future policy may use it for Admin intervention/resolution.

Lifecycle is separate from workflow position. `TERMINATED` is not a workflow stage. A terminal Collaboration retains the stage it ended from, reason, actor/time and resolution evidence.

## 10. Active workflow scope

The canonical active execution stages are:

1. `NEGOTIATION`
2. `SECUREMENT`
3. `FULFILLMENT`
4. `PRODUCTION`
5. `PUBLISHING_SETTLEMENT`

Feedback and archival/history activities occur after operational completion and do not constitute an additional active execution stage.

## 11. Completion boundary

A Collaboration becomes `COMPLETED` when all required execution obligations and required financial settlement obligations have resolved successfully.

Conceptually:

`required Production complete + required Publishing/Compliance complete or bypassed + required Settlement complete -> COMPLETED`

Feedback is not a prerequisite for completion.

## 12. Cancellation and termination

`CANCELLED` represents a persistent pre-commitment/early exit outcome. `TERMINATED` represents a persistent post-commitment, hard-stop or policy-resolution outcome. Exact classification and financial consequences are owned by the Commercial & Resolution Contract.

Neither state is deletion. Collaboration history remains readable for audit, dispute, relationship history and Intelligence/Trust evidence.

## 13. Operational facts owned by Collaboration

Collaboration is authoritative for execution facts such as:

- commercial terms locked;
- fulfillment provided/confirmed/issues recorded;
- Deliverable Execution created;
- submission/version created;
- Deliverable approved/auto-approved/revision requested/hard-stopped;
- publishing evidence submitted;
- compliance state resolved;
- financial entitlement/eligibility established;
- lifecycle completed/cancelled/terminated;
- raw Collaboration feedback relationship.

## 14. Ownership boundaries

Collaboration does not own:

- Campaign definition or Application history;
- Creator/Brand Intelligence interpretation;
- Reporting calculations;
- escrow vaults or money movement;
- FX execution;
- creator bank/payout details;
- invoice/tax infrastructure;
- physical media-storage provider architecture;
- cross-collaboration Trust/reputation interpretation.

Those modules consume or supply explicit evidence/contracts.

## 15. Deliverable execution ownership

Brief/Campaign owns the Deliverable definition. Collaboration snapshots it and owns the execution instance.

`Brief Deliverable Definition -> snapshot -> Collaboration Deliverable Execution -> Submission Versions`

Production does not collapse all required content into one global media state.

## 16. Asset boundary

Collaboration owns the logical relationship:

`Deliverable Execution -> Submission -> Submission Version -> asset reference`

The storage/provider implementation is intentionally unresolved. Collaboration must not make Google Drive, S3, Frame.io or another vendor the domain identity.

## 17. Conversation boundary

Conversation/chat is subordinate to Collaboration workflow.

`domain transition -> domain event -> optional system message`

Human/system chat rows are not the authoritative evidence that a workflow transition occurred, and human chat text does not implicitly mutate workflow.

## 18. Domain event history

Consequential transitions must have append-oriented audit/event history alongside readable current state. Full event sourcing is not required.

## 19. Campaign projection

Collaboration exposes a compact projection for Campaign > Collaborations. Campaign does not rebuild or independently persist the operational lifecycle. Exact projection shape belongs to the Integration Contract/read-model work.

## 20. Deferred implementation details

The following are intentionally not decided by this contract:

- Pause actor/command/timer/deadline policy;
- exact persisted Prisma shape;
- exact Create Campaign fulfillment enum/field mapping;
- asset-storage provider/implementation;
- exact CollaborationProjection DTO.
