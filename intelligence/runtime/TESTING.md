# Intelligence Reference Runtime Test Harness

**Status:** M2.0 executable baseline

## Supported toolchain

- Node.js: `24.19.0` (`.nvmrc`)
- Package manager: npm `11.17.0` (`packageManager` in `package.json`)
- TypeScript: `5.9.3`
- Runtime/test runner: Vitest `4.1.11`
- Runtime schema/parser dependencies: Zod `3.25.76`, YAML `2.9.0`

Install deterministically from the repository root:

```text
npm ci
```

## Commands

```text
npm run test:runtime
npm run test:runtime:watch
npm run typecheck:runtime
npm run check:runtime-yaml
npm run validate:runtime
```

`validate:runtime` runs TypeScript compilation, the complete reference-runtime
test suite, and YAML parsing for the runtime plus the retained Identity
compatibility branch.

## Entry points

- Tests: `intelligence/runtime/**/*.test.ts`
- TypeScript project: `tsconfig.runtime.json`
- Vitest configuration: `vitest.runtime.config.ts`
- YAML check: `intelligence/runtime/test_harness/check_yaml.mjs`

`intelligence/runtime/test_entry/example_next_route.ts` is an illustrative
application binding that imports Next.js and repository-specific aliases. It is
not part of the standalone reference-runtime typecheck; the executable handler
and runtime modules remain included.

## M2.0 known expected defect

The baseline deliberately proves that the legacy
`industry_classification.gatekeeper` validator rejects a free-form
Sub-industry that is absent from the controlled Identity taxonomy. The test is
an assertion of current defective compatibility behavior, not accepted product
authority. M2.1 introduces the separate standalone validator; M2.4 removes this
legacy path from default routing.

The first baseline run also found that the runtime `identity_test.yaml` profile
could not be parsed because its ternary rule was an unquoted YAML scalar. M2.0
quotes that scalar without changing its declared deterministic behavior so the
required profile-resolution baseline is executable.

## Exit gate

```text
REFERENCE_RUNTIME_BASELINE_REPRODUCIBLE
```
