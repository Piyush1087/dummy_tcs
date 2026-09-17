# Local Codex Runner — Final Validation Harness V2 B07-Corrected Resumption

CANONICAL_RECONCILIATION_FINAL_VALIDATION_HARNESS_V2_B07_CORRECTED_RESUMPTION_V1

## Role

Resume and complete the validation-only V2 final-validation fixture and scenario harness correction.

The prior run stopped correctly after finding that the accepted frontend has no Reporting opener. Parent review has determined that this is not a missing application capability. The validation requirement incorrectly combined legacy Campaign presentation with the canonical-objective Reporting fail-closed boundary.

Apply the controlling B07 Parent correction below. Do not implement Campaign Reporting or modify production application code.

Complete the full B01–B12 capability map before further implementation. Then finish the V2 candidates, execute one representative browser run for every B01–B12 scenario, publish only if every gate passes, and stop for Parent review.

Do not run the later full 30-viewport matrix in this turn.

## Mandatory telemetry

Continue recording reconciliation telemetry. Start before the first action of this resumed run and include exact timestamps and measured values in the immutable evidence and final response. Use `NOT_MEASURABLE` rather than estimating.

At minimum:

```text
RUN_STARTED_AT_UTC =
RUN_COMPLETED_AT_UTC =
WALL_CLOCK_SECONDS =
ACTIVE_EXECUTION_SECONDS =
COMMAND_COUNT =
LONGEST_COMMAND =
LONGEST_COMMAND_SECONDS =
WAITING_OR_BLOCKED_SECONDS =

AUTHORITY_AND_CONTINUITY_SECONDS =
CAPABILITY_MAP_COMPLETION_SECONDS =
BACKEND_V2_COMPLETION_SECONDS =
FRONTEND_V2_COMPLETION_SECONDS =
FOCUSED_VALIDATION_SECONDS =
REPRESENTATIVE_BROWSER_SECONDS =
AUDIT_SECONDS =
PUBLICATION_SECONDS =
CLEANUP_SECONDS =
```

Do not aggregate the overall reconciliation telemetry; the Parent will do that only after reconciliation completes.

## Controlling authority

Repository:

```text
Piyush1087/dummy_tcs
```

### Original V2 prompt

```text
COMMIT =
c4eefe8a34fd2ea5d6677d87c68e2a49eb4dfdc2

PATH =
docs/organization/prompts/canonical_reconciliation_final_validation_fixture_scenario_harness_correction_v2_local_codex_prompt.md

BLOB =
f0c300ccf2023220e8ceed32ed6fda489bf713c7
```

### B06 clarification

```text
COMMIT =
2cdad65e7e20a197fed3f9f9dd4f7d4f77457468

PATH =
docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_FINAL_VALIDATION_B06_ADD_PRODUCT_CAMPAIGN_ASSET_PARENT_CLARIFICATION_V1.md

BLOB =
9051dd4c1cafdba5ca51dfa010694711f6855b71
```

### Controlling B07 correction

```text
COMMIT =
2568a31dcef7b03ee6d104657f84c75d212f2d02

PATH =
docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_FINAL_VALIDATION_B07_REPORTING_BOUNDARY_PARENT_CORRECTION_V1.md

BLOB =
c6ed4c1f799c6278e6b258ac84906a6b00921aa7
```

Verify all three exact commit/path/blob tuples before mutation.

Precedence:

1. B07 correction governs B07 Reporting validation.
2. B06 clarification governs B06 Add Product.
3. Original V2 prompt governs everything else.

## Immutable application and V1 support checkpoints

Backend application:

```text
REPOSITORY =
Piyush1087/creator-commerce-backend-v2-clone

COMMIT =
1a99cf3f54df849408c8775b20e78c036ee637c3

TREE =
9679ed60f186220716e948779d3d70dbbf89b39a

MIGRATION_COUNT =
108

SCHEMA_BLOB =
1d9b3a8bf3145d47d326fae88493f7816eef9140
```

Frontend application:

```text
REPOSITORY =
Piyush1087/creator-commerce-frontend-v2-clone

COMMIT =
a7c00fb77969a419b31e175d4085b4f574a8bed5

TREE =
aad8832bc4bcd9a6b3721a0e1e9fe39316fd9741
```

Backend V1 support:

```text
COMMIT =
99df138ef5602709cfd9850e5630606b7889f237

TREE =
77754f4db336cf9023765ffeeeb2b440aa45bc18

SOLE_PARENT =
1a99cf3f54df849408c8775b20e78c036ee637c3
```

Frontend V1 support:

```text
COMMIT =
8f600d955b27f55d011adbc5513888b763674509

TREE =
4fd70320cd3beb74ca708123093ba7e73863f9b6

SOLE_PARENT =
a7c00fb77969a419b31e175d4085b4f574a8bed5
```

## Phase 0 — resume safely and finish capability mapping

The prior run retained uncommitted validation-only work.

Before using it:

1. verify each retained worktree HEAD is its exact V1 support commit;
2. record staged, unstaged, and untracked paths;
3. prove every path is within the original V2 validation-only allowlist;
4. prove no production `src`, schema, migration, lockfile, accepted branch, or remote V1 branch changed;
5. verify the V2 backend, frontend, and authority branches remain absent;
6. inspect the retained implementation rather than trusting prior partial status.

If those conditions pass, continue with the retained candidates.

If they do not pass, preserve any unrelated user work, create fresh isolated worktrees at the exact V1 commits, and reconstruct only authorized V2 validation changes. Stop if safe separation is impossible.

Complete the capability map for all B01–B12 before resuming browser execution. B06 and B07 are resolved as specified by their Parent corrections. Stop only if another scenario has a genuine unresolved application capability or Product-state gap.

## Corrected B07 implementation

B07 is one scenario identity with two coordinated proofs.

### Browser portion — legacy Campaign

Use only the accepted UI:

1. authenticate the accepted Brand role;
2. open the deterministic legacy Campaign;
3. assert visible `Objective unavailable`;
4. assert `PULSE`, `PROOF`, `PRODUCTION`, and `PUSH` are not presented as current canonical objective choices or values;
5. assert no reachable Reporting/performance action is presented as an accepted current user capability;
6. assert no fabricated performance metrics appear;
7. perform the required meaningful keyboard/focus assertion;
8. run Axe on the stable required shell;
9. retain zero-retry, loopback-only, console, page-error, and unexpected-response enforcement.

Do not open the dormant drawer by component injection, state manipulation, DOM hacking, test-only production hooks, or source changes.

### Authenticated application/API portion — canonical Campaign

In the same isolated scenario lifecycle:

1. use a deterministic canonical-objective Campaign owned by the authenticated Brand;
2. capture a before-state audit of Reporting snapshots, time series, asset gallery, related projections, provider mappings, financial instructions, payout receipts, and other declared protected classes;
3. call the accepted running application endpoint through an authenticated loopback request:

```text
GET /api/v1/brand/uce/campaigns/:campaignId/reporting
```

If the verified controller mount produces a different exact prefix, record and use that mounted path.

4. require the conflict response carrying:

```text
CAMPAIGN_REPORTING_CANONICAL_OBJECTIVE_UNAVAILABLE
```

5. call the authenticated accepted refresh endpoint to prove the write boundary:

```text
POST /api/v1/brand/uce/campaigns/:campaignId/reporting/refresh-sync
```

6. require the same conflict code;
7. capture the after-state audit;
8. prove zero Reporting snapshot, time-series, gallery, projection, provider, financial, or unclassified writes;
9. prove no fabricated canonical performance payload was returned.

Use Playwright's authenticated request context or a validation-only authenticated client against the running loopback application. Do not invoke the service directly as the acceptance proof. Existing focused service tests may supplement but not replace application-route proof.

### B07 semantic boundary

Do not expect legacy Reporting to fail closed. The accepted backend preserves legacy Reporting compatibility.

The required fail-closed behavior applies to canonical objectives only. Campaign Performance/Reporting implementation remains paused.

## B06 reminder

B06 must use the canonical Add Product / CampaignAsset reference flow:

- Link Campaign Asset;
- select an eligible Brand Centre entity;
- Link Asset;
- authoritative reload;
- exact canonical CampaignAsset kind/entity identity;
- zero legacy Product write;
- Create Brief for the linked asset;
- readiness and database-audit proof.

Do not use the legacy Product endpoint as the canonical B06 path.

## Complete V2 requirements

All original V2 requirements remain mandatory except the superseded B07 wording.

Require before publication:

- capability map completed for all B01–B12;
- exactly 12 typed scenario contracts and 30 declared final viewport executions;
- scenario-specific operations and assertions;
- reset/reseed and before/after audit actually invoked by orchestration;
- zero retry;
- focused backend fixture tests;
- focused frontend contract/orchestration tests;
- Prisma generate and validate;
- frontend typecheck and targeted lint;
- Playwright list exactly 30 executions;
- secret-pattern scan;
- one representative real browser execution for each B01–B12;
- all 12 representative scenarios pass;
- zero skips, failures, retries, or flakes;
- zero critical Axe violations;
- zero unexpected console/page/API errors;
- zero non-loopback requests;
- zero provider calls;
- zero unauthorized financial writes;
- zero unclassified writes;
- zero cross-scenario contamination;
- unchanged application source, schema, migration history, and accepted branches;
- clean publication worktrees;
- exact commit, branch, path, tree, blob, parent, and fetch-back verification.

Representative widths remain:

```text
B01 = 390
B02 = 1440
B03 = 767
B04 = 390
B05 = 768
B06 = 1440
B07 = 390
B08 = 1440
B09 = 390
B10 = 1440
B11 = 390
B12 = 1440
```

## Publication targets

Backend:

```text
BRANCH =
validate/mvp-canonical-final-gate-fixtures-v2

SOLE_PARENT =
99df138ef5602709cfd9850e5630606b7889f237
```

Frontend:

```text
BRANCH =
validate/mvp-canonical-final-gate-browser-v2

SOLE_PARENT =
8f600d955b27f55d011adbc5513888b763674509
```

Authority evidence:

```text
REPOSITORY =
Piyush1087/dummy_tcs

BRANCH =
reconcile/mvp-canonical-application-v1-final-harness-correction-authority

SOLE_PARENT =
2568a31dcef7b03ee6d104657f84c75d212f2d02

PATH =
docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_FINAL_VALIDATION_HARNESS_CORRECTION_EVIDENCE_V1.md
```

Use repository-local Git identity only if missing:

```text
Piyush1087 <piyush.p1087@gmail.com>
```

Use explicit exit-code checks. Push by direct repository URL and exact refspec. Do not use broad fetch/prune in mirror-style clones. Do not force, rebase, amend, reset accepted refs, delete branches, create tags, or create PRs.

## Absolute boundaries

Not authorized:

- production application source change;
- Reporting UI control or route implementation;
- Campaign Performance/Reporting implementation;
- schema or migration change;
- lockfile change;
- Product or architecture reinterpretation;
- direct database mutation as a substitute for user/application action;
- Applicant AI Match;
- Marketplace recommendation score;
- Creator Chat;
- provider-enabled payout execution;
- deployment;
- final 30-execution matrix;
- final whole-application acceptance;
- final canonical publication;
- Campaign Intelligence resumption.

## Circuit breakers

Stop without publication for:

- immutable identity mismatch;
- unsafe retained-candidate continuity;
- unexpected application or migration change;
- any unresolved B01–B12 capability gap other than the resolved B06/B07 findings;
- any skipped, failed, retried, flaky, or conditionally bypassed representative scenario;
- any unexpected external request, console/page/API failure, provider call, unauthorized financial write, unclassified write, or contamination;
- branch collision;
- commit or fetch-back mismatch.

Retain exact evidence and report the narrow next boundary.

## Required response

Return a structured result beginning with:

```text
FINAL_VALIDATION_HARNESS_CORRECTION_V2_RESUMPTION_RESULT =
READY_FOR_PARENT_REVIEW | CIRCUIT_BREAKER
```

Include:

- telemetry;
- authority and immutable checkpoint integrity;
- retained-candidate continuity or reconstruction result;
- completed B01–B12 capability map;
- backend/frontend V2 branch, commit, parent, tree, changed paths, and fetch-back;
- schema blob, migration count/subtree, and preservation;
- fixture coverage;
- scenario-contract/list counts;
- reset/reseed/audit orchestration proof;
- all focused validation;
- representative browser totals and individual B01–B12 results;
- B06 canonical CampaignAsset/Brief audit;
- B07 legacy-browser and canonical-Reporting-API results separately;
- Axe, console, page, API, loopback, provider, financial, unclassified-write, and contamination totals;
- authority evidence commit/tree/blob/path/fetch-back;
- worktree cleanliness;
- blockers;
- next boundary.

If successful:

```text
NEXT_BOUNDARY =
PARENT REVIEW OF V2 VALIDATION SUPPORT ONLY
```

Do not claim final whole-application acceptance.
