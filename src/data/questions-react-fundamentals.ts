import type { Question } from '../types'

export const reactFundamentalsQuestions: Question[] = [
  // --- JSX & Compilation ---
  {
    id: 'rf-001',
    topic: 'react-fundamentals',
    difficulty: 'junior',
    type: 'mcq',
    question: 'What does JSX compile to in a modern React 17+ project (using the new JSX transform)?',
    options: [
      'React.createElement() calls',
      '_jsx() calls imported automatically from react/jsx-runtime',
      'document.createElement() calls',
      'Babel template literals',
    ],
    answer: 1,
    explanation:
      'React 17 introduced the "new JSX transform". Babel/TypeScript now auto-imports `_jsx` and `_jsxs` from `react/jsx-runtime`, eliminating the need for `import React from "react"` in every file. Before React 17 the transform produced `React.createElement()` calls, which is why the import was mandatory.',
    tags: ['jsx', 'compilation', 'jsx-transform'],
    year: 2024,
  },
  {
    id: 'rf-002',
    topic: 'react-fundamentals',
    difficulty: 'mid',
    type: 'code-output',
    question: 'What is the output of the following JSX after compilation (old transform)?',
    code: `const el = <div className="box" id={myId}>Hello</div>;`,
    options: [
      `React.createElement("div", { className: "box", id: myId }, "Hello")`,
      `React.createElement("div", { class: "box", id: myId }, "Hello")`,
      `React.createElement(div, { className: "box", id: myId }, "Hello")`,
      `React.render("div", { className: "box" }, "Hello")`,
    ],
    answer: 0,
    explanation:
      'JSX attributes map directly to object keys passed as the second argument to `React.createElement`. The HTML attribute `class` becomes `className` in JSX (camelCase convention). The tag name is a string for DOM elements and a reference for components.',
    tags: ['jsx', 'createElement', 'compilation'],
    year: 2024,
  },
  {
    id: 'rf-003',
    topic: 'react-fundamentals',
    difficulty: 'mid',
    type: 'true-false',
    question: 'In JSX, you can use JavaScript expressions inside `{}` but not statements (e.g., `if/for` blocks).',
    answer: true,
    explanation:
      'JSX `{}` interpolation only accepts expressions — values that resolve to something (ternaries, function calls, template literals). Statements like `if`, `for`, or `while` are not expressions and cannot be used directly. Workarounds include ternary operators, `&&`, or extracting logic into a function that returns JSX.',
    tags: ['jsx', 'expressions', 'statements'],
    year: 2024,
  },

  // --- Virtual DOM & Reconciliation ---
  {
    id: 'rf-004',
    topic: 'react-fundamentals',
    difficulty: 'mid',
    type: 'mcq',
    question: 'Which statement best describes the React Virtual DOM?',
    options: [
      'A copy of the real DOM stored in a database',
      'A lightweight in-memory JavaScript object tree that mirrors the real DOM structure',
      'A browser API provided by Chrome DevTools',
      'The Shadow DOM used by web components',
    ],
    answer: 1,
    explanation:
      'The Virtual DOM is a plain JavaScript object tree React maintains in memory. When state changes, React re-renders into a new virtual tree, diffs it against the previous one (reconciliation), and batches the minimal set of actual DOM mutations needed — this makes updates fast.',
    tags: ['virtual-dom', 'reconciliation', 'performance'],
    year: 2024,
  },
  {
    id: 'rf-005',
    topic: 'react-fundamentals',
    difficulty: 'senior',
    type: 'mcq',
    question: 'During reconciliation, React uses a "diffing" algorithm. What is the time complexity of React\'s heuristic diff algorithm?',
    options: ['O(n³)', 'O(n²)', 'O(n)', 'O(log n)'],
    answer: 2,
    explanation:
      'A naive tree-diff algorithm is O(n³). React uses two heuristics to achieve O(n): (1) Two elements of different types produce entirely different trees. (2) The developer can hint which items are stable across renders with the `key` prop. This makes list reconciliation efficient.',
    tags: ['reconciliation', 'diffing', 'algorithm', 'performance'],
    year: 2024,
  },
  {
    id: 'rf-006',
    topic: 'react-fundamentals',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What happens in React reconciliation when an element changes type (e.g., from `<div>` to `<span>`)?',
    options: [
      'React updates the existing DOM node in place',
      'React performs a text diff on the children only',
      'React tears down the entire subtree and mounts a fresh one, resetting all state',
      'React merges the old and new props into the same node',
    ],
    answer: 2,
    explanation:
      'When the element type changes, React assumes the subtree is fundamentally different. It unmounts the old tree (calling cleanup effects and `componentWillUnmount`), destroys the DOM nodes, then mounts a completely new subtree. This is why switching between component types can reset state unexpectedly.',
    tags: ['reconciliation', 'diffing', 'mount', 'unmount'],
    year: 2024,
  },

  // --- Components ---
  {
    id: 'rf-007',
    topic: 'react-fundamentals',
    difficulty: 'junior',
    type: 'mcq',
    question: 'Which of the following is a key difference between functional and class components in modern React?',
    options: [
      'Functional components cannot hold state',
      'Class components are faster due to less overhead',
      'Functional components use hooks for state and side effects; class components use lifecycle methods',
      'Class components are the only way to use Context',
    ],
    answer: 2,
    explanation:
      'Since React 16.8, functional components have full feature parity via hooks. Functional components use `useState`, `useEffect`, etc. while class components use `this.state`, `componentDidMount`, etc. The React team recommends functional components for all new code.',
    tags: ['functional-components', 'class-components', 'hooks'],
    year: 2024,
  },
  {
    id: 'rf-008',
    topic: 'react-fundamentals',
    difficulty: 'junior',
    type: 'true-false',
    question: 'Props in React are immutable — a component should never modify its own props directly.',
    answer: true,
    explanation:
      'Props flow one-way from parent to child and are read-only from the child\'s perspective. Mutating props violates React\'s unidirectional data flow principle and can cause unpredictable rendering behavior. If a value needs to change, it should be managed as state in the parent.',
    tags: ['props', 'immutability', 'data-flow'],
    year: 2024,
  },
  {
    id: 'rf-009',
    topic: 'react-fundamentals',
    difficulty: 'mid',
    type: 'code-output',
    question: 'What does the following component render?',
    code: `function Wrapper({ children }) {
  return <div className="wrapper">{children}</div>;
}

function App() {
  return (
    <Wrapper>
      <p>Hello</p>
      <p>World</p>
    </Wrapper>
  );
}`,
    options: [
      'Two `<p>` tags inside a `<div className="wrapper">`',
      'An error — Wrapper does not accept children',
      'Nothing — children are ignored unless explicitly rendered',
      'A `<div>` with string "[object Object]"',
    ],
    answer: 0,
    explanation:
      '`children` is a special prop automatically populated with whatever JSX is nested between a component\'s opening and closing tags. Here `children` is an array of two `<p>` elements, which are rendered inside the wrapper div.',
    tags: ['children', 'props', 'composition'],
    year: 2024,
  },
  {
    id: 'rf-010',
    topic: 'react-fundamentals',
    difficulty: 'junior',
    type: 'mcq',
    question: 'What must be true for React to recognize a function as a valid component?',
    options: [
      'It must extend React.Component',
      'It must be declared with the `function` keyword (not arrow functions)',
      'Its name must start with an uppercase letter and it must return JSX or null',
      'It must be registered with ReactDOM.register()',
    ],
    answer: 2,
    explanation:
      'React distinguishes between DOM elements (lowercase tags) and components (uppercase tags) purely by the first character of the identifier used in JSX. A component can be any function (arrow or declaration) that returns renderable content (JSX, null, a string, etc.).',
    tags: ['components', 'naming-convention', 'jsx'],
    year: 2024,
  },

  // --- State with useState ---
  {
    id: 'rf-011',
    topic: 'react-fundamentals',
    difficulty: 'junior',
    type: 'mcq',
    question: '`useState` returns which of the following?',
    options: [
      'The current state value only',
      'An object `{ value, setValue }`',
      'A tuple `[currentState, setterFunction]`',
      'A Promise that resolves to the state value',
    ],
    answer: 2,
    explanation:
      '`useState` returns a two-element array (tuple): the current state value and a setter function. Destructuring `const [count, setCount] = useState(0)` is the standard pattern. The setter triggers a re-render when called with a new value.',
    tags: ['useState', 'state', 'hooks'],
    year: 2024,
  },
  {
    id: 'rf-012',
    topic: 'react-fundamentals',
    difficulty: 'mid',
    type: 'code-output',
    question: 'What is logged after clicking the button once?',
    code: `function Counter() {
  const [count, setCount] = React.useState(0);

  function handleClick() {
    setCount(count + 1);
    setCount(count + 1);
    console.log(count);
  }

  return <button onClick={handleClick}>{count}</button>;
}`,
    options: [
      '2, and the button shows 2',
      '0, and the button shows 1',
      '1, and the button shows 2',
      '0, and the button shows 2',
    ],
    answer: 1,
    explanation:
      '`count` inside `handleClick` is captured from the current render (closure) — it is `0`. Both `setCount(count + 1)` calls enqueue `setCount(0 + 1)`, so state is only incremented once to `1`. The `console.log` runs synchronously before the re-render, so it logs `0`. The button then re-renders showing `1`. To correctly increment twice, use the functional form: `setCount(prev => prev + 1)`.',
    tags: ['useState', 'stale-closure', 'batching'],
    year: 2024,
  },
  {
    id: 'rf-013',
    topic: 'react-fundamentals',
    difficulty: 'mid',
    type: 'true-false',
    question: 'State updates in React are always synchronous — calling `setState` immediately updates `this.state` or the state variable.',
    answer: false,
    explanation:
      'State updates are asynchronous and batched. After calling `setState` or a `useState` setter, the variable still holds the old value in the current execution. React schedules a re-render and the new value is only available in the next render cycle. In React 18, all updates are batched by default, including those inside `setTimeout` and native event handlers.',
    tags: ['useState', 'async', 'batching'],
    year: 2024,
  },

  // --- Conditional Rendering ---
  {
    id: 'rf-014',
    topic: 'react-fundamentals',
    difficulty: 'junior',
    type: 'code-output',
    question: 'What does this render when `isLoggedIn` is `false`?',
    code: `function App({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn && <p>Welcome back!</p>}
      {isLoggedIn ? <p>Dashboard</p> : <p>Please log in</p>}
    </div>
  );
}`,
    options: [
      'Nothing inside the div',
      'Just `<p>Please log in</p>`',
      '`false` text and `<p>Please log in</p>`',
      '`<p>Welcome back!</p>` and `<p>Please log in</p>`',
    ],
    answer: 1,
    explanation:
      'When `isLoggedIn` is `false`: `false && <p>...</p>` evaluates to `false`, which React does not render (falsy values `false`, `null`, `undefined` are not rendered). The ternary renders the else branch: `<p>Please log in</p>`. Note: `0 && <p/>` would render `0` since `0` is a falsy number that React does render.',
    tags: ['conditional-rendering', 'logical-and', 'ternary'],
    year: 2024,
  },
  {
    id: 'rf-015',
    topic: 'react-fundamentals',
    difficulty: 'mid',
    type: 'debug',
    question: 'The following code has a common bug with conditional rendering. Identify and fix it.',
    code: `function NotificationBadge({ count }) {
  return (
    <div>
      {count && <span className="badge">{count}</span>}
    </div>
  );
}`,
    options: [
      'No bug — renders correctly for all values',
      'Bug: when `count` is `0`, React renders `0` instead of nothing. Fix: use `count > 0 &&` or `!!count &&`',
      'Bug: `count` must be a string, not a number',
      'Bug: `&&` does not work in JSX, use a ternary instead',
    ],
    answer: 1,
    solutionCode: `function NotificationBadge({ count }) {
  return (
    <div>
      {count > 0 && <span className="badge">{count}</span>}
    </div>
  );
}`,
    explanation:
      'When `count` is `0`, `0 && <span>...</span>` short-circuits and the expression evaluates to `0`. React renders `0` in the DOM, which is probably unintended. The fix is `count > 0 && <span>...</span>` or `Boolean(count) && <span>...</span>` to ensure a proper boolean.',
    tags: ['conditional-rendering', 'falsy', 'debug', 'zero'],
    year: 2024,
  },

  // --- Lists and Keys ---
  {
    id: 'rf-016',
    topic: 'react-fundamentals',
    difficulty: 'junior',
    type: 'mcq',
    question: 'Why does React require a `key` prop on elements inside a mapped list?',
    options: [
      'For CSS styling purposes',
      'To give the element a unique HTML id attribute',
      'To help React identify which items changed, were added, or removed during reconciliation',
      'It is optional and only improves developer experience',
    ],
    answer: 2,
    explanation:
      'Keys give React a stable identity for each element in a dynamic list. During reconciliation, React uses keys to match elements between renders, enabling it to reuse existing DOM nodes rather than recreating them. Without keys, React falls back to index-based matching which can cause incorrect state retention and poor performance.',
    tags: ['lists', 'keys', 'reconciliation'],
    year: 2024,
  },
  {
    id: 'rf-017',
    topic: 'react-fundamentals',
    difficulty: 'mid',
    type: 'true-false',
    question: 'Using array index as `key` is always safe and produces no bugs.',
    answer: false,
    explanation:
      'Using index as key causes bugs when the list can be reordered, filtered, or has items inserted/removed from the middle. React will reassign keys to wrong elements, potentially causing state (e.g., input values, animations) to be associated with the wrong item. Stable unique IDs from your data should always be preferred.',
    tags: ['lists', 'keys', 'index-as-key', 'pitfall'],
    year: 2024,
  },

  // --- Event Handling & Synthetic Events ---
  {
    id: 'rf-018',
    topic: 'react-fundamentals',
    difficulty: 'junior',
    type: 'mcq',
    question: 'What is a React SyntheticEvent?',
    options: [
      'A custom event type defined by the developer',
      'A cross-browser wrapper around the native browser event with the same API',
      'An event that fires before the real DOM event',
      'A debounced version of a native event',
    ],
    answer: 1,
    explanation:
      'React wraps native browser events in a `SyntheticEvent` object that normalizes the API across browsers (e.g., `stopPropagation`, `preventDefault` work consistently). In React 17+, event delegation moved from `document` to the React root container, and event pooling (where synthetic events were reused) was removed.',
    tags: ['events', 'synthetic-events', 'event-handling'],
    year: 2024,
  },
  {
    id: 'rf-019',
    topic: 'react-fundamentals',
    difficulty: 'mid',
    type: 'debug',
    question: 'What is wrong with this event handler?',
    code: `function Form() {
  function handleSubmit(e) {
    // prevent page reload
    e.preventDefault;
    console.log('submitted');
  }

  return <form onSubmit={handleSubmit}>...</form>;
}`,
    options: [
      'Nothing is wrong',
      '`e.preventDefault` should be called as `e.preventDefault()` — without the parentheses it is just a property reference, not a call',
      '`handleSubmit` should be an arrow function',
      '`onSubmit` should be `on-submit`',
    ],
    answer: 1,
    solutionCode: `function Form() {
  function handleSubmit(e) {
    // prevent page reload
    e.preventDefault();
    console.log('submitted');
  }

  return <form onSubmit={handleSubmit}>...</form>;
}`,
    explanation:
      '`e.preventDefault` without `()` simply references the method without invoking it. The form will still submit and cause a page reload. This is a very common typo. Always call it as `e.preventDefault()` with parentheses.',
    tags: ['events', 'preventDefault', 'debug'],
    year: 2024,
  },
  {
    id: 'rf-020',
    topic: 'react-fundamentals',
    difficulty: 'mid',
    type: 'mcq',
    question: 'How should you pass an argument to an event handler in JSX?',
    code: `// Desired: call deleteItem(id) when button is clicked
<button onClick={???}>Delete</button>`,
    options: [
      '`onClick={deleteItem(id)}` — call it directly with the argument',
      '`onClick={() => deleteItem(id)}` — wrap it in an arrow function',
      '`onClick={deleteItem, id}` — pass as two props',
      '`onClick={deleteItem.bind(id)}` — bind only works for class components',
    ],
    answer: 1,
    solutionCode: `// Correct: call deleteItem(id) when button is clicked
<button onClick={() => deleteItem(id)}>Delete</button>`,
    explanation:
      '`onClick={deleteItem(id)}` immediately calls `deleteItem(id)` during render and assigns the return value as the handler — almost always a bug. The correct pattern is to wrap in an arrow function: `onClick={() => deleteItem(id)}`. Alternatively, `onClick={deleteItem.bind(null, id)}` also works but is less idiomatic in modern React.',
    tags: ['events', 'event-handlers', 'arrow-functions'],
    year: 2024,
  },

  // --- Controlled vs Uncontrolled ---
  {
    id: 'rf-021',
    topic: 'react-fundamentals',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is the difference between a controlled and uncontrolled input in React?',
    options: [
      'Controlled inputs use `ref`, uncontrolled inputs use `value`',
      'Controlled inputs have their value driven by React state; uncontrolled inputs store their own value in the DOM',
      'Controlled inputs are read-only; uncontrolled inputs are editable',
      'There is no practical difference',
    ],
    answer: 1,
    explanation:
      'A controlled input ties its value to React state: `<input value={state} onChange={e => setState(e.target.value)} />`. React is the "single source of truth." An uncontrolled input lets the DOM manage the value, accessed via a `ref`. Uncontrolled inputs are simpler for non-critical forms; controlled inputs enable instant validation and derived UI.',
    tags: ['controlled-components', 'uncontrolled-components', 'forms'],
    year: 2024,
  },
  {
    id: 'rf-022',
    topic: 'react-fundamentals',
    difficulty: 'mid',
    type: 'debug',
    question: 'This input generates a React warning. What is the issue?',
    code: `function SearchBox() {
  const [query, setQuery] = React.useState(undefined);
  return <input value={query} onChange={e => setQuery(e.target.value)} />;
}`,
    options: [
      'No issue — `undefined` is a valid initial state',
      'Warning: the component switches from uncontrolled to controlled. When `value` is `undefined` React treats the input as uncontrolled; when it later becomes a string it becomes controlled. Fix: initialize with `""` instead of `undefined`',
      'Warning: `onChange` is missing the `event.persist()` call',
      'Error: `useState` does not accept `undefined`',
    ],
    answer: 1,
    solutionCode: `function SearchBox() {
  const [query, setQuery] = React.useState('');
  return <input value={query} onChange={e => setQuery(e.target.value)} />;
}`,
    explanation:
      'React raises "A component is changing an uncontrolled input to be controlled" when the `value` prop transitions from `undefined`/`null` to an actual string. The fix is to initialize state with an empty string `""` so the input is controlled from the very first render.',
    tags: ['controlled-components', 'uncontrolled-components', 'debug', 'warning'],
    year: 2024,
  },

  // --- Component Lifecycle ---
  {
    id: 'rf-023',
    topic: 'react-fundamentals',
    difficulty: 'junior',
    type: 'mcq',
    question: 'In a functional component, which hook combination covers the full lifecycle (mount, update, unmount)?',
    options: [
      'Only `useState`',
      '`useEffect` with no deps array runs on mount + every update; its cleanup runs on unmount — covering all three lifecycle phases',
      '`useEffect(() => { return () => {} }, [])` covers all three phases',
      'Lifecycle phases only exist in class components',
    ],
    answer: 1,
    explanation:
      '`useEffect(callback)` without a dependency array runs after every render (mount + updates) and its cleanup function runs on unmount. This single hook covers all three class lifecycle phases: componentDidMount, componentDidUpdate, and componentWillUnmount. An empty deps array `[]` only covers mount and unmount — it skips updates.',
    tags: ['lifecycle', 'useEffect', 'mount', 'unmount'],
    year: 2024,
  },
  {
    id: 'rf-024',
    topic: 'react-fundamentals',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is the equivalent of `componentDidMount` in a functional component?',
    options: [
      '`useEffect(() => { ... })` — no deps array',
      '`useEffect(() => { ... }, [])` — empty deps array',
      '`useEffect(() => { ... }, null)` — null deps',
      '`useMounted(() => { ... })`',
    ],
    answer: 1,
    explanation:
      '`useEffect` with an empty deps array `[]` runs the effect exactly once after the initial render, matching `componentDidMount`. No deps array means the effect runs after every render (equivalent to `componentDidMount` + `componentDidUpdate`). Passing `null` is not a valid pattern.',
    tags: ['lifecycle', 'useEffect', 'componentDidMount'],
    year: 2024,
  },

  // --- React.StrictMode ---
  {
    id: 'rf-025',
    topic: 'react-fundamentals',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What does `React.StrictMode` do in development?',
    options: [
      'Prevents all runtime errors from crashing the app',
      'Enables TypeScript type-checking inside JSX',
      'Intentionally double-invokes functions like render and effects to surface side-effect bugs, and warns about deprecated APIs',
      'Forces the app to run in synchronous rendering mode',
    ],
    answer: 2,
    explanation:
      'In development, `StrictMode` double-invokes component functions, `useState` initializers, `useMemo`/`useReducer` callbacks, and effect setup+cleanup to help detect impure functions or missing cleanup. It also warns about deprecated lifecycle methods and legacy context. It has no effect in production.',
    tags: ['strict-mode', 'development', 'side-effects'],
    year: 2024,
  },

  // --- Fragments ---
  {
    id: 'rf-026',
    topic: 'react-fundamentals',
    difficulty: 'junior',
    type: 'mcq',
    question: 'What is the purpose of React Fragments (`<>...</>` or `<React.Fragment>`)?',
    options: [
      'To lazy-load component code',
      'To group multiple children without adding an extra DOM node',
      'To create isolated component scopes',
      'To provide a fallback UI for Suspense',
    ],
    answer: 1,
    explanation:
      'React requires components to return a single root element. Fragments let you group multiple elements without inserting a wrapping `<div>` into the DOM. The short syntax `<>...</>` does not support `key` or other props; `<React.Fragment key={id}>` is needed when you require a key (e.g., in lists).',
    tags: ['fragments', 'jsx', 'dom'],
    year: 2024,
  },

  // --- Portals ---
  {
    id: 'rf-027',
    topic: 'react-fundamentals',
    difficulty: 'senior',
    type: 'mcq',
    question: 'When would you use `ReactDOM.createPortal(child, container)`?',
    options: [
      'To render a component in a web worker',
      'To render children into a DOM node outside the parent component\'s DOM hierarchy, while keeping React context intact',
      'To create a micro-frontend boundary',
      'To lazy-load a component only when it enters the viewport',
    ],
    answer: 1,
    explanation:
      'Portals render JSX into an arbitrary DOM node (e.g., `document.body`) outside the React tree\'s physical DOM parent, which is useful for modals, tooltips, and overlays that need to escape `overflow:hidden` or z-index stacking contexts. Crucially, React events (including bubbling) still follow the React component tree, not the DOM tree.',
    tags: ['portals', 'modal', 'dom'],
    year: 2024,
  },

  // --- Misc Fundamentals ---
  {
    id: 'rf-028',
    topic: 'react-fundamentals',
    difficulty: 'junior',
    type: 'true-false',
    question: 'A React component can return `null` to render nothing.',
    answer: true,
    explanation:
      'Returning `null` from a component is a valid and common pattern for conditional rendering. It renders nothing to the DOM and does not affect React\'s lifecycle — effects still run on mount/update/unmount even for components that return null.',
    tags: ['components', 'null', 'conditional-rendering'],
    year: 2024,
  },
  {
    id: 'rf-029',
    topic: 'react-fundamentals',
    difficulty: 'mid',
    type: 'code-output',
    question: 'What is rendered?',
    code: `function App() {
  return (
    <>
      {null}
      {undefined}
      {false}
      {0}
      <span>visible</span>
    </>
  );
}`,
    options: [
      'Only `<span>visible</span>`',
      '`0` and `<span>visible</span>`',
      '`nullundefinedfalse0` and `<span>visible</span>`',
      'A runtime error',
    ],
    answer: 1,
    explanation:
      '`null`, `undefined`, and `false` are intentionally not rendered by React. However, `0` (number zero) IS rendered because it is a valid React node. This is a common gotcha: `{items.length && <List />}` renders `0` when the array is empty. The fix: `{items.length > 0 && <List />}`.',
    tags: ['rendering', 'falsy', 'zero', 'null'],
    year: 2024,
  },
  {
    id: 'rf-030',
    topic: 'react-fundamentals',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is the difference between `React.cloneElement(element, props)` and wrapping in a new component?',
    options: [
      'They are identical — `cloneElement` is just syntactic sugar',
      '`cloneElement` copies the element and merges additional props onto it (useful in HOC/compound component patterns); wrapping adds a new component layer in the tree',
      '`cloneElement` only works on class components',
      '`cloneElement` always creates a deep copy of the element\'s children',
    ],
    answer: 1,
    explanation:
      '`React.cloneElement` is useful in patterns like compound components or render props where a parent needs to inject additional props (e.g., `isActive`, `onClick`) onto children passed via `children` or a render prop — without adding extra DOM/component layers. It merges props shallowly with the original, keeping the existing key and ref unless overridden.',
    tags: ['cloneElement', 'compound-components', 'HOC', 'advanced'],
    year: 2024,
  },
  {
    id: 'rf-031',
    topic: 'react-fundamentals',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is the purpose of `React.Children.map` over a native `Array.map` on `children`?',
    options: [
      'It is faster than native map',
      'It safely handles `children` being `undefined`, a single element, or an array without the caller needing to normalize first',
      'It automatically adds keys to every child',
      'It filters out `null` and `false` children',
    ],
    answer: 1,
    explanation:
      '`props.children` is polymorphic: it can be `undefined` (no children), a single React element (not an array), or an array. Calling `.map()` directly on it fails when it is a single element. `React.Children.map` handles all cases uniformly. `React.Children.toArray` is another utility that always returns a flat array.',
    tags: ['children', 'React.Children', 'utilities'],
    year: 2024,
  },
  {
    id: 'rf-032',
    topic: 'react-fundamentals',
    difficulty: 'lead',
    type: 'mcq',
    question: 'In React 18, what changed about automatic batching compared to React 17?',
    options: [
      'Batching was removed — all updates are now flushed synchronously',
      'Batching now applies only to `useTransition` updates',
      'React 18 batches all state updates by default (including inside `setTimeout`, Promises, and native event handlers), whereas React 17 only batched updates inside React event handlers',
      'React 18 introduced batching for the first time',
    ],
    answer: 2,
    explanation:
      'React 17 batched updates only inside React-managed event handlers. Updates inside `setTimeout`, `setInterval`, native `addEventListener`, or Promises triggered multiple re-renders. React 18\'s automatic batching groups all updates in the same microtask/task queue entry into a single re-render, improving performance. Use `ReactDOM.flushSync()` to opt out of batching when needed.',
    tags: ['batching', 'react-18', 'rendering', 'flushSync'],
    year: 2024,
  },

  // --- React 19: ref as prop ---
  {
    id: 'react-fund-033',
    topic: 'react-fundamentals',
    difficulty: 'mid',
    type: 'mcq',
    question: 'In React 19, how do you pass a ref to a child functional component without using `forwardRef`?',
    options: [
      'You still must use `React.forwardRef` — nothing changed',
      'Pass `ref` as a regular prop; React 19 allows function components to accept `ref` directly in their props object',
      'Use a custom prop name like `innerRef` and assign it manually',
      'Use `useImperativeHandle` at the call site',
    ],
    answer: 1,
    explanation:
      'React 19 removed the need for `forwardRef`. Function components now receive `ref` as a plain prop alongside all other props: `function Input({ ref, ...props }) { return <input ref={ref} {...props} />; }`. `React.forwardRef` still works for backward compatibility but is now considered legacy. This simplifies component authoring significantly.',
    tags: ['react-19', 'ref', 'forwardRef', 'props'],
    year: 2025,
  },

  // --- React 19: Context as provider ---
  {
    id: 'react-fund-034',
    topic: 'react-fundamentals',
    difficulty: 'mid',
    type: 'mcq',
    question: 'In React 19, how do you render a context provider?',
    options: [
      '`<ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>`',
      '`<ThemeContext value={theme}>{children}</ThemeContext>` — the context object itself can be used as a provider',
      '`<Provider context={ThemeContext} value={theme}>{children}</Provider>`',
      'Context providers were removed in React 19',
    ],
    answer: 1,
    explanation:
      'React 19 allows rendering `<ThemeContext value={theme}>` directly — the context object is now a valid JSX element that acts as its own provider. The `<ThemeContext.Provider>` syntax still works but is deprecated. This reduces boilerplate and makes context usage more concise.',
    tags: ['react-19', 'context', 'provider', 'jsx'],
    year: 2025,
  },

  // --- React.createElement vs new JSX transform ---
  {
    id: 'react-fund-035',
    topic: 'react-fundamentals',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is the key practical difference between the classic JSX transform (`React.createElement`) and the new JSX transform (`react/jsx-runtime`)?',
    options: [
      'The new transform is slower but produces smaller bundles',
      'The new transform auto-imports `_jsx` from `react/jsx-runtime`, so you no longer need `import React from "react"` in every file. The runtime also has minor performance improvements for children handling.',
      'The new transform only works with TypeScript',
      'The new transform produces different DOM output',
    ],
    answer: 1,
    explanation:
      'Before React 17, every file using JSX needed `import React from "react"` because JSX compiled to `React.createElement(...)`. The new JSX transform (React 17+) auto-imports `_jsx`/`_jsxs` from `react/jsx-runtime` at compile time — no manual React import needed. It also handles single vs. multiple children more efficiently by separating them from the props object.',
    tags: ['jsx', 'jsx-transform', 'createElement', 'jsx-runtime'],
    year: 2025,
  },

  // --- Hydration mismatches ---
  {
    id: 'react-fund-036',
    topic: 'react-fundamentals',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What causes a React hydration mismatch warning and what are the common fixes?',
    options: [
      'Using `useEffect` inside a Server Component',
      'The server-rendered HTML does not match what React tries to render on the client. Common causes: rendering `Date.now()`, `Math.random()`, browser-only APIs, or locale-dependent data on server vs. client. Fixes: use `useId` for IDs, suppress with `suppressHydrationWarning`, or defer browser-only rendering with `useEffect`.',
      'A missing `key` prop on list items during SSR',
      'Using async components in the client bundle',
    ],
    answer: 1,
    explanation:
      'Hydration mismatches occur when the server HTML and the initial client render produce different output. React logs a warning and patches the DOM (React 18 is more lenient with attribute mismatches but still errors on text/structure mismatches). Common culprits: `new Date()`, `Math.random()`, `window` checks, timestamps, or user-specific data rendered server-side. The `suppressHydrationWarning` prop silences a single element\'s mismatch for intentional differences.',
    tags: ['hydration', 'SSR', 'mismatch', 'debug'],
    year: 2025,
  },

  // --- React DevTools ---
  {
    id: 'react-fund-037',
    topic: 'react-fundamentals',
    difficulty: 'junior',
    type: 'mcq',
    question: 'What does the "Profiler" tab in React DevTools allow you to do?',
    options: [
      'Edit component source code in the browser',
      'Record renders, see which components rendered in each commit, how long each took, and why they rendered (what triggered the re-render)',
      'Monitor network requests made by components',
      'Run unit tests inside the browser',
    ],
    answer: 1,
    explanation:
      'The React DevTools Profiler records a session of commits. For each commit it shows a flame graph of all components that rendered, ranked by render time. Clicking a component shows "why did this render?" — which props/state/context changed. This is the primary tool for diagnosing unnecessary re-renders and performance bottlenecks.',
    tags: ['devtools', 'profiler', 'performance', 'debugging'],
    year: 2025,
  },

  // --- Prop drilling solutions ---
  {
    id: 'react-fund-038',
    topic: 'react-fundamentals',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What are the main solutions to prop drilling in React?',
    options: [
      'Only Redux can solve prop drilling',
      'React Context (for low-frequency global data), component composition (passing components/children instead of raw data), and external state managers (Zustand, Jotai) for high-frequency or complex state',
      'Rename props at each level to avoid the problem',
      'Use `React.cloneElement` to inject props automatically at every level',
    ],
    answer: 1,
    explanation:
      'Prop drilling — passing props through many intermediate components that don\'t use them — has several solutions: (1) **Context API**: share values without explicit prop passing; best for infrequently changing data. (2) **Component composition**: pass the final consumer component as a prop/children, skipping intermediaries entirely. (3) **State management libraries**: Zustand, Jotai, Redux Toolkit offer fine-grained subscriptions. Choose the simplest solution for the use case.',
    tags: ['prop-drilling', 'context', 'composition', 'architecture'],
    year: 2025,
  },

  // --- Composition patterns ---
  {
    id: 'react-fund-039',
    topic: 'react-fundamentals',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is the "render slot" / named children pattern and when is it useful?',
    code: `function Layout({ header, sidebar, children }) {
  return (
    <div>
      <header>{header}</header>
      <aside>{sidebar}</aside>
      <main>{children}</main>
    </div>
  );
}`,
    options: [
      'An anti-pattern — components should only use a single `children` prop',
      'Passing named JSX props (like `header` and `sidebar`) as "slots" gives consumers control over multiple independently-placed regions of a component without deeply nesting wrappers',
      'It is only possible with class components using `this.props`',
      'The `children` prop cannot be used alongside other JSX props',
    ],
    answer: 1,
    explanation:
      'Named slot props allow a component to define multiple independently-composable regions. Unlike deeply nested children hierarchies, slots let the consumer provide arbitrary JSX for each region while the component controls layout. This is common in layout components, dialogs (header/footer/body), and design system shells. It reduces coupling compared to passing raw data props.',
    tags: ['composition', 'render-slots', 'children', 'props', 'pattern'],
    year: 2025,
  },

  // --- defaultProps deprecation ---
  {
    id: 'react-fund-040',
    topic: 'react-fundamentals',
    difficulty: 'mid',
    type: 'mcq',
    question: 'In React 19, what is the preferred way to define default prop values for a functional component, and why was `defaultProps` deprecated?',
    options: [
      '`defaultProps` is still the recommended approach in React 19',
      'Use JavaScript default parameter destructuring: `function Button({ color = "blue", size = "md" }) {}`. `defaultProps` on function components is deprecated because the same is achievable natively and `defaultProps` added runtime overhead.',
      'Use a separate `getDefaultProps()` static method',
      'Wrap the component in `React.memo` with a defaults argument',
    ],
    answer: 1,
    explanation:
      'React 19 officially deprecated `Component.defaultProps` for function components (it will be removed in a future major). The idiomatic replacement is ES6 default parameter destructuring: `function Button({ color = "blue" }) {}`. This is evaluated by the JS engine directly, requires no React-specific machinery, and works correctly with TypeScript inference. `defaultProps` still works on class components for now.',
    tags: ['defaultProps', 'react-19', 'deprecation', 'props', 'defaults'],
    year: 2025,
  },

  // --- Key reconciliation edge cases ---
  {
    id: 'react-fund-041',
    topic: 'react-fundamentals',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What happens to a component\'s state when you change its `key` prop?',
    options: [
      'The state is preserved because the component type is the same',
      'React unmounts the old component instance and mounts a fresh one, resetting all state and effects',
      'Only the local state resets; context values are preserved',
      'The component re-renders but state is merged with the new key',
    ],
    answer: 1,
    explanation:
      'Changing `key` is the React-idiomatic way to force a full reset of a component. React treats a different key as a different element identity: it unmounts the old instance (running cleanup effects) and mounts a new one with fresh state. This is deliberately used to reset form fields (`<Form key={userId} />`) or animations when a user changes. It is more reliable than manually resetting state in a `useEffect`.',
    tags: ['key', 'reconciliation', 'state-reset', 'unmount'],
    year: 2025,
  },

  // --- Key reconciliation: same key moves ---
  {
    id: 'react-fund-042',
    topic: 'react-fundamentals',
    difficulty: 'senior',
    type: 'debug',
    question: 'Why does this list reorder cause inputs to lose their typed values?',
    code: `function SortableList({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <input defaultValue={item.name} />
        </li>
      ))}
    </ul>
  );
}
// items reorder: [A, B, C] → [C, A, B]`,
    options: [
      'No bug — keys are correctly assigned',
      'Using index as key means keys stay 0/1/2 after reorder. React reuses DOM nodes by key position, so the input at index 0 keeps its DOM node (with typed value) but now shows item C\'s defaultValue — the uncontrolled input retains old user input. Fix: use stable item IDs as keys.',
      'The issue is with `defaultValue`; use `value` instead',
      'Sorting arrays always requires `React.startTransition`',
    ],
    answer: 1,
    solutionCode: `function SortableList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <input defaultValue={item.name} />
        </li>
      ))}
    </ul>
  );
}
// items reorder: [A, B, C] → [C, A, B]`,
    explanation:
      'Index-as-key causes React to reuse existing DOM nodes for items at the same index position. When the list reorders, the DOM input at index 0 retains whatever the user typed (its DOM state), while the `defaultValue` prop reflects the new item. Since `defaultValue` only sets the initial value, the input shows stale user input for a different item. Stable, item-derived keys (`key={item.id}`) ensure DOM nodes follow the data correctly.',
    tags: ['key', 'index-as-key', 'reconciliation', 'uncontrolled', 'debug'],
    year: 2025,
  },

  // --- Fragment shorthand limitations ---
  {
    id: 'react-fund-043',
    topic: 'react-fundamentals',
    difficulty: 'junior',
    type: 'mcq',
    question: 'When must you use `<React.Fragment>` instead of the shorthand `<>...</>`?',
    options: [
      'Always — the shorthand is not supported in TypeScript projects',
      'When you need to pass a `key` prop (e.g., in a list) or any other prop to the fragment',
      'When the fragment has more than two children',
      'When the fragment is the root element of a component',
    ],
    answer: 1,
    explanation:
      'The `<>...</>` shorthand syntax does not support any attributes. If you need a `key` (required when rendering fragments in a list), you must use the explicit form: `<React.Fragment key={item.id}>`. In practice, fragments rarely need other props — `key` is the primary reason to use the long form.',
    tags: ['fragments', 'key', 'jsx', 'shorthand'],
    year: 2025,
  },

  // --- Prop drilling via composition (children lifting) ---
  {
    id: 'react-fund-044',
    topic: 'react-fundamentals',
    difficulty: 'senior',
    type: 'mcq',
    question: 'How does "component composition" avoid prop drilling without using Context?',
    code: `// Instead of:
// <Page user={user} />  →  <Layout user={user} />  →  <Sidebar user={user} />  →  <Avatar user={user} />

// You can do:
function Page({ user }) {
  return <Layout sidebar={<Sidebar avatar={<Avatar user={user} />} />} />;
}`,
    options: [
      'It doesn\'t — you still need Context',
      'By composing components at the top level and passing them as JSX props/children, intermediary components receive opaque JSX nodes rather than raw data, eliminating the need to pass the `user` prop through `Layout` and `Sidebar`',
      'This pattern only works for styling props, not data props',
      'It requires the child components to accept `React.ElementType` props only',
    ],
    answer: 1,
    explanation:
      'When you pass `<Avatar user={user} />` (already rendered with the data it needs) as a prop to `Layout`, the `Layout` component never needs to know about `user`. It just places the slot. This is "inversion of control" — the data owner (`Page`) assembles the deep component at the top and passes it through intermediaries as opaque JSX, eliminating prop drilling entirely for those intermediaries.',
    tags: ['composition', 'prop-drilling', 'children', 'inversion-of-control'],
    year: 2025,
  },

  // --- StrictMode double-invoke in React 19 ---
  {
    id: 'react-fund-045',
    topic: 'react-fundamentals',
    difficulty: 'mid',
    type: 'true-false',
    question: 'In React 19 StrictMode, each component mounts, unmounts, and then remounts again during development to help surface cleanup bugs.',
    answer: true,
    explanation:
      'React 19 StrictMode intentionally mounts every component twice (mount → unmount → remount) in development. This simulates what will happen in a future React feature (Offscreen/Activity) where components may be hidden and reshown. It surfaces missing cleanup in `useEffect` — if your effect doesn\'t clean up properly, you\'ll see duplicate subscriptions, network requests, or log entries on the second mount.',
    tags: ['strict-mode', 'react-19', 'mount', 'cleanup', 'development'],
    year: 2025,
  },

  // --- Synthetic events React 17+ delegation change ---
  {
    id: 'react-fund-046',
    topic: 'react-fundamentals',
    difficulty: 'senior',
    type: 'mcq',
    question: 'In React 17+, where does React attach its event delegation listener, and why does it matter?',
    options: [
      'On `document` — same as React 16',
      'On the React root container element (e.g., `document.getElementById("root")`), enabling multiple React versions on the same page without event conflicts',
      'On each individual DOM node',
      'On `window` to capture all events globally',
    ],
    answer: 1,
    explanation:
      'React 16 attached all delegated event listeners to `document`. React 17 moved them to the root DOM container. This is critical for micro-frontends and gradual migration scenarios: two React trees (e.g., React 16 and React 17) on the same page no longer conflict because their listeners are scoped to their own roots. It also means `e.nativeEvent.stopPropagation()` behaves more intuitively.',
    tags: ['events', 'event-delegation', 'react-17', 'synthetic-events'],
    year: 2025,
  },

  // --- Reconciliation: same position same state ---
  {
    id: 'react-fund-047',
    topic: 'react-fundamentals',
    difficulty: 'senior',
    type: 'code-output',
    question: 'What happens to the counter state when `isFancy` toggles?',
    code: `function App({ isFancy }) {
  return (
    <div>
      {isFancy ? (
        <Counter style={{ color: 'pink' }} />
      ) : (
        <Counter style={{ color: 'black' }} />
      )}
    </div>
  );
}`,
    options: [
      'State resets to 0 because a new Counter is rendered',
      'State is preserved — both branches render the same `Counter` component type at the same position in the tree',
      'React throws a warning about conditional rendering',
      'State resets because the `style` prop changed',
    ],
    answer: 1,
    explanation:
      'React\'s reconciler tracks component identity by type + position in the tree. Both ternary branches produce a `<Counter>` element at the same position inside the `<div>`. Because the type is identical, React reuses the existing component instance and preserves state — only the `style` prop is updated. To force a reset, use different keys or different component types.',
    tags: ['reconciliation', 'state', 'conditional-rendering', 'position'],
    year: 2025,
  },

  // --- React DevTools Components tab ---
  {
    id: 'react-fund-048',
    topic: 'react-fundamentals',
    difficulty: 'junior',
    type: 'mcq',
    question: 'What can you do in the "Components" tab of React DevTools?',
    options: [
      'Only view the component tree — no interaction is possible',
      'Inspect and live-edit props, state, and context of any selected component; navigate the component hierarchy; and see hooks values in real time',
      'Run performance benchmarks on individual components',
      'Generate TypeScript interfaces from component props',
    ],
    answer: 1,
    explanation:
      'The Components tab shows the full React component tree. Selecting a component reveals its current props, state (useState values), context, and hooks. You can directly edit state/props in the panel to test UI changes without modifying code. You can also force re-renders, toggle Suspense boundaries, and inspect component source. It is the primary debugging tool for component-level issues.',
    tags: ['devtools', 'components-tab', 'debugging', 'state', 'props'],
    year: 2025,
  },

  // --- Controlled forms: textarea and select ---
  {
    id: 'react-fund-049',
    topic: 'react-fundamentals',
    difficulty: 'junior',
    type: 'true-false',
    question: 'In React, `<textarea>` uses a `value` prop (not inner text content) and `<select>` uses a `value` prop (not `selected` on `<option>`) for controlled form behavior.',
    answer: true,
    explanation:
      'React normalizes form elements: `<textarea value={val} onChange={fn} />` (not `<textarea>{val}</textarea>`), and `<select value={selectedOption} onChange={fn}>` (not putting `selected` on `<option>`). This consistent `value`/`onChange` API across all form elements makes controlled forms uniform and predictable. For multi-select, pass an array: `<select multiple value={[...]} />`.',
    tags: ['controlled-components', 'forms', 'textarea', 'select'],
    year: 2025,
  },

  // --- JSX expressions vs strings ---
  {
    id: 'react-fund-050',
    topic: 'react-fundamentals',
    difficulty: 'junior',
    type: 'code-output',
    question: 'What does the following render?',
    code: `function App() {
  const name = 'Alice';
  return <p>Hello, {name}! You have {2 + 3} messages.</p>;
}`,
    options: [
      '`Hello, {name}! You have {2 + 3} messages.`',
      '`Hello, Alice! You have 5 messages.`',
      '`Hello, Alice! You have 2 + 3 messages.`',
      'A syntax error — arithmetic is not allowed in JSX',
    ],
    answer: 1,
    explanation:
      'JSX `{}` evaluates any JavaScript expression: variable references, arithmetic, function calls, ternaries, etc. `{name}` evaluates to `"Alice"` and `{2 + 3}` evaluates to `5`. The rendered output is the paragraph element with the string "Hello, Alice! You have 5 messages.".',
    tags: ['jsx', 'expressions', 'interpolation'],
    year: 2025,
  },

  // --- React.memo custom comparator ---
  {
    id: 'react-fund-051',
    topic: 'react-fundamentals',
    difficulty: 'senior',
    type: 'mcq',
    question: 'When would you pass a custom comparison function to `React.memo`?',
    code: `const MyList = React.memo(List, (prevProps, nextProps) => {
  return prevProps.items.length === nextProps.items.length;
});`,
    options: [
      'You should never pass a custom comparator — it always causes bugs',
      'When the default shallow comparison is too strict (e.g., a new array reference that contains the same items) and you want to define a more specific equality check to skip re-renders',
      'When your component uses TypeScript generics',
      'When the component reads from Context — the default comparison ignores context',
    ],
    answer: 1,
    explanation:
      'The second argument to `React.memo` is `areEqual(prevProps, nextProps)` — return `true` to skip re-render, `false` to allow it (opposite of `shouldComponentUpdate`). Use this when a shallow comparison would always return `false` due to reference changes (new array/object from parent) but the rendered output would be the same. Beware: an overly aggressive comparator that skips necessary renders can cause stale UI bugs.',
    tags: ['React.memo', 'custom-comparator', 'performance', 'memoization'],
    year: 2025,
  },

  // --- React 19: document metadata ---
  {
    id: 'react-fund-052',
    topic: 'react-fundamentals',
    difficulty: 'mid',
    type: 'mcq',
    question: 'In React 19, how can you set the page `<title>` and `<meta>` tags from within a component?',
    options: [
      'Only via `document.title = ...` in a `useEffect`',
      'React 19 allows rendering `<title>`, `<meta>`, and `<link>` tags directly inside any component; React automatically hoists them to `<head>` on both client and server',
      'Use the `react-helmet` library — React does not support head tags natively',
      'Head metadata can only be set in the root `App` component',
    ],
    answer: 1,
    explanation:
      'React 19 introduces native support for document metadata. You can render `<title>My Page</title>` or `<meta name="description" content="..." />` inside any component and React automatically moves them to the `<head>`. On the server they are included in the streamed HTML. This eliminates the need for external libraries like `react-helmet` or `next/head` for basic metadata management.',
    tags: ['react-19', 'document-metadata', 'title', 'meta', 'head'],
    year: 2025,
  },
]
