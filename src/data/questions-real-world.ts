import type { Question } from '../types'

export const realWorldQuestions: Question[] = [
  // ═══════════════════════════════════════════════════
  // PRODUCTION DEBUGGING & INCIDENT RESPONSE (10 questions)
  // ═══════════════════════════════════════════════════
  {
    id: 'rw-001',
    topic: 'real-world',
    difficulty: 'mid',
    type: 'system-design',
    question:
      'Sau khi deploy lên production, khách hàng báo "bấm nút Thanh toán không có gì xảy ra". Chỉ xảy ra trên Safari iOS. Bạn debug và fix thế nào?',
    answer:
      'Kiểm tra Safari-specific issues: Private Browsing chặn localStorage, thiếu polyfill cho API mới, CORS khác biệt, event handling khác Chrome.',
    explanation:
      'Safari iOS là browser gây nhiều headache nhất cho frontend dev. Quy trình debug: (1) Reproduce — dùng macOS Safari > Develop > iPhone Simulator hoặc thiết bị thật + Safari Web Inspector. (2) Common Safari traps: (a) Private Browsing mode — localStorage.setItem() throw QuotaExceededError thay vì silent fail. Fix: wrap trong try/catch. (b) 3rd-party cookie bị chặn (ITP) — nếu payment gateway dùng iframe cross-origin → cookie không gửi được. (c) API thiếu support: `structuredClone`, `AbortSignal.timeout`, `CSS :has()` có thể chưa support trên Safari version cũ. (d) Click event trên non-interactive element (div, span) không fire trên iOS → cần `cursor: pointer` hoặc dùng button/a tag. (e) `position: fixed` trong iOS keyboard open bị lỗi layout. (3) Caniuse.com check API compatibility. (4) Browserslist config trong project đảm bảo target Safari phiên bản cần support. (5) CI/CD thêm Playwright test trên WebKit engine.',
    tags: ['safari', 'cross-browser', 'debugging', 'mobile', 'production'],
    year: 2025,
  },
  {
    id: 'rw-002',
    topic: 'real-world',
    difficulty: 'senior',
    type: 'system-design',
    question:
      'Sáng thứ Hai, Sentry alert báo error rate tăng 500%. Hầu hết là "TypeError: Cannot read properties of undefined". Không ai deploy cuối tuần. Nguyên nhân có thể là gì và cách xử lý?',
    answer:
      'Nguyên nhân phổ biến: API backend thay đổi response shape, CDN cache expire, 3rd-party script update, hoặc certificate/token hết hạn.',
    explanation:
      'Khi error rate spike mà không ai deploy, nguyên nhân thường nằm ngoài code: (1) Backend API thay đổi — backend team deploy breaking change: field đổi tên, nested object trở thành null, response format thay đổi. Fix: optional chaining (`data?.user?.name`), runtime validation (Zod), API versioning. (2) 3rd-party script — Google Analytics, chat widget, ad script update gây conflict. Fix: sandbox 3rd-party scripts, CSP header. (3) CDN/Cache — CDN purge khiến old HTML load new JS chunks hoặc ngược lại. (4) SSL certificate expire — API calls fail silently, data undefined. (5) Token/API key expire — OAuth token hết hạn vào weekend khi không ai refresh. Action plan: (a) Check Sentry error grouping — tìm common stack trace. (b) Check API response từ monitoring (Datadog, CloudWatch). (c) Check deploy log của tất cả services (không chỉ FE). (d) Rollback nếu critical. (e) Post-mortem sau khi fix.',
    tags: ['incident-response', 'sentry', 'production', 'debugging'],
    year: 2025,
  },
  {
    id: 'rw-003',
    topic: 'real-world',
    difficulty: 'mid',
    type: 'system-design',
    question:
      'User report: "Tôi điền form xong bấm Submit, loading 30 giây rồi mất hết dữ liệu". Form có 15 fields và upload ảnh. Bạn fix UX và technical thế nào?',
    answer:
      'Auto-save draft vào localStorage/sessionStorage, upload ảnh riêng trước khi submit, optimistic UI, và error recovery để không mất data.',
    explanation:
      'Long form + file upload là UX nightmare nếu không xử lý kỹ: (1) Auto-save draft — dùng debounced save (mỗi 2-3 giây) vào localStorage. Khi user quay lại → detect draft và hỏi "Bạn có muốn tiếp tục form đã lưu?". Implementation: `useEffect` + `debounce` save form state. (2) Upload ảnh tách riêng — khi user chọn ảnh, upload ngay lên S3/Cloudinary và lấy URL. Submit form chỉ gửi URL, không gửi file. Hiển thị progress bar cho upload. (3) Chunked upload cho file lớn — dùng `tus-js-client` hoặc multipart upload, có resume nếu mạng gián đoạn. (4) Submit handling — disable button + show loading state. Nếu fail → giữ nguyên form data, show error message cụ thể, cho retry. KHÔNG clear form khi lỗi. (5) Validation sớm — validate từng field real-time (onBlur), không để user điền 15 fields rồi mới báo lỗi. (6) Network resilience — detect offline (`navigator.onLine`), queue submission khi online lại.',
    tags: ['form', 'upload', 'ux', 'auto-save', 'error-handling'],
    year: 2025,
  },
  {
    id: 'rw-004',
    topic: 'real-world',
    difficulty: 'junior',
    type: 'system-design',
    question:
      'Bạn join dự án mới, codebase có 200+ components, không có documentation. Cách nào để onboard nhanh và hiểu architecture?',
    answer:
      'Đọc package.json, route config, và folder structure trước. Trace 1-2 user flow chính từ UI → component → API. Chạy app và dùng React DevTools.',
    explanation:
      'Onboarding checklist cho codebase lạ: (1) High-level scan: README, package.json (dependencies nói lên nhiều về tech stack), tsconfig, folder structure. (2) Entry points: `main.tsx` → `App.tsx` → router config. Từ router biết được tất cả pages. (3) Pick 1 feature flow: ví dụ "User login" — trace từ Login page component → form submit handler → API call → state update → redirect. Hiểu pattern xong thì các flow khác tương tự. (4) Chạy app locally — click qua các trang, mở React DevTools Components tab xem component tree. Network tab xem API calls. (5) Search patterns: tìm `useEffect`, `fetch/axios` calls, custom hooks → hiểu data flow. (6) Git log — `git log --oneline -50` xem recent changes, ai active nhất. `git log --all --oneline -- src/pages/` xem evolution. (7) Hỏi team: "Feature nào phức tạp nhất?", "Có convention nào unwritten?", "Tech debt nào cần biết?".',
    tags: ['onboarding', 'codebase', 'architecture', 'productivity'],
    year: 2025,
  },
  {
    id: 'rw-005',
    topic: 'real-world',
    difficulty: 'senior',
    type: 'system-design',
    question:
      'App React của team có bundle size 3.5MB (gzipped 900KB). Trang chủ load mất 8 giây trên 4G. PM yêu cầu cải thiện. Bạn approach thế nào?',
    answer:
      'Analyze bundle với webpack-bundle-analyzer, code splitting lazy routes, tree-shake unused deps, optimize images, và implement performance budget.',
    explanation:
      'Bundle size reduction roadmap: (1) Analyze — `npx vite-bundle-visualizer` hoặc `webpack-bundle-analyzer`. Thường thấy: lodash full import (500KB → 70KB với lodash-es cherry-pick), moment.js (300KB → dayjs 2KB), unused UI library components. (2) Quick wins: (a) Dynamic import routes: `React.lazy(() => import("./pages/Dashboard"))`. (b) Replace heavy deps: moment → dayjs, lodash → native JS hoặc lodash-es. (c) Tree-shaking: kiểm tra `sideEffects: false` trong package.json. (d) Remove unused exports với `knip` hoặc `ts-prune`. (3) Images: (a) Dùng WebP/AVIF thay PNG/JPEG. (b) Responsive images với `srcset`. (c) Lazy load below-fold images. (d) CDN with auto-optimization (Cloudinary, imgix). (4) Code splitting beyond routes: heavy components (chart library, editor) load on demand. (5) Performance budget: CI check — nếu bundle > threshold → fail build. Lighthouse CI scores check. (6) Target: First Load JS < 200KB gzipped, LCP < 2.5s, TTI < 3.8s.',
    tags: ['bundle-size', 'performance', 'code-splitting', 'optimization'],
    year: 2025,
  },
  {
    id: 'rw-006',
    topic: 'real-world',
    difficulty: 'mid',
    type: 'system-design',
    question:
      'Dự án e-commerce cần hiển thị danh sách 10,000 sản phẩm. Trang hiện tại load hết 1 lần và bị freeze 3-5 giây. Giải pháp?',
    answer:
      'Dùng virtualization (react-window/tanstack-virtual) chỉ render DOM cho items visible trên viewport, kết hợp pagination hoặc infinite scroll.',
    explanation:
      'Render 10K DOM nodes = browser chết. Giải pháp theo priority: (1) Pagination — đơn giản nhất, UX tốt cho e-commerce (user quen). 20-50 items/page + URL-based page state. Backend paginate với LIMIT/OFFSET hoặc cursor. (2) Infinite scroll — dùng Intersection Observer detect scroll gần cuối → load thêm. Cần `loading` state và "Load more" fallback. (3) Virtualization — khi cần hiện "tất cả" nhưng chỉ render DOM cho ~20-30 items visible: `@tanstack/react-virtual` hoặc `react-window`. Virtual list chỉ mount DOM nodes trong viewport + buffer. Scroll position → tính index → render slice. (4) Kết hợp: API trả 50 items/page + frontend virtual list. (5) Search/filter phía server — đừng load 10K rồi filter client-side. Dùng search API (Elasticsearch/Algolia) hoặc SQL LIKE. (6) Image optimization — sản phẩm có ảnh → lazy load images, placeholder blur, WebP format. (7) Skeleton loading — show placeholder cards trong khi data loading.',
    tags: ['virtualization', 'pagination', 'performance', 'e-commerce', 'large-list'],
    year: 2025,
  },
  // ═══════════════════════════════════════════════════
  // FEATURE DEVELOPMENT (10 questions)
  // ═══════════════════════════════════════════════════
  {
    id: 'rw-007',
    topic: 'real-world',
    difficulty: 'mid',
    type: 'system-design',
    question:
      'PM yêu cầu thêm tính năng Dark Mode cho app đang có. App có 50+ components, dùng inline styles lẫn CSS modules. Approach thế nào để không refactor quá lâu?',
    answer:
      'Dùng CSS custom properties (variables) cho colors, toggle bằng class/attribute trên root element. Migrate dần từ hardcoded colors sang variables.',
    explanation:
      'Dark mode strategy: (1) CSS Variables approach — định nghĩa color palette: `--color-bg`, `--color-text`, `--color-border`, v.v. Trên `:root` set light values, trên `[data-theme="dark"]` set dark values. (2) Migration plan: (a) Phase 1 — tạo variables cho tất cả colors dùng trong app (audit bằng grep). (b) Phase 2 — replace hardcoded colors trong CSS modules → `var(--color-xxx)`. Inline styles phức tạp hơn → tạo utility function hoặc migrate sang CSS modules. (c) Phase 3 — thêm toggle button, persist preference vào localStorage, respect `prefers-color-scheme` OS setting. (3) Testing: Snapshot test cho cả 2 themes, visual regression test (Chromatic/Percy). (4) Gotchas: (a) Images/icons — cần variant cho dark bg hoặc dùng CSS filter. (b) Shadows — dark mode thường dùng subtle glow thay drop shadow. (c) 3rd-party components — kiểm tra có support dark mode không (chart libs, date pickers). (5) TailwindCSS approach: dùng `dark:` variant, toggle class `dark` trên `<html>`.',
    tags: ['dark-mode', 'theming', 'css-variables', 'migration', 'refactoring'],
    year: 2025,
  },
  {
    id: 'rw-008',
    topic: 'real-world',
    difficulty: 'senior',
    type: 'system-design',
    question:
      'Team cần build tính năng Real-time Notification cho app (thông báo đơn hàng, tin nhắn, system alerts). Bạn design architecture thế nào?',
    answer:
      'WebSocket hoặc Server-Sent Events cho real-time delivery, notification center UI với read/unread state, persistence trong DB, và push notification cho mobile/desktop.',
    explanation:
      'Notification system design: (1) Transport layer: (a) WebSocket — bi-directional, dùng khi cần cả send + receive (chat). Socket.io hoặc native WebSocket + reconnect logic. (b) SSE (Server-Sent Events) — unidirectional server→client, đơn giản hơn WS, auto-reconnect built-in, đủ cho notifications. (c) Polling — fallback khi WS/SSE không support (corporate proxy). Long polling giảm latency. (2) Frontend architecture: (a) NotificationProvider (React Context) wrap app → connect WS/SSE on mount. (b) Notification store (Zustand/Redux) — array notifications, unread count, methods: markAsRead, markAllRead, dismiss. (c) UI: bell icon + badge count trên header, dropdown panel với notification list, toast popup cho new notifications. (d) Sound/vibration cho important notifications (permission required). (3) Backend: notification service → publish to Redis Pub/Sub → WS server broadcast. Persist to DB for history. (4) Push notifications: Service Worker + Web Push API cho desktop. Firebase Cloud Messaging cho mobile. (5) Phân loại: urgent (order status) → toast + sound, normal (promotion) → badge only, silent (analytics) → chỉ log.',
    tags: ['real-time', 'websocket', 'notifications', 'architecture', 'sse'],
    year: 2025,
  },
  {
    id: 'rw-009',
    topic: 'real-world',
    difficulty: 'mid',
    type: 'system-design',
    question:
      'App cần tính năng tìm kiếm sản phẩm với autocomplete suggestions, filter theo category, sort theo giá/rating, và highlight matched text. Bạn implement thế nào?',
    answer:
      'Debounced search input, server-side search API, cache recent results, highlight matched text client-side, và URL-based filter state cho shareable links.',
    explanation:
      'Search UX & implementation: (1) Input handling: (a) Debounce 300ms — không gọi API mỗi keystroke. (b) Min 2-3 ký tự mới trigger search. (c) Cancel previous request khi user tiếp tục gõ (AbortController). (2) Autocomplete: (a) API endpoint `/api/search/suggest?q=xxx` trả top 5-10 suggestions. (b) Keyboard navigation: arrow up/down, Enter select, Escape close. (c) Recent searches lưu localStorage. (d) Combobox pattern (WAI-ARIA) cho accessibility. (3) Search results: (a) Server-side search (Elasticsearch, Algolia, hoặc PostgreSQL full-text search). (b) Highlight matched text: wrap match trong `<mark>` tag — `text.replace(new RegExp(query, "gi"), "<mark>$&</mark>")`. Sanitize input trước! (c) Filter + Sort: URL params `?q=laptop&category=electronics&sort=price_asc` — dùng useSearchParams. User share link được. (4) Performance: (a) Cache search results (React Query staleTime: 60s). (b) Skeleton loading cho results. (c) "No results" state với suggestions: check spelling, try broader terms. (5) Analytics: log search queries, click-through, zero-result queries → improve search quality.',
    tags: ['search', 'autocomplete', 'debounce', 'filtering', 'ux'],
    year: 2025,
  },
  {
    id: 'rw-010',
    topic: 'real-world',
    difficulty: 'junior',
    type: 'system-design',
    question:
      'PM muốn thêm tính năng Multi-language (i18n) cho app đang chỉ có tiếng Anh. App có khoảng 30 trang. Bạn plan thế nào?',
    answer:
      'Dùng react-i18next, extract tất cả hardcoded strings thành translation keys, tổ chức file locale theo namespace, và persist language preference.',
    explanation:
      'i18n implementation plan: (1) Setup: `npm install react-i18next i18next`. Config fallback language, detection (URL/localStorage/browser). (2) Extract strings: cách hiệu quả nhất — grep tất cả JSX text content, replace bằng `t("key")`. Tổ chức keys theo feature/page: `home.title`, `cart.checkout`, `auth.login`. (3) File structure: `/locales/en/common.json`, `/locales/vi/common.json`. Có thể split theo namespace: common, auth, product, v.v. (4) Dynamic content: `t("items", { count: 5 })` → "5 items" / "5 sản phẩm". Pluralization rules khác nhau mỗi ngôn ngữ. (5) Date/Number formatting: dùng `Intl.DateTimeFormat`, `Intl.NumberFormat` với locale. Tiền VND vs USD format khác nhau. (6) RTL support: nếu cần Arabic/Hebrew, dùng CSS logical properties (`margin-inline-start` thay `margin-left`). (7) Gotchas: (a) Text length thay đổi → layout phải flexible. (b) Font support cho CJK, Thai. (c) Image có text hardcoded → cần bản dịch. (d) SEO — hreflang tags, URL prefix `/en/`, `/vi/`.',
    tags: ['i18n', 'internationalization', 'react-i18next', 'localization'],
    year: 2025,
  },
  {
    id: 'rw-011',
    topic: 'real-world',
    difficulty: 'senior',
    type: 'system-design',
    question:
      'Team build dashboard admin có bảng dữ liệu phức tạp: 50 columns, 100K rows, sort/filter/search, inline edit, column resize, row selection, export CSV. Bạn chọn approach nào?',
    answer:
      'Dùng TanStack Table (headless) + virtualization cho rendering. Server-side sort/filter/paginate. Chunked export cho large dataset.',
    explanation:
      'Complex data table architecture: (1) Library choice: TanStack Table (headless, full-featured) + custom UI. KHÔNG dùng Material UI DataGrid hay AG Grid trừ khi budget cho license. (2) Data strategy — 100K rows KHÔNG load hết client-side: (a) Server-side pagination: 50 rows/page. (b) Server-side sorting & filtering: SQL ORDER BY, WHERE clause. (c) API: `GET /api/data?page=1&limit=50&sort=name:asc&filter[status]=active`. (3) Virtualization — `@tanstack/react-virtual` cho visible rows only. Column virtualization nếu 50 columns overflow viewport. (4) Inline edit: (a) Click cell → switch to input. (b) Optimistic update → PATCH API → rollback if fail. (c) Debounce saves, batch multiple edits. (5) Column resize: CSS `resize` trên th + drag handler lưu widths vào localStorage. (6) Row selection: checkbox column, select all (current page vs all pages — clarify UX). (7) Export: (a) < 10K rows: client-side CSV generation. (b) > 10K: server generate CSV, return download URL. Stream chunks nếu quá lớn. (8) Performance: React.memo cho Cell components, useMemo cho sorted/filtered data.',
    tags: ['data-table', 'tanstack-table', 'admin-dashboard', 'virtualization', 'large-data'],
    year: 2025,
  },
  {
    id: 'rw-012',
    topic: 'real-world',
    difficulty: 'mid',
    type: 'system-design',
    question:
      'App có tính năng upload và crop ảnh avatar. User upload ảnh 10MB, crop xong gửi lên server. Trên mobile rất chậm. Bạn optimize thế nào?',
    answer:
      'Resize ảnh client-side trước khi crop (Canvas API), compress sang JPEG quality 80%, limit kích thước, và show progress indicator.',
    explanation:
      'Image upload optimization: (1) Client-side resize — avatar chỉ cần max 500x500px. Dùng Canvas API resize ảnh 4000x3000 → 500x500 trước khi crop. File từ 10MB → ~50KB. Code: `const canvas = document.createElement("canvas"); canvas.width = 500; ctx.drawImage(img, 0, 0, 500, 500); canvas.toBlob(callback, "image/jpeg", 0.8)`. (2) Crop library: `react-easy-crop` hoặc `react-image-crop` — nhẹ, touch-friendly. Output crop area → dùng Canvas cắt. (3) Compression: JPEG quality 0.8 là sweet spot (giảm 70% size, mắt thường không thấy khác). WebP nếu browser support. (4) Upload UX: (a) Show preview ngay khi chọn file (URL.createObjectURL). (b) Progress bar khi upload (XMLHttpRequest.upload.onprogress hoặc fetch + ReadableStream). (c) Placeholder blur hash trong khi ảnh đang process. (5) Validation: max file size (5MB), accepted types (JPEG, PNG, WebP), min dimensions. Show error ngay khi chọn file sai. (6) Server: accept pre-resized image, generate thêm thumbnails nếu cần (sharp library).',
    tags: ['image-upload', 'crop', 'canvas', 'optimization', 'mobile'],
    year: 2025,
  },
  // ═══════════════════════════════════════════════════
  // TEAM COLLABORATION & PROCESS (10 questions)
  // ═══════════════════════════════════════════════════
  {
    id: 'rw-013',
    topic: 'real-world',
    difficulty: 'mid',
    type: 'system-design',
    question:
      'Team có 5 FE devs cùng work trên 1 repo. Merge conflict xảy ra liên tục, code style không thống nhất, PR review mất 2-3 ngày. Cải thiện thế nào?',
    answer:
      'ESLint + Prettier + husky pre-commit hooks, feature branch strategy, PR size limit, CODEOWNERS file, và CI automated checks.',
    explanation:
      'Team workflow optimization: (1) Code consistency: (a) ESLint + Prettier — chạy trên pre-commit hook (husky + lint-staged). Không ai có thể commit code sai format. (b) Shared .editorconfig, tsconfig strict mode. (c) Component naming convention, folder structure convention — document trong CONTRIBUTING.md. (2) Branching strategy: (a) Feature branches từ `develop`. Short-lived — max 2-3 ngày. (b) Rebase trước khi tạo PR (`git pull --rebase origin develop`). (c) Trunk-based development nếu team mature: feature flags thay long-lived branches. (3) PR culture: (a) Small PRs — max 300 lines changed. Dễ review, ít conflict. (b) PR template: What/Why/How/Testing. (c) CODEOWNERS — auto-assign reviewer theo folder (FE lead review shared components, domain expert review feature code). (d) CI checks phải pass trước khi review: lint, type-check, tests, build. (e) 24h SLA cho review — nếu quá → escalate. (4) Reduce conflicts: (a) Tách feature folders (team A owns /features/checkout, team B owns /features/catalog). (b) Shared components có stricter review. (c) Communicate trước khi refactor shared code.',
    tags: ['team-workflow', 'git', 'code-review', 'collaboration', 'ci-cd'],
    year: 2025,
  },
  {
    id: 'rw-014',
    topic: 'real-world',
    difficulty: 'senior',
    type: 'system-design',
    question:
      'Bạn được giao lead migration từ Create React App (CRA) sang Vite cho dự án 2 năm tuổi. CRA đã deprecated, build mất 5 phút. Plan migration thế nào?',
    answer:
      'Migration incremental: setup Vite song song, migrate config (env vars, aliases, proxy), fix import issues, test thoroughly, rồi switch entry point.',
    explanation:
      'CRA → Vite migration plan: (1) Pre-migration audit: (a) List tất cả CRA-specific features đang dùng: env vars (REACT_APP_ prefix), proxy config, custom babel plugins, jest config. (b) Check dependencies compatibility với Vite/ESM. (2) Step-by-step: (a) Install Vite + @vitejs/plugin-react. (b) Tạo vite.config.ts: port, resolve aliases, proxy. (c) Move `public/index.html` → `index.html` ở root, thêm `<script type="module" src="/src/main.tsx">`. (d) Env vars: `REACT_APP_*` → `VITE_*`. Update tất cả `process.env.REACT_APP_X` → `import.meta.env.VITE_X`. (e) Fix relative imports, `require()` → `import`. (f) SVG imports: CRA dùng SVGR built-in → install vite-plugin-svgr. (g) CSS Modules: works out of box. CSS imports khác OK. (3) Testing: Vitest thay Jest — API gần giống, migration dễ. (4) Gotchas: (a) CommonJS dependencies — Vite cần ESM. Dùng `optimizeDeps.include` cho problematic packages. (b) Global polyfills (Buffer, process) — cần vite plugin. (c) Absolute imports — config resolve.alias. (5) Rollout: chạy cả 2 build systems song song 1 sprint, so sánh output, rồi remove CRA.',
    tags: ['migration', 'vite', 'cra', 'build-tools', 'refactoring'],
    year: 2025,
  },
  {
    id: 'rw-015',
    topic: 'real-world',
    difficulty: 'junior',
    type: 'system-design',
    question:
      'Bạn nhận task "Implement login page". Figma design có sẵn. Bạn plan implementation thế nào trước khi code?',
    answer:
      'Phân tích Figma design, list components cần tạo, xác định API endpoints, validation rules, error states, loading states, rồi chia task nhỏ.',
    explanation:
      'Implementation planning cho feature mới: (1) Analyze Figma: (a) Identify components: Input fields (email, password), Submit button, Social login buttons, "Forgot password" link, Error messages. (b) States: default, focused, error, loading, disabled. (c) Responsive: mobile vs desktop layout. (d) Animations/transitions. (2) API requirements: (a) POST /api/auth/login — request body, response format, error codes. (b) Token handling: JWT? Cookie? Refresh token flow? (c) Social login: OAuth flow, redirect URLs. (3) Validation: (a) Email format (regex hoặc dùng Zod). (b) Password: min length, requirements. (c) Show error inline per field vs form-level error. (4) Task breakdown: (a) Create LoginPage component + route. (b) Build form UI matching Figma. (c) Add form validation (react-hook-form + zod). (d) Integrate login API. (e) Handle success → redirect + store token. (f) Handle errors → show messages. (g) Add loading state. (h) Social login buttons (if in scope). (i) Write tests. (5) Estimate: mỗi sub-task ước lượng riêng. Tổng thường 2-3 ngày cho login page full-featured.',
    tags: ['planning', 'implementation', 'figma', 'login', 'task-breakdown'],
    year: 2025,
  },
  {
    id: 'rw-016',
    topic: 'real-world',
    difficulty: 'mid',
    type: 'system-design',
    question:
      'App SPA không có SSR gặp vấn đề SEO — Google không index content dynamic. Nhưng rewrite sang Next.js quá tốn kém. Giải pháp khả thi?',
    answer:
      'Pre-rendering (prerender.io hoặc react-snap), dynamic rendering cho bots, meta tags với react-helmet, và sitemap.xml.',
    explanation:
      'SEO cho SPA không cần rewrite: (1) Pre-rendering service: (a) prerender.io — middleware detect bot User-Agent → serve pre-rendered HTML. Cost thấp, setup nhanh. (b) react-snap — build time pre-render static HTML cho mỗi route. Zero cost nhưng chỉ cho static content. (c) Puppeteer-based: self-host pre-render service. (2) Meta tags: react-helmet-async — set title, description, OG tags per page. Quan trọng cho social sharing preview. (3) Technical SEO: (a) sitemap.xml — list tất cả public URLs. Auto-generate từ route config. (b) robots.txt — allow Googlebot. (c) Canonical URLs — tránh duplicate content. (d) Structured data (JSON-LD) — product schema, article schema. (4) Google hiện nay render JS khá tốt, nhưng: (a) Render budget limited — trang nặng có thể bị skip. (b) Dynamic content load chậm có thể bị miss. (c) Client-side routing cần proper `<link rel="canonical">`. (5) Hybrid approach: landing pages/marketing pages dùng static HTML (Astro/11ty), app phần sau login giữ SPA. (6) Long-term: evaluate Next.js migration cho pages cần SEO, giữ SPA cho app authenticated.',
    tags: ['seo', 'spa', 'pre-rendering', 'meta-tags', 'google-indexing'],
    year: 2025,
  },
  {
    id: 'rw-017',
    topic: 'real-world',
    difficulty: 'senior',
    type: 'system-design',
    question:
      'Dự án cần hiển thị dữ liệu real-time: bảng giá crypto update mỗi giây, biểu đồ live, 50 concurrent users. Bạn design frontend architecture thế nào?',
    answer:
      'WebSocket connection với reconnect logic, throttle UI updates (requestAnimationFrame), virtualized table, và canvas-based chart thay SVG.',
    explanation:
      'Real-time data dashboard: (1) Data transport: WebSocket cho bi-directional, low-latency. Reconnect logic: exponential backoff, max retries, offline indicator. Server gửi delta updates (chỉ data thay đổi, không full snapshot mỗi lần). (2) State management: (a) Shared WebSocket connection (singleton). (b) State buffer — accumulate updates, flush to UI mỗi 100ms (không update DOM mỗi message). (c) Ring buffer cho historical data (giữ 1000 data points, drop oldest). (3) UI rendering: (a) Table: TanStack Table + virtualization. Chỉ re-render rows có data thay đổi (React.memo + custom comparison). (b) Chart: Canvas-based (lightweight-charts, uPlot) thay SVG (Recharts, D3 SVG). SVG với 10K data points lag, Canvas smooth. (c) requestAnimationFrame batching — queue state updates, apply trong rAF callback. (4) Memory management: (a) Unsubscribe khi component unmount. (b) Cap data arrays. (c) Web Worker cho data processing nặng (sort 10K items). (5) Performance monitoring: PerformanceObserver track Long Tasks, alert nếu UI thread blocked > 50ms. (6) Fallback: SSE hoặc polling 5s cho browsers/networks chặn WebSocket.',
    tags: ['real-time', 'websocket', 'dashboard', 'canvas', 'performance'],
    year: 2025,
  },
  {
    id: 'rw-018',
    topic: 'real-world',
    difficulty: 'mid',
    type: 'system-design',
    question:
      'User report: "Tôi đang điền form dở, lỡ tay bấm Back trên browser, mất hết data". PM muốn prevent hoặc warn user. Bạn implement thế nào?',
    answer:
      'Dùng beforeunload event, React Router blocker/prompt, auto-save draft, và confirm dialog khi có unsaved changes.',
    explanation:
      'Unsaved changes protection: (1) Browser back/close — `beforeunload` event: `window.addEventListener("beforeunload", (e) => { if (hasUnsavedChanges) { e.preventDefault(); e.returnValue = ""; } })`. Browser sẽ show native confirm dialog. KHÔNG custom message được (security). (2) React Router navigation — v6.4+: `useBlocker()` hook detect khi user navigate away. Show custom modal: "Bạn có thay đổi chưa lưu. Rời khỏi trang?". `unstable_useBlocker((tx) => hasChanges)`. (3) Auto-save draft (recommended): (a) Debounced save form state vào localStorage mỗi 2s. (b) Khi user quay lại → detect draft, ask "Khôi phục bản nháp?". (c) Clear draft khi submit thành công. (4) Implementation pattern: custom hook `useUnsavedChanges(isDirty: boolean)` — handles cả beforeunload + router blocking. (5) UX considerations: (a) Indicator "Unsaved changes" nhỏ ở corner. (b) Auto-save thì show "Draft saved" timestamp. (c) Đừng block navigation nếu form empty (chưa điền gì). (6) Mobile: swipe-back gesture trên iOS cũng trigger — beforeunload handle được.',
    tags: ['form', 'unsaved-changes', 'beforeunload', 'ux', 'navigation-guard'],
    year: 2025,
  },
  {
    id: 'rw-019',
    topic: 'real-world',
    difficulty: 'junior',
    type: 'system-design',
    question:
      'Website hiển thị tốt trên laptop nhưng trên mobile text quá nhỏ, button bấm không được, layout bể. Bạn fix responsive thế nào?',
    answer:
      'Mobile-first approach: viewport meta tag, responsive breakpoints, flexible layouts (flexbox/grid), touch-friendly sizes, và test trên device thật.',
    explanation:
      'Responsive design checklist: (1) Foundation: (a) `<meta name="viewport" content="width=device-width, initial-scale=1">` — BẮT BUỘC. Thiếu tag này → mobile zoom out toàn trang. (b) CSS Reset — `* { box-sizing: border-box; }`. (2) Layout: (a) Mobile-first: viết CSS cho mobile trước, dùng `@media (min-width: 768px)` cho tablet/desktop. (b) Flexbox wrap: `flex-wrap: wrap` cho items tự xuống dòng. (c) Grid: `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))` — auto-responsive. (d) Max-width container: `max-width: 1200px; margin: 0 auto; padding: 0 16px`. (3) Typography: (a) Base font-size 16px (browser default). Đừng set nhỏ hơn 14px trên mobile. (b) `clamp(1rem, 2vw, 1.5rem)` cho fluid typography. (4) Touch targets: (a) Min 44x44px cho buttons (Apple HIG). (b) Padding đủ giữa các interactive elements. (c) Hover states → thêm active/focus states cho mobile. (5) Images: `max-width: 100%; height: auto` prevent overflow. (6) Testing: Chrome DevTools Device Mode, nhưng PHẢI test trên device thật — scroll behavior, keyboard, touch rất khác.',
    tags: ['responsive', 'mobile', 'css', 'layout', 'touch'],
    year: 2025,
  },
  {
    id: 'rw-020',
    topic: 'real-world',
    difficulty: 'senior',
    type: 'system-design',
    question:
      'Hệ thống có 3 apps (customer web, admin dashboard, mobile web) dùng chung nhiều components và business logic. Hiện copy-paste giữa các repo. Bạn tổ chức lại thế nào?',
    answer:
      'Monorepo (Turborepo/Nx) với shared packages: ui-components, utils, types, API client. Publish internal npm packages hoặc workspace references.',
    explanation:
      'Shared code architecture: (1) Monorepo setup: (a) Turborepo — simple, fast, works great với Next.js/Vite. (b) Nx — powerful, plugin ecosystem, nhưng learning curve cao. (c) pnpm workspaces — lightweight, chỉ cần dependency management. (2) Package structure: `/packages/ui` — shared components (Button, Input, Modal, Table). `/packages/utils` — shared utilities (formatDate, formatCurrency, validation). `/packages/types` — shared TypeScript types. `/packages/api-client` — API client + hooks (useAuth, useProducts). `/apps/customer-web`, `/apps/admin`, `/apps/mobile-web`. (3) Versioning: (a) Internal packages: workspace protocol (`"@acme/ui": "workspace:*"`). No publishing needed. (b) External: publish to private npm registry (GitHub Packages, Verdaccio) nếu multi-repo. (4) Build: Turborepo cache — chỉ rebuild package thay đổi. CI chạy `turbo run build --filter=...affected`. (5) Gotchas: (a) Shared components phải flexible — customer vs admin cần styling khác → dùng variants/themes. (b) Breaking changes ảnh hưởng 3 apps — cần semver discipline. (c) Testing: shared packages test riêng + integration test ở mỗi app. (6) Migration: extract shared code dần — bắt đầu từ types → utils → UI components.',
    tags: ['monorepo', 'turborepo', 'shared-packages', 'architecture', 'code-reuse'],
    year: 2025,
  },
  // ═══════════════════════════════════════════════════
  // DEPLOYMENT & DEVOPS FOR FRONTEND (5 questions)
  // ═══════════════════════════════════════════════════
  {
    id: 'rw-021',
    topic: 'real-world',
    difficulty: 'mid',
    type: 'system-design',
    question:
      'Deploy xong version mới, phát hiện bug critical. Cần rollback ngay. Nhưng team chưa có rollback strategy. Bạn xử lý thế nào và setup prevention?',
    answer:
      'Immediate: revert commit và redeploy hoặc point CDN về build cũ. Prevention: immutable deployments, keep N previous builds, one-click rollback.',
    explanation:
      'Rollback strategy: (1) Immediate action: (a) Nếu dùng Vercel/Netlify → vào dashboard, click "Redeploy" trên previous deployment. Done trong 30 giây. (b) Self-hosted: giữ N previous builds trên server, symlink switch: `ln -sf /builds/v1.2.3 /var/www/current`. (c) Docker: `docker run image:previous-tag`. (d) Git revert: `git revert HEAD && git push` → trigger CI/CD build lại version cũ. (2) Prevention setup: (a) Immutable deployments — mỗi deploy tạo new URL (Vercel preview), production chỉ là pointer. (b) Feature flags — new feature behind flag → disable flag instead of rollback code. LaunchDarkly, Unleash, hoặc simple JSON config. (c) Canary deployment — deploy cho 5% users trước, monitor error rate, rồi mới 100%. (d) Health checks — CI chạy smoke test sau deploy, auto-rollback nếu fail. (3) Monitoring: (a) Sentry error rate alert. (b) Synthetic monitoring (Checkly, Datadog) ping critical paths mỗi phút. (c) Real User Monitoring dashboard — LCP, error rate spike → auto-alert Slack. (4) Runbook document: step-by-step rollback procedure, ai có quyền deploy, escalation contacts.',
    tags: ['deployment', 'rollback', 'ci-cd', 'devops', 'feature-flags'],
    year: 2025,
  },
  {
    id: 'rw-022',
    topic: 'real-world',
    difficulty: 'mid',
    type: 'system-design',
    question:
      'Website bị report "không an toàn" bởi security audit: XSS vulnerability ở search page, missing CSP headers, và API tokens trong client-side code. Fix thế nào?',
    answer:
      'Sanitize user input trước khi render, implement Content Security Policy headers, move sensitive tokens sang server-side, và audit dependencies.',
    explanation:
      'Frontend security hardening: (1) XSS fix: (a) KHÔNG dùng `dangerouslySetInnerHTML` với user input. (b) Search page: escape query trước khi render — React auto-escapes JSX nhưng kiểm tra nếu có `innerHTML` hoặc `document.write`. (c) URL params: validate trước khi dùng (`encodeURIComponent`). (d) DOMPurify cho rich text content bắt buộc phải render HTML. (2) CSP headers: (a) `Content-Security-Policy: default-src \'self\'; script-src \'self\'; style-src \'self\' \'unsafe-inline\'; img-src \'self\' data: https:`. (b) Loại bỏ `unsafe-eval` (block eval, new Function). (c) Nonce-based CSP cho inline scripts cần thiết. (d) Report-only mode trước (`Content-Security-Policy-Report-Only`) → fix violations → enforce. (3) Tokens: (a) API keys ở `.env` + VITE_ prefix vẫn leak trong bundle! (b) Sensitive keys → server-side API route proxy. Client gọi `/api/proxy/weather` → server attach API key. (c) Auth token: HttpOnly cookie, KHÔNG localStorage (XSS steal được). (4) Dependency audit: `npm audit`, Snyk, Dependabot alerts. Fix critical/high ngay.',
    tags: ['security', 'xss', 'csp', 'tokens', 'audit'],
    year: 2025,
  },
  {
    id: 'rw-023',
    topic: 'real-world',
    difficulty: 'junior',
    type: 'system-design',
    question:
      'CI/CD pipeline chạy 20 phút mỗi PR (lint, type-check, test, build, deploy preview). Developer phàn nàn chậm quá. Optimize thế nào?',
    answer:
      'Cache dependencies và build output, parallel jobs, chỉ chạy affected tests, skip unnecessary steps cho draft PRs.',
    explanation:
      'CI/CD optimization: (1) Caching: (a) Cache node_modules — hash `package-lock.json` làm cache key. Restore cache → skip `npm install` (save 1-3 min). (b) Cache build output (.next, dist) — incremental build. (c) Cache ESLint, TypeScript (.tsbuildinfo). (2) Parallelism: (a) Chạy lint, type-check, test đồng thời (3 parallel jobs thay sequential). (b) Test sharding — split test files ra N workers. (3) Selective execution: (a) Chỉ chạy test cho files changed: `vitest --changed HEAD~1`. (b) Skip build cho documentation-only changes (detect path filter). (c) Draft PRs: chạy lint + type-check only, skip deploy preview. (4) Faster tools: (a) pnpm thay npm (faster install). (b) Vitest thay Jest (faster execution). (c) SWC/esbuild thay Babel (faster transpilation). (d) Turborepo cache — remote cache share giữa CI runs. (5) Deploy preview: chỉ build khi PR ready for review. (6) Metrics: track CI duration per step, set alert nếu > threshold. Target: < 5 min cho feedback loop.',
    tags: ['ci-cd', 'github-actions', 'optimization', 'caching', 'pipeline'],
    year: 2025,
  },
  // ═══════════════════════════════════════════════════
  // COMPLEX UI PATTERNS (5 questions)
  // ═══════════════════════════════════════════════════
  {
    id: 'rw-024',
    topic: 'real-world',
    difficulty: 'mid',
    type: 'system-design',
    question:
      'App cần tính năng Drag & Drop: user kéo thả items giữa các columns (Kanban board), reorder within column, và persist thứ tự. Bạn implement thế nào?',
    answer:
      'Dùng @dnd-kit library (accessible, performant), optimistic reorder UI, debounced persist order lên server, và touch support cho mobile.',
    explanation:
      'Drag & Drop implementation: (1) Library choice: @dnd-kit — modern, accessible, tree-shakeable. Alternatives: react-beautiful-dnd (deprecated), pragmatic-drag-and-drop (Atlassian). (2) Architecture: (a) DndContext provider wrap Kanban board. (b) Column = SortableContext (vertical sorting). (c) Item = useSortable hook — handle, listeners, transform. (d) DragOverlay cho visual feedback khi dragging. (3) State management: (a) Columns state: `Record<string, Item[]>`. (b) onDragEnd: tính toán source/destination column + index. (c) Move item: splice from source, splice into destination. (d) Optimistic update UI → PATCH API `/api/boards/:id/reorder` → rollback nếu fail. (4) Persistence: (a) Mỗi item có `order` field (integer). (b) Sau reorder: debounce 500ms rồi gửi new order array. (c) Fractional indexing: thay vì reindex tất cả, dùng giá trị giữa 2 items (1.5 giữa 1 và 2). (5) Mobile/Touch: @dnd-kit hỗ trợ PointerSensor + TouchSensor built-in. Long press để activate drag (avoid scroll conflict). (6) Accessibility: keyboard drag (Space activate, Arrow move, Space drop). Screen reader announcements.',
    tags: ['drag-drop', 'kanban', 'dnd-kit', 'reorder', 'accessibility'],
    year: 2025,
  },
  {
    id: 'rw-025',
    topic: 'real-world',
    difficulty: 'senior',
    type: 'system-design',
    question:
      'App cần hỗ trợ offline: user có thể xem data đã load, tạo/edit records khi mất mạng, và sync khi online lại. Approach?',
    answer:
      'Service Worker + Cache API cho static assets, IndexedDB cho data storage, background sync queue cho pending mutations, conflict resolution strategy.',
    explanation:
      'Offline-first architecture: (1) Static assets: Service Worker (Workbox) cache JS/CSS/HTML. Strategies: Cache-first cho assets, Network-first cho API. (2) Data storage: (a) IndexedDB (via Dexie.js hoặc idb) — structured data, large capacity. (b) Cache read data: khi online fetch API → store vào IndexedDB → UI reads from IndexedDB. (c) Khi offline → IndexedDB serve data, UI vẫn hiển thị. (3) Offline mutations: (a) User create/edit → write vào IndexedDB "outbox" queue. (b) UI update optimistically. (c) Background Sync API: khi online lại → replay queue. (d) Fallback: `navigator.onLine` + online event → flush queue. (4) Conflict resolution: (a) Last-write-wins: server timestamp. Simple nhưng có thể mất data. (b) Merge: field-level diff → merge non-conflicting changes. (c) User resolve: show conflict UI khi detect. (5) UX indicators: (a) Offline banner: "Bạn đang offline. Thay đổi sẽ được đồng bộ khi có mạng." (b) Pending sync badge: "3 thay đổi chờ đồng bộ". (c) Sync success notification. (6) Testing: Chrome DevTools Network tab → Offline checkbox. Playwright setOffline(true).',
    tags: ['offline', 'service-worker', 'indexeddb', 'sync', 'pwa'],
    year: 2025,
  },
  {
    id: 'rw-026',
    topic: 'real-world',
    difficulty: 'mid',
    type: 'system-design',
    question:
      'PM yêu cầu tính năng Undo/Redo cho text editor trong app. User có thể undo tối đa 50 bước. Bạn implement thế nào?',
    answer:
      'Command pattern với 2 stacks (undo stack + redo stack). Mỗi action push vào undo stack. Undo → pop undo, push redo. Redo → pop redo, push undo.',
    explanation:
      'Undo/Redo implementation: (1) Command Pattern: (a) Mỗi action là object: `{ type: "insert", data: "hello", position: 5, timestamp }`. (b) Undo stack: push mỗi action. Max 50 items (shift oldest khi overflow). (c) Redo stack: push khi undo. Clear khi user thực hiện action mới (branch history). (2) State-based approach (simpler): (a) Snapshot full state mỗi lần thay đổi. (b) Undo = restore previous snapshot. (c) Pro: simple. Con: memory nếu state lớn. (d) Optimization: store diffs thay full snapshots (immer patches). (3) Immer integration: `produce(state, draft => { ... })` trả về patches. Store patches array. Apply/reverse patches cho undo/redo. (4) React implementation: custom hook `useUndoRedo<T>(initialState)` trả về `{ state, setState, undo, redo, canUndo, canRedo }`. (5) Keyboard shortcuts: `Ctrl+Z` undo, `Ctrl+Shift+Z` hoặc `Ctrl+Y` redo. `useEffect` + keydown listener. (6) UX: (a) Disable undo button khi stack empty. (b) Tooltip "Undo: delete text" mô tả action. (c) Batch rapid changes (typing) thành 1 undo step — debounce 500ms.',
    tags: ['undo-redo', 'command-pattern', 'editor', 'state-management', 'immer'],
    year: 2025,
  },
  {
    id: 'rw-027',
    topic: 'real-world',
    difficulty: 'senior',
    type: 'system-design',
    question:
      'App có chức năng payment integration: user nhập thẻ, xử lý thanh toán qua Stripe/VNPay. Bạn cần đảm bảo security và UX tốt. Approach?',
    answer:
      'KHÔNG xử lý card data trực tiếp — dùng Stripe Elements/VNPay SDK (iframe tokenization), server-side payment intent, SCA compliance, và retry logic.',
    explanation:
      'Payment integration best practices: (1) QUAN TRỌNG NHẤT: KHÔNG BAO GIỜ handle raw card data ở frontend/backend. Dùng tokenization: (a) Stripe Elements — embedded iframe render card input. User nhập thẻ trong Stripe iframe → token sent to your server → charge via Stripe API. PCI DSS compliant tự động. (b) VNPay — redirect user sang VNPay gateway, callback về app sau khi thanh toán. (2) Flow: Client create PaymentIntent (server) → Stripe returns client_secret → Stripe.js confirmPayment with client_secret → Stripe handles 3D Secure → webhook confirms payment → update order. (3) UX: (a) Real-time card validation (Stripe Elements tự handle). (b) Loading state rõ ràng — "Đang xử lý thanh toán..." (c) Error messages cụ thể: card declined, insufficient funds, expired. (d) Idempotency key — prevent double charge khi user click 2 lần. (e) Disable submit button after first click. (4) Security: (a) HTTPS only (dĩ nhiên). (b) CSP header allow Stripe iframe. (c) Server-side amount validation — KHÔNG trust client-side price. (d) Webhook signature verification. (5) Testing: Stripe test mode + test card numbers. VNPay sandbox environment.',
    tags: ['payment', 'stripe', 'vnpay', 'security', 'pci-dss'],
    year: 2025,
  },
  {
    id: 'rw-028',
    topic: 'real-world',
    difficulty: 'mid',
    type: 'system-design',
    question:
      'App cần hiển thị danh sách chat messages (như Slack/Zalo). Tin nhắn mới xuất hiện ở dưới, scroll lên xem tin cũ (infinite scroll ngược), và auto-scroll xuống khi có tin mới. Implement thế nào?',
    answer:
      'Reverse infinite scroll (load older khi scroll lên top), auto-scroll xuống cho new messages (trừ khi user đang scroll lên đọc), virtualized list cho performance.',
    explanation:
      'Chat UI implementation: (1) Reverse infinite scroll: (a) Initial load: fetch 50 messages mới nhất. Scroll xuống bottom. (b) Scroll lên top → load 50 messages cũ hơn (cursor-based pagination: `before=oldest_message_id`). (c) Giữ scroll position khi prepend old messages — lưu scrollHeight trước khi insert, sau insert: `scrollTop = newScrollHeight - oldScrollHeight`. (2) Auto-scroll: (a) New message arrive → auto-scroll xuống NẾU user đang ở bottom (tolerance 100px). (b) Nếu user đang scroll lên đọc tin cũ → KHÔNG auto-scroll. Show badge "3 tin nhắn mới ↓" — click to scroll down. (c) Detect "at bottom": `scrollHeight - scrollTop - clientHeight < 100`. (3) Virtualization: react-virtuoso — built-in support cho reverse list, auto-scroll, prepend items giữ position. Recommended cho chat. (4) Real-time: WebSocket nhận new messages → append to state → auto-scroll check. (5) UX details: (a) Date separators: "Hôm nay", "Hôm qua", "15/03". (b) Read receipts, typing indicator. (c) Message grouping: consecutive messages cùng sender → compact layout. (d) Image/file preview inline. (6) Performance: memoize message components, lazy load images/embeds.',
    tags: ['chat', 'infinite-scroll', 'virtualization', 'real-time', 'websocket'],
    year: 2025,
  },
  {
    id: 'rw-029',
    topic: 'real-world',
    difficulty: 'junior',
    type: 'system-design',
    question:
      'Bạn phát triển tính năng hiển thị danh sách sản phẩm với skeleton loading. Nhưng thỉnh thoảng skeleton flash rất nhanh (100ms) rồi biến mất, trông rất giật. Fix thế nào?',
    answer:
      'Set minimum display time cho skeleton (ít nhất 300-500ms), dùng CSS transition fade-out, và consider không show skeleton nếu data load < 200ms.',
    explanation:
      'Skeleton loading UX: (1) Vấn đề: nếu API response nhanh (< 200ms), skeleton xuất hiện rồi biến mất ngay → flicker → tệ hơn là không có skeleton. (2) Solutions: (a) Minimum display time — `Promise.all([fetchData(), sleep(300)])`. Skeleton hiển thị ít nhất 300ms dù data load nhanh hơn. (b) Delayed skeleton — chỉ show skeleton sau 200ms delay. Nếu data về trong 200ms → user thấy content ngay, không skeleton. Nếu > 200ms → skeleton appears smoothly. Implementation: `const [showSkeleton, setShowSkeleton] = useState(false); useEffect(() => { const timer = setTimeout(() => setShowSkeleton(true), 200); return () => clearTimeout(timer); }, [])`. (c) Transition: skeleton fade-out → content fade-in. CSS `opacity` transition 150ms. (3) Skeleton design: (a) Match layout thật — skeleton shape giống card/text thật. (b) Subtle pulse animation (Tailwind `animate-pulse`). (c) Consistent colors — dùng `--color-bg-secondary` cho skeleton bg. (4) React Suspense approach: `<Suspense fallback={<Skeleton />}>` — tự động handle loading state.',
    tags: ['skeleton', 'loading', 'ux', 'animation', 'performance-perception'],
    year: 2025,
  },
  {
    id: 'rw-030',
    topic: 'real-world',
    difficulty: 'senior',
    type: 'system-design',
    question:
      'Team quyết định dùng Micro-Frontends cho hệ thống enterprise có 5 team, mỗi team own 1 domain (checkout, catalog, user profile, admin, analytics). Bạn design architecture thế nào?',
    answer:
      'Module Federation (Webpack 5) hoặc Single-SPA cho runtime composition. Shared shell app cho layout/auth, independent deploy per team, shared design system package.',
    explanation:
      'Micro-Frontend architecture: (1) Composition approaches: (a) Build-time: npm packages — simple nhưng deploy coupled. (b) Runtime — Module Federation: apps load remote modules at runtime. Independent deploy. Webpack 5 built-in, Vite plugin available. (c) Single-SPA: orchestrator mount/unmount child apps. Framework-agnostic. (d) iframe: isolation tốt nhất nhưng UX tradeoffs (no shared state, perf). (2) Architecture: Shell app — layout (header, sidebar, footer), routing, auth, shared state. Micro-apps — `/checkout/*` → Checkout team app, `/catalog/*` → Catalog team app. Each app independent repo, CI/CD, tech stack (nhưng nên standardize). (3) Shared concerns: (a) Design system: shared npm package, versioned. (b) Auth: shell handles, passes token to micro-apps. (c) State sharing: Custom Events, shared state library, hoặc URL params. (d) Routing: shell owns top-level routes, micro-app owns sub-routes. (4) Challenges: (a) Duplicate dependencies — share React, router via Module Federation shared config. (b) CSS conflicts — CSS Modules, Shadow DOM, hoặc prefix conventions. (c) Performance — lazy load micro-apps, preload on hover. (d) Testing: integration test ở shell level, unit test per micro-app. (5) When NOT to use: < 3 teams, < 20 devs. Complexity cost too high cho small teams.',
    tags: ['micro-frontends', 'module-federation', 'enterprise', 'architecture', 'team-scaling'],
    year: 2025,
  },
]
