# AI Business Roadmap

## Project Name

AI Business Roadmap

## What it does

This project is a client-side interactive map for planning how AI can be introduced into business workflows. It lets users explore roadmap nodes across business, technical, governance, and enablement layers, then inspect dependencies, filters, and supporting details.

## Why it exists

The codebase packages a large AI adoption roadmap into a browsable interface instead of a static document. The goal is to make sequencing, dependencies, and maturity expectations easier to understand.

## Features

- Three roadmap views: layered, flow, and compact
- Search plus filters for track, layer, node type, complexity, and maturity level
- Node detail panel with related-node highlighting
- Layer detail panel and legend sheet
- Mini-map sidebar for quick navigation
- Floating navigation links to related public demos

## How it works

- `src/data/layers/*.ts` defines roadmap nodes grouped by layer.
- `src/data/mockData.ts` assembles those layer exports into one roadmap dataset.
- `src/data/helpers.ts` handles filtering, dependency lookup, and related-node logic.
- `src/App.tsx` manages view state, filters, detail panels, and the active selection.
- The app is fully client-side. There is no backend or API integration in this repository.

## Tech stack

- React 19
- TypeScript
- Vite 6
- Tailwind CSS 3
- Radix UI / shadcn-style UI components
- Framer Motion
- Lucide React

## Project structure

```text
src/
├── components/
│   ├── roadmap/        # roadmap-specific UI
│   ├── ui/             # shared UI primitives
│   └── FloatingNav.tsx
├── data/
│   ├── layers/         # roadmap content by layer
│   ├── helpers.ts      # filtering and dependency helpers
│   ├── layerDetails.ts # layer-level explainer content
│   ├── mockData.ts     # combined roadmap dataset
│   └── types.ts
├── lib/
├── App.tsx
└── main.tsx
```

## Getting started

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

The Vite dev server is configured for port `5307`.

### Build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Configuration

- No custom environment variables are required.
- In production, Vite serves the app from `/demo/ai-business-roadmap/`.
- `APP_VERSION` is injected from `package.json` at build time.

## Usage

1. Open the app.
2. Search or apply filters to narrow the roadmap.
3. Switch between layered, flow, and compact views.
4. Click a node to inspect details and related dependencies.
5. Open the legend or layer details for additional context.

## Development

Useful commands:

```bash
npm run dev
npm run lint
npm run build
```

When editing roadmap content, keep node IDs unique and make sure dependency IDs still resolve correctly.

## Roadmap

There is no formal public roadmap documented in this repository yet. The current codebase already covers the interactive roadmap explorer, filtering, and detail views.

## Contributing

Contributions are welcome. Please read [CONTRIBUTING.md](./CONTRIBUTING.md) and the collaboration note in [public.md](./public.md) before opening a pull request.

## License

This project is available under the [MIT License](./LICENSE).
