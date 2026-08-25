# Brand Centre — Responsive Behavior Contract

**Status:** `PROPOSED_FOR_SYSTEMS_ARCHITECT_REVIEW`  
**Owner:** UI/UX Design AI Worker  
**Authority baseline:** `Piyush1087/dummy_tcs@017dbceac494f0861ec9a6bea7af3129b70fa5cb`  
**Accepted FE authority:** `agent/brand-centre-frontend-state-architecture@62f88e3722226b23b20f017a9b69a63d2ca6db99`

## 1. Principle

Responsive Brand Centre is **semantic parity with deliberate composition change**, not compressed desktop.

All form factors consume the same semantic state:

- current-value state;
- consumer readiness;
- result readiness;
- freshness;
- authority/editability;
- candidate/discrepancy;
- runtime activity.

Viewport must never change what the data means.

## 2. Breakpoint intent

This document does not freeze CSS breakpoints. It defines three experience contexts:

```text
Desktop
→ broad workspace composition / simultaneous comparison

Tablet
→ reduced parallelism / selective two-column composition

Mobile 390
→ single-primary-column reading / focused drill-down
```

Exact implementation breakpoints remain Frontend/design-system authority.

## 3. Global Brand Centre navigation

### Desktop

- authenticated application shell remains unchanged;
- Brand Centre secondary navigation may present the five workspaces simultaneously;
- current workspace clearly marked;
- content remains dominant over navigation.

### Tablet

- keep all five destinations visible where width allows;
- otherwise use compact scrollable secondary navigation or a workspace selector;
- do not allow navigation labels to collide or shrink below readable sizing.

### Mobile 390

Preferred order of patterns:

1. compact workspace selector if five destinations cannot remain readable;
2. accessible horizontally scrollable tabs only if the scroll behavior is discoverable and does not cause page-level overflow;
3. never wrap five labels into an unstable multi-row pseudo-tab grid.

The workspace heading must remain visible near the start of content after switching.

## 4. Global responsive rules

- No horizontal page overflow at 390px.
- Long Brand names, Offering names and dynamic Intelligence text wrap naturally.
- No mid-sentence truncation for strategic narratives.
- Long semantic labels may wrap; stable IDs remain hidden implementation detail.
- Do not reduce body text below Aurora minimum simply to preserve desktop density.
- Background refresh/stale/candidate indicators must not steal the mobile content hierarchy.
- Repeated content collections stack rather than becoming carousels by default.
- Bottom sheets are for bounded actions, not long read surfaces.

## 5. Overview responsive behavior

### Desktop

Preferred hierarchy:

```text
Creator Shop perspective — dominant width
        ↓
Recommendations requiring attention — prominent
        ↓
Observations + selected context — supporting
```

Possible composition:

- perspective as one wide editorial region;
- 1–3 Recommendation cards in a balanced row/grid if content remains readable;
- observations/context in lighter rows or split supporting areas.

Avoid a uniform 3×N dashboard grid.

### Tablet

- perspective remains full-width;
- Recommendation cards may use two columns;
- observations/context shift to stacked or 2-column depending copy length.

### Mobile 390

Order:

1. workspace heading;
2. strongest perspective;
3. Recommendation cards stacked;
4. Observations;
5. supporting Brand/Offering/Market context;
6. learning/partial maturity notes only where relevant.

What collapses:

- secondary evidence/context can use disclosure rows;
- maturity metadata may move into detail rather than staying visible.

What never collapses away:

- current Recommendation headline/action;
- materially important Observation;
- primary perspective.

## 6. Brand responsive behavior

### Desktop

Recommended rhythm:

1. identity header across page width;
2. Brand story & strategy as the primary editorial block;
3. communication as a related strategic block;
4. Audience Personas in 1–3 responsive columns according to actual count/content;
5. Visual Identity with approved assets and derived interpretation visibly related but distinct;
6. Locations / Serviceability where applicable.

Use multi-column layouts only inside compatible repeated content or paired concepts. Do not put every semantic in a grid cell.

### Tablet

- identity header may become two rows;
- Brand narrative remains wide;
- Personas usually 2-column if copy remains readable;
- Visual Identity approved assets may retain compact visual strip while interpretation stacks below;
- Locations become list/stack.

### Mobile 390

Single flow:

```text
Brand identity
→ Brand story & strategy
→ Communication
→ Audience Personas
→ Visual Identity
→ Locations
→ Serviceability
```

Identity header:

- logo + Brand name first;
- domain below;
- Industry/geography/social state on subsequent line(s);
- avoid a dense metadata table.

Brand story:

- one primary narrative at a time;
- supporting values/personality/differentiation become readable subsections;
- detail affordances become full-width links/rows rather than tiny edit icons.

Audience:

- Persona cards full-width and stacked;
- 1 Persona occupies one intentional card, not one-third width;
- 2–3 simply add more cards;
- no horizontal carousel required to access Personas.

Visual Identity:

- approved asset preview first;
- derived interpretation follows as a separate labelled region;
- image strip may wrap into a small grid; no horizontal-only gallery is required for canonical access;
- exact image management opens detail.

Locations/Serviceability:

- locations stack;
- serviceable market summaries wrap; avoid map requirement unless later UX explicitly chooses one and semantic data supports it.

## 7. Brand detail / edit responsive behavior

### Desktop

- focused detail page or constrained content column within shell;
- editable groups may use side-by-side label/content only when scanability improves;
- primary save action remains clear but does not float over long content unless later usability validation supports it.

### Tablet

- collapse two-column form groups where label/value widths become uneven;
- maintain grouped semantic sections.

### Mobile 390

- full-width focused detail page preferred;
- one primary action area;
- long edit forms use grouped sections and normal page scroll;
- bottom sheet only for short confirmations/action menus;
- no multi-column form.

## 8. Candidate / conflict responsive behavior

### Desktop

Candidate AVAILABLE:

- small inline review indicator within affected section/detail;
- avoid page-wide banner.

CONFLICT:

- bounded section callout adjacent to current protected value;
- review action remains local.

### Mobile 390

- current value appears first;
- status line/callout follows;
- review disclosure may open dedicated detail or bottom sheet if short;
- do not place candidate and current side-by-side.

Raw candidate remains hidden when FE says `rawCandidateVisible=false` regardless of viewport.

## 9. Offerings responsive behavior

### Desktop

- portfolio/list may use compact cards or rows depending final visual direction;
- grouping can use section headers;
- actions stay focused on navigation to detail;
- rich Offering detail may use two-column visual/content layout where suitable.

### Tablet

- portfolio may use two columns for visual Offerings or one-column rows for content-heavy services;
- do not force one cross-industry card density.

### Mobile 390

- one-column Offering list;
- image optional and compact;
- name/type/lifecycle remain visible;
- description/price/destination use secondary hierarchy;
- one obvious detail affordance;
- no row-level destructive action swarm.

Empty state stays vertically compact; it should not consume several screens of decorative illustration.

## 10. Market responsive behavior

Market visual design remains envelope-only until semantic contracts mature.

### Desktop

- may support analytical comparison regions once contracts permit;
- competitor enrichment can live beside owned-Brand context only if semantics are comparable;
- do not invent chart layouts solely to fill width.

### Tablet

- comparison blocks reduce to two-column or sequential groups;
- legends/context must remain adjacent to any future data visualization.

### Mobile 390

- analytical regions stack;
- tables, if later required, transform into accessible stacked rows/cards rather than horizontal page scroll where practical;
- charts must remain readable without pinch/side-scroll as the only way to understand them;
- competitor-unavailable/learning state is local.

## 11. Recommendations responsive behavior

### Desktop

- 1 Recommendation: intentionally wide, not a lonely narrow card in a 3-column grid;
- 2 Recommendations: balanced 2-column if content lengths support it;
- 3 Recommendations: 3 columns only when rationale stays readable; otherwise 2+1 or stacked editorial layout;
- Recommendation count never padded.

### Tablet

- usually 1–2 columns;
- primary action remains within each card/detail context.

### Mobile 390

- recommendations stack full-width;
- headline/why-now visible before secondary metadata;
- primary decision action remains in the content flow;
- secondary actions may use a compact action row/menu if accessibility is preserved;
- no sticky CTA that obscures the next Recommendation by default.

`NO NEW CAMPAIGN` uses one considered conclusion block, not an empty card grid.

## 12. Progressive-state responsive behavior

### Learning

Desktop: small contextual panel inside section.  
Mobile: compact full-width inline block.

Never use a full-page progress animation after the authenticated Brand Centre has useful sibling content.

### Partial

Same content composition as ready, just with fewer items/fields. Do not introduce special layouts merely because content is partial.

### Stale

Desktop: metadata/indicator near affected section or detail.  
Mobile: short text/icon status under heading/value; avoid chip clutter.

### Refreshing

Desktop/mobile: current content retained. A lightweight `Updating` cue may sit in section header/status area.

### Temporary unavailable

With current data: keep content, small notice.  
Without current data: scoped local unavailable state.

## 13. Density resilience

Every repeated content design must explicitly tolerate:

- 0 items where semantic empty is valid;
- 1 item;
- normal target density;
- maximum currently frozen density where known;
- long labels;
- long but contract-valid rationale/summary copy;
- optional image absent;
- optional metadata absent.

Do not use fixed equal-height containers that clip dynamic text.

## 14. Accessibility-responsive requirements

- Touch targets remain at least Aurora-accessible size.
- Focus order follows visual reading order after reflow.
- DOM order should ideally match mobile reading order rather than relying on CSS visual reordering.
- Disclosure controls expose expanded/collapsed state.
- Mobile bottom sheet traps focus and restores it.
- Status text remains available to screen readers after icons/chips are visually condensed.
- No information depends on hover alone.

## 15. UX ↔ FE responsive invariants

The following never change by viewport:

```text
VALUE vs EXPLICIT_NULL vs NO_CURRENT
READY/PARTIAL/NOT_READY
CURRENT/STALE/UNKNOWN
candidate AVAILABLE/CONFLICT
BRAND_CONFIRMED/SUPPORT_CONTROLLED semantics
stable semantic identity
empty collection meaning
execution failure separation
```

## 16. Stitch preparation implications

After convergence review, the later Stitch screen set should include desktop and 390px variants for the screen families where composition materially transforms.

Tablet should primarily be validated during frontend/responsive implementation unless Systems Architect/UI review identifies a genuinely distinct tablet composition requiring its own visual artifact.

No Stitch prompt or screen is authorized by this document.
