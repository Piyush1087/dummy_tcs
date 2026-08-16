# Campaign Page Stitch execution package

Status: Draft for repository review  
Module: Campaign  
Active surface: Brand-side Campaign Page only  
Stitch project: `Creator Shop — Campaign` (`8396755977547935397`)

## Purpose

Extend the retained Campaign Stitch project from Create Campaign into the accepted Campaign Page without re-grounding the whole product or transferring engineering architecture to Stitch.

Authority order:

1. Campaign Page G2.3 screen contracts.
2. G2.1 workspace authority and G2.2 state reduction.
3. Accepted G1 frontend and backend contracts.
4. Aurora 5.0 and production AppShell.
5. Accepted Create Campaign output for visual continuity only.
6. Stitch composition as reviewed design evidence.

## Source checkpoints

| Authority | Repository/ref | SHA |
|---|---|---|
| Campaign Page working context | `Piyush1087/creator-commerce-frontend-v2-clone` / `phase-g/campaign-page-stitch-handoff` | `d3cd9421561aa0bf5c5a8be6fe2ea4f684f38ef3` |
| Accepted Campaign Page functionality | same repository, ancestor | `e00f383b4bfb1181a42d31f16e26ce23e5797006` |
| Backend read-only contracts | `Piyush1087/creator-commerce-backend-v2-clone` / `phase-g/campaign-page-stitch-handoff` | `0f2c6c7b659d7305d36bd2ee0775973494d5a95e` |
| Canonical product specification | `Piyush1087/dummy_tcs` / `main` | `3bc6457f99b24e1ef5767e5c80136f9b4c55f861` |
| Existing Stitch execution library | `Piyush1087/dummy_tcs` / `docs/stitch-design-library` | resolve and record at execution |

## Controlled journey

1. Codex verifies all source refs and the retained Stitch project.
2. Codex reads the full G1/G2 authority and production source; Stitch does not receive those repositories.
3. Reuse accepted G0 global grounding when retained context is healthy. Reattach the four global files only when required.
4. Attach `stitch-context/campaign-page-grounding.md` and run Campaign Page grounding without UI generation where the connector supports text-only grounding. If it does not, inline its compact authority into CP-ST-01.
5. Generate CP-ST-01 only.
6. Preserve screenshot, HTML/code, prompt, IDs, lineage and review classification.
7. Obtain human design approval before frontend reconciliation or another screen.
8. Derive CP-ST-02 through CP-ST-05 from the accepted desktop grammar.
9. Generate the four desktop overlay/detail contracts CP-ST-08 through CP-ST-12 after their parent surfaces are accepted.
10. Generate the mobile family CP-ST-07 and CP-ST-13 through CP-ST-15 after the corresponding desktop grammar is stable.

## Screen order

`CP-ST-01 → CP-ST-02 → CP-ST-03 → CP-ST-04 → CP-ST-05 → CP-ST-08 → CP-ST-09 → CP-ST-10 → CP-ST-11 → CP-ST-12 → CP-ST-07 → CP-ST-13 → CP-ST-14 → CP-ST-15`

## Context budget

- Never upload GitHub repositories or engineering standards to Stitch.
- Do not attach all fourteen briefs together.
- Do not reattach G0 files on every call.
- Use G2.3 and source code for Codex reasoning; send Stitch the compact grounding plus current brief.
- CP-ST-01 is the desktop parent. Later prompts describe only the state delta and invariants.
- Create Campaign screenshots are optional visual references, not recurring prompt attachments.

## Completion gate per screen

`STITCH_GENERATED → STITCH_CONTRACT_REVIEWED → DESIGN_ACCEPTED → FRONTEND_RECONCILED → STATIC_VALIDATION_PASS → FOCUSED_TEST_PASS → RUNTIME_VISUAL_ACCEPTANCE_PASS`

Do not advance from design generation to frontend work without `DESIGN_ACCEPTED`.
