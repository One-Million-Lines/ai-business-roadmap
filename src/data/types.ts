export type Layer =
  | "Problem, Opportunity & Scope"
  | "Use Case Discovery & Prioritization"
  | "Decision Model & Operating Model"
  | "Data, Knowledge, Memory & Context"
  | "Solution Architecture"
  | "Integration & Process Embedding"
  | "Execution & Pilot Design"
  | "Trust, Risk, Governance & Control"
  | "Measurement & Learning Loop"
  | "Rollout, Adoption & Scaling";

export type Track = "Business" | "Technical" | "AI Capability" | "Governance";

export type NodeType =
  | "problem"
  | "use_case"
  | "decision"
  | "component"
  | "integration"
  | "pattern"
  | "metric"
  | "risk"
  | "guardrail";

export type MaturityLevel = "Manual" | "Assist" | "Semi-Automated" | "Fully Automated" | "Autonomous";

export type Importance = "critical" | "high" | "medium" | "low";
export type Complexity = "low" | "medium" | "high" | "very_high";

export interface RoadmapNode {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  layer: Layer;
  track: Track;
  type: NodeType;
  dependencies: string[];
  maturityLevels: MaturityLevel[];
  tools: string[];
  risks: string[];
  metrics: string[];
  examples: string[];
  tags: string[];
  importance: Importance;
  complexity: Complexity;
}

export type ViewMode = "layered" | "flow" | "compact";

export const LAYERS: Layer[] = [
  "Problem, Opportunity & Scope",
  "Use Case Discovery & Prioritization",
  "Decision Model & Operating Model",
  "Data, Knowledge, Memory & Context",
  "Solution Architecture",
  "Integration & Process Embedding",
  "Execution & Pilot Design",
  "Trust, Risk, Governance & Control",
  "Measurement & Learning Loop",
  "Rollout, Adoption & Scaling",
];

export const TRACKS: Track[] = ["Business", "Technical", "AI Capability", "Governance"];

export const NODE_TYPES: NodeType[] = [
  "problem", "use_case", "decision", "component",
  "integration", "pattern", "metric", "risk", "guardrail",
];

export const MATURITY_LEVELS: MaturityLevel[] = [
  "Manual", "Assist", "Semi-Automated", "Fully Automated", "Autonomous",
];

export const TRACK_COLORS: Record<Track, string> = {
  Business: "bg-blue-500/10 text-blue-700 border-blue-200",
  Technical: "bg-violet-500/10 text-violet-700 border-violet-200",
  "AI Capability": "bg-emerald-500/10 text-emerald-700 border-emerald-200",
  Governance: "bg-amber-500/10 text-amber-700 border-amber-200",
};

export const TRACK_DOT_COLORS: Record<Track, string> = {
  Business: "bg-blue-500",
  Technical: "bg-violet-500",
  "AI Capability": "bg-emerald-500",
  Governance: "bg-amber-500",
};

export const TRACK_BORDER_COLORS: Record<Track, string> = {
  Business: "border-l-blue-500",
  Technical: "border-l-violet-500",
  "AI Capability": "border-l-emerald-500",
  Governance: "border-l-amber-500",
};

export const LAYER_ICONS: Record<Layer, string> = {
  "Problem, Opportunity & Scope": "AlertTriangle",
  "Use Case Discovery & Prioritization": "Lightbulb",
  "Decision Model & Operating Model": "GitBranch",
  "Data, Knowledge, Memory & Context": "Brain",
  "Solution Architecture": "Layers",
  "Integration & Process Embedding": "Plug",
  "Execution & Pilot Design": "Play",
  "Trust, Risk, Governance & Control": "Shield",
  "Measurement & Learning Loop": "BarChart3",
  "Rollout, Adoption & Scaling": "Rocket",
};

export interface FilterState {
  tracks: Track[];
  layers: Layer[];
  nodeTypes: NodeType[];
  complexity: Complexity[];
  maturity: MaturityLevel[];
  search: string;
}

export const FEATURED_PATH = [
  "lead-response-delay",
  "auto-follow-up-leads",
  "decision-authority-matrix",
  "knowledge-base-rag",
  "llm-decision-layer",
  "crm-integration",
  "pilot-scope-design",
  "human-in-the-loop",
  "roi-tracking",
  "rollout-phased-deployment",
];
