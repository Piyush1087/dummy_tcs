# CAMPAIGN PAGE — REPORTING + AI MATCH + MARKETPLACE RECOMMENDATION PRODUCT AUTHORITY RECOVERY V1

`CAMPAIGN_PAGE_REPORTING_AI_MATCH_MARKETPLACE_RECOMMENDATION_PRODUCT_DECISION_RECOVERY_V1`

## Status

```text
STATUS = CURRENT_STATE_BLOCKED
PRODUCT_AUTHORITY_RECOVERY = SUBSTANTIALLY_COMPLETE
PARENT_PRODUCT_REVIEW = READY_ON_RECOVERED_DECISIONS
REMOTE_CURRENT_STATE_VERIFICATION = BLOCKED_IN_THIS_SESSION
GIT_PUBLICATION = BLOCKED_IN_THIS_SESSION
IMPLEMENTATION = NOT_AUTHORIZED
```

The Product/architecture recovery below is complete enough to expose the remaining Parent decisions and to prevent stale Campaign decisions from being revived. Final `READY_FOR_PARENT_PRODUCT_REVIEW` publication is blocked only because this Systems Architect session cannot fetch/prune the three Git repositories or publish to Git: the GitHub connector was disabled by the host at first use and the available local container has no reachable GitHub network route or mounted repository clones. No Product decision below is promoted from proposal to final merely because of that tooling limitation.

No backend source, frontend source, Prisma schema, migration, provider configuration, OAuth state, live Meta data, Campaign state, C03 state, C04 state, payout state, or Intelligence runtime state was mutated.

---

# A. Exact authorities and evidence inspected

## A1. Campaign historical runtime authority

Historical Campaign Page integrated handoff:

```text
frontend repository = Piyush1087/creator-commerce-frontend-v2-clone
historical accepted frontend branch = development
historical accepted frontend SHA = 1987b30de56891a4f7f95758bddd27f4dbb2d868
historical Campaign source branch = feature/create-campaign-g2-ux

backend repository = Piyush1087/creator-commerce-backend-v2-clone
historical accepted backend branch = development
historical accepted backend SHA = f7eb11bc72051f034f7d46ff2ad5c6b4d4b9e0fd
historical Campaign reconciliation branch = phase-g/campaign-page-backend-reconciliation

historical design repository = Piyush1087/dummy_tcs
historical design branch = docs/stitch-design-library
historical design SHA = 53e9abd01a01c11b641d8d1bab175797bcbea3ad
```

These are historical implementation/design checkpoints, not assumed current heads.

Current Campaign backend evidence available from the later BP-G05 correction:

```text
pre-correction canonical development SHA observed by Local Codex =
4c5f42858b950b7cd342f8972f99f548f3daa942

bounded BP-G05 branch = campaign/bp-g05-exact-net-terms-persistence
accepted BP-G05 SHA = 7901c7743ac1bb46b6ed4f74b768998dbebd28f4
accepted BP-G05 tree = d255ebb2c8458326c7d3fb473a325057ccfa5b4f
```

BP-G05 is a bounded Campaign persistence correction, not evidence that its branch is the current Campaign Page integration branch.

## A2. Historical Campaign Intelligence planning authority

Inspected the full Step 10A Campaign Intelligence assessment (`10A.docx`), which recorded its own repository baseline as:

```text
dummy_tcs main = 92ed7b4d54fcede918f37ba7c2a924babacda20d
```

Key recovered accepted consumer boundaries from that assessment:

```text
Creator Recommendation input/result envelope = PARTIAL
Applicant Intelligence consumer contract = FROZEN
Campaign Report Calculation consumer contract = FROZEN
Campaign Actionables accepted-result contract = MISSING at that checkpoint
Campaign Page/CampaignQueryService = presentation/query projection only
```

The object model in Step 10A was explicitly proposed architecture, not final Product authority.

## A3. Campaign Page UX authority recovered from later Product reconciliation

Later Campaign Page authority supersedes historical Reporting-workspace framing:

```text
Campaign Header
→ Campaign Attention Layer
→ exactly 3 operational workspaces:
   Discovery
   Applicants
   Collaborations
```

Reporting is not an operational workspace. It is Campaign-level performance/reporting presentation with a compact summary and a route/action to fuller Reporting when authoritative data exists.

Canonical Discovery UX authority recovered from `Discovery Workspace UX Authority`:

```text
Discovery = pre-application creator consideration/sourcing
Match Potential = High / Medium / Low
numeric Applicant AI Match must not appear in Discovery
Recommended reason = concise, supplied output
sources = Marketplace / Manual / CSV
source = provenance, not creator identity
Meta provider failure must not disable Manual/CSV acquisition
frontend does not calculate Match Potential
```

Canonical Applicants UX authority recovered from `Applicants Workspace UX Authority`:

```text
Applicants = post-application decision queue
primary decision record = Application
ApplicationSnapshot = immutable submission-time authority
Applicant Intelligence states = PROCESSING / READY / UNAVAILABLE
numeric AI Match belongs here, not Discovery
AI availability never by itself blocks Approve / Reject
frontend does not calculate Applicant Intelligence
approval does not make Campaign the owner of Collaboration execution
```

## A4. Shared DE / Intelligence donor authority

Accepted architecture inspected includes:

```text
Resource identity
Capture identity
Artifact / normalized acquisition material where applicable
Evidence identity
semantic Observation / semantic observation key
capability execution
coverage / freshness / representativeness / acquisition quality
provenance and parent/source references
authorization-generation and provider-account fencing
processor/contract registry
generation + component generation
current / candidate / transition + CAS
execution / attempts / retry where accepted
failure-current preservation
strict consumer projection
```

The DE boundary preserves separate identities for `resourceRef`, `captureRef`, `evidenceRef`, and execution/provider references. Provider payload is not semantic Product truth.

Failure-current preservation is accepted donor behavior: a failed/unavailable execution must not replace a valid current result with empty/zero; the prior current may remain while freshness/limitation truth degrades.

## A5. Brand Instagram Intelligence accepted donor

Accepted donor checkpoints available in current authority material:

```text
backend branch = program/instagram-intelligence-v1-backend
backend SHA = fef32afb0fdef52f00c7c22b3d0a85967a68fded
backend tree = 7ef6bd705b55ef82836b3f57f06a2832a867e781

frontend branch = program/instagram-intelligence-v1-frontend
frontend SHA = 5866d0ac82f742957f53a8db2144a9a166628b75
frontend tree = 7c095290ffdef4c84f37382bc594bef536c92a49

authority branch = program/instagram-intelligence-v1-authority
authority SHA = b3f04918435db5043c5498ea92250762047291b1
authority tree = 253ea239ffa2cdb9f1f87c546037c4a722512b46
```

Important accepted donor semantics:

- exactly versioned Objects/components rather than UI-owned intelligence;
- Evidence-linked results;
- readiness/freshness/limitation semantics;
- failed execution preserves prior current;
- one post/result does not become a broad learning;
- `likely_collab` is bounded inference, not canonical Collaboration truth;
- source-native Instagram truth remains distinct from Brand/canonical semantic truth.

## A6. Creator Intelligence / Creator Centre donors

### Creator Audience V0 — accepted donor

Available authority identifies:

```text
Product decision register SHA = 64bf4c454213277bb9fbe247e61bc78a203a227d
technical handoff SHA = 59e05b25e4ff2dea29d89026643bb4e21e0cef60
```

Later accepted implementation ancestry is carried by Content/Commercial checkpoints. Audience semantics include truthful partial/suppressed/unavailable states, exact provider/account/generation fencing, deterministic arithmetic where admitted, and failure-current preservation.

### Creator Content V0 — accepted donor

```text
backend SHA = 5f7712108886305b40cbcf1c0d89f5ecdc22ab24
backend tree = 343e03b3c5bd6ee1749259841f622e1f7012cb75
frontend SHA = 7edd26d3cdad0ec84083884b34039952368a1295
frontend tree = 0cc596ca1ef1d1c4a51857125547de156e487c8b
authority SHA = 5df3bff917dd294f3f86642809c66558e37a3b8c
authority tree = 2bcbde3e893adb5f7675ed894e2065651554f7f4
authority branch = program/creator-content-v0-authority
```

### Creator Brand V0 — accepted predecessor

Current Commercial Setup/Rate Card acceptance explicitly confirms Creator Brand V0 as an accepted predecessor. Exact standalone Creator Brand tip was not independently re-fetched in this session and therefore is not restated as current head.

### Commercial Setup / Work Preferences V2 / Rate Card V2 — accepted donor

```text
backend branch = program/creator-commercial-setup-rate-card-v0-backend
backend SHA = 3504a3cc8f0dc684431b73046f5796f157708f68
backend tree = de4b3ba41d3c6d96645f115a5d780660991a27c3

frontend branch = program/creator-commercial-setup-rate-card-v0-frontend
frontend SHA = e6e7ae8ea9f5f98f882f52230e4cae163bda1e89
frontend tree = c77fd43a13251f3c0ba6733f5070fe49412bba1e

authority branch = program/creator-commercial-setup-rate-card-v0-authority
authority SHA = 897026bb39e7390397b9fea48a696ee488c31a4c
authority tree = 773f17c08312b5b9dc8ff25094e54ab2bdf1004c
```

Work Preferences and Rate Card are separate evidence-ready owners. Campaign/Add Brief remains transactional commercial truth; Creator Rate Card is creator-side starting/reference information.

### Audience V1 / Portfolio V3

Available evidence shows these as later execution lanes, not safely usable as accepted current donors for this audit:

```text
Audience V1 = IN_PROGRESS / NOT YET AUTHORITY
Portfolio V3 = IN_PROGRESS / NOT YET AUTHORITY
```

Portfolio Product direction may inform future inputs, but Campaign implementation must not depend on it until technically accepted/converged.

## A7. C03 / C04 ownership donors

Recovered current authority boundaries:

```text
Discovery / recommendation = pre-application Campaign sourcing
Application submitted = C03 / Applicants owns Application review
ApplicationSnapshot = immutable submission-time authority
Application approved = handoff boundary
C04 Collaboration = independently owns execution after approval
C04 Production = per Deliverable
C04 Publishing = per Deliverable
publishing authorization remains explicit even after content auto-approval
feedback is post-completion, not a sixth execution stage
```

Accepted Collaboration consumer authority also prohibits Campaign-side invention of Collaboration state, financial resolution, risk/health scores, or socket-derived truth.

Historical Collaboration G1/G2 runtime checkpoints available:

```text
frontend branch = phase-g/collaboration-g1c-ownership-context
frontend SHA = 353040228dfa20136e82b364ac56556b3b7dd7b5
backend branch = phase-g/collaboration-g1c-bank-ownership
backend SHA = b7c726c8e7fba114ee7a0c2b09aac7aaae698ec5
```

Later C04 Product/architecture authority supersedes stale six-stage, 30/70, barter/manual and auto-publish assumptions.

## A8. Meta / Creator Marketplace evidence

Historical Meta/Marketplace documents and C01/BS-06-style audits were inspected as provider evidence only.

Current accepted Instagram Intelligence V1 explicitly did **not** require Creator Marketplace discovery for its V1 provider boundary.

Historical provider configuration evidence showed `instagram_creator_marketplace_discovery` as unavailable/rejected on the audited app at that time and treated Marketplace Discovery/Messaging as separate capabilities. This may have changed; it is therefore `PROVIDER_VALIDATION_REQUIRED`, not current fact.

Historical Marketplace field/threshold documents contain useful hypotheses (demographic thresholds, top-segment limits, insight delay, Marketplace-only portfolio/rate-card fields, batch behavior), but these are not accepted provider truth without current Meta validation.

## A9. Current-state verification blocker

The assignment required fresh fetch/prune and exact current remote heads/trees. In this session:

```text
GitHub connector = DISABLED_BY_HOST_AT_FIRST_CALL
GitHub tool reuse = PROHIBITED_BY_TOOL_RUNTIME
local container GitHub DNS/network = UNAVAILABLE
mounted repository clones = NONE
```

Therefore the artifact cannot truthfully claim current remote head/tree verification or Git publication. This is why status is `CURRENT_STATE_BLOCKED`, not because Product authority is materially contradictory.

---

# B. Source / supersession inventory

| Area | Recovered statement | Classification | Disposition |
|---|---|---|---|
| Campaign objectives | Current objectives are `AWARENESS / TRUST / ASSETS / ACTION` | FINAL_PRODUCT_DECISION | Preserve; `PULSE / PROOF / PRODUCTION / PUSH` is SUPERSEDED |
| Campaign Page workspaces | Exactly Discovery / Applicants / Collaborations | FINAL_PRODUCT_DECISION | Preserve |
| Reporting placement | Reporting is Campaign-level, not an operational workspace | FINAL_PRODUCT_DECISION | Supersedes historical Reporting-workspace UI |
| Discovery score display | Qualitative Match Potential High/Medium/Low | FINAL_PRODUCT_DECISION | Supersedes old Campaign Fit Strong/Moderate/Weak and numeric score UI in Discovery |
| Applicant score display | Numeric AI Match only in Applicants when READY | FINAL_PRODUCT_DECISION | Preserve |
| Applicant AI availability | PROCESSING / READY / UNAVAILABLE; never blocks Brand decision by itself | FINAL_PRODUCT_DECISION + ACCEPTED_TECHNICAL_CONTRACT | Preserve |
| Application evaluation context | Immutable ApplicationSnapshot | FINAL_PRODUCT_DECISION / ACCEPTED_TECHNICAL_CONTRACT | Preserve |
| Marketplace sources | Marketplace / Manual / CSV in one CampaignCreator system | FINAL_PRODUCT_DECISION | Preserve |
| Recommendation source | Meta search order is not TCS recommendation score | FINAL_PRODUCT_DECISION | Preserve |
| Historical 30/25/20/15/10 ranking | Audience 30 / Content 25 / Performance 20 / Brand-Commercial 15 / Quality-Confidence 10 | PROVISIONAL_PROPOSAL | Do not freeze; requires Parent rubric decision |
| Applicant legacy `AIRecommendationSchema` | 0–100 score + strengths/weaknesses/breakdown | ACCEPTED_TECHNICAL_CONTRACT for consumer envelope only | Does not freeze weights/algorithm |
| `publishApplicantIntelligenceInputSchema` | PROCESSING/READY/UNAVAILABLE + supplied score/reasons/breakdown/version/time | ACCEPTED_TECHNICAL_CONTRACT | Revalidate exact current code before implementation |
| `publishCampaignReportCalculationInputSchema` | immutable/versioned supplied calculations with KPI/availability/metrics/insights/provenance/finality/time | ACCEPTED_TECHNICAL_CONTRACT | Metric derivation still open |
| `publishCreatorRecommendationInputSchema` | creator/context/run IDs, score/band/rank/explanation/time | PROVISIONAL_PROPOSAL / partial technical envelope | Consumer shape useful; rubric/evidence contract not frozen |
| Campaign-Creator Evaluation | Shared evaluation foundation candidate | PROVISIONAL_PROPOSAL | Architecturally recommended; Parent/contract freeze still required |
| Discovery Recommendation Set | versioned ordered Campaign run | PROVISIONAL_PROPOSAL | Recommended architecture, not Product-final object name |
| Applicant Match Evaluation | snapshot-bound versioned result | PROVISIONAL_PROPOSAL with FINAL snapshot behavior | Object naming/persistence contract open |
| Campaign Report Calculation | immutable calculation history | ACCEPTED_TECHNICAL_CONTRACT at Campaign consumer boundary; object architecture still to reconcile | Preserve supplied-result semantics |
| Campaign Actionable Set | bounded action recommendations | DEFERRED / historically missing acceptance contract | Outside these 3 feature freezes except Reporting may feed it later |
| Copilot independent model call | Separate model call not justified | SUPERSEDED / DEFERRED | Do not make it a dependency |
| Shared DE/Evidence/runtime | Resource/Capture/Evidence, provenance, fencing, generation/current/CAS, failure-current preservation | CURRENT_IMPLEMENTED_TRUTH in accepted donors | Reuse; no Campaign-private engine |
| Creator Audience V0 | accepted Creator donor | CURRENT_IMPLEMENTED_TRUTH on accepted program line | Reuse where admissible |
| Creator Content V0 | accepted Creator donor | CURRENT_IMPLEMENTED_TRUTH on accepted program line | Reuse where admissible |
| Creator Brand V0 | accepted predecessor | CURRENT_IMPLEMENTED_TRUTH on accepted program line | Reuse where admissible |
| Work Preferences / Rate Card | accepted V2 donors | CURRENT_IMPLEMENTED_TRUTH on accepted program line | Use as optional context, not hard eligibility unless Product freezes it |
| Audience V1 | executing after V0 | DEFERRED / IN_PROGRESS_NOT_AUTHORITY | Do not depend on until accepted |
| Portfolio V3 | executing/planned after Commercial | DEFERRED / IN_PROGRESS_NOT_AUTHORITY | Do not depend on until accepted |
| Historical Meta Marketplace field matrix | many endpoint/field assumptions | PROVIDER_DEPENDENT | Validate; do not encode as fact |

No active irreconcilable Product authority conflict was found. Historical disagreements are resolvable as supersession or open decisions.

---

# C. Product distinction among the three capabilities

## C1. Campaign Reporting

Campaign Reporting answers:

> After Campaign execution has produced eligible/stable Collaboration and publishing/performance truth, how did the Campaign perform, what evidence supports that interpretation, and what should the Brand understand from it?

Reporting may consume Campaign, C04 Collaboration, publishing evidence, Instagram performance, tracking and commercial truth. It is not pre-launch planning, Discovery funnel sourcing, Applicant scoring, Creator account analytics, Brand-wide Instagram Intelligence, payout accounting, or pre-launch creator recommendation.

Reporting must remain truthful when evidence is incomplete: missing/unavailable is not zero, correlation is not causation, and a single post/result does not become a broad learning.

## C2. Applicant AI Match

Applicant AI Match answers:

> Given this submitted Application and its immutable submission-time Campaign/Application context, how strong is the fit and what evidence should help the Brand review it?

It exists in Applicants after application submission. It is distinct from Meta search ordering, Discovery recommendation, a global creator score, hard application eligibility, final Brand approval/rejection, and C04 Collaboration execution.

Applicant AI Match is decision support only. Brand decision authority remains Brand/domain capability authority.

## C3. Marketplace Recommendation

Marketplace Recommendation is the end-to-end pre-application sourcing/ranking function:

```text
Campaign context
→ provider candidate retrieval
→ hard eligibility/capability admission
→ admitted Intelligence/Evidence enrichment
→ Campaign-specific evaluation and comparable normalization
→ recommendation reasons + Match Potential
→ Discovery candidate pool
```

It is not Meta's search order, Applicant AI Match, Outreach/messaging, Applicant review, Collaboration execution, revenue reporting, or a universal creator rank.

---

# D. Cross-feature lifecycle / ownership boundary

```text
DISCOVERY / MARKETPLACE RECOMMENDATION
Campaign owns sourcing/recommendation context before application
        │
        ▼
APPLICATION SUBMITTED
C03 / Applicants owns canonical Application + immutable Snapshot
Applicant AI Match evaluates the snapshot; non-blocking
        │
        ▼
APPLICATION APPROVED
C04 owns Collaboration execution independently
        │
        ▼
FULFILLMENT / PRODUCTION / PUBLISHING / COMPLETION TRUTH
C04 owns canonical execution and publishing evidence
Instagram/other source owners own measured performance Evidence
        │
        ▼
REPORTING-ELIGIBLE / STABLE EVIDENCE
Campaign Reporting owns Campaign-specific deterministic calculation
+ bounded evidence-backed interpretation
```

This boundary is consistent across recovered current authority. No active Product conflict found.

---

# E. Campaign Reporting recovery matrix

## E1. Recovered Product authority

| Decision | Classification | Current conclusion |
|---|---|---|
| Reporting is Campaign-level, not a 4th workspace | FINAL_PRODUCT_DECISION | Preserve |
| Compact performance/reporting summary may appear in Campaign attention layer | FINAL_PRODUCT_DECISION | Preserve |
| `View Full Report` may expose richer Reporting when authoritative | FINAL_PRODUCT_DECISION | Preserve |
| Before authoritative Reporting exists, state is truthful unavailable/insufficient; no fake zero metrics | FINAL_PRODUCT_DECISION | Preserve |
| Frontend renders supplied backend projection and never calculates business metrics | FINAL_PRODUCT_DECISION + ACCEPTED_TECHNICAL_CONTRACT | Preserve |
| Immutable/versioned successful calculation history + current/latest accepted projection | ACCEPTED_TECHNICAL_CONTRACT | Preserve, reconcile to current shared runtime |
| Deterministic metrics first; AI interpretation only over validated metric/evidence context | ACCEPTED_TECHNICAL_CONTRACT / strong architecture direction | Preserve |
| AI text is concise interpretation, not metric authority | FINAL_PRODUCT_DECISION | Preserve |
| Rich historical charts shown in old designs | SUPERSEDED as authority | May be redesigned only after metric semantics freeze |
| Exact metric set/formulas/windows/stable threshold | OPEN_PRODUCT_DECISION | Parent required |

## E2. Entry conditions

Recovered final/semi-final conditions:

- Reporting must not manufacture metrics before authoritative evidence exists.
- C04 canonical Collaboration/publishing truth and actual performance Evidence are inputs, not Campaign-owned duplicates.
- Live and completed Campaigns may both have Reporting, but finality semantics must distinguish provisional/current from completed/final.
- A report result attaches to an explicit Campaign context/version + calculation window/evidence manifest, not mutable UI state.

Open: exact definition of `REPORTING_ELIGIBLE` / stable Campaign state and minimum evidence threshold.

## E3. Metric ownership inventory

| Metric family | Canonical source owner | Calculation role | Current disposition |
|---|---|---|---|
| Collaboration counts/stages/completion | C04 Collaboration | Deterministic aggregation only | Admissible if full authoritative set supplied |
| Deliverables approved/published | C04 per-Deliverable execution | Deterministic count | Admissible |
| Published content identity/evidence | C04 + provider/media evidence | Join with exact provenance | Admissible |
| Reach / accounts reached | Instagram/provider Evidence owner | Deterministic aggregation over admitted metrics | Provider/metric availability dependent |
| Impressions | Instagram/provider Evidence owner | Deterministic aggregation only when metric exists for media type/window | Provider dependent |
| Plays/views | Instagram/provider Evidence owner | Format-aware deterministic aggregation | Provider dependent |
| Likes/comments/saves/shares | Instagram/provider Evidence owner | Deterministic, metric-specific | Provider dependent |
| Interaction / engagement rate | Campaign Reporting formula contract | Requires frozen numerator/denominator/window | OPEN_PRODUCT_DECISION |
| Video retention / 3-second views | Provider/performance Evidence | Only when actual metric exists | PROVIDER_DEPENDENT |
| Clicks/actions/conversions | Tracking/attribution owner | Only with authoritative attribution | OPEN_PRODUCT_DECISION + provider/tracking dependency |
| Creator/content contribution | Campaign Reporting over C04 + performance evidence | Deterministic attribution only where exact content↔Collaboration linkage exists | Product formula open |
| Campaign spend / committed value | Campaign/C04/financial owners | Read authoritative commercial truth; no ledger duplication | Admissible with role/privacy gates |
| Payout/settlement | C04/Payout owner | Reporting may consume bounded facts; must not become accounting ledger | Scope open; recommend exclude from core performance MVP |
| Asset production output | Campaign Asset/Brief + C04 Deliverables | Deterministic counts | Admissible |
| Objective progress | Campaign objective + frozen KPI mapping | Deterministic once objective→metric contract frozen | OPEN_PRODUCT_DECISION |
| Coverage/freshness | Evidence/Intelligence metadata | Always displayed where material | REQUIRED |

## E4. RESULT → SIGNAL / PATTERN → LEARNING

Recovered architecture permits this hierarchy only with evidence discipline:

```text
RESULT
= one deterministic metric/fact for an explicit subject/window/evidence set

SIGNAL
= bounded interpreted condition supported by admitted results

PATTERN
= recurrence/comparison across enough independent observations under a versioned threshold

LEARNING
= evidence-backed Campaign conclusion that survives minimum coverage/recurrence/confidence policy
```

Final non-fabrication rules:

- one post/result cannot become a broad pattern/learning;
- missing data cannot count as negative performance;
- comparison requires explicit denominator/baseline;
- correlation cannot be stated as causal lift without attribution authority;
- every current insight carries window, sample size/coverage, observed/captured time, provenance, calculation/contract version and limitation state.

Open: minimum recurrence/sample/effect-size requirements for Pattern/Learning.

## E5. Reporting frontend recovery

```text
location = Campaign Attention Layer performance/reporting summary
full report = separate detail surface/route/drawer to be finalized
workspace = NO
frontend calculation = PROHIBITED
```

Required states:

```text
LOADING
INSUFFICIENT_DATA / UNAVAILABLE
PROCESSING
CURRENT_COMPLETE
CURRENT_PARTIAL
STALE_CURRENT_PRESERVED
FAILED_CURRENT_PRESERVED
FAILED_NO_CURRENT
FINAL / COMPLETED where Product finality permits
```

Primary hierarchy recommendation:

1. primary objective/KPI outcome only when frozen and available;
2. small supporting metric set with explicit window;
3. coverage/freshness/limitations;
4. 1–3 evidence-backed insights/learnings;
5. creator/content breakdown only after deterministic attribution contract exists;
6. `View Full Report` for detail.

Do not revive old dashboard density merely because historical Stitch displayed charts.

---

# F. Applicant AI Match recovery matrix

## F1. Product purpose and trigger

| Decision | Classification | Current conclusion |
|---|---|---|
| AI Match begins only after Application submission | FINAL_PRODUCT_DECISION | Preserve |
| Evaluation is against immutable ApplicationSnapshot / application-time context | FINAL_PRODUCT_DECISION | Preserve |
| Numeric AI Match belongs in Applicants, not Discovery | FINAL_PRODUCT_DECISION | Preserve |
| PROCESSING / READY / UNAVAILABLE are Intelligence states, separate from Application status | FINAL_PRODUCT_DECISION + ACCEPTED_TECHNICAL_CONTRACT | Preserve |
| AI unavailability never by itself blocks Approve/Reject | FINAL_PRODUCT_DECISION | Preserve |
| Brand remains final decision owner | FINAL_PRODUCT_DECISION | Preserve |
| Later mutable Campaign edits silently change accepted Applicant evaluation | SUPERSEDED / PROHIBITED | Do not allow |
| Exact rubric/weights/evidence minimum/rounding | OPEN_PRODUCT_DECISION | Parent required |

Initial trigger should remain Application submission + Snapshot creation. Retries may reproduce the same evaluation input manifest. Any later re-evaluation that changes the admitted evidence/context needs an explicit supersession policy; it must not silently rewrite the original submission evaluation.

## F2. Candidate inputs by owner

| Input | Owner | Classification in Match |
|---|---|---|
| Campaign objective / deliverables / target audience | Campaign | SCORING INPUT after snapshot |
| Brief / Asset/Offering context at application | Campaign snapshot + Offering owner | SCORING INPUT |
| Brand Intelligence | Brand Intelligence | SCORING or EXPLANATION context only where rubric freezes it |
| Product/Offering Intelligence | Product Intelligence | SCORING or EXPLANATION context where relevant |
| Creator identity/account state | Creator Settings / CampaignCreator | HARD VALIDATION for identity; not quality score |
| Creator Audience V0/V1 | Creator Intelligence | Optional SCORING INPUT when current/admitted |
| Creator Content V0 | Creator Intelligence | Optional SCORING INPUT |
| Creator Brand V0 | Creator Intelligence | Optional SCORING / EXPLANATION context |
| Work Preferences | Creator Commercial Setup | Potential HARD COMPATIBILITY or scoring context; Parent must decide |
| Rate Card | Creator Rate Card | Potential commercial compatibility input; must not replace Campaign transactional commercial truth |
| Portfolio | Portfolio owner | PLANNED FUTURE INPUT until accepted |
| Prior C04 completed work | C04 | EXPLANATION/verified-work input only if privacy/relationship policy admits it |
| Instagram account/content/performance | Instagram/Creator Intelligence Evidence | Optional SCORING INPUT when authorized/admitted |
| Sensitive/proxy attributes | No implicit owner | NON-ADMISSIBLE unless explicit Product/legal authority |

Missing optional Intelligence must not automatically reduce the creator's fit score. Coverage/readiness must be represented separately from fit.

## F3. Score/explanation recovery

Final UI/product direction:

```text
one authoritative numeric Applicant AI Match
only in Applicants
only when Applicant Intelligence = READY
```

Open Product constants:

- exact scale/rounding (recommend integer 0–100 because existing contracts/UI already align there, but Parent must freeze);
- dimensions and weights;
- objective-specific variants;
- hard gates vs score;
- minimum evidence/coverage to emit a numeric score;
- whether low-coverage produces no score or a score with confidence state;
- explanation structure/count;
- role visibility/exports;
- re-evaluation/supersession policy while still pending.

Recommended explanation shape:

```text
2–3 Strengths
1–2 Areas to consider
0–2 Unknown / insufficient-evidence notes when material
bounded dimension breakdown only for frozen dimensions
```

`Weaknesses` may remain internal schema vocabulary; user-facing copy should continue to use `Areas to consider`.

## F4. Persistence/runtime recommendation

Use the shared Intelligence runtime rather than ordinary Campaign/UI fields:

```text
subject = Application / Applicant Match Evaluation
context = immutable ApplicationSnapshot identity/version
input manifest = exact Campaign snapshot + admitted creator/brand/offering evidence versions
execution identity = processor/contract/rubric/model/profile versions
output = status + optional numeric score + bounded reasons/breakdown + coverage/confidence + provenance
current/history = immutable generations + accepted Campaign current pointer/projection
failure = preserve prior accepted current if a later retry fails
```

Campaign owns the trigger, acceptance/stale-write validation and display-safe projection. Shared Intelligence owns execution lineage/attempts/telemetry/generation machinery.

---

# G. Marketplace Recommendation recovery matrix

## G1. Product journey

Frozen/recovered journey:

```text
Campaign execution-ready
→ Brand enters Discovery
→ Marketplace retrieval when provider capability exists
→ hard admission filters
→ selective enrichment
→ Campaign-specific recommendation evaluation/ranking
→ concise reasons + qualitative Match Potential
→ CampaignCreator Discovery pool
→ optional Outreach owned by Outreach
→ Application submission
→ Applicants owns Applicant AI Match
```

Manual `Add Creator` and CSV import remain parallel acquisition routes and must remain usable when Marketplace is disconnected/unavailable. They feed the same normalized `CampaignCreator` system.

Source remains provenance:

```text
Marketplace / Manual / CSV
```

## G2. Ranking logic recovery

Historical formula:

```text
Audience = 30%
Content = 25%
Performance = 20%
Brand / Commercial = 15%
Quality / Confidence = 10%
```

Classification:

```text
PROVISIONAL_PROPOSAL
NOT FINAL PRODUCT AUTHORITY
```

Do not implement these weights without Parent freeze.

Later architecture is stronger and should be preserved:

```text
Prospect Recommendation
= Brand × Creator × Campaign/opportunity context

NOT universal Creator quality
NOT Meta search order
```

Recommended technical pattern:

```text
hard filters first
→ versioned Campaign-Creator Evaluation for admitted candidates
→ deterministic comparable normalization within one Recommendation Run
→ ordered Recommendation Set
→ UI band High / Medium / Low + concise reason
```

A numeric internal score may be useful for deterministic ordering, but the Discovery UI remains qualitative. The exact internal scale/weights/normalization are open Product/algorithm decisions.

## G3. Provider capability matrix

Because no live current Meta validation is available in this assignment, all exact Marketplace capability claims remain provider-dependent.

| Desired datum/capability | Current disposition |
|---|---|
| Stable candidate provider identity | PROVIDER_VALIDATION_REQUIRED |
| Search/list identity + handle/name/avatar | PROVIDER_VALIDATION_REQUIRED |
| Search-side follower/category/filter fields | PROVIDER_VALIDATION_REQUIRED |
| Audience demographics | PROVIDER_VALIDATION_REQUIRED; may require detail/insights and suppression handling |
| Creator media/content | PROVIDER_VALIDATION_REQUIRED; detail/edge semantics may differ |
| Performance metrics | PROVIDER_VALIDATION_REQUIRED; per-media availability/window semantics required |
| Portfolio | PROVIDER_VALIDATION_REQUIRED and Marketplace opt-in may matter; Creator Portfolio is separate TCS authority |
| Rate card/commercial information | PROVIDER_VALIDATION_REQUIRED; TCS Creator Rate Card is a separate accepted source |
| Stories/Reels/covers/thumbnails/permalinks | PROVIDER_VALIDATION_REQUIRED |
| Messaging | SEPARATE CAPABILITY; discovery permission does not imply messaging |
| Pagination/rate limits/batching | PROVIDER_VALIDATION_REQUIRED |
| Demographic thresholds/top segments/latency | PROVIDER_VALIDATION_REQUIRED; historical numbers are not current authority |

## G4. Graceful degradation requirements

Product invariants already support:

- provider unavailable does not erase existing CampaignCreators;
- provider unavailable does not disable Manual/CSV acquisition;
- partial Creator Intelligence does not equal low Match Potential;
- suppressed demographics are unknown/unavailable, not zero;
- detail enrichment failure may produce a partial candidate only if Product evidence-sufficiency rule permits it;
- rate-limit/pagination exhaustion must report partial/exhausted run coverage rather than pretend the candidate universe was complete;
- stale Evidence remains explicitly stale;
- creator no longer Marketplace-opted-in must not be represented as currently retrievable/provider-current without validation.

## G5. Discovery UI authority

Final UI authority:

```text
compact creator cards
creator identity
Source badge
Match Potential: High / Medium / Low
Recommended because…
View Profile
backend-resolved Outreach CTA when available
Reject/archive non-destructively
```

Filters already frozen:

```text
Search by creator name/Instagram handle
Status: All / Pending Review / Reviewed / Rejected
Source: All / Marketplace / Manual / CSV
```

Do not show numeric AI Match in Discovery.

---

# H. Shared Intelligence / DE / Campaign integration architecture

Recommended current architecture for all three capabilities:

```text
SOURCE OWNERS
Campaign / C03 / C04 / Brand Intelligence / Product Intelligence /
Creator Intelligence / Instagram performance / Commercial owners
        ↓
DE / EVIDENCE
Resource → Capture → Artifact where needed → Evidence → Observation
exact captured/observed times + provenance + coverage/freshness
provider-account + authorization-generation + owner-scope fencing
        ↓
SHARED INTELLIGENCE RUNTIME
processor/contract bundle
execution identity + attempt/retry
explicit input/evidence manifest
deterministic rules/formulas + bounded model evaluation/generation
generation/component generation
Evidence refs
current/candidate/transition/CAS
failure-current preservation
        ↓
CAMPAIGN ACCEPTANCE BOUNDARY
Campaign trigger/request
context/version/replay/staleness validation
accepted result/history/current pointer
        ↓
CAMPAIGN QUERY PROJECTION
strict display-safe DTO
role/capability projection
no raw provider/model internals
        ↓
CAMPAIGN PAGE UI
presentation only
```

Boundary rules:

1. DE acquisition is not Intelligence semantics.
2. Shared Intelligence runtime owns execution lineage and generic mechanics.
3. Campaign owns when/why Recommendation, Applicant Match or Report is requested.
4. Campaign owns acceptance against Campaign/Application context and safe current/history projection.
5. Frontend owns no scoring, ranking, reporting formula or reason generation.
6. Source disconnect/delete must flow from source owner policy; Campaign must not preserve provider data in violation of that policy merely because it was previously used.
7. Valid accepted current may remain visible after transient execution failure only when source-retention policy allows it, with truthful stale/limitation state.
8. Do not add feature-specific processor tables if the accepted Object/generation/current registry can represent the new contracts.

---

# I. Frontend decision matrix

| Feature | Location | Job | Primary hierarchy | Controls | States | Mobile | Unsupported historical claims |
|---|---|---|---|---|---|---|---|
| Reporting | Campaign Attention Layer + Full Report detail | Understand Campaign outcomes | objective outcome → supporting metrics → coverage/freshness → insights → breakdown | View Full Report; date/window only after Product freeze | unavailable, processing, partial, current, stale-preserved, failed-preserved, final | compact summary + detail drill-in | rich charts/ROAS/attribution without source contract |
| Applicant AI Match | Applicants cards + Application detail | Decision support for submitted Application | applicant/application → Product/Brief context → AI Match state/score → strengths/areas/unknowns → Brand decision | Approve/Reject remain domain commands; Match is read-only | PROCESSING, READY, UNAVAILABLE, stale/superseded if frozen later | compact card; detailed sheet | any score in Discovery; AI gating approval |
| Marketplace Recommendation | Discovery cards + creator detail | Source/review creators before application | identity → source → Match Potential → reason → profile/outreach | Discover/refresh policy open; Add Creator/CSV already separate | not ready, Meta disconnected, reconnect, provider unavailable, loading, empty, populated, filtered empty, read error, partial/exhausted to add | single-column cards/filter sheet | numeric Applicant score, universal creator quality, Meta rank as TCS score |

Role/sensitive data rule: score/reasons and commercial detail should be projected only to authorized Brand roles. Exact role matrix must reuse Campaign/C03 role authority rather than invent a new frontend-only policy.

---

# J. Backend logic / validation matrix

| Capability | Canonical trigger | Subject | Output | Deterministic vs model | Current/history | Major unresolved decision |
|---|---|---|---|---|---|---|
| Marketplace Recommendation | explicit Discovery run after Campaign readiness (historical direction; Parent to confirm exact trigger/refresh) | Campaign Recommendation Run + CampaignCreators | ordered candidates, qualitative band/reason, run coverage/provenance | hard filters + comparable normalization deterministic; qualitative fit may use model | versioned run + accepted current/history | rubric, evidence sufficiency, pool/enrichment limits |
| Applicant AI Match | Application submission/Snapshot | Application | state, numeric score when READY, reasons/breakdown, coverage/provenance | hard gates deterministic; qualitative fit may use model | snapshot-bound immutable evaluations + accepted current/supersession | dimensions/weights/min evidence/re-evaluation policy |
| Campaign Reporting | explicit report request/refresh or admitted evidence event | Campaign + calculation window/version | metrics + availability/finality + insights/provenance | metrics deterministic first; interpretation bounded model | immutable calculation history + latest accepted current | eligibility, metrics/formulas/windows/pattern-learning rules |

Required validation for every capability:

- server-resolved Brand/Campaign/Application/Creator ownership;
- tenant isolation;
- exact input manifest/version hash;
- Evidence refs and observation/capture timestamps;
- idempotency/replay;
- stale-write rejection;
- failure-current preservation;
- source deletion/disconnect semantics;
- strict output schema;
- no unknown→zero coercion;
- deterministic fixtures for unavailable/partial/suppressed/stale cases.

---

# K. Contradictions, stale decisions and unsupported UI claims

## K1. Resolved by supersession

1. `Reporting workspace` → SUPERSEDED. Reporting is Campaign-level outside the 3 workspace navigation.
2. `Campaign Fit Strong/Moderate/Weak` → SUPERSEDED by `Match Potential High/Medium/Low` in Discovery.
3. Numeric Discovery AI score → SUPERSEDED for user-facing Discovery. Numeric Applicant AI Match belongs in Applicants.
4. `PULSE / PROOF / PRODUCTION / PUSH` objectives → SUPERSEDED by `AWARENESS / TRUST / ASSETS / ACTION`.
5. Old Collaboration six-stage/global production/publishing assumptions → SUPERSEDED by C04 five execution stages + per-Deliverable production/publishing and post-completion feedback.
6. Meta search order as TCS recommendation rank → PROHIBITED.

## K2. Historical ideas that remain proposals, not authority

- 30/25/20/15/10 Marketplace weighting;
- exact audience/performance/brand subweights;
- arbitrary AI-generated rank per creator without comparable run normalization;
- Reporting charts/ROAS/efficiency not backed by attribution/formula authority;
- creator reliability/trust/risk/quality scores;
- one-result learning;
- payout/ledger semantics inside Campaign Reporting;
- Campaign-private job/telemetry runtime.

## K3. Active authority conflicts

```text
AUTHORITY_CONFLICTS = 0
```

Open decisions remain, but no recovered final Product rule is irreconcilable with accepted donor architecture.

---

# L. Prioritized Parent decision queue

There are **18 open Product decisions**. Provider facts are separately counted and must not be resolved by Product preference.

## L1. BLOCKS_PRODUCT_FREEZE — Reporting

### R-PD-01 — Reporting eligibility / stable evidence threshold

Decision: when may Campaign Reporting move from `INSUFFICIENT_DATA` to an interpretable report?

Options:
1. first published deliverable with usable performance evidence;
2. minimum N published deliverables/collaborations;
3. evidence-based rule by metric family (recommended).

Recommendation: **3**. Allow deterministic facts as soon as valid, but gate cross-content Patterns/Learnings by explicit per-family sample/coverage thresholds.

### R-PD-02 — Objective → KPI/metric authority

Decision: exact primary/supporting metric families for `AWARENESS / TRUST / ASSETS / ACTION`.

Options:
1. one globally fixed metric set;
2. objective-specific primary + shared secondary families (recommended);
3. fully dynamic AI-selected metrics.

Recommendation: **2**. Deterministic Product mapping, never AI-selected metric authority.

### R-PD-03 — Reporting windows, cadence and finality

Decision: V1 windows and live/completed semantics.

Options:
1. one fixed Campaign-to-date window;
2. Campaign-to-date + bounded selectable windows (recommended);
3. arbitrary date-range analytics.

Recommendation: **2**, with finality frozen at Campaign completion plus an explicit late-data policy.

### R-PD-04 — Attribution / efficiency scope

Decision: whether clicks, conversions, ROAS/CPE/efficiency appear in MVP.

Options:
1. include whenever a provider field exists;
2. include only with authoritative attribution + denominator contract (recommended);
3. defer all efficiency/attribution metrics.

Recommendation: **2**, but default unavailable when attribution is not authoritative.

### R-PD-05 — Pattern / Learning threshold

Decision: exact minimum recurrence/coverage/effect-size rules before `Pattern` or `Learning` language is allowed.

Options:
1. model judgment only;
2. deterministic sample/coverage gate + model interpretation (recommended);
3. no Patterns/Learnings in V1.

Recommendation: **2**.

### R-PD-06 — Comparison baseline

Decision: what comparisons are allowed in V1.

Options:
1. creator/content comparisons within the same Campaign only (recommended MVP);
2. same-Campaign + Brand historical Campaign baseline;
3. cross-platform/industry benchmark.

Recommendation: **1** for MVP; add 2 only after relationship/history authority exists.

## L2. BLOCKS_PRODUCT_FREEZE — Applicant AI Match

### A-PD-01 — Numeric scale and rounding

Options:
1. integer 0–100 (recommended; aligns existing consumer contract/UI);
2. 0–10 decimal;
3. qualitative only.

Recommendation: **1**. Discovery remains qualitative; Applicants owns the numeric score.

### A-PD-02 — Match dimensions / weights / objective variants

Options:
1. one universal weighted rubric;
2. shared dimensions with objective-specific versioned weights (recommended);
3. unconstrained model holistic score.

Recommendation: **2**.

### A-PD-03 — Hard gates vs scoring

Decision: which conditions make an Application ineligible/unscorable versus merely influence score.

Options:
1. put all incompatibilities into score;
2. deterministic hard validation for explicit Campaign constraints, score remaining fit (recommended);
3. no hard gates after application.

Recommendation: **2**. Never use missing optional Intelligence as a hard negative.

### A-PD-04 — Evidence sufficiency / confidence

Options:
1. always issue score if any data exists;
2. minimum required evidence + score only when threshold met, otherwise UNAVAILABLE/PARTIAL explanation (recommended);
3. issue low-confidence score always.

Recommendation: **2**.

### A-PD-05 — Explanation contract

Options:
1. free-form paragraph;
2. bounded Strengths + Areas to consider + Unknowns + dimension breakdown (recommended);
3. score only.

Recommendation: **2**.

### A-PD-06 — Re-evaluation / supersession while Pending

Options:
1. never re-evaluate after first accepted Snapshot evaluation;
2. allow explicit rerun against the same immutable Snapshot and a newly versioned admitted creator-evidence manifest; preserve history (recommended);
3. silently recompute whenever dependencies change.

Recommendation: **2**; **3 prohibited**.

## L3. BLOCKS_PRODUCT_FREEZE — Marketplace Recommendation

### M-PD-01 — Initial retrieval and refresh trigger

Options:
1. automatically run immediately when Campaign becomes ready;
2. Brand explicitly starts Discovery; explicit refresh thereafter (recommended);
3. continuous background discovery.

Recommendation: **2** for provider cost/clarity and deterministic run boundaries.

### M-PD-02 — Hard-filter contract

Decision: exact filters that exclude before scoring.

Options:
1. only provider technical eligibility + explicit Campaign non-negotiables (recommended);
2. broad creator-quality filters;
3. score everyone.

Recommendation: **1**. Quality/fit belongs to recommendation, not hidden hard exclusion.

### M-PD-03 — Internal ranking rubric / normalization

Options:
1. freeze historical 30/25/20/15/10 weights;
2. versioned Campaign-context rubric with deterministic normalization and Parent-approved dimensions (recommended);
3. use Meta order.

Recommendation: **2**. Historical weights remain input to discussion, not authority.

### M-PD-04 — Evidence sufficiency / graceful degradation

Options:
1. exclude every candidate missing any dimension;
2. minimum core identity/eligibility + versioned coverage policy; partial candidates may rank only when comparable under that policy (recommended);
3. fill missing values with neutral/zero defaults.

Recommendation: **2**; zero imputation is prohibited unless a specific formula contract explicitly defines it.

### M-PD-05 — Candidate-pool and enrichment budget

Decision: retrieval page limit, admitted candidate cap, detail-enrichment cap and stop/exhaustion semantics.

Options:
1. unbounded until provider exhaustion;
2. bounded configurable run budget with explicit partial/exhausted coverage (recommended);
3. fixed hardcoded small N without coverage semantics.

Recommendation: **2**.

### M-PD-06 — Exclusion / dedupe after retrieval

Decision: treatment of existing CampaignCreator, Applicant, Rejected and active/completed Collaboration identities.

Options:
1. dedupe same identity and retain existing Campaign state, excluding already-current Applicants/Collaborations from new recommendation cards while preserving history (recommended);
2. create new card per provider result;
3. hide all historically seen creators forever.

Recommendation: **1**.

## L4. BLOCKS_IMPLEMENTATION_ONLY / NON-BLOCKING PRODUCT DETAIL

The following should be resolved during contract freeze but need not change the core Product model:

- exact Reporting full-detail route/drawer and export behavior;
- exact role matrix for commercial/reporting sensitive fields using existing Brand role authority;
- exact Marketplace sort controls beyond frozen Search/Status/Source filters;
- algorithm/version label exposure in UI (recommend keep audit metadata available but not clutter primary UI).

These are included within the 18 decision areas above rather than counted as additional Product decisions.

---

# M. Provider validation queue

`PROVIDER_VALIDATIONS_COUNT = 8`

### PV-01 — Current Marketplace access / app / permission authority

Verify current approved app(s), access level and exact permission/product required for Creator Marketplace Discovery. Historical rejection/unavailability is not current truth.

### PV-02 — Search/discovery endpoint contract

Verify exact endpoint(s), filters, pagination, returned list fields, stable provider creator identity and error semantics.

### PV-03 — Detail capability separation

Verify which profile/audience/media/portfolio/rate-card/commercial fields require detail calls or other products, and what is limited to Marketplace opt-in creators.

### PV-04 — Demographic suppression / sample / latency

Revalidate minimum audience thresholds, top-segment limits, suppression semantics and update delays. Historical `100 followers / top 45 / 48h` assumptions must not be encoded without current evidence.

### PV-05 — Pagination, rate limits and batching

Verify provider request accounting, batch limits, page sizes, retry/rate-limit semantics and whether partial-run continuation is supported.

### PV-06 — Media identity and presentation capability

Verify Stories/Reels/IMAGE/CAROUSEL coverage, stable media IDs, permalink/source destination, covers/thumbnails and temporary/signed URL semantics.

### PV-07 — Messaging separation

Verify that Marketplace discovery permission does not imply Marketplace messaging/Instagram DM permissions and identify exact separate capability if later needed by Outreach.

### PV-08 — Deauthorization / disconnect / delete-data / fencing

Verify current deauthorization callback, data-deletion configuration, account-change handling, authorization-generation fencing and what Marketplace-derived cached data/intelligence may be retained after source deletion/disconnect.

No live Meta call or provider mutation was performed.

---

# N. Dependency DAG and implementation sequencing

## N1. Accepted/current producers

```text
Campaign Product / Asset / Brief / objective / audience / commercial truth
Brand Intelligence + Product/Offering Intelligence
C03 Application + immutable ApplicationSnapshot
C04 Collaboration + per-Deliverable production/publishing/completion truth
Brand Instagram Intelligence donor + shared DE/Evidence/runtime
Creator Audience V0
Creator Content V0
Creator Brand V0
Work Preferences V2
Rate Card V2
```

## N2. In-progress / non-authoritative producers

```text
Creator Audience V1 = IN_PROGRESS / NOT YET AUTHORITY
Creator Portfolio V3 = IN_PROGRESS / NOT YET AUTHORITY
```

Do not make them mandatory implementation prerequisites unless their accepted contracts later materially improve the feature. Applicant Match and Marketplace Recommendation must degrade truthfully when optional donors are absent.

## N3. Provider gate

```text
Meta Creator Marketplace current approval/configuration
= hard gate for live Marketplace-sourced discovery
!= hard gate for Manual/CSV Discovery
!= hard gate for Applicant AI Match on already-authorized applicant evidence
!= hard gate for Campaign Reporting
```

## N4. DAG

```text
                 Shared DE / Evidence / Intelligence runtime
                           + owner-scope current/CAS
                                  │
                 ┌────────────────┴────────────────┐
                 │                                 │
       Campaign Intelligence                  source donors
       contract/foundation              Brand/Product/Creator/C04
                 │                                 │
        ┌────────┼───────────────┐                 │
        │        │               │                 │
        ▼        ▼               ▼                 │
 Applicant    Reporting    Marketplace Ranking ◄───┘
 AI Match       │               │
    │           │               └── Meta Marketplace provider gate
    │           │
 C03 Snapshot   └── C04 publishing/performance/tracking evidence
    │
 Applicants

All accepted outputs
        ↓
Campaign acceptance/current/history
        ↓
CampaignQueryService/successor
        ↓
Campaign Page
```

## N5. Recommended future implementation grouping/order

```text
1. SHARED CAMPAIGN INTELLIGENCE FOUNDATION / CONTRACT PACK
   - current-runtime reality check
   - Campaign-Creator Evaluation contract
   - evidence/input manifests
   - evaluation/calculation versioning
   - accepted-result adapters/current-history semantics
   - no feature UI yet

2A. APPLICANT AI MATCH PACKET
   - independent acceptance
   - uses C03 immutable Snapshot
   - can proceed without Marketplace provider

2B. CAMPAIGN REPORTING PACKET
   - independent acceptance
   - uses C04/publishing/performance evidence
   - may run in parallel with 2A after foundation if engineering isolation permits

3. MARKETPLACE RECOMMENDATION PACKET
   - provider-gated
   - execute after PV-01..PV-08 close and Parent freezes ranking/evidence policy

4. CAMPAIGN PAGE CONVERGENCE
   - CampaignQueryService/current successor projections
   - strict frontend rendering
   - full cross-feature runtime/browser acceptance
```

Recommended strategy therefore is **shared Campaign Intelligence foundation followed by independently accepted feature packets, with Marketplace provider-gated and last**. Do not implement all three as one coupled migration/runtime batch.

Media Kit is not a dependency.

---

# O. Future finite implementation outline / acceptance boundaries

Implementation remains prohibited now. After Parent review and Creator Centre completion/convergence:

## O1. Packet CI-0 — current-state convergence and contract freeze

- fresh remote heads/trees;
- inspect current shared runtime after Creator Centre convergence;
- freeze exact object/output/input-manifest contracts;
- freeze Parent Product decisions R/A/M;
- close provider validations required for Marketplace;
- no runtime mutation unless a central prerequisite is separately authorized.

Acceptance: no unresolved BLOCKS_PRODUCT_FREEZE item.

## O2. Packet CI-1 — shared Campaign evaluation/calculation foundation

- register Campaign processor/contracts on shared runtime;
- no parallel DE/current/telemetry system;
- exact context/evidence manifests;
- reusable deterministic evaluation/calculation helpers;
- dry-run fixed-input modes for Applicant, Reporting, Recommendation;
- output validation/versioning/provenance/failure-current preservation.

Acceptance: reproducible dry-runs over fixed Evidence snapshots.

## O3. Packet AI-MATCH

- C03 Snapshot trigger/adapter;
- Applicant Match generation/acceptance/history;
- strict Campaign projection;
- Applicants UI READY/PROCESSING/UNAVAILABLE;
- approval/rejection remains available independent of Match availability.

Acceptance: exact snapshot binding, replay, stale-write rejection, tenant isolation, no frontend calculation.

## O4. Packet REPORTING

- reporting eligibility gate;
- deterministic metric calculations from authoritative inputs;
- immutable calculation history/current;
- bounded insights/pattern-learning only after Product thresholds;
- Campaign performance summary + full report detail;
- no missing→zero and no causal claims without attribution authority.

Acceptance: formula fixtures, coverage/freshness, finality, failure-current preservation, role-sensitive commercial projection.

## O5. Packet MARKETPLACE

- current approved Marketplace connector only;
- provider candidate retrieval + bounded pagination/run budget;
- deterministic hard filters;
- selective enrichment through accepted source/Evidence paths;
- Campaign-Creator evaluations + run normalization/rank;
- qualitative Match Potential + concise reasons;
- Manual/CSV remain independent;
- no provider-order or frontend ranking authority.

Acceptance: provider partial/exhausted/error/opt-out states, dedupe, cross-run reproducibility, no hidden zero imputation.

## O6. Final convergence

- one Campaign Page consumer contract;
- no duplicate intelligence truth;
- responsive/browser/accessibility states;
- C03/C04 regressions;
- source disconnect/delete behavior;
- immutable handoff and normal non-force integration only after acceptance.

---

# P. Explicit non-fabrication and no-implementation statement

Preserve exactly:

```text
DE acquisition != Intelligence semantics
provider payload != Product truth
Meta search order != Marketplace Recommendation Score
Marketplace Recommendation != Applicant AI Match
Applicant AI Match != Brand decision
Collaboration execution != Reporting interpretation
missing/unavailable metric != zero
one post/result != pattern or learning
correlation != causation
inferred likely_collab != canonical Collaboration
frontend projection != calculation authority
```

Every accepted future result must retain or make auditable:

```text
sample size / evidence count where meaningful
coverage / sufficiency
window
captured / observed / evaluated time
source and Evidence lineage
algorithm / formula / processor / contract version
current/stale/finality/readiness state
truthful partial/inconclusive/unavailable limitations
```

Implementation has **not begun** under this recovery assignment.

```text
IMPLEMENTATION_STARTED = NO
BACKEND_CHANGED = NO
FRONTEND_CHANGED = NO
MIGRATIONS_CHANGED = NO
LIVE_META_CALLS = NONE
META_PROVIDER_MUTATIONS = NONE
```

---

# Q. Publication state / required next action

Target publication location remains:

```text
repository = Piyush1087/dummy_tcs
preferred branch = existing Campaign Page authority branch if current fetch proves one
fallback branch = program/campaign-page-deferred-intelligence-decisions-v1
path = docs/ai-collaboration/campaign-page/CAMPAIGN_PAGE_REPORTING_AI_MATCH_MARKETPLACE_RECOMMENDATION_PRODUCT_DECISION_RECOVERY_V1.md
```

Because Git remote access is unavailable in this Systems Architect session, no branch selection, ledger update, commit, push or fetch-back equality can be truthfully claimed.

Required recovery action is operational only:

1. use an authorized Local Codex/Git environment;
2. `git fetch --all --prune` for `dummy_tcs`, backend and frontend;
3. verify current Campaign/Intelligence/C03/C04/Creator Centre heads and ancestry;
4. classify Audience V1/Portfolio by their actual accepted state at that moment;
5. verify the exact current Campaign consumer schemas (`publishApplicantIntelligenceInputSchema`, `publishCampaignReportCalculationInputSchema`, `publishCreatorRecommendationInputSchema`) and current CampaignQueryService successor;
6. if no material contradiction appears, change artifact status from `CURRENT_STATE_BLOCKED` to `READY_FOR_PARENT_PRODUCT_REVIEW`;
7. publish this artifact on the established Campaign Page authority branch, else the fallback branch;
8. update only the existing Campaign Page authority ledger if one is found;
9. normal non-force push + fetch-back SHA/tree equality;
10. return to Parent for the 18 Product decisions and 8 provider validations.

No Product register may be declared frozen before Parent review.
