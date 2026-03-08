import type { Question } from '../types'

export const apiTestingPracticalQuestions: Question[] = [
  // ─── api-networking (15 questions) ──────────────────────────────────────────

  {
    id: 'atp-001',
    topic: 'api-networking',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'Implement retry with exponential backoff for failed API calls. The function should retry up to 3 times with delays of 1s, 2s, 4s. Abort on 4xx errors (no retry).',
    answer: `async function fetchWithRetry(
  url: string,
  options?: RequestInit,
  maxRetries = 3
): Promise<Response> {
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(url, options);

      // Don't retry client errors — they won't change
      if (response.status >= 400 && response.status < 500) {
        return response;
      }

      if (response.ok) return response;

      // Server error — worth retrying
      if (attempt === maxRetries) return response;
    } catch (error) {
      // Network error
      if (attempt === maxRetries) throw error;
    }

    const delay = Math.pow(2, attempt) * 1000;
    const jitter = Math.random() * 500;
    await new Promise((r) => setTimeout(r, delay + jitter));
  }

  throw new Error('Unreachable');
}`,
    explanation:
      'Exponential backoff doubles the wait between each retry (1s, 2s, 4s). Adding jitter prevents thundering herd when many clients retry simultaneously. 4xx errors are client-side mistakes (bad input, auth) and retrying won\'t help — only 5xx (server) and network errors are retried. The AbortController can be passed via options.signal for external cancellation. Libraries like ky and axios-retry abstract this, but understanding the pattern is crucial for debugging.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API',
      'https://aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter/',
    ],
    tags: ['retry', 'exponential-backoff', 'fetch', 'error-handling'],
    year: 2025,
  },
  {
    id: 'atp-002',
    topic: 'api-networking',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'User submits a form on a slow network. Prevent double submission without disabling the submit button (which causes accessibility issues).',
    answer: `function useSubmitGuard() {
  const pendingRef = useRef(false);
  const abortRef = useRef<AbortController | null>(null);

  const submit = useCallback(async (formData: FormData) => {
    if (pendingRef.current) return; // Guard against double submit
    pendingRef.current = true;

    abortRef.current = new AbortController();

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        body: formData,
        signal: abortRef.current.signal,
      });

      if (!response.ok) throw new Error('Submit failed');
      return await response.json();
    } finally {
      pendingRef.current = false;
      abortRef.current = null;
    }
  }, []);

  const cancel = useCallback(() => {
    abortRef.current?.abort();
    pendingRef.current = false;
  }, []);

  return { submit, cancel };
}`,
    explanation:
      'A ref-based guard is more reliable than state-based because setState is asynchronous — two rapid clicks can both read isPending=false before either sets it to true. useRef updates synchronously, so the second call sees pendingRef.current=true immediately. The AbortController allows cancellation on unmount or navigation. Server-side idempotency keys (sent as a header) provide a second layer of protection. Never rely solely on disabling buttons — programmatic submits and keyboard shortcuts can bypass it.',
    references: [
      'https://react.dev/reference/react/useRef',
      'https://developer.mozilla.org/en-US/docs/Web/API/AbortController',
    ],
    tags: ['form-submission', 'race-condition', 'ref', 'abort-controller'],
    year: 2025,
  },
  {
    id: 'atp-003',
    topic: 'api-networking',
    difficulty: 'senior',
    type: 'code-write',
    question:
      'Implement real-time search with debounce, loading state, and request cancellation. If the user types "rea" then "reac" then "react", only the last request should resolve.',
    answer: `function useSearch(delay = 300) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    const timer = setTimeout(async () => {
      // Cancel previous in-flight request
      abortRef.current?.abort();
      abortRef.current = new AbortController();

      try {
        const res = await fetch(
          \`/api/search?q=\${encodeURIComponent(query)}\`,
          { signal: abortRef.current.signal }
        );
        const data = await res.json();
        setResults(data.items);
      } catch (err) {
        if (err instanceof DOMException && err.name === 'AbortError') return;
        console.error('Search failed:', err);
      } finally {
        setLoading(false);
      }
    }, delay);

    return () => {
      clearTimeout(timer);
      abortRef.current?.abort();
    };
  }, [query, delay]);

  return { query, setQuery, results, loading };
}`,
    explanation:
      'Three mechanisms work together: (1) debounce via setTimeout delays the request until the user stops typing; (2) AbortController cancels any in-flight request before starting a new one, preventing stale responses from overwriting fresh ones; (3) cleanup function runs when query changes or component unmounts, clearing both timer and request. The AbortError check in catch avoids logging expected cancellations as errors. encodeURIComponent prevents query injection. Libraries like TanStack Query, useSWR, or use() in React 19 handle this pattern out of the box, but understanding the raw implementation is important for debugging.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/AbortController',
      'https://tanstack.com/query/latest',
    ],
    tags: ['search', 'debounce', 'abort-controller', 'race-condition'],
    year: 2025,
  },
  {
    id: 'atp-004',
    topic: 'api-networking',
    difficulty: 'senior',
    type: 'code-write',
    question:
      'WebSocket connection drops frequently on mobile networks. Implement robust reconnection with backoff, heartbeat ping, and message queue for offline messages.',
    answer: `class RobustWebSocket {
  private ws: WebSocket | null = null;
  private url: string;
  private retries = 0;
  private maxRetries = 10;
  private messageQueue: string[] = [];
  private heartbeatInterval: ReturnType<typeof setInterval> | null = null;
  private listeners = new Map<string, Set<Function>>();

  constructor(url: string) {
    this.url = url;
    this.connect();
  }

  private connect() {
    this.ws = new WebSocket(this.url);

    this.ws.onopen = () => {
      this.retries = 0;
      this.startHeartbeat();
      this.flushQueue();
      this.emit('connected');
    };

    this.ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'pong') return; // heartbeat response
      this.emit('message', data);
    };

    this.ws.onclose = (event) => {
      this.stopHeartbeat();
      if (!event.wasClean) this.reconnect();
    };

    this.ws.onerror = () => {
      this.ws?.close();
    };
  }

  private reconnect() {
    if (this.retries >= this.maxRetries) {
      this.emit('maxRetriesReached');
      return;
    }
    const delay = Math.min(1000 * Math.pow(2, this.retries), 30000);
    this.retries++;
    setTimeout(() => this.connect(), delay);
    this.emit('reconnecting', { attempt: this.retries, delay });
  }

  private startHeartbeat() {
    this.heartbeatInterval = setInterval(() => {
      if (this.ws?.readyState === WebSocket.OPEN) {
        this.ws.send(JSON.stringify({ type: 'ping' }));
      }
    }, 15000);
  }

  private stopHeartbeat() {
    if (this.heartbeatInterval) clearInterval(this.heartbeatInterval);
  }

  send(data: unknown) {
    const message = JSON.stringify(data);
    if (this.ws?.readyState === WebSocket.OPEN) {
      this.ws.send(message);
    } else {
      this.messageQueue.push(message);
    }
  }

  private flushQueue() {
    while (this.messageQueue.length > 0) {
      const msg = this.messageQueue.shift()!;
      this.ws?.send(msg);
    }
  }

  on(event: string, cb: Function) {
    if (!this.listeners.has(event)) this.listeners.set(event, new Set());
    this.listeners.get(event)!.add(cb);
  }

  private emit(event: string, data?: unknown) {
    this.listeners.get(event)?.forEach((cb) => cb(data));
  }

  close() {
    this.maxRetries = 0; // prevent reconnection
    this.stopHeartbeat();
    this.ws?.close();
  }
}`,
    explanation:
      'Key features: (1) Exponential backoff with a cap at 30s prevents hammering the server; (2) Heartbeat pings detect silent disconnections where the OS hasn\'t fired onclose yet (common on mobile when switching networks); (3) Message queue buffers sends during disconnect and flushes on reconnect, ensuring no data loss; (4) Event emitter pattern lets UI react to connection state changes. Production additions: add a visibility API listener to reconnect when tab becomes visible, use navigator.onLine to skip reconnect attempts when offline, and consider a sequence ID protocol to detect missed messages on reconnect.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/WebSocket',
      'https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API',
    ],
    tags: ['websocket', 'reconnection', 'heartbeat', 'offline-queue'],
    year: 2025,
  },
  {
    id: 'atp-005',
    topic: 'api-networking',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'Backend returns HTTP 200 with error in body (legacy API pattern). Write a fetch wrapper that normalizes this into proper error handling.',
    answer: `interface LegacyResponse<T> {
  success: boolean;
  error_code?: string;
  error_message?: string;
  data?: T;
}

class ApiError extends Error {
  constructor(
    public code: string,
    message: string,
    public status: number
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

async function legacyFetch<T>(url: string, options?: RequestInit): Promise<T> {
  const response = await fetch(url, options);

  // Handle actual HTTP errors
  if (!response.ok) {
    throw new ApiError(
      \`HTTP_\${response.status}\`,
      response.statusText,
      response.status
    );
  }

  const body: LegacyResponse<T> = await response.json();

  // Normalize legacy 200-with-error into a thrown error
  if (!body.success) {
    throw new ApiError(
      body.error_code ?? 'UNKNOWN',
      body.error_message ?? 'Unknown error',
      200
    );
  }

  return body.data as T;
}

// Usage
try {
  const user = await legacyFetch<User>('/api/user/123');
} catch (err) {
  if (err instanceof ApiError) {
    if (err.code === 'USER_NOT_FOUND') showNotFound();
    else if (err.code === 'SESSION_EXPIRED') redirectToLogin();
    else showGenericError(err.message);
  }
}`,
    explanation:
      'Many legacy APIs (and some payment gateways like Stripe\'s older endpoints) return HTTP 200 for everything and embed errors in the response body. This wrapper normalizes both HTTP errors and body-level errors into a single ApiError class so callers use one consistent try/catch pattern. The custom error class carries both a machine-readable code for branching logic and a human-readable message for display. This is a crucial adapter pattern when migrating to modern API practices — it isolates the legacy handling so the rest of the app doesn\'t need to know about the quirk.',
    tags: ['legacy-api', 'error-handling', 'adapter-pattern', 'fetch'],
    year: 2025,
  },
  {
    id: 'atp-006',
    topic: 'api-networking',
    difficulty: 'senior',
    type: 'code-write',
    question:
      'Implement file upload with progress bar, pause/resume capability, and chunked upload for large files (>100MB).',
    answer: `class ChunkedUploader {
  private file: File;
  private chunkSize: number;
  private uploadedChunks = new Set<number>();
  private paused = false;
  private abortController: AbortController | null = null;
  private onProgress: (pct: number) => void;

  constructor(file: File, onProgress: (pct: number) => void, chunkSize = 5 * 1024 * 1024) {
    this.file = file;
    this.chunkSize = chunkSize;
    this.onProgress = onProgress;
  }

  get totalChunks() {
    return Math.ceil(this.file.size / this.chunkSize);
  }

  async upload(uploadId: string) {
    for (let i = 0; i < this.totalChunks; i++) {
      if (this.paused) {
        await this.waitForResume();
      }

      if (this.uploadedChunks.has(i)) continue; // Skip already uploaded

      const start = i * this.chunkSize;
      const end = Math.min(start + this.chunkSize, this.file.size);
      const chunk = this.file.slice(start, end);

      this.abortController = new AbortController();

      const formData = new FormData();
      formData.append('chunk', chunk);
      formData.append('chunkIndex', String(i));
      formData.append('totalChunks', String(this.totalChunks));
      formData.append('uploadId', uploadId);
      formData.append('fileName', this.file.name);

      const res = await fetch('/api/upload/chunk', {
        method: 'POST',
        body: formData,
        signal: this.abortController.signal,
      });

      if (!res.ok) throw new Error(\`Chunk \${i} failed: \${res.statusText}\`);

      this.uploadedChunks.add(i);
      this.onProgress((this.uploadedChunks.size / this.totalChunks) * 100);
    }

    // Finalize — tell server all chunks are uploaded
    await fetch('/api/upload/complete', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ uploadId, fileName: this.file.name }),
    });
  }

  pause() {
    this.paused = true;
    this.abortController?.abort();
  }

  private resumeResolve: (() => void) | null = null;

  resume() {
    this.paused = false;
    this.resumeResolve?.();
  }

  private waitForResume(): Promise<void> {
    return new Promise((resolve) => {
      this.resumeResolve = resolve;
    });
  }
}`,
    explanation:
      'Chunked uploads split large files into pieces (typically 5MB) and upload sequentially. Key advantages: (1) Pause/resume — the Set of uploaded chunk indices survives pause; on resume, already-uploaded chunks are skipped; (2) Resume after failure — if the network drops mid-upload, only the failed chunk needs re-uploading; (3) Progress — calculated from chunks completed vs total. The server reassembles chunks using the uploadId and chunkIndex. The complete endpoint triggers server-side assembly. For even better UX, query the server on init for already-received chunks (resumable from a previous session). Production systems like tus.io standardize this protocol.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/File/slice',
      'https://tus.io/',
    ],
    tags: ['file-upload', 'chunked', 'pause-resume', 'progress'],
    year: 2025,
  },
  {
    id: 'atp-007',
    topic: 'api-networking',
    difficulty: 'senior',
    type: 'system-design',
    question:
      'Multiple components in your app call the same API endpoint (e.g., /api/user/me for avatar, name, permissions). How do you deduplicate requests?',
    answer:
      'Use request deduplication via a shared cache layer (TanStack Query, SWR) or implement a manual in-flight request map keyed by URL+params.',
    explanation:
      'Approach 1 — TanStack Query / SWR: These libraries deduplicate by query key automatically. If two components call useQuery(["user", "me"]) within the staleTime window, only one HTTP request fires. The second component subscribes to the same cache entry. Approach 2 — Manual dedup map: maintain a Map<string, Promise<Response>>. Before fetching, check if a request with the same key is in-flight. If so, return the existing promise. On completion/error, remove the entry. This is what libraries like graphql-request and ky use internally. Approach 3 — HTTP cache headers: if the server sets Cache-Control: max-age=60, the browser itself deduplicates at the network layer. Combine all three for defense in depth. Key consideration: deduplication keys must include all parameters that affect the response (URL + method + body hash for POST).',
    references: [
      'https://tanstack.com/query/latest/docs/framework/react/guides/query-keys',
      'https://swr.vercel.app/docs/advanced/performance#deduplication',
    ],
    tags: ['deduplication', 'caching', 'tanstack-query', 'swr'],
    year: 2025,
  },
  {
    id: 'atp-008',
    topic: 'api-networking',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'Implement optimistic update for a todo list. When the user toggles a todo, update the UI immediately. If the API call fails, roll back to the previous state and show an error.',
    answer: `function useTodoToggle() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (todoId: string) =>
      fetch(\`/api/todos/\${todoId}/toggle\`, { method: 'PATCH' }).then((r) => {
        if (!r.ok) throw new Error('Toggle failed');
        return r.json();
      }),

    onMutate: async (todoId) => {
      // Cancel outgoing refetches so they don't overwrite optimistic update
      await queryClient.cancelQueries({ queryKey: ['todos'] });

      // Snapshot current state for rollback
      const previous = queryClient.getQueryData<Todo[]>(['todos']);

      // Optimistically update
      queryClient.setQueryData<Todo[]>(['todos'], (old) =>
        old?.map((t) =>
          t.id === todoId ? { ...t, completed: !t.completed } : t
        )
      );

      return { previous };
    },

    onError: (_err, _todoId, context) => {
      // Rollback on failure
      if (context?.previous) {
        queryClient.setQueryData(['todos'], context.previous);
      }
      toast.error('Failed to update todo. Reverted.');
    },

    onSettled: () => {
      // Refetch to ensure server state is in sync
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });
}`,
    explanation:
      'Optimistic updates make the UI feel instant by updating the cache before the server responds. The pattern: (1) onMutate — cancel in-flight queries (to prevent them from overwriting our optimistic data), snapshot current state, apply optimistic change; (2) onError — restore snapshot; (3) onSettled — invalidate to refetch true server state regardless of success/failure. This is the canonical TanStack Query pattern. Without a library, you\'d manage this with useState + try/catch, but handling concurrent mutations and refetches correctly is error-prone. Key pitfall: if the user toggles the same todo twice quickly, both optimistic updates and rollbacks must compose correctly — TanStack Query handles this via the mutation queue.',
    references: [
      'https://tanstack.com/query/latest/docs/framework/react/guides/optimistic-updates',
    ],
    tags: ['optimistic-update', 'rollback', 'tanstack-query', 'mutation'],
    year: 2025,
  },
  {
    id: 'atp-009',
    topic: 'api-networking',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'Implement a rate limiter that allows at most N API calls per second. Additional calls should be queued and executed when a slot opens.',
    answer: `class RateLimiter {
  private queue: Array<{
    fn: () => Promise<unknown>;
    resolve: (v: unknown) => void;
    reject: (e: unknown) => void;
  }> = [];
  private activeCount = 0;
  private timestamps: number[] = [];

  constructor(
    private maxPerSecond: number
  ) {}

  async execute<T>(fn: () => Promise<T>): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      this.queue.push({
        fn: fn as () => Promise<unknown>,
        resolve: resolve as (v: unknown) => void,
        reject,
      });
      this.process();
    });
  }

  private process() {
    const now = Date.now();
    // Remove timestamps older than 1 second
    this.timestamps = this.timestamps.filter((t) => now - t < 1000);

    while (this.queue.length > 0 && this.timestamps.length < this.maxPerSecond) {
      const item = this.queue.shift()!;
      this.timestamps.push(now);
      this.activeCount++;

      item
        .fn()
        .then(item.resolve)
        .catch(item.reject)
        .finally(() => {
          this.activeCount--;
          this.process();
        });
    }

    // Schedule next check if queue still has items
    if (this.queue.length > 0) {
      const oldest = this.timestamps[0];
      const waitTime = 1000 - (now - oldest);
      setTimeout(() => this.process(), Math.max(waitTime, 50));
    }
  }
}

// Usage
const limiter = new RateLimiter(5); // 5 req/sec
const result = await limiter.execute(() => fetch('/api/data'));`,
    explanation:
      'The sliding window approach tracks timestamps of recent calls and only allows new ones when the window count is below the limit. Queued calls wait and auto-process when slots open. This is essential for: (1) Third-party APIs with rate limits (Google Maps, GitHub API); (2) Preventing self-DOS during batch operations; (3) Respecting 429 Too Many Requests responses. A token bucket algorithm is an alternative that allows bursts. Production libraries like bottleneck or p-limit handle edge cases like concurrency limits, priority queues, and cluster-wide rate limiting.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429',
    ],
    tags: ['rate-limiter', 'queue', 'throttle', 'api-protection'],
    year: 2025,
  },
  {
    id: 'atp-010',
    topic: 'api-networking',
    difficulty: 'senior',
    type: 'code-write',
    question:
      'Build a retry queue for failed operations that automatically retries when the user comes back online. Persist the queue in IndexedDB so it survives page refreshes.',
    answer: `class OfflineRetryQueue {
  private dbName = 'offline-queue';
  private storeName = 'pending-ops';

  private async openDB(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(this.dbName, 1);
      req.onupgradeneeded = () => {
        req.result.createObjectStore(this.storeName, { keyPath: 'id', autoIncrement: true });
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }

  async enqueue(operation: { url: string; method: string; body?: string; headers?: Record<string, string> }) {
    const db = await this.openDB();
    const tx = db.transaction(this.storeName, 'readwrite');
    tx.objectStore(this.storeName).add({
      ...operation,
      createdAt: Date.now(),
      retries: 0,
    });
    await new Promise((res, rej) => { tx.oncomplete = res; tx.onerror = rej; });
  }

  async processQueue() {
    const db = await this.openDB();
    const tx = db.transaction(this.storeName, 'readonly');
    const store = tx.objectStore(this.storeName);

    const items: Array<{ id: number; url: string; method: string; body?: string; headers?: Record<string, string>; retries: number }> = await new Promise((res) => {
      const req = store.getAll();
      req.onsuccess = () => res(req.result);
    });

    for (const item of items) {
      try {
        const response = await fetch(item.url, {
          method: item.method,
          body: item.body,
          headers: item.headers,
        });

        if (response.ok) {
          await this.remove(item.id);
        } else if (item.retries >= 5) {
          await this.remove(item.id); // Give up after 5 retries
        } else {
          await this.incrementRetry(item.id);
        }
      } catch {
        // Still offline or network error — leave in queue
        break; // Stop processing, will retry on next online event
      }
    }
  }

  private async remove(id: number) {
    const db = await this.openDB();
    const tx = db.transaction(this.storeName, 'readwrite');
    tx.objectStore(this.storeName).delete(id);
  }

  private async incrementRetry(id: number) {
    const db = await this.openDB();
    const tx = db.transaction(this.storeName, 'readwrite');
    const store = tx.objectStore(this.storeName);
    const req = store.get(id);
    req.onsuccess = () => {
      const item = req.result;
      item.retries++;
      store.put(item);
    };
  }

  listen() {
    window.addEventListener('online', () => this.processQueue());
    // Also try on init in case we're already online
    if (navigator.onLine) this.processQueue();
  }
}`,
    explanation:
      'This implements the offline-first pattern: failed mutations are serialized to IndexedDB (survives refresh/close) and automatically replayed when connectivity returns. The online event listener triggers processing. Key considerations: (1) Operations must be idempotent or carry an idempotency key so replay is safe; (2) Order matters — queue is FIFO; (3) Stale operations (created hours/days ago) may need TTL-based expiry; (4) Conflict resolution — the server may have changed since the operation was queued. Service Workers extend this pattern with Background Sync API for retries that work even after the page is closed.',
    references: [
      'https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API',
      'https://developer.mozilla.org/en-US/docs/Web/API/Background_Synchronization_API',
    ],
    tags: ['offline-first', 'indexeddb', 'retry-queue', 'pwa'],
    year: 2025,
  },
  {
    id: 'atp-011',
    topic: 'api-networking',
    difficulty: 'mid',
    type: 'mcq',
    question:
      'Your app uses fetch to call /api/data. The server responds with 304 Not Modified. What does the browser do?',
    options: [
      'Throws a network error because no body was returned',
      'Returns the cached response body with response.ok === true',
      'Returns an empty response with status 304 and response.ok === false',
      'Automatically retries the request without cache headers',
    ],
    answer: 1,
    explanation:
      'When the browser sends a conditional request (If-None-Match or If-Modified-Since) and the server returns 304, the browser transparently serves the cached response body to the fetch caller with a 200 status. The JavaScript code never sees the 304 — fetch abstracts it away. This is browser-level HTTP caching behavior. response.ok is true because the effective status is 200. This is different from response.redirected which exposes 3xx info. Note: this only applies when the browser\'s HTTP cache handles the conditional request; if you manually set cache: "no-store", no conditional request is made.',
    tags: ['http-caching', '304', 'fetch', 'conditional-request'],
    year: 2025,
  },
  {
    id: 'atp-012',
    topic: 'api-networking',
    difficulty: 'junior',
    type: 'mcq',
    question:
      'You need to send a PATCH request with JSON body using fetch. Which combination is correct?',
    options: [
      'fetch(url, { method: "PATCH", body: data })',
      'fetch(url, { method: "PATCH", body: JSON.stringify(data), headers: { "Content-Type": "application/json" } })',
      'fetch(url, { method: "PATCH", json: data })',
      'fetch(url, { method: "PATCH", body: data, type: "json" })',
    ],
    answer: 1,
    explanation:
      'fetch requires manual JSON serialization (JSON.stringify) and explicit Content-Type header. Unlike axios which auto-serializes objects and sets headers, fetch is low-level. Common mistake: passing an object as body without stringify — it sends "[object Object]" as the body string. The Content-Type header tells the server how to parse the body. Without it, many frameworks (Express, Rails) won\'t parse the JSON body and req.body will be undefined.',
    tags: ['fetch', 'json', 'content-type', 'http-methods'],
    year: 2025,
  },
  {
    id: 'atp-013',
    topic: 'api-networking',
    difficulty: 'lead',
    type: 'system-design',
    question:
      'You are designing a data layer for a large dashboard app with 50+ API endpoints, real-time updates, optimistic mutations, and offline support. Design the architecture.',
    answer:
      'Layered architecture: transport layer (fetch wrapper + interceptors), caching layer (TanStack Query), real-time layer (WebSocket event bus), persistence layer (IndexedDB), and sync engine for conflict resolution.',
    explanation:
      'Layer 1 — Transport: A fetch wrapper with interceptors for auth headers, error normalization, retry, and logging. All HTTP traffic flows through this single point. Layer 2 — Cache & State: TanStack Query manages server state with automatic deduplication, background refetching, and garbage collection. Query keys are organized hierarchically (["dashboard", "metrics", { period }]). Layer 3 — Real-time: WebSocket events map to query invalidations. When the server pushes "metric_updated", invalidate(["dashboard", "metrics"]) triggers a refetch of affected queries. For high-frequency data, directly update the cache via setQueryData. Layer 4 — Persistence: IndexedDB stores the query cache for instant page loads (persistQueryClient plugin). Failed mutations go to an offline queue (workbox Background Sync or custom). Layer 5 — Sync Engine: Last-write-wins for simple fields, CRDT-like merge for collaborative features. Conflict detection via ETags or vector clocks. Architecture principles: queries are declarative (components say what data they need, not how to fetch it), mutations are centralized (mutation factories), and all network I/O is observable for debugging (React Query Devtools + custom logging).',
    references: [
      'https://tanstack.com/query/latest/docs/framework/react/plugins/persistQueryClient',
      'https://developer.chrome.com/docs/workbox/modules/workbox-background-sync/',
    ],
    tags: ['architecture', 'data-layer', 'offline', 'real-time', 'caching'],
    year: 2025,
  },
  {
    id: 'atp-014',
    topic: 'api-networking',
    difficulty: 'junior',
    type: 'code-write',
    question:
      'Write a custom React hook that fetches data from an API, handles loading/error states, and cleans up if the component unmounts before the request completes.',
    answer: `function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
        const json = await res.json();
        setData(json);
      } catch (err) {
        if (err instanceof DOMException && err.name === 'AbortError') return;
        setError(err instanceof Error ? err : new Error(String(err)));
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    fetchData();
    return () => controller.abort();
  }, [url]);

  return { data, error, loading };
}`,
    explanation:
      'This hook demonstrates three essential patterns: (1) AbortController cancels the request on unmount, preventing the "setState on unmounted component" warning; (2) The AbortError check in catch distinguishes intentional cancellation from real errors; (3) The aborted check in finally prevents setting loading=false after abort. This is the foundation for understanding what TanStack Query and SWR do under the hood. Key limitation: no caching, no deduplication, no refetching — which is why production apps use libraries.',
    tags: ['custom-hook', 'fetch', 'abort-controller', 'cleanup'],
    year: 2025,
  },
  {
    id: 'atp-015',
    topic: 'api-networking',
    difficulty: 'junior',
    type: 'mcq',
    question:
      'A CORS preflight request fails. What HTTP method and header combination triggers a preflight in the first place?',
    options: [
      'Any GET request with credentials',
      'Any request with a custom header like Authorization or Content-Type: application/json',
      'Only POST requests with FormData',
      'Only requests to a different port on the same domain',
    ],
    answer: 1,
    explanation:
      'A preflight OPTIONS request is triggered when a cross-origin request is not "simple." Simple requests are: GET/HEAD/POST with only CORS-safelisted headers (Accept, Accept-Language, Content-Language, Content-Type limited to form-urlencoded/multipart/text-plain). Adding Authorization, a custom X-header, or Content-Type: application/json makes it non-simple, triggering preflight. The browser sends OPTIONS with Access-Control-Request-Method and Access-Control-Request-Headers. The server must respond with appropriate Access-Control-Allow-* headers. Common fix: ensure the backend handles OPTIONS requests and returns the right CORS headers.',
    tags: ['cors', 'preflight', 'http', 'cross-origin'],
    year: 2025,
  },

  // ─── testing (12 questions) ─────────────────────────────────────────────────

  {
    id: 'atp-016',
    topic: 'testing',
    difficulty: 'senior',
    type: 'system-design',
    question:
      'Your team has 0% test coverage on a React app with 200+ components. You need to build a testing strategy. What do you test first, and how do you prioritize?',
    answer:
      'Start with integration tests on critical user flows, then add unit tests for complex business logic, and end with E2E for happy paths. Prioritize by risk and user impact, not by code coverage percentage.',
    explanation:
      'Phase 1 (Week 1-2): Integration tests with Testing Library for the 5-10 most critical user flows (login, checkout, core CRUD). These give the highest confidence per test because they test real component interactions. Phase 2 (Week 3-4): Unit tests for pure business logic — calculations, data transformations, validators, custom hooks with complex state. These are fast and catch regression in tricky logic. Phase 3 (Ongoing): E2E tests with Playwright for the top 3 user journeys. These catch integration issues between frontend and backend. Anti-patterns to avoid: testing implementation details (enzyme shallow render), chasing 100% coverage on simple components, testing library code. Set a pragmatic coverage target (70-80%) and enforce it only on new code via CI. Use mutation testing (Stryker) to measure test quality, not just coverage. Add tests alongside every bug fix (regression test) to prevent recurrence.',
    references: [
      'https://testing-library.com/docs/guiding-principles',
      'https://kentcdodds.com/blog/write-tests',
    ],
    tags: ['testing-strategy', 'coverage', 'prioritization', 'integration-tests'],
    year: 2025,
  },
  {
    id: 'atp-017',
    topic: 'testing',
    difficulty: 'senior',
    type: 'system-design',
    question:
      'Tests pass locally but are flaky in CI (fail 20% of runs). How do you diagnose and fix flaky tests?',
    answer:
      'Diagnose with retry detection, timing analysis, and environment diffs. Fix by removing time-dependence, adding proper waitFor, and isolating shared state.',
    explanation:
      'Diagnosis steps: (1) Run flaky tests in a loop locally (repeat 50x with --bail) to reproduce. If they pass locally, the CI environment is the variable. (2) Check timing: CI machines are slower — race conditions and timeouts manifest more. Add --detectOpenHandles in Jest to find unresolved promises. (3) Check isolation: tests sharing global state (localStorage, module-level variables, mocked singletons) fail when run order changes. Use --runInBand to confirm. (4) Check for time-dependent tests: Date.now(), setTimeout, animations. Common fixes: (a) Replace setTimeout with vi.useFakeTimers and advance explicitly. (b) Use waitFor/findBy instead of getBy for async content. (c) Reset all mocks/stubs in afterEach. (d) Use unique test data (random IDs) instead of hardcoded values that collide. (e) Set a generous but finite timeout for async assertions. (f) Use Playwright\'s auto-waiting instead of manual sleeps in E2E. Prevention: quarantine flaky tests into a separate CI job, fix within 48 hours or delete.',
    references: [
      'https://playwright.dev/docs/best-practices',
      'https://testing-library.com/docs/dom-testing-library/api-async',
    ],
    tags: ['flaky-tests', 'ci', 'debugging', 'test-isolation'],
    year: 2025,
  },
  {
    id: 'atp-018',
    topic: 'testing',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'Write a test for a component that uses setTimeout to show a "Session expiring" warning after 5 minutes of inactivity. The test should not actually wait 5 minutes.',
    answer: `import { render, screen, act } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';
import { SessionWarning } from './SessionWarning';

describe('SessionWarning', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('shows warning after 5 minutes of inactivity', () => {
    render(<SessionWarning timeout={5 * 60 * 1000} />);

    // Warning should not be visible initially
    expect(screen.queryByText('Session expiring')).not.toBeInTheDocument();

    // Fast-forward 4 minutes — still no warning
    act(() => {
      vi.advanceTimersByTime(4 * 60 * 1000);
    });
    expect(screen.queryByText('Session expiring')).not.toBeInTheDocument();

    // Fast-forward to 5 minutes — warning appears
    act(() => {
      vi.advanceTimersByTime(1 * 60 * 1000);
    });
    expect(screen.getByText('Session expiring')).toBeInTheDocument();
  });

  it('resets timer on user activity', () => {
    render(<SessionWarning timeout={5 * 60 * 1000} />);

    // Advance 4 minutes
    act(() => {
      vi.advanceTimersByTime(4 * 60 * 1000);
    });

    // Simulate user activity
    act(() => {
      window.dispatchEvent(new MouseEvent('mousemove'));
    });

    // Advance another 4 minutes — timer was reset, so no warning yet
    act(() => {
      vi.advanceTimersByTime(4 * 60 * 1000);
    });
    expect(screen.queryByText('Session expiring')).not.toBeInTheDocument();

    // Advance 1 more minute (5 total since reset) — warning appears
    act(() => {
      vi.advanceTimersByTime(1 * 60 * 1000);
    });
    expect(screen.getByText('Session expiring')).toBeInTheDocument();
  });
});`,
    explanation:
      'vi.useFakeTimers() replaces setTimeout/setInterval/Date with controllable fakes. vi.advanceTimersByTime(ms) synchronously fires all timers that would have triggered in that timespan. act() is required because advancing timers causes state updates. This pattern avoids real waits, making the test run in milliseconds instead of 5 minutes. Key: always restore real timers in afterEach to prevent interference with other tests. The test also verifies timer reset behavior — critical for session management features.',
    references: [
      'https://vitest.dev/api/vi.html#vi-usefaketimers',
      'https://testing-library.com/docs/dom-testing-library/api-async',
    ],
    tags: ['fake-timers', 'vitest', 'act', 'session-management'],
    year: 2025,
  },
  {
    id: 'atp-019',
    topic: 'testing',
    difficulty: 'lead',
    type: 'system-design',
    question:
      'When should you mock API calls in tests vs use a real (or local) API server? What are the tradeoffs?',
    answer:
      'Mock for unit/integration tests (speed, isolation, edge cases). Real API for E2E tests (confidence, contract verification). Use MSW as a middle ground.',
    explanation:
      'Mock (vi.mock, jest.mock, MSW): Pros — fast, deterministic, can simulate errors/edge cases (500s, timeouts, slow responses), no server dependency, works offline. Cons — mocks can drift from real API (false confidence), doesn\'t catch serialization bugs, easy to over-mock. Best for: unit tests, component tests, testing error states. Real/Local API: Pros — tests actual integration, catches contract mismatches, tests serialization, headers, CORS. Cons — slow, flaky (network/server issues), hard to test edge cases, requires server setup. Best for: E2E tests, contract tests. Middle ground — MSW (Mock Service Worker): Intercepts at the network level so fetch/axios code runs for real, but responses are mocked. Catches more integration issues than vi.mock while remaining fast and deterministic. Can reuse handlers between tests and Storybook. Recommendation: MSW for component/integration tests, real API only in E2E, and vi.mock only for non-HTTP dependencies.',
    references: [
      'https://mswjs.io/docs/',
      'https://testing-library.com/docs/react-testing-library/example-intro',
    ],
    tags: ['mocking', 'msw', 'integration-testing', 'e2e'],
    year: 2025,
  },
  {
    id: 'atp-020',
    topic: 'testing',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'Write a test for a custom hook useDebounce(value, delay) that returns the debounced value after the delay.',
    answer: `import { renderHook, act } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';
import { useDebounce } from './useDebounce';

describe('useDebounce', () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it('returns initial value immediately', () => {
    const { result } = renderHook(() => useDebounce('hello', 500));
    expect(result.current).toBe('hello');
  });

  it('does not update value before delay', () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      { initialProps: { value: 'hello', delay: 500 } }
    );

    rerender({ value: 'world', delay: 500 });

    act(() => {
      vi.advanceTimersByTime(400);
    });

    expect(result.current).toBe('hello'); // Not updated yet
  });

  it('updates value after delay', () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      { initialProps: { value: 'hello', delay: 500 } }
    );

    rerender({ value: 'world', delay: 500 });

    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(result.current).toBe('world');
  });

  it('resets timer on rapid changes, only last value applied', () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      { initialProps: { value: 'a', delay: 300 } }
    );

    rerender({ value: 'b', delay: 300 });
    act(() => vi.advanceTimersByTime(200));

    rerender({ value: 'c', delay: 300 });
    act(() => vi.advanceTimersByTime(200));

    expect(result.current).toBe('a'); // Still original

    act(() => vi.advanceTimersByTime(100));

    expect(result.current).toBe('c'); // Last value applied
  });
});`,
    explanation:
      'Testing custom hooks uses renderHook from @testing-library/react. Key pattern: rerender with new props simulates the parent component re-rendering with updated values. Fake timers let us verify that the debounce delay is respected precisely. The rapid-change test is critical — it proves that intermediate values are discarded and only the final value is applied after the delay resets. This is how you test timing-sensitive hooks without real waits.',
    references: [
      'https://testing-library.com/docs/react-testing-library/api#renderhook',
    ],
    tags: ['custom-hook', 'debounce', 'renderHook', 'fake-timers'],
    year: 2025,
  },
  {
    id: 'atp-021',
    topic: 'testing',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'Write MSW handlers and a test for a component that fetches user data and displays it. Test both success and error states.',
    answer: `// handlers.ts
import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/user/:id', ({ params }) => {
    if (params.id === '404') {
      return HttpResponse.json(
        { message: 'User not found' },
        { status: 404 }
      );
    }
    return HttpResponse.json({
      id: params.id,
      name: 'Jane Doe',
      email: 'jane@example.com',
    });
  }),
];

// UserProfile.test.tsx
import { render, screen } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';
import { handlers } from './handlers';
import { UserProfile } from './UserProfile';

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('UserProfile', () => {
  it('renders user data on success', async () => {
    render(<UserProfile userId="1" />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();

    expect(await screen.findByText('Jane Doe')).toBeInTheDocument();
    expect(screen.getByText('jane@example.com')).toBeInTheDocument();
  });

  it('shows error message on 404', async () => {
    render(<UserProfile userId="404" />);

    expect(await screen.findByText(/user not found/i)).toBeInTheDocument();
  });

  it('shows error on network failure', async () => {
    server.use(
      http.get('/api/user/:id', () => {
        return HttpResponse.error();
      })
    );

    render(<UserProfile userId="1" />);

    expect(await screen.findByText(/something went wrong/i)).toBeInTheDocument();
  });
});`,
    explanation:
      'MSW intercepts requests at the network level, so fetch/axios runs unmodified. setupServer creates a test server that uses the provided handlers. server.use() in individual tests overrides handlers for that test only, allowing per-test error simulation. server.resetHandlers() in afterEach restores defaults. findByText is used instead of getByText because the data appears asynchronously after the fetch resolves — findBy retries with a timeout. This pattern tests the component as users experience it: mounting, seeing loading state, then seeing data or errors.',
    references: [
      'https://mswjs.io/docs/getting-started',
      'https://testing-library.com/docs/queries/about#types-of-queries',
    ],
    tags: ['msw', 'integration-test', 'testing-library', 'async'],
    year: 2025,
  },
  {
    id: 'atp-022',
    topic: 'testing',
    difficulty: 'junior',
    type: 'mcq',
    question:
      'In React Testing Library, what is the difference between getByText, queryByText, and findByText?',
    options: [
      'They are aliases — all do the same thing',
      'getBy throws if not found, queryBy returns null, findBy waits and retries asynchronously',
      'getBy is for text, queryBy is for attributes, findBy is for roles',
      'getBy searches children only, queryBy searches the entire DOM, findBy searches shadow DOM',
    ],
    answer: 1,
    explanation:
      'getBy* throws immediately if no match — use when the element must exist right now. queryBy* returns null instead of throwing — use when asserting something does NOT exist (expect(queryByText("Error")).not.toBeInTheDocument()). findBy* returns a promise that retries until the element appears or times out (default 1000ms) — use for elements that appear after async operations (API calls, state updates). Choosing the wrong variant is a top source of bugs in tests: using getBy for async content causes false failures; using findBy for absent elements causes slow timeouts.',
    tags: ['testing-library', 'queries', 'async-testing', 'fundamentals'],
    year: 2025,
  },
  {
    id: 'atp-023',
    topic: 'testing',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'Write a test for a component that uses setInterval to update a countdown timer every second. Verify it counts down from 10 to 0 and shows "Time\'s up!" at zero.',
    answer: `import { render, screen, act } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';
import { Countdown } from './Countdown';

describe('Countdown', () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it('counts down from 10 and shows expiry message', () => {
    render(<Countdown seconds={10} />);

    expect(screen.getByText('10')).toBeInTheDocument();

    // Advance 1 second
    act(() => vi.advanceTimersByTime(1000));
    expect(screen.getByText('9')).toBeInTheDocument();

    // Advance to 5 seconds remaining
    act(() => vi.advanceTimersByTime(4000));
    expect(screen.getByText('5')).toBeInTheDocument();

    // Advance to 0
    act(() => vi.advanceTimersByTime(5000));
    expect(screen.getByText("Time's up!")).toBeInTheDocument();

    // Verify interval is cleared (no further updates)
    act(() => vi.advanceTimersByTime(5000));
    expect(screen.getByText("Time's up!")).toBeInTheDocument();
  });

  it('cleans up interval on unmount', () => {
    const clearIntervalSpy = vi.spyOn(global, 'clearInterval');
    const { unmount } = render(<Countdown seconds={10} />);

    unmount();

    expect(clearIntervalSpy).toHaveBeenCalled();
    clearIntervalSpy.mockRestore();
  });
});`,
    explanation:
      'setInterval-based components need fake timers for reliable testing. Each act(() => vi.advanceTimersByTime(ms)) fires all intervals that would trigger in that period, causing state updates within the act boundary. The cleanup test verifies the component clears its interval on unmount — a common memory leak. The final advance after reaching 0 confirms the interval stops, not just that the display is correct. Without fake timers, this test would take 10 real seconds and be flaky due to timing precision.',
    tags: ['setInterval', 'countdown', 'fake-timers', 'cleanup'],
    year: 2025,
  },
  {
    id: 'atp-024',
    topic: 'testing',
    difficulty: 'senior',
    type: 'code-write',
    question:
      'Write a Playwright E2E test for a login flow: enter email, enter password, submit, verify redirect to dashboard, and verify the user\'s name appears in the header.',
    answer: `import { test, expect } from '@playwright/test';

test.describe('Login flow', () => {
  test('successful login redirects to dashboard with user name', async ({ page }) => {
    await page.goto('/login');

    // Fill in credentials
    await page.getByLabel('Email').fill('jane@example.com');
    await page.getByLabel('Password').fill('securepassword123');

    // Submit the form
    await page.getByRole('button', { name: 'Sign in' }).click();

    // Verify redirect
    await expect(page).toHaveURL('/dashboard');

    // Verify user name in header
    await expect(
      page.getByRole('banner').getByText('Jane Doe')
    ).toBeVisible();
  });

  test('shows error for invalid credentials', async ({ page }) => {
    await page.goto('/login');

    await page.getByLabel('Email').fill('wrong@example.com');
    await page.getByLabel('Password').fill('wrongpassword');
    await page.getByRole('button', { name: 'Sign in' }).click();

    // Should stay on login page
    await expect(page).toHaveURL('/login');

    // Should show error
    await expect(
      page.getByRole('alert').getByText(/invalid credentials/i)
    ).toBeVisible();
  });

  test('shows validation errors for empty fields', async ({ page }) => {
    await page.goto('/login');

    await page.getByRole('button', { name: 'Sign in' }).click();

    await expect(page.getByText(/email is required/i)).toBeVisible();
    await expect(page.getByText(/password is required/i)).toBeVisible();
  });
});`,
    explanation:
      'Playwright tests use accessible selectors (getByLabel, getByRole) which are resilient to CSS/class name changes and enforce accessibility. Key features: auto-waiting (fill and click wait for elements to be actionable), web-first assertions (toHaveURL and toBeVisible retry automatically), and isolation (each test gets a fresh browser context). The test covers three scenarios: happy path, server error, and client validation. Use page.getByRole("banner") to scope to the header element. Avoid CSS selectors and data-testid when accessible selectors work — they test real user experience.',
    references: [
      'https://playwright.dev/docs/locators',
      'https://playwright.dev/docs/best-practices',
    ],
    tags: ['playwright', 'e2e', 'login', 'accessible-selectors'],
    year: 2025,
  },
  {
    id: 'atp-025',
    topic: 'testing',
    difficulty: 'mid',
    type: 'mcq',
    question:
      'You want to test that a component does NOT make an API call when a certain prop is false. Which approach is most reliable?',
    options: [
      'Check that the loading spinner never appears using getByText',
      'Mock fetch with vi.fn(), render with prop=false, and assert fetch was not called',
      'Use a setTimeout to wait 2 seconds and then check no data rendered',
      'Check the network tab in browser DevTools',
    ],
    answer: 1,
    explanation:
      'Mocking fetch with vi.fn() and asserting toHaveBeenCalledTimes(0) is the most direct and reliable way to verify a call was NOT made. Checking UI (loading spinner absence) is indirect — the spinner might not exist for other reasons. setTimeout is flaky and slow. DevTools is manual, not automatable. The mock approach is deterministic and fast. Use vi.spyOn(global, "fetch") to spy without replacing the implementation if you want the call to still work but be tracked.',
    tags: ['mocking', 'negative-testing', 'vitest', 'spy'],
    year: 2025,
  },
  {
    id: 'atp-026',
    topic: 'testing',
    difficulty: 'lead',
    type: 'system-design',
    question:
      'You are introducing visual regression testing to a design system with 200+ components. What tools and strategy do you use? How do you handle false positives?',
    answer:
      'Use Chromatic or Percy with Storybook stories as test cases. Manage false positives with threshold settings, component-level baselines, and approval workflows.',
    explanation:
      'Strategy: (1) Write a Storybook story for each component variant (default, hover, active, disabled, error, loading, various sizes, RTL). These stories double as visual tests. (2) Use Chromatic (built for Storybook) or Percy to snapshot every story on each PR. They compare against baselines and flag visual diffs. (3) False positive management: Set a diff threshold (0.1-0.5% pixel difference tolerance) to ignore anti-aliasing and sub-pixel rendering differences across CI environments. Use consistent viewport sizes. Pin browser versions. For animations, either disable them in test mode (prefers-reduced-motion) or capture at a fixed frame. (4) Approval workflow: designate component owners who review and approve visual changes. Approved changes become the new baseline. (5) Run on component library PRs only (not every app PR) to keep CI fast. (6) Complement with accessibility snapshots (axe-core) alongside visual ones. Cost consideration: Chromatic/Percy charge per snapshot — prioritize components that change frequently and have complex visual states.',
    references: [
      'https://www.chromatic.com/docs/',
      'https://storybook.js.org/docs/writing-tests/visual-testing',
    ],
    tags: ['visual-regression', 'chromatic', 'storybook', 'design-system'],
    year: 2025,
  },
  {
    id: 'atp-027',
    topic: 'testing',
    difficulty: 'junior',
    type: 'code-write',
    question:
      'Write a unit test for a pure function that validates an email address. Test valid emails, invalid emails, and edge cases.',
    answer: `import { describe, it, expect } from 'vitest';
import { isValidEmail } from './validators';

describe('isValidEmail', () => {
  it.each([
    'user@example.com',
    'user.name@example.com',
    'user+tag@example.co.uk',
    'user@subdomain.example.com',
  ])('returns true for valid email: %s', (email) => {
    expect(isValidEmail(email)).toBe(true);
  });

  it.each([
    '',
    'not-an-email',
    '@no-local.com',
    'no-domain@',
    'no-domain@.com',
    'spaces in@email.com',
    'user@com',
    'user@@double.com',
  ])('returns false for invalid email: %s', (email) => {
    expect(isValidEmail(email)).toBe(false);
  });

  it('handles null and undefined gracefully', () => {
    expect(isValidEmail(null as unknown as string)).toBe(false);
    expect(isValidEmail(undefined as unknown as string)).toBe(false);
  });

  it('trims whitespace before validation', () => {
    expect(isValidEmail('  user@example.com  ')).toBe(true);
  });
});`,
    explanation:
      'it.each (also called test.each) is the parameterized testing pattern — it runs the same assertion against multiple inputs, reducing boilerplate while keeping failure messages specific (%s interpolates the value). Testing a pure function is the simplest form of unit testing: no mocking, no DOM, no async. The edge cases (null, undefined, whitespace) catch runtime errors that TypeScript types alone don\'t prevent at boundaries (form inputs, API responses). Keep validators as pure functions for easy testability.',
    tags: ['unit-test', 'validation', 'parameterized-test', 'pure-function'],
    year: 2025,
  },

  // ─── security (8 questions) ─────────────────────────────────────────────────

  {
    id: 'atp-028',
    topic: 'security',
    difficulty: 'senior',
    type: 'system-design',
    question:
      'An XSS vulnerability was found in your React app. How do you find all instances, fix them, and prevent future occurrences?',
    answer:
      'Audit dangerouslySetInnerHTML, URL injections, and third-party scripts. Fix with sanitization, CSP headers, and linting rules. Prevent with automated scanning in CI.',
    explanation:
      'Finding: (1) Search for dangerouslySetInnerHTML — each instance needs audit. (2) Search for href={userInput} and src={userInput} — javascript: protocol injection. (3) Search for eval(), new Function(), document.write(). (4) Check third-party scripts loaded dynamically. (5) Run automated scanner (Snyk, SonarQube, or eslint-plugin-security). Fixing: (1) Replace dangerouslySetInnerHTML with a sanitizer (DOMPurify.sanitize(html)). (2) Validate URLs: new URL(input) and check protocol is http/https. (3) Encode output for the context (HTML entities for HTML, encodeURIComponent for URLs). Prevention: (1) Add Content-Security-Policy headers (no inline scripts, restrict sources). (2) Add ESLint rules: no-dangerously-set-innerhtml (or require a DOMPurify wrapper), no-eval. (3) Add automated SAST scanning in CI pipeline. (4) Use React\'s built-in JSX escaping — it auto-escapes strings in {curly braces}. (5) Set HttpOnly, Secure, SameSite on cookies. (6) Security headers: X-Content-Type-Options: nosniff, X-Frame-Options: DENY.',
    references: [
      'https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html',
      'https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP',
    ],
    tags: ['xss', 'security-audit', 'csp', 'dompurify'],
    year: 2025,
  },
  {
    id: 'atp-029',
    topic: 'security',
    difficulty: 'senior',
    type: 'code-write',
    question:
      'JWT access token expires while the user is filling out a long form. Implement a token refresh mechanism that doesn\'t lose the form data or interrupt the user.',
    answer: `let isRefreshing = false;
let refreshSubscribers: Array<(token: string) => void> = [];

function subscribeTokenRefresh(cb: (token: string) => void) {
  refreshSubscribers.push(cb);
}

function onTokenRefreshed(newToken: string) {
  refreshSubscribers.forEach((cb) => cb(newToken));
  refreshSubscribers = [];
}

async function refreshAccessToken(): Promise<string> {
  const response = await fetch('/api/auth/refresh', {
    method: 'POST',
    credentials: 'include', // sends httpOnly refresh token cookie
  });

  if (!response.ok) {
    // Refresh token also expired — redirect to login
    // Save form data to sessionStorage before redirecting
    throw new Error('REFRESH_FAILED');
  }

  const { accessToken } = await response.json();
  localStorage.setItem('accessToken', accessToken);
  return accessToken;
}

// Axios interceptor (works similarly with fetch wrapper)
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      if (isRefreshing) {
        // Another request is already refreshing — wait for it
        return new Promise((resolve) => {
          subscribeTokenRefresh((newToken) => {
            originalRequest.headers.Authorization = \`Bearer \${newToken}\`;
            resolve(api(originalRequest));
          });
        });
      }

      isRefreshing = true;

      try {
        const newToken = await refreshAccessToken();
        isRefreshing = false;
        onTokenRefreshed(newToken);

        originalRequest.headers.Authorization = \`Bearer \${newToken}\`;
        return api(originalRequest);
      } catch (err) {
        isRefreshing = false;
        // Save current form state before redirect
        sessionStorage.setItem('pendingFormData', JSON.stringify(getCurrentFormData()));
        window.location.href = '/login?reason=session_expired&returnTo=' + encodeURIComponent(window.location.pathname);
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);`,
    explanation:
      'This implements the "token refresh queue" pattern. When a 401 is received: (1) If no refresh is in progress, initiate one and queue subsequent 401s. (2) If a refresh is already in progress, subscribe to completion. (3) On success, replay all queued requests with the new token transparently. The user never knows the token expired. Key for forms: if even the refresh token is expired, save form data to sessionStorage before redirecting to login. On the login page, detect the returnTo param and pendingFormData, and restore after re-auth. The refresh token should be in an httpOnly cookie (not localStorage) for security — JavaScript can\'t read it, but it\'s sent automatically with credentials: include.',
    references: [
      'https://auth0.com/blog/refresh-tokens-what-are-they-and-when-to-use-them/',
    ],
    tags: ['jwt', 'token-refresh', 'interceptor', 'session-management'],
    year: 2025,
  },
  {
    id: 'atp-030',
    topic: 'security',
    difficulty: 'mid',
    type: 'debug',
    question:
      'This code renders user-generated HTML content. Find and fix the XSS vulnerability.',
    code: `function UserComment({ comment }: { comment: { author: string; html: string } }) {
  return (
    <div className="comment">
      <h3>{comment.author}</h3>
      <div dangerouslySetInnerHTML={{ __html: comment.html }} />
      <a href={comment.author}>Profile</a>
    </div>
  );
}`,
    answer: `import DOMPurify from 'dompurify';

function sanitizeUrl(url: string): string {
  try {
    const parsed = new URL(url, window.location.origin);
    if (!['http:', 'https:'].includes(parsed.protocol)) return '#';
    return parsed.href;
  } catch {
    return '#';
  }
}

function UserComment({ comment }: { comment: { author: string; html: string } }) {
  return (
    <div className="comment">
      <h3>{comment.author}</h3>
      <div
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(comment.html),
        }}
      />
      <a href={sanitizeUrl(comment.profileUrl)}>Profile</a>
    </div>
  );
}`,
    explanation:
      'Two vulnerabilities: (1) dangerouslySetInnerHTML renders raw HTML which can contain <script>, <img onerror=>, or <a href="javascript:"> — DOMPurify strips all dangerous tags and attributes while preserving safe formatting. (2) The href uses comment.author directly, which could be "javascript:alert(1)" — the sanitizeUrl function validates it\'s a safe http/https URL. The author name in {curly braces} is safe because React auto-escapes strings in JSX. Always sanitize: HTML content with DOMPurify, URLs with protocol validation, and consider Content-Security-Policy as defense in depth.',
    references: [
      'https://github.com/cure53/DOMPurify',
      'https://owasp.org/www-community/attacks/xss/',
    ],
    tags: ['xss', 'dompurify', 'sanitization', 'debug'],
    year: 2025,
  },
  {
    id: 'atp-031',
    topic: 'security',
    difficulty: 'mid',
    type: 'mcq',
    question:
      'Where should you store JWT access tokens in a browser-based SPA for maximum security?',
    options: [
      'localStorage — persists across tabs and sessions',
      'sessionStorage — cleared when the tab closes',
      'In-memory variable (JS closure) with httpOnly refresh token cookie for re-auth',
      'In a cookie with SameSite=None to allow cross-site requests',
    ],
    answer: 2,
    explanation:
      'In-memory storage (a JavaScript variable/closure) is the most secure for access tokens because it\'s not accessible via XSS document.cookie or storage APIs, and it\'s cleared on page close. The tradeoff: tokens don\'t survive page refresh. Solution: pair with an httpOnly, Secure, SameSite=Strict refresh token cookie. On page load, call /api/auth/refresh to get a new access token into memory. localStorage is vulnerable to XSS (any injected script can read it). sessionStorage is slightly better but still XSS-readable. Cookies with SameSite=None are vulnerable to CSRF. The in-memory + httpOnly cookie pattern provides the best balance of security and usability.',
    tags: ['jwt', 'token-storage', 'xss', 'httponly'],
    year: 2025,
  },
  {
    id: 'atp-032',
    topic: 'security',
    difficulty: 'senior',
    type: 'code-write',
    question:
      'Implement a Content Security Policy (CSP) configuration for a Next.js app that allows your own scripts, styles, images, and Google Analytics — but blocks everything else.',
    answer: `// next.config.js
const cspHeader = \`
  default-src 'self';
  script-src 'self' 'nonce-{NONCE}' https://www.googletagmanager.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' https://www.google-analytics.com data:;
  font-src 'self';
  connect-src 'self' https://www.google-analytics.com https://analytics.google.com;
  frame-src 'none';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
\`.replace(/\\n/g, '');

// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import crypto from 'crypto';

export function middleware(request: NextRequest) {
  const nonce = crypto.randomBytes(16).toString('base64');
  const csp = cspHeader.replace(/{NONCE}/g, nonce);

  const response = NextResponse.next();

  response.headers.set('Content-Security-Policy', csp);
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

  // Pass nonce to the page for inline scripts
  request.headers.set('x-nonce', nonce);

  return response;
}`,
    explanation:
      'CSP is the most effective defense against XSS. Each directive restricts a resource type: script-src controls JavaScript sources, style-src controls CSS, etc. default-src \'self\' blocks everything not explicitly allowed. Nonce-based script allowlisting is more secure than \'unsafe-inline\' — each page load generates a unique nonce that inline scripts must match. Google Analytics requires its domains in script-src and connect-src. object-src \'none\' and frame-ancestors \'none\' prevent plugin and clickjacking attacks. The middleware approach in Next.js sets headers on every response. Additional headers (X-Content-Type-Options, Permissions-Policy) add layers of defense. Test CSP with report-uri or report-to directive before enforcing, to catch violations without breaking the site.',
    references: [
      'https://nextjs.org/docs/app/building-your-application/configuring/content-security-policy',
      'https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP',
    ],
    tags: ['csp', 'security-headers', 'nextjs', 'xss-prevention'],
    year: 2025,
  },
  {
    id: 'atp-033',
    topic: 'security',
    difficulty: 'mid',
    type: 'mcq',
    question:
      'Your React app submits a form to a different subdomain (app.example.com -> api.example.com). The POST request fails with a CORS error. What is the minimum server configuration needed?',
    options: [
      'Access-Control-Allow-Origin: * with credentials',
      'Access-Control-Allow-Origin: https://app.example.com, Access-Control-Allow-Methods: POST, Access-Control-Allow-Headers: Content-Type',
      'Set SameSite=None on all cookies and it works without CORS headers',
      'Just use JSONP instead of fetch for cross-origin requests',
    ],
    answer: 1,
    explanation:
      'The server at api.example.com must respond with: (1) Access-Control-Allow-Origin set to the exact origin (wildcard * does NOT work with credentials); (2) Access-Control-Allow-Methods listing POST; (3) Access-Control-Allow-Headers listing Content-Type (and any custom headers like Authorization). For credentialed requests (cookies), also set Access-Control-Allow-Credentials: true. The browser sends a preflight OPTIONS request first because POST with Content-Type: application/json is not a "simple" request. The server must handle OPTIONS and return these headers. JSONP is a legacy hack that only supports GET and is a security risk. SameSite controls cookies, not CORS.',
    tags: ['cors', 'cross-origin', 'http-headers', 'subdomain'],
    year: 2025,
  },
  {
    id: 'atp-034',
    topic: 'security',
    difficulty: 'lead',
    type: 'system-design',
    question:
      'You are architecting authentication for a large SPA with multiple subdomains, SSR pages, and mobile web. Design the auth flow covering token storage, refresh, CSRF protection, and session management.',
    answer:
      'Use httpOnly cookie for refresh token (shared across subdomains), in-memory access token, BFF pattern for SSR, and double-submit cookie for CSRF.',
    explanation:
      'Architecture: (1) Login: POST /api/auth/login returns access token in response body (stored in memory) and sets refresh token as httpOnly, Secure, SameSite=Strict, Domain=.example.com cookie (shared across subdomains). (2) API calls: Access token sent via Authorization header. Short expiry (5-15 min). (3) Refresh: When access token expires or on page load, POST /api/auth/refresh (cookie sent automatically) returns new access token to memory. (4) SSR (Next.js): Use BFF (Backend For Frontend) pattern — the Next.js server reads the httpOnly cookie directly (server-side), calls APIs, and renders. No token exposed to client JS during SSR. (5) CSRF: Double-submit pattern — set a non-httpOnly CSRF cookie, read it in JS, send as X-CSRF-Token header. Server compares header to cookie. SameSite=Strict on the refresh cookie provides additional CSRF protection. (6) Logout: Server invalidates refresh token, client clears memory, set cookie Max-Age=0. (7) Session management: Redis-backed token denylist for immediate revocation. Rate-limit /api/auth/refresh to prevent abuse. (8) Mobile web: Same flow works. Consider shorter refresh token lifetime on public devices.',
    references: [
      'https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html',
      'https://datatracker.ietf.org/doc/html/rfc6749',
    ],
    tags: ['authentication', 'jwt', 'csrf', 'bff', 'session-management'],
    year: 2025,
  },
  {
    id: 'atp-035',
    topic: 'security',
    difficulty: 'senior',
    type: 'debug',
    question:
      'This API call leaks sensitive data. Find the security issues and fix them.',
    code: `async function loadUserProfile() {
  const token = localStorage.getItem('authToken');

  const response = await fetch(
    \`https://api.example.com/user?token=\${token}\`,
    {
      method: 'GET',
      headers: {
        'X-Debug': 'true',
      },
    }
  );

  const data = await response.json();
  console.log('User data:', data);

  // Cache in global for other components
  window.__userData = data;
  return data;
}`,
    answer: `async function loadUserProfile(): Promise<UserProfile> {
  const response = await fetch('https://api.example.com/user', {
    method: 'GET',
    headers: {
      Authorization: \`Bearer \${getAccessToken()}\`, // from memory, not localStorage
    },
    credentials: 'include',
  });

  if (!response.ok) throw new Error('Failed to load profile');

  const data: UserProfile = await response.json();
  return data;
}`,
    explanation:
      'Five security issues fixed: (1) Token in URL query parameter — visible in server logs, browser history, referrer headers, and proxy logs. Move to Authorization header. (2) Token in localStorage — accessible to any XSS attack. Use in-memory storage with httpOnly refresh cookie. (3) X-Debug header in production — exposes internal debug info to attackers. Remove. (4) console.log of user data — leaks PII to anyone who opens DevTools (shared computers, screenshots). Remove. (5) window.__userData — attaches sensitive data to the global object, accessible to any script (including third-party analytics). Use proper state management (context, store) instead. Additional fix: add error handling and type the response.',
    references: [
      'https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html',
    ],
    tags: ['api-security', 'token-leakage', 'debug', 'best-practices'],
    year: 2025,
  },

  // ─── coding-challenges (5 questions) ────────────────────────────────────────

  {
    id: 'atp-036',
    topic: 'coding-challenges',
    difficulty: 'senior',
    type: 'code-write',
    question:
      'Implement a request deduplication function. If the same URL is requested while a previous request is still in-flight, return the same promise instead of making a second network call.',
    answer: `const inFlightRequests = new Map<string, Promise<unknown>>();

async function deduplicatedFetch<T>(url: string, options?: RequestInit): Promise<T> {
  const key = \`\${options?.method ?? 'GET'}:\${url}\`;

  if (inFlightRequests.has(key)) {
    return inFlightRequests.get(key) as Promise<T>;
  }

  const request = fetch(url, options)
    .then(async (res) => {
      if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
      return res.json() as Promise<T>;
    })
    .finally(() => {
      inFlightRequests.delete(key);
    });

  inFlightRequests.set(key, request);
  return request;
}

// Usage — both calls share one network request
const [user1, user2] = await Promise.all([
  deduplicatedFetch<User>('/api/user/1'),
  deduplicatedFetch<User>('/api/user/1'),
]);`,
    explanation:
      'The Map stores in-flight promises keyed by method+URL. If a matching request exists, the existing promise is returned — no new fetch is made. The finally block removes the entry when the request completes (success or failure), allowing future calls to make fresh requests. This is the exact pattern used internally by TanStack Query, SWR, and Apollo Client. Key nuance: the key must include everything that affects the response (method, URL, body hash for POST). For GET requests, URL alone is sufficient. The promise is shared by reference, so all callers resolve/reject together.',
    tags: ['deduplication', 'promise', 'map', 'fetch-optimization'],
    year: 2025,
  },
  {
    id: 'atp-037',
    topic: 'coding-challenges',
    difficulty: 'senior',
    type: 'code-write',
    question:
      'Implement a Promise.allSettled polyfill that works the same as the native version — resolves when all promises settle (fulfill or reject), returning an array of result objects.',
    answer: `function allSettled<T>(
  promises: Array<Promise<T>>
): Promise<Array<{ status: 'fulfilled'; value: T } | { status: 'rejected'; reason: unknown }>> {
  return new Promise((resolve) => {
    if (promises.length === 0) {
      resolve([]);
      return;
    }

    const results: Array<{ status: 'fulfilled'; value: T } | { status: 'rejected'; reason: unknown }> = new Array(promises.length);
    let settledCount = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = { status: 'fulfilled', value };
        })
        .catch((reason) => {
          results[index] = { status: 'rejected', reason };
        })
        .finally(() => {
          settledCount++;
          if (settledCount === promises.length) {
            resolve(results);
          }
        });
    });
  });
}

// Usage
const results = await allSettled([
  fetch('/api/users'),
  fetch('/api/posts'),
  Promise.reject(new Error('fail')),
]);
// [{ status: 'fulfilled', value: Response }, { status: 'fulfilled', value: Response }, { status: 'rejected', reason: Error }]`,
    explanation:
      'Promise.allSettled differs from Promise.all in that it never rejects — it waits for every promise to settle and reports each result individually. The implementation: (1) Wrap each promise with Promise.resolve to handle non-promise values; (2) Attach both .then and .catch to capture the outcome; (3) Use a counter to track completions; (4) Resolve the outer promise when all have settled. Results maintain the original order (using index). This is useful for batch operations where partial failure is acceptable (e.g., sending notifications to multiple users — some may fail but others should still succeed). Understanding this pattern is fundamental to advanced async programming.',
    tags: ['promise', 'polyfill', 'async', 'allSettled'],
    year: 2025,
  },
  {
    id: 'atp-038',
    topic: 'coding-challenges',
    difficulty: 'mid',
    type: 'code-write',
    question:
      'Write a function that takes an array of URLs and fetches them in parallel, returning results in order. If any request fails, include the error in the results array instead of throwing.',
    answer: `interface FetchResult<T> {
  url: string;
  ok: boolean;
  data?: T;
  error?: string;
}

async function fetchAll<T>(urls: string[]): Promise<FetchResult<T>[]> {
  const promises = urls.map(async (url): Promise<FetchResult<T>> => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        return { url, ok: false, error: \`HTTP \${response.status}\` };
      }
      const data = await response.json();
      return { url, ok: true, data };
    } catch (err) {
      return {
        url,
        ok: false,
        error: err instanceof Error ? err.message : 'Unknown error',
      };
    }
  });

  return Promise.all(promises);
}

// Usage
const results = await fetchAll([
  '/api/users',
  '/api/posts',
  '/api/invalid-endpoint',
]);

results.forEach((r) => {
  if (r.ok) console.log(r.url, r.data);
  else console.error(r.url, r.error);
});`,
    explanation:
      'Each URL is mapped to a promise that internally catches its own errors, so no individual failure rejects the outer Promise.all. Results maintain input order because Promise.all preserves array position. This is a simpler alternative to Promise.allSettled when you want a custom result shape. Key design choice: wrapping each fetch in try/catch means the caller gets a uniform result array without needing to check status/reason types. This pattern is ideal for dashboard pages that load multiple independent data sources — partial failures shouldn\'t block the entire page.',
    tags: ['parallel-fetch', 'error-handling', 'promise-all', 'batch'],
    year: 2025,
  },
  {
    id: 'atp-039',
    topic: 'coding-challenges',
    difficulty: 'senior',
    type: 'code-write',
    question:
      'Implement a concurrency limiter that runs at most N promises at a time from a queue of async tasks. Like p-limit.',
    answer: `function pLimit(concurrency: number) {
  let active = 0;
  const queue: Array<() => void> = [];

  function next() {
    if (queue.length > 0 && active < concurrency) {
      active++;
      const run = queue.shift()!;
      run();
    }
  }

  function limit<T>(fn: () => Promise<T>): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const run = () => {
        fn()
          .then(resolve)
          .catch(reject)
          .finally(() => {
            active--;
            next();
          });
      };

      queue.push(run);
      next();
    });
  }

  return limit;
}

// Usage
const limit = pLimit(3); // Max 3 concurrent

const urls = Array.from({ length: 20 }, (_, i) => \`/api/item/\${i}\`);

const results = await Promise.all(
  urls.map((url) => limit(() => fetch(url).then((r) => r.json())))
);`,
    explanation:
      'The concurrency limiter wraps each task in a queuing mechanism. When a task completes (finally), it decrements the active count and tries to start the next queued task. Promise.all is used on the outer level to collect all results, but internally, at most N tasks run simultaneously. This prevents overwhelming the server or browser connection limit (6 concurrent per domain in HTTP/1.1). The pattern is essential for: bulk data migration scripts, image processing pipelines, API clients hitting rate-limited endpoints. The p-limit npm package is the popular implementation of this exact pattern.',
    references: ['https://github.com/sindresorhus/p-limit'],
    tags: ['concurrency', 'promise', 'queue', 'p-limit'],
    year: 2025,
  },
  {
    id: 'atp-040',
    topic: 'coding-challenges',
    difficulty: 'lead',
    type: 'system-design',
    question:
      'Design a generic API client SDK for your company\'s REST API. It should support TypeScript type safety, automatic retries, request/response interceptors, cancellation, and be framework-agnostic.',
    answer:
      'Builder pattern API client with generic type parameters, middleware chain for interceptors, pluggable adapters for fetch/axios, and OpenAPI-generated types.',
    explanation:
      'Architecture: (1) Core client class with builder pattern: new ApiClient({ baseUrl, timeout, retries }). Methods typed generically: client.get<User>("/user/1") returns Promise<User>. (2) Interceptor chain (middleware pattern): request interceptors modify config (add auth headers, logging), response interceptors transform data or handle errors. Implemented as arrays of functions composed in order. (3) Retry plugin: configurable per-method, with backoff strategy (exponential, linear, custom). Skips retry on 4xx. (4) Cancellation: each request returns { data: Promise<T>, cancel: () => void } using AbortController internally. (5) Type safety: generate TypeScript types from OpenAPI spec (openapi-typescript). Define API routes as a type map: interface Routes { "/user/:id": { GET: { params: { id: string }, response: User } } }. The client uses this for autocomplete and type checking. (6) Framework-agnostic: core uses fetch API, but adapter pattern allows swapping to axios or node-fetch. React/Vue hooks are thin wrappers around the core. (7) Testing: export a MockClient that records calls for assertion. (8) Publishing: ship as ESM + CJS, tree-shakeable, with separate entry points for React bindings.',
    references: [
      'https://github.com/drwpow/openapi-typescript',
      'https://github.com/sindresorhus/ky',
    ],
    tags: ['sdk-design', 'api-client', 'typescript', 'architecture'],
    year: 2025,
  },
]
