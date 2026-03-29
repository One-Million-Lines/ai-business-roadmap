import { Layers, GitBranch, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ViewMode } from "@/data/types";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface ViewModeToggleProps {
  mode: ViewMode;
  onChange: (mode: ViewMode) => void;
}

const modes: { value: ViewMode; icon: React.ComponentType<any>; label: string }[] = [
  { value: "layered", icon: Layers, label: "Layered View" },
  { value: "flow", icon: GitBranch, label: "Flow View" },
  { value: "compact", icon: LayoutGrid, label: "Compact View" },
];

export function ViewModeToggle({ mode, onChange }: ViewModeToggleProps) {
  return (
    <div className="inline-flex items-center rounded-md border bg-muted p-0.5">
      {modes.map(({ value, icon: Icon, label }) => (
        <Tooltip key={value}>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "h-7 px-2.5 text-xs",
                mode === value && "bg-background shadow-sm text-foreground",
                mode !== value && "text-muted-foreground hover:text-foreground",
              )}
              onClick={() => onChange(value)}
            >
              <Icon className="h-3.5 w-3.5" />
              <span className="ml-1 hidden sm:inline">{label}</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>{label}</TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
}
