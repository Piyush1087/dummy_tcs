import {
  RuntimeConfigError,
  type SafeYamlLoader,
} from "./yaml_loader";

export type AllowlistedDefinition = {
  path: string;
  expectedId: string;
  expectedVersion?: string;
};

export type LoadedDefinition = Record<string, unknown> & {
  id: string;
  version?: string;
};

export class AllowlistedDefinitionLoader {
  constructor(
    private readonly yaml: SafeYamlLoader,
    private readonly definitions: Readonly<Record<string, AllowlistedDefinition>>,
    private readonly unknownCode = "DEFINITION_NOT_ALLOWED",
  ) {}

  async load(semanticId: string): Promise<LoadedDefinition> {
    const definition = this.definitions[semanticId];
    if (!definition) {
      throw new RuntimeConfigError(
        this.unknownCode,
        `Unknown allow-listed definition '${semanticId}'`,
      );
    }

    const raw = await this.yaml.load<Record<string, unknown>>(definition.path);
    if (raw.id !== definition.expectedId) {
      throw new RuntimeConfigError(
        "DEFINITION_ID_MISMATCH",
        `Expected '${definition.expectedId}' at '${semanticId}', received '${String(raw.id)}'`,
      );
    }
    if (
      definition.expectedVersion !== undefined &&
      raw.version !== definition.expectedVersion
    ) {
      throw new RuntimeConfigError(
        "DEFINITION_VERSION_MISMATCH",
        `Expected '${definition.expectedVersion}' for '${semanticId}', received '${String(raw.version)}'`,
      );
    }

    return raw as LoadedDefinition;
  }
}
