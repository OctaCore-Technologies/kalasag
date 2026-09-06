---
title: 0001. Record architecture decisions
tags:
  - adr
status: accepted
---

# 0001. Record architecture decisions

## Status

accepted

## Context

Decisions like "why Express and not something else" or "why React Native and not Flutter" get made once, in conversation, and then forgotten — the next person to touch the code either re-litigates the same debate or assumes the current state was arbitrary.

## Decision

We record significant architecture decisions as numbered ADRs in [[Decisions/0001-record-architecture-decisions|this folder]], using [[Decisions/Templates/ADR Template|the ADR template]]. One file per decision, numbered sequentially, never edited after acceptance — superseded by a new ADR instead.

Not every decision needs one. Use judgment: if reverting it later would mean redoing real work (choice of framework, monorepo tooling, data ownership model), write an ADR. If it's easily reversible (a component's internal folder layout), it doesn't need one.

## Consequences

Adds a small amount of process overhead per significant decision. In exchange, the reasoning behind the current state of the codebase survives beyond whoever happened to be in the room when it was decided — useful for a student team where membership/roles can shift across semesters.
