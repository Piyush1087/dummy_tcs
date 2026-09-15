# Creator Audience V0 — P0 convergence and executable contract freeze

`CREATOR_AUDIENCE_V0_P0_CONVERGENCE_AND_EXECUTABLE_CONTRACT_FREEZE_V1`

## Disposition

`P0 = ACCEPTED`

The current MVP and accepted Brand Instagram donor histories are joined without
discarding either lineage. The only merge conflict was `prisma/schema.prisma`;
it was resolved as a structural union, with current-MVP definitions retained and
donor-only definitions added. No Product semantic conflict was found.

## Inputs and convergence

| Repository | Current MVP | Instagram donor | P0 checkpoint before authority publication |
| --- | --- | --- | --- |
| Backend | `129b291ecbca4a1e79451215a81726000cfb5bff` / `9fe6585addf8d8ccee9973b9b55cc0312c6e2b0b` | `fef32afb0fdef52f00c7c22b3d0a85967a68fded` / `7ef6bd705b55ef82836b3f57f06a2832a867e781` | `0da1918181d7fccc2ebce10e13dccc4817e0fcdb` / `308855487158a4c4fae0bd27dcd39ab86ed2c059` |
| Frontend | `6ea628b09817c4784a248658ddfc0202a13fbb00` / `7de1702cda439c6f0d77000ee0c0c53f40a76c4d` | `5866d0ac82f742957f53a8db2144a9a166628b75` / `7c095290ffdef4c84f37382bc594bef536c92a49` | `777c74cb7ca978053d9c10dcab29b282bc2dbea8` / `a3d6a32f566eeed9b608a7b5a2a4d1ec0b238e6f` |
| Authority | `1748c97b65e8c57d5a640b262c1f9ec4f6c54170` / `f47e18b32157cc9924fa97bc6e5efe9f9fd540ac` | `b3f04918435db5043c5498ea92250762047291b1` / `253ea239ffa2cdb9f1f87c546037c4a722512b46` | convergence parents `38a10af` and `c12aa82` |

Recorded shared ancestors `4c5f42858b950b7cd342f8972f99f548f3daa942`
(backend) and `323658d4b147b95b5629ff8d91fa90b8fe9077e4`
(frontend) are ancestors of both corresponding inputs.

## Executable freeze

The executable backend contract is
`src/features/creator-audience/contracts/creator-audience-v0.contract.ts`.
It freezes:

- discriminated `BRAND` / `CREATOR` owner scope and collision-free scope keys;
- Creator Audience Object/component ownership;
- strict bounded consumer DTO and `/api/v1/creator/insights/audience` route;
- denominator-authorized percentages and independent dimension truth states;
- deterministic 5-point notable / 10-point material Highlights finalization,
  stable ordering, evidence requirement and three-item cap;
- `INSIGHTS_AUDIENCE_READ` for Owner, Manager and Assistant;
- Settings projection-only and `/creator/settings/instagram` recovery boundary;
- internal exact Creator-source purge port with no public delete endpoint.

## Migration and runtime evidence

- Migration directories: 98; duplicate names: 0; duplicate SQL hashes: 0.
- Clean PostgreSQL 17 apply: 98/98; status current.
- Current-MVP populated migration history upgraded 94 → 98.
- Instagram-donor migration history upgraded 91 → 98.
- Prisma generate and validate: PASS.
- Backend production build: PASS.
- Frontend immutable install, typecheck and production build: PASS.
- Creator Settings/Team/Home and Brand Instagram focused convergence tests: PASS.
- Executable contract tests: 25/25 PASS.
- Frontend convergence tests: 11/11 PASS; existing SSR `useLayoutEffect`
  warnings only.
- Git diff check, scoped lint, secret/forbidden-artifact inspection: PASS.
- Live Graph/model calls: NONE.

The first backend merge accidentally committed the earlier staged schema view;
the already validated complete union remained in the working tree. This was
corrected with the normal follow-up commit `811d19b40b4ddc1fe946965aece497b5f4dc5f09`.
No history was amended or rewritten.

## Conditional continuation

P1 may start only from the published/fetched P0 checkpoints recorded in the
single execution ledger. P0 used one bounded correction for the staged-schema
snapshot mismatch.

