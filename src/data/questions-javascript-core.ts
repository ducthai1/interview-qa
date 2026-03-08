import type { Question } from '../types'

export const javascriptCoreQuestions: Question[] = [
  // ─── ES6+ FEATURES ───────────────────────────────────────────────────────────
  {
    id: 'js-core-001',
    topic: 'javascript-core',
    difficulty: 'junior',
    type: 'mcq',
    question: 'What is the key difference between `var`, `let`, and `const` in JavaScript?',
    options: [
      '`var` is function-scoped and hoisted; `let`/`const` are block-scoped and not hoisted',
      '`var` is block-scoped; `let`/`const` are function-scoped',
      '`var` is function-scoped and hoisted; `let`/`const` are block-scoped and enter the Temporal Dead Zone (TDZ) before their declaration',
      '`const` cannot hold objects or arrays',
    ],
    answer: 2,
    explanation:
      '`var` declarations are hoisted to the top of their function scope and initialised to `undefined`. `let` and `const` are block-scoped and are also hoisted, but they are placed in the Temporal Dead Zone (TDZ) — accessing them before the declaration throws a ReferenceError. `const` additionally requires an initialiser and prevents reassignment of the binding, though the value itself is still mutable if it is an object or array.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz',
    ],
    tags: ['var', 'let', 'const', 'hoisting', 'tdz', 'scope'],
    year: 2025,
  },
  {
    id: 'js-core-002',
    topic: 'javascript-core',
    difficulty: 'junior',
    type: 'code-output',
    question: 'What does this code output?',
    code: `const person = { name: 'Alice', age: 30 }
const { name, age, city = 'Unknown' } = person
console.log(name, age, city)`,
    options: [
      `'Alice' 30 undefined`,
      `'Alice' 30 'Unknown'`,
      `ReferenceError`,
      `'Alice' 30 null`,
    ],
    answer: 1,
    explanation:
      'Object destructuring allows default values with `= value`. Since `city` does not exist on `person`, the default `"Unknown"` is used. `name` and `age` are extracted normally.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment',
    ],
    tags: ['destructuring', 'default-values', 'es6'],
    year: 2025,
  },
  {
    id: 'js-core-003',
    topic: 'javascript-core',
    difficulty: 'junior',
    type: 'code-output',
    question: 'What is the output?',
    code: `const arr = [1, 2, 3]
const arr2 = [0, ...arr, 4]
console.log(arr2)`,
    options: [
      '[0, [1, 2, 3], 4]',
      '[0, 1, 2, 3, 4]',
      '[1, 2, 3, 0, 4]',
      'TypeError',
    ],
    answer: 1,
    explanation:
      'The spread operator `...` expands an iterable in-place. `[0, ...arr, 4]` creates a new array containing `0`, then each element of `arr`, then `4`.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax',
    ],
    tags: ['spread', 'arrays', 'es6'],
    year: 2025,
  },
  {
    id: 'js-core-004',
    topic: 'javascript-core',
    difficulty: 'junior',
    type: 'mcq',
    question: 'Which statement about arrow functions is INCORRECT?',
    options: [
      'Arrow functions do not have their own `this` binding',
      'Arrow functions cannot be used as constructors',
      'Arrow functions do not have an `arguments` object',
      'Arrow functions can be used as generator functions with `function*` syntax',
    ],
    answer: 3,
    explanation:
      'Arrow functions cannot be generator functions — the `function*` syntax is required for generators and cannot be combined with the arrow syntax. The other three statements are all correct: arrow functions inherit `this` lexically, cannot be called with `new`, and lack an `arguments` object.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions',
    ],
    tags: ['arrow-functions', 'this', 'generators', 'es6'],
    year: 2025,
  },
  {
    id: 'js-core-005',
    topic: 'javascript-core',
    difficulty: 'mid',
    type: 'code-output',
    question: 'What is the output?',
    code: `const key = 'score'
const value = 42
const obj = { [key]: value, [\`best_\${key}\`]: value * 2 }
console.log(obj)`,
    options: [
      `{ key: 42, 'best_key': 84 }`,
      `{ score: 42, best_score: 84 }`,
      `{ '[key]': 42, '[best_key]': 84 }`,
      'SyntaxError',
    ],
    answer: 1,
    explanation:
      'Computed property names allow any expression inside `[]` to become a property key. Template literals can also be used inside computed property names. `[key]` evaluates to `"score"` and `` [`best_${key}`] `` evaluates to `"best_score"`.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names',
    ],
    tags: ['computed-properties', 'template-literals', 'es6'],
    year: 2025,
  },
  {
    id: 'js-core-006',
    topic: 'javascript-core',
    difficulty: 'junior',
    type: 'code-output',
    question: 'What does optional chaining return when accessing a missing property?',
    code: `const user = { profile: null }
const city = user?.profile?.address?.city
console.log(city)`,
    options: ['null', 'undefined', 'TypeError', 'ReferenceError'],
    answer: 1,
    explanation:
      '`?.` (optional chaining) short-circuits and returns `undefined` if any part of the chain is `null` or `undefined`. It does NOT return `null` even though `profile` is `null`.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining',
    ],
    tags: ['optional-chaining', 'es2020', 'null-safety'],
    year: 2025,
  },
  {
    id: 'js-core-007',
    topic: 'javascript-core',
    difficulty: 'junior',
    type: 'code-output',
    question: 'What is the output?',
    code: `const a = null
const b = undefined
const c = 0
const d = ''
console.log(a ?? 'A', b ?? 'B', c ?? 'C', d ?? 'D')`,
    options: [
      `'A' 'B' 'C' 'D'`,
      `'A' 'B' 0 ''`,
      `null undefined 0 ''`,
      `'A' 'B' 0 'D'`,
    ],
    answer: 1,
    explanation:
      'The nullish coalescing operator `??` only falls back to the right-hand side when the left is `null` or `undefined`. Falsy values like `0` and `""` are NOT treated as nullish, so they pass through unchanged.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing',
    ],
    tags: ['nullish-coalescing', 'es2020', 'falsy'],
    year: 2025,
  },
  {
    id: 'js-core-008',
    topic: 'javascript-core',
    difficulty: 'mid',
    type: 'mcq',
    question: 'Which of the following is true about ES modules compared to CommonJS?',
    options: [
      'ES modules are synchronous; CommonJS is asynchronous',
      'ES modules are statically analysed at parse time; CommonJS `require()` is dynamic and runs at runtime',
      'ES modules do not support default exports',
      'CommonJS `module.exports` and ES module `export default` are fully interchangeable',
    ],
    answer: 1,
    explanation:
      'ES module `import`/`export` statements are parsed statically before code runs, enabling tree-shaking and circular-dependency detection. CommonJS `require()` is a runtime function call and can be conditional. This is the fundamental architectural difference between the two module systems.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules',
    ],
    tags: ['esm', 'commonjs', 'modules', 'static-analysis'],
    year: 2025,
  },

  // ─── CLOSURES & SCOPE ────────────────────────────────────────────────────────
  {
    id: 'js-core-009',
    topic: 'javascript-core',
    difficulty: 'mid',
    type: 'code-output',
    question: 'What is the output?',
    code: `for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0)
}`,
    options: ['0 1 2', '3 3 3', '0 0 0', 'undefined undefined undefined'],
    answer: 1,
    explanation:
      '`var` is function-scoped, so all three callbacks close over the same `i`. By the time the event loop runs the timeouts, the loop has completed and `i` is `3`. To log `0 1 2`, use `let` (which creates a new binding per iteration) or an IIFE.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures',
    ],
    tags: ['closures', 'var', 'scope', 'settimeout', 'event-loop'],
    year: 2025,
  },
  {
    id: 'js-core-010',
    topic: 'javascript-core',
    difficulty: 'mid',
    type: 'code-output',
    question: 'What does the following counter closure output?',
    code: `function makeCounter(start = 0) {
  let count = start
  return {
    increment() { return ++count },
    decrement() { return --count },
    value()     { return count },
  }
}
const c = makeCounter(10)
c.increment()
c.increment()
c.decrement()
console.log(c.value())`,
    options: ['10', '11', '12', '9'],
    answer: 1,
    explanation:
      'The counter starts at 10. Two `increment()` calls raise it to 12. One `decrement()` call lowers it to 11. All three methods share the same `count` variable via closure.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures',
    ],
    tags: ['closures', 'module-pattern', 'encapsulation'],
    year: 2026,
  },
  {
    id: 'js-core-011',
    topic: 'javascript-core',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is the Temporal Dead Zone (TDZ)?',
    options: [
      'A period where `var` variables are `undefined`',
      'The time between the start of a block scope and the `let`/`const` declaration where accessing the variable throws a ReferenceError',
      'A garbage-collection phase that removes unused closures',
      'A browser optimisation that defers variable initialisation',
    ],
    answer: 1,
    explanation:
      'When a block is entered, `let` and `const` bindings are created but not initialised. This window — from block entry to the declaration line — is the TDZ. Any read or write to the binding during the TDZ throws `ReferenceError: Cannot access "x" before initialization`. This is distinct from `var`, which is initialised to `undefined` at hoist time.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz',
    ],
    tags: ['tdz', 'let', 'const', 'hoisting', 'scope'],
    year: 2025,
  },

  // ─── PROTOTYPES & INHERITANCE ────────────────────────────────────────────────
  {
    id: 'js-core-012',
    topic: 'javascript-core',
    difficulty: 'mid',
    type: 'code-output',
    question: 'What is the output?',
    code: `function Animal(name) {
  this.name = name
}
Animal.prototype.speak = function () {
  return \`\${this.name} makes a sound\`
}

function Dog(name) {
  Animal.call(this, name)
}
Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog
Dog.prototype.speak = function () {
  return \`\${this.name} barks\`
}

const d = new Dog('Rex')
console.log(d.speak())
console.log(d instanceof Animal)`,
    options: [
      `'Rex makes a sound' true`,
      `'Rex barks' false`,
      `'Rex barks' true`,
      `TypeError`,
    ],
    answer: 2,
    explanation:
      '`Dog.prototype` is set to a new object whose prototype is `Animal.prototype`, establishing the prototype chain. `Dog.prototype.speak` shadows `Animal.prototype.speak`, so `"Rex barks"` is returned. Because the chain includes `Animal.prototype`, `d instanceof Animal` is `true`.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain',
    ],
    tags: ['prototypes', 'inheritance', 'instanceof', 'constructor'],
    year: 2025,
  },
  {
    id: 'js-core-013',
    topic: 'javascript-core',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What does `Object.create(null)` produce compared to `{}`?',
    options: [
      'They are identical — both create an empty object',
      '`Object.create(null)` creates an object with no prototype, so it does not inherit `toString`, `hasOwnProperty`, etc.',
      '`Object.create(null)` throws a TypeError',
      '`Object.create(null)` creates a frozen object',
    ],
    answer: 1,
    explanation:
      'Ordinary object literals (`{}`) have `Object.prototype` as their prototype, giving them methods like `toString`, `valueOf`, and `hasOwnProperty`. `Object.create(null)` explicitly sets the prototype to `null`, producing a "pure dictionary" with no inherited properties — useful for safe key-value stores that avoid prototype pollution attacks.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create',
    ],
    tags: ['prototypes', 'object-create', 'prototype-pollution', 'security'],
    year: 2025,
  },
  {
    id: 'js-core-014',
    topic: 'javascript-core',
    difficulty: 'mid',
    type: 'mcq',
    question: 'Which ES6 class feature allows calling a parent class method from a child?',
    options: [
      '`this.super()`',
      '`parent.method()`',
      '`super.method()`',
      '`prototype.method.call(this)`',
    ],
    answer: 2,
    explanation:
      '`super.methodName()` calls the method defined on the parent class\'s prototype. In a constructor you must call `super()` before accessing `this`. `super` is a special keyword, not a regular object reference.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super',
    ],
    tags: ['class', 'super', 'inheritance', 'es6'],
    year: 2025,
  },

  // ─── EVENT LOOP / MICROTASKS / MACROTASKS ───────────────────────────────────
  {
    id: 'js-core-015',
    topic: 'javascript-core',
    difficulty: 'mid',
    type: 'code-output',
    question: 'What is the order of console outputs?',
    code: `console.log('1')
setTimeout(() => console.log('2'), 0)
Promise.resolve().then(() => console.log('3'))
console.log('4')`,
    options: ['1 2 3 4', '1 4 2 3', '1 4 3 2', '1 3 4 2'],
    answer: 2,
    explanation:
      'Synchronous code runs first: `1` then `4`. After the call stack empties, the microtask queue drains before any macrotask runs. `Promise.resolve().then(...)` is a microtask, so `3` prints next. `setTimeout` callback is a macrotask, so `2` prints last. Order: 1 → 4 → 3 → 2.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide',
    ],
    tags: ['event-loop', 'microtasks', 'macrotasks', 'promise', 'settimeout'],
    year: 2025,
  },
  {
    id: 'js-core-016',
    topic: 'javascript-core',
    difficulty: 'senior',
    type: 'code-output',
    question: 'What is the output order?',
    code: `async function main() {
  console.log('A')
  await Promise.resolve()
  console.log('B')
}
console.log('C')
main()
console.log('D')`,
    options: ['C A D B', 'A C D B', 'C A B D', 'A B C D'],
    answer: 0,
    explanation:
      '`C` logs synchronously. `main()` is called: `A` logs, then `await` suspends `main` as a microtask. `D` logs synchronously. The call stack empties, microtask queue runs, resuming `main`, so `B` logs last. Order: C → A → D → B.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await',
    ],
    tags: ['async-await', 'event-loop', 'microtasks'],
    year: 2025,
  },
  {
    id: 'js-core-017',
    topic: 'javascript-core',
    difficulty: 'senior',
    type: 'mcq',
    question: 'Which of these is processed in the microtask queue?',
    options: [
      '`setTimeout` callbacks',
      '`setInterval` callbacks',
      '`Promise.then()` callbacks and `queueMicrotask()`',
      '`requestAnimationFrame` callbacks',
    ],
    answer: 2,
    explanation:
      'The microtask queue is drained completely after each task (macrotask) before the next macrotask runs. It processes: resolved Promise callbacks (`.then`, `.catch`, `.finally`), `queueMicrotask()`, and `MutationObserver` callbacks. `setTimeout`, `setInterval`, and `requestAnimationFrame` all schedule macrotasks (or rendering tasks).',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth',
    ],
    tags: ['event-loop', 'microtasks', 'promise', 'macrotasks'],
    year: 2025,
  },

  // ─── PROMISES & ASYNC/AWAIT ──────────────────────────────────────────────────
  {
    id: 'js-core-018',
    topic: 'javascript-core',
    difficulty: 'mid',
    type: 'code-output',
    question: 'What does `Promise.allSettled` return for the following calls?',
    code: `const p1 = Promise.resolve(1)
const p2 = Promise.reject('err')
const p3 = Promise.resolve(3)

Promise.allSettled([p1, p2, p3]).then(results => {
  console.log(results.map(r => r.status))
})`,
    options: [
      `['fulfilled', 'fulfilled', 'fulfilled']`,
      `['fulfilled', 'rejected', 'fulfilled']`,
      `Throws an unhandled rejection`,
      `['resolved', 'rejected', 'resolved']`,
    ],
    answer: 1,
    explanation:
      '`Promise.allSettled()` never rejects. It waits for all promises to settle and returns an array of result objects each with a `status` field: either `"fulfilled"` (with `value`) or `"rejected"` (with `reason`). This is the key difference from `Promise.all()`, which short-circuits on the first rejection.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled',
    ],
    tags: ['promise', 'allSettled', 'error-handling', 'es2020'],
    year: 2025,
  },
  {
    id: 'js-core-019',
    topic: 'javascript-core',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is the difference between `Promise.all()` and `Promise.race()`?',
    options: [
      '`Promise.all` resolves when the first promise resolves; `Promise.race` waits for all',
      '`Promise.all` waits for all promises to resolve and rejects immediately on any rejection; `Promise.race` resolves/rejects as soon as the first promise settles',
      '`Promise.race` only works with resolved promises; `Promise.all` handles rejections',
      'They are identical except for naming',
    ],
    answer: 1,
    explanation:
      '`Promise.all([...])` resolves with an array of values once every promise fulfils, but rejects immediately with the first rejection reason (other promises are not cancelled). `Promise.race([...])` settles — either fulfils or rejects — as soon as any single promise in the array settles first.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all',
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race',
    ],
    tags: ['promise', 'Promise.all', 'Promise.race', 'concurrency'],
    year: 2025,
  },
  {
    id: 'js-core-020',
    topic: 'javascript-core',
    difficulty: 'mid',
    type: 'debug',
    question: 'This async function has a bug — the error is never caught. Fix it.',
    code: `async function fetchData(url) {
  const res = await fetch(url)
  const data = res.json()    // bug here
  return data
}

fetchData('https://api.example.com/data')
  .then(d => console.log(d))
  .catch(e => console.error(e))`,
    options: [
      'Add `try/catch` inside `fetchData`',
      'Await `res.json()`: change to `const data = await res.json()`',
      'Remove `.catch()` from the call site',
      'Change `async function` to a regular function',
    ],
    answer: 1,
    solutionCode: `async function fetchData(url) {
  const res = await fetch(url)
  if (!res.ok) throw new Error(\`HTTP error: \${res.status}\`)
  const data = await res.json()    // fixed: added await
  return data
}

fetchData('https://api.example.com/data')
  .then(d => console.log(d))
  .catch(e => console.error(e))`,
    explanation:
      '`res.json()` returns a Promise. Without `await`, `data` is a pending Promise rather than the parsed JSON. The fix is `const data = await res.json()`. Additionally, `res.ok` should be checked before parsing to handle HTTP errors, which `fetch` does not reject on by itself.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/Response/json',
    ],
    tags: ['async-await', 'fetch', 'debug', 'promise'],
    year: 2025,
  },
  {
    id: 'js-core-021',
    topic: 'javascript-core',
    difficulty: 'senior',
    type: 'mcq',
    question: 'Which approach correctly runs three async operations in parallel and collects results?',
    options: [
      `async function run() {
  const a = await fetchA()
  const b = await fetchB()
  const c = await fetchC()
  return [a, b, c]
}`,
      `async function run() {
  const [a, b, c] = await Promise.all([fetchA(), fetchB(), fetchC()])
  return [a, b, c]
}`,
      'Both are equivalent in performance',
      'Neither is correct — async/await cannot be combined with Promise.all',
    ],
    answer: 1,
    explanation:
      'Option A runs operations serially: each `await` waits for the previous to finish before starting the next, so total time is the sum of all durations. Option B starts all three concurrently by creating all Promises before awaiting them via `Promise.all`, so total time is only the duration of the slowest operation.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all',
    ],
    tags: ['async-await', 'Promise.all', 'concurrency', 'performance'],
    year: 2026,
  },

  // ─── ARRAY METHODS ───────────────────────────────────────────────────────────
  {
    id: 'js-core-022',
    topic: 'javascript-core',
    difficulty: 'junior',
    type: 'code-output',
    question: 'What is the output?',
    code: `const nums = [1, 2, 3, 4, 5]
const result = nums
  .filter(n => n % 2 === 0)
  .map(n => n ** 2)
  .reduce((acc, n) => acc + n, 0)
console.log(result)`,
    options: ['20', '4', '10', '25'],
    answer: 0,
    explanation:
      '`filter(n => n % 2 === 0)` gives `[2, 4]`. `.map(n => n ** 2)` gives `[4, 16]`. `.reduce((acc, n) => acc + n, 0)` sums them: `0 + 4 + 16 = 20`.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array',
    ],
    tags: ['filter', 'map', 'reduce', 'chaining', 'arrays'],
    year: 2025,
  },
  {
    id: 'js-core-023',
    topic: 'javascript-core',
    difficulty: 'mid',
    type: 'code-output',
    question: 'What is the output?',
    code: `const flat = [[1, 2], [3, [4, 5]]].flat()
console.log(flat)`,
    options: [
      '[1, 2, 3, 4, 5]',
      '[1, 2, 3, [4, 5]]',
      '[[1, 2], [3, [4, 5]]]',
      'TypeError',
    ],
    answer: 1,
    explanation:
      '`Array.prototype.flat()` with no arguments defaults to depth `1`. It flattens one level: `[1, 2]` and `[3, [4, 5]]` become individual elements. The inner `[4, 5]` is not flattened because it is two levels deep. Use `.flat(Infinity)` to flatten all levels.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat',
    ],
    tags: ['flat', 'arrays', 'es2019'],
    year: 2025,
  },
  {
    id: 'js-core-024',
    topic: 'javascript-core',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is the difference between `Array.prototype.find()` and `Array.prototype.findIndex()`?',
    options: [
      '`find` returns the index; `findIndex` returns the element',
      '`find` returns the first matching element; `findIndex` returns the index of the first matching element',
      '`find` mutates the array; `findIndex` does not',
      'They are identical',
    ],
    answer: 1,
    explanation:
      'Both take a predicate callback and iterate until the first match. `find()` returns the element itself (or `undefined` if not found). `findIndex()` returns the index (or `-1` if not found). Neither mutates the array.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find',
    ],
    tags: ['find', 'findIndex', 'arrays'],
    year: 2025,
  },
  {
    id: 'js-core-025',
    topic: 'javascript-core',
    difficulty: 'senior',
    type: 'code-output',
    question: 'What does this reduce call return?',
    code: `const data = [
  { category: 'a', value: 1 },
  { category: 'b', value: 2 },
  { category: 'a', value: 3 },
]
const grouped = data.reduce((acc, item) => {
  acc[item.category] = (acc[item.category] ?? 0) + item.value
  return acc
}, {})
console.log(grouped)`,
    options: [
      `{ a: 1, b: 2 }`,
      `{ a: 4, b: 2 }`,
      `{ a: [1, 3], b: [2] }`,
      `{ a: 3, b: 2 }`,
    ],
    answer: 1,
    explanation:
      'The reducer accumulates sums by category. For `"a"`: `0 + 1 = 1`, then `1 + 3 = 4`. For `"b"`: `0 + 2 = 2`. Result: `{ a: 4, b: 2 }`. The `?? 0` handles the initial undefined case for a new key.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce',
    ],
    tags: ['reduce', 'grouping', 'arrays', 'pattern'],
    year: 2026,
  },

  // ─── `this` KEYWORD ──────────────────────────────────────────────────────────
  {
    id: 'js-core-026',
    topic: 'javascript-core',
    difficulty: 'mid',
    type: 'code-output',
    question: 'What is the output?',
    code: `const obj = {
  name: 'Bob',
  greet: function () {
    return \`Hello, \${this.name}\`
  },
  greetArrow: () => {
    return \`Hello, \${this.name}\`
  },
}
console.log(obj.greet())
console.log(obj.greetArrow())`,
    options: [
      `'Hello, Bob' 'Hello, Bob'`,
      `'Hello, Bob' 'Hello, undefined'`,
      `'Hello, undefined' 'Hello, Bob'`,
      `TypeError TypeError`,
    ],
    answer: 1,
    explanation:
      '`greet` is a regular function. When called as `obj.greet()`, `this` refers to `obj`, so `this.name` is `"Bob"`. `greetArrow` is an arrow function defined in the object literal, which is at module/global scope — `this` is the outer `this` (the global object in non-strict mode, where `name` is likely `undefined`). Arrow functions do not get their own `this`.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this',
    ],
    tags: ['this', 'arrow-functions', 'context'],
    year: 2025,
  },
  {
    id: 'js-core-027',
    topic: 'javascript-core',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is the difference between `call`, `apply`, and `bind`?',
    options: [
      '`call` and `apply` both invoke the function immediately; `bind` returns a new function with `this` pre-set',
      '`bind` invokes the function immediately; `call` and `apply` return new functions',
      '`apply` takes individual arguments; `call` takes an array',
      'All three are identical',
    ],
    answer: 0,
    explanation:
      '`fn.call(thisArg, arg1, arg2)` invokes `fn` immediately with `this = thisArg` and individual arguments. `fn.apply(thisArg, [arg1, arg2])` does the same but takes arguments as an array. `fn.bind(thisArg, arg1)` returns a NEW function with `this` permanently bound to `thisArg`; it is not called immediately.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind',
    ],
    tags: ['call', 'apply', 'bind', 'this', 'function'],
    year: 2025,
  },
  {
    id: 'js-core-028',
    topic: 'javascript-core',
    difficulty: 'senior',
    type: 'code-output',
    question: 'What is the output?',
    code: `function greet(greeting, punct) {
  return \`\${greeting}, \${this.name}\${punct}\`
}
const user = { name: 'Alice' }
const sayHi = greet.bind(user, 'Hi')
console.log(sayHi('!'))
console.log(sayHi('?'))`,
    options: [
      `'Hi, Alice!' 'Hi, Alice?'`,
      `'Hi, undefined!' 'Hi, undefined?'`,
      `TypeError`,
      `'Hi, Alice' 'Hi, Alice'`,
    ],
    answer: 0,
    explanation:
      '`bind` partially applies arguments: `greeting` is pre-filled with `"Hi"` and `this` is locked to `user`. Each `sayHi` call only needs to supply `punct`. This is called partial application.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind',
    ],
    tags: ['bind', 'partial-application', 'this'],
    year: 2026,
  },

  // ─── WeakMap, WeakSet, Symbol, Proxy ─────────────────────────────────────────
  {
    id: 'js-core-029',
    topic: 'javascript-core',
    difficulty: 'senior',
    type: 'mcq',
    question: 'Why would you choose `WeakMap` over `Map` for associating metadata with DOM nodes?',
    options: [
      'WeakMap has faster lookup than Map',
      'WeakMap keys must be strings, which makes them safer',
      'WeakMap keys are held weakly — if a DOM node is removed and no other references exist, the entry is garbage-collected automatically',
      'WeakMap supports iteration; Map does not',
    ],
    answer: 2,
    explanation:
      'A `Map` holds strong references to its keys, preventing garbage collection of DOM nodes even after they are removed from the document. A `WeakMap` holds weak references: once a key object has no other strong references it can be collected, and the associated entry is automatically removed. This prevents memory leaks. The trade-off is that `WeakMap` is not iterable and its size cannot be queried.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap',
    ],
    tags: ['WeakMap', 'memory', 'garbage-collection', 'Map'],
    year: 2025,
  },
  {
    id: 'js-core-030',
    topic: 'javascript-core',
    difficulty: 'senior',
    type: 'mcq',
    question: 'Which statement about `Symbol` is correct?',
    options: [
      'Two symbols created with the same description are equal: `Symbol("id") === Symbol("id")` is `true`',
      'Every `Symbol()` call returns a unique, immutable primitive; two symbols with the same description are never `===` equal',
      'Symbols are coerced to strings automatically when used as object keys',
      'Symbols can be enumerated with `Object.keys()`',
    ],
    answer: 1,
    explanation:
      '`Symbol("id") === Symbol("id")` is `false` — each call creates a completely unique value regardless of the description. Symbols used as property keys are NOT enumerable via `Object.keys()` or `for...in`; use `Object.getOwnPropertySymbols()` to access them. They are also not implicitly coerced to strings (doing so throws a TypeError).',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol',
    ],
    tags: ['Symbol', 'uniqueness', 'primitives'],
    year: 2025,
  },
  {
    id: 'js-core-031',
    topic: 'javascript-core',
    difficulty: 'lead',
    type: 'code-output',
    question: 'What does this Proxy-based validation return?',
    code: `const handler = {
  set(target, prop, value) {
    if (typeof value !== 'number') throw new TypeError('Only numbers allowed')
    target[prop] = value
    return true
  },
}
const nums = new Proxy({}, handler)
nums.a = 10
try {
  nums.b = 'hello'
} catch (e) {
  console.log(e.message)
}
console.log(nums.a)`,
    options: [
      `'Only numbers allowed' 10`,
      `TypeError 10`,
      `undefined 10`,
      `'Only numbers allowed' undefined`,
    ],
    answer: 0,
    explanation:
      'The `set` trap intercepts property assignments. Setting `nums.a = 10` succeeds. Setting `nums.b = "hello"` triggers the trap, which throws a `TypeError`. The catch block logs the message `"Only numbers allowed"`. `nums.a` is `10` as previously set.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy',
    ],
    tags: ['Proxy', 'validation', 'trap', 'meta-programming'],
    year: 2026,
  },

  // ─── GENERATORS & ITERATORS ──────────────────────────────────────────────────
  {
    id: 'js-core-032',
    topic: 'javascript-core',
    difficulty: 'senior',
    type: 'code-output',
    question: 'What is the output?',
    code: `function* range(start, end, step = 1) {
  for (let i = start; i < end; i += step) {
    yield i
  }
}
const gen = range(0, 10, 3)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)`,
    options: ['0 3 6 9', '0 3 6 undefined', '0 3 6 done', '1 4 7 undefined'],
    answer: 0,
    explanation:
      'The generator yields values for i = 0, 3, 6, 9 (all satisfy i < 10). Four `gen.next()` calls return these four values: 0, 3, 6, 9. A fifth call would return `{ value: undefined, done: true }` since i = 12 fails the loop condition.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator',
    ],
    tags: ['generators', 'iterators', 'yield', 'es6'],
    year: 2025,
  },
  {
    id: 'js-core-033',
    topic: 'javascript-core',
    difficulty: 'lead',
    type: 'mcq',
    question: 'What makes an object iterable in JavaScript?',
    options: [
      'Implementing a `forEach` method',
      'Having a `length` property',
      'Implementing the `[Symbol.iterator]` method that returns an iterator object with a `next()` method',
      'Extending `Array`',
    ],
    answer: 2,
    explanation:
      'The iteration protocol requires an object to have a `[Symbol.iterator]()` method. That method must return an iterator: an object with a `next()` method that returns `{ value, done }`. Built-in iterables include Arrays, Strings, Maps, Sets, and generator objects. Custom iterables can be used with `for...of`, spread, and destructuring.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols',
    ],
    tags: ['iterators', 'Symbol.iterator', 'iteration-protocol'],
    year: 2025,
  },
  {
    id: 'js-core-034',
    topic: 'javascript-core',
    difficulty: 'lead',
    type: 'code-output',
    question: 'What does this async generator output?',
    code: `async function* asyncRange(n) {
  for (let i = 0; i < n; i++) {
    await new Promise(r => setTimeout(r, 0))
    yield i
  }
}

;(async () => {
  for await (const val of asyncRange(3)) {
    console.log(val)
  }
})()`,
    options: ['0 1 2', '0 0 0', 'undefined undefined undefined', 'TypeError'],
    answer: 0,
    explanation:
      'Async generators combine `async`/`await` with generator syntax. Each `yield` inside an async generator returns a Promise when `next()` is called. `for await...of` awaits each yielded value in sequence. The output is `0`, `1`, `2` on separate ticks, separated by the `setTimeout` delay.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of',
    ],
    tags: ['async-generators', 'for-await-of', 'iterators', 'es2018'],
    year: 2026,
  },

  // ─── ERROR HANDLING ──────────────────────────────────────────────────────────
  {
    id: 'js-core-035',
    topic: 'javascript-core',
    difficulty: 'mid',
    type: 'code-output',
    question: 'What is the output?',
    code: `function riskyOp() {
  throw new RangeError('Out of bounds')
}
try {
  riskyOp()
} catch (e) {
  console.log(e instanceof RangeError)
  console.log(e instanceof Error)
  console.log(e.message)
} finally {
  console.log('cleanup')
}`,
    options: [
      `true true 'Out of bounds' 'cleanup'`,
      `true false 'Out of bounds' 'cleanup'`,
      `false true 'Out of bounds' 'cleanup'`,
      `RangeError 'cleanup'`,
    ],
    answer: 0,
    explanation:
      '`RangeError` extends `Error`, so both `instanceof` checks are `true`. The `catch` block captures the thrown error, and the `finally` block always executes regardless of whether an exception was thrown or caught.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch',
    ],
    tags: ['error-handling', 'try-catch-finally', 'instanceof', 'RangeError'],
    year: 2025,
  },
  {
    id: 'js-core-036',
    topic: 'javascript-core',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is the correct pattern for rethrowing specific errors while letting others propagate?',
    options: [
      `try { ... } catch (e) { throw e }`,
      `try { ... } catch (e) { if (e instanceof TypeError) handleIt(e); else throw e }`,
      `try { ... } catch (TypeError e) { handleIt(e) }`,
      'Use `.catch(e => {})` which automatically filters by type',
    ],
    answer: 1,
    explanation:
      'JavaScript does not support typed catch clauses (option C is invalid syntax). The correct pattern is to catch all errors, check the type with `instanceof`, handle the specific case, and rethrow anything else. This keeps the catch block narrow in responsibility.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch#conditional_catch_clauses',
    ],
    tags: ['error-handling', 'rethrow', 'instanceof', 'best-practice'],
    year: 2025,
  },
  {
    id: 'js-core-037',
    topic: 'javascript-core',
    difficulty: 'senior',
    type: 'debug',
    question: 'This function silently swallows errors. What is wrong and how do you fix it?',
    code: `async function loadUser(id) {
  try {
    const res = await fetch(\`/api/users/\${id}\`)
    return await res.json()
  } catch {
    // silently ignore
  }
}`,
    options: [
      'Remove the `try/catch` entirely',
      'Re-throw the error or return a meaningful fallback/error indicator so the caller can react',
      'Use `.then()/.catch()` instead of async/await',
      'Add `return null` inside the catch block — this fixes it',
    ],
    answer: 1,
    solutionCode: `async function loadUser(id) {
  try {
    const res = await fetch(\`/api/users/\${id}\`)
    if (!res.ok) throw new Error(\`HTTP \${res.status}: \${res.statusText}\`)
    return await res.json()
  } catch (e) {
    console.error('Failed to load user:', e)
    throw e  // re-throw so the caller can react
  }
}`,
    explanation:
      'Swallowing errors makes debugging impossible and hides failures from callers. The fix is to either re-throw (`throw e`), return a typed error result, or log and rethrow. Also note that `fetch` only rejects on network failure — HTTP 4xx/5xx are successful fetches. Always check `res.ok` before parsing.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#checking_that_the_fetch_was_successful',
    ],
    tags: ['error-handling', 'async-await', 'debug', 'best-practice'],
    year: 2026,
  },

  // ─── ADDITIONAL MIXED ────────────────────────────────────────────────────────
  {
    id: 'js-core-038',
    topic: 'javascript-core',
    difficulty: 'junior',
    type: 'true-false',
    question: '`typeof null === "object"` evaluates to `true` in JavaScript.',
    answer: true,
    explanation:
      'This is a well-known JavaScript quirk. `typeof null` returns `"object"` due to a bug in the original JavaScript implementation that was never fixed for backwards compatibility. `null` is not actually an object — to safely check for `null` use strict equality: `value === null`.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null',
    ],
    tags: ['typeof', 'null', 'quirks', 'type-checking'],
    year: 2025,
  },
  {
    id: 'js-core-039',
    topic: 'javascript-core',
    difficulty: 'mid',
    type: 'code-output',
    question: 'What is the output?',
    code: `console.log(0.1 + 0.2 === 0.3)
console.log(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON)`,
    options: [
      'true true',
      'false true',
      'false false',
      'true false',
    ],
    answer: 1,
    explanation:
      '`0.1 + 0.2` in IEEE-754 double precision equals `0.30000000000000004`, not `0.3`, so the strict equality is `false`. The correct way to compare floating-point numbers is with an epsilon tolerance. `Number.EPSILON` is the smallest representable difference between two distinct doubles.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON',
    ],
    tags: ['floating-point', 'IEEE-754', 'Number.EPSILON', 'quirks'],
    year: 2025,
  },
  {
    id: 'js-core-040',
    topic: 'javascript-core',
    difficulty: 'mid',
    type: 'true-false',
    question: 'In strict mode (`"use strict"`), assigning to an undeclared variable throws a `ReferenceError`.',
    answer: true,
    explanation:
      'In sloppy mode, `x = 5` (without `var`/`let`/`const`) silently creates a global variable. In strict mode this throws `ReferenceError: x is not defined`, preventing accidental global pollution. ES modules and class bodies are always in strict mode.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode',
    ],
    tags: ['strict-mode', 'globals', 'ReferenceError'],
    year: 2025,
  },
  {
    id: 'js-core-041',
    topic: 'javascript-core',
    difficulty: 'lead',
    type: 'mcq',
    question: 'What does `structuredClone()` offer that `JSON.parse(JSON.stringify())` does not?',
    options: [
      'It is faster in all cases',
      'It correctly clones types like `Date`, `Map`, `Set`, `ArrayBuffer`, circular references, and `undefined` values that `JSON` cannot represent',
      'It performs a shallow clone instead of deep clone',
      'It is supported in all browsers since ES5',
    ],
    answer: 1,
    explanation:
      '`JSON.parse(JSON.stringify(x))` silently drops `undefined`, converts `Date` to a string, ignores `Map`/`Set`, and throws on circular references. `structuredClone()` (introduced in Node 17 and modern browsers) handles all of these correctly using the structured clone algorithm used by `postMessage`.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/structuredClone',
    ],
    tags: ['structuredClone', 'deep-clone', 'serialization', 'es2022'],
    year: 2026,
  },
  {
    id: 'js-core-042',
    topic: 'javascript-core',
    difficulty: 'lead',
    type: 'mcq',
    question: 'Which of the following best describes the purpose of `Object.freeze()` vs `Object.seal()`?',
    options: [
      '`freeze` prevents adding new properties; `seal` prevents modifying existing properties',
      '`freeze` makes all properties read-only AND prevents adding/removing properties; `seal` prevents adding/removing properties but still allows modifying existing values',
      'They are identical',
      '`seal` is recursive (deep); `freeze` is shallow',
    ],
    answer: 1,
    explanation:
      '`Object.seal(obj)` marks all existing properties as non-configurable and prevents new properties from being added or deleted, but existing writable properties can still be updated. `Object.freeze(obj)` additionally makes all properties non-writable, creating a fully immutable object (shallow — nested objects are not frozen). Neither is recursive/deep.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze',
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal',
    ],
    tags: ['Object.freeze', 'Object.seal', 'immutability'],
    year: 2026,
  },
  {
    id: 'js-core-043',
    topic: 'javascript-core',
    difficulty: 'senior',
    type: 'code-output',
    question: 'What is the output?',
    code: `class Counter {
  #count = 0

  increment() { this.#count++ }
  get value()  { return this.#count }
}

const c = new Counter()
c.increment()
c.increment()
console.log(c.value)
console.log(c.#count)`,
    options: [
      '2 2',
      '2 then SyntaxError',
      '2 then TypeError',
      'undefined undefined',
    ],
    answer: 1,
    explanation:
      'Private class fields (prefixed with `#`) are truly private and only accessible inside the class body. `c.value` returns `2` via the getter. `c.#count` outside the class is a SyntaxError at parse time — not a runtime error — because the parser rejects the private field access outside its declaring class.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields',
    ],
    tags: ['private-fields', 'class', 'encapsulation', 'es2022'],
    year: 2026,
  },
  {
    id: 'js-core-044',
    topic: 'javascript-core',
    difficulty: 'mid',
    type: 'true-false',
    question: 'An `async` function always returns a Promise, even if you explicitly return a non-Promise value.',
    answer: true,
    explanation:
      'An `async` function wraps its return value in `Promise.resolve()`. If you `return 42`, the caller receives a Promise that resolves to `42`. If you throw inside an async function, the returned Promise rejects with the thrown value.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function',
    ],
    tags: ['async-await', 'promise', 'return-value'],
    year: 2025,
  },
  {
    id: 'js-core-045',
    topic: 'javascript-core',
    difficulty: 'lead',
    type: 'code-output',
    question: 'What is the output of this tagged template literal?',
    code: `function highlight(strings, ...values) {
  return strings.reduce((acc, str, i) => {
    return acc + str + (values[i] !== undefined ? \`[\${values[i]}]\` : '')
  }, '')
}
const name = 'Alice'
const score = 99
console.log(highlight\`Hello \${name}, your score is \${score}!\`)`,
    options: [
      `'Hello Alice, your score is 99!'`,
      `'Hello [Alice], your score is [99]!'`,
      `'Hello [Alice], your score is [99]'`,
      `TypeError`,
    ],
    answer: 1,
    explanation:
      'Tagged template literals pass the string parts as an array (`strings`) and the interpolated values as rest args (`values`). This `highlight` tag wraps each interpolated value in `[...]`. The last `strings` element is `"!"` and `values[2]` is `undefined`, so nothing is appended after it. Result: `"Hello [Alice], your score is [99]!"`.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates',
    ],
    tags: ['tagged-templates', 'template-literals', 'advanced', 'es6'],
    year: 2026,
  },

  // ─── ES2024/ES2025 MODERN APIS ────────────────────────────────────────────
  {
    id: 'js-core-046',
    topic: 'javascript-core',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What problem does `Promise.withResolvers()` (ES2024) solve compared to the classic Promise constructor pattern?',
    options: [
      'It creates a Promise that automatically resolves after a timeout',
      'It exposes `resolve` and `reject` functions outside the Promise constructor callback, eliminating the need for closure variables',
      'It returns multiple Promises at once — one for resolve and one for reject',
      'It creates a Promise that can be resolved more than once',
    ],
    answer: 1,
    explanation:
      'Before ES2024, to expose `resolve`/`reject` outside the constructor you had to use the "deferred" pattern: `let resolve, reject; const p = new Promise((res, rej) => { resolve = res; reject = rej; })`. `Promise.withResolvers()` returns `{ promise, resolve, reject }` as a single clean call. This is especially useful for event-driven APIs, queues, and manual control flow.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/withResolvers',
    ],
    tags: ['Promise.withResolvers', 'promises', 'es2024'],
    year: 2026,
  },
  {
    id: 'js-core-047',
    topic: 'javascript-core',
    difficulty: 'senior',
    type: 'code-output',
    question: 'What does this code log?',
    code: `const { promise, resolve, reject } = Promise.withResolvers()

promise.then(v => console.log('resolved:', v))

setTimeout(() => resolve(42), 0)`,
    options: [
      'Nothing — promise never resolves',
      'resolved: 42',
      'rejected: 42',
      'TypeError: Promise.withResolvers is not a function',
    ],
    answer: 1,
    explanation:
      '`Promise.withResolvers()` returns a plain object with `{ promise, resolve, reject }`. The `promise` is a standard Promise. Calling `resolve(42)` after the microtask queue is empty triggers the `.then` callback on the next tick, logging `resolved: 42`. This is functionally identical to the manual deferred pattern but far cleaner.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/withResolvers',
    ],
    tags: ['Promise.withResolvers', 'promises', 'es2024', 'deferred'],
    year: 2026,
  },
  {
    id: 'js-core-048',
    topic: 'javascript-core',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What does `Array.fromAsync()` (ES2024) do that `Array.from()` cannot?',
    options: [
      'It creates an array from a Map or Set synchronously',
      'It collects values from async iterables (e.g., async generators, ReadableStream) into an array, returning a Promise',
      'It performs the mapping callback asynchronously in parallel',
      'It creates a typed array from a Promise',
    ],
    answer: 1,
    explanation:
      '`Array.from()` only works with synchronous iterables. `Array.fromAsync(asyncIterable)` returns a Promise that resolves to an array after consuming all values from an async iterable. Example: `const lines = await Array.fromAsync(fs.readLines("file.txt"))`. It also accepts a mapping function as the second argument, called with `await` on each value.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fromAsync',
    ],
    tags: ['Array.fromAsync', 'async-iterables', 'es2024'],
    year: 2026,
  },
  {
    id: 'js-core-049',
    topic: 'javascript-core',
    difficulty: 'lead',
    type: 'mcq',
    question: 'Which statement about JavaScript Decorators (Stage 3 / TypeScript 5.0 experimental) is accurate?',
    options: [
      'Decorators can only be applied to class methods, not to the class itself or fields',
      'A decorator is a function that receives a target and descriptor and can replace or modify the decorated value',
      'Decorators are applied at runtime inside the class constructor',
      'Decorators were finalised in ES2022',
    ],
    answer: 1,
    explanation:
      'A decorator is a function called with the decorated value (class, method, accessor, or field) and a context object describing the declaration. It can return a replacement value or modify behavior. Class decorators receive the class constructor; method decorators receive the method function. The TC39 Stage 3 proposal (implemented in TypeScript 5.0 with `experimentalDecorators: false`) differs from the older TypeScript experimental decorator API.',
    references: [
      'https://github.com/tc39/proposal-decorators',
      'https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-0.html',
    ],
    tags: ['decorators', 'class', 'stage3', 'es2025'],
    year: 2026,
  },
  {
    id: 'js-core-050',
    topic: 'javascript-core',
    difficulty: 'mid',
    type: 'code-output',
    question: 'What is the output?',
    code: `const original = {
  name: 'Alice',
  scores: [10, 20, 30],
  birthday: new Date('1990-01-01'),
}

const clone = structuredClone(original)
clone.scores.push(99)
clone.name = 'Bob'

console.log(original.name)
console.log(original.scores.length)
console.log(clone.birthday instanceof Date)`,
    options: [
      'Bob 4 true',
      'Alice 3 true',
      'Alice 4 true',
      'Alice 3 false',
    ],
    answer: 1,
    explanation:
      '`structuredClone` performs a deep clone — mutating `clone.scores` does not affect `original.scores`. `original.name` stays `"Alice"` and `original.scores.length` stays `3`. Unlike `JSON.parse(JSON.stringify(...))`, `structuredClone` preserves `Date` objects as actual `Date` instances, so `clone.birthday instanceof Date` is `true`.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/structuredClone',
    ],
    tags: ['structuredClone', 'deep-clone', 'Date', 'es2022'],
    year: 2026,
  },
  {
    id: 'js-core-051',
    topic: 'javascript-core',
    difficulty: 'mid',
    type: 'true-false',
    question: '`structuredClone()` can clone objects with circular references without throwing an error.',
    answer: true,
    explanation:
      '`structuredClone` uses the HTML Structured Clone algorithm which explicitly handles circular references. This is one of its key advantages over `JSON.parse(JSON.stringify(...))` which throws `TypeError: Converting circular structure to JSON`. However, `structuredClone` cannot clone functions, DOM nodes, or class instances with prototype methods.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm',
    ],
    tags: ['structuredClone', 'circular-references', 'deep-clone'],
    year: 2026,
  },
  {
    id: 'js-core-052',
    topic: 'javascript-core',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is the primary purpose of `AbortController` in JavaScript?',
    options: [
      'To forcefully terminate a running JavaScript thread',
      'To provide a signal that can be passed to async operations (like `fetch`) to cancel them',
      'To abort a rejected Promise before it reaches its `.catch` handler',
      'To cancel a `setTimeout` or `setInterval`',
    ],
    answer: 1,
    explanation:
      '`AbortController` creates an `AbortSignal` (`controller.signal`) that can be passed to cancellable APIs such as `fetch`, event listeners, and async iterators. Calling `controller.abort()` fires the `abort` event on the signal and causes the associated `fetch` to reject with an `AbortError`. This is the standard Web API mechanism for cooperative cancellation.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/AbortController',
    ],
    tags: ['AbortController', 'AbortSignal', 'fetch', 'cancellation'],
    year: 2026,
  },
  {
    id: 'js-core-053',
    topic: 'javascript-core',
    difficulty: 'senior',
    type: 'code-output',
    question: 'What does this code log?',
    code: `const controller = new AbortController()
const { signal } = controller

fetch('https://api.example.com/data', { signal })
  .then(r => r.json())
  .then(data => console.log('data:', data))
  .catch(err => {
    if (err.name === 'AbortError') {
      console.log('Request aborted')
    } else {
      console.log('Other error:', err.message)
    }
  })

controller.abort()`,
    options: [
      'data: { ... } (request completes)',
      'Request aborted',
      'Other error: Failed to fetch',
      'Nothing is logged',
    ],
    answer: 1,
    explanation:
      'Calling `controller.abort()` before the fetch completes causes the fetch Promise to reject with a `DOMException` whose `name` is `"AbortError"`. The `.catch` handler checks for this specific name and logs `"Request aborted"`. If the request had already completed, the abort would be a no-op.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort',
    ],
    tags: ['AbortController', 'AbortSignal', 'fetch', 'AbortError'],
    year: 2026,
  },
  {
    id: 'js-core-054',
    topic: 'javascript-core',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is the correct modern syntax for import attributes (previously "import assertions") in ES2025?',
    options: [
      '`import data from "./data.json" assert { type: "json" }`',
      '`import data from "./data.json" with { type: "json" }`',
      '`import { json } from "./data.json"`',
      '`const data = require("./data.json", { type: "json" })`',
    ],
    answer: 1,
    explanation:
      'The TC39 proposal was renamed from "Import Assertions" (using `assert`) to "Import Attributes" (using `with`) in ES2025. The `assert` keyword is deprecated in favour of `with`. The `type` attribute tells the host environment how to interpret the module (e.g., `"json"` for JSON modules). Browsers and Node.js 22+ support the `with` syntax.',
    references: [
      'https://github.com/tc39/proposal-import-attributes',
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import/with',
    ],
    tags: ['import-attributes', 'import-assertions', 'es2025', 'modules'],
    year: 2026,
  },
  {
    id: 'js-core-055',
    topic: 'javascript-core',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What does `Object.groupBy()` (ES2024) return?',
    options: [
      'A `Map` grouping values by key',
      'A plain object where each key maps to an array of elements that returned that key from the callback',
      'An array of `[key, values[]]` tuples sorted by key',
      'A `Set` of unique keys extracted from the array',
    ],
    answer: 1,
    explanation:
      '`Object.groupBy(iterable, keyFn)` groups elements of an iterable into a plain object. The callback receives each element and returns a string key. Elements sharing the same key are collected into an array under that key. `Map.groupBy()` does the same but returns a `Map`, which allows non-string keys (including objects). Neither method sorts the keys.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy',
    ],
    tags: ['Object.groupBy', 'Map.groupBy', 'es2024', 'grouping'],
    year: 2026,
  },
  {
    id: 'js-core-056',
    topic: 'javascript-core',
    difficulty: 'senior',
    type: 'code-output',
    question: 'What does this code log?',
    code: `const inventory = [
  { name: 'apple', type: 'fruit' },
  { name: 'banana', type: 'fruit' },
  { name: 'carrot', type: 'vegetable' },
  { name: 'broccoli', type: 'vegetable' },
]

const grouped = Object.groupBy(inventory, item => item.type)
console.log(Object.keys(grouped))
console.log(grouped.fruit.length)`,
    options: [
      `['fruit', 'vegetable'] 3`,
      `['fruit', 'vegetable'] 2`,
      `['apple', 'banana', 'carrot', 'broccoli'] 2`,
      `TypeError: Object.groupBy is not a function`,
    ],
    answer: 1,
    explanation:
      '`Object.groupBy` groups items by the value returned by the callback. The `inventory` array produces two groups: `fruit` (apple, banana) and `vegetable` (carrot, broccoli). `Object.keys(grouped)` is `["fruit", "vegetable"]` and `grouped.fruit.length` is `2`. Available in Chrome 117+, Node 21+, Firefox 119+.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy',
    ],
    tags: ['Object.groupBy', 'es2024', 'array-methods'],
    year: 2026,
  },
  {
    id: 'js-core-057',
    topic: 'javascript-core',
    difficulty: 'senior',
    type: 'mcq',
    question: 'Which Set methods were added in ES2025 for set algebra operations?',
    options: [
      '`Set.prototype.merge()`, `Set.prototype.filter()`, `Set.prototype.diff()`',
      '`Set.prototype.union()`, `Set.prototype.intersection()`, `Set.prototype.difference()`, `Set.prototype.symmetricDifference()`, `Set.prototype.isSubsetOf()`, `Set.prototype.isSupersetOf()`, `Set.prototype.isDisjointFrom()`',
      '`Set.prototype.add()`, `Set.prototype.remove()`, `Set.prototype.contains()`',
      '`Set.prototype.map()`, `Set.prototype.filter()`, `Set.prototype.reduce()`',
    ],
    answer: 1,
    explanation:
      'ES2025 adds a full suite of set algebra methods: `union(other)` (A ∪ B), `intersection(other)` (A ∩ B), `difference(other)` (A − B), `symmetricDifference(other)` (A △ B), `isSubsetOf(other)`, `isSupersetOf(other)`, and `isDisjointFrom(other)`. All methods accept any object with a `size` property and `has()` method (e.g., `Map`, `ReadonlySet`). They return new `Set` instances without mutating either operand.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#instance_methods',
    ],
    tags: ['Set', 'set-methods', 'es2025', 'union', 'intersection'],
    year: 2026,
  },
  {
    id: 'js-core-058',
    topic: 'javascript-core',
    difficulty: 'senior',
    type: 'code-output',
    question: 'What does this code log?',
    code: `const a = new Set([1, 2, 3, 4])
const b = new Set([3, 4, 5, 6])

console.log([...a.intersection(b)])
console.log([...a.difference(b)])
console.log([...a.union(b)])`,
    options: [
      '[3, 4]  [1, 2]  [1, 2, 3, 4, 5, 6]',
      '[1, 2, 3, 4, 5, 6]  [3, 4]  [1, 2]',
      '[3, 4]  [1, 2, 5, 6]  [1, 2, 3, 4, 5, 6]',
      'TypeError: a.intersection is not a function',
    ],
    answer: 0,
    explanation:
      '`intersection` returns elements in both sets: `{3, 4}`. `difference` (A − B) returns elements in A but not B: `{1, 2}`. `union` returns all elements from both: `{1, 2, 3, 4, 5, 6}`. These are new ES2025 Set methods available in all modern engines as of 2024.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/intersection',
    ],
    tags: ['Set', 'set-methods', 'es2025', 'intersection', 'difference', 'union'],
    year: 2026,
  },
  {
    id: 'js-core-059',
    topic: 'javascript-core',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What are Iterator Helpers (ES2025) and what problem do they solve?',
    options: [
      'Helper functions for `for...of` loops that improve performance',
      'Built-in lazy chainable methods (`map`, `filter`, `take`, `drop`, `flatMap`, `reduce`, `toArray`, `forEach`, `some`, `every`, `find`) on the iterator prototype, enabling lazy evaluation without creating intermediate arrays',
      'Wrapper utilities that convert iterators to generators',
      'Methods added to `Array.prototype` that work with both arrays and iterators',
    ],
    answer: 1,
    explanation:
      'Iterator Helpers add methods directly to the iterator prototype so you can lazily chain operations: `iter.filter(x => x > 2).map(x => x * 2).take(5).toArray()`. Unlike array methods, these are lazy — values are only computed as consumed. This avoids creating intermediate arrays for each step, improving performance for large or infinite sequences (like generator outputs).',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator',
    ],
    tags: ['iterator-helpers', 'iterators', 'es2025', 'lazy-evaluation'],
    year: 2026,
  },
  {
    id: 'js-core-060',
    topic: 'javascript-core',
    difficulty: 'senior',
    type: 'code-output',
    question: 'What does this code log? (Iterator Helpers — ES2025)',
    code: `function* naturals() {
  let n = 1
  while (true) yield n++
}

const result = naturals()
  .filter(n => n % 2 === 0)
  .map(n => n * n)
  .take(3)
  .toArray()

console.log(result)`,
    options: [
      '[4, 16, 36]',
      '[1, 4, 9]',
      '[2, 4, 6]',
      'RangeError: Maximum call stack exceeded',
    ],
    answer: 0,
    explanation:
      '`naturals()` yields 1, 2, 3, 4, 5, 6, … lazily. `.filter(n % 2 === 0)` keeps evens: 2, 4, 6, … `.map(n => n * n)` squares them: 4, 16, 36, … `.take(3)` stops after 3 values. `.toArray()` collects them. Result: `[4, 16, 36]`. The infinite generator is safe because `take` terminates the iteration.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator/filter',
    ],
    tags: ['iterator-helpers', 'generators', 'es2025', 'lazy-evaluation'],
    year: 2026,
  },
  {
    id: 'js-core-061',
    topic: 'javascript-core',
    difficulty: 'mid',
    type: 'mcq',
    question: 'In regular expressions, what does the `d` flag (added in ES2022) provide?',
    options: [
      'Enables dotAll mode so `.` matches newlines',
      'Enables debug output to the console when a regex is tested',
      'Adds `indices` property to match results, containing start and end positions of each capture group',
      'Enables decimal matching for numeric patterns',
    ],
    answer: 2,
    explanation:
      'The `d` (hasIndices) flag causes `exec()` and `match()` results to include a `.indices` property — an array of `[start, end]` pairs for each capture group. This is useful for editors, linters, and tools that need to know the exact position of matched groups in the source string, without manually calculating offsets.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices',
    ],
    tags: ['regex', 'hasIndices', 'd-flag', 'es2022'],
    year: 2026,
  },
  {
    id: 'js-core-062',
    topic: 'javascript-core',
    difficulty: 'mid',
    type: 'code-output',
    question: 'What does this code log?',
    code: `const re = /(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})/
const match = re.exec('2026-03-07')

console.log(match.groups.year)
console.log(match.groups.month)
console.log(match.groups.day)`,
    options: [
      '2026 03 07',
      'undefined undefined undefined',
      '["2026", "03", "07"]',
      'SyntaxError: Invalid regex',
    ],
    answer: 0,
    explanation:
      'Named capture groups (`(?<name>...)`) are accessed via `match.groups.name`. This ES2018 feature makes regex matches self-documenting and allows accessing captures by name rather than fragile numeric index. Destructuring is also possible: `const { year, month, day } = match.groups`.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group',
    ],
    tags: ['regex', 'named-capture-groups', 'es2018'],
    year: 2026,
  },
  {
    id: 'js-core-063',
    topic: 'javascript-core',
    difficulty: 'mid',
    type: 'true-false',
    question: 'The regex flag `s` (dotAll) makes the `.` metacharacter match newline characters (`\\n`, `\\r`).',
    answer: true,
    explanation:
      'By default `.` matches any character except newlines. The `s` (dotAll) flag, added in ES2018, makes `.` match ALL characters including `\\n`, `\\r`, `\\u2028`, and `\\u2029`. This is equivalent to `[\\s\\S]` in older code. Example: `/hello.world/s.test("hello\\nworld")` returns `true`.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll',
    ],
    tags: ['regex', 'dotAll', 's-flag', 'es2018'],
    year: 2026,
  },
  {
    id: 'js-core-064',
    topic: 'javascript-core',
    difficulty: 'senior',
    type: 'code-output',
    question: 'What does this code log?',
    code: `// Lookbehind assertion
const re = /(?<=\\$)\\d+(\\.\\d{2})?/g
const text = '$100.00 and €200 and $50'

console.log(text.match(re))`,
    options: [
      `['$100.00', '$50']`,
      `['100.00', '50']`,
      `['100.00', '200', '50']`,
      `null`,
    ],
    answer: 1,
    explanation:
      'A lookbehind assertion `(?<=\\$)` matches only positions preceded by `$` without consuming the `$` itself. The pattern matches one or more digits optionally followed by `.` and two digits. Since the `$` is not consumed, the matches are `"100.00"` and `"50"` — not including the `$` sign. `€200` is skipped because it is not preceded by `$`.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion',
    ],
    tags: ['regex', 'lookbehind', 'assertions', 'es2018'],
    year: 2026,
  },
  {
    id: 'js-core-065',
    topic: 'javascript-core',
    difficulty: 'lead',
    type: 'mcq',
    question: 'What is `WeakRef` in JavaScript and when should it be used?',
    options: [
      'A reference that automatically becomes `null` after a fixed timeout',
      'A wrapper that holds a weak reference to an object, allowing it to be garbage-collected while still letting you dereference it with `.deref()` if it is still alive',
      'A reference type used exclusively with `Map` and `Set` for memory-efficient storage',
      'A built-in proxy that intercepts property access on the wrapped object',
    ],
    answer: 1,
    explanation:
      'A `WeakRef` wraps an object without preventing garbage collection. Call `.deref()` to get the object — it returns the object if still alive, or `undefined` if it has been collected. Use cases are narrow and advanced: caches, registries where you want entries to be automatically cleaned up. Always check if `.deref()` returns a value before using it. `WeakRef` should not be used for general memory management.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakRef',
    ],
    tags: ['WeakRef', 'garbage-collection', 'memory', 'es2021'],
    year: 2026,
  },
  {
    id: 'js-core-066',
    topic: 'javascript-core',
    difficulty: 'lead',
    type: 'mcq',
    question: 'What does `FinalizationRegistry` allow you to do?',
    options: [
      'Prevent an object from being garbage-collected until explicitly released',
      'Register a callback that is called when a registered object is garbage-collected',
      'Observe all property assignments on an object',
      'Create a finaliser that runs cleanup logic in object destructors like C++',
    ],
    answer: 1,
    explanation:
      '`FinalizationRegistry` lets you register a callback that the engine will call (at some unspecified time) after a registered target object is garbage-collected. You pass a "held value" at registration time — only this value is passed to the callback (not the collected object, which no longer exists). Use cases include cleanup of native resources, caches, and debugging. Timing is non-deterministic.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry',
    ],
    tags: ['FinalizationRegistry', 'WeakRef', 'garbage-collection', 'es2021'],
    year: 2026,
  },
  {
    id: 'js-core-067',
    topic: 'javascript-core',
    difficulty: 'lead',
    type: 'true-false',
    question: '`SharedArrayBuffer` requires the page to be served in a cross-origin isolated context (with specific `COOP` and `COEP` HTTP headers) to be usable.',
    answer: true,
    explanation:
      'After the Spectre vulnerability in 2018, browsers restricted `SharedArrayBuffer` to pages with `Cross-Origin-Opener-Policy: same-origin` and `Cross-Origin-Embedder-Policy: require-corp` headers. These headers establish cross-origin isolation, preventing cross-origin attacks that could exploit the high-resolution timer enabled by `Atomics.wait`. Without these headers, `SharedArrayBuffer` construction throws a `TypeError`.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#security_requirements',
    ],
    tags: ['SharedArrayBuffer', 'Atomics', 'COOP', 'COEP', 'security'],
    year: 2026,
  },
  {
    id: 'js-core-068',
    topic: 'javascript-core',
    difficulty: 'lead',
    type: 'mcq',
    question: 'What does `Atomics.wait()` do in JavaScript?',
    options: [
      'Pauses the current async function until a Promise resolves',
      'Blocks the current thread until a specific value at a `SharedArrayBuffer` position changes or a timeout expires — only usable in workers, not the main thread',
      'Delays execution using `requestAnimationFrame` until the next frame',
      'Waits for all pending microtasks to complete before resuming',
    ],
    answer: 1,
    explanation:
      '`Atomics.wait(typedArray, index, value[, timeout])` synchronously blocks the current worker thread if the value at `typedArray[index]` equals `value`. It returns `"ok"`, `"not-equal"`, or `"timed-out"`. This enables mutex/semaphore-like patterns for shared-memory concurrency between workers. It is intentionally blocked on the main thread to prevent UI freezing.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/wait',
    ],
    tags: ['Atomics', 'SharedArrayBuffer', 'workers', 'concurrency'],
    year: 2026,
  },
  {
    id: 'js-core-069',
    topic: 'javascript-core',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is "top-level await" and what environment does it require?',
    options: [
      'Using `await` outside of any function — requires wrapping in an IIFE: `(async () => { await ... })()`',
      'Using `await` at the module top level without an `async` wrapper — only works in ES modules (`type="module"` or `.mjs`)',
      'A special Promise that resolves synchronously in Node.js environments',
      'A feature exclusive to Node.js that blocks the event loop until all awaited values resolve',
    ],
    answer: 1,
    explanation:
      'Top-level `await` (ES2022) allows `await` expressions at the top level of an ES module, without an `async` wrapper. The module\'s execution is paused until the awaited Promise resolves, and any module that imports it will also wait. It only works in ES modules — CommonJS (`require`) does not support it. Use cases: dynamic imports, lazy initialisation, feature detection.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#top_level_await',
    ],
    tags: ['top-level-await', 'es-modules', 'es2022', 'async'],
    year: 2026,
  },
  {
    id: 'js-core-070',
    topic: 'javascript-core',
    difficulty: 'mid',
    type: 'code-output',
    question: 'What does this code log?',
    code: `class BankAccount {
  #balance = 0

  deposit(amount) {
    if (amount <= 0) throw new Error('Invalid amount')
    this.#balance += amount
  }

  get balance() {
    return this.#balance
  }

  static #fee = 2

  static getFee() {
    return BankAccount.#fee
  }
}

const acc = new BankAccount()
acc.deposit(100)
console.log(acc.balance)
console.log(BankAccount.getFee())
console.log('#balance' in acc)`,
    options: [
      '100 2 true',
      '100 2 false',
      '0 2 false',
      'SyntaxError',
    ],
    answer: 1,
    explanation:
      'Private instance fields (`#balance`) and private static fields (`#fee`) are truly private. `acc.balance` returns `100` via the getter. `BankAccount.getFee()` returns `2` via the static method. `"#balance" in acc` returns `false` — the `in` operator with string literals does not detect private fields. However, `#balance in acc` (without quotes) IS valid syntax for private field presence checks.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields',
    ],
    tags: ['private-fields', 'private-methods', 'class', 'encapsulation'],
    year: 2026,
  },
  {
    id: 'js-core-071',
    topic: 'javascript-core',
    difficulty: 'senior',
    type: 'debug',
    question: 'This code using `AbortController` has a bug. What is it?',
    code: `async function fetchWithTimeout(url, ms) {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), ms)

  const response = await fetch(url, { signal: controller.signal })
  const data = await response.json()
  return data
}`,
    options: [
      '`AbortController` cannot be used with `setTimeout`',
      'The timeout is never cleared if the fetch succeeds, which may abort a later unrelated request if the controller is reused',
      'The `signal` must be passed inside an options object keyed `abortSignal`, not `signal`',
      'Missing `async` on the outer function',
    ],
    answer: 1,
    solutionCode: `async function fetchWithTimeout(url, ms) {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), ms)

  try {
    const response = await fetch(url, { signal: controller.signal })
    const data = await response.json()
    return data
  } finally {
    clearTimeout(timeoutId)  // fixed: always clear the timeout
  }
}`,
    explanation:
      'If `fetch` completes successfully before the timeout fires, `timeoutId` still runs later and calls `controller.abort()`. While this controller instance is not reused here, the timer wastes resources and could cause issues in more complex scenarios. The fix is to clear the timeout on success: add `clearTimeout(timeoutId)` after `await response.json()`, or use a `try/finally` block: `try { ... } finally { clearTimeout(timeoutId) }`.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/timeout_static',
    ],
    tags: ['AbortController', 'fetch', 'timeout', 'debug', 'best-practice'],
    year: 2026,
  },
  {
    id: 'js-core-072',
    topic: 'javascript-core',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What does the Temporal API (TC39 Stage 3) aim to replace, and what is its key design improvement?',
    options: [
      'It replaces `setTimeout`/`setInterval` with a more precise scheduling API',
      'It replaces the built-in `Date` object with an immutable, timezone-aware, calendar-aware date/time API that avoids `Date`\'s notorious mutable and UTC-centric design flaws',
      'It introduces a new date format for JSON serialization',
      'It provides CSS animation timing functions accessible from JavaScript',
    ],
    answer: 1,
    explanation:
      'The `Date` API has been widely criticised: it is mutable, months are 0-indexed, timezone support is limited, and arithmetic is error-prone. `Temporal` introduces immutable types (`Temporal.PlainDate`, `Temporal.ZonedDateTime`, `Temporal.Instant`, etc.), full IANA timezone support, calendar system support (ISO 8601, Hebrew, Japanese, etc.), and explicit arithmetic. Use `Temporal.Now.plainDateISO()` instead of `new Date()`.',
    references: [
      'https://tc39.es/proposal-temporal/docs/',
    ],
    tags: ['Temporal', 'Date', 'es2025', 'stage3', 'timezone'],
    year: 2026,
  },
  {
    id: 'js-core-073',
    topic: 'javascript-core',
    difficulty: 'mid',
    type: 'true-false',
    question: '`WeakMap` keys must be objects (or registered symbols), not primitive values like strings or numbers.',
    answer: true,
    explanation:
      '`WeakMap` keys must be objects or registered symbols (added in ES2023). Primitives such as strings, numbers, and booleans cannot be used as `WeakMap` keys — attempting to do so throws a `TypeError`. This constraint exists because `WeakMap` holds weak references to its keys; primitives are not reference types and cannot be weakly referenced. This also applies to `WeakSet` members.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap',
    ],
    tags: ['WeakMap', 'WeakSet', 'keys', 'garbage-collection'],
    year: 2026,
  },
  {
    id: 'js-core-074',
    topic: 'javascript-core',
    difficulty: 'lead',
    type: 'debug',
    question: 'This code using top-level await has a problem. What is it and how would you fix it?',
    code: `// file: config.js (CommonJS module — package.json has no "type": "module")
const config = await fetch('/api/config').then(r => r.json())
export default config`,
    options: [
      '`fetch` is not available in Node.js',
      'Top-level `await` only works in ES modules. This file is CommonJS (no `"type": "module"` in package.json and uses `.js` extension). Fix: rename to `.mjs` or add `"type": "module"` to `package.json`, or wrap in an async IIFE',
      'You cannot `export default` the result of `await` directly',
      'Top-level await requires Node.js 20+',
    ],
    answer: 1,
    solutionCode: `// Option 1: rename to config.mjs (ES module by extension)
// file: config.mjs
const config = await fetch('/api/config').then(r => r.json())
export default config

// Option 2: wrap in async IIFE for CommonJS
// file: config.js
let config
;(async () => {
  config = await fetch('/api/config').then(r => r.json())
})()
module.exports = config`,
    explanation:
      'Top-level `await` is an ES module feature. In Node.js, a `.js` file is treated as CommonJS by default unless `"type": "module"` is set in `package.json` or the file uses the `.mjs` extension. Using top-level `await` in a CommonJS context is a `SyntaxError`. The fix is to use `.mjs` extension or set `"type": "module"` in `package.json`.',
    references: [
      'https://nodejs.org/api/esm.html#top-level-await',
    ],
    tags: ['top-level-await', 'CommonJS', 'ESM', 'modules', 'debug'],
    year: 2026,
  },
  {
    id: 'js-core-075',
    topic: 'javascript-core',
    difficulty: 'lead',
    type: 'code-output',
    question: 'What does this code log? (private class field with `in` operator — ES2022)',
    code: `class Point {
  #x
  #y

  constructor(x, y) {
    this.#x = x
    this.#y = y
  }

  static isPoint(obj) {
    return #x in obj && #y in obj
  }
}

console.log(Point.isPoint(new Point(1, 2)))
console.log(Point.isPoint({ x: 1, y: 2 }))
console.log(Point.isPoint(null))`,
    options: [
      'true true false',
      'true false then TypeError',
      'true false false',
      'SyntaxError: private fields cannot be used with `in`',
    ],
    answer: 1,
    explanation:
      'ES2022 introduced ergonomic brand checks: `#privateField in obj` returns `true` if `obj` has the private field (was constructed by the same class). `new Point(1, 2)` has `#x` and `#y`, so `isPoint` returns `true`. A plain `{ x: 1, y: 2 }` object does not have private fields, so it returns `false`. Passing `null` throws a `TypeError` because `in` requires the right-hand side to be an object.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in#using_in_with_private_fields',
    ],
    tags: ['private-fields', 'brand-checks', 'in-operator', 'es2022', 'class'],
    year: 2026,
  },
]
