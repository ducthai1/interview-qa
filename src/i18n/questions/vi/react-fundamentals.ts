import type { QuestionTranslationMap } from '../types'

export const reactFundamentalsVi: QuestionTranslationMap = {
  'rf-001': {
    question:
      'JSX được biên dịch thành gì trong một dự án React 17+ hiện đại (sử dụng JSX transform mới)?',
    explanation:
      'React 17 giới thiệu "JSX transform mới". Babel/TypeScript giờ tự động import `_jsx` và `_jsxs` từ `react/jsx-runtime`, loại bỏ nhu cầu phải `import React from "react"` trong mỗi file. Trước React 17, quá trình transform tạo ra các lệnh gọi `React.createElement()`, đó là lý do việc import là bắt buộc.',
    options: [
      'Các lệnh gọi React.createElement()',
      'Các lệnh gọi _jsx() được tự động import từ react/jsx-runtime',
      'Các lệnh gọi document.createElement()',
      'Các template literal của Babel',
    ],
  },
  'rf-002': {
    question:
      'Kết quả của đoạn JSX sau sau khi biên dịch (transform cũ) là gì?',
    explanation:
      'Các thuộc tính JSX ánh xạ trực tiếp thành các key của object được truyền làm tham số thứ hai cho `React.createElement`. Thuộc tính HTML `class` trở thành `className` trong JSX (quy ước camelCase). Tên thẻ là chuỗi cho các phần tử DOM và là tham chiếu cho component.',
    options: [
      'React.createElement("div", { className: "box", id: myId }, "Hello")',
      'React.createElement("div", { class: "box", id: myId }, "Hello")',
      'React.createElement(div, { className: "box", id: myId }, "Hello")',
      'React.render("div", { className: "box" }, "Hello")',
    ],
  },
  'rf-003': {
    question:
      'Trong JSX, bạn có thể sử dụng biểu thức JavaScript bên trong `{}` nhưng không thể dùng câu lệnh (ví dụ: khối `if/for`).',
    explanation:
      'Nội suy `{}` trong JSX chỉ chấp nhận biểu thức — các giá trị có kết quả trả về (toán tử ba ngôi, lệnh gọi hàm, template literal). Các câu lệnh như `if`, `for`, hoặc `while` không phải biểu thức và không thể sử dụng trực tiếp. Các cách giải quyết bao gồm toán tử ba ngôi, `&&`, hoặc tách logic vào một hàm trả về JSX.',
  },
  'rf-004': {
    question: 'Phát biểu nào mô tả đúng nhất về Virtual DOM trong React?',
    explanation:
      'Virtual DOM là một cây object JavaScript thuần mà React duy trì trong bộ nhớ. Khi state thay đổi, React render lại thành một cây ảo mới, so sánh nó với cây trước đó (reconciliation), và gom các thay đổi DOM thực tế tối thiểu cần thiết — điều này giúp cập nhật nhanh.',
    options: [
      'Một bản sao của DOM thực được lưu trong cơ sở dữ liệu',
      'Một cây object JavaScript nhẹ trong bộ nhớ phản chiếu cấu trúc DOM thực',
      'Một API trình duyệt được cung cấp bởi Chrome DevTools',
      'Shadow DOM được sử dụng bởi web component',
    ],
  },
  'rf-005': {
    question:
      'Trong quá trình reconciliation, React sử dụng thuật toán "diffing". Độ phức tạp thời gian của thuật toán diff heuristic của React là bao nhiêu?',
    explanation:
      'Thuật toán tree-diff ngây thơ có độ phức tạp O(n³). React sử dụng hai heuristic để đạt O(n): (1) Hai phần tử có type khác nhau tạo ra cây hoàn toàn khác nhau. (2) Lập trình viên có thể gợi ý các item nào ổn định giữa các lần render bằng prop `key`. Điều này giúp reconciliation danh sách hiệu quả.',
    options: ['O(n³)', 'O(n²)', 'O(n)', 'O(log n)'],
  },
  'rf-006': {
    question:
      'Điều gì xảy ra trong quá trình reconciliation của React khi một phần tử thay đổi type (ví dụ: từ `<div>` sang `<span>`)?',
    explanation:
      'Khi type của phần tử thay đổi, React giả định cây con là hoàn toàn khác biệt. Nó unmount cây cũ (gọi các cleanup effect và `componentWillUnmount`), hủy các node DOM, sau đó mount một cây con hoàn toàn mới. Đây là lý do tại sao việc chuyển đổi giữa các loại component có thể reset state một cách bất ngờ.',
    options: [
      'React cập nhật node DOM hiện tại tại chỗ',
      'React chỉ thực hiện so sánh văn bản trên các phần tử con',
      'React phá hủy toàn bộ cây con và mount một cây mới, reset tất cả state',
      'React gộp props cũ và mới vào cùng một node',
    ],
  },
  'rf-007': {
    question:
      'Điểm khác biệt chính giữa functional component và class component trong React hiện đại là gì?',
    explanation:
      'Từ React 16.8, functional component có đầy đủ tính năng tương đương thông qua hooks. Functional component sử dụng `useState`, `useEffect`, v.v. trong khi class component sử dụng `this.state`, `componentDidMount`, v.v. Đội ngũ React khuyến nghị sử dụng functional component cho tất cả code mới.',
    options: [
      'Functional component không thể giữ state',
      'Class component nhanh hơn do ít overhead',
      'Functional component sử dụng hooks cho state và side effect; class component sử dụng các phương thức lifecycle',
      'Class component là cách duy nhất để sử dụng Context',
    ],
  },
  'rf-008': {
    question:
      'Props trong React là bất biến — một component không bao giờ nên thay đổi trực tiếp props của chính nó.',
    explanation:
      'Props truyền một chiều từ component cha sang component con và là chỉ đọc từ phía component con. Việc thay đổi props vi phạm nguyên tắc luồng dữ liệu một chiều của React và có thể gây ra hành vi render không dự đoán được. Nếu một giá trị cần thay đổi, nó nên được quản lý dưới dạng state trong component cha.',
  },
  'rf-009': {
    question: 'Component sau render ra gì?',
    explanation:
      '`children` là một prop đặc biệt được tự động điền với bất kỳ JSX nào được lồng giữa thẻ mở và đóng của một component. Ở đây `children` là một mảng gồm hai phần tử `<p>`, được render bên trong div wrapper.',
    options: [
      'Hai thẻ `<p>` bên trong một `<div className="wrapper">`',
      'Lỗi — Wrapper không chấp nhận children',
      'Không có gì — children bị bỏ qua trừ khi được render rõ ràng',
      'Một `<div>` với chuỗi "[object Object]"',
    ],
  },
  'rf-010': {
    question:
      'Điều kiện nào phải đúng để React nhận diện một hàm là component hợp lệ?',
    explanation:
      'React phân biệt giữa phần tử DOM (thẻ viết thường) và component (thẻ viết hoa) hoàn toàn dựa trên ký tự đầu tiên của định danh được sử dụng trong JSX. Một component có thể là bất kỳ hàm nào (arrow function hoặc khai báo hàm) trả về nội dung có thể render (JSX, null, chuỗi, v.v.).',
    options: [
      'Phải kế thừa React.Component',
      'Phải được khai báo bằng từ khóa `function` (không phải arrow function)',
      'Tên phải bắt đầu bằng chữ hoa và phải trả về JSX hoặc null',
      'Phải được đăng ký với ReactDOM.register()',
    ],
  },
  'rf-011': {
    question: '`useState` trả về gì?',
    explanation:
      '`useState` trả về một mảng hai phần tử (tuple): giá trị state hiện tại và hàm setter. Cú pháp destructuring `const [count, setCount] = useState(0)` là pattern chuẩn. Hàm setter kích hoạt re-render khi được gọi với giá trị mới.',
    options: [
      'Chỉ giá trị state hiện tại',
      'Một object `{ value, setValue }`',
      'Một tuple `[currentState, setterFunction]`',
      'Một Promise resolve thành giá trị state',
    ],
  },
  'rf-012': {
    question: 'Kết quả được log ra sau khi nhấn nút một lần là gì?',
    explanation:
      '`count` bên trong `handleClick` được capture từ lần render hiện tại (closure) — nó là `0`. Cả hai lệnh `setCount(count + 1)` đều enqueue `setCount(0 + 1)`, nên state chỉ tăng một lần lên `1`. `console.log` chạy đồng bộ trước khi re-render, nên nó log `0`. Nút sau đó re-render hiển thị `1`. Để tăng đúng hai lần, sử dụng dạng hàm: `setCount(prev => prev + 1)`.',
    options: [
      '2, và nút hiển thị 2',
      '0, và nút hiển thị 1',
      '1, và nút hiển thị 2',
      '0, và nút hiển thị 2',
    ],
  },
  'rf-013': {
    question:
      'Cập nhật state trong React luôn đồng bộ — gọi `setState` cập nhật ngay lập tức `this.state` hoặc biến state.',
    explanation:
      'Cập nhật state là bất đồng bộ và được gom lại (batched). Sau khi gọi `setState` hoặc hàm setter của `useState`, biến vẫn giữ giá trị cũ trong lần thực thi hiện tại. React lên lịch re-render và giá trị mới chỉ có sẵn trong chu kỳ render tiếp theo. Trong React 18, tất cả cập nhật được batch mặc định, bao gồm cả trong `setTimeout` và trình xử lý sự kiện gốc.',
  },
  'rf-014': {
    question: 'Đoạn này render ra gì khi `isLoggedIn` là `false`?',
    explanation:
      'Khi `isLoggedIn` là `false`: `false && <p>...</p>` đánh giá thành `false`, mà React không render (các giá trị falsy `false`, `null`, `undefined` không được render). Toán tử ba ngôi render nhánh else: `<p>Please log in</p>`. Lưu ý: `0 && <p/>` sẽ render `0` vì `0` là số falsy mà React vẫn render.',
    options: [
      'Không có gì bên trong div',
      'Chỉ `<p>Please log in</p>`',
      'Văn bản `false` và `<p>Please log in</p>`',
      '`<p>Welcome back!</p>` và `<p>Please log in</p>`',
    ],
  },
  'rf-015': {
    question:
      'Đoạn code sau có một lỗi phổ biến với conditional rendering. Hãy xác định và sửa nó.',
    explanation:
      'Khi `count` là `0`, `0 && <span>...</span>` short-circuit và biểu thức đánh giá thành `0`. React render `0` vào DOM, điều này có thể không mong muốn. Cách sửa là `count > 0 && <span>...</span>` hoặc `Boolean(count) && <span>...</span>` để đảm bảo giá trị boolean đúng.',
    options: [
      'Không có lỗi — render đúng cho mọi giá trị',
      'Lỗi: khi `count` là `0`, React render `0` thay vì không hiển thị gì. Sửa: dùng `count > 0 &&` hoặc `!!count &&`',
      'Lỗi: `count` phải là chuỗi, không phải số',
      'Lỗi: `&&` không hoạt động trong JSX, hãy dùng toán tử ba ngôi thay thế',
    ],
  },
  'rf-016': {
    question:
      'Tại sao React yêu cầu prop `key` trên các phần tử bên trong danh sách được map?',
    explanation:
      'Key cung cấp cho React một định danh ổn định cho mỗi phần tử trong danh sách động. Trong quá trình reconciliation, React sử dụng key để khớp các phần tử giữa các lần render, cho phép tái sử dụng các node DOM hiện có thay vì tạo lại chúng. Nếu không có key, React quay về đối chiếu dựa trên chỉ mục, có thể gây ra việc giữ state sai và hiệu suất kém.',
    options: [
      'Cho mục đích tạo kiểu CSS',
      'Để gán cho phần tử một thuộc tính id HTML duy nhất',
      'Để giúp React xác định item nào đã thay đổi, được thêm, hoặc bị xóa trong quá trình reconciliation',
      'Nó là tùy chọn và chỉ cải thiện trải nghiệm lập trình viên',
    ],
  },
  'rf-017': {
    question:
      'Sử dụng chỉ mục mảng làm `key` luôn an toàn và không tạo ra lỗi.',
    explanation:
      'Sử dụng chỉ mục làm key gây ra lỗi khi danh sách có thể được sắp xếp lại, lọc, hoặc có item được chèn/xóa ở giữa. React sẽ gán key cho các phần tử sai, có thể gây ra state (ví dụ: giá trị input, animation) bị liên kết với item sai. Nên luôn ưu tiên sử dụng ID duy nhất ổn định từ dữ liệu của bạn.',
  },
  'rf-018': {
    question: 'SyntheticEvent trong React là gì?',
    explanation:
      'React bọc các sự kiện trình duyệt gốc trong một object `SyntheticEvent` chuẩn hóa API giữa các trình duyệt (ví dụ: `stopPropagation`, `preventDefault` hoạt động nhất quán). Trong React 17+, ủy quyền sự kiện chuyển từ `document` sang container gốc React, và event pooling (nơi synthetic event được tái sử dụng) đã bị loại bỏ.',
    options: [
      'Một loại sự kiện tùy chỉnh do lập trình viên định nghĩa',
      'Một wrapper đa trình duyệt bao bọc sự kiện trình duyệt gốc với cùng API',
      'Một sự kiện kích hoạt trước sự kiện DOM thực',
      'Một phiên bản debounce của sự kiện gốc',
    ],
  },
  'rf-019': {
    question: 'Trình xử lý sự kiện này có gì sai?',
    explanation:
      '`e.preventDefault` không có `()` chỉ tham chiếu phương thức mà không gọi nó. Form vẫn sẽ submit và gây tải lại trang. Đây là lỗi đánh máy rất phổ biến. Luôn gọi nó bằng `e.preventDefault()` với dấu ngoặc đơn.',
    options: [
      'Không có gì sai',
      '`e.preventDefault` nên được gọi là `e.preventDefault()` — không có dấu ngoặc đơn, nó chỉ là tham chiếu thuộc tính, không phải lệnh gọi',
      '`handleSubmit` nên là arrow function',
      '`onSubmit` nên là `on-submit`',
    ],
  },
  'rf-020': {
    question: 'Bạn nên truyền tham số cho trình xử lý sự kiện trong JSX như thế nào?',
    explanation:
      '`onClick={deleteItem(id)}` gọi ngay `deleteItem(id)` trong quá trình render và gán giá trị trả về làm handler — hầu như luôn là lỗi. Pattern đúng là bọc trong arrow function: `onClick={() => deleteItem(id)}`. Ngoài ra, `onClick={deleteItem.bind(null, id)}` cũng hoạt động nhưng ít thông dụng trong React hiện đại.',
    options: [
      '`onClick={deleteItem(id)}` — gọi trực tiếp với tham số',
      '`onClick={() => deleteItem(id)}` — bọc trong arrow function',
      '`onClick={deleteItem, id}` — truyền dưới dạng hai props',
      '`onClick={deleteItem.bind(id)}` — bind chỉ hoạt động cho class component',
    ],
  },
  'rf-021': {
    question:
      'Sự khác biệt giữa input controlled và uncontrolled trong React là gì?',
    explanation:
      'Input controlled gắn giá trị của nó với state React: `<input value={state} onChange={e => setState(e.target.value)} />`. React là "nguồn sự thật duy nhất." Input uncontrolled để DOM quản lý giá trị, truy cập qua `ref`. Input uncontrolled đơn giản hơn cho các form không quan trọng; input controlled cho phép xác thực tức thì và giao diện phái sinh.',
    options: [
      'Input controlled sử dụng `ref`, input uncontrolled sử dụng `value`',
      'Input controlled có giá trị được điều khiển bởi state React; input uncontrolled lưu trữ giá trị riêng trong DOM',
      'Input controlled là chỉ đọc; input uncontrolled có thể chỉnh sửa',
      'Không có sự khác biệt thực tế',
    ],
  },
  'rf-022': {
    question: 'Input này tạo ra cảnh báo React. Vấn đề là gì?',
    explanation:
      'React báo "A component is changing an uncontrolled input to be controlled" khi prop `value` chuyển từ `undefined`/`null` sang chuỗi thực tế. Cách sửa là khởi tạo state với chuỗi rỗng `""` để input là controlled ngay từ lần render đầu tiên.',
    options: [
      'Không có vấn đề — `undefined` là state khởi tạo hợp lệ',
      'Cảnh báo: component chuyển từ uncontrolled sang controlled. Khi `value` là `undefined`, React coi input là uncontrolled; khi nó sau đó trở thành chuỗi, nó trở thành controlled. Sửa: khởi tạo bằng `""` thay vì `undefined`',
      'Cảnh báo: `onChange` thiếu lệnh gọi `event.persist()`',
      'Lỗi: `useState` không chấp nhận `undefined`',
    ],
  },
  'rf-023': {
    question:
      'Trong functional component, tổ hợp hook nào bao phủ toàn bộ lifecycle (mount, update, unmount)?',
    explanation:
      '`useEffect(callback)` không có mảng dependency chạy sau mỗi lần render (mount + update) và hàm cleanup chạy khi unmount. Hook duy nhất này bao phủ cả ba giai đoạn lifecycle của class: componentDidMount, componentDidUpdate, và componentWillUnmount. Mảng dependency rỗng `[]` chỉ bao phủ mount và unmount — nó bỏ qua update.',
    options: [
      'Chỉ `useState`',
      '`useEffect` không có mảng dependency chạy khi mount + mỗi lần update; cleanup của nó chạy khi unmount — bao phủ cả ba giai đoạn lifecycle',
      '`useEffect(() => { return () => {} }, [])` bao phủ cả ba giai đoạn',
      'Các giai đoạn lifecycle chỉ tồn tại trong class component',
    ],
  },
  'rf-024': {
    question: 'Tương đương của `componentDidMount` trong functional component là gì?',
    explanation:
      '`useEffect` với mảng dependency rỗng `[]` chạy effect chính xác một lần sau lần render đầu tiên, tương đương `componentDidMount`. Không có mảng dependency nghĩa là effect chạy sau mỗi lần render (tương đương `componentDidMount` + `componentDidUpdate`). Truyền `null` không phải là pattern hợp lệ.',
    options: [
      '`useEffect(() => { ... })` — không có mảng dependency',
      '`useEffect(() => { ... }, [])` — mảng dependency rỗng',
      '`useEffect(() => { ... }, null)` — dependency là null',
      '`useMounted(() => { ... })`',
    ],
  },
  'rf-025': {
    question: '`React.StrictMode` làm gì trong môi trường development?',
    explanation:
      'Trong development, `StrictMode` gọi kép các hàm component, khởi tạo `useState`, callback `useMemo`/`useReducer`, và setup+cleanup của effect để giúp phát hiện hàm không thuần hoặc thiếu cleanup. Nó cũng cảnh báo về các phương thức lifecycle đã lỗi thời và context cũ. Nó không có hiệu lực trong production.',
    options: [
      'Ngăn tất cả lỗi runtime làm crash ứng dụng',
      'Bật kiểm tra kiểu TypeScript bên trong JSX',
      'Cố ý gọi kép các hàm như render và effect để phát hiện lỗi side-effect, và cảnh báo về các API đã lỗi thời',
      'Buộc ứng dụng chạy ở chế độ render đồng bộ',
    ],
  },
  'rf-026': {
    question:
      'Mục đích của React Fragment (`<>...</>` hoặc `<React.Fragment>`) là gì?',
    explanation:
      'React yêu cầu component trả về một phần tử gốc duy nhất. Fragment cho phép bạn gom nhóm nhiều phần tử mà không thêm node DOM bọc ngoài. Cú pháp ngắn `<>...</>` không hỗ trợ `key` hoặc các prop khác; `<React.Fragment key={id}>` cần thiết khi bạn cần key (ví dụ: trong danh sách).',
    options: [
      'Để lazy-load code component',
      'Để gom nhóm nhiều phần tử con mà không thêm node DOM phụ',
      'Để tạo phạm vi component biệt lập',
      'Để cung cấp giao diện dự phòng cho Suspense',
    ],
  },
  'rf-027': {
    question: 'Khi nào bạn sẽ sử dụng `ReactDOM.createPortal(child, container)`?',
    explanation:
      'Portal render JSX vào một node DOM tùy ý (ví dụ: `document.body`) bên ngoài DOM cha của cây React, hữu ích cho modal, tooltip, và overlay cần thoát khỏi `overflow:hidden` hoặc stacking context z-index. Quan trọng là, các sự kiện React (bao gồm bubbling) vẫn theo cây component React, không theo cây DOM.',
    options: [
      'Để render component trong web worker',
      'Để render các phần tử con vào một node DOM bên ngoài cây DOM của component cha, trong khi vẫn giữ nguyên context React',
      'Để tạo ranh giới micro-frontend',
      'Để lazy-load component chỉ khi nó xuất hiện trong viewport',
    ],
  },
  'rf-028': {
    question: 'Một component React có thể trả về `null` để không render gì.',
    explanation:
      'Trả về `null` từ component là một pattern hợp lệ và phổ biến cho conditional rendering. Nó không render gì vào DOM và không ảnh hưởng đến lifecycle của React — các effect vẫn chạy khi mount/update/unmount ngay cả với component trả về null.',
  },
  'rf-029': {
    question: 'Kết quả render là gì?',
    explanation:
      '`null`, `undefined`, và `false` cố ý không được React render. Tuy nhiên, `0` (số không) được render vì nó là một React node hợp lệ. Đây là lỗi phổ biến: `{items.length && <List />}` render `0` khi mảng rỗng. Cách sửa: `{items.length > 0 && <List />}`.',
    options: [
      'Chỉ `<span>visible</span>`',
      '`0` và `<span>visible</span>`',
      '`nullundefinedfalse0` và `<span>visible</span>`',
      'Lỗi runtime',
    ],
  },
  'rf-030': {
    question:
      'Sự khác biệt giữa `React.cloneElement(element, props)` và bọc trong component mới là gì?',
    explanation:
      '`React.cloneElement` hữu ích trong các pattern như compound component hoặc render props, nơi component cha cần tiêm thêm props (ví dụ: `isActive`, `onClick`) vào children được truyền qua `children` hoặc render prop — mà không thêm lớp DOM/component phụ. Nó gộp props nông với bản gốc, giữ nguyên key và ref trừ khi bị ghi đè.',
    options: [
      'Chúng giống hệt nhau — `cloneElement` chỉ là cú pháp ngắn gọn',
      '`cloneElement` sao chép phần tử và gộp thêm props vào nó (hữu ích trong pattern HOC/compound component); bọc thêm một lớp component mới trong cây',
      '`cloneElement` chỉ hoạt động với class component',
      '`cloneElement` luôn tạo bản sao sâu của children của phần tử',
    ],
  },
  'rf-031': {
    question:
      'Mục đích của `React.Children.map` so với `Array.map` gốc trên `children` là gì?',
    explanation:
      '`props.children` có tính đa hình: nó có thể là `undefined` (không có children), một phần tử React đơn (không phải mảng), hoặc một mảng. Gọi `.map()` trực tiếp trên nó sẽ lỗi khi nó là phần tử đơn. `React.Children.map` xử lý tất cả các trường hợp một cách đồng nhất. `React.Children.toArray` là tiện ích khác luôn trả về mảng phẳng.',
    options: [
      'Nó nhanh hơn map gốc',
      'Nó xử lý an toàn khi `children` là `undefined`, một phần tử đơn, hoặc mảng mà không cần người gọi phải chuẩn hóa trước',
      'Nó tự động thêm key cho mọi child',
      'Nó lọc bỏ các children `null` và `false`',
    ],
  },
  'rf-032': {
    question:
      'Trong React 18, automatic batching thay đổi gì so với React 17?',
    explanation:
      'React 17 chỉ batch cập nhật bên trong các trình xử lý sự kiện do React quản lý. Các cập nhật bên trong `setTimeout`, `setInterval`, `addEventListener` gốc, hoặc Promise kích hoạt nhiều lần re-render. Automatic batching của React 18 gom tất cả cập nhật trong cùng một mục hàng đợi microtask/task thành một lần re-render duy nhất, cải thiện hiệu suất. Dùng `ReactDOM.flushSync()` để thoát khỏi batching khi cần.',
    options: [
      'Batching đã bị loại bỏ — tất cả cập nhật giờ được flush đồng bộ',
      'Batching giờ chỉ áp dụng cho các cập nhật `useTransition`',
      'React 18 batch tất cả cập nhật state mặc định (bao gồm cả trong `setTimeout`, Promise, và trình xử lý sự kiện gốc), trong khi React 17 chỉ batch cập nhật bên trong trình xử lý sự kiện React',
      'React 18 giới thiệu batching lần đầu tiên',
    ],
  },
  'react-fund-033': {
    question:
      'Trong React 19, làm thế nào để truyền ref cho functional component con mà không sử dụng `forwardRef`?',
    explanation:
      'React 19 loại bỏ nhu cầu sử dụng `forwardRef`. Functional component giờ nhận `ref` như một prop thông thường cùng với tất cả props khác: `function Input({ ref, ...props }) { return <input ref={ref} {...props} />; }`. `React.forwardRef` vẫn hoạt động để tương thích ngược nhưng giờ được coi là legacy. Điều này đơn giản hóa đáng kể việc viết component.',
    options: [
      'Bạn vẫn phải sử dụng `React.forwardRef` — không có gì thay đổi',
      'Truyền `ref` như một prop thông thường; React 19 cho phép function component nhận `ref` trực tiếp trong object props',
      'Dùng tên prop tùy chỉnh như `innerRef` và gán thủ công',
      'Dùng `useImperativeHandle` tại nơi gọi',
    ],
  },
  'react-fund-034': {
    question: 'Trong React 19, bạn render context provider như thế nào?',
    explanation:
      'React 19 cho phép render `<ThemeContext value={theme}>` trực tiếp — object context giờ là phần tử JSX hợp lệ hoạt động như provider của chính nó. Cú pháp `<ThemeContext.Provider>` vẫn hoạt động nhưng đã bị deprecated. Điều này giảm boilerplate và làm việc sử dụng context ngắn gọn hơn.',
    options: [
      '`<ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>`',
      '`<ThemeContext value={theme}>{children}</ThemeContext>` — object context có thể được sử dụng trực tiếp như provider',
      '`<Provider context={ThemeContext} value={theme}>{children}</Provider>`',
      'Context provider đã bị loại bỏ trong React 19',
    ],
  },
  'react-fund-035': {
    question:
      'Sự khác biệt thực tế chính giữa JSX transform cũ (`React.createElement`) và JSX transform mới (`react/jsx-runtime`) là gì?',
    explanation:
      'Trước React 17, mỗi file sử dụng JSX cần `import React from "react"` vì JSX được biên dịch thành `React.createElement(...)`. JSX transform mới (React 17+) tự động import `_jsx`/`_jsxs` từ `react/jsx-runtime` lúc biên dịch — không cần import React thủ công. Nó cũng xử lý children đơn so với nhiều children hiệu quả hơn bằng cách tách chúng khỏi object props.',
    options: [
      'Transform mới chậm hơn nhưng tạo bundle nhỏ hơn',
      'Transform mới tự động import `_jsx` từ `react/jsx-runtime`, nên bạn không cần `import React from "react"` trong mỗi file. Runtime cũng có cải thiện hiệu suất nhỏ cho việc xử lý children.',
      'Transform mới chỉ hoạt động với TypeScript',
      'Transform mới tạo ra output DOM khác',
    ],
  },
  'react-fund-036': {
    question:
      'Nguyên nhân nào gây ra cảnh báo hydration mismatch trong React và cách sửa phổ biến là gì?',
    explanation:
      'Hydration mismatch xảy ra khi HTML server và lần render client đầu tiên tạo ra output khác nhau. React log cảnh báo và vá DOM (React 18 linh hoạt hơn với mismatch thuộc tính nhưng vẫn báo lỗi với mismatch text/cấu trúc). Nguyên nhân phổ biến: `new Date()`, `Math.random()`, kiểm tra `window`, timestamp, hoặc dữ liệu riêng người dùng được render phía server. Prop `suppressHydrationWarning` tắt cảnh báo mismatch cho một phần tử đơn với sự khác biệt có chủ đích.',
    options: [
      'Sử dụng `useEffect` bên trong Server Component',
      'HTML render từ server không khớp với những gì React cố render trên client. Nguyên nhân phổ biến: render `Date.now()`, `Math.random()`, API chỉ có trên trình duyệt, hoặc dữ liệu phụ thuộc locale giữa server và client. Sửa: dùng `useId` cho ID, tắt cảnh báo bằng `suppressHydrationWarning`, hoặc trì hoãn render chỉ dành cho trình duyệt bằng `useEffect`.',
      'Thiếu prop `key` trên item danh sách khi SSR',
      'Sử dụng async component trong client bundle',
    ],
  },
  'react-fund-037': {
    question:
      'Tab "Profiler" trong React DevTools cho phép bạn làm gì?',
    explanation:
      'React DevTools Profiler ghi lại một phiên các commit. Cho mỗi commit, nó hiển thị biểu đồ flame của tất cả component đã render, xếp hạng theo thời gian render. Nhấn vào component hiển thị "tại sao nó render?" — props/state/context nào đã thay đổi. Đây là công cụ chính để chẩn đoán re-render không cần thiết và nút cổ chai hiệu suất.',
    options: [
      'Chỉnh sửa mã nguồn component trong trình duyệt',
      'Ghi lại các lần render, xem component nào đã render trong mỗi commit, mỗi cái mất bao lâu, và tại sao chúng render (nguyên nhân kích hoạt re-render)',
      'Giám sát các yêu cầu mạng do component thực hiện',
      'Chạy unit test trong trình duyệt',
    ],
  },
  'react-fund-038': {
    question: 'Các giải pháp chính cho prop drilling trong React là gì?',
    explanation:
      'Prop drilling — truyền props qua nhiều component trung gian không sử dụng chúng — có nhiều giải pháp: (1) **Context API**: chia sẻ giá trị mà không cần truyền prop rõ ràng; tốt nhất cho dữ liệu ít thay đổi. (2) **Hợp thành component**: truyền component cuối cùng dưới dạng prop/children, bỏ qua các component trung gian hoàn toàn. (3) **Thư viện quản lý state**: Zustand, Jotai, Redux Toolkit cung cấp subscription chi tiết. Chọn giải pháp đơn giản nhất cho từng trường hợp sử dụng.',
    options: [
      'Chỉ Redux mới có thể giải quyết prop drilling',
      'React Context (cho dữ liệu toàn cục ít thay đổi), hợp thành component (truyền component/children thay vì dữ liệu thô), và trình quản lý state bên ngoài (Zustand, Jotai) cho state phức tạp hoặc thay đổi thường xuyên',
      'Đổi tên props ở mỗi cấp để tránh vấn đề',
      'Dùng `React.cloneElement` để tiêm props tự động ở mọi cấp',
    ],
  },
  'react-fund-039': {
    question:
      'Pattern "render slot" / named children là gì và khi nào nó hữu ích?',
    explanation:
      'Các prop slot có tên cho phép component định nghĩa nhiều vùng có thể hợp thành độc lập. Không giống cây children lồng sâu, slot cho phép người dùng cung cấp JSX tùy ý cho mỗi vùng trong khi component kiểm soát layout. Điều này phổ biến trong component layout, dialog (header/footer/body), và shell hệ thống thiết kế. Nó giảm sự phụ thuộc so với truyền data props thô.',
    options: [
      'Một anti-pattern — component chỉ nên dùng một prop `children` duy nhất',
      'Truyền JSX props có tên (như `header` và `sidebar`) dưới dạng "slot" cho phép người dùng kiểm soát nhiều vùng được đặt độc lập của component mà không cần lồng sâu các wrapper',
      'Chỉ có thể thực hiện với class component sử dụng `this.props`',
      'Prop `children` không thể được sử dụng cùng với các prop JSX khác',
    ],
  },
  'react-fund-040': {
    question:
      'Trong React 19, cách ưu tiên để định nghĩa giá trị prop mặc định cho functional component là gì, và tại sao `defaultProps` bị deprecated?',
    explanation:
      'React 19 chính thức deprecated `Component.defaultProps` cho function component (sẽ bị loại bỏ trong phiên bản major tương lai). Thay thế thông dụng là destructuring tham số mặc định ES6: `function Button({ color = "blue" }) {}`. Điều này được engine JS xử lý trực tiếp, không cần cơ chế riêng của React, và hoạt động đúng với suy luận kiểu TypeScript. `defaultProps` vẫn hoạt động trên class component hiện tại.',
    options: [
      '`defaultProps` vẫn là cách tiếp cận được khuyến nghị trong React 19',
      'Dùng destructuring tham số mặc định JavaScript: `function Button({ color = "blue", size = "md" }) {}`. `defaultProps` trên function component bị deprecated vì điều tương tự có thể đạt được nguyên bản và `defaultProps` thêm overhead runtime.',
      'Dùng phương thức static `getDefaultProps()` riêng biệt',
      'Bọc component trong `React.memo` với tham số defaults',
    ],
  },
  'react-fund-041': {
    question:
      'Điều gì xảy ra với state của component khi bạn thay đổi prop `key` của nó?',
    explanation:
      'Thay đổi `key` là cách React-idiomatic để buộc reset hoàn toàn component. React coi key khác là định danh phần tử khác: nó unmount instance cũ (chạy cleanup effect) và mount instance mới với state mới. Điều này được cố ý sử dụng để reset trường form (`<Form key={userId} />`) hoặc animation khi người dùng thay đổi. Nó đáng tin cậy hơn việc reset state thủ công trong `useEffect`.',
    options: [
      'State được giữ lại vì loại component giống nhau',
      'React unmount instance component cũ và mount instance mới, reset tất cả state và effect',
      'Chỉ state cục bộ reset; giá trị context được giữ lại',
      'Component re-render nhưng state được gộp với key mới',
    ],
  },
  'react-fund-042': {
    question:
      'Tại sao việc sắp xếp lại danh sách này khiến input mất giá trị đã nhập?',
    explanation:
      'Index-as-key khiến React tái sử dụng node DOM hiện có cho item ở cùng vị trí chỉ mục. Khi danh sách sắp xếp lại, input DOM ở chỉ mục 0 giữ lại giá trị người dùng đã nhập (trạng thái DOM), trong khi prop `defaultValue` phản ánh item mới. Vì `defaultValue` chỉ đặt giá trị ban đầu, input hiển thị giá trị cũ của người dùng cho một item khác. Key ổn định từ dữ liệu item (`key={item.id}`) đảm bảo node DOM theo đúng dữ liệu.',
    options: [
      'Không có lỗi — key được gán đúng',
      'Dùng chỉ mục làm key nghĩa là key vẫn là 0/1/2 sau khi sắp xếp lại. React tái sử dụng node DOM theo vị trí key, nên input ở chỉ mục 0 giữ node DOM (với giá trị đã nhập) nhưng giờ hiển thị defaultValue của item C — input uncontrolled giữ lại giá trị cũ. Sửa: dùng ID ổn định của item làm key.',
      'Vấn đề nằm ở `defaultValue`; dùng `value` thay thế',
      'Sắp xếp mảng luôn cần `React.startTransition`',
    ],
  },
  'react-fund-043': {
    question:
      'Khi nào bạn phải sử dụng `<React.Fragment>` thay vì cú pháp ngắn `<>...</>`?',
    explanation:
      'Cú pháp ngắn `<>...</>` không hỗ trợ bất kỳ thuộc tính nào. Nếu bạn cần `key` (bắt buộc khi render fragment trong danh sách), bạn phải dùng dạng đầy đủ: `<React.Fragment key={item.id}>`. Trong thực tế, fragment hiếm khi cần prop khác — `key` là lý do chính để dùng dạng đầy đủ.',
    options: [
      'Luôn luôn — cú pháp ngắn không được hỗ trợ trong dự án TypeScript',
      'Khi bạn cần truyền prop `key` (ví dụ: trong danh sách) hoặc bất kỳ prop nào khác cho fragment',
      'Khi fragment có nhiều hơn hai children',
      'Khi fragment là phần tử gốc của component',
    ],
  },
  'react-fund-044': {
    question:
      '"Hợp thành component" tránh prop drilling như thế nào mà không sử dụng Context?',
    explanation:
      'Khi bạn truyền `<Avatar user={user} />` (đã render với dữ liệu cần thiết) dưới dạng prop cho `Layout`, component `Layout` không cần biết về `user`. Nó chỉ đặt slot. Đây là "đảo ngược kiểm soát" — chủ sở hữu dữ liệu (`Page`) lắp ráp component sâu ở trên cùng và truyền nó qua các component trung gian dưới dạng JSX mờ, loại bỏ hoàn toàn prop drilling cho các component trung gian đó.',
    options: [
      'Không thể — bạn vẫn cần Context',
      'Bằng cách hợp thành component ở cấp cao nhất và truyền chúng dưới dạng JSX props/children, các component trung gian nhận node JSX mờ thay vì dữ liệu thô, loại bỏ nhu cầu truyền prop `user` qua `Layout` và `Sidebar`',
      'Pattern này chỉ hoạt động cho styling props, không phải data props',
      'Yêu cầu component con chỉ chấp nhận props kiểu `React.ElementType`',
    ],
  },
  'react-fund-045': {
    question:
      'Trong React 19 StrictMode, mỗi component mount, unmount, rồi mount lại trong development để giúp phát hiện lỗi cleanup.',
    explanation:
      'React 19 StrictMode cố ý mount mỗi component hai lần (mount -> unmount -> remount) trong development. Điều này mô phỏng những gì sẽ xảy ra trong tính năng React tương lai (Offscreen/Activity) nơi component có thể bị ẩn và hiện lại. Nó phát hiện cleanup thiếu trong `useEffect` — nếu effect không cleanup đúng cách, bạn sẽ thấy subscription, yêu cầu mạng, hoặc log trùng lặp trong lần mount thứ hai.',
  },
  'react-fund-046': {
    question:
      'Trong React 17+, React gắn listener ủy quyền sự kiện ở đâu, và tại sao điều đó quan trọng?',
    explanation:
      'React 16 gắn tất cả listener sự kiện ủy quyền vào `document`. React 17 chuyển chúng sang container DOM gốc. Điều này quan trọng cho micro-frontend và kịch bản migration dần dần: hai cây React (ví dụ: React 16 và React 17) trên cùng trang không còn xung đột vì listener được giới hạn trong gốc riêng. Nó cũng có nghĩa là `e.nativeEvent.stopPropagation()` hoạt động trực quan hơn.',
    options: [
      'Trên `document` — giống như React 16',
      'Trên phần tử container gốc React (ví dụ: `document.getElementById("root")`), cho phép nhiều phiên bản React trên cùng trang mà không xung đột sự kiện',
      'Trên mỗi node DOM riêng lẻ',
      'Trên `window` để bắt tất cả sự kiện toàn cục',
    ],
  },
  'react-fund-047': {
    question:
      'Điều gì xảy ra với state counter khi `isFancy` thay đổi?',
    explanation:
      'Reconciler của React theo dõi định danh component bằng type + vị trí trong cây. Cả hai nhánh toán tử ba ngôi đều tạo ra phần tử `<Counter>` ở cùng vị trí bên trong `<div>`. Vì type giống nhau, React tái sử dụng instance component hiện có và giữ state — chỉ prop `style` được cập nhật. Để buộc reset, dùng key khác nhau hoặc loại component khác nhau.',
    options: [
      'State reset về 0 vì một Counter mới được render',
      'State được giữ lại — cả hai nhánh render cùng loại component `Counter` ở cùng vị trí trong cây',
      'React đưa ra cảnh báo về conditional rendering',
      'State reset vì prop `style` thay đổi',
    ],
  },
  'react-fund-048': {
    question:
      'Bạn có thể làm gì trong tab "Components" của React DevTools?',
    explanation:
      'Tab Components hiển thị toàn bộ cây component React. Chọn một component hiển thị props, state (giá trị useState), context, và hooks hiện tại. Bạn có thể chỉnh sửa trực tiếp state/props trong panel để kiểm tra thay đổi UI mà không cần sửa code. Bạn cũng có thể buộc re-render, bật/tắt ranh giới Suspense, và xem mã nguồn component. Đây là công cụ debug chính cho các vấn đề cấp component.',
    options: [
      'Chỉ xem cây component — không thể tương tác',
      'Kiểm tra và chỉnh sửa trực tiếp props, state, và context của bất kỳ component nào được chọn; điều hướng cây component; và xem giá trị hooks theo thời gian thực',
      'Chạy benchmark hiệu suất trên từng component',
      'Tạo interface TypeScript từ props của component',
    ],
  },
  'react-fund-049': {
    question:
      'Trong React, `<textarea>` sử dụng prop `value` (không phải nội dung bên trong) và `<select>` sử dụng prop `value` (không phải `selected` trên `<option>`) cho hành vi form controlled.',
    explanation:
      'React chuẩn hóa các phần tử form: `<textarea value={val} onChange={fn} />` (không phải `<textarea>{val}</textarea>`), và `<select value={selectedOption} onChange={fn}>` (không đặt `selected` trên `<option>`). API `value`/`onChange` nhất quán này trên tất cả phần tử form giúp form controlled đồng nhất và dễ dự đoán. Cho multi-select, truyền mảng: `<select multiple value={[...]} />`.',
  },
  'react-fund-050': {
    question: 'Đoạn sau render ra gì?',
    explanation:
      'JSX `{}` đánh giá mọi biểu thức JavaScript: tham chiếu biến, phép tính số học, lệnh gọi hàm, toán tử ba ngôi, v.v. `{name}` đánh giá thành `"Alice"` và `{2 + 3}` đánh giá thành `5`. Kết quả render là phần tử đoạn văn với chuỗi "Hello, Alice! You have 5 messages.".',
    options: [
      '`Hello, {name}! You have {2 + 3} messages.`',
      '`Hello, Alice! You have 5 messages.`',
      '`Hello, Alice! You have 2 + 3 messages.`',
      'Lỗi cú pháp — phép tính số học không được phép trong JSX',
    ],
  },
  'react-fund-051': {
    question:
      'Khi nào bạn nên truyền hàm so sánh tùy chỉnh cho `React.memo`?',
    explanation:
      'Tham số thứ hai của `React.memo` là `areEqual(prevProps, nextProps)` — trả về `true` để bỏ qua re-render, `false` để cho phép (ngược với `shouldComponentUpdate`). Dùng khi so sánh nông luôn trả về `false` do thay đổi tham chiếu (mảng/object mới từ cha) nhưng output render giống nhau. Cẩn thận: bộ so sánh quá tích cực bỏ qua render cần thiết có thể gây lỗi UI cũ.',
    options: [
      'Bạn không bao giờ nên truyền bộ so sánh tùy chỉnh — nó luôn gây lỗi',
      'Khi so sánh nông mặc định quá chặt (ví dụ: tham chiếu mảng mới chứa cùng item) và bạn muốn định nghĩa kiểm tra bằng cụ thể hơn để bỏ qua re-render',
      'Khi component sử dụng TypeScript generic',
      'Khi component đọc từ Context — so sánh mặc định bỏ qua context',
    ],
  },
  'react-fund-052': {
    question:
      'Trong React 19, làm thế nào bạn có thể đặt `<title>` và thẻ `<meta>` của trang từ bên trong component?',
    explanation:
      'React 19 giới thiệu hỗ trợ gốc cho metadata tài liệu. Bạn có thể render `<title>My Page</title>` hoặc `<meta name="description" content="..." />` bên trong bất kỳ component nào và React tự động di chuyển chúng vào `<head>`. Trên server, chúng được bao gồm trong HTML streamed. Điều này loại bỏ nhu cầu sử dụng thư viện bên ngoài như `react-helmet` hoặc `next/head` cho quản lý metadata cơ bản.',
    options: [
      'Chỉ qua `document.title = ...` trong `useEffect`',
      'React 19 cho phép render thẻ `<title>`, `<meta>`, và `<link>` trực tiếp bên trong bất kỳ component nào; React tự động đưa chúng lên `<head>` trên cả client và server',
      'Dùng thư viện `react-helmet` — React không hỗ trợ thẻ head nguyên bản',
      'Metadata head chỉ có thể đặt trong component gốc `App`',
    ],
  },
}
