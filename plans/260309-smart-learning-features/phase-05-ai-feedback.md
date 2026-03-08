# Phase 5: AI Feedback (Optional Feature)

## Context
For open-ended question types (code-write, debug, system-design), users get binary correct/incorrect but no qualitative feedback. AI review provides scored feedback + improvement suggestions. Works with or without API key.

## Requirements
- Multi-provider: Gemini (free tier), OpenAI, Anthropic
- Settings UI to configure provider + API key (stored in localStorage only)
- "Get AI Review" button on code-write/debug/system-design questions after submitting
- AI gives: score 1-10 + structured feedback + improvement suggestions
- Without API key: fallback to diff-like comparison of user answer vs model answer
- Rate limiting: track daily usage in localStorage (default 15/day for Gemini free)
- API keys never sent to our server — direct browser→AI provider calls

## Architecture

### Provider Abstraction
```ts
interface AIProvider {
  id: string
  name: string
  baseUrl: string
  defaultModel: string
  dailyLimit: number
  requiresKey: boolean
  reviewAnswer(params: ReviewParams): Promise<AIReview>
}

interface ReviewParams {
  question: string
  userAnswer: string
  modelAnswer: string
  questionType: QuestionType
  apiKey: string
}

interface AIReview {
  score: number        // 1-10
  summary: string      // 1-2 sentence overall assessment
  strengths: string[]  // what user did well
  improvements: string[] // what to improve
  correctedCode?: string // for code questions
}
```

### Provider Implementations
```
src/utils/ai-providers/
  index.ts          — provider registry + factory
  gemini.ts         — Google Gemini (generativelanguage.googleapis.com)
  openai.ts         — OpenAI (api.openai.com)
  anthropic.ts      — Anthropic (api.anthropic.com, needs CORS proxy note)
  types.ts          — shared interfaces
```

### Rate Limiting
```ts
const RATE_LIMIT_KEY = 'fe-interview-ai-usage'

function checkRateLimit(provider: string, dailyLimit: number): boolean {
  const data = JSON.parse(localStorage.getItem(RATE_LIMIT_KEY) || '{}')
  const today = new Date().toISOString().slice(0, 10)
  if (data.date !== today) return true // new day, reset
  return (data.count || 0) < dailyLimit
}
```

## Key Files to Create/Modify

### New Files
| File | Purpose |
|------|---------|
| `src/utils/ai-providers/types.ts` | AIProvider, ReviewParams, AIReview interfaces |
| `src/utils/ai-providers/index.ts` | Provider registry, getProvider() |
| `src/utils/ai-providers/gemini.ts` | Gemini API integration |
| `src/utils/ai-providers/openai.ts` | OpenAI API integration |
| `src/utils/ai-providers/anthropic.ts` | Anthropic API integration |
| `src/utils/ai-rate-limit.ts` | Daily usage tracking |
| `src/components/ai-review-button.tsx` | "Get AI Review" button + loading state |
| `src/components/ai-review-result.tsx` | Display AI feedback: score, strengths, improvements |
| `src/components/ai-settings.tsx` | Settings panel (provider picker, API key input) |
| `src/components/answer-diff-view.tsx` | Fallback diff view (no AI key) |
| `src/hooks/use-ai-review.ts` | Hook managing review request lifecycle |

### Modified Files
| File | Change |
|------|--------|
| `src/types/question.ts` | Add `aiSettings?` to UserProgress |
| `src/components/question-type-code-write.tsx` | Add AI review button after submit |
| `src/components/question-type-debug.tsx` | Add AI review button after submit |
| `src/components/question-type-system-design.tsx` | Add AI review button after submit |
| `src/components/header.tsx` | Add settings gear icon (or integrate into existing UI) |
| `src/utils/local-storage.ts` | Add AI settings load/save helpers |
| `src/i18n/en.ts` | Add ai keys |
| `src/i18n/vi.ts` | Add ai keys |

## Implementation Steps

### Step 1: Types + Provider Interfaces
1. Create `src/utils/ai-providers/types.ts` with all interfaces
2. Create provider registry in `index.ts`

### Step 2: Gemini Provider (Primary)
```ts
// Direct REST call to Gemini API
async function reviewWithGemini(params: ReviewParams): Promise<AIReview> {
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${params.apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: buildPrompt(params) }] }],
        generationConfig: { temperature: 0.3, maxOutputTokens: 1024 },
      }),
    }
  )
  // Parse structured response
  return parseAIResponse(await response.json())
}
```

### Step 3: OpenAI + Anthropic Providers
- OpenAI: standard chat completions endpoint, straightforward
- Anthropic: note that direct browser calls hit CORS. Two options:
  - Document that Anthropic requires a CORS proxy or server relay
  - Or: route through our Express backend as optional proxy endpoint
  - Recommendation: add optional `/api/ai-proxy` route to server (simple passthrough)

### Step 4: Prompt Engineering
```ts
function buildPrompt(params: ReviewParams): string {
  return `You are a senior frontend developer reviewing a candidate's answer.

Question: ${params.question}
Question Type: ${params.questionType}
Candidate's Answer:
${params.userAnswer}

Model Answer:
${params.modelAnswer}

Provide a JSON response with:
{
  "score": <1-10>,
  "summary": "<1-2 sentences>",
  "strengths": ["<strength1>", ...],
  "improvements": ["<improvement1>", ...],
  "correctedCode": "<if applicable>"
}

Be constructive and specific. Score 7+ means good understanding, 4-6 means partial, 1-3 means significant gaps.`
}
```

### Step 5: Rate Limiting Utility
- Track in localStorage: `{ date: "2026-03-09", count: 5, provider: "gemini" }`
- Check before each request
- Show remaining uses in UI: "12/15 reviews remaining today"

### Step 6: `useAIReview` Hook
```ts
export function useAIReview() {
  const [loading, setLoading] = useState(false)
  const [review, setReview] = useState<AIReview | null>(null)
  const [error, setError] = useState<string | null>(null)

  const requestReview = useCallback(async (params: Omit<ReviewParams, 'apiKey'>) => {
    const settings = loadAISettings()
    if (!settings?.apiKey) { setError('no-key'); return }
    if (!checkRateLimit(settings.provider, getProvider(settings.provider).dailyLimit)) {
      setError('rate-limited'); return
    }
    setLoading(true)
    try {
      const provider = getProvider(settings.provider)
      const result = await provider.reviewAnswer({ ...params, apiKey: settings.apiKey })
      setReview(result)
      incrementUsage()
    } catch (e) { setError(String(e)) }
    finally { setLoading(false) }
  }, [])

  return { loading, review, error, requestReview, clearReview: () => setReview(null) }
}
```

### Step 7: AI Review Button Component
- Renders after user submits answer on supported question types
- States: idle → loading (spinner) → result / error
- If no API key configured: show "Configure AI" link to settings + fallback diff view

### Step 8: AI Review Result Component
- Score badge (color-coded: green 7+, yellow 4-6, red 1-3)
- Strengths list (green checkmarks)
- Improvements list (yellow arrows)
- Corrected code block (if applicable, using existing CodeBlock component)

### Step 9: Answer Diff View (Fallback)
- Simple side-by-side or inline diff of user answer vs model answer
- Highlight differences with red/green backgrounds
- No external diff library — simple line-by-line comparison

### Step 10: Settings Panel
- Dropdown: select provider (Gemini / OpenAI / Anthropic)
- Password input for API key (with show/hide toggle)
- "Test Connection" button — sends a tiny test prompt
- Note: "API keys stored locally in your browser. Never sent to our server."
- Daily usage counter display
- Access via gear icon in header or separate settings route

### Step 11: i18n

## i18n Keys Needed

```ts
ai: {
  getReview: 'Get AI Review',
  reviewing: 'Analyzing your answer...',
  score: 'Score: {{score}}/10',
  strengths: 'Strengths',
  improvements: 'Areas to Improve',
  correctedCode: 'Suggested Solution',
  noApiKey: 'Configure an AI provider to get feedback',
  configureAI: 'Configure AI',
  rateLimited: 'Daily limit reached ({{used}}/{{limit}})',
  remainingUses: '{{remaining}} reviews remaining today',
  settings: {
    title: 'AI Settings',
    provider: 'AI Provider',
    apiKey: 'API Key',
    apiKeyHint: 'Stored locally. Never sent to our server.',
    testConnection: 'Test Connection',
    testSuccess: 'Connection successful!',
    testFailed: 'Connection failed. Check your API key.',
    geminiNote: 'Free tier: 15 requests/minute',
  },
  fallback: {
    title: 'Answer Comparison',
    yourAnswer: 'Your Answer',
    modelAnswer: 'Model Answer',
  },
}
```

## Security Considerations
- API keys stored ONLY in localStorage, never transmitted to our backend
- Keys rendered as password fields with toggle visibility
- Clear warning text near key input
- No server-side storage of user API keys
- Anthropic CORS: document limitation, optionally provide server proxy

## Success Criteria
- [ ] Settings panel allows selecting provider + entering API key
- [ ] "Get AI Review" button appears on code-write, debug, system-design questions after submit
- [ ] Gemini integration returns structured score + feedback
- [ ] OpenAI integration works with user's key
- [ ] Rate limiting prevents exceeding daily quota
- [ ] Without API key: diff view shows answer comparison
- [ ] Review result displays score badge + strengths + improvements
- [ ] API keys never leave the browser (verify in network tab)
- [ ] Error handling: network failures, invalid keys, malformed responses
- [ ] EN + VI translations complete
