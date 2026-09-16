# CAMPAIGN SA — CANONICAL OBJECTIVE UNBLOCK FEEDBACK V1

`CAMPAIGN_SA_CANONICAL_OBJECTIVE_FEEDBACK_V1`

## Evidence limitation

The exact Git authority package at:

```text
program/campaign-objective-canonicalization-v1-authority
3f102f45a6819e62842dd0f7b9fc64f578486274
```

could not be fetched in this session because the GitHub connector is unavailable at invocation time. The dispositions below are therefore grounded in the latest Campaign authority corpus and the published Applicant Match P0 evidence available in the File Library, plus the exact concepts named in the review request. They should be treated as Campaign-SA semantic/architecture feedback; exact file-by-file acceptance of the unpublished-to-this-session package still requires fetch-back verification.

## Determination

```text
OVERALL_DISPOSITION =
ACCEPTED_WITH_CORRECTIONS
+
EXACT_GIT_PACKAGE_REVALIDATION_REQUIRED

PRODUCT_CONFLICTS =
NONE

TECHNICAL_CONFLICTS =
CURRENT_EXECUTABLE_CAMPAIGN_OBJECTIVE_IS_LEGACY
AND DOES NOT YET PROVIDE ONE EXACT CANONICAL
AWARENESS | TRUST | ASSETS | ACTION VALUE
ACROSS ALL CAMPAIGN SURFACES
```

The Product objective is final:

```text
AWARENESS
TRUST
ASSETS
ACTION
```

Legacy objective vocabularies are compatibility-only and must not be promoted into canonical downstream truth.

## 1. Canonical persistence decision

Campaign already has one canonical aggregate and an existing canonical-definition persistence envelope. The accepted architecture identifies:

```text
UceCampaign
+
canonical_definition
+
Campaign strategy/read models
```

as Campaign-owned authority.

The current relational strategy field is already:

```text
UceCampaignStrategy.coreObjective
```

but its enum/runtime representation is legacy.

Therefore:

```text
NEW_CANONICAL_TYPED_OBJECTIVE_CONTRACT =
REQUIRED

NEW_PARALLEL_OBJECTIVE_DOMAIN =
NOT REQUIRED

NEW_OBJECTIVE_REVISION_AGGREGATE =
NOT REQUIRED
```

### Minimum preferred persistence shape

First preference:

```text
reuse existing UceCampaignStrategy.coreObjective
```

and add the canonical values additively to its existing database enum:

```text
AWARENESS
TRUST
ASSETS
ACTION
```

while retaining old enum labels only as legacy compatibility values until no rows depend on them.

Canonical endpoints must accept/write only the four new values.

For every newly canonical Campaign:

```text
coreObjective
==
canonical_definition objective
==
Campaign query/read objective
```

The service layer must enforce this invariant.

If current exact Git inspection proves that `canonical_definition` already stores one of the four canonical values immutably for a row, it is valid evidence for reconciliation of that row.

If exact Git inspection proves that `coreObjective` cannot safely be reused without a destructive schema operation, an additive `canonicalObjective` projection field is acceptable, but it must not become a second semantic authority. It must be constrained to equal the canonical-definition objective for canonical rows.

A new independent canonical-objective table or objective-specific aggregate is not justified.

## 2. UceCampaignObjectiveRevision / REAUTHOR_REQUIRED / re-author endpoint

### UceCampaignObjectiveRevision

```text
DISPOSITION =
REJECTED_AS_DUPLICATION
```

Reason:

Campaign objective belongs to Campaign Strategy. Objective-specific revision history would fragment the existing Campaign aggregate/version/snapshot model.

Campaign already owns:

```text
Campaign definition
Campaign edit rules
Campaign lifecycle
canonical_definition
downstream immutable snapshots
```

Objective canonicalization must not create a second version ledger.

If Campaign has an executable general Campaign-definition version/hash, reuse it.

If it lacks a sufficient immutable version fence, add a general Campaign-definition hash/version as a Campaign concern—not `UceCampaignObjectiveRevision`.

### REAUTHOR_REQUIRED

```text
DISPOSITION =
ACCEPTED_WITH_CORRECTION
```

It may exist only as a bounded compatibility/remediation reason for a legacy Campaign whose exact canonical objective cannot be proven.

It is not:

```text
a Campaign lifecycle
a new Campaign status
a canonical objective value
a reason to fabricate a mapping
```

Prefer a semantic compatibility reason such as:

```text
CANONICAL_OBJECTIVE_REQUIRED
LEGACY_OBJECTIVE_UNRESOLVED
```

The exact error/reason code is technical authority.

### dedicated objective re-author endpoint

```text
DISPOSITION =
REJECTED_AS_DUPLICATION_FOR_V1
```

Canonicalization must not introduce a special endpoint that bypasses normal Campaign edit/version/lifecycle restrictions.

Draft/editable Campaigns use the existing Campaign write authority.

Locked Campaigns remain locked.

If a real production Campaign with an ambiguous objective exists and Product needs the Brand to choose a new canonical objective, that is a separate bounded remediation Product decision. Do not build the endpoint speculatively.

## 3. Existing Campaign treatment

No lossy mapping is authorized.

Specifically, do not automatically treat:

```text
PULSE       → AWARENESS
PROOF       → TRUST
PRODUCTION  → ASSETS
PUSH        → ACTION

BRAND_AWARENESS   → AWARENESS
TRAFFIC_CLICKS    → ACTION
SALES_CONVERSIONS → ACTION
```

as a migration rule merely because the labels appear semantically related.

Use this precedence:

### A. Exact immutable canonical evidence exists

If `canonical_definition` or another accepted immutable Campaign creation/version artifact explicitly contains:

```text
AWARENESS | TRUST | ASSETS | ACTION
```

then:

```text
one-time internal deterministic repair = ALLOWED
```

Repair only that exact row/value and record before/after proof.

### B. Non-production / disposable Campaigns with only legacy objective

Preferred:

```text
recreate / reseed the Campaign
```

after canonical objective persistence is fixed.

Do not spend Product complexity preserving disposable legacy Campaign objective history.

### C. Legacy row with no immutable exact canonical evidence

```text
automatic mapping = PROHIBITED
```

Keep the row compatibility-readable where necessary, but:

```text
canonicalObjective = unresolved
objective-dependent new intelligence = unavailable
new publish/republish requiring canonical objective = blocked
```

Do not silently reinterpret the old value.

### D. Real production Brand-owned Campaign with unresolved objective

Only if inventory proves such records exist:

```text
return to Parent/Campaign Product
for a narrow explicit remediation policy
```

A user-facing Brand re-author flow is not pre-authorized by this review.

Therefore the default Product treatment is:

```text
EXISTING_CAMPAIGN_TREATMENT =

EXACT_EVIDENCE_ROW
→ INTERNAL_ONE_TIME_EXPLICIT_REPAIR

NON_PRODUCTION_LEGACY_ROW
→ RECREATE / RESEED

AMBIGUOUS_LEGACY_ROW
→ PRESERVE AS LEGACY_UNRESOLVED
   NO LOSSY MAPPING

REAL_PRODUCTION_AMBIGUOUS_ROW
→ PARENT PRODUCT REMEDIATION DECISION REQUIRED
```

## 4. Minimum safe implementation

The smallest Campaign-owned change is:

```text
1. ONE canonical objective contract:
   AWARENESS | TRUST | ASSETS | ACTION

2. Reuse existing Campaign Strategy objective persistence where safe:
   UceCampaignStrategy.coreObjective

3. Add the four canonical enum labels additively;
   retain legacy labels compatibility-only until safely retired.

4. Canonical Create Campaign:
   accepts only the four canonical values.

5. Canonical autosave/edit:
   accepts only the four canonical values
   and obeys existing Campaign editability restrictions.
   Canonicalization does not expand objective editability.

6. Publish / Go Live:
   requires an exact canonical objective.
   Legacy-unresolved objective cannot be promoted as canonical.

7. canonical_definition:
   stores the exact canonical objective for every newly canonical Campaign.

8. Service invariant:
   relational objective and canonical_definition objective must agree.

9. CampaignQueryService / Campaign Page:
   returns only the exact canonical value for canonical Campaigns.
   No UI mapper may translate legacy values into canonical ones.

10. Downstream consumers:
    receive only the Campaign-owned canonical objective contract/version ref.
    No consumer maps legacy objective vocabulary.

11. Historical reconciliation:
    only from immutable exact canonical evidence.

12. No UceCampaignObjectiveRevision.
    No special objective re-author endpoint.
```

If current Git proves the existing field cannot safely be reused, step 2 may become one additive `canonicalObjective` field, but it remains a projection of the single Campaign canonical objective—not a competing authority.

## 5. C03 handoff contract

Campaign SA does not authorize C03 implementation.

Campaign can, however, freeze the exact upstream contract C03 may consume.

C03 ApplicationSnapshot V2 may freeze:

```text
CampaignObjectiveSnapshotRefV1
{
  campaignId

  objective:
    AWARENESS
    | TRUST
    | ASSETS
    | ACTION

  objectiveContractVersion:
    CAMPAIGN_OBJECTIVE_V1

  campaignDefinitionRef:
    <existing Campaign-owned canonical definition/version reference>

  campaignDefinitionHash:
    <immutable canonical-definition hash at Application submission>
}
```

Important:

```text
objectiveRevisionId = NOT REQUIRED
```

If the accepted Campaign runtime already exposes a general Campaign version identifier, use it as `campaignDefinitionRef`.

If it does not, Campaign must expose one immutable canonical-definition hash/version fence. Do not invent an objective-specific revision system.

C03 copies/freezes:

```text
exact objective value
+
Campaign definition version/hash reference
```

inside `C03_APPLICATION_SNAPSHOT_V2`.

After submission:

```text
later Campaign edits
must not rewrite the ApplicationSnapshot objective
```

Applicant Match therefore sees the exact submission-time canonical objective and never reads mutable Campaign strategy to reconstruct it.

## 6. Preflight disposition

| Proposed area | Disposition | Campaign SA correction |
|---|---|---|
| Verify all current create/edit/publish/read objective paths | ACCEPTED | Required |
| Verify Product objective is exact four-value union | ACCEPTED | Required |
| Inventory all legacy objective enums/mappers | ACCEPTED | Required |
| Inventory historical rows by exact stored representation | ACCEPTED | Required before data treatment |
| Prohibit lossy auto mapping | ACCEPTED | Hard invariant |
| Add canonical objective support to executable Campaign | ACCEPTED | Prefer reuse of existing strategy objective field / canonical definition |
| New independent canonical-objective aggregate/table | REJECTED_AS_DUPLICATION | One Campaign objective authority only |
| `UceCampaignObjectiveRevision` | REJECTED_AS_DUPLICATION | Reuse Campaign definition/version/hash |
| `REAUTHOR_REQUIRED` as compatibility reason | ACCEPTED_WITH_CORRECTION | Not lifecycle/status; use only for unresolved legacy rows |
| Dedicated objective re-author endpoint | REJECTED_AS_DUPLICATION | Use normal Campaign edit authority; production remediation deferred unless inventory proves need |
| Automatic PULSE/PROOF/PRODUCTION/PUSH mapping | REJECTED | No lossy/inferred mapping |
| Automatic BRAND_AWARENESS/TRAFFIC_CLICKS/SALES_CONVERSIONS mapping | REJECTED | No lossy/inferred mapping |
| Internal repair from immutable exact canonical evidence | ACCEPTED | Row-specific proof required |
| Recreate disposable non-production Campaigns | ACCEPTED | Preferred over Product remediation UX |
| General Campaign definition/version/hash fence | ACCEPTED_WITH_CORRECTION | Reuse existing if present; add only if genuinely absent |
| C03 snapshot consumes exact canonical objective | ACCEPTED | Contract only; Campaign SA does not authorize C03 implementation |
| Objective-dependent downstream consumers fail closed on unresolved legacy objective | ACCEPTED | Required |
| User-facing remediation for real production ambiguous rows | DEFERRED | Only if inventory proves such rows exist |

## 7. Final return

```text
CAMPAIGN_SA_CANONICAL_OBJECTIVE_FEEDBACK_V1

OVERALL_DISPOSITION =
ACCEPTED_WITH_CORRECTIONS
EXACT_GIT_PACKAGE_FETCH_REVALIDATION_REQUIRED

PRODUCT_CONFLICTS =
NONE
CANONICAL_PRODUCT_VOCABULARY =
AWARENESS | TRUST | ASSETS | ACTION

TECHNICAL_CONFLICTS =
CURRENT_EXECUTABLE_CAMPAIGN OBJECTIVE REPRESENTATIONS ARE LEGACY;
NO LOSSY MAPPING IS AUTHORIZED;
ONE EXACT CAMPAIGN-OWNED CANONICAL OBJECTIVE MUST REPLACE
LEGACY MAPPING AT CREATE / EDIT / PUBLISH / READ BOUNDARIES

EXISTING_CAMPAIGN_TREATMENT =
1. IMMUTABLE EXACT CANONICAL EVIDENCE
   → INTERNAL ONE-TIME EXPLICIT REPAIR
2. NON-PRODUCTION LEGACY CAMPAIGN
   → RECREATE / RESEED
3. LEGACY CAMPAIGN WITHOUT EXACT EVIDENCE
   → PRESERVE AS LEGACY_UNRESOLVED;
     DO NOT AUTO-MAP;
     OBJECTIVE-DEPENDENT NEW CONSUMERS FAIL CLOSED
4. REAL PRODUCTION AMBIGUOUS CAMPAIGN
   → RETURN FOR SEPARATE PARENT PRODUCT REMEDIATION DECISION

MINIMUM_SAFE_IMPLEMENTATION =
REUSE THE EXISTING CAMPAIGN STRATEGY / CANONICAL-DEFINITION AUTHORITY;
ADD EXACT AWARENESS/TRUST/ASSETS/ACTION SUPPORT TO THE EXISTING
OBJECTIVE PERSISTENCE PATH WHERE SAFE;
NEW CANONICAL WRITES USE ONLY THOSE FOUR VALUES;
CANONICAL_DEFINITION AND RELATIONAL PROJECTION MUST AGREE;
LEGACY VALUES REMAIN COMPATIBILITY-ONLY;
NO OBJECTIVE-SPECIFIC REVISION AGGREGATE;
NO SPECIAL RE-AUTHOR ENDPOINT;
NO LOSSY BACKFILL

C03_HANDOFF_CONTRACT =
C03 APPLICATIONSNAPSHOT V2 MAY FREEZE:
- CAMPAIGN ID
- EXACT CANONICAL OBJECTIVE VALUE
- OBJECTIVE CONTRACT VERSION = CAMPAIGN_OBJECTIVE_V1
- EXISTING CAMPAIGN CANONICAL-DEFINITION VERSION/SNAPSHOT REF
- IMMUTABLE CAMPAIGN-DEFINITION HASH
NO OBJECTIVE REVISION ID IS REQUIRED
C03 MUST NOT RECONSTRUCT OBJECTIVE FROM MUTABLE OR LEGACY CAMPAIGN STATE

REQUIRED_PREFLIGHT_CORRECTIONS =
- FIRST PROVE WHETHER canonical_definition ALREADY STORES THE EXACT CANONICAL OBJECTIVE
- PREFER REUSE OF UceCampaignStrategy.coreObjective / EXISTING CAMPAIGN DEFINITION
  OVER A SECOND CANONICAL FIELD
- REJECT UceCampaignObjectiveRevision
- DOWNGRADE REAUTHOR_REQUIRED TO A LEGACY-COMPATIBILITY REASON ONLY
- REMOVE THE GENERAL RE-AUTHOR ENDPOINT
- INVENTORY REAL VS NON-PRODUCTION LEGACY CAMPAIGNS
- REPAIR ONLY ROWS WITH IMMUTABLE EXACT CANONICAL EVIDENCE
- RECREATE DISPOSABLE NON-PRODUCTION LEGACY CAMPAIGNS
- KEEP AMBIGUOUS ROWS UNRESOLVED
- PROVE CREATE / EDIT / PUBLISH / QUERY / CAMPAIGN PAGE / DOWNSTREAM
  EXACT ROUND-TRIP OF ALL FOUR CANONICAL VALUES
- PRESERVE EXISTING CAMPAIGN OBJECTIVE EDIT/LOCK RULES

IMPLEMENTATION_AUTHORIZATION_RECOMMENDATION =
DO NOT AUTHORIZE THE PROPOSED PLAN UNCHANGED

AUTHORIZE A BOUNDED CAMPAIGN-OWNED CANONICALIZATION PLAN
ONLY AFTER THE ABOVE PREFLIGHT CORRECTIONS AND EXACT GIT REVALIDATION

C03 IMPLEMENTATION =
NOT AUTHORIZED BY CAMPAIGN SA

APPLICANT MATCH IMPLEMENTATION =
NOT AUTHORIZED BY CAMPAIGN SA
```
