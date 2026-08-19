# Gatekeeper v1 — Data Extraction Developer Activation

Status: activation runbook. No business/admission policy lives here.

## Scope

This runbook activates and verifies the three frozen Gatekeeper v1 Data Extraction capabilities:

- `gatekeeper_primary_web_assessment`
- `company_public_web_research`
- `openai_structured_assessment`

Provider ordering and escalation remain owned by the frozen Intelligence execution profile. Do not add Gemini → Parallel, Gemini → OpenAI or Parallel → OpenAI switching inside Data Extraction.

## Required configuration references

Configure through the existing backend `.env` / deployment secret mechanism used by SST/ECS. Never place secret values in Git, prompts, GitHub comments or ordinary logs.

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

The backend `sst.config.ts` maps these values into the ECS service environment. Verify the deployed task has the variable names present without printing their values.

## Gemini — gatekeeper_primary_web_assessment

Credential:

- Set `GEMINI_API_KEY` in the existing deployment secret/environment mechanism.
- Set/retain `GEMINI_REQUEST_TIMEOUT_MS` as required by the environment.
- The Intelligence caller supplies `gemini-2.5-flash`; Data Extraction must not substitute another model.

Runtime verification:

1. Confirm the ECS/task environment contains `GEMINI_API_KEY` by checking only whether it is set, never echoing the value.
2. Execute a bounded smoke call against `GeminiGatekeeperProvider.execute` with:
   - model `gemini-2.5-flash`;
   - a safe owned test URL;
   - a minimal Zod output schema;
   - a unique acquisition run id.
3. Record only:
   - success/failure;
   - model id;
   - latency;
   - attempt count;
   - whether URL-context metadata was present;
   - whether Google Search grounding metadata was present;
   - counts of `OWNED_DOMAIN` and `PUBLIC_WEB_SEARCH` provenance rows;
   - normalized error code on failure.

Expected success:

- capability returns `AVAILABLE` when both provenance classes are present;
- structurally valid payload passes Zod validation;
- no provider switch occurs.

Likely normalized failures:

- `CONFIGURATION_ERROR`
- `AUTHENTICATION_FAILED`
- `REQUEST_TIMEOUT`
- `RATE_LIMITED`
- `PROVIDER_UNAVAILABLE`
- `STRUCTURED_OUTPUT_INVALID`
- `EMPTY_RESULT`

Safe disable/revert:

- do not alter Intelligence ordering;
- disable Gatekeeper consumption/wiring if not yet enabled, or remove/revert only the Data Extraction integration commit from the deployment branch;
- do not solve failures by changing Gemini model inside Data Extraction.

## Parallel AI — company_public_web_research

Credential:

- Set `PARALLEL_API_KEY` through the existing deployment secret/environment mechanism.
- Configure `PARALLEL_SEARCH_TIMEOUT_MS` and `PARALLEL_SEARCH_MAX_CHARS_TOTAL` through environment values.

Runtime verification:

1. Verify only that `PARALLEL_API_KEY` is set in runtime; never print it.
2. Execute `ParallelCompanyResearchProvider.execute` with a harmless company research objective and 1–3 public-web queries.
3. Record:
   - success/failure;
   - latency and attempt count;
   - search/session id where returned;
   - source count;
   - presence of source URLs/titles/excerpts;
   - `PUBLIC_WEB_RESEARCH` provenance count;
   - normalized failure code if unsuccessful.

Expected success:

- traceable source rows are returned;
- each usable source maps to provenance;
- the capability returns research Evidence only, never a Gatekeeper admission outcome.

Likely normalized failures:

- `CONFIGURATION_ERROR`
- `AUTHENTICATION_FAILED`
- `REQUEST_TIMEOUT`
- `RATE_LIMITED`
- `PROVIDER_UNAVAILABLE`
- `PROVIDER_ERROR`
- `EMPTY_RESULT`

Safe disable/revert:

- do not invoke this capability from Intelligence while unhealthy;
- preserve the existing legacy Parallel code path unless separately approved for removal;
- reverting the Data Extraction wrapper must not change the frozen fallback profile.

## OpenAI — openai_structured_assessment

Credential:

- Set `OPENAI_API_KEY` through the existing deployment secret/environment mechanism.
- Configure `OPENAI_REQUEST_TIMEOUT_MS` through environment configuration.
- Data Extraction contains no default Gatekeeper OpenAI model. The Intelligence caller must provide an approved model id.

Runtime verification:

Before Product/IE selects an approved benchmark model:

1. Verify only that `OPENAI_API_KEY` is available to runtime.
2. Verify that calling the provider without `modelId` produces the expected configuration/model error rather than substituting a model.
3. Verify request construction uses the Responses API structured-output contract and `store: false`.

After Product/IE supplies an approved model id:

1. Run one minimal structured assessment smoke call over non-sensitive approved Evidence context.
2. Record success/failure, model id, latency, attempt count, structural-validation result and normalized error only.

Expected success:

- the exact caller-supplied model is used;
- provider JSON Schema output is parsed and Zod-validated;
- provenance points back to approved Evidence references;
- no fallback provider/model is selected by Data Extraction.

Likely normalized failures:

- `CONFIGURATION_ERROR`
- `MODEL_NOT_AVAILABLE`
- `AUTHENTICATION_FAILED`
- `REQUEST_TIMEOUT`
- `RATE_LIMITED`
- `PROVIDER_UNAVAILABLE`
- `STRUCTURED_OUTPUT_INVALID`
- `EMPTY_RESULT`

Safe disable/revert:

- simply do not request the OpenAI capability from Intelligence until a model is approved and provider health is verified;
- do not add a default model to make the test pass.

## Shared retry / rate-limit verification

`DATA_EXTRACTION_PROVIDER_MAX_ATTEMPTS` controls the bounded same-capability attempt budget. Recommended activation value is `3` unless Product Architecture approves a different provider-cost budget.

Test that:

- transient timeout/408/429/5xx may retry within the budget;
- 429 honors `Retry-After` within the local bounded wait policy;
- authentication/configuration/schema failures do not cause cross-provider switching;
- exhausted technical retries return a structured failure to Intelligence.

## Security requirements

- Never commit API keys or provider tokens.
- Never paste keys into GitHub, Codex prompts, ChatGPT prompts, tickets or ordinary application logs.
- Use the existing secret-management/deployment mechanism for AWS/SST environments.
- Confirm variable presence without echoing values.
- Do not log full prompts, raw provider bodies or approved Evidence context unless an explicitly approved secure diagnostic path exists.
- Rotate any credential that is suspected to have been exposed.
- Keep dev/test/prod credentials isolated where practical.

## Activation gate

Do not enable the new capabilities in live Gatekeeper until all of the following are true:

- backend install/build passes from the intended integration lineage;
- focused Data Extraction tests pass;
- Gemini credentialed smoke test confirms both provenance classes;
- Parallel credentialed smoke test confirms traceable source Evidence;
- OpenAI runtime configuration is present and no hidden model default exists;
- an approved OpenAI model is supplied by Intelligence before any live OpenAI model call;
- Product Architecture accepts any remaining provider-specific limitation.
