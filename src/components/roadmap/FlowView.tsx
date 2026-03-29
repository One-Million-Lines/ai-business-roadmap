import { RoadmapNode, FEATURED_PATH, LAYERS } from "@/data/types";
import { roadmapNodes } from "@/data/mockData";
import { RoadmapNodeCard } from "./RoadmapNodeCard";
import { EmptyState } from "./EmptyState";
import { cn } from "@/lib/utils";
import { ArrowDown, Sparkles } from "lucide-react";
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
  if (nodes.length === 0) {
    return <EmptyState onReset={onResetFilters} />;
  }

  // Build featured path from available nodes
  const featuredNodes = FEATURED_PATH
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
      {/* Featured path */}
      {featuredNodes.length > 0 && (
        <div>
          <div className="mb-4 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" />
            <h3 className="text-sm font-semibold">Featured Path: Auto-Follow-Up on Inbound Leads</h3>
          </div>
          <div className="flex flex-col items-center gap-1">
            <AnimatePresence>
              {featuredNodes.map((node, i) => (
                <div key={node.id} className="flex flex-col items-center w-full max-w-md">
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
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="my-1 flex flex-col items-center"
                    >
                      <div className="h-4 w-px bg-border" />
                      <ArrowDown className="h-3 w-3 text-muted-foreground" />
                    </motion.div>
                  )}
                </div>
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
