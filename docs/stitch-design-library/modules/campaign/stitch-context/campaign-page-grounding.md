# Campaign Page — Stitch grounding

Status: Controlled Stitch-facing extract 0.1  
Actor: Brand  
Active surface: Campaign Page only

## What this page helps the Brand do

The Brand should understand the Campaign, see what needs attention, and work in one relevant workspace. The interface should feel operational and calm, not like a display of backend architecture.

## Page structure

```text
Stable Campaign shell
Campaign identity + lifecycle + compact facts + one permitted action

Conditional readiness/setup
Ready, missing requirements, or safe reconciliation guidance

Workspace navigation
One active workspace at a time
```

Detailed strategy, targeting and commercial information is summarized and disclosed on demand.

## Lifecycle and readiness

Lifecycle answers: “What operational state is this Campaign in?”

Readiness answers: “Are its current requirements satisfied?”

They are visually adjacent but never merged. A LIVE Campaign may lose readiness and remain LIVE. Show only the action allowed by the supplied state.

## Workspaces

Use Brand-facing labels. Order, visibility, availability and counts are supplied; do not invent or reorder them. One workspace is active.

- Discovery: creator acquisition before application. In the current authority it is unavailable, not empty. Do not create recommendations.
- Applicants: Application decision queue. Accepting an Application does not create a Collaboration.
- Collaborations: references to independently owned Collaborations. Do not show stages, commercial controls or fulfillment controls.
- Reporting: currently unavailable. Do not show zero metrics, charts, freshness or finality.
- Setup: explicit Campaign Asset, then Brief, then Deliverables.

## Setup and ownership

Campaign Asset references an explicitly selected Brand Centre entity: BrandProfile, Offering or BrandOffer. Never infer or recommend an identity from count, name, URL, type, similarity or uniqueness.

The dependency is fixed:

`Campaign Asset → Brief → Deliverables`

Brief and Deliverables must not appear as ownerless Campaign objects.

## Applicants and Collaborations

Applicants is a decision surface. Show creator identity, Brief context, Application status and clear accept/decline actions where permitted.

Collaborations is a reference surface. It may navigate to an existing independent Collaboration but never manages its lifecycle.

## Historical Campaigns

Terminal/historical pages are persistently read-only. Remove lifecycle and mutation controls. Present only truthful known facts. Never expose words such as legacy, UCE, migration or canonical reconstruction to the Brand.

## Visual authority

- Aurora 5.0 is literal visual authority.
- Work inside the existing Creator Shop AppShell Content Area.
- Do not redesign Header, Sidebar, mobile menu or Bottom Navigation.
- Retain the Campaign family resemblance established by Create Campaign without copying its wizard structure.
- Use progressive disclosure, purposeful whitespace, clear action hierarchy and task-oriented workspace composition.

## Screen family

Generate only the screen named in the current brief. The approved family contains CP-ST-01 through CP-ST-05, CP-ST-07 through CP-ST-15; CP-ST-06 is intentionally unused. Do not create additional screens or adjacent provider experiences.

## Prohibited invention

- new lifecycle states or transitions;
- frontend-derived readiness;
- inferred Campaign Assets;
- ownerless Briefs or Deliverables;
- Discovery recommendations;
- Reporting metrics/charts;
- Collaboration creation or controls;
- pipeline stages;
- technical IDs or migration language;
- replacement global navigation;
- a second visual system.

Report ambiguity instead of filling it with invented product behavior.
