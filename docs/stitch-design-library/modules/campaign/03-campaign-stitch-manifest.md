# 03 — Campaign Stitch Manifest

**Status:** Review draft 0.1  
**Audience:** Stitch and Codex  
**Scope:** Brand-side Campaign surfaces  
**Owner:** Creator Shop Campaign product authority  
**Purpose:** Route Campaign design work to the current canonical authority without requiring Stitch to ingest the complete Campaign library for every screen  
**Last material update:** 14 August 2026

> **Current Phase G / Stitch execution boundary:** Phase G is complete for **Create Campaign** and the **Campaign Page / Campaign Workspace**. Both surfaces may use the retained `Creator Shop — Campaign` Stitch project. Campaign Page generation is governed by its dedicated execution package, compact grounding, fourteen screen contracts and accepted G1/G2 source checkpoints. Campaign List and any populated Discovery or Reporting provider experience remain outside active screen-generation authority.

## 1. Role of this Manifest

This Manifest defines the current Campaign design boundary and tells Codex which detailed Campaign authority to attach for each Stitch task.

It is not a complete field specification, State Matrix, Copy Contract, or Screen Brief.

Use it to:

- understand the Campaign surface hierarchy;
- identify domain ownership;
- distinguish current authority from legacy material;
- select the minimum required context for a screen;
- prevent Stitch from inventing or reviving superseded behavior;
- route unresolved decisions back to product review.

## 2. Canonical authority baseline

Campaign design must reconcile three sources in this order:

1. **Current canonical product/domain decisions** established through G1A/G1B and G2;
2. **Current production frontend/backend contracts and capabilities** where they implement those canonical decisions;
3. **Historical Campaign specifications** only for interaction intent that has not been superseded.

Current implementation references at the time of this Manifest:

| Repository | Role | Reference |
|---|---|---|
| `Piyush1087/dummy_tcs` | canonical product/design/reference library | `main` at `b4ae5bd56388bf022190e5e416cdfc1da80ccd56` |
| `Piyush1087/creator-commerce-frontend-v2-clone` | production frontend | `feature/campaign-canonical-preprod` at `22e88f89d64aaef8e3bcede991831fb70c10b7cf` |
| `Piyush1087/creator-commerce-backend-v2-clone` | production backend and runtime capabilities | `feature/consolidated-schema-preprod` at `72837f36310dad48eeadfb4d097d3b6a27617018`, including runtime merge `d7af091d70972bbab1ab17178596983cdb892964` |

Before actual Stitch execution, Codex must refresh exact repository heads and record them in the prompt context manifest.

## 3. Campaign product hierarchy

```text
Campaigns
├── Campaign List
│
├── Create / Edit Campaign
│   ├── 1. Campaign Strategy
│   ├── 2. Creator Strategy
│   └── 3. Commercial Strategy
│
└── Campaign Workspace
    ├── Campaign Header / Summary
    ├── Campaign Details
    ├── Campaign Readiness
    ├── Campaign Assets & Briefs
    │   └── Campaign Asset
    │       └── Brief(s)
    │           └── Deliverables
    └── Creator Workspace
        ├── Prospects
        ├── Applicants
        ├── Collaborations
        └── Reporting
```

The Campaign Workspace is an **orchestration surface**. It presents information from several domains without owning every domain displayed inside it.

## 4. Domain ownership

| Surface/data | Canonical owner |
|---|---|
| Campaign identity, strategy, targeting, commercial definition, lifecycle | Campaign Core |
| Brand identity and underlying Asset details | Brand Centre |
| Campaign-to-Brand-Asset relationship | Campaign Asset domain |
| Creator assignment, creative guidance, deliverables, usage rights, requirements | Brief |
| Creator discovery and ranked Candidate Pool | Marketplace Ranking / Creator Intelligence |
| Creator application and application decision | Application |
| Execution relationship and workflow | Collaboration |
| Verified Campaign performance | Reporting / Performance Intelligence |

Campaign UI may summarize or link to another domain. It must not create a Campaign-local competing version of information owned elsewhere.

## 5. Surface inventory

## 5.1 Campaign List

**Purpose:** Operational entry point showing which Campaigns exist, their state, and which need attention.

**Primary hierarchy:**

```text
Campaign identity
Campaign status
Objective
Schedule
Campaign Asset count
Creator progress
Budget
Primary next action
```

**Actions:** Open Campaign; Create Campaign; capability-driven Edit, Share, lifecycle action, and Archive.

**Important:** Campaign lifecycle is not a binary active/paused setting. Do not use a generic status Switch.

**Stitch priority:** Medium; design after the core Create Campaign and Workspace families unless execution planning changes the order.

## 5.2 Create / Edit Campaign

**Purpose:** Create or edit the Campaign-level strategic and commercial contract.

It does not create Campaign Assets, Briefs, or Brief Deliverables.

Canonical execution sequence:

```text
Create Campaign strategy
        ↓
Open Campaign Workspace
        ↓
Link Campaign Asset(s)
        ↓
Create and publish Brief(s)
        ↓
Campaign becomes execution-ready
```

### Step 1 — Campaign Strategy

Current authority includes:

- Campaign Name;
- Publishing Schedule;
- Campaign Objective;
- success-metric context where currently canonical;
- Platform;
- Visibility.

**Deliverables are not created in this step.** Any historical G2.2 text placing Expected Deliverables or an Instagram deliverables matrix inside Create Campaign is superseded by the canonical hierarchy:

```text
Campaign
└── Campaign Asset
    └── Brief
        └── Deliverables
```

### Step 2 — Creator Strategy

Current authority includes:

- Creator Archetypes;
- minimum and maximum follower range;
- audience gender;
- age range;
- geography;
- affinities/interests.

Use numeric follower range. Historical Nano/Micro/Mid-tier/Macro follower-tier selection is not authoritative.

### Step 3 — Commercial Strategy

Current authority includes:

- creator provisioning / Brand support;
- compensation model: Fixed or Negotiable;
- creator payout or `payout starting from`;
- total Campaign budget;
- advance-payment context;
- payout/payment terms where canonical.

Negotiable uses one starting offer. Historical minimum-fee plus maximum-fee behavior is superseded.

### Global wizard behavior

- three sequential steps;
- Back and Continue between steps;
- final publish action only when canonical readiness permits;
- autosave is system behavior, not a user CTA;
- field and cross-field validation follow the approved Create Campaign authority;
- draft hydration/edit must preserve saved values;
- mobile critical workflow actions use the approved Persistent Action Region above global Bottom Navigation.

Detailed fields, types, validation timing, exact copy, mobile composition, autosave, and conditional behavior belong to the Create Campaign authority and Screen Briefs.

## 5.3 Campaign Header / Summary

**Purpose:** Answer what Campaign the Brand is managing, its current state, essential context, and the most relevant available action.

**Default hierarchy:**

```text
Campaign Name
Status
Objective
Platform / Schedule
Budget
Asset / Brief summary
Capability-driven actions
```

Lifecycle changes use explicit actions. Do not use a status toggle.

Possible action mapping for visual representation:

```text
Draft + incomplete → Complete Setup
Draft + ready      → Publish
Published         → Go Live
Live              → Pause
Paused            → Resume
Completed         → Archive
Archived          → no primary lifecycle action
```

Backend capability remains authoritative; status alone does not guarantee an action is enabled.

The header is compact and operational. It does not permanently display every Campaign field.

## 5.4 Campaign Details

**Purpose:** Let the Brand inspect the Campaign definition without occupying permanent Workspace space.

Mirror the Create Campaign mental model:

```text
Strategy
Creator Strategy
Commercial Strategy
```

Use an expandable panel or contextual Drawer on desktop and an Aurora-appropriate Sheet on mobile.

Details are read-only unless the applicable capability explicitly permits Edit.

## 5.5 Campaign Readiness

**Purpose:** Explain what prevents creator execution and point to the missing requirement.

Core readiness sequence:

```text
Campaign strategy
Campaign Asset
Published Brief
```

Required representations include:

- no Campaign Asset;
- Campaign Asset without a published Brief;
- ready;
- readiness unavailable/error.

Show human-facing requirements and next actions. Do not expose schema booleans such as `executionReady=false`.

The callout disappears when the Campaign is execution-ready.

## 5.6 Campaign Assets & Briefs

**Purpose:** Show what creators are being asked to promote and the Briefs attached to each Asset.

Canonical hierarchy:

```text
Campaign
└── Campaign Asset
    └── Brief(s)
```

A Campaign Asset references an existing Brand Centre entity. Campaign does not edit the underlying entity.

Use human-facing Asset types supplied by Brand Centre, such as Product, Service, Treatment, Plan, or Experience. Do not hardcode all Assets as Products.

Recommended interaction model:

- Link Campaign Asset through desktop right Drawer / mobile full-screen Sheet;
- select Asset type;
- search Brand Centre;
- select entity;
- review read-only details;
- confirm link;
- view Asset details in read-only Drawer/Sheet;
- route modification to Brand Centre.

Each Campaign Asset is the parent visual container for its Brief summaries.

Do not render Briefs as globally floating Campaign objects.

## 5.7 Briefs

Brief owns:

- Brief Strategy;
- Deliverables;
- Creative Guidance;
- Usage Rights;
- Creator Requirements.

Brief summaries appear under the owning Campaign Asset and include the approved subset of:

- Brief name;
- Brief type;
- deliverable summary;
- status;
- application count;
- capability-driven actions.

Brief detail uses a contextual Drawer on desktop and an appropriate Sheet on mobile.

Campaign and Asset context may appear as compact read-only context. Brief must not duplicate ownership of Campaign strategy or Brand Asset information.

## 5.8 Creator Workspace

Use these peer workspace modes:

```text
Prospects | Applicants | Collaborations | Reporting
```

They are Tabs/workspace modes, not legacy pipeline stages.

There is no separate `Overview` Tab. Campaign Header, Details, Readiness, and Assets/Briefs sit above the Creator Workspace.

Use `Collaborations`, not `Active Collabs`, because the module may include in-progress and completed history.

Tabs may display meaningful non-zero counts. Mobile uses a fitting row or horizontal scrolling according to Aurora.

## 5.9 Prospects

**Purpose:** Outbound creator discovery and evaluation before application.

Prospects may come from ranked Creator Shop recommendations or approved manual addition.

Show creator identity, relevant performance/audience context, Campaign fit, recommendation reasons, best-fit Asset/Brief context, and supported actions.

Do not show an unexplained match percentage as sufficient intelligence. Explain relevant reasons where intelligence exists.

Meta or another provider is evidence/capability infrastructure, not the product authority or UI identity.

When automated discovery is unavailable/disconnected:

- explain the affected capability;
- allow supported manual creator addition;
- preserve existing Prospects;
- do not block Applications or Collaborations.

Use `Prospects`, not the old top-level `Discovery` workspace label, unless a later canonical decision explicitly changes it.

## 5.10 Applicants

**Purpose:** Review creator Applications in creator context and make application-specific decisions.

A creator appears once. Multiple Brief Applications expand within the same creator representation.

Application-specific information may include:

- applied Asset and Brief;
- creator response/commercial amount;
- Application state;
- Approve/Decline capability.

Approve/Decline acts on the Application, not on the creator identity globally.

Applicant UI should resemble a professional creator-review experience, not technical database records.

## 5.11 Creator Detail

Prospects and Applicants share a base creator detail Drawer/Sheet with contextual variation.

Potential hierarchy:

```text
Identity
Performance
Audience
Content
Campaign Fit
Campaign Context
Context-specific actions
```

The applicable detailed authority determines which fields are available. Do not invent performance metrics or fit evidence.

## 5.12 Collaborations

**Purpose:** Summarize Campaign-linked collaboration state and next action.

Campaign does not reproduce the full Collaboration workflow.

Show a compact summary such as:

- creator identity;
- Asset/Brief context;
- current collaboration state/stage summary;
- latest meaningful update;
- next action;
- Open Collaboration.

Detailed execution belongs to the Collaboration Workspace.

## 5.13 Reporting

**Purpose:** Provide verified Campaign performance when Reporting Intelligence is available.

Current MVP treatment is intentionally deferred/simple.

It may show approved Campaign objective and primary success-metric context plus an honest deferred/unavailable message.

Do not invent:

- charts;
- snapshot metrics;
- trends;
- ROI;
- reach or engagement values;
- intelligence explanations

without current reporting authority and verified data.

## 6. Campaign lifecycle vocabulary

Use this UI lifecycle vocabulary where supplied by current capability:

```text
Draft
Published
Live
Paused
Completed
Archived
```

The State Matrix owns exact transitions, readiness combinations, enabled/disabled actions, and unsupported states.

Do not infer lifecycle capabilities solely from status.

## 7. Cross-surface state families

Detailed combinations belong to the Campaign State Matrix. The module must account for these families when applicable:

### Campaign

- Draft incomplete;
- Draft ready;
- Published;
- Live;
- Paused;
- Completed;
- Archived;
- action enabled/disabled/hidden;
- loading and error.

### Assets and Briefs

- no Assets;
- active/paused Asset where supported;
- Asset without Brief;
- Asset with one/multiple Briefs;
- Draft/Published/Paused/immutable Brief as supported;
- loading and section error.

### Prospects

- unavailable/not prepared;
- loading;
- ready/populated;
- empty/no results;
- provider connected/disconnected;
- section error;
- manual addition available/unavailable.

### Applicants

- loading;
- empty;
- populated;
- one/multiple Applications per creator;
- approve/decline enabled/disabled;
- section error.

### Collaborations

- empty;
- needs attention;
- in progress;
- completed;
- section error.

### Reporting

- deferred/unavailable;
- loading where later applicable;
- populated only with canonical verified metrics;
- section error.

The Campaign Workspace should use isolated loading and error boundaries. A failure in one Creator Workspace mode must not unnecessarily break the Campaign Header or Assets/Briefs.

## 8. Copy responsibility

This Manifest establishes terminology and meaning, not final screen copy.

Copy authority is divided as follows:

| Copy type | Owner |
|---|---|
| Entity names and lifecycle vocabulary | canonical domain authority |
| Field labels, option labels, validation copy | Campaign Copy Contract / field authority |
| Empty-state and readiness copy | Campaign Copy Contract |
| Capability/action labels | Campaign capability and Copy Contract |
| Helper text | Campaign Copy Contract |
| Neutral representative content | Screen Brief |

Stitch must not rewrite approved copy to solve layout pressure.

## 9. Deferred functionality

Do not design these as available product capabilities unless a later authority explicitly activates them:

- AI Campaign Planner / Create using AI;
- AI-generated Campaign health;
- Daily Brief;
- predictive recommendations;
- advanced budget intelligence;
- Campaign version history;
- Asset versioning or Campaign-local Asset snapshots;
- creating Brand Centre Assets from Campaign;
- Asset replacement history;
- multi-Asset selection in one link operation;
- advanced Reporting charts and metrics;
- new Meta permission or provider architecture;
- new ranking formula;
- full Collaboration execution inside Campaign.

Deferred functionality may appear only as an explicitly requested coming-soon/deferred state owned by the Screen Brief.

## 10. Prohibited legacy concepts

Do not use or revive:

- Zone 1 / Zone 2 / Zone 3;
- Campaign Master Panel;
- Products & Briefs Repository;
- Product as the universal Campaign Asset type;
- Creator Pipeline as the parent Campaign domain;
- Campaign Shell as domain authority;
- Campaign Overview as a Creator Workspace Tab;
- generic Active/Paused status toggle;
- `Active Collabs` as the final workspace name;
- full Collaboration stage execution inside Campaign;
- minimum plus maximum Negotiable fee;
- follower-tier labels as Campaign targeting authority;
- Campaign-owned deliverables inside Create Campaign;
- Campaign-local editing of Brand Centre Asset data;
- unexplained Match score as sufficient recommendation context;
- technical schema, provider, or database language in product UI;
- fake Reporting metrics or decorative charts.

Historical screens containing these concepts are visual references only and must not be treated as current product authority.

## 11. Unresolved decisions

The following must be confirmed by current product/frontend/backend authority before freezing affected Screen Briefs:

- final Campaign Name length rule and exact validation copy;
- whether Geography is required and how `Global`/no-location intent is represented;
- final Visibility default and required behavior;
- whether creator provisioning is single- or multi-select in all supported cases;
- final Advance Payment and Payout Terms options/requirements;
- exact Draft creation and first-autosave timing;
- final success-metric visibility/editability in Create Campaign;
- exact current lifecycle transitions and capability payloads;
- any frontend/backend mismatch affecting screen-visible behavior.

Do not let Stitch decide these.

## 12. Context routing by task

For the current execution cycle, **Create Campaign** and the approved **Campaign Page / Campaign Workspace** rows are active. Campaign List and provider-populated Discovery/Reporting remain future routing guidance.

| Stitch task | Attach with this Manifest |
|---|---|
| Campaign module grounding | Surface Authority Matrix; State Matrix; Copy Contract; Legacy/Prohibited list; Handoff Map |
| Campaign List | List authority section; applicable State Matrix; List Screen Brief |
| Create Campaign | Create Campaign UX authority; field/validation/copy contract; applicable State Matrix; step Screen Brief |
| Campaign Workspace master | Workspace Authority Matrix; State Matrix summary; master-layout Screen Brief |
| Campaign Header/Details/Readiness | relevant Workspace Matrix sections; capability/state authority; Screen Brief |
| Assets & Briefs | Campaign Asset and Brief authority; relevant state/copy sections; Screen Brief |
| Prospects | ranking/creator-intelligence UI authority; provider states; Screen Brief |
| Applicants | Application UI authority; Creator detail authority; Screen Brief |
| Collaborations | Collaboration summary boundary; relevant State Matrix; Screen Brief |
| Reporting | Reporting deferred/current authority; Screen Brief |
| Responsive adaptation | approved parent screen ID; target viewport Screen Brief; Shell & Viewport Context |
| State expansion | approved base screen ID; only relevant State Matrix section; state brief |

Do not attach every Campaign document to every screen.

## 13. Stitch target families

The Campaign Handoff Map should ultimately route these design families:

1. Campaign List;
2. Create Campaign wizard family;
3. Campaign Workspace master layout;
4. Campaign Header and Details;
5. Campaign Readiness;
6. Campaign Asset Card with nested Briefs;
7. Link/View Campaign Asset Drawer/Sheet;
8. Brief summary and Brief detail Drawer/Sheet;
9. Creator Workspace navigation;
10. Prospect creator-card family;
11. Applicant creator-card and multiple-Application expansion;
12. Creator Detail Drawer/Sheet;
13. Collaboration summary family;
14. Reporting deferred state;
15. selected loading, empty, error, disconnected, disabled, and mobile/keyboard states.

The Handoff Map determines which representative screens and variants are actually generated. This list does not require one prompt per item.

## 14. Module grounding response required from Stitch

Before Campaign UI generation, Stitch must return—without generating UI—its understanding of:

1. the Campaign surface hierarchy;
2. the three-step Create Campaign flow;
3. the separation between Campaign creation and execution setup;
4. the hierarchy Campaign → Campaign Asset → Brief → Deliverables;
5. the Campaign Workspace as orchestration rather than owner of every domain;
6. the distinction between Prospects, Applicants, and Collaborations;
7. the Creator Workspace Tab model;
8. Brand Centre ownership of underlying Asset data;
9. Brief ownership of deliverables;
10. capability-driven lifecycle actions;
11. Reporting as deferred unless verified authority exists;
12. prohibited legacy concepts;
13. unresolved decisions that block a requested screen.

Codex must validate this response against the current Campaign authority before screen generation.

## 15. Relationship to detailed Campaign documents

This Manifest must be used with separately maintained:

- `03A — Campaign Surface Authority Matrix`;
- `03B — Create Campaign UX Authority`;
- `03C — Campaign Workspace UX Authority`;
- `03D — Campaign State Matrix`;
- `03E — Campaign Copy Contract`;
- `03F — Campaign Stitch Handoff Map`;
- `03G — Campaign Legacy and Prohibited Concepts`;
- `04 — Campaign Screen Briefs`.

Until those documents are created and approved, this Manifest may guide planning and grounding but is not sufficient by itself for final screen generation.
