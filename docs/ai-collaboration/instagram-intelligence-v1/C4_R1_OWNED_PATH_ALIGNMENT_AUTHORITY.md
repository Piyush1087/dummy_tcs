# Instagram Intelligence C4-R1 — Owned-Path Alignment Authority

**Status:** `EVIDENCE_READY_AWAITING_CHILD_SA_PROGRAM_ORCHESTRATOR_ACCEPTANCE`

**Execution date:** 2026-09-12

**Scope:** authority-only correction; C4 runtime remains prohibited

## Accepted defect and correction

C4-R0's non-root `$/f/<component>` paths assembled component values as invalid top-level Object properties. C4-R1 supersedes only that path map with `$/f/components/f/<component>`. Each Object retains `$` as its complete Object-shaped root. No `$/f/components` container ownership path was added. The public Object schema, shared path codec, shared assembler, processor identities and versions, component names, thresholds, provenance, and canonical-domain exclusions were not changed.

The run started from authority `fb6bc8ca1ef7b3852026c3b684dc625cda974879` / tree `0bd3f79b97134f79b4cd7d68766e091bd6d369a3`, backend `c592d7b1731b15cce9609efafbe7d689a5ca8744` / tree `922ad1bb363ce85c3dd73cee1daf65062d99b0a0`, and frontend `bc8523183ae4892c0b538474d2f5444a1ea356d8` / tree `7f3016c01500083ae2f536ebd0540219c9228dd7`. Local/fetched identities matched, accepted ancestry held, and all worktrees were clean.

## Corrected ownership

| Object | Root | Corrected component paths | Total |
|---|---:|---:|---:|
| `instagram_content_behavior` | 1 | 12 | 13 |
| `instagram_audience_profile` | 1 | 8 | 9 |
| `instagram_organic_performance_profile` | 1 | 12 | 13 |
| **Total Object-scoped keys** | **3** | **32** | **35** |

Every non-root path has the exact grammar `$/f/components/f/<registeredComponent>`. Machine validation proved zero missing components, zero extra components, zero old-form paths, and zero duplicate active owners. A deliberate duplicate Object/path key was rejected.

## Real shared-assembler proof

An external untracked harness imported the real backend `ComponentPathCodec`, `IntelligenceObjectAssembler`, and `InstagramIntelligenceObjectSchema`. For each Object it supplied one valid complete root and distinct sentinels at every corrected component path. All 32 sentinels appeared only at `components.<component>`, no sentinel leaked to the top level, and all three assembled Objects passed the strict schema. Reversing the complete component-record input produced byte-equivalent JSON for every Object. The old-form `$/f/corpus_summary` probe created a top-level `corpus_summary` and was rejected by the strict schema.

## Machine authority identities

| Artifact | SHA-256 | Git blob |
|---|---|---|
| corrected executable authority register | `8f9a844e01606bfaf294411db00f9b103fcd87c982f5dd573ad0b0e6ff470f0e` | `92c3bcf9392469b48b48d134d1570f2a9deec7b6` |
| exhaustive boundary/path-alignment fixture | `a56ed201b8c386243aa425432a424066e172b8264aad3efa76dd28ffeb7c4b35` | `3aed211222506c61789ed95205a7a32bf20210b8` |
| reconciled contract registry | `765d670cf7858e09aaed4436e75e5c6d09d920a1f9d9f4ef1551d59573b43c81` | `2cc3045a82e6c0a179b332536e36b764ea714d07` |

Eighteen C4 YAML documents and three JSON records parsed. Nineteen unique cross-artifact paths resolved. Processor, output, Evidence, Object, and public payload versions agreed. Complete and partial fixtures passed their component-set checks; the invalid Learning-without-supporting-Signal fixture was rejected.

## B4 byte immutability

| B4 artifact | SHA-256 | Git blob |
|---|---|---|
| processor definition | `b6fc5437e5b2d0c26e3740ae26eb34aff87e9380f71ad9764c02929d8b7f4610` | `f09fd76ee496b9f197b8fc087c4ca651f3f7221d` |
| reasoning contract | `a4ac9d028e67e8df1341b3fa9216d250f666f7182054a7d5b509b996ccbede8b` | `623d8638f6397c53fac1872680feff32a8eefc89` |
| output contract | `8dd87d3255e853695e6dd14a95faac1539e2d18f8686403a36c6c32ecaa1f4cf` | `b62b348ed1c7f87c2df63df43ce9cd7a77215d87` |
| Evidence contract | `490adfbfb3c3a45bf150c7afcafe0ce092300f6de71ce62014a1afc646a97fd9` | `e60388e9fc93e02b8023e3c228b984d6e1e366c5` |
| Object contract | `c3bc13c7f32e0b27803b062e06bbaeb4835f05952bbdfdf0d07265c9a4ff2537` | `0b294368eaf5bfaa35737675c6112f60794de15f` |
| shared metadata contract | `c4440fd7762f871642e3a3ec1b5e8d7c46f31c3ad6fad7c97ac3cc27ff542d72` | `d1a04ac22327ce3c69b289e758a11d88d389ebc7` |

`B4_AUTHORITY_BYTES_CHANGED = NO`

## Read-only backend compatibility

The existing exact-pinned-source bundle verify command passed from its required clean `bbb0be3345c36e9cc7c4f06ca68fb491b742b83f` checkout. Bundle-generator tests passed 9/9 and component-path codec tests passed 12/12. The real three-Object assembler/schema harness passed independently. Backend tracked state remained unchanged.

No schema, migration, dependency, backend, frontend, C4 runtime, C1, D_COMBINED, Wave E, live provider, or live model work occurred.

```text
C4-R0 = PRESERVED_EXCEPT_PATH_MAP
C4-R0 PATH MAP = SUPERSEDED_BY_C4-R1
C4-R1 = EVIDENCE_READY_AWAITING_CHILD_SA_PROGRAM_ORCHESTRATOR_ACCEPTANCE
C4 = PROHIBITED_PENDING_C4-R1_ACCEPTANCE
C4_PRIMARY_RUNS_USED = 1
C4_AUTHORITY_RECOVERY_PACKETS_USED = 2
C4_RESUMED_RUNS_USED = 1
C4_CORRECTION_CYCLES_USED = 0
```
