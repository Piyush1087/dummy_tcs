# Collaboration Frontend State Map

Status: FROZEN from Collaboration 6.7B frontend reconciliation.

## Purpose

Define the user-visible Collaboration state model used to adapt the existing production Collaboration frontend. This document does not replace backend domain/runtime contracts. Backend remains authoritative for lifecycle, stage, status, action ownership and available actions.

## Workspace state

The existing Collaboration workspace is retained: Inbox / Chat / Execution Hub on desktop and Inbox -> Chat -> Execution Hub on mobile.

Canonical workspace states:

- `LOADING_INBOX` — loading Collaboration list.
- `EMPTY_INBOX` — no Collaborations available.
- `INBOX_READY_NO_SELECTION` — list loaded, no Collaboration selected.
- `HYDRATING_COLLABORATION` — loading persisted Collaboration detail and messages.
- `COLLABORATION_READY` — authoritative persisted state loaded.
- `ACTION_PROCESSING` — a user command is in flight; only affected actions are disabled.
- `ACTION_ERROR` — command failed; previously hydrated authoritative state remains visible.
- `REALTIME_DEGRADED` — WebSocket unavailable; HTTP state remains usable.
- `STALE_STATE` — action rejected because state changed elsewhere; refetch authoritative state.
- `NOT_FOUND_OR_NO_ACCESS` — Collaboration unavailable to current actor.

Hydration invariant:

`enter/re-enter -> fetch Collaboration list -> fetch selected Collaboration + messages -> render persisted state -> attach realtime updates`

WebSocket is never the reconstruction source of truth.

## Canonical Collaboration lifecycle

- `ACTIVE` -> display `In progress`.
- `PAUSED` -> display `Paused`. Behaviour, actor authority, timers and deadline effects remain intentionally unassigned for future policy/admin resolution.
- `COMPLETED` -> display `Completed`.
- `CANCELLED` -> display `Cancelled`.
- `TERMINATED` -> user-facing headline `Ended`.

Lifecycle is distinct from workflow stage.

## Canonical active workflow stages

1. `NEGOTIATION`
2. `SECUREMENT`
3. `FULFILLMENT`
4. `PRODUCTION`
5. `PUBLISHING_SETTLEMENT`

Feedback is post-completion activity, not Stage 6.

Generic stage states:

- `NOT_STARTED`
- `IN_PROGRESS`
- `BLOCKED`
- `COMPLETED`
- `SKIPPED`

Canonical action owner projection:

- `BRAND`
- `CREATOR`
- `SYSTEM`
- `ADMIN`
- `NONE`

Frontend should consume backend-provided `actionRequiredBy` and ultimately `availableActions`, instead of re-implementing workflow authority from scattered fields.

## Thread / inbox state

Each thread must distinguish multiple Collaborations for the same Creator in the same Campaign without exposing internal IDs.

Display context should include:

- counterpart identity;
- Campaign;
- Product / Brief / Deliverable scope summary;
- lifecycle or current workflow stage/status;
- action-required/waiting indicator;
- last message and updated time.

`collaborationId` remains the operational/deep-link identity.

## Negotiation states

### `AWAITING_BRAND_DECISION`
Brand: creator proposal + `Accept`, `Counter`, `End Collaboration` when allowed.
Creator: proposal sent, waiting for Brand.

### `AWAITING_CREATOR_DECISION`
Brand: counter sent, waiting for Creator.
Creator: Brand counter + `Accept`, `Decline`.

### Negotiation skipped
Terms confirmed; backend advances to Securement applicability.

No second counter cycle.

## Securement states

### Escrow funding required
Brand sees agreed fee, 100% amount to secure, Advance protection percentage, and funding action.
Creator sees waiting state.

### Funding processing
Both see `Funding processing`.

### Funds secured
Both see `Funds secured`; backend evaluates next applicable stage.

### Zero cash
`No cash securement required`; no `BARTER` payout mode/state.

### Manual rail (when enabled)
Brand can report payment. Creator can confirm receipt or report non-receipt. Dispute becomes `BLOCKED`.

Missing payout details are surfaced as a prerequisite with handoff to Settings/Payout; Collaboration does not own bank details.

## Fulfillment states

Applicability and subtype come from the locked Create Campaign/Collaboration execution snapshot, not Brand industry.

- `NONE` -> Fulfillment skipped.
- `PHYSICAL` -> shipment/dispatched/confirm received/report issue.
- `DIGITAL` -> access provided/confirm access/report issue.
- `SERVICE_OFFLINE` -> service arranged/confirm fulfillment/report issue.

Issue #1 -> remediation allowed; one attempt remains.
Issue #2 -> normal flow ends; show terminal Resolution Card; full Brand escrow refund; no fault attribution required.

## Production states

Production is per locked Deliverable Execution. Each Deliverable card can be:

- `AWAITING_SUBMISSION`
- `UNDER_REVIEW`
- `REVISION_REQUESTED`
- `APPROVED`
- `AUTO_APPROVED`
- `HARD_STOP`

Per Deliverable:

- initial submission;
- up to two Brand-requested revision rounds;
- up to three normal submitted versions;
- submission/version history retained;
- each submitted version receives its own 72-hour Brand review deadline.

### `UNDER_REVIEW`
Brand sees submission/version, review window, `Approve`, `Request revision`.
Creator sees awaiting Brand review and human-readable auto-approval remaining time.

### `REVISION_REQUESTED`
Creator sees actual Brand feedback, revision N of 2, and `Submit revision`.
Brand waits for revised submission.

### `APPROVED`
Display `Approved by Brand`. This satisfies Production and may provide publication consent where publishing is required.

### `AUTO_APPROVED`
Display `Auto-approved` / `Brand review window expired`.
Auto-approval satisfies Production but does **not** itself authorize public posting. Creator must not be instructed to publish without explicit Brand publication consent.

### `HARD_STOP`
A required Deliverable reaching final hard-stop moves the Collaboration into termination resolution for MVP.

## Publishing + settlement states

Publishing is Deliverable-specific.

Per applicable Deliverable:

- `PUBLISHING_NOT_REQUIRED`
- `AWAITING_PUBLISHING`
- `EVIDENCE_SUBMITTED`
- `CORRECTION_REQUIRED`
- `COMPLIANCE_VERIFIED`

Publishing may be not required because the Deliverable is production-only or because content was only auto-approved and no explicit Brand publication consent exists.

Brand verification actions are separate from financial settlement actions.

Settlement presentation:

- `ELIGIBLE`
- `PROCESSING`
- `SETTLED`
- blocked/delayed execution where entitlement remains unchanged.

Frontend never calculates entitlement amounts.

## Completion state

When required execution and financial settlement complete, lifecycle becomes `COMPLETED`.

Completed panel should show:

- completion date;
- Deliverables resolved;
- publishing completed / not required;
- payment settled;
- commercial summary.

Normal execution actions disappear. Chat remains available. Feedback appears as post-completion activity.

## Feedback states

- own review `NOT_SUBMITTED | SUBMITTED`;
- visibility `HIDDEN | REVEALED`.

Reveal occurs when both parties submit or the 48-hour feedback window expires.
Feedback never controls Collaboration completion.

## Cancellation / termination / resolution states

Use a reusable Resolution Card driven by backend truth:

- lifecycle;
- reason;
- ended-from stage;
- Creator entitlement;
- Brand entitlement/refund;
- financial resolution status;
- residual obligations.

Do not create blame labels for the two-failure Fulfillment hard-stop.

## Blocked states

Use a reusable Blocking Card for payment disputes, compliance disputes, payout execution problems or Admin review.

It must distinguish:

- user action required;
- waiting for Brand/Creator;
- waiting for System/Admin;
- no action required.

A blocked state is not automatically `PAUSED`.

## Realtime state invariant

Persisted backend state is authoritative. Realtime events invalidate/refetch state. Socket loss must not blank the workspace or remove previously hydrated Collaboration data.