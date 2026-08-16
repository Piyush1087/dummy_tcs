# Campaign Page section-design package

**Status:** Header section ready; remaining sections registered and frozen pending Product review
**Authority checkpoint:** `creator-commerce-frontend-v2-clone` `1048e486fa6b7178e34c636aeaa47bda881e2cb1`
**Library checkpoint:** `dummy_tcs` `ce966f69a9532592b6fd83493f75c248679448a6`

## Purpose

This package governs a completely fresh, section-based Campaign Page Stitch exercise. It contains design instructions only. It does not authorize frontend/backend implementation and this documentation commit invokes no Stitch capability.

The Campaign Page is frozen as:

```text
Campaign Page
|-- Campaign Header
|-- Campaign Attention Layer
`-- Operational Workspace
    |-- Discovery
    |-- Applicants
    `-- Collaborations
```

There are exactly three operational workspaces. Reporting is not a workspace; it is exposed only through Campaign Performance in the Attention Layer. Product/Campaign Asset and Brief are configuration/detail surfaces.

## Critical reset

The prior Stitch project and every previously generated Campaign Page screen, including `CP-ST-01`, `CP-ST-R01` through `CP-ST-R04`, and all variants, are historical/rejected evidence only. They must not be used as design authority, generation parents, revision sources, accepted component designs, or substitutes for any newly required reference.

All required references must be generated again in one new private project, after the relevant section is approved. No previous screen is accepted as new-project design authority.

## Package status

| Area | Status | Entry point |
|---|---|---|
| Global authority and execution | Authored | [Authority and precedence](01-authority-and-precedence.md) |
| Campaign Header | Fully authored | [Header visual plan](sections/campaign-header/01-section-visual-plan.md) |
| Attention Layer | Registered; Product freeze required | [Future requirements](sections/attention-layer/01-section-visual-plan.md) |
| Assets and Briefs | Registered; Product freeze required | [Future requirements](sections/assets-and-briefs/01-section-visual-plan.md) |
| Discovery | Registered; Product freeze required | [Future requirements](sections/discovery/01-section-visual-plan.md) |
| Applicants | Registered; Product freeze required | [Future requirements](sections/applicants/01-section-visual-plan.md) |
| Collaborations | Registered; Product freeze required | [Future requirements](sections/collaborations/01-section-visual-plan.md) |

## Required execution sequence

1. Product and ChatGPT agree the current Section Visual Plan.
2. Codex resolves repository authority.
3. Supply Stitch only [compact project context](10-stitch-project-context.md), the approved current Section Visual Plan, and the current screen/interaction brief.
4. Generate one desktop base.
5. Review the base.
6. Add no more than two or three closely related interactions on the stable composition.
7. Use targeted component/div edits for local corrections when available.
8. Generate a mobile adaptation from the accepted desktop reference.
9. Correct only mobile-specific issues.
10. Preserve accepted artifacts.
11. Freeze the section.
12. Continue to the next section.

Do not send Stitch the historical Phase G library or every brief in one prompt. Use one screen per call and require human review between material steps.

## Package navigation

- [Authority and precedence](01-authority-and-precedence.md)
- [Compact grounding](02-compact-platform-and-campaign-grounding.md)
- [Aurora and AppShell context](03-aurora-and-appshell-context.md)
- [Page section map](04-page-section-map.md)
- [Screen and state registry](05-screen-and-state-registry.md)
- [Cross-section state map](06-cross-section-state-map.md)
- [Cross-section interaction map](07-cross-section-interaction-map.md)
- [Representative data manifest](08-representative-data-manifest.md)
- [Mobile adaptation standard](09-mobile-adaptation-standard.md)
- [Compact Stitch project context](10-stitch-project-context.md)
- [Connector execution runbook](11-connector-execution-runbook.md)
- [Artifact registry](12-artifact-registry.md)
- [Fresh Codex initiation prompt](13-codex-initiation-prompt.md)
