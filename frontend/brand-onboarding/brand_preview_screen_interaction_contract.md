# Brand Preview Analysis + Preview — Screen & Interaction Contract

**Version:** 1.0 — Proposed for Product Review  
**Status:** PROPOSED — PRODUCT REVIEW REQUIRED  
**Scope:** Confirmed supported Industry → Continuous Fast Brand Analysis → Brand Preview → start Brand verification  
**Owner:** Frontend AI Worker

## 1. Authority

This contract consumes and does not replace:

- `docs/organization/charters/frontend_ai_worker_charter.md`;
- `intelligence/product_authority/brand_onboarding_v1_product_authority.md`;
- `frontend/brand-onboarding/brand_preview_ux_copy_contract.md` — **FROZEN — PRODUCT APPROVED**;
- `intelligence/engines/brand_intelligence/brand_preview_minimum_output_contract.yaml` — frozen semantic/readiness authority;
- `data_extraction/brand_preview_fast_evidence_acquisition_design.md` — frozen acquisition design;
- `frontend/gatekeeper/gatekeeper_frontend_state_contract.yaml`;
- `frontend/gatekeeper/gatekeeper_screen_interaction_contract.md`;
- `frontend/brand-onboarding/brand_preview_frontend_state_contract.yaml`.

Frozen customer-facing copy from the Brand Preview UX Copy Contract must be preserved verbatim. This contract defines presentation, state transitions, responsiveness and interaction behavior; it does not rewrite copy.

---

## 2. Product purpose

The experience should feel like one continuous journey:

```text
Gatekeeper admission
        ↓
Industry confirmation when required
        ↓
Continuous Fast Brand Analysis
        ↓
Brand Preview
        ↓
Verify & claim this brand
```

Brand Preview is the first post-analysis value moment. It is not a review form, a setup wizard, a smaller Brand Centre, or another scan checkpoint.

The user should leave the Preview with the sense that Creator Shop:

- recognizes the correct brand;
- understands its commercial/customer context well enough to be useful;
- has a grounded point of view on who matters;
- can identify where creators may add value;
- has a credible starting view on creator archetypes.

The Preview remains non-editable.

---

## 3. Screen inventory

The canonical screen inventory is intentionally small.

### Desktop

1. **Fast Brand Analysis — active/slow shared screen shell**
2. **Fast Brand Analysis — recovery/non-ready shared recovery shell**
3. **Brand Preview — normal/partial shared Preview page**

### Mobile 390

1. **Fast Brand Analysis — active/slow shared mobile shell**
2. **Fast Brand Analysis — recovery/non-ready shared mobile recovery shell**
3. **Brand Preview — normal/partial stacked mobile page**

`FAST_ANALYSIS_ENTERING` and `STARTING_BRAND_VERIFICATION` are transition states, not separate standalone screens.

NORMAL/PARTIAL Preview density does not create separate screen families.

---

## 4. Continuity from Gatekeeper

### 4.1 Entry conditions

Fast Brand Analysis may begin only after authoritative Gatekeeper/Industry confirmation establishes:

- Gatekeeper outcome remains `ADMITTED`;
- Industry is one of `D2C`, `SAAS_AI`, `HEALTHCARE`, `OFFLINE_SERVICES`;
- the confirmed supported Industry is downstream authority;
- the backend/runtime accepts the next analysis handoff.

Unsupported Industry confirmation remains within Gatekeeper recovery and never enters this contract.

### 4.2 Visual continuity rule

Do not create the impression of:

```text
Scan 1 complete
→ success page
→ start Scan 2
→ separate scan experience
```

Instead:

```text
Gatekeeper / Industry confirmation
→ analysis shell continues naturally
→ Brand Preview appears when ready
```

If the internal runtime still calls the next operation `Surface`, that term is not customer-facing authority for this screen.

### 4.3 Transition from Industry confirmation

If the confirmation modal closes into analysis, the user should land directly in the Fast Brand Analysis shell.

The transient frozen sentence `Industry confirmed. Now we're building your Brand Preview.` may be used only if a visible bridge is needed. If the shell renders immediately, omit the bridge and begin with the frozen analysis headline/copy.

Do not show an intermediate success card.

---

## 5. Fast Brand Analysis screen

## 5.1 Purpose

Give the user a calm, truthful sense that Creator Shop is assembling a useful Preview without exposing internal acquisition/provider mechanics or keeping the user trapped in a full crawl.

## 5.2 Required static copy

Render frozen copy from `brand_preview_ux_copy_contract.md` exactly.

Normal analysis includes:

- eyebrow: `Building your brand Preview`;
- headline: `We're getting to know your brand.`;
- supporting copy: `We’re learning what your brand stands for, who it needs to influence, and where creators could make the biggest difference.`

Do not show the background-analysis reassurance on the normal fast path.

## 5.3 Progress composition

The analysis screen should contain:

1. recognition context, preferably brand/domain already known from Gatekeeper;
2. frozen analysis eyebrow/headline/supporting copy;
3. one progress region;
4. optional normalized phase/progress detail when runtime truthfully supplies it;
5. no secondary onboarding choices or data-entry fields.

Progress must not become a dashboard.

### Normalized phase mode

When runtime activity maps truthfully to semantic readiness, the customer-facing phases are exactly:

1. `Understanding your brand`
2. `Learning who you need to reach`
3. `Finding where creators can help`
4. `Preparing your Brand Preview`

The UI may show current phase plus completed prior phases, or current phase only. It must not imply numeric completion unless a separate future authority provides one.

### Generic mode

When normalized phase truth is unavailable, show only:

`Building your Brand Preview…`

Do not cycle through the four phases on a client timer.

## 5.4 Timing presentation

These are UX thresholds, not backend SLAs:

- approximately `0–8s`: normal active presentation;
- approximately `8s+`: slow reassurance may appear;
- approximately `20–30s`: runtime should preferably resolve into Preview ready, recoverable failure, or insufficient-evidence state rather than indefinite loading.

Frontend elapsed time may change presentation from active to slow, but elapsed time alone must not invent a backend/Intelligence failure state.

## 5.5 Slow-analysis behavior

`FAST_ANALYSIS_SLOW` remains in the same shell.

Render the frozen slow-path copy from the copy contract. Do not create a warning page unless runtime semantics actually represent failure.

The slow state may add the frozen reassurance that deeper analysis can continue without making the default path verbose.

If normalized progress continues, preserve it.

## 5.6 Leaving analysis

As soon as authoritative `PREVIEW_READY` arrives, transition to Brand Preview. Do not wait for:

- full Product/Offering Intelligence;
- Competitors;
- Instagram;
- Performance;
- Campaign Intelligence;
- complete Brand DNA;
- maximum audience/opportunity/archetype counts.

---

## 6. Analysis recovery / non-ready screen

`ANALYSIS_RECOVERABLE_FAILURE` and `PREVIEW_NOT_READY` use one visual recovery family but remain distinct semantic states.

## 6.1 Recoverable failure

Use frozen copy exactly:

- headline: `We couldn't finish your Brand Preview.`
- body and support copy from Section 9.8 of the frozen copy contract;
- primary CTA: `Try again`.

The retry action must invoke canonical runtime retry/orchestration. Frontend does not select Direct HTTP, Zyte, Gemini, or any provider fallback.

## 6.2 Insufficient evidence / Preview not ready

Use frozen copy exactly:

- headline: `We need a little more to understand this brand.`
- body/support copy from Section 9.9;
- primary CTA: `Try again` when the canonical runtime allows retry.

Do not render a partial Preview if mandatory Preview-ready semantics are absent.

## 6.3 Shared recovery composition

The recovery shell should include:

- brand/domain context when still authoritative;
- clear state headline;
- concise explanation;
- canonical action(s);
- no raw diagnostics;
- no provider names;
- no confidence values;
- no fake missing sections.

---

## 7. Brand Preview page

## 7.1 Entry condition

Render only when authoritative readiness is `PREVIEW_READY`.

`PREVIEW_READY` may be `NORMAL` or `PARTIAL`. Both use the same page.

## 7.2 Frozen page copy

Use exactly:

- eyebrow: `Your brand Preview`;
- headline: `Here’s what we see in your brand.`;
- subheadline: `A first view of who you’re trying to reach, where creators could help, and the creator profiles we’d explore first.`

Do not rewrite for visual convenience.

## 7.3 Exactly five semantic sections

Order is canonical:

1. `The brand we found`
2. `How we understand your brand`
3. `Who you need to influence`
4. `Where creators can make the difference`
5. `Creators we'd start with`

No other primary Preview section may be inserted.

## 7.4 Section 1 — identity / recognition

Render, when available:

- logo;
- brand name;
- confirmed Industry;
- display domain/website;
- optional brand descriptor.

Rules:

- logo is optional;
- descriptor is optional;
- do not render `Not available` placeholders for either;
- confirmed Industry is read-only and comes from Gatekeeper authority;
- no edit affordance;
- no Sub-industry editing.

If logo is absent, use the later accepted visual fallback (initials/neutral mark/no logo) without adding prominent error copy.

## 7.5 Section 2 — brand understanding

Render the required bounded narrative.

Rules:

- preserve generated copy as supplied within frozen limits;
- no mid-sentence truncation;
- no `Read more` requirement in the default contract;
- do not label it `AI summary`, `Brand DNA`, or confidence;
- use the frozen partial narrative state only if the block is explicitly limited but the overall Preview remains display-eligible.

## 7.6 Section 3 — audience groups

Valid item count: `1–3`.

- `2–3` is normal target density;
- `1` is a valid partial Preview;
- render only returned groups;
- never reserve empty cards;
- never invent a second/third group to make a row look balanced.

If one credible group is returned, the section should intentionally become a single-card/single-item composition rather than look incomplete.

## 7.7 Section 4 — creator opportunities

Valid item count: `1–3`.

- each item contains title + explanation;
- one opportunity is valid;
- use the frozen optional reduced-density helper only when appropriate;
- do not render empty opportunity cards;
- do not reinterpret these as Campaign recommendations.

## 7.8 Section 5 — creator archetypes

Valid item count: `1–4`.

- archetype label comes from the canonical archetype taxonomy supplied by Intelligence;
- rationale is bounded generated copy;
- one archetype is valid;
- no selection controls;
- no checkbox/radio behavior;
- no follower tier/configuration controls;
- displaying an archetype does not make it Campaign targeting authority.

---

## 8. NORMAL vs PARTIAL Preview treatment

## 8.1 NORMAL

Indicative density:

- descriptor present;
- 2–3 audiences;
- 2–3 opportunities;
- 2–4 archetypes.

NORMAL does not imply all downstream Intelligence is complete.

## 8.2 PARTIAL

Valid examples:

- logo missing;
- descriptor missing;
- exactly one audience;
- exactly one opportunity;
- exactly one archetype;
- one block explicitly limited while the overall readiness contract still passes.

PARTIAL is not an error banner for the entire page.

Use block-level frozen partial copy only on the affected section where needed.

The page must remain persuasive and complete in composition even with only one item in each repeated-content section.

---

## 9. Desktop composition

The exact pixel layout belongs to Stitch later, but the canonical content composition is:

### 9.1 Page header zone

- eyebrow;
- headline;
- subheadline;
- identity/recognition context either integrated immediately below or adjacent, depending later Aurora composition.

### 9.2 Main content flow

Keep semantic order intact:

```text
Identity / recognition
↓
Brand understanding
↓
Audience groups
↓
Creator opportunities
↓
Creator archetypes
↓
Verification transition
```

Desktop may use multi-column grids **within** Audience/Opportunity/Archetype sections when multiple items exist.

Do not interleave the five sections solely to create dashboard symmetry.

### 9.3 Reduced density

- 1 item: size it intentionally; do not leave two empty columns;
- 2 items: balanced two-item layout is allowed;
- 3 items: three-up layout is allowed when content remains readable;
- 4 archetypes: 2×2 or other readable Aurora-consistent arrangement is allowed.

Dynamic body copy must not be clipped to preserve equal card heights.

---

## 10. Mobile 390 composition

Mobile is not compressed desktop; it is a deliberate stacked presentation of the same semantics.

Canonical order remains identical.

### 10.1 Header

- eyebrow;
- headline;
- subheadline;
- identity recognition follows immediately.

### 10.2 Sections

Use a single vertical content flow.

Audience, opportunity and archetype items stack as full-width items/cards.

Do not use horizontal carousels as the canonical pattern; they make it easier to miss strategic content and complicate variable-density truthfulness.

### 10.3 Dynamic text

- preserve the same generated copy as desktop;
- do not generate a separate mobile summary;
- do not cut mid-sentence;
- allow natural height expansion;
- heading/label wrapping may use up to the frozen mobile limits.

### 10.4 Reduced density

A one-item section should simply contain one full-width item. It should not include visual placeholders or an empty slider track.

### 10.5 Progress on mobile

Analysis remains one compact vertical progress experience.

Prefer current normalized phase plus restrained indication of completed phases rather than a wide horizontal stepper that becomes unreadable at 390px.

Generic-mode analysis must remain available when phase truth is unavailable.

---

## 11. Verification transition and CTA behavior

## 11.1 Static copy

Use the frozen transition message exactly:

`Ready to continue? Verify your work email to confirm you represent this brand and open your Creator Shop workspace.`

Primary CTA exactly:

`Verify & claim this brand`

No secondary Preview action is canonical for v1.

Do not add `How this Preview was formed`.

## 11.2 Desktop CTA

The verification transition belongs after the five-section value story.

A persistent/sticky CTA is **not required as canonical desktop behavior**. The user should have a clear primary CTA at the natural end of the Preview.

A future Stitch proposal may explore persistent affordance only if it does not bypass or compete with Preview comprehension and does not introduce a second CTA meaning.

## 11.3 Mobile CTA

A bottom sticky CTA is **allowed but not required** for later visual exploration, because the Preview may be long on 390px.

If used:

- it must use the exact canonical CTA label;
- it must not cover content;
- safe-area padding is required;
- the final in-flow transition/CTA remains the semantic endpoint or the sticky CTA must be an accessible equivalent of the same action, not a second action;
- it appears only when Preview is ready.

This choice may be finalized during Product review or Stitch acceptance without changing business semantics.

## 11.4 Starting verification

On activation:

```text
PREVIEW_READY
↓
STARTING_BRAND_VERIFICATION
↓
canonical verification flow
```

While starting:

- disable duplicate activation;
- expose an accessible pending state on the CTA;
- preserve the Preview until navigation is accepted where practical;
- do not show an invented `Brand claimed` success state before authoritative verification.

If transition start fails, return to Preview with the CTA re-enabled and show a bounded non-destructive error associated with the action. Exact downstream verification error taxonomy is outside this contract.

---

## 12. Accessibility

### 12.1 Semantics

- one page `h1` for the active analysis/recovery/Preview screen;
- each of the five Preview sections should have a semantic heading;
- repeated Audience/Opportunity/Archetype items should use list semantics where appropriate;
- decorative logo fallbacks must not create noisy screen-reader output;
- Industry/domain labels must be readable without relying on visual position alone.

### 12.2 Focus

On navigation/screen replacement:

- Fast Analysis entry: focus the page heading only when the route/screen genuinely changes;
- Preview readiness: move focus to `Here’s what we see in your brand.` when analysis is replaced by the Preview;
- recovery: focus the recovery heading or ensure it is immediately announced;
- retry: after activation, focus should move naturally into the active analysis state rather than remain on a removed control;
- verification start: do not steal focus while the CTA is merely pending.

### 12.3 Live announcements

Use a polite live region for meaningful non-urgent progress changes.

Announce:

- actual normalized phase changes;
- slow-analysis state once;
- `Your Brand Preview is ready.` once;
- recoverable failure once;
- insufficient-evidence state once.

Do not announce spinner frames, decorative animation or time elapsed.

Failure/non-ready recovery actions must have clear accessible names and visible focus.

### 12.4 Color independence

Slow, partial, failure and non-ready states must never depend only on color. Use text/semantic iconography/structure as appropriate.

---

## 13. Copy overflow and content resilience

The frozen output contract already supplies UI-safe maxima. Frontend should be designed to those maxima.

Rules:

- no mid-sentence ellipsis;
- no hidden overflow for generated body text;
- no arbitrary fixed card heights that clip valid content;
- no frontend rewriting of generated text to force layout;
- no separate desktop/mobile generated copy;
- if accepted visual design cannot accommodate the maximum contract, revise the global copy/output contract through authority rather than silently truncating production text.

---

## 14. Runtime-to-view mapping

Preferred architecture:

```text
Gatekeeper/Industry handoff
        ↓
Fast Brand Analysis runtime/readiness result
        ↓
frontend adapter
        ↓
BrandPreviewViewState
        ↓
analysis / recovery / Preview presentation
```

Frontend should consume explicit normalized states equivalent to:

- analysis active + optional normalized phase;
- Preview ready + completeness NORMAL/PARTIAL;
- Preview failed recoverable;
- Preview not ready/insufficient evidence.

The frontend must not determine semantic confidence from copy content or inspect raw evidence to decide readiness.

---

## 15. Testing expectations for later implementation

When implementation is authorized, tests should cover at minimum:

### State mapping

- Gatekeeper supported confirmation enters continuous analysis;
- unsupported Industry never enters analysis;
- normal → slow presentation modifier/state;
- PREVIEW_READY NORMAL;
- PREVIEW_READY PARTIAL;
- recoverable failure;
- Preview not ready;
- verification transition.

### Density

- logo absent;
- descriptor absent;
- 1/2/3 Audience groups;
- 1/2/3 opportunities;
- 1/2/3/4 archetypes;
- no empty reserved cards.

### Copy integrity

- frozen static strings remain exact;
- generated text renders within accepted contracts without frontend truncation;
- no confidence/provider/internal runtime language appears.

### Accessibility

- heading structure;
- list semantics;
- live-region announcements;
- focus transition into Preview/recovery;
- keyboard-operable CTA/retry;
- mobile sticky CTA, if adopted, has one accessible action meaning.

### Responsive

- canonical desktop composition;
- 390px stacked composition;
- long valid bounded narrative/item copy;
- partial-density layouts.

---

## 16. Explicit exclusions

Do not add:

- edit actions;
- review/approval controls;
- Product Catalogue;
- Competitors;
- Budget;
- Instagram connection;
- Pricing;
- Campaign configuration;
- confidence percentages;
- raw source/provenance;
- provider mechanics;
- crawl/page count diagnostics;
- `Regenerate`;
- `Looks good`;
- Campaign creator selection;
- Stitch artifacts before Product approval.

Do not modify the production frontend clone under this assignment.

---

## 17. Proposed Stitch families after Product approval

Stitch is **not authorized yet**.

If Product approves these contracts, the minimum visual families should likely be:

1. **Fast Brand Analysis** — desktop + mobile, using active state and showing how slow reassurance layers into the same composition.
2. **Brand Preview — normal density** — desktop + mobile.
3. **Brand Preview — partial density** — desktop + mobile, specifically proving 1 Audience + 1 Opportunity + 1 Archetype and optional logo/descriptor absence do not break composition.
4. **Analysis recovery** — desktop + mobile, one representative recoverable/non-ready composition if the visual distinction is small.

Do not generate separate Stitch screens for every collection count.

---

## 18. Product review register

The contract proposes the following frontend decisions for approval:

1. Seven canonical UI states are sufficient; count/optional-field variants are data-density attributes rather than separate states.
2. Active and slow analysis share one continuous screen shell.
3. Recoverable failure and insufficient-evidence states share one recovery visual family but remain semantically distinct.
4. NORMAL and PARTIAL Preview use one page composition with fluid count handling and no empty placeholders.
5. Desktop uses a natural end-of-Preview CTA; persistent desktop CTA is not canonical.
6. A mobile bottom sticky CTA is permitted for later visual exploration but is not required; if used, it is the same canonical action and exact copy.
7. Horizontal carousels are not the canonical mobile pattern for Preview content.

### Genuinely unresolved Product decisions

Only one presentation-level decision remains potentially open:

- **Mobile persistent CTA:** approve a bottom sticky `Verify & claim this brand` as a preferred mobile pattern, or leave CTA persistence to Stitch exploration/acceptance. This does not alter product semantics.

No unresolved Product decision exists around Preview readiness, five-section structure, copy, editability, collection minimums, slow-analysis semantics, failure/non-ready distinction, or verification action meaning.

---

## 19. Stitch boundary

Do not invoke Stitch until Product explicitly approves both:

- `frontend/brand-onboarding/brand_preview_frontend_state_contract.yaml`;
- `frontend/brand-onboarding/brand_preview_screen_interaction_contract.md`.

After approval, Stitch must preserve frozen copy and these state/action semantics and focus only on visual composition, Aurora compliance and responsive transformation.
