import type { QuestionTranslationMap } from '../types'

export const accessibilityVi: QuestionTranslationMap = {
  'a11y-001': {
    question: 'ARIA là viết tắt của cụm từ gì trong lĩnh vực web accessibility?',
    explanation:
      'ARIA (Accessible Rich Internet Applications) là một tập hợp các thuộc tính HTML giúp nội dung web trở nên dễ tiếp cận hơn cho người khuyết tật. Các thuộc tính ARIA bổ sung ngữ nghĩa HTML gốc khi các widget hoặc tương tác không thể biểu diễn bằng phần tử HTML tiêu chuẩn. Nguyên tắc quan trọng: "Không dùng ARIA còn tốt hơn dùng ARIA sai" — luôn ưu tiên phần tử HTML ngữ nghĩa gốc thay vì ARIA khi có thể.',
    options: [
      'Automated Responsive Interface Architecture',
      'Accessible Rich Internet Applications',
      'Advanced Rendering Integration API',
      'Assistive Reader Interface Addon',
    ],
  },
  'a11y-002': {
    question:
      'Sử dụng `<div onclick="...">` tương đương với `<button onclick="...">` về mặt accessibility.',
    explanation:
      'Một <div> với onclick KHÔNG hỗ trợ accessibility theo mặc định. Một <button> cung cấp: 1) Kích hoạt bằng bàn phím (Enter/Space). 2) Quản lý focus (có thể tab tới theo mặc định). 3) Screen reader thông báo là "button". 4) Ngầm định có role="button". Để làm một <div> tương đương, bạn cần: role="button", tabindex="0", trình xử lý onKeyDown cho Enter/Space, và CSS cursor: pointer. Điều này phức tạp hơn nhiều so với việc dùng <button>. Quy tắc đầu tiên của ARIA: không dùng ARIA khi phần tử HTML gốc đã cung cấp ngữ nghĩa tương ứng.',
  },
  'a11y-003': {
    question:
      'Mức tuân thủ nào của WCAG 2.1 thường được yêu cầu để đáp ứng quy định pháp luật ở hầu hết các quốc gia?',
    explanation:
      'WCAG Level AA là tiêu chuẩn được yêu cầu bởi hầu hết các luật về accessibility: ADA (Mỹ), EN 301 549 (EU), Accessibility Regulations (Anh). Level A bao gồm mức tối thiểu tuyệt đối (như văn bản thay thế cho hình ảnh). Level AA bổ sung các yêu cầu như độ tương phản màu (4.5:1 cho văn bản thường), phóng to đến 200%, và điều hướng bằng bàn phím. Level AAA là tiêu chuẩn cao nhất nhưng không bắt buộc theo luật và thường không thực tế để đạt được cho tất cả nội dung (ví dụ: tỷ lệ tương phản 7:1, phiên dịch ngôn ngữ ký hiệu).',
    options: [
      'Chỉ Level A',
      'Level AA',
      'Level AAA',
      'Không có mức cụ thể nào được yêu cầu',
    ],
  },
  'a11y-004': {
    question: 'Vấn đề accessibility nào tồn tại trong component React này?',
    answer:
      'Nhiều vấn đề: 1) img thiếu thuộc tính alt, 2) div với onClick không hỗ trợ bàn phím, 3) tỷ lệ tương phản màu #aaa trên #fff chỉ đạt 2.32:1 (không đạt WCAG AA 4.5:1), 4) không sử dụng phần tử ngữ nghĩa link/button cho điều hướng.',
    explanation:
      'Cách sửa: 1) Thêm alt={product.name} cho img. 2) Thay thế div bằng <Link> hoặc phần tử <a> để điều hướng (cung cấp truy cập bàn phím, thông báo screen reader, và nhấp chuột phải/mở tab mới). 3) Đổi màu chữ thành ít nhất #767676 để đạt tỷ lệ tương phản 4.5:1 trên nền trắng. 4) Dùng HTML ngữ nghĩa — đây là liên kết vì nó điều hướng, nên dùng thẻ anchor hoặc component Link của React Router.',
  },
  'a11y-005': {
    question:
      'Cách đúng để triển khai một component dropdown/select tùy chỉnh có hỗ trợ accessibility là gì?',
    explanation:
      'Một dropdown tùy chỉnh hỗ trợ accessibility cần: 1) Nút trigger với aria-haspopup="listbox" và aria-expanded. 2) Container listbox với role="listbox". 3) Các tùy chọn với role="option" và aria-selected. 4) aria-activedescendant trên listbox trỏ đến tùy chọn đang được focus. 5) Hỗ trợ bàn phím đầy đủ: phím mũi tên để điều hướng, Enter/Space để chọn, Escape để đóng, Home/End cho mục đầu/cuối, tìm kiếm bằng gõ ký tự. 6) Quản lý focus — focus trở về trigger khi đóng. Đây là quy trình phức tạp, đó là lý do tại sao các thư viện như Radix UI, React Aria và Headless UI tồn tại — chúng triển khai các pattern ARIA đúng cách.',
    options: [
      'Dùng div với trình xử lý click và aria-expanded',
      'Dùng phần tử <select> gốc với tùy chỉnh CSS',
      'Dùng role="listbox" với các phần tử con role="option", aria-expanded, aria-activedescendant, và hỗ trợ bàn phím đầy đủ',
      'Dùng <ul> với các mục <li> và JavaScript',
    ],
  },
  'a11y-006': {
    question: 'Mục đích của thuộc tính `alt` trên phần tử `<img>` là gì?',
    explanation:
      'Thuộc tính alt cung cấp văn bản thay thế: 1) Được screen reader đọc để mô tả hình ảnh cho người khiếm thị. 2) Hiển thị khi hình ảnh không tải được. 3) Giúp công cụ tìm kiếm hiểu nội dung hình ảnh (lợi ích SEO). Đối với hình ảnh trang trí không mang thông tin, dùng alt="" (chuỗi rỗng) để screen reader bỏ qua. Không bao giờ bỏ hoàn toàn thuộc tính alt — điều đó khiến screen reader đọc tên tệp. Viết alt text mô tả: "Chó Golden Retriever chơi bắt bóng trong công viên" thay vì "hình ảnh" hay "ảnh".',
    options: [
      'Để hiển thị tooltip khi di chuột qua hình ảnh',
      'Để cung cấp mô tả văn bản cho screen reader và khi hình ảnh không tải được',
      'Chỉ để cải thiện thứ hạng SEO',
      'Để đặt tên tệp hình ảnh',
    ],
  },
  'a11y-007': {
    question:
      'aria-hidden="true" loại bỏ phần tử khỏi cả accessibility tree và bố cục hiển thị.',
    explanation:
      'aria-hidden="true" chỉ loại bỏ phần tử khỏi accessibility tree — screen reader sẽ không đọc nó. Phần tử vẫn hiển thị và có thể tương tác. Điều này hữu ích cho các phần tử trang trí (icon bên cạnh nhãn văn bản) hoặc nội dung trùng lặp. Quan trọng: không bao giờ dùng aria-hidden trên phần tử có thể focus — điều này tạo trải nghiệm khó hiểu khi người dùng bàn phím có thể focus vào thứ mà người dùng screen reader không nhận biết được. Nếu muốn ẩn cả phần hiển thị, dùng CSS display:none hoặc visibility:hidden, chúng tự động loại bỏ khỏi cả hiển thị lẫn accessibility tree.',
  },
  'a11y-008': {
    question:
      'Focus nên được quản lý như thế nào khi mở và đóng modal dialog trong ứng dụng React?',
    explanation:
      'Quản lý focus cho modal đúng cách: 1) Khi mở: chuyển focus vào modal (hoặc phần tử có thể focus đầu tiên trong đó). 2) Bẫy focus (focus trap): Tab/Shift+Tab chỉ di chuyển trong modal, không đến các phần tử phía sau. 3) Khi đóng: trả focus về phần tử đã kích hoạt việc mở modal. 4) Phím Escape nên đóng modal. 5) Modal cần role="dialog", aria-modal="true", và aria-labelledby trỏ đến tiêu đề. 6) Nội dung nền nên có aria-hidden="true" và thuộc tính inert. Các thư viện như Radix Dialog và React Aria xử lý tất cả điều này. Phần tử HTML <dialog> cung cấp một phần tính năng này sẵn có.',
    options: [
      'Không cần làm gì — trình duyệt tự xử lý focus',
      'Chuyển focus vào modal khi mở, bẫy focus bên trong, và trả focus về phần tử trigger khi đóng',
      'Luôn focus vào input đầu tiên trong modal',
      'Dùng autofocus trên nút đóng',
    ],
  },
  'a11y-009': {
    question: '"Skip link" là gì và tại sao nó quan trọng?',
    explanation:
      'Skip link thường là phần tử có thể focus đầu tiên trên trang, ẩn cho đến khi được focus (hiển thị khi nhấn Tab). Nó liên kết đến vùng nội dung chính (#main-content), cho phép người dùng bàn phím và screen reader bỏ qua phần điều hướng lặp lại trên mỗi trang. Nếu không có, người dùng phải Tab qua mọi liên kết điều hướng trên mỗi lần tải trang. Triển khai: ẩn trực quan theo mặc định, hiển thị khi :focus, liên kết đến landmark nội dung chính. Ví dụ: <a href="#main" class="sr-only focus:not-sr-only">Chuyển đến nội dung</a>.',
    options: [
      'Liên kết bỏ qua hiệu ứng động cho người nhạy cảm với chuyển động',
      'Liên kết ẩn ở đầu trang cho phép người dùng bàn phím bỏ qua điều hướng lặp lại và nhảy đến nội dung chính',
      'Liên kết bỏ qua màn hình tải',
      'Liên kết loại bỏ quảng cáo khỏi trang',
    ],
  },
  'a11y-010': {
    question:
      'Tìm và sửa các vấn đề accessibility trong component form này:',
    answer:
      'Các vấn đề: 1) Label không liên kết với input (dùng <label htmlFor>), 2) Thông báo lỗi không liên kết với input (dùng aria-describedby + aria-invalid), 3) Submit là div chứ không phải <button type="submit">, 4) Placeholder không thay thế được label, 5) Lỗi không được thông báo cho screen reader (dùng role="alert" hoặc aria-live).',
    explanation:
      'Phiên bản sửa nên dùng: <label htmlFor="username">Username</label> với <input id="username" aria-invalid="true" aria-describedby="error-msg" />. Div thông báo lỗi nên có role="alert" id="error-msg" để thông báo trực tiếp. Submit nên là <button type="submit">. Label phải được liên kết theo chương trình qua cặp htmlFor/id — chỉ ở gần nhau về mặt hiển thị không hoạt động với screen reader. Placeholder biến mất khi nhập và có độ tương phản thấp, nên chỉ dùng bổ sung cho label chứ không thay thế.',
  },
  'a11y-011': {
    question:
      'Chỉ dùng màu sắc để truyền tải thông tin (ví dụ: chữ đỏ cho lỗi) đáp ứng hướng dẫn accessibility của WCAG.',
    explanation:
      'WCAG 1.4.1 "Sử dụng màu sắc" yêu cầu màu sắc không phải là phương tiện duy nhất để truyền tải thông tin. Người mù màu (8% nam giới) có thể không phân biệt được đỏ và xanh lá. Giải pháp: kết hợp màu với các chỉ báo khác như icon (icon lỗi), văn bản ("Lỗi:"), viền, gạch chân hoặc họa tiết. Ví dụ: thông báo lỗi form nên có: màu đỏ + icon lỗi + văn bản mô tả + thuộc tính aria-invalid. Biểu đồ nên dùng họa tiết/nhãn bên cạnh màu sắc. Điều này cũng hữu ích khi in đen trắng và cài đặt màn hình độ tương phản thấp.',
  },
  'a11y-012': {
    question:
      'Phần tử HTML nào nên được dùng cho thanh điều hướng chính của website?',
    explanation:
      'Phần tử <nav> là phần tử HTML ngữ nghĩa dành cho các phần điều hướng. Nó tự động cung cấp vai trò landmark "navigation" cho screen reader, cho phép người dùng nhảy trực tiếp đến phần điều hướng bằng phím tắt landmark. Dùng <nav aria-label="Main navigation"> cho điều hướng chính và <nav aria-label="Footer navigation"> cho điều hướng phụ để phân biệt. Screen reader như VoiceOver thông báo landmark "navigation" và người dùng có thể liệt kê tất cả landmark trên trang để điều hướng nhanh.',
    options: [
      '<div class="nav">',
      '<nav>',
      '<header>',
      '<menu>',
    ],
  },
  'a11y-013': {
    question:
      'Thuộc tính `aria-live` dùng để làm gì, và các giá trị của nó là gì?',
    explanation:
      'aria-live tạo "live region" mà screen reader theo dõi các thay đổi nội dung. Khi nội dung bên trong thay đổi động, screen reader thông báo bản cập nhật. Các giá trị: "off" (mặc định, không thông báo), "polite" (thông báo khi người dùng rảnh — cho cập nhật không khẩn cấp như tin nhắn chat), "assertive" (ngắt lời nói hiện tại — cho cảnh báo khẩn cấp như lỗi). Dùng role="alert" (ngầm định aria-live="assertive") cho lỗi. Dùng role="status" (ngầm định aria-live="polite") cho thông báo trạng thái. Thêm aria-atomic="true" nếu toàn bộ vùng cần được đọc lại khi có bất kỳ thay đổi nào.',
    options: [
      'Làm phần tử có hiệu ứng động — giá trị: fast, slow, none',
      'Tạo live region thông báo thay đổi nội dung động cho screen reader — giá trị: off, polite, assertive',
      'Kích hoạt cộng tác thời gian thực — giá trị: sync, async',
      'Điều khiển hiển thị phần tử — giá trị: visible, hidden',
    ],
  },
  'a11y-014': {
    question:
      'Phần tử HTML `<table>` không bao giờ nên được dùng cho mục đích bố cục — nó chỉ nên được dùng cho dữ liệu dạng bảng.',
    explanation:
      'Table chỉ nên dùng để trình bày dữ liệu dạng bảng (bảng tính, bảng so sánh, lưới dữ liệu). Dùng table cho bố cục khiến screen reader thông báo "bảng có X hàng và Y cột" và điều hướng từng ô, gây nhầm lẫn khi nội dung thực tế không phải dạng bảng. Screen reader cũng thông báo tiêu đề hàng/cột vô nghĩa với table bố cục. Dùng CSS Flexbox hoặc Grid cho bố cục thay thế. Nếu buộc phải dùng table cho bố cục (lý do legacy), thêm role="presentation" để loại bỏ ngữ nghĩa bảng khỏi accessibility tree.',
  },
  'a11y-015': {
    question:
      'Kỹ thuật CSS nào được dùng để ẩn nội dung khỏi hiển thị nhưng vẫn cho screen reader truy cập được?',
    explanation:
      'Kỹ thuật "sr-only" (screen-reader only) dùng CSS để ẩn nội dung khỏi hiển thị nhưng vẫn giữ trong accessibility tree. display:none và visibility:hidden loại bỏ khỏi CẢ hiển thị lẫn accessibility tree. opacity:0 vẫn giữ phần tử chiếm không gian và có thể click được. Pattern sr-only: position:absolute, width:1px, height:1px, padding:0, margin:-1px, overflow:hidden, clip-path:inset(50%), white-space:nowrap, border:0. TailwindCSS cung cấp sẵn class tiện ích "sr-only". Dùng cho: skip link, nhãn nút icon, tiêu đề bảng, ngữ cảnh bổ sung.',
    options: [
      'display: none',
      'visibility: hidden',
      'Class sr-only với position:absolute, width:1px, height:1px, overflow:hidden, clip-path',
      'opacity: 0',
    ],
  },
  'a11y-016': {
    question:
      'Thuộc tính HTML `inert` là gì và nó cải thiện accessibility như thế nào?',
    explanation:
      'Thuộc tính `inert` (hiện được hỗ trợ trên tất cả trình duyệt chính) làm phần tử và tất cả phần tử con trở nên không tương tác: không thể focus, không thể click, screen reader không tìm thấy, và không thể chọn văn bản. Nó hoàn hảo cho: 1) Nội dung nền phía sau modal đang mở (thay thế aria-hidden + quản lý tabindex). 2) Panel điều hướng mobile ngoài màn hình. 3) Nội dung accordion đã thu gọn. 4) Bước trước/sau trong form nhiều bước. Trước khi có inert, bạn phải quản lý thủ công aria-hidden và tabindex=-1 trên mọi phần tử có thể focus — inert làm tất cả chỉ với một thuộc tính.',
    options: [
      'Làm phần tử chỉ đọc',
      'Loại bỏ phần tử và tất cả phần tử con khỏi thứ tự focus, sự kiện click, và accessibility tree',
      'Làm chậm hiệu ứng động',
      'Ngăn JavaScript sửa đổi phần tử',
    ],
  },
  'a11y-017': {
    question:
      'Kiểm thử accessibility có thể được tự động hóa hoàn toàn — bạn không cần kiểm thử thủ công với screen reader.',
    explanation:
      'Công cụ tự động (axe-core, Lighthouse, eslint-plugin-jsx-a11y) có thể phát hiện khoảng 30-40% vấn đề accessibility — những thứ như thiếu alt text, độ tương phản thấp, thiếu label. Nhưng chúng KHÔNG THỂ phát hiện: 1) Alt text có ý nghĩa hay không (không chỉ là "hình ảnh"). 2) Thứ tự focus có hợp lý không. 3) Thông báo screen reader có dễ hiểu không. 4) Tương tác bàn phím có tự nhiên không. 5) Trải nghiệm tổng thể có hoạt động tốt cho người khuyết tật không. Kiểm thử thủ công với screen reader thực tế (VoiceOver, NVDA, JAWS) và điều hướng chỉ bằng bàn phím là thiết yếu. Lý tưởng nhất, nên có người khuyết tật tham gia quá trình kiểm thử.',
  },
  'a11y-018': {
    question:
      'Tỷ lệ tương phản màu tối thiểu theo WCAG 2.1 Level AA cho văn bản thường là bao nhiêu?',
    explanation:
      'WCAG 2.1 Level AA yêu cầu: tỷ lệ tương phản 4.5:1 cho văn bản thường (dưới 18pt hoặc 14pt đậm) và 3:1 cho văn bản lớn (18pt+ hoặc 14pt+ đậm). Level AAA yêu cầu 7:1 cho văn bản thường và 4.5:1 cho văn bản lớn. Thành phần UI và đối tượng đồ họa cần 3:1. Công cụ kiểm tra: Chrome DevTools (inspect > contrast ratio), WebAIM Contrast Checker, plugin Figma. Lỗi thường gặp: chữ xám nhạt trên nền trắng, placeholder text, chữ nút bị vô hiệu hóa. Lưu ý: văn bản trang trí và logo được miễn trừ.',
    options: [
      '2:1',
      '3:1',
      '4.5:1',
      '7:1',
    ],
  },
  'a11y-019': {
    question:
      'Thư viện React nào cung cấp các UI primitive hỗ trợ accessibility toàn diện nhất (headless component với pattern ARIA tích hợp)?',
    explanation:
      'React Aria (của Adobe) và Radix UI cung cấp các primitive headless (không có style) hỗ trợ accessibility. React Aria triển khai mọi design pattern WAI-ARIA với hỗ trợ đầy đủ bàn phím, screen reader và cảm ứng. Nó tự động xử lý quản lý focus, thuộc tính ARIA và quốc tế hóa. Radix UI cung cấp tính năng tương tự với API đơn giản hơn. Cả hai đều là headless — bạn tự cung cấp style. Điều này khác với thư viện có style (MUI, Ant Design) đi kèm giao diện cố định. Để đạt accessibility tối đa với tự do thiết kế, phương pháp được khuyến nghị là headless primitive + style riêng (TailwindCSS).',
    options: [
      'Material UI (MUI)',
      'React Aria (Adobe) / Radix UI',
      'Bootstrap React',
      'Ant Design',
    ],
  },
  'a11y-020': {
    question:
      'Media query CSS prefers-reduced-motion nên được dùng để tắt TẤT CẢ hiệu ứng động cho người dùng yêu cầu.',
    explanation:
      'prefers-reduced-motion nên giảm hoặc đơn giản hóa hiệu ứng, không nhất thiết loại bỏ tất cả. Một số hiệu ứng hỗ trợ hiểu biết (drawer trượt mở so với xuất hiện ngay). Thực hành tốt: 1) Loại bỏ hiệu ứng trang trí/không cần thiết. 2) Đơn giản hóa hiệu ứng thiết yếu (giảm khoảng cách, thời lượng). 3) Thay chuyển động bằng transition opacity. CSS: @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; } } quá triệt để. Tốt hơn: điều chỉnh chọn lọc các hiệu ứng cụ thể trong khi giữ phản hồi chức năng.',
  },
  'a11y-021': {
    question:
      'Các tiêu chí thành công mới được giới thiệu trong WCAG 2.2 mà không có trong WCAG 2.1 là gì?',
    explanation:
      'Các tiêu chí mới quan trọng trong WCAG 2.2 (Tháng 10/2023): (1) 2.4.11 Focus Not Obscured (Minimum, AA): chỉ báo focus không được bị che hoàn toàn bởi nội dung khác. (2) 2.4.12 Focus Not Obscured (Enhanced, AAA). (3) 2.5.7 Dragging Movements (AA): tương tác kéo phải có phương án thay thế dùng con trỏ đơn. (4) 2.5.8 Target Size Minimum (AA): vùng tương tác phải ít nhất 24x24 CSS pixel. (5) 3.3.8 Accessible Authentication (AA): CAPTCHA phải có phương án thay thế, copy/paste phải hoạt động trên trường xác thực. Lưu ý: 2.4.11 Focus Appearance có trong bản nháp trước nhưng đã bị loại khỏi khuyến nghị cuối cùng. 4.1.1 Parsing cũng đã bị loại.',
    options: [
      'WCAG 2.2 chỉ cập nhật các tiêu chí hiện có — không thêm tiêu chí mới',
      'WCAG 2.2 bổ sung: 2.4.11 Focus Not Obscured (Minimum), 2.4.12 Focus Not Obscured (Enhanced), 2.4.13 Focus Appearance, 2.5.7 Dragging Movements, 2.5.8 Target Size (Minimum, 24x24 CSS pixel), 3.2.6 Consistent Help, 3.3.7 Redundant Entry, 3.3.8 Accessible Authentication (Minimum), 3.3.9 Accessible Authentication (Enhanced).',
      'WCAG 2.2 chỉ thêm tiêu chí cho thiết bị di động và cảm ứng',
      'WCAG 2.2 thêm yêu cầu về điều khiển giọng nói và accessibility bằng AI',
    ],
  },
  'a11y-022': {
    question:
      'Làm thế nào để triển khai drag and drop hỗ trợ accessibility đáp ứng WCAG 2.2 Tiêu chí thành công 2.5.7 (Dragging Movements)?',
    explanation:
      'Drag-and-drop tuân thủ WCAG 2.5.7: (1) Hành động thay thế: nút "Di chuyển đến" trên mỗi mục có thể kéo mở dialog hoặc menu liệt kê các vị trí thả hợp lệ — dùng con trỏ thuần, không cần thao tác kéo. (2) Hỗ trợ bàn phím: focus vào mục → Space để "nhấc lên" → phím mũi tên để điều hướng đến đích → Space/Enter để thả → Escape để hủy. Thông báo trạng thái với aria-live: "Đã nhấc mục. Dùng phím mũi tên để di chuyển." (3) React DnD và dnd-kit cung cấp hook hỗ trợ bàn phím. (4) Phản hồi trực quan: dùng aria-describedby để giải thích tương tác bàn phím khi focus lần đầu. HTML5 drag API không hỗ trợ bàn phím — luôn bổ sung thêm.',
    options: [
      'Thêm thuộc tính title vào phần tử có thể kéo để giải thích cách kéo',
      'Cung cấp phương án thay thế bằng click đơn cho tất cả thao tác kéo: ví dụ nút "Di chuyển" mở menu các vị trí thả hợp lệ, hoặc hỗ trợ phím mũi tên (kéo bằng bàn phím). Thao tác kéo không được là cách duy nhất thực hiện hành động. Dùng aria-grabbed (đã deprecated nhưng vẫn dùng), role="application" với trình xử lý sự kiện bàn phím, và hướng dẫn rõ ràng.',
      'Drag and drop vốn không hỗ trợ accessibility và nên tránh hoàn toàn',
      'Dùng thuộc tính HTML5 draggable tự động làm drag and drop hỗ trợ accessibility',
    ],
  },
  'a11y-023': {
    question:
      'Những thuộc tính ARIA nào cần thiết cho bảng dữ liệu phức tạp có tiêu đề cột nhiều cấp và nhóm hàng?',
    explanation:
      'Đánh dấu bảng phức tạp hỗ trợ accessibility: (1) <caption>: tên bảng được lập trình, screen reader đọc trước khi đọc dữ liệu. (2) scope="col" trên tiêu đề cột, scope="row" trên tiêu đề hàng — cho screen reader biết ô nào được gán nhãn. (3) Tiêu đề colspan/rowspan: thêm id cho mỗi <th> và headers="id1 id2" trên các ô <td> tương ứng — screen reader đọc tất cả tiêu đề áp dụng cho mỗi ô. (4) Nhóm hàng: <thead>, <tbody>, <tfoot> cung cấp vai trò rowgroup ngầm định — thêm tóm tắt mỗi nhóm qua aria-label trên <tbody> cho bảng phức tạp. (5) Tiêu đề có thể sắp xếp: aria-sort="ascending|descending|none" trên <th> có thể sắp xếp.',
    options: [
      'Chỉ dùng <table> với phần tử <th> — không cần ARIA',
      'Dùng scope="col"/"row" trên phần tử <th>, thuộc tính id+headers cho tiêu đề spanning phức tạp, <caption> cho tên bảng, role="rowgroup" ngầm định trên <thead>/<tbody>, và aria-labelledby nếu caption ở ngoài. Với bảng rất phức tạp có tiêu đề lồng nhau, dùng liên kết id/headers tường minh.',
      'Thay bảng phức tạp bằng danh sách cặp key-value',
      'Dùng role="grid" cho tất cả bảng dữ liệu',
    ],
  },
  'a11y-024': {
    question:
      'Cách tiếp cận đúng cho thông báo toast/notification hỗ trợ accessibility là gì, và khi nào nên dùng aria-live="polite" so với aria-live="assertive"?',
    explanation:
      'Hướng dẫn accessibility cho toast: (1) role="status" (polite): "Đã thêm vào giỏ hàng", "Đã lưu cài đặt" — ưu tiên thấp, đợi lúc rảnh. (2) role="alert" (assertive): "Lỗi: thanh toán thất bại", "Phiên hết hạn trong 60 giây" — ưu tiên cao, ngắt ngay lập tức. (3) Live region phải tồn tại trong DOM trước khi nội dung được thêm vào — không tạo live region động cùng lúc với nội dung; mount container rỗng khi khởi động ứng dụng. (4) Tự động ẩn toast: đảm bảo thời gian hiển thị tối thiểu (WCAG 2.2.1 Timing Adjustable) hoặc cung cấp cách tắt tự động ẩn. (5) Giữ thông báo ngắn gọn — screen reader đọc toàn bộ nội dung mỗi lần cập nhật.',
    options: [
      'Tất cả thông báo nên dùng role="alert" để đảm bảo luôn được đọc',
      'Dùng aria-live="polite" (hoặc role="status") cho thông báo không khẩn cấp (thành công, thông tin, giỏ hàng cập nhật) — được đọc khi người dùng hoàn thành hành động hiện tại. Dùng aria-live="assertive" (hoặc role="alert") chỉ cho thông báo lỗi khẩn cấp cần chú ý ngay và đáng để ngắt lời người dùng.',
      'Toast không cần thuộc tính ARIA vì chúng rõ ràng về mặt trực quan',
      'Dùng aria-live="off" để screen reader không đọc trùng nội dung toast',
    ],
  },
  'a11y-025': {
    question:
      'Yêu cầu accessibility cho carousel/slider hình ảnh có tự động chuyển slide là gì?',
    explanation:
      'Pattern ARIA cho carousel: container có role="region" aria-label="Sản phẩm nổi bật" aria-roledescription="carousel". Mỗi slide: role="group" aria-roledescription="slide" aria-label="1 trên 5". Slide không hiển thị: aria-hidden="true". Tự động chuyển: phải có nút tạm dừng (WCAG 2.2.2 Pause, Stop, Hide) — chuyển động kéo dài hơn 5 giây và tự cập nhật. Tạm dừng khi hover/focus là mức tối thiểu; nút play/pause hiển thị rõ ràng tốt hơn. Nút trước/sau: <button aria-label="Slide trước"> và <button aria-label="Slide tiếp theo">. ARIA APG có pattern carousel đầy đủ với ví dụ mã nguồn.',
    options: [
      'Carousel vốn không hỗ trợ accessibility và không bao giờ nên dùng',
      'Yêu cầu carousel hỗ trợ accessibility: (1) Nút tạm dừng/dừng cho tự động chuyển (WCAG 2.2.2); (2) Nút trước/sau với aria-label mô tả; (3) Chỉ báo slide với aria-label="Slide X trên Y" và aria-current="true" cho slide đang hiển thị; (4) aria-live="polite" hoặc aria-roledescription="carousel" trên container; (5) Mỗi slide chỉ hiển thị cho screen reader khi đang active (aria-hidden trên slide không active); (6) Hỗ trợ bàn phím: phím mũi tên để điều hướng.',
      'Chỉ cần thêm tabindex="0" vào container carousel',
      'Chỉ cung cấp danh sách văn bản tất cả slide như phương án thay thế',
    ],
  },
  'a11y-026': {
    question:
      'Inline SVG icon nên được làm cho hỗ trợ accessibility như thế nào, và sự khác biệt giữa SVG icon trang trí và mang thông tin là gì?',
    explanation:
      'Các pattern accessibility cho SVG: (1) Icon trang trí có nhãn văn bản kề bên: <svg aria-hidden="true" focusable="false"><path.../></svg><span>Xóa</span> — aria-hidden ngăn thông báo trùng lặp; focusable="false" ngăn IE/Edge đưa vào thứ tự tab. (2) Nút icon độc lập: <button aria-label="Xóa mục"><svg aria-hidden="true" focusable="false">...</svg></button> — nhãn ở trên button, icon được ẩn. (3) Hình minh họa SVG mang thông tin: <svg role="img" aria-labelledby="svgTitle"><title id="svgTitle">Biểu đồ cột thể hiện tăng trưởng doanh thu</title>...</svg>. Thuộc tính focusable="false" quan trọng cho trình duyệt cũ.',
    options: [
      'Thêm alt="" cho tất cả phần tử SVG, giống như phần tử img',
      'Icon trang trí (bên cạnh nhãn văn bản hiển thị): aria-hidden="true" để loại khỏi accessibility tree — screen reader đọc văn bản, không đọc icon. Icon mang thông tin (độc lập, không có văn bản): role="img" aria-label="Cài đặt" trên SVG, hoặc dùng <title> ẩn trực quan làm phần tử con đầu tiên của SVG. Không dùng cả aria-label lẫn văn bản kề bên.',
      'Phần tử SVG tự động truyền đạt ý nghĩa cho screen reader',
      'Luôn dùng <img> thay vì inline SVG để hỗ trợ accessibility',
    ],
  },
  'a11y-027': {
    question:
      'Những lệnh VoiceOver (macOS/iOS) và NVDA (Windows) chính mà lập trình viên nên biết để kiểm thử accessibility thủ công là gì?',
    explanation:
      'Quy trình kiểm thử screen reader thiết yếu: (1) Điều hướng bằng Tab — kiểm tra tất cả phần tử tương tác có thể truy cập và có nhãn mô tả. (2) VoiceOver Rotor (VO+U) — liệt kê tất cả heading, landmark, link; xác minh hệ thống phân cấp hợp lý. (3) NVDA elements list (Insert+F7) — tổng quan landmark/heading/link tương tự. (4) Chế độ form (NVDA): Insert+Space để chuyển đổi — trong chế độ form, chữ cái gõ thay vì điều hướng; xác minh nhãn form và thông báo lỗi. (5) Live region: kích hoạt thay đổi động và xác minh thông báo. (6) Kiểm tra thứ tự đọc khớp với thứ tự hiển thị. Kiểm thử trên: Chrome + NVDA (kết hợp Windows phổ biến nhất) và Safari + VoiceOver (bắt buộc cho iOS). Tối thiểu, kiểm thử các luồng người dùng phổ biến nhất.',
    options: [
      'Chỉ dùng Tab để điều hướng — đủ cho kiểm thử screen reader',
      'VoiceOver: VO+Right/Left arrow (đọc phần tử tiếp/trước), VO+U (rotor cho danh sách landmark/heading), VO+F5 (chọn mục), VO+A (đọc từ con trỏ). NVDA: Insert+F7 (danh sách phần tử), H để điều hướng heading, T cho bảng, B cho nút, Insert+Space (chế độ duyệt vs form). Cả hai: kiểm tra thứ tự đọc, liên kết nhãn form, thông báo live region.',
      'Kiểm thử screen reader chỉ cần kiểm tra heading và link',
      'Công cụ tự động như axe-core có thể thay thế hoàn toàn kiểm thử screen reader',
    ],
  },
  'a11y-028': {
    question:
      'Cách sử dụng hook useButton và useDialog của React Aria để xây dựng component tùy chỉnh hỗ trợ accessibility như thế nào?',
    explanation:
      'Pattern React Aria: const { buttonProps } = useButton({ onPress: handleClick }, ref); return <div {...buttonProps} ref={ref}>Nhấn vào đây</div>. Hook thêm: role="button", tabIndex, onKeyDown (Enter/Space), onPointerDown, aria-disabled, và chuẩn hóa sự kiện trên các thiết bị. useDialog: const { dialogProps, titleProps } = useDialog({}, ref); render role="dialog" aria-modal="true" — kết hợp với useOverlay để bẫy focus và backdrop. Khái niệm chính: hook xử lý hành vi/ARIA, bạn kiểm soát render. Điều này giúp component có thể style bằng bất kỳ CSS nào mà vẫn hỗ trợ accessibility. Kết hợp với useOverlayTrigger, useFocusTrap và DismissButton để có pattern modal hoàn chỉnh.',
    options: [
      'Hook React Aria tự động render component — không cần code bổ sung',
      'useButton cung cấp tất cả thuộc tính aria, trình xử lý bàn phím (Enter/Space), và role="button" cho bất kỳ phần tử nào. useDialog cung cấp ngữ nghĩa modal (role="dialog", aria-modal, aria-labelledby) và quản lý focus. Bạn spread các prop trả về lên phần tử DOM và tự cung cấp render và style.',
      'React Aria chỉ hoạt động với TypeScript — dự án JavaScript không thể dùng',
      'Hook React Aria thay thế nhu cầu sử dụng bất kỳ phần tử HTML ngữ nghĩa nào',
    ],
  },
  'a11y-029': {
    question:
      'Media query CSS prefers-contrast: more có thể dùng để phát hiện khi người dùng yêu cầu tăng độ tương phản màu trong cài đặt hệ điều hành.',
    explanation:
      'prefers-contrast: more phát hiện khi người dùng đã bật "Increase Contrast" (macOS) hoặc chế độ "High Contrast" (Windows). Dùng để: (1) Tăng độ tương phản văn bản vượt mức tối thiểu 4.5:1 tiêu chuẩn. (2) Thêm viền hiển thị cho component chỉ dựa vào màu để phân biệt ranh giới. (3) Làm chỉ báo focus nổi bật hơn. (4) Loại bỏ họa tiết nền hoặc gradient tinh tế giảm khả năng đọc. Ví dụ: @media (prefers-contrast: more) { .card { border: 2px solid currentColor; } }. Các giá trị: more, less, forced (Windows High Contrast Mode), no-preference. Lưu ý: prefers-contrast: forced được kích hoạt bởi chế độ Forced Colors của Windows, nơi trình duyệt ghi đè CSS của bạn — cần kiểm thử riêng cho trường hợp này.',
  },
  'a11y-030': {
    question:
      'WCAG 2.2 Tiêu chí thành công 2.5.8 (Target Size Minimum) là gì và cách triển khai trong thư viện component React?',
    explanation:
      'WCAG 2.5.8 (AA trong WCAG 2.2): tối thiểu 24x24px. Triển khai thực tế: (1) Dùng min-height: 24px; min-width: 24px trên phần tử tương tác. (2) Với nút icon trong UI mật độ cao: vùng click có thể là 24px qua padding ngay cả khi icon hiển thị chỉ 16px. (3) Cách tiếp cận khoảng cách: nếu nút 20x20px, đảm bảo 2px khoảng cách xung quanh để vùng kích hoạt 24x24 không chồng lấp mục tiêu kề bên. (4) Thực hành tốt: nhắm 44x44px (khuyến nghị WCAG AAA và Apple HIG) cho mục tiêu cảm ứng. Trong thư viện component React: thêm kích thước tối thiểu qua CSS mà người dùng thư viện có thể tắt nếu tự xử lý khoảng cách. Token: --touch-target-min: 24px.',
    options: [
      'Tất cả phần tử tương tác phải ít nhất 44x44 CSS pixel',
      'Mục tiêu tương tác phải ít nhất 24x24 CSS pixel, HOẶC có khoảng cách đủ xung quanh sao cho vùng 24x24 quanh tâm mục tiêu không giao với mục tiêu khác. Ngoại lệ: liên kết văn bản inline, mục tiêu trong câu, điều khiển gốc trình duyệt.',
      'Kích thước mục tiêu chỉ áp dụng cho màn hình cảm ứng, không áp dụng cho giao diện desktop',
      'Kích thước mục tiêu chỉ là yêu cầu WCAG AAA — AA không yêu cầu kích thước tối thiểu',
    ],
  },
  'a11y-031': {
    question:
      'Pattern role="combobox" yêu cầu gì để component autocomplete/combobox tùy chỉnh hỗ trợ accessibility?',
    explanation:
      'Pattern ARIA cho combobox (ARIA 1.2): <input role="combobox" aria-expanded="true" aria-autocomplete="list" aria-controls="listbox-id" aria-activedescendant="option-3-id">. Listbox: <ul role="listbox" id="listbox-id">. Mỗi tùy chọn: <li role="option" id="option-3-id" aria-selected="true">. Bàn phím: ArrowDown/Up di chuyển focus (cập nhật aria-activedescendant, không phải DOM focus thực — focus giữ trên input). Home/End cho tùy chọn đầu/cuối. Enter để chọn. Escape đóng popup và trả về giá trị input trước khi mở. Đây là quy trình phức tạp — dùng React Aria useComboBox, Radix UI Combobox, hoặc Headless UI Combobox để xử lý tất cả tương tác này đúng cách.',
    options: [
      'Chỉ cần thêm role="combobox" vào input là xong',
      'Combobox cần: input với role="combobox", aria-expanded (true/false), aria-autocomplete, aria-controls trỏ đến listbox, aria-activedescendant trỏ đến option đang focus. Listbox với role="listbox". Các option với role="option". Hỗ trợ bàn phím đầy đủ: phím mũi tên để điều hướng, Enter để chọn, Escape để đóng, ký tự in được cho tìm kiếm gõ nhanh.',
      'Combobox luôn nên được thay bằng phần tử <select> gốc',
      'Chỉ cần aria-expanded — các thuộc tính khác là tùy chọn cho combobox',
    ],
  },
  'a11y-032': {
    question:
      'Tìm vấn đề accessibility trong triển khai notification toast này:',
    answer:
      'Live region (role="alert"/"status") được tạo động cùng lúc với nội dung. Screen reader chỉ thông báo thay đổi nội dung trong live region đã tồn tại sẵn — live region mới tạo cùng nội dung ban đầu có thể không được thông báo một cách ổn định trên tất cả tổ hợp screen reader/trình duyệt.',
    explanation:
      'Cách sửa: mount container live region rỗng trong DOM khi khởi động ứng dụng, sau đó thêm nội dung toast vào đó. Trong React: render <div role="status" aria-live="polite" aria-atomic="true" id="toast-container"></div> ở root ứng dụng (hoặc dùng portal). Khi hiển thị toast, cập nhật nội dung của container đã tồn tại. Screen reader theo dõi live region có sẵn và thông báo khi nội dung thay đổi. Bổ sung: cung cấp thời gian hiển thị tối thiểu dài hơn 3 giây (WCAG 2.2.1), hoặc cách cho người dùng tạm dừng tự động ẩn.',
  },
  'a11y-033': {
    question:
      'Hook useComboBox của React Aria khác gì so với việc xây dựng combobox bằng thuộc tính ARIA thuần?',
    explanation:
      'Bên trong React Aria: useComboBox kết hợp ~10 hook cấp thấp hơn: useTextField, useListBox, useOption, useOverlayTrigger, useFocusScope, useKeyboard, useInteractOutside, useOverlayPosition, và useHideOutside. Mỗi hook xử lý một khía cạnh của tương tác. Kết quả: một combobox hoạt động đúng với VoiceOver trên iOS (mô hình tương tác khác desktop), NVDA ở chế độ browse vs forms, Android TalkBack, Windows High Contrast Mode, và ngôn ngữ RTL. Xây dựng từ đầu thường mất nhiều tháng và vẫn bỏ sót trường hợp biên. Dùng useComboBox cho bạn tất cả với API gọn gàng, bạn kiểm soát render và style.',
    options: [
      'Chúng giống hệt nhau về chức năng — React Aria chỉ cung cấp cú pháp gọn hơn',
      'React Aria useComboBox xử lý: (1) Đặc tả điều hướng bàn phím đầy đủ theo WAI-ARIA APG; (2) Cử chỉ screen reader di động (vuốt VoiceOver, TalkBack); (3) Quốc tế hóa (đảo phím mũi tên RTL, tìm kiếm gõ nhanh theo locale); (4) Chuẩn hóa sự kiện con trỏ (chuột, cảm ứng, bút stylus); (5) Xử lý trường hợp biên như khôi phục focus, quản lý focus ảo, và workaround lỗi screen reader tích lũy từ kiểm thử chuyên sâu.',
      'React Aria chỉ hoạt động trên trình duyệt có Pointer Events API',
      'React Aria yêu cầu framework CSS cụ thể để hoạt động đúng',
    ],
  },
  'a11y-034': {
    question:
      'Thêm tabindex="0" vào phần tử không tương tác như <div> nói chung là thực hành tốt để đảm bảo người dùng bàn phím truy cập được tất cả nội dung.',
    explanation:
      'Thêm tabindex="0" vào phần tử không tương tác buộc người dùng bàn phím phải Tab qua nội dung không thực hiện hành động gì — tăng số điểm dừng Tab mà không cung cấp bất kỳ chức năng nào. Điều này lãng phí thời gian người dùng bàn phím phải Tab qua mọi phần tử có thể focus. Chỉ phần tử tương tác (nút, liên kết, trường form) mới nên nằm trong thứ tự tab. Nếu cần làm phần tử tĩnh có thể focus theo chương trình (ví dụ: chuyển focus đến heading sau điều hướng), dùng tabindex="-1" — cho phép focus theo chương trình (element.focus()) mà không thêm vào thứ tự tab tự nhiên. Trường hợp hợp lệ duy nhất dùng tabindex="0" trên phần tử không phải gốc là khi nó thực sự hoạt động như widget tương tác tùy chỉnh có trình xử lý bàn phím.',
  },
  'a11y-035': {
    question:
      'Chiến lược đúng để hỗ trợ cả prefers-reduced-motion và prefers-contrast trong hệ thống token animation và theme của design system là gì?',
    explanation:
      'Chiến lược accessibility motion/contrast cho design system: (1) Token motion: --animation-duration-fast: 150ms; --animation-easing-standard: ease-in-out. Trong @media (prefers-reduced-motion: reduce): ghi đè thành --animation-duration-fast: 0.01ms. Component dùng token — tự động giảm mà không cần sửa đổi. (2) Token contrast: token ngữ nghĩa như --color-text-secondary tham chiếu đến xám trung bình. Trong @media (prefers-contrast: more): ánh xạ lại --color-text-secondary thành giá trị tối hơn đạt 7:1. Component dùng token ngữ nghĩa tự động tăng cường. (3) Phát hiện JavaScript (matchMedia) cho trường hợp cần render có điều kiện khác nhau (ví dụ: bỏ hoàn toàn hiệu ứng particle thay vì chỉ làm chậm).',
    options: [
      'Xử lý các media query này riêng lẻ trong stylesheet từng component',
      'Xây dựng motion và contrast như tầng token hạng nhất: định nghĩa token animation-duration và animation-easing; ghi đè về gần-không trong bộ token reduced-motion. Định nghĩa token contrast với tên ngữ nghĩa; ghi đè token màu ngữ nghĩa dưới prefers-contrast: more. Áp dụng ghi đè toàn cục qua cascade CSS custom property trong khối @media — component tự động thích ứng mà không cần query riêng từng component.',
      'Dùng JavaScript để phát hiện các tùy chọn này và chuyển đổi class CSS trên <body>',
      'Chỉ hỗ trợ các tùy chọn này nếu tất cả người dùng yêu cầu rõ ràng trong cài đặt ứng dụng',
    ],
  },
}
