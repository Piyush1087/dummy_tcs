# Local Codex Runner — Final Validation Harness V2 B06 Clarification Resumption V1

CANONICAL_RECONCILIATION_FINAL_VALIDATION_HARNESS_V2_B06_CLARIFICATION_RESUMPTION_V1

## Role

Resume the V2 final-validation fixture and scenario-harness correction after Parent resolution of the B06 Add Product / Campaign Asset terminology.

The prior Phase 0 run made no source, database, branch, or evidence mutation. Start from the unchanged V1 support checkpoints and execute the complete V2 correction prompt, amended only by the B06 clarification below.

Do not stop merely because the visible canonical action is labelled Link Campaign Asset rather than Add Product.

## Mandatory controlling documents

Read and verify both documents completely before execution.

### V2 correction prompt

~~~text
REPOSITORY =
Piyush1087/dummy_tcs

COMMIT =
c4eefe8a34fd2ea5d6677d87c68e2a49eb4dfdc2

PATH =
docs/organization/prompts/canonical_reconciliation_final_validation_fixture_scenario_harness_correction_v2_local_codex_prompt.md

BLOB =
f0c300ccf2023220e8ceed32ed6fda489bf713c7
~~~

### B06 Parent clarification

~~~text
REPOSITORY =
Piyush1087/dummy_tcs

COMMIT =
2cdad65e7e20a197fed3f9f9dd4f7d4f77457468

PATH =
docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_FINAL_VALIDATION_B06_ADD_PRODUCT_CAMPAIGN_ASSET_PARENT_CLARIFICATION_V1.md

BLOB =
9051dd4c1cafdba5ca51dfa010694711f6855b71
~~~

Stop on any mismatch.

All requirements, boundaries, circuit breakers, telemetry, validation, cleanup and publication rules in the V2 correction prompt remain controlling except where this resumption explicitly amends B06 or the authority evidence parent.

## Accepted B06 interpretation

~~~text
B06_CAPABILITY_STATUS =
AVAILABLE_WITH_VALIDATION_FIXTURE

CANONICAL_DOMAIN_OBJECT =
CampaignAsset

CANONICAL_USER_FLOW =
ADD_PRODUCT / ADD_CAMPAIGN_ASSET REFERENCE FLOW

ACCEPTED_VISIBLE_ACTION =
Link Campaign Asset

ACCEPTED_SUBMIT_ACTION =
Link Asset

LEGACY_PRODUCT_ENDPOINT =
NOT_AUTHORIZED_FOR_B06
~~~

The frozen Add Product authority defines Product setup as selecting and linking one eligible Brand Centre entity into the Campaign as a canonical CampaignAsset.

The accepted frontend implements that capability through:

~~~text
src/features/uce/campaign-page/CampaignAssetsBriefsPanel.tsx
src/features/uce/campaign-page/CanonicalAssetDrawer.tsx
~~~

The drawer loads eligible Brand Centre entities, allows one explicit selection, posts the canonical kind and entity_id, and reloads the authoritative Campaign projection.

This is not a substitute for Add Product. It is the canonical Add Product/Add Campaign Asset implementation.

Do not use:

- legacy Campaign Product records;
- createCampaignProduct;
- POST /campaigns/:campaignId/products;
- direct database insertion during the browser action.

## Correct B06 capability map entry

Record:

~~~text
B06 =
AVAILABLE_WITH_VALIDATION_FIXTURE

SURFACE =
ADD_PRODUCT_CANONICAL_CAMPAIGN_ASSET_REFERENCE_FLOW

UI_LABEL =
Link Campaign Asset

DOMAIN_WRITE =
CREATE_CANONICAL_CAMPAIGN_ASSET_REFERENCE

NEXT_FLOW =
CREATE_CANONICAL_BRIEF
~~~

Continue the complete Phase 0 capability map for every other scenario. Stop for any other genuinely missing capability or undefined Product state.

## Required B06 scenario behavior

The B06 implementation must:

1. seed a Campaign with an eligible, unlinked Brand Centre entity;
2. open the canonical Campaign workspace as Brand Owner;
3. traverse the three accepted workspace tabs and assert distinct content;
4. click Link Campaign Asset;
5. assert the drawer's Brand Centre reference-selection explanation;
6. select an eligible BRAND, OFFERING or OFFER;
7. click Link Asset;
8. wait for the authoritative Campaign reload;
9. assert the new canonical CampaignAsset in UI/API;
10. assert its kind and entity_id match the selected Brand Centre entity;
11. assert no legacy Campaign Product row was created as a substitute;
12. click Create Brief for that canonical Asset;
13. complete the accepted canonical Brief flow;
14. assert the Brief belongs to the linked CampaignAsset;
15. assert the Campaign projection/readiness updates according to authority;
16. audit that only the allowed canonical CampaignAsset and Brief write classes occurred.

The V2 evidence must label this:

~~~text
PRODUCT_SURFACE =
ADD_PRODUCT_CANONICAL_CAMPAIGN_ASSET_REFERENCE_FLOW
~~~

## Unchanged application and V1 checkpoints

Backend application:

~~~text
COMMIT =
1a99cf3f54df849408c8775b20e78c036ee637c3

TREE =
9679ed60f186220716e948779d3d70dbbf89b39a

MIGRATIONS =
108

SCHEMA_BLOB =
1d9b3a8bf3145d47d326fae88493f7816eef9140
~~~

Frontend application:

~~~text
COMMIT =
a7c00fb77969a419b31e175d4085b4f574a8bed5

TREE =
aad8832bc4bcd9a6b3721a0e1e9fe39316fd9741
~~~

Backend V1 support:

~~~text
COMMIT =
99df138ef5602709cfd9850e5630606b7889f237

TREE =
77754f4db336cf9023765ffeeeb2b440aa45bc18
~~~

Frontend V1 support:

~~~text
COMMIT =
8f600d955b27f55d011adbc5513888b763674509

TREE =
4fd70320cd3beb74ca708123093ba7e73863f9b6
~~~

## V2 targets

Backend:

~~~text
BRANCH =
validate/mvp-canonical-final-gate-fixtures-v2

SOLE_PARENT =
99df138ef5602709cfd9850e5630606b7889f237
~~~

Frontend:

~~~text
BRANCH =
validate/mvp-canonical-final-gate-browser-v2

SOLE_PARENT =
8f600d955b27f55d011adbc5513888b763674509
~~~

Verify both remain absent before implementation.

## Representative correction matrix

Run all twelve representative executions required by the original V2 prompt:

| Scenario | Width |
|---|---:|
| B01 | 390 |
| B02 | 1440 |
| B03 | 767 |
| B04 | 390 |
| B05 | 768 |
| B06 | 1440 |
| B07 | 390 |
| B08 | 1440 |
| B09 | 390 |
| B10 | 1440 |
| B11 | 390 |
| B12 | 1440 |

Require:

~~~text
PASSED =
12

SKIPPED =
0

FAILED =
0

RETRIED_OR_FLAKY =
0
~~~

All original scenario-specific action, reset/reseed, audit, role, Axe, console, API, network, provider, financial, redaction and cleanliness requirements remain mandatory.

## Amended authority evidence publication

The authority branch and path remain:

~~~text
BRANCH =
reconcile/mvp-canonical-application-v1-final-harness-correction-authority

PATH =
docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_FINAL_VALIDATION_HARNESS_CORRECTION_EVIDENCE_V1.md
~~~

Amend the required sole parent to:

~~~text
SOLE_PARENT =
2cdad65e7e20a197fed3f9f9dd4f7d4f77457468
~~~

The evidence must verify and cite both:

- original V2 Parent disposition commit e0b8678ffa89756de2fed0f11ce69fed5ecafa6f;
- B06 clarification commit 2cdad65e7e20a197fed3f9f9dd4f7d4f77457468.

The evidence must state that the earlier B06 Phase 0 circuit breaker caused zero repository/database mutation and was resolved by existing frozen authority rather than a Product change.

## Publication and failure boundary

Publish the two V2 validation-support branches and correction evidence only after:

- the complete V2 static/focused gates pass;
- all twelve representative executions pass;
- B06 performs the canonical CampaignAsset reference and Brief flow;
- all reset/reseed and per-scenario audits pass;
- no production source/schema/migration/lockfile change occurs;
- no provider call, non-loopback request or unauthorized financial write occurs;
- fetch-back and clean-worktree verification pass.

If any other capability is missing or any scenario fails, follow the original V2 circuit-breaker policy. Do not weaken or skip it.

## Required report amendment

Return the complete report required by the original V2 prompt and additionally include:

~~~text
B06_CLARIFICATION_INTEGRITY =
B06_CAPABILITY_STATUS =
B06_PRODUCT_SURFACE =
B06_CANONICAL_ASSET_WRITE =
B06_LEGACY_PRODUCT_WRITE =
B06_CANONICAL_BRIEF_WRITE =
B06_DATABASE_AUDIT =
PRIOR_B06_CIRCUIT_BREAKER_MUTATION =
~~~

End after the V2 correction report. Do not begin the full 30-execution final validation in the same runner turn.
