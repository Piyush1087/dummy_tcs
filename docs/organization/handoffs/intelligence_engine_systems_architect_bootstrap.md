# Intelligence Engine Program — Systems Architect Bootstrap

**Version:** 1.0  
**Status:** ACTIVE PROGRAM BOOTSTRAP  
**Last updated:** 2026-08-21

## 1. Purpose

This document allows a new Systems Architect AI Worker to resume the current Creator Shop Intelligence Engine / AI-native product program without relying on the originating ChatGPT conversation.

This is not a replacement for the principal worker charters or canonical product/Intelligence artifacts. It is a **program-level navigation and continuity document**.

Read first:

- `docs/organization/charters/systems_architect_ai_worker_charter.md`
- `docs/organization/prompts/systems_architect_ai_worker_initiation.md`

Then use this document to locate the current program state.

---

## 2. Program Objective

Creator Shop is evolving from a conventional influencer-marketing execution platform into an AI-native creator-commerce operating system where AI can progressively act as:

```text
planner
reasoner
orchestrator
operator
```

The core architectural direction is:

```text
Evidence Sources
      ↓
Data Extraction Engine
      ↓
Normalized / traceable Evidence
      ↓
Reusable Intelligence Engine
      ↓
Brand / Creator / Product / Competitor / Campaign Intelligence
      ↓
Chat + recommendations + product experiences + safe actions
      ↓
Campaign / Collaboration / Creator execution
```

The goal is not to build isolated AI features. The goal is a reusable Intelligence layer that powers product surfaces, recommendations and conversational execution.

---

## 3. Principal Repositories

### Architectural authority

Repository:

`Piyush1087/dummy_tcs`

Purpose:

- organizational charters;
- Product Authority artifacts;
- Intelligence architecture;
- Data Extraction architecture;
- frontend state/screen authority;
- design-system / Stitch references;
- continuity/handoff artifacts.

### Backend implementation clone

Repository:

`Piyush1087/creator-commerce-backend-v2-clone`

Primary implementation branch used for integrated work:

`development`

### Frontend implementation clone

Repository:

`Piyush1087/creator-commerce-frontend-v2-clone`

Primary implementation branch used for integrated work:

`development`

### Production workflow

The clone repositories are AI-worker implementation/reconciliation environments.

**The human developer owns reconciliation/merge into the actual production repositories and AWS environment.**

Do not treat clone `development` as the actual production repository.

---

## 4. Principal Worker Charters

### Systems Architect

`docs/organization/charters/systems_architect_ai_worker_charter.md`

### Intelligence Engine AI Worker

`docs/organization/charters/intelligence_engine_ai_worker_charter.md`

### Data Extraction Engine AI Worker

`docs/organization/charters/data_extraction_engine_ai_worker_charter.md`

### Frontend AI Worker

`docs/organization/charters/frontend_ai_worker_charter.md`

Permanent IE / DE boundary:

> **Intelligence controls WHY / WHAT / WHEN. Data Extraction controls HOW / CONNECTION / DELIVERY.**

---

## 5. Master Intelligence Direction

Current high-level Intelligence structure:

```text
Creator Shop Master Intelligence Schema

├── Brand Intelligence
├── Product Intelligence
├── Commercial Intelligence
├── Instagram Intelligence
├── Competitor Intelligence
├── Creator Intelligence
├── Campaign Intelligence
└── Performance Intelligence
```

This is a modular direction, not permission to create one giant processor per domain or a new database per domain.

Intelligence should be composed from reusable Intelligence Objects with explicit Evidence, dependencies, lifecycle and consumers.

---

## 6. Shared Intelligence Runtime — Existing Foundation

A shared Intelligence runtime already exists from the Brand Intelligence Identity work and was reused for Gatekeeper v1.

Core shared concepts include:

```text
Compiler / dependency execution
Prompt Builder
Model Registry / Resolver
Evidence runtime boundary
Provider port
Validation
Persistence adapters
Telemetry
Execution Profiles
Developer test entry points
```

The Intelligence Engine worker must reuse/extend these shared runtime capabilities rather than create a separate runtime for each new branch.

The Brand Intelligence `identity` branch is the principal reference implementation pattern.

---

## 7. Gatekeeper v1 — Completed Reference

Gatekeeper v1 is complete and should not be reopened merely because post-Gatekeeper onboarding is being redesigned.

### Product role

Gatekeeper answers:

> Can Creator Shop safely/usefully begin automated onboarding for this business?

It is an admission/serviceability execution profile, not a Brand Intelligence branch.

### Core architecture

```text
Deterministic entry/admission gates
        ↓
AI processor: gatekeeper_site_assessment
        ↓
progressive escalation / fallback
        ↓
deterministic final admission resolution
        ↓
Industry confirmation boundary
        ↓
Surface handoff when eligible
```

### Supported MVP Industries

```text
D2C
SAAS_AI
HEALTHCARE
OFFLINE_SERVICES
```

### Key canonical authority

- `intelligence/product_authority/gatekeeper_v1_product_execution_authority.md`
- `intelligence/product_authority/gatekeeper_v1_industry_confirmation_amendment.md`
- `intelligence/runtime/admission/gatekeeper_admission_contract.yaml`
- `intelligence/runtime/execution_profiles/gatekeeper_scan.yaml`
- `frontend/gatekeeper/gatekeeper_frontend_state_contract.yaml`
- `frontend/gatekeeper/gatekeeper_screen_interaction_contract.md`

### Completed clone integration reference

Backend Gatekeeper-integrated `development` reference SHA:

`ae901a5537b19be6d06301fb0c12ac5e44c21018`

Frontend Gatekeeper-integrated `development` reference SHA:

`79fceb933f0076a4b98ce9020d9a9815436a3c54`

These SHAs are the Gatekeeper completion baseline, not a guarantee that they remain the latest repository HEAD after later work.

---

## 8. Data Extraction — Gatekeeper Capability Status

Gatekeeper DE capability work is complete except for deployment credential/live-provider activation steps.

Relevant capabilities:

```text
gatekeeper_primary_web_assessment
company_public_web_research
openai_structured_assessment
```

Primary Gatekeeper direction uses Gemini 2.5 Flash + URL Context + Google Search grounding, with further escalation controlled by the Intelligence execution profile.

Data Extraction does not own cross-provider business fallback strategy.

---

## 9. Current Post-Gatekeeper Brand Journey — Legacy Reference Only

The current implementation historically flows through approximately:

```text
Gatekeeper
→ Surface Scan
→ Core Identity Review
→ Brand Intelligence Scan
→ Brand DNA Review
→ Product Catalogue
→ Competitor Review
→ Domain/Account Verification
→ Pricing
→ Instagram Social Sync
→ Brand Centre
→ Deep Scan
→ Intelligence "Leaks"
→ Planner
→ Campaign bridge
```

A product and architecture review identified that this flow is too long, repeats authority, forces too many reviews and contains legacy monolithic Intelligence behavior.

**Do not treat this route sequence as future Product Authority.**

Useful existing implementation should be classified and reused where appropriate, but the journey is being simplified.

---

## 10. Approved Direction — Simplified Website-First Brand Onboarding

Current approved direction, with detailed screen/contract decisions still to be frozen:

```text
Website entry
      ↓
Gatekeeper
      ↓
Surface Intelligence continues automatically
(user experiences one coherent scan)
      ↓
Beautiful Brand Preview
      ↓
Domain / brand verification
      ↓
Pricing / free-trial expectation
      ↓
Connect Instagram / Meta
      ↓
Brand Home + Chat
      ↓
remaining Intelligence continues in background
```

### Important principles

- Gatekeeper and Surface Intelligence remain logically separate internally even if the user sees one continuous scan.
- Remove mandatory Core Identity, Brand DNA, Catalogue and Competitor review screens from onboarding.
- The AI should do the work; user correction should happen later through Brand Centre when desired.
- The Brand Preview should explain how Creator Shop sees the brand and its creator-marketing opportunity rather than ask the user to review many fields.
- Domain verification remains strategically useful for trust, misrepresentation prevention and quality signalling, but occurs after initial value is demonstrated.
- Pricing remains a commercial expectation/activation boundary for the current trial model; it should be removable/configurable if a freemium model launches later.
- Instagram is a high-value evidence connection and should receive substantially more UX motivation than minor Brand DNA editing.
- After the minimum trust/account boundary, the user should enter Home even while deeper Intelligence is still processing.
- Home should show truthful Intelligence-processing/readiness state rather than trapping the user inside a long scan wizard.

Detailed Brand Preview content, exact verification alternatives, pricing copy and Instagram skip/requirement policy remain open until explicitly frozen.

---

## 11. Approved Direction — Instagram-First Creator Onboarding Comes First

Before building an Instagram-first Brand path, the program will establish the infrastructure through **Creator onboarding first**.

Current direction:

```text
Creator entry
      ↓
Instagram OAuth / account control
      ↓
Creator identity / duplicate-account resolution
      ↓
minimal account claim / recovery credential
      ↓
Creator Home + Chat
      ↓
Creator Intelligence builds asynchronously
```

The exact first-10-minute Creator journey is the immediate product-design priority.

Do not assume the existing creator onboarding sequence is canonical. Existing implementation currently asks for handle/eligibility, account signup/email OTP and then Meta OAuth. That is useful reference infrastructure but should be reconciled to the Instagram-first product direction.

---

## 12. Existing Creator Onboarding Capability

The backend already contains a meaningful creator onboarding foundation under:

`src/features/creator-onboarding/`

Existing capabilities include:

- Instagram-handle eligibility assessment;
- duplicate/existing-handle lookup;
- onboarding-track persistence;
- creator User/Profile/Workspace creation;
- signup/email OTP;
- Instagram/Meta connection;
- asynchronous creator AI activation sync;
- waitlist handling.

The new Systems Architect should treat these as implementation capabilities to classify, not as frozen journey authority.

---

## 13. Existing Instagram Capability

The backend already has an Instagram connection foundation.

Current connected-account Graph capability includes, at minimum:

### Profile

```text
user_id
username
name
account_type
profile_picture_url
followers_count
follows_count
media_count
```

### Recent media

```text
id
media_type
media_url
thumbnail_url
caption
timestamp
```

### Media insights currently requested by implementation

Depending on media type:

```text
reach
saved/saves
shares
views
likes for selected cases
```

Current relevant implementation:

`src/features/instagram/instagram-graph.client.ts`

Brand social-sync infrastructure also persists encrypted tokens/scopes/integration state.

### Open Instagram research questions

The Data Extraction worker should later verify and normalize:

- all currently permitted first-party account insights useful to Creator Intelligence;
- audience data available through approved APIs;
- historical depth/pagination;
- branded-content/collaboration signals;
- permitted Business Discovery capabilities for other professional accounts;
- what competitor Instagram evidence is available without competitor authentication;
- differences between Business and Creator account capabilities;
- whether link-in-bio / website fields are available through the approved API flow.

Do not use Parallel AI as a disguised Instagram scraper. Parallel may support public-web research, but Instagram-specific canonical facts should come from approved Meta APIs where required.

---

## 14. Competitor Intelligence Direction

Competitor Intelligence remains important but is currently underused.

It should be designed to degrade gracefully across Evidence sources rather than depend entirely on Meta.

Potential source classes include:

```text
competitor website
Similarweb
public web / Parallel research
approved Instagram / Meta public-professional evidence
brand-owned Instagram baseline
creator-authorized collaboration evidence
```

The specific Evidence contract and Business Discovery feasibility remain open and should be delegated to DE after the product questions are sufficiently clear.

---

## 15. Brand Centre Edit / Refresh Principle

The desired architecture is **dependency-directed Intelligence invalidation**, not "rerun Deep Scan" after every user edit and not "do nothing" after edits.

Examples of intended logic direction:

```text
Industry change
→ broad downstream Brand/Product/Competitor/Campaign impact

Tone/aesthetic change
→ Content/Campaign impact

Audience/persona change
→ Creator/Campaign recommendation impact

Offering change
→ Product → Competitor/Opportunity/Campaign impact

Competitor change
→ Competitor → Opportunity/Campaign impact

Budget change
→ Commercial/Campaign recommendation impact

Instagram refresh
→ Instagram/Performance/Collaboration → Opportunity/Campaign impact
```

The exact dependency graph belongs to Intelligence contract design after Product Authority is frozen.

---

## 16. Chat / Co-Pilot Program State

Creator Shop already contains substantial Chat/Co-Pilot infrastructure. It should not be treated as a greenfield Chat product.

### Brand backend

Existing backend under:

`src/features/co-pilot/`

Capabilities include:

- persistent threads/messages;
- message streaming/SSE;
- usage controls;
- moderation;
- feedback;
- slot filling;
- staged write intents;
- HITL confirmation/discard;
- idempotency;
- validation blockers;
- modular read/write registry;
- modules for Brand Centre, Planner, Settings, Collaboration, Escrow and Campaign List.

### Brand frontend

Existing frontend under:

`src/features/co-pilot/`

includes:

- thread rail/list;
- composer;
- message feed;
- intent chips;
- generative UI renderer;
- usage banner;
- mobile thread drawer;
- HITL/slot/execution UI.

Brand Home already embeds live Co-Pilot behavior.

### Creator backend

Existing backend under:

`src/features/creator-co-pilot/`

contains real orchestration, threads, moderation, usage, HITL/slot behavior and Creator Centre/Media Kit tool interactions.

### Creator frontend

Creator Home already has the assistant shell/chrome but the current visible implementation is still largely mock and is not yet fully wired to the real creator-co-pilot backend.

### Architectural gap

Current Brand/Creator Co-Pilot reasoning still relies heavily on bespoke orchestration and direct Gemini calls.

Desired future architecture:

```text
Chat UX / conversation runtime
        ↓
intent / tool routing
        ↓
canonical Intelligence + safe application actions
        ↓
shared IE model/runtime where reasoning is required
        ↓
HITL for consequential writes
```

Do not rebuild thread/streaming/HITL/generative-UI infrastructure unless audit shows it is unusable.

Primary reconciliation target is the **reasoning/context layer**, not the entire Chat product.

---

## 17. Chat MVP Direction

For MVP, use Creator Shop's existing internal Chat UX rather than outsourcing the user experience to a ChatGPT/Claude wrapper.

External model providers may still be used underneath through the approved Intelligence/model runtime.

Reasons:

- authentication and tenant context already exist;
- persistent Creator Shop threads already exist;
- platform actions and HITL already exist;
- usage/audit/permissions already exist;
- Chat needs access to Creator Shop-specific Intelligence and application actions;
- a third-party wrapper would still require most of these integration layers.

The Systems Architect should design the over-arching Chat/Intelligence boundary only after the relevant Creator/Brand Intelligence contract is sufficiently defined.

---

## 18. External MCP Direction — Deferred / Low Priority

A future MCP connector for ChatGPT/Claude or other AI clients is strategically compatible with the platform, but it is not the current build priority.

Architectural principle to preserve now:

```text
Canonical Creator Shop Intelligence / application actions
            ↓
Safe tool layer
       ┌────┴────┐
       ↓         ↓
Internal Chat   Future MCP adapter
```

Do not implement separate business logic for MCP.

MCP must later preserve authentication, permissions, HITL, validation and audit.

---

## 19. Product Direction vs Legacy Code

The current codebase contains useful infrastructure surrounded by older product assumptions.

The Systems Architect should preserve the distinction:

### Likely high-value reusable capability

```text
shared Intelligence runtime
Data Extraction provider layer
BrandProfile / Offering / Competitor persistence
CreatorProfile / Workspace persistence
User/Auth/Organization infrastructure
Instagram OAuth/token infrastructure
pricing/subscription infrastructure
Chat threads/streaming/HITL/generative UI
canonical Campaign model
```

### Likely legacy reasoning/orchestration to reconcile or replace

```text
old multi-screen onboarding authority
Stage 1A/1B/2 nomenclature
monolithic Deep Scan reasoning
performance-leak-only opportunity model
Planner parallel campaign schema
frontend-generated campaign defaults
legacy Brand Centre → UCE bridge translation path
bespoke direct-Gemini Co-Pilot reasoning
```

Do not perform deletion/rewrite solely from this bootstrap; audit exact current implementation before change.

---

## 20. Immediate Product Work — Next Step

The next Systems Architect conversation should begin with **product/logic design**, not implementation.

Immediate priority:

> Design the Instagram-first Creator onboarding journey and first-session value experience.

Questions to resolve include:

- exact entry CTA and OAuth-first behavior;
- what happens for Personal Instagram accounts;
- duplicate/existing Creator account behavior;
- whether any eligibility threshold remains at onboarding and where;
- when email/account recovery credential is requested;
- what the Creator sees immediately after OAuth;
- which Intelligence can be produced instantly vs asynchronously;
- what truthful progress/readiness states appear on Home;
- what the Chat can answer on first session;
- what happens when insights/media are unavailable or partial;
- which actions are free at launch;
- how invited-to-campaign creators enter this same journey;
- how this infrastructure will later generalize to Brand Instagram-first onboarding.

Only after this journey is sufficiently frozen should the Intelligence Engine worker define Creator Intelligence objects/processors/evidence/execution profiles.

---

## 21. Recommended Worker Sequence for the Next Program Stage

```text
Product Owner + Systems Architect
→ freeze Creator Instagram-first journey

Systems Architect
→ decompose system responsibilities

Data Extraction worker
→ audit/define Instagram Evidence capabilities required by Creator journey

Intelligence Engine worker
→ define Creator Intelligence objects/processors/execution profile

Frontend worker
→ define Creator onboarding/Home/Chat states and screen contracts

Backend / implementation workers
→ reconcile creator OAuth/account/Intelligence orchestration

Frontend worker
→ reconcile Creator Home assistant to real Chat backend

Cross-system runtime acceptance
→ creator launch slice
```

Worker order may overlap where dependencies are clear; do not make all work serial merely because the list is sequential.

---

## 22. Continuity Requirement

If this program moves to another chat or Systems Architect, update or create a module continuity document using:

`docs/organization/templates/systems_architect_module_continuity_template.md`

The continuity document should capture only current authority/state and point back to canonical artifacts rather than duplicate their full contents.
