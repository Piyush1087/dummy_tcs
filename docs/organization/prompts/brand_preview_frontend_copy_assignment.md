# Frontend AI Worker — Brand Preview UX Copy Assignment

## Assignment type

Product-to-frontend copy refinement. **Do not invoke Stitch and do not implement frontend code.**

## Principal authority

Read first:

- `docs/organization/charters/frontend_ai_worker_charter.md`
- `intelligence/product_authority/brand_onboarding_v1_product_authority.md`
- frozen Gatekeeper frontend/product authority only where needed for the transition into Brand Preview.

The Brand onboarding Product Authority is frozen. Do not redesign the journey or add review/configuration steps.

## Objective

Produce a complete **Brand Preview UX Copy Contract** suitable for Product review and later Stitch execution.

The copy contract must be strong enough that, after Product approval, Stitch can focus on visual hierarchy and composition rather than inventing or rewriting product language.

## Frozen semantic structure

Brand Preview contains these five blocks:

1. Brand identity / recognition;
2. how Creator Shop understands the Brand;
3. who the Brand needs to influence;
4. where creators can make the difference;
5. creators Creator Shop would start with.

The Preview is non-editable.

The principal transition is into Brand verification/claim.

Do not add Product Catalogue, Competitor table, budget, Brand DNA fields, confidence percentages, campaign setup or editable forms to this screen.

## Required output artifact

Create:

`frontend/brand-onboarding/brand_preview_ux_copy_contract.md`

The artifact should contain the following.

### 1. Exact static UI copy

Propose final customer-facing copy for:

- analysis/progress screen before Preview;
- Brand Preview eyebrow/headline/subheadline if required;
- all five section headings;
- helper/explanatory text;
- primary CTA into verification;
- any secondary information link if genuinely useful;
- footer/transition message;
- partial/weak-evidence language;
- slow-analysis/recovery language.

Prefer concise natural language. Avoid enterprise/AI jargon, internal terms such as `Intelligence`, `processor`, `evidence contract`, `confidence score`, `Gatekeeper`, `Surface Scan`, or `execution profile` unless the term is explicitly customer-facing and justified.

### 2. Dynamic-copy writing rules

For each AI-generated text surface define:

- purpose;
- recommended minimum/maximum length;
- sentence/paragraph limits;
- voice/tone;
- perspective;
- required content;
- prohibited claims;
- uncertainty language;
- truncation/responsive behavior;
- what should happen when the output is unavailable.

At minimum cover:

- Brand descriptor;
- Brand-understanding narrative;
- Audience group label/explanation;
- creator-marketing opportunity title/explanation;
- creator-archetype label/rationale.

### 3. Fully populated Industry fixtures

Provide realistic, complete Brand Preview example copy for all four supported MVP Industries:

- D2C;
- SaaS/AI;
- Healthcare;
- Offline Services.

Each example must feel genuinely Industry-specific. Do not simply swap nouns inside a generic template.

Use fictional or clearly generic Brands where possible. The examples are UI fixtures, not factual claims about real Brands.

### 4. State-specific copy

Cover at minimum:

- full Preview ready;
- Preview ready with one weak/partial block;
- Brand logo unavailable;
- only one or two credible creator opportunities;
- audience understanding insufficient for a confident multi-group output;
- fast analysis taking longer than expected;
- recoverable analysis failure;
- transition back from Industry confirmation into analysis if relevant;
- mobile compact copy behavior where wording/layout limits require it.

Do not invent fake content simply to keep every visual block populated. A smaller truthful Preview is preferable to fabricated richness.

### 5. Copy hierarchy / emphasis guidance

Identify which text is:

- primary;
- supporting;
- explanatory;
- optional/progressive disclosure.

This is not visual design. It is content hierarchy for the later screen contract.

## Copy principles

The Preview should make the user think:

> `Creator Shop understands my Brand and already has a credible creator-marketing point of view.`

It should not make the user feel that they are reviewing an AI extraction form.

Use language that is:

- intelligent but not theatrical;
- confident but grounded;
- commercially useful;
- concise;
- specific to creator marketing;
- non-generic;
- free from exaggerated AI claims.

Where a statement is inferential, use natural bounded language such as `We see...`, `Your strongest opportunity appears to be...`, or similar phrasing rather than exposing numerical confidence.

## Product boundaries

Do not:

- change the frozen onboarding sequence;
- add a Pricing page;
- add edit controls to Brand Preview;
- make Instagram part of Brand Preview;
- expose raw Product/Competitor Intelligence;
- invoke Stitch;
- modify production/frontend clone code.

## Completion state

Return:

`READY_FOR_PRODUCT_COPY_REVIEW`

with:

- artifact path;
- commit SHA;
- a short list of any genuinely unresolved copy decisions requiring Product Authority.
