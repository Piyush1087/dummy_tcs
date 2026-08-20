# Gatekeeper v1 — Codex → Stitch Execution Runbook

**Project:** `Gatekeeper scan codex`  
**Parent screen:** none initially  
**Purpose:** Standard execution/reporting contract for a fresh Codex runner operating Stitch for Gatekeeper v1.

## 1. Preflight

Before generating UI, Codex must verify and report:

- Stitch project name exactly equals `Gatekeeper scan codex`;
- project ID;
- currently existing screen names/IDs;
- frozen Gatekeeper frontend authority commit/ref available to the runner;
- current visual family being worked;
- target viewport;
- exact representative state;
- whether the request is `GENERATE_NEW` or `EDIT_EXISTING`;
- parent/reference screen ID when editing/adapting within a family;
- any uploaded Gatekeeper context documents present in the Stitch project.

If project identity cannot be proven, stop with `STITCH_PROJECT_NOT_VERIFIED`.

## 2. Context supplied to Codex

Canonical semantic context:

- `frontend/gatekeeper/gatekeeper_frontend_state_contract.yaml`
- `frontend/gatekeeper/gatekeeper_screen_interaction_contract.md`
- `frontend/gatekeeper/stitch/gatekeeper_stitch_worker.md`
- `docs/design-system/AURORA_DESIGN_SYSTEM.md`

Production visual/reference context as needed:

- current homepage/brand-onboarding screenshot or production component reference;
- current URL-entry treatment;
- existing single-purpose test `Brand Intelligence · Identity dry-run` block only to identify it as removable test UI, not as design authority.

Process reference only:

- proven Campaign/Collaboration Stitch prompt examples and runbooks available to the runner.

Stitch itself cannot read GitHub unless Codex provides the relevant content or the files are separately uploaded to the Stitch project.

## 3. Execution order

Work family-by-family:

```text
A desktop → inspect/correct → A mobile → inspect/correct → family review
B desktop → inspect/correct → B mobile → inspect/correct → family review
C desktop → inspect/correct → C mobile → inspect/correct → family review
D desktop → inspect/correct → D mobile → inspect/correct → family review
```

Do not jump between families unless a blocking dependency requires it.

## 4. Prompt construction

Every generation/edit prompt should read like a design brief.

Include:

1. screen identity and viewport;
2. user goal and state;
3. relationship to the existing screen in this family;
4. visual hierarchy;
5. exact content/actions to show;
6. representative content values needed to make the composition concrete;
7. responsive intent when adapting to mobile;
8. acceptance conditions relevant to this state.

Avoid dumping the full application architecture into each prompt.

Avoid implementation terminology such as React components, Zod, endpoint payloads, reducers or database fields unless necessary to prevent a semantic error.

## 5. Family-specific prompt direction

### A — URL entry

Design the homepage Gatekeeper entry as a compact, confident brand-analysis starting point. Keep the current lightweight character around the URL field and below-input activity. Include URL, authorization attestation, Terms + Privacy acceptance, primary CTA, and one representative validation/activity condition. Do not turn processing into a separate route or large AI animation.

### B — Recovery

Design one reusable recovery panel directly beneath the same URL-entry area. Use a representative complex state with a concise status, explanation, two-level action hierarchy and an optional expanded email/review interaction. The panel should feel like a state of the existing entry module, not a separate error page.

### C — Confirmation

Design one concise pre-scan confirmation modal. Show detected brand/domain, assessed top-level Industry with a subtle Change affordance, what deeper Brand Intelligence will do, non-binding approximate-time treatment, optional-later work email/Meta note, review expectation, and `Start Brand Intelligence Scan`.

### D — Industry exception

Design the warning state within the same confirmation composition. Use the supported override example `D2C → AI / SaaS` for the primary reference. The same structure must be capable of expressing an unsupported/Coming Soon choice where confirming it stops automated onboarding.

## 6. Inspection checklist

After every Stitch response Codex must inspect, not merely relay it.

Check:

- correct project and screen lineage;
- correct viewport/device;
- no unintended extra navigation/full-page redesign;
- required frozen fields/actions are visible;
- no new supported Industry was introduced;
- Coming Soon is visually distinct when represented;
- no fake progress or provider names;
- no duplicate modal/success step;
- responsive hierarchy is deliberate;
- typography/spacing/control character is compatible with Aurora/project design context;
- copy is concise and does not invent product promises;
- visual composition is feasible for production frontend reconciliation.

If a deviation is bounded, edit the same screen. Regenerate only when the base composition is fundamentally unusable.

## 7. Required Codex output after each Stitch action

Return exactly this compact record before commentary:

```text
STITCH_EXECUTION_RECORD
project_name: Gatekeeper scan codex
project_id: <id>
action: GENERATE_NEW | EDIT_EXISTING
family: A | B | C | D
reference_name: <canonical reference name>
device: DESKTOP | MOBILE
viewport: <reported/requested viewport>
state: <represented state>
parent_or_source_screen_id: <id | NONE>
result_screen_name: <name>
result_screen_id: <id>
preview_url: <url if returned>
model: <model if returned/known>
context_version: <authority commit/ref>
prompt_version: <short local prompt version>
inspection: PASS | PASS_WITH_CORRECTIONS | FAIL
material_deviations:
- <none or concise items>
next_action: <EDIT_THIS_SCREEN | FAMILY_REVIEW | GENERATE_NEXT_REFERENCE | STOP>
```

Then provide a short human-readable inspection summary and, when available, the screenshot/preview for manual review.

Do not report `PASS` solely because Stitch returned a screen.

## 8. Canonical reference names

Use these names unless Stitch enforces another naming constraint:

1. `GK-ST-D01 — Gatekeeper URL Entry — Desktop`
2. `GK-ST-M01 — Gatekeeper URL Entry — Mobile`
3. `GK-ST-D02 — Gatekeeper Recovery — Desktop`
4. `GK-ST-M02 — Gatekeeper Recovery — Mobile`
5. `GK-ST-D03 — Pre-Scan Confirmation — Desktop`
6. `GK-ST-M03 — Pre-Scan Confirmation — Mobile`
7. `GK-ST-D04 — Industry Exception — Desktop`
8. `GK-ST-M04 — Industry Exception — Mobile`

## 9. Family review output

After desktop + mobile for a family are ready, Codex should return:

```text
STITCH_FAMILY_REVIEW
family: <A|B|C|D>
references:
- <screen name> | <screen id> | <device> | <inspection>
- <screen name> | <screen id> | <device> | <inspection>
shared_composition_consistent: YES | NO
responsive_transformation_credible: YES | NO
semantic_drift_detected: YES | NO
recommended_status: ACCEPT | CORRECT | REGENERATE
notes:
- <concise manual-review notes>
```

Stop for human review when `recommended_status` is `CORRECT` or `REGENERATE`, or when a new product/semantic ambiguity is discovered.

## 10. Accepted reference registration

When a human reviewer accepts a screen, record:

- project name/ID;
- canonical reference name;
- device;
- represented frontend state/family;
- Stitch screen ID;
- accepted version/status;
- source/parent screen when relevant;
- prompt/context version;
- any approved visual deviation from the initial prompt.

Generated HTML/screenshots remain reference artifacts only and must not be merged into production frontend as-is without Frontend AI Worker reconciliation.
