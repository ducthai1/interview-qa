import type { Question } from '../types'

export const frontendPracticalQuestions: Question[] = [
  // ── CSS (8 questions) ──────────────────────────────────────────────
  {
    id: 'fp-001',
    topic: 'css',
    difficulty: 'mid',
    type: 'system-design',
    question:
      'Designer gives you a layout that needs to work on 320px to 4K screens. Walk through your responsive strategy.',
    answer:
      'Use fluid typography (clamp()), container queries, CSS Grid with auto-fit/minmax, logical properties, and mobile-first breakpoints.',
    explanation:
      'Start mobile-first with min-width breakpoints. Use clamp() for fluid font sizes (e.g., clamp(1rem, 2.5vw, 2rem)) so text scales smoothly without breakpoints. Use CSS Grid with auto-fit/minmax for card-like layouts that reflow naturally. Add container queries (@container) for component-level responsiveness independent of viewport. Use logical properties (inline-size vs width) for internationalization. For 4K, cap max-width on the main container (e.g., 1440px) and center it — full-width on ultra-wide is unreadable. Test with Chrome DeviceMode at 320px, 768px, 1024px, 1440px, 2560px. Use rem/em units throughout; avoid px for font sizes.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/CSS/clamp',
      'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries',
    ],
    tags: ['responsive', 'fluid-typography', 'container-queries', 'grid'],
    year: 2025,
  },
  {
    id: 'fp-002',
    topic: 'css',
    difficulty: 'junior',
    type: 'code-write',
    question:
      'A fixed header overlaps content when users click anchor links. The heading scrolls behind the sticky header. How do you fix this?',
    code: `/* Current CSS */
header {
  position: fixed;
  top: 0;
  height: 64px;
}
main {
  margin-top: 64px;
}`,
    answer: `/* Fix: add scroll-padding-top to account for the fixed header */
html {
  scroll-padding-top: 80px; /* header height + some breathing room */
}

/* Alternative per-element approach using scroll-margin */
section[id] {
  scroll-margin-top: 80px;
}`,
    explanation:
      'scroll-padding-top on the html/body element tells the browser to offset the scroll snap position when navigating to anchors (via href="#section" or scrollIntoView). Set it slightly larger than the header height for visual breathing room. scroll-margin-top on target elements achieves the same per-element. The old hack was adding an invisible pseudo-element with negative margin, but scroll-padding-top is the modern, clean solution. Works with both anchor clicks and browser back/forward navigation to anchors.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-top',
    ],
    tags: ['scroll-padding', 'fixed-header', 'anchor-links', 'layout'],
    year: 2025,
  },
  {
    id: 'fp-003',
    topic: 'css',
    difficulty: 'senior',
    type: 'system-design',
    question:
      'Your CSS bundle is 500KB. How do you audit and reduce it?',
    answer:
      'Audit with PurgeCSS/coverage tools, adopt CSS Modules or utility-first approach, remove unused framework CSS, and implement critical CSS extraction.',
    explanation:
      '1) Audit: Use Chrome DevTools Coverage tab to find unused CSS (often 60-80% of framework CSS). Run PurgeCSS or UnCSS against your HTML/JSX to identify dead rules. 2) Quick wins: Remove unused Bootstrap/Tailwind classes via tree-shaking (Tailwind JIT does this automatically). Remove duplicate rules with cssnano. 3) Architecture: Switch to CSS Modules or CSS-in-JS for automatic scoping and dead-code elimination. If using Tailwind, ensure JIT mode is on. 4) Split: Extract critical above-the-fold CSS inline in <head>, load the rest asynchronously via media="print" onload trick or rel="preload". 5) Reduce specificity wars — flatter selectors compress better with gzip. 6) Replace CSS custom reset with modern minimal reset (fewer rules). Target: under 50KB compressed for most sites.',
    tags: ['css-optimization', 'bundle-size', 'purgecss', 'critical-css'],
    year: 2025,
  },
  {
    id: 'fp-004',
    topic: 'css',
    difficulty: 'senior',
    type: 'system-design',
    question:
      'Z-index war — multiple developers have added z-index values like 9999, 99999 across the codebase. Overlapping modals, dropdowns, and tooltips fight for stacking order. How do you organize stacking contexts?',
    answer:
      'Create a z-index token scale, leverage stacking context isolation, and use CSS custom properties for a managed layering system.',
    explanation:
      'Step 1: Define a z-index scale with CSS custom properties: --z-dropdown: 100, --z-sticky: 200, --z-overlay: 300, --z-modal: 400, --z-toast: 500, --z-tooltip: 600. Step 2: Create new stacking contexts intentionally using isolation: isolate on component containers — this scopes z-index so child elements cant escape their parent layer. Step 3: Replace all magic z-index numbers with the tokens. Step 4: Document the scale in your design system. Step 5: Add a stylelint rule (declaration-property-value-disallowed-list) to ban raw z-index numbers and enforce using the tokens. Key insight: understanding that a new stacking context is created by position + z-index, opacity < 1, transform, filter, etc. Use isolation: isolate explicitly to control this.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context',
    ],
    tags: ['z-index', 'stacking-context', 'design-system', 'css-architecture'],
    year: 2025,
  },
  {
    id: 'fp-005',
    topic: 'css',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'Client wants a sticky sidebar that scrolls with the page but stops when it reaches the footer. Implement it with pure CSS.',
    answer: `/* The sidebar sticks until it hits the footer boundary */
.layout {
  display: grid;
  grid-template-columns: 1fr 300px;
  align-items: start; /* crucial — prevents sidebar stretching */
}

.main-content {
  min-height: 200vh; /* example long content */
}

.sidebar {
  position: sticky;
  top: 80px; /* offset for header */
  max-height: calc(100vh - 100px);
  overflow-y: auto;
}

/* Footer is outside the grid, so sidebar naturally stops */
.footer {
  grid-column: 1 / -1;
}`,
    explanation:
      'position: sticky works within the nearest scrolling ancestor and its containing block. The sidebar sticks at top: 80px and stays there as the user scrolls. It naturally stops sticking when its parent grid row ends (where the footer begins). Key requirements: 1) The parent must NOT have overflow: hidden/auto (breaks sticky). 2) align-items: start on the grid prevents the sidebar from stretching to match the main content height — without this, there is no room to stick. 3) Add max-height + overflow-y: auto so the sidebar itself scrolls if its content is taller than the viewport. No JavaScript needed.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/CSS/position#sticky',
    ],
    tags: ['sticky', 'sidebar', 'grid-layout', 'overflow'],
    year: 2025,
  },
  {
    id: 'fp-006',
    topic: 'css',
    difficulty: 'mid',
    type: 'debug',
    question:
      'A developer reports that position: sticky is not working on a table header. The thead stays in place on other pages but not in this layout. What is likely wrong?',
    code: `<div class="table-wrapper" style="overflow-x: auto;">
  <table>
    <thead>
      <tr>
        <th style="position: sticky; top: 0;">Name</th>
        <th style="position: sticky; top: 0;">Email</th>
      </tr>
    </thead>
    <tbody><!-- many rows --></tbody>
  </table>
</div>`,
    options: [
      'sticky does not work on table elements at all',
      'The overflow property on the ancestor container breaks sticky behavior',
      'You need to add z-index to th elements',
      'thead should have position: sticky instead of individual th',
    ],
    answer: 1,
    explanation:
      'position: sticky only works relative to the nearest ancestor with a scrolling mechanism. When .table-wrapper has overflow-x: auto, it creates a new scroll container. The sticky th tries to stick within that container, not the page. If the wrapper itself is not scrolling vertically (only horizontally), sticky has no effect on the vertical axis. Fix options: 1) Remove overflow-x from wrapper and handle horizontal scroll differently. 2) Set a fixed height on .table-wrapper with overflow-y: auto so the sticky header works within that scrollable area. 3) Use a virtualized table with a fixed header row separate from the scrollable tbody.',
    tags: ['sticky', 'overflow', 'table', 'debugging'],
    year: 2025,
  },
  {
    id: 'fp-007',
    topic: 'css',
    difficulty: 'junior',
    type: 'mcq',
    question:
      'You have a horizontal nav that overflows on mobile. Items wrap to a second line and look broken. What is the quickest CSS-only fix to make it horizontally scrollable?',
    options: [
      'Set display: flex; flex-wrap: wrap; on the nav',
      'Set display: flex; overflow-x: auto; flex-wrap: nowrap; and use gap for spacing',
      'Use float: left on each nav item with clear: both',
      'Set white-space: nowrap; on the parent with no other changes',
    ],
    answer: 1,
    explanation:
      'Flexbox with overflow-x: auto and flex-wrap: nowrap creates a horizontally scrollable container. Items stay in a single row and the user can swipe horizontally on mobile. Add -webkit-overflow-scrolling: touch for smooth momentum scrolling on older iOS. Use gap instead of margins for consistent spacing. To hide the scrollbar visually while keeping functionality, use scrollbar-width: none (Firefox) and ::-webkit-scrollbar { display: none } (Chromium/Safari). Option D (white-space: nowrap) only works for inline/inline-block elements, not flex items.',
    tags: ['overflow', 'flexbox', 'mobile', 'navigation'],
    year: 2025,
  },
  {
    id: 'fp-008',
    topic: 'css',
    difficulty: 'lead',
    type: 'system-design',
    question:
      'Your team is migrating from a legacy BEM CSS codebase to a design-token-based system. The site has 200+ components. How do you plan this migration without breaking production?',
    answer:
      'Adopt an incremental strategy: define tokens first, create a compatibility layer mapping old variables, migrate component-by-component with visual regression testing, and run both systems in parallel.',
    explanation:
      '1) Define design tokens as CSS custom properties (--color-primary, --space-md, etc.) in a global tokens.css file. 2) Create a bridge/compatibility layer that maps old BEM variables to new tokens so both systems coexist. 3) Set up visual regression testing (Chromatic, Percy, or Playwright screenshots) to catch unintended changes — this is critical with 200+ components. 4) Prioritize migration order: shared/base components first (buttons, inputs, typography), then composite components. 5) Use a codemod or find-replace script for mechanical changes (e.g., replacing hardcoded colors with token references). 6) Each migrated component gets a PR with before/after screenshots. 7) Feature-flag the new tokens so you can roll back. 8) Once all components are migrated, remove the compatibility layer and legacy variables. Budget: 2-3 sprints for infra/tokens, then 1-2 components per developer per sprint.',
    tags: ['migration', 'design-tokens', 'css-architecture', 'team-process'],
    year: 2025,
  },

  // ── CSS-STYLING (7 questions) ──────────────────────────────────────
  {
    id: 'fp-009',
    topic: 'css-styling',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'Implement a dark/light theme toggle that respects system preference and persists the user\'s manual choice in localStorage.',
    answer: `/* CSS: use custom properties for theming */
:root {
  --bg: #ffffff;
  --text: #1a1a1a;
  --surface: #f5f5f5;
}

[data-theme="dark"] {
  --bg: #121212;
  --text: #e0e0e0;
  --surface: #1e1e1e;
}

/* Respect system preference when no manual choice */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --bg: #121212;
    --text: #e0e0e0;
    --surface: #1e1e1e;
  }
}

/* JavaScript */
// On page load — run this in <head> to prevent flash
const stored = localStorage.getItem('theme');
if (stored) {
  document.documentElement.setAttribute('data-theme', stored);
}

// Toggle function
function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = current === 'dark' || (!current && systemDark);
  const next = isDark ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
}

// Listen for system preference changes
window.matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      // Only auto-switch if user hasn't manually chosen
      document.documentElement.setAttribute(
        'data-theme', e.matches ? 'dark' : 'light'
      );
    }
  });`,
    explanation:
      'The strategy uses three layers: 1) CSS custom properties for theme values — all components reference these variables. 2) data-theme attribute on <html> for explicit overrides. 3) prefers-color-scheme media query as the default when no manual choice exists. The :root:not([data-theme="light"]) selector ensures the system dark preference only applies when the user hasnt explicitly chosen light. The JS in <head> runs synchronously before paint to prevent flash of wrong theme (FOWT). localStorage persists across sessions. The matchMedia listener handles OS-level theme changes in real-time.',
    references: [
      'https://web.dev/articles/prefers-color-scheme',
    ],
    tags: ['dark-mode', 'theming', 'prefers-color-scheme', 'localstorage'],
    year: 2025,
  },
  {
    id: 'fp-010',
    topic: 'css-styling',
    difficulty: 'junior',
    type: 'code-write',
    question:
      'A card component has text that overflows its container on mobile when the title is too long. Implement a CSS-only solution that truncates with ellipsis for single-line and also a multi-line clamp version.',
    answer: `/* Single-line truncation */
.card-title--single {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Multi-line clamp (show max 3 lines) */
.card-title--multi {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}`,
    explanation:
      'Single-line ellipsis requires all three properties: white-space: nowrap prevents wrapping, overflow: hidden clips the content, text-overflow: ellipsis adds "..." at the clipping point. The element must have a constrained width (block-level or explicit width). Multi-line clamping uses the -webkit-line-clamp property which, despite the vendor prefix, is supported in all modern browsers (Chrome, Firefox 68+, Safari, Edge). The element must use -webkit-box display. For accessibility, the full text should still be available (e.g., via title attribute or expandable click) since screen readers may read the truncated version.',
    tags: ['text-overflow', 'ellipsis', 'line-clamp', 'mobile'],
    year: 2025,
  },
  {
    id: 'fp-011',
    topic: 'css-styling',
    difficulty: 'mid',
    type: 'debug',
    question:
      'A developer is using CSS transitions but the animation from display: none to display: block doesnt work. The element just appears instantly. What is happening and how do you fix it?',
    options: [
      'Add a longer transition duration',
      'display is a non-animatable property; use opacity/visibility with transition or the new @starting-style rule',
      'Use display: flex instead of display: block',
      'Add will-change: display to enable transition on display',
    ],
    answer: 1,
    explanation:
      'The display property is not animatable — changing from none to block is a binary toggle with no intermediate values, so transitions have nothing to interpolate. Classic fix: keep the element in the DOM and animate opacity (0 to 1) + visibility (hidden to visible). visibility: hidden removes it from the accessibility tree and click events while still allowing transitions. Modern fix (2024+): use @starting-style to define entry animations for elements transitioning from display: none. Also transition-behavior: allow-discrete lets display participate in transitions. Example: @starting-style { .modal { opacity: 0; } } combined with .modal { transition: opacity 0.3s, display 0.3s allow-discrete; }.',
    references: [
      'https://developer.chrome.com/blog/entry-exit-animations',
    ],
    tags: ['transitions', 'display-none', 'animation', 'starting-style'],
    year: 2025,
  },
  {
    id: 'fp-012',
    topic: 'css-styling',
    difficulty: 'senior',
    type: 'code-write',
    question:
      'Build a responsive masonry-style grid layout using only modern CSS (no JavaScript). It should handle variable-height cards and reflow based on available space.',
    answer: `/* Modern CSS Masonry with CSS Grid */
/* Option 1: columns (widely supported) */
.masonry-columns {
  columns: 3 280px; /* 3 columns, min 280px each */
  column-gap: 1rem;
}

.masonry-columns .card {
  break-inside: avoid;
  margin-bottom: 1rem;
}

/* Option 2: CSS Grid masonry (emerging spec, Firefox flag) */
.masonry-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-template-rows: masonry; /* future spec */
  gap: 1rem;
}

/* Option 3: Flexbox approximation with fixed aspect ratios */
.masonry-flex {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.masonry-flex .card {
  flex: 1 1 280px;
}`,
    explanation:
      'Three approaches in 2025: 1) CSS columns is the most reliable — it fills columns top-to-bottom then moves to the next column. break-inside: avoid prevents cards from splitting across columns. Downside: items flow vertically, not horizontally (column 1 fills first). 2) CSS Grid masonry (grid-template-rows: masonry) is the ideal solution but is still behind flags in most browsers — only Firefox Nightly supports it. 3) Flexbox creates a grid-like layout but items are equal height per row unless you use specific aspect ratios. For production today, use the columns approach for true masonry or a lightweight JS library (Masonry.js, ~4KB) if horizontal reading order matters.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Masonry_layout',
    ],
    tags: ['masonry', 'grid', 'columns', 'responsive-layout'],
    year: 2025,
  },
  {
    id: 'fp-013',
    topic: 'css-styling',
    difficulty: 'junior',
    type: 'mcq',
    question:
      'You need to center a modal vertically and horizontally in the viewport. It should stay centered regardless of content height. Which approach is most robust?',
    options: [
      'position: fixed; top: 50%; left: 50%; margin-left: -150px; margin-top: -100px;',
      'position: fixed; inset: 0; display: grid; place-items: center;',
      'position: fixed; top: 0; left: 0; text-align: center; vertical-align: middle;',
      'position: fixed; display: table-cell; vertical-align: middle;',
    ],
    answer: 1,
    explanation:
      'Option B using inset: 0 (shorthand for top/right/bottom/left: 0) with display: grid and place-items: center is the most robust. It works regardless of the modal content size, doesnt require knowing dimensions, and centers both axes. The backdrop overlay fills the viewport. Option A requires hardcoded dimensions (the negative margins). A close alternative is position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%) which also works without knowing dimensions. Even better in modern CSS: use the <dialog> element with its built-in ::backdrop and centering behavior.',
    tags: ['centering', 'modal', 'grid', 'fixed-positioning'],
    year: 2025,
  },
  {
    id: 'fp-014',
    topic: 'css-styling',
    difficulty: 'senior',
    type: 'system-design',
    question:
      'Your team uses Tailwind CSS but designers are complaining the site looks "generic." How do you create a distinctive visual identity while keeping utility-first CSS?',
    answer:
      'Customize the Tailwind theme config extensively, create component-level design tokens, build a small set of custom utilities, and use @apply sparingly for complex component patterns.',
    explanation:
      'The "generic Tailwind" problem comes from using default values. Fix: 1) Fully customize tailwind.config.js — override default colors (dont just extend), typography scale, spacing scale, border-radius values, and shadows to match the brand. 2) Define a design token layer: create semantic aliases like colors.primary, colors.surface rather than using raw palette values in components. 3) Create custom utilities via plugin API for brand-specific patterns (e.g., a branded gradient, specific text treatments). 4) Build a small component library (button, card, etc.) using @apply that encapsulates brand patterns — developers compose these instead of raw utilities for key elements. 5) Add custom fonts, animations, and micro-interactions via CSS. 6) Use Tailwind only for layout/spacing; critical brand elements get dedicated CSS classes. The goal: 80% Tailwind utilities for layout, 20% custom CSS for brand personality.',
    tags: ['tailwind', 'design-system', 'branding', 'customization'],
    year: 2025,
  },
  {
    id: 'fp-015',
    topic: 'css-styling',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'Users report that focus outlines disappear on your site, hurting keyboard navigation. The previous developer added `*:focus { outline: none; }`. Fix this so keyboard users see focus indicators but mouse users do not.',
    answer: `/* Remove the blanket outline removal */
/* DELETE: *:focus { outline: none; } */

/* Use :focus-visible for keyboard-only focus styles */
*:focus {
  outline: none; /* still remove default for mouse clicks */
}

*:focus-visible {
  outline: 2px solid var(--color-primary, #2563eb);
  outline-offset: 2px;
  border-radius: 2px;
}

/* Enhanced focus for specific interactive elements */
button:focus-visible,
a:focus-visible,
input:focus-visible,
select:focus-visible,
textarea:focus-visible {
  outline: 2px solid var(--color-primary, #2563eb);
  outline-offset: 2px;
  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.2);
}`,
    explanation:
      ':focus-visible is a CSS pseudo-class that only matches when the browser determines focus should be visibly indicated — typically for keyboard navigation (Tab key) but not for mouse clicks. This gives keyboard users clear focus rings while keeping the clean look mouse users expect. All modern browsers support it. The outline-offset adds space between the element and the outline. The box-shadow provides an additional glow for important interactive elements. Never use outline: none without providing :focus-visible styles — it creates a WCAG 2.4.7 failure (Focus Visible).',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible',
    ],
    tags: ['focus-visible', 'keyboard', 'accessibility', 'outline'],
    year: 2025,
  },

  // ── BROWSER-DOM (10 questions) ─────────────────────────────────────
  {
    id: 'fp-016',
    topic: 'browser-dom',
    difficulty: 'senior',
    type: 'system-design',
    question:
      'Users report your SPA gets slower over time — memory usage climbs from 50MB to 500MB after an hour. How do you diagnose and fix a memory leak?',
    answer:
      'Use Chrome DevTools Memory tab: take heap snapshots at intervals, compare allocations, identify detached DOM nodes and uncleaned event listeners/intervals.',
    explanation:
      'Diagnosis workflow: 1) Open Chrome DevTools Memory tab. 2) Take a heap snapshot at page load. 3) Use the app normally for a few minutes. 4) Take another snapshot. 5) Use "Comparison" view to see what grew. Common culprits: a) Detached DOM nodes — elements removed from the DOM but still referenced in JS (event handlers, closures, global arrays). b) Forgotten setInterval/setTimeout not cleared on component unmount. c) Event listeners added but never removed (especially on window/document). d) Closures capturing large objects. e) Growing arrays/Maps that never get pruned (chat message history, analytics buffers). f) WebSocket/EventSource handlers accumulating. Fix: In React, ensure useEffect cleanup functions remove listeners and clear timers. Use WeakRef/WeakMap for caches. Use the Performance Monitor in DevTools to watch JS heap size in real-time. Set up automated memory regression tests with Puppeteer.',
    references: [
      'https://developer.chrome.com/docs/devtools/memory-problems',
    ],
    tags: ['memory-leak', 'devtools', 'heap-snapshot', 'debugging'],
    year: 2025,
  },
  {
    id: 'fp-017',
    topic: 'browser-dom',
    difficulty: 'mid',
    type: 'mcq',
    question:
      'A third-party analytics script is blocking page load and hurting your LCP by 2 seconds. Which loading strategy will eliminate the render-blocking while still capturing analytics?',
    options: [
      'Move the script to the bottom of <body>',
      'Add the async attribute to the script tag',
      'Add the defer attribute to the script tag',
      'Load it dynamically after the load event with requestIdleCallback',
    ],
    answer: 3,
    explanation:
      'For non-critical third-party scripts like analytics, loading after the page is fully interactive gives the best performance. requestIdleCallback fires when the browser is idle, ensuring the script doesnt compete with critical rendering. Implementation: window.addEventListener("load", () => { requestIdleCallback(() => { const s = document.createElement("script"); s.src = "analytics.js"; document.body.appendChild(s); }); }); Option A still blocks parsing at that point. Option B (async) downloads in parallel but executes immediately when ready — could still block during critical rendering. Option C (defer) runs after parsing but before DOMContentLoaded — better but still occupies the main thread during initial load. For analytics, a few seconds delay in tracking is acceptable.',
    tags: ['script-loading', 'third-party', 'lcp', 'render-blocking'],
    year: 2025,
  },
  {
    id: 'fp-018',
    topic: 'browser-dom',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'Implement cross-tab communication so that when a user logs out in one tab, all other open tabs of your app also log out immediately.',
    answer: `// Method 1: BroadcastChannel API (modern, preferred)
const channel = new BroadcastChannel('auth-channel');

// When user logs out in this tab:
function logout() {
  clearSession();
  channel.postMessage({ type: 'LOGOUT' });
  window.location.href = '/login';
}

// Listen for logout from other tabs:
channel.addEventListener('message', (event) => {
  if (event.data.type === 'LOGOUT') {
    clearSession();
    window.location.href = '/login';
  }
});

// Method 2: storage event (broader support fallback)
function logoutWithStorage() {
  clearSession();
  localStorage.setItem('logout-event', Date.now().toString());
  window.location.href = '/login';
}

window.addEventListener('storage', (event) => {
  if (event.key === 'logout-event') {
    clearSession();
    window.location.href = '/login';
  }
});`,
    explanation:
      'Two main approaches: 1) BroadcastChannel API — purpose-built for cross-tab messaging. Create a named channel; any tab with the same channel name receives messages. Clean API, supports structured data. Available in all modern browsers. 2) localStorage storage event — fires in OTHER tabs (not the one that wrote) when a value changes. Widely supported but limited to string data and same-origin. The storage event trick is older but very reliable as a fallback. Other options: SharedWorker (shared thread between tabs), Service Worker postMessage (for PWAs). For logout specifically, also clear cookies/tokens server-side and set a short token expiry as defense-in-depth.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel',
    ],
    tags: ['cross-tab', 'broadcast-channel', 'storage-event', 'auth'],
    year: 2025,
  },
  {
    id: 'fp-019',
    topic: 'browser-dom',
    difficulty: 'senior',
    type: 'system-design',
    question:
      'Browser back button doesnt work properly in your SPA — hitting back either does nothing, jumps to a random page, or loses form state. How do you fix history management?',
    answer:
      'Use the History API properly with pushState/replaceState, manage state in the URL, and handle the popstate event to restore application state.',
    explanation:
      'Common SPA history problems and fixes: 1) Back does nothing: You are changing UI state without calling history.pushState(). Every meaningful navigation (tab switch, modal open, filter change) should push a history entry. 2) Random jumps: You are pushing too many entries (e.g., on every keystroke or scroll). Use replaceState for in-place updates (e.g., search-as-you-type updates the URL without new entries). 3) Lost form state: Store form data in the history state object: history.pushState({ formData: {...} }, "", "/form/step2"). On popstate, restore from event.state. 4) Handle popstate event to actually render the previous state — just listening for URL changes isnt enough, you must update the UI. 5) For React: use a router (React Router, TanStack Router) that handles this. Key principle: URL is the source of truth for what the user sees. Encode all meaningful UI state in the URL (route, query params, hash).',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/History_API',
    ],
    tags: ['history-api', 'spa', 'navigation', 'pushstate'],
    year: 2025,
  },
  {
    id: 'fp-020',
    topic: 'browser-dom',
    difficulty: 'mid',
    type: 'system-design',
    question:
      'How do you detect and handle slow network connections gracefully in your web app? Users on 2G/3G see broken layouts and timeouts.',
    answer:
      'Use the Network Information API for detection, implement adaptive loading patterns, add timeout handling, and provide meaningful loading/error states.',
    explanation:
      'Detection: 1) navigator.connection.effectiveType returns "4g", "3g", "2g", or "slow-2g". 2) navigator.connection.saveData boolean indicates user has enabled data saver. 3) Listen for changes: navigator.connection.addEventListener("change", handler). Adaptive strategies: a) On slow connections, serve smaller images (low-res), skip video autoplay, reduce animation complexity. b) Implement progressive loading — show text first, then images. c) Use smaller JS bundles via dynamic imports with network-aware code splitting. d) Set appropriate fetch timeouts (shorter timeout + retry vs. infinite wait). e) Cache aggressively with Service Workers so repeat visits work offline. f) Show skeleton screens instead of spinners. g) Use stale-while-revalidate caching pattern. h) Preload critical resources. Always test on throttled connections (Chrome DevTools Network tab: Slow 3G preset).',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API',
    ],
    tags: ['network-detection', 'adaptive-loading', 'progressive-enhancement', 'offline'],
    year: 2025,
  },
  {
    id: 'fp-021',
    topic: 'browser-dom',
    difficulty: 'senior',
    type: 'code-write',
    question:
      'Implement a service worker for an offline-first PWA with a stale-while-revalidate cache strategy for API calls and cache-first for static assets.',
    answer: `// service-worker.js
const STATIC_CACHE = 'static-v1';
const API_CACHE = 'api-v1';

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/offline.html',
];

// Install: pre-cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

// Activate: clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== STATIC_CACHE && key !== API_CACHE)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Fetch: strategy based on request type
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (url.pathname.startsWith('/api/')) {
    // Stale-while-revalidate for API calls
    event.respondWith(staleWhileRevalidate(request, API_CACHE));
  } else {
    // Cache-first for static assets
    event.respondWith(cacheFirst(request, STATIC_CACHE));
  }
});

async function cacheFirst(request, cacheName) {
  const cached = await caches.match(request);
  if (cached) return cached;
  try {
    const response = await fetch(request);
    const cache = await caches.open(cacheName);
    cache.put(request, response.clone());
    return response;
  } catch {
    return caches.match('/offline.html');
  }
}

async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);

  const fetchPromise = fetch(request)
    .then((response) => {
      cache.put(request, response.clone());
      return response;
    })
    .catch(() => cached); // fallback to cache if network fails

  return cached || fetchPromise;
}`,
    explanation:
      'This service worker uses two strategies: 1) Cache-first for static assets — checks cache first, falls back to network, and caches the response. If both fail, shows an offline page. This is fast and works offline. 2) Stale-while-revalidate for API calls — returns cached data immediately for speed, then fetches fresh data in the background and updates the cache. Next request gets the fresh data. Cache invalidation happens through versioned cache names (STATIC_CACHE = "static-v1") — on update, bump the version and the activate handler deletes old caches. skipWaiting() + clients.claim() ensures the new worker takes over immediately.',
    references: [
      'https://web.dev/articles/service-worker-lifecycle',
    ],
    tags: ['service-worker', 'pwa', 'offline', 'cache-strategy'],
    year: 2025,
  },
  {
    id: 'fp-022',
    topic: 'browser-dom',
    difficulty: 'junior',
    type: 'code-write',
    question:
      'You need to lazy-load images as they scroll into view. Implement this using the modern browser API (no libraries).',
    answer: `<!-- HTML: use loading="lazy" for native lazy loading -->
<img
  src="hero.jpg"
  alt="Hero banner"
  width="800"
  height="400"
  loading="lazy"
  decoding="async"
/>

<!-- For more control, use IntersectionObserver -->
<img
  data-src="photo.jpg"
  alt="Photo"
  class="lazy"
  width="400"
  height="300"
/>

<script>
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        observer.unobserve(img);
      }
    });
  },
  { rootMargin: '200px' } // start loading 200px before visible
);

document.querySelectorAll('img.lazy').forEach((img) => {
  observer.observe(img);
});
</script>`,
    explanation:
      'Two approaches: 1) Native loading="lazy" attribute — simplest, built into the browser, no JS needed. The browser decides when to load based on scroll position and connection speed. Add width/height attributes to prevent layout shift (CLS). 2) IntersectionObserver — more control over when loading triggers (rootMargin sets how far ahead to start). Use data-src to hold the URL until the image is near the viewport. Always include width and height on images for CLS prevention. decoding="async" tells the browser to decode the image off the main thread. For above-the-fold images, do NOT lazy-load them — it hurts LCP. Only lazy-load below-the-fold images.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API',
    ],
    tags: ['lazy-loading', 'intersection-observer', 'images', 'native-loading'],
    year: 2025,
  },
  {
    id: 'fp-023',
    topic: 'browser-dom',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'Your app has a search input that fires an API call on every keystroke, causing rate limiting and UI jank. Implement a debounced search with proper cleanup.',
    answer: `// Vanilla JS debounce with cleanup
function debounce(fn, delay) {
  let timeoutId;
  const debounced = (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
  debounced.cancel = () => clearTimeout(timeoutId);
  return debounced;
}

// Usage with AbortController for cancelling in-flight requests
const searchInput = document.getElementById('search');
let abortController = null;

const handleSearch = debounce(async (query) => {
  if (abortController) abortController.abort();
  abortController = new AbortController();

  try {
    const res = await fetch(\`/api/search?q=\${encodeURIComponent(query)}\`, {
      signal: abortController.signal,
    });
    const data = await res.json();
    renderResults(data);
  } catch (err) {
    if (err.name !== 'AbortError') {
      showError(err.message);
    }
  }
}, 300);

searchInput.addEventListener('input', (e) => {
  handleSearch(e.target.value);
});

// Cleanup on page unload / component unmount
// handleSearch.cancel();`,
    explanation:
      'Debouncing delays execution until the user stops typing for the specified duration (300ms is a good default). Key details: 1) clearTimeout on each keystroke resets the timer. 2) AbortController cancels any in-flight fetch when a new search triggers — prevents race conditions where an old slow response overwrites a newer result. 3) Filter out AbortError in the catch block since its expected. 4) The cancel() method allows cleanup on unmount. 5) encodeURIComponent prevents injection via the query string. For React, use the same pattern inside useEffect with a cleanup function, or use the useDeferredValue hook for search input rendering.',
    tags: ['debounce', 'search', 'abort-controller', 'api-calls'],
    year: 2025,
  },
  {
    id: 'fp-024',
    topic: 'browser-dom',
    difficulty: 'lead',
    type: 'system-design',
    question:
      'Your company needs to embed a widget into third-party websites. The widget must be style-isolated, performant, and secure. How do you architect this?',
    answer:
      'Use Shadow DOM for style isolation, iframe sandboxing for security, a small loader script, and postMessage for communication.',
    explanation:
      'Architecture: 1) Loader script: Provide a tiny (<2KB) script tag that third parties embed. This script creates the widget container and loads the actual widget asynchronously. 2) Style isolation: Use Shadow DOM to encapsulate the widget CSS — host page styles cannot bleed in, and widget styles cannot leak out. Attach shadow root with mode: "closed" for stronger encapsulation. 3) Security: If the widget handles sensitive data (payments, auth), render it in a sandboxed iframe on your domain. Use postMessage for parent-child communication with strict origin checking. 4) Performance: Bundle the widget separately, tree-shake aggressively, target < 50KB gzipped. Load after the host page is interactive (defer). Use preconnect to your CDN. 5) Versioning: Host on a CDN with semver in the URL (widget.example.com/v2/loader.js). 6) CSP: Document required Content-Security-Policy directives for host sites. 7) Resize: Use ResizeObserver to adapt to the containers dimensions.',
    tags: ['shadow-dom', 'iframe', 'widget', 'third-party', 'security'],
    year: 2025,
  },
  {
    id: 'fp-025',
    topic: 'browser-dom',
    difficulty: 'junior',
    type: 'mcq',
    question:
      'A user submits a form but nothing happens — no error, no redirect. You check the console and see the default form submission was prevented but the JavaScript fetch call silently failed. What is the most likely cause?',
    options: [
      'The form action attribute is missing',
      'The fetch call lacks error handling — the promise rejection is uncaught and the catch block is missing',
      'The form method should be POST instead of GET',
      'The submit button has type="reset" instead of type="submit"',
    ],
    answer: 1,
    explanation:
      'The most common cause of "silent form failures" is unhandled promise rejections. If fetch() fails (network error, CORS, etc.) and there is no .catch() or try/catch, the error vanishes silently. The user sees nothing because preventDefault() already stopped the native submission. Fix: Always wrap fetch in try/catch, show error UI in the catch block, and add a global window.addEventListener("unhandledrejection") handler as a safety net. Also check: response.ok is not automatically true — a 400/500 status doesnt throw an error, you must check it manually.',
    tags: ['forms', 'fetch', 'error-handling', 'debugging'],
    year: 2025,
  },

  // ── PERFORMANCE (10 questions) ─────────────────────────────────────
  {
    id: 'fp-026',
    topic: 'performance',
    difficulty: 'senior',
    type: 'system-design',
    question:
      'Lighthouse score is 45. Walk through your systematic approach to get it above 90.',
    answer:
      'Prioritize by Core Web Vitals impact: fix LCP first (images, fonts, render-blocking resources), then CLS (layout shifts), then INP (interaction responsiveness), then remaining audits.',
    explanation:
      'Systematic approach: Phase 1 — LCP (target < 2.5s): a) Optimize the hero image: use modern formats (WebP/AVIF), proper sizing (srcset), preload the LCP image. b) Eliminate render-blocking CSS/JS: inline critical CSS, defer non-critical. c) Font optimization: font-display: swap, preload key fonts, use system font stack for body. d) Server: enable compression (Brotli > gzip), HTTP/2, CDN. Phase 2 — CLS (target < 0.1): a) Add width/height to all images/videos. b) Reserve space for dynamic content (ads, embeds). c) Avoid injecting content above the fold after load. Phase 3 — INP (target < 200ms): a) Break long tasks with yield/scheduler.yield(). b) Reduce main thread work: defer non-critical JS, use web workers. c) Optimize event handlers. Phase 4: Enable text compression, reduce unused JS/CSS, add resource hints (preconnect, prefetch). Measure in production with the web-vitals library, not just Lighthouse.',
    references: [
      'https://web.dev/articles/vitals',
    ],
    tags: ['lighthouse', 'core-web-vitals', 'lcp', 'cls', 'inp'],
    year: 2025,
  },
  {
    id: 'fp-027',
    topic: 'performance',
    difficulty: 'mid',
    type: 'system-design',
    question:
      'First Contentful Paint is 4.5s. The HTML loads in 600ms but nothing renders until JavaScript bundles finish loading. How do you diagnose and fix this?',
    answer:
      'The app is client-side rendered with no SSR/SSG. Fix by implementing server-side rendering, critical CSS inlining, and reducing JS needed for first paint.',
    explanation:
      'Diagnosis: Open Chrome DevTools Performance tab and record a page load. Look at the filmstrip — if its blank for seconds, JS is blocking rendering. Check the Network waterfall: if HTML arrives fast but a large JS bundle must download, parse, and execute before any paint, thats a CSR bottleneck. Fixes: 1) SSR/SSG: Pre-render HTML on the server so the browser can paint immediately. In Next.js, use getServerSideProps or App Router server components. 2) Inline critical CSS in <head> so the first paint doesnt wait for CSS files. 3) Code split: Use dynamic imports so only the code for the current page loads initially. 4) Add a static HTML shell/skeleton in index.html for pure SPAs so something renders before JS. 5) Preload key resources: <link rel="preload" as="script"> for critical JS. 6) Reduce JS parse time: tree-shake, remove polyfills for modern browsers, compress with Brotli.',
    tags: ['fcp', 'ssr', 'code-splitting', 'critical-css', 'render-blocking'],
    year: 2025,
  },
  {
    id: 'fp-028',
    topic: 'performance',
    difficulty: 'mid',
    type: 'system-design',
    question:
      'Your e-commerce site has 50+ product images per page and images take too long to load. Design a complete image optimization strategy.',
    answer:
      'Use modern formats (AVIF/WebP), responsive srcset, lazy loading, CDN with transforms, blur placeholder technique, and proper caching.',
    explanation:
      'Complete strategy: 1) Format: Serve AVIF with WebP fallback using <picture> element. AVIF is 50% smaller than JPEG, WebP is 30% smaller. 2) Responsive: Use srcset + sizes attributes to serve appropriate sizes for each viewport. Dont send a 2000px image to a 400px container. 3) Lazy loading: loading="lazy" on below-fold images. Do NOT lazy-load the first visible row. 4) CDN image transforms: Use an image CDN (Cloudinary, imgix, or Vercel Image Optimization) that auto-resizes, converts formats, and caches at the edge. Append ?w=400&f=avif to URLs. 5) Placeholders: Show blurred LQIP (Low-Quality Image Placeholder) or dominant-color placeholder while full image loads. 6) Dimensions: Always set width/height or aspect-ratio to prevent CLS. 7) Cache: Set Cache-Control: public, max-age=31536000, immutable for hashed image URLs. 8) Preload: <link rel="preload"> for the LCP image. Budget: < 200KB per image on mobile.',
    references: [
      'https://web.dev/articles/image-optimization',
    ],
    tags: ['images', 'avif', 'webp', 'srcset', 'cdn', 'lazy-loading'],
    year: 2025,
  },
  {
    id: 'fp-029',
    topic: 'performance',
    difficulty: 'senior',
    type: 'system-design',
    question:
      'Your JS bundle is 2MB uncompressed (650KB gzipped). How do you analyze what is in it and reduce the size?',
    answer:
      'Use bundle analyzer to visualize, then apply code splitting, tree shaking, dependency audit, and dynamic imports to reduce size.',
    explanation:
      'Step 1 — Analyze: Run webpack-bundle-analyzer or source-map-explorer to visualize whats in the bundle. Common findings: a) One huge library (moment.js, lodash full build). b) Duplicate dependencies (two versions of the same library). c) Unused code from barrel exports. Step 2 — Quick wins: a) Replace heavy libraries: moment.js -> date-fns or dayjs (70KB -> 2KB). lodash -> lodash-es with tree shaking or individual imports. b) Remove duplicate deps: npm dedupe, check package-lock. c) Use dynamic import() for routes and heavy features (charts, editors, PDF viewers). Step 3 — Code splitting: Split by route (each page loads only its code). Split vendor chunks separately (they change less, cache better). Step 4 — Tree shaking: Ensure all deps use ES modules. Avoid side-effect barrel files. Add "sideEffects": false to package.json. Step 5 — Compression: Brotli pre-compression at build time (30% smaller than gzip). Target: < 200KB compressed for initial load.',
    tags: ['bundle-size', 'code-splitting', 'tree-shaking', 'webpack', 'optimization'],
    year: 2025,
  },
  {
    id: 'fp-030',
    topic: 'performance',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'Implement skeleton loading screens in HTML/CSS that match a card layout with an image, title, and two lines of text.',
    answer: `<!-- Skeleton card -->
<div class="skeleton-card">
  <div class="skeleton skeleton-image"></div>
  <div class="skeleton skeleton-title"></div>
  <div class="skeleton skeleton-text"></div>
  <div class="skeleton skeleton-text skeleton-text--short"></div>
</div>

<style>
.skeleton-card {
  padding: 16px;
  border-radius: 8px;
  background: var(--surface, #fff);
}

.skeleton {
  background: linear-gradient(
    90deg,
    #e0e0e0 25%,
    #f0f0f0 50%,
    #e0e0e0 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s ease-in-out infinite;
  border-radius: 4px;
}

.skeleton-image {
  width: 100%;
  aspect-ratio: 16 / 9;
  margin-bottom: 12px;
}

.skeleton-title {
  height: 24px;
  width: 70%;
  margin-bottom: 12px;
}

.skeleton-text {
  height: 16px;
  width: 100%;
  margin-bottom: 8px;
}

.skeleton-text--short {
  width: 60%;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* Respect reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .skeleton {
    animation: none;
    background: #e0e0e0;
  }
}
</style>`,
    explanation:
      'Skeleton screens outperform spinners for perceived performance because they show the shape of upcoming content, setting user expectations. Key principles: 1) Match the actual content layout — same widths, heights, and spacing as the real card. 2) Use a shimmer animation (moving gradient) to indicate loading. 3) Respect prefers-reduced-motion by disabling animation for users who prefer it. 4) Use aspect-ratio for the image placeholder to maintain proportions. 5) Vary text line widths (100%, 60%) to mimic natural text. 6) Keep the skeleton component as a separate, lightweight HTML structure — dont wrap the real component with loading states that increase DOM size.',
    tags: ['skeleton', 'loading-states', 'ux', 'animation', 'perceived-performance'],
    year: 2025,
  },
  {
    id: 'fp-031',
    topic: 'performance',
    difficulty: 'senior',
    type: 'system-design',
    question:
      'CLS score is 0.3 (bad — threshold is 0.1). Users see content jumping around as the page loads. How do you identify the causes and fix them?',
    answer:
      'Use Layout Shift debugger, identify elements causing shifts (images, ads, fonts, dynamic content), and reserve space for each.',
    explanation:
      'Diagnosis: 1) Chrome DevTools Performance tab — enable "Layout Shift Regions" to visualize shifts in blue. 2) Web Vitals extension shows CLS in real-time. 3) PerformanceObserver with type "layout-shift" logs each shift with the elements that moved. Common causes and fixes: a) Images without dimensions: Add width + height attributes or use aspect-ratio CSS. b) Ads/embeds: Reserve a fixed container size with min-height before the ad loads. c) Web fonts: Use font-display: swap with size-adjust and ascent-override to match fallback font metrics, or use @font-face descriptors to minimize reflow. d) Dynamic content injection: Never insert content above existing visible content. If you must (banners, notifications), use transform animations instead of layout-triggering properties. e) Late-loaded CSS: Inline critical CSS. f) Client-side rendering: Use SSR to send final HTML. Test: Run Lighthouse on slow throttling — CLS is often worse on slow connections.',
    references: [
      'https://web.dev/articles/cls',
    ],
    tags: ['cls', 'layout-shift', 'core-web-vitals', 'fonts', 'images'],
    year: 2025,
  },
  {
    id: 'fp-032',
    topic: 'performance',
    difficulty: 'junior',
    type: 'mcq',
    question:
      'You have a page with a large data table (10,000 rows). Rendering all rows causes the page to freeze for 3 seconds on load. What is the best approach?',
    options: [
      'Use display: none on rows below the fold and show them on scroll',
      'Implement virtual scrolling (windowing) to render only visible rows',
      'Add pagination but load all data upfront in memory',
      'Use setTimeout to render rows in batches of 100',
    ],
    answer: 1,
    explanation:
      'Virtual scrolling (windowing) renders only the rows visible in the viewport (plus a small buffer). As the user scrolls, rows are recycled — elements leaving the viewport are removed, and new ones are added at the scroll edge. This keeps DOM node count low (~50 nodes instead of 10,000). Libraries: TanStack Virtual, react-window, react-virtuoso. Implementation: a fixed-height container with overflow: auto, rows absolutely positioned based on scroll offset, and a spacer element to maintain correct scrollbar size. Option A still creates 10,000 DOM nodes. Option C loads all data but doesnt solve the rendering bottleneck. Option D (batching) is better than synchronous but still creates 10,000 nodes eventually.',
    tags: ['virtualization', 'windowing', 'large-lists', 'dom-performance'],
    year: 2025,
  },
  {
    id: 'fp-033',
    topic: 'performance',
    difficulty: 'lead',
    type: 'system-design',
    question:
      'You are tasked with setting up a performance monitoring and budgeting system for a team of 12 developers. How do you prevent performance regressions in CI/CD?',
    answer:
      'Implement performance budgets in CI, real-user monitoring (RUM) in production, automated Lighthouse in PR checks, and bundle size tracking.',
    explanation:
      'Comprehensive system: 1) Performance budgets: Define thresholds in a config file — JS bundle < 200KB, CSS < 50KB, LCP < 2.5s, CLS < 0.1, INP < 200ms. 2) CI checks: Run Lighthouse CI (lhci) on every PR against a staging deployment. Fail the PR if any budget is exceeded. Use bundlesize or size-limit to check bundle sizes in CI — shows diff in PR comments. 3) RUM (Real User Monitoring): Deploy web-vitals library to capture CWV from real users. Send to analytics (SpeedCurve, Datadog, or custom endpoint). Dashboard showing p75 vitals by page and device type. 4) Alerts: Set up alerts when p75 CWV exceeds thresholds. 5) PR workflow: Automated comment on PRs showing bundle size delta and Lighthouse score delta. 6) Developer education: Monthly performance review of key pages, shared dashboard on team TV, document optimization patterns in team playbook. 7) Synthetic monitoring: Scheduled Lighthouse runs from multiple locations (SpeedCurve, WebPageTest). This catches regressions from data/content changes, not just code.',
    tags: ['performance-budget', 'monitoring', 'ci-cd', 'lighthouse-ci', 'rum'],
    year: 2025,
  },
  {
    id: 'fp-034',
    topic: 'performance',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'Your page has expensive scroll event handlers causing jank (dropped frames). The handler recalculates element positions on every scroll event. Optimize it.',
    code: `// Current: jank-causing scroll handler
window.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.animate-on-scroll');
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      el.style.transform = \`translateY(\${window.scrollY * 0.5}px)\`;
      el.classList.add('visible');
    }
  });
});`,
    answer: `// Optimized: use IntersectionObserver + requestAnimationFrame
// 1. Visibility detection with IntersectionObserver (no scroll listener needed)
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // stop watching once visible
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.animate-on-scroll').forEach((el) => {
  observer.observe(el);
});

// 2. Parallax effect with rAF throttling
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      updateParallax();
      ticking = false;
    });
    ticking = true;
  }
}, { passive: true });

function updateParallax() {
  // Cache querySelectorAll result outside the handler
  parallaxElements.forEach((el) => {
    // Use transform (compositor-friendly, no layout trigger)
    const offset = el.dataset.offset || 0.5;
    el.style.transform = \`translateY(\${window.scrollY * offset}px)\`;
  });
}

const parallaxElements = document.querySelectorAll('.parallax');`,
    explanation:
      'Three optimizations: 1) Replace scroll-based visibility checks with IntersectionObserver — it runs off the main thread and fires only when elements enter/leave the viewport. 2) Throttle remaining scroll work with requestAnimationFrame (rAF) — ensures the handler runs at most once per frame (60fps). The ticking flag prevents queueing multiple rAF callbacks. 3) Add { passive: true } to the scroll listener — tells the browser the handler wont call preventDefault(), enabling scroll optimizations. Additional: cache DOM queries outside handlers (querySelectorAll is expensive), use transform instead of top/left (triggers only compositing, not layout), and avoid getBoundingClientRect in scroll handlers (forces synchronous layout).',
    tags: ['scroll', 'raf', 'intersection-observer', 'passive-events', 'jank'],
    year: 2025,
  },
  {
    id: 'fp-035',
    topic: 'performance',
    difficulty: 'junior',
    type: 'mcq',
    question:
      'Your font files are 800KB total and text is invisible for 2 seconds while fonts load (FOIT). What is the fastest way to show text immediately?',
    options: [
      'Inline the entire font as base64 in your CSS file',
      'Use font-display: swap and preload the critical font file',
      'Convert all fonts to SVG format for smaller size',
      'Load fonts with JavaScript using the FontFace API after page load',
    ],
    answer: 1,
    explanation:
      'font-display: swap shows text immediately in a fallback system font, then swaps to the custom font once it loads. No invisible text. Preloading (<link rel="preload" href="font.woff2" as="font" crossorigin>) starts the download early, reducing swap time. Additional optimizations: a) Use woff2 format only (best compression, universal support). b) Subset fonts to include only needed characters (latin subset can cut 80% of CJK fonts). c) Self-host instead of Google Fonts (eliminate extra DNS lookup). d) Use size-adjust, ascent-override, descent-override on @font-face to match fallback font metrics — minimizes layout shift during swap. e) Limit to 2-3 font files max. Option A bloats CSS and blocks rendering. Option D causes even longer invisible text. Option C is obsolete.',
    references: [
      'https://web.dev/articles/font-best-practices',
    ],
    tags: ['fonts', 'foit', 'font-display', 'preload', 'web-fonts'],
    year: 2025,
  },

  // ── ACCESSIBILITY (5 questions) ────────────────────────────────────
  {
    id: 'fp-036',
    topic: 'accessibility',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'QA reports that a screen reader cannot navigate your data table — it reads cells out of order and column headers are not associated with data cells. Fix this table.',
    code: `<!-- Broken: uses divs for a table layout -->
<div class="table">
  <div class="row header">
    <div class="cell">Name</div>
    <div class="cell">Email</div>
    <div class="cell">Role</div>
  </div>
  <div class="row">
    <div class="cell">Alice</div>
    <div class="cell">alice@co.com</div>
    <div class="cell">Admin</div>
  </div>
</div>`,
    answer: `<!-- Fixed: semantic table with proper headers -->
<table>
  <caption>Team Members</caption>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice</td>
      <td>alice@co.com</td>
      <td>Admin</td>
    </tr>
  </tbody>
</table>

<!-- If you MUST use divs (e.g., virtual scrolling), add ARIA roles -->
<div role="table" aria-label="Team Members">
  <div role="rowgroup">
    <div role="row">
      <div role="columnheader">Name</div>
      <div role="columnheader">Email</div>
      <div role="columnheader">Role</div>
    </div>
  </div>
  <div role="rowgroup">
    <div role="row">
      <div role="cell">Alice</div>
      <div role="cell">alice@co.com</div>
      <div role="cell">Admin</div>
    </div>
  </div>
</div>`,
    explanation:
      'Screen readers use table semantics to let users navigate by row and column (Ctrl+Alt+Arrow keys in NVDA/JAWS). Without <table>, <th>, and <td>, the reader sees a flat list of divs. Key elements: 1) <caption> gives the table an accessible name. 2) <th scope="col"> associates each header with its column — screen readers announce "Name: Alice" when navigating down. 3) <thead>/<tbody> provide grouping semantics. 4) For row headers, use <th scope="row">. If you must use divs (for virtual scrolling libraries), replicate the full ARIA table model with role="table", role="row", role="columnheader", and role="cell". But native HTML tables are always preferred.',
    references: [
      'https://www.w3.org/WAI/tutorials/tables/',
    ],
    tags: ['table', 'screen-reader', 'semantic-html', 'aria-roles'],
    year: 2025,
  },
  {
    id: 'fp-037',
    topic: 'accessibility',
    difficulty: 'senior',
    type: 'code-write',
    question:
      'Implement a keyboard-navigable dropdown menu with proper ARIA attributes. Users should be able to open it with Enter/Space, navigate with arrow keys, and close with Escape.',
    answer: `<div class="dropdown">
  <button
    id="menu-button"
    aria-haspopup="true"
    aria-expanded="false"
    aria-controls="menu-list"
  >
    Options ▾
  </button>
  <ul
    id="menu-list"
    role="menu"
    aria-labelledby="menu-button"
    hidden
  >
    <li role="menuitem" tabindex="-1">Edit</li>
    <li role="menuitem" tabindex="-1">Duplicate</li>
    <li role="menuitem" tabindex="-1">Delete</li>
  </ul>
</div>

<script>
const button = document.getElementById('menu-button');
const menu = document.getElementById('menu-list');
const items = menu.querySelectorAll('[role="menuitem"]');
let currentIndex = -1;

function openMenu() {
  menu.hidden = false;
  button.setAttribute('aria-expanded', 'true');
  currentIndex = 0;
  items[currentIndex].focus();
}

function closeMenu() {
  menu.hidden = true;
  button.setAttribute('aria-expanded', 'false');
  currentIndex = -1;
  button.focus(); // return focus to trigger
}

button.addEventListener('click', () => {
  menu.hidden ? openMenu() : closeMenu();
});

button.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    openMenu();
  }
});

menu.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowDown':
      e.preventDefault();
      currentIndex = (currentIndex + 1) % items.length;
      items[currentIndex].focus();
      break;
    case 'ArrowUp':
      e.preventDefault();
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      items[currentIndex].focus();
      break;
    case 'Escape':
      closeMenu();
      break;
    case 'Enter':
    case ' ':
      e.preventDefault();
      items[currentIndex].click();
      closeMenu();
      break;
    case 'Tab':
      closeMenu();
      break;
  }
});

// Close on click outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.dropdown')) closeMenu();
});
</script>`,
    explanation:
      'This follows the WAI-ARIA Menu Button design pattern. Key accessibility features: 1) aria-haspopup="true" announces that the button opens a menu. 2) aria-expanded reflects open/closed state. 3) aria-controls links button to menu. 4) role="menu" and role="menuitem" give proper semantics. 5) Arrow keys navigate between items (with wrapping). 6) Escape closes and returns focus to the trigger button — critical for keyboard users who need to "get out." 7) Enter/Space activates the focused item. 8) Tab closes the menu (expected behavior). 9) Items have tabindex="-1" so they are focusable programmatically but not in the tab order. 10) Click outside closes the menu. Test with NVDA or VoiceOver to verify announcements.',
    references: [
      'https://www.w3.org/WAI/ARIA/apd/patterns/menu-button/',
    ],
    tags: ['dropdown', 'keyboard-navigation', 'aria', 'menu-pattern'],
    year: 2025,
  },
  {
    id: 'fp-038',
    topic: 'accessibility',
    difficulty: 'mid',
    type: 'system-design',
    question:
      'Your design uses brand colors that fail WCAG AA contrast ratios. The designer insists on keeping the exact brand colors. How do you satisfy both accessibility and design requirements?',
    answer:
      'Use the brand colors for large elements/decorative purposes and ensure text meets contrast requirements by adjusting background, adding borders, or using the brand color selectively.',
    explanation:
      'Strategies that preserve the brand while meeting WCAG AA (4.5:1 for normal text, 3:1 for large text): 1) Darken or lighten the brand color slightly just for text use — often a 10-15% adjustment is enough and visually imperceptible. 2) Use the exact brand color for large text (24px+/bold 18.66px+) which only needs 3:1 ratio. 3) Use the brand color on darker/lighter backgrounds that increase contrast. 4) Reserve the exact brand color for decorative elements, icons, and borders — not body text. 5) Add a subtle text shadow or outline to increase perceived contrast. 6) Create an "accessible palette" that maps each brand color to its closest WCAG-compliant variant. Tools: APCA contrast calculator (the perceptual successor to WCAG 2 contrast), Chrome DevTools color picker shows contrast ratios in real-time. Present the designer with side-by-side comparisons — they often cannot distinguish the adjusted shade.',
    tags: ['contrast', 'wcag', 'brand-colors', 'design-collaboration'],
    year: 2025,
  },
  {
    id: 'fp-039',
    topic: 'accessibility',
    difficulty: 'senior',
    type: 'code-write',
    question:
      'Your SPA uses client-side routing. Screen reader users are not informed when the page changes — after clicking a nav link, focus stays on the link and the new content is not announced. Fix this.',
    answer: `// Route change handler (works with any SPA router)
function onRouteChange(newPageTitle) {
  // 1. Update the document title
  document.title = newPageTitle + ' | MySite';

  // 2. Move focus to the main content area
  const main = document.getElementById('main-content');
  main.setAttribute('tabindex', '-1'); // make focusable
  main.focus();

  // 3. Announce the page change via live region
  const announcer = document.getElementById('route-announcer');
  announcer.textContent = ''; // reset to trigger re-announcement
  requestAnimationFrame(() => {
    announcer.textContent = \`Navigated to \${newPageTitle}\`;
  });
}

// Add this invisible live region to your HTML (once)
// <div id="route-announcer"
//   role="status"
//   aria-live="polite"
//   aria-atomic="true"
//   style="position: absolute; width: 1px; height: 1px;
//          overflow: hidden; clip: rect(0,0,0,0);
//          white-space: nowrap;">
// </div>

// React Router example:
// useEffect(() => {
//   onRouteChange(currentRoute.title);
// }, [location.pathname]);`,
    explanation:
      'SPAs break the traditional page navigation model that screen readers rely on. In a multi-page site, a new page load triggers the screen reader to announce the new page title and move focus to the top. In an SPA, the DOM mutates silently. Three fixes needed: 1) Update document.title — screen readers often announce this. 2) Move focus to the main content region so the user can immediately start reading the new content. tabindex="-1" makes non-interactive elements focusable. 3) Use an aria-live="polite" region to explicitly announce the navigation — this is the most reliable method across all screen reader + browser combos. The double-set trick (clear then set in rAF) ensures the screen reader detects the change even if navigating to a page with the same title.',
    references: [
      'https://www.gatsbyjs.com/blog/2019-07-11-user-testing-accessible-client-routing/',
    ],
    tags: ['spa-routing', 'screen-reader', 'focus-management', 'aria-live'],
    year: 2025,
  },
  {
    id: 'fp-040',
    topic: 'accessibility',
    difficulty: 'lead',
    type: 'system-design',
    question:
      'Your company receives a legal complaint about accessibility. You are tasked with creating an accessibility remediation plan for a large app with hundreds of pages. How do you approach this?',
    answer:
      'Audit, prioritize by user impact and legal risk, fix critical issues first, implement automated testing to prevent regressions, and train the team.',
    explanation:
      'Phase 1 (Week 1-2) — Audit: a) Run automated scan with axe-core/WAVE across all pages to identify machine-detectable issues (30-40% of problems). b) Conduct manual testing with screen reader (NVDA/VoiceOver) on the top 20 most-used pages. c) Test keyboard-only navigation on critical user flows (signup, checkout, main content). d) Hire a third-party WCAG auditor for a formal assessment. Phase 2 (Week 3) — Prioritize: Categorize issues by severity: P0 (blocks users entirely — missing form labels, keyboard traps), P1 (major friction — no alt text, poor heading structure, missing ARIA), P2 (minor — color contrast, focus order). Fix P0 on critical flows first. Phase 3 (Week 4-8) — Remediate: Assign issues to sprint backlog. Fix shared components first (header, nav, forms) for maximum impact. Phase 4 (Ongoing) — Prevent regressions: Add axe-core to CI/CD pipeline (eslint-plugin-jsx-a11y for React, @axe-core/playwright for E2E). Add screen reader testing to QA checklist. Phase 5 — Train: Mandatory accessibility training for all developers and designers. Publish an accessibility page with conformance statement.',
    tags: ['remediation', 'wcag-audit', 'legal', 'testing', 'team-process'],
    year: 2025,
  },

  // ── HTML (5 questions) ─────────────────────────────────────────────
  {
    id: 'fp-041',
    topic: 'html',
    difficulty: 'junior',
    type: 'debug',
    question:
      'A form submission sends empty values even though the user filled in all fields. What is the most likely HTML issue?',
    code: `<form action="/submit" method="POST">
  <label>Username</label>
  <input type="text" placeholder="Username" />

  <label>Email</label>
  <input type="email" placeholder="Email" />

  <button type="submit">Register</button>
</form>`,
    options: [
      'The method should be GET instead of POST',
      'The input elements are missing the name attribute',
      'The labels are not connected to the inputs with for/id',
      'The form needs an enctype attribute',
    ],
    answer: 1,
    explanation:
      'HTML form data is sent as key-value pairs where the key is the name attribute. Without name attributes, the inputs have no key and their values are excluded from the form submission. Fix: add name="username" and name="email" to the inputs. Option C (missing label association) is also a real issue (accessibility) but doesnt cause empty submissions. While youre fixing this, also add: id on inputs + for on labels (accessibility), required attribute (validation), and autocomplete attributes (browser autofill). A common interview trap: developers used to React state management sometimes forget that native HTML forms rely entirely on the name attribute.',
    tags: ['forms', 'name-attribute', 'debugging', 'html-basics'],
    year: 2025,
  },
  {
    id: 'fp-042',
    topic: 'html',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'Build a responsive HTML email template that works in Outlook, Gmail, and Apple Mail. The email has a header image, two-column content area, and a CTA button.',
    answer: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Newsletter</title>
  <!--[if mso]>
  <style>
    table { border-collapse: collapse; }
    .fallback-font { font-family: Arial, sans-serif; }
  </style>
  <![endif]-->
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f4; font-family: Arial, Helvetica, sans-serif;">
  <!-- Outer wrapper table for centering -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td align="center" style="padding: 20px 10px;">
        <!-- Inner container -->
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0"
               style="max-width: 600px; width: 100%; background-color: #ffffff;">
          <!-- Header Image -->
          <tr>
            <td style="padding: 0;">
              <img src="https://example.com/header.jpg" alt="Newsletter header"
                   width="600" style="display: block; max-width: 100%; height: auto;" />
            </td>
          </tr>
          <!-- Two-column content -->
          <tr>
            <td style="padding: 20px;">
              <!--[if mso]><table role="presentation" width="100%"><tr><td width="280" valign="top"><![endif]-->
              <div style="display: inline-block; width: 100%; max-width: 280px; vertical-align: top;">
                <h2 style="margin: 0 0 10px; font-size: 20px; color: #333;">Feature One</h2>
                <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #666;">
                  Description of the first feature.
                </p>
              </div>
              <!--[if mso]></td><td width="20"></td><td width="280" valign="top"><![endif]-->
              <div style="display: inline-block; width: 100%; max-width: 280px; vertical-align: top;">
                <h2 style="margin: 0 0 10px; font-size: 20px; color: #333;">Feature Two</h2>
                <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #666;">
                  Description of the second feature.
                </p>
              </div>
              <!--[if mso]></td></tr></table><![endif]-->
            </td>
          </tr>
          <!-- CTA Button -->
          <tr>
            <td align="center" style="padding: 20px;">
              <a href="https://example.com" target="_blank"
                 style="display: inline-block; padding: 14px 32px; background-color: #2563eb;
                        color: #ffffff; text-decoration: none; font-size: 16px; font-weight: bold;
                        border-radius: 4px;">
                Get Started
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
    explanation:
      'HTML email is stuck in the past — table-based layout is required because Outlook uses Word as its rendering engine. Key rules: 1) Use tables with role="presentation" for layout (not data tables). 2) Inline all CSS — most email clients strip <style> tags (Gmail strips them in some contexts). 3) Use MSO conditional comments (<!--[if mso]>) for Outlook-specific table structure since Outlook ignores max-width, inline-block, and many modern CSS properties. 4) Images need display: block to prevent phantom spacing. Set width in HTML attribute AND max-width: 100% in CSS for responsive scaling. 5) Always include a text color — dark mode in email clients can change backgrounds. 6) Test with Litmus or Email on Acid across clients. 7) Max width 600px is the safe standard for email.',
    tags: ['html-email', 'outlook', 'responsive-email', 'tables'],
    year: 2025,
  },
  {
    id: 'fp-043',
    topic: 'html',
    difficulty: 'mid',
    type: 'mcq',
    question:
      'Your page loads noticeably slower in Safari than Chrome. You discover the issue is related to how resources are loaded. Which combination of resource hints gives the best cross-browser performance for a page that loads fonts from Google Fonts and data from your API?',
    options: [
      '<link rel="preload"> for everything — fonts, CSS, API responses',
      '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> for font CDN, <link rel="dns-prefetch" href="https://api.example.com"> as fallback, and <link rel="preload"> only for critical CSS',
      '<link rel="prefetch"> for all fonts and API endpoints',
      '<link rel="dns-prefetch"> for all external domains with no other hints',
    ],
    answer: 1,
    explanation:
      'The correct combination uses the right hint for each resource type: 1) preconnect for the font CDN — establishes the TCP connection + TLS handshake early (saves 100-300ms). Use crossorigin attribute for font files (CORS requirement). 2) dns-prefetch as a fallback for browsers that dont support preconnect (older Safari versions). Put dns-prefetch AFTER preconnect — browser uses the best one it supports. 3) preload for critical CSS that must block rendering (most impactful use). Dont preload everything — it competes for bandwidth and can hurt performance. prefetch (option C) is for next-page resources, not current-page. DNS-prefetch alone (option D) only saves the DNS lookup (~20-120ms), missing the bigger connection setup savings.',
    references: [
      'https://web.dev/articles/preconnect-and-dns-prefetch',
    ],
    tags: ['resource-hints', 'preconnect', 'preload', 'dns-prefetch', 'safari'],
    year: 2025,
  },
  {
    id: 'fp-044',
    topic: 'html',
    difficulty: 'junior',
    type: 'code-write',
    question:
      'Your page has an auto-playing video hero section. Users complain it wastes data on mobile, and the video doesnt play on iOS Safari. Fix the HTML to handle this properly.',
    answer: `<!-- Responsive video with proper fallback -->
<video
  autoplay
  muted
  loop
  playsinline
  preload="metadata"
  poster="hero-poster.jpg"
  class="hero-video"
>
  <!-- Serve smaller file on mobile via media attribute -->
  <source
    src="hero-mobile.mp4"
    type="video/mp4"
    media="(max-width: 768px)"
  />
  <source src="hero-desktop.webm" type="video/webm" />
  <source src="hero-desktop.mp4" type="video/mp4" />
  <!-- Fallback for no video support -->
  <img src="hero-poster.jpg" alt="Hero banner" />
</video>

<script>
// Respect data-saver and slow connections
if (
  navigator.connection &&
  (navigator.connection.saveData ||
   navigator.connection.effectiveType === '2g' ||
   navigator.connection.effectiveType === 'slow-2g')
) {
  const video = document.querySelector('.hero-video');
  video.removeAttribute('autoplay');
  video.preload = 'none';
  // Show the poster image instead
}
</script>`,
    explanation:
      'Key attributes: 1) muted is REQUIRED for autoplay to work — all browsers block autoplay with audio. 2) playsinline prevents iOS Safari from forcing fullscreen playback. Without it, iOS ignores autoplay entirely. 3) poster provides an immediate visual while the video buffers. 4) preload="metadata" loads only enough to get duration/dimensions, not the whole file. 5) Multiple <source> elements with type provide format negotiation — browser picks the first it supports. WebM is often smaller than MP4. 6) The media attribute on <source> serves a smaller mobile version. 7) JavaScript checks Network Information API to disable autoplay on slow connections or data-saver mode. 8) <img> fallback inside <video> for ancient browsers. Always consider: autoplay video is 3-10MB of bandwidth — use it judiciously.',
    tags: ['video', 'autoplay', 'ios', 'responsive-media', 'data-saving'],
    year: 2025,
  },
  {
    id: 'fp-045',
    topic: 'html',
    difficulty: 'senior',
    type: 'system-design',
    question:
      'Your site gets a poor SEO audit despite good content. The report says weak semantic structure, missing metadata, and poor crawlability. How do you fix the HTML foundation for SEO?',
    answer:
      'Implement proper semantic HTML landmarks, structured data (JSON-LD), comprehensive meta tags, canonical URLs, and a clean URL/heading hierarchy.',
    explanation:
      'Comprehensive HTML SEO fixes: 1) Semantic structure: Use exactly one <h1> per page, logical h2-h6 hierarchy, <main>, <nav>, <article>, <section>, <aside> landmarks. Search engines use these to understand content structure. 2) Meta tags: Unique <title> (50-60 chars) and <meta name="description"> (150-160 chars) per page. Add <meta name="robots" content="index, follow">. 3) Structured data: Add JSON-LD schema markup (Organization, Article, Product, BreadcrumbList, FAQ) — enables rich snippets in search results. 4) Canonical URLs: <link rel="canonical"> on every page to prevent duplicate content issues. 5) Open Graph + Twitter Card meta tags for social sharing. 6) Clean heading hierarchy — dont skip levels (h1 -> h3 is bad). 7) Image alt text on every image. 8) Internal linking with descriptive anchor text (not "click here"). 9) XML sitemap + robots.txt. 10) For SPAs: implement SSR/SSG so crawlers see rendered HTML, not an empty <div id="root">. Validate with Google Search Console and Rich Results Test.',
    references: [
      'https://developers.google.com/search/docs/fundamentals/seo-starter-guide',
    ],
    tags: ['seo', 'semantic-html', 'structured-data', 'meta-tags', 'json-ld'],
    year: 2025,
  },
]
