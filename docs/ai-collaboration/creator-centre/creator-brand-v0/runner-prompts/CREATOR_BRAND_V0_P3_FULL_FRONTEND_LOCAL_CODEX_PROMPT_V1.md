# Creator Brand V0 — P3 Full Frontend — Local Codex Prompt V1

`CREATOR_BRAND_V0_P3_FULL_FRONTEND_LOCAL_CODEX_PROMPT_V1`

You are the **External Local Codex execution runner**. The Parent is mechanically relaying this exact prompt. You have no Product authority and must not self-accept P3.

Execute only:

```text
P3 — COMPLETE CREATOR BRAND V0 FRONTEND
     + MANUAL-FIRST EDITING
     + INLINE SUGGESTION USE / EDIT
     + CREATOR CENTRE ROUTE / NAVIGATION INTEGRATION
     + RESPONSIVE / ACCESSIBILITY PROOF
```

Do not start P4. Return one immutable report for Technical-SA / Program-Orchestrator review.

---

## 1. Technical-SA predecessor adjudication

The Technical SA has accepted:

```text
P0 = ACCEPTED
P0_PRIMARY_RUNS_USED = 1
P0_CORRECTION_CYCLES_USED = 0

P1 = ACCEPTED
P1_PRIMARY_RUNS_USED = 1
P1_CORRECTION_CYCLES_USED = 1

P2 = ACCEPTED
P2_PRIMARY_RUNS_USED = 1
P2_CORRECTION_CYCLES_USED = 0

P3 = AUTHORIZED_FOR_EXTERNAL_LOCAL_CODEX
```

P2 acceptance includes its explicit non-blocking local-runner hygiene exception for one ignored `dist` directory. It is not part of an accepted Git tree and must not be used as P3 input. Use fresh isolated P3 worktrees.

Record P2 acceptance in the next normal Creator Brand authority update. Do not reopen P0–P2 architecture, Product decisions, or evidence.

---

## 2. Exact starting checkpoints

Fetch/prune normally. Before mutation, verify repository identity, exact local/fetched SHA/tree equality, required ancestry, clean fresh worktrees and no overlapping user work.

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

### Program authority

```text
repository = Piyush1087/dummy_tcs
branch = program/creator-brand-v0-authority
SHA = 26feb12690e0031e3e0cce328b12eebcfaf62670
tree = be4b3afd49c4a823a4949c3079e0fcf1255b1360
parent = 60ab540232e4947d3c38f3cb1ad50e2f8f47bf99
```

Required Product/Content authority ancestors remain:

```text
7e54d3980ca3454263600e44766041dbb58e0a06
cb9ee23118eafb2dc156c25eb09702ea93252db4
```

### Database

```text
migration count = 102
migration head = 20260915100000_creator_brand_canonical_profile_revision
migration SHA-256 = ec6484427c24d5755549ff9e71bae989f5ff592a6fc5da953ca07494b8744452
```

If any exact checkpoint differs, stop before mutation. Do not reset, clean, stash, discard, or overwrite user work.

---

## 3. Sole Product authority

Use only:

```text
Product Register V2 = 2d561da03ae5df296443f32f79f24264cc8a9361
Technical Handoff V2 = 0db5974c562aea96568c4e12b240cbb1ef5cd09d
Product Amendment 1 = 07917b2191a6de3f0c8ffb86500abc597478fc2b
Execution Authorization = 7e54d3980ca3454263600e44766041dbb58e0a06
```

Any later Creator Brand or Brand Centre Product register on `main` or another C03/Creator-Orchestrator lineage is dirty/unreconciled and must be ignored.

Read applicable `AGENTS.md`, frontend/UX/accessibility/security standards, accepted P0–P2 artifacts, the single ledger, the current backend public contracts, and the accepted Audience/Content frontend before implementation.

---

## 4. P3 purpose and architecture boundary

Deliver the complete Creator-facing V0 workspace using the accepted P2 API:

```text
GET /api/v1/creator/brand
PUT /api/v1/creator/brand
```

The frontend must preserve:

```text
OBSERVED != SUGGESTED != CREATOR_CONFIRMED

Intelligence = optional accelerator
Intelligence != setup prerequisite

suggestion use/edit = explicit canonical mutation
source refresh/failure/disconnect != canonical truth deletion
```

Default mutation scope is **frontend plus authority documentation only**.

Do not change backend source, schema, migrations, public routes, persistence, processor behavior, scheduling, provider behavior, or Product semantics.

If the exact P2 consumer lacks information that makes a truthful and usable P3 impossible, stop with:

```text
P3_BACKEND_CONSUMER_DELTA_REQUIRED
```

and identify the smallest exact read-only delta. Do not silently expand P3 into backend work.

Migration count must remain 102.

---

## 5. Existing donors to reuse

Inspect and reuse where semantically valid:

- authenticated `authenticatedFetch` client behavior;
- strict Zod parser/client/hook pattern from Creator Audience and Content;
- last-good preservation behavior from accepted Intelligence workspaces;
- current Creator shell, `RequireCreatorPlatformAccess`, actor context, route guards, desktop sidebar, mobile drawer and five-item bottom navigation;
- Aurora tokens/components and established Creator Centre spacing;
- accessible multi-select/chip/search behavior from the current Campaign Creator Archetype picker;
- the existing frontend Campaign canonical 30-archetype ID/label map rather than creating a second frontend archetype list;
- current Settings recovery deep-link conventions.

Legacy Creator Profile / Media Kit UI is reference-only. It must not become Product, persistence, route, or field authority.

Do not invoke Stitch merely to restyle an already-solvable interaction. If accepted donors cannot resolve a material interaction, stop and report the exact gap rather than inventing new Product.

---

## 6. Strict frontend contract

Create a strict frontend schema matching the accepted P2 response exactly:

```text
contractVersion = creator-brand-v0.1

identity:
  creatorName
  avatarImageReference
  primaryInstagramHandle

state = UNCONFIGURED | CONFIGURED
profile = nullable canonical Creator Brand profile
currentRevision = non-negative integer

context:
  role = OWNER | MANAGER | ASSISTANT
  allowedActions
  manualFirst = true
  sourceIndependent = true

suggestions:
  state
  freshness
  processing
  objectGenerationId
  autoApply = false
  coverage
  eligiblePosts
  limitations
  exactly five families and bounded candidates
```

Reject unknown or malformed payloads, forbidden secret/provider/pipeline fields, invalid canonical profile bounds, `HIGH` suggestion confidence, `autoApply=true`, invalid candidate IDs/references, and any sixth family.

Update the shared frontend Creator action contract to include exactly:

```text
CREATOR_BRAND_READ
CREATOR_BRAND_EDIT
CREATOR_BRAND_CONFIRM_SUGGESTION
```

Preserve all existing Creator actions and shell behavior.

Frontend parsing is defense in depth. The backend remains authorization and validation authority.

---

## 7. Canonical edit model

Represent the full canonical draft exactly:

```text
headline: nullable, max 160
commercialBio: nullable, max 1000
primaryNicheIds: exact frozen IDs, max 3
creatorArchetypeIds: canonical Campaign IDs, max 3
archetypeState: UNCONFIGURED | CONFIRMED
voiceDescriptorIds: exact frozen IDs, max 3
voiceDescription: nullable, max 300
visualStyleDescriptors: bounded strings, max 5, each max 100
palette: nullable #RRGGBB values, max 5
languages: normalized BCP-47 values, max 10
```

Rules:

- empty archetypes require `UNCONFIGURED`;
- 1–3 selected archetypes require `CONFIRMED`;
- `UGC_CREATOR` is only a style/archetype and must not imply or mutate willingness;
- niches are Creator positioning topics, not preferred Brand industries;
- languages are languages the Creator creates in, not fluency, geography, or legal locale;
- palette accepts Creator-entered exact hex only and normalizes to uppercase;
- no suggestion or loose color word may fabricate an exact hex;
- Commercial Bio is manual-only;
- null and empty collection semantics must match the backend contract.

Use exact Product Amendment 1 niche IDs and voice IDs. Reuse the existing frontend canonical Campaign archetype list/labels; Creator selection cardinality is separately max 3 and must not alter Campaign max 5.

For language entry, prefer an existing accessible standards-backed control. If none exists, implement a bounded token input that validates/canonicalizes BCP-47 tags and renders CLDR/`Intl.DisplayNames` labels where supported. Do not invent a new Product language taxonomy or make a short visible list the only accepted set.

---

## 8. Manual-first form behavior

The workspace must be fully usable with:

```text
no Instagram connection
no current Content Object
no suggestions
stale/unavailable suggestions
provider/model failure
```

For authorized Owner/Manager:

- `UNCONFIGURED`: show a clear `Set up Creator Brand` / `Write my own` entry into the complete manual form;
- `CONFIGURED`: show current confirmed values first and an explicit `Edit Creator Brand` action;
- edit mode uses one local full-profile draft;
- Save sends `MANUAL` with exact `expectedRevision`, one UUID idempotency key per logical submission, and complete validated values;
- retry of the same unresolved submission reuses its idempotency key;
- a materially changed draft uses a new key;
- Cancel restores server-confirmed values without mutation;
- do not optimistically present unsaved data as canonical;
- after success, replace local state with the strict server response and announce success;
- on conflict/stale revision, refetch and ask the user to review current truth rather than overwriting;
- on validation/network failure, preserve the draft and show field/global errors;
- prevent double submission.

For Assistant:

- show the same canonical read view;
- show no edit/setup/use/edit-suggestion controls;
- never infer mutation access from role label alone—respect `allowedActions`;
- direct PUT remains backend-denied.

Do not add autosave, source-driven overwrite, AI-chat editing, bulk reset, history UI, or destructive delete.

---

## 9. Inline suggestion interaction

Suggestions belong inline with the eligible field, never in a top-level AI Suggestions tab.

Map only:

```text
positioning:
  primaryNicheIds
  headline

voice_personality:
  voiceDescriptorIds
  voiceDescription

creator_style:
  creatorArchetypeIds

visual_identity:
  visualStyleDescriptors
  paletteCue

languages:
  languageTags → canonical profile languages
```

No Commercial Bio suggestion and no sixth family.

For each AVAILABLE candidate:

- show the proposed value in human-readable form;
- label it as a Creator Shop suggestion, never confirmed truth;
- show `LOW` or `MEDIUM` support and supporting-post count as supporting context, not a score/rank;
- show freshness/degraded/processing limitations without pipeline internals;
- distinguish current confirmed value from the suggestion;
- if suggestion value already equals confirmed value, show it as already reflected and do not offer a redundant mutation;
- if `confirmable=false`, show supporting cue only with no Use/Edit mutation action;
- never expose Object/component generation IDs, candidate hashes, Evidence IDs, prompts, raw source text, provider payloads, or model internals.

Authorized action behavior:

### Use suggestion

Send:

```text
intent = USE_SUGGESTION
expectedRevision = current revision
idempotencyKey = stable for this logical submission/retry
suggestionReference = exact server-returned object/component/candidate reference
```

Do not send client-claimed suggestion value or provenance.

### Edit before using

- begin from current canonical profile or the valid progressive empty profile;
- prefill only the candidate target field;
- allow editing only that candidate-owned target in this flow;
- preserve unrelated fields byte-semantically;
- submit the complete profile using `EDIT_SUGGESTION` plus the exact server reference;
- do not let a stale/foreign/unconfirmable candidate become a manual-origin shortcut.

### Write my own

Open the normal `MANUAL` edit path with no suggestion reference.

Do not auto-apply any candidate on render, refresh, source recovery, selection, or form open.

---

## 10. Workspace information hierarchy

Implement one coherent `/creator/brand` workspace:

```text
CREATOR BRAND

read-only projected identity
  name
  avatar
  primary Instagram handle when available

Profile & Positioning
  Headline / Positioning
  Commercial Bio
  Primary Niches
  Languages I create in

Creator Style
  Creator Archetypes

Voice & Personality
  controlled descriptors
  optional short description

Visual Identity
  style descriptors
  optional palette

inline suggestions beside their eligible fields

source / freshness / limitations
  supporting context last
```

Understanding and confirmed truth come first. Technical pipeline details remain hidden.

Projected name, avatar, and handle are read-only. Do not add competing edit links or controls for them inside Creator Brand. Missing avatar/handle uses a truthful neutral fallback and never blocks setup.

Use Creator-facing language. Do not describe the Creator as a Brand account, do not display a Creator Brand score, and do not imply Marketplace/Campaign eligibility.

---

## 11. Route and navigation integration

Add:

```text
AUTH_ROUTES.creatorBrand = /creator/brand
```

Route requirements:

- authenticated App shell;
- `RequireCreatorPlatformAccess`;
- explicit `CREATOR_BRAND_READ` frontend projection guard;
- backend remains read authority;
- no caller Creator/workspace selector;
- direct address and refresh work.

Creator Brand is a **peer Creator Centre workspace**, not a third Audience/Content Insights tab.

Navigation behavior:

- add `Creator Brand` to the desktop Creator sidebar;
- it therefore appears in the expanded mobile navigation/drawer;
- keep the existing five-item mobile bottom navigation exactly as Home, Insights, Campaigns, Collaborations, Settings;
- do not create a sixth bottom-navigation item;
- do not mark Insights active while on `/creator/brand`;
- add correct Creator Brand breadcrumb/header metadata and active-route matching;
- preserve Audience/Content internal nav unchanged;
- do not reintroduce legacy Creator Centre tabs, Profile/Media Kit routes, or Marketplace.

If current shell primitives cannot express this peer navigation without a material Product conflict, stop and report it.

---

## 12. Frontend state model

Prove distinct, truthful states:

1. initial loading/skeleton;
2. transport or contract error with no last good data;
3. unconfigured canonical profile with full manual path;
4. configured canonical profile;
5. no usable suggestions/manual still available;
6. partial suggestions;
7. current suggestions;
8. stale suggestions;
9. degraded/failed processing with preserved suggestions;
10. source disconnected or reauth-required context where projected by the API;
11. mutation pending;
12. mutation validation error;
13. revision/reference conflict requiring refetch;
14. mutation success;
15. Assistant read-only.

When a GET refresh fails after successful data:

- preserve last-good canonical truth;
- distinguish local transport degradation from server-reported source/suggestion degradation;
- never replace missing values with empty/zero;
- never relabel stale suggestions as current;
- never disable manual edit merely because suggestions are unavailable.

Settings owns Instagram recovery. If the accepted API does not project a Settings recovery route, use the canonical existing Creator Settings Instagram route constant; do not add a lifecycle mutation inside Creator Brand.

---

## 13. Responsive and accessibility requirements

Required widths:

```text
390
767
768
1440 / desktop
```

At all widths:

- semantic hierarchy remains intact;
- no horizontal page overflow;
- controls and suggestion actions remain understandable;
- selected chips/tokens wrap safely;
- long bios, labels, handles, language names, limitations, and errors wrap;
- palette inputs/swatches retain accessible text labels;
- no hover-only action or meaning.

Accessibility:

- one page `h1`, ordered section headings;
- every input has a programmatic label and error association;
- selection controls expose state/count/limit;
- keyboard-only operation for navigation, edit, multiselect, suggestion Use/Edit, Save and Cancel;
- visible focus;
- predictable focus after opening/canceling/saving/error;
- mutation/loading/status announcements use appropriate live regions without noise;
- dialog use, if any, has focus containment/return and Escape behavior;
- icon-only controls have accessible names;
- color swatches are never color-only information;
- Axe serious = 0;
- Axe critical = 0;
- report all lesser findings; fix changed-surface defects where bounded.

---

## 14. Required automated frontend tests

At minimum add/cover:

1. strict valid response parsing;
2. malformed/unknown/secret-shaped response rejection;
3. exact canonical bounds and normalization;
4. backend-compatible full manual payload;
5. exact `MANUAL` request revision/idempotency behavior;
6. exact `USE_SUGGESTION` request contains reference, not candidate value/provenance;
7. exact `EDIT_SUGGESTION` request preserves unrelated fields;
8. stale/revision conflict refetch behavior;
9. failed mutation preserves draft;
10. successful mutation replaces state from server response;
11. unconfigured/no-Intelligence manual setup;
12. configured manual editing;
13. inline suggestions by exact field/family;
14. Commercial Bio has no suggestion;
15. unconfirmable palette cue has no mutation action;
16. already-reflected suggestion does not offer redundant action;
17. LOW/MEDIUM only and no score/ranking copy;
18. Owner/Manager control visibility;
19. Assistant read-only behavior;
20. projected identity read-only behavior;
21. missing avatar/handle behavior;
22. loading/error/partial/stale/degraded/last-good states;
23. route and direct-address behavior;
24. sidebar/mobile-drawer integration;
25. mobile bottom nav remains exactly five accepted destinations;
26. Audience and Content routes/nav regression;
27. Campaign Creator Archetype picker remains 1–5 and uses the same canonical frontend list;
28. `UGC_CREATOR` never maps to willingness;
29. no Media Kit/Portfolio/Commercial Setup/Marketplace mutation or route;
30. no automatic PUT on load, refresh, or suggestion render.

Use existing test conventions. Do not add dependencies unless unavoidable; a dependency expansion is a stop-and-review event.

---

## 15. Authenticated browser proof

Use a disposable local runtime and the accepted provider-neutral fixture/database route. Do not call Meta, Graph, OAuth, or a live model.

At minimum prove:

### Manual-first Owner flow

```text
no Instagram/current Content/suggestions
→ GET returns canonical unconfigured/manual-first state
→ /creator/brand renders
→ Owner completes bounded fields
→ one MANUAL PUT
→ confirmed values render after server response
→ page reload preserves them
```

### Suggestion flow

```text
accepted Content/P2 fixture
→ inline supported suggestions render
→ Use suggestion sends exact reference
→ canonical profile/revision updates
→ Edit before using permits target-field edit only
→ revision origin is server-governed
→ no auto-apply
```

### Role flow

- Manager reads, manually edits, uses and edits a suggestion;
- Assistant reads the same canonical profile but sees no mutation controls;
- anonymous API request is 401;
- inactive/unauthorized actor cannot render/use protected workspace behavior;
- direct unauthorized PUT is denied.

### Preservation/state flow

- provider/suggestion failure does not erase confirmed truth;
- last-good frontend data remains visible on a subsequent GET failure;
- stale/degraded/unconfirmable suggestion actions are correctly bounded;
- no source state is represented as zero/empty canonical truth.

Run at 390, 767, 768 and 1440. Prove keyboard/focus, no horizontal overflow, zero console/page errors, and Axe requirements.

Browser fixtures may seed backend/database state through a test-only harness, but the authenticated session, production API guards, real GET/PUT routes, strict frontend client, and production page must be exercised. No production bypass.

---

## 16. Required build and integrity gates

Frontend:

```text
immutable dependency install
focused parser/client/hook/component/page/route/nav tests
complete affected Creator shell regression
Audience/Content frontend regression
Campaign archetype picker regression
frontend typecheck
frontend production build
scoped ESLint
scoped formatter check
git diff --check
```

Backend unchanged proof:

```text
exact SHA/tree remains 6206f43c6a13c304c971b810e1dd99a20aaaa11f
no changed backend file
migration count/head/checksum unchanged
```

If browser fixtures use the backend, boot it against disposable PostgreSQL with all 102 migrations and prove `/health/live` and `/health`; this is evidence use, not backend mutation.

Scan changed/planned/staged/committed content for secrets, credentials, `.env`, signed locators, raw media, browser state, database artifacts, build output, screenshots/videos unless the authority artifact explicitly records only safe textual evidence, and temporary runtime paths.

Do not commit screenshots, browser traces, raw API fixtures containing private data, or generated build output.

---

## 17. Publication and authority evidence

Only after every mandatory P3 gate passes:

### Frontend

1. Commit the complete P3 frontend checkpoint on `program/creator-brand-v0-frontend`.
2. Normal non-force push.
3. Independent fetch/prune.
4. Prove local/fetched SHA and tree equality.
5. Prove accepted P3 frontend predecessor ancestry.

### Backend

Do not create a meaningless commit. Prove unchanged local/fetched SHA/tree equality.

### Authority

Update only the existing Creator Brand authority lineage:

- record explicit P2 Technical-SA acceptance in the single ledger;
- add `P3_CREATOR_BRAND_FRONTEND.md` with exact evidence;
- archive this exact runner prompt under `runner-prompts/`;
- record P3 as evidence-ready, not self-accepted;
- keep P4 prohibited pending Technical-SA review.

Commit on `program/creator-brand-v0-authority`, normal non-force push, independent fetch/prune, and prove local/fetched SHA/tree equality plus required ancestry.

Prove prompt source/archive content equality and SHA-256 after only permitted line-ending/one-terminal-newline normalization.

---

## 18. Prohibited work

Do not:

- start P4 or final closeout;
- merge to `development`;
- deploy;
- change Product authority;
- use a newer dirty Creator Brand register;
- add or alter backend persistence/processor/scheduler/provider behavior;
- add a migration or dependency without stopping;
- create a second Creator Brand API/current store;
- create a top-level AI Suggestions tab;
- make Creator Brand an Insights tab;
- add a sixth mobile bottom-nav item;
- edit name/avatar/Instagram identity here;
- add Commercial Bio suggestion;
- add suggestion families or multiple competing candidates;
- expose raw Evidence/provider/model/pipeline internals;
- auto-apply suggestions;
- infer palette hex from loose color words;
- infer UGC willingness from `UGC_CREATOR`;
- add scores, rankings, eligibility, matching, recommendations, or performance superiority;
- add editing for Audience/Content;
- mutate Portfolio, Media Kit, Commercial Setup, Campaign, Collaboration, Creator Settings, or Marketplace;
- add source lifecycle/OAuth/refresh/delete actions;
- perform live Graph/model/provider calls or Meta mutations.

---

## 19. Circuit breakers

Stop before unauthorized expansion for:

```text
P3_STARTING_STATE_MISMATCH
PRODUCT_OR_AUTHORITY_CONFLICT
P3_BACKEND_CONSUMER_DELTA_REQUIRED
MANUAL_NO_INTELLIGENCE_FLOW_NOT_POSSIBLE
CANONICAL_ARCHETYPE_FRONTEND_REUSE_CONFLICT
CREATOR_BRAND_ROUTE_OR_NAV_PRODUCT_CONFLICT
ROLE_OR_SUBJECT_AUTHORITY_CONFLICT
SUGGESTION_CONFIRMATION_CANNOT_REMAIN_SERVER_VERIFIED
UGC_ARCHETYPE_WILLINGNESS_COLLISION
SOURCE_FAILURE_WOULD_HIDE_OR_OVERWRITE_CONFIRMED_TRUTH
SCHEMA_OR_MIGRATION_CHANGE_REQUIRED
DEPENDENCY_EXPANSION_REQUIRED
ACCEPTED_AUDIENCE_CONTENT_CAMPAIGN_REGRESSION
LIVE_PROVIDER_OR_MODEL_REQUIRED
```

Ordinary frontend parser, state, styling, selector, fixture, browser-harness, focus, and accessibility defects are normal P3 correction work.

---

## 20. Expected immutable return contract

Return exactly:

```text
CREATOR_BRAND_V0_P3_EXTERNAL_LOCAL_CODEX_REPORT_V1
```

Include:

```text
A. exact starting SHA/tree/worktree/remote proof
B. standards and sole Product-authority reconciliation
C. P2 acceptance ledger canonicalization
D. exact changed files and diff statistics
E. strict frontend consumer/mutation contract
F. route, guard, server-resolved subject and direct-address proof
G. Creator Centre desktop/sidebar/mobile-drawer integration
H. unchanged five-item mobile bottom navigation proof
I. read-only projected identity proof
J. manual-first unconfigured/configured behavior
K. complete canonical field/bound/normalization behavior
L. Creator Archetype shared-frontend reuse and Campaign 1–5 regression
M. inline five-family suggestion rendering
N. USE_SUGGESTION request and result proof
O. EDIT_SUGGESTION target-only draft/request/result proof
P. no auto-apply / no Bio suggestion / palette-cue boundary
Q. Owner/Manager/Assistant frontend and backend-denial behavior
R. loading/error/partial/stale/degraded/last-good state proof
S. source failure/disconnect canonical-truth preservation
T. authenticated browser matrix at 390/767/768/1440
U. keyboard/focus/overflow/Axe/console results
V. frontend test/typecheck/build/lint/format/diff results
W. Audience/Content/Creator-shell/Campaign regressions
X. backend/schema/migration/dependency unchanged proof
Y. secret/raw-media/browser/runtime-artifact scan
Z. live-call counts
AA. frontend publication/fetch-back SHA/tree equality
AB. backend unchanged fetched equality
AC. authority publication/fetch-back SHA/tree equality
AD. prompt archive digest equality
AE. cleanup and final worktree/resource state
AF. primary-run/correction-cycle accounting
AG. exact blocker, if any
```

End exactly:

```text
RESULT =
READY_FOR_CHILD_SA_PROGRAM_ORCHESTRATOR_REVIEW
| CREATOR_BRAND_P3_CORRECTION_REQUIRED
| CREATOR_BRAND_P3_CIRCUIT_BREAKER

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
<integer>

P3_CORRECTION_CYCLES_USED =
<integer>

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
