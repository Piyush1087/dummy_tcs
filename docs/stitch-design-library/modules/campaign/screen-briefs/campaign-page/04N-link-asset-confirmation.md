# CP-ST-10 — Link Campaign Asset confirmation desktop brief

Priority: P0  
Viewport: Desktop 1440×900  
Parent: Accepted CP-ST-09

## Goal

Show the confirmation-ready state after an exact Brand Centre offering is selected.

## Representative state

Use a selected Product example while keeping the component Asset-type neutral.

## Required hierarchy

1. Preserve the accepted Link Asset drawer shell.
2. Selected Asset type, Brand and offering.
3. Read-only preview: image, name, type, price/relevant commercial data, description, USP, selling points and compliance/Do Not Say.
4. `Edit in Brand Centre` external action.
5. Cancel and enabled `Link Asset` sticky footer.

## Invariants

- This creates a Campaign Asset reference; it does not copy ownership into Campaign.
- Do not invent editable fields, commercial objects or Asset types.
- Preserve practical drawer scrolling and action clearance.

## Required output

Generate exactly one selected-offering state derived from CP-ST-09 and return all identities, artifacts and deviations.
