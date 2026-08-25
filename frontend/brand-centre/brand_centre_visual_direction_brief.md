# Brand Centre — Visual Direction Brief

**Status:** `PROPOSED_FOR_SYSTEMS_ARCHITECT_REVIEW`  
**Owner:** UI/UX Design AI Worker  
**Authority baseline:** `Piyush1087/dummy_tcs@017dbceac494f0861ec9a6bea7af3129b70fa5cb`  
**Accepted FE authority:** `agent/brand-centre-frontend-state-architecture@62f88e3722226b23b20f017a9b69a63d2ca6db99`

## 1. Purpose

Set the visual-experience direction for Brand Centre before Stitch preparation.

This is not a screen design, Stitch prompt, design-system replacement, or permission contract. Aurora remains the primitive/token authority.

## 2. Desired character

Brand Centre should feel:

- calm;
- intelligent;
- editorially structured;
- premium but not decorative;
- progressively alive;
- strategic rather than analytical-for-analysis' sake;
- trustworthy enough that a Brand can delegate understanding to Creator Shop.

The visual feeling should be closer to:

> a well-maintained strategic Brand dossier that highlights what matters

than:

> an AI dashboard that exposes every generated output.

## 3. Perceptual objective

The user should notice, in order:

1. what matters now;
2. what Creator Shop understands;
3. where more detail exists;
4. where something needs review;
5. where a consequential action is available.

Metadata such as freshness, confirmation and learning should support this hierarchy, not compete with it.

## 4. Visual system relationship

```text
Aurora
= typography / spacing / color / surfaces / controls / accessibility primitives

Brand Centre visual direction
= composition / hierarchy / rhythm / density / emphasis
```

Do not introduce a parallel design system.

Prefer existing Aurora components/primitives where possible. New reusable primitive proposals should be made only after a recurring design need is proven.

## 5. Signature visual idea

Use **layered understanding** as the module's quiet signature.

Meaning:

- stable Brand truth forms a visual anchor;
- Creator Shop interpretation sits around it in clear narrative hierarchy;
- progressive/learning content appears as restrained continuation rather than empty error boxes;
- recommendations emerge as stronger decision surfaces.

Avoid literal AI motifs such as neural networks, sparkles everywhere, scanning beams, model badges or animated data streams.

A small restrained intelligence motif/icon may appear in selective Creator Shop-perspective areas, but it must not become the module's dominant decoration.

## 6. Spatial rhythm

Brand Centre should use a deliberate **editorial rhythm**:

```text
strong section introduction
→ primary insight/content
→ supporting collection/detail
→ breathing space
→ next semantic group
```

Avoid:

```text
card
card
card
card
card
```

with identical borders, radii and weight.

### Preferred surface mix

Use a combination of:

- open page sections;
- selective soft surfaces;
- bordered cards for repeatable objects like Personas/Offerings/Recommendations;
- subtle dividers for lower-priority metadata;
- stronger contained surfaces only for important decision or conflict regions.

## 7. Typography hierarchy

Aurora typography remains authority.

Direction:

- workspace title clear but not oversized;
- strategic headline/perspective receives strongest typographic emphasis;
- section headings create rhythm without making every block feel like a separate app;
- generated narratives remain readable paragraph text, not tiny caption copy;
- metadata/status text is visibly secondary;
- Recommendation headlines may use stronger weight/size than ordinary content cards.

Do not use all-caps technical labels as the dominant visual hierarchy.

## 8. Color philosophy

Use Aurora semantic color roles conservatively.

### Primary green

Reserved for:

- meaningful primary actions;
- active navigation/accent;
- restrained positive/confirmed cues where appropriate.

Do not make every Creator Shop-derived item green.

### Neutral surfaces

Should carry most Brand Centre content.

### Warning/error color

Reserve for real risk/attention states. Learning, partial maturity and ordinary staleness should not look like errors.

### Candidate/conflict

AVAILABLE should be subtle/neutral-to-informational.  
CONFLICT may use stronger semantic emphasis but should not automatically become red/error unless Product consequence requires it.

## 9. Overview visual direction

Overview should be the most **editorial and prioritised** workspace.

### Dominant element

Creator Shop perspective or strongest current strategic conclusion.

It should not look like a KPI card.

Potential visual treatment:

- broad open section with strong headline and concise narrative;
- one subtle accent/identifier indicating Creator Shop perspective;
- selected related context links below.

### Recommendations

Visually stronger than routine observations.

Recommendation cards may use:

- stronger border/surface contrast;
- larger title hierarchy;
- clear `why now` region;
- prominent but bounded decision action.

### Observations

Lighter than Recommendations. They should feel like grounded signals, not alerts by default.

### Maturity gaps

Small contextual blocks, not a progress dashboard.

## 10. Brand visual direction

Brand should feel like a **living profile**, not a form.

### Identity header

Compact recognition region:

- Brand logo;
- Brand name;
- domain;
- key stable context.

Avoid key/value-table aesthetics.

### Brand story & strategy

Use open editorial hierarchy.

Potential composition:

- one large Brand description/positioning region;
- value proposition as a supporting statement;
- differentiation/proof in a more structured treatment;
- values/personality as lighter tags/list items.

Do not give every scalar an equal bordered card.

### Communication

Could use a calm structured surface with:

- tone traits as restrained chips/tokens;
- guidance as prose;
- constraints as clearer rule items.

Constraint treatment should feel more deliberate than tone tags without implying warning/error by default.

### Audience Personas

Persona cards should feel strategic, not CRM-like.

Preferred anatomy:

- label;
- concise summary;
- 2–3 decision signals;
- creator communication implication;
- detail affordance.

Use abstract/controlled iconography or subtle semantic markers if helpful. Do not introduce stock persona portraits by default; Persona meaning should not depend on fictional human imagery.

### Visual Identity

This can be the most visually expressive Brand section because real Brand assets are meaningful content.

Use:

- approved logo/marks;
- palette swatches;
- font samples where technically available;
- reference-image grid;

separate from:

- Creator Shop's derived style interpretation.

The relationship should read as:

```text
What your Brand has approved
+
How Creator Shop interprets the pattern
```

not as one blended palette/style output.

### Locations / Serviceability

Use simple geography/list structure. Avoid decorative map imagery unless a real map is useful and later screen design supports it.

## 11. Offerings visual direction

Offerings should feel more **operational and scannable** than Brand.

### Portfolio list

Use consistent Offering rows/cards with clear hierarchy:

1. image/identifier where useful;
2. name;
3. Offering type;
4. concise description;
5. lifecycle/availability state;
6. selected current commercial/destination context.

Avoid ecommerce catalogue polish that makes every Offering look like a storefront product tile, because Offerings also represent SaaS plans, healthcare services and offline experiences.

### Cross-industry flexibility

The common visual structure should tolerate:

- image-rich D2C;
- text-rich SaaS capabilities;
- trust-sensitive healthcare services;
- location-linked offline experiences.

Do not create Industry-themed color systems.

## 12. Market visual direction

Market should eventually feel **analytical but restrained**.

Current direction is intentionally shell-level because semantic contracts are incomplete.

Once supported, favor:

- comparison that answers a specific strategic question;
- concise annotated charts only where a metric is semantically defensible;
- strong explanatory text around why a signal matters;
- clear unavailable/partial local states.

Avoid:

- fake dashboards;
- generic radar charts;
- decorative percentages;
- SOV donuts without denominator authority;
- competitor-score leaderboards without frozen semantics.

## 13. Recommendations visual direction

Recommendations should be the most **decision-oriented** workspace.

### Card composition

Each card should have a clear reading arc:

```text
Recommendation
→ Why now
→ Key context
→ Supporting signal
→ Brand decision
```

Use stronger visual containment than ordinary Brand sections, but avoid oversized campaign-ad cards.

### Count behavior

1 Recommendation:
- intentional wide composition.

2:
- balanced pair if readable.

3:
- row/grid only if rationale remains legible; otherwise editorial stacking.

Never preserve empty card slots.

### No new campaign

Use a composed strategic conclusion surface with calm confidence, not a blank state illustration.

## 14. Progressive Intelligence visual language

### Learning

Visual treatment:

- low-contrast surface or open placeholder region;
- small progress/activity cue only if runtime LEARNING exists;
- clear statement of what Creator Shop is learning.

Avoid full-screen loaders/spinners once workspace content exists.

### Partial

Usually no special container. Let content density itself express partiality.

Optional helper text may explain that more detail will appear.

### Stale

Use subtle metadata/iconography scaled to consequence.

Avoid yellow warning cards for every stale value.

### Refreshing

Small `Updating` indicator in section header or metadata row while content stays visible.

### Temporary unavailable

With current content: small local notice.  
Without current content: bounded unavailable panel.

## 15. Authority visual language

### Confirmed

Possible treatment:

- small check icon + text in detail context;
- gentle semantic emphasis;
- no bright success card.

### Support-controlled

No lock badge everywhere.

In detail, use muted explanatory text + support link/action.

### Creator Shop-derived

No universal AI badge. Context/title can communicate `Creator Shop's understanding` where useful.

### Mixed

Never show a `Mixed authority` badge. Apply component-level cues only where behavior changes.

## 16. Candidate/conflict visual language

### AVAILABLE

Quiet informational treatment:

- small dot/icon/label;
- `New information to review`;
- local to affected section.

### CONFLICT

Stronger section-level callout:

- clear border/accent;
- concise explanation;
- current value visually maintained;
- one `Review` affordance if permitted.

Do not visually render the candidate as an equal competing value when raw candidate is hidden.

## 17. Imagery / illustration policy

### Real Brand assets

Use where semantically meaningful:

- logos;
- Offering images;
- approved reference imagery;
- location imagery only if supplied/authorized later.

### Generated illustration

Do not introduce decorative AI illustration as a dependency for Brand Centre.

### Empty states

Prefer elegant typography + icon + concise copy over large illustrations.

### Persona imagery

Do not default to realistic synthetic human portraits. A controlled symbolic/abstract system may be explored later if it genuinely improves scanning.

## 18. Iconography

Use established Aurora/Lucide-compatible icon language.

Icons support meaning; they do not replace text for:

- stale;
- confirmed;
- conflict;
- lifecycle;
- availability.

Avoid overusing sparkles/AI iconography.

## 19. Motion

Motion should be minimal and purposeful.

Allowed conceptual use:

- subtle refresh/activity indicator;
- disclosure transitions;
- state-content transition when learning becomes ready.

Avoid:

- perpetual scan animations;
- animated gradient backgrounds;
- celebratory motion when Intelligence simply refreshes;
- motion that suggests unavailable progress data.

Respect reduced-motion preferences.

## 20. Desktop character

Desktop should feel spacious but not empty.

Use width to create hierarchy and comparison, not to spread single short values across huge cards.

Recommended page rhythm:

- clear workspace heading;
- primary content max-width appropriate to reading;
- selective full-width strategic blocks;
- balanced repeated collections;
- restrained side-by-side relationships where semantically useful.

## 21. Mobile 390 character

Mobile should feel intentionally authored, not stacked leftovers.

Preserve:

- workspace identity;
- dominant insight;
- current values;
- primary actions;
- meaningful status.

Transform:

- multi-column collections → stacked;
- supporting metadata → secondary detail/disclosure;
- large visual collections → compact wrap/grid;
- action clusters → clear primary + progressively disclosed secondary.

No horizontal page overflow.

## 22. Content budgets for visual design

These are UX capacity recommendations, not Intelligence-output constraints.

### Overview perspective

35–70 words.

### Observation

- title: 4–10 words;
- body: 18–45 words.

### Recommendation

- headline: 5–14 words;
- why-now: 25–60 words;
- supporting context: bounded 1–3 items.

### Brand primary narrative

40–100 words visible comfortably before needing any optional long-detail expansion.

### Persona card

- label: 2–7 words typical;
- summary: 20–55 words;
- visible signals: 2–3;
- implication: 15–35 words.

### Offering summary

Description: approximately 15–45 words on list; longer detail belongs in Offering detail.

## 23. Anti-patterns

Do not:

- create a dashboard of equal cards;
- use AI/scan motifs as the visual story;
- expose raw confidence scores;
- show progress percentages without authority;
- apply warnings to normal partiality;
- use colour alone for state;
- put edit icons on every field;
- make all sections accordion-only on desktop;
- force Personas/Recommendations into horizontal carousels;
- use fake metrics for composition;
- render derived visual interpretation as approved Brand kit;
- use a globally accessible website to visually imply global serviceability;
- use one timestamp/source label for mixed-generation Objects;
- turn Recommendations into an infinite feed.

## 24. Visual acceptance criteria for later Stitch work

A future Stitch reference should pass only if:

1. the intended workspace question is visually obvious;
2. the page has a dominant hierarchy, not equal card weight;
3. progressive partial/learning states feel native, not broken;
4. approved vs interpreted visual identity is unambiguous;
5. current protected values stay primary during candidate/conflict state;
6. stale/refresh state does not erase useful content;
7. Recommendation decisions are visually stronger than routine observations;
8. one-item and low-density states look intentional;
9. desktop uses space intelligently;
10. 390px mobile is a deliberate transformation;
11. Aurora remains visibly coherent;
12. no unsupported Product/Intelligence semantics appear.

## 25. Stitch freedom after convergence

Later Stitch may interpret:

- exact sectional surfaces;
- divider/card balance;
- icon choice within approved semantics;
- whitespace rhythm;
- visual treatment of perspective/Recommendations;
- approved Brand-kit presentation;
- Persona card aesthetic;
- mobile disclosure composition.

Stitch must not change:

- Product information architecture;
- FE semantic states;
- current-vs-candidate authority;
- readiness/freshness meaning;
- action semantics;
- Offering/Market/Recommendation boundaries;
- mobile semantic parity.

No Stitch generation is authorized yet.
