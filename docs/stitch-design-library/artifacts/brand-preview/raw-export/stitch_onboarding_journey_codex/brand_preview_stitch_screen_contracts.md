# Brand Preview — Stitch Screen Contracts

**Status:** PREPARED FOR PRODUCT REVIEW — DO NOT INVOKE STITCH YET  
**Authority ref:** `801ac7c6680fb3ecbc05dc4db064e9406b73b128`

This compact brief defines the six representative visual references Stitch should eventually produce. It does not redefine frozen Product/Frontend semantics.

## Family A — Fast Brand Analysis

### `BP-ST-D01 — Fast Brand Analysis — Desktop`

Represent the normal continuous analysis state immediately after supported Industry confirmation.

Required:

- preserve public/onboarding continuity from Gatekeeper rather than creating a second scan-start ceremony;
- use exact frozen eyebrow/headline/supporting copy;
- one calm progress region;
- represent truthful phase progression without percentages or a fake timer;
- show enough brand/domain recognition context to maintain continuity if useful;
- no data-entry fields or secondary onboarding decisions.

Use the four frozen phase labels. The composition must also support the generic fallback `Building your Brand Preview…` when phase truth is unavailable.

Slow analysis is the same composition, adding restrained frozen slow-path reassurance rather than a new warning design.

### `BP-ST-M01 — Fast Brand Analysis — Mobile 390`

Derive from the accepted D01 direction. Use a compact vertical analysis composition with touch-safe spacing and readable 14px+ body copy. Prefer current truthful phase plus restrained completed-phase treatment rather than a wide desktop stepper.

The mobile state must support the same slow reassurance without becoming an alert sheet or error screen.

---

## Family B — Analysis Recovery

### `BP-ST-D02 — Analysis Recovery — Desktop`

Design the shared recovery family using the **recoverable analysis failure** as the representative state.

Exact frozen visible copy:

- headline: `We couldn't finish your Brand Preview.`
- body: `We weren't able to gather enough reliable information to build a Preview we trust. Nothing has been filled in with guesses.`
- primary CTA: `Try again`
- support: `If the problem continues, you can return to your brand website check and try again later.`

Preserve brand/domain recognition context when useful. Use one clear recovery action. Avoid technical diagnostics, source/provider language, confidence measures and fake Preview sections.

The same shell must be able to render the distinct Preview-not-ready copy without a new information architecture:

- headline: `We need a little more to understand this brand.`
- body: `The website doesn't currently give us enough grounded information to build a Brand Preview that would be genuinely useful.`
- CTA: `Try again` when available
- support: `A richer or more accessible brand website may give us enough context to continue.`

The two states may differ in semantic icon/status emphasis, but the visual family remains shared.

### `BP-ST-M02 — Analysis Recovery — Mobile 390`

Derive from D02 as a deliberate mobile recovery composition. Keep brand/domain context compact, body copy fully readable, and `Try again` dominant. Do not turn recovery into a full-screen technical error console or hide explanatory copy behind hover/tooltip.

---

## Family C — Brand Preview

### `BP-ST-D03 — Brand Preview — Desktop`

Design the primary non-editable Brand Preview using the frozen **Northstar Fertility Care / Healthcare** normal-density fixture.

Page header exact copy:

- eyebrow: `Your Brand Preview`
- headline: `Here’s what we see in your brand.`
- subheadline: `A first view of who you’re trying to reach, where creators could help, and the creator profiles we’d explore first.`

Five sections in exact order:

1. `The brand we found`
2. `How we understand your brand`
3. `Who you need to influence`
4. `Where creators can make the difference`
5. `Creators we'd start with`

Then the canonical in-flow verification transition and CTA:

- `Ready to continue? Verify your work email to confirm you represent this brand and open your Creator Shop workspace.`
- `Verify & claim this brand`

Use the full Healthcare fixture from `brand_preview_stitch_fixture.md`. The page should feel like a high-value first understanding, not a dashboard, form or extraction report.

Desktop may use 2–3 columns **inside** Audience/Opportunity/Archetype sections, but do not interleave section order. Narrative/body content may have different card heights; never clip it to force symmetry.

The same composition must naturally support PARTIAL density with missing logo/descriptor and exactly 1 Audience + 1 Opportunity + 1 Archetype. Do not reserve empty slots.

### `BP-ST-M03 — Brand Preview — Mobile 390`

Derive from accepted D03 direction. Preserve the same copy and five-section order in a single vertical flow. Audience, opportunity and archetype items stack full-width; no horizontal carousel is canonical.

Allow natural text height. Do not summarize or truncate dynamic fixture copy for mobile.

The canonical CTA remains in-flow after all five sections. Stitch may optionally explore a bottom-sticky equivalent only as the same action, without hiding content and without removing the semantic in-flow endpoint unless Product later accepts that specific design.

---

## Shared acceptance constraints

All six references must:

- inherit Aurora 5.0 and Creator Shop brand assets;
- preserve frozen copy verbatim;
- keep `Brand Preview` title-capitalized as the experience proper name;
- avoid authenticated sidebar/dashboard shell before verification;
- avoid Product Catalogue, Competitors, Budget, Instagram, Pricing and Campaign configuration;
- contain no edit/review/approve/regenerate controls;
- contain no `AI`, provider, crawl, confidence score or `Surface Scan` terminology;
- avoid empty placeholders for reduced-density content;
- remain feasible for production reconciliation;
- treat mobile as a responsive transformation of the accepted desktop direction.

## Reference inventory

| Family | Desktop | Mobile |
|---|---|---|
| A — Fast Brand Analysis | `BP-ST-D01` | `BP-ST-M01` |
| B — Analysis Recovery | `BP-ST-D02` | `BP-ST-M02` |
| C — Brand Preview | `BP-ST-D03` | `BP-ST-M03` |

`FAST_ANALYSIS_ENTERING` and `STARTING_BRAND_VERIFICATION` are transition states only and must never become separate Stitch references.
