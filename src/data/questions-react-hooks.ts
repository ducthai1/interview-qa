import type { Question } from '../types'

export const reactHooksQuestions: Question[] = [
  // --- useState: lazy init, batching, functional updates ---
  {
    id: 'rh-001',
    topic: 'react-hooks',
    difficulty: 'junior',
    type: 'mcq',
    question: 'What is the "lazy initializer" form of `useState` and when should you use it?',
    options: [
      '`useState(null)` — passing null defers initialization',
      '`useState(() => expensiveComputation())` — pass a function; React calls it only on the first render',
      '`useState(async () => fetch(...))` — for async initial state',
      'There is no lazy initializer; all initial values are evaluated once at module load',
    ],
    answer: 1,
    explanation:
      'When you pass a function to `useState`, React calls it only on the initial render and discards subsequent calls. This avoids re-running expensive computations (e.g., parsing localStorage, calculating derived data) on every render. Without the lazy form, `useState(expensiveComputation())` re-evaluates the argument on every render (though the result is discarded after mount).',
    tags: ['useState', 'lazy-init', 'performance'],
    year: 2024,
  },
  {
    id: 'rh-002',
    topic: 'react-hooks',
    difficulty: 'mid',
    type: 'code-output',
    question: 'What does the button show after a single click that calls `increment`?',
    code: `function Counter() {
  const [n, setN] = React.useState(0);

  function increment() {
    setN(n + 1);
    setN(n + 1);
    setN(n + 1);
  }

  return <button onClick={increment}>{n}</button>;
}`,
    options: ['3', '1', '0', '9'],
    answer: 1,
    explanation:
      'All three `setN(n + 1)` calls read the same closure value of `n` (which is `0`). React batches them and the last write wins, so state becomes `0 + 1 = 1`. To increment three times in one handler, use the functional updater form: `setN(prev => prev + 1)`.',
    tags: ['useState', 'stale-closure', 'batching'],
    year: 2024,
  },
  {
    id: 'rh-003',
    topic: 'react-hooks',
    difficulty: 'mid',
    type: 'mcq',
    question: 'How do you correctly increment state three times in a single event handler?',
    code: `// Goal: n should go from 0 to 3 in one click
function increment() {
  // ???
}`,
    options: [
      '`setN(n + 1); setN(n + 1); setN(n + 1);`',
      '`setN(prev => prev + 1); setN(prev => prev + 1); setN(prev => prev + 1);`',
      '`setN(n + 3);`',
      'Both B and C are correct',
    ],
    answer: 3,
    solutionCode: `// Goal: n should go from 0 to 3 in one click
function increment() {
  setN(prev => prev + 1);
  setN(prev => prev + 1);
  setN(prev => prev + 1);
}`,
    explanation:
      'The functional updater form `setN(prev => prev + 1)` enqueues a transformation based on the most recent state, not the closed-over snapshot. React applies all queued updaters in sequence: 0→1→2→3. `setN(n + 3)` also works when `n` is the correct snapshot, but it is less composable. Both B and C achieve n=3 in one click.',
    tags: ['useState', 'functional-updates', 'batching'],
    year: 2024,
  },
  {
    id: 'rh-004',
    topic: 'react-hooks',
    difficulty: 'junior',
    type: 'true-false',
    question: '`useState` setter functions are stable — they do not change between renders, so it is safe to omit them from `useEffect` dependency arrays.',
    answer: true,
    explanation:
      'React guarantees that setter functions returned by `useState` (and `dispatch` from `useReducer`) have a stable identity across renders. They will never cause a `useEffect` to re-run if listed as a dependency, and the React docs explicitly say they can safely be omitted from dep arrays.',
    tags: ['useState', 'stable-reference', 'useEffect', 'deps'],
    year: 2024,
  },

  // --- useEffect ---
  {
    id: 'rh-005',
    topic: 'react-hooks',
    difficulty: 'junior',
    type: 'mcq',
    question: 'What does `useEffect` with NO dependency array do?',
    options: [
      'Runs only once on mount',
      'Never runs',
      'Runs after every render (mount and every update)',
      'Runs only when props change',
    ],
    answer: 2,
    explanation:
      'Without a deps array, `useEffect` runs after every completed render — equivalent to `componentDidMount` + `componentDidUpdate`. An empty array `[]` restricts it to mount only. Specific deps restrict it to updates of those values.',
    tags: ['useEffect', 'deps-array', 'lifecycle'],
    year: 2024,
  },
  {
    id: 'rh-006',
    topic: 'react-hooks',
    difficulty: 'mid',
    type: 'debug',
    question: 'This effect creates an infinite loop. Why?',
    code: `function UserProfile({ userId }) {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    fetch(\`/api/users/\${userId}\`)
      .then(r => r.json())
      .then(data => setUser(data));
  }, [user]);

  return <div>{user?.name}</div>;
}`,
    options: [
      'No infinite loop — the effect is fine',
      'Infinite loop: `user` is in the deps array. Fetching sets `user`, which triggers the effect again, which fetches again — forever. Fix: use `[userId]` as the dependency.',
      'Infinite loop: `fetch` is not in the deps array',
      'Infinite loop: `setUser` should be in the deps array',
    ],
    answer: 1,
    solutionCode: `function UserProfile({ userId }) {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    fetch(\`/api/users/\${userId}\`)
      .then(r => r.json())
      .then(data => setUser(data));
  }, [userId]);

  return <div>{user?.name}</div>;
}`,
    explanation:
      'The dep array `[user]` causes the effect to re-run whenever `user` changes. The effect itself changes `user` via `setUser(data)`, creating a cycle. The correct dep is `[userId]` — re-fetch when the target user ID changes, not when the loaded data changes.',
    tags: ['useEffect', 'infinite-loop', 'deps-array', 'debug'],
    year: 2024,
  },
  {
    id: 'rh-007',
    topic: 'react-hooks',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is the purpose of the cleanup function returned from `useEffect`?',
    options: [
      'It resets the component\'s state to initial values',
      'It runs before the next effect execution and on unmount to cancel subscriptions, timers, or async operations',
      'It is called by React to signal that the component errored',
      'It is optional documentation that React ignores at runtime',
    ],
    answer: 1,
    explanation:
      'The cleanup function runs (1) before the effect runs again on the next render (if deps changed), and (2) when the component unmounts. It is essential for cancelling subscriptions, clearing `setTimeout`/`setInterval`, aborting `fetch` with an `AbortController`, or removing event listeners — preventing memory leaks and state updates on unmounted components.',
    tags: ['useEffect', 'cleanup', 'memory-leaks', 'subscriptions'],
    year: 2024,
  },
  {
    id: 'rh-008',
    topic: 'react-hooks',
    difficulty: 'senior',
    type: 'code-output',
    question: 'In what order are the console.log calls printed when the component first mounts and then `count` changes from 0 to 1?',
    code: `function Demo() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log('effect', count);
    return () => console.log('cleanup', count);
  }, [count]);

  return <button onClick={() => setCount(1)}>{count}</button>;
}`,
    options: [
      'effect 0 → cleanup 0 → effect 1',
      'cleanup 0 → effect 0 → effect 1',
      'effect 0 → effect 1 → cleanup 0',
      'cleanup 0 → effect 1',
    ],
    answer: 0,
    explanation:
      'On mount: "effect 0". When `count` changes to 1, React first runs the cleanup from the previous effect ("cleanup 0", capturing the old `count=0`), then runs the new effect ("effect 1"). Order: `effect 0` → `cleanup 0` → `effect 1`.',
    tags: ['useEffect', 'cleanup', 'execution-order'],
    year: 2024,
  },
  {
    id: 'rh-009',
    topic: 'react-hooks',
    difficulty: 'senior',
    type: 'mcq',
    question: 'How do you properly cancel a `fetch` inside `useEffect` to avoid "state update on unmounted component" warnings?',
    code: `React.useEffect(() => {
  // ???
  fetch('/api/data')
    .then(r => r.json())
    .then(data => setData(data));
  return () => { /* cleanup */ };
}, []);`,
    options: [
      'Use a boolean flag `let cancelled = false` and check it before calling `setData`',
      'Use `AbortController` — pass its signal to fetch and abort in cleanup',
      'Wrap the entire effect in a try/catch',
      'Both A and B are valid approaches',
    ],
    answer: 3,
    solutionCode: `React.useEffect(() => {
  const controller = new AbortController();
  fetch('/api/data', { signal: controller.signal })
    .then(r => r.json())
    .then(data => setData(data))
    .catch(err => {
      if (err.name !== 'AbortError') console.error(err);
    });
  return () => controller.abort();
}, []);`,
    explanation:
      'Both approaches work. The `AbortController` pattern (`const controller = new AbortController(); fetch(url, { signal: controller.signal }); return () => controller.abort()`) natively cancels the network request. The flag pattern (`let cancelled = false; ... if (!cancelled) setData(data); return () => { cancelled = true }`) prevents the state update but does not cancel the network request. `AbortController` is preferred for performance; the flag is simpler and supported everywhere.',
    tags: ['useEffect', 'fetch', 'AbortController', 'cleanup', 'race-condition'],
    year: 2024,
  },

  // --- useRef ---
  {
    id: 'rh-010',
    topic: 'react-hooks',
    difficulty: 'junior',
    type: 'mcq',
    question: 'What is the key characteristic of `useRef` that distinguishes it from `useState`?',
    options: [
      'Refs can hold any value, state can only hold primitives',
      'Updating a ref\'s `.current` property does NOT trigger a re-render',
      'Refs are reset to their initial value on every render',
      'Refs are only for storing DOM node references',
    ],
    answer: 1,
    explanation:
      '`useRef` returns a mutable object `{ current: initialValue }` that persists for the lifetime of the component. Mutating `.current` does NOT schedule a re-render — making refs suitable for storing values you need to persist (like timers, previous values, or instance variables) without triggering UI updates.',
    tags: ['useRef', 'mutable-ref', 'rendering'],
    year: 2024,
  },
  {
    id: 'rh-011',
    topic: 'react-hooks',
    difficulty: 'mid',
    type: 'code-output',
    question: 'What logs to the console when the button is clicked the first time?',
    code: `function Timer() {
  const countRef = React.useRef(0);

  function handleClick() {
    countRef.current += 1;
    console.log(countRef.current);
  }

  return <button onClick={handleClick}>Click ({countRef.current})</button>;
}`,
    options: [
      'Logs 1; button shows "Click (1)"',
      'Logs 1; button shows "Click (0)"',
      'Logs 0; button shows "Click (0)"',
      'TypeError — refs are read-only',
    ],
    answer: 1,
    explanation:
      'Mutating `countRef.current` does not trigger a re-render. The `console.log` correctly shows the updated value `1`. But because no re-render occurred, the button\'s JSX still shows the old captured value `0`. The button text will never update unless something else triggers a render.',
    tags: ['useRef', 'mutable-ref', 'no-rerender'],
    year: 2024,
  },
  {
    id: 'rh-012',
    topic: 'react-hooks',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is `forwardRef` used for?',
    options: [
      'Forwarding state from a child to a parent',
      'Allowing a parent component to pass a `ref` directly to a DOM node or inner component inside a child component',
      'Creating a ref that updates after every render',
      'Sharing a single ref between multiple components',
    ],
    answer: 1,
    explanation:
      '`forwardRef(render)` wraps a component so the `ref` prop is forwarded to a DOM node or another component inside. This was required in React 18 and earlier because `ref` was a reserved prop. In React 19, `ref` is passed as a regular prop, making `forwardRef` no longer necessary for new code — but it still works for backwards compatibility.',
    tags: ['useRef', 'forwardRef', 'DOM-refs'],
    year: 2025,
  },
  {
    id: 'rh-013',
    topic: 'react-hooks',
    difficulty: 'senior',
    type: 'mcq',
    question: 'When is reading `ref.current` directly inside the render (JSX return) problematic?',
    options: [
      'Never — refs are always safe to read in render',
      'During React\'s concurrent rendering, render may execute multiple times before committing. Reading a mutable ref during render can produce inconsistent or torn UI since the ref can change without scheduling a re-render',
      'Refs cannot hold DOM nodes during render as the DOM is not yet painted',
      'Refs always return `null` during the first render pass',
    ],
    answer: 1,
    explanation:
      'In Concurrent Mode, React can render a component multiple times before committing (e.g., during transitions). Because refs are mutable and updates are not tracked, reading `ref.current` during render can cause visual inconsistencies. Refs are intended for effects and event handlers. Use state for values that should drive the render output.',
    tags: ['useRef', 'concurrent-mode', 'render', 'pitfall'],
    year: 2024,
  },

  // --- useMemo & useCallback ---
  {
    id: 'rh-014',
    topic: 'react-hooks',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What does `useMemo` return?',
    options: [
      'A memoized callback function',
      'A memoized computed value — it re-runs the factory function only when dependencies change',
      'A ref to a cached DOM node',
      'A Promise that resolves to the computed value',
    ],
    answer: 1,
    explanation:
      '`useMemo(() => compute(a, b), [a, b])` caches the return value of the factory function between renders. It recomputes only when `a` or `b` change. Use it for expensive calculations or to maintain referential equality of objects/arrays passed as props to memoized children.',
    tags: ['useMemo', 'memoization', 'performance'],
    year: 2024,
  },
  {
    id: 'rh-015',
    topic: 'react-hooks',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is the difference between `useMemo` and `useCallback`?',
    options: [
      'No difference — they are aliases',
      '`useMemo` memoizes a computed value; `useCallback` memoizes a function reference. `useCallback(fn, deps)` is equivalent to `useMemo(() => fn, deps)`',
      '`useCallback` memoizes a value; `useMemo` memoizes a function',
      '`useMemo` runs synchronously; `useCallback` runs asynchronously',
    ],
    answer: 1,
    explanation:
      '`useMemo` returns the result of calling the factory: `useMemo(() => a + b, [a, b])` → stores the number. `useCallback` returns the function itself: `useCallback(() => doThing(), [dep])` → stores a stable function reference. `useCallback(fn, deps)` is literally sugar for `useMemo(() => fn, deps)` and is primarily used to prevent child component re-renders when functions are passed as props.',
    tags: ['useMemo', 'useCallback', 'memoization', 'difference'],
    year: 2024,
  },
  {
    id: 'rh-016',
    topic: 'react-hooks',
    difficulty: 'senior',
    type: 'mcq',
    question: 'When is `useCallback` actually beneficial, and when is it premature optimization?',
    options: [
      'Always beneficial — every function should be wrapped in `useCallback`',
      'Beneficial when the function is passed as a prop to a `React.memo`-wrapped child or used as a dep in another hook. Premature if the child re-renders anyway or if the memoization cost exceeds the savings',
      'Only beneficial for async functions',
      'Never beneficial — React internally memoizes all functions',
    ],
    answer: 1,
    explanation:
      '`useCallback` prevents a new function reference on each render. This matters when: (1) the function is a dep of `useEffect`/`useMemo`/another `useCallback`, or (2) it is passed to a `React.memo`-wrapped child that would otherwise re-render due to the new reference. Adding `useCallback` everywhere adds overhead (closure allocation + dep comparison) that often outweighs the benefit. Profile first.',
    tags: ['useCallback', 'React.memo', 'performance', 'optimization'],
    year: 2024,
  },
  {
    id: 'rh-017',
    topic: 'react-hooks',
    difficulty: 'senior',
    type: 'debug',
    question: 'Why does the child still re-render on every parent render despite `React.memo`?',
    code: `const Child = React.memo(function Child({ onSave }) {
  console.log('child rendered');
  return <button onClick={onSave}>Save</button>;
});

function Parent() {
  const [count, setCount] = React.useState(0);

  const handleSave = () => {
    console.log('saved');
  };

  return (
    <>
      <button onClick={() => setCount(c => c + 1)}>+{count}</button>
      <Child onSave={handleSave} />
    </>
  );
}`,
    options: [
      'React.memo does not work with function props',
      'Every render creates a new `handleSave` function reference. `React.memo` does a shallow prop comparison, so `onSave !== prevOnSave` → re-render. Fix: wrap `handleSave` in `useCallback`.',
      'The `count` state causes `Child` to re-render regardless of `React.memo`',
      'No bug — `React.memo` only prevents re-renders if children are passed',
    ],
    answer: 1,
    solutionCode: `const Child = React.memo(function Child({ onSave }) {
  console.log('child rendered');
  return <button onClick={onSave}>Save</button>;
});

function Parent() {
  const [count, setCount] = React.useState(0);

  const handleSave = React.useCallback(() => {
    console.log('saved');
  }, []);

  return (
    <>
      <button onClick={() => setCount(c => c + 1)}>+{count}</button>
      <Child onSave={handleSave} />
    </>
  );
}`,
    explanation:
      'Arrow functions in the render body are recreated on every render. `React.memo` uses `Object.is` (shallow comparison) on each prop. Since `handleSave` is a new function reference each render, `onSave !== prevOnSave` is always true and `Child` re-renders. Wrapping `handleSave` in `useCallback([], [])` gives it a stable reference, fixing the issue.',
    tags: ['useCallback', 'React.memo', 'referential-equality', 'debug'],
    year: 2024,
  },

  // --- useContext ---
  {
    id: 'rh-018',
    topic: 'react-hooks',
    difficulty: 'junior',
    type: 'mcq',
    question: 'How do you consume a React Context value in a functional component?',
    options: [
      '`const value = React.getContext(MyContext)`',
      '`const value = useContext(MyContext)`',
      '`const value = MyContext.consume()`',
      '`const value = React.readContext(MyContext)`',
    ],
    answer: 1,
    explanation:
      '`useContext(MyContext)` returns the current context value provided by the nearest `<MyContext.Provider>` above the component in the tree. When the provider\'s value changes, all components calling `useContext(MyContext)` re-render.',
    tags: ['useContext', 'context', 'hooks'],
    year: 2024,
  },
  {
    id: 'rh-019',
    topic: 'react-hooks',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is the performance pitfall of using a single Context for many frequently-changing values, and how do you mitigate it?',
    options: [
      'No pitfall — context updates are batched automatically',
      'Every `useContext` consumer re-renders whenever ANY part of the context value changes, even if it only uses a subset. Mitigate by splitting context into smaller contexts, memoizing the value object, or using a state management library with selector support',
      'Context updates are always synchronous, blocking the event loop',
      'Context can only hold primitive values to avoid the pitfall',
    ],
    answer: 1,
    explanation:
      'React re-renders all consumers when the context value changes (by reference). A single context holding `{ theme, user, cart, notifications }` means every consumer re-renders on every cart update. Solutions: (1) Split into `ThemeContext`, `UserContext`, etc. (2) Memoize the value with `useMemo`. (3) Use `useReducer` + dispatch context pattern. (4) Use Zustand, Jotai, or similar for fine-grained subscriptions.',
    tags: ['useContext', 'context', 'performance', 're-render'],
    year: 2024,
  },
  {
    id: 'rh-020',
    topic: 'react-hooks',
    difficulty: 'mid',
    type: 'true-false',
    question: '`useContext` can replace all needs for a state management library like Redux in a large application.',
    answer: false,
    explanation:
      'Context is excellent for low-frequency global values (theme, locale, auth user). For high-frequency updates (e.g., live data, complex reducer flows with selectors), Context has performance limitations and lacks features like middleware, dev tools, and optimized subscriptions. Redux, Zustand, or Jotai are better suited for complex application state.',
    tags: ['useContext', 'context', 'state-management'],
    year: 2024,
  },

  // --- useReducer ---
  {
    id: 'rh-021',
    topic: 'react-hooks',
    difficulty: 'mid',
    type: 'mcq',
    question: 'When should you prefer `useReducer` over `useState`?',
    options: [
      'Always — `useReducer` is the official replacement for `useState`',
      'When the next state depends on multiple sub-values, or when the update logic is complex and benefits from being expressed as named actions',
      'Only when the state is an array or object, never for primitives',
      'When you need async state updates',
    ],
    answer: 1,
    explanation:
      'The React docs suggest `useReducer` when: (1) state is an object with multiple fields that update together, (2) next state depends on previous state with complex logic, (3) you want to co-locate state logic, or (4) you want testable, pure reducer functions. For a simple counter or toggle, `useState` is simpler and preferred.',
    tags: ['useReducer', 'useState', 'state-management', 'when-to-use'],
    year: 2024,
  },
  {
    id: 'rh-022',
    topic: 'react-hooks',
    difficulty: 'mid',
    type: 'code-output',
    question: 'What is the `state` after dispatching `{ type: "INCREMENT" }` twice and then `{ type: "RESET" }`?',
    code: `const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT': return { count: state.count + 1 };
    case 'RESET': return initialState;
    default: return state;
  }
}

// Initial state: { count: 0 }
// dispatch({ type: 'INCREMENT' })
// dispatch({ type: 'INCREMENT' })
// dispatch({ type: 'RESET' })
// state = ???`,
    options: [
      '{ count: 2 }',
      '{ count: 0 }',
      '{ count: 1 }',
      'undefined',
    ],
    answer: 1,
    explanation:
      'INCREMENT twice: count goes 0→1→2. RESET returns `initialState` which is `{ count: 0 }`. Final state is `{ count: 0 }`. Important: returning `initialState` reference means the reset state is the same object reference — usually fine for immutable patterns but could be a subtle bug if `initialState` is mutated.',
    tags: ['useReducer', 'reducer', 'dispatch'],
    year: 2024,
  },
  {
    id: 'rh-023',
    topic: 'react-hooks',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is the "Context + useReducer" pattern and what problem does it solve?',
    options: [
      'It is an anti-pattern — context and reducers should never be combined',
      'It provides Redux-like state management without external dependencies: a reducer manages complex state transitions while Context distributes state and dispatch to the component tree',
      'It allows async reducers by wrapping dispatch in a Promise',
      'It replaces the need for any component-level state',
    ],
    answer: 1,
    explanation:
      'Pairing `useReducer` with Context is a common lightweight alternative to Redux: `const [state, dispatch] = useReducer(reducer, init)` at the top level, then provide both `state` (via one context) and `dispatch` (via another context) to child components. Separating them prevents components that only dispatch from re-rendering when state changes.',
    tags: ['useReducer', 'useContext', 'pattern', 'redux-alternative'],
    year: 2024,
  },

  // --- useId ---
  {
    id: 'rh-024',
    topic: 'react-hooks',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What problem does `useId` (React 18) solve?',
    options: [
      'Generating cryptographically secure random IDs',
      'Generating stable, unique IDs that are consistent between server-side rendering and client-side hydration, avoiding SSR hydration mismatches',
      'Creating UUIDs for database records',
      'Replacing the `key` prop on list items',
    ],
    answer: 1,
    explanation:
      '`useId` generates a unique ID that is consistent between server and client renders, solving the hydration mismatch that occurs when using `Math.random()` or `Date.now()` for IDs. It is designed for accessibility patterns like linking `<label>` to `<input>` via `htmlFor`/`id` pairs in reusable components.',
    tags: ['useId', 'SSR', 'hydration', 'accessibility'],
    year: 2024,
  },

  // --- useDeferredValue & useTransition ---
  {
    id: 'rh-025',
    topic: 'react-hooks',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is the difference between `useTransition` and `useDeferredValue`?',
    options: [
      'No difference — they are aliases for each other',
      '`useTransition` lets you mark state updates as non-urgent (you control the setter); `useDeferredValue` defers a value you do not control (e.g., a prop from a parent)',
      '`useDeferredValue` is for transitions; `useTransition` is for animations',
      '`useTransition` debounces updates; `useDeferredValue` throttles them',
    ],
    answer: 1,
    explanation:
      '`useTransition` wraps your own `setState` call: `startTransition(() => setState(newValue))`. `useDeferredValue` accepts a value (often a prop or derived state) and returns a deferred copy that "lags behind" when updates are rapid. Both mark renders as low-priority (interruptible), keeping the UI responsive. Use `useTransition` when you own the state update; `useDeferredValue` when you do not.',
    tags: ['useTransition', 'useDeferredValue', 'concurrent', 'performance'],
    year: 2024,
  },
  {
    id: 'rh-026',
    topic: 'react-hooks',
    difficulty: 'senior',
    type: 'mcq',
    question: '`useTransition` returns `[isPending, startTransition]`. What is `isPending` useful for?',
    options: [
      'To check if an async network request is in flight',
      'To show a loading indicator while the deferred (non-urgent) state update is still rendering in the background',
      'To know if the component is in the process of unmounting',
      'To detect if React has batched multiple state updates together',
    ],
    answer: 1,
    explanation:
      '`isPending` is `true` while React is rendering the transition update in the background. You can use it to display a spinner, dim the current view, or show skeleton UI during the deferred render — without blocking interaction with the existing UI. It automatically returns to `false` when the transition render commits.',
    tags: ['useTransition', 'isPending', 'loading', 'concurrent'],
    year: 2024,
  },

  // --- Custom Hooks ---
  {
    id: 'rh-027',
    topic: 'react-hooks',
    difficulty: 'junior',
    type: 'mcq',
    question: 'What are the "Rules of Hooks"?',
    options: [
      'Hooks must be called inside class components; never in functions',
      'Only call hooks at the top level of a function (not inside conditionals/loops/nested functions), and only call them from React function components or custom hooks',
      'Hooks can only be called once per component',
      'Custom hooks must always call at least three built-in hooks',
    ],
    answer: 1,
    explanation:
      'The two rules: (1) Only call hooks at the top level — not inside `if`, `for`, or nested functions — so React can maintain consistent hook call order across renders. (2) Only call hooks from React function components or custom hooks (prefixed with `use`). The ESLint plugin `eslint-plugin-react-hooks` enforces these rules automatically.',
    tags: ['hooks', 'rules-of-hooks', 'custom-hooks'],
    year: 2024,
  },
  {
    id: 'rh-028',
    topic: 'react-hooks',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What makes a function a "custom hook"?',
    options: [
      'It must be registered with `React.registerHook()`',
      'It must return a React element (JSX)',
      'It starts with `use` and can call other hooks inside it',
      'It must accept a single `props` argument',
    ],
    answer: 2,
    explanation:
      'A custom hook is simply a JavaScript function whose name starts with `use` that calls one or more React hooks internally. The `use` prefix is a convention that enables lint tools (eslint-plugin-react-hooks) to enforce the rules of hooks for that function. Custom hooks share logic — not state — between components.',
    tags: ['custom-hooks', 'hooks', 'naming-convention'],
    year: 2024,
  },
  {
    id: 'rh-029',
    topic: 'react-hooks',
    difficulty: 'mid',
    type: 'code-output',
    question: 'What does this custom hook return and what is its purpose?',
    code: `function useLocalStorage(key, initialValue) {
  const [stored, setStored] = React.useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStored(value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error(e);
    }
  };

  return [stored, setValue];
}`,
    options: [
      'Returns a Promise resolving to the stored value',
      'Returns a `[value, setter]` tuple that syncs React state with localStorage — lazy-initializes from storage and persists on every update',
      'Returns only the stored value (read-only)',
      'An error — localStorage cannot be accessed inside useState',
    ],
    answer: 1,
    explanation:
      'This is a classic custom hook pattern. The lazy initializer reads from `localStorage` once on mount (try/catch for SSR safety). The `setValue` setter both updates React state and persists to `localStorage`. It returns the same `[value, setter]` tuple as `useState`, making it a drop-in replacement.',
    tags: ['custom-hooks', 'localStorage', 'useState', 'pattern'],
    year: 2024,
  },
  {
    id: 'rh-030',
    topic: 'react-hooks',
    difficulty: 'senior',
    type: 'mcq',
    question: 'How do you test a custom hook in isolation without rendering a full component?',
    options: [
      'You cannot test hooks in isolation — they must be inside a component',
      'Use `renderHook` from `@testing-library/react`, which creates a minimal wrapper component and exposes the hook\'s return value',
      'Use `React.testHook()` built into React\'s test utils',
      'Mock the hook entirely with jest.fn()',
    ],
    answer: 1,
    explanation:
      '`@testing-library/react` exports `renderHook(callback)` which invokes the hook inside a test component and returns `{ result, rerender, unmount }`. `result.current` holds the hook\'s return value. `act()` is used to wrap state updates. This lets you test hook logic in isolation without building a real UI component.',
    tags: ['custom-hooks', 'testing', 'renderHook'],
    year: 2024,
  },
  {
    id: 'rh-031',
    topic: 'react-hooks',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is the `useEvent` pattern (or `useEffectEvent` in React 19) solving?',
    options: [
      'Adding event listeners to DOM nodes with automatic cleanup',
      'Creating event handlers that always see the latest state/props without being listed as deps in `useEffect`, solving the "stale closure in effect" vs "unnecessary effect re-runs" dilemma',
      'A way to emit custom events between components',
      'Batching multiple event handlers into one',
    ],
    answer: 1,
    explanation:
      'The stale closure problem: effects need to read current state, but listing state as a dep causes the effect to re-run too often (e.g., re-connecting a WebSocket on every message). `useEffectEvent` (experimental in React 19, previously `useEvent` RFC) wraps a function so it always reads the latest values (non-reactive) but can be called from within an effect without being listed as a dep.',
    tags: ['useEffectEvent', 'useEvent', 'stale-closure', 'advanced'],
    year: 2024,
  },
  {
    id: 'rh-032',
    topic: 'react-hooks',
    difficulty: 'mid',
    type: 'true-false',
    question: 'Two component instances that call the same custom hook share the same state.',
    answer: false,
    explanation:
      'Custom hooks share logic, not state. Each component call to a custom hook gets its own isolated state and effects. This is the same as having `useState` inside a component — each instance has independent state. To share state between components, you need Context, a state management library, or state lifted to a common ancestor.',
    tags: ['custom-hooks', 'state-isolation', 'hooks'],
    year: 2024,
  },
  {
    id: 'rh-033',
    topic: 'react-hooks',
    difficulty: 'junior',
    type: 'mcq',
    question: 'What does `useRef` return on the very first render, and what about subsequent renders?',
    options: [
      'null on first render, the DOM node on subsequent renders',
      'A new object `{ current: initialValue }` on first render; the exact same object on every subsequent render',
      'A new object on every render with the latest value',
      'undefined until the component is mounted',
    ],
    answer: 1,
    explanation:
      '`useRef(initialValue)` creates the `{ current: initialValue }` object once and returns the same object reference for the entire lifetime of the component. This persistent identity is what makes it useful for storing mutable values or DOM refs that need to survive re-renders.',
    tags: ['useRef', 'persistence', 'identity'],
    year: 2024,
  },
  {
    id: 'rh-034',
    topic: 'react-hooks',
    difficulty: 'senior',
    type: 'debug',
    question: 'This usePrevious hook has a subtle bug. What is it?',
    code: `function usePrevious(value) {
  const ref = React.useRef();

  React.useEffect(() => {
    ref.current = value;
  });

  return ref.current;
}`,
    options: [
      'No bug — this is the canonical implementation',
      'Bug: the effect has no dep array, so it runs after every render. But the return happens before the effect, so on the first render it returns `undefined` and on every subsequent render it correctly returns the previous value — this is actually intentional, not a bug.',
      'Bug: useRef should be initialized with `value` to avoid undefined on first render',
      'Bug: the effect should include `value` in the deps array',
    ],
    answer: 1,
    explanation:
      'This is actually the correct and intentional implementation. Effects run after render and after the return. So: (1) render happens, `ref.current` still holds the old value → we return it. (2) effect runs, updating `ref.current` to the new value. On the next render, `ref.current` will be the value from the previous render. The first render returns `undefined` which is expected. This is the standard pattern from the React docs.',
    tags: ['useRef', 'useEffect', 'custom-hooks', 'usePrevious'],
    year: 2024,
  },
  {
    id: 'rh-035',
    topic: 'react-hooks',
    difficulty: 'lead',
    type: 'mcq',
    question: 'In React 19, what does the new `use()` hook do that existing hooks cannot?',
    options: [
      'It is a shorthand for `useState` with built-in persistence',
      '`use(promise)` can suspend a component while awaiting a Promise, and `use(context)` reads context — uniquely, it can be called inside conditionals and loops, unlike all other hooks',
      'It replaces `useEffect` for all async operations',
      'It provides a way to use class component lifecycle methods in functional components',
    ],
    answer: 1,
    explanation:
      'React 19\'s `use()` is unique: it can be called conditionally (inside `if` blocks) and can unwrap Promises (integrating with Suspense) and Context values. `use(promise)` suspends the component until the promise resolves, then returns the resolved value. This is not possible with regular hooks due to the rules of hooks. It works in both Server and Client components.',
    tags: ['use', 'react-19', 'suspense', 'promises', 'conditional-hooks'],
    year: 2024,
  },

  // --- React 19: useOptimistic ---
  {
    id: 'react-hooks-036',
    topic: 'react-hooks',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is the signature of `useOptimistic` and what does the update function receive?',
    code: `const [optimisticState, addOptimistic] = useOptimistic(state, updateFn);`,
    options: [
      '`updateFn` receives `(newValue)` only',
      '`updateFn` receives `(currentState, optimisticValue)` and returns the next optimistic state to display while the real async action is pending',
      '`updateFn` receives the Promise returned by the server action',
      '`updateFn` is optional and defaults to replacing the state entirely',
    ],
    answer: 1,
    explanation:
      '`useOptimistic(realState, (currentState, optimisticValue) => nextState)` returns `[optimisticState, addOptimistic]`. Call `addOptimistic(value)` inside a transition/action to immediately apply the speculative update. The update function is a pure reducer: it takes the latest state and the optimistic payload, and returns the speculative next state. When the real async action settles, React discards the optimistic state and applies the real result.',
    tags: ['useOptimistic', 'react-19', 'optimistic-ui', 'actions'],
    year: 2025,
  },

  // --- React 19: useFormStatus ---
  {
    id: 'react-hooks-037',
    topic: 'react-hooks',
    difficulty: 'mid',
    type: 'debug',
    question: 'Why does this component fail to read the correct `pending` value from `useFormStatus`?',
    code: `function MyForm() {
  const { pending } = useFormStatus(); // always false
  async function action(formData) { /* server action */ }
  return (
    <form action={action}>
      <button disabled={pending}>Submit</button>
    </form>
  );
}`,
    options: [
      'No bug — `useFormStatus` works anywhere inside the form',
      'Bug: `useFormStatus` must be called in a component that is a *child* of the `<form>`, not in the same component that renders the form. Extract the button into its own `<SubmitButton>` component.',
      'Bug: `useFormStatus` only works with native HTML form elements, not React forms',
      'Bug: the `action` prop should be `onSubmit`',
    ],
    answer: 1,
    solutionCode: `function SubmitButton() {
  const { pending } = useFormStatus();
  return <button disabled={pending}>Submit</button>;
}

function MyForm() {
  async function action(formData) { /* server action */ }
  return (
    <form action={action}>
      <SubmitButton />
    </form>
  );
}`,
    explanation:
      '`useFormStatus` reads context from the nearest parent `<form>`. If called in the same component that renders the `<form>`, it has no parent form context and always returns `{ pending: false }`. The fix is to move the button into a separate child component: `function SubmitButton() { const { pending } = useFormStatus(); return <button disabled={pending}>Submit</button>; }`.',
    tags: ['useFormStatus', 'react-19', 'forms', 'debug'],
    year: 2025,
  },

  // --- React 19: useActionState ---
  {
    id: 'react-hooks-038',
    topic: 'react-hooks',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is the third return value of `useActionState` in React 19?',
    code: `const [state, formAction, isPending] = useActionState(action, initialState);`,
    options: [
      'A `reset` function to clear the form state',
      '`isPending` — a boolean that is `true` while the async action is executing, allowing you to show loading UI without managing a separate `useState`',
      'The `FormData` object from the last submission',
      'An `error` object if the action threw',
    ],
    answer: 1,
    explanation:
      'React 19\'s `useActionState` returns a three-element tuple: `[state, formAction, isPending]`. `state` is the value returned by the last action invocation (starts as `initialState`). `formAction` is passed to `<form action={formAction}>`. `isPending` is `true` while the action is running. This replaces the common pattern of `useState` for data + `useState` for loading state + manual wiring.',
    tags: ['useActionState', 'react-19', 'forms', 'isPending'],
    year: 2025,
  },

  // --- React 19: use() with context ---
  {
    id: 'react-hooks-039',
    topic: 'react-hooks',
    difficulty: 'senior',
    type: 'mcq',
    question: 'How does `use(Context)` differ from `useContext(Context)` in React 19?',
    options: [
      'They are identical — `use(Context)` is just an alias',
      '`use(Context)` can be called conditionally (inside `if`/`switch`/loops) unlike `useContext`, which must follow the rules of hooks and always be at the top level',
      '`use(Context)` is only available in Server Components',
      '`use(Context)` subscribes lazily; `useContext` subscribes eagerly',
    ],
    answer: 1,
    explanation:
      '`use()` is not a traditional hook — it is exempt from the "only call hooks at the top level" rule. This means you can conditionally read a context: `if (needsTheme) { const theme = use(ThemeContext); }`. This is useful for conditional context consumption in render paths where you only need the context value under certain conditions. Both trigger re-renders when the context changes.',
    tags: ['use', 'react-19', 'context', 'conditional-hooks'],
    year: 2025,
  },

  // --- useSyncExternalStore ---
  {
    id: 'react-hooks-040',
    topic: 'react-hooks',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What are the three arguments to `useSyncExternalStore` and what does each do?',
    code: `const value = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);`,
    options: [
      '`subscribe` connects to the store, `getSnapshot` returns the current value, `getServerSnapshot` returns the value for SSR',
      '`subscribe` is the initial value, `getSnapshot` is the update function, `getServerSnapshot` is optional cleanup',
      '`subscribe` is a selector, `getSnapshot` is the whole store, `getServerSnapshot` is a hydration flag',
      '`subscribe` and `getSnapshot` are required; the third argument is always optional and can be omitted safely',
    ],
    answer: 0,
    explanation:
      '`subscribe(callback)` registers a listener and returns an unsubscribe function — called when the external store changes. `getSnapshot()` returns the current store value synchronously (must be pure and return the same reference if unchanged, otherwise tearing occurs). `getServerSnapshot()` returns the value for SSR/hydration. `useSyncExternalStore` ensures consistent reads during concurrent renders, preventing tearing.',
    tags: ['useSyncExternalStore', 'external-store', 'concurrent', 'SSR'],
    year: 2025,
  },

  // --- useInsertionEffect ---
  {
    id: 'react-hooks-041',
    topic: 'react-hooks',
    difficulty: 'lead',
    type: 'mcq',
    question: 'What is `useInsertionEffect` designed for and how does it differ from `useLayoutEffect`?',
    options: [
      'It is identical to `useLayoutEffect` but with a different name',
      '`useInsertionEffect` fires synchronously *before* DOM mutations are applied, making it the only safe place for CSS-in-JS libraries to inject `<style>` tags. `useLayoutEffect` fires *after* DOM mutations but before the browser paints.',
      '`useInsertionEffect` fires asynchronously after the browser paints',
      '`useInsertionEffect` replaces `useEffect` for animation libraries',
    ],
    answer: 1,
    explanation:
      '`useInsertionEffect` was added specifically for CSS-in-JS libraries (styled-components, Emotion). It fires synchronously before React applies DOM mutations, allowing the library to inject `<style>` tags into `<head>` before the browser lays out the affected nodes. This prevents the FOUC (flash of unstyled content) and layout thrashing that can occur when styles are injected in `useLayoutEffect` (which runs after DOM mutations). App-level code should never use it directly.',
    tags: ['useInsertionEffect', 'css-in-js', 'performance', 'timing'],
    year: 2025,
  },

  // --- renderHook testing ---
  {
    id: 'react-hooks-042',
    topic: 'react-hooks',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What does the `act()` wrapper do when testing hooks with `renderHook`?',
    options: [
      'It mocks React internals to make tests faster',
      'It flushes all pending state updates and effects, ensuring the hook\'s state reflects all queued work before assertions run',
      'It prevents the test from throwing on errors',
      'It is only needed for async tests with Promises',
    ],
    answer: 1,
    explanation:
      '`act()` from `@testing-library/react` (or `react`) tells React to process all pending state updates, effects, and re-renders synchronously before the assertions. Without `act()`, state updates triggered by events or timers may not have been applied yet when you read `result.current`, leading to flaky assertions. For async operations, use `await act(async () => { ... })`.',
    tags: ['testing', 'renderHook', 'act', 'custom-hooks'],
    year: 2025,
  },

  // --- Custom hook: useMediaQuery ---
  {
    id: 'react-hooks-043',
    topic: 'react-hooks',
    difficulty: 'mid',
    type: 'code-output',
    question: 'What does this custom hook return and what React APIs does it use?',
    code: `function useMediaQuery(query) {
  const [matches, setMatches] = React.useState(
    () => window.matchMedia(query).matches
  );

  React.useEffect(() => {
    const media = window.matchMedia(query);
    const listener = (e) => setMatches(e.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
}`,
    options: [
      'Returns the CSS media query string',
      'Returns a boolean that is `true` when the viewport matches the CSS media query, and re-renders the component whenever the match status changes',
      'Returns a ref to the matchMedia object',
      'Returns `[matches, setQuery]` tuple',
    ],
    answer: 1,
    explanation:
      'The lazy initializer reads the initial match state from `window.matchMedia`. The `useEffect` subscribes to media query changes using the native `MediaQueryList` change event, updating state whenever the viewport crosses the query breakpoint. Cleanup removes the listener on unmount or when `query` changes. Returns a stable boolean reactive to viewport changes.',
    tags: ['custom-hooks', 'useMediaQuery', 'useEffect', 'browser-API'],
    year: 2025,
  },

  // --- Custom hook: useDebounce ---
  {
    id: 'react-hooks-044',
    topic: 'react-hooks',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is the correct implementation pattern for a `useDebounce(value, delay)` hook?',
    options: [
      'Use `useMemo` with the delay as a dependency',
      'Store a debounced copy in state; use `useEffect` to schedule a `setTimeout` that updates it, clearing the previous timer in the cleanup function',
      'Wrap `setValue` in `useCallback` with the delay in the deps array',
      'Use `useRef` to store the timer and `useMemo` for the debounced value',
    ],
    answer: 1,
    explanation:
      '```js\nfunction useDebounce(value, delay) {\n  const [debounced, setDebounced] = useState(value);\n  useEffect(() => {\n    const id = setTimeout(() => setDebounced(value), delay);\n    return () => clearTimeout(id);\n  }, [value, delay]);\n  return debounced;\n}\n```\nEach time `value` changes, the effect clears the previous timer (cleanup) and starts a new one. The debounced state only updates after the value stops changing for `delay` milliseconds. This pattern prevents excessive re-renders or API calls during rapid input.',
    tags: ['custom-hooks', 'useDebounce', 'useEffect', 'pattern'],
    year: 2025,
  },

  // --- Custom hook: useEventListener ---
  {
    id: 'react-hooks-045',
    topic: 'react-hooks',
    difficulty: 'mid',
    type: 'mcq',
    question: 'Why should a `useEventListener` hook store the handler in a `useRef` rather than listing it in the `useEffect` deps array?',
    options: [
      'Refs are faster to read than deps array lookups',
      'Storing the handler in a ref lets the effect reference the latest handler without re-subscribing (removing + re-adding the event listener) on every render when the handler is a new function reference',
      'Event listeners cannot be updated inside `useEffect` — only via refs',
      'The handler ref prevents memory leaks automatically',
    ],
    answer: 1,
    explanation:
      'If the handler (e.g., an inline function) is listed in deps, the effect re-runs every render, removing and re-adding the listener unnecessarily. Using a ref: `const handlerRef = useRef(handler); useEffect(() => { handlerRef.current = handler; }); useEffect(() => { el.addEventListener(event, (e) => handlerRef.current(e)); return () => el.removeEventListener(...); }, [event, el])` — the listener is added only once (or when event/element changes) but always calls the latest handler via the ref.',
    tags: ['custom-hooks', 'useEventListener', 'useRef', 'pattern'],
    year: 2025,
  },

  // --- Hook dependency pitfalls: objects ---
  {
    id: 'react-hooks-046',
    topic: 'react-hooks',
    difficulty: 'senior',
    type: 'debug',
    question: 'Why does this effect run on every render even though the data seems unchanged?',
    code: `function Profile({ userId }) {
  const options = { userId, includeDetails: true }; // new object each render

  React.useEffect(() => {
    fetchProfile(options);
  }, [options]); // object reference changes every render

  return <div>...</div>;
}`,
    options: [
      'No bug — the effect runs correctly only when `userId` changes',
      'Bug: `options` is a new object literal on every render. Deps comparison uses `Object.is` (reference equality), so `options !== prevOptions` always. Fix: list primitive deps directly `[userId]` or memoize the object with `useMemo`.',
      'Bug: objects cannot be used in deps arrays at all',
      'Bug: `fetchProfile` must be in the deps array',
    ],
    answer: 1,
    solutionCode: `function Profile({ userId }) {
  React.useEffect(() => {
    fetchProfile({ userId, includeDetails: true });
  }, [userId]); // list primitive deps directly

  return <div>...</div>;
}`,
    explanation:
      'React compares deps with `Object.is`. A new object literal `{}` always has a different reference than the previous one, even if contents are identical. Solutions: (1) Destructure to primitives in the deps: `[userId, includeDetails]`. (2) `useMemo(() => ({ userId, includeDetails: true }), [userId])` to memoize the object. (3) Move the object outside the component if it never changes. The same issue applies to arrays and functions.',
    tags: ['useEffect', 'deps-array', 'object-reference', 'pitfall', 'debug'],
    year: 2025,
  },

  // --- Hook dependency pitfalls: arrays ---
  {
    id: 'react-hooks-047',
    topic: 'react-hooks',
    difficulty: 'senior',
    type: 'true-false',
    question: 'Passing an array literal `[]` or `{}` directly in a `useEffect` or `useMemo` deps array causes it to re-run on every render.',
    answer: true,
    explanation:
      'Array and object literals create new references on every render. `useMemo(() => result, [{ id }])` will never actually memoize because `[{ id }]` is a new array with a new object every render. Always pass primitive values or stable references (from `useRef`, module scope, or `useMemo`/`useCallback`) as deps. The eslint `exhaustive-deps` rule warns about this but cannot always detect all cases.',
    tags: ['useMemo', 'useEffect', 'deps-array', 'pitfall', 'array-reference'],
    year: 2025,
  },

  // --- Rules of hooks violations ---
  {
    id: 'react-hooks-048',
    topic: 'react-hooks',
    difficulty: 'mid',
    type: 'debug',
    question: 'Which rule of hooks is violated here, and what is the consequence?',
    code: `function Form({ hasDiscount }) {
  const [price, setPrice] = useState(100);

  if (hasDiscount) {
    const [discount, setDiscount] = useState(10); // conditional hook!
  }

  const [name, setName] = useState('');
  // ...
}`,
    options: [
      'No violation — conditional hooks are allowed when the condition is a prop',
      'Violation of "only call hooks at the top level". If `hasDiscount` changes between renders, the hook call order changes, and React maps hook state to the wrong `useState` call — `name`\'s state gets assigned to `discount`\'s slot, causing corrupt state.',
      'Violation of "only call hooks in function components" — this is a class component pattern',
      'Violation because `useState` cannot be nested inside `if` blocks syntactically',
    ],
    answer: 1,
    solutionCode: `function Form({ hasDiscount }) {
  const [price, setPrice] = useState(100);
  const [discount, setDiscount] = useState(10); // always call, use conditionally
  const [name, setName] = useState('');

  // Use the discount value conditionally in the render, not the hook call:
  const effectivePrice = hasDiscount ? price - discount : price;
  // ...
}`,
    explanation:
      'React tracks hook state by call order (an internal index). On render 1 with `hasDiscount=true`: hooks are called in order — price(0), discount(1), name(2). On render 2 with `hasDiscount=false`: price(0), name(1) — React assigns the `discount` slot\'s value to `name`, corrupting state. This is why hooks must always be called in the same order. `eslint-plugin-react-hooks` (rules-of-hooks) catches this at lint time.',
    tags: ['rules-of-hooks', 'conditional-hooks', 'debug', 'eslint-plugin-react-hooks'],
    year: 2025,
  },

  // --- eslint-plugin-react-hooks ---
  {
    id: 'react-hooks-049',
    topic: 'react-hooks',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What two ESLint rules does `eslint-plugin-react-hooks` enforce?',
    options: [
      '`react-hooks/no-state` and `react-hooks/no-effects`',
      '`react-hooks/rules-of-hooks` (call order, top-level only) and `react-hooks/exhaustive-deps` (all deps used in effects must be listed)',
      '`react-hooks/no-inline-functions` and `react-hooks/pure-functions`',
      '`react-hooks/no-stale-state` and `react-hooks/no-missing-cleanup`',
    ],
    answer: 1,
    explanation:
      '`rules-of-hooks` enforces that hooks are only called at the top level and only from function components or custom hooks. `exhaustive-deps` ensures that all variables read inside `useEffect`, `useMemo`, or `useCallback` are listed in the deps array, preventing stale closure bugs. The exhaustive-deps rule has auto-fix support and is the most impactful linting rule for correct hook usage.',
    tags: ['eslint-plugin-react-hooks', 'rules-of-hooks', 'exhaustive-deps', 'tooling'],
    year: 2025,
  },

  // --- Custom hook: useIntersectionObserver ---
  {
    id: 'react-hooks-050',
    topic: 'react-hooks',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is the correct pattern for a `useIntersectionObserver` hook that reports when an element enters the viewport?',
    options: [
      'Use `useState` for the ref and `useEffect` for the observer setup',
      'Accept a `ref` (attached to the target element), create an `IntersectionObserver` in `useEffect`, observe the `ref.current` element, update state on intersection change, and disconnect in the cleanup function',
      'Create the observer in the component body without `useEffect`',
      'Use `useMemo` for the observer and `useRef` for the entry state',
    ],
    answer: 1,
    explanation:
      '```js\nfunction useIntersectionObserver(ref, options) {\n  const [entry, setEntry] = useState(null);\n  useEffect(() => {\n    const el = ref.current;\n    if (!el) return;\n    const observer = new IntersectionObserver(([e]) => setEntry(e), options);\n    observer.observe(el);\n    return () => observer.disconnect();\n  }, [ref, options]);\n  return entry;\n}\n```\nThe observer is created in `useEffect` (after mount when `ref.current` is available). Cleanup disconnects the observer on unmount. Beware of `options` being a new object each render — memoize it at the call site.',
    tags: ['custom-hooks', 'useIntersectionObserver', 'useEffect', 'browser-API'],
    year: 2025,
  },

  // --- Custom hook: usePrevious clarification ---
  {
    id: 'react-hooks-051',
    topic: 'react-hooks',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is the correct way to implement `usePrevious` so it returns the value from the previous render?',
    code: `function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }); // no deps — runs after every render
  return ref.current; // returns value from BEFORE current render
}`,
    options: [
      'This is wrong — the effect should have `[value]` as deps',
      'This is the canonical implementation: the effect runs after render and stores the new value, but the `return` statement executes during render before the effect, so it returns the value from the previous render',
      'The ref should be initialized to `value` to avoid undefined on first render',
      'This hook requires `useLayoutEffect` instead of `useEffect` to be accurate',
    ],
    answer: 1,
    explanation:
      'The trick: `return ref.current` executes synchronously during render, before effects run. The `useEffect` (no deps) updates `ref.current` after render completes. So on render N, the hook returns `ref.current` which holds the value from render N-1 (set by the effect from the previous render). On the first render, it returns `undefined`. This is the intentional and documented behavior.',
    tags: ['custom-hooks', 'usePrevious', 'useRef', 'useEffect', 'pattern'],
    year: 2025,
  },

  // --- Hook dependency: function deps ---
  {
    id: 'react-hooks-052',
    topic: 'react-hooks',
    difficulty: 'senior',
    type: 'mcq',
    question: 'You have a `useEffect` that calls a function `onSuccess` from props. How should you handle it in the deps array?',
    options: [
      'Omit it from deps to avoid infinite loops',
      'List `onSuccess` in deps. If it is recreated every render (causing repeated effect runs), wrap the call in `useEffectEvent` (React 19) or stabilize it with `useCallback` at the call site',
      'Always wrap every prop function in `useRef` inside the effect',
      'Pass `null` as deps to disable dep tracking entirely',
    ],
    answer: 1,
    explanation:
      'The `exhaustive-deps` rule requires `onSuccess` in deps — omitting it creates a stale closure. If `onSuccess` changes every render, the effect re-runs too often. Solutions: (1) Use `useEffectEvent` (React 19) to read the latest value non-reactively. (2) Ensure the parent memoizes it with `useCallback`. (3) If it is an event callback (fire-and-forget on completion), `useEffectEvent` is the clean solution. Never suppress the lint rule without a clear rationale.',
    tags: ['useEffect', 'deps-array', 'function-deps', 'useEffectEvent', 'exhaustive-deps'],
    year: 2025,
  },

  // --- React 19: use() for promises in conditional ---
  {
    id: 'react-hooks-053',
    topic: 'react-hooks',
    difficulty: 'lead',
    type: 'mcq',
    question: 'Can you call `use(promise)` inside an `if` block in React 19?',
    options: [
      'No — `use()` follows the same rules as all other hooks',
      'Yes — `use()` is explicitly exempt from the "no hooks in conditionals" rule and can be called inside `if`, loops, and early returns',
      'Only if the `if` condition is a constant evaluated at build time',
      'Only inside Server Components, not Client Components',
    ],
    answer: 1,
    explanation:
      '`use()` is a new primitive, not a hook in the traditional sense. React\'s team deliberately made it callable conditionally. This enables patterns like: `if (user.isPremium) { const premiumData = use(premiumDataPromise); }` — the component only suspends for premium users. This flexibility is why it has the lowercase `use` naming convention rather than `useXxx`.',
    tags: ['use', 'react-19', 'conditional', 'promises', 'rules-of-hooks'],
    year: 2025,
  },

  // --- useSyncExternalStore for browser APIs ---
  {
    id: 'react-hooks-054',
    topic: 'react-hooks',
    difficulty: 'senior',
    type: 'mcq',
    question: 'How would you use `useSyncExternalStore` to subscribe to `navigator.onLine` changes?',
    options: [
      'Use `useEffect` with an event listener — `useSyncExternalStore` is only for Redux-style stores',
      'Pass `subscribe` as a function that adds/removes `online`/`offline` listeners on `window`, `getSnapshot` returning `navigator.onLine`, and `getServerSnapshot` returning `true`',
      'Use `useRef` to track online status without causing re-renders',
      '`useSyncExternalStore` cannot be used for browser APIs',
    ],
    answer: 1,
    explanation:
      '```js\nfunction useOnlineStatus() {\n  return useSyncExternalStore(\n    (cb) => {\n      window.addEventListener("online", cb);\n      window.addEventListener("offline", cb);\n      return () => {\n        window.removeEventListener("online", cb);\n        window.removeEventListener("offline", cb);\n      };\n    },\n    () => navigator.onLine,\n    () => true // server assumes online\n  );\n}\n```\nThis is the recommended React 18 pattern for subscribing to any external mutable source in a concurrent-safe way. The React docs explicitly recommend it over `useEffect` + `useState` for browser subscriptions.',
    tags: ['useSyncExternalStore', 'browser-API', 'navigator.onLine', 'pattern'],
    year: 2025,
  },

  // --- useInsertionEffect timing ---
  {
    id: 'react-hooks-055',
    topic: 'react-hooks',
    difficulty: 'lead',
    type: 'mcq',
    question: 'In what order do `useInsertionEffect`, `useLayoutEffect`, and `useEffect` run relative to DOM mutations?',
    options: [
      'useEffect → useLayoutEffect → useInsertionEffect',
      'useInsertionEffect (before DOM mutations) → useLayoutEffect (after DOM mutations, before paint) → useEffect (after paint, async)',
      'All three run simultaneously in parallel',
      'useLayoutEffect → useInsertionEffect → useEffect',
    ],
    answer: 1,
    explanation:
      'React fires effects in this order: (1) `useInsertionEffect` — fires synchronously before DOM mutations, so CSS-in-JS can inject styles before layout is computed. (2) `useLayoutEffect` — fires synchronously after DOM mutations but before the browser paints; for reading/writing DOM layout. (3) `useEffect` — fires asynchronously after the browser has painted; for non-layout side effects like subscriptions and data fetching. Understanding this order is critical for library authors.',
    tags: ['useInsertionEffect', 'useLayoutEffect', 'useEffect', 'timing', 'execution-order'],
    year: 2025,
  },
]
