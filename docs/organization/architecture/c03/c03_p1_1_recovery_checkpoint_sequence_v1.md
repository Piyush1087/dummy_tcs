# C-03 P1.1 Recovery Checkpoint Sequence V1

Artifact:
C03_P1_1_RECOVERY_CHECKPOINT_SEQUENCE_V1

Status:
READY_FOR_PARENT_REVIEW

Implementation authorization:
NOT GRANTED

## 1. Purpose

This sequence replaces a single large, failure-prone P1.1 work block with five
bounded, independently reviewable checkpoints on the accepted backend recovery
line.

Execution base:

| Item | Immutable authority |
|---|---|
| Backend branch | c03/recovery-campaign-participation-v1 |
| Backend base SHA | 6a2bd2e4b815462abc702dea34f7c368c24a0664 |
| Backend base tree | cf37ef240ac8f8d72e1b230b80830df682ba63fd |
| Documentation branch | c03/recovery-authority |
| Recovery baseline SHA | 7c7cae4ebe89a3d2305bd780aad784e8d9b46b79 |
| Accepted Stage B SHA | 458875b939b738b8032409b6de72b6de70f53ed1 |

The original c03/campaign-participation-v1 branches remain historical and
quarantined. No abandoned local/late commit may be merged, cherry-picked,
rebased, or treated as authority without a separate evidence review.

## 2. Proposed revised migration inventory

Stage B allowed the P1.1 migration family to be split when PostgreSQL
transaction/lock safety required it and the Systems Architect recorded the
revised finite inventory before code acceptance. This reconstruction proposes
the following split:

| Checkpoint | Proposed immutable migration |
|---|---|
| P1.1A | 20260910120000_c03_campaign_asset_brief_convergence |
| P1.1B | 20260910120500_c03_application_snapshot_foundation |
| P1.1C | 20260910121000_c03_invitation_ingress_idempotency_events |
| P1.1D | 20260910121500_c03_integrity_guards_and_legacy_compatibility |
| P1.1E | No migration; acceptance evidence only |

If Parent accepts this proposal, the previously reserved P1.4 family moves,
without semantic change, to:

~~~text
20260910122000_c03_application_handoff_notifications
~~~

This split is required to bound table locks, isolate backfill review, preserve
an internally safe stop after every remote commit, and avoid one multi-domain
migration transaction. Until Parent acceptance, these names are proposed
inventory only and no directory may be created.

Existing 74 migrations are immutable. Once any proposed migration is pushed
and consumed by an accepted checkpoint, it is immutable; a correction is a
new additive follow-up migration, never an edit.

## 3. Single-writer rule

One named backend/data executor owns prisma/schema.prisma and all P1.1
migration SQL from P1.1A through P1.1D. No second executor, branch, automated
formatter, or recovery conversation may edit schema/migrations concurrently.

Other bounded test/review work may occur only against the remotely fetched
checkpoint SHA and may not write schema or migration files. The schema writer
must stop at every checkpoint acceptance gate and cannot begin the next
checkpoint until the current SHA and evidence are ledgered.

## 4. Mandatory checkpoint publication protocol

Every P1.1 subcheckpoint uses this exact protocol:

1. Verify the backend branch remote head equals the prior accepted checkpoint
   SHA. Any drift stops work.
2. Fetch/prune and work only from that exact remote head.
3. Confirm no original/quarantined branch commit is present except common P0
   ancestry.
4. Implement only the named checkpoint scope.
5. Run its finite local validation commands and record command, timeout,
   exit code, duration, and relevant artifact paths.
6. Inspect the complete diff, generated migration SQL, and repository status.
7. Commit one coherent checkpoint with no unrelated change.
8. Push only to c03/recovery-campaign-participation-v1.
9. Fetch the remote ref back independently; verify the remote SHA, commit tree,
   parent SHA, and clean local tree exactly.
10. Wait for the checkpoint GitHub Actions run; fetch run/job/step evidence and
    required artifacts.
11. Append one immutable entry to
    docs/organization/execution_ledgers/c03_recovery_execution_ledger_v1.md on
    c03/recovery-authority, push it, and fetch it back.
12. Systems Architect reviews the checkpoint diff and evidence and records
    PASS, FAIL, or BLOCKED. Only PASS permits the next checkpoint.

An executor does not self-accept. A late commit after FAIL/BLOCKED has no
authority until reviewed as a new candidate checkpoint.

## 5. Finite execution controls

Every runtime/test subprocess must use an outer finite timeout. The maximums
below are ceilings, not targets:

| Command family | Outer timeout |
|---|---|
| git status/diff/static repository checks | 2 minutes |
| npm ci | 15 minutes |
| Prisma format check/validate | 5 minutes each |
| Prisma generate | 10 minutes |
| migration preflight | 10 minutes |
| one migration deploy/status operation | 20 minutes |
| one focused Vitest or PostgreSQL file | 20 minutes |
| checkpoint-focused suite | 30 minutes |
| production build | 20 minutes |
| full test suite | 45 minutes |
| combined fresh/upgrade acceptance job | 60 minutes |
| backend startup smoke | 5 minutes |
| GitHub Actions job | 60 minutes |

Use a runner-native timeout on Windows or GNU timeout on Linux, plus
timeout-minutes in GitHub Actions. A hung command is a failed evidence item,
not permission to wait indefinitely.

No local implementation interval may exceed 60 minutes without a durable
status/ledger update. If the current checkpoint cannot reach an internally
consistent, testable commit inside its bounded correction budget, stop and
record BLOCKED; do not push a half-open schema or silently continue for hours.

Each checkpoint receives one initial execution pass and at most two bounded
correction passes. Further work requires Systems Architect re-decomposition or
Parent escalation under the accepted circuit breakers.

## 6. P1.1A — Campaign / Asset / Brief persistence convergence

### Scope

- Map existing UceCampaign creation_source/canonical_definition into Prisma.
- Add only the manifest-defined liveAt/applicationDeadline and canonical
  Campaign Strategy/Targeting/Commercial projection fields.
- Add Campaign/Asset/Brief composite ancestry keys.
- Enrich existing CanonicalCampaignBrief and
  CanonicalBriefDeliverable; create no second Brief family.
- Add Brief lifecycle/creation/type/format enums and frozen rich fields.
- Backfill isActive to PUBLISHED/PAUSED without treating minimal rows as
  C03-submit-ready.
- Add Brief/Deliverable identity, parent, projection, and AMPLIFY_REEL
  structural guards.
- Update canonical Campaign/Brief read/write adapters, readiness projection,
  DTO/Zod validation, and focused tests.
- Preserve UceCampaignProduct, UceCampaignBrief, and their Brand routes as
  compatibility-only.

### Safe stop invariant

At P1.1A PASS, the canonical Campaign/Asset/Brief graph is independently valid,
rich Draft persistence is possible, and every old row remains readable. No
canonical Application column or runtime path exists yet.

### Required evidence

- Prisma 6.19.3 format/validate/generate;
- migration preflight report for Campaign/Brief state;
- fresh 0-to-75 migration replay;
- 74-to-75 seeded upgrade;
- Brief status/backfill/readiness tests;
- composite ancestry and Brief/Deliverable negative PostgreSQL tests;
- canonical Campaign/Brief adapter tests;
- full affected Brand Campaign tests and production build.

### Prohibited

No Application, invitation, ingress, receipt, event, continuation-context,
Collaboration, Notification, frontend, or production work.

## 7. P1.1B — canonical Application plus immutable snapshot foundation

### Scope

- Add UceApplicationAuthorityVersion and
  UceApplicationSnapshotVersion.
- Make the three legacy selection/request fields and campaignCreatorId
  nullable, with explicit legacy Prisma naming.
- Add canonical Campaign/Brand/Asset/Brief/subject/workspace/actor fields,
  statusVersion, and terminalAt.
- Backfill every old row to LEGACY_COMPATIBILITY/statusVersion 0 without
  promotion.
- Add the authority-shape CHECK and core Campaign/Asset/Brief/Owner-subject/
  actor FKs.
- Add canonical same-opportunity and count/read indexes.
- Version the retained snapshot family, add actor/attribution partitions, and
  change its FK to RESTRICT.
- Install a temporary database write-closed guard that rejects
  C03_CANONICAL Application insertion until P1.1D atomically installs the full
  event/transition invariant set.

### Safe stop invariant

At P1.1B PASS, legacy Application runtime remains operable through explicit
compatibility code; canonical storage shape is reviewable but database-closed
to writes. It is impossible to create a partially guarded canonical
Application.

### Required evidence

- Prisma checks;
- fresh 0-to-76 replay;
- seeded 75-to-76 and exact 74-to-76 upgrades;
- all six legacy statuses, including SUPERSEDED, preserved;
- legacy JSONB semantic equality and proof that no UPDATE touched the five
  existing snapshot partitions;
- authority-shape/FK/partial-index catalog and negative PostgreSQL tests;
- proof that the temporary canonical write-closed guard rejects insertion;
- affected Brand Application compatibility tests and build.

### Prohibited

No canonical Application service/route, synthetic legacy promotion, snapshot
rebuild, event, receipt, invitation behavior, terminal command, Collaboration,
or Notification work.

## 8. P1.1C — invitation / ingress / idempotency / event persistence

### Scope

- Add CampaignOpportunityInvitation with digest/intended-subject/binding/
  expiry/revocation structure.
- Add CampaignIngressTouch with digest-only qualified ingress, server
  conversion touch, allowlisted normalized attribution, and monotonic subject
  binding.
- Add ApplicationCommandReceipt and ApplicationDomainEvent tables/enums/
  keys.
- Extend CreatorEntryContinuation with the exact typed Campaign seed context,
  same-Campaign share/invitation/touch references, and monotonic workspace/
  profile binding.
- Add optional Application invitation/first-touch/conversion-touch columns and
  composite FKs.
- Add table-local shape, digest, lifetime, ancestry, and append-only
  constraints that can be complete without opening canonical Application
  writes.
- Keep the P1.1B canonical write-closed guard installed.
- Update the current direct continuation store/service only enough to preserve
  identical C-01 behavior through new defaults. Do not expose new invitation
  or attribution behavior.

### Safe stop invariant

At P1.1C PASS, every new security/audit table is independently constrained and
the existing direct C-01 continuation regression suite still passes.
Canonical Application writes remain database-closed.

### Required evidence

- Prisma checks;
- fresh 0-to-77 replay;
- exact 74-to-77 and 76-to-77 seeded upgrades;
- digest-only/token-absence assertions;
- invitation/ingress/continuation/receipt/event local negative PostgreSQL
  tests;
- C-01 continuation PostgreSQL, transport, architecture, and cookie
  regressions;
- catalog proof that raw credential columns do not exist;
- full affected tests and build.

### Prohibited

No invitation issue/exchange/bind route, Opportunity policy, analytics export,
Application command runtime, event producer, notification/outbox delivery,
frontend, or production work.

## 9. P1.1D — database guards / locking / adapters / legacy compatibility

### Scope

- Install the complete canonical Application INSERT/identity/terminal/delete
  guards.
- Install DEFERRABLE INITIALLY DEFERRED exactly-one snapshot and matching
  event constraints.
- Install event, receipt, invitation, ingress, continuation, Brief, and
  snapshot immutability guards and final cross-family composite FKs.
- In the same migration transaction, remove the temporary canonical
  write-closed guard only after every permanent guard/index/FK is valid.
- Add CampaignLifecycleLockService and route every existing Campaign lifecycle
  writer through it.
- Finalize the canonical Campaign-for-Application read adapter.
- Make CampaignApplicationService explicitly legacy-only until P1.3 and add
  runtime legacy-shape assertions for nullable fields.
- Ensure canonical rows cannot reach legacy stock decrement, sibling
  supersession, provisional User/Collaboration, or 30/70 logic.
- Add architecture tests that fail on a second Brief/Application store,
  direct unguarded Campaign status write, or canonical row use in the legacy
  service.

### Safe stop invariant

At P1.1D PASS, the complete persistence foundation can accept only an
internally valid canonical transaction, but no normal runtime route creates
one. Existing legacy behavior remains quarantined by discriminator. P1.2 and
P1.3 may build only on this accepted remote SHA.

### Required evidence

- Prisma checks;
- fresh 0-to-78 replay;
- exact 74-to-78 seeded upgrade;
- full manifest negative PostgreSQL suite;
- two-transaction Campaign lock serialization proof;
- snapshot/event insertion-order proof;
- legacy Brand Campaign/Application/Brief regression;
- C-01/C-05 PostgreSQL regression;
- full test suite, build, startup smoke, clean-tree proof;
- generated migration SQL and pg_catalog review.

### Prohibited

No public/Creator canonical Application route, policy decision, command
orchestration, Collaboration/Notification migration, frontend, AWS, or
production execution.

## 10. P1.1E — PostgreSQL fresh + legacy-upgrade + negative acceptance

### Scope

P1.1E changes no Prisma model, migration, or runtime source. It may add/fix
only acceptance harness, deterministic fixtures, workflow configuration, and
documentation evidence. A source/schema defect returns to the owning prior
checkpoint as an additive correction; P1.1E may not conceal it in tests.

Run two independent PostgreSQL 16 lanes:

1. empty database, all 78 migrations;
2. exact P0 SHA, 74 migrations, seeded representative legacy state, then
   candidate 75-to-78 migrations.

Run every negative case enumerated in
C03_P1_1_RECOVERY_IMPLEMENTATION_DELTA_MANIFEST_V1, verify the catalog, execute
the full affected unit/integration suite, build, and startup smoke.

### Required artifacts

- JSON environment/version/base identity report;
- P1.1 preflight/ambiguity report with sensitive values omitted;
- fresh migration log and _prisma_migrations/catalog assertion report;
- legacy-upgrade migration log and before/after invariant report;
- PostgreSQL negative test report with test names and durations;
- Prisma format/validate/generate output;
- full test/build/startup results;
- final git diff/status, remote fetch-back, commit/tree identity;
- workflow run, job, steps, and retained artifact IDs;
- final recovery ledger entry.

### Acceptance

P1.1E is PASS only when every required item is present and successful. A
skipped test, timeout, missing artifact, unreviewed ambiguity, dirty tree,
remote SHA mismatch, or unexplained late write is BLOCKED.

## 11. Ledger schema

Each recovery ledger row records:

| Field | Required value |
|---|---|
| checkpoint | P1.1A through P1.1E |
| prior accepted SHA/tree | Exact |
| candidate backend SHA/tree | Exact |
| migration count/name(s) | Exact |
| schema writer identity | Named |
| started/finished server timestamps | UTC |
| commands/timeouts/exit/duration | Complete |
| preflight artifact digest | SHA-256 |
| fresh/upgrade database names | Explicit disposable names |
| workflow run/job/artifact IDs | Exact |
| fetch-back verification | PASS/FAIL |
| diff review | PASS/FAIL |
| unresolved ambiguity | Exact, redacted |
| verdict | PASS/FAIL/BLOCKED |
| Systems Architect acceptance SHA | Exact documentation commit |

Secrets, raw invitation/continuation/idempotency tokens, email, provider IDs,
or snapshot bodies must not enter logs or the ledger.

## 12. Stop and escalation conditions

Stop before the next checkpoint when:

- the remote recovery branch is not the expected accepted SHA;
- any original/quarantined execution commit appears unexpectedly;
- a historical migration checksum differs;
- preflight finds a contradiction requiring destructive or inferred identity
  migration;
- a canonical constraint cannot coexist with preserved legacy data;
- a proposed field/transition would change frozen Product logic;
- a required real-PostgreSQL test cannot run;
- the schema writer boundary is violated;
- a command times out twice or the correction budget is exhausted;
- production/AWS/provider access would be required.

Routine compile/test/migration defects remain bounded engineering corrections
inside the applicable checkpoint. Product or architecture contradiction is
reported exactly to Parent and is not silently resolved.

## 13. Terminal state

~~~text
C03_P1_1_RECOVERY_CHECKPOINT_SEQUENCE = READY_FOR_PARENT_REVIEW
P1_1_CHECKPOINTS = P1.1A + P1.1B + P1.1C + P1.1D + P1.1E
SCHEMA_MIGRATION_OWNER = SINGLE_WRITER
EVERY_RUNTIME_TEST_COMMAND = FINITE_TIMEOUT
EVERY_CHECKPOINT = REMOTE_COMMIT + FETCH_BACK + LEDGER + REVIEW
PRODUCT_QUESTIONS = NONE
ARCHITECTURE_CONFLICTS = NONE
P1_1_IMPLEMENTATION = NOT_AUTHORIZED
~~~
