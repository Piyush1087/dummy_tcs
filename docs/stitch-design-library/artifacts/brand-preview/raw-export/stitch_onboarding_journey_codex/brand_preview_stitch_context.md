# Brand Preview — Stitch Context

**Status:** PREPARED FOR PRODUCT REVIEW — DO NOT INVOKE STITCH YET  
**Frozen frontend authority ref:** `801ac7c6680fb3ecbc05dc4db064e9406b73b128`

## 1. Purpose

This is the concise domain/design context for Brand Preview Stitch work. It translates frozen Product, Frontend, Intelligence-readiness and Data Extraction authority into high-signal design context without asking Stitch to rediscover the underlying architecture.

Stitch is a visual-design executor only. It must preserve frozen copy, state meaning, section order, readiness semantics and interaction permissions.

## 2. Journey context

The customer experiences one continuous onboarding journey:

```text
Gatekeeper / Industry confirmation
        ↓
Continuous Fast Brand Analysis
        ↓
Brand Preview
        ↓
Verify & claim this brand
```

Do not visually imply `Scan 1 complete → Start Scan 2`. Fast Brand Analysis should feel like the natural continuation of the same brand-understanding journey after a supported Industry is confirmed.

Brand Preview occurs **before Brand verification/account creation**. Therefore the authenticated Creator Shop application shell with persistent sidebar/user navigation is not the canonical container for these references. Use Aurora as the design-system authority and preserve the public/onboarding visual continuity established by accepted Gatekeeper work. Do not redesign global navigation.

## 3. Aurora direction

Use Aurora 5.0 literally:

- clear, calm, content-resilient hierarchy;
- Satoshi for headings/labels and Source Sans 3 for body copy;
- Aurora spacing, radii, surfaces, primary action treatment and semantic status roles;
- desktop can use 2–3 columns **inside** repeated-content sections where useful;
- mobile is a deliberate one-column transformation, not compressed desktop;
- body text must not shrink to make content fit;
- avoid excessive nested cards; spacing and section structure may group content without putting every block in a card;
- dynamic text must be allowed to wrap to its full bounded length.

## 4. Canonical visual families

Exactly three families, each with Desktop and Mobile 390 references:

1. **Fast Brand Analysis** — shared shell for normal and slow analysis.
2. **Analysis Recovery** — shared shell for recoverable failure and Preview-not-ready.
3. **Brand Preview** — shared page for NORMAL and PARTIAL density.

Do not create separate Stitch screens for transition states, missing logo/descriptor, collection counts or NORMAL/PARTIAL readiness.

## 5. Frozen analysis language

Normal analysis:

- eyebrow: `Building your Brand Preview`
- headline: `We're getting to know your brand.`
- support: `We’re learning what your brand stands for, who it needs to influence, and where creators could make the biggest difference.`

Truthful phase labels when runtime can support them:

1. `Understanding your brand`
2. `Learning who you need to reach`
3. `Finding where creators can help`
4. `Preparing your Brand Preview`

Generic fallback when phase truth is unavailable:

`Building your Brand Preview…`

No numeric percentage, fake countdown or timer-driven phase animation.

Slow analysis remains the same visual shell with restrained frozen slow-path reassurance. It is not a warning/error screen.

## 6. Frozen Brand Preview hierarchy

Page:

- eyebrow: `Your Brand Preview`
- headline: `Here’s what we see in your brand.`
- subheadline: `A first view of who you’re trying to reach, where creators could help, and the creator profiles we’d explore first.`

Exactly five primary sections, in this order:

1. `The brand we found`
2. `How we understand your brand`
3. `Who you need to influence`
4. `Where creators can make the difference`
5. `Creators we'd start with`

Then the in-flow verification transition:

`Ready to continue? Verify your work email to confirm you represent this brand and open your Creator Shop workspace.`

Primary CTA:

`Verify & claim this brand`

No edit, approve, regenerate, provenance/explainability, Instagram, Product, Competitor, Budget, Pricing or Campaign setup controls.

## 7. Variable-density truthfulness

Brand Preview must remain visually intentional when output is smaller:

- logo may be absent;
- descriptor may be absent;
- Audience: 1–3 items;
- Opportunities: 1–3 items;
- Archetypes: 1–4 items.

One Audience + one Opportunity + one Archetype is a valid PARTIAL Preview. Never reserve empty slots, display placeholder cards, create empty carousel tracks, or pad with generic content to preserve symmetry.

Cards/rows must expand to bounded copy; never clip body copy merely to keep equal heights.

## 8. Industry portability

The information architecture is invariant across:

- D2C
- AI / SaaS
- Healthcare
- Offline Services

Industry changes the content, not the five-section structure. Do not introduce D2C-only Product/catalogue UI or healthcare/SaaS-specific sections.

The primary generation fixture is the frozen **Healthcare — Northstar Fertility Care** example because its narrative and item copy provide a strong content-resilience test. This fixture must not cause a medical/clinical theme: Creator Shop Aurora remains the visual language.

## 9. Stitch project context pack

Before generation, the established Stitch worker/Codex runner should verify that the target project contains Creator Shop Aurora/design-system context and brand assets. Do not repeatedly re-upload Aurora if already present.

High-signal Brand Preview documents to supply as standing project context:

1. `frontend/brand-onboarding/stitch/brand_preview_stitch_context.md`
2. `frontend/brand-onboarding/stitch/brand_preview_stitch_screen_contracts.md`
3. `frontend/brand-onboarding/stitch/brand_preview_stitch_fixture.md`

Codex/worker reads but normally does **not** feed these broad authority documents into every Stitch prompt:

- `frontend/brand-onboarding/brand_preview_ux_copy_contract.md`
- `frontend/brand-onboarding/brand_preview_frontend_state_contract.yaml`
- `frontend/brand-onboarding/brand_preview_screen_interaction_contract.md`
- `intelligence/engines/brand_intelligence/brand_preview_minimum_output_contract.yaml`
- `data_extraction/brand_preview_fast_evidence_acquisition_design.md`
- Gatekeeper Stitch/frontend authority and prior Stitch runbook/process docs.

`brand_preview_stitch_prompts.md` is execution input for Codex, not standing Stitch context.

## 10. Visual freedom

Stitch may explore section composition, surface/card treatment, typography hierarchy, spacing, iconography, restrained analysis motion, responsive stacking and — on mobile only — a bottom-sticky equivalent of `Verify & claim this brand`.

The sticky equivalent is **not canonical v1 behavior**. If explored, it must be exactly the same action, preserve the canonical in-flow verification transition, avoid obscuring content/safe areas, and remain subject to later Product acceptance.

Stitch may not alter product semantics, copy, section order, readiness meaning, interaction permissions or variable-density truthfulness.
