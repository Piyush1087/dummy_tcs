import { z } from "zod";

export type ValidationIssue = {
  path: Array<string | number>;
  code: string;
  message: string;
};

export type ValidationStage = "STRUCTURAL" | "SEMANTIC" | "CONFIGURATION";

export type ValidationResult =
  | { ok: true; data: unknown; issues: [] }
  | {
      ok: false;
      code: "OUTPUT_VALIDATION_FAILED";
      status: "FAILED_VALIDATION";
      validation_stage: ValidationStage;
      issues: ValidationIssue[];
    };

export function issuesFromZod(error: z.ZodError): ValidationIssue[] {
  return error.issues.map((issue) => ({
    path: issue.path,
    code: issue.code,
    message: issue.message,
  }));
}

export function validationFailure(
  stage: ValidationStage,
  issues: ValidationIssue[],
): ValidationResult {
  return {
    ok: false,
    code: "OUTPUT_VALIDATION_FAILED",
    status: "FAILED_VALIDATION",
    validation_stage: stage,
    issues,
  };
}

export function parseWithSchema(
  schema: z.ZodTypeAny,
  raw: unknown,
): ValidationResult {
  const result = schema.safeParse(raw);
  if (!result.success) {
    return validationFailure("STRUCTURAL", issuesFromZod(result.error));
  }
  return { ok: true, data: result.data, issues: [] };
}
