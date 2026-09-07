# C06_FINITE_EXECUTION_PLAN_V1

## Execution mode

`AUTONOMOUS_RUN_WITH_GATES` through P0–P7. Ordinary implementation/test corrections require no Parent approval. Each phase ends with validation, a checkpoint commit, ledger update, clean worktree, push, and fetch-back. Maximum two bounded correction cycles per phase; repeat failure or boundary change is a hard stop.

## P0 — Exact base convergence

- Create backend/frontend execution branches from the pinned Creator SHAs.
- Perform the two normal non-force donor merges and only the frozen additive/selective resolutions.
- Verify commit ancestry, route/module preservation, migration identities/count/hash, no source feature work, focused regressions, builds, and smokes.
- Output: separate backend/frontend P0 convergence commits.

## P1 — Backend read contract and authorization foundation

- Replace legacy Creator Payout contract/controller boundary with GET-only C06 envelopes, schemas/DTOs, no-store behavior, and fixed-as-of request types.
- Add `PAYOUT_WORKSPACE_READ` to canonical Creator action vocabulary; Owner/Manager only, Assistant denied.
- Establish Creator-bound cursor and read-environment primitives by minimal safe adaptation.
- No financial query result may yet be inferred from legacy code.
- Gate: contract/schema, RBAC, cross-Creator denial, cursor tamper, no-write architecture tests.

## P2 — Obligation and summary projection

- Implement Creator-scoped canonical obligation read and the four per-currency summary predicates.
- Validate C04 authority/funding lineage and stored due evidence; reuse shared Kolkata helper for proof only.
- Implement provider-disabled effective-gate mapping and exact money.
- Retain ownership-proven legacy rows only as limited/non-summary records.
- Gate: real PostgreSQL canonical/legacy/corrupt/foreign fixtures, every NET term/boundary, row-summary parity, all gates/lifecycles, zero provider calls/writes.

## P3 — History/detail and C05 method summary

- Implement fixed-as-of safe history/detail over obligations, transfer attempts, receipts, and allowlisted settlement/reversal ledger evidence.
- Add the narrow C05-owned payout-method summary port/select and Settings navigation capability.
- Enforce non-enumerating foreign/missing detail and PII denylist.
- Gate: real PostgreSQL pagination, stable ordering/no duplicates, destination version/currentness, settlement/reversal coherence, partial-source behavior.

## P4 — Frontend contracts/API/hooks

- Implement runtime schemas, exact-money types, API client, fixed-as-of pagination, refresh/restoration, partial/unavailable handling, and auth denial.
- Remove legacy numeric/escrow/tranche/bank-verification/tax-document contract use.
- Gate: schema/client/hook tests, malformed payload fail-closed behavior, no frontend calculation of money/due/status.

## P5 — Creator Payout workspace reconciliation

- Build one coherent Creator workspace using accepted Brand Payout primitives and bounded Creator visual/mobile patterns.
- Include four summaries, obligations, history/detail, safe payout method, and authorized Settings link.
- Remove/retire legacy bank drawer, PDFs, fake ETA, automatic release, KYC/provider-verification, and execution controls.
- Gate: component tests for all state families, roles, keyboard/focus, responsive composition, no legacy copy/commands.

## P6 — Joint production-shaped acceptance

- Run exact built frontend/backend against disposable PostgreSQL 16 UTC with the complete acceptance fixture.
- Prove widths 390, 767, 768, and 1440; Owner/Manager/Assistant; empty/partial/unavailable/mixed-currency/multipage; keyboard/focus/Axe.
- Run focused C04/C05/Brand Payout/C06 regressions, full suites, builds, startup/API smoke, migration 0→86 and populated 85→86, lint, secret/PII scans, provider/network deny counters.
- Gate: every acceptance matrix row passes or receives only an unchanged inherited-baseline disclosure permitted by the freeze.

## P7 — Durable closeout for SA review

- Finalize execution ledger, evidence index, checkpoint report, implementation/developer handoff, exact branches/SHAs/trees/migrations/tests/deferred scope, deployment order and rollback notes.
- Do not deploy or claim SA acceptance.
- Required return: `C06_LOCAL_CODEX_SUPERFAST_EXECUTION_REPORT_V1` with `READY_FOR_SA_REVIEW` or an exact circuit breaker.

## Hard stops

`PRODUCT_DECISION_REQUIRED`, `ARCHITECTURE_CONFLICT`, `UNAUTHORIZED_SCHEMA_MIGRATION`, migration count/hash drift, destructive migration, provider/credential requirement or call, security/auth boundary change, branch divergence, cross-Creator/role isolation failure, canonical state ambiguity, repeated gate failure, inability to produce production build/runtime evidence, or production/AWS access requirement.

