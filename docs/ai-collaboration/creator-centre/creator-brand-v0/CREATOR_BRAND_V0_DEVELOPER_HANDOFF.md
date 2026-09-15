# Creator Brand V0 — developer handoff

Status: P0–P3 ACCEPTED; P4 evidence-ready awaiting external technical review. Not merged/deployed. Backend6206f43c6a13c304c971b810e1dd99a20aaaa11f/tree533f543612b856cfaf3b57769fe0b5541b803c3f; frontendc505c0679e39effdd9608e319112591d5ae4c079/tree18dd8ed798aae509baa7d0d51ab8e31d7ac2dbbd. Final authority containing SHA/tree/equality is in the immutable P4 report.

## Capability and ownership

One source-independent, platform-neutral Creator-controlled Brand workspace with projected read-only identity, Profile & Positioning, Creator Style, Voice & Personality and Visual Identity. Suggestions assist only five frozen families; commercial Bio is manual-only. Observed ≠ suggested ≠ confirmed.

CreatorBrandProfile owns canonical values; CreatorBrandRevision owns immutable authored/confirmed audit. Derived creator_brand_suggestions uses existing owner-scoped verified Intelligence execution/generation/transition/CAS-current. Content is consumed read-only, not recalculated/reacquired. No second scheduler/current system.

## Source map

Backend src/features/creator-brand/ owns:

- contracts/creator-brand-profile.contract.ts, creator-brand-suggestions.contract.ts, creator-brand-taxonomies.ts, creator-brand-archetype.adapter.ts: strict fields/commands/support/bounds/roles and shared artifact bridge.
- creator-brand.controller.ts, creator-brand.service.ts, creator-brand.repository.ts, dto/creator-brand-consumer.schema.ts: authenticated read/manual/confirmation and canonical transaction/audit.
- creator-brand-content-source.adapter.ts, creator-brand-current.reader.ts, creator-brand-suggestions.consumer.ts: exact admitted Content/source fence/current/projection/reference verification.
- creator-brand-suggestions.processor.ts, creator-brand-suggestions.pipeline.ts, creator-brand-suggestions.persistence.ts, creator-brand-runtime.contract.ts, creator-brand.module.ts: provider-neutral semantic port, deterministic finalization, shared execution/CAS and DI.
- contracts/creator-brand-p0.contract.test.ts, creator-brand-p1.service.test.ts, creator-brand-p1.postgres.test.ts, creator-brand-p2.processor.test.ts: contracts/canonical/API/suggestion regressions. Integrated P2 PostgreSQL proof resides in src/features/creator-content/creator-content.postgres.test.ts.

Existing shared owners:

- Creator Settings Team actor service/policy and shared/creator/creator-workspace-actor.contract.ts own active actor → canonical Workspace Owner subject and actions.
- Creator Settings Instagram owns credentials/lifecycle; Creator Brand admission reads only non-secret account/generation/capability/status fences.
- Data Extraction IntelligenceOwnerScopeRepository owns exact source purge; only derived Brand Object/processor allowlists extended.
- Brand Intelligence shared execution/generation/transition validators and current repository own derived publication.
- Creator Content pipeline owns post-success optional Brand seam; P2 failure does not fail accepted Content and Content replay does not repeat the hook.
- Canonical Campaign archetype artifact/loader and existing Campaign picker own the30-ID vocabulary, not Creator Brand.

Frontend src/features/creator-brand/ owns strict profile/suggestion/consumer contracts, api/creator-brand-client.ts, hooks/use-creator-brand.ts, components/creator-brand-fields.tsx, creator-brand-route-guard.tsx, creator-brand-workspace.tsx and creator-brand.css plus focused tests/fixtures. src/pages/creator/brand/creator-brand-page.tsx integrates with src/routes/app-routes.tsx; sidebar-items.ts, auth/constants.ts and shared actor action contract contain bounded integrations. P3 scripts under scripts/ are test-only real-auth fixture/browser/DB proofs, not production bypasses.

## Public contracts and authorization

UI /creator/brand is a Creator Centre peer, outside unchanged RequireCreatorPlatformAccess but inside real authenticated App shell/Team context. Existing five bottom destinations and Audience/Content Insights peers unchanged.

GET/PUT /api/v1/creator/brand returns strict creator-brand-v0.1; private/no-store; authenticated existing JWT/session. Explicit actions CREATOR_BRAND_READ, CREATOR_BRAND_EDIT, CREATOR_BRAND_CONFIRM_SUGGESTION:
Owner YES/YES/YES; Manager YES/YES/YES; Assistant YES/NO/NO.
Subject is canonical Workspace Owner, never delegated actor or caller-selected identity. Active membership/action rechecked under existing Team transaction lock. Name/avatar/current eligible Instagram handle projected only, never Brand-writable.

PUT discriminated intents:
MANUAL full progressive profile; USE_SUGGESTION exact server-held object/component/candidate references without value; EDIT_SUGGESTION full valid final profile plus references, unrelated field changes rejected.
Expected revision and UUID idempotency required. Exact replay returns original snapshot; stale CAS/key semantic drift reject. Immutable revisions record authenticated actor/membership/role and MANUAL/SUGGESTION_USED/SUGGESTION_EDITED server origin. Historical Applications/Collaborations remain unchanged.

## Frozen taxonomies and bounds

Product V2 + Amendment1 pins in P4 evidence remain sole authority.27Creator/content-topic niches max3;12voice IDs max3/optional description300; headline160; manual commercial Bio1000; visual descriptors5x100; optional palette5 uppercase #RRGGBB; languages10 normalized BCP47.
Shared Campaign30archetypes: Creator emptyUNCONFIGURED/progressive or1..3CONFIRMED, Campaign1..5 unchanged. UGC_CREATOR style does not imply Open to UGC projects willingness. Identity/self-declaration is not fit/ranking proof.

## Suggestion/state/lifecycle semantics

Exactly positioning, voice_personality, creator_style, visual_identity and languages. Exact admitted eight-path Content/current/completed Capture/Evidence subset and Settings/Owner/source identities required. LOW≥3distinct posts/complete provider inventory/50%coverage; MEDIUM≥5/70%/2dates. HIGH, Bio, sixth family, unsupported HEX, performance identity, score and auto-apply forbidden.

Provider-neutral semantic DI identity is versioned; default MissingCreatorBrandSemanticPort fails closed. Server—not model—validates bounded output, exact quotes/support, confidence, vocabulary and candidate hashes. Production low-level model adapters require owning configuration; no live key needed for mandatory fixture proof.

Manual setup/edit always usable without source/Content/model. Available/partial/stale/processing/degraded/unavailable/insufficient are truthful; no fabricated negatives. Exact successful derived replay performs no new acquisition/model work and preserves refs/counts. Failed changed execution preserves prior current; newly insufficient successful result has no obsolete usable candidates. Confirmation revalidates current/source fence before retries.

Refresh/failure/disconnect retains canonical truth and revisions. Internal Settings-targeted Instagram delete-data removes target source/derived lineage/current only, retains canonical profiles/revisions; other Creator/Brand/website/accepted Audience/Content/historical rows survive. No new public delete action.

## Database and local verification

PostgreSQL17 with exactly102 migrations; additive head20260915100000_creator_brand_canonical_profile_revision. No legacy backfill. Published LF SHA256 ec6484427c24d5755549ff9e71bae989f5ff592a6fc5da953ca07494b8744452. Only standard plpgsql required. Use disposable loopback routes matching accepted harness guards; never a developer/production DB.

Configuration names only: DATABASE_URL, JWT_SECRET, JWT_ISSUER, JWT_AUDIENCE, AUTH_OTP_PEPPER, SETTINGS_FIELD_ENCRYPTION_KEY, POSTMARK_SERVER_TOKEN, POSTMARK_OTP_TEMPLATE_ID, POSTMARK_PASSWORD_RESET_TEMPLATE_ID, STAGE, PORT, CORS_ORIGINS, AWS_EC2_METADATA_DISABLED, OFFERING_PRICE_REFRESH_ENABLED, INSTAGRAM_IMAGE_VISUAL_ENABLED, INSTAGRAM_SELECTED_VIDEO_FRAMES_ENABLED, INSTAGRAM_SELECTED_VIDEO_SPEECH_ENABLED. Synthetic ignored local configuration removed after testing.

Test-only names: CREATOR_BRAND_P1_DATABASE_TEST, CREATOR_BRAND_P1_UPGRADE, CREATOR_CONTENT_DATABASE_TEST, CREATOR_AUDIENCE_P1_DATABASE_TEST, CREATOR_AUDIENCE_P2_DATABASE_TEST, C05_TEAM_DATABASE_TEST, BRAND_INTELLIGENCE_DATABASE_TEST, BRAND_INTELLIGENCE_EXECUTION_DATABASE_TEST, CREATOR_BRAND_P3_FIXTURE, CREATOR_BRAND_P3_PASSWORD, CREATOR_BRAND_P3_PROVIDER_TOKEN, CREATOR_BRAND_P3_UI, CREATOR_BRAND_P3_API, CREATOR_BRAND_P3_BROWSER, NODE_PATH.

Commands: npm run prisma:generate; npx prisma validate; npm run db:migrate:deploy; npx prisma migrate status; npm run build; npx tsc --noEmit --project tsconfig.build.json; scoped ESLint/Prettier; git diff --check. Focused unit/PG manifests/flags/routes and pinned Brand verification procedure are exact in P4_INTEGRATED_ACCEPTANCE_AND_IMMUTABLE_CLOSEOUT.md and P2 artifact. Keep unit-owned model-switch fixtures isolated from runtime environment overrides. Run time-sensitive global-worker suites serially in fresh isolated routes; retain original assertions/timeouts and disclose failed invocations.

Frontend npm run test once; focused19-file command in P4 evidence; production build includes typecheck. Reuse unchanged scripts/p3-creator-brand-browser-fixtures.ts, p3-creator-brand-db-proof.mjs, p3-creator-brand-browser-proof.mjs against disposable fixtures, real password/session/Team and production builds. No auth bypass.

## Responsive/accessibility and diagnostics

390/767 mobile,768/1440 desktop: keyboard-only authoring, visible focus, Cancel/success heading focus, menu Escape/invoker restoration, oneH1/order, no horizontal overflow, no console/page errors. P4 actual Axe0serious/0critical/0lesser at each width. Strict errors preserve last-good canonical state and unsaved draft/retry identity;409 refetch/review, no optimistic canonical replacement.

Inherited diagnostics: backend npm audit52(4low/24moderate/23high/1critical);frontend15(6moderate/8high/1critical);8frontend development lint warnings; React Router/SSR unit warnings; large production chunk warning. No upgrades/rule disables. Existing historical C03 audit logs remain accepted/unmodified, no new runtime log committed.

## Separate deferred/debt register

- Normal integration/review/merge/deployment, not authorized by P4.
- Production provider/semantic model adapter configuration must remain fail-closed and preserve strict grounding/secure media; no live acceptance calls.
- Inherited Creator Entry delegated-owner projection in its owning workspace; Brand's accepted source-independent access does not rely on it.
- ContentV1/longitudinal Intelligence and Creator Brand future editing/suggestion expansion require separate authority.
- Media Kit/Portfolio/Commercial Setup/downstream privacy/ranking integrations require owning Product decisions.
- Repository-wide dependency diagnostics require separate remediation authorization.
- Explicit local cleanup-policy exception paths in P4 evidence are non-secret ignored/source-only outputs outside publication, not a Creator Brand V0 implementation defect.

Final readiness depends on authority normal push/fetch-back/both ancestors, backend/frontend unchanged equality and clean worktrees in immutable report. Technical/Product acceptance belongs solely to Child-SA/Program-Orchestrator.
