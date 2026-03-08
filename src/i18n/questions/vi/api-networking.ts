import type { QuestionTranslationMap } from '../types'

export const apiNetworkingVi: QuestionTranslationMap = {
  // ─── REST API & HTTP Methods ──────────────────────────────────────────────
  'api-001': {
    question: 'Phương thức HTTP nào là idempotent nhưng KHÔNG phải là safe?',
    options: ['GET', 'POST', 'PUT', 'PATCH'],
    explanation:
      'Các phương thức safe (GET, HEAD, OPTIONS) không thay đổi trạng thái server. Các phương thức idempotent (GET, PUT, DELETE) cho ra cùng kết quả khi gọi nhiều lần. PUT thay thế một resource — gọi N lần vẫn để resource ở cùng trạng thái cuối cùng, nên nó là idempotent. Nhưng nó có thay đổi trạng thái, nên KHÔNG phải safe. POST không phải safe lẫn idempotent — gửi hai lần có thể tạo hai resource. PATCH KHÔNG được đảm bảo là idempotent (PATCH nối thêm dữ liệu thì không idempotent), dù có thể là idempotent trong một số trường hợp.',
  },
  'api-002': {
    question: 'REST API nên trả về mã HTTP status nào khi một resource được tạo thành công?',
    options: ['200 OK', '201 Created', '204 No Content', '202 Accepted'],
    explanation:
      '201 Created cho biết request thành công và một resource mới đã được tạo. Response nên bao gồm header Location trỏ đến URL của resource mới và thường trả về body chứa resource đã tạo. 200 OK dùng cho đọc hoặc cập nhật thành công có trả body. 204 No Content dùng cho thao tác thành công không có response body (ví dụ DELETE). 202 Accepted nghĩa là request đã được chấp nhận nhưng xử lý bất đồng bộ và chưa hoàn tất.',
  },
  'api-003': {
    question: 'Sự khác biệt chính giữa PUT và PATCH là gì?',
    options: [
      'PUT là idempotent, PATCH thì không; ngoài ra chúng hoạt động giống nhau',
      'PUT thay thế toàn bộ resource; PATCH áp dụng cập nhật một phần',
      'PUT dùng để tạo resource, PATCH dùng để cập nhật',
      'PUT yêu cầu xác thực, PATCH thì không',
    ],
    explanation:
      'PUT thay thế toàn bộ resource tại URI đã cho bằng payload của request — bất kỳ trường nào không có trong body sẽ bị xóa hoặc đặt về giá trị mặc định. PATCH áp dụng thay đổi một phần; chỉ các trường có trong payload mới bị thay đổi. Ví dụ, PATCH /users/1 với { "email": "new@x.com" } chỉ cập nhật email. PUT /users/1 với cùng body sẽ ghi đè TẤT CẢ các trường khác. Ngữ nghĩa của PATCH được định nghĩa trong RFC 5789.',
  },
  'api-004': {
    question:
      'HTTP DELETE request là idempotent — gọi DELETE trên cùng một resource nhiều lần luôn tạo ra cùng trạng thái server.',
    explanation:
      'DELETE là idempotent: xóa một resource đã bị xóa rồi vẫn để server ở cùng trạng thái. Lần gọi đầu trả về 200/204; các lần gọi sau có thể trả về 404 (không tìm thấy resource), nhưng trạng thái server là giống nhau — resource không tồn tại. Điều này khác với POST không idempotent, khi lặp lại lời gọi có thể tạo resource trùng lặp. Idempotency là thuộc tính của kết quả trạng thái server, không nhất thiết là mã response HTTP.',
  },
  'api-005': {
    question: 'Lớp mã HTTP status nào chỉ ra lỗi phía client?',
    options: ['1xx', '2xx', '3xx', '4xx'],
    explanation:
      'Mã status 4xx chỉ ra lỗi phía client — request bị sai định dạng hoặc không thể thực hiện do lỗi của client. Các ví dụ phổ biến: 400 Bad Request (cú pháp không hợp lệ), 401 Unauthorized (thiếu/sai thông tin xác thực), 403 Forbidden (đã xác thực nhưng không có quyền), 404 Not Found, 409 Conflict, 422 Unprocessable Entity (lỗi validation), 429 Too Many Requests. Mã 5xx là lỗi server. 3xx là chuyển hướng. 2xx là thành công. 1xx là thông tin.',
  },

  // ─── HTTP Headers ─────────────────────────────────────────────────────────
  'api-006': {
    question: 'Header nào cho server biết định dạng của request body?',
    options: ['Accept', 'Content-Type', 'Authorization', 'Accept-Encoding'],
    explanation:
      'Content-Type cho biết kiểu media của request body, ví dụ "application/json" cho JSON, "multipart/form-data" cho tải file lên, "application/x-www-form-urlencoded" cho dữ liệu form. Header Accept thì khác — nó cho server biết CLIENT có thể hiểu những kiểu media nào trong response. Nếu thiếu Content-Type đúng, server có thể không parse được body. Ví dụ, gửi JSON mà không có Content-Type: application/json khiến nhiều framework không decode body.',
  },
  'api-007': {
    question: 'Header ETag chứa gì và được sử dụng như thế nào?',
    options: [
      'Ngày hết hạn của response đã cache',
      'Một định danh opaque cho phiên bản cụ thể của resource, dùng cho conditional request',
      'Kiểu entity của resource (tương đương Content-Type)',
      'Một thẻ mã hóa để xác minh tính toàn vẹn của response',
    ],
    explanation:
      'ETag (entity tag) là một chuỗi opaque xác định duy nhất một phiên bản cụ thể của resource — thường là hash của nội dung. Server gửi ETag: "abc123" trong response. Trong các request tiếp theo, client gửi If-None-Match: "abc123". Nếu resource chưa thay đổi, server trả về 304 Not Modified không có body, tiết kiệm băng thông. ETag cho phép validate cache hiệu quả. Chúng cũng ngăn "xung đột giữa chừng" trong PUT/PATCH: gửi If-Match: "abc123" để đảm bảo bạn đang cập nhật đúng phiên bản đã đọc.',
  },
  'api-008': {
    question:
      'Directive Cache-Control: no-cache có nghĩa là trình duyệt sẽ không cache response.',
    explanation:
      'Đây là một hiểu lầm phổ biến. Cache-Control: no-cache KHÔNG có nghĩa là "không cache." Nó có nghĩa là trình duyệt phải revalidate response đã cache với server trên mọi request trước khi sử dụng (qua ETag/If-None-Match hoặc Last-Modified/If-Modified-Since). Nếu server xác nhận cache vẫn còn mới (304), trình duyệt dùng phiên bản đã cache. Để thực sự ngăn cache, dùng Cache-Control: no-store, chỉ thị trình duyệt không lưu trữ bất kỳ phần nào của response vào bất kỳ cache nào.',
  },
  'api-009': {
    question:
      'Directive Cache-Control nào cho phép phục vụ response cũ trong khi revalidation diễn ra ở nền?',
    options: [
      'no-cache',
      'must-revalidate',
      'stale-while-revalidate',
      'proxy-revalidate',
    ],
    explanation:
      'stale-while-revalidate=<seconds> cho phép response đã cache được phục vụ dù đã cũ (quá max-age) trong số giây chỉ định, đồng thời trình duyệt kích hoạt request revalidation ở nền. Người dùng thấy response nhanh; cache được làm mới cho request tiếp theo. Ví dụ: Cache-Control: max-age=60, stale-while-revalidate=600 nghĩa là phục vụ fresh trong 60 giây, phục vụ stale (trong khi revalidating) trong 600 giây, sau đó chờ network. Đây là nền tảng của pattern SWR (stale-while-revalidate) được dùng trong các thư viện React hooks phổ biến.',
  },

  // ─── CORS ────────────────────────────────────────────────────────────────
  'api-010': {
    question: 'Điều gì kích hoạt một CORS preflight request?',
    options: [
      'Bất kỳ cross-origin request nào, luôn luôn',
      'Chỉ các request có credentials (cookies)',
      'Các request không phải "simple" — ví dụ custom header, phương thức không chuẩn, hoặc Content-Type không phải simple',
      'Chỉ các request DELETE và PUT',
    ],
    explanation:
      'Một preflight OPTIONS request được gửi trước các cross-origin request "không simple". Một request được coi là "simple" nếu sử dụng GET/HEAD/POST, chỉ bao gồm các header CORS-safelisted (Accept, Accept-Language, Content-Language, Content-Type với giá trị application/x-www-form-urlencoded, multipart/form-data, hoặc text/plain), và không có ReadableStream body. Bất cứ điều gì ngoài các ràng buộc này — ví dụ header Authorization, Content-Type: application/json, PUT, PATCH, DELETE, custom header — kích hoạt preflight. Trình duyệt gửi OPTIONS để kiểm tra server có cho phép request thực hay không.',
  },
  'api-011': {
    question:
      'Một fetch request bao gồm credentials: "include". Cấu hình CORS header nào được yêu cầu trên server?',
    options: [
      'Access-Control-Allow-Origin: *',
      'Access-Control-Allow-Origin: <specific-origin> và Access-Control-Allow-Credentials: true',
      'Access-Control-Allow-Headers: credentials',
      'Không cần cấu hình thêm, credentials luôn được cho phép',
    ],
    explanation:
      'Khi credentials (cookies, Authorization header, chứng chỉ TLS) được bao gồm trong cross-origin request, server PHẢI trả về Access-Control-Allow-Credentials: true VÀ Access-Control-Allow-Origin được đặt thành origin cụ thể (wildcard "*" bị cấm rõ ràng khi có credentials). Trình duyệt sẽ chặn response nếu một trong hai điều kiện không được đáp ứng. Ở phía client, cả fetch credentials: "include" và XMLHttpRequest.withCredentials = true đều yêu cầu cấu hình server này.',
  },
  'api-012': {
    question:
      'Lệnh fetch này bị lỗi CORS trong production (origin khác nhau), nhưng hoạt động trong development. Tìm bug:',
    explanation:
      'Bug: origin: \'*\' với credentials: true là không hợp lệ. Khi credentials được bao gồm, Access-Control-Allow-Origin không thể là wildcard. Đặc tả CORS cấm rõ ràng Access-Control-Allow-Origin: * khi Access-Control-Allow-Credentials: true vì wildcard origin kết hợp credentials sẽ cho phép bất kỳ trang nào thực hiện credentialed request (lỗ hổng bảo mật). Trình duyệt chặn các response như vậy. Ngoài ra, X-Custom-Header yêu cầu Access-Control-Allow-Headers: X-Custom-Header trong preflight response. Sửa cấu hình server: cors({ origin: "https://app.example.com", credentials: true }). Trong development, cả frontend và backend thường chạy trên cùng origin nên CORS không áp dụng.',
    answer:
      'Bug: origin: \'*\' với credentials: true là không hợp lệ. Khi credentials được bao gồm, Access-Control-Allow-Origin không thể là wildcard. Sửa: đặt origin thành origin cụ thể được cho phép, ví dụ origin: \'https://app.example.com\' hoặc dùng hàm validate theo allowlist.',
  },
  'api-013': {
    question:
      'CORS được thực thi bởi server — server chặn các cross-origin request mà nó không cho phép.',
    explanation:
      'CORS được thực thi bởi TRÌNH DUYỆT, không phải server. Server nhận cross-origin request, xử lý nó, và trả về các CORS header. Trình duyệt sau đó quyết định có cho JavaScript đọc response hay không dựa trên các header đó. Nếu Access-Control-Allow-Origin không khớp, trình duyệt chặn JavaScript đọc response — nhưng server ĐÃ nhận và xử lý request. Đây là lý do CORS không phải là cơ chế bảo mật chống tấn công phía server (như CSRF từ non-browser client). Nó chỉ kiểm soát những gì JavaScript trong trình duyệt có thể đọc.',
  },

  // ─── Fetch API ────────────────────────────────────────────────────────────
  'api-014': {
    question: 'Đoạn code này log ra gì?',
    explanation:
      'Fetch API KHÔNG reject promise đối với các mã HTTP status lỗi (4xx, 5xx). Thuộc tính response.ok là false khi status nằm ngoài 200-299. Nếu không kiểm tra response.ok rõ ràng, code sẽ gọi response.json() trên response 404 và log data như thể thành công. Pattern được trình bày là cách đúng để xử lý lỗi HTTP với fetch — luôn kiểm tra response.ok hoặc response.status. So sánh với axios, tự động throw cho các response không phải 2xx.',
    answer: 'error: HTTP error',
  },
  'api-015': {
    question:
      'Triển khai một tiện ích fetchWithTimeout để hủy fetch request nếu mất lâu hơn số mili giây cho trước.',
    explanation:
      'AbortController tạo một abort signal có thể truyền cho fetch. Khi controller.abort() được gọi, fetch promise reject với DOMException có tên "AbortError". Luôn clear timeout ở cả đường thành công và lỗi để tránh rò rỉ bộ nhớ. Lưu ý rằng hủy fetch chỉ ngăn trình duyệt xử lý response — server có thể đã nhận và xử lý request (quan trọng với các request không idempotent như POST).',
  },
  'api-016': {
    question:
      'Sự khác biệt giữa fetch credentials: "same-origin" và credentials: "include" là gì?',
    options: [
      '"same-origin" gửi cookies cho mọi request; "include" chỉ cho cross-origin',
      '"same-origin" chỉ gửi cookies cho request cùng origin; "include" gửi cookies cho mọi origin bao gồm cross-origin',
      '"same-origin" dùng session cookies; "include" dùng persistent cookies',
      'Không có sự khác biệt — cả hai hoạt động giống nhau trong trình duyệt hiện đại',
    ],
    explanation:
      'Tùy chọn credentials kiểm soát khi nào cookies, HTTP authentication, và chứng chỉ TLS client được gửi. "omit" — không bao giờ gửi credentials. "same-origin" (mặc định) — gửi credentials chỉ khi URL request có cùng origin với trang. "include" — luôn gửi credentials, kể cả cho cross-origin request (yêu cầu CORS Access-Control-Allow-Credentials: true trên server). Dùng "include" khi API của bạn ở subdomain hoặc domain khác nhưng cần đọc cookies của người dùng.',
  },
  'api-017': {
    question:
      'Triển khai một tiện ích retry để thử lại fetch request với exponential backoff khi có lỗi mạng hoặc response 5xx, tối đa một số lần thử.',
    explanation:
      'Exponential backoff tăng gấp đôi thời gian chờ mỗi lần retry (1s, 2s, 4s...), ngăn vấn đề thundering herd. Jitter (Math.random() * 100) thêm tính ngẫu nhiên để ngăn tất cả client retry đồng thời. Chỉ retry khi lỗi mạng (fetch throw) hoặc lỗi 5xx — KHÔNG retry lỗi 4xx client (400, 401, 403, 404, 429) mà không có xử lý đặc biệt. Với 429 Too Many Requests, kiểm tra header Retry-After để biết thời gian chờ do server chỉ định. Không bao giờ retry POST request không idempotent một cách mù quáng — chúng có thể đã thực hiện một phần.',
  },

  // ─── GraphQL ──────────────────────────────────────────────────────────────
  'api-018': {
    question: 'Trong GraphQL, lợi thế chính của fragment là gì?',
    options: [
      'Chúng cho phép chia query thành nhiều HTTP request',
      'Chúng cho phép tái sử dụng các field selection có thể spread vào nhiều query hoặc mutation',
      'Chúng được dùng để định nghĩa resolver phía server',
      'Chúng tự động cache kết quả query trên client',
    ],
    explanation:
      'Fragment là các đơn vị tái sử dụng của query. Chúng cho phép bạn định nghĩa một tập hợp field một lần và spread (...) chúng vào bất kỳ query hoặc mutation nào cần cùng các field đó. Ví dụ: fragment UserFields on User { id name email } — rồi query { user(id: 1) { ...UserFields } }. Điều này cho phép DRY field selection, thiết yếu cho việc co-locate yêu cầu dữ liệu của component (ví dụ pattern container của Relay), và giảm lỗi đánh máy từ việc lặp lại danh sách field. Fragment cũng hỗ trợ incremental delivery trong @defer.',
  },
  'api-019': {
    question: 'GraphQL luôn sử dụng HTTP POST và không bao giờ dùng HTTP GET.',
    explanation:
      'GraphQL có thể dùng cả GET và POST. GET thường được dùng cho query (thao tác đọc) — query được truyền qua URL parameter (?query=...). POST được dùng cho query, mutation, và subscription — operation nằm trong request body dưới dạng JSON. Dùng GET cho query cho phép trình duyệt cache và CDN cache qua URL. Mutation nên luôn dùng POST vì chúng thay đổi dữ liệu. Đặc tả GraphQL không bắt buộc phương thức HTTP cụ thể. Apollo Server và hầu hết các implementation hỗ trợ cả hai.',
  },
  'api-020': {
    question:
      'Điều nào sau đây là lợi thế của GraphQL so với REST đối với frontend developer?',
    options: [
      'GraphQL luôn nhanh hơn vì dùng binary encoding thay vì JSON',
      'GraphQL loại bỏ over-fetching và under-fetching bằng cách cho phép client chỉ định chính xác các field cần thiết',
      'GraphQL không yêu cầu schema, khiến nó linh hoạt hơn REST',
      'GraphQL mặc định dùng HTTP/2, trong khi REST thì không',
    ],
    explanation:
      'Over-fetching xảy ra khi REST endpoint trả về nhiều field hơn client cần (lãng phí băng thông). Under-fetching xảy ra khi một REST endpoint không trả đủ dữ liệu, cần nhiều round trip (vấn đề N+1). GraphQL giải quyết cả hai: client khai báo chính xác field cần trong một query duy nhất, kể cả qua các type liên quan. Đánh đổi: REST đơn giản hơn, HTTP cache tốt hơn, và được hỗ trợ rộng rãi hơn. GraphQL thêm độ phức tạp (schema, resolver, vấn đề N+1 query phía server). Không cái nào tốt hơn tuyệt đối.',
  },
  'api-021': {
    question: 'GraphQL subscription hoạt động như thế nào bên dưới?',
    options: [
      'Chúng dùng long-polling — client liên tục gửi query mỗi vài giây',
      'Chúng dùng WebSocket (hoặc SSE) để duy trì kết nối persistent cho cập nhật real-time từ server đến client',
      'Chúng dùng HTTP/2 server push để gửi cập nhật',
      'Chúng dùng service worker để intercept và cache kết quả query',
    ],
    explanation:
      'GraphQL subscription yêu cầu kết nối persistent. Implementation phổ biến nhất dùng WebSocket (protocol graphql-ws hoặc subscriptions-transport-ws). Client gửi subscription operation, và server push cập nhật qua WebSocket bất cứ khi nào sự kiện subscribed xảy ra. Một số implementation dùng Server-Sent Events (SSE), đơn giản hơn (một chiều, dựa trên HTTP, tự động reconnect). Apollo Client hỗ trợ cả hai. Lựa chọn phụ thuộc vào việc cần giao tiếp hai chiều (dùng WebSocket) hay chỉ server-to-client (SSE là đủ và đơn giản hơn).',
  },

  // ─── WebSocket ────────────────────────────────────────────────────────────
  'api-022': {
    question:
      'WebSocket handshake là gì và nó sử dụng những khái niệm HTTP nào?',
    options: [
      'Một TLS negotiation xảy ra trước kết nối TCP',
      'Một HTTP Upgrade request chuyển đổi protocol từ HTTP sang WebSocket',
      'Một custom binary protocol chạy độc lập với HTTP',
      'Một HTTP OPTIONS preflight tương tự CORS',
    ],
    explanation:
      'Kết nối WebSocket bắt đầu bằng HTTP Upgrade handshake. Client gửi HTTP/1.1 request với các header: Connection: Upgrade, Upgrade: websocket, Sec-WebSocket-Key: <base64>, Sec-WebSocket-Version: 13. Nếu server hỗ trợ WebSocket, nó trả về 101 Switching Protocols và Sec-WebSocket-Accept (hash của key). Sau đó, kết nối TCP được giữ mở và cả hai bên giao tiếp bằng WebSocket framing protocol — một lớp framing binary nhẹ, không phải HTTP.',
  },
  'api-023': {
    question:
      'Khi nào bạn nên chọn SSE (Server-Sent Events) thay vì WebSocket?',
    options: [
      'Luôn luôn — SSE hoàn toàn tốt hơn WebSocket trong mọi trường hợp',
      'Khi bạn cần giao tiếp hai chiều và messaging độ trễ thấp',
      'Khi giao tiếp chỉ từ server đến client và bạn muốn implementation đơn giản hơn, HTTP/2 multiplexing, và tự động reconnection',
      'Khi bạn cần gửi dữ liệu binary hiệu quả',
    ],
    explanation:
      'SSE (EventSource API) lý tưởng cho streaming server-to-client: live feed, thông báo, cập nhật tiến trình. Ưu điểm so với WebSocket: dựa trên HTTP nên hoạt động với proxy/CDN chuẩn, tự động reconnection với Last-Event-ID, hoạt động trên HTTP/2 (multiplexed, không lo giới hạn kết nối), đơn giản hơn để triển khai. Nhược điểm: một chiều (client không thể gửi dữ liệu sau khi kết nối — cần HTTP request riêng), chỉ text (không binary), hỗ trợ trình duyệt hạn chế cho phiên bản cũ. WebSocket tốt hơn cho chat, game, công cụ cộng tác yêu cầu giao tiếp hai chiều binary độ trễ thấp.',
  },
  'api-024': {
    question:
      'Triển khai một class WebSocket client với tự động reconnection sử dụng exponential backoff.',
    explanation:
      'Điểm chính: retryCount reset về 0 khi kết nối thành công. Chỉ reconnect nếu đóng không sạch (wasClean: false bao gồm lỗi mạng, không phải đóng cố ý). Exponential backoff với giới hạn tối đa ngăn làm ngập server. Đặt maxRetries = 0 trong close() ngừng reconnection khi ngắt kết nối có chủ đích. Trong production, cũng nên triển khai: heartbeat/ping-pong để phát hiện kết nối chết, message queuing khi mất kết nối, và làm mới token xác thực trước khi reconnect.',
  },

  // ─── HTTP/2 and HTTP/3 ────────────────────────────────────────────────────
  'api-025': {
    question:
      'HTTP/2 multiplexing giải quyết vấn đề gì so với HTTP/1.1?',
    options: [
      'Nó loại bỏ nhu cầu TLS, giúp kết nối nhanh hơn',
      'Nó loại bỏ Head-of-Line (HOL) blocking bằng cách cho phép nhiều request và response xen kẽ trên một kết nối TCP duy nhất',
      'Nó tự động nén request body bằng gzip',
      'Nó thay thế JSON bằng binary encoding để parse nhanh hơn',
    ],
    explanation:
      'HTTP/1.1 có Head-of-Line blocking: mỗi kết nối chỉ xử lý được một cặp request-response tại một thời điểm (pipelining không đáng tin cậy). Trình duyệt khắc phục bằng cách mở 6 kết nối mỗi origin, nhưng lãng phí tài nguyên. HTTP/2 multiplexing gửi nhiều stream trên một kết nối TCP đồng thời — request và response được chia thành frame xen kẽ. Điều này loại bỏ HOL blocking ở tầng HTTP. Tuy nhiên, HTTP/2 vẫn có HOL blocking ở tầng TCP (một gói tin bị mất làm tắc tất cả stream). HTTP/3 (QUIC) giải quyết bằng cách dùng UDP với khôi phục mất gói tin theo từng stream.',
  },
  'api-026': {
    question: 'Đổi mới chính của HTTP/3 so với HTTP/2 là gì?',
    options: [
      'HTTP/3 dùng binary framing cho header, HTTP/2 thì không',
      'HTTP/3 chạy trên QUIC (transport dựa trên UDP) thay vì TCP, loại bỏ Head-of-Line blocking ở tầng TCP và cải thiện tốc độ thiết lập kết nối',
      'HTTP/3 hỗ trợ server push; HTTP/2 thì không',
      'HTTP/3 loại bỏ nhu cầu CORS',
    ],
    explanation:
      'HTTP/3 chạy trên QUIC, một transport protocol được xây dựng trên UDP. Lợi ích: 1) Không có TCP Head-of-Line blocking — mỗi stream độc lập; một gói UDP bị mất chỉ chặn stream của nó, không phải các stream khác. 2) Thiết lập kết nối nhanh hơn — QUIC kết hợp TLS 1.3 và transport handshake (0-RTT hoặc 1-RTT). 3) Migration kết nối — kết nối QUIC tồn tại khi thay đổi IP (ví dụ chuyển từ WiFi sang di động). HTTP/2 có tất cả điều này ở tầng ứng dụng nhưng mất gói TCP vẫn chặn tất cả HTTP/2 stream. HTTP/3 được hỗ trợ bởi khoảng 95% trình duyệt.',
  },
  'api-027': {
    question:
      'HTTP/2 Server Push cho phép server chủ động gửi resource mà client chưa yêu cầu, và tính năng này được sử dụng rộng rãi trong production ngày nay.',
    explanation:
      'Mặc dù HTTP/2 Server Push được thiết kế để chủ động gửi resource (ví dụ push CSS khi HTML được yêu cầu), nó đã bị bỏ trong thực tế. Vấn đề: server không thể biết client đã cache gì — resource được push lãng phí băng thông nếu đã được cache. Chrome đã loại bỏ hỗ trợ Server Push (Chrome 106+). Giải pháp thay thế được ưa chuộng là mã status 103 Early Hints, cho trình duyệt biết bắt đầu fetch resource quan trọng trong khi server vẫn đang chuẩn bị response chính. HTTP/3 cũng hạ ưu tiên server push.',
  },

  // ─── Caching ──────────────────────────────────────────────────────────────
  'api-028': {
    question: 'Mục đích của CDN (Content Delivery Network) edge cache là gì?',
    options: [
      'Chạy code phía server gần người dùng hơn',
      'Lưu trữ bản sao của nội dung tĩnh và có thể cache gần người dùng hơn về mặt địa lý, giảm độ trễ và tải server gốc',
      'Cung cấp bảo vệ DDoS bằng cách lọc request độc hại',
      'Xử lý truy vấn cơ sở dữ liệu nhanh hơn thông qua connection pooling',
    ],
    explanation:
      'Các node edge CDN cache nội dung tại các điểm hiện diện (PoP) phân tán toàn cầu. Khi người dùng yêu cầu resource, nó được phục vụ từ PoP gần nhất thay vì server gốc, giảm round-trip time. Với người dùng ở Tokyo truy cập CDN có PoP tại đó, request có thể mất 10ms so với 200ms đến server gốc tại Mỹ. CDN dùng Cache-Control header để xác định cache gì và cache bao lâu. Nội dung động cũng có thể dùng CDN với TTL ngắn hoặc edge computing (Cloudflare Workers, Lambda@Edge).',
  },
  'api-029': {
    question:
      'Service Worker cache khác với HTTP cache của trình duyệt như thế nào?',
    options: [
      'Service Worker cache nhanh hơn; HTTP cache lâu bền hơn',
      'Service Worker cache được kiểm soát bằng code (chiến lược cache, hỗ trợ offline, phiên bản cache); HTTP cache được kiểm soát bởi server header và minh bạch với JavaScript',
      'Chúng là cùng một cache với tên khác nhau',
      'HTTP cache chỉ lưu HTML; Service Worker cache chỉ lưu JS và CSS',
    ],
    explanation:
      'HTTP cache của trình duyệt là minh bạch — được kiểm soát bởi Cache-Control, ETag, và Expires header; JavaScript không thể trực tiếp đọc hoặc ghi vào nó. Service Worker cache (Cache API) cho toàn quyền kiểm soát bằng code: bạn quyết định cache gì, khi nào cache, giữ bao lâu, và dùng chiến lược nào (cache-first, network-first, stale-while-revalidate). Service worker cho phép hoạt động offline, invalidation cache tùy chỉnh, và background sync. Workbox trừu tượng hóa các chiến lược cache phổ biến. Service worker chạy trên thread riêng và intercept mọi fetch trong scope đã đăng ký.',
  },

  // ─── Authentication ───────────────────────────────────────────────────────
  'api-030': {
    question: 'Ba phần của JWT (JSON Web Token) là gì?',
    options: [
      'Username, password, và signature',
      'Header, payload, và signature — mỗi phần được Base64URL-encoded và phân tách bằng dấu chấm',
      'Algorithm, claims, và timestamp',
      'Public key, private key, và certificate',
    ],
    explanation:
      'JWT gồm ba phần được phân tách bằng dấu chấm, mã hóa Base64URL: 1) Header — chứa kiểu token ("JWT") và thuật toán ký (ví dụ HS256, RS256). 2) Payload — chứa các claim: registered (iss, sub, exp, iat), public, và private. 3) Signature — kết quả của việc ký Header.Payload bằng secret/private key. Signature xác minh token chưa bị giả mạo. Lưu ý: payload được ENCODE, không phải encrypt — bất kỳ ai cũng có thể decode và đọc claim. Không bao giờ lưu dữ liệu nhạy cảm (mật khẩu, thẻ tín dụng) trong payload JWT.',
  },
  'api-031': {
    question:
      'JWT nên được lưu ở đâu trong trình duyệt, và các đánh đổi bảo mật là gì?',
    options: [
      'Luôn dùng localStorage — nó lưu trữ qua các session và là lựa chọn an toàn nhất',
      'Luôn dùng memory (biến JS) — nó an toàn nhất vì JS không thể truy cập',
      'HttpOnly cookies an toàn nhất (JavaScript không truy cập được, bảo vệ khỏi XSS); localStorage dễ bị XSS; memory an toàn nhưng mất khi refresh',
      'sessionStorage luôn là lựa chọn tốt nhất cho JWT',
    ],
    explanation:
      'Đánh đổi lưu trữ token: localStorage/sessionStorage — JavaScript truy cập được, nên một lỗ hổng XSS duy nhất sẽ lộ token. HttpOnly cookies — JavaScript không truy cập được, loại bỏ rủi ro XSS. Tuy nhiên, cookies tự động gửi kèm request, dễ bị CSRF (giảm thiểu bằng SameSite=Strict/Lax hoặc CSRF token). Memory (biến JS) — an toàn nhất khỏi XSS, nhưng token mất khi refresh trang, yêu cầu xác thực lại hoặc silent refresh qua HttpOnly refresh token cookie. Đồng thuận ngành cho ứng dụng bảo mật cao là: access token trong memory + refresh token trong HttpOnly, Secure, SameSite=Strict cookie.',
  },
  'api-032': {
    question:
      'OAuth 2.0 PKCE flow là gì và tại sao nó bắt buộc cho Single Page Application?',
    options: [
      'PKCE là flow phía server; SPA nên dùng Implicit flow thay thế',
      'PKCE (Proof Key for Code Exchange) thay thế client secret bằng cặp code verifier/challenge, cho phép Authorization Code flow an toàn cho public client không thể giữ bí mật',
      'PKCE thêm xác thực hai yếu tố vào bất kỳ OAuth flow nào',
      'PKCE là extension đã deprecated, được thay thế bằng JWT token trong OAuth 2.1',
    ],
    explanation:
      'OAuth 2.0 Implicit flow (trả token trực tiếp trong URL fragment) đã deprecated vì token có thể bị lộ trong lịch sử trình duyệt và cho bên thứ ba. SPA và ứng dụng di động là "public client" — chúng không thể lưu trữ an toàn client secret. PKCE giải quyết: 1) Tạo code_verifier ngẫu nhiên. 2) Hash nó để được code_challenge (SHA-256). 3) Gửi code_challenge trong authorization request. 4) Sau khi nhận auth code, đổi lấy token bằng cách gửi code_verifier gốc. Auth server xác minh hash — chỉ client bắt đầu flow mới có thể hoàn tất, ngăn tấn công chặn authorization code. OAuth 2.1 bắt buộc PKCE.',
  },
  'api-033': {
    question: 'Mục đích của refresh token trong OAuth 2.0 là gì?',
    options: [
      'Mã hóa access token để truyền tải an toàn',
      'Lấy access token mới khi token hiện tại hết hạn, mà không yêu cầu người dùng xác thực lại',
      'Xác minh danh tính người dùng trên mỗi API request',
      'Làm mới session storage của trình duyệt',
    ],
    explanation:
      'Access token có thời hạn ngắn (phút đến giờ) để giới hạn thiệt hại khi bị đánh cắp. Refresh token có thời hạn dài và cho phép lấy access token mới một cách im lặng. Flow: khi access token hết hạn (response 401), gửi refresh token đến token endpoint của authorization server để nhận cặp access/refresh token mới. Refresh token nên lưu trong HttpOnly cookie (JavaScript không truy cập được). Nếu refresh token bị lộ, nó có thể bị thu hồi phía server. Refresh token rotation (mỗi lần sử dụng tạo refresh token mới, cái cũ bị vô hiệu) ngăn tấn công tái sử dụng token.',
  },

  // ─── API Design Patterns ──────────────────────────────────────────────────
  'api-034': {
    question:
      'Lợi thế chính của phân trang dựa trên cursor so với phân trang dựa trên offset là gì?',
    options: [
      'Phân trang cursor đơn giản hơn để triển khai phía client',
      'Phân trang cursor ổn định — xử lý đúng hàng được chèn/xóa và mở rộng tốt hơn cho tập dữ liệu lớn',
      'Phân trang cursor hoạt động với bất kỳ cơ sở dữ liệu nào, phân trang offset yêu cầu SQL',
      'Phân trang cursor tải tất cả dữ liệu cùng lúc; offset tải theo trang',
    ],
    explanation:
      'Phân trang offset (LIMIT/OFFSET hoặc ?page=2&size=10) có hai vấn đề: 1) Trượt — nếu hàng được chèn hoặc xóa giữa các lần tải trang, item có thể bị trùng lặp hoặc bị bỏ sót. 2) Hiệu năng — giá trị offset cao yêu cầu cơ sở dữ liệu quét và bỏ hàng (OFFSET 10000 quét 10.010 hàng). Phân trang cursor dùng định danh duy nhất, được sắp xếp (cursor) để đánh dấu item cuối cùng đã thấy: GET /items?after=<cursor>. Điều này ổn định (chèn/xóa không ảnh hưởng vị trí cursor) và hiệu quả (tra cứu WHERE id > cursor). Đánh đổi: không truy cập ngẫu nhiên trang tùy ý — chỉ điều hướng trang trước/sau.',
  },
  'api-035': {
    question: 'Cách tiếp cận nào được khuyến nghị để versioning REST API?',
    options: [
      'Versioning dựa trên ngày trong URL: /2024-01-01/users',
      'URL path versioning (/v1/users) hoặc Accept header versioning (Accept: application/vnd.api.v1+json)',
      'Versioning qua query parameter: /users?v=1',
      'API không nên bao giờ được versioning — luôn duy trì backward compatibility',
    ],
    explanation:
      'Các chiến lược versioning API phổ biến: 1) URL path (/v1/users) — dễ thấy nhất và có thể cache, dễ test trong trình duyệt. Nhược: URL "xấu", nhiều cây URL cần bảo trì. 2) Header versioning (Accept: application/vnd.example.v1+json) — URL sạch hơn, "đúng" theo REST. Nhược: khó test hơn nếu không có công cụ. 3) Query parameter (/users?version=1) — đơn giản nhưng có thể xung đột với parameter khác. URL path versioning được áp dụng rộng rãi nhất trong thực tế (GitHub, Stripe, Twilio). Dù chọn cách nào, deprecate version cũ nhẹ nhàng với Sunset và Deprecation response header.',
  },

  // ─── Rate Limiting ────────────────────────────────────────────────────────
  'api-036': {
    question:
      'Một API trả về HTTP 429 với header X-RateLimit-Remaining: 0 và Retry-After: 30. Client nên làm gì?',
    options: [
      'Thử lại ngay lập tức với endpoint khác',
      'Chuyển sang kết nối WebSocket để vượt qua rate limiting',
      'Xếp hàng request và thử lại sau ít nhất 30 giây, tuân thủ header Retry-After',
      'Bỏ qua 429 và tiếp tục gửi request — server xử lý throttling',
    ],
    explanation:
      'HTTP 429 Too Many Requests cho biết client đã vượt quá rate limit. Header Retry-After chỉ định số giây (hoặc HTTP date) cần chờ trước khi thử lại. Best practice phía client: 1) Tuân thủ Retry-After chính xác — không retry trước khi hết hạn. 2) Triển khai request queuing — đệm request và giải phóng sau khi cửa sổ reset. 3) Dùng exponential backoff cho nhiều 429 liên tiếp. 4) Giám sát header X-RateLimit-Limit và X-RateLimit-Remaining để chủ động giảm tốc trước khi chạm limit. Bỏ qua 429 có thể dẫn đến bị ban IP hoặc đình chỉ tài khoản.',
  },
  'api-037': {
    question:
      'Triển khai một rate limiter phía client cho phép tối đa N request mỗi giây, xếp hàng các request vượt quá.',
    explanation:
      'Rate limiter theo dõi request trong cửa sổ 1 giây trượt. Khi số đếm cửa sổ đạt tối đa, nó trì hoãn xử lý cho đến khi cửa sổ reset. Request được xếp hàng và xử lý theo thứ tự (FIFO). Trong production, cũng nên xem xét: thuật toán token bucket (mượt hơn fixed window), rate limit theo từng endpoint, và kết hợp với response 429 từ server. Các thư viện như bottleneck hoặc p-throttle cung cấp implementation đã được kiểm chứng thực tế.',
  },

  // ─── File Upload ──────────────────────────────────────────────────────────
  'api-038': {
    question:
      'Khi upload file với FormData và fetch, tại sao bạn KHÔNG nên tự đặt Content-Type: multipart/form-data?',
    options: [
      'Trình duyệt luôn dùng application/json cho FormData',
      'Trình duyệt phải tự đặt header Content-Type bao gồm parameter boundary; đặt thủ công sẽ thiếu boundary và làm hỏng parsing',
      'fetch không hỗ trợ kiểu content multipart/form-data',
      'Đặt Content-Type thủ công sẽ gây CORS preflight',
    ],
    explanation:
      'multipart/form-data yêu cầu parameter boundary trong header Content-Type: Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW. Boundary là chuỗi duy nhất phân tách các phần khác nhau của multipart body. Trình duyệt tạo boundary này khi tạo FormData body, và chỉ trình duyệt biết nó là gì. Nếu bạn tự đặt Content-Type: multipart/form-data mà không có boundary, server không thể parse request body. Chỉ cần bỏ qua Content-Type khi dùng FormData với fetch — trình duyệt đặt nó đúng tự động.',
  },
  'api-039': {
    question:
      'Presigned URL cho file upload là gì và nó giải quyết vấn đề gì?',
    options: [
      'URL mà trình duyệt pre-fetch trong thời gian rảnh để tăng tốc điều hướng',
      'URL có thời hạn, được ký cho phép upload trực tiếp từ client lên storage mà không cần đi qua API server, giảm tải và độ trễ server',
      'URL ký file bằng certificate để xác minh tính toàn vẹn',
      'URL nén file trước khi upload',
    ],
    explanation:
      'Không có presigned URL, file upload đi: Client -> API Server -> Cloud Storage (S3, GCS). Điều này lãng phí — API server xử lý dữ liệu file lớn mà nó chỉ chuyển tiếp. Presigned URL giải quyết: 1) Client yêu cầu quyền upload từ API server. 2) API server tạo URL có chữ ký ngắn hạn (ví dụ 15 phút) dùng credentials của cloud provider. 3) Client upload TRỰC TIẾP lên S3/GCS bằng presigned URL — bỏ qua API server hoàn toàn. Lợi ích: giảm băng thông và bộ nhớ API server, cho phép multipart upload song song lên cloud storage, và mở rộng cho file rất lớn mà không ảnh hưởng hiệu năng API server.',
  },
  'api-040': {
    question:
      'Triển khai hàm chunked file upload chia file thành các chunk và upload tuần tự với theo dõi tiến trình.',
    explanation:
      'File.slice() tạo Blob cho mỗi chunk mà không copy toàn bộ file vào bộ nhớ. Server nhận mỗi chunk với index và tổng số, ghép lại khi tất cả chunk được nhận. Cải tiến cho production: upload chunk song song (Promise.all với giới hạn concurrency), retry chunk thất bại mà không khởi động lại, upload có thể tiếp tục bằng cách theo dõi chunk nào đã thành công (lưu trong localStorage), và dùng Fetch API với ReadableStream để theo dõi tiến trình streaming thực.',
  },

  // ─── Server-Sent Events ───────────────────────────────────────────────────
  'api-041': {
    question:
      'Triển khai SSE client sử dụng EventSource API với reconnection và xử lý các loại event khác nhau.',
    explanation:
      'EventSource tự động xử lý reconnection — khi kết nối mất, trình duyệt chờ retry mili giây (server có thể đặt trong stream) và reconnect, gửi header Last-Event-ID để server có thể tiếp tục từ nơi dừng lại. Named event (event: notification trong stream) được xử lý bằng addEventListener, không phải onmessage. Khác với WebSocket, EventSource dựa trên HTTP và hoạt động với CDN và proxy infrastructure chuẩn. withCredentials: true bao gồm cookies trong SSE request.',
  },
  'api-042': {
    question:
      'Kết nối EventSource (SSE) tự động reconnect khi mất kết nối, không giống kết nối WebSocket.',
    explanation:
      'EventSource API có tự động reconnection được tích hợp trong implementation trình duyệt. Khi kết nối mất, trình duyệt tự động thử lại sau một khoảng trễ (mặc định ~3 giây, có thể cấu hình qua trường retry: trong event stream). Khi reconnect, nó gửi header Last-Event-ID với id của event cuối cùng nhận được, cho phép server tiếp tục delivery. WebSocket không có reconnection tích hợp — bạn phải tự triển khai (như pattern ReconnectingWebSocket). Đây là một lý do SSE đơn giản hơn cho streaming một chiều server-to-client.',
  },

  // ─── JSON ─────────────────────────────────────────────────────────────────
  'api-043': {
    question: 'Đoạn code này xuất ra gì?',
    explanation:
      'JSON.stringify() âm thầm bỏ: thuộc tính có giá trị undefined (age), giá trị function (greet). Nó chuyển Infinity và NaN thành null (vì JSON không có khái niệm về những giá trị này). null LÀ JSON hợp lệ và được giữ nguyên là null. undefined ở cấp cao nhất (không trong object) sẽ tạo ra chuỗi "undefined". Đối tượng Date được serialize thành chuỗi ISO. Để xử lý các trường hợp đặc biệt này, dùng parameter replacer hoặc thư viện như superjson mở rộng JSON để xử lý nhiều kiểu hơn.',
    answer: '{"name":"Alice","score":null,"nested":{"value":null}}',
  },
  'api-044': {
    question:
      'NDJSON (Newline-Delimited JSON) là gì và khi nào bạn sẽ sử dụng nó?',
    options: [
      'Một định dạng JSON nén nhỏ hơn JSON chuẩn',
      'Một định dạng streaming trong đó mỗi dòng là một giá trị JSON hợp lệ, cho phép xử lý tuần tự tập dữ liệu lớn mà không cần tải toàn bộ response',
      'Một định dạng validation JSON schema',
      'Một định dạng JSON được thiết kế riêng cho truy vấn cơ sở dữ liệu lồng nhau',
    ],
    explanation:
      'NDJSON (còn gọi là JSONL hoặc JSON Lines) là chuỗi các giá trị JSON hợp lệ, mỗi dòng một giá trị, phân tách bằng newline: {"id":1,"name":"Alice"}\\n{"id":2,"name":"Bob"}\\n. Trường hợp sử dụng: 1) Streaming API response — xử lý record khi chúng đến mà không cần chờ toàn bộ response body. 2) Export/import dữ liệu lớn — có thể xử lý từng dòng với bộ nhớ tối thiểu. 3) Log file — mỗi event là một JSON record độc lập. Trong JavaScript, bạn có thể đọc stream NDJSON bằng Fetch API với response.body (ReadableStream) và TextDecoder, tách theo newline.',
  },

  // ─── Cookies ──────────────────────────────────────────────────────────────
  'api-045': {
    question: 'Thuộc tính cookie SameSite=Lax làm gì?',
    options: [
      'Cho phép cookie được gửi trên mọi cross-site request',
      'Chặn cookie không gửi với bất kỳ cross-site request nào',
      'Gửi cookie trên top-level navigation và phương thức safe (GET) từ cross-site, nhưng không gửi trên cross-site subrequest (images, iframes, AJAX)',
      'Mã hóa giá trị cookie bằng TLS',
    ],
    explanation:
      'SameSite kiểm soát khi nào cookie được gửi trong cross-site request. SameSite=Strict: chỉ same-site request (cookie không bao giờ gửi khi điều hướng từ trang bên ngoài). SameSite=Lax (mặc định trình duyệt từ Chrome 80): gửi trên top-level navigation GET từ trang khác (click link), nhưng KHÔNG gửi trên cross-origin subrequest (iframe, AJAX, image, POST form). SameSite=None: gửi trên mọi cross-site request, yêu cầu thuộc tính Secure. Lax là lựa chọn hợp lý cho hầu hết ứng dụng — ngăn tấn công CSRF từ cross-origin form POST đồng thời không phá vỡ workflow "link đến trang của chúng tôi".',
  },
  'api-046': {
    question: 'Thuộc tính cookie HttpOnly làm gì?',
    options: [
      'Làm cookie chỉ hoạt động qua kết nối HTTPS',
      'Giới hạn cookie chỉ cho HTTP request — JavaScript không thể truy cập qua document.cookie',
      'Cho phép cookie chỉ được truy cập từ server',
      'Giới hạn cookie cho protocol HTTP/1.1',
    ],
    explanation:
      'HttpOnly cookies không thể truy cập bằng API document.cookie và Cookie Store API của JavaScript. Chúng chỉ có thể gửi trong HTTP request và đặt qua Set-Cookie response header. Điều này bảo vệ session cookie và token khỏi tấn công XSS — ngay cả khi kẻ tấn công inject JavaScript độc hại, chúng không thể đánh cắp HttpOnly cookie. Trình duyệt tự động đính kèm chúng vào request đến domain phù hợp. Kết hợp với Secure (chỉ HTTPS) và SameSite để bảo vệ theo chiều sâu. Lưu ý: HttpOnly KHÔNG ngăn CSRF — điều đó yêu cầu SameSite hoặc CSRF token.',
  },
  'api-047': {
    question:
      'Tác động của việc deprecate third-party cookie đối với frontend authentication là gì?',
    options: [
      'Không ảnh hưởng — third-party cookie không được dùng trong authentication',
      'Nó phá vỡ các luồng authentication nhúng cross-origin (iframe, widget auth, cross-domain SSO) dựa vào third-party cookie để theo dõi session',
      'Nó chỉ ảnh hưởng quảng cáo; authentication cookie được miễn trừ',
      'Trình duyệt đang chặn tất cả cookie, không chỉ third-party',
    ],
    explanation:
      'Third-party cookie (được đặt bởi domain khác với domain trang) đang bị Chrome deprecate và bị Safari/Firefox chặn. Điều này ảnh hưởng: 1) Cross-domain SSO (Single Sign-On) — ví dụ login.company.com đặt cookie được đọc bởi app.company.com. 2) Widget authentication nhúng trong iframe. 3) Cross-origin API call với credentials từ frontend khác origin. Giải pháp: dùng Storage Access API, CHIPS (Partitioned cookie với SameSite=None; Partitioned), Related Website Sets (Chrome), hoặc chuyển sang kiến trúc first-party cookie với subdomain chung hoặc token-based auth.',
  },

  // ─── DNS ──────────────────────────────────────────────────────────────────
  'api-048': {
    question:
      '<link rel="dns-prefetch"> làm gì và khi nào nên sử dụng?',
    options: [
      'Nó tải toàn bộ trang HTML tại URL được liên kết ở nền',
      'Nó chỉ thị trình duyệt phân giải DNS cho hostname trước, giảm độ trễ cho các kết nối tiếp theo đến host đó',
      'Nó prefetch file CSS tại URL chỉ định',
      'Nó preload cấu hình DNS cho trang hiện tại',
    ],
    explanation:
      'Phân giải DNS cho hostname mới mất 20-120ms. dns-prefetch cho trình duyệt biết phân giải địa chỉ IP của hostname trước, để khi resource từ domain đó thực sự cần, tra cứu DNS đã xong. Ví dụ: <link rel="dns-prefetch" href="//fonts.googleapis.com">. Dùng cho: script bên thứ ba, analytics, hostname CDN, domain API. Gợi ý mạnh hơn là preconnect (<link rel="preconnect">), thiết lập kết nối TCP VÀ TLS handshake trước. Dùng preconnect cho các origin bên thứ ba quan trọng nhất (tối đa 1-3); dns-prefetch cho phần còn lại.',
  },
  'api-049': {
    question:
      'CDN sử dụng DNS như thế nào để định tuyến request đến edge node gần nhất?',
    options: [
      'CDN sửa HTML để bao gồm IP server gần nhất trực tiếp',
      'CDN dùng Anycast routing hoặc GeoDNS — DNS server trả về địa chỉ IP khác nhau dựa trên vị trí địa lý hoặc proximity mạng của người yêu cầu',
      'CDN dùng HTTP redirect đến server gần nhất sau request đầu tiên',
      'CDN nhúng tọa độ GPS trong DNS TXT record',
    ],
    explanation:
      'CDN định tuyến người dùng đến edge node gần bằng hai kỹ thuật chính: 1) GeoDNS (hoặc GSLB) — authoritative DNS server kiểm tra IP của resolver và trả về IP của PoP (Point of Presence) gần nhất. 2) Anycast — cùng địa chỉ IP được công bố từ nhiều vị trí qua BGP; router mạng tự động định tuyến request đến điểm công bố gần nhất. Cloudflare dùng Anycast; AWS CloudFront dùng GeoDNS. Giá trị TTL cho CDN DNS thường thấp (60-300 giây) để cho phép failover nhanh khi edge node gặp sự cố.',
  },

  // ─── TLS/HTTPS ────────────────────────────────────────────────────────────
  'api-050': {
    question:
      'HSTS (HTTP Strict Transport Security) là gì và nó giải quyết vấn đề gì?',
    options: [
      'Header kích hoạt HTTPS trên server — tương tự cài SSL certificate',
      'Response header chỉ thị trình duyệt chỉ truy cập trang qua HTTPS trong thời gian chỉ định, ngăn tấn công SSL stripping',
      'Directive CSP chặn tất cả HTTP resource',
      'Extension TLS nén dữ liệu certificate',
    ],
    explanation:
      'HSTS (Strict-Transport-Security: max-age=31536000; includeSubDomains; preload) giải quyết vấn đề "lần truy cập đầu": trước HSTS, lần truy cập đầu của người dùng có thể qua HTTP, dễ bị SSL stripping (MITM hạ cấp HTTPS xuống HTTP). HSTS cho trình duyệt biết: "luôn dùng HTTPS cho domain này trong max-age giây." Sau lần truy cập HTTPS đầu tiên, trình duyệt từ chối kết nối qua HTTP — tự động nâng cấp lên HTTPS nội bộ. Directive preload đăng ký domain vào HSTS Preload List — trình duyệt được ship với danh sách này tích hợp, bảo vệ ngay cả lần truy cập đầu.',
  },
  'api-051': {
    question:
      'TLS certificate pinning là gì và rủi ro của nó trong ứng dụng web?',
    options: [
      'Lưu certificate trong localStorage để tránh tải lại',
      'Hardcode hash public key của certificate, từ chối kết nối nếu certificate không khớp — bảo vệ khỏi CA giả mạo nhưng có rủi ro gián đoạn khi certificate được gia hạn',
      'Dùng phiên bản TLS cố định (ví dụ luôn TLS 1.3) bất kể server hỗ trợ',
      'Ghim port HTTPS để luôn dùng port 443',
    ],
    explanation:
      'Certificate pinning giảm thiểu tấn công khi Certificate Authority bị xâm phạm hoặc giả mạo cấp certificate gian cho domain của bạn. Bằng cách pin hash public key mong đợi, client từ chối certificate hợp lệ nhưng sai. Ứng dụng di động native thường dùng nó. Trong ứng dụng web, nó được triển khai qua header HPKP (HTTP Public Key Pinning) đã deprecated — bị loại khỏi trình duyệt do rủi ro nghiêm trọng: nếu bạn pin certificate và nó hết hạn mà không có pin dự phòng, TẤT CẢ người dùng bị khóa. Giải pháp thay thế được khuyến nghị cho web app là CAA DNS record (giới hạn CA nào có thể cấp cho domain) và giám sát Certificate Transparency log.',
  },

  // ─── Error Handling Deep Dive ─────────────────────────────────────────────
  'api-052': {
    question:
      'Code xử lý lỗi này có bug — lỗi mạng bị nuốt âm thầm. Tìm và sửa:',
    explanation:
      'Phiên bản đã sửa:\n\nasync function getUser(id) {\n  try {\n    const response = await fetch(`/api/users/${id}`)\n    if (!response.ok) {\n      throw new Error(`HTTP ${response.status}: ${response.statusText}`)\n    }\n    return await response.json()\n  } catch (error) {\n    if (error instanceof TypeError) {\n      console.error("Network error:", error)\n      throw new Error("Network unavailable")\n    }\n    console.error("API error:", error)\n    throw error // Ném lại để caller xử lý\n  }\n}\n\nNguyên tắc chính: (1) Luôn kiểm tra response.ok. (2) Phân biệt lỗi mạng (TypeError) với lỗi HTTP. (3) Ném lại hoặc chuyển đổi lỗi — trả null âm thầm che giấu lỗi khỏi caller.',
    answer:
      'Bug: Lỗi HTTP (4xx, 5xx) không được kiểm tra — response.json() thành công ngay cả với 404/500, trả về error body dưới dạng data. Ngoài ra, tất cả lỗi trả null mà không log, khiến debug không thể. Sửa: kiểm tra response.ok trước khi gọi response.json(), throw lỗi cụ thể cho các chế độ thất bại khác nhau, và log lỗi.',
  },

  // ─── HTTP Headers — Advanced ──────────────────────────────────────────────
  'api-053': {
    question:
      'Authorization header Bearer scheme là gì và hoạt động như thế nào?',
    options: [
      'Nó mã hóa request bằng bearer certificate',
      'Nó đính kèm token (thường là JWT hoặc opaque token) trong Authorization header mà server xác thực để nhận diện client',
      'Nó cung cấp HTTP Basic authentication với username và password',
      'Nó lưu session ID mà server dùng để tra cứu cơ sở dữ liệu session',
    ],
    explanation:
      'Bearer scheme (RFC 6750) được dùng trong OAuth 2.0: Authorization: Bearer <token>. Token là "bearer" — sở hữu là đủ để authorization, không cần xác minh bổ sung. Server xác thực token trên mỗi request: với JWT, nó xác minh signature và expiry cục bộ (stateless). Với opaque token, nó truy vấn authorization server (token introspection). HTTPS là bắt buộc — token trong Authorization header hiển thị dạng plaintext nếu gửi qua HTTP. Không bao giờ log Authorization header. Tên scheme không phân biệt hoa thường: "Bearer", "bearer", và "BEARER" đều hợp lệ.',
  },
  'api-054': {
    question:
      'HTTP conditional request với If-None-Match khác với If-Modified-Since như thế nào?',
    options: [
      'Chúng hoàn toàn giống nhau — cả hai kiểm tra resource đã thay đổi chưa',
      'If-None-Match dùng ETag (định danh nội dung chính xác); If-Modified-Since dùng timestamp. ETag đáng tin cậy hơn vì timestamp có vấn đề độ phân giải 1 giây và lệch đồng hồ',
      'If-None-Match chỉ hoạt động cho GET; If-Modified-Since hoạt động cho mọi method',
      'If-None-Match dùng cho cache validation; If-Modified-Since dùng cho range request',
    ],
    explanation:
      'Cả hai cho phép conditional request trả về 304 Not Modified nếu resource chưa thay đổi: If-None-Match: "abc123" — server so sánh ETag. If-Modified-Since: Wed, 15 Jan 2025 12:00:00 GMT — server so sánh timestamp Last-Modified. ETag được ưu tiên vì: 1) Last-Modified có độ chi tiết 1 giây — thay đổi dưới giây không được phát hiện. 2) Vấn đề đồng bộ đồng hồ giữa các server. 3) Một số resource thay đổi "thời gian sửa đổi" mà không thay đổi nội dung. 4) ETag có thể encode số phiên bản, không chỉ thời gian. Khi cả hai có mặt, ETag được ưu tiên theo đặc tả HTTP.',
  },

  // ─── Fetch API — Advanced ─────────────────────────────────────────────────
  'api-055': {
    question:
      'Tùy chọn fetch cache là gì và cache: "no-store" khác cache: "reload" như thế nào?',
    options: [
      'Chúng giống nhau — cả hai bỏ qua cache hoàn toàn',
      'no-store: không bao giờ cache response; reload: bỏ qua cache cho request này nhưng cache response mới cho các request tương lai',
      'no-store: luôn gửi network request; reload: dùng cached response nếu có',
      'Cả hai là tùy chọn không chuẩn, không được hỗ trợ trong trình duyệt hiện đại',
    ],
    explanation:
      'Tùy chọn fetch cache kiểm soát tương tác HTTP cache trình duyệt: "default" — ngữ nghĩa cache chuẩn trình duyệt. "no-store" — bỏ qua cache khi request VÀ không lưu response vào cache. "reload" — bỏ qua cache khi request (buộc network request), nhưng CÓ lưu response mới vào cache cho request tương lai. "no-cache" — luôn revalidate với server trước khi dùng cached response. "force-cache" — dùng cached response bất kể độ cũ. "only-if-cached" — chỉ dùng cache, thất bại nếu không có cache. no-store phù hợp cho dữ liệu nhạy cảm (ngân hàng, y tế) không nên được cache.',
  },
  'api-056': {
    question: 'Điều gì xảy ra và gì được log?',
    explanation:
      'Cả hai đều log "done" với ba response object, nhưng parallel() nhanh hơn — nó phát tất cả ba fetch request đồng thời. sequential() phát mỗi fetch chỉ sau khi cái trước hoàn tất, mất ~3 lần lâu hơn. Promise.all bắt đầu cả ba lệnh fetch đồng thời — chúng chạy song song. Với 100ms mỗi request, parallel() mất ~100ms tổng cộng. sequential() await mỗi cái trước khi bắt đầu cái tiếp — mất ~300ms. Cả hai cho cùng kết quả. Dùng Promise.all khi các request độc lập. Nếu bất kỳ request nào thất bại, Promise.all reject ngay (fail-fast). Dùng Promise.allSettled nếu bạn muốn tất cả kết quả bất kể lỗi riêng lẻ.',
    answer:
      'Cả hai log "done" với ba response object, nhưng parallel() nhanh hơn — nó phát tất cả ba fetch request đồng thời. sequential() phát mỗi fetch chỉ sau khi cái trước hoàn tất, mất ~3 lần lâu hơn.',
  },

  // ─── REST API — Additional ────────────────────────────────────────────────
  'api-057': {
    question:
      'Thiết kế lớp API phía client cho ứng dụng React lớn xử lý: refresh token xác thực, khử trùng lặp request, cập nhật optimistic, và chuẩn hóa lỗi.',
    explanation:
      'Quyết định kiến trúc chính: (1) Logic refresh token nằm trong lớp interceptor — không component nào cần biết về nó. (2) Khử trùng lặp ngăn các request giống hệt chạy song song (ví dụ ba component mount đồng thời đều yêu cầu profile người dùng). (3) React Query xử lý cache cấp component; lớp API là transport. (4) Optimistic update yêu cầu logic rollback cẩn thận — luôn lưu trạng thái trước mutation. (5) Lỗi được chuẩn hóa cho phép các UI component lỗi generic hiển thị thông báo có ý nghĩa mà không cần biết chi tiết API.',
    answer: `Kiến trúc lớp API:

1. HTTP Client (lớp cơ sở)
   - Axios hoặc fetch wrapper với interceptor
   - Request interceptor: đính kèm Authorization: Bearer <token>
   - Response interceptor: bắt 401, kích hoạt refresh token, retry request gốc
   - Hàng đợi refresh token: nếu refresh đang chạy, xếp hàng tất cả 401; resolve tất cả khi refresh hoàn tất

2. Khử trùng lặp Request
   - Cache request đang chạy: Map<string, Promise>
   - Key = method + URL + hash sorted params
   - Khi có request trùng, trả cùng promise thay vì gửi fetch mới
   - Xóa khỏi cache khi request settle

3. Tích hợp React Query / SWR
   - Dùng làm lớp fetcher — cung cấp caching, background refetch, khử trùng lặp ở cấp hook
   - Định nghĩa query key là mảng serializable cho cache invalidation

4. Optimistic Update
   - Khi mutation, cập nhật local cache ngay (queryClient.setQueryData)
   - Lưu rollback snapshot
   - Khi lỗi, revert snapshot và hiện error toast
   - Khi thành công, invalidate các query liên quan cho eventual consistency

5. Chuẩn hóa Lỗi
   - Chuyển đổi tất cả API error thành dạng chuẩn: { code, message, field?, status }
   - Lỗi mạng -> code: "NETWORK_ERROR"
   - 4xx -> code từ response body hoặc HTTP status
   - 5xx -> code: "SERVER_ERROR"
   - Timeout -> code: "TIMEOUT"

6. Chính sách Retry
   - Tự động retry khi lỗi mạng và 5xx (tối đa 3 lần, exponential backoff)
   - KHÔNG retry: 4xx (trừ 429 với Retry-After), mutation (POST/DELETE)`,
  },
  'api-058': {
    question: 'Sự khác biệt giữa 401 Unauthorized và 403 Forbidden là gì?',
    options: [
      'Chúng có thể thay thế nhau — cả hai nghĩa là người dùng không thể truy cập resource',
      '401 nghĩa là request thiếu thông tin xác thực hợp lệ (chưa đăng nhập); 403 nghĩa là xác thực thành công nhưng người dùng không có quyền với resource cụ thể này',
      '401 dùng cho API endpoint; 403 dùng cho route trang web',
      '401 là lỗi client; 403 là lỗi cấu hình server',
    ],
    explanation:
      '401 Unauthorized (tên gây hiểu nhầm) nghĩa là: "Tôi không biết bạn là ai — hãy xác thực." Server gửi header WWW-Authenticate. Client nên cung cấp credentials (đăng nhập, refresh token). 403 Forbidden nghĩa là: "Tôi biết bạn là ai, nhưng bạn không thể làm điều này." Xác thực không phải vấn đề — authorization mới là. Ví dụ: người dùng đã đăng nhập cố truy cập dữ liệu riêng của người dùng khác nhận 403. Trong SPA: 401 -> chuyển hướng đến trang đăng nhập; 403 -> hiển thị "Truy cập bị từ chối" trong ứng dụng.',
  },
  'api-059': {
    question:
      'Mã HTTP status nào cho biết server không tìm thấy resource được yêu cầu?',
    options: ['400 Bad Request', '403 Forbidden', '404 Not Found', '410 Gone'],
    explanation:
      '404 Not Found là mã status nổi tiếng nhất. Server không tìm thấy biểu diễn hiện tại cho URI được yêu cầu. Khác biệt với 410 Gone: 404 không cho biết sự vắng mặt là tạm thời hay vĩnh viễn (nó có thể tồn tại trong tương lai). 410 Gone nghĩa là resource cố tình không còn tồn tại và sẽ không quay lại — hữu ích cho SEO (cho crawler biết xóa URL khỏi index). Đối với API, dùng 404 khi ID resource cụ thể không tồn tại (GET /users/999). Dùng 400 cho format request không hợp lệ (thiếu trường bắt buộc). Dùng 204 No Content cho collection rỗng (không phải 404).',
  },
  'api-060': {
    question: 'Mục đích của phương thức HTTP OPTIONS là gì?',
    options: [
      'Cập nhật các tùy chọn cấu hình server',
      'Mô tả các tùy chọn giao tiếp có sẵn cho resource mục tiêu, chủ yếu dùng trong CORS preflight request',
      'Lấy header của response mà không có body (như GET không có body)',
      'Đăng ký nhận server-sent event stream',
    ],
    explanation:
      'OPTIONS request mô tả các method được phép và khả năng cho một URL. Server trả lời với Allow: GET, POST, OPTIONS và các CORS-specific header. Hai cách dùng chính: 1) CORS preflight — trình duyệt tự động gửi OPTIONS trước non-simple cross-origin request để xác minh server cho phép request thực. 2) Service discovery — client có thể hỏi method nào được phép trên resource mà không gửi request thực. HEAD (không phải OPTIONS) lấy response header mà không có body. CORS preflight response nên được cache với Access-Control-Max-Age để giảm OPTIONS request lặp lại.',
  },
  'api-061': {
    question:
      'HTTP header compression trong HTTP/2 (HPACK) là gì và tại sao nó quan trọng?',
    options: [
      'HPACK nén response body bằng gzip, thay thế Content-Encoding',
      'HPACK nén HTTP/2 header bằng bảng tĩnh các header phổ biến và bảng động được cập nhật theo kết nối, giảm đáng kể overhead cho header lặp lại như Authorization',
      'HPACK là thuật toán xếp hàng request sắp xếp lại header để tăng hiệu quả',
      'HPACK mã hóa HTTP header trước khi truyền qua TLS',
    ],
    explanation:
      'HTTP/1.1 header là plain text không nén — header lặp lại như Cookie, Authorization, Accept, User-Agent được gửi nguyên văn trên mỗi request. Với API có authentication header, overhead có thể là 500-1000 byte mỗi request. HPACK (RFC 7541) trong HTTP/2 dùng hai bảng: 1) Bảng tĩnh — 61 cặp tên/giá trị header phổ biến được đánh index (ví dụ ":method: GET" = 2, ":status: 200" = 8). 2) Bảng động — header đã gửi trong kết nối, thêm theo index. Header phổ biến được gửi dưới dạng 1-3 byte index thay vì chuỗi đầy đủ. Authorization header gửi lặp lại được nén đáng kể. HTTP/3 dùng QPACK, phiên bản tối ưu cho QUIC.',
  },
  'api-062': {
    question:
      'Bạn đang xây dựng trình soạn thảo tài liệu cộng tác real-time (như Google Docs). So sánh WebSocket, SSE, và polling để đồng bộ thay đổi tài liệu giữa nhiều client. Bạn sẽ chọn cái nào và tại sao?',
    explanation:
      'Công cụ cộng tác real-time có yêu cầu cụ thể: độ trễ dưới 100ms cho đồng bộ từng ký tự, xử lý chỉnh sửa đồng thời từ nhiều người dùng, hỗ trợ offline, và giải quyết xung đột. Google Docs dùng protocol OT (Operational Transformation) tùy chỉnh qua WebSocket. Figma dùng WebSocket với CRDT tùy chỉnh. Lựa chọn infrastructure (WebSocket vs SSE) ít quan trọng hơn thuật toán giải quyết xung đột. Cho dự án mới, Yjs + WebSocket provider (y-websocket) là điểm khởi đầu được khuyến nghị.',
    answer: `Khuyến nghị: WebSocket với operational transformation hoặc CRDT.

So sánh:

Polling (setInterval + fetch):
  Ưu: Đơn giản, hoạt động mọi nơi, không cần kết nối persistent
  Nhược: Độ trễ cao (lên đến khoảng polling), request lãng phí khi không có thay đổi, mở rộng kém với nhiều client, hao pin trên di động
  Dùng khi: yêu cầu real-time rất thấp, implementation đơn giản

SSE (Server-Sent Events):
  Ưu: Đơn giản một chiều, dựa trên HTTP (proxy, CDN, HTTP/2 multiplexing), tự reconnect, hoạt động với HTTP infrastructure thông thường
  Nhược: Thay đổi từ client phải gửi qua POST/PUT riêng (hai kết nối), overhead nhỏ so với WebSocket cho trường hợp hai chiều
  Dùng khi: server push dữ liệu, client hiếm khi gửi (activity feed, thông báo, presence indicator)

WebSocket:
  Ưu: Full-duplex hai chiều, độ trễ thấp, binary framing hiệu quả, một kết nối cho gửi/nhận, thiết kế cho cập nhật tần suất cao
  Nhược: Không hoạt động tốt với một số proxy/firewall, yêu cầu sticky session hoặc pub/sub để mở rộng ngang, phải tự triển khai reconnection, infrastructure server phức tạp hơn
  Dùng khi: soạn thảo cộng tác, chat, game, bất kỳ trường hợp nào client VÀ server gửi thường xuyên

Cho soạn thảo cộng tác:
- Dùng WebSocket cho thay đổi tài liệu (hai chiều, độ trễ thấp rất quan trọng)
- Kết hợp với CRDT (Yjs, Automerge) hoặc OT để giải quyết xung đột
- Dùng lớp pub/sub (Redis, Ably) phía sau WebSocket server để mở rộng ngang
- Fallback sang SSE + REST cho presence indicator và cursor nếu infrastructure bị hạn chế`,
  },
  'api-063': {
    question:
      'Implementation GraphQL query này đang gây N+1 request. Xác định vấn đề và mô tả cách sửa:',
    explanation:
      'Giải pháp phía client là fetch tất cả dữ liệu cần thiết trong một query duy nhất sử dụng nested field:\n\nquery {\n  posts {\n    id\n    title\n    author {\n      name\n      avatar\n    }\n  }\n}\n\nĐiều này tận dụng thế mạnh của GraphQL — fetch dữ liệu liên quan trong một request. Phía server, ngay cả với một query, author resolver có thể chạy một lần mỗi post nếu không được batch. DataLoader batch và khử trùng lặp các lệnh gọi resolver trong một tick. Với GraphQL fragment, bạn có thể co-locate yêu cầu dữ liệu của mỗi component và compose chúng thành một query hiệu quả duy nhất ở cấp route.',
    answer:
      'Vấn đề N+1: PostList thực hiện 1 query cho posts, rồi PostItem thực hiện 1 user query riêng cho mỗi post. Với 20 post, tổng cộng là 21 request. Sửa: bao gồm các field author trực tiếp trong posts query dùng nested selection, hoặc dùng DataLoader phía server để batch tra cứu author.',
  },
  'api-064': {
    question:
      'Fetch API hỗ trợ request streaming — bạn có thể gửi ReadableStream làm request body để stream dữ liệu đến server.',
    explanation:
      'Từ Chrome 105+ và các trình duyệt hiện đại khác, fetch hỗ trợ upload streaming qua ReadableStream làm body. Điều này cho phép: stream file lớn mà không tải toàn bộ vào bộ nhớ, gửi dữ liệu real-time (âm thanh microphone) đến server dần dần, và triển khai request body streaming cho API xử lý video/audio. Lưu ý: điều này yêu cầu server hỗ trợ HTTP/2 hoặc HTTP/1.1 chunked transfer encoding. Hạn chế half-duplex (HTTP/1.1) hoặc hỗ trợ full-duplex (HTTP/2) ảnh hưởng đến việc bạn có thể đọc response trong khi vẫn đang ghi request hay không.',
  },
  'api-065': {
    question:
      'Đặc tả JSON:API là gì và nó giải quyết vấn đề gì?',
    options: [
      'Thuật toán nén JSON giảm kích thước API response',
      'Đặc tả chuẩn hóa để cấu trúc JSON API response, bao gồm resource object, relationship, link, và định dạng lỗi — giảm tranh luận thiết kế API',
      'Công cụ validation JSON Schema cho API contract',
      'Protocol JSON RPC để gọi hàm phía server',
    ],
    explanation:
      'JSON:API (jsonapi.org) là đặc tả cho cách API nên format JSON response. Nó định nghĩa: 1) Resource object với type, id, attributes, relationships. 2) Compound document — bao gồm resource liên quan trong một response để tránh N+1. 3) Sparse fieldset — client yêu cầu chỉ field cụ thể. 4) Quy ước pagination, filtering, sorting. 5) Error object với code, title, detail, source. Lợi ích: quy ước nhất quán giảm quyết định thiết kế API cho mỗi dự án, thư viện client (ember-data, json-api-normalizer) có thể hoạt động chung với bất kỳ endpoint tuân thủ JSON:API nào. Đánh đổi: format dài dòng hơn so với JSON thuần.',
  },
}
