import { z } from "zod";
import { entityIdSchema } from "../shared/campaign.shared.schema";

// Composer generation and Brand editing are separated from execution eligibility.
export const composeOutreachInputSchema = z.object({
  campaignCreatorId: entityIdSchema,
  channel: z.enum(["PRIORITY_DM", "EMAIL"]),
  brandFreeFormInstruction: z.string().optional().default(""),
});

export const initiateEmailOutreachInputSchema = z.object({
  campaignCreatorId: entityIdSchema,
  finalSubject: z.string().trim().min(1),
  finalBody: z.string().trim().min(1),
});

export const confirmPriorityDmOutreachInputSchema = z.object({
  campaignCreatorId: entityIdSchema,
  finalBody: z.string().trim().min(1),
});

// Attempt sequence, quota, scheduler state, tracking token and execution status are server-owned.
export const retryEmailComposeInputSchema = z.object({
  campaignCreatorId: entityIdSchema,
});
