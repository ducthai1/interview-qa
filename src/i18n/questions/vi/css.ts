import type { QuestionTranslationMap } from '../types'

export const cssVi: QuestionTranslationMap = {
  // ─── FLEXBOX ────────────────────────────────────────────────────────────────
  'css-001': {
    question:
      'Giá trị nào của `justify-content` phân bố các flex item với khoảng cách đều nhau giữa chúng (không có khoảng cách ở hai đầu)?',
    explanation:
      '`space-between` đặt item đầu tiên ở cạnh bắt đầu, item cuối ở cạnh kết thúc, và phân bố đều khoảng trống còn lại giữa các item. `space-around` thêm nửa đơn vị khoảng cách ở hai đầu; `space-evenly` thêm khoảng cách bằng nhau ở mọi nơi kể cả hai đầu.',
    options: ['space-around', 'space-evenly', 'space-between', 'center'],
  },
  'css-002': {
    question:
      'Đặt `flex-shrink: 0` cho một flex item sẽ ngăn nó co lại dưới kích thước `flex-basis` khi container quá nhỏ.',
    explanation:
      '`flex-shrink` kiểm soát mức độ co lại của flex item so với các item khác khi không đủ không gian. Giá trị `0` vô hiệu hóa hoàn toàn việc co lại, nên item sẽ tràn ra ngoài container thay vì bị nén.',
  },
  'css-003': {
    question:
      'Các giá trị computed của `flex-grow`, `flex-shrink` và `flex-basis` là gì khi áp dụng `flex: 2`?',
    explanation:
      'Cú pháp viết tắt `flex: 2` với một giá trị sẽ đặt `flex-grow: 2`, và reset `flex-shrink` về `1` và `flex-basis` về `0%`. Điều này khác với việc viết riêng `flex-grow: 2`, vì khi đó `flex-basis` vẫn giữ giá trị mặc định là `auto`.',
  },
  'css-004': {
    question:
      'Trong một flex container với `flex-direction: row`, thuộc tính nào kiểm soát khoảng cách dọc theo trục dọc cho từng item riêng lẻ?',
    explanation:
      '`align-self` ghi đè giá trị `align-items` của container cho một flex item đơn lẻ, kiểm soát căn chỉnh của nó trên cross axis (trục dọc khi `flex-direction: row`). `justify-self` không có tác dụng trong flexbox. `align-content` áp dụng cho flex container nhiều dòng, không phải item riêng lẻ.',
    options: ['justify-self', 'align-self', 'place-self', 'align-content'],
  },
  'css-005': {
    question: '`order: -1` làm gì với một flex item?',
    explanation:
      'Thuộc tính `order` kiểm soát thứ tự hiển thị của các flex (và grid) item mà không thay đổi thứ tự DOM. Giá trị mặc định là `0`. Item có giá trị thấp hơn xuất hiện trước, nên `order: -1` đưa item ra trước tất cả item có `order: 0` trở lên. Thứ tự DOM vẫn được giữ nguyên cho accessibility và thứ tự tab.',
    options: [
      'Loại bỏ item khỏi luồng flex',
      'Đưa item lên trước các item có order mặc định là 0 về mặt hiển thị',
      'Đảo ngược hướng flex',
      'Đặt item ở vị trí cuối cùng trong thứ tự hiển thị',
    ],
  },
  'css-006': {
    question:
      'Các flex item không wrap dù đã đặt `flex-wrap: wrap`. Tìm và sửa lỗi.',
    explanation:
      'Khi flex container không có chiều rộng bị giới hạn, nó có thể mở rộng để chứa tất cả item trên một dòng (ví dụ khi nằm trong ngữ cảnh absolutely-positioned hoặc inline). Đảm bảo container có chiều rộng xác định hoặc dựa trên phần trăm cho phép trình duyệt tính toán khi nào cần wrap. Ngoài ra, `flex-shrink: 0` trong shorthand ngăn item co lại dưới `flex-basis: 200px`, kích hoạt wrap đúng cách khi container bị giới hạn.',
  },

  // ─── CSS GRID ──────────────────────────────────────────────────────────────
  'css-007': {
    question:
      'Sự khác nhau giữa `auto-fill` và `auto-fit` trong `grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))` là gì?',
    explanation:
      'Cả `auto-fill` và `auto-fit` đều tạo nhiều track nhất có thể. Sự khác biệt xuất hiện khi có ít item hơn số track: `auto-fill` giữ lại các track trống (bảo toàn không gian của chúng), trong khi `auto-fit` thu gọn track trống về chiều rộng bằng không, cho phép các item có nội dung giãn ra để lấp đầy hàng nhờ `1fr`.',
    options: [
      'Chúng giống hệt nhau; cả hai đều lấp đầy không gian có sẵn với nhiều track nhất có thể',
      '`auto-fill` giữ track trống, trong khi `auto-fit` thu gọn chúng để các track có nội dung giãn ra chiếm không gian',
      '`auto-fit` tạo nhiều track hơn `auto-fill`',
      '`auto-fill` chỉ hoạt động với named grid area',
    ],
  },
  'css-008': {
    question:
      'Grid này tạo bao nhiêu cột, và mỗi cột rộng bao nhiêu với container 700px?',
    explanation:
      '`minmax(200px, 1fr)` nghĩa là mỗi track tối thiểu 200px. Trong container 700px với hai gap 20px (3 cột = 2 gap): 700 - 40 = 660px có sẵn. 660 / 200 = 3.3, nên 3 cột vừa. Giá trị tối đa `1fr` phân bố đều không gian còn lại: 660 / 3 = 220px mỗi cột.',
  },
  'css-009': {
    question: '`grid-area: header` làm gì khi được sử dụng trên một grid item?',
    explanation:
      '`grid-area` gán một item vào vùng được đặt tên đã định nghĩa qua `grid-template-areas` trên container. Đây là shorthand cho `grid-row-start / grid-column-start / grid-row-end / grid-column-end`. Khi truyền một identifier đơn lẻ, nó tham chiếu đến named area trong `grid-template-areas`.',
    options: [
      'Tạo một grid line được đặt tên là "header"',
      'Gán item vào một named grid area đã được định nghĩa trước trong `grid-template-areas`',
      'Áp dụng một CSS animation tên "header"',
      'Đặt thuộc tính `id` của item thành "header"',
    ],
  },
  'css-010': {
    question: 'CSS Subgrid giải quyết vấn đề gì mà nested grid không thể?',
    explanation:
      'Với nested grid thông thường, grid bên trong tạo hệ thống track độc lập riêng. `subgrid` trên `grid-template-rows` hoặc `grid-template-columns` cho phép grid lồng nhau kế thừa và tham gia vào định nghĩa track của grid cha, cho phép căn chỉnh xuyên component (ví dụ: các card component căn chỉnh theo grid cấp trang). Được hỗ trợ trên tất cả trình duyệt chính từ năm 2023.',
    options: [
      'Subgrid cho phép item sử dụng kích thước track do JavaScript điều khiển',
      'Subgrid cho phép grid item lồng nhau tham gia vào việc định kích thước track của grid cha, căn chỉnh xuyên nhiều cấp lồng nhau',
      'Subgrid cho phép biến đổi phối cảnh 3D trên grid track',
      'Subgrid chỉ đơn giản là bí danh cho `display: grid` với các thuộc tính kế thừa',
    ],
  },
  'css-011': {
    question:
      'Viết layout CSS grid cho bố cục "Holy Grail" cổ điển: header và footer toàn chiều rộng, với ba cột cùng chiều cao (sidebar trái, main, sidebar phải) ở giữa. Cột main chiếm toàn bộ không gian ngang còn lại.',
    explanation:
      '`grid-template-areas` cung cấp bản đồ ASCII trực quan của layout. `grid-template-columns: 200px 1fr 200px` tạo sidebar chiều rộng cố định và cột main linh hoạt. `grid-template-rows: auto 1fr auto` cho phép hàng giữa giãn ra để lấp đầy chiều cao viewport còn lại nhờ `min-height: 100vh` trên container.',
  },

  // ─── CSS SELECTORS & SPECIFICITY ───────────────────────────────────────────
  'css-012': {
    question: 'Specificity của selector `#nav .item:hover` là bao nhiêu?',
    explanation:
      'Specificity được tính theo (ID, class/attribute/pseudo-class, element/pseudo-element). `#nav` = 1 ID, `.item` = 1 class, `:hover` = 1 pseudo-class → (1, 2, 0). Xem lại: `#nav` đóng góp (1,0,0), `.item` đóng góp (0,1,0), `:hover` đóng góp (0,1,0). Tổng: (1, 2, 0).',
    options: ['(0, 2, 0)', '(1, 1, 0)', '(1, 2, 0)', '(0, 1, 1)'],
  },
  'css-013': {
    question:
      'Sự khác biệt chính giữa `:is()` và `:where()` về mặt specificity là gì?',
    explanation:
      '`:is(h1, .title, #hero)` lấy specificity của đối số có specificity cao nhất — trong trường hợp này `#hero` cho nó (1,0,0). `:where(h1, .title, #hero)` luôn có specificity (0,0,0) bất kể đối số của nó, khiến nó lý tưởng cho các style cơ sở dễ bị ghi đè.',
    options: [
      '`:is()` lấy specificity cao nhất của các đối số; `:where()` luôn có specificity bằng không',
      '`:where()` lấy specificity cao nhất; `:is()` có specificity bằng không',
      'Cả hai đều có specificity bằng không',
      'Cả hai đều lấy specificity cao nhất của các đối số',
    ],
  },
  'css-014': {
    question:
      'Pseudo-class quan hệ `:has()` được hoàn thiện trong CSS Selectors Level 4. Cách sử dụng `:has()` nào sau đây là đúng?',
    explanation:
      '`:has()` là pseudo-class quan hệ chọn các phần tử dựa trên con cháu hoặc anh chị em kế tiếp. Cả ba ví dụ đều hợp lệ: (A) sử dụng subsequent-sibling combinator bên trong `:has()`, (B) sử dụng child combinator, (C) sử dụng pseudo-class bên trong `:has()`. Tất cả đều được hỗ trợ trên trình duyệt hiện đại (Chrome 105+, Safari 15.4+, Firefox 121+).',
    options: [
      '`p:has(+ img)` — chọn `<p>` ngay trước một `<img>`',
      '`div:has(> p)` — chọn `<div>` chứa ít nhất một `<p>` con trực tiếp',
      '`form:has(:invalid)` — chọn `<form>` chứa ít nhất một input không hợp lệ',
      'Tất cả đều là cách sử dụng hợp lệ của `:has()`',
    ],
  },
  'css-015': {
    question:
      'Pseudo-element `::before` trong CSS tạo một phần tử mới được chèn vào như con đầu tiên của phần tử được chọn trong DOM.',
    explanation:
      '`::before` chèn nội dung sinh ra (generated content) về mặt hiển thị như con đầu tiên, nhưng KHÔNG sửa đổi DOM. Nó chỉ tồn tại trong cây render CSS. Nó không thể truy cập bằng `querySelector` của JavaScript, có hỗ trợ accessibility hạn chế, và cần `content: ""` để được render. Tương tự `::after` chèn sau nội dung của phần tử.',
  },
  'css-016': {
    question: 'Combinator `div > p` đại diện cho loại combinator nào?',
    explanation:
      '`>` là child combinator. Nó chọn các phần tử là con trực tiếp (ngay lập tức) của phần tử cha được chỉ định. `div p` (dấu cách) là descendant combinator. `div + p` là adjacent sibling. `div ~ p` là general sibling.',
    options: [
      'Descendant combinator — tất cả `<p>` bên trong `<div>`',
      'Adjacent sibling combinator — `<p>` ngay sau `<div>`',
      'Child combinator — các phần tử `<p>` con trực tiếp của `<div>`',
      'General sibling combinator — tất cả anh chị em `<p>` sau `<div>`',
    ],
  },

  // ─── BOX MODEL ─────────────────────────────────────────────────────────────
  'css-017': {
    question:
      'Với `box-sizing: border-box`, thuộc tính `width` định nghĩa điều gì?',
    explanation:
      '`box-sizing: border-box` làm cho `width` và `height` bao gồm content, padding và border — nhưng KHÔNG bao gồm margin. Đây là mô hình trực quan và được đặt toàn cục qua `*, *::before, *::after { box-sizing: border-box }` trong hầu hết CSS reset hiện đại.',
    options: [
      'Chiều rộng chỉ của vùng nội dung',
      'Chiều rộng vùng nội dung cộng padding',
      'Chiều rộng vùng nội dung cộng padding cộng border',
      'Chiều rộng vùng nội dung cộng padding cộng border cộng margin',
    ],
  },
  'css-018': {
    question:
      'Tổng khoảng cách dọc giữa hai đoạn văn trong ví dụ này là bao nhiêu?',
    explanation:
      'Các sibling block-level liền kề có hiện tượng margin collapsing: hai margin dọc hợp nhất thành một margin bằng giá trị lớn hơn. Margin bottom 30px và margin top 20px gộp lại thành 30px, không phải 50px. Collapsing KHÔNG xảy ra với flex/grid children, hoặc khi border/padding ngăn cách các margin.',
  },
  'css-019': {
    question:
      'Margin và padding đều ảnh hưởng đến vùng có thể click/tương tác của một phần tử.',
    explanation:
      'Padding nằm bên trong border của phần tử và là một phần của background và vùng tương tác. Margin nằm bên ngoài border và là khoảng trống trong suốt — nó không nhận sự kiện click (chỉ vùng content + padding mới nhận, với `pointer-events` mặc định).',
  },

  // ─── POSITIONING & STACKING ─────────────────────────────────────────────────
  'css-020': {
    question:
      'Kiểu positioning nào loại bỏ phần tử khỏi luồng tài liệu bình thường và định vị nó tương đối với ancestor positioned gần nhất?',
    explanation:
      '`position: absolute` loại bỏ phần tử khỏi luồng bình thường. Nó được định vị tương đối với ancestor gần nhất có `position` khác `static` (tức là `relative`, `absolute`, `fixed`, hoặc `sticky`). Nếu không có, nó được định vị tương đối với initial containing block (viewport).',
    options: ['relative', 'fixed', 'absolute', 'sticky'],
  },
  'css-021': {
    question:
      '`position: sticky` cần ít nhất một giá trị ngưỡng (`top`, `bottom`, `left`, hoặc `right`) để hoạt động đúng.',
    explanation:
      'Nếu không có ngưỡng (ví dụ `top: 0`), `position: sticky` hoạt động giống `position: relative`. Ngưỡng chỉ định khi nào phần tử "dính" — nó dính khi vị trí cuộn khiến phần tử vượt qua offset đó từ cạnh viewport. Ngoài ra, phần tử sticky ngừng dính khi cạnh scroll container của nó chạm đến nó.',
  },
  'css-022': {
    question:
      'Thuộc tính CSS nào sau đây tạo một stacking context mới?',
    explanation:
      'Stacking context mới được tạo bởi nhiều thuộc tính bao gồm: `position` với giá trị `z-index` khác `auto`, `opacity` nhỏ hơn 1, `transform`, `filter`, `will-change`, `isolation: isolate`, `mix-blend-mode` khác `normal`, và nhiều thuộc tính khác. `opacity: 0.99` (bất kỳ giá trị nào < 1) tạo stacking context mới.',
    options: [
      '`position: relative` không có `z-index`',
      '`opacity: 0.99`',
      '`display: block`',
      '`margin: auto`',
    ],
  },
  'css-023': {
    question:
      'Một tooltip có `z-index: 9999` vẫn hiển thị phía sau phần tử khác có `z-index: 1`. Tìm và sửa nguyên nhân gốc.',
    explanation:
      '`transform: translateZ(0)` trên `.card` tạo stacking context mới. Bên trong stacking context, giá trị `z-index` chỉ cạnh tranh trong context đó — toàn bộ context `.card` sau đó được so sánh với `.overlay` như một đơn vị. Vì `.card` không có `z-index` rõ ràng (hoặc `z-index: auto`), nó có thể được vẽ trước `.overlay`. Cách sửa là loại bỏ transform khỏi `.card`, hoặc di chuyển tooltip ra ngoài `.card` vào document root, hoặc cho `.card` một `z-index` cao hơn `.overlay`.',
  },

  // ─── CSS CUSTOM PROPERTIES ──────────────────────────────────────────────────
  'css-024': {
    question: 'Màu nào được áp dụng cho `.child` trong ví dụ này?',
    explanation:
      'CSS custom property kế thừa qua DOM. `.child` kế thừa `--color: red` từ `.parent` vì `.parent` là ancestor của nó và đặt `--color` thành `red`. Giá trị fallback `green` trong `var(--color, green)` chỉ được dùng khi biến không được định nghĩa hoặc không hợp lệ. Định nghĩa `:root` bị ghi đè bởi `.parent` trong cây con này.',
  },
  'css-025': {
    question:
      'At-rule `@property` cho phép làm gì mà CSS custom property thông thường không thể?',
    explanation:
      '`@property --my-color { syntax: "<color>"; inherits: false; initial-value: #000; }` đăng ký custom property với kiểu dữ liệu đã biết. Điều này cho phép: (1) transition/animation CSS trên chính biến đó (trình duyệt có thể nội suy giá trị có kiểu), (2) kiểm tra kiểu (giá trị không hợp lệ sẽ fall back về initial), (3) biến không kế thừa. Custom property chưa đăng ký luôn được xử lý như chuỗi.',
    options: [
      'Cho phép custom property được dùng trong media query',
      'Đăng ký custom property với kiểu dữ liệu, giá trị khởi tạo, và cờ kế thừa, cho phép animation và kiểm tra kiểu',
      'Import CSS variable từ bên ngoài từ file khác',
      'Giới hạn phạm vi custom property trong ranh giới shadow DOM',
    ],
  },
  'css-026': {
    question:
      'CSS custom property (biến) có phạm vi trong phần tử mà chúng được khai báo và không kế thừa xuống phần tử con theo mặc định.',
    explanation:
      'Theo mặc định, CSS custom property CÓ kế thừa — chúng lan truyền xuống qua DOM giống như các thuộc tính kế thừa tiêu chuẩn (ví dụ `color`, `font-size`). Để ngăn kế thừa, bạn phải sử dụng `@property` với `inherits: false`. Hành vi kế thừa này là thứ khiến chúng hữu ích cho theming: định nghĩa trên `:root`, sử dụng bất cứ đâu trong cây con.',
  },

  // ─── RESPONSIVE DESIGN ─────────────────────────────────────────────────────
  'css-027': {
    question:
      '`clamp(1rem, 2.5vw, 2rem)` trả về giá trị gì khi viewport rộng 1200px?',
    explanation:
      '`clamp(MIN, PREFERRED, MAX)` trả về PREFERRED (2.5vw = 30px tại 1200px) được giới hạn giữa MIN và MAX. Tại 1200px: 2.5vw = 30px. Nếu 1rem = 16px và 2rem = 32px, thì 30px nằm giữa 16px và 32px, nên kết quả là 30px (2.5vw). Nếu viewport là 1400px, 2.5vw = 35px > 32px (2rem), nên sẽ bị giới hạn ở 2rem.',
    options: [
      'Luôn là 1rem',
      '2rem (giá trị tối đa, vì 2.5vw = 30px có thể lớn hơn 2rem)',
      'Giá trị gần nhất với 2.5vw, được giới hạn giữa 1rem và 2rem',
      '2.5vw vô điều kiện',
    ],
  },
  'css-028': {
    question:
      'Ưu điểm chính của container query (`@container`) so với media query (`@media`) cho thiết kế dựa trên component là gì?',
    explanation:
      'Media query phản hồi theo viewport. Container query (`@container`) phản hồi theo kích thước của ancestor gần nhất đã được khai báo là containment context (`container-type: inline-size`). Điều này cho phép cùng một component tự điều chỉnh dựa trên không gian được cấp (ví dụ trong sidebar so với nội dung chính), không phải viewport toàn cục — cho phép tạo component thực sự tái sử dụng và nhận biết ngữ cảnh.',
    options: [
      'Container query phản hồi theo kích thước viewport, còn media query phản hồi theo kích thước container',
      'Container query phản hồi theo kích thước của ancestor container được đặt tên, cho phép component thực sự responsive bất kể viewport',
      'Container query được trình duyệt hỗ trợ tốt hơn media query',
      'Container query có thể truy vấn color scheme, còn media query thì không',
    ],
  },
  'css-029': {
    question:
      'Viết media query chỉ áp dụng style khi viewport rộng từ 600px đến 900px (bao gồm), và người dùng ưu tiên giảm chuyển động.',
    explanation:
      'Nhiều media feature được kết hợp bằng `and`. `min-width: 600px` nghĩa là 600px trở lên; `max-width: 900px` nghĩa là 900px trở xuống; `prefers-reduced-motion: reduce` phát hiện tùy chọn "giảm chuyển động" ở cấp hệ điều hành. Cả ba phải đúng để khối được áp dụng.',
  },
  'css-030': {
    question: '`min(50%, 400px)` trả về giá trị gì trong container 900px?',
    explanation:
      '`min()` trả về giá trị nhỏ nhất trong các đối số. Trong container 900px, 50% = 450px. `min(450px, 400px)` = 400px. Điều này hữu ích để đặt chiều rộng tối đa mà cũng responsive: phần tử sẽ không vượt quá 400px nhưng sẽ co lại tỷ lệ trong container hẹp hơn.',
    options: [
      '400px, vì 50% của 900px = 450px lớn hơn 400px',
      '450px, vì `min()` trả về giá trị lớn hơn',
      'Luôn là 50%',
      '400px chỉ khi được đặt rõ ràng',
    ],
  },

  // ─── ANIMATIONS ─────────────────────────────────────────────────────────────
  'css-031': {
    question:
      'Giá trị `animation-fill-mode` nào giữ lại style của keyframe cuối cùng sau khi animation kết thúc?',
    explanation:
      '`animation-fill-mode: forwards` giữ lại style từ keyframe cuối (100%) sau khi animation hoàn thành. `backwards` áp dụng style keyframe đầu tiên trong thời gian `animation-delay`. `both` áp dụng cả hai hành vi. `none` (mặc định) loại bỏ style animation khi kết thúc.',
    options: ['none', 'backwards', 'forwards', 'both'],
  },
  'css-032': {
    question:
      '`will-change: transform` nên được áp dụng cho tất cả phần tử có animation như một best practice về hiệu năng.',
    explanation:
      '`will-change` là gợi ý cho trình duyệt để promote phần tử lên compositor layer riêng trước thời điểm cần. Lạm dụng nó gây tiêu tốn bộ nhớ quá mức (mỗi layer cần bộ nhớ GPU) và thực tế có thể giảm hiệu năng. Nó chỉ nên được áp dụng có chọn lọc, chỉ cho các phần tử bị jank đo được — và lý tưởng là thêm/xóa động ngay trước/sau animation thay vì để cố định trong CSS.',
  },
  'css-033': {
    question:
      'Scroll-driven animation trong CSS là gì, và những thuộc tính nào kích hoạt nó?',
    explanation:
      'CSS Scroll-Driven Animation (ra mắt Chrome 115+, Firefox 110+ behind flag) liên kết tiến trình animation với vị trí cuộn mà không cần JavaScript. `animation-timeline: scroll()` gắn tiến trình với scroll offset của scroll container. `animation-timeline: view()` liên kết tiến trình với vị trí của phần tử trong viewport. `@keyframes` vẫn được dùng để định nghĩa các trạng thái animation.',
    options: [
      'Animation được kích hoạt bởi sự kiện click, sử dụng `animation-trigger: scroll`',
      'Animation có tiến trình gắn với vị trí cuộn sử dụng `animation-timeline: scroll()` hoặc `view()`',
      'Animation sử dụng `@scroll-keyframes` thay vì `@keyframes`',
      'Một API yêu cầu JavaScript; CSS đơn thuần không thể điều khiển animation liên kết cuộn',
    ],
  },
  'css-034': {
    question:
      'Viết CSS animation làm mờ dần phần tử từ opacity 0 đến 1 trong 0.5 giây với timing ease-out, và đảm bảo phần tử vẫn hiển thị sau khi animation hoàn thành.',
    explanation:
      '`@keyframes fadeIn` định nghĩa trạng thái bắt đầu (opacity 0) và kết thúc (opacity 1). Trong shorthand `animation`: `fadeIn` là tên, `0.5s` là thời lượng, `ease-out` là timing function, và `forwards` là fill mode giữ lại trạng thái `opacity: 1` cuối cùng sau khi hoàn thành.',
  },

  // ─── CSS ARCHITECTURE ───────────────────────────────────────────────────────
  'css-035': {
    question:
      'Trong phương pháp BEM, tên class sau đại diện cho điều gì: `.card__title--highlighted`?',
    explanation:
      'Quy tắc đặt tên BEM (Block, Element, Modifier): `.block__element--modifier`. `.card` là Block (component độc lập), `__title` xác định Element (thành phần của block), và `--highlighted` là Modifier (biến thể của element). Cấu trúc này tránh vấn đề specificity và truyền đạt mối quan hệ component trong tên class.',
    options: [
      'Block: card, Element: title, Modifier: highlighted',
      'Block: card__title, Modifier: highlighted',
      'Element: card, Block: title, Modifier: highlighted',
      'Block: card, Modifier: title--highlighted',
    ],
  },
  'css-036': {
    question:
      'So sánh CSS Modules, CSS-in-JS (ví dụ styled-components), và utility-first CSS (ví dụ Tailwind). Đâu là các đánh đổi cho ứng dụng React quy mô lớn?',
    explanation:
      'Mỗi cách tiếp cận tối ưu cho các ràng buộc khác nhau. Xu hướng năm 2025 ưu tiên giải pháp zero-runtime (Tailwind, CSS Modules, Vanilla Extract) do React Server Components khiến việc inject JS phía client trở nên phức tạp.',
  },

  // ─── MODERN CSS ─────────────────────────────────────────────────────────────
  'css-037': {
    question: 'CSS Cascade Layers (`@layer`) giải quyết vấn đề gì?',
    explanation:
      '`@layer` cho phép bạn sắp xếp thứ tự rõ ràng các nhóm style trong cascade. Style trong layer sau thắng layer trước bất kể specificity. Điều này giải quyết vấn đề phổ biến cần `!important` hoặc selector specificity cao để ghi đè CSS bên thứ ba: `@layer reset, base, components, utilities` — utilities luôn thắng reset bất kể specificity của selector.',
    options: [
      'Thay thế media query cho responsive design',
      'Cung cấp kiểm soát rõ ràng thứ tự cascade, để style bên thứ ba và reset không cần hack specificity để ghi đè',
      'Cho phép CSS được lazy-load theo component',
      'Thay thế CSS custom property cho theming',
    ],
  },
  'css-038': {
    question: 'Màu nào thắng và tại sao?',
    explanation:
      'Trong thứ tự cascade: style không thuộc layer có ưu tiên cao hơn bất kỳ `@layer` nào. Mặc dù cả ba selector có specificity giống nhau (0,1,0), `.button { color: green }` không thuộc layer thắng vì nó nằm ngoài mọi layer. Trong số các style thuộc layer, `theme` (khai báo sau) sẽ thắng `base`, nên blue sẽ là fallback. Nhưng green luôn ghi đè cả hai.',
  },
  'css-039': {
    question:
      'Cú pháp CSS nesting sau đây làm gì (CSS nesting gốc, không phải Sass)?',
    explanation:
      'CSS nesting gốc (mặc định trong Chrome 120+, Firefox 117+, Safari 17.2+) cho phép lồng selector trực tiếp mà không cần `&`. `.child` bên trong `.parent { }` tương đương với `.parent .child { }`. `&` vẫn hữu ích cho các trường hợp phức tạp hơn (ví dụ `&:hover`, `&.active`) nhưng không còn bắt buộc cho descendant nesting đơn giản.',
    options: [
      'Đây là CSS không hợp lệ; nesting cần ký hiệu `&` trong CSS gốc',
      'Chọn phần tử `.child` là con cháu của `.parent`, tương đương `.parent .child { color: red }`',
      'Áp dụng `color: red` cho phần tử `.child` ở bất kỳ đâu trên trang',
      'Chỉ hoạt động bên trong khối `@layer`',
    ],
  },
  'css-040': {
    question:
      '`oklch()` là gì và tại sao nó được ưu tiên hơn `hsl()` cho design system?',
    explanation:
      '`oklch(L C H)` sử dụng mô hình màu perceptual OKLab. Khác với `hsl`, nơi tăng đều lightness trông không nhất quán với mắt người, `oklch` có tính đồng nhất về nhận thức — thay đổi `L` cùng một lượng luôn trông như cùng một mức thay đổi độ sáng. Điều này giúp thao tác màu theo chương trình (ví dụ tạo tint/shade qua `color-mix()`) cho kết quả nhất quán về mặt thị giác. Được hỗ trợ trên tất cả trình duyệt chính từ 2023.',
    options: [
      '`oklch` là tiền tố vendor của trình duyệt cho `hsl`',
      '`oklch` là không gian màu đồng nhất về nhận thức, nơi thay đổi số bằng nhau tạo ra thay đổi nhận thức bằng nhau về độ sáng và chroma, khác với `hsl`',
      '`oklch` chỉ hoạt động trên Safari và không phải tiêu chuẩn W3C',
      '`oklch` là viết tắt của `ok-linear-color-hue`',
    ],
  },
  'css-041': {
    question: '`color-mix(in oklch, red 30%, blue)` tạo ra kết quả gì?',
    explanation:
      '`color-mix()` nội suy giữa hai màu theo tỷ lệ phần trăm cho trước trong không gian màu chỉ định. `in oklch` nghĩa là nội suy theo không gian màu OKLab đồng nhất về nhận thức. Phần trăm đối số đầu tiên (30%) áp dụng cho `red`; phần còn lại (70%) áp dụng cho `blue`. Kết quả là tông tím-xanh đậm. Sử dụng `oklch` tránh hiện tượng "xám bùn ở giữa" có thể xuất hiện khi pha màu bổ túc trong sRGB.',
  },

  // ─── TYPOGRAPHY ─────────────────────────────────────────────────────────────
  'css-042': {
    question: '`font-display: swap` làm gì trong khai báo `@font-face`?',
    explanation:
      '`font-display: swap` yêu cầu trình duyệt sử dụng font fallback ngay lập tức (FOUT — Flash of Unstyled Text) rồi chuyển sang font tùy chỉnh khi nó tải xong. Cách này thường được ưu tiên hơn `block` (ẩn văn bản = FOIT) cho Core Web Vitals (LCP). `optional` còn tốt hơn cho hiệu năng: nếu font chưa được cache, nó sẽ không chuyển đổi.',
    options: [
      'Trình duyệt chờ vô thời hạn cho font tùy chỉnh trước khi render văn bản',
      'Trình duyệt render văn bản ngay với font fallback, sau đó chuyển sang font tùy chỉnh khi tải xong',
      'Trình duyệt ẩn văn bản cho đến khi font tùy chỉnh tải xong (FOIT)',
      'Trình duyệt không bao giờ sử dụng font fallback',
    ],
  },
  'css-043': {
    question:
      'Variable font (OpenType font variations) là gì, và chúng được kiểm soát trong CSS như thế nào?',
    explanation:
      'Variable font (OpenType Font Variations) mã hóa không gian thiết kế liên tục trong một file duy nhất. Trục weight (`wght`) có thể từ 100–900 với bất kỳ giá trị trung gian nào. Kiểm soát qua: `font-weight: 450` (cấp cao), hoặc `font-variation-settings: "wght" 450, "wdth" 75` (cấp thấp, cho trục tùy chỉnh). Lợi ích: một HTTP request duy nhất, giá trị trung gian chính xác, có thể animate bằng CSS transition.',
    options: [
      'Font được định nghĩa bởi JavaScript tại runtime',
      'Một file font duy nhất chứa trục biến đổi thiết kế liên tục (weight, width, slant), kiểm soát qua `font-variation-settings` hoặc thuộc tính cấp cao như `font-weight`',
      'Font được tải có điều kiện theo media query',
      'CSS animation được áp dụng cho các ký tự văn bản',
    ],
  },
  'css-044': {
    question:
      '`text-wrap: balance` khiến trình duyệt phân bố đều văn bản trên tất cả các dòng của heading, giúp tránh từ mồ côi.',
    explanation:
      '`text-wrap: balance` (Chrome 114+, Firefox 121+) cố gắng cân bằng số ký tự mỗi dòng trong khối văn bản, thường cải thiện giao diện heading và pull quote bằng cách tránh một từ đơn lẻ trên dòng cuối. `text-wrap: pretty` là tính năng tương tự tập trung vào ngăn orphan (từ đơn lẻ trên dòng cuối đoạn văn) sử dụng thuật toán bảo thủ hơn.',
  },

  // ─── CSS FUNCTIONS ──────────────────────────────────────────────────────────
  'css-045': {
    question: '`calc(100% - 2rem)` nghĩa là gì trong khai báo `width`?',
    explanation:
      '`calc()` cho phép tính toán số học với đơn vị hỗn hợp. `100% - 2rem` nghĩa là "toàn bộ chiều rộng container trừ 32px (ở kích thước font gốc 16px)". Điều này hữu ích cho gutter bên trong container có padding. Trình duyệt giải `%` tại thời điểm layout và `rem` theo ngữ cảnh rem, rồi trừ. Bốn phép toán cơ bản (+, -, *, /) đều được hỗ trợ; dấu cách quanh + và - là bắt buộc.',
    options: [
      'Không hợp lệ; `calc()` không thể pha trộn đơn vị `%` và `rem`',
      'Chiều rộng là 100% của phần tử cha trừ 2rem (32px ở kích thước font mặc định)',
      'Chiều rộng là 100rem trừ 2% của phần tử cha',
      'Kết quả chỉ phụ thuộc vào `box-sizing`',
    ],
  },
  'css-046': {
    question:
      'Viết cỡ chữ linh hoạt tỷ lệ tuyến tính từ 16px tại viewport 320px đến 24px tại viewport 1280px, sử dụng `clamp()` và đơn vị viewport. Không dùng JavaScript.',
    explanation:
      'Công thức cho fluid type: `clamp(min, preferred, max)` trong đó preferred nội suy tuyến tính giữa min và max tại hai breakpoint viewport. `calc()` bên trong sử dụng công thức CSS fluid type. Dạng rút gọn phổ biến là `clamp(1rem, 0.5rem + 1.667vw, 1.5rem)`. Các công cụ như utopia.fyi tự động hóa phép tính này.',
  },
  'css-047': {
    question:
      '`env(safe-area-inset-bottom)` cung cấp gì trên thiết bị iOS?',
    explanation:
      '`env()` cung cấp quyền truy cập vào biến môi trường do trình duyệt đặt. Các biến `safe-area-inset-*` (top, right, bottom, left) đại diện cho khoảng cách từ cạnh viewport đến "vùng an toàn" — vùng không bị che bởi tính năng phần cứng. Trên iPhone có home indicator, `safe-area-inset-bottom` thường khoảng ~34px và rất cần thiết cho PWA có navigation ở dưới: `padding-bottom: env(safe-area-inset-bottom)`.',
    options: [
      'Chiều cao của thanh địa chỉ trình duyệt',
      'Khoảng cách inset từ cạnh dưới viewport đến vùng an toàn (tính đến home indicator trên iPhone có notch/gesture-nav)',
      'Chiều cao màn hình thiết bị tính bằng pixel',
      'Biến môi trường do hệ điều hành đặt cho mục đích chung',
    ],
  },

  // ─── TRANSFORMS & FILTERS ──────────────────────────────────────────────────
  'css-048': {
    question:
      'Sự khác nhau giữa `filter: blur(10px)` và `backdrop-filter: blur(10px)` là gì?',
    explanation:
      '`filter: blur(10px)` áp dụng blur cho chính phần tử (nội dung, border, v.v.). `backdrop-filter: blur(10px)` áp dụng hiệu ứng cho mọi thứ được render *phía sau* phần tử — tạo hiệu ứng "kính mờ". Bản thân phần tử phải có độ trong suốt (qua `background-color` với alpha < 1) để thấy hiệu ứng backdrop. `backdrop-filter` yêu cầu layer tăng tốc phần cứng.',
    options: [
      'Chúng giống hệt nhau; chỉ khác cú pháp',
      '`filter` làm mờ phần tử và nội dung; `backdrop-filter` làm mờ những gì phía sau phần tử',
      '`backdrop-filter` làm mờ phần tử; `filter` làm mờ background',
      '`filter` chỉ hoạt động trên hình ảnh; `backdrop-filter` hoạt động trên mọi phần tử',
    ],
  },
  'css-049': {
    question: '`clip-path` này tạo hình gì?',
    explanation:
      '`polygon()` nhận danh sách các điểm `x% y%`. `50% 0%` = giữa cạnh trên, `100% 100%` = góc dưới phải, `0% 100%` = góc dưới trái. Ba điểm này tạo thành hình tam giác. `clip-path` cắt phần tử theo hình dạng này; nền coral lấp đầy vùng tam giác.',
  },
  'css-050': {
    question:
      'Các phép `transform` trong CSS được áp dụng theo thứ tự từ phải sang trái (transform được liệt kê cuối cùng được áp dụng trước).',
    explanation:
      'CSS transform được áp dụng từ phải sang trái (giống thứ tự nhân ma trận). `transform: translateX(100px) rotate(45deg)` trước tiên xoay phần tử 45°, sau đó dịch chuyển hệ tọa độ *đã xoay* 100px theo trục X. Đảo ngược thứ tự — `rotate(45deg) translateX(100px)` — cho kết quả khác: dịch chuyển trước theo trục X gốc, rồi mới xoay. Đây là nguồn phổ biến gây ra hành vi transform không mong muốn.',
  },

  // ─── PRINT STYLES ──────────────────────────────────────────────────────────
  'css-051': {
    question:
      'Thuộc tính CSS nào ngăn ngắt trang bên trong một phần tử cụ thể khi in?',
    explanation:
      '`page-break-inside: avoid` là thuộc tính cũ; `break-inside: avoid` là thuộc tính thay thế hiện đại (thuộc spec CSS Fragmentation). Cả hai đều được hỗ trợ rộng rãi và đều ngăn trình duyệt chèn ngắt trang bên trong phần tử khi in. Thường sử dụng cả hai để tương thích.',
    options: [
      '`page-break-inside: avoid`',
      '`print-break: none`',
      '`break-inside: avoid`',
      'Cả A và C đều hợp lệ',
    ],
  },
  'css-052': {
    question:
      'Viết CSS để ẩn phần tử navigation và footer khi trang được in, và đảm bảo văn bản body được in màu đen trên nền trắng.',
    explanation:
      '`@media print` nhắm đến ngữ cảnh render in ấn. `display: none` ẩn phần tử; `!important` có thể cần để ghi đè style inline hoặc do JS áp dụng. Đặt `color: #000; background: #fff` đảm bảo dễ đọc và tiết kiệm mực in. Quy tắc `::after` bonus thêm URL link dưới dạng văn bản, hữu ích cho tài liệu in.',
  },

  // ─── CSS PERFORMANCE ────────────────────────────────────────────────────────
  'css-053': {
    question: '`contain: layout` làm gì cho hiệu năng CSS?',
    explanation:
      'CSS Containment (`contain`) cho trình duyệt biết cây con của phần tử độc lập với phần còn lại của trang về mặt layout, style, paint, hoặc size. `contain: layout` nghĩa là thay đổi bên trong phần tử không thể ảnh hưởng layout bên ngoài, cho phép trình duyệt giới hạn công việc re-layout chỉ trong cây con đó. `contain: strict` = `layout paint size style`. `content-visibility: auto` tự động sử dụng `contain: size layout paint`.',
    options: [
      'Ngăn phần tử ảnh hưởng layout của các phần tử bên ngoài, cho phép trình duyệt bỏ qua re-layout phần còn lại khi phần tử thay đổi',
      'Khóa kích thước phần tử để không bao giờ thay đổi',
      'Chứa tất cả thuộc tính CSS trong ranh giới shadow DOM',
      'Ngăn phần tử kế thừa style từ phần tử cha',
    ],
  },
  'css-054': {
    question:
      '`content-visibility: auto` làm gì, và lợi ích hiệu năng chính của nó là gì?',
    explanation:
      '`content-visibility: auto` là primitive hiệu năng CSS. Với các phần tử ngoài viewport, trình duyệt bỏ qua layout và painting, xử lý chúng như `display: none` cho mục đích render (nhưng vẫn trong DOM và accessible). Khi phần tử tiến gần viewport, nó được render theo yêu cầu. Điều này có thể giảm thời gian render ban đầu 5–7× trên trang nhiều nội dung. Sử dụng `contain-intrinsic-size` kèm theo để gợi ý kích thước dự kiến, tránh nhảy vị trí cuộn.',
    options: [
      'Lazy-load hình ảnh bên trong phần tử',
      'Bỏ qua render (layout + paint) phần tử ngoài màn hình, tiếp tục khi chúng vào viewport, giảm đáng kể thời gian render trang ban đầu',
      'Áp dụng `contain: content` chỉ khi phần tử hiển thị',
      'Kiểm soát liệu thuộc tính CSS `content` có hiển thị không',
    ],
  },
  'css-055': {
    question:
      'Các thuộc tính CSS chỉ kích hoạt compositing (như `transform` và `opacity`) rẻ hơn khi animate so với thuộc tính kích hoạt layout (như `width` hoặc `top`).',
    explanation:
      'Pipeline render trình duyệt: JavaScript → Style → Layout → Paint → Composite. Animate `width` hoặc `top` kích hoạt re-layout (tốn kém, main-thread). Animate `transform` hoặc `opacity` chỉ cần compositing (tăng tốc GPU, ngoài main-thread). Đây là lý do animation hiệu năng nên dùng `transform: translateX()` thay vì `left:`, và `opacity` thay vì toggle `visibility` cho hiệu ứng fade.',
  },
  'css-056': {
    question:
      'Nhóm của bạn nhận thấy trang dashboard có hiệu năng cuộn bị suy giảm nghiêm trọng. Trang có hàng trăm card dữ liệu, mỗi card có drop-shadow và animation. Bạn sẽ áp dụng những chiến lược CSS nào để chẩn đoán và khắc phục?',
    explanation:
      'Vấn đề hiệu năng cuộn trên trang danh sách phức tạp hầu như luôn bắt nguồn từ chi phí paint và composite layer quá mức. content-visibility là bản sửa có hiệu quả cao nhất, thường giảm công việc paint trên 80%. CSS containment và sử dụng will-change cẩn thận giải quyết phần còn lại.',
  },

  // ─── MISCELLANEOUS / ADVANCED ───────────────────────────────────────────────
  'css-057': {
    question:
      'Giá trị mặc định của `position` cho tất cả phần tử HTML là gì?',
    explanation:
      'Tất cả phần tử HTML mặc định là `position: static`. Phần tử static tham gia luồng tài liệu bình thường và `top`, `right`, `bottom`, `left`, và `z-index` không có tác dụng. Đặt bất kỳ giá trị position nào khác (`relative`, `absolute`, `fixed`, `sticky`) làm phần tử trở thành "positioned", kích hoạt thuộc tính offset và tạo stacking context.',
    options: ['relative', 'absolute', 'static', 'initial'],
  },
  'css-058': {
    question:
      '`display: none` loại bỏ phần tử khỏi luồng tài liệu, trong khi `visibility: hidden` ẩn nó nhưng giữ nguyên không gian nó chiếm.',
    explanation:
      '`display: none` khiến phần tử hoàn toàn vắng mặt khỏi layout — không có không gian được dành, và không thể truy cập bởi công nghệ hỗ trợ. `visibility: hidden` làm phần tử vô hình nhưng giữ không gian trong luồng. Lựa chọn thứ ba, `opacity: 0`, làm phần tử trong suốt nhưng vẫn tương tác được (có thể click). Về accessibility, `display: none` và `visibility: hidden` đều ẩn khỏi screen reader; `opacity: 0` thì không.',
  },
  'css-059': {
    question:
      'Sticky header ngừng dính giữa chừng khi cuộn trang. Tìm và sửa vấn đề.',
    explanation:
      '`position: sticky` yêu cầu phần tử cuộn trong scroll container chứa nó. Khi `overflow: hidden` (hoặc `scroll`, `auto`) được áp dụng cho ancestor, nó tạo scroll container mới — và `sticky` trở thành sticky tương đối với CONTAINER đó, không phải viewport. Vì `overflow: hidden` thường không có nội dung cuộn được, phần tử sticky có vẻ không hoạt động. Cách sửa: loại bỏ `overflow: hidden`, dùng `overflow: clip` (ngăn tràn về mặt hiển thị mà không tạo scroll container), hoặc tái cấu trúc DOM.',
  },
  'css-060': {
    question:
      'Một design system cần hỗ trợ nhiều theme (light, dark, high-contrast) và cho phép ghi đè ở cấp component. Kiến trúc CSS nào hỗ trợ tốt nhất?',
    explanation:
      'Kiến trúc token ba tầng với CSS custom property là giải pháp có khả năng mở rộng: (1) Token global/primitive (ví dụ `--color-blue-500: oklch(...)`) định nghĩa giá trị thô. (2) Token semantic/alias (ví dụ `--color-interactive: var(--color-blue-500)`) định nghĩa mục đích. (3) Token component (ví dụ `--button-bg: var(--color-interactive)`) giới hạn phạm vi cho component. Chuyển đổi theme đơn giản chỉ cần định nghĩa lại token semantic trên selector `[data-theme="dark"]`. `@layer` đảm bảo cascade có thể dự đoán mà không cần chiến tranh specificity.',
    options: [
      'Inline style với JavaScript theme provider truyền xuống style object',
      'CSS custom property với các lớp token ngữ nghĩa: global token → alias token → component token, với `@layer` để kiểm soát cascade',
      'File CSS riêng cho mỗi theme, tải động bằng cách swap thẻ `<link>`',
      'Dark mode của Tailwind chỉ với variant `dark:`',
    ],
  },
  'css-061': {
    question: '`isolation: isolate` được dùng để làm gì trong CSS?',
    explanation:
      '`isolation: isolate` tạo stacking context mới trên phần tử mà không cần `z-index`, `opacity`, hoặc `transform`. Trường hợp sử dụng chính là cô lập hiệu ứng `mix-blend-mode`: phần tử có blend mode thường blend với toàn bộ background bên dưới; bọc chúng trong container có `isolation: isolate` giới hạn blending trong container đó. Nó cũng giải quyết vấn đề z-index stacking mà không gây tác dụng phụ.',
    options: [
      'Ngăn phần tử kế thừa bất kỳ thuộc tính CSS nào',
      'Tạo stacking context mới mà không cần `z-index` hay `transform`, dùng để chứa hiệu ứng `mix-blend-mode`',
      'Cô lập phần tử trong shadow DOM',
      'Ngăn CSS transition chạy trên phần tử',
    ],
  },
  'css-062': {
    question:
      'Trong CSS, đơn vị nào luôn bằng font-size của phần tử gốc `<html>`?',
    explanation:
      '`rem` (root em) luôn tương đối với font-size của phần tử `<html>` (mặc định: 16px trên hầu hết trình duyệt). `em` tương đối với font-size của phần tử hiện tại (hoặc ancestor gần nhất cho thuộc tính không phải font), có thể cộng dồn trong ngữ cảnh lồng nhau. `vw` là 1% chiều rộng viewport. `ch` là chiều rộng ký tự "0" của font hiện tại.',
    options: ['em', 'rem', 'vw', 'ch'],
  },
  'css-063': {
    question:
      'Font-size của `.child` tính bằng pixel là bao nhiêu, với các giá trị sau?',
    explanation:
      '`em` cho `font-size` tương đối với computed font-size của phần tử cha. `.parent` = 1.5 × 16px = 24px. `.child` = 1.5 × 24px = 36px. Hiệu ứng cộng dồn này là lý do `rem` thường được ưu tiên cho font size trong design system — nó luôn tương đối với root và không cộng dồn qua các cấp lồng nhau.',
  },
  'css-064': {
    question:
      'Thứ tự ưu tiên của CSS `@layer` cho các khai báo này, từ ưu tiên thấp nhất đến cao nhất là gì?',
    explanation:
      'Trong `@layer`, layer khai báo sau có ưu tiên cao hơn. `@layer reset, base, components, utilities` nghĩa là: `reset` có ưu tiên thấp nhất, `utilities` cao nhất. Specificity không liên quan giữa các layer — quy tắc specificity thấp trong `utilities` thắng quy tắc specificity cao trong `reset`. Style không thuộc layer nằm trên tất cả layer về ưu tiên.',
    options: [
      'reset > base > components > utilities (reset thắng)',
      'utilities > components > base > reset (utilities thắng)',
      'Thứ tự phụ thuộc vào specificity trong mỗi layer',
      'Style không thuộc layer < reset < base < components < utilities',
    ],
  },
  'css-065': {
    question:
      'Nhóm của bạn đang chuyển đổi codebase cũ với specificity không nhất quán và style toàn cục sang kiến trúc CSS hiện đại, dễ bảo trì. Hãy phác thảo chiến lược chuyển đổi.',
    explanation:
      'Điểm mấu chốt là bọc CSS cũ trong layer ưu tiên thấp trước — đây là thay đổi không gây hỏng cho phép style mới thắng ngay mà không cần đấu specificity. Việc chuyển đổi sau đó có thể tiến hành dần dần mà không cần viết lại toàn bộ cùng lúc.',
  },
}
