# Campaign Intelligence — Post-Reconciliation Read-Only Delta Preflight V1

## Assignment

You are the local Codex runner performing the mandatory post-reconciliation delta preflight for two paused workstreams:

1. Campaign Applicant AI Match V1
2. Campaign Performance/Reporting V1

This is one shared repository/topology inspection with two strictly independent lane adjudications.

Do not combine Product authority, implementation scope, acceptance status, or resumption decisions across the two lanes.

This assignment is read-only.

IMPLEMENTATION = NOT AUTHORIZED

RESUMPTION = NOT AUTHORIZED

BRANCH CREATION = NOT AUTHORIZED

COMMIT_OR_PUSH = NOT AUTHORIZED

MIGRATION_OR_DATABASE_EXECUTION = NOT AUTHORIZED

TEST_OR_BUILD_RERUN = NOT REQUIRED

LIVE_PROVIDER_OR_MODEL_CALL = PROHIBITED

The objective is to determine exactly what changed between each paused workstream’s accepted authority and the new immutable canonical application checkpoint; what accepted planning can carry forward; what must be corrected; what prerequisites remain missing; and what separate Parent decisions would be required before either lane resumes.

## Canonical reconciliation authority

Canonical reconciliation is complete and Parent-accepted.

Authority repository:

- Repository:
  Piyush1087/dummy_tcs
- Canonical authority branch:
  canonical/mvp-canonical-application-v1-authority
- Final checkpoint record commit:
  73d9cf8ecd0dd477d0b2d3d04fa1a3b17bfe427b
- Tree:
  16300ee47c241c3717a24603c02114275ee4b4bc
- Sole parent:
  d9793ce0dece8d8de4054a14c124c1205faa8555
- Record path:
  docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_FINAL_ACCEPTANCE_AND_CHECKPOINT_V1.md
- Record blob:
  43c48758a32290783f49991d9277408c0e951a9b

Canonical backend:

- Repository:
  Piyush1087/creator-commerce-backend-v2-clone
- Branch:
  canonical/mvp-canonical-application-v1-backend
- Commit:
  1a99cf3f54df849408c8775b20e78c036ee637c3
- Tree:
  9679ed60f186220716e948779d3d70dbbf89b39a
- Prisma schema blob:
  1d9b3a8bf3145d47d326fae88493f7816eef9140
- Migration count:
  108
- Migration subtree:
  ae9c3e8036461260ad6f0963dffb7d5d9d010139

Canonical frontend:

- Repository:
  Piyush1087/creator-commerce-frontend-v2-clone
- Branch:
  canonical/mvp-canonical-application-v1-frontend
- Commit:
  edc6ff991a43ce3a93d2bd242d148a6fcbd104dc
- Tree:
  8b8a9c515afb04a69a962e4d786d7f398854ea9c

Validation support is evidence only and is not an implementation base:

- Backend support:
  9b48025a1aacfe00a8ea0451ca250f6a1bd853e9
- Frontend support:
  9685d1ef0b3c3eaa9f68ea7d60eb29e92a2a0fca
- Final validation evidence:
  d09457951ffd04cfbd259e3ffcb6b61a6c88ccde

Do not select a validation-support commit as an application base.

## Applicant AI Match pause authority

- Pause commit:
  2358578de79a99cef1aae88f9c5059e19c0e9ef5
- Pause register:
  docs/ai-collaboration/campaign-page/campaign-applicant-ai-match-v1/CAMPAIGN_APPLICANT_AI_MATCH_PAUSE_AND_RESUMPTION_REGISTER_V1.md
- Last accepted P0 authority:
  3b62be76a4412f7f657e66291b253bf9918b76f9
- Accepted P0 tree:
  c207976e475570b5b5f20dc863fc1a23b6f694d1
- Accepted implementation checkpoint:
  NONE
- Backend implementation branch:
  NONE
- Frontend implementation branch:
  NONE
- P1–P4:
  NOT STARTED / NOT AUTHORIZED

Historical Campaign prerequisite candidates referenced by the pause record:

- Backend:
  3c1c523a178c452023add9745628ecff8a6e5e55
- Frontend:
  0662cd6963859d9e46abe53910b174d4826adaa3

They are evidence/donors only. They are not resumable bases.

Applicant Match remains paused throughout this preflight.

## Campaign Performance/Reporting pause authority

- Pause commit:
  ab31144a40c921af448fb745745d1df122d8211a
- Pause register:
  docs/ai-collaboration/campaign-page/campaign-reporting-v1/CAMPAIGN_REPORTING_PAUSE_AND_RESUMPTION_REGISTER_V1.md
- Last accepted pre-pause authority:
  cf1d09bdcc37012e1dc6076caf2db8bb28a7b8b5
- Accepted implementation checkpoint:
  NONE

Historical non-resumable convergence heads:

- Backend:
  ebe1b4a8faa6dab59fb924b4c42be8f9e3f1e6f2
- Frontend:
  3d04cd9c84585218fcdc0f1412662a165c38400c

They are historical evidence only. Do not select or revive them as bases.

Campaign Performance/Reporting remains paused throughout this preflight.

## Frozen exclusions

Do not inspect or plan implementation for:

- Marketplace recommendation score;
- provider-enabled payouts;
- deployment;
- production environment;
- live Meta, Graph, Postmark, or model execution;
- Creator Chat;
- unrelated Instagram Intelligence execution;
- changes to the accepted canonical application checkpoint.

Do not infer that the fail-closed Reporting presentation boundary is completed Reporting implementation.

## Preflight operating method

Use fresh read-only mirrors or isolated detached worktrees.

Use direct repository URLs and explicit immutable SHAs. Do not allow mirror refspecs to move local branches.

No tracked or untracked source mutation is permitted. Do not run formatters, code generators, migrations, dependency installs, builds, tests, database containers, browsers, or provider calls.

Read and compare:

1. the final canonical checkpoint record;
2. each pause register;
3. each last accepted authority record and directly referenced Product/technical registers required to understand the paused plan;
4. canonical backend/frontend code and contracts;
5. historical prerequisite/donor commits only where needed to identify semantic delta.

Do not perform an indiscriminate whole-repository content dump. Trace only contracts consumed or owned by the two paused lanes.

## Shared canonical delta inventory

First create a shared inventory of canonical contracts relevant to either paused lane:

- Campaign objective vocabulary and canonical Campaign definition/hash;
- Campaign creation, draft, publication, lifecycle, version and workspace boundaries;
- Campaign Asset/Offering and Brief identities;
- Campaign Targeting data and any explicit handoff contract;
- C03 application, immutable event/snapshot, terminal state, durable signal and C04 sourceApplicationId linkage;
- C04 Collaboration, Deliverable, publication and payout/settlement state;
- Brand/Creator workspace actor and capability contracts;
- shared Data Extraction, Evidence, Observation, Intelligence subject/execution/generation/current/CAS runtime;
- Brand, Product, Creator Audience, Creator Content, Performance and Instagram-derived donor contracts;
- Campaign Attention and current fail-closed Reporting route/UI;
- provider/media identity, authorization and availability contracts;
- schema and migration state relevant to planned Match or Reporting persistence.

For every item classify:

- PRESENT_CANONICAL
- PRESENT_WITH_CHANGED_CONTRACT
- PRESENT_COMPATIBILITY_ONLY
- ABSENT
- DEFERRED
- NOT_APPLICABLE

Record exact canonical paths, symbols, route names, migration identities, and blobs where material.

## Lane A — Applicant AI Match delta review

Review the accepted P0 evidence against the canonical checkpoint.

Do not restart P0 automatically.

For every accepted P0 section classify:

- UNCHANGED_CARRY_FORWARD
- SATISFIED_BY_CANONICAL_RECONCILIATION
- CHANGED_REVALIDATION_REQUIRED
- SUPERSEDED_BY_CANONICAL
- STILL_MISSING_OWNER_DEPENDENCY
- BLOCKER_OR_AUTHORITY_DECISION_REQUIRED

At minimum determine:

1. Whether exact four-value Campaign objective authority is now canonical.
2. Whether CampaignTargetingHandoffV1 exists, is implemented, is only implicit, or remains missing.
3. Whether C03_APPLICATION_SNAPSHOT_V2 exists, whether current canonical C03 snapshot/event state is equivalent, and whether a durable Match-ready signal exists.
4. Whether C03→C04 lineage and terminal Application race assumptions remain valid.
5. Whether the APPLICATION subject can reuse the canonical shared Intelligence runtime without parallel persistence or scheduling.
6. Whether strict request identity, manifest freeze/replay, dependency wait/load, failure-current preservation, and one-initial-evaluation semantics remain implementable without revising frozen Product decisions.
7. Whether donor contracts assumed by the four scoring dimensions changed:
   - Audience
   - Content and Deliverable
   - Brand and Offering
   - Performance
8. Whether newer canonical Creator Centre/Brand Centre/Instagram contracts change donor availability semantics.
9. Whether actor, authorization, Applicants-page, Creator-invisible, and Discovery-separated boundaries changed.
10. Whether a new schema/migration is still expected for Match, without designing or implementing it.
11. Exactly which owner-module work must precede Applicant Match P1:
    - Campaign-owned changes;
    - C03-owned changes;
    - shared-runtime changes, if any;
    - no-owner-gap items.
12. Whether P0 can be delta-accepted as-is, accepted with bounded amendments, or requires a material partial redo.

Return a concrete prerequisites matrix with owner, current canonical status, correction required, and acceptance gate.

## Lane B — Campaign Performance/Reporting delta review

Review the last accepted Reporting authority against the canonical checkpoint.

Do not reuse the historical convergence heads as bases.

For each accepted Product/technical/P0/P1–P4 assumption classify:

- UNCHANGED_CARRY_FORWARD
- SATISFIED_BY_CANONICAL_RECONCILIATION
- CHANGED_REVALIDATION_REQUIRED
- SUPERSEDED_BY_CANONICAL
- STILL_MISSING_OWNER_DEPENDENCY
- BLOCKER_OR_AUTHORITY_DECISION_REQUIRED

At minimum determine:

1. Whether canonical objectives, Campaign definition hash, Campaign lifecycle/version, and route vocabulary now satisfy the prior prerequisite assumptions.
2. How the current fail-closed Reporting presentation route/control differs from the planned Reporting API/page.
3. Whether the current canonical route names include reporting and refresh-sync compatibility surfaces, and their correct disposition.
4. Whether the three operational Campaign workspaces remain exactly Discovery, Applicants, and Collaborations.
5. Whether Campaign Attention is implemented, stubbed, absent, or compatibility-only.
6. Whether C04 obligation, Deliverable, publication, payout, and settlement states assumed by Reporting remain valid.
7. Whether accepted provider-neutral Evidence/media identity and admitted-Evidence capability assumptions remain valid.
8. Whether the shared Intelligence runtime is now directly reusable for Campaign-root generation/current.
9. Whether the old migration expectations and upgrade bases are obsolete given the canonical 108-migration checkpoint.
10. Whether P1–P4 plan sequencing remains valid, must be rebased, or needs bounded amendments.
11. Which planned routes, DTOs, actions, UI states, calculations, materiality rules, and refresh semantics already collide with canonical code.
12. Which Product decisions, if any, must return to Parent before implementation.
13. Whether Reporting can begin from the canonical checkpoint after bounded plan correction or needs owner-module prerequisites first.

Return a concrete collision/correction matrix with canonical path, paused assumption, actual canonical state, required change, and governing owner.

## Cross-lane collision and sequencing review

After independent lane analysis, identify only genuine shared touchpoints:

- Campaign definition/objective/version;
- Campaign targeting;
- C03 application/snapshot;
- C04 collaboration/deliverable;
- shared Intelligence runtime;
- Campaign Page routes/layout/Attention;
- migration sequence;
- shared authorization/capability contracts.

For each touchpoint state whether:

- no collision;
- parallel read-only planning is safe;
- implementation can proceed in parallel on distinct paths;
- implementation must be sequenced;
- one lane must publish an owner dependency before the other starts;
- a shared owner checkpoint is required.

Do not merge the two programs merely because they share a parent.

Provide a recommended resumption order with reasons. Explicitly answer:

- Can Applicant AI Match resume planning now?
- Can Applicant AI Match P1 implementation begin now?
- Can Campaign Reporting resume planning now?
- Can Campaign Reporting implementation begin now?
- Can the two implementations safely proceed in parallel?
- What exact Parent authorities are required next?

## Fresh base and branch recommendations

For each lane recommend:

- canonical backend base;
- canonical frontend base;
- authority base;
- whether backend work is needed;
- whether frontend work is needed;
- whether a migration is likely;
- proposed future branch names;
- prohibited historical heads.

Recommendations are advisory only. Do not create branches.

All application work must derive from:

- backend canonical commit:
  1a99cf3f54df849408c8775b20e78c036ee637c3
- frontend canonical commit:
  edc6ff991a43ce3a93d2bd242d148a6fcbd104dc

unless the preflight finds an immutable mismatch and stops.

## Effort and prompt journey

Estimate each lane separately using observed repository complexity, not generic developer-day estimates.

Provide:

- likely Local Codex active execution range;
- likely wall-clock range;
- expected number of prompt/response cycles;
- expected implementation packets;
- expected runtime-heavy gates;
- major uncertainty drivers;
- whether one runner context can reliably complete the lane;
- where a fresh runner or separate owner-SA decision is safer.

Do not combine effort estimates for the two lanes into one opaque total.

## Circuit breakers

Stop the affected lane if:

- an immutable authority/checkpoint object is missing or mismatched;
- the pause register cannot be reconciled with its accepted authority;
- canonical code contradicts a frozen Product invariant;
- an owner-module contract is ambiguous and requires Product/architecture authority;
- the lane would require changing the accepted canonical checkpoint before resumption planning can be trusted.

A blocker in one lane does not automatically block the other. Continue the unaffected lane’s read-only analysis when safe.

## Required return

Return:

CAMPAIGN_INTELLIGENCE_POST_RECONCILIATION_DELTA_PREFLIGHT_V1

Include:

A. immutable integrity table;
B. shared canonical delta inventory;
C. Applicant Match P0 carry-forward/delta matrix;
D. Applicant Match prerequisites and owner matrix;
E. Applicant Match resumption verdict;
F. Campaign Reporting carry-forward/delta matrix;
G. Campaign Reporting collision/correction matrix;
H. Campaign Reporting resumption verdict;
I. cross-lane collision and sequencing matrix;
J. fresh base and future branch recommendations;
K. separate effort and prompt-journey estimates;
L. exact Parent decisions required;
M. blockers by lane;
N. explicit proof that no mutation or resumption occurred.

Required summary fields:

CANONICAL_CHECKPOINT_INTEGRITY =
PASS | FAIL

APPLICANT_MATCH_P0_DISPOSITION =
CARRY_FORWARD | CARRY_FORWARD_WITH_BOUNDED_AMENDMENTS | PARTIAL_REVALIDATION_REQUIRED | BLOCKED

APPLICANT_MATCH_PLANNING_CAN_RESUME =
YES | NO

APPLICANT_MATCH_P1_IMPLEMENTATION_CAN_BEGIN =
YES | NO

CAMPAIGN_REPORTING_PLAN_DISPOSITION =
CARRY_FORWARD | CARRY_FORWARD_WITH_BOUNDED_AMENDMENTS | PARTIAL_REVALIDATION_REQUIRED | BLOCKED

CAMPAIGN_REPORTING_PLANNING_CAN_RESUME =
YES | NO

CAMPAIGN_REPORTING_IMPLEMENTATION_CAN_BEGIN =
YES | NO

PARALLEL_IMPLEMENTATION_SAFE =
YES | NO | CONDITIONAL

PARENT_DECISIONS_REQUIRED =

BLOCKERS_APPLICANT_MATCH =

BLOCKERS_CAMPAIGN_REPORTING =

NEXT_BOUNDARY =

Applicant AI Match and Campaign Reporting remain paused after this report. The report is advisory evidence for Parent decisions and grants no implementation or resumption authority.