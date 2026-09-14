# Creator Audience V0 — developer handoff

`CREATOR_AUDIENCE_V0_DEVELOPER_HANDOFF_V1`

## Checkpoints

- Backend: `885e1a57a2c0fff75db162216900684303256b9f` / `fffe8bd7fcbe99020ab6f4c50c1c5f91af78015e`.
- Frontend: `39799c75abc89e47d6a3526fb05f83d4cfbef585` / `4d76d7766d82153c60fafd6963f64740b729e9de`.
- Authority parent before this handoff: `13ee2cdf6c17bdc06637364d322ec0b08c4841ce` / `881540fb45a72a631dd0d7d652728f5e265f85e8`.
- Definitive branches are `program/creator-audience-v0-backend`,
  `program/creator-audience-v0-frontend`, and
  `program/creator-audience-v0-authority`.

## Runtime map

- Consumer route: `GET /api/v1/creator/insights/audience`.
- Frontend route: `/creator/insights/audience`; `/creator/insights` redirects.
- Explicit action: `INSIGHTS_AUDIENCE_READ` for Owner, Manager, Assistant.
- Backend feature: `src/features/creator-audience/`.
- Frontend feature: `src/features/creator-audience/` and
  `src/pages/creator/insights/creator-audience-page.tsx`.
- Shared ownership: `IntelligenceOwnerScopeRepository`; use the discriminated
  Brand/Creator scope and never add a Creator-only DE/current runtime.
- Settings-owned source fence: the Creator Audience credential-fence adapter.
  Credential decryption stays inside acquisition after replay misses.
- Scheduling: the existing Instagram sync coordinator and hourly dispatcher;
  no Audience scheduler or manual refresh exists.

## Data and truth contract

Provider reads are `follower_demographics` and
`engaged_audience_demographics`, `lifetime` / `this_month`, for age, gender,
country, and city. `capturedAt` is successful acquisition time. Empty versus
privacy suppression remains `PROVIDER_EMPTY_OR_THRESHOLD_SUPPRESSED`; category
cap remains 45; stale threshold remains 192 hours.

The DTO is strict and versioned as `creator_audience_v0.1`. Percentages require
an explicit valid denominator. Cohort availability depends on usable
demographic dimensions, not the account follower count. Highlights use the
deterministic 5/10-point rules and are capped at three. Failure preserves current.

## Local verification

Configuration names used by the local boot/fixture are:

```text
DATABASE_URL
DEV_DATABASE_URL
STAGE
PORT
APP_FRONTEND_URL
JWT_SECRET
JWT_ISSUER
JWT_AUDIENCE
AUTH_OTP_PEPPER
SETTINGS_FIELD_ENCRYPTION_KEY
POSTMARK_SERVER_TOKEN
POSTMARK_OTP_TEMPLATE_ID
POSTMARK_AUTH_OTP_TEMPLATE_ID
POSTMARK_PASSWORD_RESET_TEMPLATE_ID
POSTMARK_AUTH_FROM
POSTMARK_NOTIFICATION_FROM
CREATOR_AUDIENCE_P4_FIXTURE
CREATOR_AUDIENCE_P4_PASSWORD
CREATOR_AUDIENCE_P4_PROVIDER_TOKEN
P4_FRONTEND_URL
P4_BACKEND_URL
P4_BROWSER_PASSWORD
P4_CHROME_PATH
```

Use only synthetic local values and an exact disposable database. The guarded
fixture script is `scripts/p4-creator-audience-browser-fixture.ts`; the real
auth/API/UI proof is `scripts/p4-creator-audience-integrated-browser-proof.mjs`.
Neither script contacts Meta or a model.

## Deferred boundaries

Do not infer authority for Content, Creator Brand, Portfolio, Commercial Setup,
Media Kit, Persona, customization/editing, manual Audience refresh, or a
user-facing Instagram data-deletion action. Settings continues to own
connection lifecycle. No merge to `development` or deployment is part of this
handoff.

