# Instagram Intelligence F1 + F2 Combined Integrated Acceptance Evidence

Status: `EVIDENCE_READY_AWAITING_CHILD_SA_PROGRAM_ORCHESTRATOR_ACCEPTANCE`

This artifact records the external local Codex execution of F1 and F2. It does
not self-accept either gate and does not authorize or start F3.

## Frozen starting state

| Repository | Branch | Starting SHA | Starting tree |
| --- | --- | --- | --- |
| backend | `program/instagram-intelligence-v1-backend` | `d5b9de557ed983a9c3af26b1edc305ba8b77d6f3` | `67d2642871899fda9e7bd9248b8d56892c3d6e6d` |
| frontend | `program/instagram-intelligence-v1-frontend` | `5866d0ac82f742957f53a8db2144a9a166628b75` | `7c095290ffdef4c84f37382bc594bef536c92a49` |
| authority | `program/instagram-intelligence-v1-authority` | `f19fdb8ae80bea84036df874fb2b1736fa831155` | `4559f0234085d726ee054c6148c963cf7444bf4e` |

All three worktrees were clean, local and fetched remote-tracking refs were
equal, required accepted ancestry was present, and the backend inventory was
exactly 90 migrations before the disposable database was created.

## Environment and dependency identity

- Windows NT `10.0.26200.0`, AMD64; Node `v24.19.0`; npm `11.17.0`;
  Docker `29.7.2`; Chrome `152.0.7977.83`; PostgreSQL `17.11`.
- Backend and frontend `npm ci` passed without lockfile mutation. Existing npm
  audit inventory was retained: backend 52 findings and frontend 15 findings;
  no dependency update was authorized or made.
- Backend `package-lock.json` SHA-256:
  `DE80A99F97D7E834190978626B8749481D75521DFA76DE5DF38E24D31FC3F59D`.
- Frontend `package-lock.json` SHA-256:
  `FB65F796CB7BC9AC001F3E9245BACBBFA56D505F55AD9F87D099CEA407847147`.

## F1 evidence

- A uniquely named `postgres:17-alpine` container used ephemeral tmpfs storage
  and a loopback-only generated local route. All 90 migrations applied from a
  clean database and `npx prisma migrate status` reported the schema current.
  Connectivity passed; `plpgsql` was the only installed extension and no
  additional extension was required.
- `npm run prisma:generate`, the production backend build, and frozen contract
  verification passed. Verification used a clean detached authority checkout
  at `bbb0be3345c36e9cc7c4f06ca68fb491b742b83f` with the exact pinned-source
  procedure; generated bundles were not mutated.
- Provider-neutral/contract/semantic/hidden-lane unit tranche: 21 files,
  152 tests passed. Provider truth, reconciliation, pagination, bounded error
  classification, secure locator acquisition, SSRF/redirect/hostname defenses,
  and the streamed/chunked/dishonest-Content-Length 65,536-byte boundary: six
  files, 122 tests passed.
- PostgreSQL tranches passed serially: Settings lifecycle 27; Settings
  reconciliation/delete preservation 22; provider read 1; Capture/Evidence 7;
  C2 3; C3 3; B3A 4; B3B 1; hidden Brand 1; C4 1; C1 6. The C4 proof persisted
  exactly three Objects and 35 owned paths, replayed deterministically,
  preserved successful current on independent failure, fenced account and
  generation identity, isolated tenants, and verified target-only deletion.
- The historical B4 `1.0` direct execution harness was diagnostic only: it
  failed closed because accepted C4 authority deliberately leaves B4 `1.0`
  registered but non-executable and makes C4 content `1.1` the sole active
  owner. The accepted C4 integration test is the authoritative executable path.
- The P1C1 historical-upgrade test requires the repository's pre-migration
  `bs06_p1c1` seeded snapshot and is not valid against a blank database. Its
  guard rejected an empty substitute. No fixture was invented; accepted
  historical upgrade evidence was preserved, while current clean-90 migration,
  lifecycle, reconnect, reconciliation and deletion suites passed.
- Backend `/health/live` returned HTTP 200 with `{status: ok}`. `/health`
  returned HTTP 200 with database status `up`.
- Scoped final lint for all Instagram Intelligence, Instagram Settings and
  related integration surfaces passed with Windows-safe line-ending handling.
  The repository-wide lint command remains non-authoritative on this Windows
  checkout because it reports 712 pre-existing Prettier line-ending/format
  findings across unrelated surfaces; no unrelated mass rewrite was made.

## F2 evidence

- The production-built frontend ran against the production backend and real
  disposable PostgreSQL data. Full frontend regression passed: 143 files and
  1,151 tests passed; one opt-in A3 harness test remained skipped. Typecheck and
  production build passed. Scoped Instagram/Settings/navigation/harness lint
  passed.
- At 390 and 767 pixels the shared Brand Centre used the mobile selector; at
  768 and 1440 pixels it used horizontal peer navigation. The singular
  Instagram workspace preserved the accepted hierarchy, no inner tabs and no
  horizontal overflow.
- Real authenticated Owner, Campaign Manager and Finance Admin reads passed.
  Campaign Manager refresh was allowed; Finance Admin was read-only and refresh
  denied. Inactive and non-member reads returned non-disclosing 403, a second
  tenant media read returned 404, and unauthenticated reads returned 401.
- The full connection/capability projection rendered NOT_CONNECTED,
  CONNECTING, CONNECTED, PARTIAL_CAPABILITY, UNKNOWN_CAPABILITY,
  REAUTH_REQUIRED, AUTHORIZATION_DEGRADED, SAME_ACCOUNT_RECONNECTING,
  DIFFERENT_ACCOUNT_CONFLICT, TRANSIENT_PROVIDER_FAILURE and DISCONNECTED.
  Current-preserved failure and refresh feedback/focus were verified.
- Workspace Axe at every required width and current/not-connected/preserved
  state had zero serious and zero critical violations. Three lower-severity
  landmark findings were recorded at each workspace width:
  `landmark-main-is-top-level`, `landmark-no-duplicate-main`, and
  `landmark-unique`.
- Media detail at 390/767/768/1440 passed loading, success and error states with
  zero findings at every Axe impact. Full-screen sheet/right drawer boundaries,
  sole route authority, direct link, Back/Forward/close/Escape, focus trap and
  return, internal scroll, one-request behavior, stale suppression, cancellation,
  role reads and tenant non-disclosure all passed. No raw media was fetched.
- The Owner initiated delete-data only through Settings and explicitly
  confirmed it. The deletion worker completed on attempt one with no error.
  Post-deletion the real aggregate returned HTTP 200, connection
  `DISCONNECTED`, and all three Objects as `NO_CURRENT`; the deleted media route
  returned 404. Post-delete Axe had zero serious/critical findings and the same
  three recorded landmark findings.
- Browser harnesses blocked or accounted for external requests. Live Meta/Graph
  and model call count was zero. No provider mutation or raw-media persistence
  occurred.

## Integrity, corrections and disposition

- Backend and frontend source trees remain byte-identical to their frozen
  starting SHAs/trees. No schema, migration, dependency or Product/UX change was
  made. Temporary local fixture helpers, ignored environment configuration,
  runtime evidence and build outputs are not part of the commit.
- Secret-pattern scans found zero matched tracked files; no tracked `.env`,
  credential-bearing remote, token, signed locator, raw media, screenshot or
  runtime artifact is included. Synthetic credential values are intentionally
  omitted.
- Two bounded harness/environment correction cycles were used: bind Vite preview
  to the permitted local hostname; align the post-delete assertion with the
  frozen DTO's `DISCONNECTED` plus three `NO_CURRENT` Objects. No production
  assertion, contract or truth semantic was weakened.
- Internal F1 result: PASS. Internal F2 result: PASS.
- `F1_ACCEPTED = NO`; `F2_ACCEPTED = NO`; both await Child-SA / Program-
  Orchestrator review.
- `F3_STARTED = NO`; `F3_AUTHORIZED = NO`.

