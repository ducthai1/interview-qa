import type { Question } from '../types'

export const testingQuestions: Question[] = [
  {
    id: 'te-001',
    topic: 'testing',
    difficulty: 'junior',
    type: 'mcq',
    question: 'In React Testing Library, what is the preferred query method for finding a button a user can see?',
    options: [
      'container.querySelector("button")',
      'getByTestId("submit-btn")',
      'getByRole("button", { name: /submit/i })',
      'getByClassName("btn-submit")',
    ],
    answer: 2,
    explanation: 'RTL\'s philosophy is to query the DOM the way a user would interact with it. getByRole() with accessible name matches what screen readers announce and what users see. It also validates accessibility. getByTestId() should be a last resort, and querySelector bypasses RTL\'s accessibility-first approach entirely.',
    tags: ['react-testing-library', 'queries', 'accessibility'],
    year: 2025,
  },
  {
    id: 'te-002',
    topic: 'testing',
    difficulty: 'junior',
    type: 'true-false',
    question: 'In Vitest, vi.fn() creates a mock function that tracks how many times it was called and with what arguments.',
    answer: true,
    explanation: 'vi.fn() creates a spy/mock function. After calling it, you can assert with expect(fn).toHaveBeenCalledTimes(1), expect(fn).toHaveBeenCalledWith("arg"), or inspect fn.mock.calls. You can also set return values with vi.fn().mockReturnValue(42) or .mockResolvedValue() for async.',
    tags: ['vitest', 'mocking', 'vi.fn'],
    year: 2025,
  },
  {
    id: 'te-003',
    topic: 'testing',
    difficulty: 'junior',
    type: 'mcq',
    question: 'What is the Arrange-Act-Assert (AAA) pattern in testing?',
    options: [
      'A test runner configuration pattern',
      'A test structure: Arrange (set up test data/state), Act (execute the code under test), Assert (verify the outcome) — keeping tests readable and focused',
      'A CI/CD deployment pattern',
      'An async testing pattern for handling Promises',
    ],
    answer: 1,
    explanation: 'AAA is the most widely used test structure pattern: Arrange sets up prerequisites (mock data, render component, configure mocks); Act performs the action being tested (click button, call function); Assert verifies results (check DOM, function calls, state). It maps directly to Given-When-Then in BDD.',
    tags: ['testing-patterns', 'aaa', 'best-practices'],
    year: 2025,
  },
  {
    id: 'te-004',
    topic: 'testing',
    difficulty: 'junior',
    type: 'mcq',
    question: 'What does the @testing-library/user-event package provide over fireEvent?',
    options: [
      'It is faster than fireEvent for all interactions',
      'It simulates real browser user interactions (including pointer events, keyboard events in proper order, focus management) rather than dispatching single synthetic events — giving more realistic test behavior',
      'It works with React Native but fireEvent does not',
      'It provides async assertions; fireEvent is synchronous only',
    ],
    answer: 1,
    explanation: 'userEvent simulates actual user behavior: userEvent.type() fires keydown, keypress, input, keyup events in sequence and updates the value gradually. userEvent.click() fires pointerdown, mousedown, pointerup, mouseup, click in order. fireEvent only dispatches one event, missing the full interaction sequence that real code may depend on.',
    tags: ['user-event', 'react-testing-library', 'interactions'],
    year: 2025,
  },
  {
    id: 'te-005',
    topic: 'testing',
    difficulty: 'mid',
    type: 'code-output',
    question: 'What does this Vitest test assert and will it pass?',
    code: `import { describe, it, expect, vi } from 'vitest'

describe('async fetch', () => {
  it('calls the API and returns data', async () => {
    const fetchData = vi.fn().mockResolvedValue({ id: 1, name: 'Alice' })

    const result = await fetchData('/api/user/1')

    expect(fetchData).toHaveBeenCalledWith('/api/user/1')
    expect(result).toEqual({ id: 1, name: 'Alice' })
  })
})`,
    answer: 'The test passes. fetchData is a mock that resolves to { id: 1, name: "Alice" }. Both assertions verify the call argument and the resolved value correctly.',
    explanation: 'vi.fn().mockResolvedValue() creates a mock that returns a Promise resolving to the given value. The await resolves it. toHaveBeenCalledWith checks the argument used. toEqual does deep equality comparison. This tests the contract of the mock, which is useful as a building block when testing code that depends on this function.',
    tags: ['vitest', 'mocking', 'async', 'mockResolvedValue'],
    year: 2025,
  },
  {
    id: 'te-006',
    topic: 'testing',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What does MSW (Mock Service Worker) intercept and how does it differ from mocking fetch directly?',
    options: [
      'MSW intercepts CSS files; fetch mocking intercepts JS modules',
      'MSW intercepts actual HTTP requests at the network layer (using a Service Worker in browser, http/https interception in Node), giving realistic network behavior without changing application code or mocking fetch globally',
      'MSW only works in browser environments; fetch mocking works in Node',
      'MSW is slower than fetch mocking due to Service Worker overhead',
    ],
    answer: 1,
    explanation: 'MSW intercepts requests at the network level. In browsers, a Service Worker catches outgoing requests. In Node (for Vitest/Jest), it patches http/https. Your application code uses real fetch/axios/etc — you don\'t change it. This is more realistic than vi.mock("axios") and catches cases where mocking the wrong layer would miss real behavior.',
    tags: ['msw', 'api-mocking', 'service-worker'],
    year: 2025,
  },
  {
    id: 'te-007',
    topic: 'testing',
    difficulty: 'mid',
    type: 'mcq',
    question: 'In RTL, what is the difference between getBy*, queryBy*, and findBy* query variants?',
    options: [
      'They differ only in query speed',
      'getBy* throws if element not found; queryBy* returns null if not found (use for absence assertions); findBy* is async and waits for element to appear (use with async/await for dynamic content)',
      'findBy* only works with async components',
      'queryBy* always returns an array; getBy* returns a single element',
    ],
    answer: 1,
    explanation: 'The three variants handle different timing: getBy* — synchronous, throws immediately if missing (most common for already-rendered elements). queryBy* — synchronous, returns null (use with expect(el).not.toBeInTheDocument()). findBy* — async, returns a Promise, retries until timeout (use for elements that appear after data fetch, async state updates).',
    tags: ['react-testing-library', 'queries', 'async'],
    year: 2025,
  },
  {
    id: 'te-008',
    topic: 'testing',
    difficulty: 'mid',
    type: 'code-output',
    question: 'Will this RTL test pass? What should be changed?',
    code: `import { render, screen } from '@testing-library/react'

test('shows loading then data', async () => {
  render(<UserProfile userId="1" />)

  // UserProfile fetches data and shows "Loading..." then renders user name
  expect(screen.getByText('Alice')).toBeInTheDocument()
})`,
    answer: 'The test will fail because getByText runs synchronously before the async data loads. It should use findByText("Alice") with await.',
    explanation: 'getByText throws immediately if "Alice" is not in the DOM at render time. Since data fetching is async, "Alice" appears later. The fix: await screen.findByText("Alice") which polls the DOM until the text appears (default 1000ms timeout). Also, the component should be wrapped in proper async provider mocks (MSW, vi.mock, etc.).',
    tags: ['react-testing-library', 'async', 'findBy', 'debug'],
    year: 2025,
  },
  {
    id: 'te-009',
    topic: 'testing',
    difficulty: 'mid',
    type: 'mcq',
    question: 'In Playwright, what is the recommended way to select elements to make tests resilient to UI changes?',
    options: [
      'CSS selectors like .btn-primary',
      'XPath selectors',
      'data-testid attributes or user-visible locators like getByRole(), getByText(), getByLabel() — avoiding brittle implementation selectors',
      'Element indices like .items:nth-child(3)',
    ],
    answer: 2,
    explanation: 'Playwright recommends: page.getByRole("button", {name: "Submit"}), page.getByLabel("Email"), page.getByTestId("cart-total"). These mirror user experience and survive refactors. CSS class selectors break when you rename classes. XPath is brittle to DOM structure changes. Playwright\'s locator API automatically waits for elements and auto-retries.',
    tags: ['playwright', 'selectors', 'locators', 'best-practices'],
    year: 2025,
  },
  {
    id: 'te-010',
    topic: 'testing',
    difficulty: 'mid',
    type: 'true-false',
    question: 'Both Vitest and Jest run test files in parallel by default, but Vitest uses worker threads while Jest uses worker processes (child_process).',
    answer: true,
    explanation: 'Both test runners parallelize across files by default. Jest uses separate Node.js worker processes (via jest-worker), while Vitest uses lighter-weight worker threads (via Tinypool). Vitest is often faster due to lower thread overhead, shared memory, native ESM support, and reusing Vite\'s transform pipeline. Use --pool=forks in Vitest for process-based isolation if needed.',
    tags: ['vitest', 'performance', 'parallel'],
    year: 2025,
  },
  {
    id: 'te-011',
    topic: 'testing',
    difficulty: 'senior',
    type: 'mcq',
    question: 'When should you use snapshot testing and what are its main pitfalls?',
    options: [
      'Always use snapshots for all component tests',
      'Use snapshots for intentional UI regression detection of stable components (design system, icons). Pitfalls: developers "update" failing snapshots reflexively without investigating, large snapshots become unreadable, and they test implementation details rather than behavior',
      'Never use snapshots in modern testing',
      'Snapshots are only useful for API response shapes',
    ],
    answer: 1,
    explanation: 'Snapshots have a narrow sweet spot: serializable, stable outputs like icon SVGs, static email templates, or API shapes. Avoid for dynamic components with changing data/dates. The main failure mode is snapshot blindness — when tests fail, devs run --updateSnapshot without reading the diff. Prefer explicit assertions for component behavior; use snapshots only where the full structure matters.',
    tags: ['vitest', 'snapshots', 'testing-strategy'],
    year: 2025,
  },
  {
    id: 'te-012',
    topic: 'testing',
    difficulty: 'senior',
    type: 'code-output',
    question: 'What does this Vitest setup file accomplish?',
    code: `// vitest.setup.ts
import '@testing-library/jest-dom'
import { beforeAll, afterAll, afterEach } from 'vitest'
import { server } from './mocks/server'

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
afterEach(() => server.resetHandlers())
afterAll(() => server.close())`,
    answer: 'It sets up the global test environment: imports jest-dom matchers (toBeInTheDocument etc.), starts the MSW server before all tests with unhandled requests throwing errors, resets any per-test handler overrides after each test, and shuts down the server after all tests complete.',
    explanation: 'This is the standard MSW + RTL setup pattern. server.listen() starts network interception. onUnhandledRequest: "error" catches accidentally unmocked endpoints (prevents silent test passing with empty data). server.resetHandlers() removes test-specific handler overrides added via server.use(). This ensures test isolation.',
    tags: ['vitest', 'msw', 'setup', 'test-isolation'],
    year: 2025,
  },
  {
    id: 'te-013',
    topic: 'testing',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is the Testing Trophy (as opposed to the Testing Pyramid) and what does it recommend for frontend testing?',
    options: [
      'A trophy given to teams with 100% code coverage',
      'Kent C. Dodds\'s model that emphasizes integration tests over unit tests for the best ROI: a few E2E tests, many integration tests (components with real interactions), some unit tests, and static analysis — because integration tests catch more bugs per effort',
      'A React Testing Library award for accessibility-compliant tests',
      'A CI/CD badge for automated test pipelines',
    ],
    answer: 1,
    explanation: 'The Testing Trophy inverts the traditional pyramid emphasis. For frontend: static analysis (TypeScript, ESLint) catches obvious bugs for free; unit tests for pure functions; integration tests (RTL tests that test component trees with real data flow, MSW handlers) give the most value; E2E (Playwright) for critical paths. Integration tests are the "widest" layer because they test user workflows without brittle full-browser overhead.',
    tags: ['testing-strategy', 'testing-trophy', 'integration-tests'],
    year: 2025,
  },
  {
    id: 'te-014',
    topic: 'testing',
    difficulty: 'senior',
    type: 'debug',
    question: 'This test passes locally but fails in CI. What is the likely issue?',
    code: `test('displays formatted date', () => {
  render(<EventDate date={new Date('2025-06-15')} />)
  expect(screen.getByText('June 15, 2025')).toBeInTheDocument()
})

// EventDate component:
// new Date('2025-06-15').toLocaleDateString('en-US', { ... })`,
    answer: 'Timezone difference: new Date("2025-06-15") is parsed as UTC midnight. On a machine west of UTC (e.g., US Pacific UTC-7), toLocaleDateString() shows "June 14, 2025" instead of "June 15". CI servers in UTC would pass, but local dev machines in western timezones would fail (or vice versa).',
    explanation: 'Per the spec, date-only strings (YYYY-MM-DD) are parsed as UTC. So new Date("2025-06-15") = June 15 00:00:00 UTC. On a UTC-7 machine, that\'s June 14 at 17:00 local time, so toLocaleDateString() shows June 14. Fix: use new Date("2025-06-15T00:00:00") which parses as local time, or mock dates with vi.setSystemTime(), or set TZ=UTC in CI config.',
    tags: ['testing', 'timezone', 'date', 'ci-cd'],
    year: 2025,
  },
  {
    id: 'te-015',
    topic: 'testing',
    difficulty: 'senior',
    type: 'mcq',
    question: 'In Playwright, how do you handle authentication to avoid logging in before every test?',
    options: [
      'Add login steps at the top of every test file',
      'Use Playwright\'s storageState to save authenticated browser state (cookies, localStorage) after a one-time login, then load it as the browser context for test files that require auth',
      'Use test.describe.only() to skip auth tests',
      'Mock the authentication headers in playwright.config.ts',
    ],
    answer: 1,
    explanation: 'Playwright\'s globalSetup script logs in once and saves the browser state via context.storageState(). Test files that need auth specify: use: { storageState: "auth.json" } in the project config. Playwright loads this state into the browser context, skipping login. This is much faster than logging in per-test and tests work with real auth cookies.',
    tags: ['playwright', 'authentication', 'storageState', 'e2e'],
    year: 2025,
  },
  {
    id: 'te-016',
    topic: 'testing',
    difficulty: 'lead',
    type: 'mcq',
    question: 'What is the difference between code coverage and test quality, and why can 100% coverage be misleading?',
    options: [
      '100% coverage means all bugs are caught',
      '100% coverage means every line was executed during tests, but it says nothing about whether the assertions are meaningful. A test that calls all functions with no expect() statements achieves 100% coverage while testing nothing.',
      'Coverage only matters for backend code, not frontend',
      '100% coverage requires integration and unit tests combined',
    ],
    answer: 1,
    explanation: 'Coverage measures execution (lines, branches, functions, statements hit), not assertion quality. Mutation testing (Stryker) reveals this gap: it introduces code mutations (flips conditions, changes operators) and checks if tests catch them. A codebase can have 100% line coverage with tests that never fail when bugs are introduced. Aim for meaningful coverage thresholds (80-90%) with quality assertions over chasing 100%.',
    tags: ['code-coverage', 'testing-strategy', 'mutation-testing'],
    year: 2025,
  },
  {
    id: 'te-017',
    topic: 'testing',
    difficulty: 'lead',
    type: 'mcq',
    question: 'How do you test a custom React hook in isolation without a component wrapper?',
    options: [
      'Create a throwaway component that uses the hook in each test',
      'Use @testing-library/react\'s renderHook() utility, which provides a minimal React environment to invoke hooks and inspect their returned values and effects',
      'Custom hooks cannot be tested without a full component',
      'Use vi.mock() to mock the hook\'s internal implementation',
    ],
    answer: 1,
    explanation: 'renderHook(() => useMyHook(args)) from @testing-library/react renders a minimal wrapper component, calls the hook, and returns { result, rerender, unmount }. You access the hook\'s return value via result.current. For state updates: await act(() => result.current.someAction()). This is cleaner than creating wrapper components for every hook test.',
    tags: ['react-testing-library', 'renderHook', 'custom-hooks'],
    year: 2025,
  },
  {
    id: 'te-018',
    topic: 'testing',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is the purpose of Vitest\'s vi.spyOn() as opposed to vi.fn()?',
    options: [
      'vi.spyOn() is faster than vi.fn()',
      'vi.spyOn() wraps an existing object method with a mock while preserving the original implementation by default, tracking calls. vi.fn() creates a standalone mock function from scratch.',
      'vi.spyOn() only works with async functions',
      'They are identical in functionality',
    ],
    answer: 1,
    explanation: 'vi.spyOn(object, "method") replaces the method with a spy that records calls but still calls through to the original by default. Use it when you want to verify a method was called (or with specific args) without changing its behavior. Add .mockReturnValue() or .mockImplementation() to override. vi.fn() is for creating fresh mocks with no original. Always restore spies in afterEach with vi.restoreAllMocks().',
    tags: ['vitest', 'spyOn', 'mocking'],
    year: 2025,
  },
  {
    id: 'te-019',
    topic: 'testing',
    difficulty: 'junior',
    type: 'mcq',
    question: 'In Playwright E2E tests, what does the page.waitForSelector() alternative page.locator().waitFor() provide?',
    options: [
      'It is just a renamed version with identical behavior',
      'Playwright\'s locator API automatically waits for elements and retries assertions, eliminating most explicit waitFor() calls. The locator is lazy and only evaluates when an action is performed.',
      'waitForSelector() is async; locator().waitFor() is synchronous',
      'locator() only works with CSS selectors; waitForSelector works with XPath',
    ],
    answer: 1,
    explanation: 'Playwright locators have auto-waiting built in. page.locator(".btn").click() automatically waits for the element to be visible, enabled, and stable before clicking. This eliminates race conditions. page.waitForSelector() is the older, more verbose API. Use locators with expect(locator).toBeVisible() for assertions — Playwright retries the assertion automatically.',
    tags: ['playwright', 'locators', 'auto-waiting'],
    year: 2025,
  },
  {
    id: 'te-020',
    topic: 'testing',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is contract testing and when should it be used in a frontend context?',
    options: [
      'Testing that API contracts (TypeScript interfaces) are correctly typed',
      'A testing approach where the consumer (frontend) defines expected API response shapes, and the provider (backend) verifies they fulfil them — using tools like Pact. Prevents breaking API changes from reaching production.',
      'Testing that CSS contracts (design tokens) are consistent',
      'Contract testing is only for microservices, not applicable to frontend',
    ],
    answer: 1,
    explanation: 'Contract testing with Pact: frontend writes consumer tests defining what it expects from the API. Pact generates a "pact file" (contract). The backend runs provider verification against this contract in CI. If the backend changes break the contract, CI fails before the breaking change ships. Better than E2E for catching API mismatches because it\'s faster and isolated.',
    tags: ['contract-testing', 'pact', 'api', 'testing-strategy'],
    year: 2025,
  },
  {
    id: 'te-021',
    topic: 'testing',
    difficulty: 'mid',
    type: 'true-false',
    question: 'In MSW v2, you define request handlers using http.get() and http.post() instead of the v1 rest.get() and rest.post().',
    answer: true,
    explanation: 'MSW v2 (2024) introduced a new API: handlers are defined with http.get("/api/users", resolver) and http.post("/api/users", resolver). The v1 rest.get() and rest.post() were replaced. The resolver function receives ({ request, params, cookies }) instead of (req, res, ctx). Response is returned as: return HttpResponse.json(data) instead of res(ctx.json(data)).',
    tags: ['msw', 'v2', 'api', 'http-handlers'],
    year: 2025,
  },
  {
    id: 'te-022',
    topic: 'testing',
    difficulty: 'junior',
    type: 'mcq',
    question: 'What does the cleanup() function from @testing-library/react do and when is it called?',
    options: [
      'It clears all mock function call history',
      'It unmounts React trees rendered during tests and cleans up the DOM. It is automatically called after each test when using Vitest/Jest, preventing test pollution from mounted components.',
      'It resets the test database to its initial state',
      'It must be called manually in afterEach(); it never runs automatically',
    ],
    answer: 1,
    explanation: 'RTL automatically calls cleanup() after each test via afterEach when using supported test runners (Vitest, Jest). This unmounts components, removes them from the DOM, and prevents memory leaks. Without cleanup, components from earlier tests might interfere with later ones. You only need manual cleanup if using a different test runner.',
    tags: ['react-testing-library', 'cleanup', 'test-isolation'],
    year: 2025,
  },
  {
    id: 'te-023',
    topic: 'testing',
    difficulty: 'lead',
    type: 'mcq',
    question: 'How should you structure your testing strategy for a design system component library?',
    options: [
      'Only visual regression tests via screenshot comparison',
      'Unit tests only with vi.fn() mocks for all interactions',
      'Multi-layer: Vitest unit tests for logic/utilities, RTL integration tests for component behavior and accessibility (axe-core), Storybook interaction tests for visual states, and optional Chromatic/Percy for visual regression on key variants',
      'E2E tests only since they test the most realistic scenarios',
    ],
    answer: 2,
    explanation: 'Design systems need multiple test layers: (1) Unit: pure utility functions, token transforms. (2) RTL integration: component rendering, props, events, ARIA correctness, keyboard navigation — use jest-axe/axe-core. (3) Storybook play() functions: interactive scenarios per story. (4) Visual regression: catch unintended visual changes in CI. This catches functional bugs, a11y violations, and visual regressions.',
    tags: ['design-system', 'testing-strategy', 'accessibility', 'storybook'],
    year: 2025,
  },
  {
    id: 'te-024',
    topic: 'testing',
    difficulty: 'senior',
    type: 'code-output',
    question: 'What does this Vitest test with fake timers assert?',
    code: `import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest'

describe('debounce', () => {
  beforeEach(() => vi.useFakeTimers())
  afterEach(() => vi.useRealTimers())

  it('only calls fn once after delay', () => {
    const fn = vi.fn()
    const debounced = debounce(fn, 300)

    debounced()
    debounced()
    debounced()
    expect(fn).not.toHaveBeenCalled()

    vi.advanceTimersByTime(300)
    expect(fn).toHaveBeenCalledTimes(1)
  })
})`,
    answer: 'The test verifies that calling debounced() three times in rapid succession does not invoke fn immediately, and after advancing fake time by 300ms, fn is called exactly once (only the last invocation fires).',
    explanation: 'vi.useFakeTimers() replaces setTimeout/setInterval with controllable fake implementations. vi.advanceTimersByTime(300) fast-forwards virtual time by 300ms without waiting. This tests debounce behavior deterministically without real delays. The test correctly verifies the debounce contract: multiple rapid calls collapse to one execution after the wait period.',
    tags: ['vitest', 'fake-timers', 'debounce', 'timers'],
    year: 2025,
  },
  {
    id: 'te-025',
    topic: 'testing',
    difficulty: 'lead',
    type: 'mcq',
    question: 'What is the recommended approach for testing React Server Components (RSC) given that they run on the server and cannot use browser-only APIs?',
    options: [
      'RSC cannot be tested — skip them and test only Client Components',
      'Use React\'s renderToString() and standard HTTP request mocking',
      'Test RSC via integration: use Next.js\'s experimental test utilities or Playwright E2E that tests the actual rendered output. For unit testing RSC logic, extract pure data-fetching functions and test them separately.',
      'Convert all RSCs to Client Components before testing',
    ],
    answer: 2,
    explanation: 'RSC testing is still maturing. Recommended approaches: (1) Extract and unit test the async data-fetching functions that RSCs call. (2) Use Playwright E2E to verify the full rendered output in a real Next.js server. (3) Next.js\'s experimental @next/experimental-test-utils provides renderServer() for RSC testing in newer versions. Testing the output HTML in E2E catches the real user-facing behavior.',
    tags: ['rsc', 'testing', 'nextjs', 'server-components'],
    year: 2025,
  },
  {
    id: 'te-026',
    topic: 'testing',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is Vitest in-source testing and when is it useful?',
    options: [
      'Running tests inside a Docker container',
      'Writing test code directly inside the source file using import.meta.vitest, so tests live alongside the implementation. Useful for utility functions and internal logic that benefit from colocation.',
      'Running Vitest inside a browser environment',
      'A mode where Vitest skips external test files and only runs inline assertions',
    ],
    answer: 1,
    explanation: 'Vitest supports in-source tests via the defineConfig { test: { includeSource: ["src/**/*.ts"] } } option. Inside source files, wrap tests with if (import.meta.vitest) { const { it, expect } = import.meta.vitest; ... }. In production builds import.meta.vitest is undefined, so dead-code elimination strips the tests. Best for small utility functions where proximity to implementation aids understanding.',
    tags: ['vitest', 'in-source-testing', 'colocation'],
    year: 2025,
  },
  {
    id: 'te-027',
    topic: 'testing',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What does the RTL `within()` utility do?',
    options: [
      'Scopes all subsequent queries to a specific DOM subtree, allowing you to find elements within a particular container rather than the whole document',
      'Checks if one element is a descendant of another',
      'Creates a new render context isolated from the global document',
      'It is an alias for screen.getByRole()',
    ],
    answer: 0,
    explanation: 'within(element) returns a set of bound query functions scoped to that element. Example: const row = screen.getByRole("row", { name: /alice/i }); within(row).getByRole("button", { name: /delete/i }). This is essential when the same button text appears in multiple rows/sections — you query within the specific context rather than the full page, making tests more precise and readable.',
    tags: ['react-testing-library', 'within', 'scoped-queries'],
    year: 2025,
  },
  {
    id: 'te-028',
    topic: 'testing',
    difficulty: 'junior',
    type: 'mcq',
    question: 'What does `screen.debug()` output and when should you use it?',
    options: [
      'Logs all failing assertions to the console',
      'Prints the current DOM tree (or a specific element\'s subtree) to the console in a readable format — helpful for understanding what is actually rendered when a query fails',
      'Opens the Chrome DevTools debugger in the test runner',
      'Logs all RTL queries executed so far',
    ],
    answer: 1,
    explanation: 'screen.debug() calls console.log with a pretty-printed HTML string of the rendered DOM. You can pass an element: screen.debug(screen.getByRole("list")) to limit output. Use it when a query throws "Unable to find..." — seeing the actual rendered markup often immediately reveals whether the component rendered at all, has different text, or lacks the expected ARIA role. Remove debug() calls before committing.',
    tags: ['react-testing-library', 'screen.debug', 'debugging'],
    year: 2025,
  },
  {
    id: 'te-029',
    topic: 'testing',
    difficulty: 'mid',
    type: 'code-output',
    question: 'What does this test assert and will it pass or fail?',
    code: `import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

test('submit button is disabled while loading', async () => {
  const user = userEvent.setup()
  render(<LoginForm />)

  await user.type(screen.getByLabelText(/email/i), 'a@b.com')
  await user.type(screen.getByLabelText(/password/i), 'secret')
  await user.click(screen.getByRole('button', { name: /sign in/i }))

  await waitFor(() => {
    expect(screen.getByRole('button', { name: /sign in/i })).toBeDisabled()
  })
})`,
    answer: 'The test checks that after clicking Sign In the button becomes disabled (indicating a loading state). It will pass if LoginForm disables the button after submission. waitFor polls until the assertion passes or times out.',
    explanation: 'waitFor(() => expect(...)) retries the assertion callback repeatedly until it passes or the timeout (default 1000ms) is reached. This handles the async gap between clicking submit and React re-rendering with the disabled state. userEvent.setup() creates an instance with a shared pointer/keyboard state — preferred over the static userEvent.click() for sequences of interactions.',
    tags: ['react-testing-library', 'waitFor', 'async', 'userEvent'],
    year: 2025,
  },
  {
    id: 'te-030',
    topic: 'testing',
    difficulty: 'mid',
    type: 'code-output',
    question: 'What does this renderHook test verify?',
    code: `import { renderHook, act } from '@testing-library/react'
import { useCounter } from './useCounter'

test('increments counter', () => {
  const { result } = renderHook(() => useCounter(0))

  expect(result.current.count).toBe(0)

  act(() => {
    result.current.increment()
  })

  expect(result.current.count).toBe(1)
})`,
    answer: 'It verifies that useCounter initializes with count 0, and that calling increment() increases count to 1. act() wraps state updates to flush React batching before assertions.',
    explanation: 'renderHook() from @testing-library/react renders a minimal host component that calls the hook. result.current holds the latest return value of the hook. act() ensures that all state updates triggered by increment() are flushed before the next assertion. Without act(), the assertion may run before React processes the state update. This tests the hook contract independently of any UI component.',
    tags: ['renderHook', 'custom-hooks', 'react-testing-library', 'act'],
    year: 2025,
  },
  {
    id: 'te-031',
    topic: 'testing',
    difficulty: 'mid',
    type: 'mcq',
    question: 'In MSW v2, how do you define a handler that returns a JSON response using the new API?',
    options: [
      'rest.get("/api/user", (req, res, ctx) => res(ctx.json({ id: 1 })))',
      'http.get("/api/user", () => HttpResponse.json({ id: 1 }))',
      'server.mock("GET /api/user", { id: 1 })',
      'fetch.mock("/api/user", HttpResponse.json({ id: 1 }))',
    ],
    answer: 1,
    explanation: 'MSW v2 (released late 2023) replaced the rest.* namespace with http.* and the res(ctx.*) pattern with returning a standard Response or HttpResponse. The handler receives a resolver ({ request, params, cookies }) and returns HttpResponse.json(data) for JSON, HttpResponse.text(str) for text, or a native Response. This aligns with the Fetch API spec and works identically in browser and Node environments.',
    tags: ['msw', 'v2', 'http-handlers', 'HttpResponse'],
    year: 2025,
  },
  {
    id: 'te-032',
    topic: 'testing',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What are Playwright fixtures and how do they improve test organization?',
    options: [
      'Fixtures are static JSON files loaded before each test',
      'Playwright fixtures extend the base test object with custom setup/teardown logic and shared values (authenticated pages, DB connections, custom helpers). They compose cleanly, run lazily (only if the test uses them), and provide automatic cleanup.',
      'Fixtures are mock data factories for generating test input data',
      'Fixtures are Playwright\'s equivalent of Jest\'s beforeEach/afterEach',
    ],
    answer: 1,
    explanation: 'Playwright fixtures: const test = base.extend({ loggedInPage: async ({ page }, use) => { await page.goto("/login"); await page.fill(...); await use(page); } }). Each test that accepts loggedInPage receives a pre-authenticated page. Fixtures compose: adminPage can extend loggedInPage. They run only when used (lazy), have automatic cleanup (code after await use()), and make test files cleaner by extracting setup into reusable named pieces.',
    tags: ['playwright', 'fixtures', 'test-organization'],
    year: 2025,
  },
  {
    id: 'te-033',
    topic: 'testing',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is visual regression testing with Playwright and what are its practical limitations?',
    options: [
      'Testing that CSS animations complete without errors',
      'Capturing screenshots during test runs and comparing them pixel-by-pixel to baseline images. Catches unintended visual changes. Limitations: brittle to rendering differences across OS/GPU, font rendering, anti-aliasing, and dynamic content like dates/ads require masking.',
      'Testing that the visual design matches Figma specifications exactly',
      'Running Lighthouse audits for visual performance metrics',
    ],
    answer: 1,
    explanation: 'Playwright\'s expect(page).toHaveScreenshot() or expect(locator).toHaveScreenshot() captures and compares screenshots. Update baselines with --update-snapshots. Practical issues: screenshots differ across Windows/Mac/Linux due to font rendering; use a consistent CI environment (Docker). Mask dynamic regions: toHaveScreenshot({ mask: [page.locator(".timestamp")] }). Consider threshold: { maxDiffPixelRatio: 0.01 } for minor anti-aliasing tolerance.',
    tags: ['playwright', 'visual-regression', 'screenshot-testing'],
    year: 2025,
  },
  {
    id: 'te-034',
    topic: 'testing',
    difficulty: 'junior',
    type: 'mcq',
    question: 'What is the difference between unit, integration, and end-to-end (E2E) tests?',
    options: [
      'They differ only in execution speed; all test the same things',
      'Unit tests verify isolated functions/components with mocked dependencies. Integration tests verify multiple units working together (e.g., component + real hooks + MSW handlers). E2E tests run in a real browser against the full stack — testing user journeys from UI through backend.',
      'Unit tests use Vitest; integration tests use Jest; E2E tests use Cypress',
      'E2E tests are the most important; unit and integration tests are optional',
    ],
    answer: 1,
    explanation: 'The test types differ in scope, speed, and confidence: Unit (milliseconds, isolated, pinpoints exact failures but may miss integration bugs), Integration (seconds, real component interactions with mocked network, best ROI per Kent C. Dodds\'s Testing Trophy), E2E (minutes, full stack, highest confidence but slowest and most brittle). A healthy test suite uses all three layers proportionally.',
    tags: ['testing-types', 'unit', 'integration', 'e2e'],
    year: 2025,
  },
  {
    id: 'te-035',
    topic: 'testing',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is the difference between a mock, stub, spy, and fake in test doubles terminology?',
    options: [
      'They are all synonyms for the same concept',
      'Stub: returns fixed data, no call verification. Mock: pre-programmed with expectations (verifies interactions). Spy: wraps real implementation, records calls. Fake: working implementation with simplifications (in-memory DB). Most tools blur these lines; vi.fn() is primarily a mock/spy.',
      'Mocks are for async functions; stubs are for sync functions only',
      'Fakes require real network connections; stubs do not',
    ],
    answer: 1,
    explanation: 'Gerard Meszaros\'s taxonomy: Dummy (placeholder, not used). Stub (provides canned answers, no verification). Spy (records calls, can verify after). Mock (pre-programmed expectations, verified during). Fake (working implementation, e.g., in-memory SQLite for tests). In practice: vi.fn().mockReturnValue() = stub when used for data, mock when you assert on calls. vi.spyOn() = spy. MSW = fake server.',
    tags: ['test-doubles', 'mocks', 'stubs', 'spies', 'fakes'],
    year: 2025,
  },
  {
    id: 'te-036',
    topic: 'testing',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What are the four main code coverage metrics and what does each measure?',
    options: [
      'Fast, slow, passing, failing coverage',
      'Statement (each statement executed?), Branch (each if/else path taken?), Function (each function called?), Line (each line executed?). Branch coverage is the most meaningful — it reveals untested conditional paths.',
      'Unit coverage, integration coverage, E2E coverage, and mutation coverage',
      'CSS coverage, JS coverage, HTML coverage, and network coverage',
    ],
    answer: 1,
    explanation: 'Coverage metrics from least to most meaningful: Line (simplest, just counts executed lines), Statement (more granular: multiple statements per line), Function (were all functions invoked?), Branch (were all code paths — if/else, ternary, switch, optional chaining — exercised?). 100% branch coverage is hardest to achieve but most valuable. Configure thresholds in vitest.config: coverage: { thresholds: { branches: 80 } }.',
    tags: ['code-coverage', 'branch-coverage', 'vitest'],
    year: 2025,
  },
  {
    id: 'te-037',
    topic: 'testing',
    difficulty: 'senior',
    type: 'code-output',
    question: 'What does this test for a form component verify and what would make it fail?',
    code: `test('shows validation error on empty submit', async () => {
  const user = userEvent.setup()
  const handleSubmit = vi.fn()
  render(<ContactForm onSubmit={handleSubmit} />)

  await user.click(screen.getByRole('button', { name: /submit/i }))

  expect(screen.getByRole('alert')).toHaveTextContent(/email is required/i)
  expect(handleSubmit).not.toHaveBeenCalled()
})`,
    answer: 'It verifies that submitting an empty form shows a validation error message with role="alert" containing "email is required", and that the onSubmit callback is NOT invoked when validation fails.',
    explanation: 'Good form test pattern: (1) queries by accessible role "alert" (ARIA live region for errors), (2) checks text content with regex (case-insensitive), (3) verifies the submit handler was NOT called — ensuring client-side validation prevents invalid submissions. This test would fail if: the error element lacks role="alert", the text does not match, or onSubmit fires despite invalid input.',
    tags: ['forms', 'validation', 'react-testing-library', 'accessibility'],
    year: 2025,
  },
  {
    id: 'te-038',
    topic: 'testing',
    difficulty: 'mid',
    type: 'mcq',
    question: 'How do you test a React component that uses Context without wrapping every test in the full Provider tree?',
    options: [
      'You must always wrap with the real Provider; there is no alternative',
      'Create a custom render function that wraps with required Providers, or use a wrapper option: render(<Component />, { wrapper: ThemeProvider }). This provides context without repeating Provider boilerplate in every test.',
      'Mock the context module with vi.mock() to avoid Providers',
      'Use screen.getContext() to inject context values directly',
    ],
    answer: 1,
    explanation: 'RTL\'s render accepts a { wrapper } option: render(<MyComponent />, { wrapper: ({ children }) => <ThemeProvider theme="dark">{children}</ThemeProvider> }). Better: create a custom renderWithProviders() helper that wraps with all app-level Providers (theme, auth, router, query client). RTL docs recommend this pattern. For unit tests of Context consumers, you can also provide a minimal mock Provider with test values.',
    tags: ['context', 'react-testing-library', 'providers', 'test-setup'],
    year: 2025,
  },
  {
    id: 'te-039',
    topic: 'testing',
    difficulty: 'senior',
    type: 'mcq',
    question: 'How do you test a React error boundary component?',
    options: [
      'Error boundaries cannot be unit tested — only E2E tested',
      'Render a component that throws inside the error boundary, suppress the expected console.error output with vi.spyOn(console, "error").mockImplementation(() => {}), and assert the fallback UI is displayed.',
      'Use try/catch blocks inside RTL tests to catch the thrown error',
      'Mock React\'s componentDidCatch lifecycle with vi.mock("react")',
    ],
    answer: 1,
    explanation: 'Testing error boundaries: render <ErrorBoundary><ThrowingComponent /></ErrorBoundary> where ThrowingComponent throws on render. RTL will log the error to console.error (React\'s internal logging) — suppress with vi.spyOn. Assert the fallback: expect(screen.getByText(/something went wrong/i)).toBeInTheDocument(). Also test the reset mechanism if the boundary has a "Try again" button. Note: React 16+ calls componentDidCatch twice in dev strict mode.',
    tags: ['error-boundary', 'react-testing-library', 'error-handling'],
    year: 2025,
  },
  {
    id: 'te-040',
    topic: 'testing',
    difficulty: 'lead',
    type: 'mcq',
    question: 'What is the Vitest workspace config and how does it support testing different environments in a monorepo?',
    options: [
      'A workspace config only controls which test files are included',
      'vitest.workspace.ts defines multiple projects with different environments (jsdom, node, happy-dom), each with their own include patterns, setup files, and configs. A monorepo can run browser-environment tests (React components) and Node-environment tests (API handlers) in one vitest run.',
      'Workspace config is only for TypeScript path aliases',
      'It is the same as turbo.json but for test orchestration',
    ],
    answer: 1,
    explanation: 'vitest.workspace.ts: export default [ { extends: "./vite.config.ts", test: { name: "client", environment: "jsdom", include: ["src/**/*.test.tsx"] } }, { test: { name: "server", environment: "node", include: ["server/**/*.test.ts"] } } ]. Each project runs with its own environment and setup. The vitest UI shows results per project. This is more efficient than running separate vitest instances because they share the same process with isolated environments.',
    tags: ['vitest', 'workspace', 'monorepo', 'environments'],
    year: 2025,
  },
  {
    id: 'te-041',
    topic: 'testing',
    difficulty: 'mid',
    type: 'true-false',
    question: 'Vitest\'s browser mode runs tests in an actual browser (via Playwright or WebdriverIO) instead of the default jsdom simulation.',
    answer: true,
    explanation: 'Vitest browser mode (experimental, Vitest 1.x+) executes tests in a real browser environment using Playwright, WebdriverIO, or Webdriver. This eliminates jsdom limitations (no real layout, no canvas, no WebGL, approximated browser APIs). Configure with test: { browser: { enabled: true, provider: "playwright", name: "chromium" } }. Useful for testing components that rely on real DOM measurements or browser-only APIs.',
    tags: ['vitest', 'browser-mode', 'playwright'],
    year: 2025,
  },
  {
    id: 'te-042',
    topic: 'testing',
    difficulty: 'lead',
    type: 'mcq',
    question: 'What are the pros and cons of snapshot testing with Vitest?',
    options: [
      'Snapshots are always the best approach for component testing',
      'Pros: fast to write, catches unintended structural changes, great for stable outputs (serializers, icons, API shapes). Cons: large snapshots are unreadable, developers blindly update them on failures, they test implementation details not behavior, and they accumulate as dead weight over time.',
      'Snapshots only work with class components, not hooks',
      'Snapshots are deprecated in Vitest 2.0',
    ],
    answer: 1,
    explanation: 'Snapshot trade-offs: when a snapshot test fails, it COULD mean a regression or an intentional change — the developer must manually diff to know. This breaks the fast failure signal of good tests. Best use cases: (1) Pure serialization functions, (2) Complex object shapes from parsers/transformers, (3) SVG icon output, (4) Stable component markup that never changes intentionally. Avoid for components with props, state, user interaction, or dynamic data.',
    tags: ['snapshots', 'vitest', 'testing-strategy', 'pros-cons'],
    year: 2025,
  },
  {
    id: 'te-043',
    topic: 'testing',
    difficulty: 'senior',
    type: 'mcq',
    question: 'In Playwright, how do you use test.describe and organize test suites?',
    options: [
      'test.describe is only for grouping; it has no effect on execution',
      'test.describe groups related tests, allows shared beforeEach/afterEach hooks scoped to the group, supports nesting, and enables test.describe.parallel() for concurrent execution within the group. test.describe.serial() forces sequential execution for tests that share state.',
      'test.describe replaces test.beforeAll for shared setup',
      'Playwright does not have a describe API — use separate files instead',
    ],
    answer: 1,
    explanation: 'Playwright test.describe organizes tests logically: test.describe("checkout flow", () => { test.beforeEach(async ({ page }) => { await page.goto("/cart") }); test("adds item", ...); test("removes item", ...); }). Hooks inside describe are scoped — they only run for tests in that group. test.describe.parallel() overrides the default serial file-level execution for independent tests. Nesting describe blocks creates a clear hierarchy in reports.',
    tags: ['playwright', 'test.describe', 'organization', 'hooks'],
    year: 2025,
  },
  {
    id: 'te-044',
    topic: 'testing',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What testing strategies apply specifically to React Server Components (RSC)?',
    options: [
      'RSC are tested identically to Client Components using RTL',
      'RSC testing strategies: (1) unit test async data-fetching functions in isolation, (2) use Next.js experimental test utilities for RSC rendering, (3) Playwright E2E to verify rendered HTML output in a real Next.js server, (4) test RSC output as static HTML assertions.',
      'RSC must be converted to Client Components for any testing',
      'RSC are automatically tested by TypeScript type checking',
    ],
    answer: 1,
    explanation: 'RSC challenges: they are async components (async function Page()), run server-side only, and access server resources (DB, filesystem). jsdom-based RTL cannot execute true RSC. Current approaches: (1) Extract pure data functions and unit test them. (2) @next/experimental-test-utils provides renderServer() in development. (3) Playwright E2E navigates to the route and asserts rendered text. The ecosystem is still maturing as of 2025.',
    tags: ['rsc', 'react-server-components', 'testing', 'nextjs'],
    year: 2026,
  },
  {
    id: 'te-045',
    topic: 'testing',
    difficulty: 'senior',
    type: 'debug',
    question: 'This Playwright test is flaky — it sometimes passes and sometimes fails. What is the issue?',
    code: `test('shows notification after save', async ({ page }) => {
  await page.goto('/settings')
  await page.click('button[data-testid="save-btn"]')
  // Wait 1 second for notification to appear
  await page.waitForTimeout(1000)
  await expect(page.locator('.notification')).toBeVisible()
})`,
    answer: 'page.waitForTimeout(1000) is a fixed delay that is both fragile (fails on slow CI) and slow (wastes time on fast machines). Replace with expect(page.locator(".notification")).toBeVisible() which has built-in auto-waiting and retries.',
    explanation: 'Fixed timeouts are the primary cause of flaky Playwright tests. The notification may appear in 200ms or 2000ms depending on server load. Playwright\'s expect assertions auto-wait (default 5s timeout): await expect(page.locator(".notification")).toBeVisible() polls until the element is visible or the timeout expires. Never use waitForTimeout for element appearance — only for deliberate pauses when there is no actionable event to wait for.',
    tags: ['playwright', 'flaky-tests', 'auto-waiting', 'waitForTimeout'],
    year: 2025,
  },
]
