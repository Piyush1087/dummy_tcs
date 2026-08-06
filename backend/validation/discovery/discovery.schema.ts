import { z } from "zod";
import { emailSchema, entityIdSchema, mediaPlatformSchema, socialHandleSchema } from "../shared/campaign.shared.schema";

export const manualCreatorInputSchema = z.object({
  campaignId: entityIdSchema,
  platform: mediaPlatformSchema,
  socialHandle: socialHandleSchema,
  email: emailSchema,
});

export const manualCreatorCsvRowSchema = z.object({
  platform: mediaPlatformSchema,
  socialHandle: socialHandleSchema,
  email: emailSchema,
});

export const importCreatorsCsvInputSchema = z.object({
  campaignId: entityIdSchema,
  rows: z.array(manualCreatorCsvRowSchema).min(1),
});

// Marketplace entry is system/integration initiated. Email is not required because Marketplace may not expose it.
export const marketplaceCampaignCreatorInputSchema = z.object({
  campaignId: entityIdSchema,
  creatorId: entityIdSchema.optional().nullable(),
  platform: mediaPlatformSchema,
  socialHandle: socialHandleSchema,
  email: emailSchema.optional().nullable(),
});

export const archiveCampaignCreatorInputSchema = z.object({
  campaignCreatorId: entityIdSchema,
});
