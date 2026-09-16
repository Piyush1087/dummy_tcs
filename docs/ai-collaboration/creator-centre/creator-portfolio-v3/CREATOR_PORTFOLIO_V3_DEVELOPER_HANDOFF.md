# Creator Portfolio V3 — developer handoff

Status: P0–P3 packet gates accepted; P4 evidence-ready for final Technical-SA/Program-Orchestrator review. This is not final acceptance or Media Kit authorization.

## Published implementation

Backend branch program/creator-portfolio-v3-backend: aaae1e3062137eda30e13e2fd7bcddbb1b239842, tree 458517fa01a50f43f0b1cd8a948767e4f7600d50.
Frontend branch program/creator-portfolio-v3-frontend: 9631e8b261f02f331dcf84f09dfd61dcc28eea83, tree 25a89b63cec1a576ef605076c717a7cc447e5acc.
Both normally pushed and independently fetched equal, with accepted Audience V1 history preserved and clean statuses. The P4 authority containing-commit identity is in the immutable external report.

## Ownership and runtime

Portfolio owns four canonical tables, immutable revisions, a strict private GET/PUT API and the Creator workspace. Source acquisition/Capture/Evidence and completed C04 are read-only donors, not duplicated producers.

Source reader → non-secret Settings/Owner/account/generation/capturedAt/hash admission → own materializer → strict public consumer. Team-locked actor re-resolution, CAS and UUID replay fence own writes. Owner/Manager add/edit manual references and remove/restore any item; Assistant is read-only, including saved-view retry. Source-verified facts remain immutable through the API.

Public DTOs exclude account/generation/Capture/Evidence/hash/model/processor lineage; private bounded snapshots retain exact supported identity. Stable work destinations are separate from ephemeral acquisition locators. References are validated HTTPS, named links with noopener/noreferrer, never fetched or scraped. Source-link-only presentation is the explicit batching-plan section5.2 fallback: no durable cover/shareability basis exists, and Story capability is unavailable. No media uploads, players, embeds or raw-media cache. Existing retained source bounds remain90days/24posts; response pagination100 is not a Product corpus/lifetime cap.

The C04 adapter requires canonical completed/approved publishing evidence or completed nonpublishing UGC. Each distinct valid publishing proof is an item; a same-media Instagram/Shop match retains one item and distinct provenance. No C04 state/schema/current write. Explicit canonical-column reads avoid an unused legacy Prisma field; do not repair donor columns from Portfolio.

## Reproduction and configuration names only

Use existing repository commands: npm ci; npm run prisma:generate; npx prisma validate; npm run build; npm run db:migrate:deploy; npx prisma migrate status.

Full integration: node scripts/creator-portfolio-v3-p4-gates.mjs from the absolute backend root in the P4 inventory. It generates synthetic configuration in-process, creates a unique PostgreSQL17 tmpfs container, applies all105 migrations, runs72backend/208frontend/29PostgreSQL assertions plus the comprehensive all-role seed, production password/JWT authentication,128Axe inspections and cleanup.

Requirements are already-installed Docker, cached postgres17-alpine and the existing Edge path; the harness never installs system software. Default integration rebuilds backend. --runtime-retry is restricted to exact-P2, compiled-source-unchanged CSS/harness retries and refuses compiled source/schema/lock/Docker drift.

Configuration names:
DATABASE_URL, DEV_DATABASE_URL, SETTINGS_FIELD_ENCRYPTION_KEY, JWT_SECRET, JWT_ISSUER, JWT_AUDIENCE, AUTH_OTP_PEPPER, C03_INVITATION_IDENTITY_HMAC_PEPPER, CREATOR_PORTFOLIO_DATABASE_TEST, CREATOR_PORTFOLIO_P4_TEST, CREATOR_PORTFOLIO_FIXTURE_PASSWORD, NODE_OPTIONS, VITE_API_URL, VITE_STAGE, PORTFOLIO_EVIDENCE_DIR, P4_BROWSER_PATH.
No values are returned. Local production-built frontend requires repository-defined VITE_STAGE=local; do not weaken the production API-origin validator. No .env or authentication-state file is created.

P1 migration20260916170000_creator_portfolio_v3_canonical_item_revision SHA2564d7c45fd99045c5c3f952bba6bba937082b500692cf734ea3c7c31d144e16826. All104 accepted migrations remain unchanged. Four additive own models/+80schema lines, no source FK. Fresh105/current and populated104→105 upgrade preserved199predecessor table counts/digests and80rows. Only plpgsql is needed.

Keep build and boot sequential: Nest clears dist, and Vite clears frontend dist. Never rebuild while serving the acceptance UI. Own ports33492/43492/55472 must be free; preserve unrelated developer5432container. Provider/model fixtures are deterministic. Production-built AppModule has only test provider/email DI overrides; authentication/session/Team guards are not bypassed. No production test route.

## Mandatory regression evidence

P0: own46, C3/Audience51, donor/frozen94 and accepted purge18 PASS.
P1: affected focused108, additional17 and PostgreSQL26 PASS.
P2: focused72, PostgreSQL29 and health200 PASS.
P3: focused frontend205 PASS.
Final P4: backend72, frontend208, PostgreSQL29 and comprehensive seed1 PASS.
Typecheck/build/scoped zero-warning lint/format/diff/security PASS.

Browser390/767/768/1440 ×7states ×3roles =84workspaces, plus8Add dialogs and36defensive states. All128Axe inspections have zero violations at every severity; overflow, authenticated console/page errors and external traffic are zero. Eight Owner/Manager curation cohorts add8items/32audits, with Source counts unchanged. Replay preserves exact refs/rows with zero repeat expensive work.

P4 outline contrast correction is Portfolio-scoped; shared Aurora tokens/styles remain unchanged. Saved-view retry is a technical GET, not provider refresh or Settings mutation; all three roles have regression tests. Controlled malformed HTTP200 bodies exercise the defensive parser, not production payloads. Inherited font CSS is fulfilled locally with unchanged fallback declarations; no live font/provider/CDN traffic.

The P4 artifact contains the full absolute60file inventory, packet/cumulative statistics, prompt/evidence digests, failures and row counts. Sanitized128UI screenshots remain outside Git. integrated-row-counts.json is a pre-cleanup snapshot; cleanup.json is the final cleanup proof. Services/container are removed, ports free, no authentication-state/raw-media artifact.

## Settings-owned debt — do not implement here

SETTINGS_CREATOR_INSTAGRAM_SOURCE_DELETE_RECONCILIATION = DEFERRED
SETTINGS_CREATOR_DELETE_MY_DATA = DEFERRED
OWNER = SETTINGS — CREATOR

Future Settings Delete my Instagram data deletes source/base only and preserves all derived Creator Centre outputs/state. Current internal purgeCreatorInstagram() remains accepted blob1ae5c276c98d2c66a39bf464cd5453350533bdcb and still has older derived-deletion behavior; it is not the final user-facing contract.

Portfolio production never calls, extends or renames it; no source-delete/disconnect route or source-owned FK cascade is added. Tests preserve all18historical purge assertions and verify derived Portfolio/peer survival. Direct task-aggregate deletion is only an own-FK test, not a production coordinator. Broader Delete my data needs separately accepted Settings scope.

MEDIA_KIT = NOT_STARTED / PROHIBITED_PENDING_PORTFOLIO_ACCEPTANCE

No public URL/PDF/email reveal/Work with Creator CTA, provider permissions, foreign canonical write, deployment or development merge. Inherited advisories and link-only/Story/source-breadth limitations remain disclosed; no silent library/runtime reconfiguration.
