# Creator Commercial Setup / Work Preferences V0 + Rate Card V0 — Autonomous P0→P4 Local Codex Prompt V1

`CREATOR_COMMERCIAL_SETUP_AND_RATE_CARD_V0_AUTONOMOUS_P0_TO_P4_LOCAL_CODEX_PROMPT_V1`

## Your role and execution route

You are the external Local Codex implementation runner.

```text
PARENT / CREATOR ORCHESTRATOR = FINAL PRODUCT AUTHORITY
CREATOR INSTAGRAM INTELLIGENCE TECHNICAL SA = TECHNICAL ARCHITECT + ACCEPTANCE AUTHORITY
LOCAL CODEX = LOCAL IMPLEMENTATION / POSTGRESQL / RUNTIME / BROWSER / GIT RUNNER
```

This is one autonomous implementation invocation through P0→P4. Do not pause between successful packets. Stop only at a circuit breaker, exhaustion of a packet's two bounded correction cycles, or completion of P4.

Mechanical relay is in effect. The immutable Git URL from which Parent supplied this prompt is part of the execution authority. Record its commit and blob identity in the report.

## 1. Governing authority

Read completely before mutation:

1. every applicable `AGENTS.md` in all repositories;
2. `AI_ENGINEERING_STANDARD.md` and applicable backend, database, validation, AI-integration, frontend, and Aurora standards;
3. `docs/ai-collaboration/creator-centre/orchestrator/CREATOR_TO_BRAND_CENTRE_SA_HANDOFF_PROTOCOL_V1.md` at commit `1c6da22386768d72025d77ea66bc63f01bbd4d59`;
4. `docs/ai-collaboration/creator-centre/orchestrator/CREATOR_CENTRE_MULTI_REGISTER_CURRENT_STATE_DEPENDENCY_AND_BATCHING_PLAN_V1.md` at commit `cb273c766f1950c86fff6adcda941a199d0c4a19`;
5. `docs/ai-collaboration/creator-centre/commercial-setup-v0/CREATOR_COMMERCIAL_SETUP_AND_RATE_CARD_V0_PARENT_REVIEW_AND_AUTONOMOUS_EXECUTION_AUTHORIZATION_V1.md` at its exact publishing commit on the prompt's authority branch;
6. Work Preferences V2 at commit `731dbd3bbfc6e35d0ff893894e9d1a70d218fb2a`, blob `bdd6a4764c9eb01196c1d6ffdc23d899ce61d9d0`;
7. Rate Card V2 at commit `275e8096a56d5331dc0fd091ccd2a29c03f89e9c`, blob `a338933279e2a3a23725465c3b06425635f16afe`;
8. current accepted Audience, corrected Content, Creator Brand, Campaign/Add Brief, Collaboration/C04, Settings — Creator, Creator Payout/C06, and Creator Centre shell evidence/contracts relevant to this run.

Do not use any later, rewritten, dirty, or superseded Product register. Chat summaries do not override the exact Git authorities.

## 2. Exact starting checkpoints

Fetch/prune normally and prove local/fetched equality, clean worktrees, expected remote identity, and ancestry before mutation.

```text
BACKEND_REPOSITORY = Piyush1087/creator-commerce-backend-v2-clone
BACKEND_SOURCE_BRANCH = program/creator-brand-v0-backend
BACKEND_SHA = 6206f43c6a13c304c971b810e1dd99a20aaaa11f
BACKEND_TREE = 533f543612b856cfaf3b57769fe0b5541b803c3f

FRONTEND_REPOSITORY = Piyush1087/creator-commerce-frontend-v2-clone
FRONTEND_SOURCE_BRANCH = program/creator-brand-v0-frontend
FRONTEND_SHA = c505c0679e39effdd9608e319112591d5ae4c079
FRONTEND_TREE = 18dd8ed798aae509baa7d0d51ab8e31d7ac2dbbd

AUTHORITY_REPOSITORY = Piyush1087/dummy_tcs
CREATOR_BRAND_AUTHORITY_SHA = 08c72433b32ed8a199d29ae8875d668dc2f0eddf
CREATOR_BRAND_AUTHORITY_TREE = d9decab31d9bee7251bbbf675af95a29dafd08c9
PRODUCT_BATCHING_AUTHORITY_SHA = cb273c766f1950c86fff6adcda941a199d0c4a19

MIGRATIONS = 102
MIGRATION_HEAD = 20260915100000_creator_brand_canonical_profile_revision
MIGRATION_HEAD_SHA256 = ec6484427c24d5755549ff9e71bae989f5ff592a6fc5da953ca07494b8744452
```

Use fresh, isolated task worktrees/branches:

```text
program/creator-commercial-setup-rate-card-v0-backend
program/creator-commercial-setup-rate-card-v0-frontend
program/creator-commercial-setup-rate-card-v0-authority
```

The authority branch must contain both `cb273c766f1950c86fff6adcda941a199d0c4a19` and the prompt's immutable publishing commit. Reconcile the Creator Brand authority lineage by a normal conflict-free merge when required. Do not flatten, cherry-pick away, rewrite, or force-push accepted history.

If any exact checkpoint, blob, remote, worktree, ancestry, or migration identity fails, stop:

```text
RESULT = COMMERCIAL_SETUP_P0_STARTING_STATE_MISMATCH
```

Do not reset, clean, stash, discard, or overwrite user work.

## 3. Frozen cross-domain boundaries

```text
WORK_PREFERENCES OWNS = CREATOR-DECLARED COMMERCIAL PREFERENCES
RATE_CARD OWNS = CREATOR-DECLARED STARTING-FROM REFERENCES
SETTINGS — CREATOR OWNS = ROLES, ADDRESS, INSTAGRAM/SOURCE LIFECYCLE
CREATOR PAYOUTS/C06 OWNS = PAYOUT RECORDS AND READINESS
C04/COLLABORATION OWNS = PAYOUT GATE AND AGREED COMMERCIAL TRUTH
CAMPAIGN/ADD BRIEF OWNS = TRANSACTIONAL DELIVERABLES, RIGHTS, COMPENSATION, CURRENCY, TERMS
MEDIA KIT OWNS = PRESENTATION/EXPOSURE
```

Do not mutate or duplicate external truth. Do not expose sensitive Settings or payout data. Preferences never equal eligibility. Rate Card never equals a quote, agreement, promise, or fixed price.

## 4. Frozen role policy

Introduce explicit bounded actions, integrated with the accepted Creator Team policy:

```text
OWNER
  COMMERCIAL_SETUP_READ = YES
  WORK_PREFERENCES_EDIT = YES
  RATE_CARD_EDIT = YES

MANAGER
  COMMERCIAL_SETUP_READ = YES
  WORK_PREFERENCES_EDIT = YES
  RATE_CARD_EDIT = YES

ASSISTANT
  COMMERCIAL_SETUP_READ = YES
  WORK_PREFERENCES_EDIT = NO
  RATE_CARD_EDIT = NO
```

Do not infer these permissions from unrelated actions. These actions grant no Settings, payout, source, Campaign, Collaboration, Creator Brand, Audience, or Content mutation.

## 5. Frozen Work Preferences contract

The canonical aggregate must truthfully represent progressive configuration:

- `baseCountry`: Creator operating/base country, not Audience geography;
- `openToInternationalBrands`: explicit YES/NO when answered;
- `preferredIndustryIds`: Creator preferences;
- `excludedIndustryIds`: industries the Creator will not work with;
- preferred and excluded are semantically distinct and must not overlap;
- availability exactly `ACCEPTING_COLLABORATIONS`, `PAUSED_UNTIL`, or `NOT_ACCEPTING_NEW_COLLABORATIONS`;
- `PAUSED_UNTIL` requires a valid future date and other availability states must not retain one;
- a missing/unconfigured aggregate projects availability `ACCEPTING_COLLABORATIONS` while all other questions remain unanswered;
- physical-product collaboration willingness;
- UGC-project willingness;
- gifting/barter willingness.

Reuse a canonical active industry vocabulary through an adapter. Do not expose `UNKNOWN`, fraudulent/high-risk system sentinels, or invent a new vocabulary. Preserve stable IDs. If the repository has no semantically valid active taxonomy, stop with `WORK_PREFERENCES_INDUSTRY_AUTHORITY_REQUIRED`.

Availability influences only future/new opportunity selection. It must not alter existing Campaigns or Collaborations.

Project, without owning:

- shipping: `READY | NEEDS_SETUP` from Settings-owned data;
- payout: canonical `READY | NEEDS_SETUP | PROVIDER_REVIEW | UNAVAILABLE` mapping from payout authority;
- KYC: `COMING_SOON` only.

Provide deep links to the Settings-owned surfaces when routes exist. Do not create an address, payout, bank, provider, tax, or KYC workflow.

## 6. Frozen Rate Card contract

All enabled monetary lines are `Starting from`, never fixed.

Atomic rate items:

| Item | Frozen V0 reference |
|---|---|
| Reel | one Reel, `<15 seconds` |
| Story | one Story |
| Carousel | one Carousel |
| Photoshoot/static | one delivered static asset |

Each item is independently enabled. Each enabled item requires one positive amount in minor currency units; disabled items must not leave a misleading active amount.

Add-ons/rights:

- Link in Bio: independent enablement + positive starting amount; fixed reference seven days;
- Partnership Ads: exact Creator-facing label; independent enablement + positive starting amount; fixed reference fifteen days;
- content usage rights: explicit YES/NO plus optional positive `usageDays`; no separate V0 published price;
- no right is granted merely because availability is YES;
- UGC willingness projects from Work Preferences; it is not `UGC_VIDEO`, a separate deliverable, or a monetary line;
- gifting/barter willingness also projects from Work Preferences and does not create compensation rails.

Payment preferences:

```text
ADVANCE_PERCENT = 0 | 25 | 50 | 75 | 100
BALANCE_TERM = NET_7 | NET_15 | NET_30 | NET_45 | NET_60
```

No `IMMEDIATE` term.

Currency:

- not creator-editable;
- resolve from accepted platform commercial-geography/financial authority;
- Creator base country is the V0 input unless an already-authoritative legal/KYC country is explicitly active under the frozen Product contract;
- preserve canonical currency when projecting or updating numeric rates;
- no FX conversion or approximate localized display;
- do not invent a Rate Card-only country/currency mapping.

Inspect the current geographic routing and Campaign currency authorities. If their semantics cannot produce a truthful V0 resolver without a Product decision, stop with `RATE_CARD_CURRENCY_AUTHORITY_REQUIRED`.

Do not add packages, Story bundles, per-item Media Kit visibility, arbitrary terms, quotes, automatic sending, locking, market recommendations, or price optimization.

## 7. Shared engineering invariants

Use the established Creator canonical mutation patterns where semantically valid:

- stable Creator subject/tenant scope;
- source-independent access;
- strict DTOs and runtime validation;
- additive persistence;
- monotonic revision/CAS conflict handling;
- idempotent request identity;
- immutable mutation audit with server-held origin;
- deterministic normalization/order;
- retention without silent destructive overwrite;
- explicit null/intentional absence;
- last-good preservation on read/projection failure.

Do not force either aggregate into Intelligence current/candidate storage. These are manual canonical Creator domains, not derived Intelligence Objects.

Use separate Work Preferences and Rate Card models/repositories/services/controllers/revisions/audits. Shared owner-scope/policy/normalization helpers may be reused, but one aggregate must not become a JSON subdocument hidden inside the other.

## 8. P0 — authority convergence and executable contracts

### Objective

Create the single execution ledger and freeze executable contracts before persistence.

### Required work

1. Verify all exact authorities and Product blobs.
2. Reconcile the Product/batching authority and Creator Brand implementation authority on the new authority branch using normal ancestry-preserving Git operations.
3. Verify published Audience, corrected Content, and Creator Brand evidence. Canonicalize them as accepted predecessors only if exact checks pass; do not replay implementation.
4. Audit canonical industry vocabulary, country code contract, geographic/currency resolver, Campaign deliverable/rights/payment vocabulary, Settings readiness, payout readiness, Creator Team actions, and Creator shell routes.
5. Install strict runtime contracts for:
   - Work Preferences read/write/revision/audit;
   - operational readiness projection;
   - Rate Card read/write/revision/audit;
   - Work Preferences projection into Rate Card;
   - auto-resolved currency;
   - role actions.
6. Freeze separate namespaces and planned additive migration boundaries.
7. Add contract/architecture tests and predecessor vocabulary regressions.

### P0 gates

- exact Product IDs, enums, bounds, labels, defaults, and prohibitions;
- industry adapter excludes sentinel/high-risk values;
- UGC remains a preference, not a deliverable/rate item;
- Partnership Ads label and fixed reference periods exact;
- Campaign/Collaboration supremacy explicit;
- manual/source-independent operation;
- no schema/migration/runtime/controller/frontend work unless already strictly necessary for contract compilation;
- build, scoped typecheck/lint/format/diff, secret scan;
- normal non-force backend/authority checkpoint publication and independent fetch-back.

If any Product/runtime vocabulary conflict is material, stop. Otherwise record `P0_EVIDENCE_READY` and proceed directly to P1.

## 9. P1 — Work Preferences canonical persistence and API

### Objective

Deliver the complete backend Work Preferences vertical slice independently of Rate Card.

### Required work

1. Add the dedicated canonical aggregate, revision/audit, constraints, indexes, repository, service, policy, mapper, strict DTO, controller, module wiring, and OpenAPI contract.
2. Add one additive Work Preferences migration from the verified 102-migration base.
3. Implement source-independent read and authorized manual mutation.
4. Implement initial projected availability without fabricating answers for other questions.
5. Implement strict normalization, duplicate removal, preferred/excluded disjointness, availability/date consistency, CAS, idempotency, and immutable audit origin.
6. Project shipping and payout readiness read-only through accepted owners; KYC stays `COMING_SOON`.
7. Provide internal target-only purgeability for Creator-owned settings lifecycle without adding a new user-facing delete action unless one already exists and is canonically owned by Settings.

### P1 PostgreSQL/API proof

- clean migration application and current status;
- populated 102→new-head upgrade with predecessor row-count/hash preservation;
- no-Instagram/manual creation and update;
- default-only availability for missing profile;
- all availability/date cases;
- role matrix Owner/Manager/Assistant/inactive/anonymous;
- tenant/Creator/request/revision isolation;
- exact replay and conflict behavior;
- preferred/excluded overlap rejection;
- readiness projection without sensitive data;
- Settings target deletion/purge behavior and cross-Creator preservation;
- Audience, Content, Creator Brand, Creator Team, Settings, Campaign, Collaboration, and payout regressions affected by shared changes;
- production boot and `/health/live`, `/health`.

After all gates pass, publish a normal non-force P1 backend/authority checkpoint, fetch back, record `P1_EVIDENCE_READY`, and continue directly to P2.

## 10. P2 — Rate Card canonical persistence and API

### Objective

Deliver the complete backend Rate Card vertical slice on accepted P1.

### Required work

1. Add the separate Rate Card aggregate, revision/audit, constraints, indexes, repository, service, policy, mapper, strict DTO, controller, module wiring, and OpenAPI contract.
2. Add one separate additive Rate Card migration after the accepted Work Preferences migration.
3. Implement source-independent read and authorized manual mutation.
4. Enforce atomic item enablement/amount consistency and positive integer minor units.
5. Implement auto-resolved canonical currency and safe country-change behavior. Never silently reinterpret stored amounts in another currency. If a country change would change canonical currency while rates exist, use an explicit safe contract (for example, require deliberate rate reconfirmation/reset) supported by Product authority; do not perform FX or silently relabel money.
6. Project UGC and gifting/barter from Work Preferences read-only.
7. Preserve Campaign/Add Brief/C04 transactional supremacy.
8. Implement CAS, idempotency, immutable audit, deterministic ordering, tenant/Creator isolation, and target-only purgeability.

### P2 PostgreSQL/API proof

- clean all-migration application and current status;
- populated P1-head→P2-head upgrade and full 102→final upgrade;
- Work Preferences and Rate Card row/revision/audit independence;
- all atomic item enable/disable/amount cases;
- add-on and usage-right duration cases;
- exact payment vocabularies;
- currency resolution for supported geography classes and safe country-change behavior;
- no manual currency acceptance;
- role matrix, tenant/Creator/revision/request isolation;
- exact replay and conflict behavior;
- no UGC deliverable/rate item;
- no Campaign/Collaboration/Settings/payout mutation;
- target purge and cross-Creator preservation;
- P1 and predecessor regression matrix;
- production boot and health.

After all gates pass, publish a normal non-force P2 backend/authority checkpoint, fetch back, record `P2_EVIDENCE_READY`, and continue directly to P3.

## 11. P3 — combined Creator Commercial Setup frontend

### Objective

Deliver one Creator Centre Commercial Setup workspace with two internally distinct sections.

### Required UX

1. Add one route in the existing Creator Centre shell; use the existing source-independent Creator access contract.
2. Add Commercial Setup to the appropriate desktop sidebar and mobile drawer. Preserve the accepted five-item bottom navigation; do not add a sixth bottom item.
3. Provide accessible internal Work Preferences / Rate Card navigation without creating peer top-level workspaces.
4. Work Preferences UI:
   - base country;
   - international Brands;
   - preferred and excluded industries with clear semantic copy;
   - availability and conditional paused-until date;
   - physical product, UGC, and gifting/barter willingness;
   - read-only operational-readiness block with Settings deep links.
5. Rate Card UI:
   - `Starting from` framing everywhere;
   - exact four atomic lines and references;
   - exact add-ons/rights;
   - auto-resolved, locked currency display;
   - payment preferences;
   - read-only UGC/barter projection;
   - clear final-brief/final-agreement supersession copy.
6. Owner/Manager editable; Assistant read-only with no hidden mutation path.
7. Loading, empty/default, partial, error, retry, conflict, saved, last-good, and unauthorized states.
8. Strict client schemas and authenticated clients; no raw backend/provider payload rendering.

### P3 gates

- unit/contract/parser/client/view/shell/route tests;
- full frontend regression because shared Creator navigation/role surfaces change;
- typecheck, production build, scoped lint/format/diff;
- authenticated browser at 390, 767, 768, and desktop;
- Owner/Manager edit and Assistant read-only;
- keyboard/focus, labels/instructions/errors, focus recovery, no horizontal overflow;
- Axe serious/critical and lesser-impact findings recorded;
- zero console/uncaught page errors;
- manual setup without Instagram;
- no sensitive readiness detail;
- Campaign/Collaboration supremacy and `Starting from` copy visible;
- no second shell, sixth bottom item, UGC rate, packages, or manual currency.

After all gates pass, publish normal non-force frontend/authority P3 checkpoints, fetch back, record `P3_EVIDENCE_READY`, and continue directly to P4.

## 12. P4 — integrated acceptance, handoff, and learning

### Objective

Prove the complete combined workspace while retaining separate register outcomes.

### Required integrated evidence

1. Fresh disposable PostgreSQL 17 clean application of the full final migration inventory and current status.
2. Populated 102→Work Preferences→Rate Card upgrade with predecessor table counts/digests and canonical-data preservation.
3. Final migration file checksums and ordered inventory.
4. Backend production boot and health endpoints.
5. Authenticated API-to-database-to-UI proof for Owner, Manager, and Assistant.
6. Anonymous, inactive, cross-tenant, cross-Creator, stale revision, duplicate request, and malicious input rejection.
7. Settings readiness projection and deep links without secret exposure or external mutation.
8. Country/currency behavior, including existing-rate safety.
9. Existing Campaign/Collaboration unaffected by later preference/Rate Card edits.
10. Settings-owned target purge, cross-Creator preservation, and no ambiguous cascade.
11. Final responsive/accessibility/browser matrix at 390/767/768/desktop.
12. Focused full backend shared-surface regressions plus full frontend regression.
13. Package/lockfile/schema/migration/diff/secret/private-key/raw-media/locator/runtime-artifact integrity.
14. No live Graph/model call, Meta mutation, deployment, or development merge.

### Separate acceptance records

Publish separate evidence conclusions:

```text
WORK_PREFERENCES_V2_EVIDENCE_READY = YES | NO
RATE_CARD_V2_EVIDENCE_READY = YES | NO
COMBINED_COMMERCIAL_SETUP_EVIDENCE_READY = YES | NO
```

One passing register may be preserved as a checkpoint only if its contracts/migration/publication are independently valid and the failure is truly isolated. Do not label the combined run accepted when either required register is not evidence-ready.

### Authority artifacts

Maintain one ledger and publish at least:

- `P0_AUTHORITY_CONVERGENCE_AND_EXECUTABLE_CONTRACTS.md`;
- `P1_WORK_PREFERENCES_CANONICAL_PERSISTENCE_AND_API.md`;
- `P2_RATE_CARD_CANONICAL_PERSISTENCE_AND_API.md`;
- `P3_COMMERCIAL_SETUP_FRONTEND.md`;
- `P4_INTEGRATED_ACCEPTANCE_AND_CLOSEOUT.md`;
- `CREATOR_COMMERCIAL_SETUP_AND_RATE_CARD_V0_DEVELOPER_HANDOFF.md`;
- `CREATOR_COMMERCIAL_SETUP_AND_RATE_CARD_V0_FINAL_ACCEPTANCE_AND_PRODUCT_LEARNING_HANDOFF_V1.md`;
- archived byte-equivalent copy of this prompt.

## 13. Test execution model

Per packet:

```text
changed-surface tests
+ focused PostgreSQL where persistence changed
+ affected predecessor regressions
+ build/typecheck
+ scoped lint/format
+ diff integrity
+ secret/forbidden-artifact scan
```

P4 adds cross-packet/full integrated acceptance. Do not repeatedly run unrelated expensive suites when a narrower packet gate is sufficient, but do not omit the P1 full Brand/Creator shared-persistence regression or P3/P4 full frontend regression.

Use serial/fresh disposable database execution when parallel teardown or lock contention could create false failures. Report any rerun and its reason honestly.

## 14. Correction-cycle rules

Each packet has:

```text
PRIMARY_RUNS = 1
BOUNDED_CORRECTION_CYCLES = 2
```

Within a packet, ordinary defects may be corrected and retested. Do not count environment setup, dependency installation, or deterministic fixture/harness setup as a correction unless it changes production semantics.

After two genuine correction cycles, stop with the exact remaining blocker. A materially different root cause, Product conflict, new external authority requirement, destructive migration, or architecture expansion is an immediate circuit breaker.

## 15. Security, hygiene, and Git rules

- Use existing local task-relevant credentials/configuration without printing values.
- Do not request or use Instagram/Meta/model credentials; none are required.
- Do not persist `.env`, tokens, secrets, signed locators, raw media, browser state, database volumes, build output, or runtime logs.
- Use task-unique containers, databases, ports, and temp directories.
- Do not silently install or reconfigure system-wide software.
- If a task-owned ignored build directory cannot be deleted because of runner policy, verify it is regular, inside the exact task root, untracked, secret-free, unused, and report a non-blocking local hygiene exception. Never weaken publication integrity.
- Commit only after gates pass.
- Use normal non-force push only.
- After every publication, fetch/prune and prove local/fetched SHA and tree equality plus predecessor ancestry.
- Never merge to `development`; never deploy.

## 16. Prohibited work

Do not implement:

- Audience V1;
- Portfolio or Media Kit;
- post-click `Work with Creator` journey;
- Creator Content V1 or longitudinal Intelligence;
- quotes, Campaign application, Collaboration, payout, KYC, address, tax, FX, package, recommendation, marketplace, or Media Kit exposure systems;
- new UGC deliverable/rate type;
- Story bundles;
- arbitrary Creator terms;
- source/Instagram requirements for manual setup;
- AI/model/provider logic;
- deployment or development merge.

## 17. Circuit breakers

Stop immediately and return the immutable evidence collected so far if:

- starting authority/checkpoint/blob/worktree/migration verification fails;
- the frozen registers conflict materially with executable canonical Campaign, Settings, C04, or financial truth;
- safe industry or currency authority cannot be established;
- the implementation needs to duplicate or mutate external canonical truth;
- source-independent access cannot be preserved;
- a destructive/ambiguous migration or backfill is required;
- tenant/Creator isolation, CAS/idempotency, audit, or role enforcement cannot be maintained;
- P1 and P2 cannot remain separately reversible and testable;
- a Product decision is needed;
- a new generalized platform or schema/runtime expansion outside this authorization is required.

## 18. Immutable final return contract

Return exactly one report:

`CREATOR_COMMERCIAL_SETUP_AND_RATE_CARD_V0_AUTONOMOUS_EXTERNAL_LOCAL_CODEX_REPORT_V1`

Include:

```text
A. exact starting repositories, SHA/tree, branches, remotes, ancestry, worktrees
B. exact Product commit/blob and prompt/authorization integrity
C. authority convergence and predecessor canonicalization
D. P0 contract/vocabulary/reuse decisions and gates
E. P1 changed files, migration, persistence, API, roles, audit, tests, publication
F. P2 changed files, migration, currency, persistence, API, roles, tests, publication
G. P3 changed files, routes, navigation, forms, states, roles, tests, publication
H. P4 clean/upgrade PostgreSQL proof and row/digest preservation
I. Work Preferences separate acceptance evidence
J. Rate Card separate acceptance evidence
K. combined API/runtime/frontend/browser evidence
L. tenant/Creator/revision/request isolation
M. Settings/payout/C04/Campaign ownership non-mutation proof
N. target purge and cross-Creator preservation
O. responsive/keyboard/focus/overflow/Axe/console matrix
P. predecessor regression results
Q. schema/migration/dependency identities and checksums
R. secret/raw-media/locator/forbidden-artifact scan
S. live-call and external-mutation counts
T. exact changed-file inventories and statistics per repository and packet
U. backend publication/fetch-back SHA/tree and ancestry
V. frontend publication/fetch-back SHA/tree and ancestry
W. authority publication/fetch-back SHA/tree and ancestry
X. ledger, evidence, developer handoff, learning, prompt archive
Y. cleanup and final worktree/runtime state
Z. primary-run/correction-cycle accounting per packet
AA. exact blocker, if any
```

End with:

```text
RESULT =
READY_FOR_CHILD_SA_PROGRAM_ORCHESTRATOR_FINAL_REVIEW
|
COMMERCIAL_SETUP_CORRECTION_REQUIRED
|
COMMERCIAL_SETUP_TRUE_CIRCUIT_BREAKER

P0 = ACCEPTED | NOT_ACCEPTED
P1 = ACCEPTED | NOT_ACCEPTED
P2 = ACCEPTED | NOT_ACCEPTED
P3 = ACCEPTED | NOT_ACCEPTED
P4_EVIDENCE_READY = YES | NO

WORK_PREFERENCES_V2_EVIDENCE_READY = YES | NO
RATE_CARD_V2_EVIDENCE_READY = YES | NO
COMBINED_COMMERCIAL_SETUP_EVIDENCE_READY = YES | NO

AUDIENCE_V1 = NOT_STARTED
PORTFOLIO = NOT_STARTED
MEDIA_KIT = NOT_STARTED

LIVE_GRAPH_CALLS = NONE
LIVE_MODEL_CALLS = NONE
META_PROVIDER_MUTATIONS = NONE
DEVELOPMENT_MERGE = NOT_PERFORMED
DEPLOYMENT = NOT_PERFORMED

NEXT_ACTION =
PARENT RETURNS THIS IMMUTABLE REPORT
TO THE CREATOR INSTAGRAM INTELLIGENCE TECHNICAL SA /
PROGRAM ORCHESTRATOR FOR FINAL REVIEW
```

Do not self-authorize later Creator Centre work.
