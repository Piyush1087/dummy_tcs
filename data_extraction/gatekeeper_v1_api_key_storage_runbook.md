# Gatekeeper v1 — API Key Storage Runbook

**Audience:** Backend developer / DevOps engineer  
**Scope:** Where to store and configure provider credentials required by Gatekeeper v1 Data Extraction.  
**Security rule:** This document contains variable names and procedures only. Never store real secret values in Git.

## 1. Required provider secrets and settings

Gatekeeper v1 Data Extraction uses the following environment references:

```text
GEMINI_API_KEY
GEMINI_REQUEST_TIMEOUT_MS

PARALLEL_API_KEY
PARALLEL_SEARCH_TIMEOUT_MS
PARALLEL_SEARCH_MAX_CHARS_TOTAL

OPENAI_API_KEY
OPENAI_REQUEST_TIMEOUT_MS

DATA_EXTRACTION_PROVIDER_MAX_ATTEMPTS
```

Only the three `*_API_KEY` values are secrets. Timeout, content-limit and retry values are ordinary configuration unless your deployment policy treats all environment configuration as secret-managed.

## 2. Local developer environment

For local backend execution, store provider values in the backend repository's local `.env` file:

```text
Piyush1087/creator-commerce-backend-v2-clone/.env
```

Example structure — placeholders only:

```dotenv
GEMINI_API_KEY=<local-secret>
GEMINI_REQUEST_TIMEOUT_MS=120000

PARALLEL_API_KEY=<local-secret>
PARALLEL_SEARCH_TIMEOUT_MS=60000
PARALLEL_SEARCH_MAX_CHARS_TOTAL=24000

OPENAI_API_KEY=<local-secret>
OPENAI_REQUEST_TIMEOUT_MS=120000

DATA_EXTRACTION_PROVIDER_MAX_ATTEMPTS=3
```

Requirements:

- `.env` must remain git-ignored.
- Never copy a real key into `.env.example`.
- `.env.example` should contain only variable names, safe defaults and documentation.
- Use development/test provider credentials where available; do not reuse production credentials for ordinary local development.

Before starting the backend, confirm only that variables are present. Do not print the values.

Safe Node check:

```bash
node -e "for (const k of ['GEMINI_API_KEY','PARALLEL_API_KEY','OPENAI_API_KEY']) console.log(k, process.env[k] ? 'SET' : 'MISSING')"
```

Run that only after the `.env` has been loaded by the shell/runtime mechanism you normally use. The command intentionally does not display secret values.

## 3. AWS/SST deployed environments

The backend deployment is defined through:

```text
creator-commerce-backend-v2-clone/sst.config.ts
```

The current SST configuration reads provider values from the deployment process environment and maps them into the ECS service environment.

Relevant mapping conceptually is:

```text
secure deployment environment / secret source
        ↓
process.env.<VARIABLE>
        ↓
sst.config.ts apiEnvironment
        ↓
ECS task/service environment
        ↓
Nest ConfigService
        ↓
Data Extraction provider adapter
```

Therefore, for `dev` and `prod`, configure the real key in the same secure deployment/secret mechanism already used to supply backend environment values to SST. Do not hard-code a key into `sst.config.ts`.

### Development AWS environment

Use the development deployment credential source/account and configure:

```text
GEMINI_API_KEY
PARALLEL_API_KEY
OPENAI_API_KEY
```

plus the non-secret settings required for that stage.

Prefer separate dev/test keys from production keys.

### Production AWS environment

Use the production deployment credential source/account and configure the same variable names:

```text
GEMINI_API_KEY
PARALLEL_API_KEY
OPENAI_API_KEY
```

Production credentials must not be stored in:

- repository files;
- GitHub Actions logs;
- PR descriptions/comments;
- Codex/ChatGPT prompts;
- deployment scripts committed with literal values;
- ordinary application logs.

If the existing deployment process currently relies on a developer machine `.env` to populate SST, keep the secret only in the protected deployment environment. For longer-term production operation, prefer the existing organization-approved AWS secret-management mechanism rather than relying on a personal workstation copy.

## 4. Exact runtime mappings

### Gemini

Secret:

```text
GEMINI_API_KEY
```

Configuration:

```text
GEMINI_REQUEST_TIMEOUT_MS
```

Runtime consumer:

```text
GeminiGatekeeperProvider
```

Gatekeeper v1 model selection does **not** belong in the secret store. Intelligence supplies `gemini-2.5-flash` according to the frozen execution profile.

### Parallel AI

Secret:

```text
PARALLEL_API_KEY
```

Configuration:

```text
PARALLEL_SEARCH_TIMEOUT_MS
PARALLEL_SEARCH_MAX_CHARS_TOTAL
```

Runtime consumer:

```text
ParallelCompanyResearchProvider
```

### OpenAI

Secret:

```text
OPENAI_API_KEY
```

Configuration:

```text
OPENAI_REQUEST_TIMEOUT_MS
```

Runtime consumer:

```text
OpenAIStructuredProvider
```

Do **not** store a default Gatekeeper OpenAI model alongside the key. Intelligence/Product must explicitly select and supply the approved model identifier.

### Shared retry setting

Configuration:

```text
DATA_EXTRACTION_PROVIDER_MAX_ATTEMPTS
```

Current recommended activation value:

```text
3
```

This controls bounded same-capability technical retries only. It must not be used to implement provider switching.

## 5. How to verify AWS/ECS configuration safely

After deployment, verify the ECS task received the variable **names/presence** without exposing values.

Acceptable checks include:

- inspecting ECS task-definition environment/secret references while avoiding secret-value output;
- application startup/health diagnostics that report `configured: true/false` only;
- a one-off command that returns `SET` or `MISSING` for each required provider key;
- running the provider smoke tests documented in `gatekeeper_v1_developer_activation.md`.

Do not use commands such as:

```bash
printenv GEMINI_API_KEY
printenv PARALLEL_API_KEY
printenv OPENAI_API_KEY
```

and do not capture provider keys in screenshots or shared terminal transcripts.

## 6. Key rotation / replacement

If a key must be replaced:

1. Create/obtain the replacement key from the provider using the approved account.
2. Update the secure local/deployment secret source; do not edit application code.
3. Redeploy/restart the relevant environment so the ECS task receives the replacement.
4. Run the corresponding safe smoke test.
5. Revoke the old key after the new key is confirmed healthy.
6. If exposure is suspected, revoke/rotate immediately and review logs/history for accidental disclosure.

No source-code commit should normally be required for a key rotation.

## 7. Safe temporary disable

If a provider credential is unavailable or compromised:

- remove/disable the affected secret from the deployment environment or stop Intelligence from requesting that capability;
- do not add a placeholder production key;
- do not make Data Extraction silently switch providers;
- preserve the frozen Intelligence fallback policy.

The provider adapter should surface configuration/availability failure to Intelligence rather than inventing an alternative provider.

## 8. Files developers may edit vs must not edit

Normal configuration work may involve:

```text
Local only, never commit:
  creator-commerce-backend-v2-clone/.env

Repository configuration/reference files:
  creator-commerce-backend-v2-clone/.env.example
  creator-commerce-backend-v2-clone/sst.config.ts
```

Only modify `.env.example` or `sst.config.ts` when a **new variable reference or deployment mapping** is required. Do not modify them merely to replace a key value.

Never create committed files such as:

```text
api-keys.txt
secrets.json
production.env
credentials.md
```

containing real credentials.

## 9. Gatekeeper activation checklist

Before live Gatekeeper activation, confirm:

- `GEMINI_API_KEY` is securely configured for the intended environment;
- `PARALLEL_API_KEY` is securely configured for the intended environment;
- `OPENAI_API_KEY` may be configured, but no live OpenAI Gatekeeper call occurs until IE/Product supplies an approved model;
- timeout/retry configuration is present;
- ECS/runtime can see the required variables without logging their values;
- Gemini smoke test passes and preserves `OWNED_DOMAIN` + `PUBLIC_WEB_SEARCH` provenance;
- Parallel smoke test passes with traceable public-web Evidence;
- no key exists in Git history, GitHub discussions, prompts or ordinary logs.

## 10. Related documents

Use together with:

```text
data_extraction/gatekeeper_v1_developer_activation.md
data_extraction/gatekeeper_v1_verification_closure.md
data_extraction/gatekeeper_v1_capability_contracts.md
```

The activation document explains how to test each provider. This document defines where credentials belong and how to handle them safely.
