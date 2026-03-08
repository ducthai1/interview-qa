import type { Question } from '../types'

export const apiNetworkingQuestions: Question[] = [
  // ─── REST API & HTTP Methods ──────────────────────────────────────────────
  {
    id: 'api-001',
    topic: 'api-networking',
    difficulty: 'junior',
    type: 'mcq',
    question: 'Which HTTP method is idempotent but NOT safe?',
    options: ['GET', 'POST', 'PUT', 'PATCH'],
    answer: 2,
    explanation:
      'Safe methods (GET, HEAD, OPTIONS) do not modify server state. Idempotent methods (GET, PUT, DELETE) produce the same result when called multiple times. PUT replaces a resource — calling it N times leaves the resource in the same final state, so it is idempotent. But it does modify state, so it is NOT safe. POST is neither safe nor idempotent — sending it twice may create two resources. PATCH is NOT guaranteed to be idempotent (a PATCH that appends is not idempotent), though it can be.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Glossary/Idempotent',
      'https://developer.mozilla.org/en-US/docs/Glossary/Safe/HTTP',
    ],
    tags: ['http-methods', 'idempotent', 'safe', 'rest'],
    year: 2025,
  },
  {
    id: 'api-002',
    topic: 'api-networking',
    difficulty: 'junior',
    type: 'mcq',
    question: 'What HTTP status code should a REST API return when a resource is successfully created?',
    options: ['200 OK', '201 Created', '204 No Content', '202 Accepted'],
    answer: 1,
    explanation:
      '201 Created signals that the request succeeded and a new resource was created. The response should include a Location header pointing to the new resource URL and typically returns the created resource body. 200 OK is for successful reads or updates that return a body. 204 No Content is for successful operations with no response body (e.g., DELETE). 202 Accepted means the request was accepted but processing is asynchronous and not yet completed.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201',
    ],
    tags: ['http-status', 'rest', 'post', 'create'],
    year: 2025,
  },
  {
    id: 'api-003',
    topic: 'api-networking',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is the key difference between PUT and PATCH?',
    options: [
      'PUT is idempotent, PATCH is not; otherwise they behave the same',
      'PUT replaces the entire resource; PATCH applies a partial update',
      'PUT is for creating resources, PATCH is for updating',
      'PUT requires authentication, PATCH does not',
    ],
    answer: 1,
    explanation:
      'PUT replaces the entire resource at the given URI with the request payload — any fields not included in the body will be removed or set to defaults. PATCH applies a partial modification; only the fields included in the payload are changed. For example, PATCH /users/1 with { "email": "new@x.com" } updates only the email. PUT /users/1 with the same body would overwrite ALL other fields. PATCH semantics are defined in RFC 5789.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PATCH',
      'https://www.rfc-editor.org/rfc/rfc5789',
    ],
    tags: ['http-methods', 'put', 'patch', 'rest'],
    year: 2025,
  },
  {
    id: 'api-004',
    topic: 'api-networking',
    difficulty: 'junior',
    type: 'true-false',
    question: 'HTTP DELETE requests are idempotent — calling DELETE on the same resource multiple times always produces the same server state.',
    answer: true,
    explanation:
      'DELETE is idempotent: deleting a resource that has already been deleted leaves the server in the same state. The first call returns 200/204; subsequent calls may return 404 (resource not found), but the state of the server is identical — the resource does not exist. This is distinct from non-idempotent POST, where repeating the call can create duplicate resources. Idempotency is a property of the server state result, not necessarily the HTTP response code.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Glossary/Idempotent',
    ],
    tags: ['http-methods', 'delete', 'idempotent', 'rest'],
    year: 2025,
  },
  {
    id: 'api-005',
    topic: 'api-networking',
    difficulty: 'mid',
    type: 'mcq',
    question: 'Which HTTP status code class indicates a client error?',
    options: ['1xx', '2xx', '3xx', '4xx'],
    answer: 3,
    explanation:
      '4xx status codes indicate client errors — the request was malformed or cannot be fulfilled due to the client\'s fault. Common examples: 400 Bad Request (invalid syntax), 401 Unauthorized (missing/invalid credentials), 403 Forbidden (authenticated but no permission), 404 Not Found, 409 Conflict, 422 Unprocessable Entity (validation errors), 429 Too Many Requests. 5xx codes are server errors. 3xx are redirections. 2xx are successes. 1xx are informational.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses',
    ],
    tags: ['http-status', 'error-handling', 'rest'],
    year: 2025,
  },

  // ─── HTTP Headers ─────────────────────────────────────────────────────────
  {
    id: 'api-006',
    topic: 'api-networking',
    difficulty: 'junior',
    type: 'mcq',
    question: 'Which header tells the server the format of the request body?',
    options: ['Accept', 'Content-Type', 'Authorization', 'Accept-Encoding'],
    answer: 1,
    explanation:
      'Content-Type indicates the media type of the request body, e.g., "application/json" for JSON, "multipart/form-data" for file uploads, "application/x-www-form-urlencoded" for form data. The Accept header is different — it tells the server what media types the CLIENT can understand in the response. Without the correct Content-Type, the server may fail to parse the body. For example, sending JSON without Content-Type: application/json causes many frameworks to not decode the body at all.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type',
    ],
    tags: ['headers', 'content-type', 'request'],
    year: 2025,
  },
  {
    id: 'api-007',
    topic: 'api-networking',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What does an ETag header contain and how is it used?',
    options: [
      'The expiration date of the cached response',
      'An opaque identifier for a specific version of a resource, used for conditional requests',
      'The entity type of the resource (equivalent to Content-Type)',
      'An encryption tag for verifying response integrity',
    ],
    answer: 1,
    explanation:
      'An ETag (entity tag) is an opaque string that uniquely identifies a specific version of a resource — often a hash of the content. The server sends ETag: "abc123" in the response. On subsequent requests, the client sends If-None-Match: "abc123". If the resource has not changed, the server responds 304 Not Modified with no body, saving bandwidth. ETags enable efficient cache validation. They also prevent "mid-air collisions" in PUT/PATCH: send If-Match: "abc123" to ensure you\'re updating the version you read.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag',
    ],
    tags: ['headers', 'etag', 'caching', 'conditional-requests'],
    year: 2025,
  },
  {
    id: 'api-008',
    topic: 'api-networking',
    difficulty: 'mid',
    type: 'true-false',
    question: 'The Cache-Control: no-cache directive means the browser will not cache the response at all.',
    answer: false,
    explanation:
      'This is a common misconception. Cache-Control: no-cache does NOT mean "do not cache." It means the browser must revalidate the cached response with the server on every request before using it (via ETag/If-None-Match or Last-Modified/If-Modified-Since). If the server confirms the cache is fresh (304), the browser serves the cached version. To truly prevent caching, use Cache-Control: no-store, which instructs the browser not to store any part of the response in any cache.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control',
    ],
    tags: ['headers', 'cache-control', 'caching', 'no-cache'],
    year: 2025,
  },
  {
    id: 'api-009',
    topic: 'api-networking',
    difficulty: 'senior',
    type: 'mcq',
    question: 'Which Cache-Control directive allows a stale response to be served while a background revalidation occurs?',
    options: [
      'no-cache',
      'must-revalidate',
      'stale-while-revalidate',
      'proxy-revalidate',
    ],
    answer: 2,
    explanation:
      'stale-while-revalidate=<seconds> allows a cached response to be served stale (past max-age) for the specified number of seconds while the browser triggers a background revalidation request. The user sees a fast response; the cache is refreshed for the next request. Example: Cache-Control: max-age=60, stale-while-revalidate=600 means serve fresh for 60s, serve stale (while revalidating) for 600s, then wait for the network. This is the basis of the SWR (stale-while-revalidate) pattern used in popular React hooks libraries.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-while-revalidate',
      'https://web.dev/stale-while-revalidate/',
    ],
    tags: ['headers', 'cache-control', 'stale-while-revalidate', 'performance'],
    year: 2025,
  },

  // ─── CORS ────────────────────────────────────────────────────────────────
  {
    id: 'api-010',
    topic: 'api-networking',
    difficulty: 'junior',
    type: 'mcq',
    question: 'What triggers a CORS preflight request?',
    options: [
      'Any cross-origin request, always',
      'Only requests with credentials (cookies)',
      'Requests that are not "simple" — e.g., custom headers, non-standard methods, or non-simple Content-Types',
      'Only DELETE and PUT requests',
    ],
    answer: 2,
    explanation:
      'A preflight OPTIONS request is sent before "non-simple" cross-origin requests. A request is "simple" if it uses GET/HEAD/POST, only includes CORS-safelisted headers (Accept, Accept-Language, Content-Language, Content-Type with values application/x-www-form-urlencoded, multipart/form-data, or text/plain), and has no ReadableStream body. Anything outside these constraints — e.g., Authorization header, Content-Type: application/json, PUT, PATCH, DELETE, custom headers — triggers a preflight. The browser sends OPTIONS to check if the server allows the real request.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#preflighted_requests',
    ],
    tags: ['cors', 'preflight', 'options', 'simple-requests'],
    year: 2025,
  },
  {
    id: 'api-011',
    topic: 'api-networking',
    difficulty: 'mid',
    type: 'mcq',
    question: 'A fetch request includes credentials: "include". What CORS header configuration is required on the server?',
    options: [
      'Access-Control-Allow-Origin: *',
      'Access-Control-Allow-Origin: <specific-origin> and Access-Control-Allow-Credentials: true',
      'Access-Control-Allow-Headers: credentials',
      'No extra configuration needed, credentials are always allowed',
    ],
    answer: 1,
    explanation:
      'When credentials (cookies, Authorization headers, TLS certificates) are included in cross-origin requests, the server MUST respond with Access-Control-Allow-Credentials: true AND Access-Control-Allow-Origin set to a specific origin (wildcard "*" is explicitly forbidden with credentials). The browser will block the response if either condition is not met. On the client, both fetch credentials: "include" and XMLHttpRequest.withCredentials = true require this server configuration.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#requests_with_credentials',
    ],
    tags: ['cors', 'credentials', 'access-control', 'cookies'],
    year: 2025,
  },
  {
    id: 'api-012',
    topic: 'api-networking',
    difficulty: 'senior',
    type: 'debug',
    question: 'This fetch call fails with a CORS error in production (different origin), but works in development. Find the bug:',
    code: `// Frontend at https://app.example.com
const response = await fetch('https://api.example.com/data', {
  method: 'POST',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
    'X-Custom-Header': 'value',
  },
  body: JSON.stringify({ query: 'test' }),
})

// Server CORS config (Express)
app.use(cors({
  origin: '*',
  credentials: true,
}))`,
    answer: "Bug: origin: '*' with credentials: true is invalid. When credentials are included, Access-Control-Allow-Origin cannot be a wildcard. Fix: set origin to the specific allowed origin, e.g., origin: 'https://app.example.com' or use a function that validates against an allowlist.",
    solutionCode: `// Frontend at https://app.example.com
const response = await fetch('https://api.example.com/data', {
  method: 'POST',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
    'X-Custom-Header': 'value',
  },
  body: JSON.stringify({ query: 'test' }),
})

// Server CORS config (Express) — FIXED
app.use(cors({
  origin: 'https://app.example.com', // specific origin, not wildcard
  credentials: true,
}))`,
    explanation:
      'The CORS specification explicitly forbids Access-Control-Allow-Origin: * when Access-Control-Allow-Credentials: true because a wildcard origin combined with credentials would allow any site to make credentialed requests (a security hole). The browser blocks such responses. Additionally, the X-Custom-Header requires Access-Control-Allow-Headers: X-Custom-Header in the preflight response. Fix the server config: cors({ origin: "https://app.example.com", credentials: true }). In development, both frontend and backend typically run on the same origin so CORS does not apply.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSNotSupportingCredentials',
    ],
    tags: ['cors', 'credentials', 'debug', 'express'],
    year: 2025,
  },
  {
    id: 'api-013',
    topic: 'api-networking',
    difficulty: 'mid',
    type: 'true-false',
    question: 'CORS is enforced by the server — the server blocks cross-origin requests it does not allow.',
    answer: false,
    explanation:
      'CORS is enforced by the BROWSER, not the server. The server receives the cross-origin request, processes it, and returns CORS headers. The browser then decides whether to expose the response to JavaScript based on those headers. If Access-Control-Allow-Origin does not match, the browser blocks JavaScript from reading the response — but the server DID receive and process the request. This is why CORS is not a security mechanism against server-side attacks (like CSRF from non-browser clients). It only controls what JavaScript in the browser can read.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS',
    ],
    tags: ['cors', 'browser', 'security', 'misconception'],
    year: 2025,
  },

  // ─── Fetch API ────────────────────────────────────────────────────────────
  {
    id: 'api-014',
    topic: 'api-networking',
    difficulty: 'junior',
    type: 'code-output',
    question: 'What does this code log?',
    code: `fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('HTTP error')
    }
    return response.json()
  })
  .then(data => console.log('data:', data))
  .catch(err => console.log('error:', err.message))

// Server returns: HTTP 404 with body { "message": "Not found" }`,
    answer: 'error: HTTP error',
    explanation:
      'The Fetch API does NOT reject the promise for HTTP error status codes (4xx, 5xx). The response.ok property is false when the status is outside 200-299. Without the explicit check for response.ok, the code would call response.json() on the 404 response and log the data as if it were a success. The pattern shown is the correct way to handle HTTP errors with fetch — always check response.ok or response.status. Contrast with axios, which throws automatically for non-2xx responses.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#checking_that_the_fetch_was_successful',
    ],
    tags: ['fetch', 'error-handling', 'response.ok', 'http-errors'],
    year: 2025,
  },
  {
    id: 'api-015',
    topic: 'api-networking',
    difficulty: 'mid',
    type: 'code-write',
    question: 'Implement a fetchWithTimeout utility that aborts a fetch request if it takes longer than a given number of milliseconds.',
    answer: `function fetchWithTimeout(url, options = {}, timeoutMs = 5000) {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs)

  return fetch(url, { ...options, signal: controller.signal })
    .then(response => {
      clearTimeout(timeoutId)
      return response
    })
    .catch(err => {
      clearTimeout(timeoutId)
      if (err.name === 'AbortError') {
        throw new Error(\`Request timed out after \${timeoutMs}ms\`)
      }
      throw err
    })
}`,
    solutionCode: `function fetchWithTimeout(url, options = {}, timeoutMs = 5000) {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs)

  return fetch(url, { ...options, signal: controller.signal })
    .then(response => {
      clearTimeout(timeoutId)
      return response
    })
    .catch(err => {
      clearTimeout(timeoutId)
      if (err.name === 'AbortError') {
        throw new Error(\`Request timed out after \${timeoutMs}ms\`)
      }
      throw err
    })
}`,
    explanation:
      'AbortController creates an abort signal that can be passed to fetch. When controller.abort() is called, the fetch promise rejects with a DOMException named "AbortError". Always clear the timeout in both success and error paths to avoid memory leaks. Note that aborting fetch only prevents the browser from processing the response — the server may have already received and processed the request (important for non-idempotent requests like POST).',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/AbortController',
      'https://developer.mozilla.org/en-US/docs/Web/API/fetch#signal',
    ],
    tags: ['fetch', 'abort-controller', 'timeout', 'signal'],
    year: 2025,
  },
  {
    id: 'api-016',
    topic: 'api-networking',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is the difference between fetch credentials: "same-origin" and credentials: "include"?',
    options: [
      '"same-origin" sends cookies for all requests; "include" only for cross-origin',
      '"same-origin" sends cookies only for requests to the same origin; "include" sends cookies for all origins including cross-origin',
      '"same-origin" uses session cookies; "include" uses persistent cookies',
      'There is no difference — both behave identically in modern browsers',
    ],
    answer: 1,
    explanation:
      'The credentials option controls when cookies, HTTP authentication, and TLS client certificates are sent. "omit" — never send credentials. "same-origin" (default) — send credentials only when the request URL has the same origin as the page. "include" — always send credentials, even for cross-origin requests (requires CORS Access-Control-Allow-Credentials: true on server). Use "include" when your API is on a different subdomain or domain but needs to read the user\'s cookies.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/fetch#credentials',
    ],
    tags: ['fetch', 'credentials', 'cookies', 'cors'],
    year: 2025,
  },
  {
    id: 'api-017',
    topic: 'api-networking',
    difficulty: 'senior',
    type: 'code-write',
    question: 'Implement a retry utility that retries a fetch request with exponential backoff on network errors or 5xx responses, up to a maximum number of attempts.',
    answer: `async function fetchWithRetry(url, options = {}, maxRetries = 3, baseDelayMs = 1000) {
  let lastError

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(url, options)

      // Retry on 5xx server errors
      if (response.status >= 500 && attempt < maxRetries) {
        lastError = new Error(\`Server error: \${response.status}\`)
        const delay = baseDelayMs * Math.pow(2, attempt) + Math.random() * 100
        await new Promise(resolve => setTimeout(resolve, delay))
        continue
      }

      return response
    } catch (err) {
      // Network errors (no response received)
      lastError = err
      if (attempt < maxRetries) {
        const delay = baseDelayMs * Math.pow(2, attempt) + Math.random() * 100
        await new Promise(resolve => setTimeout(resolve, delay))
      }
    }
  }

  throw lastError
}`,
    solutionCode: `async function fetchWithRetry(url, options = {}, maxRetries = 3, baseDelayMs = 1000) {
  let lastError

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(url, options)

      // Retry on 5xx server errors
      if (response.status >= 500 && attempt < maxRetries) {
        lastError = new Error(\`Server error: \${response.status}\`)
        const delay = baseDelayMs * Math.pow(2, attempt) + Math.random() * 100
        await new Promise(resolve => setTimeout(resolve, delay))
        continue
      }

      return response
    } catch (err) {
      // Network errors (no response received)
      lastError = err
      if (attempt < maxRetries) {
        const delay = baseDelayMs * Math.pow(2, attempt) + Math.random() * 100
        await new Promise(resolve => setTimeout(resolve, delay))
      }
    }
  }

  throw lastError
}`,
    explanation:
      'Exponential backoff doubles the wait time with each retry (1s, 2s, 4s...), preventing thundering herd problems. The jitter (Math.random() * 100) adds randomness to prevent all clients from retrying simultaneously. Only retry on network errors (fetch throws) or 5xx errors — do NOT retry 4xx client errors (400, 401, 403, 404, 429) without special handling. For 429 Too Many Requests, check the Retry-After response header for the server-specified delay. Never retry non-idempotent POST requests blindly — they may have partially succeeded.',
    references: [
      'https://aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter/',
      'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429',
    ],
    tags: ['fetch', 'retry', 'exponential-backoff', 'error-handling', 'resilience'],
    year: 2025,
  },

  // ─── GraphQL ──────────────────────────────────────────────────────────────
  {
    id: 'api-018',
    topic: 'api-networking',
    difficulty: 'mid',
    type: 'mcq',
    question: 'In GraphQL, what is the key advantage of fragments?',
    options: [
      'They allow splitting a query across multiple HTTP requests',
      'They enable reusable field selections that can be spread into multiple queries or mutations',
      'They are used to define server-side resolvers',
      'They cache query results on the client automatically',
    ],
    answer: 1,
    explanation:
      'Fragments are reusable units of a query. They allow you to define a set of fields once and spread (...) them into any query or mutation that needs the same fields. Example: fragment UserFields on User { id name email } — then query { user(id: 1) { ...UserFields } }. This enables DRY field selection, is essential for co-locating component data requirements (e.g., Relay\'s container pattern), and reduces typos from repeating field lists. Fragments also power incremental delivery in @defer.',
    references: [
      'https://graphql.org/learn/queries/#fragments',
    ],
    tags: ['graphql', 'fragments', 'queries', 'reusability'],
    year: 2025,
  },
  {
    id: 'api-019',
    topic: 'api-networking',
    difficulty: 'mid',
    type: 'true-false',
    question: 'GraphQL always uses HTTP POST and never uses HTTP GET.',
    answer: false,
    explanation:
      'GraphQL can use both GET and POST. GET is typically used for queries (read operations) — the query is passed as a URL parameter (?query=...). POST is used for queries, mutations, and subscriptions — the operation is in the request body as JSON. Using GET for queries allows browser caching and CDN caching via URL. Mutations should always use POST since they modify data. The GraphQL spec does not mandate a specific HTTP method. The Apollo Server and most implementations support both.',
    references: [
      'https://graphql.github.io/graphql-over-http/draft/#sec-GET',
    ],
    tags: ['graphql', 'http', 'get', 'post'],
    year: 2025,
  },
  {
    id: 'api-020',
    topic: 'api-networking',
    difficulty: 'senior',
    type: 'mcq',
    question: 'Which of these is an advantage of GraphQL over REST for a frontend developer?',
    options: [
      'GraphQL is always faster because it uses binary encoding instead of JSON',
      'GraphQL eliminates over-fetching and under-fetching by allowing clients to specify exactly the fields they need',
      'GraphQL does not require a schema, making it more flexible than REST',
      'GraphQL uses HTTP/2 by default, while REST does not',
    ],
    answer: 1,
    explanation:
      'Over-fetching occurs when a REST endpoint returns more fields than the client needs (wasted bandwidth). Under-fetching occurs when a single REST endpoint does not return enough data, requiring multiple round trips (N+1 problem). GraphQL solves both: clients declare exactly the fields they need in a single query, even across related types. Tradeoffs: REST is simpler, has better HTTP caching, and is more widely supported. GraphQL adds complexity (schema, resolvers, N+1 query problem on the server). Neither is universally better.',
    references: [
      'https://graphql.org/learn/',
    ],
    tags: ['graphql', 'rest', 'over-fetching', 'under-fetching', 'tradeoffs'],
    year: 2025,
  },
  {
    id: 'api-021',
    topic: 'api-networking',
    difficulty: 'senior',
    type: 'mcq',
    question: 'How do GraphQL subscriptions typically work under the hood?',
    options: [
      'They use long-polling — the client repeatedly sends queries every few seconds',
      'They use WebSockets (or SSE) to maintain a persistent connection for real-time server-to-client updates',
      'They use HTTP/2 server push to deliver updates',
      'They use service workers to intercept and cache query results',
    ],
    answer: 1,
    explanation:
      'GraphQL subscriptions require a persistent connection. The most common implementation uses WebSockets (the graphql-ws or subscriptions-transport-ws protocol). The client sends a subscription operation, and the server pushes updates over the WebSocket whenever the subscribed event occurs. Some implementations use Server-Sent Events (SSE), which is simpler (unidirectional, HTTP-based, auto-reconnects). Apollo Client supports both. The choice depends on whether bidirectional communication is needed (use WebSockets) or only server-to-client (SSE is sufficient and simpler).',
    references: [
      'https://www.apollographql.com/docs/react/data/subscriptions/',
    ],
    tags: ['graphql', 'subscriptions', 'websocket', 'sse', 'real-time'],
    year: 2025,
  },

  // ─── WebSocket ────────────────────────────────────────────────────────────
  {
    id: 'api-022',
    topic: 'api-networking',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is the WebSocket handshake and what HTTP concepts does it use?',
    options: [
      'A TLS negotiation that happens before the TCP connection',
      'An HTTP Upgrade request that switches the protocol from HTTP to WebSocket',
      'A custom binary protocol that runs independently of HTTP',
      'An HTTP OPTIONS preflight similar to CORS',
    ],
    answer: 1,
    explanation:
      'WebSocket connections start with an HTTP Upgrade handshake. The client sends an HTTP/1.1 request with headers: Connection: Upgrade, Upgrade: websocket, Sec-WebSocket-Key: <base64>, Sec-WebSocket-Version: 13. If the server supports WebSockets, it responds with 101 Switching Protocols and Sec-WebSocket-Accept (a hash of the key). After this, the TCP connection is kept open and both parties communicate using the WebSocket framing protocol — a lightweight binary framing layer, not HTTP.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers',
    ],
    tags: ['websocket', 'handshake', 'http-upgrade', 'protocol'],
    year: 2025,
  },
  {
    id: 'api-023',
    topic: 'api-networking',
    difficulty: 'senior',
    type: 'mcq',
    question: 'When should you choose SSE (Server-Sent Events) over WebSockets?',
    options: [
      'Always — SSE is strictly better than WebSockets in all cases',
      'When you need bidirectional communication and low-latency messaging',
      'When communication is server-to-client only and you want simpler implementation, HTTP/2 multiplexing, and automatic reconnection',
      'When you need to send binary data efficiently',
    ],
    answer: 2,
    explanation:
      'SSE (EventSource API) is ideal for server-to-client streaming: live feeds, notifications, progress updates. Advantages over WebSockets: built on HTTP so works with standard proxies/CDNs, automatic reconnection with Last-Event-ID, works over HTTP/2 (multiplexed, no connection limit concerns), simpler to implement. Disadvantages: unidirectional (client cannot send data after connecting — needs separate HTTP requests), text-only (no binary), limited browser support for older browsers. WebSockets are better for chat, gaming, collaborative tools requiring bidirectional low-latency binary communication.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events',
    ],
    tags: ['sse', 'websocket', 'eventsource', 'real-time', 'comparison'],
    year: 2025,
  },
  {
    id: 'api-024',
    topic: 'api-networking',
    difficulty: 'senior',
    type: 'code-write',
    question: 'Implement a WebSocket client class with automatic reconnection using exponential backoff.',
    answer: `class ReconnectingWebSocket {
  constructor(url, options = {}) {
    this.url = url
    this.maxRetries = options.maxRetries ?? 10
    this.baseDelay = options.baseDelay ?? 1000
    this.maxDelay = options.maxDelay ?? 30000
    this.retryCount = 0
    this.ws = null
    this.listeners = {}
    this.connect()
  }

  connect() {
    this.ws = new WebSocket(this.url)

    this.ws.onopen = () => {
      this.retryCount = 0
      this.emit('open')
    }

    this.ws.onmessage = (event) => this.emit('message', event.data)

    this.ws.onerror = (error) => this.emit('error', error)

    this.ws.onclose = (event) => {
      this.emit('close', event)
      if (!event.wasClean && this.retryCount < this.maxRetries) {
        const delay = Math.min(
          this.baseDelay * Math.pow(2, this.retryCount),
          this.maxDelay
        )
        this.retryCount++
        setTimeout(() => this.connect(), delay)
      }
    }
  }

  send(data) {
    if (this.ws?.readyState === WebSocket.OPEN) {
      this.ws.send(data)
    }
  }

  on(event, handler) {
    this.listeners[event] = this.listeners[event] || []
    this.listeners[event].push(handler)
  }

  emit(event, ...args) {
    this.listeners[event]?.forEach(fn => fn(...args))
  }

  close() {
    this.maxRetries = 0
    this.ws?.close(1000, 'Client closed')
  }
}`,
    solutionCode: `class ReconnectingWebSocket {
  constructor(url, options = {}) {
    this.url = url
    this.maxRetries = options.maxRetries ?? 10
    this.baseDelay = options.baseDelay ?? 1000
    this.maxDelay = options.maxDelay ?? 30000
    this.retryCount = 0
    this.ws = null
    this.listeners = {}
    this.connect()
  }

  connect() {
    this.ws = new WebSocket(this.url)

    this.ws.onopen = () => {
      this.retryCount = 0
      this.emit('open')
    }

    this.ws.onmessage = (event) => this.emit('message', event.data)

    this.ws.onerror = (error) => this.emit('error', error)

    this.ws.onclose = (event) => {
      this.emit('close', event)
      if (!event.wasClean && this.retryCount < this.maxRetries) {
        const delay = Math.min(
          this.baseDelay * Math.pow(2, this.retryCount),
          this.maxDelay
        )
        this.retryCount++
        setTimeout(() => this.connect(), delay)
      }
    }
  }

  send(data) {
    if (this.ws?.readyState === WebSocket.OPEN) {
      this.ws.send(data)
    }
  }

  on(event, handler) {
    this.listeners[event] = this.listeners[event] || []
    this.listeners[event].push(handler)
  }

  emit(event, ...args) {
    this.listeners[event]?.forEach(fn => fn(...args))
  }

  close() {
    this.maxRetries = 0
    this.ws?.close(1000, 'Client closed')
  }
}`,
    explanation:
      'Key points: retryCount resets to 0 on successful connection. Only reconnect if the close was not clean (wasClean: false covers network issues, not deliberate closes). Exponential backoff with a max cap prevents flooding the server. Setting maxRetries = 0 in close() stops reconnection on intentional disconnect. In production, also implement: heartbeat/ping-pong to detect dead connections, message queuing while disconnected, and authentication token refresh before reconnecting.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/WebSocket',
    ],
    tags: ['websocket', 'reconnection', 'exponential-backoff', 'resilience'],
    year: 2025,
  },

  // ─── HTTP/2 and HTTP/3 ────────────────────────────────────────────────────
  {
    id: 'api-025',
    topic: 'api-networking',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What problem does HTTP/2 multiplexing solve compared to HTTP/1.1?',
    options: [
      'It removes the need for TLS, making connections faster',
      'It eliminates Head-of-Line (HOL) blocking by allowing multiple requests and responses to be interleaved on a single TCP connection',
      'It compresses request bodies using gzip automatically',
      'It replaces JSON with binary encoding for faster parsing',
    ],
    answer: 1,
    explanation:
      'HTTP/1.1 has Head-of-Line blocking: each connection can only handle one request-response pair at a time (pipelining is unreliable). Browsers work around this by opening 6 connections per origin, but this wastes resources. HTTP/2 multiplexing sends multiple streams over one TCP connection concurrently — requests and responses are split into frames that are interleaved. This eliminates HOL blocking at the HTTP level. However, HTTP/2 still has TCP-level HOL blocking (a dropped packet stalls all streams). HTTP/3 (QUIC) solves this by using UDP with per-stream loss recovery.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages#http2_frames',
      'https://web.dev/performance-http2/',
    ],
    tags: ['http2', 'multiplexing', 'head-of-line-blocking', 'performance'],
    year: 2025,
  },
  {
    id: 'api-026',
    topic: 'api-networking',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is the primary innovation of HTTP/3 compared to HTTP/2?',
    options: [
      'HTTP/3 uses binary framing for headers, HTTP/2 does not',
      'HTTP/3 runs over QUIC (UDP-based transport) instead of TCP, eliminating TCP-level Head-of-Line blocking and improving connection establishment speed',
      'HTTP/3 supports server push; HTTP/2 does not',
      'HTTP/3 eliminates the need for CORS',
    ],
    answer: 1,
    explanation:
      'HTTP/3 runs on QUIC, a transport protocol built on UDP. Benefits: 1) No TCP Head-of-Line blocking — each stream is independent; a lost UDP packet only blocks its own stream, not others. 2) Faster connection setup — QUIC combines TLS 1.3 and transport handshakes (0-RTT or 1-RTT). 3) Connection migration — QUIC connections survive IP changes (e.g., switching from WiFi to mobile). HTTP/2 has all this at the application layer but TCP-level packet loss still blocks all HTTP/2 streams. HTTP/3 is now supported by ~95% of browsers.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Glossary/HTTP_3',
      'https://www.cloudflare.com/learning/performance/what-is-http3/',
    ],
    tags: ['http3', 'quic', 'udp', 'performance', 'head-of-line-blocking'],
    year: 2025,
  },
  {
    id: 'api-027',
    topic: 'api-networking',
    difficulty: 'mid',
    type: 'true-false',
    question: 'HTTP/2 Server Push allows the server to proactively send resources the client has not yet requested, and this feature is widely used in production today.',
    answer: false,
    explanation:
      'While HTTP/2 Server Push was designed to proactively send resources (e.g., push CSS when HTML is requested), it has largely been abandoned in practice. Problems: the server cannot know what the client already has cached — pushed resources waste bandwidth if already cached. Chrome removed Server Push support (Chrome 106+). The preferred alternative is the 103 Early Hints status code, which tells the browser to start fetching critical resources while the server is still preparing the main response. HTTP/3 also deprioritized server push.',
    references: [
      'https://developer.chrome.com/blog/removing-push/',
    ],
    tags: ['http2', 'server-push', 'early-hints', 'performance'],
    year: 2025,
  },

  // ─── Caching ──────────────────────────────────────────────────────────────
  {
    id: 'api-028',
    topic: 'api-networking',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is the purpose of a CDN (Content Delivery Network) edge cache?',
    options: [
      'To run server-side code closer to users',
      'To store copies of static and cacheable content geographically closer to users, reducing latency and origin server load',
      'To provide DDoS protection by filtering malicious requests',
      'To handle database queries faster through connection pooling',
    ],
    answer: 1,
    explanation:
      'CDN edge nodes cache content at points-of-presence (PoPs) distributed globally. When a user requests a resource, it is served from the nearest PoP rather than the origin server, reducing round-trip time. For a user in Tokyo hitting a CDN with a PoP there, the request may travel 10ms vs 200ms to a US-based origin. CDNs use Cache-Control headers to determine what and how long to cache. Dynamic content can also use CDN with short TTLs or edge computing (Cloudflare Workers, Lambda@Edge).',
    references: [
      'https://developer.mozilla.org/en-US/docs/Glossary/CDN',
    ],
    tags: ['cdn', 'caching', 'performance', 'edge'],
    year: 2025,
  },
  {
    id: 'api-029',
    topic: 'api-networking',
    difficulty: 'senior',
    type: 'mcq',
    question: 'How does a Service Worker cache differ from the browser HTTP cache?',
    options: [
      'Service Worker cache is faster; HTTP cache is more persistent',
      'Service Worker cache is programmatically controlled (cache strategies, offline support, cache versioning); HTTP cache is controlled by server headers and is transparent to JavaScript',
      'They are the same cache with different names',
      'HTTP cache stores only HTML; Service Worker cache stores only JS and CSS',
    ],
    answer: 1,
    explanation:
      'The browser HTTP cache is transparent — controlled by Cache-Control, ETag, and Expires headers; JavaScript cannot directly read or write it. Service Worker cache (Cache API) gives full programmatic control: you decide what to cache, when to cache it, how long to keep it, and which strategy to use (cache-first, network-first, stale-while-revalidate). Service workers enable offline functionality, custom cache invalidation, and background sync. Workbox abstracts common caching strategies. Service workers run in a separate thread and intercept all fetches for the registered scope.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/Cache',
      'https://web.dev/service-worker-caching-and-http-caching/',
    ],
    tags: ['service-worker', 'cache-api', 'http-cache', 'offline', 'pwa'],
    year: 2025,
  },

  // ─── Authentication ───────────────────────────────────────────────────────
  {
    id: 'api-030',
    topic: 'api-networking',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What are the three parts of a JWT (JSON Web Token)?',
    options: [
      'Username, password, and signature',
      'Header, payload, and signature — each Base64URL-encoded and separated by dots',
      'Algorithm, claims, and timestamp',
      'Public key, private key, and certificate',
    ],
    answer: 1,
    explanation:
      'A JWT consists of three dot-separated Base64URL-encoded parts: 1) Header — contains the token type ("JWT") and signing algorithm (e.g., HS256, RS256). 2) Payload — contains claims: registered (iss, sub, exp, iat), public, and private. 3) Signature — the result of signing Header.Payload with the secret/private key. The signature verifies the token was not tampered with. Note: the payload is ENCODED, not encrypted — anyone can decode and read the claims. Never store sensitive data (passwords, credit cards) in a JWT payload.',
    references: [
      'https://jwt.io/introduction',
      'https://developer.mozilla.org/en-US/docs/Web/API/Web_Authentication_API',
    ],
    tags: ['jwt', 'authentication', 'tokens', 'security'],
    year: 2025,
  },
  {
    id: 'api-031',
    topic: 'api-networking',
    difficulty: 'senior',
    type: 'mcq',
    question: 'Where should JWTs be stored in a browser, and what are the security tradeoffs?',
    options: [
      'Always localStorage — it persists across sessions and is the most secure option',
      'Always memory (JS variable) — it is the most secure since JS cannot access it',
      'HttpOnly cookies are most secure (not accessible to JS, protected from XSS); localStorage is vulnerable to XSS; memory is safe but lost on refresh',
      'sessionStorage is always the best choice for JWTs',
    ],
    answer: 2,
    explanation:
      'Token storage tradeoffs: localStorage/sessionStorage — accessible via JS, so a single XSS vulnerability exposes the token. HttpOnly cookies — not accessible to JavaScript, which eliminates XSS risk. However, cookies are automatically sent with requests, making them vulnerable to CSRF (mitigate with SameSite=Strict/Lax or CSRF tokens). Memory (JS variable) — safest from XSS, but token is lost on page refresh, requiring re-authentication or silent refresh via an HttpOnly refresh token cookie. The industry consensus for high-security apps is: access token in memory + refresh token in HttpOnly, Secure, SameSite=Strict cookie.',
    references: [
      'https://auth0.com/docs/secure/security-guidance/data-security/token-storage',
    ],
    tags: ['jwt', 'localstorage', 'cookies', 'xss', 'csrf', 'security'],
    year: 2025,
  },
  {
    id: 'api-032',
    topic: 'api-networking',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is the OAuth 2.0 PKCE flow and why is it required for Single Page Applications?',
    options: [
      'PKCE is a server-side flow; SPAs should use the Implicit flow instead',
      'PKCE (Proof Key for Code Exchange) replaces the client secret with a code verifier/challenge pair, enabling secure Authorization Code flow for public clients that cannot keep a secret',
      'PKCE adds two-factor authentication to any OAuth flow',
      'PKCE is a deprecated extension replaced by JWT tokens in OAuth 2.1',
    ],
    answer: 1,
    explanation:
      'The OAuth 2.0 Implicit flow (which returned tokens directly in the URL fragment) is deprecated because tokens can be exposed in browser history and to third parties. SPAs and mobile apps are "public clients" — they cannot securely store a client secret. PKCE solves this: 1) Generate a random code_verifier. 2) Hash it to get code_challenge (SHA-256). 3) Send code_challenge in the authorization request. 4) After getting the auth code, exchange it for tokens by sending the original code_verifier. The auth server verifies the hash — only the client that started the flow can complete it, preventing authorization code interception attacks. OAuth 2.1 mandates PKCE.',
    references: [
      'https://oauth.net/2/pkce/',
      'https://www.rfc-editor.org/rfc/rfc7636',
    ],
    tags: ['oauth', 'pkce', 'spa', 'authorization-code', 'security'],
    year: 2025,
  },
  {
    id: 'api-033',
    topic: 'api-networking',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is the purpose of a refresh token in OAuth 2.0?',
    options: [
      'To encrypt the access token for secure transmission',
      'To obtain a new access token when the current one expires, without requiring the user to re-authenticate',
      'To verify the user\'s identity on every API request',
      'To refresh the browser session storage',
    ],
    answer: 1,
    explanation:
      'Access tokens are short-lived (minutes to hours) to limit damage from token theft. A refresh token is long-lived and allows obtaining new access tokens silently. Flow: when an access token expires (401 response), send the refresh token to the authorization server\'s token endpoint to get a new access/refresh token pair. Refresh tokens should be stored in HttpOnly cookies (not accessible to JS). If a refresh token is compromised, it can be revoked server-side. Refresh token rotation (each use issues a new refresh token, old one is invalidated) prevents token reuse attacks.',
    references: [
      'https://oauth.net/2/refresh-tokens/',
      'https://auth0.com/blog/refresh-tokens-what-are-they-and-when-to-use-them/',
    ],
    tags: ['oauth', 'refresh-token', 'access-token', 'authentication'],
    year: 2025,
  },

  // ─── API Design Patterns ──────────────────────────────────────────────────
  {
    id: 'api-034',
    topic: 'api-networking',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is the main advantage of cursor-based pagination over offset-based pagination?',
    options: [
      'Cursor pagination is simpler to implement on the client side',
      'Cursor pagination is stable — it handles inserted/deleted rows correctly and scales better for large datasets',
      'Cursor pagination works with any database, offset pagination requires SQL',
      'Cursor pagination loads all data at once; offset loads it in pages',
    ],
    answer: 1,
    explanation:
      'Offset pagination (LIMIT/OFFSET or ?page=2&size=10) has two problems: 1) Skipping — if rows are inserted or deleted between page loads, items can be duplicated or missed. 2) Performance — high offset values require the database to scan and discard rows (OFFSET 10000 scans 10,010 rows). Cursor-based pagination uses a unique, sorted identifier (cursor) to mark the last item seen: GET /items?after=<cursor>. This is stable (inserts/deletes do not affect the cursor position) and efficient (WHERE id > cursor index lookup). Tradeoff: no random access to arbitrary pages — only next/previous navigation.',
    references: [
      'https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination',
      'https://use-the-index-luke.com/no-offset',
    ],
    tags: ['pagination', 'cursor', 'offset', 'api-design', 'performance'],
    year: 2025,
  },
  {
    id: 'api-035',
    topic: 'api-networking',
    difficulty: 'mid',
    type: 'mcq',
    question: 'Which is the recommended approach for versioning a REST API?',
    options: [
      'Date-based versioning in the URL: /2024-01-01/users',
      'URL path versioning (/v1/users) or Accept header versioning (Accept: application/vnd.api.v1+json)',
      'Versioning via query parameter only: /users?v=1',
      'APIs should never be versioned — always maintain backward compatibility',
    ],
    answer: 1,
    explanation:
      'Common API versioning strategies: 1) URL path (/v1/users) — most visible and cacheable, easy to test in a browser. Cons: "ugly" URLs, multiple URL trees to maintain. 2) Header versioning (Accept: application/vnd.example.v1+json) — cleaner URLs, RESTfully "correct." Cons: harder to test without tools. 3) Query parameter (/users?version=1) — simple but can conflict with other parameters. URL path versioning is the most widely adopted in practice (GitHub, Stripe, Twilio). Whatever approach is chosen, deprecate old versions gracefully with Sunset and Deprecation response headers.',
    references: [
      'https://stripe.com/blog/api-versioning',
    ],
    tags: ['api-design', 'versioning', 'rest', 'url'],
    year: 2025,
  },

  // ─── Rate Limiting ────────────────────────────────────────────────────────
  {
    id: 'api-036',
    topic: 'api-networking',
    difficulty: 'mid',
    type: 'mcq',
    question: 'An API returns HTTP 429 with headers X-RateLimit-Remaining: 0 and Retry-After: 30. What should the client do?',
    options: [
      'Retry immediately with a different endpoint',
      'Switch to a WebSocket connection to bypass rate limiting',
      'Queue the request and retry after at least 30 seconds, respecting the Retry-After header',
      'Ignore the 429 and continue sending requests — servers handle the throttling',
    ],
    answer: 2,
    explanation:
      'HTTP 429 Too Many Requests indicates the client has exceeded the rate limit. The Retry-After header specifies the number of seconds (or an HTTP date) to wait before retrying. Client-side best practices: 1) Respect Retry-After exactly — do not retry before it expires. 2) Implement request queuing — buffer requests and release them after the window resets. 3) Use exponential backoff for multiple consecutive 429s. 4) Monitor X-RateLimit-Limit and X-RateLimit-Remaining headers to proactively slow down before hitting the limit. Ignoring 429s can result in IP bans or account suspension.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429',
      'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After',
    ],
    tags: ['rate-limiting', '429', 'retry-after', 'exponential-backoff'],
    year: 2025,
  },
  {
    id: 'api-037',
    topic: 'api-networking',
    difficulty: 'senior',
    type: 'code-write',
    question: 'Implement a client-side rate limiter that allows a maximum of N requests per second, queuing excess requests.',
    answer: `class RateLimiter {
  constructor(maxPerSecond) {
    this.maxPerSecond = maxPerSecond
    this.queue = []
    this.running = 0
    this.windowStart = Date.now()
    this.windowCount = 0
  }

  async execute(fn) {
    return new Promise((resolve, reject) => {
      this.queue.push({ fn, resolve, reject })
      this.processQueue()
    })
  }

  async processQueue() {
    if (this.queue.length === 0) return

    const now = Date.now()
    if (now - this.windowStart >= 1000) {
      this.windowStart = now
      this.windowCount = 0
    }

    if (this.windowCount >= this.maxPerSecond) {
      const delay = 1000 - (now - this.windowStart)
      setTimeout(() => this.processQueue(), delay)
      return
    }

    const { fn, resolve, reject } = this.queue.shift()
    this.windowCount++

    try {
      const result = await fn()
      resolve(result)
    } catch (err) {
      reject(err)
    }

    this.processQueue()
  }
}

// Usage
const limiter = new RateLimiter(10)
const result = await limiter.execute(() => fetch('/api/data'))`,
    solutionCode: `class RateLimiter {
  constructor(maxPerSecond) {
    this.maxPerSecond = maxPerSecond
    this.queue = []
    this.running = 0
    this.windowStart = Date.now()
    this.windowCount = 0
  }

  async execute(fn) {
    return new Promise((resolve, reject) => {
      this.queue.push({ fn, resolve, reject })
      this.processQueue()
    })
  }

  async processQueue() {
    if (this.queue.length === 0) return

    const now = Date.now()
    if (now - this.windowStart >= 1000) {
      this.windowStart = now
      this.windowCount = 0
    }

    if (this.windowCount >= this.maxPerSecond) {
      const delay = 1000 - (now - this.windowStart)
      setTimeout(() => this.processQueue(), delay)
      return
    }

    const { fn, resolve, reject } = this.queue.shift()
    this.windowCount++

    try {
      const result = await fn()
      resolve(result)
    } catch (err) {
      reject(err)
    }

    this.processQueue()
  }
}

// Usage
const limiter = new RateLimiter(10)
const result = await limiter.execute(() => fetch('/api/data'))`,
    explanation:
      'The rate limiter tracks requests in a sliding 1-second window. When the window count reaches the max, it delays processing until the window resets. Requests are queued and processed in order (FIFO). In production, also consider: token bucket algorithm (smoother than fixed window), per-endpoint rate limits, and combining with server 429 responses. Libraries like bottleneck or p-throttle provide battle-tested implementations.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429',
    ],
    tags: ['rate-limiting', 'throttling', 'queue', 'client-side'],
    year: 2025,
  },

  // ─── File Upload ──────────────────────────────────────────────────────────
  {
    id: 'api-038',
    topic: 'api-networking',
    difficulty: 'mid',
    type: 'mcq',
    question: 'When uploading a file with FormData and fetch, why should you NOT manually set Content-Type: multipart/form-data?',
    options: [
      'The browser always uses application/json for FormData',
      'The browser must set the Content-Type header including the boundary parameter automatically; setting it manually omits the boundary and breaks parsing',
      'fetch does not support the multipart/form-data content type',
      'Setting Content-Type manually would cause a CORS preflight',
    ],
    answer: 1,
    explanation:
      'multipart/form-data requires a boundary parameter in the Content-Type header: Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW. The boundary is a unique string that separates the different parts of the multipart body. The browser generates this boundary when creating the FormData body, and only the browser knows what it is. If you manually set Content-Type: multipart/form-data without the boundary, the server cannot parse the request body. Simply omit Content-Type when using FormData with fetch — the browser sets it correctly automatically.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/FormData/Using_FormData_Objects',
    ],
    tags: ['file-upload', 'formdata', 'multipart', 'content-type', 'fetch'],
    year: 2025,
  },
  {
    id: 'api-039',
    topic: 'api-networking',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is a presigned URL for file uploads and what problem does it solve?',
    options: [
      'A URL that the browser pre-fetches during idle time to speed up navigation',
      'A time-limited, signed URL that allows direct client-to-storage upload without routing through the API server, reducing server load and latency',
      'A URL that signs the file with a certificate to verify its integrity',
      'A URL that pre-compresses the file before upload',
    ],
    answer: 1,
    explanation:
      'Without presigned URLs, file uploads go: Client → API Server → Cloud Storage (S3, GCS). This is wasteful — the API server handles large file data it just passes through. Presigned URLs solve this: 1) Client requests upload permission from API server. 2) API server generates a short-lived (e.g., 15 min) signed URL using cloud provider credentials. 3) Client uploads DIRECTLY to S3/GCS using the presigned URL — bypasses the API server entirely. Benefits: reduces API server bandwidth and memory usage, enables parallel multipart uploads to cloud storage, and scales to huge files without affecting API server performance.',
    references: [
      'https://docs.aws.amazon.com/AmazonS3/latest/userguide/PresignedUrlUploadObject.html',
    ],
    tags: ['file-upload', 'presigned-url', 's3', 'architecture', 'performance'],
    year: 2025,
  },
  {
    id: 'api-040',
    topic: 'api-networking',
    difficulty: 'senior',
    type: 'code-write',
    question: 'Implement a chunked file upload function that splits a file into chunks and uploads them sequentially with progress tracking.',
    answer: `async function uploadFileInChunks(file, uploadUrl, onProgress, chunkSize = 5 * 1024 * 1024) {
  const totalChunks = Math.ceil(file.size / chunkSize)
  let uploadedBytes = 0

  for (let chunkIndex = 0; chunkIndex < totalChunks; chunkIndex++) {
    const start = chunkIndex * chunkSize
    const end = Math.min(start + chunkSize, file.size)
    const chunk = file.slice(start, end)

    const formData = new FormData()
    formData.append('chunk', chunk)
    formData.append('chunkIndex', String(chunkIndex))
    formData.append('totalChunks', String(totalChunks))
    formData.append('fileName', file.name)

    const response = await fetch(uploadUrl, {
      method: 'POST',
      body: formData,
    })

    if (!response.ok) {
      throw new Error(\`Chunk \${chunkIndex} failed: \${response.status}\`)
    }

    uploadedBytes += chunk.size
    onProgress(Math.round((uploadedBytes / file.size) * 100))
  }
}

// Usage
await uploadFileInChunks(
  file,
  '/api/upload/chunk',
  (pct) => console.log(\`\${pct}% uploaded\`)
)`,
    solutionCode: `async function uploadFileInChunks(file, uploadUrl, onProgress, chunkSize = 5 * 1024 * 1024) {
  const totalChunks = Math.ceil(file.size / chunkSize)
  let uploadedBytes = 0

  for (let chunkIndex = 0; chunkIndex < totalChunks; chunkIndex++) {
    const start = chunkIndex * chunkSize
    const end = Math.min(start + chunkSize, file.size)
    const chunk = file.slice(start, end)

    const formData = new FormData()
    formData.append('chunk', chunk)
    formData.append('chunkIndex', String(chunkIndex))
    formData.append('totalChunks', String(totalChunks))
    formData.append('fileName', file.name)

    const response = await fetch(uploadUrl, {
      method: 'POST',
      body: formData,
    })

    if (!response.ok) {
      throw new Error(\`Chunk \${chunkIndex} failed: \${response.status}\`)
    }

    uploadedBytes += chunk.size
    onProgress(Math.round((uploadedBytes / file.size) * 100))
  }
}

// Usage
await uploadFileInChunks(
  file,
  '/api/upload/chunk',
  (pct) => console.log(\`\${pct}% uploaded\`)
)`,
    explanation:
      'File.slice() creates a Blob for each chunk without copying the entire file into memory. The server receives each chunk with its index and total count, reassembles them when all chunks are received. Improvements for production: parallel chunk uploads (Promise.all with concurrency limiting), retry failed chunks without restarting, resumable uploads by tracking which chunks succeeded (store in localStorage), and using the Fetch API with ReadableStream for true streaming progress.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/Blob/slice',
    ],
    tags: ['file-upload', 'chunked-upload', 'progress', 'blob'],
    year: 2025,
  },

  // ─── Server-Sent Events ───────────────────────────────────────────────────
  {
    id: 'api-041',
    topic: 'api-networking',
    difficulty: 'mid',
    type: 'code-write',
    question: 'Implement an SSE client using the EventSource API that reconnects and handles different event types.',
    answer: `function createSSEConnection(url, handlers = {}) {
  const eventSource = new EventSource(url, { withCredentials: true })

  eventSource.onopen = () => {
    console.log('SSE connection established')
    handlers.onOpen?.()
  }

  // Default message event (no event: field in stream)
  eventSource.onmessage = (event) => {
    try {
      const data = JSON.parse(event.data)
      handlers.onMessage?.(data)
    } catch {
      handlers.onMessage?.(event.data)
    }
  }

  // Custom named events
  if (handlers.eventTypes) {
    for (const [type, handler] of Object.entries(handlers.eventTypes)) {
      eventSource.addEventListener(type, (event) => {
        handler(JSON.parse(event.data))
      })
    }
  }

  eventSource.onerror = (err) => {
    console.error('SSE error:', err)
    handlers.onError?.(err)
    // EventSource auto-reconnects unless we close it
    if (eventSource.readyState === EventSource.CLOSED) {
      handlers.onClose?.()
    }
  }

  return {
    close: () => eventSource.close(),
    readyState: () => eventSource.readyState,
  }
}`,
    solutionCode: `function createSSEConnection(url, handlers = {}) {
  const eventSource = new EventSource(url, { withCredentials: true })

  eventSource.onopen = () => {
    console.log('SSE connection established')
    handlers.onOpen?.()
  }

  // Default message event (no event: field in stream)
  eventSource.onmessage = (event) => {
    try {
      const data = JSON.parse(event.data)
      handlers.onMessage?.(data)
    } catch {
      handlers.onMessage?.(event.data)
    }
  }

  // Custom named events
  if (handlers.eventTypes) {
    for (const [type, handler] of Object.entries(handlers.eventTypes)) {
      eventSource.addEventListener(type, (event) => {
        handler(JSON.parse(event.data))
      })
    }
  }

  eventSource.onerror = (err) => {
    console.error('SSE error:', err)
    handlers.onError?.(err)
    // EventSource auto-reconnects unless we close it
    if (eventSource.readyState === EventSource.CLOSED) {
      handlers.onClose?.()
    }
  }

  return {
    close: () => eventSource.close(),
    readyState: () => eventSource.readyState,
  }
}`,
    explanation:
      'EventSource automatically handles reconnection — when the connection drops, the browser waits retry milliseconds (server can set this in the stream) and reconnects, sending the Last-Event-ID header so the server can resume from where it left off. Named events (event: notification in the stream) are handled with addEventListener, not onmessage. Unlike WebSockets, EventSource is HTTP-based and works with standard CDN and proxy infrastructure. withCredentials: true includes cookies in the SSE request.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/EventSource',
      'https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events',
    ],
    tags: ['sse', 'eventsource', 'real-time', 'reconnection'],
    year: 2025,
  },
  {
    id: 'api-042',
    topic: 'api-networking',
    difficulty: 'mid',
    type: 'true-false',
    question: 'EventSource (SSE) connections automatically reconnect when the connection is lost, unlike WebSocket connections.',
    answer: true,
    explanation:
      'The EventSource API has automatic reconnection built into the browser implementation. When the connection drops, the browser automatically retries after a delay (default ~3 seconds, configurable via the retry: field in the event stream). On reconnect, it sends the Last-Event-ID header with the id of the last received event, allowing the server to resume delivery. WebSocket has no built-in reconnection — you must implement it manually (as in the ReconnectingWebSocket pattern). This is one reason SSE is simpler for one-way server-to-client streaming.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/EventSource',
    ],
    tags: ['sse', 'eventsource', 'reconnection', 'websocket', 'comparison'],
    year: 2025,
  },

  // ─── JSON ─────────────────────────────────────────────────────────────────
  {
    id: 'api-043',
    topic: 'api-networking',
    difficulty: 'junior',
    type: 'code-output',
    question: 'What does this code output?',
    code: `const obj = {
  name: 'Alice',
  age: undefined,
  score: null,
  greet: function() { return 'hi' },
  nested: { value: Infinity },
}

console.log(JSON.stringify(obj))`,
    answer: '{"name":"Alice","score":null,"nested":{"value":null}}',
    explanation:
      'JSON.stringify() silently drops: properties with undefined values (age), function values (greet). It converts Infinity and NaN to null (since JSON has no concept of these). null IS valid JSON and is preserved as null. undefined at the top level (not in an object) would produce the string "undefined". Date objects are serialized to their ISO string representation. To handle these edge cases, use the replacer parameter or libraries like superjson that extend JSON to handle more types.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify',
    ],
    tags: ['json', 'stringify', 'undefined', 'infinity', 'serialization'],
    year: 2025,
  },
  {
    id: 'api-044',
    topic: 'api-networking',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is NDJSON (Newline-Delimited JSON) and when would you use it?',
    options: [
      'A compressed JSON format that is smaller than standard JSON',
      'A streaming format where each line is a valid JSON value, enabling incremental processing of large datasets without loading the entire response',
      'A JSON schema validation format',
      'A JSON format specifically designed for nested database queries',
    ],
    answer: 1,
    explanation:
      'NDJSON (also called JSONL or JSON Lines) is a sequence of valid JSON values, one per line, separated by newlines: {"id":1,"name":"Alice"}\\n{"id":2,"name":"Bob"}\\n. Use cases: 1) Streaming API responses — process records as they arrive without waiting for the full response body. 2) Large data exports/imports — can be processed line-by-line with minimal memory. 3) Log files — each event is a self-contained JSON record. In JavaScript, you can read NDJSON streams using the Fetch API with response.body (ReadableStream) and a TextDecoder, splitting on newlines.',
    references: [
      'https://ndjson.org/',
    ],
    tags: ['json', 'ndjson', 'streaming', 'jsonl'],
    year: 2025,
  },

  // ─── Cookies ──────────────────────────────────────────────────────────────
  {
    id: 'api-045',
    topic: 'api-networking',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What does the SameSite=Lax cookie attribute do?',
    options: [
      'Allows the cookie to be sent on all cross-site requests',
      'Blocks the cookie from being sent with any cross-site request',
      'Sends the cookie on top-level navigations and safe methods (GET) from cross-site, but not on cross-site subrequests (images, iframes, AJAX)',
      'Encrypts the cookie value using TLS',
    ],
    answer: 2,
    explanation:
      'SameSite controls when cookies are sent in cross-site requests. SameSite=Strict: only same-site requests (cookie never sent when navigating from external site). SameSite=Lax (browser default since Chrome 80): sent on top-level navigation GETs from other sites (clicking a link), but NOT on cross-origin subrequests (iframes, AJAX, images, POST forms). SameSite=None: sent on all cross-site requests, requires Secure attribute. Lax is the sweet spot for most apps — it prevents CSRF attacks from cross-origin form POSTs while not breaking "link to our site" workflows.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite',
    ],
    tags: ['cookies', 'samesite', 'csrf', 'security'],
    year: 2025,
  },
  {
    id: 'api-046',
    topic: 'api-networking',
    difficulty: 'junior',
    type: 'mcq',
    question: 'What does the HttpOnly cookie attribute do?',
    options: [
      'Makes the cookie only work over HTTPS connections',
      'Restricts the cookie to HTTP requests only — JavaScript cannot access it via document.cookie',
      'Allows the cookie to be accessed only from the server',
      'Limits the cookie to the HTTP/1.1 protocol',
    ],
    answer: 1,
    explanation:
      'HttpOnly cookies are inaccessible to JavaScript\'s document.cookie API and the Cookie Store API. They can only be sent in HTTP requests and set via the Set-Cookie response header. This protects session cookies and tokens from XSS attacks — even if an attacker injects malicious JavaScript, they cannot steal HttpOnly cookies. The browser automatically attaches them to requests to the appropriate domain. Combine with Secure (HTTPS only) and SameSite for defense-in-depth. Note: HttpOnly does NOT prevent CSRF — that requires SameSite or CSRF tokens.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#httponly',
    ],
    tags: ['cookies', 'httponly', 'xss', 'security'],
    year: 2025,
  },
  {
    id: 'api-047',
    topic: 'api-networking',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is the impact of third-party cookie deprecation on frontend authentication?',
    options: [
      'No impact — third-party cookies are not used in authentication',
      'It breaks cross-origin embedded authentication flows (iframes, widget auth, cross-domain SSO) that relied on third-party cookies for session tracking',
      'It only affects advertising; authentication cookies are exempt',
      'Browsers are blocking all cookies, not just third-party ones',
    ],
    answer: 1,
    explanation:
      'Third-party cookies (set by a different domain than the page domain) are being deprecated by Chrome and blocked by Safari/Firefox. This affects: 1) Cross-domain SSO (Single Sign-On) — e.g., login.company.com setting cookies read by app.company.com. 2) Embedded authentication widgets in iframes. 3) Cross-origin API calls with credentials from different-origin frontends. Mitigations: use the Storage Access API, CHIPS (Partitioned cookies with SameSite=None; Partitioned), Related Website Sets (Chrome), or move to first-party cookie architectures with a common subdomain or token-based auth.',
    references: [
      'https://developer.chrome.com/docs/privacy-sandbox/third-party-cookie-phase-out/',
      'https://developer.mozilla.org/en-US/docs/Web/API/Storage_Access_API',
    ],
    tags: ['cookies', 'third-party', 'sso', 'privacy-sandbox', 'deprecation'],
    year: 2025,
  },

  // ─── DNS ──────────────────────────────────────────────────────────────────
  {
    id: 'api-048',
    topic: 'api-networking',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What does <link rel="dns-prefetch"> do and when should you use it?',
    options: [
      'It loads the full HTML page at the linked URL in the background',
      'It instructs the browser to resolve the DNS for a hostname in advance, reducing latency for subsequent connections to that host',
      'It prefetches the CSS file at the specified URL',
      'It preloads the DNS configuration for the current page',
    ],
    answer: 1,
    explanation:
      'DNS resolution for a new hostname takes 20-120ms. dns-prefetch tells the browser to resolve a hostname\'s IP address in advance, so when a resource from that domain is actually needed, the DNS lookup is already done. Example: <link rel="dns-prefetch" href="//fonts.googleapis.com">. Use it for: third-party scripts, analytics, CDN hostnames, API domains. A stronger hint is preconnect (<link rel="preconnect">), which establishes the TCP connection AND TLS handshake in advance. Use preconnect for the most critical third-party origins (1-3 max); dns-prefetch for the rest.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/Performance/dns-prefetch',
    ],
    tags: ['dns', 'prefetch', 'performance', 'resource-hints'],
    year: 2025,
  },
  {
    id: 'api-049',
    topic: 'api-networking',
    difficulty: 'senior',
    type: 'mcq',
    question: 'How does a CDN use DNS to route requests to the nearest edge node?',
    options: [
      'CDNs modify the HTML to include the closest server IP directly',
      'CDNs use Anycast routing or GeoDNS — the DNS server returns different IP addresses based on the requester\'s geographic location or network proximity',
      'CDNs use HTTP redirects to the nearest server after the initial request',
      'CDNs embed GPS coordinates in DNS TXT records',
    ],
    answer: 1,
    explanation:
      'CDNs route users to nearby edge nodes using two main techniques: 1) GeoDNS (or GSLB) — the authoritative DNS server inspects the resolver\'s IP address and returns the IP of the nearest PoP (Point of Presence). 2) Anycast — the same IP address is announced from multiple locations via BGP; network routers automatically route the request to the nearest announcement point. Cloudflare uses Anycast; AWS CloudFront uses GeoDNS. TTL values for CDN DNS are typically low (60-300 seconds) to enable fast failover when an edge node goes down.',
    references: [
      'https://www.cloudflare.com/learning/cdn/glossary/anycast-network/',
    ],
    tags: ['dns', 'cdn', 'anycast', 'geodns', 'routing'],
    year: 2025,
  },

  // ─── TLS/HTTPS ────────────────────────────────────────────────────────────
  {
    id: 'api-050',
    topic: 'api-networking',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is HSTS (HTTP Strict Transport Security) and what problem does it solve?',
    options: [
      'A header that enables HTTPS on the server — similar to installing an SSL certificate',
      'A response header that instructs browsers to only access the site over HTTPS for a specified period, preventing SSL stripping attacks',
      'A CSP directive that blocks all HTTP resources',
      'A TLS extension that compresses certificate data',
    ],
    answer: 1,
    explanation:
      'HSTS (Strict-Transport-Security: max-age=31536000; includeSubDomains; preload) solves the "first visit" problem: before HSTS, a user\'s first visit to a site might be over HTTP, vulnerable to SSL stripping (MITM downgrades HTTPS to HTTP). HSTS tells browsers: "always use HTTPS for this domain for max-age seconds." After the first HTTPS visit, the browser refuses to connect over HTTP — it automatically upgrades to HTTPS internally. The preload directive submits the domain to the HSTS Preload List — browsers ship with it hardcoded, protecting even the first visit.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security',
      'https://hstspreload.org/',
    ],
    tags: ['https', 'hsts', 'tls', 'ssl-stripping', 'security'],
    year: 2025,
  },
  {
    id: 'api-051',
    topic: 'api-networking',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is TLS certificate pinning and what are its risks in web applications?',
    options: [
      'Storing the certificate in localStorage to avoid re-downloading it',
      'Hardcoding a certificate\'s public key hash, rejecting connections if the certificate does not match — protects against rogue CAs but risks outages when certificates are rotated',
      'Using a fixed TLS version (e.g., always TLS 1.3) regardless of server support',
      'Pinning the HTTPS port to always use port 443',
    ],
    answer: 1,
    explanation:
      'Certificate pinning mitigates attacks where a compromised or rogue Certificate Authority issues a fraudulent certificate for your domain. By pinning the expected public key hash, the client rejects valid-but-wrong certificates. Native mobile apps commonly use it. In web applications, it is implemented via the deprecated HPKP (HTTP Public Key Pinning) header — removed from browsers due to catastrophic risk: if you pin a certificate and it expires without a backup pin, ALL users are locked out. The recommended alternative for web apps is CAA DNS records (restrict which CAs can issue for your domain) and Certificate Transparency logs monitoring.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Public-Key-Pins',
      'https://scotthelme.co.uk/hpkp-is-no-more/',
    ],
    tags: ['tls', 'certificate-pinning', 'hpkp', 'security'],
    year: 2025,
  },

  // ─── Error Handling Deep Dive ─────────────────────────────────────────────
  {
    id: 'api-052',
    topic: 'api-networking',
    difficulty: 'mid',
    type: 'debug',
    question: 'This error handling code has a bug — network errors are silently swallowed. Find and fix it:',
    code: `async function getUser(id) {
  try {
    const response = await fetch(\`/api/users/\${id}\`)
    const data = await response.json()
    return data
  } catch (error) {
    if (error instanceof TypeError) {
      // Network error - user is offline
      return null
    }
    return null // HTTP errors and other errors
  }
}`,
    answer: "Bug: HTTP errors (4xx, 5xx) are not checked — response.json() succeeds even on 404/500, returning the error body as data. Additionally, all errors return null with no logging, making debugging impossible. Fix: check response.ok before calling response.json(), throw specific errors for different failure modes, and log errors.",
    solutionCode: `async function getUser(id) {
  try {
    const response = await fetch(\`/api/users/\${id}\`)
    if (!response.ok) {
      throw new Error(\`HTTP \${response.status}: \${response.statusText}\`)
    }
    return await response.json()
  } catch (error) {
    if (error instanceof TypeError) {
      console.error('Network error:', error)
      throw new Error('Network unavailable')
    }
    console.error('API error:', error)
    throw error // Re-throw so callers can handle it
  }
}`,
    explanation:
      'The corrected version:\n\nasync function getUser(id) {\n  try {\n    const response = await fetch(`/api/users/${id}`)\n    if (!response.ok) {\n      throw new Error(`HTTP ${response.status}: ${response.statusText}`)\n    }\n    return await response.json()\n  } catch (error) {\n    if (error instanceof TypeError) {\n      console.error("Network error:", error)\n      throw new Error("Network unavailable")\n    }\n    console.error("API error:", error)\n    throw error // Re-throw so callers can handle it\n  }\n}\n\nKey principles: (1) Always check response.ok. (2) Distinguish network errors (TypeError) from HTTP errors. (3) Re-throw or transform errors — returning null silently hides failures from callers.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#checking_that_the_fetch_was_successful',
    ],
    tags: ['fetch', 'error-handling', 'debug', 'network-errors', 'http-errors'],
    year: 2025,
  },

  // ─── HTTP Headers — Advanced ──────────────────────────────────────────────
  {
    id: 'api-053',
    topic: 'api-networking',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is the Authorization header Bearer scheme and how does it work?',
    options: [
      'It encrypts the request using a bearer certificate',
      'It attaches a token (typically a JWT or opaque token) in the Authorization header that the server validates to identify the client',
      'It provides HTTP Basic authentication with a username and password',
      'It stores a session ID that the server uses to look up a session database',
    ],
    answer: 1,
    explanation:
      'The Bearer scheme (RFC 6750) is used in OAuth 2.0: Authorization: Bearer <token>. The token is "bearer" — possession is sufficient for authorization, no additional verification needed. The server validates the token on every request: for JWTs, it verifies the signature and expiry locally (stateless). For opaque tokens, it queries the authorization server (token introspection). HTTPS is mandatory — tokens in Authorization headers are visible in plaintext if sent over HTTP. Never log Authorization headers. The scheme name is case-insensitive: "Bearer", "bearer", and "BEARER" are all valid.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization',
      'https://www.rfc-editor.org/rfc/rfc6750',
    ],
    tags: ['headers', 'authorization', 'bearer', 'jwt', 'oauth'],
    year: 2025,
  },
  {
    id: 'api-054',
    topic: 'api-networking',
    difficulty: 'senior',
    type: 'mcq',
    question: 'How does HTTP conditional request with If-None-Match differ from If-Modified-Since?',
    options: [
      'They are functionally identical — both check if the resource has changed',
      'If-None-Match uses ETag (exact content identifier); If-Modified-Since uses a timestamp. ETags are more reliable since timestamps can have 1-second resolution issues and clock skew',
      'If-None-Match works only for GET; If-Modified-Since works for all methods',
      'If-None-Match is for cache validation; If-Modified-Since is for range requests',
    ],
    answer: 1,
    explanation:
      'Both enable conditional requests that return 304 Not Modified if the resource has not changed: If-None-Match: "abc123" — server compares ETag. If-Modified-Since: Wed, 15 Jan 2025 12:00:00 GMT — server compares Last-Modified timestamp. ETags are preferred because: 1) Last-Modified has 1-second granularity — sub-second changes are not detected. 2) Clock synchronization issues between servers. 3) Some resources change "modification time" without changing content. 4) ETags can encode version numbers, not just time. When both are present, ETags take precedence per HTTP spec.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/HTTP/Conditional_requests',
    ],
    tags: ['headers', 'etag', 'if-none-match', 'if-modified-since', 'caching'],
    year: 2025,
  },

  // ─── Fetch API — Advanced ─────────────────────────────────────────────────
  {
    id: 'api-055',
    topic: 'api-networking',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is the fetch cache option and how does cache: "no-store" differ from cache: "reload"?',
    options: [
      'They are identical — both bypass the cache completely',
      'no-store: never cache the response; reload: bypass cache for this request but cache the new response for future requests',
      'no-store: always send a network request; reload: use cached response if available',
      'Both are non-standard options not supported in modern browsers',
    ],
    answer: 1,
    explanation:
      'fetch cache option controls the browser HTTP cache interaction: "default" — standard browser cache semantics. "no-store" — bypass cache on request AND do not store the response in cache. "reload" — bypass cache on request (force network request), but DO store the fresh response in cache for future requests. "no-cache" — always revalidate with server before using cached response. "force-cache" — use cached response regardless of staleness. "only-if-cached" — use cache only, fail if not cached. no-store is appropriate for sensitive data (banking, health) that should never be cached.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/fetch#cache',
    ],
    tags: ['fetch', 'cache', 'no-store', 'reload', 'browser-cache'],
    year: 2025,
  },
  {
    id: 'api-056',
    topic: 'api-networking',
    difficulty: 'mid',
    type: 'code-output',
    question: 'What happens and what is logged?',
    code: `// Assume all fetches succeed with status 200
async function parallel() {
  const [a, b, c] = await Promise.all([
    fetch('/api/users').then(r => r.json()),
    fetch('/api/posts').then(r => r.json()),
    fetch('/api/comments').then(r => r.json()),
  ])

  console.log('done', a, b, c)
}

async function sequential() {
  const a = await fetch('/api/users').then(r => r.json())
  const b = await fetch('/api/posts').then(r => r.json())
  const c = await fetch('/api/comments').then(r => r.json())

  console.log('done', a, b, c)
}`,
    answer: 'Both log "done" with the three response objects, but parallel() is faster — it fires all three fetch requests simultaneously. sequential() fires each fetch only after the previous one completes, taking ~3x longer.',
    explanation:
      'Promise.all starts all three fetch calls simultaneously — they run in parallel. With 100ms per request, parallel() takes ~100ms total. sequential() awaits each before starting the next — it takes ~300ms. Both produce the same result. Use Promise.all when requests are independent. If any request fails, Promise.all rejects immediately (fail-fast). Use Promise.allSettled if you want all results regardless of individual failures. Use sequential when requests depend on each other (e.g., you need the userId from the first response to make the second request).',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all',
    ],
    tags: ['fetch', 'promise-all', 'parallel', 'performance', 'async'],
    year: 2025,
  },

  // ─── REST API — Additional ────────────────────────────────────────────────
  {
    id: 'api-057',
    topic: 'api-networking',
    difficulty: 'lead',
    type: 'system-design',
    question: 'Design a client-side API layer for a large React application that handles: authentication token refresh, request deduplication, optimistic updates, and error normalization.',
    answer: `The API layer architecture:

1. HTTP Client (base layer)
   - Axios or fetch wrapper with interceptors
   - Request interceptor: attach Authorization: Bearer <token>
   - Response interceptor: catch 401, trigger token refresh, retry original request
   - Token refresh queue: if refresh is in-flight, queue all 401s; resolve all when refresh completes

2. Request Deduplication
   - In-flight request cache: Map<string, Promise>
   - Key = method + URL + sorted params hash
   - On duplicate request, return the same promise instead of issuing a new fetch
   - Clear from cache when request settles

3. React Query / SWR integration
   - Use as the fetcher layer — provides caching, background refetch, deduplication at the hook level
   - Define query keys as serializable arrays for cache invalidation

4. Optimistic Updates
   - On mutation, update the local cache immediately (queryClient.setQueryData)
   - Store rollback snapshot
   - On error, revert snapshot and show error toast
   - On success, invalidate related queries for eventual consistency

5. Error Normalization
   - Transform all API errors to a standard shape: { code, message, field?, status }
   - Network errors → code: "NETWORK_ERROR"
   - 4xx → code from response body or HTTP status
   - 5xx → code: "SERVER_ERROR"
   - Timeout → code: "TIMEOUT"

6. Retry Policy
   - Automatic retry on network errors and 5xx (max 3 attempts, exponential backoff)
   - Do NOT retry: 4xx (except 429 with Retry-After), mutations (POST/DELETE)`,
    explanation:
      'Key architectural decisions: (1) Token refresh logic lives in the interceptor layer — no component needs to know about it. (2) Deduplication prevents parallel identical requests (e.g., three components mounting simultaneously all requesting the user profile). (3) React Query handles the component-level caching; the API layer is the transport. (4) Optimistic updates require careful rollback logic — always store the pre-mutation state. (5) Normalized errors allow generic error UI components to display meaningful messages without knowing API specifics.',
    references: [
      'https://tanstack.com/query/latest/docs/framework/react/guides/optimistic-updates',
      'https://axios-http.com/docs/interceptors',
    ],
    tags: ['architecture', 'api-client', 'react-query', 'token-refresh', 'deduplication', 'system-design'],
    year: 2025,
  },
  {
    id: 'api-058',
    topic: 'api-networking',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is the difference between 401 Unauthorized and 403 Forbidden?',
    options: [
      'They are interchangeable — both mean the user cannot access the resource',
      '401 means the request lacks valid authentication credentials (not logged in); 403 means authentication succeeded but the user lacks permission for this specific resource',
      '401 is for API endpoints; 403 is for web page routes',
      '401 is a client error; 403 is a server configuration error',
    ],
    answer: 1,
    explanation:
      '401 Unauthorized (misleadingly named) means: "I don\'t know who you are — please authenticate." The server sends WWW-Authenticate header. The client should present credentials (log in, refresh token). 403 Forbidden means: "I know who you are, but you cannot do this." Authentication is not the issue — authorization is. Example: a logged-in user trying to access another user\'s private data gets 403. In SPAs: 401 → redirect to login page; 403 → show "Access Denied" within the app. Never return 404 to "hide" the existence of a resource from unauthorized users — that is a deliberate design choice (security by obscurity).',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401',
      'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403',
    ],
    tags: ['http-status', '401', '403', 'authentication', 'authorization'],
    year: 2025,
  },
  {
    id: 'api-059',
    topic: 'api-networking',
    difficulty: 'junior',
    type: 'mcq',
    question: 'Which HTTP status code indicates that the server cannot find the requested resource?',
    options: ['400 Bad Request', '403 Forbidden', '404 Not Found', '410 Gone'],
    answer: 2,
    explanation:
      '404 Not Found is the most well-known status code. The server could not find a current representation for the requested URI. The difference from 410 Gone: 404 does not indicate whether the absence is temporary or permanent (it may exist in the future). 410 Gone means the resource deliberately no longer exists and will not return — useful for SEO (tells crawlers to remove the URL from their index). For APIs, use 404 when a specific resource ID does not exist (GET /users/999). Use 400 for invalid request format (missing required fields). Use 204 No Content for empty collections (not 404).',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404',
    ],
    tags: ['http-status', '404', 'rest'],
    year: 2025,
  },
  {
    id: 'api-060',
    topic: 'api-networking',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is the purpose of the OPTIONS HTTP method?',
    options: [
      'To update server configuration options',
      'To describe the communication options available for a target resource, primarily used in CORS preflight requests',
      'To retrieve the headers of a response without the body (like GET without body)',
      'To subscribe to server-sent event streams',
    ],
    answer: 1,
    explanation:
      'OPTIONS requests describe the allowed methods and capabilities for a URL. The server responds with Allow: GET, POST, OPTIONS and CORS-specific headers. Two main uses: 1) CORS preflight — browsers automatically send OPTIONS before non-simple cross-origin requests to verify the server allows the actual request. 2) Service discovery — clients can ask what methods are allowed on a resource without sending the actual request. HEAD (not OPTIONS) retrieves response headers without the body. CORS preflight responses should be cached with Access-Control-Max-Age to reduce repeated OPTIONS requests.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/OPTIONS',
    ],
    tags: ['http-methods', 'options', 'cors', 'preflight'],
    year: 2025,
  },
  {
    id: 'api-061',
    topic: 'api-networking',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is HTTP header compression in HTTP/2 (HPACK) and why is it important?',
    options: [
      'HPACK compresses the response body using gzip, replacing Content-Encoding',
      'HPACK compresses HTTP/2 headers using a static table of common headers and a dynamic table updated per-connection, significantly reducing overhead for repeated headers like Authorization',
      'HPACK is a request queuing algorithm that reorders headers for efficiency',
      'HPACK encrypts HTTP headers before transmission over TLS',
    ],
    answer: 1,
    explanation:
      'HTTP/1.1 headers are uncompressed plain text — repeated headers like Cookie, Authorization, Accept, User-Agent are sent verbatim on every request. For APIs with authentication headers, this can be 500-1000 bytes of header overhead per request. HPACK (RFC 7541) in HTTP/2 uses two tables: 1) Static table — 61 common header name/value pairs indexed by number (e.g., ":method: GET" = 2, ":status: 200" = 8). 2) Dynamic table — headers sent in the connection, added by index. Common headers are sent as 1-3 byte indices instead of full strings. Authorization headers sent repeatedly are compressed dramatically. HTTP/3 uses QPACK, a QUIC-optimized version.',
    references: [
      'https://http2.github.io/http2-spec/compression.html',
      'https://www.rfc-editor.org/rfc/rfc7541',
    ],
    tags: ['http2', 'hpack', 'header-compression', 'performance'],
    year: 2025,
  },
  {
    id: 'api-062',
    topic: 'api-networking',
    difficulty: 'lead',
    type: 'system-design',
    question: 'You are building a real-time collaborative document editor (like Google Docs). Compare WebSockets, SSE, and polling for synchronizing document changes between multiple clients. Which would you choose and why?',
    answer: `Recommendation: WebSockets with operational transformation or CRDTs.

Comparison:

Polling (setInterval + fetch):
  Pros: Simple, works everywhere, no persistent connections
  Cons: High latency (up to polling interval), wasted requests when nothing changed, poor scalability with many clients, battery drain on mobile
  Use when: very low real-time requirements, simple implementations

SSE (Server-Sent Events):
  Pros: Unidirectional simplicity, HTTP-based (proxies, CDN, HTTP/2 multiplexing), auto-reconnect, works with regular HTTP infrastructure
  Cons: Client changes must be sent via separate POST/PUT requests (two connections), slight overhead vs WebSocket for bidirectional use cases
  Use when: server pushes data, client rarely sends (activity feeds, notifications, presence indicators)

WebSockets:
  Pros: Full-duplex bidirectional, low latency, efficient binary framing, single connection for send/receive, designed for high-frequency updates
  Cons: Does not work well with some proxies/firewalls, requires sticky sessions or pub/sub for horizontal scaling, must implement reconnection, more complex server infrastructure
  Use when: collaborative editing, chat, gaming, any case where client AND server send frequently

For collaborative editing:
- Use WebSockets for document changes (bidirectional, low latency critical)
- Combine with CRDT (Yjs, Automerge) or OT for conflict resolution
- Use a pub/sub layer (Redis, Ably) behind WebSocket servers for horizontal scaling
- Fall back to SSE + REST for presence indicators and cursors if infrastructure is constrained`,
    explanation:
      'Real-time collaborative tools have specific requirements: sub-100ms latency for character-by-character sync, handling concurrent edits from multiple users, offline support, and conflict resolution. Google Docs uses a custom OT (Operational Transformation) protocol over WebSockets. Figma uses WebSockets with a custom CRDT. The infrastructure choice (WebSocket vs SSE) matters less than the conflict resolution algorithm. For new projects, Yjs + a WebSocket provider (y-websocket) is the recommended starting point.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API',
      'https://docs.yjs.dev/',
    ],
    tags: ['websocket', 'sse', 'polling', 'system-design', 'real-time', 'collaborative', 'crdt'],
    year: 2025,
  },
  {
    id: 'api-063',
    topic: 'api-networking',
    difficulty: 'mid',
    type: 'debug',
    question: 'This GraphQL query implementation is causing N+1 requests. Identify the problem and describe the fix:',
    code: `// React component
function PostList() {
  const { data } = useQuery(gql\`
    query {
      posts {
        id
        title
        authorId
      }
    }
  \`)

  return data?.posts.map(post => (
    <PostItem key={post.id} post={post} authorId={post.authorId} />
  ))
}

function PostItem({ post, authorId }) {
  const { data } = useQuery(gql\`
    query GetAuthor($id: ID!) {
      user(id: $id) {
        name
        avatar
      }
    }
  \`, { variables: { id: authorId } })

  return <div>{post.title} by {data?.user.name}</div>
}`,
    answer: "N+1 problem: the PostList makes 1 query for posts, then PostItem makes 1 separate user query per post. With 20 posts, that is 21 total requests. Fix: include the author fields directly in the posts query using nested selection, or use a DataLoader on the server to batch author lookups.",
    solutionCode: `// Fixed: fetch author data in the same query as posts
function PostList() {
  const { data } = useQuery(gql\`
    query {
      posts {
        id
        title
        author {
          name
          avatar
        }
      }
    }
  \`)

  return data?.posts.map(post => (
    <PostItem key={post.id} post={post} author={post.author} />
  ))
}

function PostItem({ post, author }) {
  return <div>{post.title} by {author.name}</div>
}`,
    explanation:
      'The solution on the client side is to fetch all required data in a single query using nested fields:\n\nquery {\n  posts {\n    id\n    title\n    author {\n      name\n      avatar\n    }\n  }\n}\n\nThis leverages GraphQL\'s strength — fetching related data in one request. On the server side, even with a single query, the author resolver may fire once per post if not batched. DataLoader batches and deduplicates resolver calls within a single tick. With GraphQL fragments, you can co-locate each component\'s data requirements and compose them into a single efficient query at the route level.',
    references: [
      'https://graphql.org/learn/queries/#fields',
      'https://github.com/graphql/dataloader',
    ],
    tags: ['graphql', 'n+1', 'dataloader', 'debug', 'performance'],
    year: 2025,
  },
  {
    id: 'api-064',
    topic: 'api-networking',
    difficulty: 'mid',
    type: 'true-false',
    question: 'The Fetch API supports request streaming — you can send a ReadableStream as the request body to stream data to the server.',
    answer: true,
    explanation:
      'As of Chrome 105+ and other modern browsers, fetch supports upload streaming via ReadableStream as the body. This enables: streaming large files without loading them entirely into memory, sending real-time data (microphone audio) to the server incrementally, and implementing request body streaming for video/audio processing APIs. Note: this requires the server to support HTTP/2 or HTTP/1.1 chunked transfer encoding. The half-duplex limitation (HTTP/1.1) or full-duplex support (HTTP/2) affects whether you can read the response while still writing the request. Check feature support with "transferSize" in performance APIs.',
    references: [
      'https://developer.chrome.com/articles/fetch-streaming-requests/',
    ],
    tags: ['fetch', 'streaming', 'readable-stream', 'upload'],
    year: 2025,
  },
  {
    id: 'api-065',
    topic: 'api-networking',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is the JSON:API specification and what problems does it solve?',
    options: [
      'A JSON compression algorithm that reduces API response sizes',
      'A standardized specification for structuring JSON API responses, including resource objects, relationships, links, and error formats — reducing API design bike-shedding',
      'A JSON Schema validator for API contracts',
      'A JSON RPC protocol for calling server-side functions',
    ],
    answer: 1,
    explanation:
      'JSON:API (jsonapi.org) is a specification for how APIs should format their JSON responses. It defines: 1) Resource objects with type, id, attributes, relationships. 2) Compound documents — include related resources in one response to avoid N+1. 3) Sparse fieldsets — clients request only specific fields. 4) Pagination, filtering, sorting conventions. 5) Error objects with code, title, detail, source. Benefits: consistent conventions reduce per-project API design decisions, client libraries (ember-data, json-api-normalizer) can work generically with any JSON:API compliant endpoint. Tradeoff: verbose format compared to plain JSON.',
    references: [
      'https://jsonapi.org/',
    ],
    tags: ['json', 'json-api', 'api-design', 'specification'],
    year: 2025,
  },
]
