import type { QuestionTranslationMap } from '../types'

export const realWorldScenariosVi: QuestionTranslationMap = {
  // ═══════════════════════════════════════════════════
  // DEBUGGING & PRODUCTION ISSUES
  // ═══════════════════════════════════════════════════
  'rws-001': {
    question: 'User báo lỗi "trang web trắng trơn" trên production nhưng team dev không reproduce được. Bạn xử lý thế nào?',
    explanation:
      'Quy trình debug production white screen: (1) Thu thập context — hỏi user: browser + version, OS, thiết bị, mạng (WiFi/4G), có dùng VPN/ad blocker không. Screenshot nếu có. (2) Check error monitoring — Sentry/Datadog sẽ có stack trace. Tìm error gần nhất match thời gian user báo. (3) Reproduce — dùng BrowserStack/Sauce Labs test trên cùng browser + OS. Bật DevTools throttle network. (4) Nguyên nhân phổ biến: (a) JS bundle fail to load (CDN issue, ad blocker chặn script), (b) Polyfill thiếu cho browser cũ, (c) CORS error trên API endpoint, (d) localStorage/cookie bị đầy hoặc bị chặn (private mode Safari), (e) CSP header chặn inline script. (5) Phòng tránh — Error Boundary ở root, global error handler report về server, smoke test trên BrowserStack matrix sau mỗi deploy.',
    answer:
      'Thu thập thông tin từ user (browser, OS, network), kiểm tra error monitoring (Sentry), check console logs từ xa, reproduce trên cùng điều kiện, và kiểm tra cache/CDN.',
  },
  'rws-002': {
    question: 'PM báo "trang chậm lắm" nhưng không nói cụ thể. Bạn approach thế nào để tìm và fix bottleneck?',
    explanation:
      '"Chậm" là mơ hồ — cần data. Bước 1: Chạy Lighthouse trên production URL (không phải localhost) → xem điểm Performance và từng metric. Bước 2: Check RUM (Real User Monitoring) data từ web-vitals library hoặc CrUX report → biết user thật trải nghiệm thế nào. Bước 3: Xác định bottleneck: (a) LCP > 2.5s → hero image chưa optimize, render-blocking CSS/JS, server response chậm. (b) INP > 200ms → event handler nặng, long task trên main thread, quá nhiều re-render. (c) CLS > 0.1 → image không có width/height, dynamic content inject, font swap. Bước 4: Fix theo impact — thường 20% effort fix 80% vấn đề: optimize images (WebP/AVIF), code splitting, preload critical resources. Bước 5: Set performance budget và CI check để prevent regression. Quan trọng: đừng optimize mù — luôn đo trước và sau.',
    answer:
      'Đo lường trước khi optimize: dùng Lighthouse, Web Vitals, Chrome DevTools Performance tab. Xác định metric nào kém (LCP, INP, CLS), rồi fix theo priority.',
  },
  'rws-003': {
    question: 'API trả về lỗi 500 random — khoảng 5% request bị fail. User thấy error message. Bạn xử lý phía frontend thế nào?',
    explanation:
      'Intermittent 500 thường do server overload, database connection pool exhausted, hoặc race condition ở backend. Phía frontend: (1) Auto-retry — cho GET request, retry 2-3 lần với exponential backoff (1s, 2s, 4s). KHÔNG retry POST/PUT/DELETE trừ khi có idempotency key (nguy cơ duplicate data). (2) Error UI — thay vì "500 Internal Server Error" (user không hiểu), hiển thị "Đã có lỗi xảy ra. Vui lòng thử lại." với nút Retry. (3) React Query tự động retry 3 lần cho query failures — cấu hình retry: 3, retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000). (4) Report — log error với context (URL, request body, timestamp, user ID) về Sentry. (5) Graceful degradation — nếu API non-critical (recommendations, analytics), ẩn section thay vì show error. (6) Phối hợp backend — gửi error pattern cho backend team kèm request ID để trace.',
    answer:
      'Implement retry với exponential backoff cho các request idempotent (GET), hiển thị error UI thân thiện với nút retry cho user, và report error về monitoring.',
  },
  'rws-004': {
    question: 'Deploy xong, user cũ vẫn thấy version cũ và gặp lỗi "ChunkLoadError" hoặc "Loading chunk xxx failed". Nguyên nhân và cách fix?',
    explanation:
      'Đây là vấn đề cực kỳ phổ biến với SPA code splitting. Kịch bản: User mở app, browser cache index.html. Deploy mới xảy ra → server xóa old chunks, upload new chunks. User navigate → React.lazy() cố load old chunk → 404 → ChunkLoadError. Fix: (1) Giữ lại old chunks ít nhất 24-48h sau deploy (cấu hình CDN/S3 không xóa file cũ). (2) Catch ChunkLoadError và auto-reload: window.addEventListener("error", (e) => { if (e.message.includes("Loading chunk")) window.location.reload(); }). (3) Set Cache-Control: no-cache cho index.html (luôn validate). Set Cache-Control: max-age=31536000, immutable cho JS/CSS chunks (có content hash trong tên file). (4) Version check — call API /api/version định kỳ, nếu khác version hiện tại thì notify user "Phiên bản mới đã sẵn sàng" với nút Refresh. (5) Service Worker cách ly — precache critical chunks.',
    answer:
      'File JS cũ đã bị xóa trên server khi deploy version mới. Browser đang cache HTML cũ reference đến chunk file không còn tồn tại.',
  },
  'rws-005': {
    question: 'App ngày càng chậm khi dùng lâu — ban đầu mượt nhưng sau 30 phút bắt đầu giật lag. Bạn nghi ngờ memory leak. Cách diagnose?',
    explanation:
      'Quy trình diagnosis memory leak: (1) Mở Chrome DevTools → Memory tab. (2) Chụp Heap Snapshot lúc vừa load app. (3) Sử dụng app 5 phút (navigate, interact). (4) Force GC (click biểu tượng thùng rác). Chụp Snapshot 2. (5) Lặp lại sau 5 phút nữa → Snapshot 3. (6) So sánh Snapshot 2 vs 1, Snapshot 3 vs 2 — tìm object types có count/size tăng liên tục. Thủ phạm phổ biến trong React: (a) useEffect thiếu cleanup — setInterval/setTimeout không clear, event listener không remove. (b) Closure capture DOM node đã unmount. (c) WebSocket/EventSource handler chồng chất. (d) State array append liên tục (chat messages, logs) mà không giới hạn size. (e) Third-party SDK (analytics, chat widget) leak. Fix pattern: luôn return cleanup trong useEffect, dùng WeakRef cho cache, giới hạn array size, và test memory với Playwright automation.',
    answer:
      'Dùng Chrome DevTools Memory tab: chụp heap snapshot ở 3 thời điểm, so sánh để tìm object tăng liên tục, kiểm tra detached DOM nodes và uncleaned listeners.',
  },
  'rws-006': {
    question: 'Designer gửi mockup, bạn code xong nhìn y hệt trên Chrome. Nhưng QA test trên Safari thì layout bị vỡ. Bạn xử lý thế nào?',
    explanation:
      'Vấn đề cross-browser Safari phổ biến: (1) Flexbox gap — Safari < 14.1 không support gap trong flexbox (chỉ Grid). Fallback: dùng margin. (2) 100vh — Safari mobile tính 100vh bao gồm address bar → content bị cắt. Fix: dùng 100dvh (dynamic viewport height) hoặc -webkit-fill-available. (3) date input — Safari không support input type="date" trước version 14.1. Cần custom date picker. (4) scrollbar styling — Safari dùng ::-webkit-scrollbar, Firefox dùng scrollbar-width. (5) backdrop-filter — cần -webkit-backdrop-filter prefix. (6) Smooth scroll — scroll-behavior: smooth có lag trên Safari. Quy trình: (a) Setup BrowserStack hoặc thực tế test trên iPhone/iPad từ sprint đầu, không đợi QA. (b) Thêm autoprefixer vào build (PostCSS). (c) Check caniuse.com trước khi dùng feature mới. (d) Viết CSS fallback: @supports not (gap: 1rem) { ... }.',
    answer:
      'Kiểm tra CSS features không supported trên Safari, test cross-browser từ đầu, dùng autoprefixer, và biết các Safari-specific bugs phổ biến.',
  },
  'rws-007': {
    question: 'Security audit phát hiện app có lỗ hổng XSS. Tester inject được script qua ô comment. Bạn fix thế nào và prevent trong tương lai?',
    explanation:
      'Checklist fix XSS: (1) Fix ngay — tìm nơi render user input. Nếu dùng innerHTML hoặc dangerouslySetInnerHTML → đổi sang textContent hoặc React JSX (tự escape). Nếu phải render HTML (rich text editor), dùng DOMPurify hoặc sanitize-html để lọc. (2) React tự escape JSX expression {userInput} nên an toàn. NHƯNG dangerouslySetInnerHTML bỏ qua hàng rào này. Search toàn codebase: grep -r "dangerouslySetInnerHTML|innerHTML|document.write|eval(". (3) Server-side — escape output, validate input type (email thì chỉ chấp nhận email format). (4) CSP headers — Content-Security-Policy: script-src \'self\' ngăn inline script execute ngay cả khi inject được. (5) HTTPOnly cookies — ngăn XSS steal session token. (6) Phòng tránh — setup ESLint rule no-dangerouslySetInnerHTML (hoặc restrict). Code review checklist bao gồm XSS check. Security training cho team. Quét tự động với tools Snyk, OWASP ZAP trong CI.',
    answer:
      'Sanitize user input trước khi render, dùng textContent thay innerHTML, enable CSP headers, và tuyệt đối không dùng dangerouslySetInnerHTML với unsanitized data.',
  },
  'rws-008': {
    question: 'Form phức tạp (20+ fields, nhiều conditional fields, validation rules) bị lag khi user gõ. Mỗi keystroke mất 200-300ms. Nguyên nhân và cách fix?',
    explanation:
      'Nguyên nhân gốc: Nếu dùng controlled form với single useState object cho toàn bộ form, mỗi keystroke setState → re-render entire form tree (20+ fields + validation + conditional logic). Chẩn đoán: React DevTools Profiler → xem component nào render lại và mất bao lâu. Fixes theo priority: (1) React Hook Form — dùng register() với uncontrolled inputs, component chỉ re-render khi submit hoặc khi field được watch(). Re-render giảm từ 20 fields → 1 field. (2) Nếu phải dùng controlled: tách mỗi field thành component riêng với React.memo. Parent truyền onChange qua useCallback. (3) Debounce validation — không validate on every keystroke mà onBlur hoặc debounce 300ms. (4) Conditional fields — dùng useMemo để compute visible fields, tránh re-calculate trên mỗi render. (5) Schema validation (Zod/Yup) chạy đồng bộ trên mỗi change → nặng. Chuyển sang validate async hoặc chỉ validate field đang thay đổi. Điểm chính: 20 controlled inputs = 20 re-renders mỗi keystroke. Uncontrolled + React Hook Form = 0 re-renders mỗi keystroke.',
    answer:
      'Mỗi keystroke re-render toàn bộ form component. Fix: dùng React Hook Form (uncontrolled), tách form thành sub-components với React.memo, hoặc isolate state per field.',
  },
  'rws-009': {
    question: 'User ở Việt Nam report app load chậm hơn nhiều so với user ở US, dù cùng thiết bị. Nguyên nhân và cách optimize?',
    explanation:
      'Network latency US → VN khoảng 200-300ms round trip. Mỗi request cộng thêm 200-300ms. SPA cần 5-10 API calls = 1-3 giây overhead thuần network. Giải pháp: (1) CDN — deploy static assets (JS, CSS, images) lên CDN có POP ở Southeast Asia (Cloudflare, CloudFront Singapore). Giảm asset load từ 300ms → 30ms. (2) Edge Functions — Vercel Edge, Cloudflare Workers xử lý lightweight requests gần user. (3) API gateway ở Asia — nếu backend ở US, đặt API proxy/cache ở Singapore. Cache responses phổ biến. (4) Giảm round trips — aggregate API calls (BFF pattern), preload data, inline critical data trong HTML. (5) Service Worker — cache API responses cho lần truy cập tiếp. (6) Image optimization — serve smaller images cho mobile. WebP/AVIF nhẹ hơn 30-50%. (7) Code splitting — chỉ load code cho route hiện tại. (8) Preconnect — <link rel="preconnect" href="api-domain"> giảm DNS + TLS handshake time. Test: dùng Chrome DevTools throttle "Slow 3G" preset.',
    answer:
      'Latency cao do server/CDN ở US. Fix: deploy edge functions, dùng CDN multi-region, optimize asset delivery, và implement caching strategies.',
  },
  'rws-010': {
    question: 'User bấm nút "Back" trên browser, form data bị mất hết. User phải nhập lại từ đầu. Bạn xử lý thế nào?',
    explanation:
      'Chiến lược bảo toàn form data: (1) sessionStorage — save form data on every change: sessionStorage.setItem("checkout-form", JSON.stringify(formData)). Khi mount, khôi phục: useState(() => JSON.parse(sessionStorage.getItem("...")) || defaults). Clear sau khi submit thành công. (2) URL state — cho filters/search, persist vào query params: ?category=shoes&sort=price. User bookmark được và share link giữ nguyên state. (3) History API state — history.pushState({ formData }, ...) cho multi-step form. popstate event restore data. (4) Cảnh báo beforeunload — khi form đã dirty (có thay đổi): window.addEventListener("beforeunload", (e) => { if (isDirty) { e.preventDefault(); e.returnValue = ""; } }). React Router: useBlocker() hoặc <Prompt>. (5) React Hook Form kết hợp sessionStorage: dùng custom hook useFormPersist. (6) Multi-step wizard — save completed steps, cho phép quay lại step trước mà không mất data.',
    answer:
      'Persist form state vào sessionStorage hoặc URL params. Khi user quay lại, restore data từ storage. Thêm confirmation dialog khi user navigate away với unsaved changes.',
  },

  // ═══════════════════════════════════════════════════
  // TEAM COLLABORATION & PROCESS
  // ═══════════════════════════════════════════════════
  'rws-011': {
    question: 'Hai developer cùng sửa một file và tạo merge conflict lớn. Bạn resolve thế nào và prevent trong tương lai?',
    explanation:
      'Quy trình resolve: (1) git diff để hiểu từng bên thay đổi gì. (2) KHÔNG pick một bên rồi bỏ bên kia — cần hiểu business logic cả 2. Gọi developer kia pair-resolve nếu cần. (3) Sau merge, chạy TOÀN BỘ tests, build, và manual smoke test feature cả 2 bên. Conflicts trong generated files (lock files) → delete và regenerate. Phòng tránh: (1) PR nhỏ, focused — merge trong ngày, không để PR open hàng tuần. (2) Giao tiếp — Slack: "Mình đang refactor UserProfile.tsx" để teammate biết tránh sửa cùng lúc. (3) Cấu trúc file — tách component nhỏ thay vì 1 file 2000 dòng. 2 người sửa 2 component khác nhau → không conflict. (4) Feature flags — cả 2 dev merge vào main nhưng code bật/tắt bằng flag → không block nhau. (5) Trunk-based development — merge nhỏ, thường xuyên. Tránh long-lived feature branches. (6) Code ownership (CODEOWNERS file) — biết ai responsible cho file nào.',
    answer:
      'Resolve: hiểu intent của cả 2 changes, merge manually, test kỹ sau khi resolve. Prevent: chia nhỏ PR, communicate trước khi sửa shared files, dùng feature flags.',
  },
  'rws-012': {
    question: 'Bạn vừa deploy và nhận alert: error rate tăng đột biến 10x. Bạn làm gì trong 5 phút đầu tiên?',
    explanation:
      'Incident response — thời gian là vàng: Phút 0-1: (1) Xác nhận incident — check error monitoring (Sentry), uptime monitoring. Có thật sự là vấn đề không? (2) Notify team lead / on-call engineer. Phút 1-3: (3) ROLLBACK — đây là action quan trọng nhất. Vercel: 1-click rollback. AWS: switch deployment. K8s: kubectl rollout undo. ĐỪNG cố debug và hotfix trên production — rollback nhanh hơn 100 lần. Phút 3-5: (4) Verify — check error rate sau rollback. Nếu về bình thường → incident contained. (5) Communicate — update status page, Slack channel "#incidents". Sau đó: (6) Investigate — diff giữa old và new version. Check Sentry error details. Reproduce locally. (7) Fix — fix bug, viết test cover case đó, deploy lại. (8) Post-mortem — viết incident report: timeline, root cause, impact, prevention. Bài học: deploy vào thứ 6 chiều = nguy hiểm. Setup canary deployment (5% traffic trước).',
    answer:
      'Rollback ngay lập tức về version trước, sau đó mới investigate root cause. Không cố fix trên production.',
  },
  'rws-013': {
    question: 'PR đã được 2 người review, approve, và merge. Lên production phát hiện bug nghiêm trọng. Code review process đã fail ở đâu? Cải thiện thế nào?',
    explanation:
      'Tại sao code review bỏ sót bug: (1) Reviewer không hiểu toàn bộ context — chỉ nhìn diff, không test. (2) Review fatigue — PR quá lớn (500+ dòng thay đổi), reviewer skim qua. (3) Happy path bias — reviewer check logic chính, bỏ sót edge cases. Cải thiện: (1) Automated tests — unit test cho business logic, integration test cho user flows chính. CI chạy tests trước khi merge. Bug xảy ra → viết test cover case đó (regression test). (2) Staging environment — deploy lên staging giống production, QA test trước khi production. (3) Giới hạn kích thước PR — enforce max 400 dòng mỗi PR. Nhỏ hơn → review kỹ hơn. (4) Checklist — PR template bắt buộc: "Đã test trên các browser nào?", "Edge cases nào đã consider?", "Ảnh hưởng backward compatibility?". (5) Canary deploy — 5% traffic → nếu error rate tăng → auto rollback. (6) Feature flags — merge code nhưng chưa enable, QA test riêng trước khi bật. (7) Pair programming cho changes phức tạp.',
    answer:
      'Code review không thể bắt tất cả bug. Cần bổ sung automated testing, staging environment testing, và canary deployment để tạo nhiều lớp bảo vệ.',
  },
  'rws-014': {
    question: 'Legacy codebase React — code lộn xộn, không có tests, 1 component 2000 dòng, props drilling 5 levels. Bạn được giao refactor. Approach thế nào?',
    explanation:
      'Strangler Fig Pattern cho frontend: (1) KHÔNG big bang rewrite — Joel Spolsky gọi đây là "sai lầm chiến lược tệ nhất một công ty có thể mắc phải". Refactor incrementally. (2) Bước 1: Viết integration tests cho user flows chính TRƯỚC KHI sửa code. Tests = lưới an toàn đảm bảo không break behavior. (3) Bước 2: Extract — tách component 2000 dòng thành nhiều components nhỏ. Bắt đầu từ UI leaf nodes (Button, Input) rồi lên composite components. (4) Bước 3: Giải quyết props drilling — xác định data nào thật sự shared → đưa vào Context hoặc Zustand. Data chỉ dùng parent-child → giữ props. (5) Bước 4: Extract custom hooks — logic reusable (data fetching, form validation) thành hooks. (6) Ưu tiên: refactor theo business value — component nào team sửa nhiều nhất (git log --name-only), refactor trước. Component ít ai động → để sau. (7) Mỗi refactor PR là 1 commit nhỏ, merge ngay, không tạo branch dài ngày. (8) Quy tắc Boy Scout — mỗi lần chạm vào một file, cải thiện nó một chút.',
    answer:
      'Refactor incrementally — KHÔNG rewrite toàn bộ. Viết tests cho behavior hiện tại trước, rồi refactor từng phần nhỏ, verify bằng tests sau mỗi bước.',
  },
  'rws-015': {
    question: 'Client yêu cầu app phải đạt chuẩn WCAG 2.1 AA. Hiện tại app chưa có accessibility nào cả. Bạn lên kế hoạch thế nào?',
    explanation:
      'Lộ trình tuân thủ WCAG: Giai đoạn 1 - Audit (1 sprint): (1) Chạy axe-core/Lighthouse Accessibility trên tất cả pages → liệt kê vi phạm. (2) Test keyboard navigation — Tab qua toàn bộ interactive elements. (3) Test screen reader (VoiceOver/NVDA) trên flows chính. (4) Kiểm tra color contrast ratio (tối thiểu 4.5:1 cho text). Giai đoạn 2 - Fix quan trọng (2-3 sprints): (1) Semantic HTML — thay div onClick bằng button, thay div bằng nav/main/section. (2) Alt text cho tất cả images. Decorative images: alt="". (3) Focus management — visible focus indicator (:focus-visible), skip-to-content link. (4) Form labels — mỗi input phải có label linked bằng htmlFor. (5) Color contrast — điều chỉnh palette. Giai đoạn 3 - Phòng tránh: (1) eslint-plugin-jsx-a11y trong ESLint. (2) axe-core trong integration tests. (3) Storybook addon-a11y cho component development. (4) Checklist trong PR template. (5) Training cho team.',
    answer:
      'Audit hiện trạng, fix critical issues trước (keyboard navigation, color contrast, alt text), rồi cải thiện dần dần. Tích hợp a11y testing vào CI.',
  },

  // ═══════════════════════════════════════════════════
  // COMMON PRACTICAL SCENARIOS
  // ═══════════════════════════════════════════════════
  'rws-016': {
    question: 'App cần hoạt động khi mất internet (offline). User đang điền form giữa chừng thì mất mạng. Bạn xử lý thế nào?',
    explanation:
      'Xử lý offline: (1) Phát hiện — navigator.onLine + "online"/"offline" events. NHƯNG navigator.onLine không đáng tin 100%. Verify bằng periodic ping endpoint. (2) Form data — auto-save vào localStorage/IndexedDB mỗi 5 giây hoặc onBlur. Khi user quay lại → restore. (3) Mutation queue — khi offline, PUT/POST requests vào queue (IndexedDB). Hiển thị badge "1 thay đổi đang chờ". Khi online lại → flush queue theo thứ tự. (4) UI feedback — hiển thị banner "Bạn đang offline. Thay đổi sẽ được lưu khi có mạng lại." (5) React Query offline mode — networkMode: "offlineFirst" cache data, pauseMutations khi offline. (6) Conflict handling — nếu submit offline, khi sync server nói data đã thay đổi → hiển thị conflict UI cho user chọn. (7) Service Worker — cache API responses cho read operations.',
    answer:
      'Phát hiện trạng thái online/offline, queue mutations khi offline, sync khi có mạng lại, và luôn thông báo user về connection status.',
  },
  'rws-017': {
    question: 'User report: "Tôi đăng nhập rồi mà lúc thì vào được, lúc thì bị đá ra login lại". Token authentication đang có vấn đề gì?',
    explanation:
      'Các vấn đề auth token phổ biến: (1) Token expiry — access token hết hạn (thường 15-60 phút). Nếu không auto-refresh → user bị kick. Fix: interceptor check 401 response → gọi /refresh-token → retry request. (2) Race condition — 5 API calls đồng thời, tất cả nhận 401, tất cả cùng gọi refresh → 5 refresh requests → token bị invalidate. Fix: dùng promise queue — request đầu tiên gọi refresh, các request sau đợi kết quả cùng 1 promise. (3) Token storage — localStorage bị XSS truy cập. httpOnly cookie an toàn hơn nhưng cần CSRF protection. (4) Multi-tab — Tab A refresh token → token cũ trong Tab B invalid. Fix: BroadcastChannel hoặc storage event để sync token giữa tabs. (5) Silent refresh — dùng iframe hoặc refresh token rotation. (6) Implementation: Axios interceptor: response interceptor bắt 401 → refresh → retry.',
    answer:
      'Access token hết hạn nhưng refresh token flow bị lỗi. Cần implement silent token refresh, xử lý race conditions khi nhiều requests đồng thời cần refresh.',
  },
  'rws-018': {
    question: 'Trang product listing có 200 sản phẩm, mỗi sản phẩm có ảnh. Page load mất 8 giây, data transfer 15MB. Bạn optimize thế nào?',
    explanation:
      'Optimize trang nhiều ảnh: (1) Lazy loading — chỉ load ảnh khi gần viewport. HTML native: loading="lazy". Chỉ ảnh above-the-fold (6-8 sản phẩm đầu) load eager. (2) Responsive images — srcset và sizes cho browser chọn ảnh đúng kích thước. Mobile 375px không cần ảnh 1200px. Giảm 60-70% data. (3) Modern formats — WebP nhẹ hơn JPEG 25-35%. AVIF nhẹ hơn nữa. Dùng <picture> element với fallback. (4) Image CDN — Cloudinary, imgix, Vercel Image Optimization tự resize/compress on-the-fly. (5) Pagination/Infinite scroll — đừng render 200 items cùng lúc. Mỗi page 20-30 items. (6) Placeholder — blur placeholder (LQIP) hoặc dominant color → ảnh load mượt, không layout shift. width/height attribute trên img (prevent CLS). (7) CDN — serve images từ edge gần user. Cache-Control: max-age=31536000, immutable. (8) Kết quả: 15MB → 2-3MB, 8s → 2s.',
    answer:
      'Lazy load images, responsive images (srcset), modern formats (WebP/AVIF), pagination/infinite scroll, và virtualization.',
  },
  'rws-019': {
    question: 'App e-commerce: user add item vào cart ở tab 1, mở tab 2 thấy cart vẫn trống. Cùng app, cùng user. Bạn fix thế nào?',
    explanation:
      'Giải pháp sync state giữa tabs: (1) BroadcastChannel API — tạo channel "cart-sync", khi state thay đổi → postMessage. Tabs khác listen và update local state. Hiện đại, sạch sẽ. (2) localStorage + storage event — mỗi khi write cart vào localStorage, tab khác nhận được "storage" event (tự động). Zustand persist middleware tự save vào localStorage → thêm listener cho storage event để sync. (3) Zustand implementation: create(persist(stateCreator, { name: "cart" })). Thêm trong useEffect: window.addEventListener("storage", (e) => { if (e.key === "cart") useCartStore.persist.rehydrate() }). (4) Server-side sync — cart lưu trên server (API), 2 tabs fetch từ cùng source. Dùng React Query với refetchOnWindowFocus: true → switch tab = auto refetch. (5) Khuyến nghị: Zustand persist + storage event listener cho client-side state. Server-side cart + React Query cho e-commerce quan trọng.',
    answer:
      'Sync state giữa các tabs bằng BroadcastChannel API hoặc storage event. Zustand/Redux persist middleware + cross-tab sync.',
  },
  'rws-020': {
    question: 'Backend team thay đổi API response format mà không báo trước. Frontend app crash ở production vì đọc property undefined. Bạn prevent thế nào?',
    explanation:
      'An toàn API contract: (1) Runtime validation — dùng Zod schema validate mọi API response: const UserSchema = z.object({ id: z.string(), name: z.string(), email: z.string().email() }). Nếu response không match → throw descriptive error thay vì crash ở component. (2) Contract testing — trong CI, chạy test gọi API endpoint thật (staging) → validate response bằng Zod schema → nếu fail → chặn deploy. (3) OpenAPI/Swagger — backend publish API spec. Frontend generate types từ spec (openapi-typescript). Khi spec thay đổi → TypeScript lỗi → biết ngay. (4) Optional chaining phòng thủ — user?.address?.city thay vì user.address.city. Không giải quyết gốc rễ nhưng ngăn crash. (5) Quy trình: (a) Backend PHẢI update API docs trước khi deploy. (b) Breaking changes cần version API: /api/v2/users. (c) Deprecation timeline: format cũ vẫn available 2 sprints. (d) Slack channel #api-changes cho thông báo.',
    answer:
      'Runtime validation với Zod/io-ts tại API boundary, API contract testing trong CI, và quy trình communication giữa FE/BE team.',
  },
  'rws-021': {
    question: 'User report: "Tôi bấm nút Submit nhiều lần vì không biết nó đang processing hay không." Bạn cải thiện UX thế nào?',
    explanation:
      'Best practices UX khi Submit: (1) Loading state — khi submit: button disabled, text đổi "Submit" → "Đang gửi...", spinner icon. CSS: opacity: 0.7, cursor: not-allowed. (2) Ngăn double submit — 3 lớp: disable button, guard trong handler (if (isSubmitting) return), AbortController cancel request trước. (3) Feedback — Thành công: toast notification "Đã gửi thành công!" hoặc redirect sang confirmation page. Lỗi: inline error message rõ ràng "Không thể gửi. Vui lòng thử lại." với retry button. (4) Optimistic UI — cho actions đơn giản (like, bookmark), update UI ngay, revert nếu fail. (5) Progress indication — cho upload file: progress bar %. Cho multi-step: stepper "Bước 2/4". (6) Form validation — validate trước khi submit, show errors inline ngay khi user blur field. Đừng đợi submit rồi mới báo lỗi. (7) Skeleton loading — khi load data, show skeleton thay vì blank screen.',
    answer:
      'Loading state rõ ràng: disable button + loading spinner + text thay đổi ("Đang gửi..."), ngăn double submit, và phản hồi success/error.',
  },
  'rws-022': {
    question: 'Bundle size của app là 2.5MB (gzipped 800KB). Management yêu cầu giảm xuống dưới 500KB gzipped. Bạn approach thế nào?',
    explanation:
      'Kế hoạch giảm bundle: (1) Phân tích — chạy vite-plugin-visualizer hoặc webpack-bundle-analyzer. Xem treemap: thường 2-3 packages chiếm 60% bundle. (2) Quick wins: (a) moment.js (300KB) → date-fns hoặc dayjs (2-7KB). (b) lodash (70KB full) → lodash-es cherry-pick hoặc native JS. (c) Tất cả icons import → chỉ import icons dùng. react-icons/fa thay vì react-icons. (d) Duplicate packages — 2 versions khác nhau của cùng 1 lib. npm ls <package> để check. (3) Code splitting — React.lazy() cho mỗi route. User vào /dashboard chỉ load dashboard code, không load /settings code. (4) Dynamic import — cho heavy libraries: const Chart = lazy(() => import("chart.js")). Chỉ load khi user navigate đến page có chart. (5) Tree shaking — verify sideEffects: false trong package.json. Import { specific } thay vì import * . (6) External CDN — cho libs ít thay đổi. (7) Compression — Brotli > gzip, tiết kiệm thêm 15-20%. (8) CI budget — size-limit chặn PR nếu bundle vượt ngưỡng.',
    answer:
      'Analyze bundle composition, loại bỏ unused dependencies, code split theo route, tree-shake, lazy load heavy libraries, và thay thế bloated packages.',
  },
  'rws-023': {
    question: 'App hoạt động tốt trên desktop nhưng layout hoàn toàn vỡ trên mobile. Deadline gấp, bạn fix nhanh thế nào?',
    explanation:
      'Checklist fix mobile khẩn cấp: (1) Viewport meta tag — kiểm tra <meta name="viewport" content="width=device-width, initial-scale=1"> trong <head>. Không có tag này → mobile render ở 980px width rồi zoom out. (2) Fixed widths — search codebase cho width: 1200px, width: 960px → đổi thành max-width hoặc percentage. (3) Overflow — tìm element nào overflow horizontal (gây scroll ngang). DevTools Mobile view → inspect element tràn ra ngoài. Phổ biến: table quá rộng, image không constrain. Fix: overflow-x: auto cho table wrapper, img { max-width: 100%; height: auto; }. (4) Font size — text quá nhỏ trên mobile. Tối thiểu 16px cho body text (cũng ngăn iOS auto-zoom on input focus). (5) Touch targets — button/link quá nhỏ. Tối thiểu 44x44px (Apple guidelines). (6) Quick responsive: flexbox flex-wrap: wrap cho card layouts, Grid auto-fit/minmax. (7) Ẩn non-essential — trên mobile ẩn sidebar, simplify navigation thành hamburger menu. (8) Test — Chrome DevTools Device Mode + test trên iPhone thật (Safari rendering khác Chrome).',
    answer:
      'Viewport meta tag, responsive units, media queries cho breakpoints chính, flexbox/grid auto-reflow, và test trên real devices.',
  },
  'rws-024': {
    question: 'App cần hiển thị data real-time (stock prices, chat messages, notifications). Bạn chọn WebSocket, SSE, hay polling? Trade-offs?',
    explanation:
      'So sánh: (1) Polling — setInterval fetch mỗi 5-30s. Ưu: đơn giản nhất, hoạt động mọi nơi, stateless. Nhược: lãng phí (99% poll trả về không có gì mới), latency = poll interval, tải server. Dùng khi: dashboard update mỗi 30s. (2) SSE (Server-Sent Events) — server push events qua HTTP. Ưu: tự động reconnect, server implementation đơn giản, hoạt động qua proxies/CDN, một chiều (server → client). Nhược: chỉ text data, max 6 connections per domain trên HTTP/1.1. Dùng khi: notifications, live feed, stock ticker, build logs. (3) WebSocket — full-duplex hai chiều. Ưu: latency thấp, hỗ trợ binary, real-time thật sự. Nhược: phức tạp (quản lý connection, reconnection, heartbeat), stateful (khó scale), bị chặn bởi corporate proxies. Dùng khi: chat, collaborative editing, multiplayer game. Khuyến nghị: 80% use cases → SSE đủ. Chat → WebSocket. Dashboard → polling hoặc SSE.',
    answer:
      'Tùy use case: WebSocket cho bidirectional (chat), SSE cho server-push (notifications, stock), polling cho đơn giản khi real-time không critical.',
  },
  'rws-025': {
    question: 'Product owner yêu cầu thêm feature "dark mode". App hiện tại hardcode colors khắp nơi (200+ components, 50+ CSS files). Bạn implement thế nào?',
    explanation:
      'Chiến lược implement dark mode: (1) Định nghĩa tokens — tạo CSS custom properties: :root { --bg-primary: #ffffff; --text-primary: #1a1a1a; --surface: #f5f5f5; }. [data-theme="dark"] { --bg-primary: #121212; --text-primary: #e0e0e0; --surface: #1e1e1e; }. (2) Migration — KHÔNG đổi tất cả 200 components cùng lúc. Thay đổi từng nhóm: shared components trước → page layouts → specific pages. Search-replace: color: #1a1a1a → color: var(--text-primary). (3) Toggle logic — React context: ThemeProvider quản lý state. Script trong <head> (sync, trước render) đọc localStorage → set data-theme attribute → tránh flash of wrong theme. (4) System preference — @media (prefers-color-scheme: dark) làm default. User manual choice override và persist localStorage. (5) Lưu ý design: dark mode KHÔNG phải invert colors. Cần: giảm saturation, dimmed images, elevated surfaces sáng hơn, kiểm tra contrast ratios lại. (6) Testing — visual regression test cả 2 modes.',
    answer:
      'Dùng CSS custom properties (variables) cho theming, tạo light/dark token sets, migrate colors incrementally, và persist user preference.',
  },
  'rws-026': {
    question: 'SEO team report: trang quan trọng nhất không được Google index dù đã live 2 tháng. Bạn kiểm tra và fix thế nào?',
    explanation:
      'Checklist debug SEO: (1) robots.txt — file robots.txt có chặn crawler không? Check /robots.txt. Lỗi phổ biến: Disallow: / chặn toàn bộ site. (2) Meta robots — <meta name="robots" content="noindex"> trong <head>? Search codebase. Có thể set trong CMS hoặc framework config. (3) Google Search Console — URL Inspection tool: submit URL → xem Google render như thế nào. Nếu blank → JS rendering issue. (4) Client-side rendering — SPA render content bằng JavaScript. Googlebot có execute JS nhưng với delay. Nếu data load bằng useEffect → có thể không có trong initial HTML. Fix: dùng SSR (Next.js) hoặc SSG cho pages cần index. (5) Canonical URL — có <link rel="canonical"> trỏ sai không? Duplicate content issues? (6) Sitemap — submit sitemap.xml qua Search Console. Auto-generate bằng next-sitemap. (7) Page speed — Google ưu tiên pages nhanh. Core Web Vitals ảnh hưởng ranking. (8) Internal links — page không có link nào trỏ đến? Orphan pages khó index.',
    answer:
      'Check robots.txt, meta robots tag, Search Console errors, rendering (CSR vs SSR), và sitemap. Đảm bảo content trong initial HTML, không chỉ load bằng JavaScript.',
  },
  'rws-027': {
    question: 'App có feature export CSV/PDF report. Khi data lớn (100K rows), browser tab freeze 10+ giây. User nghĩ app bị crash. Bạn fix thế nào?',
    explanation:
      'Giải pháp cho tính toán nặng: (1) Web Worker — chuyển CSV/PDF generation sang background thread. Main thread vẫn responsive, user vẫn tương tác được. Worker postMessage progress updates → hiển thị progress bar. (2) Streaming — đừng build toàn bộ CSV string trong memory. Dùng ReadableStream + blob: stream rows 1000 rows/batch → append vào file. (3) Server-side generation — cho reports phức tạp (PDF với charts, formatting), generate trên server. Frontend chỉ gửi parameters → nhận download link. (4) Chunked processing — nếu không dùng Worker: xử lý 1000 rows → yield bằng setTimeout(0) hoặc scheduler.yield() → browser paint → xử lý 1000 rows tiếp. (5) UX: (a) Hiển thị progress: "Đang xuất... 45/100K rows". (b) Thông báo khi xong: "File đã sẵn sàng. Tải về." (c) Cho phép cancel. (d) Disable trigger button. (6) Bộ nhớ: 100K rows × 20 columns × 50 chars = ~100MB string. Dùng Blob URL download thay vì data URI.',
    answer:
      'Chuyển heavy computation sang Web Worker, stream processing thay vì load all-in-memory, show progress bar, và cân nhắc server-side generation.',
  },
  'rws-028': {
    question: 'App cần hiển thị toast notification. Nhưng khi nhiều actions đồng thời (batch import), 50 toasts xếp hàng che hết màn hình. Bạn design thế nào?',
    explanation:
      'Thiết kế hệ thống toast: (1) Queue — internal queue, chỉ render tối đa 3-5 toasts hiển thị. Khi toast dismiss → hiển thị tiếp theo trong queue. (2) Priority — error > warning > success > info. Error toast override info toast trong queue. (3) Deduplication — nếu 50 records fail import, KHÔNG hiển thị 50 toasts giống nhau. Gộp lại: "45 records import thất bại" (1 toast). Dedup bằng content hash hoặc id. (4) Auto-dismiss — success: 3s, info: 5s, warning: 8s, error: persistent (user phải dismiss thủ công). (5) Stacking UI — toasts stack từ bottom hoặc top-right. Animation: slide in, fade out. Hover pause auto-dismiss timer. (6) Actions — toast có action button: "Undo" (cho delete), "Xem chi tiết" (cho error), "Thử lại" (cho failed). (7) Implementation — Zustand store hoặc React Context. toast.success("message") API đơn giản. Libraries: react-hot-toast (3KB), sonner (tốt nhất 2025). (8) Batch mode — detect nhiều toasts cùng type trong 1s → gộp thành 1 summary toast.',
    answer:
      'Hệ thống toast queue: tối đa 3-5 hiển thị, priority levels, deduplication, auto-dismiss timers khác nhau, và gộp similar notifications.',
  },
  'rws-029': {
    question: 'Bạn join team mới, codebase có 0% test coverage. PM không allocate sprint riêng cho testing. Bạn "lén" thêm tests thế nào?',
    explanation:
      'Chiến lược testing thực dụng khi không có sprint riêng: (1) Quy tắc: mỗi PR thêm feature mới → kèm tests cho feature đó. Không touch old code, chỉ test code mới. Code review enforce: "PR không có tests → request changes." (2) Bug reports → regression test. Mỗi bug fix kèm test reproduce bug đó. Đảm bảo bug không quay lại. Dần dần xây safety net. (3) Critical paths first — viết 5-10 integration tests cho flows quan trọng nhất (login, checkout, core CRUD). 10 tests này cover 80% business value. (4) Utility functions — pure functions dễ test nhất, ROI cao. 1 file test cho date formatters, validators, calculators → done trong 30 phút. (5) Setup CI — cấu hình Vitest/Jest chạy trong CI pipeline. Mất 30 phút setup 1 lần, benefit mãi mãi. (6) Coverage threshold — set minimum cho new files: 80%. Không force cho existing files. (7) Thể hiện giá trị — sau 1 tháng, test đã bắt 2-3 bugs trước khi lên production → PM thấy value → allocate time cho testing.',
    answer:
      'Viết test kèm theo mỗi feature/bugfix PR. Focus test vào code mới + regression tests cho bugs. Incrementally xây dựng coverage theo thời gian.',
  },
  'rws-030': {
    question: 'User report: "Tôi edit profile ở Settings page, quay về Dashboard thấy vẫn tên cũ. Phải reload page mới thấy tên mới." Bạn fix thế nào?',
    explanation:
      'Stale data giữa các pages — đây là vấn đề cực kỳ phổ biến: (1) Nguyên nhân gốc — Dashboard và Settings fetch user data với cùng endpoint nhưng cache riêng (mỗi useEffect tự fetch và lưu vào local state). Sau khi update ở Settings, Dashboard vẫn giữ state cũ. (2) Fix với React Query: Cả 2 pages dùng useQuery({ queryKey: ["user", id] }). Khi Settings mutate: useMutation({ onSuccess: () => queryClient.invalidateQueries({ queryKey: ["user", id] }) }). Dashboard auto-refetch vì query bị invalidated. (3) Fix với Zustand: shared store useUserStore. Settings update store → Dashboard reactive update. (4) Fix với Context: UserProvider ở root, cả 2 pages consume. Update context → cả 2 re-render. (5) Optimistic update — Settings page: onMutate update cache trực tiếp (instant UI), onSettled invalidate cho consistency. (6) refetchOnWindowFocus — React Query: refetchOnWindowFocus: true. Switch tab → auto refetch. Nguyên tắc chính: single source of truth cho shared data — dùng cache library thay vì local state.',
    answer:
      'Cache invalidation — sau khi mutation thành công, invalidate query cache để Dashboard refetch data mới. Dùng React Query invalidateQueries hoặc update cache trực tiếp.',
  },
}
