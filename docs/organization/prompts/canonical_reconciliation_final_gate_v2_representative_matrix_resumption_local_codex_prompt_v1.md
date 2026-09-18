# Canonical Reconciliation Final Gate — V2 Representative Matrix Resumption V1

## Authority and accepted disposition

The B05/B08 application correction is accepted as the corrected frontend application base for continuation of final validation.

Accepted frontend correction:

- Repository: `Piyush1087/creator-commerce-frontend-v2-clone`
- Branch: `correction/mvp-canonical-final-gate-b05-b08-frontend-v1`
- Commit: `edc6ff991a43ce3a93d2bd242d148a6fcbd104dc`
- Tree: `8b8a9c515afb04a69a962e4d786d7f398854ea9c`
- Sole parent: `cb1a83465272d6b0d75fc88c11d8acb89a5e91b0`
- Scope: exactly four authorized paths

Accepted correction evidence:

- Repository: `Piyush1087/dummy_tcs`
- Branch: `reconcile/mvp-canonical-application-v1-final-gate-b05-b08-correction-authority`
- Commit: `c2417c9053662fdbcbb24245ec6f3bcb5f3a01eb`
- Tree: `97f3056f823a4ad9e72f18933897a92641eb5ee2`
- Evidence blob: `90f77c90493eb6d139bcf2bfd38a527560f62f49`
- Sole parent: `4c92e3d04afcffed96f80f21d3befed161fdf02b`

The hash-audit circuit breaker is closed:

- DRAFT campaigns must retain `canonicalDefinitionHash = null`;
- published canonical campaigns must carry a valid recomputed hash;
- B05 and B08 targeted browser/database proofs passed;
- no Product, architecture, backend, schema, migration, provider, payout or financial behavior changed.

This prompt authorizes the next bounded stage only:

`V2 REPRESENTATIVE MATRIX — 12 SCENARIOS / 12 EXECUTIONS`

It does not authorize the full 30-execution final matrix, final whole-application acceptance, canonical checkpoint publication, deployment, or Campaign Intelligence resumption.

The immutable authority for this prompt is the commit resolving this exact file on:

`authority/canonical-reconciliation-final-gate-v2-representative-matrix-resumption-v1`

Verify its commit, tree, path and blob before mutation.

## Controlling application checkpoints

Backend application:

- Repository: `Piyush1087/creator-commerce-backend-v2-clone`
- Commit: `1a99cf3f54df849408c8775b20e78c036ee637c3`
- Tree: `9679ed60f186220716e948779d3d70dbbf89b39a`

Frontend application:

- Repository: `Piyush1087/creator-commerce-frontend-v2-clone`
- Commit: `edc6ff991a43ce3a93d2bd242d148a6fcbd104dc`
- Tree: `8b8a9c515afb04a69a962e4d786d7f398854ea9c`

Protected database identities:

- Prisma schema blob: `1d9b3a8bf3145d47d326fae88493f7816eef9140`
- Migration count: `108`
- Migration subtree: `ae9c3e8036461260ad6f0963dffb7d5d9d010139`

Validation-support V1 checkpoints:

Backend:

- Commit: `99df138ef5602709cfd9850e5630606b7889f237`
- Tree: `77754f4db336cf9023765ffeeeb2b440aa45bc18`
- Sole parent: `1a99cf3f54df849408c8775b20e78c036ee637c3`

Frontend source checkpoint:

- Commit: `8f600d955b27f55d011adbc5513888b763674509`
- Tree: `4fd70320cd3beb74ca708123093ba7e73863f9b6`
- Historical sole parent: `a7c00fb77969a419b31e175d4085b4f574a8bed5`

Do not use the historical frontend V1 support commit as the final application base. Its validation-only files must be semantically overlaid onto the corrected frontend application commit `edc6ff991a43ce3a93d2bd242d148a6fcbd104dc`.

## Retained V2 candidate authority

The retained backend V2 validation-support candidate is authorized only if it verifies exactly as follows:

- Base: `99df138ef5602709cfd9850e5630606b7889f237`
- Exactly five changed paths under `scripts/canonical-reconciliation/final-gate/`
- Complete patch SHA-256: `3120dc4a6d1b8d772c1746072594cab3035de01d600f2478109f0d172856baf5`
- Corrected `audit.ts` blob: `e50bd7dff01ff4098277dea64c49ad9edef228bc`
- Corrected fixture-test blob: `032a285bddeaa67683c6706d1eff868167464ec1`

The prior retained frontend V2 validation candidate must also be inspected before reconstruction. Prior recorded identities include:

- tracked patch SHA-256: `80d2e4193d50d98453a07101412880ee6ff86e9e`
- lifecycle blob: `fcfd9ce2d78d67809496c35504782eb95b61c8f9`

These prior identities are continuity evidence, not permission to retain stale application code. The final frontend V2 support candidate must be constructed on the corrected frontend application base `edc6ff991a43ce3a93d2bd242d148a6fcbd104dc` and must contain validation-support changes only.

## Phase 0 — immutable verification and safe reconstruction

Before running infrastructure or editing:

1. Fetch all authority and implementation objects through direct repository URLs or isolated verification refs.
2. Verify all commits, trees, sole-parent relationships, evidence blobs, schema and migration identities.
3. Verify the current prompt authority.
4. Verify both V2 publication branches and the authority branch are absent remotely.
5. Verify the retained backend V2 candidate exactly against its five-path manifest, blobs and patch hash.
6. Verify the retained frontend candidate against its prior patch and untracked-file identities.
7. Record exact HEAD/index/worktree state before reconstruction.

Reconstruct isolated candidate worktrees:

### Backend support candidate

Use `99df138ef5602709cfd9850e5630606b7889f237` as the parent.

Retain only the exact five authorized validation-support paths already proven by patch hash. Do not edit backend application source, schema, migrations or lockfile.

### Frontend support candidate

Use `edc6ff991a43ce3a93d2bd242d148a6fcbd104dc` as the parent.

Apply the V1/V2 validation-support overlay semantically. Cherry-picking the historical V1 support commit is prohibited if it would regress corrected application source.

Frontend validation-support path allowlist:

- `.gitignore`
- `package.json`
- `playwright.final-gate.config.ts`
- `vitest.final-gate.config.ts`
- files under `e2e/canonical-reconciliation/final-gate/`

No `src` path, lockfile, application route, component, API client or shared contract may change.

The reconstructed frontend must preserve:

- Creator actor correction from `cb1a83465272d6b0d75fc88c11d8acb89a5e91b0`;
- B05/B08 correction from `edc6ff991a43ce3a93d2bd242d148a6fcbd104dc`;
- corrected B03 locator;
- deterministic B04 media sanitization;
- request-based B05 autosave synchronization;
- canonical B06 CampaignAsset/Offering/Brief audit;
- mounted-prefix B07 Reporting check;
- ready/no-recovery assertions for B08, B11 and B12;
- loopback-only network enforcement;
- zero automatic Playwright retries;
- reset/reseed and database-audit orchestration.

If either retained candidate cannot be verified or safely reconstructed without touching production application source, stop.

## Phase 1 — focused validation-support checks

Before browser execution, run:

### Backend

- final-gate fixture/audit focused tests;
- state-aware DRAFT/PUBLISHED hash assertions;
- Prisma generation;
- Prisma validation;
- targeted lint/typecheck if defined;
- secret-pattern scan over the validation-only diff.

### Frontend

- final-gate manifest and scenario-contract tests;
- typecheck;
- targeted lint;
- Playwright list;
- secret-pattern scan over the validation-only diff.

Required declaration:

- exactly 12 scenario identities;
- exactly 30 full-matrix executions declared;
- exactly 12 representative executions selected for this turn;
- automatic retries: `0`.

A focused failure is a circuit breaker.

## Phase 2 — disposable runtime

Provision a fresh, isolated, loopback-only PostgreSQL 16 runtime.

Requirements:

- do not use or mutate `creator-shop-acceptance-postgres`;
- apply exactly 108 migrations from zero;
- verify 108 successful and uniquely named migration records;
- seed the deterministic final-gate fixture;
- generate all six role sessions;
- redact and remove secret-bearing session material after execution;
- start backend and frontend only on loopback;
- block non-loopback requests;
- suppress remote decorative assets deterministically before request;
- preserve zero live provider credentials and calls.

Before scenario execution, prove reset/reseed isolation and retain the migration table.

## Phase 3 — representative matrix

Run exactly one representative browser execution for each scenario B01–B12, using the scenario's declared representative viewport.

Playwright automatic retries must remain disabled.

Between scenarios:

1. reset the disposable database while preserving `_prisma_migrations`;
2. reseed deterministically;
3. regenerate or verify the required role session;
4. verify scenario identity and workspace;
5. run the scenario;
6. run database/provider/financial audits;
7. verify no cross-scenario contamination.

### Required scenario semantics

| Scenario | Required proof |
| --- | --- |
| B01 | Public Campaign and verified public Media Kit routes mount and remain keyboard/Axe safe. |
| B02 | Authenticated Brand Home, Brand Centre, intelligence and verified Media Kit surfaces resolve for the correct Brand identity. |
| B03 | Supported Brand gatekeeper/Preview transition and authenticated Brand navigation work through the corrected locator. |
| B04 | Unsupported-industry state fails closed without a live provider or non-loopback asset request. |
| B05 | All four canonical objectives create and autosave; PATCH, reload, subsequent edit and DRAFT-null hash semantics pass. |
| B06 | Canonical Add Product meaning is proven through Offering → CampaignAsset linkage plus Brief; no legacy Product write. |
| B07 | Legacy objective presentation remains readable and Reporting is reachable but fails closed through the mounted `/api/v1/brand-uce` prefix. |
| B08 | Creator application → Brand terminal action → exactly one canonical C04 collaboration; UUID idempotency and no recovery shell. |
| B09 | Provider-disabled Creator Payout workspace works for the accepted permitted roles with zero provider/financial writes. |
| B10 | Campaign Manager payout denial remains non-enumerating and fail closed. |
| B11 | Creator platform surfaces resolve under a valid actor contract and do not render the identity-recovery shell. |
| B12 | Creator role boundaries and Instagram lifecycle states resolve without actor-contract rejection or unauthorized access. |

Every scenario must also satisfy:

- zero critical Axe violations;
- zero unexpected console errors;
- zero page errors;
- zero unhandled API failures;
- zero non-loopback requests;
- zero provider calls;
- zero unauthorized financial writes;
- zero unclassified database writes;
- zero cross-scenario contamination;
- no skip;
- no timeout;
- no retry;
- no flaky classification.

Any failure stops publication. Diagnose and report; do not modify application source in this turn.

## Phase 4 — candidate integrity after execution

After 12/12 scenarios pass:

1. reverify application commits and protected blobs;
2. confirm backend candidate changes only its five validation-support paths;
3. confirm frontend candidate changes only the validation-support allowlist;
4. confirm no schema, migration or lockfile change;
5. compute exact path/blob manifests and binary-safe patch SHA-256 values;
6. scan both candidates and retained sanitized evidence for secrets;
7. clean generated sessions, traces and temporary environment files;
8. retain only sanitized evidence.

## Phase 5 — V2 support publication

Publication is authorized only if the representative matrix is 12/12 PASS and every audit is zero/clean.

### Backend V2 support

Branch:

`validate/mvp-canonical-final-gate-fixtures-v2`

Requirements:

- sole parent: `99df138ef5602709cfd9850e5630606b7889f237`;
- exactly five authorized validation-support paths;
- no application source, schema, migration or lockfile change;
- repository-scoped Git identity;
- fail-fast commit/push handling;
- independent fetch-back proving commit, tree, parent, path set and blobs.

### Frontend V2 support

Branch:

`validate/mvp-canonical-final-gate-browser-v2`

Requirements:

- sole parent: `edc6ff991a43ce3a93d2bd242d148a6fcbd104dc`;
- validation-support allowlist only;
- no application `src` or lockfile change;
- repository-scoped Git identity;
- fail-fast commit/push handling;
- independent fetch-back proving commit, tree, parent, path set and blobs.

Never push using a refspec that moves a checked-out local branch. Use direct URLs or isolated remote refs.

If any target branch unexpectedly exists, stop unless its head is the exact expected parent or a byte-identical candidate that can be advanced by a non-force fast-forward. Do not delete or force-update it.

## Phase 6 — immutable evidence

Authority branch:

`reconcile/mvp-canonical-application-v1-final-harness-correction-authority`

Evidence path:

`docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_FINAL_VALIDATION_HARNESS_CORRECTION_EVIDENCE_V1.md`

Requirements:

- sole parent: the immutable commit containing this prompt;
- exactly one evidence file;
- record both application checkpoints and both V2 support checkpoints;
- record exact path/blob manifests and patch hashes;
- record all 12 scenario outcomes and representative viewports;
- record Axe/browser/API/network/provider/financial/database contamination totals;
- record migration, fixture, session and reset/reseed proof;
- record cleanup;
- explicitly state that the 30-execution matrix and final whole-application acceptance remain unclaimed;
- independent fetch-back must reproduce commit, tree, parent, evidence blob and one-file scope.

## Circuit breakers

Stop without publication if any of the following occurs:

- authority or immutable-object mismatch;
- retained-candidate continuity failure;
- production source, schema, migration or lockfile change;
- target-branch collision outside the permitted fast-forward condition;
- Docker/database isolation failure;
- any focused validation failure;
- any B01–B12 scenario failure, skip, timeout, retry or flake;
- critical Axe violation;
- unexpected browser/API failure;
- non-loopback request;
- provider call;
- unauthorized financial write;
- unclassified database write;
- cross-scenario contamination;
- secret-bearing artifact cannot be removed;
- commit, push or fetch-back mismatch.

Preserve recoverable validation-only candidates, remove disposable infrastructure and secrets, and leave accepted application branches untouched.

## Explicit exclusions

Do not:

- edit application production source;
- alter Product or architecture;
- alter schema or migrations;
- alter authorization, provider, payout or financial behavior;
- run the 30-execution final matrix;
- claim final whole-application acceptance;
- create the final immutable canonical checkpoint;
- deploy, tag, open a PR or merge into development/freeze;
- enter Campaign Performance, Applicant AI Match or marketplace recommendation work;
- resume Campaign Intelligence.

## Required result

Begin with exactly one:

- `FINAL_GATE_V2_REPRESENTATIVE_MATRIX_RESULT = READY_FOR_PARENT_REVIEW`
- `FINAL_GATE_V2_REPRESENTATIVE_MATRIX_RESULT = CIRCUIT_BREAKER`

Report:

- prompt and immutable integrity;
- retained/reconstructed candidate continuity;
- support path/blob manifests and patch hashes;
- focused validation results;
- disposable PostgreSQL/migration/fixture/session proof;
- B01–B12 outcomes;
- browser/Axe/API/network/provider/financial/database totals;
- backend V2 branch/commit/parent/tree/fetch-back;
- frontend V2 branch/commit/parent/tree/fetch-back;
- authority evidence branch/commit/tree/blob/fetch-back;
- cleanup;
- blockers;
- `NEXT_BOUNDARY`.

Do not include time or completion telemetry unless the Parent explicitly asks for it.
