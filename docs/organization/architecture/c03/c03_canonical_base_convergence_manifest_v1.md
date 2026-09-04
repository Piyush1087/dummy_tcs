# C-03 Canonical Base Convergence Manifest V1

**Artifact:** `C03_CANONICAL_BASE_CONVERGENCE_MANIFEST_V1`
**Module:** C-03 — Creator Campaign Participation / Apply
**Status:** ACCEPTED

## 1. Immutable implementation bases

```text
BACKEND_BASE
Piyush1087/creator-commerce-backend-v2-clone
development@4c5f42858b950b7cd342f8972f99f548f3daa942

FRONTEND_BASE
Piyush1087/creator-commerce-frontend-v2-clone
development@323658d4b147b95b5629ff8d91fa90b8fe9077e4
```

All C-03 implementation branches must be created from these exact commits after a final remote-head recheck. A changed `development` head is a circuit breaker until its ancestry and diff are re-audited. No feature line is a substitute base.

## 2. Accepted upstream ancestry

| Module | Backend immutable runtime | Frontend immutable runtime | Relationship to C-03 base |
|---|---|---|---|
| C-01 Creator Entry | `3ec01751d28cfa60840ecf97d95c706f94c3dec9` | `b50c36fd4b99b6e0ec0718291d794d7a58353f4c` | Both are ancestors of their canonical C-03 base. |
| C-05 Creator Settings/shell | `156d5834266077be7e2b6a2d459bae5489edbbd6` | `323658d4b147b95b5629ff8d91fa90b8fe9077e4` | Backend is an ancestor; frontend is the exact C-03 base. |

Durable upstream evidence is already present on the implementation bases:

- `docs/ai-collaboration/c01-module-closeout-v1.md`;
- `docs/ai-collaboration/c01-developer-code-integration-handoff-v1.md`;
- `docs/ai-collaboration/c05-module-closeout-v1.md`;
- `docs/ai-collaboration/c05-developer-code-integration-handoff-v1.md`.

C-03 extends their typed seams. It does not reimplement authentication, Creator workspace resolution, Team admission, or provider credential lifecycle.

## 3. Legacy-reference separation

```text
PRIMARY_LEGACY_REFERENCE

backend
feature/c01-c05-creator-integration@dc1c9ac97ff26833451db7cefb357689d9415e27

frontend
feature/c01-c05-creator-integration@314c90e2c18f99f87d0732b759fed837e90e1cdd
```

These are the most recent materially complete Creator Campaign/Apply references. They are reviewed file-by-file as behavioral and UX evidence only. Their commits, schemas, migrations, and module graphs must not be merged or cherry-picked wholesale.

Reusable evidence is limited to:

- responsive Campaign telemetry and table-to-card transformations;
- Opportunity detail information-density and navigation rhythm;
- an overlay selection/review interaction;
- existing test ideas for return-to-Campaign continuation;
- low-level Aurora and PDF rendering techniques where still present on the canonical base.

Explicitly rejected legacy semantics are Marketplace enumeration/search/cross-sell, match-score authority, handle identity, `UceCampaignCollaboration` as applicant truth, Product-only selection, stock gating, one `already_applied` value, fee proposal capture, 30/70 escrow language, destructive reactivation, sibling supersession, and Campaign × Creator Collaboration uniqueness.

## 4. Convergence rule

```text
canonical base
+ accepted authority contracts
+ newly implemented C-03 adapters/domain services/migrations/tests
= C-03 candidate
```

The convergence method is additive-first and semantic:

1. Preserve the canonical base history.
2. Implement C-03 against accepted C-01/C-05 and shared Campaign seams.
3. Port a legacy technique only after an explicit contract review.
4. Recreate tests against frozen C-03 semantics rather than copying stale assertions.
5. Quarantine legacy rows/routes until migration evidence proves a safe mapping.
6. Integrate only accepted checkpoint commits by normal fast-forward or reviewed non-force merge.

## 5. Backend convergence inventory

| Current canonical area | Treatment | C-03 destination |
|---|---|---|
| `src/features/creator-entry` | ADAPT | Extend the accepted digest-only continuation with typed Campaign ingress, invitation reference, subject/workspace binding, and safe attribution. |
| `src/features/creator-settings/team` | REUSE + EXTEND | Reuse `CreatorWorkspaceActorService`; add distinct C-03 VIEW, APPLY, and WITHDRAW_PENDING capabilities while retaining separate actor and Owner subject. OWNER/MANAGER receive all three; ASSISTANT receives VIEW/APPLY only. |
| `CreatorSocialIntegration` and current access predicates | CONSOLIDATE | One provider-neutral Opportunity capability evaluator consumed by C-01, C-05, and C-03. |
| `UceCampaign`, `UceCampaignAsset`, `CanonicalCampaignBrief`, legacy Campaign tables | ADAPT + MIGRATE | Produce one canonical Campaign/Asset/Brief adapter; converge rich Brief/Deliverable/rights persistence before new canonical Applications. |
| `UceApplication` / `UceApplicationSnapshot` | EXTEND IN PLACE | Remain the only Application aggregate/table family; add canonical subject, actor, Asset/Brief, snapshot-version, transition, event, and idempotency authority. |
| `UceCampaignCreator` | COMPATIBILITY GROUPING | May provide upstream grouping/read context, but handle/email/review state never establishes C-03 subject or access authority. |
| `src/features/creator-marketplace` | QUARANTINE / EXTRACT | Extract no Marketplace behavior. Move reusable low-level continuation/access code behind C-03-owned Opportunity ports. |
| `src/features/creator-uce` | RETIRE MUTATION | Existing Apply mutation returns a stable retirement response at cutover; any retained reads are visibly compatibility-only. |
| `Collaboration` | BOUNDED C-04 RECONCILIATION | Add unique Application lineage and remove Campaign × Creator uniqueness; provision only from an approved immutable Application snapshot. |
| Notifications | EXTEND | Add append-only Application events/outbox and Creator-workspace notification scope without replacing current Brand delivery infrastructure. |
| PDF | NEW C-03 PROJECTION, REUSE LIBRARIES | Serve a snapshot-only Brief Pack projection; no mutable Brief rebuild and no persisted binary requirement. |

## 6. Frontend convergence inventory

| Current canonical area | Treatment | C-03 destination |
|---|---|---|
| Accepted C-05 application shell and mobile navigation | REUSE | Add one `Campaigns` destination with `Opportunities` and `My Applications` children. |
| Aurora tokens, Card, Button, Badge/Chip, Alert, Tabs, SideDrawer | REUSE + HARDEN | Preserve visual grammar; correct interactive semantics, focus, keyboard behavior, and portable mobile drawer geometry where required. |
| `src/features/creator-campaigns` | REPLACE SEMANTICS | Reconcile into Opportunity, Application history, and Apply flow state families. Do not preserve Marketplace domain assumptions. |
| public Marketplace routes | RETIRE / REDIRECT BOUNDEDLY | Canonical Campaign entry uses a neutral Campaign route and typed C-01 continuation. No browse-all destination is exposed by C-03. |
| current route-wide Creator platform guard | SPLIT | Gate new Opportunity commercials/Apply by Instagram; allow team-authorized historical Applications and Brief Packs during recovery. |
| legacy detail/command/history components | MANUAL PORT ONLY | Reuse layout ideas after API/state review; no direct branch merge. |
| jsPDF / `jspdf-autotable` | REUSE | Add a feature-local, versioned `CreatorBriefPackV1` renderer with deterministic snapshots and render QA. |

## 7. Migration convergence rules

- Append migrations after the 74-migration canonical baseline; never edit a released canonical migration.
- Do not repoint the physical legacy `uce_applications.campaign_asset_id` or `brief_id` foreign keys in place. Add canonical Asset/Brief columns and an authority discriminator, retain legacy columns for compatibility, and require canonical fields for new C-03 rows.
- Do not create a second Application table or service truth.
- Backfill only rows with explicit canonical Creator subject and exact Campaign Asset/Brief mappings. Never infer from handle, email, SKU similarity, title, or array position.
- Ambiguous rows remain `LEGACY_COMPATIBILITY`; report them and keep their mutation path closed.
- Preserve historical rows, statuses, and snapshots. No delete-and-recreate migration.
- Install database guards for immutable canonical snapshots, legal status transitions, same-opportunity active uniqueness, event immutability, actor/subject consistency, and Application-sourced Collaboration uniqueness.
- Run a legacy-shaped fixture replay in addition to a fresh database replay before accepting the migration checkpoint.

## 8. Stage B proof branches are not implementation bases

The non-feature topology probes use:

```text
backend  c03/stage-b-execution-base
frontend c03/stage-b-execution-base
```

They contain branch-only CI probes and narrowly evidenced baseline/test-harness repairs. They prove runner capability; they do not promote a new Product implementation base and must not be merged merely because their checks pass. Any useful baseline repair must be separately reviewed during P0 and either carried as an explicit first C-03 checkpoint or integrated independently by the repository owner.

## 9. Stage B execution-base proof

Remote heads were re-read on 2026-09-03 UTC and remained exact:

| Repository/ref | Verified head |
|---|---|
| `Piyush1087/dummy_tcs:main` | `81947647e550e5bbb93664bd9684e883d4e1472c` |
| `Piyush1087/creator-commerce-backend-v2-clone:development` | `4c5f42858b950b7cd342f8972f99f548f3daa942` |
| `Piyush1087/creator-commerce-frontend-v2-clone:development` | `323658d4b147b95b5629ff8d91fa90b8fe9077e4` |

Detached canonical and primary-legacy-reference worktrees were created separately. The persistent Systems Architect workspace stayed on the authority base, while the bounded execution runners used dedicated Stage B branches and ephemeral runtime resources. Remote checkpoint creation/update was exercised through the authenticated GitHub connector; no force push or canonical-branch write occurred.

### Runner evidence

| Lane | Immutable proof | Result |
|---|---|---|
| Backend/PostgreSQL | branch `c03/stage-b-execution-base@f62152d8220e749601b27b63f14a570d04f64096`; draft PR [#6](https://github.com/Piyush1087/creator-commerce-backend-v2-clone/pull/6); run [33812545119](https://github.com/Piyush1087/creator-commerce-backend-v2-clone/actions/runs/33812545119) | PASS: Node `20.20.2`, npm `10.8.2`, locked `npm ci`, Prisma Client `6.19.3`, all 74 existing migrations on fresh PostgreSQL 16, schema current, two isolated safety-guard databases cloned from that baseline, 2 real-PostgreSQL files/26 tests, 2 provider-neutral files/13 tests, production build, Nest startup, and real HTTP `ready` response. |
| Frontend/browser | branch `c03/stage-b-execution-base@4480e1bc39eee47f2e412927d56ba6a1dea2a2ba`; draft PR [#3](https://github.com/Piyush1087/creator-commerce-frontend-v2-clone/pull/3); run [33809140948](https://github.com/Piyush1087/creator-commerce-frontend-v2-clone/actions/runs/33809140948) | PASS: Node `20.20.2`, npm `10.8.2`, locked `npm ci`, typecheck/production build, 112 files/853 tests, preview startup, Playwright `1.55.0`, Chromium `140.0.7339.16`, and a real 1440×900 browser screenshot. |
| Backend breadth check | exact canonical backend worktree under Node `20.20.2` | PASS: Prisma generate/validate, build, 184 non-database files/1,229 tests; 44 files/610 environment-gated tests skipped by their canonical guards. A separate provider-neutral selection passed 7 files/81 tests. |

Canonical lock hashes are backend `324c8176fd2f804b9aa7a9c0a0b7276655f33f8a23a2cfa278dbad7dcac3b51e` and frontend `cc4ee8fed5f8baae324e205a43ac0c1a0bc0e4d3fe1e089dbd8d0a26252775b9` (SHA-256).

The real-PostgreSQL selection includes actual duplicate/capacity contention, not mocked transaction behavior. The provider-neutral selection performs no live Meta request. Neither runner used AWS or a live provider identity.

### Branch-only baseline repairs

The backend proof exposed and bounded only pre-existing execution-base defects:

- stale fixed test time replaced with the runner's current time;
- C-05 Creator fixture supplied its schema-required Creator Organization;
- C-05 role assertions were ordered around the intended promotion and corrected to assert the promoted result;
- C-01 and C-05 safety-guard tests received distinct disposable `c01_i5_*` and `c05_*` databases;
- the two sides of the existing Brand Centre/Settings/Notifications Nest module cycle use `forwardRef`;
- smoke-only environment values satisfy startup validation without storing a real credential.

The proof branch changes one workflow, two existing PostgreSQL tests, and two module declarations. It adds no C-03 Product endpoint, schema field, migration, screen, or behavior. P0 must review this diff again before carrying any repair into an implementation branch.

### Capability classification

| Required capability | Classification | Evidence/condition |
|---|---|---|
| Exact base SHAs | `READY` | All three remote heads match the frozen commits. |
| Isolated branches/worktrees | `READY` | Authority, canonical backend/frontend, legacy references, and proof lanes use distinct refs/worktrees. |
| Remote checkpoint Git | `READY` | Connector created and advanced bounded branches/commits and draft PRs without touching canonical refs. |
| Node 20 parity | `READY` | Both remote lanes ran Node `20.20.2`. |
| Locked dependency install | `READY` | Both lanes passed `npm ci`; package locks were unchanged. |
| Prisma generation/validation | `READY` | Canonical backend generated Prisma Client `6.19.3`; local validation also passed. |
| Isolated PostgreSQL | `READY` | Ephemeral PostgreSQL 16 service plus three C-03-namespaced disposable databases. |
| Fresh existing migration replay | `READY` | 74/74 migrations applied; `prisma migrate status` reported current. |
| Real PostgreSQL baseline/contention | `READY` | C-01/C-05 environment-gated tests passed against real databases, including concurrent capacity/duplicate cases. |
| Backend test/build/startup | `READY` | Local breadth check plus successful remote build, Nest initialization, and HTTP probe. |
| Frontend test/build/startup | `READY` | Full canonical suite/build and preview startup passed remotely. |
| Browser/Playwright runtime | `READY` | Pinned Playwright installed Chromium and captured a real rendered page. |
| Bounded runner round trip | `READY` | Branch write → remote run → job/log inspection → bounded correction → green rerun completed. |
| Brand Home resource isolation | `READY` | C-03 branches, concurrency groups, runner VMs, databases, ports, and artifact names are independent; no Brand Home ref/file was mutated. |
| Provider-neutral Instagram fixtures | `READY` | Pure persisted-state/actor fixtures passed; no live identity or provider call. |
| Stitch/UI-generation path | `READY` | `C03_STITCH_EXECUTOR_ACCESS_PROOF_V1` passed through the bounded Codex execution environment: authenticated access, 62 projects listed (51 owned/11 shared), and read-only metadata confirmation for `Apply to Campaign` (`16487764615396952333`, role OWNER, visibility PRIVATE, device MOBILE). Parent designates this environment as the bounded Stitch execution lane. No generation, modification, rename, delete, or export occurred during the proof. |
| PostgreSQL/Docker/Playwright inside persistent Work | `NOT_REQUIRED_FOR_C03` | The proven hybrid runner topology owns those runtimes. |
| Live Instagram test identity | `NOT_REQUIRED_FOR_C03` | Persisted provider-neutral fixtures are the accepted gate. |
| AWS/runtime object storage | `NOT_REQUIRED_FOR_C03` | C-03 Brief Pack is snapshot projection + client renderer; proof made no AWS request. |

```text
ENVIRONMENT_BLOCKED_CAPABILITIES = 0
CURRENT_STITCH_EXECUTOR_ACCESS = READY
C03_EXECUTION_BASE = READY
C03_HYBRID_AUTONOMOUS_EXECUTION = NOT_YET_AUTHORIZED
```

## 10. Change-admission checklist

Every implementation commit must answer all of the following:

- Is its parent reachable from the exact canonical base or an accepted C-03 checkpoint?
- Is the behavior grounded in frozen C-03 or accepted upstream authority?
- Does it avoid importing primary-legacy authority?
- Does it preserve C-01/C-05 ancestry and tests?
- Does it modify only the files assigned to its bounded worker?
- Are migration, security, concurrency, and redaction implications covered?
- Does it keep C-04, Marketplace, payout/KYC, AWS, and live Meta work out of scope?

If any answer is no or unknown, the commit is not admitted to the C-03 integration branch.

## 11. Manifest verdict

```text
CANONICAL_BASE = FROZEN
PRIMARY_LEGACY_REFERENCE = CLASSIFIED_SEPARATELY
WHOLESALE_FEATURE_BRANCH_MERGE = FORBIDDEN
CONVERGENCE_PATH = ACCEPTED
CURRENT_STITCH_EXECUTOR_ACCESS = READY
C03_EXECUTION_BASE = READY
```
