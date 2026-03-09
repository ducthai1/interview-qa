# Brainstorm: Multi-Role System (BA + BrSE)
> Date: 2026-03-09 | Status: In Progress

## Problem Statement
Current app serves only Frontend role. Need to expand to BA (Business Analyst) and BrSE (Bridge SE) with same feature set, different question data.

## Architecture Decision: Multi-role in Same App ✅
- Single codebase, shared features (practice, mock, flashcard, review, stats, achievements)
- Only data layer differs per role (topics + questions)
- Progress separated per role in localStorage
- BrSE adds Japanese (JP) as 3rd language

## Implementation Plan

### Phase 1: Core Infrastructure ✅ COMPLETED (2026-03-09)
- [x] Add `Role` type: `'frontend' | 'ba' | 'brse'` → `src/types/question.ts`
- [x] Role selector page → `src/pages/role-selector-page.tsx`
- [x] `useRole` hook → `src/hooks/use-role.ts`
- [x] Refactor `getAllQuestions()` → `getQuestionsByRole(role)` → `src/data/index.ts`
- [x] Refactor topics → `getTopicsByRole(role)` → `src/data/index.ts`
- [x] BA topic definitions (12 topics) → `src/data/ba/topics.ts`
- [x] BrSE topic definitions (12 topics, JP labels) → `src/data/brse/topics.ts`
- [x] Progress keyed by role: `interview-hub-progress-${role}` → `src/utils/local-storage.ts`
- [x] `useProgress` accepts role param → `src/hooks/use-progress.ts`
- [x] App.tsx role flow: selector → main app, auto-JP for BrSE → `src/App.tsx`
- [x] Header: role badge + switch button + 3-lang cycle (EN/VI/JP) → `src/components/header.tsx`
- [x] JP i18n complete translation → `src/i18n/jp.ts` + registered in `src/i18n/index.ts`
- [x] EN/VI i18n updated with roleSelect keys
- [x] Type-check + build pass ✅
- [x] Committed & pushed: `ebd48d2`

### Phase 2: BA Content (12 topics, ~150+ questions) ⏳ TODO
- [ ] Create question files in `src/data/ba/questions-*.ts`
Topics: requirements-engineering, user-story-use-case, business-process-bpmn, stakeholder-management, agile-scrum, data-analysis-sql, wireframe-prototype, documentation, domain-knowledge, communication-negotiation, uat-quality, system-integration

### Phase 3: BrSE Content (12 topics, ~150+ questions in JP) ⏳ TODO
- [ ] Create question files in `src/data/brse/questions-*.ts`
Topics: japanese-business-comm, technical-translation, offshore-process, requirements-spec, project-management, quality-management, japanese-culture, estimation-planning, client-reporting, team-management, system-architecture, risk-management
Default language: Japanese

### Phase 4: Learning Paths + Polish ⏳ TODO
- [ ] BA learning paths (3 tracks)
- [ ] BrSE learning paths (3 tracks)
- [ ] Role-specific achievements
- [ ] Type-check, build, verify

## Cross-role: No
Each role is independent. User selects role → sees only that role's content. Can switch anytime via header.

## Question Target: Max realistic questions per topic (~12-15 per topic)
- BA: ~150-180 questions
- BrSE: ~150-180 questions (JP primary, VI/EN translations)
