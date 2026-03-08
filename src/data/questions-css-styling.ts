import type { Question } from '../types'

export const cssStylingQuestions: Question[] = [
  {
    id: 'cs-001',
    topic: 'css-styling',
    difficulty: 'junior',
    type: 'mcq',
    question: 'Which CSS flexbox property controls how flex items are aligned along the cross axis?',
    options: [
      'justify-content',
      'align-items',
      'flex-direction',
      'align-self',
    ],
    answer: 1,
    explanation: 'align-items aligns all flex children on the cross axis (perpendicular to the main axis). justify-content aligns items on the main axis. align-self overrides align-items for a single item.',
    tags: ['flexbox', 'alignment', 'css'],
    year: 2025,
  },
  {
    id: 'cs-002',
    topic: 'css-styling',
    difficulty: 'junior',
    type: 'code-output',
    question: 'What is the computed layout of the grid items?',
    code: `.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 100px;
  gap: 10px;
}

/* 6 child divs */`,
    answer: 'A 3-column, 2-row grid where each cell is equal width (1/3 of container minus gaps) and 100px tall, with 10px gaps between all cells.',
    explanation: 'repeat(3, 1fr) creates three equal-width columns (fr = fraction of available space). grid-template-rows sets two 100px rows. With 6 children, the grid fills completely: 3 per row × 2 rows. The gap property adds 10px gutters between both rows and columns.',
    tags: ['css-grid', 'layout', 'fr-unit'],
    year: 2025,
  },
  {
    id: 'cs-003',
    topic: 'css-styling',
    difficulty: 'junior',
    type: 'true-false',
    question: 'CSS custom properties (variables) can be dynamically updated with JavaScript using element.style.setProperty().',
    answer: true,
    explanation: 'CSS variables defined with --variable-name can be read and written via JS: element.style.setProperty("--color", "red") or document.documentElement.style.setProperty("--primary", "#ff0000") for global variables. This enables powerful runtime theming without class toggling.',
    tags: ['css-variables', 'custom-properties', 'javascript'],
    year: 2025,
  },
  {
    id: 'cs-004',
    topic: 'css-styling',
    difficulty: 'junior',
    type: 'mcq',
    question: 'In TailwindCSS, what does the "JIT" (Just-in-Time) mode do?',
    options: [
      'Generates CSS at runtime in the browser',
      'Generates only the utility classes actually used in source files, enabling arbitrary values and faster builds',
      'Runs Tailwind as a JavaScript runtime library',
      'Enables hot module replacement for CSS changes',
    ],
    answer: 1,
    explanation: 'JIT (now the default in Tailwind v3+) scans source files and generates only the classes you use, instead of shipping a massive CSS file. It also enables arbitrary values like w-[347px] and bg-[#1da1f2], and generates classes on-demand during development for instant HMR.',
    tags: ['tailwindcss', 'jit', 'build'],
    year: 2025,
  },
  {
    id: 'cs-005',
    topic: 'css-styling',
    difficulty: 'junior',
    type: 'mcq',
    question: 'How do you apply a Tailwind class only on medium screens and above?',
    options: [
      'md-text-lg',
      'text-lg:md',
      'md:text-lg',
      '@md:text-lg',
    ],
    answer: 2,
    explanation: 'Tailwind uses a mobile-first responsive prefix: md:text-lg applies text-lg at the md breakpoint (768px) and wider. Breakpoint prefixes are: sm:, md:, lg:, xl:, 2xl:. Tailwind v4 also adds container queries via @sm:, @md: etc.',
    tags: ['tailwindcss', 'responsive', 'breakpoints'],
    year: 2025,
  },
  {
    id: 'cs-006',
    topic: 'css-styling',
    difficulty: 'mid',
    type: 'code-output',
    question: 'What does this CSS animation do?',
    code: `@keyframes slideIn {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.panel {
  animation: slideIn 0.3s ease-out forwards;
}`,
    answer: 'The panel slides in from the left (starting 100% off-screen) and fades in from opacity 0 to 1 over 0.3 seconds with an ease-out curve. The "forwards" fill-mode keeps it in the final state after the animation completes.',
    explanation: 'translateX(-100%) starts the element off-screen to the left. ease-out decelerates toward the end for a natural feel. forwards fill-mode is critical — without it the element would snap back to its pre-animation state (translateX(-100%), opacity: 0) after 0.3s.',
    tags: ['css-animations', 'keyframes', 'transform'],
    year: 2025,
  },
  {
    id: 'cs-007',
    topic: 'css-styling',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is the key difference between CSS Grid\'s auto-fill and auto-fit in repeat()?',
    options: [
      'auto-fill creates empty tracks to fill the container; auto-fit collapses empty tracks and stretches existing items to fill available space',
      'auto-fit creates more columns than auto-fill',
      'auto-fill is for rows; auto-fit is for columns',
      'They are identical in behavior',
    ],
    answer: 0,
    explanation: 'With repeat(auto-fill, minmax(200px, 1fr)): auto-fill creates as many tracks as fit (including empty ghost tracks). auto-fit does the same but collapses empty tracks, allowing filled items to stretch to fill the row. auto-fit is usually preferred for responsive card layouts without fixed column counts.',
    tags: ['css-grid', 'auto-fill', 'auto-fit', 'responsive'],
    year: 2025,
  },
  {
    id: 'cs-008',
    topic: 'css-styling',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What are CSS Container Queries and how do they differ from Media Queries?',
    options: [
      'Container queries respond to viewport size; media queries respond to component size',
      'Container queries allow styling elements based on their parent container\'s size, not the viewport size — enabling truly reusable responsive components regardless of where they are placed',
      'Container queries only work with CSS Grid',
      'Container queries are a JavaScript API, not pure CSS',
    ],
    answer: 1,
    explanation: 'Container queries (@container) let you style a component based on its containing element\'s dimensions. This solves the "same component in sidebar (narrow) and main content (wide)" problem. Declare containment with container-type: inline-size then query with @container (min-width: 400px) { ... }.',
    tags: ['container-queries', 'responsive', 'css'],
    year: 2025,
  },
  {
    id: 'cs-009',
    topic: 'css-styling',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is the main tradeoff between CSS Modules and CSS-in-JS libraries (like styled-components)?',
    options: [
      'CSS Modules are faster at runtime; CSS-in-JS is better for static sites',
      'CSS Modules generate scoped class names at build time with zero runtime cost; CSS-in-JS generates styles dynamically at runtime (with libraries like styled-components) adding JS bundle weight and runtime overhead, but enabling dynamic styling based on props',
      'CSS-in-JS is only for TypeScript projects',
      'CSS Modules require PostCSS; CSS-in-JS does not',
    ],
    answer: 1,
    explanation: 'CSS Modules: zero runtime, extracted to static .css at build time, works with any CSS preprocessor, excellent performance. CSS-in-JS (runtime): dynamic props-based styling, co-located styles, but adds ~30KB+ runtime library and style injection overhead. Zero-runtime CSS-in-JS (Linaria, vanilla-extract) bridges both worlds.',
    tags: ['css-modules', 'css-in-js', 'performance', 'tradeoffs'],
    year: 2025,
  },
  {
    id: 'cs-010',
    topic: 'css-styling',
    difficulty: 'mid',
    type: 'debug',
    question: 'This flexbox layout isn\'t centering vertically. What\'s wrong?',
    code: `.container {
  display: flex;
  justify-content: center;
  /* Missing something to center vertically */
  width: 100%;
  height: 400px;
}

.child {
  width: 100px;
  height: 100px;
}`,
    answer: 'Missing align-items: center on the container.',
    explanation: 'justify-content: center centers items on the main axis (horizontal in row direction). To center on the cross axis (vertical), you need align-items: center. Without it, align-items defaults to stretch, placing items at the top of the container.',
    tags: ['flexbox', 'centering', 'debug'],
    year: 2025,
  },
  {
    id: 'cs-011',
    topic: 'css-styling',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What does the CSS :has() selector enable that was previously impossible in pure CSS?',
    options: [
      'Selecting child elements by their type',
      'Parent selection — styling a parent element based on its children\'s state or content (e.g., styling a form when it contains an invalid input)',
      'Selecting elements by attribute values',
      'Chaining multiple pseudo-classes together',
    ],
    answer: 1,
    explanation: ':has() is the "parent selector" CSS developers waited for. Examples: form:has(input:invalid) { border: red } — style a form with invalid inputs. li:has(> a:hover) { background: gray } — style list items whose direct link children are hovered. Widely supported in all modern browsers since 2023.',
    tags: [':has', 'css-selectors', 'parent-selector'],
    year: 2025,
  },
  {
    id: 'cs-012',
    topic: 'css-styling',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is the CSS nesting specification and how does it differ from Sass/LESS nesting?',
    options: [
      'CSS nesting is identical to Sass nesting in syntax and behavior',
      'Native CSS nesting (now in all modern browsers) allows nesting selectors inside others without a preprocessor. Unlike Sass, the nested selector must start with & or a valid CSS selector. The & represents the parent selector.',
      'CSS nesting only works inside @layer rules',
      'Native CSS nesting requires PostCSS to compile',
    ],
    answer: 1,
    explanation: 'Native CSS nesting is supported in Chrome 112+, Firefox 117+, Safari 16.5+. Syntax: .card { color: black; & .title { font-size: 2rem } &:hover { opacity: 0.8 } }. The & is required when nesting non-pseudo-class selectors. PostCSS nesting plugin can polyfill for older browsers.',
    tags: ['css-nesting', 'native-css', 'sass'],
    year: 2025,
  },
  {
    id: 'cs-013',
    topic: 'css-styling',
    difficulty: 'senior',
    type: 'code-output',
    question: 'What does this CSS custom property code output for the button color?',
    code: `:root {
  --brand: #007bff;
  --btn-color: var(--brand, #333);
}

.theme-dark {
  --brand: #66b2ff;
}

.btn {
  background: var(--btn-color);
}

/* <div class="theme-dark">
     <button class="btn">Click</button>
   </div> */`,
    answer: 'The button has background #66b2ff because --brand is overridden to #66b2ff in .theme-dark, and --btn-color uses var(--brand) which resolves to the inherited #66b2ff value.',
    explanation: 'CSS variables inherit through the DOM tree. The .theme-dark element sets --brand to #66b2ff. The .btn inside it inherits this value. When --btn-color resolves var(--brand), it finds the inherited #66b2ff (not the root #007bff). This is how CSS variable-based theming works — override at a parent scope.',
    tags: ['css-variables', 'custom-properties', 'inheritance'],
    year: 2025,
  },
  {
    id: 'cs-014',
    topic: 'css-styling',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is the CSS @layer rule and why was it introduced?',
    options: [
      'For creating visual z-index layering in CSS',
      'For declaring cascade layers that give explicit control over specificity ordering — resolving conflicts between third-party styles, reset stylesheets, base styles, and component styles without using !important',
      'For creating CSS Grid layers on top of each other',
      'For lazy loading CSS files in order',
    ],
    answer: 1,
    explanation: '@layer allows you to declare named cascade layers: @layer reset, base, components, utilities. Styles in later-declared layers win over earlier ones regardless of specificity. This solves the "override Tailwind/third-party styles" problem. Example: @layer utilities { .btn { color: red } } will beat @layer base { .btn { color: blue } }.',
    tags: ['css-layer', 'cascade', 'specificity'],
    year: 2025,
  },
  {
    id: 'cs-015',
    topic: 'css-styling',
    difficulty: 'senior',
    type: 'mcq',
    question: 'In TailwindCSS, what is the purpose of the "safelist" configuration option?',
    options: [
      'To list classes that should be removed from the final bundle',
      'To ensure dynamically constructed class names (like "text-" + color) are included in the final build, since JIT cannot scan string concatenations',
      'To whitelist external CDN URLs for font loading',
      'To list components that should bypass Tailwind\'s CSS reset',
    ],
    answer: 1,
    explanation: 'Tailwind JIT statically analyzes source files for complete class strings. Dynamic classes like `bg-${color}-500` are not detectable. The safelist in tailwind.config.js ensures those classes are included: safelist: [{pattern: /bg-(red|blue)-\d00/}]. Without it, dynamically constructed classes are purged from production builds.',
    tags: ['tailwindcss', 'safelist', 'jit', 'purging'],
    year: 2025,
  },
  {
    id: 'cs-016',
    topic: 'css-styling',
    difficulty: 'lead',
    type: 'mcq',
    question: 'What is CSS View Transitions API and how does it relate to frontend routing?',
    options: [
      'A CSS animation library for scroll-triggered animations',
      'A browser API (document.startViewTransition()) that captures before/after snapshots of DOM changes and animates between them with CSS, enabling smooth page transitions in MPAs and SPAs without JavaScript animation libraries',
      'A new CSS property for defining transition durations',
      'A Chrome DevTools feature for previewing CSS animations',
    ],
    answer: 1,
    explanation: 'View Transitions API: document.startViewTransition(() => updateDOM()) captures the old state, updates the DOM, then animates between old and new snapshots using ::view-transition-old and ::view-transition-new pseudo-elements. Next.js and React Router v7 are integrating this for seamless page transitions. Cross-document View Transitions (@view-transition in CSS) enable MPA transitions without JS.',
    tags: ['view-transitions', 'animations', 'routing'],
    year: 2025,
  },
  {
    id: 'cs-017',
    topic: 'css-styling',
    difficulty: 'lead',
    type: 'mcq',
    question: 'What is Tailwind CSS v4\'s most significant architectural change compared to v3?',
    options: [
      'It dropped JIT mode in favor of pre-generated utilities',
      'Configuration moved from tailwind.config.js to CSS itself using @theme directive, it is built on a new Rust-based engine (Lightning CSS), and the PostCSS plugin is no longer required for most setups',
      'Tailwind v4 removed support for arbitrary values like w-[347px]',
      'v4 requires React and does not work with other frameworks',
    ],
    answer: 1,
    explanation: 'Tailwind v4 (2025) major changes: @theme directive in CSS replaces tailwind.config.js for design tokens; new high-performance Rust engine via Lightning CSS replaces the Node.js pipeline; CSS-first configuration; automatic content detection without content: [...] config; new @variant and @utility APIs; first-class CSS nesting and container query support.',
    tags: ['tailwindcss', 'v4', 'architecture', 'lightning-css'],
    year: 2025,
  },
  {
    id: 'cs-018',
    topic: 'css-styling',
    difficulty: 'mid',
    type: 'true-false',
    question: 'As of 2025, CSS can natively animate discrete properties like `display: none` to `display: block` using `transition-behavior: allow-discrete` combined with `@starting-style`.',
    answer: true,
    explanation: 'Modern CSS (Chrome 117+, Safari 17.4+, Firefox 129+) supports `transition-behavior: allow-discrete`, which enables transitioning discrete properties like `display` and `content-visibility`. Combined with `@starting-style` (to define entry state), you can animate elements entering/exiting the DOM without JavaScript. Previously, only interpolatable (numeric/color) values could be transitioned.',
    tags: ['css-transitions', 'animations', 'display'],
    year: 2025,
  },
  {
    id: 'cs-019',
    topic: 'css-styling',
    difficulty: 'junior',
    type: 'mcq',
    question: 'What does the CSS property `position: sticky` do?',
    options: [
      'Positions an element relative to its nearest positioned ancestor',
      'Keeps an element fixed to the viewport at all times',
      'Makes an element stick within its scrolling container: acts as relative until it reaches a threshold (top/left), then behaves like fixed within its parent container',
      'Prevents an element from scrolling with the page',
    ],
    answer: 2,
    explanation: 'position: sticky is a hybrid of relative and fixed. It scrolls normally until it hits the specified offset (e.g., top: 0), then "sticks" to that position while still within its parent container bounds. The sticky element un-sticks when the parent scrolls out of view. Common use: sticky table headers and nav bars.',
    tags: ['css-positioning', 'sticky', 'layout'],
    year: 2025,
  },
  {
    id: 'cs-020',
    topic: 'css-styling',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is the purpose of CSS logical properties like margin-inline-start instead of margin-left?',
    options: [
      'They are shorter aliases for physical properties',
      'They adapt to writing direction: margin-inline-start maps to margin-left in LTR and margin-right in RTL, enabling layouts that automatically support multiple text directions without directional CSS overrides',
      'They enable CSS animation on margin values',
      'They only work with CSS Grid layouts',
    ],
    answer: 1,
    explanation: 'CSS Logical Properties use flow-relative directions (inline-start/end, block-start/end) instead of physical directions (left/right/top/bottom). This makes components automatically RTL-compatible: a card with margin-inline-start: 1rem works correctly in both English (LTR) and Arabic/Hebrew (RTL) without direction-specific styles.',
    tags: ['css-logical-properties', 'rtl', 'i18n', 'layout'],
    year: 2025,
  },
  {
    id: 'cs-021',
    topic: 'css-styling',
    difficulty: 'senior',
    type: 'debug',
    question: 'This CSS Grid layout has a bug causing items to overflow. Identify it.',
    code: `.grid {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  width: 100%;
}

.sidebar {
  grid-column: 1;
  width: 250px; /* BUG */
}`,
    answer: 'The .sidebar has width: 250px which overrides the 200px grid track, causing it to overflow into adjacent cells.',
    explanation: 'In CSS Grid, setting explicit width on a grid item can break the grid layout. The grid track width (200px) defines the column width, but explicit width on the item creates overflow or shrinks the grid track behavior unpredictably. Remove width: 250px from .sidebar and let the grid track control sizing. Use minmax() on the column if flexible sizing is needed.',
    tags: ['css-grid', 'overflow', 'debug'],
    year: 2025,
  },
  {
    id: 'cs-022',
    topic: 'css-styling',
    difficulty: 'lead',
    type: 'mcq',
    question: 'What is the CSS Anchor Positioning specification and what problem does it solve?',
    options: [
      'It is an alias for position: fixed with top/left anchors',
      'A new CSS feature that lets floating/positioned elements (like tooltips, dropdowns, popovers) position themselves relative to an anchor element anywhere in the DOM, without JavaScript layout calculations',
      'It anchors elements to scroll positions for parallax effects',
      'It is the CSS implementation of HTML anchor links',
    ],
    answer: 1,
    explanation: 'CSS Anchor Positioning (Baseline 2024) enables: anchor-name: --btn on the reference element; position-anchor: --btn and inset-area: block-end on the floating element. The browser handles overflow avoidance with position-try-fallbacks. This replaces Floating UI/Popper.js for most tooltip/dropdown use cases. Chrome 125+, now in Firefox and Safari.',
    tags: ['css-anchor-positioning', 'tooltips', 'layout'],
    year: 2025,
  },
  {
    id: 'cs-023',
    topic: 'css-styling',
    difficulty: 'mid',
    type: 'true-false',
    question: 'In TailwindCSS v4, the `dark:` variant uses the `selector` strategy (`.dark` class) by default instead of the `prefers-color-scheme` media query.',
    answer: true,
    explanation: 'Tailwind v3 defaulted to @media (prefers-color-scheme: dark). Tailwind v4 changed the default to the selector strategy, applying dark styles when a `.dark` class is present on a parent element. This gives more control (e.g., user toggle). You can still opt into the media query strategy via configuration.',
    tags: ['tailwindcss', 'dark-mode', 'media-queries'],
    year: 2025,
  },
  {
    id: 'cs-024',
    topic: 'css-styling',
    difficulty: 'junior',
    type: 'code-output',
    question: 'What is the specificity order of these selectors from highest to lowest?',
    code: `/* A */ #header .nav a:hover
/* B */ .nav-link
/* C */ a
/* D */ [data-active="true"]`,
    answer: 'A > D = B > C — #header .nav a:hover (1,2,1) > [data-active] and .nav-link (0,1,0) > a (0,0,1)',
    explanation: 'Specificity calculates as (IDs, Classes/Attributes/Pseudo-classes, Elements). A: 1 ID + 1 class + 1 element + 1 pseudo-class = (1,2,1). B: 1 class = (0,1,0). C: 1 element = (0,0,1). D: 1 attribute = (0,1,0). So A wins clearly. B and D tie. C is lowest. Ties are resolved by source order.',
    tags: ['css-specificity', 'selectors', 'cascade'],
    year: 2025,
  },
  {
    id: 'cs-025',
    topic: 'css-styling',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is the difference between `will-change: transform` and actually applying `transform: translateZ(0)` for GPU acceleration?',
    options: [
      'They are identical with no practical difference',
      'will-change hints to the browser to promote the element to a compositor layer in advance before the animation starts; translateZ(0) is the "hack" that forces layer promotion immediately. will-change is preferred as it avoids unnecessary layer creation until needed, and should be removed after use.',
      'will-change works only for opacity; translateZ works for all transforms',
      'translateZ(0) is deprecated in favor of will-change',
    ],
    answer: 1,
    explanation: 'Both promote elements to GPU compositor layers for smooth animations. will-change is the proper API: it gives the browser advance notice so it can prepare. translateZ(0) is the historic hack that works but wastes GPU memory if applied broadly. Over-using either hurts performance by exhausting GPU memory and increasing paint complexity. Apply just before animation, remove after.',
    tags: ['css-performance', 'gpu', 'will-change', 'compositing'],
    year: 2025,
  },
  {
    id: 'cs-026',
    topic: 'css-styling',
    difficulty: 'mid',
    type: 'code-output',
    question: 'What does this container query do and when does the style apply?',
    code: `.card-wrapper {
  container-type: inline-size;
  container-name: card;
}

@container card (min-width: 400px) {
  .card-title {
    font-size: 1.5rem;
  }
}`,
    answer: '.card-title gets font-size: 1.5rem when the .card-wrapper container is 400px or wider — regardless of the viewport width.',
    explanation: 'container-type: inline-size establishes a containment context based on the element\'s inline (width) dimension. The @container card (min-width: 400px) rule applies when that named container is at least 400px wide. This enables the card to be placed in a 300px sidebar (small text) or a 600px main area (large text) with no JavaScript and no viewport-based media queries.',
    tags: ['container-queries', '@container', 'responsive', 'css'],
    year: 2025,
  },
  {
    id: 'cs-027',
    topic: 'css-styling',
    difficulty: 'junior',
    type: 'true-false',
    question: 'Native CSS nesting (without Sass/PostCSS) is now supported in all major browsers as of 2024.',
    answer: true,
    explanation: 'Native CSS nesting reached baseline availability in 2024, supported in Chrome 112+, Firefox 117+, Safari 16.5+. Syntax: .parent { color: red; & .child { color: blue } &:hover { opacity: 0.8 } }. The & is required when nesting tag selectors or combinators. PostCSS nesting plugin can still be used for older browser support.',
    tags: ['css-nesting', 'native-css', 'browser-support'],
    year: 2025,
  },
  {
    id: 'cs-028',
    topic: 'css-styling',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What makes :has() a "relational" pseudo-class and give a practical form validation example.',
    options: [
      ':has() selects elements by their tag relationship in the DOM hierarchy',
      ':has() matches an element if any of the selectors passed as arguments match relative to that element — enabling form:has(input:invalid) to style the entire form red when any input is invalid, without JavaScript',
      ':has() is a shortcut for multiple :nth-child selectors',
      ':has() only works on the :root element for global styling',
    ],
    answer: 1,
    explanation: ':has() is called relational because it queries relationships — does this element HAVE a descendant/child matching X? Practical examples: form:has(input:invalid) { border: 2px solid red } styles a form when any input is invalid. label:has(+ input:required) { color: red } styles labels before required inputs. figure:has(figcaption) { padding-bottom: 0 } removes padding when a caption exists.',
    tags: [':has', 'css-selectors', 'form-validation', 'relational'],
    year: 2025,
  },
  {
    id: 'cs-029',
    topic: 'css-styling',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is CSS Subgrid and what problem does it solve with nested grid layouts?',
    options: [
      'Subgrid creates a grid within a grid item using smaller track sizes',
      'Subgrid allows a nested grid container to inherit (participate in) its parent grid\'s track definitions — solving the "card grid alignment" problem where items inside nested grids couldn\'t align to the outer grid lines',
      'Subgrid is a shorthand for grid-template with auto tracks',
      'Subgrid enables CSS Grid to work inside flex containers',
    ],
    answer: 1,
    explanation: 'Without subgrid, a grid item that is itself a grid container defines its own independent tracks — inner elements cannot align to outer grid lines. With subgrid: .card { display: grid; grid-row: subgrid } the card\'s rows participate in the parent grid. Classic use: card grids where each card has a header/body/footer — subgrid ensures all card footers align to the same row regardless of content height. Supported in Chrome 117+, Firefox 71+, Safari 16+.',
    tags: ['css-grid', 'subgrid', 'alignment', 'layout'],
    year: 2025,
  },
  {
    id: 'cs-030',
    topic: 'css-styling',
    difficulty: 'senior',
    type: 'code-output',
    question: 'What is the cascade order in this @layer setup and which button color wins?',
    code: `@layer reset, base, components;

@layer reset {
  button { color: gray; }
}

@layer components {
  button { color: blue; }
}

@layer base {
  button { color: red; }
}

/* Un-layered style: */
button { color: green; }`,
    answer: 'green — unlayered styles win over all @layer styles, regardless of layer order. Among layers, components (declared last in the @layer order) would be blue.',
    explanation: '@layer order is determined by the first @layer declaration (@layer reset, base, components). Later-declared layers win within layered styles, so components beats base beats reset. However, styles outside any @layer are treated as the highest-priority implicit layer — they always beat layered styles. So the unlayered button { color: green } wins everything.',
    tags: ['css-layer', '@layer', 'cascade', 'specificity'],
    year: 2025,
  },
  {
    id: 'cs-031',
    topic: 'css-styling',
    difficulty: 'mid',
    type: 'mcq',
    question: 'How do scroll-driven animations work in CSS without JavaScript?',
    options: [
      'Scroll-driven animations use IntersectionObserver internally compiled to CSS',
      'The animation-timeline property links a CSS animation to scroll progress. scroll() ties animation to the document scroll position; view() ties it to an element\'s visibility in the viewport — all in pure CSS without scroll event listeners',
      'Scroll-driven animations require the Web Animations API (WAAPI) JavaScript calls',
      'They are only supported in Chrome behind a flag',
    ],
    answer: 1,
    explanation: 'Scroll-driven animations (Baseline 2024): @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } } applied with animation-timeline: scroll() makes the animation progress as you scroll the page. view() timeline: animation-timeline: view() plays the animation as the element enters/leaves the viewport. Combine with animation-range: entry 0% entry 100% for fine control. Supported Chrome 115+, Firefox 110+, Safari 18+.',
    tags: ['scroll-driven-animations', 'animation-timeline', 'css', 'performance'],
    year: 2025,
  },
  {
    id: 'cs-032',
    topic: 'css-styling',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is the oklch() color function and why is it preferred over hsl() for design systems?',
    options: [
      'oklch() is just an alias for hsl() with different parameter order',
      'oklch() uses perceptually uniform lightness (L), chroma (C), and hue (H) in the OKLab color space — colors with the same L value look equally bright to human eyes, making it ideal for generating accessible color palettes and consistent tints/shades without unexpected brightness jumps',
      'oklch() is only for defining HDR/wide-gamut display colors',
      'oklch() requires a CSS preprocessor to compile to rgb() for browser support',
    ],
    answer: 1,
    explanation: 'HSL has a perceptual lightness problem: hsl(60, 100%, 50%) yellow looks much brighter than hsl(240, 100%, 50%) blue at the same lightness value. oklch() uses a perceptually uniform model where L=70% truly looks the same brightness across all hues. This makes it excellent for: generating button hover states (reduce L by 10%), creating accessible color scales, and theming. All modern browsers support oklch() natively (no compilation needed).',
    tags: ['oklch', 'color-functions', 'design-systems', 'accessibility'],
    year: 2025,
  },
  {
    id: 'cs-033',
    topic: 'css-styling',
    difficulty: 'mid',
    type: 'code-output',
    question: 'What does color-mix() produce in this example?',
    code: `/* What color does this produce? */
.element {
  background: color-mix(in oklch, #ff0000 40%, #0000ff 60%);
}`,
    answer: 'A mixed color that is 40% red and 60% blue blended in the oklch color space — resulting in a purple/violet tone. The "in oklch" clause determines which color space the interpolation happens in.',
    explanation: 'color-mix(in colorspace, color1 percentage, color2 percentage) blends two colors in the specified color space. The color space matters significantly: mixing red and blue in sRGB produces a muddy dark purple, while mixing in oklch or lab produces a more vibrant, perceptually pleasing purple. If percentages don\'t add to 100%, the remainder is filled by the second color. Supported in all modern browsers.',
    tags: ['color-mix', 'oklch', 'color-functions', 'css'],
    year: 2025,
  },
  {
    id: 'cs-034',
    topic: 'css-styling',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is Tailwind CSS v4\'s @theme directive and how does it replace tailwind.config.js?',
    options: [
      '@theme is an alias for @media that applies styles based on user preferences',
      '@theme is a CSS-at-rule in Tailwind v4 where you define design tokens as CSS custom properties directly in your CSS file. @theme { --color-primary: oklch(0.5 0.2 250); --spacing-lg: 2rem } generates corresponding utilities (bg-primary, p-lg) without any JavaScript config file',
      '@theme imports a pre-built theme file from the Tailwind CDN',
      '@theme only configures dark mode colors in Tailwind v4',
    ],
    answer: 1,
    explanation: 'Tailwind v4 is CSS-first: instead of module.exports = { theme: { colors: { primary: "..." } } }, you write @theme { --color-primary: oklch(0.5 0.2 250) } in your CSS. Tailwind reads these CSS custom properties and generates utility classes automatically. Tokens map to utilities by namespace: --color-* generates color utilities, --spacing-* generates spacing utilities, --font-size-* generates text-size utilities. tailwind.config.js is optional for simple projects.',
    tags: ['tailwindcss', 'v4', '@theme', 'css-first-config'],
    year: 2025,
  },
  {
    id: 'cs-035',
    topic: 'css-styling',
    difficulty: 'lead',
    type: 'mcq',
    question: 'What is CSS Anchor Positioning\'s position-try-fallbacks and how does it handle overflow?',
    options: [
      'position-try-fallbacks retries the network request if the CSS file fails to load',
      'position-try-fallbacks defines alternative positioning strategies that the browser tries in order when the anchored element would overflow its scroll container — automatically flipping a tooltip from below to above if there is no space below',
      'It falls back to position: fixed when the anchor element scrolls out of view',
      'position-try-fallbacks is a JavaScript API for programmatic anchor fallback logic',
    ],
    answer: 1,
    explanation: 'CSS Anchor Positioning (Chrome 125+) allows: .tooltip { position: absolute; position-anchor: --btn; inset-area: block-end; position-try-fallbacks: flip-block, flip-inline, flip-block flip-inline }. The browser tries each fallback in order: if placing below overflows, try above (flip-block); if left overflows, try right (flip-inline). This replaces the core functionality of Floating UI/Popper.js that computes overflow-aware positioning in JavaScript.',
    tags: ['css-anchor-positioning', 'position-try-fallbacks', 'overflow', 'tooltips'],
    year: 2025,
  },
  {
    id: 'cs-036',
    topic: 'css-styling',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What are CSS logical properties and which physical properties do margin-block and padding-inline map to in horizontal LTR writing mode?',
    options: [
      'margin-block maps to margin-left/right; padding-inline maps to padding-top/bottom',
      'margin-block maps to margin-top/bottom (block axis); padding-inline maps to padding-left/right (inline axis) in LTR — but in vertical writing modes, the axes flip',
      'Logical properties only affect text alignment, not box model spacing',
      'margin-block and padding-inline are not valid CSS properties',
    ],
    answer: 1,
    explanation: 'CSS Logical Properties use flow-relative directions. In horizontal LTR writing: block axis = vertical (top/bottom), inline axis = horizontal (left/right). So: margin-block = margin-top + margin-bottom, padding-inline = padding-left + padding-right. In vertical writing modes (CJK, some RTL layouts), block becomes horizontal and inline becomes vertical — logical properties adapt automatically. Modern shorthand: margin-block: 1rem 2rem (top then bottom).',
    tags: ['css-logical-properties', 'writing-modes', 'i18n', 'rtl'],
    year: 2025,
  },
  {
    id: 'cs-037',
    topic: 'css-styling',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is the CSS @scope rule and how does it differ from CSS Modules for style scoping?',
    options: [
      '@scope is a build-time tool like CSS Modules that generates scoped class names',
      '@scope is a native CSS at-rule that limits the reach of style rules to a specific DOM subtree: @scope (.card) { p { color: blue } } only styles <p> inside .card elements, without class name mangling. Unlike CSS Modules, it works in plain CSS without a build step.',
      '@scope only works with Shadow DOM components',
      '@scope was removed from the CSS specification before reaching browsers',
    ],
    answer: 1,
    explanation: '@scope defines a scoping root and optional lower boundary: @scope (.card) to (.card-footer) { p { font-size: 0.9rem } } applies only to <p> elements between .card and .card-footer in the DOM tree. This enables donut-shaped scoping (exclude a subtree). Unlike CSS Modules (which rename classes at build time), @scope is pure CSS at runtime — no tooling required. Supported in Chrome 118+, Safari 17.4+, Firefox 128+.',
    tags: ['@scope', 'css-scoping', 'css-modules', 'comparison'],
    year: 2025,
  },
  {
    id: 'cs-038',
    topic: 'css-styling',
    difficulty: 'lead',
    type: 'mcq',
    question: 'How does the View Transitions API handle the naming of transitioning elements and what is the view-transition-name property?',
    options: [
      'The browser auto-detects which elements match between old and new states by comparing their class names',
      'view-transition-name assigns a unique identifier to an element so the browser captures it separately and creates ::view-transition-old(name) and ::view-transition-new(name) pseudo-elements — enabling per-element transition animations like shared-element transitions between pages',
      'view-transition-name is only valid on the <html> root element',
      'The property accepts only predefined values: slide, fade, scale, or flip',
    ],
    answer: 1,
    explanation: 'view-transition-name: hero-image on an element tells the browser to capture that element separately from the rest of the page during document.startViewTransition(). The browser generates ::view-transition-old(hero-image) (snapshot before) and ::view-transition-new(hero-image) (snapshot after) pseudo-elements, which animate from the old position/size to the new one automatically — enabling the shared-element/hero animation pattern. Names must be unique per frame.',
    tags: ['view-transitions', 'view-transition-name', 'shared-element', 'animation'],
    year: 2025,
  },
  {
    id: 'cs-039',
    topic: 'css-styling',
    difficulty: 'junior',
    type: 'mcq',
    question: 'In Tailwind v4, how do you define a custom color using the new CSS-first configuration?',
    options: [
      'Add it to the extend.colors section in tailwind.config.js',
      'Add @theme { --color-brand: #0ea5e9; } in your CSS file — this generates bg-brand, text-brand, border-brand utilities automatically',
      'Use the @apply directive with a hex value: @apply bg-[#0ea5e9]',
      'Import the color from a JavaScript theme file using @config',
    ],
    answer: 1,
    explanation: 'Tailwind v4\'s CSS-first approach: define custom design tokens as CSS custom properties inside @theme { }. The --color- namespace prefix tells Tailwind to generate color utilities. --color-brand: #0ea5e9 auto-generates bg-brand, text-brand, border-brand, ring-brand, shadow-brand, fill-brand, stroke-brand utilities. Similarly --spacing-*, --font-size-*, --border-radius-* generate their respective utility classes.',
    tags: ['tailwindcss', 'v4', '@theme', 'custom-colors'],
    year: 2025,
  },
  {
    id: 'cs-040',
    topic: 'css-styling',
    difficulty: 'senior',
    type: 'debug',
    question: 'This container query is not applying styles. Find the bug.',
    code: `.sidebar {
  /* Missing required property */
  container-name: sidebar;
}

@container sidebar (min-width: 300px) {
  .widget {
    display: grid;
  }
}`,
    answer: 'Missing container-type on .sidebar. Without container-type, the element is not a query container and @container rules targeting it are ignored.',
    explanation: 'To establish a containment context, you must set container-type: inline-size (for width queries), container-type: size (for width and height queries), or the shorthand container: sidebar / inline-size. container-name alone does not make an element a container. Fix: add container-type: inline-size to .sidebar. The container shorthand can combine both: container: sidebar / inline-size.',
    tags: ['container-queries', 'container-type', 'debug', 'css'],
    year: 2025,
  },
  {
    id: 'cs-041',
    topic: 'css-styling',
    difficulty: 'mid',
    type: 'code-output',
    question: 'What does this native CSS nesting produce — does it work and what does it style?',
    code: `.nav {
  display: flex;
  gap: 1rem;

  .link {
    color: blue;

    &:hover {
      color: darkblue;
      text-decoration: underline;
    }
  }

  & > .active {
    font-weight: bold;
  }
}`,
    answer: 'Valid native CSS nesting. Styles: .nav flex container with gap. .link inside .nav is blue. .link:hover inside .nav is darkblue with underline. Direct child .active of .nav is bold.',
    explanation: 'Native CSS nesting (Chrome 112+, Firefox 117+, Safari 16.5+) supports: bare class selectors (.link nested directly without &) for descendant selection — this was added later; the & combinator for pseudo-classes and when you need explicit parent reference; and combinators like & > .active for child selectors. The & represents the parent selector (.nav in this case). All these patterns are valid modern CSS nesting.',
    tags: ['css-nesting', 'native-css', 'selectors'],
    year: 2025,
  },
  {
    id: 'cs-042',
    topic: 'css-styling',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What does CSS inset-area replace in the CSS Anchor Positioning specification, and what values does it accept?',
    options: [
      'inset-area replaces the z-index shorthand for 3D positioning',
      'inset-area is part of CSS Anchor Positioning that replaces manual top/left/right/bottom calculation — it accepts logical grid-position values (block-start, block-end, inline-start, inline-end, center, span-all, etc.) to declaratively position an anchored element relative to its anchor',
      'inset-area is the shorthand for inset-block and inset-inline logical properties',
      'inset-area sets the paint area for background images',
    ],
    answer: 1,
    explanation: 'inset-area (previously anchor-area in older drafts) is the primary positioning mechanism for CSS Anchor Positioning. Instead of calculating top: calc(anchor(bottom) + 8px) manually, inset-area: block-end places the element below the anchor; inset-area: inline-end places it to the right. The value is a 1-3 word description of a position on a 3x3 grid around the anchor element. Combined with position-try-fallbacks for automatic overflow handling.',
    tags: ['css-anchor-positioning', 'inset-area', 'positioning'],
    year: 2025,
  },
  {
    id: 'cs-043',
    topic: 'css-styling',
    difficulty: 'lead',
    type: 'mcq',
    question: 'What are the key changes in Tailwind CSS v4 that break compatibility with v3 projects?',
    options: [
      'Tailwind v4 is fully backward compatible — no breaking changes',
      'Breaking changes: tailwind.config.js is replaced by @theme in CSS (though @config can import old configs); PostCSS config changes; removed deprecated utilities; class name changes for some utilities (shadow-sm is now shadow-xs); @apply no longer supports arbitrary values; and the default border color changed from gray-200 to currentColor',
      'Tailwind v4 requires switching from npm to Bun for the build tool',
      'v4 drops support for React and only works with server-rendered HTML',
    ],
    answer: 1,
    explanation: 'Tailwind v4 has meaningful breaking changes: configuration is CSS-first via @theme (though @config directive provides gradual migration). Utility renames: shadow-sm → shadow-xs, shadow → shadow-sm. Default ring width changed from 3px to 1px. @apply with modifiers changed. The PostCSS plugin setup is simplified. Upgrade guide and codemods exist. For existing projects, use @config "./tailwind.config.js" inside the CSS entry point during migration.',
    tags: ['tailwindcss', 'v4', 'migration', 'breaking-changes'],
    year: 2025,
  },
  {
    id: 'cs-044',
    topic: 'css-styling',
    difficulty: 'junior',
    type: 'mcq',
    question: 'What are CSS logical properties\' block and inline equivalents for the traditional top/right/bottom/left border-radius corners?',
    options: [
      'border-top-left-radius becomes border-block-start-inline-start-radius',
      'CSS logical properties do not apply to border-radius',
      'The corners are: border-start-start-radius (top-left in LTR), border-start-end-radius (top-right), border-end-start-radius (bottom-left), border-end-end-radius (bottom-right)',
      'Logical border-radius uses border-radius-logical shorthand',
    ],
    answer: 2,
    explanation: 'CSS logical properties extend to border-radius: border-start-start-radius = top-left in LTR horizontal writing. border-start-end-radius = top-right in LTR. border-end-start-radius = bottom-left in LTR. border-end-end-radius = bottom-right in LTR. In RTL or vertical writing modes, these flip appropriately. Useful for components like tabs or breadcrumbs that need one rounded corner that switches side in RTL layouts.',
    tags: ['css-logical-properties', 'border-radius', 'rtl', 'writing-modes'],
    year: 2025,
  },
  {
    id: 'cs-045',
    topic: 'css-styling',
    difficulty: 'lead',
    type: 'mcq',
    question: 'How do scroll-driven animations interact with accessibility and prefers-reduced-motion?',
    options: [
      'Scroll-driven animations are exempt from prefers-reduced-motion because they are user-controlled',
      'Scroll-driven animations should still respect prefers-reduced-motion. While user-controlled scroll might seem safe, vestibular disorders can be triggered by content that moves in response to scrolling. Wrap scroll-driven animations in @media (prefers-reduced-motion: no-preference) or disable the animation-timeline for reduce-motion users',
      'Browsers automatically disable all animations including scroll-driven when prefers-reduced-motion is enabled',
      'prefers-reduced-motion only affects CSS transition and animation properties, not animation-timeline',
    ],
    answer: 1,
    explanation: 'Despite being user-initiated, scroll-driven animations can cause vestibular/motion sickness issues for some users. Best practice: @media (prefers-reduced-motion: no-preference) { .element { animation: fadeIn linear; animation-timeline: scroll() } }. The WCAG 2.3.3 success criterion (AAA) advises users should be able to disable motion. For scroll-linked parallax effects especially, reduced-motion disabling is strongly recommended. Use opacity/visibility changes instead of movement for reduced-motion fallbacks.',
    tags: ['scroll-driven-animations', 'accessibility', 'prefers-reduced-motion', 'a11y'],
    year: 2025,
  },
]
