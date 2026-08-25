# Brand Centre — UX Architecture

**Status:** `PROPOSED_FOR_SYSTEMS_ARCHITECT_REVIEW`  
**Owner:** UI/UX Design AI Worker  
**Authority baseline:** `Piyush1087/dummy_tcs@017dbceac494f0861ec9a6bea7af3129b70fa5cb`  
**Accepted FE authority consumed:** `agent/brand-centre-frontend-state-architecture@62f88e3722226b23b20f017a9b69a63d2ca6db99`

## 1. Experience objective

Brand Centre should feel like a **living strategic profile** maintained by Creator Shop.

The user should leave with the impression:

> Creator Shop understands my Brand, keeps that understanding current, and turns it into useful creator-marketing direction without asking me to manage an AI pipeline.

The experience should reinforce three beliefs:

1. **Recognition** — Creator Shop knows what this Brand is and what matters about it.
2. **Progressive depth** — some areas may still be learning, but useful understanding already exists.
3. **Actionable confidence** — the Brand is not browsing raw AI output; it is reviewing a usable operating picture and a small number of consequential decisions.

Brand Centre must not resemble:

- an Intelligence debugger;
- a scan-result archive;
- a CMS with edit affordances everywhere;
- a dense analytics dashboard;
- a stream of AI cards with equal visual weight;
- a settings/admin area.

## 2. Canonical information architecture

Preserve exactly:

```text
Brand Centre
├── Overview
├── Brand
├── Offerings
├── Market
└── Recommendations
```

Audience remains inside Brand. Observations are not a standalone workspace. Campaign Assets remain outside Brand Centre. Analytics / Performance remains a separate destination.

### Workspace navigation principle

The five top-level destinations should feel like **perspectives on one Brand operating picture**, not unrelated applications.

Recommended navigation character:

- persistent secondary Brand Centre navigation within the authenticated shell;
- compact enough to keep the content dominant;
- route-backed so deep links/detail return paths remain stable;
- mobile converts to a compact workspace switcher or horizontally scrollable tab row only if it can remain accessible and does not create page overflow; a menu/select-style workspace switcher is acceptable if tab density is poor.

Exact navigation component is a later screen-design decision; semantics are fixed.

## 3. Experience hierarchy across Brand Centre

The module should have three levels of importance.

### Level A — What matters now

Primarily Overview and Recommendations.

These surfaces should emphasize:

- one dominant perspective or conclusion;
- a small number of material Observations;
- a small number of Recommendations needing attention;
- relevant readiness gaps only when they materially limit a decision.

### Level B — What Creator Shop understands

Primarily Brand, Offerings and Market.

These surfaces should feel stable, inspectable and progressively richer.

### Level C — Detail / correction / management

Focused detail screens where the Brand may later:

- edit;
- manage;
- confirm;
- review a suggestion;
- request support change.

Do not put Level C controls on every Level A/B card.

## 4. Progressive Intelligence UX model

Progressive Intelligence is a normal product condition.

### 4.1 Nothing established yet

FE mapping:

```text
current = NO_CURRENT or NOT_EVALUATED
consumerReadiness = NOT_READY
runtimeActivity = LEARNING only when backend supplies it
```

UX behavior:

- preserve the workspace structure;
- use one quiet learning state in the relevant section;
- explain what will become useful, not which processor is running;
- do not fill the page with skeletons after a successful response;
- do not globally block sibling sections that already have usable content.

### 4.2 First useful understanding appears

FE mapping:

```text
current = VALUE
consumerReadiness = PARTIAL or READY
resultReadiness = PARTIAL or READY
```

UX behavior:

- immediately replace learning placeholders with grounded content;
- do not retain empty placeholder slots for expected density;
- partial content should look intentional, not broken.

### 4.3 One section partial while others mature

UX behavior:

- mature sections remain visually primary;
- partial state is expressed locally;
- avoid page-level warning banners;
- optional missing fields collapse naturally.

### 4.4 New Evidence / refresh begins

FE mapping:

```text
current = VALUE
freshness = CURRENT / STALE / UNKNOWN
runtimeActivity = REFRESHING when supplied
```

UX behavior:

- retain existing content;
- show a small `Updating` treatment where useful;
- never replace current content with loading skeletons solely because reevaluation is underway.

### 4.5 Refresh fails but current value remains usable

FE mapping:

```text
current remains VALUE
resultReadiness remains READY/PARTIAL/NOT_READY as applicable
freshness remains CURRENT/STALE/UNKNOWN for current state
runtimeActivity may = TEMPORARILY_UNAVAILABLE
```

UX behavior:

- keep the value visible;
- show a restrained temporary-update issue only when materially useful;
- do not imply that the Intelligence value itself has failed.

### 4.6 Candidate / discrepancy appears

FE mapping:

```text
candidate.status = AVAILABLE or CONFLICT
currentPreserved = true
rawCandidateVisible = false by default
```

UX behavior:

- current protected value remains visually primary;
- `AVAILABLE` is a quiet review affordance;
- `CONFLICT` is more prominent only when the difference matters to downstream use;
- do not expose raw candidate content unless later Product authority permits it.

### 4.7 Brand confirms/corrects a value

The UX may show confirmation as a state distinction, but the mutation itself remains Product-permission dependent.

Confirmed state should feel **stable**, not locked-down. Avoid a wall of lock icons.

## 5. Overview UX

### User question

> What materially matters about my Brand right now?

### Primary content hierarchy

1. **Creator Shop perspective** — one concise synthesis of what is most strategically important now, when available.
2. **Recommendations requiring attention** — normally 1–3, not an infinite feed.
3. **Material Observations** — only grounded and material conclusions surfaced by owning Intelligence.
4. **Operating snapshot** — selected Brand / Offering / Market context that explains the perspective.
5. **Meaningful maturity gaps** — only where they materially constrain understanding or recommendation quality.

### What should not dominate

- raw readiness meters;
- counts of processed pages;
- full Brand profile duplication;
- all Offerings equally;
- generic KPI cards;
- raw Performance analytics.

### Progressive states

**Useful mixed maturity:** perspective/recommendation visible; one or more supporting sections partial.

**Early/partial:** show the strongest useful Brand context first, then a small `Creator Shop is still learning...` block for areas that are not ready.

**No recommendation:** valid; Overview should still provide Brand/Market perspective rather than look empty.

### Cross-navigation

Every composed item should link to its owning domain:

- Brand insight → Brand;
- Offering context → Offering detail;
- Market insight → Market;
- Recommendation → Recommendations;
- Performance evidence → Analytics where Product supports that route.

Overview never becomes a second editable source.

## 6. Brand UX

### User question

> What does Creator Shop understand about my Brand, who it needs to influence, how it communicates, and where it can operate?

### Recommended hierarchy

```text
Brand
├── Identity header / Brand details
├── Brand story & strategy
│   ├── Description
│   ├── Positioning
│   ├── Value proposition
│   ├── Differentiation & proof
│   └── Values / personality
├── Communication
│   ├── Tone traits
│   ├── Guidance
│   └── Communication constraints
├── Audience Personas
├── Visual Identity
│   ├── Approved Brand kit
│   └── Creator Shop visual interpretation
├── Locations [conditional]
└── Serviceability [when meaningful]
```

This is a user-facing hierarchy, not a new Intelligence topology.

### 6.1 Identity header

Purpose: establish confidence that the user is looking at the correct Brand.

Show the applicable subset of:

- primary logo;
- Brand name;
- website/domain;
- confirmed Industry/category;
- primary geography;
- Instagram/connection status where relevant.

Support-controlled facts look normal. A contextual support-change path belongs in detail, not as lock clutter in the header.

### 6.2 Brand story & strategy

The first meaningful Brand Intelligence section should feel like Creator Shop's coherent understanding, not seven independent AI outputs.

Recommended composition:

- one dominant description/positioning region;
- value proposition nearby;
- differentiation + proof as a structured supporting region;
- values/personality as lighter supporting traits.

Do not force every scalar into an equal card.

Partiality rules:

- missing description does not suppress positioning/value proposition;
- null/absent values collapse without blank slots;
- proof may be absent even when differentiation is usable;
- stale proof may be indicated independently when consequence warrants it.

### 6.3 Communication

Treat tone, guidance and constraints as one coherent communication area, but allow component-level state differences.

Visual priority:

1. tone / communication character;
2. useful guidance;
3. explicit constraints, which should receive stronger treatment because they influence creator communication safety.

Primary language may appear contextually if useful; it should not be presented as a prominent profile KPI.

### 6.4 Audience Personas

Normal target: 2–3 active Personas, but UX must support 0/1/2/3 without filler.

Persona card anatomy:

- Persona label;
- one-sentence summary;
- 2–3 most decision-relevant signals selected from motivations / barriers / trust needs;
- concise creator-communication implication when available;
- detail affordance.

Workspace display:

- desktop: up to 3 visible at once when content lengths allow;
- tablet: 2-column or stacked depending width/content;
- mobile: full-width stacked cards, no carousel as canonical pattern.

Partial Persona:

- show grounded fields only;
- do not expose empty headings;
- do not invent demographics for visual richness.

### 6.5 Visual Identity

Present two concepts together but distinctly:

**Approved Brand kit**
- logo/marks;
- approved palette;
- approved fonts;
- reference imagery.

**How Creator Shop reads your visual style**
- style summary;
- recurring traits;
- imagery/graphic tendencies;
- explicit constraints only where authority supports them.

The design must not imply:

```text
frequent observed colour = approved colour
observed font = approved font
derived trait = hard constraint
```

Use wording and visual grouping rather than technical authority badges to preserve this distinction.

### 6.6 Locations and Serviceability

Locations are business entities; Serviceability is interpreted reach/availability context.

Recommended UX:

- Locations appear as a dedicated subsection only where applicable;
- Serviceability sits nearby but is visually framed as `Where this Brand can currently serve customers` rather than `Locations`;
- partial Serviceability should show only supported coverage;
- never borrow Audience geography or primary country as fallback.

## 7. Offerings UX

### User question

> What does this Brand currently sell/provide, and what does Creator Shop know well enough to use in creator marketing?

### Primary experience

```text
portfolio overview
→ clean Offering list / groups
→ Offering detail
→ edit / pause / manage on detail
```

### Portfolio list anatomy

Each Offering summary should prioritize:

- name;
- type/kind;
- image where applicable;
- concise description;
- current lifecycle state;
- selected current price/destination context where useful;
- a lightweight completeness/learning cue only if it affects usability.

Do not display creator Brief fields on the list.

### Grouping

Use industry-aware grouping labels only when Product/application data supplies them. Do not create four unrelated workspace layouts.

### Empty / early state

If there are no canonical Offerings:

- show a truthful empty state;
- explain that Offerings are what Creator Shop can later use for creator strategy/Campaign planning;
- future `Add Offering` affordance is `PRODUCT_PERMISSION_PENDING` unless Product authority has explicitly enabled the action in the implementation phase.

If canonical Offerings exist but Intelligence enrichment is partial:

- show the Offerings normally;
- let enrichment mature around them;
- never downgrade canonical catalogue truth to a loading state.

### AI-discovered candidate boundary

Do not visually promote website extraction into confirmed Offering truth. If Product later exposes Offering candidates, they require a distinct review pattern rather than silently appearing in the canonical list.

## 8. Market UX

### User question

> How is my Brand showing up in creator/content terms, and what external context matters?

### Scope rule

Market semantics are not yet complete enough to define detailed metrics/cards. Freeze only the shell.

### Supported shell

Potential regions, shown only when owning contracts support them:

- own Brand/website perspective;
- own Instagram communication/content behavior;
- interpreted Performance learning;
- competitor enrichment;
- material Observations.

### Early/not-established state

Use a bounded explanatory state rather than placeholder charts or fake metrics.

### Competitor enrichment unavailable

Base Market content may remain useful. Competitor unavailability is local and should not turn Market into an error screen.

### Product/Intelligence decision gaps

Any detailed Market visualization requiring unfrozen semantics—especially generic SOV, competitive scoring, base-0 website-only conclusions, or unsupported Meta acquisition—is `PRODUCT_OR_INTELLIGENCE_DECISION_REQUIRED`.

## 9. Recommendations UX

### User question

> What should I consider doing next with creators?

### Experience character

Recommendations should feel:

- few;
- consequential;
- grounded;
- explainable;
- action-oriented.

They must not feel like an endless generative advice feed.

### Card hierarchy

Each Recommendation should reserve space for:

1. **Strategic action / headline** — what Creator Shop recommends.
2. **Why this matters now** — concise rationale.
3. **Key context** — Offering / audience / timing / objective / portfolio context when supplied by the later Creator Strategy contract.
4. **Supporting Observation/evidence summary** — bounded, not a raw Evidence dump.
5. **Recommended investment/timing** — only when contract-supported.
6. **Brand decision required** — clear primary decision.

### Actions

Product-authorized action vocabulary already includes:

- Accept;
- Adjust;
- Not now;
- Not for us;
- Refresh recommendations.

UX may design these patterns, but exact mutation permissions/API behavior remain downstream.

Accept must never look like `Launch campaign`; it leads to a Campaign Draft.

### No recommendation

`NO NEW CAMPAIGN` is a first-class valid state.

It should feel like a considered strategic conclusion, not an empty/error screen.

### Refresh

During reevaluation, retain current recommendation content with a subtle `Updating` treatment unless backend authority says it is no longer safe/current.

## 10. Authority and editability presentation

Do not put metadata badges everywhere.

### Observed / Creator Shop-derived

Normally no badge required in read mode. Use contextual language such as `Creator Shop's understanding` only where distinction helps comprehension.

### Confirmed

Use a restrained confirmation treatment in detail contexts, e.g. a checkmark + `Confirmed by your team`, not a permanent bright badge on every line.

### Support-controlled

Display as ordinary stable truth. Detail may expose `Contact support to change`.

### Mixed authority

Do not label the whole section `mixed`. Surface state only at components where it changes behavior.

### Interaction classification

Reusable patterns:

- Edit → `UX_PATTERN_READY`, permission per field/object `PRODUCT_PERMISSION_PENDING`.
- Manage collection → `UX_PATTERN_READY`, permission `PRODUCT_PERMISSION_PENDING` where not already Product-authorized.
- Confirm → `UX_PATTERN_READY`, exact eligibility `PRODUCT_PERMISSION_PENDING`.
- Review suggestion → `UX_PATTERN_READY`, candidate visibility/action policy `PRODUCT_PERMISSION_PENDING`.
- Request support change → `UX_PATTERN_READY`, exact support workflow downstream.

## 11. Candidate / conflict UX

### Quiet discrepancy available

Use when candidate status is `AVAILABLE` and no urgent downstream risk is known.

Pattern:

- small inline indicator near affected detail/section;
- copy such as `Creator Shop found something new to review`;
- current value remains visually primary.

### Material conflict

Use when backend/Product classifies the difference as important enough to require attention.

Pattern:

- section-level callout, not global banner unless cross-workspace consequence is explicit;
- current protected value remains visible;
- explain that new information differs from current Brand information;
- do not show candidate value if `rawCandidateVisible=false`.

### Suggestion available but hidden/detail-gated

Show a review affordance without revealing the candidate itself.

### Resolved/dismissed

Remove active conflict emphasis; history need not remain visible on normal workspace unless Product later requires it.

## 12. Stale and refresh hierarchy

Staleness should be presented according to consequence, not mechanically.

### Invisible

Use when stale metadata does not materially change user interpretation/action.

### Subtle metadata

Small `Last checked...` / `May need updating` style treatment in detail views.

### Inline indicator

Use when one field/item is stale and could affect a decision.

### Section callout

Use when several visible components are stale or a section is under active reevaluation.

### High-priority warning

Reserve for downstream Product/runtime authority indicating a material action should not rely on the current state. Frontend/UX must not infer this merely from `STALE`.

Refresh is non-blocking whenever usable current data exists.

## 13. Content density principles

### Overview

Low-to-medium density. One dominant thought; bounded supporting decisions.

### Brand

Medium density with editorial hierarchy. Avoid equal-card grids for every semantic.

### Offerings

Medium operational density. Scannable list first; depth in detail.

### Market

Medium analytical density, but only once semantic contracts exist. Avoid decorative charts.

### Recommendations

Low density. 1–3 consequential cards with stronger narrative hierarchy.

## 14. UX ↔ FE semantic mapping

| UX state | Accepted FE mapping | UX rule |
|---|---|---|
| ready | `current=VALUE`, consumer `READY`, result `READY/PARTIAL`, usable freshness | render content normally |
| partial | `VALUE` or bounded absent components + consumer `PARTIAL` | show grounded content; omit filler |
| learning | `NO_CURRENT/NOT_EVALUATED` + consumer `NOT_READY/PARTIAL`; `runtimeActivity=LEARNING` only when supplied | quiet local learning state |
| stale | `VALUE + freshness=STALE` | retain value; consequence-based indicator |
| refreshing | existing current + `REFRESHING` freshness/activity | retain value; non-blocking Updating treatment |
| temporary unavailable with current | current preserved + safe runtime/error metadata | retain content; bounded update issue |
| temporary unavailable without current | `NO_CURRENT/NOT_EVALUATED`, consumer may `NOT_READY`, runtime `TEMPORARILY_UNAVAILABLE` | local unavailable state, not fabricated content |
| confirmed | authority `BRAND_CONFIRMED` | restrained confirmation treatment where useful |
| protected | authority `SUPPORT_CONTROLLED` / editability support-controlled | ordinary stable value + contextual support path |
| candidate available | candidate `AVAILABLE`, current preserved | quiet review affordance |
| conflict | candidate `CONFLICT`, current preserved | stronger local callout; no silent replacement |
| empty collection | `current=VALUE` with `[]` | intentional empty state or omit optional subsection |
| explicit null | `EXPLICIT_NULL` | omit optional content or explain insufficient grounded info |
| no current | `NO_CURRENT` | learning/not-ready depending runtime hint; never `empty` |
| execution failure | not a result-readiness value | runtime/error metadata only; do not erase current state |

## 15. Screen-family strategy

Do not create one screen per combinatorial state.

Canonical families for later visual design:

1. Overview — useful mixed maturity
2. Overview — early / partial
3. Brand — mature mixed authority
4. Brand — early / partial
5. Brand detail — edit/manage pattern
6. Brand — suggestion/conflict pattern
7. Offerings — portfolio/list
8. Offerings — empty/learning
9. Offering detail — populated
10. Market — available shell
11. Market — not-yet-established shell
12. Recommendations — useful recommendations
13. Recommendations — no new campaign

Mobile variants are needed where layout materially transforms; exact Stitch inventory waits for convergence review.

## 16. Cross-navigation principles

- Overview → owning workspace/detail.
- Brand → Persona / visual / Brand Identity / Location detail.
- Offerings → Offering detail.
- Market → owning Brand/Offering/Analytics context where Product supports it.
- Recommendations → Recommendation detail/decision and, after accepted action, Campaign Draft.
- Back navigation must preserve workspace context and scroll position where practical.

## 17. Product/Intelligence dependencies

No FE convergence conflict was found.

The following remain explicit gaps rather than UX inventions:

1. exact field/object edit permissions;
2. candidate raw-value visibility;
3. candidate accept/reject permissions and resolution lifecycle;
4. Serviceability Brand confirmation/edit authority;
5. final Market output semantics and website-only base-0 policy;
6. final Observation detail contract;
7. final Creator Strategy Recommendation output contract;
8. exact role/permission model for Brand Centre mutations;
9. high-consequence stale/conflict escalation policy.

Where these affect later screens, use `PRODUCT_PERMISSION_PENDING` or `PRODUCT_OR_INTELLIGENCE_DECISION_REQUIRED`.

## 18. Acceptance criteria for convergence

This UX architecture is ready for convergence review when Systems Architect confirms that:

- no FE semantic was redefined;
- progressive maturity remains local/non-blocking;
- Brand hierarchy is user-facing rather than topology-driven;
- Visual canonical-vs-derived distinction remains clear;
- Serviceability is not replaced by other geography;
- Market/Recommendations remain bounded to frozen semantics;
- candidate UX works without raw candidate visibility;
- desktop/mobile can share semantic parity;
- no Stitch or production implementation has begun.
