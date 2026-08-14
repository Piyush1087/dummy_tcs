# 01A — Creator Shop Platform Context

**Status:** Review draft 0.1  
**Audience:** Stitch  
**Scope:** Global Creator Shop product and UX context shared by all modules  
**Owner:** Creator Shop product authority  
**Canonical references:** Current Creator Shop product/domain library; `dummy_tcs` platform and module documentation  
**Source review:** `dummy_tcs` main at `b4ae5bd56388bf022190e5e416cdfc1da80ccd56`  
**Last material update:** 14 August 2026

## 1. Purpose of this document

Use this document to understand the Creator Shop platform before designing any module.

This document explains:

- what Creator Shop is;
- who uses it;
- how its major product areas relate;
- the experience principles shared across modules.

It does not define visual tokens, component specifications, shell dimensions, or the detailed behavior of an individual module. Those are supplied separately.

## 2. What Creator Shop is

Creator Shop is a curated creator-commerce platform that helps brands and creators plan, discover, execute, and evaluate commercial creator partnerships.

It is not merely an influencer database, analytics dashboard, CRM, or advertising interface. Its central value is connecting brand strategy, creator fit, campaign execution, collaboration workflow, and verified performance in one coherent operating environment.

The product should feel:

- purposeful rather than administratively dense;
- operational rather than report-first;
- intelligent but explainable;
- structured without feeling rigid;
- professional while remaining approachable to creators and growing brands.

## 3. Primary users

### 3.1 Brands and their teams

Brand users use Creator Shop to:

- establish and maintain verified Brand intelligence;
- define Campaign strategy and commercial intent;
- connect Campaigns to relevant Brand Assets;
- create Briefs describing what creators should produce;
- discover and evaluate suitable creators;
- receive and act on Applications;
- manage Collaborations;
- review verified Campaign and creator performance when reporting is available.

Brand users may include founders, marketing leaders, influencer-marketing managers, agency users, and operational team members. The experience should not assume deep technical knowledge.

### 3.2 Creators

Creator users use Creator Shop to:

- maintain their creator identity and professional profile;
- discover relevant commercial opportunities;
- evaluate Campaign and Brief requirements;
- apply, respond, or negotiate where supported;
- complete Collaborations and required deliverables;
- understand performance and commercial outcomes;
- manage marketplace, payout, media-kit, and related professional workflows.

Creators should be represented as people and creative professionals, not as database records or inventory units.

## 4. Platform operating model

Creator Shop is composed of connected product domains with explicit ownership.

At a high level:

```text
Brand identity and intelligence
        ↓
Brand Centre and Brand Assets
        ↓
Campaign strategy
        ↓
Campaign Assets and Briefs
        ↓
Creator discovery / Prospects and Applications
        ↓
Collaborations and deliverable execution
        ↓
Verified performance and Reporting Intelligence
```

This sequence describes how work commonly progresses. It does not mean one screen or one module owns every stage.

Each product domain remains responsible for its own information and lifecycle. A Campaign surface may summarize or link to another domain without taking ownership of it.

## 5. Major product areas

### 5.1 Brand Centre

Brand Centre is the authority for verified Brand identity, Brand intelligence, offerings, and Brand Assets. Other modules may reference this information but should not silently create local competing versions of it.

Brand Assets can vary by business type. Examples include Products, Services, Treatments, Plans, Experiences, or other entities defined by Brand Centre. Interfaces should avoid hardcoding all businesses as product-commerce companies.

### 5.2 Campaigns

Campaigns express Brand strategy and organize creator participation around a defined objective, audience, commercial approach, and execution context.

Campaign creation and Campaign execution are related but distinct. A Campaign can define strategy before it has all Assets, Briefs, Applicants, or Collaborations required for execution.

Detailed Campaign information architecture, lifecycle, fields, states, and actions are supplied by the Campaign Module Manifest.

### 5.3 Campaign Assets and Briefs

A Campaign Asset connects a Campaign to an existing Brand Centre entity. The Campaign references that entity; Brand Centre remains the authority for the underlying Asset information.

A Brief belongs under a Campaign Asset and defines the specific creator assignment, including required deliverables and creative guidance.

### 5.4 Creator discovery and Prospects

Creator discovery helps a Brand identify creators who may fit a Campaign. Recommended creators should be understandable through relevant evidence and explanation, not represented only by an unexplained score.

A Prospect is not automatically an Applicant or a Collaboration. Discovery and ranking do not own the application or collaboration lifecycle.

### 5.5 Applications

Applications represent creator-initiated participation in a Campaign or Brief. Application decisions are contextual to the creator's application, not generic changes to the creator's identity.

### 5.6 Collaborations

Collaborations own the execution relationship after the relevant participation decision. Campaign surfaces may summarize collaboration state and the next action, while detailed execution belongs in the Collaboration workspace.

### 5.7 Reporting Intelligence

Reporting presents verified performance when the required evidence and calculation authority exist. It should not display invented metrics, decorative analytics, or unsupported precision merely to fill a screen.

## 6. Intelligence and evidence philosophy

Creator Shop uses intelligence to reduce work and improve decisions, while preserving human understanding and control.

Design intelligence as assistance, not unexplained authority.

When intelligence is shown:

- explain why a recommendation, match, warning, or next action is being presented;
- distinguish verified information from inference, recommendation, or unavailable information where that distinction matters;
- let the user inspect relevant supporting context without overwhelming the default view;
- avoid presenting an AI score as sufficient explanation;
- avoid suggesting that an external provider owns Creator Shop's product decision.

When an intelligence source or external integration is unavailable, affected capability should degrade clearly where possible. Unrelated platform workflows should remain usable.

## 7. Shared experience principles

### 7.1 Operational clarity

Each surface should make the user's current context, available decision, and next meaningful action apparent.

Prioritize task completion over decorative dashboards, excessive summary cards, or implementation-oriented information.

### 7.2 Information hierarchy before information volume

Show the information required for the current decision first. Use progressive disclosure for supporting detail.

Do not place every available field permanently on the main screen merely because the data exists.

### 7.3 Explainable intelligence

When the product recommends, ranks, flags, or summarizes, the interface should communicate the relevant reason in human terms.

### 7.4 Human identity and context

Creators, Brands, Campaigns, Assets, Briefs, and Collaborations should be recognizable as meaningful product entities. Avoid interfaces that primarily expose database identifiers, raw schemas, or pipeline internals.

### 7.5 Explicit lifecycle actions

Lifecycle changes should be presented as intentional actions with clear state and consequence. Do not casually represent consequential lifecycle changes as decorative toggles.

The detailed lifecycle and available actions are defined by each module's authority.

### 7.6 Capability-driven behavior

An action may be visible, disabled, hidden, or replaced depending on actual product capability and state. The interface should not imply that an unavailable action will succeed.

### 7.7 Ownership-aware editing

Edit information in the domain that owns it. When a surface displays information owned elsewhere, prefer read-only context plus a clear route to the owning workspace.

### 7.8 Graceful degradation

A missing integration, provider, or intelligence result should affect the relevant capability, not unnecessarily break the whole workspace.

### 7.9 Cross-industry language

Creator Shop supports different industries and business models. Use the canonical contextual entity type when known, and use neutral terms such as `Asset` or `Offering` where the type varies.

Do not assume every Brand sells a physical Product.

### 7.10 Responsive web continuity

Desktop and mobile are responsive expressions of the same product, not independent products. Preserve task, hierarchy, terminology, and state across viewports while adapting composition and disclosure.

Detailed viewport and shell constraints are supplied separately.

## 8. Copy philosophy

Creator Shop copy should be:

- direct;
- concise;
- specific to the user's task;
- understandable without engineering knowledge;
- consistent with canonical entity names;
- honest about unavailable, deferred, or unverified information.

Avoid:

- internal architecture language;
- database or API terminology;
- inflated AI claims;
- vague labels such as `Manage`, `Process`, or `Continue` when a more specific action is known;
- long explanatory text where hierarchy or progressive disclosure can do the work.

Module-level copy contracts determine exact labels, messages, validation copy, and copy ownership.

## 9. What this context must not cause Stitch to invent

This platform context does not authorize Stitch to invent:

- a new module;
- a new product lifecycle;
- a new navigation model;
- Campaign, Application, or Collaboration states;
- new metrics or ranking formulas;
- new AI capabilities;
- new Brand Asset types;
- new permissions or integration behavior;
- detailed fields or validation;
- production implementation architecture.

Those decisions must come from the applicable module and screen authority.

## 10. Expected understanding before UI generation

Before generating module UI, Stitch should understand that:

1. Creator Shop connects Brand intelligence, Campaign strategy, creator selection, collaboration execution, and verified outcomes.
2. Product domains have explicit ownership even when one workspace summarizes several domains.
3. Creator Shop should feel operational, intelligent, explainable, and human—not like an admin database or generic analytics dashboard.
4. AI assists decisions but must not hide the relevant reason or evidence.
5. Information should be progressively disclosed around the current task.
6. Unavailable providers should degrade the affected capability rather than unnecessarily breaking unrelated work.
7. Desktop and mobile preserve the same product meaning.
8. Detailed design, shell, module, state, and screen rules will be supplied in separate authority documents.

## 11. Relationship to other Stitch documents

Use this document with:

- `01B — Aurora 5.0 Stitch Context` for visual and component authority;
- `01C — Application Shell & Viewport Context` for available layout space and responsive frame assumptions;
- `01D — Global Stitch Design Instructions` for generation behavior;
- the current Module Manifest for domain-specific authority;
- the current Screen Brief for the exact output requested.

Do not use this Platform Context alone as a screen-generation prompt.
