# Brand Onboarding Program — Systems Architect Continuity Handoff

**Version:** 1.0  
**Status:** ACTIVE CONTINUITY AUTHORITY  
**Date:** 2026-08-22  
**Scope:** Website-first Brand onboarding through Brand Preview runtime/frontend completion and developer handoff

## 1. Purpose

This document allows a new Systems Architect AI Worker to replace the originating parent Product/Architecture chat without reconstructing the program from chat history.

It is the current operational continuity authority for the Brand onboarding program. It does not replace specialist charters or frozen module contracts; it points to them and records sequencing, handoff boundaries, current completion state, lessons learned and the next action.

Read first:

1. `docs/organization/charters/systems_architect_ai_worker_charter.md`
2. `docs/organization/prompts/systems_architect_ai_worker_initiation.md`
3. this document
4. relevant specialist charters referenced below

---

## 2. Principal repositories and production boundary

### Architectural authority

`Piyush1087/dummy_tcs`

Contains Product Authority, worker charters, Intelligence/Data Extraction contracts, frontend contracts, UI/UX visual direction, Stitch references and continuity/handoff artifacts.

### Backend implementation clone

`Piyush1087/creator-commerce-backend-v2-clone`

### Frontend implementation clone

`Piyush1087/creator-commerce-frontend-v2-clone`

### STOP BOUNDARY — developer-owned production integration

AI-worker responsibility ends after:

```text
frozen authority
+ validated backend implementation in backend clone
+ validated frontend implementation in frontend clone
+ cross-system runtime acceptance
+ exact final clone SHAs
+ migrations/env requirements
+ complete developer handoff
```

The human developer owns:

```text
reconciliation/merge into actual production repositories
→ production database migration execution
→ AWS/environment configuration and secrets
→ production deploy
→ production smoke test
```

Do not let any AI worker silently continue into actual production merge/deployment unless Product explicitly changes this policy.

---

## 3. Current specialist workers

### Systems Architect AI Worker

`docs/organization/charters/systems_architect_ai_worker_charter.md`

Owns program coherence, dependency ordering, worker allocation, cross-stream interfaces, integration gates and developer-handoff completeness.

### Intelligence Engine AI Worker

`docs/organization/charters/intelligence_engine_ai_worker_charter.md`

Owns semantic Intelligence, processors, reasoning, model/fallback policy, Evidence requirements, output contracts, readiness semantics, execution profiles and Intelligence runtime acceptance.

### Data Extraction Engine AI Worker

`docs/organization/charters/data_extraction_engine_ai_worker_charter.md`

Owns acquisition/provider mechanics, normalization, retries, source health and Evidence delivery.

Permanent boundary:

> **Intelligence controls WHY / WHAT / WHEN. Data Extraction controls HOW / CONNECTION / DELIVERY.**

### UI/UX Design AI Worker — newly introduced

`docs/organization/charters/ui_ux_design_ai_worker_charter.md`

Owns experience direction and visual quality before Stitch execution:

- experience objective and emotional sequence;
- information/visual hierarchy;
- visual direction;
- content/copy envelope before final copy freeze where practical;
- project-level Visual Direction Brief before a new Stitch project;
- family/screen-level visual briefing;
- Stitch visual-quality acceptance.

It does not own frontend state machines, backend semantics or Stitch execution mechanics.

### Frontend AI Worker

`docs/organization/charters/frontend_ai_worker_charter.md`

Owns UI-state architecture, screen/interaction contracts, responsive/accessibility behavior, Stitch execution coordination, frontend reconciliation and frontend runtime validation.

### Stitch worker

Operational sub-worker coordinated by Frontend. It knows the established Codex-connected Stitch workflow and should receive bounded visual authority from UI/UX plus semantic/screen authority from Frontend.

Stitch is a visual execution tool, not Product or UX authority.

---

## 4. Improved product-to-design-to-implementation lifecycle

The current Brand Preview work exposed a missing lifecycle layer. The preferred sequence for future material UI work is now:

```text
1. Product Authority
   what happens, why, what the user should understand/do

2. UI/UX Experience Direction
   intended feeling, hierarchy, visual rhythm, content envelope

3. UX Copy refinement
   exact static copy + bounded dynamic-copy rules within the design envelope

4. IE / backend semantic contracts as needed
   what data/state exists and readiness semantics

5. Frontend state/screen/interaction contracts
   UI states, transitions, responsive/accessibility behavior

6. UI/UX Visual Direction Brief for Stitch
   project-level visual character + screen-family direction

7. Stitch preparation
   concise context, fixtures and prompts

8. Stitch execution
   Generate → Inspect → bounded correction → Inspect

9. Dual acceptance
   A. CONTRACT_FIDELITY — FE/Product
   B. VISUAL_EXPERIENCE_QUALITY — UI/UX

10. Backend/IE/DE implementation
11. Frontend reconciliation
12. Cross-system runtime + visual acceptance
13. Clone integration
14. Developer production handoff
```

For future new Stitch projects, the UI/UX Visual Direction Brief should be loaded as standing context **before the first screen is generated**. Do not rely on copy + structural contracts alone to communicate desired aesthetic quality.

---

## 5. Stitch quality/velocity lesson

A Stitch screen is not accepted merely because it is structurally correct.

Use two independent gates:

```text
CONTRACT_FIDELITY
+
VISUAL_EXPERIENCE_QUALITY
```

UI/UX visual outcomes:

```text
VISUAL_ACCEPT
VISUAL_ACCEPT_WITH_IMPLEMENTATION_NOTES
VISUAL_CORRECTION_REQUIRED
VISUAL_RETHINK_REQUIRED
DEFERRED_POLISH
```

Velocity rule:

```text
if another iteration materially improves
structure / hierarchy / comprehension / visual concept
→ correct now

if another iteration mainly improves
micro-aesthetic polish / delight
→ DEFERRED_POLISH and continue
```

This rule was introduced after the first Brand Preview Desktop Stitch result was contract-compliant but too report-like. A bounded visual correction improved it enough to continue without unlimited iteration.

---

## 6. Current frozen Brand onboarding journey

Canonical direction:

```text
Landing Page
→ Gatekeeper
→ Continuous Fast Brand Analysis
→ Brand Preview
→ Verify & claim brand / account boundary
→ Instagram connection decision
→ Chat-first Home
→ deeper Intelligence continues asynchronously
→ Brand Centre as living Brand Intelligence + reporting workspace
```

Important frozen direction:

- Pricing is removed from onboarding; 30-day free access should be communicated earlier/landing-side.
- no mandatory Core Identity review;
- no Brand DNA review;
- no Product Catalogue review;
- no Competitor review;
- no Budget question during onboarding;
- Brand Preview is non-editable;
- user correction belongs later in Brand Centre;
- Instagram decision is mandatory to encounter, but connection itself should remain skippable with explicit limited-Intelligence consequence;
- Home is Chat-first, not a reporting dashboard;
- reporting and mature Brand Intelligence belong in Brand Centre;
- Creator-side work is deferred until the Brand journey is completed end-to-end.

Product Authority:

`intelligence/product_authority/brand_onboarding_v1_product_authority.md`

---

## 7. Brand Preview — frozen product/semantic authority

Purpose:

> Demonstrate that Creator Shop understands the Brand well enough to have a credible creator-marketing point of view before asking for verification.

Exactly five semantic sections:

1. Brand identity / recognition
2. How Creator Shop understands the Brand
3. Who the Brand needs to influence
4. Where creators can make the difference
5. Creators Creator Shop would start with

Then the verification transition.

Excluded from Brand Preview:

- editable forms;
- Product Catalogue;
- Competitor table;
- Budget;
- Instagram;
- Pricing;
- Campaign setup;
- confidence percentages;
- raw Intelligence/provenance.

Frozen UX copy:

`frontend/brand-onboarding/brand_preview_ux_copy_contract.md`

Frozen minimum Intelligence output:

`intelligence/engines/brand_intelligence/brand_preview_minimum_output_contract.yaml`

A valid partial Preview may contain only:

```text
1 Audience group
1 creator opportunity
1 canonical creator-archetype recommendation
```

No filler is allowed.

---

## 8. Brand Preview — frozen acquisition authority

Artifact:

`data_extraction/brand_preview_fast_evidence_acquisition_design.md`

Core path:

```text
same-run Gatekeeper Evidence reuse
→ provider-neutral brand_preview.website_evidence
→ Direct HTTP
→ selective Zyte HTTP if technically unusable
→ selective rendered Zyte if rendering required
→ Cheerio normalization
→ evidence sufficiency
→ EARLY STOP
→ IE synthesis
```

Normal target evidence set:

- homepage;
- About/company-context page;
- one representative commercial/offering page.

Fewer pages are acceptable when enough Evidence already exists.

Do not run full Surface/Stage 1B merely to enrich Preview.

Gemini/public-web enrichment is a separate **IE-requested** capability, never an automatic DE provider switch.

Frozen DE design commit:

`2c575911d83d47e59c0b714b3e2154402c1ad879`

---

## 9. Brand Preview — frozen IE runtime authority

Frozen IE branch/commit:

`agent/brand-preview-ie-runtime-authority`

`24fa837d287315ac0f68554f741157b68773e529`

Artifacts:

- `intelligence/engines/brand_intelligence/processors/brand_preview_synthesis/processor.yaml`
- `intelligence/engines/brand_intelligence/processors/brand_preview_synthesis/reasoning.yaml`
- `intelligence/engines/brand_intelligence/processors/brand_preview_synthesis/output_contract.yaml`
- `intelligence/engines/brand_intelligence/brand_preview_archetype_reasoning.yaml`
- `intelligence/execution_profiles/brand_preview_fast.yaml`
- shared `intelligence/runtime/models.yaml`

Architecture:

- one AI processor: `brand_preview_synthesis`;
- deterministic readiness evaluator outside the AI call;
- provider-neutral `brand_preview.website_evidence`;
- optional one-time `brand_preview.public_web_enrichment` when IE policy allows;
- shared Compiler / Prompt Builder / model registry / validation / telemetry;
- no new top-level Brand Preview Intelligence Engine;
- no reuse of legacy Brand DNA semantics.

Canonical archetype source:

`campaign/canonical/creator_archetypes.yaml`

IE may add reasoning metadata but cannot invent or change canonical archetypes.

Readiness ownership belongs to IE semantics, not backend or frontend.

---

## 10. Brand Preview — backend runtime implementation complete

Backend clone:

`Piyush1087/creator-commerce-backend-v2-clone`

Branch:

`phase-g/brand-preview-runtime-integration`

Starting SHA:

`ae901a5537b19be6d06301fb0c12ac5e44c21018`

Final implementation SHA:

`abe21dbd422f2ee2b0f6a6302f7219f3fc844e21`

Commit:

`feat: implement brand preview runtime`

Status:

`IMPLEMENTED_AND_VALIDATED`

Migration:

`20260822120000_brand_preview_runtime`

Adds durable `BrandPreviewRun` keyed by `DiscoveryLead` with runtime state, completeness, truthful phase, snapshots, retry/enrichment/lease metadata, optional BrandProfile mapping and timestamps.

No permanent Brand columns were added for Preview descriptor/audiences/opportunities/archetypes.

API:

- modified `POST /api/v1/discovery/:leadId/confirm-industry`
- added `GET /api/v1/discovery/:leadId/brand-preview`
- added `POST /api/v1/discovery/:leadId/brand-preview/retry`
- reuses `POST /api/v1/brand/profiles/:brandProfileId/verification/send`

Canonical API runtime states:

```text
ANALYSIS_ACTIVE
PREVIEW_READY
PREVIEW_FAILED_RECOVERABLE
PREVIEW_NOT_READY
```

Validation result:

- focused Brand Preview tests: 33 passed;
- full repo: 177 passed, 1 skipped;
- Prisma/build/lint/diff checks passed;
- frozen runtime artifact hash comparison 7/7 exact;
- deviations from frozen authority: none.

Remaining environment requirements:

- apply Prisma migration;
- `DATABASE_URL`;
- `GEMINI_API_KEY`;
- `OPENAI_API_KEY`;
- optional `ZYTE_API_KEY` for selective fallback;
- outbound provider/site access.

Deployment performed: NO.

Production merge performed: NO.

Frontend handoff readiness:

`READY_FOR_FRONTEND_RECONCILIATION`

---

## 11. Brand Preview — frozen frontend authority

Frozen frontend authority commit:

`801ac7c6680fb3ecbc05dc4db064e9406b73b128`

Artifacts:

- `frontend/brand-onboarding/brand_preview_ux_copy_contract.md`
- `frontend/brand-onboarding/brand_preview_frontend_state_contract.yaml`
- `frontend/brand-onboarding/brand_preview_screen_interaction_contract.md`

Canonical FE states:

```text
FAST_ANALYSIS_ENTERING
FAST_ANALYSIS_ACTIVE
FAST_ANALYSIS_SLOW
PREVIEW_READY
ANALYSIS_RECOVERABLE_FAILURE
PREVIEW_NOT_READY
STARTING_BRAND_VERIFICATION
```

`PREVIEW_READY` has completeness variants `NORMAL` and `PARTIAL`; missing logo/descriptor and collection counts are density attributes, not separate states.

Truthful normalized phases when runtime can expose them:

```text
UNDERSTANDING_BRAND
LEARNING_AUDIENCE
FINDING_CREATOR_OPPORTUNITIES
PREPARING_PREVIEW
```

No timer-generated fake progress.

---

## 12. UI/UX visual authority and lessons

Generic UI/UX charter:

`docs/organization/charters/ui_ux_design_ai_worker_charter.md`

Brand Preview visual direction:

`frontend/brand-onboarding/design/brand_preview_visual_direction_brief.md`

Brand Preview family visual brief:

`frontend/brand-onboarding/design/brand_preview_stitch_family_visual_brief.md`

Key concepts:

### Brand Preview

Should feel:

```text
recognition
→ understanding
→ audience clarity
→ strategic possibility
→ creator starting point
→ continuation
```

Not a report, dashboard, wizard or extraction review.

`How we understand your brand` is the primary intellectual reveal.

`Where creators can make the difference` is the strongest strategic section.

### Fast Brand Analysis — Understanding Thread

Visual signature:

```text
brand
→ audience
→ creator opportunity
→ Brand Preview
```

Should feel like Creator Shop is forming understanding, not running a technical scan.

Avoid conventional determinate progress bars, fake steppers/percentages and spinner-led hero treatment.

### Recovery — Trust Boundary

Communicate that Creator Shop stopped rather than fabricate an ungrounded Preview.

Recovery should feel calm and trustworthy, not like a generic red technical error page.

### Future archetype imagery

Deferred. If later added, prefer a curated AI-generated archetype/persona visual library with a fixed house style rather than live per-session generation.

---

## 13. Stitch execution complete

Canonical Stitch library:

Repository:

`Piyush1087/dummy_tcs`

Branch:

`docs/stitch-design-library`

Commit:

`355667b808457495c444d08b1d179d4f8a87d35b`

Canonical references:

`6 / 6`

All six artifact pairs:

`PNG_HTML_CONSISTENT`

Families:

- `BP-ST-D01/M01` — Fast Brand Analysis
- `BP-ST-D02/M02` — Analysis Recovery
- `BP-ST-D03/M03` — Brand Preview

Known caveat:

- M02 exported PNG is viewport-cropped;
- canonical HTML matches native Stitch;
- full native Stitch render was verified;
- frontend reconciliation must not treat cropped PNG as sole authority.

Do not reopen Stitch during frontend reconciliation unless a genuine visual-contract conflict is found.

---

## 14. Frontend readiness/reconciliation state

Frontend clone baseline remains:

`Piyush1087/creator-commerce-frontend-v2-clone`

`development@79fceb933f0076a4b98ce9020d9a9815436a3c54`

Frontend readiness audit is already complete and must not be repeated.

It classified:

- reusable Gatekeeper/frontend infrastructure;
- legacy onboarding screens to remove/bypass;
- exact runtime/state gaps;
- visual/Aurora/accessibility/responsive mismatches;
- likely files to change;
- implementation order.

The audit was blocked only by missing backend Brand Preview runtime authority. That blocker is now closed by backend SHA:

`abe21dbd422f2ee2b0f6a6302f7219f3fc844e21`

Immediate FE task:

```text
resume existing audit
→ implement state/runtime schema
→ Gatekeeper handoff
→ Fast Brand Analysis
→ Recovery
→ Brand Preview
→ verification transition
→ tests
→ 390px/accessibility/runtime validation
```

Expected FE completion return:

`BRAND_PREVIEW_FRONTEND_RECONCILIATION_REVIEW`

with:

`end_to_end_readiness: READY_FOR_FINAL_RUNTIME_ACCEPTANCE | NOT_READY`

Do not repeat repository discovery/readiness audit.

---

## 15. Remaining gates after FE reconciliation

### Gate 1 — final end-to-end runtime acceptance

Validate the real integrated journey:

```text
Gatekeeper
→ Industry confirmation
→ Fast Brand Analysis
→ Brand Preview
→ partial/recovery paths
→ Verify & claim this brand
```

Cover representative D2C, SaaS/AI, Healthcare, Offline Services and sparse/JS-heavy cases where practical.

Verify:

- real runtime states drive FE states;
- no fake progress;
- partial density is valid;
- retry works;
- verification uses stable BrandProfile ID;
- no legacy Surface/Brand DNA route leaks back;
- no provider/model/confidence/internal Evidence leaks to UI.

### Gate 2 — visual/runtime acceptance

FE/Product: contract fidelity.

UI/UX: visual-experience quality.

Validate Desktop + Mobile 390, long bounded copy, missing logo, reduced-density Preview, analysis/slow and recovery.

For M02 use canonical HTML/native render over cropped PNG.

### Gate 3 — clone integration

Integrate accepted frontend source into frontend clone `development` and accepted backend source into backend clone `development` using safe non-force integration unless explicit conflict requires otherwise.

Record:

- source branch/SHA;
- pre-integration target SHA;
- merge-base;
- source-only/target-only history where useful;
- final remote `development` SHA;
- conflicts;
- exact tests from final integrated heads;
- clean worktree.

### Gate 4 — developer handoff

Prepare one deterministic handoff covering frontend + backend + architecture references.

Frontend:

- final clone repo/branch/SHA;
- relevant changed files;
- build/test commands;
- accepted Stitch visual refs and M02 caveat.

Backend:

- final clone repo/branch/SHA;
- Prisma migration;
- environment/provider requirements;
- deploy/smoke order;
- tests.

Architecture:

- Product Authority;
- IE runtime authority;
- DE acquisition authority;
- FE state/interaction authority;
- UI/UX visual briefs;
- Stitch design-library commit.

### Gate 5 — stop and hand off

At this point AI-worker program responsibility for this module ends.

Developer owns actual production repo merge, AWS/runtime configuration, production migration/deploy and production smoke test.

The Systems Architect may review the developer's reported production result later, but must not silently perform the production integration itself.

---

## 16. Brand Centre / Home product direction to preserve for subsequent work

### Home

Home should become primarily Chat-first, not a reporting dashboard.

Use available space for:

- dominant Creator Shop conversation interface;
- small morning-coffee style briefing/snapshot;
- dynamic gateways to likely next actions/destinations.

Reporting moves to Brand Centre.

### Brand Centre

Brand Centre is the living understanding/reporting workspace for the Brand.

It should emphasize:

```text
AI summary
→ what matters now
→ recommended actions
→ mature Brand Intelligence / reporting
→ deeper details/edit
```

Hide immature/empty datasets instead of displaying empty dashboards.

Products/Offerings and competitor identity should remain available as operational/business truth where needed for correction/execution, but raw proprietary Intelligence should be surfaced primarily through summaries, explanations and recommendations rather than exposing the entire reasoning graph.

Offering is distinct from Campaign Asset:

```text
Offering = what the business sells/promotes
Campaign Asset = the specific product/service/access provisioned for a campaign
```

This distinction preserves Campaign execution without forcing Product Catalogue review into onboarding.

### Budget

Do not ask during onboarding.

Later distinguish:

```text
Recommended Budget = Creator Shop Intelligence
Actual Budget = Brand authority
```

AI recommendation must never silently become actual Budget.

---

## 17. Deeper Intelligence domains — sequence after onboarding foundation

Brand-first completion remains the rule. Do not start Creator-side program until Brand end-to-end foundation is completed.

Likely Brand Intelligence work after current onboarding blocks:

```text
Brand Intelligence
Product / Offering Intelligence
Competitor Intelligence
Instagram Intelligence
Commercial Intelligence
Performance Intelligence
Campaign Intelligence synthesis
```

Campaign Intelligence must produce/align to the canonical Campaign model rather than revive the legacy Planner parallel schema.

Brand edits should trigger dependency-directed Intelligence invalidation, not generic Deep Scan reruns.

---

## 18. Current immediate next action

**Frontend reconciliation is now the active next action.**

The FE agent already asked for the final backend completion handoff and should be given:

Backend runtime implementation:

`phase-g/brand-preview-runtime-integration@abe21dbd422f2ee2b0f6a6302f7219f3fc844e21`

Then instruct FE:

- resume the accepted audit;
- do not repeat audit/discovery;
- reconcile against six accepted Stitch refs and real runtime API;
- return `BRAND_PREVIEW_FRONTEND_RECONCILIATION_REVIEW`.

After FE returns READY, run Gates 1–5 above.

---

## 19. Do-not-do register

Do not:

- reopen Gatekeeper v1;
- return to the old Surface → Brand DNA → Catalogue → Competitor review onboarding sequence;
- reintroduce Pricing into onboarding;
- require Budget during onboarding;
- force full Product/Competitor/Instagram Intelligence before Brand Preview;
- let DE independently choose semantic cross-provider fallback;
- let backend/frontend invent a second Preview readiness rule;
- expose raw confidence/provenance/provider/model details in Preview;
- create fake timer progress;
- pad partial Preview for layout symmetry;
- make Stitch product authority;
- accept Stitch only because contract fidelity passes;
- spend unlimited Stitch cycles on micro-polish;
- use the healthcare fixture to create a healthcare-specific visual theme;
- start Creator-side redesign before Brand flow is completed end-to-end;
- merge AI-worker output directly into actual production repos;
- execute production deployment as Systems Architect without explicit Product reassignment.

---

## 20. Definition of completion for the current Brand Preview module

Brand Preview is complete from the AI-worker program perspective when:

```text
backend runtime implemented + validated
+
frontend reconciled + validated
+
end-to-end runtime acceptance passed
+
visual/runtime acceptance passed
+
frontend/backend clone development heads finalized
+
developer handoff prepared
```

Production deployment itself is outside the completion boundary and remains developer-owned.
