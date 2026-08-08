import { CampaignCommandService } from "../../../../../../backend/campaign/commands/CampaignCommandService";
import type { CampaignUiActionResult } from "./actionModel";

export interface CampaignCommandAdapter {
  approveApplicant(input: { applicationId: string }): Promise<CampaignUiActionResult>;
  rejectApplicant(input: { applicationId: string }): Promise<CampaignUiActionResult>;
}

/** Staging transport boundary. Presentation components never invoke CampaignCommandService directly. */
export function createStagingCampaignCommandAdapter(
  commands = new CampaignCommandService(),
): CampaignCommandAdapter {
  const toResult = (result: { ok: boolean; category?: string; message?: string }): CampaignUiActionResult => ({
    ok: result.ok,
    category: result.category,
    message: result.message,
  });

  return {
    async approveApplicant(input) {
      return toResult(commands.approveApplicant(input));
    },
    async rejectApplicant(input) {
      return toResult(commands.rejectApplicant(input));
    },
  };
}
