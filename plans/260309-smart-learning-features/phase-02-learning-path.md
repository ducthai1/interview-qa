# Phase 2: Learning Path / Roadmap

## Context
Users browse topics freely but lack structured guidance. Learning paths provide curated, ordered sequences of topics with prerequisite gating (60% completion of prior topic to unlock next).

## Requirements
- 4-5 predefined learning paths stored as data files
- Each path = ordered list of topic nodes with prerequisite logic
- `/learning-path` page: path browser + path detail view
- Prerequisite: must complete 60% of topic A before topic B unlocks
- Visual roadmap: connected nodes showing progress
- Track active path(s) in UserProgress

## Architecture

### Path Data Structure
```ts
export interface LearningPath {
  id: string
  name: string           // i18n key
  description: string    // i18n key
  icon: string           // lucide icon name
  difficulty: Difficulty
  estimatedHours: number
  nodes: PathNode[]
}

export interface PathNode {
  topicId: Topic
  requiredCompletion: number  // 0-1, e.g., 0.6 = 60%
  prerequisiteTopics: Topic[] // must meet requiredCompletion on these first
}
```

### Predefined Paths
1. **Junior Frontend** — HTML → CSS → JS Core → Browser/DOM → React Fundamentals → React Hooks
2. **Senior React** — React Fundamentals → React Hooks → React Advanced → State Management → Performance → Testing
3. **Fullstack Frontend** — JS Core → TypeScript → API/Networking → Next.js → System Design FE → Security
4. **CSS Master** — CSS → CSS Styling → Accessibility → Performance → Browser/DOM
5. **Interview Prep** — JS Core → TypeScript → React Fundamentals → Coding Challenges → System Design FE

### Unlock Logic
```ts
function isNodeUnlocked(node: PathNode, topicCompletionMap: Record<Topic, number>): boolean {
  return node.prerequisiteTopics.every(
    prereq => (topicCompletionMap[prereq] || 0) >= node.requiredCompletion
  )
}
```

## Key Files to Create/Modify

### New Files
| File | Purpose |
|------|---------|
| `src/data/learning-paths.ts` | Path definitions (5 paths) |
| `src/pages/learning-path-page.tsx` | Path browser + detail view |
| `src/components/path-roadmap.tsx` | Visual roadmap with connected nodes |
| `src/components/path-card.tsx` | Card for path selection list |
| `src/hooks/use-learning-path.ts` | Compute unlock status, path progress |

### Modified Files
| File | Change |
|------|--------|
| `src/types/question.ts` | Add `LearningPath`, `PathNode` types; add `activePaths?` to UserProgress |
| `src/components/header.tsx` | Add "Paths" nav link |
| `src/App.tsx` | Add `/learning-path` route |
| `src/utils/local-storage.ts` | Persist activePaths |
| `src/i18n/en.ts` | Add learningPath keys |
| `src/i18n/vi.ts` | Add learningPath keys |

## Implementation Steps

### Step 1: Types + Data
1. Add types to `src/types/question.ts`
2. Create `src/data/learning-paths.ts` with 5 path definitions
3. Each node references existing `Topic` IDs from topics.ts

### Step 2: Hook — `useLearningPath`
```ts
export function useLearningPath(progress: UserProgress, questions: Question[]) {
  // Compute completion % per topic
  const topicCompletion = useMemo(() => {
    const map: Record<string, number> = {}
    for (const topic of topics) {
      const topicQs = questions.filter(q => q.topic === topic.id)
      const answered = topicQs.filter(q => progress.answered[q.id]?.correct)
      map[topic.id] = topicQs.length ? answered.length / topicQs.length : 0
    }
    return map
  }, [progress, questions])

  // For each path, compute node unlock status + overall path progress
  const getPathProgress = useCallback((path: LearningPath) => {
    return path.nodes.map(node => ({
      ...node,
      unlocked: isNodeUnlocked(node, topicCompletion),
      completion: topicCompletion[node.topicId] || 0,
    }))
  }, [topicCompletion])

  return { topicCompletion, getPathProgress }
}
```

### Step 3: Path Browser Page
- Grid of `PathCard` components showing: name, difficulty badge, estimated time, overall progress bar
- Click card → detail view (same page, different state or URL param)

### Step 4: Roadmap Visualization (`path-roadmap.tsx`)
- Vertical layout: nodes stacked top-to-bottom
- Each node = rounded card with topic icon, label, completion %, lock/unlock state
- Connecting lines between nodes (simple CSS borders or SVG lines)
- Locked nodes: grayscale + lock icon + "Complete 60% of [prereq] to unlock"
- Completed nodes: green check overlay
- Current node: highlighted border

Implementation approach:
```tsx
// Simple CSS-based vertical roadmap (no heavy lib needed)
<div className="relative flex flex-col items-center gap-0">
  {nodes.map((node, i) => (
    <React.Fragment key={node.topicId}>
      {i > 0 && <div className="h-8 w-0.5 bg-[var(--color-border)]" />}
      <PathNodeCard node={node} unlocked={node.unlocked} completion={node.completion} />
    </React.Fragment>
  ))}
</div>
```

### Step 5: Active Path Tracking
- "Start Path" button saves path ID to `progress.activePaths[]`
- Active paths shown at top of page
- Optional: surface on home page as "Continue your path" card

### Step 6: Nav + Routing
- Add nav link: `{ to: '/learning-path', label: t('nav.learningPath') }`
- Route: `<Route path="/learning-path" element={<LearningPathPage ... />} />`

### Step 7: i18n

## i18n Keys Needed

```ts
learningPath: {
  title: 'Learning Paths',
  subtitle: 'Follow a structured path to master frontend development',
  startPath: 'Start Path',
  continuePath: 'Continue',
  progress: '{{percent}}% complete',
  locked: 'Complete {{percent}}% of {{topic}} to unlock',
  unlocked: 'Ready to start',
  completed: 'Completed',
  estimatedTime: '~{{hours}}h estimated',
  paths: {
    juniorFrontend: { name: 'Junior Frontend', description: 'Build a solid foundation...' },
    seniorReact: { name: 'Senior React', description: 'Deep dive into React...' },
    fullstack: { name: 'Fullstack Frontend', description: 'API to deployment...' },
    cssMaster: { name: 'CSS Master', description: 'Visual design expertise...' },
    interviewPrep: { name: 'Interview Prep', description: 'Focused interview readiness...' },
  },
  activePaths: 'Your Active Paths',
  allPaths: 'All Paths',
  noActivePaths: 'Pick a learning path to get started',
}
```

## Success Criteria
- [ ] 5 learning paths defined with correct topic prerequisites
- [ ] `/learning-path` page shows path cards with progress
- [ ] Clicking path shows visual roadmap with connected nodes
- [ ] Locked nodes display prerequisite requirement (60%)
- [ ] Nodes unlock dynamically as user completes questions
- [ ] Active paths tracked in localStorage
- [ ] Roadmap renders correctly on mobile (responsive)
- [ ] EN + VI translations complete
- [ ] No new dependencies (pure CSS visualization)
