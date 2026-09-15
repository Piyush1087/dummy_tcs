# CREATOR PORTFOLIO V3 — AUTONOMOUS LOCAL CODEX EXECUTION V2

`CREATOR_PORTFOLIO_V3_AUTONOMOUS_LOCAL_CODEX_EXECUTION_V2`

You are the External Local Codex implementation runner for Creator Portfolio V3.

This is the Parent-supplied execution file issued after Creator Audience V1 technical acceptance. Begin only when the Parent manually supplies this file to an available Local Codex runner.

## 1. Operating authority

```text
PARENT / CREATOR ORCHESTRATOR
= final Product and program authority

CREATOR INSTAGRAM INTELLIGENCE TECHNICAL SA
= technical architecture, packet sequencing and technical acceptance

EXTERNAL LOCAL CODEX
= local implementation, PostgreSQL, runtime, browser, Axe,
   authenticated Git publication and immutable evidence
```

Implementation is authorized only for:

```text
CREATOR PORTFOLIO V3
P0 → P1 → P2 → P3 → P4
```

Execute this as one autonomous bounded run. For each packet:

1. reconcile the exact authority and repository state;
2. implement only the packet scope;
3. run all mandatory packet gates;
4. publish a coherent immutable checkpoint only after those gates pass;
5. independently fetch it back and prove SHA/tree equality;
6. proceed automatically to the next packet.

Do not require Parent relay between successful packets.

Stop only for a Product/authority conflict, a defined technical circuit breaker, unavailable mandatory local infrastructure, or a material scope expansion beyond Portfolio V3.

Ordinary compilation, migration-order, DTO, mapper, fixture, browser-selector, style, test-harness or formatting defects are bounded correction work, not circuit breakers.

## 2. Accepted-predecessor isolation

Creator Audience V1 is the newest accepted Creator implementation predecessor and the direct Portfolio base. Preserve its complete accepted history and runtime behavior.

Before Portfolio execution:

- use fresh Portfolio-specific worktrees;
- use Portfolio-specific ports, container names, volumes, databases, temp paths and logs;
- do not access, stop, clean or mutate any unrelated user or prior-task worktrees, processes, databases or artifacts;
- do not replay, reconstruct, cherry-pick or independently merge Audience V1; begin from its exact accepted published checkpoints below;
- inspect existing remote migration names before naming a Portfolio migration;
- select a globally unique ordered migration directory if Portfolio needs schema work;
- preserve Audience V1 behavior and record Portfolio's exact delta from the accepted Audience V1 base.

If isolation cannot be guaranteed, stop with:

```text
CREATOR_PORTFOLIO_V3_PREDECESSOR_ISOLATION_REQUIRED
```

Media Kit is a downstream consumer and remains prohibited until Portfolio has been technically accepted.

## 3. Exact starting checkpoints

Perform normal fetch/prune before mutation. Verify expected repository identities, local/fetched equality, exact SHA/tree identity, clean worktrees and accepted ancestry.

### Backend

```text
repository = Piyush1087/creator-commerce-backend-v2-clone
branch = program/creator-audience-v1-backend
SHA = 6f000bd9364f48d338ae88cec78dcfed0f4fd522
tree = 374f02a8181505038fbb0c084ca33de0ad97ae46
```

### Frontend

```text
repository = Piyush1087/creator-commerce-frontend-v2-clone
branch = program/creator-audience-v1-frontend
SHA = 36d75f4eceded7e9e35aaa280b544164d086ca05
tree = eb9c4471a5a7db6228b2f8c4c234834c5671d828
```

### Program authority

```text
repository = Piyush1087/dummy_tcs
branch = program/creator-audience-v1-authority
SHA = a403a9eae752a4201b263f3e1fb518e0a115e329
tree = 2ae6f750078896d5a3708ba8f5eb3c66b762615e
```

### Database baseline

```text
migration count = 104
```

These exact checkpoints are the only implementation base. They inherit the technically accepted Creator Audience V0, Content V0, Creator Brand V0, Work Preferences V2, Rate Card V2 and Creator Audience V1 implementations. Prove relevant ancestry and runtime contracts rather than assuming them.

Do not substitute `development`, the pre-Audience Commercial checkpoint, a dirty local branch or a newer unreviewed Product register.

If an exact checkpoint is unavailable, differs remotely, or its worktree contains overlapping changes, preserve all state and return:

```text
CREATOR_PORTFOLIO_V3_STARTING_STATE_MISMATCH
```

When the gate passes, create and publish only:

```text
program/creator-portfolio-v3-backend
program/creator-portfolio-v3-frontend
program/creator-portfolio-v3-authority
```

Use normal history-preserving convergence for Product authority where necessary. No reset, stash, discard, history rewrite, forced update or flattening of accepted authority.

## 4. Exact frozen Product authority

Read the complete active register from Git before designing or changing source:

```text
repository = Piyush1087/dummy_tcs
path = docs/ai-collaboration/creator-centre/CREATOR_PORTFOLIO_V0_PRODUCT_DECISION_REGISTER_V3.md
commit = c84cd0b989eec40e12d659fc245aa8bc8dc43bd2
Git blob = 64eca5cebde271bca1e9cf0e1affd31d8db6c26d
```

Verify the exact commit/path/blob. Portfolio V3 supersedes Portfolio V1 and V2. Earlier versions are historical evidence only.

Also read, where present in accepted authority histories:

- `docs/ai-collaboration/creator-centre/orchestrator/CREATOR_TO_BRAND_CENTRE_SA_HANDOFF_PROTOCOL_V1.md`;
- `CREATOR_CENTRE_MULTI_REGISTER_CURRENT_STATE_DEPENDENCY_AND_BATCHING_PLAN_V1`;
- accepted Creator Audience V0, Creator Content V0 and Creator Brand V0 Product and technical handoffs;
- accepted Creator Audience V1 Product authority and final technical/Product-learning handoff at authority commit `a403a9eae752a4201b263f3e1fb518e0a115e329`;
- accepted Instagram Intelligence B3A/B3B/C2/C3/C4 and video/speech foundation handoffs relevant to media identity, safe media handling and `likely_collab`;
- accepted C04/Collaboration contracts relevant to completed-work verification and UGC;
- accepted Creator Settings contracts relevant to Instagram/source lifecycle and platform-data deletion;
- Creator Centre shell/navigation and role contracts;
- repository `AGENTS.md` and applicable engineering, backend, frontend, database, validation, AI-integration, Aurora/design and browser-runner standards.

The exact Portfolio V3 register is Product authority. Donor implementation convenience cannot override it. If a donor fact materially conflicts, stop with:

```text
CREATOR_PORTFOLIO_V3_PRODUCT_AUTHORITY_CONFLICT
```

Do not independently resolve a Product conflict.

## 5. Frozen cross-domain boundary

The Product register is complete authority. Preserve at least these guardrails unless the exact register further narrows them:

```text
Portfolio item = an individual content item
Portfolio item != a project
```

- Instagram Intelligence is the primary authority for possible-collaboration discovery.
- `likely_collab` remains bounded inference; it is not canonical Collaboration truth.
- C04 completed-work truth is additional Creator Shop–verified evidence, particularly for UGC.
- Instagram-verified and Creator Shop–verified provenance remain distinguishable.
- A Creator may remove any permitted shortlisted, C04-derived or Creator-added Portfolio item according to the exact V3 lifecycle.
- Removal from Portfolio must not silently delete or rewrite Instagram source Evidence, C04 completed-work truth or another domain's canonical record.
- No manual media binary upload is permitted.
- Static media or cover presentation links to the authorized source destination according to the V3 register.
- Signed, expiring or provider-temporary media URLs are not durable Portfolio identity.
- Creator Settings owns Instagram/source connection and platform-data lifecycle.
- C04 owns completed-work verification and its collaboration truth.
- Media Kit is a later consumer; Portfolio does not own public Media Kit composition.

Derive exact item types, states, limits, ordering, default inclusion/shortlisting, creator actions, copy, badges, source-link behavior, empty/error states and role permissions only from the exact V3 register.

Do not infer that every discovered item is automatically public or selected. Do not infer an upload workflow. Do not infer a C04 project model for Portfolio.

## 6. Required current-state/provider audit before implementation

P0 must verify actual provider and donor capabilities instead of assuming them, including:

- stable Instagram media identity;
- media type coverage for IMAGE, CAROUSEL and REEL/VIDEO;
- Story support or absence under the accepted provider permissions;
- permalink/source-destination availability and stability;
- cover/thumbnail availability, expiry and authorization semantics;
- signed/ephemeral locator handling;
- carousel representative-child behavior;
- accepted video cover/frame and secure acquisition boundaries;
- `likely_collab` output identity, confidence and Evidence lineage;
- C04 completed-work media references, UGC evidence and Creator ownership;
- deduplication when one item is supported by both Instagram and C04;
- behavior after Instagram disconnect, account change, authorization-generation change or Settings delete-data;
- behavior after C04 data changes without mutating C04 truth.

No live Graph call is mandatory. Use accepted contracts, repository truth and provider-neutral fixtures.

Stop before production implementation if V3 requires a provider fact that cannot be represented truthfully. Return:

```text
CREATOR_PORTFOLIO_V3_PROVIDER_CAPABILITY_AUTHORITY_REQUIRED
```

Do not work around a missing stable source link by durably persisting signed media URLs or raw media.

## 7. Reuse-first architecture

Reuse where semantically compatible:

- Creator membership/owner scope and explicit role actions;
- Instagram Resource/Capture/Evidence/Observation identity and lineage;
- authorization-generation and provider-account fencing;
- B3A/B3B safe media/cover handling;
- C3 source-native semantic observations and `likely_collab` inference;
- Creator Content corpus/media projection only where Product admits it;
- C04 completed-work query/read contracts without modifying C04;
- immutable revision, idempotency, CAS and audit patterns from Creator Brand/Commercial Setup;
- strict authenticated consumer/API patterns;
- existing Creator Centre shell, sidebar, mobile drawer and bottom navigation;
- Creator Settings internal target-data purge integration;
- existing browser/Axe fixture infrastructure.

Do not create:

- a parallel Instagram discovery or Evidence engine;
- a canonical Collaboration writer in Portfolio;
- a duplicate C04 completed-work store;
- a media-upload service;
- durable raw media or expiring signed-locator storage;
- a Media Kit publication model;
- a generalized asset-management or DAM platform;
- a second Creator shell/navigation system;
- Portfolio-owned source deletion or Settings mutations;
- direct writes into another domain's current/canonical tables.

Any shared runtime delta must be minimal, owner-neutral and regression-tested across existing Brand and Creator consumers.

## 8. Provider, secret and media rules

Mandatory acceptance is provider-neutral:

```text
LIVE_GRAPH_CALLS = NONE
LIVE_MODEL_CALLS = NONE
META_PROVIDER_MUTATIONS = NONE
```

Use deterministic fixtures and dependency-injected provider/model adapters. Production behavior fails closed when configuration or provider capability is absent.

Never expose, log, commit or include in evidence:

- access/refresh tokens or credentials;
- `.env` values;
- signed/ephemeral media locators;
- raw provider payloads;
- raw image/video/audio bytes;
- temporary media paths;
- browser authentication state.

External source links must follow the exact Product contract and existing URL-safety patterns. Use safe scheme/host validation and `noopener`/`noreferrer` where applicable. Do not turn a temporary media URL into the user's permanent source destination.

## 9. Autonomous finite packet plan

### P0 — Authority convergence, donor/provider audit and executable contracts

Before production implementation:

1. prove starting SHA/tree/worktree/remote identities and relevant predecessor ancestry;
2. verify the exact Portfolio V3 Product blob;
3. reconcile Instagram Intelligence, Creator Content, C04, Creator Settings and Creator shell donors;
4. publish a reuse classification: `REUSE`, `REUSE_WITH_SUBJECT_ADAPTATION`, `ADD`, `COMPATIBILITY_ONLY`, `DEFER` or `PROHIBITED`;
5. freeze executable item, source, provenance, state, action, role, ordering, link and availability contracts from Product;
6. define stable item identity and cross-source deduplication without treating mutable locators as identity;
7. define source removal versus Portfolio removal versus Settings purge semantics;
8. define exact authenticated API and frontend contracts;
9. prove Media Kit and all post-CTA behavior remain excluded;
10. create the one Portfolio V3 execution ledger and P0 evidence artifact.

P0 gates:

- strict schemas/contracts and normalization tests;
- provider-capability truth matrix;
- `likely_collab`/C04 provenance non-conflation tests;
- donor/frozen-contract regressions;
- changed-surface build/typecheck, lint/format and diff integrity;
- secret/raw-media/locator/forbidden-artifact scan.

### P1 — Canonical Portfolio persistence and mutation API

Implement the smallest Portfolio-owned canonical aggregate required by V3.

It must provide, only where Product authorizes:

- stable Creator-scoped Portfolio/item identity;
- bounded item metadata and source references;
- distinct Instagram-verified and Creator Shop–verified provenance;
- deterministic cross-source deduplication;
- Creator selection/removal/ordering lifecycle;
- immutable revision/audit history;
- idempotent request identity;
- optimistic concurrency/CAS;
- exact role and tenant/Creator enforcement;
- internal target-only purgeability;
- no media binary upload or foreign-domain truth mutation.

If schema work is required, add only reviewed additive migrations. Never alter accepted migrations. Migration names must be unique across all fetched remote feature branches.

P1 gates:

- strict service/controller/policy tests;
- fresh PostgreSQL migration application and current status;
- populated 104→new-head upgrade preserving all predecessor table counts/digests if migrations exist;
- authenticated Owner/Manager/Assistant action matrix exactly as frozen by Product;
- anonymous/inactive/other-Creator denial;
- CAS conflict, idempotent replay and atomic rejection;
- removal without deletion of Instagram/C04 source truth;
- target-only purge and cross-Creator/domain preservation;
- affected Creator Brand, Content, Commercial, C04 and Settings regressions;
- build, lint, format, diff and security scans.

### P2 — Instagram discovery, C04 verification and consumer projection

Connect accepted producers to Portfolio through bounded read/adaptation seams:

```text
Instagram Intelligence possible-collaboration discovery
+ C04 completed-work / UGC verification
+ Product-authorized Creator-added references, if any
→ Portfolio candidates/items
→ strict authenticated Portfolio consumer
```

Requirements:

- never promote `likely_collab` into canonical Collaboration truth;
- retain exact Evidence/provenance and observation time;
- keep source-specific verification distinct after deduplication;
- fence Brand/Creator, provider account, authorization generation, media identity and C04 ownership;
- avoid repeated provider/model work on replay;
- preserve existing selected Portfolio state when discovery is temporarily unavailable;
- avoid fabricated negative conclusions for uninspected/unsupported media;
- link only to an authorized stable source destination;
- expose no raw provider payload, signed locator, model prompt/reasoning or internal generation detail;
- do not change C04, Settings or Instagram source truth.

P2 gates:

- provider-neutral discovery fixtures for each Product-supported media/source state;
- exact source→Evidence/C04→Portfolio provenance proof;
- same-item dual-source deduplication;
- selected/unselected/removed/reappearing behavior;
- replay/idempotency and row-count stability;
- disconnect/account-change/generation-change/failure preservation;
- cross-tenant/Creator/media/C04 substitution rejection;
- strict authenticated API DTO and role tests;
- real PostgreSQL round-trip and affected predecessor regressions;
- production backend boot plus `/health/live` and `/health` with PostgreSQL connectivity.

### P3 — Complete Creator Portfolio V3 frontend

Implement the exact V3 Portfolio workspace in the existing Creator Centre shell.

Requirements:

- reuse existing sidebar/mobile drawer/bottom-navigation conventions;
- preserve Audience, Content, Creator Brand and Commercial destinations;
- implement exact V3 information hierarchy, item cards, provenance labels, actions, limits and empty/partial/error states;
- use the authenticated API client and strict parser;
- clearly distinguish Instagram verification/inference from Creator Shop verification;
- use authorized stable source links for static media/cover presentation;
- preserve useful last-good Portfolio state during transient discovery failure;
- provide keyboard-operable selection/removal/reordering if those actions are frozen;
- never add upload controls, raw JSON, signed locator display, public Media Kit presentation or post-click CTA behavior.

P3 gates:

- schema/parser/client/view/action tests;
- Creator shell/navigation regression;
- Audience, Content, Creator Brand and Commercial frontend regressions;
- loading, error, empty, partial, candidate, selected and removed states required by Product;
- role-specific read/action behavior;
- frontend typecheck, production build, scoped lint/format and diff integrity.

### P4 — Integrated acceptance and closeout

Run the complete Portfolio V3 system using fresh disposable PostgreSQL 17 and deterministic fixtures.

Required integrated paths:

```text
Instagram fixture → DE/Evidence/likely_collab → Portfolio candidate/item
C04 completed-work fixture → Creator Shop verification → Portfolio candidate/item
dual-source same media → one Portfolio item with distinct valid provenance
Creator action → canonical Portfolio state/revision/audit
authenticated API → production frontend
```

Also prove:

- creator removal does not rewrite or delete source truth;
- source/account/generation changes behave exactly as Product defines;
- failure does not destroy prior valid selected state;
- Settings target purge removes only Product-governed target data and preserves cross-Creator/unrelated canonical truth;
- no raw media or signed locator is durably stored;
- exact replay creates no duplicate canonical item, provenance, audit or expensive work.

Browser matrix:

```text
390px
767px
768px
1440px
```

For all Product-required states and roles, prove:

- authenticated production API-to-UI path;
- keyboard operation and visible focus;
- correct heading/label semantics;
- no horizontal overflow;
- Axe serious = 0;
- Axe critical = 0;
- Axe lesser violations = 0 unless separately authorized by the Technical SA;
- console errors = 0;
- uncaught page errors = 0;
- no prohibited external browser traffic.

Complete final backend/frontend regression, production builds, migration inventory/status, package/lock/schema identity, secret/media/locator scans and task-owned cleanup.

## 10. Git and publication discipline

Commit each successful packet as a coherent checkpoint. Never commit or publish a packet whose mandatory gates fail.

Use normal non-force pushes only.

After every push:

1. fetch/prune independently;
2. resolve the exact remote branch;
3. compare local/fetched SHA;
4. compare local/fetched tree;
5. prove required predecessor ancestry;
6. prove the worktree is clean.

Do not rewrite accepted upstream history.

Archive this exact Parent-supplied prompt under Portfolio V3 authority and prove source/archive content equality after only documented LF/CRLF and terminal-newline normalization.

## 11. Required authority artifacts

Publish under:

```text
docs/ai-collaboration/creator-centre/creator-portfolio-v3/
```

At minimum:

- one `EXECUTION_LEDGER.md`;
- `P0_AUTHORITY_DONOR_PROVIDER_AND_EXECUTABLE_CONTRACTS.md`;
- `P1_CANONICAL_PORTFOLIO_PERSISTENCE_AND_MUTATION_API.md`;
- `P2_INSTAGRAM_DISCOVERY_C04_VERIFICATION_AND_CONSUMER.md`;
- `P3_CREATOR_PORTFOLIO_V3_FRONTEND.md`;
- `P4_INTEGRATED_ACCEPTANCE_AND_CLOSEOUT.md`;
- `CREATOR_PORTFOLIO_V3_DEVELOPER_HANDOFF.md`;
- `CREATOR_PORTFOLIO_V3_FINAL_ACCEPTANCE_AND_PRODUCT_LEARNING_HANDOFF_V1.md`;
- exact prompt archive under `runner-prompts/`.

Do not create a duplicate Creator Centre program or ledger.

## 12. Explicitly prohibited work

Do not:

- reopen, rewrite or regress accepted Audience V1;
- implement Media Kit V3;
- implement public Media Kit URLs, PDF export, email reveal or `Work with Creator` CTA behavior;
- implement anything after that CTA click;
- change Creator Brand, Content, Commercial Setup or Rate Card truth;
- modify C04 state machines or create canonical Collaboration truth;
- add manual media upload;
- create generalized DAM/media-hosting infrastructure;
- persist raw media or signed/ephemeral media URLs;
- change Creator Settings source lifecycle ownership;
- add KYC, payout or Campaign work;
- request new Meta permissions or modify OAuth/provider configuration;
- execute live Graph/model calls or Meta mutations;
- merge to `development`;
- deploy to AWS or production;
- force push;
- install or materially reconfigure system-wide software silently.

If Docker, disposable PostgreSQL, browser or required repository-scoped tooling is unavailable, return:

```text
LOCAL_ENVIRONMENT_PREREQUISITE_REQUIRED
```

with the exact prerequisite. Do not weaken any gate.

## 13. Circuit breakers

Stop and return the exact blocker if any of these is proven:

- Portfolio V3 requires a missing/unfrozen Product decision;
- provider capabilities cannot supply a Product-required stable truth/link;
- C04 cannot expose the required completed-work/UGC verification without changing its domain;
- Instagram and Creator Shop verification cannot remain distinguishable;
- deduplication would require identity based on expiring locators;
- removal semantics would require deleting another domain's truth;
- a parallel DE/Evidence/Intelligence/Collaboration store is required;
- schema work is destructive, ambiguous or materially broader than Portfolio;
- Creator role/subject resolution conflicts with Product;
- Portfolio implementation requires reopening or materially changing accepted Audience V1;
- Media Kit functionality becomes a mandatory dependency.

Return one of:

```text
CREATOR_PORTFOLIO_V3_PRODUCT_AUTHORITY_CONFLICT
CREATOR_PORTFOLIO_V3_PROVIDER_CAPABILITY_AUTHORITY_REQUIRED
CREATOR_PORTFOLIO_V3_C04_CONTRACT_EXPANSION_REQUIRED
CREATOR_PORTFOLIO_V3_SCHEMA_SCOPE_EXPANSION_REQUIRED
CREATOR_PORTFOLIO_V3_TRUE_CIRCUIT_BREAKER
```

with exact evidence. Do not silently expand scope.

## 14. Immutable return contract

Return exactly one comprehensive report titled:

```text
CREATOR_PORTFOLIO_V3_AUTONOMOUS_EXTERNAL_LOCAL_CODEX_REPORT_V1
```

It must include:

A. exact starting SHA/tree/worktree/remote verification;
B. Product commit/blob, standards and authority reconciliation;
C. authority convergence and predecessor ancestry;
D. accepted Audience V1 predecessor preservation and migration-collision proof;
E. exact changed files and per-packet/cumulative statistics;
F. P0 donor/provider/reuse classification;
G. Portfolio item/state/action/role contracts;
H. stable identity, ordering, limits and deduplication;
I. Instagram discovery and `likely_collab` truth boundary;
J. C04 completed-work/UGC verification boundary;
K. Instagram-versus-Creator-Shop provenance proof;
L. source links, thumbnails/covers and locator-expiry handling;
M. canonical persistence, revisions, audit, CAS and idempotency;
N. removal/source-deletion/Settings-purge distinction;
O. tenant/Creator/account/generation/media/C04 isolation;
P. failure/last-good preservation and replay row counts;
Q. authenticated API/DTO and role matrix;
R. frontend workspace/shell/action implementation;
S. PostgreSQL version, migrations, upgrade preservation and row counts;
T. focused and predecessor regression results;
U. build/typecheck/lint/format/diff results;
V. 390/767/768/1440 browser, keyboard/focus, overflow, Axe and console evidence;
W. dependency/schema/migration identity;
X. secret/raw-media/locator/forbidden-artifact scan;
Y. live-call/provider-mutation counts;
Z. backend publication/fetch-back SHA/tree equality;
AA. frontend publication/fetch-back SHA/tree equality;
AB. authority publication/fetch-back equality and prompt digest;
AC. final runtime/temp-media/container/process/port cleanup;
AD. packet primary-run/correction accounting;
AE. developer handoff and Product-learning summary;
AF. exact blocker, if any.

Successful final state:

```text
RESULT = READY_FOR_CHILD_SA_PROGRAM_ORCHESTRATOR_FINAL_REVIEW

P0 = ACCEPTED
P1 = ACCEPTED
P2 = ACCEPTED
P3 = ACCEPTED
P4_EVIDENCE_READY = YES

CREATOR_PORTFOLIO_V3_EVIDENCE_READY = YES

AUDIENCE_V1 = ACCEPTED_PREDECESSOR_PRESERVED
MEDIA_KIT = NOT_STARTED

LIVE_GRAPH_CALLS = NONE
LIVE_MODEL_CALLS = NONE
META_PROVIDER_MUTATIONS = NONE
RAW_MEDIA_PERSISTED = NO

DEVELOPMENT_MERGE = NOT_PERFORMED
DEPLOYMENT = NOT_PERFORMED

NEXT_ACTION =
PARENT RETURNS THIS IMMUTABLE REPORT
TO THE CREATOR INSTAGRAM INTELLIGENCE TECHNICAL SA /
PROGRAM ORCHESTRATOR FOR FINAL REVIEW
```

Do not self-declare final technical acceptance. `P4_EVIDENCE_READY = YES` authorizes Technical-SA/Parent review only.
