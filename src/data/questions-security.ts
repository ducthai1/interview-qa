import type { Question } from '../types'

export const securityQuestions: Question[] = [
  {
    id: 'sec-001',
    topic: 'security',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is Cross-Site Scripting (XSS) and which type is most common in React applications?',
    options: [
      'A CSS injection attack; Stored XSS is most common',
      'Injecting malicious scripts into web pages; DOM-based XSS is most relevant for SPAs',
      'A server-side buffer overflow; Reflected XSS is most common',
      'A database injection attack; SQL-based XSS',
    ],
    answer: 1,
    explanation: 'XSS is injecting malicious JavaScript into web pages viewed by other users. Three types: 1) Reflected — malicious script in URL parameters reflected back. 2) Stored — script saved in database, served to all users. 3) DOM-based — client-side JavaScript processes untrusted data and inserts into DOM. In React SPAs, DOM-based XSS is most relevant because React apps manipulate the DOM client-side. React auto-escapes JSX content by default, but vulnerabilities arise from: dangerouslySetInnerHTML, href="javascript:...", eval(), and innerHTML in refs.',
    references: ['https://owasp.org/www-community/attacks/xss/'],
    tags: ['xss', 'dom-based', 'injection', 'owasp'],
    year: 2025,
  },
  {
    id: 'sec-002',
    topic: 'security',
    difficulty: 'junior',
    type: 'true-false',
    question: 'React automatically prevents all XSS attacks because it escapes JSX content.',
    answer: false,
    explanation: 'React escapes string values in JSX by default, which prevents most XSS. However, it does NOT protect against: 1) dangerouslySetInnerHTML — renders raw HTML. 2) href attributes — href="javascript:alert(1)" executes code. 3) ref.current.innerHTML — direct DOM manipulation bypasses React. 4) Server-side rendering with unsanitized user data in initial HTML. 5) Third-party libraries that insert HTML. Always sanitize user input with DOMPurify before using dangerouslySetInnerHTML. Validate URLs before using them in href/src attributes.',
    tags: ['xss', 'react', 'dangerouslySetInnerHTML', 'sanitization'],
    year: 2025,
  },
  {
    id: 'sec-003',
    topic: 'security',
    difficulty: 'mid',
    type: 'debug',
    question: 'Find the security vulnerability in this React component:',
    code: `function UserProfile({ user }) {
  return (
    <div>
      <h1>{user.name}</h1>
      <div dangerouslySetInnerHTML={{ __html: user.bio }} />
      <a href={user.website}>Visit website</a>
    </div>
  )
}`,
    answer: 'Two vulnerabilities: 1) dangerouslySetInnerHTML renders user.bio as raw HTML — XSS if bio contains <script> tags. 2) user.website could be "javascript:alert(1)" — XSS via href.',
    solutionCode: `import DOMPurify from 'dompurify'

function isSafeUrl(url: string): boolean {
  try {
    const parsed = new URL(url)
    return parsed.protocol === 'https:' || parsed.protocol === 'http:'
  } catch {
    return false
  }
}

function UserProfile({ user }) {
  return (
    <div>
      <h1>{user.name}</h1>
      {/* Fix 1: sanitize HTML before rendering */}
      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(user.bio) }} />
      {/* Fix 2: validate URL protocol to prevent javascript: XSS */}
      {isSafeUrl(user.website) && (
        <a href={user.website} rel="noopener noreferrer">Visit website</a>
      )}
    </div>
  )
}`,
    explanation: 'Fixes: 1) Sanitize the bio with DOMPurify: dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(user.bio) }}. Or better, use a markdown renderer that doesnt allow raw HTML. 2) Validate the website URL: only allow http/https protocols. Check with: new URL(user.website).protocol === "https:" before rendering. Or use a URL validation library. Never trust user-provided URLs or HTML content without sanitization.',
    references: ['https://github.com/cure53/DOMPurify'],
    tags: ['xss', 'dangerouslySetInnerHTML', 'dompurify', 'url-validation'],
    year: 2025,
  },
  {
    id: 'sec-004',
    topic: 'security',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is Content Security Policy (CSP) and how does it prevent XSS attacks?',
    options: [
      'A JavaScript library that validates content types',
      'An HTTP header that restricts which sources of content (scripts, styles, images) the browser is allowed to load and execute',
      'A CSS property that hides sensitive content',
      'A server-side firewall configuration',
    ],
    answer: 1,
    explanation: 'CSP is an HTTP response header (Content-Security-Policy) that tells the browser which content sources are trusted. Directives: script-src (allowed script sources), style-src, img-src, connect-src (API endpoints), default-src. CSP prevents XSS by: 1) Blocking inline scripts (script-src without "unsafe-inline"). 2) Only allowing scripts from whitelisted origins. 3) Blocking eval() and similar. Example: Content-Security-Policy: default-src "self"; script-src "self" https://cdn.example.com; style-src "self" "unsafe-inline". Use nonces or hashes for inline scripts needed by frameworks.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP'],
    tags: ['csp', 'http-headers', 'xss-prevention', 'script-src'],
    year: 2025,
  },
  {
    id: 'sec-005',
    topic: 'security',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is CORS (Cross-Origin Resource Sharing) and why does it exist?',
    options: [
      'A CSS framework for responsive design',
      'A browser security mechanism that restricts HTTP requests from one origin to a different origin unless the server explicitly allows it',
      'A Node.js package for handling cookies',
      'A JavaScript pattern for managing asynchronous operations',
    ],
    answer: 1,
    explanation: 'CORS is a browser security mechanism implementing the Same-Origin Policy. By default, browsers block frontend JavaScript from making requests to a different origin (protocol + domain + port). The server must send Access-Control-Allow-Origin headers to permit cross-origin requests. Preflight requests (OPTIONS) are sent for non-simple requests (POST with JSON, custom headers). CORS protects users from malicious sites making authenticated requests to other sites. Common setup: Access-Control-Allow-Origin: https://myapp.com, Access-Control-Allow-Methods: GET,POST, Access-Control-Allow-Credentials: true.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS'],
    tags: ['cors', 'same-origin-policy', 'http-headers', 'preflight'],
    year: 2025,
  },
  {
    id: 'sec-006',
    topic: 'security',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is CSRF (Cross-Site Request Forgery) and how can frontend applications prevent it?',
    options: [
      'A type of XSS attack prevented by input validation',
      'An attack where a malicious site tricks the browser into making authenticated requests to another site; prevented with CSRF tokens, SameSite cookies, and custom headers',
      'A DNS spoofing attack prevented by HTTPS',
      'A password brute-force attack prevented by rate limiting',
    ],
    answer: 1,
    explanation: 'CSRF exploits the fact that browsers automatically include cookies with every request to a domain. A malicious site can create a form/link that submits to your-bank.com — the browser includes your auth cookie, so the request appears legitimate. Prevention: 1) CSRF tokens — unique tokens in forms/headers that the attacker cant guess. 2) SameSite cookie attribute — SameSite=Strict or Lax prevents cookies from being sent on cross-origin requests. 3) Check Origin/Referer headers on the server. 4) Require custom headers (X-Requested-With) that cant be set by HTML forms.',
    references: ['https://owasp.org/www-community/attacks/csrf'],
    tags: ['csrf', 'samesite', 'cookies', 'tokens', 'owasp'],
    year: 2025,
  },
  {
    id: 'sec-007',
    topic: 'security',
    difficulty: 'senior',
    type: 'mcq',
    question: 'When storing authentication tokens in a frontend application, which approach is most secure?',
    options: [
      'localStorage — easy to access from JavaScript',
      'HttpOnly, Secure, SameSite cookies — inaccessible from JavaScript',
      'sessionStorage — cleared when tab closes',
      'A global JavaScript variable in window',
    ],
    answer: 1,
    explanation: 'HttpOnly cookies are the most secure for auth tokens because: 1) HttpOnly flag prevents JavaScript access — immune to XSS token theft. 2) Secure flag ensures transmission only over HTTPS. 3) SameSite=Strict/Lax prevents CSRF. 4) Automatic inclusion in requests — no manual header management. localStorage/sessionStorage are accessible via JavaScript, so any XSS vulnerability exposes tokens. The trade-off: cookies require CORS configuration with credentials:include, and have 4KB size limits. For SPAs, use short-lived access tokens in memory + HttpOnly refresh tokens in cookies.',
    tags: ['auth', 'cookies', 'httponly', 'localstorage', 'jwt'],
    year: 2025,
  },
  {
    id: 'sec-008',
    topic: 'security',
    difficulty: 'junior',
    type: 'true-false',
    question: 'HTTPS (TLS) encrypts data in transit and prevents man-in-the-middle attacks on web applications.',
    answer: true,
    explanation: 'HTTPS uses TLS (Transport Layer Security) to encrypt all data between the browser and server, preventing: 1) Eavesdropping — attackers on the network cant read the data. 2) Tampering — data cant be modified in transit. 3) Impersonation — server identity is verified via certificates. HTTPS is essential for: auth tokens, personal data, payment info, and any sensitive operations. Modern browsers mark HTTP sites as "Not Secure". HSTS (HTTP Strict Transport Security) header forces HTTPS and prevents SSL stripping attacks. All modern web apps should use HTTPS exclusively.',
    tags: ['https', 'tls', 'encryption', 'mitm'],
    year: 2025,
  },
  {
    id: 'sec-009',
    topic: 'security',
    difficulty: 'mid',
    type: 'code-output',
    question: 'What is the security issue in this Next.js API route?',
    code: `// pages/api/user.ts
export default function handler(req, res) {
  const { id } = req.query
  const query = \`SELECT * FROM users WHERE id = \${id}\`
  db.query(query).then(user => res.json(user))
}`,
    answer: 'SQL Injection — the user-provided id is directly interpolated into the SQL query string without parameterization.',
    explanation: 'An attacker could send id=1; DROP TABLE users;-- to delete the entire table. Fix: use parameterized queries: db.query("SELECT * FROM users WHERE id = $1", [id]). ORMs like Prisma and Drizzle handle parameterization automatically. Never construct SQL queries with string concatenation/interpolation of user input. This applies to any database interaction, not just SQL — NoSQL injection is also possible with MongoDB if using $where or $regex with user input.',
    references: ['https://owasp.org/www-community/attacks/SQL_Injection'],
    tags: ['sql-injection', 'parameterized-queries', 'owasp', 'database'],
    year: 2025,
  },
  {
    id: 'sec-010',
    topic: 'security',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is Subresource Integrity (SRI) and when should you use it?',
    options: [
      'A JavaScript API for checking memory integrity',
      'A mechanism that verifies external scripts/stylesheets loaded from CDNs have not been tampered with, using cryptographic hashes',
      'A React component lifecycle method',
      'An encryption standard for localStorage',
    ],
    answer: 1,
    explanation: 'SRI adds a cryptographic hash (SHA-256/384/512) to <script> and <link> tags that load external resources from CDNs. The browser computes the hash of the downloaded file and compares it to the expected hash — if they dont match, the resource is blocked. This protects against: CDN compromise, supply chain attacks, and man-in-the-middle modifications. Usage: <script src="https://cdn.example.com/lib.js" integrity="sha384-abc123..." crossorigin="anonymous">. Generate hashes with: shasum -b -a 384 file.js | xxd -r -p | base64. Use SRI for all third-party CDN resources.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity'],
    tags: ['sri', 'cdn', 'supply-chain', 'hash', 'integrity'],
    year: 2025,
  },
  {
    id: 'sec-011',
    topic: 'security',
    difficulty: 'mid',
    type: 'true-false',
    question: 'JWT (JSON Web Token) stored in localStorage is safe because the token is signed.',
    answer: false,
    explanation: 'JWT signing prevents tampering (modifying claims) but does NOT prevent theft. If stored in localStorage, any XSS vulnerability allows an attacker to steal the JWT and impersonate the user. Signing ensures the server can verify the token wasnt modified, but anyone who possesses the token can use it. Safer approach: store JWT in HttpOnly cookies (inaccessible to JavaScript). If you must use localStorage, keep tokens short-lived (15 min), implement token rotation, and invest heavily in XSS prevention. Also note: JWTs are base64-encoded, NOT encrypted — claims are readable by anyone.',
    tags: ['jwt', 'localstorage', 'xss', 'token-theft', 'httponly'],
    year: 2025,
  },
  {
    id: 'sec-012',
    topic: 'security',
    difficulty: 'senior',
    type: 'mcq',
    question: 'How should a frontend application handle OAuth 2.0 Authorization Code flow with PKCE for Single Page Applications?',
    options: [
      'Use the Implicit Grant flow — its designed for SPAs',
      'Store the client secret in the frontend and use the standard Authorization Code flow',
      'Use Authorization Code flow with PKCE (Proof Key for Code Exchange) — no client secret needed on the frontend',
      'Use Resource Owner Password Credentials — send username/password directly',
    ],
    answer: 2,
    explanation: 'The OAuth 2.0 Authorization Code flow with PKCE is the recommended flow for SPAs. PKCE adds a code_verifier (random string) and code_challenge (SHA256 hash) that prevents authorization code interception attacks — even without a client secret. Flow: 1) Generate random code_verifier and its SHA256 hash (code_challenge). 2) Redirect to auth server with code_challenge. 3) After user authenticates, receive authorization code. 4) Exchange code + code_verifier for tokens. The Implicit flow is deprecated (tokens in URL fragments are insecure). Never store client secrets in frontend code.',
    references: ['https://oauth.net/2/pkce/'],
    tags: ['oauth', 'pkce', 'authorization-code', 'spa', 'authentication'],
    year: 2025,
  },
  {
    id: 'sec-013',
    topic: 'security',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is clickjacking and how do you prevent it?',
    options: [
      'A type of XSS attack; prevented by input sanitization',
      'An attack that hijacks user clicks by overlaying a transparent iframe over a legitimate page; prevented by X-Frame-Options and CSP frame-ancestors',
      'A JavaScript event hijacking technique; prevented by stopPropagation()',
      'A CSS animation attack; prevented by disabling animations',
    ],
    answer: 1,
    explanation: 'Clickjacking loads your website in an invisible iframe on an attacker controlled page, positioned so the user unknowingly clicks buttons on your site (like "Delete Account" or "Transfer Money"). Prevention: 1) X-Frame-Options: DENY or SAMEORIGIN header — prevents your site from being framed. 2) CSP frame-ancestors directive: Content-Security-Policy: frame-ancestors "self" (more flexible, CSP Level 2). 3) JavaScript frame-busting as a fallback: if (window.top !== window.self) window.top.location = window.self.location. Modern apps should always set X-Frame-Options or frame-ancestors.',
    references: ['https://owasp.org/www-community/attacks/Clickjacking'],
    tags: ['clickjacking', 'x-frame-options', 'frame-ancestors', 'iframe'],
    year: 2025,
  },
  {
    id: 'sec-014',
    topic: 'security',
    difficulty: 'junior',
    type: 'mcq',
    question: 'Why should you always add `rel="noopener noreferrer"` to external links that open in a new tab?',
    options: [
      'To improve SEO',
      'To prevent the new page from accessing window.opener and potentially redirecting the original page (reverse tabnabbing)',
      'To load the page faster',
      'To prevent cookies from being sent',
    ],
    answer: 1,
    explanation: 'When you use target="_blank" without rel="noopener", the opened page can access window.opener.location and redirect your original page to a phishing site (reverse tabnabbing). Adding rel="noopener" prevents this access. rel="noreferrer" additionally prevents sending the Referer header. Modern browsers (Chrome 88+) automatically add noopener for target="_blank", but its still best practice to add it explicitly for older browser support and to be explicit about intent. React and Next.js handle this automatically for external links in their Link components.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/noopener'],
    tags: ['noopener', 'noreferrer', 'tabnabbing', 'target-blank'],
    year: 2025,
  },
  {
    id: 'sec-015',
    topic: 'security',
    difficulty: 'senior',
    type: 'true-false',
    question: 'Environment variables prefixed with NEXT_PUBLIC_ or VITE_ are safe for storing API secrets because they are "environment variables".',
    answer: false,
    explanation: 'NEXT_PUBLIC_ and VITE_ prefixed env vars are deliberately exposed to the client bundle — they are embedded in the JavaScript during build time and visible to anyone who inspects the source. NEVER put secrets (API keys, database credentials, private keys) in client-exposed env vars. Use them only for: public API URLs, analytics IDs, feature flags, and public keys. Keep secrets in server-only env vars (no prefix in Next.js, or in .env files not prefixed with VITE_ in Vite). Access secrets only in server-side code (API routes, Server Actions, middleware).',
    tags: ['env-vars', 'next-public', 'vite', 'secrets', 'client-bundle'],
    year: 2025,
  },
  {
    id: 'sec-016',
    topic: 'security',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is the purpose of DOMPurify in frontend security?',
    options: [
      'It purifies DOM elements by removing unused nodes for performance',
      'It sanitizes HTML strings by removing potentially malicious tags, attributes, and JavaScript, preventing XSS',
      'It encrypts DOM content',
      'It validates CSS properties',
    ],
    answer: 1,
    explanation: 'DOMPurify is the industry-standard HTML sanitization library. It parses HTML strings and removes: script tags, event handlers (onclick, onerror), javascript: URLs, data: URLs in certain contexts, and other XSS vectors. It preserves safe HTML formatting (bold, links, images). Usage: DOMPurify.sanitize(dirtyHTML). Always use it with dangerouslySetInnerHTML in React: <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(userContent) }} />. Configure allowed tags/attributes: DOMPurify.sanitize(html, { ALLOWED_TAGS: ["b", "i", "a"] }).',
    references: ['https://github.com/cure53/DOMPurify'],
    tags: ['dompurify', 'sanitization', 'xss-prevention', 'html'],
    year: 2025,
  },
  {
    id: 'sec-017',
    topic: 'security',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What security headers should every production frontend application set?',
    options: [
      'Only Content-Type is needed',
      'Content-Security-Policy, X-Content-Type-Options, X-Frame-Options, Strict-Transport-Security, Referrer-Policy, Permissions-Policy',
      'Cache-Control and ETag only',
      'Authorization and Cookie headers',
    ],
    answer: 1,
    explanation: 'Essential security headers: 1) Content-Security-Policy — restrict content sources (XSS prevention). 2) X-Content-Type-Options: nosniff — prevent MIME type sniffing. 3) X-Frame-Options: DENY — prevent clickjacking. 4) Strict-Transport-Security (HSTS) — force HTTPS. 5) Referrer-Policy: strict-origin-when-cross-origin — control referrer information leaking. 6) Permissions-Policy — restrict browser features (camera, microphone, geolocation). Check your headers at securityheaders.com. In Next.js, set these in next.config.js headers(). In Vercel, use vercel.json headers.',
    references: ['https://securityheaders.com/'],
    tags: ['security-headers', 'csp', 'hsts', 'x-frame-options', 'production'],
    year: 2025,
  },
  {
    id: 'sec-018',
    topic: 'security',
    difficulty: 'mid',
    type: 'true-false',
    question: 'Using eval() or new Function() with user-provided strings is a safe practice if you validate the input first.',
    answer: false,
    explanation: 'eval() and new Function() execute arbitrary JavaScript and should NEVER be used with user input, regardless of validation. Input validation can always be bypassed by sufficiently creative attackers — the attack surface is too large. Even with "sanitized" input, edge cases and encoding tricks can lead to code execution. CSP script-src without "unsafe-eval" blocks these functions entirely. Alternatives: JSON.parse() for data, template literals for string interpolation, computed property access for dynamic keys, and proper parsers for expression evaluation (like mathjs for math expressions).',
    tags: ['eval', 'code-injection', 'unsafe-eval', 'csp'],
    year: 2025,
  },
  {
    id: 'sec-019',
    topic: 'security',
    difficulty: 'senior',
    type: 'system-design',
    question: 'Design a secure authentication flow for a React SPA that connects to a REST API.',
    answer: 'OAuth2 PKCE for login, short-lived access tokens in memory, HttpOnly refresh token cookies, token rotation, logout on all devices.',
    explanation: 'Secure SPA auth architecture: 1) Login via OAuth2 Authorization Code + PKCE (or email/password to your own auth server). 2) Server returns short-lived access token (15 min) in response body + long-lived refresh token in HttpOnly Secure SameSite=Strict cookie. 3) Store access token in memory (React state/context) — NOT localStorage. 4) Attach access token as Authorization: Bearer header via Axios interceptor. 5) When access token expires, silently call refresh endpoint — refresh cookie is sent automatically. 6) Implement refresh token rotation (new refresh token on each use, invalidate old one). 7) Logout: clear memory + server invalidates refresh token. 8) CSRF protection: SameSite cookie + custom header check.',
    tags: ['authentication', 'oauth', 'pkce', 'refresh-token', 'access-token'],
    year: 2026,
  },
  {
    id: 'sec-020',
    topic: 'security',
    difficulty: 'lead',
    type: 'mcq',
    question: 'What is a supply chain attack in the context of frontend development, and how do you mitigate it?',
    options: [
      'An attack on the physical server supply chain',
      'Compromising npm packages, CDN resources, or build tools to inject malicious code into downstream applications',
      'A DDoS attack on package registries',
      'Stealing source code from GitHub',
    ],
    answer: 1,
    explanation: 'Supply chain attacks target the software dependencies your app relies on. Examples: compromised npm packages (event-stream incident), typosquatting (lodash vs 1odash), hijacked maintainer accounts, malicious CDN modifications. Mitigations: 1) Lock dependencies (package-lock.json). 2) Use npm audit and Snyk for vulnerability scanning. 3) SRI for CDN resources. 4) Pin exact versions. 5) Review dependency changes in PRs. 6) Use private npm registry/proxy (Verdaccio, Artifactory). 7) Enable npm provenance (--provenance flag). 8) Minimize dependencies. 9) Use Socket.dev for supply chain analysis. 10) Two-factor auth on npm accounts.',
    references: ['https://socket.dev/'],
    tags: ['supply-chain', 'npm', 'dependencies', 'sri', 'security-audit'],
    year: 2026,
  },
  {
    id: 'sec-021',
    topic: 'security',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is the Trusted Types API and how does it prevent DOM-based XSS?',
    options: [
      'Trusted Types is a way to verify TLS certificates from JavaScript',
      'Trusted Types is a browser API that restricts which values can be passed to dangerous DOM sinks (innerHTML, eval, document.write, src attributes). You define a policy that sanitizes/validates strings before they become DOM content — the browser enforces this, making it impossible to accidentally assign a raw string to innerHTML.',
      'Trusted Types is a React-specific API for validating component props',
      'Trusted Types replaces HTTPS for securing DOM manipulation',
    ],
    answer: 1,
    explanation: 'Trusted Types enforcement: CSP header trustedTypes: require-trusted-types-for "script" causes the browser to throw a TypeError when raw strings are assigned to innerHTML, eval(), or script src. Developers must use a policy: const policy = trustedTypes.createPolicy("default", { createHTML: (input) => DOMPurify.sanitize(input) }). Then: element.innerHTML = policy.createHTML(userContent) — the browser accepts it. This catches XSS at the sink level, not just the source, and works even when a third-party library tries to inject raw HTML. Supported in Chrome/Edge; polyfills exist for Firefox. Enable in CSP: Content-Security-Policy: require-trusted-types-for "script"; trusted-types default.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/API/Trusted_Types_API'],
    tags: ['trusted-types', 'xss-prevention', 'csp', 'dom-security'],
    year: 2025,
  },
  {
    id: 'sec-022',
    topic: 'security',
    difficulty: 'senior',
    type: 'debug',
    question: 'Find the security vulnerability in this postMessage handler:',
    code: `window.addEventListener('message', (event) => {
  // Handle messages from our payment iframe
  const { type, amount, currency } = event.data

  if (type === 'PAYMENT_COMPLETE') {
    updateOrderStatus(amount, currency)
    showSuccessMessage()
  }
})`,
    answer: 'Missing origin validation — any webpage can send a message to this handler. A malicious site in another tab can call window.opener.postMessage({ type: "PAYMENT_COMPLETE", amount: 0, currency: "USD" }) to trigger a fake payment confirmation.',
    solutionCode: `const TRUSTED_ORIGIN = 'https://payment.trusted-provider.com'
let paymentIframe: HTMLIFrameElement | null = null

window.addEventListener('message', (event) => {
  // Fix 1: validate origin
  if (event.origin !== TRUSTED_ORIGIN) return

  // Fix 2: validate source (ensure it's from our payment iframe)
  if (event.source !== paymentIframe?.contentWindow) return

  const { type, amount, currency } = event.data

  // Fix 3: validate data types before using in business logic
  if (type === 'PAYMENT_COMPLETE' && typeof amount === 'number' && typeof currency === 'string') {
    updateOrderStatus(amount, currency)
    showSuccessMessage()
  }
})`,
    explanation: 'Fix: always validate event.origin before processing: if (event.origin !== "https://payment.trusted-provider.com") return; Never process postMessage data without checking the origin. Also validate event.source to ensure it is the expected frame. Secure pattern: window.addEventListener("message", (event) => { if (event.origin !== TRUSTED_ORIGIN) return; if (event.source !== paymentIframe.contentWindow) return; // process safely }). Additionally: validate the data schema/types before using values in business logic, and use structuredClone() if you need to store the data to avoid prototype pollution.',
    tags: ['postMessage', 'origin-validation', 'iframe', 'xss', 'cross-origin'],
    year: 2025,
  },
  {
    id: 'sec-023',
    topic: 'security',
    difficulty: 'lead',
    type: 'mcq',
    question: 'What is a dependency confusion attack and how does it differ from typosquatting?',
    options: [
      'They are the same attack with different names',
      'Typosquatting: attacker publishes a public npm package with a name similar to a popular one (lodahs vs lodash). Dependency confusion: attacker publishes a public package with the EXACT same name as your private internal package — npm resolves the public one first if the version is higher, silently replacing your internal package with the attacker\'s.',
      'Dependency confusion only affects Python pip, not npm',
      'Dependency confusion requires physical access to the developer\'s machine',
    ],
    answer: 1,
    explanation: 'Dependency confusion (namespace confusion) attack: if your package.json references @mycompany/internal-utils and npm cannot find it in your private registry, it checks the public npm registry. An attacker who knows your internal package name (from job listings, error messages, or leaked configs) can publish a malicious @mycompany/internal-utils to the public registry with version 9999.0.0 — higher than your internal version. npm resolves the higher public version. Mitigations: (1) Scope all internal packages to a private org scope and configure the registry to NEVER resolve that scope from public npm. (2) .npmrc: @mycompany:registry=https://your-private-registry.com. (3) npm provenance for all published packages. (4) Dependency review in CI.',
    tags: ['dependency-confusion', 'typosquatting', 'supply-chain', 'npm', 'private-registry'],
    year: 2025,
  },
  {
    id: 'sec-024',
    topic: 'security',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is prototype pollution in JavaScript and how can it lead to security vulnerabilities in frontend applications?',
    options: [
      'Prototype pollution is a performance issue from too many prototype chain lookups',
      'Prototype pollution is when an attacker modifies Object.prototype or Array.prototype by exploiting recursive merge/clone functions that handle __proto__ or constructor.prototype keys — causing unexpected properties on all objects in the application, potentially leading to XSS, privilege escalation, or DoS.',
      'Prototype pollution only affects Node.js server-side code, not browsers',
      'Prototype pollution is automatically prevented by strict mode ("use strict")',
    ],
    answer: 1,
    explanation: 'Prototype pollution example: a merge function processes user input { "__proto__": { "isAdmin": true } } → sets Object.prototype.isAdmin = true → now every object in the app has isAdmin: true when checked. Vulnerable code: function merge(target, src) { for (let key in src) target[key] = src[key]; } — the key "__proto__" writes to the prototype. Frontend impact: (1) Bypassing authorization checks. (2) Overriding library functions on prototype. (3) Triggering unexpected code paths. Mitigations: use Object.hasOwn() instead of hasOwnProperty, validate keys against a blocklist (__proto__, constructor, prototype), use Object.create(null) for data objects, use lodash 4.17.21+ (patched), use structuredClone() for deep cloning.',
    tags: ['prototype-pollution', 'javascript-security', 'injection', 'object-prototype'],
    year: 2025,
  },
  {
    id: 'sec-025',
    topic: 'security',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is a ReDoS (Regular expression Denial of Service) attack and how can it affect frontend applications?',
    options: [
      'ReDoS is a server-only attack that does not affect client-side JavaScript',
      'ReDoS exploits regex patterns with catastrophic backtracking — input crafted to cause exponential evaluation time. In the browser, a malicious input against a vulnerable regex in a form validator can freeze the UI thread for seconds or minutes. Example: /^(a+)+$/ against "aaaaaaaaaaX" causes exponential backtracking.',
      'ReDoS requires a distributed network of attackers to be effective',
      'ReDoS only affects server-side regex engines, not JavaScript V8',
    ],
    answer: 1,
    explanation: 'ReDoS in frontend: form validators, search inputs, and markdown parsers often use complex regex. A vulnerable pattern like /^([a-zA-Z]+)*$/ evaluated against a carefully crafted string causes JavaScript\'s regex engine to backtrack exponentially — the browser UI thread freezes. Mitigations: (1) Use safe-regex or vuln-regex-detector to scan for catastrophically backtracking patterns. (2) Validate inputs with length limits before regex evaluation. (3) Use simple, specific regex — avoid nested quantifiers like (a+)+. (4) Move complex validation to a worker thread (Web Worker) so UI thread stays responsive. (5) Use regex parsers with linear-time guarantees (RE2 via wasm). Test with ReDoS checkers like regex101.com\'s "explained" view.',
    tags: ['redos', 'regex', 'dos', 'input-validation', 'performance-security'],
    year: 2025,
  },
  {
    id: 'sec-026',
    topic: 'security',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What are the security implications of each cookie attribute: HttpOnly, Secure, SameSite, Domain, Path, and Max-Age?',
    options: [
      'Only SameSite matters for security — the rest are for performance',
      'HttpOnly: blocks JavaScript access (prevents XSS token theft). Secure: only sent over HTTPS (prevents network sniffing). SameSite=Strict: never sent cross-site (CSRF prevention). SameSite=Lax: sent on top-level navigation but not embedded requests (balance of security and usability). Domain: broader domains increase cookie scope/attack surface. Path: limits cookie to specific paths. Max-Age/Expires: limits theft window; session cookies (no Max-Age) expire on browser close.',
      'All cookie attributes are optional and only affect performance',
      'HttpOnly prevents CSRF; SameSite prevents XSS',
    ],
    answer: 1,
    explanation: 'Cookie security deep dive: (1) HttpOnly: document.cookie cannot read it — protects against XSS stealing auth tokens. Does NOT prevent CSRF. (2) Secure: ensures cookie only travels over HTTPS — prevents man-in-the-middle theft on HTTP. (3) SameSite=Strict: cookie not sent when navigating from another site — strongest CSRF protection but breaks OAuth redirects. SameSite=Lax: sent on top-level GET navigation — good default. SameSite=None: requires Secure, used for legitimate cross-site embeds. (4) Domain: __Host- prefix (e.g., __Host-session) enforces Secure, no Domain, Path=/ — strongest cookie scoping. (5) Short Max-Age reduces the theft window. Ideal auth cookie: __Host-session=...; Secure; HttpOnly; SameSite=Strict; Path=/.',
    tags: ['cookies', 'httponly', 'samesite', 'secure', 'csrf', 'xss'],
    year: 2025,
  },
  {
    id: 'sec-027',
    topic: 'security',
    difficulty: 'lead',
    type: 'mcq',
    question: 'How do CSP nonces and hashes work as alternatives to "unsafe-inline" for allowing specific inline scripts?',
    options: [
      '"unsafe-inline" is the only way to allow inline scripts with CSP',
      'Nonces: server generates a cryptographically random value per request, adds it to the CSP header (script-src "nonce-{value}") and to each allowed <script nonce="{value}">. Only scripts with the matching nonce execute. Hashes: compute SHA-256 of inline script content, add to CSP (script-src "sha256-{hash}"). Only inline scripts matching the hash execute. Hashes work for static content; nonces work for dynamic content.',
      'Nonces and hashes only work with external scripts, not inline scripts',
      'CSP nonces are the same as CSRF tokens',
    ],
    answer: 1,
    explanation: 'CSP nonce implementation: (1) Per request: crypto.randomUUID() → nonce. (2) CSP header: Content-Security-Policy: script-src "nonce-abc123xyz". (3) HTML: <script nonce="abc123xyz">/* allowed inline script */</script>. Scripts without the nonce (including injected XSS scripts) are blocked. Nonces must be: cryptographically random, unique per response, at least 128 bits. Hash approach: compute SHA-256 of the exact script content → base64 encode → Content-Security-Policy: script-src "sha256-{base64hash}". If the script content changes, the hash must be updated. Next.js 15 supports nonces natively via middleware. Use the nonce approach for server-rendered apps; hashes for purely static scripts.',
    tags: ['csp', 'nonces', 'hashes', 'inline-scripts', 'xss-prevention'],
    year: 2025,
  },
  {
    id: 'sec-028',
    topic: 'security',
    difficulty: 'mid',
    type: 'mcq',
    question: 'According to OWASP Top 10 considerations for frontend (2025 perspective), what are the most critical client-side security risks?',
    options: [
      'Frontend applications have no OWASP-relevant risks — OWASP only applies to backends',
      'Frontend-relevant OWASP risks: A01 Broken Access Control (client-side route guards are not security — enforce on server), A03 Injection (XSS via DOM manipulation, template injection), A05 Security Misconfiguration (missing security headers, exposed DevTools in production), A06 Vulnerable Components (outdated npm packages), A08 Software Integrity Failures (unverified CDN resources without SRI).',
      'Only SQL injection is relevant for frontend security assessments',
      'Frontend applications are fully protected by the browser\'s built-in security model',
    ],
    answer: 1,
    explanation: 'Frontend OWASP mapping: A01 Broken Access Control: hiding UI elements is not authorization — always validate on the server. A03 Injection: DOM XSS via innerHTML/dangerouslySetInnerHTML, URL-based injection, template injection in client-side rendering. A05 Misconfiguration: missing CSP, CORS too permissive (Access-Control-Allow-Origin: *), sensitive data in console.log in production. A06 Vulnerable Components: outdated React, lodash with known CVEs — run npm audit in CI. A07 Auth Failures: tokens in localStorage, no session expiry. A08 Integrity Failures: CDN scripts without SRI, compromised build pipeline. Use securityheaders.com and observatory.mozilla.org to audit headers.',
    tags: ['owasp', 'frontend-security', 'access-control', 'xss', 'misconfiguration'],
    year: 2025,
  },
  {
    id: 'sec-029',
    topic: 'security',
    difficulty: 'lead',
    type: 'mcq',
    question: 'How would you use the Web Crypto API to implement client-side encryption for sensitive data before sending it to a server?',
    options: [
      'The Web Crypto API is for generating random numbers only',
      'Use SubtleCrypto: generate an AES-GCM key (crypto.subtle.generateKey), encrypt data (crypto.subtle.encrypt), convert to base64 for transmission. For key exchange: ECDH key agreement generates a shared secret. For signing: ECDSA generates non-repudiable signatures. All operations are async, work in browsers and Web Workers, and use native implementations (hardware-accelerated where available).',
      'Client-side encryption is always weaker than server-side — never use the Web Crypto API',
      'Web Crypto API requires a special browser extension to function',
    ],
    answer: 1,
    explanation: 'Web Crypto API usage: (1) Generate key: const key = await crypto.subtle.generateKey({ name: "AES-GCM", length: 256 }, true, ["encrypt", "decrypt"]). (2) Encrypt: const iv = crypto.getRandomValues(new Uint8Array(12)); const ciphertext = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, data). (3) Key derivation from password: PBKDF2 — crypto.subtle.importKey("raw", passwordBuffer, "PBKDF2", false, ["deriveKey"]) then deriveKey with 100,000 iterations. Use cases: end-to-end encrypted messaging (keys never leave client), encrypting sensitive form data before upload, zero-knowledge proofs. Note: client-side encryption protects data from the server operator — the server stores ciphertext it cannot read.',
    tags: ['web-crypto-api', 'encryption', 'aes-gcm', 'subtle-crypto', 'client-side-security'],
    year: 2025,
  },
  {
    id: 'sec-030',
    topic: 'security',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is the Permissions Policy HTTP header and how does it restrict browser feature access?',
    options: [
      'Permissions Policy controls which npm packages a page can import',
      'Permissions Policy (formerly Feature Policy) controls which browser features a page and its embedded iframes can access. Example: Permissions-Policy: camera=(), microphone=(), geolocation=(self) — disables camera/mic globally and restricts geolocation to the current origin only. This limits the impact of XSS and compromised third-party scripts.',
      'Permissions Policy is a JavaScript API for requesting user permissions',
      'Permissions Policy replaces CORS for cross-origin resource access',
    ],
    answer: 1,
    explanation: 'Permissions Policy directives: camera=() denies all. microphone=(self) allows own origin only. geolocation=(self "https://maps.trusted.com") allows own origin and specific third-party. payment=(self) restricts Payment Request API. fullscreen=* allows all. Usage in Next.js: headers: [{ key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(self)" }]. Why it matters: if an attacker injects a script via XSS, they cannot access the camera or geolocation even if the user has previously granted permission to the site — because the policy disables it at the page level. Also affects iframes: third-party embedded content cannot access features unless explicitly granted via allow attribute.',
    references: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Permissions-Policy'],
    tags: ['permissions-policy', 'feature-policy', 'http-headers', 'browser-security'],
    year: 2025,
  },
  {
    id: 'sec-031',
    topic: 'security',
    difficulty: 'mid',
    type: 'true-false',
    question: 'Using Content-Security-Policy with "unsafe-inline" for scripts still provides meaningful XSS protection compared to having no CSP.',
    answer: false,
    explanation: '"unsafe-inline" in script-src completely negates CSP\'s XSS protection for inline scripts — injected inline scripts (the most common XSS vector) execute freely. A CSP with "unsafe-inline" provides essentially no protection against DOM XSS via innerHTML or attribute injection. The only things it still restricts: loading scripts from non-whitelisted external origins. Proper CSP without "unsafe-inline" requires using nonces or hashes for any necessary inline scripts. If you have a Next.js app with many inline scripts making "unsafe-inline" tempting, use Next.js\'s built-in nonce support (middleware generates a nonce, passes it to the document) to allow Next.js\'s own inline scripts without the "unsafe-inline" wildcard.',
    tags: ['csp', 'unsafe-inline', 'xss-prevention', 'script-src'],
    year: 2025,
  },
  {
    id: 'sec-032',
    topic: 'security',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is the __Host- and __Secure- cookie prefix mechanism and what additional security guarantees do they provide?',
    options: [
      'They are just naming conventions with no security enforcement',
      '__Secure-: browser enforces that the cookie must have the Secure flag and be set from an HTTPS page. __Host-: additionally enforces no Domain attribute (only the current host), Path must be /, and requires Secure. These are enforced by the browser — servers cannot set them incorrectly.',
      'Cookie prefixes are only relevant for third-party cookies',
      'Cookie prefixes were removed in modern browsers in favor of SameSite',
    ],
    answer: 1,
    explanation: '__Host- provides the strongest cookie security guarantees: (1) Must be Secure (HTTPS only). (2) Must not have a Domain attribute — cookie cannot be shared with subdomains. (3) Path must be / — applies to the entire site. (4) Effectively: cookie is bound to exactly this host over HTTPS only. Example: Set-Cookie: __Host-session=token; Secure; HttpOnly; SameSite=Strict; Path=/. If any requirement is violated, the browser silently ignores the Set-Cookie instruction. This prevents cookie injection attacks where an attacker on a subdomain (compromised.example.com) tries to set a cookie for example.com. Use __Host- for all auth session cookies in production.',
    tags: ['cookies', 'host-prefix', 'secure-prefix', 'cookie-security', 'authentication'],
    year: 2025,
  },
  {
    id: 'sec-033',
    topic: 'security',
    difficulty: 'mid',
    type: 'code-output',
    question: 'What security vulnerability does this code contain and how would you fix it?',
    code: `// Merge user preferences into config
function deepMerge(target: any, source: any) {
  for (const key of Object.keys(source)) {
    if (typeof source[key] === 'object' && source[key] !== null) {
      if (!target[key]) target[key] = {}
      deepMerge(target[key], source[key])
    } else {
      target[key] = source[key]
    }
  }
  return target
}

// Called with user-provided JSON
const config = deepMerge(appConfig, userPreferences)`,
    answer: 'Prototype pollution vulnerability — if userPreferences contains { "__proto__": { "isAdmin": true } }, deepMerge will set Object.prototype.isAdmin = true, affecting all objects in the application.',
    explanation: 'Fix: block dangerous keys during merge: if (key === "__proto__" || key === "constructor" || key === "prototype") continue; — add this check inside the for loop. Alternatively, use Object.hasOwn(source, key) instead of iterating prototype chain, or use structuredClone() for deep cloning user data. Best practice: validate user input against a schema (Zod) before any deep merge operation. Lodash\'s _.merge was vulnerable to this pre-4.17.17; always check CVEs for utility libraries that handle object merging. Parsing user JSON with JSON.parse() is safe (no prototype pollution), but recursive merge of the parsed object is not.',
    tags: ['prototype-pollution', 'deep-merge', 'object-security', 'input-validation'],
    year: 2025,
  },
  {
    id: 'sec-034',
    topic: 'security',
    difficulty: 'senior',
    type: 'mcq',
    question: 'How does the Web Crypto API\'s crypto.getRandomValues() differ from Math.random() for security-sensitive use cases?',
    options: [
      'They produce identical output — the difference is only performance',
      'crypto.getRandomValues() uses the operating system\'s cryptographically secure pseudorandom number generator (CSPRNG) — suitable for keys, tokens, nonces, and IVs. Math.random() uses a deterministic algorithm that can be predicted if the seed is known — never use it for security purposes.',
      'Math.random() is more secure because it is faster and less predictable',
      'crypto.getRandomValues() is only available in Node.js, not browsers',
    ],
    answer: 1,
    explanation: 'Security randomness requirements: cryptographic operations need entropy that an attacker cannot predict or reproduce. Math.random() uses V8\'s xorshift128+ — deterministic, and while not trivially predictable, should never be used for: session tokens, CSRF tokens, encryption keys, nonces, OTP codes, or any security-sensitive value. crypto.getRandomValues(new Uint8Array(32)) produces 32 bytes of CSPRNG output — the same quality as the OS entropy pool. In Node.js: crypto.randomBytes(32). For generating random IDs: crypto.randomUUID() (available in browsers and Node.js 14.17+). Rule: any value that must be unpredictable to an attacker must use crypto.getRandomValues() or equivalent.',
    tags: ['web-crypto-api', 'randomness', 'csprng', 'math-random', 'token-generation'],
    year: 2025,
  },
  {
    id: 'sec-035',
    topic: 'security',
    difficulty: 'lead',
    type: 'system-design',
    question: 'Design a Content Security Policy for a Next.js 15 application that uses inline scripts (Next.js runtime), external fonts (Google Fonts), analytics (Plausible), and a payment iframe (Stripe).',
    answer: "Use nonces for inline scripts (Next.js middleware generates per-request nonce), strict-dynamic to allow Next.js-loaded scripts, specific allowlist for external origins, and frame-src/child-src for Stripe iframe.",
    explanation: "CSP for this stack: Content-Security-Policy: default-src 'self'; script-src 'nonce-{REQUEST_NONCE}' 'strict-dynamic' https: 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://plausible.io; frame-src https://js.stripe.com https://hooks.stripe.com; object-src 'none'; base-uri 'self'; form-action 'self'. Key decisions: (1) Nonce + strict-dynamic: nonce allows Next.js's inline scripts, strict-dynamic propagates trust to dynamically loaded scripts without unsafe-inline. (2) 'unsafe-inline' in script-src is ignored by browsers that support nonces/strict-dynamic — present for legacy fallback only. (3) frame-src: only Stripe domains for payment iframe. (4) connect-src: whitelist Plausible for analytics beacons. Set up in next.config.js headers() with the nonce generated per request in middleware.",
    tags: ['csp', 'nextjs', 'nonces', 'strict-dynamic', 'stripe', 'google-fonts'],
    year: 2025,
  },
]
