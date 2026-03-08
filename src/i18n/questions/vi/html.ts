import type { QuestionTranslationMap } from '../types'

export const htmlVi: QuestionTranslationMap = {
  // ─── JUNIOR ───────────────────────────────────────────────────────────────
  'html-001': {
    question:
      'Phần tử HTML5 nào đại diện cho một phần nội dung độc lập có thể được phân phối riêng biệt (ví dụ: bài blog hoặc bài báo)?',
    explanation:
      '<article> đại diện cho một phần nội dung độc lập, có thể phân phối hoặc tái sử dụng riêng. <section> nhóm các nội dung liên quan theo chủ đề nhưng không nhất thiết phải độc lập. <main> đánh dấu nội dung chính của trang. <aside> đánh dấu nội dung liên quan gián tiếp đến nội dung xung quanh.',
    options: ['<section>', '<article>', '<main>', '<aside>'],
  },
  'html-002': {
    question: 'Khai báo DOCTYPE đúng cho tài liệu HTML5 là gì?',
    explanation:
      'HTML5 sử dụng khai báo ngắn gọn, không phân biệt hoa thường: <!DOCTYPE html>. Các phiên bản HTML trước yêu cầu chuỗi DOCTYPE dài tham chiếu đến URL DTD. Khai báo đơn giản này giúp trình duyệt hiển thị ở chế độ tiêu chuẩn (standards mode).',
    options: [
      '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 5.0//EN">',
      '<!DOCTYPE HTML5>',
      '<!DOCTYPE html>',
      '<html doctype="5">',
    ],
  },
  'html-003': {
    question:
      'Phần tử <b> và <strong> có ngữ nghĩa giống hệt nhau — cả hai chỉ làm cho chữ in đậm.',
    explanation:
      '<strong> mang ý nghĩa ngữ nghĩa nhấn mạnh tầm quan trọng (trình đọc màn hình có thể nhấn mạnh; trọng số SEO khác nhau). <b> chỉ mang tính trình bày — thu hút sự chú ý mà không ngụ ý quan trọng. Sử dụng <strong> cho văn bản thực sự quan trọng và <b> cho các điểm nhấn mang tính phong cách như từ khóa.',
  },
  'html-004': {
    question:
      'Bạn nên sử dụng loại input nào để thu thập địa chỉ email của người dùng nhằm trình duyệt tự động xác thực định dạng?',
    explanation:
      'type="email" kích hoạt xác thực tích hợp của trình duyệt, kiểm tra định dạng email hợp lệ (ví dụ: user@example.com) trước khi gửi form. Nó cũng hiển thị bàn phím tối ưu cho email trên thiết bị di động.',
    options: [
      '<input type="text">',
      '<input type="email">',
      '<input type="url">',
      '<input type="search">',
    ],
  },
  'html-005': {
    question: 'Thuộc tính nào bắt buộc phải điền trường form trước khi gửi?',
    explanation:
      'Thuộc tính boolean "required" ngăn gửi form và hiển thị lỗi gốc của trình duyệt nếu trường để trống. Nó hoạt động trên <input>, <select> và <textarea>. Nên thêm aria-required="true" để hỗ trợ đầy đủ khả năng truy cập.',
    options: ['mandatory', 'validate', 'required', 'notnull'],
  },
  'html-006': {
    question:
      'Thuộc tính alt trên phần tử <img> chỉ quan trọng đối với người dùng khiếm thị.',
    explanation:
      'Văn bản alt phục vụ nhiều mục đích: hỗ trợ truy cập cho người dùng trình đọc màn hình, hiển thị khi ảnh không tải được, tín hiệu SEO cho công cụ tìm kiếm, và văn bản tooltip trên một số trình duyệt cũ. Ảnh trang trí nên sử dụng alt="" (rỗng) để công nghệ hỗ trợ bỏ qua.',
  },
  'html-007': {
    question:
      'Phần tử nào nên bao bọc các liên kết điều hướng chính của trang web?',
    explanation:
      '<nav> là phần tử landmark xác định ngữ nghĩa cho một phần chứa các liên kết điều hướng chính. Trình đọc màn hình nhận diện nó như một landmark điều hướng, cho phép người dùng bàn phím nhảy đến hoặc bỏ qua. Không phải mọi nhóm liên kết đều cần <nav> — chỉ dùng cho điều hướng chính/phụ của trang.',
    options: ['<menu>', '<ul>', '<nav>', '<header>'],
  },
  'html-008': {
    question: 'Trình duyệt hiển thị gì cho HTML entity sau đây?',
    explanation:
      '&gt; hiển thị >, &lt; hiển thị <, và &amp; hiển thị &. HTML entity cần thiết để hiển thị các ký tự có ý nghĩa đặc biệt trong markup HTML mà không gây nhầm lẫn cho trình phân tích cú pháp.',
  },
  'html-009': {
    question:
      'Thẻ meta nào được sử dụng để thiết lập mã hóa ký tự cho tài liệu HTML?',
    explanation:
      '<meta charset="UTF-8"> là dạng rút gọn trong HTML5 để khai báo mã hóa UTF-8. Nó phải xuất hiện trong 1024 byte đầu tiên của tài liệu, lý tưởng nhất là ngay sau <head>, để trình duyệt có thể giải mã các ký tự tiếp theo một cách chính xác.',
    options: [
      '<meta http-equiv="content-type" content="text/html">',
      '<meta charset="UTF-8">',
      '<meta encoding="UTF-8">',
      '<meta lang="en">',
    ],
  },
  'html-010': {
    question: 'Mục đích của phần tử <figcaption> là gì?',
    explanation:
      '<figcaption> cung cấp chú thích có khả năng truy cập cho phần tử <figure> cha của nó. <figure> thường bao bọc nội dung độc lập như hình ảnh, biểu đồ hoặc đoạn mã, và <figcaption> gắn nhãn nội dung đó cho cả người dùng trực quan và công nghệ hỗ trợ.',
    options: [
      'Thêm tooltip cho hình ảnh',
      'Cung cấp chú thích hoặc chú giải cho phần tử <figure>',
      'Định nghĩa một hình trong công thức toán học',
      'Tạo viền trang trí xung quanh hình ảnh',
    ],
  },
  'html-011': {
    question:
      'Thêm defer vào thẻ <script> khiến script thực thi trước khi HTML được phân tích hoàn toàn.',
    explanation:
      'defer khiến script tải song song với việc phân tích HTML nhưng chỉ thực thi sau khi phân tích hoàn tất (và trước khi sự kiện DOMContentLoaded kích hoạt). Khác với async, thực thi ngay khi tải xong (giữa lúc phân tích). Script không có thuộc tính nào sẽ chặn việc phân tích hoàn toàn.',
  },
  'html-012': {
    question:
      'Bạn nên thêm thuộc tính nào vào phần tử <video> để tự động phát không có tiếng khi trang tải?',
    explanation:
      'Trình duyệt mặc định chặn autoplay có âm thanh để tránh trải nghiệm gây phiền. Thêm cả hai thuộc tính autoplay và muted đáp ứng chính sách autoplay của trình duyệt, cho phép phát tự động không tiếng. Điều này thường được dùng cho video nền/hero.',
    options: [
      'autoplay muted',
      'autoplay silent',
      'autostart noaudio',
      'play="auto" sound="off"',
    ],
  },
  'html-013': {
    question:
      'Thuộc tính HTML nào cho phép bạn lưu trữ dữ liệu tùy chỉnh trên bất kỳ phần tử HTML nào?',
    explanation:
      'Thuộc tính data-* cho phép nhúng dữ liệu tùy chỉnh vào bất kỳ phần tử HTML nào (ví dụ: data-user-id="42"). Chúng có thể truy cập qua JS bằng element.dataset.userId (chuyển đổi camelCase) và không ảnh hưởng đến hiển thị hay ngữ nghĩa. Hữu ích để truyền dữ liệu từ server sang script phía client.',
    options: ['custom-*', 'data-*', 'attr-*', 'meta-*'],
  },
  'html-014': {
    question:
      'Mẫu HTML <details> và <summary> tạo ra gì một cách tự nhiên mà không cần JavaScript?',
    explanation:
      '<details> tạo một widget tiết lộ nội dung gốc. <summary> đóng vai trò tiêu đề/nút bật tắt hiển thị. Nhấp vào summary sẽ bật/tắt thuộc tính open trên <details>, hiển thị hoặc ẩn nội dung còn lại. Không cần JavaScript — trình duyệt xử lý tương tác tự nhiên.',
    options: [
      'Một hộp thoại modal',
      'Một tooltip khi di chuột',
      'Một widget accordion/tiết lộ nội dung có thể bật tắt đóng mở',
      'Một menu dropdown',
    ],
  },
  'html-015': {
    question:
      'Loại input nào hiển thị thanh trượt để chọn giá trị số trong một phạm vi?',
    explanation:
      'type="range" hiển thị thanh trượt. Sử dụng thuộc tính min, max và step để cấu hình (ví dụ: <input type="range" min="0" max="100" step="5">). Giá trị có thể truy cập qua JS bằng input.value (luôn là chuỗi). Kết hợp với phần tử <output> để hiển thị giá trị hiện tại.',
    options: ['number', 'slider', 'range', 'scale'],
  },

  // ─── MID ──────────────────────────────────────────────────────────────────
  'html-016': {
    question:
      'Sự khác biệt chính giữa localStorage và sessionStorage là gì?',
    explanation:
      'Cả hai API đều là kho key-value đồng bộ (thường ~5 MB mỗi origin). Dữ liệu localStorage tồn tại vô thời hạn trừ khi bị xóa rõ ràng. Dữ liệu sessionStorage bị giới hạn trong tab trình duyệt và bị xóa khi tab đóng — ngay cả với cùng origin. Không nên lưu trữ dữ liệu nhạy cảm mà không mã hóa.',
    options: [
      'localStorage lớn hơn (10 MB so với 5 MB)',
      'sessionStorage tồn tại xuyên tab còn localStorage thì không',
      'localStorage tồn tại cho đến khi bị xóa rõ ràng; sessionStorage bị xóa khi tab/cửa sổ đóng',
      'localStorage là đồng bộ còn sessionStorage là bất đồng bộ',
    ],
  },
  'html-017': {
    question:
      'Giá trị rel nào trên phần tử <link> tải trước tài nguyên cần thiết cho trang hiện tại mà không hiển thị ngay?',
    explanation:
      'rel="preload" tải tài nguyên mà trang hiện tại sẽ cần sớm (font, hình ảnh, script) với mức ưu tiên cao. rel="prefetch" tải tài nguyên cho điều hướng tương lai với mức ưu tiên thấp. rel="preconnect" thiết lập TCP/TLS sớm đến một domain. rel="modulepreload" tải trước và phân tích ES module.',
    options: ['prefetch', 'preload', 'preconnect', 'modulepreload'],
  },
  'html-018': {
    question: 'Thuộc tính meta Open Graph og:image có tác dụng gì?',
    explanation:
      'Giao thức Open Graph (<meta property="og:image" content="...">) định nghĩa hình ảnh xem trước khi URL được chia sẻ trên các nền tảng như Facebook, LinkedIn, Slack và Twitter (cũng sử dụng twitter:image riêng). Nếu không có, các nền tảng có thể chọn hình ảnh tùy ý từ trang.',
    options: [
      'Đặt favicon hiển thị trên tab trình duyệt',
      'Định nghĩa hình ảnh hiển thị khi URL được chia sẻ trên mạng xã hội',
      'Nhúng hình ảnh trực tiếp vào phần head HTML',
      'Thông báo cho công cụ tìm kiếm hình ảnh chính của trang',
    ],
  },
  'html-019': {
    question:
      'Sự kết hợp thuộc tính nào cho phép ô tiêu đề bảng trải rộng hai cột?',
    explanation:
      'colspan gộp các ô theo chiều ngang. rowspan gộp các ô theo chiều dọc. Nên thêm thuộc tính <th scope="col"> cho khả năng truy cập để liên kết tiêu đề với các cột của nó. Bảng này có 3 cột — hàng tiêu đề sử dụng colspan=2 + 1 th bình thường = tổng cộng 3 ô.',
  },
  'html-020': {
    question: 'Mục đích của ARIA role="alert" là gì?',
    explanation:
      'role="alert" là vùng live ARIA khiến công nghệ hỗ trợ thông báo ngay nội dung được thêm hoặc thay đổi (ví dụ: lỗi form, thông báo thành công) mà không yêu cầu người dùng di chuyển focus. Tương đương với aria-live="assertive" aria-atomic="true". Sử dụng tiết kiệm để tránh gây quá tải cho người dùng.',
    options: [
      'Đánh dấu phần tử là biểu tượng cảnh báo',
      'Thông báo thay đổi nội dung cho trình đọc màn hình ngay lập tức mà không cần focus',
      'Tạo hộp thông báo dạng pop-up',
      'Thêm viền đỏ cho phần tử',
    ],
  },
  'html-021': {
    question:
      'Thuộc tính async và defer trên <script> có hành vi thực thi giống hệt nhau.',
    explanation:
      'Cả hai đều tải script mà không chặn quá trình phân tích. Khác biệt nằm ở việc thực thi: async thực thi ngay khi tải xong (không đảm bảo thứ tự), trong khi defer thực thi theo thứ tự tài liệu sau khi phân tích hoàn tất. defer an toàn hơn cho script có phụ thuộc; async dành cho script độc lập như analytics.',
  },
  'html-022': {
    question: 'Thuộc tính sandbox trên <iframe> có tác dụng gì?',
    explanation:
      'sandbox="" áp dụng tất cả hạn chế mặc định: không script, không truy cập same-origin, không gửi form, không popup. Bạn có thể chọn bật lại bằng token: sandbox="allow-scripts allow-forms". Điều này rất quan trọng để nhúng an toàn nội dung bên thứ ba không đáng tin cậy.',
    options: [
      'Nhúng một code sandbox (như CodePen) vào trang',
      'Hạn chế khả năng của nội dung nhúng (không script, form, popup, v.v.) trừ khi được bật lại rõ ràng',
      'Cung cấp nội dung dự phòng nếu iframe không tải được',
      'Bật chế độ toàn màn hình cho iframe',
    ],
  },
  'html-023': {
    question:
      'Thuộc tính nào trên <img> cho phép ảnh responsive bằng cách liệt kê nhiều URL nguồn với mô tả chiều rộng?',
    explanation:
      'srcset cho phép cung cấp nhiều nguồn ảnh ở các độ phân giải/chiều rộng khác nhau (ví dụ: srcset="img-400.jpg 400w, img-800.jpg 800w"). Trình duyệt chọn ảnh phù hợp nhất dựa trên mật độ hiển thị và chiều rộng viewport (tham khảo thuộc tính sizes). Điều này tránh tải ảnh quá lớn trên màn hình nhỏ.',
    options: ['sizes', 'srcset', 'media', 'src'],
  },
  'html-024': {
    question: 'Mục đích của thuộc tính tabindex="0" là gì?',
    explanation:
      'tabindex="0" đưa phần tử vào thứ tự tab tự nhiên của tài liệu (sau tất cả phần tử tương tác gốc ở vị trí tự nhiên). tabindex="-1" loại bỏ khỏi thứ tự tab nhưng cho phép focus bằng code. Giá trị dương (tabindex="1") ép thứ tự nhưng là anti-pattern vì phá vỡ luồng mong đợi.',
    options: [
      'Loại bỏ phần tử khỏi thứ tự tab',
      'Đặt phần tử lên đầu thứ tự tab',
      'Thêm phần tử không tương tác vào thứ tự tab tự nhiên',
      'Đặt z-index của phần tử cho việc xếp chồng',
    ],
  },
  'html-025': {
    question:
      'Phần tử HTML nào cung cấp hộp thoại modal gốc với tính năng giữ focus tích hợp?',
    explanation:
      'Phần tử <dialog> (với phương thức .showModal()) tạo modal gốc với tính năng tự động giữ focus, backdrop qua pseudo-element ::backdrop, và xử lý phím Escape. Nó cũng có thể dùng dạng non-modal với .show(). Hỗ trợ trình duyệt rất tốt từ năm 2024.',
    options: ['<popup>', '<modal>', '<dialog>', '<overlay>'],
  },
  'html-026': {
    question:
      'Form này thiếu khả năng truy cập cho ô nhập email. Hãy xác định và sửa lỗi.',
    explanation:
      'Thẻ <p> không cung cấp liên kết chương trình giữa văn bản nhãn và ô nhập. Thay bằng <label for="email"> sẽ liên kết nhãn để trình đọc màn hình thông báo khi ô nhập được focus. Nhấp vào nhãn cũng sẽ focus vào ô nhập, cải thiện khả năng sử dụng. Thêm required cung cấp xác thực tích hợp.',
  },
  'html-027': {
    question: 'Phần tử <picture> hữu ích nhất cho trường hợp sử dụng nào?',
    explanation:
      '<picture> cho phép art direction thông qua nhiều phần tử <source> với media query, phục vụ các hình ảnh hoàn toàn khác nhau (không chỉ kích thước) ở các breakpoint khác nhau. <img> bên trong luôn được yêu cầu làm fallback. Khác với srcset chỉ phục vụ cùng một ảnh ở các độ phân giải khác nhau.',
    options: [
      'Tải ảnh theo kiểu lazy loading',
      'Art direction — phục vụ các ảnh được cắt/kích thước khác nhau cho các điều kiện viewport khác nhau',
      'Thêm chú thích cho hình ảnh',
      'Tạo bộ sưu tập hình ảnh',
    ],
  },
  'html-028': {
    question:
      'rel="noopener noreferrer" trên thẻ anchor bảo vệ chống lại điều gì?',
    explanation:
      'noopener vô hiệu hóa window.opener trong tab mới, ngăn trang được mở chuyển hướng trang của bạn. noreferrer cũng bỏ header Referer. Cả hai cùng nhau là best practice cho liên kết target="_blank" đến trang không đáng tin cậy. Trình duyệt hiện đại tự động áp dụng noopener cho target="_blank", nhưng khai báo rõ ràng an toàn hơn.',
    options: [
      'Tấn công XSS qua inline script',
      'Trang được mở truy cập cửa sổ gốc qua window.opener, và rò rỉ URL referrer',
      'Clickjacking trong trang được liên kết',
      'CSS injection trong trang được liên kết',
    ],
  },
  'html-029': {
    question:
      'Thuộc tính contenteditable có thể được áp dụng cho bất kỳ phần tử HTML nào để cho phép người dùng chỉnh sửa.',
    explanation:
      'contenteditable="true" (hoặc chỉ contenteditable) khiến bất kỳ phần tử nào có thể chỉnh sửa. Ứng dụng phổ biến bao gồm trình soạn thảo văn bản giàu tính năng. Nội dung có thể đọc qua element.innerHTML hoặc element.textContent. Bạn cũng có thể dùng contenteditable="plaintext-only" (hỗ trợ rộng rãi) để tắt dán rich-text.',
  },
  'html-030': {
    question: 'Mục đích của phần tử <template> trong HTML là gì?',
    explanation:
      'Nội dung bên trong <template> được phân tích nhưng không được hiển thị — không tải ảnh, không thực thi script. Thuộc tính .content của nó trả về DocumentFragment mà bạn có thể clone và chèn: document.body.appendChild(template.content.cloneNode(true)). Đây là thành phần cốt lõi của Web Components.',
    options: [
      'Cách viết tắt để tạo class CSS tái sử dụng',
      'Chứa markup HTML bất hoạt không được hiển thị nhưng có thể clone và chèn qua JavaScript',
      'Định nghĩa template trang cho server-side rendering',
      'Tạo template literal trong HTML',
    ],
  },

  // ─── SENIOR ───────────────────────────────────────────────────────────────
  'html-031': {
    question:
      'API HTML5 nào cho phép bạn vẽ đồ họa 2D theo cách lập trình bằng JavaScript?',
    explanation:
      'Canvas 2D Context API (truy cập qua canvas.getContext("2d")) cung cấp các lệnh vẽ bắt buộc (fillRect, drawImage, arc, v.v.) cho đồ họa dựa trên pixel. SVG là khai báo và dựa trên DOM. WebGL là API 3D/GPU. Canvas phù hợp nhất cho game, trực quan hóa dữ liệu và xử lý hình ảnh.',
    options: ['SVG API', 'WebGL API', 'Canvas 2D Context API', 'Painting API'],
  },
  'html-032': {
    question:
      'Shadow DOM cung cấp tính đóng gói trong Web Components như thế nào?',
    explanation:
      'Shadow DOM gắn một cây DOM con riêng vào phần tử host qua element.attachShadow({ mode: "open" | "closed" }). Style bên trong shadow root không rò rỉ ra ngoài, và style trang không xuyên vào bên trong theo mặc định. mode:"open" cho phép JS bên ngoài truy cập qua element.shadowRoot; "closed" trả về null.',
    options: [
      'Mã hóa HTML của component',
      'Tạo cây DOM riêng biệt, cô lập được gắn vào phần tử, nơi style và ID không rò rỉ vào hoặc ra',
      'Ẩn component khỏi JavaScript hoàn toàn',
      'Tự động chuyển style sang file CSS bên ngoài',
    ],
  },
  'html-033': {
    question:
      'Viết một custom element HTML tối giản <greeting-message> nhận thuộc tính "name" và hiển thị "Hello, {name}!" trong shadow root.',
    explanation:
      'Custom element kế thừa HTMLElement. attachShadow tạo shadow root cô lập. observedAttributes liệt kê các thuộc tính cần theo dõi. attributeChangedCallback kích hoạt khi thuộc tính thay đổi, connectedCallback kích hoạt khi được chèn vào DOM. customElements.define đăng ký tên thẻ (phải chứa dấu gạch ngang).',
  },
  'html-034': {
    question:
      'Phương thức pushState của History API được sử dụng để làm gì?',
    explanation:
      'history.pushState(state, title, url) cập nhật URL trên thanh địa chỉ và thêm mục vào lịch sử trình duyệt mà không có yêu cầu mạng. Điều này cho phép client-side routing trong SPA. history.replaceState() cập nhật mà không thêm mục. Sự kiện popstate kích hoạt khi điều hướng back/forward.',
    options: [
      'Lưu toàn bộ HTML trang vào localStorage',
      'Thay đổi URL trên thanh địa chỉ và thêm mục lịch sử mà không kích hoạt tải lại trang',
      'Đẩy vị trí cuộn hiện tại vào stack',
      'Tải trước và cache trang tiếp theo',
    ],
  },
  'html-035': {
    question:
      'Sự khác biệt giữa rel="preload" và rel="modulepreload" là gì?',
    explanation:
      'rel="modulepreload" dành riêng cho ES module: nó tải, phân tích và biên dịch module (và tùy chọn các import tĩnh của nó), đặt chúng vào module map. rel="preload" tải tài nguyên với mức ưu tiên cao nhưng không phân tích/biên dịch script. modulepreload hiệu quả hơn cho đồ thị module.',
    options: [
      'Chúng giống hệt nhau; modulepreload là alias đã lỗi thời',
      'modulepreload bổ sung phân tích và biên dịch ES module cùng các dependency, đưa vào module map',
      'preload chỉ hoạt động cho font; modulepreload cho script',
      'modulepreload chặn rendering còn preload thì không',
    ],
  },
  'html-036': {
    question:
      'Trong HTML5 Drag and Drop API, bạn phải gọi event.preventDefault() trên sự kiện nào để cho phép thả (drop) xảy ra?',
    explanation:
      'Mặc định trình duyệt không cho phép thả. Bạn phải gọi event.preventDefault() trong handler dragover (và tùy chọn dragenter) để báo hiệu mục tiêu thả chấp nhận kéo. Sự kiện drop chỉ kích hoạt nếu dragover đã được ngăn chặn. Dữ liệu được truyền qua event.dataTransfer.',
    options: ['dragstart', 'dragover', 'dragenter', 'drop'],
  },
  'html-037': {
    question:
      'Mục đích của phần tử <slot> bên trong Shadow DOM là gì?',
    explanation:
      'Slot cho phép composition trong Web Components. <slot name="header"> trong shadow root khớp với các phần tử con có thuộc tính slot="header" trong light DOM. <slot> mặc định không có tên sẽ nhận tất cả phần tử con chưa được gán slot. Nội dung slotted vẫn nằm trong light DOM (được chiếu, không bị di chuyển), nên style trang vẫn áp dụng.',
    options: [
      'Tạo placeholder cho các cột CSS grid',
      'Điểm chèn có tên nơi các phần tử con light DOM từ host được chiếu vào cây shadow',
      'Dành bộ nhớ cho component tải lazy',
      'Alias cho phần tử <template>',
    ],
  },
  'html-038': {
    question:
      'Phương thức watchPosition của Geolocation API khác getCurrentPosition như thế nào?',
    explanation:
      'getCurrentPosition kích hoạt callback một lần. watchPosition kích hoạt liên tục khi thiết bị di chuyển, trả về watch ID. Gọi navigator.geolocation.clearWatch(watchId) để dừng. Cả hai đều nhận callback thành công, callback lỗi và options (enableHighAccuracy, timeout, maximumAge).',
    options: [
      'watchPosition chính xác hơn vì nó lấy trung bình nhiều lần đo',
      'watchPosition theo dõi liên tục sự thay đổi vị trí và kích hoạt callback mỗi khi vị trí thay đổi, trả về watchId để hủy bằng clearWatch',
      'watchPosition yêu cầu quyền âm thầm mà không có prompt trình duyệt',
      'watchPosition tự động lưu dữ liệu vị trí vào localStorage',
    ],
  },
  'html-039': {
    question:
      'Triển khai ARIA sau đây không chính xác. Hãy xác định và sửa lỗi.',
    explanation:
      'Một div với role="button" thiếu tabindex="0" (không thể focus bằng bàn phím) và thiếu handler sự kiện bàn phím (Enter/Space nên kích hoạt button theo ARIA authoring practices). Cách sửa tốt nhất là dùng <button> gốc vốn có tất cả các hành vi này tích hợp sẵn — ngữ nghĩa HTML gốc luôn được ưu tiên hơn ARIA.',
  },
  'html-040': {
    question:
      'type="module" trên thẻ <script> làm gì mà script thông thường không làm được?',
    explanation:
      'Module script: (1) hỗ trợ import/export, (2) mặc định defer (như defer), (3) tự động chạy trong strict mode, (4) có scope cấp module (không gây ô nhiễm global), (5) được tải với CORS credentials, và (6) chỉ thực thi một lần cho mỗi URL module bất kể được import bao nhiêu lần.',
    options: [
      'Cho phép biên dịch TypeScript trong trình duyệt',
      'Cho phép cú pháp ES module (import/export), defer thực thi mặc định, chạy trong strict mode và tạo scope module riêng',
      'Tự động tải script từ CDN',
      'Cho phép async/await mà không cần transpiler',
    ],
  },
  'html-041': {
    question:
      'Import map trong HTML là gì và nó giải quyết vấn đề gì?',
    explanation:
      'Import map cho phép viết import { html } from "lit" trong ES module trên trình duyệt bằng cách ánh xạ bare specifier sang URL: { "imports": { "lit": "/node_modules/lit/index.js" } }. Điều này cho phép phát triển module không cần bundler. Chúng được khai báo bằng <script type="importmap"> và phải xuất hiện trước mọi module script.',
    options: [
      'File cấu hình routing phía server',
      'Một JSON map trong <script type="importmap"> điều khiển cách bare module specifier được phân giải trong trình duyệt mà không cần bundler',
      'Một CSS custom property map cho theming',
      'Một Service Worker cache manifest',
    ],
  },
  'html-042': {
    question:
      'Thuộc tính inert trên phần tử HTML vô hiệu hóa tương tác (nhấp chuột, focus, chọn văn bản) cho phần tử đó và tất cả phần tử con.',
    explanation:
      'inert là thuộc tính boolean toàn cục (hỗ trợ rộng rãi từ 2023) khiến phần tử và cây con hoàn toàn không tương tác: loại khỏi thứ tự tab, không nhấp được, không chọn được, và ẩn khỏi API khả năng truy cập. Lý tưởng cho nội dung ngoài màn hình như menu drawer hoặc slide carousel không hoạt động.',
  },
  'html-043': {
    question:
      'Popover API là gì và nó khác với <dialog> gốc như thế nào?',
    explanation:
      'Popover API (2024, hỗ trợ rộng rãi) sử dụng thuộc tính popover trên bất kỳ phần tử nào và popovertarget trên nút kích hoạt. Nó tự động mở trong top-layer như dialog, nhưng khác <dialog>.showModal(), nó không giữ focus — người dùng có thể tương tác với nội dung xung quanh. Hỗ trợ popover="auto" (tự đóng khi nhấp ra ngoài) và popover="manual".',
    options: [
      'Chúng giống hệt nhau; popover là alias mới hơn của dialog',
      'Popover là cơ chế overlay nhẹ, gốc trình duyệt được kích hoạt qua thuộc tính popover và popovertarget, không giữ focus, và có thể đóng bằng light-dismiss (nhấp ra ngoài hoặc Escape)',
      'Popover chỉ hoạt động bên trong Web Components',
      'Popover là một ARIA role, không phải thuộc tính HTML',
    ],
  },
  'html-044': {
    question:
      'Khi sử dụng postMessage để giao tiếp giữa iframe và trang cha, bạn luôn nên xác minh điều gì trong handler sự kiện message?',
    explanation:
      'Luôn xác thực event.origin trong handler postMessage: if (event.origin !== "https://trusted.example.com") return. Nếu không kiểm tra, trang độc hại có thể gửi message tùy ý. Cũng nên xác thực cấu trúc của event.data. Không bao giờ dùng targetOrigin "*" khi gửi dữ liệu nhạy cảm.',
    options: [
      'Kiểu dữ liệu của message',
      'event.origin so với danh sách origin cho phép',
      'Thuộc tính src của iframe trước khi đọc message',
      'Timestamp của message để ngăn tấn công replay',
    ],
  },
  'html-045': {
    question:
      'Viết markup HTML để triển khai ảnh responsive: phục vụ định dạng WebP trên trình duyệt hỗ trợ, fallback sang JPEG, và hiển thị crop khác nhau cho mobile (<600px) và desktop.',
    explanation:
      'Trình duyệt đánh giá các phần tử <source> từ trên xuống dưới và chọn cái đầu tiên khớp. Đặt source theo định dạng (webp) trước đảm bảo ưu tiên định dạng. <img> là bắt buộc làm fallback chung và cũng cung cấp alt text, width/height (ngăn CLS), và loading="lazy".',
  },

  // ─── LEAD ─────────────────────────────────────────────────────────────────
  'html-046': {
    question:
      'Thiết kế cấu trúc HTML ngữ nghĩa cho trang chủ cổng tin tức. Bao gồm các vùng landmark, phân cấp heading, yêu cầu khả năng truy cập và các cân nhắc hiệu năng cho nội dung above-the-fold.',
    explanation:
      'Quyết định chính: (1) Mỗi trang chỉ một <h1> trong vùng nội dung chính; (2) Tất cả vùng landmark được gắn nhãn (aria-label hoặc aria-labelledby); (3) Skip link cho người dùng bàn phím; (4) fetchpriority="high" trên ảnh hero để tránh ảnh hưởng LCP; (5) loading="lazy" trên ảnh below-fold; (6) preconnect cho origin bên thứ ba; (7) Phần tử time với datetime cho ngày đọc được bằng máy; (8) role="search" trên form tìm kiếm; (9) alt="" trên thumbnail bài viết mang tính trang trí (tiêu đề bài viết là nhãn gần đó).',
  },
  'html-047': {
    question:
      'fetchpriority="high" trên <img> hoặc <link rel="preload"> dùng để làm gì và chủ yếu cải thiện chỉ số web vital nào?',
    explanation:
      'fetchpriority="high" (Priority Hints API) báo cho trình duyệt lên lịch tải tài nguyên này với mức ưu tiên mạng cao, ghi đè giá trị mặc định theo heuristic. Nó có tác động lớn nhất trên ảnh LCP mà trình duyệt có thể ưu tiên thấp hơn. fetchpriority="low" có thể giảm ưu tiên ảnh below-fold ngay cả khi không có loading="lazy".',
    options: [
      'Buộc tải song song và cải thiện FID',
      'Báo hiệu cho bộ lập lịch tài nguyên của trình duyệt tải tài nguyên với mức ưu tiên cao, chủ yếu cải thiện LCP (Largest Contentful Paint)',
      'Kích hoạt HTTP/2 server push cho tài nguyên',
      'Tắt lazy loading cấp trình duyệt cho tài nguyên',
    ],
  },
  'html-048': {
    question:
      'Khi nào nên sử dụng aria-describedby so với aria-labelledby?',
    explanation:
      'Accessible Name and Description Computation (ACCDC): aria-labelledby thay thế hoặc bổ sung tên truy cập của phần tử — trình đọc màn hình thông báo nó như nhãn chính. aria-describedby cung cấp mô tả bổ sung được thông báo sau tên (ví dụ: ràng buộc trường, thông báo lỗi, văn bản trợ giúp). Cả hai đều tham chiếu ID của các phần tử khác.',
    options: [
      'Chúng có thể hoán đổi cho nhau; chọn cái nào cũng được cho bất kỳ liên kết mô tả nào',
      'aria-labelledby cung cấp tên truy cập (nhãn chính); aria-describedby cung cấp văn bản mô tả bổ sung (thông tin phụ/bổ sung)',
      'aria-labelledby dành cho trường form; aria-describedby dành cho button',
      'aria-describedby thay thế aria-label khi văn bản hiển thị trên màn hình',
    ],
  },
  'html-049': {
    question:
      'Đặc tả HTML định nghĩa sự khác biệt giữa <section> và <div> như thế nào?',
    explanation:
      '<section> có ARIA role ngầm định là "region" khi có tên truy cập (qua aria-labelledby/aria-label), nghĩa là nó xuất hiện như landmark cho công nghệ hỗ trợ. <div> không có ARIA role ngầm định. Sử dụng <div> khi không cần nhóm ngữ nghĩa; dùng <section> cho nội dung có chủ đề riêng biệt cần đưa vào outline tài liệu.',
    options: [
      'Chúng giống hệt nhau; <section> chỉ là <div> được tạo kiểu',
      '<section> là nhóm theo chủ đề góp phần vào outline tài liệu và tạo landmark, trong khi <div> là container chung không có ngữ nghĩa và không có role ngầm định',
      '<section> chỉ có thể chứa phần tử <article>, <div> có thể chứa bất kỳ thứ gì',
      '<section> phải có thuộc tính id mới là HTML5 hợp lệ',
    ],
  },
  'html-050': {
    question:
      'Mô tả kiến trúc Web Components hoàn chỉnh cho component <ds-button> của design system. Bao gồm: lifecycle custom element, đóng gói Shadow DOM, phản chiếu property/attribute, khả năng truy cập ARIA, và theming bằng CSS custom property.',
    explanation:
      'Các pattern chính: (1) formAssociated=true cho tích hợp form; (2) ElementInternals cho ARIA và trạng thái form; (3) CSS custom property có fallback cho theming từ consumer; (4) CSS part="" cho điểm vào styling bên ngoài; (5) Selector :host() cho styling variant/state; (6) :focus-visible cho vòng focus bàn phím; (7) Ghép cặp phản chiếu attribute/property; (8) <slot> cho nội dung có thể kết hợp.',
  },
  'html-051': {
    question:
      'Mục đích của thuộc tính scope trên phần tử <th> trong bảng dữ liệu phức tạp là gì?',
    explanation:
      'scope="col" liên kết <th> với các ô trong cột; scope="row" với các ô trong hàng; scope="colgroup"/"rowgroup" với nhóm cột/hàng. Liên kết rõ ràng này rất quan trọng cho bảng phức tạp nơi liên kết ngầm định (hàng đầu = header) có thể thất bại. Công nghệ hỗ trợ dùng nó để thông báo header nào áp dụng khi đọc mỗi ô.',
    options: [
      'Thêm CSS scope cho styling cột đó',
      'Liên kết chương trình giữa ô header với các ô dữ liệu trong hàng hoặc cột, cải thiện điều hướng bảng cho trình đọc màn hình',
      'Khiến cột có thể sắp xếp một cách tự nhiên',
      'Nhóm nhiều header dưới một header cha',
    ],
  },
  'html-052': {
    question:
      'Import map phải được khai báo trước tất cả các thẻ <script type="module"> trong tài liệu HTML.',
    explanation:
      'Đặc tả HTML yêu cầu import map phải được xử lý trước khi bất kỳ module script nào thực thi, vì nó định nghĩa cách phân giải bare specifier. Nếu module script được gặp trước import map, trình duyệt sẽ báo lỗi. Đặt <script type="importmap"> sớm nhất có thể trong <head>, trước tất cả module script.',
  },

  // ─── ADDITIONAL MIX ──────────────────────────────────────────────────────
  'html-053': {
    question: 'Kết quả/hành vi khi script này chạy là gì?',
    explanation:
      'Script defer thực thi sau khi phân tích HTML hoàn tất. Tại thời điểm đó document.readyState là "interactive" (phân tích xong, tài nguyên có thể vẫn đang tải). Nếu các script defer khác đã chạy và tài nguyên đã tải, có thể là "complete". Nó sẽ không bao giờ là "loading" (chỉ xảy ra trong khi phân tích).',
  },
  'html-054': {
    question:
      'Thuộc tính loading="lazy" trên phần tử <img> có tác dụng gì?',
    explanation:
      'loading="lazy" là thuộc tính gốc trình duyệt trì hoãn tải ảnh cho đến khi ảnh vào (hoặc gần) viewport. Điều này tiết kiệm băng thông và cải thiện thời gian tải trang ban đầu mà không cần JavaScript. Không bao giờ dùng loading="lazy" trên ảnh above-the-fold/LCP — sẽ làm giảm hiệu năng.',
    options: [
      'Tải trước ảnh trước khi trang render',
      'Trì hoãn tải ảnh cho đến khi gần viewport, tiết kiệm băng thông cho ảnh ngoài màn hình',
      'Tải ảnh ở độ phân giải thấp trước, sau đó độ phân giải đầy đủ',
      'Tắt cơ chế cache ảnh',
    ],
  },
  'html-055': {
    question:
      'Mục đích của <meta name="viewport" content="width=device-width, initial-scale=1"> là gì?',
    explanation:
      'Nếu không có thẻ này, trình duyệt di động hiển thị trang ở viewport ảo ~980px kiểu "desktop" rồi thu nhỏ, gây ra chữ rất nhỏ. width=device-width đặt viewport bằng chiều rộng CSS pixel thực của thiết bị. initial-scale=1 ngăn zoom ban đầu. Đây là yếu tố thiết yếu cho thiết kế responsive.',
    options: [
      'Đặt màu nền cho viewport',
      'Chỉ thị trình duyệt không thu phóng trang trên mobile, hiển thị ở chiều rộng CSS pixel thực của thiết bị',
      'Buộc trang hiển thị ngang',
      'Tắt pinch-to-zoom trên thiết bị cảm ứng',
    ],
  },
  'html-056': {
    question:
      'Microdata trong HTML là gì và nó liên quan đến Schema.org như thế nào?',
    explanation:
      'Microdata thêm chú thích ngữ nghĩa: itemscope đánh dấu một mục, itemtype định nghĩa loại Schema.org (ví dụ: "https://schema.org/Product"), và itemprop đặt tên thuộc tính. Công cụ tìm kiếm sử dụng để tạo rich results (xếp hạng sao, giá, accordion FAQ). JSON-LD (qua <script type="application/ld+json">) hiện là lựa chọn ưu tiên vì ít xâm nhập hơn.',
    options: [
      'Microdata là cách đã lỗi thời để lưu trữ lượng nhỏ dữ liệu trong thuộc tính, tương tự data-*',
      'Microdata là đặc tả HTML để nhúng dữ liệu có cấu trúc đọc được bằng máy (từ bộ từ vựng Schema.org) vào HTML sử dụng thuộc tính itemscope, itemtype và itemprop',
      'Microdata là tên HTML cho template Web Components',
      'Microdata chỉ các thẻ <meta> trong phần head tài liệu',
    ],
  },
  'html-057': {
    question:
      'Phần tử <audio> yêu cầu JavaScript để phát âm thanh; không có cách nào chỉ dùng HTML để cung cấp điều khiển phát.',
    explanation:
      'Thêm thuộc tính boolean controls vào <audio> hiển thị giao diện phát gốc của trình duyệt (play/pause, thanh tua, âm lượng) mà không cần JavaScript: <audio src="audio.mp3" controls>. JavaScript chỉ cần cho player tùy chỉnh, điều khiển lập trình, hoặc Web Audio API.',
  },
  'html-058': {
    question:
      'Sự khác biệt giữa aria-hidden="true" và display:none khi ẩn nội dung khỏi công nghệ hỗ trợ là gì?',
    explanation:
      'aria-hidden="true" dành cho nội dung hiển thị nhưng không liên quan đến công nghệ hỗ trợ (icon trang trí, nội dung trùng lặp). display:none/visibility:hidden ẩn cả trực quan lẫn khỏi công nghệ hỗ trợ. Không bao giờ dùng aria-hidden trên phần tử có thể focus — người dùng bàn phím vẫn có thể Tab đến, tạo ra tình huống phần tử có thể focus nhưng vô hình với công nghệ hỗ trợ.',
    options: [
      'Chúng tương đương; dùng cái nào tiện',
      'aria-hidden="true" chỉ loại phần tử khỏi cây truy cập (vẫn hiển thị và hoạt động); display:none loại cả trực quan lẫn khỏi cây truy cập',
      'aria-hidden="true" chỉ ảnh hưởng trình đọc màn hình; display:none cũng ẩn khỏi bàn phím',
      'display:none đã lỗi thời, thay bằng aria-hidden cho khả năng truy cập',
    ],
  },
  'html-059': {
    question:
      'Phần tử HTML nào được sử dụng để cung cấp mô tả văn bản dự phòng cho phần tử <canvas> phục vụ khả năng truy cập?',
    explanation:
      'Nội dung giữa các thẻ <canvas> được hiển thị khi trình duyệt không hỗ trợ canvas. Cho khả năng truy cập, thêm mô tả văn bản hoặc <table> dự phòng giữa các thẻ: <canvas>Biểu đồ cột hiển thị dữ liệu bán hàng theo tháng.</canvas>. Ngoài ra, sử dụng aria-label hoặc aria-labelledby trên chính phần tử canvas.',
    options: [
      'Thuộc tính title trên canvas',
      'Thuộc tính alt trên canvas',
      'Nội dung đặt giữa thẻ mở và thẻ đóng <canvas>',
      'Thuộc tính aria-placeholder',
    ],
  },
  'html-060': {
    question:
      'Tìm và sửa lỗi khả năng truy cập và ngữ nghĩa trong phần điều hướng này.',
    explanation:
      'Các vấn đề: (1) <div> không có ý nghĩa ngữ nghĩa — thay bằng <nav> cho vùng landmark. (2) aria-label phân biệt nav này với các nav khác trên trang. (3) Các liên kết điều hướng là danh sách — dùng <ul>/<li> truyền đạt "3 mục trong danh sách" cho trình đọc màn hình. Không có markup danh sách, người dùng không có thông tin về số lượng.',
  },
  'html-061': {
    question: 'Phần tử <aside> đại diện cho điều gì về mặt ngữ nghĩa?',
    explanation:
      '<aside> đại diện cho nội dung liên quan gián tiếp đến nội dung xung quanh — sidebar, trích dẫn nổi bật, bài viết liên quan, quảng cáo. Nó không được định nghĩa bởi vị trí CSS. Khi là phần tử con trực tiếp của <body>, nó có ARIA landmark role ngầm định là "complementary".',
    options: [
      'Nội dung xuất hiện bên cạnh nội dung chính trong layout CSS',
      'Nội dung liên quan gián tiếp đến nội dung xung quanh (sidebar, callout, liên kết liên quan)',
      'Chú thích cuối trang',
      'Menu điều hướng phụ',
    ],
  },
  'html-062': {
    question:
      'Viết HTML sử dụng Canvas API để vẽ hình chữ nhật tô màu xanh dương (100x50px) tại vị trí (20, 20) trên canvas 200x100.',
    explanation:
      'getContext("2d") trả về CanvasRenderingContext2D. Đặt fillStyle trước khi gọi fillRect(x, y, width, height). Luôn đặt width/height canvas bằng thuộc tính HTML (không phải CSS) để định nghĩa độ phân giải drawing buffer — kích thước CSS chỉ thu phóng phần tử.',
  },
  'html-063': {
    question: 'Thuộc tính srcdoc trên <iframe> được sử dụng để làm gì?',
    explanation:
      'srcdoc="<p>Hello</p>" hiển thị chuỗi HTML inline trực tiếp bên trong iframe, có ưu tiên cao hơn src. Hữu ích cho preview sandbox, email client và preview trình soạn thảo rich text. Nội dung tuân theo cùng các hạn chế sandbox. Cần encode HTML entity đúng cách cho giá trị thuộc tính.',
    options: [
      'Chỉ định URL dự phòng nếu src không tải được',
      'Nhúng tài liệu HTML inline trực tiếp trong iframe mà không cần URL riêng',
      'Giới hạn origin nào iframe có thể tải từ',
      'Thêm tiêu đề cho iframe phục vụ khả năng truy cập',
    ],
  },
  'html-064': {
    question:
      'Thẻ <link rel="preconnect"> thiết lập kết nối TCP, bắt tay TLS và tra cứu DNS đến origin bên thứ ba trước khi tài nguyên thực sự được yêu cầu.',
    explanation:
      'rel="preconnect" gợi ý trình duyệt thực hiện thiết lập kết nối đầy đủ (DNS + TCP + TLS) đến origin cho trước sớm. Điều này tiết kiệm 100-500ms cho tài nguyên đầu tiên tải từ origin đó. Tốt nhất dùng cho origin quan trọng như CDN font hoặc server API. Sử dụng tiết kiệm — kết nối nhàn rỗi lãng phí tài nguyên.',
  },
  'html-065': {
    question:
      'Trong ngữ cảnh ARIA, "Quy tắc đầu tiên khi sử dụng ARIA" là gì?',
    explanation:
      'Quy tắc đầu tiên của đặc tả W3C ARIA: ưu tiên ngữ nghĩa HTML gốc. Các phần tử gốc như <button>, <input>, <nav>, <main> có ARIA role tích hợp, tương tác bàn phím, và hỗ trợ trình duyệt/công nghệ hỗ trợ sẵn. ARIA bổ sung ngữ nghĩa thiếu — không bao giờ thay thế HTML tốt. Dùng ARIA sai cách thực sự gây hại cho khả năng truy cập.',
    options: [
      'Luôn thêm ARIA role cho mọi phần tử tương tác',
      'Nếu có thể dùng phần tử hoặc thuộc tính HTML gốc với ngữ nghĩa và hành vi cần thiết, hãy dùng nó thay vì tái sử dụng phần tử khác và thêm ARIA',
      'Thuộc tính ARIA phải luôn viết thường',
      'Sử dụng ARIA role trước CSS class trong HTML để cải thiện hiệu năng',
    ],
  },
}
