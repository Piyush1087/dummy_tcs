# Campaign Page Phase G — Codex Bootstrap Package

**Purpose:** Prepare a local Codex workspace for a supervised-autonomous Campaign Page Phase G run.

This is not the master execution prompt. It defines the workspace, files, outputs and safety conditions the later master prompt will mount.

## 1. Workspace topology

Mount these as separate repository roots in one Codex working context:

```text
creator-shop-campaign-phase-g/
├── dummy_tcs/               # canonical product/engineering authority
├── campaign-frontend/       # deployable frontend implementation
└── campaign-backend/        # deployable backend/runtime authority
```

The master prompt must provide or resolve the exact repository paths/URLs and expected refs.

G0.0 must verify all SHAs before auditing behavior.

## 2. Canonical repository

Repository:

`Piyush1087/dummy_tcs`

Read first:

- `AI_ENGINEERING_STANDARD.md`
- `docs/engineering/PHASE_G_PRODUCT_READINESS_STANDARD.md`
- `docs/engineering/PHASE_G_AGENT_ORCHESTRATION_STANDARD.md`
- `campaign/phase_g/README.md`
- `campaign/phase_g/agent_context_manifest.md`

Then use the Campaign authority packs named by the manifest.

The master prompt should pin the exact `dummy_tcs` SHA current at execution time.

## 3. Frontend implementation repository

The master prompt must identify the **actual deployable Campaign frontend** rather than choosing an old staging/reference checkout automatically.

G0.0 records:

```text
Repository:
Local path:
Branch:
HEAD SHA:
Expected/approved baseline SHA:
Working tree status:
Deployment relationship:
```

Create a Phase G working branch only after the baseline is verified.

Recommended branch naming:

`phase-g/campaign-page-g0-audit`

Subsequent implementation branches should be derived from the last accepted Phase G frontend baseline, for example:

`phase-g/campaign-page-g1a-<scope>`

Do not merge automatically.

## 4. Backend implementation repository

The backend is read-only during G0.

G0.0 records the exact runtime baseline.

G1 may modify backend only when a proven finding requires it and the generated work-package prompt explicitly permits it.

No backend change should be made merely to simplify frontend implementation.

## 5. Working-repository Phase G artifact directory

The frontend working repository should maintain:

```text
docs/campaign/phase-g/
├── 00_run_state.md
├── 01_g0_baseline.md
├── 02_g0_reality_audit.md
├── 03_... G0.2 investigation artifacts generated as needed
├── ...
├── G0.3 authority/finding disposition artifact
├── G1 package acceptance artifacts
├── consolidated G1 functional acceptance
├── G2 UX/IA authority matrix
└── later G3/G4/G5 evidence as applicable
```

Initialize `00_run_state.md` from:

`dummy_tcs/campaign/phase_g/run_state_template.md`

The run ledger must be updated at every phase transition.

## 6. Supervisor autonomy

After the initial master prompt executes G0.0 + G0.1, Codex should switch into the global Supervisor loop defined in:

`docs/engineering/PHASE_G_AGENT_ORCHESTRATION_STANDARD.md`

The Supervisor may autonomously:

- generate G0.2 investigation clusters;
- execute successive G0.2 packages;
- generate G0.3;
- generate G1 package decomposition;
- execute sequential G1 packages;
- run consolidated functional acceptance;
- draft G2.

It must stop for Product when the orchestration standard's mandatory semantic stop conditions are met.

It must always stop before Stitch unless G2 is approved.

## 7. Create Campaign protection

Create Campaign has already undergone Phase G reconciliation.

The Campaign Page run may inspect Create Campaign only as a dependency for:

- Edit Draft navigation;
- Campaign Details/Edit handoff;
- shared Campaign contracts;
- route compatibility.

Do not spend the new Phase G run re-auditing the Create Campaign wizard unless concrete regression evidence is discovered.

## 8. G0 execution requirements

G0 requires only:

- repository access;
- canonical files;
- frontend/backend source access;
- ability to inspect tests/configuration/history;
- Git SHA verification.

G0 should not wait for Docker/Postgres/provider credentials.

No source implementation changes during G0 except documentation artifacts unless a generated prompt explicitly formalizes a discovered pre-existing hotfix for later acceptance.

## 9. Full local environment before consolidated G1 acceptance

Prepare before claiming Campaign Page functional acceptance:

### Host/tooling

- repository-compatible Node.js + npm/pnpm as required;
- Git/GitHub authentication;
- Docker Desktop;
- WSL if the project setup depends on it.

### Database

- PostgreSQL 16 local container/instance;
- isolated database, suggested name:
  `creator_shop_campaign_phase_g`;
- local-only `DATABASE_URL`;
- accepted migrations applied;
- deterministic Campaign fixtures.

Never use dev/prod RDS for local Phase G.

### Services

- backend on the repository's local port (normally 3000 where applicable);
- frontend Vite/dev server on the repository's local port (normally 5173 where applicable);
- local auth/QA identity configured;
- no real money movement;
- no real email/publishing/provider mutation unless explicitly safe and intended.

### QA data

At minimum create or preserve deterministic Brand-side scenarios for:

- Draft/incomplete Campaign;
- Published Product Setup;
- Published Brief Setup;
- Live Discovery-ready Campaign;
- Applicants-active Campaign;
- Paused Campaign;
- post-live readiness blocked;
- Completed;
- Archived;
- no assets;
- Asset without published Brief;
- populated Discovery;
- no Discovery results;
- Applicants pending/approved/rejected as supported;
- Reporting ready/unavailable as supported;
- provider disconnected/degraded where relevant.

Fixtures must use canonical runtime inputs rather than UI-only synthetic fields wherever feasible.

## 10. Provider policy

Meta/Creator Marketplace and Intelligence production runtimes may be unavailable locally.

The correct Phase G behavior is:

- preserve provider abstraction;
- exercise deterministic provider-unavailable/degraded states;
- use existing accepted fixtures/mocks only where they represent the contract truthfully;
- never fabricate successful provider execution;
- never change Product semantics to make the local environment easier.

## 11. Acceptance evidence split

Codex sandbox limitations must be distinguished from source failures.

If a check cannot run inside Codex but can run from normal PowerShell/host shell, record split evidence:

```text
Codex source/test evidence:
Host-shell build/runtime evidence:
Environment blocker:
Final disposition:
```

Do not repeatedly retry the same known permission/network blocker.

## 12. Initial master prompt responsibility

The later Campaign master prompt should:

1. verify/mount the three repositories;
2. pin exact baselines;
3. read the global Phase G and Campaign manifests;
4. initialize `00_run_state.md`;
5. execute G0.0;
6. execute G0.1 whole Campaign Page reality audit;
7. run Supervisor assessment;
8. if safe, generate and continue into the first G0.2 investigation automatically;
9. continue under the orchestration standard until a mandatory Product gate or environment gate is reached.

The master prompt should not hard-code every future G0.2/G1 prompt. Those are generated from evidence.

## 13. First-run expected output

At minimum the first autonomous cycle should establish:

- verified canonical/frontend/backend baselines;
- current Campaign route/composition tree;
- current source-of-truth map;
- whole-scope finding register;
- legacy/compatibility register;
- deferred-owner register;
- missing-state register;
- G0.2 root-cause clusters;
- updated `00_run_state.md`;
- first generated next prompt or an explicit Product decision stop.

## 14. Governing rule

> Use Codex to reduce coordination overhead, not to bypass Product authority. The agent may generate and execute the next engineering prompt whenever the previous evidence makes the next step deterministic.
