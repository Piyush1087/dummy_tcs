# Creator Brand V0 — P3 Access-Gate Correction 1 — Local Codex Prompt V1

`CREATOR_BRAND_V0_P3_ACCESS_GATE_CORRECTION_1_LOCAL_CODEX_PROMPT_V1`

You are the **External Local Codex execution runner**. The Parent is mechanically relaying this exact prompt. You have no Product authority and must not self-accept P3.

This is the first bounded P3 correction after:

```text
CREATOR_BRAND_V0_P3_EXTERNAL_LOCAL_CODEX_REPORT_V1

RESULT = CREATOR_BRAND_P3_CIRCUIT_BREAKER
P3_PRIMARY_RUNS_USED = 1
P3_CORRECTION_CYCLES_USED = 0
```

The Technical SA has reviewed that report and adjudicates:

```text
P3_TRUE_PRODUCT_CIRCUIT_BREAKER = NO

ROOT_CAUSE =
TECHNICAL-SA P3 PROMPT REQUIRED THE WRONG ROUTE GUARD

FROZEN PRODUCT ALREADY RESOLVES THE CONFLICT =
CREATOR BRAND MANUAL SETUP MUST WORK WITHOUT INSTAGRAM

P3_CORRECTION_1 = AUTHORIZED
```

Execute the complete P3 frontend packet with the corrected access gate below. Do not start P4.

---

## 1. Exact preserved starting state

No P3 source or authority mutation occurred in the primary run. Revalidate through normal fetch/prune:

### Backend

```text
repository = Piyush1087/creator-commerce-backend-v2-clone
branch = program/creator-brand-v0-backend
SHA = 6206f43c6a13c304c971b810e1dd99a20aaaa11f
tree = 533f543612b856cfaf3b57769fe0b5541b803c3f
parent = 7a78ffec1dd6a413d0a2478a8f706dfa95393a05
```

### Frontend

```text
repository = Piyush1087/creator-commerce-frontend-v2-clone
branch = program/creator-brand-v0-frontend
SHA = 7edd26d3cdad0ec84083884b34039952368a1295
tree = 0cc596ca1ef1d1c4a51857125547de156e487c8b
```

### Authority

```text
repository = Piyush1087/dummy_tcs
branch = program/creator-brand-v0-authority
SHA = 26feb12690e0031e3e0cce328b12eebcfaf62670
tree = be4b3afd49c4a823a4949c3079e0fcf1255b1360
parent = 60ab540232e4947d3c38f3cb1ad50e2f8f47bf99
```

### Database

```text
migration count = 102
migration head = 20260915100000_creator_brand_canonical_profile_revision
migration SHA-256 = ec6484427c24d5755549ff9e71bae989f5ff592a6fc5da953ca07494b8744452
```

All worktrees must be clean and local/fetched SHA/tree equal before mutation. Use fresh isolated P3 correction worktrees. Do not use prior ignored `dist` paths as inputs.

If any exact state differs, stop with `P3_RECOVERY_STATE_MISMATCH`. Do not reset, stash, discard, or overwrite user work.

---

## 2. Sole Product authority

Use only:

```text
Product Register V2 = 2d561da03ae5df296443f32f79f24264cc8a9361
Technical Handoff V2 = 0db5974c562aea96568c4e12b240cbb1ef5cd09d
Product Amendment 1 = 07917b2191a6de3f0c8ffb86500abc597478fc2b
Execution Authorization = 7e54d3980ca3454263600e44766041dbb58e0a06
Corrected Content authority ancestor = cb9ee23118eafb2dc156c25eb09702ea93252db4
```

Ignore later unreconciled Creator Brand/Brand Centre Product files from `main`, C03, or another Creator-Orchestrator lineage.

Read repository standards, accepted P0–P2 artifacts and the single ledger. The original full P3 packet remains available at:

```text
repository = Piyush1087/dummy_tcs
branch = program/creator-brand-v0-p3-prompt-v1
commit = 363d344ad68f43a92103ab760b211e05668ddd62
tree = 9f6f4a7ca597fd7f672c12c873d287da95c9aa62
path = docs/ai-collaboration/creator-centre/creator-brand-v0/runner-prompts/CREATOR_BRAND_V0_P3_FULL_FRONTEND_LOCAL_CODEX_PROMPT_V1.md
SHA-256 = 692bbf6a84193804b7fd78372f4724af3bcb47321ae54b6bf1381bc74d6cfa5d
```

This correction supersedes only the incorrect `RequireCreatorPlatformAccess` requirement and the resulting source-dependent route assumptions. All other P3 Product, frontend, testing, publication, and prohibited-work requirements remain in force.

---

## 3. Binding access-gate adjudication

The frozen hierarchy is:

```text
AUTHENTICATED CREATOR USER
→ active Creator Team membership
→ server-resolved Creator Workspace Owner subject
→ explicit CREATOR_BRAND_READ action
→ Creator Brand route allowed
```

Instagram connection, authorization health, Content readiness, and Creator Entry `canEnterCreatorPlatform` are **not** Creator Brand access prerequisites.

Therefore:

```text
/creator/brand
MUST NOT be nested under RequireCreatorPlatformAccess
MUST NOT call Creator Entry as its authorization authority
MUST NOT require connected Instagram identity
MUST NOT require usable Instagram authorization
MUST NOT require Content/Insights readiness
```

Implement a narrowly named Creator Brand route guard or a semantically generic Creator workspace-action guard that consumes the existing authenticated `CreatorWorkspaceActorProvider` state and requires:

```text
CREATOR_BRAND_READ
```

The guard must:

- wait truthfully while actor context loads;
- allow Owner, Manager, and Assistant when active membership provides `CREATOR_BRAND_READ`;
- deny inactive/missing/foreign membership;
- never accept a caller-selected Creator/workspace/profile ID;
- use the team-context/canonical-owner resolution already accepted in P1/P2;
- fail closed when actor context cannot be verified;
- never inspect Instagram connection or Content readiness;
- remain only a frontend projection—the authenticated backend GET/PUT remains authoritative.

Place `/creator/brand` inside the authenticated App shell and Creator actor-context provider, but outside the existing `RequireCreatorPlatformAccess` wrapper.

Do not change or weaken:

- `RequireCreatorPlatformAccess` itself;
- Creator Entry service or `canEnterCreatorPlatform` semantics;
- Audience/Content route gating;
- Campaign, Collaboration, Home, Settings, onboarding, or recovery behavior;
- backend actor/team/Creator Brand authorization.

This is a new source-independent route, not a reinterpretation of existing source-dependent routes.

---

## 4. Creator Entry owner-projection concern

The primary report correctly observed that Creator Entry may treat the authenticated actor as the onboarding/canonical Owner in its own flow. Creator Brand must not inherit that behavior.

Freeze:

```text
Creator Entry subject projection
!=
Creator Brand subject authority
```

Creator Brand uses:

```text
active authenticated Team actor
+ canonical Creator Workspace Owner subject
+ CREATOR_BRAND_* actions
```

The frontend must not derive the subject from the signed-in actor. The backend GET/PUT resolves the subject. The frontend sends no subject/workspace/profile selector.

Browser fixtures for Manager and Assistant must exercise the real authenticated team-context endpoint and real Creator Brand API. Do not use a Creator Entry “ready Owner” projection or production bypass to make delegated roles pass.

---

## 5. Complete P3 implementation scope

Implement the full `/creator/brand` frontend from the accepted P2 API:

```text
GET /api/v1/creator/brand
PUT /api/v1/creator/brand
```

Required hierarchy:

```text
Creator Brand
→ read-only name/avatar/primary Instagram handle
→ Profile & Positioning
→ Creator Style
→ Voice & Personality
→ Visual Identity
→ inline eligible suggestions
→ source/freshness/limitations supporting context
```

Required canonical fields:

```text
headline max 160
commercialBio max 1000, manual-only
primaryNicheIds exact frozen IDs, max 3
languages normalized BCP-47, max 10
creatorArchetypeIds exact Campaign canonical IDs, max 3
archetypeState UNCONFIGURED for empty; CONFIRMED for 1–3
voiceDescriptorIds exact frozen IDs, max 3
voiceDescription max 300
visualStyleDescriptors max 5, each max 100
palette optional, max 5 exact #RRGGBB
```

Required truth behavior:

```text
observed != suggested != confirmed
manual setup works with no Instagram/Content/model
no suggestion auto-applies
confirmed truth survives source failure/disconnect
UGC_CREATOR != willingness
no score/rank/eligibility/performance-superiority claim
```

Use strict Zod client parsing, authenticated fetch, a last-good-preserving hook, accessible local draft state, server-returned response replacement, and backend-compatible commands.

Owner/Manager may:

- create/edit complete manual profile with `MANUAL`;
- use current confirmable candidate with `USE_SUGGESTION`;
- edit only the candidate target with `EDIT_SUGGESTION`;
- cancel without mutation.

Assistant reads only. Respect response `allowedActions`; do not rely only on role labels.

Each logical mutation uses current `expectedRevision` and one idempotency UUID reused for retry of that unchanged request. Do not optimistically claim canonical success. Preserve drafts on recoverable errors; refetch on revision/reference conflict.

---

## 6. Inline suggestions

Render suggestions only beside their eligible target fields:

```text
positioning → primary niches / headline
voice_personality → voice descriptors / optional voice description
creator_style → Creator Archetypes
visual_identity → visual descriptors / palette cue
languages → Languages I create in
```

Rules:

- no Commercial Bio suggestion;
- no sixth family or AI Suggestions tab;
- LOW/MEDIUM and supporting-post count are context, not scores;
- stale/degraded/unconfirmable candidate has no confirmation mutation;
- already-reflected value has no redundant action;
- `paletteCue` with `confirmable=false` is inspiration/context only and must not populate exact hex;
- `USE_SUGGESTION` sends the exact server reference, not value/provenance;
- `EDIT_SUGGESTION` starts from current/valid empty canonical state, applies only the target, preserves unrelated values, and sends full values plus exact reference;
- no raw Evidence IDs, generation IDs, candidate hashes, prompts, source text, provider payload, or model internals are displayed.

---

## 7. Taxonomy and UI donor rules

Reuse the existing frontend Campaign 30-archetype ID/label map and accessible picker behavior. Creator Brand uses max 3; Campaign remains max 5. Do not create a second frontend archetype library or change Campaign Product behavior.

Use the exact Product Amendment 1 niche and voice IDs. Derive readable labels without inventing new semantic values.

For languages, reuse an accepted standards-backed control if present. Otherwise use an accessible bounded BCP-47 token input with canonicalization and CLDR/`Intl.DisplayNames` labels where supported. Do not introduce a Product language taxonomy.

Use Aurora and accepted Creator Audience/Content client/state/responsive patterns. Legacy Profile/Media Kit remains reference-only.

Default source mutation scope is frontend and authority only. If the strict accepted P2 GET/PUT truly cannot support the frontend after this access correction, stop with `P3_BACKEND_CONSUMER_DELTA_REQUIRED`; do not silently change backend.

---

## 8. Navigation correction

Add:

```text
AUTH_ROUTES.creatorBrand = /creator/brand
```

Creator Brand is a peer Creator Centre workspace:

- add it to the desktop Creator sidebar;
- expose it through the expanded mobile drawer;
- require `CREATOR_BRAND_READ` in shell capability projection;
- add correct breadcrumb/title and active-route matching;
- retain the exact five mobile bottom destinations: Home, Insights, Campaigns, Collaborations, Settings;
- do not add a sixth bottom item;
- do not mark Insights active on `/creator/brand`;
- do not add Creator Brand to Audience/Content internal tabs;
- do not restore legacy Creator Centre/Profile/Media Kit navigation.

The navigation item is available from active membership/action even when Instagram is disconnected or absent.

---

## 9. Required state coverage

Prove distinctly:

1. actor-context loading;
2. inactive/missing membership denial;
3. no-Instagram active member access;
4. GET loading;
5. no-data/contract/transport error;
6. unconfigured canonical profile with manual setup;
7. configured canonical profile;
8. no suggestions;
9. partial/current/stale/degraded suggestions;
10. last-good frontend preservation on later GET failure;
11. manual mutation pending/success/error/conflict;
12. suggestion Use/Edit pending/success/error/conflict;
13. Assistant read-only;
14. missing avatar/handle neutral fallback.

Manual actions must remain available to authorized actors regardless of suggestion/source state.

Settings owns Instagram lifecycle. A Settings link may deep-link to the existing Creator Instagram Settings route when useful; no connect/reconnect/disconnect/refresh/delete mutation belongs here.

---

## 10. Required tests

Run the complete original P3 test requirements, including:

- strict parser/forbidden-field rejection;
- manual payload, revision, idempotency, retry, cancel and conflict behavior;
- exact bounds/taxonomies/normalization;
- unconfigured/configured/manual-no-source states;
- inline five-family mapping;
- no Bio suggestion, no auto-apply, no confirm action for palette cue;
- exact Use/Edit request shapes and target-only edit preservation;
- Owner/Manager controls and Assistant read-only;
- read-only projected identity;
- loading/error/partial/stale/degraded/last-good states;
- route/direct address/nav behavior;
- Audience/Content internal navigation unchanged;
- Campaign archetype max-five regression;
- no UGC-willingness coupling;
- no downstream workspace mutation.

Add explicit correction regressions:

1. active Owner with no Instagram can open `/creator/brand` and manually create;
2. active Manager with no Instagram can open/read/edit;
3. active Assistant with no Instagram can open/read but not edit;
4. disconnected/reauth-required source does not redirect Creator Brand to onboarding;
5. same actors remain subject to existing Audience/Content `RequireCreatorPlatformAccess` behavior;
6. inactive/missing membership cannot access Creator Brand;
7. Creator Brand frontend emits no Creator/workspace/profile selector;
8. Manager/Assistant subject remains canonical Owner as returned by backend, not authenticated actor;
9. Creator Entry and its 14 existing access tests remain byte-semantically unchanged and passing;
10. existing shell recovery/Settings behavior remains passing.

---

## 11. Authenticated browser and accessibility proof

Use production frontend/backend paths and disposable PostgreSQL with all 102 migrations. No live Graph/model/provider calls.

At 390, 767, 768 and 1440 prove:

- active no-Instagram Owner directly opens Creator Brand and completes manual setup;
- Manager reads/edits/uses/edits suggestion through real team context and backend APIs;
- Assistant reads but has no mutation controls; direct PUT denied;
- inactive actor denied;
- anonymous API request 401;
- confirmed truth remains visible when source becomes disconnected/degraded;
- later GET failure preserves last good data;
- desktop sidebar/mobile drawer peer navigation works;
- mobile bottom nav remains five items;
- keyboard-only edit, multiselect, suggestion, Save/Cancel flows;
- predictable focus and status announcements;
- no horizontal overflow;
- zero console errors and uncaught page errors;
- Axe serious = 0;
- Axe critical = 0;
- all lesser findings reported and changed-surface defects fixed where bounded.

Browser fixtures may seed data through test-only harnesses. Authentication, team-context resolution, GET/PUT guards, strict client, and production UI must be real. Do not add a production bypass.

---

## 12. Build, regression, and integrity gates

Required:

```text
immutable frontend install
focused frontend tests
complete affected Creator shell tests
Audience/Content frontend regressions
Campaign archetype picker regressions
Creator Entry/RequireCreatorPlatformAccess regressions
frontend typecheck
frontend production build
scoped ESLint
scoped formatter
git diff --check
```

For browser runtime, clean-apply all 102 migrations, boot accepted unchanged backend, and prove `/health/live` and `/health` 200.

Backend must remain exact at:

```text
SHA = 6206f43c6a13c304c971b810e1dd99a20aaaa11f
tree = 533f543612b856cfaf3b57769fe0b5541b803c3f
```

No schema, migration, package, lockfile, dependency, Dockerfile/decoder, provider, or model change.

Scan planned/staged/committed changes and evidence for secrets, credentials, `.env`, signed locators, raw media, private API fixtures, browser state, database artifacts, build outputs and temporary runtime paths. Do not publish screenshots/traces/raw media.

---

## 13. Publication and evidence

Only after every mandatory gate passes:

### Frontend

- commit complete P3 on `program/creator-brand-v0-frontend`;
- normal non-force push;
- independent fetch/prune;
- prove local/fetched SHA/tree equality and accepted predecessor ancestry.

### Backend

- no meaningless commit;
- prove unchanged local/fetched SHA/tree equality.

### Authority

On `program/creator-brand-v0-authority`:

- record P2 accepted;
- record primary P3 circuit-breaker candidate as resolved by this binding access-gate correction;
- record P3 primary runs 1 and correction cycles 1;
- add/update `P3_CREATOR_BRAND_FRONTEND.md` with full evidence;
- archive this exact correction prompt under `runner-prompts/`;
- record P3 evidence-ready but not self-accepted;
- keep P4 prohibited pending Technical-SA review.

Normal non-force push, independent fetch/prune, exact SHA/tree equality and required ancestry are mandatory. Prove prompt source/archive normalized content and SHA-256 equality.

---

## 14. Prohibited work

Do not:

- start P4;
- merge/deploy;
- change Product;
- use newer unreconciled Product files;
- change backend/source/schema/migrations/dependencies;
- weaken or modify existing `RequireCreatorPlatformAccess` or Creator Entry;
- place Creator Brand under the Instagram-dependent guard;
- infer canonical Owner from authenticated actor;
- create a second actor/subject model;
- add a top-level AI Suggestions tab or make Creator Brand an Insights tab;
- add a sixth mobile bottom-nav item;
- edit projected name/avatar/handle;
- add Bio suggestion, sixth family, scores, ranking, eligibility, matching, recommendations, or performance superiority;
- auto-apply suggestions;
- mutate Audience, Content, Campaign, Collaboration, Settings, Portfolio, Media Kit, Commercial Setup, or Marketplace;
- add source lifecycle/manual refresh/delete actions;
- call live Graph, model, OAuth, or Meta/provider mutations.

---

## 15. Circuit breakers

Stop for:

```text
P3_RECOVERY_STATE_MISMATCH
PRODUCT_OR_AUTHORITY_CONFLICT
ACTIVE_TEAM_CONTEXT_REQUIRES_INSTAGRAM
CREATOR_BRAND_READ_NOT_PROJECTED_FOR_ACTIVE_NO_SOURCE_MEMBER
P3_BACKEND_CONSUMER_DELTA_REQUIRED
CANONICAL_OWNER_SUBJECT_CANNOT_BE_PRESERVED
MANUAL_NO_INTELLIGENCE_FLOW_NOT_POSSIBLE_AFTER_GATE_CORRECTION
SCHEMA_MIGRATION_OR_DEPENDENCY_CHANGE_REQUIRED
ACCEPTED_CREATOR_ENTRY_AUDIENCE_CONTENT_CAMPAIGN_REGRESSION
LIVE_PROVIDER_OR_MODEL_REQUIRED
```

Ordinary frontend implementation, contract, state, styling, fixture, harness, focus, accessibility, or selector defects remain bounded P3 correction work.

---

## 16. Immutable return contract

Return exactly:

```text
CREATOR_BRAND_V0_P3_ACCESS_GATE_CORRECTION_1_EXTERNAL_LOCAL_CODEX_REPORT_V1
```

Include:

```text
A. exact starting SHA/tree/worktree/remote proof
B. sole Product authority and correction adjudication reconciliation
C. exact changed files and statistics
D. corrected source-independent route-guard architecture
E. active Owner/Manager/Assistant no-Instagram access proof
F. inactive/missing membership denial proof
G. Creator Entry and RequireCreatorPlatformAccess non-mutation/regression
H. canonical Owner subject/delegated actor proof
I. strict frontend consumer/mutation contract
J. route/sidebar/mobile-drawer/five-bottom-item proof
K. projected identity proof
L. manual-first setup/edit proof
M. canonical fields/bounds/normalization proof
N. shared archetype reuse/Campaign regression
O. inline suggestion mapping and states
P. USE_SUGGESTION proof
Q. EDIT_SUGGESTION proof
R. no auto-apply/Bio/palette/UGC-willingness boundary proof
S. role/action and backend-denial proof
T. source disconnect/failure and last-good preservation
U. authenticated browser matrix 390/767/768/1440
V. keyboard/focus/overflow/Axe/console results
W. frontend tests/typecheck/build/lint/format/diff
X. Audience/Content/shell/Campaign/Creator Entry regressions
Y. backend/schema/migration/dependency unchanged proof
Z. secret/raw-media/browser/runtime-artifact scan
AA. live-call counts
AB. frontend publication/fetch-back equality
AC. backend unchanged equality
AD. authority publication/fetch-back equality
AE. prompt archive digest equality
AF. cleanup/final worktree/resource state
AG. run/correction accounting
AH. exact blocker, if any
```

End exactly:

```text
RESULT =
READY_FOR_CHILD_SA_PROGRAM_ORCHESTRATOR_REVIEW
| CREATOR_BRAND_P3_CORRECTION_REQUIRED
| CREATOR_BRAND_P3_TRUE_CIRCUIT_BREAKER

P0 =
ACCEPTED

P1 =
ACCEPTED

P2 =
ACCEPTED

P3_ACCEPTED =
NO — AWAITING CHILD-SA / PROGRAM-ORCHESTRATOR REVIEW

P3_EVIDENCE_READY =
YES | NO

P3_PRIMARY_RUNS_USED =
1

P3_CORRECTION_CYCLES_USED =
1

P4 =
PROHIBITED

LIVE_GRAPH_CALLS =
NONE

LIVE_MODEL_CALLS =
NONE

META_PROVIDER_MUTATIONS =
NONE

NEW_MIGRATIONS =
NONE

MIGRATION_COUNT =
102

DEVELOPMENT_MERGE =
NOT_PERFORMED

DEPLOYMENT =
NOT_PERFORMED

NEXT_ACTION =
PARENT RETURNS THIS IMMUTABLE REPORT
TO THE CHILD SA / PROGRAM ORCHESTRATOR
```

Do not self-declare P3 accepted. Do not start P4.
