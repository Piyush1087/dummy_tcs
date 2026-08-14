# Campaign Page — Phase G

**Status:** Bootstrap package  
**Scope:** Brand-side Campaign Page product-readiness reconciliation  
**Create Campaign wizard:** OUT OF SCOPE except as an integration dependency

## Purpose

This folder mounts the reusable Creator Shop Phase G process onto the **Campaign Page and its operational child surfaces**.

The Create Campaign wizard has already received its own Phase G reconciliation. This run must not reopen that work unless a Campaign Page finding proves an integration/authority defect at the boundary.

## In-scope Campaign surfaces

1. Campaign Page shell / composition root
2. Campaign Header, Details and readiness presentation
3. Campaign Assets / Products & Briefs summary
4. Add Product / Add Campaign Asset flow
5. Product/Asset detail presentation
6. Add Brief flow
7. Brief detail / lifecycle presentation
8. Discovery workspace
9. Applicants workspace
10. Reporting / Performance workspace
11. loading, empty, unavailable, error and degraded states for the above
12. desktop/mobile behavior for the above
13. Share/Edit/lifecycle actions only where they are necessary to validate Campaign Page authority
14. Collaboration reference boundary only to ensure Campaign does not recreate Collaboration ownership

## Explicitly out of scope

- redesigning or re-running Phase G for Create Campaign;
- rebuilding Campaign domain/runtime from scratch;
- creating Brand Centre entities from Campaign;
- moving Collaboration execution into Campaign;
- inventing Discovery ranking or Applicant Intelligence calculations;
- inventing Reporting metrics when canonical Reporting/Intelligence does not supply them;
- Stitch before G2.

## Governing documents

Read in this order:

1. `AI_ENGINEERING_STANDARD.md`
2. `docs/engineering/PHASE_G_PRODUCT_READINESS_STANDARD.md`
3. `docs/engineering/PHASE_G_AGENT_ORCHESTRATION_STANDARD.md`
4. `campaign/phase_g/agent_context_manifest.md`
5. `campaign/phase_g/codex_bootstrap_package.md`

## Existing Campaign authority packs

Phase G must reuse, not duplicate, the substantial Campaign authority already in this repository:

- `campaign/campaign_module_contract.md`
- `campaign/campaign_page/`
- `campaign/frontend/`
- `campaign/add_product/`
- `campaign/add_brief/`
- `campaign/backend/`
- `campaign/canonical/`
- `campaign/production_frontend_migration_playbook.md`

Historical/older UI documents are evidence only when they conflict with newer frozen contracts or accepted runtime authority.

## Working-repository artifacts

The actual Phase G audit and implementation artifacts should be written to the selected production frontend working repository under:

`docs/campaign/phase-g/`

Start that folder from `campaign/phase_g/run_state_template.md`.

Expected early artifacts:

```text
docs/campaign/phase-g/
├── 00_run_state.md
├── 01_g0_baseline.md
├── 02_g0_reality_audit.md
├── 03_... dynamically generated G0.2 investigations
├── ...
└── final Phase G acceptance artifacts
```

The exact number of G0.2 and G1 packages is **not pre-frozen**. The AI Supervisor derives them from findings according to the orchestration standard.

## Initial execution principle

> Audit the whole Campaign Page broadly; reconcile implementation narrowly.

The first master prompt should mount the authority pack and execute G0.0 + G0.1. From that point the AI Supervisor may generate and execute subsequent prompts automatically when the orchestration gates permit it.
