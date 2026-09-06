---
title: Web Team
tags:
  - team
aliases:
  - Web
---

# Web Team

Owns both the coordination console and the API server — one team, two folders (see [[Decisions/0003-use-express-for-backend|ADR 0003]] for why they share a language/toolchain).

## Owns

- `web/frontend/` — coordination console, React + TypeScript + Vite
- `web/backend/` — API server, Express + TypeScript

## GitHub

`@OctaCore-Technologies/web` team · branch off `web-main`, PR back into it · CI: `frontend-ci.yml`, `backend-ci.yml`

## Related

- [[Architecture/System Overview]]
- [[Decisions/0003-use-express-for-backend]]
- For who's actually on this team by name, see the root [README's team section](../../README.md#team).
