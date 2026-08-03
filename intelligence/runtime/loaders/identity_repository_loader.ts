import { SafeYamlLoader, RuntimeConfigError } from "./yaml_loader";

const ROOT = "intelligence/engines/brand_intelligence/branches/identity";
const PROCESSORS: Record<string,string> = {
  industry_classification: `${ROOT}/processors/industry_classification.yaml`,
  identity_core: `${ROOT}/processors/identity_core.yaml`,
  market_geography: `${ROOT}/processors/market_geography.yaml`,
};
const ARTIFACT_DIR: Record<string,string> = {
  industry_classification: `${ROOT}/artifacts/industry_classification`,
  identity_core: `${ROOT}/artifacts/identity_core`,
  market_geography: `${ROOT}/artifacts/market_geography`,
};

export class IdentityRepositoryLoader {
  constructor(private readonly yaml: SafeYamlLoader) {}

  async loadExecutionProfile(profileId: string) {
    if (profileId !== "identity_test") throw new RuntimeConfigError("PROFILE_NOT_ALLOWED", `Unknown Identity profile '${profileId}'`);
    const raw:any = await this.yaml.load(`intelligence/runtime/execution_profiles/${profileId}.yaml`);
    return {
      id: raw.id,
      persistResultsDefault: raw.defaults?.persist_results ?? false,
      tasks: (raw.tasks ?? []).map((t:any) => ({ id:t.id, processorId:t.processor_id, processorScope:t.processor_scope, kind:t.kind, activeOutputs:t.active_outputs ?? [], dependsOn:t.dependencies ?? [], required:t.required !== false })),
    };
  }

  async loadProcessor(processorId: string, scope?: string) {
    const file = PROCESSORS[processorId];
    if (!file) throw new RuntimeConfigError("PROCESSOR_NOT_CONFIGURED", `Unknown processor '${processorId}'`);
    const definition:any = await this.yaml.load(file);
    return { ...definition, processor_id: definition.id, processor_scope: scope, output_ownership: definition.outputs };
  }

  async loadObjects(activeOutputs: string[]) {
    const registry:any = await this.yaml.load(`${ROOT}/objects.yaml`);
    const rows:any[] = registry.objects ?? registry.intelligence_objects ?? [];
    const byId = new Map(rows.map(row => [row.id ?? row.object_id, row]));
    return activeOutputs.map(id => {
      const row:any = byId.get(id);
      if (!row) throw new RuntimeConfigError("OBJECT_DEFINITION_MISSING", `Identity Object '${id}' not found`);
      return { id, version: row.version ?? registry.version, producer: row.producer ?? null, definition: row };
    });
  }

  async loadGlobalArtifacts() {
    const base = "intelligence/runtime/artifacts";
    return {
      runtime_context: await this.yaml.load(`${base}/runtime_context.yaml`),
      evidence_grounding: await this.yaml.load(`${base}/evidence_grounding.yaml`),
      output_discipline: await this.yaml.load(`${base}/output_discipline.yaml`),
    };
  }

  async loadProcessorArtifacts(processorId: string, scope?: string) {
    const dir = ARTIFACT_DIR[processorId];
    if (!dir) throw new RuntimeConfigError("ARTIFACT_PROCESSOR_NOT_CONFIGURED", `No artifact directory for '${processorId}'`);
    const prefix = scope ? `${scope}_` : "";
    // Explicit allow-listed paths: no runtime/user-supplied repository paths.
    const reasoningCandidates = scope ? [`${dir}/${scope}/reasoning.yaml`, `${dir}/${prefix}reasoning.yaml`] : [`${dir}/reasoning.yaml`];
    let reasoning:any; let lastError:unknown;
    for (const candidate of reasoningCandidates) { try { reasoning = await this.yaml.load(candidate); break; } catch (e) { lastError=e; } }
    if (!reasoning) throw lastError ?? new RuntimeConfigError("ARTIFACT_MISSING", `Reasoning artifact missing for ${processorId}`);
    const output_contract = await this.yaml.load(`${dir}/output_contract.yaml`);
    return {
      reasoning: { id: `${processorId}${scope ? `.${scope}` : ""}.reasoning`, version: reasoning.version ?? "frozen", content: reasoning },
      output_contract: { id: `${processorId}.output_contract`, version: output_contract.version ?? "frozen", content: output_contract },
    };
  }
}
