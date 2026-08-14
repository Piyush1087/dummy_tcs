# 04A — Campaign Strategy Screen Brief

**Target:** S1  
**Screen:** `Campaign — Create Strategy — Desktop 1440 — Scheduled KPI Ready — v1`  
**Role:** Authoritative visual parent for the Create Campaign family

## Objective

Design the desktop Campaign Strategy step as a confident, clear business workflow—not an admin form. Establish the page hierarchy, stepper, form rhythm, progressive Campaign Summary, save status, and action region inherited by all later screens.

## Viewport and shell

```text
Browser viewport: 1440 × 900
Global Header reserved: 72px
Collapsed Sidebar reserved: 80px
Content Area only
```

Do not render global navigation.

## State

- manual Campaign Draft;
- Step 1 of 3;
- populated and valid;
- Scheduled selected;
- KPI resolution ready;
- Instagram selected/locked;
- Eligible Creators Only selected;
- autosave: Saved just now.

## Required hierarchy

```text
Route context / breadcrumb                         Saved just now
Create Campaign
Short orientation if useful

Campaign Strategy → Creator Strategy → Commercial Strategy

Main form canvas                                  Campaign Summary
├── Basic Information                             ├── Campaign name
├── Publishing Schedule                           ├── Objective
├── Campaign Objective                            ├── Schedule
└── Reach & Distribution                          ├── Platform
                                                  └── Visibility

Cancel / safe exit                                Continue
```

The Summary appears only as a useful projection and must not become a competing ledger.

## Required content

### Basic Information

- Label: Campaign Name
- Value: `Summer Collection — Creator Seeding`
- Show a quiet character counter against 60.

### Publishing Schedule

Two single-select choices:

- Evergreen;
- Scheduled — selected.

Reveal:

- Publish From: 15 September 2026;
- Publish Until: 15 October 2026.

Communicate that these dates define the creator-content publishing window.

### Campaign Objective

Four objective choices:

- Pulse — Awareness & Reach — selected;
- Proof — Trust & Validation;
- Production — High-Quality Assets;
- Push — Direct Action.

After selection, show a compact read-only success-metric surface:

- Primary: Reach;
- Supporting: Discover Reach, Impressions, Profile Visits, New Followers.

Success metrics must look system-derived, not editable.

### Reach & Distribution

- Instagram selected and locked for MVP.
- Coming Soon platforms appear only if they remain quiet and useful; omission is acceptable.
- Visibility choices: Public, Eligible Creators Only selected, Invite Only.

## Interaction intent

- Selected cards are obvious beyond color alone.
- Conditional dates feel part of Publishing Schedule.
- KPI content appears after Objective rather than as a disconnected dashboard.
- Continue is the single primary action.
- The stepper communicates progress without implying users can bypass validation.
- Save status has one stable location.

## Aurora acceptance

- Satoshi for headings and Source Sans 3 for body/form text.
- Exact Aurora 5.0 colors and tokens.
- Restrained radii, shadows, borders, and selected treatments.
- Clear label/helper/error hierarchy.
- Comfortable form density within the available Content Area.
- Visible keyboard focus and non-color selection indicators.

## Prohibited

- Deliverable counters or formats;
- Product/Asset/Brief content;
- Dynamic/Milestone timeline;
- editable KPIs;
- extra active platforms;
- Target Creators or Estimated Reach;
- Campaign health or AI recommendation;
- large empty `Not specified` Summary rows;
- global Header/Sidebar duplication.

## Stitch freedom

Stitch may decide the detailed grid, section-card treatment, stepper form, selection-card layout, Summary width, and icon restraint, provided hierarchy and authority remain unchanged.

## Review checklist

- Is Campaign Strategy clearly Step 1 of one three-step system?
- Does the form dominate over Summary?
- Are Objective and derived KPIs connected conceptually?
- Are Schedule dates understandable as publishing dates?
- Is Instagram visibly fixed without looking broken?
- Is Continue easy to locate after a long step?
- Does the layout fit the real shell-reserved viewport?
- Can Step 2 and Step 3 inherit this system without redesign?

## Required output

Return exact project name/ID, screen name/ID, represented viewport/state, interactive preview link, and available export/code identity.
