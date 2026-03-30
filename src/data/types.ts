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

export type Track = "Business" | "Technical" | "AI Capability" | "Governance" | "Enablement";

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

export const TRACKS: Track[] = ["Business", "Technical", "AI Capability", "Governance", "Enablement"];

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
  Enablement: "bg-rose-500/10 text-rose-700 border-rose-200",
};

export const TRACK_DOT_COLORS: Record<Track, string> = {
  Business: "bg-blue-500",
  Technical: "bg-violet-500",
  "AI Capability": "bg-emerald-500",
  Governance: "bg-amber-500",
  Enablement: "bg-rose-500",
};

export const TRACK_BORDER_COLORS: Record<Track, string> = {
  Business: "border-l-blue-500",
  Technical: "border-l-violet-500",
  "AI Capability": "border-l-emerald-500",
  Governance: "border-l-amber-500",
  Enablement: "border-l-rose-500",
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

export interface FeaturedJourney {
  id: string;
  title: string;
  description: string;
  nodeIds: string[];
}

export const FEATURED_JOURNEYS: FeaturedJourney[] = [
  {
    id: "auto-follow-up-leads",
    title: "Auto-Follow-Up on Inbound Leads",
    description: "End-to-end journey from identifying lead response delays to scaling AI-assisted follow-up across the sales organization",
    nodeIds: [
      "lead-response-delay",           // L1: Problem
      "auto-follow-up-leads",          // L2: Use Case
      "decision-authority-matrix",      // L3: Decision Model
      "business-memory",               // L4: Data & Knowledge
      "llm-decision-layer",            // L5: Architecture
      "crm-integration",              // L6: Integration
      "ai-agent-execution",            // L7: Execution & Pilot
      "human-in-the-loop",            // L8: Trust & Governance
      "roi-tracking",                  // L9: Measurement
      "rollout-pilot-team",            // L10: Rollout & Scaling
    ],
  },
  {
    id: "ai-customer-support",
    title: "AI-Powered Customer Support",
    description: "Journey from support ticket overload to AI agents handling routine tickets with progressive autonomy",
    nodeIds: [
      "support-triage",                 // L1: Problem
      "intelligent-ticket-routing",     // L2: Use Case
      "progressive-autonomy-framework", // L3: Decision Model
      "session-memory",                 // L4: Data & Knowledge
      "orchestration-layer",            // L5: Architecture
      "communication-platform-integration", // L6: Integration
      "event-driven-execution",         // L7: Execution
      "output-guardrails",             // L8: Trust
      "roi-tracking",                  // L9: Measurement
      "scaling-strategy",              // L10: Rollout
    ],
  },
];

// All journey node IDs combined for card highlighting
export const FEATURED_PATH = FEATURED_JOURNEYS.flatMap((j) => j.nodeIds);
