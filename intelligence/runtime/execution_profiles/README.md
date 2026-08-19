# Runtime Execution Profiles

This directory contains **runtime/application-facing execution profiles** used by the executable Intelligence runtime layer.

It is distinct from `intelligence/execution_profiles/`, which is the canonical journey-level Intelligence orchestration authority.

## Responsibility

Runtime profiles may coordinate executable stages such as:

- deterministic normalization/gating;
- application-policy checks;
- reachability or runtime prerequisites;
- Intelligence processor invocation;
- runtime handoff/termination behavior.

They must not redefine processor reasoning, Intelligence Object semantics, Evidence meaning, or product authority already owned by canonical Intelligence contracts.

A runtime profile may invoke an existing Intelligence processor without creating a new Intelligence branch. `gatekeeper_scan.yaml` is the current explicit example: it invokes the existing `industry_classification` processor in Gatekeeper scope and does **not** establish a separate Gatekeeper Intelligence branch.

## Relationship to `intelligence/execution_profiles/`

Use:

- `intelligence/execution_profiles/` for canonical Intelligence journey orchestration;
- `intelligence/runtime/execution_profiles/` for executable runtime/application coordination.

Where both layers describe the same conceptual journey, keep them aligned while preserving that authority boundary. Do not merge or restructure these directories as a documentation cleanup.

## Current files

- `gatekeeper_scan.yaml` — frozen runtime admission profile; existence does not imply a new Intelligence branch.
- `identity_test.yaml` — executable test profile used to exercise the Identity reference runtime.
