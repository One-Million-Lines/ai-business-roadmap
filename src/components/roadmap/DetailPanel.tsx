import { RoadmapNode } from "@/data/types";
import { getDependencies, getDependents } from "@/data/helpers";
import { roadmapNodes } from "@/data/mockData";
import { getNodeTypeIcon } from "./icons";
import { TrackBadge } from "./TrackBadge";
import { MaturityBadge } from "./MaturityBadge";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription,
} from "@/components/ui/sheet";
import {
  AlertTriangle, ArrowRight, BarChart3, BookOpen, GitBranch, Lightbulb,
  Shield, Tag, Wrench, ChevronRight, ArrowDown, TrendingUp,
} from "lucide-react";

interface DetailPanelProps {
  node: RoadmapNode | null;
  open: boolean;
  onClose: () => void;
  onSelectNode: (node: RoadmapNode) => void;
}

function Section({ icon: Icon, title, children }: { icon: React.ComponentType<any>; title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <Icon className="h-3.5 w-3.5 text-muted-foreground" />
        <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{title}</h4>
      </div>
      {children}
    </div>
  );
}

export function DetailPanel({ node, open, onClose, onSelectNode }: DetailPanelProps) {
  if (!node) return null;

  const Icon = getNodeTypeIcon(node.type);
  const deps = getDependencies(node.id, roadmapNodes);
  const dependents = getDependents(node.id, roadmapNodes);

  return (
    <Sheet open={open} onOpenChange={(o) => !o && onClose()}>
      <SheetContent side="right" className="w-full sm:max-w-md p-0">
        <ScrollArea className="h-full">
          <div className="p-6 space-y-5">
            <SheetHeader className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="rounded-md bg-muted p-1.5">
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </div>
                <Badge variant="outline" className="text-[10px] capitalize">
                  {node.type.replace("_", " ")}
                </Badge>
                <Badge variant="outline" className="text-[10px]">
                  {node.layer}
                </Badge>
              </div>
              <SheetTitle className="text-lg">{node.title}</SheetTitle>
              <SheetDescription className="text-sm leading-relaxed whitespace-pre-line">
                {node.fullDescription}
              </SheetDescription>
            </SheetHeader>

            <div className="flex flex-wrap gap-1.5">
              <TrackBadge track={node.track} />
              {node.maturityLevels.map((m) => (
                <MaturityBadge key={m} level={m} />
              ))}
            </div>

            <Separator />

            {/* Maturity Journey */}
            <Section icon={TrendingUp} title="Maturity Journey">
              <div className="flex items-center gap-1 flex-wrap">
                {node.maturityLevels.map((level, i) => (
                  <span key={level} className="flex items-center gap-1">
                    <MaturityBadge level={level} />
                    {i < node.maturityLevels.length - 1 && (
                      <ArrowRight className="h-3 w-3 text-muted-foreground" />
                    )}
                  </span>
                ))}
              </div>
            </Section>

            <Separator />

            {/* Dependencies */}
            {deps.length > 0 && (
              <>
                <Section icon={GitBranch} title="Dependencies">
                  <div className="space-y-1.5">
                    {deps.map((dep) => (
                      <button
                        key={dep.id}
                        className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm hover:bg-muted transition-colors"
                        onClick={() => onSelectNode(dep)}
                      >
                        <ChevronRight className="h-3 w-3 text-muted-foreground" />
                        <span>{dep.title}</span>
                        <TrackBadge track={dep.track} className="ml-auto" />
                      </button>
                    ))}
                  </div>
                </Section>
                <Separator />
              </>
            )}

            {/* Dependents / Related */}
            {dependents.length > 0 && (
              <>
                <Section icon={ArrowDown} title="Enables">
                  <div className="space-y-1.5">
                    {dependents.map((dep) => (
                      <button
                        key={dep.id}
                        className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm hover:bg-muted transition-colors"
                        onClick={() => onSelectNode(dep)}
                      >
                        <ChevronRight className="h-3 w-3 text-muted-foreground" />
                        <span>{dep.title}</span>
                        <TrackBadge track={dep.track} className="ml-auto" />
                      </button>
                    ))}
                  </div>
                </Section>
                <Separator />
              </>
            )}

            {/* Risks */}
            {node.risks.length > 0 && (
              <>
                <Section icon={AlertTriangle} title="Risks">
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {node.risks.map((risk, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Shield className="mt-0.5 h-3 w-3 flex-shrink-0 text-amber-500" />
                        {risk}
                      </li>
                    ))}
                  </ul>
                </Section>
                <Separator />
              </>
            )}

            {/* Tools */}
            {node.tools.length > 0 && (
              <>
                <Section icon={Wrench} title="Tools & Systems">
                  <div className="flex flex-wrap gap-1.5">
                    {node.tools.map((tool) => (
                      <Badge key={tool} variant="secondary" className="text-[11px]">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </Section>
                <Separator />
              </>
            )}

            {/* Metrics */}
            {node.metrics.length > 0 && (
              <>
                <Section icon={BarChart3} title="Metrics to Track">
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {node.metrics.map((metric, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-xs text-primary mt-0.5">●</span>
                        {metric}
                      </li>
                    ))}
                  </ul>
                </Section>
                <Separator />
              </>
            )}

            {/* Example */}
            {node.examples.length > 0 && (
              <Section icon={BookOpen} title="Real-World Example">
                <div className="rounded-md bg-muted/50 p-3 text-sm text-muted-foreground italic leading-relaxed">
                  "{node.examples[0]}"
                </div>
              </Section>
            )}

            {/* Tags */}
            {node.tags.length > 0 && (
              <>
                <Separator />
                <Section icon={Tag} title="Tags">
                  <div className="flex flex-wrap gap-1">
                    {node.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-[10px] text-muted-foreground">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </Section>
              </>
            )}

            {/* Importance & Complexity */}
            <Separator />
            <div className="flex gap-4 text-xs text-muted-foreground">
              <div>
                <span className="font-medium">Importance:</span>{" "}
                <span className="capitalize">{node.importance}</span>
              </div>
              <div>
                <span className="font-medium">Complexity:</span>{" "}
                <span className="capitalize">{node.complexity.replace("_", " ")}</span>
              </div>
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
