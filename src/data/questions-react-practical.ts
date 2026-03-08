import type { Question } from '../types'

export const reactPracticalQuestions: Question[] = [
  // ═══════════════════════════════════════════════════
  // REACT-FUNDAMENTALS — 15 questions (rp-001 → rp-015)
  // ═══════════════════════════════════════════════════

  {
    id: 'rp-001',
    topic: 'react-fundamentals',
    difficulty: 'mid',
    type: 'system-design',
    question:
      'Your React app renders a list of 10,000 items and the page lags noticeably when scrolling. Walk through your approach to fix this.',
    answer:
      'Use list virtualization (windowing) so only visible items are rendered. (1) Install react-window or @tanstack/virtual. (2) Replace the flat .map() with a FixedSizeList (or VariableSizeList for varying heights). (3) Wrap individual row components in React.memo to skip re-renders. (4) Set an overscan count of 5-10 rows for smoother scroll. (5) If items are fetched remotely, combine with infinite scroll via react-window-infinite-loader. Profile with React DevTools Profiler to verify DOM node count drops from 10k to ~30.',
    explanation:
      'The browser struggles when the DOM has 10k+ nodes. Virtualization keeps the DOM small by mounting only what is in the viewport plus a buffer. react-window is ~6 KB gzipped. For dynamic heights, react-virtuoso is a good alternative. Always confirm the bottleneck via Chrome Performance tab before optimising.',
    tags: ['virtualization', 'performance', 'large-lists', 'react-window'],
    year: 2025,
  },
  {
    id: 'rp-002',
    topic: 'react-fundamentals',
    difficulty: 'senior',
    type: 'system-design',
    question:
      'Production users report a white screen after a deploy. The error only appears for certain data shapes returned by the API. How do you prevent this from crashing the entire app?',
    answer:
      'Implement Error Boundaries. (1) Create a class component with static getDerivedStateFromError and componentDidCatch. (2) Wrap route-level or feature-level subtrees with this boundary so one section crashing does not take down the whole page. (3) Display a fallback UI with a retry button. (4) Log the error to a monitoring service (Sentry, Datadog) in componentDidCatch. (5) Add runtime type validation (zod, valibot) at the API boundary so malformed data is caught before rendering. (6) Consider react-error-boundary library for a more ergonomic hook-based API.',
    explanation:
      'Error Boundaries catch JavaScript errors in their child component tree during rendering, lifecycle methods, and constructors. They do NOT catch errors in event handlers, async code, or SSR. Combining boundaries with schema validation at the data layer provides defense-in-depth against white-screen crashes.',
    tags: ['error-boundary', 'production', 'resilience', 'monitoring'],
    year: 2025,
  },
  {
    id: 'rp-003',
    topic: 'react-fundamentals',
    difficulty: 'junior',
    type: 'mcq',
    question:
      'A junior developer maps an array of users but does not add a key prop. React shows a console warning and the list behaves oddly when items are reordered. What is the correct key strategy?',
    options: [
      'Use the array index as the key since it is always unique',
      'Use a stable unique identifier from the data (e.g. user.id)',
      'Use Math.random() to generate a unique key on each render',
      'Keys are only needed for class components, not function components',
    ],
    answer: 1,
    explanation:
      'React uses keys to match old and new virtual DOM nodes during reconciliation. Index keys break when items are reordered, inserted, or deleted because the index does not move with the data. Math.random() creates new keys every render, forcing unmount/remount of every item. A stable unique ID (from the database or a UUID generated once) lets React correctly identify which items changed.',
    tags: ['keys', 'reconciliation', 'lists'],
    year: 2025,
  },
  {
    id: 'rp-004',
    topic: 'react-fundamentals',
    difficulty: 'mid',
    type: 'debug',
    question:
      'This component should toggle a boolean on click, but clicking does nothing. Find and fix the bug.',
    code: `function Toggle() {
  let isOn = false;

  function handleClick() {
    isOn = !isOn;
  }

  return (
    <button onClick={handleClick}>
      {isOn ? 'ON' : 'OFF'}
    </button>
  );
}`,
    answer:
      `function Toggle() {
  const [isOn, setIsOn] = React.useState(false);

  function handleClick() {
    setIsOn(prev => !prev);
  }

  return (
    <button onClick={handleClick}>
      {isOn ? 'ON' : 'OFF'}
    </button>
  );
}`,
    solutionCode: `function Toggle() {
  const [isOn, setIsOn] = React.useState(false);

  function handleClick() {
    setIsOn(prev => !prev);
  }

  return (
    <button onClick={handleClick}>
      {isOn ? 'ON' : 'OFF'}
    </button>
  );
}`,
    explanation:
      'Local variables do not trigger re-renders. React has no way to know the variable changed, so the UI never updates. You must use useState (or useReducer) so React can schedule a re-render when the value changes. Using the functional updater (prev => !prev) avoids stale-closure issues.',
    tags: ['useState', 'state', 'common-bugs'],
    year: 2025,
  },
  {
    id: 'rp-005',
    topic: 'react-fundamentals',
    difficulty: 'junior',
    type: 'code-write',
    question:
      'Build a controlled text input that shows a character count below the input and disables a "Submit" button when the count exceeds 280 characters.',
    answer:
      `function TweetBox() {
  const [text, setText] = React.useState('');
  const remaining = 280 - text.length;

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What's happening?"
      />
      <p style={{ color: remaining < 0 ? 'red' : 'inherit' }}>
        {remaining} characters remaining
      </p>
      <button disabled={remaining < 0 || text.length === 0}>
        Submit
      </button>
    </div>
  );
}`,
    solutionCode: `function TweetBox() {
  const [text, setText] = React.useState('');
  const remaining = 280 - text.length;

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What's happening?"
      />
      <p style={{ color: remaining < 0 ? 'red' : 'inherit' }}>
        {remaining} characters remaining
      </p>
      <button disabled={remaining < 0 || text.length === 0}>
        Submit
      </button>
    </div>
  );
}`,
    explanation:
      'A controlled component stores the input value in React state and updates it via onChange. This gives React full control of the input, making validation straightforward: derive the character count from state.length and conditionally disable the button. No refs or DOM queries are needed.',
    tags: ['controlled-input', 'forms', 'derived-state'],
    year: 2025,
  },
  {
    id: 'rp-006',
    topic: 'react-fundamentals',
    difficulty: 'mid',
    type: 'code-output',
    question:
      'What logs when the button is clicked once?',
    code: `function Counter() {
  const [count, setCount] = React.useState(0);

  function handleClick() {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    console.log(count);
  }

  return <button onClick={handleClick}>{count}</button>;
}`,
    options: [
      'Logs 3, renders 3',
      'Logs 0, renders 3',
      'Logs 0, renders 1',
      'Logs 1, renders 1',
    ],
    answer: 2,
    explanation:
      'State updates are batched and use the value of count captured in the current closure, which is 0. All three setCount(0 + 1) calls produce the same value: 1. The console.log reads the stale closure value 0. To increment three times, use the functional updater: setCount(prev => prev + 1).',
    tags: ['batching', 'closures', 'state-updates'],
    year: 2025,
  },
  {
    id: 'rp-007',
    topic: 'react-fundamentals',
    difficulty: 'senior',
    type: 'system-design',
    question:
      'Your team needs to share a consistent Button, Modal, and Form component across three separate React apps (marketing site, dashboard, mobile web). How do you architect a shared component library?',
    answer:
      'Create a standalone package (monorepo recommended). (1) Use a tool like Turborepo or Nx with the library in packages/ui. (2) Author components in TypeScript with named exports. (3) Build with tsup or Vite library mode outputting ESM + CJS + type declarations. (4) Document with Storybook for visual testing. (5) Publish to a private npm registry or use workspace protocol (workspace:*). (6) Version with Changesets for semantic release. (7) Export a CSS reset or use a CSS-in-JS solution / Tailwind preset so consumers inherit design tokens. (8) Tree-shake friendly: no barrel re-exports of heavy components, mark package.json sideEffects: false.',
    explanation:
      'A shared component library enforces design consistency and avoids duplicated code. Monorepo tooling (Turborepo, Nx) simplifies local development because changes reflect immediately without publishing. Storybook provides isolated visual testing. Changesets automate versioning and changelogs. Tree-shaking ensures consumers only bundle what they import.',
    tags: ['component-library', 'monorepo', 'architecture', 'design-system'],
    year: 2025,
  },
  {
    id: 'rp-008',
    topic: 'react-fundamentals',
    difficulty: 'junior',
    type: 'mcq',
    question:
      'You pass an object as a prop to a child component: <Child data={{ name: "Alex" }} />. The child re-renders every time the parent renders, even though the data has not changed. Why?',
    options: [
      'Objects are compared by value in React',
      'A new object reference is created on every parent render, failing the shallow equality check',
      'React always re-renders children regardless of props',
      'The child must be a PureComponent to accept object props',
    ],
    answer: 1,
    explanation:
      'Inline object literals create a brand-new reference on every render. React.memo uses Object.is (shallow comparison) and sees a different reference each time, so it re-renders the child. Fix by moving the object out of render (useMemo, module-level constant, or extracting a variable above the JSX).',
    tags: ['referential-equality', 'memoization', 'props'],
    year: 2025,
  },
  {
    id: 'rp-009',
    topic: 'react-fundamentals',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'Implement a conditional rendering pattern: a notification banner that shows at the top of the page when isOnline becomes false, with a green "Back online" message that auto-dismisses after 3 seconds when connectivity returns.',
    answer:
      `function ConnectivityBanner() {
  const [isOnline, setIsOnline] = React.useState(navigator.onLine);
  const [showBack, setShowBack] = React.useState(false);

  React.useEffect(() => {
    const goOnline = () => {
      setIsOnline(true);
      setShowBack(true);
    };
    const goOffline = () => {
      setIsOnline(false);
      setShowBack(false);
    };

    window.addEventListener('online', goOnline);
    window.addEventListener('offline', goOffline);
    return () => {
      window.removeEventListener('online', goOnline);
      window.removeEventListener('offline', goOffline);
    };
  }, []);

  React.useEffect(() => {
    if (!showBack) return;
    const timer = setTimeout(() => setShowBack(false), 3000);
    return () => clearTimeout(timer);
  }, [showBack]);

  if (!isOnline) {
    return <div style={{ background: 'red', color: 'white', padding: 8 }}>You are offline</div>;
  }
  if (showBack) {
    return <div style={{ background: 'green', color: 'white', padding: 8 }}>Back online</div>;
  }
  return null;
}`,
    solutionCode: `function ConnectivityBanner() {
  const [isOnline, setIsOnline] = React.useState(navigator.onLine);
  const [showBack, setShowBack] = React.useState(false);

  React.useEffect(() => {
    const goOnline = () => {
      setIsOnline(true);
      setShowBack(true);
    };
    const goOffline = () => {
      setIsOnline(false);
      setShowBack(false);
    };

    window.addEventListener('online', goOnline);
    window.addEventListener('offline', goOffline);
    return () => {
      window.removeEventListener('online', goOnline);
      window.removeEventListener('offline', goOffline);
    };
  }, []);

  React.useEffect(() => {
    if (!showBack) return;
    const timer = setTimeout(() => setShowBack(false), 3000);
    return () => clearTimeout(timer);
  }, [showBack]);

  if (!isOnline) {
    return <div style={{ background: 'red', color: 'white', padding: 8 }}>You are offline</div>;
  }
  if (showBack) {
    return <div style={{ background: 'green', color: 'white', padding: 8 }}>Back online</div>;
  }
  return null;
}`,
    explanation:
      'This uses the browser "online" and "offline" events to track connectivity. Two pieces of state (isOnline, showBack) drive conditional rendering. The auto-dismiss timer is managed in a separate useEffect that cleans up on unmount or when showBack changes, preventing memory leaks.',
    tags: ['conditional-rendering', 'useEffect', 'events', 'cleanup'],
    year: 2025,
  },
  {
    id: 'rp-010',
    topic: 'react-fundamentals',
    difficulty: 'senior',
    type: 'system-design',
    question:
      'Your app has deeply nested components (6+ levels) and you are prop-drilling callbacks and theme data. Refactor without introducing a heavy state library.',
    answer:
      'Use React Context with composition. (1) Create a ThemeContext with createContext and a ThemeProvider wrapper. (2) For callbacks, use component composition: pass pre-built JSX as children or render props so intermediate components do not need to know about the data. (3) Split contexts by update frequency — a ThemeContext that rarely changes and a UserContext that changes on login. (4) Memoize the context value object with useMemo to prevent unnecessary consumer re-renders. (5) For actions, expose a dispatch function from useReducer instead of multiple callbacks — this keeps a stable reference. (6) Consider the "component slot" pattern where the parent builds the leaf component and passes it down as a prop.',
    explanation:
      'Prop drilling itself is not always bad for 2-3 levels, but at 6+ levels it degrades maintainability. Context solves the "teleportation" problem. Splitting contexts by frequency and memoizing values are essential performance measures. Composition (children, render props) is often overlooked but eliminates the need for context entirely in some cases.',
    tags: ['context', 'composition', 'prop-drilling', 'architecture'],
    year: 2025,
  },
  {
    id: 'rp-011',
    topic: 'react-fundamentals',
    difficulty: 'junior',
    type: 'debug',
    question:
      'This component should display a greeting but crashes with "Objects are not valid as a React child". Find the bug.',
    code: `function Greeting({ user }) {
  return <h1>Hello, {user}</h1>;
}

// Usage:
<Greeting user={{ name: 'Alice', age: 30 }} />`,
    answer:
      `function Greeting({ user }) {
  return <h1>Hello, {user.name}</h1>;
}

// Usage:
<Greeting user={{ name: 'Alice', age: 30 }} />`,
    solutionCode: `function Greeting({ user }) {
  return <h1>Hello, {user.name}</h1>;
}

// Usage:
<Greeting user={{ name: 'Alice', age: 30 }} />`,
    explanation:
      'React cannot render a plain object directly inside JSX. The original code passes the entire user object into the JSX expression {}. You need to render a primitive value like user.name. This is one of the most common beginner errors when working with API data.',
    tags: ['jsx', 'rendering', 'common-errors', 'objects'],
    year: 2025,
  },
  {
    id: 'rp-012',
    topic: 'react-fundamentals',
    difficulty: 'lead',
    type: 'system-design',
    question:
      'You are leading a greenfield React project with 8 developers. Define the folder structure, code-splitting strategy, and conventions to ensure the codebase stays maintainable at scale.',
    answer:
      'Adopt a feature-based (vertical slice) architecture. Structure: src/features/<feature>/components, hooks, api, utils, types, __tests__. Shared code lives in src/shared (ui, hooks, utils, types). Pages in src/pages import from features. Code-splitting: use React.lazy per route with a Suspense fallback; for heavy feature modules, use dynamic import(). Conventions: (1) Barrel exports per feature (index.ts). (2) Co-locate tests next to source files. (3) ESLint boundaries plugin to enforce import rules (features cannot import from other features, only from shared). (4) Strict TypeScript with path aliases (@features, @shared). (5) Commit hooks: lint-staged + Prettier. (6) Storybook for UI components. (7) Component naming: PascalCase files, one component per file.',
    explanation:
      'Feature-based architecture scales better than grouping by type (components/, hooks/, utils/) because related code stays together. Import boundary enforcement prevents spaghetti dependencies. Route-level code splitting keeps the initial bundle small. Co-located tests improve discoverability. These conventions reduce onboarding time for new developers and keep PRs focused on one feature.',
    tags: ['architecture', 'folder-structure', 'code-splitting', 'team-conventions'],
    year: 2025,
  },
  {
    id: 'rp-013',
    topic: 'react-fundamentals',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'Implement a reusable component that renders different content based on an async data-fetching state: loading spinner, error message with retry button, or the data. The component should accept render props for each state.',
    answer:
      `function AsyncRenderer({ isLoading, error, data, onRetry, children }) {
  if (isLoading) {
    return <div className="spinner" aria-label="Loading">Loading...</div>;
  }

  if (error) {
    return (
      <div role="alert">
        <p>Error: {error.message}</p>
        {onRetry && <button onClick={onRetry}>Retry</button>}
      </div>
    );
  }

  if (data === undefined || data === null) {
    return <p>No data available.</p>;
  }

  return <>{children(data)}</>;
}

// Usage:
// <AsyncRenderer isLoading={isLoading} error={error} data={users} onRetry={refetch}>
//   {(users) => <UserList users={users} />}
// </AsyncRenderer>`,
    solutionCode: `function AsyncRenderer({ isLoading, error, data, onRetry, children }) {
  if (isLoading) {
    return <div className="spinner" aria-label="Loading">Loading...</div>;
  }

  if (error) {
    return (
      <div role="alert">
        <p>Error: {error.message}</p>
        {onRetry && <button onClick={onRetry}>Retry</button>}
      </div>
    );
  }

  if (data === undefined || data === null) {
    return <p>No data available.</p>;
  }

  return <>{children(data)}</>;
}

// Usage:
// <AsyncRenderer isLoading={isLoading} error={error} data={users} onRetry={refetch}>
//   {(users) => <UserList users={users} />}
// </AsyncRenderer>`,
    explanation:
      'This pattern centralises loading/error/empty state handling into a single reusable component. The render-prop pattern (children as a function) gives the consumer full control of how the data is displayed while the AsyncRenderer handles all the state branching. This eliminates repetitive if/else chains scattered across every data-fetching component.',
    tags: ['render-props', 'loading-states', 'patterns', 'reusability'],
    year: 2025,
  },
  {
    id: 'rp-014',
    topic: 'react-fundamentals',
    difficulty: 'junior',
    type: 'mcq',
    question:
      'A teammate writes <input type="text" value="hello" /> without an onChange handler. What happens?',
    options: [
      'The input works normally and updates on typing',
      'The input is read-only — typing does nothing because React controls the value and no onChange updates it',
      'React throws an error and the component does not mount',
      'The input shows "hello" initially but then behaves as uncontrolled',
    ],
    answer: 1,
    explanation:
      'When you set value without onChange, React locks the input to that value on every render. Typing triggers the default DOM behavior but React immediately re-renders with value="hello", so the input appears frozen. React logs a warning about this. Solutions: add onChange with setState, use defaultValue for uncontrolled, or set readOnly explicitly.',
    tags: ['controlled-input', 'forms', 'common-pitfalls'],
    year: 2025,
  },
  {
    id: 'rp-015',
    topic: 'react-fundamentals',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'Build a component that lets users reorder a list via "move up" / "move down" buttons next to each item, updating state immutably.',
    answer:
      `function ReorderableList({ initialItems }) {
  const [items, setItems] = React.useState(initialItems);

  const moveItem = (index, direction) => {
    const target = index + direction;
    if (target < 0 || target >= items.length) return;

    setItems(prev => {
      const next = [...prev];
      [next[index], next[target]] = [next[target], next[index]];
      return next;
    });
  };

  return (
    <ul>
      {items.map((item, i) => (
        <li key={item.id}>
          <span>{item.label}</span>
          <button onClick={() => moveItem(i, -1)} disabled={i === 0}>
            Move Up
          </button>
          <button onClick={() => moveItem(i, 1)} disabled={i === items.length - 1}>
            Move Down
          </button>
        </li>
      ))}
    </ul>
  );
}`,
    solutionCode: `function ReorderableList({ initialItems }) {
  const [items, setItems] = React.useState(initialItems);

  const moveItem = (index, direction) => {
    const target = index + direction;
    if (target < 0 || target >= items.length) return;

    setItems(prev => {
      const next = [...prev];
      [next[index], next[target]] = [next[target], next[index]];
      return next;
    });
  };

  return (
    <ul>
      {items.map((item, i) => (
        <li key={item.id}>
          <span>{item.label}</span>
          <button onClick={() => moveItem(i, -1)} disabled={i === 0}>
            Move Up
          </button>
          <button onClick={() => moveItem(i, 1)} disabled={i === items.length - 1}>
            Move Down
          </button>
        </li>
      ))}
    </ul>
  );
}`,
    explanation:
      'Immutable state updates are critical in React. The spread operator creates a shallow copy of the array, then we swap elements using destructuring assignment. The functional updater (prev =>) ensures we always work with the latest state. Keys use item.id (not index) so React correctly tracks elements when they swap positions.',
    tags: ['immutable-updates', 'lists', 'state-management'],
    year: 2025,
  },

  // ═══════════════════════════════════════════════════
  // REACT-HOOKS — 20 questions (rp-016 → rp-035)
  // ═══════════════════════════════════════════════════

  {
    id: 'rp-016',
    topic: 'react-hooks',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'Users report the page freezes when typing in a search input that filters a dataset of 50,000 products. Fix the performance issue.',
    answer:
      `function ProductSearch({ products }) {
  const [query, setQuery] = React.useState('');
  const deferredQuery = React.useDeferredValue(query);

  const filtered = React.useMemo(
    () => products.filter(p =>
      p.name.toLowerCase().includes(deferredQuery.toLowerCase())
    ),
    [products, deferredQuery]
  );

  return (
    <div>
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search products..."
      />
      <p>{filtered.length} results</p>
      <ul>
        {filtered.slice(0, 100).map(p => (
          <li key={p.id}>{p.name} - \${p.price}</li>
        ))}
      </ul>
    </div>
  );
}`,
    explanation:
      'useDeferredValue lets React keep the input responsive by deferring the expensive filtering to a lower-priority render. The input updates immediately (high priority) while the list re-renders with the deferred value. useMemo prevents recalculating when unrelated state changes. Slicing to 100 visible items is an additional safeguard. Alternative: useTransition wrapping setQuery for an isPending indicator.',
    tags: ['useDeferredValue', 'performance', 'filtering', 'useMemo'],
    year: 2025,
  },
  {
    id: 'rp-017',
    topic: 'react-hooks',
    difficulty: 'senior',
    type: 'code-write',
    question:
      'An API call inside useEffect creates a race condition when a user navigates between pages quickly. The stale response from page A overwrites the data for page B. Fix it.',
    answer:
      `function UserProfile({ userId }) {
  const [user, setUser] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const controller = new AbortController();

    async function fetchUser() {
      try {
        setError(null);
        const res = await fetch(\`/api/users/\${userId}\`, {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setUser(data);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      }
    }

    fetchUser();

    return () => controller.abort();
  }, [userId]);

  if (error) return <p>Error: {error}</p>;
  if (!user) return <p>Loading...</p>;
  return <h1>{user.name}</h1>;
}`,
    explanation:
      'When userId changes, the cleanup function aborts the in-flight request before the new effect runs. Without AbortController, the old fetch resolves and calls setUser with stale data. The catch block checks for AbortError to avoid treating cancellation as a real error. This pattern is essential for any effect that fetches data based on changing dependencies.',
    tags: ['useEffect', 'AbortController', 'race-condition', 'data-fetching'],
    year: 2025,
  },
  {
    id: 'rp-018',
    topic: 'react-hooks',
    difficulty: 'junior',
    type: 'mcq',
    question:
      'useEffect fires twice in development mode after upgrading to React 18. A junior developer suggests removing StrictMode to fix it. What do you tell them?',
    options: [
      'They are right — StrictMode is only for old class components and should be removed',
      'StrictMode intentionally double-invokes effects in dev to expose missing cleanup logic; the fix is to add proper cleanup, not remove StrictMode',
      'The double firing is a React 18 bug that will be patched soon',
      'useEffect should be replaced with useLayoutEffect to avoid the double fire',
    ],
    answer: 1,
    explanation:
      'React 18 StrictMode mounts, unmounts, then re-mounts components in development to surface effects that lack cleanup. This catches bugs like unsubscribed event listeners, uncancelled timers, or stale connections. In production, effects fire only once. Removing StrictMode hides bugs rather than fixing them. The correct response is to ensure every effect returns a cleanup function.',
    tags: ['StrictMode', 'useEffect', 'React18', 'development'],
    year: 2025,
  },
  {
    id: 'rp-019',
    topic: 'react-hooks',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'Build a custom useDebounce hook that debounces a value by a given delay, then use it to build a search input that only fires an API call after the user stops typing for 300ms.',
    answer:
      `function useDebounce(value, delay) {
  const [debounced, setDebounced] = React.useState(value);

  React.useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}

function Search() {
  const [query, setQuery] = React.useState('');
  const debouncedQuery = useDebounce(query, 300);
  const [results, setResults] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (!debouncedQuery.trim()) {
      setResults([]);
      return;
    }

    const controller = new AbortController();
    setLoading(true);

    fetch(\`/api/search?q=\${encodeURIComponent(debouncedQuery)}\`, {
      signal: controller.signal,
    })
      .then(r => r.json())
      .then(data => { setResults(data); setLoading(false); })
      .catch(err => {
        if (err.name !== 'AbortError') setLoading(false);
      });

    return () => controller.abort();
  }, [debouncedQuery]);

  return (
    <div>
      <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search..." />
      {loading && <p>Loading...</p>}
      {!loading && results.length === 0 && debouncedQuery && <p>No results</p>}
      <ul>{results.map(r => <li key={r.id}>{r.title}</li>)}</ul>
    </div>
  );
}`,
    explanation:
      'useDebounce delays propagating the value until the user pauses. Each keystroke clears and resets the timer via the cleanup function. The search effect depends on the debounced value, so it only fires after the pause. AbortController handles rapid successive calls. The empty/loading states provide good UX feedback.',
    tags: ['custom-hooks', 'debounce', 'data-fetching', 'useEffect'],
    year: 2025,
  },
  {
    id: 'rp-020',
    topic: 'react-hooks',
    difficulty: 'senior',
    type: 'code-write',
    question:
      'Implement an optimistic UI pattern for a "Like" button. When clicked, the count increments immediately. If the API call fails, revert the count and show an error toast.',
    answer:
      `function LikeButton({ postId, initialCount }) {
  const [count, setCount] = React.useState(initialCount);
  const [error, setError] = React.useState(null);

  const handleLike = async () => {
    // Optimistic update
    setCount(prev => prev + 1);
    setError(null);

    try {
      const res = await fetch(\`/api/posts/\${postId}/like\`, { method: 'POST' });
      if (!res.ok) throw new Error('Like failed');
    } catch (err) {
      // Revert on failure
      setCount(prev => prev - 1);
      setError('Failed to like. Please try again.');
      setTimeout(() => setError(null), 3000);
    }
  };

  return (
    <div>
      <button onClick={handleLike}>
        ❤ {count}
      </button>
      {error && <span role="alert" style={{ color: 'red' }}>{error}</span>}
    </div>
  );
}`,
    explanation:
      'Optimistic UI updates the state before the server confirms, providing instant feedback. If the API fails, the state is reverted using the functional updater. The error message auto-dismisses after 3 seconds. For more complex cases (multiple concurrent likes, toggling), use useOptimistic from React 19 or store a pending queue.',
    tags: ['optimistic-ui', 'error-handling', 'UX', 'api-integration'],
    year: 2025,
  },
  {
    id: 'rp-021',
    topic: 'react-hooks',
    difficulty: 'mid',
    type: 'debug',
    question:
      'This custom hook is supposed to track window size, but it causes a memory leak warning on unmount. Find the bug.',
    code: `function useWindowSize() {
  const [size, setSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  React.useEffect(() => {
    function handleResize() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return size;
}`,
    answer:
      `function useWindowSize() {
  const [size, setSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  React.useEffect(() => {
    function handleResize() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}`,
    solutionCode: `function useWindowSize() {
  const [size, setSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  React.useEffect(() => {
    function handleResize() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}`,
    explanation:
      'The useEffect is missing a cleanup function that removes the event listener. When the component unmounts, the listener persists and calls setSize on an unmounted component, causing the memory leak warning. Always return a cleanup function from useEffect when adding event listeners, timers, or subscriptions.',
    tags: ['useEffect', 'cleanup', 'memory-leak', 'event-listeners'],
    year: 2025,
  },
  {
    id: 'rp-022',
    topic: 'react-hooks',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'Build a multi-step wizard form (3 steps) that preserves state between steps and validates each step before allowing navigation to the next.',
    answer:
      `function useMultiStepForm(steps) {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [formData, setFormData] = React.useState({});

  const updateFields = (fields) => {
    setFormData(prev => ({ ...prev, ...fields }));
  };

  const next = () => setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
  const back = () => setCurrentStep(prev => Math.max(prev - 1, 0));

  return { currentStep, formData, updateFields, next, back, isFirst: currentStep === 0, isLast: currentStep === steps.length - 1 };
}

function WizardForm() {
  const [errors, setErrors] = React.useState({});
  const { currentStep, formData, updateFields, next, back, isFirst, isLast } = useMultiStepForm([0, 1, 2]);

  const validate = () => {
    const errs = {};
    if (currentStep === 0 && !formData.name?.trim()) errs.name = 'Name is required';
    if (currentStep === 1 && !formData.email?.includes('@')) errs.email = 'Valid email required';
    if (currentStep === 2 && !formData.password?.length >= 8) errs.password = 'Min 8 characters';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => { if (validate()) next(); };
  const handleSubmit = () => { if (validate()) console.log('Submit:', formData); };

  return (
    <form onSubmit={e => e.preventDefault()}>
      {currentStep === 0 && (
        <div>
          <input value={formData.name || ''} onChange={e => updateFields({ name: e.target.value })} placeholder="Name" />
          {errors.name && <span>{errors.name}</span>}
        </div>
      )}
      {currentStep === 1 && (
        <div>
          <input value={formData.email || ''} onChange={e => updateFields({ email: e.target.value })} placeholder="Email" />
          {errors.email && <span>{errors.email}</span>}
        </div>
      )}
      {currentStep === 2 && (
        <div>
          <input type="password" value={formData.password || ''} onChange={e => updateFields({ password: e.target.value })} placeholder="Password" />
          {errors.password && <span>{errors.password}</span>}
        </div>
      )}
      <div>
        {!isFirst && <button type="button" onClick={back}>Back</button>}
        {!isLast ? <button type="button" onClick={handleNext}>Next</button> : <button type="button" onClick={handleSubmit}>Submit</button>}
      </div>
    </form>
  );
}`,
    explanation:
      'The custom useMultiStepForm hook encapsulates step navigation and shared form data. State is lifted into a single formData object so it persists across step changes. Per-step validation prevents advancing with invalid data. Conditional rendering shows only the current step. The Back button is hidden on step 0, and Submit replaces Next on the final step.',
    tags: ['forms', 'multi-step', 'custom-hooks', 'validation'],
    year: 2025,
  },
  {
    id: 'rp-023',
    topic: 'react-hooks',
    difficulty: 'senior',
    type: 'code-write',
    question:
      'Implement infinite scroll using TanStack Query (React Query) that fetches the next page of results when the user scrolls near the bottom of the list.',
    answer:
      `import { useInfiniteQuery } from '@tanstack/react-query';

function InfiniteList() {
  const observerRef = React.useRef(null);
  const loadMoreRef = React.useRef(null);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, isError } =
    useInfiniteQuery({
      queryKey: ['items'],
      queryFn: async ({ pageParam = 1 }) => {
        const res = await fetch(\`/api/items?page=\${pageParam}&limit=20\`);
        return res.json();
      },
      getNextPageParam: (lastPage, allPages) =>
        lastPage.hasMore ? allPages.length + 1 : undefined,
    });

  React.useEffect(() => {
    if (!loadMoreRef.current) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 0.1 }
    );

    observerRef.current.observe(loadMoreRef.current);

    return () => observerRef.current?.disconnect();
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading items.</p>;

  return (
    <div>
      {data.pages.flatMap(page => page.items).map(item => (
        <div key={item.id}>{item.title}</div>
      ))}
      <div ref={loadMoreRef}>
        {isFetchingNextPage ? 'Loading more...' : hasNextPage ? 'Scroll for more' : 'No more items'}
      </div>
    </div>
  );
}`,
    explanation:
      'useInfiniteQuery manages paginated cache automatically. getNextPageParam determines if there is a next page. IntersectionObserver watches a sentinel element at the bottom of the list; when it enters the viewport, fetchNextPage is called. The observer cleanup prevents memory leaks. data.pages is flattened for rendering. TanStack Query handles caching, background refetching, and error/retry logic out of the box.',
    tags: ['infinite-scroll', 'tanstack-query', 'IntersectionObserver', 'pagination'],
    year: 2025,
  },
  {
    id: 'rp-024',
    topic: 'react-hooks',
    difficulty: 'mid',
    type: 'code-output',
    question:
      'What does the console log when this component mounts?',
    code: `function Demo() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log('A');
    return () => console.log('B');
  }, []);

  React.useEffect(() => {
    console.log('C');
    return () => console.log('D');
  }, [count]);

  console.log('E');

  return <p>{count}</p>;
}`,
    options: [
      'A, C, E',
      'E, A, C',
      'E, C, A',
      'A, B, C, D, E',
    ],
    answer: 1,
    explanation:
      'React renders first (console.log("E") runs during render), then commits to the DOM, then runs effects top-to-bottom. So the order is: E (render), A (first effect), C (second effect). Cleanup functions B and D only run on unmount or before re-running the effect, not on initial mount.',
    tags: ['useEffect', 'execution-order', 'render-cycle'],
    year: 2025,
  },
  {
    id: 'rp-025',
    topic: 'react-hooks',
    difficulty: 'junior',
    type: 'code-write',
    question:
      'Build a dark/light theme toggle using useContext. The theme should persist in localStorage and be accessible from any component without prop drilling.',
    answer:
      `const ThemeContext = React.createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = React.useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  React.useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggle = React.useCallback(() => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  const value = React.useMemo(() => ({ theme, toggle }), [theme, toggle]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const ctx = React.useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}

// Usage in any component:
function NavBar() {
  const { theme, toggle } = useTheme();
  return (
    <nav>
      <button onClick={toggle}>
        {theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}
      </button>
    </nav>
  );
}`,
    explanation:
      'The ThemeProvider wraps the app and provides theme + toggle via context. Lazy initializer in useState reads from localStorage on first render. useEffect syncs to localStorage and sets a data attribute on the root element for CSS theming. useMemo on the value prevents unnecessary re-renders of consumers. The custom useTheme hook adds a guard for missing provider and improves DX.',
    tags: ['useContext', 'localStorage', 'theme', 'custom-hooks'],
    year: 2025,
  },
  {
    id: 'rp-026',
    topic: 'react-hooks',
    difficulty: 'senior',
    type: 'debug',
    question:
      'This component has an infinite loop. The page freezes after mounting. Find and fix the bug.',
    code: `function UserSearch() {
  const [query, setQuery] = React.useState('');
  const [results, setResults] = React.useState([]);

  React.useEffect(() => {
    fetch(\`/api/search?q=\${query}\`)
      .then(r => r.json())
      .then(data => setResults(data));
  });

  return (
    <div>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <ul>{results.map(r => <li key={r.id}>{r.name}</li>)}</ul>
    </div>
  );
}`,
    answer:
      `function UserSearch() {
  const [query, setQuery] = React.useState('');
  const [results, setResults] = React.useState([]);

  React.useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const controller = new AbortController();
    fetch(\`/api/search?q=\${query}\`, { signal: controller.signal })
      .then(r => r.json())
      .then(data => setResults(data))
      .catch(() => {});

    return () => controller.abort();
  }, [query]);

  return (
    <div>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <ul>{results.map(r => <li key={r.id}>{r.name}</li>)}</ul>
    </div>
  );
}`,
    solutionCode: `function UserSearch() {
  const [query, setQuery] = React.useState('');
  const [results, setResults] = React.useState([]);

  React.useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const controller = new AbortController();
    fetch(\`/api/search?q=\${query}\`, { signal: controller.signal })
      .then(r => r.json())
      .then(data => setResults(data))
      .catch(() => {});

    return () => controller.abort();
  }, [query]);

  return (
    <div>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <ul>{results.map(r => <li key={r.id}>{r.name}</li>)}</ul>
    </div>
  );
}`,
    explanation:
      'The useEffect has no dependency array, so it runs after every render. setResults triggers a re-render, which triggers the effect again, creating an infinite loop. Adding [query] as the dependency array ensures the effect only runs when query changes. The AbortController and empty query guard are additional best practices.',
    tags: ['useEffect', 'infinite-loop', 'dependency-array', 'common-bugs'],
    year: 2025,
  },
  {
    id: 'rp-027',
    topic: 'react-hooks',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'Implement a useLocalStorage hook that works like useState but persists the value in localStorage, handles JSON serialization, and recovers gracefully from corrupt data.',
    answer:
      `function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = React.useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initialValue;
    } catch {
      console.warn(\`Error reading localStorage key "\${key}", using initial value\`);
      return initialValue;
    }
  });

  const setValue = React.useCallback((value) => {
    setStoredValue(prev => {
      const next = value instanceof Function ? value(prev) : value;
      try {
        localStorage.setItem(key, JSON.stringify(next));
      } catch (err) {
        console.warn(\`Error writing localStorage key "\${key}":\`, err);
      }
      return next;
    });
  }, [key]);

  return [storedValue, setValue];
}

// Usage:
// const [name, setName] = useLocalStorage('user-name', 'Guest');`,
    explanation:
      'The lazy initializer reads from localStorage once on mount with try/catch for corrupt JSON or missing keys. The setter supports both direct values and functional updaters (matching useState API). JSON.stringify/parse handle serialization. The try/catch in setValue handles quota exceeded errors. This hook is one of the most commonly extracted utilities in React apps.',
    tags: ['custom-hooks', 'localStorage', 'serialization', 'error-handling'],
    year: 2025,
  },
  {
    id: 'rp-028',
    topic: 'react-hooks',
    difficulty: 'mid',
    type: 'mcq',
    question:
      'You have a function passed as a prop to a memoized child component. The child still re-renders every time. What is most likely the cause and fix?',
    options: [
      'Use useRef to store the function',
      'Wrap the function in useCallback so it maintains a stable reference between renders',
      'Move the function outside the component entirely',
      'Replace React.memo with shouldComponentUpdate',
    ],
    answer: 1,
    explanation:
      'Functions defined inside a component are recreated on every render, producing a new reference. React.memo sees the new reference and re-renders the child. useCallback returns a memoized version that only changes when its dependencies change, giving the child a stable prop reference. Moving the function outside the component works only if it does not use any state or props.',
    tags: ['useCallback', 'React.memo', 'referential-equality', 'performance'],
    year: 2025,
  },
  {
    id: 'rp-029',
    topic: 'react-hooks',
    difficulty: 'junior',
    type: 'code-write',
    question:
      'Build a countdown timer component that starts from a given number of seconds, ticks down every second, and displays "Time\'s up!" when it reaches zero.',
    answer:
      `function Countdown({ seconds }) {
  const [remaining, setRemaining] = React.useState(seconds);

  React.useEffect(() => {
    if (remaining <= 0) return;

    const timer = setInterval(() => {
      setRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [remaining === 0]);

  return (
    <div>
      {remaining > 0 ? (
        <p>{remaining} second{remaining !== 1 ? 's' : ''} remaining</p>
      ) : (
        <p>Time's up!</p>
      )}
    </div>
  );
}`,
    solutionCode: `function Countdown({ seconds }) {
  const [remaining, setRemaining] = React.useState(seconds);

  React.useEffect(() => {
    if (remaining <= 0) return;

    const timer = setInterval(() => {
      setRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [remaining === 0]);

  return (
    <div>
      {remaining > 0 ? (
        <p>{remaining} second{remaining !== 1 ? 's' : ''} remaining</p>
      ) : (
        <p>Time's up!</p>
      )}
    </div>
  );
}`,
    explanation:
      'setInterval runs the decrement callback every second. The functional updater (prev => prev - 1) avoids stale closures. When the count hits 0, clearInterval stops the timer. The cleanup function in useEffect ensures the interval is cleared on unmount, preventing memory leaks. This is a classic hooks interview pattern testing understanding of closures and cleanup.',
    tags: ['setInterval', 'useEffect', 'cleanup', 'timer'],
    year: 2025,
  },
  {
    id: 'rp-030',
    topic: 'react-hooks',
    difficulty: 'senior',
    type: 'code-write',
    question:
      'Implement a useReducer-based shopping cart hook with add, remove, update quantity, and clear actions. The cart should calculate total price as derived state.',
    answer:
      `function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(i => i.id === action.payload.id);
      if (existing) {
        return {
          ...state,
          items: state.items.map(i =>
            i.id === action.payload.id
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        };
      }
      return { ...state, items: [...state.items, { ...action.payload, quantity: 1 }] };
    }
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter(i => i.id !== action.payload) };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(i =>
          i.id === action.payload.id
            ? { ...i, quantity: Math.max(0, action.payload.quantity) }
            : i
        ).filter(i => i.quantity > 0),
      };
    case 'CLEAR':
      return { ...state, items: [] };
    default:
      return state;
  }
}

function useCart() {
  const [state, dispatch] = React.useReducer(cartReducer, { items: [] });

  const total = React.useMemo(
    () => state.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [state.items]
  );

  const addItem = React.useCallback((item) => dispatch({ type: 'ADD_ITEM', payload: item }), []);
  const removeItem = React.useCallback((id) => dispatch({ type: 'REMOVE_ITEM', payload: id }), []);
  const updateQuantity = React.useCallback((id, quantity) => dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } }), []);
  const clearCart = React.useCallback(() => dispatch({ type: 'CLEAR' }), []);

  return { items: state.items, total, addItem, removeItem, updateQuantity, clearCart };
}`,
    explanation:
      'useReducer centralises complex state transitions in a pure function that is easy to test. Each action handles immutable updates. The ADD_ITEM action increments quantity if the item exists or appends it. UPDATE_QUANTITY filters out zero-quantity items. Total is derived via useMemo so it recalculates only when items change. useCallback on dispatchers provides stable references for memoized consumers.',
    tags: ['useReducer', 'shopping-cart', 'immutable-state', 'custom-hooks'],
    year: 2025,
  },
  {
    id: 'rp-031',
    topic: 'react-hooks',
    difficulty: 'mid',
    type: 'debug',
    question:
      'This component measures an element\'s width on mount, but ref.current is always null. Find the bug.',
    code: `function MeasuredBox() {
  const ref = React.useRef(null);
  const [width, setWidth] = React.useState(0);

  setWidth(ref.current.getBoundingClientRect().width);

  return <div ref={ref}>Width: {width}px</div>;
}`,
    answer:
      `function MeasuredBox() {
  const ref = React.useRef(null);
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    if (ref.current) {
      setWidth(ref.current.getBoundingClientRect().width);
    }
  }, []);

  return <div ref={ref}>Width: {width}px</div>;
}`,
    solutionCode: `function MeasuredBox() {
  const ref = React.useRef(null);
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    if (ref.current) {
      setWidth(ref.current.getBoundingClientRect().width);
    }
  }, []);

  return <div ref={ref}>Width: {width}px</div>;
}`,
    explanation:
      'The original code calls getBoundingClientRect during render, before the DOM node exists. Refs are populated after React commits to the DOM. Moving the measurement into useEffect ensures the ref is attached. Additionally, calling setState directly in the render body causes an infinite loop. For responsive measurements, add a ResizeObserver inside the effect.',
    tags: ['useRef', 'useEffect', 'DOM-measurement', 'render-phase'],
    year: 2025,
  },
  {
    id: 'rp-032',
    topic: 'react-hooks',
    difficulty: 'senior',
    type: 'system-design',
    question:
      'Design a hook-based data fetching layer for a medium-sized app. You cannot use TanStack Query or SWR. Cover caching, deduplication, loading/error states, and invalidation.',
    answer:
      'Architecture: (1) Create a FetchContext with a cache Map<string, { data, timestamp, promise }>. (2) useFetch(key, fetcher, options) hook checks the cache first: if fresh (within staleTime), return cached data; if stale, return cached but refetch in background; if missing, fetch. (3) Deduplication: if a fetch for the same key is already in-flight (promise exists), await the same promise instead of firing another. (4) The hook returns { data, isLoading, isError, error, refetch, isStale }. (5) Invalidation: expose an invalidate(key) function from context that deletes the cache entry and notifies subscribers (use a pub-sub pattern with useEffect subscriptions). (6) Store the cache in a useRef inside the provider so it persists across renders without causing re-renders. (7) Use AbortController for cleanup. (8) For SSR, seed the cache from server-fetched data via provider props. (9) Add retry logic: exponential backoff with configurable maxRetries. (10) Garbage collection: periodically clear entries older than gcTime.',
    explanation:
      'This mirrors what TanStack Query does internally. The key insights are: cache keyed by serializable query keys, request deduplication via shared promises, stale-while-revalidate pattern for perceived performance, and pub-sub for cross-component cache invalidation. Building this from scratch is educational but in production, use a battle-tested library.',
    tags: ['data-fetching', 'caching', 'architecture', 'custom-hooks'],
    year: 2025,
  },
  {
    id: 'rp-033',
    topic: 'react-hooks',
    difficulty: 'mid',
    type: 'mcq',
    question:
      'You call useState with an expensive computation: useState(computeInitialData()). Performance profiling shows computeInitialData runs on every render. What is the fix?',
    options: [
      'Use useMemo to wrap computeInitialData',
      'Pass the function itself as a lazy initializer: useState(computeInitialData)',
      'Move computeInitialData outside the component',
      'Use useRef instead of useState',
    ],
    answer: 1,
    explanation:
      'When you write useState(computeInitialData()), the function is called on every render, but the result is only used on the first render. Passing the function reference without calling it — useState(computeInitialData) — makes React call it only once during initialization (lazy initializer). This is a common performance pitfall.',
    tags: ['useState', 'lazy-initializer', 'performance'],
    year: 2025,
  },
  {
    id: 'rp-034',
    topic: 'react-hooks',
    difficulty: 'junior',
    type: 'code-write',
    question:
      'Build a toggle component that switches between showing and hiding a panel of content, with the toggle button text updating to reflect the current state.',
    answer:
      `function TogglePanel({ title, children }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(prev => !prev)}
        aria-expanded={isOpen}
      >
        {isOpen ? 'Hide' : 'Show'} {title}
      </button>
      {isOpen && <div className="panel">{children}</div>}
    </div>
  );
}

// Usage:
// <TogglePanel title="Details">
//   <p>Some detailed content here.</p>
// </TogglePanel>`,
    solutionCode: `function TogglePanel({ title, children }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(prev => !prev)}
        aria-expanded={isOpen}
      >
        {isOpen ? 'Hide' : 'Show'} {title}
      </button>
      {isOpen && <div className="panel">{children}</div>}
    </div>
  );
}

// Usage:
// <TogglePanel title="Details">
//   <p>Some detailed content here.</p>
// </TogglePanel>`,
    explanation:
      'A simple boolean state drives both the button label and conditional rendering of the panel. The functional updater (prev => !prev) is the safe way to toggle. aria-expanded improves accessibility for screen readers. The children prop makes the component reusable for any content.',
    tags: ['useState', 'conditional-rendering', 'accessibility', 'composition'],
    year: 2025,
  },
  {
    id: 'rp-035',
    topic: 'react-hooks',
    difficulty: 'senior',
    type: 'code-write',
    question:
      'Implement a usePrevious hook that returns the previous value of a state variable. Then use it to show "Price went up/down" when a stock price changes.',
    answer:
      `function usePrevious(value) {
  const ref = React.useRef();

  React.useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

function StockPrice({ symbol, price }) {
  const previousPrice = usePrevious(price);

  let trend = null;
  if (previousPrice !== undefined) {
    if (price > previousPrice) trend = 'up';
    else if (price < previousPrice) trend = 'down';
    else trend = 'unchanged';
  }

  return (
    <div>
      <h2>{symbol}: \${price.toFixed(2)}</h2>
      {trend === 'up' && <span style={{ color: 'green' }}>Price went up</span>}
      {trend === 'down' && <span style={{ color: 'red' }}>Price went down</span>}
      {trend === 'unchanged' && <span>No change</span>}
    </div>
  );
}`,
    solutionCode: `function usePrevious(value) {
  const ref = React.useRef();

  React.useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

function StockPrice({ symbol, price }) {
  const previousPrice = usePrevious(price);

  let trend = null;
  if (previousPrice !== undefined) {
    if (price > previousPrice) trend = 'up';
    else if (price < previousPrice) trend = 'down';
    else trend = 'unchanged';
  }

  return (
    <div>
      <h2>{symbol}: \${price.toFixed(2)}</h2>
      {trend === 'up' && <span style={{ color: 'green' }}>Price went up</span>}
      {trend === 'down' && <span style={{ color: 'red' }}>Price went down</span>}
      {trend === 'unchanged' && <span>No change</span>}
    </div>
  );
}`,
    explanation:
      'usePrevious exploits the fact that useRef does not trigger re-renders and useEffect runs after render. During render, ref.current still holds the previous value. After render, the effect updates it to the current value. This is the canonical implementation from the React docs FAQ. It is useful for animations, comparison indicators, and undo functionality.',
    tags: ['usePrevious', 'useRef', 'useEffect', 'custom-hooks'],
    year: 2025,
  },

  // ═══════════════════════════════════════════════════
  // REACT-ADVANCED — 15 questions (rp-036 → rp-050)
  // ═══════════════════════════════════════════════════

  {
    id: 'rp-036',
    topic: 'react-advanced',
    difficulty: 'senior',
    type: 'system-design',
    question:
      'Your SPA needs to handle auth token refresh transparently. Access tokens expire every 15 minutes. How do you architect this so API calls never fail due to expired tokens?',
    answer:
      'Use an Axios/fetch interceptor pattern. (1) Store access + refresh tokens in memory (not localStorage for XSS safety). (2) Create an API client with a response interceptor: on 401, pause all pending requests, call /auth/refresh with the refresh token, update the stored access token, then retry all paused requests with the new token. (3) Use a promise-based queue: when the first 401 triggers a refresh, subsequent 401s wait on the same refresh promise (deduplication). (4) If refresh fails (e.g., refresh token expired), redirect to login and clear all auth state. (5) Wrap the API client in a React context or module singleton. (6) For React Query users, set retry: false on 401 and handle it in the onError callback of the QueryClient. (7) Add a buffer: refresh proactively when the token has < 60 seconds left (decode JWT exp claim).',
    explanation:
      'Token refresh must be transparent to component code. The interceptor pattern centralises the logic. The deduplication queue prevents multiple simultaneous refresh calls when several requests fail at once. Proactive refresh before expiry eliminates the initial 401 entirely. Storing tokens in memory (not localStorage) mitigates XSS attacks; use httpOnly cookies for the refresh token if possible.',
    tags: ['authentication', 'interceptors', 'token-refresh', 'security'],
    year: 2025,
  },
  {
    id: 'rp-037',
    topic: 'react-advanced',
    difficulty: 'lead',
    type: 'system-design',
    question:
      'You need to migrate a large class component with componentDidMount, componentDidUpdate, componentWillUnmount, and getDerivedStateFromProps to function components with hooks. Walk through the systematic approach.',
    answer:
      'Step-by-step migration: (1) Identify all lifecycle methods and map them to hooks: componentDidMount → useEffect(fn, []), componentDidUpdate → useEffect(fn, [deps]), componentWillUnmount → useEffect cleanup, getDerivedStateFromProps → compute during render or useMemo. (2) Convert this.state to individual useState calls or a single useReducer for complex interdependent state. (3) Replace this.props with function parameters. (4) Convert class methods to functions (use useCallback if passed as props to children). (5) Replace this.ref with useRef. (6) Move context from static contextType to useContext. (7) Split one monolithic componentDidUpdate into multiple useEffects by concern (data fetching, subscription, DOM measurement) — this is the key improvement hooks offer. (8) Test each lifecycle behavior in isolation. (9) Watch for stale closures: use functional updaters or refs to hold latest values. (10) If the class uses error boundaries, keep that as a thin class wrapper — there is no hook equivalent.',
    explanation:
      'The biggest win of the migration is splitting lifecycle logic by concern instead of lifecycle phase. A single componentDidUpdate with multiple if-blocks becomes multiple focused useEffects. The main pitfalls are stale closures and forgetting that getDerivedStateFromProps runs on every render (so the hook equivalent is just a variable declaration in the function body, not useMemo).',
    tags: ['migration', 'class-to-hooks', 'lifecycle', 'refactoring'],
    year: 2025,
  },
  {
    id: 'rp-038',
    topic: 'react-advanced',
    difficulty: 'mid',
    type: 'mcq',
    question:
      'Two sibling components need to stay in sync — when Component A updates a value, Component B should immediately reflect it. What is the best approach?',
    options: [
      'Use useRef in Component A and read it from Component B',
      'Lift the shared state to the nearest common parent and pass it down via props',
      'Use window.postMessage to communicate between siblings',
      'Directly import and mutate a module-level variable',
    ],
    answer: 1,
    explanation:
      'Lifting state up is the standard React pattern for sibling communication. The parent holds the state and passes it (plus a setter) to both children. For deeply nested structures, combine with Context. useRef does not trigger re-renders in the reading component. window.postMessage and module-level mutation bypass React\'s rendering model entirely.',
    tags: ['lifting-state', 'sibling-communication', 'state-management'],
    year: 2025,
  },
  {
    id: 'rp-039',
    topic: 'react-advanced',
    difficulty: 'senior',
    type: 'mcq',
    question:
      'Your app has global UI state (theme, sidebar open), server cache (user data, product list), and form state (multi-step wizard). A teammate wants to put everything in Redux. What do you recommend?',
    options: [
      'They are right — a single Redux store for all state ensures consistency',
      'Use React Context for global UI state, TanStack Query (or SWR) for server cache, and local useState/useReducer for form state — each tool excels at its category',
      'Use Zustand for everything since it is simpler than Redux',
      'Use localStorage for all state to persist it across page refreshes',
    ],
    answer: 1,
    explanation:
      'Different kinds of state have different characteristics. Server cache needs background refetching, stale-while-revalidate, and cache invalidation (TanStack Query). Global UI state changes infrequently and has few consumers (Context). Form state is local and transient (useState/useReducer). Mixing them in one store creates unnecessary complexity and re-renders. This "right tool for the right state" approach is the modern React consensus.',
    tags: ['state-management', 'architecture', 'redux', 'tanstack-query'],
    year: 2025,
  },
  {
    id: 'rp-040',
    topic: 'react-advanced',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'Implement a Higher-Order Component (HOC) that adds loading and error handling to any component that receives data from an API. The wrapped component should only render when data is available.',
    answer:
      `function withAsyncData(WrappedComponent, fetchFn) {
  return function AsyncDataWrapper(props) {
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
      const controller = new AbortController();

      fetchFn(props, controller.signal)
        .then(result => { setData(result); setLoading(false); })
        .catch(err => {
          if (err.name !== 'AbortError') {
            setError(err); setLoading(false);
          }
        });

      return () => controller.abort();
    }, [props]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return <WrappedComponent {...props} data={data} />;
  };
}

// Usage:
const fetchUser = (props, signal) =>
  fetch(\`/api/users/\${props.userId}\`, { signal }).then(r => r.json());

const UserProfileWithData = withAsyncData(UserProfile, fetchUser);`,
    solutionCode: `function withAsyncData(WrappedComponent, fetchFn) {
  return function AsyncDataWrapper(props) {
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
      const controller = new AbortController();

      fetchFn(props, controller.signal)
        .then(result => { setData(result); setLoading(false); })
        .catch(err => {
          if (err.name !== 'AbortError') {
            setError(err); setLoading(false);
          }
        });

      return () => controller.abort();
    }, [props]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return <WrappedComponent {...props} data={data} />;
  };
}

// Usage:
const fetchUser = (props, signal) =>
  fetch(\`/api/users/\${props.userId}\`, { signal }).then(r => r.json());

const UserProfileWithData = withAsyncData(UserProfile, fetchUser);`,
    explanation:
      'HOCs wrap a component to inject cross-cutting behavior. This HOC handles the loading/error/data lifecycle so the wrapped component only receives ready data. While hooks have largely replaced HOCs, they remain useful for decorating route-level components or integrating with libraries that expect the pattern. The forwardRef and displayName should be added in production code.',
    tags: ['HOC', 'patterns', 'data-fetching', 'code-reuse'],
    year: 2025,
  },
  {
    id: 'rp-041',
    topic: 'react-advanced',
    difficulty: 'senior',
    type: 'code-write',
    question:
      'Implement a compound component pattern for a Tabs component. The API should look like: <Tabs><Tab label="One">Content 1</Tab><Tab label="Two">Content 2</Tab></Tabs>.',
    answer:
      `const TabsContext = React.createContext();

function Tabs({ children, defaultIndex = 0 }) {
  const [activeIndex, setActiveIndex] = React.useState(defaultIndex);
  const tabs = React.Children.toArray(children);

  return (
    <TabsContext.Provider value={{ activeIndex, setActiveIndex }}>
      <div className="tabs">
        <div role="tablist" className="tab-headers">
          {tabs.map((tab, index) => (
            <button
              key={index}
              role="tab"
              aria-selected={index === activeIndex}
              onClick={() => setActiveIndex(index)}
              className={index === activeIndex ? 'active' : ''}
            >
              {tab.props.label}
            </button>
          ))}
        </div>
        <div role="tabpanel" className="tab-content">
          {tabs[activeIndex]?.props.children}
        </div>
      </div>
    </TabsContext.Provider>
  );
}

function Tab({ children }) {
  return <>{children}</>;
}

Tabs.Tab = Tab;

// Usage:
// <Tabs defaultIndex={0}>
//   <Tabs.Tab label="Profile">Profile content</Tabs.Tab>
//   <Tabs.Tab label="Settings">Settings content</Tabs.Tab>
// </Tabs>`,
    solutionCode: `const TabsContext = React.createContext();

function Tabs({ children, defaultIndex = 0 }) {
  const [activeIndex, setActiveIndex] = React.useState(defaultIndex);
  const tabs = React.Children.toArray(children);

  return (
    <TabsContext.Provider value={{ activeIndex, setActiveIndex }}>
      <div className="tabs">
        <div role="tablist" className="tab-headers">
          {tabs.map((tab, index) => (
            <button
              key={index}
              role="tab"
              aria-selected={index === activeIndex}
              onClick={() => setActiveIndex(index)}
              className={index === activeIndex ? 'active' : ''}
            >
              {tab.props.label}
            </button>
          ))}
        </div>
        <div role="tabpanel" className="tab-content">
          {tabs[activeIndex]?.props.children}
        </div>
      </div>
    </TabsContext.Provider>
  );
}

function Tab({ children }) {
  return <>{children}</>;
}

Tabs.Tab = Tab;

// Usage:
// <Tabs defaultIndex={0}>
//   <Tabs.Tab label="Profile">Profile content</Tabs.Tab>
//   <Tabs.Tab label="Settings">Settings content</Tabs.Tab>
// </Tabs>`,
    explanation:
      'Compound components share implicit state between a parent and its children, creating an expressive API. The parent (Tabs) manages the active index and reads label props from children. The child (Tab) is a simple wrapper for content. Context can be added for deeply nested access. This pattern is used by libraries like Headless UI, Radix, and Reach UI.',
    tags: ['compound-components', 'patterns', 'accessibility', 'component-design'],
    year: 2025,
  },
  {
    id: 'rp-042',
    topic: 'react-advanced',
    difficulty: 'lead',
    type: 'system-design',
    question:
      'Your React app has poor Core Web Vitals (LCP 4.5s, CLS 0.25, INP 350ms). Walk through your diagnosis and optimization plan.',
    answer:
      'Diagnosis and fix for each metric: LCP (4.5s → target < 2.5s): (1) Identify the LCP element (usually hero image or heading). (2) Preload critical resources: <link rel="preload"> for hero image and critical fonts. (3) Code-split below-the-fold routes with React.lazy. (4) SSR or SSG the above-the-fold HTML (Next.js or Remix). (5) Optimize images: use next/image or srcset with WebP/AVIF, add width/height attributes. CLS (0.25 → target < 0.1): (1) Set explicit dimensions on images and embeds. (2) Reserve space for dynamic content (ads, lazy-loaded components) with aspect-ratio or min-height. (3) Avoid injecting DOM above existing content after load. (4) Use CSS font-display: swap with fallback font matching. INP (350ms → target < 200ms): (1) Profile with Chrome DevTools to find long tasks. (2) Break up heavy renders: useDeferredValue for non-urgent updates, useTransition for state transitions. (3) Debounce/throttle input handlers. (4) Move heavy computation to Web Workers. (5) Use CSS contain: content on off-screen sections to limit layout recalculation scope. (6) Avoid layout thrashing (read then write DOM in batch).',
    explanation:
      'Core Web Vitals are Google ranking signals and directly impact user experience. LCP is usually a resource loading problem (not React-specific). CLS is a layout stability issue often caused by missing image dimensions or late-injected content. INP replaced FID in 2024 and measures actual interaction responsiveness, making React render performance more important than ever.',
    tags: ['core-web-vitals', 'performance', 'LCP', 'CLS', 'INP'],
    year: 2025,
  },
  {
    id: 'rp-043',
    topic: 'react-advanced',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'Build a modal component that traps focus, closes on Escape key, and renders via a portal so it always overlays the entire page.',
    answer:
      `function Modal({ isOpen, onClose, children }) {
  const modalRef = React.useRef(null);
  const previousFocus = React.useRef(null);

  React.useEffect(() => {
    if (!isOpen) return;

    previousFocus.current = document.activeElement;
    modalRef.current?.focus();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') { onClose(); return; }

      if (e.key === 'Tab') {
        const focusable = modalRef.current?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      previousFocus.current?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div
        ref={modalRef}
        className="modal-content"
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        onClick={e => e.stopPropagation()}
      >
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.body
  );
}`,
    solutionCode: `function Modal({ isOpen, onClose, children }) {
  const modalRef = React.useRef(null);
  const previousFocus = React.useRef(null);

  React.useEffect(() => {
    if (!isOpen) return;

    previousFocus.current = document.activeElement;
    modalRef.current?.focus();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') { onClose(); return; }

      if (e.key === 'Tab') {
        const focusable = modalRef.current?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      previousFocus.current?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div
        ref={modalRef}
        className="modal-content"
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        onClick={e => e.stopPropagation()}
      >
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.body
  );
}`,
    explanation:
      'Portals render outside the parent DOM hierarchy, so the modal always overlays the page regardless of parent CSS (overflow, z-index). Focus trapping cycles Tab/Shift+Tab within the modal. Restoring focus on close returns the user to where they were. Escape key dismissal is expected behavior per WAI-ARIA dialog pattern. Clicking the overlay closes the modal while stopPropagation on the content prevents closing when clicking inside.',
    tags: ['portal', 'modal', 'focus-trap', 'accessibility'],
    year: 2025,
  },
  {
    id: 'rp-044',
    topic: 'react-advanced',
    difficulty: 'mid',
    type: 'debug',
    question:
      'This React.memo component should only re-render when the "name" prop changes, but it re-renders whenever the parent renders. Find the bug.',
    code: `const Greeting = React.memo(function Greeting({ name, style }) {
  console.log('Greeting rendered');
  return <h1 style={style}>Hello, {name}</h1>;
});

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
      <Greeting name="Alice" style={{ color: 'blue' }} />
    </div>
  );
}`,
    answer:
      `const Greeting = React.memo(function Greeting({ name, style }) {
  console.log('Greeting rendered');
  return <h1 style={style}>Hello, {name}</h1>;
});

function App() {
  const [count, setCount] = React.useState(0);
  const style = React.useMemo(() => ({ color: 'blue' }), []);

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
      <Greeting name="Alice" style={style} />
    </div>
  );
}`,
    solutionCode: `const Greeting = React.memo(function Greeting({ name, style }) {
  console.log('Greeting rendered');
  return <h1 style={style}>Hello, {name}</h1>;
});

function App() {
  const [count, setCount] = React.useState(0);
  const style = React.useMemo(() => ({ color: 'blue' }), []);

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
      <Greeting name="Alice" style={style} />
    </div>
  );
}`,
    explanation:
      'The inline object literal { color: "blue" } creates a new reference on every render. React.memo does a shallow comparison and sees the style prop as changed each time, causing a re-render. Memoizing the style object with useMemo (or moving it to a module constant since it never changes) gives Greeting a stable reference, and React.memo correctly skips re-rendering.',
    tags: ['React.memo', 'useMemo', 'referential-equality', 'performance'],
    year: 2025,
  },
  {
    id: 'rp-045',
    topic: 'react-advanced',
    difficulty: 'senior',
    type: 'code-write',
    question:
      'Implement a render props pattern for a mouse position tracker that any component can consume to build interactive UIs.',
    answer:
      `function MouseTracker({ render }) {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return render(position);
}

// Usage with render prop:
// <MouseTracker render={({ x, y }) => (
//   <div>
//     <p>Mouse: {x}, {y}</p>
//     <div style={{
//       position: 'fixed',
//       left: x - 10,
//       top: y - 10,
//       width: 20,
//       height: 20,
//       borderRadius: '50%',
//       background: 'red',
//       pointerEvents: 'none',
//     }} />
//   </div>
// )} />

// Alternative: custom hook version
function useMousePosition() {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return position;
}`,
    solutionCode: `function MouseTracker({ render }) {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return render(position);
}

// Alternative: custom hook version
function useMousePosition() {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return position;
}`,
    explanation:
      'Render props allow a component to share behavior (mouse tracking) while letting the consumer control the UI. The pattern pre-dates hooks and is still valid for component-level code sharing. The hook version (useMousePosition) is the modern equivalent and is typically preferred for new code. Both use the same cleanup pattern for event listeners.',
    tags: ['render-props', 'patterns', 'custom-hooks', 'event-listeners'],
    year: 2025,
  },
  {
    id: 'rp-046',
    topic: 'react-advanced',
    difficulty: 'lead',
    type: 'system-design',
    question:
      'You are tasked with building a real-time collaborative editing feature (like Google Docs) in a React app. Outline the architecture and key React-side decisions.',
    answer:
      'Architecture: (1) Use WebSocket (or Socket.io) for real-time bidirectional communication. Wrap the connection in a context provider that handles connect/disconnect/reconnect. (2) For conflict resolution, choose between OT (Operational Transformation) or CRDT (Conflict-free Replicated Data Types). Yjs or Automerge are production-ready CRDT libraries with React bindings. (3) State management: the CRDT document is the source of truth. Subscribe to CRDT change events and derive React state from it. Do not store document content in useState — use useSyncExternalStore to bridge the CRDT store to React. (4) Optimistic updates: local changes apply immediately to the CRDT; the library handles syncing and merging with remote changes. (5) Cursor awareness: broadcast cursor position/selection via a separate awareness protocol (Yjs has this built in). Render remote cursors as absolutely positioned colored markers. (6) Undo/redo: use the CRDT library undo manager (tracks local operations only). (7) Persistence: periodically snapshot the CRDT state to the server. On reconnect, sync the delta. (8) React rendering: use React.memo aggressively on paragraph/block components since only changed blocks re-render. Consider using a content-editable library like Tiptap (built on ProseMirror + Yjs).',
    explanation:
      'Real-time collaboration is one of the hardest frontend challenges. CRDTs have become the industry standard over OT due to simpler merge semantics and peer-to-peer capability. The key React decision is not putting CRDT data into useState (which would cause full re-renders) but instead using useSyncExternalStore to surgically subscribe to changes. Libraries like Tiptap + Yjs handle most of this complexity out of the box.',
    tags: ['real-time', 'collaboration', 'CRDT', 'WebSocket', 'architecture'],
    year: 2025,
  },
  {
    id: 'rp-047',
    topic: 'react-advanced',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'Implement a click-outside hook that closes a dropdown when the user clicks anywhere outside of it.',
    answer:
      `function useClickOutside(ref, callback) {
  React.useEffect(() => {
    function handleClick(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }

    document.addEventListener('mousedown', handleClick);
    document.addEventListener('touchstart', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('touchstart', handleClick);
    };
  }, [ref, callback]);
}

function Dropdown() {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef(null);

  useClickOutside(dropdownRef, () => setIsOpen(false));

  return (
    <div ref={dropdownRef}>
      <button onClick={() => setIsOpen(prev => !prev)}>
        {isOpen ? 'Close' : 'Open'} Menu
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
      )}
    </div>
  );
}`,
    solutionCode: `function useClickOutside(ref, callback) {
  React.useEffect(() => {
    function handleClick(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }

    document.addEventListener('mousedown', handleClick);
    document.addEventListener('touchstart', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('touchstart', handleClick);
    };
  }, [ref, callback]);
}

function Dropdown() {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef(null);

  useClickOutside(dropdownRef, () => setIsOpen(false));

  return (
    <div ref={dropdownRef}>
      <button onClick={() => setIsOpen(prev => !prev)}>
        {isOpen ? 'Close' : 'Open'} Menu
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
      )}
    </div>
  );
}`,
    explanation:
      'The hook listens for mousedown (not click) on the document. When a click occurs, it checks if the event target is outside the ref element using Node.contains(). touchstart is added for mobile support. The ref wraps the entire dropdown (button + menu) so clicking the toggle button does not trigger the outside-click handler. Cleanup removes both listeners on unmount.',
    tags: ['custom-hooks', 'useRef', 'dropdown', 'event-handling'],
    year: 2025,
  },
  {
    id: 'rp-048',
    topic: 'react-advanced',
    difficulty: 'senior',
    type: 'code-write',
    question:
      'Implement React.lazy with Suspense for route-level code splitting, including a fallback loading indicator and an error boundary for failed chunk loads.',
    answer:
      `// ErrorBoundary.jsx
class ChunkErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    // Optionally check if it is a chunk load error
    if (error.name === 'ChunkLoadError') {
      // Auto-retry by reloading the page once
      if (!sessionStorage.getItem('chunk_retry')) {
        sessionStorage.setItem('chunk_retry', 'true');
        window.location.reload();
        return;
      }
    }
    console.error('Chunk loading failed:', error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Something went wrong loading this page.</h2>
          <button onClick={() => window.location.reload()}>Reload</button>
        </div>
      );
    }
    return this.props.children;
  }
}

// App.jsx
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Settings = React.lazy(() => import('./pages/Settings'));
const Profile = React.lazy(() => import('./pages/Profile'));

function App() {
  return (
    <ChunkErrorBoundary>
      <React.Suspense fallback={<div className="spinner">Loading page...</div>}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </React.Suspense>
    </ChunkErrorBoundary>
  );
}`,
    explanation:
      'React.lazy + dynamic import splits each route into a separate chunk downloaded on demand. Suspense shows a fallback while the chunk loads. The error boundary catches network failures (e.g., deploy invalidates old chunk URLs). The auto-retry pattern with sessionStorage handles the common "chunk not found after deploy" problem. For prefetching, add onMouseEnter handlers on nav links that call import() to preload chunks.',
    tags: ['code-splitting', 'React.lazy', 'Suspense', 'error-boundary'],
    year: 2025,
  },
  {
    id: 'rp-049',
    topic: 'react-advanced',
    difficulty: 'lead',
    type: 'system-design',
    question:
      'Your team is building a design system consumed by 15 product teams. Some teams use React 17, others React 18. Some want full components, others want headless (unstyled) primitives. How do you architect this?',
    answer:
      'Multi-layer architecture: (1) Core layer (headless): unstyled, accessible primitives using a state-machine approach (inspired by Zag.js or Radix). Expose hooks (useDialog, useCombobox) and data attributes for states. Zero CSS shipped. Works with any React version >=16.8 (hooks). Peer-depend on react. (2) Styled layer: wraps core with your design tokens. Ship as a separate package (@company/ui-styled). Use CSS Modules or vanilla-extract for zero-runtime CSS. Tokens exported as CSS custom properties so teams can override. (3) Versioning: semantic versioning with Changesets. Core and styled have independent version numbers. (4) Compatibility: test against React 17 and 18 in CI. Avoid React 18-only APIs (useId, useSyncExternalStore) in core — provide a shim or check availability. (5) Documentation: Storybook deployed per PR with visual regression tests (Chromatic). (6) Distribution: monorepo (Turborepo), packages published to private npm. Each component is a separate entry point (tree-shakeable). (7) Governance: RFC process for new components, breaking change review board, deprecation policy with 2-minor-version migration window.',
    explanation:
      'The headless-plus-styled layering is how modern design systems (Radix, Ark UI, Headless UI) solve the flexibility problem. Teams wanting full control use the headless layer; teams wanting speed use the styled layer. Independent versioning prevents a styled change from forcing a core version bump. Testing against multiple React versions is critical when you cannot mandate upgrades across 15 teams.',
    tags: ['design-system', 'architecture', 'headless-ui', 'monorepo', 'governance'],
    year: 2025,
  },
  {
    id: 'rp-050',
    topic: 'react-advanced',
    difficulty: 'junior',
    type: 'code-write',
    question:
      'Implement a generic data table component with sorting by clicking column headers. Clicking once sorts ascending, clicking again sorts descending, and a third click resets to the original order.',
    answer:
      `function useSort(data) {
  const [sortConfig, setSortConfig] = React.useState({ key: null, direction: null });

  const sorted = React.useMemo(() => {
    if (!sortConfig.key || !sortConfig.direction) return data;

    return [...data].sort((a, b) => {
      const aVal = a[sortConfig.key];
      const bVal = b[sortConfig.key];
      if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
  }, [data, sortConfig]);

  const requestSort = (key) => {
    setSortConfig(prev => {
      if (prev.key !== key) return { key, direction: 'asc' };
      if (prev.direction === 'asc') return { key, direction: 'desc' };
      return { key: null, direction: null }; // reset
    });
  };

  return { sorted, sortConfig, requestSort };
}

function DataTable({ data, columns }) {
  const { sorted, sortConfig, requestSort } = useSort(data);

  const getSortIndicator = (key) => {
    if (sortConfig.key !== key) return '';
    return sortConfig.direction === 'asc' ? ' ▲' : ' ▼';
  };

  return (
    <table>
      <thead>
        <tr>
          {columns.map(col => (
            <th key={col.key} onClick={() => requestSort(col.key)} style={{ cursor: 'pointer' }}>
              {col.label}{getSortIndicator(col.key)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sorted.map(row => (
          <tr key={row.id}>
            {columns.map(col => (
              <td key={col.key}>{row[col.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// Usage:
// const columns = [
//   { key: 'name', label: 'Name' },
//   { key: 'age', label: 'Age' },
//   { key: 'email', label: 'Email' },
// ];
// <DataTable data={users} columns={columns} />`,
    explanation:
      'The useSort hook encapsulates the three-state cycle (asc → desc → reset). useMemo prevents re-sorting on unrelated re-renders. The spread [...data] ensures immutability. The DataTable is generic: it accepts any data array and column config. Click handlers on <th> trigger sort. Visual indicators show the current sort direction. For large datasets, consider server-side sorting or combining with virtualization.',
    tags: ['sorting', 'data-table', 'useMemo', 'custom-hooks', 'patterns'],
    year: 2025,
  },
]
