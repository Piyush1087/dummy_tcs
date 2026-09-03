# C-03 Finite Execution Plan V1

**Artifact:** `C03_FINITE_EXECUTION_PLAN_V1`
**Module:** C-03 — Creator Campaign Participation / Apply
**Status:** READY FOR PARENT ACCEPTANCE
**Execution authorization:** NOT YET GRANTED

## 1. Objective and terminal condition

Starting only after the Parent returns all required acceptance/authorization tokens, execute the frozen architecture through seven bounded checkpoints and close with immutable backend/frontend SHAs, migration/runtime evidence, developer handoff, and:

```text
PASS — C03_ACCEPTED
```

No checkpoint may claim PASS from source inspection alone where runtime evidence is required. AWS, production databases, live Meta/provider state, Marketplace, payout/KYC, and post-acceptance C-04 workflow remain out of scope.

## 2. Authorization precondition

The first Product implementation write is prohibited until all are exact:

```text
C03_PRODUCT_LOGIC = FROZEN
C03_SYSTEMS_AUDIT = ACCEPTED
C03_ARCHITECTURE = ACCEPTED
C03_FINITE_EXECUTION_PLAN = ACCEPTED
C03_EXECUTION_BASE = READY
C03_HYBRID_AUTONOMOUS_EXECUTION = AUTHORIZED
```

Stage B proof branches and CI/config/test-harness work do not satisfy or bypass this authorization.

## 3. Fixed repository topology

| Item | Backend | Frontend |
|---|---|---|
| Canonical base | `development@4c5f42858b950b7cd342f8972f99f548f3daa942` | `development@323658d4b147b95b5629ff8d91fa90b8fe9077e4` |
| Integration branch | `c03/campaign-participation-v1` | `c03/campaign-participation-v1` |
| Integration worktree | `<runner-root>/c03/backend-integration` | `<runner-root>/c03/frontend-integration` |
| Specialist branch pattern | `c03/<checkpoint>-<lane>` | `c03/<checkpoint>-<lane>` |
| Runtime port | `3303` | `5303` |

PostgreSQL namespace:

```text
container  tcs-c03-postgres
network    tcs-c03-net
volume     tcs-c03-pgdata
database   tcs_c03
host port  55432
```

Playwright browser cache and artifacts use `<runner-temp>/tcs-c03-*`. No worker shares a worktree, local branch, database, container, network, volume, mutable cache, or port with Brand Home. If isolated resources cannot be proven, runtime work is serialized.

The authenticated GitHub connector is the approved remote checkpoint relay. A worker does not receive or invent repository credentials. Force-push, broad cleanup, and canonical-branch mutation are forbidden.

## 4. Orchestration and worker contract

The persistent Systems Architect owns architecture interpretation, assignment boundaries, diff review, checkpoint acceptance/correction, integration order, evidence ledger, and circuit-breaker decisions. Specialists implement bounded domains; execution runners run exact commands in isolated worktrees.

Every assignment must state:

- repository, exact parent SHA, branch, and worktree;
- authority artifacts and checkpoint objective;
- allowed files and migrations;
- forbidden behavior and out-of-scope modules;
- required tests/runtime evidence;
- commit/push rule and return schema;
- no Product or architecture inference authority.

Routine compile, lint, test, fixture, migration, responsive, and contract defects receive bounded correction prompts without Parent interruption. A checkpoint allows the initial pass and two correction passes. The SA may split/reassign a still-bounded implementation after that; Parent escalation occurs only for a defined circuit breaker, not an ordinary defect. Stitch has its separate one-structural-correction limit.

## 5. Planned migrations

The only planned C-03 migration families are:

```text
20260910120000_c03_opportunity_application_foundation
20260910121000_c03_application_handoff_notifications
```

The first owns additive Campaign/Brief convergence, invitation/ingress/idempotency, canonical Application columns, snapshot/events, indexes, checks, and triggers. The second owns Application-sourced Collaboration and dual-scope Notifications convergence. A specialist may split one family only when PostgreSQL transaction/lock safety requires it and the SA records the revised finite inventory before code acceptance. Existing 74 migrations are immutable.

## 6. Checkpoint sequence

```text
P0 execution lock
→ P1 canonical backend
→ P2 state contract + UI/UX/Stitch
→ P3 backend runtime acceptance
→ P4 frontend reconciliation
→ P5 Creator Brief Pack
→ P6 joint acceptance
→ P7 closeout
```

P2 preparation may overlap the final bounded portion of P1 only after Opportunity/Application DTOs are frozen. P4 cannot start against guessed APIs. P5 backend projection may begin after immutable snapshot acceptance; final renderer acceptance follows P4 shell integration.

## 7. P0 — execution-base lock

### Work

1. Re-fetch all three remote canonical heads and prove expected ancestry.
2. Create clean isolated integration branches/worktrees from exact bases.
3. Record package-lock hashes, Node/npm/Prisma/Playwright versions, migration count, and dirty-state checks.
4. Re-review Stage B branch-only startup/test-harness repairs; carry them as one explicit baseline checkpoint only if still required on the exact base.
5. Start isolated PostgreSQL, replay existing 74 migrations, and run baseline real-PostgreSQL tests.
6. Prove backend and frontend startup plus a real Chromium request/screenshot.
7. Run representative legacy-data reconnaissance queries against a disposable legacy-shaped fixture; do not access production.
8. Create `C03_EXECUTION_LEDGER_V1` with exact commands, SHAs, run URLs, artifact paths, and resource namespace.

### Exit gate

```text
P0_BASE_SHA_LOCK = PASS
P0_WORKTREE_ISOLATION = PASS
P0_BASELINE_BUILD_TEST_STARTUP = PASS
P0_FRESH_74_MIGRATION_REPLAY = PASS
P0_REAL_POSTGRES_BASELINE = PASS
P0_BROWSER_BASELINE = PASS
P0_LEGACY_RECONNAISSANCE = PASS
```

Any unexpected remote drift, unsafe legacy ambiguity, or unavailable core runner capability stops before feature implementation.

## 8. P1 — canonical backend implementation

P1 is four ordered, independently reviewed packages.

### P1.1 — persistence and Campaign/Brief convergence

Allowed scope: Prisma schema/migrations, migration preflight scripts, canonical Campaign/Asset/Brief adapters, and their tests.

Deliver:

- rich canonical Brief/Deliverable/rights persistence and projection;
- additive canonical Application/subject/actor/selection columns;
- invitation, ingress, command receipt, event, and snapshot foundations;
- ancestry, authority-shape, partial uniqueness, status/snapshot/event immutability guards;
- no edited historical migration and no destructive legacy backfill;
- exact-only compatibility classification/report.

Gate: Prisma format/validate/generate, migration SQL review, fresh replay, legacy-shaped upgrade, constraint-negative tests, and schema architecture tests.

### P1.2 — Opportunity entitlement/read APIs

Allowed scope: C-03 Opportunity module, C-01 continuation extension, C-05 policy/capability extension, canonical read adapters, DTOs, and focused tests.

Deliver:

- one `CampaignOpportunityPolicyService` and discriminated redaction DTO;
- Owner/Manager/Assistant VIEW + APPLY over Owner subject;
- provider-neutral Instagram evaluator/fixtures;
- PUBLIC/ELIGIBLE/INVITE policy with canonical invitation bind/expiry/revoke;
- typed C-01 Campaign continuation and safe ingress attribution;
- Opportunity detail and non-enumerating Opportunities collection;
- no commercial/detailed-Brief field before the gate.

Gate: exhaustive pure policy matrix, controller/service tests, raw-response redaction assertions, invitation token/log/storage checks, continuation regressions, and no live provider calls.

### P1.3 — Application commands and history

Allowed scope: canonical Application service/controllers/repositories, Brand Applicant adapter, events/outbox interface, and focused tests.

Deliver:

- Submit transaction, immutable snapshot, scoped idempotency, same-opportunity policy, both quotas, and attribution conversion;
- My Applications/detail with historical access independent of Instagram;
- serialized Withdraw/Approve/Reject/Expire;
- independent siblings and stable reason codes;
- legacy Creator Apply retirement and read-only compatibility boundary.

Gate: unit/integration tests plus real PostgreSQL duplicate, quota, replay, and terminal-race tests. Mocks cannot accept P1.3 concurrency.

### P1.4 — Collaboration and Notifications handoff

Allowed scope: the narrow Collaboration provisioning port/schema, Application event/outbox, Notification dual-scope extension, and regression tests. No post-acceptance workflow UI or command implementation.

Deliver:

- unique `sourceApplicationId`, removal of Campaign × Creator uniqueness, and immutable handoff input;
- FIXED initialization and NEGOTIABLE `AWAITING_CREATOR_PROPOSAL` with null proposal;
- submitted Brand notification and approved/rejected Creator outputs;
- atomic decision → Collaboration → event → outbox intent;
- no provisional User creation, sibling supersession, stock decrement, or 30/70 initialization.

Gate: two independent approvals produce two Collaborations; approval replay produces one; full affected Collaboration/Notification/Application regression passes.

### P1 checkpoint

SA reviews each package diff and its migration/test evidence, integrates in order, then freezes `C03_BACKEND_API_STATE_CONTRACT_V1` and an immutable P1 SHA. No frontend is allowed to compensate for a backend gap.

## 9. P2 — frontend state contract and bounded UI/UX + Stitch

### Entry

- accepted P1 Opportunity/Application DTOs and reason codes;
- realistic typed fixtures covering all visibility/access/commercial/Application families;
- accepted C-05 shell and Aurora references;
- explicit primary-legacy useful/rejected-semantics manifest.
- current bounded Stitch executor, isolated C-03 project, and export/registry path pass an access-only check; any non-`READY` Stage B classification is cleared before the first generation prompt.

### Work

1. UI/UX freezes an Experience Direction Brief: trustworthy Opportunity dossier, not Marketplace.
2. Frontend freezes route, query, state-to-screen, interaction, responsive, accessibility, and error-code contracts.
3. Stitch generates exactly seven desktop/mobile pairs:
   - `C03-ST-A01-D/M` Opportunities;
   - `C03-ST-A02-D/M` My Applications/multiplicity;
   - `C03-ST-B01-D/M` authorized Opportunity;
   - `C03-ST-B02-D/M` guest/access-gated Opportunity;
   - `C03-ST-B03-D/M` multiple Applications;
   - `C03-ST-C01-D/M` Asset/Brief selection;
   - `C03-ST-C02-D/M` Review/Submit.
4. UI/UX and frontend independently accept each family.
5. Record why drawers, withdrawal, Brief Pack actions, and utilities need no new reference unless a concrete structural gap is found.

Desktop is generated first; mobile derives from the accepted desktop parent. At most one structural correction per family. Any reference that invents Marketplace, payout ranking, stock, fee proposal, legal checkbox, a single `already_applied` state, or leaked commercials fails the frontend semantic gate even if visually polished.

### Exit gate

```text
P2_EXPERIENCE_DIRECTION = ACCEPTED
P2_FRONTEND_STATE_CONTRACT = ACCEPTED
P2_STITCH_14_REFERENCES = ACCEPTED
P2_UIUX_VISUAL_GATE = PASS
P2_FRONTEND_SEMANTIC_ACCESSIBILITY_GATE = PASS
```

## 10. P3 — backend runtime acceptance

Run against the accepted P1 integration SHA on Node 20 and isolated real PostgreSQL:

- locked `npm ci`;
- Prisma format/validate/generate;
- fresh 0→latest migration replay;
- legacy-shaped 74→latest upgrade/reconciliation fixture;
- full backend test suite and production build;
- API startup/health smoke;
- real contention/replay suite;
- response redaction/security/static tests;
- no provider/AWS network dependency;
- clean working tree and diff review.

### Required contention cases

- double Submit same key/same input and same key/different input;
- different keys for same opportunity;
- Owner + Assistant concurrent Submit;
- concurrent third Campaign Application;
- concurrent sixth Brand Application across Campaigns;
- membership removal, Instagram revoke, Campaign/Asset/Brief pause, and invitation revoke/bind versus Submit;
- Withdraw versus Approve/Reject/Expire and Approve versus Reject;
- two sibling approvals and repeated approval;
- snapshot/event immutability and legacy-mutation guard.

P3 emits immutable backend runtime SHA plus machine-readable run evidence. Any failed or skipped required case blocks P4 integration acceptance.

## 11. P4 — frontend implementation and reconciliation

Allowed scope: C-03 routes/API contracts/hooks/components/styles/tests; bounded shared Aurora/shell hardening only when documented by P2. No Brand Home, Marketplace, Creator Centre content, or C-04 screens.

Deliver:

- neutral public Campaign entry and typed C-01 return;
- C-05 `Campaigns` destination with Opportunities/My Applications;
- gated and authorized full Opportunity dossier;
- Asset/Brief explorer and read-only SideDrawers;
- optimized selection/review/explicit Submit;
- independent post-submit Application cards, Withdraw, history, and Collaboration link;
- no-image state and correct Brand identity media;
- backend-code-driven error/recovery behavior;
- subject-aware caches and session-switch clearing;
- no historical route-wide Instagram block.

Gate on Node 20 locked install, typecheck, full tests, build, changed-file lint, and Playwright at desktop, tablet, 390px, and 375px. Browser assertions inspect network payloads, DOM, storage, keyboard/focus, live regions, touch targets, safe-area/bottom-nav clearance, and horizontal overflow. Screenshot comparison informs review but does not replace semantic assertions.

## 12. P5 — Creator Brief Pack

### Backend package

- authorize current Team against stored Application subject;
- expose `CreatorBriefPackV1` from immutable snapshot only;
- `private, no-store`, non-enumerating cross-subject behavior;
- no current Campaign/Brief/Instagram/invitation dependency;
- bounded unavailable response for incomplete legacy snapshots.

### Frontend package

- feature-local deterministic jsPDF renderer;
- Brand/Campaign/Asset/Brief/Application context with appropriate commercial snapshot;
- ordered format-specific Deliverables, guidance, references, rights, and support;
- stable filename and deliberate missing-media treatment;
- no actor/private/attribution/invitation/provider/review material.

Gate: projection contract tests, authorization/history cases, FIXED/NEGOTIABLE and INR/USD fixtures, long text/page breaks, Unicode/special characters, no-image/failure cases, deterministic extraction assertions, rendered-page visual QA, and real browser download.

## 13. P6 — joint acceptance

### Exhaustive policy matrix

The pure Opportunity/Application policy suite generates the complete finite cross-product of:

```text
viewer/account class
× PUBLIC/ELIGIBLE/INVITE visibility
× six Instagram lifecycle states
× eligibility/invitation result
× Campaign/Asset/Brief lifecycle
× Owner/Manager/Assistant/inactive actor
× existing Application status/multiplicity
× Campaign and Brand quota position
× direct/share/invitation/opportunities origin
```

The oracle asserts disclosure shape, `canApply`, stable reason, required recovery, and history access independently. This guards every interaction cell without requiring a browser case for every permutation.

### Runtime risk matrix

Real PostgreSQL/API/browser scenarios cover at minimum all Product-register edge cases: guest continuation, disconnected Instagram, eligible/ineligible, valid/wrong/expired/revoked invite, Brand user, Assistant actor, mid-flow membership/provider/lifecycle changes, invalid Asset/Brief, optimized one-pair flow, Brand-only Asset, replay/concurrency/limits, terminal races, reapply, multiplicity/multiple Collaborations, FIXED/NEGOTIABLE, missing versus zero commercial/support values, attribution survival, notifications, and historical Brief Pack access.

### Full gates

```text
CONTRACT_FIDELITY
MIGRATION_REPLAY_AND_UPGRADE
REAL_POSTGRES_CONCURRENCY
AUTHORIZATION_AND_COMMERCIAL_REDACTION
BACKEND_FULL_SUITE_BUILD_STARTUP
FRONTEND_FULL_SUITE_TYPECHECK_BUILD
DESKTOP_TABLET_MOBILE_BROWSER
KEYBOARD_ACCESSIBILITY
PDF_RENDER
LEGACY_MUTATION_RETIREMENT
C04_HANDOFF_REGRESSION
DIFF_SCOPE_AND_SECRET_SCAN
```

Each records PASS/FAIL/BLOCKED explicitly. A live Meta test identity is not required; provider-neutral persisted fixtures are the accepted proof. No AWS dependency is permitted.

P6 produces immutable accepted backend/frontend candidate SHAs. Corrections return to the owning package and repeat every affected downstream gate.

## 14. P7 — integration, handoff, and closeout

1. Fetch candidates from remote and verify tree/commit identity.
2. Prove candidates descend from the exact canonical bases and contain only accepted checkpoints.
3. Re-run final smoke on the fetched commits.
4. Prepare non-force integration instructions; do not mutate canonical `development` without separate repository-owner authority.
5. Publish:
   - `C03_EXECUTION_LEDGER_V1`;
   - `C03_MIGRATION_AND_ROLLBACK_NOTES_V1`;
   - `C03_DEVELOPER_CODE_INTEGRATION_HANDOFF_V1`;
   - `C03_MODULE_CLOSEOUT_V1`;
   - exact backend/frontend runtime SHAs and remaining nonblocking debt.
6. Record no production/AWS/Meta claims.

Terminal Parent return is allowed only when every required gate is PASS.

## 15. Acceptance ownership

| Gate | Primary reviewer | Independent reviewer |
|---|---|---|
| Product/contract fidelity | Systems Architect | frontend/backend specialists |
| Migration and concurrency | backend/data specialist | Systems Architect/security reviewer |
| Opportunity redaction/invitation | security/backend specialist | Systems Architect/frontend runtime |
| C-01/C-05 integration | integration specialist | Systems Architect |
| UI/UX/Stitch | UI/UX specialist | frontend specialist |
| Frontend semantics/accessibility | frontend specialist | UI/UX + Systems Architect |
| Collaboration handoff | backend/C-04 specialist | Systems Architect |
| Joint runtime | bounded execution runner | Systems Architect |
| Final closeout | Systems Architect | Parent acceptance |

No worker self-accepts a material package without independent review.

## 16. Correction and rollback policy

- Every checkpoint commit is immutable once accepted; corrections are new commits.
- Migration corrections before integration are additive follow-up SQL or a replaced not-yet-shared migration only when no accepted checkpoint/other runner consumed it. Once shared, never rewrite.
- Failed migration tests drop only the explicitly named disposable C-03 database/container/volume.
- Failed frontend/backend candidates remain on their branches; canonical branches are untouched.
- No `reset --hard`, broad recursive deletion, force push, production rollback, or credential repurposing.
- If a baseline repair is later integrated separately, rebase/reconcile by commit ancestry and rerun P0; do not duplicate it.

## 17. Circuit breakers

Stop and return to Parent only if:

- frozen Product is contradictory or cannot be implemented without changed behavior;
- accepted C-01/C-05 invariants must change rather than be consumed;
- shared Campaign/Applicants/C-04 conflict cannot be reconciled within this freeze;
- representative data requires destructive or identity-inferred migration;
- canonical remote drift changes the audited base materially;
- a security/privacy discovery changes Product architecture;
- a core runner/PostgreSQL/browser/checkpoint capability becomes unavailable;
- the bounded Stitch executor/export path cannot be activated before P2;
- live Meta/provider credentials or unauthorized identity are required;
- scope must expand into C-04 workflow, Marketplace, payouts/KYC, Creator Centre, AWS, or unrelated Brand modules.

Ordinary implementation defects, tests, lint, browser layout issues, and bounded contract corrections are not circuit breakers.

## 18. Finite-plan gate

```text
C03_FINITE_EXECUTION_PLAN = READY_FOR_PARENT_ACCEPTANCE
C03_EXECUTION_PACKAGES = P0 + P1.1 + P1.2 + P1.3 + P1.4 + P2 + P3 + P4 + P5 + P6 + P7
C03_HYBRID_AUTONOMOUS_EXECUTION = NOT_YET_AUTHORIZED
```
