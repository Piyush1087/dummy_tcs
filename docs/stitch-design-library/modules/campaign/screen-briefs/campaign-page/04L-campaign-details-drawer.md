# CP-ST-08 — Campaign Details desktop drawer brief

Priority: P0  
Viewport: Desktop 1440×900  
Parent: Accepted CP-ST-01

## Goal

Show the complete Campaign definition without expanding the permanent header or creating a second editing model.

## Representative state

Live, ready Campaign. Open a right-side read-only drawer over the accepted operational workspace.

## Required hierarchy

1. Drawer title, Campaign identity and close action.
2. Strategy: schedule, objective, success metrics, platform and visibility.
3. Creator Strategy: archetypes, follower range, audience, geography and affinities.
4. Commercial Strategy: provisioning, support value, compensation, payout, budget, advance and payout terms.
5. Read-only treatment and long-content scrolling.

## Invariants

- Mirror the Create Campaign mental model: Strategy → Creator Strategy → Commercial Strategy.
- Do not place editable controls in this drawer.
- Do not duplicate the AppShell or invent Campaign fields/actions.
- Background Campaign shell remains recognisable but subordinate.

## Required output

Generate exactly one desktop drawer state and return stable identities, artifacts, lineage and deviations.
