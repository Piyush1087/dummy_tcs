import { z } from "zod";

const entityIdSchema = z.string().trim().min(1);
const moneySchema = z.coerce.number().finite().min(0);
const currencySchema = z.string().trim().length(3).transform((v) => v.toUpperCase());
const evidenceRefSchema = z.string().trim().min(1).max(2048);
const optionalEvidenceRefSchema = evidenceRefSchema.optional().nullable();
const expectedVersionSchema = z.coerce.number().int().positive().optional();

export const collaborationActorClassSchema = z.enum(["BRAND", "CREATOR", "SYSTEM", "ADMIN"]);
export const collaborationLifecycleSchema = z.enum(["ACTIVE", "PAUSED", "COMPLETED", "CANCELLED", "TERMINATED"]);
export const collaborationStageSchema = z.enum(["NEGOTIATION", "SECUREMENT", "FULFILLMENT", "PRODUCTION", "PUBLISHING_SETTLEMENT"]);
export const collaborationPaymentRailSchema = z.enum(["PLATFORM_ESCROW", "MANUAL"]);

const collaborationCommandEnvelopeFields = {
  collaborationId: entityIdSchema,
  commandId: z.string().trim().min(1).max(200).optional(),
  expectedAggregateVersion: expectedVersionSchema,
};

export const provisionCollaborationInputSchema = z.object({
  sourceApplicationId: entityIdSchema,
  commandId: z.string().trim().min(1).max(200).optional(),
  // This fact is deliberately mandatory. The upstream authoring/derivation rule remains open,
  // but provisioning must never silently default a Deliverable to publishing-not-required.
  deliverablePublishingApplicability: z.array(z.object({
    sourceBriefDeliverableId: entityIdSchema,
    publishingRequired: z.boolean(),
  })).min(1),
});

export const collaborationIdCommandSchema = z.object(collaborationCommandEnvelopeFields);

export const acceptCreatorProposalInputSchema = collaborationIdCommandSchema;

export const counterCreatorProposalInputSchema = z.object({
  ...collaborationCommandEnvelopeFields,
  counterFee: moneySchema,
});

export const acceptBrandCounterInputSchema = collaborationIdCommandSchema;
export const declineBrandCounterInputSchema = collaborationIdCommandSchema;

export const endCollaborationInputSchema = z.object({
  ...collaborationCommandEnvelopeFields,
  reasonCode: z.string().trim().min(1).max(100),
  reasonText: z.string().trim().min(1).max(2000).optional(),
  evidenceRef: optionalEvidenceRefSchema,
});

export const requestEscrowFundingInputSchema = collaborationIdCommandSchema;

export const confirmEscrowFundingInputSchema = z.object({
  ...collaborationCommandEnvelopeFields,
  fundingConfirmationRef: evidenceRefSchema,
  confirmedAmount: moneySchema,
  currency: currencySchema,
});

export const reportManualPaymentInputSchema = z.object({
  ...collaborationCommandEnvelopeFields,
  paymentEvidenceRef: evidenceRefSchema,
});

export const confirmManualPaymentReceivedInputSchema = collaborationIdCommandSchema;

export const reportManualPaymentNotReceivedInputSchema = z.object({
  ...collaborationCommandEnvelopeFields,
  reasonText: z.string().trim().min(1).max(2000).optional(),
});

const fulfillmentEvidenceSchema = z.object({
  shipmentTrackingRef: z.string().trim().min(1).max(255).optional(),
  courierName: z.string().trim().min(1).max(120).optional(),
  accessEvidenceRef: optionalEvidenceRefSchema,
  redemptionCode: z.string().trim().min(1).max(200).optional(),
  serviceEvidenceRef: optionalEvidenceRefSchema,
  genericFulfillmentEvidence: z.unknown().optional(),
}).refine((v) => Object.values(v).some((value) => value != null), {
  message: "At least one fulfillment evidence field must be supplied.",
});

export const provideFulfillmentInputSchema = z.object({
  ...collaborationCommandEnvelopeFields,
  evidence: fulfillmentEvidenceSchema,
});

export const confirmFulfillmentInputSchema = collaborationIdCommandSchema;

export const reportFulfillmentIssueInputSchema = z.object({
  ...collaborationCommandEnvelopeFields,
  issueCode: z.string().trim().min(1).max(100),
  description: z.string().trim().min(3).max(2000),
  evidenceRef: optionalEvidenceRefSchema,
});

export const provideFulfillmentRemediationInputSchema = z.object({
  ...collaborationCommandEnvelopeFields,
  remediationEvidenceRef: evidenceRefSchema,
});

const deliverableCommandFields = {
  ...collaborationCommandEnvelopeFields,
  deliverableExecutionId: entityIdSchema,
};

export const submitDeliverableInputSchema = z.object({
  ...deliverableCommandFields,
  assetRef: evidenceRefSchema,
  submissionMetadata: z.unknown().optional(),
});

export const approveDeliverableInputSchema = z.object({
  ...deliverableCommandFields,
  submissionVersionId: entityIdSchema,
});

export const requestDeliverableRevisionInputSchema = z.object({
  ...deliverableCommandFields,
  submissionVersionId: entityIdSchema,
  brandFeedback: z.string().trim().min(1).max(2000),
});

export const rejectFinalDeliverableInputSchema = z.object({
  ...deliverableCommandFields,
  submissionVersionId: entityIdSchema,
  brandFeedback: z.string().trim().min(1).max(2000).optional(),
});

export const autoApproveDeliverableInputSchema = z.object({
  ...deliverableCommandFields,
  submissionVersionId: entityIdSchema,
});

export const submitPublishingEvidenceInputSchema = z.object({
  ...deliverableCommandFields,
  publicationEvidenceRef: evidenceRefSchema,
  publicationMetadata: z.unknown().optional(),
});

export const verifyPublishingInputSchema = z.object({
  ...deliverableCommandFields,
  complianceEvidenceRef: optionalEvidenceRefSchema,
});

export const requestPublishingCorrectionInputSchema = z.object({
  ...deliverableCommandFields,
  correctionReason: z.string().trim().min(1).max(2000),
});

export const submitCorrectedPublishingEvidenceInputSchema = submitPublishingEvidenceInputSchema;

export const blockPublishingComplianceInputSchema = z.object({
  ...deliverableCommandFields,
  blockedReason: z.string().trim().min(1).max(2000),
  evidenceRef: optionalEvidenceRefSchema,
});

export const establishNormalSettlementEligibilityInputSchema = collaborationIdCommandSchema;
export const requestSettlementExecutionInputSchema = collaborationIdCommandSchema;

export const confirmSettlementExecutionInputSchema = z.object({
  ...collaborationCommandEnvelopeFields,
  authoritativeConfirmationRef: evidenceRefSchema,
});

export const confirmRefundExecutionInputSchema = z.object({
  ...collaborationCommandEnvelopeFields,
  authoritativeConfirmationRef: evidenceRefSchema,
});

export const applyAdminResolutionInputSchema = z.object({
  ...collaborationCommandEnvelopeFields,
  creatorEntitlementAmount: moneySchema,
  brandRefundEntitlementAmount: moneySchema,
  currency: currencySchema,
  reasonCode: z.string().trim().min(1).max(100),
  reasonText: z.string().trim().min(1).max(2000).optional(),
  resolutionEvidence: z.unknown().optional(),
  residualObligations: z.unknown().optional(),
});

export const submitCollaborationFeedbackInputSchema = z.object({
  ...collaborationCommandEnvelopeFields,
  rating: z.coerce.number().int().min(1).max(5),
  reviewText: z.string().trim().max(2000).optional(),
});

export const revealFeedbackInputSchema = collaborationIdCommandSchema;

export const postCollaborationMessageInputSchema = z.object({
  ...collaborationCommandEnvelopeFields,
  body: z.string().trim().min(1).max(4000),
});

// Query/read validation. These schemas validate client-authored query parameters only;
// backend read models derive actionRequiredBy/availableActions and never accept them as authoritative input.
export const listCollaborationsQuerySchema = z.object({
  campaignId: entityIdSchema.optional(),
  briefId: entityIdSchema.optional(),
  lifecycle: collaborationLifecycleSchema.optional(),
  stage: collaborationStageSchema.optional(),
  search: z.string().trim().max(200).optional(),
  cursor: z.string().trim().min(1).optional(),
  limit: z.coerce.number().int().min(1).max(100).default(50),
});

export const collaborationDetailQuerySchema = z.object({
  collaborationId: entityIdSchema,
});

export const collaborationMessagesQuerySchema = z.object({
  collaborationId: entityIdSchema,
  cursor: z.string().trim().min(1).optional(),
  limit: z.coerce.number().int().min(1).max(200).default(100),
});

export const creatorContextQuerySchema = z.object({ collaborationId: entityIdSchema });
export const brandContextQuerySchema = z.object({ collaborationId: entityIdSchema });

export type ProvisionCollaborationInput = z.infer<typeof provisionCollaborationInputSchema>;
export type SubmitDeliverableInput = z.infer<typeof submitDeliverableInputSchema>;
export type RequestDeliverableRevisionInput = z.infer<typeof requestDeliverableRevisionInputSchema>;
export type SubmitPublishingEvidenceInput = z.infer<typeof submitPublishingEvidenceInputSchema>;
export type SubmitCollaborationFeedbackInput = z.infer<typeof submitCollaborationFeedbackInputSchema>;
export type ListCollaborationsQuery = z.infer<typeof listCollaborationsQuerySchema>;
