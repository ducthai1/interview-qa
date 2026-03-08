# Code Review Summary

## Scope
- Files reviewed: all ~110 files under `src/` (components, hooks, utils, pages, types, data, i18n)
- Lines of code analyzed: ~51,000
- Review focus: CRITICAL issues — memory leaks, performance, logic bugs, security, React anti-patterns
- Plan: none provided

---

## Overall Assessment

The codebase is generally well-structured. Most patterns are clean and deliberate. However several real issues were found across the five focus areas — most in the **HIGH** bucket. No catastrophic data-loss bugs, but two security concerns and several logic bugs warrant immediate attention.

---

## Critical Issues

### CRITICAL-1 — API Key sent to backend proxy in plaintext (security)
**File:** `src/utils/ai-feedback.ts` — lines 128–135
**Severity:** CRITICAL

The Anthropic call routes through `/api/ai-proxy` and sends the raw user API key in the POST body:
```ts
body: JSON.stringify({ provider: 'anthropic', apiKey, prompt })
```
If the proxy logs requests, or if the transport is ever non-HTTPS, the key is exposed server-side. Even under HTTPS, sending credentials in the body (not a header) is unsafe: server logs, reverse proxies, and error reporting services capture bodies.

**Fix:** Never forward a user-supplied API key to your backend. Either have the user configure it server-side (out of browser), or proxy without re-forwarding the key — the server should hold the credential.

---

### CRITICAL-2 — User ID is a trivially guessable random string, no auth
**File:** `src/utils/progress-api.ts` — lines 6–12
**Severity:** CRITICAL

```ts
id = 'user-' + Math.random().toString(36).slice(2, 10)
```
`Math.random()` is not cryptographically secure and produces an 8-character base-36 string (~42-bit space). Any user can enumerate other users' progress by guessing IDs (only ~2.8 trillion combinations, trivially brutable). The API has no authentication layer.

**Fix:** Use `crypto.randomUUID()` (available in all modern browsers) for the client-side ID and add server-side authentication (even a simple bearer token per user) before the API is exposed.

---

## High Priority Findings

### HIGH-1 — Race condition: async fetch on unmounted component (`useProgress`)
**File:** `src/hooks/use-progress.ts` — lines 27–70
**Severity:** HIGH

`syncFromServer` is a fire-and-forget async function inside `useEffect`. If the component unmounts before the fetch resolves (e.g., fast navigation), `setProgress` and `setSyncing` are called on the unmounted component — React 18 silently discards these, but React 19's `StrictMode` double-invocation makes this reliably reproducible in dev.

```ts
useEffect(() => {
  // No AbortController, no mounted guard
  async function syncFromServer() { ... setProgress(...) }
  syncFromServer()
}, [])
```

**Fix:**
```ts
useEffect(() => {
  let mounted = true
  const controller = new AbortController()
  async function syncFromServer() {
    try {
      const remote = await progressApi.load(controller.signal)
      if (!mounted) return
      // ... setProgress(...)
    } ...
  }
  syncFromServer()
  return () => { mounted = false; controller.abort() }
}, [])
```

---

### HIGH-2 — `setTimeout` callbacks fire on unmounted component (mock interview, review, challenge pages)
**File:** `src/pages/mock-interview-page.tsx` — line 43
**File:** `src/pages/review-page.tsx` — line 41
**File:** `src/pages/challenge-page.tsx` — line 199
**Severity:** HIGH

All three pages auto-advance after an answer with a bare `setTimeout`:
```ts
setTimeout(() => {
  if (currentIdx < mockQuestions.length - 1) {
    setCurrentIdx((i) => i + 1)
  } else {
    setFinished(true)
    timer.pause()
  }
}, 1500)
```
If the user navigates away within the 1.2–1.5 s delay, the callback fires on an unmounted component, calling `setCurrentIdx`, `setFinished`, or `setCorrectIds`. In React 19 these are no-ops but they can still trigger stale-closure errors and unexpected side effects if the component remounts quickly (e.g., StrictMode).

**Fix:** Store the timeout id in a `useRef` and clear it in a cleanup effect, or use a `isMounted` ref guard.

---

### HIGH-3 — Stale closure: `finishChallenge` captures stale `progress` prop
**File:** `src/pages/challenge-page.tsx` — lines 104–136
**Severity:** HIGH

`finishChallenge` is a `useCallback` with `[progress, onSaveChallenge]` in the deps array. But `progress` is a prop passed from `App.tsx` whose reference changes on every answer (because `useProgress` does `setProgress({ ...withReview })`). This causes `finishChallenge` to be recreated on each answer, which in turn causes the `useEffect` at line 139 (deps: `[state]`) to not re-run — but `finishChallenge` referenced inside the interval closure is the one from the most recent render captured by the ref `sessionRef`.

The real hazard: the timer `setInterval` at line 145 closes over `finishChallenge` **at the time the effect runs** (when `state` changes to `'in-progress'`). Subsequent `progress` prop updates cause a new `finishChallenge` to be created, but the interval still holds the stale one. So `isNewBest` is evaluated against a stale `progress.challengeBests`.

**Fix:** Move `isNewBest` evaluation out of `finishChallenge` or use a `progressRef` that stays current:
```ts
const progressRef = useRef(progress)
useEffect(() => { progressRef.current = progress }, [progress])
```
Then inside `finishChallenge` use `progressRef.current` instead of `progress`.

---

### HIGH-4 — Module-level mutable state in `use-question-translation.ts` is shared across all instances
**File:** `src/hooks/use-question-translation.ts` — lines 7–8
**Severity:** HIGH

```ts
let cachedMap: QuestionTranslationMap = {}
let loaded = false
```
These are module-level singletons. In a single-page app this is mostly fine, but:
1. If the language switches from `vi` → `en` → `vi`, `loaded` stays `true` and the map is never refreshed.
2. In tests or SSR, the state persists across test runs.
3. More critically: if `loadQuestionTranslations()` rejects, `loaded` stays `false` but `cachedMap` is still `{}` — the hook will retry on every render that sees `isVi && !loaded`, potentially hammering the import.

**Fix:** Add error state; set `loaded = true` only on success, and guard against concurrent in-flight loads with a `loading` flag.

---

### HIGH-5 — `useTimer` creates a new interval on every render when running
**File:** `src/hooks/use-timer.ts` — lines 9–24
**Severity:** HIGH

The effect depends on both `[isRunning, seconds]`. Every second, `seconds` changes → effect re-runs → old interval cleared → new interval created. This is wasteful (2 × setInterval/clearInterval per second) and fragile: if the cleanup and re-setup race, the timer can skip ticks or fire twice.

```ts
useEffect(() => {
  if (isRunning && seconds > 0) {
    intervalRef.current = setInterval(...)
  }
  return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
}, [isRunning, seconds])  // seconds changes every tick!
```

**Fix:** Remove `seconds` from the dep array (the setState updater form `setSeconds(s => s - 1)` doesn't need `seconds` in scope):
```ts
useEffect(() => {
  if (!isRunning) return
  intervalRef.current = setInterval(() => {
    setSeconds((s) => {
      if (s <= 1) { setIsRunning(false); return 0 }
      return s - 1
    })
  }, 1000)
  return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
}, [isRunning])  // only re-create when isRunning changes
```

---

### HIGH-6 — Module-level mutable `consecutiveCorrect` map in `spaced-repetition.ts`
**File:** `src/utils/spaced-repetition.ts` — line 13
**Severity:** HIGH

```ts
const consecutiveCorrect: Record<string, number> = {}
```
This is keyed by `${currentBox}` (not by question ID). Two different senior/lead questions at the same box level share the same counter. Answering Q1 correctly increments the count for box 3; immediately answering Q2 (also box 3) may trigger an unearned promotion for Q2.

**Fix:** Key by question ID instead of box number (requires passing `questionId` into `getNextReview`).

---

### HIGH-7 — `i18n/index.ts` calls `localStorage` at module evaluation time
**File:** `src/i18n/index.ts` — line 7
**Severity:** HIGH (SSR / test environment breakage)

```ts
const savedLang = localStorage.getItem('fe-interview-lang')
```
This runs synchronously when the module is first imported (before the React tree mounts). In a Node.js/SSR/Vitest environment `localStorage` is undefined → ReferenceError. No try/catch wraps it.

**Fix:**
```ts
const savedLang = (() => {
  try { return typeof localStorage !== 'undefined' ? localStorage.getItem('fe-interview-lang') : null }
  catch { return null }
})()
```

---

## Medium Priority Improvements

### MEDIUM-1 — `setFinished(true)` called during render in `MockInterviewPage`
**File:** `src/pages/mock-interview-page.tsx` — lines 61–63
**Severity:** MEDIUM

```ts
if (timer.seconds === 0 && started && !finished) {
  setFinished(true)  // state update during render!
}
```
Calling a state setter unconditionally in render body is an anti-pattern. In React 19 strict mode this causes an extra render cycle. Should be moved into a `useEffect`.

---

### MEDIUM-2 — No deduplication guard in `getAllQuestions` race
**File:** `src/data/index.ts` — lines 22–27
**Severity:** MEDIUM

```ts
export async function getAllQuestions(): Promise<Question[]> {
  if (allQuestions.length === 0) {
    allQuestions = await loadQuestions()
  }
  return allQuestions
}
```
If two callers invoke `getAllQuestions()` concurrently before the first resolves (possible during HMR), both will call `loadQuestions()` simultaneously — resulting in doubled question arrays and duplicate IDs in state. Use a promise cache:
```ts
let cache: Promise<Question[]> | null = null
export function getAllQuestions() {
  return (cache ??= loadQuestions())
}
```

---

### MEDIUM-3 — Missing `useCallback` on `handleAnswer` in `ReviewPage` and `MockInterviewPage`
**File:** `src/pages/review-page.tsx` — lines 35–43
**File:** `src/pages/mock-interview-page.tsx` — lines 40–51
**Severity:** MEDIUM

`handleAnswer` is redefined on every render and passed as `onAnswer` prop to `QuestionCard`. Since `QuestionCard` is a non-memoized component this doesn't cause extra renders today, but it's a prop-stability issue if `QuestionCard` is ever wrapped with `React.memo`.

---

### MEDIUM-4 — Unsafe type cast when loading progress from localStorage
**File:** `src/utils/local-storage.ts` — line 11
**Severity:** MEDIUM

```ts
if (raw) return JSON.parse(raw)
```
No runtime shape validation. If localStorage contains a corrupt/outdated schema (e.g., `bookmarked` is an object instead of an array from an old version), the app will silently operate on malformed data leading to subtle bugs like `bookmarked.indexOf is not a function`.

---

### MEDIUM-5 — `consecutive correct` keyed by box index is a real correctness bug (duplicate of HIGH-6 detail)
Already covered in HIGH-6.

---

### MEDIUM-6 — `void total // suppress lint` in `finishChallenge`
**File:** `src/pages/challenge-page.tsx` — line 135
**Severity:** MEDIUM (code smell)

`total` is computed but only used via `void total` to suppress an unused-variable lint warning. The variable is vestigial and should be removed.

---

### MEDIUM-7 — `i18n.language` check via inline ternary instead of `t()` in `ai-settings-modal.tsx`
**File:** `src/components/ai-settings-modal.tsx` — lines 111–135, 248
**Severity:** MEDIUM

Multiple strings bypass the i18n system with manual `i18n.language === 'vi' ? '...' : '...'` checks. This is inconsistent with the rest of the app and will break if a third language is added.

---

## Low Priority Suggestions

### LOW-1 — `list key={i}` in hints, suggestions, references
**Files:** `src/components/question-card.tsx` (line 49), `src/components/ai-feedback-button.tsx` (line 54), `src/components/question-card.tsx` (line 343)
Using array index as key is fine for static lists but will cause incorrect reconciliation if the lists are ever reordered. Low risk here since lists are immutable per question.

---

### LOW-2 — `downloadImage` appends/removes anchor to `document.body` without error handling
**File:** `src/utils/share-utils.ts` — lines 25–32
If `URL.createObjectURL` or `a.click()` throws, the anchor remains in the DOM. Wrap in try/finally.

---

### LOW-3 — `escapeValue: false` in i18next config
**File:** `src/i18n/index.ts` — line 17
Disabling HTML escaping globally means any user-controlled string interpolated via `t('key', { value: userInput })` could produce XSS if ever rendered with `dangerouslySetInnerHTML`. Currently the app does not do this, but the global config is a footgun. Should be left as default (`true`) and only disabled per-interpolation where needed.

---

### LOW-4 — Hard-coded English text in `ChallengePage`
**File:** `src/pages/challenge-page.tsx` — lines 363–369
`"Question {x}/{y}"` and `"Finish early"` strings are not passed through `t()`, breaking the Vietnamese locale.

---

### LOW-5 — `question-type-code-output.tsx` label "What will this code output?" is hardcoded English
**File:** `src/components/question-type-code-output.tsx` — line 63
Not using `t()`.

---

## Positive Observations

- Local-first architecture with graceful degradation when the MongoDB API is unavailable — well done.
- `useProgress` callbacks are all `useCallback`-wrapped with stable empty deps — correct.
- `captureCard` in `share-utils.ts` is clean and handles the async blob conversion properly.
- `filterQuestions` and `getRecommendedQuestions` are pure utility functions with no side effects — easy to test.
- `loadProgress` / `saveProgress` both wrap localStorage access in try/catch — good defensive practice.
- Pagination in `PracticePage` correctly clamps `safePage` to `totalPages` to prevent out-of-bounds slices.
- `getNextReview` handles the senior/lead promotion threshold cleanly.
- No `dangerouslySetInnerHTML` usage found anywhere in the codebase — XSS surface is minimal.

---

## Recommended Actions (Priority Order)

1. **[CRITICAL-1]** Stop forwarding user API keys to the backend proxy. Redesign Anthropic integration.
2. **[CRITICAL-2]** Replace `Math.random()` user ID with `crypto.randomUUID()` and add API authentication.
3. **[HIGH-1]** Add AbortController + `mounted` guard to `useProgress` sync effect.
4. **[HIGH-5]** Fix `useTimer` dep array — remove `seconds`, preventing interval churn every tick.
5. **[HIGH-3]** Fix stale `progress` closure in `finishChallenge` via `progressRef`.
6. **[HIGH-6]** Re-key `consecutiveCorrect` by question ID, not box number.
7. **[HIGH-2]** Clear `setTimeout` handles in cleanup effects for auto-advance logic.
8. **[MEDIUM-1]** Move `setFinished(true)` timer-expiry logic into a `useEffect`.
9. **[MEDIUM-2]** Add promise-cache to `getAllQuestions` to prevent concurrent double-load.
10. **[HIGH-4]** Add error state and in-flight guard to `useQuestionTranslation` module-level cache.
11. **[HIGH-7]** Guard `localStorage` access in `i18n/index.ts` against non-browser environments.
12. **[MEDIUM-4]** Add runtime shape validation on `loadProgress` return value.
13. **[LOW-3]** Restore `escapeValue: true` (i18next default) as a defensive measure.
14. **[LOW-4/LOW-5]** Pass remaining hardcoded English strings through `t()`.

---

## Metrics

- Type Coverage: high — types are well-defined; no `any` found in core logic
- Test Coverage: 0% — no test files found in `src/`
- `dangerouslySetInnerHTML` uses: 0
- Bare `setTimeout` without cleanup: 3 (mock-interview, review, challenge pages)
- Module-level mutable singletons with correctness implications: 2 (`consecutiveCorrect`, `cachedMap`/`loaded`)

---

## Unresolved Questions

1. Is the `/api/ai-proxy` backend deployed? If so, does it currently log request bodies (and therefore API keys)?
2. Is `progress-api.ts` exposed on a public URL or only accessed from localhost? No auth means any caller with a known user ID can read/overwrite another user's progress.
3. Are there Vitest/Jest tests planned? The module-level localStorage call in `i18n/index.ts` will immediately break any Node-based test runner.
4. Is `React.memo` planned for `QuestionCard`? If so, the missing `useCallback` wrappers for `handleAnswer` in review/mock pages become HIGH severity.
