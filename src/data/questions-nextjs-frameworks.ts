import type { Question } from '../types'

export const nextjsFrameworksQuestions: Question[] = [
  {
    id: 'nf-001',
    topic: 'nextjs-frameworks',
    difficulty: 'junior',
    type: 'mcq',
    question: 'In Next.js App Router, which file creates a shared UI layout that wraps all pages in a route segment?',
    options: [
      '_app.tsx',
      'layout.tsx',
      'template.tsx',
      'wrapper.tsx',
    ],
    answer: 1,
    explanation: 'layout.tsx defines a UI shell that wraps all pages in a directory and persists across navigations (state is preserved). template.tsx is similar but creates a new instance on each navigation, losing state. _app.tsx is the Pages Router equivalent.',
    tags: ['nextjs', 'app-router', 'layout', 'routing'],
    year: 2025,
  },
  {
    id: 'nf-002',
    topic: 'nextjs-frameworks',
    difficulty: 'junior',
    type: 'true-false',
    question: 'In Next.js App Router, all components inside the app/ directory are Server Components by default.',
    answer: true,
    explanation: 'Next.js App Router defaults all components to React Server Components (RSC). To opt into client-side rendering with hooks, browser APIs, or event listeners, you must add "use client" at the top of the file.',
    tags: ['nextjs', 'server-components', 'rsc', 'app-router'],
    year: 2025,
  },
  {
    id: 'nf-003',
    topic: 'nextjs-frameworks',
    difficulty: 'junior',
    type: 'mcq',
    question: 'Which Next.js file handles errors within a route segment and its children, showing a fallback UI?',
    options: [
      'not-found.tsx',
      'error.tsx',
      'fallback.tsx',
      'catch.tsx',
    ],
    answer: 1,
    explanation: 'error.tsx is an Error Boundary component that catches runtime errors in a segment. It must be a Client Component ("use client") since Error Boundaries need lifecycle methods. not-found.tsx handles 404 states specifically.',
    tags: ['nextjs', 'error-handling', 'error.tsx', 'app-router'],
    year: 2025,
  },
  {
    id: 'nf-004',
    topic: 'nextjs-frameworks',
    difficulty: 'junior',
    type: 'mcq',
    question: 'In Next.js App Router file-based routing, how do you create a dynamic route segment for a blog post by ID?',
    options: [
      'app/blog/:id/page.tsx',
      'app/blog/[id]/page.tsx',
      'app/blog/{id}/page.tsx',
      'app/blog/$id/page.tsx',
    ],
    answer: 1,
    explanation: 'Next.js uses square brackets for dynamic segments. [id] creates a dynamic segment where the matched value is available via params.id in the page component. For catch-all routes use [...slug], for optional catch-all use [[...slug]].',
    tags: ['nextjs', 'dynamic-routes', 'file-routing'],
    year: 2025,
  },
  {
    id: 'nf-005',
    topic: 'nextjs-frameworks',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is the difference between SSG (Static Site Generation) and ISR (Incremental Static Regeneration) in Next.js?',
    options: [
      'SSG generates pages at build time only; ISR allows pages to be regenerated after deployment on a time-based or on-demand schedule',
      'SSG is for dynamic pages; ISR is for static pages',
      'SSG uses getServerSideProps; ISR uses getStaticProps',
      'ISR is only available in the Pages Router, not App Router',
    ],
    answer: 0,
    explanation: 'SSG builds pages at build time (next build). ISR adds revalidation: in App Router via fetch cache options or route segment config, pages regenerate in the background after the revalidate interval. On-demand ISR (revalidatePath/revalidateTag) lets you trigger regeneration via API.',
    tags: ['nextjs', 'ssg', 'isr', 'rendering'],
    year: 2025,
  },
  {
    id: 'nf-006',
    topic: 'nextjs-frameworks',
    difficulty: 'mid',
    type: 'code-output',
    question: 'What rendering strategy does this Next.js App Router page use?',
    code: `// app/products/page.tsx
export const revalidate = 60

export default async function ProductsPage() {
  const data = await fetch('https://api.example.com/products', {
    next: { revalidate: 60 },
  })
  const products = await data.json()
  return <ProductList products={products} />
}`,
    answer: 'ISR (Incremental Static Regeneration) — page is statically generated and revalidated every 60 seconds.',
    explanation: 'Setting revalidate = 60 at the route segment level and using next: { revalidate: 60 } on fetch enables ISR. The page is generated statically at build time and cached. After 60 seconds, the next request triggers background regeneration. The segment config revalidate and fetch option must agree for consistent behavior.',
    tags: ['nextjs', 'isr', 'revalidate', 'app-router'],
    year: 2025,
  },
  {
    id: 'nf-007',
    topic: 'nextjs-frameworks',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What are Next.js Server Actions and how are they invoked?',
    options: [
      'Server-side API routes accessed via fetch()',
      'Async functions marked with "use server" that run on the server and can be called directly from Client or Server Components, enabling form submissions and mutations without an explicit API route',
      'Next.js middleware functions that run on the Edge',
      'Server-sent events for real-time updates',
    ],
    answer: 1,
    explanation: 'Server Actions are async functions with "use server" directive. They can be invoked from <form action={serverAction}>, called directly in Client Components (imported from a "use server" file), or triggered programmatically. They handle CSRF protection automatically and run only on the server.',
    tags: ['nextjs', 'server-actions', 'mutations'],
    year: 2025,
  },
  {
    id: 'nf-008',
    topic: 'nextjs-frameworks',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What does Next.js Middleware allow you to do and where does it run?',
    options: [
      'Run Node.js code before rendering; runs in the Node.js runtime',
      'Intercept and modify requests/responses before they reach pages; runs on the Edge runtime at the CDN level before the request reaches the server',
      'Add CSS styles globally to all pages',
      'Define database connection pooling for API routes',
    ],
    answer: 1,
    explanation: 'Middleware (middleware.ts at project root) runs on the Edge Runtime, making it extremely fast and globally distributed. It can rewrite URLs, redirect, add headers, authenticate, and A/B test. Being Edge-based means no Node.js APIs — use Web APIs only.',
    tags: ['nextjs', 'middleware', 'edge-runtime'],
    year: 2025,
  },
  {
    id: 'nf-009',
    topic: 'nextjs-frameworks',
    difficulty: 'mid',
    type: 'true-false',
    question: 'In Next.js App Router, the loading.tsx file automatically wraps the page in a React Suspense boundary.',
    answer: true,
    explanation: 'loading.tsx creates an instant loading state shown while page content streams in. Next.js wraps it in <Suspense> automatically, so you never need to manually add Suspense around page.tsx. The layout remains interactive while the page loads.',
    tags: ['nextjs', 'loading', 'suspense', 'streaming'],
    year: 2025,
  },
  {
    id: 'nf-010',
    topic: 'nextjs-frameworks',
    difficulty: 'mid',
    type: 'mcq',
    question: 'How do you define metadata (title, description, og:image) in a Next.js App Router page?',
    options: [
      'Using a <Head> component from next/head',
      'Exporting a metadata object or generateMetadata function from the page/layout file',
      'Adding meta tags directly in the JSX return',
      'Using next.config.js headers configuration',
    ],
    answer: 1,
    explanation: 'App Router uses the Metadata API: export const metadata = { title: \'...\', description: \'...\' } for static metadata, or export async function generateMetadata({ params }) for dynamic metadata (e.g., using the page\'s params to fetch a post title). The <Head> component is Pages Router only.',
    tags: ['nextjs', 'metadata', 'seo', 'app-router'],
    year: 2025,
  },
  {
    id: 'nf-011',
    topic: 'nextjs-frameworks',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What are Parallel Routes in Next.js App Router and what problem do they solve?',
    options: [
      'Multiple API routes running in parallel for performance',
      'Named slots (@folder convention) that allow rendering multiple pages simultaneously in the same layout — enabling dashboards, modals, and split-pane UIs where each slot has independent loading/error states',
      'Parallel data fetching in getServerSideProps',
      'Running multiple middleware functions concurrently',
    ],
    answer: 1,
    explanation: 'Parallel Routes use the @slotName convention in app directory. A layout receives multiple slots as props: function Layout({ children, analytics, team }). Each slot is independent with its own loading.tsx, error.tsx, and navigation state. Perfect for dashboards or auth modals that overlay existing pages.',
    tags: ['nextjs', 'parallel-routes', 'slots', 'app-router'],
    year: 2025,
  },
  {
    id: 'nf-012',
    topic: 'nextjs-frameworks',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What are Intercepting Routes in Next.js and when would you use them?',
    options: [
      'Routes that block navigation for authentication',
      'Routes that intercept a navigation to render a different page in the current context (e.g., showing a photo in a modal while maintaining the gallery page in the background, with a shareable /photos/[id] URL)',
      'Middleware that intercepts API calls',
      'Routes that capture 404 errors',
    ],
    answer: 1,
    explanation: 'Intercepting Routes ((..), (.), ((...)) conventions) let you intercept a route in the current layout. Classic use case: clicking a photo shows it in a modal (intercepted route) but navigating directly to /photos/[id] shows it full-page. Combine with Parallel Routes for modal patterns with URL sharing.',
    tags: ['nextjs', 'intercepting-routes', 'modals', 'app-router'],
    year: 2025,
  },
  {
    id: 'nf-013',
    topic: 'nextjs-frameworks',
    difficulty: 'senior',
    type: 'debug',
    question: 'This Next.js Server Action has a security issue. Identify it.',
    code: `'use server'

export async function deletePost(postId: string) {
  // Directly delete without authorization check
  await db.posts.delete({ where: { id: postId } })
  revalidatePath('/posts')
}

// Called from client:
// <button onClick={() => deletePost(post.id)}>Delete</button>`,
    answer: 'No authorization check — any authenticated (or unauthenticated) user can delete any post by calling this action with any postId.',
    solutionCode: `'use server'

export async function deletePost(postId: string) {
  const session = await getSession()
  if (!session) throw new Error('Unauthorized')

  const post = await db.posts.findUnique({ where: { id: postId } })
  if (!post || post.authorId !== session.userId) {
    throw new Error('Forbidden')
  }

  await db.posts.delete({ where: { id: postId } })
  revalidatePath('/posts')
}`,
    explanation: 'Server Actions are public endpoints. Always validate: (1) that the user is authenticated (check session), (2) that they own the resource or have permission. Add: const session = await getSession(); if (!session || session.userId !== post.authorId) throw new Error("Unauthorized"). Never trust client-provided IDs without ownership verification.',
    tags: ['nextjs', 'server-actions', 'security', 'authorization'],
    year: 2025,
  },
  {
    id: 'nf-014',
    topic: 'nextjs-frameworks',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is the key architectural difference between Next.js App Router and Remix in how they handle data loading?',
    options: [
      'Next.js uses REST; Remix uses GraphQL',
      'Next.js co-locates data fetching inside async Server Components (fetch in the component tree); Remix uses route-level loaders/actions that run before rendering, enabling parallel data loading at the route level',
      'Remix supports SSR; Next.js only supports SSG',
      'Next.js has a built-in database ORM; Remix does not',
    ],
    answer: 1,
    explanation: 'Next.js App Router: data is fetched inside async server components, Request Waterfall can occur if not using parallel fetch. Remix: every route exports a loader() that runs server-side; Remix runs all loaders for matched routes in parallel before rendering, then passes data via useLoaderData(). Both support streaming but with different mental models.',
    tags: ['nextjs', 'remix', 'data-fetching', 'loaders'],
    year: 2025,
  },
  {
    id: 'nf-015',
    topic: 'nextjs-frameworks',
    difficulty: 'senior',
    type: 'code-output',
    question: 'What is the rendering behavior of this Next.js page and what does the "force-dynamic" config do?',
    code: `// app/dashboard/page.tsx
export const dynamic = 'force-dynamic'

export default async function Dashboard() {
  const session = await getServerSession()
  const data = await fetch('/api/user-data', {
    headers: { Authorization: \`Bearer \${session.token}\` },
  })
  return <DashboardUI data={await data.json()} />
}`,
    answer: 'force-dynamic makes this a fully dynamic SSR page that runs on every request, never caches the result, and opts out of static generation.',
    explanation: 'dynamic = "force-dynamic" is equivalent to getServerSideProps in Pages Router. It disables all caching for the route. Necessary for pages that read request-time data (cookies, headers, session, search params). Without it, Next.js tries to statically generate pages where possible.',
    tags: ['nextjs', 'ssr', 'dynamic', 'rendering'],
    year: 2025,
  },
  {
    id: 'nf-016',
    topic: 'nextjs-frameworks',
    difficulty: 'junior',
    type: 'mcq',
    question: 'Which Next.js component should you use for client-side navigation between pages?',
    options: [
      '<a href="/about">',
      '<Link href="/about">',
      '<Navigate to="/about">',
      '<router-link to="/about">',
    ],
    answer: 1,
    explanation: 'Next.js <Link> from "next/link" enables client-side navigation with prefetching. It prevents full page reloads, prefetches linked pages in the viewport, and preserves React state. Plain <a> tags cause full page reloads.',
    tags: ['nextjs', 'link', 'navigation', 'prefetching'],
    year: 2025,
  },
  {
    id: 'nf-017',
    topic: 'nextjs-frameworks',
    difficulty: 'mid',
    type: 'true-false',
    question: 'In Next.js App Router, you can use cookies() and headers() from "next/headers" in Server Components without any props.',
    answer: true,
    explanation: 'next/headers provides cookies() and headers() functions that read the incoming request data in Server Components and Server Actions. They are async in Next.js 15 (await cookies()). Using them in a component makes it dynamically rendered since they are request-specific.',
    tags: ['nextjs', 'cookies', 'headers', 'server-components'],
    year: 2025,
  },
  {
    id: 'nf-018',
    topic: 'nextjs-frameworks',
    difficulty: 'lead',
    type: 'mcq',
    question: 'What is Next.js Partial Prerendering (PPR) and why is it architecturally significant?',
    options: [
      'Rendering only part of the page on mobile devices',
      'A rendering model that combines static and dynamic content in a single request: the static shell is served instantly from CDN, while dynamic holes stream in concurrently — eliminating the SSG vs SSR choice',
      'Splitting a page into multiple smaller pages for performance',
      'Rendering every other page statically in an alternating pattern',
    ],
    answer: 1,
    explanation: 'PPR (experimental in Next.js 14+, advancing in 15) uses React\'s Suspense boundaries to identify dynamic content. The static outer shell (navigation, layout) is prerendered to CDN. Dynamic content (user-specific data) streams in from the server in the same HTTP response. This gives CDN-speed initial loads with per-request dynamic content.',
    tags: ['nextjs', 'ppr', 'partial-prerendering', 'rendering'],
    year: 2025,
  },
  {
    id: 'nf-019',
    topic: 'nextjs-frameworks',
    difficulty: 'lead',
    type: 'mcq',
    question: 'How does Next.js handle the React Server Component "server/client boundary" and what are the rules for passing data across it?',
    options: [
      'You can pass any JavaScript value as props from Server to Client Components',
      'Only serializable values (strings, numbers, arrays, plain objects, Dates) can cross the server/client boundary as props; functions, class instances, and non-serializable objects cannot',
      'Server Components can only pass primitive strings to Client Components',
      'Props are automatically serialized via JSON.stringify for all data types',
    ],
    answer: 1,
    explanation: 'The RSC protocol serializes props to pass them from server to client over the wire. Serializable types work: primitives, JSON-compatible objects, React elements (treated specially). Non-serializable types fail: plain functions (use Server Actions instead), class instances, Maps/Sets, closures. This is why you sometimes see "Failed to serialize" errors.',
    tags: ['nextjs', 'rsc', 'serialization', 'server-client-boundary'],
    year: 2025,
  },
  {
    id: 'nf-020',
    topic: 'nextjs-frameworks',
    difficulty: 'lead',
    type: 'mcq',
    question: 'In Next.js App Router, what is the "use cache" directive (experimental) and how does it differ from the fetch cache?',
    options: [
      '"use cache" is the same as adding next: { revalidate } to fetch',
      '"use cache" is a new directive (Next.js 15 canary) that enables caching at the function/component level, not just fetch calls — you can cache any async computation with configurable revalidation tags',
      '"use cache" disables all caching for a function',
      '"use cache" is a browser Cache API wrapper',
    ],
    answer: 1,
    explanation: '"use cache" (unstable_cache predecessor) allows marking any async function as cacheable. Unlike fetch cache which only works for HTTP requests, "use cache" works for database queries, computation results, or any async operation. Combined with cacheTag() and cacheLife() for fine-grained control. Part of Next.js 15\'s expanded caching model.',
    tags: ['nextjs', 'use-cache', 'caching', 'next15'],
    year: 2025,
  },
  {
    id: 'nf-021',
    topic: 'nextjs-frameworks',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What does the generateStaticParams function do in Next.js App Router?',
    options: [
      'Generates TypeScript types for route params',
      'Pre-generates static pages for dynamic routes at build time by returning all possible param values',
      'Validates URL parameters at runtime',
      'Creates URL search params for API routes',
    ],
    answer: 1,
    explanation: 'generateStaticParams replaces getStaticPaths from Pages Router. It returns an array of param objects that Next.js uses to statically generate all possible pages for a dynamic route at build time. E.g., for [id], returning [{id: "1"}, {id: "2"}] generates /products/1 and /products/2 at build time.',
    tags: ['nextjs', 'generateStaticParams', 'ssg', 'dynamic-routes'],
    year: 2025,
  },
  {
    id: 'nf-022',
    topic: 'nextjs-frameworks',
    difficulty: 'senior',
    type: 'mcq',
    question: 'How does Remix\'s nested routing model differ from Next.js App Router\'s nested layouts?',
    options: [
      'They are identical — both use the same file-based convention',
      'Remix nested routes automatically scope CSS; Next.js does not',
      'Remix\'s nested routes couple layout + data loading + actions in a single route module with automatic outlet composition; Next.js separates layout.tsx (UI) from page.tsx (content) with independent data fetching in each component',
      'Next.js supports deeper nesting than Remix',
    ],
    answer: 2,
    explanation: 'In Remix, a route file defines the layout, loader, action, and error boundary together — the route is the unit of composition. Next.js separates concerns: layout.tsx for persistent UI, page.tsx for content, each fetching data independently as RSC. Remix\'s model encourages tighter coupling of data and UI at the route level.',
    tags: ['remix', 'nextjs', 'nested-routing', 'comparison'],
    year: 2025,
  },
  {
    id: 'nf-023',
    topic: 'nextjs-frameworks',
    difficulty: 'mid',
    type: 'true-false',
    question: 'Next.js Image component (next/image) automatically serves WebP/AVIF formats and resizes images for different viewports.',
    answer: true,
    explanation: 'next/image optimizes images on-demand: converts to WebP/AVIF based on browser support, resizes to the requested dimensions, lazy loads by default, and prevents Cumulative Layout Shift (CLS) via required width/height or fill prop. This dramatically improves LCP and overall performance.',
    tags: ['nextjs', 'image-optimization', 'next/image', 'performance'],
    year: 2025,
  },
  {
    id: 'nf-024',
    topic: 'nextjs-frameworks',
    difficulty: 'senior',
    type: 'code-output',
    question: 'What is the output/behavior of this Next.js middleware?',
    code: `// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth-token')

  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*'],
}`,
    answer: 'Unauthenticated requests to /dashboard/* are redirected to /login. Authenticated requests proceed normally. The matcher limits middleware execution to /dashboard routes only.',
    explanation: 'The matcher config ensures middleware only runs on /dashboard and its sub-paths, not on every route (performance). The middleware checks for an auth-token cookie and redirects to /login if missing. NextResponse.next() passes through authenticated requests. This is the standard auth guard pattern in Next.js.',
    tags: ['nextjs', 'middleware', 'authentication', 'redirect'],
    year: 2025,
  },
  {
    id: 'nf-025',
    topic: 'nextjs-frameworks',
    difficulty: 'junior',
    type: 'mcq',
    question: 'What file in Next.js App Router handles requests to a URL path that doesn\'t match any existing routes?',
    options: [
      '404.tsx',
      'error.tsx',
      'not-found.tsx',
      'catch-all.tsx',
    ],
    answer: 2,
    explanation: 'not-found.tsx renders when notFound() is called from a server component or when a route doesn\'t match. You can have a root app/not-found.tsx for global 404s and nested not-found.tsx files for segment-specific ones. The notFound() function can be called anywhere in server code to trigger it.',
    tags: ['nextjs', 'not-found', '404', 'app-router'],
    year: 2025,
  },
  {
    id: 'nf-026',
    topic: 'nextjs-frameworks',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What are the key new features in Next.js 15 compared to Next.js 14?',
    options: [
      'Next.js 15 removed the App Router in favor of a new Pages Router 2.0',
      'Next.js 15 ships with Turbopack stable for dev server, React 19 support, async request APIs (cookies/headers return Promises), and changes caching defaults to uncached by default for fetch and Route Handlers',
      'Next.js 15 replaced Server Components with a new Server Islands architecture',
      'Next.js 15 dropped TypeScript support in favor of JSDoc types',
    ],
    answer: 1,
    explanation: 'Next.js 15 highlights: Turbopack is now stable for next dev (faster HMR). React 19 is supported (new hooks, improved Actions). Breaking change: cookies(), headers(), params, and searchParams are now async — must await them. Default caching changed: fetch() and Route Handlers are no longer cached by default (more predictable). New after() API for post-response work.',
    tags: ['nextjs', 'next15', 'turbopack', 'react19'],
    year: 2025,
  },
  {
    id: 'nf-027',
    topic: 'nextjs-frameworks',
    difficulty: 'junior',
    type: 'mcq',
    question: 'How do you create a Route Handler in Next.js App Router that responds to GET requests?',
    options: [
      'Create pages/api/route.ts and export default handler',
      'Create app/api/[path]/route.ts and export named async function GET(request)',
      'Create app/api/[path]/handler.ts and export default GET',
      'Create app/api/[path]/page.ts and add a getServerSideProps export',
    ],
    answer: 1,
    explanation: 'Route Handlers live in app directory as route.ts files. Export named HTTP method functions: export async function GET(request: NextRequest) { return NextResponse.json({ data }) }. Supported exports: GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS. Multiple methods can coexist in one route.ts file. They replace pages/api/* from Pages Router.',
    tags: ['nextjs', 'route-handlers', 'api', 'app-router'],
    year: 2025,
  },
  {
    id: 'nf-028',
    topic: 'nextjs-frameworks',
    difficulty: 'mid',
    type: 'code-output',
    question: 'What does this Next.js Route Handler do and what is its caching behavior in Next.js 15?',
    code: `// app/api/time/route.ts
export async function GET() {
  return Response.json({ time: new Date().toISOString() })
}`,
    answer: 'Returns current server time as JSON. In Next.js 15, this is dynamic by default (not cached) — each request returns fresh time. In Next.js 14, GET Route Handlers were statically cached unless opting out.',
    explanation: 'Next.js 15 changed the default caching for Route Handlers: they are now dynamic (uncached) by default. In Next.js 14, a GET Route Handler without cookies/headers/dynamic functions was statically cached at build time. This breaking change in v15 makes behavior more intuitive — endpoints like /api/time correctly return fresh data on every request without needing export const dynamic = "force-dynamic".',
    tags: ['nextjs', 'route-handlers', 'caching', 'next15'],
    year: 2025,
  },
  {
    id: 'nf-029',
    topic: 'nextjs-frameworks',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What are the four distinct caching layers in Next.js App Router and what does each cache?',
    options: [
      'There is only one unified cache in Next.js',
      'Request Memoization (per-request deduplication), Data Cache (persistent fetch cache across requests), Full Route Cache (rendered HTML+RSC payload at build/revalidate time), Router Cache (client-side prefetched segments cache)',
      'Browser cache, CDN cache, server cache, and database cache',
      'Static cache, dynamic cache, ISR cache, and edge cache',
    ],
    answer: 1,
    explanation: 'Next.js has four caches: (1) Request Memoization: deduplicates identical fetch() calls within a single render tree per request. (2) Data Cache: persistent server-side cache for fetch() responses, survives across requests/deployments, revalidated via revalidateTag/revalidatePath. (3) Full Route Cache: the rendered HTML and RSC payload cached on the server at build/revalidate time. (4) Router Cache: client-side in-memory cache of visited/prefetched route segments for instant back-navigation.',
    tags: ['nextjs', 'caching', 'data-cache', 'router-cache'],
    year: 2025,
  },
  {
    id: 'nf-030',
    topic: 'nextjs-frameworks',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is the difference between revalidatePath and revalidateTag in Next.js on-demand revalidation?',
    options: [
      'revalidatePath is for Pages Router; revalidateTag is for App Router',
      'revalidatePath invalidates all cached data for a specific URL path; revalidateTag invalidates all cached fetch() calls tagged with a specific cache tag — more granular and reusable across multiple paths',
      'revalidateTag is faster than revalidatePath for static pages',
      'They are identical — use either interchangeably',
    ],
    answer: 1,
    explanation: 'revalidatePath("/products") clears all data cache entries for that URL. revalidateTag("products") invalidates all fetch() calls that used next: { tags: ["products"] } option across any route. Tags are more powerful: a single revalidateTag("products") can invalidate data shared between /products, /products/[id], and /home product widgets simultaneously.',
    tags: ['nextjs', 'revalidation', 'revalidatePath', 'revalidateTag'],
    year: 2025,
  },
  {
    id: 'nf-031',
    topic: 'nextjs-frameworks',
    difficulty: 'junior',
    type: 'true-false',
    question: 'The next/font module eliminates layout shift from custom fonts by automatically inlining font size CSS variables and using font-display: swap.',
    answer: false,
    explanation: 'The statement is false because next/font does NOT work by "inlining font size CSS variables." It generates scoped CSS class names with font-family declarations, self-hosts fonts (including Google Fonts), and adds preload links. The default font-display is `swap` (not optional). The "font size CSS variables" part of the question is the incorrect claim — next/font uses CSS variables for the font-family name, not font sizes.',
    tags: ['nextjs', 'next/font', 'font-optimization', 'cls'],
    year: 2025,
  },
  {
    id: 'nf-032',
    topic: 'nextjs-frameworks',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is the required prop for next/image that helps prevent Cumulative Layout Shift (CLS)?',
    options: [
      'priority',
      'loading="eager"',
      'width and height (or fill prop with a positioned parent)',
      'placeholder="blur"',
    ],
    answer: 2,
    explanation: 'next/image requires either explicit width + height props, or the fill prop (which requires position: relative/absolute/fixed on the parent). These allow the browser to reserve space before the image loads, preventing CLS. Without them, the browser doesn\'t know the image dimensions and cannot allocate layout space — causing content to jump when the image loads.',
    tags: ['nextjs', 'next/image', 'cls', 'performance'],
    year: 2025,
  },
  {
    id: 'nf-033',
    topic: 'nextjs-frameworks',
    difficulty: 'senior',
    type: 'mcq',
    question: 'What is Next.js Partial Prerendering\'s relationship to React\'s Suspense and how do you opt a component into being dynamically rendered in PPR?',
    options: [
      'PPR has no relationship to Suspense — it uses a separate streaming mechanism',
      'PPR uses Suspense boundaries to identify the dynamic/static split: the static shell renders to the boundary, then each Suspense boundary containing dynamic content (using cookies, headers, or uncached fetches) is filled dynamically. Wrapping dynamic content in <Suspense> is how you opt into PPR\'s dynamic holes.',
      'You opt into PPR via export const ppr = true in the page file',
      'PPR renders all Suspense boundaries statically and streams non-Suspense content dynamically',
    ],
    answer: 1,
    explanation: 'PPR uses React Suspense as the boundary marker. Everything outside Suspense boundaries is statically prerendered to CDN. Each <Suspense fallback={...}> wrapping dynamic content (components that read cookies/headers or use uncached fetches) becomes a "hole" streamed dynamically. The fallback is included in the static HTML. Enable with experimental: { ppr: true } in next.config, and PPR: true at the route segment.',
    tags: ['nextjs', 'ppr', 'suspense', 'partial-prerendering'],
    year: 2025,
  },
  {
    id: 'nf-034',
    topic: 'nextjs-frameworks',
    difficulty: 'senior',
    type: 'mcq',
    question: 'How do you implement auth-based middleware in Next.js that redirects unauthenticated users and preserves the intended destination URL?',
    options: [
      'Use getServerSideProps in every protected page to check authentication',
      'In middleware.ts, read the auth token, redirect to /login?redirect=[current-path] if missing, then in the login page read the redirect param and navigate after successful auth — all running on Edge before the page renders',
      'Wrap all protected pages in a client-side AuthGuard component that uses useEffect to redirect',
      'Use Next.js rewrites in next.config.js to point protected routes to a login endpoint',
    ],
    answer: 1,
    explanation: 'Middleware auth pattern: const url = request.nextUrl; if (!token) { url.pathname = "/login"; url.searchParams.set("redirect", request.nextUrl.pathname); return NextResponse.redirect(url) }. This preserves the destination. After login, the server action/handler reads searchParams.get("redirect") and calls redirect(). Middleware runs on Edge before any page renders — no flash of protected content.',
    tags: ['nextjs', 'middleware', 'authentication', 'redirect'],
    year: 2025,
  },
  {
    id: 'nf-035',
    topic: 'nextjs-frameworks',
    difficulty: 'mid',
    type: 'true-false',
    question: 'In Next.js App Router, parallel routes defined with @folder convention are required to have a default.tsx file to handle unmatched slot states.',
    answer: true,
    explanation: 'When using parallel routes (@analytics, @team), Next.js needs default.tsx in each slot to handle cases where a slot has no matching page for the current URL. Without default.tsx, navigating to a URL that matches the main slot but not a parallel slot causes a 404. default.tsx acts as the fallback rendering for unmatched parallel route slots during navigation.',
    tags: ['nextjs', 'parallel-routes', 'default.tsx', 'app-router'],
    year: 2025,
  },
  {
    id: 'nf-036',
    topic: 'nextjs-frameworks',
    difficulty: 'senior',
    type: 'code-output',
    question: 'What pattern does this Next.js intercepting route implement and what is the UX behavior?',
    code: `// app/feed/page.tsx — main feed
// app/feed/@modal/(.)photos/[id]/page.tsx — intercepting route
// app/photos/[id]/page.tsx — direct route

// The (.)[id] convention intercepts navigation from /feed to /photos/[id]`,
    answer: 'Clicking a photo from /feed opens it in a modal (intercepting route) while /feed stays visible in the background. Navigating directly to /photos/[id] or refreshing shows the full-page photo view. The URL updates to /photos/[id] in both cases.',
    explanation: 'Intercepting routes with (.) intercept same-level routes. Combined with a @modal parallel route slot, this implements the Instagram-style pattern: soft navigation from within the feed intercepts and shows the photo in an overlay (modal), but hard navigation or refresh hits /photos/[id] directly for the full-page view. The URL is always /photos/[id] — shareable and crawlable.',
    tags: ['nextjs', 'intercepting-routes', 'parallel-routes', 'modals'],
    year: 2025,
  },
  {
    id: 'nf-037',
    topic: 'nextjs-frameworks',
    difficulty: 'mid',
    type: 'mcq',
    question: 'In Remix, what is the difference between a loader and an action, and how are they invoked?',
    options: [
      'loader is for GET requests (data fetching), action is for POST/PUT/DELETE (mutations). loader runs before render and provides data via useLoaderData(); action handles form submissions and is triggered by <Form method="post"> or fetcher.submit()',
      'loader runs on the client; action runs on the server',
      'action is the Remix equivalent of Next.js getServerSideProps',
      'loaders are cached; actions always bypass cache',
    ],
    answer: 0,
    explanation: 'Remix route module exports: export async function loader({ request, params }) — runs on GET, returns data consumed by useLoaderData(). export async function action({ request, params }) — runs on non-GET form submissions, handles mutations, returns redirect or data consumed by useActionData(). Both run server-side only. Remix runs all matched route loaders in parallel on navigation.',
    tags: ['remix', 'loader', 'action', 'data-fetching'],
    year: 2025,
  },
  {
    id: 'nf-038',
    topic: 'nextjs-frameworks',
    difficulty: 'lead',
    type: 'mcq',
    question: 'What does Turbopack provide in Next.js 15 and how does it differ from webpack?',
    options: [
      'Turbopack is a CSS bundler only; webpack handles JavaScript',
      'Turbopack is a Rust-based incremental bundler that replaces webpack for the dev server (next dev --turbo). It uses function-level caching to only recompute changed module subgraphs — delivering significantly faster HMR and cold starts on large codebases compared to webpack\'s JavaScript-based bundling',
      'Turbopack is the production bundler; webpack remains for development',
      'Turbopack requires migrating away from webpack config entirely including next.config.js',
    ],
    answer: 1,
    explanation: 'Turbopack (stable in Next.js 15 for dev) is written in Rust and uses granular incremental computation: only the modules in the changed file\'s dependency subgraph are recomputed. On large apps with thousands of modules, HMR can be 10x faster than webpack. Next.js 15 stabilized --turbopack for next dev. Production builds still use webpack by default (Turbopack production is in progress). Existing next.config.js webpack plugins may not be compatible.',
    tags: ['nextjs', 'turbopack', 'webpack', 'bundler', 'next15'],
    year: 2025,
  },
  {
    id: 'nf-039',
    topic: 'nextjs-frameworks',
    difficulty: 'senior',
    type: 'debug',
    question: 'This Next.js middleware has an issue causing infinite redirect loops. Find it.',
    code: `// middleware.ts
export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}`,
    answer: 'The matcher includes /login itself — unauthenticated users are redirected to /login, which also runs middleware, which redirects to /login again, creating an infinite loop.',
    solutionCode: `// middleware.ts — FIXED: exclude /login from the matcher
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  // Exclude /login (and other public routes) from the matcher
  matcher: ['/((?!_next/static|_next/image|favicon.ico|login).*)'],
}`,
    explanation: 'The matcher catches all routes except Next.js internals, but /login is not excluded. When an unauthenticated user hits /login, middleware redirects them to /login, which triggers middleware again — infinite loop. Fix: add /login to the exclusion pattern: matcher: ["/((?!_next/static|_next/image|favicon.ico|login).*)"] or check if the pathname is already /login before redirecting.',
    tags: ['nextjs', 'middleware', 'redirect-loop', 'debug'],
    year: 2025,
  },
  {
    id: 'nf-040',
    topic: 'nextjs-frameworks',
    difficulty: 'lead',
    type: 'mcq',
    question: 'What is the key architectural advantage of Remix\'s nested routes over traditional single-level routing?',
    options: [
      'Nested routes load faster because they use HTTP/2 multiplexing',
      'Remix nested routes enable co-located data loading, error boundaries, and pending states at each layout level — parent routes\' loaders run in parallel with child loaders, and each level independently handles its own errors and loading states without prop drilling',
      'Nested routes in Remix automatically code-split by route level',
      'Remix nested routes use GraphQL fragments for hierarchical data fetching',
    ],
    answer: 1,
    explanation: 'Remix\'s nested routing is its core innovation: every matched route in the URL hierarchy runs its loader in parallel (no waterfall). Each route has its own ErrorBoundary and pending state, so a failed child route doesn\'t break the parent layout. This maps naturally to UI hierarchy: a dashboard shell stays rendered while an inner panel fails or loads independently — something that requires complex state management in other frameworks.',
    tags: ['remix', 'nested-routes', 'architecture', 'parallel-loading'],
    year: 2025,
  },
  {
    id: 'nf-041',
    topic: 'nextjs-frameworks',
    difficulty: 'lead',
    type: 'mcq',
    question: 'In Next.js App Router with React 19, how do React\'s new form Actions integrate with Server Actions?',
    options: [
      'React 19 form Actions only work with client-side state — they cannot call server functions',
      'React 19 allows passing a Server Action directly as the form\'s action prop: <form action={serverAction}>. The browser natively submits the form (works without JS), and React enhances it with progressive enhancement, useFormStatus() for pending states, and useActionState() for action results',
      'React 19 Actions require wrapping in startTransition() for server integration',
      'Form Actions in React 19 replace useEffect for data fetching in all cases',
    ],
    answer: 1,
    explanation: 'React 19 + Next.js Server Actions: <form action={myServerAction}> works without JavaScript (native form submission) and is enhanced by React when JS loads. New hooks: useFormStatus() returns { pending, data, method } for any component inside the form (no prop drilling for pending states). useActionState(action, initialState) manages server action state — replaces the useState + server action pattern. This enables true progressive enhancement.',
    tags: ['nextjs', 'react19', 'server-actions', 'form-actions'],
    year: 2025,
  },
  {
    id: 'nf-042',
    topic: 'nextjs-frameworks',
    difficulty: 'junior',
    type: 'mcq',
    question: 'What is i18n (internationalization) routing in Next.js middleware and how do you detect the user\'s locale?',
    options: [
      'Use next.config.js i18n property to define locales and Next.js auto-routes to /[locale]/page',
      'In middleware.ts, read the Accept-Language header or a locale cookie, then rewrite/redirect to the locale-prefixed path (e.g., /en/about or /fr/about) — giving you full control over locale detection and routing strategy',
      'Install next-i18next and wrap pages in serverSideTranslations HOC',
      'Locale detection only works in Client Components using the browser navigator.language API',
    ],
    answer: 1,
    explanation: 'Modern Next.js App Router i18n: the App Router i18n config was removed; the recommended approach is middleware-based routing. Middleware reads Accept-Language header (using negotiator or @formatjs/intl-localematcher), checks a locale cookie, then rewrites to /[locale]/path. The [locale] dynamic segment is created in app/[lang]/layout.tsx. Libraries like next-intl and Paraglide.js build on this pattern.',
    tags: ['nextjs', 'i18n', 'middleware', 'localization'],
    year: 2025,
  },
  {
    id: 'nf-043',
    topic: 'nextjs-frameworks',
    difficulty: 'mid',
    type: 'mcq',
    question: 'What is the Next.js Router Cache and what is a common misconception about it?',
    options: [
      'The Router Cache is server-side and stores HTML for all visited pages permanently',
      'The Router Cache is a client-side in-memory cache that stores prefetched and visited RSC payloads for the browser session. A common misconception: it is NOT the same as the Data Cache, and it CANNOT be invalidated by revalidatePath/revalidateTag — only router.refresh() or navigation clears it',
      'The Router Cache stores API responses for offline use',
      'The Router Cache is configurable via next.config.js and persists across browser sessions',
    ],
    answer: 1,
    explanation: 'Router Cache lives in the browser (not server), stores RSC payloads for navigated and prefetched routes, and is scoped to the browser session (cleared on refresh). It is frequently confused with the server-side Data Cache. Critical distinction: calling revalidatePath() on the server does NOT immediately clear the client Router Cache. You need router.refresh() to force the client to re-fetch from the server. In Next.js 15, the Router Cache duration for dynamic pages was changed to 0 (no caching by default).',
    tags: ['nextjs', 'router-cache', 'caching', 'client-side'],
    year: 2025,
  },
  {
    id: 'nf-044',
    topic: 'nextjs-frameworks',
    difficulty: 'junior',
    type: 'true-false',
    question: 'In Next.js App Router, a route segment\'s loading.tsx file displays its fallback during both initial load AND subsequent client-side navigations to that route.',
    answer: true,
    explanation: 'loading.tsx creates an automatic Suspense boundary around the page. It displays during: (1) initial server render while the page streams in, and (2) client-side navigations where React suspends while loading the new page\'s data/components. This means navigation to a route with a slow data fetch shows the loading.tsx skeleton without any additional setup.',
    tags: ['nextjs', 'loading', 'suspense', 'navigation'],
    year: 2025,
  },
  {
    id: 'nf-045',
    topic: 'nextjs-frameworks',
    difficulty: 'senior',
    type: 'mcq',
    question: 'How does Remix handle race conditions in concurrent form submissions better than traditional SPAs?',
    options: [
      'Remix uses a queue system to serialize all form submissions',
      'Remix\'s native form handling (useFetcher, Form) automatically cancels in-flight requests when new submissions occur, and revalidates all loaders after any action completes — ensuring the UI always reflects the latest server state without manual abort controller management',
      'Remix prevents multiple form submissions by disabling the submit button automatically',
      'Remix uses WebSockets to synchronize form state across tabs',
    ],
    answer: 1,
    explanation: 'Traditional SPAs manage loading/error state manually with useEffect, often missing edge cases. Remix\'s useFetcher handles: automatic cancellation of stale requests, revalidating all route loaders after any action (keeping all data in sync), and optimistic UI via fetcher.state. The framework takes care of the concurrency model — developers declare what to do, not how to manage async state.',
    tags: ['remix', 'useFetcher', 'race-conditions', 'forms'],
    year: 2025,
  },
]
