# CP-ST-14 — Mobile Link Campaign Asset full-screen sheet brief

Priority: P0  
Viewport: 390×844 browser viewport  
Parents: Accepted CP-ST-10 and CP-ST-13

## Goal

Translate the confirmation-ready Link Asset drawer into a mobile full-screen interaction.

## Representative state

Selected offering with search context retained and a complete read-only preview.

## Required hierarchy

1. Full-screen sheet header and close/back.
2. Asset type and selected Brand Centre offering.
3. Compact search context or change-selection action.
4. Read-only image, identity, commercial facts, description, USP and compliance.
5. `Edit in Brand Centre`.
6. Sticky Cancel and Link Asset actions above safe area/global navigation.

## Invariants

- Do not squeeze the desktop drawer.
- No Campaign-local editing.
- Keyboard/search and footer must not cover results or preview content.
- No horizontal page overflow.

## Required output

Generate exactly one mobile full-screen selected-offering sheet with identities, artifacts, lineage and deviations.
