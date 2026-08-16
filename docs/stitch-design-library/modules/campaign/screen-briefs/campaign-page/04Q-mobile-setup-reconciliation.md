# CP-ST-13 — Mobile setup and reconciliation brief

Priority: P0  
Viewport: 390×844 browser viewport  
Stress review: 360px and reduced browser height  
Parents: Accepted CP-ST-02 and CP-ST-07

## Goal

Adapt readiness remediation and the Asset/Brief hierarchy into a usable single-column Campaign workspace.

## Representative state

Published Campaign, not execution-ready. One linked Asset has no published Brief; another missing requirement is visible.

## Required hierarchy

1. Production mobile AppShell.
2. Compact Campaign identity, lifecycle and readiness callout.
3. Clear next remediation action.
4. Stacked Campaign Asset card(s), nested Brief status and deliverable summary.
5. `Link Campaign Asset` and contextual `Create Brief` actions.
6. Workspace selector and bottom-navigation/action clearance.

## Invariants

- One vertical reading order; no squeezed desktop grid.
- Do not hide the Asset → Brief → Deliverables dependency.
- No horizontal page overflow or swipe-only essential action.
- Do not redesign global navigation.

## Required output

Generate exactly one 390×844 setup screen and report a 360px stress assessment without creating another authority screen.
