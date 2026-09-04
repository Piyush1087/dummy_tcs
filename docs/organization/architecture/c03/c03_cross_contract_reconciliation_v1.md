# C-03 Cross-Contract Reconciliation V1

**Artifact:** `C03_CROSS_CONTRACT_RECONCILIATION_V1`
**Module:** C-03 — Creator Campaign Participation / Apply
**Status:** ACCEPTED
**Companion authority:** `c03_product_contract_revalidation_v1.md`

## 1. Effective authority order

1. Frozen C-03 Product Decision Register and explicit Parent Stage B corrections.
2. Frozen Brand/shared Campaign, Campaign Asset, Add Brief, and Applicants authority, except where C-03 explicitly supersedes the handoff/cardinality boundary.
3. Accepted C-01 Creator Entry/auth/continuation authority.
4. Accepted C-05 Creator subject/team/Instagram/shell authority.
5. Collaboration authority, subject to C-03's explicit multiple-handoff and NEGOTIABLE reconciliations.
6. Canonical implementation bases.
7. Primary legacy reference, then older learning references.

No legacy code or working-schema comment may override a later frozen Product decision.

## 2. Reconciliation ledger

| ID | Sources in tension | Effective C-03 rule | Required downstream action | Status |
|---|---|---|---|---|
| CCR-01 | Older Applicants contracts and `backend/campaign_schema.prisma` comments require sibling supersession and one CampaignCreator Collaboration; C-03 permits multiple approved Applications/Collaborations. | Approval affects only the selected Application. Each Application can source at most one Collaboration. Siblings remain independently actionable. | Replace Campaign+Creator Collaboration uniqueness with Application-source uniqueness; retain `SUPERSEDED` for historical/otherwise legitimate rows but do not generate it on ordinary approval. | RESOLVED_FOR_C03 |
| CCR-02 | Older Applicants language alternates between Product × Brief and CampaignAsset/Product × Brief. | Same-opportunity identity is canonical Creator subject × Campaign × Campaign Asset × Brief. | Migrate new C-03 writes to canonical Asset and canonical Brief FKs; validate common ancestry. | RESOLVED_FOR_C03 |
| CCR-03 | Older Collaboration assumes an Application may contain the Creator's initial NEGOTIABLE proposal. | C-03 stores no Creator proposal. C-04 captures it in the first Negotiation action. | Application/approval must not set `initialQuote` from a Campaign max/min/default. | RESOLVED_FOR_C03 |
| CCR-04 | Product visibility values are PUBLIC/ELIGIBLE_CREATORS_ONLY/INVITE_ONLY; production persistence uses EVERYONE/ELIGIBLE_ONLY/INVITED_ONLY and an obsolete `applicationScope`. | One semantic visibility value governs access. Persistence aliases are mapped internally; `applicationScope` is not C-03 authority. | Normalize DTO/policy vocabulary and plan additive persistence convergence. | RESOLVED_FOR_C03 |
| CCR-05 | Shared Campaign working schema has singular visibility and richer commercial/support values; production Prisma has arrays, old fee fields, default zeros, and 30/70 assumptions. | C-03 consumes canonical Campaign semantics. Missing and explicit zero remain distinct; Campaign currency differs from Offering price currency. | Provide one canonical read adapter during migration; snapshot typed commercial/support values. | RESOLVED_FOR_C03 |
| CCR-06 | Add Brief authority defines DRAFT/PUBLISHED/PAUSED, rich Deliverables and usage rights; production `CanonicalCampaignBrief` uses minimal fields and `isActive`. | C-03 can apply only to a PUBLISHED canonical Brief under the selected ACTIVE Asset. | Converge Brief persistence/projection before accepting C-03 writes. | RESOLVED_FOR_C03 |
| CCR-07 | C-01 continuation is campaign-bound and secure, but current issuance resolves through a public Marketplace path only. | Preserve the C-01 digest/cookie/binding lifecycle while extending its typed context for public, eligible, and invitation ingress. | Add safe invitation reference, optional preselection, and allowlisted attribution; never add arbitrary return URLs or auto-submit. | RESOLVED_FOR_C03 |
| CCR-08 | C-01/C-05 platform access correctly gates new Creator operations; C-03 keeps historical Application snapshots accessible after Instagram recovery. | Opportunity commercials/Apply require current Instagram usability. Historical Application/Brief Pack reads require current subject/team authorization but not Instagram usability. | Split route/policy gates; do not wrap My Applications in the pre-application platform guard. | RESOLVED_FOR_C03 |
| CCR-09 | C-05 owns Settings role capabilities but not Campaign actions. C-03 explicitly authorizes Assistant VIEW + APPLY without granting full Campaign operational authority. | OWNER, MANAGER, ASSISTANT each receive C-03 VIEW + APPLY over the Owner subject. WITHDRAW_PENDING is a separate capability granted only to OWNER and MANAGER, and only while the Application is PENDING. Actor remains separate from subject. | Add distinct C-03 VIEW, APPLY, and WITHDRAW_PENDING actions to the shared capability projection or a C-03 policy layered over canonical actor context. Never infer withdrawal from APPLY. | RESOLVED_FOR_C03 |
| CCR-10 | Current eligibility service uses partial cached metrics and QA email bypass; Product requires backend-confirmed eligibility. | A provider-neutral backend policy evaluates canonical Campaign targeting against canonical Creator facts. Intelligence/selection scores are never authorization. | Build an explicit eligibility port/result and remove production bypass behavior. | RESOLVED_FOR_C03 |
| CCR-11 | Legacy invitation is plaintext and handle-bound inside `UceCampaignCollaboration`; Product requires non-transferable invitation authority. | Invitation is a pre-Application security aggregate with digest, Campaign binding, intended-subject evidence, expiry, revocation, and claim/audit state. | Introduce canonical invitation persistence; quarantine legacy tokens. | RESOLVED_FOR_C03 |
| CCR-12 | Existing Creator Apply creates a legacy Collaboration and may delete/reuse rejected applicant state. | Submit creates a new canonical Application plus immutable snapshot and domain event only. | Retire legacy mutation endpoints at cutover; never reactivate/delete historical Applications. | RESOLVED_FOR_C03 |
| CCR-13 | Legacy stock fields and approval decrement public inventory. | Stock is neither Opportunity entitlement nor Application/approval authority. | Remove stock predicates and inventory mutation from C-03. | RESOLVED_FOR_C03 |
| CCR-14 | Existing notification persistence is Brand-workspace-oriented; C-03 mandates Creator approval/rejection outputs. | Application domain events are transactional; delivery is asynchronous. Creator recipient projection may extend Notifications without blocking the Application transaction. | Add event/outbox records and Creator recipient/deep-link support. | RESOLVED_FOR_C03 |
| CCR-15 | Current route-wide Creator platform guard blocks all Campaign pages during Instagram recovery. | Opportunities/Apply and historical Applications use different predicates inside one Campaigns destination. | Refactor route guards and API authorization accordingly. | RESOLVED_FOR_C03 |
| CCR-16 | Current share/click and C-01 continuation models do not form a complete attribution chain. | Preserve first qualified touch and submission touch using allowlisted typed context; raw invitation tokens are excluded. | Introduce safe ingress reference and snapshot conversion context; analytics processing remains non-blocking. | RESOLVED_FOR_C03 |
| CCR-17 | Legacy Campaign dates are available but Product allows an Application deadline only if separately authoritative. | `applicationDeadline` is optional. `applicationsOpen`, `canApply`, and blocked reason are backend semantic results. | Do not derive or render a deadline from `publishUntil`. | RESOLVED_FOR_C03 |
| CCR-18 | Brand Campaign page may use Brand-logo fallback for link previews; C-03 forbids stretching a low-resolution logo into Campaign hero media. | Creator Opportunity hero uses relevant Asset/Offering media or an intentional no-image fill. Brand identity logo remains a small identity mark. | Separate identity-logo and hero-media projection fields. | RESOLVED_FOR_C03 |
| CCR-19 | Discovery CampaignCreator review state can exist before Application; Product says independent qualification/invitation can authorize Apply. | Discovery is acquisition/context only. `REVIEWED` is not an Apply prerequisite; `REJECTED` is not a universal deny. | Eligibility and invitation policies remain independent of Discovery review state. | RESOLVED_FOR_C03 |
| CCR-20 | C-03 needs an Application Brief Pack; C-04 later needs a Collaboration Brief. | C-03 document = what the Creator applied to, from Application snapshot. C-04 document = what parties agreed to execute, from Collaboration snapshot. | Use separate projections while sharing low-level rendering primitives if useful. | RESOLVED_FOR_C03 |

## 3. Canonical lifecycle reconciliation

### Application

```text
PENDING
├── APPROVED
├── REJECTED
├── WITHDRAWN
├── EXPIRED
└── SUPERSEDED  # retained, but not produced by ordinary sibling approval
```

Only `PENDING` transitions. Transition competition is serialized so exactly one valid terminal outcome commits.

### Campaign, Asset, and Brief at Submit

New submission requires:

```text
Campaign applicationsOpen
+ Campaign visibility entitlement
+ ACTIVE Campaign Asset
+ PUBLISHED Brief
+ Brief.campaignAssetId == selected Campaign Asset
+ current Actor/Subject authority
+ usable Instagram
+ duplicate and quota authority
```

Campaign pause/completion/closure, Asset pause, Brief pause/removal, Instagram revocation, invitation invalidation, or eligibility loss after page load must block the new submission. Existing Application history remains intact.

## 4. Cross-module ownership

| Module | Owns | Does not own |
|---|---|---|
| Brand/shared Campaign | Campaign, Asset references, Briefs, Deliverables, rights, targeting, commercials, lifecycle/readiness | Creator team identity, Applications, Collaboration execution |
| C-01 | Authentication, Creator entry, secure continuation lifecycle | Application creation or visibility policy |
| C-05 | Canonical Creator subject, team actor/membership, Instagram capability, shell | C-03 Apply/eligibility policy |
| C-03 | Opportunity projection/redaction, invitation validation, Application lifecycle, snapshot/history, attribution conversion, Application events, Brief Pack | Marketplace discovery, post-approval workflow |
| Applicants/Brand Campaign | Brand-side Application listing and terminal decisions | Creator identity invention or sibling collapse |
| C-04 Collaboration | Post-approval negotiation/execution and Collaboration snapshot | Application proposal collection or C-03 Brief Pack |
| Notifications | Recipient/channel delivery from durable events | Application transaction authority |
| Intelligence/Discovery | Advisory scores, recommendations, acquisition context | Visibility entitlement or lifecycle decisions |

## 5. Legacy authority rule

The primary legacy reference may inform information density, responsive transformation, and interaction rhythm. The following are explicitly non-transferable: Marketplace discovery, recommendations/cross-sell, match-score authorization, Product-only selection, stock gating, handle identity, applicant-as-Collaboration, 30/70 escrow language, proposed fee capture, automatic sibling supersession, and `already_applied` multiplicity collapse.

## 6. Reconciliation verdict

```text
UNRESOLVED_PRODUCT_CONFLICTS = 0
UNRESOLVED_CROSS_CONTRACT_BLOCKERS = 0
C03_CROSS_CONTRACT_RECONCILIATION = ACCEPTED
```
