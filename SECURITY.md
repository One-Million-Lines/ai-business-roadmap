# Security Policy

## Supported versions

Security fixes are applied to the latest state of the default branch.

## Reporting a vulnerability

Please do **not** open a public issue for security problems.

- Use GitHub private vulnerability reporting if it is enabled for this repository.
- Otherwise, contact the maintainer privately using the LinkedIn profile listed in [public.md](./public.md).

When reporting an issue, include:

- affected file or feature
- reproduction steps
- expected impact
- any suggested mitigation

## Secret handling

Do not commit `.env` files, tokens, API keys, or private URLs. Generated builds and local-only files should stay out of version control.
