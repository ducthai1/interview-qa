import type { QuestionTranslationMap } from '../types'

export const realWorldScenariosAdvancedVi: QuestionTranslationMap = {
  'rws-031': {
    question: 'CI/CD pipeline chạy 45 phút cho mỗi PR. Developer phàn nàn chờ lâu, merge chậm. Bạn optimize thế nào?',
    answer: 'Parallel jobs, cache dependencies, chỉ chạy tests liên quan đến files thay đổi, tách build/test stages, dùng incremental builds.',
    explanation: 'Optimize CI pipeline: (1) Cache — cache node_modules (npm ci cache), cache build outputs. Giảm install từ 3 phút → 30 giây. (2) Parallelism — chạy lint, unit test, e2e test song song thay vì tuần tự. (3) Affected-only — dùng nx affected hoặc turborepo để chỉ test/build packages thay đổi. (4) Split E2E — E2E tests thường chiếm 70% CI time. Chạy parallel trên nhiều machines. (5) Incremental TypeScript — tsconfig với incremental: true. (6) Kết quả: 45 phút → 10-15 phút.',
  },
  'rws-032': {
    question: 'Environment variables bị lộ trên client-side bundle. Ai đó tìm thấy API key trong source code trên browser. Bạn xử lý thế nào?',
    answer: 'Rotate API key ngay, chuyển sensitive keys sang server-side proxy, chỉ expose public keys qua NEXT_PUBLIC_ hoặc VITE_ prefix.',
    explanation: 'Xử lý lộ API key: (1) Rotate (đổi) API key ngay. (2) Sensitive keys KHÔNG BAO GIỜ ở frontend. Tạo API route/proxy trên server. (3) Public keys cần restrict domain trong provider dashboard. (4) Phòng tránh: naming convention, ESLint rule scan, git-secrets scan commits, .gitignore .env*.',
  },
  'rws-033': {
    question: 'App cần support multi-language (i18n). Có 15 ngôn ngữ, mỗi ngôn ngữ 2000+ translation keys. Bạn kiến trúc thế nào cho hiệu suất?',
    answer: 'Lazy load translations per language, namespace splitting, dùng i18next với backend plugin, cache translations, và ICU message format.',
    explanation: 'Kiến trúc i18n hiệu quả: (1) Lazy load — KHÔNG bundle 15 ngôn ngữ vào initial bundle. (2) Namespace splitting — chia translations thành namespaces: common, auth, dashboard. (3) Type safety — typescript-i18next plugin cho autocomplete keys. (4) Translation management — Crowdin, Lokalise cho translator workflow. (5) RTL support — CSS logical properties.',
  },
  'rws-034': {
    question: 'Một third-party script (analytics, chat widget) làm app chậm đi 3 giây. PM không cho remove vì business cần. Bạn xử lý thế nào?',
    answer: 'Defer/async loading, load sau user interaction, dùng Web Worker hoặc iframe isolation, và measure impact liên tục.',
    explanation: 'Third-party script optimization: (1) Defer loading — setTimeout 3-5 giây. (2) Facade pattern — cho chat widgets: hiển thị fake button, chỉ load real widget khi user click. (3) Partytown — chạy scripts trong Web Worker. (4) Monitor impact với PerformanceObserver. (5) Business case để thay script nhẹ hơn.',
  },
  'rws-035': {
    question: 'App có Error Boundary nhưng khi crash xảy ra, user thấy blank fallback UI không có cách nào recovery. Bạn improve thế nào?',
    answer: 'Error Boundary hiển thị friendly error UI với retry button, report error tự động, và khôi phục partial state.',
    explanation: 'Production-grade Error Boundary: (1) Friendly UI — nút "Thử lại" và "Quay về trang chủ". (2) Granular boundaries — đặt ở nhiều level: route-level, component-level. (3) Auto-report về Sentry. (4) Recovery — resetErrorBoundary() + clear query cache. (5) Error Boundary KHÔNG catch errors trong event handlers, async code.',
  },
  'rws-036': {
    question: 'Design system team ship component library nhưng consumer apps override styles liên tục. CSS conflicts, specificity wars. Bạn giải quyết thế nào?',
    answer: 'CSS Modules hoặc CSS-in-JS cho encapsulation, design tokens cho customization, và clear API contract cho style overrides.',
    explanation: 'Giải quyết CSS conflicts: (1) Encapsulation — CSS Modules, Shadow DOM, hoặc CSS-in-JS. (2) Design tokens — CSS custom properties cho customization. (3) Variant API — component expose props thay vì custom CSS. (4) Không dùng !important. (5) Documentation rõ ràng cho mỗi component.',
  },
  'rws-037': {
    question: 'Table hiển thị 10,000 rows data. Scroll rất giật, DOM quá nặng. Bạn xử lý thế nào mà không pagination?',
    answer: 'Virtualization (windowing) — chỉ render rows visible trong viewport. Dùng @tanstack/react-virtual, react-window, hoặc react-virtuoso.',
    explanation: 'Virtualization cho large lists: (1) Chỉ render ~20 DOM nodes + buffer. (2) Libraries: @tanstack/react-virtual (lightweight), react-virtuoso (auto-height). (3) Variable height — measure DOM sau render, cache measurements. (4) Search/filter trên full dataset, virtualize filtered results. (5) Trade-off: phức tạp hóa accessibility.',
  },
  'rws-038': {
    question: 'Pentest report cho thấy app vulnerable với CSRF attacks. User đã login có thể bị trick thực hiện actions không mong muốn. Bạn fix thế nào?',
    answer: 'Implement CSRF tokens, SameSite cookie attribute, và verify Origin/Referer headers. Cho modern SPAs, SameSite=Lax + custom headers thường đủ.',
    explanation: 'CSRF protection: (1) SameSite cookie — SameSite=Lax ngăn cross-site POST. (2) Custom header — X-Requested-With cần CORS preflight. (3) CSRF token — server generate, client gửi kèm mỗi mutation. (4) Double-submit cookie. (5) Modern SPAs với CORS preflight tự bảo vệ.',
  },
  'rws-039': {
    question: 'User report: ảnh profile upload thành công nhưng hiển thị ảnh cũ cached. Phải Ctrl+F5 mới thấy ảnh mới. Bạn fix thế nào?',
    answer: 'Cache bust bằng query string với timestamp hoặc file hash: img src="/avatar.jpg?v=1709901553". Hoặc dùng unique filename cho mỗi upload.',
    explanation: 'Browser cache issues: (1) Cache bust query string — thêm ?t=timestamp. (2) Unique filename — server trả URL có content hash. (3) Optimistic UI — hiện ảnh mới local bằng URL.createObjectURL(file). (4) CDN purge — invalidate cache cho URL sau upload.',
  },
  'rws-040': {
    question: 'Micro-frontend: team A dùng React 18, team B dùng Vue 3, cần chạy trên cùng 1 page. Framework nào, tradeoffs gì?',
    answer: 'Module Federation (Webpack 5), Single-SPA, hoặc Web Components. Mỗi cách có tradeoffs về isolation, bundle size, và DevX.',
    explanation: 'Micro-frontend strategies: (1) Module Federation — share dependencies, runtime integration. (2) Single-SPA — framework-agnostic orchestrator. (3) Web Components — true isolation với Shadow DOM. (4) iframe — true isolation nhưng UX kém. (5) Chỉ dùng micro-frontend khi team thật sự independent (>= 3 teams).',
  },
  'rws-041': {
    question: 'User report: "Mỗi lần vào trang, font chữ nhảy từ font mặc định sang font đẹp, nhìn rất khó chịu." Đây là vấn đề gì và fix thế nào?',
    answer: 'FOUT (Flash of Unstyled Text) hoặc FOIT (Flash of Invisible Text). Fix: font-display: swap + preload font, hoặc font-display: optional.',
    explanation: 'Font loading: (1) font-display: swap — hiện system font ngay, swap khi ready. (2) font-display: optional — dùng system font nếu chưa cache. (3) Preload font file. (4) Self-host font. (5) Subset cho tiếng Việt giảm file size. (6) size-adjust cho fallback font giảm layout shift.',
  },
  'rws-042': {
    question: 'Dashboard có 10 widgets, mỗi widget fetch API riêng. Page load mất 5 giây vì sequential fetching. Bạn optimize thế nào?',
    answer: 'Parallel fetching với Promise.all/React Query, suspense streaming, preload data, và skeleton UI cho perceived performance.',
    explanation: 'Dashboard optimization: (1) Parallel fetch — React Query fetch song song. (2) Suspense streaming — server stream HTML cho từng widget. (3) Preload data từ page trước. (4) Stale-while-revalidate — show cached data ngay. (5) BFF endpoint aggregate API calls. (6) Skeleton UI cho perceived performance.',
  },
  'rws-043': {
    question: 'User dùng app trên iPhone cũ (iOS Safari). App crash hoặc hiện blank page. Trên Chrome desktop chạy bình thường. Nguyên nhân?',
    answer: 'JS syntax không supported (optional chaining, nullish coalescing), polyfills thiếu, hoặc memory limit trên thiết bị cũ.',
    explanation: 'Mobile Safari compatibility: (1) Syntax errors — check target trong tsconfig/build config. (2) Polyfills — core-js cho modern APIs. (3) Memory — Safari kill tab silently khi hết RAM. (4) Debug — Safari Web Inspector qua mac. (5) Define minimum supported browser matrix.',
  },
  'rws-044': {
    question: 'App có feature undo/redo (giống Google Docs). User thực hiện 50 actions, muốn undo 10 bước rồi redo 3 bước. Bạn implement thế nào?',
    answer: 'Command pattern + two stacks (undo stack, redo stack). Mỗi action là object với execute() và undo() methods.',
    explanation: 'Undo/Redo: (1) Command pattern — mỗi action là Command object. (2) Two stacks — undoStack và redoStack. (3) State-based alternative — Immer patches lưu diff. (4) Zustand @zundo middleware. (5) Cap undo stack 100 actions. (6) Batch related actions. (7) Persistence vào IndexedDB.',
  },
  'rws-045': {
    question: 'App gọi 5 microservice endpoints. Mỗi service có response time khác nhau. Một service chậm làm toàn bộ page chờ. Bạn xử lý thế nào?',
    answer: 'Fetch parallel, hiển thị independent loading states, timeout per service, graceful degradation khi 1 service fail.',
    explanation: 'Microservice resilience: (1) Mỗi section fetch riêng, independent loading. (2) Timeout per request — AbortSignal.timeout(5000). (3) Circuit breaker frontend. (4) BFF aggregation endpoint. (5) Fallback cached data. (6) Priority loading — critical data first.',
  },
  'rws-046': {
    question: 'App cần xử lý complex permission system: role-based (admin, editor, viewer), resource-based (own content vs others), và feature flags. Bạn kiến trúc thế nào?',
    answer: 'Centralized permission service, CASL/RBAC library, HOC/hook cho component-level access control, server-side enforcement.',
    explanation: 'Permission architecture: (1) CASL library — define abilities declarative. (2) Custom hook usePermission(). (3) ProtectedRoute component. (4) Feature flags — LaunchDarkly hoặc simple config. (5) Server PHẢI validate mọi mutation — frontend permission chỉ là UX.',
  },
  'rws-047': {
    question: 'User report: "Khi scroll page, nội dung nhảy lung tung — images load xong đẩy text xuống, banner quảng cáo xuất hiện giữa bài viết." Đây là vấn đề gì?',
    answer: 'Cumulative Layout Shift (CLS). Fix: set explicit width/height cho images/videos, reserve space cho ads/dynamic content, dùng aspect-ratio CSS.',
    explanation: 'CLS fixes: (1) Images — LUÔN set width và height. (2) Ads — reserve container min-height. (3) Font — font-display: optional. (4) Dynamic content dùng overlay thay vì inserting vào flow. (5) Skeleton cùng kích thước actual content. (6) Avoid layout-triggering animations.',
  },
  'rws-048': {
    question: '"any" types tràn lan trong codebase TypeScript. Team nói "thêm type là mất thời gian". Bạn convince và cải thiện thế nào?',
    answer: 'Bật strict mode incrementally, dùng unknown thay any, auto-generate types từ API, và show ROI: types catch bugs sớm hơn.',
    explanation: 'TypeScript strictness: (1) Track bugs caught by compiler. (2) Bật strict flags incrementally. (3) unknown > any. (4) Auto-generate types từ OpenAPI/Zod/Prisma. (5) ESLint no-explicit-any warning. (6) Boy Scout Rule — type khi touch.',
  },
  'rws-049': {
    question: 'App cho phép user drag-and-drop để reorder list, move items giữa columns (Kanban board). Performance lag khi có 100+ items. Bạn kiến trúc thế nào?',
    answer: 'dnd-kit hoặc @hello-pangea/dnd library, optimistic reorder, virtualize columns, và batched API updates.',
    explanation: 'Drag-and-drop at scale: (1) dnd-kit — modular, accessible, performant. (2) React.memo mỗi card tránh re-render toàn board. (3) Optimistic reorder — update UI ngay, async API. (4) Virtualize columns nhiều items. (5) Keyboard + touch support cho accessibility.',
  },
  'rws-050': {
    question: 'E2E tests chạy 40 phút, thường xuyên fail vì timeout hoặc selector change. Team ngừng trust E2E suite. Bạn cải thiện thế nào?',
    answer: 'Test critical paths only, dùng data-testid selectors, parallel execution, retry flaky tests, và visual regression thay thế phần UI checks.',
    explanation: 'E2E optimization: (1) Chỉ E2E cho 5-10 critical journeys. (2) data-testid selectors stable. (3) Parallel — Playwright workers + sharding. (4) Explicit waits thay sleep. (5) API shortcuts cho test setup. (6) Visual regression bổ sung.',
  },
  'rws-051': {
    question: 'User report: table data hiện đúng nhưng khi sort hoặc filter, animations bị lạ — rows flash, wrong data appear briefly. Nguyên nhân?',
    answer: 'Key prop sai — dùng array index thay vì unique ID. React reconciliation bị nhầm element, gây flash và ghost data.',
    explanation: 'React key prop: (1) Sai: key={index} → sort/filter gây reuse DOM node sai. (2) Đúng: key={item.id} — unique, stable. (3) Biểu hiện: inputs giữ value cũ, CSS transitions fire lại, checkbox swap. (4) Dùng database ID hoặc UUID. (5) React DevTools highlight renders để diagnose.',
  },
  'rws-052': {
    question: 'Backend team muốn chuyển từ REST sang GraphQL. Frontend team lo ngại learning curve. Bạn evaluate thế nào?',
    answer: 'Đánh giá theo use case: GraphQL tốt khi nhiều client cần data khác nhau, relationships phức tạp. REST tốt cho CRUD đơn giản. Có thể hybrid.',
    explanation: 'GraphQL vs REST: (1) GraphQL wins cho multi-client, complex data aggregation. (2) REST wins cho simple CRUD, caching, file upload. (3) Hybrid approach — giữ REST cho existing, GraphQL cho new features. (4) Alternative: tRPC cho full-stack TypeScript.',
  },
  'rws-053': {
    question: 'Modal/Dialog trong app không trap focus — user có thể Tab ra ngoài modal. Screen reader đọc cả background text. Fix thế nào?',
    answer: 'Focus trap, aria-modal, inert attribute trên background content, manage focus on open/close, và Escape key to close.',
    explanation: 'Accessible modal: (1) Focus trap — Tab chỉ cycle trong modal. (2) aria-modal="true" + role="dialog". (3) inert attribute trên background. (4) Auto-focus first interactive element khi mở. (5) Return focus khi đóng. (6) Escape key to close. (7) Scroll lock.',
  },
  'rws-054': {
    question: 'Next.js app trên Vercel. Cold start mất 5-8 giây cho serverless functions. User thấy loading lâu. Bạn optimize thế nào?',
    answer: 'Giảm bundle size serverless function, dùng Edge Runtime, warmup strategies, static generation khi có thể, và streaming.',
    explanation: 'Cold start optimization: (1) Giảm bundle size — import chỉ functions cần. (2) Edge Runtime — start < 50ms. (3) Static generation + ISR. (4) Streaming HTML chunks. (5) Warmup cron job. (6) Connection pooling cho database.',
  },
  'rws-055': {
    question: 'App cho phép user input rich text (bold, italic, links, images) trong comments. Bạn implement thế nào mà an toàn trước XSS?',
    answer: 'Allowlist approach: dùng DOMPurify sanitize HTML, chỉ cho phép tags an toàn (b, i, a, img), strip event handlers.',
    explanation: 'Rich text security: (1) DOMPurify.sanitize với ALLOWED_TAGS whitelist. (2) Whitelist > Blacklist luôn. (3) Validate href — chặn javascript: URLs. (4) CSP headers bổ sung. (5) Sanitize trước khi lưu VÀ trước khi render. (6) Editor library output JSON, không raw HTML.',
  },
  'rws-056': {
    question: 'Monorepo chứa 3 apps và 10 shared packages. npm install mất 5 phút, build mất 15 phút. Bạn optimize thế nào?',
    answer: 'pnpm workspaces cho fast install, Turborepo cho cached/parallel builds, chỉ build affected packages.',
    explanation: 'Monorepo optimization: (1) pnpm — hard links, không duplicate. (2) Turborepo — parallel builds + cache. Build 15 phút → 2 phút. (3) tsconfig references cho incremental type checking. (4) Shared configs. (5) Remote caching giữa CI runs.',
  },
  'rws-057': {
    question: 'App cần generate PDF invoice phía client với layout phức tạp. Bạn chọn approach nào?',
    answer: 'Hoặc @react-pdf/renderer (React components → PDF), hoặc server-side generation (Puppeteer render HTML → PDF), tùy complexity.',
    explanation: 'PDF generation: (1) @react-pdf/renderer — React components, instant, limited CSS. (2) Server-side Puppeteer — full CSS, pixel-perfect. (3) jsPDF + html2canvas — simple, quality thấp. (4) Hybrid — server generate, cache, send download link. (5) Page breaks, headers/footers, page numbers.',
  },
  'rws-058': {
    question: 'User report: print trang web ra giấy bị mất header, sidebar chiếm nửa trang, background colors biến mất. Bạn fix thế nào?',
    answer: '@media print CSS: ẩn navigation/sidebar, adjust layout 100% width, đặt font-size readable, force print backgrounds.',
    explanation: 'Print CSS: (1) @media print ẩn nav, sidebar, footer. (2) Font size 12pt cho body. (3) print-color-adjust: exact cho backgrounds. (4) Links hiện URL qua ::after. (5) page-break controls. (6) Dark mode phải switch light khi print.',
  },
  'rws-059': {
    question: 'App có infinite scroll feed. Scroll 100+ posts, app giật và RAM tăng lên 500MB. Bạn fix thế nào?',
    answer: 'Virtualization + unload off-screen posts, giới hạn DOM nodes, recycle components, và compact memory cho old data.',
    explanation: 'Infinite scroll memory: (1) Virtualization — chỉ render ~20 posts DOM nodes. (2) Data windowing — giữ max 200 posts. (3) Image cleanup — unload off-screen. (4) Component recycling. (5) Scroll position restore. (6) Normalize state tránh duplicate objects.',
  },
  'rws-060': {
    question: 'Bạn được yêu cầu build một component library cho công ty. 50+ components, documentation, versioning. Bạn kiến trúc thế nào?',
    answer: 'Monorepo, Storybook cho docs, semantic versioning, changesets cho releases, và comprehensive testing.',
    explanation: 'Component library: (1) Monorepo — packages: ui, tokens, icons. (2) Storybook — living documentation. (3) Build — tsup/Vite library mode, ESM + CJS + types. (4) Testing — Vitest + Chromatic visual regression. (5) Semantic Versioning + Changesets. (6) Design tokens CSS custom properties. (7) Migration support — codemods cho breaking changes.',
  },
}
