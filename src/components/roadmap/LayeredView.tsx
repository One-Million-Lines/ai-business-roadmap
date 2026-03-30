import { RoadmapNode, Layer, LAYERS, TRACK_DOT_COLORS, FEATURED_PATH } from "@/data/types";
import { groupByLayer } from "@/data/helpers";
import { EmptyState } from "./EmptyState";
import { getLayerIcon } from "./icons";
import { cn } from "@/lib/utils";

const LEFT_TRACKS = ["Business", "Technical"] as const;
const RIGHT_TRACKS = ["AI Capability", "Governance"] as const;

interface LayeredViewProps {
  nodes: RoadmapNode[];
  selectedNodeId: string | null;
  hoveredNodeId: string | null;
  relatedNodeIds: Set<string>;
  onSelectNode: (node: RoadmapNode) => void;
  onHoverNode: (nodeId: string | null) => void;
  onResetFilters: () => void;
  onLayerClick?: (layer: Layer) => void;
}

export function LayeredView({
  nodes,
  selectedNodeId,
  hoveredNodeId,
  relatedNodeIds,
  onSelectNode,
  onHoverNode,
  onResetFilters,
  onLayerClick,
}: LayeredViewProps) {
  const byLayer = groupByLayer(nodes);

  if (nodes.length === 0) {
    return <EmptyState onReset={onResetFilters} />;
  }

  return (
    <div className="spine-container relative py-8">
      {/* Continuous vertical spine line */}
      <div className="spine-line absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-[1px] bg-primary/30" />

      {LAYERS.map((layer, layerIdx) => {
        const layerNodes = byLayer[layer];
        if (!layerNodes || layerNodes.length === 0) return null;

        const LayerIcon = getLayerIcon(layer);
        const leftNodes = layerNodes.filter((n) =>
          (LEFT_TRACKS as readonly string[]).includes(n.track),
        );
        const rightNodes = layerNodes.filter((n) =>
          (RIGHT_TRACKS as readonly string[]).includes(n.track),
        );
        const maxLen = Math.max(leftNodes.length, rightNodes.length);

        return (
          <section key={layer} id={`layer-${layerIdx}`} className="relative mb-4">
            {/* ── Layer header on spine ── */}
            <div className="relative z-10 flex justify-center mb-4">
              <button
                className="flex items-center gap-2 rounded-lg border-2 border-amber-300 bg-amber-50 px-5 py-2 shadow-sm cursor-pointer transition-all hover:shadow-md hover:border-amber-400 hover:bg-amber-100/70"
                onClick={() => onLayerClick?.(layer)}
              >
                <LayerIcon className="h-4 w-4 text-amber-600" />
                <span className="text-sm font-semibold text-amber-900">{layer}</span>
                <span className="text-xs text-amber-600/70">({layerNodes.length})</span>
              </button>
            </div>

            {/* ── Branching nodes ── */}
            {Array.from({ length: maxLen }).map((_, rowIdx) => {
              const leftNode = leftNodes[rowIdx];
              const rightNode = rightNodes[rowIdx];

              return (
                <div key={rowIdx} className="spine-row relative flex items-center mb-2">
                  {/* Left node */}
                  <div className="w-[calc(50%-12px)] flex justify-end pr-4">
                    {leftNode && (
                      <SpineNodeCard
                        node={leftNode}
                        side="left"
                        isSelected={selectedNodeId === leftNode.id}
                        isRelated={relatedNodeIds.has(leftNode.id)}
                        onClick={onSelectNode}
                        onHover={onHoverNode}
                      />
                    )}
                  </div>

                  {/* Center spine dot */}
                  <div className="relative z-10 flex-shrink-0 w-6 flex justify-center">
                    {(leftNode || rightNode) && (
                      <div className="h-2.5 w-2.5 rounded-full bg-primary/50 border-2 border-background" />
                    )}
                  </div>

                  {/* Right node */}
                  <div className="w-[calc(50%-12px)] flex justify-start pl-4">
                    {rightNode && (
                      <SpineNodeCard
                        node={rightNode}
                        side="right"
                        isSelected={selectedNodeId === rightNode.id}
                        isRelated={relatedNodeIds.has(rightNode.id)}
                        onClick={onSelectNode}
                        onHover={onHoverNode}
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </section>
        );
      })}
    </div>
  );
}

/* ── Spine node card ── */

interface SpineNodeCardProps {
  node: RoadmapNode;
  side: "left" | "right";
  isSelected?: boolean;
  isRelated?: boolean;
  onClick: (node: RoadmapNode) => void;
  onHover: (nodeId: string | null) => void;
}

function SpineNodeCard({ node, side, isSelected, isRelated, onClick, onHover }: SpineNodeCardProps) {
  const isFeatured = FEATURED_PATH.includes(node.id);

  return (
    <div className="relative flex items-center w-full max-w-[280px]">
      {/* Dotted connector line */}
      {side === "left" && (
        <div className="absolute right-0 top-1/2 -translate-y-[0.5px] w-4 border-t-[2px] border-dashed border-primary/30" />
      )}
      {side === "right" && (
        <div className="absolute left-0 top-1/2 -translate-y-[0.5px] w-4 border-t-[2px] border-dashed border-primary/30" />
      )}

      {/* Node card */}
      <button
        className={cn(
          "spine-node relative w-full text-left rounded-md border bg-white px-3 py-2 text-sm transition-all hover:shadow-md hover:border-primary/40",
          side === "left" ? "mr-4" : "ml-4",
          isSelected && "ring-2 ring-primary border-primary shadow-md",
          isRelated && !isSelected && "ring-1 ring-primary/30 border-primary/30",
          isFeatured && "border-amber-300 bg-amber-50/50",
        )}
        onClick={() => onClick(node)}
        onMouseEnter={() => onHover(node.id)}
        onMouseLeave={() => onHover(null)}
      >
        <div className="flex items-center gap-2">
          <div className={cn("h-2 w-2 rounded-full flex-shrink-0", TRACK_DOT_COLORS[node.track])} />
          <span className="font-medium text-foreground leading-tight">{node.title}</span>
        </div>
        {node.shortDescription && (
          <p className="mt-1 text-xs text-muted-foreground line-clamp-1 pl-4">{node.shortDescription}</p>
        )}
      </button>
    </div>
  );
}
