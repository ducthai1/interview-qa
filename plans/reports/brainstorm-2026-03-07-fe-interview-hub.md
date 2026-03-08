# Brainstorm: FE Interview Hub

**Date:** 2026-03-07
**Status:** Brainstorm Complete

---

## Problem Statement

Build open-access interview practice system for Frontend Developers (ReactJS focus). No auth required. Multiple question formats. Large, accurate, up-to-date dataset with clear answers.

## Requirements

- No login/auth — open access
- Multiple formats: MCQ, code challenge, debug, system design, true/false
- Frontend Developer focused (ReactJS core, expandable)
- Large realistic dataset with clear answers & explanations
- Up-to-date with AI era (2024-2026)

## Evaluated Approaches

### A: Static Site + JSON Data (RECOMMENDED)

- **Stack:** React (Vite) + TailwindCSS + Monaco Editor
- **Data:** JSON files, build-time loaded
- **Deploy:** Vercel/Cloudflare Pages (free)
- **Code execution:** Sandboxed iframe or WebContainer API
- **Pros:** Zero backend, zero cost, fast, offline capable, simple
- **Cons:** Code execution needs client-side sandbox

### B: Next.js + Database

- **Stack:** Next.js App Router + Supabase/Turso
- **Pros:** Extensible, API for contributing questions
- **Cons:** Over-engineered for initial scope, hosting cost

### C: Full Static MDX

- **Stack:** Astro/Next.js + MDX per question
- **Pros:** Easy GitHub contributions, SEO
- **Cons:** Slow builds at scale, hard filtering

## Final Recommendation: Approach A

Rationale: KISS principle — no backend, no DB, no auth. JSON data easy to generate & maintain. Free hosting. Fast iteration.

## Topic Structure

| Category | Subtopics |
|---|---|
| JavaScript Core | ES6+, async/await, closures, prototype, event loop |
| TypeScript | Generics, utility types, type narrowing, declaration |
| React Fundamentals | JSX, components, props, state, lifecycle |
| React Hooks | useState, useEffect, useRef, useMemo, custom hooks |
| React Advanced | memo, context, suspense, RSC, React Compiler, concurrent |
| State Management | Redux Toolkit, Zustand, Jotai, signals, TanStack Query |
| Next.js / Frameworks | App Router, SSR, ISR, Server Actions, middleware |
| CSS / Styling | TailwindCSS, CSS Modules, animations, responsive |
| Testing | Vitest, React Testing Library, Playwright, MSW |
| Build Tools | Vite, Turbopack, bundling, tree-shaking |
| Performance | Core Web Vitals, lazy loading, profiling, optimization |
| System Design FE | Micro-frontends, monorepo, design system, component arch |
| AI & Frontend | Vercel AI SDK, LLM integration, streaming UI, prompt in UI |
| Accessibility | ARIA, screen readers, keyboard navigation, semantic HTML |
| Security | XSS, CSRF, CSP, auth patterns, sanitization |

## Question Types

| Type | Format | Example |
|---|---|---|
| `mcq` | 4 options, 1 correct | "useEffect cleanup runs when?" |
| `code-output` | Read code, predict output | Closure + setState snippet |
| `debug` | Find & fix bug | Infinite re-render component |
| `code-write` | Write code in editor | Implement useDebounce hook |
| `system-design` | Open question + model answer | "Design a component library" |
| `true-false` | True/False + explanation | "useMemo always improves perf" -> False |

## Data Schema

```json
{
  "id": "react-hooks-001",
  "topic": "react-hooks",
  "difficulty": "junior|mid|senior|lead",
  "type": "mcq|code-output|debug|code-write|system-design|true-false",
  "question": "...",
  "code": "// optional code snippet",
  "options": ["A", "B", "C", "D"],
  "answer": 2,
  "explanation": "Detailed explanation...",
  "references": ["https://react.dev/..."],
  "tags": ["useEffect", "cleanup"],
  "year": 2026
}
```

## Data Generation Strategy

1. AI-assisted generation (Claude) with structured templates
2. Human review pipeline: AI generate -> format check -> review -> merge
3. Target: 500-1000+ questions across all topics & difficulties
4. Tag by year to track freshness, review periodically

## Key Features (MVP)

- Filter & search by topic, difficulty, type
- Progress tracking via localStorage (done/correct/wrong)
- Random "mock interview" mode (20 questions, 30 min timer)
- Code playground with Monaco Editor + live preview
- Dark/Light mode
- Mobile responsive

## Out of Scope (YAGNI)

- User accounts / authentication
- Backend API
- Leaderboard / social features
- AI grading real-time
- Payment / premium tier

## Risks & Mitigations

| Risk | Mitigation |
|---|---|
| Inaccurate data | Strict review pipeline, include references |
| Outdated questions | Year tags, periodic review cycle |
| Code execution security | Sandboxed iframe, no server execution |
| Large data scale | Lazy load by topic, pagination |

## Success Metrics

- 500+ reviewed questions at launch
- Covers all 15 topic categories
- All questions have explanations + references
- Page load < 2s, interaction < 100ms
- Mobile usable

## Next Steps

1. Init project (Vite + React + TailwindCSS + TypeScript)
2. Design data schema & create sample JSON (10-20 questions)
3. Build core UI: topic selection, question renderer, answer reveal
4. Integrate Monaco Editor for code challenges
5. Generate full dataset (AI + review)
6. Add progress tracking (localStorage)
7. Add mock interview mode
8. Deploy to Vercel/Cloudflare Pages
