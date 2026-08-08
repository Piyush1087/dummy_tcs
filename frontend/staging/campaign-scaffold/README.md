# Campaign frontend staging scaffold

This is a minimal runnable React/TypeScript staging surface for the Campaign feature. It is not the production application and contains no backend/API wiring.

## Purpose

It proves this composition only:

Application Shell → shell Content Area → CampaignPage.

`src/app/ApplicationShell.tsx` is a Content Area adapter for the canonical shell contract in `frontend/layout/app_shell/`. It deliberately does not implement shell navigation, desktop/mobile headers, bottom navigation, hamburger navigation, notifications, or a user menu.

## Contract boundary

- `src/features/campaign/types.ts` contains the frontend-facing projection interfaces derived from `campaign/frontend/view_dto_api_contract.md`.
- `src/features/campaign/readAdapter.ts` defines the replaceable read-adapter interface and a typed staging mock. It exposes projection data only; it does not expose Prisma models or implement business rules.
- `CampaignPage` is a composition root only. Header, Copilot, Performance, Products & Briefs, workspaces, drawers, modals, lifecycle variants, and commands are intentionally deferred.

## Run

Requires a current Node.js LTS installation.

```sh
npm install
npm run dev
```

Open the local Vite URL printed by the dev server.

## Verify

```sh
npm run lint
npm run test
npm run build
```

The only test verifies that the mock boundary returns a typed Campaign Page projection rather than persistence data.
