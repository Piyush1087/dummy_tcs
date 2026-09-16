# Campaign Applicant AI Match — P0 Resumption External Local Codex Execution V1

Identifier: `CAMPAIGN_APPLICANT_AI_MATCH_P0_RESUMPTION_LOCAL_CODEX_EXECUTION_V1`

## 1. Assignment

Resume Applicant AI Match V1 P0 after the accepted Brand Campaign canonical-objective unblock.

This is a bounded delta preflight:

```text
VERIFY GIT-HOSTED AUTHORITY
+ VERIFY CAMPAIGN OBJECTIVE UNBLOCK
+ UPDATE CONVERGENCE BASES
+ CORRECT/VALIDATE C03 V2 DEPENDENCY CONTRACT
+ REVALIDATE PRIOR P0 EVIDENCE AFFECTED BY THE DELTA
+ PUBLISH P0 RESUMPTION REPORT
```

P0 remains read-only for backend/frontend source. Stop after publishing the resumption report. Do not continue into C03 implementation or Applicant Match P1 through P4.

## 2. Git-first authority gate

The launch message supplies an immutable SHA/tree for:

```text
Repository = Piyush1087/dummy_tcs
Branch = program/campaign-applicant-ai-match-v1-authority
Path = docs/ai-collaboration/campaign-page/campaign-applicant-ai-match-v1/
```

The launch checkpoint must:

1. equal the remote branch head after fetch/prune;
2. be a normal descendant of Applicant Match P0 Correction 1:
   - SHA `f3f2cf5869c29cbb2ed3433088d6555d69b4575b`
   - tree `4763ea120cc66554cfb553c95a5b50c75e7d0c73`;
3. include Parent-final Campaign acceptance as an ancestor:
   - SHA `3a4aa77a4f0f40a472c657622f93ed459c82c12f`
   - tree `b6140a9905896980e9f6a2a4b8ac8d1d077201b7`.

Use fresh task-owned worktrees. Do not reset, stash, clean or overwrite unrelated work.

Stop before repository publication if any gate fails:

```text
RESULT = APPLICANT_AI_MATCH_P0_RESUMPTION_AUTHORITY_INPUT_MISMATCH
```

## 3. Required Git-hosted inputs

Read completely from the exact launch checkpoint:

```text
CAMPAIGN_APPLICANT_AI_MATCH_PRODUCT_AND_CONSUMER_CONTRACT_V1.md
CAMPAIGN_APPLICANT_AI_MATCH_PRODUCT_CLARIFICATION_V1.md
CAMPAIGN_APPLICANT_AI_MATCH_TECHNICAL_PREFLIGHT_AND_FINITE_IMPLEMENTATION_PLAN_V1.md
P0_CURRENT_STATE_DONOR_SCORING_AND_DEPENDENCY_PREFLIGHT.md
CAMPAIGN_APPLICANT_AI_MATCH_P0_RESUMPTION_AUTHORITY_V1.md
EXECUTION_LEDGER.md
runner-prompts/CAMPAIGN_APPLICANT_AI_MATCH_P0_LOCAL_CODEX_EXECUTION_PROMPT_V1.md
runner-prompts/CAMPAIGN_APPLICANT_AI_MATCH_P0_RESUMPTION_LOCAL_CODEX_EXECUTION_V1.md
```

Also read completely from the same authority commit:

```text
docs/ai-collaboration/campaign-page/campaign-objective-canonicalization-v1/
  BRAND_CAMPAIGN_CANONICAL_OBJECTIVE_IMPLEMENTATION_PARENT_FINAL_ACCEPTANCE_V1.md
  BRAND_CAMPAIGN_CANONICAL_OBJECTIVE_IMPLEMENTATION_CORRECTION_1_REPORT_V1.md
  CAMPAIGN_SA_CANONICAL_OBJECTIVE_BOUNDARY_REVIEW_COMPLETION_V1.md
```

Read repository-root `AGENTS.md`, `AI_ENGINEERING_STANDARD.md`, and only routed standards that can materially affect the read-only audit.

No attachments are required. Do not look for chat uploads or local transferred copies.

Hash the four preserved original inputs directly from Git and require:

```text
Product = 74626c7a58040289b1e1b389038e9228fb07f74970975d8c7f1d9ce6fc62d4a0
Clarification = d7391569edcc180177201245bb1648735c1f7271878953377f6a8b6b31b3f4da
Technical Plan = 6e6630aa39ecef41f68fd844e0c27d3a706bddeb09b1b7be91cdc75a7d552bf5
Original P0 prompt = 31a722cfe618f806c378723b3b1dc490e7e23e692e61aace7a663b63b7ab95b6
```

Precedence:

```text
Product Clarification V1
>
conflicting Base Product V1
```

This resumption authority supersedes the original prompt only for Git-hosted input transfer, accepted Campaign checkpoints, C03 V2 external-dependency sequencing, and the bounded delta-resumption mechanics. It does not change Product scoring semantics.

## 4. Exact repositories and accepted checkpoints

Audit:

```text
Piyush1087/dummy_tcs
Piyush1087/creator-commerce-backend-v2-clone
Piyush1087/creator-commerce-frontend-v2-clone
```

Campaign Parent-final authority:

```text
SHA = 3a4aa77a4f0f40a472c657622f93ed459c82c12f
Tree = b6140a9905896980e9f6a2a4b8ac8d1d077201b7
```

Accepted Campaign backend:

```text
Branch = program/campaign-objective-canonicalization-v1-backend
SHA = 3c1c523a178c452023add9745628ecff8a6e5e55
Tree = 0138efccc1d83ad5c558571b971731e0c45499ec
```

Accepted Campaign frontend:

```text
Branch = program/campaign-objective-canonicalization-v1-frontend
SHA = 0662cd6963859d9e46abe53910b174d4826adaa3
Tree = 02243e16ed283810936fdaee0601981fe316688d
```

Prior P0 convergence candidates:

```text
Backend = aaae1e3062137eda30e13e2fd7bcddbb1b239842
Backend tree = 458517fa01a50f43f0b1cd8a948767e4f7600d50

Frontend = 9631e8b261f02f331dcf84f09dfd61dcc28eea83
Frontend tree = 25a89b63cec1a576ef605076c717a7cc447e5acc
```

Independently verify exact remote equality, trees and ancestry. Expected current relation is that the accepted Campaign backend/frontend are normal descendants of the prior Portfolio candidates. Do not assume it.

## 5. Campaign unblock verification

Inspect executable code and prove:

- `UceCampaignStrategy.coreObjective` is the sole Campaign objective authority;
- its accepted canonical values include exactly `AWARENESS | TRUST | ASSETS | ACTION` for V1;
- legacy values remain compatibility-only and no automatic/lossy mapping exists;
- canonical create/publish/read paths preserve the objective;
- `campaign.objectiveHandoff` exposes objective, `CAMPAIGN_OBJECTIVE_V1`, definition version, snapshot reference and hash;
- `AVAILABLE` requires objective/definition/hash integrity;
- unavailable reasons retain their accepted distinctions;
- canonical Reporting remains fail-closed and does not define Match or Reporting semantics.

If this contract is absent or materially different, stop:

```text
APPLICANT_AI_MATCH_CAMPAIGN_OBJECTIVE_UNBLOCK_INVALID
```

## 6. Prior P0 evidence delta audit

Treat `P0_CURRENT_STATE_DONOR_SCORING_AND_DEPENDENCY_PREFLIGHT.md` as immutable prior evidence, not automatically accepted truth.

Revalidate every finding materially affected by changes from the prior candidates to the accepted Campaign checkpoints. At minimum:

```text
authority/convergence DAG
candidate implementation bases
C03 Application submission/snapshot read path
Campaign application projection
objective and targeting source contracts
shared Intelligence subject/runtime compatibility
donor adapter assumptions
scoring-registry input availability
schema/migration sequencing
P1-P4 ownership and ordering
frontend Applicants integration map
```

If no relevant donor/shared-runtime/frontend Applicants code changed, prove that by exact diff/ancestry and reaffirm the prior evidence without rerunning unrelated exhaustive tests.

Freshly verify that no newer accepted Parent authority supersedes:

- four scored dimensions;
- Commercial/Work global non-applicability;
- one initial evaluation only;
- donor-availability neutrality;
- dependency-wait behavior;
- 60% overall and Audience-or-Content readiness;
- no Applicant Match in Discovery;
- no Creator visibility;
- no decision gating.

## 7. C03 V2 external dependency

Current Product/program sequencing is:

```text
P0 may become evidence-ready
P1 may not start
until C03 ApplicationSnapshot V2 is separately authorized, implemented,
published and accepted
```

The absence of implemented C03 V2 is not by itself a P0 circuit breaker. A Product/ownership conflict or inability to define a safe immutable contract is a circuit breaker.

Validate the candidate in `CAMPAIGN_APPLICANT_AI_MATCH_P0_RESUMPTION_AUTHORITY_V1.md` against current executable truth.

Required correction from prior P0:

```text
C03 V2 freezes complete CampaignObjectiveHandoffV1
not objective alone
```

The C03 V2 candidate must transactionally freeze:

- exact `AVAILABLE` Campaign objective handoff;
- Campaign-owned targeting geography, age and gender under the accepted strict projection;
- affinity as `UNAVAILABLE` with empty IDs until a typed immutable Campaign source is separately accepted;
- Campaign/Asset/Brief/Offering and Creator identity already owned by the snapshot;
- immutable snapshot identity/version/hash and current Application status version.

It must fail closed when the Campaign handoff is unavailable or definition integrity is invalid. V1 snapshots remain immutable and unsupported for Match. No mutable Campaign reconstruction is permitted.

Classify C03 V2 as a separately governed pre-P1 dependency. Remove its source/migration implementation from Applicant Match P1 scope. Do not modify C03 in this run.

## 8. P0 technical candidates

Reaffirm, correct or reject with evidence:

```text
APPLICATION shared Intelligence subject
one accepted current per immutable ApplicationSnapshot
dependency readiness through shared execution/lease/backoff primitives
24-hour wait-horizon candidate and retry schedule
ApplicantAIMatchScoringRegistryV1
ApplicantAIMatchSemanticRubricV1
ApplicantAIMatchPerformanceNormalizationV1
four-dimension weight normalization
strict request/manifest/output/consumer contracts
terminal Application CAS fence
P1-P4 packet plan after C03 V2
```

The registries remain candidates awaiting Technical SA acceptance. Do not silently convert a previous proposal into accepted technical authority.

The updated P1 plan must begin from an accepted base that already contains C03 V2. P1 must not own C03 snapshot schema, submission transaction or migration.

## 9. Verification proportionality

Required:

- exact Git SHA/tree/branch/ancestry checks;
- complete required-document read;
- raw SHA-256 verification;
- relevant source and diff inspection;
- targeted static/test execution only where needed to validate changed Campaign/C03 boundary assumptions;
- schema/migration identity and delta proof;
- backend/frontend unchanged proof for this run;
- secret/forbidden-artifact scan of published docs.

Do not repeat broad tests merely to recreate already immutable evidence when no relevant source changed. Record all commands actually run and never claim unexecuted checks.

## 10. Prohibitions

Do not:

- modify backend/frontend source;
- create migrations or implementation branches;
- implement C03 V2;
- begin Applicant Match P1, P2, P3 or P4;
- invoke live Graph/model/provider APIs;
- mutate Meta/OAuth/provider configuration;
- access production data;
- merge development or production;
- deploy;
- map legacy Campaign objectives;
- invent affinity persistence;
- admit Work Preferences, Rate Card, Commercial Setup or payout/KYC;
- build a parallel Intelligence runtime or scheduler.

## 11. Circuit breakers

Stop without backend/frontend mutation for:

```text
APPLICANT_AI_MATCH_P0_RESUMPTION_AUTHORITY_INPUT_MISMATCH
APPLICANT_AI_MATCH_CAMPAIGN_OBJECTIVE_UNBLOCK_INVALID
APPLICANT_AI_MATCH_ACCEPTED_BASE_DIVERGENCE
APPLICANT_AI_MATCH_P0_PRIOR_EVIDENCE_INVALIDATED
APPLICANT_AI_MATCH_C03_V2_PRODUCT_OR_OWNERSHIP_CONFLICT
APPLICANT_AI_MATCH_APPLICATIONSNAPSHOT_SAFE_CONTRACT_GAP
APPLICANT_AI_MATCH_DONOR_OR_SHARED_RUNTIME_CONFLICT
APPLICANT_AI_MATCH_SCORING_PRODUCT_CONFLICT
```

These are not circuit breakers by themselves:

```text
C03 V2 not yet implemented
donors temporarily PROCESSING
optional donor absence
missing live credentials
fail-closed model adapter
canonical Reporting unavailable
```

## 12. Publication

After every gate passes, publish documentation only to:

```text
Repository = Piyush1087/dummy_tcs
Branch = program/campaign-applicant-ai-match-v1-authority
Path = docs/ai-collaboration/campaign-page/campaign-applicant-ai-match-v1/
```

Create:

```text
CAMPAIGN_APPLICANT_AI_MATCH_P0_RESUMPTION_REPORT_V1.md
```

Append the same evidence to `EXECUTION_LEDGER.md`.

Use a normal non-force descendant commit and independently fetch it back. Do not modify the four frozen Product/Plan/original-prompt files or the prior P0 report.

## 13. Required return

Return:

```text
CAMPAIGN_APPLICANT_AI_MATCH_P0_RESUMPTION_EXTERNAL_LOCAL_CODEX_REPORT_V1

RESULT =
READY_FOR_APPLICANT_AI_MATCH_TECHNICAL_SA_REVIEW
| <EXACT_CIRCUIT_BREAKER>

AUTHORITY_INPUT_SHA =
AUTHORITY_INPUT_TREE =

PRODUCT_INPUT = VERIFIED
CLARIFICATION_INPUT = VERIFIED
PLAN_INPUT = VERIFIED
ORIGINAL_P0_PROMPT = VERIFIED

CAMPAIGN_AUTHORITY_SHA = 3a4aa77a4f0f40a472c657622f93ed459c82c12f
CAMPAIGN_BACKEND_SHA = 3c1c523a178c452023add9745628ecff8a6e5e55
CAMPAIGN_FRONTEND_SHA = 0662cd6963859d9e46abe53910b174d4826adaa3
CAMPAIGN_OBJECTIVE_UNBLOCK = PASS | FAIL | NOT_REACHED

P0_EVIDENCE_READY = YES | NO
C03_APPLICATION_SNAPSHOT_V2 = REQUIRED_PRE_P1_DEPENDENCY | <BLOCKER>

IMPLEMENTATION_BASES = CANDIDATE_AWAITING_TECHNICAL_SA_ACCEPTANCE
SCORING_REGISTRY = CANDIDATE_AWAITING_TECHNICAL_SA_ACCEPTANCE
DEPENDENCY_WAIT_POLICY = CANDIDATE_AWAITING_TECHNICAL_SA_ACCEPTANCE

P1 = NOT_STARTED_NOT_AUTHORIZED
P2 = NOT_STARTED
P3 = NOT_STARTED
P4 = NOT_STARTED

BACKEND_CHANGED = NO
FRONTEND_CHANGED = NO
NEW_MIGRATIONS = NONE

LIVE_GRAPH_CALLS = NONE
LIVE_MODEL_CALLS = NONE
META_PROVIDER_MUTATIONS = NONE
PRODUCTION_DATA_ACCESSED = NO

DEVELOPMENT_MERGE = NOT_PERFORMED
DEPLOYMENT = NOT_PERFORMED

AUTHORITY_REPORT_SHA =
AUTHORITY_REPORT_TREE =
AUTHORITY_FETCH_BACK = PASS | FAIL | NOT_REACHED

NEXT_BOUNDARY =
PARENT_PROGRAM_ORCHESTRATOR_AND_APPLICANT_MATCH_TECHNICAL_SA_P0_REVIEW_ONLY
```

The full report must include the verified authority DAG, delta changed-file analysis, exact Campaign handoff proof, corrected C03 V2 contract, pre-P1 dependency disposition, updated base candidates, every prior P0 candidate reaffirmed/corrected/rejected, commands actually run, limitations and exact circuit-breaker reasoning if applicable.

## 14. Final instruction

Execute the bounded P0 delta honestly. The goal is not to force a success result; it is to determine whether the accepted Campaign unblock makes the existing P0 package technically reviewable while keeping C03 V2 outside Applicant Match ownership and keeping P1 unauthorized.

