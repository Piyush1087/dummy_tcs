import { z } from "zod";

import type { SafeYamlLoader } from "../loaders/yaml_loader";
import {
  issuesFromZod,
  validationFailure,
  type ValidationResult,
} from "./validation_result";

const LEGACY_IDENTITY_TAXONOMY_PATH =
  "intelligence/engines/brand_intelligence/branches/identity/artifacts/industry_classification/taxonomy.yaml";

export const LegacyIdentityGatekeeperSchema = z
  .object({
    status: z.enum(["RESOLVED", "UNRESOLVED"]),
    eligibility: z.enum(["SUPPORTED", "UNSUPPORTED", "UNKNOWN"]),
    industry: z.string().nullable(),
    sub_industry: z.string().nullable(),
    detected_business_type: z.string().nullable(),
  })
  .strict()
  .superRefine((value, ctx) => {
    if (value.status === "RESOLVED" && value.eligibility === "SUPPORTED") {
      if (!value.industry) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["industry"],
          message: "SUPPORTED requires industry",
        });
      }
      if (!value.sub_industry) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["sub_industry"],
          message: "SUPPORTED requires sub_industry",
        });
      }
      if (value.detected_business_type !== null) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["detected_business_type"],
          message: "SUPPORTED requires detected_business_type=null",
        });
      }
      return;
    }
    if (value.status === "RESOLVED" && value.eligibility === "UNSUPPORTED") {
      if (value.industry !== null) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["industry"],
          message: "UNSUPPORTED requires industry=null",
        });
      }
      if (value.sub_industry !== null) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["sub_industry"],
          message: "UNSUPPORTED requires sub_industry=null",
        });
      }
      if (!value.detected_business_type) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["detected_business_type"],
          message: "UNSUPPORTED requires detected_business_type",
        });
      }
      return;
    }
    if (value.status === "UNRESOLVED") {
      if (value.eligibility !== "UNKNOWN") {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["eligibility"],
          message: "UNRESOLVED requires eligibility=UNKNOWN",
        });
      }
      for (const key of [
        "industry",
        "sub_industry",
        "detected_business_type",
      ] as const) {
        if (value[key] !== null) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: [key],
            message: `UNRESOLVED requires ${key}=null`,
          });
        }
      }
      return;
    }
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Invalid status/eligibility combination",
    });
  });

type CanonicalIndustryTaxonomy = Record<string, readonly string[]>;

function objectRecord(value: unknown): Record<string, unknown> {
  return value && typeof value === "object" && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : {};
}

function canonicalTaxonomy(raw: unknown): CanonicalIndustryTaxonomy {
  const hierarchy = objectRecord(objectRecord(raw).hierarchy);
  return Object.fromEntries(
    Object.entries(hierarchy).map(([industry, value]) => {
      const rows = objectRecord(value).sub_industries;
      const children = Array.isArray(rows)
        ? rows
            .map((row) => objectRecord(row).id)
            .filter((id): id is string => typeof id === "string")
        : [];
      return [industry, children];
    }),
  );
}

function legacyIndustryValues(raw: unknown): string[] {
  const enums = objectRecord(objectRecord(raw).legacy_application_enums);
  const values = new Set<string>();
  for (const mapping of Object.values(enums)) {
    for (const key of Object.keys(objectRecord(mapping))) values.add(key);
  }
  return [...values];
}

function validateTaxonomy(
  output: z.infer<typeof LegacyIdentityGatekeeperSchema>,
  taxonomy: CanonicalIndustryTaxonomy,
  legacyValues: readonly string[],
) {
  const issues: string[] = [];
  if (output.eligibility !== "SUPPORTED") return issues;
  if (!output.industry || !output.sub_industry) return issues;
  if (legacyValues.includes(output.industry)) {
    issues.push("Legacy Industry enum value is invalid");
  }
  const children = taxonomy[output.industry];
  if (!children) issues.push("Industry is not in canonical taxonomy");
  else if (!children.includes(output.sub_industry)) {
    issues.push("Sub-industry does not belong to selected Industry");
  }
  return issues;
}

export class LegacyIdentityGatekeeperCompatibilityValidator {
  constructor(private readonly yaml: SafeYamlLoader) {}

  async validate(rawOutput: unknown): Promise<ValidationResult> {
    const structural = LegacyIdentityGatekeeperSchema.safeParse(rawOutput);
    if (!structural.success) {
      return validationFailure("STRUCTURAL", issuesFromZod(structural.error));
    }

    const rawTaxonomy = await this.yaml.load(LEGACY_IDENTITY_TAXONOMY_PATH);
    const taxonomyIssues = validateTaxonomy(
      structural.data,
      canonicalTaxonomy(rawTaxonomy),
      legacyIndustryValues(rawTaxonomy),
    );
    if (taxonomyIssues.length > 0) {
      return validationFailure(
        "SEMANTIC",
        taxonomyIssues.map((message) => ({
          path: ["industry", "sub_industry"],
          code: "TAXONOMY_MISMATCH",
          message,
        })),
      );
    }

    return { ok: true, data: structural.data, issues: [] };
  }
}
