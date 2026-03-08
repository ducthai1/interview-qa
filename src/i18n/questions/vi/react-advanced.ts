import type { QuestionTranslationMap } from '../types'

export const reactAdvancedVi: QuestionTranslationMap = {
  'ra-001': {
    question: '`React.memo` làm gì?',
    options: [
      'Ghi nhớ (memoize) state bên trong component để nó không bao giờ bị reset',
      'Bọc một component để React bỏ qua việc re-render nếu props không thay đổi (so sánh nông - shallow comparison)',
      'Ngăn một component không bao giờ re-render',
      'Deep-clone props trước khi truyền vào component',
    ],
    explanation:
      '`React.memo(Component)` là một higher-order component ghi nhớ kết quả render. Trước khi re-render, React thực hiện so sánh nông (shallow comparison) giữa props cũ và mới. Nếu chúng giống nhau, React tái sử dụng kết quả render trước đó. Bạn có thể truyền hàm so sánh tùy chỉnh làm tham số thứ hai: `React.memo(Component, (prevProps, nextProps) => areEqual)`. Lưu ý: nó chỉ kiểm tra props, không kiểm tra context hay state nội bộ.',
  },
  'ra-002': {
    question: 'React cung cấp những công cụ profiling nào để xác định các re-render không cần thiết?',
    options: [
      'Chỉ có tab performance trong DevTools của trình duyệt',
      'React DevTools Profiler (flame graph, ranked chart), component API `<Profiler>` để đo lường theo chương trình, và tùy chọn "highlight updates" trong React DevTools',
      'Chỉ có `console.time()` bao quanh các lệnh gọi render',
      'React cung cấp sẵn biến global `window.__REACT_DEVTOOLS_PROFILER__`',
    ],
    explanation:
      'React DevTools Profiler ghi lại tất cả các commit trong một phiên và hiển thị component nào đã render, mỗi component mất bao lâu, và tại sao ("cái gì gây ra render này"). Component `<Profiler id="App" onRender={callback}>` cho phép bạn thu thập số liệu theo chương trình trong production (sau một flag). "Highlight updates" nhấp nháy các component khi chúng re-render trong môi trường development.',
  },
  'ra-003': {
    question: 'Bọc mọi component trong `React.memo` và mọi hàm trong `useCallback` luôn luôn cải thiện hiệu suất.',
    explanation:
      'Memoization có chi phí: React phải lưu trữ props/giá trị trước đó và chạy phép so sánh trên mỗi lần render. Với những component đơn giản, chi phí so sánh có thể vượt quá chi phí render. Memoization quá mức cũng làm code khó đọc và bảo trì hơn. React Compiler (React 19) nhắm tới việc tự động áp dụng memoization tối ưu, khiến `memo`/`useCallback` thủ công phần lớn không cần thiết trong tương lai.',
  },
  'ra-004': {
    question: '"Provider composition" là gì và tại sao nó được sử dụng?',
    options: [
      'Lồng một provider duy nhất bên trong chính nó để tạo state nhiều lớp',
      'Kết hợp nhiều context provider thành một wrapper component duy nhất để giữ cây component sạch sẽ và tránh "provider hell" (các provider lồng nhau quá sâu)',
      'Kết hợp React.memo với context provider để tối ưu hiệu suất',
      'Một cách để chia sẻ instance provider giữa các micro-frontend',
    ],
    explanation:
      'Các ứng dụng lớn thường cần nhiều context (auth, theme, cart, i18n). Lồng chúng riêng lẻ tạo ra "provider hell": `<AuthProvider><ThemeProvider><CartProvider>...`. Provider composition trích xuất điều này thành một component `<AppProviders>` duy nhất kết hợp tất cả provider, giữ cho component gốc `App` sạch sẽ. Có thể triển khai như một wrapper đơn giản hoặc sử dụng `reduce` trên mảng provider.',
  },
  'ra-005': {
    question: 'Làm thế nào để ngăn đối tượng value của Context gây ra các re-render không cần thiết?',
    options: [
      'Tách context thành `UserContext` và `SetUserContext` riêng biệt, đồng thời memoize đối tượng value bằng `useMemo`',
      'Sử dụng `ReactDOM.flushSync` để gộp các cập nhật',
      'Thêm `React.memo` vào component Provider',
      'Sử dụng `ref` thay vì state bên trong provider',
    ],
    explanation:
      'Mỗi lần render của `AuthProvider` tạo ra một đối tượng `{ user, setUser }` mới, khiến tất cả consumer re-render. Cách khắc phục: `const value = useMemo(() => ({ user, setUser }), [user])`. Tốt hơn: tách thành hai context — một cho setter ổn định (`SetUserContext`) và một cho dữ liệu (`UserContext`). Các component chỉ dispatch sẽ không bao giờ re-render khi `user` thay đổi.',
  },
  'ra-006': {
    question: '`React.lazy(() => import("./MyComponent"))` làm gì?',
    options: [
      'Tải trước (pre-load) bundle component ngay khi ứng dụng khởi động',
      'Tạo một lazy component thực hiện code-splitting `MyComponent` thành bundle riêng, chỉ tải khi component được render lần đầu',
      'Tạo một component chỉ chạy phía server',
      'Trì hoãn việc render component cho đến khi trình duyệt rảnh',
    ],
    explanation:
      '`React.lazy` cho phép code splitting thông qua `import()` động. Code của component được đóng gói riêng và tải theo yêu cầu. Nó phải được bọc trong `<Suspense fallback={...}>` boundary để hiển thị fallback trong khi bundle đang tải. Đây là cơ chế chính cho code splitting ở cấp route trong các ứng dụng React.',
  },
  'ra-007': {
    question: '`<Suspense>` boundary có thể được đặt ở đâu so với lazy component?',
    options: [
      'Nó phải là parent trực tiếp của lazy component',
      'Nó chỉ có thể ở trong component gốc `App`',
      'Ở bất kỳ đâu phía trên component trong cây — React đi ngược lên cây để tìm `<Suspense>` boundary gần nhất',
      'Bên trong chính lazy component',
    ],
    explanation:
      'React truyền trạng thái suspend lên cây component cho đến khi tìm thấy `<Suspense>` boundary. Bạn có thể đặt boundary ở các mức chi tiết khác nhau: boundary thô ở cấp route hiển thị spinner toàn trang, còn boundary chi tiết gần component bị suspend hiển thị placeholder cục bộ. Nhiều boundary cung cấp trải nghiệm người dùng tốt hơn.',
  },
  'ra-008': {
    question: 'Error Boundary có thể được triển khai dưới dạng:',
    options: [
      'Bất kỳ functional component nào sử dụng `useError()`',
      'Chỉ class component triển khai `static getDerivedStateFromError()` và/hoặc `componentDidCatch()`',
      'Bất kỳ component nào được bọc trong `React.memo`',
      'Cả class và functional component sử dụng `try/catch` bên trong `useEffect`',
    ],
    explanation:
      'Tính đến React 18, Error Boundary vẫn phải là class component triển khai `static getDerivedStateFromError(error)` (cập nhật state để hiển thị fallback) và/hoặc `componentDidCatch(error, info)` (ghi log lỗi). React 19 giới thiệu `use()` và các tính năng concurrent, nhưng API Error Boundary dựa trên class vẫn được giữ nguyên. Thư viện như `react-error-boundary` cung cấp wrapper component tiện lợi.',
  },
  'ra-009': {
    question: 'Error Boundary bắt được lỗi xảy ra trong event handler.',
    explanation:
      'Error Boundary chỉ bắt lỗi trong: phương thức render, constructor (class), và lifecycle method. Chúng KHÔNG bắt lỗi trong: event handler (dùng try/catch thủ công), code bất đồng bộ (setTimeout, fetch callback), server-side rendering, hoặc lỗi xảy ra trong chính Error Boundary. Đối với lỗi event handler, hãy dùng try/catch thông thường và state để hiển thị UI lỗi.',
  },
  'ra-010': {
    question: 'Hook `useErrorBoundary` của thư viện `react-error-boundary` cải thiện Error Boundary class thuần như thế nào?',
    options: [
      'Nó cho phép error boundary trong functional component và cung cấp `showBoundary(error)` để kích hoạt boundary theo cách mệnh lệnh từ code bất đồng bộ hoặc event handler',
      'Nó tự động bắt tất cả lỗi bất đồng bộ mà không cần cấu hình',
      'Nó thay thế hoàn toàn nhu cầu sử dụng Suspense',
      'Nó cung cấp logic tự động retry cho các render thất bại',
    ],
    explanation:
      '`react-error-boundary` cung cấp wrapper class `<ErrorBoundary>` (với props `FallbackComponent`, `onReset`, `resetKeys`) và hook `useErrorBoundary()` trả về `showBoundary(error)`. Điều này cho phép bạn kích hoạt boundary thủ công từ event handler hoặc thao tác bất đồng bộ — những trường hợp mà cơ chế tích hợp sẵn bỏ sót. `resetKeys` sẽ remount cây khi các giá trị được chỉ định thay đổi.',
  },
  'ra-011': {
    question: 'React Server Component (RSC) là gì?',
    options: [
      'Một component sử dụng `useServer()` để fetch dữ liệu phía client',
      'Một component chỉ chạy trên server, không tốn chi phí JavaScript bundle phía client, có thể truy cập trực tiếp database/file system, và stream HTML/component payload đến client',
      'Bất kỳ component nào được render bằng `ReactDOM.renderToString()`',
      'Một component được đánh dấu bằng `export const runtime = "edge"`',
    ],
    explanation:
      'RSC chạy hoàn toàn trên server (hoặc tại thời điểm build). Code của chúng không bao giờ được gửi đến client bundle — không có useEffect, không có useState, không có browser API. Chúng có thể truy cập trực tiếp database, file system và secret. Chúng serialize output (một cây React component, không phải HTML) và stream đến client để kết hợp với Client Component. RSC là sự thay đổi mô hình trong kiến trúc React, có sẵn qua Next.js App Router.',
  },
  'ra-012': {
    question: 'Những gì sau đây KHÔNG THỂ sử dụng bên trong React Server Component?',
    options: [
      'async/await để fetch dữ liệu',
      '`useState`, `useEffect`, browser API, và event handler',
      'Truy vấn database trực tiếp',
      'Render Client Component như children',
    ],
    explanation:
      'RSC chạy trên server và không có quyền truy cập môi trường trình duyệt. Chúng không thể sử dụng: state (useState, useReducer), effect (useEffect), browser API (window, document), event handler (onClick), hay bất kỳ hook nào yêu cầu runtime phía client. Chúng CÓ THỂ là async, fetch dữ liệu, import module chỉ dành cho server, và truyền props có thể serialize đến Client Component.',
  },
  'ra-013': {
    question: 'Quy tắc "boundary" của RSC đối với Server Component và Client Component là gì?',
    options: [
      'Server Component có thể import Client Component; Client Component KHÔNG THỂ import Server Component (nhưng có thể nhận chúng qua props/children)',
      'Client Component có thể import Server Component thoải mái',
      'Server và Client Component không thể chia sẻ bất kỳ dữ liệu nào',
      'Không có boundary — chúng có thể được trộn tự do',
    ],
    explanation:
      'RSC boundary: Server Component có thể import và render Client Component (bằng cách đặt `"use client"` ở đầu file). Client Component không thể import Server Component vì code client được bundle và gửi đến trình duyệt — không có hệ thống module server ở đó. Tuy nhiên, Client Component CÓ THỂ nhận Server Component dưới dạng `children` hoặc prop, vì Server Component đã được render thành payload trước khi đến Client Component.',
  },
  'ra-014': {
    question: 'React Compiler được giới thiệu trong React 19 là gì?',
    options: [
      'Một plugin biên dịch TypeScript chuyển đổi `.tsx` sang `.js`',
      'Một công cụ build-time tự động memoize component và giá trị, loại bỏ nhu cầu sử dụng `React.memo`, `useMemo`, và `useCallback` thủ công trong hầu hết trường hợp',
      'Một trình biên dịch JIT runtime tăng tốc quá trình diffing virtual DOM',
      'Một JSX parser mới thay thế Babel',
    ],
    explanation:
      'React Compiler (trước đây là "React Forget") phân tích code component tại thời điểm build và tự động chèn memoization tối ưu. Nó hiểu các quy tắc của React (render thuần, tham chiếu ổn định) và tạo code tương đương với `useMemo`/`useCallback`/`React.memo` viết tay. Nó yêu cầu component tuân theo các quy tắc của React (không mutation, không side effect trong render). Điều này khiến memoization thủ công phần lớn không cần thiết cho code mà nó có thể phân tích.',
  },
  'ra-015': {
    question: 'Những pattern code nào ngăn React Compiler tối ưu hóa một component?',
    options: [
      'Sử dụng hooks — compiler không hỗ trợ hooks',
      'Mutate props hoặc state trực tiếp, đọc từ state toàn cục có thể thay đổi, hoặc vi phạm các quy tắc tính thuần (purity) của React trong đường render',
      'Sử dụng TypeScript generic hoặc kiểu phức tạp',
      'Compiler tối ưu hóa tất cả component mà không có bất kỳ hạn chế nào',
    ],
    explanation:
      'React Compiler chỉ có thể memoize an toàn các component tuân theo quy tắc của React: hàm render thuần (cùng đầu vào → cùng đầu ra, không side effect). Nếu phát hiện vi phạm, nó "bail out" và bỏ qua component đó. Comment `// @skip` cũng có thể opt out các file cụ thể. `eslint-plugin-react-compiler` của ESLint phát hiện các vi phạm.',
  },
  'ra-016': {
    question: 'Concurrent Mode của React cho phép điều gì mà mô hình render đồng bộ cũ không thể?',
    options: [
      'Chạy nhiều instance React trên cùng một trang',
      'Render có thể gián đoạn — React có thể tạm dừng, tiếp tục, hoặc hủy bỏ các render đang diễn ra để giữ UI phản hồi với input ưu tiên cao của người dùng',
      'Thực thi JavaScript song song sử dụng Web Worker',
      'Tự động code splitting mọi component',
    ],
    explanation:
      'Trong chế độ đồng bộ (legacy), một khi React bắt đầu render, nó chạy đến khi hoàn thành, chặn main thread. Concurrent Mode làm cho render có thể gián đoạn: các cập nhật ưu tiên cao (người dùng gõ phím) có thể ngắt các render ưu tiên thấp (kết quả tìm kiếm). React sử dụng hàng đợi ưu tiên (Scheduler) để quản lý công việc. Điều này kích hoạt các tính năng như Suspense, `useTransition`, `useDeferredValue`, và streaming SSR.',
  },
  'ra-017': {
    question: 'Người dùng trải nghiệm gì khi gõ trong input trong khi danh sách nặng đang render?',
    options: [
      'Input bị chặn cho đến khi `HeavyList` hoàn thành re-render',
      'Input cập nhật ngay lập tức (urgent), spinner hiển thị, và `HeavyList` re-render trong nền dưới dạng transition ưu tiên thấp mà không chặn input',
      'Cả input và danh sách cập nhật đồng bộ mà không có sự khác biệt về mặt hình ảnh',
      'Lỗi runtime — `startTransition` không thể bọc các lệnh gọi `setState`',
    ],
    explanation:
      '`setInput` là urgent — input phản ánh phím bấm ngay lập tức. `setQuery` được bọc trong `startTransition`, đánh dấu re-render `HeavyList` là không khẩn cấp. React có thể ngắt nó nếu người dùng gõ tiếp. `isPending` hiển thị spinner trong khi transition đang diễn ra. Kết quả: input phản hồi nhanh với render nặng được trì hoãn một cách mượt mà.',
  },
  'ra-018': {
    question: 'Render props pattern là gì?',
    options: [
      'Truyền một phần tử JSX dưới dạng prop có tên `render`',
      'Một kỹ thuật trong đó component nhận một hàm làm prop và gọi nó để quyết định render gì, chia sẻ hành vi/state trong khi ủy quyền việc render cho consumer',
      'Sử dụng `React.cloneElement` để inject props vào children',
      'Render props trực tiếp vào DOM bằng `dangerouslySetInnerHTML`',
    ],
    explanation:
      'Render props chia sẻ logic có state bằng cách truyền hàm prop `render` (hoặc `children`): `<Mouse render={({ x, y }) => <Cursor x={x} y={y} />} />`. Component `Mouse` quản lý state vị trí và gọi `render(state)`. Consumer quyết định render gì. Hooks phần lớn thay thế pattern này nhưng render props vẫn hữu ích trong các ngữ cảnh không dùng hook.',
  },
  'ra-019': {
    question: 'Compound component pattern là gì và nó giải quyết vấn đề gì?',
    options: [
      'Nó kết hợp nhiều component vào một file duy nhất',
      'Một pattern trong đó component cha ngầm chia sẻ state với các component con (thường qua Context hoặc `React.cloneElement`), cho consumer khả năng composition linh hoạt mà không cần prop drilling',
      'Một cách để mở rộng các phần tử HTML native với hành vi tùy chỉnh',
      'Nó giống với render props pattern',
    ],
    explanation:
      'Compound component (`<Select>`, `<Select.Option>`) hoạt động cùng nhau như một đơn vị. Component cha quản lý state và chia sẻ với các sub-component qua Context (hoặc `cloneElement`), mà consumer không cần phải kết nối state qua props một cách tường minh. Điều này cho consumer quyền kiểm soát cấu trúc và thứ tự render trong khi giữ logic state được đóng gói. Ví dụ: `<Tabs>/<Tab>`, `<Accordion>/<AccordionItem>`, `<Menu>/<MenuItem>`.',
  },
  'ra-020': {
    question: 'Higher-Order Component (HOC) là gì?',
    options: [
      'Một component có hơn 100 dòng code',
      'Một hàm nhận một component và trả về một component mới được nâng cấp, thêm hành vi như logging, kiểm tra auth, hoặc fetch dữ liệu mà không sửa đổi component gốc',
      'Bất kỳ component nào ở cấp gốc của cây',
      'Một component render các component khác qua `React.createElement`',
    ],
    explanation:
      'HOC tuân theo decorator pattern: `const EnhancedComponent = withAuth(MyComponent)`. HOC bọc component, thêm các mối quan tâm xuyên suốt (auth, analytics, xử lý lỗi), và render component được bọc với props bổ sung hoặc đã sửa đổi. Hooks phần lớn thay thế HOC cho code mới, nhưng HOC vẫn phổ biến trong codebase cũ và để bọc class component.',
  },
  'ra-021': {
    question: 'Vấn đề "wrapper hell" với HOC là gì và hooks giải quyết nó như thế nào?',
    options: [
      'HOC tạo ra cây component lồng sâu trong DevTools, gây khó debug. Hooks làm phẳng cây component bằng cách đặt logic ngay trong component mà không thêm lớp wrapper.',
      'HOC ngăn TypeScript inference — hooks thì không',
      'HOC gây rò rỉ bộ nhớ; hooks thì không',
      'Không có sự khác biệt — hooks chỉ là đường cú pháp cho HOC',
    ],
    explanation:
      'Kết hợp nhiều HOC (`withAuth(withTheme(withLogger(MyComponent)))`) thêm các lớp wrapper vào cây React, khiến DevTools khó đọc và khó truy nguồn. Custom hooks đạt được cùng mục đích tái sử dụng logic (`const auth = useAuth(); const theme = useTheme()`) bên trong thân component, giữ cây phẳng và logic dễ theo dõi.',
  },
  'ra-022': {
    question: '"Actions" trong React 19 là gì?',
    options: [
      'Các đối tượng action kiểu Redux được dispatch đến global store',
      'Các hàm async được truyền vào prop `action` của form hoặc `useTransition`/`startTransition`. React tự động xử lý trạng thái pending, lỗi, và cập nhật optimistic cho chúng.',
      'Các hàm phía server được định nghĩa trong route handler của Next.js',
      'Các hàm event handler trả về một Promise',
    ],
    explanation:
      'React 19 chính thức hóa khái niệm "Actions" — các hàm async xử lý gửi form và mutation. Theo quy ước, các hàm sử dụng transition được gọi là Action. React cung cấp: `useFormStatus` (trạng thái pending của form cha), `useActionState` (state của form action), và `useOptimistic` (UI optimistic). Chúng tích hợp với pattern `<form action={asyncFn}>` trong cả ngữ cảnh client và server.',
  },
  'ra-023': {
    question: '`useOptimistic` trong React 19 làm gì?',
    options: [
      'Trì hoãn cập nhật state cho đến khi yêu cầu mạng hoàn thành',
      'Hiển thị ngay lập tức cập nhật UI optimistic (dự đoán) trong khi action async đang xử lý, sau đó hoàn nguyên về state thực tế từ server khi action hoàn thành hoặc lỗi',
      'Gộp nhiều cập nhật state thành một lần render',
      'Cache kết quả của hàm async',
    ],
    explanation:
      '`useOptimistic` nhận state thực và hàm cập nhật. Khi bạn gọi setter trong một async action, nó ngay lập tức áp dụng cập nhật optimistic lên UI (ví dụ: hiển thị tin nhắn đang "gửi"). React tự động hoàn nguyên về state thực (từ prop `messages` thực tế) khi action kết thúc — thành công (state server tiếp quản) hoặc lỗi (hoàn nguyên). Đây là pattern chuẩn cho ứng dụng chat, nút like/unlike, và gửi form.',
  },
  'ra-024': {
    question: '`useFormStatus` trả về gì và được sử dụng như thế nào?',
    options: [
      'Nó trả về các lỗi validation hiện tại của form',
      'Nó phải được gọi bên trong component con của `<form>`, và trả về `{ pending, data, method, action }` — đặc biệt hữu ích để vô hiệu hóa nút submit trong khi form đang gửi bất đồng bộ',
      'Nó thay thế hoàn toàn nhu cầu sử dụng handler `onSubmit`',
      'Nó trả về ref đến phần tử DOM của form',
    ],
    explanation:
      '`useFormStatus` được thiết kế cho component nút submit: bọc nút trong component riêng, gọi `useFormStatus()` ở đó, và dùng `pending` để vô hiệu hóa nút trong khi form action đang xử lý. Nó đọc từ `<form>` cha gần nhất. Nó không thể được gọi trong cùng component render form — phải ở component con để tránh luồng dữ liệu vòng tròn.',
  },
  'ra-025': {
    question: '`useActionState` (React 19) là gì và nó thay thế cái gì?',
    options: [
      'Nó thay thế `useState` cho tất cả thao tác async',
      'Quản lý state của async action (state trước, hàm action, cờ pending). Trước đây cần phải kết nối thủ công `useState` + try/catch + trạng thái pending. Trước đó được gọi là `useFormState` trong bản React canary.',
      'Nó chỉ hoạt động với HTML form native và `FormData`',
      'Nó thay thế `useReducer` cho tất cả state của form',
    ],
    explanation:
      '`useActionState` kết nối state trước đó, hàm action async, và cờ `isPending`. Action nhận `(prevState, formData)` và trả về state mới. React xử lý lifecycle async. Truyền `formAction` trực tiếp vào `<form action={formAction}>`. Điều này thay thế pattern lặp lại khi phải quản lý state loading/error/data thủ công xung quanh việc gửi form.',
  },
  'ra-026': {
    question: '`use(promise)` tương tác với Suspense và Error Boundary như thế nào?',
    options: [
      '`use()` bắt lỗi và trả về `null` khi bị reject',
      'Khi promise đang pending, `use()` suspend component (hiển thị Suspense fallback). Khi reject, nó throw lỗi (bị Error Boundary bắt). Khi resolve, nó trả về giá trị.',
      '`use()` luôn cần handler `.catch()` trên promise',
      'Component render hai lần — một lần với undefined, một lần với giá trị đã resolve',
    ],
    explanation:
      '`use(promise)` tuân theo Suspense protocol: promise đang pending kích hoạt suspend (component "tạm dừng" và `<Suspense>` gần nhất hiển thị `fallback`). Khi promise resolve, React re-render component với giá trị. Khi reject, React throw lỗi, và Error Boundary gần nhất bắt nó. Đây là nền tảng của pattern fetch dữ liệu trong React 19.',
  },
  'ra-027': {
    question: '"Selective hydration" trong React 18+ là gì?',
    options: [
      'Chỉ hydrate các component có event listener',
      'React stream HTML và có thể bắt đầu hydrate các phần sẵn sàng của trang trước khi toàn bộ HTML/JS được tải xuống. Các component được bọc trong `<Suspense>` có thể được hydrate độc lập, và React ưu tiên hydrate những phần mà người dùng tương tác.',
      'Một kỹ thuật chỉ hydrate viewport hiển thị',
      'Bỏ qua hydration cho các component tĩnh bằng `React.memo`',
    ],
    explanation:
      'React 18 giới thiệu streaming SSR + selective hydration: server stream các đoạn HTML khi dữ liệu sẵn sàng (Suspense boundary đóng vai trò điểm flush). Trên client, React có thể hydrate nhiều subtree độc lập song song. Nếu người dùng click vào component chưa được hydrate, React ưu tiên hydrate subtree đó trước. Điều này cải thiện đáng kể Time to Interactive cho các trang lớn.',
  },
  'ra-028': {
    question: 'Tại sao component này có hành vi không nhất quán và bạn sửa nó như thế nào?',
    options: [
      'Không có vấn đề — định nghĩa component bên trong component khác là pattern hợp lệ',
      'Bug: `ItemRow` được tạo lại trên mỗi lần render của `ParentList`. React thấy kiểu component mới mỗi lần render, unmount và remount mọi phần tử danh sách (mất state, focus, và animation). Sửa: di chuyển `ItemRow` ra ngoài `ParentList` ở phạm vi module.',
      'Bug: `key` nên được đặt trên chính `ItemRow`, không truyền như prop',
      'Bug: nên dùng arrow function thay vì khai báo function',
    ],
    explanation:
      'Định nghĩa component bên trong thân render của component khác có nghĩa là một tham chiếu hàm mới được tạo mỗi lần render. React sử dụng kiểu element để reconciliation — kiểu mới có nghĩa là teardown + remount. Điều này reset toàn bộ state và hủy các animation/transition đang diễn ra. Luôn định nghĩa sub-component ở cấp module (hoặc dùng `useMemo` trong trường hợp cực đoan).',
  },
  'ra-029': {
    question: 'Nguyên tắc "state colocation" là gì và nó cải thiện hiệu suất như thế nào?',
    options: [
      'Tất cả state nên nằm trong global Redux store',
      'State nên được đặt gần nhất có thể với các component sử dụng nó. Điều này thu hẹp phạm vi re-render — khi state thay đổi, chỉ component đó và children của nó re-render, không phải các phần xa trong cây.',
      'State nên luôn được đặt cùng nguồn dữ liệu của nó (API)',
      'Colocation state nghĩa là đặt nó trong cùng file với component',
    ],
    explanation:
      'Di chuyển state đến component cần nó (thay vì đẩy mọi thứ lên root) giới hạn re-render ở subtree nhỏ nhất. Ví dụ: state mở/đóng của modal thuộc về phần kích hoạt modal, không phải trong `App`. Khi state thay đổi, chỉ subtree modal re-render. Đây là tối ưu hiệu suất cơ bản thường có tác động lớn hơn memoization.',
  },
  'ra-030': {
    question: '"Lifting state up" là gì và khi nào cần sử dụng?',
    options: [
      'Di chuyển state từ class component sang functional component',
      'Di chuyển state từ component con lên tổ tiên chung gần nhất khi nhiều component anh em cần chia sẻ hoặc đồng bộ state đó',
      'Lưu state trong URL thay vì React state',
      'Chuyển local state sang global Redux store',
    ],
    explanation:
      'Khi hai component anh em cần chia sẻ state, hãy di chuyển state lên tổ tiên chung gần nhất. Tổ tiên giữ state và truyền xuống qua props. Đây là pattern React cơ bản. Đánh đổi: lifting state có thể khiến tổ tiên (và tất cả children khác) re-render. Giảm thiểu bằng `React.memo` trên các anh em hoặc sử dụng Context cho chia sẻ lồng sâu.',
  },
  'ra-031': {
    question: 'Vấn đề "tearing" trong React concurrent rendering là gì?',
    options: [
      'Một lỗi hiển thị khi component bị unmount một phần trong quá trình transition',
      'Khi một external mutable store (không phải React state) được đọc trong concurrent render bị gián đoạn và tiếp tục, các phần khác nhau của UI có thể đọc các phiên bản khác nhau của store, hiển thị dữ liệu không nhất quán',
      'Khi hai component render cùng giá trị state với định dạng khác nhau',
      'Sự không khớp hydration giữa server và client',
    ],
    explanation:
      'Trong concurrent mode, React có thể tạm dừng và tiếp tục render. Nếu component đọc từ external mutable store (ví dụ: đối tượng JS thuần, Redux không có `useSyncExternalStore`) và store bị mutate giữa các giai đoạn render, một phần UI có thể hiển thị dữ liệu cũ và phần khác hiển thị dữ liệu mới — đó là "tear". Giải pháp là `useSyncExternalStore` (React 18), đảm bảo snapshot store nhất quán trong quá trình concurrent render. Đây là lý do tất cả thư viện quản lý state đã cập nhật để sử dụng nó.',
  },
  'ra-032': {
    question: '`useSyncExternalStore` là gì và ai nên sử dụng nó?',
    options: [
      'Một hook để subscribe vào React Context với cập nhật đồng bộ',
      'Một hook dành cho tác giả thư viện quản lý state để subscribe an toàn vào external mutable store trong React concurrent, nhận snapshot nhất quán và kích hoạt re-render khi có thay đổi',
      'Một thay thế cho `useEffect` để subscribe vào browser API',
      'Một cách đồng bộ state giữa các tab trình duyệt',
    ],
    explanation:
      '`useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)` là API chính thức để đọc từ bất kỳ external store nào (Redux, Zustand, Valtio, browser API như `navigator.onLine`). Nó đảm bảo: (1) snapshot nhất quán trong render (không tearing), (2) re-render khi store thay đổi (qua callback `subscribe`), (3) hỗ trợ SSR (qua `getServerSnapshot`). Hầu hết lập trình viên ứng dụng sử dụng nó gián tiếp thông qua thư viện quản lý state.',
  },
  'react-adv-033': {
    question: 'Thêm `"use client"` ở đầu file làm gì trong mô hình React Server Components?',
    options: [
      'Nó đánh dấu file là polyfill chỉ dành cho trình duyệt',
      'Nó khai báo Client Component boundary: file và mọi thứ nó import được bundle cho trình duyệt. React render subtree này trên client với hydration, cho phép sử dụng hooks, state, và browser API.',
      'Nó loại component khỏi Server-Side Rendering hoàn toàn',
      'Nó khiến component chỉ render trên client mà không có SSR fallback',
    ],
    explanation:
      '`"use client"` là directive cấp module định nghĩa ranh giới giữa code server và client. Các file có directive này được bao gồm trong client JS bundle. Mọi thứ được import bởi file `"use client"` cũng được xử lý như code client. Server Component phía trên ranh giới có thể truyền props có thể serialize xuống Client Component. State, effect, và browser API chỉ khả dụng trong component `"use client"`.',
  },
  'react-adv-034': {
    question: 'Server Action trong React 19 / Next.js App Router là gì và được gọi như thế nào?',
    options: [
      'Server Action là REST endpoint được định nghĩa với Express.js',
      'Server Action là hàm async được đánh dấu bằng `"use server"`, chạy hoàn toàn trên server. Nó có thể được truyền vào `<form action={}>`, gọi trực tiếp từ Client Component, hoặc dùng với `useActionState`.',
      'Server Action là React Server Component trả về null',
      'Server Action thay thế hoàn toàn API route và chạy trong trình duyệt',
    ],
    explanation:
      '`"use server"` (ở đầu file hoặc đầu hàm async) đánh dấu Server Action. Chúng thực thi trên server và có thể mutate dữ liệu, gọi database, hoặc tương tác với tài nguyên chỉ dành cho server. Khi truyền vào `<form action>`, form kích hoạt hàm server khi submit. Khi gọi từ Client Component, React serialize đối số qua yêu cầu mạng. Chúng tích hợp với `useActionState` và `useOptimistic` để quản lý state.',
  },
  'react-adv-035': {
    question: '`<Suspense>` cho phép streaming SSR trong React 18+ như thế nào?',
    options: [
      'Suspense tạm dừng toàn bộ phản hồi server cho đến khi mọi dữ liệu sẵn sàng',
      'Suspense boundary đóng vai trò điểm flush: React stream HTML shell ban đầu ngay lập tức, sau đó stream nội dung của từng Suspense boundary khi dữ liệu resolve, cho phép trình duyệt render trang theo từng phần',
      'Suspense chỉ ảnh hưởng đến render phía client và không có tác động SSR',
      'Streaming SSR yêu cầu API `createStreamingRoot` riêng biệt, không phải Suspense',
    ],
    explanation:
      'Trong React 18 streaming SSR (`renderToPipeableStream` / `renderToReadableStream`), `<Suspense>` boundary là ranh giới chunk. HTML shell bên ngoài (navigation, layout) được gửi ngay lập tức. Với mỗi `<Suspense>` boundary, React gửi placeholder (`<template id="B:1">`) và sau đó flush nội dung đã resolve dưới dạng `<script>` inline để thay thế. Điều này cho phép trình duyệt bắt đầu paint và hydrate ngay thay vì chờ tất cả dữ liệu server.',
  },
  'react-adv-036': {
    question: 'Điều gì xảy ra khi người dùng click vào một phần trang chưa được hydrate trong React 18 selective hydration?',
    options: [
      'Click bị mất và người dùng phải click lại sau khi hydration hoàn thành',
      'React hydrate đồng bộ component được click trước tiên (ưu tiên cao nhất), sau đó tiếp tục hydrate phần còn lại của trang trong nền',
      'Toàn bộ hydration trang bị tạm dừng cho đến khi người dùng ngừng click',
      'Click kích hoạt reload toàn trang',
    ],
    explanation:
      'React 18 selective hydration ưu tiên tương tác người dùng. Nếu người dùng click, focus, hoặc tương tác với subtree chưa hydrate, React ngay lập tức đẩy subtree đó lên đầu hàng đợi hydration và hydrate đồng bộ trước khi kích hoạt event. Điều này đảm bảo khả năng tương tác mà không mất ý định người dùng. Phần còn lại tiếp tục hydrate trong nền ở mức ưu tiên thấp hơn.',
  },
  'react-adv-037': {
    question: 'React Compiler quyết định memoize cái gì và nó tạo ra kết quả gì?',
    options: [
      'Nó bọc mọi component trong `React.memo` và mọi giá trị trong `useMemo`',
      'Nó thực hiện phân tích tĩnh mỗi component, xác định giá trị và props ổn định giữa các lần render, và tạo memoization inline tương đương với `useMemo`/`useCallback`/`React.memo` thủ công — nhưng chỉ cho code tuân theo quy tắc tính thuần (purity) của React',
      'Nó chuyển đổi class component thành functional component tự động',
      'Nó chỉ memoize component được đánh dấu bằng comment `// @memo`',
    ],
    explanation:
      'React Compiler (trước đây React Forget) thực hiện phân tích luồng dữ liệu trong thân component và hook. Nó theo dõi giá trị nào phụ thuộc đầu vào nào và tự động chèn caching chi tiết — chi tiết hơn `useMemo` thủ công. Nó KHÔNG bọc mọi thứ một cách mù quáng; nó tạo caching có mục tiêu chỉ khi có thể chứng minh an toàn. Nếu component mutate state trực tiếp hoặc đọc biến toàn cục có thể thay đổi trong render, compiler "bail out" và để component đó không được biên dịch.',
  },
  'react-adv-038': {
    question: 'Nếu React Compiler không thể tối ưu hóa an toàn một component (ví dụ: do mutation), nó sẽ throw lỗi build và ngăn biên dịch.',
    explanation:
      'React Compiler không bao giờ throw lỗi với component "không thuần" — nó chỉ bỏ qua (bail out) việc tối ưu và giữ nguyên code component. Phần còn lại của ứng dụng vẫn được biên dịch và tối ưu. Bạn cũng có thể opt out tường minh từng file hoặc component bằng `// @skip` (hoặc cấu hình `compilationMode: "annotation"` để yêu cầu opt-in tường minh). Điều này làm cho việc áp dụng dần dần và an toàn.',
  },
  'react-adv-039': {
    question: 'React Taint API (`experimental_taintObjectReference`, `experimental_taintUniqueValue`) dùng để làm gì?',
    options: [
      'Đánh dấu component là deprecated để loại bỏ trong tương lai',
      'Ngăn các đối tượng nhạy cảm phía server (API key, user token, PII) vô tình bị truyền đến Client Component bằng cách throw lỗi tại RSC boundary nếu giá trị bị taint được serialize',
      'Đánh dấu giá trị state cũ cần được refresh',
      'Đánh dấu component bên thứ ba là không đáng tin cậy để sandbox',
    ],
    explanation:
      'Taint API là primitive bảo mật cho mô hình RSC. `taintObjectReference(message, object)` đánh dấu đối tượng phía server để React throw lỗi nếu bất kỳ phần nào của nó được truyền đến Client Component. `taintUniqueValue(message, lifetime, value)` taint giá trị nguyên thủy như token hoặc key. Đây là tuyến phòng thủ cuối: nếu bạn vô tình viết `<ClientComponent user={userWithPassword} />`, React báo lỗi thay vì âm thầm gửi mật khẩu đến trình duyệt.',
  },
  'react-adv-040': {
    question: 'Các API `ReactDOM.preload` và `ReactDOM.preinit` (React 19) làm gì?',
    options: [
      'Chúng thay thế thẻ `<link rel="preload">` và `<script>` trong HTML template',
      '`preload(href, options)` gợi ý trình duyệt fetch tài nguyên (font, hình ảnh, script) sớm mà không thực thi. `preinit(href, options)` fetch VÀ thực thi script hoặc áp dụng stylesheet. Cả hai có thể được gọi ở bất kỳ đâu trong cây React và React loại bỏ trùng lặp.',
      'Chúng là API chỉ dành cho SSR để stream asset manifest',
      'Chúng cấu hình Webpack code splitting cho dynamic import',
    ],
    explanation:
      'React 19 giới thiệu các API tải tài nguyên mệnh lệnh: `ReactDOM.preload(href, { as: "font" })` tạo `<link rel="preload">` để phát hiện tài nguyên sớm mà không thực thi. `ReactDOM.preinit(href, { as: "script" })` fetch và thực thi tài nguyên ngay. `ReactDOM.prefetchDNS(href)` và `ReactDOM.preconnect(href)` cũng khả dụng. Được gọi ở bất kỳ đâu trong cây component, React loại bỏ trùng lặp và đưa thẻ phù hợp vào `<head>` trên cả server và client.',
  },
  'react-adv-041': {
    question: 'Trong React 19, nếu hai component đều render `<title>My Page</title>` và `<title>Other Title</title>`, cái nào thắng?',
    options: [
      'Cả hai được render và trình duyệt sử dụng cái cuối cùng',
      'React loại bỏ trùng lặp và sử dụng cái gần component lá (sâu nhất) trong cây — ưu tiên title cụ thể nhất',
      'React throw cảnh báo và không dùng cái nào',
      'Thứ tự render quyết định `<title>` nào xuất hiện, render sau ghi đè render trước',
    ],
    explanation:
      'React 19 áp dụng quy tắc độ cụ thể cho metadata được hoist: `<title>` sâu nhất (cụ thể nhất) trong cây component thắng, tương tự cách CSS specificity hoạt động. Điều này cho phép title mặc định cấp trang trong layout component bị ghi đè bởi component cụ thể cho route. Với `<meta name>`, tên trùng lặp được xử lý cùng quy tắc sâu nhất thắng. Với `<link>` và `<script>`, loại bỏ trùng lặp theo href/src.',
  },
  'react-adv-042': {
    question: 'Component `<Activity>` (trước đây là `<Offscreen>`) trong React là gì và nó giải quyết vấn đề gì?',
    options: [
      'Một component để theo dõi phân tích mức độ tương tác của người dùng',
      'Một component thử nghiệm có thể "ẩn" subtree (giữ trong bộ nhớ nhưng unmount khỏi DOM về mặt hiển thị), sau đó "hiện" lại mà không mất state. Hữu ích cho tab, danh sách ảo hóa, và pre-render mục tiêu điều hướng tương lai.',
      'Một thay thế cho `React.lazy` để eager preloading',
      'Một component chuyển render sang background Web Worker',
    ],
    explanation:
      '`<Activity mode="hidden">` giữ subtree component sống trong bộ nhớ React trong khi ẩn output DOM — effect được dọn dẹp khi ẩn và chạy lại khi hiện, nhưng state được bảo toàn. Điều này cho phép chuyển tab không độ trễ (nội dung tab được pre-render), pre-render mục tiêu điều hướng trong nền, và tái sử dụng instance component nặng trong các tình huống ảo hóa. Nó vẫn đang thử nghiệm (tính đến React 19) và API có thể thay đổi.',
  },
  'react-adv-043': {
    question: 'Sự khác biệt cơ bản giữa fine-grained reactivity (signals, như trong Solid.js hoặc Angular Signals) và mô hình re-render của React là gì?',
    options: [
      'Fine-grained reactivity luôn nhanh hơn — React nên áp dụng hoàn toàn',
      'React re-render hàm component từ trên xuống dưới khi state thay đổi (coarse-grained); fine-grained reactivity theo dõi chính xác subscription giữa state atom và DOM node, chỉ cập nhật đúng DOM node phụ thuộc vào giá trị thay đổi — không có overhead re-render component',
      'Chúng giống nhau về kiến trúc — chỉ khác cú pháp',
      'React sử dụng fine-grained reactivity nội bộ qua Fiber reconciler',
    ],
    explanation:
      'Trong React, thay đổi state lên lịch re-render cho component sở hữu state (và có thể subtree của nó). Hàm component chạy lại và React diff output. Trong các hệ thống fine-grained (Solid.js signals, MobX observable, Angular signals), mỗi signal theo dõi biểu thức nào phụ thuộc vào nó. Khi signal thay đổi, chỉ những biểu thức DOM cụ thể đó cập nhật — hoàn toàn không gọi hàm component. Điều này loại bỏ overhead diffing virtual DOM. React Compiler tiếp cận điều này bằng cách loại bỏ re-render không cần thiết qua memoization, nhưng mô hình lập trình (component re-render là đơn vị công việc) vẫn khác biệt cơ bản.',
  },
  'react-adv-044': {
    question: 'Tại sao fetch dữ liệu trong Server Component (async/await trực tiếp) tốt hơn `useEffect` + `useState` trong Client Component cho dữ liệu trang ban đầu?',
    options: [
      'Server Component sử dụng kết nối mạng nhanh hơn',
      'Server Component loại bỏ waterfall client-server: fetch dữ liệu diễn ra trên server gần database, component render thành payload trước khi gửi, và client nhận dữ liệu sẵn sàng hiển thị mà không có loading spinner cho lần tải đầu',
      'Server Component tự động cache tất cả phản hồi trong localStorage',
      'Không có sự khác biệt — cả hai pattern có hiệu suất tương đương',
    ],
    explanation:
      'Với `useEffect` + `useState`, client phải: (1) tải JS, (2) render loading skeleton, (3) thực hiện round-trip mạng đến API, (4) re-render với dữ liệu. Mỗi bước thêm độ trễ. Server Component chạy trên server (gần database), fetch dữ liệu trong lúc server render, và gửi payload component đã hoàn thành đến client. Không cần fetch phía client, không có trạng thái loading, không có waterfall. Client nhận JSX đã được điền sẵn dữ liệu.',
  },
  'react-adv-045': {
    question: 'Điều gì xảy ra khi form này được submit và server action trả về `{ error: "Name required" }`?',
    options: [
      'Form throw lỗi không được xử lý',
      '`state` trở thành `{ error: "Name required" }`, React re-render form, và `<p>Name required</p>` được hiển thị. `isPending` trở về `false`.',
      'Form reset và lỗi bị bỏ qua',
      '`isPending` giữ giá trị `true` vĩnh viễn sau lỗi',
    ],
    explanation:
      '`useActionState` sử dụng giá trị trả về của action làm state mới. Khi server action trả về `{ error: "Name required" }`, React cập nhật `state` thành giá trị đó và kích hoạt re-render. `state.error && <p>...</p>` render thông báo lỗi. `isPending` trở về `false` đúng cách sau khi action hoàn thành (dù thành công hay lỗi). Đây là pattern xử lý lỗi form hoàn chỉnh trong React 19 mà không cần quản lý state thủ công.',
  },
  'react-adv-046': {
    question: 'React Compiler đã memoize thành công một component. Thay đổi nào sẽ khiến nó "bail out" và ngừng tối ưu component đó?',
    options: [
      'Thêm hook `useState` mới',
      'Mutate prop trực tiếp: `props.items.push(newItem)` bên trong hàm render — điều này vi phạm quy tắc tính thuần của React và làm output của component không xác định được theo input',
      'Sử dụng hơn 10 hooks trong component',
      'Import thư viện bên thứ ba bên trong component',
    ],
    explanation:
      'React Compiler yêu cầu hàm render component phải thuần (cùng đầu vào → cùng đầu ra, không side effect). Mutate `props.items` (hoặc bất kỳ mảng/đối tượng nào được truyền vào) trong render làm output phụ thuộc vào lịch sử mutation thay vì input hiện tại, phá vỡ đảm bảo caching của compiler. Compiler phát hiện vi phạm này và bail out khỏi việc tối ưu component. Các trigger bail-out khác: đọc biến toàn cục có thể thay đổi, hàm không xác định (`Math.random()`, `Date.now()`) trong render mà không ổn định hóa.',
  },
  'react-adv-047': {
    question: 'Sự khác biệt giữa `renderToString` và `renderToPipeableStream` cho SSR là gì?',
    options: [
      '`renderToString` là bất đồng bộ; `renderToPipeableStream` là đồng bộ',
      '`renderToString` chặn cho đến khi toàn bộ chuỗi HTML sẵn sàng (không streaming, không hỗ trợ Suspense). `renderToPipeableStream` stream các đoạn HTML khi Suspense boundary resolve, giảm Time to First Byte và cho phép progressive hydration.',
      'Chúng tạo output giống nhau — chỉ khác API',
      '`renderToPipeableStream` chỉ khả dụng trong Next.js',
    ],
    explanation:
      '`renderToString` là đồng bộ: tất cả dữ liệu `async` phải được resolve trước khi gọi nó, thường yêu cầu tải dữ liệu trước. Nó trả về chuỗi HTML hoàn chỉnh. `renderToPipeableStream` (Node.js) / `renderToReadableStream` (edge/web stream) pipe các đoạn HTML khi chúng sẵn sàng. Suspense boundary stream nội dung khi dữ liệu resolve. Callback `onShellReady` được gọi khi HTML shell ban đầu sẵn sàng để pipe, cho phép TTFB nhanh trong khi nội dung sâu hơn stream tiếp.',
  },
  'react-adv-048': {
    question: 'Tại sao `useState`/`useReducer` của React không bị vấn đề tearing trong concurrent mode, nhưng external store thì có thể?',
    options: [
      'React state sử dụng `Object.freeze` để ngăn mutation',
      'React kiểm soát khi nào cập nhật state được lên lịch và áp dụng: một lần render luôn đọc cùng snapshot state cho toàn bộ quá trình thực thi. External mutable store có thể bị mutate ngoài scheduler của React, nên render bị tạm dừng rồi tiếp tục có thể đọc giá trị khác.',
      'React state được lưu trong Web Worker tách biệt khỏi main thread',
      'Không có sự khác biệt — `useState` cũng có thể bị tear trong concurrent mode',
    ],
    explanation:
      'React state là bất biến từ góc nhìn của một lần render: React chụp snapshot state khi bắt đầu render và mọi hook đọc từ cùng snapshot đó cho toàn bộ quá trình render. Ngay cả khi render bị tạm dừng, tiếp tục, hay thử lại, snapshot vẫn nhất quán. External store là đối tượng JS thuần có thể thay đổi — React không có cách nào đóng băng snapshot của chúng. Khi concurrent render bị tạm dừng và store bị mutate, render tiếp tục đọc giá trị mới, gây ra tear. `useSyncExternalStore` giải quyết bằng cách cung cấp snapshot do React kiểm soát.',
  },
  'react-adv-049': {
    question: 'Một số thư viện (Preact Signals, TanStack Store) mang signal-like primitive vào React. Hạn chế chính của việc này trong mô hình React là gì?',
    options: [
      'Signal không thể giữ giá trị nguyên thủy trong React',
      'Diffing và scheduling của React được xây dựng xung quanh đơn vị component-render. Cập nhật signal bỏ qua scheduling bình thường của React (ví dụ: patch trực tiếp DOM) có thể gây không nhất quán với các mức ưu tiên Concurrent Mode và phá vỡ tính năng như `useTransition`.',
      'Signal không được hỗ trợ trong TypeScript',
      'Signal tự động vi phạm quy tắc hooks',
    ],
    explanation:
      'Mang fine-grained reactivity vào React là khả thi (Preact Signals patch fiber của React để bỏ qua re-render), nhưng nó bỏ qua scheduler của React. Các tính năng concurrent (transition, deferred update, selective hydration) dựa trên render có thể gián đoạn tại ranh giới component. Cập nhật DOM trực tiếp từ signal bỏ qua hợp đồng này, có thể gây đảo ưu tiên, render cũ trong concurrent mode, hoặc xung đột với memoization của React Compiler. Đội React đang khám phá primitive fine-grained native hoạt động bên trong scheduler.',
  },
  'react-adv-050': {
    question: 'React 19 loại bỏ trùng lặp các lệnh gọi `ReactDOM.preload` từ nhiều instance component như thế nào?',
    options: [
      'Không loại bỏ trùng lặp — mỗi lệnh gọi chèn một thẻ `<link>` mới',
      'React 19 loại bỏ trùng lặp theo `href`: nếu nhiều component gọi `preload("https://fonts.gstatic.com/font.woff2", { as: "font" })`, chỉ một thẻ `<link rel="preload">` xuất hiện trong `<head>` bất kể được gọi bao nhiêu lần',
      'Loại bỏ trùng lặp chỉ hoạt động trong SSR, không hoạt động trên client',
      'Chỉ component đầu tiên mount mới có thể chèn gợi ý preload',
    ],
    explanation:
      'Các API tài nguyên của React 19 (`preload`, `preinit`, `prefetchDNS`, `preconnect`) được tự động loại bỏ trùng lặp theo `href` (và kiểu `as` cho preload). Điều này có nghĩa thư viện component có thể gọi `ReactDOM.preload("font.woff2", { as: "font" })` nội bộ mà không lo ứng dụng sử dụng cũng gọi — React đảm bảo chỉ một thẻ được tạo. Tương tự cách React loại bỏ trùng lặp thẻ `<title>` và `<meta>`.',
  },
  'react-adv-051': {
    question: 'Hai chế độ của component `<Activity>` là gì và chúng khác nhau như thế nào?',
    options: [
      '`visible` và `hidden` — visible render vào DOM và chạy effect; hidden giữ state trong bộ nhớ, tạm dừng effect, và loại bỏ khỏi DOM',
      '`active` và `inactive` — inactive đóng băng component hoàn toàn bao gồm state',
      '`eager` và `lazy` — kiểm soát khi nào component mount lần đầu',
      '`streaming` và `blocking` — kiểm soát hành vi SSR',
    ],
    explanation:
      '`<Activity mode="visible">` tương đương với render bình thường. `<Activity mode="hidden">` giữ cây React sống trong bộ nhớ (state được bảo toàn, giá trị context được cập nhật) nhưng output DOM bị loại bỏ. Effect được dọn dẹp khi chuyển sang `hidden` và chạy lại khi chuyển về `visible`. Điều này cho phép chuyển tab tức thì, pre-render mục tiêu điều hướng, và tái sử dụng cây component phần tử danh sách trong các tình huống ảo hóa.',
  },
  'react-adv-052': {
    question: 'React 19 thêm ref cleanup function. Điều này cho phép gì mà trước đây không thể?',
    options: [
      'Nó cho phép ref callback chạy bất đồng bộ',
      'Trả về hàm từ ref callback đăng ký cleanup mà React gọi khi phần tử bị loại khỏi DOM, cho phép pattern setup/teardown an toàn (ví dụ: subscribe DOM event) mà không cần `useEffect` riêng',
      'Nó cho phép ref callback trả về DOM node mới để thay thế node gốc',
      'Nó chỉ được React Compiler sử dụng nội bộ',
    ],
    explanation:
      'Trước React 19, ref callback không có cơ chế cleanup. Nếu bạn dùng ref callback để thiết lập subscription hoặc observer, bạn cần `useEffect` riêng để dọn dẹp khi unmount, yêu cầu chuyển sang pattern `useRef` + effect. React 19 cho phép ref callback trả về hàm cleanup, được gọi khi node bị loại khỏi DOM (hoặc khi ref bị tách). Điều này làm setup DOM dựa trên ref khép kín và phản chiếu pattern cleanup của `useEffect`.',
  },
}
