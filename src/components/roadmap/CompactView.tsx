import { RoadmapNode } from "@/data/types";
import { RoadmapNodeCard } from "./RoadmapNodeCard";
import { EmptyState } from "./EmptyState";
import { AnimatePresence } from "framer-motion";

interface CompactViewProps {
  nodes: RoadmapNode[];
  selectedNodeId: string | null;
  hoveredNodeId: string | null;
  relatedNodeIds: Set<string>;
  onSelectNode: (node: RoadmapNode) => void;
  onHoverNode: (nodeId: string | null) => void;
  onResetFilters: () => void;
}

export function CompactView({
  nodes,
  selectedNodeId,
  hoveredNodeId,
  relatedNodeIds,
  onSelectNode,
  onHoverNode,
  onResetFilters,
}: CompactViewProps) {
  if (nodes.length === 0) {
    return <EmptyState onReset={onResetFilters} />;
  }

  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <AnimatePresence mode="popLayout">
        {nodes.map((node) => (
          <RoadmapNodeCard
            key={node.id}
            node={node}
            isSelected={selectedNodeId === node.id}
            isRelated={relatedNodeIds.has(node.id)}
            isCompact
            onClick={onSelectNode}
            onHover={onHoverNode}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
