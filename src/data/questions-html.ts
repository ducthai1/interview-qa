import type { Question } from '../types'

export const htmlQuestions: Question[] = [
  // ─── JUNIOR ───────────────────────────────────────────────────────────────
  {
    id: 'html-001',
    topic: 'html',
    difficulty: 'junior',
    type: 'mcq',
    question: 'Which HTML5 element represents a self-contained piece of content that could be distributed independently (e.g. a blog post or news article)?',
    options: ['<section>', '<article>', '<main>', '<aside>'],
    answer: 1,
    explanation: '<article> represents a self-contained composition that is independently distributable or reusable. <section> groups thematically related content but is not necessarily independent. <main> marks the dominant content of the page. <aside> marks content tangentially related to the surrounding content.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article'],
    tags: ['semantic-html', 'html5', 'sectioning'],
    year: 2025,
  },
  {
    id: 'html-002',
    topic: 'html',
    difficulty: 'junior',
    type: 'mcq',
    question: 'What is the correct DOCTYPE declaration for an HTML5 document?',
    options: [
      '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 5.0//EN">',
      '<!DOCTYPE HTML5>',
      '<!DOCTYPE html>',
      '<html doctype="5">',
    ],
    answer: 2,
    explanation: 'HTML5 uses the short, case-insensitive <!DOCTYPE html>. Earlier HTML versions required long DOCTYPE strings referencing a DTD URL. The simple declaration tells browsers to render in standards mode.',
    references: ['https://developer.mozilla.org/en-US/docs/Glossary/Doctype'],
    tags: ['doctype', 'html5', 'document-structure'],
    year: 2025,
  },
  {
    id: 'html-003',
    topic: 'html',
    difficulty: 'junior',
    type: 'true-false',
    question: 'The <b> and <strong> elements are semantically identical — both just make text bold.',
    answer: false,
    explanation: '<strong> conveys semantic importance (screen readers may stress it; SEO weight differs). <b> is purely presentational — it draws attention without implying importance. Use <strong> for genuinely important text and <b> for stylistic highlights like keywords.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong'],
    tags: ['semantic-html', 'text-elements', 'accessibility'],
    year: 2025,
  },
  {
    id: 'html-004',
    topic: 'html',
    difficulty: 'junior',
    type: 'mcq',
    question: 'Which input type should you use to collect a user\'s email address so that browsers validate the format automatically?',
    options: ['<input type="text">', '<input type="email">', '<input type="url">', '<input type="search">'],
    answer: 1,
    explanation: 'type="email" triggers built-in browser validation that checks for a valid email format (e.g. user@example.com) before form submission. It also displays an email-optimised keyboard on mobile devices.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email'],
    tags: ['forms', 'input-types', 'validation'],
    year: 2025,
  },
  {
    id: 'html-005',
    topic: 'html',
    difficulty: 'junior',
    type: 'mcq',
    question: 'What attribute makes a form field mandatory before submission?',
    options: ['mandatory', 'validate', 'required', 'notnull'],
    answer: 2,
    explanation: 'The boolean attribute "required" prevents form submission and shows a browser-native error if the field is empty. It works on <input>, <select>, and <textarea>. Use aria-required="true" additionally for full accessibility support.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required'],
    tags: ['forms', 'validation', 'required'],
    year: 2025,
  },
  {
    id: 'html-006',
    topic: 'html',
    difficulty: 'junior',
    type: 'true-false',
    question: 'The alt attribute on an <img> element is only important for users with visual impairments.',
    answer: false,
    explanation: 'alt text serves multiple purposes: accessibility for screen-reader users, display when the image fails to load, SEO signals for search engines, and tooltip text in some legacy browsers. Decorative images should use alt="" (empty) so assistive technology skips them.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#accessibility_concerns'],
    tags: ['accessibility', 'images', 'alt-text'],
    year: 2025,
  },
  {
    id: 'html-007',
    topic: 'html',
    difficulty: 'junior',
    type: 'mcq',
    question: 'Which element should wrap the primary navigation links of a website?',
    options: ['<menu>', '<ul>', '<nav>', '<header>'],
    answer: 2,
    explanation: '<nav> is a landmark element that semantically identifies a section of major navigation links. Screen readers expose it as a navigation landmark, allowing keyboard users to skip to or skip past it. Not every group of links needs <nav> — reserve it for primary/secondary site navigation.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav'],
    tags: ['semantic-html', 'navigation', 'landmark'],
    year: 2025,
  },
  {
    id: 'html-008',
    topic: 'html',
    difficulty: 'junior',
    type: 'code-output',
    question: 'What does the browser render for the following HTML entity?',
    code: '<p>5 &gt; 3 &amp;&amp; 2 &lt; 4</p>',
    answer: '5 > 3 && 2 < 4',
    explanation: '&gt; renders >, &lt; renders <, and &amp; renders &. HTML entities are needed to display characters that have special meaning in HTML markup without confusing the parser.',
    references: ['https://developer.mozilla.org/en-US/docs/Glossary/Entity'],
    tags: ['html-entities', 'character-encoding'],
    year: 2025,
  },
  {
    id: 'html-009',
    topic: 'html',
    difficulty: 'junior',
    type: 'mcq',
    question: 'Which meta tag is used to set the character encoding for an HTML document?',
    options: [
      '<meta http-equiv="content-type" content="text/html">',
      '<meta charset="UTF-8">',
      '<meta encoding="UTF-8">',
      '<meta lang="en">',
    ],
    answer: 1,
    explanation: '<meta charset="UTF-8"> is the HTML5 short form to declare UTF-8 encoding. It must appear within the first 1024 bytes of the document, ideally right after <head>, so the browser can interpret subsequent characters correctly.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#charset'],
    tags: ['meta-tags', 'character-encoding', 'utf-8'],
    year: 2025,
  },
  {
    id: 'html-010',
    topic: 'html',
    difficulty: 'junior',
    type: 'mcq',
    question: 'What is the purpose of the <figcaption> element?',
    options: [
      'Adds a tooltip to an image',
      'Provides a caption or legend for a <figure> element',
      'Defines a figure in a mathematical formula',
      'Creates a decorative border around an image',
    ],
    answer: 1,
    explanation: '<figcaption> provides an accessible caption for its parent <figure> element. A <figure> typically wraps self-contained content like images, diagrams, or code listings, and <figcaption> labels that content for both visual users and assistive technology.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption'],
    tags: ['semantic-html', 'figure', 'accessibility'],
    year: 2025,
  },
  {
    id: 'html-011',
    topic: 'html',
    difficulty: 'junior',
    type: 'true-false',
    question: 'Adding defer to a <script> tag causes the script to execute before the HTML is fully parsed.',
    answer: false,
    explanation: 'defer makes the script download in parallel with HTML parsing but execute only after parsing is complete (and before DOMContentLoaded fires). This is in contrast to async, which executes as soon as the download finishes (mid-parse). Scripts without either attribute block parsing entirely.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#defer'],
    tags: ['script-loading', 'defer', 'performance'],
    year: 2025,
  },
  {
    id: 'html-012',
    topic: 'html',
    difficulty: 'junior',
    type: 'mcq',
    question: 'Which attribute would you add to a <video> element to display it automatically without sound when the page loads?',
    options: [
      'autoplay muted',
      'autoplay silent',
      'autostart noaudio',
      'play="auto" sound="off"',
    ],
    answer: 0,
    explanation: 'Browsers block autoplay with audio by default to prevent intrusive experiences. Adding both autoplay and muted attributes together satisfies the browser\'s autoplay policy, allowing silent autoplay. This is commonly used for hero/background videos.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#autoplay'],
    tags: ['media', 'video', 'autoplay'],
    year: 2025,
  },
  {
    id: 'html-013',
    topic: 'html',
    difficulty: 'junior',
    type: 'mcq',
    question: 'Which HTML attribute allows you to store custom data on any HTML element?',
    options: ['custom-*', 'data-*', 'attr-*', 'meta-*'],
    answer: 1,
    explanation: 'data-* attributes let you embed custom data on any HTML element (e.g. data-user-id="42"). They are accessible via JS as element.dataset.userId (camelCase conversion) and don\'t affect rendering or semantics. They are useful for passing server-side data to client-side scripts.',
    references: ['https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes'],
    tags: ['data-attributes', 'custom-data', 'dataset'],
    year: 2025,
  },
  {
    id: 'html-014',
    topic: 'html',
    difficulty: 'junior',
    type: 'mcq',
    question: 'What does the <details> and <summary> HTML pattern produce natively without JavaScript?',
    options: [
      'A modal dialog',
      'A tooltip on hover',
      'An accordion/disclosure widget that toggles open and closed',
      'A dropdown menu',
    ],
    answer: 2,
    explanation: '<details> creates a native disclosure widget. <summary> acts as the visible heading/toggle. Clicking the summary toggles the open attribute on <details>, showing or hiding the remaining content. No JavaScript needed — the browser handles interaction natively.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details'],
    tags: ['details', 'summary', 'disclosure', 'html5'],
    year: 2025,
  },
  {
    id: 'html-015',
    topic: 'html',
    difficulty: 'junior',
    type: 'mcq',
    question: 'Which input type renders a slider control for selecting a numeric value within a range?',
    options: ['number', 'slider', 'range', 'scale'],
    answer: 2,
    explanation: 'type="range" displays a slider. Use min, max, and step attributes to configure it (e.g. <input type="range" min="0" max="100" step="5">). The value is available via JS as input.value (always a string). Pair with an <output> element to display the current value.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range'],
    tags: ['forms', 'input-types', 'range'],
    year: 2025,
  },

  // ─── MID ──────────────────────────────────────────────────────────────────
  {
    id: 'html-016',
    topic: 'html',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is the key difference between localStorage and sessionStorage?',
    options: [
      'localStorage is larger (10 MB vs 5 MB)',
      'sessionStorage persists across tabs while localStorage does not',
      'localStorage persists until explicitly cleared; sessionStorage is cleared when the tab/window is closed',
      'localStorage is synchronous and sessionStorage is asynchronous',
    ],
    answer: 2,
    explanation: 'Both APIs are synchronous key-value stores (typically ~5 MB per origin). localStorage data persists indefinitely unless explicitly removed. sessionStorage data is scoped to the browser tab and cleared when the tab closes — even for the same origin. Neither should store sensitive data without encryption.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API'],
    tags: ['web-storage', 'localstorage', 'sessionstorage'],
    year: 2025,
  },
  {
    id: 'html-017',
    topic: 'html',
    difficulty: 'mid',
    type: 'mcq',
    question: 'Which rel value on a <link> element preloads a resource needed for the current page without rendering it immediately?',
    options: ['prefetch', 'preload', 'preconnect', 'modulepreload'],
    answer: 1,
    explanation: 'rel="preload" fetches a resource that the current page will need soon (fonts, images, scripts) at high priority. rel="prefetch" fetches resources for future navigation at low priority. rel="preconnect" establishes early TCP/TLS to a domain. rel="modulepreload" preloads and parses ES modules.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/preload'],
    tags: ['resource-hints', 'preload', 'performance'],
    year: 2025,
  },
  {
    id: 'html-018',
    topic: 'html',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What does the Open Graph meta property og:image do?',
    options: [
      'Sets the favicon shown in browser tabs',
      'Defines the image displayed when the URL is shared on social media platforms',
      'Embeds an image directly in the HTML head',
      'Tells search engines the primary image of the page',
    ],
    answer: 1,
    explanation: 'Open Graph protocol (<meta property="og:image" content="...">) defines the preview image shown when a URL is shared on platforms like Facebook, LinkedIn, Slack, and Twitter (which uses its own twitter:image as well). Without it, platforms may choose arbitrary images from the page.',
    references: ['https://ogp.me/', 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML'],
    tags: ['open-graph', 'meta-tags', 'seo', 'social-sharing'],
    year: 2025,
  },
  {
    id: 'html-019',
    topic: 'html',
    difficulty: 'mid',
    type: 'code-output',
    question: 'What attribute combination allows a table header cell to span two columns?',
    code: `<table>
  <thead>
    <tr>
      <th colspan="2">Full Name</th>
      <th>Age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John</td>
      <td>Doe</td>
      <td>30</td>
    </tr>
  </tbody>
</table>`,
    answer: 'colspan="2" on a <th> makes that header span two columns, so "Full Name" visually covers the first two data cells (John, Doe) in the body rows.',
    explanation: 'colspan merges cells horizontally. rowspan merges cells vertically. The <th scope="col"> attribute should also be added for accessibility to associate the header with its column(s). This table has 3 columns — the header row uses colspan=2 + 1 normal th = 3 cells total.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th#colspan'],
    tags: ['tables', 'colspan', 'accessibility'],
    year: 2025,
  },
  {
    id: 'html-020',
    topic: 'html',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is the purpose of the ARIA role="alert"?',
    options: [
      'Marks an element as a warning icon',
      'Announces content changes to screen readers immediately without requiring focus',
      'Creates a pop-up notification box',
      'Adds a red border to an element',
    ],
    answer: 1,
    explanation: 'role="alert" is an ARIA live region that causes assistive technology to immediately announce injected or changed content (e.g. form errors, success messages) without requiring the user to move focus. It is equivalent to aria-live="assertive" aria-atomic="true". Use sparingly to avoid overwhelming users.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role'],
    tags: ['aria', 'accessibility', 'live-regions'],
    year: 2025,
  },
  {
    id: 'html-021',
    topic: 'html',
    difficulty: 'mid',
    type: 'true-false',
    question: 'The async and defer attributes on <script> have identical execution behaviour.',
    answer: false,
    explanation: 'Both download scripts without blocking parsing. The difference is in execution: async executes immediately when downloaded (order not guaranteed), while defer executes in document order after parsing completes. defer is safer for scripts with dependencies; async is for independent scripts like analytics.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#async'],
    tags: ['script-loading', 'async', 'defer'],
    year: 2025,
  },
  {
    id: 'html-022',
    topic: 'html',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What does the sandbox attribute on an <iframe> do?',
    options: [
      'Embeds a code sandbox (like CodePen) inside the page',
      'Restricts capabilities of the embedded content (no scripts, forms, popups etc.) unless explicitly re-enabled',
      'Provides a fallback if the iframe fails to load',
      'Enables full-screen mode for the iframe',
    ],
    answer: 1,
    explanation: 'sandbox="" applies all restrictions by default: no scripts, no same-origin access, no form submissions, no popups. You can selectively re-enable with tokens: sandbox="allow-scripts allow-forms". This is critical for safely embedding untrusted third-party content.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#sandbox'],
    tags: ['iframe', 'sandbox', 'security'],
    year: 2025,
  },
  {
    id: 'html-023',
    topic: 'html',
    difficulty: 'mid',
    type: 'mcq',
    question: 'Which attribute on an <img> enables responsive images by listing multiple source URLs with width descriptors?',
    options: ['sizes', 'srcset', 'media', 'src'],
    answer: 1,
    explanation: 'srcset lets you provide multiple image sources at different resolutions/widths (e.g. srcset="img-400.jpg 400w, img-800.jpg 800w"). The browser picks the most appropriate one based on display density and viewport width (informed by the sizes attribute). This avoids downloading unnecessarily large images on small screens.',
    references: ['https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images'],
    tags: ['responsive-images', 'srcset', 'performance'],
    year: 2025,
  },
  {
    id: 'html-024',
    topic: 'html',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is the purpose of the tabindex="0" attribute?',
    options: [
      'Removes an element from the tab order',
      'Puts the element first in the tab order',
      'Adds a non-interactive element to the natural tab order',
      'Sets the element\'s z-index for stacking',
    ],
    answer: 2,
    explanation: 'tabindex="0" inserts an element into the natural document tab order (after all native interactive elements at their natural positions). tabindex="-1" removes it from tab order but allows programmatic focus. Positive values (tabindex="1") force an order but are an anti-pattern that disrupts expected flow.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex'],
    tags: ['accessibility', 'tabindex', 'keyboard-navigation'],
    year: 2025,
  },
  {
    id: 'html-025',
    topic: 'html',
    difficulty: 'mid',
    type: 'mcq',
    question: 'Which HTML element provides a native modal dialog with built-in focus trapping?',
    options: ['<popup>', '<modal>', '<dialog>', '<overlay>'],
    answer: 2,
    explanation: 'The <dialog> element (with the .showModal() method) creates a native modal with automatic focus trapping, backdrop via ::backdrop pseudo-element, and Escape key handling. It can also be used as a non-modal with .show(). Browser support is excellent as of 2024.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog'],
    tags: ['dialog', 'modal', 'html5', 'accessibility'],
    year: 2025,
  },
  {
    id: 'html-026',
    topic: 'html',
    difficulty: 'mid',
    type: 'debug',
    question: 'This form is missing accessibility for the email input. Identify and fix the issue.',
    code: `<form>
  <p>Email Address</p>
  <input type="email" id="email" name="email" />
  <button type="submit">Subscribe</button>
</form>`,
    answer: `<form>
  <label for="email">Email Address</label>
  <input type="email" id="email" name="email" required />
  <button type="submit">Subscribe</button>
</form>`,
    explanation: 'The <p> tag provides no programmatic association between the label text and the input. Replacing it with <label for="email"> associates the label so screen readers announce it when the input is focused. Clicking the label also focuses the input, improving usability. Adding required provides built-in validation.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label'],
    tags: ['accessibility', 'forms', 'label'],
    year: 2025,
  },
  {
    id: 'html-027',
    topic: 'html',
    difficulty: 'mid',
    type: 'mcq',
    question: 'The <picture> element is most useful for which use case?',
    options: [
      'Lazy loading images',
      'Art direction — serving different cropped/sized images for different viewport conditions',
      'Adding captions to images',
      'Creating an image gallery',
    ],
    answer: 1,
    explanation: '<picture> allows art direction via multiple <source> elements with media queries, serving entirely different images (not just sizes) at different breakpoints. The <img> inside is always required as fallback. This is different from srcset which serves the same image at different resolutions.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture'],
    tags: ['responsive-images', 'picture', 'art-direction'],
    year: 2025,
  },
  {
    id: 'html-028',
    topic: 'html',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What does rel="noopener noreferrer" on an anchor tag protect against?',
    options: [
      'XSS attacks via inline scripts',
      'The opened page accessing the opener window via window.opener, and leaking the referrer URL',
      'Clickjacking in the linked page',
      'CSS injection in the linked page',
    ],
    answer: 1,
    explanation: 'noopener nullifies window.opener in the new tab, preventing the opened page from redirecting your page. noreferrer also omits the Referer header. Both together are best practice on target="_blank" links to untrusted sites. Modern browsers apply noopener automatically for target="_blank", but explicit is safer.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/noopener'],
    tags: ['security', 'anchor', 'rel', 'noopener'],
    year: 2025,
  },
  {
    id: 'html-029',
    topic: 'html',
    difficulty: 'mid',
    type: 'true-false',
    question: 'The contenteditable attribute can be applied to any HTML element to make it editable by the user.',
    answer: true,
    explanation: 'contenteditable="true" (or just contenteditable) makes any element editable. Common use cases include rich text editors. The content can be read via element.innerHTML or element.textContent. You can also use contenteditable="plaintext-only" (widely supported) to disable rich-text pasting.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contenteditable'],
    tags: ['contenteditable', 'editing', 'global-attributes'],
    year: 2025,
  },
  {
    id: 'html-030',
    topic: 'html',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is the purpose of the <template> element in HTML?',
    options: [
      'A shorthand for creating reusable CSS classes',
      'Holds inert HTML markup that is not rendered but can be cloned and inserted via JavaScript',
      'Defines a page template for server-side rendering',
      'Creates a template literal in HTML',
    ],
    answer: 1,
    explanation: 'Content inside <template> is parsed but not rendered — no images load, no scripts execute. Its .content property returns a DocumentFragment you can clone and insert: document.body.appendChild(template.content.cloneNode(true)). It is a core building block of Web Components.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template'],
    tags: ['web-components', 'template', 'shadow-dom'],
    year: 2025,
  },

  // ─── SENIOR ───────────────────────────────────────────────────────────────
  {
    id: 'html-031',
    topic: 'html',
    difficulty: 'senior',
    type: 'mcq',
    question: 'Which HTML5 API allows you to draw 2D graphics programmatically using JavaScript?',
    options: ['SVG API', 'WebGL API', 'Canvas 2D Context API', 'Painting API'],
    answer: 2,
    explanation: 'The Canvas 2D Context API (accessed via canvas.getContext("2d")) provides imperative drawing commands (fillRect, drawImage, arc, etc.) for pixel-based graphics. SVG is declarative and DOM-based. WebGL is a 3D/GPU API. Canvas is best for games, data visualizations, and image manipulation.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API'],
    tags: ['canvas', 'html5-apis', 'graphics'],
    year: 2025,
  },
  {
    id: 'html-032',
    topic: 'html',
    difficulty: 'senior',
    type: 'mcq',
    question: 'How does Shadow DOM provide encapsulation in Web Components?',
    options: [
      'It encrypts the component\'s HTML',
      'It creates a separate, isolated DOM tree attached to an element where styles and IDs do not leak in or out',
      'It hides the component from JavaScript entirely',
      'It moves styles to an external CSS file automatically',
    ],
    answer: 1,
    explanation: 'Shadow DOM attaches a private DOM subtree to a host element via element.attachShadow({ mode: "open" | "closed" }). Styles defined inside the shadow root don\'t leak out, and page styles don\'t pierce in by default. mode:"open" allows external JS access via element.shadowRoot; "closed" returns null.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM'],
    tags: ['web-components', 'shadow-dom', 'encapsulation'],
    year: 2025,
  },
  {
    id: 'html-033',
    topic: 'html',
    difficulty: 'senior',
    type: 'code-write',
    question: 'Write a minimal HTML custom element <greeting-message> that accepts a "name" attribute and renders "Hello, {name}!" in a shadow root.',
    answer: `class GreetingMessage extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  static get observedAttributes() {
    return ['name']
  }

  attributeChangedCallback() {
    this.render()
  }

  connectedCallback() {
    this.render()
  }

  render() {
    const name = this.getAttribute('name') ?? 'World'
    this.shadowRoot.innerHTML = \`<p>Hello, \${name}!</p>\`
  }
}

customElements.define('greeting-message', GreetingMessage)`,
    explanation: 'Custom elements extend HTMLElement. attachShadow creates the isolated shadow root. observedAttributes lists attributes to watch. attributeChangedCallback fires on attribute changes, connectedCallback fires when inserted into the DOM. customElements.define registers the tag name (must contain a hyphen).',
    references: ['https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements'],
    tags: ['web-components', 'custom-elements', 'shadow-dom'],
    year: 2025,
  },
  {
    id: 'html-034',
    topic: 'html',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is the History API\'s pushState method used for?',
    options: [
      'It saves the entire page HTML to localStorage',
      'It changes the URL in the address bar and adds a history entry without triggering a page reload',
      'It pushes the current scroll position to a stack',
      'It pre-fetches and caches the next page',
    ],
    answer: 1,
    explanation: 'history.pushState(state, title, url) updates the address bar URL and adds an entry to the browser history without a network request. This enables client-side routing in SPAs. history.replaceState() updates without adding an entry. The popstate event fires on back/forward navigation.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/API/History/pushState'],
    tags: ['history-api', 'spa', 'routing', 'html5-apis'],
    year: 2025,
  },
  {
    id: 'html-035',
    topic: 'html',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is the difference between rel="preload" and rel="modulepreload"?',
    options: [
      'They are identical; modulepreload is a deprecated alias',
      'modulepreload additionally parses and compiles the ES module and its dependencies, making it available in the module map',
      'preload works only for fonts; modulepreload works for scripts',
      'modulepreload blocks rendering while preload does not',
    ],
    answer: 1,
    explanation: 'rel="modulepreload" is specifically for ES modules: it fetches, parses, and compiles the module (and optionally its static imports), placing them in the module map. rel="preload" fetches a resource at high priority but doesn\'t parse/compile scripts. modulepreload is more efficient for module graphs.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/modulepreload'],
    tags: ['resource-hints', 'modulepreload', 'es-modules', 'performance'],
    year: 2025,
  },
  {
    id: 'html-036',
    topic: 'html',
    difficulty: 'senior',
    type: 'mcq',
    question: 'In HTML5 Drag and Drop API, which event must you call event.preventDefault() on to allow a drop to occur?',
    options: ['dragstart', 'dragover', 'dragenter', 'drop'],
    answer: 1,
    explanation: 'By default the browser doesn\'t allow dropping. You must call event.preventDefault() in the dragover handler (and optionally dragenter) to signal that the drop target accepts drags. The drop event only fires if dragover was prevented. Data is transferred via event.dataTransfer.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API'],
    tags: ['drag-and-drop', 'html5-apis', 'events'],
    year: 2025,
  },
  {
    id: 'html-037',
    topic: 'html',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is the purpose of the <slot> element inside a Shadow DOM?',
    options: [
      'Creates a placeholder for CSS grid columns',
      'A named insertion point where light DOM children from the host element are projected into the shadow tree',
      'Reserves memory for lazy-loaded components',
      'An alias for a <template> element',
    ],
    answer: 1,
    explanation: 'Slots enable composition in Web Components. <slot name="header"> in the shadow root matches children with slot="header" attribute in the light DOM. The default unnamed <slot> captures all unslotted children. Slotted content remains in the light DOM (it\'s projected, not moved), so page styles still apply.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots'],
    tags: ['web-components', 'slots', 'shadow-dom', 'composition'],
    year: 2025,
  },
  {
    id: 'html-038',
    topic: 'html',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What does the Geolocation API\'s watchPosition method do differently from getCurrentPosition?',
    options: [
      'watchPosition is more accurate because it averages multiple readings',
      'watchPosition continuously monitors position changes and fires the callback each time the position changes, returning a watchId to cancel with clearWatch',
      'watchPosition requests permission silently without a browser prompt',
      'watchPosition stores location data to localStorage automatically',
    ],
    answer: 1,
    explanation: 'getCurrentPosition fires the callback once. watchPosition fires it repeatedly as the device moves, returning a watch ID. Call navigator.geolocation.clearWatch(watchId) to stop. Both accept a success callback, error callback, and options (enableHighAccuracy, timeout, maximumAge).',
    references: ['https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/watchPosition'],
    tags: ['geolocation', 'html5-apis', 'watchposition'],
    year: 2025,
  },
  {
    id: 'html-039',
    topic: 'html',
    difficulty: 'senior',
    type: 'debug',
    question: 'The following ARIA implementation is incorrect. Identify and fix the issue.',
    code: `<div role="button" onclick="submitForm()">
  Submit
</div>`,
    answer: `<button type="submit" onclick="submitForm()">
  Submit
</button>

/* Or if a div must be used: */
<div
  role="button"
  tabindex="0"
  onclick="submitForm()"
  onkeydown="if(event.key==='Enter'||event.key===' ')submitForm()"
>
  Submit
</div>`,
    explanation: 'A div with role="button" is missing tabindex="0" (not keyboard focusable) and keyboard event handlers (Enter/Space should activate buttons per ARIA authoring practices). The best fix is using a native <button> which has all these behaviours built in — native HTML semantics are always preferred over ARIA workarounds.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role'],
    tags: ['aria', 'accessibility', 'keyboard-navigation', 'debug'],
    year: 2025,
  },
  {
    id: 'html-040',
    topic: 'html',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What does type="module" on a <script> tag do that a classic script does not?',
    options: [
      'It enables TypeScript compilation in the browser',
      'It enables ES module syntax (import/export), defers execution by default, runs in strict mode, and creates a private module scope',
      'It loads the script from a CDN automatically',
      'It enables async/await without a transpiler',
    ],
    answer: 1,
    explanation: 'Module scripts: (1) support import/export, (2) are deferred by default (like defer), (3) run in strict mode automatically, (4) have module-level scope (no global pollution), (5) are fetched with CORS credentials, and (6) execute only once per module URL regardless of how many times it is imported.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules'],
    tags: ['script-loading', 'es-modules', 'type-module'],
    year: 2025,
  },
  {
    id: 'html-041',
    topic: 'html',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is an import map in HTML and what problem does it solve?',
    options: [
      'A server-side routing configuration file',
      'A JSON map in a <script type="importmap"> that controls how bare module specifiers resolve in the browser without a bundler',
      'A CSS custom property map for theming',
      'A Service Worker cache manifest',
    ],
    answer: 1,
    explanation: 'Import maps allow you to write import { html } from "lit" in browser ES modules by mapping bare specifiers to URLs: { "imports": { "lit": "/node_modules/lit/index.js" } }. This enables bundler-free module development. They are declared with <script type="importmap"> and must appear before any module scripts.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap'],
    tags: ['import-maps', 'es-modules', 'script-loading'],
    year: 2025,
  },
  {
    id: 'html-042',
    topic: 'html',
    difficulty: 'senior',
    type: 'true-false',
    question: 'The inert attribute on an HTML element disables interactivity (clicks, focus, text selection) for the element and all its descendants.',
    answer: true,
    explanation: 'inert is a boolean global attribute (widely supported since 2023) that makes an element and its subtree completely non-interactive: removed from tab order, not clickable, not selectable, and hidden from accessibility APIs. It is ideal for off-screen content like drawer menus or inactive carousel slides.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inert'],
    tags: ['inert', 'accessibility', 'html5', 'global-attributes'],
    year: 2025,
  },
  {
    id: 'html-043',
    topic: 'html',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is the Popover API and how does it differ from a native <dialog>?',
    options: [
      'They are identical; popover is a newer alias for dialog',
      'Popover is a lightweight, browser-native overlay mechanism invoked via the popover attribute and popovertarget, does not trap focus, and can be dismissed with light-dismiss (click outside or Escape)',
      'Popover only works inside Web Components',
      'Popover is an ARIA role, not an HTML attribute',
    ],
    answer: 1,
    explanation: 'The Popover API (2024, widely supported) uses the popover attribute on any element and popovertarget on a trigger button. It auto-opens in the top-layer like dialog, but unlike <dialog>.showModal(), it does not trap focus — users can interact with surrounding content. Supports popover="auto" (light-dismiss) and popover="manual".',
    references: ['https://developer.mozilla.org/en-US/docs/Web/API/Popover_API'],
    tags: ['popover', 'html5', 'dialog', 'top-layer'],
    year: 2025,
  },
  {
    id: 'html-044',
    topic: 'html',
    difficulty: 'senior',
    type: 'mcq',
    question: 'When using postMessage to communicate between an iframe and its parent, what should you always verify in the message event handler?',
    options: [
      'The type of the message data',
      'The event.origin against an allowed origin whitelist',
      'The iframe src attribute before reading the message',
      'The message timestamp to prevent replay attacks',
    ],
    answer: 1,
    explanation: 'Always validate event.origin in a postMessage handler: if (event.origin !== "https://trusted.example.com") return. Without this check, malicious pages can send arbitrary messages. Also validate the structure of event.data. Never use targetOrigin "*" when sending sensitive data.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage#security_concerns'],
    tags: ['iframe', 'postmessage', 'security', 'cross-origin'],
    year: 2025,
  },
  {
    id: 'html-045',
    topic: 'html',
    difficulty: 'senior',
    type: 'code-write',
    question: 'Write the HTML markup to implement a responsive image that: serves a WebP format on browsers that support it, falls back to a JPEG, and displays different crops for mobile (<600px) and desktop.',
    answer: `<picture>
  <!-- Desktop WebP (art-directed crop) -->
  <source
    media="(min-width: 600px)"
    type="image/webp"
    srcset="hero-desktop.webp"
  />
  <!-- Desktop JPEG fallback -->
  <source
    media="(min-width: 600px)"
    srcset="hero-desktop.jpg"
  />
  <!-- Mobile WebP -->
  <source
    type="image/webp"
    srcset="hero-mobile.webp"
  />
  <!-- Fallback img (always required) -->
  <img
    src="hero-mobile.jpg"
    alt="Hero banner"
    width="800"
    height="400"
    loading="lazy"
  />
</picture>`,
    explanation: 'The browser evaluates <source> elements top-to-bottom and picks the first matching one. Placing format sources (webp) before matching MIME type ensures format preference. The <img> is required as universal fallback and also provides alt text, width/height (prevents CLS), and loading="lazy".',
    references: ['https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture'],
    tags: ['responsive-images', 'picture', 'webp', 'art-direction'],
    year: 2025,
  },

  // ─── LEAD ─────────────────────────────────────────────────────────────────
  {
    id: 'html-046',
    topic: 'html',
    difficulty: 'lead',
    type: 'system-design',
    question: 'Design the semantic HTML structure for a news portal homepage. Include landmark regions, headings hierarchy, accessibility requirements, and performance considerations for above-the-fold content.',
    answer: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Daily Herald - Breaking News</title>
  <!-- SEO & Open Graph -->
  <meta name="description" content="Breaking news, analysis and opinion" />
  <meta property="og:title" content="Daily Herald" />
  <meta property="og:image" content="https://example.com/og-image.jpg" />
  <!-- Critical CSS inline; defer non-critical -->
  <style>/* critical above-fold styles */</style>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="preload" as="image" href="hero.webp" fetchpriority="high" />
</head>
<body>
  <a href="#main-content" class="skip-link">Skip to main content</a>

  <header role="banner">
    <a href="/"><img src="logo.svg" alt="Daily Herald" width="200" height="50" /></a>
    <nav aria-label="Primary navigation">
      <ul>
        <li><a href="/world">World</a></li>
        <li><a href="/politics">Politics</a></li>
      </ul>
    </nav>
    <form role="search" action="/search">
      <label for="search">Search</label>
      <input id="search" type="search" name="q" />
      <button type="submit">Go</button>
    </form>
  </header>

  <main id="main-content">
    <section aria-labelledby="breaking-heading">
      <h1 id="breaking-heading">Breaking News</h1>
      <article>
        <h2><a href="/article/1">Headline Story</a></h2>
        <p><time datetime="2025-06-15T09:00:00Z">June 15, 2025</time></p>
        <p>Lead paragraph...</p>
      </article>
    </section>

    <section aria-labelledby="featured-heading">
      <h2 id="featured-heading">Featured Stories</h2>
      <ul role="list">
        <li>
          <article>
            <picture>
              <source type="image/webp" srcset="story1.webp" />
              <img src="story1.jpg" alt="" width="400" height="225" loading="lazy" />
            </picture>
            <h3><a href="/article/2">Story Title</a></h3>
          </article>
        </li>
      </ul>
    </section>
  </main>

  <aside aria-label="Most popular">
    <h2>Most Read</h2>
    <ol>
      <li><a href="/article/3">Popular article</a></li>
    </ol>
  </aside>

  <footer role="contentinfo">
    <nav aria-label="Footer navigation">...</nav>
    <p><small>&copy; 2025 Daily Herald</small></p>
  </footer>
</body>
</html>`,
    explanation: 'Key decisions: (1) Single <h1> per page in the main content area; (2) All landmark regions labelled (aria-label or aria-labelledby); (3) Skip link for keyboard users; (4) fetchpriority="high" on hero image to avoid LCP penalty; (5) loading="lazy" on below-fold images; (6) preconnect for third-party origins; (7) time element with datetime for machine-readable dates; (8) role="search" on search form; (9) alt="" on decorative article thumbnails (article title is nearby label).',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/HTML/Element',
      'https://web.dev/articles/lcp',
      'https://www.w3.org/WAI/ARIA/apg/patterns/',
    ],
    tags: ['semantic-html', 'accessibility', 'performance', 'seo', 'system-design'],
    year: 2025,
  },
  {
    id: 'html-047',
    topic: 'html',
    difficulty: 'lead',
    type: 'mcq',
    question: 'What is fetchpriority="high" on an <img> or <link rel="preload"> used for and what core web vital does it primarily improve?',
    options: [
      'It forces parallel downloads and improves FID',
      'It signals to the browser\'s resource scheduler to download the resource at high priority, primarily improving LCP (Largest Contentful Paint)',
      'It enables HTTP/2 server push for the resource',
      'It disables browser-level lazy loading for the resource',
    ],
    answer: 1,
    explanation: 'fetchpriority="high" (Priority Hints API) tells the browser to schedule this resource at high network priority, overriding heuristic defaults. It is most impactful on the LCP image which the browser may otherwise under-prioritise. fetchpriority="low" can de-prioritise below-fold images even without loading="lazy".',
    references: ['https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/fetchPriority'],
    tags: ['performance', 'fetch-priority', 'lcp', 'resource-hints'],
    year: 2025,
  },
  {
    id: 'html-048',
    topic: 'html',
    difficulty: 'lead',
    type: 'mcq',
    question: 'When should you use aria-describedby vs aria-labelledby?',
    options: [
      'They are interchangeable; choose either for any descriptive association',
      'aria-labelledby provides the accessible name (primary label); aria-describedby provides additional descriptive text (secondary/supplementary information)',
      'aria-labelledby is for form fields; aria-describedby is for buttons',
      'aria-describedby replaces aria-label when the text is visible on screen',
    ],
    answer: 1,
    explanation: 'Accessible Name and Description Computation (ACCDC): aria-labelledby replaces or supplements the element\'s accessible name — screen readers announce it as the primary label. aria-describedby provides supplementary description announced after the name (e.g. field constraints, error messages, help text). Both reference IDs of other elements.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby'],
    tags: ['aria', 'accessibility', 'aria-labelledby', 'aria-describedby'],
    year: 2025,
  },
  {
    id: 'html-049',
    topic: 'html',
    difficulty: 'lead',
    type: 'mcq',
    question: 'How does the HTML spec define the difference between <section> and <div>?',
    options: [
      'They are identical; <section> is just a styled <div>',
      '<section> is a thematic grouping that contributes to the document outline and creates a landmark, while <div> is a generic non-semantic container with no implied role',
      '<section> can only contain <article> elements, <div> can contain anything',
      '<section> must have an id attribute to be valid HTML5',
    ],
    answer: 1,
    explanation: '<section> has an implicit ARIA role of "region" when it has an accessible name (via aria-labelledby/aria-label), which means it appears as a landmark to assistive technology. A <div> has no implicit ARIA role. Use <div> when no semantic grouping is needed; use <section> for thematically distinct content that warrants being in a document outline.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section'],
    tags: ['semantic-html', 'section', 'div', 'landmark'],
    year: 2025,
  },
  {
    id: 'html-050',
    topic: 'html',
    difficulty: 'lead',
    type: 'system-design',
    question: 'Describe a complete Web Components architecture for a design system\'s <ds-button> component. Cover: custom element lifecycle, shadow DOM encapsulation, property/attribute reflection, ARIA accessibility, and CSS custom property theming.',
    answer: `class DsButton extends HTMLElement {
  static formAssociated = true // allow use in forms

  static get observedAttributes() {
    return ['variant', 'disabled', 'aria-label']
  }

  #internals // ElementInternals for form association & ARIA

  constructor() {
    super()
    this.#internals = this.attachInternals()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = \`
      <style>
        :host {
          display: inline-block;
          --ds-btn-bg: var(--color-primary, #0066cc);
          --ds-btn-color: #fff;
          --ds-btn-radius: 4px;
        }
        :host([disabled]) {
          opacity: 0.4;
          pointer-events: none;
        }
        :host([variant="secondary"]) {
          --ds-btn-bg: var(--color-secondary, #666);
        }
        button {
          background: var(--ds-btn-bg);
          color: var(--ds-btn-color);
          border: none;
          border-radius: var(--ds-btn-radius);
          padding: 0.5em 1em;
          font: inherit;
          cursor: pointer;
        }
        button:focus-visible {
          outline: 3px solid var(--color-focus, #ffbf47);
          outline-offset: 2px;
        }
      </style>
      <button part="button">
        <slot></slot>
      </button>
    \`
    this._btn = this.shadowRoot.querySelector('button')
  }

  connectedCallback() {
    // reflect disabled to inner button
    this._btn.disabled = this.hasAttribute('disabled')
    // Set ARIA role on host for form context
    this.#internals.role = 'button'
  }

  attributeChangedCallback(name, _, val) {
    if (name === 'disabled') {
      this._btn.disabled = val !== null
    }
    if (name === 'variant') {
      // handled via :host([variant]) CSS selector
    }
    if (name === 'aria-label') {
      this._btn.setAttribute('aria-label', val ?? '')
    }
  }

  // Property <-> attribute reflection
  get disabled() { return this.hasAttribute('disabled') }
  set disabled(v) { v ? this.setAttribute('disabled', '') : this.removeAttribute('disabled') }
}

customElements.define('ds-button', DsButton)`,
    explanation: 'Key patterns: (1) formAssociated=true for form integration; (2) ElementInternals for ARIA and form state; (3) CSS custom properties with fallbacks for consumer theming; (4) CSS part="" for external styling entry points; (5) :host() selectors for variant/state styling; (6) :focus-visible for keyboard focus rings; (7) Attribute/property reflection pairing; (8) <slot> for composable content.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements',
      'https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals',
    ],
    tags: ['web-components', 'custom-elements', 'shadow-dom', 'design-system', 'accessibility'],
    year: 2025,
  },
  {
    id: 'html-051',
    topic: 'html',
    difficulty: 'lead',
    type: 'mcq',
    question: 'What is the purpose of the scope attribute on a <th> element in a complex data table?',
    options: [
      'It adds a CSS scope for styling that column',
      'It programmatically associates the header cell with the data cells in its row or column, improving screen reader table navigation',
      'It makes the column sortable natively',
      'It groups multiple headers under one parent header',
    ],
    answer: 1,
    explanation: 'scope="col" associates a <th> with cells in its column; scope="row" with cells in its row; scope="colgroup"/"rowgroup" with grouped columns/rows. This explicit association is critical for complex tables where implicit associations (first row = headers) may fail. Assistive technology uses it to announce which header applies when reading each cell.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th#scope'],
    tags: ['tables', 'accessibility', 'scope', 'aria'],
    year: 2025,
  },
  {
    id: 'html-052',
    topic: 'html',
    difficulty: 'lead',
    type: 'true-false',
    question: 'An import map must be declared before any <script type="module"> tags in the HTML document.',
    answer: true,
    explanation: 'The HTML spec requires the import map to be processed before any module scripts execute, because it defines the resolution for bare specifiers. If a module script is encountered before the import map, the browser throws an error. Place <script type="importmap"> as early as possible in <head>, before all module scripts.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap'],
    tags: ['import-maps', 'es-modules', 'script-loading'],
    year: 2025,
  },

  // ─── ADDITIONAL MIX ──────────────────────────────────────────────────────
  {
    id: 'html-053',
    topic: 'html',
    difficulty: 'mid',
    type: 'code-output',
    question: 'What is the output/behaviour when this script runs?',
    code: `// script.js loaded with: <script defer src="script.js"></script>
console.log(document.readyState)`,
    answer: '"interactive" or "complete" — the DOM is fully parsed when a deferred script runs.',
    explanation: 'Deferred scripts execute after HTML parsing is complete. At that point document.readyState is "interactive" (parsing done, resources may still be loading). If other deferred scripts have run and resources have loaded, it may be "complete". It will never be "loading" (that only occurs during parsing).',
    references: ['https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState'],
    tags: ['script-loading', 'defer', 'document-readystate'],
    year: 2025,
  },
  {
    id: 'html-054',
    topic: 'html',
    difficulty: 'junior',
    type: 'mcq',
    question: 'What does the loading="lazy" attribute on an <img> element do?',
    options: [
      'Preloads the image before the page renders',
      'Defers loading the image until it is near the viewport, saving bandwidth for offscreen images',
      'Loads the image at lower resolution first, then full resolution',
      'Disables the image caching mechanism',
    ],
    answer: 1,
    explanation: 'loading="lazy" is a native browser attribute that defers image loading until the image enters (or is near) the viewport. This saves bandwidth and improves initial page load time without any JavaScript. Never use loading="lazy" on above-the-fold/LCP images — it will hurt performance.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading'],
    tags: ['performance', 'lazy-loading', 'images'],
    year: 2025,
  },
  {
    id: 'html-055',
    topic: 'html',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is the purpose of <meta name="viewport" content="width=device-width, initial-scale=1">?',
    options: [
      'Sets the background color of the viewport',
      'Instructs the browser not to scale the page on mobile, rendering it at the device\'s actual CSS pixel width',
      'Forces the page into landscape orientation',
      'Disables pinch-to-zoom on touch devices',
    ],
    answer: 1,
    explanation: 'Without this tag, mobile browsers render pages at a virtual ~980px "desktop" viewport then scale down, causing tiny text. width=device-width sets the viewport to the device\'s actual CSS pixel width. initial-scale=1 prevents initial zoom. This is essential for responsive design.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag'],
    tags: ['meta-tags', 'viewport', 'responsive-design', 'mobile'],
    year: 2025,
  },
  {
    id: 'html-056',
    topic: 'html',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is Microdata in HTML and how does it relate to Schema.org?',
    options: [
      'Microdata is a deprecated way to store small amounts of data in attributes, similar to data-*',
      'Microdata is an HTML specification for embedding machine-readable structured data (from Schema.org vocabularies) into HTML using itemscope, itemtype, and itemprop attributes',
      'Microdata is the HTML name for Web Components templates',
      'Microdata refers to the <meta> tags in the document head',
    ],
    answer: 1,
    explanation: 'Microdata adds semantic annotation: itemscope marks an item, itemtype defines its Schema.org type (e.g. "https://schema.org/Product"), and itemprop names properties. Search engines use this to generate rich results (star ratings, prices, FAQ accordions). JSON-LD (via <script type="application/ld+json">) is now the preferred alternative as it\'s less intrusive.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/HTML/Microdata'],
    tags: ['microdata', 'schema-org', 'seo', 'structured-data'],
    year: 2025,
  },
  {
    id: 'html-057',
    topic: 'html',
    difficulty: 'mid',
    type: 'true-false',
    question: 'The <audio> element requires JavaScript to play audio; there is no native HTML-only way to provide playback controls.',
    answer: false,
    explanation: 'Adding the controls boolean attribute to <audio> renders native browser playback UI (play/pause, seek bar, volume) without any JavaScript: <audio src="audio.mp3" controls>. JavaScript is only needed for custom players, programmatic control, or the Web Audio API.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio'],
    tags: ['media', 'audio', 'html5'],
    year: 2025,
  },
  {
    id: 'html-058',
    topic: 'html',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is the difference between aria-hidden="true" and display:none for hiding content from assistive technology?',
    options: [
      'They are equivalent; use whichever is convenient',
      'aria-hidden="true" removes an element from the accessibility tree only (it remains visually and functionally present); display:none removes it both visually and from the accessibility tree',
      'aria-hidden="true" only affects screen readers; display:none also hides from keyboard',
      'display:none is deprecated in favour of aria-hidden for accessibility',
    ],
    answer: 1,
    explanation: 'aria-hidden="true" is for content that is visible but irrelevant to AT (decorative icons, duplicated content). display:none/visibility:hidden hide both visually and from AT. Never use aria-hidden on focusable elements — keyboard users can still Tab to them, creating a confusion where something is focusable but invisible to AT.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden'],
    tags: ['aria', 'accessibility', 'aria-hidden', 'visibility'],
    year: 2025,
  },
  {
    id: 'html-059',
    topic: 'html',
    difficulty: 'junior',
    type: 'mcq',
    question: 'Which HTML element is used to provide a fallback text description for a <canvas> element for accessibility?',
    options: [
      'A title attribute on the canvas',
      'An alt attribute on the canvas',
      'Content placed between the opening and closing <canvas> tags',
      'An aria-placeholder attribute',
    ],
    answer: 2,
    explanation: 'Content between <canvas> tags is shown when the browser doesn\'t support canvas. For accessibility, add a text description or a <table> fallback between the tags: <canvas>A bar chart showing sales data by month.</canvas>. Additionally use aria-label or aria-labelledby on the canvas element itself.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Hit_regions_and_accessibility'],
    tags: ['canvas', 'accessibility', 'fallback'],
    year: 2025,
  },
  {
    id: 'html-060',
    topic: 'html',
    difficulty: 'mid',
    type: 'debug',
    question: 'Find and fix the accessibility and semantic issue in this navigation.',
    code: `<div id="nav">
  <a href="/">Home</a>
  <a href="/about">About</a>
  <a href="/contact">Contact</a>
</div>`,
    answer: `<nav aria-label="Primary">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>`,
    explanation: 'Issues: (1) <div> has no semantic meaning — replaced with <nav> for landmark region. (2) aria-label differentiates this nav from others on the page. (3) Navigation links are a list — using <ul>/<li> communicates "3 items in a list" to screen readers. Without list markup, users have no count context.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav'],
    tags: ['semantic-html', 'navigation', 'accessibility', 'debug'],
    year: 2025,
  },
  {
    id: 'html-061',
    topic: 'html',
    difficulty: 'junior',
    type: 'mcq',
    question: 'What does the <aside> element semantically represent?',
    options: [
      'Content that appears beside the main content in a CSS layout',
      'Content tangentially related to the surrounding content (sidebars, callouts, related links)',
      'A footnote at the bottom of the page',
      'A secondary navigation menu',
    ],
    answer: 1,
    explanation: '<aside> represents content indirectly related to the surrounding content — sidebars, pull quotes, related articles, advertising. It is not defined by its CSS position. When used as a direct child of <body>, it has an implicit ARIA landmark role of "complementary".',
    references: ['https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside'],
    tags: ['semantic-html', 'aside', 'landmark'],
    year: 2025,
  },
  {
    id: 'html-062',
    topic: 'html',
    difficulty: 'senior',
    type: 'code-write',
    question: 'Write HTML that uses Canvas API to draw a filled blue rectangle (100x50px) at position (20, 20) on a 200x100 canvas.',
    answer: `<canvas id="myCanvas" width="200" height="100"></canvas>
<script>
  const canvas = document.getElementById('myCanvas')
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = '#0000ff'
  ctx.fillRect(20, 20, 100, 50)
</script>`,
    explanation: 'getContext("2d") returns a CanvasRenderingContext2D. Set fillStyle before calling fillRect(x, y, width, height). Always set canvas width/height as HTML attributes (not CSS) to define the drawing buffer resolution — CSS size only scales the element.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillRect'],
    tags: ['canvas', 'html5-apis', 'graphics'],
    year: 2025,
  },
  {
    id: 'html-063',
    topic: 'html',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is the srcdoc attribute on an <iframe> used for?',
    options: [
      'Specifies a fallback URL if the src fails to load',
      'Embeds an inline HTML document directly in the iframe without a separate URL',
      'Restricts which origins the iframe can load from',
      'Adds a title to the iframe for accessibility',
    ],
    answer: 1,
    explanation: 'srcdoc="<p>Hello</p>" renders the inline HTML string directly inside the iframe, taking precedence over src. Useful for sandboxed previews, email clients, and rich text editor previews. The content is subject to the same sandbox restrictions. Encode HTML entities properly for the attribute value.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#srcdoc'],
    tags: ['iframe', 'srcdoc', 'sandbox'],
    year: 2025,
  },
  {
    id: 'html-064',
    topic: 'html',
    difficulty: 'mid',
    type: 'true-false',
    question: 'The <link rel="preconnect"> tag establishes a TCP connection, TLS handshake, and DNS lookup to a third-party origin before the resource is actually requested.',
    answer: true,
    explanation: 'rel="preconnect" hints the browser to perform the full connection setup (DNS + TCP + TLS) to a given origin early. This saves 100–500ms for the first resource loaded from that origin. Best used for critical origins like font CDNs or API servers. Use sparingly — idle connections waste resources.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/preconnect'],
    tags: ['resource-hints', 'preconnect', 'performance'],
    year: 2025,
  },
  {
    id: 'html-065',
    topic: 'html',
    difficulty: 'lead',
    type: 'mcq',
    question: 'In the context of ARIA, what is the "First Rule of ARIA Use"?',
    options: [
      'Always add ARIA roles to every interactive element',
      'If you can use a native HTML element or attribute with the required semantics and behaviour, do so instead of repurposing another element and adding ARIA',
      'ARIA attributes must always be in lowercase',
      'Use ARIA roles before CSS classes in HTML for performance',
    ],
    answer: 1,
    explanation: 'The W3C ARIA specification\'s First Rule of ARIA: prefer native HTML semantics. Native elements like <button>, <input>, <nav>, <main> have built-in ARIA roles, keyboard interaction, and browser/AT support. ARIA supplements missing semantics — it never replaces good HTML. Misused ARIA actively harms accessibility.',
    references: ['https://www.w3.org/TR/using-aria/#rule1'],
    tags: ['aria', 'accessibility', 'semantic-html'],
    year: 2025,
  },
]
