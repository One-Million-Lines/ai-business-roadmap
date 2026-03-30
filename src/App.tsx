import { useState, useMemo, useCallback } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet, SheetContent, SheetHeader, SheetTitle,
} from "@/components/ui/sheet";
import { Map, Filter, Info } from "lucide-react";
import { roadmapNodes } from "@/data/mockData";
import {
  RoadmapNode, Layer, ViewMode, FilterState, FEATURED_PATH,
} from "@/data/types";
import {
  filterNodes, getRelatedNodes, emptyFilters, hasActiveFilters,
} from "@/data/helpers";
import { SearchBar } from "@/components/roadmap/SearchBar";
import { ViewModeToggle } from "@/components/roadmap/ViewModeToggle";
import { FilterPanel } from "@/components/roadmap/FilterPanel";
import { RoadmapLegend } from "@/components/roadmap/RoadmapLegend";
import { DetailPanel } from "@/components/roadmap/DetailPanel";
import { LayeredView } from "@/components/roadmap/LayeredView";
import { LayerDetailPanel } from "@/components/roadmap/LayerDetailPanel";
import { layerDetails } from "@/data/layerDetails";
import { FlowView } from "@/components/roadmap/FlowView";
import { CompactView } from "@/components/roadmap/CompactView";
import { OverviewMiniMap } from "@/components/roadmap/OverviewMiniMap";

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>("layered");
  const [filters, setFilters] = useState<FilterState>(emptyFilters);
  const [selectedNode, setSelectedNode] = useState<RoadmapNode | null>(null);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [showLegend, setShowLegend] = useState(false);
  const [selectedLayer, setSelectedLayer] = useState<Layer | null>(null);

  const filteredNodes = useMemo(
    () => filterNodes(roadmapNodes, filters),
    [filters],
  );

  const relatedNodeIds = useMemo(() => {
    const activeId = hoveredNodeId || selectedNode?.id;
    if (!activeId) return new Set<string>();
    const related = getRelatedNodes(activeId, roadmapNodes);
    return new Set(related.map((n) => n.id));
  }, [hoveredNodeId, selectedNode]);

  const handleSelectNode = useCallback((node: RoadmapNode) => {
    setSelectedNode(node);
  }, []);

  const handleCloseDetail = useCallback(() => {
    setSelectedNode(null);
  }, []);

  const handleSearch = useCallback((search: string) => {
    setFilters((f) => ({ ...f, search }));
  }, []);

  const handleResetFilters = useCallback(() => {
    setFilters(emptyFilters);
  }, []);

  const handleLayerClick = useCallback((layer: Layer) => {
    setSelectedLayer(layer);
  }, []);

  const handleCloseLayerDetail = useCallback(() => {
    setSelectedLayer(null);
  }, []);

  const activeFilterCount = [
    filters.tracks.length,
    filters.layers.length,
    filters.nodeTypes.length,
    filters.complexity.length,
    filters.maturity.length,
  ].reduce((a, b) => a + b, 0);

  return (
    <TooltipProvider delayDuration={200}>
      <div className="flex min-h-screen flex-col">
        {/* ── Header ── */}
        <header className="sticky top-0 z-20 border-b bg-background/95 backdrop-blur-sm">
          <div className="mx-auto max-w-[1600px] px-4 py-3">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-primary p-2">
                  <Map className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-lg font-bold tracking-tight">AI Business Roadmap</h1>
                  <p className="text-xs text-muted-foreground">
                    Strategic map for introducing AI into business workflows
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <SearchBar value={filters.search} onChange={handleSearch} />
                <ViewModeToggle mode={viewMode} onChange={setViewMode} />
                <Button
                  variant="outline"
                  size="sm"
                  className="h-9 gap-1.5 text-xs"
                  onClick={() => setShowLegend(true)}
                >
                  <Info className="h-3.5 w-3.5" />
                  Legend
                </Button>
                <Button
                  variant={activeFilterCount > 0 ? "default" : "outline"}
                  size="sm"
                  className="h-9 gap-1.5 text-xs"
                  onClick={() => setShowFilters(true)}
                >
                  <Filter className="h-3.5 w-3.5" />
                  Filters
                  {activeFilterCount > 0 && (
                    <span className="ml-0.5 rounded-full bg-primary-foreground/20 px-1.5 py-0.5 text-[10px]">
                      {activeFilterCount}
                    </span>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* ── Main Content ── */}
        <main className="flex-1">
          <div className="flex">
            {/* TOC Sidebar */}
            <aside className="sticky top-[73px] hidden h-[calc(100vh-73px)] w-52 flex-shrink-0 overflow-y-auto border-r bg-card p-3 lg:block">
              <OverviewMiniMap nodes={filteredNodes} totalNodes={roadmapNodes.length} />
            </aside>

            {/* Spine content area */}
            <div className="flex-1 min-w-0 px-4 py-4">
              {/* Active filters indicator */}
              {hasActiveFilters(filters) && (
                <div className="mb-3 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <span>
                    Showing {filteredNodes.length} of {roadmapNodes.length} nodes
                  </span>
                  <Button variant="ghost" size="sm" className="h-6 text-xs" onClick={handleResetFilters}>
                    Clear filters
                  </Button>
                </div>
              )}

              {/* View content */}
              {viewMode === "layered" && (
                <LayeredView
                  nodes={filteredNodes}
                  selectedNodeId={selectedNode?.id ?? null}
                  hoveredNodeId={hoveredNodeId}
                  relatedNodeIds={relatedNodeIds}
                  onSelectNode={handleSelectNode}
                  onHoverNode={setHoveredNodeId}
                  onResetFilters={handleResetFilters}
                  onLayerClick={handleLayerClick}
                />
              )}
              {viewMode === "flow" && (
                <FlowView
                  nodes={filteredNodes}
                  selectedNodeId={selectedNode?.id ?? null}
                  hoveredNodeId={hoveredNodeId}
                  relatedNodeIds={relatedNodeIds}
                  onSelectNode={handleSelectNode}
                  onHoverNode={setHoveredNodeId}
                  onResetFilters={handleResetFilters}
                />
              )}
              {viewMode === "compact" && (
                <CompactView
                  nodes={filteredNodes}
                  selectedNodeId={selectedNode?.id ?? null}
                  hoveredNodeId={hoveredNodeId}
                  relatedNodeIds={relatedNodeIds}
                  onSelectNode={handleSelectNode}
                  onHoverNode={setHoveredNodeId}
                  onResetFilters={handleResetFilters}
                />
              )}
            </div>
          </div>
        </main>

        {/* ── Detail Panel ── */}
        <DetailPanel
          node={selectedNode}
          open={!!selectedNode}
          onClose={handleCloseDetail}
          onSelectNode={handleSelectNode}
        />

        {/* ── Filter Sheet ── */}
        <Sheet open={showFilters} onOpenChange={setShowFilters}>
          <SheetContent side="right" className="w-full sm:max-w-sm" aria-describedby={undefined}>
            <SheetHeader className="sr-only">
              <SheetTitle>Filters</SheetTitle>
            </SheetHeader>
            <FilterPanel
              filters={filters}
              onChange={setFilters}
              onClose={() => setShowFilters(false)}
            />
          </SheetContent>
        </Sheet>

        {/* ── Layer Detail Panel ── */}
        <LayerDetailPanel
          detail={selectedLayer ? layerDetails[selectedLayer] : null}
          open={!!selectedLayer}
          onClose={handleCloseLayerDetail}
        />

        {/* ── Legend Sheet ── */}
        <Sheet open={showLegend} onOpenChange={setShowLegend}>
          <SheetContent side="right" className="w-full sm:max-w-xs">
            <SheetHeader className="mb-4">
              <SheetTitle>Legend</SheetTitle>
            </SheetHeader>
            <RoadmapLegend />
          </SheetContent>
        </Sheet>
      </div>

      {/* ── Footer ── */}
      <footer className="border-t bg-muted/30 py-4 text-center text-xs text-muted-foreground">
        Built by{" "}
        <a
          href="https://linkedin.com/in/alexrada"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-foreground hover:text-primary transition-colors"
        >
          Alex Rada
        </a>
        {" "}Get in touch if you want to contribute, give feedback, or share how you used the roadmap!{" "}
        <span className="mx-1">·</span>
        <span>v{APP_VERSION}</span>
      </footer>
    </TooltipProvider>
  );
}
