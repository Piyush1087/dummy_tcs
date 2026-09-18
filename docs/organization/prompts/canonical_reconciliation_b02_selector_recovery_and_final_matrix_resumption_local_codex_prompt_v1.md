# Canonical Reconciliation — B02 Selector Recovery and Complete Final-Matrix Resumption V1

## Parent disposition

The preceding browser circuit breaker is classified as:

`VALIDATION_HARNESS_SELECTOR_DEFECT`

It is not an application capability failure.

At B02 / 390 px:

- the expected visible heading `Final Gate Verified Brand` was present;
- the generic locator used:
  `page.getByText(/Final Gate Verified Brand|Brand Centre/i).first()`;
- `.first()` resolved to a hidden mobile-sidebar `Brand Centre` label;
- application content, route and authenticated Brand identity were present;
- no production application correction is required.

This prompt authorizes:

1. one support-only B02 selector correction;
2. focused B02 validation at 390 and 1440 px;
3. a completely new 30-execution final matrix from B01;
4. publication of a frontend V3 validation-support commit and final-validation evidence only after the complete matrix passes.

The partial prior browser run is not reusable as final matrix evidence.

No application source, Product, architecture, schema, migration, provider, payout or financial change is authorized.

## Immutable authority

Resolve and verify this exact file on:

`authority/canonical-reconciliation-final-validation-b02-selector-recovery-v1`

Verify its commit, tree, sole parent, path and blob before mutation.

Preceding lint-disposition/final-validation authority:

- Commit: `f5132a9e563000e8ba74889fedee5aadef70bf14`
- Tree: `4e872edd2ad41203e8b12ab8efee47c542d7be90`
- Prompt blob: `6ffb6db28c2828c5e339335fcfbd305d80168907`
- Sole parent: `386c49e8bab7937b17681f803b97e5d66e4e3a33`

Accepted backend support:

- Commit: `d7f98cc51d9660f227ae367506d103026aad6439`
- Tree: `a9e526d47f53442836def82ae6db9031d3d4cdab`

Accepted frontend V2 support:

- Commit: `ca3fd0984f89acd5532a44d707d4aafa173c49dc`
- Tree: `b266070734ece18e0f04b845e9b70409e3828698`
- Sole parent: `edc6ff991a43ce3a93d2bd242d148a6fcbd104dc`

Accepted application bases:

- Backend: `1a99cf3f54df849408c8775b20e78c036ee637c3`
- Backend tree: `9679ed60f186220716e948779d3d70dbbf89b39a`
- Frontend: `edc6ff991a43ce3a93d2bd242d148a6fcbd104dc`
- Frontend tree: `8b8a9c515afb04a69a962e4d786d7f398854ea9c`

Protected database identities:

- Schema blob: `1d9b3a8bf3145d47d326fae88493f7816eef9140`
- Migration count: `108`
- Migration subtree: `ae9c3e8036461260ad6f0963dffb7d5d9d010139`

B02 harness source:

- Path: `e2e/canonical-reconciliation/final-gate/final-gate.spec.ts`
- V2 blob: `b605206de1e5f365165cf3c7fa37f10a129b3fc9`

## Accepted prior validation evidence for reuse

The immediately preceding run established, without source mutation:

### Backend lint

- `npm run lint:eslint`: PASS on application and support checkpoints;
- Prettier-inclusive lint: identical 707 formatting-only errors across the same 109 paths;
- normalized diagnostic SHA-256:
  `8c43e86722e6388d851dbb13b2c4dafdce938ad8964bcda83a69f1da42fb41ae`;
- new backend lint errors: zero.

### Repository validation

Backend:

- clean install, Prisma generate/validate, semantic lint and build: PASS;
- full suite: 7,326 passed, 955 accepted infrastructure-gated skips, zero failed;
- Campaign readiness: 31/31;
- Intelligence contract verification: PASS;
- final-gate fixture/hash audit: 5/5.

Frontend:

- typecheck, lint and build: PASS;
- full suite: 1,421 passed, one pre-existing conditional skip;
- Campaign autosave: 8/8;
- harness tests: 5/5;
- Playwright discovery: 30 executions, retries zero.

### PostgreSQL

- clean PostgreSQL 16 migration: 108/108 successful and unique;
- C04: 6/6;
- C06: 1/1;
- Brand Payout P1: 17/17;
- Brand Payout Wave B: 3/3;
- Campaign/C03 PostgreSQL: 5/5;
- deterministic fixture/reset/reseed: PASS;
- clean/seeded normalized schema SHA-256:
  `16ff28b0c4d95aa45c150c3ae2bb0d81b41c174a2f64a88ccbb22ab20b98c245`;
- provider/financial/payout counts: zero.

These results may be reused only after proving all application, backend support, schema, migration and lockfile identities remain exact.

The fresh browser run must still provision a new disposable database, apply all 108 migrations, seed, reset/reseed and generate role sessions because those are required runtime dependencies of the matrix.

## Phase B0 — immutable and continuity preflight

Before editing:

1. verify all commits, trees, blobs, schema and migration identities above;
2. verify the current prompt;
3. verify the final evidence branch remains absent:
   `reconcile/mvp-canonical-application-v1-final-validation-authority`;
4. verify the intended V3 support branch remains absent:
   `validate/mvp-canonical-final-gate-browser-v3`;
5. verify `final-gate.spec.ts` has the exact V2 blob above;
6. verify no application/support ref moved after the preceding run;
7. verify clean isolated LF-preserving worktrees with repository-local `core.autocrlf=false`.

If continuity fails, stop.

## Phase B1 — support-only selector correction

Create an isolated candidate with parent:

`ca3fd0984f89acd5532a44d707d4aafa173c49dc`

Authorized changed path:

`e2e/canonical-reconciliation/final-gate/final-gate.spec.ts`

No second path is authorized.

Replace only the B02 Brand Centre visibility proof that can select the hidden sidebar label.

The corrected proof must:

- target the visible semantic heading;
- use role `heading`;
- use accessible name `Final Gate Verified Brand`;
- not depend on DOM order or `.first()`;
- not select the generic sidebar label `Brand Centre`;
- preserve all other B02 routes, assertions and audits;
- preserve every B01 and B03–B12 scenario definition;
- preserve the 30-execution distribution and retries = 0.

Expected selector intent:

`getByRole("heading", { name: "Final Gate Verified Brand" })`

Equivalent role-based exact-visible semantics are permitted. A broader text fallback is not.

Record:

- exact one-path diff;
- old and new blobs;
- patch SHA-256;
- application `src` diff count = 0;
- lockfile diff count = 0.

Do not edit application source or any other support file.

## Phase B2 — focused correction proof

Before the full matrix, run:

- final-gate manifest/contract tests;
- frontend typecheck;
- targeted lint for the changed support file;
- Playwright discovery;
- secret scan;
- B02 at 390 px;
- B02 at 1440 px.

Focused B02 requirements at both viewports:

- authenticated Brand identity and workspace resolve;
- Brand Centre route mounts;
- the exact visible `Final Gate Verified Brand` heading is found;
- the hidden sidebar label is not used as content proof;
- Brand Home, Brand Centre, intelligence and verified Media Kit route checks pass;
- keyboard focus proof passes;
- Axe completes with zero critical violations;
- zero console, page, API and non-loopback failures;
- provider/financial/database audit is clean.

The focused executions are correction evidence only. They do not count toward the final 30.

If either focused execution fails, stop and do not publish.

## Phase B3 — fresh runtime for final matrix

After focused proof passes:

1. discard the focused disposable runtime;
2. provision a fresh loopback-only PostgreSQL 16 runtime;
3. apply exactly 108 migrations from zero;
4. prove 108 successful unique migration records;
5. seed the deterministic final-gate fixture;
6. generate and verify six synthetic role sessions;
7. prove reset/reseed isolation preserving migration history;
8. start accepted backend/frontend checkpoints only on loopback;
9. use no live provider credentials;
10. suppress/block all non-loopback requests.

Do not touch `creator-shop-acceptance-postgres`.

## Phase B4 — complete new 30-execution matrix

Run the entire matrix from B01. Do not reuse B01 results from the failed run.

Required distribution:

| Scenario | Executions |
| --- | ---: |
| B01 | 2 |
| B02 | 2 |
| B03 | 4 |
| B04 | 2 |
| B05 | 4 |
| B06 | 2 |
| B07 | 2 |
| B08 | 4 |
| B09 | 2 |
| B10 | 2 |
| B11 | 2 |
| B12 | 2 |
| **Total** | **30** |

Use the exact accepted viewport/role mapping, including 390, 767, 768 and 1440 px coverage.

Automatic retries remain zero.

Between every physical execution:

- reset/reseed while retaining migration history;
- regenerate or verify the required role session;
- verify identity/workspace;
- run database/provider/financial audits;
- prove no cross-execution contamination.

Acceptance requires:

- passed: 30;
- failed: 0;
- skipped: 0;
- timed out: 0;
- retried: 0;
- flaky: 0;
- critical Axe violations: 0;
- unexpected console errors: 0;
- page errors: 0;
- unhandled API failures: 0;
- non-loopback requests: 0;
- provider calls: 0;
- unauthorized financial writes: 0;
- unclassified database writes: 0;
- cross-execution contamination: 0.

Do not rerun a failed execution to turn it into a pass. A first-run failure is a circuit breaker.

All scenario semantics from the final-validation prompt at `386c49e8bab7937b17681f803b97e5d66e4e3a33` remain controlling.

## Phase B5 — V3 support publication

Publish only after focused B02 proof and 30/30 matrix success.

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
- fail-fast commit/push handling;
- no force push;
- independent fetch-back proving commit, tree, parent, path and blob.

Backend support remains unchanged at `d7f98cc51d9660f227ae367506d103026aad6439`.

## Phase B6 — final-validation evidence

Authority branch:

`reconcile/mvp-canonical-application-v1-final-validation-authority`

Evidence path:

`docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_FINAL_WHOLE_APPLICATION_VALIDATION_EVIDENCE_V1.md`

Requirements:

- sole parent: the immutable commit containing this prompt;
- exactly one evidence file;
- independent fetch-back exact.

Evidence must record:

- immutable prompt and application/support identities;
- backend lint disposition and exact baseline-equivalence hashes;
- reused repository/PostgreSQL proof and its continuity basis;
- B02 selector root cause, one-path correction and V3 support identities;
- focused B02 390/1440 results;
- fresh 108-migration runtime proof;
- every one of the 30 final executions with scenario, viewport, role and result;
- all zero-audit totals;
- sanitized artifact manifest SHA-256;
- cleanup;
- boundaries:
  - `FINAL_WHOLE_APPLICATION_VALIDATION = PASS`
  - `FINAL_WHOLE_APPLICATION_ACCEPTANCE = PARENT_REVIEW_REQUIRED`
  - `FINAL_CANONICAL_CHECKPOINT = NOT_PUBLISHED`
  - `DEPLOYMENT = NONE`
  - `CAMPAIGN_INTELLIGENCE_REMAINS_PAUSED = YES`.

## Cleanup

Remove:

- focused and final disposable PostgreSQL containers/databases;
- loopback application processes/listeners;
- browser storage states;
- session manifests containing tokens;
- secret-bearing traces/videos;
- temporary environment files.

Retain only sanitized assertions, Axe reports and screenshots permitted by the harness.

Verify accepted source worktrees are clean and `creator-shop-acceptance-postgres` remains untouched.

## Circuit breakers

Stop without publication for:

- immutable mismatch;
- any changed path other than the single authorized spec file;
- application source, schema, migration or lockfile change;
- selector remains order-dependent, text-broad or hidden-element-capable;
- focused B02 failure;
- migration/fixture/session/reset failure;
- any final execution failure, skip, timeout, retry or flake;
- any non-zero Axe/browser/API/network/provider/financial/unclassified-write/contamination count;
- secret cleanup failure;
- push/fetch-back mismatch.

No application or additional harness correction is authorized after a breaker.

## Explicit exclusions

Do not:

- change application production source;
- change backend support;
- change Product, architecture, schema or migrations;
- change authorization, provider, payout or financial behavior;
- bulk-format backend files;
- reuse the partial browser run as final evidence;
- publish the final canonical checkpoint;
- deploy, tag, merge or open a PR;
- resume Campaign Intelligence or paused workstreams.

## Required result

Begin with exactly one:

- `CANONICAL_RECONCILIATION_B02_SELECTOR_RECOVERY_AND_FINAL_MATRIX_RESULT = READY_FOR_PARENT_REVIEW`
- `CANONICAL_RECONCILIATION_B02_SELECTOR_RECOVERY_AND_FINAL_MATRIX_RESULT = CIRCUIT_BREAKER`

Include:

- prompt and immutable integrity;
- exact B02 correction path/blob/patch;
- focused B02 results;
- reused validation continuity;
- fresh migration/fixture/session proof;
- 30-execution totals and per-scenario/viewports;
- zero-audit totals;
- V3 support branch/commit/tree/parent/fetch-back;
- authority evidence commit/tree/blob/fetch-back;
- cleanup;
- blockers;
- `NEXT_BOUNDARY`.

Do not include time or completion telemetry unless the Parent explicitly asks for it.
