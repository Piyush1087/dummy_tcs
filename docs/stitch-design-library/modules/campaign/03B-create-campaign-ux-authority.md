# 03B — Create Campaign UX Authority

**Status:** Review draft 0.1  
**Audience:** Product, UX, Codex, and Stitch  
**Scope:** Brand-side Create / Edit Campaign only  
**Parent authority:** `03 — Campaign Stitch Manifest` and `03A — Campaign Surface Authority Matrix`  
**Implementation reference:** frontend `feature/campaign-canonical-preprod` at `22e88f89d64aaef8e3bcede991831fb70c10b7cf`  
**Purpose:** Freeze the Create Campaign hierarchy, field experience, states, validation presentation, responsive behavior, and Stitch boundaries  
**Last material update:** 14 August 2026

## 1. Active scope

This is the only Campaign UX authority currently eligible for the active Stitch exercise.

```text
IN SCOPE
Create / Edit Campaign
├── 1. Campaign Strategy
├── 2. Creator Strategy
└── 3. Commercial Strategy
```

```text
OUT OF SCOPE UNTIL LATER PHASE G
Campaign List
Campaign Workspace
Campaign Assets
Briefs and Deliverables
Prospects / Discovery
Applicants
Collaborations
Reporting
```

Stitch must not generate the out-of-scope surfaces during this cycle, even if they appear in broader Campaign planning documents.

## 2. Authority hierarchy

Use Create Campaign authority in this order:

1. current canonical field and API contracts completed through Phase G;
2. this UX Authority;
3. Aurora 5.0 and the canonical application shell;
4. current implementation as evidence of runtime behavior;
5. older Campaign specifications only for interaction intent not superseded above.

The current rendered wizard still contains legacy presentation concepts in places. Examples include follower-tier UI, minimum/maximum negotiable fees, old timeline labels, and speculative ledger metrics. Those are not product authority merely because they remain in the component.

## 3. Experience objective

Create Campaign should help a Brand make three progressively narrower decisions:

```text
What are we trying to achieve?
→ Which creators and audiences are appropriate?
→ What will creators receive and how will they be paid?
```

The result is a Campaign-level strategic and commercial contract.

After creation, execution setup happens separately:

```text
Create Campaign
→ Campaign Workspace
→ Link Campaign Asset
→ Create Brief
→ Define Brief Deliverables
```

Therefore, Create Campaign does not contain Campaign Assets, Products, Briefs, or Deliverables.

## 4. Global wizard architecture

### 4.1 Canonical steps

```text
1  Campaign Strategy
2  Creator Strategy
3  Commercial Strategy
```

Use these labels consistently. Do not substitute legacy labels such as Core Strategy, Creator Targeting, or Commercial Terms in the final design.

### 4.2 Desktop composition

```text
Route context / breadcrumb                         Save status
Create Campaign

Step progress: Campaign Strategy → Creator Strategy → Commercial Strategy

┌──────────────────────────────────────┬──────────────────────────┐
│ Main form canvas                     │ Campaign Summary         │
│ Current step sections                │ Read-only, progressive   │
└──────────────────────────────────────┴──────────────────────────┘

Back / Cancel                                      Continue / Publish
```

Rules:

- Stitch designs only the Content Area inside the existing global shell.
- Main form carries the task; Campaign Summary is supportive and visually subordinate.
- The Summary shows only meaningful populated values.
- Workflow actions remain easy to find after a long form.
- Do not make the wizard look like an internal admin console.

### 4.3 Mobile composition

```text
Create Campaign                         Step 1 of 3
Campaign Strategy

Current step content

Optional collapsed Campaign Summary

Persistent Action Region
Back                                     Continue

Global Bottom Navigation
```

Rules:

- one-column form;
- no permanent right ledger;
- preserve Aurora 5.0's 56px mobile Header and 64px Bottom Navigation plus safe area;
- persistent workflow actions sit above global Bottom Navigation;
- account for a representative browser-visible content height of approximately 620–680px at 390px width;
- verify a 360px stress width and keyboard-open state;
- do not invent a second mobile app shell.

### 4.4 Step navigation

- Continue validates the current step.
- Back preserves entered values and does not require revalidation.
- Completed steps may be revisited through the approved progress interaction.
- Future steps are not used to bypass required current-step validation.
- Publish validates the complete Campaign contract.
- On cross-step publish errors, return to the earliest invalid step and focus/scroll to the first invalid field.

### 4.5 Exit behavior

The runtime creates a canonical Draft before meaningful editing and retains it through autosave. Exit/cancel copy and destination must be confirmed in the Screen Brief; Stitch must not invent destructive discard behavior.

## 5. Step 1 — Campaign Strategy

### 5.1 Purpose

Define Campaign identity, publishing intent, objective, platform, and visibility.

### 5.2 Section order

```text
Basic Information
Publishing Schedule
Campaign Objective
Reach & Distribution
```

### 5.3 Campaign Name

| Attribute | Authority |
|---|---|
| Label | Campaign Name |
| Component | Single-line text input |
| Required | Yes |
| Minimum | 3 trimmed characters |
| Maximum | 60 trimmed characters |
| Counter | Show a quiet `0 / 60` style counter |
| Duplicate | Allowed; any duplicate warning is informational only |

Representative placeholder:

> e.g. Summer Collection — Creator Seeding

Representative helper:

> Give your Campaign a clear name so your team can identify it later.

Approved error meanings:

- enter a Campaign Name;
- name must be at least 3 characters;
- name must be 60 characters or fewer.

The Copy Contract will freeze exact capitalization and punctuation.

### 5.4 Publishing Schedule

**Component:** two single-select cards.

```text
Evergreen
No fixed publishing window.

Scheduled
Creator content should go live during a specific window.
```

Canonical stored values:

```text
EVERGREEN | SCHEDULED
```

When Scheduled is selected, reveal:

- Publish From;
- Publish Until.

These dates describe the creator-content publishing window, not the Campaign lifecycle.

Validation authority:

- Scheduled requires both dates;
- Publish Until must not precede Publish From;
- the current frontend schema does not encode a `Publish From ≥ today` rule, so Stitch must not present that rule as frozen until product/backend authority confirms it.

Do not use the legacy Fixed/Milestone or Dynamic timeline model.

### 5.5 Campaign Objective

**Component:** four single-select objective cards.

```text
Pulse       Awareness & Reach
Proof       Trust & Validation
Production  High-Quality Assets
Push        Direct Action
```

Canonical stored values:

```text
PULSE | PROOF | PRODUCTION | PUSH
```

Each card includes a concise outcome-oriented description. Selection uses Aurora's approved selection treatment rather than an oversized decorative illustration.

Validation: exactly one Objective is required.

**Success metrics:** The canonical payload does not currently store a user-selected success metric in Create Campaign. Stitch may show a compact read-only objective explanation only if the Screen Brief supplies approved derived content. It must not add editable KPI fields, frontend business logic, or speculative metrics.

### 5.6 Platform

For the current MVP:

```text
Instagram  Selected and locked
```

Canonical payload is exactly:

```text
[INSTAGRAM]
```

TikTok and YouTube are not selectable. They should appear only if the Screen Brief explicitly requests a restrained Coming Soon representation. They must not visually compete with the usable Instagram choice.

Platform content formats are not Campaign Deliverables and are not configured here.

### 5.7 Campaign Visibility

**Component:** three single-select cards.

```text
Public
Eligible Creators Only
Invite Only
```

Canonical stored values:

```text
PUBLIC | ELIGIBLE_CREATORS_ONLY | INVITE_ONLY
```

Meaning:

- Public: discoverable according to public Campaign availability;
- Eligible Creators Only: discoverable only to creators meeting Campaign eligibility;
- Invite Only: accessible only through Brand invitation.

One selection is required. The final default must follow the canonical initial-state contract used for implementation; Stitch must not infer a default from visual emphasis if the Screen Brief does not specify it.

### 5.8 Step 1 exclusions

Do not add:

- Expected Deliverables;
- Reels/Stories/Posts counters;
- Assets or Products;
- Brief selection;
- Dynamic timeline;
- editable success metrics;
- additional active platforms.

## 6. Step 2 — Creator Strategy

### 6.1 Purpose

Describe which creator profiles and creator audiences fit the Campaign.

### 6.2 Section order

```text
Creator Profile
Audience Match
```

### 6.3 Creator Archetypes

| Attribute | Authority |
|---|---|
| Component | Searchable controlled multi-select |
| Required | Yes |
| Minimum | 1 |
| Maximum | 5 |
| Selected representation | Removable chips/tags |
| Free-token creation | Not allowed |

Representative placeholder:

> Search Creator Archetypes…

Use the controlled Creator Shop archetype taxonomy supplied at runtime. Do not invent custom archetypes or treat generic input text as a stored archetype.

Intelligence-driven recommendations may be added later. Do not label static options as AI-recommended in this MVP.

### 6.4 Follower Range

Use numeric authority:

```text
Minimum followers
Maximum followers — optional / No maximum
```

Canonical fields:

- `minimum_followers`: non-negative integer;
- `maximum_followers`: non-negative integer or null.

UX rule: when a maximum exists, it must be logically greater than or equal to the minimum. The current reviewed frontend schema validates each bound but does not yet encode that relationship; implementation reconciliation must close this gap before final QA.

Do not use Nano, Micro, Mid-tier, or Macro as persisted targeting controls. Presets may be considered later only as shortcuts that resolve to numeric values.

### 6.5 Audience Gender

**Component:** single-select segmented control or compact selection cards.

```text
All | Female | Male
```

Canonical values:

```text
ALL | FEMALE | MALE
```

Exactly one value is required.

### 6.6 Audience Age

Canonical fields:

- minimum: integer from 13 to 65;
- maximum: integer from 13 to 65;
- minimum must not exceed maximum.

Recommended component: accessible dual-handle range control with visible numeric values and a usable non-drag alternative where needed.

Do not show 65+ unless the stored/runtime meaning explicitly represents an open upper bound; the current contract caps the value at 65.

### 6.7 Audience Geography

**Component:** provider-backed searchable multi-select with structured results and removable selected tags.

Supported canonical scopes:

```text
Locality | Region | Country | Global
```

Each selection retains canonical structured geography, including label, scope, relevant country/region/locality values, and primary designation.

Current contract requires at least one geography.

Required UX states:

- initial search;
- searching;
- results;
- no results;
- selected locations;
- provider error;
- provider configuration blocked;
- approved manual/global fallback only if runtime authority supplies it.

Stitch should design the provider-blocked state without implying that a nonfunctional search can be used.

### 6.8 Audience Affinities

| Attribute | Authority |
|---|---|
| Component | Searchable controlled multi-select |
| Required | No minimum in the current schema |
| Maximum | 5 |
| Stored value | Canonical affinity identifiers |
| Free-token creation | Not allowed |

Use human-readable affinity labels while storing canonical identifiers. Do not expose IDs in the UI.

### 6.9 Step 2 exclusions

Do not add:

- follower-tier authority;
- industry selector as a Campaign targeting field unless the current field contract is intentionally expanded;
- disqualifying keyword tokens;
- uncontrolled interests;
- AI recommendations presented as current fact;
- unsupported gender options;
- fabricated creator counts or estimated reach.

## 7. Step 3 — Commercial Strategy

### 7.1 Purpose

Define what the Brand provides, the creator offer, the total payout budget, advance percentage, and payout timing.

### 7.2 Section order

```text
Creator Provisioning
Creator Compensation
Campaign Budget
Payment Terms
```

This order is a business-decision sequence and should remain visually clear.

### 7.3 Creator Provisioning

Begin with a direct yes/no decision:

> Will creators receive support from your Brand?

Canonical field:

```text
receives_brand_support: boolean
```

When Yes, reveal:

1. Brand Support Type;
2. Estimated Value, where applicable.

Canonical support types:

```text
Product
Service
Experience
Access / Subscription
Other
```

Canonical field currently holds one support type, not an array. Therefore the current design must use single selection unless Phase G deliberately changes the contract.

Estimated Value is a non-negative monetary value when supplied. Currency display follows the Campaign/Brand currency context; Stitch must not hardcode `$` or `₹` as universal.

When No, support type and estimated value are hidden/cleared according to implementation rules.

### 7.4 Compensation Model

**Component:** two single-select cards.

```text
Fixed
Every approved creator receives the same payout.

Negotiable
Creators can respond to your starting offer.
```

Canonical values:

```text
FIXED | NEGOTIABLE
```

### 7.5 Commercial Offer

The canonical contract uses one monetary field for both models:

```text
commercial_offer
```

Presentation changes by model:

| Model | Label |
|---|---|
| Fixed | Creator Payout |
| Negotiable | Payout Starting From |

Negotiable has one starting offer only. Creators may submit one counter-offer according to current product policy.

Do not add a maximum negotiable fee.

The current schema accepts a non-negative value. Whether zero is publishable should be confirmed through backend/publish authority; Stitch must not invent a stricter numeric minimum.

### 7.6 Total Campaign Budget

Canonical field:

```text
total_campaign_budget
```

Meaning: maximum creator payout budget available for this Campaign.

It is distinct from:

- payout per creator;
- Brand support estimated value;
- product value;
- escrow balance.

Validation:

```text
Total Campaign Budget ≥ Commercial Offer
```

Do not display speculative creator counts or reach estimates derived from the budget.

### 7.7 Advance Payment

Canonical choices:

```text
0% | 25% | 50% | 75% | 100%
```

Use a discrete selection control. A free slider/number input that implies unsupported percentages is inappropriate.

Do not calculate or label an escrow hold unless the current product/runtime contract explicitly requires that information in Create Campaign.

### 7.8 Payout Terms

Canonical choices:

```text
Net 7 | Net 15 | Net 30 | Net 45 | Net 60
```

Use a Select or another compact single-select control.

Do not add Immediate or other terms not in the canonical contract.

### 7.9 Step 3 exclusions

Do not add:

- negotiable maximum fee;
- multiple simultaneous provisioning types;
- unsupported provisioning examples as selectable values;
- arbitrary advance percentages;
- Immediate payout;
- escrow calculations;
- application-volume predictions;
- AI budget recommendations;
- product value folded into Campaign budget.

## 8. Validation UX

### 8.1 Interaction timing

| Moment | Behavior |
|---|---|
| Untouched | No error |
| Invalid field loses focus | Show inline error |
| Errored field changes | Remove error immediately once valid |
| Continue | Validate all fields in current step |
| Publish | Validate the complete Campaign contract |
| Cross-field dependency changes | Re-evaluate affected dependency without waiting for a second submission |

### 8.2 Error presentation

When a step contains multiple errors:

- mark all invalid fields;
- move focus/scroll to the first invalid field;
- optionally show one concise summary banner;
- preserve all entered valid values.

Representative banner meaning:

> Complete the highlighted fields to continue.

### 8.3 Error language

Errors must be human, specific, and actionable.

Do not expose:

- Zod;
- object or array paths;
- enum/value codes;
- HTTP status;
- database/schema language;
- generic `Invalid input` when a useful field message exists.

### 8.4 Cross-field dependencies

The UX must account for:

- Schedule ↔ required dates;
- Publish From ↔ Publish Until;
- minimum followers ↔ maximum followers;
- minimum age ↔ maximum age;
- receives Brand support ↔ support fields;
- compensation model ↔ offer label/meaning;
- Commercial Offer ↔ Total Campaign Budget.

## 9. Draft, hydration, and autosave

### 9.1 Draft creation

The reviewed implementation creates a canonical Draft on entry when a Draft ID is not already supplied, then places the ID into the URL.

The UI must not imply that the Campaign is published merely because a Draft exists.

### 9.2 Hydration

Opening an existing Draft uses the same wizard architecture and restores canonical saved values.

Use a quiet `Editing Draft` context rather than a separate Edit Campaign design.

Hydration must preserve:

- the current canonical values;
- conditional field visibility;
- selection states;
- summary values;
- ability to continue editing.

### 9.3 Autosave states

Freeze these meanings:

```text
Saving…
Saved just now / Saved at [time]
Couldn't save changes · Retry
```

Rules:

- successful autosave is quiet;
- do not show a toast for every save;
- failure remains visible until resolved or superseded by success;
- never claim Saved while a write has failed;
- Retry must be available where runtime supports it;
- publish should not proceed under an unresolved state that risks losing required canonical values.

### 9.4 Load failure

If Draft creation or hydration fails, show a clear page-level recovery state. Do not render an apparently usable empty wizard that cannot save.

## 10. Campaign Summary

### 10.1 Purpose

Help the Brand understand the Campaign being assembled without jumping among steps.

### 10.2 Authority

Read-only projection of values already entered in the wizard. It owns no data and performs no calculation beyond neutral formatting.

### 10.3 Progressive content

Possible groups:

```text
Strategy
Campaign Name
Objective
Schedule
Visibility

Creators
Archetypes
Follower range
Audience summary

Commercial
Support
Compensation model and offer
Budget
Advance and payout terms
```

Only populated/current values appear. Do not fill empty sections with repeated `Not specified` rows.

### 10.4 Prohibited summary content

Do not show:

- Target Creators count;
- Active Picks;
- Estimated Reach;
- predicted Applications;
- Campaign health;
- derived escrow balance;
- any intelligence not supplied by canonical authority.

### 10.5 Responsive behavior

- Desktop: compact subordinate side summary.
- Mobile: collapsed summary/Sheet or omitted from the immediate viewport according to the Screen Brief.
- Summary must never displace the current field or Persistent Action Region.

## 11. Loading, saving, and action states

Required action-state treatment:

- Continue idle/in progress;
- Publish idle/in progress;
- duplicate submission prevented;
- Back available during ordinary editing;
- field autosave in flight without blocking unrelated reading;
- autosave failure visible;
- full Draft initialization loading;
- Draft initialization/hydration failure with Retry or safe exit.

Do not replace the complete page with a generic spinner after the Draft and wizard structure are available.

## 12. Accessibility and form usability

Stitch must preserve:

- visible labels; placeholders do not replace labels;
- programmatically associated error/help text;
- keyboard access for selection cards, multi-selects, date controls, range controls, and actions;
- visible focus state using Aurora tokens;
- sufficient selected/unselected distinction beyond color alone;
- predictable focus after validation;
- 44px minimum practical mobile target size where Aurora components allow;
- correct reading and tab order;
- no critical information conveyed only by icon or tooltip.

## 13. Stitch design freedom

Stitch may decide:

- responsive grid and spacing within Aurora 5.0;
- section-card composition;
- exact visual treatment of the stepper;
- the clearest Aurora component pattern for selections;
- progressive disclosure transitions;
- Summary presentation within the frozen hierarchy;
- responsive stacking;
- visual hierarchy of helper, state, and validation text;
- appropriate illustration/icon restraint.

Stitch may not change:

- the three steps or their order;
- field ownership;
- canonical field meanings;
- options and constraints;
- Campaign-versus-Brief boundary;
- conditional logic;
- validation meaning;
- autosave truthfulness;
- Draft/publish distinction;
- mobile shell geometry;
- active execution scope.

## 14. Current implementation drift to ignore in design

The current implementation is runtime evidence, not visual authority. Stitch must not preserve these legacy concepts:

| Current/legacy presentation | Canonical direction |
|---|---|
| Fixed / Milestone timeline | Evergreen / Scheduled |
| Brand Awareness / Traffic & Clicks labels | Pulse / Proof / Production / Push objective system |
| follower-tier buttons | numeric minimum / maximum followers |
| Industry Campaign field | no Campaign industry field in current targeting schema |
| disqualifying keyword tokens | not in current canonical targeting payload |
| minimum + maximum negotiable fee | one `Payout Starting From` offer |
| US dollar hardcoding | currency from Brand/Campaign context |
| `Live Context Ledger` with empty rows | light progressive Campaign Summary |
| Target Creators / Estimated Reach snapshot | no speculative metrics |
| continuous percentage input | discrete 0/25/50/75/100 choices |
| escrow-hold display | omit unless separately authorized |

These gaps are implementation-reconciliation inputs after Stitch approval; they are not reasons to weaken the UX authority.

## 15. Decisions requiring confirmation before final Screen Briefs

The following are not delegated to Stitch:

1. exact Visibility default;
2. exact initial defaults for Schedule, Objective, audience, compensation, advance, and payout terms;
3. whether `commercial_offer = 0` may publish;
4. whether support estimated value is required when Brand support is Yes;
5. exact currency source and representative Campaign currency;
6. whether Coming Soon platforms should appear or be omitted;
7. exact exit destination and any confirmation behavior;
8. exact autosave debounce/status timing and Retry mechanism;
9. whether a read-only derived success-metric explanation appears;
10. final Google Places blocked/fallback behavior;
11. final follower maximum relationship (`≥` or strictly `>` minimum);
12. exact copy capitalization and punctuation.

Codex must resolve these from current product/runtime authority or explicitly mark them in the Screen Brief. Stitch must not decide them implicitly.

## 16. Candidate Stitch design family

The Handoff Map should consolidate Create Campaign into one visual system, not a separate project for every state.

Candidate representatives:

1. Desktop Step 1 — representative populated Campaign Strategy;
2. Desktop Step 2 — representative Creator Strategy with geography results;
3. Desktop Step 3 — Fixed compensation;
4. Desktop Step 3 adaptation — Negotiable compensation;
5. Desktop validation/save-error adaptation;
6. Mobile Step 1 — representative browser-height composition;
7. Mobile Step 2 or 3 — long-form + keyboard/Persistent Action pattern;
8. Draft hydration adaptation, only if it materially changes composition.

The final number of prompts and generated screens belongs to `03F — Campaign Stitch Handoff Map` and `04 — Create Campaign Screen Briefs`.

## 17. Context packet rule

For Create Campaign grounding, Codex should supply:

- `01A — Creator Shop Platform Context`;
- `01B — Aurora 5.0 Stitch Context`;
- `01C — Application Shell and Viewport Context`;
- `01D — Global Stitch Design Instructions`;
- a compact Create Campaign module extract from this authority;
- the active Screen Brief.

For later screen prompts in the same retained Stitch project, send only:

- approved parent screen/file reference;
- relevant step/state excerpt;
- target viewport;
- requested change and invariants.

Do not upload the full Campaign Workspace authority or unrelated Campaign planning documents.

## 18. Freeze test

Create Campaign is ready for Screen Briefs only when:

1. all three step hierarchies match canonical contracts;
2. no Deliverables or Workspace functionality appears;
3. defaults and unresolved product decisions are either resolved or explicitly isolated;
4. mobile Persistent Action behavior is specified;
5. validation, autosave, hydration, and blocked-provider states are represented;
6. representative data uses one coherent Campaign across all steps;
7. Stitch receives Aurora 5.0 and Content Area constraints;
8. design variants inherit an approved base instead of drifting into separate systems.
