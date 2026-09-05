# Brand Payouts — P2 Contrast Correction + Systems Architect Autonomy Amendment V1

`BRAND_PAYOUTS_P2_CONTRAST_CORRECTION_AND_SA_AUTONOMY_AMENDMENT_V1`

## 0. Status and authority

**STATUS: AUTHORIZED**

This is a Parent/Product amendment to the accepted Brand Payouts execution authority.

It supplements, and does not replace, the frozen Product Authority, accepted architecture, finite execution plan, and prior P2 recovery authority.

The commit containing this file is the authoritative instruction SHA. The Brand Payouts Systems Architect must verify the exact commit, this file, current remote heads, and the execution ledger before acting.

This amendment:

1. authorizes one additional bounded P2 accessibility correction for the confirmed serious color-contrast defect;
2. delegates P2 checkpoint acceptance to the Systems Architect after all gates pass;
3. requires the Systems Architect to continue automatically to the next eligible provider-neutral phase;
4. removes routine Parent checkpoint acceptance as an execution requirement; and
5. replaces the exhausted cross-phase correction counter as a Parent-stop trigger with bounded per-phase Systems Architect correction authority.

It does **not** authorize a Product change, architecture expansion, migration, provider action, financial mutation beyond an already authorized phase, canonical merge, deployment, or production enablement.

---

## 1. Frozen durable state

```text
Product Authority
= f15a91d0ace8b2c424a539d79dbb120869233105

Accepted architecture / finite plan
= 3fb6b4246aa5f2ecb71c3bbfe99c56e395f30a92

Prior execution authority
= 689feb7a46eb2d52b984ce083be046ac6d38657d

Current execution-ledger stop
= 2e6720bce1aa9da082d2e18ef8a2e6e3769e39f9

BP-P0-CONTRACT-BASE
= ACCEPTED

BP-P1-BACKEND-READ
= ACCEPTED

Accepted P1 backend
= 60385abbd12d5a363615100c463ac6755ce848ea

Current P2 recovery backend
= 119397ff6836ad12846c1e948409d8d49185c408

Current P2 frontend candidate
= 5df18df718e8a69dd22d7c31fab804716d87329a

BP-P2-FIRST-VERTICAL-SLICE
= IMPLEMENTED_PENDING_ACCEPTANCE_BLOCKED

Current blocker
= P2_PAYOUTS_SERIOUS_COLOR_CONTRAST

Migrations
= NONE

Provider actions
= NONE
```

Do not reopen P0 or P1.

Preserve the backend recovery at `119397ff6836ad12846c1e948409d8d49185c408` unless a fresh verification proves remote drift or a genuine regression.

Continue the frontend from `5df18df718e8a69dd22d7c31fab804716d87329a`; do not rebuild P2 from the original frontend base.

---

## 2. Current defect classification

The confirmed failure is:

```text
P2_PAYOUTS_SERIOUS_COLOR_CONTRAST
```

Three Brand Payouts elements fail Axe serious color contrast at:

```text
390
767
768
1440
```

This is classified as:

```text
BOUNDED_FRONTEND_ACCESSIBILITY_DEFECT
```

It is not, by itself:

- a Product decision;
- a financial semantic change;
- an authorization change;
- a backend-contract change;
- a schema/migration requirement;
- a provider requirement; or
- a reason to reopen the accepted frontend architecture.

---

## 3. Authorized P2 correction

Authorize one additional P2 source correction.

### Production source ceiling

```text
MAX_PRODUCTION_FILES_CHANGED
= 1
```

The only authorized production file is:

```text
src/features/brand-payouts/brand-payouts.css
```

Targeted test/evidence files may be added or updated only where necessary to prove the contrast correction. They do not count toward the one-production-file ceiling, but must remain narrowly scoped.

### Allowed work

- identify the exact three failing elements/selectors and their foreground/background combinations;
- correct those combinations locally within the Brand Payouts stylesheet;
- use existing Aurora tokens where they already satisfy the required contrast;
- otherwise use the smallest feature-local CSS value/variable needed to meet the accepted accessibility threshold;
- preserve component hierarchy, layout, responsive behavior, semantic copy, and interaction behavior;
- add a targeted contrast regression where the repository/test stack can prove it deterministically;
- rerun the complete browser evidence matrix after the source correction.

### Forbidden work

Do not modify:

- global Aurora tokens;
- global Aurora components;
- shared Button/Badge/Card implementations;
- JSX/TSX component structure;
- Product copy or financial terminology;
- backend contracts;
- RBAC/redaction;
- financial calculations;
- schema or migrations;
- provider configuration or code;
- Razorpay state;
- unrelated CSS cleanup.

If the contrast defect cannot be corrected within the one authorized production file without materially degrading another accepted state, stop as:

```text
MATERIAL_UI_ARCHITECTURE_CONFLICT
```

and return exact evidence.

---

## 4. Required validation

After the CSS correction, run all of the following.

### Targeted

- Axe color-contrast check for each previously failing element;
- all required widths: 390, 767, 768, and 1440;
- light/dark or state variants actually used by the Payouts surface, where applicable;
- targeted frontend contrast/accessibility regression.

### Frontend source gates

- Brand Payouts focused tests;
- complete frontend test suite;
- typecheck;
- changed-file lint;
- changed-file formatting;
- production build;
- `git diff --check`.

### Complete browser acceptance rerun

Do not stop after confirming the three contrast fixes. Complete the full outstanding P2 browser matrix from the accepted finite execution plan and prior recovery authority, including:

- Owner;
- Finance Admin;
- Campaign Manager;
- unauthorized/cross-Brand behavior;
- loading and independently loading sections;
- partial, stale, refreshing, empty/new Brand, ready, unavailable, and legacy-unreconciled states;
- obligation/activity detail;
- pagination/load-more;
- Settings Add funds and Brand Return deep links;
- browser Back and refresh restoration;
- keyboard-only operation;
- visible focus;
- accessible names/labels;
- drawer/sheet focus entry, close, and return;
- no document-level horizontal overflow;
- correct behavior at the 767/768 breakpoint;
- no protected financial content before authorization;
- no client-authored financial or due-date calculation;
- no fixed 30/70, TDS, synthetic document, release, reversal, mark-paid, provider-ID, or raw-diagnostic exposure;
- no unexpected Payouts console or network errors.

Preserve/reverify the already passing backend, HTTP/RBAC, schema-valid response, financial-read-purity, startup, and provider-disabled evidence. A full unnecessary backend rewrite or correction is not authorized.

---

## 5. Commit, ledger, and P2 acceptance

If all P2 gates pass:

1. commit and push the bounded frontend correction as a descendant of `5df18df718e8a69dd22d7c31fab804716d87329a`;
2. record the exact file/test/evidence scope;
3. update and push the execution ledger;
4. record the contrast findings as closed;
5. bind the final backend and frontend SHAs;
6. set:

```text
BP-P2-FIRST-VERTICAL-SLICE
= ACCEPTED

P2_REVIEW_OWNER
= SYSTEMS_ARCHITECT

P2_PARENT_REVIEW
= DELEGATED
```

7. continue automatically to the next eligible provider-neutral phase.

Do not return merely to ask Parent to accept P2.

If a local desktop browser relay is technically necessary, create the complete runner prompt as a Git-hosted Markdown artifact and return only its exact commit permalink. The relay is transport, not checkpoint approval. After evidence is supplied, the Systems Architect resumes and completes the checkpoint itself.

---

## 6. Systems Architect checkpoint autonomy from this point forward

Freeze:

```text
TECHNICAL_CHECKPOINT_REVIEW_OWNER
= SYSTEMS_ARCHITECT

ROUTINE_PARENT_CHECKPOINT_ACCEPTANCE
= NOT_REQUIRED

SYSTEMS_ARCHITECT_SELF_ACCEPT_CORRECT_CONTINUE
= AUTHORIZED
```

The Systems Architect must conduct its own technical checkpoint review, commit/push accepted checkpoints, update the ledger, and continue to the next eligible phase without returning to Parent for routine approval.

This includes routine acceptance of:

- frontend/backend implementation checkpoints;
- focused/full test gates;
- build/type/lint/format gates;
- runtime/browser/accessibility gates;
- provider-disabled deterministic-fake gates;
- bounded compatibility corrections already inside frozen Product and architecture;
- non-serializing eligible work when another lane is blocked.

### Per-phase bounded correction authority

Historical corrections remain recorded; they do not automatically exhaust all future routine technical correction authority.

For each new phase or checkpoint, the Systems Architect may supervise up to:

```text
MAX_DISTINCT_BOUNDED_CORRECTIONS_PER_PHASE
= 2
```

provided each correction:

- remains inside frozen Product/architecture scope;
- does not change financial authority or security semantics;
- does not create or alter a migration;
- does not add provider assumptions/actions;
- is limited to no more than three backend production files or five frontend production files unless the accepted phase defines a lower ceiling;
- includes a targeted regression;
- reruns affected focused/full gates;
- is fully recorded in the ledger.

The previous cumulative P0–P5 correction total remains telemetry and historical evidence. It is no longer, by itself, a Parent-stop condition.

A repeated identical failure after its bounded correction, more than two distinct corrections in one phase, semantic uncertainty, security/financial invariant uncertainty, or need to exceed the file ceiling remains a stop.

---

## 7. Non-delegable boundaries retained

The Systems Architect must still stop for an actual requirement to:

- make or change a Product decision;
- materially change accepted architecture;
- create/apply M1, M2, or another migration without the exact required human migration acceptance;
- perform a destructive migration;
- waive financial authorization, cross-Brand isolation, privacy, or security invariants;
- invent or alter upstream C-03/C-04/Campaign/C-05 authority;
- inspect credentials outside an already authorized bounded lane;
- perform Razorpay/provider mutation or controlled Test action without an exact separate envelope;
- enable production/provider behavior;
- merge to canonical `development`/`main` where separate owner acceptance remains required.

Do not manufacture a Parent stop for a passing technical checkpoint or a bounded mechanical source correction inside the delegated limits.

---

## 8. Immediate instruction

Resume from ledger SHA:

```text
2e6720bce1aa9da082d2e18ef8a2e6e3769e39f9
```

Verify remote heads and clean worktrees.

Apply the one-file Brand Payouts contrast correction.

Run the targeted and complete P2 validation matrix.

If all gates pass, self-accept P2, commit/push the ledger binding, and continue automatically to the next eligible provider-neutral phase.

Do not return with only a plan, progress summary, or request for routine checkpoint acceptance.

Return only for:

- an unavoidable Git-hosted local-runner relay;
- a retained non-delegable boundary;
- a circuit breaker; or
- final provider-disabled developer-handoff readiness.

Successful immediate state:

```text
BP-P2-FIRST-VERTICAL-SLICE
= ACCEPTED_BY_SYSTEMS_ARCHITECT

P3_NEXT_ELIGIBLE_LANE
= STARTED_OR_RECORDED_WITH_EXACT_DEPENDENCY_STATUS

MIGRATIONS
= NONE_UNLESS_SEPARATELY_AUTHORIZED

PROVIDER_ACTIONS
= NONE
```
