# Creator Shop Collaboration — Runtime Contract

**Status:** CANONICAL / FROZEN — Step 6.3  
**Scope:** Command execution, authorization gates, state transitions, timers, external effects and auditability

## 1. Purpose

This contract defines how a valid Collaboration is allowed to change at runtime. It does not redefine domain ownership, commercial outcome policy or detailed UI behavior.

## 2. Runtime principle

Clients do not directly mutate Collaboration lifecycle, workflow stage, Deliverable state, settlement state or resolution state.

Canonical flow:

`Actor -> Domain Command -> Authorization -> Preconditions -> Evidence validation -> Domain transition -> Append event -> Commit -> Side effects`

Backend runtime is authoritative for transition validity.

## 3. Canonical actor classes

- `BRAND`
- `CREATOR`
- `SYSTEM`
- `ADMIN`

Every consequential mutation records the acting class and, where applicable, actor identity.

## 4. Command shape

Commands conceptually carry:

- command/idempotency identity;
- `collaborationId`;
- actor/context;
- requested action;
- expected aggregate/version/state where applicable;
- action payload/evidence;
- requested timestamp/correlation context.

Exact DTOs are defined later. Action-specific DTOs are preferred over a master Collaboration mutation object.

## 5. Execution pipeline

For every command the runtime must, as applicable:

1. resolve Collaboration;
2. authenticate actor;
3. authorize action for the specific Collaboration;
4. validate lifecycle;
5. validate workflow stage/substate;
6. validate payload and evidence;
7. validate external prerequisites owned by other modules;
8. apply authoritative transition atomically;
9. append corresponding domain/audit event;
10. commit;
11. trigger retryable external side effects.

Lifecycle gating occurs before detailed stage validation.

## 6. Server-owned progression and skipping

Clients do not arbitrarily set the next stage. A successful domain action causes the backend to evaluate completion/applicability and select the next valid stage.

Stage skipping is also server-owned and must create explicit history/evidence. The frontend hiding a stage is not equivalent to skipping it.

## 7. Execution truth

Runtime uses the locked Collaboration execution snapshot for obligations such as fulfillment configuration, required Deliverables, publishing requirements, commercial terms and Advance percentage. It must not re-derive active contractual behavior from mutable live Campaign fields.

External reads are allowed for facts that remain owned externally, such as payout-detail availability, authoritative Payout confirmation or platform verification evidence.

## 8. Pause

`PAUSED` remains a legitimate lifecycle capability, but this contract intentionally does not assign:

- who may pause/resume;
- entry/exit preconditions;
- timer suspension/continuation;
- Campaign/Deliverable deadline effects;
- permitted commands while paused;
- escrow effects.

No normal Brand/Creator generic pause command is canonical until a later policy freezes these semantics. Future Admin intervention may use this capability.

## 9. Securement runtime

For platform/escrow execution, 100% of the agreed Creator cash fee must be authoritatively confirmed as secured before Securement completes.

The Advance percentage governs later protected entitlement; it does not reduce the amount secured in escrow.

Canonical exchange:

`Collaboration funding requirement -> Payout/Escrow execution -> authoritative confirmation -> Collaboration Securement completion`

A request to fund is not proof of funding.

If no cash obligation exists, cash Securement may be skipped while non-monetary Fulfillment can still be required.

## 10. Manual payment runtime

Manual payment is capability-controlled. Where enabled:

`Brand reports payment -> Creator confirms receipt -> verified`

Creator non-receipt report creates a blocked/disputed condition. Brand claim or receipt upload alone is not platform confirmation.

Existing Manual obligations remain resolvable if the platform later disables Manual for new obligations.

Creator payout details remain Settings/Payout-owned; missing details block only the relevant action/prerequisite.

## 11. Fulfillment runtime

Runtime selects Fulfillment behavior from the locked Create Campaign-derived fulfillment configuration, not Brand industry.

Conceptual fulfillment classes are physical, digital, service/offline and none; exact canonical mapping is resolved against Create Campaign before persistence is finalized.

Issue handling:

- issue #1 permits one normal remediation;
- issue #2 stops normal Fulfillment;
- no third normal automated/user attempt exists;
- fault attribution is not required for MVP financial resolution;
- issue #2 ends normal Collaboration execution and produces full Brand escrow-refund entitlement under the Commercial & Resolution Contract.

## 12. Deliverable initialization

When Production becomes active, the runtime creates/uses one Collaboration-owned Deliverable Execution for each required Deliverable in the locked execution snapshot. Deliverable executions are not continuously regenerated from the live Brief.

## 13. Submission runtime

`SUBMIT_DELIVERABLE` / revision submission creates a new append-only Submission Version against a specific Deliverable Execution. Previous versions are never overwritten.

Asset/provider details are abstracted behind an asset reference. A submission must not be considered complete until its asset reference is valid/usable.

## 14. Review and revision runtime

Brand review actions apply to the active under-review version of a specific Deliverable.

- `APPROVE_DELIVERABLE` approves that version;
- `REQUEST_REVISION` requires valid feedback and remaining revision allowance;
- maximum two Brand-requested revision rounds per Deliverable;
- a final permitted submission that cannot be accepted may cause `PRODUCTION_HARD_STOP` and Collaboration termination resolution.

## 15. 72-hour auto-approval

Each submitted version entering Brand review receives its own 72-hour review deadline.

Timer identity must target enough state to be stale-safe, conceptually including Collaboration, Deliverable Execution and Submission Version.

When a timer fires, the runtime revalidates current state. A stale/already-resolved timer becomes a no-op.

A valid expiry executes an audited `SYSTEM` auto-approval through the same transition machinery as other commands.

`AUTO_APPROVED` satisfies the Production requirement but does **not** by itself create Brand consent for public posting.

Pause × timer behavior remains intentionally unassigned.

## 16. Production completion

Production completion is derived from all required Deliverable Executions being resolved to valid accepted states (`APPROVED` or `AUTO_APPROVED`). The client does not set `productionComplete`.

## 17. Publishing/compliance runtime

Publishing applicability is derived from each locked Deliverable requirement.

Publishing evidence is format/platform appropriate. No universal live-URL assumption is canonical.

Explicit Brand approval may authorize required publication. `AUTO_APPROVED` alone does not authorize publication; if no explicit publication consent exists, publishing may be bypassed/not required and settlement/completion can be evaluated.

Compliance/publishing verification may consume Brand, System/platform or Admin evidence according to later integration capability. There is no 72-hour compliance auto-approval rule.

Publishing correction is separate from Production revision count.

## 18. Settlement runtime

Settlement eligibility is derived from resolved execution obligations. Collaboration determines entitlement/eligibility; Payout executes money movement.

Canonical flow:

`entitlement/settlement instruction -> Payout processing -> authoritative Payout confirmation -> Collaboration financial execution state`

Technical payment failure does not rewrite commercial entitlement.

## 19. Cancellation and termination resolution

An end/hard-stop command/event is interpreted by backend policy. Clients must not directly set `CANCELLED` or `TERMINATED`.

Resolution evaluation may use lifecycle/stage, reason, actor, execution evidence, Advance percentage, secured amount, Deliverable state and rights state. The output is entitlement/resolution instruction; Payout executes the money movement.

## 20. Admin runtime

Admin uses explicit audited commands for exceptional resolution, dispute handling, policy termination or authorized exception. There is no canonical `ADMIN_PATCH_ANY_FIELD` behavior.

Admin actions require reason/evidence and append audit history.

## 21. Atomic state + event persistence

A successful authoritative state transition and its corresponding Collaboration event must commit atomically where they share the persistence boundary.

External side effects such as notifications, scheduler registration, projections and Payout calls must be idempotent/retryable and must not require rolling back a committed valid domain transition merely because a downstream delivery failed.

An outbox/queue pattern is preferred where it fits existing backend architecture, but exact technology is not frozen.

## 22. Idempotency

Consequential actions must be idempotent. Examples include:

- repeated Application-approval delivery -> one Collaboration;
- duplicate funding webhook -> one funding transition;
- retried submission command -> one intended Submission Version;
- repeated timer firing -> one auto-approval;
- duplicate Payout callback -> one financial confirmation.

## 23. Stale-state protection

Commands must validate current authoritative state/version to prevent stale clients from rewinding or contradicting a newer action. Exact optimistic-locking mechanism is implementation-specific.

## 24. Terminal lifecycle behavior

`COMPLETED`, `CANCELLED` and `TERMINATED` reject normal execution commands. Explicit post-terminal activities may remain available, including feedback, historical reads and residual resolution actions.

A terminal Collaboration may still have pending refund/payment/product-return or other resolution obligations.

## 25. Projections, notifications and chat

Role-specific views, Campaign projection, notifications and system messages consume committed Collaboration state/events. Failure to deliver those projections/notifications does not become workflow truth.

Human chat messages do not implicitly mutate Collaboration workflow.

## 26. Validation architecture

Future Zod validation should be decomposed around command/payload boundaries rather than using one giant mutable Collaboration master object to encode the full state machine. Transition authorization remains runtime/domain logic.

## 27. Deferred implementation details

- Pause authority/timer/deadline behavior;
- exact RBAC implementation;
- exact queue/outbox/scheduler technology;
- exact asset-provider/storage integration;
- exact Prisma/DTO field names.
