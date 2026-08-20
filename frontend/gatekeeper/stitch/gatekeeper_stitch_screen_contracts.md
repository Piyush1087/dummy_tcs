# Gatekeeper v1 — Stitch Screen Contracts

**Status:** FROZEN FOR STITCH DESIGN  
**Purpose:** Compact visual-design authority intended to be manually uploaded into the `Gatekeeper scan codex` Stitch project.

This document does not redefine Gatekeeper product behavior. It translates the frozen frontend screen/interaction authority into the exact representative visual references Stitch should design.

## Design scope

Gatekeeper remains part of the homepage/onboarding experience. Processing and recovery stay around the URL-entry area. Successful admission opens one pre-scan confirmation modal. Detailed Surface progress is not part of this design package.

Supported Industries shown in the confirmation experience are exactly:

- D2C
- AI / SaaS
- Healthcare
- Offline Services

Coming Soon items must look visibly separate from supported choices. Any sample Coming Soon label used here is illustrative, not final taxonomy authority.

## Family A — Gatekeeper URL entry

### `GK-ST-D01 — Gatekeeper URL Entry — Desktop`

Design the homepage brand-analysis entry section.

Show:

- Website URL field;
- ownership/authorization attestation;
- Terms + Privacy acceptance with linked legal names;
- `Analyze My Brand` primary action;
- lightweight below-input state treatment;
- one representative inline validation state.

The processing treatment should feel lightweight and capable of displaying real activity text later. Preserve the current homepage's useful visual spirit rather than creating a separate AI-processing destination.

### `GK-ST-M01 — Gatekeeper URL Entry — Mobile`

Responsive transformation of D01 with the same information and action semantics. Prioritize easy scanning, touch-safe controls, legible legal links and a clear primary CTA.

## Family B — Gatekeeper recovery

### `GK-ST-D02 — Gatekeeper Recovery — Desktop`

Design one reusable recovery composition directly beneath the URL-entry area.

Use a representative complex state such as classification uncertainty or unsupported onboarding with permitted waitlist/review actions.

The composition should support:

- status treatment;
- concise title;
- short explanation;
- primary action;
- secondary action;
- optional inline email/review expansion.

It should feel like a state of the URL-entry module, not a separate error page.

### `GK-ST-M02 — Gatekeeper Recovery — Mobile`

Mobile version of the same recovery pattern, preserving clear action hierarchy and usable optional email/review interaction.

## Family C — Pre-scan confirmation

### `GK-ST-D03 — Pre-Scan Confirmation — Desktop`

Design one concise confirmation modal shown after successful Gatekeeper admission.

Include:

- detected brand/domain context;
- AI-assessed top-level Industry;
- subtle `Change` affordance;
- concise explanation of the deeper Brand Intelligence scan;
- approximate-duration treatment without making a precise unsupported promise;
- note that domain-linked work email and Meta/Instagram access may be useful later;
- clear indication those are not required now;
- statement that resulting Intelligence will be reviewed by the user;
- `Start Brand Intelligence Scan` primary action.

### `GK-ST-M03 — Pre-Scan Confirmation — Mobile`

Mobile transformation of the same modal, using an appropriate compact modal/sheet treatment while preserving the same hierarchy and choices.

## Family D — Industry exception

### `GK-ST-D04 — Industry Exception — Desktop`

Use the same confirmation composition to show a supported-Industry disagreement warning.

Representative example:

- Creator Shop detected: `D2C`
- User selected: `AI / SaaS`

Actions:

- keep the detected Industry;
- continue with the selected supported Industry.

The warning should be lightweight but deliberate: the changed Industry must not feel silently applied.

The same visual structure must also be able to express an unsupported/Coming Soon selection. In that variant, clearly communicate that explicitly confirming the unsupported selection stops MVP automated onboarding.

### `GK-ST-M04 — Industry Exception — Mobile`

Mobile transformation of D04 with the same two-choice warning structure and clear consequence hierarchy.

## Visual continuity

- Work one family at a time.
- After the desktop base is accepted, derive its mobile version before moving to the next family.
- Maintain continuity within a family rather than independently redesigning each state.
- Use the design system and logos already loaded into the Stitch project.
- Keep copy concise and production-realistic.
- Use supplied representative content rather than fabricating business records.

## Out of scope

- detailed Surface scan/progress screens;
- post-Surface Intelligence review;
- production frontend implementation;
- additional supported Industries;
- a separate Gatekeeper success page;
- developer-only Identity dry-run UI.
