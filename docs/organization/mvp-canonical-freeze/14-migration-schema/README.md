# §14 — Database and migration SOP

**Status:** REGISTERED from freeze-branch schema; fresh `0 → head` migrate not yet proven on a disposable DB  
**Date:** 2026-09-08

## Files in this folder

| File | Purpose |
| --- | --- |
| `migration-and-schema-register.md` | Canonical Prisma source, migration count/order, unused models, data posture |

Production AWS data is **not** inspected. Posture: `PRODUCTION_DB_STATE_UNKNOWN` for historical AWS; `FRESH_DB_EXPECTED` for a new AWS-dev database if the later AWS worker chooses a greenfield start.
