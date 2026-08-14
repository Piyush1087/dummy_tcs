# 03A — Campaign Surface Authority Matrix

**Status:** Review draft 0.1  
**Audience:** Product, UX, Codex, and Stitch  
**Scope:** Brand-side Campaign surfaces  
**Parent authority:** `03 — Campaign Stitch Manifest`  
**Purpose:** Freeze what each Campaign surface contains, owns, permits, and delegates before visual design  
**Last material update:** 14 August 2026

> **Current execution scope:** Only **Create / Edit Campaign** has completed Phase G and is eligible for screen generation in the present Stitch exercise. Shared Campaign context remains valid for grounding the retained Campaign Stitch project. Every Campaign List and Campaign Workspace section in this Matrix is provisional planning context and must be revalidated and frozen through its own Phase G work before it becomes screen-generation or frontend-implementation authority.

## 1. How to use this Matrix

This document is the Campaign module's surface-level UX authority.

For every surface it freezes:

```text
Purpose
→ Data authority
→ Edit boundary
→ Primary actions
→ Information hierarchy
→ Interaction model
→ Required states
→ Mobile behavior
→ Stitch requirement
→ Deferred boundary
```

It does not replace field contracts, validation rules, lifecycle capabilities, the detailed State Matrix, the Copy Contract, or individual Screen Briefs.

When a later detailed authority conflicts with this Matrix, Codex must stop and reconcile the conflict rather than silently choose one.

## 2. Product reading order

The Campaign experience follows this hierarchy:

```text
Campaign List
    ↓
Create Campaign
    ↓
Campaign Workspace
    ├── What is the Campaign?
    ├── What is being promoted?
    └── Who is executing it?
```

The Workspace is an orchestration surface. It composes several domains without taking ownership of their underlying records.

## 3. Campaign surface inventory

```text
Campaigns
├── Campaign List
├── Create / Edit Campaign
│   ├── Campaign Strategy
│   ├── Creator Strategy
│   └── Commercial Strategy
└── Campaign Workspace
    ├── Campaign Header / Summary
    ├── Campaign Details
    ├── Campaign Readiness
    ├── Campaign Assets & Briefs
    │   ├── Link / View Campaign Asset
    │   └── Brief Summary / Detail
    └── Creator Workspace
        ├── Prospects
        ├── Applicants
        ├── Collaborations
        └── Reporting
```

## 4. Summary authority matrix

| Surface | Primary purpose | Canonical owner | Campaign-local editability | Primary interaction |
|---|---|---|---|---|
| Campaign List | Find and manage Campaigns | Campaign Core | Capability-driven | Responsive list/card collection |
| Create / Edit Campaign | Define Campaign strategy and commercial contract | Campaign Core | Editable when capability permits | Three-step wizard |
| Campaign Header | Identify Campaign, state, context, and next action | Campaign Core | Actions only; no inline field editing | Compact persistent summary |
| Campaign Details | Inspect full Campaign definition | Campaign Core | Read-only by default; route to Edit | Expandable panel / Drawer / Sheet |
| Campaign Readiness | Explain missing execution requirements | Aggregated Campaign capability | Not directly editable | Contextual callout with routed CTA |
| Campaign Assets & Briefs | Organize what creators promote and produce | Campaign Asset + Brief | Relationship and Brief actions only | Parent Asset cards with nested Briefs |
| Link / View Asset | Link and inspect Brand Centre entities | Brand Centre + Campaign Asset relationship | Link/unlink only; Asset itself read-only | Drawer on desktop; Sheet on mobile |
| Brief Summary / Detail | Define creator assignment and deliverables | Brief | Capability-driven | Nested summary plus Drawer/Sheet |
| Creator Workspace navigation | Switch between creator-related modes | Campaign orchestration | Not applicable | Tabs/workspace modes |
| Prospects | Discover and evaluate creators before application | Ranking + Creator Intelligence | Supported prospect actions only | Creator-card collection + detail |
| Applicants | Review and decide Applications | Application | Application-specific actions | Creator-card collection + expansion/detail |
| Collaborations | Monitor execution and route next action | Collaboration | Summary only | Compact summaries linking out |
| Reporting | Present verified Campaign performance | Reporting Intelligence | Read-only | Deferred state or verified reporting |

## 5. Surface authority

## 5.1 Campaign List

**Purpose**

Provide the operational entry point for finding Campaigns, understanding their current state, seeing where attention is required, and starting a new Campaign.

**Data authority**

- Campaign identity, lifecycle, objective, schedule, commercial summary, and capabilities: Campaign Core.
- Asset/Brief and creator progress counts: summaries from their owning domains.
- Attention indicators: only from canonical capability or status data.

**Edit boundary**

No inline editing of Campaign strategy. Lifecycle and lower-frequency actions are capability-driven.

**Primary actions**

- Create Campaign;
- open Campaign Workspace;
- resume incomplete Draft where supported;
- contextual lifecycle action where supported;
- Share, Edit, Archive, or Restore only when exposed by capability.

**Information hierarchy**

```text
Campaign identity
Status
Objective and schedule
Asset / Brief / creator progress
Budget summary
Attention or next-action context
Available action
```

**Interaction model**

Use a responsive operational collection. Desktop may use medium-density rows or cards; mobile uses stacked cards. Filters, search, and pagination are included only when current product/runtime authority supports them.

**Required states**

- loading;
- populated across meaningful lifecycle states;
- no Campaigns;
- no search/filter results, if search/filter exists;
- list-level error;
- action enabled, disabled, or hidden according to capability.

**Mobile behavior**

Preserve Campaign identity, status, the most important context, and one clear action. Secondary metadata and actions may collapse into progressive disclosure. Do not squeeze a desktop table into the viewport.

**Stitch requirement**

Design representative populated, empty, and mobile variants after the Create Campaign and Workspace visual language is established.

**Deferred boundary**

Do not invent AI health scores, predictive recommendations, advanced analytics, bulk lifecycle changes, or new filtering dimensions.

## 5.2 Create / Edit Campaign

**Purpose**

Define the Campaign-level strategic, creator-targeting, and commercial contract through a comprehensible three-step flow.

**Data authority**

Campaign Core and the approved Campaign field/validation contracts.

**Edit boundary**

Campaign fields are editable only while the Campaign capability permits. Campaign Assets, Briefs, and Deliverables do not belong in this flow.

**Primary actions**

- Back;
- Continue;
- Publish or approved final action;
- exit/close according to the approved Draft-preservation behavior.

Autosave is system behavior and is never the primary CTA.

**Information hierarchy**

```text
Campaign identity and progress
Current step title and concise orientation
Grouped fields for the current decision
Validation and conditional guidance
Persistent workflow actions
```

**Interaction model**

Three sequential steps:

1. Campaign Strategy;
2. Creator Strategy;
3. Commercial Strategy.

Use progressive disclosure for conditional fields. Preserve entered data across navigation and hydration. Detailed order, field types, defaults, validation, and copy belong to `03B — Create Campaign UX Authority`.

**Required states**

- new Draft;
- hydrated Draft;
- valid incomplete step;
- invalid field and cross-field combinations;
- saving, saved, and save failure;
- conditional field states;
- final action enabled/disabled;
- loading and unrecoverable load error;
- location search ready, loading, results, no results, error, and provider-blocked/manual fallback where canonical.

**Mobile behavior**

- single-column composition;
- clear current-step orientation;
- compact copy without changing approved meaning;
- fields remain comfortably tappable;
- critical actions sit in the Persistent Action Region above global Bottom Navigation;
- keyboard-open state must retain access to current input and relevant action;
- never design a second app shell.

**Stitch requirement**

Create one representative desktop frame per step, one representative mobile flow, and only the state variants selected by the Handoff Map. Create Campaign must be designed inside the canonical Content Area supplied by the global shell context.

**Deferred boundary**

Do not design AI Campaign creation, Assets, Briefs, Deliverables, advanced budget intelligence, or unsupported multi-platform packages.

## 5.3 Campaign Workspace master

**Purpose**

Provide one management surface that answers:

```text
What is the Campaign?
→ What is being promoted and requested?
→ Who is executing it?
```

**Data authority**

Composed from Campaign Core, Campaign Asset, Brief, Ranking/Creator Intelligence, Application, Collaboration, and Reporting Intelligence.

**Edit boundary**

The Workspace delegates edits and execution to the owning domain. It does not create a duplicate Campaign-local record model.

**Primary actions**

The Campaign header supplies the contextual Campaign action. Each lower region supplies its own domain-appropriate action.

**Information hierarchy**

```text
Breadcrumb / route context
Campaign Header
Campaign Details access
Campaign Readiness, when relevant
Campaign Assets & Briefs
Creator Workspace Tabs
Active Creator Workspace surface
```

**Interaction model**

One vertically coherent page with independently loading regions. The three visual regions are not named or coded as Zones.

**Required states**

- progressive loading by region;
- complete populated Workspace;
- incomplete execution setup;
- empty lower surfaces;
- isolated section errors;
- archived/read-only composition where applicable.

**Mobile behavior**

Stack regions in the same reading order. Creator Workspace Tabs may scroll horizontally. Details and contextual records use Sheets. Preserve the global mobile Header and Bottom Navigation dimensions from Aurora 5.0.

**Stitch requirement**

This is the parent visual authority for all Workspace descendants. Stitch should establish the master desktop and mobile composition before isolated card, Drawer, Sheet, or state expansion work.

**Deferred boundary**

Do not restore the legacy Campaign Shell, Zones, Overview Tab, or one unified creator pipeline.

## 5.4 Campaign Header / Summary

**Purpose**

Identify the Campaign, communicate its lifecycle and essential context, and expose the most relevant available action.

**Data authority**

Campaign Core plus approved summary counts.

**Edit boundary**

No inline strategy editing. Status is a badge, not a toggle. Lifecycle transitions are explicit capability-driven actions.

**Primary actions**

- one contextual primary action;
- Share where supported;
- Edit where supported;
- lower-frequency actions in More.

**Information hierarchy**

```text
Campaign name + status
Objective
Platform / schedule
Budget
Asset / Brief summary
Primary and secondary actions
```

**Interaction model**

Compact operational header. The full Campaign definition is delegated to Campaign Details.

**Required states**

- Draft incomplete;
- Draft ready;
- Published;
- Live;
- Paused;
- Completed;
- Archived;
- action enabled, disabled, hidden, and in progress;
- header loading/error where unavoidable.

**Mobile behavior**

Retain Campaign name, status, essential context, and primary action. Move secondary actions to progressive disclosure without changing Aurora 5.0's canonical shell/header dimensions.

**Stitch requirement**

Design as part of the Workspace master, then expand only selected lifecycle/capability variants.

**Deferred boundary**

No generic Active switch, invented lifecycle transition, editable fields, AI health score, or decorative performance metric.

## 5.5 Campaign Details

**Purpose**

Allow inspection of the Campaign definition without permanently consuming Workspace space.

**Data authority**

Campaign Core.

**Edit boundary**

Read-only by default. A supported Edit action routes to the canonical edit experience.

**Primary actions**

- open/close details;
- Edit Campaign when permitted.

**Information hierarchy**

Mirror Create Campaign:

```text
Campaign Strategy
Creator Strategy
Commercial Strategy
```

**Interaction model**

Use an approved expandable panel or contextual Drawer on desktop and an Aurora-appropriate Sheet on mobile. Do not create a second permanent master panel.

**Required states**

- complete details;
- partial/legacy record with unavailable values;
- loading;
- error;
- editable capability present/absent.

**Mobile behavior**

Use a full-height or fitting Sheet with readable grouped sections and safe closing behavior. Edit, if available, remains distinct from inspection.

**Stitch requirement**

Design one representative complete state and its mobile adaptation. Use canonical copy/data labels from the later Copy Contract.

**Deferred boundary**

No inline field editing, history/version comparison, or invented audit information.

## 5.6 Campaign Readiness

**Purpose**

Explain why creator execution cannot begin and route the Brand to the next missing requirement.

**Data authority**

Aggregated readiness/capability derived by the current Campaign execution contract.

**Edit boundary**

Readiness itself is not edited. The CTA routes to the owning missing requirement.

**Primary actions**

- complete Campaign strategy, if applicable;
- link Campaign Asset;
- create or publish Brief;
- retry readiness when an error is recoverable.

**Information hierarchy**

```text
Human-readable setup status
Missing requirement(s)
Consequence
One next-best action
```

**Interaction model**

Compact contextual callout near the Campaign header/Assets boundary. It disappears when ready.

**Required states**

- Campaign definition incomplete;
- no Campaign Asset;
- Asset exists but no published Brief;
- ready and callout absent;
- readiness unavailable/error;
- CTA enabled/disabled.

**Mobile behavior**

Keep the message concise and action prominent without using a permanent bottom action unless the Screen Brief explicitly requires it.

**Stitch requirement**

Design the two most representative blocked states plus error treatment; ready is represented by absence.

**Deferred boundary**

No schema booleans, backend terminology, readiness score, or invented requirement.

## 5.7 Campaign Assets & Briefs

**Purpose**

Show what creators will promote and organize each Asset's Briefs beneath it.

**Data authority**

- underlying Asset identity/details: Brand Centre;
- Campaign-to-Asset relationship: Campaign Asset domain;
- Brief and Deliverables: Brief domain.

**Edit boundary**

The Campaign may link/unlink where supported and act on Briefs. It cannot edit the underlying Brand Centre entity.

**Primary actions**

- Link Campaign Asset;
- View Asset;
- Create Brief;
- View/Edit/Publish/Pause/Resume Brief according to capability;
- route Asset editing to Brand Centre.

**Information hierarchy**

```text
Section purpose + Link action
Campaign Asset parent card
    Asset identity and type
    supporting read-only summary
    Brief count / relationship state
    nested Brief summaries and actions
```

**Interaction model**

Campaign Asset cards are parent containers. Briefs never float as unrelated Campaign records.

**Required states**

- no Assets;
- one/multiple Assets;
- Asset without Brief;
- Asset with one/multiple Briefs;
- relevant Asset relationship state;
- Draft/Published/Paused/immutable Brief where supported;
- section loading;
- isolated section error.

**Mobile behavior**

Stack Asset cards. Preserve parent-child hierarchy without excessive nesting or horizontal compression. Drawers adapt to Sheets.

**Stitch requirement**

Design the parent card family with zero, one, and multiple Brief representations. Use neutral Asset types so the component is not hardcoded to Product.

**Deferred boundary**

No Campaign-local Asset editing, Asset creation, multi-Asset selection in one link operation, replacement history, or Asset versioning.

## 5.8 Link / View Campaign Asset

**Purpose**

Link an existing Brand Centre entity to the Campaign and inspect linked Asset information.

**Data authority**

Brand Centre supplies selectable entities and details; Campaign Asset owns the relationship.

**Edit boundary**

Link/unlink relationship only. Underlying details are read-only and route to Brand Centre for modification.

**Primary actions**

- choose Asset type;
- search/select Brand Centre entity;
- confirm Link Asset;
- cancel/close;
- View Asset;
- Edit in Brand Centre via routed link.

**Information hierarchy**

```text
Asset type
Brand Centre search and results
Selected Asset preview
Read-only supporting details
Relationship confirmation
```

**Interaction model**

Right-side Drawer on desktop; full-screen or appropriate Sheet on mobile. View mode uses the same family with read-only hierarchy.

**Required states**

- initial;
- search loading;
- results;
- no results;
- selected preview;
- link in progress/success/failure;
- unavailable Brand Centre data;
- already linked conflict where runtime supports detection.

**Mobile behavior**

Use a Sheet with a sticky confirmation region when selection creates a long scroll. Respect global Bottom Navigation/safe-area geometry.

**Stitch requirement**

Design selected-link and read-only-view frames; derive search/empty/error states from the approved base.

**Deferred boundary**

No Create Asset shortcut unless later authorized, no local modifications, and no hardcoded Product-only language.

## 5.9 Brief Summary / Detail

**Purpose**

Define and inspect what creators should produce for a specific Campaign Asset.

**Data authority**

Brief owns Brief Strategy, Deliverables, Creative Guidance, Usage Rights, and Creator Requirements.

**Edit boundary**

Capability-driven. Draft is editable; later mutability depends on the canonical Brief/collaboration capability, not frontend inference.

**Primary actions**

- Create Brief;
- View;
- Edit;
- Publish;
- Pause/Resume where supported.

**Information hierarchy**

```text
Brief name and type
Deliverable summary
Status
Application context/count
Available actions
```

Detail hierarchy:

```text
Campaign / Asset context
Brief Strategy
Deliverables
Creative Guidance
Usage Rights
Creator Requirements
```

**Interaction model**

Summary is nested inside its Asset card. Detail uses Drawer/Sheet. A separate Brief creation/edit flow may be defined later by its Screen Brief.

**Required states**

- Draft;
- Published with no active collaboration;
- Paused where supported;
- immutable due to collaboration;
- loading/error;
- capability/action variations.

**Mobile behavior**

Use compact nested summaries and a readable Sheet for detail. Critical edit/publish actions may use a sticky Sheet footer when required.

**Stitch requirement**

Design one reusable summary family and one detailed inspection family. Do not invent Brief fields before detailed authority exists.

**Deferred boundary**

No duplicate Campaign strategy, no editing underlying Asset data, and no frontend-derived mutability rule.

## 5.10 Creator Workspace navigation

**Purpose**

Switch between distinct creator-related operational modes without representing them as stages of one pipeline.

**Data authority**

Campaign orchestration labels and each child domain's summary count.

**Edit boundary**

Not applicable.

**Primary actions**

Select:

```text
Prospects | Applicants | Collaborations | Reporting
```

**Information hierarchy**

Active mode first, meaningful non-zero count where useful, active content immediately below.

**Interaction model**

Tabs/workspace modes. Tabs may become sticky at the top of the Creator Workspace during long content scrolling.

**Required states**

- each active Tab;
- counts present/absent;
- child surface loading/error;
- disabled mode only if current capability explicitly requires it.

**Mobile behavior**

Use a fitting or horizontally scrollable Tab row. Do not abbreviate labels into unclear terminology.

**Stitch requirement**

Establish the Tab family in the Workspace master; child prompts inherit it.

**Deferred boundary**

No Overview Tab, Active Collabs label, stage-stepper, or Creator Pipeline parent concept.

## 5.11 Prospects

**Purpose**

Discover and evaluate creators before they apply.

**Data authority**

Marketplace Ranking and Creator Intelligence own Candidate Pool, fit assessment, and explanation. Approved manual prospect records may supplement them.

**Edit boundary**

Campaign UI may perform supported prospect actions. It does not edit canonical creator intelligence.

**Primary actions**

- Find Creators where discovery is available;
- Filters where authority supports them;
- Add Creator Manually where supported;
- View Creator;
- Invite or Ignore where supported.

**Information hierarchy**

```text
Creator identity
Relevant performance / audience evidence
Campaign fit and explainable reasons
Best-fit Campaign Asset / Brief context
Prospect actions
```

**Interaction model**

Reusable medium-density creator cards with contextual detail Drawer/Sheet. A score alone is insufficient; reasons carry the recommendation meaning.

**Required states**

- not prepared/unavailable;
- loading;
- populated;
- empty/no matches;
- provider connected/disconnected;
- manual addition available/unavailable;
- existing Prospects retained during provider loss;
- isolated error;
- action enabled/disabled/in progress.

**Mobile behavior**

Cards become vertical while retaining identity, strongest evidence, fit reason, and one clear next action. Secondary detail moves to the Creator Sheet.

**Stitch requirement**

Design populated and provider-disconnected/empty states plus the Prospect variation of Creator Detail. Provider branding must not become the product identity.

**Deferred boundary**

No new ranking formula, invented intelligence, direct Meta architecture, unexplained percentage, or forced dependency that blocks Applicants/Collaborations.

## 5.12 Applicants

**Purpose**

Review creator Applications in professional creator context and make Application-specific decisions.

**Data authority**

Creator profile/intelligence supplies creator context; Application owns applied Brief, response, commercial amount, state, and decision capability.

**Edit boundary**

Approve/Decline applies to an Application, never to the creator identity globally.

**Primary actions**

- View Creator/Application context;
- expand multiple Applications;
- Approve;
- Decline.

**Information hierarchy**

```text
Creator identity and relevant evidence
Applied Campaign Asset / Brief
Creator response / commercial context
Application state
Application-specific actions
```

**Interaction model**

One creator representation. Multiple Brief Applications expand within it. Use the shared Creator Detail family with Applicant-specific context and footer actions.

**Required states**

- loading;
- no Applications;
- one Application;
- multiple Applications for one creator;
- mixed Application states;
- approve/decline enabled, disabled, in progress, success, and error;
- section error.

**Mobile behavior**

Prioritize creator identity, applied Brief, response, and decision context. Actions may become sticky within the Application/Creator Sheet when the brief requires it.

**Stitch requirement**

Design single- and multiple-Application creator cards, empty state, and Applicant Creator Detail variation.

**Deferred boundary**

No technical database presentation, creator-global approval, invented Application states, or full Collaboration workflow.

## 5.13 Creator Detail

**Purpose**

Provide enough creator evidence and Campaign context to support a Prospect or Applicant decision.

**Data authority**

Creator Intelligence, Ranking explanation, and the active Prospect/Application context.

**Edit boundary**

Read-only creator information. Only context-specific Campaign/Application actions are editable.

**Primary actions**

Prospect variation: Invite/Ignore where supported.  
Applicant variation: Approve/Decline the selected Application where supported.

**Information hierarchy**

```text
Identity
Performance
Audience
Content
Campaign Fit
Campaign Context
Context-specific actions
```

**Interaction model**

Shared right-side Drawer on desktop and Sheet on mobile. Context-specific content and sticky footer actions vary without creating unrelated components.

**Required states**

- Prospect;
- Applicant with one Application;
- Applicant with multiple Applications/selected Application;
- partial intelligence;
- loading;
- error;
- action capability variations.

**Mobile behavior**

Use a full-screen or fitting Sheet with stable identity, section navigation/progressive disclosure if needed, and actions above the safe area.

**Stitch requirement**

This is a high-priority reusable component. Design one base and explicit Prospect/Applicant adaptations.

**Deferred boundary**

No invented creator metrics, inferred certainty, creator-profile editing, or action outside the active context.

## 5.14 Collaborations

**Purpose**

Summarize Campaign-linked execution, highlight the next meaningful action, and route to the Collaboration Workspace.

**Data authority**

Collaboration domain.

**Edit boundary**

Campaign is summary-only. Full workflow execution belongs to Collaboration Workspace.

**Primary actions**

- Open Collaboration;
- filter Needs Attention, In Progress, or Completed only if supported.

**Information hierarchy**

```text
Creator identity
Campaign Asset / Brief context
Current collaboration summary
Latest meaningful update
Next action
Open Collaboration
```

**Interaction model**

Compact summary cards/rows linked to the owning Workspace.

**Required states**

- empty;
- Needs Attention;
- In Progress;
- Completed;
- loading;
- isolated error.

**Mobile behavior**

Stack summaries with next action and Open Collaboration visible. Do not reproduce a desktop stage board.

**Stitch requirement**

Design one representative populated family and empty state. Reuse approved creator identity patterns where appropriate.

**Deferred boundary**

No six-stage workflow, content review execution, payment workflow, or invented quick action inside Campaign.

## 5.15 Reporting

**Purpose**

Present verified Campaign performance when canonical Reporting Intelligence exists; otherwise communicate the current limitation honestly.

**Data authority**

Reporting / Performance Intelligence.

**Edit boundary**

Read-only.

**Primary actions**

None in the deferred MVP state unless a later authority adds a supported route.

**Information hierarchy**

Current deferred treatment may show:

```text
Reporting title
Honest availability message
Campaign objective
Approved primary success-metric context
```

**Interaction model**

Simple state inside the Reporting Tab. Later verified reporting must receive separate authority and Screen Briefs.

**Required states**

- deferred/unavailable;
- loading, only when a reporting source exists;
- verified populated state, only after authority is added;
- isolated error.

**Mobile behavior**

Keep the deferred message and context compact. Do not use empty decorative chart containers.

**Stitch requirement**

Design the honest deferred state only during the current Campaign handoff unless verified reporting authority is supplied.

**Deferred boundary**

No charts, reach, engagement, ROI, trends, forecasts, recommendations, or snapshot metrics without verified authority.

## 6. Cross-surface ownership rules

These rules apply everywhere:

1. Campaign Core owns the Campaign definition and lifecycle.
2. Brand Centre owns underlying Asset data.
3. Campaign Asset owns the relationship, not a copied Asset record.
4. Brief owns Deliverables and creator-production requirements.
5. Ranking/Creator Intelligence owns recommendation evidence.
6. Application owns application decisions.
7. Collaboration owns execution workflow.
8. Reporting Intelligence owns verified performance.
9. Campaign Workspace may summarize another domain but must route detailed work to its owner.
10. Backend capability is authoritative for whether an action is enabled, disabled, or hidden.

## 7. Cross-surface interaction rules

- Use explicit lifecycle actions, never a generic status toggle.
- Use Drawer on desktop and an Aurora-appropriate Sheet on mobile for contextual inspection.
- Use full-page navigation only when the workflow genuinely requires sustained multi-step work.
- Use the global shell; Stitch designs the Content Area only.
- Keep one primary action per decision context.
- Use persistent actions on mobile only where task completion materially depends on them.
- Isolate loading and errors by region after the Workspace identity has loaded.
- Never compress approved copy into rewritten meaning merely to fit a layout.
- Do not expose database, schema, provider, or infrastructure terminology.

## 8. Stitch routing summary

Only Create Campaign routing is active in the current Stitch cycle. All other rows are retained for future planning and are not authorization to generate those surfaces.

| Requested design | Required Campaign context in addition to global files |
|---|---|
| Campaign List | Manifest + Matrix §5.1 + applicable state/copy excerpt + Screen Brief |
| Create Campaign | Manifest + Matrix §5.2 + `03B` + applicable state/copy excerpt + Screen Brief |
| Workspace master | Manifest + Matrix §§5.3–5.6 and 5.10 + `03C` summary + state summary + Screen Brief |
| Assets/Briefs | Manifest + Matrix §§5.7–5.9 + relevant `03C/03D/03E` excerpts + Screen Brief |
| Prospects | Manifest + Matrix §§5.10–5.11 and 5.13 + relevant states/copy + Screen Brief |
| Applicants | Manifest + Matrix §§5.10, 5.12–5.13 + relevant states/copy + Screen Brief |
| Collaborations | Manifest + Matrix §§5.10 and 5.14 + relevant states/copy + Screen Brief |
| Reporting | Manifest + Matrix §§5.10 and 5.15 + deferred-state copy + Screen Brief |
| Responsive/state adaptation | Approved parent screen reference + only the relevant Matrix/state excerpt + target Screen Brief |

Codex should create a compact task packet from these sources. Stitch should not receive the entire Campaign library for every prompt.

## 9. Decisions reserved for later Campaign authorities

This Matrix deliberately does not freeze:

- field-by-field types, order, defaults, and validation;
- exact user-facing copy;
- exact lifecycle transition payloads;
- exact capability logic;
- autosave timing and recovery mechanics;
- final Create Campaign conditional rules;
- complete Brief creation/edit UX;
- exact Prospect filters and discovery controls;
- exact Applicant status vocabulary;
- verified Reporting layouts or metrics;
- which representative variants receive separate Stitch generation.

Those belong respectively to `03B`, `03C`, `03D`, `03E`, `03F`, and the `04` Screen Briefs.

## 10. Freeze test

Before approving a Campaign Screen Brief, Codex must be able to answer:

1. What is this surface for?
2. Which domain owns every displayed record?
3. What can the Brand edit here?
4. What is the one primary action?
5. What information is permanent versus progressive disclosure?
6. Which states materially change the composition?
7. How does the interaction adapt inside the canonical mobile shell?
8. What exactly is Stitch being asked to design?
9. Which functionality must not appear?
10. Which unresolved decision, if any, blocks generation?

If any answer is unclear, the Screen Brief is not ready for Stitch.
