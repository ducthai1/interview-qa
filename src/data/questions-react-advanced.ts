import type { Question } from '../types'

export const reactAdvancedQuestions: Question[] = [
  // --- React.memo & Performance Optimization ---
  {
    id: 'ra-001',
    topic: 'react-advanced',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What does `React.memo` do?',
    options: [
      'Memoizes the state inside a component so it never resets',
      'Wraps a component so React skips re-rendering it if its props have not changed (shallow comparison)',
      'Prevents a component from ever re-rendering',
      'Deep-clones props before passing them to the component',
    ],
    answer: 1,
    explanation:
      '`React.memo(Component)` is a higher-order component that memoizes the rendered output. Before re-rendering, React performs a shallow comparison of the old and new props. If they are the same, React reuses the previous render. You can pass a custom comparison function as the second argument: `React.memo(Component, (prevProps, nextProps) => areEqual)`. Note: it only checks props, not context or internal state.',
    tags: ['React.memo', 'memoization', 'performance', 'HOC'],
    year: 2024,
  },
  {
    id: 'ra-002',
    topic: 'react-advanced',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What profiling tools does React provide to identify unnecessary re-renders?',
    options: [
      'Only the browser DevTools performance tab',
      'React DevTools Profiler (flame graph, ranked chart), `<Profiler>` component API for programmatic measurements, and the "highlight updates" option in React DevTools',
      'Only `console.time()` around render calls',
      'React ships a built-in `window.__REACT_DEVTOOLS_PROFILER__` global',
    ],
    answer: 1,
    explanation:
      'React DevTools Profiler records all commits within a session and shows which components rendered, how long each took, and why ("what caused this render"). The `<Profiler id="App" onRender={callback}>` component lets you collect metrics programmatically in production (behind a flag). "Highlight updates" flashes components when they re-render in development.',
    tags: ['profiler', 'devtools', 'performance', 'React.Profiler'],
    year: 2024,
  },
  {
    id: 'ra-003',
    topic: 'react-advanced',
    difficulty: 'senior',
    type: 'true-false',
    question: 'Wrapping every component in `React.memo` and every function in `useCallback` is always a performance improvement.',
    answer: false,
    explanation:
      'Memoization has a cost: React must store the previous props/values and run a comparison on every render. For cheap components, the comparison cost can exceed the rendering cost. Over-memoization also makes code harder to read and maintain. The React Compiler (React 19) aims to apply optimal memoization automatically, making manual `memo`/`useCallback` largely unnecessary in the future.',
    tags: ['React.memo', 'useCallback', 'premature-optimization', 'performance'],
    year: 2024,
  },

  // --- Context API Patterns ---
  {
    id: 'ra-004',
    topic: 'react-advanced',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is "provider composition" and why is it used?',
    options: [
      'Nesting a single provider inside itself to create layered state',
      'Combining multiple context providers into a single wrapper component to keep the component tree clean and avoid "provider hell" (deeply nested providers)',
      'Composing React.memo with a context provider for performance',
      'A way to share a provider instance across micro-frontends',
    ],
    answer: 1,
    explanation:
      'Large apps often need multiple contexts (auth, theme, cart, i18n). Nesting them individually creates "provider hell": `<AuthProvider><ThemeProvider><CartProvider>...`. Provider composition extracts this into a single `<AppProviders>` component that composes all providers, keeping the root `App` clean. It can be implemented as a simple wrapper or using a `reduce` over a providers array.',
    tags: ['context', 'provider-composition', 'pattern', 'provider-hell'],
    year: 2024,
  },
  {
    id: 'ra-005',
    topic: 'react-advanced',
    difficulty: 'senior',
    type: 'mcq',
    question: 'How do you prevent a Context value object from causing unnecessary re-renders?',
    code: `// This causes every consumer to re-render on every parent render:
function AuthProvider({ children }) {
  const [user, setUser] = React.useState(null);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}`,
    options: [
      'Split the context into separate `UserContext` and `SetUserContext` and memoize the value object with `useMemo`',
      'Use `ReactDOM.flushSync` to batch the updates',
      'Add `React.memo` to the Provider component',
      'Use a `ref` instead of state inside the provider',
    ],
    answer: 0,
    explanation:
      'Every render of `AuthProvider` creates a new `{ user, setUser }` object, causing all consumers to re-render. Fix: `const value = useMemo(() => ({ user, setUser }), [user])`. Better: split into two contexts — one for the stable setter (`SetUserContext`) and one for the data (`UserContext`). Components that only dispatch never re-render when `user` changes.',
    tags: ['context', 'useMemo', 'performance', 're-render', 'pattern'],
    year: 2024,
  },

  // --- Suspense & Lazy Loading ---
  {
    id: 'ra-006',
    topic: 'react-advanced',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What does `React.lazy(() => import("./MyComponent"))` do?',
    options: [
      'Eagerly pre-loads the component bundle at app startup',
      'Creates a lazy component that code-splits `MyComponent` into a separate bundle loaded only when the component is first rendered',
      'Creates a server-side-only component',
      'Defers the component\'s rendering until the browser is idle',
    ],
    answer: 1,
    explanation:
      '`React.lazy` enables code splitting by dynamic `import()`. The component\'s code is bundled separately and fetched on demand. It must be wrapped in a `<Suspense fallback={...}>` boundary that shows the fallback while the bundle loads. This is the primary mechanism for route-level code splitting in React apps.',
    tags: ['React.lazy', 'code-splitting', 'Suspense', 'bundle'],
    year: 2024,
  },
  {
    id: 'ra-007',
    topic: 'react-advanced',
    difficulty: 'mid',
    type: 'mcq',
    question: 'Where can a `<Suspense>` boundary be placed relative to the lazy component?',
    options: [
      'It must be the direct parent of the lazy component',
      'It must be in the root `App` component only',
      'Anywhere above the component in the tree — React walks up the tree to find the nearest `<Suspense>` boundary',
      'Inside the lazy component itself',
    ],
    answer: 2,
    explanation:
      'React propagates the suspension up the component tree until it finds a `<Suspense>` boundary. You can place boundaries at different granularities: a coarse boundary at the route level shows a full-page spinner, while a fine-grained boundary near the suspended component shows a localized placeholder. Multiple boundaries provide better UX.',
    tags: ['Suspense', 'lazy-loading', 'boundaries'],
    year: 2024,
  },

  // --- Error Boundaries ---
  {
    id: 'ra-008',
    topic: 'react-advanced',
    difficulty: 'mid',
    type: 'mcq',
    question: 'Error Boundaries can be implemented as:',
    options: [
      'Any functional component that uses `useError()`',
      'Only class components that implement `static getDerivedStateFromError()` and/or `componentDidCatch()`',
      'Any component wrapped in `React.memo`',
      'Both class and functional components using the `try/catch` inside `useEffect`',
    ],
    answer: 1,
    explanation:
      'As of React 18, Error Boundaries must still be class components implementing `static getDerivedStateFromError(error)` (update state to show fallback) and/or `componentDidCatch(error, info)` (log errors). React 19 introduces `use()` and concurrent features, but the class-based Error Boundary API remains. Libraries like `react-error-boundary` provide a convenient wrapper component.',
    tags: ['error-boundaries', 'class-components', 'error-handling'],
    year: 2024,
  },
  {
    id: 'ra-009',
    topic: 'react-advanced',
    difficulty: 'senior',
    type: 'true-false',
    question: 'Error Boundaries catch errors thrown during event handlers.',
    answer: false,
    explanation:
      'Error Boundaries only catch errors in: the render method, constructor (class), and lifecycle methods. They do NOT catch errors in: event handlers (use try/catch manually), async code (setTimeout, fetch callbacks), server-side rendering, or errors thrown in the Error Boundary itself. For event handler errors, use regular try/catch and state to display error UI.',
    tags: ['error-boundaries', 'limitations', 'event-handlers'],
    year: 2024,
  },
  {
    id: 'ra-010',
    topic: 'react-advanced',
    difficulty: 'senior',
    type: 'mcq',
    question: 'How does the `react-error-boundary` library\'s `useErrorBoundary` hook improve on raw class Error Boundaries?',
    options: [
      'It enables error boundaries in functional components and provides `showBoundary(error)` to imperatively trigger the boundary from async code or event handlers',
      'It catches all async errors automatically without any configuration',
      'It replaces the need for Suspense entirely',
      'It provides automatic retry logic for failed renders',
    ],
    answer: 0,
    explanation:
      '`react-error-boundary` provides the `<ErrorBoundary>` class wrapper (with `FallbackComponent`, `onReset`, `resetKeys` props) and the `useErrorBoundary()` hook which exposes `showBoundary(error)`. This lets you manually trigger the boundary from event handlers or async operations — cases the built-in mechanism misses. `resetKeys` re-mounts the tree when specified values change.',
    tags: ['error-boundaries', 'react-error-boundary', 'useErrorBoundary'],
    year: 2024,
  },

  // --- React Server Components (RSC) ---
  {
    id: 'ra-011',
    topic: 'react-advanced',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is a React Server Component (RSC)?',
    options: [
      'A component that uses `useServer()` to fetch data on the client',
      'A component that runs only on the server, has zero JavaScript bundle cost on the client, can directly access databases/file system, and streams HTML/component payloads to the client',
      'Any component rendered with `ReactDOM.renderToString()`',
      'A component decorated with `export const runtime = "edge"`',
    ],
    answer: 1,
    explanation:
      'RSCs run exclusively on the server (or at build time). Their code is never shipped to the client bundle — no useEffect, no useState, no browser APIs. They can directly access databases, file systems, and secrets. They serialize their output (a React component tree, not HTML) which is streamed to the client and merged with Client Components. RSCs are a paradigm shift in React architecture, available via Next.js App Router.',
    tags: ['RSC', 'server-components', 'react-19', 'nextjs'],
    year: 2024,
  },
  {
    id: 'ra-012',
    topic: 'react-advanced',
    difficulty: 'senior',
    type: 'mcq',
    question: 'Which of the following CANNOT be used inside a React Server Component?',
    options: [
      'async/await for data fetching',
      '`useState`, `useEffect`, browser APIs, and event handlers',
      'Direct database queries',
      'Rendering Client Components as children',
    ],
    answer: 1,
    explanation:
      'RSCs run on the server and have no access to the browser environment. They cannot use: state (useState, useReducer), effects (useEffect), browser APIs (window, document), event handlers (onClick), or any hook that requires client-side runtime. They CAN be async, fetch data, import server-only modules, and pass serializable props to Client Components.',
    tags: ['RSC', 'server-components', 'limitations', 'hooks'],
    year: 2024,
  },
  {
    id: 'ra-013',
    topic: 'react-advanced',
    difficulty: 'lead',
    type: 'mcq',
    question: 'What is the RSC "boundary" rule regarding Server and Client Components?',
    options: [
      'Server Components can import Client Components; Client Components CANNOT import Server Components (but can receive them as props/children)',
      'Client Components can import Server Components freely',
      'Server and Client Components cannot share any data',
      'There is no boundary — they can be freely mixed',
    ],
    answer: 0,
    explanation:
      'The RSC boundary: Server Components can import and render Client Components (by placing `"use client"` at the top of a file). Client Components cannot import Server Components because client code is bundled and sent to the browser — there is no server module system there. However, a Client Component CAN receive a Server Component as `children` or a prop, since the Server Component is already rendered to a payload by the time it reaches the Client Component.',
    tags: ['RSC', 'use-client', 'boundaries', 'architecture'],
    year: 2024,
  },

  // --- React Compiler (React 19) ---
  {
    id: 'ra-014',
    topic: 'react-advanced',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is the React Compiler introduced in React 19?',
    options: [
      'A TypeScript compiler plugin that converts `.tsx` to `.js`',
      'A build-time tool that automatically memoizes components and values, eliminating the need for manual `React.memo`, `useMemo`, and `useCallback` in most cases',
      'A runtime JIT compiler that speeds up virtual DOM diffing',
      'A new JSX parser that replaces Babel',
    ],
    answer: 1,
    explanation:
      'The React Compiler (formerly "React Forget") analyzes your component code at build time and automatically inserts optimal memoization. It understands React\'s rules (pure renders, stable references) and generates equivalent code to manually written `useMemo`/`useCallback`/`React.memo`. It requires your components to follow React\'s rules (no mutations, no side effects in render). This makes manual memoization largely unnecessary for code it can analyze.',
    tags: ['react-compiler', 'react-19', 'memoization', 'build-tool'],
    year: 2024,
  },
  {
    id: 'ra-015',
    topic: 'react-advanced',
    difficulty: 'lead',
    type: 'mcq',
    question: 'What code patterns prevent the React Compiler from optimizing a component?',
    options: [
      'Using hooks — the compiler does not support hooks',
      'Mutating props or state directly, reading from global mutable state, or violating React\'s rules of purity in the render path',
      'Using TypeScript generics or complex types',
      'The compiler optimizes all components without any restrictions',
    ],
    answer: 1,
    explanation:
      'The React Compiler can only safely memoize components that follow React\'s rules: pure render functions (no side effects during render), no mutations of props/state/arrays/objects passed in. If it detects violations, it "bails out" and skips that component. The `// @skip` comment can also opt out specific files. ESLint\'s `eslint-plugin-react-compiler` catches violations.',
    tags: ['react-compiler', 'react-19', 'purity', 'rules'],
    year: 2024,
  },

  // --- Concurrent Features ---
  {
    id: 'ra-016',
    topic: 'react-advanced',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What does React\'s Concurrent Mode enable that is not possible in the legacy synchronous rendering model?',
    options: [
      'Running multiple React instances on the same page',
      'Interruptible rendering — React can pause, resume, or discard in-progress renders to keep the UI responsive to high-priority user input',
      'Parallel JavaScript execution using Web Workers',
      'Automatic code splitting of every component',
    ],
    answer: 1,
    explanation:
      'In synchronous (legacy) mode, once React starts rendering it runs to completion, blocking the main thread. Concurrent Mode makes rendering interruptible: high-priority updates (user typing) can interrupt low-priority renders (search results). React uses a priority queue (Scheduler) to manage work. This enables features like Suspense, `useTransition`, `useDeferredValue`, and streaming SSR.',
    tags: ['concurrent-mode', 'interruptible-rendering', 'scheduler', 'react-18'],
    year: 2024,
  },
  {
    id: 'ra-017',
    topic: 'react-advanced',
    difficulty: 'senior',
    type: 'code-output',
    question: 'What does the user experience when typing in the input while the heavy list renders?',
    code: `function SearchPage() {
  const [input, setInput] = React.useState('');
  const [query, setQuery] = React.useState('');
  const [isPending, startTransition] = React.useTransition();

  function handleChange(e) {
    setInput(e.target.value);
    startTransition(() => {
      setQuery(e.target.value);
    });
  }

  return (
    <>
      <input value={input} onChange={handleChange} />
      {isPending && <Spinner />}
      <HeavyList filter={query} />
    </>
  );
}`,
    options: [
      'The input is blocked until `HeavyList` finishes re-rendering',
      'The input updates immediately (urgent), a spinner shows, and `HeavyList` re-renders in the background as a low-priority transition without blocking input',
      'Both input and list update synchronously with no visual difference',
      'A runtime error — `startTransition` cannot wrap `setState` calls',
    ],
    answer: 1,
    explanation:
      '`setInput` is urgent — the input reflects keystrokes immediately. `setQuery` is wrapped in `startTransition`, marking the `HeavyList` re-render as non-urgent. React can interrupt it if the user types again. `isPending` shows a spinner while the transition is in progress. The result: a responsive input with a gracefully deferred expensive render.',
    tags: ['useTransition', 'concurrent', 'startTransition', 'performance'],
    year: 2024,
  },

  // --- Render Props Pattern ---
  {
    id: 'ra-018',
    topic: 'react-advanced',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is the render props pattern?',
    options: [
      'Passing a JSX element as a prop named `render`',
      'A technique where a component receives a function as a prop that it calls to determine what to render, sharing behavior/state while delegating rendering to the consumer',
      'Using `React.cloneElement` to inject props into children',
      'Rendering props directly to the DOM using `dangerouslySetInnerHTML`',
    ],
    answer: 1,
    explanation:
      'Render props share stateful logic by passing a `render` (or `children`) function prop: `<Mouse render={({ x, y }) => <Cursor x={x} y={y} />} />`. The `Mouse` component manages position state and calls `render(state)`. The consumer decides what to render. Hooks largely supersede this pattern but render props remain useful for non-hook contexts.',
    tags: ['render-props', 'pattern', 'composition', 'HOC'],
    year: 2024,
  },

  // --- Compound Components ---
  {
    id: 'ra-019',
    topic: 'react-advanced',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is the compound component pattern and what problem does it solve?',
    code: `// Usage example:
<Select value={selected} onChange={setSelected}>
  <Select.Option value="a">Option A</Select.Option>
  <Select.Option value="b">Option B</Select.Option>
</Select>`,
    options: [
      'It combines multiple components into a single file',
      'A pattern where a parent component implicitly shares state with its child components (often via Context or `React.cloneElement`), giving consumers flexible composition without prop drilling',
      'A way to extend native HTML elements with custom behavior',
      'It is the same as the render props pattern',
    ],
    answer: 1,
    explanation:
      'Compound components (`<Select>`, `<Select.Option>`) work together as a unit. The parent manages state and shares it with sub-components via Context (or `cloneElement`), without consumers needing to explicitly wire state through props. This gives consumers control over structure and rendering order while keeping state logic encapsulated. Examples: `<Tabs>/<Tab>`, `<Accordion>/<AccordionItem>`, `<Menu>/<MenuItem>`.',
    tags: ['compound-components', 'pattern', 'context', 'API-design'],
    year: 2024,
  },

  // --- HOC Patterns ---
  {
    id: 'ra-020',
    topic: 'react-advanced',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is a Higher-Order Component (HOC)?',
    options: [
      'A component with more than 100 lines of code',
      'A function that takes a component and returns a new enhanced component, adding behavior like logging, auth checks, or data fetching without modifying the original',
      'Any component at the root level of the tree',
      'A component that renders other components via `React.createElement`',
    ],
    answer: 1,
    explanation:
      'HOCs follow the decorator pattern: `const EnhancedComponent = withAuth(MyComponent)`. The HOC wraps the component, adds cross-cutting concerns (auth, analytics, error handling), and renders the wrapped component with additional or modified props. Hooks largely replace HOCs for new code, but HOCs remain common in legacy codebases and for wrapping class components.',
    tags: ['HOC', 'higher-order-component', 'pattern', 'composition'],
    year: 2024,
  },
  {
    id: 'ra-021',
    topic: 'react-advanced',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is the "wrapper hell" problem with HOCs and how do hooks solve it?',
    options: [
      'HOCs create deeply nested component trees in DevTools, making debugging hard. Hooks flatten the component tree by co-locating logic in the component itself without adding wrapper layers.',
      'HOCs prevent TypeScript inference — hooks do not',
      'HOCs cause memory leaks; hooks do not',
      'There is no difference — hooks are just syntactic sugar for HOCs',
    ],
    answer: 0,
    explanation:
      'Composing multiple HOCs (`withAuth(withTheme(withLogger(MyComponent)))`) adds wrapper layers to the React tree, making DevTools hard to read and source attribution difficult. Custom hooks achieve the same logic reuse (`const auth = useAuth(); const theme = useTheme()`) within the component body, keeping the tree flat and the logic traceable.',
    tags: ['HOC', 'hooks', 'wrapper-hell', 'custom-hooks', 'comparison'],
    year: 2024,
  },

  // --- React 19: use(), Actions, useFormStatus, useOptimistic ---
  {
    id: 'ra-022',
    topic: 'react-advanced',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What are "Actions" in React 19?',
    options: [
      'Redux-style action objects dispatched to a global store',
      'Async functions passed to form `action` props or `useTransition`/`startTransition`. React automatically handles pending state, errors, and optimistic updates for them.',
      'Server-side functions defined in Next.js route handlers',
      'Event handler functions that return a Promise',
    ],
    answer: 1,
    explanation:
      'React 19 formalizes the concept of "Actions" — async functions that handle form submissions and mutations. By convention, functions that use transitions are called Actions. React provides: `useFormStatus` (pending state of parent form), `useActionState` (form action state), and `useOptimistic` (optimistic UI). They integrate with the `<form action={asyncFn}>` pattern in both client and server contexts.',
    tags: ['react-19', 'actions', 'forms', 'async'],
    year: 2024,
  },
  {
    id: 'ra-023',
    topic: 'react-advanced',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What does `useOptimistic` do in React 19?',
    code: `const [optimisticMessages, addOptimisticMessage] = useOptimistic(
  messages,
  (state, newMessage) => [...state, { text: newMessage, sending: true }]
);`,
    options: [
      'Defers state updates until the network request resolves',
      'Immediately shows an optimistic (speculative) UI update while an async action is in progress, then reverts to the actual server state when the action completes or errors',
      'Batches multiple state updates into one render',
      'Caches the result of an async function',
    ],
    answer: 1,
    explanation:
      '`useOptimistic` takes the real state and an update function. When you call the setter during an async action, it immediately applies the optimistic update to the UI (e.g., showing a message as "sending"). React automatically reverts to the real state (from the actual `messages` prop) once the action finishes — successfully (server state takes over) or on error (reverts). This is the standard pattern for chat apps, like/unlike buttons, and form submissions.',
    tags: ['useOptimistic', 'react-19', 'optimistic-ui', 'actions'],
    year: 2024,
  },
  {
    id: 'ra-024',
    topic: 'react-advanced',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What does `useFormStatus` return and how is it used?',
    options: [
      'It returns the current form\'s validation errors',
      'It must be called inside a component that is a child of a `<form>`, and returns `{ pending, data, method, action }` — particularly useful for disabling submit buttons during async form submissions',
      'It replaces the need for `onSubmit` handlers entirely',
      'It returns a ref to the form DOM element',
    ],
    answer: 1,
    explanation:
      '`useFormStatus` is designed for submit button components: wrap the button in its own component, call `useFormStatus()` there, and use `pending` to disable the button while the form action is in progress. It reads from the nearest parent `<form>`. It cannot be called in the same component that renders the form — it must be in a child component to avoid circular data flow.',
    tags: ['useFormStatus', 'react-19', 'forms', 'pending'],
    year: 2024,
  },
  {
    id: 'ra-025',
    topic: 'react-advanced',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is `useActionState` (React 19) and what does it replace?',
    code: `const [state, formAction, isPending] = useActionState(
  async (prevState, formData) => {
    const result = await submitForm(formData);
    return result;
  },
  { error: null, data: null }
);`,
    options: [
      'It replaces `useState` for all async operations',
      'Manages the state of an async action (previous state, action function, pending flag). Previously required manual `useState` + try/catch + pending state wiring. Formerly called `useFormState` in the React canary.',
      'It only works with native HTML forms and `FormData`',
      'It replaces `useReducer` for all form state',
    ],
    answer: 1,
    explanation:
      '`useActionState` wires together the previous state, an async action function, and an `isPending` flag. The action receives `(prevState, formData)` and returns the new state. React handles the async lifecycle. Pass `formAction` directly to a `<form action={formAction}>`. This replaces the repetitive pattern of managing loading/error/data state manually around a form submission.',
    tags: ['useActionState', 'react-19', 'forms', 'async'],
    year: 2024,
  },

  // --- use() hook in React 19 ---
  {
    id: 'ra-026',
    topic: 'react-advanced',
    difficulty: 'lead',
    type: 'mcq',
    question: 'How does `use(promise)` interact with Suspense and Error Boundaries?',
    code: `function UserCard({ userPromise }) {
  const user = use(userPromise); // may suspend or throw
  return <div>{user.name}</div>;
}

// Usage:
<ErrorBoundary fallback={<p>Error!</p>}>
  <Suspense fallback={<Spinner />}>
    <UserCard userPromise={fetchUser(id)} />
  </Suspense>
</ErrorBoundary>`,
    options: [
      '`use()` catches the error and returns `null` on rejection',
      'While the promise is pending, `use()` suspends the component (shows Suspense fallback). On rejection, it throws the error (caught by Error Boundary). On resolution, it returns the value.',
      '`use()` always needs an `.catch()` handler on the promise',
      'The component renders twice — once with undefined, once with the resolved value',
    ],
    answer: 1,
    explanation:
      '`use(promise)` follows the Suspense protocol: a pending promise triggers a suspend (the component "pauses" and the nearest `<Suspense>` shows its `fallback`). When the promise resolves, React re-renders the component with the value. On rejection, React throws the error, and the nearest Error Boundary catches it. This is the foundation of the data-fetching pattern in React 19.',
    tags: ['use', 'react-19', 'Suspense', 'ErrorBoundary', 'promises'],
    year: 2024,
  },

  // --- Streaming SSR & Hydration ---
  {
    id: 'ra-027',
    topic: 'react-advanced',
    difficulty: 'lead',
    type: 'mcq',
    question: 'What is "selective hydration" in React 18+?',
    options: [
      'Hydrating only components that have event listeners',
      'React streams HTML and can start hydrating ready parts of the page before the entire HTML/JS is downloaded. Components wrapped in `<Suspense>` can be hydrated independently, and React prioritizes hydrating parts the user interacts with.',
      'A technique where only the visible viewport is hydrated',
      'Skipping hydration for static components using `React.memo`',
    ],
    answer: 1,
    explanation:
      'React 18 introduced streaming SSR + selective hydration: the server streams HTML chunks as data becomes available (Suspense boundaries act as flush points). On the client, React can hydrate multiple independent subtrees in parallel. If the user clicks on a not-yet-hydrated component, React prioritizes hydrating that subtree first. This dramatically improves Time to Interactive for large pages.',
    tags: ['selective-hydration', 'SSR', 'react-18', 'streaming', 'performance'],
    year: 2024,
  },

  // --- Advanced Rendering Patterns ---
  {
    id: 'ra-028',
    topic: 'react-advanced',
    difficulty: 'senior',
    type: 'debug',
    question: 'Why does this component have inconsistent behavior and how do you fix it?',
    code: `// Anti-pattern: creating a component inside another component
function ParentList({ items }) {
  function ItemRow({ item }) {
    return <li>{item.name}</li>;
  }

  return (
    <ul>
      {items.map(item => (
        <ItemRow key={item.id} item={item} />
      ))}
    </ul>
  );
}`,
    options: [
      'No issue — defining components inside other components is a valid pattern',
      'Bug: `ItemRow` is recreated on every render of `ParentList`. React sees a new component type on each render, unmounts and remounts every list item (destroying state, focus, and animations). Fix: move `ItemRow` outside `ParentList` to the module scope.',
      'Bug: `key` should be placed on `ItemRow` itself, not passed as a prop',
      'Bug: arrow functions should be used instead of function declarations',
    ],
    answer: 1,
    explanation:
      'Defining a component inside another component\'s render body means a new function reference is created every render. React uses the element type for reconciliation — a new type means teardown + remount. This resets all state and kills in-progress animations/transitions. Always define sub-components at the module level (or use `useMemo` in extreme cases).',
    tags: ['performance', 'reconciliation', 'component-definition', 'anti-pattern'],
    year: 2024,
  },
  {
    id: 'ra-029',
    topic: 'react-advanced',
    difficulty: 'lead',
    type: 'mcq',
    question: 'What is the "state colocation" principle and how does it improve performance?',
    options: [
      'All state should live in a global Redux store',
      'State should be placed as close as possible to the components that use it. This narrows the re-render scope — when state changes, only the component and its children re-render, not distant parts of the tree.',
      'State should always be co-located with its data source (API)',
      'Co-locating state means placing it in the same file as the component',
    ],
    answer: 1,
    explanation:
      'Moving state to the component that needs it (rather than hoisting everything to the root) limits re-renders to the minimal subtree. Example: a modal\'s open/close state belongs in the modal trigger, not in `App`. When the state changes, only the modal subtree re-renders. This is a fundamental performance optimization often more impactful than memoization.',
    tags: ['state-colocation', 'performance', 'architecture', 're-render'],
    year: 2024,
  },
  {
    id: 'ra-030',
    topic: 'react-advanced',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is "lifting state up" and when is it needed?',
    options: [
      'Moving state from a class component to a functional component',
      'Moving state from a child component to the closest common ancestor when multiple sibling components need to share or synchronize that state',
      'Storing state in the URL instead of React state',
      'Migrating local state to a global Redux store',
    ],
    answer: 1,
    explanation:
      'When two sibling components need to share state, move the state to their lowest common ancestor. The ancestor holds the state and passes it down via props. This is a fundamental React pattern. The trade-off: lifting state can cause the ancestor (and all its other children) to re-render. Mitigate with `React.memo` on siblings or by using Context for deeply nested sharing.',
    tags: ['lifting-state', 'state-sharing', 'architecture', 'props'],
    year: 2024,
  },
  {
    id: 'ra-031',
    topic: 'react-advanced',
    difficulty: 'lead',
    type: 'mcq',
    question: 'What is the React "tearing" problem in concurrent rendering?',
    options: [
      'A visual glitch where components partially unmount during transitions',
      'When an external mutable store (not React state) is read during a concurrent render that is interrupted and resumed, different parts of the UI may read different versions of the store, displaying inconsistent data',
      'When two components render the same state value with different formatting',
      'A hydration mismatch between server and client',
    ],
    answer: 1,
    explanation:
      'In concurrent mode, React can pause and resume renders. If a component reads from an external mutable store (e.g., a vanilla JS object, Redux without `useSyncExternalStore`), and the store mutates between render phases, one part of the UI might show old data and another new data — a "tear". The solution is `useSyncExternalStore` (React 18), which ensures consistent store snapshots during concurrent renders. This is why all state management libraries updated to use it.',
    tags: ['tearing', 'concurrent-mode', 'useSyncExternalStore', 'external-store'],
    year: 2024,
  },
  {
    id: 'ra-032',
    topic: 'react-advanced',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is `useSyncExternalStore` and who should use it?',
    options: [
      'A hook for subscribing to React Context with synchronous updates',
      'A hook for state management library authors to safely subscribe to external mutable stores in concurrent React, receiving consistent snapshots and triggering re-renders on changes',
      'A replacement for `useEffect` for subscribing to browser APIs',
      'A way to synchronize state between browser tabs',
    ],
    answer: 1,
    explanation:
      '`useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)` is the official API for reading from any external store (Redux, Zustand, Valtio, browser APIs like `navigator.onLine`). It ensures: (1) consistent snapshot during renders (no tearing), (2) re-render when the store changes (via the `subscribe` callback), (3) SSR support (via `getServerSnapshot`). Most app developers use it indirectly through their state management library.',
    tags: ['useSyncExternalStore', 'external-store', 'concurrent', 'state-management'],
    year: 2024,
  },

  // --- Server vs Client Component boundaries ---
  {
    id: 'react-adv-033',
    topic: 'react-advanced',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What does adding `"use client"` at the top of a file do in the React Server Components model?',
    options: [
      'It marks the file as a browser-only polyfill',
      'It declares a Client Component boundary: the file and everything it imports are bundled for the browser. React renders this subtree on the client with hydration, enabling hooks, state, and browser APIs.',
      'It opts the component out of Server-Side Rendering entirely',
      'It causes the component to render only on the client with no SSR fallback',
    ],
    answer: 1,
    explanation:
      '`"use client"` is a module-level directive that defines the boundary between server and client code. Files with this directive are included in the client JS bundle. Everything imported by a `"use client"` file is also treated as client code. Server Components above the boundary can pass serializable props down to Client Components. State, effects, and browser APIs are only available in `"use client"` components.',
    tags: ['RSC', 'use-client', 'boundaries', 'server-components', 'nextjs'],
    year: 2025,
  },

  // --- Server Actions ---
  {
    id: 'react-adv-034',
    topic: 'react-advanced',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is a Server Action in React 19 / Next.js App Router and how is it invoked?',
    options: [
      'A Server Action is a REST endpoint defined with Express.js',
      'A Server Action is an async function marked with `"use server"` that runs exclusively on the server. It can be passed to `<form action={}>`, called directly from Client Components, or used with `useActionState`.',
      'A Server Action is a React Server Component that returns null',
      'Server Actions replace API routes entirely and run in the browser',
    ],
    answer: 1,
    explanation:
      '`"use server"` (either at the top of a file or at the top of an async function) marks Server Actions. They execute on the server and can mutate data, call databases, or interact with server-only resources. When passed to a `<form action>`, the form triggers the server function on submit. When called from a Client Component, React serializes arguments over a network request. They integrate with `useActionState` and `useOptimistic` for state management.',
    tags: ['server-actions', 'use-server', 'react-19', 'forms', 'nextjs'],
    year: 2025,
  },

  // --- Streaming SSR with Suspense ---
  {
    id: 'react-adv-035',
    topic: 'react-advanced',
    difficulty: 'senior',
    type: 'mcq',
    question: 'How does `<Suspense>` enable streaming SSR in React 18+?',
    options: [
      'Suspense pauses the entire server response until all data is ready',
      'Suspense boundaries act as flush points: React streams the initial HTML shell immediately, then streams each Suspense boundary\'s content as its data resolves, allowing the browser to progressively render the page',
      'Suspense only affects client-side rendering and has no SSR impact',
      'Streaming SSR requires a separate `createStreamingRoot` API, not Suspense',
    ],
    answer: 1,
    explanation:
      'In React 18 streaming SSR (`renderToPipeableStream` / `renderToReadableStream`), `<Suspense>` boundaries are chunk boundaries. The outer HTML shell (navigation, layout) is sent immediately. For each `<Suspense>` boundary, React sends a placeholder (`<template id="B:1">`) and later flushes the resolved content as an inline `<script>` that swaps it in. This means the browser can start painting and hydrating immediately instead of waiting for all server data.',
    tags: ['streaming-SSR', 'Suspense', 'react-18', 'renderToPipeableStream'],
    year: 2025,
  },

  // --- Selective hydration ---
  {
    id: 'react-adv-036',
    topic: 'react-advanced',
    difficulty: 'lead',
    type: 'mcq',
    question: 'What happens when a user clicks on a part of the page that has not yet been hydrated in React 18 selective hydration?',
    options: [
      'The click is lost and the user must click again after hydration',
      'React synchronously hydrates the clicked component first (highest priority), then continues hydrating the rest of the page in the background',
      'The entire page hydration is paused until the user stops clicking',
      'The click triggers a full page reload',
    ],
    answer: 1,
    explanation:
      'React 18 selective hydration prioritizes user interaction. If a user clicks, focuses, or otherwise interacts with a subtree that is not yet hydrated, React immediately bumps that subtree to the top of the hydration queue and synchronously hydrates it before firing the event. This ensures interactivity without losing user intent. The rest of the page continues hydrating in the background at lower priority.',
    tags: ['selective-hydration', 'react-18', 'SSR', 'hydration', 'priority'],
    year: 2025,
  },

  // --- React Compiler detailed behavior ---
  {
    id: 'react-adv-037',
    topic: 'react-advanced',
    difficulty: 'lead',
    type: 'mcq',
    question: 'How does the React Compiler decide what to memoize, and what does it produce?',
    options: [
      'It wraps every component in `React.memo` and every value in `useMemo`',
      'It performs static analysis of each component, identifies values and props that are stable between renders, and generates inlined memoization equivalent to manual `useMemo`/`useCallback`/`React.memo` — but only for code that follows React\'s rules of purity',
      'It converts class components to functional components automatically',
      'It only memoizes components marked with a `// @memo` comment',
    ],
    answer: 1,
    explanation:
      'The React Compiler (formerly React Forget) does data-flow analysis within component and hook bodies. It tracks which values depend on which inputs and automatically inserts granular caching — finer-grained than manual `useMemo`. It does NOT blindly wrap everything; it generates targeted caching only where it can prove safety. If a component mutates state directly or reads from a global mutable variable in render, the compiler "bails out" and leaves that component uncompiled.',
    tags: ['react-compiler', 'react-19', 'memoization', 'static-analysis'],
    year: 2025,
  },

  // --- React Compiler: "bails out" scenarios ---
  {
    id: 'react-adv-038',
    topic: 'react-advanced',
    difficulty: 'lead',
    type: 'true-false',
    question: 'If the React Compiler cannot safely optimize a component (e.g., due to a mutation), it throws a build error and prevents compilation.',
    answer: false,
    explanation:
      'The React Compiler never throws on "impure" components — it simply skips (bails out of) optimizing them and leaves the component code as-is. The rest of the application is still compiled and optimized. You can also explicitly opt out individual files or components with `// @skip` (or configure `compilationMode: "annotation"` to require explicit opt-in). This makes adoption incremental and safe.',
    tags: ['react-compiler', 'react-19', 'bail-out', 'opt-out'],
    year: 2025,
  },

  // --- Taint API ---
  {
    id: 'react-adv-039',
    topic: 'react-advanced',
    difficulty: 'lead',
    type: 'mcq',
    question: 'What is the React Taint API (`experimental_taintObjectReference`, `experimental_taintUniqueValue`) used for?',
    options: [
      'Marking components as deprecated for future removal',
      'Preventing sensitive server-side objects (API keys, user tokens, PII) from accidentally being passed to Client Components by throwing an error at the RSC boundary if a tainted value is serialized',
      'Flagging stale state values that need to be refreshed',
      'Marking third-party components as untrusted for sandboxing',
    ],
    answer: 1,
    explanation:
      'The Taint API is a security primitive for the RSC model. `taintObjectReference(message, object)` marks a server-side object so React throws an error if any part of it is passed to a Client Component. `taintUniqueValue(message, lifetime, value)` taints primitive values like tokens or keys. This acts as a last line of defense: if you accidentally write `<ClientComponent user={userWithPassword} />`, React errors rather than silently sending the password to the browser.',
    tags: ['taint-API', 'RSC', 'security', 'react-19', 'experimental'],
    year: 2025,
  },

  // --- Asset loading APIs ---
  {
    id: 'react-adv-040',
    topic: 'react-advanced',
    difficulty: 'lead',
    type: 'mcq',
    question: 'What do the `ReactDOM.preload` and `ReactDOM.preinit` APIs (React 19) do?',
    options: [
      'They replace `<link rel="preload">` and `<script>` tags in the HTML template',
      '`preload(href, options)` hints the browser to fetch a resource (font, image, script) early without executing it. `preinit(href, options)` fetches AND executes a script or applies a stylesheet. Both can be called anywhere in the React tree and React deduplicates them.',
      'They are SSR-only APIs for streaming asset manifests',
      'They configure Webpack code splitting for dynamic imports',
    ],
    answer: 1,
    explanation:
      'React 19 introduces imperative resource loading APIs: `ReactDOM.preload(href, { as: "font" })` emits `<link rel="preload">` for early resource discovery without execution. `ReactDOM.preinit(href, { as: "script" })` fetches and executes the resource eagerly. `ReactDOM.prefetchDNS(href)` and `ReactDOM.preconnect(href)` are also available. Called anywhere in a component tree, React deduplicates them and hoists the appropriate tags into `<head>` on both server and client.',
    tags: ['asset-loading', 'preload', 'preinit', 'react-19', 'performance'],
    year: 2025,
  },

  // --- Document metadata in components ---
  {
    id: 'react-adv-041',
    topic: 'react-advanced',
    difficulty: 'mid',
    type: 'mcq',
    question: 'In React 19, if two components both render `<title>My Page</title>` and `<title>Other Title</title>`, which one wins?',
    options: [
      'Both are rendered and the browser uses the last one',
      'React de-duplicates and uses the one closest to the leaf (deepest) component in the tree — respecting the most specific title',
      'React throws a warning and uses neither',
      'The order of rendering determines which `<title>` appears, with later renders overwriting earlier ones',
    ],
    answer: 1,
    explanation:
      'React 19 applies specificity rules to hoisted metadata: the deepest (most specific) `<title>` in the component tree wins, mirroring how CSS specificity works. This allows a page-level default title in a layout component to be overridden by a route-specific component. For `<meta name>`, duplicate names are de-duplicated with the same deepest-wins rule. For `<link>` and `<script>`, deduplication is by href/src.',
    tags: ['document-metadata', 'react-19', 'title', 'deduplication', 'head'],
    year: 2025,
  },

  // --- Activity / Offscreen ---
  {
    id: 'react-adv-042',
    topic: 'react-advanced',
    difficulty: 'lead',
    type: 'mcq',
    question: 'What is the React `<Activity>` (formerly `<Offscreen>`) component and what problem does it solve?',
    options: [
      'A component for tracking user engagement analytics',
      'An experimental component that can "hide" a subtree (keeping it in memory but unmounting from the DOM visually), then "show" it again without losing state. Useful for tabs, virtualized lists, and pre-rendering future navigation targets.',
      'A replacement for `React.lazy` for eager preloading',
      'A component that moves rendering to a background Web Worker',
    ],
    answer: 1,
    explanation:
      '`<Activity mode="hidden">` keeps a component subtree alive in React\'s memory while hiding its DOM output — effects are paused/cleaned up when hidden and restored when shown, but state is preserved. This enables zero-latency tab switching (the tab content is pre-rendered), background pre-rendering of upcoming routes, and recycling expensive component instances. It is still experimental (as of React 19) and the API may change.',
    tags: ['Activity', 'Offscreen', 'react-19', 'experimental', 'performance'],
    year: 2025,
  },

  // --- Fine-grained reactivity vs React model ---
  {
    id: 'react-adv-043',
    topic: 'react-advanced',
    difficulty: 'lead',
    type: 'mcq',
    question: 'What is the fundamental difference between fine-grained reactivity (signals, as in Solid.js or Angular Signals) and React\'s re-render model?',
    options: [
      'Fine-grained reactivity is always faster — React should adopt it fully',
      'React re-renders the component function top-to-bottom when state changes (coarse-grained); fine-grained reactivity tracks exact subscriptions between state atoms and DOM nodes, updating only the precise DOM nodes that depend on changed values — with no component re-render overhead',
      'They are identical architecturally — only the syntax differs',
      'React uses fine-grained reactivity internally via the Fiber reconciler',
    ],
    answer: 1,
    explanation:
      'In React, a state change schedules a re-render of the component that owns the state (and potentially its subtree). The component function runs again and React diffs the output. In fine-grained systems (Solid.js signals, MobX observables, Angular signals), each signal tracks which expressions depend on it. When a signal changes, only those specific DOM expressions update — no component function call at all. This eliminates virtual DOM diffing overhead. The React Compiler approaches this by eliminating unnecessary re-renders via memoization, but the programming model (component re-render as the unit of work) remains fundamentally different.',
    tags: ['signals', 'fine-grained-reactivity', 'solid-js', 'react-model', 'architecture'],
    year: 2025,
  },

  // --- Server Components vs Client Components: data fetching ---
  {
    id: 'react-adv-044',
    topic: 'react-advanced',
    difficulty: 'senior',
    type: 'mcq',
    question: 'Why is data fetching in Server Components (async/await directly) better than `useEffect` + `useState` in Client Components for initial page data?',
    options: [
      'Server Components use a faster network connection',
      'Server Components eliminate client-server waterfalls: data fetches happen on the server co-located with the database, the component renders to a payload before being sent, and the client receives ready-to-display data with no loading spinners for initial load',
      'Server Components cache all responses automatically in localStorage',
      'There is no difference — both patterns have equivalent performance',
    ],
    answer: 1,
    explanation:
      'With `useEffect` + `useState`, the client must: (1) download JS, (2) render a loading skeleton, (3) make a network round-trip to an API, (4) re-render with data. Each step adds latency. Server Components run on the server (close to the database), fetch data during the server render, and send the completed component payload to the client. No client-side fetch, no loading state, no waterfall. The client receives JSX that is already populated with data.',
    tags: ['RSC', 'server-components', 'data-fetching', 'performance', 'waterfall'],
    year: 2025,
  },

  // --- useActionState with server actions ---
  {
    id: 'react-adv-045',
    topic: 'react-advanced',
    difficulty: 'senior',
    type: 'code-output',
    question: 'What happens when this form is submitted and the server action returns `{ error: "Name required" }`?',
    code: `async function createUser(prevState, formData) {
  'use server';
  const name = formData.get('name');
  if (!name) return { error: 'Name required' };
  await db.users.create({ name });
  return { error: null };
}

function UserForm() {
  const [state, formAction, isPending] = useActionState(createUser, { error: null });
  return (
    <form action={formAction}>
      <input name="name" />
      {state.error && <p>{state.error}</p>}
      <button disabled={isPending}>Create</button>
    </form>
  );
}`,
    options: [
      'The form throws an unhandled error',
      '`state` becomes `{ error: "Name required" }`, React re-renders the form, and `<p>Name required</p>` is displayed. `isPending` returns to `false`.',
      'The form resets and the error is ignored',
      '`isPending` stays `true` indefinitely after an error',
    ],
    answer: 1,
    explanation:
      '`useActionState` uses the return value of the action as the new state. When the server action returns `{ error: "Name required" }`, React updates `state` to that value and triggers a re-render. `state.error && <p>...</p>` renders the error message. `isPending` correctly returns to `false` after the action completes (whether success or error). This is the complete React 19 form error handling pattern without any manual state management.',
    tags: ['useActionState', 'server-actions', 'react-19', 'forms', 'error-handling'],
    year: 2025,
  },

  // --- React Compiler: components it cannot optimize ---
  {
    id: 'react-adv-046',
    topic: 'react-advanced',
    difficulty: 'lead',
    type: 'mcq',
    question: 'The React Compiler successfully memoizes a component. What change would cause it to "bail out" and stop optimizing that component?',
    options: [
      'Adding a new `useState` hook',
      'Mutating a prop directly: `props.items.push(newItem)` inside the render function — this violates React\'s purity rule and makes the component\'s output non-deterministic with respect to its inputs',
      'Using more than 10 hooks in the component',
      'Importing a third-party library inside the component',
    ],
    answer: 1,
    explanation:
      'The React Compiler requires component render functions to be pure (same inputs → same output, no side effects). Mutating `props.items` (or any passed-in array/object) in render makes the output depend on mutation history rather than current inputs, breaking the compiler\'s caching guarantees. The compiler detects this violation and bails out of optimizing the component. Other bail-out triggers: reading from global mutable variables, non-deterministic functions (`Math.random()`, `Date.now()`) in render without stabilization.',
    tags: ['react-compiler', 'react-19', 'purity', 'mutation', 'bail-out'],
    year: 2025,
  },

  // --- Streaming SSR: renderToPipeableStream ---
  {
    id: 'react-adv-047',
    topic: 'react-advanced',
    difficulty: 'lead',
    type: 'mcq',
    question: 'What is the difference between `renderToString` and `renderToPipeableStream` for SSR?',
    options: [
      '`renderToString` is asynchronous; `renderToPipeableStream` is synchronous',
      '`renderToString` blocks until the entire HTML string is ready (no streaming, no Suspense support). `renderToPipeableStream` streams HTML chunks as Suspense boundaries resolve, reducing Time to First Byte and enabling progressive hydration.',
      'They produce identical output — only the API differs',
      '`renderToPipeableStream` is only available in Next.js',
    ],
    answer: 1,
    explanation:
      '`renderToString` is synchronous: all `async` data must be resolved before calling it, often requiring upfront data loading. It returns a complete HTML string. `renderToPipeableStream` (Node.js) / `renderToReadableStream` (edge/web streams) pipe HTML chunks as they become available. Suspense boundaries stream content when data resolves. The `onShellReady` callback fires when the initial HTML shell is ready to pipe, enabling fast TTFB while deeper content streams in.',
    tags: ['SSR', 'renderToPipeableStream', 'renderToString', 'streaming', 'react-18'],
    year: 2025,
  },

  // --- Concurrent rendering: tearing revisited ---
  {
    id: 'react-adv-048',
    topic: 'react-advanced',
    difficulty: 'lead',
    type: 'mcq',
    question: 'Why does React\'s own `useState`/`useReducer` not suffer from the tearing problem in concurrent mode, but external stores can?',
    options: [
      'React state uses `Object.freeze` to prevent mutations',
      'React controls when state updates are scheduled and applied: a render always reads the same state snapshot for its entire execution. External mutable stores can be mutated outside React\'s scheduler, so a paused-and-resumed render may read different values.',
      'React state is stored in a Web Worker that is isolated from the main thread',
      'There is no difference — `useState` can also tear in concurrent mode',
    ],
    answer: 1,
    explanation:
      'React state is immutable from the perspective of a single render: React captures the state snapshot at the start of a render and every hook reads from that same snapshot for the entire render execution. Even if the render is paused, resumed, or retried, the snapshot is consistent. External stores are plain mutable JS objects — React has no way to freeze a snapshot of them. When a concurrent render is paused and the store mutates, the resumed render reads the new value, causing a tear. `useSyncExternalStore` solves this by providing React-controlled snapshots.',
    tags: ['tearing', 'concurrent-mode', 'useState', 'useSyncExternalStore', 'snapshots'],
    year: 2025,
  },

  // --- Signals vs React model ---
  {
    id: 'react-adv-049',
    topic: 'react-advanced',
    difficulty: 'lead',
    type: 'mcq',
    question: 'Some libraries (Preact Signals, TanStack Store) bring signal-like primitives into React. What is a key limitation of doing this in the React model?',
    options: [
      'Signals cannot hold primitive values in React',
      'React\'s diffing and scheduling are built around the component-render unit. Signal updates that bypass the normal React scheduling (e.g., by directly patching the DOM) can cause inconsistencies with React\'s Concurrent Mode priorities and break features like `useTransition`.',
      'Signals are not supported in TypeScript',
      'Signals automatically violate the rules of hooks',
    ],
    answer: 1,
    explanation:
      'Bringing fine-grained reactivity into React is possible (Preact Signals patches React\'s fiber to skip re-renders), but it bypasses React\'s scheduler. React\'s concurrent features (transitions, deferred updates, selective hydration) rely on render being interruptible at component boundaries. Direct DOM updates from signals skip this contract, potentially causing priority inversion, stale renders under concurrent mode, or conflicts with the React Compiler\'s memoization. The React team is exploring native fine-grained primitives that work within the scheduler.',
    tags: ['signals', 'fine-grained-reactivity', 'concurrent-mode', 'React-scheduler', 'limitations'],
    year: 2025,
  },

  // --- React 19 resource preloading in components ---
  {
    id: 'react-adv-050',
    topic: 'react-advanced',
    difficulty: 'senior',
    type: 'mcq',
    question: 'How does React 19 deduplicate `ReactDOM.preload` calls made from multiple component instances?',
    options: [
      'It does not deduplicate — each call inserts a new `<link>` tag',
      'React 19 deduplicates by `href`: if multiple components call `preload("https://fonts.gstatic.com/font.woff2", { as: "font" })`, only one `<link rel="preload">` tag appears in `<head>` regardless of how many times it was called',
      'Deduplication only works during SSR, not on the client',
      'Only the first component to mount can insert preload hints',
    ],
    answer: 1,
    explanation:
      'React 19\'s resource APIs (`preload`, `preinit`, `prefetchDNS`, `preconnect`) are automatically deduplicated by `href` (and `as` type for preloads). This means component libraries can call `ReactDOM.preload("font.woff2", { as: "font" })` internally without worrying about the consuming application calling it too — React ensures only one tag is emitted. This is similar to how React deduplicates `<title>` and `<meta>` tags.',
    tags: ['react-19', 'preload', 'deduplication', 'asset-loading', 'performance'],
    year: 2025,
  },

  // --- Activity component mode prop ---
  {
    id: 'react-adv-051',
    topic: 'react-advanced',
    difficulty: 'lead',
    type: 'mcq',
    question: 'What are the two modes of the `<Activity>` component and how do they differ?',
    options: [
      '`visible` and `hidden` — visible renders to DOM and runs effects; hidden keeps state in memory, pauses effects, and removes from DOM',
      '`active` and `inactive` — inactive freezes the component completely including state',
      '`eager` and `lazy` — controlling when the component first mounts',
      '`streaming` and `blocking` — controlling SSR behavior',
    ],
    answer: 0,
    explanation:
      '`<Activity mode="visible">` is equivalent to rendering normally. `<Activity mode="hidden">` keeps the React tree alive in memory (state is preserved, context values are updated) but the DOM output is removed. Effects are cleaned up when switching to `hidden` and re-run when switching back to `visible`. This enables instant tab switching, pre-rendering navigation targets, and recycling list item component trees in virtualization scenarios.',
    tags: ['Activity', 'Offscreen', 'react-19', 'experimental', 'mode'],
    year: 2025,
  },

  // --- React 19 ref cleanup ---
  {
    id: 'react-adv-052',
    topic: 'react-advanced',
    difficulty: 'senior',
    type: 'mcq',
    question: 'React 19 adds ref cleanup functions. What does this enable that was not possible before?',
    code: `<div ref={(node) => {
  // attach
  const cleanup = subscribe(node);
  // React 19: return cleanup function
  return () => cleanup();
}} />`,
    options: [
      'It allows the ref callback to run asynchronously',
      'Returning a function from a ref callback registers a cleanup that React calls when the element is removed from the DOM, enabling safe setup/teardown patterns (e.g., subscribing to DOM events) without needing a separate `useEffect`',
      'It allows the ref callback to return a new DOM node to replace the original',
      'It is only used by the React Compiler internally',
    ],
    answer: 1,
    explanation:
      'Before React 19, ref callbacks had no cleanup mechanism. If you used a ref callback to set up a subscription or observer, you needed a separate `useEffect` to clean it up on unmount, which required converting to a `useRef` + effect pattern. React 19 allows ref callbacks to return a cleanup function, called when the node is removed from the DOM (or when the ref is detached). This makes ref-based DOM setup self-contained and mirrors the `useEffect` cleanup pattern.',
    tags: ['react-19', 'ref', 'ref-callback', 'cleanup', 'DOM'],
    year: 2025,
  },
]
