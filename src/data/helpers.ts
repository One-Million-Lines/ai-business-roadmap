import { RoadmapNode, Layer, Track, FilterState, LAYERS, TRACKS } from "./types";

export function groupByLayer(nodes: RoadmapNode[]): Record<Layer, RoadmapNode[]> {
  const result = {} as Record<Layer, RoadmapNode[]>;
  for (const layer of LAYERS) {
    result[layer] = nodes.filter((n) => n.layer === layer);
  }
  return result;
}

export function groupByTrack(nodes: RoadmapNode[]): Record<Track, RoadmapNode[]> {
  const result = {} as Record<Track, RoadmapNode[]>;
  for (const track of TRACKS) {
    result[track] = nodes.filter((n) => n.track === track);
  }
  return result;
}

export function filterNodes(nodes: RoadmapNode[], filters: FilterState): RoadmapNode[] {
  return nodes.filter((node) => {
    if (filters.tracks.length > 0 && !filters.tracks.includes(node.track)) return false;
    if (filters.layers.length > 0 && !filters.layers.includes(node.layer)) return false;
    if (filters.nodeTypes.length > 0 && !filters.nodeTypes.includes(node.type)) return false;
    if (filters.complexity.length > 0 && !filters.complexity.includes(node.complexity)) return false;
    if (filters.maturity.length > 0 && !filters.maturity.some((m) => node.maturityLevels.includes(m))) return false;
    if (filters.search) {
      const q = filters.search.toLowerCase();
      const searchable = [node.title, node.shortDescription, ...node.tags].join(" ").toLowerCase();
      if (!searchable.includes(q)) return false;
    }
    return true;
  });
}

export function getDependencies(nodeId: string, allNodes: RoadmapNode[]): RoadmapNode[] {
  const node = allNodes.find((n) => n.id === nodeId);
  if (!node) return [];
  return allNodes.filter((n) => node.dependencies.includes(n.id));
}

export function getDependents(nodeId: string, allNodes: RoadmapNode[]): RoadmapNode[] {
  return allNodes.filter((n) => n.dependencies.includes(nodeId));
}

export function getRelatedNodes(nodeId: string, allNodes: RoadmapNode[]): RoadmapNode[] {
  const deps = getDependencies(nodeId, allNodes);
  const dependents = getDependents(nodeId, allNodes);
  const relatedIds = new Set([...deps.map((n) => n.id), ...dependents.map((n) => n.id)]);
  return allNodes.filter((n) => relatedIds.has(n.id));
}

export function isOnFeaturedPath(nodeId: string, featuredPath: string[]): boolean {
  return featuredPath.includes(nodeId);
}

export function buildFlowPath(startId: string, allNodes: RoadmapNode[]): RoadmapNode[] {
  const visited = new Set<string>();
  const path: RoadmapNode[] = [];

  function traverse(id: string) {
    if (visited.has(id)) return;
    visited.add(id);
    const node = allNodes.find((n) => n.id === id);
    if (!node) return;
    path.push(node);
    const dependents = allNodes.filter((n) => n.dependencies.includes(id));
    for (const dep of dependents) {
      traverse(dep.id);
    }
  }

  traverse(startId);
  // Sort by layer order
  const layerOrder = new Map(LAYERS.map((l, i) => [l, i]));
  return path.sort((a, b) => (layerOrder.get(a.layer) ?? 0) - (layerOrder.get(b.layer) ?? 0));
}

export const emptyFilters: FilterState = {
  tracks: [],
  layers: [],
  nodeTypes: [],
  complexity: [],
  maturity: [],
  search: "",
};

export function hasActiveFilters(filters: FilterState): boolean {
  return (
    filters.tracks.length > 0 ||
    filters.layers.length > 0 ||
    filters.nodeTypes.length > 0 ||
    filters.complexity.length > 0 ||
    filters.maturity.length > 0 ||
    filters.search.length > 0
  );
}
