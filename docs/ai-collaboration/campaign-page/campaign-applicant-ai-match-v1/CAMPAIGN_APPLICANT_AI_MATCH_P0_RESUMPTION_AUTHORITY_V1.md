# Campaign Applicant AI Match — P0 Resumption Authority V1

Identifier: `CAMPAIGN_APPLICANT_AI_MATCH_P0_RESUMPTION_AUTHORITY_V1`

## 1. Disposition

```text
PRIOR_P0_OBJECTIVE_AUTHORITY_CIRCUIT_BREAKER = VALID_AT_TIME_OF_REPORT
CAMPAIGN_OBJECTIVE_UNBLOCK = ACCEPTED_AND_IMPLEMENTED
APPLICANT_MATCH_P0_RESUMPTION = AUTHORIZED

P0_SCOPE = READ_ONLY_PREFLIGHT_AND_DOCUMENTATION
P1 = NOT_AUTHORIZED
P2 = NOT_AUTHORIZED
P3 = NOT_AUTHORIZED
P4 = NOT_AUTHORIZED
```

The prior P0 report and Correction 1 remain immutable evidence. They must not be rewritten as though the Campaign objective conflict never occurred.

P0 resumes only to verify the accepted unblock, update the convergence/base analysis, correct the C03 V2 dependency contract, determine whether the remaining P0 evidence is still valid, and return a new immutable report for Applicant AI Match Technical SA review.

## 2. Frozen Applicant Match Product inputs

The following Git-hosted files remain byte-authoritative:

| File | Raw SHA-256 |
|---|---|
| `CAMPAIGN_APPLICANT_AI_MATCH_PRODUCT_AND_CONSUMER_CONTRACT_V1.md` | `74626c7a58040289b1e1b389038e9228fb07f74970975d8c7f1d9ce6fc62d4a0` |
| `CAMPAIGN_APPLICANT_AI_MATCH_PRODUCT_CLARIFICATION_V1.md` | `d7391569edcc180177201245bb1648735c1f7271878953377f6a8b6b31b3f4da` |
| `CAMPAIGN_APPLICANT_AI_MATCH_TECHNICAL_PREFLIGHT_AND_FINITE_IMPLEMENTATION_PLAN_V1.md` | `6e6630aa39ecef41f68fd844e0c27d3a706bddeb09b1b7be91cdc75a7d552bf5` |
| `runner-prompts/CAMPAIGN_APPLICANT_AI_MATCH_P0_LOCAL_CODEX_EXECUTION_PROMPT_V1.md` | `31a722cfe618f806c378723b3b1dc490e7e23e692e61aace7a663b63b7ab95b6` |

No attachment or transferred local copy is required for P0 resumption. The runner must read and hash these files from the exact Git launch checkpoint.

Precedence remains:

```text
Product Clarification V1
>
conflicting Base Product V1 provisions
```

The Technical Plan governs mechanics only and cannot reinterpret Product authority.

## 3. Accepted Campaign objective unblock

Parent-final Campaign authority:

```text
Repository = Piyush1087/dummy_tcs
Branch = program/campaign-objective-canonicalization-v1-authority
SHA = 3a4aa77a4f0f40a472c657622f93ed459c82c12f
Tree = b6140a9905896980e9f6a2a4b8ac8d1d077201b7
Acceptance = BRAND_CAMPAIGN_CANONICAL_OBJECTIVE_IMPLEMENTATION_PARENT_FINAL_ACCEPTANCE_V1.md
```

Accepted backend:

```text
Repository = Piyush1087/creator-commerce-backend-v2-clone
Branch = program/campaign-objective-canonicalization-v1-backend
SHA = 3c1c523a178c452023add9745628ecff8a6e5e55
Tree = 0138efccc1d83ad5c558571b971731e0c45499ec
```

Accepted frontend:

```text
Repository = Piyush1087/creator-commerce-frontend-v2-clone
Branch = program/campaign-objective-canonicalization-v1-frontend
SHA = 0662cd6963859d9e46abe53910b174d4826adaa3
Tree = 02243e16ed283810936fdaee0601981fe316688d
```

Accepted executable behavior:

- `UceCampaignStrategy.coreObjective` remains the sole objective authority;
- canonical values are exactly `AWARENESS | TRUST | ASSETS | ACTION`;
- legacy objective values remain compatibility-only and are never mapped;
- the Campaign-owned application projection exposes complete `campaign.objectiveHandoff`;
- `AVAILABLE` contains objective, `CAMPAIGN_OBJECTIVE_V1`, Campaign-definition version, deterministic snapshot reference and definition hash;
- definition/objective/hash integrity failure returns `CAMPAIGN_DEFINITION_INTEGRITY_INVALID`;
- the legacy Reporting path fails closed for canonical objectives.

The Campaign backend and frontend checkpoints are normal descendants of the prior Portfolio V3 convergence candidates recorded by P0. P0 must independently reproduce that ancestry.

## 4. Exact effect on the prior P0 report

The prior circuit-breaker cause:

```text
PRODUCT_CANONICAL_CAMPAIGN_OBJECTIVE_NOT_ESTABLISHED_IN_ACCEPTED_EXECUTABLE_BRAND_CAMPAIGN_AUTHORITY
```

is cleared.

This does not automatically accept every prior P0 candidate. The resumption runner must verify whether Campaign objective changes or newer accepted authority materially alter:

- candidate backend/frontend bases;
- C03 ApplicationSnapshot adapter design;
- donor contracts or admission;
- shared Intelligence placement;
- dependency readiness;
- scoring registry, semantic rubric or performance normalization;
- schema/migration plan;
- P1 through P4 sequencing.

Where no relevant accepted source changed, the runner may reaffirm the prior evidence by exact source/diff/ancestry verification rather than repeat unrelated work.

## 5. C03 ApplicationSnapshot V2 boundary

```text
C03_APPLICATION_SNAPSHOT_V2 = REQUIRED_EXTERNAL_PREREQUISITE
C03_APPLICATION_SNAPSHOT_V2_IMPLEMENTATION = NOT_AUTHORIZED_IN_P0
APPLICANT_MATCH_P1 = BLOCKED_UNTIL_C03_V2_ACCEPTED_AND_PUBLISHED
```

The absence of implemented C03 V2 is not itself a resumed-P0 circuit breaker because P0 is a design/readiness phase and an exact safe boundary is available. It is a hard pre-P1 dependency.

C03 owns:

- ApplicationSnapshot schema/version;
- transactional copy during Application submission;
- immutability and snapshot identity/hash;
- Application lifecycle and terminalization;
- ready/outbox event semantics;
- Brand/Application decision authorization.

Brand Campaign owns the source semantics copied into C03 V2.

The prior P0 C03 V2 candidate must be corrected to freeze the complete accepted Campaign handoff, not objective alone:

```ts
type C03ApplicationSnapshotV2MatchContext = {
  schemaVersion: "C03_APPLICATION_SNAPSHOT_V2";
  objectiveHandoff: {
    status: "AVAILABLE";
    objective: "AWARENESS" | "TRUST" | "ASSETS" | "ACTION";
    objectiveContract: "CAMPAIGN_OBJECTIVE_V1";
    campaignDefinition: {
      version: string;
      snapshotRef: string;
      hash: `sha256:${string}`;
    };
  };
  targeting: {
    targetingVersion: number;
    geography: {
      state: "AVAILABLE";
      values: Array<{
        scope: "LOCALITY" | "REGION" | "COUNTRY" | "GLOBAL";
        label: string;
        countryCode: string | null;
        locality: string | null;
        region: string | null;
        radiusKm: number | null;
        isPrimary: boolean;
      }>;
    };
    age: { state: "AVAILABLE"; min: number; max: number };
    gender:
      | { state: "AVAILABLE"; value: "FEMALE" | "MALE" }
      | { state: "NOT_APPLICABLE"; value: null };
    affinity: { state: "UNAVAILABLE"; ids: [] };
  };
};
```

The resumption runner must validate this candidate against current executable Campaign/C03 truth and report any bounded correction. It must not implement it.

V1 ApplicationSnapshots remain immutable and unsupported for Applicant Match. No later mutable Campaign row may reconstruct V2.

## 6. Required P0 resumption outcome

If all gates pass, the runner should return:

```text
RESULT = READY_FOR_APPLICANT_AI_MATCH_TECHNICAL_SA_REVIEW
P0_EVIDENCE_READY = YES

CAMPAIGN_OBJECTIVE_AUTHORITY_CONFLICT = CLEARED
C03_APPLICATION_SNAPSHOT_V2 = REQUIRED_PRE_P1_DEPENDENCY

P1 = NOT_STARTED_NOT_AUTHORIZED
P2 = NOT_STARTED
P3 = NOT_STARTED
P4 = NOT_STARTED
```

P0 evidence readiness does not authorize P1. After Technical SA/Parent review, the next implementation boundary is expected to be a separately governed C03 V2 checkpoint before Applicant Match P1.

## 7. Prohibitions

P0 resumption must not:

- modify backend/frontend source;
- create migrations or implementation branches;
- implement C03 V2;
- implement Applicant Match P1 through P4;
- invoke live Graph/model/provider APIs;
- mutate Meta/OAuth/provider configuration;
- merge development or production;
- deploy;
- invent affinity persistence or a legacy objective mapping.

## 8. Next boundary

```text
NEXT_BOUNDARY =
EXTERNAL_LOCAL_CODEX_P0_RESUMPTION_EXECUTION
```

