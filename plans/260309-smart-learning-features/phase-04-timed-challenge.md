# Phase 4: Timed Challenge Mode

## Context
Mock interview is fixed at 20 questions / 30 minutes. Challenge mode adds configurable presets with scoring that rewards both accuracy and speed. Personal best tracking incentivizes replay.

## Requirements
- `/challenge` page with 3 difficulty presets
- Quick: 10min / 5 questions, Standard: 30min / 15 questions, Hard: 60min / 30 questions
- Countdown timer with visual urgency (color shifts at 25% and 10% remaining)
- Score = accuracy * speed bonus (finishing faster = higher multiplier)
- Results summary: score, accuracy, time, per-topic breakdown
- Personal best tracking per preset in localStorage
- Reuse existing `useTimer` and `QuestionCard`

## Architecture

### Scoring Formula
```ts
function calculateScore(correct: number, total: number, timeUsed: number, timeLimit: number): number {
  const accuracy = correct / total                          // 0-1
  const timeRatio = 1 - (timeUsed / timeLimit)              // 0-1 (higher = faster)
  const speedBonus = 1 + (timeRatio * 0.5)                  // 1.0-1.5x multiplier
  return Math.round(accuracy * speedBonus * 1000)            // 0-1500 max score
}
```

### Presets
```ts
export const CHALLENGE_PRESETS = [
  { id: 'quick',    label: 'challenge.quick',    questions: 5,  timeMinutes: 10, icon: 'Zap' },
  { id: 'standard', label: 'challenge.standard', questions: 15, timeMinutes: 30, icon: 'Target' },
  { id: 'hard',     label: 'challenge.hard',     questions: 30, timeMinutes: 60, icon: 'Flame' },
] as const
```

## Key Files to Create/Modify

### New Files
| File | Purpose |
|------|---------|
| `src/pages/challenge-page.tsx` | Challenge mode: preset selection → quiz → results |
| `src/utils/challenge.ts` | Score calculation, preset definitions |
| `src/components/challenge-timer.tsx` | Enhanced timer with color urgency |
| `src/components/challenge-results.tsx` | Results card with score + breakdown |

### Modified Files
| File | Change |
|------|--------|
| `src/types/question.ts` | Add `ChallengeResult`, `personalBests?`, `challengeHistory?` to UserProgress |
| `src/utils/local-storage.ts` | Add `saveChallengeResult()`, `getPersonalBest()` |
| `src/components/header.tsx` | Add "Challenge" nav link |
| `src/App.tsx` | Add `/challenge` route |
| `src/i18n/en.ts` | Add challenge keys |
| `src/i18n/vi.ts` | Add challenge keys |

## Implementation Steps

### Step 1: Types + Utilities
1. Add `ChallengeResult` type to question.ts
2. Create `src/utils/challenge.ts`:
   - `CHALLENGE_PRESETS` constant
   - `calculateScore(correct, total, timeUsed, timeLimit): number`
   - `isPersonalBest(result: ChallengeResult, current?: ChallengeResult): boolean`

### Step 2: localStorage Functions
```ts
export function saveChallengeResult(presetId: string, result: ChallengeResult): UserProgress {
  const progress = loadProgress()
  // Update history (keep last 20)
  progress.challengeHistory = [...(progress.challengeHistory || []), result].slice(-20)
  // Update personal best
  const currentBest = progress.personalBests?.[presetId]
  if (!currentBest || result.score > currentBest.score) {
    progress.personalBests = { ...progress.personalBests, [presetId]: result }
  }
  saveProgress(progress)
  return progress
}
```

### Step 3: Challenge Timer Component
- Reuse `useTimer` internally but add visual urgency
- Color states:
  - `> 25%` time remaining: normal (var(--color-text))
  - `10-25%` remaining: yellow/warning
  - `< 10%` remaining: red + pulse animation
- Circular progress ring (optional) or colored bar

```tsx
function ChallengeTimer({ seconds, totalSeconds }: Props) {
  const ratio = seconds / totalSeconds
  const urgency = ratio < 0.1 ? 'critical' : ratio < 0.25 ? 'warning' : 'normal'

  return (
    <span className={cn(
      'rounded-lg px-3 py-1 font-mono font-bold text-sm',
      urgency === 'critical' && 'bg-red-100 text-red-600 animate-pulse',
      urgency === 'warning' && 'bg-yellow-100 text-yellow-700',
      urgency === 'normal' && 'bg-[var(--color-bg-secondary)] text-[var(--color-text)]',
    )}>
      {formatted}
    </span>
  )
}
```

### Step 4: Challenge Page — 3 States

**State 1: Preset Selection**
- 3 cards (Quick / Standard / Hard) with icon, question count, time limit
- Show personal best score per preset if exists
- "Start" button on each card

**State 2: In Progress**
- Progress bar (question X of Y) + challenge timer
- QuestionCard (reuse existing)
- Next/Previous buttons
- "Give Up" button (confirms via dialog)

**State 3: Results**
- Big score number with animation
- "New Personal Best!" badge if applicable
- Stats grid: accuracy %, time used, speed bonus multiplier
- Per-topic breakdown (mini bar chart of correct/total per topic)
- "Try Again" and "Back to Presets" buttons

### Step 5: Question Selection
- Use existing `pickRandomQuestions()` from question-filters.ts
- Ensure mix of difficulties appropriate to preset:
  - Quick: junior + mid
  - Standard: mixed all
  - Hard: senior + lead weighted

### Step 6: Nav + Routing
- Nav link: `{ to: '/challenge', label: t('nav.challenge') }`
- Route: `<Route path="/challenge" element={<ChallengePage ... />} />`

### Step 7: i18n

## i18n Keys Needed

```ts
challenge: {
  title: 'Timed Challenge',
  subtitle: 'Test your speed and accuracy',
  quick: 'Quick',
  standard: 'Standard',
  hard: 'Hard',
  questionsCount: '{{count}} questions',
  timeLimit: '{{minutes}} minutes',
  start: 'Start Challenge',
  giveUp: 'Give Up',
  giveUpConfirm: 'Are you sure? Your progress will be lost.',
  score: 'Score',
  newPersonalBest: 'New Personal Best!',
  personalBest: 'Best: {{score}}',
  speedBonus: 'Speed Bonus',
  timeTaken: 'Time Used',
  results: 'Challenge Results',
  tryAgain: 'Try Again',
  backToPresets: 'Choose Another',
  topicBreakdown: 'Topic Breakdown',
}

nav: {
  // add:
  challenge: 'Challenge',
}
```

## Success Criteria
- [ ] 3 preset cards display with correct question count and time
- [ ] Timer counts down with visual urgency at 25% and 10%
- [ ] Score calculated correctly: accuracy * speed bonus * 1000
- [ ] Results page shows score, accuracy, time, topic breakdown
- [ ] Personal best saved and displayed per preset
- [ ] "New Personal Best!" indicator when beaten
- [ ] Challenge history persists in localStorage (last 20)
- [ ] Questions appropriate to preset difficulty
- [ ] Timer reaching 0 auto-finishes challenge
- [ ] EN + VI translations complete
