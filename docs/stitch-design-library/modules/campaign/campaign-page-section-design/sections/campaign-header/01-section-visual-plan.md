# Campaign Header Section Visual Plan

**Status:** READY FOR PRODUCT REVIEW AND FREEZE
**Desktop authority:** `1440 x 900` physical viewport
**Mobile authority:** `390 x 844` physical viewport

## Section purpose

The Header is the persistent Campaign identity and control surface. It lets a Brand identify the Campaign, distinguish lifecycle from readiness, understand supplied high-value context, act through authoritative capabilities, and inspect the Campaign Asset -> Brief structure without turning configuration into a workspace.

## Desktop composition

Use the full Campaign content width inside AppShell. The first row divides approximately:

- **65-70%:** Campaign identity, lifecycle/readiness badges, and supplied summary or truthful unavailable treatment.
- **30-35%:** contextual actions with one clear capability-driven primary lifecycle action.

The Campaign name may wrap to at most two balanced lines. Keep lifecycle and readiness visually distinct and text-labeled.

Below the first row, present exactly four equal core-fact columns:

1. Objective
2. Audience
3. Schedule
4. Platform

The full-width bottom row is the Product/Campaign Asset -> Brief disclosure. In the default state it communicates Product/Asset count and active Brief count, offers expand/collapse, and provides `View Product setup`. `Link Campaign Asset` appears only at Campaign ownership level in the expanded state.

The overall Header must remain compact enough that part of the Attention Layer is visible in the initial `1440 x 900` viewport. Do not reproduce or redesign global AppShell navigation inside Campaign content.

## Identity and summary

- Use the Campaign name supplied for the generation call; the representative fixture is defined in [the data manifest](../../08-representative-data-manifest.md).
- Show lifecycle and readiness as separate Badges.
- A supplied AI summary is at most two lines and remains attributable as supplied Campaign summary context.
- When no authoritative summary is supplied, use neutral truthful unavailable treatment; do not generate summary copy from Campaign fields.

## Contextual actions

Use these actions only when the brief/capability input permits:

- `View Campaign`
- `Edit`
- `Share`
- one lifecycle action from the lifecycle/capability reference

`View Campaign` opens a read-oriented right drawer. `Edit` is a separate supported route. `Share` opens the supported modal. The lifecycle action is explicit, never a generic on/off Switch.

## Expanded Asset/Brief hierarchy

The disclosure expands in place beneath the accepted Header default. Use the exact representative hierarchy in the [data manifest](../../08-representative-data-manifest.md). Each Campaign Asset row must communicate:

- supplied name;
- contextual entity type;
- `Linked from Brand Centre` ownership;
- its exact nested Briefs and statuses;
- supported contextual actions.

Campaign-local editing of Brand Centre data is prohibited. `Link Campaign Asset` is placed at Campaign level, not inside Brand Centre data. Do not add an orphan Brief or Deliverable.

## Campaign Details drawer

Use a right-side desktop Drawer with read-oriented sections mirroring Create Campaign decisions:

1. Campaign Strategy
2. Creator Strategy
3. Commercial Strategy

The drawer displays only supplied authoritative decisions. It is not an editable duplicate of the wizard, not a workspace, and not a new aggregate. Missing optional facts receive neutral unavailable/omitted treatment.

## Share modal

Use a concise Aurora Dialog only for supported sharing behavior. Do not invent public URLs, permissions, recipients, delivery channels, collaboration semantics, or success behavior. If the sharing contract is not supplied at generation time, the brief must stop at a read-only reference/explicit unavailable treatment rather than inventing controls.

## Stable interactions

`CP-HDR-01` may carry exactly three independent shallow interactions:

1. expanded Asset/Brief hierarchy;
2. Campaign Details drawer;
3. Share modal.

Each begins from the accepted default Header. Never show the hierarchy, drawer, and modal open simultaneously. If any interaction materially changes the stable composition or connector generation drifts, preserve the base and create a separate reference.

## Aurora intent

Use Section Container/Card semantics sparingly: the Header may be one coherent elevated surface, but facts and nested Assets must not become a stack of decorative cards. Use Badge for lifecycle/readiness, Button/Link by semantics, Accordion/disclosure for the hierarchy, Drawer for details, and Dialog for Share. Preserve 14px body text, 48px standard actions where space allows, visible focus, wrapping, and non-color status meaning.

## Out of scope

- Attention Layer content or metrics
- operational workspace selector/content
- full Asset/Brief configuration flows
- Brand Centre editing
- fabricated summary or sharing capability
- global AppShell navigation
- previous Campaign Page screen compositions
