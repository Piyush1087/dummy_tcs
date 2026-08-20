# Gatekeeper v1 — Codex → Stitch Execution Runbook

**Version:** 1.1  
**Project:** `Gatekeeper scan codex`  
**Parent screen:** none initially

## 1. Preflight

Before generating UI, Codex must verify and report:

- exact Stitch project name = `Gatekeeper scan codex`;
- project ID;
- current screen names/IDs;
- current Gatekeeper authority ref available to Codex;
- manual Stitch context pack is present in the project;
- current visual family;
- target device/viewport;
- `GENERATE_NEW` or `EDIT_EXISTING`;
- parent/source screen ID when applicable.

If the project cannot be verified, stop with `STITCH_PROJECT_NOT_VERIFIED`.

If the manual Gatekeeper context pack cannot be verified, stop with `STITCH_CONTEXT_NOT_READY`.

## 2. Context boundary

### Codex reads repository authority

Codex may read:

- `frontend/gatekeeper/gatekeeper_frontend_state_contract.yaml`
- `frontend/gatekeeper/gatekeeper_screen_interaction_contract.md`
- `frontend/gatekeeper/stitch/gatekeeper_stitch_screen_contracts.md`
- `frontend/gatekeeper/stitch/gatekeeper_stitch_worker.md`
- `frontend/gatekeeper/stitch/gatekeeper_stitch_context_manifest.md`
- Aurora/front-end source and prior Stitch process references as needed.

### Stitch receives project-level context manually

The user uploads the Gatekeeper documents listed in the context manifest directly into `Gatekeeper scan codex` before the first design prompt.

**Codex must not re-feed those documents to Stitch through prompts.**

Prompts should assume Stitch has already read the project documents and should only tell the designer what section/state to design now.

## 3. Execution order

```text
A desktop → inspect/correct → A mobile → inspect/correct → family review
B desktop → inspect/correct → B mobile → inspect/correct → family review
C desktop → inspect/correct → C mobile → inspect/correct → family review
D desktop → inspect/correct → D mobile → inspect/correct → family review
```

Do not jump between families unless blocked.

## 4. Prompt construction

Write prompts as concise design briefs.

Include only what is needed for the current section:

1. screen/reference name;
2. desktop/mobile target;
3. user goal/state;
4. what part of the existing composition to retain;
5. required visible content/actions;
6. representative content if needed;
7. desired hierarchy and responsive intent.

Do not paste the frontend contract, backend contract, design system or project context into each prompt.

Avoid React/API/schema/database terminology.

## 5. Family direction

### A — URL entry

Design the homepage Gatekeeper starting section. Keep the existing lightweight brand-analysis character. Include Website URL, authorization attestation, Terms + Privacy acceptance, `Analyze My Brand`, and a lightweight below-input state treatment suitable for validation or real activity.

### B — Recovery

Design a reusable recovery state directly below the same entry area. Use a complex representative state with status, concise explanation, primary/secondary action and optional email/review expansion.

### C — Confirmation

Design one concise pre-scan confirmation modal showing brand/domain, assessed top-level Industry with subtle Change affordance, what the deeper Brand Intelligence scan will do, an approximate-time treatment, optional-later work email/Meta note, review expectation and `Start Brand Intelligence Scan`.

### D — Industry exception

Design the warning state inside the same confirmation composition. Primary reference: supported override `D2C → AI / SaaS`. The structure must also work for an unsupported/Coming Soon selection where confirming it stops automated onboarding.

## 6. Inspection checklist

After every Stitch action Codex inspects:

- correct project and lineage;
- correct device/viewport;
- required content/actions present;
- no unsupported semantic invention;
- Coming Soon visually distinct when shown;
- no fake progress/provider names;
- no duplicate success/modal step;
- concise copy;
- credible responsive transformation;
- feasible production composition;
- continuity with the accepted screen in the same family.

If deviation is bounded, edit the same screen. Regenerate only if the base composition is fundamentally unusable.

## 7. Required Codex output after each Stitch action

```text
STITCH_EXECUTION_RECORD
project_name: Gatekeeper scan codex
project_id: <id>
action: GENERATE_NEW | EDIT_EXISTING
family: A | B | C | D
reference_name: <canonical reference name>
device: DESKTOP | MOBILE
viewport: <requested/reported viewport>
state: <represented state>
parent_or_source_screen_id: <id | NONE>
result_screen_name: <name>
result_screen_id: <id>
preview_url: <url if returned>
model: <model if known>
authority_ref: <dummy_tcs ref>
prompt_version: <short version>
inspection: PASS | PASS_WITH_CORRECTIONS | FAIL
material_deviations:
- <none or concise items>
next_action: EDIT_THIS_SCREEN | FAMILY_REVIEW | GENERATE_NEXT_REFERENCE | STOP
```

Then give a short inspection summary and screenshot/preview where available.

## 8. Canonical reference names

1. `GK-ST-D01 — Gatekeeper URL Entry — Desktop`
2. `GK-ST-M01 — Gatekeeper URL Entry — Mobile`
3. `GK-ST-D02 — Gatekeeper Recovery — Desktop`
4. `GK-ST-M02 — Gatekeeper Recovery — Mobile`
5. `GK-ST-D03 — Pre-Scan Confirmation — Desktop`
6. `GK-ST-M03 — Pre-Scan Confirmation — Mobile`
7. `GK-ST-D04 — Industry Exception — Desktop`
8. `GK-ST-M04 — Industry Exception — Mobile`

## 9. Family review

```text
STITCH_FAMILY_REVIEW
family: <A|B|C|D>
references:
- <name> | <id> | <device> | <inspection>
- <name> | <id> | <device> | <inspection>
shared_composition_consistent: YES | NO
responsive_transformation_credible: YES | NO
semantic_drift_detected: YES | NO
recommended_status: ACCEPT | CORRECT | REGENERATE
notes:
- <concise notes>
```

Stop for human review if correction/regeneration is recommended or a semantic ambiguity appears.

## 10. Registration boundary

Accepted generated HTML/screenshots remain visual reference artifacts only. Do not merge generated source directly into production frontend.
