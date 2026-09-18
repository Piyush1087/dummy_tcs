# Canonical Reconciliation — B02 Route-Proof Normalization and Final-Matrix Resumption V1

## Parent disposition

The new B02 failure is accepted as a second instance of the same validation-harness selector defect class.

The first correction succeeded:

- the Brand Centre heading proof now targets the visible semantic heading;
- it no longer selects the hidden mobile-sidebar label.

The next B02 route proof failed because:

```ts
page.getByText(/Final Gate Unlinked Product|Offerings/i).first()
```

selected the hidden header element:

```html
<span class="aurora-header__current">Offerings</span>
```

instead of the visible Offerings route content.

This is not an application capability failure.

To prevent further one-selector-at-a-time circuit breakers, this prompt authorizes a bounded normalization of the complete B02 route-proof block only. All four B02 route assertions must use semantic, visible, route-specific locators that cannot resolve to hidden navigation/header labels.

After focused B02 passes at 390 and 1440 px, immediately restart the complete 30-execution final matrix from B01.

## Immutable authority

Resolve and verify this exact file on:

`authority/canonical-reconciliation-final-validation-b02-route-proof-normalization-v1`

Verify its commit, tree, sole parent, path and blob before mutation.

Preceding B02 recovery authority:

- Commit: `f957bc401b28ba7ba79220bf82a55e0177dba2cf`
- Tree: `68f0355ce1ea973bbc940b781200172d7cceb329`
- Prompt blob: `e5b740a5c9753b3eb8c62962b6d91a56b069bcec`
- Sole parent: `f5132a9e563000e8ba74889fedee5aadef70bf14`

Accepted frontend V2 support:

- Commit: `ca3fd0984f89acd5532a44d707d4aafa173c49dc`
- Tree: `b266070734ece18e0f04b845e9b70409e3828698`
- Sole parent: `edc6ff991a43ce3a93d2bd242d148a6fcbd104dc`

Accepted backend support:

- Commit: `d7f98cc51d9660f227ae367506d103026aad6439`
- Tree: `a9e526d47f53442836def82ae6db9031d3d4cdab`

Application checkpoints:

- Backend: `1a99cf3f54df849408c8775b20e78c036ee637c3`
- Frontend: `edc6ff991a43ce3a93d2bd242d148a6fcbd104dc`

Protected database identities:

- Schema blob: `1d9b3a8bf3145d47d326fae88493f7816eef9140`
- Migration count: `108`
- Migration subtree: `ae9c3e8036461260ad6f0963dffb7d5d9d010139`

Retained local V3 candidate:

- Parent: `ca3fd0984f89acd5532a44d707d4aafa173c49dc`
- Changed path:
  `e2e/canonical-reconciliation/final-gate/final-gate.spec.ts`
- Original V2 blob:
  `b605206de1e5f365165cf3c7fa37f10a129b3fc9`
- Current retained candidate blob:
  `909f619472628266275e398ab05388d87ee47aef`
- Current patch SHA-256:
  `de62a3976bb85a7aa7424ebc6ea0e93f9520c3dd681fba3825653dece832318d`

## Phase N0 — continuity

Before editing:

1. verify all immutable objects above;
2. verify the current prompt;
3. verify the retained local candidate exactly matches its parent, one-path scope, candidate blob and patch hash;
4. verify the successful Brand Centre role-based correction is present;
5. verify no application `src`, schema, migration, lockfile or second support path differs;
6. verify these remote branches remain absent:
   - `validate/mvp-canonical-final-gate-browser-v3`;
   - `reconcile/mvp-canonical-application-v1-final-validation-authority`.

If retained-candidate continuity fails, stop.

## Phase N1 — inspect all B02 route proofs

Before changing additional selectors, use a fresh focused runtime to inspect the visible semantic content for all four B02 routes at 390 and 1440 px:

1. `/brand/dashboard`
2. `/brand-centre`
3. `/brand-centre/offerings`
4. `/brand/media-kits/<fixture-id>`

For each route, record:

- visible headings and accessible names;
- the stable main-content landmark;
- duplicate hidden/navigation/header matches for the old broad regex;
- the selected route-specific locator;
- why it cannot resolve to a hidden navigation/header element.

This inspection is read-only. Do not change application source or fixture meaning.

## Phase N2 — normalize the complete B02 route block

Authorized changed path remains exactly:

`e2e/canonical-reconciliation/final-gate/final-gate.spec.ts`

No second path is authorized.

Replace the generic tuple of broad regex proofs and shared:

`getByText(proof).first()`

with explicit, route-specific semantic assertions.

Required locator rules:

- Brand Centre must use:
  `getByRole("heading", { name: "Final Gate Verified Brand" })`;
- Offerings must prove the exact visible fixture content `Final Gate Unlinked Product` within the main route content or through its exact semantic role;
- Media Kit must prove exact visible `Final Gate Creator` content within the main route content or through its semantic heading;
- Brand Dashboard must use a stable visible main-content heading/landmark or exact fixture-bound content discovered in Phase N1;
- no B02 content proof may use `.first()`;
- no B02 proof may use a broad alternation containing generic shell labels such as `Brand Home`, `Brand Centre`, or `Offerings`;
- no proof may rely only on DOM order;
- route and no-login assertions remain;
- all four route checks remain present;
- B01 and B03–B12 logic remains byte-identical.

A main-content scoped exact-text locator is permitted where the visible fixture entity is not a heading. A generic text fallback is not.

Record:

- final one-path diff;
- old/current/final blobs;
- final patch SHA-256;
- exact changed line range;
- application `src` diff count = 0;
- lockfile diff count = 0.

## Phase N3 — focused B02 proof

Run:

- final-gate manifest/contract tests;
- frontend typecheck;
- targeted lint for the changed spec;
- Playwright discovery;
- secret scan;
- B02 at 390 px;
- B02 at 1440 px.

At both widths, require all four B02 routes to pass with:

- correct authenticated Brand identity/workspace;
- visible route-specific content;
- no hidden navigation/header element selected;
- no login redirect;
- keyboard focus proof;
- zero critical Axe violations;
- zero console/page/API errors;
- zero non-loopback requests;
- zero provider calls;
- zero unauthorized or unclassified financial/database writes;
- zero contamination.

Focused runs do not count toward the final 30.

If either focused execution fails for any reason, stop. No additional harness correction is authorized in that run.

## Phase N4 — complete fresh final matrix

After focused B02 passes:

1. remove the focused disposable runtime and generated sessions;
2. provision a new loopback-only PostgreSQL 16 runtime;
3. apply exactly 108 migrations from zero;
4. seed the deterministic fixture;
5. generate and verify six synthetic role sessions;
6. prove reset/reseed isolation;
7. execute the complete matrix from B01.

Required distribution:

- B01: 2
- B02: 2
- B03: 4
- B04: 2
- B05: 4
- B06: 2
- B07: 2
- B08: 4
- B09: 2
- B10: 2
- B11: 2
- B12: 2
- Total: 30

Use the exact accepted role/viewport mapping and cover 390, 767, 768 and 1440 px.

Retries remain zero.

Reset/reseed and audit between every physical execution.

Acceptance requires:

- 30 passed;
- zero failed, skipped, timed out, retried or flaky;
- zero critical Axe violations;
- zero console errors;
- zero page errors;
- zero unhandled API failures;
- zero non-loopback requests;
- zero provider calls;
- zero unauthorized financial writes;
- zero unclassified database writes;
- zero cross-execution contamination.

Do not reuse results from either earlier partial run. Do not rerun a failure to convert it into acceptance.

All scenario semantics and the accepted backend-lint disposition from the preceding authorities remain controlling.

## Phase N5 — V3 support publication

Publish only after focused B02 passes and the fresh matrix passes 30/30.

Repository:

`Piyush1087/creator-commerce-frontend-v2-clone`

Branch:

`validate/mvp-canonical-final-gate-browser-v3`

Requirements:

- sole parent: `ca3fd0984f89acd5532a44d707d4aafa173c49dc`;
- exactly one changed path:
  `e2e/canonical-reconciliation/final-gate/final-gate.spec.ts`;
- no application source or lockfile change;
- repository-scoped Git identity;
- fail-fast commit/push;
- no force update;
- independent fetch-back exact.

Backend support remains unchanged at:

`d7f98cc51d9660f227ae367506d103026aad6439`

## Phase N6 — final-validation evidence

Authority branch:

`reconcile/mvp-canonical-application-v1-final-validation-authority`

Evidence path:

`docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_FINAL_WHOLE_APPLICATION_VALIDATION_EVIDENCE_V1.md`

Requirements:

- sole parent: the immutable commit containing this prompt;
- exactly one evidence file;
- independent fetch-back exact.

Record:

- complete authority chain;
- reused repository/PostgreSQL evidence and continuity proof;
- accepted backend lint disposition;
- both B02 selector failures and the complete route-proof normalization;
- B02 visible-content/locator inspection;
- final one-path V3 patch and identities;
- focused B02 results;
- fresh 108-migration/fixture/session/reset proof;
- all 30 final executions;
- all zero-audit totals;
- sanitized artifact-manifest SHA-256;
- cleanup;
- explicit boundaries:
  - `FINAL_WHOLE_APPLICATION_VALIDATION = PASS`
  - `FINAL_WHOLE_APPLICATION_ACCEPTANCE = PARENT_REVIEW_REQUIRED`
  - `FINAL_CANONICAL_CHECKPOINT = NOT_PUBLISHED`
  - `DEPLOYMENT = NONE`
  - `CAMPAIGN_INTELLIGENCE_REMAINS_PAUSED = YES`.

## Cleanup

Remove all disposable databases/containers, loopback services, storage states, token-bearing session manifests, traces/videos containing session data and temporary environment files.

Retain only sanitized evidence. Preserve `creator-shop-acceptance-postgres` unchanged.

## Circuit breakers

Stop without publication for:

- immutable or retained-candidate mismatch;
- any changed path outside the one authorized spec;
- application `src`, schema, migration or lockfile change;
- any B02 route proof remains broad, order-dependent, `.first()`-based or capable of selecting hidden shell content;
- focused B02 failure;
- migration/fixture/session/reset failure;
- any final matrix failure, skip, timeout, retry or flake;
- any non-zero browser/Axe/API/network/provider/financial/unclassified-write/contamination count;
- cleanup or fetch-back failure.

## Explicit exclusions

Do not:

- change application production source;
- change backend support;
- change Product, architecture, schema or migrations;
- change provider, payout, authorization or financial behavior;
- bulk-format backend files;
- publish the final canonical checkpoint;
- deploy, tag, merge or open a PR;
- resume Campaign Intelligence or paused campaign workstreams.

## Required result

Begin with exactly one:

- `CANONICAL_RECONCILIATION_B02_ROUTE_PROOF_NORMALIZATION_AND_FINAL_MATRIX_RESULT = READY_FOR_PARENT_REVIEW`
- `CANONICAL_RECONCILIATION_B02_ROUTE_PROOF_NORMALIZATION_AND_FINAL_MATRIX_RESULT = CIRCUIT_BREAKER`

Include:

- prompt/immutable integrity;
- retained-candidate continuity;
- four-route locator inspection;
- final spec blob and patch hash;
- focused B02 390/1440 results;
- reused validation continuity;
- fresh migration/fixture/session proof;
- 30-execution totals and per-scenario/viewports;
- zero-audit totals;
- V3 support publication/fetch-back;
- authority evidence publication/fetch-back;
- cleanup;
- blocker;
- `NEXT_BOUNDARY`.

Do not include time or completion telemetry unless the Parent explicitly asks for it.
