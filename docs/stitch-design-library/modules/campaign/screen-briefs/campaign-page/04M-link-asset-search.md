# CP-ST-09 — Link Campaign Asset search desktop brief

Priority: P0  
Viewport: Desktop 1440×900  
Parent: Accepted CP-ST-02

## Goal

Establish the explicit Brand Centre selection flow before a Campaign Asset exists.

## Representative state

Right-side drawer open. Asset type and Brand context are selected; offering search contains a query and shows distinct results. No offering is confirmed yet.

## Required hierarchy

1. Link Campaign Asset title and close.
2. Asset type selector.
3. Selected Brand context where applicable.
4. Search Brand Centre offerings.
5. Discrete result rows with type, image, name and concise relevant metadata.
6. Empty preview/instruction state.
7. Cancel and disabled Link Asset footer actions.

## Invariants

- Asset selection is explicit; never infer a Product or other offering.
- Brand Centre owns offering data and available Asset types.
- Do not use Add Product, pipeline or technical reconciliation language.
- No Campaign-local editing.

## Required output

Generate exactly one search/results drawer state and return stable identities, artifacts, lineage and deviations.
