# Canonical Reconciliation — Backend Lint Disposition and Final Validation Resumption V1

## Parent disposition

The preceding final-validation circuit breaker is accepted as a gate-definition mismatch, not an application regression.

The backend repository defines two different commands:

```json
"lint": "eslint \"{src,test}/**/*.ts\"",
"lint:eslint": "node scripts/eslint-without-prettier.mjs"
```

The ESLint configuration includes `eslint-plugin-prettier/recommended` unless:

`ESLINT_WITHOUT_PRETTIER=1`

The accepted canonical-reconciliation gates used `npm run lint:eslint` as the mandatory semantic lint gate. That gate excludes pre-existing formatting-only Prettier findings while retaining ESLint correctness checks.

The final-validation prompt used the ambiguous phrase “repository-defined lint.” The runner selected `npm run lint`, which includes Prettier and exposed 707 formatting errors in already accepted backend `src` and `test` files.

The V2 support checkpoint:

- changes zero application `src` paths;
- changes zero `test` paths covered by the lint glob;
- does not change `eslint.config.mjs`;
- does not change either lint command;
- adds only final-gate validation-support scripts and files.

Therefore, no bulk formatting is authorized. The correct next step is an exact baseline-equivalence proof, followed—only if equivalence passes—by resumption of the final validation using `npm run lint:eslint` as the mandatory backend lint gate.

This Parent disposition supersedes only the backend lint interpretation in the preceding prompt. Every other validation requirement remains controlling.

## Immutable authority

Resolve and verify this exact file on:

`authority/canonical-reconciliation-final-validation-backend-lint-disposition-v1`

Verify its commit, tree, sole parent, path and blob before work.

Preceding final-validation authority:

- Commit: `386c49e8bab7937b17681f803b97e5d66e4e3a33`
- Tree: `bfff027b920277cae660dc91dc053bb686d32646`
- Prompt blob: `1e6dd53f4ee73dd99f7564f897ad8a506e1c2727`
- Sole parent: `e1000bcb1f49e4d3c5db551d2975b2762534fe45`

Accepted backend application:

- Commit: `1a99cf3f54df849408c8775b20e78c036ee637c3`
- Tree: `9679ed60f186220716e948779d3d70dbbf89b39a`
- `package.json` blob: `dc1493f0405e17ba6f9c083dc232a9b8e6e6a9e5`
- `eslint.config.mjs` blob: `950c77f284421936b62dd0210156c2eeb02a0eb2`

Accepted backend V2 support:

- Commit: `d7f98cc51d9660f227ae367506d103026aad6439`
- Tree: `a9e526d47f53442836def82ae6db9031d3d4cdab`
- Sole parent: `99df138ef5602709cfd9850e5630606b7889f237`
- `package.json` blob: `c814157ac0ad4f3c37fbc79d18dc20b6d38f4326`
- Support patch SHA-256: `3120dc4a6d1b8d772c1746072594cab3035de01d600f2478109f0d172856baf5`

Accepted frontend application and support remain:

- Application commit: `edc6ff991a43ce3a93d2bd242d148a6fcbd104dc`
- Application tree: `8b8a9c515afb04a69a962e4d786d7f398854ea9c`
- Support commit: `ca3fd0984f89acd5532a44d707d4aafa173c49dc`
- Support tree: `b266070734ece18e0f04b845e9b70409e3828698`

Protected database identities:

- Schema blob: `1d9b3a8bf3145d47d326fae88493f7816eef9140`
- Migration count: `108`
- Migration subtree: `ae9c3e8036461260ad6f0963dffb7d5d9d010139`

## Phase L0 — immutable verification

Use fresh isolated LF-preserving clones:

- set repository-local `core.autocrlf=false` before checkout;
- verify clean worktrees;
- do not change global Git configuration;
- use the same Node/npm versions and the same committed lockfile for both backend comparisons.

Verify:

1. all authority and implementation commits/trees/blobs above;
2. the current prompt;
3. the backend application and support commits have identical blobs for:
   - all files under `src/**`;
   - all files under `test/**`;
   - `eslint.config.mjs`;
   - the committed dependency lockfile;
   - `scripts/eslint-without-prettier.mjs`;
4. the only relevant `package.json` difference is addition of final-gate validation scripts;
5. both `lint` and `lint:eslint` definitions are byte-equivalent between application and support checkpoints;
6. the final-validation evidence branch remains absent:
   `reconcile/mvp-canonical-application-v1-final-validation-authority`.

If any lint-covered source, test, config, lint helper, lockfile or lint-command definition differs, stop.

## Phase L1 — exact baseline-equivalence proof

Create two fresh isolated backend worktrees:

A. application commit `1a99cf3f54df849408c8775b20e78c036ee637c3`;

B. support commit `d7f98cc51d9660f227ae367506d103026aad6439`.

For both:

1. run clean dependency installation from the exact lockfile;
2. use `core.autocrlf=false`;
3. verify clean status before commands;
4. run `npm run lint:eslint`;
5. capture exit code and normalized diagnostics;
6. run `npm run lint` only as a read-only baseline comparison;
7. capture exit code and normalize every diagnostic by:
   - repository-relative path;
   - rule ID;
   - severity;
   - line;
   - column;
   - normalized message;
8. sort the normalized diagnostics deterministically;
9. compute a SHA-256 of each normalized diagnostic manifest.

Required result:

- `lint:eslint` application base: PASS;
- `lint:eslint` support checkpoint: PASS;
- `npm run lint` application base: formatting-only failure;
- `npm run lint` support checkpoint: the exact same formatting-only failure;
- error counts identical;
- affected path sets identical;
- rule distribution identical;
- normalized diagnostic-manifest SHA-256 values identical;
- no non-Prettier error in either `npm run lint` result;
- no new support-checkpoint diagnostic.

The previously observed support count was 707 errors. If the controlled comparison does not reproduce identical application/support manifests, stop for Parent review.

Do not run `--fix`, Prettier write mode, or any source mutation.

## Accepted lint interpretation after equivalence

If and only if Phase L1 passes:

```text
BACKEND_SEMANTIC_LINT_GATE = npm run lint:eslint
BACKEND_SEMANTIC_LINT_RESULT = REQUIRED_PASS
BACKEND_PRETTIER_INCLUSIVE_LINT = KNOWN_IDENTICAL_BASELINE_FORMATTING_DEBT
BACKEND_PRETTIER_INCLUSIVE_LINT_RESULT = NON_BLOCKING_FOR_THIS_RECONCILIATION
BACKEND_NEW_LINT_ERRORS = ZERO
```

This is not a claim that `npm run lint` passes. It is an explicit, evidence-backed disposition of pre-existing formatting debt that is identical before and after validation-support publication.

Record this qualification in final evidence.

## Phase L2 — resume final whole-application validation

After Phase L1 passes, resume the preceding final-validation prompt from Phase 1.

Do not return for another approval.

All requirements at commit `386c49e8bab7937b17681f803b97e5d66e4e3a33` remain controlling except:

- use `npm run lint:eslint` as the mandatory backend semantic lint gate;
- retain the Phase L1 `npm run lint` equivalence result as disclosed non-blocking formatting debt;
- do not rerun `npm run lint` as a blocking gate.

Required backend validation remains:

- clean install;
- Prisma generate and validate;
- `npm run lint:eslint`;
- production build;
- complete backend test suite;
- Campaign readiness;
- Intelligence contract verification;
- final-gate fixture/hash-audit tests;
- C04, C06, Brand Payout and Campaign Objective PostgreSQL proofs;
- secret scan.

Required frontend validation remains:

- clean install;
- typecheck;
- repository lint;
- complete test suite;
- autosave suite;
- production build;
- final-gate focused tests;
- Playwright discovery;
- secret scan.

Required PostgreSQL validation remains:

- fresh loopback-only PostgreSQL 16;
- exactly 108 successful unique migrations;
- deterministic fixture and six verified sessions;
- reset/reseed isolation preserving migration history;
- zero provider and prohibited financial behavior.

Required browser validation remains:

- exactly 30 physical executions;
- B01–B12 distribution defined in the preceding prompt;
- declared 390/767/768/1440 viewport coverage;
- retries = 0;
- 30 passed;
- zero failed/skipped/timed-out/retried/flaky;
- zero critical Axe, console, page, API, non-loopback, provider, unauthorized-financial, unclassified-write and contamination findings.

Do not rerun a failed browser execution to convert it into acceptance.

## Phase L3 — evidence publication

Publish only if:

- Phase L1 proves exact lint-baseline equivalence;
- semantic lint passes;
- all other repository and PostgreSQL gates pass;
- the browser matrix passes 30/30 with all zero-audit requirements.

Authority branch:

`reconcile/mvp-canonical-application-v1-final-validation-authority`

Evidence path:

`docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_FINAL_WHOLE_APPLICATION_VALIDATION_EVIDENCE_V1.md`

Evidence commit requirements:

- sole parent: the immutable commit containing this disposition prompt;
- exactly one evidence file;
- no implementation/support ref update;
- independent fetch-back exact.

In addition to the preceding prompt's evidence requirements, include:

- both package.json blobs;
- ESLint config and helper identities;
- application/support lint-covered tree equivalence;
- both `lint:eslint` results;
- both Prettier-inclusive lint counts/path sets/rule distributions;
- both normalized diagnostic-manifest SHA-256 values;
- explicit statement:
  `PRETTIER_FORMATTING_DEBT = PRE_EXISTING_IDENTICAL_NON_BLOCKING`;
- explicit statement:
  `NEW_BACKEND_LINT_ERRORS = ZERO`.

Retain no full diagnostic report containing absolute host paths. Sanitize to repository-relative paths.

## Circuit breakers

Stop without publication if:

- immutable mismatch;
- application/support lint-covered blobs differ;
- semantic lint fails on either checkpoint;
- Prettier-inclusive diagnostic manifests are not identical;
- any diagnostic is non-Prettier;
- the support checkpoint adds a diagnostic;
- any source, test, config, schema, migration, lockfile or support file is mutated;
- any remaining repository/PostgreSQL/browser gate fails;
- any browser execution is skipped, timed out, retried, flaky or fails;
- secrets cannot be removed;
- evidence push/fetch-back mismatches.

## Explicit exclusions

Do not:

- format or edit the 707 reported locations;
- use ESLint or Prettier fix/write mode;
- change application or support commits;
- change lint scripts, ESLint config or dependencies;
- change Product, architecture, schema, migrations, provider or financial behavior;
- publish the final canonical checkpoint;
- deploy, tag, merge or open a PR;
- resume Campaign Intelligence or paused campaign-intelligence workstreams.

## Required result

Begin with exactly one:

- `CANONICAL_RECONCILIATION_BACKEND_LINT_DISPOSITION_AND_FINAL_VALIDATION_RESULT = READY_FOR_PARENT_REVIEW`
- `CANONICAL_RECONCILIATION_BACKEND_LINT_DISPOSITION_AND_FINAL_VALIDATION_RESULT = CIRCUIT_BREAKER`

Include:

- prompt and immutable integrity;
- exact lint-covered tree/config/lockfile equivalence;
- semantic lint results;
- Prettier-inclusive baseline counts and normalized manifest hashes;
- remaining repository validation;
- PostgreSQL/migration/fixture/session proof;
- 30-execution totals and B01–B12 per-viewport results;
- zero-audit totals;
- authority evidence commit/tree/blob/fetch-back;
- cleanup;
- blockers;
- `NEXT_BOUNDARY`.

Do not include time or completion telemetry unless the Parent explicitly asks for it.
