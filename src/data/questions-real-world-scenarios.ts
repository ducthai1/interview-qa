import type { Question } from '../types'

export const realWorldScenarioQuestions: Question[] = [
  // ═══════════════════════════════════════════════════
  // DEBUGGING & PRODUCTION ISSUES (15 questions)
  // ═══════════════════════════════════════════════════
  {
    id: 'rws-001',
    topic: 'browser-dom',
    difficulty: 'mid',
    type: 'system-design',
    question:
      'User báo lỗi "trang web trắng trơn" trên production nhưng team dev không reproduce được. Bạn xử lý thế nào?',
    answer:
      'Thu thập thông tin từ user (browser, OS, network), kiểm tra error monitoring (Sentry), check console logs từ xa, reproduce trên cùng điều kiện, và kiểm tra cache/CDN.',
    explanation:
      'Quy trình debug production white screen: (1) Thu thập context — hỏi user: browser + version, OS, thiết bị, mạng (WiFi/4G), có dùng VPN/ad blocker không. Screenshot nếu có. (2) Check error monitoring — Sentry/Datadog sẽ có stack trace. Tìm error gần nhất match thời gian user báo. (3) Reproduce — dùng BrowserStack/Sauce Labs test trên cùng browser + OS. Bật DevTools throttle network. (4) Common causes: (a) JS bundle fail to load (CDN issue, ad blocker chặn script), (b) Polyfill thiếu cho browser cũ, (c) CORS error trên API endpoint, (d) localStorage/cookie bị đầy hoặc bị chặn (private mode Safari), (e) CSP header chặn inline script. (5) Prevention — Error Boundary ở root, global error handler report về server, smoke test trên BrowserStack matrix sau mỗi deploy.',
    tags: ['debugging', 'production', 'white-screen', 'error-monitoring'],
    year: 2025,
  },
  {
    id: 'rws-002',
    topic: 'performance',
    difficulty: 'senior',
    type: 'system-design',
    question:
      'PM báo "trang chậm lắm" nhưng không nói cụ thể. Bạn approach thế nào để tìm và fix bottleneck?',
    answer:
      'Đo lường trước khi optimize: dùng Lighthouse, Web Vitals, Chrome DevTools Performance tab. Xác định metric nào kém (LCP, INP, CLS), rồi fix theo priority.',
    explanation:
      '"Chậm" là mơ hồ — cần data. Step 1: Chạy Lighthouse trên production URL (không phải localhost) → xem điểm Performance và từng metric. Step 2: Check Real User Monitoring (RUM) data từ web-vitals library hoặc CrUX report → biết user thật trải nghiệm thế nào. Step 3: Identify bottleneck: (a) LCP > 2.5s → hero image chưa optimize, render-blocking CSS/JS, server response chậm. (b) INP > 200ms → event handler nặng, long task trên main thread, quá nhiều re-render. (c) CLS > 0.1 → image không có width/height, dynamic content inject, font swap. Step 4: Fix theo impact — thường 20% effort fix 80% vấn đề: optimize images (WebP/AVIF), code splitting, preload critical resources. Step 5: Set performance budget và CI check để prevent regression. Quan trọng: đừng optimize mù — luôn đo trước và sau.',
    tags: ['performance', 'lighthouse', 'web-vitals', 'bottleneck'],
    year: 2025,
  },
  {
    id: 'rws-003',
    topic: 'api-networking',
    difficulty: 'mid',
    type: 'system-design',
    question:
      'API trả về lỗi 500 random — khoảng 5% request bị fail. User thấy error message. Bạn xử lý phía frontend thế nào?',
    answer:
      'Implement retry với exponential backoff cho các request idempotent (GET), hiển thị error UI thân thiện với nút retry cho user, và report error về monitoring.',
    explanation:
      'Intermittent 500 thường do server overload, database connection pool exhausted, hoặc race condition ở backend. Phía frontend: (1) Auto-retry — cho GET request, retry 2-3 lần với exponential backoff (1s, 2s, 4s). KHÔNG retry POST/PUT/DELETE trừ khi có idempotency key (nguy cơ duplicate data). (2) Error UI — thay vì "500 Internal Server Error" (user không hiểu), show "Đã có lỗi xảy ra. Vui lòng thử lại." với nút Retry. (3) React Query tự động retry 3 lần cho query failures — cấu hình retry: 3, retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000). (4) Report — log error với context (URL, request body, timestamp, user ID) về Sentry. (5) Graceful degradation — nếu API non-critical (recommendations, analytics), ẩn section thay vì show error. (6) Phối hợp backend — gửi error pattern cho backend team kèm request ID để trace.',
    tags: ['error-handling', 'retry', 'api-errors', 'user-experience'],
    year: 2025,
  },
  {
    id: 'rws-004',
    topic: 'javascript-core',
    difficulty: 'mid',
    type: 'system-design',
    question:
      'Deploy xong, user cũ vẫn thấy version cũ và gặp lỗi "ChunkLoadError" hoặc "Loading chunk xxx failed". Nguyên nhân và cách fix?',
    answer:
      'File JS cũ đã bị xóa trên server khi deploy version mới. Browser đang cache HTML cũ reference đến chunk file không còn tồn tại nữa.',
    explanation:
      'Đây là vấn đề cực kỳ phổ biến với SPA code splitting. Scenario: User mở app, browser cache index.html. Deploy mới xảy ra → server xóa old chunks, upload new chunks. User navigate → React.lazy() cố load old chunk → 404 → ChunkLoadError. Fix: (1) Giữ lại old chunks ít nhất 24-48h sau deploy (cấu hình CDN/S3 không xóa file cũ). (2) Catch ChunkLoadError và auto-reload: window.addEventListener("error", (e) => { if (e.message.includes("Loading chunk")) window.location.reload(); }). (3) Set Cache-Control: no-cache cho index.html (luôn validate). Set Cache-Control: max-age=31536000, immutable cho JS/CSS chunks (có content hash trong tên file). (4) Version check — call API /api/version định kỳ, nếu khác version hiện tại thì notify user "Phiên bản mới đã sẵn sàng" với nút Refresh. (5) Service Worker cách ly — precache critical chunks.',
    tags: ['deployment', 'chunk-loading', 'caching', 'code-splitting'],
    year: 2025,
  },
  {
    id: 'rws-005',
    topic: 'react-fundamentals',
    difficulty: 'senior',
    type: 'system-design',
    question:
      'App ngày càng chậm khi dùng lâu — ban đầu mượt nhưng sau 30 phút bắt đầu giật lag. Bạn nghi ngờ memory leak. Cách diagnose?',
    answer:
      'Dùng Chrome DevTools Memory tab: chụp heap snapshot ở 3 thời điểm, so sánh để tìm object tăng liên tục, kiểm tra detached DOM nodes và uncleaned listeners.',
    explanation:
      'Memory leak diagnosis workflow: (1) Mở Chrome DevTools → Memory tab. (2) Chụp Heap Snapshot lúc vừa load app. (3) Sử dụng app 5 phút (navigate, interact). (4) Force GC (click biểu tượng thùng rác). Chụp Snapshot 2. (5) Repeat sau 5 phút nữa → Snapshot 3. (6) So sánh Snapshot 2 vs 1, Snapshot 3 vs 2 — tìm object types có count/size tăng liên tục. Common culprits trong React: (a) useEffect thiếu cleanup — setInterval/setTimeout không clear, event listener không remove. (b) Closure capture DOM node đã unmount. (c) WebSocket/EventSource handler chồng chất. (d) State array append liên tục (chat messages, logs) mà không cap size. (e) Third-party SDK (analytics, chat widget) leak. Fix pattern: luôn return cleanup trong useEffect, dùng WeakRef cho cache, cap array size, và test memory với Playwright automation chạy user scenario lặp lại 100 lần.',
    tags: ['memory-leak', 'debugging', 'devtools', 'heap-snapshot'],
    year: 2025,
  },
  {
    id: 'rws-006',
    topic: 'css',
    difficulty: 'junior',
    type: 'system-design',
    question:
      'Designer gửi mockup, bạn code xong nhìn y hệt trên Chrome. Nhưng QA test trên Safari thì layout bị vỡ. Bạn xử lý thế nào?',
    answer:
      'Kiểm tra CSS features không supported trên Safari, test cross-browser từ đầu, dùng autoprefixer, và biết các Safari-specific bugs phổ biến.',
    explanation:
      'Safari cross-browser issues phổ biến: (1) Flexbox gap — Safari < 14.1 không support gap trong flexbox (chỉ Grid). Fallback: dùng margin. (2) 100vh — Safari mobile tính 100vh bao gồm address bar → content bị cắt. Fix: dùng 100dvh (dynamic viewport height) hoặc -webkit-fill-available. (3) date input — Safari không support input type="date" trước version 14.1. Cần custom date picker. (4) scrollbar styling — Safari dùng ::-webkit-scrollbar, Firefox dùng scrollbar-width. (5) backdrop-filter — cần -webkit-backdrop-filter prefix. (6) Smooth scroll — scroll-behavior: smooth có lag trên Safari. Process: (a) Setup BrowserStack hoặc thực tế test trên iPhone/iPad từ sprint đầu, không đợi QA. (b) Thêm autoprefixer vào build (PostCSS). (c) Check caniuse.com trước khi dùng feature mới. (d) Viết CSS fallback: @supports not (gap: 1rem) { ... }.',
    tags: ['cross-browser', 'safari', 'css-compatibility', 'debugging'],
    year: 2025,
  },
  {
    id: 'rws-007',
    topic: 'security',
    difficulty: 'senior',
    type: 'system-design',
    question:
      'Security audit phát hiện app có lỗ hổng XSS. Tester inject được script qua ô comment. Bạn fix thế nào và prevent trong tương lai?',
    answer:
      'Sanitize user input trước khi render, dùng textContent thay innerHTML, enable CSP headers, và tuyệt đối không dùng dangerouslySetInnerHTML với unsanitized data.',
    explanation:
      'XSS fix checklist: (1) Immediate fix — tìm nơi render user input. Nếu dùng innerHTML hoặc dangerouslySetInnerHTML → đổi sang textContent hoặc React JSX (tự escape). Nếu phải render HTML (rich text editor), dùng DOMPurify hoặc sanitize-html để lọc. (2) React tự escape JSX expression {userInput} nên an toàn. NHƯNG dangerouslySetInnerHTML bypass hàng rào này. Search toàn codebase: grep -r "dangerouslySetInnerHTML\|innerHTML\|document.write\|eval(". (3) Server-side — escape output, validate input type (email thì chỉ chấp nhận email format). (4) CSP headers — Content-Security-Policy: script-src \'self\' ngăn inline script execute ngay cả khi inject được. (5) HTTPOnly cookies — ngăn XSS steal session token. (6) Prevention — setup ESLint rule no-dangerouslySetInnerHTML (hoặc restrict). Code review checklist include XSS check. Security training cho team. Automated scan với tools như Snyk, OWASP ZAP trong CI.',
    tags: ['xss', 'security', 'sanitization', 'csp'],
    year: 2025,
  },
  {
    id: 'rws-008',
    topic: 'react-hooks',
    difficulty: 'mid',
    type: 'system-design',
    question:
      'Form phức tạp (20+ fields, nhiều conditional fields, validation rules) bị lag khi user gõ. Mỗi keystroke mất 200-300ms. Nguyên nhân và cách fix?',
    answer:
      'Mỗi keystroke re-render toàn bộ form component. Fix: dùng React Hook Form (uncontrolled), tách form thành sub-components với React.memo, hoặc isolate state per field.',
    explanation:
      'Root cause: Nếu dùng controlled form với single useState object cho toàn bộ form, mỗi keystroke setState → re-render entire form tree (20+ fields + validation + conditional logic). Diagnosis: React DevTools Profiler → xem component nào render lại và mất bao lâu. Fixes theo priority: (1) React Hook Form — dùng register() với uncontrolled inputs, component chỉ re-render khi submit hoặc khi field được watch(). Re-render giảm từ 20 fields → 1 field. (2) Nếu phải dùng controlled: tách mỗi field thành component riêng với React.memo. Parent truyền onChange qua useCallback. (3) Debounce validation — không validate on every keystroke mà onBlur hoặc debounce 300ms. (4) Conditional fields — dùng useMemo để compute visible fields, tránh re-calculate trên mỗi render. (5) Schema validation (Zod/Yup) chạy đồng bộ trên mỗi change → nặng. Chuyển sang validate async hoặc chỉ validate field đang thay đổi (Zod .pick()). Key insight: 20 controlled inputs = 20 re-renders mỗi keystroke. Uncontrolled + React Hook Form = 0 re-renders mỗi keystroke.',
    tags: ['form-performance', 'react-hook-form', 'controlled-vs-uncontrolled', 're-renders'],
    year: 2025,
  },
  {
    id: 'rws-009',
    topic: 'api-networking',
    difficulty: 'mid',
    type: 'system-design',
    question:
      'User ở Việt Nam report app load chậm hơn nhiều so với user ở US, dù cùng thiết bị. Nguyên nhân và cách optimize?',
    answer:
      'Latency cao do server/CDN ở US. Fix: deploy edge functions, dùng CDN multi-region, optimize asset delivery, và implement caching strategies.',
    explanation:
      'Network latency US → VN khoảng 200-300ms round trip. Mỗi request cộng thêm 200-300ms. SPA cần 5-10 API calls = 1-3 giây overhead thuần network. Solutions: (1) CDN — deploy static assets (JS, CSS, images) lên CDN có POP ở Southeast Asia (Cloudflare, CloudFront Singapore). Giảm asset load từ 300ms → 30ms. (2) Edge Functions — Vercel Edge, Cloudflare Workers xử lý lightweight requests gần user. (3) API gateway ở Asia — nếu backend ở US, đặt API proxy/cache ở Singapore. Cache responses phổ biến. (4) Reduce round trips — aggregate API calls (BFF pattern), preload data, inline critical data trong HTML. (5) Service Worker — cache API responses cho repeat visits. (6) Image optimization — serve smaller images cho mobile (nhiều user VN dùng mobile). WebP/AVIF nhẹ hơn 30-50%. (7) Code splitting — chỉ load code cho route hiện tại, giảm initial bundle. (8) Preconnect — <link rel="preconnect" href="api-domain"> giảm DNS + TLS handshake time. Test: dùng Chrome DevTools throttle "Slow 3G" preset và Network tab xem waterfall.',
    tags: ['latency', 'cdn', 'edge-computing', 'global-performance'],
    year: 2025,
  },
  {
    id: 'rws-010',
    topic: 'react-fundamentals',
    difficulty: 'junior',
    type: 'system-design',
    question:
      'User bấm nút "Back" trên browser, form data bị mất hết. User phải nhập lại từ đầu. Bạn xử lý thế nào?',
    answer:
      'Persist form state vào sessionStorage hoặc URL params. Khi user quay lại, restore data từ storage. Thêm confirmation dialog khi user navigate away với unsaved changes.',
    explanation:
      'Form data preservation strategies: (1) sessionStorage — save form data on every change: sessionStorage.setItem("checkout-form", JSON.stringify(formData)). On mount, khôi phục: useState(() => JSON.parse(sessionStorage.getItem("...")) || defaults). Clear sau khi submit thành công. (2) URL state — cho filters/search, persist vào query params: ?category=shoes&sort=price. User bookmark được và share link giữ nguyên state. (3) History API state — history.pushState({ formData }, ...) cho multi-step form. popstate event restore data. (4) beforeunload warning — khi form đã dirty (có thay đổi), warn user: window.addEventListener("beforeunload", (e) => { if (isDirty) { e.preventDefault(); e.returnValue = ""; } }). React Router: useBlocker() hoặc <Prompt>. (5) React Hook Form kết hợp sessionStorage: dùng custom hook useFormPersist. (6) Multi-step wizard — save completed steps, cho phép quay lại step trước mà không mất data.',
    tags: ['form-persistence', 'session-storage', 'navigation', 'user-experience'],
    year: 2025,
  },

  // ═══════════════════════════════════════════════════
  // TEAM COLLABORATION & PROCESS (10 questions)
  // ═══════════════════════════════════════════════════
  {
    id: 'rws-011',
    topic: 'build-tools',
    difficulty: 'mid',
    type: 'system-design',
    question:
      'Hai developer cùng sửa một file và tạo merge conflict lớn. Bạn resolve thế nào và prevent trong tương lai?',
    answer:
      'Resolve: hiểu intent của cả 2 changes, merge manually, test kỹ sau khi resolve. Prevent: chia nhỏ PR, communicate trước khi sửa shared files, dùng feature flags.',
    explanation:
      'Resolve process: (1) git diff để hiểu từng bên thay đổi gì. (2) KHÔNG pick một bên rồi bỏ bên kia — cần hiểu business logic cả 2. Gọi developer kia pair-resolve nếu cần. (3) Sau merge, run TOÀN BỘ tests, build, và manual smoke test feature cả 2 bên. Conflicts trong generated files (lock files) → delete và regenerate. Prevention: (1) Small, focused PRs — merge trong ngày, không để PR open hàng tuần. (2) Communication — Slack: "Mình đang refactor UserProfile.tsx" để teammate biết tránh sửa cùng lúc. (3) File structure — tách component nhỏ thay vì 1 file 2000 dòng. 2 người sửa 2 component khác nhau → không conflict. (4) Feature flags — cả 2 dev merge vào main nhưng code bật/tắt bằng flag → không block nhau. (5) Trunk-based development — merge nhỏ, thường xuyên. Avoid long-lived feature branches. (6) Code ownership (CODEOWNERS file) — biết ai responsible cho file nào.',
    tags: ['git', 'merge-conflicts', 'collaboration', 'code-review'],
    year: 2025,
  },
  {
    id: 'rws-012',
    topic: 'build-tools',
    difficulty: 'senior',
    type: 'system-design',
    question:
      'Bạn vừa deploy và nhận alert: error rate tăng đột biến 10x. Bạn làm gì trong 5 phút đầu tiên?',
    answer:
      'Rollback ngay lập tức về version trước, sau đó mới investigate root cause. Không cố fix trên production.',
    explanation:
      'Incident response — thời gian là vàng: Phút 0-1: (1) Xác nhận incident — check error monitoring (Sentry), uptime monitoring. Có thật sự là vấn đề không? (2) Notify team lead / on-call engineer. Phút 1-3: (3) ROLLBACK — đây là action quan trọng nhất. Vercel: 1-click rollback. AWS: switch deployment. K8s: kubectl rollout undo. ĐỪNG cố debug và hotfix trên production — rollback nhanh hơn 100x. Phút 3-5: (4) Verify — check error rate sau rollback. Nếu về bình thường → incident contained. (5) Communicate — update status page, Slack channel "#incidents". Sau đó: (6) Investigate — diff giữa old và new version. Check Sentry error details. Reproduce locally. (7) Fix — fix bug, write test cover case đó, deploy lại. (8) Post-mortem — viết incident report: timeline, root cause, impact, prevention. Lesson learned: deploy vào thứ 6 chiều = nguy hiểm. Setup canary deployment (5% traffic trước).',
    tags: ['incident-response', 'rollback', 'monitoring', 'deployment'],
    year: 2025,
  },
  {
    id: 'rws-013',
    topic: 'testing',
    difficulty: 'mid',
    type: 'system-design',
    question:
      'PR đã được 2 người review, approve, và merge. Lên production phát hiện bug nghiêm trọng. Code review process đã fail ở đâu? Cải thiện thế nào?',
    answer:
      'Code review không thể catch tất cả bug. Cần bổ sung automated testing, staging environment testing, và canary deployment để tạo multiple safety nets.',
    explanation:
      'Tại sao code review miss bug: (1) Reviewer không hiểu toàn bộ context — chỉ nhìn diff, không test. (2) Review fatigue — PR quá lớn (500+ lines changed), reviewer skim qua. (3) Happy path bias — reviewer check logic chính, miss edge cases. Improvements: (1) Automated tests — unit test cho business logic, integration test cho user flows chính. CI chạy tests trước khi merge. Bug xảy ra → viết test cover case đó (regression test). (2) Staging environment — deploy lên staging giống production, QA test trước khi production. (3) PR size limit — enforce max 400 lines per PR. Nhỏ hơn → review kỹ hơn. (4) Checklist — PR template bắt buộc: "Đã test trên các browser nào?", "Edge cases nào đã consider?", "Ảnh hưởng backward compatibility?". (5) Canary deploy — 5% traffic → nếu error rate tăng → auto rollback. (6) Feature flags — merge code nhưng chưa enable, QA test riêng trước khi bật. (7) Pair programming cho changes phức tạp — 2 người code cùng tốt hơn 2 người review sau.',
    tags: ['code-review', 'testing', 'quality-assurance', 'process'],
    year: 2025,
  },
  {
    id: 'rws-014',
    topic: 'react-advanced',
    difficulty: 'senior',
    type: 'system-design',
    question:
      'Legacy codebase React — code messy, không có tests, 1 component 2000 dòng, props drilling 5 levels. Bạn được giao refactor. Approach thế nào?',
    answer:
      'Refactor incrementally — KHÔNG rewrite toàn bộ. Viết tests cho behavior hiện tại trước, rồi refactor từng phần nhỏ, verify bằng tests sau mỗi step.',
    explanation:
      'The Strangler Fig Pattern cho frontend: (1) KHÔNG big bang rewrite — Joel Spolsky gọi đây là "the single worst strategic mistake a company can make". Refactor incrementally. (2) Step 1: Viết integration tests cho user flows chính TRƯỚC KHI sửa code. Tests = safety net đảm bảo không break behavior. (3) Step 2: Extract — tách component 2000 dòng thành nhiều components nhỏ. Bắt đầu từ UI leaf nodes (Button, Input) rồi lên composite components. (4) Step 3: Kill props drilling — identify data nào thật sự shared → đưa vào Context hoặc Zustand. Data chỉ dùng parent-child → giữ props. (5) Step 4: Extract custom hooks — logic reusable (data fetching, form validation) thành hooks, để components chỉ lo render. (6) Priority: refactor theo business value — component nào team sửa nhiều nhất (git log --name-only), refactor trước. Component ít ai động → để sau. (7) Mỗi refactor PR là 1 commit nhỏ, merge ngay, không tạo branch dài ngày. (8) Boy Scout Rule — mỗi lần touch một file, improve nó một chút.',
    tags: ['refactoring', 'legacy-code', 'strangler-fig', 'testing'],
    year: 2025,
  },
  {
    id: 'rws-015',
    topic: 'accessibility',
    difficulty: 'mid',
    type: 'system-design',
    question:
      'Client yêu cầu app phải WCAG 2.1 AA compliant. Hiện tại app chưa có accessibility nào cả. Bạn plan thế nào?',
    answer:
      'Audit hiện trạng, fix critical issues trước (keyboard navigation, color contrast, alt text), rồi cải thiện incrementally. Integrate a11y testing vào CI.',
    explanation:
      'WCAG compliance roadmap: Phase 1 - Audit (1 sprint): (1) Chạy axe-core/Lighthouse Accessibility trên tất cả pages → liệt kê violations. (2) Test keyboard navigation — Tab qua toàn bộ interactive elements. (3) Test screen reader (VoiceOver/NVDA) trên flows chính. (4) Check color contrast ratio (minimum 4.5:1 cho text). Phase 2 - Critical fixes (2-3 sprints): (1) Semantic HTML — thay div onClick bằng button, thay div bằng nav/main/section. (2) Alt text cho tất cả images. Decorative images: alt="". (3) Focus management — visible focus indicator (:focus-visible), skip-to-content link. (4) Form labels — mỗi input phải có label linked bằng htmlFor. (5) Color contrast — adjust palette. Phase 3 - Prevention: (1) eslint-plugin-jsx-a11y trong ESLint. (2) axe-core trong integration tests. (3) Storybook addon-a11y cho component development. (4) Checklist trong PR template: "Đã test keyboard?", "Đã test screen reader?". (5) Training cho team — 1 workshop về WCAG basics.',
    tags: ['accessibility', 'wcag', 'audit', 'compliance'],
    year: 2025,
  },

  // ═══════════════════════════════════════════════════
  // COMMON PRACTICAL SCENARIOS (15 questions)
  // ═══════════════════════════════════════════════════
  {
    id: 'rws-016',
    topic: 'react-hooks',
    difficulty: 'mid',
    type: 'system-design',
    question:
      'App cần hoạt động khi mất internet (offline). User đang điền form giữa chừng thì mất mạng. Bạn xử lý thế nào?',
    answer:
      'Detect online/offline status, queue mutations khi offline, sync khi có mạng lại, và luôn notify user về connection status.',
    explanation:
      'Offline handling: (1) Detection — navigator.onLine + "online"/"offline" events. NHƯNG navigator.onLine không đáng tin 100% (có thể connected to router nhưng no internet). Verify bằng periodic ping endpoint. (2) Form data — auto-save vào localStorage/IndexedDB mỗi 5 giây hoặc onBlur. Khi user quay lại (online hay offline) → restore. (3) Mutation queue — khi offline, PUT/POST requests vào queue (IndexedDB). Show badge "1 pending change" cho user biết. Khi online lại → flush queue theo thứ tự. (4) UI feedback — show banner "Bạn đang offline. Thay đổi sẽ được lưu khi có mạng lại." Styling khác biệt (grayscale header, orange banner). (5) React Query offline mode — networkMode: "offlineFirst" cache data, pauseMutations khi offline. (6) Conflict handling — nếu submit offline rồi, khi sync server nói data đã thay đổi → show conflict UI cho user chọn. (7) Service Worker — cache API responses cho read operations, app vẫn hiển thị data cached khi offline.',
    tags: ['offline', 'service-worker', 'form-persistence', 'network-detection'],
    year: 2025,
  },
  {
    id: 'rws-017',
    topic: 'security',
    difficulty: 'mid',
    type: 'system-design',
    question:
      'User report: "Tôi đăng nhập rồi mà lúc thì vào được, lúc thì bị đá ra login lại". Token authentication đang có vấn đề gì?',
    answer:
      'Access token hết hạn nhưng refresh token flow bị lỗi. Cần implement silent token refresh, handle race conditions khi multiple requests đồng thời cần refresh.',
    explanation:
      'Auth token issues phổ biến: (1) Token expiry — access token hết hạn (thường 15-60 phút). Nếu không auto-refresh → user bị kick. Fix: interceptor check 401 response → gọi /refresh-token → retry request. (2) Race condition — 5 API calls đồng thời, tất cả nhận 401, tất cả cùng gọi refresh → 5 refresh requests → token bị invalidate. Fix: dùng promise queue — request đầu tiên gọi refresh, các request sau đợi kết quả cùng 1 promise. (3) Token storage — localStorage bị XSS truy cập. httpOnly cookie an toàn hơn nhưng cần CSRF protection. (4) Multi-tab — Tab A refresh token → token cũ trong Tab B invalid. Fix: BroadcastChannel hoặc storage event để sync token giữa tabs. (5) Silent refresh — dùng iframe hoặc refresh token rotation. (6) Implementation: Axios interceptor: response interceptor catch 401 → refresh → retry. Request interceptor check token expiry trước khi gửi → proactive refresh.',
    tags: ['authentication', 'token-refresh', 'security', 'race-condition'],
    year: 2025,
  },
  {
    id: 'rws-018',
    topic: 'performance',
    difficulty: 'mid',
    type: 'system-design',
    question:
      'Trang product listing có 200 sản phẩm, mỗi sản phẩm có ảnh. Page load mất 8 giây, data transfer 15MB. Bạn optimize thế nào?',
    answer:
      'Lazy load images, responsive images (srcset), modern formats (WebP/AVIF), pagination/infinite scroll, và virtualization.',
    explanation:
      'Image-heavy page optimization: (1) Lazy loading — chỉ load ảnh khi gần viewport. HTML native: loading="lazy". Chỉ ảnh above-the-fold (6-8 sản phẩm đầu) load eager. (2) Responsive images — srcset và sizes cho browser chọn ảnh đúng kích thước. Mobile 375px không cần ảnh 1200px. Giảm 60-70% data. (3) Modern formats — WebP nhẹ hơn JPEG 25-35%. AVIF nhẹ hơn nữa. Dùng <picture> element với fallback. (4) Image CDN — Cloudinary, imgix, Vercel Image Optimization tự resize/compress on-the-fly. URL: /image.jpg?w=300&q=80&f=webp. (5) Pagination/Infinite scroll — đừng render 200 items cùng lúc. Mỗi page 20-30 items. (6) Placeholder — blur placeholder (LQIP) hoặc dominant color → ảnh load mượt, không layout shift. width/height attribute trên img (prevent CLS). (7) CDN — serve images từ edge gần user. Cache-Control: max-age=31536000, immutable. (8) Result: 15MB → 2-3MB, 8s → 2s.',
    tags: ['image-optimization', 'lazy-loading', 'responsive-images', 'performance'],
    year: 2025,
  },
  {
    id: 'rws-019',
    topic: 'state-management',
    difficulty: 'senior',
    type: 'system-design',
    question:
      'App e-commerce: user add item vào cart ở tab 1, mở tab 2 thấy cart vẫn empty. Cùng app, cùng user. Bạn fix thế nào?',
    answer:
      'Sync state giữa các tabs bằng BroadcastChannel API hoặc storage event. Zustand/Redux persist middleware + cross-tab sync.',
    explanation:
      'Cross-tab state sync solutions: (1) BroadcastChannel API — tạo channel "cart-sync", khi state thay đổi → postMessage. Tabs khác listen và update local state. Clean, modern. (2) localStorage + storage event — mỗi khi write cart vào localStorage, other tabs nhận được "storage" event (tự động, không cần code gì thêm). Zustand persist middleware tự save vào localStorage → thêm listener cho storage event để sync. (3) Zustand implementation: create(persist(stateCreator, { name: "cart" })). Thêm trong useEffect: window.addEventListener("storage", (e) => { if (e.key === "cart") useCartStore.persist.rehydrate() }). (4) Server-side sync — cart lưu trên server (API), 2 tabs fetch từ cùng source. Dùng React Query với refetchOnWindowFocus: true → switch tab = auto refetch. (5) SharedWorker — shared thread giữa tabs, nhưng support browser hạn chế. (6) Recommended: Zustand persist + storage event listener cho client-side state. Server-side cart + React Query cho critical e-commerce.',
    tags: ['cross-tab-sync', 'broadcast-channel', 'zustand', 'shopping-cart'],
    year: 2025,
  },
  {
    id: 'rws-020',
    topic: 'typescript',
    difficulty: 'mid',
    type: 'system-design',
    question:
      'Backend team thay đổi API response format mà không báo trước. Frontend app crash ở production vì đọc property undefined. Bạn prevent thế nào?',
    answer:
      'Runtime validation với Zod/io-ts tại API boundary, API contract testing trong CI, và communication process giữa FE/BE team.',
    explanation:
      'API contract safety: (1) Runtime validation — dùng Zod schema validate mọi API response: const UserSchema = z.object({ id: z.string(), name: z.string(), email: z.string().email() }). Nếu response không match → throw descriptive error thay vì crash ở component. (2) Contract testing — trong CI, chạy test gọi API endpoint thật (staging) → validate response bằng Zod schema → nếu fail → block deploy. Tools: Pact, schema test custom. (3) OpenAPI/Swagger — backend publish API spec. Frontend generate types từ spec (openapi-typescript). Khi spec thay đổi → TypeScript lỗi → biết ngay. (4) Optional chaining defense — user?.address?.city thay vì user.address.city. Không solve root cause nhưng prevent crash. (5) Process: (a) Backend PHẢI update API docs trước khi deploy. (b) Breaking changes cần version API: /api/v2/users. (c) Deprecation timeline: old format vẫn available 2 sprints. (d) Slack channel #api-changes cho announcements. (e) Consumer-driven contract tests — FE team define expected response shape, BE test against it.',
    tags: ['api-contract', 'zod', 'runtime-validation', 'type-safety'],
    year: 2025,
  },
  {
    id: 'rws-021',
    topic: 'react-fundamentals',
    difficulty: 'junior',
    type: 'system-design',
    question:
      'User report: "Tôi bấm nút Submit nhiều lần vì không biết nó đang processing hay không." Bạn cải thiện UX thế nào?',
    answer:
      'Loading state rõ ràng: disable button + loading spinner + text change ("Đang gửi..."), prevent double submit, và success/error feedback.',
    explanation:
      'Submit UX best practices: (1) Loading state — khi submit: button disabled, text đổi "Submit" → "Đang gửi...", spinner icon. CSS: opacity: 0.7, cursor: not-allowed. (2) Prevent double submit — 3 layers: disable button, guard trong handler (if (isSubmitting) return), AbortController cancel request trước. (3) Feedback — Success: toast notification "Đã gửi thành công!" hoặc redirect sang confirmation page. Error: inline error message rõ ràng "Không thể gửi. Vui lòng thử lại." với retry button. (4) Optimistic UI — cho actions đơn giản (like, bookmark), update UI ngay, revert nếu fail. (5) Progress indication — cho upload file: progress bar %. Cho multi-step: stepper "Bước 2/4". (6) Form validation — validate trước khi submit, show errors inline ngay khi user blur field. Đừng đợi submit rồi mới báo lỗi. (7) Skeleton loading — khi load data, show skeleton thay vì blank screen. User biết content đang load.',
    tags: ['ux', 'loading-state', 'feedback', 'form-submission'],
    year: 2025,
  },
  {
    id: 'rws-022',
    topic: 'performance',
    difficulty: 'senior',
    type: 'system-design',
    question:
      'Bundle size của app là 2.5MB (gzipped 800KB). Management yêu cầu giảm xuống dưới 500KB gzipped. Bạn approach thế nào?',
    answer:
      'Analyze bundle composition, remove unused dependencies, code split by route, tree-shake, lazy load heavy libraries, và replace bloated packages.',
    explanation:
      'Bundle diet plan: (1) Analyze — chạy vite-plugin-visualizer hoặc webpack-bundle-analyzer. Xem treemap: thường 2-3 packages chiếm 60% bundle. (2) Quick wins: (a) moment.js (300KB) → date-fns hoặc dayjs (2-7KB). (b) lodash (70KB full) → lodash-es cherry-pick hoặc native JS. (c) Tất cả icons import → chỉ import icons dùng. react-icons/fa thay vì react-icons. (d) Duplicate packages — 2 versions khác nhau của cùng 1 lib. npm ls <package> để check. (3) Code splitting — React.lazy() cho mỗi route. User vào /dashboard chỉ load dashboard code, không load /settings code. (4) Dynamic import — cho heavy libraries: const Chart = lazy(() => import("chart.js")). Chỉ load khi user navigate đến page có chart. (5) Tree shaking — verify sideEffects: false trong package.json. Import { specific } thay vì import * . (6) External CDN — cho libs ít thay đổi (React, React DOM), link CDN thay vì bundle. (7) Compression — Brotli > gzip, tiết kiệm thêm 15-20%. (8) CI budget — size-limit block PR nếu bundle tăng quá threshold.',
    tags: ['bundle-size', 'code-splitting', 'tree-shaking', 'optimization'],
    year: 2025,
  },
  {
    id: 'rws-023',
    topic: 'css',
    difficulty: 'junior',
    type: 'system-design',
    question:
      'App hoạt động tốt trên desktop nhưng layout hoàn toàn vỡ trên mobile. Deadline gấp, bạn fix nhanh thế nào?',
    answer:
      'Viewport meta tag, responsive units, media queries cho breakpoints chính, flexbox/grid auto-reflow, và test trên real devices.',
    explanation:
      'Mobile emergency fix checklist: (1) Viewport meta tag — kiểm tra <meta name="viewport" content="width=device-width, initial-scale=1"> trong <head>. Không có tag này → mobile render ở 980px width rồi zoom out. (2) Fixed widths — search codebase cho width: 1200px, width: 960px → đổi thành max-width hoặc percentage. (3) Overflow — tìm element nào overflow horizontal (gây scroll ngang). DevTools Mobile view → inspect element tràn ra ngoài. Common: table quá rộng, image không constrain. Fix: overflow-x: auto cho table wrapper, img { max-width: 100%; height: auto; }. (4) Font size — text quá nhỏ trên mobile. Minimum 16px cho body text (cũng prevent iOS auto-zoom on input focus). (5) Touch targets — button/link quá nhỏ. Minimum 44x44px (Apple guidelines). (6) Quick responsive: flexbox flex-wrap: wrap cho card layouts, Grid auto-fit/minmax. (7) Hide non-essential — trên mobile ẩn sidebar, simplify navigation thành hamburger menu. (8) Test — Chrome DevTools Device Mode + test trên real iPhone (Safari rendering khác Chrome).',
    tags: ['responsive', 'mobile', 'viewport', 'quick-fix'],
    year: 2025,
  },
  {
    id: 'rws-024',
    topic: 'api-networking',
    difficulty: 'senior',
    type: 'system-design',
    question:
      'App cần hiển thị data real-time (stock prices, chat messages, notifications). Bạn chọn WebSocket, SSE, hay polling? Trade-offs?',
    answer:
      'Depends on use case: WebSocket cho bidirectional (chat), SSE cho server-push (notifications, stock), polling cho simplicity khi real-time không critical.',
    explanation:
      'Comparison: (1) Polling — setInterval fetch mỗi 5-30s. Pros: đơn giản nhất, works everywhere, stateless. Cons: wasteful (99% poll returns no change), latency = poll interval, tải server. Dùng khi: dashboard update mỗi 30s, không cần instant. (2) SSE (Server-Sent Events) — server push events qua HTTP. Pros: built-in reconnection, simple server implementation, works through proxies/CDN, one-direction (server → client). Cons: chỉ text data (no binary), max 6 connections per domain trên HTTP/1.1 (HTTP/2 fix). Dùng khi: notifications, live feed, stock ticker, build logs. (3) WebSocket — full-duplex bidirectional. Pros: low latency, binary support, true real-time. Cons: complex (connection management, reconnection, heartbeat), stateful (harder to scale, cần sticky sessions hoặc Redis pub/sub), blocked bởi some corporate proxies. Dùng khi: chat, collaborative editing, multiplayer game. Recommendation: 80% use cases → SSE đủ (notifications, live data). Chat → WebSocket. Dashboard → polling hoặc SSE. Hybrid approach tốt nhất: SSE cho updates, REST cho mutations.',
    tags: ['websocket', 'sse', 'polling', 'real-time', 'architecture-decision'],
    year: 2025,
  },
  {
    id: 'rws-025',
    topic: 'react-advanced',
    difficulty: 'mid',
    type: 'system-design',
    question:
      'Product owner yêu cầu thêm feature "dark mode". App hiện tại hardcode colors khắp nơi (200+ components, 50+ CSS files). Bạn implement thế nào?',
    answer:
      'Dùng CSS custom properties (variables) cho theming, tạo light/dark token sets, migrate colors incrementally, và persist user preference.',
    explanation:
      'Dark mode implementation strategy: (1) Define tokens — tạo CSS custom properties: :root { --bg-primary: #ffffff; --text-primary: #1a1a1a; --surface: #f5f5f5; ... }. [data-theme="dark"] { --bg-primary: #121212; --text-primary: #e0e0e0; --surface: #1e1e1e; }. (2) Migration — KHÔNG đổi tất cả 200 components cùng lúc. Thay đổi từng nhóm: shared components trước → page layouts → specific pages. Search-replace: color: #1a1a1a → color: var(--text-primary). (3) Toggle logic — React context: ThemeProvider quản lý state. Script trong <head> (sync, trước render) đọc localStorage → set data-theme attribute → tránh flash of wrong theme. (4) System preference — @media (prefers-color-scheme: dark) làm default. User manual choice override và persist localStorage. (5) Design considerations: dark mode KHÔNG phải invert colors. Cần: giảm saturation, dimmed images (opacity 0.8 hoặc filter: brightness(0.9)), elevated surfaces sáng hơn (không tối hơn), check contrast ratios lại. (6) Testing — visual regression test cả 2 modes. Storybook: render mỗi component ở light + dark.',
    tags: ['dark-mode', 'css-variables', 'theming', 'design-tokens'],
    year: 2025,
  },
  {
    id: 'rws-026',
    topic: 'html',
    difficulty: 'junior',
    type: 'system-design',
    question:
      'SEO team report: trang quan trọng nhất không được Google index dù đã live 2 tháng. Bạn kiểm tra và fix thế nào?',
    answer:
      'Check robots.txt, meta robots tag, Search Console errors, rendering (CSR vs SSR), và sitemap. Đảm bảo content trong initial HTML, không chỉ load bằng JavaScript.',
    explanation:
      'SEO debugging checklist: (1) robots.txt — file robots.txt có chặn crawler không? Check /robots.txt. Common mistake: Disallow: / block toàn bộ site. (2) Meta robots — <meta name="robots" content="noindex"> trong <head>? Search codebase. Có thể set trong CMS hoặc framework config. (3) Google Search Console — URL Inspection tool: submit URL → xem Google render như thế nào. Nếu blank → JS rendering issue. (4) Client-side rendering — SPA render content bằng JavaScript. Googlebot có execute JS nhưng với delay và limitations. Nếu data load bằng useEffect → có thể không có trong initial HTML. Fix: dùng SSR (Next.js getServerSideProps) hoặc SSG cho pages cần index. (5) Canonical URL — có <link rel="canonical"> trỏ sai không? Duplicate content issues? (6) Sitemap — submit sitemap.xml qua Search Console. Auto-generate bằng next-sitemap. (7) Page speed — Google ưu tiên pages nhanh. Core Web Vitals ảnh hưởng ranking. (8) Internal links — page không có link nào trỏ đến? Orphan pages khó index. Thêm vào navigation/footer.',
    tags: ['seo', 'indexing', 'server-side-rendering', 'google-search-console'],
    year: 2025,
  },
  {
    id: 'rws-027',
    topic: 'javascript-core',
    difficulty: 'mid',
    type: 'system-design',
    question:
      'App có feature export CSV/PDF report. Khi data lớn (100K rows), browser tab freeze 10+ giây. User nghĩ app bị crash. Bạn fix thế nào?',
    answer:
      'Chuyển heavy computation sang Web Worker, stream processing thay vì load all-in-memory, show progress bar, và consider server-side generation.',
    explanation:
      'Heavy computation solutions: (1) Web Worker — move CSV/PDF generation sang background thread. Main thread vẫn responsive, user vẫn interact được. Worker postMessage progress updates → show progress bar. (2) Streaming — đừng build entire CSV string in memory. Dùng ReadableStream + blob: stream rows 1000 rows/batch → append vào file. (3) Server-side generation — cho reports phức tạp (PDF với charts, formatting), generate trên server. Frontend chỉ gửi parameters → nhận download link. Pros: không limit bởi browser memory, server có nhiều resources hơn. (4) Chunked processing — nếu không dùng Worker: xử lý 1000 rows → yield bằng setTimeout(0) hoặc scheduler.yield() → browser paint → xử lý 1000 rows tiếp. (5) UX: (a) Show progress: "Đang xuất... 45/100K rows". (b) Notify khi xong: "File đã sẵn sàng. Tải về." (c) Allow cancel. (d) Disable trigger button để prevent duplicate. (6) Memory: 100K rows × 20 columns × 50 chars = ~100MB string. Dùng Blob URL download thay vì data URI.',
    tags: ['web-worker', 'performance', 'csv-export', 'heavy-computation'],
    year: 2025,
  },
  {
    id: 'rws-028',
    topic: 'react-hooks',
    difficulty: 'senior',
    type: 'system-design',
    question:
      'App cần hiển thị toast notification. Nhưng khi nhiều actions đồng thời (batch import), 50 toasts xếp hàng che hết màn hình. Bạn design thế nào?',
    answer:
      'Toast queue system: max 3-5 visible, priority levels, deduplication, auto-dismiss timers khác nhau, và aggregate similar notifications.',
    explanation:
      'Toast system design: (1) Queue — internal queue, chỉ render max 3-5 toasts visible. Khi toast dismiss → show next trong queue. (2) Priority — error > warning > success > info. Error toast overrides info toast trong queue. (3) Deduplication — nếu 50 records fail import, KHÔNG show 50 toasts giống nhau. Aggregate: "45 records import thất bại" (1 toast). Dedup bằng content hash hoặc id. (4) Auto-dismiss — success: 3s, info: 5s, warning: 8s, error: persistent (user phải dismiss manually). (5) Stacking UI — toasts stack từ bottom hoặc top-right. Animation: slide in, fade out. Hover pause auto-dismiss timer. (6) Actions — toast có action button: "Undo" (cho delete), "View details" (cho error), "Retry" (cho failed). (7) Implementation — Zustand store hoặc React Context. toast.success("message"), toast.error("message") API đơn giản. Libraries: react-hot-toast (3KB), sonner (tốt nhất 2025). (8) Batch mode — detect multiple toasts cùng type trong 1s → aggregate thành 1 summary toast.',
    tags: ['toast', 'notification', 'queue', 'ux-design'],
    year: 2025,
  },
  {
    id: 'rws-029',
    topic: 'testing',
    difficulty: 'mid',
    type: 'system-design',
    question:
      'Bạn join team mới, codebase có 0% test coverage. PM không allocate sprint riêng cho testing. Bạn "sneak in" tests thế nào?',
    answer:
      'Viết test kèm theo mỗi feature/bugfix PR. Focus test vào code mới + regression tests cho bugs. Incrementally build coverage qua thời gian.',
    explanation:
      'Pragmatic testing strategy khi không có dedicated testing sprint: (1) Rule: mỗi PR thêm feature mới → kèm tests cho feature đó. Không touch old code, chỉ test code mới. Code review enforce: "PR không có tests → request changes." (2) Bug reports → regression test. Mỗi bug fix kèm test reproduce bug đó. Đảm bảo bug không quay lại. Dần dần build safety net. (3) Critical paths first — viết 5-10 integration tests cho flows quan trọng nhất (login, checkout, core CRUD). 10 tests này cover 80% business value. (4) Utility functions — pure functions dễ test nhất, ROI cao. 1 file test cho date formatters, validators, calculators → done trong 30 phút. (5) Setup CI — configure Vitest/Jest chạy trong CI pipeline. Mất 30 phút setup 1 lần, benefit mãi mãi. (6) Coverage threshold — set minimum cho new files: 80%. Không force cho existing files. (7) Show value — sau 1 tháng, test đã catch 2-3 bugs trước khi lên production → PM thấy value → allocate time cho testing.',
    tags: ['testing-strategy', 'pragmatic', 'incremental', 'ci'],
    year: 2025,
  },
  {
    id: 'rws-030',
    topic: 'state-management',
    difficulty: 'mid',
    type: 'system-design',
    question:
      'User report: "Tôi edit profile ở Settings page, quay về Dashboard thấy vẫn tên cũ. Phải reload page mới thấy tên mới." Bạn fix thế nào?',
    answer:
      'Cache invalidation — sau khi mutation thành công, invalidate query cache để Dashboard refetch data mới. Dùng React Query invalidateQueries hoặc update cache trực tiếp.',
    explanation:
      'Stale data across pages — đây là vấn đề cực kỳ phổ biến: (1) Root cause — Dashboard và Settings fetch user data với cùng endpoint nhưng cache thì riêng (mỗi useEffect tự fetch và lưu vào local state). Sau khi update ở Settings, Dashboard vẫn hold state cũ. (2) Fix with React Query: Cả 2 pages dùng useQuery({ queryKey: ["user", id] }). Khi Settings mutate: useMutation({ onSuccess: () => queryClient.invalidateQueries({ queryKey: ["user", id] }) }). Dashboard auto-refetch vì query bị invalidated. (3) Fix with Zustand: shared store useUserStore. Settings update store → Dashboard reactive update. (4) Fix with Context: UserProvider ở root, cả 2 pages consume. Update context → cả 2 re-render. (5) Optimistic update — Settings page: onMutate update cache trực tiếp (instant UI), onSettled invalidate cho consistency. (6) refetchOnWindowFocus — React Query: refetchOnWindowFocus: true. Switch tab → auto refetch. Đơn giản nhưng hiệu quả. Key principle: single source of truth cho shared data — dùng cache library thay vì local state.',
    tags: ['cache-invalidation', 'stale-data', 'react-query', 'state-sync'],
    year: 2025,
  },

  // ═══════════════════════════════════════════════════
  // ADVANCED REAL-WORLD SCENARIOS (30 more questions)
  // ═══════════════════════════════════════════════════
  {
    id: 'rws-031',
    topic: 'build-tools',
    difficulty: 'mid',
    type: 'system-design',
    question: 'CI/CD pipeline chạy 45 phút cho mỗi PR. Developer phàn nàn chờ lâu, merge chậm. Bạn optimize thế nào?',
    answer: 'Parallel jobs, cache dependencies, chỉ chạy tests liên quan đến files thay đổi, tách build/test stages, dùng incremental builds.',
    explanation: 'Optimize CI pipeline: (1) Cache — cache node_modules (npm ci cache), cache build outputs. Giảm install từ 3 phút → 30 giây. (2) Parallelism — chạy lint, unit test, e2e test song song thay vì tuần tự. GitHub Actions: jobs chạy parallel by default. (3) Affected-only — dùng nx affected hoặc turborepo để chỉ test/build packages thay đổi. Monorepo 50 packages, chỉ chạy tests cho 2 packages thay đổi. (4) Split E2E — E2E tests thường chiếm 70% CI time. Chạy parallel trên nhiều machines (Playwright shard). Chỉ chạy critical path E2E trên PR, full suite trên main. (5) Docker layer caching — nếu dùng Docker builds. (6) Incremental TypeScript — tsconfig với incremental: true + tsBuildInfoFile. (7) Kết quả: 45 phút → 10-15 phút. Rule: CI > 15 phút = cần optimize.',
    tags: ['ci-cd', 'pipeline', 'optimization', 'developer-experience'],
    year: 2025,
  },
  {
    id: 'rws-032',
    topic: 'build-tools',
    difficulty: 'mid',
    type: 'system-design',
    question: 'Environment variables bị lộ trên client-side bundle. Ai đó tìm thấy API key trong source code trên browser. Bạn xử lý thế nào?',
    answer: 'Rotate API key ngay, chuyển sensitive keys sang server-side proxy, chỉ expose public keys qua NEXT_PUBLIC_ hoặc VITE_ prefix.',
    explanation: 'Xử lý lộ API key: (1) Immediate — rotate (đổi) API key ngay, key cũ bị vô hiệu hóa. (2) Root cause: Vite bundle tất cả biến có prefix VITE_, Next.js bundle NEXT_PUBLIC_. Dev vô ý dùng VITE_STRIPE_SECRET_KEY → lộ. (3) Fix: (a) Sensitive keys (API secret, DB password) KHÔNG BAO GIỜ ở frontend. Tạo API route/proxy trên server: client → /api/payment → server gọi Stripe với secret key. (b) Public keys (Stripe publishable key, Google Maps API key) thì OK ở frontend nhưng cần restrict domain trong provider dashboard. (4) Prevention: (a) Naming convention: .env.local cho secrets, .env.public cho client-safe. (b) ESLint rule scan cho pattern "sk_live_", "secret". (c) git-secrets hoặc truffleHog scan commits. (d) .gitignore .env*. (e) CI variables set qua dashboard, không commit.',
    tags: ['environment-variables', 'security', 'api-keys', 'secrets'],
    year: 2025,
  },
  {
    id: 'rws-033',
    topic: 'react-advanced',
    difficulty: 'senior',
    type: 'system-design',
    question: 'App cần support multi-language (i18n). Có 15 ngôn ngữ, mỗi ngôn ngữ 2000+ translation keys. Bạn kiến trúc thế nào cho hiệu suất?',
    answer: 'Lazy load translations per language, namespace splitting, dùng i18next với backend plugin, cache translations, và ICU message format.',
    explanation: 'Kiến trúc i18n hiệu quả: (1) Lazy load — KHÔNG bundle 15 ngôn ngữ vào initial bundle. Load ngôn ngữ hiện tại lúc runtime: i18next-http-backend fetch /locales/vi/common.json. (2) Namespace splitting — chia translations thành namespaces: common, auth, dashboard, settings. Mỗi page chỉ load namespace cần thiết. (3) Detect ngôn ngữ: browser language → cookie → URL param → default. (4) SSR — render translated HTML trên server, tránh flash of untranslated content. Next.js: next-i18next. (5) ICU message format — xử lý plurals, gender, number formatting đúng cho mỗi locale. (6) Type safety — typescript-i18next plugin hoặc typesafe-i18n cho autocomplete keys. (7) Translation management — Crowdin, Lokalise, Phrase cho translator workflow. CI integration: push new keys → translators dịch → PR auto-created. (8) RTL support — cho Arabic, Hebrew: dir="rtl", CSS logical properties (margin-inline-start thay margin-left).',
    tags: ['i18n', 'internationalization', 'lazy-loading', 'multi-language'],
    year: 2025,
  },
  {
    id: 'rws-034',
    topic: 'react-fundamentals',
    difficulty: 'mid',
    type: 'system-design',
    question: 'Một third-party script (analytics, chat widget) làm app chậm đi 3 giây. PM không cho remove vì business cần. Bạn xử lý thế nào?',
    answer: 'Defer/async loading, load sau user interaction, dùng Web Worker hoặc iframe isolation, và measure impact liên tục.',
    explanation: 'Third-party script optimization: (1) Defer loading — không load analytics khi page init. Dùng requestIdleCallback hoặc setTimeout 3-5 giây. User đã thấy content trước khi analytics load. (2) Async attribute — <script async src="..."> không block parsing. (3) Consent-based — cho GDPR compliance: chỉ load tracking scripts SAU KHI user chấp nhận cookies. Bonus: page nhanh hơn cho users từ chối. (4) Facade pattern — cho chat widgets: hiển thị fake button, chỉ load real widget khi user click "Chat với chúng tôi". Giảm 500KB+ initial load. (5) Iframe isolation — load script trong iframe tránh block main thread và tránh DOM access. (6) Partytown — chạy third-party scripts trong Web Worker. Main thread không bị block. (7) Monitor — dùng PerformanceObserver track Long Tasks attribution. Biết third-party nào gây chậm. (8) Negotiate — show PM data: "Analytics script tăng LCP 3 giây → giảm conversion X%". Business case để thay script nhẹ hơn.',
    tags: ['third-party', 'performance', 'defer', 'web-worker'],
    year: 2025,
  },
  {
    id: 'rws-035',
    topic: 'react-advanced',
    difficulty: 'senior',
    type: 'system-design',
    question: 'App có Error Boundary nhưng khi crash xảy ra, user thấy blank fallback UI không có cách nào recovery. Bạn improve thế nào?',
    answer: 'Error Boundary hiển thị friendly error UI với retry button, report error tự động, và khôi phục partial state.',
    explanation: 'Production-grade Error Boundary: (1) Friendly UI — thay vì white screen, show: "Đã có lỗi xảy ra", nút "Thử lại" (reset error boundary), nút "Quay về trang chủ". (2) Granular boundaries — đặt Error Boundary ở nhiều level: route-level (crash 1 page, sidebar vẫn hoạt động), component-level (crash 1 widget, trang vẫn dùng được). (3) Auto-report — componentDidCatch gửi error + componentStack về Sentry. Include: user ID, current URL, browser info, Redux/Zustand state snapshot. (4) Recovery — nút Retry gọi resetErrorBoundary() (react-error-boundary). Clear query cache trước khi retry: queryClient.clear(). (5) Async errors — Error Boundary KHÔNG catch errors trong event handlers, async code, setTimeout. Cần: try/catch trong handlers, React Query onError, global window.onerror. (6) Monitoring dashboard — track crash rate theo page, component, user segment. Alert khi crash rate > threshold.',
    tags: ['error-boundary', 'error-handling', 'crash-recovery', 'monitoring'],
    year: 2025,
  },
  {
    id: 'rws-036',
    topic: 'css-styling',
    difficulty: 'mid',
    type: 'system-design',
    question: 'Design system team ship component library nhưng consumer apps override styles liên tục. CSS conflicts, specificity wars. Bạn giải quyết thế nào?',
    answer: 'CSS Modules hoặc CSS-in-JS cho encapsulation, design tokens cho customization, và clear API contract cho style overrides.',
    explanation: 'Giải quyết CSS conflicts trong design system: (1) Encapsulation — CSS Modules (unique class names), Shadow DOM (true isolation), hoặc CSS-in-JS (styled-components, emotion). Consumer không thể vô tình override internal styles. (2) Design tokens — expose customization qua CSS custom properties: --button-bg, --button-radius. Consumer override tokens, không override selectors. (3) Variant API — component expose props: <Button variant="primary" size="lg">. Không cần custom CSS. (4) className prop — allow consumers to extend (NOT override) styles. Merge: className={`${internalClass} ${props.className}`}. (5) !important ban — components không dùng !important. Consumer cũng không cần nếu API đủ flexible. (6) Specificity — keep selectors flat (1 class). Avoid nested selectors. BEM cho readability nếu không dùng CSS Modules. (7) Documentation — mỗi component có "Customization" section rõ ràng.',
    tags: ['design-system', 'css-modules', 'css-conflicts', 'component-library'],
    year: 2025,
  },
  {
    id: 'rws-037',
    topic: 'react-hooks',
    difficulty: 'mid',
    type: 'system-design',
    question: 'Table hiển thị 10,000 rows data. Scroll rất giật, DOM quá nặng. Bạn xử lý thế nào mà không pagination?',
    answer: 'Virtualization (windowing) — chỉ render rows visible trong viewport. Dùng @tanstack/react-virtual, react-window, hoặc react-virtuoso.',
    explanation: 'Virtualization cho large lists: (1) Concept — 10,000 rows nhưng viewport chỉ hiển thị ~20 rows. Chỉ render 20 DOM nodes + buffer (~5 mỗi bên). Scroll → recycle DOM nodes, update content. (2) Libraries: @tanstack/react-virtual (lightweight, headless), react-window (fixed/variable size), react-virtuoso (auto-height, grouping). (3) Implementation: const virtualizer = useVirtualizer({ count: 10000, getScrollElement, estimateSize: () => 50 }). Render virtualizer.getVirtualItems().map(row => ...). (4) Variable height — nếu mỗi row height khác nhau: measure DOM sau render, cache measurements. react-virtuoso handle tự động. (5) Horizontal scroll — virtualize cả columns nếu table rộng. (6) Search/filter — filter trên full dataset, virtualize filtered results. (7) Performance bonus: sort client-side (Web Worker cho 10K+ items), sticky headers, column resize. (8) Cost: phức tạp hóa accessibility (screen reader), test khó hơn (items invisible trong DOM).',
    tags: ['virtualization', 'windowing', 'large-list', 'performance'],
    year: 2025,
  },
  {
    id: 'rws-038',
    topic: 'security',
    difficulty: 'senior',
    type: 'system-design',
    question: 'Pentest report cho thấy app vulnerable với CSRF attacks. User đã login có thể bị trick thực hiện actions không mong muốn. Bạn fix thế nào?',
    answer: 'Implement CSRF tokens, SameSite cookie attribute, và verify Origin/Referer headers. Cho modern SPAs, SameSite=Lax + custom headers thường đủ.',
    explanation: 'CSRF protection layers: (1) SameSite cookie — Set-Cookie: session=abc; SameSite=Lax (hoặc Strict). Lax: cookie không gửi khi cross-site POST (ngăn CSRF form submit), nhưng gửi khi top-level navigation GET. Strict: không gửi cookie cross-site bất kỳ trường hợp nào. (2) Custom header — SPA gửi custom header X-Requested-With: XMLHttpRequest. Cross-origin request không thể set custom headers mà không qua CORS preflight → CSRF request bị ngăn. (3) CSRF token — server generate random token, embed trong form/meta tag. Mỗi mutation request phải include token. Server validate. (4) Double-submit cookie — set CSRF token trong cookie + send qua header. Server compare. Attacker không đọc được cookie value (Same-Origin Policy). (5) Verify Origin/Referer headers — reject requests mà Origin header không match domain. (6) Modern SPAs: API requests gửi qua fetch/axios với credentials: "include" + custom headers → CORS preflight tự bảo vệ.',
    tags: ['csrf', 'security', 'same-site', 'cookie'],
    year: 2025,
  },
  {
    id: 'rws-039',
    topic: 'react-fundamentals',
    difficulty: 'junior',
    type: 'system-design',
    question: 'User report: ảnh profile upload thành công nhưng hiển thị ảnh cũ cached. Phải Ctrl+F5 mới thấy ảnh mới. Bạn fix thế nào?',
    answer: 'Cache bust bằng query string với timestamp hoặc file hash: img src="/avatar.jpg?v=1709901553". Hoặc dùng unique filename cho mỗi upload.',
    explanation: 'Browser image cache issues: (1) Root cause — browser cache ảnh theo URL. Upload ảnh mới nhưng cùng URL /avatar/user123.jpg → browser dùng cached version. (2) Fix 1: Cache bust query string — src={`/avatar/${userId}.jpg?t=${Date.now()}`}. Mỗi render URL khác → bypass cache. Nhược: mất caching benefit cho ảnh không đổi. (3) Fix 2: Unique filename — upload → server trả URL /avatar/user123-abc123.jpg (hash content). URL mới = không cache conflict, ảnh cũ vẫn cached cho users khác chưa refresh. Tốt nhất. (4) Fix 3: ETag/Last-Modified — server trả header đúng, browser validate cache. Nhưng vẫn cần 1 request. (5) Fix 4: Optimistic UI — sau upload, hiện ảnh mới local bằng URL.createObjectURL(file) ngay, song song update cache. (6) CDN purge — nếu dùng CDN (CloudFront), invalidate cache cho URL đó sau upload. API: POST /invalidation { paths: ["/avatar/*"] }.',
    tags: ['caching', 'cache-busting', 'image-upload', 'browser-cache'],
    year: 2025,
  },
  {
    id: 'rws-040',
    topic: 'react-advanced',
    difficulty: 'senior',
    type: 'system-design',
    question: 'Micro-frontend: team A dùng React 18, team B dùng Vue 3, cần chạy trên cùng 1 page. Framework nào, tradeoffs gì?',
    answer: 'Module Federation (Webpack 5), Single-SPA, hoặc Web Components. Mỗi cách có tradeoffs về isolation, bundle size, và DevX.',
    explanation: 'Micro-frontend strategies: (1) Module Federation (Webpack 5/Vite) — mỗi team build independently, share dependencies (React chỉ load 1 lần). Runtime integration. Ưu: shared deps, hot reload. Nhược: phải cùng bundler. (2) Single-SPA — framework-agnostic orchestrator. Mỗi micro-frontend là 1 "application" đăng ký vào router. Ưu: mix frameworks (React + Vue + Angular), route-level isolation. Nhược: bundle size lớn (2 framework runtimes), complex setup. (3) Web Components — mỗi micro-frontend export web component. Framework-agnostic, tạo true isolation (Shadow DOM). Nhược: SSR khó, cross-component communication phức tạp. (4) iframe — true isolation nhưng UX kém (no shared state, scroll issues, mobile). Dùng cho widget embed (Stripe Checkout). (5) Shared concerns: cross-MFE communication (Custom Events, shared state store), shared design system (CSS custom properties), authentication (shared cookie/token), routing (single router owns URL). (6) Advice: chỉ dùng micro-frontend khi team thật sự independent (>= 3 teams). Over-engineering cho small teams.',
    tags: ['micro-frontend', 'module-federation', 'single-spa', 'architecture'],
    year: 2025,
  },
  {
    id: 'rws-041',
    topic: 'performance',
    difficulty: 'mid',
    type: 'system-design',
    question: 'User report: "Mỗi lần vào trang, font chữ nhảy từ font mặc định sang font đẹp, nhìn rất khó chịu." Đây là vấn đề gì và fix thế nào?',
    answer: 'FOUT (Flash of Unstyled Text) hoặc FOIT (Flash of Invisible Text). Fix: font-display: swap + preload font, hoặc font-display: optional.',
    explanation: 'Font loading problems: (1) FOIT — browser ẩn text cho đến khi font load (tối đa 3 giây). User thấy blank text. (2) FOUT — browser hiện system font trước, swap khi custom font load xong. Text nhảy layout. (3) Fix font-display: (a) swap — hiện system font ngay, swap khi ready. FOUT nhưng text luôn visible. (b) optional — nếu font chưa cache, dùng system font SUỐT session này. Download background cho lần sau. Không FOUT, không FOIT. (4) Preload — <link rel="preload" href="/fonts/Inter.woff2" as="font" type="font/woff2" crossorigin>. Font tải sớm hơn, giảm FOUT time. (5) Self-host — host font file cùng domain (tránh DNS lookup fonts.googleapis.com). (6) Subset — cho tiếng Việt: chỉ include glyphs cần thiết. unicode-range: U+0000-00FF, U+0102-0103, ... Giảm file 200KB → 30KB. (7) size-adjust — @font-face { size-adjust: 105% } cho fallback font có metrics gần giống → giảm layout shift khi swap.',
    tags: ['font-loading', 'fout', 'foit', 'web-fonts', 'cls'],
    year: 2025,
  },
  {
    id: 'rws-042',
    topic: 'react-hooks',
    difficulty: 'mid',
    type: 'system-design',
    question: 'Dashboard có 10 widgets, mỗi widget fetch API riêng. Page load mất 5 giây vì sequential fetching. Bạn optimize thế nào?',
    answer: 'Parallel fetching với Promise.all/React Query, suspense streaming, preload data, và skeleton UI cho perceived performance.',
    explanation: 'Dashboard optimization: (1) Parallel fetch — mỗi widget dùng useQuery riêng, React Query fetch tất cả song song (default). Nếu dùng useEffect: Promise.all([fetch1(), fetch2(), ...]). Giảm từ 10 × 500ms = 5s → 500ms (max latency). (2) Suspense streaming (React 18) — mỗi widget wrapped trong <Suspense fallback={<Skeleton />}>. Server stream HTML cho từng widget khi data sẵn sàng. User thấy widgets load dần, không phải chờ tất cả. (3) Preload — trên page trước (ví dụ sidebar link), prefetch dashboard data: queryClient.prefetchQuery(["dashboard"]). Khi navigate, data đã có trong cache. (4) Stale-while-revalidate — show data cũ (cache) ngay lập tức, background refetch. User thấy content instant. (5) Priority — widget quan trọng (revenue, alerts) load trước. Widget ít quan trọng (recent activity) lazy load khi user scroll. (6) Aggregate API — BFF (Backend For Frontend) endpoint: GET /api/dashboard trả tất cả widget data trong 1 response. Giảm round trips. (7) Skeleton UI — show layout skeleton ngay. User cảm nhận page đã load, data đang fill vào.',
    tags: ['parallel-fetching', 'dashboard', 'suspense', 'skeleton-ui'],
    year: 2025,
  },
  {
    id: 'rws-043',
    topic: 'javascript-core',
    difficulty: 'mid',
    type: 'system-design',
    question: 'User dùng app trên iPhone cũ (iOS Safari). App crash hoặc hiện blank page. Trên Chrome desktop chạy bình thường. Nguyên nhân?',
    answer: 'JS syntax không supported (optional chaining, nullish coalescing), polyfills thiếu, hoặc memory limit trên thiết bị cũ.',
    explanation: 'Mobile Safari compatibility: (1) Syntax errors — Optional chaining (?.), nullish coalescing (??) không support trên iOS < 13.4. Arrow functions, template literals có thể fail trên rất cũ. Check target trong tsconfig: "target": "es2017" cho safe coverage. (2) Build config — Vite/esbuild DEFAULT không transform syntax cho cũ browsers. Cần config: build.target = "es2015" hoặc dùng @vitejs/plugin-legacy. (3) Polyfills — core-js cho Promise.allSettled, Array.at(), structuredClone. Dùng browserslist: "> 0.5%, iOS >= 13". (4) Memory — iPhone 6/7 có 1-2GB RAM. SPA nặng (10 tabs, large state) → Safari kill tab silently (không có error, chỉ blank). Fix: optimize memory usage, lazy load. (5) Debug — Safari Web Inspector qua mac (cable connect iPhone → Safari → Develop menu). Hoặc remote debug trên BrowserStack. (6) Testing matrix — define minimum supported: iOS >= 14, Android Chrome >= 90. Document và communicate.',
    tags: ['ios-safari', 'compatibility', 'polyfills', 'mobile-debugging'],
    year: 2025,
  },
  {
    id: 'rws-044',
    topic: 'react-hooks',
    difficulty: 'senior',
    type: 'system-design',
    question: 'App có feature undo/redo (giống Google Docs). User thực hiện 50 actions, muốn undo 10 bước rồi redo 3 bước. Bạn implement thế nào?',
    answer: 'Command pattern + two stacks (undo stack, redo stack). Mỗi action là object với execute() và undo() methods.',
    explanation: 'Undo/Redo implementation: (1) Command pattern — mỗi user action là Command object: { execute(), undo(), description }. Ví dụ: AddTextCommand({ execute: () => insert(text, position), undo: () => delete(position, text.length) }). (2) Two stacks — undoStack: Command[], redoStack: Command[]. Execute action → push vào undoStack, clear redoStack. Undo → pop từ undoStack, gọi command.undo(), push vào redoStack. Redo → pop từ redoStack, gọi command.execute(), push vào undoStack. (3) State-based alternative — lưu toàn bộ state snapshot sau mỗi action. Undo = restore snapshot trước. Ưu: simple. Nhược: memory nặng nếu state lớn. Immer patches giải quyết: chỉ lưu diff. (4) React implementation — Zustand middleware: temporal middleware (@zundo). Hoặc useReducer + action history. (5) Giới hạn — cap undo stack 100 actions để tránh memory. (6) Batch — group actions liên quan (10 keystrokes = 1 undo step). Debounce commits. (7) Persistence — lưu undo stack vào IndexedDB cho restore sau refresh.',
    tags: ['undo-redo', 'command-pattern', 'state-history', 'editor'],
    year: 2025,
  },
  {
    id: 'rws-045',
    topic: 'api-networking',
    difficulty: 'mid',
    type: 'system-design',
    question: 'App gọi 5 microservice endpoints. Mỗi service có response time khác nhau. Một service chậm làm toàn bộ page chờ. Bạn xử lý thế nào?',
    answer: 'Fetch parallel, hiển thị independent loading states, timeout per service, graceful degradation khi 1 service fail.',
    explanation: 'Microservice frontend resilience: (1) Parallel + independent — mỗi section fetch riêng. Service A chậm → section A loading, section B-E đã hiện data. ĐỪNG Promise.all nếu sections independent. (2) Timeout — set per-request timeout: AbortSignal.timeout(5000). Service không trả lời trong 5s → hiện fallback UI. (3) Circuit breaker (frontend) — nếu service fail 3 lần liên tiếp → skip, hiện cached data hoặc "Tạm thời không khả dụng". Không spam requests. (4) BFF aggregation — khi nhiều services cần kết hợp data → tạo BFF endpoint. Server call services parallel, aggregate, trả FE 1 response. (5) Fallback data — cached data từ last successful fetch. Even stale data > blank. React Query: gcTime: Infinity, show cached while refetching. (6) Priority loading — critical data (user info, permissions) load first, non-critical (recommendations, activity feed) lazy load. (7) Health check UI — internal dashboard hiện status mỗi service, response time p95.',
    tags: ['microservices', 'resilience', 'timeout', 'graceful-degradation'],
    year: 2025,
  },
  {
    id: 'rws-046',
    topic: 'state-management',
    difficulty: 'senior',
    type: 'system-design',
    question: 'App cần xử lý complex permission system: role-based (admin, editor, viewer), resource-based (own content vs others), và feature flags. Bạn kiến trúc thế nào?',
    answer: 'Centralized permission service, CASL/RBAC library, HOC/hook cho component-level access control, server-side enforcement.',
    explanation: 'Permission architecture: (1) Data model — { user, role, permissions: string[], featureFlags: string[] }. Server trả permissions khi login. Lưu trong auth context/store. (2) CASL library — define abilities: can("read", "Article"), can("update", "Article", { authorId: user.id }). Type-safe, declarative. (3) Component-level — custom hook: const can = usePermission(); if (can("edit", resource)) show EditButton. HOC: withPermission("admin")(AdminPanel). (4) Route-level — ProtectedRoute component check permission trước khi render page. Redirect to /unauthorized nếu không đủ quyền. (5) UI hiding vs disabling — hide menu items user không có quyền (cleaner UX), NHƯNG disable buttons với tooltip "Bạn cần quyền Editor" (educational). (6) Feature flags — LaunchDarkly, Unleash, hoặc simple JSON config. useFeatureFlag("new-checkout"). Enable per user/role/%. (7) Server enforcement — frontend permission chỉ là UX optimization. Server PHẢI validate mọi mutation. Frontend hiding button không ngăn API call.',
    tags: ['permissions', 'rbac', 'feature-flags', 'access-control'],
    year: 2025,
  },
  {
    id: 'rws-047',
    topic: 'performance',
    difficulty: 'mid',
    type: 'system-design',
    question: 'User report: "Khi scroll page, nội dung nhảy lung tung — images load xong đẩy text xuống, banner quảng cáo xuất hiện giữa bài viết." Đây là vấn đề gì?',
    answer: 'Cumulative Layout Shift (CLS). Fix: set explicit width/height cho images/videos, reserve space cho ads/dynamic content, dùng aspect-ratio CSS.',
    explanation: 'CLS fixes: (1) Images — LUÔN set width và height attributes trên <img> tag: <img width="800" height="600">. Browser reserve space trước khi ảnh load. Hoặc dùng CSS aspect-ratio: 4/3. (2) Ads — reserve container: <div style="min-height: 250px"> cho ad slot. Dù ad chưa load, layout stable. (3) Font — font-display: optional tránh text reflow khi custom font load. Dùng size-adjust cho fallback font gần size với custom font. (4) Dynamic content — content inject vào DOM (modals, banners, cookie consent) không nên push existing content xuống. Dùng overlay (position: fixed/absolute) thay vì inserting vào flow. (5) Skeleton — render skeleton cùng kích thước với actual content. Khi data load → replace skeleton, không shift. (6) contain-intrinsic-size — cho content-visibility: auto, set estimated size: contain-intrinsic-size: 0 500px. Browser biết reserve space. (7) Avoid animations that trigger layout — transform/opacity only.',
    tags: ['cls', 'layout-shift', 'core-web-vitals', 'ux'],
    year: 2025,
  },
  {
    id: 'rws-048',
    topic: 'typescript',
    difficulty: 'mid',
    type: 'system-design',
    question: '"any" types tràn lan trong codebase TypeScript. Team nói "thêm type là mất thời gian". Bạn convince và cải thiện thế nào?',
    answer: 'Bật strict mode incrementally, dùng unknown thay any, auto-generate types từ API, và show ROI: types catch bugs sớm hơn.',
    explanation: 'TypeScript strictness roadmap: (1) Convince bằng data — track bugs caught by TypeScript compiler vs runtime. "3 bugs caught this sprint would have been production issues without types." (2) Incremental strict — bật từng strict flag: strict (master flag), noImplicitAny, strictNullChecks. Mỗi sprint bật 1 flag, fix errors. Đừng bật tất cả cùng lúc (500+ errors). (3) ts-expect-error — cho existing any: thêm // @ts-expect-error temporarily. CI track count giảm dần (dashboard). (4) unknown > any — unknown bắt buộc type check trước khi dùng. any cho phép mọi thứ. Refactor any → unknown + type guard. (5) Auto-generate types — OpenAPI spec → types (openapi-typescript). Zod schema → types (z.infer). Prisma → types. Giảm manual typing 70%. (6) ESLint rules — @typescript-eslint/no-explicit-any → warn (không error ngay). Team dần quen. (7) Template — mỗi function/component mới phải typed. Old code → type khi touch (Boy Scout Rule).',
    tags: ['typescript', 'strict-mode', 'type-safety', 'code-quality'],
    year: 2025,
  },
  {
    id: 'rws-049',
    topic: 'react-advanced',
    difficulty: 'senior',
    type: 'system-design',
    question: 'App cho phép user drag-and-drop để reorder list, move items giữa columns (Kanban board). Performance lag khi có 100+ items. Bạn kiến trúc thế nào?',
    answer: 'dnd-kit hoặc @hello-pangea/dnd library, optimistic reorder, virtualize columns, và batched API updates.',
    explanation: 'Drag-and-drop at scale: (1) Library choice — dnd-kit (modular, accessible, performant) hoặc @hello-pangea/dnd (fork of react-beautiful-dnd, Atlassian). Avoid native HTML5 DnD API (limited, janky on mobile). (2) Performance — key insight: khi drag item, ĐỪNG re-render toàn bộ board. React.memo mỗi card. Chỉ re-render column chứa dragged item. (3) Optimistic reorder — update UI ngay khi drop, gửi API async. Nếu fail → revert. User không chờ API. API: PATCH /api/tasks/reorder { taskId, newColumnId, newIndex }. (4) Virtualize — nếu column có 100+ items, virtualize: render 20 visible + buffer. dnd-kit compatible với virtualization. (5) Keyboard support — accessibility requirement. dnd-kit built-in: Space grab, Arrow keys move, Space drop. Screen reader announcements. (6) Touch support — pointer events, touch-action: none trên draggable. Long press to drag (avoid conflict with scroll). (7) Multi-select drag — Ctrl+click select nhiều items, drag cùng lúc. Counter badge "Moving 5 items". (8) Persistence — save order per user trong DB hoặc localStorage.',
    tags: ['drag-and-drop', 'kanban', 'dnd-kit', 'performance'],
    year: 2025,
  },
  {
    id: 'rws-050',
    topic: 'testing',
    difficulty: 'senior',
    type: 'system-design',
    question: 'E2E tests chạy 40 phút, thường xuyên fail vì timeout hoặc selector change. Team ngừng trust E2E suite. Bạn cải thiện thế nào?',
    answer: 'Test critical paths only, dùng data-testid selectors, parallel execution, retry flaky tests, và visual regression thay thế phần UI checks.',
    explanation: 'E2E test optimization: (1) Giảm số tests — chỉ E2E cho 5-10 critical user journeys (sign up, purchase, core CRUD). Phần còn lại: integration tests (nhanh 10x). (2) Stable selectors — dùng data-testid="submit-button" thay CSS selectors (.btn-primary) hoặc text ("Submit"). CSS class thay đổi ≠ test break. (3) Parallel — Playwright: workers: 4 chạy 4 tests song song. Sharding: CI chạy trên 4 machines, mỗi machine 1/4 test suite. 40 phút → 10 phút. (4) Anti-flake — explicit waits (waitForSelector) thay sleep(3000). Retry failed tests 2 lần (--retries=2). Flaky test = quarantine. (5) API shortcuts — E2E test login: KHÔNG fill form mà set cookie/localStorage trực tiếp. Mỗi test setup bằng API calls, không UI actions. Nhanh hơn 5x. (6) Visual regression — Chromatic, Percy snapshot UI. Catch CSS regressions mà E2E không test. (7) Local dev — tests chạy headless < 5 phút để dev chạy trước khi push.',
    tags: ['e2e-testing', 'playwright', 'test-stability', 'parallel-testing'],
    year: 2025,
  },
  {
    id: 'rws-051',
    topic: 'react-fundamentals',
    difficulty: 'junior',
    type: 'system-design',
    question: 'User report: table data hiện đúng nhưng khi sort hoặc filter, animations bị lạ — rows flash, wrong data appear briefly. Nguyên nhân?',
    answer: 'Key prop sai — dùng array index thay vì unique ID. React reconciliation bị nhầm element, gây flash và ghost data.',
    explanation: 'React key prop issues: (1) Sai: items.map((item, index) => <Row key={index} />). Khi sort/filter, index = 0 vẫn là 0 nhưng data khác → React tái sử dụng DOM node cũ, chỉ update props → animations bị reset, input state bị giữ. (2) Đúng: items.map(item => <Row key={item.id} />). Unique, stable key. React track đúng element qua sort/filter, animation di chuyển mượt. (3) Biểu hiện: (a) Form inputs giữ value cũ sau filter. (b) CSS transitions fire lại. (c) Checkbox checked state bị swap. (4) Không dùng gì làm key: index (thay đổi khi sort), Math.random() (re-render mỗi cycle), non-unique values. (5) Best practices: dùng database ID, UUID, hoặc combination unique fields. Nếu data không có ID → generate UUID lúc fetch/create. (6) React DevTools — highlight renders: component với key sai sẽ unmount/remount thay vì update.',
    tags: ['react-key', 'reconciliation', 'list-rendering', 'animations'],
    year: 2025,
  },
  {
    id: 'rws-052',
    topic: 'api-networking',
    difficulty: 'mid',
    type: 'system-design',
    question: 'Backend team muốn chuyển từ REST sang GraphQL. Frontend team lo ngại learning curve và over-fetching chuyển thành under-fetching. Bạn evaluate thế nào?',
    answer: 'Đánh giá theo use case: GraphQL tốt khi nhiều client cần data khác nhau, relationships phức tạp. REST tốt cho CRUD đơn giản. Có thể hybrid.',
    explanation: 'GraphQL vs REST evaluation: (1) GraphQL wins khi: (a) Mobile + Web cần data shapes khác nhau từ cùng API. (b) Dashboards cần aggregate nhiều entities (user + orders + analytics trong 1 query). (c) Rapid iteration — FE thay đổi data requirements mà không cần BE deploy. (2) REST wins khi: (a) Simple CRUD — GraphQL overhead không worth nếu chỉ GET/POST/PUT/DELETE. (b) File upload — GraphQL multipart spec phức tạp. (c) Caching — HTTP caching (CDN, browser) works perfectly với REST. GraphQL POST requests bypass. (3) Concerns: (a) N+1 queries — server phải implement DataLoader. (b) Over-fetching → under-fetching: client phải biết chính xác cần gì, query phức tạp. (c) Error handling khác — HTTP 200 nhưng errors trong response body. (4) Recommendation: start hybrid. Giữ REST cho existing endpoints, GraphQL cho new complex features. Apollo Client hoặc urql cho frontend. (5) Alternative: tRPC (type-safe, no schema, nếu full-stack TypeScript).',
    tags: ['graphql', 'rest', 'api-design', 'architecture-decision'],
    year: 2025,
  },
  {
    id: 'rws-053',
    topic: 'react-hooks',
    difficulty: 'mid',
    type: 'system-design',
    question: 'Modal/Dialog trong app không trap focus — user có thể Tab ra ngoài modal, interact với background content. Screen reader đọc cả background text. Fix thế nào?',
    answer: 'Focus trap, aria-modal, inert attribute trên background content, manage focus on open/close, và Escape key to close.',
    explanation: 'Accessible modal implementation: (1) Focus trap — khi modal mở, Tab chỉ cycle qua interactive elements TRONG modal. Last focusable → Tab → first focusable (loop). Libraries: focus-trap-react, hoặc Radix/HeadlessUI built-in. (2) aria-modal="true" — báo screen reader nội dung ngoài modal irrelevant. ARIA role="dialog". (3) inert attribute — <main inert> khi modal mở. Browser native: background content không focusable, không interactive, screen reader bỏ qua. Polyfill cho older browsers. (4) Focus management — open: auto-focus first interactive element (hoặc close button). Close: return focus về element đã trigger mở modal (button). useRef lưu reference. (5) Escape key — document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal() }). (6) Click outside — onClick trên backdrop để close. NHƯNG cẩn thận: click start inside modal, drag ra ngoài, release = không nên close. Check mousedown + mouseup cùng trên backdrop. (7) Scroll lock — body { overflow: hidden } khi modal open. Restore khi close.',
    tags: ['accessibility', 'modal', 'focus-trap', 'aria'],
    year: 2025,
  },
  {
    id: 'rws-054',
    topic: 'nextjs-frameworks',
    difficulty: 'senior',
    type: 'system-design',
    question: 'Next.js app trên Vercel. Cold start mất 5-8 giây cho serverless functions. User thấy loading lâu. Bạn optimize thế nào?',
    answer: 'Giảm bundle size serverless function, dùng Edge Runtime, warmup strategies, static generation khi có thể, và streaming.',
    explanation: 'Serverless cold start optimization: (1) Bundle size — cold start tỉ lệ thuận với bundle size. Import chỉ functions cần: import { format } from "date-fns" thay import * from "date-fns". serverExternalPackages trong next.config cho deps nặng. (2) Edge Runtime — export const runtime = "edge". Edge functions start < 50ms (V8 isolates vs Node.js container). Hạn chế: không dùng Node.js APIs (fs, crypto). (3) Static generation — trang không cần user-specific data → generateStaticParams() + ISR. Không cold start (serve static file). (4) Streaming — export component async, Next.js stream HTML chunks. First byte nhanh hơn dù data load chậm. (5) Warmup — cron job ping endpoints mỗi 5 phút. Vercel: dùng cron.json. Giữ function warm. (6) Regional — deploy functions ở region gần user. Vercel: regions config. (7) Database connection — cold start hay timeout do DB connection. Dùng connection pooling (PgBouncer, Prisma Accelerate). Serverless function reuse connection pool thay vì mở mới mỗi lần.',
    tags: ['serverless', 'cold-start', 'edge-runtime', 'nextjs'],
    year: 2025,
  },
  {
    id: 'rws-055',
    topic: 'security',
    difficulty: 'mid',
    type: 'system-design',
    question: 'App cho phép user input rich text (bold, italic, links, images) trong comments. Bạn implement thế nào mà an toàn trước XSS?',
    answer: 'Allowlist approach: dùng DOMPurify sanitize HTML, chỉ cho phép tags an toàn (b, i, a, img), strip event handlers và javascript: URLs.',
    explanation: 'Rich text security: (1) Sanitize — DOMPurify.sanitize(html, { ALLOWED_TAGS: ["b", "i", "a", "img", "p", "br", "ul", "li"], ALLOWED_ATTR: ["href", "src", "alt"] }). Mọi thứ khác bị strip. (2) Whitelist > Blacklist — whitelist tags/attrs an toàn. ĐỪNG blacklist (attacker sáng tạo hơn bạn: <img onerror="alert(1)">, <svg/onload=alert(1)>). (3) Validate attributes — href chỉ cho http://, https://, mailto:. CHẶN javascript:void(0), data:text/html. DOMPurify handle mặc định. (4) CSP — Content-Security-Policy: script-src self. Ngay cả nếu XSS bypass sanitizer, inline script không execute. (5) Rendering — React: dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }}. LUÔN sanitize trước khi set. (6) Storage — sanitize TRƯỚC khi lưu VÀ trước khi render (defense in depth). (7) Editor library — TipTap, Slate, Draft.js output structured data (JSON), không raw HTML. Convert to HTML chỉ khi render, với sanitization. An toàn hơn.',
    tags: ['rich-text', 'xss-prevention', 'dompurify', 'sanitization'],
    year: 2025,
  },
  {
    id: 'rws-056',
    topic: 'build-tools',
    difficulty: 'mid',
    type: 'system-design',
    question: 'Monorepo chứa 3 apps (web, admin, mobile-web) và 10 shared packages. npm install mất 5 phút, build mất 15 phút. Bạn optimize thế nào?',
    answer: 'pnpm workspaces cho fast install, Turborepo cho cached/parallel builds, chỉ build affected packages.',
    explanation: 'Monorepo optimization: (1) Package manager — pnpm > npm/yarn. pnpm dùng hard links, không duplicate dependencies. Install giảm disk space 50%, speed tăng 2-3x. (2) Turborepo — turbo run build: (a) Parallel — build independent packages song song. (b) Cache — cache build outputs. Package không thay đổi → skip rebuild (từ local cache hoặc remote cache). Build 15 phút → 2 phút (cache hit). (c) Affected only — chỉ build packages thay đổi + dependents. (3) tsconfig references — TypeScript project references cho incremental type checking. package-a thay đổi → chỉ type-check package-a và consumers. (4) Shared configs — eslint-config-shared, tsconfig-base. Một nơi quản lý, tất cả packages extend. (5) Versioning — changesets cho publishing. Internal packages: workspace:* protocol (link trực tiếp, không publish). (6) CI — remote caching (Turborepo Remote Cache hoặc Vercel). CI share cache giữa PRs → PR build nhanh vì phần lớn packages đã cached.',
    tags: ['monorepo', 'turborepo', 'pnpm', 'build-optimization'],
    year: 2025,
  },
  {
    id: 'rws-057',
    topic: 'react-advanced',
    difficulty: 'senior',
    type: 'system-design',
    question: 'App cần generate PDF invoice phía client với layout phức tạp (header, table, footer, page numbers, logo). Bạn chọn approach nào?',
    answer: 'Hoặc @react-pdf/renderer (React components → PDF), hoặc server-side generation (Puppeteer/Playwright render HTML → PDF), tùy complexity.',
    explanation: 'PDF generation strategies: (1) Client-side — @react-pdf/renderer: viết layout bằng React components (<Document><Page><View><Text>). Output PDF hoàn chỉnh. Ưu: instant, không cần server. Nhược: limited CSS support, không render HTML/browser APIs. Phù hợp: invoices, reports với layout cố định. (2) Server-side Puppeteer — Route /api/invoice/[id]/pdf: server render React component thành HTML, Puppeteer mở headless Chrome, page.pdf(). Ưu: full CSS support, pixel-perfect từ HTML. Nhược: tốn resources, cold start. (3) jsPDF + html2canvas — screenshot DOM → PDF. Simple nhưng quality thấp, text không selectable. (4) Hybrid — generate PDF trên server, cache, send download link. Cho bulkigeneration (100 invoices). (5) Implementation tips: (a) Page break: page-break-before: always trong CSS. (b) Header/footer: @react-pdf/renderer có fixed <View> per page. (c) Page numbers: render function nhận pageNumber, totalPages. (d) Logo: embed base64 image. (6) Large tables — nếu table > 1 page, library tự handle page break cho <Table>.',
    tags: ['pdf-generation', 'react-pdf', 'puppeteer', 'invoice'],
    year: 2025,
  },
  {
    id: 'rws-058',
    topic: 'css',
    difficulty: 'mid',
    type: 'system-design',
    question: 'User report: print trang web ra giấy bị mất header, sidebar chiếm nửa trang, font quá nhỏ, background colors biến mất. Bạn fix thế nào?',
    answer: '@media print CSS: ẩn navigation/sidebar, adjust layout 100% width, đặt font-size readable, force print backgrounds, thêm page-break controls.',
    explanation: 'Print CSS best practices: (1) Media query — @media print { .sidebar, .nav, .footer, .no-print { display: none !important; } .content { width: 100%; margin: 0; } }. (2) Font size — screen 16px có thể nhỏ khi in. Set body { font-size: 12pt; } trong print. (3) Colors — browser mặc định không in background colors/images. Force: * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }. (4) Links — sau <a> hiện URL: a[href]::after { content: " (" attr(href) ")"; }. Người đọc bản in biết link đi đâu. (5) Page breaks — tránh break giữa bảng/hình: table, img { page-break-inside: avoid; }. Break trước section mới: h2 { page-break-before: always; }. (6) Width — remove max-width constraints. Content nên chiếm full width giấy. (7) Dark mode — nếu app dark mode, print phải light: @media print { body { background: white; color: black; } }. (8) Test — Ctrl+P preview trong Chrome. DevTools: Rendering panel → Emulate CSS media: print.',
    tags: ['print-css', 'media-query', 'page-break', 'accessibility'],
    year: 2025,
  },
  {
    id: 'rws-059',
    topic: 'react-hooks',
    difficulty: 'mid',
    type: 'system-design',
    question: 'App có infinite scroll feed (như Facebook/Twitter). Scroll 100+ posts, quay lại đầu feed, app giật và RAM tăng lên 500MB. Bạn fix thế nào?',
    answer: 'Virtualization + unload off-screen posts, giới hạn DOM nodes, recycle components, và compact memory cho old data.',
    explanation: 'Infinite scroll memory optimization: (1) Virtualization — react-virtuoso hoặc @tanstack/react-virtual: chỉ render ~20 posts visible. 100 posts DOM → 20 DOM nodes. RAM giảm 80%. (2) Data windowing — giữ max 200 posts trong memory. User scroll past 200 → drop oldest data, keep reference cho fetch lại. React Query pages: giữ 10 pages, remove cũ. (3) Image cleanup — off-screen images: set src="" hoặc unload. Khi scroll lại → lazy load. Blob URLs: revoke khi unmount. (4) Component recycling — virtualization libraries recycle DOM nodes. Post #1 unmount → DOM node reused cho Post #101. (5) Scroll position restore — khi user navigate away và quay lại: lưu scrollTop + data snapshot trong sessionStorage. Restore vị trí chính xác. (6) Flatten state — mỗi post có comments, reactions, user data. Normalize: posts map, users map, tránh duplicate object references. (7) Performance monitoring — PerformanceObserver track memory. Alert khi memory > threshold.',
    tags: ['infinite-scroll', 'virtualization', 'memory-management', 'feed'],
    year: 2025,
  },
  {
    id: 'rws-060',
    topic: 'react-advanced',
    difficulty: 'senior',
    type: 'system-design',
    question: 'Bạn được yêu cầu build một component library cho công ty. 50+ components, documentation, versioning, và 5 consumer apps. Bạn kiến trúc thế nào?',
    answer: 'Monorepo, Storybook cho docs, semantic versioning, changesets cho releases, và comprehensive testing (unit + visual regression).',
    explanation: 'Component library architecture: (1) Monorepo — packages: @company/ui (components), @company/tokens (design tokens), @company/icons. Turborepo cho builds. (2) Storybook — mỗi component có stories: default, variants, states, edge cases. Storybook = living documentation. Auto-deploy Storybook site. (3) Build — tsup hoặc Vite library mode. Output: ESM + CJS + types. Tree-shakeable: mỗi component importable riêng import { Button } from "@company/ui". (4) Testing — Vitest unit tests cho logic. Chromatic visual regression cho UI. axe-core cho accessibility. (5) Versioning — Semantic Versioning. Changesets: dev add .changeset file mô tả change (major/minor/patch). CI auto-publish khi merge. (6) Design tokens — CSS custom properties: --spacing-md, --color-primary. Consumer apps override tokens cho branding. (7) Documentation — Storybook + MDX pages: usage guide, do/don\'t, API reference. (8) Migration support — codemods cho breaking changes. Deprecation warnings 2 releases trước khi remove.',
    tags: ['component-library', 'storybook', 'design-system', 'versioning'],
    year: 2025,
  },
]
