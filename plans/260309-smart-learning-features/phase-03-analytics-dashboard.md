# Phase 3: Progress Analytics Dashboard

## Context
Current stats page shows basic counts and per-topic progress bars. Upgrade with rich visualizations: radar chart (strengths), line chart (trend), activity heatmap, weak area recommendations.

## Requirements
- Radar chart: strength/weakness by topic (accuracy per topic)
- Line chart: daily accuracy trend over last 30 days
- Activity heatmap: GitHub-style contribution graph (last 12 weeks)
- "Weak areas" section: topics with lowest accuracy, recommended questions
- Lightweight: use Recharts (~45KB gzipped)
- Keep existing stats at top (total, answered, correct, accuracy)

## Architecture

### Data Derivation
All chart data derived from existing `progress.answered` entries. Each entry has `{ correct, timestamp, attempts }` — timestamp enables time-series analysis.

```ts
// Group answers by date for heatmap + line chart
function groupByDate(answered: Record<string, AnsweredEntry>): Map<string, { total: number; correct: number }> {
  const map = new Map()
  for (const entry of Object.values(answered)) {
    const date = new Date(entry.timestamp).toISOString().slice(0, 10)
    const existing = map.get(date) || { total: 0, correct: 0 }
    existing.total++
    if (entry.correct) existing.correct++
    map.set(date, existing)
  }
  return map
}
```

## Key Files to Create/Modify

### New Files
| File | Purpose |
|------|---------|
| `src/components/charts/radar-chart.tsx` | Topic strength radar using Recharts |
| `src/components/charts/accuracy-trend-chart.tsx` | 30-day line chart |
| `src/components/charts/activity-heatmap.tsx` | GitHub-style heatmap (custom, no Recharts) |
| `src/components/weak-areas.tsx` | Weak topics + recommended questions |
| `src/utils/analytics.ts` | Pure functions for data aggregation |

### Modified Files
| File | Change |
|------|--------|
| `src/pages/stats-page.tsx` | Integrate new chart components below existing stats |
| `src/i18n/en.ts` | Add analytics keys |
| `src/i18n/vi.ts` | Add analytics keys |
| `package.json` | Add recharts dependency |

## Implementation Steps

### Step 1: Install Recharts
```bash
npm install recharts
```

### Step 2: Analytics Utilities (`src/utils/analytics.ts`)
1. `groupAnswersByDate(answered)` — returns daily aggregates
2. `getTopicAccuracy(answered, questions)` — returns `{ topic, accuracy, total, correct }[]`
3. `getDailyTrend(answered, days=30)` — returns `{ date, accuracy, count }[]`
4. `getWeakTopics(answered, questions, threshold=0.6)` — topics below threshold
5. `getActivityData(answered, weeks=12)` — returns grid data for heatmap

### Step 3: Radar Chart (`charts/radar-chart.tsx`)
- Recharts `RadarChart` with `PolarGrid`, `PolarAngleAxis`, `Radar`
- Data: topic accuracy (0-100%) per topic that has at least 1 answer
- Responsive: `ResponsiveContainer` wrapper
- Theme-aware: use CSS variables for colors

```tsx
<ResponsiveContainer width="100%" height={300}>
  <RadarChart data={topicData}>
    <PolarGrid stroke="var(--color-border)" />
    <PolarAngleAxis dataKey="topic" tick={{ fill: 'var(--color-text-secondary)', fontSize: 11 }} />
    <Radar dataKey="accuracy" fill="var(--color-primary)" fillOpacity={0.3} stroke="var(--color-primary)" />
  </RadarChart>
</ResponsiveContainer>
```

### Step 4: Accuracy Trend Line Chart (`charts/accuracy-trend-chart.tsx`)
- Recharts `LineChart` with `Line`, `XAxis`, `YAxis`, `Tooltip`
- X-axis: dates (last 30 days), Y-axis: accuracy %
- Second line (optional): question count per day
- Show "no data" message if fewer than 2 data points

### Step 5: Activity Heatmap (`charts/activity-heatmap.tsx`)
- **Custom component** (no Recharts — heatmaps aren't native to it)
- CSS Grid: 7 rows (days) x 12 columns (weeks)
- Color intensity based on question count: 0=empty, 1-2=light, 3-5=medium, 6+=dark
- Tooltip on hover showing date + count
- Use CSS variables for theme compatibility

```tsx
// Grid approach
<div className="grid grid-rows-7 grid-flow-col gap-1">
  {cells.map(cell => (
    <div
      key={cell.date}
      className="h-3 w-3 rounded-sm"
      style={{ backgroundColor: getHeatColor(cell.count, theme) }}
      title={`${cell.date}: ${cell.count} questions`}
    />
  ))}
</div>
```

### Step 6: Weak Areas Component
- List topics with accuracy < 60% (or lowest 3 topics if all above 60%)
- For each weak topic: show accuracy bar + "Practice" button linking to `/practice?topic=X`
- Suggestion: "Focus on these topics to improve your overall score"

### Step 7: Integrate into Stats Page
Layout order in stats-page.tsx:
1. Existing stat boxes (total, answered, correct, accuracy)
2. Activity heatmap ("Your Activity")
3. Radar chart + Accuracy trend (side by side on desktop, stacked on mobile)
4. Weak areas recommendations
5. Existing per-topic breakdown
6. Existing bookmarks + reset

### Step 8: i18n

## i18n Keys Needed

```ts
analytics: {
  strengths: 'Strengths & Weaknesses',
  accuracyTrend: 'Accuracy Trend (30 days)',
  activity: 'Your Activity',
  weakAreas: 'Areas to Improve',
  weakAreasDesc: 'Focus on these topics to boost your score',
  practiceNow: 'Practice',
  noData: 'Answer more questions to see analytics',
  questionsToday: '{{count}} questions today',
  lessActive: 'Less',
  moreActive: 'More',
}
```

## Success Criteria
- [ ] Radar chart renders with per-topic accuracy data
- [ ] Line chart shows 30-day accuracy trend
- [ ] Heatmap shows 12-week activity grid with color intensity
- [ ] Weak areas section lists topics < 60% accuracy with practice links
- [ ] All charts are responsive (mobile-friendly)
- [ ] Charts respect dark/light theme
- [ ] "No data" states handled gracefully
- [ ] Recharts is the only new dependency
- [ ] EN + VI translations complete
