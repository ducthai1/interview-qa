import type { Question } from '../types'

export const browserDomQuestions: Question[] = [
  // ─── DOM TRAVERSAL ────────────────────────────────────────────────────────────
  {
    id: 'dom-001',
    topic: 'browser-dom',
    difficulty: 'junior',
    type: 'mcq',
    question: 'What is the difference between `querySelector` and `querySelectorAll`?',
    options: [
      '`querySelector` returns all matches; `querySelectorAll` returns only the first',
      '`querySelector` returns the first matching Element or null; `querySelectorAll` returns a static NodeList of all matches',
      '`querySelector` returns a live HTMLCollection; `querySelectorAll` returns a static NodeList',
      'They are identical — both return a live NodeList',
    ],
    answer: 1,
    explanation:
      '`querySelector` returns the **first** element that matches the CSS selector, or `null` if none match. `querySelectorAll` returns a **static** (non-live) `NodeList` containing **all** matching elements. Unlike `getElementsByClassName` / `getElementsByTagName`, the NodeList from `querySelectorAll` does not update when the DOM changes.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector',
      'https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll',
    ],
    tags: ['querySelector', 'querySelectorAll', 'NodeList', 'dom-traversal'],
    year: 2025,
  },
  {
    id: 'dom-002',
    topic: 'browser-dom',
    difficulty: 'junior',
    type: 'mcq',
    question: 'Which method finds the nearest ancestor (or self) that matches a CSS selector?',
    options: [
      'element.parentNode',
      'element.closest(selector)',
      'element.querySelector(selector)',
      'element.matches(selector)',
    ],
    answer: 1,
    explanation:
      '`element.closest(selector)` walks up the DOM tree, starting from the element itself, and returns the first element that matches the selector. It returns `null` if no ancestor matches. `element.matches(selector)` only checks the element itself without traversing ancestors.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/Element/closest',
    ],
    tags: ['closest', 'dom-traversal', 'ancestor'],
    year: 2025,
  },
  {
    id: 'dom-003',
    topic: 'browser-dom',
    difficulty: 'junior',
    type: 'mcq',
    question: 'What is the difference between `parentNode` and `parentElement`?',
    options: [
      'They are identical',
      '`parentNode` can be any Node type; `parentElement` is only set when the parent is an Element node',
      '`parentElement` can be any Node type; `parentNode` only returns Element nodes',
      '`parentNode` returns null for the document root; `parentElement` throws an error',
    ],
    answer: 1,
    explanation:
      '`parentNode` returns the parent of any Node (could be Document, DocumentFragment, or Element). `parentElement` returns the parent only if it is an `Element`; otherwise it returns `null`. For most cases in the body they are the same, but `document.documentElement.parentNode` is the `Document` object while `document.documentElement.parentElement` is `null`.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/Node/parentNode',
      'https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement',
    ],
    tags: ['parentNode', 'parentElement', 'dom-traversal'],
    year: 2025,
  },
  {
    id: 'dom-004',
    topic: 'browser-dom',
    difficulty: 'junior',
    type: 'code-output',
    question: 'What is logged?',
    code: `<ul id="list">
  <li>A</li>
  <!-- comment -->
  <li>B</li>
</ul>

const ul = document.getElementById('list')
console.log(ul.children.length)    // A
console.log(ul.childNodes.length)  // B`,
    answer: 'A: 2, B: 5',
    explanation:
      '`children` is an HTMLCollection of **Element** children only — it gives 2 `<li>` elements. `childNodes` includes ALL node types: text nodes (whitespace), comment nodes, and element nodes. Here: text (before A), li, text (between), comment, text (between), li, text (after) = 7 total. But with typical formatting after `<ul>` and between items: `\\n  ` text, `<li>A</li>`, `\\n  ` text, `<!-- comment -->` comment, `\\n  ` text, `<li>B</li>`, `\\n` text = 7 nodes. However in the minimal inline example it gives 5 (two `<li>` elements + three text nodes + one comment = counting the actual whitespace). The key takeaway: `children.length === 2` (elements only) vs `childNodes.length > 2` (includes text/comment nodes).',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/Element/children',
      'https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes',
    ],
    tags: ['children', 'childNodes', 'text-nodes', 'dom-traversal'],
    year: 2025,
  },
  {
    id: 'dom-005',
    topic: 'browser-dom',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is the difference between `nextSibling` and `nextElementSibling`?',
    options: [
      'They are identical',
      '`nextSibling` returns the next node of any type; `nextElementSibling` skips text/comment nodes and returns the next Element',
      '`nextElementSibling` returns the next node of any type; `nextSibling` returns only elements',
      '`nextSibling` only works on the document root',
    ],
    answer: 1,
    explanation:
      '`nextSibling` returns the next node in the same parent\'s `childNodes` list — which could be a Text node (whitespace between tags) or Comment node. `nextElementSibling` skips non-Element nodes and returns the next sibling that is an Element, or `null`. The same distinction applies to `previousSibling` vs `previousElementSibling`.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling',
      'https://developer.mozilla.org/en-US/docs/Web/API/Element/nextElementSibling',
    ],
    tags: ['nextSibling', 'nextElementSibling', 'dom-traversal'],
    year: 2025,
  },

  // ─── EVENT SYSTEM ─────────────────────────────────────────────────────────────
  {
    id: 'dom-006',
    topic: 'browser-dom',
    difficulty: 'junior',
    type: 'mcq',
    question: 'What is event bubbling in the browser?',
    options: [
      'An event fires only on the target element',
      'An event fires on the target, then propagates up through ancestor elements to the document root',
      'An event fires on the document root first, then propagates down to the target',
      'An event fires simultaneously on all elements',
    ],
    answer: 1,
    explanation:
      'Event propagation has three phases: (1) **Capture** — event travels from `window` down to the target\'s parent; (2) **Target** — event reaches the target element; (3) **Bubble** — event propagates back up from the target through ancestors to `window`. Most events bubble by default. Listeners added with `addEventListener(event, fn)` (no third arg) run in the bubble phase.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling',
    ],
    tags: ['event-bubbling', 'event-propagation', 'event-system'],
    year: 2025,
  },
  {
    id: 'dom-007',
    topic: 'browser-dom',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is the difference between `event.target` and `event.currentTarget`?',
    options: [
      '`event.target` is the element the listener is attached to; `event.currentTarget` is the element that triggered the event',
      '`event.target` is the element that originally triggered the event; `event.currentTarget` is the element whose listener is currently being invoked',
      'They always reference the same element',
      '`event.currentTarget` is always `document`',
    ],
    answer: 1,
    explanation:
      '`event.target` is the element that **dispatched** the event (where the click/key/etc. actually happened). `event.currentTarget` is the element to which the **current event listener** is attached. These differ when using event delegation: clicking a `<button>` inside a `<div>` that has the listener means `target` is the `<button>` and `currentTarget` is the `<div>`.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/Event/target',
      'https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget',
    ],
    tags: ['event.target', 'event.currentTarget', 'event-delegation'],
    year: 2025,
  },
  {
    id: 'dom-008',
    topic: 'browser-dom',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is event delegation and why is it useful?',
    options: [
      'Attaching a separate listener to every child element for performance',
      'Attaching a single listener to a parent element and using event.target to determine which child triggered it, reducing memory usage',
      'Preventing events from bubbling past a certain element',
      'Using Web Workers to process events off the main thread',
    ],
    answer: 1,
    explanation:
      'Event delegation leverages bubbling: instead of attaching listeners to each child, you attach **one listener to a common ancestor** and inspect `event.target` to act on the right child. Benefits: (1) fewer listeners = less memory; (2) works for dynamically added children without re-attaching listeners. Example: a single `click` listener on `<ul>` handles clicks on any `<li>`.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_delegation',
    ],
    tags: ['event-delegation', 'event-bubbling', 'performance'],
    year: 2025,
  },
  {
    id: 'dom-009',
    topic: 'browser-dom',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is the difference between `stopPropagation()` and `preventDefault()`?',
    options: [
      'They do the same thing',
      '`stopPropagation` prevents the default browser action; `preventDefault` stops event bubbling',
      '`stopPropagation` stops the event from propagating to parent/child elements; `preventDefault` cancels the browser\'s default action for the event',
      '`preventDefault` removes all event listeners; `stopPropagation` only removes the current listener',
    ],
    answer: 2,
    explanation:
      '`event.stopPropagation()` stops the event from continuing its propagation path (no further bubbling or capturing). `event.preventDefault()` cancels the **browser\'s default behaviour** for that event (e.g., prevents a form submission, stops a link navigation, or blocks a checkbox toggle), but does NOT stop propagation. Use `stopImmediatePropagation()` to also prevent other listeners on the same element from running.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation',
      'https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault',
    ],
    tags: ['stopPropagation', 'preventDefault', 'event-system'],
    year: 2025,
  },
  {
    id: 'dom-010',
    topic: 'browser-dom',
    difficulty: 'mid',
    type: 'code-output',
    question: 'In what order are the console logs printed when clicking the inner div?',
    code: `document.getElementById('outer').addEventListener('click', () => console.log('outer-bubble'), false)
document.getElementById('inner').addEventListener('click', () => console.log('inner-bubble'), false)
document.getElementById('outer').addEventListener('click', () => console.log('outer-capture'), true)
document.getElementById('inner').addEventListener('click', () => console.log('inner-capture'), true)

// User clicks #inner`,
    answer: 'outer-capture, inner-capture, inner-bubble, outer-bubble',
    explanation:
      'Event propagation phases: (1) **Capture phase** — listeners with `useCapture=true` fire from outermost to innermost: `outer-capture`, then `inner-capture`. (2) **Target phase** — on the target itself, both capture and bubble listeners fire in registration order. (3) **Bubble phase** — listeners with `useCapture=false` fire from innermost to outermost: `inner-bubble`, then `outer-bubble`.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#usecapture',
    ],
    tags: ['event-capturing', 'event-bubbling', 'event-propagation'],
    year: 2025,
  },

  // ─── EVENT LOOP ───────────────────────────────────────────────────────────────
  {
    id: 'dom-011',
    topic: 'browser-dom',
    difficulty: 'mid',
    type: 'code-output',
    question: 'What is the output order?',
    code: `console.log('1')

setTimeout(() => console.log('2'), 0)

Promise.resolve().then(() => console.log('3'))

console.log('4')`,
    answer: '1, 4, 3, 2',
    explanation:
      'Synchronous code runs first: `1`, then `4`. After the call stack empties, the **microtask queue** is drained before picking the next macrotask. `Promise.then` callbacks are microtasks, so `3` prints next. `setTimeout` with 0ms schedules a **macrotask**, so `2` prints last. Order: synchronous → microtasks → macrotasks.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop',
    ],
    tags: ['event-loop', 'microtasks', 'macrotasks', 'promises', 'setTimeout'],
    year: 2025,
  },
  {
    id: 'dom-012',
    topic: 'browser-dom',
    difficulty: 'senior',
    type: 'code-output',
    question: 'What is the output order?',
    code: `console.log('start')

setTimeout(() => console.log('timeout 1'), 0)
setTimeout(() => console.log('timeout 2'), 0)

queueMicrotask(() => {
  console.log('microtask 1')
  queueMicrotask(() => console.log('microtask 2'))
})

Promise.resolve().then(() => console.log('promise'))

console.log('end')`,
    answer: 'start, end, microtask 1, promise, microtask 2, timeout 1, timeout 2',
    explanation:
      'Synchronous: `start`, `end`. Then microtask queue is drained completely: `microtask 1` runs and queues `microtask 2`; `promise` (queued before `microtask 2`); then `microtask 2` (queued while draining). The microtask queue must be **fully empty** before moving to macrotasks. Then `timeout 1` and `timeout 2` fire in FIFO order.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/queueMicrotask',
    ],
    tags: ['event-loop', 'microtasks', 'queueMicrotask', 'macrotasks'],
    year: 2025,
  },
  {
    id: 'dom-013',
    topic: 'browser-dom',
    difficulty: 'mid',
    type: 'mcq',
    question: 'Which of the following is a microtask?',
    options: [
      'setTimeout callback',
      'setInterval callback',
      'Promise.then callback',
      'requestAnimationFrame callback',
    ],
    answer: 2,
    explanation:
      'Microtasks include: `Promise.then/catch/finally` callbacks, `queueMicrotask()`, `MutationObserver` callbacks, and `await` continuations. Macrotasks (task queue) include: `setTimeout`, `setInterval`, `setImmediate` (Node), I/O events, and UI rendering tasks. `requestAnimationFrame` callbacks run before the next paint, after microtasks but as part of the rendering pipeline — they are neither pure microtasks nor typical macrotasks.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide',
    ],
    tags: ['microtasks', 'macrotasks', 'event-loop', 'promises'],
    year: 2025,
  },
  {
    id: 'dom-014',
    topic: 'browser-dom',
    difficulty: 'senior',
    type: 'mcq',
    question: 'When does `requestAnimationFrame` callback execute relative to the event loop?',
    options: [
      'Immediately as a microtask after the current task',
      'Before each browser repaint, after microtasks have been flushed, as part of the rendering steps',
      'As a macrotask like setTimeout(fn, 16)',
      'After all setTimeout and setInterval callbacks',
    ],
    answer: 1,
    explanation:
      '`requestAnimationFrame` (rAF) callbacks run as part of the browser\'s **rendering pipeline** — specifically in the "update the rendering" step of the event loop, which occurs after microtasks are drained but before the next paint. The browser typically invokes rAF callbacks at the display refresh rate (~60fps = ~16.7ms). This makes rAF ideal for animations: it syncs with the display, avoids unnecessary frames when the tab is hidden, and avoids layout thrashing caused by offset reads/writes.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame',
    ],
    tags: ['requestAnimationFrame', 'event-loop', 'rendering', 'animation'],
    year: 2025,
  },

  // ─── RENDERING PIPELINE ───────────────────────────────────────────────────────
  {
    id: 'dom-015',
    topic: 'browser-dom',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is the correct order of the browser rendering pipeline?',
    options: [
      'JavaScript → Style → Layout → Paint → Composite',
      'Style → JavaScript → Layout → Composite → Paint',
      'Layout → Style → Paint → JavaScript → Composite',
      'JavaScript → Layout → Style → Composite → Paint',
    ],
    answer: 0,
    explanation:
      'The critical rendering path: (1) **JavaScript** executes and mutates the DOM; (2) **Style** — browser calculates computed styles (CSSOM); (3) **Layout** (Reflow) — browser calculates geometry (position/size) of all elements; (4) **Paint** — browser fills in pixels for each layer; (5) **Composite** — layers are combined and sent to the GPU. Understanding this pipeline helps avoid performance issues like layout thrashing.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work',
    ],
    tags: ['rendering-pipeline', 'reflow', 'repaint', 'composite', 'performance'],
    year: 2025,
  },
  {
    id: 'dom-016',
    topic: 'browser-dom',
    difficulty: 'mid',
    type: 'mcq',
    question: 'Which CSS property change triggers a full layout (reflow)?',
    options: [
      'color',
      'background-color',
      'opacity',
      'width',
    ],
    answer: 3,
    explanation:
      'Changing `width` triggers **layout (reflow)** because the browser must recalculate element geometry. Changing `color` or `background-color` only triggers **repaint** (no geometry change). Changing `opacity` only triggers **compositing** (no paint required for GPU-composited layers). CSS `transform` and `opacity` are the two properties that can be animated without triggering layout or paint — making them ideal for performant animations.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Glossary/Reflow',
      'https://csstriggers.com/',
    ],
    tags: ['reflow', 'repaint', 'composite', 'rendering-pipeline', 'performance'],
    year: 2025,
  },
  {
    id: 'dom-017',
    topic: 'browser-dom',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is "layout thrashing" and how do you prevent it?',
    options: [
      'Animating too many elements at once; fixed by using `will-change`',
      'Interleaving DOM reads (e.g., offsetWidth) and writes (e.g., style changes) in a loop, forcing repeated reflows; fixed by batching reads first, then writes',
      'Using too many CSS transitions simultaneously; fixed by reducing transition count',
      'Calling `addEventListener` too many times; fixed by event delegation',
    ],
    answer: 1,
    explanation:
      'Layout thrashing (forced synchronous layouts) occurs when JS **reads** a layout property (like `offsetWidth`, `getBoundingClientRect`) and then **writes** a style property, alternating in a loop. Each read after a write forces the browser to reflow synchronously. Prevention: batch all reads together, then all writes. Libraries like FastDOM help. Reading layout properties before any writes in a rAF callback is also effective.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work',
    ],
    tags: ['layout-thrashing', 'reflow', 'performance', 'rendering-pipeline'],
    year: 2025,
  },

  // ─── WEB STORAGE ──────────────────────────────────────────────────────────────
  {
    id: 'dom-018',
    topic: 'browser-dom',
    difficulty: 'junior',
    type: 'mcq',
    question: 'What is the key difference between `localStorage` and `sessionStorage`?',
    options: [
      '`localStorage` stores only strings; `sessionStorage` stores objects',
      '`localStorage` persists until explicitly cleared; `sessionStorage` is cleared when the browser tab/session ends',
      '`sessionStorage` is shared across tabs; `localStorage` is per-tab',
      '`localStorage` has a 4KB limit; `sessionStorage` has no limit',
    ],
    answer: 1,
    explanation:
      '`localStorage` data persists across sessions until explicitly removed via `localStorage.removeItem()` or `localStorage.clear()`. `sessionStorage` is scoped to the browser **tab** (or window) and is cleared when that tab is closed. Both store data per origin, both have ~5MB limit, and both only store strings (use `JSON.stringify`/`JSON.parse` for objects). `sessionStorage` is NOT shared across tabs even of the same origin.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage',
      'https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage',
    ],
    tags: ['localStorage', 'sessionStorage', 'web-storage'],
    year: 2025,
  },
  {
    id: 'dom-019',
    topic: 'browser-dom',
    difficulty: 'mid',
    type: 'mcq',
    question: 'Which web storage mechanism supports structured data, transactions, and indexes with large storage limits?',
    options: [
      'localStorage',
      'sessionStorage',
      'Cookies',
      'IndexedDB',
    ],
    answer: 3,
    explanation:
      'IndexedDB is a low-level, asynchronous, transactional database built into the browser. It supports: structured data (not just strings), indexes for querying, transactions, and much larger storage limits (often 50-100% of available disk space). Unlike `localStorage`/`sessionStorage`, IndexedDB is async (Promise-based via libraries like `idb`) and does not block the main thread.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API',
    ],
    tags: ['IndexedDB', 'web-storage', 'database'],
    year: 2025,
  },
  {
    id: 'dom-020',
    topic: 'browser-dom',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What differentiates cookies from `localStorage` in the context of HTTP requests?',
    options: [
      'Cookies are not accessible in JavaScript; localStorage is',
      'localStorage is automatically sent in HTTP request headers; cookies are not',
      'Cookies are automatically included in every HTTP request to the matching domain; localStorage is only accessible via JavaScript',
      'Cookies support up to 5MB; localStorage is limited to 4KB',
    ],
    answer: 2,
    explanation:
      'Cookies are sent by the browser with every matching HTTP request (via the `Cookie` header), enabling server-side authentication. `localStorage` is only accessible via JavaScript and is never sent in HTTP requests. Cookies have a ~4KB size limit and support expiry, domain, path, `HttpOnly`, `Secure`, and `SameSite` attributes. HttpOnly cookies cannot be read by JavaScript, protecting against XSS.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies',
    ],
    tags: ['cookies', 'localStorage', 'web-storage', 'security'],
    year: 2025,
  },

  // ─── OBSERVERS ────────────────────────────────────────────────────────────────
  {
    id: 'dom-021',
    topic: 'browser-dom',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is `IntersectionObserver` used for?',
    options: [
      'Watching DOM mutations like added/removed nodes',
      'Detecting when an element enters or exits the viewport (or a scrollable container)',
      'Measuring element dimensions when they resize',
      'Observing network requests',
    ],
    answer: 1,
    explanation:
      '`IntersectionObserver` asynchronously observes changes in the intersection of a target element with an ancestor element or the viewport. Common use cases: lazy loading images (load only when visible), infinite scroll, analytics (track when ads are seen). It replaces scroll event listeners + `getBoundingClientRect` calls, avoiding layout thrashing.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API',
    ],
    tags: ['IntersectionObserver', 'lazy-loading', 'observers', 'performance'],
    year: 2025,
  },
  {
    id: 'dom-022',
    topic: 'browser-dom',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What does `MutationObserver` observe?',
    options: [
      'Changes to element CSS properties',
      'Element resize events',
      'Changes to the DOM tree: added/removed nodes, attribute changes, text content changes',
      'Network request mutations',
    ],
    answer: 2,
    explanation:
      '`MutationObserver` watches for changes to the DOM tree. You configure it via an options object: `{ childList: true }` observes child node additions/removals; `{ attributes: true }` observes attribute changes; `{ characterData: true }` observes text node changes; `{ subtree: true }` extends observation to all descendants. It fires callbacks asynchronously (as microtasks), batching multiple mutations. It replaced the deprecated `MutationEvents`.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver',
    ],
    tags: ['MutationObserver', 'observers', 'dom-mutation'],
    year: 2025,
  },
  {
    id: 'dom-023',
    topic: 'browser-dom',
    difficulty: 'mid',
    type: 'true-false',
    question: '`ResizeObserver` fires synchronously during layout, which can cause layout thrashing if you modify the DOM inside the callback.',
    answer: false,
    explanation:
      '`ResizeObserver` callbacks fire **asynchronously** after layout but before paint, as part of the rendering update. They do NOT fire synchronously during layout. However, if you modify the DOM inside a ResizeObserver callback in a way that triggers another resize, you can create an infinite loop — which the browser prevents by logging an error. The callback receives `ResizeObserverEntry` objects with `contentRect`, `borderBoxSize`, and `contentBoxSize`.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver',
    ],
    tags: ['ResizeObserver', 'observers', 'layout'],
    year: 2025,
  },

  // ─── WEB WORKERS ──────────────────────────────────────────────────────────────
  {
    id: 'dom-024',
    topic: 'browser-dom',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is the main purpose of Web Workers?',
    options: [
      'To directly manipulate the DOM in a background thread',
      'To run JavaScript in a background thread, preventing heavy computations from blocking the main UI thread',
      'To pre-fetch network resources before the page loads',
      'To cache API responses automatically',
    ],
    answer: 1,
    explanation:
      'Web Workers run JS in a separate thread, keeping the main thread (UI) responsive. Workers cannot access the DOM directly. Communication is via `postMessage()` and the `message` event. Data is **copied** (structured clone algorithm) not shared, except for `SharedArrayBuffer` with `Atomics`. Types: Dedicated Workers (one page), Shared Workers (multiple pages same origin), Service Workers (proxy for network requests).',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API',
    ],
    tags: ['web-workers', 'threading', 'performance'],
    year: 2025,
  },
  {
    id: 'dom-025',
    topic: 'browser-dom',
    difficulty: 'senior',
    type: 'mcq',
    question: 'How does a Service Worker differ from a Dedicated Web Worker?',
    options: [
      'Service Workers can access the DOM; Dedicated Workers cannot',
      'Service Workers act as a network proxy with a lifecycle independent of any page, enabling offline caching; Dedicated Workers are tied to a specific page for computation',
      'Dedicated Workers can intercept fetch requests; Service Workers cannot',
      'Service Workers run on the server; Dedicated Workers run in the browser',
    ],
    answer: 1,
    explanation:
      'A **Dedicated Worker** is tied to a single page, runs JS off the main thread for computation, and is destroyed when the page unloads. A **Service Worker** is registered for an origin/scope, persists independently of any page, intercepts network requests via `fetch` events, enables offline caching (Cache API), background sync, and push notifications. Service Workers have a distinct lifecycle: install → activate → idle/fetch.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API',
    ],
    tags: ['service-worker', 'web-workers', 'offline', 'caching'],
    year: 2025,
  },
  {
    id: 'dom-026',
    topic: 'browser-dom',
    difficulty: 'senior',
    type: 'mcq',
    question: 'How do you share data between a Web Worker and the main thread without copying it (zero-copy transfer)?',
    options: [
      'Use SharedArrayBuffer or transfer ownership of an ArrayBuffer via the second argument of postMessage',
      'Store data in localStorage and read it from the worker',
      'Use window.sharedData as a global variable',
      'Call worker.importScripts() with the data',
    ],
    answer: 0,
    explanation:
      'By default, `postMessage` uses the **structured clone algorithm** to copy data. For zero-copy, use **transferable objects**: `worker.postMessage(data, [transferable])` — e.g., `postMessage(arrayBuffer, [arrayBuffer])` transfers ownership (the sender can no longer access it). `SharedArrayBuffer` allows actual shared memory between main thread and workers, requiring `Atomics` for synchronization and proper COOP/COEP headers (`Cross-Origin-Opener-Policy`/`Cross-Origin-Embedder-Policy`).',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/Worker/postMessage',
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer',
    ],
    tags: ['web-workers', 'postMessage', 'SharedArrayBuffer', 'transferable'],
    year: 2025,
  },

  // ─── FETCH API ────────────────────────────────────────────────────────────────
  {
    id: 'dom-027',
    topic: 'browser-dom',
    difficulty: 'mid',
    type: 'mcq',
    question: 'How do you cancel an in-flight `fetch` request?',
    options: [
      'Call `fetch.cancel()`',
      'Use `AbortController`: create it, pass `signal` to fetch, call `controller.abort()`',
      'Set a timeout with `setTimeout(() => fetch.stop(), ms)`',
      'Fetch requests cannot be cancelled',
    ],
    answer: 1,
    explanation:
      'Use `AbortController`: `const controller = new AbortController(); fetch(url, { signal: controller.signal })`. Call `controller.abort()` to cancel. The fetch promise rejects with a `DOMException` named `"AbortError"`. Since Node 18+, `AbortController` is global. You can also use `AbortSignal.timeout(ms)` for auto-cancellation. One signal can abort multiple requests.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/AbortController',
    ],
    tags: ['fetch', 'AbortController', 'cancellation'],
    year: 2025,
  },
  {
    id: 'dom-028',
    topic: 'browser-dom',
    difficulty: 'mid',
    type: 'debug',
    question: 'This code always logs "Error: 404" even for successful responses. Fix the bug.',
    code: `async function getData(url) {
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error:', error.message)
  }
}`,
    answer: `async function getData(url) {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(response.status)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error:', error.message)
  }
}`,
    solutionCode: `async function getData(url) {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(response.status)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error:', error.message)
  }
}`,
    explanation:
      '`fetch` only rejects on **network errors** (no connection, DNS failure). HTTP error status codes (4xx, 5xx) are considered **successful** responses — the promise resolves. You must manually check `response.ok` (true for 200-299) or `response.status` and throw an error yourself. This is a very common interview bug.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#checking_that_the_fetch_was_successful',
    ],
    tags: ['fetch', 'error-handling', 'response.ok', 'debug'],
    year: 2025,
  },
  {
    id: 'dom-029',
    topic: 'browser-dom',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What does the Cache API (used with Service Workers) allow you to do?',
    options: [
      'Cache JavaScript variables in memory',
      'Store HTTP Request/Response pairs, enabling programmatic control of caching for offline support and performance',
      'Cache DOM nodes to avoid re-querying',
      'Pre-compile JavaScript for faster execution',
    ],
    answer: 1,
    explanation:
      'The Cache API (part of the Service Worker API) lets you store and retrieve `Request`/`Response` pairs. Inside a Service Worker\'s `fetch` event, you can implement caching strategies like: Cache First (return cache, fall back to network), Network First (try network, fall back to cache), or Stale-While-Revalidate. The cache persists across sessions until explicitly deleted. Manage caches with `caches.open()`, `cache.put()`, `cache.match()`, `caches.delete()`.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/Cache',
    ],
    tags: ['cache-api', 'service-worker', 'offline', 'fetch'],
    year: 2025,
  },

  // ─── HISTORY API ──────────────────────────────────────────────────────────────
  {
    id: 'dom-030',
    topic: 'browser-dom',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is the difference between `history.pushState()` and `history.replaceState()`?',
    options: [
      '`pushState` modifies the current history entry; `replaceState` adds a new entry',
      '`pushState` adds a new history entry; `replaceState` modifies the current entry without adding a new one',
      '`pushState` triggers a page reload; `replaceState` does not',
      'They are identical',
    ],
    answer: 1,
    explanation:
      '`history.pushState(state, title, url)` adds a new entry to the browser\'s session history stack — the back button will navigate to the previous URL. `history.replaceState(state, title, url)` modifies the **current** history entry without adding a new one — the back button skips it. Both change the URL without a page reload, enabling client-side routing (SPA navigation). The `popstate` event fires when navigating with back/forward buttons.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/History/pushState',
    ],
    tags: ['history-api', 'pushState', 'replaceState', 'client-side-routing'],
    year: 2025,
  },
  {
    id: 'dom-031',
    topic: 'browser-dom',
    difficulty: 'mid',
    type: 'mcq',
    question: 'When does the `popstate` event fire?',
    options: [
      'Whenever `pushState` or `replaceState` is called',
      'When the active history entry changes due to user navigation (back/forward button) or `history.go()`',
      'Every time the URL hash changes',
      'When the page is first loaded',
    ],
    answer: 1,
    explanation:
      '`popstate` fires when the active history entry changes — specifically when the user presses Back/Forward, or when `history.go()`, `history.back()`, or `history.forward()` is called. Crucially, calling `pushState()` or `replaceState()` directly does **NOT** fire `popstate`. For hash-only URL changes, the `hashchange` event fires (in addition to `popstate` in some cases).',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/Window/popstate_event',
    ],
    tags: ['history-api', 'popstate', 'client-side-routing', 'navigation'],
    year: 2025,
  },

  // ─── DOM MANIPULATION ─────────────────────────────────────────────────────────
  {
    id: 'dom-032',
    topic: 'browser-dom',
    difficulty: 'junior',
    type: 'mcq',
    question: 'Why is `DocumentFragment` more performant than appending elements one by one?',
    options: [
      'DocumentFragment avoids the garbage collector',
      'DocumentFragment is a lightweight DOM node that is off-document; you can append all children to it and then insert it once, causing only one reflow instead of one per insertion',
      'DocumentFragment prevents event listeners from being called',
      'DocumentFragment uses a Web Worker internally',
    ],
    answer: 1,
    explanation:
      'A `DocumentFragment` is an in-memory, off-document container for DOM nodes. Since it is not part of the live DOM, adding children to it does not cause reflow. When you insert the fragment into the document (once), the browser does a single reflow. Compared to inserting 100 elements individually (each potentially causing a reflow), this is dramatically faster. After insertion, the fragment itself becomes empty (its children move to the DOM).',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment',
    ],
    tags: ['DocumentFragment', 'performance', 'reflow', 'dom-manipulation'],
    year: 2025,
  },
  {
    id: 'dom-033',
    topic: 'browser-dom',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is Shadow DOM and how does it differ from the regular ("light") DOM?',
    options: [
      'Shadow DOM is the DOM created by JavaScript; light DOM is the HTML-parsed DOM',
      'Shadow DOM is a scoped, encapsulated DOM tree attached to an element with isolated CSS and JS; light DOM is the main document DOM visible to all scripts and styles',
      'Shadow DOM is for server-side rendering; light DOM is for client-side',
      'Shadow DOM only exists in Firefox; light DOM is cross-browser',
    ],
    answer: 1,
    explanation:
      'Shadow DOM provides **encapsulation**: a hidden DOM subtree attached to a host element. CSS inside a shadow tree does not leak out, and global CSS does not leak in (unless using CSS custom properties or `::part()`). Used by native elements like `<video>`, `<input type="range">`, and Web Components. Created with `element.attachShadow({ mode: "open" | "closed" })`. "Open" mode allows access via `element.shadowRoot`; "closed" mode does not.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM',
    ],
    tags: ['shadow-dom', 'web-components', 'encapsulation', 'css-scoping'],
    year: 2025,
  },
  {
    id: 'dom-034',
    topic: 'browser-dom',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is the concept of "virtual DOM" and why did frameworks like React introduce it?',
    options: [
      'Virtual DOM is a browser API that speeds up rendering',
      'Virtual DOM is an in-memory JavaScript representation of the real DOM; frameworks diff old vs new virtual DOM trees to compute minimal real DOM updates, reducing expensive reflows',
      'Virtual DOM stores rendered HTML in localStorage for fast initial load',
      'Virtual DOM is a Shadow DOM feature for Web Components',
    ],
    answer: 1,
    explanation:
      'The virtual DOM (VDOM) is a programming concept where a lightweight copy of the real DOM is kept in memory. When state changes, a new VDOM is created and diffed (reconciled) against the previous one. Only the actual differences are applied to the real DOM ("patching"), minimizing expensive reflows/repaints. React popularized this. Modern alternatives (Svelte, Solid.js) skip VDOM entirely by compiling to precise DOM updates.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction',
    ],
    tags: ['virtual-dom', 'reconciliation', 'react', 'performance'],
    year: 2025,
  },

  // ─── WINDOW / DOCUMENT EVENTS ─────────────────────────────────────────────────
  {
    id: 'dom-035',
    topic: 'browser-dom',
    difficulty: 'junior',
    type: 'mcq',
    question: 'What is the difference between `DOMContentLoaded` and `load` events?',
    options: [
      '`load` fires when HTML is parsed; `DOMContentLoaded` fires when all resources load',
      '`DOMContentLoaded` fires when the HTML is fully parsed and DOM is ready; `load` fires when all resources (images, stylesheets, iframes) have finished loading',
      'They fire at the same time',
      '`DOMContentLoaded` only fires in Chrome; `load` is cross-browser',
    ],
    answer: 1,
    explanation:
      '`DOMContentLoaded` (fires on `document`) fires as soon as the browser has parsed the HTML and built the DOM — without waiting for images, stylesheets, or subframes. It is the right event for running DOM-dependent scripts. `load` (fires on `window`) fires only after **all** resources have fully loaded, including images, external CSS, scripts, and iframes. `load` is much later.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event',
      'https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event',
    ],
    tags: ['DOMContentLoaded', 'load-event', 'document-lifecycle'],
    year: 2025,
  },
  {
    id: 'dom-036',
    topic: 'browser-dom',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is the `visibilitychange` event used for?',
    options: [
      'Detecting when an element becomes visible via IntersectionObserver',
      'Detecting when the user switches tabs or minimises the browser, allowing you to pause/resume resource-intensive work',
      'Detecting when CSS visibility changes on an element',
      'Detecting when the viewport scrolls',
    ],
    answer: 1,
    explanation:
      'The `visibilitychange` event fires on `document` when the page\'s visibility state changes. Check `document.visibilityState` (`"visible"` or `"hidden"`). Use cases: pause video/audio/animations when hidden, stop polling, pause timers, send analytics pings. Browsers may throttle timers (setTimeout/setInterval) when the tab is hidden; `visibilitychange` lets you handle this explicitly.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilitychange_event',
    ],
    tags: ['visibilitychange', 'Page-Visibility-API', 'performance', 'document-lifecycle'],
    year: 2025,
  },
  {
    id: 'dom-037',
    topic: 'browser-dom',
    difficulty: 'mid',
    type: 'true-false',
    question: '`beforeunload` event allows you to reliably show a custom message in a dialog to the user when they try to leave the page in all modern browsers.',
    answer: false,
    explanation:
      'Modern browsers no longer allow custom messages in the `beforeunload` confirmation dialog. To trigger the browser\'s generic "Leave site?" dialog, you must call `event.preventDefault()` or set `event.returnValue = ""` (legacy). The browser shows a generic message — you cannot customise it. This change prevents websites from trapping users. Additionally, `beforeunload` should only be registered when there is unsaved work to avoid degrading navigation UX.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event',
    ],
    tags: ['beforeunload', 'navigation', 'document-lifecycle'],
    year: 2025,
  },
  {
    id: 'dom-038',
    topic: 'browser-dom',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is "passive event listener" and why does it improve scroll performance?',
    options: [
      'A listener that runs in a Web Worker to avoid blocking the main thread',
      'A listener declared with `{ passive: true }` that tells the browser the listener will never call `preventDefault()`, allowing the browser to scroll without waiting for the listener to finish',
      'A listener that only fires once using `{ once: true }`',
      'A listener that uses `requestAnimationFrame` internally',
    ],
    answer: 1,
    explanation:
      'Browsers optimise touch and wheel events by executing scroll updates on the compositor thread. However, if a `touchstart`/`wheel` listener might call `preventDefault()`, the browser must wait for the listener to complete before scrolling. Declaring `{ passive: true }` in `addEventListener(\'touchstart\', fn, { passive: true })` signals that `preventDefault()` will never be called, letting the browser scroll immediately without waiting. This eliminates scroll jank.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#passive',
    ],
    tags: ['passive-event-listener', 'scroll-performance', 'performance', 'touch'],
    year: 2025,
  },

  // ─── RAF VS SETTIMEOUT ─────────────────────────────────────────────────────────
  {
    id: 'dom-039',
    topic: 'browser-dom',
    difficulty: 'mid',
    type: 'mcq',
    question: 'Why is `requestAnimationFrame` preferred over `setTimeout(fn, 16)` for animations?',
    options: [
      'requestAnimationFrame runs in a Web Worker; setTimeout runs on the main thread',
      'requestAnimationFrame syncs with the display refresh rate, pauses in hidden tabs, and reduces battery drain; setTimeout with a fixed interval drifts and runs even when the tab is hidden',
      'setTimeout is asynchronous; requestAnimationFrame is synchronous',
      'requestAnimationFrame can access the DOM; setTimeout cannot',
    ],
    answer: 1,
    explanation:
      'rAF advantages: (1) **Refresh sync** — runs before the next screen repaint, eliminating tearing; (2) **Throttled when hidden** — browser pauses rAF callbacks in background tabs (saves CPU/battery); (3) **No drift** — the browser schedules at the optimal time rather than a fixed interval; (4) **Batched** — multiple rAF calls in one frame run once. `setTimeout(fn, 16)` doesn\'t precisely sync with the display and wastes resources in hidden tabs.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame',
    ],
    tags: ['requestAnimationFrame', 'setTimeout', 'animation', 'performance'],
    year: 2025,
  },
  {
    id: 'dom-040',
    topic: 'browser-dom',
    difficulty: 'mid',
    type: 'code-write',
    question: 'Implement a `animate` function using `requestAnimationFrame` that moves an element 300px to the right over 1000ms.',
    answer: `function animate(element) {
  const duration = 1000
  const distance = 300
  let startTime = null

  function step(timestamp) {
    if (!startTime) startTime = timestamp
    const elapsed = timestamp - startTime
    const progress = Math.min(elapsed / duration, 1)
    element.style.transform = \`translateX(\${progress * distance}px)\`
    if (progress < 1) {
      requestAnimationFrame(step)
    }
  }

  requestAnimationFrame(step)
}`,
    explanation:
      'The pattern uses a `step` function that receives a `timestamp` from rAF. On the first call, `startTime` is captured. Each frame, `elapsed` time is computed and divided by `duration` to get `progress` (0–1), clamped with `Math.min`. The element is moved proportionally. If progress < 1, another rAF is scheduled. Using `transform: translateX()` instead of `left` keeps the animation on the compositor thread (no reflow/repaint).',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame',
    ],
    tags: ['requestAnimationFrame', 'animation', 'transform', 'performance'],
    year: 2025,
  },

  // ─── CLIPBOARD / FILE / DRAG & DROP ──────────────────────────────────────────
  {
    id: 'dom-041',
    topic: 'browser-dom',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What permission is required to read from the clipboard using the modern Clipboard API?',
    options: [
      'No permission required — clipboard can be read freely by any script',
      'The `clipboard-read` permission must be granted by the user (via Permissions API); the page must be focused and on HTTPS',
      'The `storage-access` permission is required',
      'Only `navigator.clipboard.writeText` requires permission; reading is free',
    ],
    answer: 1,
    explanation:
      '`navigator.clipboard.readText()` and `navigator.clipboard.read()` require the `clipboard-read` permission, which the browser requests from the user. Reading requires the document to be focused (active page). Writing (`writeText`, `write`) requires user activation (e.g., inside a click handler) and may also prompt. HTTPS is required. The older `document.execCommand("copy")` is deprecated but still works in some contexts.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API',
    ],
    tags: ['clipboard-api', 'permissions', 'security'],
    year: 2025,
  },
  {
    id: 'dom-042',
    topic: 'browser-dom',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What does `URL.createObjectURL(blob)` return and when should you revoke it?',
    options: [
      'Returns a base64 data URL; revoke it after the page unloads',
      'Returns a temporary `blob:` URL referencing the blob in memory; revoke it with `URL.revokeObjectURL(url)` when no longer needed to free memory',
      'Returns a permanent URL stored on a server',
      'Returns a Blob object wrapped in a URL string; revoke is not necessary',
    ],
    answer: 1,
    explanation:
      '`URL.createObjectURL(blob)` creates a temporary `blob:https://...` URL that refers to the Blob in the browser\'s memory. Unlike base64 data URLs, it doesn\'t embed the data — it\'s a reference. The URL remains valid until the document is unloaded OR until explicitly revoked with `URL.revokeObjectURL(url)`. Always revoke after use (e.g., after triggering a download) to avoid memory leaks.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL_static',
    ],
    tags: ['Blob', 'URL.createObjectURL', 'File-API', 'memory-management'],
    year: 2025,
  },
  {
    id: 'dom-043',
    topic: 'browser-dom',
    difficulty: 'mid',
    type: 'mcq',
    question: 'In the Drag and Drop API, which event must call `event.preventDefault()` to allow a drop?',
    options: [
      'dragstart',
      'dragend',
      'dragover',
      'drop',
    ],
    answer: 2,
    explanation:
      'By default, elements are not valid drop targets. To make an element accept drops, you must call `event.preventDefault()` in the `dragover` event handler. Without this, the `drop` event will never fire on that element. The `dragstart` event fires when dragging begins (set `event.dataTransfer.setData()` here). The `drop` event fires when the item is dropped (read `event.dataTransfer.getData()` here).',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API',
    ],
    tags: ['drag-and-drop', 'dragover', 'event-system'],
    year: 2025,
  },

  // ─── PERFORMANCE API ──────────────────────────────────────────────────────────
  {
    id: 'dom-044',
    topic: 'browser-dom',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is the `Performance` API used for in the browser?',
    options: [
      'Optimizing CSS animations automatically',
      'Measuring real user performance: navigation timing, resource loading times, custom marks and measures using high-resolution timestamps',
      'Profiling Web Workers',
      'Detecting slow network connections',
    ],
    answer: 1,
    explanation:
      '`window.performance` provides high-resolution timing APIs: `performance.now()` returns a DOMHighResTimeStamp in milliseconds with sub-millisecond precision. `performance.mark(name)` creates a named timestamp. `performance.measure(name, startMark, endMark)` calculates duration between marks. `performance.getEntriesByType("navigation")` provides Navigation Timing (DNS, TCP, DOM, load times). `PerformanceObserver` observes new performance entries asynchronously.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/Performance',
    ],
    tags: ['performance-api', 'performance.now', 'mark', 'measure', 'performance'],
    year: 2025,
  },
  {
    id: 'dom-045',
    topic: 'browser-dom',
    difficulty: 'senior',
    type: 'code-write',
    question: 'Write code that uses the Performance API to measure how long an expensive operation takes, using `mark` and `measure`.',
    answer: `function measureOperation(name, operation) {
  const startMark = \`\${name}-start\`
  const endMark = \`\${name}-end\`

  performance.mark(startMark)
  operation()
  performance.mark(endMark)

  performance.measure(name, startMark, endMark)

  const [entry] = performance.getEntriesByName(name)
  console.log(\`\${name} took \${entry.duration.toFixed(2)}ms\`)

  // Clean up
  performance.clearMarks(startMark)
  performance.clearMarks(endMark)
  performance.clearMeasures(name)

  return entry.duration
}

// Usage
measureOperation('sort-array', () => {
  const arr = Array.from({ length: 100000 }, () => Math.random())
  arr.sort()
})`,
    explanation:
      '`performance.mark()` creates a named high-resolution timestamp. `performance.measure(name, startMark, endMark)` creates a PerformanceEntry with `duration`. Retrieve it with `performance.getEntriesByName(name)`. Cleaning up with `clearMarks`/`clearMeasures` prevents memory accumulation. This is more accurate than `Date.now()` due to microsecond precision and is unaffected by system clock adjustments.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/Performance/mark',
      'https://developer.mozilla.org/en-US/docs/Web/API/Performance/measure',
    ],
    tags: ['performance-api', 'mark', 'measure', 'profiling'],
    year: 2025,
  },

  // ─── BROWSER SECURITY ─────────────────────────────────────────────────────────
  {
    id: 'dom-046',
    topic: 'browser-dom',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is the Same-Origin Policy (SOP)?',
    options: [
      'A policy requiring all scripts to be loaded from the same CDN',
      'A security mechanism that restricts how a document or script from one origin can interact with a resource from a different origin',
      'A policy preventing HTTPS pages from loading HTTP content',
      'A rule requiring cookies to have the SameSite attribute',
    ],
    answer: 1,
    explanation:
      'The Same-Origin Policy (SOP) is a browser security mechanism. An origin is defined by **protocol + host + port**. SOP prevents JS from reading responses from different origins. For example, `https://a.com` cannot read responses from `https://b.com` via fetch. SOP applies to: `fetch`/XHR, DOM access (cross-origin frames), and cookies. It does NOT prevent sending requests (only reading responses) — hence the need for CSRF protection.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy',
    ],
    tags: ['same-origin-policy', 'security', 'CORS'],
    year: 2025,
  },
  {
    id: 'dom-047',
    topic: 'browser-dom',
    difficulty: 'mid',
    type: 'mcq',
    question: 'When does a CORS preflight request (`OPTIONS`) get triggered?',
    options: [
      'On every cross-origin request',
      'Only when using GET requests',
      'When a cross-origin request is a "non-simple" request: uses methods other than GET/POST/HEAD, has custom headers, or uses Content-Type other than application/x-www-form-urlencoded, multipart/form-data, or text/plain',
      'Only when the server does not send CORS headers',
    ],
    answer: 2,
    explanation:
      'CORS "simple requests" (GET/HEAD/POST with limited headers and Content-Type) do NOT trigger a preflight. Non-simple requests trigger an `OPTIONS` preflight to ask the server if the actual request is allowed. Examples that trigger preflight: `PUT`/`DELETE`/`PATCH` methods, `Content-Type: application/json`, custom headers like `Authorization` or `X-Custom-Header`. The server must respond with appropriate `Access-Control-Allow-*` headers.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#preflighted_requests',
    ],
    tags: ['CORS', 'preflight', 'security', 'fetch'],
    year: 2025,
  },
  {
    id: 'dom-048',
    topic: 'browser-dom',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What does the `sandbox` attribute on an `<iframe>` do?',
    options: [
      'It enables sandboxed CSS scoping for the iframe content',
      'It applies restrictions to the iframe content: disables scripts, forms, pointer lock, etc. unless specific permissions are re-enabled with sandbox token values',
      'It loads the iframe in a separate process automatically',
      'It prevents the iframe from making network requests',
    ],
    answer: 1,
    explanation:
      'The `sandbox` attribute on `<iframe>` applies a set of restrictions by default: no scripts, no forms, no top navigation, no popups, no same-origin access. You can selectively re-enable features: `allow-scripts` (enables JS), `allow-forms`, `allow-same-origin`, `allow-popups`, `allow-top-navigation`. Note: using both `allow-scripts` and `allow-same-origin` together is dangerous as it allows the iframe to remove the sandbox restriction.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#sandbox',
    ],
    tags: ['iframe', 'sandbox', 'security', 'browser-security'],
    year: 2025,
  },

  // ─── ADDITIONAL DOM MANIPULATION ──────────────────────────────────────────────
  {
    id: 'dom-049',
    topic: 'browser-dom',
    difficulty: 'junior',
    type: 'code-write',
    question: 'Write a function that creates a list of 5 items using `DocumentFragment` and appends it to a `<ul>` element.',
    answer: `function populateList(ulElement, items) {
  const fragment = document.createDocumentFragment()

  items.forEach(text => {
    const li = document.createElement('li')
    li.textContent = text
    fragment.appendChild(li)
  })

  ulElement.appendChild(fragment)
}

// Usage
const ul = document.querySelector('ul')
populateList(ul, ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'])`,
    explanation:
      'Using `DocumentFragment`, all `<li>` elements are built off-screen. A single `appendChild(fragment)` moves all children to the DOM in one operation, causing one layout calculation. The fragment itself is empty afterward. This is the classic performance optimization for bulk DOM insertions.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment',
    ],
    tags: ['DocumentFragment', 'createElement', 'dom-manipulation', 'performance'],
    year: 2025,
  },
  {
    id: 'dom-050',
    topic: 'browser-dom',
    difficulty: 'junior',
    type: 'debug',
    question: 'This event delegation code does not work when clicking on a `<span>` inside a `<button>`. Fix it.',
    code: `document.querySelector('.toolbar').addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    handleAction(e.target.dataset.action)
  }
})

// HTML: <button data-action="save"><span>Save</span></button>`,
    answer: `document.querySelector('.toolbar').addEventListener('click', (e) => {
  const button = e.target.closest('button')
  if (button) {
    handleAction(button.dataset.action)
  }
})`,
    solutionCode: `document.querySelector('.toolbar').addEventListener('click', (e) => {
  const button = e.target.closest('button')
  if (button) {
    handleAction(button.dataset.action)
  }
})`,
    explanation:
      'When clicking the `<span>` inside the `<button>`, `e.target` is the `<span>`, not the `<button>`. The `tagName === "BUTTON"` check fails. The fix uses `e.target.closest("button")` which traverses up from the actual clicked element (the span) and finds the nearest `<button>` ancestor (or the button itself). This is the correct pattern for event delegation with nested elements.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/Element/closest',
    ],
    tags: ['event-delegation', 'closest', 'event.target', 'debug'],
    year: 2025,
  },

  // ─── ADVANCED EVENT LOOP ──────────────────────────────────────────────────────
  {
    id: 'dom-051',
    topic: 'browser-dom',
    difficulty: 'senior',
    type: 'code-output',
    question: 'What is the output?',
    code: `async function main() {
  console.log('A')
  await Promise.resolve()
  console.log('B')
  await Promise.resolve()
  console.log('C')
}

main()
console.log('D')`,
    answer: 'A, D, B, C',
    explanation:
      '`main()` runs synchronously until the first `await`. `A` logs, then `await Promise.resolve()` suspends `main` (schedules resumption as a microtask). Execution returns to the call site: `D` logs. Then microtasks run: `B` logs, second `await` suspends again (another microtask). Then `C` logs. Each `await` effectively schedules the rest of the async function as a microtask continuation.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await',
    ],
    tags: ['async-await', 'event-loop', 'microtasks', 'promises'],
    year: 2025,
  },
  {
    id: 'dom-052',
    topic: 'browser-dom',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is "long task" in browser performance context and how do you detect it?',
    options: [
      'Any JavaScript operation taking more than 1ms; detected with performance.now()',
      'A task on the main thread taking longer than 50ms, blocking user interaction; detected via PerformanceObserver with type "longtask"',
      'A setTimeout with a delay over 1 second; detected with event listeners',
      'Any network request taking more than 3 seconds; detected with Resource Timing API',
    ],
    answer: 1,
    explanation:
      'A "long task" is defined as any main thread task that blocks the browser for more than **50ms** — at which point users perceive the interface as sluggish. Detected with: `new PerformanceObserver((list) => { list.getEntries().forEach(entry => console.log(entry.duration)) }).observe({ type: "longtask", buffered: true })`. The Long Tasks API provides task attribution. Total Blocking Time (TBT) and First Input Delay (FID) Core Web Vitals are based on long tasks.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/PerformanceLongTaskTiming',
    ],
    tags: ['long-tasks', 'PerformanceObserver', 'core-web-vitals', 'performance'],
    year: 2025,
  },

  // ─── WEB STORAGE ADVANCED ─────────────────────────────────────────────────────
  {
    id: 'dom-053',
    topic: 'browser-dom',
    difficulty: 'mid',
    type: 'true-false',
    question: '`localStorage` is accessible from Web Workers.',
    answer: false,
    explanation:
      '`localStorage` and `sessionStorage` are NOT available in Web Workers (they are synchronous APIs, and workers must not have synchronous access to storage). The available storage in workers is: `IndexedDB` (async), Cache API (in Service Workers), and `self.postMessage()` to communicate with the main thread. This is by design to prevent blocking the worker.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers',
    ],
    tags: ['localStorage', 'web-workers', 'web-storage'],
    year: 2025,
  },
  {
    id: 'dom-054',
    topic: 'browser-dom',
    difficulty: 'junior',
    type: 'debug',
    question: 'This code tries to store an object in `localStorage` but always retrieves `"[object Object]"`. Fix it.',
    code: `const user = { name: 'Alice', role: 'admin' }

localStorage.setItem('user', user)

const saved = localStorage.getItem('user')
console.log(saved) // "[object Object]"`,
    answer: `const user = { name: 'Alice', role: 'admin' }

localStorage.setItem('user', JSON.stringify(user))

const saved = JSON.parse(localStorage.getItem('user'))
console.log(saved) // { name: 'Alice', role: 'admin' }`,
    solutionCode: `const user = { name: 'Alice', role: 'admin' }

localStorage.setItem('user', JSON.stringify(user))

const saved = JSON.parse(localStorage.getItem('user'))
console.log(saved) // { name: 'Alice', role: 'admin' }`,
    explanation:
      '`localStorage` only stores strings. When you pass an object, JavaScript calls `.toString()` on it, producing `"[object Object]"`. You must serialize with `JSON.stringify()` before storing and deserialize with `JSON.parse()` when retrieving. Always guard `JSON.parse` with try/catch in production, as corrupted data would throw.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage',
    ],
    tags: ['localStorage', 'JSON.stringify', 'debug', 'web-storage'],
    year: 2025,
  },

  // ─── FETCH / STREAMING ────────────────────────────────────────────────────────
  {
    id: 'dom-055',
    topic: 'browser-dom',
    difficulty: 'senior',
    type: 'code-write',
    question: 'Implement a function that reads a streaming fetch response using `ReadableStream` and logs chunks as they arrive.',
    answer: `async function streamFetch(url) {
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(\`HTTP error: \${response.status}\`)
  }

  const reader = response.body.getReader()
  const decoder = new TextDecoder()

  try {
    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      const chunk = decoder.decode(value, { stream: true })
      console.log('Chunk received:', chunk)
    }
  } finally {
    reader.releaseLock()
  }
}`,
    explanation:
      '`response.body` is a `ReadableStream`. `getReader()` acquires a lock on the stream. Each `reader.read()` call returns `{ done, value }` where `value` is a `Uint8Array`. `TextDecoder` with `{ stream: true }` handles multi-byte characters split across chunks. Always call `reader.releaseLock()` in finally. This pattern is used for Server-Sent Events, large file downloads, and LLM streaming responses.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/Streams_API/Using_readable_streams',
    ],
    tags: ['fetch', 'ReadableStream', 'streaming', 'TextDecoder'],
    year: 2025,
  },

  // ─── INTERSECTION OBSERVER ADVANCED ──────────────────────────────────────────
  {
    id: 'dom-056',
    topic: 'browser-dom',
    difficulty: 'senior',
    type: 'code-write',
    question: 'Implement a lazy image loader using `IntersectionObserver` that loads images when they are 100px from the viewport.',
    answer: `function lazyLoadImages() {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target
          img.src = img.dataset.src
          img.removeAttribute('data-src')
          obs.unobserve(img)
        }
      })
    },
    {
      rootMargin: '100px 0px',
      threshold: 0,
    }
  )

  document.querySelectorAll('img[data-src]').forEach(img => {
    observer.observe(img)
  })
}

// HTML: <img data-src="actual-image.jpg" src="placeholder.jpg" alt="...">`,
    explanation:
      '`rootMargin: "100px 0px"` extends the intersection zone 100px above/below the viewport, triggering load 100px before the image is visible. `threshold: 0` fires as soon as any part intersects. `unobserve` stops watching once loaded to free resources. Images use `data-src` to defer the actual URL — the real `src` is only set when intersecting, preventing eager loading.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API',
    ],
    tags: ['IntersectionObserver', 'lazy-loading', 'performance', 'images'],
    year: 2025,
  },

  // ─── SCROLL EVENTS / THROTTLE ─────────────────────────────────────────────────
  {
    id: 'dom-057',
    topic: 'browser-dom',
    difficulty: 'mid',
    type: 'code-write',
    question: 'Implement a `throttle` function that limits how often a scroll handler fires, then apply it to a scroll event.',
    answer: `function throttle(fn, delay) {
  let lastCall = 0
  return function (...args) {
    const now = Date.now()
    if (now - lastCall >= delay) {
      lastCall = now
      return fn.apply(this, args)
    }
  }
}

function handleScroll() {
  console.log('scroll position:', window.scrollY)
}

window.addEventListener('scroll', throttle(handleScroll, 200))`,
    explanation:
      'Throttle ensures the function executes at most once per `delay` milliseconds regardless of how many times it is called. Scroll events can fire 100+ times/second; throttling reduces expensive work. Compare with debounce (waits for inactivity). For scroll-based animations, prefer `requestAnimationFrame` over setTimeout-based throttle, as rAF syncs with paint cycles.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event',
    ],
    tags: ['throttle', 'scroll', 'performance', 'event-handling'],
    year: 2025,
  },

  // ─── MUTATION OBSERVER ────────────────────────────────────────────────────────
  {
    id: 'dom-058',
    topic: 'browser-dom',
    difficulty: 'senior',
    type: 'code-write',
    question: 'Write code using `MutationObserver` to detect when a specific element has a `loading` class added or removed.',
    answer: `function watchLoadingClass(element, onChange) {
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        const isLoading = element.classList.contains('loading')
        onChange(isLoading)
      }
    })
  })

  observer.observe(element, { attributes: true, attributeFilter: ['class'] })

  return () => observer.disconnect()
}

// Usage
const cleanup = watchLoadingClass(
  document.querySelector('#app'),
  (isLoading) => console.log('Loading state:', isLoading)
)

// cleanup() to stop observing`,
    explanation:
      '`{ attributes: true }` enables attribute mutation observation. `attributeFilter: ["class"]` limits callbacks to only class attribute changes (more efficient than observing all attributes). The mutation record has `mutation.attributeName` to confirm which attribute changed. Returning a cleanup function (`disconnect()`) prevents memory leaks. MutationObserver callbacks run as microtasks.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver',
    ],
    tags: ['MutationObserver', 'observers', 'dom-mutation', 'class'],
    year: 2025,
  },

  // ─── WINDOW / DOCUMENT ADVANCED ──────────────────────────────────────────────
  {
    id: 'dom-059',
    topic: 'browser-dom',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is the purpose of `content-visibility: auto` CSS property in browser rendering?',
    options: [
      'It hides elements from screen readers',
      'It tells the browser to skip rendering (layout + paint) for off-screen content, reducing initial render time for long pages',
      'It enables GPU compositing for the element',
      'It defers JavaScript execution inside the element',
    ],
    answer: 1,
    explanation:
      '`content-visibility: auto` instructs the browser to **skip layout and paint** for content outside the viewport. The browser uses an estimated size for skipped elements (or an explicit `contain-intrinsic-size` value) to maintain scroll position accuracy. This can dramatically reduce initial render time for long pages. Combined with `contain: layout style paint`, it enables off-screen content to be skipped entirely.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/CSS/content-visibility',
    ],
    tags: ['content-visibility', 'rendering-pipeline', 'performance', 'css'],
    year: 2025,
  },
  {
    id: 'dom-060',
    topic: 'browser-dom',
    difficulty: 'lead',
    type: 'system-design',
    question: 'Design a performant infinite scroll implementation for a social media feed with 10,000+ items. Explain the key browser APIs and techniques used.',
    answer: `Key components:

1. Virtual scrolling (windowing):
   - Render only visible items (+ small buffer above/below)
   - Use a fixed container height with absolute positioning
   - Track scrollTop to calculate visible range
   - Reuse DOM nodes (pool pattern) or libraries like react-window

2. IntersectionObserver for load triggers:
   - Observe a sentinel element at bottom
   - When it intersects, fetch next page
   - Disconnect after max items loaded

3. requestAnimationFrame for scroll handling:
   - Use rAF to batch DOM updates from scroll events
   - Avoid layout thrashing (batch reads, then writes)

4. Content recycling:
   - Pool DOM nodes, reuse when items scroll off-screen
   - Update data-* attributes instead of creating new elements

5. Image lazy loading:
   - IntersectionObserver with rootMargin for predictive loading
   - Decoding: img.decode() for off-thread image decode
   - Use srcset for responsive images

6. Performance considerations:
   - Throttle scroll listener (or use passive: true)
   - Avoid reading layout properties in scroll handlers
   - Use CSS contain: layout style on feed items
   - Prefetch next page data with low priority fetch

7. Scroll anchoring:
   - Preserve scroll position when prepending items
   - Use overflow-anchor CSS or manual scrollTop adjustment`,
    explanation:
      'Infinite scroll at scale requires combining: virtual/windowed rendering (only render ~20-50 items), IntersectionObserver for efficient scroll-to-bottom detection, rAF for smooth DOM updates, and lazy loading. The biggest wins come from virtual scrolling (avoids thousands of DOM nodes) and passive scroll listeners. Content anchoring prevents jarring jumps when new items are prepended.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API',
      'https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame',
    ],
    tags: ['infinite-scroll', 'virtual-scroll', 'IntersectionObserver', 'performance', 'system-design'],
    year: 2025,
  },

  // ─── CORS / SECURITY ADVANCED ─────────────────────────────────────────────────
  {
    id: 'dom-061',
    topic: 'browser-dom',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What HTTP response headers does a server need to send to allow cross-origin requests from `https://app.example.com`?',
    options: [
      'Only `Content-Type: application/json`',
      '`Access-Control-Allow-Origin: https://app.example.com` (or `*` for public APIs), plus `Access-Control-Allow-Methods` and `Access-Control-Allow-Headers` for non-simple requests',
      '`X-Allow-Origin: https://app.example.com`',
      '`CORS: enabled`',
    ],
    answer: 1,
    explanation:
      'For CORS to succeed, the server must include `Access-Control-Allow-Origin` in the response. Use a specific origin (not `*`) when credentials (cookies, `Authorization` headers) are involved — `*` with credentials is blocked. For non-simple requests (after preflight), also include `Access-Control-Allow-Methods` (e.g., `GET, POST, PUT`) and `Access-Control-Allow-Headers` for custom headers. For credentials: `Access-Control-Allow-Credentials: true` and the request must set `credentials: "include"`.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS',
    ],
    tags: ['CORS', 'security', 'HTTP-headers', 'fetch'],
    year: 2025,
  },
  {
    id: 'dom-062',
    topic: 'browser-dom',
    difficulty: 'lead',
    type: 'mcq',
    question: 'What are COOP and COEP headers and why are they required for `SharedArrayBuffer`?',
    options: [
      'They are performance optimization headers with no security purpose',
      '`Cross-Origin-Opener-Policy: same-origin` isolates the browsing context group; `Cross-Origin-Embedder-Policy: require-corp` ensures all cross-origin resources opt in. Together they enable a "cross-origin isolated" context required for SharedArrayBuffer due to Spectre mitigations',
      'They replace CORS headers for modern browsers',
      'They enable HTTP/3 for the page',
    ],
    answer: 1,
    explanation:
      'After Spectre/Meltdown vulnerabilities, browsers disabled `SharedArrayBuffer` by default. It is only re-enabled in **cross-origin isolated** contexts. This requires: `Cross-Origin-Opener-Policy: same-origin` (prevents other origins from gaining a reference to your window) and `Cross-Origin-Embedder-Policy: require-corp` (ensures all subresources either are same-origin or send CORP: same-origin/cross-origin headers). This also enables `performance.measureUserAgentSpecificMemory()` and high-res timers.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#security_requirements',
    ],
    tags: ['COOP', 'COEP', 'SharedArrayBuffer', 'security', 'Spectre'],
    year: 2025,
  },

  // ─── ADDITIONAL QUESTIONS ─────────────────────────────────────────────────────
  {
    id: 'dom-063',
    topic: 'browser-dom',
    difficulty: 'junior',
    type: 'true-false',
    question: 'Calling `element.innerHTML = userInput` without sanitization is safe as long as the input is from the current user.',
    answer: false,
    explanation:
      'Setting `innerHTML` with unsanitized user input is an XSS (Cross-Site Scripting) vulnerability even if the input comes from the current user — because that data may have been stored and served back, or another user\'s input may be displayed to this user. Always sanitize HTML before insertion using `DOMPurify` or the native `setHTML()` (Sanitizer API). Prefer `textContent` for plain text (it does not parse HTML). `innerHTML` executes `<script>` in older browsers and always processes inline event handlers.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/Security/Types_of_attacks#cross-site_scripting_xss',
    ],
    tags: ['XSS', 'innerHTML', 'security', 'sanitization'],
    year: 2025,
  },
  {
    id: 'dom-064',
    topic: 'browser-dom',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is the difference between `textContent` and `innerText`?',
    options: [
      'They are identical',
      '`textContent` returns all text including hidden elements and script/style content; `innerText` returns only human-readable text, is aware of CSS styling, and triggers a reflow',
      '`innerText` returns all text; `textContent` only returns text of the element itself, not descendants',
      '`textContent` is deprecated; use `innerText`',
    ],
    answer: 1,
    explanation:
      '`textContent` returns the text content of the node and all descendants, including `<script>` and `<style>` content and text in hidden elements. It is **not** layout-aware and does not trigger reflow. `innerText` approximates what is visible on screen: it respects CSS `display: none` and `visibility: hidden`, renders `<br>` as newlines, and collapses whitespace. Because `innerText` is layout-aware, reading it forces a **reflow**. For setting text content safely, prefer `textContent`.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent#differences_from_innertext',
    ],
    tags: ['textContent', 'innerText', 'dom-manipulation', 'reflow'],
    year: 2025,
  },
  {
    id: 'dom-065',
    topic: 'browser-dom',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is the Temporal Dead Zone (TDZ) equivalent concept in browser context: what happens if you try to access a CSS Custom Property (variable) that is not defined?',
    options: [
      'The browser throws a TypeError',
      'The browser returns an empty string `""` for the property value, which may cause the property it is applied to to use its initial value',
      'The browser returns `undefined`',
      'The browser returns `null`',
    ],
    answer: 1,
    explanation:
      'If a CSS custom property (`var(--my-color)`) is not defined in any ancestor, `getComputedStyle(el).getPropertyValue("--my-color")` returns an empty string `" "` (with whitespace). When a property like `color: var(--my-color)` references an undefined variable, the property becomes **invalid at computed value time** and falls back to its **inherited value** or **initial value** — not an error. You can provide a fallback: `var(--my-color, blue)`.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties',
    ],
    tags: ['css-custom-properties', 'css-variables', 'browser-dom', 'css'],
    year: 2025,
  },
  {
    id: 'dom-066',
    topic: 'browser-dom',
    difficulty: 'lead',
    type: 'system-design',
    question: 'How would you architect a real-time collaborative document editor in the browser? Describe the key browser APIs, conflict resolution strategy, and performance considerations.',
    answer: `Architecture overview:

1. Real-time communication:
   - WebSocket for bi-directional real-time updates
   - Fallback to Server-Sent Events (EventSource) for read-heavy scenarios
   - Use a heartbeat/ping to detect disconnection

2. Conflict resolution (CRDT or OT):
   - Operational Transformation (OT): server mediates, transforms concurrent ops
   - CRDTs (Conflict-free Replicated Data Types): peer-to-peer, no server mediation
   - Libraries: Yjs (CRDT), ShareDB (OT)

3. DOM interaction:
   - contenteditable or custom canvas-based renderer
   - Use Selection API and Range API for cursor/selection sync
   - MutationObserver to detect local edits
   - Debounce changes before broadcasting

4. Optimistic updates:
   - Apply local changes immediately (optimistic)
   - Reconcile with server-confirmed state
   - Undo stack with operational inverse

5. Performance:
   - Virtual rendering for large documents
   - requestAnimationFrame for cursor/selection rendering
   - Web Workers for heavy text processing (diff, syntax highlighting)
   - IndexedDB for local persistence and offline drafts

6. Presence indicators:
   - Broadcast cursor position via WebSocket
   - Throttle position updates with requestAnimationFrame
   - CSS-animated cursors using absolute positioning`,
    explanation:
      'A collaborative editor combines: WebSocket for real-time sync, CRDTs/OT for conflict-free merging, the Selection/Range APIs for cursor sync, MutationObserver for local change detection, and Web Workers for off-thread processing. CRDTs are preferred in modern implementations (Yjs, Automerge) for their peer-to-peer capabilities and eventual consistency guarantees without a central authority.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/WebSocket',
      'https://developer.mozilla.org/en-US/docs/Web/API/Selection',
    ],
    tags: ['websocket', 'CRDT', 'collaboration', 'system-design', 'Selection-API'],
    year: 2025,
  },
  {
    id: 'dom-067',
    topic: 'browser-dom',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What does `element.getBoundingClientRect()` return and what is the caveat about using it in a loop?',
    options: [
      'It returns element dimensions relative to its offsetParent; no caveat',
      'It returns a DOMRect with element position/size relative to the viewport; calling it forces a synchronous layout (reflow) so calling it inside a write loop causes layout thrashing',
      'It returns element dimensions relative to the document; it is always free to call',
      'It is asynchronous and returns a Promise',
    ],
    answer: 1,
    explanation:
      '`getBoundingClientRect()` returns a `DOMRect` with `top`, `right`, `bottom`, `left`, `width`, `height` relative to the **viewport**. The caveat: it is a **layout-triggering** read — if the DOM has pending style changes, the browser flushes layout synchronously to give you accurate values. Calling it inside a loop that also modifies styles causes **forced synchronous layouts** (layout thrashing). Solution: read all values first, then apply all writes.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect',
    ],
    tags: ['getBoundingClientRect', 'reflow', 'layout-thrashing', 'performance'],
    year: 2025,
  },
  {
    id: 'dom-068',
    topic: 'browser-dom',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is the `will-change` CSS property and when should you use it sparingly?',
    options: [
      'It enables hardware acceleration for all CSS properties; always apply it globally',
      'It hints to the browser to create a new compositor layer for the element in advance; use only when you know animation will start soon, as overuse wastes memory and GPU resources',
      'It prevents repaints on the element entirely',
      'It is required for CSS animations to work in Chrome',
    ],
    answer: 1,
    explanation:
      '`will-change: transform` (or `opacity`, `scroll-position`) tells the browser to promote the element to its own compositor layer before animation starts, avoiding the cost of layer creation mid-animation. However: creating layers consumes memory and each layer must be uploaded to the GPU. Applying `will-change` to many/large elements can crash or slow down the browser. Use it only when profiling shows layer promotion would help, and remove it after animation via JS. `transform: translateZ(0)` is the old "hack" equivalent.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/CSS/will-change',
    ],
    tags: ['will-change', 'compositing', 'animation', 'performance', 'gpu'],
    year: 2025,
  },
]
