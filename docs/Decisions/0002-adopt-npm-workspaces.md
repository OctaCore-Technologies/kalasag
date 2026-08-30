---
title: 0002. Adopt npm workspaces for the JS/TS packages
tags:
  - adr
status: accepted
---

# 0002. Adopt npm workspaces for the JS/TS packages

## Status

accepted

## Context

`web/frontend`, `web/backend`, and `mobile` are all Node/TypeScript, and all three need to share a `shared/` package of node/coverage/MQTT-payload types. Without a workspace tool, `shared/` would have to be published to a registry or symlinked by hand — awkward for a project that changes daily.

`firmware/` is PlatformIO/C++ — a completely different toolchain — and is deliberately **not** part of the workspace.

## Decision

Added a root `package.json` with `"workspaces": ["web/frontend", "web/backend", "mobile", "shared"]`, so `shared` can be depended on via `"shared": "*"` and resolved locally by npm.

## Consequences

npm workspaces consolidate everything into a **single root `package-lock.json`** — there is no way to keep independent per-package lockfiles once workspaces are declared. This broke the CI workflows' `cache-dependency-path`, which originally pointed at per-package lockfiles that stopped existing; those were repointed at the root lockfile. `npm ci`/`npm run <script>` still work fine from within an individual package's directory (`web/backend`, `mobile`, etc.) — npm resolves the root lockfile automatically.
