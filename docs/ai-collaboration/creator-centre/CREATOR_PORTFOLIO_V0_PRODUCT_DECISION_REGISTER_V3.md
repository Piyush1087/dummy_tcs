# Creator Centre — Portfolio V0 Product Decision Register V3

Date: 2026-09-15  
Status: **PRODUCT_FROZEN_FOR_V0**  
Supersedes: `CREATOR_PORTFOLIO_V0_PRODUCT_DECISION_REGISTER_V2.md` at commit `ea1c50717a6f6aabff1bc6192f4f7107ad820285`  
Implementation: **NOT_AUTHORIZED_BY_THIS DOCUMENT ALONE**

---

## 0. Authority and working method

This register is the frozen Product authority for Creator Portfolio V0.

Product decisions are discussed inline and enter this register only after explicit approval. Questionnaire-style choices from earlier discussion are not authority where they conflict with this register.

This register freezes Product behavior. Technical preflight may determine implementation mechanics inside these boundaries, but may not reopen or silently reinterpret them.

---

## 1. V3 decision delta

Portfolio V3 replaces the project-based model in V2 with an individual-work-item model.

Frozen changes:

1. Instagram Intelligence is the primary discovery and population source for possible collaboration work.
2. Completed Creator Shop Collaboration evidence remains a stronger verification source when it matches an item, and can add UGC work that has no Creator-published Instagram media.
3. The Portfolio unit is an individual post, Reel, carousel, Story or external/UGC work reference. Portfolio projects are out of MVP.
4. The Creator may remove any shortlisted, Creator Shop-derived or Creator-added item from Portfolio.
5. Instagram-sourced and Creator Shop-verified facts cannot be manually rewritten by the Creator.
6. Portfolio does not host an internal media preview. The media image or thumbnail opens the source destination.
7. Manual media upload is excluded. External and UGC work use links.
8. Media Kit PDF download behavior is not frozen here; it belongs to Media Kit Product authority.

Where V2 conflicts with these decisions, V3 governs.

---

## 2. Product purpose

Portfolio is the Creator’s curated proof of commercially relevant work.

It combines:

- evidence-bound possible collaboration work discovered from the Creator’s connected Instagram;
- commercially verified work from completed Creator Shop Collaborations;
- Creator-provided public links or authorized work references for external and UGC work.

Portfolio is a browse-and-manage surface, not an Instagram feed, project-management workspace, analytics workspace or asset repository.

---

## 3. Portfolio unit

### Frozen

```text
PORTFOLIO_ITEM
= one individual content or work reference
```

Supported V0 item kinds are:

- Instagram Reel;
- Instagram image post;
- Instagram carousel;
- Instagram Story, only when exact source evidence is technically available;
- external public content link;
- UGC public-use destination or authorized work-reference link.

A project, campaign case study, multi-item gallery and project detail record are out of MVP.

If one completed Collaboration has multiple accepted publishing-evidence items, each qualifying media item becomes its own Portfolio item. There is no project grouping and no per-project gallery limit in V0.

---

## 4. Portfolio information architecture

```text
PORTFOLIO

Summary / context

[ All | Instagram | Creator Shop | Added by me | Removed ]

Individual work-item grid

+ Add external / UGC work reference
```

Each visible card may show:

- static source image or cover;
- format badge;
- identified or inferred Brand, when available;
- publication or work date, when available;
- provenance and verification labels;
- concise observed performance or Creator context, when allowed;
- Remove from Portfolio action.

Portfolio does not create an internal media player, preview modal, lightbox, embedded Instagram post, autoplay surface or project-detail screen.

---

## 5. Admission sources and authority

### 5.1 Instagram Intelligence — primary discovery authority

Creator Centre Intelligence evaluates the Creator’s connected Instagram media inventory and shortlists evidence-bound **possible collaboration** items.

Instagram Intelligence has higher discovery and coverage precedence than Creator Shop completion. Portfolio must not limit discovery to work that passed through Creator Shop.

### 5.2 Creator Shop C04 — commercial verification authority

Completed C04 Collaboration evidence may:

- match an Instagram-discovered Portfolio item and add Creator Shop verification; or
- add an eligible item not found through Instagram Intelligence;
- add completed UGC work where publishing on the Creator’s social handle was not required.

C04 is the stronger authority for confirming that matching work was commercially completed through Creator Shop.

### 5.3 Creator-provided references

The Creator may add link-based external or UGC work not represented by Instagram Intelligence or C04.

Creator-provided admission means a public destination or authorized work-reference URL plus limited descriptive metadata. It does not mean uploading media into Portfolio.

### 5.4 Authority model

```text
Discovery breadth:
Instagram Intelligence > Creator Shop-only population

Commercial verification:
Completed C04 evidence > inferred collaboration meaning

Creator curation:
Creator controls Portfolio inclusion
```

These are different authority dimensions and must not be collapsed into one ranking.

---

## 6. Possible collaboration qualification

### 6.1 Frozen rule

Instagram Intelligence may shortlist an item only when retained source evidence supports a reasonable inference that the item may represent Brand collaboration work.

Admission is evidence-bound and performance-independent.

### 6.2 Admissible signals

Signals may include, where technically available:

- explicit paid-partnership or branded-content indication;
- collaboration metadata;
- identifiable Brand tag or mention;
- sponsorship or advertising disclosure;
- caption language indicating a promotion, partnership or collaboration;
- a clearly identified Brand or product combined with promotional context;
- an exact match to accepted C04 publishing evidence.

A combination of weaker signals may support qualification, but the system must retain an explainable basis for the result.

### 6.3 Prohibited admission shortcuts

An item must not qualify only because it has:

- high reach, engagement or other performance;
- representative-content status in Content Intelligence;
- a casual product appearance or mention;
- niche relevance;
- generic promotional style.

Performance may be displayed after qualification; it cannot be the reason the item entered Portfolio.

### 6.4 Classification

Until stronger commercial authority exists, the item is visibly classified as:

```text
Possible Collaboration
```

Technical preflight may define model weights, numeric thresholds and confidence handling, provided that the frozen admissibility and explainability rules are preserved.

---

## 7. Identity, matching and deduplication

One source media item must produce one Portfolio item.

Primary matching key for Instagram media:

```text
canonical provider media identity
```

A normalized source permalink may be used as a secondary match.

When an Instagram-discovered item matches completed C04 publishing evidence:

- retain one Portfolio item;
- retain Instagram source verification;
- add Creator Shop commercial verification;
- do not create a duplicate;
- do not downgrade either valid provenance.

Provider media URLs and thumbnail URLs are presentation/acquisition inputs, not canonical item identity.

---

## 8. Verification and provenance labels

### Instagram Verified

Means the exact media identity and source were verified from the Creator’s connected Instagram.

It does **not** by itself verify that a commercial relationship existed.

### Possible Collaboration

Means Creator Centre Intelligence inferred possible collaboration meaning from retained evidence.

### Creator Shop Verified

Means the commercial work was verified through completed Creator Shop C04 truth.

### Creator Provided

Means the external or UGC reference was supplied by the Creator and was not independently verified as Creator Shop work.

An item may carry both **Instagram Verified** and **Creator Shop Verified**.

Verified source facts and verified commercial facts must remain distinguishable.

---

## 9. Creator curation: remove and restore

Every Portfolio item supports **Remove from Portfolio**, regardless of whether it came from:

- Instagram Intelligence;
- completed C04 work;
- Creator-provided external or UGC work.

Removal:

- excludes the item from the visible Portfolio;
- excludes the item from Media Kit eligibility;
- does not delete or rewrite the Instagram source record;
- does not delete or rewrite C04 Collaboration truth;
- does not delete Creator Centre Intelligence outputs;
- persists across future Intelligence refreshes.

Removal is reversible through a lightweight **Removed** state. The Creator may restore the item later.

Owner and Manager may curate, remove and restore. Assistant is read-only.

---

## 10. Fact ownership and editability

The Creator cannot edit facts obtained or verified from Instagram or C04, including:

- media identity and type;
- source image or thumbnail;
- source destination;
- publication date;
- source metrics and observed date;
- C04 verification;
- Intelligence evidence and classification basis.

The Creator may:

- remove or restore an item;
- edit Creator-provided external/UGC links and their limited metadata;
- add concise Creator-authored context where that field is supported.

Creator-authored context must be presented separately from verified facts.

No manual media upload or replacement of verified Instagram media is supported in V3.

---

## 11. External work and UGC

### External published work

The Creator supplies the actual public content destination and limited descriptive metadata.

### External UGC

The Creator supplies either:

- the public destination where the Brand used the UGC; or
- an authorized Google Drive or equivalent work-reference link.

Portfolio stores and presents the reference. It does not upload, scrape, copy or imply that it independently verified the underlying media.

### Creator Shop UGC

UGC is a use case of the standard Creator Shop campaign construct, not a separate deliverable format. Posting on the Creator’s social handle is not required, and content rights default to yes under the governing campaign decisions.

Completed C04 truth may therefore admit Creator Shop UGC even when Instagram Intelligence has no matching Creator-published item. Any available Brand-use destination or authorized work reference may be attached as the source destination.

---

## 12. Media rendering and click behavior

### Reel

- static Instagram cover or thumbnail;
- Reel format badge;
- no autoplay;
- click opens the Instagram Reel destination.

### Image post

- static source image;
- click opens the Instagram post destination.

### Carousel

- first eligible Instagram child or source cover;
- carousel badge and optional item count when known;
- no internal carousel recreation;
- click opens the Instagram carousel destination.

### Story

- static preview only when exact source evidence and permitted presentation material are technically available;
- click opens the source destination when one remains available;
- no fabricated historical Story coverage.

### External / UGC link

- no platform-hosted media preview is assumed;
- click opens the Creator-supplied public destination or authorized work-reference link;
- access requirements must be represented truthfully.

For all types, the source action must be accessible as a named link even when the media surface itself is clickable.

---

## 13. Source and presentation boundaries

The product distinguishes:

```text
source media identity
= matching and provenance

source destination
= click-through destination

image / thumbnail URL
= presentation acquisition input
```

Portfolio correctness must not depend on a provider CDN URL being permanent.

The product may retain a Portfolio presentation derivative only where the implementation has a valid platform and shareability basis. Provider constraints and asset persistence must be resolved during technical preflight without altering the click-to-source Product behavior.

---

## 14. Stories capability boundary

Stories are a supported Portfolio item kind only when the implementation can obtain exact, attributable evidence through authorized capabilities.

The system must not:

- imply complete historical Story coverage;
- infer a Story item without an exact underlying reference;
- manufacture a permanent destination where none exists.

Technical limitations reduce coverage; they do not change the Product unit or qualification rules.

---

## 15. Settings and deletion authority

Instagram-data deletion, platform-data deletion and Creator Centre state lifecycle are owned by **Settings — Creator** authority.

This register does not redefine those behaviors.

The governing distinction supplied by Settings authority is:

- **Delete my Instagram data** deletes stored backend/source Instagram data and does not delete extracted Creator Centre outputs.
- **Delete my platform data** governs deletion of Creator Centre/platform state.

Portfolio implementation must consume those policies and must not invent its own disconnect or deletion semantics.

---

## 16. Media Kit boundary

Automatic Portfolio admission never means automatic Media Kit publication.

The Creator must explicitly select eligible Portfolio items for Media Kit inclusion. Media Kit consumes individual items, not Portfolio projects.

Portfolio provides the following outbound contract for an eligible selected item:

- static source image or cover when available;
- source destination URL;
- item format;
- Brand signal when available;
- provenance and verification labels;
- publication/work date when available;
- observed-as-of context for source-derived metrics;
- concise allowed performance or Creator-authored context;
- current inclusion and shareability eligibility.

Final Media Kit presentation, download access and PDF export semantics belong to the Media Kit Product register.

```text
MEDIA_KIT_PDF_DOWNLOAD
= NOT_FROZEN_BY_THIS REGISTER
```

Portfolio V3 does not freeze whether or how thumbnails, links, dates or verification labels are rendered in a downloaded PDF.

---

## 17. Roles and permissions

### Owner / Manager

- read Portfolio;
- add and edit Creator-provided link records;
- remove and restore any Portfolio item;
- curate Media Kit eligibility and selection through the owning Media Kit flow.

### Assistant

- read-only.

No role may rewrite Instagram-verified or C04-verified facts through Portfolio.

---

## 18. Explicit exclusions

Portfolio V0 does not include:

- Portfolio projects or project case studies;
- campaign/project grouping;
- multi-item Portfolio galleries;
- internal content playback or preview;
- Instagram feed recreation;
- manual media uploads;
- editing verified source or C04 facts;
- performance-based Portfolio qualification;
- automatic publication to Media Kit;
- scraping external destinations;
- contract, quote or agreement truth;
- final Media Kit PDF policy.

---

## 19. Acceptance criteria

Portfolio V0 is Product-conformant only if:

1. Instagram Intelligence can shortlist evidence-bound possible collaboration items independently of Creator Shop.
2. Qualification never depends only on performance or representative-content status.
3. C04 evidence can verify a matching item or add eligible completed work, including UGC exceptions.
4. Matching Instagram and C04 evidence produces one deduplicated item with both valid labels.
5. Each Portfolio record represents one content/work item, not a project.
6. The Creator can remove and later restore any item, and removal persists across refresh.
7. Removed items are not eligible for Media Kit selection.
8. Verified Instagram and C04 facts cannot be manually altered.
9. External and UGC work is link-based; manual media upload is absent.
10. Reels use static covers, carousels use a static representative cover, and no type autoplays.
11. Clicking media opens the actual source destination rather than an internal preview.
12. Story coverage is capability-gated and never fabricated.
13. Media Kit publication remains an explicit Creator selection.
14. Settings authority governs deletion and lifecycle behavior.
15. PDF download behavior remains unresolved here and is not implemented from inference.

---

## 20. Required technical preflight

Before implementation begins, the implementation owner must verify and record:

1. exact authorized Instagram fields/signals available for possible-collaboration inference;
2. Story availability, attribution, destination and retention constraints;
3. inference threshold/model strategy and retained explanation evidence;
4. canonical identity and permalink-normalization rules;
5. current C04 publishing-evidence and UGC reference mappings;
6. deduplication behavior across Intelligence and C04;
7. image/thumbnail acquisition and permitted persistence;
8. external-link validation, safety and access-state behavior;
9. rights and shareability gates for external and UGC references;
10. the exact Media Kit consumer contract;
11. proof that no external media scraping or manual upload has been introduced.

Technical preflight may close implementation facts. It may not reopen the frozen Product decisions in this register.

---

## 21. Authority conclusion

```text
CREATOR_PORTFOLIO_V0_PRODUCT
= FROZEN_V3

PRIMARY_DISCOVERY
= INSTAGRAM_INTELLIGENCE_POSSIBLE_COLLABORATION

COMMERCIAL_VERIFICATION
= COMPLETED_C04_WHEN_MATCHED_OR_APPLICABLE

PORTFOLIO_UNIT
= INDIVIDUAL_CONTENT_OR_WORK_REFERENCE

CREATOR_CONTROL
= REMOVE_AND_RESTORE_ANY_ITEM

VERIFIED_FACTS
= NOT_CREATOR_EDITABLE

EXTERNAL_AND_UGC
= LINKS_ONLY_NO_MEDIA_UPLOAD

MEDIA_INTERACTION
= STATIC_COVER_CLICK_TO_SOURCE

PROJECT_MODEL
= OUT_OF_MVP

MEDIA_KIT_PUBLICATION
= EXPLICIT_CREATOR_SELECTION

MEDIA_KIT_PDF
= OWNED_BY_LATER_MEDIA_KIT_PRODUCT_AUTHORITY
```

No Product decision remains open for Portfolio V0.
