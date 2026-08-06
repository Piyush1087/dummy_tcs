import { z } from "zod";
import { applicationSourceSchema, entityIdSchema } from "../shared/campaign.shared.schema";

export const createApplicationInputSchema = z.object({
  campaignId: entityIdSchema,
  campaignCreatorId: entityIdSchema,
  campaignAssetId: entityIdSchema,
  briefId: entityIdSchema,
  source: applicationSourceSchema.default("DIRECT"),
});

// Snapshot contents are assembled server-side from authoritative submission-time state.
// Clients must not author campaign/commercial/brief snapshots.
export const withdrawApplicationInputSchema = z.object({ applicationId: entityIdSchema });
export const approveApplicationInputSchema = z.object({ applicationId: entityIdSchema });
export const rejectApplicationInputSchema = z.object({ applicationId: entityIdSchema });

// No generic updateApplication schema by design. Lifecycle actions are explicit commands.
