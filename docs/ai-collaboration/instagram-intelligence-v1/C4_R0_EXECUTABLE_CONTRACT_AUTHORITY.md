# Instagram Intelligence C4-R0 — Executable Contract Authority

**Status:** `EVIDENCE_READY_AWAITING_CHILD_SA_PROGRAM_ORCHESTRATOR_ACCEPTANCE`

**Execution date:** 2026-09-12

**Scope:** authority/contracts only; no backend, frontend, runtime, schema, migration, dependency, API, provider, scheduler, hidden Brand, or C4 implementation change

## Accepted circuit breaker and starting identity

The Program accepted `C4_EXECUTABLE_CONTRACT_AUTHORITY_REQUIRED` as a true circuit breaker. This recovery started from exact authority `087bfa526264e2388188e473738643078758cdcb` / tree `4bd633b64d1fc3915c98293b4eb295ab992cca50`, backend `c592d7b1731b15cce9609efafbe7d689a5ca8744` / tree `922ad1bb363ce85c3dd73cee1daf65062d99b0a0`, and frontend `bc8523183ae4892c0b538474d2f5444a1ea356d8` / tree `7f3016c01500083ae2f536ebd0540219c9228dd7`. All local/fetched identities matched and all worktrees were clean.

## Frozen executable authority

Exactly three C4 processors are declared: `instagram_content_behavior@1.1`, `instagram_audience_profile@1.0`, and `instagram_organic_performance_profile@1.0`. Each owns its Object root plus every registered component path. The exact total is three Objects and 35 unique semantic addresses, with zero missing paths, extra paths, or duplicate active owners. Public Object and payload contract versions remain `1.0`.

Content 1.1 is the sole active content owner only at resumed C4 activation. B4 content 1.0 remains immutable and historically verifiable; the two versions cannot be active simultaneously. Legacy B4 current remains readable, a successful first C4 content generation atomically supersedes it, and a failed first C4 execution preserves it. C4-R0 does not implement activation.

Generated values permit only `PARTIAL_CURRENT|CURRENT`, `PARTIAL|READY`, `CURRENT`, `currentPreserved=false`, and a non-null authoritative timestamp. `NO_CURRENT`, stale/unknown freshness, and preserved-current states remain projections. Every registered component is mandatory and carries an explicit admitted value state.

The machine register freezes Result → Signal → Learning thresholds, audience materiality, performance-band and trend cutlines, C2 no-recalculation, C3 grouping-only use, exact Evidence lineage/provenance, unavailable-versus-zero semantics, and canonical-domain exclusions. It adds no DE capability or provider permission.

## B4 immutability

The six B4 source artifacts remained byte-identical before and after C4-R0:

| Artifact | SHA-256 | Git blob |
|---|---|---|
| processor definition | `b6fc5437e5b2d0c26e3740ae26eb34aff87e9380f71ad9764c02929d8b7f4610` | `f09fd76ee496b9f197b8fc087c4ca651f3f7221d` |
| reasoning | `a4ac9d028e67e8df1341b3fa9216d250f666f7182054a7d5b509b996ccbede8b` | `623d8638f6397c53fac1872680feff32a8eefc89` |
| output contract | `8dd87d3255e853695e6dd14a95faac1539e2d18f8686403a36c6c32ecaa1f4cf` | `b62b348ed1c7f87c2df63df43ce9cd7a77215d87` |
| Evidence contract | `490adfbfb3c3a45bf150c7afcafe0ce092300f6de71ce62014a1afc646a97fd9` | `e60388e9fc93e02b8023e3c228b984d6e1e366c5` |
| Object contract | `c3bc13c7f32e0b27803b062e06bbaeb4835f05952bbdfdf0d07265c9a4ff2537` | `0b294368eaf5bfaa35737675c6112f60794de15f` |
| shared metadata | `c4440fd7762f871642e3a3ec1b5e8d7c46f31c3ad6fad7c97ac3cc27ff542d72` | `d1a04ac22327ce3c69b289e758a11d88d389ebc7` |

`B4_AUTHORITY_BYTES_CHANGED = NO`

## New frozen artifact identities

| Authority artifact | SHA-256 |
|---|---|
| audience output | `d917bdab22dc13b17e8da4536eed5a38519f860480240979fed91bb61143390e` |
| audience reasoning | `18353376f345d97548c9d727e2b6cc45d79b0b19677023db5d49e05848bbcd6f` |
| audience Evidence | `910609e0c07a9dddb38831bd99203ca1b3e5105b8d869affb183b9755f33b1b0` |
| audience Object | `fcaf2f6c6df88d2cc7657e144ccff165a9446253acb5aa6346ea3bd375c585d5` |
| audience processor | `0ee5158f1e9ca868e528982c57e62194eda05110e4cd4d678d0861de97de9233` |
| audience shared metadata | `6f4d7621392dc9c9c685e8abdc40ce33876e29f00089ce5cca1986feba7c4c47` |
| content 1.1 output | `642a6fcef5ff793c4eeb8bea5d170761638a3aa692346799bd2bc47b01ad0f27` |
| content 1.1 reasoning | `c403c4e3deda885d01ec8b28f048a53295b46da67f333ff510425004291b1fbd` |
| content 1.1 Evidence | `b2dbded4f3581df910fecc854838dbbf30d0b4b0a24ff1d1a9963a01c80218df` |
| content 1.1 Object | `7bb987d60d477358d168d575d4a5d3bc242a8580c0e9516366630400cf79cab2` |
| content 1.1 processor | `efdbcc62e0f301eccd46497c56fce6ef706099b1b77e115763c49ba75b29b55e` |
| content 1.1 shared metadata | `6f4d7621392dc9c9c685e8abdc40ce33876e29f00089ce5cca1986feba7c4c47` |
| performance output | `1221d8f763632ab7bbcafd1e8e66a1e41b3add534ab0334ea8693cff0bd729e5` |
| performance reasoning | `ae96274572954b9a2154bdb6296f4daf9f3ee77d2771ddc244bb4b34960aa048` |
| performance Evidence | `2ea8151a500530762658d88a281f57ac5e0dd881eb9b5ec50bd23c3189a75632` |
| performance Object | `984de054d5b0d914982195cd5890f56463fb696e6b042bc8d5cc3eacfd0ab82e` |
| performance processor | `37ca91c44128e67e7a0b817a68645bf01736ea1a67d52403662c307172b4c8ea` |
| performance shared metadata | `6f4d7621392dc9c9c685e8abdc40ce33876e29f00089ce5cca1986feba7c4c47` |
| machine authority register | `3c9b389a5ba4cb2712614741a3eaa196ea3429084e27108ce3f9384d2675c7e5` |
| boundary fixtures | `9da32306a38f73bbdbbea6555e2b6211af2ef484568c3e4e8e2c145bec0e4cf8` |

## Validation

Eighteen YAML documents and three JSON records parsed. Thirty cross-artifact links resolved. Processor, executable-output, Evidence, Object, and public payload versions agreed. Exactness checks returned three processors, three Objects, 35 unique owned paths, zero missing/extra paths, zero duplicate owners, and 15 required boundary fixtures including an explicit invalid Learning-without-Signal case.

The backend was assessed read-only. Its generator model supports six source roles, independently pinned authority commits, root plus child path ownership, per-processor bundles, and exact-path collision rejection. Its generator/registry test matrix passed 24/24 tests. Resumed C4 requires bounded backend source-spec/registration additions, not a shared-runtime redesign.

No schema, migration, dependency, backend, frontend, Graph, model, Meta/OAuth, C4 runtime, C1, D_COMBINED, or Wave E work occurred.

`C4_R0_ACCEPTED = NO`

`C4_R0_EVIDENCE_READY = YES`

`C4 = PROHIBITED_PENDING_C4_R0_ACCEPTANCE`
