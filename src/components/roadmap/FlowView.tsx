import { useState } from "react";
import { RoadmapNode, FEATURED_JOURNEYS, LAYERS } from "@/data/types";
import { RoadmapNodeCard } from "./RoadmapNodeCard";
import { EmptyState } from "./EmptyState";
import { cn } from "@/lib/utils";
import { ArrowDown, Sparkles, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface FlowViewProps {
  nodes: RoadmapNode[];
  selectedNodeId: string | null;
  hoveredNodeId: string | null;
  relatedNodeIds: Set<string>;
  onSelectNode: (node: RoadmapNode) => void;
  onHoverNode: (nodeId: string | null) => void;
  onResetFilters: () => void;
}

export function FlowView({
  nodes,
  selectedNodeId,
  hoveredNodeId,
  relatedNodeIds,
  onSelectNode,
  onHoverNode,
  onResetFilters,
}: FlowViewProps) {
  const [activeJourneyIdx, setActiveJourneyIdx] = useState(0);

  if (nodes.length === 0) {
    return <EmptyState onReset={onResetFilters} />;
  }

  const activeJourney = FEATURED_JOURNEYS[activeJourneyIdx];

  // Build featured path from available nodes
  const featuredNodes = activeJourney.nodeIds
    .map((id) => nodes.find((n) => n.id === id))
    .filter(Boolean) as RoadmapNode[];

  // Remaining nodes not on the featured path
  const featuredIds = new Set(featuredNodes.map((n) => n.id));
  const otherNodes = nodes.filter((n) => !featuredIds.has(n.id));

  // Sort by layer order
  const layerOrder = new Map(LAYERS.map((l, i) => [l, i]));
  otherNodes.sort((a, b) => (layerOrder.get(a.layer) ?? 0) - (layerOrder.get(b.layer) ?? 0));

  return (
    <div className="space-y-8">
      {/* Journey selector */}
      {FEATURED_JOURNEYS.length > 1 && (
        <div className="flex flex-wrap gap-2">
          {FEATURED_JOURNEYS.map((journey, idx) => (
            <button
              key={journey.id}
              onClick={() => setActiveJourneyIdx(idx)}
              className={cn(
                "rounded-lg border px-3 py-2 text-left text-sm transition-all",
                idx === activeJourneyIdx
                  ? "border-primary bg-primary/5 shadow-sm"
                  : "border-border bg-white hover:border-primary/40 hover:bg-muted/50",
              )}
            >
              <div className="flex items-center gap-2">
                <Sparkles className={cn(
                  "h-3.5 w-3.5",
                  idx === activeJourneyIdx ? "text-primary" : "text-muted-foreground",
                )} />
                <span className={cn(
                  "font-medium",
                  idx === activeJourneyIdx ? "text-foreground" : "text-muted-foreground",
                )}>
                  {journey.title}
                </span>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Featured path */}
      {featuredNodes.length > 0 && (
        <div>
          <div className="mb-2">
            <div className="mb-1 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <h3 className="text-sm font-semibold">{activeJourney.title}</h3>
            </div>
            <p className="text-xs text-muted-foreground ml-6">{activeJourney.description}</p>
          </div>
          <div className="flex flex-col items-center gap-1 mt-4">
            <AnimatePresence mode="wait">
              {featuredNodes.map((node, i) => (
                <motion.div
                  key={node.id}
                  className="flex flex-col items-center w-full max-w-md"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <div className="w-full">
                    <RoadmapNodeCard
                      node={node}
                      isSelected={selectedNodeId === node.id}
                      isRelated={relatedNodeIds.has(node.id)}
                      onClick={onSelectNode}
                      onHover={onHoverNode}
                    />
                  </div>
                  {i < featuredNodes.length - 1 && (
                    <div className="my-1 flex flex-col items-center">
                      <div className="h-4 w-px bg-border" />
                      <ArrowDown className="h-3 w-3 text-muted-foreground" />
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      )}

      {/* Other nodes */}
      {otherNodes.length > 0 && (
        <div>
          <h3 className="mb-4 text-sm font-semibold text-muted-foreground">Other Nodes</h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {otherNodes.map((node) => (
                <RoadmapNodeCard
                  key={node.id}
                  node={node}
                  isSelected={selectedNodeId === node.id}
                  isRelated={relatedNodeIds.has(node.id)}
                  onClick={onSelectNode}
                  onHover={onHoverNode}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>
      )}
    </div>
  );
}
