# Contributing

Thanks for your interest in improving AI Business Roadmap.

## Before you start

- Read [public.md](./public.md).
- Keep documentation aligned with the actual code and data files.
- Prefer focused pull requests over large mixed changes.

## Local setup

```bash
npm install
npm run dev
```

## Development guidelines

- Use the existing Vite + React + TypeScript setup.
- Run `npm run lint` and `npm run build` before opening a PR.
- If you edit roadmap data, keep IDs unique and dependency references valid.
- Update `README.md` when scripts, structure, or visible behavior changes.

## Pull request checklist

- [ ] The change matches current project behavior
- [ ] Lint and build pass locally
- [ ] No secrets, local env files, or generated artifacts are included
- [ ] UI or content changes are explained clearly in the PR description
