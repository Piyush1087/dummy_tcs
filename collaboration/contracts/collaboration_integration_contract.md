# Creator Shop Collaboration — Integration Contract

**Status:** CANONICAL / FROZEN — Step 6.6  
**Scope:** Collaboration boundaries with Applicants/Campaign, Payout, Settings, Asset, Conversation, Scheduler, Intelligence, Reporting and external platforms

## 1. Purpose

This contract defines what Collaboration receives from other modules, what it owns after receiving it, what it emits/exposes, and which module remains authoritative for each piece of truth.

Modules exchange explicit references, snapshots, commands, events, evidence and projections. They do not share ownership of mutable domain state.

## 2. Applicants/Application -> Collaboration

Canonical creation trigger:

`specific Application APPROVED -> create Collaboration`

The approved Application is the creation source; `CampaignCreator` is grouping lineage, not Collaboration identity.

Collaboration retains source Application lineage. Applicants/Campaign remains authoritative for Application history.

One approved Application may create at most one Collaboration. Multiple approved Applications for the same Creator/Campaign may create multiple Collaborations.

## 3. Collaboration creation context

At creation, Collaboration consumes the execution context needed from upstream Campaign/Application sources, conceptually including:

- Campaign reference/context;
- Brand and Creator identity;
- approved Application;
- Product/service context;
- Brief;
- required Deliverables;
- Commercial Strategy inputs;
- fulfillment configuration;
- publishing requirements;
- usage rights;
- relevant execution constraints.

Exact DTO shape is deferred until backend/schema/read-model reconciliation.

## 4. Reference vs snapshot

Collaboration keeps source references for lineage and a locked snapshot for contractual execution.

References answer where the Collaboration came from. Snapshot fields answer what was agreed for this Collaboration.

Upstream edits after creation must not silently mutate the locked execution contract.

## 5. Create Campaign Fulfillment integration

Collaboration must consume the exact frozen Create Campaign fulfillment configuration. It must not infer physical/digital/service behavior from industry.

A field-by-field Create Campaign -> Collaboration mapping must be completed before canonical persistence is finalized. Conceptual labels used during design do not authorize a competing taxonomy.

## 6. Commercial Strategy integration

Create Campaign Commercial Strategy provides the upstream framework. Application proposal and Collaboration Negotiation produce final locked Creator-specific commercial terms.

After terms lock, Collaboration is authoritative for those specific execution terms while Campaign remains owner of its own upstream configuration.

## 7. Brief/Deliverable integration

Campaign/Brief owns Deliverable definitions. Collaboration snapshots required definitions and owns their execution instances.

`Brief Deliverable Definition -> Collaboration Deliverable Execution -> Submission Versions`

Later Brief edits do not rewrite existing Deliverable Executions.

## 8. Product integration

Product/service identity and commercial/fulfillment context originate upstream. Collaboration consumes the required snapshot/reference but does not become a duplicate Product catalogue or Product Intelligence domain.

## 9. Campaign projection

Campaign > Collaborations consumes a Collaboration-owned read projection.

`Collaboration -> CollaborationProjection -> Campaign > Collaborations`

Campaign does not create a second operational Collaboration aggregate or independently derive lifecycle from raw tables.

The Campaign card/detail operational identity is `collaborationId`.

If Campaign UI offers a Collaboration action, it must route to the Collaboration runtime/command contract rather than mutate Campaign-owned parallel state.

## 10. Campaign lifecycle boundary

Campaign lifecycle changes do not automatically control Collaboration lifecycle.

- Campaign paused != Collaboration paused;
- Campaign archived != Collaboration terminated/deleted;
- Campaign acquisition closed != active Collaboration cancelled;
- Campaign completed != Collaboration automatically completed.

Any future cross-domain effect requires explicit policy/command/event handling.

## 11. Payout/Escrow integration

Collaboration owns commercial entitlement/eligibility. Payout/Escrow owns money execution.

Collaboration may send/produce concepts such as:

- funding requirement;
- Creator settlement entitlement;
- Brand refund entitlement;
- resolution instruction.

Payout returns authoritative evidence such as:

- funding confirmed;
- payment confirmed;
- refund confirmed;
- payment/refund failed/delayed.

A request/accepted instruction is not confirmation that money moved.

Existing production escrow infrastructure should be reconciled and reused where semantics/ownership remain compatible; fixed 30/70 policy or automatic Advance disbursal must not override this contract.

## 12. FX integration

Collaboration owns the locked canonical commercial amount/basis. Payout/FX owns conversion mechanics and may provide role-specific display/settlement projections. Converted display values are not a second authoritative fee.

## 13. Invoice/tax integration

Invoice, tax and payment-document generation belong to Payout/accounting infrastructure. Collaboration may supply commercial/execution evidence and retain references to resulting artifacts.

## 14. Creator Settings integration

Creator bank/payment/payout details are Settings/Payout-owned.

Collaboration may consume availability/prerequisite status or deep-link/embed a Settings-owned collection surface, but must not become the canonical bank-account store.

## 15. Asset/media integration

Collaboration owns logical submission/version relationships and references assets through an abstraction.

`Deliverable Execution -> Submission Version -> assetRef`

Storage/upload/access/preview/transcoding/provider concerns belong to an Asset/media capability.

No storage provider is frozen yet. Terminating a Collaboration must not automatically delete submitted evidence; retention/audit/rights/dispute policy is separate.

## 16. Conversation integration

Collaboration may associate with a shared conversation thread.

Domain events may generate system messages. Human messages remain communication only and do not implicitly approve, publish, pay, pause or otherwise mutate workflow.

System-message persistence is a projection/audit surface; the authoritative transition remains Collaboration state/event evidence.

## 17. Notification integration

Notifications consume Collaboration events and may deliver via in-app/email/push/other channels. Notification delivery success/failure does not own workflow state.

## 18. Scheduler/timer integration

Scheduler triggers runtime `SYSTEM` actions; it does not directly patch Collaboration state.

Known timer use cases include:

- 72-hour per-Submission Version Brand review deadline;
- 48-hour post-completion feedback reveal window.

Timer execution must be stale-safe. Pause × scheduler behavior remains unassigned.

## 19. Realtime/hydration integration

Persisted backend reads are the reconstruction source of truth. WebSocket/realtime is only a latency-reduction/invalidation mechanism.

A Collaboration must reconstruct after refresh, navigation away/back, logout/login, browser restart or socket reconnect without relying on transient socket payload state.

Canonical frontend contract lives under `frontend/collaboration/realtime_hydration_contract.md`.

## 20. Intelligence integration

Collaboration supplies factual execution evidence to Intelligence, such as fulfillment outcomes, revisions, timing, completion/termination, publishing/compliance facts and feedback.

Intelligence owns interpretation/derived scores/recommendations. Intelligence does not silently mutate Collaboration lifecycle.

## 21. Trust/reputation integration

Raw Collaboration outcomes/feedback may feed cross-Collaboration Trust/Intelligence.

For example, the two-failure Fulfillment hard-stop ends/refunds the current Collaboration without fault adjudication. Repeated patterns may later support separate platform enforcement policy for Brand or Creator.

Trust/admin enforcement is not part of current Collaboration financial resolution unless an explicit future policy says so.

## 22. Reporting integration

Reporting/Intelligence consumes Collaboration execution facts for analytics. Reporting does not drive Collaboration workflow and Collaboration completion does not wait for analytics calculation.

## 23. External social-platform integration

Social platforms/Meta may supply publication/compliance evidence. Collaboration determines what that evidence means relative to the locked Deliverable contract.

The domain must not hardcode Instagram-only architecture or a universal platform list.

## 24. Admin integration

Admin uses explicit Collaboration commands with reason/evidence for exceptional resolution. Admin may inspect Collaboration, Payout, conversation and submission evidence, but does not directly patch authoritative tables as product behavior.

Future Admin pause/resume is possible but not yet assigned/frozen.

## 25. Integration failure principle

Distinguish synchronous prerequisite failure from downstream side-effect failure.

Example prerequisite: invalid/missing asset means Submission must not complete.

Example downstream side effect: valid Submission committed but notification delivery fails; Submission remains valid and notification retries.

## 26. Logical ownership invariant

Even if the production application is a modular monolith, logical ownership remains:

- Campaign does not directly mutate Collaboration state;
- Collaboration does not directly own Payout vaults/rails;
- Payout does not decide Collaboration lifecycle/business policy;
- Intelligence/Reporting does not directly mutate workflow;
- Scheduler does not patch state;
- frontend projections do not manufacture authoritative workflow state.

## 27. Ownership matrix

| Truth | Authoritative owner | Collaboration role |
|---|---|---|
| Application/history | Applicants/Campaign | consume + retain lineage |
| Campaign configuration | Campaign | consume |
| Brief/Deliverable definitions | Campaign/Brief | snapshot |
| Fulfillment configuration | Campaign | snapshot + execute |
| Commercial Strategy | Campaign | consume |
| Final Creator-specific terms | Collaboration | own |
| Collaboration lifecycle/workflow | Collaboration | own |
| Deliverable Execution | Collaboration | own |
| Submission/version logical record | Collaboration | own |
| Media binary/storage | Asset system | reference |
| Escrow/funding/money movement | Payout | consume evidence |
| Financial entitlement | Collaboration | own |
| FX | Payout/FX | consume projection/evidence |
| Bank/payout details | Settings/Payout | consume prerequisite |
| Invoice/tax artifacts | Payout/accounting | reference |
| Raw Collaboration feedback | Collaboration | own relationship/evidence |
| Cross-Collaboration Trust | Intelligence/Trust | supply evidence |
| Reporting intelligence | Reporting/Intelligence | supply evidence |
| Campaign Collaboration card | Campaign read projection | publish projection |

## 28. Deferred integration details

- exact Create Campaign -> Collaboration fulfillment field map;
- exact CollaborationCreationContext DTO;
- exact CollaborationProjection DTO;
- exact Asset/media implementation;
- exact Payout API/event contract;
- exact FX implementation;
- exact scheduler/queue/outbox technology;
- Pause × scheduler/deadline policy;
- exact social-platform verification implementation;
- exact Trust/Intelligence evidence contract.
