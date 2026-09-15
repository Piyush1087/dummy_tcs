# P0 — authority convergence and executable contracts

Status: P0_EVIDENCE_READY. P0 accepted for autonomous progression under explicit Recovery 2 authority, conditional on normal containing-authority publication/fetch-back before P1. This record does not claim persistence, PostgreSQL or frontend workspace completion.

## Reconciliation and ownership

Exact starts and authorities are recorded in the single [EXECUTION_LEDGER.md](EXECUTION_LEDGER.md). The normal merge preserves both accepted Creator Brand and Product/batching histories. AGENTS, AI engineering, backend, database, validation, AI-integration, frontend, Aurora, branching/layout/design directives and relevant canonical predecessor implementation/contracts were read and reconciled. Original, Recovery 1 and Recovery 2 prompts remain archived under `runner-prompts/` with original instructions preserved.

Separate planned namespaces are `CreatorWorkPreferences` / `CreatorWorkPreferencesRevision` and `CreatorRateCard` / `CreatorRateCardRevision`. Verified additive migration order is Work Preferences 103 then Rate Card 104. P0 introduces no persistence or runtime route.

Work Preferences owns manual preferences. Rate Card owns indicative starting references. Settings owns Team, shipping, source lifecycle, bank destinations and legal profiles. C06 owns transfer readiness. C04/Campaign/Collaboration retain eligibility and agreed commercial truth.

## Executable contract decisions

- Explicit Team actions: all three roles COMMERCIAL_SETUP_READ; Owner/Manager WORK_PREFERENCES_EDIT and RATE_CARD_EDIT; Assistant neither mutation. No other permission is added.
- Industry adapter derives only supported stable canonical IndustryVertical IDs from the existing pure classifier: D2C, HEALTHCARE, OFFLINE_SERVICES, SAAS_AI. Sentinel, blocked and regret IDs are rejected. Bounded input deduplicates and sorts before disjoint validation.
- ISO base country is normalized uppercase and validated against the existing shared ISO contract; canonical GeoRoutingService resolves IN/INR and US/rest-of-world USD without manufacturing a default country.
- Missing aggregate defaults only availability; all other questions remain unanswered. Mutation-time pause validation uses a captured server time; read/history validation does not erase expired historical dates.
- Six independent monetary lines use positive safe-integer minor units when enabled and null when disabled. Four atomic Campaign formats, Reel <15 seconds, seven-day Link in Bio and fifteen-day Partnership Ads are exact. UGC is only a Work Preferences projection, not a rate/deliverable.
- Usage rights have explicit availability and optional positive duration, no price or grant. Advance and net terms reuse canonical Campaign executable schemas. Nine platform conditions preserve transactional supremacy and prospective updates.
- Dedicated strict read/write/revision/audit contracts reject caller-selected subject/provenance, unknown fields, manual currency and future KYC production.

## Settings-owned bank authority

The strict port exposes AVAILABLE, ABSENT or CONFLICT only. AVAILABLE fields are exact Creator ID, destination reference/version/state, country/currency, legal-profile version, deterministic fingerprint and observed timestamp. No secret or masked bank fields cross it.

The pure owning selector fences exact Creator, one active primary BANK_ACCOUNT, positive version, ISO/canonical currency, and current legal country/payee/version when present. It uses no C06 readiness or provider-validation state. Configured-unverified/needs-attention destinations and US unsupported transfer routes can still provide country authority. Disabled/no-bank yields ABSENT; duplicate primaries, invalid country/currency or legal/version mismatch yields CONFLICT. The consumer never silently falls back on conflict or cross-Creator rows.

Producer and consumer share only a non-secret deterministic fingerprint helper. Settings does not import the Commercial adapter. Fingerprint binds versioned convention, source, exact source reference/version, legal-profile version, country and currency. Manual authority binds exact Work Preferences aggregate/reference plus revision; bank binds destination ID/version and relevant legal version. KYC has no producer.

Every Rate Card projection must compare the stored fingerprint with current authority. Mismatch/conflict removes all consumable monetary values, projects MONETARY_RATES_REQUIRE_REENTRY, preserves rights/payment preferences and performs no write. Owner/Manager reconciliation preserves valid same-currency money while auditing the new binding. Cross-currency manual change with current money requires confirmation and both CAS revisions in one transaction; higher bank authority cannot be blocked and reconciliation clears all money without FX/relabel. Historical values remain immutable. No scheduler or Settings mutation expansion.

## Commands and current results

Existing immutable installations from the preserved task were reused, packages/locks unchanged. Node24.19.0/npm11.17.0, Docker29.7.2; repository Prisma6.19.3/Vitest2.1.9.

`npx vitest run --config vitest.config.ts` with Commercial contracts, payout-country contract, Team policy/actor, Creator Brand contracts and payout Settings service: 8 files /126 PASS. Earlier 123-case run had five deterministic it.each argument-shape harness failures; corrected unchanged destination cases pass. Initial 45/107-case subsets also passed. No skipped mandatory contract test.

`npm run build` backend PASS including final complete-source rerun. Frontend `npm run build` PASS, exact source/tree unchanged; inherited large-chunk warning only.

Scoped ESLint and Prettier PASS after CRLF-preserving formatter repair, including final full changed-surface rerun. `git diff --check` and staged checks PASS. Final staged high-confidence private-key/token/signed-locator/forbidden-path scan:17 files/0 findings. Schema, 102 migrations, dependencies and Dockerfile unchanged. Exact LF migration-head checksum and Audience/Content ancestry/tree checks PASS.

`npm run intelligence:contracts:verify -- --source C:/Users/piyus/Documents/Codex/a3src-bbb0be3 --commit bbb0be3345c36e9cc7c4f06ca68fb491b742b83f` PASS; exact source HEAD and clean status independently checked. Frozen bundles unchanged.

Two overlapping lint invocations were stopped/serialized to avoid memory pressure on the 8GB host. No system configuration or lint rule changed; no unrelated process stopped. No backend/frontend serving process or database/container was started in P0.

## Publication and exact inventory

Backend normal non-force push and independent fetch/prune PASS. Local/fetched commit `24c781f292fa80278d35056826db0903aff198e6`, tree `df877db35f35c33e86a87c24e13431a65f5bc298`, exact Creator Brand source ancestry and clean status PASS. 17 files,1373 insertions/3 deletions. Frontend source unchanged at exact starting local/fetched SHA/tree. Authority contains both normal merges plus two commercial evidence documents; its containing commit is normally pushed/fetched and checked before P1, with exact identity reported subsequently to avoid self-reference. Final Program acceptance is not implied.

Backend inventory:

```text
src/features/creator-commercial-setup/contracts/commercial-common.contract.ts
src/features/creator-commercial-setup/contracts/commercial-consumer.contract.ts
src/features/creator-commercial-setup/contracts/commercial-contract.test.ts
src/features/creator-commercial-setup/contracts/commercial-country.projection.test.ts
src/features/creator-commercial-setup/contracts/commercial-country.projection.ts
src/features/creator-commercial-setup/contracts/rate-card-country-transition.contract.test.ts
src/features/creator-commercial-setup/contracts/rate-card-country-transition.contract.ts
src/features/creator-commercial-setup/contracts/rate-card.contract.ts
src/features/creator-commercial-setup/contracts/work-preferences.contract.ts
src/features/creator-settings/payouts/creator-payout-country-authority.contract.test.ts
src/features/creator-settings/payouts/creator-payout-country-authority.contract.ts
src/features/creator-settings/payouts/creator-payout-country-authority.port.ts
src/features/creator-settings/team/creator-team.policy.test.ts
src/features/creator-settings/team/creator-team.policy.ts
src/features/creator-settings/team/creator-workspace-actor.service.test.ts
src/shared/creator/creator-workspace-actor.contract.ts
src/shared/geography/country-authority-fingerprint.ts
```

All mandatory P0 gates PASS on publication/fetch-back. Prior authority stops consume zero corrections. No live Graph/model calls, provider mutation, serving process, database/container, new migration, development merge or deployment.
