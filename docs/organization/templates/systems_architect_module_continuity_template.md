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

### Production ownership

State who owns actual production merge/deployment for this module.

---

## 4. Canonical Authority to Read

List only documents/contracts that are genuinely authoritative.

- `<path>` — `<what it governs>`
- `<path>` — `<what it governs>`

Do not include obsolete drafts unless they are needed to understand migration history.

---

## 5. Relevant Worker Charters

- `<worker charter path>`
- `<worker charter path>`

State any important permanent boundary, for example:

```text
Intelligence controls WHY / WHAT / WHEN.
Data Extraction controls HOW / CONNECTION / DELIVERY.
```

---

## 6. FROZEN / ACCEPTED DECISIONS

Only place decisions here that are genuinely accepted.

1. `<decision>`
2. `<decision>`

For each important decision, reference the canonical artifact where possible.

---

## 7. APPROVED DIRECTION — DETAILS OPEN

Use this for product direction that has been accepted in principle but still requires detailed contract decisions.

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

## 12. System Responsibility Map

Example:

| Responsibility | Primary owner | Inputs | Output / consumer |
|---|---|---|---|
| `<...>` | `<worker/system>` | `<...>` | `<...>` |

Each semantic responsibility should have one primary owner.

---

## 13. Existing Implementation Classification

Classify important existing components:

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

## 14. Worker Assignments — Completed

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

## 15. Worker Assignments — Active / Next

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

## 16. Current Repository / Runtime State

Capture exact state only when relevant:

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

Avoid writing "latest" without a concrete reference.

---

## 17. Known Risks / Constraints

Examples:

- provider/API dependency;
- unclear Product Authority;
- migration collision risk;
- incomplete external capability;
- legacy compatibility constraint;
- policy/compliance concern;
- performance/cost concern.

---

## 18. Immediate Next Action

Write **one** exact next action.

Example:

> `Systems Architect + Product Owner: freeze the first-session Creator Instagram onboarding journey before assigning Creator Intelligence processor design.`

Then optionally list the next 2–3 actions after it.

---

## 19. Explicit Do-Not-Do Constraints

Examples:

- do not reopen `<completed architecture>`;
- do not start implementation before `<decision>` is frozen;
- do not let frontend infer `<backend authority>`;
- do not call providers directly outside DE;
- do not merge AI-worker clone output into actual production;
- do not replace working canonical infrastructure merely for folder consistency.

---

## 20. Definition of This Phase's Completion

```text
<condition>
+
<condition>
+
<condition>
```

State the handoff boundary clearly so a new architect knows when to stop and which lifecycle phase follows.
