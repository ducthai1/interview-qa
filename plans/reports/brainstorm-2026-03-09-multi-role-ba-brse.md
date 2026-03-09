# Brainstorm: Multi-Role System (BA + BrSE)
> Date: 2026-03-09 | Status: Approved

## Problem Statement
Current app serves only Frontend role. Need to expand to BA (Business Analyst) and BrSE (Bridge SE) with same feature set, different question data.

## Architecture Decision: Multi-role in Same App ✅
- Single codebase, shared features (practice, mock, flashcard, review, stats, achievements)
- Only data layer differs per role (topics + questions)
- Progress separated per role in localStorage
- BrSE adds Japanese (JP) as 3rd language

## Implementation Plan

### Phase 1: Core Infrastructure
- [ ] Add `Role` type: `'frontend' | 'ba' | 'brse'`
- [ ] Role selector page (replaces current home when no role selected)
- [ ] Refactor `getAllQuestions()` → `getQuestionsByRole(role)`
- [ ] Refactor topics → `getTopicsByRole(role)`
- [ ] Progress keyed by role: `fe-interview-hub-progress-{role}`
- [ ] Header shows current role + switch button
- [ ] Brand: "Interview Hub" (generic)
- [ ] JP i18n file for BrSE

### Phase 2: BA Content (12 topics, ~150+ questions)
Topics: requirements-engineering, user-story-use-case, business-process-bpmn, stakeholder-management, agile-scrum, data-analysis-sql, wireframe-prototype, documentation, domain-knowledge, communication-negotiation, uat-quality, system-integration

### Phase 3: BrSE Content (12 topics, ~150+ questions in JP)
Topics: japanese-business-comm, technical-translation, offshore-process, requirements-spec, project-management, quality-management, japanese-culture, estimation-planning, client-reporting, team-management, system-architecture, risk-management
Default language: Japanese

### Phase 4: Learning Paths + Polish
- BA learning paths (3 tracks)
- BrSE learning paths (3 tracks)
- Role-specific achievements
- Type-check, build, verify

## Cross-role: No
Each role is independent. User selects role → sees only that role's content. Can switch anytime via header.

## Question Target: Max realistic questions per topic (~12-15 per topic)
- BA: ~150-180 questions
- BrSE: ~150-180 questions (JP primary, VI/EN translations)
