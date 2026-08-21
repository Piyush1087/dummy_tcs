# Brand Preview UX Copy Contract

**Version:** 1.0 — Proposed for Product Copy Review  
**Status:** PROPOSED — NOT YET FROZEN  
**Scope:** Continuous Fast Brand Analysis → Brand Preview → Brand verification/claim  
**Owner:** Frontend AI Worker  
**Product authority:** `intelligence/product_authority/brand_onboarding_v1_product_authority.md`

## 1. Purpose

This contract defines the customer-facing copy for the Brand Preview experience and the immediately preceding Fast Brand Analysis state.

Its purpose is to make Brand Preview feel like a concise demonstration of useful understanding, not an extraction report, configuration form, or AI-generated audit.

The intended user reaction is:

> **Creator Shop understands my Brand and already has a credible point of view about how creators could help it.**

The governing copy principle is:

> **Prefer a smaller truthful Preview over fabricated richness.**

Brand Preview is non-editable. It does not introduce Product Catalogue, Competitors, budget, editable Brand DNA fields, campaign setup, confidence percentages, Instagram connection, pricing, or review/configuration workflows.

---

## 2. Voice and language principles

Brand Preview copy should be:

- intelligent without sounding theatrical;
- confident without presenting inference as fact;
- commercially useful rather than descriptive for its own sake;
- specific to creator marketing;
- concise enough to scan quickly;
- natural and human rather than technical;
- specific to the Brand's Industry and business model;
- bounded when evidence is partial.

Avoid customer-facing terms such as:

- Intelligence Engine;
- Gatekeeper;
- Surface Scan;
- processor;
- evidence contract;
- execution profile;
- confidence score;
- model/provider names;
- raw internal taxonomy or reasoning labels.

Prefer natural inference language when needed:

- `We see…`
- `Your strongest opportunity appears to be…`
- `A useful starting point is…`
- `From what we can see on your website…`
- `We found enough to start with…`

Avoid:

- `Our AI discovered…`
- `We are 87% confident…`
- `You are a market leader…`
- `Your customers love…`
- `You outperform…`
- unsupported claims about growth, market share, conversion, quality, reputation, outcomes, or performance.

---

# 3. Fast Brand Analysis — exact static UI copy

## 3.1 Screen eyebrow

**`Building your Brand Preview`**

## 3.2 Headline

**`We're getting to know your Brand.`**

## 3.3 Supporting copy

**`We're turning what we can learn from your website into a focused view of who you need to influence, where creators could help, and which creator profiles are worth exploring first.`**

This copy deliberately describes customer value, not runtime mechanics.

## 3.4 Progress phase labels

Use these four labels in this order when the runtime can truthfully map work into these semantic phases:

1. **`Understanding your Brand`**
2. **`Learning who you need to reach`**
3. **`Finding where creators can help`**
4. **`Preparing your Brand Preview`**

Do not rotate these labels on a fictional timer. They should represent actual normalized progress where available.

If runtime activity is too coarse to support phase-level progress, use only:

**`Building your Brand Preview…`**

## 3.5 Analysis helper copy

**`You don't need to stay on this screen once your Preview is ready. Deeper analysis can continue in the background after you move on.`**

This helper is supporting copy and should not visually compete with the progress state.

---

# 4. Brand Preview — exact static UI copy

## 4.1 Page eyebrow

**`Your Brand Preview`**

## 4.2 Headline

**`Here's how we see your Brand so far.`**

## 4.3 Subheadline

**`A focused first view of your Brand, the people you need to influence, and where creators could make a meaningful difference.`**

The phrase `so far` is intentional: it communicates useful confidence while leaving room for deeper post-onboarding understanding.

---

# 5. Frozen section copy

Brand Preview contains exactly five semantic sections.

## 5.1 Section 1 — Brand identity / recognition

### Section heading

**`The Brand we found`**

### Optional helper copy

Normally omit helper copy when Brand name, domain, Industry, logo and descriptor are self-explanatory.

If a helper is needed because recognition evidence is partial:

**`This is the Brand context we're using for your Preview.`**

### Static field labels

- **`Industry`**
- **`Website`**

Do not label the descriptor as `AI summary`, `Brand DNA`, `positioning`, or `confidence`.

---

## 5.2 Section 2 — How Creator Shop understands the Brand

### Section heading

**`How we understand your Brand`**

### Section helper copy

**`The clearest positioning and customer context we can see from your website.`**

The dynamic narrative follows directly beneath this copy.

---

## 5.3 Section 3 — Who the Brand needs to influence

### Section heading

**`Who you need to influence`**

### Section helper copy

**`The audience groups that appear most relevant to earning attention, trust or action.`**

This language intentionally frames Audience content as a useful hypothesis, not CRM truth.

---

## 5.4 Section 4 — Where creators can make the difference

### Section heading

**`Where creators can make the difference`**

### Section helper copy

**`The strongest creator-marketing opportunities we can see right now.`**

These are opportunity statements, not Campaign recommendations.

---

## 5.5 Section 5 — Creators Creator Shop would start with

### Section heading

**`Creators we'd start with`**

### Section helper copy

**`A few creator profiles that fit the job—not a final Campaign shortlist.`**

This explicitly prevents the Preview recommendations from being mistaken for later Campaign creator-strategy authority.

---

# 6. Verification transition — exact static copy

## 6.1 Transition message

**`Ready to make this yours? Verify your work email to claim the Brand and create your Creator Shop workspace.`**

## 6.2 Primary CTA

**`Verify & claim this Brand`**

## 6.3 Secondary information

No secondary CTA is recommended on the default Preview.

Do not add `Edit`, `Review details`, `See all data`, `Improve this Preview`, `Connect Instagram`, or `Set up Campaign` actions here.

If Product later requires a lightweight explanatory disclosure, the preferred label is:

**`How this Preview was formed`**

This should only explain that the Preview is based on currently available Brand website information and may deepen later; it must not expose raw reasoning, provider details or confidence scores.

## 6.4 Footer/transition note

**`You'll be able to deepen and correct your Brand information after verification without reviewing every inferred detail now.`**

This is optional supporting copy. Omit it if the transition card already feels self-explanatory.

---

# 7. Dynamic AI-copy writing rules

## 7.1 Brand descriptor

### Purpose

Create immediate recognition in one short line beneath or beside Brand identity.

### Length

- target: **5–10 words**;
- maximum: **14 words / 90 characters**;
- one line preferred; two lines maximum on narrow mobile.

### Voice

Neutral, specific, descriptive.

### Perspective

Third-person noun phrase, not a full marketing sentence.

### Required content

Describe what the Brand fundamentally offers and, where useful, the customer or use context.

### Good patterns

- `Everyday skincare built around barrier-friendly routines`
- `AI-assisted workflow software for customer-support teams`
- `Multi-speciality fertility care with guided treatment journeys`
- `Neighbourhood strength studio built around coached small groups`

### Prohibited

- superlatives (`leading`, `best`, `premium`) unless directly established and necessary;
- unverifiable quality claims;
- slogan-like copy;
- performance claims;
- creator recommendations.

### Uncertainty handling

If the Brand's exact proposition is unclear, use the narrowest grounded category:

`Skincare and personal-care Brand`

rather than inventing a positioning claim.

### Unavailable behavior

Omit the descriptor. Do not replace it with `Not available`.

---

## 7.2 Brand-understanding narrative

### Purpose

Explain what Creator Shop believes the Brand is trying to mean to customers and why that context matters for creator marketing.

### Length

- target: **45–75 words**;
- minimum: **30 words** when evidence is sufficient;
- maximum: **90 words**;
- **2–3 sentences**;
- one paragraph only.

### Voice

Observant, commercially useful, restrained.

### Perspective

Use `you/your` for direct relevance. Use `we see` only where the statement is inferential.

### Required content

Include at least two of:

- what the Brand offers;
- the need/problem/context it serves;
- the Brand's apparent positioning or experience;
- why trust, demonstration, education, proof, aspiration or relevance matters for creators.

### Prohibited

- generic compliments;
- unsupported market leadership;
- unsupported customer sentiment;
- unsupported performance metrics;
- claims of clinical efficacy or health outcomes;
- claims that a creator strategy `will` deliver a business outcome;
- invented differentiation.

### Uncertainty language

Prefer:

- `We see a Brand centred on…`
- `Your website points to…`
- `The clearest story we can see is…`
- `From the information available, your Brand appears to…`

Do not repeat hedging in every sentence.

### Truncation/responsive behavior

Do not truncate the approved narrative mid-sentence. Generate within limits instead. Mobile uses the same copy, not a separately generated summary.

### Unavailable behavior

Replace the narrative with the partial-state copy defined in Section 9. Do not fabricate a generic Brand summary.

---

## 7.3 Audience group label

### Purpose

Give each useful Audience hypothesis a memorable, human-readable name.

### Quantity

- default: **2–3 groups**;
- maximum: **3 groups**;
- minimum: **1 group** if only one is credibly grounded.

### Length

- target: **2–5 words**;
- maximum: **38 characters**.

### Voice

Human, commercially legible, non-caricatured.

### Good patterns

- `Routine-first skincare buyers`
- `Support leaders under pressure`
- `Patients researching treatment options`
- `Busy professionals rebuilding fitness`

### Prohibited

- invented demographic precision;
- sensitive targeting labels;
- stereotypes;
- fake persona names;
- unsupported income/lifestyle assumptions.

---

## 7.4 Audience group explanation

### Purpose

Explain why this audience matters to the Brand and creator marketing.

### Length

- target: **18–32 words**;
- maximum: **40 words / 240 characters**;
- **1 sentence** preferred; 2 short sentences maximum.

### Required content

Connect a real Brand need to the group's decision context, concern or motivation.

### Uncertainty language

Use `likely`, `appears`, or `may` only when needed. Do not show numeric confidence.

### Unavailable behavior

Show fewer groups. Never generate filler groups to reach three.

---

## 7.5 Creator-marketing opportunity title

### Purpose

Name a strategic role creators can play.

### Quantity

- default: **2–3 opportunities**;
- maximum: **3**;
- show **1** if only one is credibly grounded.

### Length

- target: **3–7 words**;
- maximum: **55 characters**.

### Voice

Action-oriented but not campaign-specific.

### Good patterns

- `Make routines easier to understand`
- `Turn product capability into proof`
- `Build confidence before consultation`
- `Make the first visit feel approachable`

### Prohibited

- campaign names;
- deliverables (`3 Reels`, `Stories`);
- budget;
- guaranteed outcomes;
- specific creator counts;
- final channel plans.

---

## 7.6 Creator-marketing opportunity explanation

### Purpose

Explain why the opportunity matters to this Brand.

### Length

- target: **22–38 words**;
- maximum: **48 words / 290 characters**;
- 1–2 sentences.

### Required content

Connect the creator role to an observed Brand/customer barrier such as explanation, trust, demonstration, aspiration, social proof, relevance, trial confidence or local discovery.

### Uncertainty

Use bounded phrases such as `appears to be`, `could help`, `is likely to matter` where the conclusion is inferential.

### Unavailable behavior

Show fewer opportunities.

---

## 7.7 Creator-archetype label

### Purpose

Describe the creator profile Creator Shop would explore first.

### Quantity

- default: **3 archetypes**;
- maximum: **4**;
- minimum: **2**, or **1** when evidence is genuinely narrow.

### Length

- target: **2–5 words**;
- maximum: **40 characters**.

### Voice

Descriptive, not branded or overly clever.

### Good patterns

- `Routine educators`
- `Operator-led B2B creators`
- `Doctor-led explainers`
- `Local fitness storytellers`

### Prohibited

- follower tiers unless required by a later Campaign context;
- unsupported demographic restrictions;
- individual creator names;
- `perfect creator` language;
- hard Campaign targeting.

---

## 7.8 Creator-archetype rationale

### Purpose

Explain why this archetype fits the opportunity.

### Length

- target: **16–28 words**;
- maximum: **34 words / 220 characters**;
- one sentence.

### Required content

Tie the creator's communication strength to the Brand's context.

### Unavailable behavior

Show fewer archetypes. Do not fill missing slots with generic `Lifestyle creators` unless that is actually grounded.

---

# 8. Fully populated Industry fixtures

These fixtures are fictional UI examples. They illustrate expected specificity and copy density; they are not factual claims about real Brands.

---

## 8.1 D2C fixture — `Morrow Skin`

### The Brand we found

**Brand:** Morrow Skin  
**Industry:** D2C  
**Website:** morrowskin.example  
**Descriptor:** `Barrier-friendly skincare for simple everyday routines`

### How we understand your Brand

`Morrow Skin appears to be built around making consistent skincare feel simpler rather than more complicated. The product story centres on approachable routines, ingredient clarity and everyday use, which makes creator-led demonstration especially valuable: people need to see how the products fit together and what a realistic routine looks like.`

### Who you need to influence

**Routine-first skincare buyers**  
`People who want a dependable routine without researching dozens of ingredients or building a complex regimen.`

**Ingredient-aware switchers**  
`Buyers comparing alternatives who need enough clarity about formulation and use to feel comfortable changing what already sits on their shelf.`

**Problem-led researchers**  
`People arriving with a specific concern who are likely to value practical explanation before they feel ready to try a new Brand.`

### Where creators can make the difference

**Make the routine easy to picture**  
`Creators can show the products in an ordinary morning or evening routine, turning separate product pages into one understandable sequence people can imagine following.`

**Turn ingredient language into everyday meaning**  
`Ingredient-led education can help bridge the gap between formulation claims and the practical questions buyers ask: what it does, when to use it and where it fits.`

**Build trust through realistic use**  
`Credible creators can make the Brand feel less like another polished skincare promise by showing texture, application and routine choices in a grounded context.`

### Creators we'd start with

**Routine educators**  
`Creators who teach simple skincare habits can make the Brand's low-friction routine proposition tangible without overcomplicating it.`

**Ingredient explainers**  
`Creators comfortable translating formulation language can help shoppers understand why a product belongs in their routine.`

**Everyday beauty storytellers**  
`Creators with believable daily-use content can place the Brand inside real habits rather than presenting it only as a product reveal.`

---

## 8.2 SaaS / AI fixture — `Relaydesk AI`

### The Brand we found

**Brand:** Relaydesk AI  
**Industry:** AI / SaaS  
**Website:** relaydesk.example  
**Descriptor:** `AI-assisted support workflows for growing customer-service teams`

### How we understand your Brand

`Relaydesk AI appears to help customer-support teams handle repetitive work while keeping human operators in control of more complex conversations. The challenge is less about making the product look exciting and more about making its operational value believable—showing where it fits into an existing support workflow and what changes for the people doing the work.`

### Who you need to influence

**Support leaders under pressure**  
`Team leads balancing response quality, workload and headcount who need to understand whether automation will genuinely improve daily operations.`

**Hands-on support operators**  
`Practitioners who will judge the product by how naturally it fits their queue, tools and customer conversations rather than by high-level AI claims.`

**CX-minded growth teams**  
`Operators trying to scale customer experience without letting faster growth create a noticeably worse support experience.`

### Where creators can make the difference

**Show the workflow, not the buzzwords**  
`Practitioner-led walkthroughs can make the value concrete by showing where Relaydesk sits in a real support flow and which tasks remain human-led.`

**Create believable operator proof**  
`Trusted CX and support creators can evaluate the product through the questions buyers actually ask, making the conversation more credible than feature-only promotion.`

**Teach the category before selling the tool**  
`Educational content can help teams distinguish useful support automation from generic AI promises, giving the Brand a clearer role in an increasingly noisy category.`

### Creators we'd start with

**Support-operations practitioners**  
`Working support and CX operators can explain the product in the language of queues, handoffs, quality and team workload.`

**Operator-led B2B creators**  
`Creators known for practical software evaluation can make product capability credible without relying on polished SaaS messaging.`

**AI workflow educators**  
`Educators who demonstrate applied AI workflows can place Relaydesk inside a broader operating system rather than treating it as a standalone novelty.`

---

## 8.3 Healthcare fixture — `Northstar Fertility Care`

### The Brand we found

**Brand:** Northstar Fertility Care  
**Industry:** Healthcare  
**Website:** northstarfertility.example  
**Descriptor:** `Fertility care centred on guided, clinician-led treatment journeys`

### How we understand your Brand

`Northstar Fertility Care appears to position the treatment journey as something patients should be able to understand, not simply endure. The Brand combines clinical care with guidance around a process that can feel emotionally and medically complex. Creator marketing therefore needs to build informed confidence—not make outcome promises or reduce care decisions to promotional claims.`

### Who you need to influence

**Early-stage treatment researchers**  
`People trying to understand when to seek specialist care and what a first consultation may involve before they are ready to contact a clinic.`

**Patients comparing care approaches**  
`People evaluating clinics who may care as much about clarity, continuity and communication as they do about the treatment options themselves.`

**Partners navigating the journey together**  
`Couples or partners looking for practical guidance that helps both people understand the steps, decisions and emotional realities involved.`

### Where creators can make the difference

**Make the first step less intimidating**  
`Credible educational voices can explain what typically happens before and during an initial consultation, reducing uncertainty without presenting medical advice as personal diagnosis.`

**Build trust through clear education**  
`Clinician-led or medically responsible creators can help explain treatment concepts in accessible language while keeping decisions anchored to qualified care.`

**Represent the journey with empathy**  
`Thoughtful patient-experience storytelling can acknowledge the emotional reality of fertility care without promising outcomes or turning vulnerable experiences into testimonials for efficacy.`

### Creators we'd start with

**Doctor-led explainers**  
`Qualified clinicians who communicate clearly can make complex fertility concepts easier to understand without weakening medical boundaries.`

**Women's health educators**  
`Evidence-minded health educators can help audiences recognise useful questions and prepare for informed conversations with care providers.`

**Patient-journey storytellers**  
`Responsible creators sharing lived experience can make the emotional and practical journey feel more recognisable without making clinical claims.`

---

## 8.4 Offline Services fixture — `Foundry Strength Club`

### The Brand we found

**Brand:** Foundry Strength Club  
**Industry:** Offline Services  
**Website:** foundrystrength.example  
**Descriptor:** `Coached small-group strength training for busy adults`

### How we understand your Brand

`Foundry Strength Club appears to sell more than gym access: the core value is coached structure for people who want to get stronger without having to design their own programme. Because the experience happens in person, creators can reduce the uncertainty around joining by showing what a session actually feels like, who belongs there and how coaching works.`

### Who you need to influence

**Busy adults restarting fitness**  
`People who want to train consistently again but may be put off by unstructured gyms, complicated programmes or the feeling that they are starting from behind.`

**Guidance-seeking gym members**  
`People already paying for fitness who may be dissatisfied with training alone and want more coaching, accountability or progression.`

**Local strength-curious beginners**  
`Nearby prospects interested in strength training who need reassurance that the environment is approachable before they commit to a first visit.`

### Where creators can make the difference

**Show what a first session feels like**  
`Local creators can remove much of the uncertainty around the experience by showing arrival, coaching, group size and the rhythm of a real session.`

**Make coaching value visible**  
`Creator stories can demonstrate the difference between simply having equipment available and having someone actively guide technique, progression and consistency.`

**Turn local awareness into familiarity**  
`Repeated local creator exposure can make the club feel like a familiar part of the neighbourhood rather than an unknown fitness facility someone has to take a chance on.`

### Creators we'd start with

**Local fitness storytellers**  
`Creators with genuine local reach can make the physical experience and community feel familiar before a prospective member visits.`

**Beginner-friendly strength educators**  
`Creators who teach strength without intimidation can reinforce the Brand's coached, accessible route into training.`

**Busy-professional lifestyle creators**  
`Creators who realistically show how training fits around work and family life can make consistency feel achievable rather than aspirational.`

---

# 9. State-specific copy

## 9.1 Full Preview ready

Use the default copy in Sections 4–6.

No `analysis complete` success banner is needed. The Preview itself is the success state.

---

## 9.2 Preview ready with one weak or partial block

The Preview should still open if enough grounded understanding exists overall.

### Block-level label

**`We're still learning here`**

### Block-level explanation

**`We found enough to give you a useful starting point, but this part of the Preview is still limited by what we can learn from the website alone.`**

Use only on the affected block.

Do not lower the tone of the entire page because one block is weak.

---

## 9.3 Brand logo unavailable

Do not show an error.

Use Brand name initials, neutral Brand mark treatment, or no logo according to the later screen contract.

No customer-facing fallback copy is required.

If an accessible text label is required:

**`Brand logo not available`**

This should not appear as prominent body copy.

---

## 9.4 Only one or two credible creator opportunities

Show only the credible opportunities.

Optional helper copy beneath the section heading:

**`We're showing the opportunities we can support clearly right now rather than filling the list with guesses.`**

Do not render empty cards.

---

## 9.5 Audience understanding insufficient for multiple credible groups

If one audience group is grounded, show one group and use:

**`We can see one audience clearly enough to start with. We'll deepen this view as we learn more about your Brand.`**

If no useful audience group is grounded, do not generate generic personas. Use:

**`We don't have enough grounded information yet to describe your audience usefully.`**

Supporting line:

**`You can still continue. We'll keep building this understanding after you claim the Brand.`**

---

## 9.6 Brand-understanding narrative is partial

Use:

**`We found the basics of what you offer, but not enough reliable context yet to give you a useful point of view on the Brand.`**

Supporting line:

**`We'll keep learning after you continue rather than filling the gap with assumptions.`**

If this narrative is so weak that the overall Preview is no longer credible, do not open Brand Preview; use the recoverable analysis state instead.

---

## 9.7 Fast analysis taking longer than expected

### Headline

**`We're still building your Brand Preview.`**

### Body

**`This website is taking a little longer to understand, but the analysis is still moving. We'll show your Preview as soon as we have enough grounded information to make it useful.`**

### Progress status

**`Still analysing…`**

Do not show an invented minute estimate unless runtime/product authority later provides a defensible range.

Optional supporting line after a materially long wait:

**`You don't need to restart the scan.`**

Only show that sentence if restart is genuinely unnecessary.

---

## 9.8 Recoverable analysis failure

### Headline

**`We couldn't finish your Brand Preview.`**

### Body

**`We weren't able to gather enough reliable information to build a Preview we trust. Nothing has been filled in with guesses.`**

### Primary CTA

**`Try again`**

### Secondary support copy

**`If the problem continues, you can return to your Brand website check and try again later.`**

Do not promise that retry will succeed.

---

## 9.9 Analysis cannot produce a credible Preview because evidence is too weak

### Headline

**`We need a little more to understand this Brand.`**

### Body

**`The website doesn't currently give us enough grounded information to build a Brand Preview that would be genuinely useful.`**

### Primary CTA

**`Try again`**

### Supporting copy

**`A richer or more accessible Brand website may give us enough context to continue.`**

This state should not invent a generic Preview.

---

## 9.10 Transition from confirmed Industry into Fast Brand Analysis

After the user confirms a supported Industry at the Gatekeeper boundary, the transition should feel continuous.

Preferred transient status copy:

**`Industry confirmed. Now we're building your Brand Preview.`**

If the UI transitions immediately into the Fast Brand Analysis screen, this transient sentence may be omitted and the screen may begin directly with:

**`We're getting to know your Brand.`**

Do not expose `Gatekeeper complete`, `Surface started`, or similar internal terms.

---

# 10. Mobile copy constraints

Mobile must preserve the same semantic meaning as desktop. Do not create separate mobile business copy.

## 10.1 Headline limits

- page headline: target **≤ 42 characters**, maximum **2 lines** at 390 px;
- section headings: target **≤ 38 characters**, maximum **2 lines**;
- opportunity/archetype labels: maximum **2 lines**;
- CTA: keep **`Verify & claim this Brand`** unchanged unless Product explicitly approves a shorter global label.

## 10.2 Body-copy limits

- Brand narrative: maximum **90 words**, but target 45–75 so mobile rarely needs progressive disclosure;
- audience explanation: maximum 40 words;
- opportunity explanation: maximum 48 words;
- archetype rationale: maximum 34 words.

## 10.3 Truncation rule

Never truncate generated copy mid-sentence with ellipsis in the default Preview.

Generate within the defined UI-safe limits.

If the later visual design cannot accommodate the maximum, reduce generation limits globally rather than creating inconsistent desktop/mobile text variants.

## 10.4 Partial-state copy on mobile

Use the same wording, but supporting sentences may be visually collapsed beneath the primary partial-state sentence if progressive disclosure is needed.

Do not hide the fact that content is partial.

## 10.5 Card density

Do not keep three empty or low-value cards simply to preserve desktop symmetry. On mobile especially, fewer grounded groups/opportunities/archetypes are preferable to repeated generic content.

---

# 11. Copy hierarchy and emphasis guidance

This section defines content priority only. It is not a visual layout specification.

## 11.1 Primary copy

The user should notice these first:

1. Brand recognition: name + descriptor;
2. page headline: `Here's how we see your Brand so far.`;
3. Brand-understanding narrative;
4. opportunity titles;
5. primary CTA: `Verify & claim this Brand`.

These establish recognition, value and forward momentum.

## 11.2 Supporting copy

Supporting copy adds meaning without competing with the primary story:

- page subheadline;
- Industry/domain;
- audience explanations;
- opportunity explanations;
- archetype rationales;
- section helper copy.

## 11.3 Explanatory copy

Use only when necessary to preserve truth or clarify semantics:

- partial-evidence language;
- `not a final Campaign shortlist` clarification;
- verification transition explanation;
- slow-analysis/recovery details.

Explanatory copy should not become permanent clutter in the full-ready state.

## 11.4 Optional / progressive-disclosure copy

Potential progressive disclosure:

- `How this Preview was formed`;
- longer explanation of partial evidence;
- background-analysis continuation note.

Do not make optional explanation a prerequisite for understanding the Preview.

---

# 12. Content assembly rules

A full Preview should usually contain:

- one Brand descriptor;
- one Brand-understanding narrative;
- 2–3 Audience groups;
- 2–3 creator opportunities;
- 2–4 creator archetypes.

These are target ranges, not quotas.

The frontend/content layer must support:

- 0–1 descriptor;
- 0–3 Audience groups;
- 0–3 opportunities;
- 0–4 archetypes.

Absence must not automatically be treated as failure if the overall Preview still establishes useful Brand understanding.

The minimum credible Preview should contain enough grounded content to answer all three questions at a useful level:

1. `Do we recognise the Brand?`
2. `Do we have a credible view of who matters?`
3. `Can we say something specific about how creators could help?`

If the answer to any of these is materially `no`, the product should prefer a truthful recovery/insufficient-evidence state over a hollow Preview.

---

# 13. Copy prohibitions for Stitch and later implementation

Stitch and implementation must not introduce or rewrite copy that changes product meaning.

Do not add:

- `Edit` controls;
- `Regenerate` controls;
- `Looks good` approval language;
- `Confirm your Audience`;
- `Select creator archetypes`;
- `Add competitors`;
- `View Product Catalogue`;
- `Set your budget`;
- `Connect Instagram`;
- `Create a Campaign`;
- confidence percentages;
- AI scores;
- `Brand DNA` field labels;
- campaign objectives/deliverables;
- full Offering/Product lists;
- competitor tables.

The Preview is a recognition and value moment, not a checkpoint where the user is asked to validate each inference.

---

# 14. Recommended copy freeze set for Product approval

Product approval should explicitly freeze the following static strings before Stitch:

- `Building your Brand Preview`
- `We're getting to know your Brand.`
- the four progress phase labels;
- `Your Brand Preview`
- `Here's how we see your Brand so far.`
- page subheadline;
- all five section headings;
- all five section helper lines where used;
- `Ready to make this yours? Verify your work email to claim the Brand and create your Creator Shop workspace.`
- `Verify & claim this Brand`
- all partial/slow/recovery state copy in Section 9;
- the dynamic-copy constraints and maximums in Section 7.

After freeze, Stitch should be instructed to preserve these strings and focus on composition, hierarchy, responsive transformation and Aurora compliance.

---

# 15. Genuinely unresolved copy decisions for Product review

Only the following decisions remain genuinely open:

1. **Verification CTA naming:** approve `Verify & claim this Brand` as the canonical CTA, or prefer the slightly more account-oriented `Verify & create my Brand workspace`. The first is recommended because it maps directly to the frozen verification/claim boundary and is shorter.
2. **Optional explanatory disclosure:** decide whether `How this Preview was formed` should appear at all in v1. Recommendation: omit by default; add only if Product believes users need explicit reassurance about how the Preview was derived.
3. **Background-analysis helper visibility:** decide whether the sentence `You don't need to stay on this screen once your Preview is ready. Deeper analysis can continue in the background after you move on.` should be visible during Fast Brand Analysis or reserved for unusually long analysis. Recommendation: show it only when analysis exceeds the normal fast path, so the default experience remains concise.

No other copy decision in this contract requires new Product semantics.