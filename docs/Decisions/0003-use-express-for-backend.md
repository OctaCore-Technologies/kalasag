---
title: 0003. Use Express for the backend
tags:
  - adr
status: accepted
---

# 0003. Use Express for the backend

## Status

accepted

## Context

The original `web/README.md` described a React + .NET stack, but no backend code existed and the proposal's own technology-requirement table lists **Node.js** as the runtime for "the grid-based greedy max-coverage placement algorithm; serves node/coverage data to both the website and app." The web frontend is already TypeScript/Vite, and the mobile field app was going to be TypeScript too (see [[Decisions/0004-use-react-native-for-mobile|ADR 0004]]) — keeping the backend in the same language lets all three share the [[Architecture/System Overview|shared/ contract]] package directly instead of maintaining a second copy of the same types in a different language.

## Decision

Backend is Express + TypeScript, not .NET. See `web/backend/` for the scaffold: routes, MQTT ingest, Socket.IO realtime push to the web console, Firebase sync for the mobile app's offline queue. The placement algorithm and coverage-gap detection themselves are stubbed as `TODO`s — this decision is about the runtime/framework, not the algorithm.

## Consequences

Drops .NET entirely — nobody needs Visual Studio or the .NET SDK to touch the backend. Everyone working on `web/backend`, `web/frontend`, `mobile`, or `shared` uses the same language and can read across all four without a context switch.
