# Create Campaign — Stitch Grounding

**Status:** Controlled Stitch-facing extract 0.1  
**Module:** Campaign  
**Active surface:** Manual Create / Resume Campaign only  
**Purpose:** Ground Stitch in the product and state contract without uploading the full Campaign authority library  
**Canonical source:** Current Campaign Phase G authority and the approved Stitch Design Library

## 1. Active boundary

Design only the Brand-side Create Campaign wizard in the current exercise.

```text
Create Campaign
├── 1. Campaign Strategy
├── 2. Creator Strategy
└── 3. Commercial Strategy
```

Do not generate Campaign List, Campaign Page/Workspace, Assets, Briefs, Prospects, Applicants, Collaborations, or Reporting.

Shared Campaign architecture exists so later Campaign Page work can continue in the same retained project after its own Phase G.

## 2. Product sequence and ownership

Manual Create Campaign defines the Campaign-level strategic and commercial contract.

Execution setup happens later:

```text
Create Campaign
→ Publish Campaign
→ Campaign Page
→ Link Campaign Asset
→ Create Brief
→ Define Brief Deliverables
```

Deliverables belong to Briefs, not Create Campaign.

## 3. Step 1 — Campaign Strategy

```text
Basic Information
Campaign Name — 3–60 characters; duplicates allowed

Publishing Schedule
Evergreen or Scheduled
Scheduled requires Publish From and Publish Until
At creation, Publish From cannot precede today
Publish Until cannot precede Publish From

Campaign Objective
Pulse — Awareness & Reach
Proof — Trust & Validation
Production — High-Quality Assets
Push — Direct Action

Primary and supporting KPIs
System-derived, read-only
Resolving / ready / failure states
Failure blocks Step 1 completion

Platform
Instagram selected and locked for MVP

Visibility
Public — default
Eligible Creators Only
Invite Only
```

No Deliverable or format counters appear in Step 1.

## 4. Step 2 — Creator Strategy

```text
Creator Profile
Creator Archetypes — controlled searchable multi-select; 1–5
Follower Range — numeric minimum and optional maximum
Maximum, when supplied, must be strictly greater than minimum

Audience Match
Gender — All / Female / Male
Age — 13–65 with minimum ≤ maximum
Geography — structured provider-backed multi-select; at least one
Affinities — controlled searchable multi-select; optional; maximum 5
```

Use canonical controlled taxonomies. Do not allow uncontrolled token creation.

Optional Archetype recommendations must not block manual selection and never overwrite user choices.

## 5. Step 3 — Commercial Strategy

```text
Creator Provisioning
Does the Brand provide support? Yes / No
If Yes: one support type is required
Product / Service / Experience / Access or Subscription / Other
Estimated value is optional and non-negative

Creator Compensation
Fixed — Creator Payout
Negotiable — Payout Starting From
One commercial-offer field only
One creator counter-offer policy

Campaign Budget
Total Campaign Budget is Campaign-wide payout budget
Budget must be at least the commercial offer

Payment Terms
Advance: 0 / 25 / 50 / 75 / 100 percent only
Net 7 / Net 15 / Net 30 / Net 45 / Net 60 only

Campaign Currency
System-derived and read-only
India → INR
United States and Rest of World → USD
```

Do not merge support value, creator offer, Campaign budget, or escrow concepts.

## 6. Wizard behavior

- Three sequential steps with Back and Continue.
- Continue validates the complete current step.
- Publish validates the full Campaign aggregate.
- Untouched fields do not show errors merely because a step loaded.
- Invalid local values remain available for correction but do not replace the last valid canonical autosaved value.
- Other valid fields continue to autosave.
- Back preserves entered valid state.
- Resumed Draft uses the same wizard and restores authoritative values.

Autosave states:

```text
Saving…
Saved just now / Saved at [time]
Couldn't save changes · Retry
```

Do not toast every successful autosave. Never show Saved while the latest accepted write failed.

## 7. Publish meaning

Manual Publish requires human confirmation.

```text
DRAFT → PUBLISHED
```

Published is not Live.

Publish does not require Product, Brief, or Deliverables. On success, navigation may go to Campaign Page Product Setup, which is outside this design exercise.

Publish validation/system failure retains the Draft and forbids partial publish.

## 8. Desktop architecture

```text
Route context / Create Campaign identity / quiet save state
Three-step progress

Main form canvas + subordinate progressive Campaign Summary

Back/Cancel + Continue or Publish
```

Campaign Summary is read-only and shows only useful populated values. It must not contain speculative creator counts, estimated reach, Applications, health, or escrow.

Stitch designs only the Content Area inside the existing global shell.

## 9. Mobile architecture

- one-column form;
- Step X of 3 remains clear;
- no permanent right Summary;
- Summary may collapse into a Sheet or be omitted from the immediate viewport;
- critical workflow actions use a Persistent Action Region above global Bottom Navigation;
- account for browser chrome, safe area, scrolling, and keyboard-open state;
- inherit desktop hierarchy rather than independently redesigning the flow.

Representative mobile width: 390px. Stress width: 360px.

## 10. Prohibited legacy concepts

Do not use:

- Deliverables in Create Campaign;
- Product/Asset/Brief selection;
- Fixed/Milestone/Dynamic timeline;
- follower tiers such as Nano/Micro/Mid-tier/Macro;
- Campaign Industry field;
- disqualifying keyword tokens;
- uncontrolled Archetypes or Interests;
- minimum plus maximum Negotiable fees;
- user-editable KPI or currency;
- arbitrary Advance percentages;
- Immediate payout term;
- hardcoded universal `$` or `₹`;
- speculative Target Creators, Estimated Reach, Applications, Campaign health, or escrow;
- technical schema/provider/database language;
- duplicate global Header, Sidebar, or Bottom Navigation;
- Campaign Page screens in the current generation cycle.

## 11. Stitch design authority

Stitch may decide layout, spacing, section-card composition, responsive grid, selection-card treatment, and progressive disclosure within Aurora 5.0.

Stitch must not change steps, field meanings, canonical options, ownership, validation meaning, Draft/publish semantics, or the active surface boundary.

If a requested screen requires a decision not supplied here or in its Screen Brief, report the ambiguity instead of inventing it.
