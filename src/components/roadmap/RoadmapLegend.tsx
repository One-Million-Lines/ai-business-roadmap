import { Separator } from "@/components/ui/separator";
import { TRACKS, TRACK_COLORS, TRACK_DOT_COLORS, NODE_TYPES, MATURITY_LEVELS } from "@/data/types";
import { getNodeTypeIcon } from "./icons";
import { MaturityBadge } from "./MaturityBadge";
import { cn } from "@/lib/utils";

const nodeTypeLabels: Record<string, string> = {
  problem: "Problem",
  use_case: "Use Case",
  decision: "Decision",
  component: "Component",
  integration: "Integration",
  pattern: "Pattern",
  metric: "Metric",
  risk: "Risk",
  guardrail: "Guardrail",
};

export function RoadmapLegend() {
  return (
    <div className="space-y-4 text-sm">
      <div>
        <p className="mb-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">Tracks</p>
        <div className="space-y-1.5">
          {TRACKS.map((track) => (
            <div key={track} className="flex items-center gap-2">
              <div className={cn("h-2.5 w-2.5 rounded-full", TRACK_DOT_COLORS[track])} />
              <span className="text-xs">{track}</span>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <p className="mb-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">Node Types</p>
        <div className="space-y-1.5">
          {NODE_TYPES.map((type) => {
            const Icon = getNodeTypeIcon(type);
            return (
              <div key={type} className="flex items-center gap-2">
                <Icon className="h-3.5 w-3.5 text-muted-foreground" />
                <span className="text-xs">{nodeTypeLabels[type]}</span>
              </div>
            );
          })}
        </div>
      </div>

      <Separator />

      <div>
        <p className="mb-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">Maturity Levels</p>
        <div className="flex flex-wrap gap-1.5">
          {MATURITY_LEVELS.map((level) => (
            <MaturityBadge key={level} level={level} />
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <p className="mb-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">Indicators</p>
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-xs">Featured path node</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-0.5 rounded-full bg-blue-500" />
            <span className="text-xs">Left border = track color</span>
          </div>
        </div>
      </div>
    </div>
  );
}
