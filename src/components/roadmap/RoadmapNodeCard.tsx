import { motion } from "framer-motion";
import { RoadmapNode, TRACK_BORDER_COLORS, FEATURED_PATH } from "@/data/types";
import { getNodeTypeIcon } from "./icons";
import { TrackBadge } from "./TrackBadge";
import { MaturityBadge } from "./MaturityBadge";
import { cn } from "@/lib/utils";
import { GitBranch } from "lucide-react";

interface RoadmapNodeCardProps {
  node: RoadmapNode;
  isSelected?: boolean;
  isRelated?: boolean;
  isCompact?: boolean;
  onClick: (node: RoadmapNode) => void;
  onHover?: (nodeId: string | null) => void;
}

export function RoadmapNodeCard({
  node,
  isSelected,
  isRelated,
  isCompact,
  onClick,
  onHover,
}: RoadmapNodeCardProps) {
  const Icon = getNodeTypeIcon(node.type);
  const isFeatured = FEATURED_PATH.includes(node.id);
  const maxMaturity = node.maturityLevels[node.maturityLevels.length - 1];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "group relative cursor-pointer rounded-lg border-l-[3px] bg-white p-3 shadow-sm transition-all hover:shadow-md",
        TRACK_BORDER_COLORS[node.track],
        isSelected && "ring-2 ring-primary ring-offset-1 shadow-md",
        isRelated && !isSelected && "ring-1 ring-primary/30",
        isFeatured && !isSelected && "bg-primary/[0.02]",
        isCompact ? "p-2" : "p-3",
      )}
      onClick={() => onClick(node)}
      onMouseEnter={() => onHover?.(node.id)}
      onMouseLeave={() => onHover?.(null)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick(node)}
    >
      <div className="flex items-start gap-2">
        <div className={cn(
          "mt-0.5 flex-shrink-0 rounded-md bg-muted p-1",
          isCompact && "p-0.5",
        )}>
          <Icon className={cn("h-3.5 w-3.5 text-muted-foreground", isCompact && "h-3 w-3")} />
        </div>
        <div className="min-w-0 flex-1">
          <h4 className={cn(
            "font-medium leading-tight text-foreground",
            isCompact ? "text-xs" : "text-sm",
          )}>
            {node.title}
          </h4>
          {!isCompact && (
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground line-clamp-2">
              {node.shortDescription}
            </p>
          )}
        </div>
      </div>

      <div className={cn("mt-2 flex flex-wrap items-center gap-1", isCompact && "mt-1.5")}>
        <TrackBadge track={node.track} />
        {maxMaturity && <MaturityBadge level={maxMaturity} />}
        {node.dependencies.length > 0 && (
          <span className="inline-flex items-center gap-0.5 text-[10px] text-muted-foreground">
            <GitBranch className="h-2.5 w-2.5" />
            {node.dependencies.length}
          </span>
        )}
      </div>

      {isFeatured && (
        <div className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-primary" title="Featured path" />
      )}
    </motion.div>
  );
}
