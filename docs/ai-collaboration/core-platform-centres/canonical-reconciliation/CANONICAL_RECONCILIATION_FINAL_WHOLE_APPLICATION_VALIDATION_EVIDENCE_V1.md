# Canonical Reconciliation Final Whole-Application Validation Evidence V1

## Disposition

`READY_FOR_PARENT_REVIEW`

This publication records validation evidence only. It does not grant final Parent acceptance, publish a canonical checkpoint, resume Campaign Intelligence, or authorize a merge, tag, PR, deployment, freeze update, or development-branch update.

## Controlling immutable inputs

| Input | Immutable identity |
| --- | --- |
| Controlling authority commit | `559f2ba7315c86f3577a337fc8ab92e227bf9eef` |
| Controlling authority tree | `5d7534fa3aa8b732cd8b35dab142464b5b3ae8c9` |
| Controlling prompt blob | `84b0ed80b320d75d1606d74fba5a15624f776eaf` |
| Sole authority parent | `4705a756f30eddee7ef89f4efb55ce57bcb6df3a` |
| Accepted backend application | `1a99cf3f54df849408c8775b20e78c036ee637c3` |
| Accepted frontend application | `edc6ff991a43ce3a93d2bd242d148a6fcbd104dc` |
| Backend V2 support parent/tree | `d7f98cc51d9660f227ae367506d103026aad6439` / `a9e526d47f53442836def82ae6db9031d3d4cdab` |
| Frontend V2 support parent/tree | `ca3fd0984f89acd5532a44d707d4aafa173c49dc` / `b266070734ece18e0f04b845e9b70409e3828698` |
| Prisma schema blob | `1d9b3a8bf3145d47d326fae88493f7816eef9140` |
| Migration inventory | 108 directories; subtree `ae9c3e8036461260ad6f0963dffb7d5d9d010139` |

Every controlling commit, tree, path, blob, and parent was recovered directly and matched. The three V3 publication branches were absent remotely before publication. Accepted worktrees were clean, and the intentionally broken historical worktree was not repaired, reset, cleaned, or used.

## Retained-candidate continuity

The retained backend candidate was recovered without reconstructing or changing its accepted B11 material: `seed.ts` remained blob `fc84f03451cc9ef44511ab0c0fce7f15881ea3a0`, `final-gate.fixture.test.ts` remained blob `18ee3d89762f9fd16b51ee94e54ec3e559c49548`, and the retained two-file patch SHA-256 was `b1c4edceccea4aa301d925549c11a418e87edad6e8fb4f02584655f92b3e24cd`. The retained frontend B02 candidate began at blob `d575cbcf10740625fdc4e50319bec8f870178be1` with patch SHA-256 `65d7067da7af5d07a340a8df35a6cecf2ca37d13c0f2791c482881654f4bd587`. Both B02 and B11 semantics remained present after the V3 corrections.

## Published V3 validation-support identities

### Backend

- Branch: `validate/mvp-canonical-final-gate-fixtures-v3`
- Commit: `9b48025a1aacfe00a8ea0451ca250f6a1bd853e9`
- Sole parent: `d7f98cc51d9660f227ae367506d103026aad6439`
- Tree: `e0fd68d9b3955b31b8ef4ce317d4cb8c2c0b11d9`
- Parent-relative patch SHA-256: `6aa92aa93f08bcb8638949cabc9bb698688c7478068ca9ee5e7b89b951abb44d`
- Independent fetch-back: exact commit, parent, and tree matched.

| Path | Status | Blob |
| --- | --- | --- |
| `scripts/canonical-reconciliation/final-gate/audit.ts` | modified | `ce8fd706373adfada530871bc34f758259bb3e60` |
| `scripts/canonical-reconciliation/final-gate/final-gate.fixture.test.ts` | modified, retained identity | `18ee3d89762f9fd16b51ee94e54ec3e559c49548` |
| `scripts/canonical-reconciliation/final-gate/seed.ts` | modified, retained identity | `fc84f03451cc9ef44511ab0c0fce7f15881ea3a0` |
| `scripts/canonical-reconciliation/final-gate/runtime-boundary.cjs` | added | `cb0d786cfa10233dd4d54342acc68467da5f391c` |
| `scripts/canonical-reconciliation/final-gate/runtime-boundary.fixture.test.ts` | added | `5ae8a25cdad9b48c91b40d8cff4127582da398bf` |

Application-source diff: zero. Lockfile diff: zero. Schema blob, migration count, and migration subtree remain exactly protected.

### Frontend

- Branch: `validate/mvp-canonical-final-gate-browser-v3`
- Commit: `9685d1ef0b3c3eaa9f68ea7d60eb29e92a2a0fca`
- Sole parent: `ca3fd0984f89acd5532a44d707d4aafa173c49dc`
- Tree: `adbfb1771033556b8e13bf760bb73ca594615b8d`
- Parent-relative patch SHA-256: `d269adab24ddc13759bfaf11ff57040a1fcb26b4feecb1300807120aa2ea5ae9`
- Sole changed path: `e2e/canonical-reconciliation/final-gate/final-gate.spec.ts`
- Final path blob: `b828e29fe18c949b1eb5b8f5ab09b1ff885e4d6b`
- Independent fetch-back: exact commit, parent, and tree matched.

Application-source diff: zero. Lockfile diff: zero.

## Validation-only corrections and risk audit

All B01-B12 locators were audited for hidden shell matches, ambiguity, broad alternation, and DOM-order dependence. After correction, all required proofs are route-scoped and semantic; no `.first()` or `.last()` remains. The B08 submitted state uses its exact visible status, and the collaboration proof uses exact fixture context. B09, B10, and B12 alternations were normalized without weakening their accepted meaning. B06 uses the exact `Campaign Asset → Brief` heading and nearest owning section to locate the canonical setup action.

Two bounded recovery iterations were used:

1. `PROVEN_HARNESS_DEFECT` — B08 selector class. The initial broad/order-dependent selector and then the ambiguous submitted/collaboration proofs were replaced as a complete class. Fresh B08 execution passed at all four viewports.
2. `PROVEN_HARNESS_DEFECT` — B06 selector topology. The initial tabpanel scope did not own the canonical setup action; the locator was corrected to the exact headed section. Fresh B06 execution passed at both declared viewports.

The later intelligence-contract command failure was a pre-assertion invocation issue, not a semantic recovery iteration: the repository command requires explicit immutable `--source` and `--commit` inputs. It passed when rerun against the clean authority checkout at `bbb0be3345c36e9cc7c4f06ca68fb491b742b83f`.

## Notification and network isolation

The final-gate-only preload activates only when `CANONICAL_FINAL_GATE_DISPOSABLE_RUN=true`. It substitutes a deterministic in-process Postmark client boundary, emits sanitized artifacts containing only recipient hashes and classification/invocation metadata, and returns synthetic message identifiers. Unrelated imports are delegated unchanged. The same preload blocks and audits non-loopback HTTP, HTTPS, fetch/undici, TCP, TLS, and DNS attempts while permitting the explicitly used loopback application and PostgreSQL endpoints. Production source and normal repository behavior are unchanged.

Focused isolation tests: 9/9 passed, including three runtime-boundary tests and six fixture/hash-audit tests.

| B08 run set | Internal notification rows | Internal recipients/deliveries | Validation adapter invocations | Non-loopback provider attempts | Non-loopback network attempts |
| --- | ---: | ---: | ---: | ---: | ---: |
| Focused, four viewports | 8 | 20 | 8 | 0 | 0 |
| Final matrix, four B08 executions | 8 | 20 | 8 | 0 | 0 |

Notification persistence was classified as accepted internal application activity, not provider egress. No recipient address, credential, message body, token, cookie, or session is retained in the published evidence.

## PostgreSQL and focused runtime evidence

A fresh loopback-only PostgreSQL 16 database was used for each required phase; the shared `creator-shop-acceptance-postgres` container was neither reused nor modified. All 108 migrations applied in order. Seed, validate, reset/reseed, six synthetic-session setup, scenario audit, and contamination checks passed. The disposable databases and containers were destroyed after use.

Focused B08 passed 4/4 at 390, 767, 768, and 1440 pixels. It proved Creator submission, the exact `PENDING` state, Brand approval with accepted idempotency, exactly one linked collaboration, exact Creator collaboration state, no recovery shell, zero critical Axe violations, zero unexpected console/page/API errors, zero browser or backend non-loopback attempts, expected internal notification accounting, zero prohibited financial writes, and zero contamination.

Fresh focused B06 passed 2/2 at 390 and 1440 pixels. Each execution created exactly one canonical Offering-linked CampaignAsset and one Brief, with no prohibited writes or egress.

## Complete final matrix

The corrected final matrix restarted from B01 on a new database. One worker and zero retries were used.

| Scenario | Viewports | Result |
| --- | --- | --- |
| B01 public projections | 390, 1440 | 2/2 passed |
| B02 verified-Brand route proofs | 390, 1440 | 2/2 passed |
| B03 Brand preview | 390, 767, 768, 1440 | 4/4 passed |
| B04 unsupported gatekeeper | 390, 1440 | 2/2 passed |
| B05 objective autosave/hydration | 390, 767, 768, 1440 | 4/4 passed |
| B06 Offering → CampaignAsset → Brief | 390, 1440 | 2/2 passed |
| B07 fail-closed Reporting | 390, 1440 | 2/2 passed |
| B08 C03 → C04 handoff | 390, 767, 768, 1440 | 4/4 passed |
| B09 Brand/finance payout boundaries | 390, 1440 | 2/2 passed |
| B10 campaign-manager payout boundary | 390, 1440 | 2/2 passed |
| B11 Creator Home/Centre/Settings/Payouts | 390, 1440 | 2/2 passed |
| B12 Creator roles and Instagram states | 390, 1440 | 2/2 passed |

Aggregate: 30/30 passed; 0 skipped, failed, timed out, flaky, or retried. There were zero critical Axe violations, unexpected console errors, page errors, unhandled API failures, browser non-loopback requests, backend non-loopback attempts, actual provider attempts, unauthorized financial writes, unclassified database writes, or cross-scenario contamination. Thirty sanitized assertion artifacts were produced. Reset and audit checks passed between scenarios. Migration history remained at 108.

## Repository validation

Backend: Prisma generation and validation passed; semantic lint passed; production build passed; the full suite passed 7,326 tests in 326 files with 955 infrastructure-gated tests skipped in 94 files; campaign readiness passed 31/31; intelligence bundles verified against the pinned clean authority checkout; final-gate fixture/hash-audit/mail-isolation tests passed 9/9. Historical inclusive Prettier/line-ending diagnostics were not used to edit production files.

Frontend: typecheck passed; repository lint completed with zero errors and eight unchanged warnings; the full suite passed 1,421 tests in 178 files with one test/file skipped; campaign autosave passed 8/8; production build passed; final-gate manifest/contract tests passed 5/5; Playwright discovery remained exactly 12 scenarios and 30 executions.

## Sanitized artifacts, secret scan, and cleanup

After removing generated sessions, token-bearing manifests, and artifacts containing email-address text, 88 sanitized files remained. Their deterministic manifest is the LF-joined, ordinally path-sorted list of `<lowercase SHA-256><two spaces><slash-normalized relative path>` rows with no trailing LF; its SHA-256 is `2d238f4528700d23fef4a2676ade433c582a8d03a7919d8dca8fa5901da7f503`.

Secret-pattern scans of all changed support files and the retained sanitized final-matrix artifacts found zero matching files. Temporary environment files, six-role session files, session manifests, traces, and videos were removed. Run-created loopback processes, ports, databases, and containers were stopped/removed. Only the pre-existing `creator-shop-acceptance-postgres` container remained, unchanged. Backend and frontend publication worktrees were clean after commit.

## Explicit exclusions and next boundary

No production application source, Prisma schema, migration, lockfile, authorization policy, provider behavior, financial behavior, or accepted module semantics changed. No real provider credential or shared database was used. No PR, merge, rebase, tag, deployment, development update, freeze update, final canonical checkpoint, Applicant AI Match work, Campaign Performance/Reporting work, or Campaign Intelligence work occurred.

The next boundary is Parent review of this immutable final whole-application validation evidence. Parent acceptance and any later checkpoint publication require separate explicit authority.
