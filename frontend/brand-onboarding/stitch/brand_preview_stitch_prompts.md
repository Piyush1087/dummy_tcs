# Brand Preview — Final Stitch Prompts

**Status:** PREPARED FOR PRODUCT REVIEW — DO NOT INVOKE STITCH YET  
**Frozen authority ref:** `801ac7c6680fb3ecbc05dc4db064e9406b73b128`

These are the bounded designer-style prompts for the established Codex → Stitch worker. They assume the target Stitch project has already been verified and contains Creator Shop Aurora/brand assets plus the three standing Brand Preview context documents:

- `brand_preview_stitch_context.md`
- `brand_preview_stitch_screen_contracts.md`
- `brand_preview_stitch_fixture.md`

Do not paste the broad Product/Frontend/Intelligence contracts into each prompt. Codex reads those separately for supervision.

## Execution sequence

Recommended order:

```text
C Desktop → inspect/correct → C Mobile → inspect/correct → family review
A Desktop → inspect/correct → A Mobile → inspect/correct → family review
B Desktop → inspect/correct → B Mobile → inspect/correct → family review
```

Family C goes first because Brand Preview is the principal value moment and the fully populated Healthcare fixture gives the strongest test of Aurora hierarchy, long bounded copy and variable-density resilience. Once C is accepted, reuse its visual language for A/B while preserving the public/onboarding continuity from Gatekeeper.

For every action, use the established `Generate → Inspect → bounded correction → Inspect again` process. Prefer editing a strong output rather than regenerating it broadly.

---

# Prompt C-D03 — Brand Preview Desktop

**Reference name:** `BP-ST-D03 — Brand Preview — Desktop`

> Design the canonical **Brand Preview Desktop** reference for Creator Shop using the Aurora design system and the standing Brand Preview project context already loaded.
>
> This is a pre-verification onboarding value moment, not an authenticated dashboard. Do not add or redesign app sidebar/navigation. The page should feel like Creator Shop already understands the brand and has a credible creator-marketing point of view, not like an extraction report or form.
>
> Use the complete frozen **Healthcare / Northstar Fertility Care** fixture from the project context verbatim. Preserve the page copy and exactly five sections in their defined order, followed by the in-flow verification transition and the exact primary CTA `Verify & claim this brand`.
>
> Establish a calm, premium, high-value Aurora hierarchy. You may explore section surfaces, spacing, restrained icons and card treatment, but avoid turning every section into a card or creating a dashboard grid. Keep the Brand-understanding narrative prominent and readable. Within Audience, Opportunities and Creator archetypes, multi-column desktop layouts are allowed when they improve scanning.
>
> Design for real bounded copy: do not clip text or force equal-height cards. The same composition must contract naturally to one Audience, one Opportunity and one Archetype with no empty slots, although this reference should show the normal-density fixture.
>
> Do not add edit, approve, regenerate, provenance, Product Catalogue, Competitors, Budget, Instagram, Pricing, Campaign setup, AI/confidence or technical/source controls. Do not rewrite or shorten copy.
>
> Return only this Desktop Brand Preview reference.

### Inspection emphasis

- frozen copy exact;
- five-section order intact;
- Northstar fixture complete;
- no dashboard/app shell;
- no clipped body copy;
- in-flow verification endpoint visible after section 5;
- visually plausible if repeated sections contract to one item.

---

# Prompt C-M03 — Brand Preview Mobile 390

**Reference name:** `BP-ST-M03 — Brand Preview — Mobile 390`

> Using the accepted `BP-ST-D03 — Brand Preview — Desktop` as the visual source, create the **390px mobile transformation** of the same Brand Preview.
>
> Preserve Aurora, all frozen copy, the full Northstar Fertility Care fixture, and the exact five-section order. Mobile is a deliberate single-column transformation, not compressed desktop.
>
> Stack Audience, Opportunity and Creator-archetype items full width. Keep all bounded body copy readable at normal Aurora body size; do not truncate, summarize, hide text behind a carousel, or create a separate mobile copy version. The page must also remain visually intentional when any repeated section contains only one item and when logo/descriptor are absent.
>
> Keep the canonical in-flow verification transition after all five sections with `Verify & claim this brand`.
>
> You may **optionally explore** a bottom-sticky equivalent of that same CTA if it materially improves a long mobile page, but it is not canonical: it must be exactly the same action, must not obscure content or safe areas, and must not introduce a second action meaning. Preserve the in-flow semantic endpoint unless Product later accepts a specific equivalent design.
>
> Do not add new navigation, edit/review controls, technical terms or new sections.
>
> Return only this 390px mobile reference.

### Inspection emphasis

- same content and semantics as D03;
- no horizontal content carousel;
- full narrative/item copy visible;
- one-column order remains clear;
- any sticky experiment is unobtrusive and semantically identical.

---

# Prompt A-D01 — Fast Brand Analysis Desktop

**Reference name:** `BP-ST-D01 — Fast Brand Analysis — Desktop`

> Design the **Fast Brand Analysis Desktop** reference as a calm continuation of the accepted Gatekeeper/Industry-confirmation onboarding experience, using Aurora and the accepted Brand Preview visual direction.
>
> Do not suggest `Scan 1 complete → Start Scan 2`. There is no second scan-start ceremony or success page. This is the same brand-understanding journey continuing after supported Industry confirmation.
>
> Use the frozen analysis copy verbatim:
>
> - `Building your Brand Preview`
> - `We're getting to know your brand.`
> - `We’re learning what your brand stands for, who it needs to influence, and where creators could make the biggest difference.`
>
> Create one lightweight progress region. Use the truthful semantic phases exactly:
>
> - `Understanding your brand`
> - `Learning who you need to reach`
> - `Finding where creators can help`
> - `Preparing your Brand Preview`
>
> Represent a credible active state, for example prior phases complete and `Finding where creators can help` currently active, without numeric percentages, fake elapsed time or a determinate progress promise. The same region must be able to fall back to the single generic status `Building your Brand Preview…` when phase truth is unavailable.
>
> Keep the composition visually light, intentional and focused. A small brand/domain recognition cue is allowed to preserve continuity. No forms, provider/source details, AI/confidence language or secondary onboarding decisions.
>
> The same shell must have room to add the frozen slow-analysis reassurance later without becoming a warning/error screen or changing information architecture.
>
> Return only this Desktop Fast Brand Analysis reference.

### Slow-state compatibility to inspect, not a separate final reference

The composition must accept these frozen slow-state strings in the same shell:

- `We're still building your Brand Preview.`
- `This website is taking a little longer to understand, but the analysis is still moving. We'll show your Preview as soon as we have enough grounded information to make it useful.`
- `Still analysing…`
- `You don't need to stay on this screen once your Preview is ready. Deeper analysis can continue in the background after you move on.`

---

# Prompt A-M01 — Fast Brand Analysis Mobile 390

**Reference name:** `BP-ST-M01 — Fast Brand Analysis — Mobile 390`

> Using the accepted `BP-ST-D01 — Fast Brand Analysis — Desktop` as the visual source, create the **390px mobile transformation**.
>
> Preserve the same frozen analysis copy and progress semantics. Keep the experience lightweight and continuous from Gatekeeper rather than presenting a new scan page.
>
> Use a compact vertical progress treatment appropriate to 390px. Prefer the current truthful phase with restrained indication of completed phases instead of squeezing a wide horizontal desktop stepper into mobile. Keep the generic fallback `Building your Brand Preview…` visually valid.
>
> The same composition must accommodate the frozen slow-analysis reassurance without turning into an error state. Use readable Aurora typography and touch-safe spacing; do not shrink body copy to make the screen fit.
>
> Do not add timers, percentages, provider/source details, forms, extra CTAs or authenticated app navigation.
>
> Return only this Mobile Fast Brand Analysis reference.

---

# Prompt B-D02 — Analysis Recovery Desktop

**Reference name:** `BP-ST-D02 — Analysis Recovery — Desktop`

> Design the **Analysis Recovery Desktop** reference using Aurora and the accepted Brand Preview/analysis visual language.
>
> Use the recoverable-failure state as the representative content and preserve this frozen copy exactly:
>
> - headline: `We couldn't finish your Brand Preview.`
> - body: `We weren't able to gather enough reliable information to build a Preview we trust. Nothing has been filled in with guesses.`
> - primary CTA: `Try again`
> - support: `If the problem continues, you can return to your brand website check and try again later.`
>
> Preserve concise brand/domain recognition context when useful. Give the user one clear recovery action. This is a truthful product recovery state, not a technical error console.
>
> The same visual family must also support Preview-not-ready by swapping only the frozen semantic copy/action state, not the information architecture:
>
> - `We need a little more to understand this brand.`
> - `The website doesn't currently give us enough grounded information to build a Brand Preview that would be genuinely useful.`
> - `Try again` when available
> - `A richer or more accessible brand website may give us enough context to continue.`
>
> You may use restrained semantic icon/status emphasis to help distinguish recoverable failure from insufficient evidence, but do not expose provider names, raw evidence, confidence, page counts, crawl diagnostics or a fabricated partial Preview.
>
> Return only this Desktop Analysis Recovery reference.

---

# Prompt B-M02 — Analysis Recovery Mobile 390

**Reference name:** `BP-ST-M02 — Analysis Recovery — Mobile 390`

> Using the accepted `BP-ST-D02 — Analysis Recovery — Desktop` as the visual source, create the **390px mobile transformation** of the same recovery family.
>
> Preserve the representative recoverable-failure copy verbatim, keep brand/domain context compact, and make `Try again` the single clear action. Allow the explanatory copy to wrap naturally; do not collapse it into a technical code or hide it behind disclosure.
>
> The same mobile shell must also support the frozen Preview-not-ready copy without a separate information architecture. Semantic distinction may come from copy/icon/status treatment, not a provider diagnostic panel.
>
> Keep Aurora touch targets, visible focus intent and mobile spacing. Do not add app navigation, provider/source mechanics, confidence indicators, fake Preview cards or secondary actions.
>
> Return only this 390px mobile Analysis Recovery reference.

---

# Family review rhythm

After each Desktop/Mobile pair, Codex should inspect both references before moving on and return the established Stitch family-review record. A generated screen is not accepted simply because Stitch returned it.

If a bounded deviation exists, edit that screen. Regenerate only when the composition is fundamentally unusable.

## Final six-reference inventory

1. `BP-ST-D03 — Brand Preview — Desktop`
2. `BP-ST-M03 — Brand Preview — Mobile 390`
3. `BP-ST-D01 — Fast Brand Analysis — Desktop`
4. `BP-ST-M01 — Fast Brand Analysis — Mobile 390`
5. `BP-ST-D02 — Analysis Recovery — Desktop`
6. `BP-ST-M02 — Analysis Recovery — Mobile 390`

The numbering encodes family identity, not generation order.
