# Backend Schema — Intelligence Working View

This directory tracks only the portion of the Creator Shop backend schema that is encountered while building the Intelligence Platform.

## Rule

1. If an existing backend model/field is required by an intelligence object or runtime capability, include/reference it here.
2. If Intelligence requires a new backend field/model, add it here and clearly mark it as new/proposed until implemented.
3. Do not copy unrelated application schema into this directory.
4. Canonical application values should continue to use the existing backend schema wherever possible; do not create a duplicate Intelligence value store without a specific need.
5. Runtime provenance/history and processor telemetry may require dedicated intelligence tables because those concerns are not canonical product-facing fields.

## Files

- `intelligence_schema.prisma` — focused Prisma working view of schema touched/required by Intelligence.

## Developer workflow

This file is an implementation reference, not automatically the production Prisma source of truth. The developer should reconcile each proposed change with the actual current Prisma schema and create normal reviewed migrations in the application repository.

As each intelligence branch is frozen, its canonical destinations and required schema additions will be added here.
