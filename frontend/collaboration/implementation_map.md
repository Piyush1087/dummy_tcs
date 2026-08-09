# Collaboration Frontend Implementation Map

Status: FROZEN from Collaboration 6.7B production reconciliation.

## Implementation principle

Modify the existing production Collaboration frontend in place. Preserve working architecture, split oversized components where needed, and add only genuinely missing surfaces. Do not create a second greenfield Collaboration frontend.

Production reference repo: `AatishBrianDSilva/creator-commerce-frontend-v2-clone`.

## Route-level mapping

### `src/pages/creator/collaborations/creator-collaborations-page.tsx`
Decision: **RETAIN**.

Continue mounting the shared `CollaborationWorkspace`. Keep domain logic out of this composition root.

### `src/pages/brand/collaboration/brand-collaboration-page.tsx`
Decision: **REWIRE**.

Current production route renders `PublicBrandLandingWorkspace`; replace this composition with the shared Collaboration workspace architecture. Brand and Creator should be role-specific projections of the same Collaboration UI/domain entity.

## Core workspace

### `src/features/collaboration/components/CollaborationWorkspace.tsx`
Decision: **RETAIN + ADAPT**.

Retain:

- Inbox / Chat / Execution Hub desktop shell;
- mobile sequential flow;
- search;
- selected Collaboration state;
- `?thread=` deep-link;
- persisted HTTP hydration;
- chat feed/composer;
- realtime invalidation/refetch.

Adapt:

- richer thread identity using Campaign + Product/Brief/Deliverable scope;
- lifecycle/status separate from workflow stage;
- `actionRequiredBy` presentation;
- clickable counterpart identity/context drawer;
- explicit realtime-degraded state without losing hydrated data;
- do not use fixed workflow percentage from stage alone.

## Execution Hub

### `CollaborationExecutionHub.tsx`
Decision: **RETAIN SHELL + SPLIT**.

Retain it as the right-pane execution orchestrator. Do not continue accumulating all stage JSX in one file.

Recommended refactor:

`components/execution/`

- `NegotiationPanel.tsx`
- `SecurementPanel.tsx`
- `FulfillmentPanel.tsx`
- `ProductionPanel.tsx`
- `PublishingSettlementPanel.tsx`
- `CompletedPanel.tsx`
- `ResolutionCard.tsx`
- `BlockingCard.tsx`

`components/deliverables/`

- `DeliverableCard.tsx`
- `SubmissionHistory.tsx`
- `RevisionRequestForm.tsx`

`components/context/`

- `CreatorContextDrawer.tsx`
- `BrandContextDrawer.tsx`

This is an in-place refactor/extension, not a replacement feature tree.

## NegotiationPanel

Decision: **ADAPT existing Stage 1 JSX**.

Retain quote display/input, Brand accept/counter, Creator accept and waiting states.

Remove/modify:

- fixed `30/70` display;
- `two negotiation rounds` language/state;
- obsolete final-offer machinery where it conflicts with the one-counter model.

Add:

- Creator decline counter;
- Brand end Collaboration where backend permits;
- currency-aware commercial display;
- negotiation skipped/terms-confirmed state.

## SecurementPanel

Decision: **ADAPT significantly**.

Retain funding card pattern, waiting/processing concept, optional manual receipt/Creator confirmation pattern.

Retire:

- `BARTER` payout branch;
- `fund 30% advance` semantics;
- hard-coded development bank-detail action.

Add:

- 100% agreed cash fee funding presentation;
- Advance protection percentage as separate commercial fact;
- funding processing/confirmed states;
- zero-cash skip;
- payout-details handoff to Settings/Payout;
- manual payment dispute state.

## FulfillmentPanel

Decision: **ADAPT existing Stage 3 controls**.

Retain tracking, courier, digital access, redemption/service information, Creator confirmation and issue-reporting UI primitives.

Remove `isD2cIndustry()` as workflow authority.

Render subtype from locked Collaboration fulfillment configuration:

- NONE;
- PHYSICAL;
- DIGITAL;
- SERVICE/OFFLINE.

Add first-issue remediation state and second-issue terminal Resolution Card. Issue type must not be hard-coded to `DAMAGED`.

## ProductionPanel

Decision: **EXTEND significantly using existing review interaction pattern**.

Replace the one-media presentation with `DeliverableCard[]` while preserving Submit / Approve / Request Revision behavior.

Each card uses a specific `deliverableExecutionId` and displays:

- locked Deliverable summary;
- current status;
- latest Submission Version;
- version/revision count;
- Brand feedback;
- 72-hour review-window metadata;
- available actions.

### `DeliverableCard.tsx`
Decision: **NEW**.

Must render `AWAITING_SUBMISSION`, `UNDER_REVIEW`, `REVISION_REQUESTED`, `APPROVED`, `AUTO_APPROVED`, `HARD_STOP`.

### `SubmissionHistory.tsx`
Decision: **NEW**.

Lightweight expandable append-only history. No storage-vendor terminology.

### `RevisionRequestForm.tsx`
Decision: **NEW**.

Actual Brand feedback is required. Show `Revision N of 2` and final-revision semantics. Remove hard-coded generic feedback.

## PublishingSettlementPanel

Decision: **ADAPT/EXTEND current Stage 5**.

Retire:

- one global `livePostUrl` UX;
- hard-coded Instagram/TikTok/YouTube universal copy;
- `Verify compliance & release balance` coupling.

Render publishing per applicable Deliverable. Support:

- publishing not required;
- awaiting publishing;
- evidence submitted;
- correction required;
- compliance verified;
- publishing not authorized after auto-approval;
- settlement eligible/processing/settled.

Compliance verification and financial settlement are distinct UI concerns.

## CompletedPanel

Decision: **NEW**.

When lifecycle is `COMPLETED`, show completion date, Deliverable summary, publishing completed/not-required status, settlement state and commercial summary. Normal execution actions disappear. Reuse the existing feedback form below as post-completion activity.

## ResolutionCard

Decision: **NEW reusable component**.

One component handles cancellation/termination outcomes using backend-provided lifecycle, reason, ended-from stage, Creator entitlement, Brand entitlement/refund, financial resolution status and residual obligations. Do not create separate pages per failure reason.

## BlockingCard

Decision: **NEW reusable component**.

Use for payment/compliance disputes, payout problems or Admin review. Distinguish user action from waiting-for-System/Admin. Do not label blocked states as Paused.

## Counterpart context

### `CreatorContextDrawer.tsx`
Decision: **NEW**.

Brand-side drawer shows Creator summary, current Collaboration context and factual previous Collaborations with this Brand. Do not expose other Brands' history or hidden Trust/admin intelligence.

### `BrandContextDrawer.tsx`
Decision: **NEW, lightweight**.

Creator sees Brand summary plus Campaign/Product/Brief/current Collaboration context.

## Frontend contracts

### `contracts/collaboration.contracts.ts`
Decision: **REMODEL**.

Move away from old `isPaused/isTerminated`, fixed 30/70, industry-driven logistics, singular media/finalization assumptions.

Target read model conceptually includes:

- identity/source context;
- lifecycle;
- workflow stage/status/actionRequiredBy/availableActions;
- commercials;
- securement;
- fulfillment;
- Deliverable Executions + Submission Versions;
- publishing per Deliverable;
- settlement;
- resolution;
- feedback.

Exact DTO names await backend/read-model reconciliation.

## API client

### `api/collaboration-client.ts`
Decision: **RETAIN command-client pattern + EXPAND/RENAME**.

Keep action-specific functions, not a generic update mutation. Evolve commands toward:

- accept/counter/decline commercial terms;
- fund Collaboration;
- provide/confirm/report Fulfillment;
- submit/approve/request revision per Deliverable;
- submit revision;
- submit/verify/correct publishing evidence per Deliverable;
- end Collaboration through explicit domain command;
- submit feedback;
- query counterpart context.

Rename user-facing/domain paths from logistics -> fulfillment and posting -> publishing when backend contracts are updated.

## Realtime

### `hooks/use-collaboration-realtime.ts`
Decision: **RETAIN**.

Keep room join/leave/reconnect behavior. Events should invalidate/refetch authoritative state.

### `hooks/use-collaboration-live-sync.ts`
Decision: **RECONCILE**.

If it duplicates the newer realtime hook, merge/retire rather than preserve two competing abstractions.

## State helpers

### `utils/collaboration-execution-state.ts`
Decision: **REDUCE + ADAPT**.

Existing helper functions may remain during migration but should stop being canonical workflow authority. Move toward backend-provided `actionRequiredBy` and `availableActions`. Keep presentation-formatting helpers.

### `utils/collaboration-validation.ts`
Decision: **RETAIN + ADAPT**.

Keep lightweight client usability validation. Remove obsolete hard-coded payment/media/platform assumptions. Backend remains authoritative.

### `utils/stage-labels.ts`
Decision: **ADAPT**.

Canonical labels: Negotiation, Securement, Fulfillment, Production, Publishing & Settlement. Feedback is not Stage 6. Replace simplistic fixed stage-progress percentage with stage/local progress.

### `utils/parse-collaboration-api-error.ts`
Decision: **RETAIN**.

Extend only if structured domain errors require dedicated presentation.

## Styling

### `collaboration-workspace.css`
Decision: **RETAIN + EXTEND**.

Preserve existing workspace/layout CSS. Add only required styles for lifecycle/status, context drawers, Deliverable cards, Submission history, timers, Blocking/Resolution/Completed panels and settlement states.

## Retire list

- Brand Collaboration route wired to `PublicBrandLandingWorkspace`;
- fixed 30/70 UI;
- `BARTER` payout branch;
- D2C/industry-driven Fulfillment UI choice;
- development bank profile action;
- one-media Production assumption;
- hard-coded revision feedback;
- one-live-URL publishing model;
- universal hard-coded platform copy;
- `Verify compliance & release balance`;
- Feedback as workflow Stage 6;
- combined `terminated or paused` state;
- fixed stage-to-percentage progress.

## Preserve list

- shared Collaboration workspace architecture;
- inbox and selected-thread UX;
- persisted HTTP hydration;
- chat and SYSTEM message rendering;
- command-specific API client architecture;
- realtime room architecture;
- core Negotiation controls;
- core Fulfillment form primitives;
- existing feedback form;
- current layout/CSS foundation.
