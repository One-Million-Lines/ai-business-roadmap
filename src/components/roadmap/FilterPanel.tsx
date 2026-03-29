import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FilterState, TRACKS, LAYERS, NODE_TYPES, MATURITY_LEVELS, Track, Layer, NodeType, MaturityLevel, Complexity } from "@/data/types";
import { hasActiveFilters, emptyFilters } from "@/data/helpers";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface FilterPanelProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  onClose: () => void;
}

const COMPLEXITIES: Complexity[] = ["low", "medium", "high", "very_high"];
const complexityLabels: Record<Complexity, string> = {
  low: "Low",
  medium: "Medium",
  high: "High",
  very_high: "Very High",
};

function toggleItem<T>(arr: T[], item: T): T[] {
  return arr.includes(item) ? arr.filter((x) => x !== item) : [...arr, item];
}

export function FilterPanel({ filters, onChange, onClose }: FilterPanelProps) {
  const active = hasActiveFilters(filters);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold">Filters</h3>
        <div className="flex items-center gap-2">
          {active && (
            <Button variant="ghost" size="sm" className="h-7 text-xs" onClick={() => onChange(emptyFilters)}>
              Clear all
            </Button>
          )}
          <Button variant="ghost" size="icon" className="h-7 w-7" onClick={onClose}>
            <X className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>

      <div>
        <p className="mb-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">Track</p>
        <div className="flex flex-wrap gap-1.5">
          {TRACKS.map((track) => (
            <Badge
              key={track}
              variant={filters.tracks.includes(track) ? "default" : "outline"}
              className="cursor-pointer text-[11px]"
              onClick={() => onChange({ ...filters, tracks: toggleItem(filters.tracks, track) })}
            >
              {track}
            </Badge>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <p className="mb-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">Layer</p>
        <div className="flex flex-wrap gap-1.5">
          {LAYERS.map((layer) => (
            <Badge
              key={layer}
              variant={filters.layers.includes(layer) ? "default" : "outline"}
              className="cursor-pointer text-[11px]"
              onClick={() => onChange({ ...filters, layers: toggleItem(filters.layers, layer) })}
            >
              {layer}
            </Badge>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <p className="mb-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">Node Type</p>
        <div className="flex flex-wrap gap-1.5">
          {NODE_TYPES.map((type) => (
            <Badge
              key={type}
              variant={filters.nodeTypes.includes(type) ? "default" : "outline"}
              className="cursor-pointer text-[11px] capitalize"
              onClick={() => onChange({ ...filters, nodeTypes: toggleItem(filters.nodeTypes, type) })}
            >
              {type.replace("_", " ")}
            </Badge>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <p className="mb-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">Complexity</p>
        <div className="flex flex-wrap gap-1.5">
          {COMPLEXITIES.map((c) => (
            <Badge
              key={c}
              variant={filters.complexity.includes(c) ? "default" : "outline"}
              className="cursor-pointer text-[11px]"
              onClick={() => onChange({ ...filters, complexity: toggleItem(filters.complexity, c) })}
            >
              {complexityLabels[c]}
            </Badge>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <p className="mb-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">Maturity</p>
        <div className="flex flex-wrap gap-1.5">
          {MATURITY_LEVELS.map((m) => (
            <Badge
              key={m}
              variant={filters.maturity.includes(m) ? "default" : "outline"}
              className="cursor-pointer text-[11px]"
              onClick={() => onChange({ ...filters, maturity: toggleItem(filters.maturity, m) })}
            >
              {m}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
