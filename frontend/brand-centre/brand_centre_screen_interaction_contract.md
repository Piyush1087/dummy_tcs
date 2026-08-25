# Brand Centre — Screen Interaction Contract

**Status:** `PROPOSED_FOR_SYSTEMS_ARCHITECT_REVIEW`  
**Owner:** UI/UX Design AI Worker  
**Authority baseline:** `Piyush1087/dummy_tcs@017dbceac494f0861ec9a6bea7af3129b70fa5cb`  
**Accepted FE authority:** `agent/brand-centre-frontend-state-architecture@62f88e3722226b23b20f017a9b69a63d2ca6db99`

## 1. Purpose

Define the user-facing interaction hierarchy for Brand Centre without changing Product permissions, backend behavior, FE state semantics, or screen composition authority that remains to be visually reconciled.

Brand Centre interaction should reinforce:

```text
browse
→ understand
→ navigate
→ act only where consequential
```

not:

```text
open workspace
→ edit every field
```

## 2. Global interaction hierarchy

Priority order:

1. Read current Brand/Market/Offering/Recommendation state.
2. Follow a meaningful drill-down.
3. Review a material discrepancy or stale item where needed.
4. Perform a bounded edit/manage/decision action where Product permits it.
5. Return to the workspace with context preserved.

### Global interaction rules

- Workspace switching must not reset current content unnecessarily.
- Background refresh must not disable ordinary reading/navigation when current content remains usable.
- Current protected values remain interactive/readable while candidate status exists.
- Technical runtime states never become direct user controls.
- No `Run processor`, `Retry worker`, `Regenerate object`, `Use provider`, or similar control.
- Exact mutation availability is supplied by Product/application authority, not inferred by UX.

## 3. Brand Centre workspace navigation

Top-level destinations:

```text
Overview
Brand
Offerings
Market
Recommendations
```

Requirements:

- current workspace is visibly identified;
- each destination is keyboard reachable;
- route/deep-link semantics should be preserved;
- browser Back/Forward should behave predictably;
- mobile workspace switching must not require horizontal page overflow;
- focus should move to the new workspace heading after route-level navigation where frontend implementation determines an actual page replacement.

## 4. Overview interactions

### Primary interactions

**Recommendation summary → Recommendation detail / Recommendations workspace**

Purpose: move from compressed strategic priority to decision context.

**Observation / strategic signal → owning workspace/detail**

Purpose: show the source domain rather than editing Overview-composed content.

**Brand / Offering / Market context → owning workspace/detail**

Overview must never expose independent edit controls for duplicated summary content.

### Progressive state behavior

If one Overview region is learning/not ready:

- sibling useful regions remain interactive;
- the immature region may be non-interactive except for contextual navigation if useful;
- no global disabled state.

## 5. Brand workspace interactions

### Identity header

Read-first.

Potential detail actions:

- `View details` → `UX_PATTERN_READY`;
- `Request support change` for support-controlled identity → `UX_PATTERN_READY`, exact workflow downstream.

Do not place edit icons beside Brand name/Industry/domain merely because they are fields.

### Brand story & strategy

Recommended interaction:

```text
section summary
→ open focused detail
→ edit/confirm/review there if permitted
```

Potential patterns:

- Edit → `UX_PATTERN_READY`, permission `PRODUCT_PERMISSION_PENDING` by semantic component;
- Confirm → `UX_PATTERN_READY`, eligibility `PRODUCT_PERMISSION_PENDING`;
- Review suggestion → `UX_PATTERN_READY`, candidate content/action policy `PRODUCT_PERMISSION_PENDING`.

### Communication

Constraints are higher consequence than descriptive tone traits.

When a communication constraint is present:

- detail disclosure must keep it distinguishable from descriptive guidance;
- edit/confirmation affordance must not imply Creator Shop-derived description is already a hard Brand rule.

### Audience Personas

Persona card interactions:

- card/title/detail affordance opens Persona detail;
- full card may be clickable only if interactive semantics remain accessible and nested controls are avoided;
- no reorder interaction in V0 unless Product later requires it;
- no `Add filler Persona` pattern;
- no carousel-only access on mobile.

Persona detail may later support edit/manage/confirm, permission pending.

### Visual Identity

Approved Brand kit and Creator Shop interpretation may share one page section but must have distinct detail affordances.

Potential actions:

- Manage approved assets → `UX_PATTERN_READY`, Product permission depends on asset authority;
- Edit/confirm derived style interpretation → pattern ready, permission pending;
- hard visual constraints must never be created through an interaction labelled only `Use this style` without explicit Brand-authority semantics.

### Locations / Serviceability

Location detail navigation and Serviceability explanation are distinct.

Do not make clicking a serviceable market silently open/edit a Location unless there is a canonical referenced Location and the interaction communicates that relationship.

## 6. Offerings interactions

### Portfolio/list

Canonical interaction:

```text
Offering summary
→ Offering detail
```

Do not place Edit / Pause / Remove / Regenerate on every list row/card.

### Offering detail

Potential action area:

- Edit;
- Pause/Inactivate;
- Remove where Product/application authorizes;
- manage relevant relationships.

Status:

```text
interaction patterns = UX_PATTERN_READY
exact mutation permissions = PRODUCT_PERMISSION_PENDING / application authority
```

### Candidate Offering

No candidate flow is assumed in canonical list.

If Product later exposes a candidate:

- it must look like a suggestion/review item, not a canonical Offering;
- candidate must not gain ACTIVE lifecycle merely by appearing;
- candidate acceptance behavior requires Product authority.

## 7. Market interactions

Market is read/explore first.

Allowed interaction categories at current authority level:

- expand/collapse supported explanatory context;
- navigate to owning Brand/Offering/Analytics context where references exist;
- inspect competitor/Observation detail only when corresponding contracts are frozen.

Do not create interactions around unfrozen metrics.

Any control requiring:

- competitor set mutation;
- SOV configuration;
- Meta acquisition mode;
- market-scoring methodology;

is `PRODUCT_OR_INTELLIGENCE_DECISION_REQUIRED`.

## 8. Recommendations interactions

### Recommendation card

Interaction hierarchy:

1. understand the recommendation;
2. understand why now;
3. inspect supporting context if needed;
4. make one clear Brand decision.

### Product-authorized decision vocabulary

```text
Accept
Adjust
Not now
Not for us
Refresh recommendations
```

### Accept

Must communicate:

```text
accept recommendation
→ create/open pre-populated Campaign Draft
```

Never imply:

```text
Accept
→ publish / launch Campaign
```

### Adjust

Pattern may open a focused adjustment surface/detail.

Only later Product authority may determine which high-consequence levers are editable and how recomputation behaves.

### Not now / Not for us

May be secondary actions. They should not visually compete with the primary decision.

Persistence/consequence semantics remain backend/Product authority.

### Refresh recommendations

Meaning:

> Re-evaluate current Intelligence and portfolio state.

During refresh:

- keep current recommendation visible;
- show non-blocking activity;
- do not suggest novelty generation.

## 9. Candidate / conflict interactions

### AVAILABLE

Default interaction:

```text
current value remains visible
+ quiet `Review update` affordance
```

If raw candidate is hidden:

- disclosure can explain that Creator Shop found new information;
- do not reveal inferred value via tooltip/ARIA label/DOM hidden text if Product forbids visibility.

### CONFLICT

Interaction:

- focusable local callout;
- action such as `Review` only if a safe detail route exists;
- current protected value remains visible;
- candidate itself is not assumed visible.

### Resolution

Exact accept/reject/dismiss semantics are `PRODUCT_PERMISSION_PENDING`.

UX must work with summary-only state.

## 10. Stale / refresh interactions

### Stale current content

Do not block normal interaction.

If an edit begins while value is stale, frontend/backend mutation contract will later decide CAS/revision behavior. UX should not invent conflict resolution.

### Refreshing current content

- current links/actions stay usable unless backend says the action is unsafe;
- avoid disabling whole section;
- avoid repeated live-region announcements on every poll.

### Failed refresh

If current content exists:

- retain it;
- optional bounded retry/refresh affordance only if backend consumer contract supplies an authorized action;
- never translate failure into `NOT_READY` or null.

## 11. Loading / request interactions

### Initial loading

Only request-level loading may show skeleton/progress placeholders.

### Semantic learning

After request success, Intelligence learning uses content-aware learning state, not request skeleton.

### Request error with current data

Retain content and present bounded issue. Avoid modal interruption unless the failed action itself was user-triggered and consequential.

### Request error without data

Show a scoped error state with retry only if request retry is technically supported.

## 12. Edit / manage / confirm patterns

### Pattern A — focused detail edit

Use for multi-field Brand/Offering/Persona content.

- enter from detail, not inline from every workspace row;
- preserve clear Cancel / Save hierarchy;
- no optimistic `confirmed` semantic before server acceptance.

Status: `UX_PATTERN_READY`; exact field permissions `PRODUCT_PERMISSION_PENDING`.

### Pattern B — lightweight inline confirm

Use only where Product explicitly permits confirmation of a bounded value and the consequence is clear.

Status: `UX_PATTERN_READY`; eligibility pending.

### Pattern C — manage collection

Use for approved imagery, Locations, Personas or other collections only where Product permits management.

Prefer focused detail rather than many row-level destructive controls.

### Pattern D — request support change

For support-controlled identity anchors.

The control should explain that the value is important to account/Intelligence consistency. Do not imply user error.

## 13. Modal / bottom-sheet policy

Use modal/bottom sheet only for bounded tasks such as:

- confirmation of a consequential action;
- short review of a discrepancy;
- one-choice action menu;
- concise adjustment where context can remain visible.

Prefer dedicated detail/page for:

- long-form Brand Identity edits;
- Persona editing;
- Visual Identity management;
- Offering detail/manage;
- complex Recommendation adjustment.

Mobile bottom sheets must:

- trap focus while open;
- return focus to opener;
- respect safe area;
- avoid hiding primary content needed for the decision.

## 14. Keyboard and focus requirements

- Workspace navigation keyboard reachable in logical order.
- Section/detail affordances use semantic links/buttons.
- Cards must not use non-semantic `div onClick` without keyboard equivalent.
- Expanded disclosure controls expose `aria-expanded` and relationship where appropriate.
- Route-level detail navigation moves focus to page/detail heading.
- Modal/bottom sheet traps focus and restores it on close.
- Destructive actions require clear accessible names and, where needed, confirmation.
- Focus indicator must remain visible in Aurora-compliant styling.

## 15. Screen-reader announcements

Announce only meaningful state changes.

Recommended live announcements:

- `Brand information updated.` when current visible content materially changes after refresh;
- `Updating Brand information.` once when a user-visible refresh begins, if Product wants announcement;
- `Update temporarily unavailable. Current information is still shown.` when a failed refresh matters and current data remains;
- `New information is available to review.` for material candidate AVAILABLE where UX surfaces it;
- `New information conflicts with the current confirmed value.` for CONFLICT when surfaced.

Do not announce:

- processor/job transitions;
- every poll tick;
- generation IDs;
- provider changes;
- technical attempt failures.

## 16. State not conveyed by colour alone

Stale, refreshing, candidate/conflict, confirmed/protected and lifecycle states require text and/or icon semantics, not colour alone.

## 17. Responsive interaction parity

Desktop/tablet/mobile may transform disclosure and action placement, but must preserve:

- same current value;
- same readiness meaning;
- same authority semantics;
- same candidate status;
- same action permission;
- same consequence of Accept/Adjust/Edit/Support change.

## 18. FE semantic mapping for interactions

| UX interaction/state | Accepted FE semantic dependency |
|---|---|
| open detail | stable semantic/business ID supplied in consumer projection |
| learning | `NO_CURRENT/NOT_EVALUATED`, consumer readiness, optional `LEARNING` |
| edit affordance | FE editability + later Product permission |
| support-change affordance | `SUPPORT_CONTROLLED` editability/policy |
| confirmed treatment | authority `BRAND_CONFIRMED` |
| updating | `REFRESHING` freshness/activity |
| stale cue | freshness `STALE` |
| review update | candidate `AVAILABLE`, current preserved |
| conflict review | candidate `CONFLICT`, current preserved |
| temporary unavailable | safe runtime/error metadata, not result readiness |
| empty list | `VALUE=[]`, not `NO_CURRENT` |

## 19. Stop boundary

This contract does not authorize:

- backend APIs;
- production components;
- Product permissions;
- candidate acceptance logic;
- Stitch prompts/screens;
- new Intelligence states.
