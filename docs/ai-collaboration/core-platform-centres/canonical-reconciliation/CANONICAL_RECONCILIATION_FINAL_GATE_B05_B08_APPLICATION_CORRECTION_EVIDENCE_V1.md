# Canonical Reconciliation Final Gate B05/B08 Application Correction Evidence V1

## Result

`READY_FOR_PARENT_REVIEW`

This publication records the bounded B05/B08 correction and validation run. It does not claim V2 validation-support publication, the final representative matrix, the final 30-execution matrix, final whole-application acceptance, deployment, merge, or any Campaign Intelligence authorization.

## Immutable authority and checkpoints

| Object | Verified identity |
| --- | --- |
| Hash-audit resumption prompt commit | `4c92e3d04afcffed96f80f21d3befed161fdf02b` |
| Prompt tree / sole parent | `3e2b1d5a2303eba8de4f9e6034e8f57133fb4690` / `37852f0e1a58ef166a0ddb1f95bcda8b79327f3f` |
| Prompt path / blob | `docs/organization/prompts/canonical_reconciliation_final_gate_b05_b08_hash_audit_correction_resumption_local_codex_prompt_v1.md` / `e5220c22b1d34fbc109ea90f85165583148a110f` |
| Original correction authority / prompt blob | `37852f0e1a58ef166a0ddb1f95bcda8b79327f3f` / `22cf6a0cc5c87337e123d0fac13a8fab58bd8c4e` |
| Frontend accepted base / tree | `cb1a83465272d6b0d75fc88c11d8acb89a5e91b0` / `876ec5308695a3755001783219bca85b321e6e99` |
| Backend accepted base / tree | `1a99cf3f54df849408c8775b20e78c036ee637c3` / `9679ed60f186220716e948779d3d70dbbf89b39a` |
| Backend V1 support / tree | `99df138ef5602709cfd9850e5630606b7889f237` / `77754f4db336cf9023765ffeeeb2b440aa45bc18` |
| Frontend V1 support / tree | `8f600d955b27f55d011adbc5513888b763674509` / `4fd70320cd3beb74ca708123093ba7e73863f9b6` |
| Prisma schema blob | `1d9b3a8bf3145d47d326fae88493f7816eef9140` |
| Migration count / subtree | `108` / `ae9c3e8036461260ad6f0963dffb7d5d9d010139` |
| Migration 108 blob | `b900744912001e004523d471570f48f6f54c050b` |
| Campaign-create service / test blobs | `d72d371f627f56ee1d9e5998879afded31a08820` / `f2cc46bd149fd42d99c5db93e46e9de508db1bda` |

Every listed commit, tree, path, blob, and migration checkpoint resolved exactly before mutation.

## Phase 0 retained frontend candidate continuity

The retained worktree was on `cb1a83465272d6b0d75fc88c11d8acb89a5e91b0`, on branch `correction/mvp-canonical-final-gate-b05-b08-frontend-v1`. The index contained no staged changes. Three paths were unstaged modifications and one focused lifecycle test was untracked. No fifth application path existed.

| State | Path | Git blob |
| --- | --- | --- |
| unstaged modified | `src/features/uce/api/brand-uce-client.campaign-page.test.ts` | `47e76ab64d60182005fcd6cb97deff88dd266325` |
| unstaged modified | `src/features/uce/api/brand-uce-client.ts` | `836ebf504579206f6e03420b6dcb93e261c6c3a0` |
| untracked | `src/features/uce/components/CreateCampaignWizard.autosave-lifecycle.test.tsx` | `48099ed03a6920bbd32c3673070242c646090850` |
| unstaged modified | `src/features/uce/components/CreateCampaignWizard.tsx` | `863eebfef7d78352fc094f271b84977902ab6982` |

- Deterministic manifest SHA-256: `aa75c3bc2d05c502bdf6e8b7a0e45e249f6552ab3223bb200f7dad78023609c2`.
- Binary-safe retained-candidate patch SHA-256: `c4c9cd246ec163875b0d4c30d64396489170403b1d52596a465baaeb656bf62d` (`8130` bytes).
- Index SHA-256: `f8eb1893d80d7afe4e62da9ee8cdd4f432bbd3fc15df8d12fe47b4e2e34e961a`.
- Pre-harness focused continuity result: four files and 42 tests passed. The two discovered correction tests were `CreateCampaignWizard.autosave-lifecycle.test.tsx` and `brand-uce-client.campaign-page.test.ts`.

The same four blob IDs were rechecked after browser and full-suite validation and became the four published tree entries without normalization or reconstruction.

## Validation-only state-aware audit correction

The Parent-classified defect was `VALIDATION_HARNESS_EXPECTATION_DEFECT`. Production behavior was not changed. The corrected audit imports the accepted `hashCanonicalCampaignDefinition` implementation and now:

- requires the four newly inserted B05 campaigns to remain `DRAFT` with `canonicalDefinitionHash = null`;
- validates a `PUBLISHED` canonical definition as lowercase `sha256:<64 hex>` and equality with canonical recomputation;
- fails closed for a null, malformed, or mismatched published hash;
- preserves the existing protected-table delta checks and provider/financial zero-write checks.

The two correction-touched validation files are:

| Path | Preserved local blob |
| --- | --- |
| `scripts/canonical-reconciliation/final-gate/audit.ts` | `e50bd7dff01ff4098277dea64c49ad9edef228bc` |
| `scripts/canonical-reconciliation/final-gate/final-gate.fixture.test.ts` | `032a285bddeaa67683c6706d1eff868167464ec1` |

Their binary-safe patch SHA-256 against Backend V1 support is `41a3a7e6be1055aa7d061dabe93601746baa4e506fb8843991def15aaddd928a`.

The complete retained, unpublished V2 backend support candidate remains exactly five modified paths on `99df138ef5602709cfd9850e5630606b7889f237`:

| Path | Preserved local blob |
| --- | --- |
| `scripts/canonical-reconciliation/final-gate/audit.ts` | `e50bd7dff01ff4098277dea64c49ad9edef228bc` |
| `scripts/canonical-reconciliation/final-gate/contracts.ts` | `8d5cb6d742fcd7f75baaedee1c1d254327345792` |
| `scripts/canonical-reconciliation/final-gate/final-gate.fixture.test.ts` | `032a285bddeaa67683c6706d1eff868167464ec1` |
| `scripts/canonical-reconciliation/final-gate/seed.ts` | `0e778739ec2c338df9b7eeeb417542178df6bc82` |
| `scripts/canonical-reconciliation/final-gate/validate.ts` | `385a40e73bde19ded3761e3b112aeedf9ca122f6` |

Complete retained V2 candidate binary-safe patch SHA-256: `3120dc4a6d1b8d772c1746072594cab3035de01d600f2478109f0d172856baf5`. It was not committed or pushed.

## Root causes and application corrections

- B05 root cause: the React Strict Mode development cleanup probe permanently disposed controller instances retained in refs. The correction defers disposal through the probe, fences callbacks by lifecycle generation, retains live controllers during the probe, and disposes after actual unmount while preserving debounced latest-value, blur deduplication, and immediate objective PATCH behavior.
- B08 root cause: approval and rejection omitted the backend-required `Idempotency-Key`. Each logical terminal-command invocation now creates one UUID and sends it in `Idempotency-Key`; approve and reject invocations receive distinct keys while method, URL, body, and authenticated-fetch behavior remain unchanged.

## Validation evidence

### Validation support and migration

- Backend final-gate fixture: one file, five tests passed, covering four null-hash drafts plus valid, null, malformed, and mismatched published hashes.
- Validation-support ESLint: zero errors and zero warnings on the two correction files; `git diff --check` passed.
- Prisma generate passed; Prisma validate passed with the disposable loopback URL.
- Secret-pattern scans over validation and frontend diffs returned no findings.
- Fresh PostgreSQL 16 applied all 108 migrations in order. Schema, migration subtree, and protected application blobs remained unchanged.

### B05 representative browser/database proof

- `B05 REPRESENTATIVE [768]` passed.
- All four objectives (`AWARENESS`, `TRUST`, `ASSETS`, `ACTION`) created independent drafts.
- Campaign-name and objective PATCHes were observed; autosave settled; reload preserved both fields; a subsequent edit persisted.
- Audit observed exactly four inserted `DRAFT` rows and all four had `canonicalDefinitionHash = null`.
- No blocked/non-loopback request, critical Axe violation, console error, page error, unhandled API failure, provider call, reporting write, payout write, or unauthorized financial write occurred.

### B08 representative browser/database proof

- `B08 REPRESENTATIVE [1440]` passed.
- One submitted application reached `APPROVED`, `statusVersion = 2`, with two terminal events and exactly one linked Collaboration.
- The focused client test proved approval key `11111111-1111-4111-8111-111111111111` and rejection key `22222222-2222-4222-8222-222222222222`, proving non-empty valid UUIDs and distinct invocation keys.
- PostgreSQL approval replay returned the stable committed result and retained exactly one Collaboration, event, notification job/snapshot, and command receipt.
- PostgreSQL rejection replay reused its recipient snapshot and emitted realtime materialization once.
- No provider call, payout write, unauthorized financial write, blocked/non-loopback request, critical Axe violation, or unexpected browser/API error occurred.

### Frontend correction gates

- Focused correction, autosave/readiness, and Creator actor-contract validation: five files, 49 tests passed.
- Complete frontend suite: 178 files passed and 1 pre-existing conditional A3 harness file remained skipped; 1421 tests passed and its single pre-existing conditional test remained skipped. No required B05/B08 gate was skipped.
- Typecheck passed.
- Lint passed with zero errors and the same eight pre-existing warnings outside the correction paths.
- Production build passed; the existing bundle-size advisory remained unchanged.
- Exact four-path allowlist and `git diff --check` passed.

## Published frontend correction

| Field | Verified result |
| --- | --- |
| Branch | `correction/mvp-canonical-final-gate-b05-b08-frontend-v1` |
| Commit | `edc6ff991a43ce3a93d2bd242d148a6fcbd104dc` |
| Tree | `8b8a9c515afb04a69a962e4d786d7f398854ea9c` |
| Sole parent | `cb1a83465272d6b0d75fc88c11d8acb89a5e91b0` |
| Path scope | exactly the four Phase 0 paths above |

The remote branch was absent before publication. Publication used the direct repository URL with no force operation. An independent fetch into `refs/codex/verify/b05-b08-frontend-v1` reproduced the commit, tree, sole parent, four-path status, and all four blob IDs exactly.

## Cleanup and boundary

The loopback backend and frontend processes were stopped. The uniquely named disposable PostgreSQL container and both disposable databases were removed. Browser storage-state files and generated Playwright traces/results were deleted; sanitized audit, Axe, and assertion artifacts were retained. The pre-existing acceptance container/database was not touched.

`V2_SUPPORT_PUBLICATION = UNCLAIMED`

`FINAL_WHOLE_APPLICATION_ACCEPTANCE = UNCLAIMED`

`NEXT_BOUNDARY = PARENT_REVIEW_OF_B05_B08_APPLICATION_CORRECTION_EVIDENCE_AND_SEPARATE_AUTHORIZATION_FOR_V2_REPRESENTATIVE_MATRIX_RESUMPTION`
