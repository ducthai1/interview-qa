import type { Question } from '../types'

export const accessibilityQuestions: Question[] = [
  {
    id: 'a11y-001',
    topic: 'accessibility',
    difficulty: 'junior',
    type: 'mcq',
    question: 'What does ARIA stand for in web accessibility?',
    options: [
      'Automated Responsive Interface Architecture',
      'Accessible Rich Internet Applications',
      'Advanced Rendering Integration API',
      'Assistive Reader Interface Addon',
    ],
    answer: 1,
    explanation: 'ARIA (Accessible Rich Internet Applications) is a set of HTML attributes that define ways to make web content more accessible to people with disabilities. ARIA attributes supplement native HTML semantics when widgets or interactions cant be expressed with standard HTML elements. Key principle: "No ARIA is better than bad ARIA" — always prefer native semantic HTML elements over ARIA when possible.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA'],
    tags: ['aria', 'basics', 'wcag'],
    year: 2025,
  },
  {
    id: 'a11y-002',
    topic: 'accessibility',
    difficulty: 'junior',
    type: 'true-false',
    question: 'Using `<div onclick="...">` is equivalent to `<button onclick="...">` for accessibility.',
    answer: false,
    explanation: 'A <div> with onclick is NOT accessible by default. A <button> provides: 1) Keyboard activation (Enter/Space). 2) Focus management (tabbable by default). 3) Screen reader announcement as "button". 4) ARIA role="button" implicitly. To make a <div> equivalent, you need: role="button", tabindex="0", onKeyDown handler for Enter/Space, and cursor: pointer styling. This is far more work than just using <button>. The first rule of ARIA: dont use ARIA when a native HTML element already provides the semantics.',
    tags: ['semantic-html', 'button', 'keyboard', 'screen-reader'],
    year: 2025,
  },
  {
    id: 'a11y-003',
    topic: 'accessibility',
    difficulty: 'mid',
    type: 'mcq',
    question: 'Which WCAG 2.1 conformance level is typically required for legal compliance in most countries?',
    options: [
      'Level A only',
      'Level AA',
      'Level AAA',
      'No specific level is required',
    ],
    answer: 1,
    explanation: 'WCAG Level AA is the standard required by most accessibility laws: ADA (US), EN 301 549 (EU), Accessibility Regulations (UK). Level A covers the absolute minimum (like text alternatives for images). Level AA adds requirements like color contrast (4.5:1 for normal text), resize to 200%, and keyboard navigation. Level AAA is the gold standard but is not required by law and is often impractical to achieve for all content (e.g., 7:1 contrast ratio, sign language interpretation).',
    references: ['https://www.w3.org/WAI/WCAG21/quickref/'],
    tags: ['wcag', 'compliance', 'level-aa', 'legal'],
    year: 2025,
  },
  {
    id: 'a11y-004',
    topic: 'accessibility',
    difficulty: 'mid',
    type: 'code-output',
    question: 'What accessibility issue exists in this React component?',
    code: `function ProductCard({ product }) {
  return (
    <div onClick={() => navigate(\`/product/\${product.id}\`)}>
      <img src={product.image} />
      <span style={{ color: '#aaa', backgroundColor: '#fff' }}>
        {product.name}
      </span>
      <span>{product.price}</span>
    </div>
  )
}`,
    answer: 'Multiple issues: 1) img missing alt attribute, 2) div with onClick not keyboard accessible, 3) color contrast ratio of #aaa on #fff is only 2.32:1 (fails WCAG AA 4.5:1), 4) no semantic link/button element for navigation.',
    explanation: 'Fixes: 1) Add alt={product.name} to the img. 2) Replace div with <Link> or <a> element for navigation (provides keyboard access, screen reader announcement, and right-click/open-in-new-tab). 3) Change text color to at least #767676 for 4.5:1 contrast on white background. 4) Use semantic HTML — this is a link since it navigates, so use an anchor element or React Router Link component.',
    tags: ['alt-text', 'contrast', 'semantic-html', 'keyboard'],
    year: 2025,
  },
  {
    id: 'a11y-005',
    topic: 'accessibility',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is the correct way to implement a custom dropdown/select component that is accessible?',
    options: [
      'Use divs with click handlers and aria-expanded',
      'Use the native <select> element with CSS customization',
      'Use role="listbox" with role="option" children, aria-expanded, aria-activedescendant, and full keyboard support',
      'Use a <ul> with <li> items and JavaScript',
    ],
    answer: 2,
    explanation: 'An accessible custom dropdown requires: 1) Trigger button with aria-haspopup="listbox" and aria-expanded. 2) Listbox container with role="listbox". 3) Options with role="option" and aria-selected. 4) aria-activedescendant on the listbox pointing to the focused option. 5) Full keyboard support: Arrow keys to navigate, Enter/Space to select, Escape to close, Home/End for first/last, type-ahead search. 6) Focus management — focus returns to trigger on close. This is complex, which is why libraries like Radix UI, React Aria, and Headless UI exist — they implement the ARIA patterns correctly.',
    references: ['https://www.w3.org/WAI/ARIA/apg/patterns/listbox/'],
    tags: ['listbox', 'aria-expanded', 'aria-activedescendant', 'keyboard'],
    year: 2025,
  },
  {
    id: 'a11y-006',
    topic: 'accessibility',
    difficulty: 'junior',
    type: 'mcq',
    question: 'What is the purpose of the `alt` attribute on an `<img>` element?',
    options: [
      'To show a tooltip when hovering over the image',
      'To provide a text description for screen readers and when the image fails to load',
      'To improve SEO ranking only',
      'To set the image file name',
    ],
    answer: 1,
    explanation: 'The alt attribute provides alternative text that: 1) Is read by screen readers to describe the image to visually impaired users. 2) Displays when the image fails to load. 3) Helps search engines understand image content (SEO benefit). For decorative images that add no information, use alt="" (empty string) so screen readers skip them. Never omit the alt attribute entirely — that causes screen readers to read the file name. Write descriptive alt text: "Golden retriever playing fetch in a park" not "image" or "photo".',
    references: ['https://www.w3.org/WAI/tutorials/images/'],
    tags: ['alt-text', 'images', 'screen-reader'],
    year: 2025,
  },
  {
    id: 'a11y-007',
    topic: 'accessibility',
    difficulty: 'mid',
    type: 'true-false',
    question: 'aria-hidden="true" removes an element from both the accessibility tree and the visual layout.',
    answer: false,
    explanation: 'aria-hidden="true" removes the element from the accessibility tree only — screen readers will not announce it. The element remains visually visible and interactive. This is useful for decorative elements (icons next to text labels) or duplicated content. Important: never use aria-hidden on focusable elements — this creates a confusing experience where keyboard users can focus on something screen reader users cant perceive. If you want to hide visually too, use CSS display:none or visibility:hidden, which automatically remove from both visual and accessibility tree.',
    tags: ['aria-hidden', 'accessibility-tree', 'decorative'],
    year: 2025,
  },
  {
    id: 'a11y-008',
    topic: 'accessibility',
    difficulty: 'senior',
    type: 'mcq',
    question: 'How should focus be managed when opening and closing a modal dialog in a React application?',
    options: [
      'Do nothing — the browser handles focus automatically',
      'Move focus to the modal on open, trap focus inside it, and return focus to the trigger element on close',
      'Always focus the first input in the modal',
      'Use autofocus on the close button',
    ],
    answer: 1,
    explanation: 'Proper modal focus management: 1) On open: move focus to the modal (or its first focusable element). 2) Focus trap: Tab/Shift+Tab should cycle only within the modal, not reach elements behind it. 3) On close: return focus to the element that triggered the modal opening. 4) Escape key should close the modal. 5) The modal needs role="dialog", aria-modal="true", and aria-labelledby pointing to its title. 6) Background content should have aria-hidden="true" and inert attribute. Libraries like Radix Dialog and React Aria handle all of this. The HTML <dialog> element provides some of this natively.',
    references: ['https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/'],
    tags: ['focus-management', 'focus-trap', 'modal', 'dialog'],
    year: 2025,
  },
  {
    id: 'a11y-009',
    topic: 'accessibility',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is a "skip link" and why is it important?',
    options: [
      'A link that skips animations for users with motion sensitivity',
      'A hidden link at the top of the page that allows keyboard users to skip repetitive navigation and jump to main content',
      'A link that skips the loading screen',
      'A link that removes ads from the page',
    ],
    answer: 1,
    explanation: 'A skip link is typically the first focusable element on a page, hidden until focused (visible on Tab press). It links to the main content area (#main-content), allowing keyboard and screen reader users to bypass repetitive navigation that appears on every page. Without it, users must Tab through every nav link on every page load. Implementation: visually hidden by default, becomes visible on :focus, links to the main content landmark. Example: <a href="#main" class="sr-only focus:not-sr-only">Skip to content</a>.',
    references: ['https://www.w3.org/WAI/WCAG21/Techniques/general/G1'],
    tags: ['skip-link', 'keyboard-navigation', 'landmarks'],
    year: 2025,
  },
  {
    id: 'a11y-010',
    topic: 'accessibility',
    difficulty: 'senior',
    type: 'debug',
    question: 'Find and fix the accessibility issues in this form component:',
    code: `function LoginForm() {
  return (
    <form>
      <div>Username</div>
      <input type="text" placeholder="Enter username" />
      <div>Password</div>
      <input type="password" placeholder="Enter password" />
      <div style={{ color: 'red' }}>Error: Invalid credentials</div>
      <div onClick={() => submit()}>Submit</div>
    </form>
  )
}`,
    answer: 'Issues: 1) Labels not associated with inputs (use <label htmlFor>), 2) Error message not linked to inputs (use aria-describedby + aria-invalid), 3) Submit is a div, not a <button type="submit">, 4) Placeholder is not a substitute for labels, 5) Error not announced to screen readers (use role="alert" or aria-live).',
    solutionCode: `function LoginForm() {
  return (
    <form>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        placeholder="Enter username"
        aria-invalid="true"
        aria-describedby="error-msg"
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        placeholder="Enter password"
        aria-invalid="true"
        aria-describedby="error-msg"
      />
      <div id="error-msg" role="alert" style={{ color: 'red' }}>
        Error: Invalid credentials
      </div>
      <button type="submit" onClick={() => submit()}>Submit</button>
    </form>
  )
}`,
    explanation: 'Fixed version should use: <label htmlFor="username">Username</label> with <input id="username" aria-invalid="true" aria-describedby="error-msg" />. Error div should have role="alert" id="error-msg" for live announcement. Submit should be <button type="submit">. Labels must be programmatically associated via htmlFor/id pair — visual proximity alone doesnt work for screen readers. Placeholders disappear on input and have low contrast, so they should supplement labels, not replace them.',
    tags: ['form', 'label', 'aria-invalid', 'role-alert', 'button'],
    year: 2025,
  },
  {
    id: 'a11y-011',
    topic: 'accessibility',
    difficulty: 'mid',
    type: 'true-false',
    question: 'Using only color to convey information (e.g., red text for errors) meets WCAG accessibility guidelines.',
    answer: false,
    explanation: 'WCAG 1.4.1 "Use of Color" requires that color is not the sole means of conveying information. Color-blind users (8% of males) may not distinguish red from green. Solutions: combine color with other indicators like icons (error icon), text ("Error:"), borders, underlines, or patterns. For example, form errors should have: red color + error icon + descriptive text + aria-invalid attribute. Charts should use patterns/labels in addition to colors. This also helps in black-and-white printing and low-contrast screen settings.',
    references: ['https://www.w3.org/WAI/WCAG21/Understanding/use-of-color'],
    tags: ['color', 'wcag-1.4.1', 'color-blind', 'indicators'],
    year: 2025,
  },
  {
    id: 'a11y-012',
    topic: 'accessibility',
    difficulty: 'junior',
    type: 'mcq',
    question: 'Which HTML element should be used for the main navigation of a website?',
    options: [
      '<div class="nav">',
      '<nav>',
      '<header>',
      '<menu>',
    ],
    answer: 1,
    explanation: 'The <nav> element is the semantic HTML element for navigation sections. It automatically provides the "navigation" landmark role for screen readers, allowing users to jump directly to navigation using landmark shortcuts. Use <nav aria-label="Main navigation"> for the primary nav and <nav aria-label="Footer navigation"> for secondary navigation to distinguish them. Screen readers like VoiceOver announce "navigation" landmark and users can list all landmarks on a page to quickly navigate.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav'],
    tags: ['semantic-html', 'nav', 'landmarks', 'screen-reader'],
    year: 2025,
  },
  {
    id: 'a11y-013',
    topic: 'accessibility',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is the `aria-live` attribute used for, and what are its values?',
    options: [
      'It makes elements animate — values: fast, slow, none',
      'It creates live regions that announce dynamic content changes to screen readers — values: off, polite, assertive',
      'It enables real-time collaboration — values: sync, async',
      'It controls element visibility — values: visible, hidden',
    ],
    answer: 1,
    explanation: 'aria-live creates "live regions" that screen readers monitor for changes. When content inside changes dynamically, the screen reader announces the update. Values: "off" (default, no announcements), "polite" (announces when the user is idle — for non-urgent updates like chat messages), "assertive" (interrupts current speech — for urgent alerts like errors). Use role="alert" (implies aria-live="assertive") for errors. Use role="status" (implies aria-live="polite") for status messages. Add aria-atomic="true" if the entire region should be re-read on any change.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions'],
    tags: ['aria-live', 'live-regions', 'polite', 'assertive', 'dynamic-content'],
    year: 2025,
  },
  {
    id: 'a11y-014',
    topic: 'accessibility',
    difficulty: 'mid',
    type: 'true-false',
    question: 'The HTML `<table>` element should never be used for layout purposes — it should only be used for tabular data.',
    answer: true,
    explanation: 'Tables should only be used for presenting tabular data (spreadsheets, comparison charts, data grids). Using tables for layout causes screen readers to announce "table with X rows and Y columns" and navigate cell-by-cell, which is confusing when the content isnt actually tabular. Screen readers also announce row/column headers which are meaningless for layout tables. Use CSS Flexbox or Grid for layout instead. If you must use a table for layout (legacy reasons), add role="presentation" to remove the table semantics from the accessibility tree.',
    tags: ['table', 'layout', 'semantic-html', 'css-grid'],
    year: 2025,
  },
  {
    id: 'a11y-015',
    topic: 'accessibility',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What CSS technique is used to visually hide content while keeping it accessible to screen readers?',
    options: [
      'display: none',
      'visibility: hidden',
      'A sr-only class with position:absolute, width:1px, height:1px, overflow:hidden, clip-path',
      'opacity: 0',
    ],
    answer: 2,
    explanation: 'The "sr-only" (screen-reader only) technique uses CSS to visually hide content while keeping it in the accessibility tree. display:none and visibility:hidden remove from BOTH visual and accessibility tree. opacity:0 leaves the element taking up space and still clickable. The sr-only pattern: position:absolute, width:1px, height:1px, padding:0, margin:-1px, overflow:hidden, clip-path:inset(50%), white-space:nowrap, border:0. TailwindCSS provides this as the "sr-only" utility class. Use for: skip links, icon button labels, table headers, additional context.',
    references: ['https://tailwindcss.com/docs/screen-readers'],
    tags: ['sr-only', 'visually-hidden', 'css', 'screen-reader'],
    year: 2025,
  },
  {
    id: 'a11y-016',
    topic: 'accessibility',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is the `inert` HTML attribute and how does it improve accessibility?',
    options: [
      'It makes elements read-only',
      'It removes an element and all its descendants from focus order, click events, and the accessibility tree',
      'It slows down animations',
      'It prevents JavaScript from modifying the element',
    ],
    answer: 1,
    explanation: 'The `inert` attribute (now supported in all major browsers) makes an element and all descendants non-interactive: not focusable, not clickable, not findable by screen readers, and not selectable. Its perfect for: 1) Background content behind an open modal (replaces aria-hidden + tabindex management). 2) Off-screen mobile navigation panels. 3) Collapsed accordion content. 4) Previous/next steps in a multi-step form. Before inert, you had to manually manage aria-hidden and tabindex=-1 on every focusable element — inert does it all with one attribute.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inert'],
    tags: ['inert', 'focus-management', 'modal', 'html-attribute'],
    year: 2026,
  },
  {
    id: 'a11y-017',
    topic: 'accessibility',
    difficulty: 'junior',
    type: 'true-false',
    question: 'Accessibility testing can be fully automated — you dont need manual testing with screen readers.',
    answer: false,
    explanation: 'Automated tools (axe-core, Lighthouse, eslint-plugin-jsx-a11y) can catch about 30-40% of accessibility issues — things like missing alt text, low contrast, missing labels. But they CANNOT catch: 1) Whether alt text is meaningful (not just "image"). 2) Whether focus order makes logical sense. 3) Whether screen reader announcements are understandable. 4) Whether keyboard interactions feel natural. 5) Whether the overall user experience works for disabled users. Manual testing with actual screen readers (VoiceOver, NVDA, JAWS) and keyboard-only navigation is essential. Ideally, include disabled users in your testing process.',
    tags: ['automated-testing', 'manual-testing', 'screen-reader', 'axe'],
    year: 2025,
  },
  {
    id: 'a11y-018',
    topic: 'accessibility',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is the minimum color contrast ratio required by WCAG 2.1 Level AA for normal text?',
    options: [
      '2:1',
      '3:1',
      '4.5:1',
      '7:1',
    ],
    answer: 2,
    explanation: 'WCAG 2.1 Level AA requires: 4.5:1 contrast ratio for normal text (under 18pt or 14pt bold) and 3:1 for large text (18pt+ or 14pt+ bold). Level AAA requires 7:1 for normal and 4.5:1 for large text. UI components and graphical objects need 3:1. Tools to check: Chrome DevTools (inspect > contrast ratio), WebAIM Contrast Checker, Figma plugins. Common failures: light gray text on white, placeholder text, disabled button text. Note: decorative text and logos are exempt.',
    references: ['https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum'],
    tags: ['contrast', 'wcag-1.4.3', 'color', 'level-aa'],
    year: 2025,
  },
  {
    id: 'a11y-019',
    topic: 'accessibility',
    difficulty: 'senior',
    type: 'mcq',
    question: 'Which React library provides the most comprehensive accessible UI primitives (headless components with built-in ARIA patterns)?',
    options: [
      'Material UI (MUI)',
      'React Aria (Adobe) / Radix UI',
      'Bootstrap React',
      'Ant Design',
    ],
    answer: 1,
    explanation: 'React Aria (by Adobe) and Radix UI provide headless (unstyled) accessible primitives. React Aria implements every WAI-ARIA design pattern with full keyboard, screen reader, and touch support. It handles focus management, ARIA attributes, and internationalization automatically. Radix UI provides similar functionality with a simpler API. Both are headless — you provide the styling. This contrasts with styled libraries (MUI, Ant Design) which bundle opinions about appearance. For maximum accessibility with design freedom, headless primitives + your own styles (TailwindCSS) is the recommended approach.',
    references: ['https://react-spectrum.adobe.com/react-aria/'],
    tags: ['react-aria', 'radix-ui', 'headless', 'primitives'],
    year: 2025,
  },
  {
    id: 'a11y-020',
    topic: 'accessibility',
    difficulty: 'mid',
    type: 'true-false',
    question: 'The prefers-reduced-motion CSS media query should be used to disable ALL animations for users who request it.',
    answer: false,
    explanation: 'prefers-reduced-motion should reduce or simplify animations, not necessarily eliminate all of them. Some animations aid understanding (a drawer sliding open vs instantly appearing). Best practice: 1) Remove decorative/gratuitous animations. 2) Simplify essential animations (reduce distance, duration). 3) Replace motion with opacity transitions. CSS: @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; } } is too aggressive. Better: selectively adjust specific animations while keeping functional feedback.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion'],
    tags: ['prefers-reduced-motion', 'animation', 'vestibular', 'css-media-query'],
    year: 2025,
  },
  {
    id: 'a11y-021',
    topic: 'accessibility',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What are the new success criteria introduced in WCAG 2.2 that were not present in WCAG 2.1?',
    options: [
      'WCAG 2.2 only updated existing criteria — it added no new ones',
      'WCAG 2.2 added: 2.4.11 Focus Not Obscured (Minimum), 2.4.12 Focus Not Obscured (Enhanced), 2.4.13 Focus Appearance, 2.5.7 Dragging Movements, 2.5.8 Target Size (Minimum, 24x24 CSS pixels), 3.2.6 Consistent Help, 3.3.7 Redundant Entry, 3.3.8 Accessible Authentication (Minimum), 3.3.9 Accessible Authentication (Enhanced).',
      'WCAG 2.2 only added criteria for mobile and touch devices',
      'WCAG 2.2 added voice control and AI-powered accessibility requirements',
    ],
    answer: 1,
    explanation: 'WCAG 2.2 (October 2023) key new criteria: (1) 2.4.11 Focus Not Obscured (Minimum, AA): focus indicator must not be entirely hidden by other content. (2) 2.4.12 Focus Not Obscured (Enhanced, AAA). (3) 2.5.7 Dragging Movements (AA): drag interactions must have single-pointer alternatives. (4) 2.5.8 Target Size Minimum (AA): interactive targets must be at least 24x24 CSS pixels. (5) 3.3.8 Accessible Authentication (AA): CAPTCHAs must have alternatives, copy/paste must work on auth fields. Note: 2.4.11 Focus Appearance was in earlier drafts but removed from the final recommendation. 4.1.1 Parsing was also removed.',
    references: ['https://www.w3.org/TR/WCAG22/'],
    tags: ['wcag-2.2', 'focus-appearance', 'target-size', 'dragging', 'authentication'],
    year: 2025,
  },
  {
    id: 'a11y-022',
    topic: 'accessibility',
    difficulty: 'senior',
    type: 'mcq',
    question: 'How do you implement accessible drag and drop that satisfies WCAG 2.2 Success Criterion 2.5.7 (Dragging Movements)?',
    options: [
      'Add a title attribute to draggable elements explaining how to drag',
      'Provide a pointer-based single-click alternative for all drag operations: e.g., a "Move" button that opens a menu of valid drop targets, or arrow key support (keyboard drag). The drag gesture must not be the only way to perform the action. Use aria-grabbed (deprecated but still used), role="application" with keyboard event handlers, and clear instructions.',
      'Drag and drop is inherently inaccessible and should be avoided entirely',
      'Using the HTML5 draggable attribute automatically makes drag and drop accessible',
    ],
    answer: 1,
    explanation: 'WCAG 2.5.7 compliant drag-and-drop: (1) Alternative action: "Move to" button on each draggable item opens a dialog or menu listing valid drop targets — pure pointer, no drag gesture needed. (2) Keyboard support: focus the item → Space to "pick up" → arrow keys to navigate to destination → Space/Enter to drop → Escape to cancel. Announce state with aria-live: "Item picked up. Use arrow keys to move." (3) React DnD and dnd-kit provide keyboard support hooks. (4) Visual feedback: use aria-describedby to explain keyboard interaction on first focus. The HTML5 drag API is not keyboard accessible — always supplement it.',
    tags: ['drag-and-drop', 'wcag-2.5.7', 'keyboard', 'aria', 'wcag-2.2'],
    year: 2025,
  },
  {
    id: 'a11y-023',
    topic: 'accessibility',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What ARIA attributes are required for an accessible complex data table with multi-level column headers and row groups?',
    options: [
      'Just use <table> with <th> elements — no ARIA is needed',
      'Use scope="col"/"row" on <th> elements, id+headers attributes for complex spanning headers, <caption> for table title, role="rowgroup" is implicit on <thead>/<tbody>, and aria-labelledby if the caption is external. For very complex tables with nested headers, use id/headers associations explicitly.',
      'Replace complex tables with a list of key-value pairs',
      'Use role="grid" for all data tables',
    ],
    answer: 1,
    explanation: 'Accessible complex table markup: (1) <caption>: programmatic table name read by screen readers before any data. (2) scope="col" on column headers, scope="row" on row headers — tells screen readers which data cells they label. (3) colspan/rowspan spanning headers: add id to each <th> and headers="id1 id2" on the corresponding <td> cells — screen readers read all applicable headers for each cell. (4) Row groups: <thead>, <tbody>, <tfoot> provide implicit rowgroup roles — add summary of each group via aria-label on <tbody> for complex tables. (5) Sortable headers: aria-sort="ascending|descending|none" on sortable <th>.',
    tags: ['table', 'scope', 'headers', 'aria', 'complex-table'],
    year: 2025,
  },
  {
    id: 'a11y-024',
    topic: 'accessibility',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is the correct approach for accessible toast/notification messages, and when should you use aria-live="polite" vs aria-live="assertive"?',
    options: [
      'All notifications should use role="alert" to ensure they are always announced',
      'Use aria-live="polite" (or role="status") for non-urgent notifications (success, info, cart updated) — announced when the user finishes their current action. Use aria-live="assertive" (or role="alert") only for urgent, error notifications that require immediate attention and justify interrupting the user.',
      'Toasts do not need ARIA attributes because they are visually obvious',
      'Use aria-live="off" so screen readers do not duplicate toast content',
    ],
    answer: 1,
    explanation: 'Toast accessibility guidelines: (1) role="status" (polite): "Item added to cart", "Settings saved" — low priority, waits for idle moment. (2) role="alert" (assertive): "Error: payment failed", "Session expiring in 60 seconds" — high priority, interrupts immediately. (3) Live region must exist in the DOM before content is injected — do not dynamically create the live region with content at the same time; mount an empty container on app load. (4) Toast auto-dismiss: ensure minimum display time (WCAG 2.2.1 Timing Adjustable) or provide a way to disable auto-dismiss. (5) Keep messages concise — screen readers read the full content on each update.',
    references: ['https://www.w3.org/WAI/ARIA/apg/patterns/alert/'],
    tags: ['aria-live', 'toast', 'notifications', 'role-alert', 'role-status'],
    year: 2025,
  },
  {
    id: 'a11y-025',
    topic: 'accessibility',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What are the accessibility requirements for an image carousel/slider with auto-advancing slides?',
    options: [
      'Carousels are inherently inaccessible and should never be used',
      'Accessible carousel requirements: (1) Pause/stop control for auto-advancing (WCAG 2.2.2); (2) Previous/next buttons with descriptive aria-labels; (3) Slide indicators with aria-label="Slide X of Y" and aria-current="true" on active; (4) aria-live="polite" or aria-roledescription="carousel" on container; (5) Each slide visible to screen readers only when active (aria-hidden on inactive slides); (6) Keyboard support: arrow keys for navigation.',
      'Just add tabindex="0" to the carousel container',
      'Only provide a text list of all slides as an accessible alternative',
    ],
    answer: 1,
    explanation: 'Carousel ARIA pattern: container gets role="region" aria-label="Featured Products" aria-roledescription="carousel". Each slide: role="group" aria-roledescription="slide" aria-label="1 of 5". Inactive slides: aria-hidden="true". Auto-advance: must have a pause button (WCAG 2.2.2 Pause, Stop, Hide) — motion that lasts more than 5 seconds and auto-updates. Pause on hover/focus is a minimum; a visible play/pause toggle is better. Previous/next buttons: <button aria-label="Previous slide"> and <button aria-label="Next slide">. The ARIA APG has a full carousel pattern with code examples.',
    references: ['https://www.w3.org/WAI/ARIA/apg/patterns/carousel/'],
    tags: ['carousel', 'slider', 'aria-live', 'auto-advance', 'wcag-2.2.2'],
    year: 2025,
  },
  {
    id: 'a11y-026',
    topic: 'accessibility',
    difficulty: 'mid',
    type: 'mcq',
    question: 'How should inline SVG icons be made accessible, and what is the difference between decorative and informative SVG icons?',
    options: [
      'Add alt="" to all SVG elements, just like img elements',
      'Decorative icons (next to visible text label): aria-hidden="true" to remove from accessibility tree — screen reader reads the text, not the icon. Informative icons (standalone, no text): role="img" aria-label="Settings" on the SVG, or use a visually hidden <title> as the first SVG child. Never use both aria-label and visible adjacent text.',
      'SVG elements automatically convey meaning to screen readers',
      'Always use <img> instead of inline SVG for accessibility',
    ],
    answer: 1,
    explanation: 'SVG accessibility patterns: (1) Decorative icon with adjacent text label: <svg aria-hidden="true" focusable="false"><path.../></svg><span>Delete</span> — aria-hidden prevents redundant announcement; focusable="false" prevents IE/Edge from including it in tab order. (2) Standalone icon button: <button aria-label="Delete item"><svg aria-hidden="true" focusable="false">...</svg></button> — label is on the button, icon is hidden. (3) Informative SVG illustration: <svg role="img" aria-labelledby="svgTitle"><title id="svgTitle">Bar chart showing revenue growth</title>...</svg>. The focusable="false" attribute is important for older browsers.',
    tags: ['svg', 'icons', 'aria-hidden', 'role-img', 'decorative'],
    year: 2025,
  },
  {
    id: 'a11y-027',
    topic: 'accessibility',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What are the key VoiceOver (macOS/iOS) and NVDA (Windows) commands a developer should know for manual accessibility testing?',
    options: [
      'Just use Tab to navigate — that is sufficient for screen reader testing',
      'VoiceOver: VO+Right/Left arrow (read next/previous element), VO+U (rotor for landmarks/headings list), VO+F5 (item chooser), VO+A (read from cursor). NVDA: Insert+F7 (elements list), H to navigate headings, T for tables, B for buttons, Insert+Space (browse vs forms mode). Both: check reading order, form label associations, live region announcements.',
      'Screen reader testing only requires checking headings and links',
      'Automated tools like axe-core can replace screen reader testing entirely',
    ],
    answer: 1,
    explanation: 'Essential screen reader testing workflow: (1) Navigate with Tab — check all interactive elements are reachable and have descriptive labels. (2) VoiceOver Rotor (VO+U) — lists all headings, landmarks, links; verify logical hierarchy. (3) NVDA elements list (Insert+F7) — similar landmark/heading/link overview. (4) Forms mode (NVDA): Insert+Space to toggle — in forms mode, letters type rather than navigate; verify form labels and error messages. (5) Live regions: trigger dynamic changes and verify announcements. (6) Check reading order matches visual order. Test on: Chrome + NVDA (most common Windows combination) and Safari + VoiceOver (required for iOS). At minimum, test your most common user flows.',
    tags: ['voiceover', 'nvda', 'screen-reader', 'testing', 'manual-testing'],
    year: 2025,
  },
  {
    id: 'a11y-028',
    topic: 'accessibility',
    difficulty: 'senior',
    type: 'mcq',
    question: 'How do you use React Aria\'s useButton and useDialog hooks to build accessible custom components?',
    options: [
      'React Aria hooks automatically render the component — no additional code needed',
      'useButton provides all aria attributes, keyboard handlers (Enter/Space), and role="button" for any element. useDialog provides modal semantics (role="dialog", aria-modal, aria-labelledby) and focus management. You spread the returned props onto your DOM elements and provide your own rendering and styles.',
      'React Aria only works with TypeScript — JavaScript projects cannot use it',
      'React Aria hooks replace the need for any HTML semantic elements',
    ],
    answer: 1,
    explanation: 'React Aria pattern: const { buttonProps } = useButton({ onPress: handleClick }, ref); return <div {...buttonProps} ref={ref}>Click me</div>. The hook adds: role="button", tabIndex, onKeyDown (Enter/Space), onPointerDown, aria-disabled, and normalizes events across devices. useDialog: const { dialogProps, titleProps } = useDialog({}, ref); renders role="dialog" aria-modal="true" — pair with useOverlay for focus trapping and backdrop. The key concept: hooks handle behavior/ARIA, you control rendering. This makes your components styleable with any CSS while staying accessible. Pair with useOverlayTrigger, useFocusTrap, and DismissButton for complete modal patterns.',
    references: ['https://react-spectrum.adobe.com/react-aria/useButton.html'],
    tags: ['react-aria', 'useButton', 'useDialog', 'hooks', 'accessible-components'],
    year: 2025,
  },
  {
    id: 'a11y-029',
    topic: 'accessibility',
    difficulty: 'mid',
    type: 'true-false',
    question: 'The CSS media query prefers-contrast: more can be used to detect when users request higher color contrast in their OS settings.',
    answer: true,
    explanation: 'prefers-contrast: more detects when the user has enabled "Increase Contrast" (macOS) or "High Contrast" mode (Windows). Use it to: (1) Increase text contrast beyond the standard 4.5:1 minimum. (2) Add visible borders to components that rely on color alone for boundaries. (3) Make focus indicators more prominent. (4) Remove subtle background patterns or gradients that reduce legibility. Example: @media (prefers-contrast: more) { .card { border: 2px solid currentColor; } }. Values: more, less, forced (Windows High Contrast Mode), no-preference. Note: prefers-contrast: forced is triggered by Windows Forced Colors mode, where the browser overrides your CSS — test explicitly for this.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast'],
    tags: ['prefers-contrast', 'high-contrast', 'css-media-query', 'accessibility'],
    year: 2025,
  },
  {
    id: 'a11y-030',
    topic: 'accessibility',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is WCAG 2.2 Success Criterion 2.5.8 (Target Size Minimum) and how do you implement it in a React component library?',
    options: [
      'All interactive elements must be at least 44x44 CSS pixels',
      'Interactive targets must be at least 24x24 CSS pixels, OR have sufficient spacing around them so that the 24x24 area around the target center does not intersect any other target. Exceptions: inline text links, targets in sentences, browser-native controls.',
      'Target size only applies to touch screens, not desktop interfaces',
      'Target size is only a WCAG AAA requirement — AA does not require minimum sizes',
    ],
    answer: 1,
    explanation: 'WCAG 2.5.8 (AA in WCAG 2.2): 24x24px minimum. Practical implementation: (1) Use min-height: 24px; min-width: 24px on interactive elements. (2) For icon buttons in dense UIs: the clickable area can be 24px via padding even if the visual icon is 16px. (3) Spacing approach: if a button is 20x20px, ensure 2px of spacing around it so the 24x24 activation zone does not overlap neighboring targets. (4) Best practice: aim for 44x44px (WCAG AAA and Apple HIG recommendation) for touch targets. In React component library: add a minimum size via CSS that consumers can opt out of if they handle spacing themselves. Token: --touch-target-min: 24px.',
    tags: ['target-size', 'wcag-2.5.8', 'wcag-2.2', 'touch-target', 'component-library'],
    year: 2025,
  },
  {
    id: 'a11y-031',
    topic: 'accessibility',
    difficulty: 'junior',
    type: 'mcq',
    question: 'What does the role="combobox" pattern require for a custom autocomplete/combobox component to be accessible?',
    options: [
      'Just add role="combobox" to the input and you are done',
      'A combobox needs: input with role="combobox", aria-expanded (true/false), aria-autocomplete, aria-controls pointing to the listbox, aria-activedescendant pointing to focused option. Listbox with role="listbox". Options with role="option". Full keyboard: Arrow keys to navigate, Enter to select, Escape to close, printable characters for type-ahead.',
      'Comboboxes should always be replaced with native <select> elements',
      'Only aria-expanded is needed — other attributes are optional for comboboxes',
    ],
    answer: 1,
    explanation: 'Combobox ARIA pattern (ARIA 1.2): <input role="combobox" aria-expanded="true" aria-autocomplete="list" aria-controls="listbox-id" aria-activedescendant="option-3-id">. The listbox: <ul role="listbox" id="listbox-id">. Each option: <li role="option" id="option-3-id" aria-selected="true">. Keyboard: ArrowDown/Up move focus (update aria-activedescendant, not actual DOM focus — focus stays on input). Home/End for first/last option. Enter to select. Escape closes the popup and returns to the input value before opening. This is complex — use React Aria useComboBox, Radix UI Combobox, or Headless UI Combobox which handle all these interactions correctly.',
    references: ['https://www.w3.org/WAI/ARIA/apg/patterns/combobox/'],
    tags: ['combobox', 'autocomplete', 'aria-expanded', 'aria-activedescendant', 'react-aria'],
    year: 2025,
  },
  {
    id: 'a11y-032',
    topic: 'accessibility',
    difficulty: 'mid',
    type: 'debug',
    question: 'Find the accessibility issue with this notification toast implementation:',
    code: `function showToast(message: string, type: 'success' | 'error') {
  const toast = document.createElement('div')
  toast.textContent = message
  toast.setAttribute('role', type === 'error' ? 'alert' : 'status')
  toast.style.cssText = 'position:fixed;bottom:20px;right:20px'
  document.body.appendChild(toast)
  setTimeout(() => document.body.removeChild(toast), 3000)
}`,
    answer: 'The live region (role="alert"/"status") is created dynamically at the same time as the content is added. Screen readers only announce content changes in pre-existing live regions — a newly created live region with initial content may not be announced reliably across all screen reader/browser combinations.',
    solutionCode: `// Step 1: Mount the live region container at app startup (empty)
// In HTML: <div id="toast-container" role="status" aria-live="polite" aria-atomic="true"></div>

// Step 2: Inject content into the pre-existing container
function showToast(message: string, type: 'success' | 'error') {
  const container = document.getElementById('toast-container')
  if (!container) return

  container.setAttribute('role', type === 'error' ? 'alert' : 'status')
  container.textContent = message
  container.style.cssText = 'position:fixed;bottom:20px;right:20px'

  setTimeout(() => {
    container.textContent = ''
  }, 5000) // 5s minimum for WCAG 2.2.1
}`,
    explanation: 'Fix: mount an empty live region container in the DOM at application startup, then inject toast content into it dynamically. In React: render <div role="status" aria-live="polite" aria-atomic="true" id="toast-container"></div> in the app root (or use a portal). When showing a toast, update the content of this existing container. The screen reader observes the pre-existing live region and announces when its content changes. Additionally: provide a minimum visible duration longer than 3 seconds (WCAG 2.2.1), or a way for users to pause auto-dismiss.',
    tags: ['aria-live', 'toast', 'live-region', 'dynamic-content', 'screen-reader'],
    year: 2025,
  },
  {
    id: 'a11y-033',
    topic: 'accessibility',
    difficulty: 'senior',
    type: 'mcq',
    question: 'How does React Aria\'s useComboBox hook differ from building a combobox with plain ARIA attributes?',
    options: [
      'They are functionally identical — React Aria just provides syntax sugar',
      'React Aria useComboBox handles: (1) Full keyboard navigation spec per WAI-ARIA APG; (2) Mobile screen reader gestures (VoiceOver swipe, TalkBack); (3) Internationalization (RTL arrow key reversal, locale-aware type-ahead); (4) Pointer event normalization (mouse, touch, stylus); (5) Edge cases like focus restoration, virtual focus management, and screen reader quirk workarounds built up from extensive testing.',
      'React Aria only works in browsers with the Pointer Events API',
      'React Aria requires a specific CSS framework to function correctly',
    ],
    answer: 1,
    explanation: 'React Aria internals: useComboBox composes ~10 lower-level hooks: useTextField, useListBox, useOption, useOverlayTrigger, useFocusScope, useKeyboard, useInteractOutside, useOverlayPosition, and useHideOutside. Each handles one aspect of the interaction. The result: a combobox that works correctly with VoiceOver on iOS (different interaction model than desktop), NVDA in browse vs forms mode, Android TalkBack, Windows High Contrast Mode, and RTL languages. Building this from scratch typically takes months and still misses edge cases. Using useComboBox gives you all of this with a clean API where you control the rendering and styling.',
    references: ['https://react-spectrum.adobe.com/react-aria/useComboBox.html'],
    tags: ['react-aria', 'useComboBox', 'combobox', 'screen-reader', 'keyboard'],
    year: 2025,
  },
  {
    id: 'a11y-034',
    topic: 'accessibility',
    difficulty: 'junior',
    type: 'true-false',
    question: 'Adding tabindex="0" to a non-interactive element like a <div> is generally a good practice to ensure keyboard users can access all content.',
    answer: false,
    explanation: 'Adding tabindex="0" to non-interactive elements forces keyboard users to Tab through content that does not do anything — increasing the number of Tab stops without providing any action. This wastes time for keyboard users who must Tab through every focusable element. Only interactive elements (buttons, links, form fields) should be in the tab order. If you need to make a static element focusable for programmatic focus (e.g., to move focus to a heading after navigation), use tabindex="-1" instead — it allows programmatic focus (element.focus()) without adding it to the natural tab order. The only valid use of tabindex="0" on a non-native element is when it truly acts as a custom interactive widget with keyboard handlers.',
    tags: ['tabindex', 'keyboard-navigation', 'focus', 'tab-order'],
    year: 2025,
  },
  {
    id: 'a11y-035',
    topic: 'accessibility',
    difficulty: 'lead',
    type: 'mcq',
    question: 'What is the correct strategy for supporting both prefers-reduced-motion and prefers-contrast in a design system\'s animation and theme tokens?',
    options: [
      'Handle these queries ad hoc in individual component stylesheets',
      'Build motion and contrast as first-class token tiers: define animation-duration and animation-easing tokens; override to near-zero in a reduced-motion token set. Define contrast tokens with semantic names; override semantic color tokens under prefers-contrast: more. Apply overrides globally via CSS custom property cascades in @media blocks — components automatically adapt without per-component queries.',
      'Use JavaScript to detect these preferences and toggle CSS classes on <body>',
      'Only support these preferences if all users explicitly request them in your app settings',
    ],
    answer: 1,
    explanation: 'Design system accessibility motion/contrast strategy: (1) Motion tokens: --animation-duration-fast: 150ms; --animation-easing-standard: ease-in-out. In @media (prefers-reduced-motion: reduce): override to --animation-duration-fast: 0.01ms. Components use the token — they auto-reduce without modification. (2) Contrast tokens: semantic tokens like --color-text-secondary reference a mid-gray. In @media (prefers-contrast: more): remap --color-text-secondary to a darker value meeting 7:1. Components using the semantic token auto-enhance. (3) JavaScript detection (matchMedia) for cases where you need to conditionally render differently (e.g., skip particle animations entirely rather than just slow them).',
    tags: ['prefers-reduced-motion', 'prefers-contrast', 'design-tokens', 'design-system', 'css-media-query'],
    year: 2025,
  },
]
