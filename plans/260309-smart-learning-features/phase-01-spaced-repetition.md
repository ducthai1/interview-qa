# Phase 1: Spaced Repetition (Leitner System)

## Context
Users answer questions but have no systematic way to revisit weak areas. The Leitner system assigns questions to boxes 1-5; correct answers promote, incorrect answers demote to box 1. Review intervals increase exponentially.

## Requirements
- Track `reviewBox` (1-5) and `nextReviewAt` per answered question
- Box intervals: 1=1day, 2=3days, 3=7days, 4=14days, 5=30days
- Correct answer: box +1 (max 5). Incorrect: reset to box 1
- `/review` page showing due questions sorted by urgency (most overdue first)
- Badge on nav showing count of due questions
- Works fully offline

## Architecture

### Data Flow
```
User answers question
  → useProgress.answer() updates answered entry
  → updateReviewBox() sets reviewBox + nextReviewAt in progress.reviews
  → localStorage saves immediately
  → MongoDB syncs in background
```

### Leitner Box Intervals
```ts
const BOX_INTERVALS: Record<number, number> = {
  1: 1 * 24 * 60 * 60 * 1000,   // 1 day
  2: 3 * 24 * 60 * 60 * 1000,   // 3 days
  3: 7 * 24 * 60 * 60 * 1000,   // 7 days
  4: 14 * 24 * 60 * 60 * 1000,  // 14 days
  5: 30 * 24 * 60 * 60 * 1000,  // 30 days
}
```

## Key Files to Create/Modify

### New Files
| File | Purpose |
|------|---------|
| `src/hooks/use-spaced-repetition.ts` | Core hook: getDueQuestions, updateReviewBox, getBoxStats |
| `src/pages/review-page.tsx` | Review page with due questions list |
| `src/utils/spaced-repetition.ts` | Pure functions: calculateNextReview, isDue, sortByUrgency |

### Modified Files
| File | Change |
|------|--------|
| `src/types/question.ts` | Add `ReviewData` interface, add `reviews?` to `UserProgress` |
| `src/utils/local-storage.ts` | Add `updateReviewData()`, preserve reviews in `loadProgress()` |
| `src/utils/progress-api.ts` | Add `syncReviews()` endpoint call |
| `src/hooks/use-progress.ts` | Call `updateReviewBox` inside `answer()` callback |
| `src/components/header.tsx` | Add "Review" nav link with due-count badge |
| `src/App.tsx` | Add `/review` route |
| `src/i18n/en.ts` | Add review section keys |
| `src/i18n/vi.ts` | Add review section keys |
| `server/models/Progress.ts` | Add `reviews` field to schema |
| `server/routes/progress.ts` | Handle reviews in save/load endpoints |

## Implementation Steps

### Step 1: Types + Utility Functions
1. Add `ReviewData` to `src/types/question.ts`
2. Create `src/utils/spaced-repetition.ts`:
   - `calculateNextReview(box: number): number` — returns timestamp
   - `promoteBox(currentBox: number): number` — min(currentBox+1, 5)
   - `getDueQuestions(reviews: Record<string, ReviewData>, now: number): string[]`
   - `sortByUrgency(reviews: Record<string, ReviewData>, questionIds: string[]): string[]`

### Step 2: localStorage Integration
1. Update `loadProgress()` to preserve `reviews` field (backward compat — defaults to `{}`)
2. Add `updateReviewData(questionId: string, correct: boolean): UserProgress`
   - If no review entry exists, create at box 1
   - Correct: promote box, set nextReviewAt
   - Incorrect: reset to box 1, set nextReviewAt to now + 1 day

### Step 3: Hook — `useSpacedRepetition`
```ts
export function useSpacedRepetition(progress: UserProgress, questions: Question[]) {
  const dueQuestions = useMemo(() => {
    const reviews = progress.reviews || {}
    const now = Date.now()
    return getDueQuestions(reviews, now)
      .map(id => questions.find(q => q.id === id))
      .filter(Boolean)
  }, [progress.reviews, questions])

  const boxStats = useMemo(() => /* count per box */, [progress.reviews])

  return { dueQuestions, dueCount: dueQuestions.length, boxStats }
}
```

### Step 4: Integrate with `useProgress.answer()`
- After `localRecordAnswer()`, also call `updateReviewData(questionId, correct)`
- Same fire-and-forget sync pattern for MongoDB

### Step 5: Review Page
- Header: "X questions due for review" with box distribution mini-chart
- Question list using existing `QuestionCard` component
- Filter by box number (tabs: Box 1-5 + All Due)
- Empty state: "All caught up! No reviews due." with next review date

### Step 6: Nav + Routing
- Add to `navLinks` in header: `{ to: '/review', label: t('nav.review') }`
- Show badge with due count (small red dot or number)
- Add `<Route path="/review">` in App.tsx

### Step 7: Server Schema Update
- Add `reviews` Map field to Progress schema (same pattern as `answered`)
- Merge logic in sync: keep entry with latest `lastReviewedAt`

### Step 8: i18n

## i18n Keys Needed

```ts
// EN
review: {
  title: 'Spaced Review',
  dueCount: '{{count}} questions due',
  noDue: 'All caught up! No reviews due.',
  nextReview: 'Next review in {{time}}',
  box: 'Box {{number}}',
  boxLabel: {
    1: 'Learning',
    2: 'Familiar',
    3: 'Comfortable',
    4: 'Confident',
    5: 'Mastered',
  },
  sortByUrgency: 'Most overdue first',
  reviewNow: 'Review Now',
  stats: 'Review Stats',
  totalInSystem: '{{count}} questions in review system',
}

// VI — equivalent translations
```

## Success Criteria
- [ ] Answering a question creates/updates review data in localStorage
- [ ] `/review` page shows only questions where `nextReviewAt <= Date.now()`
- [ ] Correct answer promotes box (1→2→3→4→5), incorrect resets to 1
- [ ] Review intervals match Leitner schedule (1/3/7/14/30 days)
- [ ] Nav shows due-question badge count
- [ ] Data persists across page reloads (localStorage)
- [ ] MongoDB sync works when server available
- [ ] Old users without review data see no errors (backward compat)
- [ ] EN + VI translations complete
