# Systems Architect — Module Continuity / Handoff Template

**Module / Program:** `<name>`  
**Status:** `<ACTIVE | PAUSED | COMPLETE | TRANSFER_READY>`  
**Last updated:** `<YYYY-MM-DD>`  
**Prepared by:** `<worker / role>`

## 1. Purpose

Use this document when a long-running product/system architecture stream may move to another chat, another Systems Architect AI Worker, or another human/AI owner.

The objective is:

> **A new Systems Architect should be able to resume the work safely without the prior conversation transcript and without mistaking discussion for frozen authority.**

Keep this document compact. Reference canonical artifacts rather than copying their contents.

---

## 2. Active Product Objective

Describe in 3–8 lines:

- what user problem is being solved;
- where this module sits in the product journey;
- what the desired end state is;
- what is explicitly outside the current scope.

---

## 3. Principal Repositories / Environments

### Architecture / authority repository

`<repo>`

### Backend implementation repository

`<repo>`

Branch / reference:

`<branch / SHA>`

### Frontend implementation repository

`<repo>`

Branch / reference:

`<branch / SHA>`

### Other repositories / services

- `<repo/service>` — `<purpose>`

### Production ownership / STOP boundary

State explicitly:

- where AI-worker implementation ends;
- who owns actual production merge/reconciliation;
- who owns production DB migration execution;
- who owns environment/secrets/AWS configuration;
- who owns deploy and production smoke test.

Default Creator Shop policy unless explicitly changed:

```text
AI workers
→ validated clone implementations
→ runtime/visual acceptance
→ final clone SHAs
→ developer handoff
→ STOP

human developer
→ actual production repo reconciliation/merge
→ production migration
→ AWS/runtime config + secrets
→ deployment
→ production smoke test
```

---

## 4. Canonical Authority to Read

List only documents/contracts that are genuinely authoritative.

- `<path>` — `<what it governs>`
- `<path>` — `<what it governs>`

Do not include obsolete drafts unless they are needed to understand migration history.

---

## 5. Relevant Worker Charters

Include, where applicable:

- Systems Architect
- UI/UX Design AI Worker
- Intelligence Engine AI Worker
- Data Extraction Engine AI Worker
- Frontend AI Worker
- backend/domain worker

State important permanent boundaries, for example:

```text
Intelligence controls WHY / WHAT / WHEN.
Data Extraction controls HOW / CONNECTION / DELIVERY.

UI/UX owns experience/visual direction and visual acceptance.
Frontend owns UI state/interaction contracts, Stitch coordination and implementation reconciliation.
```

---

## 6. FROZEN / ACCEPTED DECISIONS

Only place decisions here that are genuinely accepted.

1. `<decision>`
2. `<decision>`

Reference canonical authority where possible.

---

## 7. APPROVED DIRECTION — DETAILS OPEN

Use this for accepted direction that still requires detailed contract decisions.

1. `<direction>`
   - open detail: `<...>`
   - open detail: `<...>`

Do not let a specialist worker silently resolve these open details unless explicitly authorized.

---

## 8. OPEN PRODUCT / ARCHITECTURE DECISIONS

List active questions in priority order.

1. `<question>`
2. `<question>`

State which worker/role should resolve each one if known.

---

## 9. DEFERRED

Items intentionally outside the current MVP / phase:

- `<item>`
- `<item>`

Deferred does not mean rejected.

---

## 10. SUPERSEDED / DO NOT USE AS AUTHORITY

List old concepts/code paths/documents that a new worker might otherwise mistake for current direction.

- `<legacy concept/path>` — `<why superseded>`

---

## 11. Current Desired User Journey

Use a compact flow:

```text
Step A
  ↓
Step B
  ↓
Step C
```

Distinguish optional, blocking and asynchronous steps.

---

## 12. Product-to-Design-to-Implementation lifecycle

For material UI work, record which lifecycle stages are complete:

```text
Product Authority
→ UI/UX Experience Direction
→ content/copy envelope
→ UX Copy
→ semantic/backend/IE contracts
→ FE state/screen/interaction contracts
→ UI/UX Visual Direction Brief
→ Stitch preparation
→ Stitch execution
→ dual acceptance
→ backend/frontend implementation
→ runtime + visual acceptance
→ clone integration
→ developer handoff
```

If UI/UX work was skipped intentionally, state why.

---

## 13. System Responsibility Map

| Responsibility | Primary owner | Inputs | Output / consumer |
|---|---|---|---|
| `<...>` | `<worker/system>` | `<...>` | `<...>` |

Each semantic responsibility should have one primary owner.

---

## 14. Existing Implementation Classification

| Component / path | Classification | Notes |
|---|---|---|
| `<...>` | `REUSE` | `<...>` |
| `<...>` | `REUSE_WITH_RECONCILIATION` | `<...>` |
| `<...>` | `LEGACY_REFERENCE_ONLY` | `<...>` |

Allowed classifications:

```text
REUSE
REUSE_WITH_RECONCILIATION
COMPATIBILITY_ONLY
LEGACY_REFERENCE_ONLY
REPLACE
REMOVE_AFTER_MIGRATION
NOT_FOUND
```

---

## 15. UI/UX / Stitch Direction and Acceptance

For material Stitch/design work capture:

### Experience / Visual Direction authority

- `<path>` — project/module Visual Direction Brief
- `<path>` — family/screen visual brief if applicable

### Stitch context / accepted design authority

- project/branch/commit:
- accepted screen IDs/names:
- PNG/HTML/native caveats:

### Dual acceptance status

```text
CONTRACT_FIDELITY: <PASS | FAIL | NOT_RUN>
VISUAL_EXPERIENCE_QUALITY: <PASS | FAIL | DEFERRED_POLISH | NOT_RUN>
```

Visual outcomes may use:

```text
VISUAL_ACCEPT
VISUAL_ACCEPT_WITH_IMPLEMENTATION_NOTES
VISUAL_CORRECTION_REQUIRED
VISUAL_RETHINK_REQUIRED
DEFERRED_POLISH
```

State any design lessons that should become future process input.

---

## 16. Worker Assignments — Completed

For each completed assignment capture:

### `<worker / task>`

- objective:
- source authority:
- repository/branch:
- result/status:
- final commit/SHA if relevant:
- key artifacts:
- validation:
- unresolved follow-up:

---

## 17. Worker Assignments — Active / Next

### `<worker>`

**Objective:**  
`<...>`

**Owned scope:**

- `<...>`

**Do not own:**

- `<...>`

**Expected return:**

- `<...>`

**Acceptance:**

- `<...>`

---

## 18. Current Repository / Runtime State

### Backend

- branch:
- SHA:
- migrations:
- tests:
- environment dependencies:

### Frontend

- branch:
- SHA:
- tests/build:
- runtime state:

### Architecture repository

- relevant branch/SHA:

Avoid writing `latest` without a concrete reference.

---

## 19. Runtime / Visual Acceptance Gates Remaining

State which gates still remain, for example:

```text
backend local validation
frontend reconciliation
end-to-end runtime acceptance
visual/runtime acceptance
clone integration
final integrated-head regression
```

For each gate specify owner and pass condition.

---

## 20. Known Risks / Constraints

Examples:

- provider/API dependency;
- unclear Product Authority;
- migration collision risk;
- incomplete external capability;
- legacy compatibility constraint;
- policy/compliance concern;
- performance/cost concern;
- visual-quality debt / deferred polish;
- Stitch artifact caveat;
- production environment dependency.

---

## 21. Immediate Next Action

Write **one** exact next action.

Example:

> `Frontend AI Worker: resume the already-completed reconciliation audit against backend SHA X and return READY_FOR_FINAL_RUNTIME_ACCEPTANCE.`

Then optionally list the next 2–3 actions after it.

---

## 22. Explicit Do-Not-Do Constraints

Examples:

- do not reopen `<completed architecture>`;
- do not start implementation before `<decision>` is frozen;
- do not let frontend infer `<backend authority>`;
- do not call providers directly outside DE;
- do not let Stitch invent Product meaning;
- do not accept Stitch solely on contract fidelity;
- do not spend unlimited design cycles on micro-polish;
- do not merge AI-worker clone output into actual production;
- do not execute production migration/deploy unless Product explicitly reassigns ownership;
- do not replace working canonical infrastructure merely for folder consistency.

---

## 23. Developer Handoff Checklist

Before declaring the AI-worker phase complete, record:

### Frontend

- clone repository;
- final accepted branch/SHA;
- changed files / module scope;
- tests/build results;
- runtime/visual caveats;
- accepted Stitch references if relevant.

### Backend

- clone repository;
- final accepted branch/SHA;
- migrations;
- environment variables/provider credentials;
- tests/build results;
- deployment order/smoke requirements.

### Architecture authority

- Product Authority refs;
- IE/DE/backend contracts;
- FE state/interaction authority;
- UI/UX visual briefs;
- Stitch library/ref where relevant.

### Explicit stop statement

> `Developer now owns production reconciliation/merge, migration execution, AWS/runtime configuration, deployment and production smoke test.`

---

## 24. Definition of This Phase's Completion

```text
<condition>
+
<condition>
+
<condition>
```

State the handoff boundary clearly.

For modules ending at developer handoff, completion should normally include:

```text
accepted backend clone implementation
+
accepted frontend clone implementation
+
end-to-end runtime acceptance
+
visual/runtime acceptance where applicable
+
final clone SHAs
+
complete developer handoff
→ STOP
```

Production deployment itself is not part of AI-worker completion unless Product explicitly changes ownership.
