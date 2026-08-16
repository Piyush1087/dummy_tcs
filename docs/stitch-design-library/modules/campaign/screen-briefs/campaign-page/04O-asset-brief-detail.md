# CP-ST-11 — Campaign Asset and Brief detail desktop brief

Priority: P0  
Viewport: Desktop 1440×900  
Parent: Accepted CP-ST-02

## Goal

Freeze the read-only Asset authority and the nested Asset → Brief → Deliverables information hierarchy.

## Representative state

Right-side detail drawer for one linked Asset with two Briefs: one Published and one Draft. The Published Brief is selected and has deliverables.

## Required hierarchy

1. Campaign Asset identity, type, image and Brand Centre source.
2. Read-only Asset facts and `Edit in Brand Centre`.
3. Brief list nested under the Asset with status and Application counts.
4. Selected Brief detail: strategy, deliverables, creative guidance, usage rights and creator requirements.
5. Capability-driven actions only; do not assume Edit/Publish/Pause.

## Invariants

- Never render Briefs as globally floating Campaign objects.
- Campaign cannot edit Brand Centre data.
- Deliverables belong to the exact Brief.
- Do not invent Collaboration workflow controls.

## Required output

Generate exactly one detail drawer state and return stable identities, artifacts, lineage and deviations.
