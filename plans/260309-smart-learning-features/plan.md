# Smart Learning Features - Implementation Plan

## Overview
Six features to transform FE Interview Hub from a static Q&A app into an adaptive learning platform. All features follow the existing local-first architecture (localStorage immediate, MongoDB sync optional).

## Current Architecture Summary
- **Frontend:** React 19 + Vite 7 + TypeScript 5.9 + TailwindCSS v4 + react-router-dom v7
- **State:** `useProgress` hook (local-first + MongoDB sync via `progressApi`)
- **Data:** `UserProgress { answered: Record<qId, {correct, timestamp, attempts}>, bookmarked: string[] }`
- **Server:** Express 5 + Mongoose 9 (Progress, AttemptHistory, GuestUser models)
- **i18n:** i18next with EN + VI translations
- **Icons:** lucide-react
- **20 topics, 26 question data files, 6 question types**

## Phases & Status

| Phase | Feature | New Dependencies | Priority | Status |
|-------|---------|-----------------|----------|--------|
| 1 | Spaced Repetition (Leitner) | none | High | TODO |
| 2 | Learning Path / Roadmap | none | High | TODO |
| 3 | Progress Analytics Dashboard | recharts | Medium | TODO |
| 4 | Timed Challenge Mode | none | Medium | TODO |
| 5 | AI Feedback | none (fetch-based) | Low | TODO |
| 6 | Share Results | html2canvas | Low | TODO |

## Dependency Graph
```
Phase 1 (Spaced Repetition) ─── standalone, extends UserProgress
Phase 2 (Learning Path)     ─── depends on Phase 1 progress data shape
Phase 3 (Analytics)         ─── depends on Phase 1 review data for richer charts
Phase 4 (Timed Challenge)   ─── standalone, reuses useTimer + question-filters
Phase 5 (AI Feedback)       ─── standalone, plugs into QuestionCard
Phase 6 (Share Results)     ─── depends on Phase 3/4 results data
```

**Recommended order:** 1 → 4 → 2 → 3 → 5 → 6 (Phase 4 is independent, do it early while Phase 1 data accumulates)

## Shared Changes (All Phases)

### Type Extensions (`src/types/question.ts`)
```ts
// Extended UserProgress
export interface ReviewData {
  reviewBox: 1 | 2 | 3 | 4 | 5
  nextReviewAt: number // timestamp
  lastReviewedAt: number
}

export interface ChallengeResult {
  presetId: string
  score: number
  accuracy: number
  timeTaken: number
  timestamp: number
}

export interface UserProgress {
  answered: Record<string, { correct: boolean; timestamp: number; attempts: number }>
  bookmarked: string[]
  reviews?: Record<string, ReviewData>           // Phase 1
  activePaths?: string[]                          // Phase 2
  pathProgress?: Record<string, Record<string, number>> // Phase 2
  challengeHistory?: ChallengeResult[]            // Phase 4
  personalBests?: Record<string, ChallengeResult> // Phase 4
  aiSettings?: { provider: string; dailyUsage: number; lastUsageDate: string } // Phase 5
}
```

### Navigation Updates (`src/components/header.tsx`)
Add nav links for: Review, Learning Path, Challenge (3 new items).

### Router Updates (`src/App.tsx`)
Add routes: `/review`, `/learning-path`, `/challenge`

### localStorage Backward Compatibility
All new fields are optional (`?`). Existing data loads without migration. New fields populate on first interaction.

## New Dependencies to Install
```bash
npm install recharts html2canvas
```

## File Naming Conventions (follow existing patterns)
- Pages: `src/pages/{feature}-page.tsx` (kebab-case)
- Hooks: `src/hooks/use-{name}.ts`
- Utils: `src/utils/{name}.ts`
- Data: `src/data/{name}.ts`
- Components: `src/components/{name}.tsx`

## Detailed Phase Plans
- [Phase 1: Spaced Repetition](./phase-01-spaced-repetition.md)
- [Phase 2: Learning Path](./phase-02-learning-path.md)
- [Phase 3: Analytics Dashboard](./phase-03-analytics-dashboard.md)
- [Phase 4: Timed Challenge](./phase-04-timed-challenge.md)
- [Phase 5: AI Feedback](./phase-05-ai-feedback.md)
- [Phase 6: Share Results](./phase-06-share-results.md)
