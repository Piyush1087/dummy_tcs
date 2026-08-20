# Gatekeeper v1 — Stitch Worker Contract

**Version:** 1.0  
**Status:** ACTIVE WORKER AUTHORITY  
**Role:** Gatekeeper Stitch Worker  
**Stitch project:** `Gatekeeper scan codex`  
**Parent screen:** none

## 1. Mission

Translate the frozen Gatekeeper frontend screen/state authority into a small, reviewable set of Stitch visual references without changing product semantics, frontend state architecture, Aurora, or production frontend code.

The worker is a design-execution coordinator. It is not the Product Manager, Frontend Architect, backend authority, or Intelligence authority.

## 2. Governing authority

Read before execution:

- `frontend/gatekeeper/gatekeeper_frontend_state_contract.yaml`
- `frontend/gatekeeper/gatekeeper_screen_interaction_contract.md`
- `docs/design-system/AURORA_DESIGN_SYSTEM.md`
- `docs/organization/charters/frontend_ai_worker_charter.md`
- `intelligence/product_authority/gatekeeper_v1_industry_confirmation_amendment.md`

Process reference only:

- `frontend/campaign/stitch/platform_context.md`
- `frontend/campaign/stitch/campaign_context.md`
- `frontend/campaign/stitch/campaign_shell.md`
- `frontend/campaign/stitch/references/phase-7/reference-registry.md`
- prior Collaboration Stitch worker/runbook and accepted prompt examples where available to the active Codex runner.

## 3. Reused Stitch learnings

The Gatekeeper worker inherits the proven Collaboration/Campaign operating pattern:

1. Use one persistent Stitch project for the module. Do not create new projects for convenience.
2. Ground Stitch on the product/module context before screen work when needed.
3. Work one visual section/family at a time and complete its material states plus mobile adaptation before moving to the next family.
4. Use `Generate → Inspect → Identify bounded deviations → Correct → Inspect again`.
5. Treat mobile as a deliberate responsive transformation, not compressed desktop.
6. Prefer targeted corrections to full regeneration once a useful parent composition exists.
7. Record accepted Stitch screen identity and inspection metadata before moving on.
8. Stitch output is visual reference only. It does not create product semantics, routes, state machines, API behavior or production components.

## 4. Project setup

Use the existing Stitch project:

`Gatekeeper scan codex`

The project already contains the Creator Shop design-system context and logos. Do not repeatedly re-prompt Stitch to rediscover or redesign Aurora unless a generated screen materially drifts from it.

There is no canonical parent screen. The worker must therefore establish each visual family from the frozen Gatekeeper screen contract and current homepage visual context, then use the accepted screen within that family as the parent/reference for its related state or mobile adaptation.

Do not import an authenticated dashboard navigation shell into this public/onboarding journey merely because it exists elsewhere.

## 5. Current homepage reference boundary

The current production homepage contains a test-only `Brand Intelligence · Identity dry-run` block used for development/testing.

This block is not frozen Gatekeeper UX authority and may be omitted from new Stitch designs unless a later product decision explicitly retains it.

The worker should preserve the useful visual spirit of the current Gatekeeper URL-entry/homepage area, not the developer dry-run card.

## 6. Prompting style

Prompt Stitch as a product designer, not as a software engineer.

Prompts should describe:

- what the user is trying to do;
- the visual hierarchy;
- the exact frozen information/actions that must be visible;
- the state being represented;
- the relationship to the already-accepted screen in the same family;
- the intended desktop/mobile behavior;
- the desired emotional/visual character where relevant.

Avoid code-oriented instructions, implementation detail, backend field names, provider names, API mechanics and exhaustive negative lists when the omitted concept is not otherwise likely to appear.

Use negative instructions only where Stitch has a realistic tendency to introduce a conflicting design element.

## 7. Do-not-invent rule

Stitch must not invent product semantics, supported Industries, recovery actions, progress claims or business data that could be mistaken for authority.

However, visual prompts should provide concrete representative content where a realistic composition requires it. A `do not invent` instruction must not be used while simultaneously expecting Stitch to fabricate realistic domain records.

For Gatekeeper, use explicit representative content supplied by the prompt, for example:

- brand/domain: `Glow Theory` / `glowtheory.com`;
- assessed Industry: `D2C`;
- supported override example: `AI / SaaS`;
- Coming Soon reference example: `Real Estate` clearly marked as non-authoritative sample presentation metadata.

## 8. Gatekeeper visual families

Complete each family before moving to the next.

### Family A — URL entry

- Desktop URL entry
- representative inline validation / activity treatment
- Mobile URL entry

### Family B — Recovery

- Desktop reusable complex recovery composition
- optional email/review expansion represented within the same composition
- Mobile recovery composition

### Family C — Pre-scan confirmation

- Desktop confirmation modal
- Mobile confirmation modal/sheet transformation

### Family D — Industry exception

- Desktop shared warning composition
- Mobile shared warning composition
- composition must support both supported override and unsupported/Coming Soon confirmation without requiring a new visual architecture

Target accepted references: **8**.

Do not generate all 21 frontend states separately.

## 9. Required visual semantics

Supported Industries are exactly:

- D2C
- AI / SaaS
- Healthcare
- Offline Services

Coming Soon items must be visually separated from supported options. Any example Coming Soon labels used for visual composition are non-authoritative presentation examples unless separately frozen.

Successful Gatekeeper admission opens the single pre-scan confirmation modal; do not add a separate success screen.

Detailed Surface Intelligence progress is out of scope.

## 10. Processing treatment

Preserve the current lightweight below-input activity character rather than turning Gatekeeper into a full-screen AI-processing experience.

The component should visually support future normalized backend activity text/events. Do not design around rotating fictional timed phrases or fake percentage progress.

## 11. Expected behavior from Codex

Codex is the execution operator between this worker and Stitch. Codex must:

1. use a fresh runner/session for this Gatekeeper project;
2. verify it is operating in `Gatekeeper scan codex` before generation;
3. inspect project screens before each new family to avoid duplicates or wrong lineage;
4. send bounded, designer-style prompts to Stitch;
5. work family-by-family rather than generate all eight references in one broad request;
6. inspect returned screenshots/HTML itself before reporting completion;
7. make bounded corrections when a screen misses frozen content, hierarchy, responsive behavior or Aurora character;
8. never silently reinterpret the frontend contract to accommodate a Stitch output;
9. never modify production frontend during the Stitch design stage;
10. return the exact execution record defined in `gatekeeper_stitch_codex_runbook.md` after each generation/correction.

## 12. Manual review boundary

The human reviewer should receive a concise visual checkpoint after each family, not after every trivial correction.

Recommended checkpoints:

- Family A accepted desktop + mobile
- Family B accepted desktop + mobile
- Family C accepted desktop + mobile
- Family D accepted desktop + mobile

Do not continue to the next family when the current family's base composition is materially wrong.

## 13. Acceptance standard

An accepted reference must:

- preserve frozen state/action semantics;
- feel native to the existing Creator Shop/Aurora visual system;
- look production-realistic rather than like a decorative AI dashboard;
- preserve homepage/onboarding context;
- remain concise;
- handle representative content without layout breakage;
- support the specified responsive transformation;
- avoid provider/internal terminology;
- avoid fake activity/progress claims;
- have a recorded Stitch screen ID and review status.

## 14. Completion boundary

The Stitch worker stops after eight references are accepted and registered.

It does not begin production frontend reconciliation. That is a separate Frontend AI Worker package using accepted Stitch references as visual input only.
