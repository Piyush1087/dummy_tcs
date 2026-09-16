# Brand Campaign Canonical Objective — External Local Codex Implementation Execution V1

Identifier: BRAND_CAMPAIGN_CANONICAL_OBJECTIVE_IMPLEMENTATION_LOCAL_CODEX_EXECUTION_V1

## 1. Assignment

You are the bounded External Local Codex implementation runner for Brand Campaign canonical-objective convergence.

This assignment authorizes implementation only after every mandatory authority and repository gate below passes.

    AUTHORIZED_MODULE = BRAND_SIDE_CAMPAIGN
    AUTHORIZED_WORK = CANONICAL_OBJECTIVE_IMPLEMENTATION_AND_ACCEPTANCE_EVIDENCE
    C03_IMPLEMENTATION = NOT_AUTHORIZED
    APPLICANT_MATCH_IMPLEMENTATION = NOT_AUTHORIZED
    DEVELOPMENT_OR_PRODUCTION_MERGE = NOT_AUTHORIZED
    DEPLOYMENT = NOT_AUTHORIZED

The Product objective contract is exactly:

    CAMPAIGN_OBJECTIVE_V1 = AWARENESS | TRUST | ASSETS | ACTION

Do not invent or infer any additional value or mapping.

## 2. Mandatory Git-first authority gate

The launch message must supply one immutable commit and tree for:

    REPOSITORY = Piyush1087/dummy_tcs
    BRANCH = program/campaign-objective-canonicalization-v1-authority
    PATH = docs/ai-collaboration/campaign-page/campaign-objective-canonicalization-v1/

The supplied commit must be an exact descendant of:

    ACCEPTED_PREFLIGHT_SHA = 5c88e2e54f7b69c362871be6a2816fc55ac2be6a
    ACCEPTED_PREFLIGHT_TREE = 711c4b19c0f983902e61fd1206c8ef699d3fbc6e

Fetch/prune the remote normally and verify:

1. the supplied commit exists on the named remote branch;
2. its tree exactly equals the supplied tree;
3. 5c88e2e54f7b69c362871be6a2816fc55ac2be6a is its ancestor;
4. the worktree is clean before any mutation;
5. all files below exist in that exact commit.

Read completely, from the verified immutable commit:

    BRAND_CAMPAIGN_CANONICAL_OBJECTIVE_UNBLOCK_PREFLIGHT_REPORT_V1.md
    CAMPAIGN_SA_CANONICAL_OBJECTIVE_FEEDBACK_V1.md
    BRAND_CAMPAIGN_CANONICAL_OBJECTIVE_AUTHORITY_PACKAGE_CORRECTION_2_REPORT_V1.md
    BRAND_CAMPAIGN_CANONICAL_OBJECTIVE_IMPLEMENTATION_LOCAL_CODEX_EXECUTION_V1.md
    EXECUTION_LEDGER.md

Also read the repository-root AGENTS.md, AI_ENGINEERING_STANDARD.md, and only the engineering standards routed by them for the layers changed.

If any named authority file is absent, the commit/tree differs, ancestry fails, or equal-authority material conflicts, stop before backend/frontend mutation with:

    RESULT = CAMPAIGN_OBJECTIVE_AUTHORITY_INPUT_MISMATCH

Do not substitute chat attachments, local uncommitted copies, summaries, or similarly named files.

## 3. Authority precedence

Apply this precedence within this assignment:

1. Parent/User explicit corrections recorded in the accepted package.
2. Corrected preflight at and after 5c88e2e54f7b69c362871be6a2816fc55ac2be6a.
3. Campaign SA feedback where consistent with the corrected preflight.
4. Accepted executable Campaign authority and repository truth.
5. Historical/legacy material only as compatibility evidence.

The corrected preflight is the implementation authority. The Campaign SA feedback explains why the earlier over-designed plan was rejected. Its historical note that exact Git revalidation was still required has been satisfied by the corrected preflight and this complete descendant package.

## 4. Implementation repositories and bases

### Backend

    REPOSITORY = Piyush1087/creator-commerce-backend-v2-clone
    AUDITED_BASE_SHA = aaae1e3062137eda30e13e2fd7bcddbb1b239842
    AUDITED_BASE_TREE = 458517fa01a50f43f0b1cd8a948767e4f7600d50
    TARGET_BRANCH = program/campaign-objective-canonicalization-v1-backend

### Frontend

    REPOSITORY = Piyush1087/creator-commerce-frontend-v2-clone
    AUDITED_BASE_SHA = 9631e8b261f02f331dcf84f09dfd61dcc28eea83
    AUDITED_BASE_TREE = 25a89b63cec1a576ef605076c717a7cc447e5acc
    TARGET_BRANCH = program/campaign-objective-canonicalization-v1-frontend

A normal descendant may replace an audited base only after proving that it retains the accepted Brand Campaign ancestry and has not materially changed objective ownership, Campaign lifecycle/edit fences, canonical-definition ownership, or the relevant API contracts. Record the exact selected base SHA/tree and ancestry proof.

If the newer base creates material divergence, stop with CAMPAIGN_OBJECTIVE_BASE_DIVERGENCE. Do not merge development or production to manufacture a base.

Create or reuse only the named feature branches. Never force-push.

## 5. Mandatory implementation boundaries

The implementation must preserve all of the following:

1. UceCampaignStrategy.coreObjective remains the sole persisted Campaign objective authority.
2. Add AWARENESS, TRUST, ASSETS, and ACTION additively to the existing UceCampaignObjective enum.
3. Retain existing enum labels only for explicitly isolated compatibility behavior.
4. Canonical APIs accept, write, filter, and emit only the exact four canonical values.
5. No canonical migration, adapter, API, or UI maps a legacy/P value to a canonical value.
6. Canonical Campaign definition 2.0, relational coreObjective, read models, reporting writes, and application-read projection agree exactly.
7. Add or reuse only the accepted general canonicalDefinitionHash fence. It is Campaign-definition infrastructure, not a second objective authority.
8. Preserve existing lifecycle, locking, authorization, and tenant boundaries.
9. Do not make a locked/non-draft objective editable.
10. Compatibility-readable legacy Campaigns fail closed for canonical objective projection.
11. CAMPAIGN_OBJECTIVE_REAUTHOR_REQUIRED, if used, is a non-persisted compatibility reason only.
12. Do not add a remediation/re-author endpoint or UI.
13. Historical ApplicationSnapshot V1 and historical reporting records remain unchanged and uninterpreted.
14. C03 receives no source change in this run. The Campaign-owned projection may be prepared, but C03 Snapshot V2 is a later separately authorized packet.
15. Applicant Match receives no source change and is not resumed by this run.

Prohibited additions include:

    UceCampaignObjectiveRevision
    canonicalObjective
    objectiveAuthorityState
    canonicalObjectiveVersion
    canonicalObjectiveRevisionId
    objective-specific history/table/ledger
    persisted REAUTHOR_REQUIRED state
    objective re-author endpoint
    Brand remediation UI
    legacy-to-canonical mapping

## 6. Finite execution sequence

Do not skip gates.

### Run 0 — source and runtime preflight

Before mutation:

- fetch/prune and verify both implementation repositories;
- verify selected bases, trees, Campaign ancestry, and clean worktrees;
- read each repository's AGENTS.md and routed engineering standards;
- re-audit the current Prisma enum, UceCampaignStrategy.coreObjective, UceCampaign.canonicalDefinition, existing migrations, canonical and legacy create/edit/publish/read/list/filter/reporting paths, application-read projection, and frontend objective surfaces;
- prove whether a newer accepted general Campaign-definition hash already exists;
- inventory migration tooling and current migration identities;
- record the local PostgreSQL/Docker/browser execution route;
- confirm no production database or provider access is required.

If an accepted general definition hash exists on the selected base, reuse it and do not add another field.

### Run 1 — database and general definition fence

Implement the smallest accepted persistence change.

Migration safety is mandatory:

1. Add the four PostgreSQL enum labels in a dedicated migration boundary.
2. Do not write or reference newly added database enum values in a data operation within the same uncommitted migration transaction.
3. Add nullable canonical_definition_hash VARCHAR(71) and its null-or-sha256 shape constraint in a separately reviewable migration unless an accepted equivalent already exists.
4. Do not backfill or translate any objective value in either migration.
5. Prove clean-database and representative-upgrade paths against real local PostgreSQL.

Implement deterministic canonical JSON serialization and SHA-256 hashing for the complete Campaign definition as general Campaign infrastructure. It must be deterministic under key-order variation and must not contain objective-specific hash branching.

### Run 2 — backend canonical convergence

Implement direct canonical objective flow across the owned backend surfaces:

- validation and DTO/schema contracts;
- canonical create/draft autosave/readiness/publish;
- direct coreObjective persistence;
- canonical definition 2.0 storage with strategy.objective;
- atomic final definition/hash/objective publish under the existing lock;
- read/list/filter/page/reporting projection;
- Campaign-owned application-read projection for the future C03 handoff;
- compatibility isolation for legacy routes/validators;
- authorization and tenant isolation.

Remove the lossy adapter from canonical execution. Legacy compatibility code may remain only where current authority requires it and must be unreachable from canonical paths.

The future C03 handoff projection is exactly:

    objective = AWARENESS | TRUST | ASSETS | ACTION
    objectiveContract = CAMPAIGN_OBJECTIVE_V1
    campaignDefinition.version = exact definition version
    campaignDefinition.snapshotRef = deterministic whole-definition reference
    campaignDefinition.hash = stored and recomputed whole-definition SHA-256

Do not create an objective revision ID.

### Run 3 — frontend canonical convergence

Implement only the accepted Brand Campaign frontend surface:

- exactly four canonical objective controls/cards and labels;
- canonical request/response contracts;
- draft/autosave/readiness behavior;
- Campaign summaries, list/page/detail, and canonical filters;
- compatibility-readable objective-unavailable presentation for legacy rows;
- locked/non-draft no-edit behavior;
- responsive and accessible behavior using the established design system.

Do not add a remediation CTA, re-author flow, or legacy-to-canonical display mapping.

### Run 4 — integrated acceptance and publication

Run the complete relevant evidence matrix, inspect final diffs, scan changed files and commits for secrets, commit coherent changes, push normally, independently fetch back, and verify exact local/remote SHA and tree equality.

Do not merge the feature branches into any shared branch.

## 7. Existing-data boundary

This run does not authorize live production-data access, automatic repair, deletion, reseeding, or Brand-facing remediation.

Implement and test accepted fail-closed classification semantics using controlled local fixtures:

| Evidence class | Required behavior |
|---|---|
| Exact immutable literal four-value evidence | Eligible for a separately controlled explicit repair; do not execute such repair without additional operational authority. |
| Disposable non-production legacy Campaign | Operational recreate/reseed is preferred, but is not part of this source implementation run. |
| Ambiguous legacy Campaign | Preserve compatibility-readable data; canonical objective unavailable; no mapping or mutation. |
| Proven real production ambiguous Campaign | Stop with CAMPAIGN_PRODUCTION_OBJECTIVE_PARENT_PRODUCT_AUTHORITY_REQUIRED. |

Do not connect to production merely to perform this inventory. If repository evidence or an already-authorized local dataset proves real production ambiguity, stop and report it.

## 8. Required backend evidence

At minimum prove:

- schema enum contains retained compatibility labels plus the four canonical labels;
- canonical inputs reject all P labels, three-value legacy labels, and unknown strings;
- each canonical value round-trips unchanged through draft, readiness, publish, persistence, whole definition, list/filter/read/reporting, and application projection;
- canonical execution cannot reach a lossy adapter;
- one strategy row and non-null coreObjective constraints remain intact;
- definition 2.0 serialization/hash golden cases and key-order invariance;
- stored/recomputed hash mismatch fails closed;
- snapshot reference is deterministic;
- publish writes objective/definition/hash atomically under lock;
- non-draft/locked objective mutation remains rejected;
- compatibility routes cannot create canonical definition 2.0, hash, or projection;
- legacy and unknown rows fail closed without mutation;
- ApplicationSnapshot V1 and historical reporting rows are unchanged;
- tenant isolation and Brand authorization;
- migration clean-database and representative-upgrade paths on real local PostgreSQL;
- relevant focused tests, broader regression tests, lint, typecheck, build, and startup smoke.

## 9. Required frontend evidence

At minimum prove:

- canonical controls/payloads contain exactly the four values;
- no P or three-value option appears in canonical create/readiness/filter paths;
- all four values hydrate, autosave, render, publish, and filter correctly;
- legacy/unknown canonical responses fail closed;
- compatibility-readable legacy Campaigns show objective unavailable without a remediation CTA;
- locked/non-draft UI offers no objective edit;
- loading, error, unavailable, and canonical steady states are bounded;
- keyboard and screen-reader behavior;
- relevant unit/integration tests, lint, typecheck, and production build;
- authenticated browser proof at desktop and 390px mobile width with zero unexpected console/page errors.

Use fixtures and local runtime only. No live provider/model call is required or authorized.

## 10. Circuit breakers

Stop rather than improvise on any of these:

    CAMPAIGN_OBJECTIVE_AUTHORITY_INPUT_MISMATCH
    CAMPAIGN_CANONICAL_OBJECTIVE_CONTRACT_DIVERGENCE
    CAMPAIGN_OBJECTIVE_DUAL_AUTHORITY
    CAMPAIGN_OBJECTIVE_LOSSY_MAPPING_REQUIRED
    CAMPAIGN_DEFINITION_FENCE_INTEGRITY_GAP
    CAMPAIGN_LOCKED_OBJECTIVE_EDIT_BYPASS
    CAMPAIGN_PRODUCTION_OBJECTIVE_PARENT_PRODUCT_AUTHORITY_REQUIRED
    CAMPAIGN_OBJECTIVE_COMPATIBILITY_LEAK
    CAMPAIGN_OBJECTIVE_BASE_DIVERGENCE
    UNSAFE_POSTGRES_ENUM_MIGRATION_BOUNDARY

Missing live credentials, absent provider configuration, and absence of production access are not circuit breakers for this local implementation run.

## 11. Publication and report

After all gates pass:

1. push the backend feature branch normally;
2. push the frontend feature branch normally;
3. independently fetch back each branch and prove exact SHA/tree equality;
4. publish the immutable report below to the same authority package as a normal descendant of the launch checkpoint;
5. update EXECUTION_LEDGER.md without rewriting historical entries;
6. independently fetch back the authority branch and prove exact SHA/tree equality.

Required report:

    BRAND_CAMPAIGN_CANONICAL_OBJECTIVE_IMPLEMENTATION_REPORT_V1.md

The report must include:

- verified authority input SHA/tree and required-file inventory;
- selected backend/frontend base SHA/tree and ancestry proof;
- final backend/frontend branch, SHA, tree, parent(s), and clean-worktree state;
- complete changed-file inventory and migration identities;
- exact schema/contract/compatibility disposition;
- commands and results for database, tests, typecheck, lint, build, startup, and browser checks;
- local PostgreSQL version and migration evidence;
- browser version, URLs/states/viewports, and error evidence;
- authorization, tenant, lifecycle-lock, fail-closed, and historical-data evidence;
- secret-scan result;
- independent fetch-back SHA/tree equality for all three repositories;
- explicit confirmation that C03, Applicant Match, provider configuration, development/production merges, deployment, and production data were untouched;
- every limitation or unverified item;
- circuit-breaker disposition;
- recommended next boundary: Parent/Program Orchestrator review only.

If a circuit breaker occurs, do not claim implementation acceptance. Return the exact blocker, evidence collected, mutation status, uncommitted/committed state, and safe recovery boundary. Authority-report publication is permitted, but backend/frontend partial work must not be merged or deployed.

## 12. Final response format

Return a concise summary followed by:

    BRAND_CAMPAIGN_CANONICAL_OBJECTIVE_IMPLEMENTATION_V1

    RESULT = READY_FOR_PARENT_REVIEW | <EXACT_CIRCUIT_BREAKER>

    AUTHORITY_INPUT_SHA =
    AUTHORITY_INPUT_TREE =

    BACKEND_BRANCH =
    BACKEND_SHA =
    BACKEND_TREE =
    BACKEND_FETCH_BACK = PASS | FAIL | NOT_REACHED

    FRONTEND_BRANCH =
    FRONTEND_SHA =
    FRONTEND_TREE =
    FRONTEND_FETCH_BACK = PASS | FAIL | NOT_REACHED

    AUTHORITY_REPORT_SHA =
    AUTHORITY_REPORT_TREE =
    AUTHORITY_FETCH_BACK = PASS | FAIL | NOT_REACHED

    MIGRATIONS =
    POSTGRESQL_ACCEPTANCE = PASS | FAIL | NOT_REACHED
    BACKEND_ACCEPTANCE = PASS | FAIL | NOT_REACHED
    FRONTEND_ACCEPTANCE = PASS | FAIL | NOT_REACHED
    BROWSER_ACCEPTANCE = PASS | FAIL | NOT_REACHED
    SECRET_SCAN = PASS | FAIL | NOT_REACHED

    C03_CHANGED = NO
    APPLICANT_MATCH_CHANGED = NO
    PRODUCTION_DATA_ACCESSED = NO
    DEVELOPMENT_MERGE = NOT_PERFORMED
    PRODUCTION_MERGE = NOT_PERFORMED
    DEPLOYMENT = NOT_PERFORMED

    NEXT_BOUNDARY = PARENT_PROGRAM_ORCHESTRATOR_REVIEW_ONLY
