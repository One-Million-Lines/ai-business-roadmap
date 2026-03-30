import {
  AlertTriangle, Lightbulb, Layers, Plug, Brain, Play,
  Shield, BarChart3, Rocket, Target, GitBranch, Box,
  Link2, Repeat, Activity, AlertCircle, Lock
} from "lucide-react";
import { NodeType, Layer } from "@/data/types";

const nodeTypeIcons: Record<NodeType, React.ComponentType<any>> = {
  problem: AlertTriangle,
  use_case: Lightbulb,
  decision: GitBranch,
  component: Box,
  integration: Link2,
  pattern: Repeat,
  metric: Activity,
  risk: AlertCircle,
  guardrail: Lock,
};

const layerIcons: Record<Layer, React.ComponentType<any>> = {
  "Problem, Opportunity & Scope": AlertTriangle,
  "Use Case Discovery & Prioritization": Lightbulb,
  "Decision Model & Operating Model": GitBranch,
  "Data, Knowledge, Memory & Context": Brain,
  "Solution Architecture": Layers,
  "Integration & Process Embedding": Plug,
  "Execution & Pilot Design": Play,
  "Trust, Risk, Governance & Control": Shield,
  "Measurement & Learning Loop": BarChart3,
  "Rollout, Adoption & Scaling": Rocket,
};

export function getNodeTypeIcon(type: NodeType) {
  return nodeTypeIcons[type] || Target;
}

export function getLayerIcon(layer: Layer) {
  return layerIcons[layer] || Target;
}
