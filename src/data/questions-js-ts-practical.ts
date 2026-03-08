import type { Question } from '../types'

export const jsTsPracticalQuestions: Question[] = [
  // ═══════════════════════════════════════════════════
  // JAVASCRIPT-CORE — 20 questions (jtp-001 → jtp-020)
  // ═══════════════════════════════════════════════════

  // --- Memory & Performance ---
  {
    id: 'jtp-001',
    topic: 'javascript-core',
    difficulty: 'senior',
    type: 'debug',
    question:
      'Users report your SPA gets slower over time. Chrome DevTools heap snapshot shows memory growing on every page navigation. Find and fix the memory leak in this React useEffect.',
    code: `function LiveDashboard({ channelId }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const ws = new WebSocket(\`wss://api.example.com/\${channelId}\`);
    ws.addEventListener('message', (event) => {
      setMessages((prev) => [...prev, JSON.parse(event.data)]);
    });

    window.addEventListener('resize', handleResize);

    const interval = setInterval(() => {
      fetch(\`/api/heartbeat/\${channelId}\`);
    }, 30000);

    // BUG: no cleanup returned
  }, [channelId]);

  function handleResize() {
    console.log('resized');
  }

  return <MessageList messages={messages} />;
}`,
    answer: `useEffect(() => {
  const ws = new WebSocket(\`wss://api.example.com/\${channelId}\`);
  const handleMessage = (event) => {
    setMessages((prev) => [...prev, JSON.parse(event.data)]);
  };
  ws.addEventListener('message', handleMessage);

  const resizeHandler = () => console.log('resized');
  window.addEventListener('resize', resizeHandler);

  const interval = setInterval(() => {
    fetch(\`/api/heartbeat/\${channelId}\`);
  }, 30000);

  return () => {
    ws.removeEventListener('message', handleMessage);
    ws.close();
    window.removeEventListener('resize', resizeHandler);
    clearInterval(interval);
  };
}, [channelId]);`,
    explanation:
      'Three leaks: (1) WebSocket never closed — each channelId change opens a new connection without closing the old one. (2) window resize listener accumulates because handleResize is re-created each render and never removed. (3) setInterval is never cleared. The fix returns a cleanup function that closes the WebSocket, removes the event listener (using a stable reference), and clears the interval. This cleanup runs on unmount and before each re-run when channelId changes.',
    tags: ['memory-leak', 'useEffect', 'cleanup', 'websocket', 'event-listeners'],
    year: 2025,
  },
  {
    id: 'jtp-002',
    topic: 'javascript-core',
    difficulty: 'senior',
    type: 'code-write',
    question:
      'Implement a deepClone function that correctly handles Date, RegExp, Map, Set, ArrayBuffer, and circular references. Do NOT use structuredClone.',
    answer: `function deepClone(obj, seen = new WeakMap()) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (seen.has(obj)) return seen.get(obj);

  if (obj instanceof Date) return new Date(obj.getTime());
  if (obj instanceof RegExp) return new RegExp(obj.source, obj.flags);
  if (obj instanceof ArrayBuffer) return obj.slice(0);

  if (obj instanceof Map) {
    const map = new Map();
    seen.set(obj, map);
    obj.forEach((val, key) => map.set(deepClone(key, seen), deepClone(val, seen)));
    return map;
  }

  if (obj instanceof Set) {
    const set = new Set();
    seen.set(obj, set);
    obj.forEach((val) => set.add(deepClone(val, seen)));
    return set;
  }

  const clone = Array.isArray(obj) ? [] : Object.create(Object.getPrototypeOf(obj));
  seen.set(obj, clone);

  for (const key of Reflect.ownKeys(obj)) {
    const descriptor = Object.getOwnPropertyDescriptor(obj, key);
    if (descriptor) {
      if ('value' in descriptor) {
        descriptor.value = deepClone(descriptor.value, seen);
      }
      Object.defineProperty(clone, key, descriptor);
    }
  }

  return clone;
}`,
    explanation:
      'The WeakMap tracks visited objects to handle circular references — if we encounter the same object again we return the already-created clone. Each built-in type needs special handling: Date is cloned via getTime(), RegExp via source/flags, Map/Set by iterating and recursively cloning entries. Reflect.ownKeys captures both string and symbol keys, and Object.getOwnPropertyDescriptor preserves non-enumerable and getter/setter properties. This is essentially what structuredClone does internally, minus transferable support.',
    tags: ['deep-clone', 'circular-reference', 'WeakMap', 'Reflect'],
    year: 2025,
  },
  {
    id: 'jtp-003',
    topic: 'javascript-core',
    difficulty: 'senior',
    type: 'code-write',
    question:
      'You have 5 independent API calls running sequentially with await. Users complain the dashboard takes 5 seconds to load. Refactor for parallel execution with proper error handling so one failure does not crash the page.',
    code: `// Current slow code
async function loadDashboard() {
  const user = await fetchUser();
  const orders = await fetchOrders();
  const notifications = await fetchNotifications();
  const analytics = await fetchAnalytics();
  const recommendations = await fetchRecommendations();
  return { user, orders, notifications, analytics, recommendations };
}`,
    answer: `async function loadDashboard() {
  const [user, orders, notifications, analytics, recommendations] =
    await Promise.allSettled([
      fetchUser(),
      fetchOrders(),
      fetchNotifications(),
      fetchAnalytics(),
      fetchRecommendations(),
    ]);

  return {
    user: user.status === 'fulfilled' ? user.value : null,
    orders: orders.status === 'fulfilled' ? orders.value : null,
    notifications: notifications.status === 'fulfilled' ? notifications.value : null,
    analytics: analytics.status === 'fulfilled' ? analytics.value : null,
    recommendations: recommendations.status === 'fulfilled' ? recommendations.value : null,
  };
}`,
    explanation:
      'Promise.allSettled runs all 5 fetches in parallel and waits for every one to complete regardless of success/failure. Unlike Promise.all which short-circuits on the first rejection, allSettled always returns an array of { status, value/reason } objects. This means a failing analytics API does not prevent user data from loading. Total time drops from the sum of all calls (~5s) to the duration of the slowest call (~1s). For critical data (user), you might still want to throw if it fails.',
    tags: ['Promise.allSettled', 'parallel', 'async', 'error-handling'],
    year: 2025,
  },
  {
    id: 'jtp-004',
    topic: 'javascript-core',
    difficulty: 'senior',
    type: 'code-write',
    question:
      'Build a task queue that runs at most N async tasks concurrently (like p-limit). API: `const limit = createLimit(3); const result = await limit(() => fetch(url));`',
    answer: `function createLimit(concurrency) {
  let active = 0;
  const queue = [];

  function next() {
    if (active >= concurrency || queue.length === 0) return;
    active++;
    const { fn, resolve, reject } = queue.shift();
    fn().then(resolve, reject).finally(() => {
      active--;
      next();
    });
  }

  return function limit(fn) {
    return new Promise((resolve, reject) => {
      queue.push({ fn, resolve, reject });
      next();
    });
  };
}`,
    explanation:
      'The queue stores wrapped tasks with their resolve/reject handlers. When a task is submitted via limit(fn), it is pushed to the queue and next() is called. next() checks if we are below the concurrency cap and if tasks are waiting. If so, it dequeues a task, increments active, runs the async function, and on completion (via .finally) decrements active and calls next() again to process the queue. This pattern is used by p-limit, bottleneck, and similar libraries. Key detail: fn() must return a promise — the task is not started until dequeued.',
    tags: ['concurrency', 'queue', 'promise', 'p-limit', 'rate-limiting'],
    year: 2025,
  },
  {
    id: 'jtp-005',
    topic: 'javascript-core',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'Implement a localStorage wrapper with TTL (time-to-live), JSON serialization, and quota handling. API: `storage.set("key", data, { ttl: 60000 }); const val = storage.get("key");`',
    answer: `const storage = {
  set(key, value, { ttl } = {}) {
    const item = {
      value,
      expiry: ttl ? Date.now() + ttl : null,
    };
    try {
      localStorage.setItem(key, JSON.stringify(item));
    } catch (e) {
      if (e instanceof DOMException && e.name === 'QuotaExceededError') {
        this.evictExpired();
        try {
          localStorage.setItem(key, JSON.stringify(item));
        } catch {
          console.error('Storage quota exceeded even after eviction');
          return false;
        }
      }
    }
    return true;
  },

  get(key) {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    try {
      const item = JSON.parse(raw);
      if (item.expiry && Date.now() > item.expiry) {
        localStorage.removeItem(key);
        return null;
      }
      return item.value;
    } catch {
      return null;
    }
  },

  remove(key) {
    localStorage.removeItem(key);
  },

  evictExpired() {
    for (let i = localStorage.length - 1; i >= 0; i--) {
      const key = localStorage.key(i);
      if (!key) continue;
      try {
        const item = JSON.parse(localStorage.getItem(key) || '');
        if (item.expiry && Date.now() > item.expiry) {
          localStorage.removeItem(key);
        }
      } catch { /* skip non-JSON entries */ }
    }
  },
};`,
    explanation:
      'The wrapper stores an envelope object { value, expiry } so we can check TTL on read. On get(), if the item has expired, it is lazily deleted and null is returned. On set(), if localStorage throws QuotaExceededError, we first evict all expired items and retry. The JSON.parse try-catch handles corrupted or non-JSON entries gracefully. This pattern is common in production apps to avoid silent failures with localStorage limits (~5-10MB depending on browser).',
    tags: ['localStorage', 'TTL', 'quota', 'serialization', 'caching'],
    year: 2025,
  },
  {
    id: 'jtp-006',
    topic: 'javascript-core',
    difficulty: 'senior',
    type: 'debug',
    question:
      'This code works in Chrome but breaks in Safari with "TypeError: t.replaceAll is not a function" and date parsing returns NaN. Find and fix both compatibility issues.',
    code: `function formatUserData(input) {
  // Clean the input string
  const cleaned = input.replaceAll('-', '/');

  // Parse the date
  const date = new Date('2025-03-15T10:30:00');
  const formatted = date.toLocaleDateString('en-US', { dateStyle: 'long' });

  // Use optional chaining with assignment
  const config = {};
  config.theme ??= 'dark';

  // Lookbehind regex
  const price = '$42.99'.match(/(?<=\\$)\\d+\\.\\d+/)?.[0];

  return { cleaned, formatted, config, price };
}`,
    answer: `function formatUserData(input) {
  // Fix 1: replaceAll not available in older Safari — use split/join or global regex
  const cleaned = input.split('-').join('/');

  // Fix 2: Safari is strict about date string parsing — ensure ISO 8601 with timezone
  const date = new Date('2025-03-15T10:30:00Z'); // Add Z or explicit timezone offset
  const formatted = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  // Fix 3: ??= (logical nullish assignment) needs Safari 14+
  const config = {};
  config.theme = config.theme ?? 'dark';

  // Fix 4: Lookbehind regex not supported in Safari <16.4
  const price = '$42.99'.match(/\\$(\\d+\\.\\d+)/)?.[1];

  return { cleaned, formatted, config, price };
}`,
    explanation:
      'Safari has historically lagged behind Chrome in JS feature support. (1) String.prototype.replaceAll was added in Safari 13.1 but not available in older iOS WebViews. split/join is universally supported. (2) Safari is notoriously strict with Date parsing — "2025-03-15T10:30:00" without a timezone is interpreted as local in Chrome but may return NaN in Safari. Always append "Z" for UTC or use explicit offsets. (3) Logical assignment operators (??=, ||=, &&=) require Safari 14+. (4) Regex lookbehind assertions are only supported in Safari 16.4+. Using a capture group instead is backward-compatible. Always check caniuse.com for target browser support.',
    tags: ['cross-browser', 'safari', 'compatibility', 'polyfill', 'date-parsing'],
    year: 2025,
  },
  {
    id: 'jtp-007',
    topic: 'javascript-core',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'Implement a debounce function with leading edge, trailing edge, cancel, and flush support. `const debouncedSearch = debounce(search, 300, { leading: false, trailing: true });`',
    answer: `function debounce(fn, delay, { leading = false, trailing = true } = {}) {
  let timerId = null;
  let lastArgs = null;
  let lastThis = null;
  let canLeadingInvoke = true;

  function invoke() {
    const args = lastArgs;
    const ctx = lastThis;
    lastArgs = lastThis = null;
    fn.apply(ctx, args);
  }

  function debounced(...args) {
    lastArgs = args;
    lastThis = this;

    if (leading && canLeadingInvoke) {
      canLeadingInvoke = false;
      invoke();
      timerId = setTimeout(() => {
        canLeadingInvoke = true;
        if (trailing && lastArgs) invoke();
        timerId = null;
      }, delay);
      return;
    }

    clearTimeout(timerId);
    timerId = setTimeout(() => {
      canLeadingInvoke = true;
      if (trailing) invoke();
      timerId = null;
    }, delay);
  }

  debounced.cancel = () => {
    clearTimeout(timerId);
    timerId = null;
    lastArgs = lastThis = null;
    canLeadingInvoke = true;
  };

  debounced.flush = () => {
    if (timerId !== null) {
      clearTimeout(timerId);
      timerId = null;
      canLeadingInvoke = true;
      if (lastArgs) invoke();
    }
  };

  return debounced;
}`,
    explanation:
      'Leading edge fires on the first call, then suppresses subsequent calls within the delay window. Trailing edge fires after the delay expires with the most recent arguments. cancel() clears the pending timer and resets state. flush() immediately executes the pending invocation. The canLeadingInvoke flag prevents the leading call from firing again until the delay period resets. This is the same API as lodash.debounce and is essential for search inputs (trailing) and button clicks (leading).',
    tags: ['debounce', 'leading-edge', 'trailing-edge', 'lodash', 'event-handling'],
    year: 2025,
  },
  {
    id: 'jtp-008',
    topic: 'javascript-core',
    difficulty: 'mid',
    type: 'debug',
    question:
      'This recursive function works for small inputs but throws "Maximum call stack size exceeded" with large arrays (100k+ elements). Fix it without changing the logic outcome.',
    code: `function flatten(arr) {
  if (arr.length === 0) return [];
  const [first, ...rest] = arr;
  if (Array.isArray(first)) {
    return flatten([...first, ...rest]);
  }
  return [first, ...flatten(rest)];
}

// Works: flatten([1, [2, [3]], 4])
// Crashes: flatten(Array.from({ length: 100000 }, (_, i) => i))`,
    answer: `function flatten(arr) {
  const result = [];
  const stack = [...arr];

  while (stack.length > 0) {
    const item = stack.pop();
    if (Array.isArray(item)) {
      stack.push(...item);
    } else {
      result.push(item);
    }
  }

  result.reverse();
  return result;
}`,
    explanation:
      'The recursive version creates a new stack frame for every element in the array — 100k elements means 100k stack frames, exceeding the browser call stack limit (~10k-25k depending on the engine). The iterative solution uses an explicit stack (array) on the heap, which has no practical size limit. We pop from the end (O(1)) and push sub-arrays back onto the stack. Since pop processes items in reverse order, we reverse the result at the end. Alternatively, you could use shift() and avoid the reverse, but shift is O(n). Another approach is a trampoline pattern, but the iterative rewrite is cleaner and faster.',
    tags: ['stack-overflow', 'recursion', 'iterative', 'flatten', 'optimization'],
    year: 2025,
  },
  {
    id: 'jtp-009',
    topic: 'javascript-core',
    difficulty: 'senior',
    type: 'code-write',
    question:
      'Implement a memoize function that handles multiple arguments, object arguments (by deep value), and has a configurable max cache size with LRU eviction.',
    answer: `function memoize(fn, { maxSize = 100, resolver } = {}) {
  const cache = new Map();

  function generateKey(args) {
    if (resolver) return resolver(...args);
    return args.length === 1 && typeof args[0] !== 'object'
      ? args[0]
      : JSON.stringify(args);
  }

  function memoized(...args) {
    const key = generateKey(args);

    if (cache.has(key)) {
      const value = cache.get(key);
      // Move to end (most recently used)
      cache.delete(key);
      cache.set(key, value);
      return value;
    }

    const result = fn.apply(this, args);

    cache.set(key, result);
    if (cache.size > maxSize) {
      // Delete the least recently used (first entry in Map)
      const firstKey = cache.keys().next().value;
      cache.delete(firstKey);
    }

    return result;
  }

  memoized.cache = cache;
  memoized.clear = () => cache.clear();

  return memoized;
}`,
    explanation:
      'The key challenge is creating a stable cache key from arbitrary arguments. For primitives, the value itself works. For objects, JSON.stringify produces a deterministic string (with the caveat that key order matters — a custom resolver lets users control this). LRU eviction leverages Map insertion order: we delete and re-set on cache hits to move entries to the end, and evict from the front (oldest/least recently used) when maxSize is exceeded. The optional resolver function allows custom key generation for domain-specific caching (e.g., only caching on the first argument). Exposed cache and clear() allow manual invalidation.',
    tags: ['memoize', 'LRU', 'cache', 'optimization', 'Map'],
    year: 2025,
  },
  {
    id: 'jtp-010',
    topic: 'javascript-core',
    difficulty: 'mid',
    type: 'debug',
    question:
      'This legacy code is callback hell from a Node.js service. The error handling is broken — errors from readFile silently disappear and the final callback sometimes fires twice. Refactor to async/await with proper error handling.',
    code: `function processUserData(userId, callback) {
  db.getUser(userId, function(err, user) {
    if (err) callback(err);
    fs.readFile(user.configPath, function(err, config) {
      if (err) callback(err);
      api.fetchPermissions(user.role, function(err, permissions) {
        if (err) callback(err);
        const result = mergeData(user, JSON.parse(config), permissions);
        cache.set(userId, result, function(err) {
          if (err) console.log('cache error', err);
          callback(null, result);
        });
      });
    });
  });
}`,
    answer: `const { promisify } = require('util');
const readFile = promisify(fs.readFile);

async function processUserData(userId) {
  const user = await db.getUser(userId);
  const [config, permissions] = await Promise.all([
    readFile(user.configPath, 'utf-8'),
    api.fetchPermissions(user.role),
  ]);

  const result = mergeData(user, JSON.parse(config), permissions);

  try {
    await cache.set(userId, result);
  } catch (err) {
    console.warn('Non-critical: cache write failed', err);
  }

  return result;
}`,
    explanation:
      'The original code has three critical bugs: (1) Missing "return" after callback(err) means execution continues after an error, leading to crashes or double callbacks. (2) If readFile fails, the error callback fires but then the code continues to api.fetchPermissions with an undefined config. (3) JSON.parse is not wrapped in try-catch, so invalid JSON crashes without a proper error callback. The async/await version solves all of these: errors automatically propagate, execution stops at the first throw, and the sequential flow is clear. config and permissions reads are independent so we parallelize with Promise.all. Cache write is non-critical so we catch that separately.',
    tags: ['callback-hell', 'async-await', 'refactoring', 'error-handling', 'promisify'],
    year: 2025,
  },
  {
    id: 'jtp-011',
    topic: 'javascript-core',
    difficulty: 'mid',
    type: 'code-output',
    question: 'What does the following code output and why?',
    code: `const arr = [1, 2, 3, 4, 5];

const result = arr.reduce((acc, val) => {
  acc.push(val * 2);
  return acc;
}, []);

console.log(result);
console.log(result === arr);

const obj = { a: 1, b: 2, c: 3 };
console.log(Object.entries(obj).map(([k, v]) => \`\${k}:\${v}\`).join(', '));`,
    answer: '[2, 4, 6, 8, 10]\nfalse\na:1, b:2, c:3',
    explanation:
      'Line 1: reduce with an initial empty array accumulates doubled values — equivalent to arr.map(v => v * 2). Line 2: result is a new array (the initial [] passed to reduce), so strict equality with arr is false. Line 3: Object.entries returns [["a",1],["b",2],["c",3]], destructured in map to format each key-value pair, then joined with commas. This tests understanding of reduce as a general-purpose iteration tool, reference equality, and the Object.entries/destructuring/map/join pipeline.',
    tags: ['reduce', 'reference-equality', 'Object.entries', 'array-methods'],
    year: 2025,
  },
  {
    id: 'jtp-012',
    topic: 'javascript-core',
    difficulty: 'junior',
    type: 'code-output',
    question: 'What is the output? Explain the event loop behavior.',
    code: `console.log('1');

setTimeout(() => console.log('2'), 0);

Promise.resolve().then(() => console.log('3'));

queueMicrotask(() => console.log('4'));

console.log('5');`,
    answer: '1\n5\n3\n4\n2',
    explanation:
      'Synchronous code runs first: "1" then "5". Microtasks (Promise.then and queueMicrotask) run before macrotasks (setTimeout), and in the order they were queued: "3" then "4". Finally, the setTimeout callback runs: "2". The event loop processes all microtasks after each macrotask completes, before moving to the next macrotask. Even though setTimeout has a 0ms delay, it is placed in the macrotask queue, which has lower priority than the microtask queue.',
    tags: ['event-loop', 'microtask', 'macrotask', 'setTimeout', 'Promise'],
    year: 2025,
  },
  {
    id: 'jtp-013',
    topic: 'javascript-core',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'Implement a retry function with exponential backoff, max retries, and jitter. API: `const data = await retry(() => fetch(url), { retries: 3, baseDelay: 1000 });`',
    answer: `async function retry(fn, { retries = 3, baseDelay = 1000, maxDelay = 30000 } = {}) {
  let lastError;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      return await fn();
    } catch (err) {
      lastError = err;
      if (attempt === retries) break;

      const exponentialDelay = baseDelay * Math.pow(2, attempt);
      const jitter = Math.random() * baseDelay;
      const delay = Math.min(exponentialDelay + jitter, maxDelay);

      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }

  throw lastError;
}`,
    explanation:
      'Exponential backoff increases the delay between retries (1s, 2s, 4s, ...) to avoid overwhelming a failing service. Jitter adds randomness so that many clients retrying simultaneously do not all hit the server at the same instant (thundering herd problem). maxDelay caps the wait time. The function re-throws the last error after all retries are exhausted. This pattern is standard in production HTTP clients (AWS SDK, axios-retry, etc.). The attempt counter is 0-indexed: attempt 0 is the initial call, attempts 1-N are retries.',
    tags: ['retry', 'exponential-backoff', 'jitter', 'error-handling', 'resilience'],
    year: 2025,
  },
  {
    id: 'jtp-014',
    topic: 'javascript-core',
    difficulty: 'junior',
    type: 'debug',
    question:
      'This event delegation code should handle clicks on dynamically added list items, but clicking on the <span> inside a <li> does not trigger the handler. Fix it.',
    code: `document.getElementById('list').addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    const itemId = e.target.dataset.id;
    selectItem(itemId);
  }
});

// HTML:
// <ul id="list">
//   <li data-id="1"><span class="icon">★</span> Item 1</li>
//   <li data-id="2"><span class="icon">★</span> Item 2</li>
// </ul>`,
    answer: `document.getElementById('list').addEventListener('click', (e) => {
  const li = e.target.closest('li');
  if (li && li.dataset.id) {
    selectItem(li.dataset.id);
  }
});`,
    explanation:
      'When clicking the <span> inside a <li>, e.target is the <span>, not the <li>. The original code uses strict tagName comparison, which fails for nested elements. Element.closest() traverses up the DOM tree from the clicked element to find the nearest ancestor matching the selector. If the click is on the span, closest("li") finds the parent li. If the click is directly on the li, closest("li") returns the li itself. This is the standard pattern for event delegation with nested elements.',
    tags: ['event-delegation', 'closest', 'DOM', 'dynamic-content', 'bubbling'],
    year: 2025,
  },
  {
    id: 'jtp-015',
    topic: 'javascript-core',
    difficulty: 'mid',
    type: 'mcq',
    question:
      'You are debugging a production issue where `JSON.parse(JSON.stringify(data))` silently drops some fields. Which of the following data types will be LOST in a JSON round-trip?',
    options: [
      'String, Number, Boolean, null',
      'undefined, Function, Symbol, BigInt, Date (converted to string), Map, Set',
      'Only undefined and Symbol',
      'Arrays and nested objects',
    ],
    answer: 1,
    explanation:
      'JSON.stringify silently drops properties whose values are undefined, Function, or Symbol. BigInt throws a TypeError. Date objects are serialized to ISO strings but JSON.parse does not convert them back — they stay as strings. Map and Set serialize to empty objects {} because they have no enumerable own properties in the JSON sense. NaN and Infinity become null. This is why structuredClone or a custom deepClone is preferred for cloning complex objects. Always audit data types before using JSON round-tripping as a clone strategy.',
    tags: ['JSON', 'serialization', 'data-types', 'gotchas', 'structuredClone'],
    year: 2025,
  },
  {
    id: 'jtp-016',
    topic: 'javascript-core',
    difficulty: 'junior',
    type: 'debug',
    question:
      'Users report that the search filter does not work correctly — it should be case-insensitive and match partial strings, but some items are missing from results. Find the bug.',
    code: `function filterItems(items, query) {
  return items.filter((item) => {
    return item.name.includes(query);
  });
}

// Test:
const items = [
  { name: 'JavaScript Basics' },
  { name: 'typescript Guide' },
  { name: 'REACT Tutorial' },
];

console.log(filterItems(items, 'java')); // Expected: [{ name: 'JavaScript Basics' }]
// Returns: [] ← BUG`,
    answer: `function filterItems(items, query) {
  const lowerQuery = query.toLowerCase();
  return items.filter((item) => {
    return item.name.toLowerCase().includes(lowerQuery);
  });
}`,
    explanation:
      'String.prototype.includes() is case-sensitive. "JavaScript Basics".includes("java") returns false because "J" !== "j". The fix converts both the item name and the query to lowercase before comparison. An alternative is to use a case-insensitive regex: new RegExp(query, "i"), but that requires escaping special regex characters in the query. The toLowerCase approach is simpler and safer. For internationalization, consider using toLocaleLowerCase() or Intl.Collator for locale-aware comparison.',
    tags: ['string-matching', 'case-sensitivity', 'filter', 'search', 'beginner-bug'],
    year: 2025,
  },
  {
    id: 'jtp-017',
    topic: 'javascript-core',
    difficulty: 'lead',
    type: 'code-write',
    question:
      'Implement a pub/sub event emitter with: typed events, once listeners, wildcard subscriptions, and memory leak detection (warn if >10 listeners on one event). No external libraries.',
    answer: `class EventEmitter {
  #listeners = new Map();
  #maxListeners = 10;

  on(event, fn, { once = false } = {}) {
    if (!this.#listeners.has(event)) {
      this.#listeners.set(event, []);
    }
    const listeners = this.#listeners.get(event);
    listeners.push({ fn, once });

    if (listeners.length > this.#maxListeners) {
      console.warn(
        \`Possible memory leak: \${listeners.length} listeners for "\${event}". Use setMaxListeners() to increase limit.\`
      );
    }

    return () => this.off(event, fn);
  }

  once(event, fn) {
    return this.on(event, fn, { once: true });
  }

  off(event, fn) {
    if (!this.#listeners.has(event)) return;
    const listeners = this.#listeners.get(event);
    const idx = listeners.findIndex((l) => l.fn === fn);
    if (idx !== -1) listeners.splice(idx, 1);
    if (listeners.length === 0) this.#listeners.delete(event);
  }

  emit(event, ...args) {
    const handle = (eventKey) => {
      const listeners = this.#listeners.get(eventKey);
      if (!listeners) return;
      const toRemove = [];
      for (const listener of listeners) {
        listener.fn(...args);
        if (listener.once) toRemove.push(listener);
      }
      for (const listener of toRemove) {
        const idx = listeners.indexOf(listener);
        if (idx !== -1) listeners.splice(idx, 1);
      }
    };

    handle(event);

    // Wildcard: listeners on '*' receive all events
    if (event !== '*') {
      const wildcard = this.#listeners.get('*');
      if (wildcard) {
        for (const listener of [...wildcard]) {
          listener.fn(event, ...args);
          if (listener.once) {
            const idx = wildcard.indexOf(listener);
            if (idx !== -1) wildcard.splice(idx, 1);
          }
        }
      }
    }
  }

  setMaxListeners(n) {
    this.#maxListeners = n;
  }

  listenerCount(event) {
    return this.#listeners.get(event)?.length ?? 0;
  }

  removeAllListeners(event) {
    if (event) {
      this.#listeners.delete(event);
    } else {
      this.#listeners.clear();
    }
  }
}`,
    explanation:
      'This mirrors Node.js EventEmitter API design. Key decisions: (1) on() returns an unsubscribe function for convenient cleanup (React pattern). (2) Once listeners are flagged and removed after first invocation — we collect them first to avoid mutating the array during iteration. (3) Wildcard "*" listeners receive the event name as the first argument so they can route/log all events. (4) Memory leak warning at >10 listeners matches Node.js behavior — commonly caused by adding listeners in loops or re-renders without cleanup. Private class fields (#) prevent external tampering with listener state.',
    tags: ['event-emitter', 'pub-sub', 'observer-pattern', 'memory-leak', 'design-pattern'],
    year: 2025,
  },
  {
    id: 'jtp-018',
    topic: 'javascript-core',
    difficulty: 'mid',
    type: 'code-output',
    question: 'What does this code output? Explain the closure and loop behavior.',
    code: `for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log('var:', i), 0);
}

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log('let:', j), 0);
}

const funcs = [];
for (var k = 0; k < 3; k++) {
  funcs.push(((k) => () => console.log('iife:', k))(k));
}
funcs.forEach(fn => fn());`,
    answer: 'iife: 0\niife: 1\niife: 2\nvar: 3\nvar: 3\nvar: 3\nlet: 0\nlet: 1\nlet: 2',
    explanation:
      'Three patterns demonstrating closures and scoping. (1) var+setTimeout: var is function-scoped, so all three callbacks share the same i, which is 3 after the loop ends. (2) let+setTimeout: let is block-scoped, creating a new j binding per iteration, so each callback captures its own value. (3) IIFE: the immediately-invoked function captures k by value at each iteration, producing 0, 1, 2. The IIFEs execute their returned functions synchronously via forEach, so they print before the setTimeout callbacks. This is a classic interview question that tests var vs. let scoping and the microtask/macrotask queue.',
    tags: ['closures', 'var-vs-let', 'setTimeout', 'IIFE', 'scoping'],
    year: 2025,
  },
  {
    id: 'jtp-019',
    topic: 'javascript-core',
    difficulty: 'mid',
    type: 'mcq',
    question:
      'You need to copy an array of objects so that modifying the copy does not affect the original. Which approach works correctly for a one-level deep array of objects?',
    options: [
      'const copy = original — both point to the same array',
      'const copy = [...original] — creates a new array but objects inside are still shared references',
      'const copy = original.map(obj => ({ ...obj })) — creates a new array with shallow copies of each object',
      'Both B and C create fully independent deep copies',
    ],
    answer: 2,
    explanation:
      'Option A is just a reference assignment — no copy at all. Option B (spread) creates a new array, but the objects inside are the same references. Mutating copy[0].name would also change original[0].name. Option C uses map + object spread to create a new array AND new shallow copies of each object — modifying copy[0].name will NOT affect original[0].name. However, if objects have nested objects, those deeper levels are still shared. For true deep cloning, use structuredClone() or a recursive clone function.',
    tags: ['shallow-copy', 'deep-copy', 'spread', 'reference', 'array-methods'],
    year: 2025,
  },
  {
    id: 'jtp-020',
    topic: 'javascript-core',
    difficulty: 'senior',
    type: 'code-write',
    question:
      'Implement a proxy-based reactive system (simplified Vue 3 reactivity). track() and trigger() should auto-detect dependencies and re-run effects when data changes.',
    answer: `let activeEffect = null;
const targetMap = new WeakMap();

function reactive(target) {
  return new Proxy(target, {
    get(obj, key, receiver) {
      track(obj, key);
      const result = Reflect.get(obj, key, receiver);
      if (typeof result === 'object' && result !== null) {
        return reactive(result);
      }
      return result;
    },
    set(obj, key, value, receiver) {
      const oldValue = obj[key];
      const result = Reflect.set(obj, key, value, receiver);
      if (oldValue !== value) {
        trigger(obj, key);
      }
      return result;
    },
  });
}

function track(target, key) {
  if (!activeEffect) return;
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    depsMap = new Map();
    targetMap.set(target, depsMap);
  }
  let deps = depsMap.get(key);
  if (!deps) {
    deps = new Set();
    depsMap.set(key, deps);
  }
  deps.add(activeEffect);
}

function trigger(target, key) {
  const depsMap = targetMap.get(target);
  if (!depsMap) return;
  const deps = depsMap.get(key);
  if (deps) {
    deps.forEach((effect) => effect());
  }
}

function watchEffect(fn) {
  activeEffect = fn;
  fn();
  activeEffect = null;
}`,
    explanation:
      'This is the core of Vue 3 reactivity. When watchEffect(fn) runs, it sets activeEffect and executes fn. During execution, any property access on a reactive proxy triggers the get trap, which calls track() to record that this effect depends on that property. When a property is later set, trigger() re-runs all effects that depend on that key. The WeakMap(target -> Map(key -> Set(effects))) structure allows garbage collection when targets are no longer referenced. Nested objects are lazily wrapped in reactive() on access. This dependency tracking is automatic — no need to declare dependencies like React hooks.',
    tags: ['proxy', 'reactivity', 'vue', 'observer', 'WeakMap', 'dependency-tracking'],
    year: 2025,
  },

  // ═══════════════════════════════════════════════════
  // TYPESCRIPT — 15 questions (jtp-021 → jtp-035)
  // ═══════════════════════════════════════════════════

  {
    id: 'jtp-021',
    topic: 'typescript',
    difficulty: 'senior',
    type: 'system-design',
    question:
      'Your backend returns API responses in different shapes depending on success/failure, and the frontend code uses "any" everywhere causing runtime crashes. Design a type-safe API layer with proper response typing, error narrowing, and a fetch wrapper.',
    answer: `// Type-safe API response types
type ApiResponse<T> =
  | { success: true; data: T; status: number }
  | { success: false; error: { code: string; message: string; details?: unknown }; status: number };

// API endpoint registry — maps routes to their response types
interface ApiEndpoints {
  '/users/:id': { params: { id: string }; response: User };
  '/users': { params: never; response: User[] };
  '/orders/:id': { params: { id: string }; response: Order };
}

// Type-safe fetch wrapper
async function apiFetch<T>(url: string, init?: RequestInit): Promise<ApiResponse<T>> {
  try {
    const res = await fetch(url, {
      ...init,
      headers: { 'Content-Type': 'application/json', ...init?.headers },
    });
    const body = await res.json();

    if (!res.ok) {
      return {
        success: false,
        error: {
          code: body.code ?? 'UNKNOWN',
          message: body.message ?? res.statusText,
          details: body.details,
        },
        status: res.status,
      };
    }

    return { success: true, data: body as T, status: res.status };
  } catch (err) {
    return {
      success: false,
      error: {
        code: 'NETWORK_ERROR',
        message: err instanceof Error ? err.message : 'Unknown error',
      },
      status: 0,
    };
  }
}

// Usage with narrowing
async function loadUser(id: string) {
  const result = await apiFetch<User>(\`/api/users/\${id}\`);
  if (!result.success) {
    // TypeScript knows: result.error is defined here
    showError(result.error.message);
    return;
  }
  // TypeScript knows: result.data is User here
  renderProfile(result.data);
}`,
    explanation:
      'The discriminated union ApiResponse<T> forces callers to check success before accessing data or error — TypeScript narrows the type based on the check. The ApiEndpoints interface creates a single source of truth for all routes and their types. The apiFetch wrapper catches both HTTP errors and network errors, normalizing them into the same error shape. This eliminates runtime crashes from unexpected response shapes because: (1) You cannot access .data without checking success, (2) Error codes are typed strings not arbitrary values, (3) Network failures are caught and normalized. Production enhancements would include request interceptors, token refresh, and response validation with zod.',
    tags: ['api-layer', 'discriminated-union', 'type-narrowing', 'fetch-wrapper', 'type-safety'],
    year: 2025,
  },
  {
    id: 'jtp-022',
    topic: 'typescript',
    difficulty: 'senior',
    type: 'debug',
    question:
      'This TypeScript code compiles without errors but crashes at runtime. Find the type safety gap and fix it.',
    code: `interface UserFromAPI {
  id: number;
  name: string;
  role: 'admin' | 'user';
  metadata: Record<string, string>;
}

async function getUser(id: number): Promise<UserFromAPI> {
  const response = await fetch(\`/api/users/\${id}\`);
  const data = await response.json(); // Returns 'any'
  return data; // No validation — trusts the API blindly
}

async function renderDashboard() {
  const user = await getUser(42);

  // Runtime crash: API returned { id: "42", name: null, role: "superadmin" }
  // - user.name.toUpperCase() throws: Cannot read properties of null
  // - user.role check never matches 'admin' | 'user'
  // - user.metadata is undefined, not an empty object

  console.log(user.name.toUpperCase());
  console.log(user.metadata['theme']);
}`,
    answer: `import { z } from 'zod';

const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  role: z.enum(['admin', 'user']),
  metadata: z.record(z.string()).default({}),
});

type UserFromAPI = z.infer<typeof UserSchema>;

async function getUser(id: number): Promise<UserFromAPI> {
  const response = await fetch(\`/api/users/\${id}\`);
  if (!response.ok) {
    throw new Error(\`HTTP \${response.status}: Failed to fetch user \${id}\`);
  }
  const data = await response.json();
  return UserSchema.parse(data); // Throws ZodError if shape doesn't match
}

async function renderDashboard() {
  try {
    const user = await getUser(42);
    // Now guaranteed: name is string, role is 'admin'|'user', metadata is Record
    console.log(user.name.toUpperCase());
    console.log(user.metadata['theme'] ?? 'default');
  } catch (err) {
    if (err instanceof z.ZodError) {
      console.error('API response validation failed:', err.issues);
    }
  }
}`,
    explanation:
      'The root cause is that response.json() returns Promise<any>, which bypasses TypeScript type checking entirely. Casting the response to UserFromAPI provides zero runtime safety — TypeScript types are erased at compile time. The fix introduces runtime validation using Zod (or alternatives like io-ts, valibot, superstruct). Zod.parse() throws if the actual data does not match the schema, catching bugs at the API boundary rather than deep in rendering logic. z.infer derives the TypeScript type from the schema, keeping the type and validator in sync. This pattern is called "parsing, not validation" — you transform unknown data into a known shape.',
    tags: ['runtime-validation', 'zod', 'type-safety-gap', 'api-boundary', 'any-escape-hatch'],
    year: 2025,
  },
  {
    id: 'jtp-023',
    topic: 'typescript',
    difficulty: 'senior',
    type: 'code-write',
    question:
      'Implement a simplified type-safe form validation schema (like Zod). Support string, number, object, optional, and provide type inference from the schema.',
    answer: `// Schema types
type Infer<T> = T extends SString ? string
  : T extends SNumber ? number
  : T extends SOptional<infer U> ? Infer<U> | undefined
  : T extends SObject<infer Shape> ? { [K in keyof Shape]: Infer<Shape[K]> }
  : never;

class SString {
  parse(input: unknown): string {
    if (typeof input !== 'string') throw new Error(\`Expected string, got \${typeof input}\`);
    return input;
  }
}

class SNumber {
  parse(input: unknown): number {
    if (typeof input !== 'number' || Number.isNaN(input))
      throw new Error(\`Expected number, got \${typeof input}\`);
    return input;
  }
}

class SOptional<T extends { parse(input: unknown): any }> {
  constructor(private inner: T) {}
  parse(input: unknown): ReturnType<T['parse']> | undefined {
    if (input === undefined || input === null) return undefined;
    return this.inner.parse(input);
  }
}

class SObject<Shape extends Record<string, { parse(input: unknown): any }>> {
  constructor(private shape: Shape) {}
  parse(input: unknown): { [K in keyof Shape]: ReturnType<Shape[K]['parse']> } {
    if (typeof input !== 'object' || input === null)
      throw new Error(\`Expected object, got \${typeof input}\`);
    const result = {} as any;
    for (const [key, schema] of Object.entries(this.shape)) {
      result[key] = schema.parse((input as any)[key]);
    }
    return result;
  }
}

// Builder API
const s = {
  string: () => new SString(),
  number: () => new SNumber(),
  optional: <T extends { parse(input: unknown): any }>(inner: T) => new SOptional(inner),
  object: <Shape extends Record<string, { parse(input: unknown): any }>>(shape: Shape) =>
    new SObject(shape),
};

// Usage:
// const UserSchema = s.object({
//   name: s.string(),
//   age: s.number(),
//   bio: s.optional(s.string()),
// });
// type User = Infer<typeof UserSchema>;
// => { name: string; age: number; bio: string | undefined }`,
    explanation:
      'This implements the core pattern behind Zod: each schema class has a parse() method that validates and returns typed data. The Infer utility type recursively walks the schema to extract the TypeScript type. SObject iterates over the shape and parses each key. SOptional wraps another schema and allows undefined. The builder API (s.string(), s.object()) provides a clean DSL. Key TypeScript features used: conditional types for Infer, infer keyword for extracting generic parameters, ReturnType for deriving parse output types. Real Zod adds chaining (.min(), .max()), custom error messages, and transform support.',
    tags: ['schema-validation', 'type-inference', 'conditional-types', 'zod-pattern', 'generics'],
    year: 2025,
  },
  {
    id: 'jtp-024',
    topic: 'typescript',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'Create a DeepPartial<T> utility type that makes all nested properties optional, including arrays of objects, Maps, and Sets.',
    answer: `type DeepPartial<T> = T extends Map<infer K, infer V>
  ? Map<K, DeepPartial<V>>
  : T extends Set<infer U>
    ? Set<DeepPartial<U>>
    : T extends Array<infer U>
      ? Array<DeepPartial<U>>
      : T extends object
        ? { [P in keyof T]?: DeepPartial<T[P]> }
        : T;

// Test:
interface Config {
  database: {
    host: string;
    port: number;
    replicas: { url: string; priority: number }[];
  };
  cache: Map<string, { ttl: number; strategy: string }>;
  features: Set<{ name: string; enabled: boolean }>;
}

type PartialConfig = DeepPartial<Config>;
// Result:
// {
//   database?: {
//     host?: string;
//     port?: number;
//     replicas?: { url?: string; priority?: number }[];
//   };
//   cache?: Map<string, { ttl?: number; strategy?: string }>;
//   features?: Set<{ name?: string; enabled?: boolean }>;
// }`,
    explanation:
      'DeepPartial recursively applies Partial to all nested levels. The conditional type chain handles special cases in order: Map and Set preserve their container type while making the value type deeply partial. Arrays become arrays of deeply partial elements. Plain objects get each property marked optional (?) with the value recursively processed. Primitive types (string, number, etc.) fall through to the final : T branch unchanged. The ordering matters — arrays must be checked before generic objects since arrays are also objects. This is commonly used for config merging, patch/update operations, and form state where only changed fields are provided.',
    tags: ['DeepPartial', 'utility-types', 'conditional-types', 'recursive-types', 'generics'],
    year: 2025,
  },
  {
    id: 'jtp-025',
    topic: 'typescript',
    difficulty: 'senior',
    type: 'code-write',
    question:
      'Create a generic type-safe Table component type. Column definitions must reference keys from the data type, and the render function must receive the correct value type for that column.',
    answer: `type ColumnDef<T, K extends keyof T = keyof T> = K extends keyof T
  ? {
      key: K;
      header: string;
      width?: number;
      render?: (value: T[K], row: T, index: number) => string;
      sortable?: boolean;
    }
  : never;

// Helper to create columns with full type inference
function defineColumns<T>() {
  return <K extends keyof T>(columns: ColumnDef<T, K>[]) => columns;
}

// Usage:
interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
  tags: string[];
}

const createProductColumns = defineColumns<Product>();

const columns = createProductColumns([
  {
    key: 'name',
    header: 'Product Name',
    render: (value) => value.toUpperCase(), // value inferred as string
  },
  {
    key: 'price',
    header: 'Price',
    render: (value) => \`$\${value.toFixed(2)}\`, // value inferred as number
  },
  {
    key: 'inStock',
    header: 'Available',
    render: (value) => (value ? 'Yes' : 'No'), // value inferred as boolean
  },
  // { key: 'invalid', header: 'X' } // Error: 'invalid' is not in keyof Product
]);

interface TableProps<T> {
  data: T[];
  columns: ColumnDef<T, keyof T>[];
  onRowClick?: (row: T, index: number) => void;
  sortBy?: keyof T;
  sortOrder?: 'asc' | 'desc';
}`,
    explanation:
      'The key insight is using a distributive conditional type: ColumnDef<T, K> distributes over the union of keys so that each column definition is independently typed. When key is "price", the render function receives number as the value parameter. The defineColumns curried helper splits T (provided explicitly) from K (inferred from usage). Without this pattern, TypeScript would widen the render value to T[keyof T] (a union of all value types), losing the per-column type narrowing. This pattern is used by TanStack Table, AG Grid, and similar data table libraries.',
    tags: ['generics', 'distributive-conditional', 'table-component', 'type-inference', 'columns'],
    year: 2025,
  },
  {
    id: 'jtp-026',
    topic: 'typescript',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'Implement exhaustive error handling using discriminated unions for API responses. The code must fail to compile if a new error type is added but not handled.',
    answer: `// API response discriminated union
type ApiResult<T> =
  | { type: 'success'; data: T }
  | { type: 'not_found'; resource: string; id: string }
  | { type: 'validation_error'; fields: { field: string; message: string }[] }
  | { type: 'unauthorized'; reason: 'expired' | 'invalid' | 'missing' }
  | { type: 'rate_limited'; retryAfter: number }
  | { type: 'server_error'; traceId: string };

// Exhaustiveness check helper
function assertNever(value: never): never {
  throw new Error(\`Unhandled case: \${JSON.stringify(value)}\`);
}

// Handler — MUST handle every case or TypeScript errors
function handleApiResult<T>(result: ApiResult<T>): string {
  switch (result.type) {
    case 'success':
      return \`Loaded: \${JSON.stringify(result.data)}\`;
    case 'not_found':
      return \`\${result.resource} with id \${result.id} not found\`;
    case 'validation_error':
      return result.fields.map((f) => \`\${f.field}: \${f.message}\`).join(', ');
    case 'unauthorized':
      if (result.reason === 'expired') return 'Session expired, please log in again';
      return 'Authentication required';
    case 'rate_limited':
      return \`Too many requests. Retry in \${result.retryAfter}s\`;
    case 'server_error':
      return \`Server error (trace: \${result.traceId}). Please try again.\`;
    default:
      return assertNever(result);
  }
}`,
    explanation:
      'Discriminated unions use a shared literal field (type) to let TypeScript narrow the type in each switch branch. The assertNever function accepts only the never type — if all cases are handled, result narrows to never in the default branch. If a new error type is added to ApiResult (e.g., { type: "timeout" }), the default branch receives that type instead of never, causing a compile error. This forces developers to handle new cases at every call site. Each branch has full type safety — result.fields is only accessible in the validation_error branch, result.retryAfter only in rate_limited, etc.',
    tags: ['discriminated-union', 'exhaustive-check', 'assertNever', 'error-handling', 'type-narrowing'],
    year: 2025,
  },
  {
    id: 'jtp-027',
    topic: 'typescript',
    difficulty: 'mid',
    type: 'debug',
    question:
      'Convert this JavaScript module to TypeScript without using "any". The code processes CSV data and the challenge is typing the dynamic column structure.',
    code: `// users.js — Currently untyped
function parseCSV(csvString, hasHeader = true) {
  const lines = csvString.trim().split('\\n');
  const headers = hasHeader
    ? lines[0].split(',').map(h => h.trim())
    : lines[0].split(',').map((_, i) => \`col_\${i}\`);

  const dataLines = hasHeader ? lines.slice(1) : lines;

  return dataLines.map(line => {
    const values = line.split(',').map(v => v.trim());
    const row = {};
    headers.forEach((header, i) => {
      row[header] = values[i] ?? '';
    });
    return row;
  });
}

function filterRows(rows, column, value) {
  return rows.filter(row => row[column] === value);
}

function sumColumn(rows, column) {
  return rows.reduce((sum, row) => sum + Number(row[column] || 0), 0);
}`,
    answer: `type CSVRow = Record<string, string>;

function parseCSV(csvString: string, hasHeader: boolean = true): CSVRow[] {
  const lines = csvString.trim().split('\\n');
  const headers: string[] = hasHeader
    ? lines[0].split(',').map((h) => h.trim())
    : lines[0].split(',').map((_, i) => \`col_\${i}\`);

  const dataLines = hasHeader ? lines.slice(1) : lines;

  return dataLines.map((line) => {
    const values = line.split(',').map((v) => v.trim());
    const row: CSVRow = {};
    headers.forEach((header, i) => {
      row[header] = values[i] ?? '';
    });
    return row;
  });
}

function filterRows(rows: CSVRow[], column: string, value: string): CSVRow[] {
  return rows.filter((row) => row[column] === value);
}

function sumColumn(rows: CSVRow[], column: string): number {
  return rows.reduce((sum, row) => sum + Number(row[column] || 0), 0);
}`,
    explanation:
      'The key decision is typing CSVRow as Record<string, string> instead of any. Since CSV columns are dynamic (determined at parse time, not compile time), we cannot know exact property names. Record<string, string> says "any string key maps to a string value" which matches CSV semantics — all values start as strings. This is NOT the same as "any": accessing row.nonExistent returns string|undefined (with noUncheckedIndexedAccess), the value is always string (not number or boolean), and you cannot call methods that do not exist on string. For stricter typing, you could use a generic: parseCSV<T extends string>(csv, columns: T[]): Record<T, string>[] to lock column names at call sites.',
    tags: ['js-to-ts', 'Record', 'dynamic-keys', 'no-any', 'migration'],
    year: 2025,
  },
  {
    id: 'jtp-028',
    topic: 'typescript',
    difficulty: 'lead',
    type: 'mcq',
    question:
      'You have a function that accepts either a string or number and returns the same type. Which signature provides the best type safety?',
    options: [
      'function process(input: string | number): string | number',
      'function process<T extends string | number>(input: T): T',
      'function process(input: string): string; function process(input: number): number;',
      'Both B and C preserve the input type, but C (overloads) provides better error messages',
    ],
    answer: 3,
    explanation:
      'Option A is too loose — process("hello") returns string | number, requiring a type guard to use the result. Option B (generic) preserves the literal type: process("hello") returns "hello", process(42) returns 42. This is actually too narrow in many cases — you often want string back, not the literal. Option C (overloads) maps string -> string and number -> number precisely, with clear error messages if you pass a boolean. Option D is correct: both B and C preserve the input/output type relationship, but overloads produce clearer diagnostics (e.g., "No overload matches this call") and do not over-narrow to literal types. In practice, overloads are preferred when the mapping is simple and enumeratable.',
    tags: ['overloads', 'generics', 'type-narrowing', 'function-signatures'],
    year: 2025,
  },
  {
    id: 'jtp-029',
    topic: 'typescript',
    difficulty: 'lead',
    type: 'code-write',
    question:
      'Create a type-safe event bus where event names are mapped to their payload types. Emitting an event with the wrong payload should be a compile error.',
    answer: `interface EventMap {
  'user:login': { userId: string; timestamp: number };
  'user:logout': { userId: string };
  'cart:add': { productId: string; quantity: number };
  'cart:clear': undefined;
  'notification:show': { message: string; type: 'info' | 'error' | 'success' };
}

class TypedEventBus<Events extends Record<string, unknown>> {
  private listeners = new Map<keyof Events, Set<Function>>();

  on<E extends keyof Events>(
    event: E,
    handler: Events[E] extends undefined ? () => void : (payload: Events[E]) => void
  ): () => void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    const handlers = this.listeners.get(event)!;
    handlers.add(handler);
    return () => handlers.delete(handler);
  }

  emit<E extends keyof Events>(
    ...args: Events[E] extends undefined ? [event: E] : [event: E, payload: Events[E]]
  ): void {
    const [event, payload] = args;
    this.listeners.get(event)?.forEach((handler) => (handler as Function)(payload));
  }
}

// Usage:
const bus = new TypedEventBus<EventMap>();
bus.on('user:login', (payload) => {
  console.log(payload.userId); // payload typed as { userId: string; timestamp: number }
});
bus.emit('user:login', { userId: '123', timestamp: Date.now() }); // OK
// bus.emit('user:login', { userId: 123 }); // Error: number not assignable to string
// bus.emit('cart:clear', { anything: true }); // Error: expected 1 argument, got 2`,
    explanation:
      'The EventMap interface serves as a single source of truth for all events and their payloads. The generic class TypedEventBus<Events> uses keyof Events to constrain event names and Events[E] to look up the payload type for each event. The conditional tuple type in emit ensures events with undefined payload take no argument, while events with a payload require it. The handler type in on() similarly adjusts: void-payload events get () => void, others get (payload: T) => void. This pattern catches mismatched event names and payload types at compile time rather than runtime.',
    tags: ['typed-events', 'event-bus', 'generics', 'conditional-types', 'mapped-types'],
    year: 2025,
  },
  {
    id: 'jtp-030',
    topic: 'typescript',
    difficulty: 'junior',
    type: 'debug',
    question:
      'This TypeScript React component has type errors. Fix all of them without using "any" or @ts-ignore.',
    code: `interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function TodoApp() {
  const [todos, setTodos] = useState([]);  // Error: implicitly any[]
  const [input, setInput] = useState();     // Error: implicitly undefined

  function addTodo() {
    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };
    setTodos([...todos, newTodo]);  // Error: not assignable
  }

  function toggleTodo(id) {  // Error: id implicitly any
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  }

  function removeTodo(id) {  // Error: id implicitly any
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return null; // simplified
}`,
    answer: `interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>('');

  function addTodo() {
    if (!input.trim()) return;
    const newTodo: Todo = {
      id: Date.now(),
      text: input,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  }

  function toggleTodo(id: number) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function removeTodo(id: number) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  return null;
}`,
    explanation:
      'Four common TypeScript-React issues: (1) useState([]) infers never[] since TypeScript cannot determine the array element type from an empty array. Fix: provide the generic useState<Todo[]>([]). (2) useState() with no argument infers undefined. Fix: useState<string>("") with an initial value. (3) Function parameters in strict mode require type annotations — id: number matches the Todo.id type. (4) Bonus fix: using the callback form of setTodos (prev => ...) avoids stale closure issues and is a React best practice. These are the most common TypeScript errors in React codebases.',
    tags: ['react-typescript', 'useState', 'generics', 'strict-mode', 'type-annotations'],
    year: 2025,
  },
  {
    id: 'jtp-031',
    topic: 'typescript',
    difficulty: 'senior',
    type: 'code-write',
    question:
      'Create a type-safe builder pattern for constructing SQL-like queries. The builder should prevent calling .select() after .where(), enforce that .from() is called before .where(), and infer the result type from selected columns.',
    answer: `interface DB {
  users: { id: number; name: string; email: string; age: number };
  orders: { id: number; userId: number; total: number; status: string };
}

type QueryState = {
  hasFrom: boolean;
  hasSelect: boolean;
  hasWhere: boolean;
};

class QueryBuilder<
  Table extends keyof DB,
  Selected extends keyof DB[Table],
  State extends QueryState
> {
  private table?: Table;
  private columns: Selected[] = [];
  private conditions: string[] = [];

  static create(): QueryBuilder<never, never, { hasFrom: false; hasSelect: false; hasWhere: false }> {
    return new QueryBuilder();
  }

  from<T extends keyof DB>(
    this: QueryBuilder<never, never, { hasFrom: false; hasSelect: false; hasWhere: false }>,
    table: T
  ): QueryBuilder<T, never, { hasFrom: true; hasSelect: false; hasWhere: false }> {
    const qb = this as any;
    qb.table = table;
    return qb;
  }

  select<Cols extends keyof DB[Table]>(
    this: QueryBuilder<Table, Selected, { hasFrom: true; hasSelect: false; hasWhere: false }>,
    ...columns: Cols[]
  ): QueryBuilder<Table, Cols, { hasFrom: true; hasSelect: true; hasWhere: false }> {
    const qb = this as any;
    qb.columns = columns;
    return qb;
  }

  where(
    this: QueryBuilder<Table, Selected, { hasFrom: true; hasSelect: true; hasWhere: false }>,
    column: keyof DB[Table],
    op: '=' | '>' | '<' | '!=',
    value: DB[Table][keyof DB[Table]]
  ): QueryBuilder<Table, Selected, { hasFrom: true; hasSelect: true; hasWhere: true }> {
    const qb = this as any;
    qb.conditions.push(\`\${String(column)} \${op} \${JSON.stringify(value)}\`);
    return qb;
  }

  execute(): Pick<DB[Table], Selected>[] {
    console.log(\`SELECT \${String(this.columns)} FROM \${String(this.table)} WHERE \${this.conditions.join(' AND ')}\`);
    return []; // placeholder
  }
}

// Usage:
const results = QueryBuilder.create()
  .from('users')
  .select('name', 'email')
  .where('age', '>', 18)
  .execute();
// Type: Pick<DB['users'], 'name' | 'email'>[] = { name: string; email: string }[]

// These would fail:
// QueryBuilder.create().select('name')  // Error: must call from() first
// QueryBuilder.create().from('users').where(...)  // Error: must call select() first`,
    explanation:
      'The builder uses phantom type state (QueryState) to track which methods have been called. Each method has a "this" parameter that restricts when it can be called and returns a new type with updated state. from() requires hasFrom: false and returns hasFrom: true. select() requires hasFrom: true, hasSelect: false. where() requires hasSelect: true. This creates a compile-time state machine. The Selected generic parameter accumulates which columns are picked, and execute() returns Pick<DB[Table], Selected>[] so the result type exactly matches the selected columns. This pattern is used by Kysely, Drizzle, and Prisma for type-safe database queries.',
    tags: ['builder-pattern', 'phantom-types', 'state-machine', 'query-builder', 'advanced-generics'],
    year: 2025,
  },
  {
    id: 'jtp-032',
    topic: 'typescript',
    difficulty: 'mid',
    type: 'code-output',
    question:
      'What TypeScript errors will the compiler report for this code? List each error with its line number.',
    code: `// Line 1
type Status = 'active' | 'inactive' | 'pending';

// Line 3
function processStatus(status: Status) {
  // Line 5
  const upper: string = status.toUpperCase();

  // Line 7
  if (status === 'deleted') {
    console.log('deleted');
  }

  // Line 11
  const arr: number[] = [1, 2, 3];
  const first: string = arr[0];

  // Line 14
  const obj: { name: string } = { name: 'test', age: 25 };

  // Line 16
  const fn: (x: number) => void = (x: number, y: number) => {};
}`,
    answer: 'Line 7: Error — comparison is always false because \'"deleted"\' and \'Status\' have no overlap.\nLine 13: Error — Type \'number\' is not assignable to type \'string\'.\nLine 14: Error — Object literal may only specify known properties, and \'age\' does not exist in type \'{ name: string }\'.',
    explanation:
      'Line 5 is OK: toUpperCase() returns string, and Status (a string literal union) is assignable to string. Line 7: TypeScript detects that "deleted" is not in the Status union and flags the comparison as always false. Line 13: arr[0] is number (the array element type), which cannot be assigned to string. Line 14: Excess property checking catches "age" which is not in the target type. Line 16 is actually OK: a function taking fewer parameters can be assigned to a type expecting more — (x: number) => void is assignable to (x: number, y: number) => void because the extra y is simply ignored (callback compatibility).',
    tags: ['type-errors', 'excess-property-check', 'type-narrowing', 'function-compatibility'],
    year: 2025,
  },
  {
    id: 'jtp-033',
    topic: 'typescript',
    difficulty: 'senior',
    type: 'code-write',
    question:
      'Implement a type-safe middleware pipeline (like Express/Koa) where each middleware can extend the context type and downstream middleware sees the extended type.',
    answer: `// Base context
interface BaseContext {
  request: { url: string; method: string; headers: Record<string, string> };
  response: { status: number; body: unknown };
}

// Middleware type: takes context and next function, can extend context
type Middleware<TIn, TOut extends TIn = TIn> = (
  ctx: TIn,
  next: (ctx: TOut) => Promise<void>
) => Promise<void>;

// Pipeline builder with type accumulation
class Pipeline<Ctx extends BaseContext> {
  private middlewares: Function[] = [];

  use<Extended extends Ctx>(
    middleware: Middleware<Ctx, Extended>
  ): Pipeline<Extended> {
    this.middlewares.push(middleware);
    return this as unknown as Pipeline<Extended>;
  }

  async execute(initialCtx: BaseContext): Promise<Ctx> {
    let index = 0;
    const ctx = initialCtx as Ctx;

    const dispatch = async (currentCtx: any): Promise<void> => {
      if (index >= this.middlewares.length) return;
      const middleware = this.middlewares[index++];
      await middleware(currentCtx, dispatch);
    };

    await dispatch(ctx);
    return ctx;
  }
}

// Usage:
interface AuthContext extends BaseContext {
  user: { id: string; role: string };
}

interface LoggedContext extends AuthContext {
  requestId: string;
}

const pipeline = new Pipeline<BaseContext>()
  .use<AuthContext>(async (ctx, next) => {
    const token = ctx.request.headers['authorization'];
    const authCtx = ctx as AuthContext;
    authCtx.user = { id: '123', role: 'admin' };
    await next(authCtx);
  })
  .use<LoggedContext>(async (ctx, next) => {
    // ctx.user is available here — typed as AuthContext
    console.log(ctx.user.id);
    const loggedCtx = ctx as LoggedContext;
    loggedCtx.requestId = crypto.randomUUID();
    await next(loggedCtx);
  });

// Final middleware sees LoggedContext with user + requestId`,
    explanation:
      'The Pipeline class accumulates context types through the generic parameter. Each use() call takes a Middleware that maps the current context type to an extended one, and returns Pipeline<Extended>. This means the next middleware in the chain sees the extended context. The key pattern is type accumulation: Pipeline<BaseContext> → Pipeline<AuthContext> → Pipeline<LoggedContext>. Each middleware can only access properties from its input type, and must provide the extended properties before calling next(). This is similar to how tRPC middleware chains accumulate context, and how Express middleware extends req with additional properties (but without type safety in Express).',
    tags: ['middleware', 'pipeline', 'type-accumulation', 'express-pattern', 'advanced-generics'],
    year: 2025,
  },
  {
    id: 'jtp-034',
    topic: 'typescript',
    difficulty: 'junior',
    type: 'mcq',
    question:
      'You have a function that returns different types based on an options parameter. Which TypeScript pattern correctly types this?',
    options: [
      'Return "any" and let the caller cast',
      'Use function overloads mapping each option to its return type',
      'Return a union type and make the caller narrow with type guards',
      'Use a generic with a conditional return type based on the options parameter',
    ],
    answer: 1,
    explanation:
      'While options C and D can work, function overloads (B) provide the clearest API for mapping discrete option values to specific return types. For example: function parse(input: string, format: "json"): object; function parse(input: string, format: "text"): string; — each overload signature explicitly declares the contract. Option A (any) is never acceptable. Option C (union return) forces unnecessary type guards on every call site. Option D (conditional type) works but produces harder-to-read error messages. Overloads are the pragmatic choice for a small, known set of options.',
    tags: ['overloads', 'return-types', 'type-safety', 'function-signatures'],
    year: 2025,
  },
  {
    id: 'jtp-035',
    topic: 'typescript',
    difficulty: 'lead',
    type: 'code-write',
    question:
      'Implement a type-safe state machine for an order lifecycle: draft → submitted → processing → shipped → delivered, with allowed transitions enforced at compile time.',
    answer: `// State definitions
interface OrderStates {
  draft: { items: string[]; notes?: string };
  submitted: { items: string[]; submittedAt: number; orderId: string };
  processing: { orderId: string; assignedTo: string; estimatedShip: number };
  shipped: { orderId: string; trackingNumber: string; carrier: string };
  delivered: { orderId: string; deliveredAt: number; signature?: string };
}

// Allowed transitions
interface TransitionMap {
  draft: 'submitted';
  submitted: 'processing';
  processing: 'shipped';
  shipped: 'delivered';
  delivered: never;
}

type OrderState = keyof OrderStates;

type Order<S extends OrderState = OrderState> = {
  state: S;
  data: OrderStates[S];
  history: { from: OrderState; to: OrderState; at: number }[];
};

// Transition function — only allows valid transitions
function transition<
  From extends OrderState,
  To extends TransitionMap[From]
>(
  order: Order<From>,
  to: To,
  data: OrderStates[To & OrderState]
): Order<To & OrderState> {
  return {
    state: to,
    data,
    history: [
      ...order.history,
      { from: order.state, to: to as OrderState, at: Date.now() },
    ],
  } as Order<To & OrderState>;
}

// Usage:
const draft: Order<'draft'> = {
  state: 'draft',
  data: { items: ['widget-a'] },
  history: [],
};

const submitted = transition(draft, 'submitted', {
  items: ['widget-a'],
  submittedAt: Date.now(),
  orderId: 'ORD-001',
});
// submitted is Order<'submitted'>

// This would fail at compile time:
// transition(draft, 'shipped', { ... });
// Error: 'shipped' is not assignable to 'submitted' (TransitionMap['draft'])

// transition(submitted, 'delivered', { ... });
// Error: 'delivered' is not assignable to 'processing' (TransitionMap['submitted'])`,
    explanation:
      'The state machine is encoded entirely in the type system. TransitionMap defines which states can follow which — it is a compile-time adjacency list. The transition function uses TransitionMap[From] to constrain the "to" parameter: from "draft" you can only go to "submitted". The return type is Order<To> so subsequent transitions are also constrained. Each state has its own data shape via OrderStates, preventing access to "trackingNumber" in the draft state, for example. The history array provides an audit trail. This pattern is used in XState-style libraries and financial systems where invalid state transitions must be impossible.',
    tags: ['state-machine', 'type-safety', 'transitions', 'mapped-types', 'compile-time-checks'],
    year: 2025,
  },

  // ═══════════════════════════════════════════════════
  // CODING-CHALLENGES — 5 questions (jtp-036 → jtp-040)
  // ═══════════════════════════════════════════════════

  {
    id: 'jtp-036',
    topic: 'coding-challenges',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'Implement a function that groups an array of objects by a key, supporting nested key paths (e.g., "address.city"). Return a Map for ordered iteration.',
    answer: `function groupBy<T>(items: T[], keyPath: string): Map<string, T[]> {
  const result = new Map<string, T[]>();

  const getNestedValue = (obj: any, path: string): string => {
    return path.split('.').reduce((acc, key) => acc?.[key], obj) ?? 'undefined';
  };

  for (const item of items) {
    const key = String(getNestedValue(item, keyPath));
    if (!result.has(key)) {
      result.set(key, []);
    }
    result.get(key)!.push(item);
  }

  return result;
}

// Usage:
// const users = [
//   { name: 'Alice', address: { city: 'NYC' } },
//   { name: 'Bob', address: { city: 'LA' } },
//   { name: 'Charlie', address: { city: 'NYC' } },
// ];
// groupBy(users, 'address.city')
// => Map { 'NYC' => [Alice, Charlie], 'LA' => [Bob] }`,
    explanation:
      'The nested key path is resolved by splitting on "." and reducing through the object chain. Using a Map instead of a plain object preserves insertion order and avoids prototype pollution issues. Optional chaining (?.) in the reduce handles cases where an intermediate key does not exist without throwing. The nullish coalescing (??) provides a fallback key for undefined values. This is similar to lodash.groupBy but with nested path support. The native Object.groupBy() (ES2024) does not support nested paths, making this utility still valuable.',
    tags: ['groupBy', 'nested-keys', 'Map', 'utility-function', 'lodash-alternative'],
    year: 2025,
  },
  {
    id: 'jtp-037',
    topic: 'coding-challenges',
    difficulty: 'lead',
    type: 'code-write',
    question:
      'Implement a function that diffs two deeply nested objects and returns a list of changes (added, removed, modified) with their paths. Used for audit logs.',
    answer: `type Change =
  | { type: 'added'; path: string; value: unknown }
  | { type: 'removed'; path: string; value: unknown }
  | { type: 'modified'; path: string; oldValue: unknown; newValue: unknown };

function deepDiff(oldObj: any, newObj: any, basePath: string = ''): Change[] {
  const changes: Change[] = [];

  const allKeys = new Set([
    ...Object.keys(oldObj ?? {}),
    ...Object.keys(newObj ?? {}),
  ]);

  for (const key of allKeys) {
    const path = basePath ? \`\${basePath}.\${key}\` : key;
    const oldVal = oldObj?.[key];
    const newVal = newObj?.[key];

    if (!(key in (oldObj ?? {}))) {
      changes.push({ type: 'added', path, value: newVal });
    } else if (!(key in (newObj ?? {}))) {
      changes.push({ type: 'removed', path, value: oldVal });
    } else if (
      typeof oldVal === 'object' && oldVal !== null &&
      typeof newVal === 'object' && newVal !== null &&
      !Array.isArray(oldVal) && !Array.isArray(newVal)
    ) {
      changes.push(...deepDiff(oldVal, newVal, path));
    } else if (!Object.is(oldVal, newVal)) {
      changes.push({ type: 'modified', path, oldValue: oldVal, newValue: newVal });
    }
  }

  return changes;
}

// Usage:
// deepDiff(
//   { name: 'Alice', address: { city: 'NYC', zip: '10001' }, age: 30 },
//   { name: 'Alice', address: { city: 'LA' }, age: 31, role: 'admin' }
// )
// => [
//   { type: 'modified', path: 'address.city', oldValue: 'NYC', newValue: 'LA' },
//   { type: 'removed', path: 'address.zip', value: '10001' },
//   { type: 'modified', path: 'age', oldValue: 30, newValue: 31 },
//   { type: 'added', path: 'role', value: 'admin' },
// ]`,
    explanation:
      'The function recursively walks both objects, collecting all unique keys at each level. For each key: if only in newObj, it is "added"; if only in oldObj, it is "removed"; if both are plain objects, recurse deeper; otherwise compare with Object.is (which correctly handles NaN, -0, etc.) and report "modified" if different. Arrays are compared by value (not recursed) since array element tracking requires a different algorithm. The path string is built by concatenating keys with dots, producing human-readable paths like "address.city". This pattern is used in audit logging, form dirty checking, and real-time collaboration conflict detection.',
    tags: ['deep-diff', 'object-comparison', 'audit-log', 'recursion', 'change-detection'],
    year: 2025,
  },
  {
    id: 'jtp-038',
    topic: 'coding-challenges',
    difficulty: 'senior',
    type: 'code-write',
    question:
      'Implement a throttle function that limits execution to at most once per interval, with options for leading and trailing invocation.',
    answer: `function throttle<T extends (...args: any[]) => any>(
  fn: T,
  interval: number,
  { leading = true, trailing = true } = {}
): T & { cancel: () => void } {
  let timerId: ReturnType<typeof setTimeout> | null = null;
  let lastArgs: Parameters<T> | null = null;
  let lastThis: any = null;
  let lastCallTime: number | null = null;

  function invoke() {
    fn.apply(lastThis, lastArgs!);
    lastArgs = null;
    lastThis = null;
    lastCallTime = Date.now();
  }

  function throttled(this: any, ...args: Parameters<T>) {
    lastArgs = args;
    lastThis = this;
    const now = Date.now();
    const elapsed = lastCallTime === null ? interval : now - lastCallTime;

    if (elapsed >= interval) {
      if (leading) {
        invoke();
      } else {
        lastCallTime = now;
      }

      if (trailing) {
        clearTimeout(timerId!);
        timerId = setTimeout(() => {
          if (lastArgs) invoke();
          timerId = null;
        }, interval);
      }
    } else if (trailing && !timerId) {
      timerId = setTimeout(() => {
        invoke();
        timerId = null;
      }, interval - elapsed);
    }
  }

  throttled.cancel = () => {
    if (timerId) clearTimeout(timerId);
    timerId = null;
    lastArgs = null;
    lastThis = null;
    lastCallTime = null;
  };

  return throttled as T & { cancel: () => void };
}`,
    explanation:
      'Throttle ensures a function runs at most once per interval, unlike debounce which waits for silence. Leading invocation fires immediately on the first call, then suppresses for the interval. Trailing invocation schedules a final call after the interval if there were suppressed calls. The elapsed time calculation determines whether to fire immediately or schedule. cancel() clears all pending timers and state. Common use cases: scroll handlers (leading for immediate feedback), resize handlers (trailing for final size), and API rate limiting. The difference from debounce: throttle guarantees regular execution during continuous events, debounce only fires after events stop.',
    tags: ['throttle', 'rate-limiting', 'performance', 'event-handling', 'lodash'],
    year: 2025,
  },
  {
    id: 'jtp-039',
    topic: 'coding-challenges',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'Implement a pipe() function that composes functions left-to-right. Each function takes the output of the previous one. Include TypeScript types for up to 5 functions with type inference.',
    answer: `// Overloads for type inference (up to 5 functions)
function pipe<A, B>(fn1: (a: A) => B): (a: A) => B;
function pipe<A, B, C>(fn1: (a: A) => B, fn2: (b: B) => C): (a: A) => C;
function pipe<A, B, C, D>(fn1: (a: A) => B, fn2: (b: B) => C, fn3: (c: C) => D): (a: A) => D;
function pipe<A, B, C, D, E>(
  fn1: (a: A) => B, fn2: (b: B) => C, fn3: (c: C) => D, fn4: (d: D) => E
): (a: A) => E;
function pipe<A, B, C, D, E, F>(
  fn1: (a: A) => B, fn2: (b: B) => C, fn3: (c: C) => D, fn4: (d: D) => E, fn5: (e: E) => F
): (a: A) => F;
function pipe(...fns: Function[]) {
  return (input: unknown) => fns.reduce((acc, fn) => fn(acc), input);
}

// Usage:
const processUser = pipe(
  (id: number) => fetch(\`/api/users/\${id}\`),       // number → Promise<Response>
  // For sync version:
);

const transform = pipe(
  (s: string) => s.trim(),
  (s: string) => s.toLowerCase(),
  (s: string) => s.split(' '),
  (arr: string[]) => arr.filter(w => w.length > 2),
  (arr: string[]) => arr.join('-'),
);

// transform('  Hello World Foo  ') => 'hello-world-foo'`,
    explanation:
      'pipe() is function composition in left-to-right order (as opposed to compose() which is right-to-left). The implementation is simple — reduce through the functions, passing each result to the next. The complexity is in the TypeScript overloads: each overload declares the exact chain of input/output types, so TypeScript can infer that pipe(string→number, number→boolean) returns (string) => boolean. Without overloads, TypeScript cannot infer the chain. This pattern is used in RxJS (pipe operator), fp-ts, and Ramda. The 5-overload limit is a practical trade-off — more can be added but rarely needed.',
    tags: ['pipe', 'composition', 'functional-programming', 'overloads', 'reduce'],
    year: 2025,
  },
  {
    id: 'jtp-040',
    topic: 'coding-challenges',
    difficulty: 'senior',
    type: 'code-write',
    question:
      'Implement a simple virtual DOM diff algorithm. Given two virtual DOM trees (plain objects), produce a minimal list of patches (create, remove, replace, update-props, reorder-children) to transform the old tree into the new one.',
    answer: `interface VNode {
  type: string;
  props: Record<string, any>;
  children: (VNode | string)[];
}

type Patch =
  | { op: 'replace'; path: number[]; node: VNode | string }
  | { op: 'remove'; path: number[] }
  | { op: 'create'; path: number[]; node: VNode | string }
  | { op: 'update-props'; path: number[]; added: Record<string, any>; removed: string[]; changed: Record<string, any> }
  | { op: 'reorder'; path: number[]; moves: { from: number; to: number }[] };

function diff(
  oldNode: VNode | string | null,
  newNode: VNode | string | null,
  path: number[] = []
): Patch[] {
  const patches: Patch[] = [];

  // Node removed
  if (newNode === null || newNode === undefined) {
    if (oldNode !== null && oldNode !== undefined) {
      patches.push({ op: 'remove', path });
    }
    return patches;
  }

  // Node created
  if (oldNode === null || oldNode === undefined) {
    patches.push({ op: 'create', path, node: newNode });
    return patches;
  }

  // Text node comparison
  if (typeof oldNode === 'string' || typeof newNode === 'string') {
    if (oldNode !== newNode) {
      patches.push({ op: 'replace', path, node: newNode });
    }
    return patches;
  }

  // Different element type — full replace
  if (oldNode.type !== newNode.type) {
    patches.push({ op: 'replace', path, node: newNode });
    return patches;
  }

  // Same type — diff props
  const propPatches = diffProps(oldNode.props, newNode.props, path);
  if (propPatches) patches.push(propPatches);

  // Diff children
  const maxLen = Math.max(oldNode.children.length, newNode.children.length);
  for (let i = 0; i < maxLen; i++) {
    patches.push(
      ...diff(
        oldNode.children[i] ?? null,
        newNode.children[i] ?? null,
        [...path, i]
      )
    );
  }

  return patches;
}

function diffProps(
  oldProps: Record<string, any>,
  newProps: Record<string, any>,
  path: number[]
): Patch | null {
  const added: Record<string, any> = {};
  const removed: string[] = [];
  const changed: Record<string, any> = {};

  for (const key of Object.keys(newProps)) {
    if (!(key in oldProps)) {
      added[key] = newProps[key];
    } else if (oldProps[key] !== newProps[key]) {
      changed[key] = newProps[key];
    }
  }

  for (const key of Object.keys(oldProps)) {
    if (!(key in newProps)) {
      removed.push(key);
    }
  }

  if (Object.keys(added).length || removed.length || Object.keys(changed).length) {
    return { op: 'update-props', path, added, removed, changed };
  }
  return null;
}`,
    explanation:
      'This is a simplified version of the VDOM diffing used by React, Preact, and Vue. The algorithm walks both trees in parallel: (1) If types differ, replace the entire subtree (React does the same — different types mean different components). (2) If types match, diff props to find added/removed/changed attributes. (3) Recursively diff children by index. The path array tracks the position in the tree for the patch applicator. Real-world VDOM diff adds key-based reconciliation for list reordering (React keys), batched updates, and fiber-based interruptible diffing. This O(n) single-pass approach matches React\'s heuristic algorithm that sacrifices theoretical optimality (O(n^3) tree edit distance) for practical performance.',
    tags: ['virtual-dom', 'diff-algorithm', 'reconciliation', 'tree-comparison', 'react-internals'],
    year: 2025,
  },
]
