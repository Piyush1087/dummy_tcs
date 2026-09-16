# CAMPAIGN APPLICANT AI MATCH — P0 LOCAL CODEX EXECUTION PROMPT V1

`CAMPAIGN_APPLICANT_AI_MATCH_P0_CURRENT_STATE_DONOR_SCORING_PREFLIGHT_LOCAL_CODEX_EXECUTION_V1`

## 0. Assignment

You are the External Local Codex runner for Applicant AI Match V1 P0.

Execute only:

```text
AUTHORITY / CURRENT-STATE / DONOR / SHARED-RUNTIME AUDIT
+ APPLICATIONSNAPSHOT ADAPTER DESIGN
+ COMPLETE SCORING-REGISTRY PREFLIGHT
+ DEPENDENCY-READINESS DESIGN
+ FINITE P1→P4 PLAN VALIDATION
```

P0 is read-only for backend/frontend source. Authority-document publication is required after all P0 gates pass.

Do not modify backend/frontend source, create migrations or implementation branches, begin P1, make live Graph/model/provider calls, mutate Meta/OAuth/provider configuration, merge `development`/`production`, or deploy.

Return to the Applicant AI Match Technical SA after P0. Do not continue into P1→P4.

## 1. Exact transferred inputs

The Parent supplies this prompt with three files.

```text
CAMPAIGN_APPLICANT_AI_MATCH_PRODUCT_AND_CONSUMER_CONTRACT_V1.md
raw SHA-256 = 74626c7a58040289b1e1b389038e9228fb07f74970975d8c7f1d9ce6fc62d4a0

CAMPAIGN_APPLICANT_AI_MATCH_PRODUCT_CLARIFICATION_V1.md
raw SHA-256 = d7391569edcc180177201245bb1648735c1f7271878953377f6a8b6b31b3f4da

CAMPAIGN_APPLICANT_AI_MATCH_TECHNICAL_PREFLIGHT_AND_FINITE_IMPLEMENTATION_PLAN_V1.md
raw SHA-256 = 6e6630aa39ecef41f68fd844e0c27d3a706bddeb09b1b7be91cdc75a7d552bf5
```

The base Product filename may retain an upload suffix such as `(1)`.

Before repository work, locate and hash all three raw files. Do not normalize bytes to make a mismatch pass. Archive this prompt byte-identically or prove equality after explicitly recorded CRLF/LF and terminal-newline normalization.

If an input is absent/mismatched, stop without repository mutation:

```text
RESULT = APPLICANT_AI_MATCH_P0_AUTHORITY_INPUT_MISMATCH
```

Precedence:

```text
Product Clarification V1 supersedes conflicting Base Product V1 provisions.
Technical Plan V1 controls preflight mechanics but cannot reinterpret Product.
```

## 2. Operating authority

```text
PARENT = final Product/program authority
CAMPAIGN PAGE / C03 = Campaign Applicants and Application authority
APPLICANT AI MATCH TECHNICAL SA = architecture, scoring review and technical acceptance
EXTERNAL LOCAL CODEX = P0 evidence runner only
```

The discarded Campaign Intelligence Integration SA is not authority. Reuse a factual observation only after independently reproducing it from current repository truth.

## 3. Repositories and worktree discipline

Audit:

```text
Piyush1087/dummy_tcs
Piyush1087/creator-commerce-backend-v2-clone
Piyush1087/creator-commerce-frontend-v2-clone
```

Publish only this authority branch after all P0 gates pass:

```text
program/campaign-applicant-ai-match-v1-authority
```

Before audit:

1. identify/fetch/prune expected remotes;
2. inventory registered worktrees and overlapping user work;
3. verify relevant worktrees clean;
4. use fresh task-owned detached/read-only worktrees;
5. never reset, stash, clean, discard, overwrite or reconstruct user work;
6. record exact local/fetched SHA/tree/ancestry for every candidate lineage.

Discover current truth rather than assuming moving default branches.

## 4. Authority and convergence audit

Read applicable repository instructions and engineering/backend/database/validation/AI/frontend/accessibility standards, then exact accepted authority for:

```text
Campaign Page
C03 Application participation
C04 only if prior-work projection is admitted
shared DE/Evidence/Intelligence
Brand and Offering Intelligence
Creator Audience
Creator Content
Creator Brand
Creator Portfolio if technically accepted
accepted Instagram source-native Evidence/Intelligence
```

Fresh-verify every orientation ref in the Product contract, including C03, Audience V1, Content V0, Creator Brand V0 and Portfolio V3. Do not infer acceptance from chat history or downstream references alone.

Explicitly exclude from V1 donor selection:

```text
Work Preferences
Rate Card
Commercial Setup
payout/KYC readiness
Marketplace Recommendation current/rank
raw provider payload/token
```

Produce an authority/dependency DAG and exact candidate backend/frontend/authority implementation bases. Explain every normal merge and excluded branch. Perform no convergence merge in P0; read-only merge-tree previews are allowed.

## 5. C03 ApplicationSnapshot audit

Identify exact executable contracts for:

```text
Application identity and Brand/Campaign/Creator fences
PENDING/APPROVED/REJECTED/EXPIRED lifecycle
ApplicationSnapshot identity/version/hash
Campaign/Brief/Asset/Offering references frozen in snapshot
objective/target/deliverable/Brief fields
Application commercial fields as context only
snapshot transaction/order and ready event/command
terminalization
Applicant read/Approve/Reject authorization and availableActions
approval handoff to C04
```

Propose one strict immutable Match request adapter. It must not roam mutable Campaign state or mutate C03. Prove how terminalization fences a late Match CAS/current publication.

Stop if no safe anchor exists:

```text
APPLICANT_AI_MATCH_APPLICATIONSNAPSHOT_AUTHORITY_GAP
```

## 6. Donor current/reuse matrix

For every candidate donor record:

```text
technical acceptance and exact SHA/tree/authority
subject identity
strict current/output contract
Evidence/provenance availability
freshness/observed-through semantics
PROCESSING/current/unavailable states
tenant/Creator/Brand isolation
admissible fields/subcriteria
deterministic or semantic adapter
absence/failure behavior
reuse classification
```

Required candidates:

```text
Creator Audience
Creator Content
Creator Brand
Brand Intelligence
Offering Intelligence
accepted Instagram-derived current/Evidence
```

Optional, capability-gated enhancers:

```text
Portfolio
C04 verified prior work
```

Optional enhancers must not become hard dependencies. The source-lifecycle cause of donor availability must not enter Match inputs, manifests, limitations or UI. Match consumes only admissible availability/current truth.

## 7. Shared Intelligence placement

Audit subject types, tenant FKs/checks, execution identity, processor bundles, dependency/Evidence manifests, attempt/lease/retry/backoff, generation/Evidence-reference persistence, current/CAS/stale-write rejection and worker/dispatcher primitives.

Propose the smallest architecture for one immutable evaluation per ApplicationSnapshot. Preferred placement is a real `APPLICATION` or `APPLICATION_SNAPSHOT` subject with owning Brand/Campaign/Creator/Application fences plus the shared generation/history/current system.

Never use a synthetic Brand/Offering subject or build a parallel Match runtime.

Classify each schema delta:

```text
REUSE
ADDITIVE_SHARED_ADAPTATION
C03_OWNED_REFERENCE_ONLY
MATCH_OWNED_IMMUTABLE_OUTPUT
NOT_REQUIRED
PROHIBITED_DUPLICATION
```

Include PostgreSQL enum-transaction safety. Never propose unsafe same-transaction use of a newly added enum value.

## 8. Initial dependency-readiness design

Design exactly one initial lifecycle:

```text
ApplicationSnapshot ready
→ idempotent Match request
→ inspect donor states
→ wait while material donors are PROCESSING and readiness is not possible
→ freeze first coherent sufficient/terminal manifest
→ calculate once
→ publish READY or UNAVAILABLE
```

Requirements:

- waiting is not a Match generation;
- do not accept `UNAVAILABLE` while a material donor is actively processing and within policy;
- missing donors never become score zero;
- C03 decision remains nonblocking;
- reuse shared request/worker/lease/backoff or event primitives;
- no second scheduler;
- concurrent donor completions cannot create duplicate manifests/evaluations;
- manifest freezes once;
- terminal Application stops waiting/calculation and rejects current CAS;
- accepted READY/UNAVAILABLE receives no V1 donor-change execution;
- no manual refresh/re-evaluation endpoint or action.

Propose and justify a versioned technical wait horizon, poll/event strategy, retry/backoff, terminal-insufficiency rule and runtime-failure exhaustion rule using existing primitives and expected Creator donor processing.

## 9. Complete scoring registry

Publish candidates for Technical-SA review:

```text
ApplicantAIMatchScoringRegistryV1
ApplicantAIMatchSemanticRubricV1
ApplicantAIMatchPerformanceNormalizationV1
```

V1 scored dimensions:

```text
AUDIENCE_FIT
CONTENT_AND_DELIVERABLE_FIT
BRAND_AND_OFFERING_FIT
PERFORMANCE_FIT
```

`COMMERCIAL_AND_WORK_FIT` is globally `NOT_APPLICABLE` and excluded from the applicable top-level weight denominator.

Every included subcriterion must define:

```text
stable ID and dimension
frozen weight
input owners/contracts
admission rule
AVAILABLE/UNAVAILABLE/CONFLICT/NOT_APPLICABLE rule
exact deterministic formula or structured rubric
0..100 anchors
minimum evidence/sample
coverage contribution
Evidence-reference requirement
limitation/reason codes
contract version
canonicalization/permutation rule
```

No score may remain free-form model judgement.

### 9.1 Audience

Define exact geography, age and legally/Product/provider-authorized gender bucket normalization/overlap, unknown bucket and multi-location handling, plus a bounded affinity semantic rubric. Absence/suppression is unavailable, not zero. Never infer sensitive traits.

### 9.2 Content and Deliverable

Define exact required-format evidence calculation, missing-format coverage, Brief/content semantic rubric, creative/production consistency and optional verified-work admission. Missing examples do not prove inability.

### 9.3 Brand and Offering

Define bounded category/niche, positioning/archetype and tone/visual/content-expression rubrics plus optional relevant-work admission. A self-declared Creator archetype is not automatically proven fit. No private other-Brand history or competitor penalty.

### 9.4 Performance

Define reproducible creator-relative, format-matched reach/view efficiency, engagement/high-intent interaction, consistency and recency/sample calculations.

Preferred meaning:

```text
performance in Campaign-required formats
relative to the Creator's compatible recent-content baseline
```

No cross-Creator/global/industry benchmark without an accepted owner, follower-count quality score or hidden model normalization. One viral post cannot independently create high consistency. Missing denominator means unavailable.

### 9.5 Structured semantic model boundary

For every semantic evaluator define strict bounded inputs, admitted excerpts/observations, prompt-injection controls, strict candidate schema, server finalizer, per-field Evidence sufficiency, sensitive/proxy rejection, bounded output, provider-neutral DI, fail-closed unconfigured production adapter and fixture adapter. Never persist/expose chain-of-thought.

## 10. Arithmetic proof

Use exact rational/decimal basis-point arithmetic and worked fixtures to prove:

```text
NOT_APPLICABLE removal
UNAVAILABLE/CONFLICT coverage reduction without zero
>=50% dimension availability
four-dimension objective-weight normalization
>=60% overall weighted coverage
Audience-or-Content minimum
LOW 60–69 / MEDIUM 70–84 / HIGH 85–100
round-half-up dimension/final boundaries
permutation/hash stability
READY score integer 0..100
non-READY score null
```

Required formulas:

```text
dimension score
= sum(score × admitted subweight) / sum(admitted subweight)

overall coverage
= sum(objective weight × dimension coverage) / sum(applicable objective weights)

overall score
= sum(available dimension score × objective weight) / sum(available dimension weights)
```

Include at least one fixture for every objective and threshold boundary.

## 11. Strict contracts

Propose strict versioned schemas for request, dependency readiness, immutable input manifest, structured-model candidate, Intelligence output, consumer envelope, dimension, subcriterion, reason and limitation.

Consumer separates accepted current, latest attempt/dependency phase and C03 decision actions.

```text
PROCESSING = no current; dependencies/calculation running
READY = accepted numeric current
UNAVAILABLE = accepted no-score current after terminal insufficiency/wait expiry
```

No V1 refresh/re-evaluation action or stale/failed-current supersession flow after accepted current. Runtime failure before current is represented truthfully and remains nonblocking. Reasons are bounded codes/approved copy; raw model/provider output is prohibited.

## 12. Campaign/C03 frontend audit

Inventory exact Campaign route/shell, Applicants card/detail, DTO/parser/client/hooks, Approve/Reject actions, role/auth guards, responsive states and legacy AI/Match Potential fields.

Plan Match only in Applicants. Do not replace Discovery Match Potential, create a fourth workspace, calculate score in frontend, gate C03 decisions, expose Match to Creator, permit score editing, or add refresh/re-evaluation UI.

## 13. Fixtures and finite plan

Preserve Product `MATCH-01` through `MATCH-22` except where Clarification V1 explicitly supersedes re-evaluation or source-lifecycle-specific Match behavior. Mark supersession explicitly.

Add `MATCH-23` through `MATCH-32` from Technical Plan V1 and plan:

```text
cross-tenant/Application/Creator/Evidence substitution
stale snapshot hash/version
duplicate initial request
concurrent donor completion and manifest-freeze race
terminal Application CAS race
malformed/oversized/sensitive/proxy model output
semantic unavailable with deterministic readiness
GET causes zero execution
Approve/Reject remains available during PROCESSING/UNAVAILABLE
Marketplace score never copied
Work Preferences/Rate Card never queried
```

Validate or boundedly correct:

```text
P1 foundation + deterministic vertical slice
P2 semantic evaluators + complete Match Object
P3 C03 orchestration/API + Applicants frontend
P4 integrated acceptance + closeout
```

For every packet specify purpose, allowed surfaces, migration boundary, unit/PostgreSQL/integration/browser gates, checkpoint publication, normal correction scope and circuit breakers. Determine whether P1→P4 can run as one autonomous execution after Technical-SA P0 acceptance.

## 14. P0 authority publication

After every P0 gate passes, publish only documentation on:

```text
program/campaign-applicant-ai-match-v1-authority
```

Path:

```text
docs/ai-collaboration/campaign-page/campaign-applicant-ai-match-v1/
```

Required files:

```text
CAMPAIGN_APPLICANT_AI_MATCH_PRODUCT_AND_CONSUMER_CONTRACT_V1.md
CAMPAIGN_APPLICANT_AI_MATCH_PRODUCT_CLARIFICATION_V1.md
CAMPAIGN_APPLICANT_AI_MATCH_TECHNICAL_PREFLIGHT_AND_FINITE_IMPLEMENTATION_PLAN_V1.md
P0_CURRENT_STATE_DONOR_SCORING_AND_DEPENDENCY_PREFLIGHT.md
EXECUTION_LEDGER.md
runner-prompts/CAMPAIGN_APPLICANT_AI_MATCH_P0_LOCAL_CODEX_EXECUTION_PROMPT_V1.md
```

Transferred files and prompt archive must match exact digests/content, subject only to recorded prompt newline normalization. Use one ledger. Normal non-force push and independent fetch-back with exact local/remote SHA/tree equality.

## 15. Security/live-call boundary

Do not read, print or persist secrets, tokens, credentials, signed locators, raw media, private provider payloads or model chain-of-thought.

```text
LIVE_GRAPH_CALLS = NONE
LIVE_MODEL_CALLS = NONE
META_PROVIDER_MUTATIONS = NONE
```

No live credential or configured model absence blocks P0.

## 16. Circuit breakers

Stop without backend/frontend mutation for:

```text
APPLICANT_AI_MATCH_P0_AUTHORITY_INPUT_MISMATCH
APPLICANT_AI_MATCH_AUTHORITY_CONFLICT
APPLICANT_AI_MATCH_STARTING_REPOSITORY_CONFLICT
APPLICANT_AI_MATCH_APPLICATIONSNAPSHOT_AUTHORITY_GAP
APPLICANT_AI_MATCH_TENANT_IDENTITY_GAP
APPLICANT_AI_MATCH_SHARED_RUNTIME_SCOPE_EXPANSION_REQUIRED
APPLICANT_AI_MATCH_SCORING_PRODUCT_CONFLICT
APPLICANT_AI_MATCH_DONOR_CONTRACT_CONFLICT
```

Optional donor absence, donors processing, unavailable credentials or an unconfigured production model adapter are not circuit breakers.

## 17. Required immutable return

Return exactly:

```text
CAMPAIGN_APPLICANT_AI_MATCH_P0_EXTERNAL_LOCAL_CODEX_REPORT_V1
```

Include:

```text
A. transferred-input and prompt digests
B. repository/fetch/worktree proof
C. standards/authority/supersession reconciliation
D. exact candidate bases and convergence DAG
E. C03 Application/ApplicationSnapshot audit
F. immutable Match request fence
G. C03 lifecycle/terminalization/availableActions boundary
H. donor technical-acceptance matrix
I. donor current/Evidence adapter matrix
J. excluded donor/non-dependency proof
K. shared Intelligence subject/runtime/current placement
L. dependency-readiness state machine
M. proposed wait horizon/retry/backoff
N. complete scoring registry
O. deterministic evaluator formulae
P. structured semantic rubric/model boundary
Q. performance normalization
R. coverage/weight/rounding proofs
S. strict request/manifest/output/consumer schemas
T. reason/limitation registry
U. privacy/sensitive/proxy controls
V. terminal Application race/CAS design
W. Applicants frontend/current-file map
X. schema/migration/upgrade/rollback plan
Y. fixture/acceptance matrix
Z. validated P1→P4 plan
AA. actual tests/static checks run
AB. schema/migration/dependency identity
AC. secret/forbidden-artifact scan
AD. live-call/provider-mutation proof
AE. backend/frontend unchanged proof
AF. authority inventory/publication equality
AG. archive digest equality
AH. cleanup/final worktrees
AI. exact blocker, if any
```

Success footer:

```text
RESULT = READY_FOR_APPLICANT_AI_MATCH_TECHNICAL_SA_REVIEW

P0_EVIDENCE_READY = YES
P1 = NOT_STARTED
P2 = NOT_STARTED
P3 = NOT_STARTED
P4 = NOT_STARTED

PRODUCT_INPUT = VERIFIED
CLARIFICATION_INPUT = VERIFIED
PLAN_INPUT = VERIFIED

IMPLEMENTATION_BASES = PROPOSED_FOR_TECHNICAL_SA_ACCEPTANCE
SCORING_REGISTRY = CANDIDATE_AWAITING_TECHNICAL_SA_ACCEPTANCE
DEPENDENCY_WAIT_POLICY = CANDIDATE_AWAITING_TECHNICAL_SA_ACCEPTANCE

LIVE_GRAPH_CALLS = NONE
LIVE_MODEL_CALLS = NONE
META_PROVIDER_MUTATIONS = NONE

BACKEND_CHANGED = NO
FRONTEND_CHANGED = NO
NEW_MIGRATIONS = NONE

DEVELOPMENT_MERGE = NOT_PERFORMED
DEPLOYMENT = NOT_PERFORMED

NEXT_ACTION =
PARENT RETURNS THIS IMMUTABLE REPORT
TO THE APPLICANT AI MATCH TECHNICAL SA
FOR P0 REVIEW AND P1-P4 AUTHORIZATION
```

## 18. Final instruction

Begin with exact transferred-input verification and complete authority discovery. Do not stop at the first optional-donor gap. Complete the scoring, dependency, runtime and finite-plan preflight unless a defined circuit breaker occurs.

The objective is an exact P0 package that enables one autonomous P1→P4 implementation without inventing Campaign, C03, donor or scoring authority during source mutation.
