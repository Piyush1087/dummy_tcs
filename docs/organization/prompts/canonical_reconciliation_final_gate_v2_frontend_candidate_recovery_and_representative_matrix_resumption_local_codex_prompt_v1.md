# Canonical Reconciliation Final Gate — V2 Frontend Candidate Recovery and Representative-Matrix Resumption V1

## Parent disposition

The preceding circuit breaker is accepted as an operational local-Git failure:

`FRONTEND_V2_CANDIDATE_HEAD_UNRESOLVED`

It is not evidence of an application, Product, architecture, schema, migration, or validation-semantic regression.

The retained frontend worktree points to:

`refs/heads/validate/mvp-canonical-final-gate-browser-v2`

but that local ref is missing. Therefore:

- `HEAD` cannot resolve;
- Git treats the worktree/index as 1,103 staged additions;
- the old tracked-patch SHA-256 cannot be reproduced relative to a valid parent;
- the old expected patch hash is no longer a valid continuity gate for that broken worktree.

The verified lifecycle blob remains usable evidence:

`fcfd9ce2d78d67809496c35504782eb95b61c8f9`

This prompt authorizes a safe reconstruction in a fresh isolated worktree. Do not repair, reset, restore, commit, delete, or otherwise mutate the broken original frontend worktree.

After successful reconstruction and focused verification, resume the complete 12-scenario representative matrix authorized by the preceding prompt without returning for another approval.

## Immutable authority chain

Current recovery prompt authority:

- Resolve this exact file on:
  `authority/canonical-reconciliation-final-gate-v2-frontend-candidate-recovery-v1`
- Verify its commit, tree, sole parent, path and blob before mutation.

Preceding representative-matrix authority:

- Commit: `21139bd473f670f048fa97cf0b1c7f2f06464017`
- Tree: `8d665a2fea8b7f1ace32b3b7b8f6dc79fd5d092a`
- Prompt blob: `4cdcbf42143061683a276d63a520d3e99778cda4`
- Sole parent: `c2417c9053662fdbcbb24245ec6f3bcb5f3a01eb`

Accepted B05/B08 evidence:

- Commit: `c2417c9053662fdbcbb24245ec6f3bcb5f3a01eb`
- Tree: `97f3056f823a4ad9e72f18933897a92641eb5ee2`
- Evidence blob: `90f77c90493eb6d139bcf2bfd38a527560f62f49`

Application bases:

Backend:

- Commit: `1a99cf3f54df849408c8775b20e78c036ee637c3`
- Tree: `9679ed60f186220716e948779d3d70dbbf89b39a`

Frontend:

- Commit: `edc6ff991a43ce3a93d2bd242d148a6fcbd104dc`
- Tree: `8b8a9c515afb04a69a962e4d786d7f398854ea9c`

V1 support sources:

Backend:

- Commit: `99df138ef5602709cfd9850e5630606b7889f237`
- Tree: `77754f4db336cf9023765ffeeeb2b440aa45bc18`

Frontend:

- Commit: `8f600d955b27f55d011adbc5513888b763674509`
- Tree: `4fd70320cd3beb74ca708123093ba7e73863f9b6`

Protected database identities:

- Prisma schema blob: `1d9b3a8bf3145d47d326fae88493f7816eef9140`
- Migration count: `108`
- Migration subtree: `ae9c3e8036461260ad6f0963dffb7d5d9d010139`

Retained backend V2 candidate:

- Base: `99df138ef5602709cfd9850e5630606b7889f237`
- Exactly five authorized paths
- Patch SHA-256: `3120dc4a6d1b8d772c1746072594cab3035de01d600f2478109f0d172856baf5`
- `audit.ts` blob: `e50bd7dff01ff4098277dea64c49ad9edef228bc`
- Fixture-test blob: `032a285bddeaa67683c6706d1eff868167464ec1`

## Phase R0 — reverify and preserve

Before reconstruction:

1. Verify every immutable commit, tree, blob, schema and migration identity above.
2. Verify the current recovery prompt.
3. Verify all three intended publication branches remain absent remotely:
   - `validate/mvp-canonical-final-gate-fixtures-v2`
   - `validate/mvp-canonical-final-gate-browser-v2`
   - `reconcile/mvp-canonical-application-v1-final-harness-correction-authority`
4. Reverify the backend V2 candidate exactly against its patch hash and blobs.
5. Capture the broken frontend worktree's:
   - worktree path;
   - symbolic HEAD text;
   - missing-ref evidence;
   - index state;
   - complete tracked/untracked path inventory;
   - per-file worktree blob IDs;
   - per-file index blob IDs where meaningful.
6. Confirm the original broken worktree contains no production `src`, schema, migration, lockfile, secret-bearing session, trace, or generated credential file among its retained candidate changes.

Do not create the missing ref. Do not normalize its index. Do not run reset, restore, checkout, switch, commit, clean, stash, rebase, merge, or cherry-pick inside it.

If candidate validation files cannot be read safely or their path set escapes the allowlist, stop.

## Phase R1 — fresh frontend reconstruction

Create a new isolated worktree or fresh clone at exactly:

`edc6ff991a43ce3a93d2bd242d148a6fcbd104dc`

Confirm its tree is:

`8b8a9c515afb04a69a962e4d786d7f398854ea9c`

Reconstruct the validation-support overlay only.

Authorized frontend support paths:

- `.gitignore`
- `package.json`
- `playwright.final-gate.config.ts`
- `vitest.final-gate.config.ts`
- files under `e2e/canonical-reconciliation/final-gate/`

No other path is authorized.

Reconstruction sources, in order:

1. immutable V1 support commit `8f600d955b27f55d011adbc5513888b763674509`;
2. readable worktree contents from the retained broken V2 candidate;
3. the already verified lifecycle blob `fcfd9ce2d78d67809496c35504782eb95b61c8f9`;
4. the accepted B03–B12 validation-harness corrections recorded by the preceding authorities.

Do not cherry-pick the V1 support commit because its historical parent predates the accepted Creator actor and B05/B08 application corrections.

Do not copy Git index metadata, branch refs, `.git` contents, generated sessions, traces, credentials, artifacts, node_modules, caches, or application `src` files.

The reconstructed candidate must preserve:

- corrected Creator actor handling;
- corrected B03 locator;
- deterministic B04 media/network sanitization;
- request-based B05 autosave synchronization;
- state-aware DRAFT-null/PUBLISHED-hash audit;
- canonical B06 Offering → CampaignAsset → Brief flow and audit;
- mounted-prefix B07 Reporting verification;
- B08 UUID idempotency and exactly-one collaboration proof;
- B09/B10 provider-disabled payout boundaries;
- B11/B12 no-recovery-shell actor assertions;
- reset/reseed orchestration;
- database/provider/financial audit orchestration;
- loopback-only enforcement;
- zero automatic Playwright retries.

## Phase R2 — reconstruction integrity

Relative to `edc6ff991a43ce3a93d2bd242d148a6fcbd104dc`, record:

- exact changed path list;
- additions/deletions;
- per-file blob IDs;
- deterministic manifest SHA-256;
- binary-safe patch SHA-256;
- application `src` diff count;
- schema diff count;
- migration diff count;
- lockfile diff count.

Required:

- all changed paths are within the frontend support allowlist;
- application `src` diff count = 0;
- schema diff count = 0;
- migration diff count = 0;
- lockfile diff count = 0;
- lifecycle file blob = `fcfd9ce2d78d67809496c35504782eb95b61c8f9`;
- the accepted Creator actor and B05/B08 application blobs from `edc6ff991a43ce3a93d2bd242d148a6fcbd104dc` remain unchanged.

The prior hash `80d2e4193d50d98453a07101412880ee6ff86e9e` is historical evidence only. Do not require the new parent-relative patch to equal it. The new patch hash relative to `edc6ff991a43ce3a93d2bd242d148a6fcbd104dc` becomes the controlling reconstructed-candidate fingerprint for this run.

Run before infrastructure:

- frontend final-gate manifest and scenario-contract tests;
- typecheck;
- targeted lint;
- Playwright list;
- secret-pattern scan;
- backend fixture/audit focused tests;
- state-aware hash-audit tests;
- Prisma generate and validate.

Require:

- 12 scenario identities;
- 30 full-matrix executions declared;
- 12 representative executions selected;
- Playwright retries = 0.

Any mismatch or focused failure is a circuit breaker.

## Phase R3 — resume the representative matrix

After R0–R2 pass, resume the preceding prompt at its disposable-runtime phase.

Provision a fresh loopback-only PostgreSQL 16 runtime:

- do not touch `creator-shop-acceptance-postgres`;
- apply exactly 108 migrations from zero;
- prove all migration records successful and unique;
- seed the deterministic final-gate fixture;
- generate and verify six role sessions;
- prove reset/reseed while preserving `_prisma_migrations`;
- use no live provider credentials.

Run exactly 12 representative browser executions: one for each B01–B12. Automatic retries remain disabled.

Reset, reseed, verify the role session, run the scenario and perform database/provider/financial audits between scenarios.

Required final outcomes:

- B01–B12: 12/12 PASS;
- skipped: 0;
- timed out: 0;
- retried/flaky: 0;
- critical Axe violations: 0;
- unexpected console errors: 0;
- page errors: 0;
- unhandled API failures: 0;
- non-loopback requests: 0;
- provider calls: 0;
- unauthorized financial writes: 0;
- unclassified database writes: 0;
- cross-scenario contamination: 0.

Apply all exact scenario semantics and boundaries from the preceding prompt at commit `21139bd473f670f048fa97cf0b1c7f2f06464017`.

No application correction is authorized in this turn. A scenario failure must stop publication and be reported.

## Phase R4 — V2 support publication

Only after 12/12 PASS:

### Backend

Branch:

`validate/mvp-canonical-final-gate-fixtures-v2`

Requirements:

- sole parent: `99df138ef5602709cfd9850e5630606b7889f237`;
- exactly five previously verified validation-only paths;
- patch identity preserved;
- independent fetch-back exact.

### Frontend

Branch:

`validate/mvp-canonical-final-gate-browser-v2`

Requirements:

- sole parent: `edc6ff991a43ce3a93d2bd242d148a6fcbd104dc`;
- reconstructed validation-support allowlist only;
- no application `src` or lockfile change;
- independent fetch-back exact.

Use repository-scoped Git identity. Fail fast after commit creation. Never push using a refspec that can move a checked-out local branch. Do not force push or delete remote branches.

After publication, verify the broken original frontend worktree remains byte-for-byte and index-for-index unchanged from the R0 capture.

## Phase R5 — authority evidence

Authority branch:

`reconcile/mvp-canonical-application-v1-final-harness-correction-authority`

Evidence path:

`docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_FINAL_VALIDATION_HARNESS_CORRECTION_EVIDENCE_V1.md`

Requirements:

- sole parent: the immutable commit containing this recovery prompt;
- one-file evidence scope;
- record the broken-ref diagnosis and non-mutation proof;
- record reconstruction sources, path/blob manifest and new patch hash;
- record backend candidate continuity;
- record all focused and B01–B12 results;
- record migrations, fixture, sessions, resets and audits;
- record both V2 publication commits/trees/parents/fetch-back;
- record cleanup;
- state explicitly:
  - `FULL_30_EXECUTION_MATRIX = UNCLAIMED`
  - `FINAL_WHOLE_APPLICATION_ACCEPTANCE = UNCLAIMED`
  - `CAMPAIGN_INTELLIGENCE_REMAINS_PAUSED = YES`

Fetch back through an isolated verification ref and prove the evidence commit, tree, sole parent, blob and one-file scope.

## Circuit breakers

Stop without publication for:

- immutable authority mismatch;
- backend retained-candidate mismatch;
- broken frontend worktree mutation;
- candidate path outside the allowlist;
- application `src`, schema, migration or lockfile change;
- lifecycle blob mismatch;
- focused validation failure;
- database-isolation or migration failure;
- any representative scenario failure, skip, timeout, retry or flake;
- any non-zero Axe/browser/API/network/provider/financial/unclassified-write/contamination count;
- secret-bearing artifact that cannot be removed;
- unsafe ref movement;
- commit, push or fetch-back mismatch.

On a breaker, preserve recoverable validation-only candidates, remove disposable infrastructure and secret-bearing generated artifacts, and leave accepted application checkpoints unchanged.

## Explicit exclusions

Do not:

- repair or delete the broken original frontend worktree/ref;
- change application production source;
- change Product or architecture;
- change schema or migrations;
- change authorization, provider, payout or financial behavior;
- run the full 30-execution matrix;
- claim final whole-application acceptance;
- publish the final immutable canonical checkpoint;
- deploy, tag, open a PR or merge into development/freeze;
- resume Campaign Intelligence or its paused workstreams.

## Required result

Begin with exactly one:

- `FINAL_GATE_V2_FRONTEND_RECOVERY_AND_REPRESENTATIVE_MATRIX_RESULT = READY_FOR_PARENT_REVIEW`
- `FINAL_GATE_V2_FRONTEND_RECOVERY_AND_REPRESENTATIVE_MATRIX_RESULT = CIRCUIT_BREAKER`

Include:

- current prompt and immutable integrity;
- broken-worktree capture and preservation;
- reconstruction path/blob manifest and new patch hash;
- backend V2 candidate continuity;
- focused validation;
- disposable database/migration/fixture/session proof;
- B01–B12 outcomes and zero-audit totals;
- backend/frontend V2 publication identities and fetch-back;
- authority evidence identities and fetch-back;
- cleanup;
- blocker;
- `NEXT_BOUNDARY`.

Do not include time or completion telemetry unless the Parent explicitly asks for it.
