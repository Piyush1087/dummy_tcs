# CP-ST-01 — Operational Campaign desktop brief

Prompt version: 0.1  
Priority: P0  
Viewport: 1440×900 browser viewport  
Role: Master desktop visual grammar

## Product goal

Help the Brand understand Campaign health and enter the next relevant task workspace. This screen should feel like a polished operational workspace, not a long stack of domain cards.

## Representative state

Use coherent representative content:

```text
Campaign: Summer Collection — Creator Seeding
Lifecycle: Live
Objective: Pulse — Awareness & Reach
Schedule: 15 Sep–15 Oct 2026
Campaign budget: ₹5,00,000
Readiness: Ready

Workspace order supplied:
Discovery — selected — unavailable
Applicants — count 1 — available
Collaborations — count 0 — available
Reporting — unavailable

Linked setup summary:
1 Campaign Asset
1 canonical Brief
```

The values are representative display data, not permission to invent calculations or provider output.

## Required hierarchy

1. Campaign name, Live badge and one permitted lifecycle action.
2. Compact objective, schedule and budget facts.
3. Readiness displayed adjacent to—but separate from—lifecycle.
4. Backend-ordered workspace selector with Brand-facing labels, availability and count treatment.
5. Discovery as the one active workspace.
6. Truthful unavailable Discovery message inside the workspace.
7. Compact Asset/Brief/setup summary and deeper Campaign details through disclosure/drawer.

## Interaction intent

- One primary backend-permitted lifecycle action; use `Pause Campaign` for this representative.
- Edit and Share are subordinate utilities.
- Workspace change updates the selected task surface without rendering multiple workspace bodies.
- Strategy and detailed Campaign facts are disclosed on demand.
- Applicants count should invite navigation without becoming the page’s primary CTA.
- Reporting unavailable must not appear as `0` performance.

## Visual direction

- Reuse Aurora 5.0 literally.
- Preserve production AppShell geometry. Design the Content Area; do not invent navigation.
- Establish a reusable desktop shell for the next four screens.
- Prefer task-oriented composition, progressive disclosure and medium information density.
- Keep lifecycle/readiness and unavailable/empty distinctions legible without excessive warning styling.
- The active workspace should be visually dominant above secondary setup detail.

## Required components

Campaign header, lifecycle Badge, readiness status/callout, compact fact group, capability-driven primary Button, subordinate utilities, backend-ordered workspace selector, unavailable-state Alert/Card, Asset/Brief summary and details disclosure/drawer.

## Prohibited

- creator recommendations or discovery cards;
- Reporting metrics, charts, freshness or finality;
- frontend-computed Campaign health;
- inferred Asset identity;
- Collaboration lifecycle controls;
- duplicate global Header, Sidebar or navigation;
- Zone 1/2/3 language;
- pipeline stages, raw backend IDs or technical migration terms;
- multiple simultaneous primary actions.

## Responsive relationship

CP-ST-07 will later adapt this hierarchy to 390×844. Do not solve mobile by changing desktop product semantics.

## Review checklist

- Can the Brand identify lifecycle and readiness separately within seconds?
- Is the active workspace more prominent than permanently expanded strategy/setup detail?
- Are Discovery and Reporting clearly unavailable rather than empty?
- Does the page expose only one primary operational action?
- Can the shell plausibly host Setup, Applicants, Collaborations and terminal adaptations?
- Does it fit the production AppShell Content Area at 1440×900?

## Required output

Return the exact retained project ID, screen name/ID, parent/session ID, represented viewport/state, preview link where supported, screenshot identity, HTML/code identity, prompt/model record and every deviation from this brief. Generate no adjacent screen.

