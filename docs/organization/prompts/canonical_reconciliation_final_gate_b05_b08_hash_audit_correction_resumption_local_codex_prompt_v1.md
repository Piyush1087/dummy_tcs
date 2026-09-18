# Canonical Reconciliation Final Gate — B05/B08 Hash-Audit Correction and Publication Resumption V1

## Authority

This is a narrowly bounded Parent authorization to:

1. preserve and verify the existing, uncommitted four-path B05/B08 frontend application-correction candidate;
2. correct the retained V2 validation audit so that it reflects the already accepted campaign-definition-hash lifecycle;
3. rerun the targeted B05 and B08 proofs;
4. if every gate passes, publish the B05/B08 frontend correction and immutable authority evidence.

This is not authorization to change Product, architecture, backend runtime, schema, migrations, authorization policy, provider behavior, financial behavior, Campaign Intelligence, deployment, or the final whole-application acceptance verdict.

The immutable prompt authority is the commit resolving this exact file on:

`authority/canonical-reconciliation-final-gate-b05-b08-hash-audit-resumption-v1`

Verify the commit, tree, path and blob before any mutation.

## Controlling immutable checkpoints

### Original B05/B08 correction authority

- Commit: `37852f0e1a58ef166a0ddb1f95bcda8b79327f3f`
- Prompt blob: `22cf6a0cc5c87337e123d0fac13a8fab58bd8c4e`

### Application bases

Frontend corrected base:

- Commit: `cb1a83465272d6b0d75fc88c11d8acb89a5e91b0`
- Tree: `876ec5308695a3755001783219bca85b321e6e99`

Backend accepted base:

- Commit: `1a99cf3f54df849408c8775b20e78c036ee637c3`
- Tree: `9679ed60f186220716e948779d3d70dbbf89b39a`

Validation-support checkpoints:

- Backend V1 support: `99df138ef5602709cfd9850e5630606b7889f237`
- Backend V1 tree: `77754f4db336cf9023765ffeeeb2b440aa45bc18`
- Frontend V1 support: `8f600d955b27f55d011adbc5513888b763674509`
- Frontend V1 tree: `4fd70320cd3beb74ca708123093ba7e73863f9b6`

Protected application objects:

- Prisma schema blob: `1d9b3a8bf3145d47d326fae88493f7816eef9140`
- Migration count: `108`
- Migration subtree: `ae9c3e8036461260ad6f0963dffb7d5d9d010139`
- Migration 108 blob: `b900744912001e004523d471570f48f6f54c050b`
- Accepted campaign-create service blob: `d72d371f627f56ee1d9e5998879afded31a08820`
- Accepted campaign-create service test blob: `f2cc46bd149fd42d99c5db93e46e9de508db1bda`

## Parent disposition of the circuit breaker

The previous circuit breaker is classified as:

`VALIDATION_HARNESS_EXPECTATION_DEFECT`

It is not an application regression.

The accepted lifecycle is:

- a DRAFT campaign created or modified through canonical autosave has `canonicalDefinitionHash = null`;
- autosave deliberately invalidates any prior definition hash by setting it to `null`;
- the canonical definition hash is computed and persisted only during publication;
- a PUBLISHED canonical campaign must contain a valid canonical hash and must match recomputation over its canonical definition.

The validation audit must not require a canonical definition hash on an unpublished DRAFT.

This disposition does not weaken publication integrity. It instead requires state-aware assertions:

| Campaign state | Required hash assertion |
| --- | --- |
| New or edited DRAFT | `canonicalDefinitionHash IS NULL` |
| PUBLISHED canonical campaign | non-null `sha256:<64 lowercase hex>` and equal to canonical recomputation |
| Malformed or mismatched published hash | fail closed |

Do not change production behavior merely to satisfy the old audit.

## Accepted application-correction findings

The previous run established the following and these findings may be relied upon only after exact candidate-continuity verification:

### B05

Root cause:

React Strict Mode's development cleanup probe permanently disposed controller instances retained in refs, so later schedules emitted no field PATCH.

Accepted correction intent:

- defer disposal through the Strict Mode probe;
- fence callbacks by lifecycle generation;
- preserve live controllers during the probe;
- dispose after actual unmount;
- preserve debounced latest-value behavior;
- avoid duplicate blur writes;
- preserve immediate objective PATCH behavior.

### B08

Root cause:

Approval and rejection omitted the backend-required `Idempotency-Key`.

Accepted correction intent:

- generate one UUID for each logical terminal-command invocation;
- send it in `Idempotency-Key`;
- preserve method, URL, body and authenticated-fetch behavior;
- do not reuse the key across distinct approve/reject invocations;
- preserve exactly-once collaboration provisioning.

## Mandatory Phase 0: immutable integrity and candidate continuity

Before editing anything:

1. Fetch through direct repository URLs or isolated verification refs. Do not use a mirror-style refspec that can move checked-out local refs.
2. Verify every controlling commit/tree/blob above.
3. Verify the current prompt's commit/tree/path/blob.
4. Verify the accepted frontend and backend bases remain exact.
5. Verify the schema, all 108 migrations and the migration subtree remain exact.
6. Inspect the retained B05/B08 frontend candidate.

The retained application candidate must have exactly four authorized changed paths:

- `src/features/uce/components/CreateCampaignWizard.tsx`;
- one new focused B05 lifecycle test;
- `src/features/uce/api/brand-uce-client.ts`;
- the existing focused campaign-page/client test changed for B08.

Discover and report the two exact test paths. Record:

- exact path list;
- staged and unstaged state;
- per-file Git blob IDs;
- a deterministic manifest SHA-256;
- a binary-safe patch SHA-256;
- current HEAD, index and worktree identities.

No fifth application path is allowed.

Run the already-defined focused B05 and B08 tests before touching the harness. If candidate continuity or focused behavior differs from the preceding result, stop without reconstructing, normalizing or publishing it.

## Authorized validation-only correction

After Phase 0 passes, modify only the minimum retained V2 validation-support file or files necessary to make the audit state-aware.

Expected location is under:

`scripts/canonical-reconciliation/final-gate/`

The allowlist is limited to:

- the exact audit/assertion implementation that currently requires hashes on all four new drafts;
- one focused validation-support test if needed to prove the corrected rule.

No application `src` file, Prisma schema, migration, lockfile, provider code or financial code may be changed by this validation correction.

The corrected audit must prove all of the following:

1. each newly created or autosaved B05 DRAFT has `canonicalDefinitionHash = null`;
2. DRAFT persistence, hydration, reload and subsequent edit remain correct;
3. a published canonical campaign has a non-null correctly formatted hash;
4. the published hash equals recomputation using the accepted canonical-definition hashing implementation;
5. a null, malformed or mismatched hash on a PUBLISHED campaign causes the audit to fail;
6. no legacy endpoint or legacy Product write is introduced;
7. no reporting, payout, provider or financial boundary is weakened.

Do not duplicate or reinterpret the hash algorithm. Import or call the accepted canonical-definition/hash implementation where feasible. If the harness cannot safely reuse it, stop and report the exact technical constraint.

## Validation sequence

Use fresh disposable, loopback-only infrastructure. Preserve the pre-existing acceptance database/container.

### Validation-support checks

Run:

- backend final-gate focused tests;
- the new state-aware hash-audit focused tests;
- Prisma generate and validate;
- validation-support typecheck/lint where defined;
- a secret-pattern scan over the validation-only diff.

### B05 targeted proof

Run the targeted browser/database proof across all four accepted objectives.

Require:

- draft creation succeeds;
- objective and campaign-name edits emit the expected canonical field PATCHes;
- autosave settles;
- hydration and reload preserve values;
- a subsequent edit persists;
- all four DRAFT rows retain `canonicalDefinitionHash = null`;
- no blocked/non-loopback request;
- no critical Axe violation;
- no console error, page error or unhandled API failure;
- no provider call;
- no unauthorized financial write;
- the corrected database audit passes.

### B08 targeted proof

Run the representative 1440px C03-to-C04 terminal-action proof.

Require:

- approval has a non-empty UUID `Idempotency-Key`;
- rejection has a distinct non-empty UUID `Idempotency-Key`;
- replay behavior is safe;
- one accepted application produces exactly one linked collaboration;
- terminal events and linkage remain canonical;
- no provider call;
- no unauthorized financial write;
- no critical Axe violation or unexpected browser/API error.

### Frontend correction validation

After proving that the four-path application diff remains unchanged, run:

- focused B05 lifecycle tests;
- focused B08 client tests;
- Creator actor-contract tests;
- complete frontend test suite;
- typecheck;
- lint;
- production build;
- secret-pattern scan;
- exact four-path diff allowlist.

No full 12-scenario representative rerun and no 30-execution final matrix are authorized in this turn.

## Publication authorization

Publication is authorized only if every gate above passes with no skip, unexplained warning, mismatch or contamination.

### Frontend application correction

Branch:

`correction/mvp-canonical-final-gate-b05-b08-frontend-v1`

Requirements:

- sole parent: `cb1a83465272d6b0d75fc88c11d8acb89a5e91b0`;
- exactly the four authorized application/test paths;
- no validation-support file in this application commit;
- repository-scoped Git identity only;
- fail fast if commit creation fails;
- push by direct URL or isolated ref mechanism that cannot move another local branch;
- fetch back independently and verify commit, tree, sole parent, path set and blobs.

If the remote branch already exists, it must point to the unchanged base or an exact byte-identical candidate. Otherwise stop for Parent disposition. Do not force push or delete it.

### Validation-support candidate

Do not publish V2 support branches in this turn.

Preserve the corrected validation-only candidate locally, record its exact path set, blob manifest and patch hash, and leave it ready for the subsequent V2 representative-matrix resumption.

### Authority evidence

Branch:

`reconcile/mvp-canonical-application-v1-final-gate-b05-b08-correction-authority`

Evidence path:

`docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_FINAL_GATE_B05_B08_APPLICATION_CORRECTION_EVIDENCE_V1.md`

The evidence commit must have the immutable commit containing this prompt as its sole parent and change only the evidence file.

It must record:

- both authority commits;
- all immutable checkpoint identities;
- Phase 0 candidate fingerprints;
- exact application path/blob inventory;
- exact validation-only audit path/blob inventory and patch hash;
- the state-aware hash disposition;
- B05 and B08 root causes and corrections;
- all focused, browser, database and full-suite results;
- application correction commit/tree/parent;
- independent fetch-back results;
- explicit statement that V2 support and final acceptance remain unclaimed.

Fetch back the authority evidence through an isolated ref and verify commit/tree/blob/path scope.

## Circuit breakers

Stop immediately without publication if any of these occurs:

- immutable authority, commit, tree, blob or migration mismatch;
- retained four-path application candidate differs or is missing;
- any application path outside the four-path allowlist;
- any production change made for the hash-audit correction;
- any DRAFT receives a definition hash before publication;
- any PUBLISHED canonical campaign lacks or fails recomputation of its hash;
- any test, typecheck, lint or build failure;
- any targeted browser or database assertion failure;
- provider call, unauthorized financial write or non-loopback request;
- secret-bearing artifact cannot be removed;
- publication/fetch-back mismatch;
- unsafe local-ref movement;
- insufficient disk capacity or unhealthy disposable infrastructure.

On a circuit breaker, preserve recoverable authorized candidates, clean secret-bearing/generated artifacts, remove disposable infrastructure, leave accepted bases untouched, and report the precise next Parent boundary.

## Explicit exclusions

Do not:

- change backend application runtime;
- change Product or architecture;
- change schema or migrations;
- change accepted hash lifecycle;
- change authorization, provider or financial behavior;
- enter Campaign Performance, Applicant AI Match or marketplace recommendation work;
- resume Campaign Intelligence;
- run the final 30-execution matrix;
- claim final whole-application acceptance;
- deploy, tag, open a PR or merge into development/freeze.

## Required result schema

Return a concise structured result beginning with exactly one of:

- `FINAL_GATE_B05_B08_HASH_AUDIT_RESUMPTION_RESULT = READY_FOR_PARENT_REVIEW`
- `FINAL_GATE_B05_B08_HASH_AUDIT_RESUMPTION_RESULT = CIRCUIT_BREAKER`

Include:

- prompt and checkpoint integrity;
- retained application candidate continuity and fingerprints;
- corrected audit paths/blobs/fingerprint;
- DRAFT and PUBLISHED hash assertions;
- B05 and B08 targeted results;
- focused/full validation results;
- frontend correction branch/commit/parent/tree/fetch-back;
- authority branch/evidence commit/tree/blob/fetch-back;
- validation-support candidate preservation;
- cleanup and remaining blocker;
- `NEXT_BOUNDARY`.

Do not include time or completion telemetry unless the Parent explicitly asks for it.
