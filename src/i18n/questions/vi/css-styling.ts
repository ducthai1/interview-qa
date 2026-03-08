import type { QuestionTranslationMap } from '../types'

export const cssStylingVi: QuestionTranslationMap = {
  'cs-001': {
    question: 'Thuộc tính CSS flexbox nào điều khiển cách các flex item được căn chỉnh theo trục chéo (cross axis)?',
    explanation:
      'align-items căn chỉnh tất cả các phần tử con flex theo trục chéo (vuông góc với trục chính). justify-content căn chỉnh các phần tử theo trục chính. align-self ghi đè align-items cho một phần tử đơn lẻ.',
    options: [
      'justify-content',
      'align-items',
      'flex-direction',
      'align-self',
    ],
  },
  'cs-002': {
    question: 'Bố cục được tính toán của các grid item là gì?',
    answer:
      'Một lưới 3 cột, 2 hàng trong đó mỗi ô có chiều rộng bằng nhau (1/3 container trừ gap) và cao 100px, với khoảng cách 10px giữa tất cả các ô.',
    explanation:
      'repeat(3, 1fr) tạo ba cột có chiều rộng bằng nhau (fr = phần của không gian khả dụng). grid-template-rows thiết lập hai hàng 100px. Với 6 phần tử con, lưới được lấp đầy hoàn toàn: 3 phần tử mỗi hàng × 2 hàng. Thuộc tính gap thêm khoảng cách 10px giữa cả hàng và cột.',
  },
  'cs-003': {
    question:
      'CSS custom properties (biến CSS) có thể được cập nhật động bằng JavaScript thông qua element.style.setProperty().',
    explanation:
      'Biến CSS được định nghĩa với --variable-name có thể được đọc và ghi qua JS: element.style.setProperty("--color", "red") hoặc document.documentElement.style.setProperty("--primary", "#ff0000") cho biến toàn cục. Điều này cho phép tạo theme mạnh mẽ trong runtime mà không cần chuyển đổi class.',
  },
  'cs-004': {
    question: 'Trong TailwindCSS, chế độ "JIT" (Just-in-Time) làm gì?',
    explanation:
      'JIT (giờ là mặc định trong Tailwind v3+) quét các file nguồn và chỉ sinh ra các class bạn sử dụng, thay vì gửi một file CSS khổng lồ. Nó cũng cho phép các giá trị tùy ý như w-[347px] và bg-[#1da1f2], và sinh class theo yêu cầu trong quá trình phát triển để HMR tức thì.',
    options: [
      'Sinh CSS trong runtime trên trình duyệt',
      'Chỉ sinh các utility class thực sự được sử dụng trong file nguồn, cho phép giá trị tùy ý và build nhanh hơn',
      'Chạy Tailwind như một thư viện JavaScript runtime',
      'Bật hot module replacement cho các thay đổi CSS',
    ],
  },
  'cs-005': {
    question:
      'Làm thế nào để áp dụng một class Tailwind chỉ trên màn hình cỡ trung bình trở lên?',
    explanation:
      'Tailwind sử dụng tiền tố responsive theo hướng mobile-first: md:text-lg áp dụng text-lg tại breakpoint md (768px) và rộng hơn. Các tiền tố breakpoint là: sm:, md:, lg:, xl:, 2xl:. Tailwind v4 cũng thêm container query qua @sm:, @md: v.v.',
    options: [
      'md-text-lg',
      'text-lg:md',
      'md:text-lg',
      '@md:text-lg',
    ],
  },
  'cs-006': {
    question: 'Animation CSS này làm gì?',
    answer:
      'Panel trượt vào từ bên trái (bắt đầu ngoài màn hình 100%) và hiện dần từ opacity 0 đến 1 trong 0.3 giây với đường cong ease-out. fill-mode "forwards" giữ panel ở trạng thái cuối cùng sau khi animation hoàn thành.',
    explanation:
      'translateX(-100%) bắt đầu phần tử ngoài màn hình bên trái. ease-out giảm tốc về cuối tạo cảm giác tự nhiên. fill-mode forwards rất quan trọng — nếu không có nó, phần tử sẽ nhảy về trạng thái trước animation (translateX(-100%), opacity: 0) sau 0.3 giây.',
  },
  'cs-007': {
    question:
      'Sự khác biệt chính giữa auto-fill và auto-fit trong repeat() của CSS Grid là gì?',
    explanation:
      'Với repeat(auto-fill, minmax(200px, 1fr)): auto-fill tạo nhiều track nhất có thể (bao gồm cả track trống ảo). auto-fit cũng làm tương tự nhưng thu gọn các track trống, cho phép các phần tử đã điền giãn ra để lấp đầy hàng. auto-fit thường được ưa thích hơn cho bố cục card responsive mà không cần số cột cố định.',
    options: [
      'auto-fill tạo các track trống để lấp đầy container; auto-fit thu gọn các track trống và kéo giãn các phần tử hiện có để lấp đầy không gian trống',
      'auto-fit tạo nhiều cột hơn auto-fill',
      'auto-fill dùng cho hàng; auto-fit dùng cho cột',
      'Chúng có hành vi giống hệt nhau',
    ],
  },
  'cs-008': {
    question:
      'CSS Container Queries là gì và chúng khác Media Queries như thế nào?',
    explanation:
      'Container queries (@container) cho phép bạn định kiểu một component dựa trên kích thước phần tử chứa nó. Điều này giải quyết vấn đề "cùng component trong sidebar (hẹp) và nội dung chính (rộng)". Khai báo containment với container-type: inline-size rồi truy vấn với @container (min-width: 400px) { ... }.',
    options: [
      'Container queries phản hồi theo kích thước viewport; media queries phản hồi theo kích thước component',
      'Container queries cho phép định kiểu phần tử dựa trên kích thước container cha, không phải kích thước viewport — tạo ra các component responsive thực sự có thể tái sử dụng bất kể đặt ở đâu',
      'Container queries chỉ hoạt động với CSS Grid',
      'Container queries là một JavaScript API, không phải CSS thuần',
    ],
  },
  'cs-009': {
    question:
      'Sự đánh đổi chính giữa CSS Modules và thư viện CSS-in-JS (như styled-components) là gì?',
    explanation:
      'CSS Modules: không có runtime, được trích xuất thành file .css tĩnh khi build, hoạt động với mọi CSS preprocessor, hiệu suất tuyệt vời. CSS-in-JS (runtime): định kiểu động dựa trên props, style đặt cùng component, nhưng thêm ~30KB+ thư viện runtime và overhead inject style. CSS-in-JS không có runtime (Linaria, vanilla-extract) kết hợp ưu điểm của cả hai.',
    options: [
      'CSS Modules nhanh hơn trong runtime; CSS-in-JS tốt hơn cho trang tĩnh',
      'CSS Modules sinh tên class có phạm vi tại thời điểm build mà không tốn chi phí runtime; CSS-in-JS sinh style động trong runtime (với các thư viện như styled-components), thêm trọng lượng JS bundle và overhead runtime, nhưng cho phép định kiểu động dựa trên props',
      'CSS-in-JS chỉ dành cho dự án TypeScript',
      'CSS Modules yêu cầu PostCSS; CSS-in-JS thì không',
    ],
  },
  'cs-010': {
    question:
      'Bố cục flexbox này không căn giữa theo chiều dọc. Vấn đề là gì?',
    answer: 'Thiếu align-items: center trên container.',
    explanation:
      'justify-content: center căn giữa các phần tử theo trục chính (ngang trong hướng row). Để căn giữa theo trục chéo (dọc), bạn cần align-items: center. Nếu không có, align-items mặc định là stretch, đặt các phần tử ở đầu container.',
  },
  'cs-011': {
    question:
      'Bộ chọn CSS :has() cho phép điều gì mà trước đây không thể làm được trong CSS thuần?',
    explanation:
      ':has() là "bộ chọn cha" mà các nhà phát triển CSS đã chờ đợi. Ví dụ: form:has(input:invalid) { border: red } — định kiểu form có input không hợp lệ. li:has(> a:hover) { background: gray } — định kiểu list item mà phần tử con trực tiếp là link đang được hover. Được hỗ trợ rộng rãi trên tất cả trình duyệt hiện đại từ 2023.',
    options: [
      'Chọn phần tử con theo kiểu của chúng',
      'Chọn phần tử cha — định kiểu phần tử cha dựa trên trạng thái hoặc nội dung của con (ví dụ: định kiểu form khi nó chứa input không hợp lệ)',
      'Chọn phần tử theo giá trị thuộc tính',
      'Kết hợp nhiều pseudo-class lại với nhau',
    ],
  },
  'cs-012': {
    question:
      'Đặc tả CSS nesting là gì và nó khác với nesting trong Sass/LESS như thế nào?',
    explanation:
      'CSS nesting gốc được hỗ trợ trong Chrome 112+, Firefox 117+, Safari 16.5+. Cú pháp: .card { color: black; & .title { font-size: 2rem } &:hover { opacity: 0.8 } }. Ký tự & là bắt buộc khi lồng các bộ chọn không phải pseudo-class. Plugin PostCSS nesting có thể polyfill cho trình duyệt cũ.',
    options: [
      'CSS nesting có cú pháp và hành vi giống hệt Sass nesting',
      'CSS nesting gốc (giờ có trên tất cả trình duyệt hiện đại) cho phép lồng bộ chọn bên trong nhau mà không cần preprocessor. Khác Sass, bộ chọn lồng phải bắt đầu bằng & hoặc một bộ chọn CSS hợp lệ. Ký tự & đại diện cho bộ chọn cha.',
      'CSS nesting chỉ hoạt động bên trong quy tắc @layer',
      'CSS nesting gốc yêu cầu PostCSS để biên dịch',
    ],
  },
  'cs-013': {
    question:
      'Đoạn code CSS custom property này xuất ra màu gì cho button?',
    answer:
      'Button có background #66b2ff vì --brand được ghi đè thành #66b2ff trong .theme-dark, và --btn-color sử dụng var(--brand) giải quyết thành giá trị #66b2ff được kế thừa.',
    explanation:
      'Biến CSS được kế thừa qua cây DOM. Phần tử .theme-dark đặt --brand thành #66b2ff. Phần tử .btn bên trong kế thừa giá trị này. Khi --btn-color giải quyết var(--brand), nó tìm thấy #66b2ff được kế thừa (không phải #007bff ở root). Đây là cách theming dựa trên biến CSS hoạt động — ghi đè tại phạm vi cha.',
  },
  'cs-014': {
    question: 'Quy tắc CSS @layer là gì và tại sao nó được giới thiệu?',
    explanation:
      '@layer cho phép bạn khai báo các lớp cascade có tên: @layer reset, base, components, utilities. Style trong lớp được khai báo sau sẽ thắng so với lớp trước bất kể specificity. Điều này giải quyết vấn đề "ghi đè style Tailwind/bên thứ ba". Ví dụ: @layer utilities { .btn { color: red } } sẽ thắng @layer base { .btn { color: blue } }.',
    options: [
      'Để tạo lớp z-index trực quan trong CSS',
      'Để khai báo các cascade layer cho phép kiểm soát rõ ràng thứ tự specificity — giải quyết xung đột giữa style bên thứ ba, reset stylesheet, style cơ bản và style component mà không cần dùng !important',
      'Để tạo các lớp CSS Grid chồng lên nhau',
      'Để lazy load file CSS theo thứ tự',
    ],
  },
  'cs-015': {
    question:
      'Trong TailwindCSS, mục đích của tùy chọn cấu hình "safelist" là gì?',
    explanation:
      'Tailwind JIT phân tích tĩnh các file nguồn để tìm chuỗi class hoàn chỉnh. Các class động như `bg-${color}-500` không thể phát hiện được. Safelist trong tailwind.config.js đảm bảo các class đó được bao gồm: safelist: [{pattern: /bg-(red|blue)-\\d00/}]. Nếu không có, các class được xây dựng động sẽ bị loại bỏ khỏi bản build production.',
    options: [
      'Để liệt kê các class cần loại bỏ khỏi bundle cuối cùng',
      'Để đảm bảo các tên class được xây dựng động (như "text-" + color) được bao gồm trong bản build cuối, vì JIT không thể quét phép nối chuỗi',
      'Để whitelist URL CDN bên ngoài cho việc tải font',
      'Để liệt kê các component cần bỏ qua CSS reset của Tailwind',
    ],
  },
  'cs-016': {
    question:
      'CSS View Transitions API là gì và nó liên quan đến routing frontend như thế nào?',
    explanation:
      'View Transitions API: document.startViewTransition(() => updateDOM()) chụp trạng thái cũ, cập nhật DOM, sau đó tạo hiệu ứng chuyển đổi giữa ảnh chụp cũ và mới bằng pseudo-element ::view-transition-old và ::view-transition-new. Next.js và React Router v7 đang tích hợp tính năng này cho chuyển trang mượt mà. Cross-document View Transitions (@view-transition trong CSS) cho phép chuyển trang MPA mà không cần JS.',
    options: [
      'Một thư viện animation CSS cho hiệu ứng kích hoạt khi cuộn',
      'Một API trình duyệt (document.startViewTransition()) chụp ảnh trước/sau của thay đổi DOM và tạo hiệu ứng chuyển đổi bằng CSS, cho phép chuyển trang mượt mà trong MPA và SPA mà không cần thư viện animation JavaScript',
      'Một thuộc tính CSS mới để định nghĩa thời lượng transition',
      'Một tính năng Chrome DevTools để xem trước animation CSS',
    ],
  },
  'cs-017': {
    question:
      'Thay đổi kiến trúc quan trọng nhất của Tailwind CSS v4 so với v3 là gì?',
    explanation:
      'Tailwind v4 (2025) thay đổi lớn: directive @theme trong CSS thay thế tailwind.config.js cho design token; engine Rust hiệu suất cao mới qua Lightning CSS thay thế pipeline Node.js; cấu hình CSS-first; tự động phát hiện nội dung mà không cần cấu hình content: [...]; API @variant và @utility mới; hỗ trợ CSS nesting và container query đầy đủ.',
    options: [
      'Nó bỏ chế độ JIT để chuyển sang utility được sinh sẵn',
      'Cấu hình chuyển từ tailwind.config.js sang CSS thông qua directive @theme, được xây dựng trên engine Rust mới (Lightning CSS), và plugin PostCSS không còn bắt buộc cho hầu hết cài đặt',
      'Tailwind v4 loại bỏ hỗ trợ giá trị tùy ý như w-[347px]',
      'v4 yêu cầu React và không hoạt động với các framework khác',
    ],
  },
  'cs-018': {
    question:
      'Tính đến 2025, CSS có thể tạo hiệu ứng chuyển đổi gốc cho các thuộc tính rời rạc như `display: none` sang `display: block` bằng `transition-behavior: allow-discrete` kết hợp với `@starting-style`.',
    explanation:
      'CSS hiện đại (Chrome 117+, Safari 17.4+, Firefox 129+) hỗ trợ `transition-behavior: allow-discrete`, cho phép chuyển đổi các thuộc tính rời rạc như `display` và `content-visibility`. Kết hợp với `@starting-style` (để định nghĩa trạng thái ban đầu), bạn có thể tạo hiệu ứng cho phần tử xuất hiện/biến mất khỏi DOM mà không cần JavaScript. Trước đây, chỉ các giá trị có thể nội suy (số/màu sắc) mới có thể được chuyển đổi.',
  },
  'cs-019': {
    question: 'Thuộc tính CSS `position: sticky` làm gì?',
    explanation:
      'position: sticky là sự kết hợp giữa relative và fixed. Nó cuộn bình thường cho đến khi chạm ngưỡng được chỉ định (ví dụ: top: 0), sau đó "dính" vào vị trí đó trong khi vẫn nằm trong giới hạn container cha. Phần tử sticky sẽ hết dính khi container cha cuộn ra khỏi tầm nhìn. Ứng dụng phổ biến: sticky header bảng và thanh điều hướng.',
    options: [
      'Định vị phần tử tương đối so với tổ tiên được định vị gần nhất',
      'Giữ phần tử cố định trên viewport mọi lúc',
      'Làm phần tử dính trong container cuộn: hoạt động như relative cho đến khi đạt ngưỡng (top/left), sau đó hoạt động như fixed trong container cha',
      'Ngăn phần tử cuộn cùng trang',
    ],
  },
  'cs-020': {
    question:
      'Mục đích của CSS logical properties như margin-inline-start thay vì margin-left là gì?',
    explanation:
      'CSS Logical Properties sử dụng hướng tương đối theo luồng (inline-start/end, block-start/end) thay vì hướng vật lý (left/right/top/bottom). Điều này làm component tự động tương thích RTL: một card với margin-inline-start: 1rem hoạt động đúng trong cả tiếng Anh (LTR) và tiếng Ả Rập/Do Thái (RTL) mà không cần style theo hướng cụ thể.',
    options: [
      'Chúng là bí danh ngắn hơn cho thuộc tính vật lý',
      'Chúng thích ứng theo hướng viết: margin-inline-start tương ứng margin-left trong LTR và margin-right trong RTL, cho phép bố cục tự động hỗ trợ nhiều hướng văn bản mà không cần ghi đè CSS theo hướng',
      'Chúng cho phép animation CSS trên giá trị margin',
      'Chúng chỉ hoạt động với bố cục CSS Grid',
    ],
  },
  'cs-021': {
    question:
      'Bố cục CSS Grid này có bug khiến các phần tử bị tràn. Hãy xác định lỗi.',
    answer:
      '.sidebar có width: 250px ghi đè track grid 200px, khiến nó tràn vào các ô liền kề.',
    explanation:
      'Trong CSS Grid, đặt width cố định trên grid item có thể phá vỡ bố cục grid. Chiều rộng track grid (200px) định nghĩa chiều rộng cột, nhưng width cố định trên phần tử tạo ra tràn hoặc làm hành vi track grid co lại không đoán trước. Xóa width: 250px khỏi .sidebar và để track grid kiểm soát kích thước. Sử dụng minmax() trên cột nếu cần kích thước linh hoạt.',
  },
  'cs-022': {
    question:
      'Đặc tả CSS Anchor Positioning là gì và nó giải quyết vấn đề gì?',
    explanation:
      'CSS Anchor Positioning (Baseline 2024) cho phép: anchor-name: --btn trên phần tử tham chiếu; position-anchor: --btn và inset-area: block-end trên phần tử nổi. Trình duyệt xử lý tránh tràn với position-try-fallbacks. Điều này thay thế Floating UI/Popper.js cho hầu hết trường hợp sử dụng tooltip/dropdown. Chrome 125+, giờ có trong Firefox và Safari.',
    options: [
      'Nó là bí danh cho position: fixed với anchor top/left',
      'Một tính năng CSS mới cho phép các phần tử nổi/được định vị (như tooltip, dropdown, popover) tự định vị tương đối với phần tử anchor ở bất kỳ đâu trong DOM, mà không cần tính toán bố cục bằng JavaScript',
      'Nó neo phần tử vào vị trí cuộn cho hiệu ứng parallax',
      'Nó là triển khai CSS của liên kết anchor HTML',
    ],
  },
  'cs-023': {
    question:
      'Trong TailwindCSS v4, variant `dark:` sử dụng chiến lược `selector` (class `.dark`) theo mặc định thay vì media query `prefers-color-scheme`.',
    explanation:
      'Tailwind v3 mặc định dùng @media (prefers-color-scheme: dark). Tailwind v4 đổi mặc định sang chiến lược selector, áp dụng style dark khi class `.dark` có mặt trên phần tử cha. Điều này cho nhiều quyền kiểm soát hơn (ví dụ: toggle của người dùng). Bạn vẫn có thể chọn chiến lược media query qua cấu hình.',
  },
  'cs-024': {
    question:
      'Thứ tự specificity của các bộ chọn này từ cao đến thấp là gì?',
    answer:
      'A > D = B > C — #header .nav a:hover (1,2,1) > [data-active] và .nav-link (0,1,0) > a (0,0,1)',
    explanation:
      'Specificity được tính theo (ID, Class/Thuộc tính/Pseudo-class, Phần tử). A: 1 ID + 1 class + 1 phần tử + 1 pseudo-class = (1,2,1). B: 1 class = (0,1,0). C: 1 phần tử = (0,0,1). D: 1 thuộc tính = (0,1,0). Vậy A thắng rõ ràng. B và D hòa. C là thấp nhất. Trường hợp hòa được giải quyết theo thứ tự nguồn.',
  },
  'cs-025': {
    question:
      'Sự khác biệt giữa `will-change: transform` và việc thực sự áp dụng `transform: translateZ(0)` để tăng tốc GPU là gì?',
    explanation:
      'Cả hai đều đẩy phần tử lên lớp compositor GPU để animation mượt mà. will-change là API chính thức: nó thông báo trước cho trình duyệt để chuẩn bị. translateZ(0) là mẹo cũ hoạt động nhưng lãng phí bộ nhớ GPU nếu áp dụng rộng rãi. Lạm dụng cả hai đều ảnh hưởng hiệu suất do cạn kiệt bộ nhớ GPU và tăng độ phức tạp vẽ. Nên áp dụng ngay trước animation, gỡ bỏ sau đó.',
    options: [
      'Chúng giống hệt nhau, không có khác biệt thực tế',
      'will-change gợi ý cho trình duyệt đẩy phần tử lên lớp compositor trước khi animation bắt đầu; translateZ(0) là "mẹo" ép tạo lớp ngay lập tức. will-change được ưa thích hơn vì tránh tạo lớp không cần thiết cho đến khi cần, và nên được gỡ bỏ sau khi sử dụng.',
      'will-change chỉ hoạt động cho opacity; translateZ hoạt động cho tất cả transform',
      'translateZ(0) đã bị deprecated và thay bằng will-change',
    ],
  },
  'cs-026': {
    question:
      'Container query này làm gì và khi nào style được áp dụng?',
    answer:
      '.card-title nhận font-size: 1.5rem khi container .card-wrapper rộng 400px trở lên — bất kể chiều rộng viewport.',
    explanation:
      'container-type: inline-size thiết lập ngữ cảnh containment dựa trên chiều inline (chiều rộng) của phần tử. Quy tắc @container card (min-width: 400px) được áp dụng khi container có tên đó rộng ít nhất 400px. Điều này cho phép card đặt trong sidebar 300px (text nhỏ) hoặc khu vực chính 600px (text lớn) mà không cần JavaScript và không cần media query dựa trên viewport.',
  },
  'cs-027': {
    question:
      'CSS nesting gốc (không cần Sass/PostCSS) giờ đã được hỗ trợ trên tất cả trình duyệt chính kể từ 2024.',
    explanation:
      'CSS nesting gốc đạt baseline availability vào 2024, được hỗ trợ trên Chrome 112+, Firefox 117+, Safari 16.5+. Cú pháp: .parent { color: red; & .child { color: blue } &:hover { opacity: 0.8 } }. Ký tự & bắt buộc khi lồng bộ chọn thẻ hoặc combinator. Plugin PostCSS nesting vẫn có thể dùng để hỗ trợ trình duyệt cũ.',
  },
  'cs-028': {
    question:
      ':has() là pseudo-class "quan hệ" có nghĩa gì và cho ví dụ thực tế về xác thực form.',
    explanation:
      ':has() được gọi là quan hệ vì nó truy vấn mối quan hệ — phần tử này CÓ con/cháu khớp X không? Ví dụ thực tế: form:has(input:invalid) { border: 2px solid red } định kiểu form khi có input không hợp lệ. label:has(+ input:required) { color: red } định kiểu label trước input bắt buộc. figure:has(figcaption) { padding-bottom: 0 } xóa padding khi có caption.',
    options: [
      ':has() chọn phần tử theo mối quan hệ thẻ trong cây DOM',
      ':has() khớp một phần tử nếu bất kỳ bộ chọn nào truyền làm tham số khớp tương đối với phần tử đó — cho phép form:has(input:invalid) định kiểu toàn bộ form thành đỏ khi bất kỳ input nào không hợp lệ, mà không cần JavaScript',
      ':has() là phím tắt cho nhiều bộ chọn :nth-child',
      ':has() chỉ hoạt động trên phần tử :root cho định kiểu toàn cục',
    ],
  },
  'cs-029': {
    question:
      'CSS Subgrid là gì và nó giải quyết vấn đề gì với bố cục grid lồng nhau?',
    explanation:
      'Nếu không có subgrid, một grid item đồng thời là grid container sẽ định nghĩa track độc lập riêng — các phần tử bên trong không thể căn chỉnh theo đường grid bên ngoài. Với subgrid: .card { display: grid; grid-row: subgrid } các hàng của card tham gia vào grid cha. Ứng dụng kinh điển: lưới card trong đó mỗi card có header/body/footer — subgrid đảm bảo tất cả footer card căn chỉnh cùng hàng bất kể chiều cao nội dung. Hỗ trợ Chrome 117+, Firefox 71+, Safari 16+.',
    options: [
      'Subgrid tạo grid bên trong grid item sử dụng kích thước track nhỏ hơn',
      'Subgrid cho phép grid container lồng kế thừa (tham gia vào) định nghĩa track của grid cha — giải quyết vấn đề "căn chỉnh lưới card" trong đó các phần tử bên trong grid lồng không thể căn chỉnh theo đường grid bên ngoài',
      'Subgrid là viết tắt cho grid-template với track auto',
      'Subgrid cho phép CSS Grid hoạt động bên trong flex container',
    ],
  },
  'cs-030': {
    question:
      'Thứ tự cascade trong cài đặt @layer này là gì và màu button nào thắng?',
    answer:
      'green — style không thuộc layer nào thắng tất cả style @layer, bất kể thứ tự layer. Trong các layer, components (được khai báo cuối cùng trong thứ tự @layer) sẽ là blue.',
    explanation:
      'Thứ tự @layer được xác định bởi khai báo @layer đầu tiên (@layer reset, base, components). Layer được khai báo sau thắng trong các style có layer, nên components thắng base thắng reset. Tuy nhiên, style ngoài mọi @layer được coi là layer ngầm có ưu tiên cao nhất — chúng luôn thắng style có layer. Vì vậy button { color: green } không có layer thắng tất cả.',
  },
  'cs-031': {
    question:
      'Scroll-driven animation hoạt động như thế nào trong CSS mà không cần JavaScript?',
    explanation:
      'Scroll-driven animations (Baseline 2024): @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } } áp dụng với animation-timeline: scroll() làm animation tiến triển khi bạn cuộn trang. Timeline view(): animation-timeline: view() phát animation khi phần tử vào/rời viewport. Kết hợp với animation-range: entry 0% entry 100% để kiểm soát chi tiết. Hỗ trợ Chrome 115+, Firefox 110+, Safari 18+.',
    options: [
      'Scroll-driven animations sử dụng IntersectionObserver được biên dịch nội bộ sang CSS',
      'Thuộc tính animation-timeline liên kết animation CSS với tiến trình cuộn. scroll() gắn animation với vị trí cuộn tài liệu; view() gắn với khả năng hiển thị của phần tử trong viewport — tất cả bằng CSS thuần mà không cần scroll event listener',
      'Scroll-driven animations yêu cầu lời gọi JavaScript Web Animations API (WAAPI)',
      'Chúng chỉ được hỗ trợ trong Chrome đằng sau flag',
    ],
  },
  'cs-032': {
    question:
      'Hàm màu oklch() là gì và tại sao nó được ưa thích hơn hsl() cho design system?',
    explanation:
      'HSL có vấn đề về độ sáng cảm nhận: hsl(60, 100%, 50%) vàng trông sáng hơn nhiều so với hsl(240, 100%, 50%) xanh dương cùng giá trị lightness. oklch() sử dụng mô hình đồng nhất về cảm nhận, trong đó L=70% thực sự trông cùng độ sáng qua tất cả sắc thái. Điều này rất tốt cho: tạo trạng thái hover button (giảm L 10%), tạo thang màu accessible, và theming. Tất cả trình duyệt hiện đại hỗ trợ oklch() gốc (không cần biên dịch).',
    options: [
      'oklch() chỉ là bí danh cho hsl() với thứ tự tham số khác',
      'oklch() sử dụng lightness đồng nhất về cảm nhận (L), chroma (C), và hue (H) trong không gian màu OKLab — các màu có cùng giá trị L trông sáng bằng nhau với mắt người, lý tưởng để tạo bảng màu accessible và các tint/shade nhất quán mà không có nhảy độ sáng bất ngờ',
      'oklch() chỉ dùng để định nghĩa màu HDR/wide-gamut display',
      'oklch() yêu cầu CSS preprocessor để biên dịch sang rgb() cho trình duyệt hỗ trợ',
    ],
  },
  'cs-033': {
    question: 'color-mix() tạo ra gì trong ví dụ này?',
    answer:
      'Một màu pha trộn 40% đỏ và 60% xanh dương trong không gian màu oklch — tạo ra tông tím/violet. Mệnh đề "in oklch" xác định không gian màu nào thực hiện phép nội suy.',
    explanation:
      'color-mix(in colorspace, color1 percentage, color2 percentage) pha trộn hai màu trong không gian màu chỉ định. Không gian màu ảnh hưởng đáng kể: trộn đỏ và xanh dương trong sRGB tạo tím tối đục, trong khi trộn trong oklch hoặc lab tạo tím sống động hơn, dễ chịu hơn về cảm nhận. Nếu tỷ lệ phần trăm không cộng đến 100%, phần còn lại được bù bởi màu thứ hai. Được hỗ trợ trên tất cả trình duyệt hiện đại.',
  },
  'cs-034': {
    question:
      'Directive @theme trong Tailwind CSS v4 là gì và nó thay thế tailwind.config.js như thế nào?',
    explanation:
      'Tailwind v4 là CSS-first: thay vì module.exports = { theme: { colors: { primary: "..." } } }, bạn viết @theme { --color-primary: oklch(0.5 0.2 250) } trong file CSS. Tailwind đọc các CSS custom property này và tự động sinh utility class. Token ánh xạ sang utility theo namespace: --color-* sinh color utility, --spacing-* sinh spacing utility, --font-size-* sinh text-size utility. tailwind.config.js là tùy chọn cho dự án đơn giản.',
    options: [
      '@theme là bí danh cho @media áp dụng style dựa trên sở thích người dùng',
      '@theme là CSS-at-rule trong Tailwind v4, nơi bạn định nghĩa design token dưới dạng CSS custom property trực tiếp trong file CSS. @theme { --color-primary: oklch(0.5 0.2 250); --spacing-lg: 2rem } sinh các utility tương ứng (bg-primary, p-lg) mà không cần file cấu hình JavaScript',
      '@theme import file theme dựng sẵn từ Tailwind CDN',
      '@theme chỉ cấu hình màu dark mode trong Tailwind v4',
    ],
  },
  'cs-035': {
    question:
      'position-try-fallbacks trong CSS Anchor Positioning là gì và nó xử lý tràn như thế nào?',
    explanation:
      'CSS Anchor Positioning (Chrome 125+) cho phép: .tooltip { position: absolute; position-anchor: --btn; inset-area: block-end; position-try-fallbacks: flip-block, flip-inline, flip-block flip-inline }. Trình duyệt thử từng fallback theo thứ tự: nếu đặt bên dưới bị tràn, thử bên trên (flip-block); nếu bên trái tràn, thử bên phải (flip-inline). Điều này thay thế chức năng cốt lõi của Floating UI/Popper.js tính toán vị trí tránh tràn bằng JavaScript.',
    options: [
      'position-try-fallbacks thử lại request mạng nếu file CSS không tải được',
      'position-try-fallbacks định nghĩa các chiến lược vị trí thay thế mà trình duyệt thử theo thứ tự khi phần tử được neo sẽ tràn scroll container — tự động lật tooltip từ dưới lên trên nếu không có không gian bên dưới',
      'Nó fallback về position: fixed khi phần tử anchor cuộn ra ngoài tầm nhìn',
      'position-try-fallbacks là JavaScript API cho logic anchor fallback theo chương trình',
    ],
  },
  'cs-036': {
    question:
      'CSS logical properties là gì và thuộc tính vật lý nào mà margin-block và padding-inline tương ứng trong chế độ viết ngang LTR?',
    explanation:
      'CSS Logical Properties sử dụng hướng tương đối theo luồng. Trong chế độ viết ngang LTR: trục block = dọc (top/bottom), trục inline = ngang (left/right). Vậy: margin-block = margin-top + margin-bottom, padding-inline = padding-left + padding-right. Trong chế độ viết dọc (CJK, một số bố cục RTL), block trở thành ngang và inline trở thành dọc — logical property tự động thích ứng. Viết tắt hiện đại: margin-block: 1rem 2rem (top rồi bottom).',
    options: [
      'margin-block tương ứng margin-left/right; padding-inline tương ứng padding-top/bottom',
      'margin-block tương ứng margin-top/bottom (trục block); padding-inline tương ứng padding-left/right (trục inline) trong LTR — nhưng trong chế độ viết dọc, các trục hoán đổi',
      'Logical properties chỉ ảnh hưởng căn chỉnh text, không ảnh hưởng box model spacing',
      'margin-block và padding-inline không phải thuộc tính CSS hợp lệ',
    ],
  },
  'cs-037': {
    question:
      'Quy tắc CSS @scope là gì và nó khác CSS Modules trong việc giới hạn phạm vi style như thế nào?',
    explanation:
      '@scope định nghĩa gốc phạm vi và giới hạn dưới tùy chọn: @scope (.card) to (.card-footer) { p { font-size: 0.9rem } } chỉ áp dụng cho phần tử <p> nằm giữa .card và .card-footer trong cây DOM. Điều này cho phép phạm vi hình donut (loại trừ cây con). Khác CSS Modules (đổi tên class khi build), @scope là CSS thuần trong runtime — không cần công cụ. Hỗ trợ Chrome 118+, Safari 17.4+, Firefox 128+.',
    options: [
      '@scope là công cụ build-time như CSS Modules sinh tên class có phạm vi',
      '@scope là at-rule CSS gốc giới hạn phạm vi quy tắc style vào cây con DOM cụ thể: @scope (.card) { p { color: blue } } chỉ định kiểu <p> bên trong phần tử .card, không cần đổi tên class. Khác CSS Modules, nó hoạt động trong CSS thuần mà không cần bước build.',
      '@scope chỉ hoạt động với component Shadow DOM',
      '@scope đã bị xóa khỏi đặc tả CSS trước khi đến trình duyệt',
    ],
  },
  'cs-038': {
    question:
      'View Transitions API xử lý việc đặt tên phần tử chuyển đổi như thế nào và thuộc tính view-transition-name là gì?',
    explanation:
      'view-transition-name: hero-image trên một phần tử nói cho trình duyệt chụp phần tử đó riêng biệt khỏi phần còn lại của trang trong document.startViewTransition(). Trình duyệt sinh pseudo-element ::view-transition-old(hero-image) (ảnh chụp trước) và ::view-transition-new(hero-image) (ảnh chụp sau), tự động tạo hiệu ứng từ vị trí/kích thước cũ sang mới — cho phép mẫu shared-element/hero animation. Tên phải là duy nhất trên mỗi frame.',
    options: [
      'Trình duyệt tự phát hiện phần tử khớp giữa trạng thái cũ và mới bằng cách so sánh tên class',
      'view-transition-name gán định danh duy nhất cho phần tử để trình duyệt chụp riêng và tạo pseudo-element ::view-transition-old(name) và ::view-transition-new(name) — cho phép animation chuyển đổi từng phần tử như shared-element transition giữa các trang',
      'view-transition-name chỉ hợp lệ trên phần tử gốc <html>',
      'Thuộc tính chỉ chấp nhận các giá trị định nghĩa sẵn: slide, fade, scale, hoặc flip',
    ],
  },
  'cs-039': {
    question:
      'Trong Tailwind v4, bạn định nghĩa màu tùy chỉnh bằng cấu hình CSS-first mới như thế nào?',
    explanation:
      'Cách tiếp cận CSS-first của Tailwind v4: định nghĩa design token tùy chỉnh dưới dạng CSS custom property bên trong @theme { }. Tiền tố namespace --color- nói cho Tailwind sinh color utility. --color-brand: #0ea5e9 tự động sinh bg-brand, text-brand, border-brand, ring-brand, shadow-brand, fill-brand, stroke-brand utility. Tương tự --spacing-*, --font-size-*, --border-radius-* sinh các utility class tương ứng.',
    options: [
      'Thêm vào phần extend.colors trong tailwind.config.js',
      'Thêm @theme { --color-brand: #0ea5e9; } trong file CSS — điều này tự động sinh bg-brand, text-brand, border-brand utility',
      'Sử dụng directive @apply với giá trị hex: @apply bg-[#0ea5e9]',
      'Import màu từ file JavaScript theme bằng @config',
    ],
  },
  'cs-040': {
    question:
      'Container query này không áp dụng style. Tìm bug.',
    answer:
      'Thiếu container-type trên .sidebar. Nếu không có container-type, phần tử không phải là query container và các quy tắc @container nhắm đến nó sẽ bị bỏ qua.',
    explanation:
      'Để thiết lập ngữ cảnh containment, bạn phải đặt container-type: inline-size (cho truy vấn chiều rộng), container-type: size (cho truy vấn chiều rộng và chiều cao), hoặc viết tắt container: sidebar / inline-size. Chỉ container-name không làm phần tử trở thành container. Sửa: thêm container-type: inline-size cho .sidebar. Viết tắt container có thể kết hợp cả hai: container: sidebar / inline-size.',
  },
  'cs-041': {
    question:
      'CSS nesting gốc này tạo ra gì — nó có hoạt động không và nó định kiểu gì?',
    answer:
      'CSS nesting gốc hợp lệ. Định kiểu: .nav flex container với gap. .link bên trong .nav màu blue. .link:hover bên trong .nav màu darkblue với underline. Con trực tiếp .active của .nav là bold.',
    explanation:
      'CSS nesting gốc (Chrome 112+, Firefox 117+, Safari 16.5+) hỗ trợ: bộ chọn class trần (.link lồng trực tiếp mà không cần &) cho chọn descendant — tính năng này được thêm sau; combinator & cho pseudo-class và khi cần tham chiếu cha rõ ràng; và combinator như & > .active cho bộ chọn con. Ký tự & đại diện cho bộ chọn cha (.nav trong trường hợp này). Tất cả các mẫu này là CSS nesting hiện đại hợp lệ.',
  },
  'cs-042': {
    question:
      'inset-area thay thế điều gì trong đặc tả CSS Anchor Positioning và nó chấp nhận giá trị gì?',
    explanation:
      'inset-area (trước đây là anchor-area trong bản nháp cũ) là cơ chế định vị chính cho CSS Anchor Positioning. Thay vì tính toán top: calc(anchor(bottom) + 8px) thủ công, inset-area: block-end đặt phần tử bên dưới anchor; inset-area: inline-end đặt nó bên phải. Giá trị là mô tả 1-3 từ về vị trí trên lưới 3x3 xung quanh phần tử anchor. Kết hợp với position-try-fallbacks để tự động xử lý tràn.',
    options: [
      'inset-area thay thế viết tắt z-index cho định vị 3D',
      'inset-area là phần của CSS Anchor Positioning thay thế tính toán top/left/right/bottom thủ công — nó chấp nhận giá trị vị trí lưới logic (block-start, block-end, inline-start, inline-end, center, span-all, v.v.) để khai báo vị trí phần tử được neo tương đối với anchor',
      'inset-area là viết tắt cho các logical property inset-block và inset-inline',
      'inset-area thiết lập vùng vẽ cho ảnh nền',
    ],
  },
  'cs-043': {
    question:
      'Các thay đổi chính trong Tailwind CSS v4 gây phá vỡ tương thích với dự án v3 là gì?',
    explanation:
      'Tailwind v4 có thay đổi phá vỡ đáng kể: cấu hình là CSS-first qua @theme (dù directive @config cung cấp migration dần dần). Đổi tên utility: shadow-sm → shadow-xs, shadow → shadow-sm. Chiều rộng ring mặc định đổi từ 3px sang 1px. @apply với modifier thay đổi. Cài đặt plugin PostCSS được đơn giản hóa. Có hướng dẫn nâng cấp và codemod. Cho dự án hiện tại, dùng @config "./tailwind.config.js" bên trong entry point CSS trong quá trình migration.',
    options: [
      'Tailwind v4 hoàn toàn tương thích ngược — không có thay đổi phá vỡ',
      'Thay đổi phá vỡ: tailwind.config.js được thay bằng @theme trong CSS (dù @config có thể import config cũ); thay đổi cấu hình PostCSS; xóa utility deprecated; đổi tên class cho một số utility (shadow-sm giờ là shadow-xs); @apply không còn hỗ trợ giá trị tùy ý; và màu border mặc định đổi từ gray-200 sang currentColor',
      'Tailwind v4 yêu cầu chuyển từ npm sang Bun cho công cụ build',
      'v4 bỏ hỗ trợ React và chỉ hoạt động với HTML render phía server',
    ],
  },
  'cs-044': {
    question:
      'Tương đương block và inline của CSS logical properties cho các góc border-radius truyền thống top/right/bottom/left là gì?',
    explanation:
      'CSS logical properties mở rộng sang border-radius: border-start-start-radius = top-left trong LTR ngang. border-start-end-radius = top-right trong LTR. border-end-start-radius = bottom-left trong LTR. border-end-end-radius = bottom-right trong LTR. Trong RTL hoặc chế độ viết dọc, chúng lật tương ứng. Hữu ích cho component như tab hoặc breadcrumb cần một góc bo tròn chuyển bên trong bố cục RTL.',
    options: [
      'border-top-left-radius trở thành border-block-start-inline-start-radius',
      'CSS logical properties không áp dụng cho border-radius',
      'Các góc là: border-start-start-radius (top-left trong LTR), border-start-end-radius (top-right), border-end-start-radius (bottom-left), border-end-end-radius (bottom-right)',
      'Logical border-radius sử dụng viết tắt border-radius-logical',
    ],
  },
  'cs-045': {
    question:
      'Scroll-driven animation tương tác với accessibility và prefers-reduced-motion như thế nào?',
    explanation:
      'Dù do người dùng khởi tạo, scroll-driven animation có thể gây vấn đề tiền đình/say chuyển động cho một số người dùng. Thực hành tốt: @media (prefers-reduced-motion: no-preference) { .element { animation: fadeIn linear; animation-timeline: scroll() } }. Tiêu chí WCAG 2.3.3 (AAA) khuyến nghị người dùng có thể tắt chuyển động. Đặc biệt với hiệu ứng parallax liên kết cuộn, việc tắt giảm chuyển động được khuyến nghị mạnh. Sử dụng thay đổi opacity/visibility thay cho chuyển động làm fallback giảm chuyển động.',
    options: [
      'Scroll-driven animation được miễn prefers-reduced-motion vì chúng do người dùng kiểm soát',
      'Scroll-driven animation vẫn nên tôn trọng prefers-reduced-motion. Dù cuộn do người dùng kiểm soát có vẻ an toàn, rối loạn tiền đình có thể bị kích hoạt bởi nội dung chuyển động khi cuộn. Bọc scroll-driven animation trong @media (prefers-reduced-motion: no-preference) hoặc tắt animation-timeline cho người dùng giảm chuyển động',
      'Trình duyệt tự động tắt tất cả animation bao gồm scroll-driven khi prefers-reduced-motion được bật',
      'prefers-reduced-motion chỉ ảnh hưởng thuộc tính CSS transition và animation, không ảnh hưởng animation-timeline',
    ],
  },
}
