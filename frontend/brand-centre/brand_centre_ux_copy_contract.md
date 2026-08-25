# Brand Centre — UX Copy Contract

**Status:** `PROPOSED_FOR_SYSTEMS_ARCHITECT_REVIEW`  
**Owner:** UI/UX Design AI Worker  
**Authority baseline:** `Piyush1087/dummy_tcs@017dbceac494f0861ec9a6bea7af3129b70fa5cb`  
**Accepted FE authority:** `agent/brand-centre-frontend-state-architecture@62f88e3722226b23b20f017a9b69a63d2ca6db99`

## 1. Purpose

Define the reusable user-facing language model for Brand Centre before exact screen copy is frozen.

This contract does not redefine Intelligence semantics, Product permissions, backend state, or individual final microcopy. It establishes how Creator Shop should speak about progressive understanding, freshness, authority, conflict, and temporary unavailability without sounding like a technical AI console.

## 2. Voice

Brand Centre copy should be:

- calm;
- specific;
- confident when grounded;
- transparent about incompleteness without sounding broken;
- strategic rather than technical;
- concise enough to support scanability;
- careful about high-consequence claims.

Prefer language about:

```text
understanding
learning
updating
current Brand information
what matters
what Creator Shop sees
what changed
what needs review
```

Avoid language about:

```text
processors
jobs
pipelines
models
providers
generations
confidence percentages
raw Evidence
AI hallucination
scan stages
```

unless a separate technical/admin surface explicitly requires it.

## 3. Core terminology

### Brand Centre

Proper product destination name.

### Creator Shop understanding

Preferred umbrella phrase for derived user-facing Intelligence where a semantic distinction is useful.

Do not label every derived field `AI-generated`.

### Confirmed

Use for Brand-confirmed values only where confirmation state helps the user understand stability or edit behavior.

Preferred pattern:

- `Confirmed by your team`
- `Confirmed`

Avoid:

- `Locked`
- `Immutable`

### Support-controlled

Do not expose the internal term `SUPPORT_CONTROLLED`.

Preferred user-facing pattern:

- `Contact support to change`
- `This information is used across your Creator Shop account. Contact support if it needs to change.`

### Stale

Avoid the word `stale` in ordinary user-facing copy unless a future Product decision explicitly prefers it.

Preferred concepts:

- `May need updating`
- `Last checked...`
- `Creator Shop is checking for changes`

### Partial

Do not use `PARTIAL` as a label by default.

Preferred concepts:

- `Creator Shop is still learning this area`
- `Based on what we know so far`
- `More detail will appear as Creator Shop learns more`

Use only when context benefits from explanation; fewer truthful fields often need no explicit partial badge.

## 4. Learning copy model

FE mapping:

```text
current = NO_CURRENT / NOT_EVALUATED
consumer readiness = NOT_READY or PARTIAL
runtimeActivity = LEARNING only when backend supplies it
```

### Copy objective

Communicate progress without implying a failed state or exposing execution mechanics.

### Pattern

**Heading**
Short statement about the area being learned.

**Support**
One sentence explaining the value that will appear or why the area matters.

Examples:

- `Creator Shop is still learning your audience.`
- `We’ll show the audience groups that matter most for creator strategy as they become grounded enough to use.`
- `We’re still building a clearer picture of where this Brand can serve customers.`

Do not promise timing unless Product/runtime authority supports it.

Do not invent progress percentages.

## 5. Partial-content copy model

FE mapping:

```text
current may be VALUE
consumer readiness = PARTIAL
```

### Default

Prefer **no explicit partial label** when the available content can simply render truthfully.

Use explanatory copy only if the absence could otherwise be misinterpreted.

Examples:

- `Based on what Creator Shop understands so far.`
- `More detail may appear as your Brand information develops.`

Avoid:

- `Incomplete data`
- `Only 43% complete`
- `Missing fields`

unless Product explicitly defines such completeness semantics.

## 6. Empty collection copy model

FE mapping:

```text
current = VALUE
value = []
```

Empty collection is an evaluated result, not loading.

### Audience

If zero active Personas is a legitimate current state:

- `No active Audience Personas yet.`
- supporting explanation may say Creator Shop will surface Personas once there is enough grounded context.

### Offerings

If no canonical Offerings exist:

- `No Offerings have been added yet.`
- supporting explanation should describe the purpose of Offerings without implying website extraction has failed.

### Recommendations

Do not use generic empty-state copy when `NO NEW CAMPAIGN` is the strategic output. Use the dedicated strategic conclusion pattern instead.

## 7. Explicit-null copy model

FE mapping:

```text
current = EXPLICIT_NULL
```

Meaning: the semantic was evaluated but no defensible value is asserted.

Default behavior is omission where the field is optional.

If the absence itself must be visible:

- `Creator Shop doesn’t have enough grounded information to state this yet.`

Do not say:

- `Error`
- `Failed to generate`
- `Unknown` when the contract means explicitly no defensible value.

## 8. No-current copy model

FE mapping:

```text
current = NO_CURRENT
```

Do not imply an evaluated empty result.

When learning is active:

- use learning copy.

When no learning activity is supplied:

- use a neutral `not established yet` concept if the section must be visible.

Examples:

- `Not established yet`
- `Creator Shop hasn’t established this yet.`

Use sparingly; many optional sections can simply omit unavailable detail.

## 9. Freshness copy model

### CURRENT

No copy required normally.

### UNKNOWN

No error language. Usually no visible freshness copy unless user context specifically needs it.

### STALE

Consequence-scaled options:

**Low consequence**
No visible copy.

**Useful metadata**
- `May need updating`
- `Last checked [date]`

**Decision-relevant**
- `This may have changed since Creator Shop last checked.`

High-priority warning requires explicit Product/runtime authority; STALE alone is insufficient.

## 10. Refreshing copy model

FE mapping:

```text
current value retained
freshness/runtimeActivity = REFRESHING
```

Preferred concise labels:

- `Updating`
- `Checking for changes`
- `Refreshing recommendations`

Avoid:

- `Regenerating AI output`
- `Running processor`
- `Scanning again`

Current content remains visually and linguistically valid while update occurs unless backend says otherwise.

## 11. Failed refresh / temporary unavailability

Execution failure is not current result readiness.

### Current data exists

Preferred pattern:

**Short status**
- `Update temporarily unavailable`

**Support**
- `Your current Brand information is still shown.`

Alternative:
- `Creator Shop couldn’t check for updates right now. Your current information remains available.`

Do not say the current Brand understanding `failed`.

### No current data exists

Preferred pattern:

- `This information is temporarily unavailable.`
- `Creator Shop couldn’t complete this update right now. Try again later.`

Only expose retry CTA if backend/Product supplies an authorized retry action.

## 12. Authority copy model

### Creator Shop-derived

Usually implicit through context.

Where useful:

- `Creator Shop’s understanding`
- `How Creator Shop sees your Brand`

Avoid repeated `AI-generated` tags.

### Observed

Usually no label in workspace mode.

Detail may use source-oriented copy only if Product wants provenance, e.g. `Observed on your website`, but exact provenance visibility is not frozen here.

### Brand-confirmed

- `Confirmed`
- `Confirmed by your team`

Use in detail or conflict contexts, not as a badge on every field.

### Support-controlled

- `Contact support to change`

No `locked` language by default.

### Mixed authority

Do not expose `Mixed authority` as user copy. Apply component-level language only where behavior differs.

## 13. Candidate / discrepancy copy model

### AVAILABLE — quiet

Preferred patterns:

- `Creator Shop found something new to review.`
- `New information may affect this.`
- `Review update`

Current value remains primary.

### CONFLICT — material

Preferred patterns:

- `New information differs from your confirmed Brand information.`
- `Creator Shop found a difference that may need your review.`

If current is confirmed:

- `Your confirmed value remains unchanged.`

If raw candidate is hidden, do not tease or reveal its content in supporting copy.

### Resolved

No persistent celebratory copy is necessary. Remove active conflict emphasis after authoritative resolution.

## 14. Recommendation copy architecture

Each recommendation should answer in this order:

1. **What Creator Shop recommends**
2. **Why it matters now**
3. **What context supports it**
4. **What the Brand needs to decide**

### Headline

Action-oriented, specific, not clickbait.

Avoid:

- `AI Recommendation #1`
- `Opportunity score: 91`
- generic `Boost engagement` without context.

### Why-now

1–3 concise sentences. Should explain strategic timing/context, not reveal hidden reasoning chain.

### Supporting context

Use bounded natural-language evidence/Observation summaries, not raw Evidence IDs.

### Accept

Button copy may remain `Accept` if surrounding context makes the consequence clear.

Supporting consequence should clarify that acceptance creates or opens a Campaign Draft, not publishes a Campaign.

### No new campaign

Preferred framing:

**Headline direction**
- `No new Campaign is the strongest move right now.`

**Support direction**
Explain the grounded reason supplied by Recommendation Intelligence, such as finishing current work, insufficient evidence, or portfolio already covering the strongest opportunity.

Do not use:

- `No recommendations found`
- `Nothing to show`

## 15. Overview copy architecture

### Creator Shop perspective

Target: 35–70 words depending complexity.

Purpose: one coherent strategic summary, not an executive dashboard paragraph dump.

### Observation summary

Target:

- title: 4–10 words;
- explanation: 18–45 words.

### Recommendation summary

- headline: 5–14 words;
- why-now summary: 20–50 words.

These are UX capacity recommendations, not semantic output constraints.

## 16. Brand copy architecture

### Brand description / positioning / value proposition

Render the semantic values substantially as supplied; do not have UI copy paraphrase them into new Brand truth.

Section helper copy can explain purpose, but should not reinterpret content.

### Values / personality

Prefer short semantic labels. Do not add generic adjectives as filler.

### Differentiation & proof

Visual/copy distinction should make it clear that:

- differentiator = strategic meaning;
- proof = supporting factual basis where present.

Suggested labels:

- `What sets the Brand apart`
- `What supports this`

Exact final wording remains open to visual/UX review.

### Communication

Suggested user-facing grouping terms:

- `How your Brand communicates`
- `Tone`
- `Guidance`
- `Communication boundaries`

Avoid internal object name `communication_profile`.

## 17. Audience copy architecture

Persona card:

- label: use canonical Persona label;
- summary: 20–55 words recommended visible budget;
- decision signals: short phrases or one-line bullets;
- creator communication implication: 15–35 words when available.

Do not add age/gender/income labels unless canonical Persona semantics and policy supply them.

Suggested section helper:

> The audience groups Creator Shop currently believes matter most for creator strategy.

Use only if helper text adds value; not mandatory.

## 18. Visual Identity copy architecture

User-facing distinction:

**Approved Brand kit**
- `Your Brand assets`
- `Approved Brand look`

**Derived interpretation**
- `How Creator Shop reads your visual style`
- `Visual patterns Creator Shop sees`

Avoid internal term `visual_style_profile`.

For hard constraints, use language such as:

- `Brand requirement`
- `Confirmed visual rule`

only where Brand-confirmed authority is explicit.

## 19. Serviceability copy architecture

Preferred user-facing term:

- `Where you can serve customers`

Alternative depending Industry:

- `Where this Brand is available`

Do not call it:

- `Audience geography`
- `Target markets` unless semantics specifically support target-market meaning.

Partial state:

- `Creator Shop has established some of your serviceable coverage and is still learning the rest.`

Avoid implying every Offering is available across the whole Brand envelope when coverage is heterogeneous.

## 20. Offerings copy architecture

Use Product term `Offering` at workspace level.

Industry-specific kind labels can use canonical Product vocabulary:

- D2C: Product / Collection / Offer;
- SaaS/AI: Product / Plan / Feature or Capability / Offer;
- Healthcare: Treatment or Service / Package or Program / Offer;
- Offline: Service / Experience / Package / Offer.

Do not call canonical Offerings `Campaign Assets`.

## 21. Market copy architecture

Because field-level Market semantics remain incomplete, helper copy should stay generic and truthful.

Possible shell helper:

> See how your Brand is showing up across its own content and the market context Creator Shop can currently support.

Do not promise competitor or social coverage when unavailable.

Do not use `Share of Voice` unless the future contract provides a defensible scope/denominator and Product accepts the presentation.

## 22. CTA hierarchy

### Workspace navigation

Links, not primary buttons.

### Read-detail navigation

`View details`, `See more`, contextual labels.

### Mutation/decision actions

Primary button reserved for a consequential current decision:

- Accept Recommendation;
- Save confirmed edit;
- other Product-authorized high-value action.

Do not use bright primary buttons for every `View details` link.

## 23. Accessibility copy rules

- Status labels must make sense without colour.
- Icon-only candidate/stale/confirmed status is insufficient.
- Live-region messages should be concise and not repeat on polling.
- Buttons must describe the action, not only the state (`Review update`, not `New`).
- Hidden candidate content must not leak through accessible labels/DOM text when Product says it is not visible.
- `Not ready`/learning copy should not imply user failure.

## 24. UX ↔ FE copy mapping

| FE semantic | User-facing copy direction |
|---|---|
| `VALUE + READY` | no state copy normally |
| `VALUE + PARTIAL` | render content; optional `Based on what we know so far` |
| `NO_CURRENT/NOT_EVALUATED + LEARNING` | `Creator Shop is still learning...` |
| `NO_CURRENT` without activity | `Not established yet` only when section must remain visible |
| `EXPLICIT_NULL` | omit or `Not enough grounded information yet` |
| `VALUE=[]` | explicit semantic empty copy if Product concept benefits from it |
| `STALE` | consequence-scaled `May need updating` |
| `REFRESHING` | `Updating` / `Checking for changes` |
| temporary unavailable + current | `Update temporarily unavailable. Current information is still shown.` |
| temporary unavailable + no current | scoped temporarily unavailable copy |
| `BRAND_CONFIRMED` | `Confirmed` where useful |
| `SUPPORT_CONTROLLED` | `Contact support to change` |
| candidate `AVAILABLE` | `New information to review` |
| candidate `CONFLICT` | `New information differs from your confirmed Brand information` |

## 25. Deferred final-copy decisions

This contract intentionally does not freeze:

- exact workspace subtitles;
- every empty-state sentence;
- exact candidate/conflict CTA labels;
- exact support-request copy;
- exact Recommendation headlines/rationales, which are runtime semantic output;
- any copy requiring unresolved Market semantics;
- permission-dependent edit/manage labels.

These should be finalized during screen-contract/Stitch preparation after Systems Architect convergence review.
