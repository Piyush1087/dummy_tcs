# Collaboration Counterpart Context — Future Enhancements / V2 Requirements

**Status:** FUTURE ENHANCEMENT / V2 REQUIREMENT  
**Module:** Collaboration  
**Scope:** Brand-side counterpart context, Collaboration history/context, Creator intelligence context  
**Current-phase impact:** NONE, except the implementation-only link reuse described in Section 2  
**Created from:** Collaboration G2/Stitch review, 18 August 2026

---

## 1. Decision for the current Collaboration release

The current Collaboration UX/IA remains materially unchanged.

The accepted Collaboration flow, lightweight counterpart-context surface, Inbox | Chat | Execution desktop model, mobile Inbox → Chat → Execution model, five execution stages, capability-authorized actions, and all existing Phase G domain/runtime boundaries remain authoritative.

The richer counterpart/profile experience described later in this document is **not part of the current Stitch reconciliation** and must not be introduced opportunistically during current frontend reconciliation.

No additional Stitch screen is required for the current release to represent the future enhancements in this document.

---

## 2. Current-release implementation-only enhancement: reuse existing Campaign drawers

During final Collaboration frontend reconciliation, the visible Campaign context should become navigable without creating duplicate detail UI inside Collaboration.

Where the Collaboration context exposes the relevant canonical references, make the following labels/actions clickable:

1. **Campaign name** → open the already-defined Campaign view/details drawer.
2. **Campaign Asset / Product name** → open the already-defined view Campaign Asset / Product drawer.
3. **Campaign Brief name** → open the already-defined view Brief drawer.

### Implementation rule

Reuse the existing Campaign-module drawer components and their canonical data-loading/ownership behavior. Do not recreate those drawers inside Collaboration and do not create new Stitch references for them.

The current Campaign frontend reconciliation reference supplied for this reuse is:

- Repository: `Piyush1087/creator-commerce-frontend-v2-clone`
- Branch: `development`
- Commit: `1987b30de56891a4f7f95758bddd27f4dbb2d868`
- Commit title: `feat(campaigns): reconcile canonical Campaign Page`

Codex must verify the exact current component names, entry points, required identifiers, and drawer props at implementation time rather than guessing them from this document.

### Feasibility

**Expected effort: Low to Medium**, assuming the Collaboration read model already exposes or can resolve the canonical Campaign, Campaign Asset, and Brief identifiers needed by the existing Campaign drawer contracts.

If only display labels are currently available, implementation may require a bounded read-model/DTO addition for the canonical IDs. That should still reuse existing entity/read contracts rather than create a second Collaboration-owned representation of Campaign data.

---

# 3. V2 product objective

In a future release, the counterpart-context surface may become a richer operational/contextual workspace that helps the Brand answer two different questions:

1. **What is the context and history of this Collaboration?**
2. **Who is this Creator, and what relevant evidence did we have when the Collaboration began?**

The proposed future surface uses two top-level tabs:

```text
Collaboration | Creator
```

The tabs deliberately separate Collaboration-owned context/history from Creator/Application intelligence. They must not create a competing operational command surface to the Execution Hub.

---

# 4. V2 Tab A — Collaboration

## 4.1 Section A — Campaign context

Show:

- Campaign name;
- Campaign Asset / Product name;
- Campaign Brief name.

Each remains clickable and reuses the owning Campaign-module drawer:

```text
Campaign → existing View Campaign drawer
Campaign Asset / Product → existing View Campaign Asset / Product drawer
Brief → existing View Brief drawer
```

### Product principle

Collaboration consumes these entities as context. It does not own duplicate Campaign/Product/Brief detail models.

### Engineering assessment

**Expected effort: Low to Medium.**

Primary dependency is availability of stable canonical IDs/references in the Collaboration read model and compatible entry props in the existing Campaign drawer components.

No new domain contract should be introduced if existing Campaign read contracts can serve the interaction.

---

## 4.2 Section B — Collaboration timeline / historical journey

### User recommendation

Show the five Collaboration execution stages in a timeline visually related to the stage presentation in the Execution Hub.

Each stage can be expanded to reveal the historical events associated with that stage.

Representative future concept:

```text
Negotiation
  Creator proposed ₹18,000
  Brand countered ₹16,500
  Creator accepted

Securement
  Funding requirement confirmed
  Securement completed

Fulfillment
  Product dispatched
  Creator confirmed receipt

Production
  Reel v1 submitted
  Revision requested
  Reel v2 submitted
  Approved

Publishing
  Publishing authorized
  Evidence submitted
  Verified
```

The actual event set must be derived from canonical backend authority; the examples above are illustrative only and must not become an event taxonomy by themselves.

### Critical UX feedback

A full timeline is valuable, but it risks duplicating the Execution Hub.

The future ownership boundary should therefore be:

- **Execution Hub:** current operational state, current evidence, current/next actor, and currently authorized actions.
- **Collaboration timeline:** read-only historical/audit view of what happened previously.

The timeline must not become a second place for Accept, Counter, Submit, Approve, Authorize, Verify, Cancel, or other Collaboration commands.

### Engineering assessment

**Expected effort: High unless an authoritative cross-stage event history already exists.**

A reliable expandable timeline may require a new or formalized backend history contract, for example an equivalent of:

```text
CollaborationTimelineEvent
- stable event identity
- Collaboration identity
- execution stage
- event type
- actor / source
- occurredAt
- safe presentation payload / references
```

Potential work includes:

- event persistence or projection;
- canonical event taxonomy;
- actor attribution;
- chronological ordering;
- stage grouping;
- safe presentation payloads;
- compatibility behavior for older Collaborations;
- migrations/backfill where historical data was not previously persisted;
- API/DTO contract;
- frontend grouping and expansion behavior.

### V2 gate

Before designing this timeline in Stitch, engineering must audit whether the backend already owns enough event/history information to provide an authoritative read model. If not, freeze the event/history contract before visual generation.

---

# 5. V2 Tab B — Creator

The Creator tab provides relevant counterpart context. It must not silently turn Collaboration into Creator Centre, Applicant review, CRM, or analytics.

## 5.1 Section A — Creator profile snapshot

Proposed content:

- profile image;
- creator display name;
- Instagram handle;
- follower count;
- engagement rate.

### Critical product feedback

Follower count and engagement rate should clearly communicate their temporal/source semantics.

Preferred future behavior is to use the **application-time/profile snapshot** that informed the original Campaign decision, where that snapshot is canonical and retained. This avoids presenting stale historical selection evidence as live Creator performance.

Example label intent:

```text
Creator snapshot at application
```

Do not silently fetch/recalculate a live metric simply because a newer value is available elsewhere.

### Engineering assessment

- identity/image/name/handle: **Low effort** if already in Collaboration/counterpart projection;
- followers/engagement rate: **Low to Medium** if retained in an accessible Application/profile snapshot;
- otherwise may require an additional read dependency or DTO projection.

---

## 5.2 Section B — AI Match at application

### User recommendation

Show the Campaign-specific AI Match information that informed the application decision, including where canonically stored:

- Match score;
- recommendation / disposition;
- concise recommendation reason;
- other bounded explanation fields owned by the AI Match output contract.

### Critical product feedback

The Collaboration surface must **not recalculate AI Match**.

The architecture should be:

```text
Collaboration
  → source Application / retained decision context
    → stored canonical AI Match output
```

not:

```text
Collaboration
  → new AI Match calculation
```

The UI should label the information explicitly as historical selection evidence, for example:

```text
AI Match at application
```

or equivalent approved copy.

This prevents users from interpreting a pre-collaboration Match score as current Collaboration health or performance.

### Engineering assessment

**Expected effort: Medium** if:

- Collaboration can resolve its source Application;
- the Application retains/references the canonical AI Match output;
- authorization permits the Brand to read that stored output.

If those relationships are not exposed by the current read models, a bounded API/read-model addition may be required.

No new AI calculation/output contract should be created merely for the Collaboration drawer.

---

## 5.3 Section C — Application / Collaboration relationship history

### User recommendation

Show a list of the Creator's relevant prior Applications and Collaborations with the Brand, allowing the Brand to understand previous relationship context.

Potential entries may include, where authoritative and permitted:

- prior Campaign/Application;
- outcome/status;
- prior Collaboration;
- completion/terminal state;
- relevant dates.

### Critical product feedback

This can be highly useful, but it is also the most likely part of the Creator tab to require a new relationship-history read model.

The UI must not infer history from partial frontend caches or stitch together unrelated endpoints without a canonical ownership decision.

It also requires explicit answers to:

- Brand/organization scope of history;
- which Application outcomes are visible;
- whether terminal/cancelled Collaborations are included;
- whether commercial values are visible;
- whether dispute/settlement signals belong here;
- retention and privacy rules;
- compatibility behavior for old records.

### Engineering assessment

**Expected effort: High unless a relationship-history endpoint/read model already exists.**

Likely requirements include:

- cross-Campaign Application query;
- cross-Campaign Collaboration query;
- Brand/organization ownership filtering;
- normalized list DTO;
- pagination/limits;
- permission rules;
- deterministic ordering;
- potentially a dedicated aggregator/read model.

This feature should remain V2 until the owning data contract is explicitly frozen.

---

# 6. V2 timestamp and temporal-presentation recommendation

Future history/event surfaces should normalize timestamp presentation by semantic use rather than apply one global `time ago` rule.

Recommended presentation contract:

### Chat messages

Use conversational clock/date context:

```text
same day       → 4:45 PM
yesterday      → Yesterday, 4:45 PM
older          → 14 Aug, 4:45 PM
full detail    → 14 Aug 2026, 4:45 PM where expanded/hovered if useful
```

### Operational activity/history

Relative time may improve scanning:

```text
Submitted 4h ago
Revision requested 2d ago
```

while the full absolute timestamp remains available in detailed history where needed.

### Deadline/SLA

Use future-relative urgency only when an authoritative deadline exists:

```text
Due in 6h
```

Do not derive or fabricate an SLA deadline merely from stage age.

### Engineering assessment

**Expected effort: Low** when authoritative timestamps already exist. New backend work is required only where the required source timestamp/deadline is absent.

---

# 7. Dense Execution Hub — future design consideration

### User concern

The compact Negotiation treatment may not naturally scale to information-dense stages such as Production, where several Deliverables can simultaneously have submissions, revisions, approvals, versions, evidence, and different current actors.

### Critical UX assessment

The persistent Execution Hub should not continually grow wider or attempt to contain the complete complex workflow for every action.

A future robust pattern should keep its role stable:

```text
Stage progress
→ active-stage summary
→ compact per-Deliverable operational units
→ current/next actor + current action
→ larger action/detail surface where the task requires more space
```

Example Production summary:

```text
Production
3 Deliverables
1 awaiting review · 1 revision requested · 1 awaiting submission
```

Each Deliverable can remain a compact unit in the Hub, while a content-heavy task such as reviewing a submitted asset/version may open an appropriate larger drawer/sheet/modal/detail surface owned by the Production workflow.

### Important boundary

This is a **future design/implementation consideration**, not authority to change the accepted current Collaboration IA during the present Stitch run.

### Engineering assessment

- stage summaries and compact cards: **Low to Medium** if current DTOs already expose per-Deliverable projections;
- richer review surfaces: **Medium** if submission/version/revision APIs already exist;
- new backend work is required only where the underlying evidence/history/action contract is incomplete.

---

# 8. Messaging-composer future consideration

For the current MVP, do not assume generic chat attachments or a custom emoji picker unless messaging contracts explicitly support them.

Operational uploads should remain owned by their domain surfaces (for example Fulfillment evidence, Production submissions, Publishing evidence) rather than be casually duplicated into Chat.

Future generic messaging attachments require their own storage, upload, security, retention, MIME/file-size, authorization, and message-payload contracts.

---

# 9. Feasibility summary

| Enhancement | Product value | Expected implementation effort | Likely new backend contract? |
|---|---|---:|---|
| Link Campaign/Asset/Brief to existing Campaign drawers | High | Low–Medium | Usually no; maybe IDs/read projection |
| Creator identity in richer context | High | Low | No if already projected |
| Application-time followers/ER | Medium–High | Low–Medium | Maybe read projection |
| Stored AI Match at application | High | Medium | Maybe read projection; no new AI calculation |
| Read-only five-stage journey overview | High | Low–Medium | Usually no if stage projection exists |
| Expandable stage event timeline | High | High | Likely, unless event history already canonical |
| Prior Application/Collaboration history | Medium–High | High | Likely relationship-history/aggregator contract |
| Timestamp normalization | Medium | Low | No if source timestamps exist |
| Dense-stage summary in Execution | High | Low–Medium | Usually no if Deliverable projections exist |
| Generic chat attachments | Optional | Medium–High | Yes unless messaging attachment contract exists |

---

# 10. Required engineering audit before V2 design begins

Before any V2 Stitch generation, answer from the accepted frontend/backend:

1. Does Collaboration expose canonical Campaign ID, Campaign Asset ID and Brief ID?
2. Can the existing Campaign drawers be invoked externally with those identifiers without duplicating Campaign state?
3. Is the source Application ID retained/resolvable for canonical Collaborations?
4. Are creator application-time profile metrics retained and readable?
5. Is the canonical AI Match output retained and queryable from the source Application?
6. Is there already a complete or partial Collaboration event/history projection?
7. Are stage-specific histories persisted consistently enough to build one read-only timeline?
8. Does a Brand↔Creator relationship-history endpoint/read model already exist?
9. What authorization/organization boundaries apply to historical Applications and Collaborations?
10. Which old/compatibility-limited Collaborations cannot provide these data?

The audit should classify every desired field as:

```text
A. existing DTO/API — direct reuse
B. existing backend data — bounded projection/API addition
C. absent — new domain/data contract required
D. deferred / not authorized
```

Only A/B items should normally proceed directly into V2 visual design. C items require product/backend authority first.

---

# 11. V2 design gate

Do not begin the richer two-tab Stitch design until:

- current Collaboration reconciliation is complete;
- data ownership is audited;
- any required history/relationship contracts are frozen;
- AI Match is confirmed as stored historical evidence rather than recalculated output;
- the boundary between Execution Hub commands and Timeline history is explicit.

Then create a dedicated V2 Stitch contract rather than retroactively modifying the accepted current Collaboration references.

---

# 12. Freeze statement

> **Current Collaboration remains materially unchanged. During final frontend reconciliation, Campaign, Campaign Asset/Product and Campaign Brief context should reuse the already-defined Campaign-module view drawers through canonical entity references, without new Stitch screens or duplicate detail UI. A future V2 may expand counterpart context into two distinct tabs — Collaboration and Creator. The Collaboration tab may provide linked Campaign context plus a read-only expandable historical timeline; the Creator tab may provide an application-time profile snapshot, stored AI Match evidence, and Brand–Creator Application/Collaboration history. The historical timeline must not compete with the Execution Hub for command authority. AI Match must not be recalculated by Collaboration. Full timeline and relationship-history features proceed only after an engineering audit determines whether existing data/read models are sufficient or new backend contracts are required.**
