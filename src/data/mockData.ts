import { RoadmapNode } from "./types";
import {
  problemOpportunityNodes,
  useCaseDesignNodes,
  architectureNodes,
  integrationNodes,
  memoryContextNodes,
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
  ...useCaseDesignNodes,
  ...architectureNodes,
  ...integrationNodes,
  ...memoryContextNodes,
  ...executionNodes,
  ...trustControlNodes,
  ...measurementNodes,
  ...rolloutNodes,
];
