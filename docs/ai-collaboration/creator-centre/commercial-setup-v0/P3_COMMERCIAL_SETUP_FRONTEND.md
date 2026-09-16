# P3 — combined Commercial Setup frontend

All mandatory P3 gates must pass before the containing authority checkpoint is published. Final Product acceptance remains with the Technical SA / Program Orchestrator. Backend P2 preserved: `4baa9768fb01845aa4a907b82b54d46101559487`, tree `1ab92e21c3e7167f18b8b66efeec1cf4cdc9d219`. P2 authority publication/fetch-back: `6a0cbe24debe88e284c1a9a3c2b84998905234ad`, tree `2ee2d09c541194e3a641fe4882d885ca163d848a`.

## UI and ownership

One existing Creator AppShell route `/creator/commercial-setup`, outside the Instagram/platform source gate. One sidebar/mobile-drawer destination; accepted five-item bottom nav unchanged. Accessible section anchors lead to independent Work Preferences and Rate Card forms. Aurora v5 cards, controls, alerts, SideDrawer, tokens and responsive shell reused. Strict authenticated no-store clients and consumer/command runtime schemas. No second shell, manual currency input, UGC rate, package, Story bundle or new public Instagram API.

Work Preferences keeps progressive unanswered answers, four accepted industry IDs, disjoint/deduplicated preferences, availability/paused date and willingness fields. Readiness is non-secret read-only Settings/Payouts projection; KYC Coming soon. Owner/Manager may edit; Assistant sees disabled/read-only controls and no mutation or Settings-grant action. Country is locked under current bank authority; bank-first setup uses current country, while an existing stored manual declaration is preserved and cannot overwrite bank truth.

Rate Card presents exact four `Starting from` references, two add-ons, usage/payment preferences, read-only UGC/barter and nine supersession terms. Prices parse exact decimal-to-minor-unit integers without float conversion/FX. Stale authority prevents editing until server reconciliation; same-currency money retained, cross-currency money cleared, rights/payment retained. Manual monetary reset requires explicit SideDrawer confirmation; Cancel preserves draft and stored money.

Loading/default/partial/error/retry/saved/last-good/unauthorized states and an explicit latest-state review after 409 are tested. Dirty forms do not overwrite unsaved drafts on server refresh. Strict clients reject unknown response/command material and never read/render rejected diagnostic bodies. Scoped error focus recovery uses the visible workspace alert; validation errors use local summaries.

## Gates and executed commands

- `VITE_API_URL='' npx vitest run --config vitest.config.ts src/features/creator-commercial-setup`: 37 tests, seven files PASS (strict parser/client, real hook, forms, combined view, shell/route fence).
- Full frontend regression via process-only `VITE_API_URL='' npm run test`: final 1347 PASS / one existing environment-gated skip; 168 passed files / one skipped. First local-preview-config run had six unrelated endpoint URL expectation failures; the repository test route override restored relative URLs without editing those tests or production clients. Existing SSR/React Router warnings are recorded, not hidden.
- `npm run typecheck`, `npm run build`: PASS; 2514 modules, existing large-chunk warning retained.
- Scoped `npx eslint` over changed feature/page/shared shell/action/route files: PASS. Prettier and `git diff --check`/staged check PASS; no package/lock change.
- Real production frontend at loopback 4182, backend 6062, disposable PostgreSQL 17 at loopback 55512. Browser script `CREATOR_COMMERCIAL_BROWSER_PROOF=true node --env-file=.env ../frontend/scripts/p3-commercial-browser-proof.mjs`, installed Edge 153, provider destinations blocked, real password/JWT session contract, no auth bypass or stored browser state.

## Browser evidence

| Width | Manual Owner/Manager/Assistant | Four bank Owner states | Serious/critical/lesser Axe | Overflow/console/page errors |
| --- | --- | --- | --- | --- |
| 390 | PASS | PASS | 0/0/0 | 0/0/0 |
| 767 | PASS | PASS | 0/0/0 | 0/0/0 |
| 768 | PASS | PASS | 0/0/0 | 0/0/0 |
| 1440 | PASS | PASS | 0/0/0 | 0/0/0 |

28 authenticated pages, 12 role cases and 16 bank cases. Bank cases: same-currency rebind, cross-currency clear, conflict Settings recovery, bank-first setup. Keyboard section navigation/visible focus PASS; mobile drawer Escape restores Open Menu focus; desktop sidebar destination present. One H1 and sensible section heading order. Zero Instagram-entry requests and source connections. Anonymous 401; inactive 403; Assistant PUT 403; injected currency 400. Owner/Manager writes hit exact canonical Owner rows; replay preserves row/revision counts.

First browser fixture helper used a non-unique Prisma selector; fixed to bounded first-plus-exact-count, sanitized failure handling and actual session JWT headers. First successful mutation pass then found industry outline text contrast; only this feature now uses the approved high-contrast text token. No global Aurora rule changed. Owner390 monetary reset/replay was already completed before Axe failed; the final passing run explicitly retained this task-owned completed fixture instead of reseeding/overwriting it. Later widths exercised the full mutation path in the passing run. Final read-only closeout mode checks exact stored values and stable rows without repeating prior mutations.

No secret values, readiness diagnostics, raw media, signed locators, screenshots/state/log files, temporary paths or provider/model payloads are persisted. Test harness files are not imported by production. Backend/schema/migrations/Settings/payout/C04/Campaign/Collaboration implementation unchanged by P3. Normal frontend/authority publication and independent fetch-back must pass before autonomous P4 proceeds; exact containing identities are recorded subsequently to avoid self-reference.
