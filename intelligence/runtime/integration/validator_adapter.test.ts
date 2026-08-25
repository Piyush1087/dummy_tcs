import { describe, expect, it } from "vitest";

import type { ExecutionTask } from "../compiler/compiler";
import { SafeYamlLoader } from "../loaders/yaml_loader";
import {
  DefaultValidatorAdapter,
  IdentityCompatibilityValidatorAdapter,
} from "./validator_adapter";

const yaml = new SafeYamlLoader(process.cwd());

const legacyTask: ExecutionTask = {
  id: "legacy-gatekeeper",
  processorId: "industry_classification",
  processorScope: "gatekeeper",
  kind: "AI",
  activeOutputs: ["industry", "sub_industry"],
};

const legacyOutput = {
  status: "RESOLVED",
  eligibility: "SUPPORTED",
  industry: "D2C",
  sub_industry: "BEAUTY_PERSONAL_CARE",
  detected_business_type: null,
};

describe("M2.4 validator adapter isolation", () => {
  it("rejects legacy Gatekeeper through the default adapter", async () => {
    await expect(
      new DefaultValidatorAdapter().validate({
        task: legacyTask,
        rawOutput: legacyOutput,
      }),
    ).resolves.toMatchObject({
      ok: false,
      error: {
        validation_stage: "CONFIGURATION",
        issues: [{ code: "VALIDATOR_NOT_CONFIGURED" }],
      },
    });
  });

  it("retains legacy Gatekeeper only through the explicit compatibility adapter", async () => {
    const adapter = new IdentityCompatibilityValidatorAdapter(yaml);

    await expect(
      adapter.validate({ task: legacyTask, rawOutput: legacyOutput }),
    ).resolves.toMatchObject({ ok: true });
  });

  it("preserves Industry Niche through default Identity validation", async () => {
    await expect(
      new DefaultValidatorAdapter().validate({
        task: {
          id: "industry-niche",
          processorId: "industry_classification",
          processorScope: "industry_niche",
          kind: "AI",
          activeOutputs: ["industry_niche"],
        },
        rawOutput: { industry_niche: "Creator analytics" },
      }),
    ).resolves.toMatchObject({ ok: true });
  });
});
