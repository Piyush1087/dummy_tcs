# C-03 — Creator Campaign Participation / Apply

## Hybrid Autonomous Execution Plan V1

**Status:** PLANNED — AWAITING SA INITIATION  
**Execution owner:** C-03 Systems Architect  
**Product authority:** `docs/organization/product_decisions/c03_creator_campaign_participation_product_decision_register_v1.md`  
**Primary orchestration environment:** ChatGPT Work / cloud execution context  
**Implementation runners:** bounded Codex runners after explicit architecture/execution authorization  

## 1. Operating principle

C-03 should use the successful C-05 operating pattern:

```text
Parent Product freeze
→ SA read-only systems audit
→ SA architecture + finite execution plan
→ Parent gate
→ HYBRID AUTONOMOUS RUN
→ SA orchestrates specialists + bounded Codex runners
→ SA reviews/corrects checkpoints autonomously
→ joint acceptance
→ developer handoff / module closeout
```

The hybrid autonomous run must **not begin until the execution base is fully audited and ready**.

The parent should not become the implementation-detail routing layer once autonomous execution is authorized. The C-03 SA owns bounded orchestration and may continue through checkpoints without repeated parent prompts unless a circuit breaker is reached.

## 2. C-03 Systems Architect mission

The C-03 Systems Architect owns end-to-end module coherence for Creator Campaign Participation / Apply.

It must transform frozen Product authority into one canonical backend/frontend implementation that:

- consumes Brand/shared Campaign authority rather than forking it;
- uses canonical Application entities rather than the legacy creator-collaboration applicant pipeline;
- consumes C-01 entry/continuation/auth authority;
- consumes C-05 Creator subject/team/Instagram/shell authority;
- hands accepted Applications into Collaboration without implementing post-acceptance Collaboration behavior;
- retires incompatible legacy Creator Campaign/Apply assumptions;
- preserves deterministic traceability, migrations, security, tests and handoff evidence.

## 3. Authority order

1. frozen C-03 Product Decision Register;
2. frozen Brand/shared Campaign + Applicants authority;
3. C-01 accepted Product/architecture/runtime authority;
4. C-05 accepted Product/architecture/runtime authority;
5. Collaboration handoff authority, subject to the explicit C-03 decision moving initial NEGOTIABLE Creator proposal capture into C-04 Negotiation;
6. current canonical backend/frontend implementations of those authorities;
7. most recent legacy Creator Campaign/Apply implementation as primary legacy behavior/UX reference;
8. older legacy Creator Campaign/Apply implementations as learning-only references.

A newer legacy/destination implementation does not silently supersede accepted authority.

## 4. Stage A — mandatory read-only preflight and current-state audit

No code changes, migrations, commits, pushes, UI generation or Product redesign are authorized during Stage A.

The SA must return `C03_SYSTEMS_UNDERSTANDING_AND_EXECUTION_BASE_AUDIT_V1` covering all items below.

### 4.1 Repository and commit authority

Verify remote canonical heads rather than assuming remembered SHAs:

- `Piyush1087/dummy_tcs`;
- `Piyush1087/creator-commerce-backend-v2-clone`;
- `Piyush1087/creator-commerce-frontend-v2-clone`.

Record:

- exact current remote branch SHAs;
- accepted C-01 runtime and docs/handoff SHAs;
- accepted C-05 runtime and docs/handoff SHAs;
- Campaign/Applicants/Collaboration authority document locations;
- C-03 Product Decision Register commit/path;
- any relevant newer development commits and whether they change authority-relevant surfaces.

### 4.2 Legacy Creator Campaign inventory

Identify all materially distinct Creator Campaign/Apply implementations.

Classify:

- newest version = `PRIMARY_LEGACY_REFERENCE`;
- older versions = `LEARNING_REFERENCE_ONLY`.

Map each version across:

- routes;
- page/detail states;
- Apply flow;
- eligibility/invitation behavior;
- backend endpoints;
- persistence model;
- Application/Collaboration coupling;
- history/withdraw behavior;
- tests;
- UI artifacts where useful.

Explicitly identify what must be retired, including legacy handle identity, old creator-collaboration applicant persistence, inventory Apply gating, sibling supersession assumptions, stale Marketplace behavior and obsolete commercial/escrow semantics.

### 4.3 Canonical domain audit

Audit current implementation of:

- Campaign aggregate/lifecycle/visibility;
- Campaign Asset + Offering projections;
- Brief ownership and Asset association;
- Applicants/Application entities, snapshots, statuses and policies;
- eligibility/invite services;
- Collaboration provisioning from approved Application;
- C-01 continuation;
- C-05 Creator subject/team/Instagram capability projection;
- Notification event infrastructure;
- document/PDF generation capability if any;
- attribution/UTM infrastructure if any.

### 4.4 Environment readiness audit

Before hybrid execution can be authorized, prove the implementation environment is ready.

Required checks:

- repository read/write access is available;
- exact base branches and checkpoint branch strategy are defined;
- no uncommitted/dirty shared worktree will be reused accidentally;
- each implementation runner can use an isolated working copy/worktree/cloud workspace;
- no force-push requirement exists;
- Node/npm/package-manager versions are known and runnable;
- repository-local Prisma/versioning is known;
- backend test suite can start;
- frontend test/build/typecheck/lint can start;
- disposable PostgreSQL environment is available;
- complete migration replay can be executed on a fresh database;
- integration/runtime UI environment can be started;
- required browser/runtime tooling is available;
- Stitch/UI-reference path is available when visual generation is later authorized;
- Codex implementation runner access is available independently of any concurrent Brand Home runner, or execution can be isolated so the two do not share local worktrees/Docker resources;
- secrets are not required in Git;
- live Meta test identity is not assumed available;
- provider-neutral fixtures/test states exist or a bounded plan exists for testing Instagram access states without unsafe live actions;
- no AWS or production mutation capability is needed for C-03 acceptance.

### 4.5 Environment classification

Every required capability must be classified:

```text
READY
READY_WITH_BOUNDED_FIX
ENVIRONMENT_BLOCKED
NOT_REQUIRED_FOR_C03
```

Hybrid autonomous execution is forbidden while a core capability is `ENVIRONMENT_BLOCKED`.

### 4.6 Initial gap register

Return complete gaps as:

```text
C03-GAP-xx
area
observed
required
classification
proposed owner
blocks_architecture
blocks_hybrid_execution
```

Do not stop after the first gaps.

## 5. Stage B — architecture and finite execution plan

After Stage A, the SA must produce:

- `C03_PRODUCT_CONTRACT_REVALIDATION_V1` — Product register consumed without reopening frozen decisions;
- `C03_CROSS_CONTRACT_RECONCILIATION_V1`;
- `C03_ARCHITECTURE_FREEZE_V1`;
- `C03_FINITE_EXECUTION_PLAN_V1`.

No implementation begins until the parent accepts the architecture and finite plan.

### 5.1 Architecture must explicitly freeze

At minimum:

- canonical Creator Campaign read/detail API projection;
- Opportunity Access Gate separating commercial visibility from public teaser state;
- PUBLIC / ELIGIBLE / INVITE authorization rules;
- stable Creator subject vs actor authorization;
- invitation identity and token handling;
- C-01 continuation + attribution persistence;
- canonical Application creation transaction;
- immutable Application snapshot contents;
- Campaign Asset × Brief validity;
- duplicate/reapply/Application-limit enforcement;
- idempotency/concurrency strategy;
- withdraw vs Brand-decision race behavior;
- notification event boundary;
- downloadable Application Brief Pack generation/storage/access boundary;
- Creator Applications/history projection;
- exact approved-Application → Collaboration handoff cardinality;
- frontend state architecture and backend-authoritative blocked reasons;
- migration/compatibility treatment of legacy applicant records;
- telemetry/security/privacy boundaries;
- stale legacy routes/components/tables to retire or quarantine.

## 6. Gate B — parent authorization

Hybrid autonomous execution may begin only when all are true:

```text
C03_PRODUCT_LOGIC = FROZEN
C03_SYSTEMS_AUDIT = ACCEPTED
C03_ARCHITECTURE = ACCEPTED
C03_FINITE_EXECUTION_PLAN = ACCEPTED
C03_EXECUTION_BASE = READY
```

The parent then issues one bounded authorization:

`C03_HYBRID_AUTONOMOUS_EXECUTION = AUTHORIZED`

After this point, the SA should continue autonomously through the finite plan unless a circuit breaker is reached.

## 7. Hybrid autonomous execution model

### 7.1 Orchestration authority

ChatGPT Work SA remains the orchestration authority throughout the run.

It may:

- create bounded specialist assignments;
- launch bounded Codex implementation runners;
- review returned diffs/tests/artifacts;
- issue correction prompts;
- sequence backend/frontend/UI/security work;
- create checkpoint branches/commits under the accepted finite plan;
- update execution ledgers;
- progress through internal gates without asking the parent for routine approval.

It may not delegate Product or architecture authority to Codex.

### 7.2 Implementation runner rules

Every Codex assignment must state:

- exact repository and base SHA;
- exact branch/worktree;
- exact scope/files/contracts;
- authority documents;
- forbidden changes;
- required tests/runtime evidence;
- commit/push policy;
- required return format.

Codex must not infer missing Product decisions or broaden scope.

### 7.3 Isolation rule

C-03 must not collide with concurrent Brand Home or other module execution.

Preferred:

- cloud/isolated runner environments; or
- separate local worktrees and isolated Docker/database resources.

If only one safe local Docker/runtime environment is available, serialize the local Codex runtime portions rather than sharing mutable state.

## 8. Suggested autonomous execution checkpoints

Exact naming may be refined by the SA, but the finite plan should resemble:

### P0 — execution-base lock

- reverify base SHAs immediately before first write;
- create checkpoint branches/worktrees;
- establish ledger;
- prove clean state.

### P1 — canonical backend/Application architecture implementation

- Creator opportunity/detail projection;
- access/commercial gating;
- invitation/eligibility integration;
- canonical Application command;
- Asset × Brief validation;
- actor/subject authorization;
- limits/reapply/idempotency/concurrency;
- immutable snapshot;
- attribution;
- notification events;
- Collaboration provisioning compatibility;
- migrations/legacy compatibility.

### P2 — frontend state contract + UX/UI references

- state matrix for guest/authenticated/no-IG/eligible/ineligible/invited/application states;
- Campaign Opportunity Page information architecture;
- Brief/Asset SideDrawer projections;
- Apply optimized flow;
- My Applications;
- commercial secrecy states;
- responsive behavior;
- accessibility;
- Stitch references where accepted visual reconciliation requires them.

P2 may overlap bounded portions of P1 only after the API/state contract required by frontend is frozen.

### P3 — backend runtime acceptance checkpoint

- fresh PostgreSQL migration replay;
- scoped/unit/integration tests;
- concurrency/replay tests;
- legacy compatibility tests where required;
- security/privacy checks;
- no production/AWS.

### P4 — frontend implementation/reconciliation checkpoint

- canonical page/routes;
- progressive visibility/access states;
- drawers;
- Apply/review/submit;
- history/withdraw;
- C-01 return-to-origin behavior;
- attribution continuity;
- responsive/accessibility reconciliation;
- remove/quarantine dormant legacy Marketplace/Campaign UI where required.

### P5 — Creator Brief Pack checkpoint

- deterministic Application Brief Pack generation;
- immutable Application-snapshot source;
- authenticated authorization;
- historical availability;
- brand/campaign/asset/brief/application context;
- no dependence on mutable live Brief state for historical pack content.

### P6 — joint runtime + edge-case acceptance

Execute the complete Product Decision Register edge-case matrix, including commercial visibility secrecy.

At minimum prove:

```text
Guest
→ no commercial values

Signed-in / Instagram disconnected
→ no commercial values
→ recovery CTA

PUBLIC + Instagram connected
→ commercial values may unlock
→ Apply subject to application-level rules

ELIGIBLE_ONLY + Instagram connected + ineligible
→ commercial values remain hidden
→ Apply blocked

ELIGIBLE_ONLY + Instagram connected + eligible
→ commercial values unlock
→ Apply may proceed

INVITE_ONLY without valid invitation
→ commercial values hidden
→ Apply blocked

INVITE_ONLY + valid invitation + Instagram connected
→ commercial values unlock
→ Apply may proceed
```

Also run:

- full affected backend/frontend suites;
- build/typecheck/lint;
- clean migration replay;
- desktop/tablet/mobile runtime validation;
- keyboard/accessibility checks;
- security/static checks;
- diff review against finite scope.

### P7 — closeout

Produce:

- exact accepted backend/frontend runtime SHAs;
- execution ledger;
- migration notes;
- open/nonblocking debt;
- provider/live-test limitations;
- developer integration handoff;
- module closeout.

Terminal status target:

`PASS — C03_ACCEPTED`

## 9. Circuit breakers requiring parent escalation

Stop autonomous execution and return to parent if any of the following occurs:

- frozen C-03 Product decisions are internally contradictory or impossible to implement without Product change;
- Brand Campaign/Applicants authority has a critical conflict that cannot be reconciled under the frozen hierarchy;
- C-01 or C-05 accepted invariants would need to be changed rather than consumed;
- Collaboration handoff requires a broader Product change than the explicit NEGOTIABLE proposal-boundary reconciliation already frozen;
- destructive or ambiguous data migration is required;
- unexpected current remote branch drift materially changes the audited base;
- security/privacy issue materially affects Product architecture;
- a core required environment capability becomes unavailable;
- implementation would require live Meta configuration, tokens or an unauthorized test identity;
- scope expansion into C-04, Marketplace, Payouts, Creator Centre, AWS or unrelated Brand modules is necessary.

Routine implementation bugs, test failures, lint issues and bounded architectural implementation corrections are not parent escalations; the SA owns them during the authorized run.

## 10. Explicit prohibitions

Do not:

- deploy to AWS or production;
- modify live Meta configuration;
- create/exchange live provider tokens without separate authorization;
- implement Marketplace;
- implement post-acceptance Collaboration workflows;
- implement payout/KYC;
- create a parallel Creator Campaign/Application persistence system;
- preserve known-wrong legacy behavior merely for compatibility;
- use public Product stock as Apply eligibility;
- expose commercials before the Opportunity Access Gate;
- force-push canonical branches;
- place secrets in Git;
- silently weaken acceptance tests to accommodate regressions.

## 11. Success criteria

C-03 can close only when:

```text
Product authority consumed without reopening
Architecture frozen and implemented
Canonical Application path replaces legacy applicant pipeline
Commercial secrecy/access gate proven
C-01 continuation proven
C-05 subject/team/Instagram authorization proven
Campaign Asset × Brief integrity proven
Application limits/reapply/concurrency proven
Approved Application → Collaboration handoff proven
Application Brief Pack proven
Backend + frontend runtime accepted
Migration chain replayed
No blocking security issue
Exact immutable SHAs recorded
Developer handoff complete
```

The SA may then return:

```text
PASS — C03_ACCEPTED
C03_SYSTEMS_ARCHITECT_RETIREMENT = APPROVED_AFTER_CLOSEOUT
```
