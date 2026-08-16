# Authority and precedence

## Source checkpoints

The target library branch is exactly at, and therefore contains, `ce966f69a9532592b6fd83493f75c248679448a6` before this package is authored.

The corrected Campaign Page authority was inspected at `Piyush1087/creator-commerce-frontend-v2-clone`, branch `phase-g/campaign-page-reconciliation`, SHA `1048e486fa6b7178e34c636aeaa47bda881e2cb1`. The following files were read completely:

- `docs/campaign/phase-g/11A_campaign_page_authority_reconciliation.md`
- `docs/campaign/phase-g/08_g1d_lifecycle_readiness_workspace_reporting.md`
- `docs/campaign/phase-g/09_g1e_state_compatibility_validation_closure.md`
- `docs/campaign/phase-g/11_g2_1_campaign_workspace_authority_matrix.md`
- `docs/campaign/phase-g/12_g2_2_ui_state_inventory_and_stitch_selection.md`
- `docs/campaign/phase-g/13_g2_3_stitch_screen_contracts.md`

## Precedence

For this design package, resolve conflicts in this order:

1. Explicit approved Product decisions in the task and the corrected Campaign Page reconciliation authority.
2. Canonical product/domain contracts and approved copy.
3. [Aurora 5.0 canonical design system](../../../../design-system/AURORA_DESIGN_SYSTEM.md) for reusable primitives and system behavior.
4. [AppShell context](../../../global/01C-application-shell-and-viewport-context.md) for shell ownership and viewport reservations.
5. This package's global documents.
6. The approved current Section Visual Plan.
7. The current screen/interaction brief.
8. An accepted new-project section parent, only for a revision or mobile adaptation.
9. Stitch interpretation.

The lower source may specialize but may not contradict the higher source. Report unresolved equal-authority conflicts; do not invent a compromise.

## Product ownership freezes

- A Campaign Asset references a Brand Centre entity; Campaign-local editing of Brand Centre data is prohibited.
- A Brief belongs under its exact Campaign Asset.
- Deliverables belong under Brief.
- Application decisions are Application-owned.
- Collaboration is independent; Campaign Page provides references and navigation to Collaboration Workspace.
- Reporting calculation and supplied AI summary remain owner-provided projections.
- Lifecycle, readiness, and capability are distinct.
- A capability-driven action is shown only when authoritative capability permits it.
- Unavailable execution capability means operational workspaces cannot be presented as usable.

## Reset and supersession

All previous Campaign Page Stitch output is rejected as new design authority. In particular, `CP-ST-01` and `CP-ST-R01` through `CP-ST-R04` and their variants cannot be parents, accepted components, or coverage credit. This package assigns fresh `CP-HDR-*` references for the first section and will assign fresh section-specific references as Product freezes later plans.

Historical documents may explain product decisions, but their old screen compositions and screen IDs have no generative authority.
