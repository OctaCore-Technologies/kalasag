---
title: 0004. Use React Native for the mobile field app
tags:
  - adr
status: accepted
---

# 0004. Use React Native for the mobile field app

## Status

accepted

## Context

The proposal lists both Flutter and React Native as candidate stacks for the field app. The field app's defining requirement is BLE pairing with a relay node at the point of placement (`react-native-ble-plx` or equivalent) — under Expo, that needs a custom dev client rather than working out of the box in Expo Go, which adds a step regardless of framework choice.

## Decision

React Native, using the React Native CLI (not Expo), not Flutter. See `mobile/` for the scaffold — BLE pairing, GPS position logging, offline-sync queue, native map view.

## Consequences

Reuses TypeScript and React conventions already established for `web/frontend` and `web/backend` (see [[Decisions/0003-use-express-for-backend|ADR 0003]]) — one language across web, backend, and mobile, sharing the `shared/` types package directly. Loses Flutter's generally smoother native-widget performance, which isn't a binding constraint for this app's UI (a map, a node list, and a pairing flow). `android/` and `ios/` native projects aren't generated yet — see `mobile/android/README.md` / `mobile/ios/README.md` for how to generate them locally.
