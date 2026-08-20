# Gatekeeper v1 — Stitch Context Manifest

**Status:** READY FOR MANUAL STITCH UPLOAD  
**Stitch project:** `Gatekeeper scan codex`  
**Parent screen:** none

## 1. Files to upload manually into Stitch

Upload these **before the first Codex → Stitch prompt**:

### Required

1. `frontend/gatekeeper/gatekeeper_screen_interaction_contract.md`
   - primary UX/screen interaction authority for Stitch;
   - explains URL entry, recovery, confirmation, Industry change and Surface-start boundary.

2. `frontend/gatekeeper/stitch/gatekeeper_stitch_screen_contracts.md`
   - compact Stitch-facing visual brief;
   - defines the four visual families and eight required references.

3. `intelligence/product_authority/gatekeeper_v1_industry_confirmation_amendment.md`
   - precise authority for supported override, unsupported confirmation and disagreement semantics.

### Recommended

4. `frontend/gatekeeper/gatekeeper_frontend_state_contract.yaml`
   - useful as a state/reference map so Stitch understands the broader journey and recovery-state vocabulary;
   - Stitch should not attempt to visualize every state separately.

## 2. Already present in Stitch project

The user has already uploaded:

- Creator Shop design system;
- logos/brand assets.

Do **not** upload Aurora again unless the project setup changes.

## 3. Do not upload to Stitch

These are for Codex/worker execution only:

- `gatekeeper_stitch_worker.md`;
- `gatekeeper_stitch_codex_runbook.md`;
- Frontend AI Worker charter;
- Campaign Stitch process docs;
- backend source/API implementation files;
- production React source;
- MCP setup documentation.

Codex may read these locally but must not feed them into Stitch prompts.

## 4. Production visual reference

The current homepage/URL-entry implementation may be inspected by Codex and represented through a screenshot when useful.

The developer-only `Brand Intelligence · Identity dry-run` block is test UI and not part of the frozen design authority.

## 5. Generation plan

Target eight accepted references, family-by-family:

- Family A: D01 + M01
- Family B: D02 + M02
- Family C: D03 + M03
- Family D: D04 + M04

## 6. Representative content

Use supplied representative values where needed:

- Brand: `Glow Theory`
- Domain: `glowtheory.com`
- AI-assessed Industry: `D2C`
- Supported override: `AI / SaaS`
- Coming Soon visual example: `Real Estate` (non-authoritative example)

## 7. Manual review rhythm

Review after each family, after Codex has already inspected and made bounded corrections.
