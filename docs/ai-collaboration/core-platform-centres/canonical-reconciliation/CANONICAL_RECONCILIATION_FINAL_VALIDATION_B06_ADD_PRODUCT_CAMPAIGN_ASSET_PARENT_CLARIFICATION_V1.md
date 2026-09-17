# Canonical Reconciliation Final Validation — B06 Add Product / Campaign Asset Parent Clarification V1

~~~text
PARENT_CLARIFICATION_RESULT =
B06_APPLICATION_CAPABILITY_EXISTS

B06_CAPABILITY_STATUS =
AVAILABLE_WITH_VALIDATION_FIXTURE

B06_BLOCKER =
RESOLVED_BY_EXISTING_CANONICAL_AUTHORITY

PRODUCT_CHANGE =
NO

ARCHITECTURE_CHANGE =
NO

APPLICATION_CHANGE =
NO

MIGRATION_CHANGE =
NO

LEGACY_PRODUCT_API_AUTHORIZED =
NO

V2_HARNESS_CORRECTION_MAY_RESUME =
YES
~~~

## Trigger

The V2 capability-map run stopped because the accepted Campaign workspace exposes Link Campaign Asset rather than a button literally labelled Add Product.

Its narrow conclusion was:

~~~text
B06 =
MISSING_APPLICATION_CAPABILITY

REASON =
NO_ADD_PRODUCT_USER_ACTION
~~~

That conclusion is not accepted because it treats the legacy Product record/API terminology as the required canonical implementation and does not apply the frozen Add Product domain authority.

## Frozen Add Product authority

At authority commit:

~~~text
COMMIT =
a49bf8ce2c041dd049ea0f278988225ac949279c
~~~

the frozen Add Product domain contract states:

~~~text
PATH =
campaign/add_product/domain_contract.yaml

BLOB =
5e72f79bf54c8ee6aa3584da686b3aee6f15ba62

STATUS =
FROZEN

CANONICAL_DOMAIN_OBJECT =
CampaignAsset

UI_NAME =
Add a Product
~~~

Its governing semantics are:

- a CampaignAsset references one Brand Centre entity;
- canonical reference kinds are BRAND, OFFERING or OFFER;
- Brand Centre remains authoritative;
- no Product business data is copied into Campaign;
- one successful Add operation creates one CampaignAsset;
- duplicate references are prohibited.

The frozen field contract is:

~~~text
PATH =
campaign/add_product/field_contract.yaml

BLOB =
8c114ccf31094edfb6796edfc30630a8bb4a8382
~~~

It defines Add Product as a reference-selection flow:

- choose the Brand Centre entity type;
- choose one eligible Brand Centre entity;
- preview it read-only;
- persist only the canonical reference identity;
- recalculate the Campaign projection;
- move next focus to Add Brief.

Phase G explicitly describes the in-scope surface as:

~~~text
PATH =
campaign/phase_g/README.md

BLOB =
467e751da6960d6fc453cd9780f1c7a1da366899

SURFACE =
Add Product / Add Campaign Asset flow
~~~

Therefore Add Product and Add Campaign Asset are two names for the same canonical CampaignAsset reference flow. They are not two separate application capabilities.

## Accepted runtime implementation

At the accepted frontend application checkpoint:

~~~text
COMMIT =
a7c00fb77969a419b31e175d4085b4f574a8bed5
~~~

the canonical implementation includes:

Campaign panel:

~~~text
PATH =
src/features/uce/campaign-page/CampaignAssetsBriefsPanel.tsx

BLOB =
40553d4b34c64e42d8ca94884070f8ae4f104f3e
~~~

It exposes:

- Link Campaign Asset;
- Create Brief;
- canonical Asset → Brief presentation;
- a separate warning that legacy Products do not establish canonical readiness.

Canonical asset drawer:

~~~text
PATH =
src/features/uce/campaign-page/CanonicalAssetDrawer.tsx

BLOB =
b2e80b7a1a219bad3e53e063f5918e33ef87b2b6
~~~

It:

- loads selectable Brand Centre entities;
- excludes already-linked identities;
- lets the user select one entity;
- submits the canonical kind and entity_id;
- links the CampaignAsset;
- reloads authoritative Campaign state.

This is the frozen Add Product domain behavior.

The label Link Campaign Asset is a technically precise presentation of the same canonical action. It does not remove the user capability.

## Legacy boundary

The following is not the canonical B06 path:

- legacy Campaign Product records;
- legacy POST /campaigns/:campaignId/products;
- legacy createCampaignProduct;
- legacy Product detail records;
- direct database insertion during the browser action.

Those remain compatibility surfaces only and must not be used to satisfy B06.

## Corrected B06 browser obligation

B06 must:

1. begin with a Campaign that has at least one eligible unlinked Brand Centre entity;
2. open the Campaign workspace;
3. traverse all three accepted workspace tabs and assert their distinct content;
4. click Link Campaign Asset;
5. assert the canonical drawer explains Brand Centre reference selection;
6. select an eligible BRAND, OFFERING or OFFER entity;
7. click Link Asset;
8. wait for authoritative reload;
9. assert exactly one new canonical CampaignAsset with the selected kind/entity identity;
10. assert no legacy Campaign Product row was created as a substitute;
11. click Create Brief for the linked canonical Asset;
12. complete the accepted Brief flow;
13. assert the Brief belongs to that CampaignAsset;
14. assert the Campaign projection/readiness updates according to the accepted contract;
15. prove the database writes are limited to the allowed canonical CampaignAsset and Brief classes.

The visible labels may remain Link Campaign Asset and Link Asset. The validation evidence should describe this as:

~~~text
PRODUCT_SURFACE =
ADD_PRODUCT_CANONICAL_CAMPAIGN_ASSET_REFERENCE_FLOW
~~~

## Disposition of the prior V2 circuit breaker

The Phase 0 stop was procedurally correct because the runner was instructed to stop instead of interpreting authority.

Its B06 missing-capability classification is superseded by this clarification.

All other findings remain usable:

- B01–B05 and B07–B12 are AVAILABLE or AVAILABLE_WITH_VALIDATION_FIXTURE;
- no undefined Product state was found;
- no application, validation, database or branch mutation occurred;
- V2 branches remain absent.

## Resumption authority

Resume the V2 fixture and scenario-harness correction under:

~~~text
ORIGINAL_V2_PROMPT_COMMIT =
c4eefe8a34fd2ea5d6677d87c68e2a49eb4dfdc2

ORIGINAL_V2_PROMPT_PATH =
docs/organization/prompts/canonical_reconciliation_final_validation_fixture_scenario_harness_correction_v2_local_codex_prompt.md

AMENDMENT =
THIS_B06_CLARIFICATION
~~~

Every original V2 requirement remains in force except that B06 capability status is now AVAILABLE_WITH_VALIDATION_FIXTURE and its Add Product action must use the canonical Link Campaign Asset flow described above.

## Next boundary

Resume V2 implementation from unchanged V1 support checkpoints, implement the complete scenario-specific fixture/harness correction, execute one representative run for each B01–B12 scenario, publish immutable V2 checkpoints and correction evidence only if all gates pass, then stop for Parent review.
