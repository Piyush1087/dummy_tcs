# 02B — Create Campaign Attachment Manifest

**Status:** Review draft 0.1  
**Audience:** Codex/operator  
**Scope:** Stitch grounding and S1 generation for Create Campaign  
**Sent to Stitch:** No; it tells Codex what to attach and prompt  
**Last material update:** 14 August 2026

## 1. Purpose

Define the exact files, prompt text, sequencing, and version records for the first Create Campaign Stitch run.

Stitch cannot access GitHub. Codex must resolve the committed files and attach/upload their actual bytes.

## 2. Canonical source ref

Before execution, record:

```text
Repository: Piyush1087/dummy_tcs
Branch/ref: docs/stitch-design-library
Exact commit SHA: [RESOLVE_AT_RUNTIME]
Stitch project: Creator Shop — Campaign
Existing project ID: [FROM REGISTRY OR CONNECTOR]
```

If the branch head changes after packet assembly, repeat preflight and confirm whether the changed files affect the run.

## 3. G0 — Platform grounding packet

Attach these four files:

1. `docs/stitch-design-library/global/01A-creator-shop-platform-context.md`
2. `docs/stitch-design-library/global/01B-aurora-5-stitch-context.md`
3. `docs/stitch-design-library/global/01C-application-shell-and-viewport-context.md`
4. `docs/stitch-design-library/global/01D-global-stitch-design-instructions.md`

Do not attach engineering standards or Codex runbooks.

### G0 prompt

```text
Read the four attached Creator Shop global design-context files.

Do not generate UI.

Return a concise numbered confirmation of:
1. what Creator Shop is and which user is active for this work;
2. Aurora 5.0 as the literal visual authority;
3. the required Satoshi and Source Sans 3 font roles and supplied font sources;
4. the existing global shell versus the Content Area you will design;
5. reserved desktop and mobile shell geometry;
6. realistic mobile-browser height, safe-area, Bottom Navigation, scrolling, and keyboard assumptions;
7. how you will handle ambiguity and avoid inventing product decisions;
8. how revisions and responsive adaptations preserve approved screen lineage;
9. what exact project/screen/preview identity you can return after generation.

List any ambiguity that would prevent correct module design. Do not propose a screen yet.
```

### G0 acceptance

Accept only if Stitch confirms:

- Brand-side context;
- Aurora 5.0 and font roles;
- Content Area-only responsibility;
- canonical shell dimensions;
- browser-aware mobile treatment;
- no product invention;
- stable output identity/preview expectation.

## 4. G1 — Create Campaign grounding packet

Attach one compact Stitch-facing file:

1. `docs/stitch-design-library/modules/campaign/stitch-context/create-campaign-grounding.md`

The file is a controlled extract from Campaign Manifest, UX Authority, State Matrix, Handoff Map, and Screen Brief shared invariants.

Do not attach the full Campaign Page planning library.

### G1 prompt

```text
Read the attached Create Campaign grounding file in the existing `Creator Shop — Campaign` project context.

Do not generate UI.

Return a concise numbered confirmation of:
1. the active surface boundary;
2. the three wizard steps and their order;
3. the difference between creating a Campaign and later execution setup;
4. Campaign → Campaign Asset → Brief → Deliverables ownership;
5. the canonical fields in each wizard step;
6. numeric follower-range authority;
7. Fixed versus one-field Negotiable offer semantics;
8. system-derived KPI and Campaign currency behavior;
9. Draft, autosave, validation, Publish, Published, and Live distinctions;
10. desktop and mobile composition expectations;
11. prohibited legacy concepts;
12. unresolved decisions that remain outside your authority.

Explicitly confirm that you will generate Create Campaign only and will not generate Campaign Page, Assets, Briefs, Prospects, Applicants, Collaborations, or Reporting in the current exercise.
```

### G1 acceptance

Reject or correct if Stitch:

- adds Deliverables to Step 1;
- uses follower tiers;
- adds maximum Negotiable fee;
- makes KPI/currency editable;
- treats Publish as Live;
- creates a second shell;
- activates Campaign Page surfaces;
- invents AI metrics or recommendations.

## 5. S1 — Campaign Strategy packet

Attach:

1. `docs/stitch-design-library/modules/campaign/screen-briefs/create-campaign/04A-campaign-strategy.md`

Reattach `01B` or `01C` only if retained project context cannot be verified or a material version changed.

### S1 prompt

```text
Using the accepted global and Create Campaign grounding in this retained project, generate only the attached S1 Campaign Strategy Screen Brief.

Target screen name:
`Campaign — Create Strategy — Desktop 1440 — Scheduled KPI Ready — v1`

Treat the attached brief as the exact screen contract. Preserve all supplied hierarchy, representative data, KPI values, viewport assumptions, prohibited boundaries, and Aurora 5.0 requirements.

Design only the Content Area inside the existing Creator Shop shell. Do not draw a replacement global Header or Sidebar.

Do not generate other steps, mobile variants, error states, Campaign Page surfaces, or implementation architecture.

After generation, return:
- exact project name and stable project ID;
- exact screen/file name and stable screen/file ID;
- interactive preview link or best available stable review link;
- generated export/code identity and retrieval location where available;
- represented viewport/state;
- any ambiguity or deviation from the brief.
```

## 6. File version record

For every attached file record:

| Field | Required |
|---|---:|
| Repository path | Yes |
| Git blob SHA or content hash | Yes |
| Governing commit SHA | Yes |
| File title/version/status | Yes |
| Stage attached | Yes |
| Connector attachment/file ID | When returned |

## 7. Reattachment rules

Do not reattach all global context automatically.

Reattach only when:

- a new Stitch project is created;
- the connector does not retain project attachments/context;
- a relevant document version changed;
- grounding response shows context loss;
- a long or unrelated exploration contaminated assumptions;
- the target Screen Brief requires an authority not already grounded.

## 8. Excluded files

Never attach to Stitch in this initiation run:

- `02-codex-stitch-execution-runbook.md`;
- this Attachment Manifest;
- frontend/backend engineering standards;
- production React/TypeScript source;
- historical Campaign Stitch prompts;
- Campaign Page State Map;
- Workspace authority details;
- developer migration plans;
- GitHub metadata or commit procedures;
- later implementation-consumption instructions.

Codex may read relevant canonical sources during preflight, but Stitch receives only the defined packets.

## 9. Run completion record

The run record must contain:

```text
Run timestamp
Repository commit
Runtime model allocation
Stitch project name/ID
G0 prompt and attachments
G0 response and validation
G1 prompt and attachment
G1 response and validation
S1 prompt and attachment
S1 screen name/ID
Preview link
Export/code identity
Supplemental screenshot
Deviations/blockers
Stop confirmation
```
