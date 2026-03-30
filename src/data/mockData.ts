import { RoadmapNode } from "./types";
import {
  problemOpportunityNodes,
  useCaseDiscoveryNodes,
  decisionModelNodes,
  dataKnowledgeMemoryNodes,
  architectureNodes,
  integrationNodes,
  executionNodes,
  trustControlNodes,
  measurementNodes,
  rolloutNodes,
} from "./layers";

/**
 * Complete roadmap assembled from per-layer modules.
 * Each layer file lives in ./layers/ with full LLM-readable context headers.
 */
export const roadmapNodes: RoadmapNode[] = [
  ...problemOpportunityNodes,
  ...useCaseDiscoveryNodes,
  ...decisionModelNodes,
  ...dataKnowledgeMemoryNodes,
  ...architectureNodes,
  ...integrationNodes,
  ...executionNodes,
  ...trustControlNodes,
  ...measurementNodes,
  ...rolloutNodes,
];
