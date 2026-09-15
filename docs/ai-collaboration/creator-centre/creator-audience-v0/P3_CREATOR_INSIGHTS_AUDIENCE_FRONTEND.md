# P3 — Creator Insights / Audience frontend

`CREATOR_AUDIENCE_V0_P3_EVIDENCE_V1`

## Accepted checkpoint

- Frontend parent: `777c74cb7ca978053d9c10dcab29b282bc2dbea8` / `a3d6a32f566eeed9b608a7b5a2a4d1ec0b238e6f`.
- Frontend P3: `24a97eafd2da4e6f98282b10916adb5758c3017f` / `0c3079c1dc83a29da29393e04ad85169fba88e61`.
- Backend remains P2: `1eba8f80c5f98bcd2bc5b015985a4b01292ed81d` / `bf1f561dccbca15c1c3faa79a22820863192aafe`.
- Normal non-force publication and independent fetch-back returned exact local/remote SHA and tree equality; P0 frontend ancestry passed.

## Product and integration proof

- `/creator/insights/audience` is mounted inside the authenticated Creator shell and `/creator/insights` redirects to it.
- Insights is a durable active desktop and mobile primary destination. Existing Home, Campaigns, Collaborations, and Settings remain; no Content placeholder or legacy Creator Centre authority was introduced.
- The route requires Creator platform access and the explicit `INSIGHTS_AUDIENCE_READ` projection. The backend remains the authorization authority.
- The strict Zod parser rejects widened/malformed payloads. The client uses the existing authenticated fetch path with `GET` and `cache: no-store`; the hook preserves last-good data and exposes an explicit read retry, not provider refresh.
- Render order is source/freshness, Audience Highlights, the usable cohort content, then Data status/limitations. Highlights remain outside the cohort switch.
- Two usable cohorts expose one keyboard-operable Followers/Engaged tab switch. One usable cohort renders directly. No usable cohort renders no empty chart and only the canonical Settings recovery deep link.
- Counts remain visible when valid; percentages render only with denominator authority. Missing, suppressed, unavailable, disconnected, reauthorization, partial/unknown capability, provider-failure, stale/current-preserved, loading, malformed-contract, and retryable-read states fail closed without fabricated zeroes.
- No edit, customization, Media Kit, manual refresh, connection mutation, provider detail, pipeline detail, or one-option platform/cohort control exists.

## Verification

- Focused frontend matrix: 7 files / 33 tests passed. Related authentication/platform guard matrix: 2 files / 23 tests passed.
- Production TypeScript/Vite build: PASS using local test-stage runtime configuration; the existing large-chunk advisory is unchanged and non-blocking.
- Scoped ESLint: PASS with zero warnings. Prettier and `git diff --check`: PASS.
- Authenticated Chromium/Axe production-preview proof:

| Width | Navigation | Hierarchy | Keyboard/focus | Overflow | Axe serious | Axe critical | Lesser |
| --- | --- | --- | --- | --- | ---: | ---: | ---: |
| 390 | mobile bottom nav | PASS | PASS | PASS | 0 | 0 | 0 |
| 767 | mobile bottom nav | PASS | PASS | PASS | 0 | 0 | 0 |
| 768 | desktop sidebar | PASS | PASS | PASS | 0 | 0 | 0 |
| 1440 | desktop sidebar | PASS | PASS | PASS | 0 | 0 | 0 |

- Browser state extensions: no-usable/re-auth recovery PASS; count-only/single-cohort PASS; no empty chart, invalid percentage, one-option switch, or mutation control was rendered.
- Test-only browser interception used synthetic session/actor/Audience fixtures and blocked non-local traffic. Live Graph/model calls: NONE.
- High-confidence secret and credential-bearing URL scan: PASS. No `.env`, raw provider payload, raw media, token value, screenshot, or runtime artifact is tracked.

## Review disposition

The first browser pass exposed an invalid nested landmark in the new feature and a local production-preview configuration requirement. The bounded correction changed the feature root to an explicitly labelled section and rebuilt the preview with repository-supported local-stage configuration; all four widths and Axe gates then passed.

`P3 = ACCEPTED`

`P3_CORRECTION_CYCLES = 1`
