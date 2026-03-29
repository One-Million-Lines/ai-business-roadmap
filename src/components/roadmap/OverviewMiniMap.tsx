import { RoadmapNode, LAYERS, TRACK_DOT_COLORS } from "@/data/types";
import { groupByLayer } from "@/data/helpers";
import { getLayerIcon } from "./icons";
import { cn } from "@/lib/utils";

interface OverviewMiniMapProps {
  nodes: RoadmapNode[];
  totalNodes: number;
}

export function OverviewMiniMap({ nodes, totalNodes }: OverviewMiniMapProps) {
  const byLayer = groupByLayer(nodes);

  const scrollToLayer = (idx: number) => {
    const el = document.getElementById(`layer-${idx}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          Topics
        </h3>
        <span className="text-[10px] text-muted-foreground">
          {nodes.length}/{totalNodes}
        </span>
      </div>

      <nav className="space-y-0.5">
        {LAYERS.map((layer, idx) => {
          const layerNodes = byLayer[layer] || [];
          const LayerIcon = getLayerIcon(layer);
          const hasNodes = layerNodes.length > 0;

          return (
            <button
              key={layer}
              onClick={() => scrollToLayer(idx)}
              className={cn(
                "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-xs transition-colors",
                hasNodes
                  ? "text-foreground hover:bg-amber-50 hover:text-amber-900"
                  : "text-muted-foreground/50 cursor-default",
              )}
              disabled={!hasNodes}
            >
              <LayerIcon className="h-3 w-3 flex-shrink-0" />
              <span className="flex-1 truncate">{layer}</span>
              {hasNodes && (
                <span className="flex-shrink-0 text-[10px] text-muted-foreground">
                  {layerNodes.length}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Track legend */}
      <div className="border-t pt-2 space-y-1">
        <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">Tracks</span>
        <div className="grid grid-cols-2 gap-1">
          {(["Business", "Technical", "AI Capability", "Governance"] as const).map((track) => (
            <div key={track} className="flex items-center gap-1.5">
              <div className={cn("h-2 w-2 rounded-full flex-shrink-0", TRACK_DOT_COLORS[track])} />
              <span className="text-[10px] text-muted-foreground truncate">{track}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
