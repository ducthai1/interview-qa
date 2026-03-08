import type { QuestionTranslationMap } from '../types'

export const browserDomVi: QuestionTranslationMap = {
  // ─── DOM TRAVERSAL ────────────────────────────────────────────────────────────
  'dom-001': {
    question: 'Sự khác biệt giữa `querySelector` và `querySelectorAll` là gì?',
    explanation:
      '`querySelector` trả về phần tử **đầu tiên** khớp với CSS selector, hoặc `null` nếu không tìm thấy. `querySelectorAll` trả về một `NodeList` **tĩnh** (non-live) chứa **tất cả** các phần tử khớp. Khác với `getElementsByClassName` / `getElementsByTagName`, NodeList từ `querySelectorAll` không tự cập nhật khi DOM thay đổi.',
    options: [
      '`querySelector` trả về tất cả kết quả khớp; `querySelectorAll` chỉ trả về kết quả đầu tiên',
      '`querySelector` trả về Element đầu tiên khớp hoặc null; `querySelectorAll` trả về một NodeList tĩnh chứa tất cả kết quả khớp',
      '`querySelector` trả về một HTMLCollection live; `querySelectorAll` trả về một NodeList tĩnh',
      'Chúng giống hệt nhau — cả hai đều trả về một NodeList live',
    ],
  },
  'dom-002': {
    question: 'Phương thức nào tìm phần tử tổ tiên gần nhất (hoặc chính nó) khớp với CSS selector?',
    explanation:
      '`element.closest(selector)` duyệt ngược lên cây DOM, bắt đầu từ chính phần tử đó, và trả về phần tử đầu tiên khớp với selector. Nó trả về `null` nếu không có tổ tiên nào khớp. `element.matches(selector)` chỉ kiểm tra chính phần tử đó mà không duyệt lên tổ tiên.',
    options: [
      'element.parentNode',
      'element.closest(selector)',
      'element.querySelector(selector)',
      'element.matches(selector)',
    ],
  },
  'dom-003': {
    question: 'Sự khác biệt giữa `parentNode` và `parentElement` là gì?',
    explanation:
      '`parentNode` trả về node cha của bất kỳ Node nào (có thể là Document, DocumentFragment, hoặc Element). `parentElement` chỉ trả về node cha nếu nó là `Element`; nếu không thì trả về `null`. Trong hầu hết trường hợp bên trong body chúng giống nhau, nhưng `document.documentElement.parentNode` là đối tượng `Document` trong khi `document.documentElement.parentElement` là `null`.',
    options: [
      'Chúng giống hệt nhau',
      '`parentNode` có thể là bất kỳ loại Node nào; `parentElement` chỉ được gán khi node cha là một Element node',
      '`parentElement` có thể là bất kỳ loại Node nào; `parentNode` chỉ trả về Element node',
      '`parentNode` trả về null cho document root; `parentElement` ném ra lỗi',
    ],
  },
  'dom-004': {
    question: 'Kết quả in ra là gì?',
    explanation:
      '`children` là một HTMLCollection chỉ chứa các phần tử con là **Element** — cho ra 2 phần tử `<li>`. `childNodes` bao gồm TẤT CẢ các loại node: text node (khoảng trắng), comment node, và element node. Ở đây: text (trước A), li, text (ở giữa), comment, text (ở giữa), li, text (sau) = 7 node tổng cộng. Tuy nhiên với định dạng thông thường sau `<ul>` và giữa các item: `\\n  ` text, `<li>A</li>`, `\\n  ` text, `<!-- comment -->` comment, `\\n  ` text, `<li>B</li>`, `\\n` text = 7 node. Tuy nhiên trong ví dụ inline tối giản cho ra 5 (hai phần tử `<li>` + ba text node + một comment = đếm khoảng trắng thực tế). Điểm chính: `children.length === 2` (chỉ element) vs `childNodes.length > 2` (bao gồm text/comment node).',
  },
  'dom-005': {
    question: 'Sự khác biệt giữa `nextSibling` và `nextElementSibling` là gì?',
    explanation:
      '`nextSibling` trả về node tiếp theo trong danh sách `childNodes` của node cha — có thể là Text node (khoảng trắng giữa các thẻ) hoặc Comment node. `nextElementSibling` bỏ qua các node không phải Element và trả về node anh em tiếp theo là Element, hoặc `null`. Sự phân biệt tương tự áp dụng cho `previousSibling` và `previousElementSibling`.',
    options: [
      'Chúng giống hệt nhau',
      '`nextSibling` trả về node tiếp theo thuộc bất kỳ loại nào; `nextElementSibling` bỏ qua text/comment node và trả về Element tiếp theo',
      '`nextElementSibling` trả về node tiếp theo thuộc bất kỳ loại nào; `nextSibling` chỉ trả về element',
      '`nextSibling` chỉ hoạt động trên document root',
    ],
  },

  // ─── EVENT SYSTEM ─────────────────────────────────────────────────────────────
  'dom-006': {
    question: 'Event bubbling trong trình duyệt là gì?',
    explanation:
      'Quá trình lan truyền sự kiện có ba giai đoạn: (1) **Capture** — sự kiện di chuyển từ `window` xuống đến cha của phần tử đích; (2) **Target** — sự kiện đến phần tử đích; (3) **Bubble** — sự kiện lan truyền ngược lên từ phần tử đích qua các tổ tiên đến `window`. Hầu hết sự kiện bubble theo mặc định. Listener được thêm bằng `addEventListener(event, fn)` (không có tham số thứ ba) chạy trong giai đoạn bubble.',
    options: [
      'Một sự kiện chỉ kích hoạt trên phần tử đích',
      'Một sự kiện kích hoạt trên phần tử đích, sau đó lan truyền lên qua các phần tử tổ tiên đến document root',
      'Một sự kiện kích hoạt trên document root trước, sau đó lan truyền xuống đến phần tử đích',
      'Một sự kiện kích hoạt đồng thời trên tất cả các phần tử',
    ],
  },
  'dom-007': {
    question: 'Sự khác biệt giữa `event.target` và `event.currentTarget` là gì?',
    explanation:
      '`event.target` là phần tử đã **phát ra** sự kiện (nơi click/key/v.v. thực sự xảy ra). `event.currentTarget` là phần tử mà **event listener hiện tại** được gắn vào. Chúng khác nhau khi sử dụng event delegation: click vào `<button>` bên trong `<div>` có listener nghĩa là `target` là `<button>` và `currentTarget` là `<div>`.',
    options: [
      '`event.target` là phần tử mà listener được gắn vào; `event.currentTarget` là phần tử đã kích hoạt sự kiện',
      '`event.target` là phần tử đã kích hoạt sự kiện ban đầu; `event.currentTarget` là phần tử có listener đang được gọi',
      'Chúng luôn tham chiếu đến cùng một phần tử',
      '`event.currentTarget` luôn là `document`',
    ],
  },
  'dom-008': {
    question: 'Event delegation là gì và tại sao nó hữu ích?',
    explanation:
      'Event delegation tận dụng cơ chế bubbling: thay vì gắn listener cho từng phần tử con, bạn gắn **một listener cho phần tử tổ tiên chung** và kiểm tra `event.target` để xử lý đúng phần tử con. Lợi ích: (1) ít listener hơn = ít bộ nhớ hơn; (2) hoạt động với các phần tử con được thêm động mà không cần gắn lại listener. Ví dụ: một listener `click` duy nhất trên `<ul>` xử lý click trên bất kỳ `<li>` nào.',
    options: [
      'Gắn một listener riêng cho mỗi phần tử con để tăng hiệu suất',
      'Gắn một listener duy nhất cho phần tử cha và sử dụng event.target để xác định phần tử con nào đã kích hoạt, giảm mức sử dụng bộ nhớ',
      'Ngăn sự kiện bubble qua một phần tử nhất định',
      'Sử dụng Web Workers để xử lý sự kiện ngoài main thread',
    ],
  },
  'dom-009': {
    question: 'Sự khác biệt giữa `stopPropagation()` và `preventDefault()` là gì?',
    explanation:
      '`event.stopPropagation()` ngăn sự kiện tiếp tục lan truyền (không bubble hoặc capture thêm). `event.preventDefault()` hủy **hành vi mặc định của trình duyệt** cho sự kiện đó (ví dụ: ngăn form submit, chặn link navigation, hoặc block checkbox toggle), nhưng KHÔNG ngăn lan truyền. Sử dụng `stopImmediatePropagation()` để cũng ngăn các listener khác trên cùng phần tử chạy.',
    options: [
      'Chúng làm cùng một việc',
      '`stopPropagation` ngăn hành vi mặc định của trình duyệt; `preventDefault` ngăn event bubbling',
      '`stopPropagation` ngăn sự kiện lan truyền đến các phần tử cha/con; `preventDefault` hủy hành vi mặc định của trình duyệt cho sự kiện',
      '`preventDefault` xóa tất cả event listener; `stopPropagation` chỉ xóa listener hiện tại',
    ],
  },
  'dom-010': {
    question: 'Các console log được in ra theo thứ tự nào khi click vào div bên trong?',
    explanation:
      'Các giai đoạn lan truyền sự kiện: (1) **Giai đoạn Capture** — listener với `useCapture=true` kích hoạt từ ngoài vào trong: `outer-capture`, sau đó `inner-capture`. (2) **Giai đoạn Target** — trên chính phần tử đích, cả listener capture và bubble kích hoạt theo thứ tự đăng ký. (3) **Giai đoạn Bubble** — listener với `useCapture=false` kích hoạt từ trong ra ngoài: `inner-bubble`, sau đó `outer-bubble`.',
  },

  // ─── EVENT LOOP ───────────────────────────────────────────────────────────────
  'dom-011': {
    question: 'Thứ tự output là gì?',
    explanation:
      'Code đồng bộ chạy trước: `1`, sau đó `4`. Sau khi call stack trống, **hàng đợi microtask** được xử lý hết trước khi chọn macrotask tiếp theo. Callback `Promise.then` là microtask, nên `3` in tiếp theo. `setTimeout` với 0ms lên lịch một **macrotask**, nên `2` in cuối cùng. Thứ tự: đồng bộ → microtask → macrotask.',
  },
  'dom-012': {
    question: 'Thứ tự output là gì?',
    explanation:
      'Đồng bộ: `start`, `end`. Sau đó hàng đợi microtask được xử lý hoàn toàn: `microtask 1` chạy và đưa `microtask 2` vào hàng đợi; `promise` (được đưa vào hàng đợi trước `microtask 2`); sau đó `microtask 2` (được đưa vào trong khi đang xử lý). Hàng đợi microtask phải **hoàn toàn trống** trước khi chuyển sang macrotask. Sau đó `timeout 1` và `timeout 2` kích hoạt theo thứ tự FIFO.',
  },
  'dom-013': {
    question: 'Đâu là một microtask trong các lựa chọn sau?',
    explanation:
      'Microtask bao gồm: callback `Promise.then/catch/finally`, `queueMicrotask()`, callback `MutationObserver`, và phần tiếp tục sau `await`. Macrotask (task queue) bao gồm: `setTimeout`, `setInterval`, `setImmediate` (Node), sự kiện I/O, và các tác vụ render UI. Callback `requestAnimationFrame` chạy trước lần paint tiếp theo, sau microtask nhưng là một phần của rendering pipeline — chúng không phải microtask thuần túy cũng không phải macrotask thông thường.',
    options: [
      'Callback setTimeout',
      'Callback setInterval',
      'Callback Promise.then',
      'Callback requestAnimationFrame',
    ],
  },
  'dom-014': {
    question: 'Callback `requestAnimationFrame` thực thi khi nào so với event loop?',
    explanation:
      'Callback `requestAnimationFrame` (rAF) chạy như một phần của **rendering pipeline** của trình duyệt — cụ thể trong bước "update the rendering" của event loop, xảy ra sau khi microtask được xử lý hết nhưng trước lần paint tiếp theo. Trình duyệt thường gọi callback rAF ở tốc độ làm mới màn hình (~60fps = ~16.7ms). Điều này khiến rAF lý tưởng cho animation: đồng bộ với màn hình, tránh các frame không cần thiết khi tab bị ẩn, và tránh layout thrashing do đọc/ghi offset.',
    options: [
      'Ngay lập tức như một microtask sau task hiện tại',
      'Trước mỗi lần repaint của trình duyệt, sau khi microtask đã được xử lý hết, như một phần của các bước rendering',
      'Như một macrotask giống setTimeout(fn, 16)',
      'Sau tất cả callback setTimeout và setInterval',
    ],
  },

  // ─── RENDERING PIPELINE ───────────────────────────────────────────────────────
  'dom-015': {
    question: 'Thứ tự đúng của rendering pipeline trong trình duyệt là gì?',
    explanation:
      'Critical rendering path: (1) **JavaScript** thực thi và thay đổi DOM; (2) **Style** — trình duyệt tính toán computed style (CSSOM); (3) **Layout** (Reflow) — trình duyệt tính toán hình học (vị trí/kích thước) của tất cả phần tử; (4) **Paint** — trình duyệt tô pixel cho mỗi layer; (5) **Composite** — các layer được kết hợp và gửi đến GPU. Hiểu pipeline này giúp tránh các vấn đề hiệu suất như layout thrashing.',
    options: [
      'JavaScript → Style → Layout → Paint → Composite',
      'Style → JavaScript → Layout → Composite → Paint',
      'Layout → Style → Paint → JavaScript → Composite',
      'JavaScript → Layout → Style → Composite → Paint',
    ],
  },
  'dom-016': {
    question: 'Thay đổi thuộc tính CSS nào kích hoạt layout (reflow) đầy đủ?',
    explanation:
      'Thay đổi `width` kích hoạt **layout (reflow)** vì trình duyệt phải tính toán lại hình học phần tử. Thay đổi `color` hoặc `background-color` chỉ kích hoạt **repaint** (không thay đổi hình học). Thay đổi `opacity` chỉ kích hoạt **compositing** (không cần paint cho các layer được composite bằng GPU). CSS `transform` và `opacity` là hai thuộc tính có thể animate mà không kích hoạt layout hoặc paint — khiến chúng lý tưởng cho animation hiệu suất cao.',
    options: [
      'color',
      'background-color',
      'opacity',
      'width',
    ],
  },
  'dom-017': {
    question: '"Layout thrashing" là gì và làm thế nào để ngăn chặn nó?',
    explanation:
      'Layout thrashing (forced synchronous layout) xảy ra khi JS **đọc** thuộc tính layout (như `offsetWidth`, `getBoundingClientRect`) rồi **ghi** thuộc tính style, xen kẽ trong vòng lặp. Mỗi lần đọc sau khi ghi buộc trình duyệt reflow đồng bộ. Cách phòng tránh: gom tất cả lần đọc trước, sau đó gom tất cả lần ghi. Thư viện như FastDOM hỗ trợ việc này. Đọc thuộc tính layout trước khi ghi trong callback rAF cũng hiệu quả.',
    options: [
      'Animate quá nhiều phần tử cùng lúc; khắc phục bằng `will-change`',
      'Xen kẽ đọc DOM (ví dụ offsetWidth) và ghi (ví dụ thay đổi style) trong vòng lặp, buộc reflow liên tục; khắc phục bằng cách gom đọc trước, sau đó ghi',
      'Sử dụng quá nhiều CSS transition đồng thời; khắc phục bằng cách giảm số transition',
      'Gọi `addEventListener` quá nhiều lần; khắc phục bằng event delegation',
    ],
  },

  // ─── WEB STORAGE ──────────────────────────────────────────────────────────────
  'dom-018': {
    question: 'Sự khác biệt chính giữa `localStorage` và `sessionStorage` là gì?',
    explanation:
      'Dữ liệu `localStorage` tồn tại qua các phiên cho đến khi bị xóa thủ công qua `localStorage.removeItem()` hoặc `localStorage.clear()`. `sessionStorage` có phạm vi trong **tab** (hoặc cửa sổ) trình duyệt và bị xóa khi tab đó đóng. Cả hai lưu dữ liệu theo origin, cả hai có giới hạn ~5MB, và cả hai chỉ lưu chuỗi (dùng `JSON.stringify`/`JSON.parse` cho object). `sessionStorage` KHÔNG được chia sẻ giữa các tab ngay cả cùng origin.',
    options: [
      '`localStorage` chỉ lưu chuỗi; `sessionStorage` lưu object',
      '`localStorage` tồn tại cho đến khi bị xóa thủ công; `sessionStorage` bị xóa khi tab/phiên trình duyệt kết thúc',
      '`sessionStorage` được chia sẻ giữa các tab; `localStorage` là theo tab',
      '`localStorage` có giới hạn 4KB; `sessionStorage` không có giới hạn',
    ],
  },
  'dom-019': {
    question: 'Cơ chế web storage nào hỗ trợ dữ liệu có cấu trúc, transaction, và index với giới hạn lưu trữ lớn?',
    explanation:
      'IndexedDB là một cơ sở dữ liệu bất đồng bộ, hỗ trợ transaction, cấp thấp được tích hợp sẵn trong trình duyệt. Nó hỗ trợ: dữ liệu có cấu trúc (không chỉ chuỗi), index để truy vấn, transaction, và giới hạn lưu trữ lớn hơn nhiều (thường 50-100% dung lượng đĩa khả dụng). Khác với `localStorage`/`sessionStorage`, IndexedDB là bất đồng bộ (dựa trên Promise qua thư viện như `idb`) và không chặn main thread.',
    options: [
      'localStorage',
      'sessionStorage',
      'Cookies',
      'IndexedDB',
    ],
  },
  'dom-020': {
    question: 'Điều gì phân biệt cookie với `localStorage` trong ngữ cảnh HTTP request?',
    explanation:
      'Cookie được trình duyệt gửi kèm mỗi HTTP request khớp (qua header `Cookie`), cho phép xác thực phía server. `localStorage` chỉ có thể truy cập qua JavaScript và không bao giờ được gửi trong HTTP request. Cookie có giới hạn kích thước ~4KB và hỗ trợ expiry, domain, path, `HttpOnly`, `Secure`, và thuộc tính `SameSite`. Cookie HttpOnly không thể đọc bằng JavaScript, bảo vệ chống XSS.',
    options: [
      'Cookie không thể truy cập trong JavaScript; localStorage thì có thể',
      'localStorage tự động được gửi trong HTTP request header; cookie thì không',
      'Cookie tự động được đính kèm trong mỗi HTTP request đến domain khớp; localStorage chỉ có thể truy cập qua JavaScript',
      'Cookie hỗ trợ tới 5MB; localStorage bị giới hạn ở 4KB',
    ],
  },

  // ─── OBSERVERS ────────────────────────────────────────────────────────────────
  'dom-021': {
    question: '`IntersectionObserver` được sử dụng để làm gì?',
    explanation:
      '`IntersectionObserver` theo dõi bất đồng bộ sự thay đổi giao nhau của phần tử đích với phần tử tổ tiên hoặc viewport. Các trường hợp sử dụng phổ biến: lazy loading hình ảnh (chỉ tải khi hiển thị), infinite scroll, analytics (theo dõi khi quảng cáo được nhìn thấy). Nó thay thế scroll event listener + gọi `getBoundingClientRect`, tránh layout thrashing.',
    options: [
      'Theo dõi DOM mutation như node được thêm/xóa',
      'Phát hiện khi một phần tử vào hoặc rời viewport (hoặc container có scroll)',
      'Đo kích thước phần tử khi chúng thay đổi kích thước',
      'Theo dõi network request',
    ],
  },
  'dom-022': {
    question: '`MutationObserver` theo dõi gì?',
    explanation:
      '`MutationObserver` theo dõi sự thay đổi của cây DOM. Bạn cấu hình nó qua object tùy chọn: `{ childList: true }` theo dõi việc thêm/xóa node con; `{ attributes: true }` theo dõi thay đổi thuộc tính; `{ characterData: true }` theo dõi thay đổi text node; `{ subtree: true }` mở rộng theo dõi đến tất cả node con cháu. Nó kích hoạt callback bất đồng bộ (dưới dạng microtask), gom nhiều mutation lại. Nó thay thế `MutationEvents` đã bị deprecated.',
    options: [
      'Thay đổi thuộc tính CSS của phần tử',
      'Sự kiện thay đổi kích thước phần tử',
      'Thay đổi cây DOM: node được thêm/xóa, thay đổi thuộc tính, thay đổi nội dung text',
      'Mutation của network request',
    ],
  },
  'dom-023': {
    question: 'Callback `ResizeObserver` kích hoạt đồng bộ trong quá trình layout, có thể gây layout thrashing nếu bạn thay đổi DOM bên trong callback.',
    explanation:
      'Callback `ResizeObserver` kích hoạt **bất đồng bộ** sau layout nhưng trước paint, như một phần của rendering update. Chúng KHÔNG kích hoạt đồng bộ trong quá trình layout. Tuy nhiên, nếu bạn thay đổi DOM bên trong callback ResizeObserver theo cách kích hoạt resize khác, bạn có thể tạo vòng lặp vô hạn — trình duyệt ngăn chặn điều này bằng cách ghi log lỗi. Callback nhận các object `ResizeObserverEntry` với `contentRect`, `borderBoxSize`, và `contentBoxSize`.',
  },

  // ─── WEB WORKERS ──────────────────────────────────────────────────────────────
  'dom-024': {
    question: 'Mục đích chính của Web Workers là gì?',
    explanation:
      'Web Workers chạy JS trong một thread riêng biệt, giữ cho main thread (UI) phản hồi nhanh. Worker không thể truy cập DOM trực tiếp. Giao tiếp qua `postMessage()` và sự kiện `message`. Dữ liệu được **sao chép** (structured clone algorithm) chứ không chia sẻ, ngoại trừ `SharedArrayBuffer` với `Atomics`. Các loại: Dedicated Worker (một trang), Shared Worker (nhiều trang cùng origin), Service Worker (proxy cho network request).',
    options: [
      'Để thao tác DOM trực tiếp trong thread nền',
      'Để chạy JavaScript trong thread nền, ngăn các phép tính nặng chặn main thread UI',
      'Để pre-fetch tài nguyên mạng trước khi trang tải',
      'Để cache response API tự động',
    ],
  },
  'dom-025': {
    question: 'Service Worker khác với Dedicated Web Worker như thế nào?',
    explanation:
      '**Dedicated Worker** gắn liền với một trang duy nhất, chạy JS ngoài main thread để tính toán, và bị hủy khi trang unload. **Service Worker** được đăng ký cho một origin/scope, tồn tại độc lập với bất kỳ trang nào, chặn network request qua sự kiện `fetch`, cho phép offline caching (Cache API), background sync, và push notification. Service Worker có lifecycle riêng: install → activate → idle/fetch.',
    options: [
      'Service Worker có thể truy cập DOM; Dedicated Worker thì không',
      'Service Worker hoạt động như network proxy với lifecycle độc lập với bất kỳ trang nào, cho phép offline caching; Dedicated Worker gắn với một trang cụ thể để tính toán',
      'Dedicated Worker có thể chặn fetch request; Service Worker thì không',
      'Service Worker chạy trên server; Dedicated Worker chạy trên trình duyệt',
    ],
  },
  'dom-026': {
    question: 'Làm thế nào để chia sẻ dữ liệu giữa Web Worker và main thread mà không sao chép (zero-copy transfer)?',
    explanation:
      'Mặc định, `postMessage` sử dụng **structured clone algorithm** để sao chép dữ liệu. Để zero-copy, sử dụng **transferable object**: `worker.postMessage(data, [transferable])` — ví dụ `postMessage(arrayBuffer, [arrayBuffer])` chuyển quyền sở hữu (bên gửi không thể truy cập nữa). `SharedArrayBuffer` cho phép bộ nhớ chia sẻ thực sự giữa main thread và worker, yêu cầu `Atomics` để đồng bộ hóa và các header COOP/COEP phù hợp (`Cross-Origin-Opener-Policy`/`Cross-Origin-Embedder-Policy`).',
    options: [
      'Sử dụng SharedArrayBuffer hoặc chuyển quyền sở hữu ArrayBuffer qua tham số thứ hai của postMessage',
      'Lưu dữ liệu trong localStorage và đọc từ worker',
      'Sử dụng window.sharedData làm biến toàn cục',
      'Gọi worker.importScripts() với dữ liệu',
    ],
  },

  // ─── FETCH API ────────────────────────────────────────────────────────────────
  'dom-027': {
    question: 'Làm thế nào để hủy một `fetch` request đang thực thi?',
    explanation:
      'Sử dụng `AbortController`: `const controller = new AbortController(); fetch(url, { signal: controller.signal })`. Gọi `controller.abort()` để hủy. Promise fetch bị reject với `DOMException` có tên `"AbortError"`. Từ Node 18+, `AbortController` là global. Bạn cũng có thể sử dụng `AbortSignal.timeout(ms)` để tự động hủy. Một signal có thể hủy nhiều request.',
    options: [
      'Gọi `fetch.cancel()`',
      'Sử dụng `AbortController`: tạo nó, truyền `signal` cho fetch, gọi `controller.abort()`',
      'Đặt timeout với `setTimeout(() => fetch.stop(), ms)`',
      'Fetch request không thể bị hủy',
    ],
  },
  'dom-028': {
    question: 'Code này luôn log "Error: 404" ngay cả với response thành công. Sửa lỗi.',
    explanation:
      '`fetch` chỉ reject khi có **lỗi mạng** (không có kết nối, lỗi DNS). Các mã trạng thái HTTP lỗi (4xx, 5xx) được coi là response **thành công** — promise resolve. Bạn phải kiểm tra thủ công `response.ok` (true cho 200-299) hoặc `response.status` và tự throw error. Đây là một lỗi rất phổ biến trong phỏng vấn.',
  },
  'dom-029': {
    question: 'Cache API (sử dụng với Service Worker) cho phép bạn làm gì?',
    explanation:
      'Cache API (một phần của Service Worker API) cho phép bạn lưu trữ và truy xuất các cặp `Request`/`Response`. Bên trong sự kiện `fetch` của Service Worker, bạn có thể triển khai các chiến lược caching như: Cache First (trả về cache, fallback sang network), Network First (thử network, fallback sang cache), hoặc Stale-While-Revalidate. Cache tồn tại qua các phiên cho đến khi bị xóa thủ công. Quản lý cache với `caches.open()`, `cache.put()`, `cache.match()`, `caches.delete()`.',
    options: [
      'Cache biến JavaScript trong bộ nhớ',
      'Lưu trữ các cặp HTTP Request/Response, cho phép kiểm soát caching theo chương trình để hỗ trợ offline và hiệu suất',
      'Cache DOM node để tránh truy vấn lại',
      'Pre-compile JavaScript để thực thi nhanh hơn',
    ],
  },

  // ─── HISTORY API ──────────────────────────────────────────────────────────────
  'dom-030': {
    question: 'Sự khác biệt giữa `history.pushState()` và `history.replaceState()` là gì?',
    explanation:
      '`history.pushState(state, title, url)` thêm một entry mới vào session history stack của trình duyệt — nút back sẽ điều hướng về URL trước đó. `history.replaceState(state, title, url)` thay đổi entry history **hiện tại** mà không thêm entry mới — nút back bỏ qua nó. Cả hai thay đổi URL mà không tải lại trang, cho phép client-side routing (SPA navigation). Sự kiện `popstate` kích hoạt khi điều hướng bằng nút back/forward.',
    options: [
      '`pushState` thay đổi entry history hiện tại; `replaceState` thêm entry mới',
      '`pushState` thêm một entry history mới; `replaceState` thay đổi entry hiện tại mà không thêm entry mới',
      '`pushState` kích hoạt tải lại trang; `replaceState` thì không',
      'Chúng giống hệt nhau',
    ],
  },
  'dom-031': {
    question: 'Sự kiện `popstate` kích hoạt khi nào?',
    explanation:
      '`popstate` kích hoạt khi entry history đang hoạt động thay đổi — cụ thể khi người dùng nhấn Back/Forward, hoặc khi `history.go()`, `history.back()`, hoặc `history.forward()` được gọi. Quan trọng, gọi `pushState()` hoặc `replaceState()` trực tiếp **KHÔNG** kích hoạt `popstate`. Đối với thay đổi URL chỉ hash, sự kiện `hashchange` kích hoạt (ngoài `popstate` trong một số trường hợp).',
    options: [
      'Mỗi khi `pushState` hoặc `replaceState` được gọi',
      'Khi entry history đang hoạt động thay đổi do điều hướng của người dùng (nút back/forward) hoặc `history.go()`',
      'Mỗi khi URL hash thay đổi',
      'Khi trang được tải lần đầu',
    ],
  },

  // ─── DOM MANIPULATION ─────────────────────────────────────────────────────────
  'dom-032': {
    question: 'Tại sao `DocumentFragment` hiệu suất cao hơn so với việc append từng phần tử một?',
    explanation:
      '`DocumentFragment` là một container trong bộ nhớ, ngoài document dùng để chứa các DOM node. Vì nó không phải là một phần của DOM sống, việc thêm phần tử con vào nó không gây reflow. Khi bạn chèn fragment vào document (một lần), trình duyệt thực hiện một lần reflow duy nhất. So với việc chèn 100 phần tử riêng lẻ (mỗi lần có thể gây reflow), cách này nhanh hơn đáng kể. Sau khi chèn, fragment trở nên trống (các phần tử con chuyển sang DOM).',
    options: [
      'DocumentFragment tránh garbage collector',
      'DocumentFragment là một DOM node nhẹ nằm ngoài document; bạn có thể append tất cả phần tử con vào nó rồi chèn một lần, chỉ gây một reflow thay vì một reflow cho mỗi lần chèn',
      'DocumentFragment ngăn event listener được gọi',
      'DocumentFragment sử dụng Web Worker nội bộ',
    ],
  },
  'dom-033': {
    question: 'Shadow DOM là gì và nó khác với DOM thông thường ("light") như thế nào?',
    explanation:
      'Shadow DOM cung cấp **đóng gói**: một cây DOM con ẩn được gắn vào host element. CSS bên trong shadow tree không rò rỉ ra ngoài, và CSS toàn cục không rò rỉ vào (trừ khi sử dụng CSS custom property hoặc `::part()`). Được sử dụng bởi các element native như `<video>`, `<input type="range">`, và Web Components. Được tạo bằng `element.attachShadow({ mode: "open" | "closed" })`. Chế độ "open" cho phép truy cập qua `element.shadowRoot`; chế độ "closed" thì không.',
    options: [
      'Shadow DOM là DOM được tạo bởi JavaScript; light DOM là DOM được parse từ HTML',
      'Shadow DOM là một cây DOM có phạm vi, được đóng gói, gắn vào một element với CSS và JS riêng biệt; light DOM là DOM document chính hiển thị cho tất cả script và style',
      'Shadow DOM dành cho server-side rendering; light DOM dành cho client-side',
      'Shadow DOM chỉ tồn tại trong Firefox; light DOM hoạt động trên mọi trình duyệt',
    ],
  },
  'dom-034': {
    question: 'Khái niệm "virtual DOM" là gì và tại sao các framework như React giới thiệu nó?',
    explanation:
      'Virtual DOM (VDOM) là một khái niệm lập trình trong đó một bản sao nhẹ của DOM thực được giữ trong bộ nhớ. Khi state thay đổi, một VDOM mới được tạo và so sánh (reconcile) với VDOM trước đó. Chỉ những khác biệt thực tế mới được áp dụng vào DOM thực ("patching"), giảm thiểu reflow/repaint tốn kém. React phổ biến hóa khái niệm này. Các giải pháp thay thế hiện đại (Svelte, Solid.js) bỏ qua VDOM hoàn toàn bằng cách compile thành các cập nhật DOM chính xác.',
    options: [
      'Virtual DOM là một browser API giúp tăng tốc rendering',
      'Virtual DOM là một đại diện JavaScript trong bộ nhớ của DOM thực; framework so sánh cây virtual DOM cũ và mới để tính toán cập nhật DOM thực tối thiểu, giảm reflow tốn kém',
      'Virtual DOM lưu HTML đã render trong localStorage để tải nhanh ban đầu',
      'Virtual DOM là một tính năng Shadow DOM dành cho Web Components',
    ],
  },

  // ─── WINDOW / DOCUMENT EVENTS ─────────────────────────────────────────────────
  'dom-035': {
    question: 'Sự khác biệt giữa sự kiện `DOMContentLoaded` và `load` là gì?',
    explanation:
      '`DOMContentLoaded` (kích hoạt trên `document`) kích hoạt ngay khi trình duyệt đã parse HTML và xây dựng DOM — không chờ hình ảnh, stylesheet, hoặc subframe. Đây là sự kiện phù hợp để chạy script phụ thuộc DOM. `load` (kích hoạt trên `window`) chỉ kích hoạt sau khi **tất cả** tài nguyên đã tải hoàn toàn, bao gồm hình ảnh, CSS ngoài, script, và iframe. `load` chậm hơn nhiều.',
    options: [
      '`load` kích hoạt khi HTML được parse; `DOMContentLoaded` kích hoạt khi tất cả tài nguyên tải xong',
      '`DOMContentLoaded` kích hoạt khi HTML được parse hoàn toàn và DOM sẵn sàng; `load` kích hoạt khi tất cả tài nguyên (hình ảnh, stylesheet, iframe) đã tải xong',
      'Chúng kích hoạt cùng lúc',
      '`DOMContentLoaded` chỉ kích hoạt trong Chrome; `load` hoạt động trên mọi trình duyệt',
    ],
  },
  'dom-036': {
    question: 'Sự kiện `visibilitychange` được sử dụng để làm gì?',
    explanation:
      'Sự kiện `visibilitychange` kích hoạt trên `document` khi trạng thái hiển thị của trang thay đổi. Kiểm tra `document.visibilityState` (`"visible"` hoặc `"hidden"`). Trường hợp sử dụng: tạm dừng video/audio/animation khi ẩn, dừng polling, tạm dừng timer, gửi analytics ping. Trình duyệt có thể throttle timer (setTimeout/setInterval) khi tab bị ẩn; `visibilitychange` cho phép bạn xử lý điều này một cách rõ ràng.',
    options: [
      'Phát hiện khi một phần tử trở nên hiển thị qua IntersectionObserver',
      'Phát hiện khi người dùng chuyển tab hoặc thu nhỏ trình duyệt, cho phép tạm dừng/tiếp tục công việc tốn tài nguyên',
      'Phát hiện khi CSS visibility thay đổi trên phần tử',
      'Phát hiện khi viewport cuộn',
    ],
  },
  'dom-037': {
    question: 'Sự kiện `beforeunload` cho phép bạn hiển thị tin nhắn tùy chỉnh đáng tin cậy trong hộp thoại cho người dùng khi họ cố rời trang trên tất cả trình duyệt hiện đại.',
    explanation:
      'Các trình duyệt hiện đại không còn cho phép tin nhắn tùy chỉnh trong hộp thoại xác nhận `beforeunload`. Để kích hoạt hộp thoại "Rời khỏi trang?" chung của trình duyệt, bạn phải gọi `event.preventDefault()` hoặc đặt `event.returnValue = ""` (legacy). Trình duyệt hiển thị tin nhắn chung — bạn không thể tùy chỉnh nó. Thay đổi này ngăn website giữ chân người dùng. Ngoài ra, `beforeunload` chỉ nên được đăng ký khi có công việc chưa lưu để tránh ảnh hưởng trải nghiệm điều hướng.',
  },
  'dom-038': {
    question: '"Passive event listener" là gì và tại sao nó cải thiện hiệu suất cuộn?',
    explanation:
      'Trình duyệt tối ưu hóa sự kiện touch và wheel bằng cách thực hiện cập nhật cuộn trên compositor thread. Tuy nhiên, nếu listener `touchstart`/`wheel` có thể gọi `preventDefault()`, trình duyệt phải chờ listener hoàn thành trước khi cuộn. Khai báo `{ passive: true }` trong `addEventListener(\'touchstart\', fn, { passive: true })` báo hiệu rằng `preventDefault()` sẽ không bao giờ được gọi, cho phép trình duyệt cuộn ngay lập tức mà không chờ đợi. Điều này loại bỏ hiện tượng giật khi cuộn.',
    options: [
      'Một listener chạy trong Web Worker để tránh chặn main thread',
      'Một listener được khai báo với `{ passive: true }` cho trình duyệt biết listener sẽ không bao giờ gọi `preventDefault()`, cho phép trình duyệt cuộn mà không chờ listener hoàn thành',
      'Một listener chỉ kích hoạt một lần sử dụng `{ once: true }`',
      'Một listener sử dụng `requestAnimationFrame` nội bộ',
    ],
  },

  // ─── RAF VS SETTIMEOUT ─────────────────────────────────────────────────────────
  'dom-039': {
    question: 'Tại sao `requestAnimationFrame` được ưu tiên hơn `setTimeout(fn, 16)` cho animation?',
    explanation:
      'Ưu điểm rAF: (1) **Đồng bộ refresh** — chạy trước lần repaint màn hình tiếp theo, loại bỏ tearing; (2) **Throttle khi ẩn** — trình duyệt tạm dừng callback rAF trong tab nền (tiết kiệm CPU/pin); (3) **Không drift** — trình duyệt lên lịch vào thời điểm tối ưu thay vì interval cố định; (4) **Gom nhóm** — nhiều lệnh gọi rAF trong một frame chạy một lần. `setTimeout(fn, 16)` không đồng bộ chính xác với màn hình và lãng phí tài nguyên trong tab ẩn.',
    options: [
      'requestAnimationFrame chạy trong Web Worker; setTimeout chạy trên main thread',
      'requestAnimationFrame đồng bộ với tốc độ làm mới màn hình, tạm dừng trong tab ẩn, và giảm tiêu hao pin; setTimeout với interval cố định bị drift và chạy ngay cả khi tab bị ẩn',
      'setTimeout là bất đồng bộ; requestAnimationFrame là đồng bộ',
      'requestAnimationFrame có thể truy cập DOM; setTimeout thì không',
    ],
  },
  'dom-040': {
    question: 'Triển khai một hàm `animate` sử dụng `requestAnimationFrame` để di chuyển một phần tử 300px sang phải trong 1000ms.',
    explanation:
      'Pattern sử dụng hàm `step` nhận `timestamp` từ rAF. Lần gọi đầu tiên, `startTime` được ghi lại. Mỗi frame, thời gian `elapsed` được tính và chia cho `duration` để lấy `progress` (0-1), được clamp bằng `Math.min`. Phần tử được di chuyển theo tỷ lệ. Nếu progress < 1, một rAF khác được lên lịch. Sử dụng `transform: translateX()` thay vì `left` giữ animation trên compositor thread (không reflow/repaint).',
  },

  // ─── CLIPBOARD / FILE / DRAG & DROP ──────────────────────────────────────────
  'dom-041': {
    question: 'Quyền nào được yêu cầu để đọc từ clipboard sử dụng Clipboard API hiện đại?',
    explanation:
      '`navigator.clipboard.readText()` và `navigator.clipboard.read()` yêu cầu quyền `clipboard-read`, mà trình duyệt yêu cầu từ người dùng. Đọc yêu cầu document phải được focus (trang đang hoạt động). Ghi (`writeText`, `write`) yêu cầu user activation (ví dụ bên trong click handler) và cũng có thể hiện prompt. HTTPS là bắt buộc. `document.execCommand("copy")` cũ đã bị deprecated nhưng vẫn hoạt động trong một số ngữ cảnh.',
    options: [
      'Không yêu cầu quyền — clipboard có thể được đọc tự do bởi bất kỳ script nào',
      'Quyền `clipboard-read` phải được người dùng cấp (qua Permissions API); trang phải được focus và trên HTTPS',
      'Quyền `storage-access` là bắt buộc',
      'Chỉ `navigator.clipboard.writeText` yêu cầu quyền; đọc thì miễn phí',
    ],
  },
  'dom-042': {
    question: '`URL.createObjectURL(blob)` trả về gì và khi nào nên revoke nó?',
    explanation:
      '`URL.createObjectURL(blob)` tạo một URL `blob:https://...` tạm thời tham chiếu đến Blob trong bộ nhớ trình duyệt. Khác với URL data base64, nó không nhúng dữ liệu — nó là một tham chiếu. URL vẫn hợp lệ cho đến khi document bị unload HOẶC cho đến khi bị revoke thủ công bằng `URL.revokeObjectURL(url)`. Luôn revoke sau khi sử dụng (ví dụ sau khi kích hoạt download) để tránh rò rỉ bộ nhớ.',
    options: [
      'Trả về URL data base64; revoke sau khi trang unload',
      'Trả về URL `blob:` tạm thời tham chiếu đến blob trong bộ nhớ; revoke bằng `URL.revokeObjectURL(url)` khi không còn cần để giải phóng bộ nhớ',
      'Trả về URL vĩnh viễn được lưu trên server',
      'Trả về object Blob được bọc trong chuỗi URL; không cần revoke',
    ],
  },
  'dom-043': {
    question: 'Trong Drag and Drop API, sự kiện nào phải gọi `event.preventDefault()` để cho phép drop?',
    explanation:
      'Mặc định, các phần tử không phải là drop target hợp lệ. Để một phần tử chấp nhận drop, bạn phải gọi `event.preventDefault()` trong handler sự kiện `dragover`. Nếu không, sự kiện `drop` sẽ không bao giờ kích hoạt trên phần tử đó. Sự kiện `dragstart` kích hoạt khi bắt đầu kéo (đặt `event.dataTransfer.setData()` ở đây). Sự kiện `drop` kích hoạt khi item được thả (đọc `event.dataTransfer.getData()` ở đây).',
    options: [
      'dragstart',
      'dragend',
      'dragover',
      'drop',
    ],
  },

  // ─── PERFORMANCE API ──────────────────────────────────────────────────────────
  'dom-044': {
    question: '`Performance` API được sử dụng để làm gì trong trình duyệt?',
    explanation:
      '`window.performance` cung cấp các API timing độ phân giải cao: `performance.now()` trả về DOMHighResTimeStamp tính bằng mili giây với độ chính xác dưới mili giây. `performance.mark(name)` tạo một timestamp được đặt tên. `performance.measure(name, startMark, endMark)` tính khoảng thời gian giữa các mark. `performance.getEntriesByType("navigation")` cung cấp Navigation Timing (thời gian DNS, TCP, DOM, load). `PerformanceObserver` theo dõi các performance entry mới một cách bất đồng bộ.',
    options: [
      'Tự động tối ưu hóa CSS animation',
      'Đo lường hiệu suất người dùng thực: navigation timing, thời gian tải tài nguyên, các mark và measure tùy chỉnh sử dụng timestamp độ phân giải cao',
      'Profiling Web Workers',
      'Phát hiện kết nối mạng chậm',
    ],
  },
  'dom-045': {
    question: 'Viết code sử dụng Performance API để đo thời gian một thao tác tốn kém, sử dụng `mark` và `measure`.',
    explanation:
      '`performance.mark()` tạo một timestamp độ phân giải cao được đặt tên. `performance.measure(name, startMark, endMark)` tạo một PerformanceEntry với `duration`. Truy xuất bằng `performance.getEntriesByName(name)`. Dọn dẹp bằng `clearMarks`/`clearMeasures` ngăn tích lũy bộ nhớ. Cách này chính xác hơn `Date.now()` nhờ độ chính xác microsecond và không bị ảnh hưởng bởi điều chỉnh đồng hồ hệ thống.',
  },

  // ─── BROWSER SECURITY ─────────────────────────────────────────────────────────
  'dom-046': {
    question: 'Same-Origin Policy (SOP) là gì?',
    explanation:
      'Same-Origin Policy (SOP) là một cơ chế bảo mật của trình duyệt. Một origin được xác định bởi **protocol + host + port**. SOP ngăn JS đọc response từ các origin khác. Ví dụ, `https://a.com` không thể đọc response từ `https://b.com` qua fetch. SOP áp dụng cho: `fetch`/XHR, truy cập DOM (cross-origin frame), và cookie. Nó KHÔNG ngăn việc gửi request (chỉ ngăn đọc response) — do đó cần CSRF protection.',
    options: [
      'Một chính sách yêu cầu tất cả script phải được tải từ cùng một CDN',
      'Một cơ chế bảo mật hạn chế cách một document hoặc script từ một origin có thể tương tác với tài nguyên từ origin khác',
      'Một chính sách ngăn trang HTTPS tải nội dung HTTP',
      'Một quy tắc yêu cầu cookie phải có thuộc tính SameSite',
    ],
  },
  'dom-047': {
    question: 'Khi nào CORS preflight request (`OPTIONS`) được kích hoạt?',
    explanation:
      'CORS "simple request" (GET/HEAD/POST với header giới hạn và Content-Type) KHÔNG kích hoạt preflight. Non-simple request kích hoạt preflight `OPTIONS` để hỏi server liệu request thực tế có được phép không. Ví dụ kích hoạt preflight: phương thức `PUT`/`DELETE`/`PATCH`, `Content-Type: application/json`, header tùy chỉnh như `Authorization` hoặc `X-Custom-Header`. Server phải phản hồi với các header `Access-Control-Allow-*` phù hợp.',
    options: [
      'Trên mỗi cross-origin request',
      'Chỉ khi sử dụng GET request',
      'Khi cross-origin request là "non-simple" request: sử dụng phương thức khác GET/POST/HEAD, có header tùy chỉnh, hoặc dùng Content-Type khác application/x-www-form-urlencoded, multipart/form-data, hoặc text/plain',
      'Chỉ khi server không gửi CORS header',
    ],
  },
  'dom-048': {
    question: 'Thuộc tính `sandbox` trên `<iframe>` làm gì?',
    explanation:
      'Thuộc tính `sandbox` trên `<iframe>` áp dụng một tập hạn chế mặc định: không script, không form, không top navigation, không popup, không truy cập same-origin. Bạn có thể kích hoạt lại từng tính năng: `allow-scripts` (bật JS), `allow-forms`, `allow-same-origin`, `allow-popups`, `allow-top-navigation`. Lưu ý: sử dụng cả `allow-scripts` và `allow-same-origin` cùng nhau là nguy hiểm vì cho phép iframe gỡ bỏ hạn chế sandbox.',
    options: [
      'Nó kích hoạt CSS scoping dạng sandbox cho nội dung iframe',
      'Nó áp dụng các hạn chế cho nội dung iframe: vô hiệu hóa script, form, pointer lock, v.v. trừ khi quyền cụ thể được bật lại bằng các giá trị token sandbox',
      'Nó tự động tải iframe trong một process riêng biệt',
      'Nó ngăn iframe gửi network request',
    ],
  },

  // ─── ADDITIONAL DOM MANIPULATION ──────────────────────────────────────────────
  'dom-049': {
    question: 'Viết hàm tạo danh sách 5 item sử dụng `DocumentFragment` và append vào phần tử `<ul>`.',
    explanation:
      'Sử dụng `DocumentFragment`, tất cả phần tử `<li>` được tạo ngoài màn hình. Một lệnh `appendChild(fragment)` duy nhất chuyển tất cả phần tử con vào DOM trong một thao tác, gây ra một lần tính toán layout. Fragment sẽ trống sau đó. Đây là cách tối ưu hóa hiệu suất kinh điển cho việc chèn DOM hàng loạt.',
  },
  'dom-050': {
    question: 'Code event delegation này không hoạt động khi click vào `<span>` bên trong `<button>`. Sửa lỗi.',
    explanation:
      'Khi click vào `<span>` bên trong `<button>`, `e.target` là `<span>`, không phải `<button>`. Kiểm tra `tagName === "BUTTON"` thất bại. Cách sửa dùng `e.target.closest("button")` duyệt ngược lên từ phần tử được click thực tế (span) và tìm `<button>` tổ tiên gần nhất (hoặc chính button). Đây là pattern đúng cho event delegation với các phần tử lồng nhau.',
  },

  // ─── ADVANCED EVENT LOOP ──────────────────────────────────────────────────────
  'dom-051': {
    question: 'Output là gì?',
    explanation:
      '`main()` chạy đồng bộ cho đến `await` đầu tiên. `A` được log, sau đó `await Promise.resolve()` tạm dừng `main` (lên lịch tiếp tục dưới dạng microtask). Thực thi quay về call site: `D` được log. Sau đó microtask chạy: `B` được log, `await` thứ hai tạm dừng lại (một microtask khác). Sau đó `C` được log. Mỗi `await` thực chất lên lịch phần còn lại của async function dưới dạng microtask continuation.',
  },
  'dom-052': {
    question: '"Long task" trong ngữ cảnh hiệu suất trình duyệt là gì và làm thế nào để phát hiện nó?',
    explanation:
      '"Long task" được định nghĩa là bất kỳ task nào trên main thread chặn trình duyệt lâu hơn **50ms** — tại thời điểm đó người dùng cảm nhận giao diện bị chậm. Phát hiện bằng: `new PerformanceObserver((list) => { list.getEntries().forEach(entry => console.log(entry.duration)) }).observe({ type: "longtask", buffered: true })`. Long Tasks API cung cấp task attribution. Total Blocking Time (TBT) và First Input Delay (FID) Core Web Vitals dựa trên long task.',
    options: [
      'Bất kỳ thao tác JavaScript nào mất hơn 1ms; phát hiện bằng performance.now()',
      'Một task trên main thread mất hơn 50ms, chặn tương tác người dùng; phát hiện qua PerformanceObserver với type "longtask"',
      'Một setTimeout có delay trên 1 giây; phát hiện bằng event listener',
      'Bất kỳ network request nào mất hơn 3 giây; phát hiện bằng Resource Timing API',
    ],
  },

  // ─── WEB STORAGE ADVANCED ─────────────────────────────────────────────────────
  'dom-053': {
    question: '`localStorage` có thể truy cập được từ Web Workers.',
    explanation:
      '`localStorage` và `sessionStorage` KHÔNG khả dụng trong Web Workers (chúng là API đồng bộ, và worker không được có quyền truy cập đồng bộ vào storage). Storage khả dụng trong worker là: `IndexedDB` (bất đồng bộ), Cache API (trong Service Worker), và `self.postMessage()` để giao tiếp với main thread. Đây là thiết kế có chủ đích để ngăn chặn việc chặn worker.',
  },
  'dom-054': {
    question: 'Code này cố lưu một object vào `localStorage` nhưng luôn lấy ra `"[object Object]"`. Sửa lỗi.',
    explanation:
      '`localStorage` chỉ lưu chuỗi. Khi bạn truyền object, JavaScript gọi `.toString()` trên nó, tạo ra `"[object Object]"`. Bạn phải serialize bằng `JSON.stringify()` trước khi lưu và deserialize bằng `JSON.parse()` khi lấy ra. Luôn bọc `JSON.parse` trong try/catch trong production, vì dữ liệu bị hỏng sẽ throw lỗi.',
  },

  // ─── FETCH / STREAMING ────────────────────────────────────────────────────────
  'dom-055': {
    question: 'Triển khai một hàm đọc streaming fetch response sử dụng `ReadableStream` và log các chunk khi chúng đến.',
    explanation:
      '`response.body` là một `ReadableStream`. `getReader()` lấy lock trên stream. Mỗi lần gọi `reader.read()` trả về `{ done, value }` trong đó `value` là `Uint8Array`. `TextDecoder` với `{ stream: true }` xử lý ký tự multi-byte bị chia cắt giữa các chunk. Luôn gọi `reader.releaseLock()` trong finally. Pattern này được sử dụng cho Server-Sent Events, download file lớn, và streaming response từ LLM.',
  },

  // ─── INTERSECTION OBSERVER ADVANCED ──────────────────────────────────────────
  'dom-056': {
    question: 'Triển khai lazy image loader sử dụng `IntersectionObserver` để tải hình ảnh khi chúng cách viewport 100px.',
    explanation:
      '`rootMargin: "100px 0px"` mở rộng vùng intersection 100px phía trên/dưới viewport, kích hoạt tải 100px trước khi hình ảnh hiển thị. `threshold: 0` kích hoạt ngay khi bất kỳ phần nào giao nhau. `unobserve` dừng theo dõi sau khi tải để giải phóng tài nguyên. Hình ảnh sử dụng `data-src` để hoãn URL thực — `src` thực chỉ được đặt khi giao nhau, ngăn tải eager.',
  },

  // ─── SCROLL EVENTS / THROTTLE ─────────────────────────────────────────────────
  'dom-057': {
    question: 'Triển khai hàm `throttle` giới hạn tần suất scroll handler kích hoạt, sau đó áp dụng cho sự kiện scroll.',
    explanation:
      'Throttle đảm bảo hàm thực thi tối đa một lần mỗi `delay` mili giây bất kể được gọi bao nhiêu lần. Sự kiện scroll có thể kích hoạt hơn 100 lần/giây; throttle giảm công việc tốn kém. So sánh với debounce (chờ hết hoạt động). Cho animation dựa trên scroll, ưu tiên `requestAnimationFrame` hơn throttle dựa trên setTimeout, vì rAF đồng bộ với chu kỳ paint.',
  },

  // ─── MUTATION OBSERVER ────────────────────────────────────────────────────────
  'dom-058': {
    question: 'Viết code sử dụng `MutationObserver` để phát hiện khi một phần tử cụ thể có class `loading` được thêm hoặc xóa.',
    explanation:
      '`{ attributes: true }` bật theo dõi mutation thuộc tính. `attributeFilter: ["class"]` giới hạn callback chỉ cho thay đổi thuộc tính class (hiệu quả hơn theo dõi tất cả thuộc tính). Bản ghi mutation có `mutation.attributeName` để xác nhận thuộc tính nào thay đổi. Trả về hàm cleanup (`disconnect()`) ngăn rò rỉ bộ nhớ. Callback MutationObserver chạy dưới dạng microtask.',
  },

  // ─── WINDOW / DOCUMENT ADVANCED ──────────────────────────────────────────────
  'dom-059': {
    question: 'Mục đích của thuộc tính CSS `content-visibility: auto` trong rendering trình duyệt là gì?',
    explanation:
      '`content-visibility: auto` hướng dẫn trình duyệt **bỏ qua layout và paint** cho nội dung ngoài viewport. Trình duyệt sử dụng kích thước ước tính cho các phần tử bị bỏ qua (hoặc giá trị `contain-intrinsic-size` rõ ràng) để duy trì độ chính xác vị trí cuộn. Điều này có thể giảm đáng kể thời gian render ban đầu cho trang dài. Kết hợp với `contain: layout style paint`, nó cho phép nội dung ngoài màn hình bị bỏ qua hoàn toàn.',
    options: [
      'Nó ẩn phần tử khỏi screen reader',
      'Nó báo trình duyệt bỏ qua rendering (layout + paint) cho nội dung ngoài màn hình, giảm thời gian render ban đầu cho trang dài',
      'Nó kích hoạt GPU compositing cho phần tử',
      'Nó hoãn thực thi JavaScript bên trong phần tử',
    ],
  },
  'dom-060': {
    question: 'Thiết kế một triển khai infinite scroll hiệu suất cao cho news feed mạng xã hội với hơn 10.000 item. Giải thích các browser API và kỹ thuật chính được sử dụng.',
    explanation:
      'Infinite scroll ở quy mô lớn đòi hỏi kết hợp: virtual/windowed rendering (chỉ render ~20-50 item), IntersectionObserver để phát hiện cuộn đến cuối hiệu quả, rAF cho cập nhật DOM mượt mà, và lazy loading. Lợi ích lớn nhất đến từ virtual scrolling (tránh hàng nghìn DOM node) và passive scroll listener. Content anchoring ngăn hiện tượng nhảy giật khi item mới được thêm vào đầu.',
  },

  // ─── CORS / SECURITY ADVANCED ─────────────────────────────────────────────────
  'dom-061': {
    question: 'Server cần gửi những HTTP response header nào để cho phép cross-origin request từ `https://app.example.com`?',
    explanation:
      'Để CORS thành công, server phải bao gồm `Access-Control-Allow-Origin` trong response. Sử dụng origin cụ thể (không phải `*`) khi có credential (cookie, header `Authorization`) — `*` với credential bị chặn. Cho non-simple request (sau preflight), cũng bao gồm `Access-Control-Allow-Methods` (ví dụ `GET, POST, PUT`) và `Access-Control-Allow-Headers` cho header tùy chỉnh. Cho credential: `Access-Control-Allow-Credentials: true` và request phải đặt `credentials: "include"`.',
    options: [
      'Chỉ `Content-Type: application/json`',
      '`Access-Control-Allow-Origin: https://app.example.com` (hoặc `*` cho public API), cộng `Access-Control-Allow-Methods` và `Access-Control-Allow-Headers` cho non-simple request',
      '`X-Allow-Origin: https://app.example.com`',
      '`CORS: enabled`',
    ],
  },
  'dom-062': {
    question: 'Header COOP và COEP là gì và tại sao chúng được yêu cầu cho `SharedArrayBuffer`?',
    explanation:
      'Sau lỗ hổng Spectre/Meltdown, trình duyệt mặc định vô hiệu hóa `SharedArrayBuffer`. Nó chỉ được bật lại trong ngữ cảnh **cross-origin isolated**. Điều này yêu cầu: `Cross-Origin-Opener-Policy: same-origin` (ngăn origin khác lấy tham chiếu đến window của bạn) và `Cross-Origin-Embedder-Policy: require-corp` (đảm bảo tất cả tài nguyên con hoặc cùng origin hoặc gửi header CORP: same-origin/cross-origin). Điều này cũng kích hoạt `performance.measureUserAgentSpecificMemory()` và timer độ phân giải cao.',
    options: [
      'Chúng là header tối ưu hóa hiệu suất không có mục đích bảo mật',
      '`Cross-Origin-Opener-Policy: same-origin` cô lập nhóm browsing context; `Cross-Origin-Embedder-Policy: require-corp` đảm bảo tất cả tài nguyên cross-origin đồng ý tham gia. Cùng nhau tạo ngữ cảnh "cross-origin isolated" cần thiết cho SharedArrayBuffer do biện pháp chống Spectre',
      'Chúng thay thế CORS header cho trình duyệt hiện đại',
      'Chúng kích hoạt HTTP/3 cho trang',
    ],
  },

  // ─── ADDITIONAL QUESTIONS ─────────────────────────────────────────────────────
  'dom-063': {
    question: 'Gọi `element.innerHTML = userInput` mà không sanitize là an toàn miễn là input đến từ người dùng hiện tại.',
    explanation:
      'Đặt `innerHTML` với user input chưa sanitize là lỗ hổng XSS (Cross-Site Scripting) ngay cả khi input đến từ người dùng hiện tại — vì dữ liệu đó có thể đã được lưu và phục vụ lại, hoặc input của người dùng khác có thể được hiển thị cho người dùng này. Luôn sanitize HTML trước khi chèn sử dụng `DOMPurify` hoặc `setHTML()` native (Sanitizer API). Ưu tiên `textContent` cho plain text (nó không parse HTML). `innerHTML` thực thi `<script>` trên trình duyệt cũ và luôn xử lý inline event handler.',
  },
  'dom-064': {
    question: 'Sự khác biệt giữa `textContent` và `innerText` là gì?',
    explanation:
      '`textContent` trả về nội dung text của node và tất cả node con cháu, bao gồm nội dung `<script>` và `<style>` và text trong phần tử ẩn. Nó **không** nhận biết layout và không kích hoạt reflow. `innerText` xấp xỉ những gì hiển thị trên màn hình: nó tôn trọng CSS `display: none` và `visibility: hidden`, render `<br>` thành xuống dòng, và gộp khoảng trắng. Vì `innerText` nhận biết layout, đọc nó buộc **reflow**. Để đặt nội dung text an toàn, ưu tiên `textContent`.',
    options: [
      'Chúng giống hệt nhau',
      '`textContent` trả về tất cả text bao gồm phần tử ẩn và nội dung script/style; `innerText` chỉ trả về text người dùng có thể đọc, nhận biết CSS styling, và kích hoạt reflow',
      '`innerText` trả về tất cả text; `textContent` chỉ trả về text của chính phần tử, không bao gồm con cháu',
      '`textContent` đã bị deprecated; sử dụng `innerText`',
    ],
  },
  'dom-065': {
    question: 'Khái niệm tương đương Temporal Dead Zone (TDZ) trong ngữ cảnh trình duyệt: điều gì xảy ra nếu bạn cố truy cập CSS Custom Property (biến) chưa được định nghĩa?',
    explanation:
      'Nếu CSS custom property (`var(--my-color)`) không được định nghĩa trong bất kỳ tổ tiên nào, `getComputedStyle(el).getPropertyValue("--my-color")` trả về chuỗi rỗng `" "` (có khoảng trắng). Khi một thuộc tính như `color: var(--my-color)` tham chiếu biến chưa định nghĩa, thuộc tính trở nên **invalid at computed value time** và fallback về **giá trị kế thừa** hoặc **giá trị khởi tạo** — không phải lỗi. Bạn có thể cung cấp fallback: `var(--my-color, blue)`.',
    options: [
      'Trình duyệt ném TypeError',
      'Trình duyệt trả về chuỗi rỗng `""` cho giá trị thuộc tính, có thể khiến thuộc tính áp dụng sử dụng giá trị khởi tạo',
      'Trình duyệt trả về `undefined`',
      'Trình duyệt trả về `null`',
    ],
  },
  'dom-066': {
    question: 'Bạn sẽ kiến trúc một trình soạn thảo tài liệu cộng tác thời gian thực trong trình duyệt như thế nào? Mô tả các browser API chính, chiến lược giải quyết xung đột, và các cân nhắc hiệu suất.',
    explanation:
      'Một trình soạn thảo cộng tác kết hợp: WebSocket cho đồng bộ thời gian thực, CRDT/OT cho merge không xung đột, Selection/Range API cho đồng bộ con trỏ, MutationObserver để phát hiện thay đổi cục bộ, và Web Workers cho xử lý ngoài thread. CRDT được ưu tiên trong triển khai hiện đại (Yjs, Automerge) nhờ khả năng peer-to-peer và đảm bảo eventual consistency mà không cần authority trung tâm.',
  },
  'dom-067': {
    question: '`element.getBoundingClientRect()` trả về gì và lưu ý gì khi sử dụng nó trong vòng lặp?',
    explanation:
      '`getBoundingClientRect()` trả về `DOMRect` với `top`, `right`, `bottom`, `left`, `width`, `height` tương đối với **viewport**. Lưu ý: nó là phép **đọc kích hoạt layout** — nếu DOM có thay đổi style đang chờ, trình duyệt flush layout đồng bộ để cho bạn giá trị chính xác. Gọi nó trong vòng lặp mà cũng thay đổi style gây ra **forced synchronous layout** (layout thrashing). Giải pháp: đọc tất cả giá trị trước, sau đó áp dụng tất cả ghi.',
    options: [
      'Nó trả về kích thước phần tử tương đối với offsetParent; không có lưu ý',
      'Nó trả về DOMRect với vị trí/kích thước phần tử tương đối với viewport; gọi nó buộc layout đồng bộ (reflow) nên gọi trong vòng lặp ghi gây layout thrashing',
      'Nó trả về kích thước phần tử tương đối với document; luôn miễn phí khi gọi',
      'Nó là bất đồng bộ và trả về Promise',
    ],
  },
  'dom-068': {
    question: 'Thuộc tính CSS `will-change` là gì và khi nào nên sử dụng nó một cách tiết chế?',
    explanation:
      '`will-change: transform` (hoặc `opacity`, `scroll-position`) báo trình duyệt promote phần tử lên compositor layer riêng trước khi animation bắt đầu, tránh chi phí tạo layer giữa chừng animation. Tuy nhiên: tạo layer tiêu tốn bộ nhớ và mỗi layer phải được upload lên GPU. Áp dụng `will-change` cho nhiều/lớn phần tử có thể làm crash hoặc chậm trình duyệt. Chỉ sử dụng khi profiling cho thấy layer promotion có ích, và xóa nó sau animation qua JS. `transform: translateZ(0)` là "hack" cũ tương đương.',
    options: [
      'Nó bật hardware acceleration cho tất cả thuộc tính CSS; luôn áp dụng globally',
      'Nó gợi ý trình duyệt tạo compositor layer mới cho phần tử trước; chỉ sử dụng khi biết animation sẽ bắt đầu sớm, vì lạm dụng lãng phí bộ nhớ và tài nguyên GPU',
      'Nó ngăn repaint trên phần tử hoàn toàn',
      'Nó bắt buộc để CSS animation hoạt động trong Chrome',
    ],
  },
}
