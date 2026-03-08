import type { QuestionTranslationMap } from '../types'

export const reactHooksVi: QuestionTranslationMap = {
  'rh-001': {
    question:
      'Dạng "lazy initializer" của `useState` là gì và khi nào nên sử dụng nó?',
    options: [
      '`useState(null)` — truyền null sẽ trì hoãn việc khởi tạo',
      '`useState(() => expensiveComputation())` — truyền một hàm; React chỉ gọi nó trong lần render đầu tiên',
      '`useState(async () => fetch(...))` — dùng cho state khởi tạo bất đồng bộ',
      'Không có lazy initializer; tất cả giá trị khởi tạo đều được đánh giá một lần khi module được tải',
    ],
    explanation:
      'Khi bạn truyền một hàm vào `useState`, React chỉ gọi nó trong lần render đầu tiên và bỏ qua các lần gọi tiếp theo. Điều này giúp tránh việc chạy lại các phép tính tốn kém (ví dụ: đọc localStorage, tính toán dữ liệu phái sinh) mỗi lần render. Nếu không dùng dạng lazy, `useState(expensiveComputation())` sẽ đánh giá lại đối số mỗi lần render (dù kết quả bị bỏ qua sau lần mount đầu tiên).',
  },
  'rh-002': {
    question:
      'Nút bấm hiển thị gì sau một lần nhấn gọi hàm `increment`?',
    options: ['3', '1', '0', '9'],
    explanation:
      'Cả ba lần gọi `setN(n + 1)` đều đọc cùng giá trị `n` từ closure (là `0`). React gộp chúng lại và lần ghi cuối cùng thắng, nên state trở thành `0 + 1 = 1`. Để tăng ba lần trong một handler, hãy dùng dạng functional updater: `setN(prev => prev + 1)`.',
  },
  'rh-003': {
    question:
      'Làm thế nào để tăng state đúng cách ba lần trong một event handler duy nhất?',
    options: [
      '`setN(n + 1); setN(n + 1); setN(n + 1);`',
      '`setN(prev => prev + 1); setN(prev => prev + 1); setN(prev => prev + 1);`',
      '`setN(n + 3);`',
      'Cả B và C đều đúng',
    ],
    explanation:
      'Dạng functional updater `setN(prev => prev + 1)` đưa một phép biến đổi vào hàng đợi dựa trên state mới nhất, không phải snapshot trong closure. React áp dụng tất cả updater theo thứ tự: 0→1→2→3. `setN(n + 3)` cũng hoạt động khi `n` là snapshot đúng, nhưng ít linh hoạt hơn. Cả B và C đều đạt n=3 trong một lần nhấn.',
  },
  'rh-004': {
    question:
      'Các hàm setter của `useState` là ổn định — chúng không thay đổi giữa các lần render, vì vậy có thể an toàn bỏ chúng ra khỏi mảng dependency của `useEffect`.',
    explanation:
      'React đảm bảo rằng các hàm setter từ `useState` (và `dispatch` từ `useReducer`) có identity ổn định qua các lần render. Chúng sẽ không bao giờ khiến `useEffect` chạy lại nếu được liệt kê làm dependency, và tài liệu React nói rõ có thể an toàn bỏ chúng ra khỏi mảng deps.',
  },
  'rh-005': {
    question: '`useEffect` KHÔNG có mảng dependency sẽ làm gì?',
    options: [
      'Chỉ chạy một lần khi mount',
      'Không bao giờ chạy',
      'Chạy sau mỗi lần render (mount và mỗi lần cập nhật)',
      'Chỉ chạy khi props thay đổi',
    ],
    explanation:
      'Nếu không có mảng deps, `useEffect` chạy sau mỗi lần render hoàn tất — tương đương với `componentDidMount` + `componentDidUpdate`. Mảng rỗng `[]` giới hạn nó chỉ chạy khi mount. Các deps cụ thể giới hạn nó chỉ chạy khi các giá trị đó thay đổi.',
  },
  'rh-006': {
    question: 'Effect này tạo ra vòng lặp vô hạn. Tại sao?',
    options: [
      'Không có vòng lặp vô hạn — effect hoạt động bình thường',
      'Vòng lặp vô hạn: `user` nằm trong mảng deps. Fetch cập nhật `user`, kích hoạt lại effect, rồi lại fetch — lặp mãi. Sửa: dùng `[userId]` làm dependency.',
      'Vòng lặp vô hạn: `fetch` không nằm trong mảng deps',
      'Vòng lặp vô hạn: `setUser` nên nằm trong mảng deps',
    ],
    explanation:
      'Mảng dep `[user]` khiến effect chạy lại mỗi khi `user` thay đổi. Bản thân effect lại thay đổi `user` qua `setUser(data)`, tạo ra chu kỳ. Dependency đúng là `[userId]` — fetch lại khi user ID đích thay đổi, không phải khi dữ liệu đã tải thay đổi.',
  },
  'rh-007': {
    question:
      'Mục đích của hàm cleanup được trả về từ `useEffect` là gì?',
    options: [
      'Nó reset state của component về giá trị ban đầu',
      'Nó chạy trước lần thực thi effect tiếp theo và khi unmount để hủy subscription, timer, hoặc thao tác bất đồng bộ',
      'Nó được React gọi để báo hiệu component bị lỗi',
      'Nó là tài liệu tùy chọn mà React bỏ qua khi chạy',
    ],
    explanation:
      'Hàm cleanup chạy (1) trước khi effect chạy lại ở lần render tiếp theo (nếu deps thay đổi), và (2) khi component unmount. Nó rất cần thiết để hủy subscription, xóa `setTimeout`/`setInterval`, hủy `fetch` với `AbortController`, hoặc gỡ event listener — ngăn rò rỉ bộ nhớ và cập nhật state trên component đã unmount.',
  },
  'rh-008': {
    question:
      'Các lệnh console.log được in ra theo thứ tự nào khi component mount lần đầu và sau đó `count` thay đổi từ 0 sang 1?',
    options: [
      'effect 0 → cleanup 0 → effect 1',
      'cleanup 0 → effect 0 → effect 1',
      'effect 0 → effect 1 → cleanup 0',
      'cleanup 0 → effect 1',
    ],
    explanation:
      'Khi mount: "effect 0". Khi `count` thay đổi sang 1, React chạy cleanup từ effect trước ("cleanup 0", bắt giá trị cũ `count=0`), rồi chạy effect mới ("effect 1"). Thứ tự: `effect 0` → `cleanup 0` → `effect 1`.',
  },
  'rh-009': {
    question:
      'Làm thế nào để hủy `fetch` bên trong `useEffect` đúng cách nhằm tránh cảnh báo "cập nhật state trên component đã unmount"?',
    options: [
      'Dùng cờ boolean `let cancelled = false` và kiểm tra trước khi gọi `setData`',
      'Dùng `AbortController` — truyền signal vào fetch và abort trong cleanup',
      'Bọc toàn bộ effect trong try/catch',
      'Cả A và B đều là cách tiếp cận hợp lệ',
    ],
    explanation:
      'Cả hai cách đều hoạt động. Pattern `AbortController` (`const controller = new AbortController(); fetch(url, { signal: controller.signal }); return () => controller.abort()`) hủy request mạng ngay lập tức. Pattern dùng cờ (`let cancelled = false; ... if (!cancelled) setData(data); return () => { cancelled = true }`) ngăn cập nhật state nhưng không hủy request mạng. `AbortController` được ưu tiên về hiệu suất; cờ đơn giản hơn và được hỗ trợ mọi nơi.',
  },
  'rh-010': {
    question:
      'Đặc điểm chính của `useRef` phân biệt nó với `useState` là gì?',
    options: [
      'Ref có thể chứa bất kỳ giá trị nào, state chỉ chứa được primitive',
      'Cập nhật thuộc tính `.current` của ref KHÔNG kích hoạt re-render',
      'Ref được reset về giá trị ban đầu mỗi lần render',
      'Ref chỉ dùng để lưu trữ tham chiếu đến DOM node',
    ],
    explanation:
      '`useRef` trả về một object có thể thay đổi `{ current: initialValue }` tồn tại suốt vòng đời của component. Thay đổi `.current` KHÔNG lên lịch re-render — giúp ref phù hợp để lưu trữ giá trị cần giữ lại (như timer, giá trị trước đó, hoặc biến instance) mà không kích hoạt cập nhật UI.',
  },
  'rh-011': {
    question:
      'Khi nút bấm được nhấn lần đầu tiên, console ghi lại gì?',
    options: [
      'Ghi 1; nút hiển thị "Click (1)"',
      'Ghi 1; nút hiển thị "Click (0)"',
      'Ghi 0; nút hiển thị "Click (0)"',
      'TypeError — ref chỉ được đọc',
    ],
    explanation:
      'Thay đổi `countRef.current` không kích hoạt re-render. `console.log` hiển thị đúng giá trị đã cập nhật `1`. Nhưng vì không có re-render xảy ra, JSX của nút vẫn hiển thị giá trị cũ đã bắt được `0`. Văn bản nút sẽ không bao giờ cập nhật trừ khi có thứ khác kích hoạt render.',
  },
  'rh-012': {
    question: '`forwardRef` được dùng để làm gì?',
    options: [
      'Chuyển tiếp state từ component con lên component cha',
      'Cho phép component cha truyền `ref` trực tiếp đến DOM node hoặc component bên trong của component con',
      'Tạo ref được cập nhật sau mỗi lần render',
      'Chia sẻ một ref duy nhất giữa nhiều component',
    ],
    explanation:
      '`forwardRef(render)` bọc một component để prop `ref` được chuyển tiếp đến DOM node hoặc component khác bên trong. Điều này bắt buộc trong React 18 và trước đó vì `ref` là prop dành riêng. Trong React 19, `ref` được truyền như prop thông thường, nên `forwardRef` không còn cần thiết cho code mới — nhưng vẫn hoạt động để tương thích ngược.',
  },
  'rh-013': {
    question:
      'Khi nào việc đọc `ref.current` trực tiếp trong render (phần return JSX) gây ra vấn đề?',
    options: [
      'Không bao giờ — ref luôn an toàn để đọc trong render',
      'Trong concurrent rendering của React, render có thể thực thi nhiều lần trước khi commit. Đọc ref có thể thay đổi trong render có thể tạo ra UI không nhất quán vì ref có thể thay đổi mà không lên lịch re-render',
      'Ref không thể giữ DOM node trong render vì DOM chưa được vẽ',
      'Ref luôn trả về `null` trong lần render đầu tiên',
    ],
    explanation:
      'Trong Concurrent Mode, React có thể render component nhiều lần trước khi commit (ví dụ: trong transitions). Vì ref có thể thay đổi và cập nhật không được theo dõi, đọc `ref.current` trong render có thể gây ra sự không nhất quán về mặt hiển thị. Ref được thiết kế cho effect và event handler. Dùng state cho giá trị cần điều khiển kết quả render.',
  },
  'rh-014': {
    question: '`useMemo` trả về gì?',
    options: [
      'Một hàm callback đã được ghi nhớ',
      'Một giá trị đã tính toán được ghi nhớ — nó chỉ chạy lại hàm factory khi dependency thay đổi',
      'Một ref đến DOM node đã cache',
      'Một Promise resolve thành giá trị đã tính toán',
    ],
    explanation:
      '`useMemo(() => compute(a, b), [a, b])` cache giá trị trả về của hàm factory giữa các lần render. Nó chỉ tính toán lại khi `a` hoặc `b` thay đổi. Dùng nó cho các phép tính tốn kém hoặc để duy trì tham chiếu bằng nhau cho object/array truyền làm props cho component con đã memo.',
  },
  'rh-015': {
    question: 'Sự khác biệt giữa `useMemo` và `useCallback` là gì?',
    options: [
      'Không có khác biệt — chúng là alias của nhau',
      '`useMemo` ghi nhớ một giá trị đã tính toán; `useCallback` ghi nhớ một tham chiếu hàm. `useCallback(fn, deps)` tương đương với `useMemo(() => fn, deps)`',
      '`useCallback` ghi nhớ giá trị; `useMemo` ghi nhớ hàm',
      '`useMemo` chạy đồng bộ; `useCallback` chạy bất đồng bộ',
    ],
    explanation:
      '`useMemo` trả về kết quả gọi factory: `useMemo(() => a + b, [a, b])` → lưu trữ số. `useCallback` trả về chính hàm đó: `useCallback(() => doThing(), [dep])` → lưu trữ tham chiếu hàm ổn định. `useCallback(fn, deps)` thực chất là cú pháp ngắn gọn cho `useMemo(() => fn, deps)` và chủ yếu dùng để ngăn component con re-render khi hàm được truyền làm props.',
  },
  'rh-016': {
    question:
      'Khi nào `useCallback` thực sự có lợi, và khi nào là tối ưu hóa sớm?',
    options: [
      'Luôn có lợi — mọi hàm đều nên được bọc trong `useCallback`',
      'Có lợi khi hàm được truyền làm prop cho component con bọc `React.memo` hoặc dùng làm dep trong hook khác. Tối ưu hóa sớm nếu component con vẫn re-render hoặc chi phí ghi nhớ vượt quá lợi ích',
      'Chỉ có lợi cho hàm async',
      'Không bao giờ có lợi — React tự động ghi nhớ tất cả hàm',
    ],
    explanation:
      '`useCallback` ngăn tạo tham chiếu hàm mới mỗi lần render. Điều này quan trọng khi: (1) hàm là dep của `useEffect`/`useMemo`/`useCallback` khác, hoặc (2) nó được truyền cho component con bọc `React.memo` mà nếu không sẽ re-render do tham chiếu mới. Thêm `useCallback` ở khắp nơi tạo thêm overhead (cấp phát closure + so sánh dep) thường vượt quá lợi ích. Hãy profile trước.',
  },
  'rh-017': {
    question:
      'Tại sao component con vẫn re-render mỗi khi component cha render mặc dù đã dùng `React.memo`?',
    options: [
      'React.memo không hoạt động với props là hàm',
      'Mỗi lần render tạo tham chiếu hàm `handleSave` mới. `React.memo` so sánh nông props, nên `onSave !== prevOnSave` → re-render. Sửa: bọc `handleSave` trong `useCallback`.',
      'State `count` khiến `Child` re-render bất kể `React.memo`',
      'Không có bug — `React.memo` chỉ ngăn re-render khi có children được truyền',
    ],
    explanation:
      'Arrow function trong thân render được tạo lại mỗi lần render. `React.memo` dùng `Object.is` (so sánh nông) trên mỗi prop. Vì `handleSave` là tham chiếu hàm mới mỗi lần render, `onSave !== prevOnSave` luôn đúng và `Child` re-render. Bọc `handleSave` trong `useCallback([], [])` cho nó tham chiếu ổn định, sửa được vấn đề.',
  },
  'rh-018': {
    question:
      'Làm thế nào để sử dụng giá trị React Context trong functional component?',
    options: [
      '`const value = React.getContext(MyContext)`',
      '`const value = useContext(MyContext)`',
      '`const value = MyContext.consume()`',
      '`const value = React.readContext(MyContext)`',
    ],
    explanation:
      '`useContext(MyContext)` trả về giá trị context hiện tại được cung cấp bởi `<MyContext.Provider>` gần nhất phía trên component trong cây. Khi giá trị của provider thay đổi, tất cả component gọi `useContext(MyContext)` sẽ re-render.',
  },
  'rh-019': {
    question:
      'Vấn đề hiệu suất khi dùng một Context duy nhất cho nhiều giá trị thay đổi thường xuyên là gì, và cách khắc phục?',
    options: [
      'Không có vấn đề — cập nhật context được gộp tự động',
      'Mỗi consumer `useContext` sẽ re-render mỗi khi BẤT KỲ phần nào của giá trị context thay đổi, kể cả khi nó chỉ dùng một tập con. Khắc phục bằng cách tách context thành các context nhỏ hơn, ghi nhớ object giá trị, hoặc dùng thư viện quản lý state hỗ trợ selector',
      'Cập nhật context luôn đồng bộ, chặn event loop',
      'Context chỉ chứa được giá trị primitive để tránh vấn đề',
    ],
    explanation:
      'React re-render tất cả consumer khi giá trị context thay đổi (theo tham chiếu). Một context chứa `{ theme, user, cart, notifications }` nghĩa là mọi consumer đều re-render mỗi khi cart cập nhật. Giải pháp: (1) Tách thành `ThemeContext`, `UserContext`, v.v. (2) Ghi nhớ giá trị với `useMemo`. (3) Dùng pattern `useReducer` + dispatch context. (4) Dùng Zustand, Jotai, hoặc tương tự cho subscription chi tiết.',
  },
  'rh-020': {
    question:
      '`useContext` có thể thay thế hoàn toàn mọi nhu cầu thư viện quản lý state như Redux trong ứng dụng lớn.',
    explanation:
      'Context rất tuyệt cho giá trị toàn cục ít thay đổi (theme, locale, user đăng nhập). Đối với cập nhật tần suất cao (ví dụ: dữ liệu realtime, luồng reducer phức tạp với selector), Context có hạn chế về hiệu suất và thiếu tính năng như middleware, dev tools, và subscription tối ưu. Redux, Zustand, hoặc Jotai phù hợp hơn cho state ứng dụng phức tạp.',
  },
  'rh-021': {
    question: 'Khi nào nên ưu tiên `useReducer` thay vì `useState`?',
    options: [
      'Luôn luôn — `useReducer` là thay thế chính thức cho `useState`',
      'Khi state tiếp theo phụ thuộc vào nhiều giá trị con, hoặc khi logic cập nhật phức tạp và được diễn đạt tốt hơn dưới dạng các action được đặt tên',
      'Chỉ khi state là array hoặc object, không bao giờ cho primitive',
      'Khi bạn cần cập nhật state bất đồng bộ',
    ],
    explanation:
      'Tài liệu React gợi ý `useReducer` khi: (1) state là object với nhiều trường cập nhật cùng lúc, (2) state tiếp theo phụ thuộc vào state trước với logic phức tạp, (3) bạn muốn đặt logic state cùng chỗ, hoặc (4) bạn muốn hàm reducer thuần túy dễ test. Với counter hoặc toggle đơn giản, `useState` đơn giản hơn và được ưu tiên.',
  },
  'rh-022': {
    question:
      '`state` là gì sau khi dispatch `{ type: "INCREMENT" }` hai lần rồi `{ type: "RESET" }`?',
    options: [
      '{ count: 2 }',
      '{ count: 0 }',
      '{ count: 1 }',
      'undefined',
    ],
    explanation:
      'INCREMENT hai lần: count từ 0→1→2. RESET trả về `initialState` là `{ count: 0 }`. State cuối cùng là `{ count: 0 }`. Lưu ý: trả về tham chiếu `initialState` nghĩa là state reset là cùng object tham chiếu — thường ổn cho pattern bất biến nhưng có thể là bug tinh vi nếu `initialState` bị thay đổi.',
  },
  'rh-023': {
    question:
      'Pattern "Context + useReducer" là gì và nó giải quyết vấn đề gì?',
    options: [
      'Đây là anti-pattern — context và reducer không nên kết hợp',
      'Cung cấp quản lý state kiểu Redux không cần dependency bên ngoài: reducer quản lý các chuyển đổi state phức tạp trong khi Context phân phối state và dispatch đến cây component',
      'Cho phép reducer bất đồng bộ bằng cách bọc dispatch trong Promise',
      'Thay thế hoàn toàn nhu cầu state ở cấp component',
    ],
    explanation:
      'Kết hợp `useReducer` với Context là giải pháp thay thế nhẹ cho Redux: `const [state, dispatch] = useReducer(reducer, init)` ở cấp cao nhất, sau đó cung cấp cả `state` (qua một context) và `dispatch` (qua context khác) cho component con. Tách riêng chúng ngăn các component chỉ dispatch khỏi re-render khi state thay đổi.',
  },
  'rh-024': {
    question: '`useId` (React 18) giải quyết vấn đề gì?',
    options: [
      'Tạo ID ngẫu nhiên an toàn về mặt mã hóa',
      'Tạo ID ổn định, duy nhất, nhất quán giữa server-side rendering và client-side hydration, tránh lỗi hydration mismatch SSR',
      'Tạo UUID cho bản ghi cơ sở dữ liệu',
      'Thay thế prop `key` trên các phần tử danh sách',
    ],
    explanation:
      '`useId` tạo ID duy nhất nhất quán giữa render server và client, giải quyết lỗi hydration mismatch khi dùng `Math.random()` hoặc `Date.now()` cho ID. Nó được thiết kế cho các pattern trợ năng như liên kết `<label>` với `<input>` qua cặp `htmlFor`/`id` trong component tái sử dụng.',
  },
  'rh-025': {
    question:
      'Sự khác biệt giữa `useTransition` và `useDeferredValue` là gì?',
    options: [
      'Không có khác biệt — chúng là alias của nhau',
      '`useTransition` cho phép bạn đánh dấu cập nhật state là không khẩn cấp (bạn kiểm soát setter); `useDeferredValue` trì hoãn một giá trị bạn không kiểm soát (ví dụ: prop từ component cha)',
      '`useDeferredValue` dùng cho transition; `useTransition` dùng cho animation',
      '`useTransition` debounce cập nhật; `useDeferredValue` throttle chúng',
    ],
    explanation:
      '`useTransition` bọc lệnh gọi `setState` của bạn: `startTransition(() => setState(newValue))`. `useDeferredValue` nhận một giá trị (thường là prop hoặc state phái sinh) và trả về bản sao trì hoãn "chậm hơn" khi cập nhật nhanh. Cả hai đánh dấu render là ưu tiên thấp (có thể bị gián đoạn), giữ UI phản hồi nhanh. Dùng `useTransition` khi bạn sở hữu cập nhật state; `useDeferredValue` khi bạn không sở hữu.',
  },
  'rh-026': {
    question:
      '`useTransition` trả về `[isPending, startTransition]`. `isPending` hữu ích cho điều gì?',
    options: [
      'Kiểm tra xem request mạng bất đồng bộ có đang chạy không',
      'Hiển thị chỉ báo loading trong khi cập nhật state trì hoãn (không khẩn cấp) vẫn đang render ở nền',
      'Biết liệu component đang trong quá trình unmount',
      'Phát hiện xem React có đang gộp nhiều cập nhật state cùng lúc không',
    ],
    explanation:
      '`isPending` là `true` trong khi React đang render cập nhật transition ở nền. Bạn có thể dùng nó để hiển thị spinner, làm mờ giao diện hiện tại, hoặc hiện skeleton UI trong quá trình render trì hoãn — mà không chặn tương tác với UI hiện có. Nó tự động trở về `false` khi render transition được commit.',
  },
  'rh-027': {
    question: '"Quy tắc của Hooks" là gì?',
    options: [
      'Hooks phải được gọi bên trong class component; không bao giờ trong hàm',
      'Chỉ gọi hooks ở cấp cao nhất của hàm (không bên trong điều kiện/vòng lặp/hàm lồng), và chỉ gọi chúng từ React function component hoặc custom hook',
      'Hooks chỉ có thể được gọi một lần cho mỗi component',
      'Custom hook phải luôn gọi ít nhất ba hook có sẵn',
    ],
    explanation:
      'Hai quy tắc: (1) Chỉ gọi hooks ở cấp cao nhất — không bên trong `if`, `for`, hoặc hàm lồng — để React duy trì thứ tự gọi hook nhất quán qua các lần render. (2) Chỉ gọi hooks từ React function component hoặc custom hook (có tiền tố `use`). Plugin ESLint `eslint-plugin-react-hooks` tự động áp dụng các quy tắc này.',
  },
  'rh-028': {
    question: 'Điều gì làm một hàm trở thành "custom hook"?',
    options: [
      'Nó phải được đăng ký với `React.registerHook()`',
      'Nó phải trả về React element (JSX)',
      'Nó bắt đầu bằng `use` và có thể gọi các hook khác bên trong',
      'Nó phải nhận một đối số `props` duy nhất',
    ],
    explanation:
      'Custom hook đơn giản là hàm JavaScript có tên bắt đầu bằng `use` và gọi một hoặc nhiều React hook bên trong. Tiền tố `use` là quy ước cho phép công cụ lint (eslint-plugin-react-hooks) áp dụng quy tắc hooks cho hàm đó. Custom hook chia sẻ logic — không phải state — giữa các component.',
  },
  'rh-029': {
    question:
      'Custom hook này trả về gì và mục đích của nó là gì?',
    options: [
      'Trả về Promise resolve thành giá trị đã lưu',
      'Trả về tuple `[value, setter]` đồng bộ React state với localStorage — khởi tạo lazy từ storage và lưu lại mỗi lần cập nhật',
      'Chỉ trả về giá trị đã lưu (chỉ đọc)',
      'Lỗi — localStorage không thể truy cập bên trong useState',
    ],
    explanation:
      'Đây là pattern custom hook kinh điển. Lazy initializer đọc từ `localStorage` một lần khi mount (try/catch cho an toàn SSR). Setter `setValue` vừa cập nhật React state vừa lưu vào `localStorage`. Nó trả về cùng tuple `[value, setter]` như `useState`, là thay thế tương thích hoàn toàn.',
  },
  'rh-030': {
    question:
      'Làm thế nào để test custom hook riêng biệt mà không render toàn bộ component?',
    options: [
      'Không thể test hook riêng biệt — chúng phải nằm trong component',
      'Dùng `renderHook` từ `@testing-library/react`, tạo component wrapper tối thiểu và expose giá trị trả về của hook',
      'Dùng `React.testHook()` có sẵn trong test utils của React',
      'Mock toàn bộ hook với jest.fn()',
    ],
    explanation:
      '`@testing-library/react` export `renderHook(callback)` chạy hook bên trong component test và trả về `{ result, rerender, unmount }`. `result.current` chứa giá trị trả về của hook. `act()` được dùng để bọc cập nhật state. Điều này cho phép test logic hook riêng biệt mà không cần xây dựng component UI thực.',
  },
  'rh-031': {
    question:
      'Pattern `useEvent` (hoặc `useEffectEvent` trong React 19) giải quyết vấn đề gì?',
    options: [
      'Thêm event listener vào DOM node với cleanup tự động',
      'Tạo event handler luôn nhìn thấy state/props mới nhất mà không cần liệt kê trong deps của `useEffect`, giải quyết nghịch lý "closure cũ trong effect" vs "effect chạy lại không cần thiết"',
      'Cách phát custom event giữa các component',
      'Gộp nhiều event handler thành một',
    ],
    explanation:
      'Vấn đề closure cũ: effect cần đọc state hiện tại, nhưng liệt kê state trong deps khiến effect chạy lại quá nhiều (ví dụ: kết nối lại WebSocket mỗi tin nhắn). `useEffectEvent` (thử nghiệm trong React 19, trước đó là RFC `useEvent`) bọc hàm để nó luôn đọc giá trị mới nhất (không phản ứng) nhưng có thể được gọi từ bên trong effect mà không cần liệt kê làm dep.',
  },
  'rh-032': {
    question:
      'Hai instance component gọi cùng custom hook sẽ chia sẻ cùng state.',
    explanation:
      'Custom hook chia sẻ logic, không chia sẻ state. Mỗi lần component gọi custom hook, nó nhận state và effect riêng biệt. Điều này giống như có `useState` bên trong component — mỗi instance có state độc lập. Để chia sẻ state giữa các component, bạn cần Context, thư viện quản lý state, hoặc nâng state lên component cha chung.',
  },
  'rh-033': {
    question:
      '`useRef` trả về gì trong lần render đầu tiên, và những lần render tiếp theo thì sao?',
    options: [
      'null ở lần render đầu, DOM node ở các lần render sau',
      'Object mới `{ current: initialValue }` ở lần render đầu; cùng object đó ở mọi lần render tiếp theo',
      'Object mới mỗi lần render với giá trị mới nhất',
      'undefined cho đến khi component được mount',
    ],
    explanation:
      '`useRef(initialValue)` tạo object `{ current: initialValue }` một lần và trả về cùng tham chiếu object đó suốt vòng đời của component. Tính đồng nhất bền vững này là lý do nó hữu ích để lưu trữ giá trị có thể thay đổi hoặc DOM ref cần tồn tại qua các lần re-render.',
  },
  'rh-034': {
    question:
      'Hook usePrevious này có một bug tinh vi. Đó là gì?',
    options: [
      'Không có bug — đây là implementation chuẩn',
      'Bug: effect không có mảng dep nên chạy sau mỗi render. Nhưng return xảy ra trước effect, nên ở lần render đầu nó trả về `undefined` và mỗi lần render tiếp theo nó đúng trả về giá trị trước — thực ra đây là cố ý, không phải bug.',
      'Bug: useRef nên được khởi tạo với `value` để tránh undefined ở lần render đầu',
      'Bug: effect nên có `value` trong mảng deps',
    ],
    explanation:
      'Đây thực sự là implementation đúng và có chủ đích. Effect chạy sau render và sau return. Nên: (1) render xảy ra, `ref.current` vẫn giữ giá trị cũ → chúng ta trả về nó. (2) effect chạy, cập nhật `ref.current` sang giá trị mới. Ở lần render tiếp theo, `ref.current` sẽ là giá trị từ lần render trước. Lần render đầu trả về `undefined` là mong đợi. Đây là pattern chuẩn từ tài liệu React.',
  },
  'rh-035': {
    question:
      'Trong React 19, hook `use()` mới làm gì mà các hook hiện tại không thể?',
    options: [
      'Nó là cú pháp ngắn gọn cho `useState` với persistence tích hợp',
      '`use(promise)` có thể suspend component khi đang chờ Promise, và `use(context)` đọc context — đặc biệt, nó có thể được gọi bên trong điều kiện và vòng lặp, không giống mọi hook khác',
      'Nó thay thế `useEffect` cho mọi thao tác bất đồng bộ',
      'Nó cung cấp cách sử dụng các phương thức lifecycle của class component trong functional component',
    ],
    explanation:
      '`use()` của React 19 là duy nhất: nó có thể được gọi có điều kiện (bên trong `if`) và có thể unwrap Promise (tích hợp với Suspense) và giá trị Context. `use(promise)` suspend component cho đến khi promise resolve, rồi trả về giá trị đã resolve. Điều này không thể với hook thông thường do quy tắc hooks. Nó hoạt động ở cả Server và Client Component.',
  },
  'react-hooks-036': {
    question:
      'Signature của `useOptimistic` là gì và hàm update nhận gì?',
    options: [
      '`updateFn` chỉ nhận `(newValue)`',
      '`updateFn` nhận `(currentState, optimisticValue)` và trả về state lạc quan tiếp theo để hiển thị trong khi action bất đồng bộ thực đang chờ',
      '`updateFn` nhận Promise được trả về bởi server action',
      '`updateFn` là tùy chọn và mặc định thay thế toàn bộ state',
    ],
    explanation:
      '`useOptimistic(realState, (currentState, optimisticValue) => nextState)` trả về `[optimisticState, addOptimistic]`. Gọi `addOptimistic(value)` bên trong transition/action để áp dụng cập nhật dự đoán ngay lập tức. Hàm update là reducer thuần túy: nhận state mới nhất và payload lạc quan, trả về state dự đoán tiếp theo. Khi action bất đồng bộ thực hoàn tất, React loại bỏ state lạc quan và áp dụng kết quả thực.',
  },
  'react-hooks-037': {
    question:
      'Tại sao component này không đọc được giá trị `pending` đúng từ `useFormStatus`?',
    options: [
      'Không có bug — `useFormStatus` hoạt động ở bất kỳ đâu bên trong form',
      'Bug: `useFormStatus` phải được gọi trong component là *con* của `<form>`, không phải trong cùng component render form. Tách button ra thành component `<SubmitButton>` riêng.',
      'Bug: `useFormStatus` chỉ hoạt động với phần tử form HTML native, không phải React form',
      'Bug: prop `action` nên là `onSubmit`',
    ],
    explanation:
      '`useFormStatus` đọc context từ `<form>` cha gần nhất. Nếu được gọi trong cùng component render `<form>`, nó không có form context cha và luôn trả về `{ pending: false }`. Cách sửa là chuyển button vào component con riêng: `function SubmitButton() { const { pending } = useFormStatus(); return <button disabled={pending}>Submit</button>; }`.',
  },
  'react-hooks-038': {
    question:
      'Giá trị trả về thứ ba của `useActionState` trong React 19 là gì?',
    options: [
      'Hàm `reset` để xóa form state',
      '`isPending` — boolean là `true` khi action bất đồng bộ đang thực thi, cho phép hiển thị UI loading mà không cần quản lý `useState` riêng',
      'Object `FormData` từ lần submit cuối',
      'Object `error` nếu action ném lỗi',
    ],
    explanation:
      '`useActionState` của React 19 trả về tuple ba phần tử: `[state, formAction, isPending]`. `state` là giá trị trả về bởi lần gọi action cuối (bắt đầu là `initialState`). `formAction` được truyền vào `<form action={formAction}>`. `isPending` là `true` khi action đang chạy. Điều này thay thế pattern phổ biến `useState` cho data + `useState` cho trạng thái loading + kết nối thủ công.',
  },
  'react-hooks-039': {
    question:
      '`use(Context)` khác `useContext(Context)` như thế nào trong React 19?',
    options: [
      'Chúng giống hệt nhau — `use(Context)` chỉ là alias',
      '`use(Context)` có thể được gọi có điều kiện (bên trong `if`/`switch`/vòng lặp) không giống `useContext`, phải tuân theo quy tắc hooks và luôn ở cấp cao nhất',
      '`use(Context)` chỉ có sẵn trong Server Component',
      '`use(Context)` subscribe lazily; `useContext` subscribe eagerly',
    ],
    explanation:
      '`use()` không phải hook truyền thống — nó được miễn quy tắc "chỉ gọi hooks ở cấp cao nhất". Điều này có nghĩa bạn có thể đọc context có điều kiện: `if (needsTheme) { const theme = use(ThemeContext); }` — component chỉ suspend cho user premium. Sự linh hoạt này là lý do nó có quy ước đặt tên `use` chữ thường thay vì `useXxx`. Cả hai đều kích hoạt re-render khi context thay đổi.',
  },
  'react-hooks-040': {
    question:
      'Ba đối số của `useSyncExternalStore` là gì và mỗi đối số làm gì?',
    options: [
      '`subscribe` kết nối đến store, `getSnapshot` trả về giá trị hiện tại, `getServerSnapshot` trả về giá trị cho SSR',
      '`subscribe` là giá trị ban đầu, `getSnapshot` là hàm cập nhật, `getServerSnapshot` là cleanup tùy chọn',
      '`subscribe` là selector, `getSnapshot` là toàn bộ store, `getServerSnapshot` là cờ hydration',
      '`subscribe` và `getSnapshot` là bắt buộc; đối số thứ ba luôn tùy chọn và có thể bỏ qua an toàn',
    ],
    explanation:
      '`subscribe(callback)` đăng ký listener và trả về hàm hủy đăng ký — được gọi khi external store thay đổi. `getSnapshot()` trả về giá trị store hiện tại đồng bộ (phải thuần túy và trả về cùng tham chiếu nếu không đổi, nếu không sẽ xảy ra tearing). `getServerSnapshot()` trả về giá trị cho SSR/hydration. `useSyncExternalStore` đảm bảo đọc nhất quán trong concurrent render, ngăn tearing.',
  },
  'react-hooks-041': {
    question:
      '`useInsertionEffect` được thiết kế cho mục đích gì và khác `useLayoutEffect` thế nào?',
    options: [
      'Giống hệt `useLayoutEffect` nhưng tên khác',
      '`useInsertionEffect` chạy đồng bộ *trước khi* DOM mutations được áp dụng, là nơi duy nhất an toàn cho thư viện CSS-in-JS inject thẻ `<style>`. `useLayoutEffect` chạy *sau* DOM mutations nhưng trước khi trình duyệt paint.',
      '`useInsertionEffect` chạy bất đồng bộ sau khi trình duyệt paint',
      '`useInsertionEffect` thay thế `useEffect` cho thư viện animation',
    ],
    explanation:
      '`useInsertionEffect` được thêm riêng cho thư viện CSS-in-JS (styled-components, Emotion). Nó chạy đồng bộ trước khi React áp dụng DOM mutations, cho phép thư viện inject thẻ `<style>` vào `<head>` trước khi trình duyệt layout các node bị ảnh hưởng. Điều này ngăn FOUC (flash of unstyled content) và layout thrashing có thể xảy ra khi style được inject trong `useLayoutEffect` (chạy sau DOM mutations). Code cấp ứng dụng không nên dùng trực tiếp.',
  },
  'react-hooks-042': {
    question:
      'Wrapper `act()` làm gì khi test hook với `renderHook`?',
    options: [
      'Nó mock nội bộ React để test chạy nhanh hơn',
      'Nó flush tất cả cập nhật state và effect đang chờ, đảm bảo state của hook phản ánh mọi công việc đã xếp hàng trước khi assertion chạy',
      'Nó ngăn test ném lỗi',
      'Nó chỉ cần cho test bất đồng bộ với Promise',
    ],
    explanation:
      '`act()` từ `@testing-library/react` (hoặc `react`) yêu cầu React xử lý tất cả cập nhật state, effect, và re-render đang chờ một cách đồng bộ trước các assertion. Không có `act()`, cập nhật state kích hoạt bởi event hoặc timer có thể chưa được áp dụng khi bạn đọc `result.current`, dẫn đến assertion không ổn định. Cho thao tác bất đồng bộ, dùng `await act(async () => { ... })`.',
  },
  'react-hooks-043': {
    question:
      'Custom hook này trả về gì và dùng những React API nào?',
    options: [
      'Trả về chuỗi CSS media query',
      'Trả về boolean là `true` khi viewport khớp CSS media query, và re-render component mỗi khi trạng thái khớp thay đổi',
      'Trả về ref đến object matchMedia',
      'Trả về tuple `[matches, setQuery]`',
    ],
    explanation:
      'Lazy initializer đọc trạng thái khớp ban đầu từ `window.matchMedia`. `useEffect` subscribe vào thay đổi media query dùng event change native của `MediaQueryList`, cập nhật state mỗi khi viewport vượt qua breakpoint query. Cleanup gỡ listener khi unmount hoặc khi `query` thay đổi. Trả về boolean ổn định phản ứng với thay đổi viewport.',
  },
  'react-hooks-044': {
    question:
      'Pattern implementation đúng cho hook `useDebounce(value, delay)` là gì?',
    options: [
      'Dùng `useMemo` với delay làm dependency',
      'Lưu bản sao debounced trong state; dùng `useEffect` để lên lịch `setTimeout` cập nhật nó, xóa timer trước đó trong hàm cleanup',
      'Bọc `setValue` trong `useCallback` với delay trong mảng deps',
      'Dùng `useRef` để lưu timer và `useMemo` cho giá trị debounced',
    ],
    explanation:
      '```js\nfunction useDebounce(value, delay) {\n  const [debounced, setDebounced] = useState(value);\n  useEffect(() => {\n    const id = setTimeout(() => setDebounced(value), delay);\n    return () => clearTimeout(id);\n  }, [value, delay]);\n  return debounced;\n}\n```\nMỗi khi `value` thay đổi, effect xóa timer trước (cleanup) và bắt đầu timer mới. State debounced chỉ cập nhật sau khi giá trị ngừng thay đổi trong `delay` mili giây. Pattern này ngăn re-render hoặc gọi API quá mức khi nhập liệu nhanh.',
  },
  'react-hooks-045': {
    question:
      'Tại sao hook `useEventListener` nên lưu handler trong `useRef` thay vì liệt kê nó trong mảng deps của `useEffect`?',
    options: [
      'Ref đọc nhanh hơn so với tra cứu mảng deps',
      'Lưu handler trong ref cho phép effect tham chiếu handler mới nhất mà không cần đăng ký lại (gỡ + thêm event listener) mỗi lần render khi handler là tham chiếu hàm mới',
      'Event listener không thể được cập nhật bên trong `useEffect` — chỉ qua ref',
      'Handler ref tự động ngăn rò rỉ bộ nhớ',
    ],
    explanation:
      'Nếu handler (ví dụ: inline function) nằm trong deps, effect chạy lại mỗi render, gỡ và thêm listener không cần thiết. Dùng ref: `const handlerRef = useRef(handler); useEffect(() => { handlerRef.current = handler; }); useEffect(() => { el.addEventListener(event, (e) => handlerRef.current(e)); return () => el.removeEventListener(...); }, [event, el])` — listener chỉ được thêm một lần (hoặc khi event/element thay đổi) nhưng luôn gọi handler mới nhất qua ref.',
  },
  'react-hooks-046': {
    question:
      'Tại sao effect này chạy mỗi lần render dù dữ liệu dường như không thay đổi?',
    options: [
      'Không có bug — effect chạy đúng chỉ khi `userId` thay đổi',
      'Bug: `options` là object literal mới mỗi lần render. So sánh deps dùng `Object.is` (so sánh tham chiếu), nên `options !== prevOptions` luôn đúng. Sửa: liệt kê deps primitive trực tiếp `[userId]` hoặc ghi nhớ object với `useMemo`.',
      'Bug: object không thể dùng trong mảng deps',
      'Bug: `fetchProfile` phải nằm trong mảng deps',
    ],
    explanation:
      'React so sánh deps bằng `Object.is`. Object literal mới `{}` luôn có tham chiếu khác với object trước, kể cả khi nội dung giống nhau. Giải pháp: (1) Destructure thành primitive trong deps: `[userId, includeDetails]`. (2) `useMemo(() => ({ userId, includeDetails: true }), [userId])` để ghi nhớ object. (3) Di chuyển object ra ngoài component nếu nó không bao giờ thay đổi. Vấn đề tương tự áp dụng cho array và function.',
  },
  'react-hooks-047': {
    question:
      'Truyền array literal `[]` hoặc `{}` trực tiếp trong mảng deps của `useEffect` hoặc `useMemo` khiến nó chạy lại mỗi lần render.',
    explanation:
      'Array và object literal tạo tham chiếu mới mỗi lần render. `useMemo(() => result, [{ id }])` sẽ không bao giờ thực sự ghi nhớ vì `[{ id }]` là array mới với object mới mỗi lần render. Luôn truyền giá trị primitive hoặc tham chiếu ổn định (từ `useRef`, phạm vi module, hoặc `useMemo`/`useCallback`) làm deps. Quy tắc eslint `exhaustive-deps` cảnh báo về điều này nhưng không phải lúc nào cũng phát hiện được mọi trường hợp.',
  },
  'react-hooks-048': {
    question:
      'Quy tắc hooks nào bị vi phạm ở đây, và hậu quả là gì?',
    options: [
      'Không vi phạm — hook có điều kiện được phép khi điều kiện là prop',
      'Vi phạm "chỉ gọi hooks ở cấp cao nhất". Nếu `hasDiscount` thay đổi giữa các lần render, thứ tự gọi hook thay đổi, và React ánh xạ state hook sai lệch — state của `name` bị gán vào slot của `discount`, gây hỏng state.',
      'Vi phạm "chỉ gọi hooks trong function component" — đây là pattern class component',
      'Vi phạm vì `useState` không thể lồng bên trong khối `if` về mặt cú pháp',
    ],
    explanation:
      'React theo dõi state hook theo thứ tự gọi (index nội bộ). Ở render 1 với `hasDiscount=true`: hooks được gọi theo thứ tự — price(0), discount(1), name(2). Ở render 2 với `hasDiscount=false`: price(0), name(1) — React gán giá trị slot của `discount` cho `name`, gây hỏng state. Đây là lý do hooks phải luôn được gọi theo cùng thứ tự. `eslint-plugin-react-hooks` (rules-of-hooks) bắt lỗi này khi lint.',
  },
  'react-hooks-049': {
    question:
      '`eslint-plugin-react-hooks` áp dụng hai quy tắc ESLint nào?',
    options: [
      '`react-hooks/no-state` và `react-hooks/no-effects`',
      '`react-hooks/rules-of-hooks` (thứ tự gọi, chỉ cấp cao nhất) và `react-hooks/exhaustive-deps` (mọi deps dùng trong effect phải được liệt kê)',
      '`react-hooks/no-inline-functions` và `react-hooks/pure-functions`',
      '`react-hooks/no-stale-state` và `react-hooks/no-missing-cleanup`',
    ],
    explanation:
      '`rules-of-hooks` đảm bảo hooks chỉ được gọi ở cấp cao nhất và chỉ từ function component hoặc custom hook. `exhaustive-deps` đảm bảo tất cả biến được đọc bên trong `useEffect`, `useMemo`, hoặc `useCallback` đều được liệt kê trong mảng deps, ngăn bug closure cũ. Quy tắc exhaustive-deps hỗ trợ auto-fix và là quy tắc lint có tác động lớn nhất cho việc sử dụng hook đúng cách.',
  },
  'react-hooks-050': {
    question:
      'Pattern đúng cho hook `useIntersectionObserver` báo khi phần tử vào viewport là gì?',
    options: [
      'Dùng `useState` cho ref và `useEffect` cho cài đặt observer',
      'Nhận `ref` (gắn vào phần tử đích), tạo `IntersectionObserver` trong `useEffect`, observe phần tử `ref.current`, cập nhật state khi thay đổi intersection, và disconnect trong hàm cleanup',
      'Tạo observer trong thân component không cần `useEffect`',
      'Dùng `useMemo` cho observer và `useRef` cho state entry',
    ],
    explanation:
      '```js\nfunction useIntersectionObserver(ref, options) {\n  const [entry, setEntry] = useState(null);\n  useEffect(() => {\n    const el = ref.current;\n    if (!el) return;\n    const observer = new IntersectionObserver(([e]) => setEntry(e), options);\n    observer.observe(el);\n    return () => observer.disconnect();\n  }, [ref, options]);\n  return entry;\n}\n```\nObserver được tạo trong `useEffect` (sau mount khi `ref.current` có sẵn). Cleanup disconnect observer khi unmount. Cẩn thận `options` là object mới mỗi render — ghi nhớ nó ở nơi gọi.',
  },
  'react-hooks-051': {
    question:
      'Cách đúng để implement `usePrevious` trả về giá trị từ lần render trước là gì?',
    options: [
      'Sai — effect nên có `[value]` làm deps',
      'Đây là implementation chuẩn: effect chạy sau render và lưu giá trị mới, nhưng câu lệnh `return` thực thi trong render trước effect, nên nó trả về giá trị từ lần render trước',
      'Ref nên được khởi tạo bằng `value` để tránh undefined ở lần render đầu',
      'Hook này cần `useLayoutEffect` thay vì `useEffect` mới chính xác',
    ],
    explanation:
      'Mẹo: `return ref.current` thực thi đồng bộ trong render, trước khi effect chạy. `useEffect` (không deps) cập nhật `ref.current` sau khi render hoàn tất. Nên ở render N, hook trả về `ref.current` chứa giá trị từ render N-1 (được đặt bởi effect từ render trước). Ở lần render đầu, nó trả về `undefined`. Đây là hành vi có chủ đích và được tài liệu hóa.',
  },
  'react-hooks-052': {
    question:
      'Bạn có `useEffect` gọi hàm `onSuccess` từ props. Bạn nên xử lý nó trong mảng deps thế nào?',
    options: [
      'Bỏ nó ra khỏi deps để tránh vòng lặp vô hạn',
      'Liệt kê `onSuccess` trong deps. Nếu nó được tạo lại mỗi render (gây effect chạy lặp), bọc lệnh gọi trong `useEffectEvent` (React 19) hoặc ổn định nó với `useCallback` ở nơi gọi',
      'Luôn bọc mọi prop hàm trong `useRef` bên trong effect',
      'Truyền `null` làm deps để tắt hoàn toàn theo dõi dep',
    ],
    explanation:
      'Quy tắc `exhaustive-deps` yêu cầu `onSuccess` trong deps — bỏ nó ra tạo closure cũ. Nếu `onSuccess` thay đổi mỗi render, effect chạy lại quá nhiều. Giải pháp: (1) Dùng `useEffectEvent` (React 19) để đọc giá trị mới nhất không phản ứng. (2) Đảm bảo component cha ghi nhớ nó với `useCallback`. (3) Nếu là event callback (fire-and-forget khi hoàn thành), `useEffectEvent` là giải pháp gọn gàng. Không bao giờ tắt quy tắc lint mà không có lý do rõ ràng.',
  },
  'react-hooks-053': {
    question:
      'Bạn có thể gọi `use(promise)` bên trong khối `if` trong React 19 không?',
    options: [
      'Không — `use()` tuân theo cùng quy tắc như mọi hook khác',
      'Có — `use()` được miễn rõ ràng khỏi quy tắc "không hook trong điều kiện" và có thể được gọi bên trong `if`, vòng lặp, và early return',
      'Chỉ khi điều kiện `if` là hằng số được đánh giá lúc build',
      'Chỉ bên trong Server Component, không phải Client Component',
    ],
    explanation:
      '`use()` là primitive mới, không phải hook theo nghĩa truyền thống. Đội ngũ React cố ý cho phép nó được gọi có điều kiện. Điều này cho phép pattern như: `if (user.isPremium) { const premiumData = use(premiumDataPromise); }` — component chỉ suspend cho user premium. Sự linh hoạt này là lý do nó có quy ước đặt tên chữ thường `use` thay vì `useXxx`.',
  },
  'react-hooks-054': {
    question:
      'Bạn sẽ dùng `useSyncExternalStore` để subscribe vào thay đổi `navigator.onLine` thế nào?',
    options: [
      'Dùng `useEffect` với event listener — `useSyncExternalStore` chỉ cho store kiểu Redux',
      'Truyền `subscribe` là hàm thêm/gỡ listener `online`/`offline` trên `window`, `getSnapshot` trả về `navigator.onLine`, và `getServerSnapshot` trả về `true`',
      'Dùng `useRef` để theo dõi trạng thái online mà không gây re-render',
      '`useSyncExternalStore` không thể dùng cho browser API',
    ],
    explanation:
      '```js\nfunction useOnlineStatus() {\n  return useSyncExternalStore(\n    (cb) => {\n      window.addEventListener("online", cb);\n      window.addEventListener("offline", cb);\n      return () => {\n        window.removeEventListener("online", cb);\n        window.removeEventListener("offline", cb);\n      };\n    },\n    () => navigator.onLine,\n    () => true // server giả sử online\n  );\n}\n```\nĐây là pattern React 18 được khuyến nghị để subscribe vào bất kỳ nguồn mutable bên ngoài nào theo cách an toàn concurrent. Tài liệu React khuyến nghị rõ ràng nó thay vì `useEffect` + `useState` cho subscription trình duyệt.',
  },
  'react-hooks-055': {
    question:
      '`useInsertionEffect`, `useLayoutEffect`, và `useEffect` chạy theo thứ tự nào so với DOM mutations?',
    options: [
      'useEffect → useLayoutEffect → useInsertionEffect',
      'useInsertionEffect (trước DOM mutations) → useLayoutEffect (sau DOM mutations, trước paint) → useEffect (sau paint, bất đồng bộ)',
      'Cả ba chạy đồng thời song song',
      'useLayoutEffect → useInsertionEffect → useEffect',
    ],
    explanation:
      'React chạy effect theo thứ tự: (1) `useInsertionEffect` — chạy đồng bộ trước DOM mutations, để CSS-in-JS có thể inject style trước khi layout được tính toán. (2) `useLayoutEffect` — chạy đồng bộ sau DOM mutations nhưng trước khi trình duyệt paint; dùng để đọc/ghi DOM layout. (3) `useEffect` — chạy bất đồng bộ sau khi trình duyệt đã paint; cho side effect không liên quan layout như subscription và data fetching. Hiểu thứ tự này rất quan trọng cho tác giả thư viện.',
  },
}
