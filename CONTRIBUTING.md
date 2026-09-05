# Contributing Guide

This document defines how we branch, commit, and merge code in this repo. Read it before opening your first PR.

## Branch structure

```
main                              # production — PM + QA approval required
├── web-main                      # web (frontend + backend) integration branch
│   └── web-main/feat/...         # web feature branches
├── mobile-main                   # mobile integration branch
│   └── mobile-main/feat/...      # mobile feature branches
└── firmware-main                 # firmware integration branch
    └── firmware-main/feat/...    # firmware feature branches
```

- **`main`** — always deployable. Nobody pushes here directly; only merges via PR from a team-main branch.
- **`web-main` / `mobile-main` / `firmware-main`** — each team's integration branch. Feature branches merge here first.
- **Feature branches** — where actual work happens. Always branched off the relevant team-main branch, never off `main`.

## Branch naming convention

```
<team>-main/<type>/<short-description>
```

| Part | Options |
|---|---|
| `<team>` | `web`, `mobile`, `firmware` |
| `<type>` | `feat`, `fix`, `chore`, `docs`, `hotfix` |
| `<short-description>` | lowercase, hyphen-separated, no ticket numbers needed |

**Examples:**
```text
web-main/feat/homepage
web-main/fix/navbar-overlap
web-main/feat/user-auth
web-main/fix/login-timeout
mobile-main/feat/ble-pairing
mobile-main/fix/offline-sync-crash
firmware-main/feat/sensor-calibration
firmware-main/chore/update-drivers
```

Don't reuse a branch name after it's been merged and deleted — create a fresh one for follow-up work.

## Commit messages

Keep commits small and descriptive. We use a lightweight [Conventional Commits](https://www.conventionalcommits.org/) style:

```
<type>: <short summary>

feat: add homepage hero section
fix: correct off-by-one error in pagination
docs: update setup instructions
chore: bump dependency versions
```

## Workflow

1. **Branch off your team-main branch**, not `main`.
   ```
   git checkout web-main
   git pull
   git checkout -b web-main/feat/homepage
   ```
2. **Commit your work** in small, logical chunks. Push regularly so your branch is visible to the team.
3. **Open a PR into your team-main branch** (e.g. `web-main/feat/homepage` → `web-main`).
   - Requires **1 teammate approval**
   - Requires CI checks to pass
4. **Once merged into team-main**, and when your team-main branch is ready for release, open a PR from **team-main into `main`**.
   - Requires **PM and QA approval** (enforced via CODEOWNERS)
   - Requires CI checks to pass
   - Requires all review conversations resolved
5. **QA tests before approving** the merge into `main`. Don't approve your own team's PR into main.

## Pull request checklist

Before requesting review, confirm:

- [ ] Branch is up to date with its target branch (rebase or merge in latest changes)
- [ ] Code builds and passes lint/tests locally
- [ ] PR description explains *what* changed and *why*
- [ ] Linked to the relevant issue/task (if applicable)
- [ ] Screenshots or a short clip attached for any UI changes
- [ ] No unrelated files or debug code included

## Code review guidelines

- Review within 24 hours where possible — don't let PRs sit
- Leave specific, actionable comments rather than just "looks good"
- Use "Request changes" for blocking issues, comments for suggestions
- The author resolves conversations after addressing them, not the reviewer

## Local setup

```
git clone <repo-url>
cd <repo-name>
[ install steps go here ]
```

## Reporting bugs / requesting features

Open an issue using the appropriate template under **Issues → New issue**. Include steps to reproduce for bugs, or the problem being solved for feature requests.

---

*Questions about this workflow? Ask in [team channel] or tag the tech lead.*
