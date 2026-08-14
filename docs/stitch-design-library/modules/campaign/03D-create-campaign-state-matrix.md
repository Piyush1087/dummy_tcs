# 03D — Create Campaign State Matrix

**Status:** Review draft 0.1  
**Audience:** Product, UX, Codex, Stitch, and frontend implementation  
**Scope:** Manual Create / Resume Campaign only  
**Parent authority:** `03B — Create Campaign UX Authority`  
**Canonical sources:** Phase G Campaign field, runtime, validation, and frontend module-state contracts  
**Purpose:** Freeze every materially meaningful Create Campaign state and identify which states require distinct Stitch representation  
**Last material update:** 14 August 2026

## 1. Active boundary

This Matrix covers only the manual three-step Create Campaign flow:

```text
Campaign Strategy
→ Creator Strategy
→ Commercial Strategy
→ Publish
```

It does not define or activate Campaign Page states, Product/Asset setup, Brief setup, Discovery/Prospects, Applicants, Collaborations, or Reporting.

Publish success may navigate to Campaign Page Product Setup, but the destination screen is outside the current Stitch exercise.

AI-recommended Campaign acceptance is also outside this manual Create Campaign design family. It does not use a persisted manual Draft and must not be represented as a variant of this wizard.

## 2. State model

Create Campaign is composed from orthogonal state dimensions rather than dozens of unrelated pages:

1. Draft initialization/hydration;
2. current step and step completion;
3. local field interaction;
4. canonical autosave;
5. conditional fields;
6. derived system values;
7. external provider capability;
8. navigation and publish action;
9. responsive/keyboard presentation.

Do not ask Stitch to generate every mathematical combination. Generate representative compositions, then derive implementation states from the approved component system.

## 3. Top-level journey state machine

```text
Open Create Campaign
        ↓
INITIALIZING DRAFT
   ├── new → create MANUAL Draft
   └── resume → fetch existing Draft
        ↓
READY / EDITING
        ↓
Step 1 valid → Step 2 valid → Step 3 valid
        ↓
PUBLISHING
   ├── validation failure → earliest invalid step
   ├── system failure → Draft retained
   └── success → PUBLISHED → Campaign Page Product Setup
```

At no point does Publish require a Product, Brief, or Deliverable.

## 4. State priority

When multiple states coexist, present them in this priority:

1. page-blocking initialization/hydration failure;
2. publish system/validation result requiring action;
3. unresolved autosave failure;
4. current-step validation errors;
5. provider/derived-value failure;
6. saving/loading progress;
7. ordinary guidance and helper copy.

Do not show several competing banners for the same underlying failure.

## 5. Draft initialization and hydration

| ID | State | Entry | UX behavior | Exit | Stitch need |
|---|---|---|---|---|---|
| INIT-01 | Initializing new Draft | Create route opens without Draft ID | Show wizard structure or purposeful initialization state; fields are not falsely interactive | Draft created and fetched | Derive from one loading reference |
| INIT-02 | Initializing resumed Draft | Route contains valid Draft ID | Load authoritative saved values; avoid empty-form flash | Hydration succeeds | Derive |
| INIT-03 | New Draft ready | New canonical Draft exists | Step 1 opens with frozen defaults and quiet Draft context | User interacts | Base-screen input |
| INIT-04 | Resumed Draft ready | Existing Draft hydrated | Same wizard architecture; show quiet `Editing Draft` context and restored values | User interacts | Adaptation only if composition changes |
| INIT-05 | Initialization failure | Draft create/fetch fails | Page-level recoverable error; do not render a form that cannot save | Retry succeeds or safe exit | State reference required |
| INIT-06 | Draft unavailable | Not found, forbidden, or no longer editable | Explain unavailability with safe route; do not silently create a replacement Draft | User exits or authority restores access | Implementation state; Stitch only if product copy/layout differs materially |

Rules:

- A manual Draft is persisted and may be incomplete.
- A resumed Draft uses the same field object and wizard design.
- Never create a separate Edit Draft visual system.
- Never overwrite a failed hydration with default values that appear saved.

## 6. Step-progress states

| ID | State | Meaning | Navigation behavior | Stitch need |
|---|---|---|---|---|
| STEP-01 | Current incomplete | User is working; required untouched fields may remain | Continue triggers complete step validation | Base composition |
| STEP-02 | Current valid | All current-step requirements and derived values are ready | Continue navigates forward | Derive |
| STEP-03 | Current invalid after Continue | One or more step rules fail | Remain on step; show all errors; focus first invalid | Representative validation state |
| STEP-04 | Prior completed | Step previously passed validation | May be revisited without losing valid values | Derive |
| STEP-05 | Prior edited and now invalid | Revisited dependency makes a completed step invalid | Later Publish returns to earliest invalid step | Implementation state |
| STEP-06 | Future step | User has not completed prior step | Not used to bypass required validation | Base stepper treatment |
| STEP-07 | Back navigation | User moves to previous step | Preserve valid local/persisted state | Derive |

Step labels remain:

```text
Campaign Strategy
Creator Strategy
Commercial Strategy
```

## 7. Field interaction and canonical-value states

| ID | State | Local presentation | Canonical persistence behavior |
|---|---|---|---|
| FIELD-01 | Untouched | Neutral; no required error | Field may remain absent in incomplete Draft |
| FIELD-02 | Focused | Aurora focus treatment | No save solely because of focus |
| FIELD-03 | Dirty/unvalidated | Local value visible | Not yet accepted as canonical |
| FIELD-04 | Valid after field exit | No error; eligible for save | Accept and autosave valid value |
| FIELD-05 | Invalid after field exit | Inline actionable error | Invalid value is not accepted as canonical |
| FIELD-06 | Invalid with previous saved value | Local invalid value remains visible for correction | Preserve last valid persisted value |
| FIELD-07 | Invalid without previous saved value | Local invalid value remains visible | Persisted field remains unset |
| FIELD-08 | Corrected | Error clears once valid | New valid value becomes eligible for save |
| FIELD-09 | Read-only system value | Clearly non-editable | Supplied/derived by system |
| FIELD-10 | Selected locked option | Selected and visibly unavailable for change | Fixed by MVP/canonical authority |
| FIELD-11 | Disabled by dependency | Control unavailable with nearby reason/context | No unsupported value submitted |

Untouched future fields must not become red merely because the step loaded.

## 8. Autosave states

| ID | State | Trigger | UX | Data guarantee | Stitch need |
|---|---|---|---|---|---|
| SAVE-01 | Idle/no accepted change | No valid pending write | Quiet; no persistent noise | Existing Draft unchanged | Base |
| SAVE-02 | Saving | Valid value accepted for persistence | `Saving…` in one stable status location | Write in flight | Representative component state |
| SAVE-03 | Saved just now | Latest accepted write succeeds | Quiet confirmation | Canonical Draft contains accepted value | Base/derive |
| SAVE-04 | Saved at time | Confirmation ages | `Saved at [time]` where used | No pending failure | Derive |
| SAVE-05 | Recoverable save failure | Valid write fails | Persistent `Couldn't save changes · Retry`; preserve local form | Canonical Draft may retain earlier value | Representative failure state |
| SAVE-06 | Retrying | User/system retries failed write | Show in-progress state; prevent duplicate retry | Pending | Derive |
| SAVE-07 | Retry success | Failed write later succeeds | Return to Saved truthfully | Canonical Draft updated | Derive |
| SAVE-08 | Invalid value not saved | Field validation fails | Inline field error, not a misleading save failure | Last valid canonical value preserved | Implementation rule |
| SAVE-09 | Concurrent/stale conflict | Backend rejects due to changed authority/state | Explain conflict and recover/re-read safely | Backend remains authoritative | Later implementation state |

Rules:

- Do not toast every successful autosave.
- Never show Saved while the latest accepted canonical write failed.
- Saving state must not block reading or editing unrelated fields unless runtime safety requires it.
- Publish must not imply unsaved required changes were included.

## 9. Step 1 — Campaign Strategy states

### 9.1 Campaign Name

| State | UX |
|---|---|
| Empty untouched | Neutral input and counter |
| Under 3 characters after exit | Minimum-length error |
| Valid 3–60 | Eligible for autosave |
| Over 60 | Maximum-length error; counter communicates limit |
| Duplicate detected | Informational only; does not block |

### 9.2 Publishing Schedule

| ID | State | Composition | Validation |
|---|---|---|---|
| SCH-01 | Evergreen | Date fields hidden; Evergreen selected | `publishUntil` must not remain supplied |
| SCH-02 | Scheduled incomplete | Publish From and Publish Until revealed | Missing dates surface on exit/Continue as applicable |
| SCH-03 | Scheduled valid | Both dates present in logical order | Eligible for step completion |
| SCH-04 | Start before today on creation | Dates visible | Creation publish-from error |
| SCH-05 | End before start | Dates visible | End-date cross-field error |
| SCH-06 | Switch Scheduled → Evergreen | Dates collapse | Clear/omit incompatible scheduled values according to canonical mapper |

Stitch needs Scheduled valid plus one invalid date adaptation. Evergreen is represented in the base or as a compact variant.

### 9.3 Objective and derived KPIs

| ID | State | UX | Navigation impact |
|---|---|---|---|
| KPI-01 | Objective unselected | Objective cards; no empty KPI dashboard | Blocks Step 1 on Continue |
| KPI-02 | Objective selected / resolving | Selected card; compact derived-metric loading treatment | Continue waits/blocks if required value unresolved |
| KPI-03 | KPI ready | Show Primary KPI and 2–4 supporting KPIs read-only | Step may complete if other fields valid |
| KPI-04 | KPI resolution failure | Explain that success metrics could not be prepared; Retry where supported | Blocks Step 1 completion |
| KPI-05 | Objective changed | Re-resolve; old KPI projection no longer authoritative | Re-enter resolving state |

Do not let Stitch invent KPI values. Screen Briefs supply representative approved values from the canonical KPI framework.

### 9.4 Platform

| State | UX |
|---|---|
| Instagram MVP | Selected and locked/read-only |
| Future platform | Omitted or restrained Coming Soon only when requested |

No format or Deliverable state exists here.

### 9.5 Visibility

| State | UX |
|---|---|
| Initial | Public selected by canonical default |
| Changed | Eligible Creators Only or Invite Only selected |
| Missing due to malformed/legacy Draft | Require selection or normalize through runtime; do not invent a fourth option |

## 10. Step 2 — Creator Strategy states

### 10.1 Creator Archetypes

| ID | State | UX | Validation |
|---|---|---|---|
| ARCH-01 | Empty untouched | Searchable control, no premature error | Blocks Continue if still empty |
| ARCH-02 | Searching | Search results loading |
| ARCH-03 | Results | Controlled taxonomy choices |
| ARCH-04 | Selected 1–4 | Chips plus search remains available | Valid |
| ARCH-05 | Selected 5 | Chips; communicate maximum; prevent sixth selection | Valid at maximum |
| ARCH-06 | No results | Neutral no-results state; no free-token creation | No new selection |
| ARCH-07 | Taxonomy unavailable | Explain temporary unavailability | Blocks if no valid saved selection |
| ARCH-08 | Optional recommendation loading | Nonblocking subtle state | Manual selection remains usable |
| ARCH-09 | Recommendations ready | Canonical options may be marked recommended | Never overwrite user selection |
| ARCH-10 | Recommendations unavailable | Remove recommendation treatment quietly | Does not block manual creation |

### 10.2 Follower range

| State | UX | Validation |
|---|---|---|
| Minimum valid + no maximum | `No maximum` | Valid |
| Minimum and maximum valid | Show numeric range | Maximum strictly greater than minimum |
| Negative/non-integer | Inline field error | Invalid |
| Maximum equal/below minimum | Cross-field error on maximum | Invalid |
| Minimum changes beyond saved maximum | Immediately invalidate/reconcile maximum | Invalid until corrected/cleared |

### 10.3 Audience gender

Canonical default: All. Female and Male are the only alternatives.

### 10.4 Audience age

| State | UX | Validation |
|---|---|---|
| Valid range | Slider/value controls agree | 13–65 and min ≤ max |
| Minimum below 13 | Inline error or prevented boundary | Invalid |
| Maximum above 65 | Inline error or prevented boundary | Invalid |
| Minimum above maximum | Cross-field error | Invalid |
| Keyboard/manual adjustment | Values remain explicit and accessible | Same authority |

### 10.5 Geography provider

| ID | State | UX | Step impact |
|---|---|---|---|
| GEO-01 | Empty/ready | Search prompt | At least one geography required |
| GEO-02 | Focused/no query | Ready search control | No error until interaction/Continue |
| GEO-03 | Searching | Inline result-loading state | Await selection |
| GEO-04 | Results | Structured human-readable options | User may select |
| GEO-05 | Selected | Removable tags with normalized labels | Valid when at least one remains |
| GEO-06 | No results | Helpful no-results copy | Remains incomplete |
| GEO-07 | Provider error | Error and Retry/fallback only if supported | Blocks new required selection |
| GEO-08 | Provider configuration blocked | Honest unavailable state; do not show fake usable autocomplete | Resolution follows approved fallback |
| GEO-09 | Resumed Draft with saved geography | Show saved structured selections even if provider is temporarily unavailable | Existing valid value remains canonical |
| GEO-10 | Global selected | Show Global as canonical structured scope | Valid; Screen Brief decides whether mixed selection is allowed |

### 10.6 Audience affinities

| State | UX |
|---|---|
| Empty | Valid optional state |
| Search/results | Controlled canonical library |
| 1–4 selected | Removable chips |
| 5 selected | Communicate maximum; prevent sixth |
| No results | No free-token creation |
| Library unavailable | Existing selections remain visible; field may remain empty because optional |

## 11. Step 3 — Commercial Strategy states

### 11.1 Brand support

| ID | State | Composition | Validation |
|---|---|---|---|
| SUP-01 | Decision untouched | Yes/No decision neutral | Required on Continue |
| SUP-02 | No | Type/value hidden or cleared | Valid when support fields absent |
| SUP-03 | Yes, type missing | Type control visible | Invalid |
| SUP-04 | Yes, type selected | Optional estimated value available | Valid if other rules pass |
| SUP-05 | Estimated value invalid | Currency-aware field error | Must be non-negative when supplied |
| SUP-06 | Switch Yes → No | Conditional controls collapse | Type/value removed from submitted canonical state |

Support type is single-select in the current contract.

### 11.2 Compensation

| ID | State | Composition |
|---|---|---|
| COMP-01 | Fixed | Label amount as Creator Payout |
| COMP-02 | Negotiable | Same canonical amount field labelled Payout Starting From; one counter-offer helper |
| COMP-03 | Model switch | Preserve/clear amount only according to implementation rule; meaning and label update immediately |
| COMP-04 | Offer invalid | Inline currency-aware error |

No negotiable maximum field exists.

### 11.3 Derived currency

| ID | State | UX | Step impact |
|---|---|---|---|
| CUR-01 | Resolving Brand context | Monetary fields may show skeleton/neutral currency slot | Blocks completion if currency unavailable |
| CUR-02 | INR ready | Use INR formatting for India Brand | Ready |
| CUR-03 | USD ready | Use USD formatting for US/rest-of-world Brand | Ready |
| CUR-04 | Resolution failure | Explain Campaign currency could not be prepared; Retry/safe route | Blocks Step 3/publish |

Currency is never user-editable.

### 11.4 Offer and budget relationship

| State | UX | Validation |
|---|---|---|
| Both zero | Canonically non-negative; other publish/service rules still apply | Structurally valid |
| Budget greater than offer | Valid |
| Budget equal to offer | Valid |
| Budget below offer | Error on Total Campaign Budget | Invalid |
| Offer raised above saved budget | Immediately re-evaluate budget | Invalid until corrected |

### 11.5 Advance payment

Only these discrete selected states exist:

```text
0% | 25% | 50% | 75% | 100%
```

No continuous intermediate state is a valid canonical selection.

### 11.6 Payout terms

Only these states exist:

```text
Net 7 | Net 15 | Net 30 | Net 45 | Net 60
```

Legacy Immediate values must not appear as a new selectable option.

## 12. Continue and Back action states

| ID | Action state | UX behavior |
|---|---|---|
| NAV-01 | Continue ready | Primary action available |
| NAV-02 | Continue validating | Prevent duplicate click; retain layout |
| NAV-03 | Continue blocked by errors | Remain on step; surface all current-step errors; focus first |
| NAV-04 | Continue blocked by derived/provider state | Explain required unresolved state near its owner |
| NAV-05 | Back ready | Secondary action available except where no prior step |
| NAV-06 | Back during autosave | Preserve local values; save status remains truthful |
| NAV-07 | Exit | Retain last successfully autosaved valid Draft; no invented destructive discard |

The primary CTA need not be permanently disabled merely because untouched required fields exist; on activation it may validate and explain what is missing.

## 13. Publish states

| ID | State | Entry | UX | Result | Stitch need |
|---|---|---|---|---|---|
| PUB-01 | Ready to Publish | Three steps locally complete; derived requirements ready | Publish primary action | None yet | Base Step 3 |
| PUB-02 | Publishing | Human confirms Publish | Disable duplicate submission; show progress | Command in flight | Derive |
| PUB-03 | Aggregate validation failure | Backend rejects incomplete/invalid aggregate | Return to earliest invalid step; map structured errors; preserve Draft | Remains DRAFT | Representative validation family |
| PUB-04 | Canonical reference failure | Taxonomy/geography/reference invalid or stale | Explain affected field and require valid reselection where needed | Remains DRAFT | Implementation state |
| PUB-05 | KPI/currency readiness failure | Derived authority unavailable | Show owned failure/retry state | Remains DRAFT | Covered by derived-state references |
| PUB-06 | System failure | Publish command fails without domain validation result | Page/form error; allow safe retry; preserve all Draft data | Remains DRAFT; no partial publish | Representative failure state |
| PUB-07 | Success | Complete aggregate accepted | Brief success transition; navigate | DRAFT → PUBLISHED | Transition only; destination out of scope |

Published is not Live. The Create Campaign UI must not say `Campaign is live` after manual Publish.

## 14. Responsive and keyboard states

| ID | State | Required behavior | Stitch need |
|---|---|---|---|
| RESP-01 | Desktop normal | Main form + subordinate progressive Summary | Representative desktop steps |
| RESP-02 | Desktop long step | Clear scroll ownership; actions remain discoverable | Derive from base |
| RESP-03 | Mobile normal | One column; collapsed/omitted Summary; Persistent Action Region above Bottom Navigation | Representative mobile |
| RESP-04 | Mobile keyboard open | Focused field remains visible; no action/bottom-nav overlap; content can scroll safely | Required stress reference |
| RESP-05 | Mobile validation focus | Scroll/focus first invalid field without hiding it behind Header/action region | Derive/test |
| RESP-06 | Mobile provider results | Geography results fit available browser height and keyboard state | Representative Step 2 mobile adaptation |
| RESP-07 | Mobile save failure | Persistent save truth remains visible without displacing the current task | Derive |

Responsive composition may change; state meaning, validation, defaults, and canonical options may not.

## 15. Campaign Summary states

| State | Content rule |
|---|---|
| Empty/new | Do not render a large ledger full of `Not specified` |
| Partially populated | Show only useful accepted/local values with clear grouping |
| Current valid value saving | May project the current value while save status separately remains truthful |
| Invalid local value | Do not present it as accepted canonical truth without clear local context |
| Resumed Draft | Reflect authoritative hydrated values |
| Mobile | Collapsed/Sheet/omitted according to Screen Brief; never obstruct action region |

No speculative creator count, reach, Applications, health, or escrow state belongs in Summary.

## 16. Error-boundary matrix

| Failure owner | Boundary | What remains usable |
|---|---|---|
| Draft initialization | Page | Safe Retry/exit only |
| Field validation | Field/section | Other valid fields remain editable and autosavable |
| Autosave | Stable save-status area plus affected context | Local form preserved; correction/retry possible |
| KPI derivation | Objective/KPI section | Other Step 1 fields remain usable; Continue blocked |
| Archetype recommendations | Recommendation enhancement | Manual archetype selection remains usable |
| Geography provider | Geography control | Saved geography and other Step 2 fields remain usable |
| Currency derivation | Commercial currency/section | Other readable values remain; completion blocked |
| Publish validation | Form plus mapped fields | Draft remains editable |
| Publish system | Page/form action boundary | Draft and entered values retained; retry possible |

Do not convert a local provider or derived-value failure into a generic blank page unless the entire Draft cannot safely load.

## 17. Capability and visibility rules

- Backend/service authority decides whether the Draft can be edited or published.
- Frontend must consume supplied capability instead of inferring from a visual step alone.
- A lifecycle/capability conflict discovered during editing requires authoritative re-read or safe exit.
- Completed/Archived edit behavior belongs to later Edit Campaign/Campaign Page work and is not a current Create Campaign Stitch state.
- AI-recommended Campaign editability belongs to its separate recommendation/launch flow.

## 18. Representative Stitch state set

The following materially different compositions should be considered by the Handoff Map:

| Priority | Representative | Why |
|---:|---|---|
| 1 | Desktop Step 1 — Scheduled + Objective KPI ready | Establishes wizard, selection cards, conditional dates, derived read-only state, Summary |
| 2 | Desktop Step 2 — archetypes + valid range + geography results | Establishes controlled multi-select, audience controls, provider overlay |
| 3 | Desktop Step 3 — Brand support Yes + Fixed + INR | Establishes conditional provisioning and commercial hierarchy |
| 4 | Step 3 Negotiable adaptation | Material label/helper change without a new page system |
| 5 | Validation + autosave failure adaptation | Establishes inline errors, banner hierarchy, and truthful save status |
| 6 | Mobile Step 1 representative | Establishes mobile composition and Persistent Action Region |
| 7 | Mobile long-form/keyboard state, preferably Step 2 | Establishes real browser-height and provider/input behavior |
| 8 | Initialization failure | Establishes page-level recovery without a fake usable form |

Not every row requires a separate prompt. The Handoff Map should group variants that inherit one approved base.

## 19. Implementation-only states

These require correct frontend behavior and QA but usually do not justify separate Stitch generation:

- Saved-at timestamp aging;
- retry in flight and retry success;
- duplicate-click prevention;
- prior-step invalidation after a dependency change;
- canonical reference conflict details;
- stale capability conflict;
- search no-results variations after component pattern approval;
- every allowed Advance or Net term selection;
- every objective, gender, visibility, or support-type selection;
- every responsive width between representative breakpoints.

## 20. Prohibited states

Do not design or implement:

- manual Draft treated as Published or Live;
- Publish requiring Product, Brief, or Deliverables;
- Deliverable counters in Step 1;
- Dynamic/Milestone timeline;
- editable KPI or currency;
- follower tiers as canonical state;
- multiple Negotiable amount fields;
- arbitrary Advance percentage;
- Immediate payout term;
- invalid local value reported as successfully autosaved canonical value;
- recommendation failure blocking manual archetype selection;
- provider failure erasing saved geography;
- AI-recommended acceptance as a manual Draft state;
- Campaign Page hydration/workspace states inside this Stitch cycle.

## 21. State-to-copy ownership

This Matrix freezes meaning, not final prose.

| State copy | Owner |
|---|---|
| Field error wording | Create Campaign Copy Contract |
| Autosave labels | Create Campaign Copy Contract |
| KPI/currency/provider failures | Copy Contract plus runtime error mapping |
| Initialization/publish failure | Copy Contract plus domain error mapping |
| Representative data | Screen Brief |
| Technical diagnostic detail | Logs/telemetry, not product UI |

## 22. Freeze test

The Create Campaign State Matrix is ready for Stitch routing when:

1. every top-level state has a clear owner and exit;
2. invalid local values are distinguished from accepted canonical values;
3. Draft, Published, and Live meanings are not conflated;
4. conditional, derived, and provider states are explicit;
5. mobile keyboard/action states are represented;
6. the representative set covers materially different compositions without generating every combination;
7. no Campaign Page state is activated;
8. the Handoff Map can assign each representative state to a base, adaptation, or implementation-only category.
