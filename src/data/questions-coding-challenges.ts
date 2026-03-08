import type { Question } from '../types'

export const codingChallengesQuestions: Question[] = [
  // ─── DEBOUNCE ────────────────────────────────────────────────────────────────
  {
    id: 'cc-001',
    topic: 'coding-challenges',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'Implement a `debounce(fn, delay)` function. The debounced function should delay invoking `fn` until after `delay` milliseconds have elapsed since the last call.',
    answer: `function debounce(fn, delay) {
  let timerId = null
  return function (...args) {
    clearTimeout(timerId)
    timerId = setTimeout(() => {
      fn.apply(this, args)
      timerId = null
    }, delay)
  }
}`,
    explanation:
      'Each call clears the existing timer and sets a new one. `fn` only fires when no further calls arrive within the `delay` window. Using `apply(this, args)` preserves the calling context and passes all arguments correctly. The timer id is nulled after invocation to allow garbage collection.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/setTimeout',
      'https://css-tricks.com/debouncing-throttling-explained-examples/',
    ],
    tags: ['debounce', 'closures', 'timers', 'higher-order-functions'],
    year: 2025,
  },
  {
    id: 'cc-002',
    topic: 'coding-challenges',
    difficulty: 'senior',
    type: 'code-write',
    question:
      'Extend your `debounce` implementation to support `{ leading, trailing }` options. When `leading` is true the function fires on the first call immediately; when `trailing` is true (default) it fires after the delay.',
    answer: `function debounce(fn, delay, { leading = false, trailing = true } = {}) {
  let timerId = null
  let lastArgs = null
  let lastThis = null
  let called = false

  function invoke() {
    fn.apply(lastThis, lastArgs)
    timerId = null
    called = false
  }

  return function (...args) {
    lastArgs = args
    lastThis = this

    const isFirstCall = !timerId

    clearTimeout(timerId)
    timerId = setTimeout(() => {
      if (trailing && (!leading || called)) invoke()
      else {
        timerId = null
        called = false
      }
    }, delay)

    if (leading && isFirstCall) {
      called = true
      fn.apply(this, args)
    } else {
      called = true
    }
  }
}`,
    explanation:
      '`leading` fires immediately on the first call of a burst. `trailing` fires after the delay ends. When both are true, the function fires at start and end of the burst. The `called` flag tracks whether there was any call during the cool-down to decide whether trailing should fire.',
    references: ['https://lodash.com/docs/#debounce'],
    tags: ['debounce', 'leading', 'trailing', 'options', 'advanced'],
    year: 2025,
  },
  {
    id: 'cc-003',
    topic: 'coding-challenges',
    difficulty: 'mid',
    type: 'debug',
    question: 'The following debounce implementation has a bug. Find and fix it.',
    code: `function debounce(fn, delay) {
  let timerId = null
  return function (...args) {
    clearTimeout(timerId)
    setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}`,
    answer: `// Bug: the return value of setTimeout is not stored, so clearTimeout on the
// next call has no effect — the function fires on every call after the delay.
// Fix: assign setTimeout's return value to timerId.

function debounce(fn, delay) {
  let timerId = null
  return function (...args) {
    clearTimeout(timerId)
    timerId = setTimeout(() => {   // <-- store the timer id
      fn.apply(this, args)
    }, delay)
  }
}`,
    explanation:
      '`clearTimeout(timerId)` does nothing useful if `timerId` is never updated. Without storing the new timer id, every scheduled timeout fires independently, completely defeating debouncing.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/API/clearTimeout'],
    tags: ['debounce', 'debug', 'timers'],
    year: 2025,
  },

  // ─── THROTTLE ────────────────────────────────────────────────────────────────
  {
    id: 'cc-004',
    topic: 'coding-challenges',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'Implement a `throttle(fn, interval)` function. The wrapped function should be invoked at most once per `interval` milliseconds, executing immediately on the first call.',
    answer: `function throttle(fn, interval) {
  let lastTime = 0
  return function (...args) {
    const now = Date.now()
    if (now - lastTime >= interval) {
      lastTime = now
      fn.apply(this, args)
    }
  }
}`,
    explanation:
      'Throttle limits the rate of function calls. By recording the last invocation timestamp and comparing it to the current time, we allow execution only when enough time has passed. Unlike debounce, throttle guarantees periodic execution during continuous input.',
    references: ['https://css-tricks.com/debouncing-throttling-explained-examples/'],
    tags: ['throttle', 'performance', 'timers', 'rate-limiting'],
    year: 2025,
  },
  {
    id: 'cc-005',
    topic: 'coding-challenges',
    difficulty: 'mid',
    type: 'mcq',
    question:
      'What is the key difference between debounce and throttle?',
    options: [
      'Debounce fires on every call; throttle fires only once',
      'Debounce delays execution until calls stop; throttle fires at a fixed rate during continuous calls',
      'Throttle cancels previous timers; debounce does not',
      'They are functionally identical — just named differently',
    ],
    answer: 1,
    explanation:
      'Debounce waits for a pause in calls before executing — useful for search inputs where you want to fire after the user stops typing. Throttle fires at a consistent rate regardless of call frequency — useful for scroll/resize handlers where you want periodic updates.',
    references: ['https://css-tricks.com/debouncing-throttling-explained-examples/'],
    tags: ['debounce', 'throttle', 'concept', 'performance'],
    year: 2025,
  },

  // ─── DEEP CLONE ──────────────────────────────────────────────────────────────
  {
    id: 'cc-006',
    topic: 'coding-challenges',
    difficulty: 'senior',
    type: 'code-write',
    question:
      'Implement `deepClone(value)` that handles nested objects, arrays, Date, RegExp, Map, and Set. Circular references should be handled gracefully.',
    answer: `function deepClone(value, seen = new WeakMap()) {
  if (value === null || typeof value !== 'object') return value
  if (seen.has(value)) return seen.get(value)

  if (value instanceof Date) return new Date(value.getTime())
  if (value instanceof RegExp) return new RegExp(value.source, value.flags)

  if (value instanceof Map) {
    const cloned = new Map()
    seen.set(value, cloned)
    for (const [k, v] of value) cloned.set(deepClone(k, seen), deepClone(v, seen))
    return cloned
  }

  if (value instanceof Set) {
    const cloned = new Set()
    seen.set(value, cloned)
    for (const item of value) cloned.add(deepClone(item, seen))
    return cloned
  }

  const cloned = Array.isArray(value) ? [] : Object.create(Object.getPrototypeOf(value))
  seen.set(value, cloned)

  for (const key of Reflect.ownKeys(value)) {
    cloned[key] = deepClone(value[key], seen)
  }

  return cloned
}`,
    explanation:
      'A WeakMap tracks already-cloned objects to handle circular references and avoid infinite loops. Primitive values are returned as-is. Special types (Date, RegExp, Map, Set) need dedicated cloning logic. `Reflect.ownKeys` includes Symbol keys. `Object.create(Object.getPrototypeOf(value))` preserves the prototype chain.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/structuredClone',
    ],
    tags: ['deep-clone', 'recursion', 'WeakMap', 'circular-references', 'Map', 'Set'],
    year: 2025,
  },
  {
    id: 'cc-007',
    topic: 'coding-challenges',
    difficulty: 'junior',
    type: 'mcq',
    question: 'Which of the following correctly performs a shallow clone of an object?',
    options: [
      '`JSON.parse(JSON.stringify(obj))`',
      '`Object.assign({}, obj)`',
      '`obj.clone()`',
      '`new Object(obj)`',
    ],
    answer: 1,
    explanation:
      '`Object.assign({}, obj)` and the spread `{ ...obj }` both create a shallow copy — nested objects are still shared by reference. `JSON.parse(JSON.stringify(...))` is a deep clone but drops functions, undefined, Symbol keys, Dates (converts to strings), and fails on circular refs.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign'],
    tags: ['clone', 'shallow-clone', 'object-assign'],
    year: 2025,
  },

  // ─── FLATTEN ARRAY ───────────────────────────────────────────────────────────
  {
    id: 'cc-008',
    topic: 'coding-challenges',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'Implement `flattenArray(arr, depth = 1)` that mirrors `Array.prototype.flat`. It should flatten nested arrays up to the specified depth.',
    answer: `function flattenArray(arr, depth = 1) {
  if (depth < 1) return arr.slice()
  return arr.reduce((acc, item) => {
    if (Array.isArray(item) && depth > 0) {
      acc.push(...flattenArray(item, depth - 1))
    } else {
      acc.push(item)
    }
    return acc
  }, [])
}`,
    explanation:
      '`reduce` iterates each element. If the element is an array and depth allows, we recurse with `depth - 1`. Otherwise the element is pushed directly. Using `Infinity` as depth flattens all levels.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat'],
    tags: ['flatten', 'recursion', 'reduce', 'array'],
    year: 2025,
  },
  {
    id: 'cc-009',
    topic: 'coding-challenges',
    difficulty: 'junior',
    type: 'code-output',
    question: 'What does this code output?',
    code: `const arr = [1, [2, [3, [4]]]]
console.log(arr.flat())
console.log(arr.flat(Infinity))`,
    answer: `[1, 2, [3, [4]]]
[1, 2, 3, 4]`,
    explanation:
      '`flat()` with default depth 1 only unwraps one level. `flat(Infinity)` fully flattens all nested arrays regardless of depth.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat'],
    tags: ['flatten', 'array', 'flat'],
    year: 2025,
  },

  // ─── CURRY ───────────────────────────────────────────────────────────────────
  {
    id: 'cc-010',
    topic: 'coding-challenges',
    difficulty: 'senior',
    type: 'code-write',
    question:
      'Implement a `curry(fn)` function that converts a multi-argument function into a series of unary functions. `curry(add)(1)(2)(3)` should equal `add(1, 2, 3)`.',
    answer: `function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args)
    }
    return function (...moreArgs) {
      return curried.apply(this, args.concat(moreArgs))
    }
  }
}

// Usage:
// const add = (a, b, c) => a + b + c
// curry(add)(1)(2)(3)   // 6
// curry(add)(1, 2)(3)   // 6
// curry(add)(1)(2, 3)   // 6`,
    explanation:
      'The curried function accumulates arguments until the count reaches the original function\'s `fn.length` (arity). At that point it applies the function. Otherwise it returns a new function that merges the accumulated args with new ones. This supports both partial and full application in any grouping.',
    references: [
      'https://javascript.info/currying-partials',
      'https://lodash.com/docs/#curry',
    ],
    tags: ['curry', 'partial-application', 'functional-programming', 'closures'],
    year: 2025,
  },
  {
    id: 'cc-011',
    topic: 'coding-challenges',
    difficulty: 'mid',
    type: 'code-output',
    question: 'What is the output of this curried function?',
    code: `function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) return fn(...args)
    return (...more) => curried(...args, ...more)
  }
}

const multiply = (a, b, c) => a * b * c
const curriedMul = curry(multiply)

console.log(curriedMul(2)(3)(4))
console.log(curriedMul(2, 3)(4))
console.log(curriedMul(2)(3, 4))`,
    answer: `24
24
24`,
    explanation:
      'All three calls ultimately invoke `multiply(2, 3, 4)` = 24 because the curry implementation collects arguments across calls until the required arity (3) is reached.',
    references: ['https://javascript.info/currying-partials'],
    tags: ['curry', 'functional-programming'],
    year: 2025,
  },

  // ─── MEMOIZE ─────────────────────────────────────────────────────────────────
  {
    id: 'cc-012',
    topic: 'coding-challenges',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'Implement `memoize(fn)` that caches results based on arguments. Support a custom `resolver` function for cache key generation.',
    answer: `function memoize(fn, resolver) {
  const cache = new Map()
  function memoized(...args) {
    const key = resolver ? resolver(...args) : JSON.stringify(args)
    if (cache.has(key)) return cache.get(key)
    const result = fn.apply(this, args)
    cache.set(key, result)
    return result
  }
  memoized.cache = cache
  memoized.clear = () => cache.clear()
  return memoized
}`,
    explanation:
      'The cache is a Map keyed by a serialized version of arguments. A custom `resolver` allows control over the key for complex objects or when performance matters. Attaching `.cache` and `.clear` mirrors lodash\'s API and enables cache inspection/invalidation.',
    references: ['https://lodash.com/docs/#memoize'],
    tags: ['memoize', 'cache', 'optimization', 'closures', 'Map'],
    year: 2025,
  },
  {
    id: 'cc-013',
    topic: 'coding-challenges',
    difficulty: 'junior',
    type: 'mcq',
    question: 'What is the time complexity of a lookup in a memoize cache implemented with a Map?',
    options: ['O(n)', 'O(log n)', 'O(1) amortized', 'O(n log n)'],
    answer: 2,
    explanation:
      'JavaScript `Map` (and `Object`) lookups are O(1) amortized because they use hash-based indexing under the hood. This is the primary performance benefit of memoization — repeated calls with the same arguments return immediately.',
    references: ['https://tc39.es/ecma262/#sec-map-objects'],
    tags: ['memoize', 'time-complexity', 'Map', 'big-o'],
    year: 2025,
  },

  // ─── PROMISE.ALL ─────────────────────────────────────────────────────────────
  {
    id: 'cc-014',
    topic: 'coding-challenges',
    difficulty: 'senior',
    type: 'code-write',
    question:
      'Implement `promiseAll(promises)` that mirrors `Promise.all`. It resolves with an array of results when all promises resolve, or rejects immediately when any promise rejects.',
    answer: `function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (!promises.length) return resolve([])
    const results = new Array(promises.length)
    let remaining = promises.length

    promises.forEach((p, i) => {
      Promise.resolve(p).then(value => {
        results[i] = value
        remaining--
        if (remaining === 0) resolve(results)
      }).catch(reject)
    })
  })
}`,
    explanation:
      'We maintain a counter of unresolved promises. Each resolution stores the result at the original index (order is preserved) and decrements the counter. When the counter reaches zero, we resolve with the collected array. Wrapping each item with `Promise.resolve` handles non-promise values. The first rejection immediately rejects the outer promise.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all'],
    tags: ['promise', 'Promise.all', 'async', 'concurrency'],
    year: 2025,
  },

  // ─── PROMISE.RACE ────────────────────────────────────────────────────────────
  {
    id: 'cc-015',
    topic: 'coding-challenges',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'Implement `promiseRace(promises)` that mirrors `Promise.race`. It settles with the first promise that settles (either resolves or rejects).',
    answer: `function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    for (const p of promises) {
      Promise.resolve(p).then(resolve).catch(reject)
    }
  })
}`,
    explanation:
      'We attach resolve/reject handlers to every promise simultaneously. The first one to settle wins — subsequent settlements are ignored because a Promise can only be settled once. An empty array leaves the promise pending forever (matching native behavior).',
    references: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race'],
    tags: ['promise', 'Promise.race', 'async'],
    year: 2025,
  },

  // ─── PROMISE.ALLSETTLED ──────────────────────────────────────────────────────
  {
    id: 'cc-016',
    topic: 'coding-challenges',
    difficulty: 'senior',
    type: 'code-write',
    question:
      'Implement `promiseAllSettled(promises)` that mirrors `Promise.allSettled`. It always resolves with an array describing each promise\'s outcome: `{ status: "fulfilled", value }` or `{ status: "rejected", reason }`.',
    answer: `function promiseAllSettled(promises) {
  return new Promise(resolve => {
    if (!promises.length) return resolve([])
    const results = new Array(promises.length)
    let remaining = promises.length

    promises.forEach((p, i) => {
      Promise.resolve(p)
        .then(value => {
          results[i] = { status: 'fulfilled', value }
        })
        .catch(reason => {
          results[i] = { status: 'rejected', reason }
        })
        .finally(() => {
          remaining--
          if (remaining === 0) resolve(results)
        })
    })
  })
}`,
    explanation:
      'Unlike `Promise.all`, this never rejects. Every promise is handled and its outcome recorded. Using `.finally` in the counter ensures both fulfillment and rejection decrement the counter. The outer promise resolves only after all have settled.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled'],
    tags: ['promise', 'Promise.allSettled', 'async'],
    year: 2025,
  },

  // ─── EVENT EMITTER ───────────────────────────────────────────────────────────
  {
    id: 'cc-017',
    topic: 'coding-challenges',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'Implement an `EventEmitter` class with `on(event, listener)`, `off(event, listener)`, `emit(event, ...args)`, and `once(event, listener)` methods.',
    answer: `class EventEmitter {
  constructor() {
    this._events = new Map()
  }

  on(event, listener) {
    if (!this._events.has(event)) this._events.set(event, [])
    this._events.get(event).push(listener)
    return this
  }

  off(event, listener) {
    if (!this._events.has(event)) return this
    const listeners = this._events.get(event).filter(l => l !== listener && l._original !== listener)
    this._events.set(event, listeners)
    return this
  }

  emit(event, ...args) {
    if (!this._events.has(event)) return false
    this._events.get(event).forEach(listener => listener.apply(this, args))
    return true
  }

  once(event, listener) {
    const wrapper = (...args) => {
      listener.apply(this, args)
      this.off(event, wrapper)
    }
    wrapper._original = listener
    return this.on(event, wrapper)
  }
}`,
    explanation:
      'Events are stored in a Map keyed by event name. `once` wraps the listener in a self-removing function. The `_original` property on the wrapper allows `off` to remove `once` listeners by their original reference. Returning `this` enables method chaining.',
    references: ['https://nodejs.org/api/events.html#class-eventemitter'],
    tags: ['event-emitter', 'observer-pattern', 'design-patterns'],
    year: 2025,
  },
  {
    id: 'cc-018',
    topic: 'coding-challenges',
    difficulty: 'mid',
    type: 'code-output',
    question: 'What is the output?',
    code: `class EventEmitter {
  constructor() { this._events = {} }
  on(e, fn) { (this._events[e] = this._events[e] || []).push(fn); return this }
  emit(e, ...args) { (this._events[e] || []).forEach(fn => fn(...args)) }
  once(e, fn) {
    const wrapper = (...args) => { fn(...args); this.off(e, wrapper) }
    return this.on(e, wrapper)
  }
  off(e, fn) { this._events[e] = (this._events[e] || []).filter(f => f !== fn) }
}

const emitter = new EventEmitter()
const log = (x) => console.log(x)

emitter.once('data', log)
emitter.emit('data', 'first')
emitter.emit('data', 'second')`,
    answer: `first`,
    explanation:
      '`once` attaches a wrapper that removes itself after the first call. So `"first"` is logged on the initial emit, but the listener has already been removed before `"second"` is emitted.',
    references: ['https://nodejs.org/api/events.html'],
    tags: ['event-emitter', 'once', 'code-output'],
    year: 2025,
  },

  // ─── PUB/SUB ─────────────────────────────────────────────────────────────────
  {
    id: 'cc-019',
    topic: 'coding-challenges',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'Implement a `PubSub` (publish/subscribe) module with `subscribe(topic, handler)` returning an unsubscribe function, and `publish(topic, data)` that notifies all handlers.',
    answer: `const PubSub = (() => {
  const subscribers = new Map()

  function subscribe(topic, handler) {
    if (!subscribers.has(topic)) subscribers.set(topic, new Set())
    subscribers.get(topic).add(handler)
    return function unsubscribe() {
      subscribers.get(topic)?.delete(handler)
    }
  }

  function publish(topic, data) {
    if (!subscribers.has(topic)) return
    subscribers.get(topic).forEach(handler => {
      try { handler(data) } catch (e) { console.error(e) }
    })
  }

  return { subscribe, publish }
})()`,
    explanation:
      'A Set per topic prevents duplicate subscriptions. `subscribe` returns an unsubscribe closure for clean-up, which is ergonomic (no need to keep the handler reference separately). `try/catch` inside `publish` ensures one failing handler does not block others.',
    references: ['https://www.patterns.dev/vanilla/observer-pattern/'],
    tags: ['pub-sub', 'observer-pattern', 'design-patterns', 'module-pattern'],
    year: 2025,
  },

  // ─── LRU CACHE ───────────────────────────────────────────────────────────────
  {
    id: 'cc-020',
    topic: 'coding-challenges',
    difficulty: 'lead',
    type: 'code-write',
    question:
      'Implement an `LRUCache` class with `get(key)` and `put(key, value)` methods, both O(1). The cache should evict the least recently used entry when it exceeds `capacity`.',
    answer: `class LRUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.cache = new Map()
  }

  get(key) {
    if (!this.cache.has(key)) return -1
    // Move to end (most recently used)
    const value = this.cache.get(key)
    this.cache.delete(key)
    this.cache.set(key, value)
    return value
  }

  put(key, value) {
    if (this.cache.has(key)) this.cache.delete(key)
    this.cache.set(key, value)
    if (this.cache.size > this.capacity) {
      // Delete the first (least recently used) entry
      this.cache.delete(this.cache.keys().next().value)
    }
  }
}`,
    explanation:
      'JavaScript\'s `Map` preserves insertion order. By deleting and re-inserting on access, we keep the most recently used items at the end. The first entry in the Map is always the least recently used. Both `get` and `put` are O(1) amortized. An alternative with explicit doubly-linked list + hashmap is also valid but more verbose.',
    references: ['https://leetcode.com/problems/lru-cache/'],
    tags: ['LRU-cache', 'Map', 'O(1)', 'data-structures', 'design'],
    year: 2025,
  },
  {
    id: 'cc-021',
    topic: 'coding-challenges',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What data structure combination makes LRU Cache O(1) for both get and put?',
    options: [
      'Array + Binary Search Tree',
      'HashMap + Doubly Linked List',
      'Stack + Queue',
      'Set + Array',
    ],
    answer: 1,
    explanation:
      'A HashMap provides O(1) key lookup, while a Doubly Linked List enables O(1) removal from any position and O(1) insertion at head/tail. Together they allow both O(1) access and O(1) eviction of the LRU element. In JS, a Map already maintains insertion order giving us the same property more concisely.',
    references: ['https://leetcode.com/problems/lru-cache/'],
    tags: ['LRU-cache', 'data-structures', 'time-complexity'],
    year: 2025,
  },

  // ─── DEEP EQUAL ──────────────────────────────────────────────────────────────
  {
    id: 'cc-022',
    topic: 'coding-challenges',
    difficulty: 'senior',
    type: 'code-write',
    question:
      'Implement `deepEqual(a, b)` that returns `true` if two values are structurally equal (handles objects, arrays, primitives, null, Date, RegExp).',
    answer: `function deepEqual(a, b) {
  if (a === b) return true
  if (a === null || b === null) return false
  if (typeof a !== typeof b) return false
  if (typeof a !== 'object') return a === b

  if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime()
  if (a instanceof RegExp && b instanceof RegExp) return a.toString() === b.toString()

  if (Array.isArray(a) !== Array.isArray(b)) return false

  const keysA = Object.keys(a)
  const keysB = Object.keys(b)
  if (keysA.length !== keysB.length) return false

  return keysA.every(key => Object.prototype.hasOwnProperty.call(b, key) && deepEqual(a[key], b[key]))
}`,
    explanation:
      'Strict equality (`===`) short-circuits for primitives and same-reference objects. Date comparison uses millisecond timestamps; RegExp uses string representation. Arrays vs plain objects are distinguished with `Array.isArray`. Key count and recursive value comparison handle objects.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness'],
    tags: ['deep-equal', 'recursion', 'comparison', 'objects'],
    year: 2025,
  },

  // ─── TYPE CHECKING ───────────────────────────────────────────────────────────
  {
    id: 'cc-023',
    topic: 'coding-challenges',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'Implement `getType(value)` that returns a reliable type string for any JavaScript value, fixing the limitations of `typeof` (e.g., `typeof null === "object"`).',
    answer: `function getType(value) {
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase()
}

// Examples:
// getType(null)        => 'null'
// getType(undefined)   => 'undefined'
// getType([])          => 'array'
// getType({})          => 'object'
// getType(new Date())  => 'date'
// getType(/regex/)     => 'regexp'
// getType(new Map())   => 'map'
// getType(42)          => 'number'`,
    explanation:
      '`Object.prototype.toString.call(value)` returns a string like `"[object Array]"`. Slicing from index 8 and trimming the last character extracts just the type name. This correctly identifies `null`, arrays, Date, RegExp, Map, Set, and other built-ins where `typeof` falls short.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString'],
    tags: ['type-checking', 'typeof', 'Object.prototype.toString'],
    year: 2025,
  },
  {
    id: 'cc-024',
    topic: 'coding-challenges',
    difficulty: 'junior',
    type: 'code-output',
    question: 'What does this output?',
    code: `console.log(typeof null)
console.log(typeof [])
console.log(typeof function(){})
console.log(typeof NaN)`,
    answer: `object
object
function
number`,
    explanation:
      '`typeof null` is famously `"object"` (a historical JS bug). Arrays are objects, so `typeof []` is `"object"`. Functions are callable objects but `typeof` has a special case returning `"function"`. `NaN` is of type `"number"` despite meaning "Not a Number".',
    references: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof'],
    tags: ['typeof', 'null', 'NaN', 'quirks'],
    year: 2025,
  },

  // ─── PIPE / COMPOSE ──────────────────────────────────────────────────────────
  {
    id: 'cc-025',
    topic: 'coding-challenges',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'Implement `pipe(...fns)` and `compose(...fns)`. `pipe` applies functions left-to-right; `compose` applies right-to-left. Both return a new function.',
    answer: `function pipe(...fns) {
  return function (value) {
    return fns.reduce((acc, fn) => fn(acc), value)
  }
}

function compose(...fns) {
  return function (value) {
    return fns.reduceRight((acc, fn) => fn(acc), value)
  }
}

// pipe(double, addOne)(5)    => 11
// compose(addOne, double)(5) => 11`,
    explanation:
      '`pipe` uses `reduce` (left-to-right). `compose` uses `reduceRight` (right-to-left). Both thread the output of one function into the input of the next. This is a core functional programming pattern for building data transformation pipelines.',
    references: ['https://www.patterns.dev/vanilla/rendering-patterns/'],
    tags: ['pipe', 'compose', 'functional-programming', 'reduce'],
    year: 2025,
  },

  // ─── RETRY WITH BACKOFF ──────────────────────────────────────────────────────
  {
    id: 'cc-026',
    topic: 'coding-challenges',
    difficulty: 'senior',
    type: 'code-write',
    question:
      'Implement `fetchWithRetry(url, options, maxRetries = 3, baseDelay = 300)` that retries failed fetch requests with exponential backoff.',
    answer: `async function fetchWithRetry(url, options = {}, maxRetries = 3, baseDelay = 300) {
  let lastError
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(url, options)
      if (!response.ok) throw new Error(\`HTTP \${response.status}\`)
      return response
    } catch (error) {
      lastError = error
      if (attempt === maxRetries) break
      const delay = baseDelay * Math.pow(2, attempt) + Math.random() * 100
      await new Promise(resolve => setTimeout(resolve, delay))
    }
  }
  throw lastError
}`,
    explanation:
      'Exponential backoff doubles the delay with each retry (300ms, 600ms, 1200ms...). Adding a random jitter (`Math.random() * 100`) prevents thundering herd when many clients retry simultaneously. We also check `response.ok` since fetch only rejects on network errors, not HTTP error status codes.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API',
      'https://aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter/',
    ],
    tags: ['fetch', 'retry', 'exponential-backoff', 'async', 'error-handling'],
    year: 2025,
  },

  // ─── ARRAY METHODS FROM SCRATCH ──────────────────────────────────────────────
  {
    id: 'cc-027',
    topic: 'coding-challenges',
    difficulty: 'junior',
    type: 'code-write',
    question:
      'Implement `Array.prototype.map` from scratch as a standalone function `myMap(arr, callback)`.',
    answer: `function myMap(arr, callback) {
  const result = new Array(arr.length)
  for (let i = 0; i < arr.length; i++) {
    if (i in arr) {
      result[i] = callback(arr[i], i, arr)
    }
  }
  return result
}`,
    explanation:
      'The `i in arr` check handles sparse arrays — holes should remain holes (the callback is not called for empty slots, matching native behavior). The callback receives `(element, index, array)` per the spec. A new array of the same length is allocated up front for efficiency.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map'],
    tags: ['array', 'map', 'polyfill', 'iteration'],
    year: 2025,
  },
  {
    id: 'cc-028',
    topic: 'coding-challenges',
    difficulty: 'junior',
    type: 'code-write',
    question: 'Implement `myFilter(arr, predicate)` that mirrors `Array.prototype.filter`.',
    answer: `function myFilter(arr, predicate) {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    if (i in arr && predicate(arr[i], i, arr)) {
      result.push(arr[i])
    }
  }
  return result
}`,
    explanation:
      'Iterates the array, calling the predicate with `(element, index, array)`. Only elements where the predicate returns truthy are included. The `i in arr` guard skips sparse slots consistently with the spec.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter'],
    tags: ['array', 'filter', 'polyfill'],
    year: 2025,
  },
  {
    id: 'cc-029',
    topic: 'coding-challenges',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'Implement `myReduce(arr, callback, initialValue)` that mirrors `Array.prototype.reduce`. Handle the case when no initial value is provided.',
    answer: `function myReduce(arr, callback, initialValue) {
  const hasInitial = arguments.length >= 3
  let acc = hasInitial ? initialValue : arr[0]
  let startIndex = hasInitial ? 0 : 1

  if (!hasInitial && arr.length === 0) {
    throw new TypeError('Reduce of empty array with no initial value')
  }

  for (let i = startIndex; i < arr.length; i++) {
    if (i in arr) {
      acc = callback(acc, arr[i], i, arr)
    }
  }
  return acc
}`,
    explanation:
      'When no initial value is provided, the first element seeds the accumulator and iteration starts at index 1. An empty array without initial value throws a TypeError, matching native behavior. `arguments.length` is checked (not `undefined`) since `undefined` is a valid initial value.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce'],
    tags: ['array', 'reduce', 'polyfill', 'accumulator'],
    year: 2025,
  },
  {
    id: 'cc-030',
    topic: 'coding-challenges',
    difficulty: 'junior',
    type: 'code-write',
    question: 'Implement `myFind(arr, predicate)` mirroring `Array.prototype.find`.',
    answer: `function myFind(arr, predicate) {
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i], i, arr)) return arr[i]
  }
  return undefined
}`,
    explanation:
      '`find` returns the first element for which the predicate returns true, or `undefined` if none. Unlike `indexOf`, it accepts a callback so you can test complex conditions. Early return short-circuits iteration.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find'],
    tags: ['array', 'find', 'polyfill'],
    year: 2025,
  },

  // ─── STRING MANIPULATION ─────────────────────────────────────────────────────
  {
    id: 'cc-031',
    topic: 'coding-challenges',
    difficulty: 'junior',
    type: 'code-write',
    question: 'Implement `reverseString(str)` without using the built-in `reverse()` method.',
    answer: `function reverseString(str) {
  let result = ''
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i]
  }
  return result
}

// Alternative (one-liner):
// const reverseString = str => [...str].split('').reverse().join('')
// Note: spread handles Unicode surrogate pairs correctly`,
    explanation:
      'The manual approach iterates from the last character. The spread alternative (`[...str]`) correctly handles Unicode code points that are represented as surrogate pairs (e.g. emoji), whereas `str.split("")` would split them into their individual surrogates.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'],
    tags: ['string', 'reverse', 'unicode'],
    year: 2025,
  },
  {
    id: 'cc-032',
    topic: 'coding-challenges',
    difficulty: 'junior',
    type: 'code-write',
    question: 'Implement `isPalindrome(str)` that returns `true` if the string reads the same forwards and backwards (ignore case and non-alphanumeric characters).',
    answer: `function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '')
  return cleaned === cleaned.split('').reverse().join('')
}`,
    explanation:
      'Normalizing to lowercase and stripping non-alphanumeric characters makes the check case-insensitive and punctuation-agnostic. Then we compare the string to its reverse. Two-pointer approach avoids creating a reversed string but is equivalent.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions'],
    tags: ['string', 'palindrome', 'regex'],
    year: 2025,
  },
  {
    id: 'cc-033',
    topic: 'coding-challenges',
    difficulty: 'junior',
    type: 'code-write',
    question:
      'Implement `isAnagram(str1, str2)` that returns `true` if both strings are anagrams of each other.',
    answer: `function isAnagram(str1, str2) {
  const normalize = s => s.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('')
  return normalize(str1) === normalize(str2)
}`,
    explanation:
      'Sorting the characters of both strings and comparing the results is the simplest approach O(n log n). An O(n) alternative uses a frequency Map to count characters in the first string and decrement with the second.',
    references: ['https://en.wikipedia.org/wiki/Anagram'],
    tags: ['string', 'anagram', 'sorting'],
    year: 2025,
  },
  {
    id: 'cc-034',
    topic: 'coding-challenges',
    difficulty: 'junior',
    type: 'code-write',
    question: 'Implement `toCamelCase(str)` that converts a kebab-case or snake_case string to camelCase.',
    answer: `function toCamelCase(str) {
  return str
    .toLowerCase()
    .replace(/[-_](.)/g, (_, char) => char.toUpperCase())
}

// toCamelCase('hello-world')    => 'helloWorld'
// toCamelCase('foo_bar_baz')    => 'fooBarBaz'
// toCamelCase('MY-COMPONENT')   => 'myComponent'`,
    explanation:
      'The regex `[-_](.)` matches a hyphen or underscore followed by any character, capturing the character. The replacement callback uppercases that character. Starting with `.toLowerCase()` normalises mixed-case input.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace'],
    tags: ['string', 'camelCase', 'regex', 'kebab-case', 'snake_case'],
    year: 2025,
  },

  // ─── DOM UTILITIES ───────────────────────────────────────────────────────────
  {
    id: 'cc-035',
    topic: 'coding-challenges',
    difficulty: 'junior',
    type: 'code-write',
    question:
      'Implement `addClass(el, className)`, `removeClass(el, className)`, and `toggleClass(el, className)` without using `classList` API (for older browsers).',
    answer: `function addClass(el, className) {
  if (!hasClass(el, className)) {
    el.className = (el.className ? el.className + ' ' : '') + className
  }
}

function hasClass(el, className) {
  return new RegExp('(^|\\\\s)' + className + '(\\\\s|$)').test(el.className)
}

function removeClass(el, className) {
  el.className = el.className
    .replace(new RegExp('(^|\\\\s)' + className + '(\\\\s|$)', 'g'), ' ')
    .trim()
}

function toggleClass(el, className) {
  if (hasClass(el, className)) removeClass(el, className)
  else addClass(el, className)
}`,
    explanation:
      'The regex anchors on word boundaries (start of string or whitespace before, whitespace or end after) to avoid partial matches — e.g., removing "foo" should not affect "foobar". The `trim()` cleans up any leading/trailing spaces created by the replacement.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/API/Element/classList'],
    tags: ['DOM', 'class-manipulation', 'polyfill', 'regex'],
    year: 2025,
  },
  {
    id: 'cc-036',
    topic: 'coding-challenges',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'Implement a `closest(el, selector)` polyfill that walks up the DOM tree and returns the first ancestor (or itself) matching the CSS selector.',
    answer: `function closest(el, selector) {
  let current = el
  while (current && current !== document) {
    if (current.matches(selector)) return current
    current = current.parentElement
  }
  return null
}`,
    explanation:
      '`Element.prototype.closest` is now well-supported, but implementing it from scratch demonstrates DOM traversal. Starting from `el` itself, we walk up via `parentElement` calling `matches(selector)` at each step. Returns `null` if the document root is reached without a match.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/API/Element/closest'],
    tags: ['DOM', 'closest', 'polyfill', 'traversal'],
    year: 2025,
  },

  // ─── PROMISE UTILITIES ───────────────────────────────────────────────────────
  {
    id: 'cc-037',
    topic: 'coding-challenges',
    difficulty: 'junior',
    type: 'code-write',
    question:
      'Implement `sleep(ms)` that returns a Promise resolving after `ms` milliseconds, usable with `await`.',
    answer: `function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// Usage:
// async function example() {
//   console.log('start')
//   await sleep(1000)
//   console.log('after 1 second')
// }`,
    explanation:
      'Wrapping `setTimeout` in a Promise makes it awaitable. The resolve callback is passed directly to `setTimeout` — when the timer fires it calls `resolve()` with no value, causing the promise to fulfill. This is the idiomatic way to add delays in async/await code.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/API/setTimeout'],
    tags: ['promise', 'sleep', 'async-await', 'timers'],
    year: 2025,
  },
  {
    id: 'cc-038',
    topic: 'coding-challenges',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'Implement `withTimeout(promise, ms)` that rejects if the given promise does not settle within `ms` milliseconds.',
    answer: `function withTimeout(promise, ms) {
  const timeout = new Promise((_, reject) =>
    setTimeout(() => reject(new Error(\`Timed out after \${ms}ms\`)), ms)
  )
  return Promise.race([promise, timeout])
}`,
    explanation:
      '`Promise.race` settles with whichever promise settles first. The timeout promise rejects after `ms` ms. If the real promise settles before that, it wins. This pattern is critical for fetch calls and any async operation needing a deadline.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race'],
    tags: ['promise', 'timeout', 'Promise.race', 'async'],
    year: 2025,
  },

  // ─── BIND / CALL / APPLY ─────────────────────────────────────────────────────
  {
    id: 'cc-039',
    topic: 'coding-challenges',
    difficulty: 'senior',
    type: 'code-write',
    question:
      'Implement `Function.prototype.myBind(context, ...partialArgs)` from scratch.',
    answer: `Function.prototype.myBind = function (context, ...partialArgs) {
  const fn = this
  return function (...args) {
    return fn.apply(context, [...partialArgs, ...args])
  }
}

// Usage:
// function greet(greeting, name) { return \`\${greeting}, \${name}!\` }
// const sayHello = greet.myBind(null, 'Hello')
// sayHello('World') // 'Hello, World!'`,
    explanation:
      '`myBind` captures the original function (`this`) and the partial arguments. It returns a new function that merges partial args with any new args and calls the original function with the bound context via `apply`. Note: a full polyfill would also handle `new` operator usage (checking `new.target`).',
    references: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind'],
    tags: ['bind', 'polyfill', 'this', 'partial-application', 'apply'],
    year: 2025,
  },
  {
    id: 'cc-040',
    topic: 'coding-challenges',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'Implement `Function.prototype.myCall(context, ...args)` from scratch without using `call` or `apply`.',
    answer: `Function.prototype.myCall = function (context, ...args) {
  context = context ?? globalThis
  const sym = Symbol('fn')
  context[sym] = this
  const result = context[sym](...args)
  delete context[sym]
  return result
}`,
    explanation:
      'The trick is to temporarily attach the function as a property of the context object. When called as `context[sym](...args)`, `this` inside the function is `context`. A unique Symbol key avoids collisions with existing properties. We delete it afterwards to avoid mutation.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call'],
    tags: ['call', 'polyfill', 'this', 'Symbol'],
    year: 2025,
  },
  {
    id: 'cc-041',
    topic: 'coding-challenges',
    difficulty: 'mid',
    type: 'code-write',
    question: 'Implement `Function.prototype.myApply(context, argsArray)` from scratch.',
    answer: `Function.prototype.myApply = function (context, argsArray = []) {
  context = context ?? globalThis
  const sym = Symbol('fn')
  context[sym] = this
  const result = context[sym](...argsArray)
  delete context[sym]
  return result
}`,
    explanation:
      'Same approach as `myCall` but receives arguments as an array (defaulting to `[]`). Spreading `argsArray` into the call spreads the elements as individual arguments. The `argsArray` parameter mirrors native `apply` which accepts an array-like.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply'],
    tags: ['apply', 'polyfill', 'this', 'Symbol'],
    year: 2025,
  },

  // ─── OBJECT.ASSIGN ───────────────────────────────────────────────────────────
  {
    id: 'cc-042',
    topic: 'coding-challenges',
    difficulty: 'junior',
    type: 'code-write',
    question: 'Implement `myObjectAssign(target, ...sources)` mirroring `Object.assign`.',
    answer: `function myObjectAssign(target, ...sources) {
  if (target == null) throw new TypeError('Cannot convert undefined or null to object')
  const to = Object(target)
  for (const source of sources) {
    if (source == null) continue
    for (const key of Object.keys(source)) {
      to[key] = source[key]
    }
  }
  return to
}`,
    explanation:
      '`Object.assign` copies enumerable own properties from each source to the target. We use `Object.keys` (enumerable own string keys). Symbol keys are also copied by native `Object.assign` but `Object.keys` skips them — use `Reflect.ownKeys` for a more complete polyfill.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign'],
    tags: ['Object.assign', 'polyfill', 'shallow-clone'],
    year: 2025,
  },

  // ─── PRACTICAL REACT ─────────────────────────────────────────────────────────
  {
    id: 'cc-043',
    topic: 'coding-challenges',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'Implement a `useDebounce(value, delay)` React hook that returns the debounced version of a value.',
    answer: `import { useState, useEffect } from 'react'

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => clearTimeout(timer)
  }, [value, delay])

  return debouncedValue
}

// Usage:
// const debouncedSearch = useDebounce(searchTerm, 300)
// useEffect(() => { fetchResults(debouncedSearch) }, [debouncedSearch])`,
    explanation:
      'Each time `value` changes, a new timer is set. The cleanup function (`return () => clearTimeout(timer)`) cancels the previous timer, so `debouncedValue` only updates after `value` has been stable for `delay` ms. This is the standard pattern for debounced search inputs in React.',
    references: ['https://react.dev/reference/react/useEffect'],
    tags: ['react', 'hooks', 'debounce', 'useEffect', 'custom-hook'],
    year: 2025,
  },
  {
    id: 'cc-044',
    topic: 'coding-challenges',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'Implement a `useThrottle(value, interval)` React hook that returns the throttled version of a value.',
    answer: `import { useState, useRef, useEffect } from 'react'

function useThrottle(value, interval) {
  const [throttledValue, setThrottledValue] = useState(value)
  const lastUpdated = useRef(Date.now())

  useEffect(() => {
    const now = Date.now()
    const remaining = interval - (now - lastUpdated.current)

    if (remaining <= 0) {
      lastUpdated.current = now
      setThrottledValue(value)
    } else {
      const timer = setTimeout(() => {
        lastUpdated.current = Date.now()
        setThrottledValue(value)
      }, remaining)
      return () => clearTimeout(timer)
    }
  }, [value, interval])

  return throttledValue
}`,
    explanation:
      'A `useRef` tracks the last update time without triggering re-renders. If enough time has elapsed we update immediately; otherwise we schedule an update for the remaining interval. The cleanup cancels stale timeouts.',
    references: ['https://react.dev/reference/react/useRef'],
    tags: ['react', 'hooks', 'throttle', 'useRef', 'custom-hook'],
    year: 2025,
  },

  // ─── INFINITE SCROLL ─────────────────────────────────────────────────────────
  {
    id: 'cc-045',
    topic: 'coding-challenges',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'Implement a `useInfiniteScroll(callback, options)` React hook using `IntersectionObserver` that calls `callback` when a sentinel element enters the viewport.',
    answer: `import { useRef, useEffect } from 'react'

function useInfiniteScroll(callback, { threshold = 1.0, rootMargin = '0px' } = {}) {
  const sentinelRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) callback()
      },
      { threshold, rootMargin }
    )

    const el = sentinelRef.current
    if (el) observer.observe(el)

    return () => { if (el) observer.unobserve(el) }
  }, [callback, threshold, rootMargin])

  return sentinelRef
}

// Usage:
// const listEndRef = useInfiniteScroll(loadMore)
// return <div ref={listEndRef} />`,
    explanation:
      '`IntersectionObserver` fires when the observed element (sentinel) enters or exits the viewport. A sentinel div placed at the bottom of the list triggers `callback` when scrolled into view. The observer is cleaned up on unmount or when dependencies change.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API'],
    tags: ['react', 'IntersectionObserver', 'infinite-scroll', 'custom-hook', 'performance'],
    year: 2025,
  },

  // ─── VIRTUAL LIST ────────────────────────────────────────────────────────────
  {
    id: 'cc-046',
    topic: 'coding-challenges',
    difficulty: 'lead',
    type: 'code-write',
    question:
      'Implement a basic `useVirtualList(items, itemHeight, containerHeight)` hook that returns only the visible items and their positional styles for windowing/virtualization.',
    answer: `import { useState, useCallback } from 'react'

function useVirtualList(items, itemHeight, containerHeight) {
  const [scrollTop, setScrollTop] = useState(0)

  const onScroll = useCallback((e) => {
    setScrollTop(e.currentTarget.scrollTop)
  }, [])

  const visibleCount = Math.ceil(containerHeight / itemHeight)
  const startIndex = Math.floor(scrollTop / itemHeight)
  const endIndex = Math.min(startIndex + visibleCount + 1, items.length)

  const visibleItems = items.slice(startIndex, endIndex).map((item, i) => ({
    item,
    style: {
      position: 'absolute',
      top: (startIndex + i) * itemHeight,
      height: itemHeight,
      width: '100%',
    },
  }))

  const totalHeight = items.length * itemHeight

  return { visibleItems, totalHeight, onScroll }
}

// Usage:
// const { visibleItems, totalHeight, onScroll } = useVirtualList(data, 50, 400)
// <div style={{ height: 400, overflow: 'auto', position: 'relative' }} onScroll={onScroll}>
//   <div style={{ height: totalHeight }}>
//     {visibleItems.map(({ item, style }) => <Row key={item.id} style={style} data={item} />)}
//   </div>
// </div>`,
    explanation:
      'Virtualization renders only the visible slice of a large list. The total scroll height is maintained with a spacer div so the scrollbar behaves correctly. Items are absolutely positioned at their true scroll offsets. Only ~containerHeight/itemHeight items are in the DOM at any time regardless of list size.',
    references: [
      'https://web.dev/articles/virtualize-long-lists-react-window',
      'https://github.com/bvaughn/react-window',
    ],
    tags: ['virtual-list', 'windowing', 'performance', 'react', 'custom-hook'],
    year: 2025,
  },

  // ─── RATE LIMITER ────────────────────────────────────────────────────────────
  {
    id: 'cc-047',
    topic: 'coding-challenges',
    difficulty: 'senior',
    type: 'code-write',
    question:
      'Implement a `createRateLimiter(maxCalls, windowMs)` factory that returns a function wrapper enforcing a maximum number of calls within a rolling time window.',
    answer: `function createRateLimiter(maxCalls, windowMs) {
  const callTimestamps = []

  return function rateLimited(fn) {
    return function (...args) {
      const now = Date.now()
      // Remove timestamps outside the current window
      while (callTimestamps.length && now - callTimestamps[0] > windowMs) {
        callTimestamps.shift()
      }

      if (callTimestamps.length < maxCalls) {
        callTimestamps.push(now)
        return fn.apply(this, args)
      } else {
        console.warn('Rate limit exceeded')
        return Promise.reject(new Error('Rate limit exceeded'))
      }
    }
  }
}

// Usage:
// const limiter = createRateLimiter(5, 1000) // 5 calls per second
// const limitedFetch = limiter(fetch)`,
    explanation:
      'A sliding window approach stores timestamps of recent calls. Before each call, expired timestamps (older than `windowMs`) are removed. If the remaining count is under the limit, the call proceeds and its timestamp is recorded. Otherwise the call is blocked. A token bucket or leaky bucket algorithm is a more sophisticated alternative.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/API/Rate_limit'],
    tags: ['rate-limiter', 'sliding-window', 'API', 'throttle'],
    year: 2025,
  },

  // ─── PROMISES MISC ───────────────────────────────────────────────────────────
  {
    id: 'cc-048',
    topic: 'coding-challenges',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'Implement `promiseAny(promises)` that resolves with the first fulfilled promise, or rejects with an `AggregateError` if all reject.',
    answer: `function promiseAny(promises) {
  return new Promise((resolve, reject) => {
    if (!promises.length) return reject(new AggregateError([], 'All promises were rejected'))
    const errors = new Array(promises.length)
    let remaining = promises.length

    promises.forEach((p, i) => {
      Promise.resolve(p).then(resolve).catch(err => {
        errors[i] = err
        remaining--
        if (remaining === 0) reject(new AggregateError(errors, 'All promises were rejected'))
      })
    })
  })
}`,
    explanation:
      'The inverse of `Promise.all`: resolves on first success, rejects only when all fail. Errors are collected at their original indices. `AggregateError` is the standard rejection type matching `Promise.any` spec.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any'],
    tags: ['promise', 'Promise.any', 'AggregateError', 'async'],
    year: 2025,
  },

  // ─── FUNCTION COMPOSITION DEBUG ──────────────────────────────────────────────
  {
    id: 'cc-049',
    topic: 'coding-challenges',
    difficulty: 'mid',
    type: 'debug',
    question: 'Find and fix the bug in this `compose` implementation.',
    code: `function compose(...fns) {
  return function (value) {
    return fns.reduce((acc, fn) => fn(acc), value)
  }
}

const double = x => x * 2
const addOne = x => x + 1

// Expected: compose(addOne, double)(5) => 11 (double first, then addOne)
// Actual: 12`,
    answer: `// Bug: compose should apply functions right-to-left, but reduce goes left-to-right.
// Using reduce on [addOne, double] applies addOne first (5+1=6), then double (6*2=12).
// Fix: use reduceRight

function compose(...fns) {
  return function (value) {
    return fns.reduceRight((acc, fn) => fn(acc), value) // <-- reduceRight
  }
}

// Now compose(addOne, double)(5):
// reduceRight starts with double: 5*2=10, then addOne: 10+1=11 ✓`,
    explanation:
      'Mathematical function composition `f ∘ g` means "apply g first, then f". In an array `[f, g]`, the rightmost function executes first. `reduceRight` traverses from right to left, correctly applying the rightmost function first.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight'],
    tags: ['compose', 'debug', 'reduce', 'reduceRight', 'functional-programming'],
    year: 2025,
  },

  // ─── GENERATOR ───────────────────────────────────────────────────────────────
  {
    id: 'cc-050',
    topic: 'coding-challenges',
    difficulty: 'senior',
    type: 'code-write',
    question:
      'Implement an `idGenerator()` factory using a generator function that returns an infinite sequence of IDs starting from 1.',
    answer: `function* idGenerator(start = 1) {
  let id = start
  while (true) {
    yield id++
  }
}

const gen = idGenerator()
// gen.next().value => 1
// gen.next().value => 2
// ...

// Or as a factory:
function createIdGenerator(prefix = '') {
  const gen = idGenerator()
  return () => \`\${prefix}\${gen.next().value}\`
}`,
    explanation:
      'Generator functions (`function*`) pause at `yield` and resume on `.next()`, enabling lazy infinite sequences without memory issues. The `while (true)` loop is safe because execution is suspended at each `yield`. Generators are useful for unique IDs, pagination, and streaming data.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*'],
    tags: ['generator', 'iterator', 'lazy-evaluation', 'infinite-sequence'],
    year: 2025,
  },

  // ─── CHUNK ───────────────────────────────────────────────────────────────────
  {
    id: 'cc-051',
    topic: 'coding-challenges',
    difficulty: 'junior',
    type: 'code-write',
    question: 'Implement `chunk(arr, size)` that splits an array into chunks of the given size.',
    answer: `function chunk(arr, size) {
  if (size < 1) throw new RangeError('size must be >= 1')
  const result = []
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size))
  }
  return result
}

// chunk([1,2,3,4,5], 2) => [[1,2],[3,4],[5]]`,
    explanation:
      'We iterate with a step of `size`, slicing the array at each interval. `Array.prototype.slice` handles the last chunk gracefully even when fewer elements remain.',
    references: ['https://lodash.com/docs/#chunk'],
    tags: ['array', 'chunk', 'slice'],
    year: 2025,
  },

  // ─── GROUPBY ─────────────────────────────────────────────────────────────────
  {
    id: 'cc-052',
    topic: 'coding-challenges',
    difficulty: 'junior',
    type: 'code-write',
    question:
      'Implement `groupBy(arr, keyFn)` that groups array elements by the result of a key function, returning an object with arrays for each group.',
    answer: `function groupBy(arr, keyFn) {
  return arr.reduce((groups, item) => {
    const key = typeof keyFn === 'function' ? keyFn(item) : item[keyFn]
    ;(groups[key] = groups[key] || []).push(item)
    return groups
  }, {})
}

// groupBy([6.1, 4.2, 6.3], Math.floor) => { '4': [4.2], '6': [6.1, 6.3] }
// groupBy(users, 'role')`,
    explanation:
      '`reduce` accumulates an object. For each item, we compute the key (either by calling the function or accessing the property), create the group array if it doesn\'t exist, then push the item. This is the canonical `_.groupBy` implementation.',
    references: ['https://lodash.com/docs/#groupBy'],
    tags: ['array', 'groupBy', 'reduce', 'functional-programming'],
    year: 2025,
  },

  // ─── INTERSECTION / UNION / DIFFERENCE ───────────────────────────────────────
  {
    id: 'cc-053',
    topic: 'coding-challenges',
    difficulty: 'junior',
    type: 'code-write',
    question:
      'Implement `intersection(a, b)`, `union(a, b)`, and `difference(a, b)` for arrays using Sets for efficiency.',
    answer: `function intersection(a, b) {
  const setB = new Set(b)
  return a.filter(x => setB.has(x))
}

function union(a, b) {
  return [...new Set([...a, ...b])]
}

function difference(a, b) {
  const setB = new Set(b)
  return a.filter(x => !setB.has(x))
}

// intersection([1,2,3], [2,3,4])  => [2,3]
// union([1,2,3], [2,3,4])         => [1,2,3,4]
// difference([1,2,3], [2,3,4])    => [1]`,
    explanation:
      'Converting `b` to a Set makes lookups O(1), giving overall O(n+m) complexity vs O(n*m) for nested loops. `union` spreads both arrays into a Set to deduplicate then spreads back. `difference` returns elements in `a` not found in `b`.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set'],
    tags: ['array', 'Set', 'intersection', 'union', 'difference'],
    year: 2025,
  },

  // ─── OBJECT UTILITIES ────────────────────────────────────────────────────────
  {
    id: 'cc-054',
    topic: 'coding-challenges',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'Implement `pick(obj, keys)` and `omit(obj, keys)` utilities that create a new object with only (or without) the specified keys.',
    answer: `function pick(obj, keys) {
  return keys.reduce((acc, key) => {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      acc[key] = obj[key]
    }
    return acc
  }, {})
}

function omit(obj, keys) {
  const keySet = new Set(keys)
  return Object.keys(obj).reduce((acc, key) => {
    if (!keySet.has(key)) acc[key] = obj[key]
    return acc
  }, {})
}`,
    explanation:
      '`pick` builds an object from only the requested keys, using `hasOwnProperty` to avoid prototype chain properties. `omit` builds from all own keys excluding the specified ones. A Set makes the exclusion check O(1).',
    references: ['https://lodash.com/docs/#pick'],
    tags: ['object', 'pick', 'omit', 'utilities'],
    year: 2025,
  },

  // ─── OBSERVABLE / REACTIVE ───────────────────────────────────────────────────
  {
    id: 'cc-055',
    topic: 'coding-challenges',
    difficulty: 'senior',
    type: 'code-write',
    question:
      'Implement a simple reactive `observable(initialValue)` that allows subscribing to value changes with automatic notification.',
    answer: `function observable(initialValue) {
  let value = initialValue
  const subscribers = new Set()

  return {
    get() { return value },
    set(newValue) {
      if (newValue === value) return
      value = newValue
      subscribers.forEach(fn => fn(value))
    },
    subscribe(fn) {
      subscribers.add(fn)
      return () => subscribers.delete(fn) // unsubscribe
    },
  }
}

// const count = observable(0)
// const unsub = count.subscribe(v => console.log('count changed:', v))
// count.set(1)   // logs: count changed: 1
// unsub()        // no more logs
// count.set(2)`,
    explanation:
      'This is the basis of reactivity in frameworks like Vue 2 and MobX. A Set of subscribers is notified on each `set` call. Returning the subscriber from `subscribe` as a cleanup function is a common pattern (mirroring React\'s `useEffect` cleanup). Skipping unchanged values prevents unnecessary renders.',
    references: ['https://www.patterns.dev/vanilla/observer-pattern/'],
    tags: ['observable', 'reactive', 'pub-sub', 'design-patterns'],
    year: 2025,
  },

  // ─── QUEUE / STACK ───────────────────────────────────────────────────────────
  {
    id: 'cc-056',
    topic: 'coding-challenges',
    difficulty: 'junior',
    type: 'code-write',
    question:
      'Implement a `Queue` class with `enqueue(value)`, `dequeue()`, `peek()`, `size`, and `isEmpty` that provides O(1) enqueue and dequeue.',
    answer: `class Queue {
  constructor() {
    this._store = {}
    this._head = 0
    this._tail = 0
  }

  enqueue(value) {
    this._store[this._tail++] = value
  }

  dequeue() {
    if (this.isEmpty) return undefined
    const value = this._store[this._head]
    delete this._store[this._head++]
    return value
  }

  peek() {
    return this._store[this._head]
  }

  get size() { return this._tail - this._head }
  get isEmpty() { return this.size === 0 }
}`,
    explanation:
      'Using a plain object with head/tail pointers achieves O(1) for both enqueue and dequeue, avoiding the O(n) cost of `Array.prototype.shift`. Indices advance monotonically; `delete` removes stale references to avoid memory leaks.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map'],
    tags: ['queue', 'data-structures', 'O(1)'],
    year: 2025,
  },

  // ─── ASYNC CONCURRENCY ───────────────────────────────────────────────────────
  {
    id: 'cc-057',
    topic: 'coding-challenges',
    difficulty: 'senior',
    type: 'code-write',
    question:
      'Implement `concurrentLimit(tasks, limit)` that runs an array of async task functions with a maximum concurrency of `limit`, returning all results in order.',
    answer: `async function concurrentLimit(tasks, limit) {
  const results = new Array(tasks.length)
  let currentIndex = 0

  async function worker() {
    while (currentIndex < tasks.length) {
      const index = currentIndex++
      results[index] = await tasks[index]()
    }
  }

  const workers = Array.from({ length: Math.min(limit, tasks.length) }, worker)
  await Promise.all(workers)
  return results
}

// Usage:
// const fetchers = urls.map(url => () => fetch(url).then(r => r.json()))
// const results = await concurrentLimit(fetchers, 3) // max 3 concurrent`,
    explanation:
      'We create `limit` concurrent "worker" coroutines, each of which picks tasks from the shared queue (controlled by `currentIndex`) until exhausted. This provides a natural work-stealing approach. Results are stored at their original index for ordering.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all'],
    tags: ['async', 'concurrency', 'rate-limiting', 'promise', 'worker-pool'],
    year: 2025,
  },

  // ─── SERIALIZATION ───────────────────────────────────────────────────────────
  {
    id: 'cc-058',
    topic: 'coding-challenges',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'Implement `serialize(obj)` and `deserialize(str)` that handle `undefined`, functions, Date, and circular references — things `JSON.stringify` cannot handle.',
    answer: `function serialize(obj) {
  const seen = new WeakMap()
  let counter = 0

  return JSON.stringify(obj, function replacer(key, value) {
    if (typeof value === 'undefined') return '__UNDEFINED__'
    if (typeof value === 'function') return \`__FUNCTION__:\${value.toString()}\`
    if (value instanceof Date) return \`__DATE__:\${value.toISOString()}\`
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) return \`__CIRCULAR_\${seen.get(value)}__\`
      seen.set(value, counter++)
    }
    return value
  })
}

function deserialize(str) {
  return JSON.parse(str, function reviver(key, value) {
    if (value === '__UNDEFINED__') return undefined
    if (typeof value === 'string' && value.startsWith('__DATE__:')) {
      return new Date(value.slice(9))
    }
    if (typeof value === 'string' && value.startsWith('__FUNCTION__:')) {
      // eslint-disable-next-line no-new-func
      return new Function('return ' + value.slice(13))()
    }
    return value
  })
}`,
    explanation:
      'We use JSON replacer/reviver functions to encode special values as tagged strings. Circular references are detected with a WeakMap and encoded as a placeholder. Deserializing functions with `new Function` is powerful but carries security implications — only use with trusted input.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify'],
    tags: ['serialization', 'JSON', 'circular-references', 'Date', 'reviver'],
    year: 2025,
  },

  // ─── OBJECT FLATTEN ──────────────────────────────────────────────────────────
  {
    id: 'cc-059',
    topic: 'coding-challenges',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'Implement `flattenObject(obj)` that flattens a nested object into a single-level object with dot-notation keys.',
    answer: `function flattenObject(obj, prefix = '', result = {}) {
  for (const key of Object.keys(obj)) {
    const fullKey = prefix ? \`\${prefix}.\${key}\` : key
    const value = obj[key]
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      flattenObject(value, fullKey, result)
    } else {
      result[fullKey] = value
    }
  }
  return result
}

// flattenObject({ a: { b: { c: 1 }, d: 2 }, e: 3 })
// => { 'a.b.c': 1, 'a.d': 2, 'e': 3 }`,
    explanation:
      'We recursively traverse object properties. When a value is a non-null, non-array object we recurse with the accumulated prefix. Arrays are treated as leaf values (not flattened) which is the typical behavior. The `result` accumulator is passed by reference to avoid creating many intermediate objects.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in'],
    tags: ['object', 'flatten', 'recursion', 'dot-notation'],
    year: 2025,
  },

  // ─── UNFLATTEN OBJECT ────────────────────────────────────────────────────────
  {
    id: 'cc-060',
    topic: 'coding-challenges',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'Implement `unflattenObject(obj)` that is the inverse of `flattenObject` — reconstructing nested objects from dot-notation keys.',
    answer: `function unflattenObject(obj) {
  const result = {}
  for (const [key, value] of Object.entries(obj)) {
    const parts = key.split('.')
    let current = result
    for (let i = 0; i < parts.length - 1; i++) {
      if (!(parts[i] in current) || typeof current[parts[i]] !== 'object') {
        current[parts[i]] = {}
      }
      current = current[parts[i]]
    }
    current[parts[parts.length - 1]] = value
  }
  return result
}

// unflattenObject({ 'a.b.c': 1, 'a.d': 2, 'e': 3 })
// => { a: { b: { c: 1 }, d: 2 }, e: 3 }`,
    explanation:
      'We split each dot-notation key into path segments, then traverse/create nested objects for all but the last segment. The last segment receives the value. Overwriting non-object values at intermediate nodes ensures correct reconstruction when keys conflict.',
    references: ['https://lodash.com/docs/#set'],
    tags: ['object', 'unflatten', 'dot-notation', 'recursion'],
    year: 2025,
  },

  // ─── LINKED LIST ─────────────────────────────────────────────────────────────
  {
    id: 'cc-061',
    topic: 'coding-challenges',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'Implement a singly `LinkedList` class with `push(val)`, `pop()`, `shift()`, `unshift(val)`, and `toArray()` methods.',
    answer: `class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val) {
    const node = new Node(val)
    if (!this.tail) { this.head = this.tail = node }
    else { this.tail.next = node; this.tail = node }
    this.length++
    return this
  }

  pop() {
    if (!this.head) return undefined
    if (this.head === this.tail) {
      const val = this.head.val
      this.head = this.tail = null
      this.length--
      return val
    }
    let current = this.head
    while (current.next !== this.tail) current = current.next
    const val = this.tail.val
    current.next = null
    this.tail = current
    this.length--
    return val
  }

  unshift(val) {
    const node = new Node(val)
    if (!this.head) { this.head = this.tail = node }
    else { node.next = this.head; this.head = node }
    this.length++
    return this
  }

  shift() {
    if (!this.head) return undefined
    const val = this.head.val
    this.head = this.head.next
    if (!this.head) this.tail = null
    this.length--
    return val
  }

  toArray() {
    const result = []
    let current = this.head
    while (current) { result.push(current.val); current = current.next }
    return result
  }
}`,
    explanation:
      'A linked list is a chain of nodes where each points to the next. Maintaining both `head` and `tail` references makes `push` and `unshift` O(1). `pop` is O(n) for singly linked lists since we must traverse to find the second-to-last node. A doubly linked list would make all operations O(1).',
    references: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array'],
    tags: ['linked-list', 'data-structures', 'pointer'],
    year: 2025,
  },

  // ─── TRIE ────────────────────────────────────────────────────────────────────
  {
    id: 'cc-062',
    topic: 'coding-challenges',
    difficulty: 'lead',
    type: 'code-write',
    question:
      'Implement a `Trie` data structure with `insert(word)`, `search(word)`, and `startsWith(prefix)` methods.',
    answer: `class TrieNode {
  constructor() {
    this.children = new Map()
    this.isEnd = false
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode()
  }

  insert(word) {
    let node = this.root
    for (const ch of word) {
      if (!node.children.has(ch)) node.children.set(ch, new TrieNode())
      node = node.children.get(ch)
    }
    node.isEnd = true
  }

  search(word) {
    const node = this._traverse(word)
    return node !== null && node.isEnd
  }

  startsWith(prefix) {
    return this._traverse(prefix) !== null
  }

  _traverse(str) {
    let node = this.root
    for (const ch of str) {
      if (!node.children.has(ch)) return null
      node = node.children.get(ch)
    }
    return node
  }
}`,
    explanation:
      'A Trie (prefix tree) stores strings as paths from root to leaf nodes. Each node holds a Map of child nodes keyed by character and an `isEnd` flag. `insert`, `search`, and `startsWith` are all O(m) where m is the string length. Tries excel at autocomplete, spell-check, and prefix search.',
    references: ['https://leetcode.com/problems/implement-trie-prefix-tree/'],
    tags: ['trie', 'prefix-tree', 'data-structures', 'autocomplete'],
    year: 2025,
  },

  // ─── ONCE ────────────────────────────────────────────────────────────────────
  {
    id: 'cc-063',
    topic: 'coding-challenges',
    difficulty: 'junior',
    type: 'code-write',
    question:
      'Implement `once(fn)` that returns a function which calls `fn` at most once. Subsequent calls return the result of the first invocation.',
    answer: `function once(fn) {
  let called = false
  let result
  return function (...args) {
    if (!called) {
      called = true
      result = fn.apply(this, args)
    }
    return result
  }
}

// const initialize = once(() => { console.log('init'); return 42 })
// initialize() // logs 'init', returns 42
// initialize() // returns 42 (no log)`,
    explanation:
      'The closure captures `called` and `result`. After the first invocation `called` becomes true and subsequent calls skip the function body, returning the cached result. This pattern is useful for lazy initialization and ensuring side-effectful setup code runs only once.',
    references: ['https://lodash.com/docs/#once'],
    tags: ['once', 'closures', 'higher-order-functions', 'memoize'],
    year: 2025,
  },

  // ─── PARTIAL APPLICATION ─────────────────────────────────────────────────────
  {
    id: 'cc-064',
    topic: 'coding-challenges',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'Implement `partial(fn, ...presetArgs)` that returns a new function with some arguments pre-filled. Support a placeholder `_` to fill arguments positionally.',
    answer: `const _ = Symbol('placeholder')

function partial(fn, ...presetArgs) {
  return function (...laterArgs) {
    let laterIdx = 0
    const finalArgs = presetArgs.map(arg =>
      arg === _ ? laterArgs[laterIdx++] : arg
    )
    // Append any remaining laterArgs not used as placeholders
    while (laterIdx < laterArgs.length) finalArgs.push(laterArgs[laterIdx++])
    return fn.apply(this, finalArgs)
  }
}

// const greet = (greeting, firstName, lastName) => \`\${greeting}, \${firstName} \${lastName}!\`
// const sayHi = partial(greet, 'Hi', _, 'Smith')
// sayHi('John') // 'Hi, John Smith!'`,
    explanation:
      'The placeholder `_` (a unique Symbol) marks positions to be filled by later arguments. During invocation, preset args are mapped: placeholders are replaced by later args in order, and non-placeholder presets are kept. Any remaining later args are appended.',
    references: ['https://lodash.com/docs/#partial'],
    tags: ['partial', 'partial-application', 'functional-programming', 'placeholder'],
    year: 2025,
  },

  // ─── LAZY EVALUATION ─────────────────────────────────────────────────────────
  {
    id: 'cc-065',
    topic: 'coding-challenges',
    difficulty: 'senior',
    type: 'code-write',
    question:
      'Implement a `lazy(fn)` wrapper that defers function execution until the result is first accessed (via `.value`), then caches it.',
    answer: `function lazy(fn) {
  let evaluated = false
  let result
  return {
    get value() {
      if (!evaluated) {
        result = fn()
        evaluated = true
      }
      return result
    }
  }
}

// const expensiveComputation = lazy(() => {
//   console.log('computing...')
//   return Array.from({ length: 1e6 }, (_, i) => i).reduce((a, b) => a + b, 0)
// })
// // No computation yet
// console.log(expensiveComputation.value) // 'computing...' then 499999500000
// console.log(expensiveComputation.value) // 499999500000 (cached, no log)`,
    explanation:
      'The getter pattern with `get value()` allows transparent property access syntax while hiding the lazy evaluation logic. The first access triggers computation; subsequent accesses return the cached value. This is the essence of lazy initialization and is used in frameworks for expensive computed properties.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get'],
    tags: ['lazy-evaluation', 'getter', 'memoize', 'optimization'],
    year: 2025,
  },

  // ─── COMPLEXITY MCQ ──────────────────────────────────────────────────────────
  {
    id: 'cc-066',
    topic: 'coding-challenges',
    difficulty: 'mid',
    type: 'mcq',
    question:
      'What are the time and space complexities of a naive recursive Fibonacci implementation `fib(n)`?',
    options: [
      'Time: O(n), Space: O(n)',
      'Time: O(2^n), Space: O(n)',
      'Time: O(n log n), Space: O(log n)',
      'Time: O(2^n), Space: O(2^n)',
    ],
    answer: 1,
    explanation:
      'Each call branches into two sub-calls, forming a binary tree of height n — hence O(2^n) time. However the call stack depth is O(n) (only one branch is active at a time), making space O(n). Memoization reduces time to O(n) and space remains O(n).',
    references: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#recursion'],
    tags: ['fibonacci', 'recursion', 'time-complexity', 'space-complexity', 'big-o'],
    year: 2025,
  },
  {
    id: 'cc-067',
    topic: 'coding-challenges',
    difficulty: 'mid',
    type: 'mcq',
    question:
      'A `debounce` with 300ms delay is used on a search input. The user types 10 characters with 100ms between each keypress. How many times does the debounced function fire?',
    options: ['10 times', '1 time', '3 times', '0 times'],
    answer: 1,
    explanation:
      'Since each keypress resets the 300ms timer, and the user types a new character every 100ms (less than the delay), the timer is continuously reset. Only after the final keypress, when 300ms elapses with no further input, does the function fire exactly once.',
    references: ['https://css-tricks.com/debouncing-throttling-explained-examples/'],
    tags: ['debounce', 'timing', 'concept'],
    year: 2025,
  },

  // ─── DEBUG PROMISES ──────────────────────────────────────────────────────────
  {
    id: 'cc-068',
    topic: 'coding-challenges',
    difficulty: 'mid',
    type: 'debug',
    question: 'This `promiseAll` implementation has a subtle bug. Find and fix it.',
    code: `function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = []
    let remaining = promises.length

    promises.forEach((p, i) => {
      Promise.resolve(p).then(value => {
        results.push(value)  // Bug here
        remaining--
        if (remaining === 0) resolve(results)
      }).catch(reject)
    })
  })
}`,
    answer: `// Bug: using results.push(value) instead of results[i] = value.
// Because promises resolve asynchronously and in arbitrary order,
// the results array will NOT maintain the original input order.

function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (!promises.length) return resolve([])
    const results = new Array(promises.length)
    let remaining = promises.length

    promises.forEach((p, i) => {
      Promise.resolve(p).then(value => {
        results[i] = value   // <-- store at original index
        remaining--
        if (remaining === 0) resolve(results)
      }).catch(reject)
    })
  })
}`,
    explanation:
      '`Promise.all` guarantees output order matches input order regardless of resolution order. Using `push` appends values as they arrive, so the fastest-resolving promise appears first. The fix is to assign at the original index `i`.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all'],
    tags: ['promise', 'Promise.all', 'debug', 'order', 'async'],
    year: 2025,
  },

  // ─── TREE TRAVERSAL ──────────────────────────────────────────────────────────
  {
    id: 'cc-069',
    topic: 'coding-challenges',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'Given a tree node `{ val, children: [] }`, implement `bfs(root)` (breadth-first) and `dfs(root)` (depth-first pre-order) that return arrays of node values.',
    answer: `function bfs(root) {
  if (!root) return []
  const result = []
  const queue = [root]
  while (queue.length) {
    const node = queue.shift()
    result.push(node.val)
    for (const child of node.children) queue.push(child)
  }
  return result
}

function dfs(root) {
  if (!root) return []
  const result = []
  function traverse(node) {
    result.push(node.val)
    for (const child of node.children) traverse(child)
  }
  traverse(root)
  return result
}

// Iterative DFS (avoids call stack overflow on deep trees):
function dfsIterative(root) {
  if (!root) return []
  const result = []
  const stack = [root]
  while (stack.length) {
    const node = stack.pop()
    result.push(node.val)
    for (let i = node.children.length - 1; i >= 0; i--) stack.push(node.children[i])
  }
  return result
}`,
    explanation:
      'BFS uses a queue (FIFO) to visit nodes level by level. DFS uses a stack (LIFO) — naturally implemented via recursion or explicitly with an array. The iterative DFS pushes children in reverse order so the leftmost child is processed first (matching recursive pre-order).',
    references: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift'],
    tags: ['tree', 'BFS', 'DFS', 'traversal', 'queue', 'stack'],
    year: 2025,
  },

  // ─── TRUE/FALSE ──────────────────────────────────────────────────────────────
  {
    id: 'cc-070',
    topic: 'coding-challenges',
    difficulty: 'junior',
    type: 'true-false',
    question:
      '`structuredClone()` is a built-in browser/Node.js function that performs a deep clone, correctly handling circular references, Dates, Maps, and Sets.',
    answer: true,
    explanation:
      '`structuredClone` (available in browsers since ~2022 and Node.js 17+) uses the structured clone algorithm to deep-copy most built-in types including Date, RegExp, Map, Set, ArrayBuffer, and handles circular references. It does NOT clone functions, DOM nodes, or class instances with custom methods.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/API/structuredClone'],
    tags: ['structuredClone', 'deep-clone', 'browser-api'],
    year: 2025,
  },
  {
    id: 'cc-071',
    topic: 'coding-challenges',
    difficulty: 'junior',
    type: 'true-false',
    question:
      'Closures in JavaScript cause memory leaks if you create functions inside loops without cleaning up references.',
    answer: true,
    explanation:
      'Closures retain references to their outer scope. If a closure captures a large object and is stored somewhere long-lived (e.g., an event listener that is never removed), the captured object cannot be garbage collected. This is a common source of memory leaks in single-page applications.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#performance_considerations'],
    tags: ['closures', 'memory-leaks', 'garbage-collection'],
    year: 2025,
  },

  // ─── OBJECT FREEZE DEEP ──────────────────────────────────────────────────────
  {
    id: 'cc-072',
    topic: 'coding-challenges',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'Implement `deepFreeze(obj)` that recursively applies `Object.freeze` to make an object and all its nested properties immutable.',
    answer: `function deepFreeze(obj) {
  if (obj === null || typeof obj !== 'object') return obj
  Object.freeze(obj)
  for (const key of Object.keys(obj)) {
    if (typeof obj[key] === 'object' && obj[key] !== null && !Object.isFrozen(obj[key])) {
      deepFreeze(obj[key])
    }
  }
  return obj
}`,
    explanation:
      '`Object.freeze` is shallow — it only prevents modification of direct properties. For deep immutability we recursively freeze all nested objects. The `Object.isFrozen` check avoids redundant work on already-frozen objects and prevents infinite loops on circular references.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze'],
    tags: ['Object.freeze', 'immutability', 'deep-freeze', 'recursion'],
    year: 2025,
  },
]
