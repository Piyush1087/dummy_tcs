# CP-ST-15 — Mobile Applicant detail and decision brief

Priority: P0  
Viewport: 390×844 browser viewport  
Parents: Accepted CP-ST-12 and CP-ST-07

## Goal

Create a mobile decision flow that preserves creator evidence and Application-specific authority without overwhelming the viewport.

## Representative state

Full-screen detail sheet for one creator with two Applications; one submitted Application is selected and decision-capable.

## Required hierarchy

1. Sheet header/back and creator identity.
2. Progressive sections for performance, audience, content and Campaign fit.
3. Explainable recommendation reasons.
4. Application switcher/list grouped under the creator.
5. Selected Asset, Brief, deliverables and commercial response.
6. Sticky Decline and Approve above bottom navigation/safe area.

## Invariants

- Decision remains Application-specific.
- Essential evidence remains reachable without horizontal scrolling.
- No Meta connection state, ranking invention or Collaboration controls.
- Actions must not cover content.

## Required output

Generate exactly one mobile decision sheet and return stable identities, artifacts, lineage and deviations.
