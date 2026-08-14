# 03F — Create Campaign Stitch Handoff Map

**Status:** Review draft 0.1  
**Audience:** Product, UX, Codex, and authorized Stitch operators  
**Scope:** Manual Create / Resume Campaign only  
**Parent authorities:** `03B — Create Campaign UX Authority` and `03D — Create Campaign State Matrix`  
**Purpose:** Define exactly what Stitch generates, in what order, from which context, with which parent lineage and review gates  
**Last material update:** 14 August 2026

## 1. Active handoff boundary

This Handoff Map activates only:

```text
Create Campaign
├── Campaign Strategy
├── Creator Strategy
└── Commercial Strategy
```

It does not authorize generation of:

- Campaign List;
- Campaign Page or Workspace;
- Campaign Assets or Product setup;
- Briefs or Deliverables;
- Prospects/Discovery;
- Applicants;
- Collaborations;
- Reporting;
- AI-recommended Campaign acceptance.

Shared Campaign context may ground the retained Stitch project, but provisional Campaign Page material is not screen-generation authority.

## 2. Stitch project identity

Use one retained module project:

```text
Creator Shop — Campaign
```

Before creating it, Codex must search/list available Stitch projects and check the Campaign Artifact Registry.

- If the retained Campaign project exists, validate and reuse its stable ID.
- If it does not exist, create it once.
- Do not create one project per wizard step or viewport.
- When Campaign Page later completes Phase G, continue in this same project unless deliberate isolation is approved.

## 3. Handoff goals

The Stitch exercise must produce:

1. one coherent Create Campaign visual system;
2. three authoritative desktop step designs;
3. controlled state adaptations rather than unrelated redesigns;
4. a mobile composition designed for real browser height and the existing shell;
5. reusable form, selection, Summary, status, validation, and Persistent Action patterns;
6. stable project/screen identities and interactive preview links;
7. export/code artifacts retained for later reference without treating them as production implementation authority.

## 4. Context strategy

### 4.1 Ground once, then specialize

Use three context layers:

```text
Layer 1 — Platform grounding
Layer 2 — Campaign / Create Campaign grounding
Layer 3 — Focused screen execution
```

Do not upload all documents for every prompt.

### 4.2 Platform grounding packet

Attach:

- `01A — Creator Shop Platform Context`;
- `01B — Aurora 5.0 Stitch Context`;
- `01C — Application Shell and Viewport Context`;
- `01D — Global Stitch Design Instructions`.

Do not attach:

- Codex execution runbook;
- engineering standards;
- implementation code;
- complete Phase G source contracts;
- Campaign Page historical prompts.

### 4.3 Create Campaign grounding packet

Attach a compact task package assembled from:

- relevant Campaign Manifest scope/ownership extract;
- Create Campaign section of the Surface Authority Matrix;
- `03B — Create Campaign UX Authority`;
- `03D — Create Campaign State Matrix` summary;
- later Create Campaign Copy Contract, when approved;
- prohibited legacy list;
- representative Campaign data manifest.

Codex should create a focused Stitch-facing extract rather than upload 03B and 03D in full when the same authority can be communicated more compactly without loss.

### 4.4 Screen execution packet

For each screen prompt, provide only:

- target and acceptance criteria from its Screen Brief;
- approved parent screen/project identity where applicable;
- relevant step/state excerpt;
- target viewport assumptions;
- representative data needed for that screen;
- exact invariants that must remain unchanged.

## 5. Grounding sequence

## G0 — Platform grounding

**Goal:** Establish Creator Shop, Aurora 5.0, Content Area, shell geometry, viewport assumptions, and generation behavior.

**UI generation:** None.

**Required Stitch response:** Concise confirmation of:

1. Creator Shop's platform role and Brand-side context;
2. Aurora 5.0 as literal visual authority;
3. Satoshi and Source Sans 3 typography;
4. existing global shell and Content Area boundary;
5. desktop/mobile reserved geometry;
6. realistic mobile-browser viewport assumptions;
7. responsibility to report ambiguity instead of inventing product behavior;
8. project/screen identity and preview retrieval expectations.

**Gate:** Codex validates the response before module grounding.

## G1 — Campaign / Create Campaign grounding

**Goal:** Establish the active Campaign boundary and Create Campaign architecture.

**UI generation:** None.

**Required Stitch response:** Concise confirmation of:

1. Campaign is one module using one retained project;
2. current screen generation is Create Campaign only;
3. the three steps and their order;
4. Campaign creation versus later execution setup;
5. Deliverables belong to Briefs, not Create Campaign;
6. canonical numeric follower range;
7. one Negotiable starting offer;
8. system-derived KPI and currency;
9. Draft/autosave/publish distinction;
10. Content Area-only design;
11. prohibited legacy concepts;
12. unresolved decisions listed by Codex.

**Gate:** Codex rejects grounding that revives Campaign Page generation, Deliverables, follower tiers, dual Negotiable fees, speculative metrics, or a new shell.

## 6. Representative Campaign data

Use one coherent Campaign across every generated screen so the designs feel like one workflow rather than disconnected examples.

Recommended representative frame:

```text
Brand country: India
Campaign currency: INR

Campaign Name:
Summer Collection — Creator Seeding

Publishing Schedule:
Scheduled
Publish From: 15 September 2026
Publish Until: 15 October 2026

Objective:
Pulse — Awareness & Reach

Platform:
Instagram

Visibility:
Eligible Creators Only

Creator Archetypes:
Beauty Educator
Skincare Reviewer
Lifestyle Storyteller

Follower Range:
20,000–250,000

Audience:
Female
24–34
India; Mumbai, Maharashtra

Affinities:
Skincare
Beauty & Cosmetics
Wellness

Brand Support:
Yes — Product
Estimated Value: ₹1,299

Fixed Creator Payout:
₹25,000

Negotiable adaptation:
Payout Starting From ₹20,000

Total Campaign Budget:
₹5,00,000

Advance:
25%

Payout Terms:
Net 15
```

The Screen Brief must provide approved KPI values from the canonical KPI framework. Stitch must not invent them.

## 7. Viewport assumptions

### Desktop representative

```text
Browser viewport: 1440 × 900
Global Header: 72px
Collapsed Sidebar: 80px
Expanded Sidebar: 240px when the reference requires it
Stitch target: Content Area only
```

Use the shell context to calculate available space. Do not render a second global Header or Sidebar inside the designed surface.

### Mobile representative

```text
Viewport width: 390px
Target visible browser content height: approximately 620–680px
Global Header: 56px
Global Bottom Navigation: 64px plus safe area
Stitch target: Content Area between reserved shell regions
```

### Mobile stress

```text
Width: 360px
Target visible browser content height: approximately 560–600px
Keyboard-open state: required for a long-form representative
```

Do not reduce Aurora 5.0's canonical Header height in this exercise.

## 8. Screen lineage

```text
Desktop Step 1 — visual parent
├── Step 1 validation/save adaptation
├── Mobile Step 1 adaptation
└── shared wizard shell inherited by later steps

Desktop Step 2 — inherits wizard shell
├── geography results state
└── Mobile Step 2 keyboard/provider adaptation

Desktop Step 3 Fixed — inherits wizard shell
└── Step 3 Negotiable adaptation

Initialization failure — inherits shell identity but replaces form body
```

Step 2 and Step 3 must not independently redesign the stepper, page header, Summary, or action architecture established by the approved Step 1 base.

## 9. Generation map

## S1 — Desktop Campaign Strategy base

**Screen name:**

```text
Campaign — Create Strategy — Desktop 1440 — Scheduled KPI Ready — v1
```

**Purpose:** Establish the authoritative desktop wizard system.

**Required composition:**

- route context and Create Campaign identity;
- quiet Draft/save state;
- three-step progress;
- main form canvas;
- Basic Information;
- Scheduled publishing dates;
- Objective cards with Pulse selected;
- read-only KPI-ready surface using supplied canonical values;
- Instagram selected/locked;
- Visibility selection;
- progressive Campaign Summary;
- footer/workflow actions.

**State:** Populated, valid, Saved just now.

**Must not include:** Deliverables, Product, Brief, extra active platforms, speculative reach, Target Creators, or duplicate shell.

**Parent:** None; this becomes the visual parent.

**Review gate:** Approve hierarchy, density, form width, section rhythm, Summary weight, stepper, action placement, Aurora fidelity, and shell fit before S2/S3.

## S2 — Desktop Creator Strategy

**Screen name:**

```text
Campaign — Create Creator Strategy — Desktop 1440 — Geography Results — v1
```

**Purpose:** Extend the approved wizard system to controlled targeting inputs.

**Required composition:**

- inherited page/stepper/Summary/action architecture;
- searchable Archetype multi-select with selected chips;
- numeric minimum/maximum followers;
- Gender selection;
- age range control with explicit values;
- Geography autocomplete results and selected structured tags;
- optional Affinities multi-select;
- updated progressive Summary.

**State:** Populated; geography search/results open; current values valid.

**Parent:** Approved S1 screen/project lineage.

**Must not include:** follower tiers, Industry Campaign field, disqualifying keywords, uncontrolled tokens, AI reach estimates, or Campaign Page creators.

**Review gate:** Approve multi-select patterns, overlay behavior, controlled taxonomy clarity, range usability, and density.

## S3 — Desktop Commercial Strategy — Fixed

**Screen name:**

```text
Campaign — Create Commercial Strategy — Desktop 1440 — Fixed INR — v1
```

**Purpose:** Establish the commercial hierarchy and final Publish state.

**Required composition:**

- inherited wizard system;
- Brand support Yes;
- Product support type selected;
- optional estimated value;
- Fixed compensation selected;
- Creator Payout;
- Total Campaign Budget clearly separate;
- discrete Advance choices;
- Net 15 payout term;
- system-derived INR presentation;
- progressive complete Summary;
- Back and Publish.

**State:** Valid and ready to Publish.

**Parent:** Approved S1 system, with S2 component patterns where relevant.

**Must not include:** hardcoded universal currency, multiple support types, escrow estimate, predicted Applications/reach, or Product value inside budget.

**Review gate:** Approve commercial decision order, currency/number presentation, distinction between offer/budget/support value, and final action prominence.

## S4 — Commercial Negotiable adaptation

**Screen name:**

```text
Campaign — Create Commercial Strategy — Desktop 1440 — Negotiable INR — v1
```

**Purpose:** Validate the material compensation-model adaptation without redesigning Step 3.

**Change from S3:**

- Negotiable selected;
- `Creator Payout` becomes `Payout Starting From`;
- one-counter-offer helper appears;
- representative offer becomes ₹20,000;
- Summary reflects Negotiable.

**Must remain unchanged:** every other Step 3 hierarchy, spacing principle, Summary architecture, action region, and shell boundary.

**Parent:** Approved S3.

**Must not include:** minimum plus maximum fee.

**Review gate:** Confirm adaptation is clearly understandable and visually inherited.

## S5 — Validation and save-failure adaptation

**Screen name:**

```text
Campaign — Create Strategy — Desktop 1440 — Validation Save Failure — v1
```

**Purpose:** Freeze error hierarchy across fields, step validation, and autosave truthfulness.

**Representative state:** Step 1 adaptation with:

- Campaign Name below minimum or missing after validation;
- Scheduled end date before start date;
- inline field errors;
- concise step-level validation summary if needed;
- `Couldn't save changes · Retry` in the stable save-status area;
- Continue attempted and focus hierarchy apparent.

**Parent:** Approved S1.

**Must remain unchanged:** overall layout and ordinary field positions.

**Review gate:** Ensure the save failure does not masquerade as a field error, errors do not overwhelm the form, and recovery actions are clear.

## S6 — Mobile Campaign Strategy base

**Screen name:**

```text
Campaign — Create Strategy — Mobile 390 — Scheduled KPI Ready — v1
```

**Purpose:** Adapt the approved desktop wizard to the canonical mobile shell and realistic browser height.

**Required composition:**

- existing global mobile Header reserved, not redrawn as module UI;
- Create Campaign and Step 1 of 3 context;
- Campaign Strategy content in one column;
- mobile-appropriate section and selection composition;
- collapsed/Sheet-based Campaign Summary or omission according to the brief;
- Persistent Action Region above global Bottom Navigation;
- realistic initial viewport showing where content continues.

**Parent:** Approved S1.

**Must not do:** shrink the desktop layout, introduce a new app bar, hide required labels, or let actions scroll below a long form.

**Review gate:** Approve first-viewport hierarchy, scrolling ownership, action/nav separation, typography, and content density at 390px.

## S7 — Mobile long-form keyboard/provider adaptation

**Screen name:**

```text
Campaign — Create Creator Strategy — Mobile 390 — Geography Keyboard — v1
```

**Purpose:** Validate the hardest mobile interaction: a long Step 2 form with provider results and keyboard pressure.

**Required composition:**

- inherited mobile wizard system;
- Geography search focused;
- keyboard-open available-height assumption;
- search results visible and usable;
- selected locations preserved;
- Persistent Action Region and Bottom Navigation do not overlap the focused task;
- form can scroll to keep input/results visible.

**Parent:** Approved S2 and S6.

**Review gate:** Approve keyboard behavior, overlay/results containment, touch targets, and safe-area composition. Also stress-check at 360px.

## S8 — Draft initialization failure

**Screen name:**

```text
Campaign — Create — Responsive — Draft Initialization Error — v1
```

**Purpose:** Prevent a failed Draft from appearing as an editable but unsavable Campaign.

**Required composition:**

- inherited Create Campaign identity and shell boundary;
- concise explanation;
- Retry primary action;
- safe exit/back action;
- no interactive empty form.

**Parent:** Approved S1 shell identity; mobile may derive from the same state without a separate full generation if Stitch can supply a responsive variant.

**Review gate:** Confirm truthful failure, clear recovery, and no accidental data-entry affordance.

## 10. Generation economy

The target is not eight unrelated full prompts.

Recommended grouping after connector capability discovery:

| Execution unit | Contains | Relationship |
|---|---|---|
| Unit 1 | G0 | Context confirmation only |
| Unit 2 | G1 | Context confirmation only |
| Unit 3 | S1 | Desktop visual parent |
| Unit 4 | S2 | Inherited desktop step |
| Unit 5 | S3 + S4 | Fixed base plus Negotiable controlled adaptation |
| Unit 6 | S5 | State adaptation from S1 |
| Unit 7 | S6 | Responsive adaptation from S1 |
| Unit 8 | S7 | Responsive/state adaptation from S2/S6 |
| Unit 9 | S8 | Failure adaptation; may be combined with S5 if output identity remains clear |

If Stitch reliably generates separately identifiable variants in one request, S3/S4 and possibly S5/S8 may be grouped. Do not group them if it compromises stable screen identity or reviewability.

Runtime model allocation is intentionally excluded from this document. Codex applies the approved Pro/Thinking/Flash allocation during execution.

## 11. Review gates

### Gate A — Grounding accepted

Required before UI generation:

- platform understanding correct;
- Create Campaign scope correct;
- no legacy/domain drift;
- no unresolved blocker ignored.

### Gate B — Desktop system accepted

Required after S1:

- Aurora 5.0 fidelity;
- shell fit;
- information hierarchy;
- form density and readability;
- Summary properly subordinate;
- action architecture clear.

Do not proceed to broad state/mobile expansion if S1 needs structural revision.

### Gate C — All desktop steps accepted

Required after S2–S4:

- component family coherence;
- no independent redesign across steps;
- complex controls usable;
- commercial meanings distinct;
- canonical fields/options preserved.

### Gate D — State treatment accepted

Required after S5/S8:

- validation and system errors distinguished;
- autosave status truthful;
- recovery actions clear;
- no blank or fake-usable failure surface.

### Gate E — Mobile system accepted

Required after S6/S7:

- browser-height assumptions respected;
- no shell duplication;
- actions above Bottom Navigation;
- keyboard/provider behavior usable;
- 360px stress check acceptable.

## 12. Required output from every generation

Codex must retrieve and record:

- Stitch project name;
- stable project ID;
- exact generated screen/file name;
- stable screen/file ID;
- represented surface, state, and viewport;
- interactive preview URL or best available stable review link;
- generated code/export identity and retrieval location where available;
- prompt version;
- attachment/context manifest version;
- parent/base screen ID;
- Stitch-reported ambiguity or deviation;
- review status.

A low-quality thumbnail alone does not complete a generation task.

## 13. Review method

For every screen:

1. open the interactive preview where available;
2. confirm the exact project and screen name;
3. compare against the Screen Brief acceptance checklist;
4. inspect desktop/mobile viewport fit rather than only the centered canvas;
5. record blocking, material, and polish-level feedback separately;
6. revise the existing screen lineage;
7. preserve approved regions explicitly in revision prompts.

## 14. Revision rules

Every revision prompt must state:

```text
Revise: [exact screen ID/name]
Reason: [brief requirement or review finding]
Change: [specific requested changes]
Preserve: [approved hierarchy/components/regions]
Authority: [relevant document/brief version]
Output: [same screen lineage or explicit new variant]
```

Do not ask Stitch to `improve the screen` without bounded criteria.

## 15. Artifact Registry entries

Create Campaign registry should support at least:

| Field | Required |
|---|---:|
| Module | Yes |
| Active Phase G surface | Yes |
| Stitch project name/ID | Yes |
| Screen name/ID | Yes |
| Surface/step | Yes |
| State | Yes |
| Viewport | Yes |
| Parent screen ID | When applicable |
| Prompt/context versions | Yes |
| Preview link | Yes |
| Export/code location | When available |
| Review status | Yes |
| Supersedes/superseded by | When applicable |
| Notes/deviations | Yes |

## 16. Git retention plan

After successful execution, retain under the Campaign module package:

```text
docs/stitch-design-library/modules/campaign/
├── prompts/
│   └── create-campaign/
├── artifacts/
│   └── create-campaign/
│       ├── registry.md
│       ├── previews.md
│       ├── screenshots/
│       └── exports/
└── screen-briefs/
    └── create-campaign/
```

Do not commit signed/expiring preview URLs as the only durable identity. Always retain project/screen IDs and the best stable review link.

## 17. Stop conditions

Codex must pause screen generation when:

- the Stitch project identity is ambiguous;
- grounding contradicts canonical Create Campaign authority;
- a required Screen Brief is missing;
- representative KPI values are not approved;
- a meaningful unresolved product decision affects the target screen;
- Stitch cannot return a reviewable screen identity or preview and the limitation has not been accepted;
- a generated base materially violates Aurora 5.0 or duplicates the application shell;
- a revision request would overwrite an approved screen without lineage.

## 18. Completion criteria

The Create Campaign Stitch handoff is complete when:

1. G0 and G1 grounding are validated;
2. S1–S3 desktop steps are approved;
3. Negotiable, validation/save-failure, and initialization-failure treatments are approved or safely derived;
4. mobile Step 1 and long-form keyboard/provider behavior are approved;
5. every required screen has stable identity and interactive review access;
6. all prompt/context versions are recorded;
7. outputs and available exports are retained;
8. no out-of-scope Campaign Page surface was generated;
9. the same Campaign project remains available for future Campaign Page work after Phase G.
