# Collaboration Frontend Copy Contract

Status: FROZEN from Collaboration 6.7B copy reconciliation.

## Purpose

Define canonical user-facing wording families for Collaboration. This is not final visual design copy for every microstate; it establishes the approved terminology and removes obsolete domain language from production.

## Global terminology

Use:

- Collaboration
- In progress
- Paused
- Completed
- Cancelled
- Ended (user-facing label for backend `TERMINATED`)
- Negotiation
- Securement
- Fulfillment
- Production
- Publishing & Settlement
- Action required
- Waiting for Brand / Waiting for Creator
- Payment processing / Payment settled

Do not use as canonical wording:

- Logistics as the generic workflow name
- Content Review as the Production-stage name
- Stage 6 Feedback
- Barter as a payout rail
- fixed 30/70 wording
- `release balance` as a compliance action
- `terminated or paused` combined copy

## Workspace

Keep the existing simple empty/select copy family, but references should be to a specific approved Application creating a Collaboration rather than generic Campaign approval.

Prefer stage/local progress such as:

`Production · 2 of 3 deliverables approved`

instead of fixed `% through workflow` derived only from stage number.

## Negotiation

Creator proposal guidance:

`Propose your fee for this collaboration. The Brand may accept it or make one counter-offer.`

Waiting copy may use:

- `Waiting for the Creator to submit their fee proposal.`
- `Your proposal was sent. Waiting for the Brand to accept or counter.`
- `Counter-offer sent. Waiting for the Creator.`

Creator counter decision:

- `Accept`
- `Decline`

Do not display `round 1/2` as the core mental model.

## Securement

Brand:

`Fund collaboration`

`Secure the full agreed Creator fee in escrow before execution begins.`

Display separately:

- `Agreed Creator fee`
- `Amount to secure`
- `Advance protection`

Do not say the Advance is being paid merely because funds are secured.

Creator:

- `Waiting for the Brand to secure funds.`
- `Funds secured. The collaboration can now proceed.`

Zero-cash case:

`No cash securement required.`

Manual payment:

- `Report payment`
- `Confirm payment received`
- `I haven't received this payment`

Payout prerequisite:

`Payout details required`

`Add or update your payout details to continue.`

CTA: `Manage payout details`

## Fulfillment

Generic domain label: `Fulfillment`.

Subtype-aware wording:

Physical:

- `Send product`
- `Shipment dispatched`
- `Confirm product received`

Digital:

- `Provide access`
- `Access provided`
- `Confirm access`

Service/offline:

- `Arrange fulfillment`
- `Fulfillment arranged`
- `Confirm fulfillment`

Common CTA: `Report fulfillment issue`.

After first issue:

`Fulfillment issue reported`

`One remediation attempt remains.`

After second issue:

`Collaboration ended`

`Fulfillment could not be completed after the permitted attempts.`

Do not assign blame in system-generated copy for this outcome.

## Production

Keep:

- `Submit content`
- `Submit for review`
- `Approve`
- `Request revision`

Deliverable-specific waiting state:

`Awaiting Brand review`

Review timer:

`This submission will be automatically approved if no action is taken within the review window.`

Revision form:

`Request revision`

`Describe what needs to change.`

`Revision 1 of 2` / `Revision 2 of 2`

Final allowed resubmission should be clearly labelled `Final revision`.

Creator revision state:

`Revision requested`

`Brand feedback:`

`[actual feedback]`

No hard-coded generic revision feedback is canonical.

## Manual approval vs auto-approval

Manual Brand approval:

`Approved by Brand`

Auto-approval:

`Auto-approved`

`The Brand review window expired without a response.`

Creator warning where publishing would otherwise be required:

`Your production requirement is complete. Do not publish unless the Brand has explicitly approved publication.`

Auto-approval satisfies Production but does not itself create publication consent.

## Publishing

Generate wording from the locked Deliverable/platform rather than a global platform list.

Examples:

`Instagram Reel · Submit publishing evidence`

`YouTube Short · Submit publishing evidence`

Where explicit Brand approval exists:

`Ready to publish`

`The Brand approved this deliverable. Publish according to the agreed schedule and submit the required evidence.`

Where the Deliverable only auto-approved and no publication consent exists:

`Publishing not authorized`

`The production review window closed without Brand approval. No publishing action is required.`

## Compliance

Use:

- `Verify publishing`
- `Request correction`
- `Publishing verified`
- `Correction required`

Do not use `Verify compliance & release balance`.

Publishing/compliance correction does not consume a Production revision round.

## Settlement

Eligible/start:

`Payment`

`Creator fee`

`Ready for settlement`

Processing:

`Payment processing`

`Creator entitlement`

`No action is required.`

Settled:

`Payment settled`

Technical delay:

`Payment delayed`

`Your payment entitlement is confirmed, but the transfer is still being processed.`

Do not imply technical payout failure changes commercial entitlement.

## Completion

Canonical headline:

`Collaboration completed`

Summary may include:

- Deliverables resolved;
- Publishing completed / Not required;
- Payment settled;
- completion date.

Where production auto-approved without publication consent:

`Production was completed. Publishing was not required because Brand publication approval was not provided.`

Use neutral wording; do not make Brand inactivity accusatory.

## Resolution copy

Use one reusable Resolution Card and backend-provided amounts.

### Fulfillment hard-stop

Brand:

`Collaboration ended`

`Fulfillment could not be completed after the permitted attempts.`

`Refund`

Creator:

`Collaboration ended`

`Fulfillment could not be completed after the permitted attempts.`

`Creator payout`

### Production hard-stop

`Collaboration ended`

`The final permitted revision was not approved.`

Creator: `Protected creator entitlement`

Brand: `Creator entitlement` + `Refund to Brand`

### Creator-caused non-performance

Use neutral factual copy such as:

`The required Creator action was not completed.`

Then show backend-resolved refund/entitlement values.

## Blocked/dispute copy

When user action exists:

`Action required`

Explain the blocker and action required.

When Admin/System review is active:

`Under review`

`Creator Shop is reviewing this issue. No action is required from you right now.`

Do not call a blocked state `Paused`.

## Pause

Only generic reserved wording is frozen:

`Paused`

`This collaboration is temporarily paused.`

Do not define who paused it, deadline effects, timer effects, resume controls or allowed actions yet.

## Feedback

Keep:

`Rate this collaboration`

After own submission:

`Feedback submitted`

`Your feedback will become visible when the other party submits theirs or when the feedback window closes.`

Feedback wording must not imply that review submission is required for Collaboration completion.

## System messages

System messages are projections of authoritative domain events. Recommended vocabulary examples:

- `Creator submitted a fee proposal.`
- `Brand sent a counter-offer.`
- `Commercial terms were accepted.`
- `Collaboration funds were secured.`
- `Brand provided fulfillment.`
- `Creator confirmed fulfillment.`
- `Creator submitted [Deliverable] · Version N.`
- `Brand requested Revision N of 2.`
- `[Deliverable] was approved.`
- `[Deliverable] was auto-approved after the review window expired.`
- `Publishing was not authorized. No live post is required.`
- `Publishing evidence was submitted.`
- `Publishing was verified.`
- `Payment settlement started.`
- `Payment was settled.`
- `Collaboration completed.`

Exact amounts/platform labels should come from the authoritative read model/event payload.