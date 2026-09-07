# C06_BASE_CONVERGENCE_PLAN_V1

## Backend

```text
REPOSITORY = Piyush1087/creator-commerce-backend-v2-clone
START_FROM = 4e082f67953f0d6b55fa791f2cea03c8aef28119
MERGE = a38102fd9662f1654c9572b19913b9e228385b73
MERGE_BASE = ec395bf5760b295dddd9c3f7e9c2f05485b6b743
MODE = NORMAL_NON_FORCE_MERGE
EXECUTION_BRANCH = c06/creator-payouts-provider-disabled-v1
```

The only path changed on both accepted lines is `src/features/collaboration/collaboration.module.ts`. Resolve additively by retaining both `CollaborationHomeReadService` and `CollaborationTrustedConfirmationService` in the appropriate module composition. Any non-additive semantic conflict stops P0.

Post-merge invariants:

- accepted C03/C04/C05/C02A behavior remains;
- accepted Brand Payout runtime remains;
- 86 total migration directories;
- first 85 migration identities/content unchanged;
- migration 86 is `20260912100000_brand_payouts_wave_b_normal_path`;
- migration-86 SHA-256 is `887e5bb6bd262a4dd02e42a798db55bd136d97bf6a923df7e6466573f11d1f84`;
- Prisma format/validate/generate, focused overlap tests, build, and startup smoke pass.

## Frontend

```text
REPOSITORY = Piyush1087/creator-commerce-frontend-v2-clone
START_FROM = 29e78397fc66676d0134c45aa0bb6af173fbe12b
MERGE = 25441dd4fd228bec4d6c9fe9f39c2297318b6167
MERGE_BASE = 323658d4b147b95b5629ff8d91fa90b8fe9077e4
MODE = NORMAL_NON_FORCE_MERGE
EXECUTION_BRANCH = c06/creator-payouts-provider-disabled-v1
```

The only path changed on both lines is `src/routes/app-routes.tsx`. Resolve selectively by preserving C03 Creator Campaign, C04 Collaboration, C02A Creator Home, Creator Settings, Creator app shell, and the accepted Brand Payout route guard. Any route ownership or auth-policy conflict stops P0.

## Prohibited convergence methods

- rebase or history rewrite;
- force push;
- donor cherry-pick decomposition unless ordinary merge is proven impossible and SA reviews it;
- migration edit/rename/recreation;
- source changes mixed into the convergence commit.

Each repository ends P0 with one auditable convergence checkpoint, clean worktree, pushed branch, and fetch-back verification.

