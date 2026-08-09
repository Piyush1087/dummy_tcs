# Collaboration Frontend Interaction Map

Status: FROZEN from Collaboration 6.7B frontend reconciliation.

## Purpose

Define user/system interactions for adapting the existing production Collaboration frontend. Backend Runtime remains authoritative for authorization, preconditions, transitions, idempotency and stale-state protection.

## Interaction principle

Frontend interactions submit domain commands and then consume authoritative updated state. The client must not directly set lifecycle, stage, Deliverable status, settlement status or resolution state.

Preferred flow:

`user action -> command API -> authoritative updated read model -> update selected Collaboration -> refresh affected inbox/read state`

Counterparty/session synchronization occurs through WebSocket invalidation/refetch.

## Workspace interactions

### Select Collaboration
Actor: Brand or Creator.

- select thread by `collaborationId`;
- fetch Collaboration detail and messages;
- render persisted state;
- join realtime room.

No domain state changes.

### Send message
Actor: Brand or Creator.

- submit message command;
- append/refresh persisted conversation;
- realtime updates counterpart.

Human chat does not implicitly mutate workflow.

### Open counterpart context
Brand click Creator identity/avatar -> `CreatorContextDrawer`.
Creator click Brand identity/avatar -> `BrandContextDrawer`.
Read-only interaction; no Collaboration state mutation.

## Negotiation interactions

### Brand accepts proposal
Valid when backend exposes acceptance action.
Result: terms lock; Negotiation completes; backend evaluates Securement.

### Brand counters
Brand enters counter amount and submits one counter command.
Result: action required moves to Creator.

### Creator accepts counter
Result: terms lock; Negotiation completes.

### Creator declines counter
Result: Collaboration reaches canonical pre-commitment cancellation outcome.

### Brand ends Collaboration before Securement
Use explicit end/cancel command when backend exposes it. Frontend does not decide `CANCELLED` vs `TERMINATED`.

No second normal counter cycle.

## Securement interactions

### Fund Collaboration
Actor: Brand.

UI shows 100% agreed cash fee to secure and Advance protection percentage. Brand initiates funding. UI moves to processing; only Payout confirmation satisfies funding state.

### Report manual payment
Actor: Brand, only if Manual is enabled by platform capability.

### Confirm manual payment received
Actor: Creator.

### Report manual payment not received
Actor: Creator.
Result: payment obligation becomes blocked/disputed; no automatic completion.

### Manage payout details
Actor: Creator.
Frontend deep-links/opens Settings/Payout-owned surface. Collaboration only consumes prerequisite availability.

## Fulfillment interactions

Fulfillment UI is selected from the locked fulfillment configuration, not industry.

### Provide fulfillment
Actor: Brand.
Subtype-specific payload for physical, digital or service/offline execution.

### Confirm fulfillment
Actor: Creator.
Subtype label may be `Confirm product received`, `Confirm access`, or `Confirm fulfillment`.

### Report fulfillment issue
Actor: Creator.
Issue description/type is explicit user input, not hard-coded.

Issue #1 permits remediation.
Issue #2 triggers hard-stop; backend ends Collaboration and resolves full Brand refund. Frontend displays resulting Resolution Card without assigning fault.

## Production interactions

All Production commands target a specific `deliverableExecutionId`.

### Submit content
Actor: Creator.
Creates a new Submission Version against the relevant Deliverable Execution using an asset abstraction. Storage provider is not part of the UX contract.

### Approve Deliverable
Actor: Brand.
Approves the current under-review version.

### Request revision
Actor: Brand.
Opens `RevisionRequestForm`; feedback is required. UI shows `Revision N of 2`. Command creates revision-required state.

### Submit revision
Actor: Creator.
Creates next append-only Submission Version for the same Deliverable.

### Auto-approve Deliverable
Actor: System.
72-hour review timer expires and backend validates current version/state before transition. Frontend observes `AUTO_APPROVED`.

Important: `AUTO_APPROVED` satisfies Production but does not itself authorize public posting.

### Final hard-stop
After final permitted revision, backend may resolve a required Deliverable to hard-stop. Frontend switches to terminal Resolution Card from authoritative backend resolution.

## Publishing interactions

Publishing actions target the relevant publishing-required Deliverable.

### Submit publishing evidence
Actor: Creator.
Only when publication is actually authorized/required. Evidence is format/platform appropriate.

### Verify publishing/compliance
Actor: Brand or System according to backend capabilities.
Does not directly release a fixed 'balance'; it satisfies a publishing/compliance gate.

### Request publishing correction
Actor: Brand.
Requires reason. This correction does not consume a Production revision round.

### Auto-approved without publication consent
No Creator publishing command should be offered. Publishing is shown as not required/not authorized; backend evaluates settlement/completion.

### Brand/Creator manual scheduling discussion
May occur in Chat. Chat discussion does not itself mutate publishing authorization/state.

## Settlement interactions

Frontend observes backend/Payout states rather than performing arithmetic.

- `ELIGIBLE` -> backend can initiate settlement.
- `PROCESSING` -> show entitlement and processing state.
- `SETTLED` -> show completed settlement.
- technical delay/failure -> show delayed/blocked state without changing entitlement.

No `release 70%` interaction exists.

## Completion interactions

When lifecycle is `COMPLETED`, normal execution actions disappear. Chat remains available. Completed summary is displayed.

## Feedback interactions

### Leave feedback
Actor: Brand or Creator after completion.
Opens rating + optional review form.

### Submit feedback
Persists own review. Review stays hidden until reveal rule.

### Reveal feedback
Actor: System.
Occurs when both reviews are submitted or 48-hour window expires.

Feedback never reactivates Collaboration or blocks completion.

## Cancellation / termination / resolution interactions

Frontend should expose explicit domain actions where policy permits, not `setCancelled`/`setTerminated` mutations.

Backend determines lifecycle classification and financial resolution.

Resolution Card consumes:

- end reason;
- ended-from stage;
- Creator entitlement;
- Brand entitlement/refund;
- execution status of payment/refund;
- residual obligations.

## Blocked / dispute interactions

Use a common `BlockingCard`.

If user action exists, expose only backend-authorized action. If Admin/System resolution is required, show waiting/review state. Do not map `BLOCKED` to `PAUSED`.

## Pause interaction

`PAUSED` remains a reserved lifecycle state. No Brand/Creator pause/resume control is canonical yet. Future Admin/manual resolution may assign pause/resume authority. Timer, deadline and action behaviour remain unassigned.

## Realtime interactions

- successful command response updates current read model;
- socket event -> invalidate/refetch authoritative state;
- reconnect -> rejoin selected room and refetch when needed;
- socket loss -> keep hydrated UI and normal HTTP behavior where possible;
- navigation away/back -> full persisted rehydration before realtime attachment.

## Frontend permission rule

Frontend may hide/disable actions for usability, but backend is authoritative. Target read model should provide `actionRequiredBy` and `availableActions`. Existing `canBrand...` / `canCreator...` helpers are migration aids, not canonical workflow authority.