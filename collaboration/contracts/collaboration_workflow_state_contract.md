# Creator Shop Collaboration — Workflow & State Contract

**Status:** CANONICAL / FROZEN — Step 6.4  
**Scope:** Canonical lifecycle, stages, stage states, actions and transition outcomes

## 1. Purpose

This contract defines where a Collaboration can be, the meaningful states inside each workflow stage, and which domain actions cause valid transitions. Runtime authorization, idempotency, transaction and integration mechanics are defined elsewhere.

## 2. Lifecycle

Canonical lifecycle:

- `ACTIVE`
- `PAUSED`
- `COMPLETED`
- `CANCELLED`
- `TERMINATED`

Lifecycle is independent from workflow stage.

`PAUSED` is carried for future use but its command authority, timer behavior and deadline effects remain unassigned.

## 3. Active workflow stages

1. `NEGOTIATION`
2. `SECUREMENT`
3. `FULFILLMENT`
4. `PRODUCTION`
5. `PUBLISHING_SETTLEMENT`

Feedback is post-completion activity, not Stage 6.

## 4. Generic stage state

A workflow stage may conceptually be:

- `NOT_STARTED`
- `IN_PROGRESS`
- `BLOCKED`
- `COMPLETED`
- `SKIPPED`

Detailed substates belong to the stage-specific execution record/read model rather than one giant Collaboration-status enum.

Canonical action owner projection:

- `BRAND`
- `CREATOR`
- `SYSTEM`
- `ADMIN`
- `NONE`

`actionRequiredBy` is derived/read-model state, not independent workflow authority.

## 5. Negotiation

### Entry

Application approval creates the Collaboration and causes Negotiation applicability to be evaluated.

If negotiation is not required, Negotiation is `SKIPPED`, terms are locked and Securement applicability is evaluated.

If negotiation is required, the initial Application/commercial proposal enters `AWAITING_BRAND_DECISION`.

### `AWAITING_BRAND_DECISION`

Brand actions:

- accept proposal -> lock terms -> Negotiation `COMPLETED`;
- send one counter -> `AWAITING_CREATOR_DECISION`;
- explicitly end Collaboration when allowed -> canonical cancellation outcome.

### `AWAITING_CREATOR_DECISION`

Creator actions:

- accept counter -> lock terms -> Negotiation `COMPLETED`;
- decline counter -> `CANCELLED`, reason equivalent to negotiation failure.

No second normal Brand counter or further Creator counter exists in MVP.

No forced Negotiation timeout is frozen.

## 6. Securement

After Negotiation completes/skips, Securement applicability is evaluated.

### Escrow path

Typical states:

- `AWAITING_ESCROW_FUNDING`
- `PROCESSING_FUNDING`
- `COMPLETED`
- `BLOCKED` where technical execution prevents progression.

Securement completes only after authoritative confirmation that 100% of the agreed Creator cash fee is secured.

### Zero-cash path

Where Creator cash fee is zero, cash Securement may be `SKIPPED`; Product/service consideration can still require Fulfillment.

### Manual path, where capability permits

Conceptual states may include:

- `AWAITING_PAYOUT_DETAILS`
- `AWAITING_BRAND_PAYMENT`
- `AWAITING_CREATOR_CONFIRMATION`
- `PAYMENT_DISPUTED`
- `COMPLETED`

Brand reports payment; Creator confirms received. Creator non-receipt report blocks progression.

## 7. Fulfillment

Fulfillment applicability/subtype is inherited from the locked Create Campaign execution configuration, not Brand industry.

Conceptually:

- none -> Fulfillment `SKIPPED`;
- physical -> Brand provides shipment/product fulfillment, Creator confirms receipt;
- digital -> Brand provides access/entitlement, Creator confirms access;
- service/offline -> Brand arranges/provides service fulfillment, Creator confirms fulfillment.

Exact enum/field mapping must align with the frozen Create Campaign contract before persistence is finalized.

### Common active flow

`AWAITING_BRAND_FULFILLMENT -> AWAITING_CREATOR_CONFIRMATION -> COMPLETED`

Creator may instead report a Fulfillment issue.

### Issue loop

Issue #1:

- issue count becomes 1;
- remediation is permitted;
- one normal attempt remains.

After remediation, Creator either confirms Fulfillment or reports issue #2.

Issue #2:

- issue count becomes 2;
- normal remediation ends;
- no third normal attempt exists;
- Collaboration enters terminal resolution;
- full secured Creator cash amount is returned/entitled to Brand under the Commercial & Resolution Contract;
- no fault attribution is required to reach this outcome.

## 8. Production initialization

When Fulfillment completes/skips, Production becomes active and uses one Collaboration Deliverable Execution per required locked Deliverable.

Deliverables progress independently, but all required Deliverables must resolve successfully for Production to complete.

## 9. Deliverable execution states

Canonical states:

- `AWAITING_SUBMISSION`
- `UNDER_REVIEW`
- `REVISION_REQUESTED`
- `APPROVED`
- `AUTO_APPROVED`
- `HARD_STOP`

## 10. Submission and versioning

Creator submission creates Submission Version 1 and moves that Deliverable to `UNDER_REVIEW`.

Revisions are append-only versions. Normal sequence can be:

`v1 -> revision request #1 -> v2 -> revision request #2 -> v3 final review`

Therefore:

- maximum Brand-requested revision rounds per Deliverable = 2;
- maximum normal submitted versions under that sequence = 3.

Version count and revision-request count are distinct.

## 11. Brand review

From `UNDER_REVIEW`, Brand may:

- approve -> Deliverable `APPROVED`;
- request revision, where allowance remains -> `REVISION_REQUESTED` and feedback recorded.

After the final permitted submission, a further ordinary revision request is not available. If the final content cannot be accepted, the Deliverable enters `HARD_STOP` and the Collaboration enters termination resolution for MVP.

No partial scope repricing/partial completion is part of MVP.

## 12. 72-hour auto-approval

Every submitted version entering Brand review receives a 72-hour review deadline.

If Brand takes no valid review action before expiry, System may validly transition that version/Deliverable to `AUTO_APPROVED` after stale-state validation.

`AUTO_APPROVED` has the same Production-completion effect as `APPROVED`.

However, `AUTO_APPROVED` does **not** itself authorize Creator public posting. Explicit Brand publication approval/consent is required before the frontend/runtime tells the Creator to publish.

Pause × timer behavior remains deferred.

## 13. Production completion

Production is `COMPLETED` only when all required Deliverable Executions are in successful accepted states:

`APPROVED | AUTO_APPROVED`

A required `HARD_STOP` prevents successful Production completion and enters Collaboration termination resolution.

## 14. Publishing applicability

After Production, publishing is evaluated per locked Deliverable requirement.

Conceptual per-Deliverable publishing states:

- `PUBLISHING_NOT_REQUIRED`
- `AWAITING_PUBLISHING`
- `EVIDENCE_SUBMITTED`
- `CORRECTION_REQUIRED`
- `COMPLIANCE_VERIFIED`

Publishing can be not required because the Deliverable is production-only/asset-only or because Production was only auto-approved without explicit Brand publication consent.

If publishing is required and authorized, Creator submits format/platform-appropriate evidence against the relevant Deliverable.

## 15. Compliance

After evidence submission, verification may result in:

- verified/compliant;
- correction required;
- disputed/blocked.

Publishing correction does not consume a Production revision round.

There is no 72-hour compliance auto-approval rule.

## 16. Settlement

Settlement eligibility is derived after all required execution/publishing/compliance gates resolve.

Conceptual settlement presentation/state:

- `NOT_ELIGIBLE`
- `ELIGIBLE`
- `PROCESSING`
- `SETTLED`
- `BLOCKED`

A request to Payout is not settlement confirmation.

## 17. Successful completion

When all required execution obligations and financial settlement are confirmed:

`lifecycle -> COMPLETED`

Normal execution ends. Chat/history remain available.

## 18. Feedback

Feedback is post-completion.

Each party's review can be conceptually `NOT_SUBMITTED | SUBMITTED`; visibility can be `HIDDEN | REVEALED`.

Reveal occurs at the earlier of:

- both reviews submitted;
- 48-hour feedback window expiry.

Feedback absence never returns the Collaboration to Active or blocks completion.

## 19. Cancellation and termination

Pre-commitment/early exits generally resolve as `CANCELLED`; post-commitment/hard-stop/policy exits generally resolve as `TERMINATED`. Exact classification and financial resolution are owned by the Commercial & Resolution Contract/backend policy.

Clients submit an end/decline/domain action; they do not directly set terminal lifecycle values.

## 20. Blocked state

`BLOCKED` is non-terminal. Examples include payment disputes, compliance disputes, Payout execution failures or Admin review. Resolution may allow normal workflow to resume or may produce an explicit terminal outcome.

`BLOCKED` is not equivalent to `PAUSED`.

## 21. Pause

The workflow/state model reserves `PAUSED`, but no Brand/Creator interaction, timer effect, deadline shift, max duration or resume authority is assigned. Future Admin resolution may use it.

## 22. High-level flow

`APPROVED APPLICATION -> NEGOTIATION -> SECUREMENT -> FULFILLMENT -> PRODUCTION -> PUBLISHING_SETTLEMENT -> COMPLETED -> FEEDBACK`

At valid points, cancellation, termination, blocking, stage skipping or future pause may interrupt the normal sequence according to their owning contracts.
