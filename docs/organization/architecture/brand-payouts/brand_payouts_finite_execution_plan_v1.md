# Brand Payouts Finite Execution Plan V1

Status: `PREPARED_FOR_PARENT_ACCEPTANCE — EXECUTION_NOT_AUTHORIZED`
Product authority: `f15a91d0ace8b2c424a539d79dbb120869233105`
Architecture base: `main@7aeb0512cb8270a6bae1169570e82b080f01807e`
C-04 architecture: `de28784662bb92dac6cb927e348f3fc69564af7c`

This is a finite, gated implementation program. It is not an implementation prompt and grants no permission to change runtime source, create/apply migrations, inspect credentials, call Razorpay, run provider transactions, merge branches, or enable production behavior.

```text
EXECUTION_MODE_AUTHORITY = PRODUCT
TECHNICAL_RECOMMENDATION = HYBRID_RUN
```

The recommended hybrid uses bounded autonomous ChatGPT Work/cloud source segments separated by human gates, plus a distinct local desktop Codex lane for provider-local evidence and any separately authorized Test actions.

## 1. Fixed bases and branch convention

All heads are reverified before branch creation. Movement is classified before work; unexpected existing branches or divergence raise `BRANCH_DIVERGENCE`.

| Repository | Phase C verified base | Proposed execution branch |
|---|---:|---|
| authority / ledger | accepted Phase C commit on `brand-payouts/stage-b-architecture-plan-v1` | `brand-payouts/v1-execution-ledger` |
| backend | `development@4c5f42858b950b7cd342f8972f99f548f3daa942` | `brand-payouts/v1-backend` |
| frontend | `development@323658d4b147b95b5629ff8d91fa90b8fe9077e4` | `brand-payouts/v1-frontend` |
| C-04 authority | `c04/stage-b-authority-package-v1@de28784662bb92dac6cb927e348f3fc69564af7c` | dependency only; do not branch from donor |
| C-05 backend runtime | `156d5834266077be7e2b6a2d459bae5489edbbd6` | already contained in current backend development/closeout line |

The accepted Phase C commit is supplied in the Parent return and pinned into the execution ledger before P0. That indirection avoids an impossible self-referential commit SHA in this document.

## 2. P0 — Canonical base, contract convergence, and ledger bootstrap

**PURPOSE**
Revalidate immutable authority and live heads, bootstrap the durable execution ledger, freeze executable DTO/port names within the accepted architecture, record logical schema/constraint proposals, and establish clean backend/frontend branches. Close no provider or C-04 runtime gate by assumption.

**STARTING SHA**
Accepted Phase C commit; Product `f15a91d...`; backend `4c5f4285...`; frontend `323658d4...`; C-04 `de287846...`; C-05 runtime `156d5834...`. Each is reverified at execution start.

**BRANCH**
Authority `brand-payouts/v1-execution-ledger`; backend `brand-payouts/v1-backend`; frontend branch is reserved but need not receive a commit until P2.

**PRIMARY WORKER**
Systems Architect orchestration plus Backend Agent for contract/schema preflight.

**SPECIALIST REVIEW**
C-04 contract owner, C-05/Creator readiness owner, Database Agent, Security/financial-domain reviewer.

**ALLOWED SCOPE**

- Reverify refs, ancestry, clean worktrees, and branch absence/divergence.
- Pin the execution ledger and dependency gates.
- Add provider-neutral internal contract types/ports and non-runtime contract tests if Parent expressly authorizes source implementation.
- Produce logical M1/M2 model, field, constraint, ownership, backfill-eligibility, and rollback requirements. M1 Prisma/SQL/FK/index details are deliberately regenerated only after the canonical C-03/C-04/P3 convergence tree exists.
- Resolve current Campaign Manager entity-scope predicate without broadening authority.

**FORBIDDEN SCOPE**

- Applying migrations or adding SQL before migration acceptance.
- C-04 donor branch merge/cherry-pick or C-04 runtime wiring.
- Razorpay configuration, secrets, API calls, or provider actions.
- New vault/ledger/Return/auth/destination models; compatibility-data backfill.

**MIGRATIONS**
Logical proposal only: Payouts M1 and Support M2. Campaign and C-04 proposals remain with their owners. M2's exact proposal is prepared against the revalidated P3 base after its Security policy gate; M1's exact proposal is prepared against `BP-G08A`. `MAX_NEW_FINANCIAL_MIGRATIONS_WITHOUT_HUMAN_REVIEW = 0`.

**TESTS**
Repository lint/typecheck for any accepted contract-only change; architecture/static tests proving no RazorpayX fallback, no duplicate authorities, no public release/reversal, and no provider calls from reads.

**RUNTIME PROOF**
None required beyond clean builds/contract tests; no financial runtime mutation.

**CHECKPOINT**
`BP-P0-CONTRACT-BASE`: authority ledger SHA, backend contract/preflight SHA if changed, logical migration register, clean/pushed branches.

**ACCEPTANCE GATE**
Parent accepts base reconciliation, exact contract deltas, Campaign Manager scope, and the logical migration ceiling. Exact M1/M2 SQL is accepted separately at its applicable later gate; no migration acceptance is implied by architecture acceptance.

**STOP CONDITIONS**
Any live authority conflict, branch divergence, destructive migration, unowned contract, duplicate authority, secret discovery/exposure, or required Product decision.

**DEPENDENCIES**
Architecture Parent acceptance (`BP-G01`) and current-head revalidation (`BP-G02`).

```text
CODEX REQUIRED = YES — bounded Work/cloud execution agent after authorization
WORK/CLOUD AUTONOMOUS CONTINUATION = YES — P0 only, until a migration/human gate
LOCAL DESKTOP CODEX REQUIRED = NO
```

## 3. P1 — Backend authorization, read model, and legacy-safe activity

**PURPOSE**
Replace the unsafe Payouts response with a side-effect-free, provider-neutral, versioned query API using active membership authority, exact server redaction, explicit coverage/freshness, keyset pagination, summary buckets, and one-ledger activity projection.

**STARTING SHA**
Accepted `BP-P0-CONTRACT-BASE` backend SHA; if P0 has no backend commit, the reverified `4c5f4285...` base.

**BRANCH**
`brand-payouts/v1-backend`.

**PRIMARY WORKER**
Backend Agent.

**SPECIALIST REVIEW**
Security Agent, Database Agent, Systems Architect; Campaign/Collaboration owner for entity scope.

**ALLOWED SCOPE**

- V2 media-type representation for `GET /api/v1/brand/payouts` plus paginated obligations/activity/Returns/reserve-read projections; legacy default response remains for the existing client until the P2 joint flip.
- Reuse `BrandWorkspaceAuthorizationService`; resolve active `BrandTeamMember.role` and entity scope before query/serialization.
- Pure read repositories that cannot provision a vault or call a provider.
- Structured per-section/source coverage and limitations, distinct page/source completeness, immutable recorded-at/as-of cursors, semantic activity IDs/classification, version-bound resource actions, safe legacy states, exact DTO omission/redaction.
- Backend-authoritative activity CSV service/endpoint, Owner/Finance only.

**FORBIDDEN SCOPE**

- Financial mutation, reserve approval, transfer scheduling, provider adapter, support case migration.
- `BrandProfile.payoutsWorkspaceRole` authority, browser-only masking, provider/bank/KYC/TDS leakage.
- Silent list cap, fake counts/buckets, invented due date/status, second activity journal.

**MIGRATIONS**
None.

**TESTS**
Contract/unit tests for V1/V2 content negotiation and rollback, DTO schema, roles, redaction, amounts, buckets, structured coverage/limitations, page-vs-source completeness, version-bound actions, immutable recorded-at cursors/as-of, activity classification/deduplication, CSV encoding/ranges, separate failed/retryable vs action-required states, and legacy unknowns; service/PostgreSQL tests for Owner/Finance, fail-closed CM scope, inactive member, cross-Brand, cross-user, pure-read behavior, one-ledger source.

**RUNTIME PROOF**
Built backend against disposable seeded PostgreSQL with Brand A Owner/Finance/CM and Brand B actor; inspect network payloads for sensitive-field absence and continuation completeness. Provider remains disabled.

**CHECKPOINT**
`BP-P1-BACKEND-READ`: one pushed backend SHA, test matrix, runtime evidence, ledger update.

**ACCEPTANCE GATE**
Systems Architect/Security accept role scope, cross-Brand isolation, pure reads, redaction, cursor/source completeness, legacy semantics, immutable activity milestones, exact summary sources, action snapshot binding, and V1/V2 rollout compatibility.

**STOP CONDITIONS**
`FINANCIAL_AUTHORIZATION_GAP`, `CROSS_BRAND_ISOLATION_FAILURE`, `SENSITIVE_FINANCIAL_DATA_LEAK`, side-effecting GET, ambiguous source counted as authoritative, second ledger, or historical fabrication.

**DEPENDENCIES**
P0 accepted; `BP-G20` Campaign Manager scope resolved for acceptance. No C-04 backend/frontend or Razorpay dependency.

```text
CODEX REQUIRED = YES
WORK/CLOUD AUTONOMOUS CONTINUATION = YES — within P1 correction limits
LOCAL DESKTOP CODEX REQUIRED = NO
```

## 4. P2 — First frontend vertical slice and Settings compatibility

**PURPOSE**
Prove the permanent read-only end-to-end architecture with `/brand/payouts`, one backend contract, server role projection, separated summary buckets, existing activity, safe obligations/legacy states, and Campaign Manager read-only behavior. Settings remains the sole temporary Add funds/Brand Return mutation surface until the separately accepted P3 atomic cutover.

**STARTING SHA**
Frontend `development@323658d4...` revalidated; backend accepted `BP-P1-BACKEND-READ` SHA; accepted Phase C/ledger checkpoint.

**BRANCH**
Frontend `brand-payouts/v1-frontend`; backend branch remains at P1 unless a bounded contract correction is accepted.

**PRIMARY WORKER**
Frontend Agent with Backend Agent for contract-only corrections.

**SPECIALIST REVIEW**
Systems Architect, Security, frontend accessibility/responsive reviewer. UI/UX only if a concrete unresolved problem appears; Stitch remains off.

**ALLOWED SCOPE**

- Thin workspace, Zod runtime contract, typed client, per-section state coordinator.
- Overview, vault/funding summary, existing activity, safe obligation rows/details, truthful partial/stale/unavailable/legacy states.
- Owner/Finance full Product-safe projection and Campaign Manager scoped/masked read projection.
- Request the V2 media type explicitly and render structured source coverage, limitations, as-of, pagination completeness, and version-bound resource capabilities.
- Keep Payouts financial commands disabled/deep-link-only in P2; Settings remains the single temporary mutation surface.
- Aurora/accepted Settings, Collaboration, C-05 responsive and accessibility patterns.

**FORBIDDEN SCOPE**

- Parallel Settings + legacy Payouts truth fetching; client role default or security masking.
- Browser money/due calculations; fixed 30/70, TDS, synthetic invoices/PDF/CSV/provider receipts.
- Add funds/Brand Return/reserve/release/reversal/mark-paid controls in Payouts, provider IDs/diagnostics, route rename, Stitch by default.

**MIGRATIONS**
None.

**TESTS**
Runtime schema/version/content-negotiation tests; Owner/Finance/CM/Creator/Admin/no-active-membership; initial/independent loading, genuine empty/new Brand, partial, stale, refresh, unavailable, legacy; version-bound command capability absence on stale/partial data; Settings remains the single command surface; stable detail deep links/refresh/Back/unauthorized; 390/767/768/desktop; keyboard/focus/labels; bottom-nav and safe-area clearance; no document horizontal overflow, synthetic documents, or client arithmetic.

**RUNTIME PROOF**
Built frontend + built P1 backend + migrated disposable PostgreSQL + authenticated role fixtures. Capture actual HTTP payloads and UI states with provider disabled/fail-closed.

**CHECKPOINT**
`BP-P2-FIRST-VERTICAL-SLICE`: pushed frontend SHA, pinned backend P1 SHA, screenshots/DOM/accessibility/test/build evidence, ledger update.

**ACCEPTANCE GATE**
Exact first-slice gate in section 11. Parent must accept it before the autonomous run enters broader surfaces.

**STOP CONDITIONS**
Any protected render before authorization, role leak, broad CM fallback, parallel truth, zero/two mutation surfaces, fake financial/provider/tax claim, empty Brand treated as initialization failure/read-side provisioning, inaccessible/non-responsive core flow, contract drift, or production runtime failure.

**DEPENDENCIES**
P1 accepted. No C-04 frontend, C-04 settlement handoff, or Razorpay dependency.

```text
CODEX REQUIRED = YES
WORK/CLOUD AUTONOMOUS CONTINUATION = YES — stop at first-slice human gate
LOCAL DESKTOP CODEX REQUIRED = NO
```

## 5. P3 — Brand Return, durable support, and notifications

**PURPOSE**
Complete independent operational surfaces without waiting for C-04. P3 has two non-serializing tracks: P3A atomically moves existing Add funds/Brand Return command entry points to Payouts, converts Settings to a compatibility summary/deep link, and binds scoped financial notifications; P3S separately adds the durable payment support case/reference, restricted triage reader, and support UI only after its Security/migration gates.

**STARTING SHA**
Accepted P2 backend/frontend checkpoints. Authority ledger at P2.

**BRANCH**
P3A uses `brand-payouts/v1-backend` and `brand-payouts/v1-frontend`. P3S always starts from the latest accepted canonical heads and never writes concurrently with another phase: before `BP-P4-BASE-CONVERGENCE` it uses those same Payouts branches; after that checkpoint its backend work starts directly on `brand-payouts/v1-backend-convergence`, while frontend work continues on `brand-payouts/v1-frontend`. A clean/pushed predecessor and explicit ledger pin are mandatory before either track starts.

**PRIMARY WORKER**
Backend Agent for Support/notifications/Return integration; Frontend Agent for state/UI composition.

**SPECIALIST REVIEW**
Support Operations, Security/Privacy for `BP-G21`, Database Agent for M2, Brand Settings owner, Systems Architect.

**ALLOWED SCOPE**

- P3A: existing Brand Return service/read/commands with original-source semantics; no new Return implementation.
- P3A: atomic, rollback-safe command-surface capability flag—Payouts owns both existing command entry points while Settings becomes summary/deep link; rollback reverses both sides together.
- P3A: existing notification registry/policies/jobs/Postmark extension using the exact event/recipient/channel/retry matrix; stable URL-addressable obligation/activity/Return/reserve details and Return/export states.
- P3S: Brand Payouts-owned bounded `PaymentSupportCase` migration/command only after M2 and `BP-G21`; server-resolved context, stable reference, durable bounded routing worker, restricted service-authenticated Support Operations reader, and support action on every frozen trigger.

**FORBIDDEN SCOPE**

- Return to withdrawal destination; ledger before provider success; fire-and-forget email as case authority.
- Financial side effects from support; raw provider context in UI/email; optional preference suppressing required in-app recovery.
- Provider adapter/action, tax documents, C-04 settlement wiring, support SLA/assignment claims, raw provider payload storage.

**MIGRATIONS**
P3A has no migration. P3S alone applies M2 after exact human approval on its revalidated base and Security acceptance of restricted access/retention. No notification or Brand Return schema migration is expected.

**TESTS**
P3A: Add funds/Brand Return canonical-service regression and atomic exactly-one-surface flag/rollback; Brand Return idempotency/provenance/ambiguity/partial states; exact notification recipient scope/dedupe/preferences/in-app/email retries/redaction/terminal alert; stable detail refresh/Back/unauthorized tests. P3S: support ownership/context/idempotency/reference/commit-before-routing/five-attempt routing/terminal alert/restricted-reader/privacy/retention-policy tests and every support trigger.

**RUNTIME PROOF**
P3A proof uses the built stack and disposable PostgreSQL with no new migration: exercise Add funds/Brand Return command UI only against deterministic/fail-closed service adapters—no Razorpay call—and flip/rollback the atomic surface flag while proving exactly one command surface. P3S proof is separate after M2: submit from obligation/activity/Return/action-required contexts and observe a durable reference/restricted queue record with fake/disabled delivery.

**CHECKPOINT**
`BP-P3A-OPERATIONS-CUTOVER`: pushed backend/frontend SHAs and P3A evidence. Independently, `BP-P3S-SUPPORT`: pushed backend/frontend SHAs, accepted M2 identity, and Support evidence. Each updates the ledger; acceptance of either does not semantically accept the other, even when branch ancestry contains the earlier checkpoint.

**ACCEPTANCE GATE**
P3A: Settings/Notifications/Systems Architect accept Return reuse, notification scope, and exactly one mutation surface. P3S: Support Operations/Security/Database/Systems Architect accept durability, retention/access, routing, restricted context, and no financial side effect.

**STOP CONDITIONS**
P3A stops on duplicate/zero command surface, duplicate Return path, notification scope leak, provider action, or ledger-on-ambiguous Return. P3S stops on support financial mutation, sensitive leak, lost acknowledgement, unapproved migration/policy, raw provider payload storage, or Postmark treated as authority. One track's open gate does not stop the other.

**DEPENDENCIES**
Both tracks require P2 Parent acceptance. P3A has no M2/`BP-G21` dependency. P3S requires M2 human approval and `BP-G21`. Both are independent of the C-04 backend/frontend handoff and Razorpay. P4 depends on accepted P3A only; P3S may finish later but is required before final complete-V1 P7 acceptance.

```text
CODEX REQUIRED = YES
WORK/CLOUD AUTONOMOUS CONTINUATION = YES — P3A after P2; P3S separately after M2/BP-G21
LOCAL DESKTOP CODEX REQUIRED = NO
```

## 6. P4 — Canonical convergence, C-04 reserve, due-date, recovery, and obligation intake

**PURPOSE**
First create one accepted backend tree in which the P3A Payouts checkpoint and the C-03-post-P1.4/C-04 handoff coexist. Then integrate immutable reserve request, Owner/Finance approval/execution, exact payment-term snapshot, `settlementEligibleAt`, exceptional due authority, payout obligation intake, and trusted confirmations. A non-serializing P4R checkpoint adds versioned partial/full financial recovery only when `BP-G08R` is available. Stop after the first canonical reserve path for Parent acceptance.

**STARTING SHA**
The future accepted C-04 backend implementation/handoff SHA built on the accepted C-03 post-P1.4 base. The P3A Payouts and accepted Campaign correction SHAs are named port inputs, not additional starting trees. Accepted P3S is also ported if it is already on the pre-convergence line, but it is not a P4 prerequisite; if accepted later, P3S starts directly on the convergence head. Never start from or merge the divergent donor branch.

**BRANCH**
Create `brand-payouts/v1-backend-convergence` from the accepted C-04 canonical handoff head after verifying branch absence. The C-04/backend owner ports the accepted P0-P3A Payouts commits and any already accepted P3S commits file-by-file with the Systems Architect; no automatic merge/rebase conflict resolution is allowed. After `BP-P4-BASE-CONVERGENCE` acceptance, this is the only backend tree for P3S, P4, P5, and complete-V1 acceptance.

**PRIMARY WORKER**
Backend Agent with C-04 owner.

**SPECIALIST REVIEW**
Systems Architect, Database Agent, Security/financial authorization reviewer, Campaign owner, C-05 identity reviewer.

**ALLOWED SCOPE**

- Port P0-P3A and any already accepted P3S commits onto the one accepted C-04 canonical base; produce ancestry/co-residence proof, conflict register, and full applicable P0-P3A/P3S+C-04 regression.
- Regenerate exact M1 Prisma/SQL/FKs/indexes/dry-run/rollback against that convergence tree, obtain human acceptance, then apply it there.
- Consume immutable C-04 request/instruction; implement approval identity/audit, existing financial execution delegation, confirmation.
- Exact Campaign term intake; Kolkata due policy; exceptional due rule; immutable obligation intake and replay.
- P4R only after `BP-G08R`: consume `CollaborationFinancialRecoveryInstructionV1` with ID/version/hash, source obligation/settlement, amount/currency/effects, resolution authority, replay/supersession, and provider-neutral confirmation.
- Disable canonical use of unsafe direct-lock/interlock paths; retain explicit legacy reads.

**FORBIDDEN SCOPE**

- Donor wholesale merge/migration replay, automatic conflict resolution, applying the P0 logical M1 unchanged, caller amounts/currency/tax, CM Treasury mutation.
- Inventing historical terms/dates/approval; early provider transfer/on-hold workaround.
- Provider call, live/test action, settlement fabrication, direct reversal/release.

**MIGRATIONS**
M1 only after regeneration and exact human acceptance on `BP-P4-BASE-CONVERGENCE`. Campaign and C-04 migrations must already be accepted/applied by their owners on that canonical base. If the logical M1 cannot remain one additive migration without unsafe ordering, stop for architecture/migration-count review rather than hiding a third migration.

**TESTS**
Pre- and post-convergence full applicable P0-P3A/P3S+C-04 regression and schema diff; instruction hash/version/economics replay; requester/approver identity; approval decision persistence, shortfall `AWAITING_FUNDS`, funding-credit/sweep resume, lease recovery, supersession refusal; Owner/Finance allow and CM deny; cross-Brand; row-lock concurrency; one lock/allocation/ledger result; all five terms/repository UTC codec/direct-SQL/drift; exceptional due; null legacy behavior; obligation idempotency; refund/reversal/Return separation. P4R separately tests recovery instruction replay/supersession/effect confirmation.

**RUNTIME PROOF**
Built backend on disposable PostgreSQL with accepted migrations. Execute one deterministic C-04 request -> Owner/Finance approval -> existing reserve lock/allocation/ledger path and confirmation using no provider. Verify replay and CM/cross-Brand denial.

**CHECKPOINT**
`BP-P4-BASE-CONVERGENCE` before M1. `BP-P4A-FIRST-RESERVE` after the first canonical path, then stop for Parent. After acceptance, `BP-P4B-INSTRUCTION-INTAKE` records normal reserve/due/obligation intake. Independently, `BP-P4R-RECOVERY-INTAKE` records recovery integration after `BP-G08R`.

**ACCEPTANCE GATE**
`BP-G08A` Systems Architect/C-04/Database acceptance before M1; `BP-G19` Parent acceptance of P4A before continuation; then Systems Architect/C-04/Database/Security acceptance of P4B. `BP-G08R` separately gates P4R and never serializes normal scheduling.

**STOP CONDITIONS**
Missing required C-04 field for the active track, convergence conflict or missing co-residence proof, term collapse, due drift, caller-authored truth, wrong role, cross-Brand leak, duplicate/partial reserve, stale/superseded instruction execution, historical fabrication, hidden migration split, or destructive/unapproved migration.

**DEPENDENCIES**
`BP-G05`, `BP-G06`, `BP-G08`, `BP-G08A`, `BP-G10`; accepted P3A port input. `BP-G08R` is mandatory only for P4R/P5R recovery acceptance. C-04 frontend and P3S are not required for normal backend P4.

```text
CODEX REQUIRED = YES
WORK/CLOUD AUTONOMOUS CONTINUATION = YES — only to P4A, then mandatory human stop
LOCAL DESKTOP CODEX REQUIRED = NO
```

## 7. P5 — Provider-neutral eligibility, scheduler, reconciliation, and full frontend

**PURPOSE**
P5A completes the normal provider-neutral payout runtime and all non-recovery frontend state families: exact C-05 readiness fence, due-gated scheduler, funding/resolution gates, durable attempts, deterministic fake outcomes, normal settlement reconciliation, obligations/details/actions, and C-04 frontend integration when available. P5R separately accepts new partial/full recovery/reversal execution after P4R; P5A is not serialized behind that missing contract.

**STARTING SHA**
Accepted `BP-P4B-INSTRUCTION-INTAKE` SHA on the one convergence tree; P3A/P2 frontend SHA; accepted C-05 runtime. P3S is consumed only if accepted. C-04 frontend integration additionally requires the exact `BP-G09` C-03/C-04/Payouts convergence SHA. P5R additionally starts from accepted `BP-P4R-RECOVERY-INTAKE`.

**BRANCH**
Backend `brand-payouts/v1-backend-convergence` (the sole accepted P4/P5 backend tree) and frontend `brand-payouts/v1-frontend`.

**PRIMARY WORKER**
Backend Agent for execution coordinator; Frontend Agent for full workspace.

**SPECIALIST REVIEW**
C-05/Creator readiness owner, provider/security specialist, C-04 owner, Database Agent, accessibility reviewer, Systems Architect.

**ALLOWED SCOPE**

- Close RZ-G0 with narrow readiness/transfer ports, fail-closed default, deterministic fake, due candidate worker, typed outcomes and reconciliation.
- Exact current destination reference/version/provider-readiness fencing and India/INR/bank enforcement.
- P5A settlement ledger reconciliation from trusted fake/fixture evidence only; existing authoritative reversal history may remain readable.
- P5R new recovery/reversal funding-lineage reconciliation only after P4R.
- Full frozen page/authority/funding/payment/Return/export/responsive states and C-04 cross-links when accepted; Support states/actions are included only when P3S is accepted, otherwise the section is truthfully unavailable.

**FORBIDDEN SCOPE**

- Concrete unverified Razorpay request/event assumptions or any provider network action.
- Early transfer, Brand release/reversal, raw state/ID exposure, UPI/PayPal/US/manual execution, guessed retry.
- Treating transfer acceptance/processing/hold as settlement; reversal to AVAILABLE without C-04 refund.

**MIGRATIONS**
No new migration beyond accepted/applied M1 and owner migrations. M2 is present only when the independently accepted P3S Support track is included; P5A does not require it.

**TESTS**
P5A: due selection/skip-lock/concurrency; readiness destination invalidation; rail/currency/country; funding/resolution blockers; success/terminal/retryable/ambiguous attempt handling; set-once attempt/receipt milestone constraints and late-event cursor stability; separate failed/retryable and actor-action-required projection; reconciliation ordering/idempotency; settlement ledger once; all applicable frontend state families, runtime schemas, role capabilities, deep links/support triggers where P3S is accepted, mobile/accessibility. P5R: versioned recovery replay and partial/full reversal bounds/lineage.

**RUNTIME PROOF**
P5A built stack and migrated disposable PostgreSQL with authenticated roles uses a deterministic fake provider only; demonstrate not-due/setup/provider-review/unsupported/ready/processing/held/settled/failure/outstanding states, then repeat fail-closed with no external call/false success. P5R separately demonstrates partial/full reversal and outstanding-after-partial states after its gate.

**CHECKPOINT**
`BP-P5A-PROVIDER-NEUTRAL-NORMAL`: pushed backend/frontend SHAs, RZ-G0 evidence, normal-path matrix. `BP-P5R-RECOVERY`: separate recovery/reversal evidence when eligible. Each updates the ledger.

**ACCEPTANCE GATE**
Systems Architect/Security/C-04/C-05/Database/Frontend accept P5A normal behavior and its state mapping. C-04-specific frontend and P5R recovery acceptance remain separately gated. Complete-V1 acceptance eventually requires P5R, but normal scheduler work does not wait for it.

**STOP CONDITIONS**
Early/unsupported transfer, readiness version mismatch executed, settlement fabrication, reversal lineage error, sensitive leak, unbounded correction, provider call, or any inherited breaker.

**DEPENDENCIES**
P5A requires P4B, C-05 exact version-fence contract, M1, and completed RZ-G0. P3S/M2 is required only for Support. P5R requires P4R/`BP-G08R`. C-04 frontend-only features require `BP-G09`. Razorpay G1-G4 are not required.

```text
CODEX REQUIRED = YES
WORK/CLOUD AUTONOMOUS CONTINUATION = YES — bounded provider-neutral source only
LOCAL DESKTOP CODEX REQUIRED = NO
```

## 8. P6 — Razorpay evidence and adapter lane

P6 is three separately gated subphases. G2 itself has outbound/read (`G2A`) and signed-webhook (`G2W`) evidence subgates and may resume after G3 evidence. Acceptance of one gate never authorizes the next.

### P6A / RZ-G1 — read-only Test capability audit

**PURPOSE**
Collect current redacted, exact provider capability/configuration/API/event evidence without mutation.

**STARTING SHA**
Accepted Phase C architecture/P5 checkpoint plus exact local environment reference approved by Product; no secret value is recorded.

**BRANCH**
Evidence branch chosen in the future bounded assignment; no runtime branch mutation is required.

**PRIMARY WORKER**
Local desktop Codex runner under Product-relayed bounded prompt.

**SPECIALIST REVIEW**
Provider integration owner, Security, Systems Architect, Product.

**ALLOWED SCOPE**
Read-only Test entitlement, API/version/capability, linked-account/bank/product state shapes, webhook configuration and exact redacted fixtures.

**FORBIDDEN SCOPE**
Creating/updating accounts, transfers, holds, reversals, refunds, webhooks, credentials, or any Live/Test mutation.

**MIGRATIONS**
None.

**TESTS**
Evidence validation and redaction only.

**RUNTIME PROOF**
Read-only provider responses/configuration with timestamps and mode proof.

**CHECKPOINT**
`BP-P6A-RZ-G1-EVIDENCE`.

**ACCEPTANCE GATE**
Product/Provider/Security accept exact evidence and decide whether G2 is eligible.

**STOP CONDITIONS**
Any write-required endpoint, credential exposure, mode ambiguity, access denial that invalidates assumptions, or out-of-envelope action.

**DEPENDENCIES**
Architecture acceptance; it may run independently of P3-P5 but cannot change them.

```text
CODEX REQUIRED = YES
WORK/CLOUD AUTONOMOUS CONTINUATION = NO
LOCAL DESKTOP CODEX REQUIRED = YES
```

### P6B / RZ-G2A and RZ-G2W — deterministic adapter source

**PURPOSE**
Implement the disabled-by-default outbound/read adapter (`RZ-G2A`) against accepted G1 request/response evidence. Implement/enable no webhook event mapping until separate `RZ-G2W` evidence supplies provider-authoritative signed fixtures or signed deliveries captured under an authorized G3 envelope. No provider money movement occurs in either source step.

**STARTING SHA**
Accepted P5 backend SHA plus accepted G1 evidence SHA/package.

**BRANCH**
`brand-payouts/v1-razorpay-adapter`, based on the accepted P5 backend checkpoint.

**PRIMARY WORKER**
Backend/provider Agent in Work/cloud.

**SPECIALIST REVIEW**
Security, provider owner, Systems Architect.

**ALLOWED SCOPE**
Outbound/read adapter source, exact G1 fixture contracts, typed errors/retry/ambiguity/read-after-write, synthetic signature plumbing tests, disabled feature flags. After separately accepted signed evidence, a bounded follow-up may add exact event translations while keeping deployment disabled.

**FORBIDDEN SCOPE**
Network calls in acceptance tests, credentials, enabled deployment, provider mutation, treating synthetic signatures as provider evidence, guessed event maps/states.

**MIGRATIONS**
None unless a separately reviewed additive provider-evidence delta is proven necessary; such discovery stops this phase for architecture/migration review.

**TESTS**
G1 request/response fixture contracts, timeout/network/idempotency/ambiguity/read-after-write tests; generic signature rejection tests. Duplicate/out-of-order/provider-event mapping tests are acceptance requirements only after G2W has authentic signed evidence.

**RUNTIME PROOF**
Built backend with adapter disabled; deterministic mock transport only; fail-closed default verified.

**CHECKPOINT**
`BP-P6B-RZ-G2A-ADAPTER`; later `BP-P6B-RZ-G2W-WEBHOOK-MAP` only if its evidence gate closes.

**ACCEPTANCE GATE**
Provider/Security/System Architect accept G2A outbound/read mapping and disabled default. G2W remains blocked with empty event maps until authentic signed evidence is accepted. Neither authorizes G3.

**STOP CONDITIONS**
Fixture drift, untyped ambiguity, unsafe retry, unknown state strengthening truth, synthetic webhook evidence presented as authentic, missing signature/idempotency proof, or provider request.

**DEPENDENCIES**
Accepted G1 and P5 provider-neutral ports.

```text
CODEX REQUIRED = YES
WORK/CLOUD AUTONOMOUS CONTINUATION = YES — source/tests only, one subphase
LOCAL DESKTOP CODEX REQUIRED = NO
```

### P6C / RZ-G3 — controlled Test actions

**PURPOSE**
Execute only a separately authorized Test envelope and collect exact lifecycle evidence.

**STARTING SHA**
Accepted G2A outbound/read adapter SHA and future Product authorization SHA/envelope; webhook event maps remain disabled.

**BRANCH**
Evidence/ledger branch named in that future assignment.

**PRIMARY WORKER**
Local desktop Codex runner.

**SPECIALIST REVIEW**
Product, Provider, Security, Systems Architect, financial-domain owner.

**ALLOWED SCOPE**
Only exact Test entities, amounts, operations, limits, and evidence named by Product.

**FORBIDDEN SCOPE**
Any Live action, extra entity/amount/operation, secret persistence, production enablement, or autonomous expansion.

**MIGRATIONS**
None.

**TESTS**
Authorized Test matrix for transfer, settlement, hold/recovery if applicable, reversal, Return, signed events, replay/order/errors.

**RUNTIME PROOF**
Exact provider Test evidence and canonical reconciliation proof under the approved envelope.

**CHECKPOINT**
`BP-P6C-RZ-G3-CONTROLLED-TEST`.

**ACCEPTANCE GATE**
Explicit Product/Provider/Security/financial acceptance; G4 remains separate.

**STOP CONDITIONS**
Any unexpected cost/mode/entity/state, capability mismatch, ambiguous unsafe result, webhook/signature failure, envelope exhaustion, or provider breaker.

**DEPENDENCIES**
Accepted G2A and separate G3 Product authorization. If G3 produces accepted signed deliveries, execution returns to a bounded Work/cloud G2W mapping checkpoint; any subsequent provider validation requires another explicit G3 envelope.

```text
CODEX REQUIRED = YES
WORK/CLOUD AUTONOMOUS CONTINUATION = NO
LOCAL DESKTOP CODEX REQUIRED = YES
```

## 9. P7 — Production-shaped acceptance and developer handoff

**PURPOSE**
Run the complete production-shaped, provider-disabled application acceptance, reconcile every checkpoint/ledger item, and prepare a bounded developer integration handoff. A provider-enabled launch variant exists only after G3/G4 and withholding gates.

**STARTING SHA**
Provider-disabled normal-path acceptance starts from accepted P0-P5A backend/frontend/authority checkpoints. Complete-V1 acceptance additionally pins accepted P3S and P5R checkpoints. A provider-enabled variant also pins accepted G2/G3 evidence and G4 authority.

**BRANCH**
Existing accepted backend/frontend execution branches plus authority ledger branch; no merge to development/main without separate owner acceptance.

**PRIMARY WORKER**
Systems Architect orchestration with Backend and Frontend Agents.

**SPECIALIST REVIEW**
Security, Database, C-04, C-05, Settings, Support/Notifications, QA/runtime owner; Provider/Legal only for enabled variant.

**ALLOWED SCOPE**

- Built backend/frontend, disposable production-shaped PostgreSQL, authenticated role and cross-Brand matrix, migrations from zero/current accepted base, provider disabled/fail-closed.
- Final traceability, regression, rollback/runbook/kill-switch readiness, exact SHA/evidence handoff.
- Before complete-V1 acceptance, record `BP-P7-COMPLETE-V1-CORESIDENCE` proving one backend convergence head and one frontend head contain accepted P3S, P4R/P5R, and P5A changes. This is an evidence checkpoint, not permission for an unreviewed late merge; any missing accepted change returns to its owning bounded phase and latest-head rule.
- After separate acceptance, Systems Architect may later author a bounded implementation/integration prompt; this Phase C artifact does not contain it.

**FORBIDDEN SCOPE**

- Production deploy/enablement, branch merge, provider action, Live credentials, scope expansion, waiver of failed financial/security tests.

**MIGRATIONS**
Validate only already accepted migrations on disposable databases; no new migration.

**TESTS**
All five validation layers, full regression, clean build/lint/typecheck, migration up/compatibility/rollback strategy, provider-disabled proof, first-slice replay, financial invariants and frontend matrix.

**RUNTIME PROOF**
Production-shaped provider-disabled environment. Provider-enabled acceptance is a separate run after G3/G4 and Legal/Tax/Product gates.

**CHECKPOINT**
Normal-path acceptance may record `BP-P7-NORMAL-PATH-ACCEPTANCE`. Complete V1 first records `BP-P7-COMPLETE-V1-CORESIDENCE`, then `BP-P7-PRODUCTION-SHAPED-ACCEPTANCE` and an authority closeout SHA with exact backend/frontend heads and evidence references.

**ACCEPTANCE GATE**
Parent accepts source/runtime package and separately decides merge/developer handoff. Production enablement requires G4 and any withholding authority.

**STOP CONDITIONS**
Any regression, dirty/diverged head, failed migration, sensitive leak, duplicate financial authority, provider call, production runtime failure, or incomplete evidence.

**DEPENDENCIES**
Provider-disabled normal-path acceptance requires P0-P5A and may run while P3S/P5R remain independently gated, but it must be labelled incomplete for frozen Support/recovery scope. Complete-V1 acceptance requires P3S, P5R, and `BP-G22` co-residence proof. Neither provider-disabled variant requires P6. A provider-enabled variant requires G1-G4, G3 Product authority, and qualified withholding decision if applicable.

```text
CODEX REQUIRED = YES
WORK/CLOUD AUTONOMOUS CONTINUATION = YES — provider-disabled validation only
LOCAL DESKTOP CODEX REQUIRED = CONDITIONAL — provider evidence only, never core handoff
```

## 10. First vertical slice

```text
Authenticated Brand actor
  -> /brand/payouts
  -> server resolves current active BrandTeamMember.role
  -> provider-neutral overview/activity/obligation contracts
  -> authoritative vault buckets + existing activity + canonical/safe legacy obligations
  -> truthful coverage/freshness/legacy state
  -> Owner/Finance full Product-safe projection
  -> Campaign Manager scoped, read-only, redacted projection
```

No C-04 reserve integration, provider transaction, or migration is required for this slice.

### Exact first-slice acceptance gate

All conditions are mandatory:

1. Backend and frontend are built from exact pushed checkpoint SHAs against migrated disposable PostgreSQL.
2. Brand A Owner, Finance Admin, Campaign Manager and an unrelated Brand B actor are authenticated through real application authorization.
3. Role derives from the current active `BrandTeamMember`, even when `BrandProfile.payoutsWorkspaceRole` disagrees.
4. Owner/Finance receive exact Product-safe separate vault buckets, complete/cursor-bound activity, and safe obligations.
5. Campaign Manager sees only otherwise-authorized entities, Creator amount/due/status where authoritative, categorical/masked treasury context, and no financial mutation/export capability.
6. Direct CM mutation attempts return authorization failure; cross-Brand list/detail/cursor/support-context probes disclose no rows or existence.
7. Network payloads contain no bank/KYC/tax/provider credentials/IDs/raw diagnostics or TDS buffer.
8. Activity declares movement vs lifecycle and never presents obligation/provider acceptance as settled.
9. Unknown historical term/due/provider truth is `LEGACY_UNRECONCILED`/limited, not guessed.
10. Pagination exposes `as_of`, continuation and completeness; no silent cap or fake active Campaign count.
11. Payouts is read-only for financial commands in P2; Settings escrow remains the single temporary Add funds/Return mutation surface. The later P3 atomic flag/cutover is tested but not prematurely enabled.
12. The browser performs no financial/due calculation and exposes no fixed 30/70, TDS, synthetic document, release, reversal, or fake provider-success control/copy.
13. Initial, independently loading, partial, stale, refreshing, empty, unavailable, and ready states are demonstrable.
14. At 390, 767, 768, and desktop widths, tables transform accessibly with no document-level horizontal overflow; keyboard/focus/labels and fixed bottom-nav/safe-area clearance pass.
15. Reads do not provision a vault, create a provider account, or make any provider call; provider disabled/fail-closed is truthful.
16. Existing vault, ledger, funding and Brand Return authorities remain singular.
17. Direct Creator, Admin, inactive-member, and no-active-membership navigation fails closed before any protected financial content renders.
18. A genuine empty/new Brand renders the frozen empty state, never a vault-initialization failure, read-side “initialize” action, provisioning write, or provider call.
19. Structured source coverage identifies each unavailable/partial source and limitation; page completeness is distinct from source completeness; stale/partial data retains last-good/as-of while freshness-sensitive actions remain suppressed.

Failure of any item blocks P2 acceptance.

## 11. Specialist ownership

| Specialist | Bounded responsibility | Mandatory review points |
|---|---|---|
| Systems Architect | Contract/phase/gate integrity, ledger, checkpoint acceptance | Every phase and breaker |
| Backend Agent | Read API, reserve/due/obligation/execution, support/notification integration | P0-P5 |
| Frontend Agent | One-contract workspace, state families, Settings cutover, responsive/accessibility | P2, P3, P5, P7 |
| C-04 owner | Canonical base/handoff, request/agreement/resolution/confirmation semantics | P0 contract, P4, P5/P7 joint |
| Campaign owner | Exact NET_45/60 persistence and evidence-only reconciliation | Before P4 |
| C-05/Creator readiness owner | Subject/destination/version/invalidation and narrow readiness port | P0, P5 |
| Database Agent | Exact additive migration, locks, indexes, constraints, backfill safety | M1/M2 gates, P4/P7 |
| Security/financial reviewer | RBAC, cross-Brand, sensitive fields, provider ingress, financial invariants | P1, P4-P7 |
| Support/communications owner | Durable case/routing and notification semantics | P3/P7 |
| UI/UX Agent | Only a bounded unresolved hierarchy/interaction/responsive problem | Conditional after frontend ladder |
| Local desktop Codex | Read-only G1 and separately authorized G3 provider-local work | P6A/P6C only |

Stitch is not assigned by default.

## 12. Validation topology

| Layer | Minimum acceptance scope |
|---|---|
| Contract/unit | Amount/currency, role projection, all due rules, activity/state mapping, CSV, support references, absence of false tax/document claims |
| Service/integration | Reserve split, obligation replay, activity, Brand Return, support durability/routing, notifications, Settings compatibility |
| PostgreSQL/security | Cross-Brand, roles, redaction, reserve concurrency, one ledger, provenance, reversal bounds, historical ambiguity, C-04 identity |
| Frontend | Runtime schemas, all roles/state families, support, 390px/mobile thresholds, accessibility/overflow, no synthetic documents |
| Production-shaped | Built stack, disposable migrated PostgreSQL, authenticated roles, provider-neutral slice, fail-closed provider; controlled Test only under G3 |

Test fakes may prove application behavior but never provider capability.

## 13. Expected checkpoints, commits, and environments

| Checkpoint | Repositories expected to change | Environment | Maximum scope before checkpoint |
|---|---|---|---|
| `BP-P0-CONTRACT-BASE` | authority; backend only if accepted contract scaffolding | Work/cloud | P0 only |
| `BP-P1-BACKEND-READ` | backend + authority ledger | Work/cloud + disposable PostgreSQL | One backend phase |
| `BP-P2-FIRST-VERTICAL-SLICE` | frontend; bounded backend correction only; ledger | Work/cloud + built local/cloud stack | One vertical slice |
| `BP-P3A-OPERATIONS-CUTOVER` | backend/frontend/ledger | Work/cloud + disposable PostgreSQL | Return/notifications/exactly-one command-surface cutover only |
| `BP-P3S-SUPPORT` | backend/frontend/ledger | Work/cloud + disposable PostgreSQL | Accepted M2 and bounded Support scope only |
| `BP-P4-BASE-CONVERGENCE` | backend/ledger | Work/cloud + disposable PostgreSQL | File-by-file P0-P3A onto accepted C-04 canonical tree; no M1 yet |
| `BP-P4A-FIRST-RESERVE` | backend/ledger | Work/cloud + disposable PostgreSQL | Exactly first canonical reserve path |
| `BP-P4B-INSTRUCTION-INTAKE` | backend/ledger | Work/cloud + disposable PostgreSQL | Normal reserve/due/obligation intake only |
| `BP-P4R-RECOVERY-INTAKE` | backend/ledger | Work/cloud + disposable PostgreSQL | Versioned recovery intake only after `BP-G08R` |
| `BP-P5A-PROVIDER-NEUTRAL-NORMAL` | backend/frontend/ledger | Work/cloud + deterministic fake | Normal scheduler and non-recovery UI only |
| `BP-P5R-RECOVERY` | backend/frontend/ledger | Work/cloud + deterministic fake | Recovery/reversal execution and UI only |
| `BP-P6A-RZ-G1-EVIDENCE` | evidence/ledger only | Local desktop, provider Test read-only | Exact G1 envelope |
| `BP-P6B-RZ-G2A-ADAPTER` | backend adapter branch/ledger | Work/cloud, no provider network | Outbound/read adapter only |
| `BP-P6B-RZ-G2W-WEBHOOK-MAP` | backend adapter branch/ledger | Work/cloud after authentic signed evidence, no provider network | Exact event map only |
| `BP-P6C-RZ-G3-CONTROLLED-TEST` | evidence/ledger only | Local desktop, authorized Test | Exact G3 envelope |
| `BP-P7-NORMAL-PATH-ACCEPTANCE` | authority ledger; corrections only if separately accepted | Work/cloud provider-disabled | P0-P5A scope; explicitly incomplete for Support/recovery |
| `BP-P7-COMPLETE-V1-CORESIDENCE` | authority ledger only | Work/cloud, no source mutation | Exact accepted backend/frontend co-residence proof |
| `BP-P7-PRODUCTION-SHAPED-ACCEPTANCE` | authority closeout; corrections only if separately accepted | Work/cloud provider-disabled | Acceptance only |

Every checkpoint records exact parent/current SHA, diff scope, migration state, tests, runtime evidence, provider mode/actions, correction count, breaker state, and next gate. No more than one phase per repository remains uncommitted/unpushed.

## 14. Autonomous Work/cloud boundary

One logical run may resume across segments, but it cannot remain live through human waits or bypass them.

### Recommended segments

1. After architecture acceptance: P0 -> P1 -> P2, maximum three phases, then mandatory first-slice stop.
2. After first-slice: P3A may run immediately. P3S is a separate segment only after M2 and `BP-G21`; neither track waits for the other.
3. After C-04/Campaign acceptance and P3A: P4 base convergence, regenerate/accept M1, then P4A; mandatory first-reserve stop. P4B normal intake follows after acceptance. P4R is a separate segment only after `BP-G08R` and never blocks P4B.
4. P5A provider-neutral normal run follows P4B, then stop. P5R is separate after P4R; P3S is required only for Support and complete-V1 acceptance.
5. P6B/G2A only after accepted local G1. G2W waits for authentic signed evidence; neither Work/cloud step includes G3.
6. P7 provider-disabled normal-path acceptance may run after P5A. Complete-V1 P7 waits for P3S/P5R and `BP-G22` co-residence; no late source port is performed inside P7.

### Budgets and correction limits

- Maximum three phases per authorized segment.
- Maximum 120 minutes or 200,000 model tokens per segment when the environment exposes metering; otherwise the checkpoint/file limits control.
- Maximum 60 minutes or 20 changed files without a pushed checkpoint, whichever occurs first.
- One diagnosis plus one bounded correction per distinct failure signature.
- Maximum two correction loops in any phase and four total across P0-P5.
- A repeated identical failure after correction, a required architecture change, financial/security uncertainty, migration drift, or budget exhaustion stops.
- Mechanical lint/type/test corrections may continue inside these limits; semantic contract changes require Systems Architect/Parent review.

### Resume rules

Resume only after verifying authority SHA, architecture SHA, checkpoint SHA, exact branch/remote ancestry, clean worktree, dependency gates, migration state, and prior smoke gate. A mismatch is `RESUME_STATE_INVALID -> STOP`. The execution ledger is updated before new work begins and after every checkpoint/failure.

## 15. Local desktop Codex / Razorpay boundary

Local desktop Codex is required only when task evidence depends on approved local provider environment files, CLI/account access, or a separately authorized Test action. It receives a future bounded, copy-paste-ready prompt that references credential locations only, never values. The Systems Architect writes that prompt only after the corresponding Parent/Product gate; no such prompt is part of Phase C.

The local lane may not change core source unless its future assignment explicitly names a branch/diff. G1 is read-only. G3 is Test-only and action-limited. Live actions and production enablement are outside both. Results return as redacted evidence for Systems Architect ACCEPT/CORRECT/STOP review.

## 16. Circuit breakers

Any listed breaker stops the run and returns exact evidence plus the last validated checkpoint:

```text
PRODUCT_DECISION_REQUIRED
ARCHITECTURE_CONFLICT
UPSTREAM_CONTRACT_CONFLICT
C04_SETTLEMENT_HANDOFF_MISSING
FINANCIAL_AUTHORIZATION_GAP
CALLER_AUTHORED_FINANCIAL_TRUTH
CROSS_BRAND_ISOLATION_FAILURE
SENSITIVE_FINANCIAL_DATA_LEAK
DUPLICATE_LEDGER_CREATED
DUPLICATE_VAULT_CREATED
DUPLICATE_BRAND_RETURN_PATH
UNAUTHORIZED_SCHEMA_MIGRATION
DESTRUCTIVE_MIGRATION_REQUIRED
HISTORICAL_FINANCIAL_TRUTH_FABRICATED
PAYMENT_DUE_DATE_DRIFT
UNSUPPORTED_RAIL_EXECUTED
TDS_OR_TAX_LOGIC_INVENTED
NON_AUTHORITATIVE_DOCUMENT_PRESENTED_AS_OFFICIAL
PROVIDER_SUCCESS_FABRICATED
RAZORPAY_UNAUTHORIZED_MUTATION
BRANCH_DIVERGENCE
RESUME_STATE_INVALID
PRODUCTION_RUNTIME_FAILURE
```

Provider phases additionally stop for unverified webhook mapping/signature/idempotency, unexpected event ordering, ambiguous create without safe lookup, source-refund capability mismatch, mode ambiguity, or any action outside the approved envelope.

## 17. Developer handoff path

1. Parent accepts or corrects this exact architecture/plan commit and chooses execution mode.
2. Parent separately accepts migration proposal gates and any phase segment.
3. Systems Architect freezes the exact bounded assignment and only then writes the relevant runner handoff.
4. Product/User manually relays any required local desktop prompt.
5. The execution worker tests, commits, updates evidence, and stops at the named checkpoint.
6. Systems Architect reviews and returns `ACCEPT`, `CORRECT`, or `STOP`; later phases are not implied.
7. Merge, provider action, and production enablement remain separately authorized.

## 18. Remaining blockers and next decision

```text
REMAINING_PRODUCT_BLOCKERS_FOR_ARCHITECTURE = NONE
REMAINING_PRODUCT_BLOCKERS_FOR_PROVIDER_NEUTRAL_FIRST_SLICE = NONE
```

Architecture/execution dependencies still open:

- Parent acceptance of this Phase C commit and execution-mode choice;
- execution-time head revalidation and Campaign Manager entity-scope proof;
- human acceptance of M1/M2 before their phases;
- Campaign NET_45/60 correction and accepted C-04 canonical backend handoff before P4;
- C-04 frontend handoff for its specific joint UI work;
- RZ-G1 through G4 and BP-RZ debt for provider-enabled acceptance;
- qualified India withholding authority if required before real payout production.

The exact next Parent decision is to accept or correct the Phase C architecture, finite plan, migration ceilings, split dependency gates, first-slice gate, and `HYBRID_RUN` recommendation. It must not authorize runtime implicitly.
