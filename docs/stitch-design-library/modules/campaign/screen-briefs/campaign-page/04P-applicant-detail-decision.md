# CP-ST-12 — Applicant detail and decision desktop brief

Priority: P0  
Viewport: Desktop 1440×900  
Parent: Accepted CP-ST-03

## Goal

Define the evidence and Application-specific decision experience opened from the Applicants queue.

## Representative state

Right-side drawer for one creator with two submitted Applications. One Application is selected and decision-capable; no Collaboration reference exists yet.

## Required hierarchy

1. Creator identity, handle, archetypes and location.
2. Performance, audience and content evidence.
3. Campaign-fit assessment and explainable reasons.
4. Two Applications grouped under the one creator identity.
5. Selected Application’s Asset, Brief, deliverables and commercial response.
6. Sticky `Decline` and `Approve` actions.

## Invariants

- Decisions act on an Application, not the creator globally.
- Do not create Meta states or Collaboration lifecycle controls.
- Preserve backend-owned state and capabilities.
- No invented ranking formula or hidden evidence.

## Required output

Generate exactly one decision drawer state and return stable identities, artifacts, lineage and deviations.
