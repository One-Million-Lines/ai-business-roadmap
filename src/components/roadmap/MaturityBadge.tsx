import { Badge } from "@/components/ui/badge";
import { MaturityLevel } from "@/data/types";
import { cn } from "@/lib/utils";

const maturityColors: Record<MaturityLevel, string> = {
  Manual: "bg-gray-100 text-gray-600 border-gray-200",
  Assist: "bg-sky-50 text-sky-700 border-sky-200",
  "Semi-Automated": "bg-indigo-50 text-indigo-700 border-indigo-200",
  "Fully Automated": "bg-emerald-50 text-emerald-700 border-emerald-200",
  Autonomous: "bg-purple-50 text-purple-700 border-purple-200",
};

interface MaturityBadgeProps {
  level: MaturityLevel;
  className?: string;
}

export function MaturityBadge({ level, className }: MaturityBadgeProps) {
  return (
    <Badge variant="outline" className={cn("text-[10px] font-medium", maturityColors[level], className)}>
      {level}
    </Badge>
  );
}
