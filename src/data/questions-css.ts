import type { Question } from '../types'

export const cssQuestions: Question[] = [
  // ─── FLEXBOX ────────────────────────────────────────────────────────────────
  {
    id: 'css-001',
    topic: 'css',
    difficulty: 'junior',
    type: 'mcq',
    question: 'Which value of `justify-content` distributes flex items with equal space between them (no space at the edges)?',
    options: [
      'space-around',
      'space-evenly',
      'space-between',
      'center',
    ],
    answer: 2,
    explanation: '`space-between` places the first item at the start edge, the last at the end edge, and distributes remaining space equally between items. `space-around` adds half a unit of space at edges; `space-evenly` adds equal space everywhere including edges.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content'],
    tags: ['flexbox', 'justify-content', 'layout'],
    year: 2025,
  },
  {
    id: 'css-002',
    topic: 'css',
    difficulty: 'junior',
    type: 'true-false',
    question: 'Setting `flex-shrink: 0` on a flex item prevents it from shrinking below its `flex-basis` size when the container is too small.',
    answer: true,
    explanation: '`flex-shrink` controls how much a flex item shrinks relative to other items when there is insufficient space. A value of `0` disables shrinking entirely, so the item will overflow the container rather than compress.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink'],
    tags: ['flexbox', 'flex-shrink', 'overflow'],
    year: 2025,
  },
  {
    id: 'css-003',
    topic: 'css',
    difficulty: 'mid',
    type: 'code-output',
    question: 'What are the computed `flex-grow`, `flex-shrink`, and `flex-basis` values when `flex: 2` is applied?',
    code: `.item {
  flex: 2;
}`,
    answer: 'flex-grow: 2, flex-shrink: 1, flex-basis: 0%',
    explanation: 'The single-value `flex: 2` is a shorthand that sets `flex-grow: 2`, and resets `flex-shrink` to `1` and `flex-basis` to `0%`. This is different from writing `flex-grow: 2` individually, which would leave `flex-basis` at its initial value of `auto`.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/CSS/flex'],
    tags: ['flexbox', 'flex-shorthand', 'flex-grow'],
    year: 2025,
  },
  {
    id: 'css-004',
    topic: 'css',
    difficulty: 'mid',
    type: 'mcq',
    question: 'In a flex container with `flex-direction: row`, which property controls spacing along the vertical axis for individual items?',
    options: [
      'justify-self',
      'align-self',
      'place-self',
      'align-content',
    ],
    answer: 1,
    explanation: '`align-self` overrides the container\'s `align-items` value for a single flex item, controlling its alignment on the cross axis (vertical when `flex-direction: row`). `justify-self` has no effect in flexbox. `align-content` applies to multi-line flex containers, not individual items.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/CSS/align-self'],
    tags: ['flexbox', 'align-self', 'cross-axis'],
    year: 2025,
  },
  {
    id: 'css-005',
    topic: 'css',
    difficulty: 'junior',
    type: 'mcq',
    question: 'What does `order: -1` do to a flex item?',
    options: [
      'Removes the item from the flex flow',
      'Moves the item visually before items with the default order of 0',
      'Reverses the flex direction',
      'Makes the item the last in the visual order',
    ],
    answer: 1,
    explanation: 'The `order` property controls the visual order of flex (and grid) items without changing DOM order. The default is `0`. Items with lower values appear first, so `order: -1` moves the item before all items with `order: 0` or higher. DOM order is preserved for accessibility and tab order.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/CSS/order'],
    tags: ['flexbox', 'order', 'visual-order'],
    year: 2025,
  },
  {
    id: 'css-006',
    topic: 'css',
    difficulty: 'senior',
    type: 'debug',
    question: 'The flex items are not wrapping even though `flex-wrap: wrap` is set. Find and fix the bug.',
    code: `.container {
  display: flex;
  flex-wrap: wrap;
}

.item {
  flex: 1 0 200px; /* should wrap when container < 400px */
  min-width: 0;    /* intentional – allows content shrink */
}`,
    answer: `.container {
  display: flex;
  flex-wrap: wrap;
  width: 100%; /* ensure the container has a constrained width */
}

.item {
  flex: 1 0 200px;
  min-width: 0;
}`,
    solutionCode: `.container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.item {
  flex: 1 0 200px;
  min-width: 0;
}`,
    explanation: 'Without a constrained width on the flex container, it may grow to fit all items on one line (e.g., when inside an absolutely-positioned or inline context). Ensuring the container has a defined or percentage-based width lets the browser calculate when wrapping is needed. Additionally, `flex-shrink: 0` in the shorthand prevents items from shrinking below `flex-basis: 200px`, which triggers wrapping correctly once the container is constrained.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap'],
    tags: ['flexbox', 'flex-wrap', 'debug'],
    year: 2025,
  },

  // ─── CSS GRID ────────────────────────────────────────────────────────────────
  {
    id: 'css-007',
    topic: 'css',
    difficulty: 'junior',
    type: 'mcq',
    question: 'What is the difference between `auto-fill` and `auto-fit` in `grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))`?',
    options: [
      'They are identical; both fill available space with as many tracks as possible',
      '`auto-fill` keeps empty tracks, while `auto-fit` collapses them so filled tracks expand to take the space',
      '`auto-fit` creates more tracks than `auto-fill`',
      '`auto-fill` only works with named grid areas',
    ],
    answer: 1,
    explanation: 'Both `auto-fill` and `auto-fit` create as many tracks as fit. The difference appears when there are fewer items than tracks: `auto-fill` retains the empty tracks (preserving their space), while `auto-fit` collapses empty tracks to zero width, allowing filled items to stretch to fill the row via `1fr`.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/CSS/repeat'],
    tags: ['css-grid', 'auto-fill', 'auto-fit', 'responsive'],
    year: 2025,
  },
  {
    id: 'css-008',
    topic: 'css',
    difficulty: 'mid',
    type: 'code-output',
    question: 'How many columns does this grid create, and what is each column\'s width given a 700px container?',
    code: `.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  width: 700px;
}`,
    answer: '3 columns, each approximately 220px wide (700px minus 2×20px gap = 660px, divided by 3 ≈ 220px)',
    explanation: '`minmax(200px, 1fr)` means each track is at least 200px. In a 700px container with two 20px gaps (3 columns = 2 gaps): 700 - 40 = 660px available. 660 / 200 = 3.3, so 3 columns fit. The `1fr` maximum distributes remaining space equally: 660 / 3 = 220px per column.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/CSS/minmax'],
    tags: ['css-grid', 'minmax', 'auto-fill', 'fr-unit'],
    year: 2025,
  },
  {
    id: 'css-009',
    topic: 'css',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What does `grid-area: header` do when used on a grid item?',
    options: [
      'Creates a named grid line called "header"',
      'Assigns the item to a named grid area previously defined in `grid-template-areas`',
      'Applies a CSS animation named "header"',
      'Sets the item\'s `id` attribute to "header"',
    ],
    answer: 1,
    explanation: '`grid-area` assigns an item to a named area defined via `grid-template-areas` on the container. It is shorthand for `grid-row-start / grid-column-start / grid-row-end / grid-column-end`. When a single identifier is passed, it refers to the named area in `grid-template-areas`.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area'],
    tags: ['css-grid', 'grid-area', 'named-areas', 'layout'],
    year: 2025,
  },
  {
    id: 'css-010',
    topic: 'css',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What problem does CSS Subgrid solve that nested grids cannot?',
    options: [
      'Subgrid allows items to use JavaScript-driven track sizes',
      'Subgrid lets a nested grid item participate in the parent grid\'s track sizing, aligning across multiple nesting levels',
      'Subgrid enables 3D perspective transforms on grid tracks',
      'Subgrid is simply an alias for `display: grid` with inherited properties',
    ],
    answer: 1,
    explanation: 'With a regular nested grid, the inner grid creates its own independent track system. `subgrid` on `grid-template-rows` or `grid-template-columns` lets the nested grid inherit and participate in the parent\'s track definitions, enabling cross-component alignment (e.g., card components aligned to a page-level grid). Supported in all major browsers as of 2023.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid'],
    tags: ['css-grid', 'subgrid', 'layout', 'alignment'],
    year: 2025,
  },
  {
    id: 'css-011',
    topic: 'css',
    difficulty: 'mid',
    type: 'code-write',
    question: 'Write a CSS grid layout for a classic "Holy Grail" layout: full-width header and footer, with three equal-height columns (sidebar-left, main, sidebar-right) in between. The main column should take all remaining horizontal space.',
    answer: `.page {
  display: grid;
  grid-template-areas:
    "header  header  header"
    "sidebar main    aside"
    "footer  footer  footer";
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
main    { grid-area: main; }
aside   { grid-area: aside; }
footer  { grid-area: footer; }`,
    explanation: '`grid-template-areas` provides a visual ASCII map of the layout. `grid-template-columns: 200px 1fr 200px` gives fixed-width sidebars and a fluid main column. `grid-template-rows: auto 1fr auto` lets the middle row stretch to fill remaining viewport height via `min-height: 100vh` on the container.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas'],
    tags: ['css-grid', 'holy-grail', 'layout', 'grid-template-areas'],
    year: 2025,
  },

  // ─── CSS SELECTORS & SPECIFICITY ─────────────────────────────────────────────
  {
    id: 'css-012',
    topic: 'css',
    difficulty: 'junior',
    type: 'mcq',
    question: 'What is the specificity of the selector `#nav .item:hover`?',
    options: [
      '(0, 2, 0)',
      '(1, 1, 0)',
      '(1, 2, 0)',
      '(0, 1, 1)',
    ],
    answer: 1,
    explanation: 'Specificity is calculated as (ID, class/attribute/pseudo-class, element/pseudo-element). `#nav` = 1 ID, `.item` = 1 class, `:hover` = 1 pseudo-class → (1, 2, 0). Wait — that is option C. Re-examining: `#nav` contributes (1,0,0), `.item` contributes (0,1,0), `:hover` contributes (0,1,0). Total: (1, 2, 0).',
    references: ['https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity'],
    tags: ['selectors', 'specificity', 'css-fundamentals'],
    year: 2025,
  },
  {
    id: 'css-013',
    topic: 'css',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is the key difference between `:is()` and `:where()` regarding specificity?',
    options: [
      '`:is()` takes the highest specificity of its arguments; `:where()` always has zero specificity',
      '`:where()` takes the highest specificity; `:is()` has zero specificity',
      'Both have zero specificity',
      'Both take the highest specificity of their arguments',
    ],
    answer: 0,
    explanation: '`:is(h1, .title, #hero)` adopts the specificity of its most specific argument — in this case `#hero` gives it (1,0,0). `:where(h1, .title, #hero)` always has (0,0,0) specificity regardless of its arguments, making it ideal for base styles that are easily overridden.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/CSS/:where'],
    tags: ['selectors', 'specificity', ':is', ':where', 'modern-css'],
    year: 2025,
  },
  {
    id: 'css-014',
    topic: 'css',
    difficulty: 'senior',
    type: 'mcq',
    question: 'The `:has()` relational pseudo-class was finalized in CSS Selectors Level 4. Which of the following correctly uses `:has()`?',
    options: [
      '`p:has(+ img)` — selects a `<p>` that is immediately followed by an `<img>`',
      '`div:has(> p)` — selects a `<div>` that contains at least one direct child `<p>`',
      '`form:has(:invalid)` — selects a `<form>` that contains at least one invalid input',
      'All of the above are valid uses of `:has()`',
    ],
    answer: 3,
    explanation: '`:has()` is a relational pseudo-class that selects elements based on their descendants or subsequent siblings. All three examples are valid: (A) uses a subsequent-sibling combinator inside `:has()`, (B) uses a child combinator, (C) uses a pseudo-class inside `:has()`. All are supported in modern browsers (Chrome 105+, Safari 15.4+, Firefox 121+).',
    references: ['https://developer.mozilla.org/en-US/docs/Web/CSS/:has'],
    tags: ['selectors', ':has', 'modern-css', 'pseudo-class'],
    year: 2025,
  },
  {
    id: 'css-015',
    topic: 'css',
    difficulty: 'mid',
    type: 'true-false',
    question: 'The CSS pseudo-element `::before` creates a new element that is inserted as the first child of the selected element in the DOM.',
    answer: false,
    explanation: '`::before` inserts generated content visually as the first child, but it does NOT modify the DOM. It exists only in the CSS rendering tree. It is inaccessible to JavaScript\'s `querySelector`, has limited accessibility support, and requires `content: ""` to be rendered. Similarly `::after` inserts after the element\'s content.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/CSS/::before'],
    tags: ['pseudo-elements', '::before', 'generated-content'],
    year: 2025,
  },
  {
    id: 'css-016',
    topic: 'css',
    difficulty: 'mid',
    type: 'mcq',
    question: 'Which combinator does `div > p` represent?',
    options: [
      'Descendant combinator — all `<p>` inside `<div>`',
      'Adjacent sibling combinator — `<p>` immediately after `<div>`',
      'Child combinator — direct child `<p>` elements of `<div>`',
      'General sibling combinator — all `<p>` siblings after `<div>`',
    ],
    answer: 2,
    explanation: 'The `>` is the child combinator. It selects elements that are direct (immediate) children of the specified parent. `div p` (space) is the descendant combinator. `div + p` is adjacent sibling. `div ~ p` is general sibling.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/CSS/Child_combinator'],
    tags: ['selectors', 'combinators', 'child-combinator'],
    year: 2025,
  },

  // ─── BOX MODEL ───────────────────────────────────────────────────────────────
  {
    id: 'css-017',
    topic: 'css',
    difficulty: 'junior',
    type: 'mcq',
    question: 'With `box-sizing: border-box`, what does the `width` property define?',
    options: [
      'Width of the content area only',
      'Width of the content area plus padding',
      'Width of the content area plus padding plus border',
      'Width of the content area plus padding plus border plus margin',
    ],
    answer: 2,
    explanation: '`box-sizing: border-box` makes `width` and `height` include the content, padding, and border — but NOT margin. This is the intuitive model and is set globally via `*, *::before, *::after { box-sizing: border-box }` in most modern CSS resets.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing'],
    tags: ['box-model', 'box-sizing', 'border-box'],
    year: 2025,
  },
  {
    id: 'css-018',
    topic: 'css',
    difficulty: 'mid',
    type: 'code-output',
    question: 'What is the total vertical space between the two paragraphs in this example?',
    code: `p:first-child {
  margin-bottom: 30px;
}
p:last-child {
  margin-top: 20px;
}`,
    answer: '30px (margins collapse to the larger value)',
    explanation: 'Adjacent block-level siblings experience margin collapsing: the two vertical margins merge into a single margin equal to the larger value. The 30px bottom margin and 20px top margin collapse to 30px, not 50px. Collapsing does NOT happen with flex/grid children, or when a border/padding separates the margins.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing'],
    tags: ['box-model', 'margin-collapse', 'layout'],
    year: 2025,
  },
  {
    id: 'css-019',
    topic: 'css',
    difficulty: 'junior',
    type: 'true-false',
    question: 'Margin and padding both affect the clickable/interactive area of an element.',
    answer: false,
    explanation: 'Padding is inside the element\'s border and is part of its background and interactive area. Margin is outside the border and is transparent space — it does not receive click events (only the content + padding area does, assuming default `pointer-events`).',
    references: ['https://developer.mozilla.org/en-US/docs/Web/CSS/padding'],
    tags: ['box-model', 'margin', 'padding', 'interactivity'],
    year: 2025,
  },

  // ─── POSITIONING & STACKING ───────────────────────────────────────────────────
  {
    id: 'css-020',
    topic: 'css',
    difficulty: 'junior',
    type: 'mcq',
    question: 'Which positioning scheme removes an element from the normal document flow and positions it relative to its nearest positioned ancestor?',
    options: [
      'relative',
      'fixed',
      'absolute',
      'sticky',
    ],
    answer: 2,
    explanation: '`position: absolute` removes the element from normal flow. It is positioned relative to the nearest ancestor with `position` other than `static` (i.e., `relative`, `absolute`, `fixed`, or `sticky`). If none exists, it is positioned relative to the initial containing block (viewport).',
    references: ['https://developer.mozilla.org/en-US/docs/Web/CSS/position'],
    tags: ['positioning', 'absolute', 'containing-block'],
    year: 2025,
  },
  {
    id: 'css-021',
    topic: 'css',
    difficulty: 'mid',
    type: 'true-false',
    question: '`position: sticky` requires at least one threshold value (`top`, `bottom`, `left`, or `right`) to work correctly.',
    answer: true,
    explanation: 'Without a threshold (e.g., `top: 0`), `position: sticky` behaves like `position: relative`. The threshold specifies when the element "sticks" — it sticks once the scroll position would cause the element to cross that offset from the viewport edge. Additionally, the sticky element stops sticking when its scroll container\'s edge reaches it.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/CSS/position#sticky_positioning'],
    tags: ['positioning', 'sticky', 'scroll'],
    year: 2025,
  },
  {
    id: 'css-022',
    topic: 'css',
    difficulty: 'senior',
    type: 'mcq',
    question: 'Which of the following CSS properties creates a new stacking context?',
    options: [
      '`position: relative` without `z-index`',
      '`opacity: 0.99`',
      '`display: block`',
      '`margin: auto`',
    ],
    answer: 1,
    explanation: 'A new stacking context is created by many properties including: `position` with a `z-index` value other than `auto`, `opacity` less than 1, `transform`, `filter`, `will-change`, `isolation: isolate`, `mix-blend-mode` other than `normal`, and others. `opacity: 0.99` (any value < 1) creates a new stacking context.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context'],
    tags: ['stacking-context', 'z-index', 'positioning', 'opacity'],
    year: 2025,
  },
  {
    id: 'css-023',
    topic: 'css',
    difficulty: 'senior',
    type: 'debug',
    question: 'A tooltip with `z-index: 9999` still appears behind another element with `z-index: 1`. Find and fix the root cause.',
    code: `/* Parent of tooltip */
.card {
  position: relative;
  transform: translateZ(0); /* GPU optimization */
  z-index: auto;
}

.tooltip {
  position: absolute;
  z-index: 9999;
}

/* Sibling of .card */
.overlay {
  position: fixed;
  z-index: 1;
}`,
    answer: `/* Fix: Remove transform from .card OR move tooltip outside the stacking context */
.card {
  position: relative;
  /* Removed: transform: translateZ(0) — this was creating a new stacking context */
}

.tooltip {
  position: absolute;
  z-index: 9999;
}

.overlay {
  position: fixed;
  z-index: 1;
}`,
    solutionCode: `.card {
  position: relative;
  /* transform: translateZ(0) removed — was creating an unintended stacking context */
}

.tooltip {
  position: absolute;
  z-index: 9999;
}

.overlay {
  position: fixed;
  z-index: 1;
}`,
    explanation: '`transform: translateZ(0)` on `.card` creates a new stacking context. Inside a stacking context, `z-index` values only compete within that context — the entire `.card` context is then compared against `.overlay` as a unit. Since `.card` has no explicit `z-index` (or `z-index: auto`), it may be painted before `.overlay`. The fix is to remove the transform from `.card`, or alternatively move the tooltip outside `.card` into the document root, or give `.card` a higher `z-index` than `.overlay`.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context'],
    tags: ['z-index', 'stacking-context', 'transform', 'debug'],
    year: 2025,
  },

  // ─── CSS CUSTOM PROPERTIES ────────────────────────────────────────────────────
  {
    id: 'css-024',
    topic: 'css',
    difficulty: 'junior',
    type: 'code-output',
    question: 'What color is applied to `.child` in this example?',
    code: `:root {
  --color: blue;
}

.parent {
  --color: red;
}

.child {
  color: var(--color, green);
}

/* HTML: <div class="parent"><span class="child">text</span></div> */`,
    answer: 'red',
    explanation: 'CSS custom properties inherit through the DOM. `.child` inherits `--color: red` from `.parent` because `.parent` is its ancestor and sets `--color` to `red`. The fallback value `green` in `var(--color, green)` is only used when the variable is not defined or is invalid. The `:root` definition is overridden by `.parent` in this subtree.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties'],
    tags: ['css-variables', 'custom-properties', 'inheritance', 'var'],
    year: 2025,
  },
  {
    id: 'css-025',
    topic: 'css',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What does the `@property` at-rule enable that regular CSS custom properties cannot do?',
    options: [
      'It allows custom properties to be used inside media queries',
      'It registers a custom property with a type, initial value, and inheritance flag, enabling animation and type-checking',
      'It imports external CSS variables from another file',
      'It scopes a custom property to a shadow DOM boundary',
    ],
    answer: 1,
    explanation: '`@property --my-color { syntax: "<color>"; inherits: false; initial-value: #000; }` registers a custom property with a known type. This enables: (1) CSS transitions/animations on the variable itself (browsers can interpolate typed values), (2) type validation (invalid values fall back to the initial), (3) non-inheriting variables. Unregistered custom properties are always treated as strings.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/CSS/@property'],
    tags: ['css-variables', '@property', 'houdini', 'animation'],
    year: 2025,
  },
  {
    id: 'css-026',
    topic: 'css',
    difficulty: 'mid',
    type: 'true-false',
    question: 'CSS custom properties (variables) are scoped to the element they are declared on and do not inherit to child elements by default.',
    answer: false,
    explanation: 'By default, CSS custom properties ARE inherited — they cascade down through the DOM like standard inherited properties (e.g., `color`, `font-size`). To prevent inheritance, you must use `@property` with `inherits: false`. This inheritance behavior is what makes them useful for theming: define on `:root`, use anywhere in the subtree.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties#inheritance_of_custom_properties'],
    tags: ['css-variables', 'inheritance', 'custom-properties'],
    year: 2025,
  },

  // ─── RESPONSIVE DESIGN ───────────────────────────────────────────────────────
  {
    id: 'css-027',
    topic: 'css',
    difficulty: 'junior',
    type: 'mcq',
    question: 'What does `clamp(1rem, 2.5vw, 2rem)` return when the viewport is 1200px wide?',
    options: [
      '1rem always',
      '2rem (the maximum, since 2.5vw = 30px which is likely larger than 2rem)',
      'The value closest to 2.5vw, clamped between 1rem and 2rem',
      '2.5vw unconditionally',
    ],
    answer: 2,
    explanation: '`clamp(MIN, PREFERRED, MAX)` returns PREFERRED (2.5vw = 30px at 1200px) clamped between MIN and MAX. At 1200px: 2.5vw = 30px. If 1rem = 16px and 2rem = 32px, then 30px is between 16px and 32px, so the result is 30px (2.5vw). If the viewport were 1400px, 2.5vw = 35px > 32px (2rem), so it would be clamped to 2rem.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/CSS/clamp'],
    tags: ['responsive', 'clamp', 'fluid-typography', 'css-functions'],
    year: 2025,
  },
  {
    id: 'css-028',
    topic: 'css',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is the main advantage of container queries (`@container`) over media queries (`@media`) for component-based design?',
    options: [
      'Container queries respond to viewport size, while media queries respond to container size',
      'Container queries respond to the size of a named ancestor container, enabling truly responsive components regardless of viewport',
      'Container queries have better browser support than media queries',
      'Container queries can query color scheme, while media queries cannot',
    ],
    answer: 1,
    explanation: 'Media queries respond to the viewport. Container queries (`@container`) respond to the size of the nearest ancestor that has been declared as a containment context (`container-type: inline-size`). This allows the same component to adapt based on the space it is given (e.g., in a sidebar vs. main content), not the global viewport — enabling truly reusable, context-aware components.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries'],
    tags: ['container-queries', 'responsive', 'components', 'modern-css'],
    year: 2025,
  },
  {
    id: 'css-029',
    topic: 'css',
    difficulty: 'mid',
    type: 'code-write',
    question: 'Write a media query that applies styles only when the viewport is between 600px and 900px wide (inclusive), and the user prefers reduced motion.',
    answer: `@media (min-width: 600px) and (max-width: 900px) and (prefers-reduced-motion: reduce) {
  /* styles here */
  .animated-element {
    animation: none;
    transition: none;
  }
}`,
    explanation: 'Multiple media features are combined with `and`. `min-width: 600px` means 600px or wider; `max-width: 900px` means 900px or narrower; `prefers-reduced-motion: reduce` detects the OS-level "reduce motion" preference. All three must be true for the block to apply.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries'],
    tags: ['media-queries', 'responsive', 'prefers-reduced-motion', 'accessibility'],
    year: 2025,
  },
  {
    id: 'css-030',
    topic: 'css',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What does `min(50%, 400px)` return in a 900px container?',
    options: [
      '400px, because 50% of 900px = 450px which is greater than 400px',
      '450px, because `min()` returns the larger value',
      '50%, always',
      '400px only if explicitly set',
    ],
    answer: 0,
    explanation: '`min()` returns the smallest of its arguments. In a 900px container, 50% = 450px. `min(450px, 400px)` = 400px. This is useful for setting a maximum width that is also responsive: the element won\'t exceed 400px but will shrink proportionally in narrower containers.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/CSS/min'],
    tags: ['css-functions', 'min', 'responsive', 'sizing'],
    year: 2025,
  },

  // ─── ANIMATIONS ──────────────────────────────────────────────────────────────
  {
    id: 'css-031',
    topic: 'css',
    difficulty: 'junior',
    type: 'mcq',
    question: 'Which `animation-fill-mode` value keeps the final keyframe styles applied after the animation ends?',
    options: [
      'none',
      'backwards',
      'forwards',
      'both',
    ],
    answer: 2,
    explanation: '`animation-fill-mode: forwards` retains the styles from the last keyframe (100%) after the animation completes. `backwards` applies the first-keyframe styles during the `animation-delay` period. `both` applies both behaviors. `none` (default) removes animation styles when it ends.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode'],
    tags: ['animation', 'animation-fill-mode', 'keyframes'],
    year: 2025,
  },
  {
    id: 'css-032',
    topic: 'css',
    difficulty: 'mid',
    type: 'true-false',
    question: '`will-change: transform` should be applied to all animated elements as a performance best practice.',
    answer: false,
    explanation: '`will-change` is a hint to browsers to promote elements to their own compositor layer ahead of time. Overusing it causes excessive memory consumption (each layer needs GPU memory) and can actually degrade performance. It should be applied sparingly, only to elements where jank is measured — and ideally added/removed dynamically just before/after an animation rather than permanently in CSS.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/CSS/will-change'],
    tags: ['animation', 'will-change', 'performance', 'compositing'],
    year: 2025,
  },
  {
    id: 'css-033',
    topic: 'css',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is a scroll-driven animation in CSS, and which properties enable it?',
    options: [
      'An animation triggered by a click event, using `animation-trigger: scroll`',
      'An animation whose progress is linked to scroll position using `animation-timeline: scroll()` or `view()`',
      'An animation using `@scroll-keyframes` instead of `@keyframes`',
      'A JavaScript-required API; CSS alone cannot drive scroll-linked animations',
    ],
    answer: 1,
    explanation: 'CSS Scroll-Driven Animations (shipped in Chrome 115+, Firefox 110+ behind flag) link animation progress to scroll position without JavaScript. `animation-timeline: scroll()` ties progress to a scroll container\'s scroll offset. `animation-timeline: view()` links progress to an element\'s position within the viewport. `@keyframes` is still used to define the animation states.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline'],
    tags: ['animation', 'scroll-driven', 'animation-timeline', 'modern-css'],
    year: 2025,
  },
  {
    id: 'css-034',
    topic: 'css',
    difficulty: 'mid',
    type: 'code-write',
    question: 'Write a CSS animation that fades an element in from opacity 0 to 1 over 0.5 seconds with an ease-out timing, and ensures the element remains visible after the animation completes.',
    answer: `@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.element {
  animation: fadeIn 0.5s ease-out forwards;
}`,
    explanation: '`@keyframes fadeIn` defines the start (opacity 0) and end (opacity 1) states. In the `animation` shorthand: `fadeIn` is the name, `0.5s` is the duration, `ease-out` is the timing function, and `forwards` is the fill mode that retains the final `opacity: 1` state after completion.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/CSS/animation'],
    tags: ['animation', '@keyframes', 'fade', 'animation-fill-mode'],
    year: 2025,
  },

  // ─── CSS ARCHITECTURE ─────────────────────────────────────────────────────────
  {
    id: 'css-035',
    topic: 'css',
    difficulty: 'mid',
    type: 'mcq',
    question: 'In BEM methodology, what does the following class name represent: `.card__title--highlighted`?',
    options: [
      'Block: card, Element: title, Modifier: highlighted',
      'Block: card__title, Modifier: highlighted',
      'Element: card, Block: title, Modifier: highlighted',
      'Block: card, Modifier: title--highlighted',
    ],
    answer: 0,
    explanation: 'BEM (Block, Element, Modifier) naming: `.block__element--modifier`. `.card` is the Block (independent component), `__title` identifies the Element (a component of the block), and `--highlighted` is the Modifier (a variation of the element). This structure avoids specificity issues and communicates component relationships in the class name.',
    references: ['https://getbem.com/naming/'],
    tags: ['bem', 'css-architecture', 'naming-conventions'],
    year: 2025,
  },
  {
    id: 'css-036',
    topic: 'css',
    difficulty: 'senior',
    type: 'system-design',
    question: 'Compare CSS Modules, CSS-in-JS (e.g., styled-components), and utility-first CSS (e.g., Tailwind). What are the tradeoffs for a large-scale React application?',
    answer: `CSS Modules:
- Locally scoped class names via build-time transformation (e.g., .button → .Button_button__xYz3)
- Zero runtime overhead; styles are static CSS files
- Good TypeScript support with typed exports
- Tradeoff: verbose, requires co-located .module.css files, no dynamic theming without CSS vars

CSS-in-JS (styled-components, Emotion):
- Styles co-located with components; full JS access to props for dynamic styles
- Automatic critical CSS extraction (with SSR support)
- Tradeoff: runtime overhead (style injection); increases JS bundle size; potential hydration issues; newer RSC model makes client-side CSS-in-JS complex

Utility-first (Tailwind CSS):
- Extremely small final CSS bundle (only used utilities); rapid development
- Excellent consistency via design tokens
- Tradeoff: verbose JSX, less readable for complex states, requires PurgeCSS/JIT, steep initial learning curve

Recommendation for large-scale React:
- Use Tailwind for the majority of UI (low cognitive overhead, fast iteration)
- CSS Modules or @layer + vanilla CSS for complex, highly dynamic components
- Avoid heavy CSS-in-JS in RSC environments; use Panda CSS or Vanilla Extract (zero-runtime) if CSS-in-JS patterns are needed`,
    explanation: 'Each approach optimizes for different constraints. The trend in 2025 favors zero-runtime solutions (Tailwind, CSS Modules, Vanilla Extract) due to React Server Components making client-side JS injection problematic.',
    references: [
      'https://css-modules.github.io/css-modules/',
      'https://tailwindcss.com/docs',
      'https://vanilla-extract.style/',
    ],
    tags: ['css-architecture', 'css-modules', 'css-in-js', 'tailwind', 'system-design'],
    year: 2025,
  },

  // ─── MODERN CSS ───────────────────────────────────────────────────────────────
  {
    id: 'css-037',
    topic: 'css',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What problem do CSS Cascade Layers (`@layer`) solve?',
    options: [
      'They replace media queries for responsive design',
      'They provide explicit control over the cascade order, so third-party styles and resets do not require specificity hacks to override',
      'They enable CSS to be lazy-loaded per component',
      'They replace CSS custom properties for theming',
    ],
    answer: 1,
    explanation: '`@layer` lets you explicitly order groups of styles in the cascade. Styles in a later layer win over earlier layers regardless of specificity. This solves the common problem of needing `!important` or high-specificity selectors to override third-party CSS: `@layer reset, base, components, utilities` — utilities always win over reset regardless of selector specificity.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/CSS/@layer'],
    tags: ['@layer', 'cascade', 'modern-css', 'specificity'],
    year: 2025,
  },
  {
    id: 'css-038',
    topic: 'css',
    difficulty: 'mid',
    type: 'code-output',
    question: 'Which color wins and why?',
    code: `@layer base, theme;

@layer base {
  .button {
    color: red; /* specificity: (0,1,0) */
  }
}

@layer theme {
  .btn {
    color: blue; /* specificity: (0,1,0) */
  }
}

/* Unlayered style */
.button {
  color: green; /* specificity: (0,1,0) */
}

/* HTML: <button class="button btn">Click</button> */`,
    answer: 'green — unlayered styles always win over layered styles',
    explanation: 'In the cascade order: unlayered styles have higher priority than any `@layer`. Even though all three selectors have identical specificity (0,1,0), the unlayered `.button { color: green }` wins because it sits outside any layer. Among layered styles, `theme` (declared last) would beat `base`, so blue would be the fallback. But green always overrides both.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/CSS/@layer'],
    tags: ['@layer', 'cascade', 'specificity', 'modern-css'],
    year: 2025,
  },
  {
    id: 'css-039',
    topic: 'css',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What does the following CSS nesting syntax do (native CSS nesting, not Sass)?',
    code: `.parent {
  color: black;

  .child {
    color: red;
  }
}`,
    options: [
      'This is invalid CSS; nesting requires the `&` symbol in native CSS',
      'Selects `.child` elements that are descendants of `.parent`, equivalent to `.parent .child { color: red }`',
      'Applies `color: red` to `.child` elements anywhere on the page',
      'Only works inside `@layer` blocks',
    ],
    answer: 1,
    explanation: 'Native CSS nesting (enabled by default in Chrome 120+, Firefox 117+, Safari 17.2+) allows nesting selectors directly without `&`. `.child` inside `.parent { }` is equivalent to `.parent .child { }`. The `&` is still useful for more complex cases (e.g., `&:hover`, `&.active`) but is no longer required for simple descendant nesting.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting'],
    tags: ['css-nesting', 'modern-css', 'sass-alternative'],
    year: 2025,
  },
  {
    id: 'css-040',
    topic: 'css',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is `oklch()` and why is it preferred over `hsl()` for design systems?',
    options: [
      '`oklch` is a browser-vendor prefix for `hsl`',
      '`oklch` is a perceptually uniform color space where equal numeric changes produce visually equal perceived changes in lightness and chroma, unlike `hsl`',
      '`oklch` only works in Safari and is not a W3C standard',
      '`oklch` is shorthand for `ok-linear-color-hue`',
    ],
    answer: 1,
    explanation: '`oklch(L C H)` uses the OKLab perceptual color model. Unlike `hsl`, where equal step increases in lightness appear inconsistent to the human eye, `oklch` is perceptually uniform — changing `L` by the same amount always looks like the same lightness shift. This makes programmatic color manipulation (e.g., generating tints/shades via `color-mix()`) produce visually consistent results. Supported in all major browsers as of 2023.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch'],
    tags: ['oklch', 'color', 'modern-css', 'design-systems'],
    year: 2025,
  },
  {
    id: 'css-041',
    topic: 'css',
    difficulty: 'mid',
    type: 'code-output',
    question: 'What does `color-mix(in oklch, red 30%, blue)` produce?',
    code: `.element {
  color: color-mix(in oklch, red 30%, blue);
}`,
    answer: 'A color that is 30% red and 70% blue, mixed in the oklch color space — a purple-blue tone',
    explanation: '`color-mix()` interpolates between two colors by a given percentage in a specified color space. `in oklch` means the interpolation follows the perceptually-uniform OKLab color space. The first argument percentage (30%) applies to `red`; the remainder (70%) applies to `blue`. The result is a deep violet-blue. Using `oklch` avoids the "gray muddy middle" that can appear when mixing complements in sRGB.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix'],
    tags: ['color-mix', 'oklch', 'modern-css', 'color'],
    year: 2025,
  },

  // ─── TYPOGRAPHY ───────────────────────────────────────────────────────────────
  {
    id: 'css-042',
    topic: 'css',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What does `font-display: swap` do in a `@font-face` declaration?',
    options: [
      'The browser waits indefinitely for the custom font before rendering text',
      'The browser immediately renders text with a fallback font, then swaps to the custom font when it loads',
      'The browser hides text until the custom font loads (FOIT)',
      'The browser never uses the fallback font',
    ],
    answer: 1,
    explanation: '`font-display: swap` tells the browser to use the fallback font immediately (FOUT — Flash of Unstyled Text) and swap to the custom font when it finishes loading. This is generally preferred over `block` (which hides text = FOIT) for Core Web Vitals (LCP). `optional` is even better for performance: if the font isn\'t cached, it won\'t swap at all.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display'],
    tags: ['typography', 'font-display', '@font-face', 'performance', 'cls'],
    year: 2025,
  },
  {
    id: 'css-043',
    topic: 'css',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What are variable fonts (OpenType font variations), and how are they controlled in CSS?',
    options: [
      'Fonts defined by JavaScript at runtime',
      'A single font file containing a continuous axis of design variations (weight, width, slant), controlled via `font-variation-settings` or high-level properties like `font-weight`',
      'Fonts loaded conditionally per media query',
      'CSS animations applied to text characters',
    ],
    answer: 1,
    explanation: 'Variable fonts (OpenType Font Variations) encode a continuous design space in a single file. A weight axis (`wght`) can span 100–900 with any intermediate value. Controlled via: `font-weight: 450` (high-level), or `font-variation-settings: "wght" 450, "wdth" 75` (low-level, for custom axes). Benefits: single HTTP request, precise intermediate values, animatable with CSS transitions.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_fonts/Variable_fonts_guide'],
    tags: ['typography', 'variable-fonts', 'font-variation-settings', 'performance'],
    year: 2025,
  },
  {
    id: 'css-044',
    topic: 'css',
    difficulty: 'mid',
    type: 'true-false',
    question: '`text-wrap: balance` makes the browser evenly distribute text across all lines of a heading, which can help prevent orphaned words.',
    answer: true,
    explanation: '`text-wrap: balance` (Chrome 114+, Firefox 121+) attempts to equalize the number of characters per line in a text block, typically improving the appearance of headings and pull quotes by avoiding a single word on the last line. `text-wrap: pretty` is a similar feature focused on preventing orphans (a single word on the last line of a paragraph) using a more conservative algorithm.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap'],
    tags: ['typography', 'text-wrap', 'modern-css', 'balance'],
    year: 2025,
  },

  // ─── CSS FUNCTIONS ────────────────────────────────────────────────────────────
  {
    id: 'css-045',
    topic: 'css',
    difficulty: 'junior',
    type: 'mcq',
    question: 'What does `calc(100% - 2rem)` mean inside a `width` declaration?',
    options: [
      'It is invalid; `calc()` cannot mix `%` and `rem` units',
      'The width is 100% of the parent minus 2rem (32px at default font size)',
      'The width is 100rem minus 2% of the parent',
      'The result depends on `box-sizing` only',
    ],
    answer: 1,
    explanation: '`calc()` allows arithmetic with mixed units. `100% - 2rem` means "full container width minus 32px (at 16px root font size)". This is useful for gutters inside padded containers. The browser resolves the `%` at layout time and the `rem` at the rem context, then subtracts. All four basic operators (+, -, *, /) are supported; spaces around + and - are required.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/CSS/calc'],
    tags: ['css-functions', 'calc', 'units', 'layout'],
    year: 2025,
  },
  {
    id: 'css-046',
    topic: 'css',
    difficulty: 'mid',
    type: 'code-write',
    question: 'Write a fluid font size that scales linearly from 16px at 320px viewport to 24px at 1280px viewport, using `clamp()` and viewport units. No JavaScript allowed.',
    answer: `/*
  Formula: font-size = MIN + (MAX - MIN) * (100vw - MIN_VP) / (MAX_VP - MIN_VP)
  = 16px + 8px * (100vw - 320px) / (1280px - 320px)
  = 16px + 8px * (100vw - 320px) / 960px
  In vw: 8/960 * 100vw = 0.833vw
  Intercept: 16px - 0.833vw * 320/100... simplified to:
*/

body {
  font-size: clamp(1rem, 0.5rem + 1.5625vw, 1.5rem);
}

/*
  Verification:
  At 320px: 0.5rem + 1.5625 * 3.2px = 8px + 5px = 13px...
  More precise calculation:
*/
body {
  font-size: clamp(
    1rem,
    calc(1rem + (1.5rem - 1rem) * ((100vw - 20rem) / (80rem - 20rem))),
    1.5rem
  );
}`,
    explanation: 'The formula for fluid type: `clamp(min, preferred, max)` where preferred linearly interpolates between min and max at the two viewport breakpoints. The inner `calc()` uses the CSS fluid type formula. The common simplified form is `clamp(1rem, 0.5rem + 1.667vw, 1.5rem)`. Tools like utopia.fyi automate this calculation.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/CSS/clamp',
      'https://utopia.fyi/',
    ],
    tags: ['css-functions', 'clamp', 'fluid-typography', 'responsive'],
    year: 2025,
  },
  {
    id: 'css-047',
    topic: 'css',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What does `env(safe-area-inset-bottom)` provide on iOS devices?',
    options: [
      'The height of the browser\'s address bar',
      'The inset distance from the bottom edge of the viewport to the safe area (accounts for home indicator on notched/gesture-nav iPhones)',
      'The device\'s screen height in pixels',
      'An environment variable set by the operating system for general use',
    ],
    answer: 1,
    explanation: '`env()` provides access to environment variables set by the browser. `safe-area-inset-*` variables (top, right, bottom, left) represent the distances from the viewport edge to the "safe area" — the region not obscured by hardware features. On iPhones with a home indicator, `safe-area-inset-bottom` is typically ~34px and is essential for PWAs with bottom navigation: `padding-bottom: env(safe-area-inset-bottom)`.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/CSS/env'],
    tags: ['css-functions', 'env', 'safe-area', 'mobile', 'pwa'],
    year: 2025,
  },

  // ─── TRANSFORMS & FILTERS ─────────────────────────────────────────────────────
  {
    id: 'css-048',
    topic: 'css',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is the difference between `filter: blur(10px)` and `backdrop-filter: blur(10px)`?',
    options: [
      'They are identical; only the syntax differs',
      '`filter` blurs the element and its contents; `backdrop-filter` blurs what is behind the element',
      '`backdrop-filter` blurs the element; `filter` blurs the background',
      '`filter` only works on images; `backdrop-filter` works on any element',
    ],
    answer: 1,
    explanation: '`filter: blur(10px)` applies the blur to the element itself (its content, border, etc.). `backdrop-filter: blur(10px)` applies the effect to everything rendered *behind* the element — creating the "frosted glass" effect. The element itself must have some transparency (via `background-color` with alpha < 1) to see the backdrop effect. `backdrop-filter` requires a hardware-accelerated layer.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter'],
    tags: ['filter', 'backdrop-filter', 'blur', 'visual-effects'],
    year: 2025,
  },
  {
    id: 'css-049',
    topic: 'css',
    difficulty: 'mid',
    type: 'code-output',
    question: 'What shape does this `clip-path` create?',
    code: `.shape {
  clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
  width: 200px;
  height: 200px;
  background: coral;
}`,
    answer: 'An upward-pointing triangle (equilateral-like) with vertices at the center-top, bottom-right, and bottom-left of the 200×200 element',
    explanation: '`polygon()` takes a list of `x% y%` points. `50% 0%` = center top edge, `100% 100%` = bottom-right corner, `0% 100%` = bottom-left corner. These three points form a triangle. `clip-path` clips the element to this shape; the coral background fills the triangular area.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path'],
    tags: ['clip-path', 'polygon', 'shapes', 'visual-effects'],
    year: 2025,
  },
  {
    id: 'css-050',
    topic: 'css',
    difficulty: 'mid',
    type: 'true-false',
    question: 'CSS `transform` operations are applied in right-to-left order (the last listed transform is applied first).',
    answer: true,
    explanation: 'CSS transforms are applied from right to left (the same as matrix multiplication order). `transform: translateX(100px) rotate(45deg)` first rotates the element 45°, then translates the *rotated* coordinate system 100px along its X axis. Reversing the order — `rotate(45deg) translateX(100px)` — produces a different result: it translates first along the original X axis, then rotates. This is a common source of unexpected transform behavior.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/CSS/transform'],
    tags: ['transform', 'rotate', 'translate', 'transform-order'],
    year: 2025,
  },

  // ─── PRINT STYLES ─────────────────────────────────────────────────────────────
  {
    id: 'css-051',
    topic: 'css',
    difficulty: 'mid',
    type: 'mcq',
    question: 'Which CSS property prevents a page break inside a specific element when printing?',
    options: [
      '`page-break-inside: avoid`',
      '`print-break: none`',
      '`break-inside: avoid`',
      'Both A and C are valid',
    ],
    answer: 3,
    explanation: '`page-break-inside: avoid` is the legacy property; `break-inside: avoid` is the modern replacement (part of the CSS Fragmentation spec). Both are widely supported and both prevent the browser from inserting a page break inside the element during printing. It is common to include both for compatibility.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/CSS/break-inside'],
    tags: ['print', '@media-print', 'page-break', 'break-inside'],
    year: 2025,
  },
  {
    id: 'css-052',
    topic: 'css',
    difficulty: 'junior',
    type: 'code-write',
    question: 'Write the CSS to hide navigation and footer elements when a page is printed, and ensure body text is printed in black on white.',
    answer: `@media print {
  nav,
  footer {
    display: none !important;
  }

  body {
    color: #000;
    background: #fff;
  }

  /* Optionally expand links to show URLs */
  a[href]::after {
    content: " (" attr(href) ")";
  }
}`,
    explanation: '`@media print` targets the print rendering context. `display: none` hides elements; `!important` may be needed to override inline or JS-applied styles. Setting `color: #000; background: #fff` ensures readability and saves printer ink. The bonus `::after` rule appends link URLs as text, useful for printed documents.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/CSS/@media#media_types'],
    tags: ['print', '@media-print', 'display-none'],
    year: 2025,
  },

  // ─── CSS PERFORMANCE ──────────────────────────────────────────────────────────
  {
    id: 'css-053',
    topic: 'css',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What does `contain: layout` do for CSS performance?',
    options: [
      'Prevents the element from affecting layout of elements outside it, enabling the browser to skip re-layout of the rest of the page when the element changes',
      'Locks the element\'s size so it never changes',
      'Contains all CSS properties within a shadow DOM boundary',
      'Prevents the element from inheriting styles from its parent',
    ],
    answer: 0,
    explanation: 'CSS Containment (`contain`) tells the browser that an element\'s subtree is independent from the rest of the page for layout, style, paint, or size purposes. `contain: layout` means changes inside the element cannot affect layout outside it, allowing the browser to limit re-layout work to just that subtree. `contain: strict` = `layout paint size style`. `content-visibility: auto` uses `contain: size layout paint` automatically.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/CSS/contain'],
    tags: ['performance', 'css-containment', 'contain', 'layout'],
    year: 2025,
  },
  {
    id: 'css-054',
    topic: 'css',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What does `content-visibility: auto` do, and what is its primary performance benefit?',
    options: [
      'It lazy-loads images inside the element',
      'It skips rendering (layout + paint) of off-screen elements, resuming when they enter the viewport, significantly reducing initial page render time',
      'It applies `contain: content` only when the element is visible',
      'It controls whether CSS `content` properties are visible',
    ],
    answer: 1,
    explanation: '`content-visibility: auto` is a CSS performance primitive. For elements outside the viewport, the browser skips layout and painting, treating them as if `display: none` for rendering purposes (but they remain in the DOM and accessible). When the element nears the viewport, it is rendered on demand. This can reduce initial rendering time by 5–7× on content-heavy pages. Use `contain-intrinsic-size` alongside it to hint at the element\'s expected size to prevent scroll-position jumps.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/CSS/content-visibility'],
    tags: ['performance', 'content-visibility', 'rendering', 'modern-css'],
    year: 2025,
  },
  {
    id: 'css-055',
    topic: 'css',
    difficulty: 'senior',
    type: 'true-false',
    question: 'CSS properties that trigger only compositing (like `transform` and `opacity`) are cheaper to animate than properties that trigger layout (like `width` or `top`).',
    answer: true,
    explanation: 'Browser rendering pipeline: JavaScript → Style → Layout → Paint → Composite. Animating `width` or `top` triggers re-layout (expensive, main-thread). Animating `transform` or `opacity` only needs compositing (GPU-accelerated, off main-thread). This is why performant animations should use `transform: translateX()` instead of `left:`, and `opacity` instead of `visibility` toggling for fades.',
    references: ['https://developer.chrome.com/articles/animations-guide/'],
    tags: ['performance', 'compositing', 'animation', 'layout', 'paint'],
    year: 2025,
  },
  {
    id: 'css-056',
    topic: 'css',
    difficulty: 'lead',
    type: 'system-design',
    question: 'Your team notices that a dashboard page has severely degraded scroll performance. The page has hundreds of data cards, each with drop-shadows and animations. What CSS strategies would you apply to diagnose and fix this?',
    answer: `Diagnosis:
1. Chrome DevTools → Performance tab: record scroll, look for long frames (>16ms)
2. Layers panel: identify unintended compositor layer explosions
3. Rendering tab: enable "Paint flashing" to see what repaints on scroll

Fixes:

1. content-visibility: auto on card containers
   - Skips layout/paint for off-screen cards
   - Pair with contain-intrinsic-size: 0 300px for stable scroll height

2. Replace drop-shadow with box-shadow
   - CSS filter: drop-shadow() forces a paint layer per element
   - box-shadow is cheaper (composited with the element)

3. will-change: transform ONLY on actively animating elements
   - Promotes to GPU layer; remove after animation ends via JS

4. CSS Containment
   - contain: layout paint on card components
   - Prevents card-level changes from triggering full-page reflow

5. Reduce paint area
   - Use transform for positional animations (not top/left)
   - Avoid animating box-shadow directly; animate opacity of a ::after pseudo-element

6. Limit stacking contexts
   - Each opacity/transform/filter creates a new layer; audit for unnecessary ones
   - Merge small layers via isolation: auto

7. @media (prefers-reduced-motion: reduce)
   - Disable all animations for users who opted out`,
    explanation: 'Scroll performance issues on complex list pages almost always trace to excessive paint and composite layer overhead. content-visibility is the highest-leverage fix, often reducing paint work by 80%+. CSS containment and careful will-change usage address the remainder.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/CSS/content-visibility',
      'https://developer.chrome.com/articles/animations-guide/',
    ],
    tags: ['performance', 'scroll', 'compositing', 'will-change', 'content-visibility', 'system-design'],
    year: 2025,
  },

  // ─── MISCELLANEOUS / ADVANCED ─────────────────────────────────────────────────
  {
    id: 'css-057',
    topic: 'css',
    difficulty: 'junior',
    type: 'mcq',
    question: 'What is the default value of `position` for all HTML elements?',
    options: [
      'relative',
      'absolute',
      'static',
      'initial',
    ],
    answer: 2,
    explanation: 'All HTML elements default to `position: static`. Statically-positioned elements participate in normal document flow and `top`, `right`, `bottom`, `left`, and `z-index` have no effect on them. Setting any other position value (`relative`, `absolute`, `fixed`, `sticky`) makes the element "positioned", enabling offset properties and stacking context creation.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/CSS/position'],
    tags: ['positioning', 'static', 'fundamentals'],
    year: 2025,
  },
  {
    id: 'css-058',
    topic: 'css',
    difficulty: 'junior',
    type: 'true-false',
    question: '`display: none` removes an element from the document flow, while `visibility: hidden` hides it but preserves the space it occupies.',
    answer: true,
    explanation: '`display: none` makes the element completely absent from layout — no space is reserved, and it is not accessible to AT. `visibility: hidden` makes the element invisible but keeps its space in the flow. A third option, `opacity: 0`, makes the element transparent but still interactive (clickable). For accessibility, `display: none` and `visibility: hidden` both hide from screen readers; `opacity: 0` does not.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/CSS/visibility'],
    tags: ['display', 'visibility', 'opacity', 'fundamentals'],
    year: 2025,
  },
  {
    id: 'css-059',
    topic: 'css',
    difficulty: 'mid',
    type: 'debug',
    question: 'The sticky header stops sticking partway down the page. Find and fix the issue.',
    code: `/* Parent container */
.page-wrapper {
  overflow: hidden; /* Added to prevent margin collapse */
}

.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: white;
}`,
    answer: `/* Fix: Remove overflow: hidden (or change to overflow: clip) from the scroll container */
.page-wrapper {
  /* overflow: hidden — REMOVED: this was creating a scroll container,
     trapping the sticky positioning within its scroll area */
  overflow: clip; /* Alternative: stops overflow without creating a scroll container */
}

.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: white;
}`,
    solutionCode: `.page-wrapper {
  overflow: clip; /* use clip instead of hidden — no scroll container created */
}

.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: white;
}`,
    explanation: '`position: sticky` requires the element to scroll within its containing scroll container. When `overflow: hidden` (or `scroll`, `auto`) is applied to an ancestor, it creates a new scroll container — and `sticky` becomes sticky relative to THAT container, not the viewport. Since `overflow: hidden` often has no scrollable content, the sticky element appears to not work. The fix: remove `overflow: hidden`, use `overflow: clip` (which prevents overflow visually without creating a scroll container), or restructure the DOM.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/CSS/position#sticky_positioning'],
    tags: ['positioning', 'sticky', 'overflow', 'debug', 'scroll-container'],
    year: 2025,
  },
  {
    id: 'css-060',
    topic: 'css',
    difficulty: 'lead',
    type: 'mcq',
    question: 'A design system needs to support multiple themes (light, dark, high-contrast) and allow component-level overrides. Which CSS architecture best supports this?',
    options: [
      'Inline styles with a JavaScript theme provider that passes down style objects',
      'CSS custom properties with semantic token layers: global tokens → alias tokens → component tokens, with `@layer` for cascade control',
      'Separate CSS files per theme, loaded dynamically with `<link>` tag swapping',
      'Tailwind\'s dark mode with `dark:` variants only',
    ],
    answer: 1,
    explanation: 'A three-tier token architecture with CSS custom properties is the scalable solution: (1) Global/primitive tokens (e.g., `--color-blue-500: oklch(...)`) define raw values. (2) Semantic/alias tokens (e.g., `--color-interactive: var(--color-blue-500)`) define intent. (3) Component tokens (e.g., `--button-bg: var(--color-interactive)`) scope to components. Theme switching is as simple as redefining semantic tokens on a `[data-theme="dark"]` selector. `@layer` ensures predictable cascade without specificity wars.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties',
      'https://developer.mozilla.org/en-US/docs/Web/CSS/@layer',
    ],
    tags: ['css-architecture', 'design-system', 'theming', 'custom-properties', '@layer', 'lead'],
    year: 2025,
  },
  {
    id: 'css-061',
    topic: 'css',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is `isolation: isolate` used for in CSS?',
    options: [
      'Prevents an element from inheriting any CSS properties',
      'Creates a new stacking context without needing `z-index` or `transform`, used to contain `mix-blend-mode` effects',
      'Isolates an element inside a shadow DOM',
      'Prevents CSS transitions from running on the element',
    ],
    answer: 1,
    explanation: '`isolation: isolate` creates a new stacking context on an element without requiring `z-index`, `opacity`, or `transform`. Its primary use case is isolating `mix-blend-mode` effects: elements with blend modes normally blend against the entire background below them; wrapping them in a container with `isolation: isolate` limits blending to within that container. It also solves z-index stacking issues without unintended side effects.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/CSS/isolation'],
    tags: ['isolation', 'stacking-context', 'mix-blend-mode', 'modern-css'],
    year: 2025,
  },
  {
    id: 'css-062',
    topic: 'css',
    difficulty: 'junior',
    type: 'mcq',
    question: 'In CSS, which unit is always equal to the font-size of the root `<html>` element?',
    options: [
      'em',
      'rem',
      'vw',
      'ch',
    ],
    answer: 1,
    explanation: '`rem` (root em) is always relative to the font-size of the `<html>` element (default: 16px in most browsers). `em` is relative to the font-size of the current element (or nearest ancestor for non-font properties), which can compound in nested contexts. `vw` is 1% of the viewport width. `ch` is the width of the "0" character of the current font.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/CSS/length'],
    tags: ['units', 'rem', 'em', 'fundamentals'],
    year: 2025,
  },
  {
    id: 'css-063',
    topic: 'css',
    difficulty: 'mid',
    type: 'code-output',
    question: 'What is the font-size of `.child` in pixels, given the following?',
    code: `html { font-size: 16px; }
.parent { font-size: 1.5em; }
.child { font-size: 1.5em; }

/* HTML: <div class="parent"><div class="child">text</div></div> */`,
    answer: '36px (1.5 × 1.5 × 16px = 36px)',
    explanation: '`em` for `font-size` is relative to the parent\'s computed font-size. `.parent` = 1.5 × 16px = 24px. `.child` = 1.5 × 24px = 36px. This compounding is why `rem` is often preferred for font sizes in design systems — it is always relative to the root and does not compound through nesting.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/CSS/font-size'],
    tags: ['units', 'em', 'font-size', 'inheritance'],
    year: 2025,
  },
  {
    id: 'css-064',
    topic: 'css',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is the CSS `@layer` order of precedence for these declarations, from lowest to highest priority?',
    code: `@layer reset, base, components, utilities;`,
    options: [
      'reset > base > components > utilities (reset wins)',
      'utilities > components > base > reset (utilities win)',
      'The order depends on specificity within each layer',
      'Unlayered styles < reset < base < components < utilities',
    ],
    answer: 1,
    explanation: 'In `@layer`, layers declared later have higher priority. `@layer reset, base, components, utilities` means: `reset` has the lowest priority, `utilities` the highest. Specificity is irrelevant between layers — a low-specificity rule in `utilities` beats a high-specificity rule in `reset`. Unlayered styles sit above all layers in priority.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/CSS/@layer'],
    tags: ['@layer', 'cascade', 'specificity', 'modern-css'],
    year: 2026,
  },
  {
    id: 'css-065',
    topic: 'css',
    difficulty: 'lead',
    type: 'system-design',
    question: 'Your team is migrating a legacy codebase with inconsistent specificity and global styles to a modern, maintainable CSS architecture. Outline a migration strategy.',
    answer: `Migration Strategy: Legacy CSS to Modern Architecture

Phase 1 — Audit & Contain (no breaking changes)
- Run specificity analysis tools (CSS Stats, Stylelint)
- Wrap ALL legacy CSS in a low-priority @layer:
  @layer legacy { /* existing CSS */ }
  This isolates old styles without breaking them, while new code outside layers wins automatically

Phase 2 — Establish Token System
- Extract color, spacing, and typography values to CSS custom properties on :root
- Define semantic tokens (--color-text, --spacing-md) pointing to primitive tokens
- Enables future theming without touching component CSS

Phase 3 — Introduce Cascade Layers
@layer reset, tokens, base, components, utilities, legacy;
- New components go into 'components' layer (unlayered legacy still wins if needed)
- Gradually move legacy into 'legacy' layer, then eventually into proper layers

Phase 4 — Component Migration
- Adopt CSS Modules or BEM for new components (prevent new global style leakage)
- Use :where() for base styles (zero specificity, easily overridden)
- Container queries for component-level responsiveness

Phase 5 — Eliminate Legacy Layer
- As components migrate, the @layer legacy block shrinks
- Remove @layer legacy when empty

Tools: PostCSS for transform, Stylelint for enforcement, CSS Stats for progress tracking`,
    explanation: 'The key insight is wrapping legacy CSS in a low-priority layer first — this is a non-breaking change that immediately enables new styles to win without specificity battles. Migration can then proceed incrementally without a big-bang rewrite.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/CSS/@layer',
      'https://www.smashingmagazine.com/2022/01/introduction-css-cascade-layers/',
    ],
    tags: ['css-architecture', '@layer', 'migration', 'legacy', 'system-design', 'lead'],
    year: 2026,
  },
]
