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
  "Problem & Opportunity": AlertTriangle,
  "Use Case Design": Lightbulb,
  Architecture: Layers,
  Integration: Plug,
  "Memory & Context": Brain,
  Execution: Play,
  "Trust & Control": Shield,
  Measurement: BarChart3,
  Rollout: Rocket,
};

export function getNodeTypeIcon(type: NodeType) {
  return nodeTypeIcons[type] || Target;
}

export function getLayerIcon(layer: Layer) {
  return layerIcons[layer] || Target;
}
