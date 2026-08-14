# 02 — Codex Stitch Execution Runbook

**Status:** Review draft 0.1  
**Audience:** Codex and authorized human operators  
**Scope:** Preparing, executing, reviewing, and recording Creator Shop Stitch work through an MCP-connected workflow  
**Owner:** Creator Shop Design Library  
**Sent to Stitch:** No  
**Last material update:** 14 August 2026

## 1. Purpose

This runbook defines how Codex should execute Creator Shop design work through Stitch while preserving:

- product and design authority;
- efficient context use;
- one traceable module project;
- exact prompt and attachment history;
- interactive review access;
- stable screen identity;
- future continuation and upgrade paths.

This runbook governs design execution only. It does not govern how approved Stitch designs or exported code are implemented in the production frontend. That belongs to `05 — Implementation Consumption`.

## 2. Core operating principles

1. **Ground before generating.** Validate global and module understanding before requesting UI.
2. **Load context progressively.** Do not send the entire library with every prompt.
3. **Reuse the module project.** Continue inside the retained Stitch project unless deliberate isolation is required.
4. **Generate a representative base first.** Approve hierarchy and interaction before expanding states.
5. **Revise by lineage.** Update an identified screen rather than regenerating anonymously.
6. **Retrieve reviewable output.** A thumbnail alone is not sufficient.
7. **Record every result.** A screen that cannot be found later is not a completed handoff.
8. **Do not silently resolve product conflicts.** Stop and surface consequential ambiguity.

## 3. Required library inputs

Codex must resolve current approved versions of:

### Global Stitch Context

- `01A — Creator Shop Platform Context`
- `01B — Aurora 5.0 Stitch Context`
- `01C — Application Shell & Viewport Context`
- `01D — Global Stitch Design Instructions`

### Module package

- Module Stitch Manifest;
- Surface Authority Matrix;
- State Matrix;
- Copy Contract;
- Stitch Handoff Map;
- Legacy and Prohibited Concepts;
- applicable visual references.

### Screen package

- exact Screen Brief;
- approved representative data;
- required images/assets;
- approved parent screen identity when revising, adapting, or expanding states.

Codex must not use an old chat transcript as a substitute for an approved current document.

## 4. Runtime capability discovery

Before planning MCP calls, Codex must inspect the Stitch capabilities exposed in the current environment.

Determine whether the connector can:

- list or find projects;
- create a project;
- retrieve a project by stable ID;
- upload or attach context files;
- send text prompts;
- generate a screen;
- revise an existing screen;
- list project screens/files;
- retrieve stable screen/file IDs;
- retrieve an interactive preview URL;
- retrieve or export generated code/assets;
- retrieve a screenshot or thumbnail;
- preserve project and screen lineage.

Do not invent connector operation names or assume a capability exists.

If the connector cannot provide a stable screen identity or interactive preview, report the limitation before beginning a large generation sequence. Manual Stitch verification may be required.

## 5. Project continuity

Each module should normally use one persistent Stitch project.

Recommended naming:

```text
Creator Shop — <Module>
```

For Campaign:

```text
Creator Shop — Campaign
```

### Before creating a project

Codex must:

1. check the module Artifact Registry for an existing project ID;
2. use the connector to retrieve that project by ID where supported;
3. verify that the project name and module match;
4. inspect existing screen names/IDs to avoid duplicates;
5. create a new project only when no valid retained project exists or an approved redesign branch requires isolation.

Never create a fresh project merely because the existing project is inconvenient to locate.

### Redesign or experiment branches

When isolation is intentional, name it explicitly:

```text
Creator Shop — Campaign — Exploration <Name>
```

An exploration must not silently replace the canonical module project. Promotion requires review and registry update.

## 6. Codex preflight

Before every Stitch execution batch, Codex must complete the following preflight.

### 6.1 Resolve authority

- identify the current canonical global documents;
- identify the current Module Manifest and detailed authorities;
- identify the exact Screen Brief;
- record document versions and source commits;
- confirm that legacy documents are not being treated as current authority.

### 6.2 Resolve the target

- module;
- surface;
- product state;
- viewport;
- Content Area dimensions;
- new generation, revision, responsive adaptation, or state variant;
- required parent screen/project identity;
- expected output count.

### 6.3 Resolve open decisions

Check whether any unresolved decision changes:

- hierarchy;
- field order or type;
- required copy;
- action availability;
- state meaning;
- desktop/mobile behavior;
- overlay choice;
- ownership or editability.

If yes, stop and request a product decision before generating.

### 6.4 Resolve assets

Confirm that required:

- logos;
- offering images;
- creator avatars;
- icons or illustrations;
- representative data;
- font URLs

are available or can be represented through an approved neutral fallback.

Do not let Stitch invent a consequential Brand or creator identity when an approved asset is required for review.

### 6.5 Confirm authorization boundaries

Stitch generation does not automatically authorize:

- GitHub commits;
- pushes;
- pull requests;
- production frontend changes;
- backend changes;
- deletion or replacement of existing Stitch screens.

Perform external writes only within explicit authorization.

## 7. Context-budget strategy

Use the smallest context package that preserves authority.

### 7.1 Platform grounding package

Attach:

- 01A Platform Context;
- 01B Aurora 5.0 Stitch Context;
- 01C Shell & Viewport Context;
- 01D Global Stitch Design Instructions.

Send once when creating or re-grounding a module project.

### 7.2 Module grounding package

Attach:

- Module Manifest;
- only the detailed module authority documents required to understand the full module;
- prohibited/legacy concept list.

Do not attach production code or database schemas unless a specific product authority cannot otherwise be represented and the material is curated first.

### 7.3 Screen-generation package

Attach:

- exact Screen Brief;
- the minimum governing module section(s);
- required assets;
- parent screen identity where applicable.

Do not automatically reattach all global and module documents when project context retention is verified.

### 7.4 When to reattach context

Reattach the relevant authority when:

- the connector/project does not retain attachments reliably;
- a new Stitch project is used;
- a material global or module version changed;
- Stitch's response reveals forgotten or contradictory context;
- a long gap or unrelated exploration may have contaminated project assumptions;
- the target screen depends on a rule not previously supplied.

### 7.5 Context manifest

For every prompt, Codex must record:

```text
Context manifest
- file name
- document version
- canonical source/commit
- reason included
- attachment or inline-text delivery
```

This allows a future revision to reproduce the authority under which the screen was created.

## 8. Execution journey

## Stage 0 — Prepare the run

1. Discover available Stitch capabilities.
2. Resolve/reuse the module project.
3. complete preflight;
4. build the context manifest;
5. assemble prompts from approved templates;
6. create/update planned Artifact Registry rows;
7. obtain required user decisions before generation.

Exit condition: target, authority, project, attachments, and expected outputs are unambiguous.

## Stage 1 — Platform grounding

Purpose: ensure Stitch understands Creator Shop, Aurora, and the shell before module design.

Send the four Global Stitch Context documents.

Prompt objective:

```text
Read and understand the attached Creator Shop global context.
Do not generate UI.
Return the requested understanding, authority hierarchy, font confirmation,
shell boundary, viewport assumptions, and material ambiguities only.
```

Codex must compare the response against the supplied documents.

Reject grounding when Stitch:

- proposes a new design language;
- uses non-Aurora fonts or tokens;
- treats mobile as native-app design;
- expects to regenerate global navigation;
- confuses product authority with design-system authority;
- reports material ambiguity requiring resolution.

Record the grounding prompt, response, date, and context versions.

## Stage 2 — Module grounding

Purpose: ensure Stitch understands the module before screen generation.

Send the current module package.

Prompt objective:

```text
Read and understand the attached <Module> authority.
Do not generate UI.
Return the surface hierarchy, ownership boundaries, states, terminology,
deferred functionality, prohibited legacy concepts, and ambiguities only.
```

Codex must verify the response against the Module Manifest, not merely accept a confirmation statement.

Record the module grounding version in the Artifact Registry.

## Stage 3 — Representative screen generation

Purpose: establish the visual hierarchy and interaction model for one screen family.

Steps:

1. select the representative state named by the Handoff Map;
2. attach its Screen Brief and minimum authority;
3. provide realistic representative data/assets;
4. provide exact physical viewport and Content Area assumptions;
5. name the required screen before generation;
6. request one coherent output;
7. retrieve project ID, screen ID, preview URL, export identity, and deviations;
8. update registry status to `Generated` then `In review`.

Do not request the full state catalogue at this stage.

## Stage 4 — Human review

Codex must return to the user:

- exact project and screen name;
- project ID and screen ID;
- interactive preview URL;
- represented state and viewport;
- prompt/context versions;
- artifact/export location when available;
- font-load result;
- reported deviations or ambiguity;
- supplementary screenshot/thumbnail if useful.

Review the interactive preview, not only the thumbnail.

Review order:

1. product/domain correctness;
2. information hierarchy and task completion;
3. Aurora 5.0 compliance;
4. shell/viewport correctness;
5. responsive, scroll, keyboard, and overlay behavior;
6. copy accuracy;
7. visual polish.

Record review findings against the exact screen ID.

## Stage 5 — Controlled revision

Prepare a revision brief containing:

- target project ID;
- target screen ID;
- current iteration;
- exact issue;
- violated authority/acceptance rule;
- required change;
- what must remain unchanged;
- expected new iteration name;
- acceptance condition.

Request revision of the identified screen or an explicitly linked next iteration.

Do not send a broad redesign prompt to fix one issue.

After revision:

- retrieve the new/existing stable identity;
- confirm the preview points to the correct iteration;
- update the registry;
- keep the superseded iteration traceable.

## Stage 6 — Responsive adaptation

After the representative base is approved:

1. reference the approved screen ID;
2. attach the target viewport Screen Brief;
3. attach Shell & Viewport Context where required;
4. request transformation, not redesign;
5. verify product meaning, hierarchy, actions, and required information remain consistent;
6. review the target at its exact viewport;
7. record its parent screen ID.

## Stage 7 — State expansion

After the base component family is approved:

1. select a coherent state family;
2. attach only the relevant State Matrix section;
3. reference the approved base screen;
4. request inheritance of layout and component family;
5. retrieve a distinct identity for each reviewable state;
6. verify Loading, Empty, Error, unavailable, disabled, and lifecycle meanings remain distinct;
7. update registry rows individually.

Do not accept a state board as a substitute for individual reviewable screens when interaction or responsive behavior matters.

## Stage 8 — Final inventory

Before declaring the Stitch design batch complete:

- list all generated project screens;
- match them to the Handoff Map;
- identify missing, duplicate, and superseded screens;
- confirm preview links open the intended screens;
- confirm every approved screen has a Screen Brief and prompt record;
- save available exports and reference assets;
- update the Artifact Registry;
- record approval status;
- prepare Git changes only if explicitly authorized.

## 9. Prompt assembly rules

Every executable prompt should contain:

```text
1. Task identity
2. Existing project/screen lineage
3. Attached authorities and their versions
4. Surface and exact state
5. Product objective
6. Required information hierarchy
7. Required components/interactions
8. Representative content/assets
9. Physical viewport and Content Area
10. Generate
11. Do not generate/change
12. What must remain unchanged
13. Deliverables
14. Acceptance checklist
15. Required output identity and preview metadata
```

### Prompt discipline

- Use direct instructions.
- Avoid repeating entire attached documents in prompt text.
- Repeat only the non-negotiable constraints most likely to be lost for this screen.
- Use exact canonical terminology.
- Separate `Generate` from `Do not generate`.
- State the expected number of outputs.
- Name every requested output.
- Do not ask Stitch to infer context from GitHub paths it cannot access.
- Upload `.md`/`.txt` context or include the required text directly.

## 10. Screen naming

Use:

```text
<Module> — <Surface> — <Viewport> — <State> — v<Iteration>
```

Examples:

```text
Campaign — Workspace — Desktop 1440 — Live Ready — v1
Campaign — Create Strategy — Mobile 390 — Draft Incomplete — v2
Campaign — Applicants — Mobile 360 — Empty — v1
```

Do not accept generic names such as:

- `Screen 1`;
- `Campaign Page`;
- `New Design`;
- `Mobile Final`.

## 11. Required output retrieval contract

After each successful generation/revision, Codex must attempt to retrieve:

| Field | Required |
|---|---:|
| Stitch project name | Yes |
| Stable project ID | Yes |
| Exact screen/file name | Yes |
| Stable screen/file ID | Yes |
| Interactive preview URL | Yes |
| Physical viewport | Yes |
| Content Area assumptions | Yes |
| Product state(s) | Yes |
| Prompt version | Yes |
| Context manifest version | Yes |
| Font-load result | Yes |
| Export/artifact identity | When supported |
| Screenshot/thumbnail | Supplementary |
| Known deviation/ambiguity | Yes |

If an exact preview URL is unavailable:

1. attempt project/screen retrieval once using the returned IDs;
2. inspect whether the connector exposes an alternate preview/share operation;
3. do not invent a URL;
4. return the exact project and screen identity;
5. request manual Stitch verification if needed;
6. mark the result `Preview verification required`, not `Approved reference`.

## 12. Artifact Registry

Maintain a module registry with at least:

| Field | Description |
|---|---|
| Module | owning module |
| Surface | screen/surface family |
| State | represented state |
| Viewport | physical target |
| Content Area | shell-aware available area |
| Project name/ID | retained Stitch project |
| Screen name/ID | stable output identity |
| Parent screen ID | revision/adaptation lineage |
| Preview URL | interactive review link |
| Prompt file/version | exact prompt used |
| Context manifest | attached authority versions |
| Export location | code/assets when available |
| Font status | loaded/fallback |
| Review status | current lifecycle |
| Notes | deviations/decisions |

Allowed status vocabulary:

```text
Planned
Context validated
Generated
In review
Revision requested
Approved reference
Preview verification required
Superseded
Blocked
```

## 13. Git retention

The module's design history should ultimately be retained in `dummy_tcs`.

Recommended structure:

```text
docs/stitch-design-library/
├── 00-library-guide.md
├── global/
├── execution/
├── modules/
│   └── <module>/
│       ├── manifest/
│       ├── screen-briefs/
│       ├── prompts/
│       ├── registry/
│       └── references/
└── implementation/
```

Retain:

- approved context documents;
- executable prompt files;
- context manifests;
- Artifact Registry;
- approved screenshots where useful;
- exported reference code/assets where available and permitted;
- review and supersession notes.

Do not commit signed or expiring preview URLs as if they were durable. Record the best stable link plus project/screen IDs.

Codex must not commit, push, or open a pull request without explicit authorization.

## 14. Runtime model and reasoning allocation

Model selection, reasoning level, retries, and credit allocation are runtime planning decisions.

They are not frozen in this runbook.

Before an actual execution batch, Codex may prepare a separate ephemeral execution plan mapping each prompt to the available Stitch model and reasoning mode. That plan should prioritize higher-capability execution for the most consequential design decisions while avoiding unnecessary cost for mechanical adaptations and state variants.

Do not persist provider-specific model allocation as durable design authority.

## 15. Failure handling

### Connector unavailable

- stop MCP execution;
- preserve the prepared prompts and manifests;
- report the missing capability;
- offer manual Stitch execution using the same upload package.

### Authentication or permission failure

- stop;
- do not attempt to bypass access controls;
- report the exact blocked operation;
- request the user to restore the authorized connection.

### Project not found

- verify recorded project ID;
- search/list projects once where supported;
- compare names and module identity;
- do not create a replacement project until continuity failure is confirmed.

### Generation timeout or unknown outcome

- query the project/screen list before retrying;
- do not blindly resubmit and create duplicates;
- if a new screen exists, retrieve it and record its identity;
- retry only when the previous attempt is confirmed absent or failed.

### Wrong or drifted output

- identify whether the cause is missing context, conflicting authority, prompt ambiguity, font failure, or Stitch interpretation;
- correct the smallest responsible layer;
- revise the identified screen;
- do not broadly expand prompt length without diagnosing the drift.

### Preview unavailable

- preserve project and screen IDs;
- retrieve alternate preview/share output where supported;
- mark manual verification required;
- do not approve based only on a low-resolution thumbnail.

### Export unavailable

- retain the approved preview and exact screen identity;
- record that export retrieval is unavailable;
- do not block design review when the interactive design is otherwise accessible;
- revisit export during implementation intake.

## 16. Stop conditions

Codex must stop before generation when:

- material product authority conflicts;
- the Screen Brief is missing;
- target state or viewport is consequentially undefined;
- the project/screen target is ambiguous;
- required assets are unavailable and no approved fallback exists;
- the connector cannot reliably identify the generated screen;
- execution requires new authorization;
- the user has requested review or planning but not external generation.

## 17. Batch completion checklist

A Stitch execution batch is complete only when:

- global/module grounding is valid for the authority versions used;
- each required screen exists in the intended project;
- each screen has a stable name and ID;
- interactive previews are available or explicitly marked for manual verification;
- every screen maps to a Screen Brief and prompt version;
- responsive/state lineage is recorded;
- review status is current;
- superseded output remains traceable;
- prompt/context/export artifacts are retained;
- no unauthorized Git or production changes were made.

## 18. Relationship to future implementation

After screens are approved, `05 — Implementation Consumption` will govern how Codex:

- compares Stitch composition with the current frontend;
- maps Aurora components;
- decides what to reuse, rebuild, or discard from generated exports;
- preserves backend/frontend contracts;
- implements responsive behavior;
- performs visual and interaction QA.

Do not begin that implementation workflow merely because a Stitch screen was generated.
