# CREATOR AUDIENCE V0 — FINAL ACCEPTANCE CORRECTION 1 LOCAL CODEX PROMPT V1

`CREATOR_AUDIENCE_V0_FINAL_ACCEPTANCE_CORRECTION_1_LOCAL_CODEX_PROMPT_V1`

You are the authorized external Local Codex runner for one bounded Creator Audience V0 final-acceptance correction.

The prior P0–P4 runner report is useful evidence, but final technical acceptance is withheld because repository inspection found material mismatches between the accepted architecture/gates and the published implementation.

This is a correction of the accepted Creator Audience V0 implementation. It is not new Product work.

Do not start Content or any other Creator Centre workspace.

---

## 1. EXACT STARTING AUTHORITY

Fetch/prune normally and verify exact local/fetched equality, ancestry, and clean worktrees before mutation.

Backend:

```text
repository = Piyush1087/creator-commerce-backend-v2-clone
branch     = program/creator-audience-v0-backend
SHA        = 885e1a57a2c0fff75db162216900684303256b9f
tree       = fffe8bd7fcbe99020ab6f4c50c1c5f91af78015e
```

Frontend:

```text
repository = Piyush1087/creator-commerce-frontend-v2-clone
branch     = program/creator-audience-v0-frontend
SHA        = 39799c75abc89e47d6a3526fb05f83d4cfbef585
tree       = 4d76d7766d82153c60fafd6963f64740b729e9de
```

Authority:

```text
repository = Piyush1087/dummy_tcs
branch     = program/creator-audience-v0-authority
SHA        = 87577206c22c3ac414bfb56963ae6721b8e723dd
tree       = fa15f2380d37bff0f66a285885d721629fe8b7a0
```

Required accepted ancestors include:

```text
P1 backend = 843faa5cf6936c0a5e8895a703cf8bdf3921e246
P2 backend = 1eba8f80c5f98bcd2bc5b015985a4b01292ed81d
P3 frontend = 24a97eafd2da4e6f98282b10916adb5758c3017f
P3 authority = 13ee2cdf6c17bdc06637364d322ec0b08c4841ce
```

If any identity differs, any worktree is dirty, or ancestry fails, stop with:

```text
CREATOR_AUDIENCE_FINAL_CORRECTION_STARTING_STATE_MISMATCH
```

Do not reset, clean, stash, discard, overwrite, or rewrite history.

---

## 2. FINAL REVIEW DISPOSITION

Preserve:

```text
P0 = ACCEPTED
P1_SCHEMA_AND_MIGRATION_FOUNDATION = ACCEPTED
P3_PRODUCT_UX = ACCEPTED

P2_RUNTIME_ACCEPTANCE = REOPENED_FOR_CORRECTION
P4_INTEGRATED_ACCEPTANCE = REOPENED_FOR_CORRECTION

CREATOR_AUDIENCE_V0_FINAL_ACCEPTANCE = NO
```

The prior report is not rejected wholesale. Preserve all evidence not invalidated by the findings below.

---

## 3. ACCEPTED PRODUCT — DO NOT REOPEN

Preserve the frozen Product clarifications:

- Audience V0 is read-only and deterministic.
- Owner, Manager, and Assistant have explicit `INSIGHTS_AUDIENCE_READ`.
- Assistant receives no Settings/source/refresh/purge mutation authority.
- Observed `followers_count` may appear as account context but does not make a follower demographic cohort usable.
- A cohort is usable only with at least one usable demographic dimension.
- Counts may display when valid; percentages require a valid denominator.
- Audience Highlights are audience-level, appear before the cohort section, remain visible across cohort switching, are optional, deterministic, evidence-backed, and capped at three.
- No Audience manual refresh.
- Creator Settings owns connection lifecycle.
- Internal Creator-source purgeability is required; no public delete-data endpoint/UI is authorized.
- No model/LLM.
- No Content, Creator Brand, Portfolio, Commercial Setup, Media Kit, Persona, customization, or editing.

---

## 4. ACCEPTED ARCHITECTURE — DO NOT WEAKEN

```text
ONE shared DE runtime
ONE shared Intelligence execution/generation/current runtime
ONE shared scheduler/coordinator
typed BRAND / CREATOR owner scope
no synthetic Brand
no parallel Creator current store
no direct current-row mutation outside the accepted transition runtime
verified executable processor/output bundle ownership
transition validation + canonical locking + optimistic/CAS semantics
failure-current preservation
exact tenant/account/authorization-generation fencing
```

Reuse and extend existing shared services rather than cloning or bypassing them. The accepted Brand Instagram C4 path is the reference pattern:

```text
IntelligenceExecutionService
→ ProcessorWorkerService
→ verified ContractRuntimeRegistry bundle
→ processor success persistence hook
→ IntelligenceGenerationRepository
→ IntelligenceCurrentStateRepository canonical locks
→ PersistenceTransitionValidator
→ IntelligenceTransitionService
```

Creator support must be added to that shared path through the accepted typed owner scope. Do not force Creator IDs into Brand IDs.

---

## 5. CONFIRMED DEFECTS

### DEFECT A — shared Intelligence runtime bypass

Published file:

```text
src/features/creator-audience/creator-audience.repository.ts
```

currently inserts directly into:

```text
intelligence_subjects
intelligence_actions
intelligence_object_generations
intelligence_component_generations
intelligence_current_components
intelligence_evidence_references
```

and performs an `ON CONFLICT ... DO UPDATE` against current rows.

This bypasses the accepted verified bundle, execution/attempt lifecycle, canonical current locking, persistence-transition validation, and `IntelligenceTransitionService` CAS semantics.

The fact that the rows live in shared tables does not make this shared-runtime reuse.

### DEFECT B — persistence-time authorization fence absent

`CreatorAudiencePipelineService` checks/project/acquires credentials before provider work, but `CreatorAudienceRepository.publish` does not transactionally revalidate/lock the exact current `CreatorSocialIntegration` account and authorization generation before Capture completion/Evidence/current publication.

A same-account reconnect, disconnect, token change, or generation increment during the provider read can therefore allow stale work to publish.

### DEFECT C — freshness and failure degradation are not durable consumer truth

The normalizer calculates freshness during processing, where `now` is normally equal to `capturedAt`, and the consumer returns persisted freshness without recalculating it at read time. A current can therefore remain `CURRENT` after the 192-hour stale boundary.

Provider failure marks a Capture failed and returns an in-process degraded value, but the authenticated GET consumer does not derive later failed processing state from shared execution/sync truth. A later read can show the preserved current without truthful `FAILED/currentPreserved` degradation.

### DEFECT D — P4 vertical proof bypasses the production pipeline

Published fixture:

```text
scripts/p4-creator-audience-browser-fixture.ts
```

directly instantiates `CreatorAudienceRepository` and calls `publish`. It does not exercise:

```text
Creator credential fence
provider-neutral provider DI
CreatorAudiencePipelineService
shared execution/worker/bundle runtime
shared scheduler claim/completion
persistence-time generation fence
```

The API/UI proof is real from the database onward, but it is not the required source-fixture-to-current vertical slice.

### DEFECT E — P1 PostgreSQL regression closure is incomplete

P1 changed owner scope across shared DE/Evidence/Intelligence/scheduler persistence. The broad test invocation reported 38 opt-in database files / 442 tests skipped, while only the new owner-scope and Creator Audience PostgreSQL files were explicitly enabled later.

Parent required the planned full affected Brand regression for P1. The correction must run every affected shared/Brand/Offering/Instagram PostgreSQL regression, or provide and execute an exact manifest proving why a skipped database file is outside the changed persistence surface.

---

## 6. AUTHORIZED CORRECTION SCOPE

Authorize only the source/test/docs work required to correct Defects A–E.

Expected backend surfaces include:

- shared Intelligence subject/execution ports and types;
- execution creation and processor worker integration;
- verified contract/runtime registry;
- generation/current repositories;
- transition validator/service;
- Creator Audience processor, bundle, semantic validator, and persistence hook;
- Creator Audience DE repository/pipeline;
- Creator credential/account/generation fence;
- sync coordinator processing-state projection;
- authenticated Creator Audience consumer;
- related architecture/unit/PostgreSQL/runtime tests;
- P4 fixture/harness.

Frontend source changes are not expected unless a truthful processing/freshness DTO correction requires a bounded parser/render adjustment. Preserve accepted P3 layout and interaction.

No new migration is expected. The accepted 101-migration schema already has typed owner scope. If a migration or schema change becomes necessary, stop with:

```text
CREATOR_AUDIENCE_FINAL_CORRECTION_SCOPE_EXPANSION_REQUIRED
```

and explain exactly why existing owner-scope/current/sync persistence cannot represent the correction.

---

## 7. REQUIRED CORRECTED RUNTIME

### 7.1 DE acquisition and persistence

Preserve:

```text
credential/account/generation fence
→ provider-neutral audience fixture/read
→ Resource
→ RUNNING Capture
→ bounded source material
→ transactionally revalidated current integration fence
→ COMPLETED Capture with authoritative capturedAt
→ Evidence
```

At the final persistence boundary, lock or otherwise atomically validate the current Creator integration and prove:

- exact Creator profile;
- exact integration;
- exact stable provider account;
- exact authorization generation;
- valid active authorization/capability as required by accepted acquisition semantics;
- no disconnect/account-change/generation-change occurred during work.

If the fence changed, publish no completed Capture, Evidence, Object generation, or current transition. Preserve prior current.

### 7.2 Shared Intelligence execution

After DE/Evidence succeeds:

```text
create-or-return shared Intelligence execution
→ Creator Audience verified processor bundle
→ exact active owner/subject/component scope
→ deterministic processor output
→ persistence hook validation
→ canonical current locks
→ generation repository
→ transition validator
→ transition/CAS apply
→ completed execution/attempt
```

Requirements:

- a first-class Creator subject/owner scope in shared runtime APIs;
- unchanged Brand and Offering call contracts or backward-compatible adapters;
- immutable, verified Creator Audience bundle/contract ownership;
- deterministic stable execution/generation identities and replay;
- component Evidence subsets remain truthful;
- no direct SQL inserts/updates to Intelligence action/object/component/current/transition rows from the Creator Audience feature repository;
- no direct current upsert;
- no parallel runtime.

The Creator Audience repository may own source-specific DE preparation/read mapping, but publication of Intelligence generations/current must go through shared verified runtime services.

### 7.3 Freshness and processing truth

The authenticated consumer must calculate or project freshness at read time from authoritative capture/generation time and the 192-hour threshold.

Prove boundary behavior immediately before, at, and after 192 hours.

The consumer must project shared/sync execution state separately from preserved current:

- processing while current exists;
- later provider/execution failure while current exists;
- current preserved after failure;
- same-account reconnect/new authorization generation while prior valid current awaits replacement;
- disconnected/reauth-required state with retained same-account current where Settings has not deleted data;
- different-account identity conflict must not relabel old account data as the new account's current.

Do not convert failure/unavailability to zero or erase valid same-account current merely because authorization degraded. Do not show stale generation as freshly generated.

If the frozen Product/Settings contracts genuinely cannot distinguish same-account preservation from different-account identity, stop with an exact Product ambiguity rather than guessing.

---

## 8. REQUIRED TEST AND DATABASE EVIDENCE

### 8.1 Architecture tests

Add fail-closed tests that inspect imports/calls and prove:

- Creator Audience has no direct `INSERT`/`UPDATE` of shared Intelligence current/generation/action/transition tables;
- shared verified bundle and transition services are used;
- no Creator-only runtime/current/scheduler exists;
- Brand/Creator Settings adapters remain domain-isolated.

Do not rely only on string checks when runtime tests can prove behavior.

### 8.2 PostgreSQL runtime proof

On clean 101-migration PostgreSQL 17, prove exact:

```text
Creator integration
→ Resource
→ completed Capture/capturedAt
→ Evidence
→ shared execution
→ processor execution/attempt
→ verified Object/component generations
→ transition action/outcomes
→ current components
→ strict consumer
```

Assert row counts, IDs, hashes, Evidence references, execution/attempt status, transition outcomes, current revision, and exact owner scope.

Exact replay must create no duplicate source acquisition, execution, attempt, generation, transition, or current rows.

### 8.3 Mid-flight fence matrix

Use controlled fixture/provider DI barriers to change state after provider work starts but before persistence:

- authorization generation increment;
- disconnect;
- provider account substitution;
- capability/token invalidation.

Each must fail atomically with:

- no new completed Capture;
- no new Evidence;
- no Object/component generation;
- no transition/current replacement;
- previous current preserved.

### 8.4 Freshness/failure matrix

Use a controllable clock or explicit read-time input to prove:

- 191h59m59s = current;
- 192h boundary follows the frozen inclusive/exclusive rule documented by the implementation;
- after 192h = stale;
- failure after a successful current leaves values intact;
- a subsequent authenticated GET shows degraded processing/current-preserved truth;
- successful later execution clears degradation and advances current normally.

### 8.5 Full affected database regression

Enumerate every opt-in PostgreSQL test file touching:

- shared DE/Evidence;
- Brand Intelligence generation/current/candidates/transitions;
- Product/Offering Intelligence;
- Brand Instagram B1–C4, scheduler, deletion, and consumer paths;
- owner-scope uniqueness/lineage/backfill;
- Creator Audience.

Run them enabled against isolated task databases as required by their guards. Return an exact file/test/pass/fail/skip manifest.

No affected test may remain skipped merely because the default suite disables database tests. A skipped file needs a concrete changed-surface exclusion rationale in the immutable report.

### 8.6 Builds/integrity

- Prisma generate/validate;
- migration status current at exactly 101;
- backend production build and boot;
- frontend typecheck/tests/build if DTO/frontend changes;
- scoped lint/format;
- `git diff --check`;
- dependency/lockfile identity;
- secret/raw-provider/forbidden-artifact scan.

---

## 9. CORRECTED P4 INTEGRATED ACCEPTANCE

Replace the direct repository fixture with a guarded provider-neutral production-path harness.

Required path:

```text
authenticated/scheduled Creator execution
→ Settings-compatible credential fence
→ deterministic provider DI fixture
→ Creator Audience pipeline
→ DE/Capture/Evidence
→ shared verified Intelligence runtime
→ current
→ authenticated backend API
→ production frontend
```

The harness may use synthetic local credentials and provider DI, but it must not call Meta or a model. It must fail if an external host is contacted.

Run the real API/UI matrix at:

```text
390
767
768
1440
```

Preserve keyboard/focus, overflow, and Axe serious/critical = 0.

Add one post-success failed provider execution and prove through a later real authenticated GET/UI read that current is preserved and degradation is visible.

Add one read after the stale boundary and prove stale truth in API and UI.

---

## 10. PROHIBITED WORK

Do not:

- change frozen Product hierarchy or role policy;
- add Audience manual refresh;
- add public delete-data mutation;
- add a model/LLM;
- add Content or another workspace;
- create a parallel runtime/current store/scheduler;
- use direct current-row writes;
- weaken contract verification, transition validation, CAS, Evidence, Capture, or tenant fences;
- create a new migration without stopping for scope expansion;
- make live Graph/Meta/OAuth/model calls;
- persist raw provider payloads or credentials;
- merge to `development`;
- deploy;
- force push or rewrite history.

---

## 11. PUBLICATION AND AUTHORITY UPDATE

Only after every mandatory gate passes:

1. commit bounded backend changes;
2. commit frontend only if required;
3. update the existing single Creator Audience ledger;
4. add:

```text
CREATOR_AUDIENCE_V0_FINAL_ACCEPTANCE_CORRECTION_1.md
```

5. correct the P4 final evidence, developer handoff, and implementation-learning report where the prior direct-runtime claims were inaccurate;
6. archive this exact prompt under the existing runner-prompts directory;
7. normal non-force push only;
8. fetch/prune independently;
9. prove local/fetched SHA/tree equality and accepted ancestry;
10. leave all worktrees and task runtime resources clean.

Do not mark final Product/technical acceptance yourself. Return evidence-ready status.

---

## 12. IMMUTABLE RETURN CONTRACT

Return:

```text
CREATOR_AUDIENCE_V0_FINAL_ACCEPTANCE_CORRECTION_1_EXTERNAL_LOCAL_CODEX_REPORT_V1
```

Include:

```text
A. exact starting SHA/tree/worktree/ancestry
B. standards and authority reconciliation
C. final-review findings independently confirmed or corrected
D. exact changed files and diff statistics
E. shared owner-scoped Intelligence runtime design
F. verified Creator Audience bundle/processor/persistence hook
G. proof direct Intelligence/current writes were removed
H. commit-time integration/account/generation fence
I. dynamic freshness and durable processing-degradation projection
J. same-account preservation and different-account non-substitution
K. exact provider fixture → DE → Evidence → execution → transition → current lineage
L. replay/idempotency row counts
M. mid-flight fence rejection matrix
N. failure-current and stale-current API/UI proof
O. complete affected PostgreSQL regression manifest
P. Brand/Offering/Instagram regression results
Q. Creator role/tenant/account/generation/purge results
R. real authenticated browser/Axe matrix
S. schema/migration/dependency identity
T. builds/lint/format/diff/secret scans
U. backend/frontend/authority publication and fetch-back equality
V. cleanup
W. correction accounting
X. exact blocker, if any
```

On success end:

```text
RESULT =
READY_FOR_CREATOR_AUDIENCE_V0_FINAL_ACCEPTANCE_REVIEW

P0 = ACCEPTED
P1_SCHEMA_AND_MIGRATION_FOUNDATION = ACCEPTED
P2_RUNTIME_CORRECTION_EVIDENCE_READY = YES
P3_PRODUCT_UX = ACCEPTED
P4_INTEGRATED_CORRECTION_EVIDENCE_READY = YES

CREATOR_AUDIENCE_V0_IMPLEMENTATION_ACCEPTED =
NO — AWAITING CREATOR TECHNICAL SA / PARENT FINAL REVIEW

CONTENT = NOT_STARTED
OTHER_CREATOR_WORKSPACES = NOT_STARTED

LIVE_GRAPH_CALLS = NONE
LIVE_MODEL_CALLS = NONE
META_PROVIDER_MUTATIONS = NONE
RAW_PROVIDER_DATA_EXPOSED = NO

NEW_MIGRATIONS = NONE
DEVELOPMENT_MERGE = NOT_PERFORMED
DEPLOYMENT = NOT_PERFORMED

NEXT_ACTION =
PARENT RETURNS THIS IMMUTABLE REPORT
FOR CREATOR AUDIENCE V0 FINAL ACCEPTANCE REVIEW
```

If the correction requires schema migration, Product reinterpretation, a parallel runtime, or cannot preserve Brand behavior, stop with the exact circuit breaker and smallest required decision.

