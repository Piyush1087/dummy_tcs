# Gatekeeper v1 — Stitch Worker Contract

**Version:** 1.1  
**Status:** ACTIVE WORKER AUTHORITY  
**Role:** Gatekeeper Stitch Worker  
**Stitch project:** `Gatekeeper scan codex`  
**Parent screen:** none

## 1. Mission

Translate the frozen Gatekeeper frontend authority into a small, reviewable set of Stitch visual references without changing product semantics, frontend state architecture, Aurora, or production frontend code.

The worker is a design-execution coordinator. It is not Product, Frontend Architecture, backend authority or Intelligence authority.

## 2. Governing authority for the worker

Codex/worker reads from the repository:

- `frontend/gatekeeper/gatekeeper_frontend_state_contract.yaml`
- `frontend/gatekeeper/gatekeeper_screen_interaction_contract.md`
- `frontend/gatekeeper/stitch/gatekeeper_stitch_screen_contracts.md`
- `docs/design-system/AURORA_DESIGN_SYSTEM.md`
- `docs/organization/charters/frontend_ai_worker_charter.md`
- `intelligence/product_authority/gatekeeper_v1_industry_confirmation_amendment.md`

Process reference only:

- prior Campaign Stitch package and reference registry;
- prior Collaboration Stitch worker/runbook and proven Stitch prompt examples available to the runner.

## 3. Manual Stitch-project context rule

Before the first Codex → Stitch generation, the user manually uploads the approved Gatekeeper design context into the Stitch project.

Codex must **not** paste, attach, re-send or restate those documents into Stitch prompts unless the user explicitly asks for a later refresh.

The worker may read the canonical repository versions for supervision and verification, but Stitch is expected to consume the manually uploaded project documents as its standing Gatekeeper context.

The manual upload pack is defined in `gatekeeper_stitch_context_manifest.md`.

## 4. Reused Stitch learnings

1. Use one persistent Stitch project for Gatekeeper.
2. Work one section/family at a time and finish its material states plus mobile before moving on.
3. Use `Generate → Inspect → bounded correction → Inspect again`.
4. Treat mobile as a deliberate responsive transformation, not compressed desktop.
5. Prefer editing a useful generated screen over regenerating it from scratch.
6. Record exact screen identity and inspection metadata.
7. Stitch output is visual reference only; it does not create product semantics or production code.

## 5. Project setup

Use:

`Gatekeeper scan codex`

The project already contains the Creator Shop design system and logos. The worker should not repeatedly instruct Stitch to rediscover Aurora.

The Gatekeeper documents listed in the context manifest must also be manually uploaded before the first design prompt.

There is no canonical parent screen initially. Establish the first accepted screen of each family, then use it as the visual source/parent for its related state or mobile adaptation.

## 6. Homepage reference boundary

The current homepage contains a developer-only `Brand Intelligence · Identity dry-run` block.

It is test UI, not Gatekeeper design authority. It may be omitted from the new design.

Preserve the useful visual spirit of the existing homepage and lightweight URL-processing treatment, not the dry-run card.

## 7. Prompting style

Prompt Stitch as a designer.

Prompts should focus on:

- the user's task;
- the section being designed;
- the visual hierarchy;
- required content/actions;
- representative content supplied by us;
- the state being represented;
- the relationship to the accepted screen in the same family;
- desktop/mobile transformation.

Avoid software-engineering language, API payloads, schemas, provider internals and long negative instruction lists.

Use negative instructions only where Stitch is realistically likely to introduce a conflicting visual idea.

## 8. Do-not-invent rule

Stitch must not invent product semantics, supported Industries, recovery actions or progress claims.

At the same time, prompts must supply representative content when a realistic visual composition needs content. Do not say `do not invent` and then expect Stitch to fabricate missing business records.

Representative content may include:

- brand: `Glow Theory`;
- domain: `glowtheory.com`;
- assessed Industry: `D2C`;
- supported override: `AI / SaaS`;
- Coming Soon example: `Real Estate`, marked as a visual example rather than final taxonomy authority.

## 9. Visual families

Complete in order:

### Family A — URL entry
- Desktop URL entry
- representative validation/activity treatment
- Mobile URL entry

### Family B — Recovery
- Desktop reusable recovery composition
- optional email/review expansion
- Mobile recovery

### Family C — Pre-scan confirmation
- Desktop confirmation modal
- Mobile confirmation modal/sheet

### Family D — Industry exception
- Desktop warning composition
- Mobile warning composition
- same composition must support supported override and unsupported/Coming Soon confirmation

Target accepted references: **8**.

## 10. Expected behavior from Codex

Codex must:

1. use a fresh runner/session;
2. verify project identity before generation;
3. verify the manual Gatekeeper document pack is present in the Stitch project;
4. never feed those documents again through a Stitch prompt;
5. inspect existing screens before each family;
6. send bounded designer-style prompts;
7. work family-by-family;
8. inspect returned screenshot/HTML before reporting;
9. make bounded corrections where appropriate;
10. never reinterpret the frontend contract to accommodate Stitch;
11. never modify production frontend during this stage;
12. return the execution record defined in `gatekeeper_stitch_codex_runbook.md`.

## 11. Manual review rhythm

Review after each family has both desktop and mobile references ready.

Do not move to the next family if the base composition is materially wrong.

## 12. Completion boundary

Stop after eight references are accepted and registered.

Production frontend reconciliation is a separate Frontend AI Worker package.
