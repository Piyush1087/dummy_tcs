# Instagram Intelligence B3A — Minimum Image Media Path

## Checkpoint state

```text
PACKET = B3A_MINIMUM_IMAGE_MEDIA_PATH
STATE = EVIDENCE_READY_FOR_CHILD_SA_REVIEW
B2 = ACCEPTED
B3A_ACCEPTED = NO
B4 = PROHIBITED
B3A_PRIMARY_RUNS_USED = 1
B3A_CORRECTION_CYCLES_USED = 0
LIVE_GRAPH_CALLS = NONE
RAW_MEDIA_PERSISTED = NO
```

This checkpoint records one bounded external-local implementation run. It does
not self-accept B3A or authorize B4/B3B/later work.

## Exact predecessor and published backend

| Repository | Branch | Accepted predecessor | Published B3A identity |
|---|---|---|---|
| Backend | `program/instagram-intelligence-v1-backend` | `a9e756b28e9da630e9792538c61f695b10bb28c9` / `f878d424d72d1e1cea3c939440d9ab3cb5a54ab1` | `2005bf4371210f5515635530da7f3d26cbaf9005` / `6eccbda2dcfcb85638d15d19a52d95be8aa4392f` |
| Frontend | `program/instagram-intelligence-v1-frontend` | `97efcaae7ad69da6bd1c18ab8cebb44ca82c4c9e` / `18c7cb0edd173960d15fcc29d71583a1ea429586` | unchanged |

The backend used a normal non-force push. Independent fetch-back proved local
and remote SHA/tree equality and retained the complete B1 → B2 → B2-R1 chain.
The authority commit containing this artifact is reported by the runner because
a commit cannot encode its own identity.

## Scope and reuse reconciliation

B3A reuses:

- the B2 provider-neutral read boundary and its lossless truth semantics;
- Settings-owned integration/account/authorization-generation fences and
  credential decryption boundary;
- the B1 Instagram Resource identity and transactional Capture writer;
- shared ContentArtifact, Evidence, CapabilityExecution and
  DataExtractionSemanticObservation repositories;
- the accepted completion-before-Evidence lifecycle;
- the Settings-owned Instagram deletion flow.

The existing general S3 remote-mirroring helper was not reused: it permits a
general remote fetch, logs URL-shaped context, and creates durable media, which
is incompatible with transient Instagram locator containment.

New surfaces are limited to a contained one-image locator/acquisition adapter,
a fail-closed pinned HTTPS downloader, an application-owned temporary store, a
model-neutral low-level visual-observation port/schema, the B3A orchestration
service, and one internal Instagram-derived purge service.

No controller, endpoint, scheduler, selector, carousel/video lane, consumer,
Object, current/candidate state, canonical Brand/Offering/Campaign/
Collaboration/Creator write, or frontend surface was added.

## Credential and locator containment

Callers provide only Brand, integration, provider-account,
authorization-generation and media identity plus the selected/not-selected
execution disposition. Settings revalidates the Brand/integration/account/
generation/capability fence before decryption. The contained adapter requests
`media_url` only for the exact selected IMAGE and passes it directly to the
downloader. Neither credential nor locator is returned, logged, persisted,
placed in a DTO, or added to the five-method B2 provider-read result.

CDN transport receives only an image `Accept` header and a non-sensitive client
identifier. It receives no Instagram authorization header or access token.
The B1 writer performs the final locked account/generation fence; stale
generation or changed account rolls back all attempted lineage.

## Versioned technical safety constants

| Constant | Value | Rationale |
|---|---:|---|
| Image byte ceiling | 5 MiB | Reuses the accepted repository image-safety ceiling |
| Connection timeout | 5 seconds | Bounds connection establishment |
| Read/inactivity timeout | 5 seconds | Bounds a stalled response body |
| Total acquisition timeout | 15 seconds | Bounds DNS, redirects and streaming together |
| Redirect limit | 3 | Permits normal CDN movement without unbounded traversal |
| Maximum width/height | 8192 × 8192 | Rejects extreme decoded geometry |
| Maximum decoded pixels | 25,000,000 | Bounds decompression and memory amplification |
| Stale temporary maximum age | 6 hours | Bounded well below the authorized 24-hour maximum |
| MIME allowlist | JPEG, PNG, WebP | Narrow still-image formats required by B3A |
| CDN suffix allowlist | `cdninstagram.com`, `fbcdn.net` | Exact boundary-aware Instagram/Meta CDN suffixes; no substring match |

The downloader enforces HTTPS, no userinfo, absent/443 port, boundary-aware
hostname matching, public-only DNS answers, rejection of mixed public/private
answers and mapped-private addresses, deterministic address pinning into the
TLS connection, and independent redirect revalidation. It rejects downgrade,
redirect escape/loop, oversized declared or streamed bodies, MIME/signature/
decoder mismatch, HTML, SVG, malformed/unsupported data, appended polyglot
data, and excessive dimensions/pixels. Raw response bodies and sensitive
headers never enter errors or logs.

## Temporary artifact and cleanup

The temporary root is application-owned. Brand scope is a SHA-256 directory
digest; filenames are 192-bit random values unrelated to URL or media identity.
Files use exclusive creation and mode `0600`, with directory mode `0700` where
supported. Callers cannot choose a filesystem path.

SHA-256 is computed during bounded streaming. Sharp `0.35.4` verifies the
signature/format, performs bounded metadata decode and a one-pixel full decode.
Only verified media type, byte size, dimensions, content hash, and versioned
structured observation metadata persist. URL, headers, path, token and raw/base64
bytes do not.

Cleanup runs in `finally` after success and every model/validation/transaction/
fence failure. Stream abort cancels and removes partial files. The idempotent
six-hour stale-cleanup seam and Brand-scoped deletion purge inspect only the
validated owned root, do not follow symlinks/junctions, reject path escape, and
leave fresh/unrelated/other-Brand files untouched.

## Visual truth and lineage

The strict `1.0` low-level observation contains only bounded description,
visible elements, dominant colors and composition. It records fixture/provider
identity, model identity, model-profile version, prompt-profile version and
observation-contract version. Canonical/negative Creator, Offering,
Collaboration, Campaign, Persona, performance, Signal, Pattern, Learning and
recommendation claims are rejected.

Successful selected IMAGE flow is:

```text
Settings authorization fence
→ contained locator acquisition
→ pinned bounded download and verified temporary image
→ deterministic model-neutral observation
→ B1 final account/generation fence
→ Instagram Resource
→ Capture + provider execution lineage
→ two STRUCTURED_SOURCE_FRAGMENT artifacts
→ mark Capture COMPLETED with acquisition capturedAt
→ one Evidence item and one DE semantic observation
→ complete CapabilityExecution
→ delete temporary image
```

The capability remains `instagram.media_visual_observations`. The provider
media timestamp, when valid, remains explicit `observedAt`; acquisition time is
the authoritative `capturedAt` and is not replaced by database time.

`NOT_SELECTED` bypasses locator, downloader, model and persistence and returns
`NOT_INSPECTED`/`UNKNOWN`. Locator/security/decode/timeout failures return
unavailable/`UNKNOWN` and no semantic Evidence. Model failure or invalid output
may persist verified acquisition metadata as `PARTIAL`, but produces no visual
Evidence or positive/negative semantic claim. One image never creates a Signal,
Pattern, Learning or Intelligence Object.

## PostgreSQL, deletion and validation evidence

Environment: Windows 11 `10.0.26200` x64; Node `v24.19.0`; npm `11.17.0`;
Prisma `6.19.3`; Docker `29.7.2`; PostgreSQL `17.11`.

- Clean PostgreSQL 17 applied all 88 migrations from zero; migration status was
  current.
- B3A PostgreSQL suite: 4/4 PASS. Positive and replay count vector was
  `[1,1,2,1,1,1,1,1,1,2]` for Resource, Capture, artifacts,
  CapabilityExecution, capability-resource, Evidence, capability-Evidence,
  semantic observation, observation support and provider-execution links.
- Failed acquisition vector was `[1,1,0,1,1,0,0,0,0,2]`, with failed Capture,
  null `capturedAt`, and no artifact/Evidence/observation.
- Changed account and post-deletion stale generation retained the all-zero
  Instagram vector.
- Settings deletion removed target Instagram Resource/Capture/artifact/
  Evidence/observation/hash/temp data, retained one target website Resource,
  retained the other Brand vector unchanged, and prevented resurrection.
- B1 writer regression: 7/7 PASS.
- Settings reconciliation regression: 22/22 PASS on an isolated `bs06_*`
  database.
- Legacy Settings regression: 27/27 PASS on a separate isolated `bs06_*`
  database.
- Focused B3A/B1/B2 static/contract compatibility matrix: 14 files / 173 tests
  PASS. B3A core fixtures account for 4 files / 56 tests.
- Production build, Prisma generation/validation, scoped ESLint over 22 changed
  TypeScript files, and diff integrity passed.

Two permitted repository dependencies were added because existing tooling did
not provide safe decoded-image verification or exhaustive IP classification:
Sharp `0.35.4` (Apache-2.0) and ipaddr.js `2.2.0` (MIT). `npm ci` installed 813
packages from the updated lockfile. Audit retained the repository's 52 existing
findings and reported no finding for either added dependency; the initially
evaluated older Sharp patch was replaced before publication when audit identified
2026 libvips/libheif advisories.

Prisma schema and all migrations are byte-unchanged. Migration count remains 88;
migration 88 SHA-256 remains
`d02b75e50f883150c9d14908c82ef10d9b0de4c2b464168567634dd0157009e4`.
No live provider/model test ran. Secret and forbidden-artifact scans found no
real credential, token, signed locator, `.env`, raw media, temp path artifact or
tracked runtime output. One credential-URL pattern is the intentional synthetic
userinfo rejection fixture.

## File inventory

Backend B3A changed 24 files: package manifest/lockfile; module wiring; the
Settings authorized image adapter and tests; Settings deletion integration and
two constructor-compatible regression fixtures; the Instagram-derived purge;
the B3A module/pipeline/schema and tests; and the contained locator, secure
downloader, temporary store, safety types and tests. Exact paths and diff
statistics are retained in the immutable runner report and Git commit.

## Boundary and accounting

```text
B3A_EVIDENCE_READY = YES
B3A_PRIMARY_RUNS_USED = 1
B3A_CORRECTION_CYCLES_USED = 0
OPTIONAL_LIVE_READ = NOT_RUN_NON_BLOCKING
LIVE_GRAPH_CALLS = NONE
META_PROVIDER_MUTATIONS = NONE
RAW_MEDIA_PERSISTED = NO
B4 = PROHIBITED
```
