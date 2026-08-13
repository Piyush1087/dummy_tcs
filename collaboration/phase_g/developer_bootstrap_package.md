# Collaboration Phase G — Developer Bootstrap Package

**Version:** 1.0  
**Status:** APPROVED FOR DEVELOPER BOOTSTRAP  
**Scope:** Collaboration module  
**Global Phase G authority:** `docs/engineering/PHASE_G_PRODUCT_READINESS_STANDARD.md`  
**Module context authority:** `collaboration/phase_g/agent_context_manifest.md`

## 0. Objective

This package gives a developer and their AI engineering agent the exact setup required to begin Phase G for Creator Shop Collaboration without disturbing the already runtime-validated implementation baseline.

Phase G does not restart Collaboration implementation. It reconciles the accepted runtime with canonical product authority and product-facing UI/UX before the final deployment candidate is frozen.

The first agent run executes **G0.0 + G0.1 only**:

- baseline freeze;
- whole-module surface reality audit.

It must not redesign or modify runtime source.

---

## 1. Frozen starting baselines

### Canonical / governance repository

```text
Repository: Piyush1087/dummy_tcs
Branch: main
Frozen SHA: supplied in the developer handoff/email
```

The supplied SHA must contain:

```text
docs/engineering/PHASE_G_PRODUCT_READINESS_STANDARD.md
collaboration/phase_g/agent_context_manifest.md
collaboration/phase_g/developer_bootstrap_package.md
collaboration/phase_g/prompts/g0_0_g0_1_reality_audit.md
```

Do not substitute a newer `main` ref during a Phase G run unless Product explicitly approves it.

### Frontend runtime-validated baseline

```text
Repository: Piyush1087/creator-commerce-frontend-v2-clone
Branch: collaboration/frontend-production-reconciliation
Frozen SHA: 39510031066c44f20d59d1375c01678f34e585f8
```

Create the Phase G frontend working branch from this exact SHA:

```text
phase-g/collaboration-g0-audit
```

G0 may add audit documentation only. Runtime source remains unchanged during G0.

### Backend runtime-validated baseline

```text
Repository: Piyush1087/creator-commerce-backend-v2-clone
Branch: collaboration/final-backend-reconciliation
Frozen SHA: 13ce652f432560a91dde1f75ca9a21dfa76d054f
```

Backend is read-only during G0 and normally read-only for frontend-only G1 work. A backend source change requires a proven canonical contract/runtime gap and a separately scoped task.

---

## 2. Recommended local workspace

Open all three repositories together in one Cursor multi-root workspace.

```text
creator-shop-collaboration-phase-g/
├── dummy_tcs/
├── collaboration-frontend/
└── collaboration-backend/
```

Recommended responsibilities:

```text
dummy_tcs              canonical product + Phase G governance
collaboration-frontend implementation reality + Phase G working branch
collaboration-backend  runtime authority + traceability
```

Do not copy canonical Markdown into the implementation repositories merely to make it visible to the agent. Mount the repositories and let the agent read the authoritative files directly.

---

## 3. Developer setup — step by step

### Step 1 — Clone/update all three repositories

Ensure all repositories are locally available and clean.

Record:

```text
git status --short
git rev-parse HEAD
git branch --show-current
```

for each repository before beginning.

### Step 2 — Pin canonical `dummy_tcs`

Checkout the exact frozen `dummy_tcs` SHA supplied by Product.

Do not use an unpinned moving `main` as Phase G authority.

### Step 3 — Pin backend baseline

Checkout:

```text
13ce652f432560a91dde1f75ca9a21dfa76d054f
```

Do not create a backend Phase G implementation branch yet. G0 is read-only on backend.

### Step 4 — Create frontend Phase G branch

Checkout frontend baseline:

```text
39510031066c44f20d59d1375c01678f34e585f8
```

Create:

```text
phase-g/collaboration-g0-audit
```

All G0 audit artifacts should be written only under:

```text
docs/collaboration/phase-g/
```

### Step 5 — Open one Cursor workspace

Add the three local repositories as workspace folders so the AI agent can trace a UI observation across canonical specification, frontend code and backend authority without relying on pasted snippets.

### Step 6 — Confirm agent context files exist

Before the first prompt, verify that the pinned `dummy_tcs` checkout contains:

```text
docs/engineering/PHASE_G_PRODUCT_READINESS_STANDARD.md
collaboration/phase_g/agent_context_manifest.md
collaboration/phase_g/prompts/g0_0_g0_1_reality_audit.md
```

### Step 7 — Run the G0.0 + G0.1 prompt

Paste the contents of:

```text
collaboration/phase_g/prompts/g0_0_g0_1_reality_audit.md
```

into Cursor Agent from the multi-root workspace.

Do not append an instruction such as “continue until complete Phase G”. The prompt intentionally stops after G0.1 for Product review.

### Step 8 — Return the audit, do not implement yet

The required outputs are:

```text
frontend/docs/collaboration/phase-g/00_baseline.md
frontend/docs/collaboration/phase-g/01_g0_reality_audit.md
```

and a concise agent summary.

Product reviews this output before G0.2 is authorized.

---

## 4. Canonical reading order

The agent must follow the minimum-sufficient-context principle and use this hierarchy.

### A. Global engineering and Phase G governance

```text
dummy_tcs/AI_ENGINEERING_STANDARD.md
dummy_tcs/docs/engineering/PHASE_G_PRODUCT_READINESS_STANDARD.md
```

### B. Collaboration module router and frozen semantic authority

```text
dummy_tcs/collaboration/README.md
dummy_tcs/collaboration/finalization_review.md
dummy_tcs/collaboration/developer_handoff_manifest.md

dummy_tcs/collaboration/contracts/collaboration_domain_contract.md
dummy_tcs/collaboration/contracts/collaboration_runtime_contract.md
dummy_tcs/collaboration/contracts/collaboration_workflow_state_contract.md
dummy_tcs/collaboration/contracts/collaboration_commercial_resolution_contract.md
dummy_tcs/collaboration/contracts/collaboration_integration_contract.md
```

### C. Canonical frontend reference

```text
dummy_tcs/frontend/collaboration/implementation_map.md
dummy_tcs/frontend/collaboration/state_map.md
dummy_tcs/frontend/collaboration/interaction_map.md
dummy_tcs/frontend/collaboration/ui_domain_mapping.md
dummy_tcs/frontend/collaboration/copy_contract.md
dummy_tcs/frontend/collaboration/creator_context_contract.md
dummy_tcs/frontend/collaboration/realtime_hydration_contract.md
```

### D. Canonical backend contracts — inspect when tracing authority

```text
dummy_tcs/collaboration/backend/collaboration_schema.prisma
dummy_tcs/collaboration/backend/command_contract.md
dummy_tcs/collaboration/backend/read_model_contract.md
dummy_tcs/collaboration/backend/implementation_map.md
dummy_tcs/backend/validation/collaboration/
```

### E. Detailed product-workflow requirements

From the accepted backend repository:

```text
docs/collaboration/product-docs/Brand- collaboration workflow.md
docs/collaboration/product-docs/Creator- Collaboration Workflow.md
docs/collaboration/product-docs/Unified collaboration document (brand+ creator).md
docs/ai-collaboration/2026-06-04-collaboration-module-intake.md
```

### F. Current implementation reality

Frontend first:

```text
docs/collaboration/IMPLEMENTATION.md
docs/ai-collaboration/2026-06-04-collaboration-frontend-intake.md
src/features/collaboration/
src/pages/brand/collaboration/
src/pages/brand/collaborations/
src/pages/creator/collaborations/
src/routes/app-routes.tsx
```

Then backend only where required to trace the frontend behavior:

```text
src/features/collaboration/
prisma/schema.prisma
src/features/brand-escrow/
src/features/brand-payouts/
```

---

## 5. Authority conflict rule

The agent must not silently reconcile competing product sources.

If a material behavior differs between:

- current explicit Product instruction;
- frozen `dummy_tcs` Collaboration contracts;
- detailed backend product workflow docs;
- accepted backend runtime;
- accepted frontend runtime;

then classify the finding as:

```text
AUTHORITY_CONFLICT
```

The finding must identify the competing sources and stop the affected product decision for Product resolution.

Existing production behavior is not automatically canonical merely because it works.

---

## 6. Environment readiness by Phase

### G0.0–G0.3 — source audit environment

Required:

```text
Git
Cursor / AI engineering agent
all three repositories locally
multi-root workspace
correct pinned refs
repository read/search access
clean frontend Phase G branch
```

Not required to begin G0:

```text
PostgreSQL
AWS
Postmark
Razorpay
S3
Stitch
production/development RDS
```

Environment setup must not block a source-authority audit.

### G1 onward — implementation verification environment

Prepare before G1 reaches runtime acceptance:

```text
Node/npm compatible with the repositories
Docker Desktop
PostgreSQL 16 local container
isolated local Collaboration database
backend on localhost:3000
frontend on localhost:5173
Brand QA account
Creator QA account
browser manual acceptance
Socket.IO local connectivity
```

Do not upgrade runtime/dependencies incidentally during Phase G.

---

## 7. Local environment policy

Phase G local acceptance must not require production services.

Use:

```text
STAGE=local
local DATABASE_URL only
APP_FRONTEND_URL=http://localhost:5173
CREATOR_VERIFICATION_USE_REAL_OTP=false
BRAND_VERIFICATION_USE_REAL_OTP=false
NOTIFICATIONS_DEV_EMIT_ENABLED=false
VITE_STAGE=local
```

Prefer leaving `VITE_API_URL` unset when using the existing Vite `/api` proxy.

Do not use:

```text
production/dev RDS for local Phase G
production Postmark token
live Razorpay credentials
real fund movement
production S3 writes
production creator publishing
```

If a provider constructor requires a value merely for local startup, use only an approved local/test placeholder and do not execute outbound operations through it.

---

## 8. Local database preparation for G1/G5

Create an isolated database, e.g.:

```text
creator_shop_collaboration_phase_g
```

Initialize using repository scripts rather than ad-hoc schema creation:

```text
npm ci
npm run prisma:generate
npm run db:migrate:deploy
```

Seed deterministic QA data using existing repository scripts where available, including:

```text
npm run db:seed:dev-creator
```

Do not commit `.env` or credentials.

---

## 9. Required runtime scenario families before Phase G closure

G0 must identify whether the UI can represent these states; G1/G5 must eventually verify the applicable implemented scenarios.

```text
Negotiation
Securement
Fulfillment required
Fulfillment not required
Fulfillment exception / blocked
Production awaiting submission
Production awaiting Brand review
Revision requested
Auto-approved production
Publishing required
Publishing not required
Compliance correction
Settlement
Terminal resolution
Completed
Feedback pending
Feedback revealed
```

Cross-cutting states:

```text
loading
empty
API/read failure
command failure
unauthorized actor
blocked/unavailable action
realtime disconnected
poll/refetch recovery
refresh/re-entry
mobile navigation
```

Persisted backend state must remain sufficient to reconstruct the Collaboration after refresh/re-entry. Realtime may invalidate/refetch but must not be the sole state authority.

---

## 10. Safety rules for the developer AI agent

The agent must:

1. verify refs before work;
2. read the Phase G Standard first;
3. inspect before modifying;
4. audit both Brand and Creator Collaboration surfaces;
5. trace UI actions to backend command/state authority;
6. trace displayed values to their canonical owner;
7. distinguish lifecycle from workflow/stage state;
8. keep Campaign, Collaboration, Payout/Escrow and Intelligence ownership separate;
9. record authority conflicts instead of guessing;
10. classify environment failures separately from source defects;
11. preserve the accepted runtime baseline;
12. stop at the requested Phase G gate.

The agent must not:

1. invoke Stitch during G0/G1;
2. redesign screens during G0;
3. change Prisma/backend contracts during G0;
4. invent pause/resume behavior;
5. reintroduce Campaign × Creator uniqueness;
6. reintroduce fixed 30/70 commercial policy;
7. infer Fulfillment from industry;
8. collapse per-Deliverable production/publishing into Collaboration-level state;
9. make WebSocket payload history required for hydration;
10. auto-merge or deploy.

---

## 11. First checkpoint

After G0.0 + G0.1 the developer sends Product:

```text
00_baseline.md
01_g0_reality_audit.md
agent summary
current frontend Phase G commit SHA
```

No G0.2 or G1 implementation begins until Product reviews the reality audit and confirms the next scope.

---

## 12. Deployment positioning

Infrastructure/deployment preparation may continue in parallel, but the final Collaboration frontend deployment candidate should be frozen only after the applicable Phase G functional and UX acceptance gates.

If the pre-Phase-G build has already been deployed, treat it as a staging baseline rather than the final UI authority. Run Phase G on the isolated branch, then deploy the accepted candidate and perform staging reconciliation.
