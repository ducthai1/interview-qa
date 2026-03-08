import type { QuestionTranslationMap } from '../types'

export const performanceVi: QuestionTranslationMap = {
  'pf-001': {
    question: 'LCP (Largest Contentful Paint) đo lường điều gì trong Core Web Vitals?',
    options: [
      'Thời gian cho đến khi nhận được byte đầu tiên của HTML',
      'Thời gian render của khối hình ảnh hoặc văn bản lớn nhất hiển thị trong viewport — thước đo chính về tốc độ tải cảm nhận được. LCP tốt là dưới 2.5 giây.',
      'Tổng thời gian để trang trở nên tương tác hoàn toàn',
      'Độ ổn định trực quan của bố cục trang trong quá trình tải',
    ],
    explanation:
      'LCP đo thời điểm phần tử nội dung lớn nhất (hero image, H1, video poster) xuất hiện trong viewport. Tốt: ≤2.5s, Cần cải thiện: 2.5-4s, Kém: >4s. Tối ưu: preload hero image (<link rel="preload">), dùng next/image, phục vụ WebP, tránh lazy-loading hình ảnh above-the-fold, dùng SSR/SSG để có HTML ngay lập tức.',
  },
  'pf-002': {
    question:
      'CLS (Cumulative Layout Shift) đo lường điều gì và nguyên nhân phổ biến nhất là gì?',
    options: [
      'Tổng thời gian thực thi JavaScript',
      'Sự không ổn định trực quan do các thay đổi bố cục bất ngờ — các phần tử di chuyển sau khi render ban đầu. Nguyên nhân phổ biến: hình ảnh không có width/height rõ ràng, quảng cáo/embed không có kích thước, nội dung được chèn động phía trên nội dung hiện có.',
      'Thời gian từ lần vẽ đầu tiên đến khi tương tác hoàn toàn',
      'Độ trễ mạng giữa client và server',
    ],
    explanation:
      'Điểm CLS = tổng (phần ảnh hưởng × phần khoảng cách) cho mỗi layout shift. Tốt: ≤0.1. Khắc phục: luôn đặt width và height cho hình ảnh/video, dùng CSS aspect-ratio, giữ chỗ cho quảng cáo/banner, tránh chèn nội dung phía trên DOM hiện có. next/image tự động xử lý ngăn CLS thông qua prop fill và width/height.',
  },
  'pf-003': {
    question:
      'INP (Interaction to Next Paint) là gì và nó đã thay thế chỉ số nào trong Core Web Vitals?',
    options: [
      'INP thay thế LCP vào năm 2024; nó đo thời gian phản hồi server',
      'INP thay thế FID (First Input Delay) vào tháng 3/2024 như một Core Web Vital. Nó đo độ trễ của TẤT CẢ tương tác (click, bàn phím, chạm) trong suốt vòng đời trang và báo cáo giá trị tệ nhất. INP tốt là dưới 200ms.',
      'INP là chỉ số mới được thêm cùng FID, không phải thay thế',
      'INP đo thời gian request mạng cho các lệnh gọi API',
    ],
    explanation:
      'INP trở thành Core Web Vital vào tháng 3/2024, thay thế FID. FID chỉ đo độ trễ input đầu tiên; INP đo khả năng phản hồi trong suốt phiên. INP = thời gian từ tương tác người dùng đến khi trình duyệt render frame tiếp theo để phản hồi. Tối ưu: chia nhỏ long task (yield với scheduler.yield()), tránh block main thread, dùng web worker cho tính toán nặng.',
  },
  'pf-004': {
    question:
      'React.lazy() với dynamic import() chỉ tải JavaScript của component khi component được render lần đầu tiên.',
    explanation:
      'React.lazy(() => import("./Component")) tạo một component lazy-loaded. Bundle JS cho Component chỉ được tải xuống khi React lần đầu thử render nó (khi nó vào component tree). Kết hợp với Suspense fallback, điều này ngăn code được tải cho đến khi cần, giảm kích thước bundle ban đầu.',
  },
  'pf-005': {
    question:
      'Memoization trong React là gì và khi nào nên dùng useMemo so với useCallback?',
    options: [
      'useMemo và useCallback đều hoạt động giống hệt nhau',
      'useMemo ghi nhớ giá trị đã tính (cache kết quả của lời gọi hàm). useCallback ghi nhớ tham chiếu hàm (cache chính hàm đó). Dùng useMemo cho các phép tính tốn kém. Dùng useCallback khi truyền callback cho component con đã tối ưu (React.memo) để ngăn re-render không cần thiết.',
      'useCallback dành cho hàm async; useMemo dành cho tính toán đồng bộ',
      'useMemo yêu cầu React.memo; useCallback hoạt động độc lập',
    ],
    explanation:
      'useMemo(() => expensiveCalc(data), [data]) — chỉ tính lại khi data thay đổi, trả về giá trị đã cache. useCallback(() => handleClick(id), [id]) — trả về cùng tham chiếu hàm cho đến khi id thay đổi. Cảnh báo tối ưu sớm: chỉ dùng khi profiler cho thấy vấn đề hiệu năng thực tế. Cả hai đều thêm overhead và có thể làm giảm hiệu năng nếu lạm dụng.',
  },
  'pf-006': {
    question:
      'Component này có vấn đề hiệu năng gì và bạn sẽ sửa như thế nào?',
    answer:
      'React.memo không hiệu quả vì arrow function mới () => onDelete(todo.id) được tạo mỗi lần render, khiến tất cả TodoItem đều bị re-render.',
    explanation:
      'Arrow function tạo tham chiếu mới mỗi lần render. React.memo so sánh props theo tham chiếu. Tham chiếu hàm mới khiến kiểm tra bằng thất bại, làm tất cả children đã memo bị re-render. Sửa: wrap onDelete trong useCallback ở component cha: const handleDelete = useCallback((id) => onDelete(id), [onDelete]). Hoặc truyền onDelete trực tiếp và xử lý id trong TodoItem.',
  },
  'pf-007': {
    question:
      'Virtualization (windowing) là gì và khi nào nên dùng TanStack Virtual?',
    options: [
      'Virtualization chạy React trong máy ảo để bảo mật',
      'Virtualization chỉ render các phần tử DOM hiển thị trong viewport cho danh sách/lưới dài. Thay vì render 10.000 item, nó chỉ render ~20 item hiển thị và thay thế khi người dùng cuộn. TanStack Virtual tính toán vị trí và cung cấp kích thước item cho cửa sổ hiển thị.',
      'Virtualization là kỹ thuật chỉ dùng để lazy load hình ảnh',
      'TanStack Virtual là giải pháp thay thế ReactDOM để render',
    ],
    explanation:
      'Render 10.000 DOM node rất chậm — hiệu năng initial paint, bộ nhớ và cuộn đều bị ảnh hưởng. Virtualization (react-window, TanStack Virtual) chỉ render các hàng hiển thị + buffer. TanStack Virtual là headless (không ràng buộc DOM) và hỗ trợ chiều cao hàng thay đổi, virtualization ngang và virtualization lưới. Dùng khi danh sách vượt quá ~100 item với UI hàng phức tạp.',
  },
  'pf-008': {
    question: 'React Profiler đo lường những gì và cách sử dụng nó?',
    options: [
      'Nó đo thời gian request mạng cho các lệnh gọi API trong ứng dụng React',
      'React Profiler ghi lại tần suất component render, thời gian render, và props nào gây ra mỗi lần re-render. Dùng tab Profiler trong React DevTools (ghi phiên, xem commit flamegraph) hoặc component API <Profiler> để profiling theo chương trình.',
      'Nó đo hiệu năng paint và layout của CSS',
      'Profiler chỉ khả dụng trong bản production build',
    ],
    explanation:
      'React DevTools Profiler hiển thị: thời gian render từng component trong flame graph, render nào kích hoạt render khác, và tại sao mỗi component re-render (props/state nào thay đổi). API <Profiler id="header" onRender={callback}> ghi lại phase, duration, commitTime theo chương trình. Luôn profile trước khi tối ưu — bottleneck hiếm khi ở nơi bạn nghĩ.',
  },
  'pf-009': {
    question:
      'Mục đích của thuộc tính `loading="lazy"` trên hình ảnh là gì và nó có những hạn chế nào?',
    options: [
      'Nó làm hình ảnh tải ở độ phân giải thấp trước, sau đó mới đầy đủ',
      'Nó trì hoãn việc tải hình ảnh cho đến khi chúng gần viewport, giảm trọng lượng trang ban đầu. Hạn chế: KHÔNG nên dùng cho hình ảnh above-the-fold (LCP) — nó trì hoãn nội dung quan trọng nhất. Dùng "eager" hoặc bỏ qua loading cho hero image.',
      'Nó áp dụng hiệu ứng CSS lazy-fade cho hình ảnh',
      'Nó tự động chuyển đổi hình ảnh sang định dạng WebP',
    ],
    explanation:
      'loading="lazy" là thuộc tính trình duyệt native trì hoãn tải hình ảnh cho đến khi cách viewport ~500-800px (tùy trình duyệt). Hạn chế quan trọng: không bao giờ dùng cho hình ảnh LCP — nó thêm độ trễ cho nội dung trực quan quan trọng nhất. Ngoài ra, cung cấp thuộc tính width/height để ngăn CLS. next/image áp dụng lazy loading mặc định nhưng cho phép ghi đè với prop priority cho hình ảnh LCP.',
  },
  'pf-010': {
    question:
      'Web Workers là gì và chúng cải thiện hiệu năng frontend như thế nào?',
    options: [
      'Web Workers là service worker xử lý đồng bộ hóa nền',
      'Web Workers chạy JavaScript trên thread nền riêng biệt với main thread, cho phép các tác vụ nặng CPU (xử lý dữ liệu, mã hóa, thao tác hình ảnh, nén) mà không block UI. Chúng giao tiếp qua postMessage/onmessage. Không thể truy cập DOM.',
      'Web Workers dùng để xử lý HTTP request song song',
      'Web Workers thay thế async/await cho các thao tác song song',
    ],
    explanation:
      'Main thread xử lý render UI, sự kiện người dùng và JavaScript. Long task (>50ms) gây jank. Web Workers chuyển tính toán sang thread nền: phân tích dữ liệu (CSV, JSON), lọc hình ảnh, đánh index tìm kiếm, thao tác mã hóa. Dùng thư viện Comlink để đơn giản hóa API postMessage. Các tính năng concurrent của React 18 cũng giúp bằng cách tạm dừng rendering, nhưng Worker thực sự song song hóa công việc CPU.',
  },
  'pf-011': {
    question:
      'PRPL pattern là gì và nó tối ưu hóa việc tải ứng dụng web như thế nào?',
    options: [
      'PRPL là viết tắt của Prepare, Render, Paint, Load',
      'Push/Preload tài nguyên quan trọng, Render route ban đầu NGAY LẬP TỨC, Pre-cache các route còn lại, Lazy-load các route khác theo yêu cầu. Nó tối đa hóa hiệu năng cảm nhận: phục vụ JS tối thiểu cho first paint, prefetch các trang còn lại trong thời gian rảnh.',
      'PRPL là pattern render React dành cho Server Components',
      'PRPL là kỹ thuật CSS animation cho chuyển trang mượt mà',
    ],
    explanation:
      'PRPL: (P) Push tài nguyên quan trọng qua <link rel="preload"> hoặc HTTP/2 Server Push; (R) Render route ban đầu với JS tối thiểu; (P) Pre-cache dùng Service Worker (lưu app shell và các route); (L) Lazy-load các route theo yêu cầu. Kết hợp lại, điều này mang đến chuyển trang gần như tức thì sau lần tải đầu tiên trong khi giảm thiểu payload lần truy cập đầu.',
  },
  'pf-012': {
    question: 'Component React này có vấn đề hiệu năng gì?',
    answer:
      'allData là tham chiếu ổn định ở cấp module, nên dependency không gây hại NHƯNG heavySearch vẫn chạy mỗi khi query thay đổi. Vấn đề thực sự là nếu allData được tạo bên trong component (ví dụ từ prop hoặc state), nó sẽ là tham chiếu mới mỗi lần render, làm memo vô hiệu.',
    explanation:
      'Vì allData là hằng số cấp module (tham chiếu ổn định), useMemo chỉ tính lại đúng cách khi query thay đổi. Tuy nhiên, nếu allData đến từ props dưới dạng object/array literal, nó sẽ được tạo lại mỗi render, khiến useMemo không hiệu quả. Pattern ở đây đúng — mối quan ngại là về nguồn gốc allData. Cũng cân nhắc: Web Worker cho heavySearch nếu nó thực sự blocking.',
  },
  'pf-013': {
    question:
      'Sự khác biệt giữa requestAnimationFrame và setTimeout cho animation là gì?',
    options: [
      'Chúng có thể thay thế nhau cho mục đích animation',
      'requestAnimationFrame (rAF) đồng bộ với chu kỳ repaint của trình duyệt (~60fps), đảm bảo animation mượt và tiết kiệm pin. Nó tạm dừng khi tab bị ẩn. setTimeout kích hoạt vào thời điểm tùy ý có thể không khớp với repaint, gây animation giật và công việc không cần thiết trên tab ẩn.',
      'setTimeout nhanh hơn vì nó không đợi chu kỳ paint',
      'rAF chỉ hoạt động cho CSS animation; setTimeout xử lý animation bằng JS',
    ],
    explanation:
      'CSS animation/transition và Web Animations API sử dụng rAF nội bộ. Cho JavaScript animation, dùng rõ ràng requestAnimationFrame(() => { updatePosition(); requestAnimationFrame(loop) }). rAF gom với ngân sách paint 16ms (~60fps). setTimeout(fn, 16) kích hoạt xấp xỉ 16ms nhưng có thể lệch khỏi visual refresh, gây xé frame. rAF tự động giảm tốc trong tab nền, tiết kiệm CPU/pin.',
  },
  'pf-014': {
    question:
      'Làm thế nào để phân tích và giảm kích thước bundle JavaScript lớn bằng Vite?',
    options: [
      'Dùng flag --analyze với vite build',
      'Cài rollup-plugin-visualizer, thêm vào plugins trong vite.config.ts, rồi chạy vite build. Nó tạo treemap HTML hiển thị đóng góp kích thước của từng module. Tìm dependency lớn bất thường, module trùng lặp, và module cần được code-split.',
      'Dùng tab Coverage trong Chrome DevTools sau khi tải trang',
      'Phân tích bundle cần webpack; Vite không có công cụ phân tích',
    ],
    explanation:
      'rollup-plugin-visualizer với visualizer({ open: true }) tạo bản đồ bundle trực quan. Phát hiện phổ biến: moment.js (thay bằng date-fns), lodash (dùng lodash-es với tree shaking), toàn bộ thư viện icon (chỉ import icon đã dùng), dev dependency bị đóng gói nhầm, React trùng lặp ở các phiên bản khác nhau. Cũng dùng vite --reporter=verbose cho output kích thước chunk trong CI.',
  },
  'pf-015': {
    question:
      'React Compiler (trước đây là React Forget) là gì và nó thay đổi câu chuyện memoization như thế nào?',
    options: [
      'Trình biên dịch JSX mới biên dịch JSX thành JavaScript hiệu quả hơn',
      'Trình biên dịch tối ưu (khả dụng dạng experimental trong React 19) tự động áp dụng memoization (tương đương memo, useMemo, useCallback) ở cấp compiler, phân tích code component để xác định giá trị nào cần ổn định — có thể loại bỏ nhu cầu dùng memo/useMemo/useCallback thủ công.',
      'Trình biên dịch TypeScript-sang-JavaScript chuyên dụng cho React',
      'Công cụ build biên dịch React thành Web Components',
    ],
    explanation:
      'React Compiler (experimental, khả dụng từ React 19) phân tích code component và hook tĩnh, xác định giá trị nào ổn định giữa các render, và tự động chèn memoization. Mục tiêu: lập trình viên viết React thông thường (không cần rải useMemo/useCallback khắp nơi) mà vẫn đạt hiệu năng tương đương. Vẫn đang ở giai đoạn áp dụng sớm — chưa hỗ trợ mọi pattern, và có thể opt-out từng component với directive "use no memo".',
  },
  'pf-016': {
    question: 'API scheduler.yield() là gì và nó giúp cải thiện INP như thế nào?',
    options: [
      'Nó kết thúc chuỗi Promise đang chạy dài',
      'scheduler.yield() (trước đây là scheduler.postTask với priority cao) nhường quyền điều khiển lại cho trình duyệt giữa task, cho phép xử lý các tương tác người dùng đang chờ. Chia nhỏ long task với await scheduler.yield() ngăn block main thread, trực tiếp cải thiện INP bằng cách đảm bảo trình duyệt có thể phản hồi tương tác sớm hơn.',
      'Nó tạm dừng render React để xử lý sự kiện bàn phím',
      'Nó lên lịch network request ở priority thấp hơn',
    ],
    explanation:
      'Long task (>50ms) block main thread và ảnh hưởng INP. Pattern: cho vòng lặp xử lý nặng, định kỳ await scheduler.yield() để nhường event loop. Ví dụ: if (i % 100 === 0) await scheduler.yield(). Trình duyệt xử lý tương tác đang xếp hàng trước khi tiếp tục. Các tính năng concurrent của React 18 (startTransition) cung cấp phiên bản tích hợp React cho rendering.',
  },
  'pf-017': {
    question:
      'Các định dạng hình ảnh có thứ hạng hiệu năng rõ ràng: AVIF tốt nhất, rồi WebP, rồi JPEG/PNG. Bạn nên luôn phục vụ AVIF khi được hỗ trợ.',
    explanation:
      'Mặc dù AVIF đạt tỷ lệ nén tốt nhất (thường nhỏ hơn WebP 50%), nó có nhược điểm: encoding AVIF chậm hơn đáng kể (vấn đề build-time), một số hình ảnh phức tạp với chi tiết nhỏ có thể trông kém hơn ở nén cao, và decoding AVIF có thể nặng CPU trên thiết bị mobile cấp thấp. WebP nhìn chung là lựa chọn mặc định an toàn hơn. next/image và các trình tối ưu hình ảnh khác dùng header Accept để phục vụ định dạng tốt nhất theo hỗ trợ trình duyệt.',
  },
  'pf-018': {
    question:
      'font-display: swap là gì và tại sao nó quan trọng cho Core Web Vitals?',
    options: [
      'Nó đổi màu font khi hover cho thiết kế tương tác',
      'font-display: swap làm trình duyệt hiển thị văn bản fallback ngay lập tức trong khi font tùy chỉnh đang tải, sau đó hoán đổi sang font tùy chỉnh khi sẵn sàng — ngăn văn bản vô hình (FOIT) khi font đang tải. Cải thiện FCP và LCP bằng cách hiển thị nội dung ngay lập tức.',
      'Nó cho phép font subsetting để giảm kích thước file',
      'Nó preload font ở nền trước khi cần',
    ],
    explanation:
      'FOIT (Flash of Invisible Text) với font-display: block ẩn văn bản lên đến 3 giây khi tải font — ảnh hưởng LCP. font-display: swap hiển thị system font ngay, hoán đổi khi font tùy chỉnh tải xong. Nhược điểm: FOUT (Flash of Unstyled Text) gây layout shift. Giảm thiểu với: @font-face size-adjust, ascent-override để khớp metrics fallback, giảm CLS từ font swap. Next.js fonts API (next/font) xử lý tự động với CLS bằng không.',
  },
  'pf-019': {
    question:
      'Debouncing là gì và khi nào bạn sử dụng nó để tối ưu hiệu năng?',
    options: [
      'Debouncing giống throttling — cả hai đều giới hạn tốc độ gọi hàm',
      'Debouncing trì hoãn lời gọi hàm cho đến sau một khoảng thời gian không hoạt động. Dùng cho ô tìm kiếm (đợi người dùng ngừng gõ trước khi gọi API), xử lý resize cửa sổ, và validation form — ngăn gọi API quá nhiều hoặc tính toán tốn kém trên mỗi phím nhấn.',
      'Debouncing là kỹ thuật tối ưu hóa build tool',
      'Debouncing ngăn hàm được gọi quá một lần tổng cộng',
    ],
    explanation:
      'Debounce: kích hoạt hàm chỉ sau N ms im lặng. Throttle: kích hoạt tối đa một lần mỗi N ms. Cho tìm kiếm: debounce(handleSearch, 300) — nếu người dùng gõ "react hooks", chỉ một lệnh gọi API kích hoạt 300ms sau phím cuối cùng, không phải mỗi ký tự một lần. Thư viện: lodash/debounce, use-debounce React hook. Ngoài ra, TanStack Query có debouncing tích hợp qua query key.',
  },
  'pf-020': {
    question:
      'Component này gây ra quá nhiều re-render. Xác định tất cả các vấn đề.',
    answer:
      'Vấn đề 1: object config được tạo lại mỗi lần render. Vấn đề 2: config trong mảng deps khiến useEffect chạy lại mỗi render (tham chiếu mới). Vấn đề 3: filter tạo mảng mới mỗi render ngay cả khi data không thay đổi.',
    explanation:
      'Sửa: (1) Chuyển config ra ngoài component (hằng số) hoặc dùng useMemo. (2) Loại bỏ config khỏi deps vì nó ổn định sau sửa 1, hoặc dùng useRef. (3) Wrap filter trong useMemo: const processedData = useMemo(() => data?.items.filter(i => i.active) ?? [], [data]). Vấn đề gốc là tham chiếu không ổn định trong mảng dependency gây vòng lặp effect vô hạn.',
  },
  'pf-021': {
    question:
      'Time to First Byte (TTFB) là gì và các chiến lược chính để cải thiện nó cho ứng dụng Next.js?',
    options: [
      'TTFB chỉ đo thời gian tra cứu DNS',
      'TTFB là thời gian từ request đến khi nhận byte đầu tiên của response. Cải thiện: (1) CDN edge caching cho trang static/ISR, (2) Edge SSR (Vercel Edge Runtime, Cloudflare Workers) để đặt tính toán gần người dùng, (3) Tối ưu truy vấn database, (4) Response streaming (React 18 renderToPipeableStream), (5) Connection keep-alive.',
      'TTFB chỉ liên quan đến ứng dụng backend, không phải frontend',
      'TTFB được cải thiện bằng cách giảm kích thước bundle JavaScript',
    ],
    explanation:
      'TTFB tốt: <800ms. Kém: >1800ms. Cho Next.js: trang SSG/ISR phục vụ từ CDN edge có TTFB ~50ms. Trang SSR: tối ưu thời gian tính toán server, stream HTML thay vì đợi render đầy đủ (React 18 streaming), dùng edge runtime cho cold start nhanh hơn. Cho API route: thêm caching header, tối ưu truy vấn DB, dùng connection pooling (PgBouncer cho PostgreSQL).',
  },
  'pf-022': {
    question:
      'Thẻ `<link rel="preconnect">` làm gì và nó khác `<link rel="prefetch">` như thế nào?',
    options: [
      'preconnect tải resource; prefetch trì hoãn nó',
      'preconnect thiết lập kết nối sớm (DNS, TCP, TLS handshake) đến origin bên ngoài trước khi cần (ví dụ CDN, fonts, API). prefetch tải resource cho navigation tương lai với priority thấp. preconnect dùng cho resource cùng trang; prefetch dùng cho resource trang tiếp theo.',
      'Chúng hoạt động giống hệt nhau với cú pháp khác nhau',
      'preconnect dành cho hình ảnh; prefetch dành cho file JavaScript',
    ],
    explanation:
      'preconnect: loại bỏ độ trễ kết nối cho resource bên ngoài mà bạn biết sẽ cần. <link rel="preconnect" href="https://fonts.googleapis.com"> tiết kiệm 100-300ms mỗi kết nối. prefetch: tải resource (JS chunk, trang) cho navigation tiếp theo có khả năng cao với priority thấp trong thời gian rảnh. preload: tải priority cao cho resource cần cho trang hiện tại (hình ảnh LCP, JS quan trọng). Chúng phục vụ mục đích thời gian khác nhau.',
  },
  'pf-023': {
    question:
      'Thêm key={Math.random()} cho các item trong danh sách cải thiện hiệu năng React bằng cách đảm bảo key duy nhất.',
    explanation:
      'Math.random() tạo key mới mỗi lần render, khiến React unmount và remount mọi item danh sách mỗi render — điều này kém hiệu năng hơn đáng kể so với dùng ID ổn định. Key phải ổn định qua các lần render để cho phép tối ưu hóa reconciliation của React. Dùng item.id, hoặc một định danh ổn định thực sự duy nhất.',
  },
  'pf-024': {
    question:
      'Mục đích của startTransition trong React là gì và nó cải thiện hiệu năng cảm nhận như thế nào?',
    options: [
      'startTransition thêm CSS transition cho cập nhật state',
      'startTransition đánh dấu cập nhật state là không khẩn cấp (priority thấp). React có thể ngắt render của transition để xử lý cập nhật khẩn cấp (gõ phím, click). UI vẫn phản hồi trong quá trình render tốn kém như lọc danh sách lớn — nội dung cũ vẫn hiển thị cho đến khi transition hoàn tất.',
      'startTransition gom nhiều lệnh gọi useState',
      'startTransition cho phép server-side rendering cho Client Components',
    ],
    explanation:
      'Không có startTransition: gõ trong ô tìm kiếm kích hoạt lọc tốn kém sẽ block render input (gõ bị lag). Với startTransition(() => setQuery(value)): input cập nhật ngay (khẩn cấp), và re-render danh sách lọc tốn kém được hoãn (không khẩn cấp). React có thể bỏ ngang render transition nếu có cập nhật state mới hơn. Kết hợp với isPending của useTransition cho UI loading.',
  },
  'pf-025': {
    question:
      'Bạn sẽ thiết kế kiến trúc infinite scroll feed hiệu năng cao với hơn 10.000 item trong React như thế nào?',
    options: [
      'Render tất cả item với display:none cho item ngoài viewport',
      'Kết hợp: (1) useInfiniteQuery của TanStack Query cho fetch dữ liệu phân trang với cursor-based pagination, (2) TanStack Virtual cho virtualization DOM chỉ render hàng hiển thị, (3) React.memo cho component hàng, (4) Intersection Observer để kích hoạt tải trang tiếp theo, (5) Suspense cho trạng thái loading.',
      'Dùng component InfiniteList tích hợp sẵn của React',
      'Tải tất cả dữ liệu trước, rồi render với CSS virtual scrolling',
    ],
    explanation:
      'Giải pháp hoàn chỉnh: useInfiniteQuery tải trang theo yêu cầu (cursor-based, không dùng offset để đảm bảo tính nhất quán). TanStack Virtual chỉ render ~20 hàng hiển thị + buffer. Điểm chính: virtualizer cần ước lượng tổng số item cho chiều cao cuộn; chiều cao hàng nên cố định để hiệu năng tốt nhất (chiều cao thay đổi cần đo kích thước); IntersectionObserver trên phần tử sentinel kích hoạt fetchNextPage. Xử lý 100K+ item với cuộn mượt 60fps.',
  },
  'pf-026': {
    question:
      'INP (Interaction to Next Paint) là gì và làm thế nào để chẩn đoán và sửa điểm INP kém?',
    options: [
      'INP đo lần đầu tiên người dùng tương tác với trang',
      'INP đo độ trễ trường hợp xấu nhất của tất cả tương tác người dùng (click, bàn phím, chạm) trong suốt phiên — thời gian từ tương tác đến khi trình duyệt vẽ frame tiếp theo để phản hồi. INP kém (>200ms) do long task block main thread.',
      'INP thay thế LCP là chỉ số hiệu năng tải chính',
      'INP chỉ đo tương tác chạm trên thiết bị di động',
    ],
    explanation:
      'INP trở thành Core Web Vital tháng 3/2024 thay thế FID. Chẩn đoán: Chrome DevTools Performance panel → tìm long task (khối đỏ >50ms) trong lúc tương tác; web-vitals.js attribution cho biết phần tử tương tác và giai đoạn (input delay, processing time, presentation delay). Sửa: chia nhỏ event handler dài với scheduler.yield(), chuyển tính toán sang Web Worker, hoãn công việc không quan trọng với setTimeout(fn, 0), tránh đọc layout đồng bộ trong event handler (getBoundingClientRect kích hoạt layout).',
  },
  'pf-027': {
    question:
      'Long Animation Frames (LoAF) API là gì và nó cải thiện gì so với Long Tasks API?',
    options: [
      'LoAF đo tốc độ khung hình CSS animation',
      'LoAF (Chrome 123+) là phiên bản kế thừa Long Tasks API, báo cáo animation frame mất >50ms, bao gồm attribution chi tiết: script nào chạy, thời lượng, thời gian style/layout bắt buộc, và đặc tính blocking. Khác Long Tasks, LoAF ghi nhận toàn bộ công việc frame bao gồm rendering.',
      'LoAF chỉ khả dụng trong Firefox, không phải trình duyệt Chromium',
      'LoAF thay thế requestAnimationFrame để lên lịch animation',
    ],
    explanation:
      'Long Tasks API báo cáo task >50ms nhưng có thiếu sót: không xác định chính xác script nào gây long task, và không bao gồm thời gian rendering. LoAF entry: { duration, blockingDuration, scripts: [{ sourceURL, invoker, duration, forcedStyleAndLayoutDuration }], styleAndLayoutStart }. Điều này giúp dễ dàng xác định script bên thứ ba nào gây vấn đề INP. Dùng qua PerformanceObserver với type: "long-animation-frame".',
  },
  'pf-028': {
    question:
      'Speculation Rules API là gì và nó tăng tốc chuyển trang như thế nào?',
    options: [
      'Đó là CSS API để dự đoán animation nào cần preload',
      'Speculation Rules API cho phép khai báo quy tắc prefetch hoặc prerender cho navigation tiếp theo có khả năng cao trong thẻ script JSON. Prerender render đầy đủ trang tiếp theo trong tab nền ẩn — chuyển trang gần như tức thì vì trình duyệt hoán đổi trang đã prerender.',
      'Đó là JavaScript API để dự đoán thứ tự network request',
      'Nó cung cấp gợi ý cho trình duyệt về phần tử DOM nào cần paint trước',
    ],
    explanation:
      '<script type="speculationrules">{ "prerender": [{ "where": { "href_matches": "/product/*" }, "eagerness": "moderate" }] }</script>. Mức eagerness: conservative (khi hover), moderate (khi pointer down/viewport), eager (ngay lập tức). Prerender mạnh hơn prefetch — toàn bộ trang được render và sẵn sàng hoán đổi. Hỗ trợ Chrome 108+. Dùng cẩn thận: prerender tiêu tốn bộ nhớ và băng thông đáng kể. Lý tưởng cho bước tiếp theo chắc chắn: thanh toán → payment, bài viết → bài tiếp.',
  },
  'pf-029': {
    question:
      'Thuộc tính `fetchpriority` (Priority Hints) là gì và nó ảnh hưởng đến việc tải resource như thế nào?',
    options: [
      'fetchpriority là thuộc tính CSS để đặt priority request mạng',
      'fetchpriority="high|low|auto" trên <img>, <link>, <script>, và lệnh gọi fetch() gợi ý cho bộ lập lịch resource của trình duyệt về priority tải tương đối. Dùng fetchpriority="high" trên hình ảnh LCP để ưu tiên nó hơn các hình ảnh khác chia sẻ cùng priority.',
      'fetchpriority thay thế hoàn toàn preload link hint',
      'fetchpriority chỉ ảnh hưởng việc tải JavaScript module, không ảnh hưởng hình ảnh',
    ],
    explanation:
      'Trình duyệt gán priority mặc định (High/Medium/Low) cho resource. Không có fetchpriority, hình ảnh LCP (hero image) có thể được lên lịch cùng priority với hình ảnh below-fold. Thêm fetchpriority="high" cho hình ảnh LCP báo trình duyệt tải nó trước — cải thiện LCP bằng cách giảm thời gian chờ hàng đợi. Cũng hữu ích: fetchpriority="low" cho hình ảnh/script không quan trọng để hạ priority. Next.js <Image priority /> tự động đặt điều này.',
  },
  'pf-030': {
    question:
      '`content-visibility: auto` làm gì và các trường hợp sử dụng cùng lưu ý là gì?',
    options: [
      'Nó làm nội dung vô hình cho đến khi CSS animation kích hoạt',
      'content-visibility: auto bỏ qua rendering (layout, paint) của phần tử ngoài màn hình cho đến khi chúng gần viewport. Trình duyệt giữ chỗ bằng contain-intrinsic-size. Điều này có thể tăng tốc đáng kể render ban đầu của trang có nhiều nội dung ngoài màn hình.',
      'Nó là giải pháp thay thế display: none cho phần tử ẩn',
      'content-visibility: auto tự động lazy-load hình ảnh bên trong phần tử',
    ],
    explanation:
      'content-visibility: auto (hỗ trợ Chrome 85+, Firefox 125+) kích hoạt CSS containment cho các phần ngoài màn hình. Ví dụ: .feed-item { content-visibility: auto; contain-intrinsic-size: auto 300px; } — các phần dưới fold bỏ qua layout/paint cho đến khi người dùng cuộn gần. Có thể cải thiện render ban đầu 2-3 lần cho trang nhiều nội dung. Lưu ý: anchoring (Ctrl+F tìm trong trang) có thể không hoạt động đúng cho nội dung bị bỏ qua; một số nội dung cần đo lường (ví dụ quản lý focus) có thể hoạt động không như mong đợi.',
  },
  'pf-031': {
    question:
      'Lợi ích hiệu năng của React Server Components (RSC) so với render phía client truyền thống là gì?',
    options: [
      'RSC chỉ có lợi cho hiệu năng trên mạng di động chậm',
      'RSC loại bỏ waterfall fetch dữ liệu phía client (fetch trên server gần DB), gửi không JavaScript cho component chỉ-server (giảm kích thước bundle), cho phép async component await dữ liệu mà không cần quản lý state phía client, và cho phép streaming HTML liên tục.',
      'RSC luôn yêu cầu server Node.js và không thể cache',
      'RSC cải thiện hiệu năng chỉ bằng cách cho phép server-side rendering',
    ],
    explanation:
      'Ưu điểm hiệu năng RSC: (1) Kích thước bundle — thư viện chỉ-server (markdown parser, SDK nặng) không bao giờ đến client. (2) Fetch dữ liệu — fetch trong component tree trên server, fetch song song với Promise.all, gần DB (độ trễ thấp). (3) Streaming — RSC + Suspense gửi chunk HTML liên tục, cải thiện TTFB và FCP. (4) Không overhead state client — không useEffect cho tải dữ liệu, không loading state cho dữ liệu ban đầu. (5) Tự động cache qua fetch cache mở rộng của React.',
  },
  'pf-032': {
    question:
      'Streaming SSR với React 18 cải thiện hiệu năng như thế nào so với SSR truyền thống?',
    options: [
      'Streaming SSR gửi CSS trước JavaScript để cải thiện FCP',
      'Streaming SSR (renderToPipeableStream) gửi HTML đến client liên tục khi các component resolve, thay vì đợi toàn bộ trang render xong. Trình duyệt có thể hiển thị và hydrate các phần sớm trong khi các phần sau (bọc trong Suspense) vẫn đang tải.',
      'Streaming SSR loại bỏ hoàn toàn nhu cầu hydration của React',
      'Streaming SSR chỉ hoạt động với static site generation, không phải dynamic SSR',
    ],
    explanation:
      'SSR truyền thống: server render toàn bộ trang → gửi HTML hoàn chỉnh → trình duyệt phân tích → React hydrate (tất cả blocking). Streaming SSR: server bắt đầu gửi HTML ngay cho các phần sẵn sàng, hoãn Suspense boundary cho đến khi dữ liệu resolve. Người dùng thấy và tương tác được với header/nav trong khi feed dữ liệu nặng vẫn tải. Next.js App Router dùng tự động. Cải thiện chỉ số chính: TTFB và FCP tốt hơn đáng kể — người dùng thấy nội dung trước khi toàn bộ trang sẵn sàng.',
  },
  'pf-033': {
    question:
      'Chiến lược tải font tối ưu để ngăn FOIT và giảm thiểu CLS là gì?',
    options: [
      'Luôn dùng font-display: block để đảm bảo font tải trước khi văn bản render',
      'Dùng font-display: optional (không FOIT, không FOUT — nếu font đã cache thì dùng, ngược lại dùng fallback vĩnh viễn cho lần tải đó). Cho font tùy chỉnh: preload WOFF2, dùng font-display: swap với điều chỉnh size-adjust/ascent-override để giảm thiểu khác biệt metrics giữa font fallback và font tùy chỉnh.',
      'Tải font qua JavaScript để kiểm soát thời gian chính xác',
      'Chỉ dùng system font để loại bỏ hoàn toàn vấn đề hiệu năng font',
    ],
    explanation:
      'Tùy chọn chiến lược font: font-display: block (văn bản vô hình tối đa 3s = tệ cho LCP), swap (văn bản hiện ngay với fallback, rồi hoán đổi = rủi ro CLS), fallback (block 100ms rồi swap, cửa sổ swap giới hạn), optional (tốt nhất cho Core Web Vitals — dùng font đã cache hoặc bỏ qua). Cho font thương hiệu tùy chỉnh: preload file WOFF2, dùng size-adjust và ascent-override trong @font-face để giảm thiểu CLS do font swap. next/font xử lý tất cả tự động với CLS bằng không.',
  },
  'pf-034': {
    question:
      '`<link rel="modulepreload">` là gì và khi nào nên dùng thay vì `<link rel="preload">`?',
    options: [
      'modulepreload giống preload nhưng chỉ dành cho file CSS',
      'modulepreload tải JavaScript module và toàn bộ đồ thị dependency, phân tích và biên dịch ngay lập tức. Nó cũng đăng ký module vào module map để các lệnh gọi import() sau dùng phiên bản đã biên dịch và cache — hiệu quả hơn preload cho ES module vì preload chỉ tải xuống, không biên dịch.',
      'modulepreload thay thế dynamic import() cho module lazy-loaded',
      'modulepreload chỉ hoạt động trong môi trường Node.js SSR',
    ],
    explanation:
      '<link rel="modulepreload" href="/src/checkout.js"> tải trước, phân tích và biên dịch module (và các import tĩnh theo chuỗi). Khác rel="preload" as="script" chỉ tải xuống mà không phân tích module, modulepreload đăng ký module vào registry module của trình duyệt. Vite tự động chèn modulepreload hint cho các chunk trong bản production build. Dùng cho route lazy-loaded quan trọng mà bạn biết người dùng sẽ navigate đến.',
  },
  'pf-035': {
    question:
      'Khi nào nên dùng `preconnect` so với `dns-prefetch` làm resource hint?',
    options: [
      'Chúng có thể thay thế nhau — dùng cái nào cũng được cho domain bên ngoài',
      'preconnect thực hiện thiết lập kết nối đầy đủ sớm (DNS + TCP + TLS handshake), tiết kiệm 100-300ms khi resource thực sự được yêu cầu. dns-prefetch chỉ phân giải DNS (tiết kiệm ~20-120ms). Dùng preconnect cho origin bên thứ ba quan trọng (font, API); dns-prefetch cho kết nối ít chắc chắn hơn (chi phí thấp hơn và có thể dùng cho nhiều origin hơn).',
      'preconnect chỉ dành cho font; dns-prefetch chỉ dành cho API',
      'dns-prefetch đã lỗi thời và không bao giờ nên dùng',
    ],
    explanation:
      'Trình duyệt giới hạn số kết nối preconnect đang hoạt động (~6). Lạm dụng preconnect lãng phí resource và băng thông (kết nối hết hạn nếu không dùng trong 10s). Thực hành tốt: <link rel="preconnect" href="https://fonts.googleapis.com"> cho 1-2 origin quan trọng nhất, và <link rel="dns-prefetch" href="https://analytics.example.com"> cho bên thứ ba priority thấp hơn. Chrome ưu tiên preconnect hơn dns-prefetch khi cả hai được chỉ định cho cùng origin.',
  },
  'pf-036': {
    question:
      'Các yếu tố chính cần cân nhắc khi triển khai hình ảnh responsive với định dạng hiện đại (AVIF, WebP) là gì?',
    options: [
      'Luôn phục vụ AVIF cho tất cả người dùng vì nó có nén tốt nhất',
      'Dùng <picture> với <source> để thương lượng định dạng (AVIF, rồi WebP, rồi JPEG fallback), srcset + sizes cho chuyển đổi độ phân giải, và thuộc tính width/height để ngăn CLS. Trình duyệt chọn định dạng tốt nhất mà nó hỗ trợ và kích thước phù hợp cho viewport.',
      'Chuyển đổi tất cả hình ảnh sang base64 data URI để loại bỏ HTTP request',
      'Hình ảnh responsive chỉ quan trọng cho thiết bị di động, không phải desktop',
    ],
    explanation:
      '<picture><source type="image/avif" srcset="hero.avif 1x, hero@2x.avif 2x"><source type="image/webp" srcset="hero.webp 1x, hero@2x.webp 2x"><img src="hero.jpg" width="800" height="600" alt="..."></picture>. Cho kích thước responsive theo viewport: srcset="img-400.webp 400w, img-800.webp 800w" sizes="(max-width: 600px) 100vw, 50vw". next/image xử lý tất cả tự động bao gồm chọn định dạng, lazy loading và ngăn CLS.',
  },
  'pf-037': {
    question:
      'Các chiến lược caching chính của Service Worker là gì và khi nào nên dùng mỗi loại?',
    options: [
      'Chỉ có một chiến lược caching: cache mọi thứ vĩnh viễn',
      'Cache-First (offline-first cho static asset), Network-First (ưu tiên dữ liệu mới, cache làm fallback cho API response), Stale-While-Revalidate (phục vụ cache ngay, cập nhật ở nền — tốt nhất cho dữ liệu không quan trọng), Network-Only (luôn mới, không cache), Cache-Only (chỉ dùng offline).',
      'Service Worker caching chỉ áp dụng cho file hình ảnh',
      'Service Worker chỉ có thể cache GET request từ cùng origin',
    ],
    explanation:
      'Workbox (thư viện Service Worker của Google) triển khai các chiến lược: CacheFirst cho versioned asset (CSS/JS có hash — cache vĩnh viễn), StaleWhileRevalidate cho font và asset ít thay đổi (tải tức thì + cập nhật nền), NetworkFirst cho API data (dữ liệu mới với fallback offline), NetworkOnly cho request không cache được (POST, endpoint có xác thực). PRPL pattern dùng CacheFirst cho app shell + CacheFirst cho route đã precache cho truy cập lặp lại gần như tức thì.',
  },
  'pf-038': {
    question:
      'TanStack Virtual triển khai windowing như thế nào và cấu hình nào cần thiết cho hàng có chiều cao cố định so với thay đổi?',
    options: [
      'TanStack Virtual render tất cả item nhưng ẩn chúng với CSS overflow: hidden',
      'TanStack Virtual tính toán item nào nằm trong viewport hiển thị + buffer overscan, chỉ render các phần tử DOM đó, và định vị chúng tuyệt đối bằng translateY. Chiều cao cố định: cung cấp estimateSize: () => rowHeight cho tính toán đơn giản. Chiều cao thay đổi: cần đo item đã render và truyền lại phép đo qua measureElement.',
      'TanStack Virtual hoạt động bằng CSS grid với display: none cho hàng ngoài màn hình',
      'TanStack Virtual chỉ dùng cho danh sách dọc; lưới cần thư viện khác',
    ],
    explanation:
      'TanStack Virtual là headless (không ràng buộc DOM). Cài đặt: const virtualizer = useVirtualizer({ count: items.length, getScrollElement: () => parentRef.current, estimateSize: () => 60 }). Render: virtualizer.getVirtualItems().map(vItem => <div key={vItem.key} style={{ transform: `translateY(${vItem.start}px)` }}>). Container ngoài cần height = virtualizer.getTotalSize() để scrollbar chính xác. Chiều cao thay đổi: thêm ref={virtualizer.measureElement} cho mỗi hàng — nó đo sau render và tính lại vị trí.',
  },
  'pf-039': {
    question:
      'Cách sử dụng React Profiler API này giúp chẩn đoán vấn đề hiệu năng như thế nào?',
    answer:
      'Component Profiler đo thời gian render của Sidebar. Callback ghi cảnh báo nếu render mất hơn 16ms (ngân sách một frame ở 60fps). baseDuration so với actualDuration cho thấy hiệu quả memoization.',
    explanation:
      'actualDuration: thời gian render gần nhất (có lợi ích memoization). baseDuration: thời gian ước tính render mà không có tối ưu React.memo/useMemo. Nếu actualDuration << baseDuration, memoization đang hoạt động. Nếu actualDuration ≈ baseDuration, memoization không hiệu quả. Profiler API được bật trong development và profiling build; bị tắt trong production build mặc định (dùng profiling build cho chẩn đoán production). Ngưỡng >16ms tương ứng ngân sách frame 60fps; vượt quá gây mất frame.',
  },
  'pf-040': {
    question:
      'Navigation API là gì và nó cải thiện hiệu năng chuyển trang ứng dụng single-page như thế nào?',
    options: [
      'Navigation API là tính năng của React Router v7 cho routing khai báo',
      'Navigation API (Chrome 102+) là API native trình duyệt thay thế các pattern phân mảnh history/popstate/click-intercept trong SPA. Nó cung cấp navigate event, quản lý transition, và khôi phục cuộn — cho phép framework xử lý navigation hiệu quả hơn với ít overhead JavaScript hơn.',
      'Navigation API loại bỏ hoàn toàn nhu cầu router phía client',
      'Navigation API chỉ cải thiện navigation quay lại/tiến, không phải click link',
    ],
    explanation:
      'Navigation API: window.navigation.addEventListener("navigate", handler) chặn tất cả navigation (link, quay lại/tiến, lập trình). event.intercept({ handler: async () => { await fetchPageData() } }) báo trình duyệt navigation là async — nó quản lý trạng thái loading và khôi phục cuộn tự động. So với history API: không cần chặn click link, tự động xử lý form submission, hỗ trợ view transition tích hợp. React Router và các framework khác đang áp dụng.',
  },
  'pf-041': {
    question:
      'Dùng `<link rel="preload">` cho file font đảm bảo nó sẽ được trình duyệt sử dụng ngay và sẽ cải thiện LCP trong mọi trường hợp.',
    explanation:
      'Preload đảm bảo tải sớm ở priority cao nhưng không đảm bảo ảnh hưởng sử dụng. Lỗi phổ biến: (1) Preload với thuộc tính crossorigin sai cho font CORS gây tải xuống hai lần — phải dùng crossorigin="anonymous" ngay cả cho WOFF2 cùng origin. (2) Preload quá nhiều resource cạnh tranh băng thông với hình ảnh LCP. (3) Nếu font preloaded không thực sự được dùng (font-face match khác), lãng phí băng thông. Luôn đo với WebPageTest trước và sau khi thêm preload.',
  },
  'pf-042': {
    question:
      'Làm thế nào để dùng React Profiler DevTools xác định component nào gây suy giảm hiệu năng?',
    options: [
      'Xem component có số dòng code nhiều nhất trong chế độ xem source',
      'Ghi phiên Profiler, xem Flamegraph cho các thanh cao (render dài), kiểm tra Ranked chart cho component chậm nhất theo thời gian render, dùng "Why did this render?" để thấy props/state/hook thay đổi, và so sánh baseDuration với actualDuration để đánh giá hiệu quả memoization.',
      'Profiler tự động xác định bottleneck mà không cần phân tích thủ công',
      'Chỉ dùng Profiler trong production build để đo chính xác',
    ],
    explanation:
      'Quy trình React DevTools Profiler: (1) Bắt đầu ghi. (2) Thực hiện tương tác chậm. (3) Dừng ghi. (4) Chế độ Flamegraph: chiều rộng = thời gian render, vàng = component chậm hơn. (5) Ranked chart: sắp xếp tất cả component theo tổng thời gian render. (6) Click component → "Why did this render?" hiển thị props thay đổi (trước so với sau). (7) Nếu component render nhiều lần không cần thiết → thêm React.memo hoặc sửa tham chiếu prop không ổn định (useCallback/useMemo). Profile trong development với Profiler build.',
  },
  'pf-043': {
    question:
      'Sự khác biệt giữa `preload`, `prefetch` và `prerender` là gì, và khi nào nên dùng mỗi loại?',
    options: [
      'Chúng tương đương — cả ba đều tải resource trước khi cần',
      'preload: tải priority cao cho resource cần ở trang hiện tại (hình ảnh LCP, font quan trọng, JS chunk tiếp theo sau quyết định route). prefetch: tải priority thấp cho resource của navigation tiếp theo có khả năng. prerender: render đầy đủ trang tiếp theo ở nền (Speculation Rules API). Mỗi loại có priority và phân bổ resource trình duyệt khác nhau.',
      'preload dành cho JavaScript, prefetch dành cho CSS, prerender dành cho hình ảnh',
      'Chỉ preload là tiêu chuẩn web; prefetch và prerender là thử nghiệm Chrome',
    ],
    explanation:
      'So sánh resource hint: preload (<link rel="preload" as="image">) = "Tôi cần cái này NGAY cho trang hiện tại" — priority cao, trình duyệt phải tải. prefetch (<link rel="prefetch">) = "Tôi có thể cần cái này cho navigation tiếp theo" — priority thấp nhất, tải trong thời gian rảnh. prerender (Speculation Rules API) = "render toàn bộ trang tiếp theo" — chi phí resource đáng kể, chỉ nên dùng cho navigation tiếp theo có độ tin cậy cao. Dùng sai preload thêm rủi ro render-blocking; thiếu preload cho hình ảnh LCP làm chậm LCP.',
  },
  'pf-044': {
    question:
      'Thuộc tính CSS `will-change` làm gì và nó có ảnh hưởng hiệu năng gì?',
    options: [
      'will-change preload CSS animation trước khi chạy',
      'will-change gợi ý cho trình duyệt rằng một thuộc tính sẽ animate, cho phép tạo layer compositor riêng trước (tăng tốc GPU). Điều này ngăn jank cho animation nhưng lãng phí bộ nhớ GPU — dùng tiết kiệm, chỉ trên phần tử thực sự animate, và loại bỏ sau khi animation kết thúc.',
      'will-change giống transform: translateZ(0) cho GPU promotion',
      'will-change cải thiện hiệu năng bằng cách cache output paint của phần tử vĩnh viễn',
    ],
    explanation:
      'will-change: transform đưa phần tử lên layer compositor riêng trước khi animation bắt đầu, ngăn trình duyệt phải tính lại và repaint phần còn lại của trang khi nó di chuyển. Tuy nhiên: mỗi GPU layer dùng VRAM; đưa quá nhiều phần tử lên trên mobile có thể gây jank do áp lực bộ nhớ. Thực hành tốt: thêm will-change khi hover (ngay trước animation), loại bỏ sau đó. Ưu tiên animation transform và opacity (chỉ compositor) hơn thuộc tính như left/top/width kích hoạt layout.',
  },
  'pf-045': {
    question:
      'Chiến lược toàn diện để giám sát Core Web Vitals trong production và xử lý suy giảm là gì?',
    options: [
      'Chạy Lighthouse trong CI trên mỗi PR và coi điểm số là nguồn sự thật duy nhất',
      'Dùng web-vitals.js để thu thập dữ liệu CWV người dùng thực (LCP, INP, CLS) và gửi đến analytics (GA4, endpoint tùy chỉnh). Giám sát giá trị p75 (không phải trung bình) theo loại trang và danh mục thiết bị. Thiết lập cảnh báo khi suy giảm. Bổ sung với Synthetic monitoring (SpeedCurve, WebPageTest) cho baseline nhất quán.',
      'Chỉ đo hiệu năng trang chủ vì đó là trang được truy cập nhiều nhất',
      'Chỉ dùng Chrome DevTools Lighthouse — dữ liệu lab đáng tin cậy hơn dữ liệu field',
    ],
    explanation:
      'Giám sát CWV production: (1) Real User Monitoring (RUM) với web-vitals.js — thu thập trải nghiệm người dùng thực trên tất cả thiết bị/kết nối. (2) Báo cáo p75 (phân vị 75) — đánh giá ngưỡng của Google dùng p75. (3) Phân đoạn theo loại trang (PDP so với checkout so với trang chủ) và thiết bị. (4) Synthetic monitoring cho phát hiện suy giảm trước khi release (điều kiện mạng/thiết bị nhất quán). (5) Dữ liệu CrUX (Chrome UX Report) trong Search Console/PageSpeed Insights cho dữ liệu field lịch sử. Dữ liệu lab (Lighthouse) không thay thế được dữ liệu field.',
  },
}
