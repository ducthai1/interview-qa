# FE Interview Hub

Ung dung luyen phong van Frontend voi 220+ cau hoi thuc te, ho tro tieng Viet va tieng Anh.

## Tech Stack

- **Frontend:** React 19 + TypeScript + Vite + TailwindCSS v4
- **Backend:** Express + Mongoose (MongoDB)
- **i18n:** react-i18next (EN/VI)
- **Charts:** Recharts
- **Storage:** localStorage-first, MongoDB sync

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server (frontend)
npm run dev

# Run backend (optional, for MongoDB sync)
npm run server
```

## Features

| Feature | Route | Description |
|---------|-------|-------------|
| Home | `/` | Topic overview, progress summary |
| Practice | `/practice` | Filter & practice questions by topic/difficulty/type |
| Review | `/review` | Spaced repetition (Leitner system, 5 boxes) |
| Mock Interview | `/mock-interview` | Timed mock interview with random questions |
| Challenge | `/challenge` | 3 presets (Quick/Standard/Hard), scoring, personal bests |
| Learning Paths | `/learning-path` | 5 structured roadmaps with step-by-step unlocking |
| Stats | `/stats` | Radar chart, accuracy trend, activity heatmap, weak areas |

### Additional Features

- **AI Feedback** (optional) — Gemini/OpenAI/Anthropic review for code-write/debug/system-design questions. Configure via Settings icon in header.
- **Share Results** — Copy to clipboard, download PNG, or native share from Stats/Mock/Challenge pages.
- **Retry/Redo** — Redo any answered question to practice multiple times.
- **Correct/Incorrect Feedback** — Visual indicators for all question types after answering.
- **Bookmarks** — Save questions for later review.
- **Bilingual** — Full EN/VI support with language switcher.

## Question Types

- Multiple Choice (MCQ)
- Code Output (predict the output)
- True/False
- Debug (fix the bug)
- Code Writing
- System Design

## Project Structure

```
src/
  components/        # Reusable UI components
    charts/          # Recharts wrappers (radar, trend, heatmap)
  pages/             # Route pages (home, practice, review, stats, challenge, learning-path, mock)
  hooks/             # Custom React hooks (progress, theme, timer, spaced-repetition, learning-path)
  utils/             # Utility functions (localStorage, analytics, AI, sharing, scoring)
  data/              # 26 question data files (220+ questions) + learning path definitions
  types/             # TypeScript type definitions
  i18n/              # EN/VI translations
server/
  models/            # Mongoose models (Progress, AttemptHistory, GuestUser)
  routes/            # Express API routes
plans/               # Implementation plans & reports
docs/                # Project documentation
```

---

## Claude Code AI Toolkit (`.claude/`)

This project includes a comprehensive **Claude Code AI Toolkit** — a boilerplate from [claude-prompt-template](https://github.com/AIHOPEE/claude-prompt-template) (v1.20.1) that enhances AI-assisted development with Claude Code CLI.

### Overview

```
.claude/
  agents/            # 17 specialized AI agents
  skills/            # 39 domain-specific skill modules
  commands/          # 27 slash commands
  workflows/         # 4 workflow definitions
  hooks/             # 7 automation hooks
  settings.json      # Hook & statusline configuration
  metadata.json      # Template metadata
  .ck.json           # Plan naming & project config
  statusline.*       # Terminal status line scripts (cjs/sh/ps1)
```

### Agents (`.claude/agents/`) — 17 Specialized Agents

Agents are autonomous sub-processes that handle complex tasks. The main agent delegates work to them for parallel or sequential execution.

| Agent | File | Purpose |
|-------|------|---------|
| **Brainstormer** | `brainstormer.md` | Solution brainstorming, technical trade-off analysis |
| **Code Reviewer** | `code-reviewer.md` | Code quality, security, performance assessment |
| **Debugger** | `debugger.md` | Issue investigation, log analysis, diagnostics |
| **Tester** | `tester.md` | Test execution, coverage analysis, validation |
| **Planner** | `planner.md` | Research, architecture design, implementation planning |
| **Fullstack Developer** | `fullstack-developer.md` | Full-stack implementation from plans |
| **UI/UX Designer** | `ui-ux-designer.md` | Interface design, wireframes, design systems |
| **Researcher** | `researcher.md` | Technical research, documentation gathering |
| **Project Manager** | `project-manager.md` | Progress tracking, task coordination, status reports |
| **Docs Manager** | `docs-manager.md` | Documentation creation, maintenance, standards |
| **Git Manager** | `git-manager.md` | Git operations, conventional commits, PR management |
| **Database Admin** | `database-admin.md` | DB optimization, migrations, query tuning |
| **Scout** | `scout.md` | Fast codebase file search & discovery |
| **Scout External** | `scout-external.md` | Codebase search via external tools (Gemini, etc.) |
| **Copywriter** | `copywriter.md` | Marketing copy, social media, landing pages |
| **Journal Writer** | `journal-writer.md` | Technical difficulty & incident documentation |
| **MCP Manager** | `mcp-manager.md` | MCP server integration & tool discovery |

### Skills (`.claude/skills/`) — 39 Skill Modules

Skills provide specialized domain knowledge that agents can activate on-demand.

| Category | Skills |
|----------|--------|
| **Frontend** | `frontend-design`, `frontend-design-pro`, `frontend-development`, `ui-styling`, `ui-ux-pro-max` |
| **Backend** | `backend-development`, `web-frameworks`, `databases` |
| **AI & Media** | `ai-multimodal`, `media-processing`, `google-adk-python` |
| **DevOps** | `devops`, `chrome-devtools` |
| **Mobile** | `mobile-development` |
| **3D/Graphics** | `threejs` |
| **Integrations** | `payment-integration`, `shopify`, `better-auth` |
| **MCP** | `mcp-builder`, `mcp-management` |
| **Process** | `planning`, `problem-solving`, `sequential-thinking`, `research`, `code-review`, `debugging` |
| **Documentation** | `docs-seeker`, `document-skills`, `repomix` |
| **Meta** | `claude-code`, `skill-creator`, `template-skill`, `common` |

### Commands (`.claude/commands/`) — 27 Slash Commands

Slash commands are shortcuts that trigger specific workflows. Use them by typing `/<command>` in Claude Code.

| Command | File | What it does |
|---------|------|-------------|
| `/cook` | `cook/`, `cook.md` | **End-to-end**: plan + implement + test + review + deploy |
| `/brainstorm` | `brainstorm.md` | Explore solutions, debate trade-offs, pick best approach |
| `/plan` | `plan/`, `plan.md` | Create structured implementation plans with phases |
| `/code` | `code/`, `code.md` | Implement from an existing plan |
| `/fix` | `fix/`, `fix.md` | Debug and fix issues |
| `/review` | `review/` | Run code review on recent changes |
| `/test` | `test.md` | Execute tests and validate |
| `/debug` | `debug.md` | Deep investigation of issues |
| `/scout` | `scout/`, `scout.md` | Search codebase for relevant files |
| `/design` | `design/` | UI/UX design work |
| `/docs` | `docs/` | Documentation management |
| `/git` | `git/` | Git operations (commit, push, PR) |
| `/content` | `content/` | Content creation |
| `/integrate` | `integrate/` | Integration tasks |
| `/skill` | `skill/` | Manage and activate skills |
| `/bootstrap` | `bootstrap/`, `bootstrap.md` | Project bootstrapping |
| `/ask` | `ask.md` | Ask clarifying questions |
| `/journal` | `journal.md` | Document technical difficulties |
| `/use-mcp` | `use-mcp.md` | Work with MCP servers |
| `/ck-help` | `ck-help.md` | Help with Claude Kit usage |
| `/watzup` | `watzup.md` | Project status check |

### Workflows (`.claude/workflows/`) — 4 Workflow Definitions

Workflows define how agents collaborate and what rules they follow.

| Workflow | File | Purpose |
|----------|------|---------|
| **Primary Workflow** | `primary-workflow.md` | Main dev cycle: Plan → Implement → Test → Review → Document |
| **Development Rules** | `development-rules.md` | YAGNI/KISS/DRY principles, file naming (kebab-case), max 200 lines/file, code quality standards |
| **Orchestration Protocol** | `orchestration-protocol.md` | How to chain agents sequentially or run them in parallel without conflicts |
| **Documentation Management** | `documentation-management.md` | When and how to update roadmap, changelog, architecture docs |

### Hooks (`.claude/hooks/`) — 7 Automation Hooks

Hooks run automatically at specific lifecycle events.

| Hook | File | Trigger | Purpose |
|------|------|---------|---------|
| **Session Init** | `session-init.cjs` | `SessionStart` | Inject env vars, detect project type, set date format |
| **Subagent Init** | `subagent-init.cjs` | `SubagentStart` | Initialize context for spawned agents |
| **Dev Rules Reminder** | `dev-rules-reminder.cjs` | `UserPromptSubmit` | Remind AI of development rules on every prompt |
| **Scout Block** | `scout-block.cjs` | `PreToolUse` (Bash/Glob/Grep/Read/Edit/Write) | Guard file operations during scout mode |
| **Notifications** | `notifications/` | Various | Desktop notifications for agent completion |
| **Tests** | `tests/` | Pre-commit | Run validation before commits |
| **Lib** | `lib/` | Shared | Utility functions used by other hooks |

### Configuration Files

| File | Purpose |
|------|---------|
| `.ck.json` | Plan naming format (`YYMMDD-HHmm-{issue}-{slug}`), paths, locale, trust settings |
| `settings.json` | Hook definitions, statusline command, co-author settings |
| `settings.local.json` | Local overrides (gitignored) |
| `metadata.json` | Template version (v1.20.1), source repo info |
| `statusline.*` | Terminal status line showing current plan, branch, agent status |

---

## License

Private project.
