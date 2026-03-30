import type { LayerDetail } from "@/data/layerDetails";
import { getLayerIcon } from "./icons";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription,
} from "@/components/ui/sheet";
import {
  AlertTriangle, CheckCircle2, Clock, HelpCircle, Lightbulb,
  Target, Users, XCircle,
} from "lucide-react";

interface LayerDetailPanelProps {
  detail: LayerDetail | null;
  open: boolean;
  onClose: () => void;
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

export function LayerDetailPanel({ detail, open, onClose }: LayerDetailPanelProps) {
  if (!detail) return null;

  const LayerIcon = getLayerIcon(detail.layer);

  return (
    <Sheet open={open} onOpenChange={(o) => !o && onClose()}>
      <SheetContent side="right" className="w-full sm:max-w-md p-0">
        <ScrollArea className="h-full">
          <div className="p-6 space-y-5">
            <SheetHeader className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="rounded-md bg-amber-100 p-1.5">
                  <LayerIcon className="h-4 w-4 text-amber-700" />
                </div>
                <Badge variant="outline" className="text-[10px] border-amber-300 text-amber-700">
                  Roadmap Step
                </Badge>
                <Badge variant="outline" className="text-[10px]">
                  <Clock className="h-2.5 w-2.5 mr-1" />
                  {detail.timeframe}
                </Badge>
              </div>
              <SheetTitle className="text-lg">{detail.layer}</SheetTitle>
              <p className="text-sm font-medium text-primary">{detail.tagline}</p>
              <SheetDescription className="text-sm leading-relaxed">
                {detail.description}
              </SheetDescription>
            </SheetHeader>

            <Separator />

            {/* Why Important */}
            <Section icon={Target} title="Why This Matters">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {detail.whyImportant}
              </p>
            </Section>

            <Separator />

            {/* How to Approach */}
            <Section icon={Lightbulb} title="How to Approach">
              <ol className="space-y-2 text-sm text-muted-foreground">
                {detail.howToApproach.map((step, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="flex-shrink-0 mt-0.5 h-5 w-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-medium">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </Section>

            <Separator />

            {/* Who to Include */}
            <Section icon={Users} title="Who to Include">
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                {detail.whoToInclude.map((person, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-xs text-primary mt-0.5">●</span>
                    {person}
                  </li>
                ))}
              </ul>
            </Section>

            <Separator />

            {/* Key Questions */}
            <Section icon={HelpCircle} title="Key Questions to Ask">
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                {detail.keyQuestions.map((q, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <HelpCircle className="mt-0.5 h-3 w-3 flex-shrink-0 text-blue-500" />
                    {q}
                  </li>
                ))}
              </ul>
            </Section>

            <Separator />

            {/* Expected Outcomes */}
            <Section icon={CheckCircle2} title="Expected Outcomes">
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                {detail.expectedOutcomes.map((outcome, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-3 w-3 flex-shrink-0 text-emerald-500" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </Section>

            <Separator />

            {/* Common Pitfalls */}
            <Section icon={AlertTriangle} title="Common Pitfalls">
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                {detail.commonPitfalls.map((pitfall, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <XCircle className="mt-0.5 h-3 w-3 flex-shrink-0 text-red-400" />
                    {pitfall}
                  </li>
                ))}
              </ul>
            </Section>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
