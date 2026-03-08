import type { Question } from '../types'

export const typescriptQuestions: Question[] = [
  // --- Type Annotations, Interfaces vs Types ---
  {
    id: 'ts-001',
    topic: 'typescript',
    difficulty: 'junior',
    type: 'mcq',
    question: 'Which of the following is a key difference between `interface` and `type` in TypeScript?',
    options: [
      'Interfaces can extend other interfaces; types cannot extend anything',
      'Types can represent primitives, unions, and tuples; interfaces cannot',
      'Interfaces support generics; types do not',
      'Types are erased at compile time; interfaces are not',
    ],
    answer: 1,
    explanation:
      '`type` aliases can represent any type including primitives (`type ID = string`), union types (`type Result = Success | Error`), and tuples (`type Pair = [string, number]`). Interfaces are limited to describing object shapes. Both support generics and are erased at compile time.',
    tags: ['interface', 'type-alias', 'types-vs-interfaces'],
    year: 2025,
  },
  {
    id: 'ts-002',
    topic: 'typescript',
    difficulty: 'junior',
    type: 'true-false',
    question:
      'In TypeScript, `interface` declarations with the same name in the same scope are automatically merged into a single interface.',
    answer: true,
    explanation:
      'Declaration merging is a feature exclusive to `interface`. If you declare `interface Foo {}` twice, TypeScript merges them into one interface with combined members. This is useful for augmenting third-party library types. `type` aliases do not support this — redeclaring a type alias is a compile error.',
    tags: ['interface', 'declaration-merging'],
    year: 2025,
  },
  {
    id: 'ts-003',
    topic: 'typescript',
    difficulty: 'mid',
    type: 'code-output',
    question: 'What does TypeScript infer as the type of `result`?',
    code: `interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

type Cat = Animal & { indoor: boolean };

const dog: Dog = { name: 'Rex', breed: 'Labrador' };
const cat: Cat = { name: 'Whiskers', indoor: true };

const result = [dog, cat];`,
    answer: '(Dog | Cat)[]',
    explanation:
      'TypeScript infers array literals as the union of their element types. Since `dog` is `Dog` and `cat` is `Cat`, `result` is inferred as `(Dog | Cat)[]`. Note `Dog` extends `Animal` via `interface extends` while `Cat` uses an intersection type — both approaches produce equivalent structural types.',
    tags: ['type-inference', 'interface', 'type-alias', 'intersection'],
    year: 2025,
  },
  {
    id: 'ts-004',
    topic: 'typescript',
    difficulty: 'mid',
    type: 'mcq',
    question: 'Which statement about `interface` vs `type` in TypeScript is accurate?',
    options: [
      'Only `type` can be used with `implements` in a class',
      'Only `interface` can describe a callable signature',
      'Both `interface` and `type` support declaration merging',
      '`interface` supports `extends` with multiple types; `type` uses `&` for intersections',
    ],
    answer: 3,
    explanation:
      '`interface` uses `extends` (e.g., `interface A extends B, C {}`), while `type` uses intersections (`type A = B & C`). Both describe callable signatures. Only `interface` supports declaration merging. Both `interface` and `type` can be used with `implements`.',
    tags: ['interface', 'type-alias', 'extends', 'intersection'],
    year: 2025,
  },

  // --- Generics ---
  {
    id: 'ts-005',
    topic: 'typescript',
    difficulty: 'junior',
    type: 'code-output',
    question: 'What is the output of the following TypeScript code?',
    code: `function identity<T>(value: T): T {
  return value;
}

const a = identity(42);
const b = identity('hello');

console.log(typeof a, typeof b);`,
    answer: 'number string',
    explanation:
      'TypeScript infers generic type arguments from the call site. `identity(42)` infers `T = number`, so `a` is `number`. `identity("hello")` infers `T = string`, so `b` is `string`. At runtime the types are gone, but `typeof` reflects the JavaScript runtime types.',
    tags: ['generics', 'type-inference'],
    year: 2025,
  },
  {
    id: 'ts-006',
    topic: 'typescript',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What does the generic constraint `<T extends { length: number }>` ensure?',
    options: [
      'T must be an array type',
      'T must be a string or array',
      'T must have a numeric `length` property',
      'T must extend the built-in `Array` class',
    ],
    answer: 2,
    explanation:
      'The constraint `T extends { length: number }` uses structural typing: any type that has a `length: number` property satisfies it. This includes strings, arrays, typed arrays, and even custom objects with a `length` property — not just arrays.',
    tags: ['generics', 'constraints', 'structural-typing'],
    year: 2025,
  },
  {
    id: 'ts-007',
    topic: 'typescript',
    difficulty: 'senior',
    type: 'code-output',
    question: 'What TypeScript type does `getProperty` return in the call below?',
    code: `function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { id: 1, name: 'Alice', active: true };
const val = getProperty(user, 'active');`,
    answer: 'boolean',
    explanation:
      '`T` is inferred as `{ id: number; name: string; active: boolean }` and `K` is `"active"`. The return type `T[K]` is a lookup type that resolves to `boolean` — the type of `user["active"]`. This pattern provides type-safe property access.',
    tags: ['generics', 'keyof', 'indexed-access-types'],
    year: 2025,
  },
  {
    id: 'ts-008',
    topic: 'typescript',
    difficulty: 'senior',
    type: 'debug',
    question: 'The following generic class has a TypeScript error. Identify and fix it.',
    code: `class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T {
    return this.items.pop();
  }
}`,
    answer:
      "The return type of `pop()` should be `T | undefined` because `Array.prototype.pop()` returns `T | undefined` when the array may be empty. Fix: `pop(): T | undefined { return this.items.pop(); }`",
    explanation:
      '`Array<T>.pop()` returns `T | undefined` — it returns `undefined` when the array is empty. Declaring the return type as `T` without `undefined` causes a type error under `strictNullChecks` because the actual return value from `.pop()` is `T | undefined`, which is not assignable to `T`.',
    tags: ['generics', 'generic-classes', 'strictNullChecks'],
    year: 2025,
  },

  // --- Utility Types ---
  {
    id: 'ts-009',
    topic: 'typescript',
    difficulty: 'junior',
    type: 'mcq',
    question: 'What does `Partial<User>` produce if `User` is `{ id: number; name: string; email: string }`?',
    options: [
      '{ id?: number; name?: string; email?: string }',
      '{ id: number; name?: string; email?: string }',
      '{ id?: number | null; name?: string | null; email?: string | null }',
      'It removes the `id` field and makes the rest optional',
    ],
    answer: 0,
    explanation:
      '`Partial<T>` maps all properties of `T` to optional (adds `?` modifier). Every property becomes optional while keeping its original type. It is equivalent to `{ [K in keyof T]?: T[K] }`.',
    tags: ['utility-types', 'Partial'],
    year: 2025,
  },
  {
    id: 'ts-010',
    topic: 'typescript',
    difficulty: 'mid',
    type: 'mcq',
    question: 'Given `type User = { id: number; name: string; role: string; token: string }`, what is `Omit<User, "token" | "role">`?',
    options: [
      '{ name: string; role: string }',
      '{ id: number; name: string }',
      '{ id: number; name: string; role: string }',
      '{ token: string; role: string }',
    ],
    answer: 1,
    explanation:
      "`Omit<T, K>` constructs a type by removing the keys in `K` from `T`. Omitting `\"token\"` and `\"role\"` from `User` leaves `{ id: number; name: string }`. It's equivalent to `Pick<T, Exclude<keyof T, K>>`.",
    tags: ['utility-types', 'Omit', 'Pick'],
    year: 2025,
  },
  {
    id: 'ts-011',
    topic: 'typescript',
    difficulty: 'mid',
    type: 'code-output',
    question: 'What type does `Result` resolve to?',
    code: `type ApiResponse = {
  data: string;
  status: number;
  headers: Record<string, string>;
  error?: string;
};

type Result = Pick<ApiResponse, 'data' | 'status'>;`,
    answer: '{ data: string; status: number }',
    explanation:
      "`Pick<T, K>` constructs a type by selecting only the specified keys from `T`. `Pick<ApiResponse, 'data' | 'status'>` produces `{ data: string; status: number }`, discarding `headers` and the optional `error` property.",
    tags: ['utility-types', 'Pick'],
    year: 2025,
  },
  {
    id: 'ts-012',
    topic: 'typescript',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What does `Record<string, number>` represent?',
    options: [
      'An array of numbers indexed by strings',
      'An object type where all keys are `string` and all values are `number`',
      'A Map from string to number',
      'A type that can be either a string or a number',
    ],
    answer: 1,
    explanation:
      '`Record<K, V>` constructs an object type with keys of type `K` and values of type `V`. `Record<string, number>` is equivalent to `{ [key: string]: number }`. It is commonly used for dictionaries and lookup tables.',
    tags: ['utility-types', 'Record'],
    year: 2025,
  },
  {
    id: 'ts-013',
    topic: 'typescript',
    difficulty: 'senior',
    type: 'code-output',
    question: 'What does `Extracted` resolve to?',
    code: `type Status = 'pending' | 'active' | 'inactive' | 'deleted';

type Extracted = Extract<Status, 'active' | 'inactive' | 'archived'>;`,
    answer: '"active" | "inactive"',
    explanation:
      "`Extract<T, U>` returns only the members of `T` that are assignable to `U`. From `Status`, the values `'active'` and `'inactive'` exist in both `T` and `U`. `'archived'` is in `U` but not `T`, so it is excluded. `'pending'` and `'deleted'` are in `T` but not `U`, so they are also excluded.",
    tags: ['utility-types', 'Extract', 'Exclude'],
    year: 2025,
  },
  {
    id: 'ts-014',
    topic: 'typescript',
    difficulty: 'senior',
    type: 'code-output',
    question: 'What are the types of `Params` and `Return` below?',
    code: `function fetchUser(id: number, includeRoles: boolean): Promise<{ name: string }> {
  return Promise.resolve({ name: 'Alice' });
}

type Params = Parameters<typeof fetchUser>;
type Return = ReturnType<typeof fetchUser>;`,
    answer: 'Params = [id: number, includeRoles: boolean], Return = Promise<{ name: string }>',
    explanation:
      '`Parameters<T>` extracts a function\'s parameter types as a labeled tuple. `ReturnType<T>` extracts the function\'s return type. These utility types are useful for wrapping or decorating existing functions without duplicating their signatures.',
    tags: ['utility-types', 'Parameters', 'ReturnType'],
    year: 2025,
  },
  {
    id: 'ts-015',
    topic: 'typescript',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is the difference between `Required<T>` and `NonNullable<T>`?',
    options: [
      '`Required<T>` removes all `?` modifiers; `NonNullable<T>` removes `null` and `undefined` from a union',
      '`Required<T>` removes `null`; `NonNullable<T>` removes `undefined`',
      'They are aliases for the same operation',
      '`Required<T>` works on object types; `NonNullable<T>` works on primitive types only',
    ],
    answer: 0,
    explanation:
      '`Required<T>` maps all properties to required by removing `?` modifiers: `{ [K in keyof T]-?: T[K] }`. `NonNullable<T>` removes `null` and `undefined` from a type union: `NonNullable<string | null | undefined>` → `string`. They operate on different levels — one on object property optionality, the other on type union membership.',
    tags: ['utility-types', 'Required', 'NonNullable'],
    year: 2025,
  },

  // --- Type Narrowing and Type Guards ---
  {
    id: 'ts-016',
    topic: 'typescript',
    difficulty: 'junior',
    type: 'code-output',
    question: 'What is logged to the console?',
    code: `function printLength(value: string | number): void {
  if (typeof value === 'string') {
    console.log(value.length);
  } else {
    console.log(value.toFixed(2));
  }
}

printLength('hello');
printLength(3.14159);`,
    answer: '5\n3.14',
    explanation:
      '`typeof value === "string"` narrows the type to `string` inside the `if` block, allowing `.length`. In the `else` branch TypeScript knows `value` is `number`, allowing `.toFixed(2)`. `"hello".length` is `5` and `(3.14159).toFixed(2)` is `"3.14"`.',
    tags: ['type-narrowing', 'typeof', 'type-guards'],
    year: 2025,
  },
  {
    id: 'ts-017',
    topic: 'typescript',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is a "discriminated union" in TypeScript?',
    options: [
      'A union type that can only contain two members',
      'A union of object types each sharing a common literal property used for narrowing',
      'A union type with `never` as one of its members',
      'A union type where all members are discriminated against `null`',
    ],
    answer: 1,
    explanation:
      'A discriminated union is a union of object types that share a common "discriminant" property with distinct literal types (e.g., `kind: "circle"` vs `kind: "square"`). TypeScript uses this discriminant to narrow the type in control flow, enabling exhaustive checking.',
    tags: ['discriminated-unions', 'type-narrowing'],
    year: 2025,
  },
  {
    id: 'ts-018',
    topic: 'typescript',
    difficulty: 'mid',
    type: 'code-output',
    question: 'What does TypeScript infer as the type of `shape` in each branch?',
    code: `type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'rect'; width: number; height: number };

function area(shape: Shape): number {
  switch (shape.kind) {
    case 'circle':
      // shape is ___?
      return Math.PI * shape.radius ** 2;
    case 'rect':
      // shape is ___?
      return shape.width * shape.height;
  }
}`,
    answer: 'circle branch: { kind: "circle"; radius: number }, rect branch: { kind: "rect"; width: number; height: number }',
    explanation:
      "TypeScript's control-flow analysis uses the `shape.kind` literal discriminant to narrow the union. In the `'circle'` case, `shape` narrows to `{ kind: 'circle'; radius: number }`, giving access to `.radius`. In the `'rect'` case it narrows to the rect variant. The `switch` also enables exhaustive checking.",
    tags: ['discriminated-unions', 'type-narrowing', 'switch'],
    year: 2025,
  },
  {
    id: 'ts-019',
    topic: 'typescript',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is a user-defined type guard and when should you use one?',
    options: [
      'A generic constraint that limits the types accepted by a function',
      'A function with return type `value is T` that tells TypeScript how to narrow a type',
      'A conditional type that narrows based on `extends` checks',
      'An assertion function that throws if the value is not the expected type',
    ],
    answer: 1,
    explanation:
      'A user-defined type guard is a function whose return type is a type predicate: `function isString(val: unknown): val is string { return typeof val === "string"; }`. When this function returns `true`, TypeScript narrows the type of `val` to `string` in the calling scope. Use them when built-in narrowing (`typeof`, `instanceof`, `in`) is insufficient for your type checks.',
    tags: ['type-guards', 'type-predicates', 'narrowing'],
    year: 2025,
  },
  {
    id: 'ts-020',
    topic: 'typescript',
    difficulty: 'senior',
    type: 'debug',
    question: 'The following type guard has a subtle bug. What is it?',
    code: `interface Cat { meow(): void; }
interface Dog { bark(): void; }

function isCat(animal: Cat | Dog): animal is Cat {
  return (animal as Cat).meow !== undefined;
}

function makeNoise(animal: Cat | Dog) {
  if (isCat(animal)) {
    animal.meow();
  } else {
    animal.bark();
  }
}`,
    answer:
      "The guard checks `!== undefined` but `(animal as Cat).meow` on a Dog will return `undefined` at runtime — however the cast silences TypeScript. The real bug: accessing `.meow` via `as Cat` cast on a Dog object returns `undefined` correctly, so the logic works — BUT if a Dog accidentally has a `.meow` property the guard fails. The safer check is `typeof (animal as Cat).meow === 'function'`.",
    explanation:
      "The type assertion `(animal as Cat)` bypasses TypeScript's type checking, relying entirely on the runtime value. The comparison `!== undefined` is acceptable since method access on a missing property returns `undefined`. However, the more idiomatic and reliable check is `typeof (animal as Cat).meow === 'function'` or using the `in` operator: `return 'meow' in animal`.",
    tags: ['type-guards', 'type-predicates', 'instanceof', 'in-operator'],
    year: 2025,
  },

  // --- Conditional Types, Mapped Types, Template Literal Types ---
  {
    id: 'ts-021',
    topic: 'typescript',
    difficulty: 'senior',
    type: 'code-output',
    question: 'What does `IsString` resolve to for each type argument?',
    code: `type IsString<T> = T extends string ? 'yes' : 'no';

type A = IsString<string>;
type B = IsString<number>;
type C = IsString<'hello'>;
type D = IsString<string | number>;`,
    answer: 'A = "yes", B = "no", C = "yes", D = "yes" | "no"',
    explanation:
      'Conditional types distribute over union types by default. For `D`, TypeScript distributes `IsString` over each union member: `IsString<string>` → `"yes"`, `IsString<number>` → `"no"`, resulting in `"yes" | "no"`. This distributive behavior is a key characteristic of conditional types when the checked type is a naked type parameter.',
    tags: ['conditional-types', 'distributive-conditional-types'],
    year: 2025,
  },
  {
    id: 'ts-022',
    topic: 'typescript',
    difficulty: 'senior',
    type: 'code-output',
    question: 'What type does `Readonly` produce for `Config`?',
    code: `type Config = {
  host: string;
  port: number;
  ssl: boolean;
};

type ReadonlyConfig = {
  readonly [K in keyof Config]: Config[K];
};`,
    answer: '{ readonly host: string; readonly port: number; readonly ssl: boolean }',
    explanation:
      'This is a mapped type using `keyof` to iterate over all properties of `Config` and add the `readonly` modifier. This is equivalent to the built-in `Readonly<Config>`. Mapped types can add or remove modifiers (`readonly`, `?`) using `+` (default) or `-` prefix.',
    tags: ['mapped-types', 'keyof', 'readonly'],
    year: 2025,
  },
  {
    id: 'ts-023',
    topic: 'typescript',
    difficulty: 'lead',
    type: 'code-output',
    question: 'What does `EventMap` resolve to?',
    code: `type Events = 'click' | 'focus' | 'blur';

type EventMap = {
  [K in Events as \`on\${Capitalize<K>}\`]: () => void;
};`,
    answer: '{ onClick: () => void; onFocus: () => void; onBlur: () => void }',
    explanation:
      "This uses a mapped type with key remapping via `as`. The template literal type `` `on${Capitalize<K>}` `` transforms each event name: `'click'` → `'onClick'`, `'focus'` → `'onFocus'`, `'blur'` → `'onBlur'`. `Capitalize` is a built-in intrinsic string manipulation type. This pattern is used internally by React's event handler types.",
    tags: ['mapped-types', 'template-literal-types', 'key-remapping', 'Capitalize'],
    year: 2025,
  },
  {
    id: 'ts-024',
    topic: 'typescript',
    difficulty: 'lead',
    type: 'mcq',
    question: 'What does `infer` do in a conditional type?',
    options: [
      'It infers the type of a variable from its value at compile time',
      'It declares a type variable to be captured within the `extends` clause of a conditional type',
      'It forces TypeScript to widen a narrow type to its base type',
      'It removes `null` and `undefined` from an inferred type',
    ],
    answer: 1,
    explanation:
      '`infer` introduces a type variable within the `extends` clause of a conditional type that TypeScript will "infer" (capture) when the condition is matched. Example: `type UnpackPromise<T> = T extends Promise<infer U> ? U : T`. Here `U` captures whatever type the Promise wraps. This is how `ReturnType`, `Parameters`, and similar built-in utility types are implemented.',
    tags: ['conditional-types', 'infer', 'advanced-types'],
    year: 2025,
  },
  {
    id: 'ts-025',
    topic: 'typescript',
    difficulty: 'lead',
    type: 'code-output',
    question: 'What does `UnwrapPromise<T>` return for each type below?',
    code: `type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

type A = UnwrapPromise<Promise<string>>;
type B = UnwrapPromise<Promise<number[]>>;
type C = UnwrapPromise<boolean>;`,
    answer: 'A = string, B = number[], C = boolean',
    explanation:
      'For `A`, `T` is `Promise<string>`, which matches `Promise<infer U>` with `U = string`, so the result is `string`. For `B`, `U` is inferred as `number[]`. For `C`, `boolean` does not extend `Promise<infer U>`, so the false branch `T` is returned, yielding `boolean` unchanged.',
    tags: ['conditional-types', 'infer', 'Promise'],
    year: 2025,
  },

  // --- Declaration Merging, Module Augmentation ---
  {
    id: 'ts-026',
    topic: 'typescript',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is module augmentation used for in TypeScript?',
    options: [
      'Splitting a large module into smaller files',
      'Adding new exports to an existing external module without modifying its source',
      'Creating barrel exports from multiple modules',
      'Overriding types from a module with a newer version',
    ],
    answer: 1,
    explanation:
      "Module augmentation lets you add declarations to an existing module using `declare module 'module-name' {}` syntax inside your own `.d.ts` or `.ts` files. Common use cases: adding custom properties to `Express.Request`, extending `process.env` types, adding methods to third-party classes.",
    tags: ['declaration-merging', 'module-augmentation', 'ambient-declarations'],
    year: 2025,
  },
  {
    id: 'ts-027',
    topic: 'typescript',
    difficulty: 'lead',
    type: 'mcq',
    question: 'How do you add a `currentUser` property to `Express.Request` using TypeScript module augmentation?',
    options: [
      "Directly edit `node_modules/@types/express/index.d.ts`",
      "Create a `custom.d.ts` file with `declare module 'express' { interface Request { currentUser?: User } }`",
      "Create a class that extends `express.Request` and add the property",
      "Use `Partial<Request>` and spread it into a new interface",
    ],
    answer: 1,
    explanation:
      "Module augmentation via `declare module 'express'` reopens the Express module's namespace and merges new declarations. Since Express uses `interface Request`, and interfaces support declaration merging, you can add `currentUser?: User` without touching node_modules. This is the idiomatic TypeScript approach for extending library types.",
    tags: ['module-augmentation', 'declaration-merging', 'express'],
    year: 2025,
  },

  // --- Enums vs Union Types ---
  {
    id: 'ts-028',
    topic: 'typescript',
    difficulty: 'mid',
    type: 'mcq',
    question: 'Which is generally preferred in modern TypeScript — `enum` or string literal union types?',
    options: [
      '`enum` is always preferred for its superior runtime representation',
      'String literal union types are often preferred because they are erased at compile time and avoid runtime overhead',
      '`const enum` is always preferred over both',
      'There is no practical difference between the two',
    ],
    answer: 1,
    explanation:
      'String literal unions (`type Direction = "north" | "south" | "east" | "west"`) are compile-time only — zero runtime overhead. Regular `enum` generates JavaScript code (an object). `const enum` is inlined but has issues with `isolatedModules` (used by Babel/esbuild/Vite). For most cases, string literal unions or `as const` objects are the idiomatic modern TypeScript choice.',
    tags: ['enums', 'union-types', 'const-enum', 'as-const'],
    year: 2025,
  },
  {
    id: 'ts-029',
    topic: 'typescript',
    difficulty: 'mid',
    type: 'code-output',
    question: 'What is the JavaScript output of this TypeScript enum?',
    code: `enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}

console.log(Direction.Up);
console.log(Direction['Down']);`,
    answer: 'UP\nDOWN',
    explanation:
      "String enums compile to an object: `var Direction = { Up: 'UP', Down: 'DOWN', ... }`. Unlike numeric enums, string enums do NOT create reverse mappings. `Direction.Up` returns `'UP'` and `Direction['Down']` returns `'DOWN'`. String enums are the safest enum variant because their values are human-readable in logs/serialization.",
    tags: ['enums', 'string-enum', 'runtime-behavior'],
    year: 2025,
  },
  {
    id: 'ts-030',
    topic: 'typescript',
    difficulty: 'senior',
    type: 'true-false',
    question:
      '`const enum` members are always inlined at the call site and therefore produce no runtime object in the compiled JavaScript.',
    answer: true,
    explanation:
      '`const enum` instructs the TypeScript compiler to inline enum values directly, resulting in no JavaScript object. However, this only works when TypeScript compiles the file directly. With `isolatedModules: true` (required by Vite, esbuild, Babel), `const enum` in `.d.ts` files cannot be inlined and will cause errors — making them problematic in modern toolchains.',
    tags: ['const-enum', 'enums', 'isolatedModules'],
    year: 2025,
  },

  // --- unknown vs any vs never ---
  {
    id: 'ts-031',
    topic: 'typescript',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is the key difference between `unknown` and `any`?',
    options: [
      '`unknown` is a subtype of `any`; `any` is a supertype of all types',
      'You can perform any operation on `unknown` without type checking; `any` requires narrowing first',
      '`unknown` requires type narrowing before use; `any` bypasses all type checking',
      '`unknown` can only hold primitive values; `any` can hold any value including objects',
    ],
    answer: 2,
    explanation:
      '`unknown` is the type-safe counterpart to `any`. A value of type `unknown` cannot be used in operations without first narrowing its type via `typeof`, `instanceof`, or a type guard. `any` completely opts out of type checking — you can call methods, access properties, and assign it anywhere. `unknown` should be preferred over `any` when the type is genuinely unknown.',
    tags: ['unknown', 'any', 'type-safety'],
    year: 2025,
  },
  {
    id: 'ts-032',
    topic: 'typescript',
    difficulty: 'senior',
    type: 'mcq',
    question: 'In which scenario does TypeScript assign the type `never` to a variable?',
    options: [
      'When a variable is declared but never used',
      'When a function has no explicit return type annotation',
      'When all type union members have been eliminated through narrowing, leaving an impossible type',
      'When a variable is assigned `null` in strict mode',
    ],
    answer: 2,
    explanation:
      '`never` represents the bottom type — a type with no values. TypeScript assigns `never` when all union members have been eliminated (e.g., in a `switch` exhaustiveness check after all cases), when a function never returns (throws or infinite loop), or in overloaded/filtered types. `never` is assignable to every type but no type (except `never`) is assignable to it.',
    tags: ['never', 'exhaustive-checking', 'bottom-type'],
    year: 2025,
  },
  {
    id: 'ts-033',
    topic: 'typescript',
    difficulty: 'senior',
    type: 'code-output',
    question: 'Does this code compile? If not, why?',
    code: `function processValue(val: unknown): string {
  return val.toUpperCase();
}`,
    answer: "No — TypeScript error: Object is of type 'unknown'. You must narrow `val` first.",
    explanation:
      "Unlike `any`, `unknown` does not allow property access or method calls without narrowing. The fix is: `if (typeof val === 'string') { return val.toUpperCase(); }`. This is by design — `unknown` forces you to handle the type uncertainty explicitly, making it safer than `any`.",
    tags: ['unknown', 'type-narrowing', 'type-safety'],
    year: 2025,
  },

  // --- Strict Mode Options ---
  {
    id: 'ts-034',
    topic: 'typescript',
    difficulty: 'junior',
    type: 'mcq',
    question: 'What does `strictNullChecks: true` enable in TypeScript?',
    options: [
      'It prevents variables from being assigned `null` or `undefined` anywhere in the codebase',
      'It makes `null` and `undefined` distinct types that are not assignable to other types without explicit union',
      'It throws a runtime error when a null dereference occurs',
      'It converts all `null` values to `undefined` automatically',
    ],
    answer: 1,
    explanation:
      'With `strictNullChecks: true`, `null` and `undefined` are their own distinct types and are not automatically assignable to `string`, `number`, etc. You must explicitly declare `string | null` to allow null. Without this flag (the default in older TS configs), `null` and `undefined` are assignable to every type, masking potential null-dereference bugs.',
    tags: ['strictNullChecks', 'strict-mode', 'tsconfig'],
    year: 2025,
  },
  {
    id: 'ts-035',
    topic: 'typescript',
    difficulty: 'mid',
    type: 'true-false',
    question:
      'Enabling `noImplicitAny: true` in tsconfig causes TypeScript to error when a function parameter\'s type cannot be inferred and no annotation is provided.',
    answer: true,
    explanation:
      'With `noImplicitAny: true`, TypeScript will error on any variable or parameter that would otherwise be implicitly typed as `any`. For example, `function log(msg) {}` errors because `msg` has an implicit `any` type. This forces explicit type annotations and is included in the `strict: true` umbrella option. It helps catch accidental `any` types that undermine type safety.',
    tags: ['noImplicitAny', 'strict-mode', 'tsconfig'],
    year: 2025,
  },
  {
    id: 'ts-036',
    topic: 'typescript',
    difficulty: 'mid',
    type: 'mcq',
    question: 'Which tsconfig option, when enabled, causes TypeScript to error on unused local variables and parameters?',
    options: [
      '`noUnusedLocals` and `noUnusedParameters`',
      '`strictBindCallApply`',
      '`noImplicitReturns`',
      '`noFallthroughCasesInSwitch`',
    ],
    answer: 0,
    explanation:
      '`noUnusedLocals: true` reports errors for declared variables that are never read. `noUnusedParameters: true` does the same for function parameters. These are separate from `strict: true` and must be opted into explicitly. They help keep code clean and catch potential bugs where a variable was meant to be used but was accidentally omitted.',
    tags: ['tsconfig', 'noUnusedLocals', 'strict-mode'],
    year: 2026,
  },

  // --- TypeScript with React ---
  {
    id: 'ts-037',
    topic: 'typescript',
    difficulty: 'junior',
    type: 'mcq',
    question: 'What is the correct way to type a React functional component that accepts `name: string` and `age: number` props?',
    options: [
      '`const MyComp: React.FC = ({ name, age }) => ...`',
      '`const MyComp: React.FC<{ name: string; age: number }> = ({ name, age }) => ...`',
      '`const MyComp = ({ name: string, age: number }) => ...`',
      '`function MyComp(props: React.Props<{ name: string; age: number }>) { ... }`',
    ],
    answer: 1,
    explanation:
      '`React.FC<Props>` (or `React.FunctionComponent<Props>`) is the type for functional components. The generic parameter specifies the props type. In modern React with TypeScript, many teams prefer the explicit approach: `function MyComp({ name, age }: { name: string; age: number }) {}` because `React.FC` implicitly includes `children` (before React 18 changes) and has some edge cases with generics.',
    tags: ['react', 'FC', 'functional-components', 'props-typing'],
    year: 2025,
  },
  {
    id: 'ts-038',
    topic: 'typescript',
    difficulty: 'mid',
    type: 'mcq',
    question: 'How do you correctly type an `onChange` handler for an HTML `<input>` element in React?',
    options: [
      '`(e: Event) => void`',
      '`(e: InputEvent) => void`',
      '`(e: React.ChangeEvent<HTMLInputElement>) => void`',
      '`(e: React.SyntheticEvent<HTMLInputElement>) => void`',
    ],
    answer: 2,
    explanation:
      "React wraps native DOM events in `SyntheticEvent`. For `onChange` on an `<input>`, the correct type is `React.ChangeEvent<HTMLInputElement>`. The generic parameter specifies the DOM element type, giving you access to `e.target.value` as `string`. Other common event types: `React.MouseEvent<HTMLButtonElement>`, `React.FormEvent<HTMLFormElement>`.",
    tags: ['react', 'event-types', 'ChangeEvent', 'SyntheticEvent'],
    year: 2025,
  },
  {
    id: 'ts-039',
    topic: 'typescript',
    difficulty: 'senior',
    type: 'code-output',
    question: 'Does this generic React component compile? What is the type of `items` in `StringList`?',
    code: `import React from 'react';

interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function List<T>({ items, renderItem }: ListProps<T>) {
  return <ul>{items.map((item, i) => <li key={i}>{renderItem(item)}</li>)}</ul>;
}

const StringList = <List<string>
  items={['a', 'b', 'c']}
  renderItem={(item) => <span>{item}</span>}
/>;`,
    answer: "Yes, it compiles. `items` is typed as `string[]` because `T` is explicitly provided as `string`.",
    explanation:
      "Generic components in TSX are supported. When using `.tsx` files, you may need to write `<T,>` (trailing comma) or `<T extends unknown>` to avoid the JSX parser misinterpreting `<T>` as a JSX tag. With an explicit type argument `<List<string> ...>`, `T` is `string`, so `items: string[]` and `renderItem: (item: string) => ReactNode`.",
    tags: ['react', 'generic-components', 'TSX', 'FC'],
    year: 2025,
  },
  {
    id: 'ts-040',
    topic: 'typescript',
    difficulty: 'senior',
    type: 'debug',
    question: 'The following React component has a TypeScript error. Identify and fix it.',
    code: `import { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus</button>
    </div>
  );
}`,
    answer:
      "`useRef(null)` infers `RefObject<null>`. Fix: `useRef<HTMLInputElement>(null)` — this gives `RefObject<HTMLInputElement>`, making `inputRef.current` of type `HTMLInputElement | null`. Then guard the call: `inputRef.current?.focus()`.",
    explanation:
      "`useRef(null)` without a generic argument creates `MutableRefObject<null>` where `.current` is typed as `null`, so `.focus()` is not accessible. Providing the generic `useRef<HTMLInputElement>(null)` tells TypeScript this ref will hold an `HTMLInputElement`. The `.current` is then `HTMLInputElement | null`, requiring an optional chain or null check before calling `.focus()`.",
    tags: ['react', 'useRef', 'refs', 'HTMLElement-types'],
    year: 2025,
  },
  {
    id: 'ts-041',
    topic: 'typescript',
    difficulty: 'lead',
    type: 'mcq',
    question: 'What is the correct way to type the `children` prop explicitly in React 18+ with TypeScript?',
    options: [
      '`children: React.ReactChild`',
      '`children: JSX.Element`',
      '`children: React.ReactNode`',
      '`children: React.FC`',
    ],
    answer: 2,
    explanation:
      '`React.ReactNode` is the broadest type for React children — it includes `ReactElement`, `string`, `number`, `boolean`, `null`, `undefined`, and arrays/fragments thereof. `JSX.Element` is too narrow (only elements, not strings/numbers). `ReactChild` is deprecated in React 18. In React 18, `React.FC` no longer implicitly includes `children`, so it must be explicitly typed as `React.ReactNode`.',
    tags: ['react', 'children', 'ReactNode', 'React18'],
    year: 2026,
  },
  {
    id: 'ts-042',
    topic: 'typescript',
    difficulty: 'lead',
    type: 'code-output',
    question: 'What is the inferred type of `value` from `useLocalStorage`?',
    code: `import { useState } from 'react';

function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);

  const setStoredValue = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setStoredValue] as const;
}

const [count, setCount] = useLocalStorage('count', 0);`,
    answer: 'count: number, setCount: (newValue: number) => void',
    explanation:
      "`T` is inferred as `number` from `initialValue = 0`. `useState<number>` returns `[number, Dispatch<SetStateAction<number>>]`, but `setStoredValue` wraps it with type `(newValue: T) => void`. The `as const` assertion returns a `readonly` tuple `[T, (newValue: T) => void]`, so destructuring correctly types `count` as `number` and `setCount` as `(newValue: number) => void`.",
    tags: ['react', 'custom-hooks', 'generics', 'as-const', 'useState'],
    year: 2025,
  },
  {
    id: 'ts-043',
    topic: 'typescript',
    difficulty: 'lead',
    type: 'mcq',
    question:
      'You have a deeply nested object type and want a utility type that makes ALL nested properties optional (deep partial). What is the correct implementation?',
    options: [
      '`type DeepPartial<T> = Partial<T>`',
      '`type DeepPartial<T> = { [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K] }`',
      '`type DeepPartial<T> = { [K in keyof T]-?: DeepPartial<T[K]> }`',
      '`type DeepPartial<T> = T extends object ? Partial<T> : T`',
    ],
    answer: 1,
    explanation:
      'The recursive approach maps each key to optional and, if the value type is an `object`, recurses into it with `DeepPartial`. This handles arbitrarily nested objects. Note: using `extends object` is a simplified check — for production use, you may want to exclude `Date`, `Array`, and other built-in types from recursion. The `-?` modifier in option C would make properties required (removing optionality), which is wrong.',
    tags: ['mapped-types', 'recursive-types', 'Partial', 'advanced-types'],
    year: 2025,
  },

  // ─── SATISFIES OPERATOR ──────────────────────────────────────────────────────
  {
    id: 'ts-044',
    topic: 'typescript',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is the primary benefit of the `satisfies` operator (TypeScript 4.9) over a type annotation?',
    options: [
      'It generates faster JavaScript output than a type annotation',
      'It validates that a value matches a type while preserving the most specific inferred type, rather than widening it to the annotation type',
      'It is the only way to annotate object literals in TypeScript',
      'It allows a value to satisfy multiple types simultaneously at runtime',
    ],
    answer: 1,
    explanation:
      'With a type annotation (`const palette: Record<string, string> = {...}`), the type is widened to `Record<string, string>`, losing specific keys. With `satisfies`, the expression is checked against the type but the inferred type is preserved. Example: `const palette = { red: "#ff0000" } satisfies Record<string, string>` — TypeScript knows `palette.red` exists and is a `string`, while still catching typos in keys or wrong value types.',
    references: [
      'https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html#the-satisfies-operator',
    ],
    tags: ['satisfies', 'type-inference', 'ts4.9'],
    year: 2025,
  },
  {
    id: 'ts-045',
    topic: 'typescript',
    difficulty: 'senior',
    type: 'code-output',
    question: 'What is the inferred type of `config.port` in each case?',
    code: `type Config = { port: number | string; host: string }

// Case A — type annotation
const configA: Config = { port: 3000, host: 'localhost' }
// configA.port is: ___

// Case B — satisfies
const configB = { port: 3000, host: 'localhost' } satisfies Config
// configB.port is: ___`,
    answer: 'configA.port: number | string  |  configB.port: number',
    explanation:
      'With the annotation `configA: Config`, TypeScript widens `port` to the declared type `number | string`. With `satisfies Config`, TypeScript validates the object against `Config` but preserves the more precise inferred type, so `configB.port` is `number` (since `3000` is a number). This is the key difference: `satisfies` gives you type-safety without type widening.',
    references: [
      'https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html#the-satisfies-operator',
    ],
    tags: ['satisfies', 'type-widening', 'type-inference'],
    year: 2025,
  },
  {
    id: 'ts-046',
    topic: 'typescript',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What does `const` in a generic type parameter position do in TypeScript 5.0?',
    options: [
      'It prevents the generic function from being called with mutable arguments',
      'It infers the type argument as a literal/const type rather than widening it, similar to using `as const` at the call site',
      'It marks the generic parameter as read-only throughout the function body',
      'It causes the generic to be evaluated at compile time only',
    ],
    answer: 1,
    explanation:
      'TypeScript 5.0 introduced `const` type parameters: `function identity<const T>(value: T): T`. Without `const`, `identity(["a", "b"])` infers `T = string[]`. With `const`, it infers `T = readonly ["a", "b"]`, preserving the tuple structure and literal types. This saves callers from having to write `identity(["a", "b"] as const)`.',
    references: [
      'https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-0.html#const-type-parameters',
    ],
    tags: ['const-type-parameters', 'generics', 'ts5.0', 'as-const'],
    year: 2025,
  },
  {
    id: 'ts-047',
    topic: 'typescript',
    difficulty: 'lead',
    type: 'code-output',
    question: 'What are the inferred types of `a` and `b`?',
    code: `function wrap<T>(value: T): T { return value }
function wrapConst<const T>(value: T): T { return value }

const a = wrap(['x', 'y', 'z'])
const b = wrapConst(['x', 'y', 'z'])`,
    answer: 'a: string[]  |  b: readonly ["x", "y", "z"]',
    explanation:
      'Without `const`, TypeScript widens the array literal to `string[]`. With `const T`, it preserves the tuple structure and literal string types, inferring `readonly ["x", "y", "z"]`. This is equivalent to the caller writing `wrapConst(["x", "y", "z"] as const)` but removes that burden.',
    references: [
      'https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-0.html#const-type-parameters',
    ],
    tags: ['const-type-parameters', 'generics', 'ts5.0', 'tuple-types'],
    year: 2025,
  },
  {
    id: 'ts-048',
    topic: 'typescript',
    difficulty: 'lead',
    type: 'mcq',
    question: 'What does the `using` keyword (Explicit Resource Management, TypeScript 5.2) do?',
    options: [
      'It imports a module and immediately disposes it after use',
      'It declares a variable whose `[Symbol.dispose]()` method is automatically called when the block scope exits, enabling deterministic cleanup of resources',
      'It is an alias for `const` that prevents reassignment and property mutation',
      'It creates a WeakRef to the value so it can be garbage-collected sooner',
    ],
    answer: 1,
    explanation:
      '`using` (and `await using` for async disposal) is part of the TC39 Explicit Resource Management proposal (Stage 3). A `using` variable must implement `[Symbol.dispose]()` (or `[Symbol.asyncDispose]()` for `await using`). When the block exits — normally or via exception — the dispose method is called automatically. This pattern replaces manual `try/finally` cleanup for database connections, file handles, locks, etc.',
    references: [
      'https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-2.html#using-declarations-and-explicit-resource-management',
    ],
    tags: ['using', 'await-using', 'explicit-resource-management', 'ts5.2', 'Symbol.dispose'],
    year: 2025,
  },
  {
    id: 'ts-049',
    topic: 'typescript',
    difficulty: 'lead',
    type: 'code-output',
    question: 'What happens when this code runs and the block exits?',
    code: `function getConnection() {
  return {
    query(sql: string) { return \`result of: \${sql}\` },
    [Symbol.dispose]() { console.log('Connection closed') },
  }
}

function doWork() {
  using conn = getConnection()
  console.log(conn.query('SELECT 1'))
} // <-- Symbol.dispose is called here

doWork()`,
    options: [
      'result of: SELECT 1  (dispose is never called)',
      'result of: SELECT 1\nConnection closed',
      'Connection closed\nresult of: SELECT 1',
      'TypeError: Symbol.dispose is not defined',
    ],
    answer: 1,
    explanation:
      'With `using`, `[Symbol.dispose]()` is called automatically when the enclosing block exits. The `query` runs first (logging its result), then when `doWork` returns, TypeScript\'s compiled output calls `conn[Symbol.dispose]()`, logging `"Connection closed"`. The order is: body runs first, then dispose on exit.',
    references: [
      'https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-2.html#using-declarations-and-explicit-resource-management',
    ],
    tags: ['using', 'Symbol.dispose', 'explicit-resource-management', 'ts5.2'],
    year: 2025,
  },
  {
    id: 'ts-050',
    topic: 'typescript',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What does the `NoInfer<T>` utility type (TypeScript 5.4) do?',
    options: [
      'It prevents a type parameter from being inferred from a specific argument position, forcing the caller to provide it explicitly',
      'It marks a type as non-nullable without using `NonNullable`',
      'It disables type widening for literal types in the annotated position',
      'It is an alias for `never` used to signal impossible code paths',
    ],
    answer: 0,
    explanation:
      '`NoInfer<T>` wraps a type to exclude that usage site from contributing to generic inference. Example: `function createState<T>(initial: T, fallback: NoInfer<T>): T`. Without `NoInfer`, TypeScript might infer `T = string | "active"` from both arguments. With `NoInfer` on `fallback`, only `initial` drives inference — `fallback` is then checked against the already-inferred `T`, tightening type safety.',
    references: [
      'https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-4.html#the-noinfer-utility-type',
    ],
    tags: ['NoInfer', 'utility-types', 'generics', 'ts5.4'],
    year: 2025,
  },
  {
    id: 'ts-051',
    topic: 'typescript',
    difficulty: 'lead',
    type: 'mcq',
    question: 'What are variadic tuple types in TypeScript and what problem do they solve?',
    options: [
      'Tuples that automatically resize based on the number of arguments passed at runtime',
      'Tuple types that can spread other tuple types using `...T` syntax, enabling precise typing of functions that concatenate or manipulate tuples — solving the previously impossible task of typing functions like `concat<A, B>(a: A[], b: B[]): [...A, ...B]`',
      'Arrays with a variable length where all elements have the same type',
      'Tuple types that allow optional elements in any position',
    ],
    answer: 1,
    explanation:
      'Variadic tuples (TypeScript 4.0) allow spreading generic tuple type parameters: `type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U]`. This enables precise typing of `concat`, `prepend`, `append`, and similar structural operations that were previously typed with lossy overloads. They also enable typed rest parameters with leading/trailing elements: `[string, ...number[], boolean]`.',
    references: [
      'https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#variadic-tuple-types',
    ],
    tags: ['variadic-tuple-types', 'tuples', 'generics', 'ts4.0'],
    year: 2025,
  },
  {
    id: 'ts-052',
    topic: 'typescript',
    difficulty: 'lead',
    type: 'code-output',
    question: 'What does `Joined` resolve to?',
    code: `type Prepend<T, U extends unknown[]> = [T, ...U]
type Append<T extends unknown[], U> = [...T, U]

type A = Prepend<string, [number, boolean]>
type B = Append<[string, number], boolean>`,
    answer: 'A = [string, number, boolean]  |  B = [string, number, boolean]',
    explanation:
      'Variadic tuple spreads let you structurally compose tuples. `Prepend<string, [number, boolean]>` spreads `[number, boolean]` after `string`, giving `[string, number, boolean]`. `Append<[string, number], boolean>` spreads `[string, number]` and appends `boolean`, also giving `[string, number, boolean]`. Both resolve to the same type through different composition paths.',
    references: [
      'https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#variadic-tuple-types',
    ],
    tags: ['variadic-tuple-types', 'tuples', 'generics'],
    year: 2025,
  },
  {
    id: 'ts-053',
    topic: 'typescript',
    difficulty: 'lead',
    type: 'mcq',
    question: 'What is a "recursive conditional type" and what is its main limitation in older TypeScript versions?',
    options: [
      'A conditional type that uses `infer` recursively — limited to 10 levels of recursion',
      'A conditional type that references itself in its branches, enabling deep type-level operations like `DeepReadonly` or `Flatten`. In TypeScript < 4.1 they could cause infinite recursion errors; 4.1+ introduced tail-call optimisation for recursive types',
      'Any type that uses `extends` more than once — limited to 5 chained conditions',
      'A mapped type with a recursive property — limited to reference types only',
    ],
    answer: 1,
    explanation:
      'Recursive conditional types reference themselves: `type DeepReadonly<T> = T extends object ? { readonly [K in keyof T]: DeepReadonly<T[K]> } : T`. Before TypeScript 4.1, deeply recursive types would hit "Type instantiation is excessively deep" errors. TypeScript 4.1+ optimises tail-recursive conditional types. Real-world uses: `DeepPartial`, `DeepReadonly`, `JSONValue`, path accessor types.',
    references: [
      'https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#recursive-conditional-types',
    ],
    tags: ['recursive-conditional-types', 'conditional-types', 'ts4.1', 'advanced-types'],
    year: 2025,
  },
  {
    id: 'ts-054',
    topic: 'typescript',
    difficulty: 'lead',
    type: 'mcq',
    question: 'What is the "branded types" (nominal typing) pattern in TypeScript and why is it used?',
    options: [
      'Using class inheritance to create distinct subtypes that TypeScript treats differently',
      'Creating a type intersection with a unique phantom property to distinguish structurally identical types (e.g., `UserId` vs `OrderId`) that TypeScript\'s structural type system would otherwise treat as interchangeable',
      'Adding JSDoc `@brand` tags to types so documentation tools can group them',
      'Using enum values as type identifiers for discriminated unions',
    ],
    answer: 1,
    explanation:
      'TypeScript uses structural typing — `UserId = string` and `OrderId = string` are identical. Branded types add a phantom brand: `type UserId = string & { readonly _brand: "UserId" }`. Now `UserId` and `OrderId` are structurally distinct even though both are strings at runtime. Constructors validate and cast: `function createUserId(id: string): UserId { return id as UserId }`. This prevents accidentally passing an `OrderId` where a `UserId` is expected.',
    references: [
      'https://www.typescriptlang.org/play#example/nominal-typing',
    ],
    tags: ['branded-types', 'nominal-typing', 'phantom-types', 'advanced-types'],
    year: 2025,
  },
  {
    id: 'ts-055',
    topic: 'typescript',
    difficulty: 'lead',
    type: 'code-output',
    question: 'Does this code compile? What error occurs if any?',
    code: `type UserId = string & { readonly _brand: 'UserId' }
type OrderId = string & { readonly _brand: 'OrderId' }

function createUserId(id: string): UserId {
  return id as UserId
}

function getUser(id: UserId): void {
  console.log('Getting user', id)
}

const orderId = 'order-123' as OrderId
getUser(orderId) // Is this allowed?`,
    answer: "No — TypeScript error: Argument of type 'OrderId' is not assignable to parameter of type 'UserId' because the _brand properties differ.",
    explanation:
      'The branded intersection makes `UserId` and `OrderId` structurally distinct types despite both being strings. The `_brand` literal types `"UserId"` and `"OrderId"` differ, so TypeScript rejects passing an `OrderId` where a `UserId` is expected. This is the purpose of branded types: compile-time safety with zero runtime overhead.',
    references: [
      'https://www.typescriptlang.org/play#example/nominal-typing',
    ],
    tags: ['branded-types', 'nominal-typing', 'type-safety'],
    year: 2025,
  },
  {
    id: 'ts-056',
    topic: 'typescript',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is the `bundler` module resolution strategy in TypeScript 5.0 and when should you use it?',
    options: [
      'It bundles all TypeScript files into a single output file',
      'It emulates how modern bundlers (Vite, esbuild, Webpack 5) resolve modules — supporting `exports` field in `package.json`, extensionless imports, and `index` file resolution — without enforcing Node.js strict extension requirements',
      'It disables all module resolution and relies entirely on path mappings in `tsconfig.json`',
      'It enables tree-shaking at the TypeScript type level',
    ],
    answer: 1,
    explanation:
      '`moduleResolution: "bundler"` was introduced in TypeScript 5.0 for projects using bundlers. Unlike `node16`/`nodenext` (which require explicit `.js` extensions in imports), `bundler` allows extensionless imports and supports the `exports` field in `package.json`. It does NOT allow CommonJS `require` with `import` syntax. Pair it with `module: "esnext"` and `moduleDetection: "force"` for modern bundler setups.',
    references: [
      'https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-0.html#resolution-customization-flags',
    ],
    tags: ['module-resolution', 'bundler', 'ts5.0', 'tsconfig', 'node16'],
    year: 2025,
  },
  {
    id: 'ts-057',
    topic: 'typescript',
    difficulty: 'senior',
    type: 'true-false',
    question: 'With `moduleResolution: "node16"` or `"nodenext"`, TypeScript requires that relative imports use the `.js` extension even when importing `.ts` source files.',
    answer: true,
    explanation:
      'In `node16`/`nodenext` mode, TypeScript follows Node.js ESM resolution semantics, which requires explicit file extensions. When you import `./utils`, Node.js looks for `./utils` exactly — no extension guessing. TypeScript resolves `import "./utils.js"` by looking for `utils.ts`, `utils.tsx`, or `utils.d.ts`. This is a common source of confusion: you write `.js` in your TS source but TypeScript resolves to `.ts` files.',
    references: [
      'https://www.typescriptlang.org/docs/handbook/modules/theory.html#module-resolution',
    ],
    tags: ['module-resolution', 'node16', 'nodenext', 'esm', 'tsconfig'],
    year: 2025,
  },
  {
    id: 'ts-058',
    topic: 'typescript',
    difficulty: 'senior',
    type: 'mcq',
    question: 'In a `.d.ts` declaration file, what is the purpose of `declare module "module-name"` vs `declare global`?',
    options: [
      '`declare module` creates a new module that can be imported; `declare global` adds types that are always available without importing',
      'They are interchangeable — both augment the global scope',
      '`declare module` applies to external modules; `declare global` applies to ambient script files only',
      '`declare global` is deprecated in favour of `declare module "globalThis"`',
    ],
    answer: 0,
    explanation:
      '`declare module "name"` augments or declares the shape of an importable module — used for module augmentation (`declare module "express"`) or declaring untyped modules (`declare module "*.svg"`). `declare global { ... }` inside a module file adds declarations to the global scope (like `window`, `process.env` extensions) without requiring imports. In ambient script files (no imports/exports), declarations are global by default.',
    references: [
      'https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html',
    ],
    tags: ['declaration-files', 'd.ts', 'declare-module', 'declare-global', 'ambient'],
    year: 2025,
  },
  {
    id: 'ts-059',
    topic: 'typescript',
    difficulty: 'senior',
    type: 'debug',
    question: 'This declaration file has an error. What is wrong?',
    code: `// types/my-lib.d.ts
declare module 'my-lib' {
  export function greet(name: string): string
  export const version = '1.0.0'  // <-- error here
}`,
    answer: "In a `declare module` block, you cannot initialise values — `export const version = '1.0.0'` is an error because ambient declarations only declare types/shapes, not values. Fix: `export const version: string`",
    explanation:
      "Ambient declaration files describe the shape of existing JavaScript — they cannot contain value initializers. `export const version = '1.0.0'` attempts to assign a value, which is invalid in an ambient context. The correct form is a type annotation: `export const version: string`. Similarly, `declare function` and `declare class` cannot have method bodies.",
    references: [
      'https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html',
    ],
    tags: ['declaration-files', 'd.ts', 'ambient-declarations', 'debug'],
    year: 2025,
  },
  {
    id: 'ts-060',
    topic: 'typescript',
    difficulty: 'lead',
    type: 'code-output',
    question: 'What does `GetRouteParams` resolve to?',
    code: `type GetRouteParams<T extends string> =
  T extends \`\${string}:\${infer Param}/\${infer Rest}\`
    ? Param | GetRouteParams<\`/\${Rest}\`>
    : T extends \`\${string}:\${infer Param}\`
    ? Param
    : never

type Params = GetRouteParams<'/users/:userId/posts/:postId'>`,
    answer: '"userId" | "postId"',
    explanation:
      'This uses recursive conditional types with template literal inference to extract route parameter names. The first branch matches `/:param/rest` patterns and recursively processes the rest. The second branch matches a trailing `/:param`. Applied to `/users/:userId/posts/:postId`, it extracts `"userId"` from the first branch, then recursively `"postId"` from `/posts/:postId`, resulting in `"userId" | "postId"`.',
    references: [
      'https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html',
    ],
    tags: ['template-literal-types', 'infer', 'recursive-conditional-types', 'advanced-types'],
    year: 2025,
  },
  {
    id: 'ts-061',
    topic: 'typescript',
    difficulty: 'lead',
    type: 'code-output',
    question: 'What does `EventEmitter` infer for `on("click", handler)`?',
    code: `type Events = {
  click: [x: number, y: number]
  focus: []
  change: [value: string]
}

type EventHandler<T extends unknown[]> = (...args: T) => void

declare function on<K extends keyof Events>(
  event: K,
  handler: EventHandler<Events[K]>
): void

on('click', (x, y) => {
  // x is: ___
  // y is: ___
})`,
    answer: 'x: number, y: number',
    explanation:
      'Template literal and indexed access types combine to create fully type-safe event emitters. `K` is inferred as `"click"`, `Events["click"]` is `[x: number, y: number]`, and `EventHandler<[number, number]>` expands to `(x: number, y: number) => void`. The handler parameters are thus inferred as `number` each without any manual annotation.',
    references: [
      'https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-types',
    ],
    tags: ['generics', 'indexed-access-types', 'tuple-types', 'type-inference', 'advanced-types'],
    year: 2025,
  },
  {
    id: 'ts-062',
    topic: 'typescript',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What does an exhaustive `switch` check with `never` look like, and why is it useful?',
    options: [
      'Add a `default: return undefined` case to handle all unmatched values',
      'Add a `default` case that assigns the value to `never`: `const _exhaustive: never = shape` — this causes a compile error if a new union member is added without updating the switch',
      'Use `switch (true)` instead of switching on the discriminant',
      'TypeScript performs exhaustive checking automatically in `switch` statements without any extra code',
    ],
    answer: 1,
    explanation:
      'The exhaustive check pattern: `default: { const _: never = value; throw new Error("Unhandled case") }`. If all union members are handled, `value` has type `never` in the default branch (TypeScript narrows away all handled cases). If you add a new union member without updating the switch, `value` will have that type in `default`, making the `never` assignment a compile error. This is a widely-used TypeScript pattern for safe exhaustive handling.',
    references: [
      'https://www.typescriptlang.org/docs/handbook/2/narrowing.html#exhaustiveness-checking',
    ],
    tags: ['discriminated-unions', 'exhaustive-checking', 'never', 'switch'],
    year: 2025,
  },
  {
    id: 'ts-063',
    topic: 'typescript',
    difficulty: 'senior',
    type: 'code-output',
    question: 'Does adding a new `Shape` variant cause a compile error in this exhaustive switch? Why or why not?',
    code: `type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'rect'; width: number; height: number }
  | { kind: 'triangle'; base: number; height: number } // NEW

function area(s: Shape): number {
  switch (s.kind) {
    case 'circle': return Math.PI * s.radius ** 2
    case 'rect':   return s.width * s.height
    default: {
      const _exhaustive: never = s
      throw new Error('Unhandled shape')
    }
  }
}`,
    answer: "Yes — compile error: Type '{ kind: \"triangle\"; base: number; height: number }' is not assignable to type 'never' in the default branch.",
    explanation:
      "After handling `'circle'` and `'rect'`, `s` in the `default` branch still has type `{ kind: 'triangle'; ... }` because that case wasn't handled. Assigning a non-`never` type to `never` is a compile error. This is the intended behavior — it forces the developer to add a `case 'triangle'` branch before the code compiles.",
    references: [
      'https://www.typescriptlang.org/docs/handbook/2/narrowing.html#exhaustiveness-checking',
    ],
    tags: ['discriminated-unions', 'exhaustive-checking', 'never', 'switch'],
    year: 2025,
  },
  {
    id: 'ts-064',
    topic: 'typescript',
    difficulty: 'lead',
    type: 'mcq',
    question: 'What is the key difference between TypeScript 5.0 decorators (TC39 Stage 3) and the legacy `experimentalDecorators` implementation?',
    options: [
      'The new decorators do not support method decorators, only class decorators',
      'Legacy decorators (`experimentalDecorators: true`) use the old metadata API and receive a property descriptor; TC39/TS5.0 decorators receive the decorated value and a context object with `name`, `kind`, `addInitializer`, and optionally `metadata` — and they are not controlled by `experimentalDecorators` but by NOT setting it (or setting it to `false`)',
      'TC39 decorators require a Babel plugin while legacy decorators work natively',
      'The new decorators are identical to legacy decorators but with a new syntax',
    ],
    answer: 1,
    explanation:
      'TypeScript 5.0 implements the TC39 Stage 3 decorator proposal. Key differences from legacy: (1) new decorators receive a context object with `kind`, `name`, `static`, `private`, `addInitializer`, and `metadata`; (2) they do NOT use `reflect-metadata` by default; (3) they cannot be used simultaneously with `experimentalDecorators: true`; (4) class decorator return value replaces the class; (5) `accessor` keyword for auto-accessors.',
    references: [
      'https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-0.html#decorators',
    ],
    tags: ['decorators', 'ts5.0', 'experimentalDecorators', 'stage3'],
    year: 2025,
  },
  {
    id: 'ts-065',
    topic: 'typescript',
    difficulty: 'senior',
    type: 'true-false',
    question: 'TypeScript\'s `const enum` is safe to use when `isolatedModules: true` is set in `tsconfig.json` (as required by Vite, esbuild, and Babel).',
    answer: false,
    explanation:
      '`const enum` requires the TypeScript compiler to see all usages to inline values. With `isolatedModules: true`, each file is compiled independently (as done by Vite/esbuild/Babel). A `const enum` defined in a `.d.ts` file or a separate module cannot be inlined because the compiler only sees the current file. This causes a runtime error or compile error. Use regular `enum` or `as const` objects instead when `isolatedModules` is enabled.',
    references: [
      'https://www.typescriptlang.org/tsconfig#isolatedModules',
    ],
    tags: ['const-enum', 'isolatedModules', 'ts5.0', 'tsconfig'],
    year: 2025,
  },
  {
    id: 'ts-066',
    topic: 'typescript',
    difficulty: 'lead',
    type: 'debug',
    question: 'The following advanced mapped type has an error. What is wrong?',
    code: `// Goal: make all methods in T return Promise<ReturnType<M>> instead of M
type Promisify<T> = {
  [K in keyof T]: T[K] extends (...args: infer A) => infer R
    ? (...args: A) => Promise<R>
    : T[K]
}

interface UserService {
  getUser(id: number): User
  listUsers(): User[]
  config: { timeout: number }
}

type AsyncUserService = Promisify<UserService>
// Expected: getUser returns Promise<User>, listUsers returns Promise<User[]>, config stays as-is

const svc: AsyncUserService = {
  getUser: async (id) => fetchUser(id),
  listUsers: async () => fetchAllUsers(),
  config: { timeout: 5000 },
}`,
    answer: "No error — the type is correct. `Promisify<T>` correctly wraps method return types in `Promise` while passing non-function properties through unchanged. The `infer A` captures parameter types and `infer R` captures the return type, then reconstructs the function with `Promise<R>` return.",
    explanation:
      '`Promisify<T>` maps each property: if it is a function (`extends (...args: infer A) => infer R`), it returns a new function type `(...args: A) => Promise<R>`. If it is not a function (like `config`), it passes the type through unchanged (`T[K]`). This is a common pattern for wrapping synchronous service interfaces into async ones.',
    references: [
      'https://www.typescriptlang.org/docs/handbook/2/mapped-types.html',
    ],
    tags: ['mapped-types', 'conditional-types', 'infer', 'advanced-types', 'promisify'],
    year: 2025,
  },
  {
    id: 'ts-067',
    topic: 'typescript',
    difficulty: 'lead',
    type: 'code-output',
    question: 'What does `Paths` resolve to for a 2-level object?',
    code: `type Paths<T, Prefix extends string = ''> = {
  [K in keyof T & string]: T[K] extends object
    ? Paths<T[K], \`\${Prefix}\${K}.\`> | \`\${Prefix}\${K}\`
    : \`\${Prefix}\${K}\`
}[keyof T & string]

type User = {
  name: string
  address: {
    city: string
    zip: string
  }
}

type UserPaths = Paths<User>`,
    answer: '"name" | "address" | "address.city" | "address.zip"',
    explanation:
      'This recursive mapped type generates all dot-notation paths for a nested object. For `User`: `name` is a string, so it yields `"name"`. `address` is an object, so it yields `"address"` AND recurses into it with prefix `"address."` to yield `"address.city"` and `"address.zip"`. The final union is `"name" | "address" | "address.city" | "address.zip"`. This pattern is used in form libraries, validation schemas, and typed `get`/`set` utilities.',
    references: [
      'https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html',
    ],
    tags: ['template-literal-types', 'recursive-conditional-types', 'mapped-types', 'type-level-programming'],
    year: 2025,
  },
  {
    id: 'ts-068',
    topic: 'typescript',
    difficulty: 'senior',
    type: 'true-false',
    question: 'TypeScript\'s `infer` keyword can be used to extract types from template literal positions in conditional types (e.g., extracting parts of a string type).',
    answer: true,
    explanation:
      'Since TypeScript 4.7, `infer` works within template literal patterns: `type GetPrefix<T> = T extends \`${infer P}_suffix\` ? P : never`. Applied to `"hello_suffix"`, this infers `P = "hello"`. This enables parsing string literal types at the type level — extracting prefixes, suffixes, route segments, event names, and more without runtime code.',
    references: [
      'https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-7.html#improved-function-inference-in-objects-and-methods',
      'https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#inference-with-template-literals',
    ],
    tags: ['template-literal-types', 'infer', 'conditional-types', 'ts4.7'],
    year: 2025,
  },
]
