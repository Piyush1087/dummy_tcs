# 00 — Stitch Design Library Guide

**Status:** Review draft 0.1  
**Applies to:** All Creator Shop modules designed through Stitch  
**Purpose:** Define the document architecture, authority order, context-loading strategy, project continuity, and lifecycle of the Stitch design library

## 1. Objective

The Stitch Design Library enables Codex and human operators to generate consistent Creator Shop UI through Stitch without repeatedly reconstructing product, platform, and design context.

The library must balance two requirements:

1. provide enough authority for high-quality, correct design output;
2. avoid oversized context packages, unnecessary reasoning cycles, and repeated uploads.

The library separates persistent source authority, Stitch-facing context, Codex execution instructions, module-specific design authority, screen briefs, and later production-implementation instructions.

## 2. Library architecture

```text
Stitch Design Library
│
├── 00 — Library Guide
│   └── document hierarchy, authority, context loading and continuity
│
├── 01 — Global Stitch Context
│   ├── Creator Shop Platform Context
│   ├── Aurora 5.0 — Stitch Context
│   ├── Application Shell & Viewport Context
│   └── Global Stitch Design Instructions
│
├── 02 — Codex Stitch Execution
│   ├── Codex Stitch Runbook
│   ├── Prompt Assembly Rules
│   ├── Output Retrieval Contract
│   ├── Review & Revision Protocol
│   └── Stitch Artifact Registry Template
│
├── 03 — Module Manifests
│   └── <Module>
│       ├── Module Stitch Manifest
│       ├── Surface Authority Matrix
│       ├── State Matrix
│       ├── Copy Contract
│       ├── Stitch Handoff Map
│       └── Legacy and Prohibited Concepts
│
├── 04 — Screen Briefs
│   └── <Module>
│       └── one brief for each coherent surface or screen family
│
└── 05 — Implementation Consumption
    ├── Codex Stitch-to-Frontend Runbook
    ├── Design-to-Production Mapping
    ├── Reuse/Rebuild Decision Rules
    └── Visual QA and Acceptance
```

Section `05 — Implementation Consumption` is a later phase. It must not be mixed into prompts sent to Stitch.

## 3. Document audiences

Each document must have one primary audience.

| Document group | Primary audience | Sent to Stitch? |
|---|---|---:|
| Global Stitch Context | Stitch | Yes, selectively |
| Codex Stitch Execution | Codex/operator | No |
| Module Manifest and authority documents | Stitch and Codex | Yes, selectively |
| Screen Brief | Stitch and Codex | Yes |
| Implementation Consumption | Codex/frontend team | No |

Do not place Codex execution mechanics or frontend implementation policy inside Stitch-facing documents.

## 4. Authority order

The governing priority is:

1. canonical product and domain decisions identified by the current Module Manifest;
2. canonical Aurora Design System 5.0;
3. Creator Shop Platform Context;
4. Application Shell & Viewport Context;
5. Global Stitch Design Instructions;
6. approved module authority documents;
7. the current Screen Brief;
8. the approved parent/base Stitch screen, when generating a revision, responsive adaptation, or state variant;
9. Stitch's design interpretation.

A lower-level document may specialize a higher-level rule but may not contradict or silently replace it.

When two source documents conflict, Codex must resolve the conflict before asking Stitch to generate UI.

## 5. Context-efficiency principles

The library is not intended to be uploaded in full for every prompt.

### 5.1 Load context progressively

Use three stages:

1. **Platform grounding:** global platform, design-system, shell, and generation context.
2. **Module grounding:** only the authority needed to understand the selected module.
3. **Screen execution:** one focused brief plus only the governing context required for that surface or revision.

### 5.2 Separate canonical sources from Stitch extracts

Canonical source documents remain complete and authoritative. Stitch-facing extracts should contain the exact operational rules needed for design generation, without unrelated engineering or historical detail.

Every extract must record:

- canonical source name;
- canonical source version or commit;
- extract version;
- included scope;
- conflict rule pointing back to the canonical source.

An extract must not reinterpret a canonical decision.

### 5.3 Do not repeat the same rule across documents

Each rule should have one owner:

- platform meaning and UX philosophy → Platform Context;
- visual and component rules → Aurora 5.0 Stitch Context;
- reserved shell geometry and browser frames → Shell & Viewport Context;
- general generation behavior → Global Stitch Design Instructions;
- module terminology, ownership and states → Module Manifest documents;
- exact screen composition and state → Screen Brief.

Other documents should reference the owner rather than reproduce long sections.

### 5.4 Use focused prompts

One generation prompt should target one coherent screen or state family. Do not combine unrelated surfaces merely to reduce the number of prompts.

Conversely, do not split one coherent design decision across many tiny prompts. Variants that share the same hierarchy and component family may be generated together after the representative base is approved.

### 5.5 Reuse approved context and screens

When Stitch reliably retains project context, subsequent prompts should reference the approved project and screen lineage instead of uploading the complete library again.

If retention cannot be verified, Codex must reattach the minimum governing context. It must not assume memory silently.

## 6. Global Stitch Context

### 6.1 Creator Shop Platform Context

Defines:

- what Creator Shop is;
- primary user groups;
- platform-level product relationships;
- operational and AI-assisted UX philosophy;
- trust, explanation, progressive disclosure, and user-control principles;
- cross-module experience expectations.

It excludes production implementation and repository mechanics.

### 6.2 Aurora 5.0 — Stitch Context

Provides Stitch with the exact Aurora rules required to design Creator Shop screens, including typography, color, spacing, responsive behavior, components, states, accessibility, and approved font-loading sources.

The full Aurora Design System 5.0 remains canonical.

### 6.3 Application Shell & Viewport Context

Defines:

- the boundary between the existing global shell and the module Content Area;
- desktop and mobile reserved shell geometry;
- prohibition on duplicating global navigation unless the shell itself is the design target;
- realistic desktop and mobile-browser viewport assumptions;
- safe-area, bottom-navigation, scrolling, and keyboard conditions.

### 6.4 Global Stitch Design Instructions

A short execution contract instructing Stitch to:

- respect the attached authorities;
- generate only the requested surface and state;
- use supplied terminology and content;
- report meaningful ambiguity rather than inventing product decisions;
- preserve approved screens during revisions and adaptations;
- provide the requested screen and preview identity.

## 7. Module package

Each module owns one persistent package under `03 — Module Manifests` and one screen-brief collection under `04 — Screen Briefs`.

The package should be sufficient to resume work months later without reconstructing decisions from chat history.

For Campaign, the package will consolidate the approved G2 decisions covering:

- surface and ownership authority;
- Create Campaign UX;
- Campaign Workspace UX;
- Campaign state matrix;
- Stitch handoff map;
- copy responsibility;
- deferred functionality;
- legacy and prohibited concepts.

The Module Manifest is a routing document. It should point Codex to the relevant detailed section rather than duplicate every decision in full.

## 8. Persistent Stitch project rule

Each module should use a retained Stitch project whenever practical.

For example:

```text
Creator Shop — Campaign
```

New Campaign screens, responsive variants, state variants, and future upgrades should normally be created within this project so Stitch can preserve visual lineage and the team can revisit earlier work.

Do not create a new project for every screen unless isolation is required by Stitch limitations or a deliberate redesign branch.

### 8.1 Phased surface activation

A module may enter Stitch in phases when only part of that module has completed the governing product-readiness process.

- Keep one shared module project, Manifest, terminology, state vocabulary, and module grounding context.
- Activate final-layer UX authority, Handoff Maps, and Screen Briefs only for surfaces whose required product phase is complete.
- Shared module context may ground the retained Stitch project, but provisional surface detail must not be used as screen-generation authority.
- When another surface completes its product phase, add or refresh its final-layer documents and continue in the same retained module project unless deliberate isolation is approved.

For example, Create Campaign may be designed first inside `Creator Shop — Campaign`; Campaign Page screens can be added to that same project after their own Phase G authority is completed.

### 8.2 What must be retained in Stitch

- module project;
- approved and in-review screens;
- screen/version lineage;
- interactive previews;
- generated design/code artifacts available in the project.

### 8.3 What must be retained in Git

Git remains the durable, searchable record even if Stitch project discovery or retention is imperfect.

Store:

- global and module context documents;
- every executable prompt or prompt manifest;
- prompt/context version identifiers;
- Stitch project name and stable project ID;
- exact screen/file names and stable IDs;
- preview URLs;
- represented viewport and product state;
- export/artifact location;
- approved screenshots where useful for visual history;
- exported reference code/assets when available and permitted;
- review status and important revision decisions.

Do not rely on a chat transcript or a thumbnail as the only record of a Stitch screen.

### 8.4 Stitch Artifact Registry

Each module must maintain a registry similar to:

| Surface | State | Viewport | Stitch screen | Screen ID | Preview URL | Prompt version | Status |
|---|---|---:|---|---|---|---|---|

The registry is updated after every successful generation, revision, approval, or supersession.

## 9. Prompt and screen lifecycle

Use this lifecycle:

1. `Planned`
2. `Context validated`
3. `Generated`
4. `In review`
5. `Revision requested`
6. `Approved reference`
7. `Superseded`

An approved design may be superseded without deleting its history.

Future screen upgrades should reference:

- the current approved screen ID;
- the authority versions under which it was approved;
- the exact decision or requirement that changed;
- what must remain unchanged.

## 10. Standard execution journey

### Stage 0 — Codex preflight

Confirm canonical sources, versions, current module project, attachment manifest, unresolved decisions, and target output.

### Stage 1 — Platform grounding

Send the Global Stitch Context. Ask Stitch to return its understanding and ambiguities without generating UI.

### Stage 2 — Module grounding

Send the relevant module package. Ask Stitch to confirm module hierarchy, ownership, states, terminology, and prohibited reinterpretations without generating UI.

### Stage 3 — Representative screen

Generate one representative screen/state for the selected surface and viewport.

### Stage 4 — Human review

Review the interactive preview using the exact screen identity and governing acceptance checklist.

### Stage 5 — Controlled revision

Revise the existing screen lineage. State what changes, why it changes, and what remains fixed.

### Stage 6 — Responsive adaptation

Adapt an approved base to the second viewport without independently redesigning the surface.

### Stage 7 — State expansion

Generate required state variants from the approved base.

### Stage 8 — Final inventory

Update the module registry, exports, prompt history, review status, and Git references.

## 11. Context attachment matrix

| Execution stage | Attachments |
|---|---|
| Platform grounding | Platform Context; Aurora 5.0 Stitch Context; Shell & Viewport Context; Global Stitch Design Instructions |
| Module grounding | Module Manifest plus the relevant authority/state/copy/prohibition documents |
| First representative screen | Screen Brief plus minimum governing global and module context |
| Revision | Existing screen identity, revision brief, and only the authority needed to validate the change |
| Responsive adaptation | Approved base identity, target viewport brief, and Shell & Viewport Context |
| State expansion | Approved base identity, relevant State Matrix section, and state-specific brief |
| Final QA | Artifact Registry and applicable acceptance checklists |

Codex must record the actual attachment list and version used for every generation.

## 12. Runtime decisions excluded from this library

The following are decided during actual Codex execution and are not frozen in this library:

- model selection for an individual Stitch prompt;
- reasoning level assigned to a prompt;
- temporary retry or recovery strategy;
- runtime token or credit allocation;
- concurrency and scheduling decisions.

This keeps the durable design system independent from changing model availability, pricing, and execution constraints.

## 13. Governance

Each persistent document must declare:

- status;
- version;
- scope;
- owner;
- canonical sources;
- last material update;
- replacement/supersession relationship where applicable.

Use review drafts until product and design authority is confirmed. Do not silently treat generated context as frozen.

Changes to a global document require Codex to identify which pending or approved module screens may need revalidation. Changes to a module document require revalidation only for affected module surfaces.

## 14. Acceptance criteria for this guide

This guide is ready to freeze when:

- the library architecture is approved;
- each document has one clear audience and owner;
- the context-loading strategy is considered sufficiently lean;
- platform and module grounding remain separate;
- the persistent Stitch project and Git registry rules are approved;
- runtime model decisions are confirmed as outside the library;
- the later implementation-consumption package remains separate from Stitch generation.
