# Brand Onboarding v1 — Product Authority

**Version:** 1.0  
**Status:** FROZEN PRODUCT AUTHORITY  
**Scope:** Brand journey from landing-page entry through Brand Home / Brand Centre handoff  
**Date:** 2026-08-21

## 1. Purpose

This document freezes the product journey for Brand onboarding after Gatekeeper v1.

It replaces the legacy assumption that Brand onboarding should be a long sequence of review/edit screens for Core Identity, Brand DNA, Catalogue and Competitors.

The governing product principle is:

> **Creator Shop should do the analytical work, demonstrate useful understanding quickly, establish trust, strongly motivate the highest-value data connection, and get the user into the product without forcing them to review every inferred field.**

Gatekeeper v1 remains separately authoritative and is not redefined here.

---

## 2. Frozen Journey

```text
Landing Page
    ↓
Gatekeeper
    ↓
Continuous Fast Brand Analysis
    ↓
Brand Preview
    ↓
Verify & Claim Brand + Account Creation
    ↓
Instagram Decision
    ├── Connect Instagram
    └── Continue with limited Intelligence
    ↓
Brand Home — Chat-first
    ↓
Brand Centre / progressive Intelligence
```

### Removed from onboarding

The following are not mandatory onboarding screens:

- Pricing / trial page;
- Core Identity review;
- Brand Intelligence second scan screen;
- Brand DNA review;
- Product Catalogue review;
- Competitor review;
- Budget input.

Thirty-day free-access expectation is communicated on the landing page instead of interrupting onboarding with a Pricing screen.

---

## 3. Gatekeeper Boundary

Gatekeeper remains responsible for admission/serviceability and Industry confirmation according to its frozen authority.

The user may experience Gatekeeper and subsequent Fast Brand Analysis as one continuous analysis journey, but they remain logically separate internally.

After Gatekeeper returns an admitted state and supported Industry is confirmed, Fast Brand Analysis may continue automatically.

Do not expand `gatekeeper_site_assessment` into full Brand Intelligence merely to preserve a single visual scan.

---

## 4. Continuous Fast Brand Analysis

### 4.1 Product objective

Produce the minimum grounded Intelligence required to create a credible Brand Preview.

The user should experience a single coherent progress experience rather than `Scan 1 → review → Scan 2`.

### 4.2 User-facing progress principle

Progress language should describe value being created rather than provider/runtime mechanics.

Illustrative semantic phases:

```text
Understanding your Brand
Learning who you're trying to reach
Finding where creators can help
Preparing your Brand Preview
```

Exact UI copy is delegated to the Frontend AI Worker and requires Product approval before Stitch.

### 4.3 Preview-ready boundary

The analysis screen ends when the minimum Brand Preview contract is sufficiently complete.

It must not wait for every downstream Intelligence domain to finish.

Product/Offering, Competitor, Instagram, Performance and Campaign Intelligence may continue after the user proceeds.

### 4.4 Degradation principle

If enough grounded evidence exists for a useful preview, the experience may proceed with appropriately bounded language even when some enrichment is incomplete.

If evidence is insufficient to produce a credible Brand Preview, show a truthful retry/recovery state rather than inventing content.

---

## 5. Brand Preview — Purpose

Brand Preview is the principal pre-verification value moment.

It answers:

> **Does Creator Shop understand this Brand well enough to have a credible point of view about how creator marketing could help it?**

It is not a data-review form and not a smaller version of Brand Centre.

The Preview is non-editable.

Its purpose is to:

- establish recognition;
- demonstrate Brand understanding;
- demonstrate Audience understanding;
- demonstrate creator-marketing relevance;
- show an initial creator-strategy point of view;
- motivate the user to verify and claim the Brand.

---

## 6. Brand Preview — Frozen Semantic Blocks

### 6.1 Brand identity / recognition

Communicate enough Identity to establish that the correct Brand has been understood.

May include:

- Brand logo where available;
- Brand name;
- confirmed Industry;
- website/domain;
- one concise Brand descriptor.

Industry is not editable here; the Gatekeeper confirmation boundary remains authoritative.

### 6.2 How Creator Shop understands the Brand

A concise AI-generated Brand-understanding narrative.

It should explain the Brand's positioning/character and why that context matters for creator marketing.

It must not contain generic praise or unsupported market/performance claims.

### 6.3 Who the Brand needs to influence

Show a small number of useful Audience groups rather than a dense demographic/persona form.

Each group should contain:

- concise group label;
- short explanation of why the group matters.

Audience content is an Intelligence hypothesis grounded in available evidence, not a user-confirmed CRM truth.

### 6.4 Where creators can make the difference

Show up to three creator-marketing opportunities.

These are strategic opportunity statements, not final Campaign recommendations.

Each opportunity should communicate:

- the strategic role creators can play;
- why it matters for this Brand.

### 6.5 Creators Creator Shop would start with

Show a small set of recommended creator archetypes with one-line rationales.

These are descriptive recommendations only.

They are not selectable/configurable on Brand Preview and do not freeze the later Campaign creator strategy.

---

## 7. Explicitly Excluded from Brand Preview

Do not expose the following as primary Preview content:

- full Product/Offering catalogue;
- full Competitor list;
- raw Brand DNA fields;
- tone/aesthetic tags;
- colour palette;
- pricing/subscription detail;
- Brand budget;
- Share of Voice;
- unsupported performance scores;
- confidence percentages;
- campaign configuration fields;
- editable forms;
- raw proprietary Intelligence graph/reasoning artifacts.

The Brand Preview should remain focused and persuasive rather than comprehensive.

---

## 8. Static vs Dynamic Copy Authority

Brand Preview contains two classes of copy.

### 8.1 Static interface copy

Examples:

- page headline;
- section labels;
- helper text;
- CTA labels;
- loading/recovery copy;
- verification transition copy.

The Frontend AI Worker owns refinement of this copy under Product Authority.

Static copy must be approved/frozen before Stitch design execution.

### 8.2 Dynamic Intelligence copy

Examples:

- Brand-understanding narrative;
- Audience-group explanations;
- creator-opportunity descriptions;
- creator-archetype rationales.

These cannot be frozen word-for-word.

Instead, the Intelligence and Frontend contracts must define writing constraints including:

- length;
- tone;
- grounding requirements;
- uncertainty language;
- unsupported-claim prohibitions;
- UI-safe maximums.

---

## 9. Verification / Claim Boundary

After Brand Preview, the principal action is to verify and claim the Brand.

For MVP, domain-linked work email remains the primary Brand verification mechanism.

The strategic purposes are:

- reduce Brand misrepresentation;
- establish Brand/account ownership;
- provide a lightweight trust/quality signal;
- provision the authenticated Brand workspace.

Alternative verification methods may be added later without changing the conceptual boundary.

---

## 10. Instagram Decision

After Brand verification/account creation, the user reaches a dedicated Instagram decision screen.

The product should strongly communicate that Instagram unlocks materially better creator-collaboration and performance Intelligence.

The user must make the decision, but Instagram connection is not a hard blocker for Brand MVP.

Canonical outcomes:

```text
INSTAGRAM_CONNECTED
CONTINUE_WITH_LIMITED_INTELLIGENCE
```

Skipping must not be presented as equivalent to connecting; the experience should truthfully explain what Intelligence remains unavailable or limited.

---

## 11. Brand Home

Onboarding ends after the Instagram decision.

Brand Home is Chat-first, not a reporting dashboard.

Its primary purpose is conversational interaction with Creator Shop.

Home may also contain:

- a concise morning-coffee / what's-changed snapshot;
- dynamic gateways to frequently needed destinations/actions;
- truthful background-Intelligence progress announcements.

Detailed reporting moves to Brand Centre.

The user should not remain trapped in an onboarding scan while deeper Intelligence is still processing.

---

## 12. Brand Centre Direction

Brand Centre will be materially overhauled and should follow the same AI-native workspace philosophy used for Campaign Page.

It should not behave as a traditional dense SaaS dashboard.

Conceptual hierarchy:

```text
AI Summary
    ↓
What needs attention
    ↓
Recommended actions
    ↓
Mature Brand / Performance Intelligence
    ↓
Supporting operational details / edits when required
```

Do not show immature/empty datasets merely to preserve dashboard layout.

Where useful Intelligence is not ready, show a truthful processing/limited state or omit the module until it is useful.

---

## 13. Products / Offerings and Competitors after Onboarding

### 13.1 Operational truth vs proprietary Intelligence

Creator Shop should distinguish:

```text
Operational truth
Business facts
Derived proprietary Intelligence
```

Operational information required for user control/execution should remain visible and correctable.

Derived Intelligence should normally be surfaced through summaries, explanations and recommended actions rather than exposing the complete internal Intelligence graph.

### 13.2 Offerings

The Brand must have a post-onboarding destination to view/correct the canonical Offerings Creator Shop understands.

This is required because Campaign execution needs an authoritative answer to:

> What is being promoted?

Offering types must support the Brand's Industry and must not be limited to D2C physical Products.

Users are not required to review Offerings during onboarding.

### 13.3 Campaign Asset distinction

An Offering is what the Brand sells/promotes.

A Campaign Asset is the particular Product/Service/Access/other provisioned entity used in a specific Campaign.

Campaign creation may select an existing Offering and then create/configure the campaign-specific Asset.

### 13.4 Competitors

The Brand may view/correct the small canonical competitive set used by Creator Shop, for example by marking an entity not relevant or adding a missed competitor.

Raw competitor scoring, overlap models, strategic reasoning and other proprietary derived Intelligence do not need to be exposed as editable fields.

---

## 14. Budget

Budget is not requested during onboarding.

After onboarding, Creator Shop may present an AI-recommended creator-marketing budget and allow the Brand to confirm or replace it.

Two values must remain distinct:

```text
recommended_budget = Creator Shop Intelligence
actual_brand_budget = Brand authority
```

The recommendation may be auto-populated as a suggested value, but it must not silently become authoritative Brand budget.

The UI should support a concise explanation such as `How did we calculate this?`, grounded in the actual inputs used.

Campaign Intelligence may still recommend campaign-level ranges when no Brand budget has been confirmed.

---

## 15. Industry Variance

The same Brand Preview semantic structure is retained across supported MVP Industries:

```text
D2C
SAAS_AI
HEALTHCARE
OFFLINE_SERVICES
```

The content and terminology must adapt materially to the Industry.

Do not force D2C concepts such as Product catalogue into SaaS, Healthcare or Offline Services where the more appropriate concept is an Offering, plan, treatment, capability, experience or service.

---

## 16. Frontend / Stitch Workflow — Frozen

The Brand Preview design workflow is:

```text
Frozen Product Authority
        ↓
Minimum Intelligence output contract
        ↓
Frontend AI Worker UX copy refinement
        ↓
Product review / copy freeze
        ↓
Frontend state + screen + interaction contract
        ↓
Stitch visual design
        ↓
Frontend AI Worker acceptance / reconciliation
        ↓
Codex implementation reconciliation
```

Stitch is a visual-design executor, not Product Authority.

Do not invoke Stitch before final static copy and dynamic-copy constraints are approved.

Stitch should be instructed not to rewrite authoritative copy.

---

## 17. Immediate Next Work

The next work should proceed in parallel only after the minimum Preview semantics are stable:

### Intelligence / Data side

Define the minimum structured Brand Preview output and the fastest Evidence strategy required to make it reliable.

### Frontend side

Produce a Brand Preview UX Copy Contract containing:

- final proposed static copy;
- dynamic-copy writing rules;
- full/partial/failure copy states;
- realistic populated examples for D2C, SaaS/AI, Healthcare and Offline Services.

Do not invoke Stitch yet.

---

## 18. Explicitly Deferred

This authority does not yet freeze:

- exact Brand Centre IA/navigation;
- exact Brand Home shortcut/gateway layout;
- final Brand Preview prose;
- exact Fast Brand Analysis provider sequence;
- exact Product/Competitor/Instagram processor architecture;
- complete Campaign Intelligence design;
- Creator onboarding;
- external MCP connector.
