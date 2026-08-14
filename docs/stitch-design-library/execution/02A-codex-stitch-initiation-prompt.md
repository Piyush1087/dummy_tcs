# 02A — Codex Stitch Initiation Prompt

**Status:** Review draft 0.1  
**Audience:** Codex Desktop operator/agent  
**Scope:** Initialize the retained Campaign Stitch project and generate the first Create Campaign representative screen  
**Sent to Stitch:** No  
**Purpose:** Provide a bounded, repeatable starting instruction for MCP-connected Stitch execution  
**Last material update:** 14 August 2026

## Operator use

Give the prompt below to Codex Desktop after the complete execution-layer package has been committed to `Piyush1087/dummy_tcs`.

Before use, resolve the exact branch head and current connector capabilities. Do not guess missing IDs or model identifiers.

## Initiation prompt

```text
You are initiating the Creator Shop Campaign design project through the available Stitch MCP connector.

Repository authority
- Repository: Piyush1087/dummy_tcs
- Branch/ref: docs/stitch-design-library
- Stitch library root: docs/stitch-design-library/
- Active module: Campaign
- Active Phase G surface: Create Campaign only

Goal for this run
1. Perform Codex preflight and connector capability discovery.
2. Find and reuse the retained Stitch project `Creator Shop — Campaign`, or create it once only if no valid retained project exists.
3. Run platform grounding without generating UI.
4. Validate the grounding response against the supplied authority.
5. Run Create Campaign module grounding without generating UI.
6. Validate the module response against the supplied authority.
7. Generate only the first representative screen:
   `Campaign — Create Strategy — Desktop 1440 — Scheduled KPI Ready — v1`.
8. Retrieve its exact project/screen identity, interactive preview link, and available export/code identity.
9. Stop and return the result for human review. Do not generate Step 2, Step 3, mobile, or state variants in this run.

Read first — Codex-only
- docs/stitch-design-library/00-library-guide.md
- docs/stitch-design-library/execution/02-codex-stitch-execution-runbook.md
- docs/stitch-design-library/execution/02B-create-campaign-attachment-manifest.md
- docs/stitch-design-library/modules/campaign/03-campaign-stitch-manifest.md
- docs/stitch-design-library/modules/campaign/03A-campaign-surface-authority-matrix.md
- docs/stitch-design-library/modules/campaign/03B-create-campaign-ux-authority.md
- docs/stitch-design-library/modules/campaign/03D-create-campaign-state-matrix.md
- docs/stitch-design-library/modules/campaign/03F-create-campaign-stitch-handoff-map.md
- docs/stitch-design-library/modules/campaign/screen-briefs/create-campaign/README.md
- docs/stitch-design-library/modules/campaign/screen-briefs/create-campaign/04A-campaign-strategy.md

Authority and scope rules
- Aurora Design System 5.0 must be followed literally.
- Stitch designs the Content Area inside the existing global shell.
- Create Campaign is one three-step flow: Campaign Strategy → Creator Strategy → Commercial Strategy.
- Campaign Page and Workspace surfaces are not active screen-generation authority in this run.
- Deliverables belong to Briefs and must not appear in Create Campaign.
- Use numeric minimum/maximum followers, not follower tiers.
- Negotiable compensation has one `Payout Starting From` field, not minimum and maximum fees.
- KPI and Campaign currency are system-derived and read-only.
- Do not introduce TypeScript, React, state-management, or export-format restrictions into the Stitch prompt.
- Do not send Codex execution mechanics, GitHub paths, or production implementation policy to Stitch.
- Stitch cannot access GitHub. Resolve the exact local files and upload/attach their bytes through the connector.
- Do not rely on Stitch memory silently. Validate retained project context or reattach the minimum required packet.

Preflight
1. Verify the repository ref and record the exact commit SHA.
2. Inspect available Stitch MCP operations and actual model/reasoning options. Do not invent operation or model names.
3. Determine whether the connector supports project listing/retrieval/creation, file attachment, prompting, screen generation/revision, project-screen listing, interactive preview retrieval, and code/export retrieval.
4. Check the Campaign Artifact Registry for an existing project ID. If absent, list/search Stitch projects once for the exact name `Creator Shop — Campaign`.
5. Reuse a matching project after verifying identity and existing lineage. Create a new project only when continuity is definitively absent.
6. Record the runtime model allocation supplied separately by the operator. It is not a persistent library rule.
7. Build the attachment packets exactly from the attachment manifest.
8. Stop before generation if any canonical file is missing, the project identity is ambiguous, or reviewable preview/screen identity cannot be retrieved.

Stage G0 — Platform grounding, no UI
Attach exactly the G0 packet from the manifest.
Send the G0 prompt from the manifest.
Require a concise textual confirmation only.
Validate every required point. If the response is materially wrong, correct grounding once with a focused clarification. Do not generate UI until accepted.

Stage G1 — Campaign/Create Campaign grounding, no UI
Attach exactly the G1 packet from the manifest.
Send the G1 prompt from the manifest.
Require a concise textual confirmation only.
Reject any response that revives Campaign Page generation, Deliverables, follower tiers, dual Negotiable fees, speculative metrics, editable KPI/currency, or a duplicate app shell.
If accepted, record the grounding version in the run report/registry.

Stage S1 — First representative screen
Use the S1 packet from the manifest and the exact 04A Screen Brief.
Generate only:
`Campaign — Create Strategy — Desktop 1440 — Scheduled KPI Ready — v1`.

The screen must use the representative Campaign and approved Pulse KPI values supplied in the Screen Brief.

Do not ask Stitch to create Step 2, Step 3, mobile, errors, or Campaign Page screens yet.

Output retrieval
After generation:
1. retrieve/confirm the exact Stitch project name and stable project ID;
2. retrieve the exact screen/file name and stable screen/file ID;
3. retrieve an interactive preview URL or best available stable review link;
4. retrieve the generated code/export identity and location where the connector supports it;
5. retrieve a screenshot/thumbnail only as supplemental evidence, not as the primary review artifact;
6. record viewport, represented state, prompt version, attachments and versions, parent lineage, and any Stitch-reported deviation;
7. list project screens once if required to verify the new screen exists in the intended project.

Return to the operator
- Preflight summary and exact repository commit used
- Connector capabilities and limitations relevant to the run
- Exact runtime model allocation actually used
- Existing or newly created Campaign Stitch project name/ID
- G0 grounding result: accepted/corrected/blocked
- G1 grounding result: accepted/corrected/blocked
- S1 exact screen name/ID
- Interactive preview link
- Export/code identity and retrieval location, if available
- Supplemental screenshot/thumbnail, if available
- Exact attachment manifest and prompt versions used
- Deviations, ambiguities, or blockers
- Explicit confirmation that no later screen was generated

Stop after returning S1 for review. Do not revise it or continue unless the operator explicitly approves or supplies bounded revision feedback.
```

## Runtime overlay

The operator supplies changing runtime choices separately when launching the prompt, including:

- exact model/reasoning allocation;
- current branch/commit;
- existing Artifact Registry project ID if known;
- retry authorization for the specific run.

These values are intentionally not frozen in this template.
