# 04D — Validation and Recovery Screen Brief

**Targets:** S5 and S8  
**Parents:** Approved S1 desktop system and Create Campaign shell identity

## Objective

Define a consistent error hierarchy that distinguishes local field validation, step validation, autosave failure, and page-blocking Draft initialization failure.

These are state adaptations, not opportunities to redesign the wizard.

## S5 — Validation and autosave failure

**Screen:** `Campaign — Create Strategy — Desktop 1440 — Validation Save Failure — v1`

### Representative state

Adapt S1 with:

- Campaign Name invalid after validation;
- Scheduled Publish Until earlier than Publish From;
- Continue attempted;
- affected inline errors visible;
- optional concise `Complete the highlighted fields to continue` summary;
- save status: `Couldn't save changes · Retry`.

### Required hierarchy

1. autosave failure remains in the stable save-status area;
2. optional step summary orients the user;
3. field errors sit with their owning fields;
4. first invalid field receives focus/scroll priority;
5. all valid values and layout remain preserved.

The screen must not imply that the invalid local values were saved canonically.

### Interaction intent

- Retry is discoverable but does not replace Continue.
- Fixing a field removes its error once valid.
- The user remains on Step 1.
- Errors use human copy, never technical validation paths.
- Visual error weight is sufficient without turning the entire form red.

## S8 — Draft initialization failure

**Screen:** `Campaign — Create — Responsive — Draft Initialization Error — v1`

### State

The canonical Draft could not be created or loaded. No reliable editable form exists.

### Required composition

- Create Campaign identity inside the existing shell boundary;
- concise explanation that Campaign setup could not be loaded;
- Retry primary action;
- safe exit/back secondary action;
- no editable empty form;
- no false Saved state.

The failure may use a responsive component family for desktop/mobile if each version remains reviewable.

## Prohibited

- generic HTTP/Zod/schema language;
- field errors shown before interaction except after Continue;
- autosave failure represented only as a disappearing toast;
- Saved displayed alongside unresolved latest save failure;
- clearing valid values;
- creating a replacement Draft silently;
- rendering an apparently editable form when initialization failed;
- new visual system unrelated to S1.

## Review checklist

- Can the user distinguish field errors from save failure?
- Is the next recovery action obvious?
- Are valid values visually preserved?
- Does error treatment remain Aurora-compliant and calm?
- Does initialization failure prevent unsafe editing?
- Can the same patterns scale to other steps without custom redesign?

## Required output

Return stable identity and preview for each materially distinct state, with parent lineage and available export/code identity.
