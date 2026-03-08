import type { Question } from '../types'

export const architecturePracticalQuestions: Question[] = [
  // ─── SYSTEM-DESIGN-FE (15 questions) ───────────────────────────────
  {
    id: 'ap-001',
    topic: 'system-design-fe',
    difficulty: 'senior',
    type: 'system-design',
    question:
      'Design a real-time collaborative document editor like Google Docs. What is your frontend architecture?',
    options: [
      'Use a simple textarea with WebSocket to broadcast keystrokes to all users',
      'Use a CRDT library (e.g., Yjs or Automerge) for conflict-free merging, a rich-text editor (ProseMirror/TipTap) for the editing surface, WebSocket transport for real-time sync, awareness protocol for cursors/selections, and an operational log for undo/redo per user.',
      'Use Firebase Realtime Database and let it handle everything',
      'Lock the document so only one user can edit at a time, queue others',
    ],
    answer: 1,
    explanation:
      'Collaborative editing requires: (1) Conflict resolution — CRDTs (Yjs, Automerge) or OT (Operational Transform). CRDTs are preferred in 2025 because they work peer-to-peer and offline. (2) Editor framework — ProseMirror or Slate gives a structured document model that maps to CRDT operations. (3) Transport — WebSocket connection with reconnection logic, message batching, and binary encoding (Yjs uses efficient binary sync protocol). (4) Awareness — cursor positions, selection ranges, user presence via a lightweight awareness protocol. (5) Persistence — periodic snapshots to server, with the CRDT update log for history. (6) Undo/redo — must be per-user, not global, handled by the CRDT library\'s undo manager.',
    tags: ['collaboration', 'crdt', 'real-time', 'prosemirror', 'websocket'],
    year: 2025,
  },
  {
    id: 'ap-002',
    topic: 'system-design-fe',
    difficulty: 'lead',
    type: 'system-design',
    question:
      'Your e-commerce site needs to handle Black Friday traffic (100x normal load). What is your frontend optimization strategy?',
    options: [
      'Just upgrade the server to handle more traffic',
      'Multi-layer strategy: (1) Pre-render product pages with SSG/ISR, serve from CDN edge. (2) Implement stale-while-revalidate caching for inventory/prices. (3) Use service workers for offline catalog browsing. (4) Code-split aggressively — defer non-critical JS (reviews, recommendations). (5) Implement client-side request queuing for add-to-cart to prevent thundering herd. (6) Feature-flag non-essential features to shed load.',
      'Put everything behind Cloudflare and hope for the best',
      'Disable the site and redirect to a static "coming soon" page during peak hours',
    ],
    answer: 1,
    explanation:
      'Black Friday optimization is multi-layered: CDN/Edge — serve static assets and pre-rendered pages from edge, reducing origin load by 90%+. Caching — HTTP cache headers (Cache-Control: stale-while-revalidate) let browsers show cached content while fetching fresh data. Code splitting — only load checkout JS when user initiates purchase. Request management — debounce/queue add-to-cart clicks, use optimistic UI. Load shedding — feature flags to disable recommendation engine, chat widget, analytics under load. Graceful degradation — if inventory API is slow, show "check availability" button instead of blocking render.',
    tags: ['performance', 'caching', 'cdn', 'load-shedding', 'e-commerce'],
    year: 2025,
  },
  {
    id: 'ap-003',
    topic: 'system-design-fe',
    difficulty: 'lead',
    type: 'system-design',
    question:
      'Design a micro-frontend architecture for a large team of 50+ developers working on the same product. How do you split ownership, deploy independently, and avoid chaos?',
    options: [
      'Use git branches per team and merge weekly',
      'Module Federation shell: (1) Shell app owns layout, routing, auth, and shared design system. (2) Each domain team owns a remote MFE (catalog, checkout, account, admin). (3) Shared dependencies (React, design tokens) loaded as singletons to avoid duplication. (4) Communication via custom events and URL state — no shared mutable stores. (5) Independent CI/CD per MFE with contract tests. (6) Versioned shared library with automated upgrade PRs.',
      'Put everyone in one monolith with strict code ownership files',
      'Give each team their own Next.js app with separate domains',
    ],
    answer: 1,
    explanation:
      'At 50+ developers, micro-frontends solve coordination problems: (1) Team autonomy — each team deploys their MFE independently, no release trains. (2) Module Federation (Webpack 5 / Rspack) loads remotes at runtime, so shell doesn\'t need to rebuild. (3) Shared deps — React, router, design tokens exposed as singletons from shell to avoid version conflicts and bundle bloat. (4) Communication — custom events (loosely coupled), URL params for cross-MFE state. Avoid shared Redux — it creates hidden coupling. (5) Contract testing — each MFE exposes a typed interface; breaking changes caught in CI. (6) Governance — architecture team maintains shell, shared libs, and integration tests.',
    tags: ['micro-frontends', 'module-federation', 'team-scaling', 'architecture'],
    year: 2025,
  },
  {
    id: 'ap-004',
    topic: 'system-design-fe',
    difficulty: 'senior',
    type: 'system-design',
    question:
      'Implement a feature flags system that allows A/B testing without redeploying. How do you architect the frontend integration?',
    options: [
      'Use environment variables and redeploy for each experiment',
      'Feature flag service (LaunchDarkly/Unleash/custom): (1) SDK fetches flags at app init via SSE/polling. (2) React context provider exposes useFlag() hook. (3) Flags cached in localStorage with TTL for offline/fast startup. (4) Server-side evaluation for SSR pages. (5) Bucketing logic uses consistent hashing on userId for stable assignment. (6) Analytics events tagged with flag variants for experiment analysis.',
      'Use query parameters like ?feature=new-checkout for testing',
      'Store all flag values in a JSON file in the repo and toggle via PR',
    ],
    answer: 1,
    explanation:
      'Feature flag architecture: (1) Transport — Server-Sent Events for real-time flag updates, or polling with short intervals. Initial flags can be embedded in SSR HTML to avoid flash. (2) React integration — FeatureFlagProvider wraps app, useFlag("new-checkout") returns variant. (3) Stable bucketing — hash(userId + flagKey) % 100 gives consistent percentage rollout. User always sees same variant. (4) SSR — evaluate flags server-side to avoid hydration mismatch. (5) Analytics — every render/action tagged with active flag variants enables A/B analysis. (6) Cleanup — dead flag detection via code scanning, removal PRs auto-generated.',
    tags: ['feature-flags', 'a-b-testing', 'architecture', 'experimentation'],
    year: 2025,
  },
  {
    id: 'ap-005',
    topic: 'system-design-fe',
    difficulty: 'senior',
    type: 'system-design',
    question:
      'Design a notification system that handles toast messages, push notifications, and an in-app inbox. How do you architect the frontend?',
    options: [
      'Use alert() for critical notifications and a simple div for toasts',
      'Layered notification architecture: (1) Notification service layer receives events from WebSocket, SSE, or polling. (2) Categorizer routes to correct channel: toasts (ephemeral, auto-dismiss), push (Service Worker + Notification API), in-app inbox (persisted, paginated). (3) Toast manager with queue, stacking, priority, and deduplication. (4) Inbox component with read/unread state, infinite scroll, and real-time badge count. (5) Preference system lets users mute channels per notification type.',
      'Just use browser Notification API for everything',
      'Use a third-party toast library and build nothing custom',
    ],
    answer: 1,
    explanation:
      'Notification system layers: (1) Transport — WebSocket for real-time, with SSE fallback. Reconnection with exponential backoff. (2) NotificationService singleton — receives all notifications, normalizes shape, routes by type. (3) Toast subsystem — queue with max visible (3-5), priority (error > warning > info), deduplication by content hash, configurable auto-dismiss timers, action buttons. (4) Push — Service Worker registration, permission management, fallback to in-app if denied. (5) Inbox — REST API for paginated history, WebSocket for new items, optimistic read/unread toggling. (6) State — notification preferences synced to backend, local override cache.',
    tags: ['notifications', 'websocket', 'service-worker', 'architecture'],
    year: 2025,
  },
  {
    id: 'ap-006',
    topic: 'system-design-fe',
    difficulty: 'lead',
    type: 'system-design',
    question:
      'Your app needs to work offline and sync when back online. Design the offline-first sync strategy for a task management app.',
    options: [
      'Disable the app when offline and show a "no connection" screen',
      'Offline-first architecture: (1) Local-first storage with IndexedDB (via Dexie.js or RxDB). (2) Optimistic writes — all mutations applied locally first, queued for sync. (3) Conflict resolution using last-write-wins with vector clocks or CRDT-based merging. (4) Background sync via Service Worker + SyncManager API. (5) Sync queue with retry and exponential backoff. (6) UI indicators showing sync status (synced/pending/conflict).',
      'Cache everything in localStorage and upload on reconnect',
      'Use Firebase offline persistence and let it handle everything',
    ],
    answer: 1,
    explanation:
      'Offline-first sync: (1) Storage — IndexedDB for structured data (tasks, projects), Cache API for assets. localStorage is too small and synchronous. (2) Write path — mutations go to local DB immediately, added to outbox queue with timestamps and operation type. (3) Sync — on reconnect, flush outbox in order. Server returns conflicts. (4) Conflict resolution — for simple apps, last-write-wins with timestamps. For collaborative apps, use CRDTs or operational transform. Show conflict UI for irreconcilable changes. (5) Background sync — Service Worker SyncManager fires sync event when connectivity returns, even if app is closed. (6) Versioning — each record has a version vector; server rejects stale writes and returns current state for client merge.',
    tags: ['offline-first', 'sync', 'indexeddb', 'service-worker', 'crdt'],
    year: 2025,
  },
  {
    id: 'ap-007',
    topic: 'system-design-fe',
    difficulty: 'senior',
    type: 'system-design',
    question:
      'Design an internationalization (i18n) system for a large app with 20+ languages and RTL support. How do you handle translations, formatting, and layout?',
    options: [
      'Use Google Translate API on the fly for each string',
      'i18n architecture: (1) ICU MessageFormat for pluralization, gender, and interpolation. (2) Namespace-based translation files loaded per route via dynamic import. (3) RTL support using CSS logical properties (margin-inline-start, not margin-left). (4) Locale-aware formatting via Intl API for dates, numbers, currency. (5) Translation management via integration with Crowdin/Phrase. (6) Pseudo-localization in dev to catch hardcoded strings and layout overflow.',
      'Put all translations in one big JSON file and load it at startup',
      'Use Google Sheets as the translation database and fetch at runtime',
    ],
    answer: 1,
    explanation:
      'i18n at scale: (1) Message format — ICU handles complex cases: "{count, plural, one {# item} other {# items}}". Libraries: react-intl, next-intl, or i18next. (2) Code splitting translations — load only current locale + current route namespace. Lazy-load others on navigation. (3) RTL — CSS logical properties (start/end vs left/right) make layouts work in both directions. dir="rtl" attribute on html. (4) Formatting — never manually format dates/numbers. Use Intl.DateTimeFormat, Intl.NumberFormat with locale. (5) CI integration — missing translation detection in CI, translation PR automation. (6) Pseudo-localization — replaces strings with accented variants (e.g., "Héĺĺö") to visually spot untranslated strings and test for text expansion.',
    tags: ['i18n', 'rtl', 'localization', 'intl-api', 'architecture'],
    year: 2025,
  },
  {
    id: 'ap-008',
    topic: 'system-design-fe',
    difficulty: 'mid',
    type: 'system-design',
    question:
      'Your dashboard loads 12 widgets, each making its own API call. Initial load takes 8 seconds. How do you optimize?',
    options: [
      'Make all 12 API calls in parallel using Promise.all',
      'Prioritized loading strategy: (1) Identify above-the-fold widgets, fetch those first. (2) Use a BFF (Backend For Frontend) to aggregate multiple API calls into one. (3) Skeleton screens with streaming SSR for perceived performance. (4) Stale-while-revalidate — show cached data instantly, refresh in background. (5) Virtualize off-screen widgets, defer their data fetching. (6) WebSocket for widgets needing real-time updates instead of polling.',
      'Load all widgets on the server with SSR',
      'Paginate the dashboard so users only see 4 widgets at a time',
    ],
    answer: 1,
    explanation:
      'Dashboard optimization is layered: (1) Network — BFF endpoint that aggregates data reduces round trips from 12 to 1-2. (2) Priority — critical widgets (KPIs, revenue) load first; recommendations and activity feed deferred. (3) Caching — TanStack Query with staleTime shows cached data instantly. HTTP Cache-Control headers enable browser cache. (4) Rendering — Suspense boundaries per widget with skeleton fallbacks. Stream SSR if using Next.js/Remix. (5) Virtualization — off-screen widgets rendered only when scrolled into view with IntersectionObserver. (6) This typically reduces perceived load to under 2 seconds.',
    tags: ['dashboard', 'performance', 'bff', 'caching', 'suspense'],
    year: 2025,
  },
  {
    id: 'ap-009',
    topic: 'system-design-fe',
    difficulty: 'mid',
    type: 'mcq',
    question:
      'You need to build a complex drag-and-drop Kanban board with columns and cards that can be reordered. Which approach gives the best UX and maintainability?',
    options: [
      'Use native HTML5 Drag and Drop API directly',
      'Use dnd-kit library: (1) SortableContext per column for card reordering. (2) DndContext with collision detection for cross-column moves. (3) DragOverlay for smooth drag preview without layout shift. (4) Optimistic reorder in local state, sync to server on drop. (5) Keyboard support for accessibility via KeyboardSensor.',
      'Use CSS position: absolute and track mouse events manually',
      'Use a Canvas-based rendering engine for the entire board',
    ],
    answer: 1,
    explanation:
      'Drag-and-drop in 2025: dnd-kit is the successor to react-beautiful-dnd (now unmaintained). Key decisions: (1) Library — dnd-kit provides sensors (pointer, keyboard, touch), collision algorithms, and sortable primitives. (2) State — maintain column/card order in state, apply optimistic updates on drag end, reconcile with server response. (3) Performance — DragOverlay renders outside the sortable tree, preventing expensive re-renders during drag. (4) Accessibility — keyboard sensor enables Tab to focus, Space to pick up, Arrow keys to move, Space to drop. (5) Native HTML5 DnD has poor mobile support, no drag preview customization, and inconsistent browser behavior.',
    tags: ['drag-and-drop', 'dnd-kit', 'kanban', 'accessibility'],
    year: 2025,
  },
  {
    id: 'ap-010',
    topic: 'system-design-fe',
    difficulty: 'senior',
    type: 'mcq',
    question:
      'Your team is building a component library. What is the most effective way to develop and document components in isolation?',
    options: [
      'Build components directly in the app and test manually',
      'Use Storybook: create stories for each component variant, add controls for props, write interaction tests with play functions, generate visual regression snapshots, and publish as a static site for design review.',
      'Write a separate React app just for testing components',
      'Use console.log to test components and write documentation in a Google Doc',
    ],
    answer: 1,
    explanation:
      'Storybook is the industry standard for component development: (1) Stories — each variant of a component is a story (primary button, disabled button, loading button). (2) Controls — auto-generate prop controls from TypeScript types via autodocs. (3) Testing — play functions simulate user interactions for integration tests. (4) Visual regression — Chromatic or Percy capture screenshots to detect unintended visual changes. (5) Documentation — MDX pages combine Markdown with live component demos. (6) Design review — publish as a static site for designers to review without running the app.',
    tags: ['storybook', 'component-library', 'documentation', 'testing'],
    year: 2025,
  },
  {
    id: 'ap-011',
    topic: 'system-design-fe',
    difficulty: 'mid',
    type: 'system-design',
    question:
      'Design a frontend error monitoring and observability strategy. How do you catch, report, and triage errors in production?',
    options: [
      'Use try-catch around everything and log to console',
      'Observability stack: (1) Error boundary components catch React render errors with fallback UI. (2) Global handlers for unhandledrejection and onerror. (3) Sentry/Datadog SDK with source maps for readable stack traces. (4) Custom context (user ID, route, feature flags) attached to every error. (5) Performance monitoring with Web Vitals (LCP, INP, CLS). (6) Alert rules for error rate spikes tied to deployments.',
      'Check the browser console in production manually',
      'Ask users to report bugs via a feedback form',
    ],
    answer: 1,
    explanation:
      'Production observability: (1) Error boundaries — wrap route-level and critical feature areas. Show fallback UI, report error with component stack. (2) Global handlers — window.onerror for sync errors, window.onunhandledrejection for async. (3) Sentry integration — upload source maps during build (keep them private), so minified stack traces map to original code. (4) Context enrichment — attach userId, route, Redux state snapshot, feature flags to every event. (5) Web Vitals — track LCP, INP (replaced FID), CLS via web-vitals library, report to analytics. (6) Alerting — error rate > 1% of sessions triggers PagerDuty. Correlate with deploy timestamps for fast rollback decisions.',
    tags: ['error-monitoring', 'sentry', 'web-vitals', 'observability'],
    year: 2025,
  },
  {
    id: 'ap-012',
    topic: 'system-design-fe',
    difficulty: 'junior',
    type: 'mcq',
    question:
      'Your app has a search feature that fires an API request on every keystroke. Users complain it is slow and laggy. What is the standard fix?',
    options: [
      'Increase the server capacity to handle more requests',
      'Debounce the search input (300-500ms delay) so the API call only fires after the user stops typing. Additionally, cancel previous in-flight requests using AbortController, and show a loading indicator during the debounce wait.',
      'Disable the search feature and use filters instead',
      'Cache every possible search result on the client at startup',
    ],
    answer: 1,
    explanation:
      'Search optimization: (1) Debounce — delay API call until user pauses typing (300-500ms is standard). Libraries: lodash.debounce, usehooks-ts, or custom hook. (2) AbortController — cancel the previous request when a new one fires, preventing race conditions where an older response overwrites a newer one. (3) Minimum query length — don\'t search for 1-2 character strings. (4) Cache — TanStack Query caches previous search results, so re-typing a query is instant. (5) Optimistic UI — show a spinner immediately on input change, swap for results when ready. This reduces API calls by 80-90% and eliminates the laggy feel.',
    tags: ['debounce', 'search', 'abort-controller', 'performance'],
    year: 2025,
  },
  {
    id: 'ap-013',
    topic: 'system-design-fe',
    difficulty: 'lead',
    type: 'system-design',
    question:
      'Design an analytics and event tracking architecture for a large SPA. How do you ensure data quality, performance, and developer experience?',
    options: [
      'Add analytics.track() calls directly in every component',
      'Analytics architecture: (1) Type-safe event schema defined in a shared package — all event names and payloads validated at compile time. (2) Analytics middleware/provider pattern — decouple tracking from UI code. (3) Event batching and beacon API for reliable delivery. (4) Automatic page view tracking via route change listener. (5) Server-side enrichment for sensitive data. (6) Debug mode that logs events to console in development.',
      'Use Google Analytics and add gtag calls everywhere',
      'Build a custom analytics backend from scratch',
    ],
    answer: 1,
    explanation:
      'Analytics at scale: (1) Schema — TypeScript discriminated union for events: type AnalyticsEvent = { name: "product_viewed"; props: { productId: string } } | ... This catches typos and missing properties at compile time. (2) Provider pattern — <AnalyticsProvider> injects tracking via context. Components use useTrack() hook. Easy to swap Segment/Amplitude/custom. (3) Performance — batch events (flush every 5s or 10 events), use navigator.sendBeacon() on page unload for reliable delivery. (4) Auto-tracking — route changes, click patterns, scroll depth tracked declaratively. (5) Privacy — PII scrubbed client-side, consent mode respected. (6) DX — debug panel shows events in dev, schema validation in CI prevents shipping unrecognized events.',
    tags: ['analytics', 'event-tracking', 'type-safety', 'architecture'],
    year: 2025,
  },
  {
    id: 'ap-014',
    topic: 'system-design-fe',
    difficulty: 'senior',
    type: 'system-design',
    question:
      'Design a permission and role-based access control (RBAC) system for a complex frontend application with 10+ roles and granular resource-level permissions.',
    options: [
      'Use a simple isAdmin boolean flag and check it everywhere',
      'RBAC architecture: (1) Permissions fetched at login and stored in auth context. (2) Declarative <Can action="edit" resource="invoice"> component wraps protected UI. (3) usePermission("edit", "invoice") hook for imperative checks. (4) Route-level guards redirect unauthorized users. (5) Server always re-validates — frontend RBAC is for UX, not security. (6) Permission cache invalidated on role change via WebSocket event.',
      'Check user.role === "admin" in each component',
      'Hide navigation links and hope users don\'t guess URLs',
    ],
    answer: 1,
    explanation:
      'Frontend RBAC: (1) Permission model — roles (admin, editor, viewer) map to permissions (invoice:edit, invoice:view, user:manage). Fetched as a permission set at login. (2) Declarative checks — <Can action="edit" resource="invoice"> conditionally renders children. Built with React context + CASL library or custom. (3) Hook — usePermission returns boolean, used for conditional logic. (4) Route guards — middleware or loader checks before rendering route. Unauthorized → redirect to 403 page. (5) CRITICAL: frontend checks are UX only. Server must validate every mutation. Frontend just hides buttons/routes. (6) Dynamic — WebSocket pushes permission updates when admin changes roles, invalidating cached permissions.',
    tags: ['rbac', 'permissions', 'authorization', 'security', 'architecture'],
    year: 2025,
  },
  {
    id: 'ap-015',
    topic: 'system-design-fe',
    difficulty: 'mid',
    type: 'system-design',
    question:
      'Your React app renders a table with 10,000 rows. Scrolling is janky and the page freezes on filter operations. How do you fix it?',
    options: [
      'Use pagination to show only 20 rows at a time',
      'Virtualize the table: (1) Use TanStack Virtual or react-window to render only visible rows (typically 20-30 DOM nodes regardless of data size). (2) Memoize row components with React.memo. (3) Move filtering/sorting to a Web Worker to avoid blocking the main thread. (4) Debounce filter input. (5) Use CSS contain: strict on the table container for layout isolation.',
      'Switch from React to vanilla JS for better performance',
      'Add a loading spinner while the table renders',
    ],
    answer: 1,
    explanation:
      'Large list/table performance: (1) Virtualization — only render DOM nodes for visible rows + small overscan buffer. TanStack Virtual is framework-agnostic and supports variable row heights. react-window is simpler for fixed heights. (2) Memoization — React.memo on row components prevents re-render of unchanged rows. (3) Web Workers — filtering/sorting 10K rows can take 50-100ms, blocking UI. Offload to worker, post results back. (4) Debounce — filter input debounced at 200-300ms. (5) CSS containment — contain: strict tells browser the table container\'s layout is independent, enabling paint optimizations. Combination typically achieves 60fps scrolling even with 100K+ rows.',
    tags: ['virtualization', 'performance', 'web-workers', 'tanstack-virtual'],
    year: 2025,
  },

  // ─── STATE-MANAGEMENT (10 questions) ───────────────────────────────
  {
    id: 'ap-016',
    topic: 'state-management',
    difficulty: 'senior',
    type: 'system-design',
    question:
      'Your Redux store has 200+ slices and dispatch is getting slow. Components re-render unnecessarily. How do you refactor?',
    options: [
      'Switch from Redux to React Context for everything',
      'Refactor strategy: (1) Audit slices — separate server state (move to TanStack Query) from client state (keep in Redux). (2) Use createSelector (Reselect) for memoized selectors to prevent unnecessary re-renders. (3) Normalize nested data with createEntityAdapter. (4) Split store into lazy-loaded slices per route using code splitting. (5) Use Redux Toolkit listener middleware instead of sagas for side effects. (6) Consider Zustand for simpler client state slices.',
      'Rewrite the entire app without Redux',
      'Add React.memo to every component',
    ],
    answer: 1,
    explanation:
      'Redux at scale: The #1 issue is mixing server state (API data) with client state (UI toggles, form state) in Redux. Moving API data to TanStack Query eliminates 60-70% of Redux code and gets automatic caching, background refetching, and optimistic updates. For remaining client state: (1) Selectors — createSelector memoizes derived data; components only re-render when selected value changes. (2) Normalization — flat entity tables instead of nested objects prevent cascading updates. (3) Code splitting — inject reducers dynamically per route, so the store doesn\'t load unused slices. (4) RTK Listener middleware replaces redux-saga with simpler, typed async workflows.',
    tags: ['redux', 'refactoring', 'tanstack-query', 'selectors', 'normalization'],
    year: 2025,
  },
  {
    id: 'ap-017',
    topic: 'state-management',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'A component needs data from 3 different API endpoints (user profile, user orders, and recommendations). Write the data fetching logic that handles loading, error, and success states elegantly.',
    code: `// Implement a custom hook that fetches from 3 endpoints
// and provides combined loading/error/data state
function useUserDashboard(userId: string) {
  // Your implementation here
}`,
    answer: `import { useQuery } from '@tanstack/react-query'

function useUserDashboard(userId: string) {
  const profile = useQuery({
    queryKey: ['user', userId],
    queryFn: () => fetch(\`/api/users/\${userId}\`).then(r => r.json()),
  })

  const orders = useQuery({
    queryKey: ['orders', userId],
    queryFn: () => fetch(\`/api/users/\${userId}/orders\`).then(r => r.json()),
    enabled: !!userId,
  })

  const recommendations = useQuery({
    queryKey: ['recommendations', userId],
    queryFn: () => fetch(\`/api/users/\${userId}/recommendations\`).then(r => r.json()),
    enabled: !!profile.data, // only fetch after profile loads
    staleTime: 5 * 60 * 1000, // recommendations are less time-sensitive
  })

  return {
    profile: profile.data,
    orders: orders.data,
    recommendations: recommendations.data,
    isLoading: profile.isLoading || orders.isLoading,
    isError: profile.isError || orders.isError,
    error: profile.error || orders.error,
    isRecommendationsLoading: recommendations.isLoading,
  }
}`,
    solutionCode: `import { useQuery } from '@tanstack/react-query'

function useUserDashboard(userId: string) {
  const profile = useQuery({
    queryKey: ['user', userId],
    queryFn: () => fetch(\`/api/users/\${userId}\`).then(r => r.json()),
  })

  const orders = useQuery({
    queryKey: ['orders', userId],
    queryFn: () => fetch(\`/api/users/\${userId}/orders\`).then(r => r.json()),
    enabled: !!userId,
  })

  const recommendations = useQuery({
    queryKey: ['recommendations', userId],
    queryFn: () => fetch(\`/api/users/\${userId}/recommendations\`).then(r => r.json()),
    enabled: !!profile.data, // only fetch after profile loads
    staleTime: 5 * 60 * 1000, // recommendations are less time-sensitive
  })

  return {
    profile: profile.data,
    orders: orders.data,
    recommendations: recommendations.data,
    isLoading: profile.isLoading || orders.isLoading,
    isError: profile.isError || orders.isError,
    error: profile.error || orders.error,
    isRecommendationsLoading: recommendations.isLoading,
  }
}`,
    explanation:
      'TanStack Query handles parallel and dependent queries elegantly: (1) Independent queries (profile, orders) fire in parallel automatically. (2) Dependent queries use enabled flag — recommendations wait for profile. (3) Each query manages its own cache, loading, error state. (4) staleTime controls background refetching frequency per query. (5) The combined hook provides a clean API for the component. (6) Error boundaries can catch individual query failures. This replaces hundreds of lines of useEffect + useState + try/catch boilerplate.',
    tags: ['tanstack-query', 'data-fetching', 'custom-hooks', 'loading-states'],
    year: 2025,
  },
  {
    id: 'ap-018',
    topic: 'state-management',
    difficulty: 'senior',
    type: 'system-design',
    question:
      'Global state vs server state — your team mixes everything in Redux (API responses, UI toggles, form state, user session). How do you refactor to a clean architecture?',
    options: [
      'Keep everything in Redux but organize with better folder structure',
      'Separate state by type: (1) Server state → TanStack Query (API data with caching, refetching, optimistic updates). (2) Client global state → Zustand or Redux Toolkit (theme, sidebar open, user preferences). (3) Form state → React Hook Form or local useState. (4) URL state → search params via useSearchParams for filters, pagination. (5) Transient UI state → local component state. This eliminates 70% of Redux code.',
      'Replace Redux with React Context for everything',
      'Move all state to the URL using query parameters',
    ],
    answer: 1,
    explanation:
      'State categorization is the key insight: (1) Server state — data you don\'t own, fetched from APIs. TanStack Query handles caching, background refetch, optimistic updates, pagination. This is usually 60-70% of what teams put in Redux. (2) Client global state — theme mode, sidebar collapsed, auth token, user preferences. Small enough for Zustand (simpler) or RTK (if already using Redux). (3) Form state — ephemeral, belongs in the form library or local state. Putting form values in Redux is an anti-pattern. (4) URL state — filters, sort order, pagination, selected tab. useSearchParams makes this shareable and bookmarkable. (5) Migration — tackle one slice at a time, replacing Redux queries with TanStack Query hooks.',
    tags: ['state-architecture', 'server-state', 'zustand', 'tanstack-query', 'refactoring'],
    year: 2025,
  },
  {
    id: 'ap-019',
    topic: 'state-management',
    difficulty: 'senior',
    type: 'code-write',
    question:
      'Implement undo/redo functionality for a drawing app. The user can add shapes, move them, and change colors. Write the state management logic.',
    code: `// Implement an undo/redo hook for a drawing app
// Support: addShape, moveShape, changeColor actions
type Shape = { id: string; type: string; x: number; y: number; color: string }

function useUndoRedo(initialShapes: Shape[]) {
  // Your implementation here
}`,
    answer: `import { useCallback, useRef, useState } from 'react'

type Shape = { id: string; type: string; x: number; y: number; color: string }

function useUndoRedo(initialShapes: Shape[]) {
  const [shapes, setShapes] = useState<Shape[]>(initialShapes)
  const undoStack = useRef<Shape[][]>([])
  const redoStack = useRef<Shape[][]>([])

  const pushToUndo = useCallback((currentShapes: Shape[]) => {
    undoStack.current = [...undoStack.current, currentShapes]
    redoStack.current = [] // clear redo on new action
  }, [])

  const addShape = useCallback((shape: Shape) => {
    setShapes(prev => {
      pushToUndo(prev)
      return [...prev, shape]
    })
  }, [pushToUndo])

  const moveShape = useCallback((id: string, x: number, y: number) => {
    setShapes(prev => {
      pushToUndo(prev)
      return prev.map(s => (s.id === id ? { ...s, x, y } : s))
    })
  }, [pushToUndo])

  const changeColor = useCallback((id: string, color: string) => {
    setShapes(prev => {
      pushToUndo(prev)
      return prev.map(s => (s.id === id ? { ...s, color } : s))
    })
  }, [pushToUndo])

  const undo = useCallback(() => {
    if (undoStack.current.length === 0) return
    const previous = undoStack.current[undoStack.current.length - 1]
    undoStack.current = undoStack.current.slice(0, -1)
    setShapes(current => {
      redoStack.current = [...redoStack.current, current]
      return previous
    })
  }, [])

  const redo = useCallback(() => {
    if (redoStack.current.length === 0) return
    const next = redoStack.current[redoStack.current.length - 1]
    redoStack.current = redoStack.current.slice(0, -1)
    setShapes(current => {
      undoStack.current = [...undoStack.current, current]
      return next
    })
  }, [])

  return {
    shapes,
    addShape,
    moveShape,
    changeColor,
    undo,
    redo,
    canUndo: undoStack.current.length > 0,
    canRedo: redoStack.current.length > 0,
  }
}`,
    solutionCode: `import { useCallback, useRef, useState } from 'react'

type Shape = { id: string; type: string; x: number; y: number; color: string }

function useUndoRedo(initialShapes: Shape[]) {
  const [shapes, setShapes] = useState<Shape[]>(initialShapes)
  const undoStack = useRef<Shape[][]>([])
  const redoStack = useRef<Shape[][]>([])

  const pushToUndo = useCallback((currentShapes: Shape[]) => {
    undoStack.current = [...undoStack.current, currentShapes]
    redoStack.current = [] // clear redo on new action
  }, [])

  const addShape = useCallback((shape: Shape) => {
    setShapes(prev => {
      pushToUndo(prev)
      return [...prev, shape]
    })
  }, [pushToUndo])

  const moveShape = useCallback((id: string, x: number, y: number) => {
    setShapes(prev => {
      pushToUndo(prev)
      return prev.map(s => (s.id === id ? { ...s, x, y } : s))
    })
  }, [pushToUndo])

  const changeColor = useCallback((id: string, color: string) => {
    setShapes(prev => {
      pushToUndo(prev)
      return prev.map(s => (s.id === id ? { ...s, color } : s))
    })
  }, [pushToUndo])

  const undo = useCallback(() => {
    if (undoStack.current.length === 0) return
    const previous = undoStack.current[undoStack.current.length - 1]
    undoStack.current = undoStack.current.slice(0, -1)
    setShapes(current => {
      redoStack.current = [...redoStack.current, current]
      return previous
    })
  }, [])

  const redo = useCallback(() => {
    if (redoStack.current.length === 0) return
    const next = redoStack.current[redoStack.current.length - 1]
    redoStack.current = redoStack.current.slice(0, -1)
    setShapes(current => {
      undoStack.current = [...undoStack.current, current]
      return next
    })
  }, [])

  return {
    shapes,
    addShape,
    moveShape,
    changeColor,
    undo,
    redo,
    canUndo: undoStack.current.length > 0,
    canRedo: redoStack.current.length > 0,
  }
}`,
    explanation:
      'Undo/redo pattern: (1) History stacks — undoStack stores previous states, redoStack stores forward states. Using useRef avoids re-renders on stack changes. (2) On every action — push current state to undoStack, clear redoStack (branching erases redo history). (3) Undo — pop from undoStack, push current to redoStack, restore popped state. (4) Redo — pop from redoStack, push current to undoStack, restore popped state. (5) Optimization for large apps — store diffs/commands instead of full snapshots (Command Pattern). (6) Memory limit — cap stack size (e.g., 50 entries) to prevent memory issues. For complex apps, consider Immer patches for efficient diffing.',
    tags: ['undo-redo', 'state-management', 'command-pattern', 'drawing-app'],
    year: 2025,
  },
  {
    id: 'ap-020',
    topic: 'state-management',
    difficulty: 'mid',
    type: 'system-design',
    question:
      'Two different pages (Dashboard and Settings) need the same user profile data but must stay in sync. One page can edit the profile. What is your strategy?',
    options: [
      'Fetch the data separately on each page and hope they stay in sync',
      'Use TanStack Query with a shared query key: both pages use useQuery({ queryKey: ["user", id] }). When Settings page mutates, use invalidateQueries(["user", id]) to automatically refetch on Dashboard. For instant updates, apply optimistic update via onMutate callback. The cache acts as a single source of truth across pages.',
      'Lift the user data to a React Context at the root',
      'Store the user data in localStorage and poll for changes',
    ],
    answer: 1,
    explanation:
      'TanStack Query solves shared data elegantly: (1) Same query key = same cache — useQuery(["user", id]) on Dashboard and Settings reads from the same cache entry. (2) Mutation on Settings — useMutation with onSuccess: () => queryClient.invalidateQueries(["user", id]) triggers automatic refetch. Dashboard re-renders with fresh data. (3) Optimistic updates — onMutate callback can update cache immediately: queryClient.setQueryData(["user", id], newData). If mutation fails, onError rolls back. (4) No prop drilling, no context, no Redux — the cache is the shared state. (5) Stale data detection — staleTime and refetchOnWindowFocus ensure data freshness when switching between tabs/pages.',
    tags: ['tanstack-query', 'cache-sync', 'optimistic-updates', 'shared-state'],
    year: 2025,
  },
  {
    id: 'ap-021',
    topic: 'state-management',
    difficulty: 'junior',
    type: 'mcq',
    question:
      'You have a theme toggle (dark/light mode) that needs to be accessible across the entire app. What is the simplest correct approach?',
    options: [
      'Install Redux just for the theme state',
      'Use React Context with useState: create a ThemeContext with a toggle function, wrap the app in ThemeProvider, consume via useTheme() hook. Persist the choice in localStorage and initialize from it. Apply theme via a data-theme attribute on the document root.',
      'Pass the theme as a prop through every component',
      'Use a global variable (window.theme) and re-render manually',
    ],
    answer: 1,
    explanation:
      'Theme state is a textbook use case for React Context: (1) It rarely changes (low update frequency = no performance concern). (2) It needs to be globally accessible. (3) Implementation: ThemeProvider manages state, persists to localStorage, sets data-theme attribute on <html>. CSS variables respond to the attribute: [data-theme="dark"] { --bg: #1a1a1a }. (4) useTheme() hook provides { theme, toggleTheme }. (5) Initialize from localStorage → system preference (prefers-color-scheme) → default. (6) Redux is overkill for this. Zustand is fine but Context is sufficient.',
    tags: ['theme', 'context', 'dark-mode', 'local-storage'],
    year: 2025,
  },
  {
    id: 'ap-022',
    topic: 'state-management',
    difficulty: 'mid',
    type: 'debug',
    question:
      'This React component has an infinite re-render loop. Find and fix the bug.',
    code: `function UserProfile({ userId }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchUser = async () => {
    setLoading(true)
    const res = await fetch(\`/api/users/\${userId}\`)
    const data = await res.json()
    setUser(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  return loading ? <Spinner /> : <div>{user.name}</div>
}`,
    answer: 'The fetchUser function is recreated on every render, causing the useEffect dependency to change and re-trigger infinitely. Fix: either move fetchUser inside useEffect, or wrap it with useCallback with [userId] as dependency.',
    solutionCode: `function UserProfile({ userId }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Move fetchUser inside useEffect to avoid stale closure and infinite loop
    const fetchUser = async () => {
      setLoading(true)
      const res = await fetch(\`/api/users/\${userId}\`)
      const data = await res.json()
      setUser(data)
      setLoading(false)
    }

    fetchUser()
  }, [userId]) // only depends on userId, not fetchUser

  return loading ? <Spinner /> : <div>{user?.name}</div>
}`,
    explanation:
      'The bug: fetchUser is defined in the component body, so it gets a new reference every render. useEffect depends on [fetchUser], sees a new reference, re-runs, which calls setUser/setLoading, which triggers a re-render, which creates a new fetchUser... infinite loop. Fix options: (1) Best: move the async function inside useEffect and depend on [userId]. (2) Alternative: wrap fetchUser with useCallback(() => { ... }, [userId]). (3) Modern: use TanStack Query which handles this entirely. This is one of the most common React bugs in real codebases.',
    tags: ['useEffect', 'infinite-loop', 'useCallback', 'debugging'],
    year: 2025,
  },
  {
    id: 'ap-023',
    topic: 'state-management',
    difficulty: 'lead',
    type: 'system-design',
    question:
      'Your team is building a complex financial trading dashboard with real-time data updates (100+ updates/second). State updates are causing dropped frames. How do you architect the state layer?',
    options: [
      'Use Redux with real-time dispatch for every update',
      'High-frequency state architecture: (1) Decouple real-time data from React state — store in a mutable ref or external store (Zustand with transient updates). (2) Batch visual updates using requestAnimationFrame to throttle renders to 60fps. (3) Use React.useSyncExternalStore for selective subscription — each widget subscribes only to its data slice. (4) Web Worker processes incoming WebSocket data to avoid blocking main thread. (5) Canvas rendering for charts instead of DOM.',
      'Use WebSocket and update state on every message',
      'Poll the server every second and batch all updates',
    ],
    answer: 1,
    explanation:
      'Real-time at 100+ updates/sec: React cannot re-render at this frequency without dropping frames. Solution: (1) Web Worker — receives WebSocket messages, parses, aggregates, and posts batched updates to main thread at controlled intervals. (2) External store — Zustand\'s subscribe with selector, or a custom store with useSyncExternalStore. Store updates are synchronous and fast (no reducer overhead). (3) RAF batching — accumulate updates, apply once per animation frame. Components see at most 60 updates/second. (4) Selective subscriptions — trading widget subscribes to ["AAPL", "price"], ignoring all other updates. React only re-renders when subscribed value changes. (5) Canvas — D3/Canvas-based charts update outside React\'s reconciliation entirely.',
    tags: ['real-time', 'high-frequency', 'web-worker', 'requestAnimationFrame', 'trading'],
    year: 2025,
  },
  {
    id: 'ap-024',
    topic: 'state-management',
    difficulty: 'junior',
    type: 'mcq',
    question:
      'You need to share a shopping cart state between the header (cart icon with count) and the cart page. The cart has add, remove, and update quantity actions. What is the simplest scalable approach?',
    options: [
      'Use prop drilling from a root component',
      'Use Zustand: create a useCartStore with items array and actions (addItem, removeItem, updateQuantity, clearCart). Zustand stores are accessible from any component without providers, persist to localStorage with the persist middleware, and are more lightweight than Redux for this use case.',
      'Use the browser sessionStorage and poll for changes',
      'Use Redux Toolkit with full middleware setup',
    ],
    answer: 1,
    explanation:
      'Zustand is ideal for cart state: (1) Minimal boilerplate — create store in ~20 lines with typed state and actions. (2) No providers — useCartStore() works anywhere, no wrapping the tree. (3) Persist middleware — cart survives page refresh via localStorage with zero extra code. (4) Selective subscription — header uses useCartStore(s => s.items.length) and only re-renders when count changes. Cart page uses useCartStore(s => s.items) for the full list. (5) DevTools — Zustand works with Redux DevTools for debugging. (6) Redux is fine but heavier for a single domain; Context causes re-renders of all consumers on any change without memo tricks.',
    tags: ['zustand', 'shopping-cart', 'persist', 'lightweight-state'],
    year: 2025,
  },
  {
    id: 'ap-025',
    topic: 'state-management',
    difficulty: 'mid',
    type: 'system-design',
    question:
      'Your app has a multi-step wizard (5 steps) with complex validation rules. Step 3 depends on choices in Step 1. How do you manage the wizard state and navigation?',
    options: [
      'Use a single large useState object and pass it through props',
      'State machine approach: (1) Use XState or useReducer to model wizard as explicit states (step1 → step2 → ... → complete) with transition guards for validation. (2) React Hook Form with per-step schemas (Zod) for field validation. (3) Store wizard data in a shared context or Zustand store. (4) URL tracks current step for browser back/forward. (5) Conditional step rendering based on prior choices (dynamic flow).',
      'Use separate local state per step and combine at the end',
      'Store everything in Redux and validate on submit',
    ],
    answer: 1,
    explanation:
      'Wizard architecture: (1) State machine — explicit states prevent impossible transitions (can\'t jump from step 1 to step 5 without completing 2-4). Guards validate before transition. XState visualizer helps debug complex flows. (2) Form validation — Zod schemas per step. Step 3\'s schema can reference step 1 data: z.object({ plan: z.literal("enterprise") }) only if step 1 chose enterprise. (3) Data persistence — Zustand or context stores accumulated wizard data. Persist to sessionStorage so refresh doesn\'t lose progress. (4) URL sync — /wizard/step/3 enables browser navigation. (5) Dynamic flow — some steps conditional: if step 1 = "business", show step 2b (tax info), otherwise skip.',
    tags: ['wizard', 'state-machine', 'xstate', 'multi-step-form', 'validation'],
    year: 2025,
  },

  // ─── BUILD-TOOLS (8 questions) ─────────────────────────────────────
  {
    id: 'ap-026',
    topic: 'build-tools',
    difficulty: 'senior',
    type: 'system-design',
    question:
      'Build time is 15 minutes for your React app CI/CD pipeline. How do you optimize it?',
    options: [
      'Upgrade to a more powerful CI machine',
      'Multi-pronged optimization: (1) Switch bundler from Webpack to Vite/Rspack for 5-10x faster builds. (2) Enable persistent caching — Turborepo remote cache or Nx affected commands. (3) Parallelize CI steps — lint, type-check, test, build run concurrently. (4) Incremental builds — only rebuild changed packages in monorepo. (5) Optimize Docker layers — cache node_modules layer. (6) Tree-shake test files and dev dependencies from production build.',
      'Remove all tests from the CI pipeline',
      'Build locally and push the dist folder to the repository',
    ],
    answer: 1,
    explanation:
      'CI/CD optimization layers: (1) Bundler — Rspack (Rust-based Webpack compatible) or Vite (esbuild for dev, Rollup for prod) are dramatically faster than Webpack 4/5. (2) Remote caching — Turborepo/Nx cache build artifacts by content hash. If nothing changed, build is instant (cache hit). (3) Parallelism — CI runners can execute lint + type-check + unit tests simultaneously instead of sequentially. (4) Affected detection — in monorepos, only rebuild/test packages affected by the PR\'s changes. (5) Docker — multi-stage build with cached node_modules layer; only reinstall when package.json changes. (6) Typical result: 15 min → 3-4 min with these optimizations, potentially under 1 min with good cache hit rates.',
    tags: ['ci-cd', 'build-optimization', 'turborepo', 'rspack', 'caching'],
    year: 2025,
  },
  {
    id: 'ap-027',
    topic: 'build-tools',
    difficulty: 'lead',
    type: 'system-design',
    question:
      'Monorepo with 20 packages has dependency conflicts — different packages need different versions of the same library. How do you manage this?',
    options: [
      'Force all packages to use the same version of every dependency',
      'Monorepo dependency management: (1) Use pnpm with strict hoisting to prevent phantom dependencies. (2) Catalog protocol (pnpm catalog:) for shared version alignment. (3) Changesets for coordinated versioning and publishing. (4) Allow version ranges with peerDependencies for flexibility. (5) Renovate/Dependabot with group update rules per package. (6) Periodic "dependency alignment" sprints to reduce version spread.',
      'Use npm with --legacy-peer-deps for everything',
      'Give each package its own node_modules with independent installs',
    ],
    answer: 1,
    explanation:
      'Monorepo dependency strategy: (1) pnpm — strict node_modules structure prevents packages from importing undeclared dependencies (phantom deps). Each package only sees its declared deps. (2) pnpm catalog — define shared versions in pnpm-workspace.yaml: react: "catalog:" resolves to the version defined once in the catalog. (3) peerDependencies — shared framework libraries (React, Vue) declared as peerDeps so the consumer controls the version. (4) Changesets — manages versioning across packages: when package A changes, dependents of A get patch bumps automatically. (5) Deduplication — pnpm\'s content-addressable store means identical versions share disk space. (6) Version policy — "inner packages" (internal) use workspace:* for latest. "Outer packages" (published) use semver ranges.',
    tags: ['monorepo', 'pnpm', 'dependency-management', 'changesets'],
    year: 2025,
  },
  {
    id: 'ap-028',
    topic: 'build-tools',
    difficulty: 'senior',
    type: 'system-design',
    question:
      'Deploy failed in production — users see a broken app with a white screen. What is your immediate response and rollback strategy?',
    options: [
      'Quickly fix the bug and push a hotfix',
      'Immediate response: (1) Rollback — revert to last known good deployment via CI/CD one-click rollback (Vercel instant rollback, AWS CloudFront origin switch). (2) CDN cache — purge edge caches to serve rolled-back assets. (3) Investigate — check error monitoring (Sentry) for the crash, review deploy diff. (4) Prevention — implement deploy health checks (synthetic monitoring post-deploy), canary releases (10% traffic first), and automated rollback on error rate spike.',
      'Tell users to clear their browser cache',
      'Add a try-catch around the entire app',
    ],
    answer: 1,
    explanation:
      'Production incident response: (1) IMMEDIATE — rollback within minutes, not hours. Platforms like Vercel have instant rollback. For custom infra: point CDN/load balancer to previous version\'s assets. (2) CDN purge — stale cached assets (old JS referencing deleted chunks) cause white screens. Purge edge cache after rollback. (3) Root cause — Sentry shows the error. Common causes: chunk loading errors (code split files missing), API contract changes, environment variable misconfiguration. (4) Prevention: canary deploys route 5-10% traffic to new version, monitor error rates, auto-promote or auto-rollback. Health check endpoint hit post-deploy. (5) Chunk hashing — use content-hash filenames so old and new versions coexist on CDN.',
    tags: ['deployment', 'rollback', 'incident-response', 'canary', 'cdn'],
    year: 2025,
  },
  {
    id: 'ap-029',
    topic: 'build-tools',
    difficulty: 'lead',
    type: 'system-design',
    question:
      'Implement zero-downtime deployment with canary releases for a frontend application. How does the infrastructure work?',
    options: [
      'Deploy during off-hours when fewer users are online',
      'Canary deployment architecture: (1) Two deployment targets: stable (current) and canary (new version). (2) Edge router (Cloudflare Workers, Vercel Edge Middleware, or nginx) routes traffic by percentage or cookie. (3) Canary gets 5% traffic initially, monitored via error rate, Web Vitals, and business metrics. (4) Automated promotion: if metrics are healthy after 30 min, increase to 25% → 50% → 100%. (5) Automated rollback: if error rate exceeds threshold, route 100% back to stable. (6) Sticky sessions via cookie ensure user stays on same version.',
      'Deploy the new version to a separate domain and slowly migrate DNS',
      'Use blue-green deployment with a manual DNS switch',
    ],
    answer: 1,
    explanation:
      'Canary for frontend: (1) Asset versioning — both versions\' JS/CSS bundles coexist on CDN with content-hash filenames. No conflicts. (2) Edge routing — Cloudflare Workers or Vercel Edge Middleware inspects request, checks canary cookie or applies percentage split, rewrites HTML to load canary or stable entry point. (3) Sticky sessions — once a user is assigned canary, a cookie keeps them on it. Prevents confusing experience of switching between versions. (4) Monitoring — compare canary vs stable: JS error rate, LCP, CLS, conversion rate. Statistical significance required before promotion. (5) Rollback — instant: update edge config to route 0% to canary. Old bundles still on CDN. (6) Feature flags complement canary — canary tests infrastructure changes, flags test feature-level changes.',
    tags: ['canary-deployment', 'zero-downtime', 'edge-routing', 'monitoring'],
    year: 2025,
  },
  {
    id: 'ap-030',
    topic: 'build-tools',
    difficulty: 'mid',
    type: 'system-design',
    question:
      'Your bundle has 50 unused npm packages inflating the bundle size. How do you audit and clean them?',
    options: [
      'Manually check each package.json dependency',
      'Audit process: (1) Run depcheck to find unused dependencies in source code. (2) Use bundle analyzer (webpack-bundle-analyzer or vite-plugin-visualizer) to see what is actually in the bundle. (3) Check for side-effect-only imports that depcheck misses. (4) Use knip for comprehensive dead code and dependency detection. (5) Enable tree-shaking verification — check if imports are tree-shakeable. (6) Set up CI check that fails if bundle size exceeds budget.',
      'Delete node_modules and reinstall',
      'Switch to a CDN for all dependencies',
    ],
    answer: 1,
    explanation:
      'Dependency audit workflow: (1) depcheck — static analysis of imports vs package.json. Catches packages listed but never imported. False positives: config packages (eslint-config-*), babel plugins, type-only packages. (2) knip — more comprehensive: finds unused files, exports, dependencies, and devDependencies. (3) Bundle analyzer — visual treemap shows actual bundle composition. You might find moment.js locale files (500KB), lodash fully imported (70KB vs 5KB for lodash-es cherry-pick). (4) Tree-shaking — ensure imports are ESM: import { debounce } from "lodash-es" not import _ from "lodash". sideEffects: false in package.json enables tree-shaking. (5) CI budget — bundlesize or size-limit in CI fails PR if bundle grows beyond threshold.',
    tags: ['bundle-audit', 'depcheck', 'tree-shaking', 'bundle-size', 'knip'],
    year: 2025,
  },
  {
    id: 'ap-031',
    topic: 'build-tools',
    difficulty: 'mid',
    type: 'mcq',
    question:
      'Your team debates between Vite and Webpack for a new React project in 2025. What are the key differences that should drive the decision?',
    options: [
      'Vite is just a faster Webpack — they do the same thing',
      'Vite: native ESM dev server (instant start, fast HMR), Rollup/Rolldown for production builds. Webpack: mature plugin ecosystem, Module Federation for micro-frontends, broader legacy browser support. Choose Vite for new projects (10-100x faster dev experience). Choose Webpack/Rspack if you need Module Federation or have extensive custom Webpack plugins.',
      'Webpack is outdated and should never be used in 2025',
      'Vite only works with Vue, not React',
    ],
    answer: 1,
    explanation:
      'Vite vs Webpack in 2025: Vite dev server — serves source files as native ES modules, no bundling needed in dev. HMR updates in <50ms regardless of app size. Webpack dev server bundles everything, so startup and HMR scale with app size. Vite production — uses Rollup (soon Rolldown, a Rust-based Rollup) for optimized production builds. Webpack production — mature but slower. Rspack (Rust-based Webpack) is an alternative that keeps Webpack plugin compatibility with 5-10x speed improvement. Module Federation — Webpack/Rspack exclusive feature for micro-frontends. Vite has community solutions but less mature. Decision: Vite for 90% of new projects. Rspack if migrating from Webpack. Webpack 5 only if deep plugin investment exists.',
    tags: ['vite', 'webpack', 'rspack', 'bundler-comparison', 'tooling'],
    year: 2025,
  },
  {
    id: 'ap-032',
    topic: 'build-tools',
    difficulty: 'junior',
    type: 'mcq',
    question:
      'Your app works in development but shows a blank white page in production after building. What are the most common causes?',
    options: [
      'The production server is down',
      'Common causes: (1) Incorrect base path — assets referenced from "/" but app is served from "/app/". Fix: set base in vite.config or homepage in package.json. (2) Missing environment variables — VITE_API_URL undefined in production build. (3) Routing issue — using BrowserRouter but server returns 404 for deep links (need SPA fallback config). (4) Build error silently swallowed — check build output for warnings.',
      'JavaScript is disabled in the user\'s browser',
      'The build process generates different code than development',
    ],
    answer: 1,
    explanation:
      'White page in production debugging checklist: (1) Open browser DevTools Console — usually shows the error (404 for assets, undefined variable, routing error). (2) Base path — most common issue. Vite\'s base: "/app/" or CRA\'s homepage: "/app/" must match the URL path where the app is deployed. (3) Environment variables — Vite requires VITE_ prefix. CRA requires REACT_APP_ prefix. Variables without prefix are stripped from the client build. (4) SPA routing — server must return index.html for all routes. Nginx: try_files $uri /index.html. Vercel: rewrites in vercel.json. (5) Build output — always check for TypeScript errors, missing imports, or tree-shaking removing needed side effects.',
    tags: ['production-debugging', 'white-screen', 'base-path', 'environment-variables'],
    year: 2025,
  },
  {
    id: 'ap-033',
    topic: 'build-tools',
    difficulty: 'senior',
    type: 'system-design',
    question:
      'You are setting up a new monorepo for 5 frontend apps and 10 shared packages. What tooling stack do you choose and how do you structure it?',
    options: [
      'Use npm workspaces with a simple scripts setup',
      'Monorepo stack: (1) pnpm workspaces for dependency management (strict, fast, disk-efficient). (2) Turborepo for task orchestration (build/test/lint with caching and parallelism). (3) Structure: apps/ for deployable apps, packages/ for shared libraries (ui, utils, config, tsconfig). (4) Shared tsconfig, eslint, and prettier configs as internal packages. (5) Changesets for versioning shared packages. (6) CI pipeline uses turbo run build --filter=[HEAD^1] for affected-only builds.',
      'Use separate repos with npm link between them',
      'Use Lerna — it is the industry standard for monorepos',
    ],
    answer: 1,
    explanation:
      'Monorepo tooling in 2025: (1) pnpm — strict node_modules isolation prevents phantom deps. workspace:* protocol for local package linking. Content-addressable store saves disk space. (2) Turborepo — defines task dependencies (build depends on ^build of dependencies), caches outputs, runs in parallel. Remote caching shares build artifacts across CI and developers. (3) Structure: apps/web, apps/admin, apps/mobile-web, packages/ui, packages/utils, packages/tsconfig, packages/eslint-config. (4) Internal packages — shared configs consumed via "extends" or package imports, not published. (5) Changesets — when packages/ui changes, apps consuming it automatically know to rebuild. Versioning for published packages. (6) CI — turbo run build --filter=...[origin/main] only builds what changed since main.',
    tags: ['monorepo', 'pnpm', 'turborepo', 'project-structure', 'tooling'],
    year: 2025,
  },

  // ─── NEXTJS-FRAMEWORKS (7 questions) ───────────────────────────────
  {
    id: 'ap-034',
    topic: 'nextjs-frameworks',
    difficulty: 'senior',
    type: 'system-design',
    question:
      'A statically generated product page needs to show personalized content (recommended products, user-specific pricing). How do you handle this without losing SSG benefits?',
    options: [
      'Switch the entire page to SSR for personalization',
      'Hybrid approach: (1) SSG for the static shell (product info, images, reviews — same for all users). (2) Client-side fetch for personalized sections (recommendations, pricing) rendered after hydration. (3) Use Suspense boundaries with skeleton fallbacks for personalized slots. (4) Edge Middleware can inject user segment into request headers, enabling segment-based static variants. (5) Cache personalized API responses at the edge keyed by user segment.',
      'Use localStorage to cache personalized content',
      'Generate a unique static page per user at build time',
    ],
    answer: 1,
    explanation:
      'Personalization with SSG: The key insight is that most of the page is the same for everyone. (1) Static shell — product title, description, images, reviews are identical. Pre-render with getStaticProps/generateStaticParams. Served from CDN edge — fast. (2) Personalized slots — "Recommended for you", dynamic pricing, "Recently viewed" loaded client-side after hydration. Skeleton fallbacks prevent layout shift. (3) Segment-based caching — instead of per-user personalization, group users into segments (new/returning, region, plan tier). Edge Middleware sets segment header. Cache static variants per segment: /product/abc?segment=enterprise. (4) Streaming SSR — Next.js App Router can stream personalized Suspense boundaries while the static shell loads instantly.',
    tags: ['ssg', 'personalization', 'suspense', 'edge-middleware', 'hybrid-rendering'],
    year: 2025,
  },
  {
    id: 'ap-035',
    topic: 'nextjs-frameworks',
    difficulty: 'senior',
    type: 'system-design',
    question:
      'API routes in your Next.js app are getting rate-limited by the upstream API. How do you implement caching at the edge to reduce API calls?',
    options: [
      'Add a setTimeout delay between API calls',
      'Edge caching strategy: (1) Use Next.js Route Handlers with Cache-Control headers (s-maxage, stale-while-revalidate). (2) Deploy to Vercel Edge Functions or Cloudflare Workers for edge caching. (3) Implement Redis/Upstash cache layer — check cache first, fetch from upstream only on miss. (4) Request deduplication — coalesce concurrent identical requests into one upstream call. (5) Tiered cache: memory (per-instance) → Redis (shared) → upstream API.',
      'Increase the rate limit by contacting the API provider',
      'Cache everything in the browser localStorage',
    ],
    answer: 1,
    explanation:
      'Edge caching for API routes: (1) HTTP caching — Cache-Control: s-maxage=60, stale-while-revalidate=300 means CDN serves cached response for 60s, then serves stale while fetching fresh in background for up to 300s. (2) Upstash Redis — serverless Redis at the edge. Route Handler checks Redis first: const cached = await redis.get(key); if (cached) return cached. Otherwise fetch upstream, store in Redis with TTL. (3) Request coalescing — if 100 users request the same data simultaneously, only one upstream call is made. Use swr-style deduplication. (4) Tiered cache — per-instance Map (fastest, not shared) → Redis (shared across instances, ~1ms) → upstream API (slow, rate-limited). (5) Cache invalidation — webhook from upstream triggers Redis.del(key) or revalidatePath/revalidateTag in Next.js.',
    tags: ['edge-caching', 'rate-limiting', 'redis', 'upstash', 'api-routes'],
    year: 2025,
  },
  {
    id: 'ap-036',
    topic: 'nextjs-frameworks',
    difficulty: 'mid',
    type: 'system-design',
    question:
      'The SEO team says dynamically rendered pages are not being indexed by Google. Diagnose and fix the issue.',
    options: [
      'Add more keywords to the meta tags',
      'Diagnosis and fix: (1) Check rendering — if pages rely on client-side JS to render content, Googlebot may not execute it. Switch critical pages to SSR or SSG. (2) Verify with Google Search Console URL Inspection — shows what Googlebot sees. (3) Ensure proper meta tags rendered server-side: title, description, canonical, Open Graph. (4) Implement structured data (JSON-LD) for rich snippets. (5) Submit XML sitemap via Search Console. (6) Check robots.txt for accidental disallow rules.',
      'Buy Google Ads to improve indexing',
      'Add a noscript tag with all the content',
    ],
    answer: 1,
    explanation:
      'SEO for SPAs/dynamic pages: (1) Root cause — pure CSR (client-side rendering) means initial HTML is empty. Googlebot does execute JS, but with delays and limitations. Critical content should be in initial HTML via SSR/SSG. (2) Next.js advantage — pages are server-rendered by default. But if you fetch data in useEffect (client-side), that content is not in the initial HTML. Use getServerSideProps, getStaticProps, or App Router Server Components. (3) Meta tags — must be in the server-rendered HTML head. next/head or generateMetadata in App Router. (4) Structured data — JSON-LD schema in <script type="application/ld+json"> for products, articles, FAQs. (5) Sitemap — next-sitemap package auto-generates from pages. (6) Canonical URLs — prevent duplicate content issues from URL parameters.',
    tags: ['seo', 'ssr', 'indexing', 'meta-tags', 'structured-data'],
    year: 2025,
  },
  {
    id: 'ap-037',
    topic: 'nextjs-frameworks',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'Implement ISR (Incremental Static Regeneration) that revalidates a blog post page when the CMS content changes via a webhook. Write the page and webhook handler.',
    code: `// 1. Blog post page with ISR (App Router)
// app/blog/[slug]/page.tsx

// 2. Webhook handler for CMS
// app/api/revalidate/route.ts`,
    answer: `// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation'

interface BlogPost {
  slug: string
  title: string
  content: string
}

async function getPost(slug: string): Promise<BlogPost | null> {
  const res = await fetch(\`https://cms.example.com/api/posts/\${slug}\`, {
    next: { revalidate: 3600, tags: [\`post-\${slug}\`] },
  })
  if (!res.ok) return null
  return res.json()
}

export async function generateStaticParams() {
  const res = await fetch('https://cms.example.com/api/posts')
  const posts: BlogPost[] = await res.json()
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) notFound()

  return (
    <article>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  )
}

// app/api/revalidate/route.ts
import { revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const secret = request.headers.get('x-revalidation-secret')
  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }

  const body = await request.json()
  const slug = body.slug as string

  revalidateTag(\`post-\${slug}\`)

  return NextResponse.json({ revalidated: true, slug })
}`,
    solutionCode: `// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation'

interface BlogPost {
  slug: string
  title: string
  content: string
}

async function getPost(slug: string): Promise<BlogPost | null> {
  const res = await fetch(\`https://cms.example.com/api/posts/\${slug}\`, {
    next: { revalidate: 3600, tags: [\`post-\${slug}\`] },
  })
  if (!res.ok) return null
  return res.json()
}

export async function generateStaticParams() {
  const res = await fetch('https://cms.example.com/api/posts')
  const posts: BlogPost[] = await res.json()
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) notFound()

  return (
    <article>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  )
}

// app/api/revalidate/route.ts
import { revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const secret = request.headers.get('x-revalidation-secret')
  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }

  const body = await request.json()
  const slug = body.slug as string

  revalidateTag(\`post-\${slug}\`)

  return NextResponse.json({ revalidated: true, slug })
}`,
    explanation:
      'ISR with on-demand revalidation: (1) Page — uses fetch with next: { revalidate: 3600, tags: ["post-slug"] }. Page is statically generated at build time and revalidated every hour as fallback. (2) Tags — fetch cache tagged with post-specific identifier. (3) Webhook handler — CMS calls /api/revalidate when content updates. Handler validates secret (prevent unauthorized revalidation), then calls revalidateTag("post-slug") which invalidates the cached page. (4) Next request to that page triggers regeneration with fresh CMS data. (5) generateStaticParams pre-renders known posts at build time. New posts are generated on first request (dynamic params). (6) Security — always authenticate webhooks with a shared secret.',
    tags: ['isr', 'revalidation', 'webhook', 'nextjs-app-router', 'caching'],
    year: 2025,
  },
  {
    id: 'ap-038',
    topic: 'nextjs-frameworks',
    difficulty: 'junior',
    type: 'mcq',
    question:
      'You are building a page in Next.js App Router. When should you use a Server Component vs a Client Component?',
    options: [
      'Always use Client Components because they are more flexible',
      'Server Components for: data fetching, accessing backend resources, keeping secrets server-side, reducing client bundle. Client Components (use client) for: interactivity (onClick, onChange), browser APIs (localStorage, window), React hooks (useState, useEffect), third-party client libraries. Default to Server Components, add use client only when needed.',
      'Always use Server Components because they are faster',
      'Use Server Components for static content and Client Components for everything else',
    ],
    answer: 1,
    explanation:
      'Server vs Client Components in Next.js App Router: Server Components (default): (1) Run only on the server, never shipped to client bundle. (2) Can directly access databases, file system, environment variables. (3) async/await at component level for data fetching. (4) Zero client-side JavaScript for static content. Client Components ("use client"): (1) Required for useState, useEffect, any React hooks. (2) Required for event handlers (onClick, onSubmit). (3) Required for browser APIs. (4) Required for context providers. Pattern: Server Component fetches data, passes it as props to a small Client Component that handles interactivity. This minimizes client bundle while enabling rich interactions.',
    tags: ['server-components', 'client-components', 'app-router', 'nextjs'],
    year: 2025,
  },
  {
    id: 'ap-039',
    topic: 'nextjs-frameworks',
    difficulty: 'senior',
    type: 'debug',
    question:
      'This Next.js App Router page fetches data but always shows stale content even after the database is updated. Find the bug.',
    code: `// app/products/page.tsx
async function getProducts() {
  const res = await fetch('https://api.example.com/products')
  return res.json()
}

export default async function ProductsPage() {
  const products = await getProducts()

  return (
    <div>
      <h1>Products</h1>
      {products.map((p: any) => (
        <div key={p.id}>{p.name} - \${p.price}</div>
      ))}
    </div>
  )
}`,
    answer: 'In Next.js App Router, fetch requests are cached by default (equivalent to force-cache). The fetch call needs either { cache: "no-store" } for always-fresh data, or { next: { revalidate: 60 } } for time-based revalidation, or tag-based revalidation with revalidateTag().',
    solutionCode: `// app/products/page.tsx
async function getProducts() {
  // FIXED: add cache: "no-store" for always-fresh data
  const res = await fetch('https://api.example.com/products', {
    cache: 'no-store',
  })
  return res.json()
}

export default async function ProductsPage() {
  const products = await getProducts()

  return (
    <div>
      <h1>Products</h1>
      {products.map((p: any) => (
        <div key={p.id}>{p.name} - \${p.price}</div>
      ))}
    </div>
  )
}`,
    explanation:
      'Next.js App Router caching gotcha: By default, fetch() in Server Components is cached indefinitely (static rendering). This is the #1 confusion in App Router. Fix options: (1) Dynamic data — fetch(url, { cache: "no-store" }) fetches fresh on every request. (2) Time-based ISR — fetch(url, { next: { revalidate: 60 } }) caches for 60 seconds. (3) On-demand — fetch(url, { next: { tags: ["products"] } }) + revalidateTag("products") in a webhook/server action. (4) Page-level — export const dynamic = "force-dynamic" makes the entire page dynamic. (5) The correct choice depends on data freshness requirements: product catalog (revalidate: 300), stock/pricing (no-store or revalidate: 10), static content (default cache).',
    tags: ['nextjs-caching', 'app-router', 'stale-data', 'debugging', 'isr'],
    year: 2025,
  },
  {
    id: 'ap-040',
    topic: 'nextjs-frameworks',
    difficulty: 'lead',
    type: 'system-design',
    question:
      'You are migrating a large Create React App (CRA) to Next.js App Router. The app has 200+ routes, Redux store, and custom Webpack config. What is your migration strategy?',
    options: [
      'Rewrite the entire app from scratch in Next.js',
      'Incremental migration: (1) Start with Next.js pages router alongside existing CRA using a catch-all route. (2) Migrate route by route — new features in App Router, existing pages gradually moved. (3) Wrap existing Redux store in a Client Component provider. (4) Replace CRA webpack config with next.config.js equivalents. (5) Convert data fetching from useEffect to Server Components/Route Handlers incrementally. (6) Codemods for automatic import path updates.',
      'Run CRA inside an iframe within a Next.js shell',
      'Wait for an automated migration tool',
    ],
    answer: 1,
    explanation:
      'CRA → Next.js migration strategy: (1) Catch-all route — app/[[...slug]]/page.tsx renders the existing CRA app as a Client Component. Entire old app works immediately in Next.js. (2) Route-by-route — extract one route at a time into proper Next.js pages. Start with high-traffic pages for maximum impact. (3) State — Redux Provider is a Client Component wrapping children. Works fine. Gradually move server-fetched data out of Redux into Server Components. (4) Webpack — most custom webpack configs have next.config.js equivalents or Turbopack support. (5) Data fetching — useEffect-based fetching in old pages still works in Client Components. New pages use Server Components with direct data access. (6) Timeline — typically 3-6 months for 200+ routes with a dedicated team. Ship incrementally, never a big bang.',
    tags: ['migration', 'cra-to-nextjs', 'app-router', 'incremental-adoption'],
    year: 2025,
  },
]
