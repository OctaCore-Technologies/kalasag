# KALASAG Knowledge Base

This is the team's Obsidian vault — project knowledge that doesn't belong in code comments or component READMEs: architecture rationale, decisions, team ownership, meeting notes, and shared vocabulary.

## Opening the vault

1. Install [Obsidian](https://obsidian.md/).
2. **Open folder as vault**, and select this `docs/` folder specifically (not the repo root).
3. Start at [[Home]].

`.obsidian/` (your personal panel layout, theme, plugin toggles) is per-user and gitignored — only commit it if the team deliberately wants to share plugin/theme config.

## Conventions

- Links between notes **inside** this vault use wikilinks: `[[Note Name]]`.
- Links to files **outside** this vault (component READMEs, source code) use plain relative Markdown links, e.g. `[web/backend](../web/backend/)`, since those aren't part of the Obsidian vault root.
- Architecture decisions live in [[Decisions/0001-record-architecture-decisions|Decisions]] as numbered ADRs — one per real decision, never edited after acceptance (superseded by a new ADR instead).
