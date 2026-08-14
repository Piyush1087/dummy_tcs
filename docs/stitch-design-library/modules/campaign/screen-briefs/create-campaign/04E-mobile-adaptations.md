# 04E — Mobile Create Campaign Adaptation Brief

**Targets:** S6 and S7  
**Parents:** Approved S1 desktop base, S2 creator strategy, and global shell context

## Objective

Adapt the approved Create Campaign system to realistic mobile browser space. Preserve all field semantics and Aurora 5.0 while solving scrolling, persistent workflow actions, global Bottom Navigation, keyboard pressure, and provider results.

## Viewport authority

### Representative

```text
Width: 390px
Visible browser-content height: approximately 620–680px
Global Header: 56px reserved
Global Bottom Navigation: 64px plus safe area reserved
```

### Stress

```text
Width: 360px
Visible browser-content height: approximately 560–600px
Keyboard-open state required
```

Stitch designs only the Content Area. Do not reduce canonical shell heights.

## S6 — Mobile Campaign Strategy

**Screen:** `Campaign — Create Strategy — Mobile 390 — Scheduled KPI Ready — v1`

### Required first-viewport hierarchy

```text
Create Campaign                     Step 1 of 3
Campaign Strategy
Current-step content begins
Visible cue that more content continues

Persistent Action Region
Back / Cancel as applicable              Continue

Global Bottom Navigation reserved below
```

### Content adaptation

- one-column sections;
- selection cards adapt without becoming tiny controls;
- Schedule dates stack appropriately;
- Objective cards remain easy to compare;
- derived KPI content uses compact progressive disclosure if required;
- Campaign Summary becomes collapsed, Sheet-based, or absent from the immediate viewport;
- labels remain visible; helper copy may be selectively shortened only through approved copy, not replaced by placeholders;
- Persistent Action Region does not cover form content.

The screen should show enough real content to evaluate density, not only a top-of-page hero.

## S7 — Mobile Creator Strategy with keyboard/provider

**Screen:** `Campaign — Create Creator Strategy — Mobile 390 — Geography Keyboard — v1`

### Required state

- Step 2 current;
- Geography input focused;
- mobile keyboard open;
- search results visible;
- India and Mumbai selected/preserved;
- available space follows browser-height assumptions;
- focused field and results can scroll into view;
- action region and Bottom Navigation do not overlap the interaction.

### Provider/results behavior

- results are attached to the search task;
- touch targets remain usable;
- long labels wrap/truncate safely;
- structured place type is understandable without technical metadata;
- closing/selecting a result returns to a stable form position;
- saved tags remain visible if the provider later fails.

## Persistent Action Region

It must:

- sit above global Bottom Navigation and safe area;
- remain visually part of the module workflow, not global navigation;
- preserve access to the primary action on long forms;
- avoid covering the focused field or provider results;
- adapt safely when the keyboard is open—exact hide/reflow behavior may follow platform feasibility, but overlap is not acceptable.

## Prohibited

- desktop form squeezed to mobile width;
- second mobile Header/app bar;
- duplicate Bottom Navigation;
- scrollable-away primary action on a long step;
- placeholder replacing the only visible label;
- artificially tall hero/intro region;
- collapsed controls below practical touch size;
- provider overlay hidden behind action/nav regions;
- independent visual redesign from desktop;
- assumption of full native-app screen height.

## Review checklist

- Is the first viewport task-oriented and compact?
- Can the user always understand the current step?
- Are actions accessible without covering content?
- Does the design account for browser chrome and Bottom Navigation?
- Is geography usable with the keyboard open?
- Does the 360px stress state remain legible and tappable?
- Are desktop hierarchy and components recognizably inherited?

## Required output

Return separate stable screen/file identities for S6 and S7, viewport/state details, parent IDs, interactive preview links, and available export/code identities.
