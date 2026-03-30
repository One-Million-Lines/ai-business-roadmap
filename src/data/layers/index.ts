/**
 * AI Integration Roadmap — Layer Data Index
 *
 * All roadmap nodes are organized by layer in separate files.
 * Each file includes a JSDoc header with full context for LLM processing.
 * See _context.ts for the full schema and layer map.
 */

export { problemOpportunityNodes } from "./01-problem-opportunity-scope";
export { useCaseDiscoveryNodes } from "./02-use-case-discovery";
export { decisionModelNodes } from "./03-decision-operating-model";
export { memoryContextNodes as dataKnowledgeMemoryNodes } from "./04-data-knowledge-memory";
export { architectureNodes } from "./05-solution-architecture";
export { integrationNodes } from "./06-integration-process-embedding";
export { executionNodes } from "./07-execution-pilot";
export { trustControlNodes } from "./08-trust-risk-governance";
export { measurementNodes } from "./09-measurement-learning";
export { rolloutNodes } from "./10-rollout-adoption-scaling";
export { enablementNodes } from "./enablement-change-management";
