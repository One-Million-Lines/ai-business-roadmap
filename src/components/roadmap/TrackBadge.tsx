import { Badge } from "@/components/ui/badge";
import { TRACK_COLORS, Track } from "@/data/types";
import { cn } from "@/lib/utils";

interface TrackBadgeProps {
  track: Track;
  className?: string;
}

export function TrackBadge({ track, className }: TrackBadgeProps) {
  return (
    <Badge variant="outline" className={cn("text-[10px] font-medium", TRACK_COLORS[track], className)}>
      {track}
    </Badge>
  );
}
