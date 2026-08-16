# Campaign Page Stitch attachment manifest

## Runtime identity

```text
Repository: Piyush1087/dummy_tcs
Library branch: docs/stitch-design-library
Exact library SHA: resolve at runtime
Stitch project: Creator Shop — Campaign
Project ID: 8396755977547935397
```

## Codex-only preflight

Codex reads but never uploads:

- this package guide and manifest;
- frontend `docs/campaign/phase-g/00_run_state.md` and `04`–`13` at `d3cd942...`;
- accepted frontend components/contracts/tests at `e00f383...`;
- backend contracts at `0f2c6c7...`;
- engineering standards and Git metadata;
- artifact registry and preservation instructions.

## G0 reusable global packet

Attach only when project grounding is missing, stale or contradicted:

1. `docs/stitch-design-library/global/01A-creator-shop-platform-context.md`
2. `docs/stitch-design-library/global/01B-aurora-5-stitch-context.md`
3. `docs/stitch-design-library/global/01C-application-shell-and-viewport-context.md`
4. `docs/stitch-design-library/global/01D-global-stitch-design-instructions.md`

The retained project already used this packet for Create Campaign. Do not reattach it automatically.

## G1 Campaign Page packet

Attach:

1. `docs/stitch-design-library/modules/campaign/stitch-context/campaign-page-grounding.md`

If the connector cannot do text-only grounding, inline this file with the CP-ST-01 prompt and generate exactly one screen.

## Screen packet

Attach exactly one current screen brief. Do not attach the other thirteen briefs.

| Stage | Brief | Parent authority |
|---|---|---|
| S1 | `04F-operational-campaign.md` | retained global grounding |
| S2 | `04G-setup-reconciliation.md` | accepted CP-ST-01 |
| S3 | `04H-applicants.md` | accepted CP-ST-01 |
| S4 | `04I-collaboration-references.md` | accepted CP-ST-01 and CP-ST-03 distinction |
| S5 | `04J-terminal-historical.md` | accepted CP-ST-01 shell family |
| S7 | `04K-mobile-operational.md` | accepted desktop family |
| S8 | `04L-campaign-details-drawer.md` | accepted CP-ST-01 |
| S9 | `04M-link-asset-search.md` | accepted CP-ST-02 and CP-ST-01 shell |
| S10 | `04N-link-asset-confirmation.md` | accepted CP-ST-09 |
| S11 | `04O-asset-brief-detail.md` | accepted CP-ST-02 |
| S12 | `04P-applicant-detail-decision.md` | accepted CP-ST-03 |
| S13 | `04Q-mobile-setup-reconciliation.md` | accepted CP-ST-02 and CP-ST-07 mobile grammar |
| S14 | `04R-mobile-link-asset.md` | accepted CP-ST-10 and CP-ST-13 |
| S15 | `04S-mobile-applicant-decision.md` | accepted CP-ST-12 and CP-ST-07 |

## Optional visual reference

Use a small number of approved Create Campaign screenshots only if Stitch loses Creator Shop visual continuity. Do not attach Create Campaign HTML as active product authority and do not ask Stitch to copy its wizard layout.

## Excluded from Stitch

- frontend/backend source;
- full Phase G ledger and engineering standards;
- GitHub paths, commits and execution mechanics;
- generated or preserved HTML from prior screens as executable input;
- rejected/superseded Create Campaign screens;
- populated Discovery or Reporting concepts;
- frontend reconciliation instructions.

## Required record for every attachment

Repository path, governing commit, Git blob/content SHA, file status/version, stage, connector attachment ID, and whether retained context was reused.

## Output retrieval

After each generation preserve:

- exact project and screen IDs;
- exact screen name and parent lineage;
- prompt text/version and model;
- represented viewport/state;
- screenshot/full render;
- generated HTML/code identity and file;
- preview link when available;
- review classification and deviations.
