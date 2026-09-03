# C-03 Product Contract Revalidation V1

**Artifact:** `C03_PRODUCT_CONTRACT_REVALIDATION_V1`
**Module:** C-03 — Creator Campaign Participation / Apply
**Status:** READY FOR PARENT ACCEPTANCE
**Product authority:** `docs/organization/product_decisions/c03_creator_campaign_participation_product_decision_register_v1.md`
**Authority repository/base:** `Piyush1087/dummy_tcs@81947647e550e5bbb93664bd9684e883d4e1472c`

## 1. Revalidation verdict

```text
C03_PRODUCT_LOGIC = FROZEN
PRODUCT_REOPEN_REQUIRED = NO
PRODUCT_CONTRADICTION = NONE
```

The frozen Product register is complete enough to produce one coherent C-03 architecture. This artifact records its consumption; it does not amend or reinterpret Product behavior.

## 2. Authority and reference separation

```text
CANONICAL_IMPLEMENTATION_BASE

backend
development@4c5f42858b950b7cd342f8972f99f548f3daa942

frontend
development@323658d4b147b95b5629ff8d91fa90b8fe9077e4
```

```text
PRIMARY_LEGACY_REFERENCE

backend
feature/c01-c05-creator-integration@dc1c9ac97ff26833451db7cefb357689d9415e27

frontend
feature/c01-c05-creator-integration@314c90e2c18f99f87d0732b759fed837e90e1cdd
```

The newer feature line is the most recent materially complete legacy Creator Campaign/Apply UX and behavior reference. It is not implementation authority, must not be merged wholesale, and must not reintroduce its C-01/C-05 regressions. Earlier Creator Campaign implementations are `LEARNING_REFERENCE_ONLY`.

## 3. Revalidated Product invariants

| Area | Frozen result |
|---|---|
| Opportunity surface | The Campaign Opportunity Page is the complete opportunity-understanding surface. |
| Apply surface | Apply is limited to necessary Asset/Brief selection, review, and explicit submission. |
| Information architecture | `Campaigns → Opportunities` and `Campaigns → My Applications`; this is not Marketplace. |
| Domain chain | `Campaign → Campaign Asset → Brief → Deliverable(s)`. Product is not the universal Asset type. |
| Visibility | `PUBLIC`, `ELIGIBLE_CREATORS_ONLY`, `INVITE_ONLY`. |
| Commercial secrecy | Exact commercials require authenticated Creator subject + usable canonical Instagram + visibility entitlement. |
| Eligibility | `ELIGIBLE_CREATORS_ONLY` requires backend-confirmed eligibility. Selection likelihood is not authorization. |
| Invitations | A valid invitation may bypass ordinary targeting eligibility, but not identity, Instagram, lifecycle, limits, or security. Forwarding a link does not transfer authority. |
| Historical access | A legitimate Application's immutable commercial snapshot remains available to the currently authorized Creator subject/team after Instagram recovery becomes necessary. |
| Campaign content | The Page explains Brand, purpose, timing, platform, Assets, Briefs, Deliverables, rights, support, commercials when authorized, and Application state. |
| External links | Canonical Brand/Offering destinations may open while preserving Campaign context. |
| Media | Use relevant Asset/Offering media; otherwise use an intentional solid-fill state. Do not stretch a low-resolution Brand logo into hero media. |
| Commercial model | FIXED and NEGOTIABLE are Campaign context. C-03 collects no NEGOTIABLE Creator proposal. |
| Negotiation boundary | The Creator's first C-04 Negotiation action supplies the proposed amount after Brand acceptance. |
| Inventory | Public Product/Offering stock never gates Apply. |
| Cardinality | One Application selects one Campaign Asset and one Brief. Multiple Applications per Campaign are permitted within quotas. |
| Quotas | Creator × Campaign ≤ 2 non-WITHDRAWN Applications; Creator × Brand ≤ 5 non-WITHDRAWN Applications. |
| Quota statuses | PENDING, APPROVED, REJECTED, EXPIRED, SUPERSEDED consume quota; WITHDRAWN does not. |
| Same opportunity | Reapply blocked after PENDING/APPROVED/REJECTED/SUPERSEDED; a new row may be allowed after WITHDRAWN/EXPIRED. |
| Collaboration cardinality | Each approved Application creates at most one Collaboration. Distinct approved Applications may create distinct Collaborations. |
| Siblings | Approval does not automatically supersede unrelated sibling Applications. |
| Team permissions | OWNER, MANAGER, and ASSISTANT each receive VIEW + APPLY on the canonical Owner Creator subject. |
| Actor audit | Record `actorUserId`, `actorMembershipId`, `actorRole`, and `subjectCreatorProfileId` separately. |
| Submission | Backend-authoritative, idempotent/replay-safe, and revalidated at the command boundary. |
| After submit | Stay on the Opportunity Page and show each Application independently with contextual actions. |
| History | Historical Applications remain visible in My Applications. |
| Brief Pack | Every submitted Application receives an on-demand, snapshot-based Creator Brief Pack with historical access. |
| Notifications | Application submitted/approved/rejected/withdrawn/expired events are required. Creator approval/rejection output is mandatory; delivery channel may remain bounded debt. |
| C-01 continuation | Guest Apply survives authentication and Instagram connection, returns to the same Campaign, and never auto-submits. |
| Attribution | Preserve qualified ingress and conversion touch with allowlisted UTM/context; never persist raw invitation token as provenance. Analytics failure never blocks Apply. |
| Deadline | Display only an explicit backend-authoritative Application deadline. Do not derive it from Campaign publishing end. |
| Detailed Brief privacy | Unknown URL possession does not unlock detailed Brief or commercials. |
| Out of scope | Marketplace discovery/ranking, C-04 negotiation implementation, fulfillment, settlement, payout/KYC, Creator Centre content, new Intelligence, inventory automation, AWS, and production mutation. |

## 4. Parent corrections incorporated

1. Canonical implementation base and primary legacy reference are separate concepts.
2. Owner, Manager, and Assistant share C-03 VIEW + APPLY capability over the canonical Owner subject.
3. Stitch is not needed to freeze architecture, but a bounded UI/UX + Stitch checkpoint is expected before frontend reconciliation for materially new C-03 screen families.
4. Execution readiness is a hybrid topology property; it does not require the persistent ChatGPT Work environment itself to host PostgreSQL, Docker, or Playwright.

## 5. Product questions

```text
PRODUCT_QUESTIONS = NONE
```

Any remaining decisions are system design, migration, implementation sequencing, or environment matters and are frozen in the accompanying Stage B artifacts.
